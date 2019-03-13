# Make the focus visible at all times

<script>$(document).ready(function () {
    setBreadcrumb([
        {"label":"WCAG criteria by project phase - Developers", "url": "./incontournables.html#dev"},
        {"label":"Make the focus visible at all times"}
    ]);
});</script>

<span data-menuitem="incontournables"></span>

**Target: **everyone and especially people with visual impairments, cognitive limitations, motor disabled, having attention difficulties or using a device outdoors.  
**When: **as of design and during development.

**Description: **

Do not hide the focus and if necessary make it visible enough (e.g. by modifying the `outline` <abbr>CSS</abbr> property) on all elements likely to receive it (links, buttons, form elements). You can also accentuate the visibility of the focus so that it is easily identifiable.

Make sure to provide a sufficient level of contrast so that it is visible to all (see [measure the level of contrast of colors](methodes-outils-contrastes.html)).

When an effect is visible on an element during mouse-over (e.g. `:hover` <abbr>CSS</abbr> property), this effect must also be displayed when capturing the focus (`:focus`).

It is possible, with Javascript code, to display the `outline` only during a keyboard navigation (ie not to display the `outline` when clicking a mouse, which also activates the `: focus` state: 


<pre><code class="javascript">
var head = document.head || document.getElementsByTagName(’head’)[0];
var axsStyles = head.appendChild(document.createElement(’style’));
document.addEventListener(’mousedown’, function() {
	axsStyles.innerHTML = ’* {outline:none !important}’;
});
document.addEventListener(’keydown’, function() {
	axsStyles.innerHTML = ’’;
});
</code></pre>

<a href="https://codepen.io/paipai/pen/jwLyzK"> Demonstration of visibility of focus on keyboard navigation only </a>

**Checklist: **

In many front-end frameworks or <abbr>CSS</abbr> resets, the `outline` property (to visualize the focus) is disabled (`outline: none;`), don’t forget to redefine it and check that the focus is visible on all focusable elements.

**Users’ goal: **

Allow focus visibility on all elements, especially for keyboard users (visually impaired, motor disabled or those with attention or memory difficulties and using devices outdoors).

**Do:** 
Focus set on the «&nbsp;Apple iPhone 5s argent&nbsp;» link, clearly visible.
  
![screenshot showing a link whose focus is clearly visible](./images/focus-ok.png)  
 
**Don’t:** 
Focus set on the «&nbsp;Apple iPhone 5s argent&nbsp;».
    
![screenshot showing a link whose focus is not visible enough](./images/focus-ko.png)   

**Reference <abbr>WCAG</abbr>&nbsp;:**  
- <a href="https://www.w3.org/TR/WCAG21/#focus-visible">2.4.7 Focus Visible</a>

<!--  This file is part of a11y-guidelines | Our vision of mobile & web accessibility guidelines and best practices, with valid/invalid examples.
 Copyright (C) 2016  Orange SA
 See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). -->