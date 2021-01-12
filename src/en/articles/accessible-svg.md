---
title: "Some best practices for SVG images"
abstract: "How to make SVG images accessible"
date: "2021-01-01"
tags:
  - web
---

# SVG images are used more and more on the web but what about their accessibility?

Here are some ideas knowing that the support for browsers and assistive technologies evolves very quickly!
Important: So remember to test your implementations on the browsers/assistive technologies targets the most used by your users, whatever the solution for which you choose.

## Decorative image

### SVG in an `img` tag
<pre> <code class="html">
&lt;img src="XXX.svg" alt="" aria-hidden="true" /&gt;
</code> </pre>

### SVG online (inline)
<pre> <code class="html">
&lt;svg aria-hidden="true" focusable="false"&gt;
...
&lt;/svg&gt;
</code> </pre>

We use `focusable ="false"` to avoid any focus on SVG by <abbr>IE</abbr> (> 10 and Edge)

In addition, you must make sure that the `svg` tag or one of its children (`<g>`,`<path>`...) does not have any attribute to provide it with an accessible name (` title`, `desc `,` aria- * `…).

## Informative image (without link or button)

### SVG in an `img` tag
<pre> <code class="html">
&lt;img src ="XXX.svg" alt="alternative text" role="img" /&gt;
</code> </pre>

second choice:
<pre> <code class="html">
&lt;img src="XXX.svg" aria-label="replacement text" role="img" /&gt;
</code> </pre>

We add `role="img"` to make sure that with macOS Safari, VoiceOver (old versions) announces "image".

#### SVG online (inline)
<pre> <code class="html">
&lt;svg viewBox="0 0 440 540" version="1.1" role="img"
  lang="fr" xml:lang="fr"
  aria-labelledby="title description"&gt;

  &lt;title id="title"&gt;Gross revenue 2019&lt;/title&gt;

  &lt;desc id="description"&gt;
    This diagram shows the income for the year 2019, as a percentage of the total and in absolute value. The total income is 20.3 million Euros and is divided into 6.9 million (34%) for the first quarter, 2.1 million (10%) for the second, 10.3 million for the third (51%) and 1 million in the last quarter (5%).
  &lt;/desc&gt;

  ...
&lt;/svg&gt;
</code> </pre>

The best support for SVGs is to display them inline.

You must use `aria-labelledby` as the first choice by referencing the "title" and the "desc" (avoid `aria-describedby` for the "desc", still bad support) to ensure maximum support.
SVGs serving as a link or button

Several possible choices:

<pre> <code class="html">
&lt;button&gt;
  &lt;svg focusable="false" aria-hidden="true"&gt; &lt;! --...-- &gt; &lt;/svg&gt;
  Search
&lt;/button&gt;

&lt;a href="/Search"&gt;
  &lt;svg focusable="false" aria-hidden="true"&gt; &lt;! --...-- &gt; &lt;/svg&gt;
  Search
&lt;/a&gt;
</code> </pre>

We use `focusable="false"` to avoid any focus on the SVG in addition to the link `a`) by IE 10.
This is the best solution, the most robust but is not always possible to display a text (graphic / design / marketing constraint...).
So, here is an alternative that allows to visually hide the text for a button or a link while leaving it readable by assistive technologies via `aria-labelledby`:

<pre> <code class="html">
&lt;button aria-labelledby="label"&gt;

  &lt;span id="label" hidden&gt;Search&lt;/span&gt;

  &lt;svg aria-hidden="true" focusable="false"&gt; &lt;!--...--&gt; &lt;/svg&gt;

&lt;/button&gt;
</code> </pre>

Finally, these two following solutions are equivalent and in any case to be tested in your targeted navigation environments (browser / assistive technologies pairs).

<pre> <code class="html">
&lt;button&gt;
  &lt;svg focusable="false" aria-hidden="true"&gt; &lt;! --...--&gt; &lt;/svg&gt;
  &lt;span class="sr-only"&gt; Search &lt;/ span&gt;
&lt;/ button&gt;

&lt;a href="/ Search"&gt;
  &lt;svg focusable="false" aria-hidden="true"&gt; &lt;! --...--&gt; &lt;/svg&gt;
  &lt;span class="sr-only"&gt; Search &lt;/span&gt;
&lt;/ a&gt;
</code> </pre>

The sr-only class is used to hide the text except to technical help users (accessible masking).

or

<pre> <code class="html">
&lt;button aria-label="Search"&gt;
  &lt;svg focusable="false" aria-hidden="true"&gt; &lt;! --...--&gt; &lt;/svg&gt;
&lt;/ button&gt;

&lt;a href="/ Search" aria-label="Search"&gt;
  &lt;svg focusable="false" aria-hidden="true"&gt; &lt;! --...--&gt; &lt;/svg&gt;
&lt;/ a&gt;

or, but much more risky ...

&lt;button&gt;
  &lt;svg aria-labelledby="search-icon-title" focusable="false" role=”img”&gt;
    &lt;title id="search-icon-title"&gt;Search&lt;/title&gt;
    &lt;! --...--&gt;
  &lt;/svg&gt;
&lt;/ button&gt;
</code> </pre>

## Last words ...

In short, one tip for accessible SVG would be TEST and test again!

## Ressources (articles that have helped me a lot)

- https://www.deque.com/blog/creating-accessible-svgs/
- https://weboverhauls.github.io/demos/svg/
- https://www.scottohara.me/blog/2019/0