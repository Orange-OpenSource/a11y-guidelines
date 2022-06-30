---
title : "SwiftDocC and Xcode 14"
abstract: "Learn how you can write and share documentation for your projects."

displayToc: true
---

# WWDC 2022: Swift-DocC and Xcode&nbsp;14
Find hereafter a detailed summary of two videos that belong to a [taxonomy&nbsp;of&nbsp;some&nbsp;WWDC&nbsp;footages](../../).

The original videos are available on the **official Apple website** ([session&nbsp;110368](https://developer.apple.com/videos/play/wwdc2022//110368/), [session&nbsp;110369](https://developer.apple.com/videos/play/wwdc2022//110369/)).

![](../../../../../images/iOSdev/wwdc22-DocCXcode14.png)

"Join us for an exciting **update on Swift-DocC** and learn how you can **write and share documentation** for your own projects. We'll explore improvements to Swift-DocC navigation and share how you can **compile documentation** for application targets and Objective-C code. We'll also show you how to **publish your content** straight to hosting services like GitHub Pages."

"Explore the navigation experience for **Swift-DocC on the web**. We'll show you how you can **organize and optimize your content** to help guide developers through documentation about your frameworks and applications. We'll also **share enhanced techniques** to help readers browse your documentation with ease."
</br>
The outlines of this speech are indicated hereunder:
- [Writing&nbsp;documentation](#writing-documentation)

- [Authoring&nbsp;improvements](#authoring-improvements)

- [Publishing](#publishing)

- [Browsing](#browsing)

</br>Most of the illustrations are parts of the Apple presentations and may be available at the `Resources` section inside the `Overview` sheet of each video.
</br>Hereafter, the underlined elements lead directly to the playback of the WWDC video at the appropriate moment.
</br>
## [Writing&nbsp;documentation](https://developer.apple.com/videos/play/wwdc2022/110368/?time=123)
Besides the Swift packages, **Swift-DocC can be used for all the app projects** in Xcode&nbsp;14 and the basic steps for authoring a documentation are detailed below to start under the best conditions.
<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item" role="presentation">
        <a class="nav-link active"
           data-bs-toggle="tab" 
           href="#DocCDocumentationStartUp"
           id="DocCDocumentationStartUp_tab"
           role="tab" 
           aria-selected="true">Start-up</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#DocCDocumentationDescription"
           id="DocCDocumentationDescription_tab"
           role="tab" 
           aria-selected="false">Description</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#DocCDocumentationInitializer"
           id="DocCDocumentationInitializer_tab"
           role="tab" 
           aria-selected="false">Initializer</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#DocCDocumentationTopLevelPage"
           id="DocCDocumentationTopLevelPage_tab"
           role="tab" 
           aria-selected="false">Top-level&nbsp;page</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#DocCDocumentationObjC"
           id="DocCDocumentationObjC_tab"
           role="tab" 
           aria-selected="false">ObjC</a>
    </li>
    </ul>

<div class="tab-content">
<div class="tab-pane show active" id="DocCDocumentationStartUp" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment." href="https://developer.apple.com/videos/play/wwdc2022/110368/?time=157">🎬</a>

The Xcode menu is the best way to open a new documentation window and start visualizing the first page of documentation.
![](../../../../../images/iOSdev/wwdc22-DocCXcode14_DocumentationStart.png)
</div>

<div class="tab-pane" id="DocCDocumentationDescription" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment." href="https://developer.apple.com/videos/play/wwdc2022/110368/?time=202">🎬</a>

Explanations and piece of code in the documentation comments must have a specific syntax to describe a view.
![](../../../../../images/iOSdev/wwdc22-DocCXcode14_DocumentationDescription.png)
</div>

<div class="tab-pane" id="DocCDocumentationInitializer" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment." href="https://developer.apple.com/videos/play/wwdc2022/110368/?time=261">🎬</a>

Documenting an initializer follows the same rules as those for describing a view.
![](../../../../../images/iOSdev/wwdc22-DocCXcode14_DocumentationInitializer.png) 
</div>

<div class="tab-pane" id="DocCDocumentationTopLevelPage" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment." href="https://developer.apple.com/videos/play/wwdc2022/110368/?time=364">🎬</a>

The process for creating a top-level page is made up of few steps that give rise to a nice start to a documentation catalog.

![](../../../../../images/iOSdev/wwdc22-DocCXcode14_DocumentationTopLevelPage.png) 

A more [detailed&nbsp;conception](https://developer.apple.com/videos/play/wwdc2022/110369/?time=246) of this page type is also provided to understand the rationale behind and be sure that **every subtle elements are well apprehended**.
</div>

<div class="tab-pane" id="DocCDocumentationObjC" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment." href="https://developer.apple.com/videos/play/wwdc2022/110368/?time=289">🎬</a>

Swift-DocC takes into account **Objective-C** and enables a fast visual transition between the languages through a **native toggle graphic element**.
![](../../../../../images/iOSdev/wwdc22-DocCXcode14_DocumentationObjC.png) 
</div>
</div>
</br>

## [Authoring&nbsp;improvements](https://developer.apple.com/videos/play/wwdc2022/110369/?time=145)
The Swift-DocC's automatic organization is efficient to take a glance at the tutorials, articles, protocols and structures.
However, [three&nbsp;milestones](https://developer.apple.com/videos/play/wwdc2022/110369/?time=199) should be followed to **optimize the content**.

![](../../../../../images/iOSdev/wwdc22-DocCXcode14_Improvements_1.png) 

Besides these elements to be reminded, some other aspects should be mentioned to get the best result:
- Importance of having a topic group title that is **'[clear&nbsp;and&nbsp;descriptive](https://developer.apple.com/videos/play/wwdc2022/110369/?time=485)'**.
- Each and every group titles must be **'[mutually&nbsp;exclusive](https://developer.apple.com/videos/play/wwdc2022/110369/?time=542)'**.
- Using **'[serendipity](https://developer.apple.com/videos/play/wwdc2022/110369/?time=580)'** may be an interesting means of discovery.
    
The progressive implementation of these different items gives rise to an [optimized&nbsp;result](https://developer.apple.com/videos/play/wwdc2022/110369/?time=614) that offers an easy and fluid discovery of the content.

![](../../../../../images/iOSdev/wwdc22-DocCXcode14_Improvements_2.png)
</br>

## [Publishing](https://developer.apple.com/videos/play/wwdc2022/110368/?time=455)
Export the **DocC archive** (built documentation) and readily deploy its contents at the root of a web server is straightforward thanks to its new **compatibility with most web servers**.

![](../../../../../images/iOSdev/wwdc22-DocCXcode14_Publishing_1.png)

A dedicated [base&nbsp;path](https://developer.apple.com/videos/play/wwdc2022/110368/?time=586) may be necessary in some cases and the URL of a DocC archive hosted on a specific domain might have an unusual look.
![](../../../../../images/iOSdev/wwdc22-DocCXcode14_Publishing_2.png)

Xcode introduces a **new [build&nbsp;setting](https://developer.apple.com/videos/play/wwdc2022/110368/?time=665)** for this specific situation...
![](../../../../../images/iOSdev/wwdc22-DocCXcode14_Publishing_3.png)

... and keeps on fostering the **[automating&nbsp;deployments](https://developer.apple.com/videos/play/wwdc2022/110368/?time=843)** by using the `xcodebuild docbuild` command-line interface and the `Swift-DocC` plug-in for Swift packages.
</br>
## Browsing
The new [web&nbsp;navigation](https://developer.apple.com/videos/play/wwdc2022/110369/?time=49) offers a **[sidebar](https://developer.apple.com/videos/play/wwdc2022/110368/?time=893)** that enhances the user experience by keeping the **selections in the hierarchy** while providing an efficient **filter** item to display the researched elements and that has also the capability to take into account some [highlighted&nbsp;tags](https://developer.apple.com/videos/play/wwdc2022/110369/?time=121) (among others) for its requests.
![](../../../../../images/iOSdev/wwdc22-DocCXcode14_Browsing.png)
</br></br>
![](../../../../../images/iOSdev/wwdc22-DocCXcode14_Final.png)