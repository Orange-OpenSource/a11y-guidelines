# Avoid dialogues and opening new windows

<script>$(document).ready(function () {
    setBreadcrumb([
        {"label":"Themed WCAG index - Design", "url": "./incontournables.html"},
        {"label":"Avoid dialogues and opening new windows"}
    ]);
});</script>

<span data-menuitem="incontournables"></span>

**Target: ** elderly people, people with cognitive or visual impairments or using a device outdoors.  
**When: ** as of design and in the development.

**Description:**  
Avoid as much as possible the actions that open a new window (or a new tab) of the browser. If a link triggers the opening of a new window, you need to ensure that the text “new window” is vocalized by screen readers programmatically. So that visually impaired people know that a new window has been opened.

Also avoid the systematic use of dialogues to display information in the pages (presentation of service…).
They must be reserved for important information that requires immediate attention and remain small.

 These modal windows or pop-in often cause accessibility problems for people who navigate with a keyboard or a screen reader, and they will require special attention during the development phase.

**Don’t: **  
In the example below the use of a dialogue is not justified. Using a standard web page would:
- allow more space to the content (by removing the margins around the dialogue),
- allow the “back” button to go back when navigating between pages of the dialogue,
- make the display on small screens easier,
- avoid accessibility problems for people who navigate using the keyboard or using a screen reader,
- reduce the weight of the page and improve loading time, as in this example the page behind the dialogue box must be charged.  

![screenshot of a dialogue way too big](images/dialog.png)

<!--  This file is part of a11y-guidelines | Our vision of mobile & web accessibility guidelines and best practices, with valid/invalid examples.
 Copyright (C) 2016  Orange SA
 See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). -->