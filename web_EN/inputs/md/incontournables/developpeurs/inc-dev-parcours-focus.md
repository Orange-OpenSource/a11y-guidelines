# The focus order must be sequential and logical without keyboard trap

<script>$(document).ready(function () {
    setBreadcrumb([
        {"label":"WCAG criteria by project phase - Developers", "url": "./incontournables.html#dev"},
        {"label":"The focus order must be sequential and logical without keyboard trap"}
    ]);
});</script>

<span data-menuitem="incontournables"></span>


**Target: **everyone, especially people with motor or visual impairments and using a device outdoors.  
**When: **during development.

**Description: **

Elements (links, buttons, form fields) must receive the focus in a logical order for the user, without being trapped or blocked, even for dynamically-generated content appearing or disappearing (changing the DOM, Ajax,…). 

Example (numbered bullets indicate how focus moves in the page) :  
![Screenshot showing focus order](./images/focus/focus-order.png)

**Checklist: **

- To validate this requirement, the focus position must be visible at all times (`outline` and `:focus` <abbr>CSS</abbr>  properties), see requirement 20 below.
- Be careful, the order of appearance of the elements in the <abbr>HTML</abbr> code is the same as the order in which the focus is moved though the page. An element at the end of the source code but positioned at the top of the page via <abbr>CSS</abbr> will be the last to receive the focus.
- For maintainability, avoid using the `tabindex` attribute with values higher than 0.
- Even when appearance or disappearance of content, it is necessary to keep this logical and sequential path. - Even when appearance or disappearance of content, it is necessary to keep this logical and sequential path. This is true for dynamically generated content or for <abbr>SPA</abbr> (single page application). For more details, see [Manage Focus for Dynamic Content](./exemples/dynFocus/index.html)

**Users’ goal: **

Allowing logical navigation without “trapping” the keyboard in the pages of the application. Necessary for users navigating with the keyboard (visually impaired, motor impaired, cognitive impaired, using a device outdoors).

**Don’t:**     
A page containing a video player where the focus can enter inside the player, but cannot get out (keyboard trap).        

**Reference <abbr>WCAG</abbr>&nbsp;:**
- [1.3.2 Meaningful Sequence](https://www.w3.org/TR/WCAG21/#meaningful-sequence)
- [2.1.2 No Keyboard Trap](https://www.w3.org/TR/WCAG21/#no-keyboard-trap)
- [2.4.3 Focus Order](https://www.w3.org/TR/WCAG21/#focus-order)
- [4.1.2 Name, Role, Value](https://www.w3.org/TR/WCAG21/#name-role-value)

<!--  This file is part of a11y-guidelines | Our vision of mobile & web accessibility guidelines and best practices, with valid/invalid examples.
 Copyright (C) 2016  Orange SA
 See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). -->