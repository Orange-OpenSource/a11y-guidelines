# Allow text spacing

<script>$(document).ready(function () {
    setBreadcrumb([
        {"label":"Themed WCAG index - Design", "url": "./incontournables.html"},
        {"label":"Allow text spacing"}
    ]);
});</script>

<span data-menuitem="incontournables"></span>


**Target: ** Everyone, especially people with visual and dyslexic disabilities.  
**When: ** as of graphic design and during development.

Even if it is during the development phase that we will ensure the validity of this criterion, it is important, from the design phase, to think about the height of the lines and the spacing of the paragraphs and text. It is generally accepted that a line height (line-height) of 1.5 makes it possible to obtain a good readability of the text, for example an article in English entitled: <a href="https://www.invisionapp.com/blog/line-spacing/"> Why you should go big with line spacing </a>.

**Description: **  
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


<!--  This file is part of a11y-guidelines | Our vision of mobile & web accessibility guidelines and best practices, with valid/invalid examples.
 Copyright (C) 2016  Orange SA
 See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). -->