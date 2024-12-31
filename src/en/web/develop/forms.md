---
title: "Web develop - Forms"
abstract: "Forms, web accessibility dev recommandations"
---

# Web develop - Forms

<p class="lead">Ensure that the user can effectively complete the forms</p>

## Make form fields accessible

**Target:** everyone and especially people with visual impairments, cognitive limitations, experiencing attention difficulties and mobile and tablet users.
**When:** during design and development.

**Description:**

Each form input must be associated with a label identifying the function of the field, the type of data and the expected format.

This label should be visually close to the field so we can easily mentally link them (especially for people using zoom or software magnifier or even mobile users).

Each label must be set in a `label` tag, which is associated to the form field with a` for` attribute, using the `id` attribute of the form element.

In some cases, it seems unnecessary to associate a label to a form field because his role is obvious (e.g. search field with a magnifying glass button next to it, a checkbox to select a row in a grid). In such case provide at least a `title` attribute. A hidden label (using <a href="../../components-examples/accessible-hiding/">accessible hiding</a>) can also be added, which must be associated with the form field.

Note that the `title` attribute positioned on a form field tag acts as a label just like the `aria-label` and `aria-labelledby` attributes (see [ARIA attributes that can save you](../../../articles/aria-attributes-that-can-save-you/)), preferably in this order.
The `autocomplete` attribute must be present and relevant for all fields listed in <a href="https://www.w3.org/TR/WCAG22/#input-purposes">7. Input Purposes for User Interface Components</a>.

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

**Reference <abbr>WCAG</abbr>:**
- <a href="https://www.w3.org/TR/WCAG22/#labels-or-instructions">3.3.2 Labels or Instructions</a>
- <a href="https://www.w3.org/TR/WCAG22/#help">3.3.5 Help</a>
- <a href="https://www.w3.org/TR/WCAG22/#identify-input-purpose">1.3.5 Identify input purpose</a>


## Detect, identify errors and suggest corrections

**Target:** everyone and particularly people with visual impairments, cognitive limitations, reading or attention difficulties and elderly people.
**When:** as of design and during development.

**Description:**

The errors are automatically detected, the user is warned by a page title change, the error of the form field is clearly identified and the error is described with words to the user. If necessary, a correction is suggested.

Finally, the wording of the error messages should be explicit.

For web pages that involve important actions (legal commitment, financial transaction, modification or deletion of important data, response to a test or examination...), the action must be reversible or go through a confirmation step to verify or correct the entry in case of error.

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

**Reference <abbr>WCAG</abbr>:**
- <a href="https://www.w3.org/TR/WCAG22/#error-identification">3.3.1 Error Identification</a>
- <a href="https://www.w3.org/TR/WCAG22/#error-suggestion">3.3.3 Error Suggestion</a>
- <a href="https://www.w3.org/TR/WCAG22/#error-prevention-legal-financial-data">3.3.4 Error Prevention (Legal, Financial, Data)</a>

## Accessible authentification

**Target:** everyone, especially people with cognitive disabilities.
**When:** right from the design and during development.

**Description:**

To be accessible, no step in the authentication process should be based on the user cognitive functions (i.e., memorizing and transcribing a username and password, performing a gesture pattern on a touch screen, solving an enigma), unless that provides at least one of the following:
- An alternative authentication method which does not rely on a cognitive function test - criteria 3.3.8 and 3.3.9
- A mechanism to assist the user in completing the cognitive function test required to authenticate (i.e., password managers to reduce memory need, possibility to copy and paste to reduce the cognitive burden of re-typing) - criteria 3.3.8 and 3.3.9
- A cognitive function test to recognize common objects (images, videos, audios) - criteria 3.3.8 and 3.3.9
- A cognitive function test to identify non-text personal content (images, videos, audios) previously provided to the website by the user - criteria 3.3.8 and 3.3.9

**Good practice:**

