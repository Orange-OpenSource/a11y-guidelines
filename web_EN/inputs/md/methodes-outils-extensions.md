# Browser extensions

<script>$(document).ready(function () {
    setBreadcrumb([
        {"label":"Test tools", "url": "./methodes-outils.html"},
        {"label":"Browser extensions"}]);
});</script>

<span data-menuitem="methodes-outils"></span>

Some extensions allow you to perform automated tests on the current page.

## aXe accessibility audit
[aXe](http://www.deque.com/products/axe/) is an extension available for Chrome and Firefox to perform several tests based on the [WCAG](https://www.w3.org/WAI/intro/wcag).

![screenshot of the aXe extension](images/aXe.png)
&nbsp;

## WAVE Toolbar
[WAVE Toolbar](http://wave.webaim.org/extension/) is a toolbar extension for Chrome. It allows to perform several tests on the current page just like aXe (nearly the same auto tests as aXe). Unlike aXe, which shows errors in a tab of Web Inspector, here the errors are displayed directly on the page. A [bookmarklet (or favelet) for WAVE](http://wave.webaim.org/help) is also available.

![screenshot of the WAVE Toolbar extension](images/wave.png)


Wave toolbar provides a large number of automatic tests but also a number of semi-manual tests that require human validation, called alerts. Whether alerts or errors, we can examine the  <abbr>DOM</abbr> node that generated this feedback and access more detailed information on the accessibility criteria concerned and how to fix it.

This extension also allows a direct visualization of the hierarchy of the titles of the page (via a tab in the sidebar), a display of the page with and without <abbr> CSS </ abbr> and a visualization of contrast issues via icons located in the page.


<!--  This file is part of a11y-guidelines | Our vision of mobile & web accessibility guidelines and best practices, with valid/invalid examples.
 Copyright (C) 2016  Orange SA
 See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). -->