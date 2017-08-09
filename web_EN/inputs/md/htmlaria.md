# HTML5 & ARIA

<script>$(document).ready(function () {
    setBreadcrumb([{"label":"HTML5 & ARIA"}]);
});</script>

## Introduction

Web sites are increasingly dynamic (asynchronous loading, dynamic content generation) and interactive (rich interface components: slider, datepicker...). So it is very difficult or impossible to make these components accessible with conventional <abbr>HTML</abbr>.

Even with the <abbr>HTML5</abbr> change, we still lack semantics to provide technical aids (screen readers, magnifiying software, ...), keyboard navigation is often impossible, complex handling of the keyboard focus is missing and live regions are not notified to the user.

## What is it ?

To overcome these limitations, the W3C&nbsp;/ WAI has officially issued a recommendation called ARIA, standing for Accessible Rich Internet Applications, and several documents on the use of ARIA.

ARIA is a semantic wrapper based on the attribute&nbsp;/ value combination used in markup languages such as HTML, SVG, XML, etc. This recommendation consists of roles, states and properties that will specifically interact with assistive technologies (AT). With ARIA, one can describe elements and behaviours with simple HTML when they do not exist natively, for example tabs, drop-downs, live regions, tooltips, modal windows, etc. ARIA also defines how an interface component has to behave with the keyboard in order to standardize the user experience with keyboard navigation. **ARIA makes sense and delivers its full potential when used with HTML5**.

ARIA does not add any particular behaviour or any style to UI components as it is only descriptive. So always make sure presentation is done through CSS, content control and interaction via Javascript.

## Support

ARIA support improves quickly and is already supported :
- in modern browsers (Firefox >=3.0, Chrome >=16, Safari >=4, Opera 9.5>=, Internet Explorer 8 for a basic support, Internet Explorer >=9 and Edge for advanced support);
- in assistive technologies (NVDA >=2010, Orca >=2 + Firefox only, VoiceOver OSX >=10.5, iOS >=4, JAWS >=8, Window-Eyes >=7, ZoomText 10 for a basic support, ZoomText >=11 for advanced support). 

Moreover, the optimal efficiency of the ARIA compatibility depends heavily on the browser/assistive technology combination: Firefox with NVDA, Jaws with Internet Explorer or Safari with VoiceOver, for example.

## Should we use it?

ARIA improves the accessibility of components that are not natively available in HTML (or inaccessible HTML5 components). ARIA’s robustness and interoperability is rather complacent, [twenty WCAG 2.0 techniques are specific to ARIA](https://www.w3.org/WAI/GL/WCAG20-TECHS/aria.html) (10 are HTML5 techniques). Therefore, for rich Internet applications, ARIA is essential for accessibility implementation.

In all cases, you have to test developments in the target environments (browser/assistive technology combinations). This is a tough task, but absolutely necessary for complex cases because on a web site or a traditional web application, you must, at least, test with Safari/VoiceOver, Internet Explorer/Jaws and Firefox/NVDA.

In a well-defined environment (e.g. intranet), target environments are known and in a finite number, so it gets easier!

## Webography
* W3C:
  * [Introduction to ARIA](http://www.w3.org/TR/wai-aria/introduction)
  * [ARIA specification](http://www.w3.org/TR/wai-aria/)
  * [ARIA implementation](http://www.w3.org/TR/wai-aria-practices/) (be careful as it’s a “working draft”)
  * [Use ARIA HTML (5)](http://www.w3.org/TR/aria-in-html/) (be careful as it’s a “working draft”)
  * [ARIA techniques in WCAG 2](https://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/aria.html)
* [Introduction to ARIA by Site Point](http://www.sitepoint.com/introduction-wai-aria/)
* [Introduction and link list to ARIA sources](http://developer.mozilla.org/fr/docs/Accessibilit%C3%A9/ARIA)

<!--  This file is part of a11y-guidelines | Our vision of mobile & web accessibility guidelines and best practices, with valid/invalid examples.
 Copyright (C) 2016  Orange SA
 See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). -->