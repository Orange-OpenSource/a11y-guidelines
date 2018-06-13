# WWDC 2016 : Auditing Your Apps for Accessibility 

<script>$(document).ready(function () {
    setBreadcrumb([{"label":"Developer guide", "url": "./dev-mobile.html"},
                   {"label":"iOS WWDC", "url": "./dev-ios-wwdc.html"},
                   {"label":"2016 - Auditing Your Apps for Accessibility"}
	]);
    addSubMenu([
        {"label":"Android guide","url":"dev-android.html"}, 
        {"label":"iOS guide","url":"dev-mobile.html"},
        {"label":"iOS WWDC","url":"dev-ios-wwdc.html"}
    ]);
});</script>

<span data-menuitem="dev-mobile"></span>

This video available on the **official Apple website** ([session 407](https://developer.apple.com/videos/play/wwdc2016/407/)) aims at defining and using the `Accessibility Inspector` tool of Xcode, based on good practice implementation.
</br><img style="max-width: 200px; height: auto;" alt="" src="./images/iOSdev/wwdc16-logo.png" />
<img style="max-width: 700px; height: auto;" alt="" src="./images/iOSdev/wwdc16-407.png" />
</br></br>Various contents and their video timelapse are indicated hereunder :
- [Accessibility Inspector](#AccessibilityInspector) (09:38)
- [Audit](#Audit) (11:21)
- [Inspection](#Inspection) (20:30)
- [Settings](#Settings) (28:33)

Thereafter, the selection of a title will give rise to the video playback on the Apple website directly at the proper moment.

<a name="AccessibilityInspector"></a>
### [Accessibility Inspector (09:38)](https://developer.apple.com/videos/play/wwdc2016/407/?time=578)
Overview of the tool pointing out the themes to be developed : audit, inspection and settings.
</br><img style="max-width: 1000px; height: auto;" alt="" src="./images/iOSdev/wwdc16-407-AccessibilityInspector.png" />

<a name="Audit"></a>
### [Audit (11:21)](https://developer.apple.com/videos/play/wwdc2016/407/?time=681)
This part contains a demo [(12:22)](https://developer.apple.com/videos/play/wwdc2016/407/?time=742) that highlights the way to find out a solution for the problem detected by the tool [(14:24)](https://developer.apple.com/videos/play/wwdc2016/407/?time=864) while providing a bug report [(17:07)](https://developer.apple.com/videos/play/wwdc2016/407/?time=1027).
</br><img style="max-width: 600px; height: auto;" alt="" src="./images/iOSdev/wwdc16-407-Audit.png" />
</br>A complementary **manual audit** is also **mandatory** to avoid bypassing some kind of hidden problems [(18:55)](https://developer.apple.com/videos/play/wwdc2016/407/?time=1135).

<a name="Inspection"></a>
### [Inspection (20:30)](https://developer.apple.com/videos/play/wwdc2016/407/?time=1230)
This feature explanation is build on an example [(21:58)](https://developer.apple.com/videos/play/wwdc2016/407/?time=1318) that points out possible kinds of problems in an app like :
- Inappropriate sequencing of elements during the navigation. [(23:11)](https://developer.apple.com/videos/play/wwdc2016/407/?time=1391)
- Abstruse description of an element. [(23:34)](https://developer.apple.com/videos/play/wwdc2016/407/?time=1414)
- Improper action of an element. [(24:02)](https://developer.apple.com/videos/play/wwdc2016/407/?time=1442)

The presentation of the view hierarchy of this feature [(24:40)](https://developer.apple.com/videos/play/wwdc2016/407/?time=1480) comes along with an important point dealing with CALayer elements that aren't taken into account by VoiceOver.
</br><img style="max-width: 600px; height: auto;" alt="" src="./images/iOSdev/wwdc16-407-Inspection.png" />

<a name="Settings"></a>
### [Settings (28:33)](https://developer.apple.com/videos/play/wwdc2016/407/?time=1713)
Last but not least, this feature (highlighted thanks to a demo - [30:25](https://developer.apple.com/videos/play/wwdc2016/407/?time=1825)) avoids switching back and forth between changing some accessibility settings and verifying the result on the app.
</br><img style="max-width: 600px; height: auto;" alt="" src="./images/iOSdev/wwdc16-407-Settings.png" />

<!--  This file is part of a11y-guidelines | Our vision of mobile & web accessibility guidelines and best practices, with valid/invalid examples.
 Copyright (C) 2016  Orange SA
 See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). -->