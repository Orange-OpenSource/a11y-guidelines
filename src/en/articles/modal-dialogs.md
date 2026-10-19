---
title: "Modal dialogs: understanding accessibility best practices in 2026"
abstract: "Ubiquitous on the web, modal dialogs are among the most complex components to implement correctly. HTML, ARIA, focus management: let's take a look at current practices."
titleBeforeTag: true
date: "2026-09-24"
tags:
  - web
  - advanced
---

Modal dialogs have become an essential component of modern web interfaces. They are commonly used for forms, action confirmations, settings, authentication, and displaying additional content.

However, implementing them raises a number of accessibility challenges.

A modal dialog is more than simply displaying an element on top of the page content. Opening one changes the user's interaction context: keyboard focus must be managed correctly, assistive technologies must be able to identify the dialog, and the content behind it must be made inert while the dialog is open.

For a long time, developers had to implement many of these mechanisms themselves using JavaScript and ARIA. The HTML `<dialog>` element now provides built-in mechanisms that simplify the creation of modal dialogs, but its behaviour and accessibility still need to be verified.

This article provides an overview of current best practices for modal dialogs:

- distinguishing modal dialogs from non-modal dialogs;
- exploring the features provided by the HTML `<dialog>` element;
- understanding the role of ARIA attributes;
- understanding the challenges involved in managing focus;
- avoiding common mistakes identified during accessibility audits.

## What Is a Modal Dialog?

A modal dialog is a dialog that temporarily suspends interaction with the rest of the page and requires the user to interact with it before returning to their previous task.

A modal dialog may be used, for example, to:

- confirm a deletion;
- display a form;
- request authentication;
- present settings;
- display important information.

While the dialog is open, the content outside it becomes inert.

It is important to distinguish between two concepts that are often confused:

- a dialog;
- a modal dialog.

A non-modal dialog can coexist with the rest of the interface, which remains available for interaction. By contrast, a modal dialog temporarily suspends interaction with the rest of the page until it is closed.

This distinction is reflected in both HTML specifications and ARIA design patterns.

## Introducing the HTML `<dialog>` Element

For many years, creating a modal dialog primarily involved using generic elements such as `<div>` elements, enhanced with JavaScript and ARIA attributes.

HTML now provides a dedicated element for dialogs: `<dialog>`.

Minimal example:

```html
<dialog>
  <h2>Delete this item?</h2>

  <p>
    This action cannot be undone.
  </p>

  <button>Cancel</button>
  <button>Delete</button>
</dialog>
```

This example shows only the HTML structure of the dialog. It does not define how the dialog is opened or how the buttons behave.

The element can be controlled with JavaScript using several methods, including `show()`, `showModal()`, and `close()`. The method used to open the dialog determines, in particular, whether it is modal.

When opened with `showModal()`, the browser natively handles several important behaviours: placing the dialog in the top layer, making the content outside it inert, and handling certain keyboard interactions.

This native support reduces the amount of code required compared with a fully custom implementation.

However, using `<dialog>` does not eliminate the need to consider the component's accessibility. The content, labels, available actions, focus management, and closing conditions all remain important aspects to consider during development.

## Opening a Dialog

The `<dialog>` element can be opened in two ways, depending on whether a modal or non-modal dialog is required.

### Non-modal dialog

```javascript
dialog.show();
```

The `show()` method opens a non-modal dialog. The rest of the document remains interactive, allowing users to continue interacting with content outside the dialog.

### Modal dialog

```javascript
dialog.showModal();
```

The `showModal()` method opens a dialog modally. It places the dialog in the browser's top layer and makes the rest of the document inert.

There is therefore no need to make the content outside the dialog inert manually when using `showModal()`.

The choice of method depends on the intended behaviour: use `show()` for a non-modal dialog and `showModal()` for a modal dialog.

### Complete example

A `<dialog>` element can be opened by activating a button and then closed using a button inside the dialog.

```html
<button type="button" id="open-dialog">
  Show details
</button>

<dialog id="details-dialog" aria-labelledby="details-title">
  <h2 id="details-title">Additional information</h2>

  <p>Here is the information you requested.</p>

  <button type="button" id="close-dialog">
    Close
  </button>
</dialog>
```

```javascript
const dialog = document.querySelector("#details-dialog");

document.querySelector("#open-dialog").addEventListener("click", () => {
  dialog.showModal();
});

document.querySelector("#close-dialog").addEventListener("click", () => {
  dialog.close();
});
```

