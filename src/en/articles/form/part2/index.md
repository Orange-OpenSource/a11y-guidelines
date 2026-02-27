---
title: "Form part 2 - Submit your form"
abstract: "Making a form accessible, part 2: Submitting your form, required field, error handling and the importance of the autocomplete attribute"
date: "2023-02-21"
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

We saw in the first part how to <a href="../part1/">structure your form</a> while respecting accessibility criteria.

In this second part, we will make it easier for the user to complete the form fields and set up an error management system when validating our form.

We will continue to base our examples on our Part 1 registration form.

In this example, we are using <a href="http://boosted.orange.com/">the Boosted library</a> which is the web version of our <a href="https://system.design.orange.com/">Orange Design System (ODS)</a>. This allows you to obtain forms whose design complies with the Orange charter.

## Submitting a form

### Required Field

In forms, it is common for fields to be required. These fields should be made clear to users.

To achieve this, several solutions exist:

<ul>
   <li>Programmatically, you must use the <code>required</code> or <code>aria-required="true"</code> attribute in the <code>input</code> tag of our fields, using these attributes will allow assistive technologies (AT) to indicate that the field is required.</li>
   <li>Users who do not use assistive technologies must also be informed that the field is mandatory. Add a visual identification that is not based solely on color (for example, by explicitly mentioning 'mandatory'). If this identification is not made via explicit text, for example, an asterisk (*), the meaning must be explained, such as, for example, 'All mandatory fields are marked with an *', which will be placed at the beginning of the form.</li>
</ul>

#### Example

In our registration example, several fields can be considered mandatory in order to validate your registration: email, password, first name and last name.

They must therefore be clearly indicated to users.

<div class="col-md-8">
  <form id="formulaire" class="border border-secondary p-3 my-2">
    <p>All mandatory fields are marked with an *</p>
    <div class="mb-2">
      <label for="email" class="form-label">Email * </label>
      <input type="text" class="form-control" id="email" required/>
    </div>
    <label for="password" class="form-label">Password *</label>
    <div class="mb-2 input-group">
      <input type="password" class="form-control" id="password" required aria-describedby="passwordHelpBlock"/>
      <span class="input-group-text">
        <button type="button" class="btn btn-icon btn-outline-secondary btn-sm" id="password_visibility" title="Show password" >
          <svg aria-hidden="true" focusable="false" fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 1000 1000">
            <defs>
              <style>
                .cls-1 {
                  fill-rule: evenodd;
                }
              </style>
            </defs>
            <path class="cls-1" d="M513.081,250.129c-4.017,0-8.041-.129-12.081-0.129s-8.064.129-12.081,0.129C301.335,250.129,111.491,382.343,50,500c61.491,117.656,249.335,249.871,436.919,249.871,4.017,0,8.04.129,12.081,0.129s8.064-.129,12.081-0.129C698.665,749.871,888.51,617.656,950,500,888.51,382.343,700.665,250.129,513.081,250.129ZM498.62,680a180,180,0,1,1,180-180A180,180,0,0,1,498.62,680Zm-378.2-179.963c29.782-41.595,77.4-84.081,132.916-117.816a545.263,545.263,0,0,1,55.918-29.695,239.848,239.848,0,0,0,.78,295.942,537.117,537.117,0,0,1-57.553-30.6C197.469,584.226,150.153,541.734,120.417,500.034Zm626.25,117.747a544.106,544.106,0,0,1-60.236,31.655,239.784,239.784,0,0,0-.761-299.823,536.07,536.07,0,0,1,61.852,32.517c55.01,33.642,102.326,76.136,132.061,117.836C849.8,541.564,802.185,584.045,746.667,617.781ZM597.931,453.153a48.227,48.227,0,1,1-62.472-56.6A109.731,109.731,0,1,0,597.931,453.153Z" />
          </svg>
        </button>
      </span>
    </div>
    <p id="passwordHelpBlock" class="form-text mb-0">
      Your password must contain at least 6 characters.
    </p>
    <div class="mb-2">
      <label for="name" class="form-label">Last Name *</label>
      <input type="text" class="form-control" id="name" required/>
    </div>
    <div class="mb-2">
      <label for="firstname" class="form-label">First Name * </label>
      <input type="text" class="form-control" id="firstname" required/>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</div>

Example code:

