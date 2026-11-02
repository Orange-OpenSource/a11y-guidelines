---
title : "Develop with Xcode 14"
abstract: "Learn everything about the Developer Mode and the build for multiple Apple platforms."

displayToc: true
---

# WWDC 2022: Develop with Xcode&nbsp;14
Find hereafter a detailed summary of two videos that belong to a [taxonomy&nbsp;of&nbsp;some&nbsp;WWDC&nbsp;footages](../../).

The original videos are available on the **official Apple website** ([session&nbsp;110344](https://developer.apple.com/videos/play/wwdc2022//110344/), [session&nbsp;110371](https://developer.apple.com/videos/play/wwdc2022//110371/)).

![](../../../../../images/iOSdev/wwdc22-DevXcode.png)

"Meet **Developer Mode** — required on iOS 16, iPadOS 16, and watchOS 9 to install, run, and debug your apps during development. We'll show you how you to **opt in** to Developer Mode on your devices, and how to **enable** Developer Mode in your automation workflows."

"Learn how you can **build apps for multiple Apple platforms using Xcode 14**. We'll show you how to streamline app targets, maintain a common codebase, and share settings by default. We'll also explore how you can **customize your app for each platform through conditionalizing your settings and code**.

</br>Most of the illustrations are parts of the Apple presentations and may be available at the `Resources` section inside the `Overview` sheet of each video.
</br>Hereafter, the underlined elements lead directly to the playback of the WWDC video at the appropriate moment.
</br>

## Developer&nbsp;Mode
<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item" role="presentation">
        <a class="nav-link active"
           data-bs-toggle="tab" 
           href="#DevModeWhat"
           id="DevModeWhat_tab"
           role="tab" 
           aria-selected="true">Definition&nbsp;&&nbsp;goal</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#DevModeContext"
           id="DevModeContext_tab"
           role="tab" 
           aria-selected="false">Context</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#DevModeActivation"
           id="DevModeActivation_tab"
           role="tab" 
           aria-selected="false">Activation&nbsp;milestones</a>
    </li>
    </ul>

<div class="tab-content">
<div class="tab-pane show active" id="DevModeWhat" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment." href="https://developer.apple.com/videos/play/wwdc2022/110344/?time=49">🎬</a>

![](../../../../../images/iOSdev/wwdc22-DevXcode-DevModeDefinition.png)
</div>

<div class="tab-pane" id="DevModeContext" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment." href="https://developer.apple.com/videos/play/wwdc2022/110344/?time=127">🎬</a>

Once the mode's goal is obviously known, it becomes crucial to find out what the most appropriate situations are to turn this mode on.

![](../../../../../images/iOSdev/wwdc22-DevXcode-DevModeContext.png)
</div>

<div class="tab-pane" id="DevModeActivation" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment." href="https://developer.apple.com/videos/play/wwdc2022/110344/?time=143">🎬</a>
![](../../../../../images/iOSdev/wwdc22-DevXcode-DevModeActivation_1.png)

Some [simple&nbsp;actions](https://developer.apple.com/videos/play/wwdc2022/110344/?time=180) must be performed **before using a single device with Xcode**.

![](../../../../../images/iOSdev/wwdc22-DevXcode-DevModeActivation_2.png)

The same process may be automated **for many devices at the same time** but with [one&nbsp;restriction](https://developer.apple.com/videos/play/wwdc2022/110344/?time=239) though.

![](../../../../../images/iOSdev/wwdc22-DevXcode-DevModeActivation_3.png)
</div>
</div>
</br></br>

The arrival of the new macOS goes with an **[extra&nbsp;streaming&nbsp;subcommand](https://developer.apple.com/videos/play/wwdc2022/110344/?time=261)** that highly facilitates this `Developer`&nbsp;`Mode` activation for a large fleet of devices.
![](../../../../../images/iOSdev/wwdc22-DevXcode-DevModeSubcommand.png)
</br>

## Multiplatform&nbsp;development
While various targets are mandatory in a multiple platforms project using Xcode&nbsp;13, **one single target** may be defined to [reach&nbsp;this&nbsp;same&nbsp;goal](https://developer.apple.com/videos/play/wwdc2022/110371?time=63) **with Xcode&nbsp;14**. 
![](../../../../../images/iOSdev/wwdc22-DevXcode-Multi.png)

### [Configuration](https://developer.apple.com/videos/play/wwdc2022/110371?time=106)
The enhanced multiplatform app template contains **many possible destinations** when creating an app and relies on the SwiftUI for its lifecycle and interface ⟹ see [this&nbsp;example](https://developer.apple.com/videos/play/wwdc2022/110371?time=152) for adding a Mac destination to an existing iOS app.
![](../../../../../images/iOSdev/wwdc22-DevXcode-MultiConfiguration_1.png)

[Customizing](https://developer.apple.com/videos/play/wwdc2022/110371?time=345) some individual settings is now offered by **conditionalizing some of its values**.
![](../../../../../images/iOSdev/wwdc22-DevXcode-MultiConfiguration_2.png)

Regarding the [`Signing`&nbsp;`&`&nbsp;`Capabilities`&nbsp;tab](https://developer.apple.com/videos/play/wwdc2022/110371?time=396), the `Signing Certificate and Provisioning Profile` for the different destinations are automatically handled by Xcode... like the [push&nbsp;notifications](https://developer.apple.com/videos/play/wwdc2022/110371?time=431) among other things.
</br>

### Build&nbsp;issues&nbsp;resolution
The common build issues lie in the **framework and API availability** with the different destinations.
However, there are few ways to efficiently unravel this kind of problems:
- Some SDKs features may be used only in some code parts thanks to **[Swift](https://developer.apple.com/videos/play/wwdc2022/110371?time=520)** and **[SwiftUI](https://developer.apple.com/videos/play/wwdc2022/110371?time=575)**.
![](../../../../../images/iOSdev/wwdc22-DevXcode-MultiBuildIssues_1.png)

- Specific files may be compiled only for some SDKs during the **Xcode building**⟹&nbsp;<a alt="Click to playback the footage at the appropriate time" href="https://developer.apple.com/videos/play/wwdc2022/110371?time=547">🎬</a>
![](../../../../../images/iOSdev/wwdc22-DevXcode-MultiBuildIssues_2.png)

### OS&nbsp;refinings
A tip for [adapting&nbsp;a&nbsp;constant](https://developer.apple.com/videos/play/wwdc2022/110371/?time=657) to the platform's expectations leans on making this constant a computed property.

![](../../../../../images/iOSdev/wwdc22-DevXcode-MultiOSRefinings_1.png)

For the Mac users, a quick peek at the app content from the menu bar icon through a [dedicated&nbsp;window](https://developer.apple.com/videos/play/wwdc2022/110371/?time=741) is possible and easy to set up.

![](../../../../../images/iOSdev/wwdc22-DevXcode-MultiOSRefinings_2.png)
</br>

### [App&nbsp;publishing](https://developer.apple.com/videos/play/wwdc2022/110371/?time=826)
`Xcode` and `Xcode`&nbsp;`Cloud` are efficient ways for archiving and uploading the app products to `App`&nbsp;`Store`&nbsp;`Connect`.
<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item" role="presentation">
        <a class="nav-link active"
           data-bs-toggle="tab" 
           href="#MultiPlatformAppPublishingXcode"
           id="MultiPlatformAppPublishingXcode_tab"
           role="tab" 
           aria-selected="true">Xcode</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#MultiPlatformAppPublishingXcodeCloud"
           id="MultiPlatformAppPublishingXcodeCloud_tab"
           role="tab" 
           aria-selected="false">Xcode&nbsp;Cloud</a>
    </li>
    </ul>

<div class="tab-content">
<div class="tab-pane show active" id="MultiPlatformAppPublishingXcode" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment." href="https://developer.apple.com/videos/play/wwdc2022/110371/?time=855">🎬</a>

If done locally, some milestones should be followed **for each platform**:
1. Select the destination.
![](../../../../../images/iOSdev/wwdc22-DevXcode-MultiPublishXcode_1.png)

2. Create the appropriate archive through the `Product`-`Archive` menu.
![](../../../../../images/iOSdev/wwdc22-DevXcode-MultiPublishXcode_2.png)

3. Upload the archives to `App`&nbsp;`Store`&nbsp;`Connect` by means of the `Organizer`&nbsp;`window`.
![](../../../../../images/iOSdev/wwdc22-DevXcode-MultiPublishXcode_3.png)
</div>

<div class="tab-pane" id="MultiPlatformAppPublishingXcodeCloud" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment." href="https://developer.apple.com/videos/play/wwdc2022/110371/?time=885">🎬</a>

![](../../../../../images/iOSdev/wwdc22-DevXcode-MultiXcodeCloud.png)
</div>
</div>
</br></br>


