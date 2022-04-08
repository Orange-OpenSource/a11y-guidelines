---
title : "DocC documentation in Xcode"
abstract: ""

displayToc: true
---

# WWDC 2021: DocC documentation in Xcode
Find hereafter a detailed summary of four videos that belong to a [taxonomy&nbsp;of&nbsp;some&nbsp;WWDC&nbsp;footages](../../).

The original videos are available on the **official Apple website** ([session&nbsp;10166](https://developer.apple.com/videos/play/wwdc2021/10166/), [session&nbsp;10167](https://developer.apple.com/videos/play/wwdc2021/10167/), [session&nbsp;10235](https://developer.apple.com/videos/play/wwdc2021/10235/) and [session&nbsp;10236](https://developer.apple.com/videos/play/wwdc2021/10236/)).

![](../../../../../images/iOSdev/wwdc21-docC.png)

"Discover how you can **use DocC** to build and **share documentation** for Swift packages and frameworks. We'll show you how to begin **generating documentation** from your own code — or from third-party code you depend upon — and write and format it using **Markdown**. And we'll also take you through the **export process**, helping you generate DocC archives to share with the public."
</br>"Great documentation can help people effectively and easily adopt your Swift framework. Discover how you can **create rich, conceptual articles** to accompany your API. You'll learn **best practices** for writing articles, including how to structure your documentation, and find out how to create automatically managed links that connect your docs together."
</br>"Discover how you can author immersive **tutorials from scratch** with DocC. We'll demonstrate how you can bring together rich instructions, example code, and images through the DocC syntax to showcase your Swift framework in action. And we'll go over how to create progressive training that can provide interactive learning opportunities and help people better understand use cases for your framework."
</br>"Find out how you can easily **host** your Swift package and framework DocC documentation **online**. We'll take you through configuring your **web server** to host your generated DocC archives, and help you learn to use the xcodebuild tool to **automate documentation generation** and keep your **web content synchronized and up to date**."
</br>
The various contents of this speech are indicated hereunder:
- [Introduction](#introduction)

- [Reference&nbsp;type](#reference-type)

- [Articles&nbsp;type](#articles-type)

- [Tutorials&nbsp;type](#tutorials-type)

- [Hosting&nbsp;&&nbsp;sharing](#sharing)

</br>Most of the illustrations are parts of the Apple presentations and may be available at the `Resources` section inside the `Overview` sheet of each video.
</br>Hereafter, the underlined elements lead directly to the playback of the WWDC video at the appropriate moment.
</br>
## Introduction

![](../../../../../images/iOSdev/wwdc21-docC-Intro_1.png)

[DocC](https://developer.apple.com/videos/play/wwdc2021/10166/?time=121) is an **integrated documentation environment** that enables Xcode to realize many useful new actions regarding the documentation **for Swift packages and frameworks**.

![](../../../../../images/iOSdev/wwdc21-docC-Intro_2.png)

### [Documentation&nbsp;Catalog](https://developer.apple.com/videos/play/wwdc2021/10167/?time=75)
This **Xcode&nbsp;13 new feature** enables the creation of three different new elements, the **documentation&nbsp;page&nbsp;types** defined below, that ease and highlight the documentation information to be revealed as well on the documentation window as on the web.

<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item" role="presentation">
        <a class="nav-link active"
           data-bs-toggle="tab" 
           href="#IntroReference"
           id="IntroReference_tab"
           role="tab" 
           aria-selected="true">Reference</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#IntroArticles"
           id="IntroArticles_tab"
           role="tab" 
           aria-selected="false">Articles</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#IntroTutorials"
           id="IntroTutorials_tab"
           role="tab" 
           aria-selected="false">Tutorials</a>
    </li>
</ul>

<div class="tab-content">
<div class="tab-pane show active" id="IntroReference" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment." href="https://developer.apple.com/videos/play/wwdc2021/10167/?time=97">🎬</a>
![](../../../../../images/iOSdev/wwdc21-docC-IntroReference.png)
</div>

<div class="tab-pane" id="IntroArticles" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment." href="https://developer.apple.com/videos/play/wwdc2021/10167/?time=114">🎬</a>
![](../../../../../images/iOSdev/wwdc21-docC-IntroArticles.png)

</div>

<div class="tab-pane" id="IntroTutorials" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment." href="https://developer.apple.com/videos/play/wwdc2021/10167/?time=130">🎬</a>
![](../../../../../images/iOSdev/wwdc21-docC-IntroTutorials.png)
</div>
</div>
</br>

Creating this element is the<button class="btn btn-link" onclick="tabPanelFocus('ArticlesMandatoryStep_tab','ArticlesMandatoryStep')">first&nbsp;step</button> to **embedding any documentation**.
</br></br>

### Documentation&nbsp;build
<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item" role="presentation">
        <a class="nav-link active"
           data-bs-toggle="tab" 
           href="#DocBuildOverview"
           id="DocBuildOverview_tab"
           role="tab" 
           aria-selected="true">Overview</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#DocBuildOnDemand"
           id="DocBuildOnDemand_tab"
           role="tab" 
           aria-selected="false">On&nbsp;demand</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#DocBuildAutomation"
           id="DocBuildAutomation_tab"
           role="tab" 
           aria-selected="false">Automation</a>
    </li>
</ul>

<div class="tab-content">
<div class="tab-pane show active" id="DocBuildOverview" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment." href="https://developer.apple.com/videos/play/wwdc2021/10166/?time=281">🎬</a>
![](../../../../../images/iOSdev/wwdc21-docC-IntroDocBuildOverview.png)
</div>

<div class="tab-pane" id="DocBuildOnDemand" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment." href="https://developer.apple.com/videos/play/wwdc2021/10166/?time=347">🎬</a> 

Xcode&nbsp;13 introduced a **new Xcode menu item** and a **new build setting** that permit a direct building of the documentation when compiling.

![](../../../../../images/iOSdev/wwdc21-docC-IntroDocBuildOnDemand.png)

</div>

<div class="tab-pane" id="DocBuildAutomation" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment." href="https://developer.apple.com/videos/play/wwdc2021/10166/?time=366">🎬</a> 

Besides the **new xcodebuild command**, many other useful information regarding automation for documentation are also available in the [sharing&nbsp;section](#sharing).
![](../../../../../images/iOSdev/wwdc21-docC-IntroDocBuildAutomation.png)
</div>
</div>
</br></br>

## Reference&nbsp;type

This page type is a crucial element in documentation because it aims at providing **precise information** about every piece of code that must be pointed out.
![](../../../../../images/iOSdev/wwdc21-docC-IntroReference.png)

[Easy&nbsp;to&nbsp;consult](https://developer.apple.com/videos/play/wwdc2021/10166/?time=413) in the Xcode Documentation window, it allows to **add descriptions**, **code snippets** and relationships between different symbols that the following tips and tricks highlight:

1. Simple line for the **summary** part ⟹&nbsp;<a alt="Click to playback the footage at the appropriate time" href="https://developer.apple.com/videos/play/wwdc2021/10166/?time=587">🎬</a>

2. **Discussion** part with a block syntax ⟹&nbsp;<a alt="Click to playback the footage at the appropriate time" href="https://developer.apple.com/videos/play/wwdc2021/10166/?time=701">🎬</a>

3. Quick peek to the documentation from the code and next straight to the **documentation window** from this location ⟹&nbsp;<a alt="Click to playback the footage at the appropriate time" href="https://developer.apple.com/videos/play/wwdc2021/10166/?time=755">🎬</a>

4. Method with **multiple parameters** ⟹&nbsp;<a alt="Click to playback the footage at the appropriate time" href="https://developer.apple.com/videos/play/wwdc2021/10166/?time=821">🎬</a>

5. **Link** to another page of information ⟹&nbsp;<a alt="Click to playback the footage at the appropriate time" href="https://developer.apple.com/videos/play/wwdc2021/10166/?time=1020">🎬</a>
 
<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item" role="presentation">
        <a class="nav-link active"
           data-bs-toggle="tab" 
           href="#ReferenceType1"
           id="ReferenceType1_tab"
           role="tab" 
           aria-selected="true">1</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#ReferenceType2"
           id="ReferenceType2_tab"
           role="tab" 
           aria-selected="false">2</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#ReferenceType3"
           id="ReferenceType3_tab"
           role="tab" 
           aria-selected="false">3</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#ReferenceType4"
           id="ReferenceType4_tab"
           role="tab" 
           aria-selected="false">4</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#ReferenceType5"
           id="ReferenceType5_tab"
           role="tab" 
           aria-selected="false">5</a>
    </li>
</ul>

<div class="tab-content">
<div class="tab-pane show active" id="ReferenceType1" role="tabpanel"> 

![](../../../../../images/iOSdev/wwdc21-docC-Reference_1.png)
</div>
<div class="tab-pane" id="ReferenceType2" role="tabpanel">

![](../../../../../images/iOSdev/wwdc21-docC-Reference_2.png)
</div>
<div class="tab-pane" id="ReferenceType3" role="tabpanel">

![](../../../../../images/iOSdev/wwdc21-docC-Reference_3.png)
</div>
<div class="tab-pane" id="ReferenceType4" role="tabpanel">
Documenting a method may lead to different templates according to the numbers of incoming parameters...
    
![](../../../../../images/iOSdev/wwdc21-docC-Reference_4a.png)

... and using the **[Add&nbsp;Documentation&nbsp;feature](https://developer.apple.com/videos/play/wwdc2021/10166/?time=921)** is definitely the best way to ease and speed up this process.

![](../../../../../images/iOSdev/wwdc21-docC-Reference_4b.png)
</div>
<div class="tab-pane" id="ReferenceType5" role="tabpanel">

![](../../../../../images/iOSdev/wwdc21-docC-Reference_5.png)
</div>
</div>
</br>

Once built, the documentation can also be [exported](https://developer.apple.com/videos/play/wwdc2021/10166/?time=1227).
![](../../../../../images/iOSdev/wwdc21-docC-Reference_6.png)

</br></br>

## Articles&nbsp;type
This page type aims at displaying the overall view of the framework thanks to the **[top-level&nbsp;article](https://developer.apple.com/videos/play/wwdc2021/10167/?time=218)** while providing potential step-by-step explanations of [dedicated&nbsp;tasks](https://developer.apple.com/videos/play/wwdc2021/10167/?time=445).
![](../../../../../images/iOSdev/wwdc21-docC-IntroArticles.png)
<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item" role="presentation">
        <a class="nav-link active"
           data-bs-toggle="tab" 
           href="#ArticlesMandatoryStep"
           id="ArticlesMandatoryStep_tab"
           role="tab" 
           aria-selected="true">Mandatory&nbsp;step</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#ArticlesImages"
           id="ArticlesImages_tab"
           role="tab" 
           aria-selected="false">Images</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#ArticlesStructure"
           id="ArticlesStructure_tab"
           role="tab" 
           aria-selected="false">Structure</a>
    </li>
</ul>

<div class="tab-content">
<div class="tab-pane show active" id="ArticlesMandatoryStep" role="tabpanel">
    
[Setup](https://developer.apple.com/videos/play/wwdc2021/10167/?time=233) the **Document Catalog** that will contain all the page types is the **first thing to handle** before writing any articles.

![](../../../../../images/iOSdev/wwdc21-docC-ArticlesMandatoryStep.png)
</div>

<div class="tab-pane" id="ArticlesImages" role="tabpanel">
    
When dealing with [images&nbsp;in&nbsp;articles](https://developer.apple.com/videos/play/wwdc2021/10167/?time=322), it's highly recommended to provide a **2x resolution Dark Mode-compatible** asset.

![](../../../../../images/iOSdev/wwdc21-docC-ArticlesImages_1.png)

Finally, the images should be [moved](https://developer.apple.com/videos/play/wwdc2021/10167/?time=362) from the `Finder` towards the **`Resources` folder** of the Documentation Catalog to be properly displayed with the appropriate [code&nbsp;writing](https://developer.apple.com/videos/play/wwdc2021/10167/?time=377).

![](../../../../../images/iOSdev/wwdc21-docC-ArticlesImages_2.png)
</div>

<div class="tab-pane" id="ArticlesStructure" role="tabpanel">
    
There are [simple&nbsp;rules](https://developer.apple.com/videos/play/wwdc2021/10167/?time=596) to follow in order to produce a global presentation easy to be understood by everyone at first glance.

![](../../../../../images/iOSdev/wwdc21-docC-ArticlesStructure_1.png)

This organization is setup thanks to a **specific [markdown&nbsp;writing](https://developer.apple.com/videos/play/wwdc2021/10167/?time=779)**.

![](../../../../../images/iOSdev/wwdc21-docC-ArticlesStructure_2.png)

Finally, the use of the documentation [extensions](https://developer.apple.com/videos/play/wwdc2021/10167/?time=836) enables to arrange the contents in distinct files in order to ease the clarity in code.

![](../../../../../images/iOSdev/wwdc21-docC-ArticlesStructure_3.png)

![](../../../../../images/iOSdev/wwdc21-docC-ArticlesStructure_4.png)
</div>
</div>
</br>

![](../../../../../images/iOSdev/wwdc21-docC-ArticlesWrapUp.png)
</br>

## [Tutorials&nbsp;type]()
The goal of this page type is to ease the understanding of the framework contents thanks to step by step explanations.
![](../../../../../images/iOSdev/wwdc21-docC-IntroTutorials.png)

<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item" role="presentation">
        <a class="nav-link active"
           data-bs-toggle="tab" 
           href="#TutorialsOverview"
           id="TutorialsOverview_tab"
           role="tab" 
           aria-selected="true">Overview</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#TutorialsToC"
           id="TutorialsToC_tab"
           role="tab" 
           aria-selected="false">Table&nbsp;of&nbsp;contents</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#TutorialsPage"
           id="TutorialsPage_tab"
           role="tab" 
           aria-selected="false">Page</a>
    </li>
</ul>

<div class="tab-content">
<div class="tab-pane show active" id="TutorialsOverview" role="tabpanel">

The characteristic of the tutorials type is its [text writing](https://developer.apple.com/videos/play/wwdc2021/10235/?time=122) that relies on a specific syntax using **directives with markdown** recognized as dedicated markers by DocC.

![](../../../../../images/iOSdev/wwdc21-docC-TutorialsOverview.png)
</div>

<div class="tab-pane" id="TutorialsToC" role="tabpanel">

[This&nbsp;element](https://developer.apple.com/videos/play/wwdc2021/10235/?time=265) is crucial both for **compiling** the tutorials but also for **introducing** them through **dedicated directives** regarding the [introduction](https://developer.apple.com/videos/play/wwdc2021/10235/?time=282), the [chapters](https://developer.apple.com/videos/play/wwdc2021/10235/?time=311) and the [links](https://developer.apple.com/videos/play/wwdc2021/10235/?time=327) firstly.

![](../../../../../images/iOSdev/wwdc21-docC-TutorialsToC.png)
</div>

<div class="tab-pane" id="TutorialsPage" role="tabpanel">

A tutorial page includes **required directives** like the [Intro](https://developer.apple.com/videos/play/wwdc2021/10235/?time=341) and the [Section](https://developer.apple.com/videos/play/wwdc2021/10235/?time=372) with an **optional** one ([Steps](https://developer.apple.com/videos/play/wwdc2021/10235/?time=386)) to render a complete structure of easy-to-understand elements.

![](../../../../../images/iOSdev/wwdc21-docC-TutorialsPage.png)
</div>
</div>
</br></br>

### Arrangement

In order to provide the **best user experience**, it's crucial to expose the APIs as pedagogically as possible:

1. **[Sorting](https://developer.apple.com/videos/play/wwdc2021/10235/?time=435)** in importance descending order.

2. **[Grouping](https://developer.apple.com/videos/play/wwdc2021/10235/?time=458)** by functional domain.

3. **[Designing](https://developer.apple.com/videos/play/wwdc2021/10235/?time=559)** in such a way that everything is clearly and undoubtedly exposed to everyone.


![](../../../../../images/iOSdev/wwdc21-docC-TutorialsArrangement.png)
### Example

This part contains the **different steps** to follow in order to **implement completely a tutorial** by applying the notions previously introduced and assuming that the table of contents is [already&nbsp;created](https://developer.apple.com/videos/play/wwdc2021/10235/?time=676) in the dedicated folder:

1. Create the basis of the tutorial ⟹&nbsp;<a alt="Click to playback the footage at the appropriate time" href="https://developer.apple.com/videos/play/wwdc2021/10235/?time=695">🎬</a>

- Import the images in the `Resources` folder ⟹&nbsp;<a alt="Click to playback the footage at the appropriate time" href="https://developer.apple.com/videos/play/wwdc2021/10235/?time=749">🎬</a>

2. Link an image to its source and author its accessible label ⟹&nbsp;<a alt="Click to playback the footage at the appropriate time" href="https://developer.apple.com/videos/play/wwdc2021/10235/?time=780">🎬</a>

- Complete the first items of the section part ⟹&nbsp;<a alt="Click to playback the footage at the appropriate time" href="https://developer.apple.com/videos/play/wwdc2021/10235/?time=850">🎬</a>

- Fill in the steps including Dark Mode-compatible images ⟹&nbsp;<a alt="Click to playback the footage at the appropriate time" href="https://developer.apple.com/videos/play/wwdc2021/10235/?time=893">🎬</a>

- Build the documentation and browse through the navigator to preview the created elements ⟹&nbsp;<a alt="Click to playback the footage at the appropriate time" href="https://developer.apple.com/videos/play/wwdc2021/10235/?time=966">🎬</a>

3. Understand every element composing a `Step` directive with coding instructions ⟹&nbsp;<a alt="Click to playback the footage at the appropriate time" href="https://developer.apple.com/videos/play/wwdc2021/10235/?time=1097">🎬</a>

- Import many tutorials already being prepared and link them in the table of contents ⟹&nbsp;<a alt="Click to playback the footage at the appropriate time" href="https://developer.apple.com/videos/play/wwdc2021/10235/?time=1186">🎬</a>
</br>
<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item" role="presentation">
        <a class="nav-link active"
           data-bs-toggle="tab" 
           href="#TutorialsExample1"
           id="TutorialsExample1_tab"
           role="tab" 
           aria-selected="true">1</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#TutorialsExample2"
           id="TutorialsExample2_tab"
           role="tab" 
           aria-selected="false">2</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#TutorialsExample3"
           id="TutorialsExample3_tab"
           role="tab" 
           aria-selected="false">3</a>
    </li>
</ul>

<div class="tab-content">
<div class="tab-pane show active" id="TutorialsExample1" role="tabpanel">
    
![](../../../../../images/iOSdev/wwdc21-docC-TutorialsExample_1.png)
</div>

<div class="tab-pane" id="TutorialsExample2" role="tabpanel">
    
![](../../../../../images/iOSdev/wwdc21-docC-TutorialsExample_2.png)
</div>

<div class="tab-pane" id="TutorialsExample3" role="tabpanel">
    
The changes in code are **automatically pointed out by Xcode** in order to have a straight visual on the modifications provided by the displayed portion of code.
An **image** may be also shown up as a **preview** of the highlighted lines of code.

![](../../../../../images/iOSdev/wwdc21-docC-TutorialsExample_3.png)
</div>
</div>
</br></br>

## Sharing
The [documentation&nbsp;archive](https://developer.apple.com/videos/play/wwdc2021/10236/?time=135) is a container including necessary information that renders the documentation directly through Xcode or online.
![](../../../../../images/iOSdev/wwdc21-docC-Sharing.png)
### [Hosting](https://developer.apple.com/videos/play/wwdc2021/10236/?time=194)
![](../../../../../images/iOSdev/wwdc21-docC-Hosting_1.png)
![](../../../../../images/iOSdev/wwdc21-docC-Hosting_2.png)

The `.htaccess` file must be completed with some [routing&nbsp;rules](https://developer.apple.com/videos/play/wwdc2021/10236/?time=266) to allow a perfect access to the documentation archive copied into the directory.
![](../../../../../images/iOSdev/wwdc21-docC-Hosting_3.png)

### [Automating](https://developer.apple.com/videos/play/wwdc2021/10236/?time=426)
Creating scripts with command lines using `xcodebuid` is the way to follow to keep a hosted documentation automatically updated when changes occur.

The new [docbuild&nbsp;action](https://developer.apple.com/videos/play/wwdc2021/10236/?time=558) concomitantly used with the `xcodebuid` command permits to **build documentation through the command lines**.

![](../../../../../images/iOSdev/wwdc21-docC-Automating_1.png)

[Author&nbsp;scripts](https://developer.apple.com/videos/play/wwdc2021/10236/?time=654) with this new command line will enhance the user experience regarding the documentation while significantly easing its update.

![](../../../../../images/iOSdev/wwdc21-docC-Automating_2.png)

</br></br></br>