```html
<div class="col-md-8">
  <form id="formulaire" class="border border-secondary p-3 my-2">
    <p>All mandatory fields are marked with an *</p>
    <div class="mb-2">
      <label for="email" class="form-label">Email <span class="important">*</span> </label>
      <input type="text" class="form-control" id="email" />
    </div>
    <label for="password" class="form-label">Password *</label>
    <div class="mb-2 input-group">
      <input type="password" class="form-control" id="password" required aria-describedby="passwordHelpBlock" />
      <span class="input-group-text">
        <button type="button" class="btn btn-icon btn-outline-secondary btn-sm" id="password_visibility"
          title="Show password">
          <svg aria-hidden="true" focusable="false" fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="20"
            height="20" viewBox="0 0 1000 1000"></svg>
        </button>
      </span>
    </div>
    <p id="passwordHelpBlock" class="form-text mb-0">
      Your password must contain at least 6 characters.
    </p>
    <div class="mb-2">
      <label for="name" class="form-label">Last Name *</label>
      <input type="text" class="form-control" id="name" required />
    </div>
    <div class="mb-2">
      <label for="firstname" class="form-label">First Name * </label>
      <input type="text" class="form-control" id="firstname" required />
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</div>
```

### Error management

During validation, if mandatory fields are not filled in, or if the format of the data entered is not valid, the user must be informed.

To achieve this, you need:

<ul>
   <li>Use the <code>aria-invalid="true"</code> attribute to indicate an input error to AT users</li>
   <li>Display explicit error messages for all other users</li>
   <li>If necessary, suggest corrections</li>
</ul>

If error messages prevent the validation of the form, rather than listing the errors at the beginning of the form in a banner, we can, for each field in error, warn the user (see above).

For each field in error, the messages must be explicit, which means:

<ul>
   <li>Be clear and unambiguous ('invalid field' is not enough, specify which field is invalid and, if possible, how it is invalid)</li>
   <li>Be specific and relevant</li>
   <li>Provide suggestions for corrections and ways to correct</li>
   <li>Make sure error messages are in plain text. Avoid ALL‑CAPS</li>
   <li>Don't just use visual cues or just color to point out errors.</li>
   <li>Leave the send button active in all circumstances. Some websites enable the submit button only if the form is filled out correctly, it's a bad idea.</li>
   <li>Provide clear, specific instructions to help users complete the fields.</li>
   <li>Make sure errors are visually identifiable on the web page.</li>
</ul>

#### Example

In our registration example, several fields may be in error:

<ul>
   <li>For mandatory fields, it will be necessary to specify which mandatory field is in error</li>
   <li>For fields requiring a specific data format, such as email, in the error message, we will specify the field in error and provide correction assistance</li>
</ul>

