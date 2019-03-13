# Start sections with headings

<script>$(document).ready(function () {
    setBreadcrumb([
        {"label":"WCAG criteria by project phase - Design", "url": "./incontournables.html"},
        {"label":"Start sections with headings"}
    ]);
});</script>

<span data-menuitem="incontournables"></span>
**Target: ** everyone and especially people with cognitive limitations, reading difficulties and visual impairments.  
**When: ** as of design, content writing and during development.

**Description:**  
Identifying heading tags (`h1` to `h6` <abbr>HTML</abbr> tags) used to structure the content of the pages.
Visually impaired people browsing with a screen reader can access the list of headings in the page to navigate quickly. 
Just like in a Word document, it is possible to use the table of contents only if the heading tags have been properly set within the document.  

**Checklist: **

- The headings must be relevant, reflect the structure of the information contained in the page.
- There should be no break in the heading hierarchy (we cannot jump from a `h2` heading to a `h4` heading).
- You can use several `h1` headings per page (Don’t exceed two in most cases).

**Do:**  
Page with consistent and relevant headings:

```
(Heading 1) Home – Orange
(Heading 2) News
(Heading 2) Fibre broadband is coming!
(Heading 3) Check eligibility
```

<!--  This file is part of a11y-guidelines | Our vision of mobile & web accessibility guidelines and best practices, with valid/invalid examples.
 Copyright (C) 2016  Orange SA
 See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). -->
