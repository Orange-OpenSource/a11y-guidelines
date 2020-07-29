---
title: "Keyboard navigation"
---

# Allow the use of the main features of the application with the keyboard

**Target:** everyone, especially people with motor or visual impairment and using a device outdoors.  
**When:** as of design and during development.

**Description:**

Implement event handlers that don’t rely on mouse events only, therefore allow to be controlled by the keyboard and this without time limit.

**Checklist:**

- All the important actions performed with the mouse can also be done with the keyboard, even if you have to provide a specific alternative for the complex interactions (drag'n'drop, gestures with several fingers on mobile ...) while avoiding countless strikes.
- Make maximum use of the basic <abbr>HTML</abbr> interactive components (fields, links, buttons), these being natively accessible to the keyboard. Otherwise, ensure that the custom components are keyboard operable in a conventional manner.
- All important actions performed with a mouse must also be reproduced with the keyboard, even complex interactions (drag & drop, mobile touch gestures…).

See [how to navigate with a keyboard](../../test-tools/keyboard-navigation/) in a web browser.

**Users’ goal:**
 
Allow users who cannot use the mouse (blind, motor disabled, mobile web, outdoor…) to access the main features of the application with the keyboard.

**Do:**     
- A sub-menu displayed when the mouse is over an element must also be displayed when the parent menu item receives the keyboard focus.
- In a webmail, right-clicking on the “trash” icon opens a menu to empty the trash, this option should be also available from an “empty the trash” button elsewhere in the interface or from a drop-down menu accessible with the keyboard.
 
**Don’t:**     
A functionality only available through drag & drop and without any keyboard equivalent.

**Reference <abbr>WCAG</abbr>&nbsp;:**  
- <a href="https://www.w3.org/TR/WCAG21/#keyboard">2.1.1 Keyboard</a>
- <a href="https://www.w3.org/TR/WCAG21/#name-role-value">4.1.2 Name, Role, Value</a>
