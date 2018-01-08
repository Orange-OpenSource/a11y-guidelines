# Essential criteria for the design

<script>$(document).ready(function () {
    setBreadcrumb([
        {"label":"Essential criteria", "url": "./fondamentaux.html"},
        {"label":"Essential criteria for the design"}
    ]);
    addSubMenu([
        {"label":"For designers", "url":"fondamentaux.html", "expanded":true}, 
        {"label":"For developers", "url":"fondamentaux-tech.html"}
    ]);
});</script>

<span data-menuitem="fondamentaux"></span>
 
## 1. Set a title for each page
**Target: ** everyone and especially people with visual impairments.  
**When: ** as of design and during development.

**Description:**  
Give each page a title that is specific to it and which reflects its content or function  (`<title>` tag).  
The page title is the first element read by a screen reader, it must help to formally identify the page where you are.

**Checklist: **
- Even if there is no rule, in general (opening many tabs in multiple applications), we go from the most specific information to the least specific (e.g. title of the current page - name of the site). When opening a multitude of applications, the approach is different, in this case we will prefer going from the least specific information to the most specific (eg name of the site - title of the current page).
- When the content of the page is dynamic (displaying the result of a search, errors in a form, user adding content…), the title of the page should reflect this change.

**Do:**  
`Home - Corporate web site of Orange`
 
**Don’t:**  
`Home`

## 2. Start sections with headings
**Target: ** everyone and especially people with cognitive limitations, reading difficulties and visual impairments.  
**When: ** as of design, content writing and during development.

**Description:**  
Identifying heading tags (`h1` to `h6` <abbr>HTML</abbr> tags) used to structure the content of the pages.
Visually impaired people browsing with a screen reader can access the list of headings in the page to navigate quickly. 
Just like in a Word document, it is possible to use the table of contents only if the heading tags have been properly set within the document.  

**Checklist: **

- The headings must be relevant, reflect the structure of the information contained in the page.
- There should be no break in the heading hierarchy (we cannot jump from a `h2` heading to a `h4` heading).
- You can use several `h1` headings per page (Don’t exceed two in most cases).

**Goal: **
- For all users: improve the structure of the page and its contents.
- For search engines: improve <abbr>SEO</abbr>.
- For users that are visually impaired, cognitively impaired or having reading difficulties: easy navigation and access to content.

**Do:**  
    
Page with consistent and relevant headings:

```
(Heading 1) Home – Orange
(Heading 2) News
(Heading 2) Fibre broadband is coming!
(Heading 3) Check eligibility
```

## 3. Make sure there is enough contrast between text and background
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
 
## 4. Do not use colour or sensory characteristics as the unique source of information
**Target: ** everyone, especially the colour-blind and more generally people with visual impairments, cognitive limitations, hearing impairments and elderly people.  
**When: ** as of design and during development.

**Description: **  
Do not use colour or sensory characteristics (shape, size, sound, direction, visual localization…) as the only way of conveying information, indicating an action, requesting a response or distinguishing an element. The information provided by a colour change or a sensory characteristic must be completed with textual information (alternative) or / and semantic structuring.

**Do: **  

![illustration using coloured icons to convey information](images/couleur-ok.png)

**Don’t: **
  
![illustration using coloured icons to convey information](images/couleur-ko.png)  

This example is not valid because the information is conveyed only by colour.

**Checklist: **
- Take a screenshot and convert it in black and white. The loss of colour should not cause difficulty while navigating, nor cause loss of information.
- Turn off the speakers, the level of information should remain the same.

## 5. Define text alternatives
**Target: ** people with visual impairments, hearing difficulties or cognitive limitations and search engines.  
**When: ** as of design and during development.

**Description:**  
Set text alternatives on all non-text informative elements (alternatives to images, icons). Also provide scripts or subtitles for the audio or video content.

**Example  **  
In the screenshot below, the design phase should provide  text alternatives for each button:
- “menu”,
- “settings”,
- “previous channel”,
- “mute”…

![screenshot of a video player with multiple buttons](images/player.png)   

**Note about CAPTCHA :**  
Captcha are often a source of problems for users. If the implementation of an anti-spam system can not be avoided, it is desirable to move towards a more flexible solution for the user:
 - Hidden input form left empty (honeypot technique), not visible to the user.
 - Logical test (question whose answer is obvious, simple math test …).
 - Double authentication.

If the presence of a captcha can not be avoided, **it is essential to provide an audio alternative**.

## 6. Focus visibility
**Target: ** everyone and especially people with visual impairments or cognitive limitations, motor disabilities and using a device outdoors.  
**When: ** as of graphic design and during development.

**Description:**  
The position of the keyboard focus must be visible at all times. When a clickable element receives the focus (link, button…), this must be visible to the user. By default, the browser sets a dotted or a coloured box around the element. This behaviour can be replaced by a custom effect (improving the contrast, for example) but must not be deleted. Users who navigate using the keyboard (<kbd>TAB</kbd>) need to know the position of the focus.    

The focus indicator as well as the hover indicator (when the mouse is over an element) should be carefully considered since the graphic design.

    
**Do: **  
In the following screenshots, the focus is located on the “209 SMS&nbsp;/ month”. 
The first figure shows the default behaviour (focus represented by a dotted box).
In the second capture, the dotted lines have been removed, replaced by a coloured box to explicitly indicate the location of the focus.  
![screenshot showing the default focus](images/focus.png)
![screenshot with a custom focus](images/focus2.png)
  
## 7. Changing text size

**Target: ** everyone and especially people with visual impairments, using a device outdoors, and elderly people.  
**Who: ** as of graphic design and mainly during development.

