---
title: "Form part 1 - Structure your form"
abstract: "Making an accessible form, part 1: labeling your fields and structuring your form"
date: "2022-12-12"
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

We will see, in this first part, how to properly build your form, then, in a second part, the submission of a form and the validation steps.

We are going to develop a registration form in order to see all the subtleties to make a form accessible.

In this example, we used <a href="http://boosted.orange.com/" target="_blank">Boosted library</a>. This allows you to obtain forms whose design complies with the Orange charter.

## Label form fields

Labels should describe the role of each field on the form. In order for all users to have access to the same information, it is important that these labels are correctly associated with their form fields. To achieve this there are several techniques.

### The label element

The preferred solution is to use the <code>label</code> element. It is best supported by assistive technologies. There are two ways to use this <code>label</code> element:

<ul>
   <li>explicitly link the element
     <code>label</code>
     with its field by filling in an attribute
     <code>for</code>
     which will match with the <code>id</code>
     of the form field it is associated with</li>
   <li>implicitly link the element
     <code>label</code>
     with its field, in this case, the element
     <code>label</code>
     will be used as a container surrounding the form field. The first solution is recommended.</li>
</ul>

#### Example 

Example of explicitly linked form labels :

<div class="col-md-8">
  <form id="formulaire" class="border border-secondary p-3 my-2">
    <div class="mb-2">
      <label for="email" class="form-label">E-mail</label>
      <input type="text" class="form-control" id="email"/>
    </div>
    <div class="mb-2">
      <label for="name" class="form-label">Last Name</label>
      <input type="text" class="form-control" id="name"/>
    </div>
    <div class="mb-2">
      <label for="firstname" class="form-label">Fist Name</label>
      <input type="text" class="form-control" id="firstname"/>
    </div>
  </form>
</div>

Sample code :

<pre>
  <code class="html">
  &lt;form id="formulaire" class="border border-secondary p-3 my-2"&gt;
    &lt;div class="mb-2"&gt;
        &lt;label for="email" class="form-label"&gt;E-mail&lt;/label&gt;
        &lt;input type="text" class="form-control" id="email"/&gt;
    &lt;/div&gt;
    &lt;div class="mb-2"&gt;
      &lt;label for="name" class="form-label"&gt;Last Name&lt;/label&gt;
      &lt;input type="text" class="form-control" id="name"/&gt;
    &lt;/div&gt;
    &lt;div class="mb-2"&gt;
      &lt;label for="firstname" class="form-label"&gt;Fist Name&lt;/label&gt;
      &lt;input type="text" class="form-control" id="firstname"/&gt;
    &lt;/div&gt;
  &lt;/form&gt;
  </code>
</pre>

### Hide labels in an accessible way

In some cases, it may be useful to hide the label visually. Attention, labels can be hidden if and only if the field function is sufficiently clear and understandable in its context: for example, a search field next to a magnifying glass icon.

Even though the label is visually hidden, it should still be accessible to assistive technologies.

This method consists of using a CSS class (using the <code>visually-hidden</code> class from Bootstrap/Boosted) allowing accessible hiding. Using accessible masking allows the element to be hidden from view, while retaining its vocalization by assistive tools or technologies (AT). Be careful, do not use classic CSS masking (<code>display: none;</code> or <code>visibility: hidden;</code>) because the element will also be hidden for screen readers.

See the example at <a href="../../../web/components-examples/accessible-hiding/" target="_blank">accessible masking example</a> for more information.

#### Example

For example, we can use accessible hiding for a search field, if a button with the search label, or a magnifying glass image, is next to the field. Thus, the field label is visually hidden to avoid redundancy.

Sample code:

<pre>
  <code class="html">
    &lt;label for="recherche" class="visually-hidden"&gt;Search: &lt;/label&gt;
    &lt;input type="text" name="search" id="search"&gt;
    &lt;button type="submit"&gt;Search&lt;/button&gt;
  </code>
</pre> 

### ARIA attributes

It is also possible to use the <code>aria-label</code> and <code>aria-labelledby</code> attributes to label form fields, as these attributes are well supported by browsers and in recent assistive technology:

<ul>
   <li>The <code>aria-labelledby</code> attribute is used to specify the <code>id</code> of an element present in the code that will be used to label the field.
   </li>
   <li>The <code>aria-label</code> attribute allows you to directly specify a label in the form of a character string. Please note that the information will not be given visually.</li>
</ul>

A possible example:

<pre>
  <code class="html">
    &lt;input type="text" name="search" aria-labelledby="search"&gt;
    &lt;button id="search" type="submit" class="icon-loup" aria-label="Search"&gt;&lt;/button&gt;
  </code>
</pre>

### The title attribute

The <code>title</code> attribute is used to label a form field in an accessible manner. It will also trigger the display of a tooltip when hovering over the element with the mouse, good thing for the cognitively impaired, digital novices.

Be careful, we might be tempted to use the <code>placeholder</code> attribute. This attribute is not robust enough, indeed:

