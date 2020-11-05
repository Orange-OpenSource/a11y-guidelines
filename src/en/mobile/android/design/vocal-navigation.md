---
title: "Vocal navigation"
---

# Vocal navigation


## Vocalize the images

**Target&nbsp;:** everyone and in particular people with visual impairments.  
**When&nbsp;:** from design, and during development.

**Description&nbsp;:**

It is important that the images have a text alternative that gives all the information carried by the image to users using voice navigation.

In the case of an image containing text, the alternative will be the text. In the case of an image that provides information in the form of a graph, drawing or other, the alternative will contain all the necessary information present in the image.

Decorative images, do not require a text alternative and therefore should not be vocalized.

  
**To be verified&nbsp;:**
- Images carrying information restore this information through their textual alternatives.


**Valid example&nbsp;:**  

The image containing the information of the channel is well vocalized by the screen reader.
<img src="../../../images/image_desc.jpg" alt="example of a screen with a vocalized informative image" width="300" height="530">


**Reference <abbr>WCAG</abbr>&nbsp;:**  
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#non-text-content">1.1.1 Non-text Content</a>
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#images-of-text">1.4.5 Images of Text</a>

<br/><br/>
## Vocalize all significant elements

**Target&nbsp;:** everyone and in particular the visually impaired.  
**When&nbsp;:** from conception, and during development.

**Description&nbsp;:**  
When a user navigates using voice navigation (Talkback for example), every meaningful element on the screen must be vocalized, so that he/she can use the application without any loss of information. 

Text alternatives are at the heart of mobile accessibility. While a text will be restituted natively by the screen reader, some elements require a text alternative to be able to vocalize the information correctly.

It is important to provide a text alternative when the information is not available or sufficient natively. This is the case for components providing information by color, shape, position, sound... All components can receive a text alternative, so it is possible to enrich the native vocalization of an element.
  
Some images are regularly associated with text to give information. This is notably the case for "&nbsp;unread messages&nbsp;" where a tooltip gives the number of messages to read and an image gives the information "&nbsp;message&nbsp;". In this case, the solution is to place a text alternative on the text with all the necessary information. For example&nbsp;: "&nbsp;3 unread messages&nbsp;". It is also possible to place this alternative on the image, but in this case, it is necessary to think of making the text "&nbsp;invisible&nbsp;" for the screen reader.

**Example&nbsp;:**

Below is a common example of an icon that is coupled with text (tooltip) to add information. In our case, the icon "&nbsp;mail&nbsp;" coupled with the tooltip value "&nbsp;3&nbsp;" makes us understand that we have "&nbsp;3 unread mails&nbsp;". If no textual alternative is added, 2 vocalizations will be read "&nbsp;button without label&nbsp;" and "&nbsp;3&nbsp;". We understand here the importance of adding text alternatives.  
<img src="../../../images/alt.png" alt="example of an icon coupled with text that requires a text alternative" width="80" class="pull-left">


**To be verified&nbsp;:**

- The elements of the application are all vocalized and accessible
- The vocalizations of the application are explicit and understandable for each element.
- The interactive elements are vocalized with the associated action.
- The titles of the activities are vocalized
- Items in a list are vocalized independently of each other.

**Reference <abbr>WCAG</abbr>&nbsp;:**  
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#non-text-content">1.1.1 Non-text Content</a>

<br/><br/>
## Manage the vocalization order 

**Target&nbsp;:** everyone and in particular the visually impaired.  
**When&nbsp;:** from design, and during development.

**Description&nbsp;:**  
The focus order of the default screen reader takes into account several parameters: the "logical" reading, in English, from left to right and from top to bottom, and the reading of the xml (order of declaration of the elements). Sometimes this is not enough to establish a coherent order, as in the example below, and it is therefore necessary to redefine this reading order.

**Example&nbsp;:**      
In this example, the default read order is completely dependent on the order in which elements are declared. In this case: `vol+, vol-, 1, 2, 3, 4, 5, 6, 7, 8, 9, p+, p-, 0`. A more consistent reading order would be `1, 2, 3, 4, 5, 6, 7, 8, 9, 0, vol+, vol-, p+, p-`.  
<img src="../../../images/order.png" alt="example of reading order for a phone keypad" width="300" height="245">


**To be verified&nbsp;:**
- The order of vocalisation follows an understandable and logical order


**Reference <abbr>WCAG</abbr>&nbsp;:**  
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#meaningful-sequence">1.3.2 Meaningful Sequence</a>
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#focus-order">2.4.3 Focus Order</a>

<br/><br/>
## Vocalize content change

**Target&nbsp;:** everyone and in particular the visually impaired.  
**When&nbsp;:** from conception, and during development.

**Description&nbsp;:**  

When content is dynamically modified after a user action, it must be vocalized. Otherwise, a blind user cannot know that an action has been triggered.  

A simple vocalization may be sufficient to notify the user. It is very easy to trigger vocalizations with TalkBack : you just need to use the `announceForAccessibility` method. 
Note: the `announceForAccessibility` method is available on any element that inherits from `View`.

