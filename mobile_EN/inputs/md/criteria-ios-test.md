# How to test the iOS accessibility

<script>$(document).ready(function () {
    setBreadcrumb([{"label":"iOS", "url": "./mobile-ios.html"},
                   {"label":"Tests"}
	]);
    addSubMenu([
        {"label":"Design criteria","url":"criteria-ios.html"}, 
        {"label":"Developers guide","url":"dev-ios.html"},
        {"label":"VoiceOver","url":"voiceover.html"},
        {"label":"WWDC","url":"dev-ios-wwdc.html"},
        {"label":"Tests","url":"criteria-ios-test.html", "expanded": true}
    ]);	
});</script>

<span data-menuitem="mobile-ios"></span>

**ALL** the project members should know the iOS accessibility features introduced in this site to make a perfect link between the app implementations and the users needs.
</br>Each one of these features should be seen as an important **human-made** element for the user comfort and not just a functional one.
</br>Whatever the design, implementation or testing area, **every decision** must be particularly **empathetic** to provide the best user experience.</br></br>
### Fundamental prerequisites
- Spend as much time as necessary to perfectly control the gestures ([VoiceOver](./voiceover.html), Switch Control). 
- Watch the examples provided by the [WWDC videos](./dev-ios-wwdc.html).
- Assimilate the [design criteria](./criteria-ios.html) to be sure that you're following the appropriate working path.
- Create as many blank projects as needed to test a dedicated feature and be sure that it's working before introducing inside the final app coding global environment.
- Be sure that third-party elements or web contents that may be parts of the application are themselves already perfectly accessible.</br></br>
### Working environment
Four different groups may be described as parts of every project:
- The **person in charge of defining the priorities of every functionality** must know the app users needs so as to accurately define the functionalities acceptance criteria and be able to check himself the desired achievement.
- The **DESIGN** team must put itself in the user's shoes to provide recommendations as accurate as possible according to the project demands upstream.
- The **DEVELOPMENT** team must rely heavily on the [WWDC videos](./dev-ios-wwdc.html) and the [iOS developers guide](./dev-ios.html) in order to find the most appropriate solutions.
- The **TEST** team must perfectly control the [dedicated gesture](./voiceover.html) and understand every iOS accessibility feature to optimally perform every test before starting production.

