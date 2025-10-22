---
title: "Disable HTML elements"
abstract: "How to disable HTML elements in the page?"
titleBeforeTag: true
date: "2021-07-01"
updateDate: "2025-10-31"
tags:
  - web
  - beginner
---

The deactivation of an interactive element is used to prevent the user from interacting with that component or its descendants.

This technique should be used sparingly, depending on the components and the context of use.

## Disable a button

It is possible to disable a button by simply adding the `disabled` attribute:
```html
<button disabled>Delete</button>
```

However, this technique is not recommended for a form submission button for various reasons, including low contrast, a button being unreachable via keyboard, and no information being provided to the user.

## Disable a form field

Like a button, a form field is disabled using the `disabled` attribute.

It is thus possible to disable an `input` field or a `textarea`:
```html
<input type="text" name="address" disabled>
<textarea id="area" name="comment" disabled>This is a disabled comment</textarea>
```
In the following example, the `input`, the `checkbox` and the `select` are disabled because they inherit the disabled state from the `<fieldset>`:
```html
<fieldset id="groupe" disabled>
    <input name="foo"> 
    <input type="checkbox" name="bar"> 
    <select name="values"> 
        <option value="1">Value 1</option>
        <option value="2">Value 2</option>
        <option value="3">Value 3</option>        
    </select>
</fieldset>
```

Similarly, on a `select`, the `disabled` attribute will affect all options within it:
```html
<label for="fruit-select" >Choose a fruit:</label>
<select name="fruit" id="fruit-select" disabled>
  <option value="">Select a fruit</option>
  <option value="apple" disabled>Apple</option>
  <option value="banane">Banana</option>
  <option value="orange">Orange</option>
</select>
```

It is also possible to disable a single `option` within a `select`:
```html
<label for="fruit-select" >Choose a fruit:</label>
<select name="fruits" id="fruit-select">
  <option value="">Select a fruit</option>
  <option value="apple" disabled>Apple</option>
  <option value="banana">Banane</option>
  <option value="orange">Orange</option>
</select>
```

## Disable a link

To disable a link, the use of the `disabled` attribute is not allowed. However, it is possible to simulate a disabled state by following these three steps:
- remove the `href` attribute so it can no longer receive focus
- add `role="link"` so it is still recognized as a link by screen readers
- add an `aria-disabled="true"` attribute to indicate that it is disabled.

<pre><code class="html">&lt;a role="link" aria-disabled="true"&gt;Disabled link&lt;/a&gt;</code></pre>


## `read-only` attribute

The boolean attribute `read-only` controls whether a text field can be edited or not.  
It should not be used to disable other elements (such as buttons and other interactive components), as that is precisely the role of the `disabled` attribute.

The main difference between the two techniques is that a read-only element remains accessible via keyboard and is announced by assistive technologies; this can be useful for verifying information that has been previously entered (for example: an email, date of birth, phone number, etc.) without allowing modifications.

## Webography
<ul>
  <li><a href="https://www.scottohara.me/blog/2021/05/28/disabled-links.html">Disabling a link - Scott O'Hara</a></li>
  <li><a href="https://adamsilver.io/blog/the-problem-with-disabled-buttons-and-what-to-do-instead/">The problem with disabled buttons and what to do instead - Adam Silver</a></li>
  <li><a href="https://adrianroselli.com/2024/02/dont-disable-form-controls.html">Don’t Disable Form Controls - Adrian Roselli</a></li>
  <li><a href="https://adrianroselli.com/2024/11/avoid-read-only-controls.html"">Avoid Read-only Controls - Adrian Roselli</a></li>
</ul>
