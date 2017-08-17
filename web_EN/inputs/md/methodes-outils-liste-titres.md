# Accessing page headers (`H1` to `H6` tags)

<script>$(document).ready(function () {
    setBreadcrumb([
        {"label":"Test tools", "url": "./methodes-outils.html"},
        {"label":"Accessing page headers"}]);
});</script>

<span data-menuitem="methodes-outils"></span>

To check if the headers have been properly positioned on the page, there are several solutions:
- Browse the page code source by hand.
- Use an extension such as [HeadingsMap](https://addons.mozilla.org/fr/firefox/addon/headingsmap/) for Firefox, [WAVE for Chrome](http://wave.webaim.org/extension/) or [Web Developer Toolbar](http://chrispederick.com/work/web-developer/).
- Access the headers list from a screen reader (see the [screen reader](./methodes-outils-lecteur-ecran.html) section).

The last solution is the most reliable, because extensions do not always take into account the CSS and any ARIA attributes positioned on the HTML tags.
You can find more information in this article: [Navigation with a screen reader](./methodes-outils-lecteur-ecran.html).

<!--  This file is part of a11y-guidelines | Our vision of mobile & web accessibility guidelines and best practices, with valid/invalid examples.
 Copyright (C) 2016  Orange SA
 See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). -->