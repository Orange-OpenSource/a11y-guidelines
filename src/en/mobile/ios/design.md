---
title: "iOS design criteria"
displayToc: true
---

# iOS design criteria

This guide aims to present the different accessibility criteria for getting an accessible iOS application.
<br>Each criterion explains for whom it is important, when it can be implemented, why it is important and the corresponding accessibility rule.

<a href="https://developer.apple.com/videos/play/wwdc2020/10020/?time=555"><img class="img-fluid" alt="Access to the WWDC video highlighting the importance ofthe visual." src="../../images/conception-intro-wwdc.png"/>
</a>
## Images
<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item" role="presentation">
        <a class="nav-link active"
           data-toggle="tab" 
           href="#images-Objectives" 
           role="tab" 
           aria-selected="true">Objective</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#images-Description" 
           role="tab" 
           aria-selected="false">Description</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#images-Check" 
           role="tab" 
           aria-selected="false">Checklist</a>
    </li>
</ul><div class="tab-content">
<div class="tab-pane show active"
     id="images-Objectives"
     role="tabpanel">
    
Access the information included in images for users who cannot access it.

**Blocking point:** an image without textual description is unusable by people with visual impairments or those that cannot display images.

**Target:** everyone, especially people with visual impairments.  
**When:** as of design and during development.
</div>
<div class="tab-pane" id="images-Description" role="tabpanel" >
Images are often used to convey a lot of information that must be exposed thanks to an alternative.
<br><br>In case of an image containing text, this text will be used for the alternative.
<br>In case of an image that provides information as a graph, drawing or other, the alternative will contain all necessary information in the image.
<br><br>Some images are used for decorative purposes and do not require alternatives.

<br>The alternative of an image is set via the `accessibilityLabel` attribute (using the `UIAccessibility` protocol available on any children of `UIView`).
</div>
<div class="tab-pane" id="images-Check" role="tabpanel" >
    
- Images with information must convey this information through their text alternative.
    
- Decorative images have no alternative text.
</div>
</div>
<br><br>

## Colours
<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item" role="presentation">
        <a class="nav-link active"
           data-toggle="tab" 
           href="#colours-Objectives" 
           role="tab" 
           aria-selected="true">Objective</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#colours-Description" 
           role="tab" 
           aria-selected="false">Description</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#colours-Examples" 
           role="tab" 
           aria-selected="false">Examples</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#colours-Check" 
           role="tab" 
           aria-selected="false">Checklist</a>
    </li>
</ul><div class="tab-content">
<div class="tab-pane show active"
     id="colours-Objectives"
     role="tabpanel">
Ease of reading for all users, especially the visually impaired, or people in a very bright environment (outdoors).
</br>Allow users who cannot distinguish colours or sensory information (colour blind, visually impaired, hearing impaired, mobile users in bright environment or in noisy environments…) to access the same information by other means.

</br>**Target:** everyone, especially people with visual impairments, elderly people and people with vision problems (colour blindness, vision contrasts...).  
**When:** as of the design phase and during development.
</div>
<div class="tab-pane" id="colours-Description" role="tabpanel" >
Colours have a very important role in the transmission of information.
</br>Some colours are associated with concepts or feelings but we must never forget the part of the population that does not correctly distinguish colours.
</br></br>The bold font type will allow a weaker contrast for the lowest font sizes.

![](../../images/color_contrast_2.png)
</br></br>The normal font type will require a higher contrast than the previous case.

