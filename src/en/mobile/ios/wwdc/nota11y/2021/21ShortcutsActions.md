---
title : "Shortcuts and actions"
abstract: "Discover the shortcuts app and its actions to significantly improve the user experience."

displayToc: true
---

# WWDC 2021: Shortcuts and actions
Find hereafter a detailed summary of four videos that belong to a [taxonomy&nbsp;of&nbsp;some&nbsp;WWDC&nbsp;footages](../../).

The original videos are available on the **official Apple website** ([session&nbsp;213](https://developer.apple.com/videos/play/wwdc2019/213/), [session&nbsp;805](https://developer.apple.com/videos/play/wwdc2019/805/), [session&nbsp;10084](https://developer.apple.com/videos/play/wwdc2020/10084/) and [session&nbsp;10283](https://developer.apple.com/videos/play/wwdc2021/10283/)).

![](../../../../../images/iOSdev/wwdc21-ShortAct_1.png)
"Parameters take Siri Shortcuts to the next level, enabling an interactive voice experience in Siri with follow-up questions, and allowing people to customize shortcuts in the Shortcuts app, now built into iOS. Walk through **setting up your shortcuts** to take advantage of parameters and learn how your shortcuts can **pass output to other actions** when creating multi-step shortcuts in the Shortcuts app."

"Shortcuts enable people to quickly and easily accomplish actions or get things done hands-free using Siri and the Shortcuts app. Join us for a tour of where shortcuts can appear, how you can **customize the experience**, and how your **app's shortcuts can be used with variables and actions from other apps**."

![](../../../../../images/iOSdev/wwdc21-ShortAct_2.png)
"Learn foolproof ways to surface your app's actions in the Shortcuts app — and help people quickly set up powerful, personalized shortcuts using system intelligence. We'll detail how to **configure your intents** to appear in the **new Automation Suggestions**, explore how the system surfaces your app's actions for people based on their everyday app usage, and show you how you can **make sure your app appears in all the right places within the Shortcuts app**."

"Actions are the **building blocks of shortcuts**. They allow people to take advantage of your app's functionality even when they're not looking at your app's interface. We'll show you how to **design actions** that are useful, easy-to-use, and can be incorporated into **powerful multi-step shortcuts**. You'll also explore enhancements around publishing and sharing shortcuts, ensuring that **people can access your app in the way they want across all of Apple's platforms**."

</br>Most of the illustrations are parts of the Apple presentations and may be available at the `Resources` section inside the `Overview` sheet of each video.
</br>
## Shortcuts
### Parameters
There are [three&nbsp;different&nbsp;manners](https://developer.apple.com/videos/play/wwdc2019/213/?time=35) for using the shortcut actions.
![](../../../../../images/iOSdev/wwdc21-ShortAct-ShortcutsParam_1.png)

New in `iOS`&nbsp;`13`, the **[conversational&nbsp;shortcuts](https://developer.apple.com/videos/play/wwdc2019/213/?time=121)** offer a new way for sharing between the app and the user.

![](../../../../../images/iOSdev/wwdc21-ShortAct-ShortcutsParam_2.png)

This **support for parameters** opens up [new&nbsp;horizons](https://developer.apple.com/videos/play/wwdc2019/213/?time=196) regarding the user experience.

![](../../../../../images/iOSdev/wwdc21-ShortAct-ShortcutsParam_3.png)
</br>

### Shortcuts&nbsp;app
<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item" role="presentation">
        <a class="nav-link active"
           data-bs-toggle="tab" 
           href="#ShortcutsAppOverview"
           id="ShortcutsAppOverview_tab"
           role="tab" 
           aria-selected="true">Overview</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#ShortcutsAppEditor"
           id="ShortcutsAppEditor_tab"
           role="tab" 
           aria-selected="false">Editor</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#ShortcutsAppSiri"
           id="ShortcutsAppSiri_tab"
           role="tab" 
           aria-selected="false">Add&nbsp;to&nbsp;Siri</a>
    </li>
    </ul>

<div class="tab-content">
<div class="tab-pane show active" id="ShortcutsAppOverview" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment." href="https://developer.apple.com/videos/play/wwdc2019/213/?time=287">🎬</a>

![](../../../../../images/iOSdev/wwdc21-ShortAct-ShortcutsAppOverview.png)
</div>

<div class="tab-pane" id="ShortcutsAppEditor" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment." href="https://developer.apple.com/videos/play/wwdc2019/213/?time=367">🎬</a>

A **natural language format**, an action **suggestions pane** and **action's outputs** possibly taken into account for later activity are mainly the `iOS`&nbsp;`13` new features in the `Shortcut editor`.

![](../../../../../images/iOSdev/wwdc21-ShortAct-ShortcutsAppEditor.png)
</div>

<div class="tab-pane" id="ShortcutsAppSiri" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment." href="https://developer.apple.com/videos/play/wwdc2019/213/?time=429">🎬</a>

Adding the **"Add&nbsp;to&nbsp;Siri" button** in an app gives rise to an easier and tailored user experience through the `iOS 13` new design.

![](../../../../../images/iOSdev/wwdc21-ShortAct-ShortcutsAppSiri.png)
</div>
</div>
</br></br>

### [Shortcut&nbsp;customization](https://developer.apple.com/videos/play/wwdc2019/213/?time=511)
The **Xcode Intent editor** is the tool to be used for promptly customizing a shortcut.

![](../../../../../images/iOSdev/wwdc21-ShortAct-ShortcutsCustom.png)
</br>

### [Parameter&nbsp;resolution](https://developer.apple.com/videos/play/wwdc2019/213/?time=756)
Not only does Xcode produce an **Intent handling protocol** for every defined Intent, but it also provides **Resolve methods** for each parameter that are marked as **configurable**.
![](../../../../../images/iOSdev/wwdc21-ShortAct-ShortcutsParamResol_2.png)

Understanding the resolution of the Intent parameters relies on its [life&nbsp;cycle&nbsp;explanation](https://developer.apple.com/videos/play/wwdc2019/213/?time=688) through its [`Resolve`&nbsp;`phase`](https://developer.apple.com/videos/play/wwdc2019/213/?time=811).

![](../../../../../images/iOSdev/wwdc21-ShortAct-ShortcutsParamResol_1.png)

The six possible **[Resolution&nbsp;Result&nbsp;types](https://developer.apple.com/videos/play/wwdc2019/213/?time=1000)** are to be checked with both **[Siri&nbsp;and&nbsp;the&nbsp;Shortcuts&nbsp;app](https://developer.apple.com/videos/play/wwdc2019/213/?time=1149)** so as to be sure of the final rendering.

![](../../../../../images/iOSdev/wwdc21-ShortAct-ShortcutsParamResol_3.png)

<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item" role="presentation">
        <a class="nav-link active"
           data-bs-toggle="tab" 
           href="#ShortcutsParamResol1"
           id="ShortcutsParamResol1_tab"
           role="tab" 
           aria-selected="true">1</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#ShortcutsParamResol2"
           id="ShortcutsParamResol2_tab"
           role="tab" 
           aria-selected="false">2</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#ShortcutsParamResol3"
           id="ShortcutsParamResol3_tab"
           role="tab" 
           aria-selected="false">3</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#ShortcutsParamResol4"
           id="ShortcutsParamResol4_tab"
           role="tab" 
           aria-selected="false">4</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#ShortcutsParamResol5"
           id="ShortcutsParamResol5_tab"
           role="tab" 
           aria-selected="false">5</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#ShortcutsParamResol6"
           id="ShortcutsParamResol6_tab"
           role="tab" 
           aria-selected="false">6</a>
    </li>
    </ul>

<div class="tab-content">
<div class="tab-pane show active" id="ShortcutsParamResol1" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment." href="https://developer.apple.com/videos/play/wwdc2019/213/?time=1025">🎬</a>

![](../../../../../images/iOSdev/wwdc21-ShortAct-ShortcutsParamResol1.png)
</div>

<div class="tab-pane" id="ShortcutsParamResol2" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment." href="https://developer.apple.com/videos/play/wwdc2019/213/?time=1050">🎬</a>

![](../../../../../images/iOSdev/wwdc21-ShortAct-ShortcutsParamResol2.png)
</div>

<div class="tab-pane" id="ShortcutsParamResol3" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment." href="https://developer.apple.com/videos/play/wwdc2019/213/?time=1073">🎬</a>

![](../../../../../images/iOSdev/wwdc21-ShortAct-ShortcutsParamResol3.png)
</div>

<div class="tab-pane" id="ShortcutsParamResol4" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment." href="https://developer.apple.com/videos/play/wwdc2019/213/?time=1107">🎬</a>

![](../../../../../images/iOSdev/wwdc21-ShortAct-ShortcutsParamResol4.png)
</div>

<div class="tab-pane" id="ShortcutsParamResol5" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment." href="https://developer.apple.com/videos/play/wwdc2019/213/?time=1131">🎬</a>

![](../../../../../images/iOSdev/wwdc21-ShortAct-ShortcutsParamResol5.png)
</div>

<div class="tab-pane" id="ShortcutsParamResol6" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment." href="https://developer.apple.com/videos/play/wwdc2019/213/?time=1138">🎬</a>

![](../../../../../images/iOSdev/wwdc21-ShortAct-ShortcutsParamResol6.png)
</div>
</div>
</br></br>

### Related&nbsp;parameters
In some cases, it may be interesting to properly handle parameters that have dependencies on each other so as to offer a wider range of shortcuts creation.
<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item" role="presentation">
        <a class="nav-link active"
           data-bs-toggle="tab" 
           href="#ShortcutsRelatedParamOverview"
           id="ShortcutsRelatedParamOverview_tab"
           role="tab" 
           aria-selected="true">Overview</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#ShortcutsRelatedParamXcode"
           id="ShortcutsRelatedParamXcode_tab"
           role="tab" 
           aria-selected="false">Xcode</a>
    </li>
    </ul>

<div class="tab-content">
<div class="tab-pane show active" id="ShortcutsRelatedParamOverview" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment." href="https://developer.apple.com/videos/play/wwdc2019/213/?time=1162">🎬</a>
    
The simplest implementation of a shortcut used by `Siri` for instance, involves no specific dependencies between the parameters.

![](../../../../../images/iOSdev/wwdc21-ShortAct-ShortcutsRelatedParamOverview_1.png)

[Customizing the shortcut](https://developer.apple.com/videos/play/wwdc2019/213/?time=1267) may be also an option for this use case with the `Shortcuts`&nbsp;`App`.

However, diving deeper into the possible choices for the user may lead to [conditional&nbsp;relations](https://developer.apple.com/videos/play/wwdc2019/213/?time=1328) between some of the parameters.

![](../../../../../images/iOSdev/wwdc21-ShortAct-ShortcutsRelatedParamOverview_2.png)
</div>

<div class="tab-pane" id="ShortcutsRelatedParamXcode" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment." href="https://developer.apple.com/videos/play/wwdc2019/213/?time=1670">🎬</a>

Few basic rules are to be followed in order to set up an appropriate shortcut including related parameters.

![](../../../../../images/iOSdev/wwdc21-ShortAct-ShortcutsRelatedParamXcode_1.png)

The first step consists in accurately defining the [parameter&nbsp;type](https://developer.apple.com/videos/play/wwdc2019/213/?time=1462) that will suggest different elements.
![](../../../../../images/iOSdev/wwdc21-ShortAct-ShortcutsRelatedParamXcode_4.png)

Next, the [relationship&nbsp;between&nbsp;parameters](https://developer.apple.com/videos/play/wwdc2019/213/?time=1581) is to be defined inside the **Parameters section**.
![](../../../../../images/iOSdev/wwdc21-ShortAct-ShortcutsRelatedParamXcode_3.png)

Finally, the **Shortcuts app section** that highlights the possible combinations of parameters  with a preview for the final rendering will permit a [complete&nbsp;definition](https://developer.apple.com/videos/play/wwdc2019/213/?time=1608) of the ultimate summaries.
![](../../../../../images/iOSdev/wwdc21-ShortAct-ShortcutsRelatedParamXcode_2.png)

</div>
</div>
</br></br>

When a group of values is to be exposed for **framing the user's choice**, it's necessary to tick the **Dynamic Options** in `Xcode` that will automatically produce two additional [intent&nbsp;handling&nbsp;protocol&nbsp;methods](https://developer.apple.com/videos/play/wwdc2019/213/?time=1705).

![](../../../../../images/iOSdev/wwdc21-ShortAct-ShortcutsRelatedParam_1.png)

Few elements need to be handled in `Xcode` to reach a [simple&nbsp;result](https://developer.apple.com/videos/play/wwdc2019/805/?time=484) with **chained shortcuts**.

![](../../../../../images/iOSdev/wwdc21-ShortAct-ShortcutsRelatedParam_3.png)

Regarding more complex examples, **[chaining&nbsp;shortcuts](https://developer.apple.com/videos/play/wwdc2019/213/?time=1786)** to each other may rely on creating one's own custom type for passing the appropriate information to the next action.

![](../../../../../images/iOSdev/wwdc21-ShortAct-ShortcutsRelatedParam_2.png)
</br>

### Build&nbsp;&&nbsp;Discover
Each component of a shortcut has a [dedicated&nbsp;purpose](https://developer.apple.com/videos/play/wwdc2019/805?time=74) that can be defined in the `Intent editor` of `Xcode`.
![](../../../../../images/iOSdev/wwdc21-ShortAct-ShortcutsBuild_1.png)
<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item" role="presentation">
        <a class="nav-link active"
           data-bs-toggle="tab" 
           href="#BuildSiri"
           id="BuildSiri_tab"
           role="tab" 
           aria-selected="true">Siri</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#BuildGallery"
           id="BuildGallery_tab"
           role="tab" 
           aria-selected="false">Gallery</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#BuildDonation"
           id="BuildDonation_tab"
           role="tab" 
           aria-selected="false">Donation</a>
    </li>
    </ul>

<div class="tab-content">
<div class="tab-pane show active" id="BuildSiri" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment." href="https://developer.apple.com/videos/play/wwdc2019/805?time=160">🎬</a>

The simplest way to create a shortcut relies on the app itself through the **Add to Siri** button by following some basic rules to render the best user experience.

![](../../../../../images/iOSdev/wwdc21-ShortAct-ShortcutsBuildSiri.png)
</div>

<div class="tab-pane" id="BuildGallery" role="tabpanel">

Since `iOS`&nbsp;`13`, the `Shortcuts app` contains a [`Gallery`&nbsp;section](#shortcuts-app) inside which various actions are available to be chosen for creating shortcuts too.

The suggested shortcuts in this `Gallery` section may be supplied in [two&nbsp;ways](https://developer.apple.com/videos/play/wwdc2019/805/?time=305): **1/** display the most popular user's actions or **2/** set up a predefined list.

![](../../../../../images/iOSdev/wwdc21-ShortAct-ShortcutsBuildGallery_1.png)

The first method leans on the concept of **donation** that's explained in the next tabulation element.

In addition to the methods [previously&nbsp;described](https://developer.apple.com/videos/play/wwdc2020/10084/?time=459), including actions in the `Shortcuts`&nbsp;`Gallery` might also depends on the **[intents&nbsp;handling](https://developer.apple.com/videos/play/wwdc2020/10084/?time=536)**.

![](../../../../../images/iOSdev/wwdc21-ShortAct-ShortcutsBuildGallery_2.png)
</div>

<div class="tab-pane" id="BuildDonation" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment." href="https://developer.apple.com/videos/play/wwdc2019/805?time=339">🎬</a>
![](../../../../../images/iOSdev/wwdc21-ShortAct-ShortcutsBuildDonation_1.png)

Not only does this notion permit to display the shortcuts in the `Gallery`, but it also provides them various `iOS` native functions in the device⟹&nbsp;<a alt="Click to playback the footage at the appropriate moment." href="https://developer.apple.com/videos/play/wwdc2019/805?time=359">🎬</a>

![](../../../../../images/iOSdev/wwdc21-ShortAct-ShortcutsBuildDonation_2.png)
 
Notify a key parameter in `Xcode` and donate an action as soon as possible are the best ways to make various options highlight in the `Gallery` section⟹&nbsp;<a alt="Click to playback the footage at the appropriate moment." href="https://developer.apple.com/videos/play/wwdc2019/805?time=420">🎬</a>

![](../../../../../images/iOSdev/wwdc21-ShortAct-ShortcutsBuildDonation_3.png)

Should someone tap on the [`Apps` button](https://developer.apple.com/videos/play/wwdc2020/10084/?time=489), a list of all the apps that support shortcuts will be displayed.

Donation created by code is the proper path to follow for pointing out some actions in the appropriate sections⟹&nbsp;<a alt="Click to playback the footage at the appropriate moment." href="https://developer.apple.com/videos/play/wwdc2020/10084/?time=139">🎬</a>

![](../../../../../images/iOSdev/wwdc21-ShortAct-ShortcutsBuildDonation_4.png)

</div>
</div>
</br></br>

## Actions
### [Overview](https://developer.apple.com/videos/play/wwdc2021/10283/?time=34)
The goal of an action is to provide the user a way to **interact with an app without opening it**.
![](../../../../../images/iOSdev/wwdc21-ShortAct-ActionsOverview_1.png)

A model example of this implementation is the [calendar&nbsp;app](https://developer.apple.com/videos/play/wwdc2021/10283/?time=58) that permits the creation of various shortcuts through the [dedicated&nbsp;app](https://developer.apple.com/videos/play/wwdc2021/10283/?time=147) on mac for instance.

![](../../../../../images/iOSdev/wwdc21-ShortAct-ActionsOverview_2.png)

The `Suggestions` widget, `Search` and the `Lock` screen contain and propose some actions automatically recognized by `Siri` if [donated&nbsp;to&nbsp;the&nbsp;system](https://developer.apple.com/videos/play/wwdc2021/10283/?time=159).

![](../../../../../images/iOSdev/wwdc21-ShortAct-ActionsOverview_3.png)
</br>

### [Efficient&nbsp;properties](https://developer.apple.com/videos/play/wwdc2021/10283/?time=218)
![](../../../../../images/iOSdev/wwdc21-ShortAct-ActionsProperties_1.png)

<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item" role="presentation">
        <a class="nav-link active"
           data-bs-toggle="tab" 
           href="#EPUseful"
           id="EPUseful_tab"
           role="tab" 
           aria-selected="true">Useful</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#EPModular"
           id="EPModular_tab"
           role="tab" 
           aria-selected="false">Modular</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#EPMultimodal"
           id="EPMultimodal_tab"
           role="tab" 
           aria-selected="false">Multimodal</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#EPClear"
           id="EPClear_tab"
           role="tab" 
           aria-selected="false">Clear</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#EPDiscoverable"
           id="EPDiscoverable_tab"
           role="tab" 
           aria-selected="false">Discoverable</a>
    </li>
    </ul>

<div class="tab-content">
<div class="tab-pane show active" id="EPUseful" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment." href="https://developer.apple.com/videos/play/wwdc2021/10283/?time=236">🎬</a>
![](../../../../../images/iOSdev/wwdc21-ShortAct-ActionsPropertiesUseful_1.png)
Useful means:
- **Perform a task outside the app**⟹ the [reminder&nbsp;app](https://developer.apple.com/videos/play/wwdc2021/10283/?time=263) is a perfect example to highlight this statement. However, a [dedicated&nbsp;question](https://developer.apple.com/videos/play/wwdc2021/10283/?time=322) may be required when further input parameters are necessary to reach the user's goal.

![](../../../../../images/iOSdev/wwdc21-ShortAct-ActionsPropertiesUseful_2.png)

- **Not too immersive**⟹&nbsp;<a alt="Click to playback the footage at the appropriate time" href="https://developer.apple.com/videos/play/wwdc2021/10283/?time=346">🎬</a>

![](../../../../../images/iOSdev/wwdc21-ShortAct-ActionsPropertiesUseful_3.png)

- **Repeatable**⟹&nbsp;<a alt="Click to playback the footage at the appropriate time" href="https://developer.apple.com/videos/play/wwdc2021/10283/?time=402">🎬</a>

![](../../../../../images/iOSdev/wwdc21-ShortAct-ActionsPropertiesUseful_4.png)
</div>

<div class="tab-pane" id="EPModular" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment." href="https://developer.apple.com/videos/play/wwdc2021/10283/?time=471">🎬</a>

It's better to consider the goal of a bunch of actions as different steps to be followed instead of one single task to be fulfilled.

![](../../../../../images/iOSdev/wwdc21-ShortAct-ActionsPropertiesModular_1.png)

This break-up of elements allows a [broader&nbsp;extension](https://developer.apple.com/videos/play/wwdc2021/10283/?time=540) of their range through many shortcuts.

![](../../../../../images/iOSdev/wwdc21-ShortAct-ActionsPropertiesModular_2.png)

Various [outgoing&nbsp;properties](https://developer.apple.com/videos/play/wwdc2021/10283/?time=652) may be exposed by an action so as to create multiple possible functionalities through other actions.

![](../../../../../images/iOSdev/wwdc21-ShortAct-ActionsPropertiesModular_3.png)

When creating actions as per a modular concept, some of them are strongly [recommended](https://developer.apple.com/videos/play/wwdc2021/10283/?time=708) to be planned first.

![](../../../../../images/iOSdev/wwdc21-ShortAct-ActionsPropertiesModular_4.png)
</div>

<div class="tab-pane" id="EPMultimodal" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment." href="https://developer.apple.com/videos/play/wwdc2021/10283/?time=788">🎬</a>

![](../../../../../images/iOSdev/wwdc21-ShortAct-ActionsPropertiesMultiModal_1.png)

Sometimes through the **[Dynamic&nbsp;Enumerations](https://developer.apple.com/videos/play/wwdc2021/10283/?time=925)**, parameters may be suggested for incoming values at [two&nbsp;different&nbsp;times](https://developer.apple.com/videos/play/wwdc2021/10283/?time=945):
- **Configuration**, when an action is set up in the `Shortcut editor`. 
- **Resolution**, while an action is on the run.

![](../../../../../images/iOSdev/wwdc21-ShortAct-ActionsPropertiesMultiModal_2.png)

The crucial interfaces introduced to the user when an action is on the run are called **[snippets](https://developer.apple.com/videos/play/wwdc2021/10283/?time=984)**.

![](../../../../../images/iOSdev/wwdc21-ShortAct-ActionsPropertiesMultiModal_3.png)
</div>

<div class="tab-pane" id="EPClear" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment." href="https://developer.apple.com/videos/play/wwdc2021/10283/?time=1034">🎬</a>

A new representation of the actions is highlighted in the editor.
![](../../../../../images/iOSdev/wwdc21-ShortAct-ActionsPropertiesClear_1.png)

Some attention elements must be outlined regarding the parameter summaries:
- Always begin with a verb⟹&nbsp;<a alt="Click to playback the footage at the appropriate time" href="https://developer.apple.com/videos/play/wwdc2021/10283/?time=1129">🎬</a>
![](../../../../../images/iOSdev/wwdc21-ShortAct-ActionsPropertiesClear_2.png)

- Never include optional parameters or punctuation⟹&nbsp;<a alt="Click to playback the footage at the appropriate time" href="https://developer.apple.com/videos/play/wwdc2021/10283/?time=1148">🎬</a>
![](../../../../../images/iOSdev/wwdc21-ShortAct-ActionsPropertiesClear_3.png)

- Consider providing a default value⟹&nbsp;<a alt="Click to playback the footage at the appropriate time" href="https://developer.apple.com/videos/play/wwdc2021/10283/?time=1162">🎬</a>
![](../../../../../images/iOSdev/wwdc21-ShortAct-ActionsPropertiesClear_4.png)

- People can set any parameter as "Ask Each Time"⟹&nbsp;<a alt="Click to playback the footage at the appropriate time" href="https://developer.apple.com/videos/play/wwdc2021/10283/?time=1188">🎬</a>
![](../../../../../images/iOSdev/wwdc21-ShortAct-ActionsPropertiesClear_5.png)
</div>

<div class="tab-pane" id="EPDiscoverable" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment." href="https://developer.apple.com/videos/play/wwdc2021/10283/?time=1229">🎬</a>

**New sharing methods** have been introduced to distribute the shortcuts and the actions available through an app.

![](../../../../../images/iOSdev/wwdc21-ShortAct-ActionsPropertiesDiscoverable_1.png)

Now, the **"Add to Siri"** button automatically [adds&nbsp;the&nbsp;shortcut](https://developer.apple.com/videos/play/wwdc2021/10283/?time=1267) in its database by means of an intermediate screen if no invocation phrase is suggested.

![](../../../../../images/iOSdev/wwdc21-ShortAct-ActionsPropertiesDiscoverable_2.png)
</div>
</div>
</br></br>

![](../../../../../images/iOSdev/wwdc21-ShortAct-ActionsProperties_2.png)
</br>

## Automation
![](../../../../../images/iOSdev/wwdc21-ShortAct-Automations_2.png)
Introduced in `iOS`&nbsp;`13`, the personal automations have experienced further **improvements in `iOS`&nbsp;`14`** offering a much wider [spectrum&nbsp;of&nbsp;use](https://developer.apple.com/videos/play/wwdc2020/10084/?time=48)...

![](../../../../../images/iOSdev/wwdc21-ShortAct-Automations_1.png)

...and the automation suggestions are still enriched by [donations](https://developer.apple.com/videos/play/wwdc2020/10084/?time=185). 

![](../../../../../images/iOSdev/wwdc21-ShortAct-Automations_3.png)

As a specific type of automation featured in `iOS`&nbsp;`13`, the **Daily Routines** contain useful  and often little known information.
<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item" role="presentation">
        <a class="nav-link active"
           data-bs-toggle="tab" 
           href="#DailyRoutinesOverview"
           id="DailyRoutinesOverview_tab"
           role="tab" 
           aria-selected="true">Overview</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#DailyRoutinesExample"
           id="DailyRoutinesExample_tab"
           role="tab" 
           aria-selected="false">Example</a>
    </li>
    </ul>

<div class="tab-content">
<div class="tab-pane show active" id="DailyRoutinesOverview" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment." href="https://developer.apple.com/videos/play/wwdc2020/10084/?time=260">🎬</a>

![](../../../../../images/iOSdev/wwdc21-ShortAct-Automations_4.png)
</div>

<div class="tab-pane" id="DailyRoutinesExample" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment." href="https://developer.apple.com/videos/play/wwdc2020/10084/?time=303">🎬</a>

![](../../../../../images/iOSdev/wwdc21-ShortAct-Automations_5.png)

According to the routine, the **INPlayMediaIntent** and **INStartWorkoutIntent** class objects are to be adopted and donated for informing the system⟹&nbsp;<a alt="Click to playback the footage at the appropriate time" href="https://developer.apple.com/videos/play/wwdc2020/10084/?time=391">🎬</a>
</div>
</div>
</br></br>
