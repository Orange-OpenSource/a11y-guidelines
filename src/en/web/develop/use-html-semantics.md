---
title: "Use HTML semantics"
---

# Use HTML semantics

**Target: **everyone, and especially people with visual impairments and cognitive limitations and elderly people.  
**When: **as of design and during content writing.

**Description: **
Use HTML elements as they should, for that they have been made (code validation and compliance with specifications) and respect their semantics to be sure to be fully interpreted by assistive technologies. 

**Checklist: **
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


**Objectif utilisateur&nbsp;: **  
Allows all users to anticipate how to use and possible behaviors for a given interface element.

**Objectif technique&nbsp;: **  
Forces the coherent structuring of the content by the creator of the site.

**Reference <abbr>WCAG</abbr>&nbsp;:**
- <a href="https://www.w3.org/TR/WCAG21/#info-and-relationships">1.3.1 Info and Relationships</a>
- <a href="https://www.w3.org/TR/WCAG21/#parsing">4.1.1 Parsing</a>
- <a href="https://www.w3.org/TR/WCAG21/#name-role-value">4.1.2 Name, Role, Value</a>

**Tool:  
**[<abbr>HTML</abbr> and <abbr>CSS</abbr> Validation Service](https://validator.w3.org/)