This example illustrates how to open and close a modal dialog. The browser natively manages initial focus placement and attempts to restore focus when the dialog closes.

However, these behaviours still need to be verified: the initial focus target must be appropriate for the dialog's content, and focus must return to a position that allows users to resume their previous task when the dialog closes. If the previously focused element is no longer available, or if the expected interaction flow differs from the native behaviour, custom focus management may be necessary.

## Closing a Dialog

The HTML `<dialog>` element provides several built-in ways to close a dialog. The appropriate method depends on the intended behaviour and how the application needs to handle the closing request.

### Closing directly with `close()`

The `close()` method closes the dialog. It can accept a string that is then exposed through the `returnValue` property.

```javascript
dialog.close();
```

The dialog closes immediately, and the closure cannot be canceled by an event handler. The `close` event fires after the dialog has closed.

### Requesting closure with `requestClose()`

The `requestClose()` method requests that the dialog be closed. It fires the `cancel` event, allowing code to prevent the dialog from closing by calling `preventDefault()`. If the event is not canceled, the dialog closes and the `close` event is then fired.

```javascript
dialog.requestClose();
```

This method is particularly useful when a closing request needs to be intercepted, for example to ask the user to confirm before discarding their input.

Unlike `close()`, `requestClose()` does not necessarily close the dialog: a `cancel` event handler can prevent it from closing. However, this method ignores the `closedby` attribute, meaning it can close the dialog even when the attribute is set to `none`.

**Browser support:** `requestClose()` is supported in recent browsers but may be unavailable in older environments. Check compatibility with the browsers targeted by the project before using it.

### Closing a dialog with a form

A form inside a dialog can use `method="dialog"`. Submitting the form then closes the dialog without sending the data to a server. The value of the activated submit button can be retrieved through the dialog's `returnValue` property.

```html
<form method="dialog">
  <button value="cancel">Cancel</button>
  <button value="confirm">Confirm</button>
</form>
```

This mechanism makes it possible, for example, to distinguish between the choices made by the user. The calling code can then check `dialog.returnValue` to determine how to proceed.

### Handling closing interactions

The closing behaviour should be consistent with the dialog's purpose and the interaction flow it provides. A visible, keyboard-accessible close button remains an explicit way to dismiss the dialog.

The `closedby` attribute specifies which user actions can close a dialog. It distinguishes between three types of action:

- **Light dismiss**, for example when the user clicks or taps outside the dialog;
- **Platform-specific close requests**, such as pressing `Escape` on a desktop computer or using certain back gestures on a mobile device;
- **Developer-defined mechanisms**, such as a button that calls `close()` or the submission of a form using `method="dialog"`.

The attribute supports three values:

- `any`: allows all three types of action;
- `closerequest`: allows platform-specific close requests and developer-defined mechanisms, but not light dismiss;
- `none`: disables automatic closing triggered by user actions. The dialog can still be closed through a developer-defined mechanism, such as a button that calls `close()`.

If the attribute is absent or invalid, its behaviour depends on how the dialog was opened: a dialog opened with `showModal()` behaves as if `closedby="closerequest"` were set, whereas a dialog opened in another way behaves as if `closedby="none"` were set.

The `closedby` attribute does not prevent programmatic calls to `close()`. Developer-defined closing mechanisms therefore remain available even when automatic closing triggered by user actions is disabled.

**Status and browser support:** the `closedby` attribute is part of the HTML standard, but browser support still varies. The `requestClose()` method may also be unavailable in some older environments. Check compatibility with the browsers targeted by the project before relying on these features to define closing behaviour.

## What `<dialog>` Actually Provides

When opened with `showModal()`, the HTML `<dialog>` element provides several built-in mechanisms that are useful for creating modal dialogs.

The `::backdrop` pseudo-element can be used to customise the area behind the dialog.

For example, the background can be darkened as follows:

```css
dialog::backdrop {
  background-color: rgb(0 0 0 / 60%);
}
```

The `::backdrop` pseudo-element is not an HTML element that needs to be added to the document. It represents the area behind an element placed in the top layer, including a `<dialog>` opened with `showModal()`.

These built-in mechanisms do not eliminate the need to check the component's accessibility. Its content, accessible name, initial focus placement, and closing mechanisms must all be appropriate. Keyboard navigation also requires particular attention: making the content outside the dialog inert does not, by itself, guarantee that keyboard tabbing remains confined to the dialog.