<ul>
   <li>the <code>placeholder</code> text that displays in the field is usually not high enough contrast;
   </li>
   <li>it is erased when entering the content in the control (causing difficulties in the event of a deficiency
     cognitive);
   </li>
   <li>the <code>placeholder</code> is not always read by assistive technology;</li>
   <li>it makes corrections difficult in case of error if there is no label displayed;</li>
</ul>

On the other hand, the <code>placeholder</code> can serve as a guide, an aid to fill in the field without this information being absolutely necessary (for example, proposing a valid expected value): do not hesitate to use for this type of need.

## Associating related controls

When necessary, it is important to group fields of the same nature, this will make the whole form more understandable.
Most of the time, we group our radio buttons, or our checkboxes, in order to associate a header with these elements.

To group them, we use the <code>fieldset</code> element, which will have as its first child the <code>legend</code> element that will serve as the header for our grouped fields.

### Example

In our registration form, we can add the gender of our user. For this, we will implement radio buttons, and group them with the header <strong>Gender</strong>

<div class="col-md-8">
  <form id="formulaire3" class="border border-secondary p-3 my-2">
    [...]
    <fieldset>
      <legend>Gender</legend>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="M" value="M">
        <label class="form-check-label" for="M">Mr</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="Mme" value="Mme">
        <label class="form-check-label" for="Mme">Mrs</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="Non-binaire" value="No-binary" >
        <label class="form-check-label" for="Non-binaire">no-binary</label>
      </div>
    </fieldset>
  </form>
</div>

Sample code&nbsp;: 

<pre>
  <code class="html">
    &lt;div class="col-md-8"&gt;
    &lt;form id="formulaire3" class="border border-secondary p-3 my-2"&gt;
      [...]
      &lt;fieldset&gt;
        &lt;legend&gt;Gender&lt;/legend&gt;
        &lt;div class="form-check form-check-inline"&gt;
          &lt;input class="form-check-input" type="radio" name="inlineRadioOptions" id="M" value="M"&gt;
          &lt;label class="form-check-label" for="M"&gt;Mr&lt;/label&gt;
        &lt;/div&gt;
        &lt;div class="form-check form-check-inline"&gt;
          &lt;input class="form-check-input" type="radio" name="inlineRadioOptions" id="Mme" value="Mme"&gt;
          &lt;label class="form-check-label" for="Mme"&gt;Mrs&lt;/label&gt;
        &lt;/div&gt;
        &lt;div class="form-check form-check-inline"&gt;
          &lt;input class="form-check-input" type="radio" name="inlineRadioOptions" id="Non-binaire" value="No-binary" &gt;
          &lt;label class="form-check-label" for="Non-binaire"&gt;no-binary&lt;/label&gt;
        &lt;/div&gt;
      &lt;/fieldset&gt;
    &lt;/form&gt;
  &lt;/div&gt;
  </code>
</pre>

## Specify the expected type or format

To help the user, it is also important to specify the expected type or format when necessary. For example, for a date of birth, you must, if necessary, indicate the input format (dd/mm/yyyy).

To inform the user, one can:

<ul>
   <li>provide instructions in label</li>
   <li>use the <code>aria-labelledby</code> or <code>aria-describedby</code> attribute</li>
</ul>


### Example

For our registration form, we are going to add a password field, specifying the format that we want.

When adding a password field, it is also important to allow the possibility of displaying or hiding the password. This allows users with motor, attention or cognitive disorders to avoid possible input errors.

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
    <div id="passwordHelpBlock" class="form-text">
        Your password must contain at least 6 characters.
    </div>
  </form>
</div>

Sample code&nbsp;: 

<pre>
  <code class="html">
  &lt;div class="col-md-8"&gt;
    &lt;form id="formulaire4" class="border border-secondary p-3 my-2"&gt;
      &lt;label for="password" class="form-label"&gt;Password&lt;/label&gt;
      &lt;div class="mb-2 input-group"&gt;
        &lt;input type="password" class="form-control" id="password" aria-describedby="passwordHelpBlock"/&gt;
        &lt;span class="input-group-text"&gt;
          &lt;button type="button" class="btn btn-icon btn-no-outline btn-sm" id="password_visibility" title="Show password" &gt;
            &lt;svg aria-hidden="true" focusable="false" fill="currentColor" xmlns="http://www.w3.org/2000/svg"&gt;
              [...]
            &lt;/svg&gt;
          &lt;/button&gt;
        &lt;/span&gt;
      &lt;/div&gt;
      &lt;div id="passwordHelpBlock" class="form-text"&gt;
          Your password must contain at least 6 characters.
        &lt;/div&gt;
    &lt;/form&gt;
  &lt;/div&gt;
  </code>
</pre>

## Complete example

The complete example with all the elements that we have reviewed. In the second part, we will see how to validate the form and manage error messages.
For the rest of the exercise and to complete our registration form, we have added fields for the address (address, city, postal code).

