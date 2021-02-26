---
title: "How to test the iOS accessibility"
displayToc: true
---

# How to test the iOS accessibility

**ALL** the project members should know the iOS accessibility features introduced in this site to make a perfect link between the app implementations and the users needs.

Each one of these features should be seen as an important **human-made** element for the user comfort and not just a functional one.

Whatever the design, implementation or testing area, **every decision** must be particularly **empathetic** to provide the best user experience.
<br><br>
## Fundamental prerequisites

1. Spend as much time as necessary to perfectly control the gestures ([VoiceOver](../voiceover/), Switch Control).

2. Watch the examples provided by the [WWDC videos](../wwdc/).

3. Assimilate the [design criteria](../design/) to be sure that you're following the appropriate working path.

4. Create as many blank projects as needed to test a dedicated feature and be sure that it's working before introducing inside the final app coding global environment.

5. Be sure that third-party elements or web contents that may be parts of the application are themselves already perfectly accessible.
<br><br>
## Working environment
Four different groups may be described as parts of every project:

- The **person in charge of defining the priorities of every functionality** must know the app users needs so as to accurately **define the functionalities acceptance criteria** and be able to **check himself the desired achievement**.

- The **DESIGN** team must put itself in the user's shoes to provide recommendations as accurate as possible according to the project demands upstream.

- The **DEVELOPMENT** team must rely heavily on the [WWDC videos](../wwdc/) and the [iOS developers guide](../development/) in order to **find the most appropriate solutions**.

- The **TEST** team must perfectly control the [dedicated gesture](../voiceover/) and understand every iOS accessibility feature to **optimally perform every test** before starting production.

Whatever the way you want to work (SCRUM...), all the functions described above must be present in a project.

Foresee two ways of evaluation in order to make sure that the iOS accessibility recommendations have been well implemented:

