---
title : "Avoid hitches and discover the Render Loop"
abstract: "Improve the performance of your app's user interface by identifying scrolling and animation hitches in your app."

displayToc: true
---

# WWDC 2021: Avoid hitches and discover the Render Loop
Find hereafter a detailed summary of three videos that belong to a [taxonomy&nbsp;of&nbsp;some&nbsp;WWDC&nbsp;footages](../../).

The original videos are available on the **official Apple website** ([session&nbsp;10855](https://developer.apple.com/videos/play/tech-talks/10855/), [session&nbsp;10856](https://developer.apple.com/videos/play/tech-talks/10856/) and [session&nbsp;10857](https://developer.apple.com/videos/play/tech-talks/10857/))).

![](../../../../../images/iOSdev/wwdc21-Hitches.png)

"Explore how you can **improve the performance** of your app's user interface by identifying scrolling and animation hitches in your app. We'll take you through how hitches happen in the render loop, and explain how to **measure hitch time ratio** and **fix the issues** that most impact people using your app."
</br>"Discover how to **render smoother animations** in your app by troubleshooting the commit phase of your render loop. Dive into the mechanics of this phase, and learn how to use Instruments to **uncover the source of hitches** in your app, eliminate them, and avoid them outright."
</br>"When you implement complex view hierarchies in your app, you may run into animation hitches. Demystify how your views are turned into pixels during the render phase, and **learn how to use Instruments** to uncover issues in this part of the render loop. Discover how to **eliminate offscreen passes** and leverage Xcode optimization opportunities in order to **provide a great experience** when using your app."

</br>The various contents of this video are indicated hereunder:
- [Hitches](#hitches)

- [The&nbsp;Render &nbsp;Loop](#the-render-loop)

- [The&nbsp;Commit&nbsp;phase](#the-commit-phase)

- [The&nbsp;Render&nbsp;phase](#the-render-phase)

- [Hitch&nbsp;time&nbsp;measurement](#hitch-time-measurement)

</br>Most of the illustrations are parts of the Apple presentations and may be available at the `Resources` section inside the `Overview` sheet of each video.
</br>Hereafter, the underlined elements lead directly to the playback of the WWDC video at the appropriate moment.
</br>
## [Hitches](https://developer.apple.com/videos/play/tech-talks/10855/?time=21)

![](../../../../../images/iOSdev/wwdc21-Hitches_1.png)

Hitches appear when a user notes a [stuttering&nbsp;effect](https://developer.apple.com/videos/play/tech-talks/10855/?time=55) instead of a natural smooth feedback.

![](../../../../../images/iOSdev/wwdc21-Hitches_2.png)

The origins of the **hitches** arise from an **incomplete work of the [Render&nbsp;Loop](#the-render-loop)** on a frame during its time duration and these events are of **two types** that are detailed in depth in the next sections.
</br></br>
## [The&nbsp;Render&nbsp;Loop](https://developer.apple.com/videos/play/tech-talks/10855/?time=100)

This non-stop process captures the touch events and provides this information to the system for analyzing and displaying the final result.

![](../../../../../images/iOSdev/wwdc21-HitchesRenderLoop_1.png)

This work is **highly bound to the device capacity** because the loop happens at its [refresh&nbsp;rate](https://developer.apple.com/videos/play/tech-talks/10855/?time=109).  

![](../../../../../images/iOSdev/wwdc21-HitchesRenderLoop_2.png)
</br>
### Process

The `Render`&nbsp;`Loop` is a **[three-stage&nbsp;process](https://developer.apple.com/videos/play/tech-talks/10855/?time=147)** representing three different steps to be completed to state a frame to be ready.

![](../../../../../images/iOSdev/wwdc21-HitchesRenderLoopProcess_1.png)

To accurately specify the functions of this process, various phases have been created in the preceding stages called the **[five&nbsp;phases](https://developer.apple.com/videos/play/tech-talks/10855/?time=195)**.

![](../../../../../images/iOSdev/wwdc21-HitchesRenderLoopProcess_2.png)
</br>
### Frames
<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item" role="presentation">
        <a class="nav-link active"
           data-toggle="tab" 
           href="#RenderLoopFramesFrame"
           id="RenderLoopFramesFrame_tab"
           role="tab" 
           aria-selected="true">Frame</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-toggle="tab" 
           href="#RenderLoopFramesBuffering"
           id="RenderLoopFramesBuffering_tab"
           role="tab" 
           aria-selected="false">Buffering</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-toggle="tab" 
           href="#RenderLoopFramesParallelism"
           id="RenderLoopFramesParallelism_tab"
           role="tab" 
           aria-selected="false">Parallelism</a>
    </li>
</ul>

<div class="tab-content">
<div class="tab-pane show active" id="RenderLoopFramesFrame" role="tabpanel">

<a alt="Click to playback the video at the indicated time." href="https://developer.apple.com/videos/play/tech-talks/10855/?time=128">🎬 (02:08)</a> 

The **VSYNC event** emitted by the hardware is referring to the ready state that a frame should abide by to provide a smooth user experience.

![](../../../../../images/iOSdev/wwdc21-HitchesRenderLoopFramesFrame.png)
</div>

<div class="tab-pane" id="RenderLoopFramesBuffering" role="tabpanel">

<a alt="Click to playback the video at the indicated time." href="https://developer.apple.com/videos/play/tech-talks/10855/?time=173">🎬 (02:53)</a> 

At least **two frames are required** for rendering the desired result but, if some troublesome situations occur, another frame may be necessary.

![](../../../../../images/iOSdev/wwdc21-HitchesRenderLoopFramesBuffering.png)
</div>

<div class="tab-pane" id="RenderLoopFramesParallelism" role="tabpanel">

<a alt="Click to playback the video at the indicated time." href="https://developer.apple.com/videos/play/tech-talks/10855/?time=414">🎬 (06:54)</a> 

The `Render`&nbsp;`Loop` frames are managed in some parallel processes to guarantee the best result.

![](../../../../../images/iOSdev/wwdc21-HitchesRenderLoopFramesParallelism.png)
</div>
</div>

</br>

### Example
<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item" role="presentation">
        <a class="nav-link active"
           data-toggle="tab" 
           href="#RenderLoopExampleOverview"
           id="RenderLoopExampleOverview_tab"
           role="tab" 
           aria-selected="true">Overview</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-toggle="tab" 
           href="#RenderLoopExampleEvent"
           id="RenderLoopExampleEvent_tab"
           role="tab" 
           aria-selected="false">Event</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-toggle="tab" 
           href="#RenderLoopExampleCommit"
           id="RenderLoopExampleCommit_tab"
           role="tab" 
           aria-selected="false">Commit</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-toggle="tab" 
           href="#RenderLoopExampleRender1"
           id="RenderLoopExampleRender1_tab"
           role="tab" 
           aria-selected="false">Render prepare</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-toggle="tab" 
           href="#RenderLoopExampleRender2"
           id="RenderLoopExampleRender2_tab"
           role="tab" 
           aria-selected="false">Render execute</a>
    </li>
</ul>

<div class="tab-content">
<div class="tab-pane show active" id="RenderLoopExampleOverview" role="tabpanel">

<a alt="Click to playback the video at the indicated time." href="https://developer.apple.com/videos/play/tech-talks/10855/?time=251">🎬 (04:11)</a> 

A shape made of various elements is unpacked to understand each phase of the `Render`&nbsp;`Loop` that displays this graphical element.

![](../../../../../images/iOSdev/wwdc21-HitchesRenderLoopExampleOverview.png)
</div>

<div class="tab-pane" id="RenderLoopExampleEvent" role="tabpanel">

<a alt="Click to playback the video at the indicated time." href="https://developer.apple.com/videos/play/tech-talks/10855/?time=257">🎬 (04:17)</a> 

![](../../../../../images/iOSdev/wwdc21-HitchesRenderLoopExampleEvent.png)
</div>

<div class="tab-pane" id="RenderLoopExampleCommit" role="tabpanel">

<a alt="Click to playback the video at the indicated time." href="https://developer.apple.com/videos/play/tech-talks/10855/?time=296">🎬 (04:56)</a> 

![](../../../../../images/iOSdev/wwdc21-HitchesRenderLoopExampleCommit.png)
</div>

<div class="tab-pane" id="RenderLoopExampleRender1" role="tabpanel">

<a alt="Click to playback the video at the indicated time." href="https://developer.apple.com/videos/play/tech-talks/10855/?time=357">🎬 (05:57)</a> 

![](../../../../../images/iOSdev/wwdc21-HitchesRenderLoopExampleRender1.png)
</div>

<div class="tab-pane" id="RenderLoopExampleRender2" role="tabpanel">

<a alt="Click to playback the video at the indicated time." href="https://developer.apple.com/videos/play/tech-talks/10855/?time=384">🎬 (06:24)</a> 


![](../../../../../images/iOSdev/wwdc21-HitchesRenderLoopExampleRender2.png)
</div>
</div>

</br></br>
## [The&nbsp;Commit&nbsp;phase](https://developer.apple.com/videos/play/tech-talks/10856/?time=55)
<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item" role="presentation">
        <a class="nav-link active"
           data-toggle="tab" 
           href="#CommitPhaseOverview"
           id="CommitPhaseOverview_tab"
           role="tab" 
           aria-selected="true">Overview</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-toggle="tab" 
           href="#CommitPhaseLayout"
           id="CommitPhaseLayout_tab"
           role="tab" 
           aria-selected="false">Layout</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-toggle="tab" 
           href="#CommitPhaseDisplay"
           id="CommitPhaseDisplay_tab"
           role="tab" 
           aria-selected="false">Display</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-toggle="tab" 
           href="#CommitPhasePrepare"
           id="CommitPhasePrepare_tab"
           role="tab" 
           aria-selected="false">Prepare</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-toggle="tab" 
           href="#CommitPhaseCommit"
           id="CommitPhaseCommit_tab"
           role="tab" 
           aria-selected="false">Commit</a>
    </li>
</ul>

<div class="tab-content">
<div class="tab-pane show active" id="CommitPhaseOverview" role="tabpanel">

<a alt="Click to playback the video at the indicated time." href="https://developer.apple.com/videos/play/tech-talks/10856/?time=88">🎬 (01:28)</a> 

During this phase, divided into four parts (**Layout**, **Display**, **Prepare** and **Commit**), the app:
- Modifies the interface according to the handled events first,
- Provides the updated layer tree to the render server in a second time.

</div>

<div class="tab-pane" id="CommitPhaseLayout" role="tabpanel">

<a alt="Click to playback the video at the indicated time." href="https://developer.apple.com/videos/play/tech-talks/10856/?time=101">🎬 (01:41)</a> 

![](../../../../../images/iOSdev/wwdc21-HitchesCommitPhaseLayout.png)
</div>

<div class="tab-pane" id="CommitPhaseDisplay" role="tabpanel">

<a alt="Click to playback the video at the indicated time." href="https://developer.apple.com/videos/play/tech-talks/10856/?time=116">🎬 (01:56)</a> 

![](../../../../../images/iOSdev/wwdc21-HitchesCommitPhaseDisplay.png)
</div>

<div class="tab-pane" id="CommitPhasePrepare" role="tabpanel">

<a alt="Click to playback the video at the indicated time." href="https://developer.apple.com/videos/play/tech-talks/10856/?time=131">🎬 (02:11)</a> 

Additional time and memory may be required during this phase if the images must be edited.

![](../../../../../images/iOSdev/wwdc21-HitchesCommitPhasePrepare.png)
</div>

<div class="tab-pane" id="CommitPhaseCommit" role="tabpanel">

<a alt="Click to playback the video at the indicated time." href="https://developer.apple.com/videos/play/tech-talks/10856/?time=168">🎬 (02:48)</a> 

![](../../../../../images/iOSdev/wwdc21-HitchesCommitPhaseCommit.png)
</div>
</div>

</br>

### [Commit&nbsp;hitch](https://developer.apple.com/videos/play/tech-talks/10855/?time=444)

Based on the time taken by the commit, a delay might be necessary to provide an appropriate frame to the render server and then being responsible for the detected hitch.

![](../../../../../images/iOSdev/wwdc21-HitchesCommitPhaseHitch.png)

</br>

### [Instruments](https://developer.apple.com/videos/play/tech-talks/10856/?time=190)

![](../../../../../images/iOSdev/wwdc21-HitchesCommitPhaseInstruments_1.png)

When hitches frames are detected, the **Animation Hitches** interface is the perfect tool to dive deeper into the proper analysis and find out solutions.  

![](../../../../../images/iOSdev/wwdc21-HitchesCommitPhaseInstruments_2.png)

[Useful&nbsp;information](https://developer.apple.com/videos/play/tech-talks/10856/?time=276) is highlighted to understand what's wrong and to easely point out the potential causes of the problems.

![](../../../../../images/iOSdev/wwdc21-HitchesCommitPhaseInstruments_3.png)

The **[Time&nbsp;Profiler](https://developer.apple.com/videos/play/tech-talks/10856/?time=331)** tool in `Instruments` can be concomitantly used to look into the code and find out the piece of code responsible for the detected hitches.
</br>

### [Recommendations](https://developer.apple.com/videos/play/tech-talks/10856/?time=539)

Mainly based on the example that showed up the best practice for avoiding commit hitches, some recommendations are emphasized to apply them as often as possible.

![](../../../../../images/iOSdev/wwdc21-HitchesCommitPhaseRecommendations.png)

</br></br>
## [The&nbsp;Render&nbsp;phase](https://developer.apple.com/videos/play/tech-talks/10857/?time=52)

This phase is **divided into two parts** whose goal is to prepare the layer tree as a pipeline of drawings commands to be executed by the GPU to get a frame ready to be displayed.

![](../../../../../images/iOSdev/wwdc21-HitchesRenderPhase.png)

</br>

### [Render&nbsp;hitch](https://developer.apple.com/videos/play/tech-talks/10855/?time=493)

If both render phases haven't been completed on time to make a frame ready to be displayed, then a render hitch occurs.

![](../../../../../images/iOSdev/wwdc21-HitchesRenderPhaseHitch.png)

</br>

### [Offscreen&nbsp;pass](https://developer.apple.com/videos/play/tech-talks/10857/?time=254)

![](../../../../../images/iOSdev/wwdc21-HitchesOffscreenPassOverview.png)

The offscreen pass happens when it's necessary for the GPU to **switch to a different texture** in order to apply a specific effect to a graphic element.
</br>**[Shadows](https://developer.apple.com/videos/play/tech-talks/10857/?time=281)**, **[masks](https://developer.apple.com/videos/play/tech-talks/10857/?time=293)**, **[rounded&nbsp;rectangles](https://developer.apple.com/videos/play/tech-talks/10857/?time=320)** and **[visual&nbsp;effects](https://developer.apple.com/videos/play/tech-talks/10857/?time=338)** are the main types for which the offscreen pass is essential to avoid slowing down the rendering and causing render hitches.
</br>

### [Instruments&nbsp;&&nbsp;Xcode](https://developer.apple.com/videos/play/tech-talks/10857/?time=385)
<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item" role="presentation">
        <a class="nav-link active"
           data-toggle="tab" 
           href="#HitchesRenderPhaseInstrumentsOverview"
           id="HitchesRenderPhaseInstrumentsOverview_tab"
           role="tab" 
           aria-selected="true">Overview</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-toggle="tab" 
           href="#HitchesRenderPhaseInstrumentsShadowing"
           id="HitchesRenderPhaseInstrumentsShadowing_tab"
           role="tab" 
           aria-selected="false">Shadowing</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-toggle="tab" 
           href="#HitchesRenderPhaseInstrumentsMasking"
           id="HitchesRenderPhaseInstrumentsMasking_tab"
           role="tab" 
           aria-selected="false">Masking</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-toggle="tab" 
           href="#HitchesRenderPhaseInstrumentsRoundedRectangles"
           id="HitchesRenderPhaseInstrumentsRoundedRectangles_tab"
           role="tab" 
           aria-selected="false">Rounded&nbsp;rectangles</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-toggle="tab" 
           href="#HitchesRenderPhaseInstrumentsExport"
           id="HitchesRenderPhaseInstrumentsExport_tab"
           role="tab" 
           aria-selected="false">Export</a>
    </li>
</ul>

<div class="tab-content">
<div class="tab-pane show active" id="HitchesRenderPhaseInstrumentsOverview" role="tabpanel">

<a alt="Click to playback the video at the indicated time." href="https://developer.apple.com/videos/play/tech-talks/10857/?time=445">🎬 (07:25)</a> 

Besides the information provided in [The&nbsp;Commit&nbsp;Phase&nbsp;Instruments](#instruments) part, elements located in the **[Buffer&nbsp;Count](https://developer.apple.com/videos/play/tech-talks/10857/?time=509)** column and the **[Render&nbsp;Count](https://developer.apple.com/videos/play/tech-talks/10857/?time=561)** column are introduced to detect hitches and find out solutons for this specific phase.
![](../../../../../images/iOSdev/wwdc21-HitchesRenderPhaseInstrumentsOverview_1.png)

Moreover, the [Xcode&nbsp;debugger](https://developer.apple.com/videos/play/tech-talks/10857/?time=582) is significantly used to **look into the layer tree** when problems occur...
![](../../../../../images/iOSdev/wwdc21-HitchesRenderPhaseInstrumentsOverview_2.png)

... with a **[new&nbsp;Xcode 12&nbsp;feature](https://developer.apple.com/videos/play/tech-talks/10857/?time=648)** to be used as an optimization suggestion.
![](../../../../../images/iOSdev/wwdc21-HitchesRenderPhaseInstrumentsOverview_3.png)

</div>

<div class="tab-pane" id="HitchesRenderPhaseInstrumentsShadowing" role="tabpanel">

<a alt="Click to playback the video at the indicated time." href="https://developer.apple.com/videos/play/tech-talks/10857/?time=701">🎬 (11:41)</a> 

![](../../../../../images/iOSdev/wwdc21-HitchesRenderPhaseInstrumentsShadowing_1.png)

![](../../../../../images/iOSdev/wwdc21-HitchesRenderPhaseInstrumentsShadowing_2.png)
</div>

<div class="tab-pane" id="HitchesRenderPhaseInstrumentsMasking" role="tabpanel">

<a alt="Click to playback the video at the indicated time." href="https://developer.apple.com/videos/play/tech-talks/10857/?time=783">🎬 (13:03)</a> 

![](../../../../../images/iOSdev/wwdc21-HitchesRenderPhaseInstrumentsMasking_1.png)

![](../../../../../images/iOSdev/wwdc21-HitchesRenderPhaseInstrumentsMasking_2.png)
</div>

<div class="tab-pane" id="HitchesRenderPhaseInstrumentsRoundedRectangles" role="tabpanel">

<a alt="Click to playback the video at the indicated time." href="https://developer.apple.com/videos/play/tech-talks/10857/?time=903">🎬 (15:03)</a> 

![](../../../../../images/iOSdev/wwdc21-HitchesRenderPhaseInstrumentsRoundedRectangles_1.png)

![](../../../../../images/iOSdev/wwdc21-HitchesRenderPhaseInstrumentsRoundedRectangles_2.png)
</div>

<div class="tab-pane" id="HitchesRenderPhaseInstrumentsExport" role="tabpanel">

<a alt="Click to playback the video at the indicated time." href="https://developer.apple.com/videos/play/tech-talks/10857/?time=1009">🎬 (16:49)</a> 

Many elements like views, layers and runtime issues can be wrapped in a **sendable file** to be shared with someone having **the same device**.

![](../../../../../images/iOSdev/wwdc21-HitchesRenderPhaseInstrumentsExport.png)
</div>
</div>

</br>

### [Recommendations](https://developer.apple.com/videos/play/tech-talks/10857/?time=1067)

![](../../../../../images/iOSdev/wwdc21-HitchesRenderPhaseRecommendations_1.png)

**Use the provided APIs** regarding more specifically the masking and the rounded rectangle shapes.

![](../../../../../images/iOSdev/wwdc21-HitchesRenderPhaseRecommendations_2.png)

The **use of `maskToBounds`** is advised for optimizing masking.

![](../../../../../images/iOSdev/wwdc21-HitchesRenderPhaseRecommendations_3.png)

</br></br>
## [Hitch&nbsp;time&nbsp;measurement](https://developer.apple.com/videos/play/tech-talks/10855/?time=533)

A metric called **hitch time ratio** has been introduced to represent the  amount of milliseconds the device is hitching every second.

![](../../../../../images/iOSdev/wwdc21-HitchesHitchTimeMeasurement_1.png)

After a short [example](https://developer.apple.com/videos/play/tech-talks/10855/?time=602) to explain how this new metric works, some [thresholds](https://developer.apple.com/videos/play/tech-talks/10855/?time=644) are suggested to use it as best as possible.

![](../../../../../images/iOSdev/wwdc21-HitchesHitchTimeMeasurement_2.png)
</br></br></br>