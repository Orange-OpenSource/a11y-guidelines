# <abbr>HTML5</abbr> & <abbr>ARIA</abbr>

<script>$(document).ready(function () {
    setBreadcrumb([
        {"label":"Technical articles", "url":"techniques.html"},
        {"label":"HTML5 & ARIA"}
    ]);
});</script>

## Introduction

Web sites are increasingly dynamic (asynchronous loading, dynamic content generation) and interactive (rich interface components: slider, datepicker…). So it is very difficult or impossible to make these components accessible with conventional <abbr>HTML</abbr>.

Even with the <abbr>HTML5</abbr> change, we still lack semantics to provide technical aids (screen readers, magnifiying software, …), keyboard navigation is often impossible, complex handling of the keyboard focus is missing and live regions are not notified to the user.

## What is it ?

To overcome these limitations, the W3C&nbsp;/ WAI has officially issued a recommendation called <abbr>ARIA</abbr>, standing for Accessible Rich Internet Applications, and several documents on the use of <abbr>ARIA</abbr>.

<abbr>ARIA</abbr> is a semantic wrapper based on the attribute&nbsp;/ value combination used in markup languages such as <abbr>HTML</abbr>, <abbr>SVG</abbr>, <abbr>XML</abbr>, etc. This recommendation consists of roles, states and properties that will specifically interact with assistive technologies (<abbr>AT</abbr>). With <abbr>ARIA</abbr>, one can describe elements and behaviours with simple HTML when they do not exist natively, for example tabs, drop-downs, live regions, tooltips, modal windows, etc. <abbr>ARIA</abbr> also defines how an interface component has to behave with the keyboard in order to standardize the user experience with keyboard navigation. **<abbr>ARIA</abbr> makes sense and delivers its full potential when used with <abbr>HTML5</abbr>**.

<abbr>ARIA</abbr> does not add any particular behaviour or any style to <abbr>UI</abbr> components as it is only descriptive. So always make sure presentation is done through <abbr>CSS</abbr>, content control and interaction via Javascript.

## Support

<abbr>ARIA</abbr> support improves quickly and is already supported :
- in modern browsers (Firefox >=3.0, Chrome >=16, Safari >=4, Opera 9.5>=, Internet Explorer 8 for a basic support, Internet Explorer >=9 and Edge for advanced support);
- in assistive technologies (<abbr>NVDA</abbr> >=2010, Orca >=2 + Firefox only, VoiceOver <abbr>OSX</abbr> >=10.5, iOS >=4, JAWS >=8, Window-Eyes >=7, ZoomText 10 for a basic support, ZoomText >=11 for advanced support). 

Moreover, the optimal efficiency of the <abbr>ARIA</abbr> compatibility depends heavily on the browser/assistive technology combination: Firefox with <abbr>NVDA</abbr>, Jaws with Internet Explorer or Safari with VoiceOver, for example.

## Should we use it?

<abbr>ARIA</abbr> improves the accessibility of components that are not natively available in HTML (or inaccessible <abbr>HTML5</abbr> components). <abbr>ARIA</abbr>’s robustness and interoperability is rather complacent, [twenty <abbr>WCAG</abbr> 2.1 techniques are specific to <abbr>ARIA</abbr>](https://www.w3.org/WAI/GL/WCAG20-TECHS/aria.html) (10 are <abbr>HTML5</abbr> techniques). Therefore, for rich Internet applications, <abbr>ARIA</abbr> is essential for accessibility implementation.

In all cases, you have to test developments in the target environments (browser/assistive technology combinations). This is a tough task, but absolutely necessary for complex cases because on a web site or a traditional web application, you must, at least, test with Safari/VoiceOver, Internet Explorer/Jaws and Firefox/<abbr>NVDA</abbr>.

In a well-defined environment (e.g. intranet), target environments are known and in a finite number, so it gets easier!

## Webography
* W3C:
  * [<abbr>ARIA</abbr> specification](http://www.w3.org/TR/wai-aria/)
  * [<abbr>ARIA</abbr> implementation](http://www.w3.org/TR/wai-aria-practices/) (be careful as it’s a “working draft”)
  * [Use <abbr>ARIA</abbr> HTML (5)](http://www.w3.org/TR/aria-in-html/) (be careful as it’s a “working draft”)
  * [<abbr>ARIA</abbr> techniques in <abbr>WCAG</abbr> 2](https://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/aria.html)
* [Introduction to <abbr>ARIA</abbr> by Site Point](http://www.sitepoint.com/introduction-wai-aria/)
* [Introduction and link list to <abbr>ARIA</abbr> sources](http://developer.mozilla.org/fr/docs/Accessibilit%C3%A9/ARIA)

<!--  This file is part of a11y-guidelines | Our vision of mobile & web accessibility guidelines and best practices, with valid/invalid examples.
 Copyright (C) 2016  Orange SA
 See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). -->