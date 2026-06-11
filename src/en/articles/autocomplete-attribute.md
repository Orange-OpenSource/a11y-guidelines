---
title: "The HTML autocomplete attribute: understanding and correctly using form autofill"
abstract: "Behind a simple HTML attribute lies a powerful mechanism: helping browsers understand what the user needs to enter."
titleBeforeTag: true
date: "2026-04-27"
tags:
  - web
  - advanced
---

Forms are at the heart of the user experience on the web: registration, login, payment… They are everywhere.
However, filling them out can be an obstacle, especially for people with disabilities. The accessibility of forms is therefore a key challenge.

Among the often overlooked mechanisms, the HTML `autocomplete` attribute plays a crucial role.
It allows browsers and password managers to understand **the type of information expected in a form field**.

When used correctly, it helps to:

* speed up data entry;
* reduce errors;
* improve the user experience;
* and **meet accessibility requirements**.

This article provides an overview of this often misunderstood attribute: its role, its impact on accessibility, its syntax, and best practices for using it effectively.

## Introduction to the `autocomplete` attribute

The `autocomplete` attribute can be used on:

* the `<form>` element
* certain form elements like `<input>`, `<textarea>`, or `<select>`.

It indicates to the browser **the nature of the data expected in a field**, in order to facilitate its automatic completion.

Simple example:

```html
<label for="email">Email address</label>
<input type="email" id="email" name="email" autocomplete="email">
```

In this example, the value `email` tells the browser that the field expects an email address.

The browser can then suggest:

* values previously entered,
* data stored in the user's profile,
* or information from a password manager.

The HTML specification defines a **precise list of standardized values** (or `autofill tokens`), corresponding to different types of information.

## Impact of autocomplete on accessibility

The `autocomplete` attribute plays a direct role in form accessibility but was not specifically designed for assistive technologies. Its primary purpose is to help browsers identify the type of information expected in a field and offer appropriate autocompletion.

Some assistive technologies can leverage this information to **identify the purpose of a form field**, regardless of its visible label.

The `autocomplete` attribute is beneficial for users, here are a few examples of its impact:
- **Users with cognitive disabilities**: Autocompletion helps these users by reducing the cognitive load required to fill out a form. The suggestions provided by the browser can serve as reminders or cues, making it easier to enter information.
- **Users with motor disabilities**: For people who have difficulty using a keyboard or mouse, autocompletion reduces the number of keystrokes required, making the form faster and less tiring to complete.
- **Visually impaired or blind users**: Screen reader users also benefit from the autocomplete attribute. Autocomplete suggestions can be read aloud by screen readers, helping users understand the expected information and fill out the form more efficiently.

*Note*: the `autocomplete` attribute does not provide an accessible name for the field. Assistive technologies may use this information as a supplement, but never as a substitute for the label.

This practice is directly related to a WCAG success criterion: **WCAG 2.2 – Success Criterion 1.3.5: Identify Input Purpose (Level AA)**.

This criterion requires that, for certain fields collecting personal data, the purpose of the field must be programmatically identified using the values defined in the HTML specification. Using `autocomplete` is thus a standardized way to meet this criterion, when an appropriate token exists.

*Note*: the criterion applies to information about the user themselves, not information about third parties (e.g., a friend's shipping address or a contact's phone number).

Examples of data concerned:

* name
* first name
* address
* phone number
* email address
* payment information

The goal is to allow assistive technologies and input assistance tools to **automatically recognize these fields**.

It is important to note that:

* this criterion only applies to certain types of personal data predefined by the HTML specification
* only when this data is requested from the user in the form of input controls (`inputs`, etc.)
* and when the purpose of the field is included in the list of `input purposes` defined by WCAG, which are themselves aligned with the HTML `autofill tokens`.

*Note*: fields whose purpose is not covered by the `autofill-tokens` (e.g., a free-text search field, a text area for a comment, highly specific or non-standard business fields) do not need this attribute, or should not use an inappropriate value.

The use of `autocomplete` obviously does not replace:

* an **accessible label (provided by a `label` or any other accessible naming method)**
* a **clear form structure**
* **understandable instructions** for the user.

## Understanding the autocomplete syntax

The `autocomplete` attribute accepts several types of values defined in the HTML specification.

These values can be grouped into several categories.

### Priority rules