## Focus Management

When a `<dialog>` element is opened with `showModal()`, the browser moves focus inside the dialog. However, an appropriate starting point must still be chosen based on the content and the intended interaction flow.

The `autofocus` attribute can be used to specify which element should receive focus when the dialog opens. Focus can also be adjusted programmatically when the context warrants it.

The choice of initial focus target depends, in particular, on the nature of the content:

- **Short, interactive dialog:** focus can be placed on the first relevant control, such as a form field or a button that allows the user to continue.
- **Dialog containing long text or a complex structure:** it may be preferable to place focus on a static element at the beginning of the content, such as the heading or an introductory paragraph. This element can be given `tabindex="-1"` so that it can receive programmatic focus without being added to the normal tab order.
- **Dialog requiring a decision that is difficult to reverse:** placing focus on the least destructive action can help prevent accidental confirmation, when appropriate to the context.

These strategies are described in the *WAI-ARIA Authoring Practices Guide* (APG). They are design recommendations, not universal rules: the appropriate choice depends on the content, the context, and the user's interaction flow.

## Keyboard Navigation

### With the HTML `<dialog>` Element

When a dialog is opened with `showModal()`, the browser makes the content outside the dialog inert. Keyboard focus is restricted to the dialog's contents and the browser's own UI, such as the address bar.

However, unlike the keyboard interaction pattern described by the WAI-ARIA Authoring Practices Guide (APG), native `<dialog>` behaviour does not necessarily cycle focus from the last focusable element back to the first, or from the first to the last. Pressing `Tab` or `Shift + Tab` at either end of the dialog's tab sequence may move focus to the browser's own UI instead.

This distinction is important when assessing keyboard accessibility. Do not assume that a native dialog requires a custom JavaScript focus-trapping mechanism simply because focus does not cycle within the dialog. Test the behaviour in the target browsers and with the assistive technologies in scope, and determine whether any additional handling is necessary.

### The Pattern Recommended by the WAI-ARIA APG

The *Dialog (Modal) Pattern* in the *WAI-ARIA Authoring Practices Guide* (APG) recommends the following keyboard interactions:

- `Tab` moves focus to the next focusable element. From the last element, focus moves back to the first.
- `Shift + Tab` moves focus to the previous focusable element. From the first element, focus moves back to the last.
- `Escape` closes the dialog.

This pattern describes the expected keyboard interaction for a modal dialog. It is particularly relevant when implementing a custom modal dialog, for which developers must provide the required behaviour themselves.

For a native HTML dialog, the browser provides several built-in keyboard and focus-management mechanisms. Closing with `Escape` can depend on the dialog's configuration, including the `closedby` attribute where supported.

### What About a Custom Modal Dialog?

A modal dialog built using generic elements, such as a `<div>`, does not automatically benefit from the native mechanisms provided by `<dialog>`. Developers must implement and test the necessary behaviours, including:

- moving focus inside the dialog when it opens;
- preventing interaction with the content outside the dialog while it is modal, using `inert` where appropriate;
- managing keyboard navigation according to the chosen interaction pattern, including keeping focus within the dialog and cycling through its focusable elements;
- handling keyboard closing requests, particularly with `Escape`;
- restoring focus when the dialog closes, either to the triggering element or to another position consistent with the task the user needs to resume;
- ensuring that assistive technologies can correctly identify the dialog, including by defining its role, accessible name and, where appropriate, its modal state.

The `aria-hidden="true"` attribute can hide content from assistive technologies, but it does not prevent interaction and therefore cannot replace either `inert` or focus management. Care must also be taken not to hide an element that contains focus, either directly or through one of its ancestors.

Finally, a modal dialog must provide an explicit, visible way to close it, such as a “Close” or “Cancel” button. The `Escape` key provides an additional way to dismiss the dialog when this behaviour is supported; it does not replace the button.

## HTML and ARIA

A modal dialog can be built using the HTML `<dialog>` element or generic elements such as a `<div>`. These two approaches do not provide the same built-in mechanisms.

For a custom modal dialog, ARIA attributes can be used to communicate its role and accessible name to assistive technologies:

- `role="dialog"` identifies the dialog;
- `aria-modal="true"` indicates that it is modal;
- `aria-labelledby` or `aria-label` provides it with an accessible name;
- `aria-describedby` can associate it with an additional description when appropriate.

