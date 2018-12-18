# Provide enough contrast between text and background

<script>$(document).ready(function () {
    setBreadcrumb([
        {"label":"Themed WCAG index - Developers", "url": "./incontournables.html#dev"},
        {"label":"Provide enough contrast between text and background"}
    ]);
});</script>

<span data-menuitem="incontournables"></span>

**Target: **everyone, especially the mobile and tablet users, people with visual impairments, experiencing reading or attention difficulties and elderly people.   
**When: **as of design and during development.

**Description: ** 
The contrast between the text and its background should be high enough.
Insufficient contrast level will have detrimental impact on users with visual difficulties and for mobile and tablets users in a very bright environment.

**Don’t: ** 
The label “film | 20h40…” does not have enough contrast. It will not be readable by all users.  

![screenshot showing text with poor contrast](images/contraste.png)

**Checklist: **

- The contrast between the colour of the background and the text must be 4.5:1 minimum and also for text on an image carrying information.
- GUI components must have a contrast of 3:1. This includes: buttons, radio buttons, check boxes, selection lists, navigation menus and panels, toolbars, tabs, carousels, sliders, progress bars, tooltips, progress bars, graphics ... We do not have to apply this criterion, if:
   - the GUI component is a logo
   - if a text, like a label, a data table, brings the same information as the icon or the graphic
   - if the contrast ratio of the image doesn't prevent the understanding of the content or the function of the image
- For applications used primarily in mobile web or in mobility, the contrast level of the main elements must be 7:1 in order to ensure a good readability for all.
- Links should be easily identifiable from to the rest of the text.

Any GUI component receiving focus must also be readable when taking focus.
Inactive graphic elements on the page such as buttons are an exception to the rule because they could be ignored by the user.

**Users’ goal: **

Ease of reading for all users, especially the visually impaired, or people in a very bright environment (outdoors).

**Tool: ** 
The [Colour Contrast Analyser](http://www.paciellogroup.com/resources/contrastanalyser/) application can quickly measure colour contrast levels (free for Windows and Mac).  

**Reference <abbr>WCAG</abbr>&nbsp;:**
- <a href="https://www.w3.org/TR/WCAG21/#contrast-minimum">1.4.3 Contrast (Minimum)</a>
- <a href="https://www.w3.org/TR/WCAG21/#non-text-contrast">1.4.11 Non-text Contrast</a>
<!--  This file is part of a11y-guidelines | Our vision of mobile & web accessibility guidelines and best practices, with valid/invalid examples.
 Copyright (C) 2016  Orange SA
 See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). -->