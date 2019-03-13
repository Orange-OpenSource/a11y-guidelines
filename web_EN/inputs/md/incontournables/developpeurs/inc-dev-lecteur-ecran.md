# Make sure the main features can be used with screen readers

<script>$(document).ready(function () {
    setBreadcrumb([
        {"label":"WCAG criteria by project phase - Developers", "url": "./incontournables.html#dev"},
        {"label":"Make sure the main features can be used with screen readers"}
    ]);
});</script>

<span data-menuitem="incontournables"></span>

**Target: **everyone, especially people with visual impairments.  
**When: **during development.

**Description: **

Follow general recommendations for accessibility, use primarily the <abbr>HTML</abbr> standard components, otherwise, use the <abbr>ARIA</abbr> (Accessible Rich Internet Applications) interface for complex components.


**Checklist: **

Ensure there is no blocking point with a browser/screen reader combination (Firefox/NVDA, IE/Jaws, Safari/VoiceOver) when a user navigates (accessing the main features of the application).
Indeed, screen reader users are the most affected by the lack of accessibility, we can identify a huge amount of problems in satisfying this requirement.

**Users’ goal: **

Allow the screen reader users to access the main features of the application, but also ensure the usability of the application for all users.

**Reference <abbr>WCAG</abbr>&nbsp;:**  
- [4.1.2 Name, Role, Value](https://www.w3.org/TR/WCAG21/#name-role-value)

<!--  This file is part of a11y-guidelines | Our vision of mobile & web accessibility guidelines and best practices, with valid/invalid examples.
 Copyright (C) 2016  Orange SA
 See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). -->