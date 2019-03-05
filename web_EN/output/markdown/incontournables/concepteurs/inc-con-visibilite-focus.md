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
The position of the keyboard focus must be visible to all users. By default, the browser surrounds the item with dotted lines or a colored box. This behavior can be modified (we recommend at least `2px` for this dotted box) or replaced (color inversion, changing the background color / text ...) to be made more visible but must not be deleted.
Be sure to provide a sufficient 3: 1 contrast ratio with the background color to make the focus visible (see [Measure Color Contrast Level](methodes-outils-contrastes.html)).
Moreover, it is necessary to check the visibility of the focus on all the focusable elements, in particular, because the background color of the element can be the same as the focus and thus, hide it.
Users navigating using the keyboard (TAB key) need to know the focus position at all times.

The visible effect when taking focus should be planned from the graphic design phase, as well as the visible effect when hovering.

    
**Do: **  
In the following screenshots, the focus is located on the “209 SMS/month”. 
The first figure shows the default behavior (focus represented by a dotted box).
In the second capture, the dotted lines have been removed, replaced by a coloured box to explicitly indicate the location of the focus.  
![screenshot showing the default focus](images/focus.png)
![screenshot with a custom focus](images/focus2.png)
<!--  This file is part of a11y-guidelines | Our vision of mobile & web accessibility guidelines and best practices, with valid/invalid examples.
 Copyright (C) 2016  Orange SA
 See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). -->