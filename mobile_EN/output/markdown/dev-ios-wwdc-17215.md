# WWDC 2017 : What's New in Accessibility

<script>$(document).ready(function () {
    setBreadcrumb([{"label":"Developer guide", "url": "./dev-mobile.html"},
                   {"label":"iOS WWDC", "url": "./dev-ios-wwdc.html"},
                   {"label":"2017 - What's New in Accessibility"}
	]);
    addSubMenu([
        {"label":"Android guide","url":"dev-android.html"}, 
        {"label":"iOS guide","url":"dev-mobile.html"},
        {"label":"iOS WWDC","url":"dev-ios-wwdc.html"}
    ]);
});</script>

<span data-menuitem="dev-mobile"></span>

This video available on the **official Apple website** ([session 215](https://developer.apple.com/videos/play/wwdc2017/215/)) points out the main iOS11 accessibility features.
</br><img style="max-width: 200px; height: auto;" alt="" src="./images/iOSdev/wwdc17-logo.png" />
<img style="max-width: 700px; height: auto;" alt="" src="./images/iOSdev/wwdc17-215.png" />
</br></br>Various contents and their video timelapse are indicated hereunder :
- [Text detection in image](#ImageTextDetection) (07:07)
- [Improved photo description](#ImprovedPhotoDescription) (08:01)
- [Type to SIRI](#TypeToSIRI) (11:37)
- [Accessibility Inspector](#AccessibilityInspector) (15:35)
- [UIAccessibilityProtocol](#UIAccessibilityProtocol) (21:14)
- [Attributed Accessibility Properties](#AttributedProperties) (26:07)
- [Accessibility Container Type](#AccessibilityContainer) (27:20)
- [Custom actions](#CustomActions) (35:43)
- [Default activation](#DefaultActivation) (37:38)
- [Adjustable](#AdjustableValues) (38:22)
- [Pass through](#PassThrough) (39:40)
- [Custom scrolling](#CustomScrolling) (41:02)
- [Drag & Drop](#DragAndDrop) (42:54)

</br>During this presentation, the following solutions for accessibility development pitfalls are suggested thanks to a simple application ([take a look at it](https://developer.apple.com/videos/play/wwdc2017/215/?time=1007)) :
- How to define an (in)accessible element ? [(31:10)](https://developer.apple.com/videos/play/wwdc2017/215/?time=1870)
- How to fill the `label` and `value` properties? [(29:59)](https://developer.apple.com/videos/play/wwdc2017/215/?time=1799)
- How to gather several elements into a single one ? [(31:50)](https://developer.apple.com/videos/play/wwdc2017/215/?time=1910)

Thereafter, the selection of a title will give rise to the video playback directly at the proper moment.

<a name="ImageTextDetection"></a>
### [Text detection in image (07:07)](https://developer.apple.com/videos/play/wwdc2017/215/?time=427)
It's now possible to find out if some **text is incrusted inside an image**.
</br><img style="max-width: 1000px; height: auto;" alt="" src="./images/iOSdev/wwdc17-215-ImageTextDetection.png" />
</br>This basic detection that can be done thanks to a **simple tap with 3 fingers** will vocalize the text to someone who 
can't initially read it.

<a name="ImprovedPhotoDescription"></a>
### [Improved photo description (08:01)](https://developer.apple.com/videos/play/wwdc2017/215/?time=481)
The **vocalization of a photo description** is a new Voice Over feature that is fired thanks to a **simple tap with 3 fingers**.
</br><img style="max-width: 1000px; height: auto;" alt="" src="./images/iOSdev/wwdc17-215-ImprovedPhotoDescription.png" />
</br>A very simple detection of the context, the faces and their expressions is then vocalized to a visual impaired user.

<a name="TypeToSIRI"></a>
### [Type to SIRI (11:37)](https://developer.apple.com/videos/play/wwdc2017/215/?time=697)
Very usefull feature for people who **can't use SIRI vocally** or who are willing to **make some requests in a discreet way**.
</br>To enable this feature, go to `Accessibility` in the `Settings` to make the activation effective.
</br><img style="max-width: 600px; height: auto;" alt="" src="./images/iOSdev/wwdc17-215-TypeToSiri.png" />

<a name="AccessibilityInspector"></a>
### [Accessibility Inspector (15:35)](https://developer.apple.com/videos/play/wwdc2017/215/?time=935)
In this part, the Xcode accessibility inspector instrument is used to show basics about an accessibility app audit.
</br>Examples are provided without explaining in depth the tool itself to which a former Apple session ([2016 - 407](https://developer.apple.com/videos/play/wwdc2016/407/)) is dedicated.

<a name="UIAccessibilityProtocol"></a>
### [UIAccessibilityProtocol (21:14)](https://developer.apple.com/videos/play/wwdc2017/215/?time=1274)
Reminder on the `UIAccessibility` informal protocol fundamentals that will be used during the presentation.
</br><img style="max-width: 450px; height: auto;" alt="" src="./images/iOSdev/wwdc17-215-UIAccessibilityProtocol.png" />

<a name="AttributedProperties"></a>
### [Attributed Accessibility Properties (26:07)](https://developer.apple.com/videos/play/wwdc2017/215/?time=1567)
`NSAttributedString` can be used in order to customize the way to vocalize the `label`, `value` and `hint` accessibility properties.
</br><img style="max-width: 550px; height: auto;" alt="" src="./images/iOSdev/wwdc17-215-AttributedStrings.png" />
</br>Among the provided examples, one deals with the vocalization of a specific element in a foreign language.
</br><img style="max-width: 600px; height: auto;" alt="" src="./images/iOSdev/wwdc17-215-AttributedStringsExample.png" />
</br>All usable keys can be found on the [Apple official documentation](https://developer.apple.com/documentation/uikit/accessibility/uiaccessibility/speech_attributes_for_attributed_strings).

<a name="AccessibilityContainer"></a>
### [Accessibility Container Type (27:20)](https://developer.apple.com/videos/play/wwdc2017/215/?time=1640)
A new accessibility **typed container** is available in **iOS 11**.
</br><img style="max-width: 750px; height: auto;" alt="" src="./images/iOSdev/wwdc17-215-ContainerType.png" />
</br>The notion of container already existed in iOS but VoiceOver couldn't know the kind of container until now.

<a name="CustomActions"></a>
### [Custom actions (35:43)](https://developer.apple.com/videos/play/wwdc2017/215/?time=2143)
**Many different actions may be attributed** to an element thanks to a bunch of `accessibilityCustomAction`.
</br><img style="max-width: 600px; height: auto;" alt="" src="./images/iOSdev/wwdc17-215-CustomActions.png" />
</br>As soon as this element is selected, a **vertical swipe with one finger** will be proposing the choices of possible actions.
</br>The programming implementation of this feature is detailed in the [development part](./dev-ios.html#custom-actions).

<a name="DefaultActivation"></a>
### [Default activation (37:38)](https://developer.apple.com/videos/play/wwdc2017/215/?time=2258)
In order to limit or make them easier all the user VoiceOver handlings, it's possible to trigger appropriate actions as soon as an element is activated thanks to a double tap.
</br><img style="max-width: 750px; height: auto;" alt="" src="./images/iOSdev/wwdc17-215-DefaultAction.png" />

<a name="AdjustableValues"></a>
### [Adjustable (38:22)](https://developer.apple.com/videos/play/wwdc2017/215/?time=2302)
When you want to **change the value** provided by elements such as `slider` or `picker` in a **very fluid way**, two methods have to be implemented :
</br><img style="max-width: 470px; height: auto;" alt="" src="./images/iOSdev/wwdc17-215-AdjustableValues.png" />
</br>As soon as the view is selected, a **vertical swipe with one finger** increases (up) or shrinks (down) the value.
</br>The programming implementation of this feature is detailed in the [development part](./dev-ios.html#continuous-adjustable-values).

<a name="PassThrough"></a>
### [Pass through (39:40)](https://developer.apple.com/videos/play/wwdc2017/215/?time=2380)
If a VoiceOver user **double taps with one finger, holds it** and passes it through the panning gesture, a finer adjustment of a slider can be obtained as below :
</br><img style="max-width: 400px; height: auto;" alt="" src="./images/iOSdev/wwdc17-215-PassThrough_1.png" />
</br>The [accessibilityActivationPoint](./dev-ios.html#modify-the-focus-area-of-voiceover) attribute will allow a fine location in the panning gesture :
</br><img style="max-width: 500px; height: auto;" alt="" src="./images/iOSdev/wwdc17-215-PassThrough_2.png" />

<a name="CustomScrolling"></a>
### [Custom scrolling (41:02)](https://developer.apple.com/videos/play/wwdc2017/215/?time=2462)
The VoiceOver basic scrolling is based on a ** 3 fingers swipe** but it can be customized thanks to the `accessibilityScroll` method belonging to the `UIAccessibilityAction` protocol.
</br><img style="max-width: 750px; height: auto;" alt="" src="./images/iOSdev/wwdc17-215-CustomScrolling.png" />

<a name="DragAndDrop"></a>
### [Drag & Drop (42:54)](https://developer.apple.com/videos/play/wwdc2017/215/?time=2574)
This new feature isn't explained in depth but only its 2 overriding principles are presented : the drag sources and the drop points.
</br><img style="max-width: 750px; height: auto;" alt="" src="./images/iOSdev/wwdc17-215-DragAndDrop.png" />
</br>Their use is briefly described in an [example](https://developer.apple.com/videos/play/wwdc2017/215/?time=2729) at the end of the video.

<!--  This file is part of a11y-guidelines | Our vision of mobile & web accessibility guidelines and best practices, with valid/invalid examples.
 Copyright (C) 2016  Orange SA
 See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). -->