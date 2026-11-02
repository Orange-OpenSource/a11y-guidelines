---
title : "Swift Playgrounds"
abstract: "Learn everything about Swift Playgrounds 4."

displayToc: true
---

# WWDC 2022: Swift Playgrounds
Find hereafter a detailed summary of two videos that belong to a [taxonomy&nbsp;of&nbsp;some&nbsp;WWDC&nbsp;footages](../../).

The original videos are available on the **official Apple website** ([session&nbsp;110348](https://developer.apple.com/videos/play/wwdc2022//110348/), [session&nbsp;110349](https://developer.apple.com/videos/play/wwdc2022//110349/)).

![](../../../../../images/iOSdev/wwdc22-SwiftPlaygrounds.png)

"Learn how you can easily prototype and **build apps with Swift Playgrounds**. We'll show you how to create an app from a blank project, **build its interface with SwiftUI**, and **use Swift Package Manager** to add extra functionality from an open source package. We'll also explore how you can **debug issues** using Previews and the console and take you through **submitting an app to App Store Connect** for distribution via TestFlight."

"Learn how you can **build guided instructional content designed for Swift Playgrounds**. Follow along with us as we explore how you can add a guide to a completed sample code project. We'll demonstrate how to **add tasks** to your learning center to show off **relevant code** and optional **experiment tasks** that encourage learners to extend the project with code of their own."
</br>
The structure of this speech is divided into **two main parts** and its subject matter deals with **Swift Playgrounds 4** that introduced app development on iPad and Mac:
- [Create&nbsp;an&nbsp;app&nbsp;from&nbsp;scratch](#app-from-scratch) including:
    - Using the library and code completion.
    
    - Sharing a project via an `iCloud` folder.
    
    - Using the view previews and the console for debugging.
    
    - Submitting an app to `TestFlight`.
    
- [Build&nbsp;a &nbsp;guided&nbsp;instructional&nbsp;content](#guided-instructional-content) by highlighting the new content features.

</br>Most of the illustrations are parts of the Apple presentations and may be available at the `Resources` section inside the `Overview` sheet of each video.
</br>Hereafter, the underlined elements lead directly to the playback of the WWDC video at the appropriate moment.
</br>

## App&nbsp;from&nbsp;scratch
<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item" role="presentation">
        <a class="nav-link active"
           data-bs-toggle="tab" 
           href="#AppFromScratchSettings"
           id="AppFromScratchSettings_tab"
           role="tab" 
           aria-selected="true">Settings</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#AppFromScratchLibrary"
           id="AppFromScratchLibrary_tab"
           role="tab" 
           aria-selected="false">Library</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#AppFromScratchImportPackages"
           id="AppFromScratchImportPackages_tab"
           role="tab" 
           aria-selected="false">Import&nbsp;packages</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#AppFromScratchDeviceAbility"
           id="AppFromScratchDeviceAbility_tab"
           role="tab" 
           aria-selected="false">Device&nbsp;ability</a>
    </li>
    </ul>

<div class="tab-content">
<div class="tab-pane show active" id="AppFromScratchSettings" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment." href="https://developer.apple.com/videos/play/wwdc2022/110348?time=110">🎬</a>

**Revise some app settings** is possible straight from the sidebar.

![](../../../../../images/iOSdev/wwdc22-SwiftPlaygrounds-AppSettings.png)
</div>

<div class="tab-pane" id="AppFromScratchLibrary" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment." href="https://developer.apple.com/videos/play/wwdc2022/110348?time=152">🎬</a>

**Inserting elements** may be done from the `Library` window... 
![](../../../../../images/iOSdev/wwdc22-SwiftPlaygrounds-AppLibrary_1.png)

... that suggests a variety of snippets for Views, Modifiers, SF Symbols, and Colors.

![](../../../../../images/iOSdev/wwdc22-SwiftPlaygrounds-AppLibrary_2.png)
</div>

<div class="tab-pane" id="AppFromScratchImportPackages" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment." href="https://developer.apple.com/videos/play/wwdc2022/110348?time=222">🎬</a>

**Importing the Swift-collection package** may be a good solution to facilitate the code working.

![](../../../../../images/iOSdev/wwdc22-SwiftPlaygrounds-AppImport.png)
</div>

<div class="tab-pane" id="AppFromScratchDeviceAbility" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment." href="https://developer.apple.com/videos/play/wwdc2022/110348?time=349">🎬</a>

**Implement the use of a specific device capability** inside the app is achieved in no time.

![](../../../../../images/iOSdev/wwdc22-SwiftPlaygrounds-AppDeviceAbility.png)
</div>
</div>
</br></br>

Worthwhile handlings are also outlined to ease the code implementation:
- Add **various view previews** through the app [preview](https://developer.apple.com/videos/play/wwdc2022/110348/?time=512).

- **Insert items in an array** using a [dedicated&nbsp;gesture](https://developer.apple.com/videos/play/wwdc2022/110348/?time=556).

- **Show up a message** at the bottom left of the source editor as an appropriate [solution&nbsp;for&nbsp;debugging](https://developer.apple.com/videos/play/wwdc2022/110348/?time=705).

</br>Finally, besides the [useful&nbsp;way](https://developer.apple.com/videos/play/wwdc2022/110348?time=405) to **share a project** through a shared `iCloud` folder, **submitting** directly to `TestFlight` from within `Swift`&nbsp;`Playgrounds` becomes [as&nbsp;easy&nbsp;as&nbsp;pie](https://developer.apple.com/videos/play/wwdc2022/110348/?time=842).

![](../../../../../images/iOSdev/wwdc22-SwiftPlaygrounds-AppTestFlight.png)
</br>
## Guided&nbsp;instructional&nbsp;content
This section introduces many ways to create captivating content with `Swift`&nbsp;`Playgrounds`&nbsp;`4` through an [app](https://developer.apple.com/videos/play/wwdc2022/110349?time=65) whose features must be showed up and explained to the users thanks to the brand new **[instructional&nbsp;system](https://developer.apple.com/videos/play/wwdc2022/110349?time=138)**.
</br>This **attractive educational experience** is graphically based on few sections that each have their own purpose.
![](../../../../../images/iOSdev/wwdc22-SwiftPlaygrounds-InstructionalSystem.png)

### [The&nbsp;guide&nbsp;module](https://developer.apple.com/videos/play/wwdc2022/110349?time=249)
To insert this `instructional`&nbsp;`system`, it's **mandatory** to modify the file structure of the 'swiftpm' project that originally holds the source code at its root by:
1. **Creating an App module** in which all the project's source code and assets must be located while leaving the Package.swift file at the root of the project.
![](../../../../../images/iOSdev/wwdc22-SwiftPlaygrounds-GuideModule_1.png)

2. **Creating a guide module** inside which a guide file must ne stored.
![](../../../../../images/iOSdev/wwdc22-SwiftPlaygrounds-GuideModule_Step2.png)

### [The&nbsp;guide&nbsp;file](https://developer.apple.com/videos/play/wwdc2022/110349?time=291)
This file precisely **defines the content** through **directives** that may be seen as containers as well as graphic elements.

![](../../../../../images/iOSdev/wwdc22-SwiftPlaygrounds-GuideFile.png)

### The&nbsp;directives
![](../../../../../images/iOSdev/wwdc22-SwiftPlaygrounds-DirectivesGuidebook.png)

The [first&nbsp;directive](https://developer.apple.com/videos/play/wwdc2022/110349?time=311) found in the guide file is the **guidebook** that represents the main container for all the upcoming directives.
</br>

<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item" role="presentation">
        <a class="nav-link active"
           data-bs-toggle="tab" 
           href="#DirectivesStep"
           id="DirectivesStep_tab"
           role="tab" 
           aria-selected="true">Step</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#DirectivesContentAndMedia"
           id="DirectivesContentAndMedia_tab"
           role="tab" 
           aria-selected="false">ContentAndMedia</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#DirectivesTask"
           id="DirectivesTask_tab"
           role="tab" 
           aria-selected="false">Task</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#DirectivesPage"
           id="DirectivesPage_tab"
           role="tab" 
           aria-selected="false">Page</a>
    </li>
    </ul>

<div class="tab-content">
<div class="tab-pane show active" id="DirectivesStep" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment." href="https://developer.apple.com/videos/play/wwdc2022/110349?time=392">🎬</a>

Used to map out the content, this directive is mandatory to **create tasks** and it must be placed inside a container defined by the [guide&nbsp;directive](https://developer.apple.com/videos/play/wwdc2022/110349?time=336).
![](../../../../../images/iOSdev/wwdc22-SwiftPlaygrounds-DirectivesStep.png)
</div>

<div class="tab-pane" id="DirectivesContentAndMedia" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment." href="https://developer.apple.com/videos/play/wwdc2022/110349/?time=403">🎬</a>
    
![](../../../../../images/iOSdev/wwdc22-SwiftPlaygrounds-DirectivesContentAndMedia.png)
</div>

<div class="tab-pane" id="DirectivesTask" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment." href="https://developer.apple.com/videos/play/wwdc2022/110349/?time=474">🎬</a>

A task may be seen as a **purpose to be reached by the user** in the learning center.
It's displayed through a button whose complete implementation relies on the incoming parameters inside the task directive definition.

Moreover, according to the learning configuration, tasks can be gathered within a **[taskGroup&nbsp;directive](https://developer.apple.com/videos/play/wwdc2022/110349/?time=433)** for a better educational experience.

![](../../../../../images/iOSdev/wwdc22-SwiftPlaygrounds-DirectivesTask.png)
</div>

<div class="tab-pane" id="DirectivesPage" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment." href="https://developer.apple.com/videos/play/wwdc2022/110349/?time=521">🎬</a>

A page acts as a **milestone of the task** to be fulfilled.

![](../../../../../images/iOSdev/wwdc22-SwiftPlaygrounds-DirectivesPage.png)
</div>
</div>
</br>

### Kinds&nbsp;of&nbsp;tasks
Tasks are of two types: **walkthrough** and **experiment**.

The `walkthrough` task is used all along this summary and then won't be described in further details inside this section.
Take a look at this [complete&nbsp;demo](https://developer.apple.com/videos/play/wwdc2022/110349/?time=748) of implementing such a task if need be.

![](../../../../../images/iOSdev/wwdc22-SwiftPlaygrounds-TaskWalkthrough.png)

The **[experiment&nbsp;task](https://developer.apple.com/videos/play/wwdc2022/110349/?time=858)** is to let the users **insert a different code than the original one** in order to visualize the immediate visual result through the app.

Two incoming parameters are crucial to create an `experiment` task:
1. The **type** of the task in the definition of the `task` directive.

2. The permission of inserting some code directly into the source editor through the **[isAddable](https://developer.apple.com/videos/play/wwdc2022/110349/?time=888)** parameter in the definition of the `page` directive.

![](../../../../../images/iOSdev/wwdc22-SwiftPlaygrounds-TaskExperiment.png)

### The&nbsp;code&nbsp;highlighting
The way to reach this purpose [for&nbsp;a&nbsp;`walkthrough`&nbsp;task](https://developer.apple.com/videos/play/wwdc2022/110349/?time=567) relies on inserting **two comment lines** that are wrapped around the code to be highlighted.
![](../../../../../images/iOSdev/wwdc22-SwiftPlaygrounds-CodeHighlightingW.png)

[Regarding&nbsp;the&nbsp;`experiment`&nbsp;task](https://developer.apple.com/videos/play/wwdc2022/110349/?time=947), only **one comment line** is necessary to indicate the identifier of the experiment task to be tested out.

![](../../../../../images/iOSdev/wwdc22-SwiftPlaygrounds-CodeHighlightingE.png)