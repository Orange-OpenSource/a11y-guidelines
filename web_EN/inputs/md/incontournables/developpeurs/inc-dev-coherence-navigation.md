# Identify and maintain consistency of groupings and different regions of the page

<script>$(document).ready(function () {
    setBreadcrumb([
        {"label":"Themed WCAG index - Developers", "url": "./incontournables.html#dev"},
        {"label":"Identify and maintain consistency of groupings and different regions of the page"}
    ]);
});</script>

<span data-menuitem="incontournables"></span>
**Target: **Everyone, especially people with visual, cognitive or attention deficit disorders.

**Description: **
Provide ways to identify and visually distinguish the different parts of the page and ensure the consistency of these regions or groupings in all pages.

**Checklist: **
- Make sure that the navigation mechanisms are always located at the same place in a set of pages.
- Ensure that the components and groupings that have the same function are identified (visually and semantically) in the same way.
- Ensure that the areas of the page are clearly delimited (borders, edges, sufficient contrast ...) or that there is a way to visually distinguish the groups (sub-menu, drop-down list ...) as well as the different regions of the page.

**User Objective: **  
Allow users to identify and locate interface elements in all pages.

**Do: **  
![screenshot of the site 100% practical](./images/groupement.jpg)  
Here, the tooltip (tooltip) is delimited by a visible edge and sufficiently contrasted, to identify its content.

**Don't: **  
![screenshot of the fnac.com website](./images/groupement2.jpg)  
It is very difficult to associate the themes ("par region", "par genre", ...) and the sub-themes in columns, especially since the horizontal borders are too little contrasted.

**Example: The <abbr>HTML5</abbr> and landmarks <abbr>ARIA</abbr> **  
To give a semantic structure to the main regions of a page, we can use the <abbr> HTML5 </ abbr> structure tags (`main` for the main content of the page,` nav` for the main navigation, `header `for page header,` footer` for footer, `aside` for content complementary to the main content, and others) even if their support by assistive technologies / browsers is not total , it's enough. You can also use, to set up this page structure, [the landmarks <abbr>ARIA</abbr> (Accessible Rich Internet Applications)](https://www.w3.org/TR/wai-aria-practices/examples/landmarks/index.html) and there, the support is much better & nbsp ;!

Setting up this type of semantics allows visually impaired people to identify and understand the organization, the overall structure of the page and thus navigate more easily.

**Reference <abbr>WCAG</abbr>&nbsp;:**  
- <a href="https://www.w3.org/TR/WCAG21/#consistent-navigation">3.2.3 Consistent Navigation</a>
- <a href="https://www.w3.org/TR/WCAG21/#consistent-identification">3.2.4 Consistent Identification</a>

<!--  This file is part of a11y-guidelines | Our vision of mobile & web accessibility guidelines and best practices, with valid/invalid examples.
 Copyright (C) 2016  Orange SA
 See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). -->