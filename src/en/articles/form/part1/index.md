---
title: "Form part 1 - Structure your form"
abstract: "Making an accessible form, part 1: labeling your fields and structuring your form"
date: "2022-12-12"
updateDate: "2026-01-01"
tags:
  - web
  - intermediate
  - component
js:
- script.js
titleBeforeTag: true
---

## Introduction

For a form to be accessible to all users, a few rules must be respected during development.

In this first part, we will show how to build your form. In the second part, we will cover form submission and validation.

We will build a registration form to demonstrate the accessibility considerations.

In this example, we used <a href="http://boosted.orange.com/" target="_blank">Boosted library</a>. This allows you to obtain forms whose design complies with the Orange charter.

## Label form fields

Labels should describe the role of each field on the form. In order for all users to have access to the same information, it is important that these labels are correctly associated with their form fields. To achieve this, there are several techniques.

### The label element

The preferred solution is to use the <code>label</code> element. It is best supported by assistive technologies. There are two ways to use this <code>label</code> element:

<ul>
   <li>explicitly link a <code>label</code> to a field by using the for attribute that matches the field's <code>id</code> (best solution),</li>
   <li>implicitly wrap the field with the <code>label</code> element.</li>
</ul>

#### Example

Example of explicitly linked form labels:

<div class="col-md-8">
  <form id="formulaire" class="border border-secondary p-3 my-2">
    <div class="mb-2">
      <label for="email" class="form-label">Email</label>
      <input type="text" class="form-control" id="email"/>
    </div>
    <div class="mb-2">
      <label for="name" class="form-label">Last Name</label>
      <input type="text" class="form-control" id="name"/>
    </div>
    <div class="mb-2">
      <label for="firstname" class="form-label">First Name</label>
      <input type="text" class="form-control" id="firstname"/>
    </div>
  </form>
</div>

Sample code:

```html
  <form id="formulaire" class="border border-secondary p-3 my-2">
    <div class="mb-2">
        <label for="email" class="form-label">Email</label>
        <input type="text" class="form-control" id="email"/>
    </div>
    <div class="mb-2">
      <label for="name" class="form-label">Last Name</label>
      <input type="text" class="form-control" id="name"/>
    </div>
    <div class="mb-2">
      <label for="firstname" class="form-label">First Name</label>
      <input type="text" class="form-control" id="firstname"/>
    </div>
  </form>
```

### Hide labels in an accessible way

In some cases, it may be useful to hide the label visually. Note: labels can be hidden only if the field function is sufficiently clear and understandable in its context: for example, a search field next to a magnifying glass icon.

Even though the label is visually hidden, it should still be accessible to assistive technologies.

This method uses a CSS class (for example, the <code>visually-hidden</code> class from Bootstrap/Boosted) to hide content accessibly. Using accessible hiding keeps the element visually hidden while remaining available to assistive technologies (e.g. spoken by screen readers). Avoid using <code>display:none</code> or <code>visibility:hidden</code>, because these also hide content from screen readers.

See the example at <a href="../../../web/components-examples/accessible-hiding/" target="_blank">accessible masking example</a> for more information.

#### Example

For example, we can use accessible hiding for a search field, if a button with the search label, or a magnifying glass image, is next to the field. Thus, the field label is visually hidden to avoid redundancy.

Sample code:

```html
<label for="search" class="visually-hidden">Search:</label>
<input type="text" name="search" id="search">
<button type="submit">Search</button>
```

### ARIA attributes

It is also possible to use the <code>aria-label</code> and <code>aria-labelledby</code> attributes to label form fields. Support is generally good but varies by assistive technology and browser version, so test with your target assistive technologies (NVDA, JAWS, VoiceOver, TalkBack, etc.) and browsers.

<ul>
   <li>The <code>aria-labelledby</code> attribute is used to specify the <code>id</code> of an element present in the code that will be used to label the field.</li>
   <li>The <code>aria-label</code> attribute allows you to directly specify a label in the form of a character string. Please note that the information will not be given visually.</li>
