---
title : "Widgets"
abstract: "Learn how to make animated and interactive widgets for your apps and games."

displayToc: true
---

# WWDC 2023: Widgets
Find hereafter a detailed summary of two videos that belong to a [taxonomy&nbsp;of&nbsp;some&nbsp;WWDC&nbsp;footages](../../).

The original videos are available on the **Apple official website** ([session&nbsp;10027](https://developer.apple.com/videos/play/wwdc2023/10027/), [session&nbsp;10028](https://developer.apple.com/videos/play/wwdc2023/10028/)).
![](../../../../../images/iOSdev/wwdc23-Widgets_Poster.png)
"Learn how to make **animated and interactive widgets** for your apps and games. We'll show you how to tweak animations for entry transitions and add **interactivity using SwiftUI** Button and Toggle so that you can create powerful moments right from the **Home Screen and Lock Screen**."

"The widget ecosystem is expanding: Discover how you can use the **latest WidgetKit APIs** to make your widget look great everywhere. We'll show you how to **identify your widget's background**, adjust layout dynamically, and **prepare colors** for vibrant rendering so that your widget can sit seamlessly in any environment."

</br>Hereafter, the underlined elements **lead directly to the playback of the WWDC video** at the appropriate moment.
</br>

## Overview
Since their **introduction in iOS 14**, many [useful&nbsp;enhancements](https://developer.apple.com/videos/play/wwdc2023/10027/?time=21) have been made regarding the **widgets**, most notably this year with the use of an `iPhone` widget on a `Mac`.

![](../../../../../images/iOSdev/wwdc23-Widgets_12.png)

## [Content&nbsp;margins](https://developer.apple.com/videos/play/wwdc2023/10027/?time=102)
The **content margins**, which are available on all platforms that support widgets, were introduced this year as a **new feature** to replace the safe areas.

![](../../../../../images/iOSdev/wwdc23-Widgets_13.png)

## Background
All platforms support automatically removing a widget's background.
<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item" role="presentation">
        <a class="nav-link active"
           data-bs-toggle="tab" 
           href="#WidgetsBackground1"
           id="WidgetsBackground1_tab"
           role="tab" 
           aria-selected="true">iPad</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#WidgetsBackground2"
           id="WidgetsBackground2_tab"
           role="tab" 
           aria-selected="false">iOS</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#WidgetsBackground3"
           id="WidgetsBackground3_tab"
           role="tab" 
           aria-selected="false">WatchOS</a>
    </li>
    </ul>

<div class="tab-content">
<div class="tab-pane show active" id="WidgetsBackground1" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment regarding the ipad removed background" href="https://developer.apple.com/videos/play/wwdc2023/10027/?time=181">🎬</a>

![](../../../../../images/iOSdev/wwdc23-Widgets_15.png)
</div>

<div class="tab-pane" id="WidgetsBackground2" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment regarding the ios removed background" href="https://developer.apple.com/videos/play/wwdc2023/10027/?time=254">🎬</a>

![](../../../../../images/iOSdev/wwdc23-Widgets_14.png)
</div>

<div class="tab-pane" id="WidgetsBackground3" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment regarding the watchos removed background" href="https://developer.apple.com/videos/play/wwdc2023/10027/?time=228">🎬</a>

![](../../../../../images/iOSdev/wwdc23-Widgets_16.png)
</div>
</div>
</br>
</br>

## [Layout](https://developer.apple.com/videos/play/wwdc2023/10027/?time=269)
![](../../../../../images/iOSdev/wwdc23-Widgets_17.png)

Even if the created widget's layout may be natively optimized, it's still possible to [tailor&nbsp;the&nbsp;layout](https://developer.apple.com/videos/play/wwdc2023/10027/?time=314) to fit the environment.

![](../../../../../images/iOSdev/wwdc23-Widgets_18.png)

</br>

## [Vibrant&nbsp;mode](https://developer.apple.com/videos/play/wwdc2023/10027/?time=358)
This mode is used by the system for rendering widgets on the lock screen through the **WidgetRenderingMode** structure that's the best way to avoid possible illegible situations. 

![](../../../../../images/iOSdev/wwdc23-Widgets_19.png)

</br>

![](../../../../../images/iOSdev/wwdc23-Widgets_7.png)

## [Animations](https://developer.apple.com/videos/play/wwdc2023/10028/?time=85)
Animations let the users **perceive changes** of the content and the outcome of their actions, which makes widgets more engaging.</br>

In [Xcode](https://developer.apple.com/videos/play/wwdc2023/10028/?time=130), the widgets make animations work in a specific way while they have **no `State`** and subsequently **create a timeline** for selecting the different views: `SwiftUI` determines where the differences are for living up the altered parts with default or customized animations used as transitions in the [previews](https://developer.apple.com/videos/play/wwdc2023/10028/?time=217).
![](../../../../../images/iOSdev/wwdc23-Widgets_1.png)


A simple [text&nbsp;transition](https://developer.apple.com/videos/play/wwdc2023/10028/?time=320) is created with few lines of code...
![](../../../../../images/iOSdev/wwdc23-Widgets_2.png)

... that may also gives rise to some [text&nbsp;animation&nbsp;styles](https://developer.apple.com/videos/play/wwdc2023/10028/?time=365).

![](../../../../../images/iOSdev/wwdc23-Widgets_3.png)
Note that this kind of animation may [match a specific value](https://developer.apple.com/videos/play/wwdc2023/10028/?time=423) as well.
</br>

## [Interactivity](https://developer.apple.com/videos/play/wwdc2023/10028/?time=462)
Interactivity lets the users directly **modify the data** in the widget through the most crucial actions in the app.

### [Architecture](https://developer.apple.com/videos/play/wwdc2023/10028/?time=482)
To the interactivity's end, a detailed architecture model of the widgets' functioning is highlighted, mostly built on the components of the previous section.
![](../../../../../images/iOSdev/wwdc23-Widgets_4.png)

The [best&nbsp;approach](https://developer.apple.com/videos/play/wwdc2023/10028/?time=553) to **update non-static data** is to reload all widget timelines for a given kind using the **reloadTimelines** instance method.
![](../../../../../images/iOSdev/wwdc23-Widgets_5.png)

A [few&nbsp;points](https://developer.apple.com/videos/play/wwdc2023/10028/?time=577) have to be remembered regarding the widgets' architecture.

![](../../../../../images/iOSdev/wwdc23-Widgets_6.png)
</br>

### [Implementation](https://developer.apple.com/videos/play/wwdc2023/10028/?time=610)
As discussed earlier, the process sharing for widgets comes with the controls' **closures execution** by `SwiftUI` in a [different&nbsp;process&nbsp;space](https://developer.apple.com/videos/play/wwdc2023/10028/?time=615) for which the inconvenient might be removed thanks to the **[AppIntent](https://developer.apple.com/videos/play/wwdc2023/10028/?time=651) protocol** to represent the action within the widget.

![](../../../../../images/iOSdev/wwdc23-Widgets_8.png)

The number of widgets' controls is quite limited but the formal [implementation](https://developer.apple.com/videos/play/wwdc2023/10028/?time=722) is straightforward.

![](../../../../../images/iOSdev/wwdc23-Widgets_9.png)

Introducing a [button&nbsp;for&nbsp;interactivity](https://developer.apple.com/videos/play/wwdc2023/10028/?time=761) may bring about new perspectives for pointing out the item existence through `Shortcut` and `Siri`.
![](../../../../../images/iOSdev/wwdc23-Widgets_10.png)

Finally, note that the **[invalidatableContent](https://developer.apple.com/videos/play/wwdc2023/10028/?time=981)** modifier is a good way to handle the [update&nbsp;latency](https://developer.apple.com/videos/play/wwdc2023/10028/?time=1026).

![](../../../../../images/iOSdev/wwdc23-Widgets_11.png)
