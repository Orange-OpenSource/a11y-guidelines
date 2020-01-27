# iOS design criteria

<script>$(document).ready(function () {
    setBreadcrumb([{"label":"iOS","url":"mobile-ios.html"},
                   {"label":"Design criteria"}]);
    addSubMenu([
        {"label":"Design criteria","url":"criteria-ios.html", "expanded": true}, 
        {"label":"Developers guide","url":"dev-ios.html"},
        {"label":"VoiceOver","url":"voiceover.html"},
        {"label":"WWDC","url":"dev-ios-wwdc.html"},
        {"label":"Tests","url":"criteria-ios-test.html"}
    ]);        
});</script>

<span data-menuitem="mobile-ios"></span>

This guide aims to present the different accessibility criteria for getting an accessible iOS application.
</br>Each criterion explains for whom it is important, when it can be implemented, why it is important and the corresponding accessibility rule.
</br></br>
## Images
<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item">
        <a class="nav-link active"
           data-toggle="tab" 
           href="#images-Objectives" 
           role="tab" 
           aria-selected="true">Objective</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#images-Description" 
           role="tab" 
           aria-selected="false">Description</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#images-Examples" 
           role="tab" 
           aria-selected="false">Example</a>
    </li>
    <li class="nav-item">
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
</br>Blocking point: an image without textual description is unusable by people with visual impairments or those that cannot display images *(mobile, low bandwidth…)*.
</br></br>**Target: ** everyone, especially people with visual impairments.  
**When: ** as of design and during development.
</div>
<div class="tab-pane" id="images-Description" role="tabpanel" >
Images are often used to convey a lot of information.
</br>The blind cannot see the images, it is important that they have an alternative that gives all the information conveyed by the image.
</br></br>In the case of an image containing text, this text will be used for the alternative.
</br>In the case of an image that provides information as a graph, drawing or other, the alternative will contain all necessary information in the image.  
</br>Some images are used for decorative purposes: these pictures do not require alternative.
</br>By default, pictures are not vocalized by the VoiceOver screen reader.
</br></br>Illustrations in the application are also considered decorative images.
</br>The rule is the same: there is no alternative text to add.
</br>Icons are, conversely, widely used as buttons for various features. So they need relevant text alternatives.
</br></br>The alternative of an image is set via the `accessibilityLabel` attribute (using the `UIAccessibility` protocol available on any children of `UIView`).
</div>
<div class="tab-pane" id="images-Examples" role="tabpanel" >
<img src="./images/image_ex.png" alt="complete example of decorative picture and informative icon" width="400">  
</br></br>By decomposing the image:  
- <img src="./images/montagnard.png" alt="example of decorative picture" width="256"> no `accessibilityLabel`  
- <img src="./images/edit.png" alt="example of informative icon - parameters" width="48"> `buttonView.accessibilityLabel = "example_image_edit_accessibilityLabel".localized`  
- <img src="./images/settings.png" alt="example of informative icon - edition" width="48"> `buttonView.accessibilityLabel = "example_image_settings_accessibilityLabel".localized`
</div>
<div class="tab-pane" id="images-Check" role="tabpanel" >
- Images with information must convey this information through their text alternative.
- Decorative images have no alternative text.
</div>
</div></br></br>