</ul>

A possible example:

```html
<h2 id="id-search">Rechercher</h2>
<input type="text" name="search" aria-labelledby="id-search">
<button type="submit" class="icon-search" aria-label="Search"></button>
```

### The title attribute

The <code>title</code> attribute can provide a tooltip but is not a reliable substitute for a label. It will also trigger the display of a tooltip when hovering over the element with the mouse, which can help users with cognitive impairments and novice users. In addition, <code>title</code> is often not exposed to keyboard-only users and not consistently read by screen readers.

Never use <code>placeholder</code> as the only label; <code>placeholders</code> are not a replacement for labels and are not reliably read or persistent:

<ul>
   <li>the <code>placeholder</code> text that displays in the field is usually not high enough contrast;
   </li>
   <li>it is erased when entering the content in the control (causing difficulties for users with cognitive impairments);
   </li>
   <li>the <code>placeholder</code> is not always read by assistive technology;</li>
   <li>it makes corrections difficult in case of error if there is no label displayed;</li>
</ul>

On the other hand, the <code>placeholder</code> can serve as a guide, an aid to fill in the field without this information being absolutely necessary (for example, proposing a valid expected value). Use placeholders for such purposes only (as examples), not as labels.

## Associating related controls

When necessary, group fields of the same type. This makes the form easier to understand.
Most of the time, we group our radio buttons, or our checkboxes, in order to associate a header with these elements.

To group them, we use the <code>fieldset</code> element, which will have as its first child the <code>legend</code> element that will serve as the header for our grouped fields.

### Example

In our registration form, we can add the gender of our user. For this, we will implement radio buttons, and group them with the header <strong>Returning client?</strong>

<div class="col-md-8">
  <form id="formulaire3" class="border border-secondary p-3 my-2">
    [...]
    <fieldset>
      <legend>Returning client?</legend>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="yes" value="yes">
        <label class="form-check-label" for="yes">Yes</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="no" value="no">
        <label class="form-check-label" for="no">No</label>
      </div>
    </fieldset>
  </form>
</div>

Sample code:

```html
<div class="col-md-8">
  <form id="formulaire3" class="border border-secondary p-3 my-2">
    [...]
    <fieldset>
      <legend>Returning client?</legend>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="yes" value="yes">
        <label class="form-check-label" for="yes">Yes</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="no" value="no">
        <label class="form-check-label" for="no">No</label>
      </div>
    </fieldset>
  </form>
</div>
```

## Specify the expected type or format

To help the user, it is also important to specify the expected type or format when necessary. For example, indicate the expected input format for a date of birth when needed (e.g. dd/mm/yyyy).

To inform the user, one can:

<ul>
   <li>provide instructions in the label</li>
   <li>use the <code>aria-labelledby</code> or <code>aria-describedby</code> attribute</li>
</ul>


### Example

For our registration form, we are going to add a password field, specifying the format that we want.

When adding a password field, it is also important to allow the possibility of displaying or hiding the password. This helps users with motor, attention, or cognitive impairments avoid input errors.

