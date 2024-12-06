---
title: "Web develop - Assistive technologies"
abstract: "Assistive technologies, web accessibility dev recommandations"
---

# Web develop - Assistive technologies

<p class="lead">Allow the screen reader user access to the main features of the application, but also ensure for all users the usability of the application</p>




## Make sure the main features can be used with screen readers

**Target:** everyone, especially people with visual impairments.  
**When:** during development.

**Description:**

Follow general recommendations for accessibility, use primarily the <abbr>HTML</abbr> standard components, otherwise, use the <abbr>ARIA</abbr> (Accessible Rich Internet Applications) interface for complex components.


**Checklist:**

Ensure there is no blocking point with a browser/screen reader combination (Firefox/NVDA, IE/Jaws, Safari/VoiceOver) when a user navigates (accessing the main features of the application).
Indeed, screen reader users are the most affected by the lack of accessibility, we can identify a huge amount of problems in satisfying this requirement.

**Users’ goal:**

Allow the screen reader users to access the main features of the application, but also ensure the usability of the application for all users.

**Reference <abbr>WCAG</abbr>&nbsp;:**  
- [4.1.2 Name, Role, Value](https://www.w3.org/TR/WCAG22/#name-role-value)
