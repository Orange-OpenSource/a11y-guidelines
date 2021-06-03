---
title: "Forms"
---

# Forms

<p class="lead">Ensure that the user can effectively complete the forms</p>




## Make form fields accessible

**Target:** everyone and especially people with visual impairments, cognitive limitations, experiencing attention difficulties and mobile and tablet users.  
**When:** during design and development.

**Description:** 

Each form input must be associated with a label identifying the function of the field, the type of data and the expected format. 

This label should be visually close to the field so we can easily mentally link them (especially for people using zoom or software magnifier or even mobile users).

Each label must be set in a `label` tag, which is associated to the form field with a` for` attribute, using the `id` attribute of the form element.

In some cases, it seems unnecessary to associate a label to a form field (e.g. search field with a magnifying glass button next to it). In such case you can provide a hidden label (using <a href="../../components-examples/accessible-hiding/">accessible hiding</a>), it will not be displayed on the screen but it will be associated with the form field programmatically so screen readers can vocalize it.
The `title` attribute set on a form element can also be used like a label. You can also use the `aria-label` and `aria-labelledby` attributes (see [ARIA attributes that can save you](../../../articles/aria-attributes-that-can-save-you)), preferably in this order.
The `autocomplete` attribute must be present and relevant for all fields listed in <a href="https://www.w3.org/TR/WCAG21/#input-purposes">7. Input Purposes for User Interface Components</a>.

**Checklist:**

For any form element, the label should be visually close to the field it identifies.

Align all labels to the left when the number of characters separating the longest label from the shortest label does not exceed 6 characters & nbsp ;; beyond that, align all the labels on the right.

If relevant, the fields have an `autocomplete` attribute so that the user can use a list of pre-recorded or auto-complete proposals.

For radio and check box buttons, in addition to the label tag you can use other tags (`title`, `aria-labelledby`, `aria-label` or, in some cases, `fieldset` and `legend`). 

For required fields, this should be specified in the label using an image, a text symbol (`*` for example) or text and / or the `aria-required` property.

**Users’ goal:**

Not meeting this requirement is a blocking point for all users using speech synthesis. For mobile users and motor deficient it allows to click on the form elements more easily.
For fields with auto-completion, this avoids users input errors.

**Do:**  
![screenshot of a valid form](../../images/formulaire.png)
  
&nbsp;

**Don’t:**  
![screenshot of a form with a missing label](../../images/formulaire2.png)


**Example of an accessible form:**
  
See [the example of an accessible form](../../components-examples/forms/) for more details.

**Reference <abbr>WCAG</abbr>&nbsp;:**  
- <a href="https://www.w3.org/TR/WCAG21/#labels-or-instructions">3.3.2 Labels or Instructions</a>
- <a href="https://www.w3.org/TR/WCAG21/#help">3.3.5 Help</a>
- <a href="https://www.w3.org/TR/WCAG21/#identify-input-purpose">1.3.5 Identify input purpose</a>





## Detect, identify errors and suggest corrections
 
**Target:** everyone and particularly people with visual impairments, cognitive limitations, reading or attention difficulties and elderly people.  
**When:** as of design and during development.

**Description:**

The errors are automatically detected, the user is warned by a page title change, the error of the form field is clearly identified and the error is described with words to the user. If necessary, a correction is suggested.

Finally, the wording of the error messages should be explicit.

For web pages that involve important actions (legal commitment, financial transaction, modification or deletion of important data, response to a test or examination ...), the action must be reversible or go through a confirmation step to verify or correct the entry in case of error.

**Checklist:**

Identifying the invalid field, as well as displaying a suggestion of correction can be dynamically added to the `label` tag, but also to the `title` tag or `aria-label` and `aria-labelledby` tags (see [ARIA attributes that can save you](../../../articles/aria-attributes-that-can-save-you/)) depending on the needs.

**Users’ goal:**

Guide users when errors happen to improve the understanding and help them correct the errors, especially for internet beginners, elderly people and cognitively deficient.

**Do:**  
![screenshot of a form that displays relevant error messages](../../images/formulaire-ok.png)  

**Don’t:**  
![screenshot of a form displaying irrelevant error messages](../../images/formulaire-ko.png)


**Example of an accessible form:**

See [the accessible form example](../../components-examples/forms/) for more details.

**Reference <abbr>WCAG</abbr>&nbsp;:**  
- <a href="https://www.w3.org/TR/WCAG21/#error-identification">3.3.1 Error Identification</a>
- <a href="https://www.w3.org/TR/WCAG21/#error-suggestion">3.3.3 Error Suggestion</a>
- <a href="https://www.w3.org/TR/WCAG21/#error-prevention-legal-financial-data">3.3.4 Error Prevention (Legal, Financial, Data)</a>

## Disable form elements

The `disabled` attribute is used to disable form elements

```html
<button disabled>Delete</button>
<input type="text" name="address" disabled>
```

If a `<fieldset>` is disabled, the descendant form controls are all disabled.

```html
<fieldset id="group" disabled> 
    <input name="foo"> 
    <input type="checkbox" name="bar"> 
    <select name="values"> 
        <option value="1">Value 1</option>
        <option value="2">Value 2</option>
        <option value="3">Value 3</option>        
    </select>
</fieldset>
```