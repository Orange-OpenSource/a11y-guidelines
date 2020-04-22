---
title: "Warn the user when opening a new window"
---

# Warn the user when opening a new window

**Target: **everyone, especially people with visual impairments, cognitive limitations or having attention difficulties.  
**When: **as of design and during development.

**Description:**

Notify the user of any new window opening by mentioning it in the text of the link.
If it is not possible, use the `title` attribute with the whole information needed (e.g. "buy the Nokia  7510 (new window)") and add, at choice: 
- the use of an icon (image with an `alt` indicating the opening of a new window or just "(new window)").
- a hidden piece of text in <a href="./exemples/masquage/index.html"> accessible display </a> via CSS.
- an attribute `aria-label` or` aria-labelledby` containing all the contents of `title` (see [ARIA attributes that can save you] (./ label-ledby-describedby.html)).

**Example: ** 
  
Example of an icon that indicates the opening of a new window.  
![screenshot of a link with an icon indicating the opening of a new window](./images/nouvelle-fenetre.png)  

**Checklist: **

For any link opening a new window or a new tab, a mention like “(new window)” is shown in the link label, or a “(new window)” mention is positioned off the screen via <abbr>CSS</abbr> (<a href="./exemples/masquage/index.html">accessible hidden content</a>).

**Users’ goal: **

Avoid the unexpected opening of a window, because this can disturb, disrupt, or confuse the user. In particular for persons using mobile browsers, using speech synthesis or cognitively impaired.

**Do:**     
For any external link and opening a new window, the label could be: “Go to the orange.com site (new window)”, for a picture-link the `alt` attribute could be: “consult the <abbr>EULA</abbr> (new window)”.    

**Reference <abbr>WCAG</abbr>&nbsp;:**  
- <a href="https://www.w3.org/TR/WCAG21/#on-input">3.2.2 On Input</a>
