---
title: "General navigation"
---

# General navigation

## Have sufficiently large click areas

**Target&nbsp;:** everyone and in particular for people with motor disabilities.  
**When&nbsp;:** from the design phase and during development.

**Description&nbsp;:**  

Insufficient size for a clickable element can make it difficult to interact with the application. Each clickable element of the application must be of sufficient size.

**To be verified&nbsp;:**

- The click zone has a minimum size of 48 dp.
- The click zone has a margin around the element of at least 8 dp
- Click errors can be undone by moving your finger out of the clickable area before releasing.

**Tool&nbsp;:**

You can directly test your applications on certain accessibility criteria and in particular the size of the click zones with the [AccessibilityScanner](https://play.google.com/store/apps/details?id=com.google.android.apps.accessibility.auditor) application. Available from Android 6. 

**Valid example&nbsp;:** 

In the examples below, the frame with border corresponds to the size of the interactive area.  
<img src="../../../images/clic_ok.png" alt="example of an interactive component with a fairly large interaction area" width="300" height="55">

**Invalid example&nbsp;:**  

<img src="../../../images/clic_ko.png" alt="example of an interactive component with a too small interaction area" width="300" height="55">


**Reference <abbr>WCAG</abbr>&nbsp;:**  
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#target-size">2.5.5 Target Size</a>
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#pointer-cancellation">2.5.2 Pointer Cancellation</a>


<br/><br/>
## Have an application that can be used in any orientation

**Target&nbsp;:** everyone and in particular people with visual or motor impairments.
**When&nbsp;:** during design and development.

**Description&nbsp;:**
Content access of an application should not depend on the screen orientation (portrait and landscape).

**To be verified&nbsp;:**
- The use of standard graphic components that support both modes (fragments...), or define a specific design for each orientation.
- The application is not locked in one orientation (portrait or landscape).

**Valid example&nbsp;:**  

The application can be used in both portrait and landscape mode.
<img src="../../../images/portrait.jpg" alt="example of a valid screen in portrait mode" width="300" height="530">
<br/><br/>
<img src="../../../images/paysage.jpg" alt="example of a valid screen in landscape mode" width="300" height="170">


**Reference <abbr>WCAG</abbr>&nbsp;:**  
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#orientation">1.3.4 Orientation</a>

<br/><br/>
## Propose an alternative to gestural actions

**Target&nbsp;:** everyone and in particular people with visual and/or motor impairments.
**When&nbsp;:** from the design phase and during development.

**Description&nbsp;:**

Navigating between several pages using a horizontal swipe (especially with ViewPagers) can become complex for people with motor or visual impairments. It is essential to add an alternative, using "Next" and "Previous" buttons for example.

**To be verified&nbsp;:**

- The actions triggered by a user gesture or a movement of the device has an alternative.

**Valid example&nbsp;:**

<img src="../../../images/scroll_h1.png" alt="example of an accessible horizontal scroll, with arrows marking the horizontal scroll and dots indicating the number of pages available " width="300" height="530">


**Invalid example&nbsp;:**

<img src="../../../images/scroll_h2.png" alt="example of horizontal scroll not accessible, without information about the scroll action." width="300" height="530">


**Reference <abbr>WCAG</abbr>&nbsp;:**  
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#pointer-gestures">2.5.1 Pointer Gestures</a>
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#motion-actuation">2.5.4 Motion Actuation</a>

<br/><br/>
## Have readable texts

**Target&nbsp;:** everyone and in particular people with visual impairments and dyslexics.  
**When&nbsp;:** from the design phase and during development.

**Description&nbsp;:**

The text can cause readability problems when it is too small or the font has impasto : a minimum text size of 14sp is recommended. 

Android natively offers the Roboto font which has 16 variants, including many sans serif that are perfectly adapted to the readability need : roboto regular, roboto thin, roboto medium, etc... Serif fonts, such as the popular Times New Roman or Georgia, are not suitable.

**To be verified&nbsp;:**

- The font is sans-serif
- The texts are large enough to be read comfortably.
- There is no italics used


**Reference <abbr>WCAG</abbr>&nbsp;:**  
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#text-spacing">1.4.12 Text Spacing</a>

<br/><br/>
## Use native components

**Target&nbsp;:** everyone.  
**When&nbsp;:** from the design phase and during development.

**Description&nbsp;:**  

Native components integrate accessibility (most of the time). Navigation in a standard interface is more comfortable since the behaviors of the different elements are usual.

Make maximum use of native components: if no standard component can meet the need, create a dedicated component based on a standard component while maintaining navigation consistency and accessibility.  
 
<br/><br/>

## Make UI with timeout adaptable 

**Target&nbsp;:** everyone and in particular people with visual and/or motor impairments.
**When&nbsp;:** from the design phase and during development.

**Description&nbsp;:**

In some applications, the UI may change after a timeout. For example, with video players:  control buttons associated with the video disappear after about ten seconds without interaction. 

This automatic UI update is an issue for accessibility, cause a user could need more time to interact with the elements. This timeout must be adaptable according to the needs of each user. 

An accessibility option named "Time to take action" exists since Android 10, and allows to define its own timeout. By calling this option from the application, it is possible to adapt its interfaces with timeout to the user.

**To be verified&nbsp;:**

- A UI with a timeout has a configurable delay.

**Reference <abbr>WCAG</abbr>&nbsp;:**  
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#timing-adjustable">2.2.1 Timing Adjustable</a>

