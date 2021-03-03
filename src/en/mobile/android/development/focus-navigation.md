---
title: "Keyboard navigation (Switch Access)"
---

# Keyboard navigation (Switch Access)

## Access to interactive elements

**Target:** everyone and especially people with motor disabilities who use a keyboard to navigate.  
**When:** during design and development.

Navigation using Switch Access is very useful for people with motor or cognitive difficulties. This navigation makes it possible to move from one interactive element to the next (elements on which an action can be performed). This is done through the use of a Bluetooth keyboard connected to a smartphone.

To manage keyboard navigation, there are 2 things to check:
- Allow focus on interactive elements (focus navigation only concerns interactive elements). If, for example, your application has custom views that can be clicked on, you must make sure that these views are focusable by setting the `focusable` attribute to `true`.
- Manage the focus display: any interactive element can receive the focus, so the `state_focused` must be defined and allow to easily distinguish which element has the focus.

Note: Android Pie (9, API 28), introduces a specific focus for screen reader to avoid edge effects between the screen reader focus (`screenReaderFocusable`) and the keyboard focus (`focusable`). Keyboard navigation is not sensitive to the `screenReaderFocusable`.

**To be verified:**

- With the keyboard navigation, it is possible to visually determine which element has the focus.
- All the features are accessible with the keyboard navigation.
- All interactive elements are highlighted with the keyboard navigation. 
- Only the interactive elements are highlighted with the keyboard navigation.

**Examples**:
Example of a selector including the `state_focused` :
<pre><code class="xml">&lt;selector xmlns:android="http://schemas.android.com/apk/res/android"&gt;
	&lt;!-- Non focused states --&gt;
	&lt;item android:state_focused="false" android:state_selected="false" android:state_pressed="false" android:drawable="@drawable/draw_unselected_selector" /&gt;
	&lt;item android:state_focused="false" android:state_selected="true"  android:state_pressed="false" android:drawable="@drawable/draw_selected_selector" /&gt;
&nbsp;
	&lt;!-- Focused states --&gt;
	&lt;item android:state_focused="true" android:state_selected="false" android:state_pressed="false" android:drawable="@drawable/draw_unselected_focused_selector" /&gt;
	&lt;item android:state_focused="true" android:state_selected="true"  android:state_pressed="false" android:drawable="@drawable/draw_selected_focused_selector" /&gt;
&nbsp;
	&lt;!-- Pressed --&gt;
	&lt;!-- Non focused states --&gt;
	&lt;item android:state_focused="false" android:state_selected="false" android:state_pressed="true" android:drawable="@drawable/draw_unselected_pressed_selector" /&gt;
	&lt;item android:state_focused="false" android:state_selected="true"  android:state_pressed="true" android:drawable="@drawable/draw_selected_pressed_selector" /&gt;
&nbsp;
	&lt;!-- Focused states --&gt;
	&lt;item android:state_focused="true" android:state_selected="false" android:state_pressed="true" android:drawable="@drawable/draw_unselected_pressed_selector" /&gt;
	&lt;item android:state_focused="true" android:state_selected="true"  android:state_pressed="true" android:drawable="@drawable/draw_selected_pressed_selector" /&gt;
&lt;/selector&gt;</code></pre>

Example of a focusable view with keyboard navigation
<pre><code>&lt;View android:focusable="true"
              android:layout_width="0px"
              android:layout_height="0px" /&gt;</code></pre>


Example of a view that is not focusable with keyboard navigation but focusable with touch	
<pre><code>&lt;View android:focusableInTouchMode="true" 
              android:layout_width="0px"
              android:layout_height="0px" /&gt;</code></pre>


**Reference <abbr>WCAG</abbr>:**  
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#keyboard">2.1.1 Keyboard</a>
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#name-role-value">4.1.2 Name, Role, Value</a>
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#focus-visible">2.4.7 Focus Visible</a>

## Keyboard navigation order

**Target:** everyone and especially people with motor disabilities who use a keyboard to navigate.  
**When:** during design and development.

**Description:**

Keyboard navigation, to be understandable and easy to use, must provide a coherent and understandable order of navigation. It is important to manage the focus order : through the options `nextFocusDown`, `nextFocusUp`, `nextFocusRight` and `nextFocusLeft`, you can specify which view should take the focus according to the use of the <kbd>tab</kbd>, <kbd>down</kbd>, <kbd>up</kbd>, <kbd>right</kbd> and <kbd>left</kbd> arrows.

**Note**: `nextFocusDown`, `nextFocusUp`, `nextFocusRight`, `nextFocusLeft`, `focusable` and other focus management options are available directly in the <abbr>XML</abbr> or in the code through the corresponding methods.
  
For more information on [focus management on Android](http://developer.android.com/guide/topics/ui/accessibility/apps.html#focus-nav).

**To be verified:**

- The keyboard navigation order is logical and consistent.
- Items are grouped together when they are linked (example: content within a clickable item in a list).

**Example**
<pre><code class="xml">&lt;EditText
    android:id="@+id/et1"
    android:nextFocusDown="@+id/et2"
    android:nextFocusUp="@+id/et2"
    ....../&gt;

&lt;EditText
    android:id="@+id/et2"
    android:nextFocusDown="@+id/et1"
    android:nextFocusUp="@+id/et1"
    ...../&gt;</code></pre>


**Reference <abbr>WCAG</abbr>:**  
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#meaningful-sequence">1.3.2 Meaningful Sequence</a>
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#no-keyboard-trap">2.1.2 No Keyboard Trap</a>
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#focus-order">2.4.3 Focus Order</a>
