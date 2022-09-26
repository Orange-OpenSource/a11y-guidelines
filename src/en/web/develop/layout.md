---
title: "Web develop - Layout"
abstract: "Layout, web accessibility dev recommandations"
---

# Web develop - Layout

<p class="lead">Make sure the layout is suitable for the user</p>



## Use relative size to allow changing text size and responsive design

**Target:** Everyone and especially people with visual impairments, using a device outdoors and elderly people.  
**When:** during development.

**Description:**

Use relative length units for font size (`em`, `rem`, `%`) and for containers handling text size enlargement up to 200% and design your pages to be responsive.

**Checklist:**

- Do not use pixel (`px`) for size that must adapt if we increase the text size (impossible with Internet Explorer).
- Form fields must also have relative sizes to enlarge properly.
- Try to make the container adaptive so they can increase in size when the text is zoomed in.
- In Firefox, go to View>Zoom and activate Zoom text only, set the zoom to 200%. Verify that there is no loss of information (disappearance or overlapping text).
- Content must respond to screen size changes, adjusting its contents without horizontal scroll even when screen width is reduced to 320 CSS pixels, unless special needs (map, table, diagram... ).

![screenshot Zoom settings In Firefox](../../images/zoom-200.png)

**Users’ goal:**

Allow users (visually impaired, using a device outdoors, elderly people…) to increase the font size and enlargement of the page so they can access easily the information.

**Example:** 
See the example [handling zoom, increasing the text size](../../components-examples/zoom/) for more details.

**Reference <abbr>WCAG</abbr>&nbsp;:**  
- <a href="https://www.w3.org/TR/WCAG21/#resize-text">1.4.4 Resize text</a>
- <a href="https://www.w3.org/TR/WCAG21/#reflow">1.4.10 Reflow</a>




## Allow text spacing

**Target:** Everyone, particularly people with visual disabilities.  
**When:** as of design and during development.

If the user applies the following settings, the text must remain legible (no truncated content, superimposed):

- The line height must be adjustable to at least 1.5 times the font size.
- The space between two paragraphs must be adjustable to at least 2 times the font size.
- The letter spacing must be adjustable to 0.12 times the font size.
- The word spacing between words must be adjustable to at least 0.16 times the font size.

This can be done by applying the following CSS rules : 
<pre><code class="css">
  * {
      line-height: 1.5!important;
      letter-spacing:.12em!important;
      word-spacing: .16em !important;
  }

  p {
      margin-bottom: 2em!important;
  }
</code></pre>

**Bookmarklet:**  
To ease the test, use the following bookmarklet (to keep in your bookmarks) : <a href="javascript:s%20=%20document.createElement(%22style%22)%3Bs.setAttribute(%22type%22%2C%22text%2Fcss%22)%3Bt%3Ddocument.createTextNode(%22*%20%7Bline-height%3A%201.5!important%3B%20letter-spacing%3A.12em!important%3B%20word-spacing%3A%20.16em%20!important%3B%7D%20p%7Bmargin-bottom%3A%202em!important%3B%20%7D%22)%3Bs.appendChild(t)%3Bh%20%3D%20document.getElementsByTagName(%22head%22)%5B0%5D%3Bh.appendChild(s)%3Bvoid(0)%3B">Text spacing</a>

**Users’ goal:**
Improve reading comfort for people with cognitive and visual disabilities.

**Reference <abbr>WCAG</abbr>&nbsp;:**  
- <a href="https://www.w3.org/TR/WCAG21/#text-spacing">1.4.12 Text Spacing</a>


## Ensure a comprehensible reading order

**Target:** Everyone, and in particular people with visual or cognitive impairments or with an attention deficit disorder and mobility.
**When:** during development.

**Description:**

If a specific reading order is necessary for a good understanding of the content or the use of the interface, it must be ensured that the order of appearance in the <abbr>HTML</abbr> code also allows the access, for any user, to the content and the interface.

**To be checked:**

- Provide that the order of appearance of the elements in the <abbr>HTML</abbr> code is the same as the reading order of the information in the page, if this impacts the understanding of the content or ability to use the interface. It's the simplest solution!
- Even during the appearance or disappearance of content or dynamically generated content, this understandable reading order and a usable interface must be kept.

**User goal:**
Allow content to be understood and used, especially for <abbr>AT</abbr> users who often read content in order of appearance in code.

**Do:**
A press site presents its articles in three columns. In the code, the columns are placed in the same order as displayed on the screen. In this case, all users can read the articles without difficulty.

**Don't:**
 The main menu of a site is present at the very end of the source code (after the footer) but it positioned at the top of the page via <abbr>CSS</abbr>, there's a risk of not being perceived by a screen reader user.


**Reference <abbr>WCAG</abbr>:**
- <a href="https://www.w3.org/TR/WCAG21/#meaningful-sequence">1.3.2 Meaningful sequence</a>



## Identify and maintain consistency of groupings and different regions of the page

**Target:** Everyone, especially people with visual, cognitive or attention deficit disorders.

**Description:**
Provide ways to identify and visually distinguish the different parts of the page and ensure the consistency of these regions or groupings in all pages.

**Checklist:**
- Make sure that the navigation mechanisms are always located at the same place in a set of pages.
- Ensure that the components and groupings that have the same function are identified (visually and semantically) in the same way.
- Ensure that the areas of the page are clearly delimited (borders, edges, sufficient contrast ...) or that there is a way to visually distinguish the groups (sub-menu, drop-down list ...) as well as the different regions of the page.

**User Objective:**  
Allow users to identify and locate interface elements in all pages.

**Do:**  
![screenshot of the site 100% practical](../../images/groupement.jpg)  
Here, the tooltip (tooltip) is delimited by a visible edge and sufficiently contrasted, to identify its content.

**Don't:**  
![screenshot of the fnac.com website](../../images/groupement2.jpg)  
It is very difficult to associate the themes ("par region", "par genre", ...) and the sub-themes in columns, especially since the horizontal borders are too little contrasted.

**Example: The <abbr>HTML5</abbr> and landmarks <abbr>ARIA</abbr> **  
To give a semantic structure to the main regions of a page, we can use the <abbr> HTML5 </ abbr> structure tags (`main` for the main content of the page,` nav` for the main navigation, `header `for page header,` footer` for footer, `aside` for content complementary to the main content, and others) even if their support by assistive technologies / browsers is not total , it's enough. You can also use, to set up this page structure, [the landmarks <abbr>ARIA</abbr> (Accessible Rich Internet Applications)](https://www.w3.org/WAI/ARIA/apg/practices/landmark-regions/) and there, the support is much better & nbsp ;!

Setting up this type of semantics allows visually impaired people to identify and understand the organization, the overall structure of the page and thus navigate more easily.

**Reference <abbr>WCAG</abbr>:**  
- <a href="https://www.w3.org/TR/WCAG21/#consistent-navigation">3.2.3 Consistent Navigation</a>
- <a href="https://www.w3.org/TR/WCAG21/#consistent-identification">3.2.4 Consistent Identification</a>





## Define sensitive areas of sufficient size

**Target:** Everyone, especially people with motor or visual disabilities and mobility.  
**When:** during design and development.  

**Description:**  
Each sensitive area must have a sufficient size (minimum 9mm width and height).
In addition, the sensitive areas must be sufficiently spaced from each other (about 2mm minimum).





## Decoupling content from interaction and presentation

**Target:** Everyone, especially people with visual disabilities, reading or attention difficulties.  
**When:** during development.

**Description:**

Strictly decouple the content (<abbr>HTML</abbr>), the interaction (Javascript) and presentation (<abbr>CSS</abbr>). 

**Checklist:**

- Do not use tables to design the page layout, they should be used only for tabular data. 
- Do not use image to display text, except when the visual presentation cannot be achieved using <abbr>CSS</abbr>.
- Use <abbr>CSS</abbr> classes rather than manipulating inline <abbr>CSS</abbr> styles in <abbr>HTML</abbr>.
- Do not use <abbr>CSS</abbr> pseudo-elements (::before, ::after…) to display information (or provide an alternative for screen readers especially).
- Do not write Javascript events directly inside the <abbr>HTML</abbr>, use a separate script or <abbr>JS</abbr> file instead.

**Users’ goal:**

Allow users, via their User Agent or technical assistance (e.g. their browser) to change the visual appearance of the page (zoom, colour, position…). For example, increase the text size without display problems.

**Technical goal:**

Improves maintainability.

**Reference <abbr>WCAG</abbr>&nbsp;:**
- <a href="https://www.w3.org/TR/WCAG21/#info-and-relationships">1.3.1 Info and Relationships</a>
- <a href="https://www.w3.org/TR/WCAG21/#images-of-text">1.4.5 Images of Text</a>
