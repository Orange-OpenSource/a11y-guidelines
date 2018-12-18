# Allow text spacing

<script>$(document).ready(function () {
    setBreadcrumb([
        {"label":"Themed WCAG index - Developers", "url": "./incontournables.html#dev"},
        {"label":"Allow text spacing"}
    ]);
});</script>

<span data-menuitem="incontournables"></span>
**Target: **everyone, particularly people with visual disabilities.  
**When: **as of design and during development.

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

**Users’ goal: **
Improve reading comfort for people with cognitive and visual disabilities.

**Reference <abbr>WCAG</abbr>&nbsp;:**  
- <a href="https://www.w3.org/TR/WCAG21/#text-spacing">1.4.12 Text Spacing</a>

<!--  This file is part of a11y-guidelines | Our vision of mobile & web accessibility guidelines and best practices, with valid/invalid examples.
 Copyright (C) 2016  Orange SA
 See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). -->