Whatever the way you want to work *(SCRUM, ...)*, all the functions described above must be present in a project.
</br></br>Foresee two ways of evaluation in order to make sure that the iOS accessibility recommendations have been well implemented:
- [**FUNCTIONAL**](#FunctionalMode): the **user navigation** among the screens must be hassle-free and provide all visual information without questions to be asked: **simple**, **clear** and **fluid**.
- [**TECHNICAL**](#TechnicalMode): the technical compliance of some elements must be checked *(colours contrast, icons size...)* while creating code tests *(<abbr>TDD</abbr>, <abbr>UI</abbr>)*. Sometimes, this mode also confirms and solves any functional problems.
</br>
<a name="FunctionalMode"></a>
## Functional review
There's no need in having technical knowledge for this part but (de)activate and use iOS accessibility features.
</br>Besides the [design criteria](./criteria-ios.html) to be followed, it's crucial to be sure that the [accessibility options](./criteria-ios.html#accessibility-options) activated by a user are operational in the whole application.
</br></br>Few important criteria to be imperatively tested are introduced hereunder:
- **Screen orientation**: it's highly recommended to implement the landscape and portrait modes. When implemented, this [functionality](./criteria-ios.html#screen-orientation) must be checked for each page of the application.
- **Reduce motion** : because visual movements may give rise to problems *(nausea...)* for some people, it's imperative to check the [user settings dealing with animations](./criteria-ios.html#optionA11Y_limiteVisuel).
- **Reduce transparency** : blurring effects may give rise to sighting difficulties for people having visual impairments. These effects can be weakened by the system thanks to an [accessibility option](./criteria-ios.html#optionA11Y_reductionTransparence) that must be checked in every page it occurs.
- **Dark mode** : the result of this *iOS 13 new feature* must be checked out to ensure the conformity of the different color contrasts: the [increase contrast](./criteria-ios.html#optionA11Y_contraste) accessibility option must also be verified in this context.

Besides these basic criteria, there are also fundamental requirements for an accessible application:
- [Dynamic Type](#DynamicType)
- [VoiceOver](#VoiceOver)
- [Switch Control](#SwitchControl)
</br>
<a name="DynamicType"></a>
### Dynamic Type
To understand how this feature works, it's highly recommended to watch the example in this [WWDC 2017 video](./dev-ios-wwdc-17245.html#Demo) that is detailed in the WWDC part of this site.
</br>Tests should be made with at least three devices having different screen sizes (**iPhone5SE**, **iPhoneX** and **iPhone8Plus** for instance) in order to **imperatively check every page**.
</br></br>Three zoom levels must be particularly scanned to determine the visual behavior at extremes:
- Lowest threshold **WITHOUT** accessibility.
- Highest threshold **WITHOUT** accessibility.
- Highest threshold **WITH** accessibility.

<img style="max-width: 900px; height: auto;" alt="" src="./images/ios-test-DynamicType.png" />
</br>The following points must be thoroughly checked:
- The **truncation '...' mustn't be used** and should be replaced by a hyphen at the end of the sentence.
</br><img style="max-width: 200px; height: auto;" alt="" src="./images/ios-test-DynamicType_2.png" />
- **Illustration and icon sizes must be adapted to the magnification**: use of the [Large Content Viewer](./dev-ios-wwdc-19261.html) feature, a two fingers pinch implementation to avoid the `Zoom` native feature trigger or only a [graphical element magnification](./dev-ios.html#graphical-elements-size) are possible solutions according to the context.
- **Change the text sizes in every screen** to ensure that all the elements perfectly meet the graphical contraints.
- As soon as a **corrected fault** is effective, it **must be checked for every device used for tests** to be sure of its definitive rectification.

All these **tests are quite long to be performed** because every screen is impacted with different devices including the changing of the text size inside each one of them.
</br></br>
<a name="VoiceOver"></a>
### VoiceOver
The iOS native screen reader activation drastically changes the visual behavior obtained with the common gestures, that's why its [control](./voiceover.html) takes a little while.
</br>It's **highly recommended** to know the basic gestures before activating this feature in the device user settings.

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
<img alt="" style="max-width: 950px; height: auto; " src="./images/ios-test-voiceover_iOS13.png" />
</div>
<div class="tab-pane" 
     id="VoiceOver-iOS12" 
     role="tabpanel" >
<img style="max-width: 900px; height: auto;" alt="" src="./images/ios-test-voiceover_iOS12.png" />
</div></div>

</br>Don't believe that every element must be absolutely vocalized one after another : that's definitely the proper way to get a VoiceOver implementation that is anything but effective !
</br></br>Keep in mind that the visual **information** is assimilated very quickly while the screen reader provides **sequentially** this information at the speed of successive selections of elements: a **huge effort** is necessary to get a synoptic vision of the screen and really understand what's offered.
</br></br>To better deal with this situation, it's recommended to keep on navigating with the [curtain screen](./voiceover.html#CurtainScreen) mode that's particularly very useful for the tests of an unknown application because  no human-made memorized information from a previous browsing will be provided.
</br></br>Besides the [design criteria](./criteria-ios.html) to be followed, **four main principles** must be kept in mind when testing:
- The visual information must be vocally transcribed.
- The user must always know where he is and where he can go.
- The user's navigation must he hassle-free, clear and fluid.
- The number of element selections must be as small as possible.

All these **tests are quite long to be performed** and they require a strong empathy to suggest constructive criticism  of the vocally VoiceOver information.
</br></br>Besides, **if the screen reader isn't implemented yet**, it's essential to **inform the user** about this situation once the [application icon is selected](./dev-ios.html#vocalized-application-name) so as to avoid disappointement and possible frustration.
</br></br>
<a name="SwitchControl"></a>
### Switch Control
The accessibility [Switch Control](https://support.apple.com/en-en/HT201370) feature revolves around the **point mode** and the **item mode**.
</br><img style="max-width: 600px; height: auto;" alt="" src="./images/ios-test-SwitchControl.png" />
</br>The element selection using the item mode works fine when the user interface isn't too complicated and uses native elements.
</br></br>However, this mode may not be helpful according to the rationale behind some specific use cases and then needs to be customized.
</br>In this case, the feedback information provided by the tests must be as helpful as getting the best user experience.
</br></br>*Note*: this feature can be (de)activated in the device user settings.

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
<img alt="" style="max-width: 950px; height: auto; " src="./images/ios-test-SwitchControl_iOS13.png" />
</div>
<div class="tab-pane" 
     id="SwitchControl-iOS12" 
     role="tabpanel" >
<img style="max-width: 900px; height: auto;" alt="" src="./images/ios-test-SwitchControl_iOS12.png" />
</div></div>

</br>
<a name="TechnicalMode"></a>
## Technical review
The use of this section requires more or less special expertise according to what must be checked.
</br></br>
### Colour contrast
The [colour contrast](./criteria-ios.html#colours) is certainly the easiest point to be checked thanks to softwares *(Colour Contrast Analyzer...)* or web sites *(WebAIM...)*.
</br>Since Xcode 11, the Accessibility Inspector tool provides a specific [Color Contrast Calculator](./dev-ios-wwdc-19000.html#ColorContrast) feature that reaches the same purpose.
</br></br>
### Code review
The Xcode <abbr>IDE</abbr> contains a very interesting tool entitled **Accessibility Inspector**.
</br>Its goal and way of being used won't be developed here because they're perfectly explained in these detailed videos [`Auditing Your Apps for Accessibility`](./dev-ios-wwdc-16407.html) and [`Accessibility Inspector`](./dev-ios-wwdc-19000.html#AccessibilityInspector) that are highly recommended to be watched.
</br></br>
### Code testing
Many kinds of tests *(<abbr>TDD</abbr>*, *<abbr>UI</abbr>)* may be set up by the developers in order to maintain a stable and reliable code over time.
</br>These good practice ensure functional continuity by being informed of any deviation introduced in subsequent developments.
</br></br>

<!--  This file is part of a11y-guidelines | Our vision of mobile & web accessibility guidelines and best practices, with valid/invalid examples.
 Copyright (C) 2016  Orange SA
 See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). -->