`autocomplete` can be implemented on the form and directly on fields. In this case, the following rules apply:

* If `autocomplete` is present on both the form and a field, the field's value takes precedence.
* An `autocomplete` attribute that is absent on a field inherits the behavior of the form, which then acts as a default value (e.g., `autocomplete="off"` on the form, but `autocomplete="email"` on a specific field).

### Syntax of the `autocomplete` attribute

The HTML Living Standard specification defines the value of the `autocomplete` attribute not as a simple free-form value, but as a **structured sequence of tokens** that must follow a strict grammar and a specific order. Each token has a precise role, and their order is not interchangeable. The order of the tokens is indeed significant: a poorly ordered value may be ignored by the browser.

The expected syntax is as follows:

```
autocomplete = "on" | "off" | [section-*] [shipping|billing] [contact-type] autofill-field-name [webauthn]
```

#### 1. General values: `on` and `off`

The values `on` and `off` allow autocompletion to be enabled or disabled.

Example:

```html
<form autocomplete="on">
```

or:

```html
<input type="text" autocomplete="off">
```

However, the specification states that browsers may ignore the off value in certain cases, particularly for fields related to authentication. It is crucial to note that using autocomplete="off" can degrade the user experience and accessibility by preventing autocompletion for fields where it would be beneficial.

The use of autocomplete="off" should be reserved for very specific cases where predicting a value makes no sense or could harm security, such as:
* a field for entering a one-time code (OTP)
* a confirmation field like "Please re-enter your email" (although this practice is itself questionable in terms of usability).

#### 2. Custom sections (optional)

It is also possible to define custom sections using the prefix:

```html
section-*
```

Example:

```html
<input autocomplete="section-user1 email">
<input autocomplete="section-user2 email">
```

This allows distinguishing between multiple users or multiple sets of similar information within the same form.

#### 3. Predefined sections (optional)

The HTML specification allows **grouping fields that belong to the same logical section**. These groupings help indicate the context of the data.

Example:

```html
<input autocomplete="shipping given-name">
<input autocomplete="shipping family-name">
<input autocomplete="shipping street-address">
```

In this example, the fields are associated with the `shipping` section, indicating that they correspond to a **shipping address**. Another common section is `billing`, used for billing information.

These sections allow browsers to distinguish between multiple sets of data in the same form.

#### 4. Contact type modifiers (optional)

Some fields accept additional tokens called `contact type hints`.
These tokens are neither sections nor fields, but `contact type modifiers`.

Example:

```html
home
work
mobile
fax
pager
```

Let's take a phone field:

```html
<input autocomplete="home tel">
```

Here:

| token  | role            |
| ------ | --------------- |
| `home` | contact type    |
| `tel`  | autofill field  |


This means the form expects a personal phone number in this field.

Other examples:

```html
autocomplete="work email"
```

indicates a work email address.

```html
autocomplete="mobile tel"
```

indicates that the form expects a mobile phone number.

These `tokens` help specify the context of contact information like a phone number or an email address. They are not sections, as sections are used to distinguish groups of data within a form.

#### 5. Values defined by the HTML specification (mandatory)

The HTML specification defines many standardized values, called `autofill tokens`, to precisely identify the expected data.

Common examples:

| Value            | Meaning             |
| ---------------- | ------------------- |
| `name`           | full name           |
| `given-name`     | first name          |
| `family-name`    | last name           |
| `email`          | email address       |
| `tel`            | phone number        |
| `street-address` | street address      |
| `postal-code`    | postal code         |
| `country`        | country             |


Example of use:

```html
<label for="firstname">First name</label>
<input id="firstname" name="firstname" autocomplete="given-name">
```

These values are used by:

* browsers
* password managers
* some assistive tools.

[The complete list is defined in the HTML specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofilling-form-controls:-the-autocomplete-attribute).

#### 6. WebAuthn Identifiers (optional)

The HTML specification also includes the `webauthn` token, used to signal that a field can trigger authentication via WebAuthn (e.g., with passkeys).
This token is defined in the [Web Authentication API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Authentication_API).

Example:

```html
<input autocomplete="username webauthn">
```

## Real browser behavior

The `autocomplete` attribute provides a hint to browsers, but it does not guarantee that autocompletion will work on its own.

In practice, browsers also use:

* the `name` attribute
* the `id` attribute
* the `label` text
* the `form` structure
* internal heuristics

For example, a field named `email` may be recognized as an email field even without `autocomplete`.

```html
<input name="email">
```

However, this behavior is not standardized and may vary between browsers. Using autocomplete correctly helps to make this mechanism more reliable and reduce ambiguity. In other words, `autocomplete` is an important signal, but it is not the only one used by browsers. These heuristics can produce variable results depending on the browser and context.

## Complete form example

Here is a simplified example of a form using the `autocomplete` attribute correctly:

```html
<form>

  <label for="firstname">First name</label>
  <input id="firstname" name="firstname" autocomplete="given-name">

  <label for="lastname">Last name</label>
  <input id="lastname" name="lastname" autocomplete="family-name">

  <label for="email">Email address</label>
  <input id="email" name="email" type="email" autocomplete="email">

  <label for="street">Address</label>
  <input id="street" name="street" autocomplete="street-address">

  <label for="postal">Postal code</label>
  <input id="postal" name="postal" autocomplete="postal-code">

</form>
```

## How to test the presence and relevance of autocomplete

The analysis of the `autocomplete` attribute can be done in different ways.

### Manual Inspection

The first method is to inspect the form's source code.

Points to check:

* presence of the `autocomplete` attribute
* consistency between the value and the requested data
* correct use of tokens defined by the HTML specification

For example:

```html
<input type="email" autocomplete="email">
```

is consistent, whereas:

```html
<input type="email" autocomplete="name">
```

is not.

### Using the detectAutocomplete bookmarklet

To facilitate form audits, you can use the **detectAutocomplete** bookmarklet.

This tool allows you to analyze a page and highlight form fields and their autocomplete values.

It can help to:

* identify fields that use `autocomplete`;
* identify fields that do not use this attribute;
* spot incorrect values;
* quickly analyze a form's structure.

The bookmarklet is available on GitHub: [https://github.com/MewenLeHo/detectAutocomplete](https://github.com/MewenLeHo/detectAutocomplete)

## Common errors observed in audits

During accessibility or usability audits, several errors are frequently encountered:

1. **Completely forgetting `autocomplete`**:
  - **Impact**: Users must manually enter all information, which can be tedious and a source of errors.
  - **Solution**: Always include the `autocomplete` attribute for relevant form fields.

2. **Using non-standard tokens**:
  - **Impact**: Browsers may not recognize incorrect values, making autocompletion ineffective.
  - **Solution**: Use the standardized values for the `autocomplete` attribute as specified in the HTML documentation.

Example:

```html
<input type="email" autocomplete="name">
```

The value does not match the requested data.
Values not defined by the specification are ignored by browsers, which may then rely on their own heuristics.

3. **Unnecessarily disabling autocompletion**:
  - **Impact**: This practice is often unnecessary, sometimes ignored by browsers, and deprives some users of an important accessibility feature.
  - **Solution**: Limit `autocomplete="off"` to genuinely justified cases (OTP, highly sensitive fields, or where autocompletion offers no benefit) and leave autocompletion active everywhere else.

4. **Ignoring sections**:
  - **Impact**: Browsers and password managers may have more difficulty distinguishing between multiple sets of data (e.g., multiple addresses or multiple people) in the same form.
  - **Solution**: Use `shipping`, `billing`, or custom sections (`section-*`) when the same form groups several sets of similar information.

### Simple rule to remember

For each form field:

1. provide a clear accessible name (`label` or other naming technique);
2. use a standard `autocomplete` token if applicable;
3. do not invent a value.

These three rules cover the majority of use cases.

## Conclusion

The `autocomplete` attribute illustrates a simple idea: minimal semantic information can have a significant impact on user experience and accessibility.

When used correctly, it helps to:

* speed up data entry;
* reduce errors;
* improve interoperability with browsers and password managers;
* and meet certain accessibility requirements.

Despite this, it remains **underused or poorly implemented in many forms**.
Taking the time to implement it correctly is a simple improvement, quick to implement… and yet still too often overlooked.

## Webography

* [HTML Living Standard – Autofilling form controls](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofilling-form-controls:-the-autocomplete-attribute)
* [WCAG 2.2 – Understanding Success Criterion 1.3.5](https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose.html)
* [MDN – HTML attribute: autocomplete](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/autocomplete)
