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

A non-modal dialog can coexist with the rest of the interface, which remains available for the user to interact with. By contrast, a modal dialog temporarily suspends interaction with the rest of the page until it is closed.

This distinction is reflected in both the HTML specifications and the ARIA design patterns.

## The Introduction of the HTML `<dialog>` Element

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

Browser support should be checked if the project targets older browsers.

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

