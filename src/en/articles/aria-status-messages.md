---
title: "Use ARIA for status messages"
abstract: "Status messages, how to with ARIA"
titleBeforeTag: true
date: "2019-02-21"
update:"2026-03-12"
tags:
  - web
  - intermediate
---

## Status message and accessibility
The WCAG 2.1 criterion <a href="https://www.w3.org/TR/WCAG22/#status-messages">4.1.3 Status Messages</a> requires that important informations for the user, which do not induce a significant change of context (no opening of a new window, no focus on the content, no modification of the content or the viewport), are seen via <abbr>ARIA</abbr> (Accessible Rich Internet Application) properties and roles by anyone using <abbr>AT</abbr> (Assistive Technology) without taking focus on the message.

## Some examples of status messages

When a user presses a search button, the content of the page is updated asynchronously to add the search results displayed in a region below the search button. The message "XX results found" is at the top of this new content. A screen reader will have to announce "XX results have been found". In this case, the information provided to the user is important and must be given immediately, so we will use the role `"alert"`.

```html
<h2 role="alert">
    5 results were found
</h2>
```

When a user has chosen an item, presses an "Add to cart" button, a textual mention "1 item added, 4 items in the cart" appears temporarily near the shopping cart icon. A screen reader will have to announce "an item added to the cart, the cart currently contains 4 items".
Here, the information to push to the user is less crucial than before so we will use the role `"status"`.

```html
<p role="status">
    an item added to the cart, the cart currently contains 4 items
</p>
```

During the application of a complex search filter, an icon symbolizing "pending"—an hourglass, a clock, etc.—appears on the screen. The screen reader announces "Application busy, loading." Again, this information is important for the user; the `"alert"` role will be used.

```html
<div role="alert">
    Application busy, load in progress
</div>
```

An application displays a progress bar to indicate the status of an update of a content item. The screen reader provides intermittent progress announcements: "10% updated" then "20% updated"…

```html
<div role="progressbar" aria-valuenow="20" aria-valued="0" aria-valuemax="100">
    20% updated
</div>
```

After a form is submitted, a confirmation message is added to the existing form: "Your form has been successfully submitted." The screen reader announces this important message using the `"alert"` role.

```html
<div role="alert">
    Your form has been submitted successfully
</div>
```

When a user fills out a form but some of the data entered is incorrect, text is added at the top of the existing form indicating "XX errors in the form". The screen reader announces the message "Form not sent because XX validation errors" (this does not dispense with giving details of the error for each incorrectly filled field).
The error information in the form is important and urgent, immediate, so we use the role `"alertdialog"`.

```html
<div role="alertdialog" aria-labelledby="errors">
   <p id="errors">Form not sent because 2 validation errors</p>
</div>
```

In an online document management application, the user inserts a new document into a directory, a toast notification (popup feedback message) displays the message "The document YYY has been successfully saved in the directory XXX", which is also read by a screen reader without any sense of urgency thanks to the `"status"` role.

```html
<p role="status">
    The YYY document is saved in the XXX directory
</p>
```

In an online mailing application, the user chooses to add (or remove) an email address from a recipient list. This email address is added (or removed) to the existing list of addresses. The screen reader must announce the addition (or removal) of this new email address.
It's important to understand that the email address added (or removed) to the list is not visible to some <abbr>AT</abbr> users, particularly screen readers. To provide context for these users, additional information is needed in the form of text content that is not displayed but read aloud by the text-to-speech function.
As new information is added in a meaningful order and old information may disappear (another example could be a chat or chatbot), we use, here, the role `"log"`.

```html
<div role="log">
  <ol>
    <li>XX@YY.ZZ has been added</li>
    <li>XX@YY.ZZ has been removed</li>
  </ol>
</div>
```

Sometimes we want to provide messages only for screen readers, without having to display them visually. In this case too, you need to use these <abbr>ARIA</abbr> roles to push the message to <abbr>AT</abbr> and in particular to the screen readers without displaying them on the screen.

## Status messages that are not!

The basic rule is that if the focus is moved or the context is returned to users of <abbr>AT</abbr>, it is not a status message:

- a modal that requires a user action, on which the focus is automatically set
- during the appearance / disappearance of content following a user interaction which is also announced to <abbr>AT</abbr> (for example, the screen reader is announced "open / closed" for a menu, an accordion)
- for a panel system, whose selected tab is announced at <abbr>AT</abbr>
: