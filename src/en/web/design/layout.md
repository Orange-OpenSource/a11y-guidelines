---
title: "Layout"
abstract: "Layout, web accessibility design recommandations"
---

# Layout

<p class="lead">Make sure the layout is suitable for the user</p>




## Relative text size and responsive design

**Target:** everyone and especially people with visual impairments, using a device outdoors and elderly people.  
**When:** during development.

**Description:**
The text size should be able to be doubled (set the zoom, text only, to 200% in the browser settings). At this zoom level, the page layout can be altered, but the information must be readable (text or bunk not truncated).

In addition, we must ensure to make responsive web design, so provide different displays in screen type widths (break points) before the development phase.

Moreover, some design choices may or may not facilitate the implementation of this criterion during development, so it is important to think about it from the start.
**Example:**    
The screenshot below shows a page with the zoom set to 100%.  
![screenshot showing a page zoomed to 100%](../../images/zoom.png)    
  
&nbsp;  
**Do:**  
Zoom set to 200%.  
![screenshot with 200% zoom and readable text](../../images/zoom-ok.png)    
  
&nbsp;  
**Don’t:**  
Zoom set to 200%. In this case the height of the text container did not resized according to text size.  
![screenshot with 200% zoom and truncated text](../../images/zoom-ko.png)  




## Allow text spacing

**Target:** Everyone, especially people with visual and dyslexic disabilities.  
**When:** as of graphic design and during development.

Even if it is during the development phase that we will ensure the validity of this criterion, it is important, from the design phase, to think about the height of the lines and the spacing of the paragraphs and text. It is generally accepted that a line height (line-height) of 1.5 makes it possible to obtain a good readability of the text, for example an article in English entitled: <a href="https://www.invisionapp.com/blog/line-spacing/"> Why you should go big with line spacing </a>.

**Description:**  
If the user applies the following settings, the text must remain legible (no truncated content, superimposed):

- The height of the lines must be able to be adjusted to 1.5 times minimum the size of the font.
- The space between two paragraphs must be adjustable to at least 2 times the size of the font.
- The spacing between the letters must be able to be adjusted to 0.12 times the size of the font.
- The spacing between words must be able to be adjusted to 0.16 times minimum the size of the font.

For information, the criteria mentioned above is like applying the following CSS styles at the code level:
<pre><code class="css">
  * {
      line-height: 1.5! important;
      letter-spacing: .12em! important;
      word-spacing: .16em! important;
  }

  p {
      margin-bottom: 2em!important;
  }
</code></pre>

**Bookmarklet:**  
To make the test easier, you can use the following bookmarklet that will apply these styles to your browser's current page (bookmarklet to slide in your bookmarks bar):  <a href="javascript:s%20=%20document.createElement(%22style%22)%3Bs.setAttribute(%22type%22%2C%22text%2Fcss%22)%3Bt%3Ddocument.createTextNode(%22*%20%7Bline-height%3A%201.5!important%3B%20letter-spacing%3A.12em!important%3B%20word-spacing%3A%20.16em%20!important%3B%7D%20p%7Bmargin-bottom%3A%202em!important%3B%20%7D%22)%3Bs.appendChild(t)%3Bh%20%3D%20document.getElementsByTagName(%22head%22)%5B0%5D%3Bh.appendChild(s)%3Bvoid(0)%3B">Text spacing</a>




## Identify and maintain consistency of groupings and different regions of the page

**Target:** Everyone, especially people with visual, cognitive or attention deficit disorders.

**When:** when designing.

**Description:**  
Provide ways to identify and visually distinguish the different parts of the page and ensure the consistency of these regions or groupings in all pages.

**Checklist:**

- Make sure that the navigation mechanisms are always located at the same place in a set of pages.
- Ensure that the components and groupings that have the same function, are identified (visually) in the same way and, as far as possible, respect the classic appearance of these elements so as not to disturb the user accustomed to a specific aspect of them (for example, links are usually underlined ...).
- Ensure that the areas of the page are clearly delimited (borders, edges, sufficient contrast ...) or that there is a way to visually distinguish the groups (sub-menu, drop-down list ...) as well as the different regions of the page.

**Do:**

![screenshot of the site 100% practical](../../images/groupement.jpg)

Here, the tooltip (tooltip) is delimited by a visible border and sufficiently contrasted, to identify its content.

**Don't:**

![screenshot of the fnac.com website](../../images/groupement2.jpg)

It is very difficult to associate the themes ("par region", "par genre"...) and the sub-themes in columns, especially since the horizontal borders are not enough contrasted.




## Define sensitive areas of sufficient size

**Target:** everyone in particular, people with motor or visual disability and mobility.  
**When:** during design and development.

**Description:**  
Each sensitive area must have a sufficient size (minimum 9mm width and height).
In addition, the sensitive areas must be sufficiently spaced from each other (about 2mm minimum).