**Warning: `aria-modal="true"` does not, by itself, make a dialog modal.** This attribute communicates the dialog's modal state to assistive technologies, but it does not prevent interaction with content outside the dialog or keep focus within it. These behaviours must be implemented separately.

This attribute should therefore only be used when the dialog is genuinely modal: the implementation must prevent interaction with content outside the dialog, and that content must be visually obscured or dimmed. The [WAI-ARIA APG explains this precaution in detail](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/).

With the HTML `<dialog>` element, the `dialog` role is provided natively. When the element is opened with `showModal()`, the browser provides the native mechanisms for modality and exposes the modal state to assistive technologies. Explicitly adding `aria-modal="true"` is therefore generally unnecessary.

The `aria-labelledby` attribute remains useful for associating the dialog with its visible title and defining its accessible name. Whether to use `aria-describedby` depends on the content and requires particular care, especially when it contains multiple paragraphs or semantic structures.

More generally, native HTML semantics should be preferred, and redundant ARIA attributes should be avoided unless there is a specific need.

## `dialog` and `alertdialog`

Not all modal dialogs serve the same purpose. The ARIA role should reflect the purpose of the component, rather than simply the importance of the action being presented.

### The `dialog` Role

The `dialog` role is appropriate for interactions that require the user to engage with a dialog separate from the rest of the interface, such as a form, settings, information display, or configuration changes.

### The `alertdialog` Role

The `alertdialog` role is intended for modal dialogs that interrupt the usual interaction flow to communicate an important message and obtain a response from the user.

**Its interruptive nature calls for restraint.** It should not be chosen simply because an action is important or irreversible, but when the situation genuinely requires the user's immediate attention and a response.

It may be appropriate, for example, for an action confirmation or an error message that requires a response. However, a deletion confirmation does not, by itself, justify using `alertdialog`: the choice depends on the context and whether interrupting the user is genuinely necessary.

The `alertdialog` role allows assistive technologies and browsers to identify this type of dialog and potentially handle it differently. However, its announcement may vary across environments.

### Which Role Should You Choose?

The choice therefore depends primarily on the dialog's purpose and how it fits into the user's interaction flow.

In both cases, the dialog must have an accessible name, for example by referencing its title with `aria-labelledby`. For `alertdialog`, the APG pattern also specifies `aria-describedby` to associate the alert message with the dialog. This message should be concise enough to be easily understood when announced.

## A Common Mistake: `aria-describedby`

The `aria-describedby` attribute is sometimes added to modal dialogs by default to associate all their content with their accessible description.

This approach is not always appropriate. When a dialog contains multiple paragraphs, lists, or other semantic structures, associating a container that encompasses all the content can cause assistive technologies to present it as a single block of text, without necessarily conveying its structure in that announcement.

The *WAI-ARIA Authoring Practices Guide* (APG) recommends omitting `aria-describedby` when the content is complex or structured and a single announcement could make it difficult to understand.

However, the attribute can be useful for a dialog containing a short descriptive message, allowing that message to be associated with the dialog.

**Key takeaway:** use `aria-labelledby` to provide the dialog's accessible name, for example by referencing its title. Reserve `aria-describedby` for descriptions whose announcement as a whole provides genuinely useful information.

## A Common Mistake: Adding `tabindex` to `<dialog>`

The `tabindex` attribute must not be used on the HTML `<dialog>` element itself. The dialog does not need to be made focusable for its contents to receive focus.

However, when a dialog contains long text or a complex structure, it may be appropriate to place initial focus on a static element inside it, such as its heading or the beginning of its content.

This element can then be given `tabindex="-1"`, making it programmatically focusable without adding it to the sequential tab order.

For example:

```html
<dialog id="details">
  <h2 id="details-title" tabindex="-1">
    Additional information
  </h2>

  <p>
    This content presents several pieces of information
    that users should be able to explore separately.
  </p>

  <button type="button">Close</button>
</dialog>
```

Focus can then be explicitly moved to the heading when the dialog opens:

```javascript
const dialog = document.querySelector("#details");
const dialogTitle = document.querySelector("#details-title");

dialog.showModal();
dialogTitle.focus();
```

The `showModal()` method triggers the browser's native initial focus placement behaviour. The explicit call to `focus()` allows the heading to be chosen as the starting point, which can make long or complex content easier to understand and explore.

Moving focus in this way is not always necessary: the starting point should be appropriate to the content and the purpose of the modal dialog.

## Restoring Focus

When a modal dialog closes, focus should return to a position that makes sense for the next step in the user's interaction flow.