<div class="col-md-8">
  <form id="formulaire4" class="border border-secondary p-3 my-2">
    <label for="password" class="form-label">Password</label>
    <div class="mb-2 input-group">
      <input type="password" class="form-control" id="password" aria-describedby="passwordHelpBlock"/>
      <span class="input-group-text">
        <button type="button" class="btn btn-icon btn-no-outline btn-sm" id="password_visibility" title="Show password" >
          <svg aria-hidden="true" focusable="false" fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 1000 1000">
            <defs>
              <style>
                .cls-1 {
                  fill-rule: evenodd;
                }
              </style>
            </defs>
            <path id="vision" class="cls-1" d="M513.081,250.129c-4.017,0-8.041-.129-12.081-0.129s-8.064.129-12.081,0.129C301.335,250.129,111.491,382.343,50,500c61.491,117.656,249.335,249.871,436.919,249.871,4.017,0,8.04.129,12.081,0.129s8.064-.129,12.081-0.129C698.665,749.871,888.51,617.656,950,500,888.51,382.343,700.665,250.129,513.081,250.129ZM498.62,680a180,180,0,1,1,180-180A180,180,0,0,1,498.62,680Zm-378.2-179.963c29.782-41.595,77.4-84.081,132.916-117.816a545.263,545.263,0,0,1,55.918-29.695,239.848,239.848,0,0,0,.78,295.942,537.117,537.117,0,0,1-57.553-30.6C197.469,584.226,150.153,541.734,120.417,500.034Zm626.25,117.747a544.106,544.106,0,0,1-60.236,31.655,239.784,239.784,0,0,0-.761-299.823,536.07,536.07,0,0,1,61.852,32.517c55.01,33.642,102.326,76.136,132.061,117.836C849.8,541.564,802.185,584.045,746.667,617.781ZM597.931,453.153a48.227,48.227,0,1,1-62.472-56.6A109.731,109.731,0,1,0,597.931,453.153Z" />
          </svg>
        </button>
      </span>
    </div>
    <p id="passwordHelpBlock" class="form-text mb-0">
      Your password must contain at least 6 characters.
    </p>
  </form>
</div>

Sample code:

```html
<div class="col-md-8">
  <form id="formulaire4" class="border border-secondary p-3 my-2">
    <label for="password" class="form-label">Password</label>
    <div class="mb-2 input-group">
      <input type="password" class="form-control" id="password" aria-describedby="passwordHelpBlock"/>
      <span class="input-group-text">
        <button type="button" class="btn btn-icon btn-no-outline btn-sm" id="password_visibility" title="Show password" >
          <svg aria-hidden="true" focusable="false" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            [...]
          </svg>
        </button>
      </span>
    </div>
    <p id="passwordHelpBlock" class="form-text mb-0">
      Your password must contain at least 6 characters.
    </p>
  </form>
</div>
```

## Complete example

The complete example with all the elements that we have reviewed. In the second part, we will see how to validate the form and manage error messages.
For the rest of the exercise and to complete our registration form, we have added fields for the address (address, city, zip code).

<div class="col-md-8">
  <form id="formulaire_final" class="border border-secondary p-3 my-2">
    <div class="mb-2">
      <label for="email_final" class="form-label">Email</label>
      <input type="text" class="form-control" id="email_final"/>
    </div>
    <label for="password_final" class="form-label">Password</label>
    <div class="mb-2 input-group">
      <input type="password" class="form-control" id="password_final" aria-describedby="passwordHelpBlock_final"/>
      <span class="input-group-text">
        <button type="button" class="btn btn-icon btn-no-outline btn-sm" id="password_visibility_final" title="Show password" >
          <svg aria-hidden="true" focusable="false" fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 1000 1000">
            <defs>
              <style>
                .cls-1 {
                  fill-rule: evenodd;
                }
              </style>
            </defs>
            <path id="vision_final" class="cls-1" d="M513.081,250.129c-4.017,0-8.041-.129-12.081-0.129s-8.064.129-12.081,0.129C301.335,250.129,111.491,382.343,50,500c61.491,117.656,249.335,249.871,436.919,249.871,4.017,0,8.04.129,12.081,0.129s8.064-.129,12.081-0.129C698.665,749.871,888.51,617.656,950,500,888.51,382.343,700.665,250.129,513.081,250.129ZM498.62,680a180,180,0,1,1,180-180A180,180,0,0,1,498.62,680Zm-378.2-179.963c29.782-41.595,77.4-84.081,132.916-117.816a545.263,545.263,0,0,1,55.918-29.695,239.848,239.848,0,0,0,.78,295.942,537.117,537.117,0,0,1-57.553-30.6C197.469,584.226,150.153,541.734,120.417,500.034Zm626.25,117.747a544.106,544.106,0,0,1-60.236,31.655,239.784,239.784,0,0,0-.761-299.823,536.07,536.07,0,0,1,61.852,32.517c55.01,33.642,102.326,76.136,132.061,117.836C849.8,541.564,802.185,584.045,746.667,617.781ZM597.931,453.153a48.227,48.227,0,1,1-62.472-56.6A109.731,109.731,0,1,0,597.931,453.153Z" />
          </svg>
        </button>
      </span>
    </div>
    <p id="passwordHelpBlock_final" class="form-text mb-0">
      Your password must contain at least 6 characters.
    </p>
    <div class="mb-2">
      <label for="name_final" class="form-label">Last Name</label>
      <input type="text" class="form-control" id="name_final"/>
    </div>
    <div class="mb-2">
      <label for="firstname_final" class="form-label">First Name</label>
      <input type="text" class="form-control" id="firstname_final"/>
    </div>
    <fieldset>
      <legend>Returning client?</legend>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="inlineRadioOptions_final" id="yes_final" value="yes">
        <label class="form-check-label" for="yes_final">Yes</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="inlineRadioOptions_final" id="no_final" value="no">
        <label class="form-check-label" for="no_final">No</label>
      </div>
    </fieldset>
    <div class="mb-2">
      <label for="adresse_final" class="form-label">Address</label>
      <input type="text" class="form-control" id="adresse_final"/>
    </div>
    <div class="mb-2">
      <label for="adresse2_final" class="form-label">Additional address</label>
      <input type="text" class="form-control" id="adresse2_final"/>
    </div>
    <div class="mb-2">
      <label for="ville_final" class="form-label">City</label>
      <input type="text" class="form-control" id="ville_final"/>
    </div>
    <div class="mb-2">
      <label for="cp_final" class="form-label">Zip Code</label>
      <input type="text" class="form-control" id="cp_final"/>
    </div>
  </form>
