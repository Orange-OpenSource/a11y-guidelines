---
title: "Start sections with headings"
---

# Start sections with headings

**Target:** everyone and especially people with cognitive limitations, reading difficulties and visual disabilities.  
**When:** as of design, during content writing and development.

**Description:** 
One must identify the heading tags (`h1` to `h6` <abbr>HTML</abbr> tags) used to structure the content of the pages.
Visually impaired people browsing with a screen reader can access the list of headings in the page to navigate quickly. 
Just like in a Word document, it is possible to use the table of contents only if the heading tags have been properly set within the document.  

**Checklist:**

- The headings must be relevant, reflect the structure of the information contained in the page.
- There must be no break in the heading hierarchy (we cannot jump from a `h2` title to a `h4` title).
- You can use several `h1` headings per page (Don’t exceed two in most cases).
- Hidden tags are dismissed by screen readers (`visibility: hidden;`, `display: none;` or `aria-hidden`).
- The dynamically-generated content must also meet this requirement.

**Goal:**

- For all users: improve the structure of the page and its contents.
- For search engines: improve SEO.
- For users with visual disabilities, cognitive limitations or reading difficulties: easy navigation and access to content.

**Do:** 
    
Page with consistent and relevant headings:

```
(Heading 1) Home – Orange
(Heading 2) News
(Heading 2) Fibre broadband is coming!
(Heading 3) Check eligibility
```

**Don’t:**
Page with a break in the heading hierarchy h2 → h4:

<pre><code class="html">
&lt;h1&gt;Home – Orange&lt;/h1&gt;
&lt;h2&gt;News&lt;/h2&gt;
&lt;h2&gt;Fiber broadband is coming!&lt;/h2&gt;
&lt;h4&gt;Check eligibility&lt;/h4&gt;
</code></pre>

**Tool :** 
[HeadingsMaps](https://www.learningapps.co.uk/moodle/xertetoolkits/play.php?template_id=1309) extension, available for [Chrome](https://chrome.google.com/webstore/detail/headingsmap/flbjommegcjonpdmenkdiocclhjacmbi?hl=fr) and [Firefox](https://addons.mozilla.org/fr/firefox/addon/headingsmap/), extract and display page titles for the current page.
   
 
**Reference <abbr>WCAG</abbr>&nbsp;:**
- <a href="https://www.w3.org/TR/WCAG21/#info-and-relationships">1.3.1 Info and Relationships</a>