<div class="col-md-8">
  <form id="formulaire_2" class="border border-secondary p-3 my-2">
    <p>All required fields are marked with *</p>
    <div class="mb-2">
      <label for="email_2" class="form-label">Email *</label>
      <input type="text" class="form-control" id="email_2" required/>
      <div id="erroremailDiv" class="alert alert-danger alert-sm d-none">
        <span class="alert-icon"><span class="visually-hidden">Error</span></span>
        <p id="erroremail1">The email field is required</p>
      </div>
      <div id="erroremailDiv2" class="alert alert-danger alert-sm d-none">
        <span class="alert-icon"><span class="visually-hidden">Error</span></span>
        <p id="erroremail2">Please fill in a valid Email (name@gmail.com)</p>
      </div>
    </div>
    <label for="password_2" class="form-label">Password *</label>
    <div class="mb-2 input-group">
      <input type="password" class="form-control" id="password_2" aria-describedby="passwordHelpBlock_2" required/>
      <span class="input-group-text">
        <button type="button" class="btn btn-icon btn-outline-secondary btn-sm" id="password_visibility_2" title="Show password" >
          <svg aria-hidden="true" focusable="false" fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 1000 1000">
            <defs>
              <style>
                .cls-1 {
                  fill-rule: evenodd;
                }
              </style>
            </defs>
            <path class="cls-1" d="M513.081,250.129c-4.017,0-8.041-.129-12.081-0.129s-8.064.129-12.081,0.129C301.335,250.129,111.491,382.343,50,500c61.491,117.656,249.335,249.871,436.919,249.871,4.017,0,8.04.129,12.081,0.129s8.064-.129,12.081-0.129C698.665,749.871,888.51,617.656,950,500,888.51,382.343,700.665,250.129,513.081,250.129ZM498.62,680a180,180,0,1,1,180-180A180,180,0,0,1,498.62,680Zm-378.2-179.963c29.782-41.595,77.4-84.081,132.916-117.816a545.263,545.263,0,0,1,55.918-29.695,239.848,239.848,0,0,0,.78,295.942,537.117,537.117,0,0,1-57.553-30.6C197.469,584.226,150.153,541.734,120.417,500.034Zm626.25,117.747a544.106,544.106,0,0,1-60.236,31.655,239.784,239.784,0,0,0-.761-299.823,536.07,536.07,0,0,1,61.852,32.517c55.01,33.642,102.326,76.136,132.061,117.836C849.8,541.564,802.185,584.045,746.667,617.781ZM597.931,453.153a48.227,48.227,0,1,1-62.472-56.6A109.731,109.731,0,1,0,597.931,453.153Z" />
          </svg>
        </button>
      </span>
    </div>
    <div id="errorpasswordDiv" class="alert alert-danger alert-sm d-none">
        <span class="alert-icon"><span class="visually-hidden">Error</span></span>
        <p id="errorpassword1">The Password field is required</p>
      </div>
      <div id="errorpasswordDiv2" class="alert alert-danger alert-sm d-none">
        <span class="alert-icon"><span class="visually-hidden">Error</span></span>
        <p id="errorpassword2">Please enter a valid password (minimum 6 characters)</p>
      </div>
    <p id="passwordHelpBlock_2" class="form-text mb-0">
      Your password must contain at least 6 characters.
    </p>
    <div class="mb-2">
      <label for="name_2" class="form-label">Last Name *</label>
      <input type="text" class="form-control" id="name_2" required/>
      <div id="errorname" class="alert alert-danger alert-sm d-none">
        <span class="alert-icon"><span class="visually-hidden">Error</span></span>
        <p id="errorname1">The Last Name field is required</p>
      </div>
    </div>
    <div class="mb-2">
      <label for="firstname_2" class="form-label">First Name *</label>
      <input type="text" class="form-control" id="firstname_2" required/>
      <div id="errorfirstname" class="alert alert-danger alert-sm d-none">
        <span class="alert-icon"><span class="visually-hidden">Error</span></span>
        <p id="errorfirstname1">The First Name field is required</p>
      </div>
    </div>
    <fieldset>
      <legend>Returning customer?</legend>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="inlineRadioOptions_2" id="yes_2" value="yes" checked>
        <label class="form-check-label" for="yes_2">Yes</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="inlineRadioOptions_2" id="no_2" value="no">
        <label class="form-check-label" for="no_2">No</label>
      </div>
    </fieldset>
    <div class="mb-2">
      <label for="adresse_2" class="form-label">Address</label>
      <input type="text" class="form-control" id="adresse_2"/>
    </div>
    <div class="mb-2">
      <label for="adresse2_2" class="form-label">Additional address</label>
      <input type="text" class="form-control" id="adresse2_2"/>
    </div>
    <div class="mb-2">
      <label for="ville_2" class="form-label">City</label>
      <input type="text" class="form-control" id="ville_2"/>
    </div>
    <div class="mb-2">
      <label for="cp_2" class="form-label">Zip Code</label>
      <input type="text" class="form-control" id="cp_2"/>
    </div>
     <button id="submit" class="btn btn-primary">Submit</button>
     <div id="alertsuccess" class="alert alert-success d-none" role="alert">
      <span class="alert-icon"><span class="visually-hidden">Success</span></span>
      <p>The form has been successfully validated.</p>
    </div>

  </form>
</div>

In the example above:

<ul>
   <li>Mandatory fields that are not completed have relevant and unique error messages (example: The email field is mandatory).</li>
   <li>Fields with an invalid entry have a specific message that gives suggestions for correction (example: Please enter a valid Email (lastnamefirstname@gmail.com)).</li>
   <li>Error messages are linked to the field using the <code>aria-describedby</code> or <code>aria-labelledby</code> attribute, which will allow assistive technologies to render the information.</li>
   <li>The keyboard focus is put on the first field in error in order to be able to rescan the whole form.</li>
</ul>

### Using the autocomplete attribute

The <code>autocomplete</code> attribute makes it easier to fill in fields that contain personal information. All fields whose type is listed in <a href="https://www.w3.org/TR/WCAG22/#input-purposes">7. Input Purposes for User Interface Components</a> must contain the <code>autocomplete</code> attribute.

