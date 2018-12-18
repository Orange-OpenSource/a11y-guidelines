# Relative text size and responsive design

<script>$(document).ready(function () {
    setBreadcrumb([
        {"label":"Themed WCAG index - Design", "url": "./incontournables.html"},
        {"label":"Relative text size and responsive design"}
    ]);
});</script>

<span data-menuitem="incontournables"></span>

**Target: **everyone and especially people with visual impairments, using a device outdoors and elderly people.  
**When: **during development.

**Description: **

Use relative length units for font size (`em`, `rem`, `%`) and for containers handling text size enlargement up to 200% and design your pages to be responsive.

**Checklist: **

- Do not use pixel (`px`) for size that must adapt if we increase the text size (impossible with Internet Explorer).
- Form fields must also have relative sizes to enlarge properly.
- Try to make the container adaptive so they can increase in size when the text is zoomed in.
- In Firefox, go to View>Zoom and activate Zoom text only, set the zoom to 200%. Verify that there is no loss of information (disappearance or overlapping text).
- Content must respond to screen size changes, adjusting its contents without horizontal scroll even when screen width is reduced to 320 CSS pixels, unless special needs (map, table, diagram... ).

![screenshot Zoom settings In Firefox](./images/zoom-200.png)

**Users’ goal: **

Allow users (visually impaired, using a device outdoors, elderly people…) to increase the font size and enlargement of the page so they can access easily the information.

**Example:** 
See the example [handling zoom, increasing the text size](./exemples/zoom/index.html) for more details.

**Reference <abbr>WCAG</abbr>&nbsp;:**  
- <a href="https://www.w3.org/TR/WCAG21/#resize-text">1.4.4 Resize text</a>
- <a href="https://www.w3.org/TR/WCAG21/#reflow">1.4.10 Reflow</a>

<!--  This file is part of a11y-guidelines | Our vision of mobile & web accessibility guidelines and best practices, with valid/invalid examples.
 Copyright (C) 2016  Orange SA
 See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). -->