![](../../images/color_contrast_3.png)
</br> With [Dynamic&nbsp;Type](../development#text-size) whose purpose is to adapt the font size according to the user settings, the contrast isn't necessary fixed and must be adapted to the text size.

![](../../images/color_contrast_1.png)
</br>Adding different forms to differentiate the information provided only by colors may unnecessarily overlay the graphic interface if the user doesn't need them.

![](../../images/color_contrast_4.png)
<br>In this case, the <a style="text-decoration: underline" role="button" onclick="$('#a11yOptions-Description_tab').trigger('click');document.getElementById('a11yOptions-Description').scrollIntoView({ behavior: 'smooth', block: 'start' })">Differentiate&nbsp;Without&nbsp;Colour</a> accessibility option will allow this display **only at the user's demand**.

</br>**Tools:**

- The <a href="http://www.paciellogroup.com/resources/contrastanalyser/" style="text-decoration: underline;">Colour&nbsp;Contrast&nbsp;Analyser</a> application can quickly measure colour contrast levels (free for Windows and Mac).

- The Accessibility Inspector tool provides a specific <a href="../wwdc/2019/#color-contrast-0626" style="text-decoration: underline;">Color&nbsp;Contrast&nbsp;Calculator</a> feature that reaches the same purpose since Xcode 11.
</div>
<div class="tab-pane" id="colours-Examples" role="tabpanel" >
    
**Example of invalid contrast**  
The label “film | 8:40 PM…” does not have enough contrast and will not be readable by all users.  
<br>![screenshot showing text with poor contrast](../../images/contraste.png)

<br>**Example of information conveyed through valid and invalid colour:** 
![example of information conveyed through valid and invalid colour](../../images/couleur_ios.png)
</div>
<div class="tab-pane" id="colours-Check" role="tabpanel" >

- Do not use colour as the only way of conveying information, indicating an action, requesting a response or distinguishing an element.

- The contrast between the colour of the background and the text must be appropriate (can be measured with the Colour Contrast Analyser tool or with the [Color&nbsp;Contrast&nbsp;Calculator](../wwdc/2019/#color-contrast-0626) feature of Accessibility Inspector since Xcode 11).

- With the **Dark Mode** since iOS 13, special attention must be paid to the contrasts used in the different themes and that can be modified with the <a style="text-decoration: underline" role="button" onclick="$('#a11yOptions-Description_tab').trigger('click');document.getElementById('a11yOptions-Description').scrollIntoView({ behavior: 'smooth', block: 'start' })">Increase&nbsp;Contrast</a> accessibility option.

- The <a href="../wwdc/2020/020/" style="text-decoration: underline;">detailed summary</a> of the WWDC 2020 video entitled **Make Your App Visually Accessible** is a perfect start to follow the appropriate instructions (especially the section 'COLOR & SHAPES' - 'Contrast').
</div>
</div>
<br><br>

## Alternative text
<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item" role="presentation">
        <a class="nav-link active"
           data-toggle="tab" 
           href="#alternativeText-Objectives" 
           role="tab" 
           aria-selected="true">Objective</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#alternativeText-Description" 
           role="tab" 
           aria-selected="false">Description</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#alternativeText-Examples" 
           role="tab" 
           aria-selected="false">Example</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#alternativeText-Check" 
           role="tab" 
           aria-selected="false">Checklist</a>
    </li>
</ul><div class="tab-content">
<div class="tab-pane show active"
     id="alternativeText-Objectives"
     role="tabpanel">
Provide access to the application information for screen reader users.

</br>**Target:** everyone, especially people with visual impairments.  
**When:** as of design, content writing and during development.
</div>
<div class="tab-pane" id="alternativeText-Description" role="tabpanel" >
Thanks to the text alternatives, a visually impaired user can use an application without loss of information.
<br><br>As for images, it is important to add a text alternative when information is not available for the VoiceOver users: this is the case of components that provide information by colour, shape, position, sound…
<br>On mobile, where all components can have a text alternative, it is possible to enrich the native vocalization of an element, including a simple text.
<br><br>Space on mobile is reduced, we often use abbreviations for text.
<br>However, this raises an issue for users of screen readers that vocalize abbreviations literally: to correct these vocalizations, simply place a text alternative on the text that will contain the expanded text.
<br><br>Some images are frequently associated with text to give information: this is the case of “unread messages” when a badge shows the number of messages to read and which describes a “message”.

<br>The text alternative of an element is set via the `accessibilityLabel`, `accessibilityHint`, `accessibilityValue` and `accessibilityTrait` (using the `UIAccessibility` protocol available on any child of `UIView`).  
<br>The order of vocalization (label, value, trait and hint) cannot be changed and the vocalization is done only once.  
<br>For more technical information on these attributes, please refer to the [text alternatives](../development##text-alternatives) on the developer guide section.
</div>
<div class="tab-pane" id="alternativeText-Examples" role="tabpanel" >
Below is a common example of an icon that is associated with a text (badge) to add information.
    
![icon example coupled with the text that requires a text alternative](../../images/alt.png)  
<br>In this case, the “mail” icon associated with the “3” in the badge makes understand that there are “3 unread mails”.
<br>If no text alternative is added, two vocalizations will be read “unlabelled button” and “3”.
It is obvious that we must add text alternatives.
</div>
<div class="tab-pane" id="alternativeText-Check" role="tabpanel" >
    
- Elements that require an alternative should have one.

- The alternative text must be clear and understandable.
</div>
</div>
<br><br>

## Title and header
<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item" role="presentation">
        <a class="nav-link active"
           data-toggle="tab" 
           href="#titleAndHeaders-Objectives" 
           role="tab" 
           aria-selected="true">Objective</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#titleAndHeaders-Description" 
           role="tab" 
           aria-selected="false">Description</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#titleAndHeaders-Examples" 
           role="tab" 
           aria-selected="false">Example</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#titleAndHeaders-Check" 
           role="tab" 
           aria-selected="false">Checklist</a>
    </li>
</ul><div class="tab-content">
<div class="tab-pane show active"
     id="titleAndHeaders-Objectives"
     role="tabpanel">

Allow users to identify the topic of a page, to locate and get a clear idea of the content of the page without having to read it.
</br>Ease the navigation.
</br>**Target:** everyone  
**When:** as of design and during content writing.
</div>
<div class="tab-pane" id="titleAndHeaders-Description" role="tabpanel" >

The page title is the first element vocalized or seen on a mobile screen.
It makes navigation easier for everyone: at any time, we know where we are in the application.
</br>A common mistake is to set the same title for every page of an application (or even no title at all!).
</br>iOS headers allow structuring pages providing additional useful information to the accessibility API because VoiceOver can navigate through the headers allowing the user to browse the page faster.
</br>To set an item as a header, set the `accessibilityTraits` attribute on the `accessibilityTraitHeader` value.
</div>
<div class="tab-pane" id="titleAndHeaders-Examples" role="tabpanel" >

**Invalid example:**

![example of irrelevant title (no title)](../../images/header_ios.png)
</div>
<div class="tab-pane" id="titleAndHeaders-Check" role="tabpanel" >
    
- Each screen must have its own title allowing to know where we are in the app navigation.
    
- The elements identified as headers must be declared as headers for assistive tools.
</div>
</div>
<br><br>

## Element states
<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item" role="presentation">
        <a class="nav-link active"
           data-toggle="tab" 
           href="#eltStates-Objectives" 
           role="tab" 
           aria-selected="true">Objective</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#eltStates-Description" 
           role="tab" 
           aria-selected="false">Description</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#eltStates-Examples" 
           role="tab" 
           aria-selected="false">Example</a>
    </li>
</ul><div class="tab-content">
<div class="tab-pane show active"
     id="eltStates-Objectives"
     role="tabpanel">

Allow the screen reader users to access the components information, their status, their nature so they can use them without any difficulties.
</br>**Target:** everyone, especially people with visual impairments.  
**When:** during development.
</div>
<div class="tab-pane" id="eltStates-Description" role="tabpanel" >
    
If an element does not vocalize its status, nature or state, the VoiceOver user is unable to understand what is happening on the screen.
Not specifying that a view is unfolded or that we have tabs are very common examples.
  
Even if tabs in iOS are accessible, it is very common to customize the tabs’ look and feel, so it is the developer’s responsibility to provide the tab state and nature to the user via the corresponding accessibility attributes.
  
Another common instance of elements that do not vocalize their state are the expandable views.
Again, thanks to the text alternative title of the view, we can vocalize the state of the view for VoiceOver users.
  
To set this kind of information, use the `accessibilityLabel` and `accessibilityTrait` attributes.
</div>
<div class="tab-pane" id="eltStates-Examples" role="tabpanel" >
    
Any item whose status changes when using the application must vocalize its status through its text alternative.

![example of an expandable list that needs text alternative](../../images/expandable_list.png)
</div>
</div>
<br><br>

## Standard components
<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item" role="presentation">
        <a class="nav-link active"
           data-toggle="tab" 
           href="#stdComponent-Objectives" 
           role="tab" 
           aria-selected="true">Objective</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#stdComponent-Description" 
           role="tab" 
           aria-selected="false">Description</a>
    </li>
</ul><div class="tab-content">
<div class="tab-pane show active"
     id="stdComponent-Objectives"
     role="tabpanel">

Improve user navigation and overall maintainability while reducing development time.
</br>**Target:** everyone.  
**When:** when choosing the libraries and during development.
</div>
<div class="tab-pane" id="stdComponent-Description" role="tabpanel" >

Accessibility is taken into account in native components that allows the users to be in a situation or behaviour that they are already used to.
Navigation through a standard interface is then more comfortable.
  
It's recommended to use native components as much as possible and change their appearance if need be.
If no standard component corresponds to the need, create a dedicated component based on a standard component while keeping the navigation and accessibility consistency.
</div>
</div>
<br><br>

## Touch target
<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item" role="presentation">
        <a class="nav-link active"
           data-toggle="tab" 
           href="#touchTarget-Objectives" 
           role="tab" 
           aria-selected="true">Objective</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#touchTarget-Description" 
           role="tab" 
           aria-selected="false">Description</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#touchTarget-Examples" 
           role="tab" 
           aria-selected="false">Examples</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#touchTarget-Check" 
           role="tab" 
           aria-selected="false">Checklist</a>
    </li>
</ul><div class="tab-content">
<div class="tab-pane show active"
     id="touchTarget-Objectives"
     role="tabpanel">

Improve the user experience providing a more comfortable environment.
</br>**Target:** everyone, especially people with motor impairments.  
**When:** as of design and during development.
</div>
<div class="tab-pane" id="touchTarget-Description" role="tabpanel" >

If a touch target of a component is too small, it can prevent some users from enjoying the application and can lead to a kind of frustration that can result in uninstalling it.

Each clickable element must have a large enough touch target.
</div>
<div class="tab-pane" id="touchTarget-Examples" role="tabpanel" >

In the examples below, the black box corresponds to the size of the interactive area.

**Valid example:**
![interactive component example with a fairly large touch target](../../images/clic_ok.png)

**Invalid example:**
![interactive component example with a small touch target](../../images/clic_ko.png)
</div>
<div class="tab-pane" id="touchTarget-Check" role="tabpanel" >
44 pt is the recommended touch target size for elements according to Apple (height and width).
</div>
</div>
<br><br>

## Ghost element
<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item" role="presentation">
        <a class="nav-link active"
           data-toggle="tab" 
           href="#ghostElt-Objectives" 
           role="tab" 
           aria-selected="true">Objective</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#ghostElt-Description" 
           role="tab" 
           aria-selected="false">Description</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#ghostElt-Examples" 
           role="tab" 
           aria-selected="false">Example</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#ghostElt-Check" 
           role="tab" 
           aria-selected="false">Checklist</a>
    </li>
</ul><div class="tab-content">
<div class="tab-pane show active"
     id="ghostElt-Objectives"
     role="tabpanel">

Allow screen reader users to navigate within the application without having hidden elements disturbing the reading of the current view.
</br>**Target:** people with visual impairments.  
**When:** during development.
</div>
<div class="tab-pane" id="ghostElt-Description" role="tabpanel" >

Although invisible on the screen, some elements can be vocalized by the screen reader (elements positioned outside the visible area or hidden by other elements).

The superposition of screens is frequent when designing mobile apps but it generates very heavy accessibility problems if it is not done properly from scratch.

VoiceOver is able to read information from a view that is placed “below” another but if the user is able to interact with this view, it totally disturbs the navigation that quickly becomes impossible.
  
Ghost elements are very common when creating custom alert dialogs but this kind of component must be accessible.
</div>
<div class="tab-pane" id="ghostElt-Examples" role="tabpanel" >

In the example below, the custom alert dialog has a ghost element.

When VoiceOver is activated it vocalizes the content behind the current view (shown in black).

![exemple d’élément fantôme](../../images/ghost_ios.png)
</div>
<div class="tab-pane" id="ghostElt-Check" role="tabpanel" >
With the screen reader, no invisible element must be read or take focus when reading a page.
</div>
</div>
<br><br>

## Content Control
<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item" role="presentation">
        <a class="nav-link active"
           data-toggle="tab" 
           href="#contentControl-Objectives" 
           role="tab" 
           aria-selected="true">Objective</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#contentControl-Description" 
           role="tab" 
           aria-selected="false">Description</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#contentControl-Check" 
           role="tab" 
           aria-selected="false">Checklist</a>
    </li>
</ul><div class="tab-content">
<div class="tab-pane show active"
     id="contentControl-Objectives"
     role="tabpanel">

Allow users to keep control on the application and the screen reader user to avoid noise pollution which may affect navigation while improving a natural indexation.
</br>**Target:** everyone and especially people with visual and cognitive deficiency.
**When:** as of design and during development.
</div>
<div class="tab-pane" id="contentControl-Description" role="tabpanel" >
    
On mobile, screen readers try to notify the user when there is a context change.
</br>In some cases, it can give constant vocalizations, and can therefore become inaudible, or prevent any user action.
</br>The user must control the content at any time (especially true with interactive content).
</br>So avoid video player launching directly in full screen mode or videos starting automatically without user action or a carousel scrolling automatically for instance.
</div>
<div class="tab-pane" id="contentControl-Check" role="tabpanel" >
All interactive content must be controlled by the user (adding an accessible button to exit full-screen mode for instance).
</div>
</div>
<br><br>

## Changing content
<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item" role="presentation">
        <a class="nav-link active"
           data-toggle="tab" 
           href="#changingContent-Objectives" 
           role="tab" 
           aria-selected="true">Objective</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#changingContent-Description" 
           role="tab" 
           aria-selected="false">Description</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#changingContent-Check" 
           role="tab" 
           aria-selected="false">Checklist</a>
    </li>
</ul><div class="tab-content">
<div class="tab-pane show active"
     id="changingContent-Objectives"
     role="tabpanel">

Provide access to changing content for the screen reader users.
</br>**Target:** everyone, especially people with visual impairments.  
**When:** during development.
</div>
<div class="tab-pane" id="changingContent-Description" role="tabpanel" >

When content is dynamically modified after a user action, the screen reader must notify it.

With no voice feedback, the user does not know that the content has changed.
If the content has changed dynamically after a user action, it is important that the screen reader is notified so that it triggers a vocalization (refreshing a list or a timer for instance).

To start a vocalization, a notification must be sent via the `UIAccessibilityPostNotification` method with the `UIAccessibilityAnnouncementNotification` notification in parameter and the text to vocalize.

There are several types of notification, but the two most used are:

- `UIAccessibilityLayoutChangedNotification`: notify that a part of the content has changed.

- `UIAccessibilityScreenChangedNotification`: notify a global change.

For more technical information, please check out the corresponding section on the [developer&nbsp;guide&nbsp;for&nbsp;iOS](../development#notify-a-content-change).
</div>
<div class="tab-pane" id="changingContent-Check" role="tabpanel" >

Make sure that dynamic changes are vocalized.
</div>
</div>
<br><br>

## Horizontal scroll
<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item" role="presentation">
        <a class="nav-link active"
           data-toggle="tab" 
           href="#horizontalScroll-Objectives" 
           role="tab" 
           aria-selected="true">Objective</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#horizontalScroll-Description" 
           role="tab" 
           aria-selected="false">Description</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#horizontalScroll-Examples" 
           role="tab" 
           aria-selected="false">Examples</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#horizontalScroll-Check" 
           role="tab" 
           aria-selected="false">Checklist</a>
    </li>
</ul><div class="tab-content">
<div class="tab-pane show active"
     id="horizontalScroll-Objectives"
     role="tabpanel">

Provide a visual indication to users when there is an horizontal scrolling.
Allow screen reader users to scroll horizontally.
</br>**Target:** everyone, especially people with visual impairments.  
**When:** as of design and during development.
</div>
<div class="tab-pane" id="horizontalScroll-Description" role="tabpanel" >

A horizontal scroll can be very difficult to detect if no visual feedback is displayed to help the user understand that there are several pages.

Do not hesitate to display a view to indicate a horizontal scroll (dots on `UIPageControl` for example).

When necessary, also add “next” and “previous” buttons.
</div>
<div class="tab-pane" id="horizontalScroll-Examples" role="tabpanel" >
<div class="sideToSide row">
<div class="col-sm-6 col-xs-12">

**Valid example:**
![valid example of a horizontal scroll](../../images/scroll_ios_h1.png)
</div>
<div class="col-sm-6 col-xs-12">

**Invalid example:**
![invalid example of a horizontal scroll](../../images/scroll_ios_h2.png)

</div>
</div>
</div>
<div class="tab-pane" id="horizontalScroll-Check" role="tabpanel" >
    
- The horizontal scrolls are visually indicated.

- It must be possible to switch pages for screen reader users.
</div>
</div></br></br>

## Form
<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item" role="presentation">
        <a class="nav-link active"
           data-toggle="tab" 
           href="#form-Objectives" 
           role="tab" 
           aria-selected="true">Objective</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#form-Description" 
           role="tab" 
           aria-selected="false">Description</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#form-Check" 
           role="tab" 
           aria-selected="false">Checklist</a>
    </li>
</ul><div class="tab-content">
<div class="tab-pane show active"
     id="form-Objectives"
     role="tabpanel">

Improve the navigation and the overall understanding of the page because form fields describing the expected input are easier to fill for visually impaired users.
</br>**Target:** everyone, especially people with visual impairments.  
**When:** as of design and during development.
</div>
<div class="tab-pane" id="form-Description" role="tabpanel" >

Binding the form fields with their labels provides an additional vocalization allowing the user to understand what happens when filling out a form field.
</br>We must use the `accessibilityLabel` attribute to associate a label to a form field.
</div>
<div class="tab-pane" id="form-Check" role="tabpanel" >
Form fields must vocalize their labels.
</div>
</div>
<br><br>

## Reading order
<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item" role="presentation">
        <a class="nav-link active"
           data-toggle="tab" 
           href="#readingOrder-Objectives" 
           role="tab" 
           aria-selected="true">Objective</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#readingOrder-Description" 
           role="tab" 
           aria-selected="false">Description</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#readingOrder-Examples" 
           role="tab" 
           aria-selected="false">Example</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#readingOrder-Check" 
           role="tab" 
           aria-selected="false">Checklist</a>
    </li>
</ul><div class="tab-content">
<div class="tab-pane show active"
     id="readingOrder-Objectives"
     role="tabpanel">

Ensure logic order and coherent reading to screen reader users.
</br>**Target:** people with visual impairments.  
**When:** during development.
</div>
<div class="tab-pane" id="readingOrder-Description" role="tabpanel" >

The reading order allows the screen reader user to get their bearings and to ensure functional coherence, it is therefore important to pay attention to it.
  
By default, the reading order of voice synthesis depends on the “logical” reading order, from left to right and top to bottom (in France).
However, there are some cases where the screen reader cannot determine the correct order, and uses the order of <abbr>xml</abbr> elements, leading to inconsistent vocalizations.
  
It is possible to redefine the VoiceOver reading order using the [`UIAccessibilityContainer`](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIAccessibilityContainer_Protocol/).
The reading order is defined in a table an it is often useful to use the `shouldGroupAccessibilityElement` attribute to have a correct reading order in a sub-part of the page.  
</div>
<div class="tab-pane" id="readingOrder-Examples" role="tabpanel" >

In this example, the default playback order depends completely on the implementation and on the order of element declaration.
In this case: `vol+, vol-, 1, 2, 3, 4, 5, 6, 7, 8, 9, p+, p-, 0`.
A more consistent reading order is `1, 2, 3, 4, 5, 6, 7, 8, 9, 0, vol +, vol-, p + p-`.

![Example of reading order](../../images/order.png)

For more technical information, please check out the corresponding section on the [developer&nbsp;guide&nbsp;for&nbsp;iOS](../development#reading-order).
</div>
<div class="tab-pane" id="readingOrder-Check" role="tabpanel" >

Traversal order (VoiceOver) is logical and coherent.
</div>
</div>
<br><br>

## Language
<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item" role="presentation">
        <a class="nav-link active"
           data-toggle="tab" 
           href="#language-Objectives" 
           role="tab" 
           aria-selected="true">Objective</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#language-Description" 
           role="tab" 
           aria-selected="false">Description</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#language-Check" 
           role="tab" 
           aria-selected="false">Checklist</a>
    </li>
</ul><div class="tab-content">
<div class="tab-pane show active"
     id="language-Objectives"
     role="tabpanel">

Ensure the understanding of the application text.
</br>**Target:** people with visual impairments.  
**When:** during development.
</div>
<div class="tab-pane" id="language-Description" role="tabpanel" >

VoiceOver vocalization uses the default language of the mobile.
Sometimes some words and texts of an application are in a different language.

In order to make them properly understandable, they have to be declared in that specific language.  

To change VoiceOver language pronunciation of a word or a text, use the `accessibilityLanguage` attribute, available via the `UIAccessibility` protocol.
</div>
<div class="tab-pane" id="language-Check" role="tabpanel" >

The words and the text in a different language than the rest of the application should be vocalized in their corresponding language.
</div>
</div>
<br><br>

## Screen orientation
<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item" role="presentation">
        <a class="nav-link active"
           data-toggle="tab" 
           href="#screenOrientation-Objectives" 
           role="tab" 
           aria-selected="true">Objective</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#screenOrientation-Description" 
           role="tab" 
           aria-selected="false">Description</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#screenOrientation-Check" 
           role="tab" 
           aria-selected="false">Checklist</a>
    </li>
</ul><div class="tab-content">
<div class="tab-pane show active"
     id="screenOrientation-Objectives"
     role="tabpanel">

Improve a better legibility of the content.
</br>**Target:** everyone, especially people with visual and/or motor impairments.  
**When:** as of design and during development.
</div>
<div class="tab-pane" id="screenOrientation-Description" role="tabpanel" >

The screen orientation mustn't impact the access of an application content.

It's highly recommended to :

- **Implement both the portrait and the landscape modes** to be easily toggled by the user if it doesn't go against some functional constraints of the application itself (`serious`&nbsp;`game` for instance).

- Provide for iPad screen sizes in order to facilitate reading and gestures.
</div>
<div class="tab-pane" id="screenOrientation-Check" role="tabpanel" >

- Perfectly detailed design guideline including all the screens to be implemented with their possible orientation constraints.

- Very accurate definition of the way the transitions between portrait and landscape modes should occur.

- Portrait and landscape modes flawless adaptation to the content thanks to a bunch of graphic tests (very important for the `Dynamic`&nbsp;`Type`).

- Appropriate settings in the integrated development environment.

![](../../images/orientation.png)
</div>
</div>
<br><br>

## Accessibility dedicated screen
<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item" role="presentation">
        <a class="nav-link active" 
           data-toggle="tab" 
           href="#DedicatedScreen-Description" 
           role="tab" 
           aria-selected="true">Description</a>
    </li>
</ul><div class="tab-content">
<div class="tab-pane show active" 
     id="DedicatedScreen-Description" 
     role="tabpanel" >

It may be pretty much easier to **create a new dedicated accessibility screen** in order not to challenge the current state that may contain hard graphical elements to be adapted.

However, even if it could be a brilliant idea at first sight, it's definitely **not recommended to move in this direction** because:

- The screen reader is not only used by sight-impaired people but also by **illiterate persons** who may notice that a different screen appears when this feature is activated and then may think that different information is also provided ⟹ this situation may lead to a kind of discriminatory feeling.

- From a practical point of view for the maintainability of the application, adding a new dedicated screen that will be used only when an accessibility feature is activated  may be forgotten by the developers if some modifications are added to the initial one that doesn't deal with accessibility.
</div>
</div>
<br><br>

## Accessibility options
<a id="a11yOptions"></a>
<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item" role="presentation">
        <a class="nav-link active"
           data-toggle="tab" 
           href="#a11yOptions-Objectives" 
           role="tab" 
           aria-selected="true">Objective</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#a11yOptions-Description"
           id="a11yOptions-Description_tab"
           role="tab" 
           aria-selected="false">Description</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#a11yOptions-Check" 
           role="tab" 
           aria-selected="false">Checklist</a>
    </li>
</ul><div class="tab-content">
<div class="tab-pane show active"
     id="a11yOptions-Objectives"
     role="tabpanel">

The accessibility options located in the mobile settings are all about to improve the experience of an impaired user who can be significantly helped by these options.

It's then primordial :

- To **understand perfectly** each one of these options that can have an impact during the conception or the implementation periods of an application.

- To **test** each appropriate option so as to be sure that its purpose is completely taken into account inside the application.

<a href="https://developer.apple.com/videos/play/wwdc2020/10020/?time=783"><img class="img-fluid" alt="Access to the WWDC video that highlights the importance of taking into account the user settings inside an application." src="../../images/displayPreferences-wwdc.png"/>
</a>

</br>**Target:** everyone.  
**When:** as of design and during development.
</div>
<div class="tab-pane" id="a11yOptions-Description" role="tabpanel" >

The full list of these options including their purpose and their coding name is defined hereunder:
    
1. [Increase Contrast](#optionA11Y_contraste)

2. [AssistiveTouch](#optionA11Y_assistiveTouch)

3. [Bold Text](#optionA11Y_bold)

4. [Subtitles & Captioning](#optionA11Y_closedCaption)

5. [Grayscale](#optionA11Y_grayScale)

6. [Guided Access](#optionA11Y_guidedAccess)

7. [Invert Colours](#optionA11Y_inverserLesCouleurs)

8. [Mono Audio](#optionA11Y_audioEnMono)

9. [Reduce Motion](#optionA11Y_limiteVisuel)

10. [Prefer Cross-Fade Transition](#optionA11Y_preferCrossFadeTransition)

11. [Reduce Transparency](#optionA11Y_reductionTransparence)

12. [Shake to Undo](#optionA11Y_secouerPourAnnuler)

13. [Speak Screen](#optionA11Y_lecturePage)

14. [Speak Selection](#optionA11Y_speakSelection)

15. [Switch Control](#optionA11Y_switchControl)

16. [VoiceOver](#optionA11Y_voiceOver)

17. [Auto-Play Video Previews](#optionA11Y_autoPlayVideoPreviews)

18. [Differentiate Without Colour](#optionA11Y_differentiateWithoutColour)

19. [On/Off Labels](#optionA11Y_onOffSwitchLabels)

<br>

<a name="optionA11Y_contraste"></a>

- **Increase Contrast** (UIAccessibilityDarkerSystemColorsEnabled): see the [WWDC&nbsp;2018&nbsp;video](../wwdc/2018/230/#contrast-0438) for a detailed description.

<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item" role="presentation">
        <a class="nav-link active"
           data-toggle="tab" 
           href="#Contrast-iOS13"
           role="tab" 
           aria-selected="true">iOS 13</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#Contrast-iOS12"
           role="tab" 
           aria-selected="false">iOS 12</a>
    </li>
</ul><div class="tab-content">
<div class="tab-pane show active"
     id="Contrast-iOS13"
     role="tabpanel">
    
![Access illustration via Settings - Accessibility - Display & Text Size - Increase Contrast](../../images/optionA11Y_iOS13_contraste.png)
</br>Since **iOS 13**, this accessibility option is a `traitCollection` **<a href="https://developer.apple.com/documentation/uikit/uitraitcollection/3238079-accessibilitycontrast" style="text-decoration: underline;">variable&nbsp;instance</a>**.
</div>
<div class="tab-pane" id="Contrast-iOS12" role="tabpanel" >
    
![Access illustration via Settings - Accessibility - Display & Text Size - Increase Contrast](../../images/optionA11Y_iOS12_contraste.png)
</div></div></br>

<a name="optionA11Y_assistiveTouch"></a>

- **AssistiveTouch** (UIAccessibilityIsAssistiveTouchRunning): displays the homonymous menu in foreground, whatever the runnning application.

<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item" role="presentation">
        <a class="nav-link active"
           data-toggle="tab" 
           href="#AssistiveTouch-iOS13"
           role="tab" 
           aria-selected="true">iOS 13</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#AssistiveTouch-iOS12"
           role="tab" 
           aria-selected="false">iOS 12</a>
    </li>
</ul><div class="tab-content">
<div class="tab-pane show active"
     id="AssistiveTouch-iOS13"
     role="tabpanel">
    
![Access illustration via Settings - Accessibility - Touch - AssistiveTouch - AssistiveTouch](../../images/optionA11Y_iOS13_assistiveTouch.png)
</div>
<div class="tab-pane" id="AssistiveTouch-iOS12" role="tabpanel" >
    
![Access illustration via Settings - General - Accessibility - AssistiveTouch](../../images/optionA11Y_iOS12_assistiveTouch.png)
</div></div></br>

<a name="optionA11Y_bold"></a>

- **Bold Text** (UIAccessibilityIsBoldTextEnabled): see the [WWDC&nbsp;2018&nbsp;video](../wwdc/2018/230/#sizing-0704) for a detailed description.

<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item" role="presentation">
        <a class="nav-link active"
           data-toggle="tab" 
           href="#Bold-iOS13"
           role="tab" 
           aria-selected="true">iOS 13</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#Bold-iOS12"
           role="tab" 
           aria-selected="false">iOS 12</a>
    </li>
</ul><div class="tab-content">
<div class="tab-pane show active"
     id="Bold-iOS13"
     role="tabpanel">
    
![Access illustration via Settings - Accessibility - Bold Text](../../images/optionA11Y_iOS13_bold.png)
</div>
<div class="tab-pane" id="Bold-iOS12" role="tabpanel" >
    
![Access illustration via Settings - General - Accessibility - Bold Text](../../images/optionA11Y_iOS12_bold.png)
</div></div></br>

<a name="optionA11Y_closedCaption"></a>
- **Subtitles & Captioning** (UIAccessibilityIsClosedCaptioningEnabled): displays closed captioning or subtitles when available in the `appTV` or `Videos` app.

<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item" role="presentation">
        <a class="nav-link active"
           data-toggle="tab" 
           href="#ClosedCaption-iOS13"
           role="tab" 
           aria-selected="true">iOS 13</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#ClosedCaption-iOS12"
           role="tab" 
           aria-selected="false">iOS 12</a>
    </li>
</ul><div class="tab-content">
<div class="tab-pane show active"
     id="ClosedCaption-iOS13"
     role="tabpanel">

![Access illustration via Settings - Accessibility - Subtitles & Captioning](../../images/optionA11Y_iOS13_closedCaptions.png)
</div>
<div class="tab-pane" id="ClosedCaption-iOS12" role="tabpanel" >

![Access illustration via Settings - General - Accessibility - Subtitles & Captioning](../../images/optionA11Y_iOS12_closedCaptions.png)
</div></div></br>

<a name="optionA11Y_grayScale"></a>
- **Grayscale** (UIAccessibilityIsGrayscaleEnabled): makes the display more readable for color blind people.

<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item" role="presentation">
        <a class="nav-link active"
           data-toggle="tab" 
           href="#GrayScale-iOS13"
           role="tab" 
           aria-selected="true">iOS 13</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#GrayScale-iOS12"
           role="tab" 
           aria-selected="false">iOS 12</a>
    </li>
</ul><div class="tab-content">
<div class="tab-pane show active"
     id="GrayScale-iOS13"
     role="tabpanel">

![Access illustration via Settings - Accessibility - Display & Text Size - Colour Filters - Colour Filters](../../images/optionA11Y_iOS13_grayScale.png)
</div>
<div class="tab-pane" id="GrayScale-iOS12" role="tabpanel" >
    
![Access illustration via Settings - General - Accessibility - Display Accomodations - Colour Filters - Colour Filters](../../images/optionA11Y_iOS12_grayScale.png)
</div></div></br>

<a name="optionA11Y_guidedAccess"></a>
- **Guided Access** (UIAccessibilityIsGuidedAccessEnabled): restricts use of a single application.

<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item" role="presentation">
        <a class="nav-link active"
           data-toggle="tab" 
           href="#GuidedAccess-iOS13"
           role="tab" 
           aria-selected="true">iOS 13</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#GuidedAccess-iOS12"
           role="tab" 
           aria-selected="false">iOS 12</a>
    </li>
</ul><div class="tab-content">
<div class="tab-pane show active"
     id="GuidedAccess-iOS13"
     role="tabpanel">
    
![Access illustration via Settings - Accessibility - Guided Access - Guided Access](../../images/optionA11Y_iOS13_guidedAccess.png)
</div>
<div class="tab-pane" id="GuidedAccess-iOS12" role="tabpanel" >
    
![Access illustration via Settings - General - Accessibility - Guided Access - Guided Access](../../images/optionA11Y_iOS12_guidedAccess.png)
</div></div></br>

<a name="optionA11Y_inverserLesCouleurs"></a>
- **Invert Colours** (UIAccessibilityIsInvertColorsEnabled): reduces glare and eye strain thanks to a very helpful mode for visual impaired people ⟹ this option may be deactivated within an app thanks to the property <a href="../wwdc/2020/020/#color-shapes" style="text-decoration: underline;">`accessibilityIgnoresInvertColors`</a>.

<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item" role="presentation">
        <a class="nav-link active"
           data-toggle="tab" 
           href="#invertColors-iOS13"
           role="tab" 
           aria-selected="true">iOS 13</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#invertColors-iOS12"
           role="tab" 
           aria-selected="false">iOS 12</a>
    </li>
</ul><div class="tab-content">
<div class="tab-pane show active"
     id="invertColors-iOS13"
     role="tabpanel">
    
![Access illustration via Settings - Accessibility - Display & Text Size - Smart Invert](../../images/optionA11Y_iOS13_invertColors.png)
</div>
<div class="tab-pane" id="invertColors-iOS12" role="tabpanel" >
    
![Access illustration via Settings - General - Accessibility - Display Accomodations - Invert Colours - Smart Invert](../../images/optionA11Y_iOS12_invertColors.png)
</div></div></br>

<a name="optionA11Y_audioEnMono"></a>
- **Mono Audio** (UIAccessibilityIsMonoAudioEnabled): allows a complete hearing understanding with headset on without missing a word or a sound for people who are hard of hearing or deaf in one ear.

<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item" role="presentation">
        <a class="nav-link active"
           data-toggle="tab" 
           href="#AudioMono-iOS13"
           role="tab" 
           aria-selected="true">iOS 13</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#AudioMono-iOS12"
           role="tab" 
           aria-selected="false">iOS 12</a>
    </li>
</ul><div class="tab-content">
<div class="tab-pane show active"
     id="AudioMono-iOS13"
     role="tabpanel">
    
![Access illustration via Settings - Accessibility - Audio Visual - Mono Audio](../../images/optionA11Y_iOS13_audioEnMono.png)
</div>
<div class="tab-pane" id="AudioMono-iOS12" role="tabpanel" >
    
![Access illustration via Settings - General - Accessibility - Mono Audio](../../images/optionA11Y_iOS12_audioEnMono.png)
</div></div></br>

<a name="optionA11Y_limiteVisuel"></a>
- **Reduce Motion** (UIAccessibilityIsReduceMotionEnabled): see the [WWDC&nbsp;2018&nbsp;video](../wwdc/2018/230/#motion-0848), the [WWDC&nbsp;2019](../wwdc/2019/#reduce-motion) and the  [WWDC&nbsp;2020](../wwdc/2020/020/#display-preferences) videos for a detailed description.

<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item" role="presentation">
        <a class="nav-link active"
           data-toggle="tab" 
           href="#ReduceMotion-iOS13"
           role="tab" 
           aria-selected="true">iOS 13</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#ReduceMotion-iOS12"
           role="tab" 
           aria-selected="false">iOS 12</a>
    </li>
</ul><div class="tab-content">
<div class="tab-pane show active"
     id="ReduceMotion-iOS13"
     role="tabpanel">
    
![Access illustration via Settings - Accessibility - Motion - Reduce Motion](../../images/optionA11Y_iOS13_reduceMotion.png)
</div>
<div class="tab-pane" id="ReduceMotion-iOS12" role="tabpanel" >
    
![Access illustration via Settings - General - Accessibility - Reduce Motion](../../images/optionA11Y_iOS12_reduceMotion.png)
</div></div></br>

<a name="optionA11Y_preferCrossFadeTransition"></a>
- **Prefer Cross-Fade Transition** (UIAccessibilityPrefersCrossFadeTranstions): see the [WWDC&nbsp;2019](../wwdc/2019/#reduce-motion) and the  [WWDC&nbsp;2020](../wwdc/2020/020/#display-preferences) videos for a detailed description.
    
![Access illustration via Settings - Accessibility - Motion - Reduce Motion - Prefer Cross-Fade Transition](../../images/optionA11Y_iOS13_crossFadeTransition.png)
</br>

<a name="optionA11Y_reductionTransparence"></a>
- **Reduce Transparency** (UIAccessibilityIsReduceTransparencyEnabled): see the [WWDC&nbsp;2018&nbsp;video](../wwdc/2018/230/#transparency-and-blurring-0307) for a detailed description.

<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item" role="presentation">
        <a class="nav-link active"
           data-toggle="tab" 
           href="#ReduceTransparency-iOS13"
           role="tab" 
           aria-selected="true">iOS 13</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#ReduceTransparency-iOS12"
           role="tab" 
           aria-selected="false">iOS 12</a>
    </li>
</ul><div class="tab-content">
<div class="tab-pane show active"
     id="ReduceTransparency-iOS13"
     role="tabpanel">
    
![Access illustration via Settings - Accessibility - Display & Text Size - Reduce Transparency](../../images/optionA11Y_iOS13_reduceTransparency.png)
</div>
<div class="tab-pane" id="ReduceTransparency-iOS12" role="tabpanel" >
    
![Access illustration via Settings - General - Accessibility - Reduce Transparency](../../images/optionA11Y_iOS12_reduceTransparency.png)
</div></div></br>

<a name="optionA11Y_secouerPourAnnuler"></a>
- **Shake to Undo** (UIAccessibilityIsShakeToUndoEnabled): displays a menu to undo an action, preventing from holding backspace and watching all the letters disappear one by one for instance.

<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item" role="presentation">
        <a class="nav-link active"
           data-toggle="tab" 
           href="#ShakeToUndo-iOS13"
           role="tab" 
           aria-selected="true">iOS 13</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#ShakeToUndo-iOS12"
           role="tab" 
           aria-selected="false">iOS 12</a>
    </li>
</ul><div class="tab-content">
<div class="tab-pane show active"
     id="ShakeToUndo-iOS13"
     role="tabpanel">

![Access illustration via Settings - Accessibility - Touch - Shake to Undo](../../images/optionA11Y_iOS13_shakeToUndo.png)
</div>
<div class="tab-pane" id="ShakeToUndo-iOS12" role="tabpanel" >

![Access illustration via Settings - General - Accessibility - Shake to Undo](../../images/optionA11Y_iOS12_shakeToUndo.png)
</div></div></br>

<a name="optionA11Y_lecturePage"></a>
- **Speak Screen** (UIAccessibilityIsSpeakScreenEnabled): launches the vocalization of the screen content.

<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item" role="presentation">
        <a class="nav-link active"
           data-toggle="tab" 
           href="#SpeakScreen-iOS13"
           role="tab" 
           aria-selected="true">iOS 13</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#SpeakScreen-iOS12"
           role="tab" 
           aria-selected="false">iOS 12</a>
    </li>
</ul><div class="tab-content">
<div class="tab-pane show active"
     id="SpeakScreen-iOS13"
     role="tabpanel">

![Access illustration via Settings - Accessibility - Spoken Content - Speak Screen](../../images/optionA11Y_iOS13_speakScreen.png)
</div>
<div class="tab-pane" id="SpeakScreen-iOS12" role="tabpanel" >

![Access illustration via Settings - General - Accessibility - Speak Screen](../../images/optionA11Y_iOS12_speakScreen.png)
</div></div></br>

<a name="optionA11Y_speakSelection"></a>
- **Speak Selection** (UIAccessibilityIsSpeakSelectionEnabled): displays a menu that suggests to speak the selection that fired it.

<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item" role="presentation">
        <a class="nav-link active"
           data-toggle="tab" 
           href="#SpeakSelection-iOS13"
           role="tab" 
           aria-selected="true">iOS 13</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#SpeakSelection-iOS12"
           role="tab" 
           aria-selected="false">iOS 12</a>
    </li>
</ul><div class="tab-content">
<div class="tab-pane show active"
     id="SpeakSelection-iOS13"
     role="tabpanel">

![Access illustration via Settings - Accessibility - Spoken Content - Speak Selection](../../images/optionA11Y_iOS13_speakSelection.png)
</div>
<div class="tab-pane" id="SpeakSelection-iOS12" role="tabpanel" >

![Access illustration via Settings - General - Accessibility - Speak Selection](../../images/optionA11Y_iOS12_speakSelection.png)
</div></div></br>

<a name="optionA11Y_switchControl"></a>
- **Switch Control** (UIAccessibilityIsSwitchControlRunning): activates the feature in `point`&nbsp;`scanning`&nbsp;`mode` or in `item`&nbsp;`scanning`&nbsp;`mode`.

<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item" role="presentation">
        <a class="nav-link active"
           data-toggle="tab" 
           href="#SwitchControl-iOS13"
           role="tab" 
           aria-selected="true">iOS 13</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#SwitchControl-iOS12"
           role="tab" 
           aria-selected="false">iOS 12</a>
    </li>
</ul><div class="tab-content">
<div class="tab-pane show active"
     id="SwitchControl-iOS13"
     role="tabpanel">

![Access illustration via Settings - Accessibility - Switch Control - Switch Control](../../images/optionA11Y_iOS13_switchControl.png)
</div>
<div class="tab-pane" id="SwitchControl-iOS12" role="tabpanel" >

![Access illustration via Settings - General - Accessibility - Switch Control](../../images/optionA11Y_iOS12_switchControl.png)
</div></div></br>

<a name="optionA11Y_voiceOver"></a>
- **VoiceOver** (UIAccessibilityIsVoiceOverRunning): launches the screen reader.

<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item" role="presentation">
        <a class="nav-link active"
           data-toggle="tab" 
           href="#VoiceOver-iOS13"
           role="tab" 
           aria-selected="true">iOS 13</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#VoiceOver-iOS12"
           role="tab" 
           aria-selected="false">iOS 12</a>
    </li>
</ul><div class="tab-content">
<div class="tab-pane show active"
     id="VoiceOver-iOS13"
     role="tabpanel">

![Access illustration via Settings - Accessibility - VoiceOver - VoiceOver](../../images/optionA11Y_iOS13_voiceOver.png)
</div>
<div class="tab-pane" id="VoiceOver-iOS12" role="tabpanel" >

![Access illustration via Settings - General - Accessibility - VoiceOver](../../images/optionA11Y_iOS12_voiceOver.png)
</div></div></br>

<a name="optionA11Y_autoPlayVideoPreviews"></a>
- **Auto-Play Video Previews** (UIAccessibilityIsVideoAutoplayEnabled): see the [WWDC&nbsp;2019&nbsp;video](../wwdc/2019/#reduce-motion) for a detailed description of this **iOS 13 new feature**.

![Access illustration via Settings - Accessibility - Motion - Auto-play Video Previews](../../images/optionA11Y_iOS13_autoPlayVideoPreviews.png)
</br>

<a name="optionA11Y_differentiateWithoutColour"></a>
- **Differentiate Without Colour** (UIAccessibilityShouldDifferentiateWithoutColour): see the [WWDC&nbsp;2019&nbsp;video](../wwdc/2019/#color) for a detailed description of this **iOS&nbsp;13 new feature** and the [WWDC&nbsp;2020&nbsp;video](../wwdc/2020/020/#color-shapes) for its **programmatic access from iOS&nbsp;14**.

![Access illustration via Settings - Accessibility - Display & Text Size - Differentiate Without Colour](../../images/optionA11Y_iOS13_differentiateWithoutColour.png)
</br>

<a name="optionA11Y_onOffSwitchLabels"></a>
- **On/Off Labels** (UIAccessibilityIsOnOffSwitchLabelsEnabled): once activated, this option whose **programmatic access is new in iOS 13** displays each button state.

![Access illustration via Settings - Accessibility - Display & Text Size - On/Off Labels](../../images/optionA11Y_iOS13_onOffSwitchLabels.png)
</div>
<div class="tab-pane" id="a11yOptions-Check" role="tabpanel" >
    
Once activated, if the accessibility option has no result in the running application, it's **highly&nbsp;recommended** to keep oneself posted of the impacted options states so as to provide the best user experience.

The full list of the accessibility options with their dedicated notification is located in the  <a href="../development/#accessibility-options" style="text-decoration: underline;">developer&nbsp;part</a> of this site.

It may be particularly interesting to keep track of these options (de)activations with kind of indicators in order to have a better understanding of the users habits and to implement improvements accordingly.
</div> 
</div>
</br></br>

<!--  This file is part of a11y-guidelines | Our vision of mobile & web accessibility guidelines and best practices, with valid/invalid examples.
 Copyright (C) 2016  Orange SA
 See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). -->


