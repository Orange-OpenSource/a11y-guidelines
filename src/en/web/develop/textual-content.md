---
title: "Web develop - Textual content"
abstract: "Textual content, web accessibility dev recommandations"
---

# Web develop - Textual content

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

**Target:** everyone and especially people with cognitive limitations, reading difficulties and visual disabilities.  
**When:** as of design, during content writing and development.

**Description:** 
One must identify the heading tags (`h1` to `h6` <abbr>HTML</abbr> tags) used to structure the content of the pages.
Visually impaired people browsing with a screen reader can access the list of headings in the page to navigate quickly. 
Just like in a Word document, it is possible to use the table of contents only if the heading tags have been properly set within the document.  

**Checklist:**

- The headings must be relevant, reflect the structure of the information contained in the page.
- There must be no break in the heading hierarchy (we cannot jump from a `h2` title to a `h4` title).
- You can use several `h1` headings per page (Don’t exceed two in most cases).
- Hidden tags are dismissed by screen readers (`visibility: hidden;`, `display: none;` or `aria-hidden`).
- The dynamically-generated content must also meet this requirement.

**Goal:**

- For all users: improve the structure of the page and its contents.
- For search engines: improve SEO.
- For users with visual disabilities, cognitive limitations or reading difficulties: easy navigation and access to content.

**Do:** 
    
Page with consistent and relevant headings:

```
(Heading 1) Home – Orange
(Heading 2) News
(Heading 2) Fibre broadband is coming!
(Heading 3) Check eligibility
```

**Don’t:**
Page with a break in the heading hierarchy h2 → h4:

<pre><code class="html">
&lt;h1&gt;Home – Orange&lt;/h1&gt;
&lt;h2&gt;News&lt;/h2&gt;
&lt;h2&gt;Fiber broadband is coming!&lt;/h2&gt;
&lt;h4&gt;Check eligibility&lt;/h4&gt;
</code></pre>

**Tool :** 
HeadingsMaps extension, available for [Chrome](https://chrome.google.com/webstore/detail/headingsmap/flbjommegcjonpdmenkdiocclhjacmbi?hl=fr) and [Firefox](https://addons.mozilla.org/fr/firefox/addon/headingsmap/), extract and display page titles for the current page.
   
 
**<abbr>WCAG</abbr> reference:**
- <a href="https://www.w3.org/TR/WCAG22/#info-and-relationships">1.3.1 Info and Relationships</a>




## Use HTML semantics

**Target:** everyone, and especially people with visual impairments and cognitive limitations and elderly people.  
**When:** as of design and during content writing.

**Description:**
Use HTML elements as they should, for that they have been made (code validation and compliance with specifications) and respect their semantics to be sure to be fully interpreted by assistive technologies. 

**Checklist:**
Pages, if required, must contain semantically relevant lists. 
Add semantics to the <abbr>HTML</abbr> content using the following tags:
 - `ol` for ordered lists
 - `ul` for unordered lists
 - `li` for list items
 - `dl`, `dt` and `dd` for definition lists

There must be no empty list and a list must contain at least two elements to be a real list (unless this list is generated dynamically!).

Use `<blockquote>` for long citations and `<q>` for short ones.

Links are real links (a `<a>` tag):  they open a new URL, page or tab…

Buttons are real buttons (a `button`, ou `input type=button` tag): they trigger an action, a validation or allow a choice…

Respect as much as possible, the classic aspect of these elements to avoid bothering the user, accustomed to a specific aspect for them.

In the <abbr>HTML</abbr> code, ensure, when you validate, that, at least:
- Elements must have opening and closing tags
- Elements can be nested according to their specifications
- Elements cannot contain duplicate attributes
- Each <abbr>ID</abbr> is unique


**Objectif utilisateur&nbsp;:**  
Allows all users to anticipate how to use and possible behaviors for a given interface element.

**Objectif technique&nbsp;:**  
Forces the coherent structuring of the content by the creator of the site.

**<abbr>WCAG</abbr> reference:**
- <a href="https://www.w3.org/TR/WCAG22/#info-and-relationships">1.3.1 Info and Relationships</a>
- <a href="https://www.w3.org/TR/WCAG22/#parsing">4.1.1 Parsing</a>
- <a href="https://www.w3.org/TR/WCAG22/#name-role-value">4.1.2 Name, Role, Value</a>

**Tool:**

[<abbr>HTML</abbr> and <abbr>CSS</abbr> Validation Service](https://validator.w3.org/)




## Declaring the main language and language changes 

**Target:** everyone, particularly people with visual impairments.  
**When:** during development.

**Description:** 

Specify the primary language of the document with the attribute `lang` in the `html` tag.
Also specify the language of a content in a language other than the primary one, using the `lang` attribute in the <abbr>HTML</abbr> element containing the foreign language text.  

**Checklist:**

For words or phrases in foreign language used as generic terms (déjà vu, chef d'œuvre …) or proper names, do not indicate a change of language.

**Users’ goal:**

This attribute allows you to specify the language to the speech synthesis.

**Technical goal:**

Enable search engines to identify the language of a page to improve the natural referencing.  

**Example for a page in French:** 

- using <abbr>HTML</abbr>: `<html lang="fr">`
- using XHTML: `<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="fr" lang="fr">`

**Example of language change:** 
`découvrir Orange <span lang="en">live</span> TV`

**<abbr>WCAG</abbr> reference:**  
- <a href="https://www.w3.org/TR/WCAG22/#language-of-page">3.1.1 Language of Page</a>
- <a href="https://www.w3.org/TR/WCAG22/#language-of-parts">3.1.2 Language of Parts</a>




## Structuring data tables

**Target:** everyone, particularly people with visual disabilities.  
**When:** as of design and during development.

**Description:**

For tabular data:
- Use the `table` element with `th`(for table headers), `td`,` tr` children elements.
- Use the `scope` attribute with `row` / `col` values to associate header cells and data cells. For complex tables, use the` id` and `headers` attributes.
- Use the `caption` tag, a `h1` to `h6` tag just before the table or use a text near the table via an `aria-labelledby` attribute in the `table` element to associate a title to the table (see [ARIA attributes that can save you](../../../articles/aria-attributes-that-can-save-you/)).
- Add a summary to explain the structure of a complex table :
 - **HTML5**: add the summary directly in the `caption`.
 - **Previous version:** add the summary in a `summary` attribute.


**Checklist:**

- Reminder: Do not use tables for page layout purposes. 
- The caption (`caption`) can be replaced by a section title (`hx`) located before the table.
- Prefer splitting a complex table into several simpler tables.
- The `tbody`, `tfoot` and `thead` tags have no influence on accessibility, hence, there is no obligation to use them.

In the case of a complex table, a summary is present to explain the structure:
- **HTML5**: the summary of the table is present in the legend (`caption`).
- **HTML5 - alternative solution**: the summary is linked to the array via an `aria-describedby` attribute.
- **Previous version:** the summary is present in a `summary` attribute of the table.

**Users’ goal:**

Giving a summary and title for data tables allows everyone to know quickly its purpose without having to read it. For visually impaired users, binding cells to headers allows them to know where they are situated and understand the data in it.

**Technical goal:**

Improve natural referencing.

**<abbr>WCAG</abbr> reference:**  
- <a href="https://www.w3.org/TR/WCAG22/#info-and-relationships">1.3.1 Info and Relationships</a>
