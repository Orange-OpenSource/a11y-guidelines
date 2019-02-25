# Make sure there is enough contrast between font and background colors

<script>$(document).ready(function () {
    setBreadcrumb([
        {"label":"Themed WCAG index - Design", "url": "./incontournables.html"},
        {"label":"Make sure there is enough contrast between front and background colors"}
    ]);
});</script>

<span data-menuitem="incontournables"></span>
**Target: ** everyone, especially mobile and tablet users, people with visual impairments, reading or attention difficulties and elderly people.   
**When: ** as of design and during development.

**Description:**  
The contrast between the text or the graphic component and the background should be high enough.
Insufficient contrast level will have detrimental impact on users with visual difficulties and for mobile and tablet users in a very bright environment.
    
**Don’t: **  
The label “film | 20h40…” does not have enough contrast. It will not be readable by all users.  

![screenshot showing text with poor contrast](images/contraste.png)

**Checklist: **


- Make sure that the contrast between the color of the background and that of the text and also for text in the form of image carrying information, is:
   - 4.5: 1 minimum for a size smaller than 24px <abbr>CSS </abbr> and 19px <abbr>CSS </abbr> in bold.
   - 3: 1 minimum is sufficient for a size greater than 24px <abbr>CSS </abbr> and 19px <abbr>CSS </abbr> in bold.
- Make sure that non-text GUI components, graphical objects and interface status (focus, hover) have a contrast of 3:1. This includes: buttons, radio buttons, check boxes, selection lists, navigation menus and panels, toolbars, tabs, carousels, sliders, progress bars, tooltips, graphics … We do not have to apply this criterion, if:
   - if the graphic component can not be represented otherwise: flag, logotype, real photos, screenshots, medical information diagrams using the colors of biology, gradients representing a measurement (heat maps …)
   - if a text, like a label, a data table, brings the same information as the icon or the graphic
   - if the contrast ratio of the image doesn't prevent the understanding of the content or the function
- **Important: ** for applications used primarily in mobile web or in mobility, the contrast level of the most important elements must be 7:1 in order to ensure a good readability and usability for all.


**Tool: **  
The [Colour Contrast Analyser](http://www.paciellogroup.com/resources/contrastanalyser/) application can quickly measure colour contrast levels (free for Windows and Mac).  
 
<!--  This file is part of a11y-guidelines | Our vision of mobile & web accessibility guidelines and best practices, with valid/invalid examples.
 Copyright (C) 2016  Orange SA
 See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). -->