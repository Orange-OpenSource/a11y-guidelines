---
title : "App Intents, App Shortcuts and Spotlight"
abstract: "Learn how to design your shortcut to appear as a top hit in Spotlight."

displayToc: true
---

# WWDC 2023: App Intents, App Shortcuts and Spotlight
Find hereafter a detailed summary of the hereunder named videos that belong to a [taxonomy&nbsp;of&nbsp;some&nbsp;WWDC&nbsp;footages](../../).

The original ones are available on the **Apple official website** ([session&nbsp;10102](https://developer.apple.com/videos/play/wwdc2023/10102/), [session&nbsp;10103](https://developer.apple.com/videos/play/wwdc2023/10103/) and [session&nbsp;10193](https://developer.apple.com/videos/play/wwdc2023/10193/)).

![](../../../../../images/iOSdev/wwdc23-AppIntShortSpot_Poster.png)

"Discover how to **use App Shortcuts** to surface frequently used features from your app in Spotlight or through Siri. Find out how to **configure search results** for your app and **learn best practices** for creating great App Shortcuts. We'll also show you how to **build great visual and voice experiences** and extend to other Apple devices like Apple Watch and HomePod."

"Explore the **latest updates** and learn how you can take advantage of dynamic options and user interactivity to **build better experiences for your App Shortcuts**. We'll share how you can integrate with Apple Pay, structure your code more efficiently, and take your Shortcuts app integration to the next level."

"Learn about the **latest updates** to the visual language of App Shortcuts and find out how to **design your shortcut** to appear as a top hit in Spotlight. We'll share how shortcuts can appear on iOS or iPadOS, and show you how to **customize the visual appearance of a shortcut**, personalize its order, select its correct behavior, and **increase discoverability**."

</br>Hereafter, the underlined elements **lead directly to the playback of the WWDC video** at the appropriate moment.</br>

## [Design](https://developer.apple.com/videos/play/wwdc2023/10193/?time=44)
![](../../../../../images/iOSdev/wwdc23-AppIntShortSpot_1.png)

**Three main principles** come to mind when dealing with the design for `Spotlight`.

<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item" role="presentation">
        <a class="nav-link active"
           data-bs-toggle="tab" 
           href="#AppIntShortSpotDesignPrinciple1"
           id="AppIntShortSpotDesignPrinciple1_tab"
           role="tab" 
           aria-selected="true">Principle&nbsp;#1</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#AppIntShortSpotDesignPrinciple2"
           id="AppIntShortSpotDesignPrinciple2_tab"
           role="tab" 
           aria-selected="false">Principle&nbsp;#2</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#AppIntShortSpotDesignPrinciple3"
           id="AppIntShortSpotDesignPrinciple3_tab"
           role="tab" 
           aria-selected="false">Principle&nbsp;#3</a>
    </li>
    </ul>

<div class="tab-content">
<div class="tab-pane show active" id="AppIntShortSpotDesignPrinciple1" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment regarding the first principle when designing shortcuts for spotlight" href="https://developer.apple.com/videos/play/wwdc2023/10193/?time=95">🎬</a>

![](../../../../../images/iOSdev/wwdc23-AppIntShortSpot_3.png)
</div>

<div class="tab-pane" id="AppIntShortSpotDesignPrinciple2" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment regarding the second principle when designing shortcuts for spotlight" href="https://developer.apple.com/videos/play/wwdc2023/10193/?time=122">🎬</a>

![](../../../../../images/iOSdev/wwdc23-AppIntShortSpot_4.png)
![](../../../../../images/iOSdev/wwdc23-AppIntShortSpot_5.png)
</div>

<div class="tab-pane" id="AppIntShortSpotDesignPrinciple3" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment regarding the third principle when designing shortcuts for spotlight" href="https://developer.apple.com/videos/play/wwdc2023/10193/?time=150">🎬</a>

![](../../../../../images/iOSdev/wwdc23-AppIntShortSpot_6.png)

**[Personalizing&nbsp;the&nbsp;app&nbsp;shortcuts](https://developer.apple.com/videos/play/wwdc2023/10193/?time=182)** through the decisions made by the users is also a good mean to improve the predictability.

![](../../../../../images/iOSdev/wwdc23-AppIntShortSpot_7.png)
</div>
</div>

</br>

In `iOS`&nbsp;`17`, starting any search with the `Search` utility makes it easy to render apps and their shortcuts as well nearby in the top hit as in the `Shortcuts` app.
![](../../../../../images/iOSdev/wwdc23-AppIntShortSpot_2.png)

Few areas should be analyzed in depth regarding the design with `Spotlight`.
<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item" role="presentation">
        <a class="nav-link active"
           data-bs-toggle="tab" 
           href="#AppIntShortSpotDesign1"
           id="AppIntShortSpotDesign1_tab"
           role="tab" 
           aria-selected="true">Creation</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#AppIntShortSpotDesign2"
           id="AppIntShortSpotDesign2_tab"
           role="tab" 
           aria-selected="false">Colors</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#AppIntShortSpotDesign3"
           id="AppIntShortSpotDesign3_tab"
           role="tab" 
           aria-selected="false">Behavior</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#AppIntShortSpotDesign4"
           id="AppIntShortSpotDesign4_tab"
           role="tab" 
           aria-selected="false">Discovery</a>
    </li>
    </ul>

<div class="tab-content">
<div class="tab-pane show active" id="AppIntShortSpotDesign1" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment regarding the creation" href="https://developer.apple.com/videos/play/wwdc2023/10193/?time=253">🎬</a>

![](../../../../../images/iOSdev/wwdc23-AppIntShortSpot_9.png)

Once the concepts of **action** and **entity** are integrated,  it's crucial to **[avert&nbsp;truncations](https://developer.apple.com/videos/play/wwdc2023/10193/?time=290)** in the names...

![](../../../../../images/iOSdev/wwdc23-AppIntShortSpot_8.png)
... and to **[maintain&nbsp;a&nbsp;coherence](https://developer.apple.com/videos/play/wwdc2023/10193/?time=312)** between the shapes of the shortcuts.

![](../../../../../images/iOSdev/wwdc23-AppIntShortSpot_10.png)
</div>

<div class="tab-pane" id="AppIntShortSpotDesign2" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment regarding the colors" href="https://developer.apple.com/videos/play/wwdc2023/10193/?time=366">🎬</a>

![](../../../../../images/iOSdev/wwdc23-AppIntShortSpot_11.png)

While the background color of the `Top`&nbsp;`Hit` in `Spotlight` may be customized and spread to the `Shortcuts` app, it's also possible to supply a [secondary&nbsp;tint&nbsp;color](https://developer.apple.com/videos/play/wwdc2023/10193/?time=393) to the symbols for highlighting a **two-tone appearance**.

![](../../../../../images/iOSdev/wwdc23-AppIntShortSpot_12.png)
</div>

<div class="tab-pane" id="AppIntShortSpotDesign3" role="tabpanel">

**[App&nbsp;Launch](https://developer.apple.com/videos/play/wwdc2023/10193/?time=428)**, **[Live&nbsp;Activity](https://developer.apple.com/videos/play/wwdc2023/10193/?time=438)** and **[Snippet](https://developer.apple.com/videos/play/wwdc2023/10193/?time=452)** are the possible options to be followed according to the appropriate screen where it's suggested to the user.

![](../../../../../images/iOSdev/wwdc23-AppIntShortSpot_13.png)
</div>

<div class="tab-pane" id="AppIntShortSpotDesign4" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment regarding the discovery" href="https://developer.apple.com/videos/play/wwdc2023/10193/?time=503">🎬</a>

To make the `App Shortcuts` discoverable in `Spotlight`, it's important to **write phrase synonyms** to tailor and direct the search.

![](../../../../../images/iOSdev/wwdc23-AppIntShortSpot_14.png)

Providing **[app&nbsp;name&nbsp;synonyms](https://developer.apple.com/videos/play/wwdc2023/10193/?time=531)** may be a good mean for some specific situations as well.

![](../../../../../images/iOSdev/wwdc23-AppIntShortSpot_15.png)
</div>
</div>
</br>
</br>

## App&nbsp;Shortcuts
### [Basics](https://developer.apple.com/videos/play/wwdc2023/10102/?time=48)
![](../../../../../images/iOSdev/wwdc23-AppIntShortSpot_16.png)

Made to ease the app's functionality discovery, the `App Shortcuts` may be reached from [various&nbsp;tools](https://developer.apple.com/videos/play/wwdc2023/10102/?time=68) and leads to a high range of [outcomes](https://developer.apple.com/videos/play/wwdc2023/10102/?time=85) through its usage.

![](../../../../../images/iOSdev/wwdc23-AppIntShortSpot_17.png)

#### [Intent&nbsp;&&nbsp;shortcut](https://developer.apple.com/videos/play/wwdc2023/10102/?time=154)
![](../../../../../images/iOSdev/wwdc23-AppIntShortSpot_19.png)

A **basic app shortcut** is [easy&nbsp;to&nbsp;be&nbsp;implemented](https://developer.apple.com/videos/play/wwdc2023/10102/?time=193) by following the creations of the **app intent** and the **app shortcut**.

![](../../../../../images/iOSdev/wwdc23-AppIntShortSpot_18.png)

#### Entity&nbsp;&&nbsp;query
To dive deeper into the possible opportunities, it's important to understand the concepts of **[entities](https://developer.apple.com/videos/play/wwdc2023/10102/?time=333)** and **[queries](https://developer.apple.com/videos/play/wwdc2023/10102/?time=361)**.

![](../../../../../images/iOSdev/wwdc23-AppIntShortSpot_20.png)

Once implemented, the [entity](https://developer.apple.com/videos/play/wwdc2023/10102/?time=389) and the [query](https://developer.apple.com/videos/play/wwdc2023/10102/?time=421) elements' code writing leads to an [upgraded&nbsp;version](https://developer.apple.com/videos/play/wwdc2023/10102/?time=440) of the previous example.

![](../../../../../images/iOSdev/wwdc23-AppIntShortSpot_21.png)

#### [Implementation](https://developer.apple.com/videos/play/wwdc2023/10102/?time=451)
Expanding the previous example to a broader range including `Siri` and `Spotlight` gives rise to an **app shortcut implementation**.

![](../../../../../images/iOSdev/wwdc23-AppIntShortSpot_22.png)

The [result](https://developer.apple.com/videos/play/wwdc2023/10102/?time=603) relies on the **mandatory notion of updating** the `App`&nbsp;`Shortcut` parameters.

![](../../../../../images/iOSdev/wwdc23-AppIntShortSpot_23.png)

#### Discovery
Finally, the main two ways for finding out the `App Shortcuts` through the device is based on **[Spotlight](https://developer.apple.com/videos/play/wwdc2023/10102/?time=622)** and **[Siri&nbsp;Tips](https://developer.apple.com/videos/play/wwdc2023/10102/?time=659)**.

![](../../../../../images/iOSdev/wwdc23-AppIntShortSpot_24.png)
</br>

### [iOS&nbsp;17&nbsp;enhancements](https://developer.apple.com/videos/play/wwdc2023/10102/?time=713)
![](../../../../../images/iOSdev/wwdc23-AppIntShortSpot_25.png)

New `API`s have been introduced to support and develop the `iOS`&nbsp;`17` features that relate many areas.

![](../../../../../images/iOSdev/wwdc23-AppIntShortSpot_26.png)

<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item" role="presentation">
        <a class="nav-link active"
           data-bs-toggle="tab" 
           href="#AppIntShortSpotEnh1"
           id="AppIntShortSpotEnh1_tab"
           role="tab" 
           aria-selected="true">1</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#AppIntShortSpotEnh2"
           id="AppIntShortSpotEnh2_tab"
           role="tab" 
           aria-selected="false">2</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#AppIntShortSpotEnh3"
           id="AppIntShortSpotEnh3_tab"
           role="tab" 
           aria-selected="false">3</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#AppIntShortSpotEnh4"
           id="AppIntShortSpotEnh4_tab"
           role="tab" 
           aria-selected="false">4</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#AppIntShortSpotEnh5"
           id="AppIntShortSpotEnh5_tab"
           role="tab" 
           aria-selected="false">5
    </a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#AppIntShortSpotEnh6"
           id="AppIntShortSpotEnh6_tab"
           role="tab" 
           aria-selected="false">6</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#AppIntShortSpotEnh7"
           id="AppIntShortSpotEnh7_tab"
           role="tab" 
           aria-selected="false">7</a>
    </li>
    </ul>

<div class="tab-content">
<div class="tab-pane show active" id="AppIntShortSpotEnh1" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment regarding the colors" href="https://developer.apple.com/videos/play/wwdc2023/10102/?time=775">🎬</a>

![](../../../../../images/iOSdev/wwdc23-AppIntShortSpot_27.png)
</div>

<div class="tab-pane" id="AppIntShortSpotEnh2" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment regarding the entity and thumbnails" href="https://developer.apple.com/videos/play/wwdc2023/10102/?time=789">🎬</a>

![](../../../../../images/iOSdev/wwdc23-AppIntShortSpot_28.png)
</div>

<div class="tab-pane" id="AppIntShortSpotEnh3" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment regarding the titles and the symbols" href="https://developer.apple.com/videos/play/wwdc2023/10102/?time=814">🎬</a>

![](../../../../../images/iOSdev/wwdc23-AppIntShortSpot_29.png)
</div>

<div class="tab-pane" id="AppIntShortSpotEnh4" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment regarding siri " href="https://developer.apple.com/videos/play/wwdc2023/10102/?time=827">🎬</a>

![](../../../../../images/iOSdev/wwdc23-AppIntShortSpot_30.png)
</div>

<div class="tab-pane" id="AppIntShortSpotEnh5" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment regarding the synonyms" href="https://developer.apple.com/videos/play/wwdc2023/10102/?time=911">🎬</a>

![](../../../../../images/iOSdev/wwdc23-AppIntShortSpot_31.png)
</div>

<div class="tab-pane" id="AppIntShortSpotEnh6" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment regarding the negative phrases" href="https://developer.apple.com/videos/play/wwdc2023/10102/?time=950">🎬</a>

![](../../../../../images/iOSdev/wwdc23-AppIntShortSpot_32.png)
</div>

<div class="tab-pane" id="AppIntShortSpotEnh7" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment regarding the xcode preview feature" href="https://developer.apple.com/videos/play/wwdc2023/10102/?time=970">🎬</a>

![](../../../../../images/iOSdev/wwdc23-AppIntShortSpot_33.png)

Check out the [next&nbsp;section](#demo) for a better understanding of this **App Shortcuts Preview** new feature of `Xcode`.
</div>
</div>
</br>
</br>

#### [Demo](https://developer.apple.com/videos/play/wwdc2023/10102/?time=999)
![](../../../../../images/iOSdev/wwdc23-AppIntShortSpot_34.png)

Testing the app in another language like [Mandarin](https://developer.apple.com/videos/play/wwdc2023/10102/?time=1090) becomes easier when using this `Xcode` new feature.
</br>

#### [String&nbsp;Catalog](https://developer.apple.com/videos/play/wwdc2023/10102/?time=1121)
`iOS`&nbsp;`17` brings many enhancements to localize the `App Shortcuts` trigger phrases.

![](../../../../../images/iOSdev/wwdc23-AppIntShortSpot_37.png)

The `String`&nbsp;`Catalog` format introduced in `iOS`&nbsp;`17` is easy to be implemented in your app whatever `App Shortcuts` has already been integrated or not.
<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item" role="presentation">
        <a class="nav-link active"
           data-bs-toggle="tab" 
           href="#AppIntShortSpotStrCat1"
           id="AppIntShortSpotStrCat1_tab"
           role="tab" 
           aria-selected="true">New</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#AppIntShortSpotStrCat2"
           id="AppIntShortSpotStrCat2_tab"
           role="tab" 
           aria-selected="false">Migration</a>
    </li>
    </ul>

<div class="tab-content">
<div class="tab-pane show active" id="AppIntShortSpotStrCat1" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment regarding the creation of a new string catalog" href="https://developer.apple.com/videos/play/wwdc2023/10102/?time=1156">🎬</a>

Creating a new file from your app in `Xcode` gives rise to the opportunity of building some localized files based on the `String`&nbsp;`Catalog` format.
![](../../../../../images/iOSdev/wwdc23-AppIntShortSpot_35.png)
</div>

<div class="tab-pane" id="AppIntShortSpotStrCat2" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment regarding the migration to the new string catalog" href="https://developer.apple.com/videos/play/wwdc2023/10102/?time=1185">🎬</a>

If the `App`&nbsp;`Shortcuts` is already integrated, it's quite easy to migrate the `AppShortcuts.strings` file to `String`&nbsp;`Catalog`.
![](../../../../../images/iOSdev/wwdc23-AppIntShortSpot_36.png)
</div>
</div>
</br>
</br>

### [Tips&nbsp;&&nbsp;tricks](https://developer.apple.com/videos/play/wwdc2023/10102/?time=1220)
![](../../../../../images/iOSdev/wwdc23-AppIntShortSpot_38.png)

It's essential to keep in mind the `App`&nbsp;`Shortcuts`' [limitations](https://developer.apple.com/videos/play/wwdc2023/10102/?time=1258) that could lessen the impact of `Siri`.

![](../../../../../images/iOSdev/wwdc23-AppIntShortSpot_39.png)

</br>

### Results&nbsp;across&nbsp;devices
<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item" role="presentation">
        <a class="nav-link active"
           data-bs-toggle="tab" 
           href="#AppIntShortSpotDevices1"
           id="AppIntShortSpotDevices1_tab"
           role="tab" 
           aria-selected="true">Apple&nbsp;Watch</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#AppIntShortSpotDevices2"
           id="AppIntShortSpotDevices2_tab"
           role="tab" 
           aria-selected="false">HomePod</a>
    </li>
    </ul>

<div class="tab-content">
<div class="tab-pane show active" id="AppIntShortSpotDevices1" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment regarding the behavior with the apple watch" href="https://developer.apple.com/videos/play/wwdc2023/10102/?time=1325">🎬</a>

![](../../../../../images/iOSdev/wwdc23-AppIntShortSpot_40.png)
</div>

<div class="tab-pane" id="AppIntShortSpotDevices2" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment regarding the behavior with the homepod" href="https://developer.apple.com/videos/play/wwdc2023/10102/?time=1373">🎬</a>

![](../../../../../images/iOSdev/wwdc23-AppIntShortSpot_41.png)
</div>
</div>
</br>

## App&nbsp;Intents
`App intents` are made to expose an app’s capabilities to the system through actions that need the `AppIntent` protocol approval for their creations and the `App Shortcuts` with `Siri` to be highlighted.

### Widgets
The **widget [configuration](https://developer.apple.com/videos/play/wwdc2023/10103/?time=69)** provides more customization for the user programatically inserted inside the [`Widget` extension code](https://developer.apple.com/videos/play/wwdc2023/10103/?time=106).

![](../../../../../images/iOSdev/wwdc23-AppIntShortSpot_48.png)

**[Migrate](https://developer.apple.com/videos/play/wwdc2023/10103/?time=233)** the existing widgets from `SiriKit` to `App Intents` becomes easier thanks to `Xcode`&nbsp;`15`.

![](../../../../../images/iOSdev/wwdc23-AppIntShortSpot_49.png)

The widget **[interactivity](https://developer.apple.com/videos/play/wwdc2023/10103/?time=341)** is highly improved by the buttons and toggles whose actions can be fired through this interface.

![](../../../../../images/iOSdev/wwdc23-AppIntShortSpot_50.png)

</br>Advanced techniques for configuration also come in with `iOS`&nbsp;`17`.

<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item" role="presentation">
        <a class="nav-link active"
           data-bs-toggle="tab" 
           href="#AppIntWidgetsAdvTech1"
           id="AppIntWidgetsAdvTech1_tab"
           role="tab" 
           aria-selected="true">Dynamic&nbsp;options</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#AppIntWidgetsAdvTech2"
           id="AppIntWidgetsAdvTech2_tab"
           role="tab" 
           aria-selected="false">Array&nbsp;size</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#AppIntWidgetsAdvTech3"
           id="AppIntWidgetsAdvTech3_tab"
           role="tab" 
           aria-selected="false">Smooth&nbsp;user&nbsp;activity</a>
    </li>
    </ul>

<div class="tab-content">
<div class="tab-pane show active" id="AppIntWidgetsAdvTech1" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment regarding the dynamic options" href="https://developer.apple.com/videos/play/wwdc2023/10103/?time=479">🎬</a>

Aimed at accessing the parameters from the `Intents`, the **dynamic options** interface comes in with a new **IntentParameterDependency** property wrapper that can be used within `DynamicOptionsProvider` or `Query`. 

![](../../../../../images/iOSdev/wwdc23-AppIntShortSpot_51.png)

This dependency might also rely on [multiple parameters](https://developer.apple.com/videos/play/wwdc2023/10103/?time=604).
</div>

<div class="tab-pane" id="AppIntWidgetsAdvTech2" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment regarding the array size" href="https://developer.apple.com/videos/play/wwdc2023/10103/?time=650">🎬</a>

Define an **array size** during declaration is now possible while refining which one of these parameters should be displayed according to some conditions.

![](../../../../../images/iOSdev/wwdc23-AppIntShortSpot_52.png)
</div>

<div class="tab-pane" id="AppIntWidgetsAdvTech3" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment regarding how to continue the user activity" href="https://developer.apple.com/videos/play/wwdc2023/10103/?time=765">🎬</a>

The action to be performed when a tap occurs on the widget relies on the **widgetConfigurationIntent** method call on the user activity to reach the associated configuration `Intent` and navigate through the app as desired.

![](../../../../../images/iOSdev/wwdc23-AppIntShortSpot_53.png)

Note that the new **[RelevantContext](https://developer.apple.com/videos/play/wwdc2023/10103/?time=812)** type that specifies conditions for relevance regarding the `Widget` suggestions is the way to follow to optimize the widgets' `Smart Stacks`.
</div>
</div>
</br>
</br>

### Developer&nbsp;experience
The **[framework support](https://developer.apple.com/videos/play/wwdc2023/10103/?time=890)** has been enhanced to become more flexible through the new **AppIntentsPackage** protocol to make app intent declarations directly available with the framework.

![](../../../../../images/iOSdev/wwdc23-AppIntShortSpot_54.png)

</br>Instead of defining the `App Shortcuts` in the main app bundle, it's now possible to create an **[AppShortcutsProvider](https://developer.apple.com/videos/play/wwdc2023/10103/?time=1047)** and define `App Shortcuts` in the `App Intents` extensions thus avoiding to launch the app in the background when its `App Shortcut` is running.

![](../../../../../images/iOSdev/wwdc23-AppIntShortSpot_55.png)

The hereabove enhancements are based on the process of data **[static&nbsp;extraction](https://developer.apple.com/videos/play/wwdc2023/10103/?time=1088)** that has been improved in `Xcode`&nbsp;`15` to keep on executing an `Intent` in the app even if it was initially started in background.

![](../../../../../images/iOSdev/wwdc23-AppIntShortSpot_59.png)

</br>Besides the **[support&nbsp;for&nbsp;Apple&nbsp;Pay](https://developer.apple.com/videos/play/wwdc2023/10103/?time=1310)**, two `iOS`&nbsp;`17` significant improvements have been inserted into `App Intents`.
![](../../../../../images/iOSdev/wwdc23-AppIntShortSpot_58.png)
<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item" role="presentation">
        <a class="nav-link active"
           data-bs-toggle="tab" 
           href="#AppIntShortSpotImp1"
           id="AppIntShortSpotImp1_tab"
           role="tab" 
           aria-selected="true">ForegroundContinuableIntent</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#AppIntShortSpotImp2"
           id="AppIntShortSpotImp2_tab"
           role="tab" 
           aria-selected="false">RequestToContinueInForeground</a>
    </li>
    </ul>

<div class="tab-content">
<div class="tab-pane show active" id="AppIntShortSpotImp1" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment regarding the ForegroundContinuableIntent protocol" href="https://developer.apple.com/videos/play/wwdc2023/10103/?time=1151">🎬</a>

The **ForegroundContinuableIntent** protocol is the way to follow if it's necessary to keep on executing an `Intent` in the foreground while it was started in the background.

![](../../../../../images/iOSdev/wwdc23-AppIntShortSpot_56.png)

The **needsToContinueInForegroundError** method should be used when it's required to **stop the `Intent` execution** and to perform an action to carry on in the foreground.
</div>

<div class="tab-pane" id="AppIntShortSpotImp2" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment regarding the requestToContinueInForeground method" href="https://developer.apple.com/videos/play/wwdc2023/10103/?time=1233">🎬</a>

As an instance method of the `ForegroundContinuableIntent` protocol, the **requestToContinueInForeground** should be used when it's asked to the user to continue execution in the foreground without stopping the `Intent` execution.

![](../../../../../images/iOSdev/wwdc23-AppIntShortSpot_57.png)
</div>
</div>
</br>
</br>

### [Shortcuts&nbsp;app&nbsp;integration](https://developer.apple.com/videos/play/wwdc2023/10103/?time=1351)
![](../../../../../images/iOSdev/wwdc23-AppIntShortSpot_47.png)
 As the foundation to make an app's functionality revealed through `Siri` and `App Shortcuts`, the **`App Intents` usage** relies on the following good practice:

1. It's important to get into the habit of using the **[parameter&nbsp;summary](https://developer.apple.com/videos/play/wwdc2023/10103/?time=1414)** to expose clearer information to the user.

![](../../../../../images/iOSdev/wwdc23-AppIntShortSpot_42.png)

When `App Intents` should be used in specific circumstances and not opened to the whole app, using the **[isDiscoverable](https://developer.apple.com/videos/play/wwdc2023/10103/?time=1437)** type property is appropriate if it deals with a **widget** or a **button** in a `SwiftUI` app.
Introduced in `iOS`&nbsp;`17` as a boolean value, the goal of this element is to determine whether `Shortcuts` and `Spotlight` can **discover an app intent**.

2. The **[ProgressReportingIntent](https://developer.apple.com/videos/play/wwdc2023/10103/?time=1500)** protocol has been introduced in order to **report progress to the system during its execution**.

![](../../../../../images/iOSdev/wwdc23-AppIntShortSpot_43.png)

3. The **[EnumerableEntityQuery](https://developer.apple.com/videos/play/wwdc2023/10103/?time=1542)** protocol now supersedes the `EntityPropertyQuery` protocol introduced in `iOS`&nbsp;`16` for a simpler and a more scalable search usage even if special attention should be paid to some [significant&nbsp;cases](https://developer.apple.com/videos/play/wwdc2023/10103/?time=1631).

![](../../../../../images/iOSdev/wwdc23-AppIntShortSpot_44.png)

4. A new **[resultValueName](https://developer.apple.com/videos/play/wwdc2023/10103/?time=1654)** property has been added to the `IntentDescription` structure so as to be displayed in the `Shortcuts` editor as a variable output for instance.

![](../../../../../images/iOSdev/wwdc23-AppIntShortSpot_45.png)

5. `iOS`&nbsp;`17` provides the opportunity to add an **[Intent description](https://developer.apple.com/videos/play/wwdc2023/10103/?time=1707)** for the `Find actions` whatever the query protocol.

![](../../../../../images/iOSdev/wwdc23-AppIntShortSpot_46.png)
</br>

