---
title: "Keyboard navigation (Switch Access)"
---

# Keyboard navigation (Switch Access)

## Access to interactive elements

**Target&nbsp;:** everyone and especially people with motor disabilities who use a keyboard to navigate.  
**When&nbsp;:** during design and development.

Navigation using Switch Access is very useful for people with motor or cognitive difficulties. This navigation makes it possible to move from one interactive element to another (element on which an action can be performed). It corresponds to the navigation that can be done with a Bluetooth keyboard linked to a smartphone.

To manage keyboard navigation, there are 2 things to check:
- Allow focus on interactive elements (focus navigation only concerns interactive elements). If, for example, your application has custom views that can be clicked on, you must make sure that these views are focusable by setting the `focusable` attribute to `true`.
- Manage the focus display: any interactive element can receive the focus, so the `state_focused` must be defined and allow to easily distinguish which element has the focus.

**To be verified&nbsp;:**

- With the keyboard navigation, it is possible to visually determine which element has the focus.
- All the features are accessible with the keyboard navigation.
- All interactive elements are highlighted with the keyboard navigation. 
- Only the interactive elements are highlighted with the keyboard navigation.


**Reference <abbr>WCAG</abbr>&nbsp;:**  
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#keyboard">2.1.1 Keyboard</a>
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#name-role-value">4.1.2 Name, Role, Value</a>
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#focus-visible">2.4.7 Focus Visible</a>


## Order keyboard navigation

**Target&nbsp;:** everyone and especially people with motor disabilities who use a keyboard to navigate.  
**When&nbsp;:** during design and development.

**Description&nbsp;:**

Keyboard navigation, to be understandable and easy to use, must provide a coherent and comprehensible order of navigation. It is important to manage the focus order : through the options `nextFocusDown`, `nextFocusUp`, `nextFocusRight` and `nextFocusLeft`, you can specify which view should take the focus according to the use of the tab, down, up, right and left arrows.

**Note**: `nextFocusDown`, `nextFocusUp`, `nextFocusRight`, `nextFocusLeft`, `focusable` and other focus management options are available directly in the <abbr>XML</abbr> or in the code through the corresponding methods.
  
For more information on [focus management on Android](http://developer.android.com/guide/topics/ui/accessibility/apps.html#focus-nav).

**To be verified&nbsp;:**

- The keyboard navigation order is logical and consistent.
- Items are grouped together when they are linked (example: content within a clickable item in a list).


**Reference <abbr>WCAG</abbr>&nbsp;:**  
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#meaningful-sequence">1.3.2 Meaningful Sequence</a>
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#no-keyboard-trap">2.1.2 No Keyboard Trap</a>
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#focus-order">2.4.3 Focus Order</a>


