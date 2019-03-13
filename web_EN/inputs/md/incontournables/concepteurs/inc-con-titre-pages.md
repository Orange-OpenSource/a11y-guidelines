# Set a title for each page 

<script>$(document).ready(function () {
    setBreadcrumb([
        {"label":"WCAG criteria by project phase - Design", "url": "./incontournables.html"},
        {"label":"Set a title for each page "}
    ]);
});</script>

<span data-menuitem="incontournables"></span>
  

**Target: **everyone and especially people with visual disabilities.  
**When: **as of conception and during development.

**Description:**  
Give each page a title that is specific to it and which reflects its content or function  (`<title>` tag).  
The page title is the first element read by a screen reader, it must help to formally identify the page where you are.

**Checklist: **
- Even if there is no rule, in general (opening many tabs in multiple applications), we go from the most specific information to the least specific (e.g. title of the current page - name of the site). When opening a multitude of applications, the approach is different, in this case we will prefer going from the least specific information to the most specific (e.g. name of the site - title of the current page).
- When the content of the page is dynamic (displaying the result of a search, errors in a form, user adding content…), the title of the page should reflect this change.

**Users’ goal: ** 
Allow users to identify the topic of a page, find and get a clear idea of the content of the page without having to read it. In particular, it is the first element vocalized by a screen reader.

**Do:** 
`<title>Home - Corporate web site of Orange</title>`
 
**Don’t:** 
`<title>Home</title>`

**Reference <abbr>WCAG</abbr>&nbsp;:**
- <a href="https://www.w3.org/TR/WCAG21/#page-titled">2.4.2 Page Titled</a>

<!--  This file is part of a11y-guidelines | Our vision of mobile & web accessibility guidelines and best practices, with valid/invalid examples.
 Copyright (C) 2016  Orange SA
 See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). -->