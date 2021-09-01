---
title: "Browser extensions"
abstract: "List of browser extensions (or add-ons) to test of HTML pages"
---

# Browser extensions

Some browser extensions (or add-ons), such as aXe from Deque or Wave from WebAIM, allow automatic testing of HTML pages. This will allow you to easily identify the main accessibility errors, to check the quality during your developments and to space out the manual checks carried out by the accessibility auditors. These automatic test tools represent the minimum tooling of any accessible development and are a prerequisite for any accessibility audit.
They are quick and lightweight tools that identify what can be tested automatically, such as: "Is there a textual alternative on this image? »: YES / NO or to detect contrast errors (ratio, calculated).
But on the other hand they do not make it possible to definitively qualify what is generally called “alert” or even “warning”, for example: “is this textual alternative relevant? », these additional checks can only be carried out manually. In most cases, the tools allow you to go directly to inspect the corresponding code node.

**Important:**
*	These tools facilitate human assessment, prevent frequent and easy-to-correct errors, and raise awareness of accessibility issues.
*	The results don’t reflect the compliance rate or the level of accessibility of the inspected site, but still allow a trend to be estimated.
*	The guidelines (RGAA and WCAG) are updated regularly, so remember to check the update dates for the tool you select.

## Tested by us: aXe from Deque Systems
Deque Systems offers [aXe](http://www.deque.com/axe/), an extension for Chrome and one for Firefox to perform a series of tests based on WCAG accessibility criteria, reporting errors in a tab of the web inspector developer tools and even offering in most cases of possible solutions.
The philosophy is based on minimizing false positives (errors that are not errors) and offering beyond strict WCAG compliance, a series of good practices useful for developers.

![screenshot aXe](../../../images/AXE_10_2020.png)
&nbsp;

## Tested by us: Wave from WebAIM
Developed by WebAIM.org, same idea for [WAVE](http://wave.webaim.org/) except that it also raises alerts (that requires manual verification) and the results are presented in a separate insert. The tool adds icons and indicators directly into the tested page to help you target errors and alerts.

![screenshot WAVE](../../../images/WAVE_10_2020.png)

## Related links
* https://ffoodd.github.io/a11y.css/  
* https://blog.clever-age.com/fr/2012/06/19/pagespeed-et-yslow-ne-sont-pas-des-indices-de-performance/ 
* https://www.matuzo.at/blog/building-the-most-inaccessible-site-possible-with-a-perfect-lighthouse-score/ 

## Glossary
* CSS : Cascading Stylesheets, feuilles de style en cascade
* DOM : Document Object Model, modèle d’objet document
