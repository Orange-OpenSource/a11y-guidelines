---
title: "SVG images accessibility"
abstract: "How to make SVG images accessible"
titleBeforeTag: true
date: "2021-01-01"
updateDate: "2025-03-28"
tags:
  - web
  - intermediate
---
Here are some ideas knowing that the support for browsers and assistive technologies evolves very quickly.

Important: Whatever solution is chosen, as browser support and assistive technologies evolve rapidly, make sure to test your implementations on the configurations most commonly used by your users.

## Decorative image

### SVG in an `img` tag
<pre><code class="html" title="html">
&lt;img src="XXX.svg" alt="" aria-hidden="true" /&gt;
</code></pre>

### Inline SVG
<pre><code class="html" title="html">
&lt;svg aria-hidden="true"&gt;
…
&lt;/svg&gt;
</code></pre>

In addition, you must make sure that the `svg` tag or one of its children (`<g>`,`<path>`...) does not have any attribute to provide it with an accessible name (`title`, `desc`, `aria- *`, …).

Note: Historically, the `focusable="false"` attribute was also required to prevent any focus on the SVG by Internet Explorer and Edge (before Chromium). This is no longer necessary in current browsers (unless your users are still using the older mentioned browsers).


## Informative image (without link or button)

### SVG in an `img` tag

The most effective solution is to use the `alt` attribute:

<pre><code class="html" title="html">
&lt;img src="XXX.svg" role="img" alt="replacement text"&gt;
</code></pre>

As a second choice, use `aria-label` (but this violates the first rule of ARIA, which is to avoid using ARIA if a native HTML solution exists):

<pre><code class="html" title="html">
&lt;img src="XXX.svg" role="img" aria-label="replacement text"&gt;
</code></pre>

Note: To ensure optimal support by assistive technologies and browsers, avoid using `aria-labelledby` pointing to hidden text:

<pre><code class="html" title="html">
&lt;p id="alt-text" class="visually-hidden">replacement text&lt;/p&gt;
&lt;img src="XXX.svg" role="img" aria-labelledby="alt-text"&gt;
</code></pre>

Note: Add `role="img"` to ensure that the element is properly recognized as an image by assistive technologies.


### Inline SVG

The best support for SVG is inline display (`<svg>` tag).

<pre><code class="html" title="html">
&lt;svg role="img"&gt;
  &lt;title&gt;replacement text&lt;/title&gt;
  ...
&lt;/svg&gt;

&lt;svg role="img" aria-labelledby="alt-text"&gt;
  &lt;title id="alt-text">replacement text&lt;/title&gt;
  ...
&lt;/svg&gt;

&lt;svg role="img" aria-label="alt-text"&gt;
  ...
&lt;/svg&gt;
</code></pre>

If needed, for images whose content requires a detailed description, it is possible to use `aria-labelledby` referencing the title and desc:

<pre><code class="html" title="html">
&lt;svg role="img" aria-labelledby="alt-text description"&gt;

  &lt;title id="alt-text"&gt;short replacement text&lt;/title&gt;

  &lt;desc id="description"&gt;
    Detailed description of the information given by the image.
  &lt;/desc&gt;
  ...
&lt;/svg&gt;
</code></pre>

Note: To ensure optimal support by assistive technologies and browsers, avoid using `aria-describedby` for the description.

If you use the `<use>` element to clone multiple versions of the SVG, remember to hide it with `aria-hidden`:


<pre><code class="html" title="html">
&lt;svg role="img"&gt;
  &lt;title&gt;replacement text&lt;/title&gt;
    &lt;use href="some-id" fill="blue" x="5" y="5" aria-hidden="true" /&gt;
  ...
&lt;/svg&gt;
</code></pre>


## SVG in links or buttons

If it is possible to display text nearby, the best solution is to simply hide the SVG using the `aria-hidden` attribute:

<pre><code class="html" title="html">
&lt;button&gt;
  &lt;svg aria-hidden="true"&gt;&lt;!--...--&gt;&lt;/svg&gt;
  Visible text
&lt;/button&gt;

&lt;a href="/Rechercher"&gt;
  &lt;svg aria-hidden="true"&gt;&lt;!--...--&gt;&lt;/svg&gt;
  Visible text
&lt;/a&gt;
</code></pre>

However, since it is not always possible to display text (due to graphic/design/marketing constraints), it is recommended to visually hide text while keeping it readable by assistive technologies using `aria-labelledby`:

<pre><code class="html" title="html">
&lt;button aria-labelledby="label"&gt; 
  &lt;span id="label" hidden&gt;Hidden text&lt;/span&gt;
  &lt;svg aria-hidden="true"&gt;&lt;!--...--&gt;&lt;/svg&gt;
&lt;/button&gt; 

&lt;a href="/Rechercher"&gt;
  &lt;span id="label" hidden&gt;Hidden text&lt;/span&gt;
  &lt;svg aria-hidden="true"&gt;&lt;!--...--&gt;&lt;/svg&gt;
&lt;/a&gt;
</code></pre>

The `visually-hidden` class also allows text to be presented only to assistive technology users (accessible hiding). The following solution is similar to the previous one but should be systematically tested in your targeted browsing environments (browser/assistive technology pairs).

<pre><code class="html" title="html">
&lt;button&gt;
  &lt;svg aria-hidden="true"&gt;&lt;!--...--&gt;&lt;/svg&gt;
  &lt;span class="visually-hidden"&gt;Search&lt;/span&gt;
&lt;/button&gt;

&lt;a href="/Search"&gt;
  &lt;svg aria-hidden="true"&gt;&lt;!--...--&gt;&lt;/svg&gt;
  &lt;span class="visually-hidden"&gt;Search&lt;/span&gt;
&lt;/a&gt;
</code></pre>

It is also possible to use the `aria-label` attribute:

<pre><code class="html" title="html">
&lt;button aria-label="Search"&gt;
  &lt;svg aria-hidden="true"&gt;&lt;!--...--&gt;&lt;/svg&gt;
&lt;/button&gt;

&lt;a href="/Search" aria-label="Search"&gt;
  &lt;svg aria-hidden="true"&gt;&lt;!--...--&gt;&lt;/svg&gt;
&lt;/a&gt;
</code></pre>

## Last words ...

In short, one tip for accessible SVG would be TEST and test again!

## Ressources (articles that have helped me a lot)

<a href="https://www.deque.com/blog/creating-accessible-svgs/">Creating Accessible SVGs - Deque</a>
<a href="https://weboverhauls.github.io/demos/svg/">Accessible SVG test page</a>
<a href="https://www.scottohara.me/blog/2019/05/22/contextual-images-svgs-and-a11y.html">Contextually Marking up accessible images and SVGs - Scott O'Hara</a>
<a href="https://www.slideshare.net/webaxe/svg-icons-and-screen-reader-accessibility">SVG Icons and Screen Reader Accessibility</a>
<a href="https://github.com/JeremiePat/svg-accessible/blob/master/slides.md">SVG Accessible ! - Github Jeremie Patonnier</a>
<a href="https://www.sarasoueidan.com/blog/accessible-icon-buttons/">Accessible Icon Buttons - Sara Soueidan</a>
<a href="https://www.smashingmagazine.com/2021/05/accessible-svg-patterns-comparison/">Accessible SVGs: Perfect Patterns For Screen Reader Users - Smahsing Magazine</a>
