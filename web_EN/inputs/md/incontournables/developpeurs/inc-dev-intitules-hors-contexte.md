# Text of links and buttons must be accessible

<script>$(document).ready(function () {
    setBreadcrumb([
        {"label":"Themed WCAG index - Developers", "url": "./incontournables.html#dev"},
        {"label":"Text of links and buttons must be accessible"}
    ]);
});</script>

<span data-menuitem="incontournables"></span>

**Target: **everyone, especially people with visual impairments, cognitive limitations (dyslexic) or attention difficulties.  
**When: **as of design and during development.

**Description: **

Make the link and button labels understandable without the context for all users and, in particular, the visually impaired. During the navigation with a screen reader, it should be possible to access the links list of the page to navigate quickly. If your page contains several “learn more” links, it will be impossible to differentiate from each other.  

If it is not possible to make a link more explicit (e.g. not enough space) but the label of the current link is sufficiently clear for people having access to the screen, **a `title`**attribute must use to display a tooltip, containing all the necessary information, at the mouse rollover, but also to complete the title with additional content with, at choice:
- a piece of text hidden by <a href="./examples/masking/index.html"> accessible display </a> via CSS
- by using an attribute `aria-label` or` aria-labelledby` containing all the contents of `title` (see [ARIA attributes that can save you](./ label-ledby-describedby.html)).

For example, in the image below, the two “next” links are not explicit enough for a person with visual impairments. However, when one sees the screen, the positioning makes obvious the function of each button.

![screenshot showing two valid links that should be clarified](./images/liens-valider.png)

In this case, add an <a href="./exemples/masquage/index.html">accessible hidden content</a> using `span` to complete the link label. This will not be displayed on the screen, but will be vocalized by assistive technologies.

**Example:** 
<pre><code class="html">
&lt;a href="…" title="Validate the payment by installments"&gt;Validate&lt;span class="accessible-hidden-content"&gt; to pay by installments&lt;/span&gt;&lt;/a&gt;
&lt;a href="…" title="Validate the payment in one go"&gt;Validate&lt;span class="accessible-hidden-content"&gt; to pay in one go&lt;/span&gt;&lt;/a&gt;
</code></pre>

Another solution is to use an `aria-label` or `aria-labelledby` attribute to clarify the link label (see [ARIA attributes that can save you](./label-ledby-describedby.html)).

<pre><code class="html">
&lt;a title="confirm to pay in installments" aria-label="confirm to pay in installments" href="…"&gt;confirm&lt;/a&gt;
&lt;a title="confirm to pay in one go" aria-label="confirm to pay in one go" href="…"&gt;confirm&lt;/a&gt;
</code></pre>

**Checklist: **
Make sure that the semantics <abbr>HTML</abbr> are respected:
- a link must allow to change <abbr>URL</abbr>, to page, to download a file, to make appear / disappear content, to go to an anchor.
- a button must allow to submit / reset a form, to open a modal window, to make appear a sub-menu, to control a media, to trigger an action via <abbr>JS </abbr>.

Ensure that links, out of context, give good information about the triggered action or destination.

A page must not contain multiple links with the same label but pointing to different destinations&nbsp;/ actions.

**Users’ goal: **

Allow users who don’t have access to the visual context to know the destination of the link. 

Particularly important for users navigating 
through a list of links extracted from the page (screen readers) or software magnifying glass users who see only a fraction of the page.

**Technical goal: **

Making explicit link labels improves natural referencing.

**Do:**     
Associate a link labelled “click here” with a hidden label: “order you mobile phone”. 
 
**Don’t:**     
“Click here” or “Read more…” links without clarification.

**Reference <abbr>WCAG</abbr>&nbsp;:**  
- <a href="https://www.w3.org/TR/WCAG21/#link-purpose-link-only"> 2.4.9 Link Purpose (Link Only)</a>
- <a href="https://www.w3.org/TR/WCAG21/#label-in-name"> 2.5.3 Label in Name</a>

<!--  This file is part of a11y-guidelines | Our vision of mobile & web accessibility guidelines and best practices, with valid/invalid examples.
 Copyright (C) 2016  Orange SA
 See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). -->