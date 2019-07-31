# WWDC 2018 : Making iOS talk with AVSpeechSynthesizer

<script>$(document).ready(function () {
    setBreadcrumb([{"label":"iOS","url":"mobile-ios.html"},
                   {"label":"WWDC","url":"dev-ios-wwdc.html"},
                   {"label":"2018 - AVSpeechSynthesizer"}
	]);
    addSubMenu([
        {"label":"Design criteria","url":"criteria-ios.html"}, 
        {"label":"Developers guide","url":"dev-ios.html"},
        {"label":"VoiceOver","url":"voiceover.html"},
        {"label":"WWDC","url":"dev-ios-wwdc.html"},
        {"label":"Tests","url":"criteria-ios-test.html"}
    ]);
});</script>

<span data-menuitem="mobile-ios"></span>

This video available on the **official Apple website** ([session 236](https://developer.apple.com/videos/play/wwdc2018/236/)) aims at highlighting the essential elements to be implemented in order to **use a synthesized speech thanks to AVSpeechSynthesizer**.
</br><img style="max-width: 466px; height: auto;" alt="" src="./images/iOSdev/wwdc18-236.png" />
</br></br>Various contents and their video timelapse are indicated hereunder:

- [Uses](#Uses) (00:48)
- [Basics](#Basics) (02:03)
- [AVSpeechSynthesizerDelegate](#AVSpeechSynthesizerDelegate) (03:20)
- [Demo](#Demo) (04:11)
- [Choosing the right voice](#TheRightVoice) (04:31)
- [Speech rate](#SpeechRate) (05:32)
- [Pitch and volume](#PitchAndVolume) (06:15)
- [Phonetics](#IPA) (06:54)

Thereafter, the selection of a title will give rise to the video playback on the Apple website directly at the proper moment.
</br></br>
<a name="Uses"></a>
### [Uses (00:48)](https://developer.apple.com/videos/play/wwdc2018/236/?time=48)
The wide range of possible use cases offered by this feature are introduced in this section.
</br></br>
<a name="Basics"></a>
### [Basics (02:03)](https://developer.apple.com/videos/play/wwdc2018/236/?time=123)
Using a synthesized speech first implies a **`AVSpeechSynthesizer` instance creation** that must be retained until the speech is done.
</br><img style="max-width: 400px; height: auto;" alt="" src="./images/iOSdev/wwdc18-236-Basics_1.png" />
</br>Then **create an utterance** that must be provided to the previous instance.
</br><img style="max-width: 500px; height: auto;" alt="" src="./images/iOSdev/wwdc18-236-Basics_2.png" />
</br>In this case, an audio session is automatically activated and may be used together with the speech synthesis.
</br><img style="max-width: 850px; height: auto;" alt="" src="./images/iOSdev/wwdc18-236-Basics_3.png" />
</br>This session must be explicitly deactivated after speech is done.
</br></br>
<a name="AVSpeechSynthesizerDelegate"></a>
### [AVSpeechSynthesizerDelegate (03:20)](https://developer.apple.com/videos/play/wwdc2018/236/?time=200)
This protocol encompasses many **optional methods that handle speech synthesis events** :

- Pauses and resumes.
- Starts and ends of the `AVSpeechUtterance ` instances.
- Spoken character range.
</br><img style="max-width: 900px; height: auto;" alt="" src="./images/iOSdev/wwdc18-236-AVSpeechSynthesizerDelegate.png" />
</br></br>
<a name="Demo"></a>
### [Demo (04:11)](https://developer.apple.com/videos/play/wwdc2018/236/?time=251)
Simple example of a speech synthesis highlighted thanks to the `AVSpeechSynthesizerDelegate` protocol methods.
</br><img style="max-width: 230px; height: auto;" alt="" src="./images/iOSdev/wwdc18-236-Demo.png" />
</br></br>
<a name="TheRightVoice"></a>
### [Choosing the right voice (04:31)](https://developer.apple.com/videos/play/wwdc2018/236/?time=271)
The default voice is the built-in voice of the device supported language.
</br><img style="max-width: 1000px; height: auto;" alt="" src="./images/iOSdev/wwdc18-236-TheRightVoice_1.png" />
</br>However, it's still possible to select another voice specifying the desired language or using an identifier inside an array of speech voices that have been downloaded.
</br><img style="max-width: 800px; height: auto;" alt="" src="./images/iOSdev/wwdc18-236-TheRightVoice_2.png" />
</br></br>
<a name="SpeechRate"></a>
### [Speech rate (05:32)](https://developer.apple.com/videos/play/wwdc2018/236/?time=332)
The speech rate can be changed thanks to the rate property going from 0 to 1.
</br><img style="max-width: 530px; height: auto;" alt="" src="./images/iOSdev/wwdc18-236-SpeechRate.png" />
</br></br>
<a name="PitchAndVolume"></a>
### [Pitch and volume (06:15)](https://developer.apple.com/videos/play/wwdc2018/236/?time=375)
The pitch tone and the speech volume can be easily modified without affecting the system volume.
</br><img style="max-width: 720px; height: auto;" alt="" src="./images/iOSdev/wwdc18-236-PitchAndVolume.png" />
</br></br>
<a name="IPA"></a>
### [Phonetics (06:54)](https://developer.apple.com/videos/play/wwdc2018/236/?time=414)
The <abbr>IPA</abbr> can be used with **Attributed Strings** in order to customize how specialized names, words or sentences are pronounced.
</br><img style="max-width: 800px; height: auto;" alt="" src="./images/iOSdev/wwdc18-236-IPA.png" />
</br>Attributed strings may also be used to specify a different language for a part of a sentence for instance.
</br></br>


<!--  This file is part of a11y-guidelines | Our vision of mobile & web accessibility guidelines and best practices, with valid/invalid examples.
 Copyright (C) 2016  Orange SA
 See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). -->