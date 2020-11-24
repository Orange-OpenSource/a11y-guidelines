﻿---
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

**Valid examples&nbsp;:** 

Classic example &nbsp;:
<pre><code class="xml">&lt;Button 
    android:text="Click"
    android:layout_width="48dp"
    android:layout_height="48dp"
    android:margin="8dp"
&#47;&gt;</code></pre>

Padding example &nbsp;:
<pre><code class="xml">&lt;Button 
    android:text="Click"
    android:layout_width="40dp"
    android:layout_height="40dp"
    android:padding="4dp"
    android:margin="8dp"
&#47;&gt;</code></pre>

**Invalid examples&nbsp;:** 

<pre><code class="xml">&lt;Button 
    android:text="Click"
    android:layout_width="48dp"
    android:layout_height="48dp"
    android:margin="4dp"
&#47;&gt;</code></pre>


<pre><code class="xml">&lt;Button 
    android:text="Click"
    android:layout_width="40dp"
    android:layout_height="40dp"
    android:margin="8dp"
&#47;&gt;</code></pre>


**Reference <abbr>WCAG</abbr>&nbsp;:**  
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#target-size">2.5.5 Target Size</a>
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#pointer-cancellation">2.5.2 Pointer Cancellation</a>


<br/><br/>
## Have readable texts

**Target&nbsp;:** everyone and in particular people with visual impairments and dyslexics.  
**When&nbsp;:** from the design phase and during development.

**Description&nbsp;:**

The text can cause readability problems when it is too small or the font has impasto : a minimum text size of 14sp is recommended. 

Android natively offers the Roboto font which has 16 variants, including many sans serif that are adapted to the readability need : roboto regular, roboto thin, roboto medium, etc... Serif fonts, such as the popular Times New Roman or Georgia, are not suitable.

**To be verified&nbsp;:**

- The font is sans-serif
- The texts are large enough to be read comfortably.
- There is no italics used

**Valid example&nbsp;:** 

<pre><code class="xml">&lt;TextView
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:fontFamily="sans-serif" 
    android:textSize="14sp"
    android:text="Exemple"
&#47;&gt;</code></pre>


**Unvalid example&nbsp;:** 
<pre><code class="xml">&lt;TextView
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:fontFamily="sans-serif" 
    android:textStyle="italic" 
    android:textSize="14sp"
    android:text="Exemple"
&#47;&gt;</code></pre>


<pre><code class="xml">&lt;TextView
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:fontFamily="sans-serif" 
    android:textSize="10sp"
    android:text="Exemple"
&#47;&gt;</code></pre>

**Reference <abbr>WCAG</abbr>&nbsp;:**  
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#text-spacing">1.4.12 Text Spacing</a>


<br/><br/>

## Make UI with timeout adaptable 

**Target&nbsp;:** everyone and in particular people with visual and/or motor impairments.
**When&nbsp;:** from the design phase and during development.

**Description&nbsp;:**

In some applications, the UI may change after a timeout. For example, with video players:  control buttons associated with the video disappear after about ten seconds without interaction. 

This automatic UI update is an issue for accessibility, cause a user could need more time to interact with the elements. This timeout must be adaptable according to the needs of each user. 

An accessibility option named "Time to take action" exists since Android 10, and allows to define its own timeout. By calling this option from the application, it is possible to adapt its interfaces with timeout to the user.

It is possible to exploit this option through the getRecommendedTimeoutMillis() function. This method supports user-defined timeouts for interactive and non-interactive user interface elements. The return value is influenced by both user preferences (Time to take action) and accessibility service APIs.

**To be verified&nbsp;:**

- A UI with a timeout has a configurable delay.

**Reference <abbr>WCAG</abbr>&nbsp;:**  
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#timing-adjustable">2.2.1 Timing Adjustable</a>



## Accessibility events & custom views

**Target&nbsp;:** everyone and in particular people with visual and/or motor impairments.
**When&nbsp;:** during development.

**Description&nbsp;:**
There are a lot of events related to the Accessibility API in Android. You can manipulate these events in the same way as other events. It is important to know that these events exist, allow to overload the vocalization of a component, and to enrich custom components that are not sufficiently accessible.

For more information, look at the links below.

**Links&nbsp;:**

- [`AccessibilityEvents`](http://developer.android.com/reference/android/view/accessibility/AccessibilityEvent.html)
- [Construire une vue custom accessible](https://developer.android.com/guide/topics/ui/accessibility/custom-views)
- [Exemple de squelette d’implémentation des événements](https://github.com/Pascale22/A11yEventApp) en <abbr>Kotlin</abbr>


**To be verified&nbsp;:**

- Custom views respond appropriately to accessibility
  
<br/><br/>

## WebView

**Target&nbsp;:** everyone and in particular people with visual and/or motor impairments.
**When&nbsp;:** during development.

**Description&nbsp;:**
WebView have a special treatment under Android. If you want a accessible web view, the HTML content must be accessible, i.e compliant with international standards on the subject: the WCAG2. To know these rules and learn the development techniques for an accessible web, visit the section of our site dedicated to the subject: [accessibility recommendations for the web](../../../../../../web/).

Make sure that the WebView allows JavaScript: `mWebView.getSettings().setJavaScriptEnabled(true);`.  
Under these conditions, the page displayed through the `WebView` reacts properly to the Accessibility API.


**To be verified&nbsp;:**

- WebViews respond appropriately to accessibility