---
title: "Web design - Textual content"
abstract: "Textual content, web accessibility design recommandations"
---

# Web design - Textual content

<p class="lead">Ensure that textual content is structured with the appropriate semantics</p>




## Set a title for each page

**Target:** everyone and especially people with visual disabilities.  
**When:** as of conception and during development.

**Description:**  
Give each page a title that is specific to it and which reflects its content or function  (`<title>` tag).  
The page title is the first element read by a screen reader, it must help to formally identify the page where you are.

**Checklist:**
- Even if there is no rule, in general (opening many tabs in multiple applications), we go from the most specific information to the least specific (e.g. title of the current page - name of the site). When opening a multitude of applications, the approach is different, in this case we will prefer going from the least specific information to the most specific (e.g. name of the site - title of the current page).
- When the content of the page is dynamic (displaying the result of a search, errors in a form, user adding content…), the title of the page should reflect this change.

**Users’ goal:** 
Allow users to identify the topic of a page, find and get a clear idea of the content of the page without having to read it. In particular, it is the first element vocalized by a screen reader.

**Do:** 
`<title>Home - Corporate web site of Orange</title>`
 
**Don’t:** 
`<title>Home</title>`

**<abbr>WCAG</abbr> reference:**
- <a href="https://www.w3.org/TR/WCAG22/#page-titled">2.4.2 Page Titled</a>




## Start sections with headings

**Target:** everyone and especially people with cognitive limitations, reading difficulties and visual impairments.  
**When:** as of design, content writing and during development.

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
