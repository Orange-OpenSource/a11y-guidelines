---
title : "SF Symbols 4"
abstract: "Explore the latest updates to SF Symbols"

displayToc: true
---

# WWDC 2022: SF Symbols 4
Find hereafter a detailed summary of two videos that belong to a [taxonomy&nbsp;of&nbsp;some&nbsp;WWDC&nbsp;footages](../../).

The original videos are available on the **official Apple website** ([session&nbsp;10157](https://developer.apple.com/videos/play/wwdc2022/10157/), [session&nbsp;10158](https://developer.apple.com/videos/play/wwdc2022/10158/)).</br>
"Explore the **latest updates to SF Symbols**, Apple's extensive library of iconography designed to integrate seamlessly with San Francisco, the system font for all Apple platforms. Discover the **latest additions to the SF Symbols library** and new categories in the app. Learn about the new **Automatic behavior**, which chooses the rendering mode that best highlights what's unique about the symbol's characteristics. See how to use the **new Variable Color feature** to make a symbol more dynamic. We'll also learn about a more efficient way of annotating symbols with the **new unified approach**."</br>
"Explore how you can **use Variable Color to make SF Symbols** even more expressive. We'll show you how system-provided symbols use variable color and provide best practices and guidance for using it effectively. We'll also help you learn how to **incorporate variable color into custom symbols** using the SF Symbols app and its annotation tools."</br>
The outlines of this speech are indicated hereunder:
- [Rendering&nbsp;modes](#rendering-modes)

- [Variable&nbsp;Color](#variable-color)

- [Unified&nbsp;annotations](#unified-annotations)

- [Practical&nbsp;examples](#practical-examples)

</br>Most of the illustrations are parts of the Apple presentations and may be available at the `Resources` section inside the `Overview` sheet of each video.
</br>Hereafter, the underlined elements lead directly to the playback of the WWDC video at the appropriate moment.

![](../../../../../images/iOSdev/wwdc22-SFSymbols.png)

[Many&nbsp;additions](https://developer.apple.com/videos/play/wwdc2022/10157?time=156) of **new symbols** are introduced in iOS&nbsp;16 regarding different areas: home, health... including [five&nbsp;new&nbsp;categories](https://developer.apple.com/videos/play/wwdc2022/10157?time=209) to provide a **better searching experience**.

![](../../../../../images/iOSdev/wwdc22-SFSymbols-Additions.png)
## Rendering&nbsp;modes
Among the [four&nbsp;rendering&nbsp;modes](https://developer.apple.com/videos/play/wwdc2022/10157?time=242), Monochrome is the default one in iOS&nbsp;15...

![](../../../../../images/iOSdev/wwdc22-SFSymbols-Rendering_1.png)

... but the **new Automatic Rendering** configuration offers a preferred mode [tailored&nbsp;for&nbsp;each&nbsp;symbol](https://developer.apple.com/videos/play/wwdc2022/10157?time=345) in iOS&nbsp;16.

![](../../../../../images/iOSdev/wwdc22-SFSymbols-Rendering_2.png)

In the **SF Symbols app**, this [new&nbsp;option](https://developer.apple.com/videos/play/wwdc2022/10158/?time=108) can be selected in the picker to choose the preferred rendering mode of a symbol while watching the selection in the preview area.

![](../../../../../images/iOSdev/wwdc22-SFSymbols-Rendering_3.png)

## [Variable&nbsp;Color](https://developer.apple.com/videos/play/wwdc2022/10157?time=467)
This **new feature** relies on the organization of the symbol's vector paths into layers arranged in sequential order  so as to **modify the appearance of a symbol using a [percentage&nbsp;value](https://developer.apple.com/videos/play/wwdc2022/10158/?time=203)**.

![](../../../../../images/iOSdev/wwdc22-SFSymbols-Variable_1.png)

All the symbol's paths may be part of the defined sequence...

![](../../../../../images/iOSdev/wwdc22-SFSymbols-Variable_2.png)

... while others may just be static with no possible modifications with regard to the Variable Color feature.

![](../../../../../images/iOSdev/wwdc22-SFSymbols-Variable_3.png)

This functionality is a **brilliant option** to be used when dealing with the **strength level of shapes** that [follow&nbsp;a&nbsp;sequence](https://developer.apple.com/videos/play/wwdc2022/10157?time=582) but **mustn't be taken into account for emphasizing depth**.

![](../../../../../images/iOSdev/wwdc22-SFSymbols-Variable_4.png)

[Opacity](https://developer.apple.com/videos/play/wwdc2022/10157?time=722) may be used with the Variable Color to point out a better rendering.

![](../../../../../images/iOSdev/wwdc22-SFSymbols-Variable_5.png)
## Unified&nbsp;annotations
**Annotations** (processes used to adopt different rendering modes for a custom symbol) are based on the **z-order** combined with the **Draw** and **Erase concepts** that represent the [foundations](https://developer.apple.com/videos/play/wwdc2022/10157/?time=763) of all the visual adjustements.

![](../../../../../images/iOSdev/wwdc22-SFSymbols-Unified_1.png)

[Unified&nbsp;annotation](https://developer.apple.com/videos/play/wwdc2022/10158/?time=466) is the new way to **streamline the creation of custom symbols** by carrying through to all the rendering modes the changes made to the layer structure of one of them.

![](../../../../../images/iOSdev/wwdc22-SFSymbols-Unified_2.png)
</br>
## Practical&nbsp;examples

1. Create a **collection of your favorite objects** in the SF Symbols app⟹&nbsp;<a alt="Click to playback the footage at the appropriate time" href="https://developer.apple.com/videos/play/wwdc2022/10157/?time=229">🎬</a>

2. Examples for watching the **Automatic Rendering** on two different objects⟹&nbsp;<a alt="Click to playback the footage at the appropriate time" href="https://developer.apple.com/videos/play/wwdc2022/10157/?time=370">🎬</a>

3. First example for **unified annotation** regarding a cupcake symbol⟹&nbsp;<a alt="Click to playback the footage at the appropriate time" href="https://developer.apple.com/videos/play/wwdc2022/10157/?time=813">🎬</a>

4. Second example for **unified annotation** regarding a kitchen timer symbol⟹&nbsp;<a alt="Click to playback the footage at the appropriate time" href="https://developer.apple.com/videos/play/wwdc2022/10157/?time=976">🎬</a>

5. The **preview area** in the rendering inspector inside the SF Symbols app is the best way to **see a symbol in every rendering mode** at a glance⟹&nbsp;<a alt="Click to playback the footage at the appropriate time" href="https://developer.apple.com/videos/play/wwdc2022/10158/?time=93">🎬</a>

6. Modify the **percentage value** of the **Variable Color** in the SF Symbols app⟹&nbsp;<a alt="Click to playback the footage at the appropriate time" href="https://developer.apple.com/videos/play/wwdc2022/10158/?time=139">🎬</a>

7. Understand the **link** between the **percentage value** of the Variable Color and the **particular layer** that's displayed⟹&nbsp;<a alt="Click to playback the footage at the appropriate time" href="https://developer.apple.com/videos/play/wwdc2022/10158/?time=217">🎬</a>

8. Create a **custom symbol** in the SF Symbols app using the **Variable Color** and the **unified annotation**⟹&nbsp;<a alt="Click to playback the footage at the appropriate time" href="https://developer.apple.com/videos/play/wwdc2022/10158/?time=522">🎬</a>

9. Use the **Erase** feature of the unified annotation in the SF Symbols app for **handling depth** with more complex symbols⟹&nbsp;<a alt="Click to playback the footage at the appropriate time" href="https://developer.apple.com/videos/play/wwdc2022/10158/?time=716">🎬</a>

10. **Activate the Variable Color** after using the Erase feature in the SF Symbols app⟹&nbsp;<a alt="Click to playback the footage at the appropriate time" href="https://developer.apple.com/videos/play/wwdc2022/10158/?time=781">🎬</a>
</br>
<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item" role="presentation">
        <a class="nav-link active"
           data-bs-toggle="tab" 
           href="#SFSymbolsExamples1"
           id="SFSymbolsExamples1_tab"
           role="tab" 
           aria-selected="true">1</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#SFSymbolsExamples2"
           id="SFSymbolsExamples2tab"
           role="tab" 
           aria-selected="false">2</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#SFSymbolsExamples3"
           id="SFSymbolsExamples3_tab"
           role="tab" 
           aria-selected="false">3</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#SFSymbolsExamples4"
           id="SFSymbolsExamples4_tab"
           role="tab" 
           aria-selected="false">4</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#SFSymbolsExamples5"
           id="SFSymbolsExamples5_tab"
           role="tab" 
           aria-selected="false">5</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#SFSymbolsExamples6"
           id="SFSymbolsExamples6_tab"
           role="tab" 
           aria-selected="false">6</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#SFSymbolsExamples7"
           id="SFSymbolsExamples7_tab"
           role="tab" 
           aria-selected="false">7</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#SFSymbolsExamples8"
           id="SFSymbolsExamples8_tab"
           role="tab" 
           aria-selected="false">8</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#SFSymbolsExamples9"
           id="SFSymbolsExamples9_tab"
           role="tab" 
           aria-selected="false">9</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#SFSymbolsExamples10"
           id="SFSymbolsExamples10_tab"
           role="tab" 
           aria-selected="false">10</a>
    </li>
    </ul>

<div class="tab-content">
<div class="tab-pane show active" id="SFSymbolsExamples1" role="tabpanel">

![](../../../../../images/iOSdev/wwdc22-SFSymbols-Example_1.png)
</div>

<div class="tab-pane" id="SFSymbolsExamples2" role="tabpanel">

![](../../../../../images/iOSdev/wwdc22-SFSymbols-Example_2.png) 
</div>

<div class="tab-pane" id="SFSymbolsExamples3" role="tabpanel">

![](../../../../../images/iOSdev/wwdc22-SFSymbols-Example_3.png) 
</div>

<div class="tab-pane" id="SFSymbolsExamples4" role="tabpanel">

![](../../../../../images/iOSdev/wwdc22-SFSymbols-Example_4.png) 
</div>

<div class="tab-pane" id="SFSymbolsExamples5" role="tabpanel">

![](../../../../../images/iOSdev/wwdc22-SFSymbols-Example_5.png) 
</div>

<div class="tab-pane" id="SFSymbolsExamples6" role="tabpanel">

![](../../../../../images/iOSdev/wwdc22-SFSymbols-Example_6.png) 
</div>

<div class="tab-pane" id="SFSymbolsExamples7" role="tabpanel">

![](../../../../../images/iOSdev/wwdc22-SFSymbols-Example_7.png) 
</div>

<div class="tab-pane" id="SFSymbolsExamples8" role="tabpanel">

![](../../../../../images/iOSdev/wwdc22-SFSymbols-Example_8.png) 
</div>

<div class="tab-pane" id="SFSymbolsExamples9" role="tabpanel">

![](../../../../../images/iOSdev/wwdc22-SFSymbols-Example_9_1.png)
![](../../../../../images/iOSdev/wwdc22-SFSymbols-Example_9_2.png) 
</div>

<div class="tab-pane" id="SFSymbolsExamples10" role="tabpanel">

![](../../../../../images/iOSdev/wwdc22-SFSymbols-Example_10.png) 
</div>
</div>