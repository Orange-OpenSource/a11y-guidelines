---
title: "Relative text size and responsive design"
---

# Relative text size and responsive design

**Target: **everyone and especially people with visual impairments, using a device outdoors and elderly people.  
**When: **during development.

**Description: **
The text size should be able to be doubled (set the zoom, text only, to 200% in the browser settings). At this zoom level, the page layout can be altered, but the information must be readable (text or bunk not truncated).

In addition, we must ensure to make responsive web design, so provide different displays in screen type widths (break points) before the development phase.

Moreover, some design choices may or may not facilitate the implementation of this criterion during development, so it is important to think about it from the start.
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
