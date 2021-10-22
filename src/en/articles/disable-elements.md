---
title: "Disable HTML elements"
abstract: "How to disable HTML elements in the page?"
titleBeforeTag: true
date: "2021-07-01"
tags:
  - web
  - beginner
---

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

## Disable a link

To disable a link, unlike the previous technique, the use of the `disabled` attribute is not allowed. It is still possible to disable a link by following 3 steps:
- remove the `href` attribute so that it can no longer receive the focus
- add a `role="link"` so that it is always considered a link by screen readers
- add an attribute `aria-disabled="true"` so that it is indicated as being disabled

<pre><code class="html">&lt;a role="link" aria-disabled="true"&gt; Disabled link &lt;/a&gt;</code></pre>

Check out Scott O'Hara's excellent article on the subject: <a href="https://www.scottohara.me/blog/2021/05/28/disabled-links.html">Disabling a link</a>.