**Description:**  
The text size should be able to be doubled (set the zoom to 200% in the browser settings). At this zoom level, the page layout can be altered, but the information must be readable (text or bunk not truncated).
Although this must be taken into account during the development phase, we can identify, even still in the graphic design phase, areas of the screen that should or should not grow together with the text size. Moreover, some design choices may or may not facilitate the implementation of this criterion during development, so it is important to think about it from the start.

    
**Example: **    
The screenshot below shows a page with the zoom set to 100%.  
![screenshot showing a page zoomed to 100%](images/zoom.png)    
  
&nbsp;  
**Do: **  
Zoom set to 200%.  
![screenshot with 200% zoom and readable text](images/zoom-ok.png)    
  
&nbsp;  
**Don’t: **  
Zoom set to 200%. In this case the height of the text container did not resized according to text size.  
![screenshot with 200% zoom and truncated text](images/zoom-ko.png)  

## 8. Animation
**Target: ** people with visual impairments, reading/attention/understanding difficulties and seizure disorders.  
**When: ** when designing the service and during graphic design.

**Description:**  
All moving, refreshed or flashing content must provide a way to be stopped, paused or hidden by the user.
Also, avoid as much as possible flashing content and sudden brightness changes (see [The logo of the Olympics causes seizures](http://news.bbc.co.uk/2/hi/uk_news/england/london/6724245.stm)).

**Example: **  
![screenshot of a carousel with a button to pause the animation](./images/carrousel.png)  

A carousel that automatically scrolls must be paused when the mouse is over it or when it receives the focus.
It is also possible to add a “pause” button directly in the interface.

## 9. Link and button labels
**Target: ** everyone and especially people with visual impairments, cognitive limitations or attention difficulties.  
**When: ** when designing the service and during graphic design.

**Description:**  
The wording of the links ad buttons should be explicit enough.
In exceptional cases when it is technically impossible, provide a explicit label that can be read only by screen reader (and other assistive technologies).

**Do:**  
`Learn about our offers`
 
**Don’t:**  
`click here`  
`more details`

## 10. Navigating with the keyboard
**Target: ** everyone, especially people with motor or visual impairments or using a device outdoors.  
**When: ** when designing the service and during development.

**Description:**  
All features must be accessible using the keyboard. Pressing the keyboard <kbd>Tab</kbd> key, the browser passes the focus between clickable elements.  
Moreover, if the features are mouse-specific (drag and drop, right click menu…), ensure that these are also available through other means elsewhere in the interface (button, icon, menu…).


**Example: **  
In the webmail, right-clicking on the “trash” opens a menu to empty the trash, this option should be also available through an “empty the trash” button elsewhere in the interface or from a drop-down menu accessible with the keyboard.

## 11. Forms
**Target: ** everyone and especially people with visual impairments.  
**When: ** during design and development.

**Description:**  
Each form input must be associated with a label identifying the function of the field, the type of data and the expected format. This label should be visually close to the field so we can easily link them (especially for people using zoom or a software magnifier, or even for mobile users). Error messages should clearly identify the invalid field, and if necessary suggest a correction. This applies to input fields, but also to other types of fields (drop-down list, radio button, checkbox…). From the development perspective, this label must be associated with the form field to facilitate the navigation with a screen reader.

**Do: **  
![screenshot of a valid form](images/formulaire.png)
  
&nbsp;

**Don’t: **  
![screenshot of a form with a missing label](images/formulaire2.png)

&nbsp;

In some cases, it seems unnecessary to associate a label to a form field (search field accompanied by a magnifying glass button for example). In such case you can provide a hidden label, it will not be displayed on the screen but it will be associated with the form field programmatically for easy navigation with a screen reader.

Lastly, the wording of the error messages should be explicit.

**Do: **  
![screenshot of a form that displays relevant error messages](images/formulaire-ok.png)  

**Don’t: **  
![screenshot of a form displaying irrelevant error messages](images/formulaire-ko.png)

## 12. Dialogues and opening new windows
**Target: ** elderly people, people with cognitive or visual impairments or using a device outdoors.  
**When: ** as ofdesign and in the development.

**Description:**  
Avoid as much as possible the actions that open a new window (or tab) of the browser. If a link triggers the opening of a new window, you need to ensure that the text “new window” is vocalized by screen readers programmatically. So that visually impaired people know that a new window has been opened.
Also avoid the systematic use of dialogues to display information in the pages (presentation of service…). They often cause accessibility problems for people who navigate with a keyboard or a screen reader, and they will require special attention during the development phase.

**Don’t: **  
In the example below the use of a dialogue is not justified. Using a standard web page would:
- allow more space to the content (by removing the margins around the dialogue),
- allow the “back” button to go back when navigating between pages of the dialogue,
- make the display on small screens easier,
- avoid accessibility problems for people who navigate using the keyboard or using a screen reader,
- reduce the weight of the page and improve loading time, as in this example the page behind the dialogue box must be charged.  

![screenshot of a dialogue way too big](images/dialog.png)

## 13. Provide skip links
**Target: ** useful for mobile and tablet users, people with visual impairments, motor disabilities or using a device outdoors.  
**When: ** as of the design phase and in the development.

**Description:**  
Provide skip links such as “Skip to content” on each page. It facilitates navigation for people using the keyboard, using a device outdoors or with a screen reader. In **very specific** cases, the links can be hidden on the screen and appear only when keyboard navigation is detected.

**Example: **  
Skip links (“Skip to navigation”, “Skip to content”) are available on this site.
To make them appear, move the focus on the top of the page by clicking on your browser’s address bar, for example, then repeatedly press the <kbd>TAB</kbd> key.

![screenshot of the orange.com site](images/skiplink.png)

<!--  This file is part of a11y-guidelines | Our vision of mobile & web accessibility guidelines and best practices, with valid/invalid examples.
 Copyright (C) 2016  Orange SA
 See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). -->