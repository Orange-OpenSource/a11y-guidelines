---
title: "Web design - Touch and interactions"
abstract: "Touch and interactions, web accessibility design recommandations"
---

# Web design - Touch and interactions

<p class="lead">Ensure that the user keeps control over interactions, particularly tactile ones</p>




## Provide an alternative to complex gestures

**Target:** everyone in particular, people with motor or visual disability and mobility.  
**When** during design and development.

**Description:**  
For each complex gestural interaction, an alternative must be available (for example a non-gestural or simplified alternative).
Similarly for interactions requiring a change of orientation of the screen (tilting, rotation, shaking ...).

**Complex gesture:** any multi-pointer gesture (requiring several fingers), and / or path-bases gesture.  
**Simplified gesture:** an alternative requiring a single pointer (one finger) without path-based gesture.

## Provide an alternative to dragging movement

**Target&nbsp;:** everyone, in particular people with motor or visual disability and mobility.     
**When&nbsp;:** during design and development.

**Description&nbsp;:** 
For each drag-and-drop interaction, an alternative that does not require a dragging movement is available. 
This criterion only concerns movements where only the starting and end points are taken into account without path-based gesture. 
Dragging movement: Action of clicking on a starting point, then holding contact during movement, then releasing the pointer at the final position. . 

**Do&nbsp;:** 
A map allows users to drag the map view. The map has also up/down/left/right buttons to move the view. . 

**Exception&nbsp;:** 
The dragging movement functionality is: 
- essential (dexterity games) 
- controlled by the user agent and not modified 

**Référence <abbr>WCAG</abbr>&nbsp;:**  
- <a href="https://www.w3.org/WAI/WCAG22/Understanding/dragging-movements">2.5.7 Dragging movements</a>


## Give access to the content regardless of the orientation of the screen

**Target:** Everyone in particular, people with motor or visual disability and mobility.   
**When:** during design and development.

**Description:**  
Access to the content must not depend on the orientation of the screen (portrait and landscape) unless a specific display orientation is essential (e.g. serious game).

**<abbr>WCAG</abbr> reference:**  
- <a href="https://www.w3.org/TR/WCAG21/#orientation">1.3.4 Orientation</a>