</div>

The final code:

```html
<div class="col-md-8">
  <form id="formulaire_final" class="border border-secondary p-3 my-2">
    <div class="mb-2">
      <label for="email_final" class="form-label">Email</label>
      <input type="text" class="form-control" id="email_final"/>
    </div>
    <label for="password_final" class="form-label">Password</label>
    <div class="mb-2 input-group">
      <input type="password" class="form-control" id="password_final" aria-describedby="passwordHelpBlock_final"/>
      <span class="input-group-text">
        <button type="button" class="btn btn-icon btn-no-outline btn-sm" id="password_visibility_final" title="Show password" >
          <svg aria-hidden="true" focusable="false" fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 1000 1000"></svg>
        </button>
      </span>
    </div>
    <p id="passwordHelpBlock_final" class="form-text mb-0">
      Your password must contain at least 6 characters.
    </p>
    <div class="mb-2">
      <label for="name_final" class="form-label">Last Name</label>
      <input type="text" class="form-control" id="name_final"/>
    </div>
    <div class="mb-2">
      <label for="firstname_final" class="form-label">First Name</label>
      <input type="text" class="form-control" id="firstname_final"/>
    </div>
    <fieldset>
      <legend>Returning client?</legend>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="inlineRadioOptions_final" id="yes_final" value="yes">
        <label class="form-check-label" for="yes_final">Yes</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="inlineRadioOptions_final" id="no_final" value="no">
        <label class="form-check-label" for="no_final">No</label>
      </div>
    </fieldset>
    <div class="mb-2">
      <label for="adresse_final" class="form-label">Address</label>
      <input type="text" class="form-control" id="adresse_final"/>
    </div>
    <div class="mb-2">
      <label for="adresse2_final" class="form-label">Additional address</label>
      <input type="text" class="form-control" id="adresse2_final"/>
    </div>
    <div class="mb-2">
      <label for="ville_final" class="form-label">City</label>
      <input type="text" class="form-control" id="ville_final"/>
    </div>
    <div class="mb-2">
      <label for="cp_final" class="form-label">Zip Code</label>
      <input type="text" class="form-control" id="cp_final"/>
    </div>
  </form>
</div>
```

## Link to part two

<a href="../part2/">Form part 2 - Submit your form</a>