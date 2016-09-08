# HTML5 & ARIA

<script>$(document).ready(function () {
    setBreadcrumb([{"label":"HTML5 & ARIA"}]);
});</script>

## Introduction

Web sites are increasingly dynamic (asynchronous loading, dynamic content generation) and interactive (rich interface components: slider, datepicker...). So it is very difficult or impossible to make these components accessible with conventional HTML.

Even with the HTML5 change, we still lack semantic information to provide technical aids (screen readers, magnifiers software ...), keyboard navigation is often impossible, the complex handling of the keyboard focus is missing and live regions are not notified to the user.

## What is it ?

To overcome these limitations, the W3C / WAI has officially issued a recommendation called ARIA, standing for Accessible Rich Internet Applications, and several documents on the use of ARIA.

ARIA is a semantic wrapper based on the attribute / value combination used in markup languages ​​such as HTML, SVG, XML, etc. This recommendation consists of roles, states and properties that will specifically interact with assistive technologies (AT). With ARIA, one can describe the elements and behaviors with simple HTML when not natively semantically explicit, for example, tabs, dropdown, live regions, tooltips, modal windows. ARIA also defines how an interface component has to behave with the keyboard in order to standardize the user experience with keyboard navigation. **ARIA makes sense and delivers its full potential when used with HTML5**.

ARIA does not add any particular behavior or any style to UI components. So always be sure the presentation is done through CSS, content control and interaction via Javascript.

## The support

ARIA support improves quickly and is already supported :
- In modern browsers (Firefox >=3.0, Chrome >=16, Safari >=4, Opera 9.5>=, Internet Explorer 8 for a basic support, Internet Explorer >=9 and Edge for advanced support) 
- In assistive technologies (NVDA >=2010, Orca >=2 + Firefox only, VoiceOver OSX >=10.5, iOS >=4, JAWS >=8, Window-Eyes >=7, ZoomText 10 for a basic support, ZoomText >=11 for advanced support). 

Moreover, the optimal efficiency of the ARIA compatibility depends heavily on the combination browser/assistive technologies, Firefox with NVDA, Jaws with Internet Explorer and Safari with VoiceOver, for example.

## Should we use it?

ARIA improves the accessibility for components not natively available in HTML (or inaccessible HTML5 components). The ARIA robustness and interoperability is rather complacent, [twenty WCAG 2.0 techniques are specific to ARIA](https://www.w3.org/WAI/GL/WCAG20-TECHS/aria.html) (10 are HTML5 techniques). Therefore, for rich Internet applications, ARIA is essential for accessibility implementation.

In all cases, you have to test developments in the target environments (browsers/assistive technologies combination). This is a tough task absolutely necessary for complex cases because on a web site or a traditional web application, you must, at least, test with Safari/VoiceOver, Internet Explorer/Jaws and Firefox/NVDA.

In a well-defined environment (e.g. intranet), target environments are known and in a finite number, so it gets easier!

## Webography
* "ARIA in HTML" summary  https://specs.webplatform.org/html-aria/webspecs/master/
* W3C:
  * Introduction to ARIA: http://www.w3.org/TR/wai-aria/introduction
  * ARIA specification: http://www.w3.org/TR/wai-aria/
  * ARIA implementation: http://www.w3.org/TR/wai-aria-practices/, careful with "working draft"
  * Use ARIA HTML (5): http://www.w3.org/TR/aria-in-html/, careful with  "working draft"
  * ARIA techniques in WCAG 2: https://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/aria.html
* Introduction to ARIA by Site Point: http://www.sitepoint.com/introduction-wai-aria/
* Introduction and link list to ARIA sources: http://developer.mozilla.org/fr/docs/Accessibilit%C3%A9/ARIA
<!--  This file is part of a11y-guidelines | Our vision of mobile & web accessibility guidelines and best practices, with valid/invalid examples.
 Copyright (C) 2016  Orange SA
 See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). -->