In general, focus returns to the element that opened the dialog. If that element has been removed from the DOM or is no longer relevant, for example after an item on the page has been deleted, focus should move to an appropriate target that allows the user to continue their task.

When a `<dialog>` element is opened using `showModal()`, the browser attempts to restore focus when the dialog closes. This native behaviour does not eliminate the need to check the result when the page content has changed while the dialog was open. For a custom modal dialog, focus restoration must be implemented explicitly.

For a custom modal dialog, the previously focused element can be stored before the dialog opens, and focus can be restored when it closes if that element is still available:

```javascript
let previousFocus = null;

function openModal() {
  previousFocus = document.activeElement;
  // Open the modal and move focus inside it.
}

function closeModal() {
  // Close the modal and restore interaction with the page.

  if (
    previousFocus instanceof HTMLElement &&
    previousFocus.isConnected
  ) {
    previousFocus.focus();
  } else {
    // Move focus to an appropriate target
    // for the next step in the interaction flow.
  }
}
```

This example illustrates the principle of storing and restoring focus. The `isConnected` property checks whether the element is still part of the DOM, but it does not guarantee that the element is visible or can actually receive focus.

In a real implementation, the result must therefore be checked, and an appropriate fallback target provided if necessary. Opening and closing the dialog, managing focus, and restoring interaction with the content outside it must all be handled according to the chosen implementation.

## Common Issues Identified During Accessibility Audits

Several issues recur regularly during modal dialog accessibility audits.

### Using a `<div>` Without Implementing the Required Behaviour

A custom modal dialog must provide the semantics of a dialog and implement the expected behaviours, including focus management, keyboard navigation and making the content outside the dialog inert. A visually correct appearance does not guarantee accessible behaviour.

### Forgetting to Provide an Accessible Name

The dialog must have an appropriate accessible name, usually provided by its title using `aria-labelledby`, or by `aria-label` when that approach is appropriate.

### Poor Focus Management

Focus must move to an appropriate target when the dialog opens, support consistent navigation throughout the interaction, and return to an appropriate position when the dialog closes.

### Failing to Provide an Explicit Way to Close the Dialog

A modal dialog should provide a visible, keyboard-accessible way to close it, such as a “Close” or “Cancel” button. The `Escape` key or clicking outside the dialog can supplement this mechanism, but should not be the only available options.

### Using a Modal When It Is Not Necessary

A modal temporarily interrupts interaction with the rest of the page. Depending on the use case, presenting the content directly within the page may be simpler and less intrusive.

## Conclusion

Modal dialogs illustrate the complexity of certain interface components: behind an often simple appearance lie challenges involving semantics, focus management, keyboard navigation and interaction with assistive technologies.

When used with `showModal()`, the HTML `<dialog>` element provides several native mechanisms that make it easier to create accessible modal dialogs. However, it is still necessary to choose an appropriate initial focus target, check that focus is restored correctly, provide an accessible name, and consider whether a modal presentation is actually necessary.

Understanding what native HTML provides, what ARIA attributes describe, and what developers still need to take responsibility for helps create more robust and interoperable interfaces.

**An accessible modal dialog is more than a correctly marked-up component: it must enable everyone to understand the dialog, interact with it, and resume their task smoothly.**

## References

<ul>
  <li><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog">MDN – HTML <code>dialog</code> element</a></li>
  <li><a href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement/showModal">MDN – HTMLDialogElement: showModal() method</a></li>
  <li><a href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement/closedBy">MDN – HTMLDialogElement: closedBy property</a></li>
  <li><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/tabindex">MDN – HTML <code>tabindex</code> global attribute</a></li>
  <li><a href="https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/">WAI-ARIA Authoring Practices Guide – Dialog (Modal) Pattern</a></li>
  <li><a href="https://www.w3.org/WAI/ARIA/apg/patterns/alertdialog/">WAI-ARIA Authoring Practices Guide – Alert and Message Dialogs Pattern</a></li>
  <li><a href="https://html.spec.whatwg.org/multipage/interactive-elements.html#the-dialog-element">WHATWG – HTML Living Standard: The <code>dialog</code> element</a></li>
  <li><a href="https://www.w3.org/TR/wai-aria-1.2/#dialog">W3C – WAI-ARIA 1.2: dialog role</a></li>
  <li><a href="https://caniuse.com/?search=closedby">Can I Use – Browser support for the <code>closedby</code> attribute</a></li>
</ul>
