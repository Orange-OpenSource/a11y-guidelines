---
title : "HDR images"
abstract: "Learn how to identify, load, display, and create High Dynamic Range still images in your app."

displayToc: true
---

# WWDC 2023: HDR images
Find hereafter a detailed summary of two videos that belong to a [taxonomy&nbsp;of&nbsp;some&nbsp;WWDC&nbsp;footages](../../).

The original videos are available on the **Apple official website** ([session&nbsp;10113](https://developer.apple.com/videos/play/wwdc2022/10113/), [session&nbsp;10181](https://developer.apple.com/videos/play/wwdc2023/10181/)).
![](../../../../../images/iOSdev/wwdc23-HDRImg_Poster.png)
"Learn how to identify, load, display, and create **High Dynamic Range** (HDR) still images in your app. Explore common HDR **concepts** and find out about the latest updates to the ISO specification. Learn how to **identify and display** HDR images with SwiftUI and UIKit, create them from ProRAW and RAW captures, and display them in CALayers. We'll also take you through CoreGraphics support for ISO HDR and share **best practices** for HDR adoption."

"EDR is Apple's High Dynamic Range representation and rendering pipeline. Explore how you can **render HDR content using EDR** in your app and unleash the dynamic range capabilities of HDR displays on iPhone and iPad. We'll show how you can take advantage of the native EDR APIs on iOS, provide **best practices** to help you decide when HDR is appropriate, and **share tips for tone-mapping and HDR content rendering**. We'll also introduce you to **Reference Mode** and highlight how it provides a reference response to enable color-critical workflows such as color grading, editing, and content review."

</br>Hereafter, the underlined elements **lead directly to the playback of the WWDC video** at the appropriate moment.
</br>

In order to alleviate the writing, the following acronyms will be used throughout this document:
- **SDR**&nbsp;&nbsp;=&nbsp;&nbsp;**S**tandard&nbsp;&nbsp;**D**ynamic&nbsp;&nbsp;**R**ange
- **HDR**&nbsp;&nbsp;=&nbsp;&nbsp;**H**igh&nbsp;&nbsp;**D**ynamic&nbsp;&nbsp;**R**ange
- **EDR**&nbsp;&nbsp;=&nbsp;&nbsp;**E**xtended&nbsp;&nbsp;**D**ynamic&nbsp;&nbsp;**R**ange

</br>

## [The basics](https://developer.apple.com/videos/play/wwdc2023/10181/?time=40)
![](../../../../../images/iOSdev/wwdc23-HDRImg_1.png)

The **HDR** display provides a **more contrasted image** that highlights its brightest parts and **improves the [image&nbsp;definition](https://developer.apple.com/videos/play/wwdc2023/10181/?time=158)**.
Thanks to additional data collected within the `iPhone` images, the **[gain&nbsp;map&nbsp;HDR](https://developer.apple.com/videos/play/wwdc2023/10181/?time=364)** has the ability to create a `HDR` image from a `SDR`'s.

![](../../../../../images/iOSdev/wwdc23-HDRImg_2.png)

Besides providing a **better user experience** and being a **cross-platform implementation**, the [`HDR`&nbsp;support](https://developer.apple.com/videos/play/wwdc2023/10181/?time=183) is based on a partnership with the **International Standards Organization** through an [`ISO`&nbsp;`HDR`&nbsp;specification](https://developer.apple.com/videos/play/wwdc2023/10181/?time=202) for `HDR` images with [new&nbsp;contents](https://developer.apple.com/videos/play/wwdc2023/10181/?time=263) including some additional optional [metadata&nbsp;fields](https://developer.apple.com/videos/play/wwdc2023/10181/?time=312).

![](../../../../../images/iOSdev/wwdc23-HDRImg_3.png)

The brightest part of an `HDR` display is called the **[headroom](https://developer.apple.com/videos/play/wwdc2023/10181/?time=108)** that conditions the brightness and the dynamism of the content for permitting the **[EDR](https://developer.apple.com/videos/play/wwdc2022/10113/?time=370)** (Apple's `HDR` technology) to impact the `SDR` and `HDR` representations.

![](../../../../../images/iOSdev/wwdc23-HDRImg_6.png)

The `EDR` depends on the **[headroom](https://developer.apple.com/videos/play/wwdc2022/10113/?time=446)** whose value is both related to the **Display Peak Brightness** and the **`SDR` Brightness** which means that it will also rely on the [device&nbsp;capacities](https://developer.apple.com/videos/play/wwdc2022/10113/?time=473).

![](../../../../../images/iOSdev/wwdc23-HDRImg_7.png)
</br>

## EDR
### [New&nbsp;features](https://developer.apple.com/videos/play/wwdc2022/10113/?time=141)
Besides the availability of the `EDR` `API` for `iOS`&nbsp;`16` and `iPadOS`&nbsp;`16`, two other features have been introduced in the `WWDC22`.

<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item" role="presentation">
        <a class="nav-link active"
           data-bs-toggle="tab" 
           href="#HDRImgEDRFeat1"
           id="HDRImgEDRFeat1_tab"
           role="tab" 
           aria-selected="true">Reference&nbsp;Mode</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#HDRImgEDRFeat2"
           id="HDRImgEDRFeat2_tab"
           role="tab" 
           aria-selected="false">Sidecar</a>
    </li>
    </ul>

<div class="tab-content">
<div class="tab-pane show active" id="HDRImgEDRFeat1" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment regarding the reference mode new feature" href="https://developer.apple.com/videos/play/wwdc2022/10113/?time=160">🎬</a>

Supported by [LumaFusion](https://developer.apple.com/videos/play/wwdc2022/10113/?time=229) since `WWDC22`, the **Reference Mode** enables a color rendering that matches the description of the specification.

![](../../../../../images/iOSdev/wwdc23-HDRImg_4.png)
</div>

<div class="tab-pane" id="HDRImgEDRFeat2" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment regarding the new feature with sidecar" href="https://developer.apple.com/videos/play/wwdc2022/10113/?time=286">🎬</a>

As a technology for users willing to use their `iPad` as a secondary display, **Sidecar** now supports reference-level `SDR` and `HDR` contents.

![](../../../../../images/iOSdev/wwdc23-HDRImg_5.png)
</div>
</div>
</br>
</br>

### [Read&nbsp;the&nbsp;content](https://developer.apple.com/videos/play/wwdc2022/10113/?time=514)
The process of reading a `HDR` content and converting it to a renderable format consists in **[four&nbsp;steps](https://developer.apple.com/videos/play/wwdc2022/10113/?time=564)** to be perfectly performed.

![](../../../../../images/iOSdev/wwdc23-HDRImg_8.png)
</br>

### [Stick&nbsp;to&nbsp;EDR](https://developer.apple.com/videos/play/wwdc2022/10113/?time=687)
Support the `EDR` rendering relies on a **two-step process**.
![](../../../../../images/iOSdev/wwdc23-HDRImg_9.png)
A [close&nbsp;combination](https://developer.apple.com/videos/play/wwdc2022/10113/?time=743) between the pixel format and the color space is essential to support `EDR` and it **must be followed** otherwise these items will be cropped and downgraded to `SDR`.
![](../../../../../images/iOSdev/wwdc23-HDRImg_10.png)
</br>

### [Query&nbsp;headroom](https://developer.apple.com/videos/play/wwdc2022/10113/?time=791)
Whether on the [`NSScreen`](https://developer.apple.com/videos/play/wwdc2022/10113/?time=818) or [`UIScreen`](https://developer.apple.com/videos/play/wwdc2022/10113/?time=837), the headroom queries are quite different and head towards various situations according to the needs.
![](../../../../../images/iOSdev/wwdc23-HDRImg_11.png)

The [new&nbsp;`APIs`](https://developer.apple.com/videos/play/wwdc2022/10113/?time=882) for `iOS` lead to accurate conclusions on the `EDR` content rendering...

![](../../../../../images/iOSdev/wwdc23-HDRImg_12.png)

... and inform about the **[four&nbsp;possible&nbsp;states](https://developer.apple.com/videos/play/wwdc2022/10113/?time=930)** of the display.

![](../../../../../images/iOSdev/wwdc23-HDRImg_13.png)
</br>

### Tone-mapping
This technique is used to map the pixel levels in high dynamic range images to a reduced dynamic range, while trying and retaining the original appearance as close as possible.

![](../../../../../images/iOSdev/wwdc23-HDRImg_14.png)

Instead of using the `currentEDRHeadroom` for a customized rendering, the [built-in&nbsp;tone&nbsp;mapping](https://developer.apple.com/videos/play/wwdc2022/10113/?time=984) may also be used by following [three&nbsp;milestones](https://developer.apple.com/videos/play/wwdc2022/10113/?time=1011) including [dedicated&nbsp;constructors](https://developer.apple.com/videos/play/wwdc2022/10113/?time=1036) for [specific&nbsp;color&nbsp;space](https://developer.apple.com/videos/play/wwdc2022/10113/?time=1098) usage.

![](../../../../../images/iOSdev/wwdc23-HDRImg_15.png)
</br>

## HDR
### [Display&nbsp;images](https://developer.apple.com/videos/play/wwdc2023/10181?time=406)
<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item" role="presentation">
        <a class="nav-link active"
           data-bs-toggle="tab" 
           href="#HDRImgExamples1"
           id="HDRImgExamples1_tab"
           role="tab" 
           aria-selected="true">UIKit</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#HDRImgExamples2"
           id="HDRImgExamples2_tab"
           role="tab" 
           aria-selected="false">SwiftUI</a>
    </li>
    </ul>

<div class="tab-content">
<div class="tab-pane show active" id="HDRImgExamples1" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment regarding the ui kit implementation" href="https://developer.apple.com/videos/play/wwdc2023/10181/?time=432">🎬</a>

![](../../../../../images/iOSdev/wwdc23-HDRImg_19.png)
</div>

<div class="tab-pane" id="HDRImgExamples2" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment regarding the swift ui implementation" href="https://developer.apple.com/videos/play/wwdc2023/10181/?time=415">🎬</a>

![](../../../../../images/iOSdev/wwdc23-HDRImg_20.png)
</div>
</div>
</br>

The way to handle the `HDR` content is managed by **three options** of the dynamic range properties (**[high](https://developer.apple.com/videos/play/wwdc2023/10181/?time=451)**, **[standard](https://developer.apple.com/videos/play/wwdc2023/10181/?time=474)** and **[constrainedHigh](https://developer.apple.com/videos/play/wwdc2023/10181/?time=491)**) for which detailed examples are highlighted so as to perfectly understand their usage areas ([ex1](https://developer.apple.com/videos/play/wwdc2023/10181/?time=505) & [ex2](https://developer.apple.com/videos/play/wwdc2023/10181/?time=524)).

![](../../../../../images/iOSdev/wwdc23-HDRImg_16.png)

It's crucial to [follow&nbsp;the&nbsp;latest&nbsp;`HDR`&nbsp;features](https://developer.apple.com/videos/play/wwdc2023/10181/?time=580) to not add workload.

![](../../../../../images/iOSdev/wwdc23-HDRImg_17.png)

Even if importing an [image&nbsp;in&nbsp;an&nbsp;app](https://developer.apple.com/videos/play/wwdc2023/10181/?time=642) is pretty simple, it's not necessary to know if it's `HDR` but if need be, each platform has its `API` to [reach&nbsp;this&nbsp;goal](https://developer.apple.com/videos/play/wwdc2023/10181/?time=696).

![](../../../../../images/iOSdev/wwdc23-HDRImg_18.png)

`iOS` and `iPadOS` provide `APIs` to get the [maximum&nbsp;display&nbsp;headroom](https://developer.apple.com/videos/play/wwdc2023/10181/?time=786) of a device to use `HDR` when it's [appropriate](https://developer.apple.com/videos/play/wwdc2023/10181/?time=806).

![](../../../../../images/iOSdev/wwdc23-HDRImg_21.png)
</br>

### [Pipeline&nbsp;details](https://developer.apple.com/videos/play/wwdc2023/10181?time=842)
Handling `HDR` images implies specific steps between the source and its renderer (image processing **pipeline**).

![](../../../../../images/iOSdev/wwdc23-HDRImg_22.png)

#### Read
Reading an image is based on its type and the technical way for its description.

![](../../../../../images/iOSdev/wwdc23-HDRImg_23.png)
<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item" role="presentation">
        <a class="nav-link active"
           data-bs-toggle="tab" 
           href="#HDRImgPipRead1"
           id="HDRImgPipRead1_tab"
           role="tab" 
           aria-selected="true">1</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#HDRImgPipRead2"
           id="HDRImgPipRead2_tab"
           role="tab" 
           aria-selected="false">2</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#HDRImgPipRead3"
           id="HDRImgPipRead3_tab"
           role="tab" 
           aria-selected="false">3</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#HDRImgPipRead4"
           id="HDRImgPipRead4_tab"
           role="tab" 
           aria-selected="false">4</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#HDRImgPipRead5"
           id="HDRImgPipRead5_tab"
           role="tab" 
           aria-selected="false">5</a>
    </li>
    </ul>

<div class="tab-content">
<div class="tab-pane show active" id="HDRImgPipRead1" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment regarding the way to read ui image and ns image" href="https://developer.apple.com/videos/play/wwdc2023/10181/?time=898">🎬</a>

![](../../../../../images/iOSdev/wwdc23-HDRImg_24.png)
</div>

<div class="tab-pane" id="HDRImgPipRead2" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment regarding the way to read hdr using core image" href="https://developer.apple.com/videos/play/wwdc2023/10181/?time=930">🎬</a>

![](../../../../../images/iOSdev/wwdc23-HDRImg_25.png)
</div>

<div class="tab-pane" id="HDRImgPipRead3" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment regarding the way to read hdr as sdr using core image" href="https://developer.apple.com/videos/play/wwdc2023/10181/?time=999">🎬</a>

![](../../../../../images/iOSdev/wwdc23-HDRImg_26.png)
</div>

<div class="tab-pane" id="HDRImgPipRead4" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment regarding the way to read gain map hdr using core image" href="https://developer.apple.com/videos/play/wwdc2023/10181/?time=1058">🎬</a>

![](../../../../../images/iOSdev/wwdc23-HDRImg_27.png)
</div>

<div class="tab-pane" id="HDRImgPipRead5" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment regarding the raw files and hdr" href="https://developer.apple.com/videos/play/wwdc2023/10181/?time=1124">🎬</a>

The `RAW` files can be displayed as `HDR` thanks to the dynamic range within thereof.

![](../../../../../images/iOSdev/wwdc23-HDRImg_28.png)
</div>
</div>
</br>
</br>

#### Modify&nbsp;&&nbsp;write
<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item" role="presentation">
        <a class="nav-link active"
           data-bs-toggle="tab" 
           href="#HDRImgModifyWrite1"
           id="HDRImgModifyWrite1_tab"
           role="tab" 
           aria-selected="true">Modify</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#HDRImgModifyWrite2"
           id="HDRImgModifyWrite2_tab"
           role="tab" 
           aria-selected="false">Write</a>
    </li>
    </ul>

<div class="tab-content">
<div class="tab-pane show active" id="HDRImgModifyWrite1" role="tabpanel">
    
<a alt="Click to playback the footage at the appropriate moment regarding the modification" href="https://developer.apple.com/videos/play/wwdc2023/10181/?time=1235">🎬</a>

Modifying an image relies on the native **`HDR` CIFilters**.

![](../../../../../images/iOSdev/wwdc23-HDRImg_29.png)
</div>

<div class="tab-pane" id="HDRImgModifyWrite2" role="tabpanel">
    
<a alt="Click to playback the footage at the appropriate moment regarding the writing" href="https://developer.apple.com/videos/play/wwdc2023/10181/?time=1297">🎬</a>

![](../../../../../images/iOSdev/wwdc23-HDRImg_30.png)
</div>
</div>
</br>
</br>

#### [Convert](https://developer.apple.com/videos/play/wwdc2023/10181/?time=1374)
![](../../../../../images/iOSdev/wwdc23-HDRImg_31.png)

<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item" role="presentation">
        <a class="nav-link active"
           data-bs-toggle="tab" 
           href="#HDRImgConvert1"
           id="HDRImgConvert1_tab"
           role="tab" 
           aria-selected="true">A</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#HDRImgConvert2"
           id="HDRImgConvert2_tab"
           role="tab" 
           aria-selected="false">B</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#HDRImgConvert3"
           id="HDRImgConvert3_tab"
           role="tab" 
           aria-selected="false">C</a>
    </li>
    </ul>

<div class="tab-content">
<div class="tab-pane show active" id="HDRImgConvert1" role="tabpanel">
    
<a alt="Click to playback the footage at the appropriate moment regarding the iso hdr compatibility" href="https://developer.apple.com/videos/play/wwdc2023/10181/?time=1415">🎬</a>

Alter an image into an **`IOSurface`** or a **`CVPixelBuffer`** object may be useful as a `CALayer` content support.

![](../../../../../images/iOSdev/wwdc23-HDRImg_32.png)
</div>

<div class="tab-pane" id="HDRImgConvert2" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment regarding the conversion between ci image and  cv pixel buffer" href="https://developer.apple.com/videos/play/wwdc2023/10181/?time=1445">🎬</a>

![](../../../../../images/iOSdev/wwdc23-HDRImg_33.png)
</div>

<div class="tab-pane" id="HDRImgConvert3" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment regarding the conversion from a ci image to a cg image" href="https://developer.apple.com/videos/play/wwdc2023/10181/?time=1461">🎬</a>

![](../../../../../images/iOSdev/wwdc23-HDRImg_34.png)
</div>
</div>
</br>
</br>

### [Advanced&nbsp;display](https://developer.apple.com/videos/play/wwdc2023/10181/?time=1522)
![](../../../../../images/iOSdev/wwdc23-HDRImg_35.png)

It's important to use the **[proper&nbsp;classes](https://developer.apple.com/videos/play/wwdc2023/10181/?time=1606)** to render `HDR` with `CALayer`.

![](../../../../../images/iOSdev/wwdc23-HDRImg_36.png)

It's crucial to take into account the appropriate **[pixel&nbsp;format](https://developer.apple.com/videos/play/wwdc2023/10181/?time=1638)** with the **[CGImage&nbsp;flags](https://developer.apple.com/videos/play/wwdc2023/10181/?time=1659)** when handling `HDR` data.

![](../../../../../images/iOSdev/wwdc23-HDRImg_37.png)

Few elements should be considered to enable the **[compatibilty](https://developer.apple.com/videos/play/wwdc2023/10181/?time=1670)** of `HDR` contents with older versions of `iOS` and `macOS`.

![](../../../../../images/iOSdev/wwdc23-HDRImg_38.png)
</br>