In our example the fields below should have an <code>autocomplete</code> attribute:
<ul>
   <li>Email with <span lang="en"><code>autocomplete="email"</code></span></li>
   <li>Password with <span lang="en"><code>autocomplete="new-password"</code></span></li>
   <li>Name with <span lang="en"><code>autocomplete="name"</code></span></li>
   <li>First name with <span lang="en"><code>autocomplete="given-name"</code></span></li>
</ul>

## Complete example


The full HTML and JavaScript code that allowed us to make this accessible registration form.

```html
  <div class="col-md-8">
  <form id="formulaire_2" class="border border-secondary p-3 my-2">
    <p>All required fields are marked with *</p>
    <div class="mb-2">
      <label for="email_2" class="form-label">Email *</label>
      <input type="text" class="form-control" id="email_2" required/>
      <div id="erroremailDiv" class="alert alert-danger alert-sm d-none">
        <span class="alert-icon"><span class="visually-hidden">Error</span></span>
        <p id="erroremail1">The email field is required</p>
      </div>
      <div id="erroremailDiv2" class="alert alert-danger alert-sm d-none">
        <span class="alert-icon"><span class="visually-hidden">Error</span></span>
        <p id="erroremail2">Please fill in a valid Email (name@gmail.com)</p>
      </div>
    </div>
    <label for="password_2" class="form-label">Password *</label>
    <div class="mb-2 input-group">
      <input type="password" class="form-control" id="password_2" aria-describedby="passwordHelpBlock_2" required/>
      <span class="input-group-text">
        <button type="button" class="btn btn-icon btn-outline-secondary btn-sm" id="password_visibility_2" title="Show password" >
          <svg aria-hidden="true" focusable="false" fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 1000 1000">
            <defs>
              <style>
                .cls-1 {
                  fill-rule: evenodd;
                }
              </style>
            </defs>
            <path class="cls-1" d="M513.081,250.129c-4.017,0-8.041-.129-12.081-0.129s-8.064.129-12.081,0.129C301.335,250.129,111.491,382.343,50,500c61.491,117.656,249.335,249.871,436.919,249.871,4.017,0,8.04.129,12.081,0.129s8.064-.129,12.081-0.129C698.665,749.871,888.51,617.656,950,500,888.51,382.343,700.665,250.129,513.081,250.129ZM498.62,680a180,180,0,1,1,180-180A180,180,0,0,1,498.62,680Zm-378.2-179.963c29.782-41.595,77.4-84.081,132.916-117.816a545.263,545.263,0,0,1,55.918-29.695,239.848,239.848,0,0,0,.78,295.942,537.117,537.117,0,0,1-57.553-30.6C197.469,584.226,150.153,541.734,120.417,500.034Zm626.25,117.747a544.106,544.106,0,0,1-60.236,31.655,239.784,239.784,0,0,0-.761-299.823,536.07,536.07,0,0,1,61.852,32.517c55.01,33.642,102.326,76.136,132.061,117.836C849.8,541.564,802.185,584.045,746.667,617.781ZM597.931,453.153a48.227,48.227,0,1,1-62.472-56.6A109.731,109.731,0,1,0,597.931,453.153Z" />
          </svg>
        </button>
      </span>
    </div>
    <div id="errorpasswordDiv" class="alert alert-danger alert-sm d-none">
        <span class="alert-icon"><span class="visually-hidden">Error</span></span>
        <p id="errorpassword1">The Password field is required</p>
      </div>
      <div id="errorpasswordDiv2" class="alert alert-danger alert-sm d-none">
        <span class="alert-icon"><span class="visually-hidden">Error</span></span>
        <p id="errorpassword2">Please enter a valid password (minimum 6 characters)</p>
      </div>
    <p id="passwordHelpBlock_2" class="form-text mb-0">
      Your password must contain at least 6 characters.
    </p>
    <div class="mb-2">
      <label for="name_2" class="form-label">Last Name *</label>
      <input type="text" class="form-control" id="name_2" required/>
      <div id="errorname" class="alert alert-danger alert-sm d-none">
        <span class="alert-icon"><span class="visually-hidden">Error</span></span>
        <p id="errorname1">The Last Name field is required</p>
      </div>
    </div>
    <div class="mb-2">
      <label for="firstname_2" class="form-label">First Name *</label>
      <input type="text" class="form-control" id="firstname_2" required/>
      <div id="errorfirstname" class="alert alert-danger alert-sm d-none">
        <span class="alert-icon"><span class="visually-hidden">Error</span></span>
        <p id="errorfirstname1">The First Name field is required</p>
      </div>
    </div>
    <fieldset>
      <legend>Returning customer?</legend>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="inlineRadioOptions_2" id="yes_2" value="yes" checked>
        <label class="form-check-label" for="yes_2">Yes</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="inlineRadioOptions_2" id="no_2" value="no">
        <label class="form-check-label" for="no_2">No</label>
      </div>
    </fieldset>
    <div class="mb-2">
      <label for="adresse_2" class="form-label">Address</label>
      <input type="text" class="form-control" id="adresse_2"/>
    </div>
    <div class="mb-2">
      <label for="adresse2_2" class="form-label">Additional address</label>
      <input type="text" class="form-control" id="adresse2_2"/>
    </div>
    <div class="mb-2">
      <label for="ville_2" class="form-label">City</label>
      <input type="text" class="form-control" id="ville_2"/>
    </div>
    <div class="mb-2">
      <label for="cp_2" class="form-label">Zip Code</label>
      <input type="text" class="form-control" id="cp_2"/>
    </div>
     <button id="submit" class="btn btn-primary">Submit</button>
     <div id="alertsuccess" class="alert alert-success d-none" role="alert">
      <span class="alert-icon"><span class="visually-hidden">Success</span></span>
      <p>The form has been successfully validated.</p>
    </div>
  </form>
</div>
```

