---
title: "Web design - Colors and contrasts"
abstract: "Colors and contrast, web accessibility design recommandations"
---

# Web design - Colors and contrasts

<p class="lead">Ensure that the colors used are not a problem for the user</p>




## Make sure there is enough contrast between font and background colors

**Target:** everyone, especially mobile and tablet users, people with visual impairments, reading or attention difficulties and elderly people.   
**When:** as of design and during development.

**Description:**  
The contrast between the text or the graphic component and the background should be high enough.
Insufficient contrast level will have detrimental impact on users with visual difficulties and for mobile and tablet users in a very bright environment.
    
**Don’t:**  
The label “film | 20h40…” does not have enough contrast. It will not be readable by all users.  

![screenshot showing text with poor contrast](../../images/contraste.png)

**Checklist:**


- Make sure that the contrast between the color of the background and that of the text and also for text in the form of image carrying information, is:
   - 4.5: 1 minimum for a size smaller than 24px <abbr>CSS </abbr> and 19px <abbr>CSS </abbr> in bold
   - 3: 1 minimum is sufficient for a size greater than 24px <abbr>CSS </abbr> and 19px <abbr>CSS </abbr> in bold
- Special case of non-underlined links:
   - These links must have a 3:1 contrast ratio with the surrounding text
   - These links must have a way other than the color to distinguish them on keyboard focus or mouse hover 
- Make sure that non-text GUI components, graphical objects and interface status (focus, hover) have a contrast of 3:1. This includes: buttons, radio buttons, check boxes, selection lists, navigation menus and panels, toolbars, tabs, carousels, sliders, progress bars, tooltips, graphics… 

We do not have to apply this criterion:
   - If the graphic component can not be represented otherwise: flag, logotype, real photos, screenshots, medical information diagrams using the colors of biology, gradients representing a measurement (heat maps …)
   - If a text, like a label, a data table, brings the same information as the icon or the graphic
   - If the contrast ratio of the image doesn't prevent the understanding of the content or the function
- **Important:** for applications used primarily in mobile web or in mobility, the contrast level of the most important elements must be 7:1 in order to ensure a good readability and usability for all


**Tool:**  
The [Colour Contrast Analyser](http://www.paciellogroup.com/resources/contrastanalyser/) application can quickly measure colour contrast levels (free for Windows and Mac).  
 



## Do not use colour or sensory characteristics as the unique source of information

**Target:** everyone, especially the colour-blind and more generally people with visual impairments, cognitive limitations, hearing impairments and elderly people.  
**When:** as of design and during development.

**Description:**  
Do not use colour or sensory characteristics (shape, size, sound, direction, visual localization…) as the only way of conveying information, indicating an action, requesting a response or distinguishing an element. The information provided by a colour change or a sensory characteristic must be completed with textual information (alternative) or / and semantic structuring.

**Checklist:**
- Take a screenshot and convert it in black and white. The loss of colour should not cause difficulty while navigating, nor cause loss of information.
- Turn off the speakers, the level of information should remain the same.
- Be sure that links are not only identified by a different colour, usually underline them. If the are not underlined, on focus and on hover, provide an another way than color to distinguish them.

**Do:**  

![illustration using coloured icons to convey information](../../images/couleur-ok.png)

**Don’t:**
  
![illustration using coloured icons to convey information](../../images/couleur-ko.png)  

This example is not valid because the information is conveyed only by colour.
