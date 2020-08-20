---
title: "Keyboard navigation"
---

# Keyboard navigation

<p class="lead">Ensure the user can navigate using the keyboard only</p>

## Navigating with the keyboard

**Target:** everyone, especially people with motor or visual impairments or using a device outdoors.  
**When:** when designing the service and during development.

**Description:**  
All features must be accessible using the keyboard only. Pressing the keyboard <kbd>Tab</kbd> key, the browser must passes the focus on each clickable elements. 

Moreover, if the features are mouse-specific (drag and drop, right click menu…), ensure that these are also available through other means elsewhere in the interface (button, icon, menu…).

See [how to navigate with a keyboard](../../test-tools/keyboard-navigation/) in a web browser.

**Example:**  
In the webmail, right-clicking on the “trash” opens a menu to empty the trash, this option should be also available through an “empty the trash” button elsewhere in the interface or from a drop-down menu accessible with the keyboard.




## Focus visibility

**Target:** everyone and especially people with visual impairments or cognitive limitations, motor disabilities and using a device outdoors.  
**When:** as of graphic design and during development.

**Description:**  
The position of the keyboard focus must be visible to all users. By default, the browser surrounds the item with dotted lines or a colored box. This behavior can be modified (we recommend at least `2px` for this dotted box) or replaced (color inversion, changing the background color / text ...) to be made more visible but must not be deleted.
Be sure to provide a sufficient 3: 1 contrast ratio with the background color to make the focus visible (see [Measure Color Contrast Level](../../test-tools/color-contrast-level)).
Moreover, it is necessary to check the visibility of the focus on all the focusable elements, in particular, because the background color of the element can be the same as the focus and thus, hide it.
Users navigating using the keyboard (TAB key) need to know the focus position at all times.

The visible effect when taking focus should be planned from the graphic design phase, as well as the visible effect when hovering.

    
**Do:**  
In the following screenshots, the focus is located on the “209 SMS/month”. 
The first figure shows the default behavior (focus represented by a dotted box).
In the second capture, the dotted lines have been removed, replaced by a coloured box to explicitly indicate the location of the focus.  
![screenshot showing the default focus](../../images/focus.png)
![screenshot with a custom focus](../../images/focus2.png)