```javascript
document.addEventListener("DOMContentLoaded", function (event) {
  document.getElementById("password_visibility").onclick = function (e) {
    let password = document.getElementById("password");
    if (password.type == "password") {
      password.type = "text";
      this.title = "Hide password";
    } else {
      password.type = "password";
      this.title = "Show password";
    }
  };

  document.getElementById("password_visibility_2").onclick = function (e) {
    let password = document.getElementById("password");
    if (password.type == "password") {
      password.type = "text";
      this.title = "Hide password";
    } else {
      password.type = "password";
      this.title = "Show password";
    }
  };

  document.getElementById("submit").onclick = function (e) {
    e.preventDefault();

    let error = false;

    let email = document.getElementById("email_2");
    let password = document.getElementById("password_2");
    let name = document.getElementById("name_2");
    let firstname = document.getElementById("firstname_2");

    if (firstname.value == "") {
      error = invalid(firstname, "errorfirstname1");
      document.getElementById("errorfirstname").classList.remove("d-none");
    } else {
      valid(firstname);
      document.getElementById("errorfirstname").classList.add("d-none");
    }

    if (name.value == "") {
      error = invalid(name, "errorname1");
      document.getElementById("errorname").classList.remove("d-none");
    } else {
      valid(name);
      document.getElementById("errorname").classList.add("d-none");
    }

    if (password.value == "") {
      error = invalid(password, "errorpassword1 passwordHelpBlock_2");
      document.getElementById("errorpasswordDiv").classList.remove("d-none");
    } else {
      if (password.value.length >= 6) {
        valid(password);
        document.getElementById("errorpasswordDiv").classList.add("d-none");
        document.getElementById("errorpasswordDiv2").classList.add("d-none");
        password.setAttribute("aria-describedby", "passwordHelpBlock_2");
      } else {
        error = invalid(password, "errorpassword2 passwordHelpBlock_2");
        document.getElementById("errorpasswordDiv").classList.add("d-none");
        document.getElementById("errorpasswordDiv2").classList.remove("d-none");
      }
    }
    if (email.value == "") {
      error = invalid(email, "erroremail1");
      document.getElementById("erroremailDiv").classList.remove("d-none");
    } else {
      if (validateEmail(email.value)) {
        valid(email);
        document.getElementById("erroremailDiv").classList.add("d-none");
        document.getElementById("erroremailDiv2").classList.add("d-none");
      } else {
        error = invalid(email, "erroremail2");
        document.getElementById("erroremailDiv").classList.add("d-none");
        document.getElementById("erroremailDiv2").classList.remove("d-none");
      }
    }

    if (error) {
      document.getElementById("alertsuccess").classList.add("d-none");
    } else {
      document.getElementById("alertsuccess").classList.remove("d-none");
    }
  };

  function valid(element) {
    element.setAttribute("aria-invalid", false);
    element.classList.remove("is-invalid");
    element.removeAttribute("aria-describedby");
  }

  function invalid(element, errorDiv) {
    element.setAttribute("aria-invalid", true);
    element.classList.add("is-invalid");
    element.setAttribute("aria-describedby", errorDiv);
    element.focus();
    return true;
  }

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
});
```

## Link to part one

<a href="../part1/">Form part 1 - Structure your form</a>