## Colours
<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item">
        <a class="nav-link active"
           data-toggle="tab" 
           href="#colours-Objectives" 
           role="tab" 
           aria-selected="true">Objective</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#colours-Description" 
           role="tab" 
           aria-selected="false">Description</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#colours-Examples" 
           role="tab" 
           aria-selected="false">Examples</a>
    </li>
    <li class="nav-item">
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
Ease of reading for all users, especially the visually impaired, or people in a very bright environment *(outdoors)*.
</br>Allow users who cannot distinguish colours or sensory information *(colour blind, visually impaired, hearing impaired, mobile users in bright environment or in noisy environments…)* to access the same information by other means.
</br></br>** Target: ** everyone, especially people with visual impairments, elderly people and people with vision problems (colour blindness, vision contrasts...)  
** When: ** as of the design phase and during development.
</div>
<div class="tab-pane" id="colours-Description" role="tabpanel" >
Colours have a very important role in the transmission of information.
</br>Some colours are associated with concepts or feelings but we must never forget the part of the population that does not correctly distinguish colours.
</br></br>The bold font type will allow a weaker contrast for the lowest font sizes.
</br><img style="max-width: 1000px; height: auto;" alt="" src="./images/color_contrast_2.png" />
</br></br>The normal font type will require a higher contrast than the previous case.
</br><img style="max-width: 1000px; height: auto;" alt="" src="./images/color_contrast_3.png" />
</br></br> With [Dynamic Type](./dev-ios.html#text-size) whose purpose is to increase the font size according to the user settings, the contrast isn't necessary fixed and must be adapted to the text size.
</br><img style="max-width: 300px; height: auto;" alt="" src="./images/color_contrast_1.png" />
</br></br>Adding different forms to differentiate the information provided only by colors may unnecessarily overlay the graphic interface if the user doesn't need them.
</br><img style="max-width: 1100px; height: auto;" alt="" src="./images/iOSdev/wwdc19-244-TextStyles_11.png" />
</br>In this case, the [Differentiate Without Colour](#optionA11Y_differentiateWithoutColour) accessibility option *(iOS 13 new feature)* will allow this display **only at the user's demand**.
</br></br>** Tools: **
- The <a href="http://www.paciellogroup.com/resources/contrastanalyser/" style="text-decoration: underline;">Colour Contrast Analyser</a> application can quickly measure colour contrast levels (free for Windows and Mac).
- The Accessibility Inspector tool provides a specific <a href="./dev-ios-wwdc-19000.html#ColorContrast" style="text-decoration: underline;">Color Contrast Calculator</a> feature that reaches the same purpose since Xcode 11.
</div>
<div class="tab-pane" id="colours-Examples" role="tabpanel" >
The label “film | 8:40 PM…” does not have enough contrast. It will not be readable by all users.
</br>![screenshot showing text with poor contrast](images/contraste.png)
</br></br>Example of information conveyed through valid and invalid colour:
</br><img src="./images/couleur_ios.png" alt="example of information conveyed through valid and invalid colour" width="300">
</div>
<div class="tab-pane" id="colours-Check" role="tabpanel" >
- Do not use colour as the only way of conveying information, indicating an action, requesting a response or distinguishing an element.
- The contrast between the colour of the background and the text must be appropriate *(can be measured with the Colour Contrast Analyser tool or with the <a href="./dev-ios-wwdc-19000.html#ColorContrast" style="text-decoration: underline;">Color Contrast Calculator</a> feature of Accessibility Inspector under Xcode 11)*.
- With the **Dark Mode** iOS 13 new feature, special attention must be paid to the contrasts used in the different themes and that can be modified with the <a role="button" style="text-decoration: underline;" onclick="
    document.getElementById('a11yOptions').scrollIntoView({ behavior: 'smooth', block: 'start' });
    $('#a11yOptions-Description_tab').trigger('click');
    document.getElementsByName('optionA11Y_contraste')[0].scrollIntoView({ behavior: 'smooth', block: 'start' });">Increase Contrast</a> accessibility option.
</div>
</div></br></br>

## Alternative text
<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item">
        <a class="nav-link active"
           data-toggle="tab" 
           href="#alternativeText-Objectives" 
           role="tab" 
           aria-selected="true">Objective</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#alternativeText-Description" 
           role="tab" 
           aria-selected="false">Description</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#alternativeText-Examples" 
           role="tab" 
           aria-selected="false">Example</a>
    </li>
    <li class="nav-item">
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
Provide access to application information to screen reader users.
</br></br>** Target: ** everyone, especially people with visual impairments.  
** When: ** as of design, content writing and during development.
</div>
<div class="tab-pane" id="alternativeText-Description" role="tabpanel" >
Text alternatives are at the core of mobile accessibility. Thanks to them, a visually impaired user can use an application without loss of information.
</br></br>As for images, it is important to add a text alternative when information is not available for the visually impaired/blind.
</br>This is the case of components that provide information by colour, shape, position, sound… On mobile, all components can have a text alternative, it is possible to enrich the native vocalization of an element, including a simple text.
</br></br>Space on mobile is reduced, we often use abbreviations for text.
</br>However, this raises an issue for users of screen readers that vocalize abbreviations literally.
</br>To correct these vocalizations, simply place a text alternative on the text.
</br>This alternative contains the expanded text.
</br>Note that VoiceOver can recognize some common abbreviations: for example, “etc.” is vocalized “etcetera”.
</br></br>Some images are frequently associated with text to give information.
</br>This is the case of “unread messages” when a badge shows the number of messages to read and which describes a “message”.
</br>In this case, the solution is to set a text alternative on the text that gives all the necessary information: for example,“3 unread messages”.
</br>One can also set this alternative on the images but in this case we must make the text “invisible” to the screen reader.
</br></br>The text alternative of an element is set via the `accessibilityLabel`, `accessibilityHint`, `accessibilityValue` and `accessibilityTrait` (using the `UIAccessibility` protocol available on any child of `UIView`).
</br>The order of vocalization is as follows: label, value, trait and hint. This order cannot be changed and vocalization is done only once.
</br></br>For more technical information on these attributes, please refer to the <a href="./dev-ios.html#text-alternatives" style="text-decoration: underline;">text alternatives on the developer guide</a>.
</div>
<div class="tab-pane" id="alternativeText-Examples" role="tabpanel" >
Below is a common example of an icon that is associated with a text (badge) to add information.
</br>In our case, the “mail” icon associated with the “3” in the badge makes us understand that we have “3 unread mails”.
</br></br>If no text alternative is added, two vocalizations will be read “unlabelled button” and “3”: it's obvious that we must add text alternatives.
</br></br><img src="./images/alt.png" alt="icon example coupled with the text that requires a text alternative" width="80" class="pull-left">
</div>
<div class="tab-pane" id="alternativeText-Check" role="tabpanel" >
- Elements that require an alternative should have one.
- The alternative text must be clear and understandable.
</div>
</div></br></br>
## Title and header
<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item">
        <a class="nav-link active"
           data-toggle="tab" 
           href="#titleAndHeaders-Objectives" 
           role="tab" 
           aria-selected="true">Objective</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#titleAndHeaders-Description" 
           role="tab" 
           aria-selected="false">Description</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#titleAndHeaders-Examples" 
           role="tab" 
           aria-selected="false">Example</a>
    </li>
    <li class="nav-item">
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
</br></br>** Target: ** everyone  
** When: ** as of design and during content writing.
</div>
<div class="tab-pane" id="titleAndHeaders-Description" role="tabpanel" >
The page title is the first element vocalized or seen on a mobile screen.
</br>It makes navigation easier for everyone: at any time, we know where we are in the application.
</br>A common mistake is to set the same title for every page of an application *(or even no title at all)*.
</br></br>iOS headers allow structuring pages providing additional information.
</br>This information is useful to the accessibility API because VoiceOver can navigate through the headers *(VoiceOver wheel, header mode)*: it allows the user to browse the page faster.
</div>
<div class="tab-pane" id="titleAndHeaders-Examples" role="tabpanel" >
** Invalid example: **
</br><img src="./images/header_ios.png" alt="example of irrelevant title (no title)" width="300">
</div>
<div class="tab-pane" id="titleAndHeaders-Check" role="tabpanel" >
- Each screen must have its own title allowing us to know where we are in the app navigation *(together with the back button)*.
- The elements identified as headers must be declared as headers for assistive tools.
</div>
</div></br></br>
## Element states
<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item">
        <a class="nav-link active"
           data-toggle="tab" 
           href="#eltStates-Objectives" 
           role="tab" 
           aria-selected="true">Objective</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#eltStates-Description" 
           role="tab" 
           aria-selected="false">Description</a>
    </li>
    <li class="nav-item">
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
Allow screen reader users to access components information, their status, their nature so they can use them without any difficulties.
</br></br>** Target: ** everyone, especially people with visual impairments.  
** When: ** during development.
</div>
<div class="tab-pane" id="eltStates-Description" role="tabpanel" >
If an element does not vocalize its status, nature or state, the VoiceOver user is unable to understand what is happening on the screen.
</br>Not specifying that a view is unfolded or that we have tabs are very common examples.
</br></br>By default, tabs in iOS are accessible.
</br>Meanwhile, it is very common to customize the tabs’ look and feel, so it is the developer’s responsibility to provide the tab state and nature to the user via the corresponding accessibility attributes.
</br>An example is available in the “Standard components” section.
</br></br>Another common instance of elements that do not vocalize their state : expandable views.
</br>Again, thanks to the text alternative title of the view, we can vocalize the state of the view for VoiceOver users.
</br></br>To set this kind of information, use the `accessibilityLabel` and `accessibilityTrait` attributes.
</div>
<div class="tab-pane" id="eltStates-Examples" role="tabpanel" >
Any item whose status changes when using the application must vocalize its status through its text alternative.
</br></br><img src="./images/expandable_list.png" alt="example of an expandable list that needs text alternative" width="250" class="pull-left">
</br></br>For example, an item that can be selected/unselected must vocalize its state through a text alternative.
</div>
</div></br></br>
## Standard components
<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item">
        <a class="nav-link active"
           data-toggle="tab" 
           href="#stdComponent-Objectives" 
           role="tab" 
           aria-selected="true">Objective</a>
    </li>
    <li class="nav-item">
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
</br></br>** Target: ** everyone.  
** When: ** when choosing the libraries and during development.
</div>
<div class="tab-pane" id="stdComponent-Description" role="tabpanel" >
Accessibility is taken into account in native components *(most of the time)*.
</br>Additionally, the use of standard components allows the user to be in a situation or behaviour that they are already used to. </br>Navigation through a standard interface is more comfortable.
</br></br>Use native components as much as possible and change their appearance.
</br>If no standard component corresponds to the need, create a dedicated component based on a standard component while keeping the navigation and accessibility consistency.
</div>
</div></br></br>
## Touch target
<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item">
        <a class="nav-link active"
           data-toggle="tab" 
           href="#touchTarget-Objectives" 
           role="tab" 
           aria-selected="true">Objective</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#touchTarget-Description" 
           role="tab" 
           aria-selected="false">Description</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#touchTarget-Examples" 
           role="tab" 
           aria-selected="false">Examples</a>
    </li>
    <li class="nav-item">
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
</br></br>** Target: ** everyone, especially people with motor impairments.  
** When: ** as of design and during development.
</div>
<div class="tab-pane" id="touchTarget-Description" role="tabpanel" >
If a touch target of a component is too small, it can prevent some users from enjoying the application.
</br></br>This can lead to frustration that can result in uninstalling it.
</br></br>Each clickable element must have a large enough touch target.
</div>
<div class="tab-pane" id="touchTarget-Examples" role="tabpanel" >
</br>** Valid example: **
</br><img src="./images/clic_ok.png" alt="interactive component example with a fairly large touch target" width="300">
</br></br>** Invalid example: **
</br><img src="./images/clic_ko.png" alt="interactive component example with a small touch target" width="300">
</div>
<div class="tab-pane" id="touchTarget-Check" role="tabpanel" >
44 pt is the recommended touch target size for elements according to Apple (height and width).
</div>
</div></br></br>
## Ghost element
<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item">
        <a class="nav-link active"
           data-toggle="tab" 
           href="#ghostElt-Objectives" 
           role="tab" 
           aria-selected="true">Objective</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#ghostElt-Description" 
           role="tab" 
           aria-selected="false">Description</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#ghostElt-Examples" 
           role="tab" 
           aria-selected="false">Example</a>
    </li>
    <li class="nav-item">
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
</br></br>** Target: ** people with visual impairments.  
** When: ** during development.
</div>
<div class="tab-pane" id="ghostElt-Description" role="tabpanel" >
Although invisible on the screen, some elements can be vocalized by the screen reader *(elements positioned outside the visible area or hidden by other elements)*.
</br></br>The superposition of screens is frequent when designing mobile apps but it generates very heavy accessibility problems if it is not done properly from the start.
</br>A screen reader such as VoiceOver is able to read information from a view that is placed “below” another but if the user is able to interact with this view, it totally disturbs navigation and it quickly becomes impossible.
</br></br>Ghost elements are very common when creating custom alert dialogs. However, this kind of component can be accessible. </br>Please refer to the <a href="./dev-ios.html#modal-view" style="text-decoration: underline;">corresponding section on the developer guide</a>.
</div>
<div class="tab-pane" id="ghostElt-Examples" role="tabpanel" >
** Invalid example: **

In the example below, the custom alert dialog has a ghost element.
</br>When VoiceOver is activated it vocalizes the content behind the current view (shown in black).  
<img src="./images/ghost_ios.png" alt="ghost element example" width="300">
</div>
<div class="tab-pane" id="ghostElt-Check" role="tabpanel" >
With the screen reader, no invisible element must be read or take focus when reading a page.
</div>
</div></br></br>
## Content Control
<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item">
        <a class="nav-link active"
           data-toggle="tab" 
           href="#contentControl-Objectives" 
           role="tab" 
           aria-selected="true">Objective</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#contentControl-Description" 
           role="tab" 
           aria-selected="false">Description</a>
    </li>
    <li class="nav-item">
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
</br></br>** Target: ** everyone and especially people with visual and cognitive deficiency.  
** When: ** as of design and during development.
</div>
<div class="tab-pane" id="contentControl-Description" role="tabpanel" >
On mobile, screen readers try to notify the user when there is a context change.
</br>In some cases, it can give constant vocalizations, and can therefore become inaudible, or prevent any user action.
</br></br>The user must control the content at any time.
</br>This is especially true with interactive content.
</br></br>So avoid video player launching directly in full screen mode or videos starting automatically without user action or a carousel scrolling automatically for instance.
</div>
<div class="tab-pane" id="contentControl-Check" role="tabpanel" >
All interactive content must be controlled by the user *(adding an accessible button to exit full-screen mode for instance)*.
</div>
</div></br></br>
## Changing content
<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item">
        <a class="nav-link active"
           data-toggle="tab" 
           href="#changingContent-Objectives" 
           role="tab" 
           aria-selected="true">Objective</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#changingContent-Description" 
           role="tab" 
           aria-selected="false">Description</a>
    </li>
    <li class="nav-item">
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
Provide access to changing content to screen reader users.
</br></br>** Target: ** everyone, especially people with visual impairments.  
** When: ** during development.
</div>
<div class="tab-pane" id="changingContent-Description" role="tabpanel" >
When content is dynamically modified after a user action, the screen reader must notify it.
</br>Without any voice feedback, the user does not know that the content has changed.  
</br>If the content has changed dynamically after a user action, it is important that the screen reader is notified so that it triggers a vocalization *(refreshing a list or a timer for instances)*.
</br></br>To start a vocalization, one must send a notification to the accessibility API via the `UIAccessibilityPostNotification` method with the `UIAccessibilityAnnouncementNotification` notification in parameter and the text to vocalize.
</br></br>It is also recommended to notify the Accessibility API when there is a change of context.
</br>To do that, one must send a notification via the `UIAccessibilityPostNotification`.  
There are several types of notifications, but the two most used are:  
- `UIAccessibilityLayoutChangedNotification`: notify that a part of the content has changed.
- `UIAccessibilityScreenChangedNotification`: notify a global change.

For more technical information, please check out the corresponding section on the <a href="./dev-ios.html#notify-a-content-change" style="text-decoration: underline;">developer guide for iOS</a>.
</div>
<div class="tab-pane" id="changingContent-Check" role="tabpanel" >
With a screen reader, make sure that dynamic changes are vocalized.
</div>
</div></br></br>
## Horizontal scroll
<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item">
        <a class="nav-link active"
           data-toggle="tab" 
           href="#horizontalScroll-Objectives" 
           role="tab" 
           aria-selected="true">Objective</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#horizontalScroll-Description" 
           role="tab" 
           aria-selected="false">Description</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#horizontalScroll-Examples" 
           role="tab" 
           aria-selected="false">Examples</a>
    </li>
    <li class="nav-item">
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
</br>Allow screen reader users to scroll horizontally.
</br></br>** Target: ** everyone, especially people with visual impairments.  
** When: ** as of design and during development.
</div>
<div class="tab-pane" id="horizontalScroll-Description" role="tabpanel" >
A horizontal scroll can be very difficult to detect if no visual feedback is displayed to help the user understand that there are several pages.
</br>Do not hesitate to display a view to indicate a horizontal scroll *(dots on `UIPageControl` for example)*.
</br>When necessary, also add “next” and “previous” buttons.
</div>
<div class="tab-pane" id="horizontalScroll-Examples" role="tabpanel" >
<div class="sideToSide row">
<div class="col-sm-6 col-xs-12">
** Valid example: **
</br><img src="./images/scroll_ios_h1.png" alt="Valid example of a horizontal scroll" width="300">
</div>
<div class="col-sm-6 col-xs-12">
** Invalid example: **
</br><img src="./images/scroll_ios_h2.png" alt="Invalid example of a horizontal scroll" width="300">
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
    <li class="nav-item">
        <a class="nav-link active"
           data-toggle="tab" 
           href="#form-Objectives" 
           role="tab" 
           aria-selected="true">Objective</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#form-Description" 
           role="tab" 
           aria-selected="false">Description</a>
    </li>
    <li class="nav-item">
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
</br></br>** Target: ** everyone, especially people with visual impairments.  
** When: ** as of design and during development.
</div>
<div class="tab-pane" id="form-Description" role="tabpanel" >
Binding the form fields with their labels provides an additional vocalization allowing the user to understand what happens when filling out a form field.
</br></br>We must use the `accessibilityLabel` attribute to associate a label to a form field.
</div>
<div class="tab-pane" id="form-Check" role="tabpanel" >
Form fields must vocalize their labels.
</div>
</div></br></br>
## Reading order
<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item">
        <a class="nav-link active"
           data-toggle="tab" 
           href="#readingOrder-Objectives" 
           role="tab" 
           aria-selected="true">Objective</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#readingOrder-Description" 
           role="tab" 
           aria-selected="false">Description</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#readingOrder-Examples" 
           role="tab" 
           aria-selected="false">Example</a>
    </li>
    <li class="nav-item">
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
</br></br>** Target: ** people with visual impairments.  
** When: ** during development.
</div>
<div class="tab-pane" id="readingOrder-Description" role="tabpanel" >
The reading order allows the screen reader user to get their bearings and to ensure functional coherence.
</br>It is therefore important to pay attention to it.
</br></br>By default, the reading order of voice synthesis depends on the “logical” reading order (in France), from left to right and top to bottom.
</br></br>It is possible to redefine the VoiceOver reading order using the `UIAccessibilityContainer` protocol *(take a look at the <a href="./dev-ios.html#reading-order" style="text-decoration: underline;">developer section</a> if you need further information)*.
</div>
<div class="tab-pane" id="readingOrder-Examples" role="tabpanel" >
In this example, the default playback order depends completely on the implementation and on the order of element declaration.
</br>In this case: `1, 2, 3,  vol+, 4, 5, 6, p+, vol-, 7, 8, 9, p-, 0`.
</br><img src="./images/order.png" alt="Example of reading order" width="300">
</br>A more consistent reading order is `1, 2, 3, 4, 5, 6, 7, 8, 9, 0, vol+, vol-, p+, p-`.
</div>
<div class="tab-pane" id="readingOrder-Check" role="tabpanel" >
Traversal order *(VoiceOver)* is logical and coherent.
</div>
</div></br></br>
## Language
<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item">
        <a class="nav-link active"
           data-toggle="tab" 
           href="#language-Objectives" 
           role="tab" 
           aria-selected="true">Objective</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#language-Description" 
           role="tab" 
           aria-selected="false">Description</a>
    </li>
    <li class="nav-item">
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
</br></br>**Target : ** people with visual impairments.  
**When: ** during development.
</div>
<div class="tab-pane" id="language-Description" role="tabpanel" >
VoiceOver vocalization uses the default language of the mobile.
</br>Sometimes some words/texts of an application are in a different language.
</br>In order to make them properly understandable, they have to be declared in that specific language.
</br></br>To change VoiceOver language pronunciation of a word or a text, use the `accessibilityLanguage` attribute, available via the `UIAccessibility` protocol *(see the <a href="dev-ios.html#change-the-vocalization-language" style="text-decoration: underline;">developer section</a> if need be)*.
</div>
<div class="tab-pane" id="language-Check" role="tabpanel" >
The words/text in a different language than the rest of the application should be vocalized in their corresponding language.
</div>
</div></br></br>
## Screen orientation
<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item">
        <a class="nav-link active"
           data-toggle="tab" 
           href="#screenOrientation-Objectives" 
           role="tab" 
           aria-selected="true">Objective</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#screenOrientation-Description" 
           role="tab" 
           aria-selected="false">Description</a>
    </li>
    <li class="nav-item">
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
</br></br>**Target&nbsp;: ** everyone, especially people with visual and/or motor impairments.  
**When&nbsp;: ** as of design and during development.
</div>
<div class="tab-pane" id="screenOrientation-Description" role="tabpanel" >
The screen orientation mustn't impact the access of an application content.
</br>It's highly recommended to :
- **Implement both the portrait and the landscape modes** to be easily toggled by the user if it doesn't go against some functional constraints of the application itself (`serious game` for instance).
- Provide for iPad screen sizes in order to facilitate reading and gestures.
</div>
<div class="tab-pane" id="screenOrientation-Check" role="tabpanel" >
- Perfectly detailed design guideline including all the screens to be implemented with their possible orientation constraints.
- Very accurate definition of the way the transitions between portrait and landscape modes should occur.
- Portrait and landscape modes flawless adaptation to the content thanks to a bunch of graphic tests *(very important for the `Dynamic Type`)*.
- Appropriate settings in the integrated development environment.
</div>
</div></br></br>
## Accessibility options

<a id="a11yOptions"></a>
<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item">
        <a class="nav-link active"
           data-toggle="tab" 
           href="#a11yOptions-Objectives" 
           role="tab" 
           aria-selected="true">Objective</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#a11yOptions-Description"
           id="a11yOptions-Description_tab"
           role="tab" 
           aria-selected="false">Description</a>
    </li>
    <li class="nav-item">
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
</br></br>It's then primordial :
- To **understand perfectly** each one of these options that can have an impact during the conception or the implementation periods of an application.
- To ** test** each appropriate option so as to be sure that its purpose is completely taken into account inside the application.

**Target&nbsp;:** everyone.  
**When&nbsp;:** as of design and during development.
</div>
<div class="tab-pane" id="a11yOptions-Description" role="tabpanel" >
The full list of these options including their purpose and their coding name is defined hereunder:
    
1. [Increase Contrast](#optionA11Y_contraste)
2. [AssistiveTouch](#optionA11Y_assistiveTouch)
3. [Bold Text](#optionA11Y_bold)
4. [Subtitles & Captioning](#optionA11Y_closedCaption)
5. [Greyscale](#optionA11Y_grayScale)
6. [Guided Access](#optionA11Y_guidedAccess)
7. [Invert Colours](#optionA11Y_inverserLesCouleurs)
8. [Mono Audio](#optionA11Y_audioEnMono)
9. [Reduce Motion](#optionA11Y_limiteVisuel)
10. [Reduce Transparency](#optionA11Y_reductionTransparence)
11. [Shake to Undo](#optionA11Y_secouerPourAnnuler)
12. [Speak Screen](#optionA11Y_lecturePage)
13. [Speak Selection](#optionA11Y_speakSelection)
14. [Switch Control](#optionA11Y_switchControl)
15. [VoiceOver](#optionA11Y_voiceOver)
16. [Auto-Play Video Previews](#optionA11Y_autoPlayVideoPreviews) ⟹ **iOS 13 new feature**
17. [Differentiate Without Colour](#optionA11Y_differentiateWithoutColour) ⟹ **iOS 13 new feature**
18. [On/Off Labels](#optionA11Y_onOffSwitchLabels) ⟹ **new in iOS 13**

<a name="optionA11Y_contraste"></a>
- **Increase Contrast** *(UIAccessibilityDarkerSystemColorsEnabled)* : see the [WWDC 2018 video](./dev-ios-wwdc-18230.html#Contrast) for a detailed description.

<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item">
        <a class="nav-link active"
           data-toggle="tab" 
           href="#Contrast-iOS13"
           role="tab" 
           aria-selected="true">iOS 13</a>
    </li>
    <li class="nav-item">
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
<img style="max-width: 1000px; height: auto;" alt="Access illustration via Settings - Accessibility - Display & Text Size - Increase Contrast." src="./images/optionA11Y_iOS13_contraste.png" />
</br>Since **iOS 13**, this accessibility option is a `traitCollection` **<a href="https://developer.apple.com/documentation/uikit/uitraitcollection/3238079-accessibilitycontrast" style="text-decoration: underline;">variable instance</a>**.
</div>
<div class="tab-pane" id="Contrast-iOS12" role="tabpanel" >
<img style="max-width: 600px; height: auto;" alt="Access illustration via Settings - General - Accessibility - Increase Contrast." src="./images/optionA11Y_iOS12_contraste.png" />
</div></div></br>
<a name="optionA11Y_assistiveTouch"></a>
- **AssistiveTouch** *(UIAccessibilityIsAssistiveTouchRunning)* : displays the homonymous menu in foreground, whatever the runnning application.

<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item">
        <a class="nav-link active"
           data-toggle="tab" 
           href="#AssistiveTouch-iOS13"
           role="tab" 
           aria-selected="true">iOS 13</a>
    </li>
    <li class="nav-item">
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
<img style="max-width: 1100px; height: auto;" alt="Access illustration via Settings - Accessibility - Touch - AssistiveTouch - AssistiveTouch." src="./images/optionA11Y_iOS13_assistiveTouch.png" />
</div>
<div class="tab-pane" id="AssistiveTouch-iOS12" role="tabpanel" >
<img style="max-width: 600px; height: auto;" alt="Access illustration via Settings - General - Accessibility - AssistiveTouch" src="./images/optionA11Y_iOS12_assistiveTouch.png" />
</div></div></br>
<a name="optionA11Y_bold"></a>
- **Bold Text** *(UIAccessibilityIsBoldTextEnabled)* : see the [WWDC 2018 video](./dev-ios-wwdc-18230.html#Sizing) for a detailed description.

<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item">
        <a class="nav-link active"
           data-toggle="tab" 
           href="#Bold-iOS13"
           role="tab" 
           aria-selected="true">iOS 13</a>
    </li>
    <li class="nav-item">
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
<img style="max-width: 1000px; height: auto;" alt="Access illustration via Settings - Accessibility - Bold Text" src="./images/optionA11Y_iOS13_bold.png" />
</div>
<div class="tab-pane" id="Bold-iOS12" role="tabpanel" >
<img style="max-width: 600px; height: auto;" alt="Access illustration via Settings - General - Accessibility - Bold Text" src="./images/optionA11Y_iOS12_bold.png" />
</div></div></br>
<a name="optionA11Y_closedCaption"></a>
- **Subtitles & Captioning** *(UIAccessibilityIsClosedCaptioningEnabled)* : displays closed captioning or subtitles when available in the `appTV` or `Videos` app.

<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item">
        <a class="nav-link active"
           data-toggle="tab" 
           href="#ClosedCaption-iOS13"
           role="tab" 
           aria-selected="true">iOS 13</a>
    </li>
    <li class="nav-item">
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
<img style="max-width: 1000px; height: auto;" alt="Access illustration via Settings - Accessibility - Subtitles & Captioning" src="./images/optionA11Y_iOS13_closedCaptions.png" />
</div>
<div class="tab-pane" id="ClosedCaption-iOS12" role="tabpanel" >
<img style="max-width: 950px; height: auto;" alt="Access illustration via Settings - General - Accessibility - Subtitles & Captioning" src="./images/optionA11Y_iOS12_closedCaptions.png" />
</div></div></br>
<a name="optionA11Y_grayScale"></a>
- **Greyscale** *(UIAccessibilityIsGrayscaleEnabled)* : makes the display more readable for color blind people.

<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item">
        <a class="nav-link active"
           data-toggle="tab" 
           href="#GrayScale-iOS13"
           role="tab" 
           aria-selected="true">iOS 13</a>
    </li>
    <li class="nav-item">
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
<img style="max-width: 1000px; height: auto;" alt="Access illustration via Settings - Accessibility - Display & Text Size - Colour Filters - Colour Filters" src="./images/optionA11Y_iOS13_grayScale.png" />
</div>
<div class="tab-pane" id="GrayScale-iOS12" role="tabpanel" >
<img style="max-width: 950px; height: auto;" alt="Access illustration via Settings - General - Accessibility - Display Accomodations - Colour Filters - Colour Filters" src="./images/optionA11Y_iOS12_grayScale.png" />
</div></div></br>
<a name="optionA11Y_guidedAccess"></a>
- **Guided Access** *(UIAccessibilityIsGuidedAccessEnabled)* : restricts use of a single application.

<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item">
        <a class="nav-link active"
           data-toggle="tab" 
           href="#GuidedAccess-iOS13"
           role="tab" 
           aria-selected="true">iOS 13</a>
    </li>
    <li class="nav-item">
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
<img style="max-width: 1000px; height: auto;" alt="Access illustration via Settings - Accessibility - Guided Access - Guided Access" src="./images/optionA11Y_iOS13_guidedAccess.png" />
</div>
<div class="tab-pane" id="GuidedAccess-iOS12" role="tabpanel" >
<img style="max-width: 950px; height: auto;" alt="Access illustration via Settings - General - Accessibility - Guided Access - Guided Access" src="./images/optionA11Y_iOS12_guidedAccess.png" />
</div></div></br>
<a name="optionA11Y_inverserLesCouleurs"></a>
- **Invert Colours** *(UIAccessibilityIsInvertColorsEnabled)* : reduces glare and eye strain thanks to a very helpful mode for visual impaired people.

<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item">
        <a class="nav-link active"
           data-toggle="tab" 
           href="#invertColors-iOS13"
           role="tab" 
           aria-selected="true">iOS 13</a>
    </li>
    <li class="nav-item">
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
<img style="max-width: 600px; height: auto;" alt="Access illustration via Settings - Accessibility - Display & Text Size - Smart Invert" src="./images/optionA11Y_iOS13_invertColors.png" />
</div>
<div class="tab-pane" id="invertColors-iOS12" role="tabpanel" >
<img style="max-width: 950px; height: auto;" alt="Access illustration via Settings - General - Accessibility - Display Accomodations - Invert Colours - Smart Invert" src="./images/optionA11Y_iOS12_invertColors.png" />
</div></div></br>
<a name="optionA11Y_audioEnMono"></a>
- **Mono Audio** *(UIAccessibilityIsMonoAudioEnabled)* : allows a complete hearing understanding with headset on without missing a word or a sound for people who are hard of hearing or deaf in one ear.

<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item">
        <a class="nav-link active"
           data-toggle="tab" 
           href="#AudioMono-iOS13"
           role="tab" 
           aria-selected="true">iOS 13</a>
    </li>
    <li class="nav-item">
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
<img style="max-width: 1000px; height: auto;" alt="Access illustration via Settings - Accessibility - Audio Visual - Mono Audio" src="./images/optionA11Y_iOS13_audioEnMono.png" />
</div>
<div class="tab-pane" id="AudioMono-iOS12" role="tabpanel" >
<img style="max-width: 590px; height: auto;" alt="Access illustration via Settings - General - Accessibility - Mono Audio" src="./images/optionA11Y_iOS12_audioEnMono.png" />
</div></div></br>
<a name="optionA11Y_limiteVisuel"></a>
- **Reduce Motion** *(UIAccessibilityIsReduceMotionEnabled)* : see the [WWDC 2018 video](./dev-ios-wwdc-18230.html#Motion)  for a detailed description.

<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item">
        <a class="nav-link active"
           data-toggle="tab" 
           href="#ReduceMotion-iOS13"
           role="tab" 
           aria-selected="true">iOS 13</a>
    </li>
    <li class="nav-item">
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
<img style="max-width: 1000px; height: auto;" alt="Access illustration via Settings - Accessibility - Motion - Reduce Motion" src="./images/optionA11Y_iOS13_reduceMotion.png" />
</div>
<div class="tab-pane" id="ReduceMotion-iOS12" role="tabpanel" >
<img style="max-width: 950px; height: auto;" alt="Access illustration via Settings - General - Accessibility - Reduce Motion" src="./images/optionA11Y_iOS12_reduceMotion.png" />
</div></div></br>
<a name="optionA11Y_reductionTransparence"></a>
- **Reduce Transparency** *(UIAccessibilityIsReduceTransparencyEnabled)* : see the [WWDC 2018 video](./dev-ios-wwdc-18230.html#TransparencyAndBlurring) for a detailed description.

<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item">
        <a class="nav-link active"
           data-toggle="tab" 
           href="#ReduceTransparency-iOS13"
           role="tab" 
           aria-selected="true">iOS 13</a>
    </li>
    <li class="nav-item">
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
<img style="max-width: 1000px; height: auto;" alt="Access illustration via Settings - Accessibility - Display & Text Size - Reduce Transparency" src="./images/optionA11Y_iOS13_reduceTransparency.png" />
</div>
<div class="tab-pane" id="ReduceTransparency-iOS12" role="tabpanel" >
<img style="max-width: 950px; height: auto;" alt="Access illustration via Settings - General - Accessibility - Reduce Transparency" src="./images/optionA11Y_iOS12_reduceTransparency.png" />
</div></div></br>
<a name="optionA11Y_secouerPourAnnuler"></a>
- **Shake to Undo** *(UIAccessibilityIsShakeToUndoEnabled)* : displays a menu to undo an action, preventing from holding backspace and watching all the letters disappear one by one for instance.

<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item">
        <a class="nav-link active"
           data-toggle="tab" 
           href="#ShakeToUndo-iOS13"
           role="tab" 
           aria-selected="true">iOS 13</a>
    </li>
    <li class="nav-item">
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
<img style="max-width: 1000px; height: auto;" alt="Access illustration via Settings - Accessibility - Touch - Shake to Undo" src="./images/optionA11Y_iOS13_shakeToUndo.png" />
</div>
<div class="tab-pane" id="ShakeToUndo-iOS12" role="tabpanel" >
<img style="max-width: 950px; height: auto;" alt="Access illustration via Settings - General - Accessibility - Shake to Undo" src="./images/optionA11Y_iOS12_shakeToUndo.png" />
</div></div></br>
<a name="optionA11Y_lecturePage"></a>
- **Speak Screen** *(UIAccessibilityIsSpeakScreenEnabled)* : launches the vocalization of the screen content.

<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item">
        <a class="nav-link active"
           data-toggle="tab" 
           href="#SpeakScreen-iOS13"
           role="tab" 
           aria-selected="true">iOS 13</a>
    </li>
    <li class="nav-item">
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
<img style="max-width: 1000px; height: auto;" alt="Access illustration via Settings - Accessibility - Spoken Content - Speak Screen" src="./images/optionA11Y_iOS13_speakScreen.png" />
</div>
<div class="tab-pane" id="SpeakScreen-iOS12" role="tabpanel" >
<img style="max-width: 950px; height: auto;" alt="Access illustration via Settings - General - Accessibility - Speak Screen" src="./images/optionA11Y_iOS12_speakScreen.png" />
</div></div></br>
<a name="optionA11Y_speakSelection"></a>
- **Speak Selection** *(UIAccessibilityIsSpeakSelectionEnabled)* : displays a menu that suggests to speak the selection that fired it.

<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item">
        <a class="nav-link active"
           data-toggle="tab" 
           href="#SpeakSelection-iOS13"
           role="tab" 
           aria-selected="true">iOS 13</a>
    </li>
    <li class="nav-item">
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
<img style="max-width: 1000px; height: auto;" alt="Access illustration via Settings - Accessibility - Spoken Content - Speak Selection" src="./images/optionA11Y_iOS13_speakSelection.png" />
</div>
<div class="tab-pane" id="SpeakSelection-iOS12" role="tabpanel" >
<img style="max-width: 950px; height: auto;" alt="Access illustration via Settings - General - Accessibility - Speak Selection" src="./images/optionA11Y_iOS12_speakSelection.png" />
</div></div></br>
<a name="optionA11Y_switchControl"></a>
- **Switch Control** *(UIAccessibilityIsSwitchControlRunning)* : activates the feature in `point scanning mode` or in `item scanning mode`.

<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item">
        <a class="nav-link active"
           data-toggle="tab" 
           href="#SwitchControl-iOS13"
           role="tab" 
           aria-selected="true">iOS 13</a>
    </li>
    <li class="nav-item">
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
<img style="max-width: 1000px; height: auto;" alt="Access illustration via Settings - Accessibility - Switch Control - Switch Control" src="./images/optionA11Y_iOS13_switchControl.png" />
</div>
<div class="tab-pane" id="SwitchControl-iOS12" role="tabpanel" >
<img style="max-width: 950px; height: auto;" alt="Access illustration via Settings - General - Accessibility - Switch Control" src="./images/optionA11Y_iOS12_switchControl.png" />
</div></div></br>
<a name="optionA11Y_voiceOver"></a>
- **VoiceOver** *(UIAccessibilityIsVoiceOverRunning)* : launches the screen reader.

<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item">
        <a class="nav-link active"
           data-toggle="tab" 
           href="#VoiceOver-iOS13"
           role="tab" 
           aria-selected="true">iOS 13</a>
    </li>
    <li class="nav-item">
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
<img style="max-width: 1000px; height: auto;" alt="Access illustration via Settings - Accessibility - VoiceOver - VoiceOver" src="./images/optionA11Y_iOS13_voiceOver.png" />
</div>
<div class="tab-pane" id="VoiceOver-iOS12" role="tabpanel" >
<img style="max-width: 950px; height: auto;" alt="Access illustration via Settings - General - Accessibility - VoiceOver" src="./images/optionA11Y_iOS12_voiceOver.png" />
</div></div></br>
<a name="optionA11Y_autoPlayVideoPreviews"></a>
- **Auto-Play Video Previews** *(UIAccessibilityIsVideoAutoplayEnabled)* : see the [WWDC 2019 video](./dev-ios-wwdc-19000.html#VisualDesignAccessibility) for a detailed description of this **iOS 13 new feature**.
</br><img style="max-width: 375px; height: auto;" alt="Access illustration via Settings - Accessibility - Motion - Auto-play Video Previews" src="./images/iOSdev/wwdc19-244-TextStyles_6.png" />
</br></br></br>
<a name="optionA11Y_differentiateWithoutColour"></a>
- **Differentiate Without Colour** *(UIAccessibilityShouldDifferentiateWithoutColour)* : see the [WWDC 2019 video](./dev-ios-wwdc-19000.html#VisualDesignAccessibility) for a detailed description of this **iOS 13 new feature**.
</br><img style="max-width: 1000px; height: auto;" alt="Access illustration via Settings - Accessibility - Display & Text Size - Differentiate Without Colour" src="./images/optionA11Y_iOS13_differentiateWithoutColour.png" />
</br></br></br>
<a name="optionA11Y_onOffSwitchLabels"></a>
- **On/Off Labels** *(UIAccessibilityIsOnOffSwitchLabelsEnabled)* : once activated, this option whose **programmatic access is new in iOS 13** displays each button state.
</br><img style="max-width: 1000px; height: auto;" alt="Access illustration via Settings - Accessibility - Display & Text Size - On/Off Labels" src="./images/optionA11Y_iOS13_onOffSwitchLabels.png" />
</div>
<div class="tab-pane" id="a11yOptions-Check" role="tabpanel" >
Once activated, if the accessibility option has no result in the application running, it's **highly recommended** to keep oneself posted of the impacted options states so as to provide the best user experience.
</br>The full list of the accessibility options with their dedicated notification is located in the <a href="./dev-ios.html#accessibility-options" style="text-decoration: underline;">developer part</a> of this site.
</br></br>It may be particularly interesting to keep track of these options (de)activations with kind of indicators in order to have a better understanding of the users habits and to implement improvements accordingly.
</div> 
</div></br></br>

<!--  This file is part of a11y-guidelines | Our vision of mobile & web accessibility guidelines and best practices, with valid/invalid examples.
 Copyright (C) 2016  Orange SA
 See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). -->