- [**FUNCTIONAL**](#functional-review): the **user navigation** among the screens must be hassle-free and provide all visual information without questions to be asked: **simple**, **clear** and **fluid**.

- [**TECHNICAL**](#technical-review): the technical compliance of some elements must be checked (colours contrast, icons size...) while creating code tests.
Sometimes, this mode also confirms and solves any functional problems.
<br>
## Functional review
There's no need in having technical knowledge for this part but (de)activate and use iOS accessibility features.

Besides the [design criteria](../design/) to be followed, it's crucial to be sure that the [accessibility options](../design#accessibility-options) activated by a user are operational in the whole application.

Few important criteria to be imperatively tested are introduced hereunder:

- **Screen orientation**: it's highly recommended to implement the landscape and portrait modes.
When implemented, this [functionality](../design#screen-orientation) must be checked for each page of the application.

- **Reduce motion**: because visual movements may give rise to problems (nausea...) for some people, it's imperative to check the [user settings dealing with animations](../wwdc/2018/230/#motion-0848).

- **Reduce transparency**: blurring effects may give rise to sighting difficulties for people having visual impairments.
These effects can be weakened by the system thanks to an [accessibility option](../wwdc/2018/230/#transparency-and-blurring-0307) that must be checked in every page it occurs.

- **Dark mode**: the result of this *iOS 13 feature* must be checked out to ensure the conformity of the different color contrasts: the [increase contrast](../design/#accessibility-options) accessibility option must also be verified in this context.

<br>

Besides these basic criteria, there are also fundamental requirements for an accessible application:

1. [Dynamic Type](#dynamic-type)

2. [VoiceOver](#voiceover)

3. [Switch Control](#switch-control)
<br><br>
### Dynamic Type
To understand how this feature works, it's highly recommended to watch the example in this [WWDC 2017 video](../wwdc/2017/245/#example-2432) that is detailed in the WWDC part of this site.

Tests should be made with devices having different screen sizes (iPhone5SE, iPhoneX and iPhone8Plus for instance) in order to **imperatively check every page**.

Three zoom levels must be particularly scanned to determine the visual behavior at extremes:

- Lowest threshold **WITHOUT** accessibility.

- Highest threshold **WITHOUT** accessibility.

- Highest threshold **WITH** accessibility.

<br>

![](../../images/ios-test-DynamicType.png)
The following points must be thoroughly checked:

- The **truncation '...' mustn't be used** and should be replaced by a hyphen at the end of the sentence.

![](../../images/ios-test-DynamicType_2.png)

- **Illustration and icon sizes must be adapted to the magnification**: use of the [Large Content Viewer](../wwdc/2019/261/) feature, a two fingers pinch implementation to avoid the `Zoom` native feature trigger or only a [graphical element magnification](../development/#graphical-elements-size) are possible solutions according to the context.

- **Change the text sizes in every screen** to ensure that all the elements perfectly meet the graphical contraints.

- As soon as a **corrected fault** is effective, it **must be checked for every device used for tests** to be sure of its definitive rectification.

All these **tests are quite long to be performed** because every screen is impacted with different devices including the changing of the text size inside each one of them.

<a href="https://developer.apple.com/videos/play/wwdc2020/10020/?time=562">
    
![Access to the WWDC video that explains the importance of the dynamic type feature as a major step in the project process](../../images/ios-test-DynamicTypeWWDC.png)
<br><br>
### VoiceOver

The iOS native screen reader activation drastically changes the visual behavior obtained with the common gestures, that's why its [control](../voiceover/) takes a little while.

It's **highly recommended** to know the basic gestures before activating this feature in the device user settings.

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
    
![](../../images/ios-test-VO_iOS13.png)
</div>
<div class="tab-pane" 
     id="VoiceOver-iOS12" 
     role="tabpanel" >
    
![](../../images/ios-test-VO_iOS12.png)
</div></div>

<br>Don't believe that every element must be absolutely vocalized one after another: that's definitely the proper way to get a VoiceOver implementation that is anything but effective !

Keep in mind that the visual **information** is assimilated very quickly while the screen reader provides **sequentially** this information at the speed of successive selections of elements: a **huge effort** is necessary to get a synoptic vision of the screen and really understand what's offered.

To better deal with this situation, it's recommended to keep on navigating with the [curtain screen](../voiceover#CurtainScreen) mode that's particularly very useful for the tests of an unknown application because  no human-made memorized information from a previous browsing will be provided.

Besides the [design criteria](../design/) to be followed, **four main principles** must be kept in mind when testing:

1. The visual information must be vocally transcribed.

2. The user must always know where he is and where he can go.

3. The user's navigation must he hassle-free, clear and fluid.

4. The number of element selections must be as small as possible.

All these **tests are quite long to be performed** and they require a strong empathy to suggest constructive criticism  of the vocally VoiceOver information.

Morevover, **if the screen reader isn't implemented yet**, it's essential to **inform the user** about this situation once the [application icon is selected](../development/#vocalized-application-name) so as to avoid disappointement and possible frustration.
<br><br>
### Switch Control

The accessibility [Switch Control](https://support.apple.com/en-us/HT201370) feature revolves around the **point mode** and the **item mode**.

![](../../images/ios-test-SwitchControl.png)

The element selection using the item mode works fine when the user interface isn't too complicated and uses native elements.

However, this mode may not be helpful according to the rationale behind some specific use cases and then needs to be customized.

In this case, the feedback information provided by the tests must be as helpful as getting the best user experience.

Note: this feature can be (de)activated in the device user settings.

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
    
![](../../images/ios-test-SwitchControl_iOS13.png)
</div>
<div class="tab-pane" 
     id="SwitchControl-iOS12" 
     role="tabpanel" >

![](../../images/ios-test-SwitchControl_iOS12.png)
</div></div>

<br>

## Technical review
The use of this section requires more or less special expertise according to what must be checked.
<br>
### Colour contrast

The [colour contrast](../design#colours) is certainly the easiest point to be checked thanks to softwares (Colour Contrast Analyzer...).

Since Xcode 11, the Accessibility Inspector tool provides a specific [Color Contrast Calculator](../wwdc/2019/#color-contrast-0626) feature that reaches the same purpose.
<br><br>
### Code review

The Xcode <abbr>IDE</abbr> contains a very interesting tool entitled **Accessibility Inspector**.

Its goal and way of being used won't be developed here because they're perfectly explained in these detailed videos [`Auditing Your Apps for Accessibility`](../wwdc/2016/407/) and [`Accessibility Inspector`](../wwdc/2019/#accessibility-inspector) that are highly recommended to be watched.
<br><br>
### Code testing

Many kinds of tests (unit tests...) may be set up by the developers in order to maintain a stable and reliable code over time.

These good practice ensure functional continuity by being informed of any deviation introduced in subsequent developments.
<br><br>
