# Navigating with the keyboard

<script>$(document).ready(function () {
    setBreadcrumb([
        {"label":"Themed WCAG index - Design", "url": "./incontournables.html"},
        {"label":"Navigating with the keyboard"}
    ]);
});</script>

<span data-menuitem="incontournables"></span>
**Target: ** everyone, especially people with motor or visual impairments or using a device outdoors.  
**When: ** when designing the service and during development.

**Description:**  
All features must be accessible using the keyboard only. Pressing the keyboard <kbd>Tab</kbd> key, the browser must passes the focus on each clickable elements. 

Moreover, if the features are mouse-specific (drag and drop, right click menu…), ensure that these are also available through other means elsewhere in the interface (button, icon, menu…).

See [how to navigate with a keyboard](./methodes-outils-clavier.html) in a web browser.

**Example: **  
In the webmail, right-clicking on the “trash” opens a menu to empty the trash, this option should be also available through an “empty the trash” button elsewhere in the interface or from a drop-down menu accessible with the keyboard.

<!--  This file is part of a11y-guidelines | Our vision of mobile & web accessibility guidelines and best practices, with valid/invalid examples.
 Copyright (C) 2016  Orange SA
 See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). -->