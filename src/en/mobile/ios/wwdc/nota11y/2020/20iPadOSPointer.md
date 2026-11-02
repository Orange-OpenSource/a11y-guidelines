---
title : "Design and build for the iPadOS pointer"
abstract: "Help people who use iPad with a Magic Keyboard, mouse, trackpad or other input device get the most out of your app."

displayToc: true
---

# WWDC 2020: Design and build for the iPadOS pointer
Find hereafter a detailed summary of the above named video which belongs to a [taxonomy&nbsp;of&nbsp;some&nbsp;WWDC&nbsp;footages](../../).

The original videos are available on the **Apple official website** ([session&nbsp;10640](https://developer.apple.com/videos/play/wwdc2020/10640/) and [session&nbsp;10093](https://developer.apple.com/videos/play/wwdc2020/10093/)).

![](../../../../../images/iOSdev/wwdc20-iOSPointer-PresentationsPoster.png)

"Bring the **power of the pointer** to your **iPad app**: We'll show you how Apple's design team approached designing the iPadOS pointer to complement touch input, and how you can customize and refine pointer interactions in your app to make workflows more efficient and gratifying. Discover how the pointer's adaptive precision enables people to **quickly and confidently target interface elements** regardless of their size. We'll also share some **best practices** on adapting the pointer to complement your app's unique needs including how to select **pointer effects** and **design pointer shapes**, integrate trackpad gestures, and keyboard modifiers."

"[...] add customizations to the pointer on iPad using **pointer interaction APIs**, create pointer effects for your buttons and custom views, and change the pointer shape in specific areas of your app to highlight them."

</br>Most of the illustrations are parts of the Apple presentations and may be available at the `Resources` section inside the `Overview` sheet of each video.
</br>Hereafter, the underlined elements lead directly to the playback of the WWDC video at the appropriate moment.
</br>

## [Design](https://developer.apple.com/videos/play/wwdc2020/10640/)
The main reason why the pointer was added as an iPad support in **`iOS`&nbsp;`13.4`** mainly relies on **[ergonomics](https://developer.apple.com/videos/play/wwdc2020/10640/?time=47)** while combining its high precision with a **[touch-based&nbsp;interface](https://developer.apple.com/videos/play/wwdc2020/10093/?time=47)**.

### [Precision](https://developer.apple.com/videos/play/wwdc2020/10640/?time=112)
When using the iPadOS pointer, the required dexterity may lead to an [unwanted&nbsp;action](https://developer.apple.com/videos/play/wwdc2020/10640/?time=139)...

![](../../../../../images/iOSdev/wwdc20-iOSPointer-17.png)
<a id="anchor-adaptivePrecision"></a>
... that may be fixed through the concept of this **[adaptive&nbsp;precision](https://developer.apple.com/videos/play/wwdc2020/10640/?time=215)**.
![](../../../../../images/iOSdev/wwdc20-iOSPointer-18.png)

The rationale behind this notion is based on the [emphasis](https://developer.apple.com/videos/play/wwdc2020/10640/?time=279) of the graphic element via an underlying layout.

![](../../../../../images/iOSdev/wwdc20-iOSPointer-19.png)

Using the standard UIKit elements (including [text](https://developer.apple.com/videos/play/wwdc2020/10640/?time=310)) leads to a [transparent&nbsp;implementation](https://developer.apple.com/videos/play/wwdc2020/10640/?time=409) of the adaptive precision.

![](../../../../../images/iOSdev/wwdc20-iOSPointer-20.png)
### [Operating&nbsp;mode](https://developer.apple.com/videos/play/wwdc2020/10640/?time=530)
![](../../../../../images/iOSdev/wwdc20-iOSPointer-24.png)

The pointer is actually composed of two elements: a visible true pointer and an invisible **[model&nbsp;pointer](https://developer.apple.com/videos/play/wwdc2020/10640/?time=548)** that handles the items hovering.  
![](../../../../../images/iOSdev/wwdc20-iOSPointer-21.png)
<a id="anchor-snapping"></a>
When the true pointer is heading to an interactive element and reaches its hit area edge, the model pointer highlights the element through a dedicated animation called **[snapping](https://developer.apple.com/videos/play/wwdc2020/10640/?time=561)**.


![](../../../../../images/iOSdev/wwdc20-iOSPointer-22.png)

A pointer movement inside the hit area edges is indicated via a **[parallax&nbsp;effect](https://developer.apple.com/videos/play/wwdc2020/10640/?time=579)** that ends up when the finger raises up from the trackpad for instance.
In this case, the true pointer automatically leads to the center of the selected element thanks to the **[recentering](https://developer.apple.com/videos/play/wwdc2020/10640/?time=602)** control.
![](../../../../../images/iOSdev/wwdc20-iOSPointer-23.png)

Besides the [simultaneous&nbsp;use](https://developer.apple.com/videos/play/wwdc2020/10640/?time=649) of the pointer and touch, a connection between the pointer speed and the covered distance is generated under the name of **[acceleration&nbsp;curve](https://developer.apple.com/videos/play/wwdc2020/10640/?time=674)**.
<a id="anchor-magnetism"></a>
This movement efficiency is also improved by two pointer capabilities: **[inertia](https://developer.apple.com/videos/play/wwdc2020/10640/?time=732)** and **[magnetism](https://developer.apple.com/videos/play/wwdc2020/10640/?time=768)** that aim at easing the pointer handling through a smooth and intelligent way for finishing its path after the finger lifts the trackpad.
Note that any control that supports pointer snapping gets [magnetism&nbsp;for&nbsp;free](https://developer.apple.com/videos/play/wwdc2020/10640/?time=832).

### [Pointer&nbsp;effects](https://developer.apple.com/videos/play/wwdc2020/10640/?time=861)
Three pointer effects are available to bring focus to the interactive elements.

<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item" role="presentation">
        <a class="nav-link active"
           data-bs-toggle="tab" 
           href="#PointerEffectHighlight"
           id="PointerEffectHighlight_tab"
           role="tab" 
           aria-selected="true">Highlight</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#PointerEffectLift"
           id="PointerEffectLift_tab"
           role="tab" 
           aria-selected="false">Lift</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#PointerEffectHover"
           id="PointerEffectHover_tab"
           role="tab" 
           aria-selected="false">Hover</a>
    </li>
    </ul>

<div class="tab-content">
<div class="tab-pane show active" id="PointerEffectHighlight" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment regarding the highlight pointer effect" href="https://developer.apple.com/videos/play/wwdc2020/10640/?time=903">🎬</a>

Used for small controls with no background.
![](../../../../../images/iOSdev/wwdc20-iOSPointer-25.png)
</div>

<div class="tab-pane" id="PointerEffectLift" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment regarding the lift pointer effect" href="https://developer.apple.com/videos/play/wwdc2020/10640/?time=940">🎬</a>

Used for medium sized elements with a background.

![](../../../../../images/iOSdev/wwdc20-iOSPointer-26.png)
Besides its goal of highlighting, the [specular&nbsp;light](https://developer.apple.com/videos/play/wwdc2020/10640/?time=999) also shows the movement of the true pointer behind the graphic element.

![](../../../../../images/iOSdev/wwdc20-iOSPointer-27.png)
</div>

<div class="tab-pane" id="PointerEffectHover" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment regarding the hover pointer effect" href="https://developer.apple.com/videos/play/wwdc2020/10640/?time=1035">🎬</a>

Used for larger objects while displaying the true pointer in the foreground.

![](../../../../../images/iOSdev/wwdc20-iOSPointer-28.png)
</div>
</div>
</br></br>

#### Tips&nbsp;&&nbsp;tricks
The main rule to be followed when implementing a pointer effect is the [Automatic&nbsp;Effect](https://developer.apple.com/videos/play/wwdc2020/10640/?time=1074) that handles the best effect for an element according to its size and shape.
![](../../../../../images/iOSdev/wwdc20-iOSPointer-29.png)

Some quick examples are highlighted for helping the design implementation...
<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item" role="presentation">
        <a class="nav-link active"
           data-bs-toggle="tab" 
           href="#DesignExamples1"
           id="DesignExamples1_tab"
           role="tab" 
           aria-selected="true">1</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#DesignExamples2"
           id="DesignExamples2_tab"
           role="tab" 
           aria-selected="false">2</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#DesignExamples3"
           id="DesignExamples3_tab"
           role="tab" 
           aria-selected="false">3</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#DesignExamples4"
           id="DesignExamples4_tab"
           role="tab" 
           aria-selected="false">4</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#DesignExamples5"
           id="DesignExamples5_tab"
           role="tab" 
           aria-selected="false">5</a>
    </li>
    </ul>

<div class="tab-content">
<div class="tab-pane show active" id="DesignExamples1" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment regarding the following example" href="https://developer.apple.com/videos/play/wwdc2020/10640/?time=1116">🎬</a>

Apply consistency between the toolbar elements.

![](../../../../../images/iOSdev/wwdc20-iOSPointer-30-1.png)
</div>

<div class="tab-pane" id="DesignExamples2" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment regarding the following example" href="https://developer.apple.com/videos/play/wwdc2020/10640/?time=1167">🎬</a>

Combine effects in cases like the segmented control.

![](../../../../../images/iOSdev/wwdc20-iOSPointer-30-2.png)
</div>

<div class="tab-pane" id="DesignExamples3" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment regarding the following example" href="https://developer.apple.com/videos/play/wwdc2020/10640/?time=1200">🎬</a>

Adapt the area around an element for getting the most efficient activation of the pointer effect.

![](../../../../../images/iOSdev/wwdc20-iOSPointer-30-3.png)
</div>

<div class="tab-pane" id="DesignExamples4" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment regarding the following example" href="https://developer.apple.com/videos/play/wwdc2020/10640/?time=1240">🎬</a>

Avoid important gaps between elements.

![](../../../../../images/iOSdev/wwdc20-iOSPointer-30-4.png)
</div>

<div class="tab-pane" id="DesignExamples5" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment regarding the following example" href="https://developer.apple.com/videos/play/wwdc2020/10640/?time=1262">🎬</a>

Adapt the `Lift`&nbsp;effect with the potential shadow of the selected element to avoid unwanted cut out.

![](../../../../../images/iOSdev/wwdc20-iOSPointer-30-5.png)
</div>
</div>
</br></br>

... with an interesting suggestion regarding the [recommended&nbsp;space](https://developer.apple.com/videos/play/wwdc2020/10640/?time=1225) around a graphic element.
![](../../../../../images/iOSdev/wwdc20-iOSPointer-31.png)
#### Customize&nbsp;&&nbsp;combine
With the `Highlight` and `Lift` effects, it's crucial to **[adapt&nbsp;the&nbsp;corner&nbsp;radius](https://developer.apple.com/videos/play/wwdc2020/10640/?time=1288)** of the graphic elements to reach a perfect rendering.

![](../../../../../images/iOSdev/wwdc20-iOSPointer-32.png)
Various options should be checked regarding the `Hover` effect:
<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item" role="presentation">
        <a class="nav-link active"
           data-bs-toggle="tab" 
           href="#CombineHoverWithShadow"
           id="CombineHoverWithShadow_tab"
           role="tab" 
           aria-selected="true">Scale&nbsp;up&nbsp;&&nbsp;Shadow</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#CombineHoverWithTinting"
           id="CombineHoverWithTinting_tab"
           role="tab" 
           aria-selected="false">Tinting</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#CombineHoverWithCustomShape"
           id="CombineHoverWithCustomShape_tab"
           role="tab" 
           aria-selected="false">Pointer&nbsp;custom&nbsp;shape</a>
    </li>
    </ul>

<div class="tab-content">
<div class="tab-pane show active" id="CombineHoverWithShadow" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment regarding the hover effect with scale up and shadow" href="https://developer.apple.com/videos/play/wwdc2020/10640/?time=1305">🎬</a>
![](../../../../../images/iOSdev/wwdc20-iOSPointer-33.png)
It's important to notice that **the shadow shouldn't be implemented without the scaling**.
</div>

<div class="tab-pane" id="CombineHoverWithTinting" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment regarding the hover effect with tinting" href="https://developer.apple.com/videos/play/wwdc2020/10640/?time=1323">🎬</a>
![](../../../../../images/iOSdev/wwdc20-iOSPointer-34.png)
</div>

<div class="tab-pane" id="CombineHoverWithCustomShape" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment regarding the hover effect with pointer custom shape" href="https://developer.apple.com/videos/play/wwdc2020/10640/?time=1344">🎬</a>
![](../../../../../images/iOSdev/wwdc20-iOSPointer-35.png)
The I-beam tries to stay in the center of the element thanks to the [snapping](#anchor-snapping) effect that acts as a magnetic attraction towards the middle of the object.
</div>
</div>
</br></br>

### [Pointer&nbsp;appearance](https://developer.apple.com/videos/play/wwdc2020/10640/?time=1456)
#### Material&nbsp;&&nbsp;shape
The **[pointer&nbsp;material](https://developer.apple.com/videos/play/wwdc2020/10640/?time=1468)** automatically adapts its colors for a better user experience.
![](../../../../../images/iOSdev/wwdc20-iOSPointer-38.png)

This material may join the initial **[shape](https://developer.apple.com/videos/play/wwdc2020/10640/?time=1545)** for a modification in order to catch the attention.
![](../../../../../images/iOSdev/wwdc20-iOSPointer-36.png)

The pointer shape may transform from a circle to a bunch of [rounded&nbsp;rectangles](https://developer.apple.com/videos/play/wwdc2020/10640/?time=1566)...
![](../../../../../images/iOSdev/wwdc20-iOSPointer-37.png)

... or morph into any [arbitrary&nbsp;shape](https://developer.apple.com/videos/play/wwdc2020/10640/?time=1591) whose goal is to show up a different functionnality.
![](../../../../../images/iOSdev/wwdc20-iOSPointer-39.png)

#### [Custom&nbsp;pointer](https://developer.apple.com/videos/play/wwdc2020/10640/?time=1653)
![](../../../../../images/iOSdev/wwdc20-iOSPointer-40.png)

To create a custom pointer, few rules are necessary to be followed:
<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item" role="presentation">
        <a class="nav-link active"
           data-bs-toggle="tab" 
           href="#CustomPointerRules1"
           id="CustomPointerRules1_tab"
           role="tab" 
           aria-selected="true">Rule&nbsp;1</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#CustomPointerRules2"
           id="CustomPointerRules2_tab"
           role="tab" 
           aria-selected="false">Rule&nbsp;2</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#CustomPointerRules3"
           id="CustomPointerRules3_tab"
           role="tab" 
           aria-selected="false">Rule&nbsp;3</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#CustomPointerRules4"
           id="CustomPointerRules4_tab"
           role="tab" 
           aria-selected="false">Rule&nbsp;4</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#CustomPointerRules5"
           id="CustomPointerRules5_tab"
           role="tab" 
           aria-selected="false">Rule&nbsp;5</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#CustomPointerRules6"
           id="CustomPointerRules6_tab"
           role="tab" 
           aria-selected="false">Rule&nbsp;6</a>
    </li>
    </ul>

<div class="tab-content">
<div class="tab-pane show active" id="CustomPointerRules1" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment regarding the first rule for creating a custom pointer" href="https://developer.apple.com/videos/play/wwdc2020/10640/?time=1685">🎬</a>

The custom shape must be **simple** and **easy to understand**.
![](../../../../../images/iOSdev/wwdc20-iOSPointer-41.png)
</div>

<div class="tab-pane" id="CustomPointerRules2" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment regarding the second rule for creating a custom pointer" href="https://developer.apple.com/videos/play/wwdc2020/10640/?time=1715">🎬</a>

Use a **solid shape** to define the pointer or a **heavy stroke** as a last resort.

![](../../../../../images/iOSdev/wwdc20-iOSPointer-42.png)
</div>

<div class="tab-pane" id="CustomPointerRules3" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment regarding the third rule for creating a custom pointer" href="https://developer.apple.com/videos/play/wwdc2020/10640/?time=1746">🎬</a>

It's recommended the custom shape size and the default size be **as close as possible** in order to keep a visual consistency.

![](../../../../../images/iOSdev/wwdc20-iOSPointer-43.png)

Should a greater size be inserted, the difference may be acceptable with a **different stroke weight**.

![](../../../../../images/iOSdev/wwdc20-iOSPointer-44.png)
</div>

<div class="tab-pane" id="CustomPointerRules4" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment regarding the fourth rule for creating a custom pointer" href="https://developer.apple.com/videos/play/wwdc2020/10640/?time=1792">🎬</a>

The **shape** and the **functionnality** of the pointer must be tightly **connected** so as to be as clearly understood as possible.

![](../../../../../images/iOSdev/wwdc20-iOSPointer-45.png)
</div>

<div class="tab-pane" id="CustomPointerRules5" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment regarding the fifth rule for creating a custom pointer" href="https://developer.apple.com/videos/play/wwdc2020/10640/?time=1836">🎬</a>

In most cases, the **point of interaction** should be at the **center** of the designed shapes apart from certain special configurations for which the anchor point location could depend on the context.

![](../../../../../images/iOSdev/wwdc20-iOSPointer-46.png)
</div>

<div class="tab-pane" id="CustomPointerRules6" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment regarding the sixth rule for creating a custom pointer" href="https://developer.apple.com/videos/play/wwdc2020/10640/?time=1889">🎬</a>

![](../../../../../images/iOSdev/wwdc20-iOSPointer-47.png)
</div>
</div>
</br></br>

### Pointer&nbsp;interactions
#### [Selection](https://developer.apple.com/videos/play/wwdc2020/10640/?time=1972)
Using pointers give rise to a better precision in the possible actions already available and it's highly recommended that **new features not be introduced [only&nbsp;for&nbsp;pointers](https://developer.apple.com/videos/play/wwdc2020/10640/?time=2097)**.
![](../../../../../images/iOSdev/wwdc20-iOSPointer-48.png)

Moreover, the [adaptive&nbsp;precision](#anchor-adaptivePrecision) of the pointer enhances the [low-precision&nbsp;input](https://developer.apple.com/videos/play/wwdc2020/10640/?time=2109) of some larger interfaces.

![](../../../../../images/iOSdev/wwdc20-iOSPointer-49.png)

[Hovering](https://developer.apple.com/videos/play/wwdc2020/10640/?time=2189) a certain area may also provide possible actions the user might want to execute in order to speed up interaction.
![](../../../../../images/iOSdev/wwdc20-iOSPointer-50.png)
#### [Gestures](https://developer.apple.com/videos/play/wwdc2020/10640/?time=2270)
Customizing a **[two-finger&nbsp;gesture](https://developer.apple.com/videos/play/wwdc2020/10640/?time=2279)** is an excellent way to improve the user experience but it's crucial to combine the goal and manipulation thereof with the pointer location.

![](../../../../../images/iOSdev/wwdc20-iOSPointer-51.png)

It's also essential to keep in mind the use of a **[secondary&nbsp;click](https://developer.apple.com/videos/play/wwdc2020/10640/?time=2375)** that may significantly speed up the access to various functions.
</br>

## [Build](https://developer.apple.com/videos/play/wwdc2020/10093/)

The pointer coexistence with a touch-based interface comes up with numerous [system&nbsp;components](https://developer.apple.com/videos/play/wwdc2020/10093/?time=119) that have pointer support built in.

![](../../../../../images/iOSdev/wwdc20-iOSPointer-1.png)

Besides some items ([scroll&nbsp;view](https://developer.apple.com/videos/play/wwdc2020/10093/?time=144), [collection/table&nbsp;view](https://developer.apple.com/videos/play/wwdc2020/10093/?time=154),...), many functions ([drag&nbsp;and&nbsp;drop](https://developer.apple.com/videos/play/wwdc2020/10093/?time=176), [secondary&nbsp;click](https://developer.apple.com/videos/play/wwdc2020/10093/?time=186),...) are also concerned by the pointer interactions:

<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item" role="presentation">
        <a class="nav-link active"
           data-bs-toggle="tab" 
           href="#UpdateAppControls"
           id="UpdateAppControls_tab"
           role="tab" 
           aria-selected="true">Controls</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#UpdateAppInteractions"
           id="UpdateAppInteractions_tab"
           role="tab" 
           aria-selected="false">Interactions</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#UpdateAppGestures"
           id="UpdateAppGestures_tab"
           role="tab" 
           aria-selected="false">Gestures</a>
    </li>
    </ul>

<div class="tab-content">
<div class="tab-pane show active" id="UpdateAppControls" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment regarding the app update via controls" href="https://developer.apple.com/videos/play/wwdc2020/10093/?time=222">🎬</a>

![](../../../../../images/iOSdev/wwdc20-iOSPointer-2.png)
</div>

<div class="tab-pane" id="UpdateAppInteractions" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment regarding the app update via interactions" href="https://developer.apple.com/videos/play/wwdc2020/10093/?time=240">🎬</a>

![](../../../../../images/iOSdev/wwdc20-iOSPointer-3.png)
</div>

<div class="tab-pane" id="UpdateAppGestures" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment regarding the app update via gestures" href="https://developer.apple.com/videos/play/wwdc2020/10093/?time=262">🎬</a>

![](../../../../../images/iOSdev/wwdc20-iOSPointer-4.png)
</div>
</div>
</br></br>

### Update&nbsp;an&nbsp;app
It's definitely not necessary to modify the pointer effects if they're adapted to the users needs.
![](../../../../../images/iOSdev/wwdc20-iOSPointer-5.png)

[Native&nbsp;controls](https://developer.apple.com/videos/play/wwdc2020/10093/?time=316) such as `UIButtons` have a pointer that's automatically handled by the system...
![](../../../../../images/iOSdev/wwdc20-iOSPointer-6.png)

... but, regarding the [custom&nbsp;views](https://developer.apple.com/videos/play/wwdc2020/10093/?time=341), it's completely up to the developper to manage the behavior thereof.
![](../../../../../images/iOSdev/wwdc20-iOSPointer-7.png)

In this perspective, these modifications are based on the [pointer&nbsp;styles](https://developer.apple.com/videos/play/wwdc2020/10093/?time=410) divided into two categories: the **[content&nbsp;effect](https://developer.apple.com/videos/play/wwdc2020/10093/?time=428)** and the **[shape&nbsp;customization](https://developer.apple.com/videos/play/wwdc2020/10093/?time=480)**.
![](../../../../../images/iOSdev/wwdc20-iOSPointer-8.png)


### [Custom&nbsp;UI](https://developer.apple.com/videos/play/wwdc2020/10093/?time=737)
When creating one's own pointer, it's vital to define the [interaction&nbsp;areas](https://developer.apple.com/videos/play/wwdc2020/10093/?time=797)...
![](../../../../../images/iOSdev/wwdc20-iOSPointer-8a.png)

... and adapt the behavior accordingly through the [delegate](https://developer.apple.com/videos/play/wwdc2020/10093/?time=862).
![](../../../../../images/iOSdev/wwdc20-iOSPointer-8b.png)

### Examples
<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item" role="presentation">
        <a class="nav-link active"
           data-bs-toggle="tab" 
           href="#alpha"
           id="alpha_tab"
           role="tab" 
           aria-selected="true">1</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#beta"
           id="beta_tab"
           role="tab" 
           aria-selected="false">2</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#teta"
           id="teta_tab"
           role="tab" 
           aria-selected="false">3</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#berta"
           id="berta_tab"
           role="tab" 
           aria-selected="false">4</a>
    </li>
    </ul>

<div class="tab-content">
<div class="tab-pane show active" id="alpha" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment regarding an element size adjustement with the highlight effect" href="https://developer.apple.com/videos/play/wwdc2020/10093/?time=548">🎬</a>

Adapt the right size of a shape regarding the highlight effect.

![](../../../../../images/iOSdev/wwdc20-iOSPointer-9.png)
</div>

<div class="tab-pane" id="beta" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment regarding an incorrect diffuse blur under a button" href="https://developer.apple.com/videos/play/wwdc2020/10093/?time=622">🎬</a>

Implement the appropriate visual impact with the light effect.

![](../../../../../images/iOSdev/wwdc20-iOSPointer-10.png)
</div>

<div class="tab-pane" id="teta" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment regarding the custom pointer shape" href="https://developer.apple.com/videos/play/wwdc2020/10093/?time=917">🎬</a>

Change the visual illustration of the pointer.

![](../../../../../images/iOSdev/wwdc20-iOSPointer-11.png)
</div>

<div class="tab-pane" id="berta" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment regarding the control of the pointer magnetism" href="https://developer.apple.com/videos/play/wwdc2020/10093/?time=1027">🎬</a>

Customize precisely the pointer behavior according to the actual user's needs.

![](../../../../../images/iOSdev/wwdc20-iOSPointer-12.png)
</div>
</div>
</br></br>

### [Animations&nbsp;&&nbsp;transitions](https://developer.apple.com/videos/play/wwdc2020/10093/?time=1160)
Providing better pointer regions may lead to a finest user experience thanks to the [magnetism](#anchor-magnetism) pointer capability.
![](../../../../../images/iOSdev/wwdc20-iOSPointer-13.png)

Moreover, a smooth interaction is also outlined via [continuous&nbsp;regions](https://developer.apple.com/videos/play/wwdc2020/10093/?time=1209) between interactive elements.
![](../../../../../images/iOSdev/wwdc20-iOSPointer-14.png)

Besides the continuous regions implementation previously exposed, adding [coordinated&nbsp;animations](https://developer.apple.com/videos/play/wwdc2020/10093/?time=1264) may be an efficient way to bring some fluidity to the navigation...
![](../../../../../images/iOSdev/wwdc20-iOSPointer-15.png)

... supported by the [pointer&nbsp;interaction&nbsp;API](https://developer.apple.com/videos/play/wwdc2020/10093/?time=1292) that eases this realization.
![](../../../../../images/iOSdev/wwdc20-iOSPointer-16.png)
