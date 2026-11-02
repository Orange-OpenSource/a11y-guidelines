---
title : "Create and animate symbols"
abstract: "Discover animation presets and learn how to use them with SF Symbols and custom symbols."

displayToc: true
---

# WWDC 2023: Create and animate symbols
Find hereafter a detailed summary of two videos that belong to a [taxonomy&nbsp;of&nbsp;some&nbsp;WWDC&nbsp;footages](../../).

The original videos are available on the **Apple official website** ([session&nbsp;10257](https://developer.apple.com/videos/play/wwdc2023/10257/), [session&nbsp;10258](https://developer.apple.com/videos/play/wwdc2023/10258/)).

![](../../../../../images/iOSdev/wwdc23-Symbols_Poster.png)

"**Discover animation presets** and learn how to use them with **SF Symbols and custom symbols**. We'll show you how to experiment with different options and configurations to find the **perfect animation** for your app. Learn how to update custom symbols for animation using **annotation features**, find out how to modify your custom symbols with **symbol components**, and explore the redesigned export process to help keep symbols looking great on all platforms."

"Bring delight to your app with animated symbols. Explore the **new Symbols framework**, which features a unified API to create and configure symbol effects. Learn how **SwiftUI**, **AppKit**, and **UIKit** make it easy to **animate symbols** in user interfaces. Discover tips and tricks to seamlessly integrate the new animations alongside other app content."

</br>Hereafter, the underlined elements **lead directly to the playback of the WWDC video** at the appropriate moment.

![](../../../../../images/iOSdev/wwdc23-Symbols_2.png)
## [Overview](https://developer.apple.com/videos/play/wwdc2023/10257/?time=15)

Since their introduction, the **SF Symbols** are meant to be consistent, customizable and expressive to provide the best user experience.

![](../../../../../images/iOSdev/wwdc23-Symbols_3.png)

As a brand **new feature** in 2023, **[animation](https://developer.apple.com/videos/play/wwdc2023/10258?time=36)** is now to be considered as a whole part of symbols.
![](../../../../../images/iOSdev/wwdc23-Symbols_4.png)

A library of iconography has been made for creating custom symbols with shared **design characteristics** and **accessibility features**: the&nbsp;**SF&nbsp;Symbols&nbsp;app**.
</br>

## SF&nbsp;Symbols&nbsp;app
The new **SF Symbols 5** app introduces an **[animation&nbsp;inspector](https://developer.apple.com/videos/play/wwdc2023/10257/?time=112)** in the sidebar to preview the new animation effects.

The [animation&nbsp;effect&nbsp;selection](https://developer.apple.com/videos/play/wwdc2023/10257/?time=133) comes in with **[controls](https://developer.apple.com/videos/play/wwdc2023/10257/?time=153)** for configuring the animation and with a **[label](https://developer.apple.com/videos/play/wwdc2023/10257/?time=171)** under the preview area (“Automatic”&nbsp;or&nbsp;“Modified”) to indicate activated custom settings.
Moreover, the effect name can be [copied](https://developer.apple.com/videos/play/wwdc2023/10257?time=203) in code with the appropriate syntax through the button next to the label.

![](../../../../../images/iOSdev/wwdc23-Symbols_10.png)

Note that the controls may vary according to the selected animation effect.

![](../../../../../images/iOSdev/wwdc23-Symbols_11.png)

## [Custom&nbsp;symbols](https://developer.apple.com/videos/play/wwdc2023/10257/?time=264)
Both for the basic [variable&nbsp;colors](https://developer.apple.com/videos/play/wwdc2023/10257/?time=311) and the pulse animations, a **[new&nbsp;control](https://developer.apple.com/videos/play/wwdc2023/10257/?time=326)** is available in the annotation list to **specify which layers should be impacted** when the `By`&nbsp;`Layer` setting is ticked.

Based on the motion with the [bounce&nbsp;animation](https://developer.apple.com/videos/play/wwdc2023/10257/?time=389), another **[new&nbsp;feature](https://developer.apple.com/videos/play/wwdc2023/10257/?time=411)** in annotation is introduced for **grouping layers** that animate their sublayers altogether.
![](../../../../../images/iOSdev/wwdc23-Symbols_12.png)

It's important to keep in mind that the motion animations are **[only&nbsp;for&nbsp;SF&nbsp;Symbols 5](https://developer.apple.com/videos/play/wwdc2023/10257/?time=367)**.
</br>

## [Symbol&nbsp;components](https://developer.apple.com/videos/play/wwdc2023/10257/?time=598)
![](../../../../../images/iOSdev/wwdc23-Symbols_13.png)

<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item" role="presentation">
        <a class="nav-link active"
           data-bs-toggle="tab" 
           href="#SFSymbolsComponents1"
           id="SFSymbolsComponents1_tab"
           role="tab" 
           aria-selected="true">SF&nbsp;Symbols&nbsp;app</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#SFSymbolsComponents2"
           id="SFSymbolsComponents2_tab"
           role="tab" 
           aria-selected="false">Variable&nbsp;templates</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#SFSymbolsComponents3"
           id="SFSymbolsComponents3_tab"
           role="tab" 
           aria-selected="false">Weight&nbsp;compensation</a>
    </li>
    </ul>

<div class="tab-content">
<div class="tab-pane show active" id="SFSymbolsComponents1" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment regarding the sf symbols app" href="https://developer.apple.com/videos/play/wwdc2023/10257/?time=620">🎬</a>

**Combining various components**  with a symbol can be quickly performed through few milestones in the `Symbol`&nbsp;`5` app to get the [relevant&nbsp;elements](https://developer.apple.com/videos/play/wwdc2023/10257/?time=647).
![](../../../../../images/iOSdev/wwdc23-Symbols_14.png)

If these new created symbols need to be refined, some [dedicated&nbsp;controls](https://developer.apple.com/videos/play/wwdc2023/10257/?time=677) are available instead of the common annotation controls.

![](../../../../../images/iOSdev/wwdc23-Symbols_15.png)
</div>

<div class="tab-pane" id="SFSymbolsComponents2" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment regarding the variable templates" href="https://developer.apple.com/videos/play/wwdc2023/10257/?time=728">🎬</a>

The support of the **variable templates** streamlines the creation of the huge amount of symbol components.
![](../../../../../images/iOSdev/wwdc23-Symbols_16.png)

Finally, if some **refinements** are necessary, the [set&nbsp;of&nbsp;previews](https://developer.apple.com/videos/play/wwdc2023/10257/?time=762) at the top of the `Gallery` view and the `Override`&nbsp;`Black` checkbox are the best ways to reach your goals.
![](../../../../../images/iOSdev/wwdc23-Symbols_17.png)
</div>

<div class="tab-pane" id="SFSymbolsComponents3" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment regarding the weight compensation" href="https://developer.apple.com/videos/play/wwdc2023/10257/?time=810">🎬</a>

During a scale change, the system automatically tailors the weight and the thickness of the symbol.

![](../../../../../images/iOSdev/wwdc23-Symbols_18.png)
</div>
</div>
</br>
</br>

![](../../../../../images/iOSdev/wwdc23-Symbols_1.png)

## [Symbol&nbsp;effects](https://developer.apple.com/videos/play/wwdc2023/10258/?time=108)
![](../../../../../images/iOSdev/wwdc23-Symbols_9.png)
As a feature of the Symbols framework, the [dot-separated&nbsp;name](https://developer.apple.com/videos/play/wwdc2023/10258?time=123) writing renders the effects with [specific&nbsp;options](https://developer.apple.com/videos/play/wwdc2023/10258?time=161) for some of them.

![](../../../../../images/iOSdev/wwdc23-Symbols_24.png)

Each of these effects has its own [protocol](https://developer.apple.com/videos/play/wwdc2023/10258?time=273) to describe **four distinct behaviors** highlighted in `SwiftUI` through a new [view&nbsp;modifier](https://developer.apple.com/videos/play/wwdc2023/10258?time=311).

<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item" role="presentation">
        <a class="nav-link active"
           data-bs-toggle="tab" 
           href="#SFSymbolsEffects1"
           id="SFSymbolsEffects1_tab"
           role="tab" 
           aria-selected="true">Discrete</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#SFSymbolsEffects2"
           id="SFSymbolsEffects2_tab"
           role="tab" 
           aria-selected="false">Indefinite</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#SFSymbolsEffects3"
           id="SFSymbolsEffects3_tab"
           role="tab" 
           aria-selected="false">Transition</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#SFSymbolsEffects4"
           id="SFSymbolsEffects4_tab"
           role="tab" 
           aria-selected="false">Content&nbsp;Transition</a>
    </li>
    </ul>
<div class="tab-content">
<div class="tab-pane show active" id="SFSymbolsEffects1" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment regarding the discrete behavior" href="https://developer.apple.com/videos/play/wwdc2023/10258?time=220">🎬</a>

![](../../../../../images/iOSdev/wwdc23-Symbols_6.png)

This kind of effect can be applied [repeatedly](https://developer.apple.com/videos/play/wwdc2023/10258/?time=449) and can be [considered as indefinite](https://developer.apple.com/videos/play/wwdc2023/10258/?time=524) (see the next tab for more detail).

![](../../../../../images/iOSdev/wwdc23-Symbols_26.png)
</div>

<div class="tab-pane" id="SFSymbolsEffects2" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment regarding the indefinite behavior" href="https://developer.apple.com/videos/play/wwdc2023/10258?time=230">🎬</a>

![](../../../../../images/iOSdev/wwdc23-Symbols_5.png)

The [uniqueness](https://developer.apple.com/videos/play/wwdc2023/10258/?time=374) of an **indefinite effect** is based on its **eternal existence until it's removed** ⟹ [code&nbsp;example](https://developer.apple.com/videos/play/wwdc2023/10258/?time=389)

![](../../../../../images/iOSdev/wwdc23-Symbols_25.png)

</div>

<div class="tab-pane" id="SFSymbolsEffects3" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment regarding the transition behavior" href="https://developer.apple.com/videos/play/wwdc2023/10258?time=248">🎬</a>

![](../../../../../images/iOSdev/wwdc23-Symbols_7.png)

This effect is used for **showing and hiding symbols** with unique animations: the **[view&nbsp;hierarchy&nbsp;is&nbsp;adjusted](https://developer.apple.com/videos/play/wwdc2023/10258/?time=710)** according to the presence of the symbol which might imply specific [code&nbsp;writing](https://developer.apple.com/videos/play/wwdc2023/10258/?time=739).

![](../../../../../images/iOSdev/wwdc23-Symbols_28.png)
</div>

<div class="tab-pane" id="SFSymbolsEffects4" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment regarding the content transition behavior" href="https://developer.apple.com/videos/play/wwdc2023/10258?time=257">🎬</a>

![](../../../../../images/iOSdev/wwdc23-Symbols_8.png)

The [primary&nbsp;application](https://developer.apple.com/videos/play/wwdc2023/10258/?time=565) of this effect is the **switching of two symbols**, which requires only a few lines of code to implement.

![](../../../../../images/iOSdev/wwdc23-Symbols_27.png)
</div>
</div>
</br>
</br>

## [Compatibility](https://developer.apple.com/videos/play/wwdc2023/10257/?time=904)
<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item" role="presentation">
        <a class="nav-link active"
           data-bs-toggle="tab" 
           href="#SFSymbolsCompatibility1"
           id="SFSymbols1Compatibility_tab"
           role="tab" 
           aria-selected="true">Templates</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#SFSymbolsCompatibility2"
           id="SFSymbolsCompatibility2_tab"
           role="tab" 
           aria-selected="false">Annotations</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#SFSymbolsCompatibility3"
           id="SFSymbolsCompatibility3_tab"
           role="tab" 
           aria-selected="false">Symbols</a>
    </li>
    </ul>

<div class="tab-content">
<div class="tab-pane show active" id="SFSymbolsCompatibility1" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment regarding the templates export" href="https://developer.apple.com/videos/play/wwdc2023/10257/?time=917">🎬</a>

![](../../../../../images/iOSdev/wwdc23-Symbols_19.png)

This new **wireframe view** for template exportation is combined with a **[dedicated&nbsp;picker](https://developer.apple.com/videos/play/wwdc2023/10257/?time=953)** to streamline the compatibility with older versions regarding the export.

<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item" role="presentation">
        <a class="nav-link active"
           data-bs-toggle="tab" 
           href="#SFSymbolsCompatibilityTemplate1"
           id="SFSymbolsCompatibilityTemplate1_tab"
           role="tab" 
           aria-selected="true">SF&nbsp;Symbols&nbsp;3</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#SFSymbolsCompatibilityTemplate2"
           id="SFSymbolsCompatibilityTemplate2_tab"
           role="tab" 
           aria-selected="false">SF&nbsp;Symbols&nbsp;2</a>
    </li>
    </ul>

<div class="tab-content">
<div class="tab-pane show active" id="SFSymbolsCompatibilityTemplate1" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment regarding the compatibility with sf symbols 3" href="https://developer.apple.com/videos/play/wwdc2023/10257/?time=969">🎬</a>

![](../../../../../images/iOSdev/wwdc23-Symbols_20.png)
</div>

<div class="tab-pane" id="SFSymbolsCompatibilityTemplate2" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment regarding the compatibility with sf symbols 2" href="https://developer.apple.com/videos/play/wwdc2023/10257/?time=984">🎬</a>

![](../../../../../images/iOSdev/wwdc23-Symbols_21.png)
</div>
</div>
</br>
</br>
</div>

<div class="tab-pane" id="SFSymbolsCompatibility2" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment regarding the annotations export" href="https://developer.apple.com/videos/play/wwdc2023/10257/?time=998">🎬</a>

The exact same template's rationale is followed regarding the **annotations**.
![](../../../../../images/iOSdev/wwdc23-Symbols_22.png)
</div>

<div class="tab-pane" id="SFSymbolsCompatibility3" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment regarding the symbols export" href="https://developer.apple.com/videos/play/wwdc2023/10257/?time=1025">🎬</a>

Concerning the symbols, the **system automatically handles the format** to have the appropriate export according to the requested version.
![](../../../../../images/iOSdev/wwdc23-Symbols_23.png)
</div>
</div>
</br>
</br>

## [Enhancements](https://developer.apple.com/videos/play/wwdc2023/10258?time=805)
With `SwiftUI`, the symbol effects may be [disabled](https://developer.apple.com/videos/play/wwdc2023/10258/?time=857) throughout the view hierarchy via the **symbolEffect** and the **symbolEffectsRemoved** modifiers.
![](../../../../../images/iOSdev/wwdc23-Symbols_29.png)

**Launching the animation** when needed is based on different approaches according to the [environments](https://developer.apple.com/videos/play/wwdc2023/10258/?time=886).

![](../../../../../images/iOSdev/wwdc23-Symbols_30.png)

The use of **variable values** has [become&nbsp;easier](https://developer.apple.com/videos/play/wwdc2023/10258/?time=920) for `SwiftUI`, `AppKit` and `UIKit`.

![](../../../../../images/iOSdev/wwdc23-Symbols_31.png)

**[UIBarButtonItem](https://developer.apple.com/videos/play/wwdc2023/10258/?time=813)** and some UIKit controls take advantage from the symbol effect like the [`UISlider`](https://developer.apple.com/videos/play/wwdc2023/10258/?time=834).
![](../../../../../images/iOSdev/wwdc23-Symbols_32.png)

</br>