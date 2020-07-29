---
title: "The focus order must be sequential and logical without keyboard trap"
---

# The focus order must be sequential and logical without keyboard trap

**Target:** everyone, especially people with motor or visual impairments and using a device outdoors.  
**When:** during development.

**Description:**

Elements (links, buttons, form fields) must receive the focus in a logical order (top to bottom, left to right) when the focus order is necessary for understanding contents or for keyboard operability, even for dynamically generated content appearing or disappearing (DOM modification, Ajax,…). Of course, the focus must not be trapped or blocked.

For the content too, if a sense of reading is necessary for a good understanding, it must be ensured that it is coherent for all users.

Example (numbered bullets indicate how the focus moves in the page) :  
![Screenshot showing focus order](../../images/focus/focus-order.png)

**Checklist:**

- To validate this requirement, the focus position must be visible at all times (`outline` and `:focus` <abbr>CSS</abbr>  properties), see requirement 20 below.
- Be careful, the order of appearance of the elements in the <abbr>HTML</abbr> code must be the same as the order in which the focus is moved or the reading order though the page if this order is important to understand or to be able to use the interface. An element at the end of the source code but positioned at the top of the page via <abbr>CSS</abbr> will be the last to receive the focus. It's the easiest solution! 
- For maintainability, avoid using the `tabindex` attribute with values higher than 0.
- Even when content appears or disappears of content, it is necessary to keep this logical and sequential path. This is true for dynamically generated content or for <abbr>SPAs</abbr> (single page applications). For more details, see [Manage Focus for Dynamic Content](../../components-examples/dynamic-focus/)

**Users’ goal:**

Allowing logical navigation without “trapping” the keyboard in the pages of the application. Necessary for users navigating with the keyboard (visually impaired, motor impaired, cognitive impaired, using a device outdoors).

**Do:**

In a page dedicated to search in the site content, the focus order should first go to the search form before going to the list of the results.

**Don’t:**     

A page containing a video player where the focus can enter the player, but cannot get out (keyboard trap).        

## <abbr>WCAG</abbr> references:

- [1.3.2 Meaningful Sequence](https://www.w3.org/TR/WCAG21/#meaningful-sequence)
- [2.1.2 No Keyboard Trap](https://www.w3.org/TR/WCAG21/#no-keyboard-trap)
- [2.4.3 Focus Order](https://www.w3.org/TR/WCAG21/#focus-order)
- [4.1.2 Name, Role, Value](https://www.w3.org/TR/WCAG21/#name-role-value)
