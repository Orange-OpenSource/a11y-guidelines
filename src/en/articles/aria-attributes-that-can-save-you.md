---
title: "ARIA attributes that can save you"
abstract: "Some ARIA attributes to know"
date: "2018-07-18"
tags:
  - web
---

# <abbr>ARIA</abbr> attributes that can save you: `aria-label`, `aria-labelledby` and `aria-describedby` 

## Introduction
### Accessible name and description

An accessible name is the information that allows assistive technology (<abbr>AT</abbr>), for example, a screen reader or a magnification program, to identify a given element (<abbr>HTML</abbr> tag). It can be provided by the title or content of an element, an attribute (for example, an `alt` attribute for an image) or by an associated element (for example, a `label` tag for a `input` field).

An accessible description is more extensive information that is used by the <abbr>AT</abbr> allowing it to complete the accessible name by specifying and adding meaning where the accessible name is not sufficient.

The accessible name as the accessible description can be visually noticeable or not (link title: visible, alternative image: hidden and usable only by <abbr>AT</abbr>...)

### <abbr>ARIA</abbr> attributes: `aria-label`, `aria-labelledby` and `aria-describedby`

Three <abbr>ARIA</abbr> attributes are very well supported by browsers and <abbr>AT</abbr>: `aria-label`, `aria-labelledby` and `aria-describedby`. They allow to add extra information to an <abbr>HTML</abbr> tag:
- `aria-label`, `aria-labelledby` allow to give an accessible name to an element
- `aria-describedby` allows to add to the accessible name, if necessary, in addition, an accessible description to an element

However, they only work well with some elements:
- interactive elements: `a` (with `href` attribute), `audio` and `video` (with `controls` attribute), `input` (exept `type="hidden"`), `select`, `button` and `textarea`
- `img` and `iframe` elements
- elements with an explicit landmark role, therefore, with a `role` attribute or an implicit landmark (a <abbr>HTML5</abbr> structural tag: `header`, `footer`, `main`, `nav`, `aside` and `section`) 
- One of the <a href="https://www.w3.org/TR/wai-aria-1.1/#widget_roles" lang="en" hreflang="en"><abbr>ARIA</abbr> widget roles (27 in <abbr>ARIA</abbr> 1.1)</a>.

For any other <abbr>HTML</abbr> element, these three <abbr>ARIA</abbr> attributes have few or even random support depending on the <abbr>AT</abr> / browser pair, so do not use as the only way of giving necessary information.

## Should it be used and how?

Yes, we can use these three <abbr>ARIA</abbr> attributes on the elements with which it works (see above) to pass essential information specifically to <abbr>AT</abbr>.

You should know that `aria-label` must contain, as a value, a string of characters that will be the accessible name. While for `aria-labelledby` and `aria-describedby`, the value of this attribute references one or more (space separated) `id` (auto referencing possible) of page elements whose content will be used as the accessible name of the element.

When using `aria-label` or` aria-labelledby` on an element, the content or title of that element is no longer rendered to <abbr>AT</abbr> but replaced by the accessible name (for `aria-label` the contents of this attribute, for` aria-labelledby` the contents of the referenced element). Therefore, only the accessible name must give all the necessary information to <abbr>AT</abbr> and therefore to the user.

**Important:** attribute `aria-labelledby` can admit several values separated by a space and can self-refer. It also works with pseudo-class generated content <abbr>CSS</abbr> `::before` or` ::after`. You can also reference content that is visually hidden by: <abbr>CSS</abbr>,  `visibility: hidden;` or `display: none;`, and with the <abbr>HTML</abbr>5 attribute `hidden`. However, best practices require that if the interface is such that it is not possible to have a visible text label on the screen, it is better to use `aria-label` rather than `aria-labelledby`.


When the two attributes `aria-labelledby` and` aria-label` are used, user agents give priority to aria-labelledby when calculating the accessible name property.

At last, `aria-describedby' will add an accessible description in addition to the accessible name of the element.

## Examples

<pre><code class="html">
&lt;button aria-label="Access Hypertext markup language"&gt;html&lt;/button&gt;
</code></pre>
Screen reader output: "Access Hypertext markup language"

<pre><code class="html">
&lt;h2 id="titre"&gt;HTML source&lt;h2&gt;
&lt;button aria-label="Access Hypertext markup language" aria-labelledby="titre"&gt;html&lt;/buttton&gt;
</code></pre>
Screen reader output: "HTML source"

<pre><code class="html">
&lt;h3 id="titre"&gt;Login page sourcecode&lt;h3&gt;
&lt;button aria-label="Access HTML" aria-describedby="titre"&gt;html&lt;/buttton&gt;
</code></pre>
Screen reader output: "Access HTML Login page sourcecode"
