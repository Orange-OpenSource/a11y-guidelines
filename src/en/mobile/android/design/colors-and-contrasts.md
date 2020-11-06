---
title: "Colors and contrasts"
---

# Colors and contrasts

Ensure that the colors used do not cause problems for the user.

## Ensure sufficient contrast between foreground and background colors

**Target&nbsp;:** everyone (sun on the screen, black and white printing...) and in particular the visually impaired, senior citizens and people with vision problems (color blindness, contrast vision, etc.)  
**When&nbsp;:**  from the design phase and during development.

**Description&nbsp;:**
The contrast level between the text (or a graphic component) and the background must be sufficiently high.
Insufficient contrast will be detrimental to users with visual difficulties or those in a very bright environment.

**To be verified&nbsp;:**
- Make sure the contrast between the background color and the text is :
	- More than 4.5:1 for small texts
	- More than 3:1 for large texts, or for bold texts
- Ensure that the colors used in interface components, or information-bearing graphic elements, have a 3:1 contrast to the background. This includes buttons, radio buttons, checkboxes, selection lists, focus, progress bars, etc.

**Tool&nbsp;:**
The [Colour Constrast Analyzer](http://www.paciellogroup.com/resources/contrastanalyser/) application allows you to quickly measure color contrast levels (free for Mac and Windows).  

The [AccessibilityScanner](https://play.google.com/store/apps/details?id=com.google.android.apps.accessibility.auditor&hl=fr) application allows you to directly test your applications on certain accessibility criteria, especially colors. Available from Android 6.

**Invalid contrast example&nbsp;:**  
The text "film | 20h40 ..." does not have sufficient contrast. It will not be readable by all users.  

![screenshot showing text with insufficient contrast](../../../images/contraste.png)  


**Reference <abbr>WCAG</abbr>&nbsp;:**  
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#contrast-minimum">1.4.3 Contrast minimum</a>
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#non-text-contrast">1.4.11 Non text contrast</a>

<br/><br/>

## Ensure that color or sensory information is not the only source of information 


**Target&nbsp;:** everyone (sun on the screen, black and white printing...) and in particular the visually impaired, senior citizens and people with vision problems (color blindness, contrast vision, etc.)  
**When&nbsp;:**  from the design phase and during development.

**Description&nbsp;:**
Do not use color or sensory information (shape, size, sound, orientation, visual location...) as the only way to convey information, to indicate an action, to solicit a response or to distinguish an element. The information provided by a change of color or sensory information must be complemented by textual information (alternative) and/or semantic structuring.

**To be verified&nbsp;:**

- The loss of colors should not cause any difficulty in navigation or loss of information.
 

**Exemple&nbsp;:** 

<img src="../../../images/couleur.png" alt="Dans un cas la couleur et la forme de l’objet porte l’information avec une légende, dans l’autre cas seule la couleur porte l’information." width="300" height="530">


**Référence <abbr>WCAG</abbr>&nbsp;:**  
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#sensory-characteristics">1.3.3 Sensory characteristics</a>
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#use-of-color">1.4.1 Use of color</a>