It is also possible to specify to a view that it is a live region, i.e. its content can be dynamically modified. This will result in generating vocalizations with TalkBack for example. A typical example of use: on a form, if the user makes an error and an error message appears, the view containing the message must be defined as a live region.  The method `setAccessibilityLiveRegion` must be used, and takes as parameter a mode. There are 3 modes:
- `ACCESSIBILITY_LIVE_REGION_NONE`&nbsp;: this view is not a live region. This is the default value for most views.
- `ACCESSIBILITY_LIVE_REGION_POLITE`&nbsp;: in case of a change in the view, vocalizations are performed on the changes. These vocalizations are "polite" and have a lower priority than system vocalizations for example.
- `ACCESSIBILITY_LIVE_REGION_ASSERTIVE`&nbsp;: in case of a change in the view, vocalizations will be performed on the changes. These vocalizations are "&nbsp;rude&nbsp;". They are prioritized and immediately vocalized. 
Note that the `setAccessibilityLiveRegion` method is available on any element that inherits from `View`.


**To be verified&nbsp;:**
- Temporary messages displayed on the screen (such as Toast) are vocalized.
- The opening of the dialogs are vocalized
- Transitions between activities are vocalized (by the title of the new activity for example).
- Error messages are vocalized
- Horizontal scrolls are vocalized
- The change of a part of the screen (for example the change of a fragment) is vocalized.
- The change of a screen element is vocalized if it is useful for the user to be informed about it.


## Do not vocalize the decorative and hidden elements.

**Target&nbsp;:** everyone and in particular the visually impaired.  
**When&nbsp;:** from design,  and during development.

**Description&nbsp;:**  

To not confuse navigation with a screen reader, it is necessary to vocalize only the significant elements. Decorative elements, such as illustrations, should not be vocalized.

Although invisible on the screen, some elements could be read by the screen reader (elements positioned outside the visible area or hidden by other elements). Overlaying screens is something common on cell phones, but it creates very heavy accessibility problems if it is not done correctly from the start.

A frequent case of the problem: fragments.  A bad use of fragments can lead to an impossible navigation with the screen reader.  
  
See the article on [use of fragments](https://developer.android.com/guide/components/fragments.html) for more information.

**To be verified&nbsp;:**
- No invisible elements are vocalized
- Decorative elements are ignored and are not vocalized.

**Examples&nbsp;:**

<img src="../../../images/image_ex.png" alt="complete example of decorative image and informative icon" width="400" height="149">

By decomposing the image&nbsp;:
- <img src="../../../images/montagnard.png" alt="example of a decorative image" width="256" height="95"> pas de `contentDescription`
- <img src="../../../images/settings.png" alt="example of informative icon - settings" width="48" height="48"> `imageView.setContentDescription("paramètres")`
- <img src="../../../images/edit.png" alt="xample of informative icon - edit" width="48" height="48"> `imageView.setContentDescription("éditer le nom de l’image")`


In the example below, the frame with green border corresponds to the Talkback focus. Its vocalizes (the vocalization is displayed at the bottom of the screen on the capture) a content behind the active view.  
<img src="../../../images/ghost.png" alt="example of hidden vocalization" width="300" height="530">


**Reference <abbr>WCAG</abbr>&nbsp;:**  
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#non-text-content">1.1.1 Non-text Content</a>


## Group the elements 

**Target&nbsp;:** everyone and in particular the visually impaired.  
**When&nbsp;:** from conception,  and during development.

**Description&nbsp;:**  

It is recommended to group the elements for vocalization when this increase efficiency and comprehension.

For example, in a music application, it is more useful to group together the music title, artist name and duration vocalisation in one block, rather than vocalising them separately and making navigation more cumbersome.

Care must be taken to find the right balance between navigation and vocalization. Vocalising too much information in one block will be detrimental to listeningr. Having no elements grouped together will increase the amount of navigable elements and therefore make navigation more cumbersome. 

**To be verified&nbsp;:**
- Linked elements are grouped in the same block of announcements for vocalization
- Multidimensional information respects a good balance between the number of blocks and the number of contents in each block. 


**Valid example&nbsp;:**  

Several elements are grouped to improve navigation
<img src="../../../images/regroupement.jpg" alt="example of a screen with elements grouped in a single vocalization" width="300" height="530">


**Reference <abbr>WCAG</abbr>&nbsp;:**  
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#info-and-relationships">1.3.1 Info and Relationships</a>


## Enable header navigation

**Target&nbsp;:** everyone and in particular the visually impaired.  
**When&nbsp;:** from design, and during development.

**Description&nbsp;:**  

Within the same screen, it sometimes happens that the displayed content presents different sections, with a header for each of them. It is possible with the Talkback screen reader to navigate by headings, rather than by elements. This makes it faster for a user to navigate between sections.

To recognize headers, an attribute in the XML layout must be add to the elements : **accessibilityHeading**

**To be verified&nbsp;:**
- Headers are navigable with the Talkback Navigation "Heading" setting 


**Reference <abbr>WCAG</abbr>&nbsp;:**  
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#headings-and-labels">2.4.6 Headings and Labels</a>
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#info-and-relationships">1.3.1 Info and Relationships</a>

## Enable navigation by controls

**Target&nbsp;:** everyone and in particular the visually impaired.  
**When&nbsp;:** from design, and during development.

**Description&nbsp;:**  

With the Talkback tool, the user can choose to navigate between the different controls (buttons, checkboxes, input fields, etc...) of the application, rather than element by element. This allows them to interact more quickly with the application. You must therefore be careful with "custom" elements, which may not be recognized as controls.

**To be verified&nbsp;:**
- The interactive elements are all navigable with the Talkback Navigation per Control setting 







