# Make form fields accessible

<script>$(document).ready(function () {
    setBreadcrumb([
        {"label":"Themed WCAG index - Developers", "url": "./incontournables.html#dev"},
        {"label":"Make form fields accessible"}
    ]);
});</script>

<span data-menuitem="incontournables"></span>

**Target: **everyone and especially people with visual impairments, cognitive limitations, experiencing attention difficulties and mobile and tablet users.  
**When: **during design and development.

**Description: ** 

Each form input must be associated with a label identifying the function of the field, the type of data and the expected format. 

This label should be visually close to the field so we can easily mentally link them (especially for people using zoom or software magnifier or even mobile users).

Each label must be set in a `label` tag, which is associated to the form field with a` for` attribute, using the `id` attribute of the form element.

In some cases, it seems unnecessary to associate a label to a form field (e.g. search field with a magnifying glass button next to it). In such case you can provide a hidden label (using <a href="./exemples/masquage/index.html">accessible hiding</a>), it will not be displayed on the screen but it will be associated with the form field programmatically so screen readers can vocalize it.
The `title` attribute set on a form element can also be used like a label. You can also use the `aria-label` and `aria-labelledby` attributes (see [ARIA attributes that can save you](./label-ledby-describedby.html)), preferably in this order.
The `autocompleted` attribute must be present and relevant for all fields listed in <a href="https://www.w3.org/TR/WCAG21/#input-purposes">7. Input Purposes for User Interface Components</a>.

**Checklist: **

For any form element, the label should be visually close to the field it identifies.

Align all labels to the left when the number of characters separating the longest label from the shortest label does not exceed 6 characters & nbsp ;; beyond that, align all the labels on the right.

If relevant, the fields have an `autocompleted` attribute so that the user can use a list of pre-recorded or auto-complete proposals.

For radio and check box buttons, in addition to the label tag you can use other tags (`title`, `aria-labelledby`, `aria-label` or, in some cases, `fieldset` and `legend`). 

For required fields, this should be specified in the label using an image, a text symbol (`*` for example) or text and / or the `aria-required` property.

**Users’ goal: **

Not meeting this requirement is a blocking point for all users using speech synthesis. For mobile users and motor deficient it allows to click on the form elements more easily.
For fields with auto-completion, this avoids users input errors.

**Do: **  
![screenshot of a valid form](images/formulaire.png)
  
&nbsp;

**Don’t: **  
![screenshot of a form with a missing label](images/formulaire2.png)

&nbsp;  

**Example of an accessible form: **
  
See [the example of an accessible form](./exemples/formulaire/index.html) for more details.

**Reference <abbr>WCAG</abbr>&nbsp;:**  
- <a href="https://www.w3.org/TR/WCAG21/#labels-or-instructions">3.3.2 Labels or Instructions</a>
- <a href="https://www.w3.org/TR/WCAG21/#help">3.3.5 Help</a>
- <a href="https://www.w3.org/TR/WCAG21/#identify-input-purpose">1.3.5 Identify input purpose</a>


<!--  This file is part of a11y-guidelines | Our vision of mobile & web accessibility guidelines and best practices, with valid/invalid examples.
 Copyright (C) 2016  Orange SA
 See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). -->