Compliance with criterion 3.3.9 (AAA) is based on the non-use in the authentication process of methods based on:
- recognition of current objects (images, video, audio)
- identification of non-textual personal content (images, video, audio) previously supplied to the website by the user

**Checklist:**

For authentication by login and password, make sure:
- the user agent (browser and password management applications) **automatically fills in the "login" and "password" fields**

**or**

- the user can **copy** his login and password from a local source (e.g., password management application) and **paste** them into the corresponding fields on the authentication form or in a command-line interface. The **format requested** by the "login" and "password" fields must be the **same as the copied informations**, to avoid the user having to transcribe (i.e., enter and copy) these informations.

For a 2-factor authentication system (double authentication), make sure:
- the user is not asked to copy a verification code. The user must have at least one of the following **aids**:
  - the possibility of copying and pasting the **verification code** from a password management application, a text message application or a software security key,
  - or allow the user agent to fill in the field automatically.
Note: When a verification code must be received or generated by a second device (e.g., SMS received on a cell phone), the ability to send this verification code to the first device is not to be evaluated in this criterion.

**or**

- the **2-factor authentication** system **does not rely on codes**, but for example on a USB authentication key, a third-party application (which may or may not be on a 2nd device) asking the user to confirm that he is at the origin of the request, or an authentication method proposed by the device operating system.

For an authentication system in which one of the steps is a **captcha**, make sure there is a method that doesn't include a cognitive test (remembering, copying a word, recognizing an image given by the website), unless it's based on object recognition or the identification of non-textual personal content.
- If the two-factor authentication is based on recognition of non-textual personal content, the security conditions must prevent a third party from guessing which image is to be recognized.
- If the user is required to transcribe text (e.g., when creating a password for the first time, which will then be stored in password management software), the possibility of showing the characters entered must be proposed.

**Users' goal:**

Allow users with cognitive disabilities (memory, dyslexia, dyscalculia, limited cognitive abilities) to authenticate.

**Do (AA et AAA):**

**2-factor authentication system**: authentication on a computer's web browser that requires a **verification code received by SMS on the mobile phone**. In most cases, the code can be send to the device, where it can then be copied and pasted, for example by copying and pasting it into an email on the phone and sending it to the computer, or by using a clipboard application.

A website uses a **login/password** for login authentication (satisfying Success Criteria "1.3.5 Purpose of entry" and Success Criteria "4.1.2: Name, role, value"). The user's browser or an integrated third-party password manager extension can identify the function of these 2 fields and **automatically fill** in the login and password.

A website uses **WebAuthn** to allow the user **authenticate with their device rather than their login and password**. The user's device can use any available method. The most common methods on laptops and phones are facial recognition, fingerprints and PIN (Personal Identification Number). The website does not require any particular use; it is assumed that the user will choose the most appropriate method.

A website offers the possibility of connecting with a third-party provider using the **OAuth** method.

A website requiring two-factor authentication offers several options for the second factor, including a USB key-based method where the user simply clicks a button to enter a code valid for a limited time.

A website requiring two-factor authentication displays a QR code that can be scanned by an app on the user's device to confirm identity.

A website requiring two-factor authentication sends a notification to the user's device. The user must use their device's authentication mechanism (e.g., user-defined PIN, fingerprint, facial recognition) to confirm their identity.

**Don't:**

Examples that prevent a user from entering a password or verification code in the same format in which it was initially created:
- A form that asks the user to enter the last 4 digits of their username into 4 different fields.
  Exception: the user can copy the code and paste it into the first field. The characters will be automatically distributed into the following fields.

**Reference <abbr>WCAG</abbr>:**
- <a href="https://www.w3.org/TR/WCAG22/#accessible-authentication-minimum">3.3.8 Accessible Authentication (Minimum)</a>
- <a href="https://www.w3.org/TR/WCAG22/#accessible-authentication-enhanced">3.3.9 Accessible Authentication (Enhanced)</a>