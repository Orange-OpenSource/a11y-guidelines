# Decoupling content from interaction and presentation

<script>$(document).ready(function () {
    setBreadcrumb([
        {"label":"Themed WCAG index - Developers", "url": "./incontournables.html#dev"},
        {"label":"Decoupling content from interaction and presentation"}
    ]);
});</script>

<span data-menuitem="incontournables"></span>
**Target: **everyone, especially people with visual disabilities, reading or attention difficulties.  
**When: **during development.

**Description: **

Strictly decouple the content (<abbr>HTML</abbr>), the interaction (Javascript) and presentation (<abbr>CSS</abbr>). 

**Checklist: **

- Do not use tables to design the page layout, they should be used only for tabular data. 
- Do not use image to display text, except when the visual presentation cannot be achieved using <abbr>CSS</abbr>.
- Use <abbr>CSS</abbr> classes rather than manipulating inline <abbr>CSS</abbr> styles in <abbr>HTML</abbr>.
- Do not use <abbr>CSS</abbr> pseudo-elements (::before, ::after…) to display information (or provide an alternative for screen readers especially).
- Do not write Javascript events directly inside the <abbr>HTML</abbr>, use a separate script or <abbr>JS</abbr> file instead.

**Users’ goal: **

Allow users, via their User Agent or technical assistance (e.g. their browser) to change the visual appearance of the page (zoom, colour, position…). For example, increase the text size without display problems.

**Technical goal: **

Improves maintainability.

**Reference <abbr>WCAG</abbr>&nbsp;:**
- <a href="https://www.w3.org/TR/WCAG21/#info-and-relationships">1.3.1 Info and Relationships</a>
- <a href="https://www.w3.org/TR/WCAG21/#images-of-text">1.4.5 Images of Text</a>

<!--  This file is part of a11y-guidelines | Our vision of mobile & web accessibility guidelines and best practices, with valid/invalid examples.
 Copyright (C) 2016  Orange SA
 See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). -->