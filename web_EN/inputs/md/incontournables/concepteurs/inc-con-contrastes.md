# Make sure there is enough contrast between text and background

<script>$(document).ready(function () {
    setBreadcrumb([
        {"label":"Themed WCAG index - Design", "url": "./incontournables.html"},
        {"label":"Make sure there is enough contrast between text and background"}
    ]);
});</script>

<span data-menuitem="incontournables"></span>
**Target: ** everyone, especially mobile and tablet users, people with visual impairments, reading or attention difficulties and elderly people.   
**When: ** as of design and during development.

**Description:**  
The contrast between the text and the background should be high enough.
Insufficient contrast level will have detrimental impact on users with visual difficulties and for mobile and tablet users in a very bright environment.
    
**Don’t: **  
The label “film | 20h40…” does not have enough contrast. It will not be readable by all users.  

![screenshot showing text with poor contrast](images/contraste.png)

**Checklist: **

- The contrast between the colour of the background and the text must be 4.5:1 minimum and also for text on an image carrying information.
- For applications used primarily in mobile web or in mobility, the contrast level of the main elements must be 7:1 in order to ensure a good readability for all.
- Links should be easily identifiable from to the rest of the text.

**Tool: **  
The [Colour Contrast Analyser](http://www.paciellogroup.com/resources/contrastanalyser/) application can quickly measure colour contrast levels (free for Windows and Mac).  
 
<!--  This file is part of a11y-guidelines | Our vision of mobile & web accessibility guidelines and best practices, with valid/invalid examples.
 Copyright (C) 2016  Orange SA
 See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). -->