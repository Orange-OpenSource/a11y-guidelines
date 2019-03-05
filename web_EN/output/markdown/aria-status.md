# Use <abbr>ARIA</abbr> for status messages

<script>$(document).ready(function () {
    setBreadcrumb([
            {"label":"Articles techniques", "url":"techniques.html"},
            {"label":"Use <abbr>ARIA</abbr> for status messages"}
        ]);
});</script>
 ## Status message and accessibility
The WCAG 2.1 criterion <a href="https://www.w3.org/TR/WCAG21/#status-messages">4.1.3 Status Messages</a> requires that important informations for the user, which do not induce a change of context (no opening of a new window, no focus on the content, no modification of the content or the viewport), are seen via properties and roles (<abbr>ARIA</abbr>) by anyone using <abbr>AT</abbr> without taking focus on the message.

## Some examples of status messages

When a user presses a search button, the content of the page is updated asynchronously to add the search results displayed in a region below the search button. The message "XX results found" is at the top of this new content. A screen reader will have to announce "XX results have been found". In this case, the information provided to the user is important and must be given immediately, so we will use the role "alert".

`<h2 role="alert ">
    5 results were found
</h2>`

When a user has chosen an item, presses an "Add to cart" button, a textual mention "1 item added, 4 items in the cart" appears temporarily near the shopping cart icon. A screen reader will have to announce "an item added to the cart, the cart currently contains 4 items". Here, the information to push to the user is less crucial than before so we will use the role "status".

`<p role="status ">
    an item added to the cart, the cart currently contains 4 items
</p>`

Once a user has activated a process for applying complex search filters, an icon symbolizing "pending": an hourglass, a clock… appears on the screen. The screen reader announces "Application busy, load in progress".

`<div role ="alert">
    Application busy, load in progress
</div>`

An application displays a progress bar to indicate the status of an update of a content item. The screen reader provides intermittent progress announcements: "10% updated" then "20% updated"…

`<div role ="progressbar" aria-valuenow="20" aria-valued="0" aria-valuemax="100">
20% updated
</div>`

After a user submits a form, text is added to the existing form as follows: "Your form has been submitted successfully." The screen reader announces the same message.

`<div role ="alert">
    Your form has been submitted successfully
</div>`

When a user fills out a form but some of the data entered is incorrect, text is added at the top of the existing form indicating "XX errors in the form". The screen reader announces the message "Form not sent because XX validation errors" (this does not dispense with giving details of the error for each incorrectly filled field). The error information in the form is important and urgent, immediate, so we use the role "alertdialog".

`<div role="alertdialog" aria-labelledby="errors">
   <p id="errors"> Form not sent because 2 validation errors</p>
</div>`

Once a user, in an online document management application, has inserted a new document in a directory, a toast notification (popup feedback message) displays the message "The YYY document is saved in the XXX directory" , which is also read by a screen reader.

`<p role="status">
    The YYY document is saved in the XXX directory
</p>`

In an online mailing application, the user chosen from a recipient list to add / remove a new e-mail address, this recipient's e-mail address is displayed on the screen following the one already chosen for this message. The screen reader will have to announce the addition of this new email address. It should be understood that the text, email address, added / removed to the list may not be visible on the screen for some users of <abbr>AT</abbr>. So, in order to give context to screen reader users, additional information is needed in the form of content not displayed but read by speech synthesis. As new information is added in a meaningful order and old information may disappear (another example could be a chat or chatbot), we use, here, the role "log".

`<div role="log">
  <Ol>
    <li> XX@YY.ZZ has been added </ li>
    <li> XX@YY.ZZ has been removed </ li>
  </ol>
</div>`

Sometimes we want to provide messages only for screen readers, without having to display them visually. In this case too, you need to use these <abbr>ARIA</abbr> roles to push the message to <abbr>AT</abbr> and in particular to the screen readers without displaying them on the screen.

## Status messages that are not!

The basic rule is that if the focus is moved or the context is returned to users of <abbr>AT</abbr>, it is not a status message:
- a modal that requires a user action, on which the focus is set
- during the appearance / disappearance of content following a user interaction which is also announced to <abbr>AT</abbr> (for example, the screen reader is announced "open / closed" for a menu, an accordion)
- for a panel system, whose selected tab is announced at <abbr>AT</abbr>

&nbsp;
    
<!--  This file is part of a11y-guidelines | Our vision of mobile & web accessibility guidelines and best practices, with valid/invalid examples.
 Copyright (C) 2016  Orange SA
 See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). -->