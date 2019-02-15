# Ensure the user keeps control during interactions

<script>$(document).ready(function () {
    setBreadcrumb([
        {"label":"Themed WCAG index - Developers", "url": "./incontournables.html#dev"},
        {"label":"Ensure the user keeps control during interactions"}
    ]);
});</script>

<span data-menuitem="incontournables"></span>


**Target: **Everyone, especially those who are visually impaired, cognitive or with attention deficit.  
**When: **early in the design phase and during development.

**Description: **  
- Do not induce a change of context when setting the focus on an element, entering data or activating a form element without this change being predictable (button) or the user has been warned.
- Do not impose on the user a time limit to perform an action. This must be able to extend a time limit if appropriate.
- If keyboard shortcuts based on a single key is available, it is necessary to take some measures to avoid possible conflicts with assistive technology.
- The user must have control on the contents opening on hover or focus.

**Checklist:**  
1. Regarding shortcuts, make sure that at least one of the following statements is true:
 - **turn off**: the shortcut can be turned off.
 - **modification**: a mechanism is available to remap the shortcut to use one or more successive non-printable keyboard characters (e.g. Ctrl, Alt, etc).
 - **focus activation**: the keyboard shortcut for a user interface component is only active when that component has focus.

2. If content appears on mouse over or focus (eg tooltip), the user must be able to:
 - Hide this new content without the need to move the pointer or focus; eg with the <kbd>esc.</kbd> key (useful especially for screen magnifier users).
 - Move the mouse pointer on this new content without it disappearing.

3. If actions are to be performed in a timely manner, verify that the user can extend or remove this restriction.

**User Objective: ** give all users control of the context changes related to their action and give them the necessary time to perform an action.

**Example: ** a form must have a send button. It should not be sent automatically after the user input.

**Reference <abbr>WCAG</abbr>&nbsp;:**  
- <a href="https://www.w3.org/TR/WCAG21/#content-on-hover-or-focus">1.4.13 Content on Hover or Focus</a>
- <a href="https://www.w3.org/TR/WCAG21/#timing-adjustable">2.2.1 Timing Adjustable</a>
- <a href="https://www.w3.org/TR/WCAG21/#on-focus">3.2.1 On Focus</a>
- <a href="https://www.w3.org/TR/WCAG21/#on-input">3.2.2 On Input</a>
- <a href="https://www.w3.org/TR/WCAG21/#character-key-shortcuts">2.1.4 Character key shortcuts</a>

<!--  This file is part of a11y-guidelines | Our vision of mobile & web accessibility guidelines and best practices, with valid/invalid examples.
 Copyright (C) 2016  Orange SA
 See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). -->