# Focus visibility

<script>$(document).ready(function () {
    setBreadcrumb([
        {"label":"Themed WCAG index - Design", "url": "./incontournables.html"},
        {"label":"Focus visibility"}
    ]);
});</script>

<span data-menuitem="incontournables"></span>
**Target: ** everyone and especially people with visual impairments or cognitive limitations, motor disabilities and using a device outdoors.  
**When: ** as of graphic design and during development.

**Description:**  
The position of the keyboard focus must be visible at all times. When a clickable element receives the focus (link, button…), this must be visible to the user. By default, the browser sets a dotted or a coloured box around the element. This behavior can be replaced by a custom effect (improving the contrast, for example) but must not be deleted. Users who navigate using the keyboard (<kbd>TAB</kbd>) need to know the position of the focus.    

The focus indicator as well as the hover indicator (when the mouse is over an element) should be carefully considered since the graphic design.

    
**Do: **  
In the following screenshots, the focus is located on the “209 SMS/month”. 
The first figure shows the default behavior (focus represented by a dotted box).
In the second capture, the dotted lines have been removed, replaced by a coloured box to explicitly indicate the location of the focus.  
![screenshot showing the default focus](images/focus.png)
![screenshot with a custom focus](images/focus2.png)
<!--  This file is part of a11y-guidelines | Our vision of mobile & web accessibility guidelines and best practices, with valid/invalid examples.
 Copyright (C) 2016  Orange SA
 See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). -->