<div class="col-md-8">
  <form id="formulaire_final" class="border border-secondary p-3 my-2">
    <div class="mb-2">
      <label for="email_final" class="form-label">E-mail</label>
      <input type="text" class="form-control" id="email_final"/>
    </div>
    <label for="password_final" class="form-label">Password</label>
    <div class="mb-2 input-group">
      <input type="password" class="form-control" id="password_final" aria-describedby="passwordHelpBlock_final"/>
      <span class="input-group-text">
        <button type="button" class="btn btn-icon btn-no-outline btn-sm" id="password_visibility_final" title="Show Password" >
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
    <div id="passwordHelpBlock_final" class="form-text">
        Your password must contain at least 6 characters.
    </div>
    <div class="mb-2">
      <label for="name_final" class="form-label">Last Name</label>
      <input type="text" class="form-control" id="name_final"/>
    </div>
    <div class="mb-2">
      <label for="firstname_final" class="form-label">First Name</label>
      <input type="text" class="form-control" id="firstname_final"/>
    </div>
    <fieldset>
      <legend>Gender</legend>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="inlineRadioOptions_final" id="M_final" value="M">
        <label class="form-check-label" for="M_final">Mr</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="inlineRadioOptions_final" id="Mme_final" value="Mme">
        <label class="form-check-label" for="Mme_final">Mrs</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="inlineRadioOptions_final" id="Non-binaire_final" value="Non-binaire" >
        <label class="form-check-label" for="Non-binaire_final">Non-binary</label>
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
      <label for="cp_final" class="form-label">Zip code</label>
      <input type="text" class="form-control" id="cp_final"/>
    </div>
  </form>
</div>

The final code : 
<pre>
  <code class="html">
  &lt;div class="col-md-8"&gt;
    &lt;form id="formulaire_final" class="border border-secondary p-3 my-2"&gt;
      &lt;div class="mb-2"&gt;
        &lt;label for="email_final" class="form-label"&gt;E-mail&lt;/label&gt;
        &lt;input type="text" class="form-control" id="email_final"/&gt;
      &lt;/div&gt;
      &lt;label for="password_final" class="form-label"&gt;Password &lt;/label&gt;
      &lt;div class="mb-2 input-group"&gt;
        &lt;input type="password" class="form-control" id="password_final" aria-describedby="passwordHelpBlock_final"/&gt;
        &lt;span class="input-group-text"&gt;
          &lt;button type="button" class="btn btn-icon btn-no-outline btn-sm" id="password_visibility_final" title="Show password" &gt;
            &lt;svg aria-hidden="true" focusable="false" fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 1000 1000"&gt;&lt;/svg&gt;
          &lt;/button&gt;
        &lt;/span&gt;
      &lt;/div&gt;
      &lt;div id="passwordHelpBlock_final" class="form-text"&gt;
          Your password must contain at least 6 characters.
      &lt;/div&gt;
      &lt;div class="mb-2"&gt;
        &lt;label for="name_final" class="form-label"&gt;Last Name&lt;/label&gt;
        &lt;input type="text" class="form-control" id="name_final"/&gt;
      &lt;/div&gt;
      &lt;div class="mb-2"&gt;
        &lt;label for="firstname_final" class="form-label"&gt;First Name&lt;/label&gt;
        &lt;input type="text" class="form-control" id="firstname_final"/&gt;
      &lt;/div&gt;
      &lt;fieldset&gt;
        &lt;legend&gt;Gender&lt;/legend&gt;
        &lt;div class="form-check form-check-inline"&gt;
          &lt;input class="form-check-input" type="radio" name="inlineRadioOptions_final" id="M_final" value="M"&gt;
          &lt;label class="form-check-label" for="M_final"&gt;Mr&lt;/label&gt;
        &lt;/div&gt;
        &lt;div class="form-check form-check-inline"&gt;
          &lt;input class="form-check-input" type="radio" name="inlineRadioOptions_final" id="Mme_final" value="Mme"&gt;
          &lt;label class="form-check-label" for="Mme_final"&gt;Mrs&lt;/label&gt;
        &lt;/div&gt;
        &lt;div class="form-check form-check-inline"&gt;
          &lt;input class="form-check-input" type="radio" name="inlineRadioOptions_final" id="Non-binaire_final" value="No-binary" &gt;
          &lt;label class="form-check-label" for="Non-binaire_final"&gt;No-binary&lt;/label&gt;
        &lt;/div&gt;
      &lt;/fieldset&gt;
      &lt;div class="mb-2"&gt;
        &lt;label for="adresse_final" class="form-label"&gt;Address&lt;/label&gt;
        &lt;input type="text" class="form-control" id="adresse_final"/&gt;
      &lt;/div&gt;
      &lt;div class="mb-2"&gt;
        &lt;label for="adresse2_final" class="form-label"&gt;Additional address&lt;/label&gt;
        &lt;input type="text" class="form-control" id="adresse2_final"/&gt;
      &lt;/div&gt;
      &lt;div class="mb-2"&gt;
        &lt;label for="ville_final" class="form-label"&gt;City&lt;/label&gt;
        &lt;input type="text" class="form-control" id="ville_final"/&gt;
      &lt;/div&gt;
      &lt;div class="mb-2"&gt;
        &lt;label for="cp_final" class="form-label"&gt;Zip Code&lt;/label&gt;
        &lt;input type="text" class="form-control" id="cp_final"/&gt;
      &lt;/div&gt;
    &lt;/form&gt;
  &lt;/div&gt;
  </code>
</pre>
