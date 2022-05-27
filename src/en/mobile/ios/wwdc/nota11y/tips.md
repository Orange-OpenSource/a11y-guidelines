---
title : "T.I.P.S."
abstract: ""

displayToc: true
---

⟹ [taxonomy&nbsp;of&nbsp;some&nbsp;WWDC&nbsp;footages](../../).
</br>
## [Typography (2020)](https://developer.apple.com/videos/play/wwdc2021/10058/)
Some [optical&nbsp;sizes](https://developer.apple.com/videos/play/wwdc2020/10175?time=99) (⟹ SFText <20pt and SFDisplay >20pt) turned into [variables&nbsp;fonts](https://developer.apple.com/videos/play/wwdc2020/10175?time=380) in 2016 to improve the [size&nbsp;modifications](https://developer.apple.com/videos/play/wwdc2020/10175?time=443).

<a href="https://developer.apple.com/videos/play/wwdc2020/10175?time=544"/>

![click to watch the playback about the above sentence at the appropriate moment.](../../../../images/iOSdev/tips20_Typography_1.png)
</a>
### Tracking,&nbsp;kerning&nbsp;&&nbsp;leading
<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item" role="presentation">
        <a class="nav-link active"
           data-bs-toggle="tab" 
           href="#TypographyTracking"
           id="TypographyTracking_tab"
           role="tab" 
           aria-selected="true">Tracking</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#TypographyTrackingKerning"
           id="TypographyTrackingKerning_tab"
           role="tab" 
           aria-selected="false">Kerning</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#TypographyTrackingLeading"
           id="TypographyTrackingLeading_tab"
           role="tab" 
           aria-selected="false">Leading</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#TypographyTrackingTightening"
           id="TypographyTrackingTightening_tab"
           role="tab" 
           aria-selected="false">Tightening</a>
    </li>
</ul>

<div class="tab-content">
<div class="tab-pane show active" id="TypographyTracking" role="tabpanel">
    
Text requires letter-spacing to vary so it can always look good at any point size ⟹ **tracking** specifically refers to the action of adding space between glyphs in text layout.

It's highly recommended to [use&nbsp;tracking](https://developer.apple.com/videos/play/wwdc2020/10175?time=643) in every situations.
<a href="https://developer.apple.com/videos/play/wwdc2020/10175?time=653"/>

![click to watch the playback about the above sentence at the appropriate moment.](../../../../images/iOSdev/tips20_Typography_Tracking.png)
</a>
</div>

<div class="tab-pane" id="TypographyTrackingKerning" role="tabpanel">
    
**Kerning** is a micro-correction of spacing that is only applied between certain pairs.

Using the tracking API is better than the kerning's because of the [process](https://developer.apple.com/videos/play/wwdc2020/10175?time=751) on the potential ligatures.
<a href="https://developer.apple.com/videos/play/wwdc2020/10175?time=731"/>

![click to watch the playback about the above sentence at the appropriate moment.](../../../../images/iOSdev/tips20_Typography_Kerning.png)
</a>
</div>

<div class="tab-pane" id="TypographyTrackingLeading" role="tabpanel">

The [line height](https://developer.apple.com/videos/play/wwdc2020/10175?time=840) is the height of font's vertical limits that can be seen as the **distance between to baselines** but when the distance between two lines increases, the space between them is referred to as **leading**.
</div>

<div class="tab-pane" id="TypographyTrackingTightening" role="tabpanel">

Let the system try and make a string fit within the best range for the user experience by using the API that connects the truncation and the tightening.
<a href="https://developer.apple.com/videos/play/wwdc2020/10175?time=766"/>

![click to watch the playback about the above sentence at the appropriate moment.](../../../../images/iOSdev/tips20_Typography_Tightening.png)
</a>
</div>
</div>
</br></br>

![](../../../../images/iOSdev/tips20_Typography_2.png)
</br>

### Design & spacing
<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item" role="presentation">
        <a class="nav-link active"
           data-bs-toggle="tab" 
           href="#TypographyDesignEmphasize"
           id="TypographyDesignEmphasize_tab"
           role="tab" 
           aria-selected="true">Emphasize</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#TypographyDesignLineHeight"
           id="TypographyDesignLineHeight_tab"
           role="tab" 
           aria-selected="false">Line&nbsp;height</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#TypographyDesignFontDesign"
           id="TypographyDesignFontDesign_tab"
           role="tab" 
           aria-selected="false">Font&nbsp;Design</a>
    </li>
</ul>

<div class="tab-content">
<div class="tab-pane show active" id="TypographyDesignEmphasize" role="tabpanel">
    
**Emphasized text styles** allow to use the **same text style sizes with a different weight**.
    
<a href="https://developer.apple.com/videos/play/wwdc2020/10175?time=1050"/>

![click to watch the playback about the above sentence at the appropriate moment.](../../../../images/iOSdev/tips20_Typography_DesignEmphasize_1.png)
</a>
This type of emphasize is available for AppKit, SwiftUI and UIKit.
<a href="https://developer.apple.com/videos/play/wwdc2020/10175?time=1085"/>
![click to watch the playback about the above sentence at the appropriate moment.](../../../../images/iOSdev/tips20_Typography_DesignEmphasize_2.png)
</a>
</div>

<div class="tab-pane" id="TypographyDesignLineHeight" role="tabpanel">

The **tight and loose leading** variants of text styles may be used to improve the reading experience by increasing or decreasing the line height.
<a href="https://developer.apple.com/videos/play/wwdc2020/10175?time=1142"/>

![click to watch the playback about the above sentence at the appropriate moment.](../../../../images/iOSdev/tips20_Typography_DesignLineHeight_1.png)
</a>
This line spacing modification is available for AppKit, SwiftUI and UIKit.
<a href="https://developer.apple.com/videos/play/wwdc2020/10175?time=1199"/>
![click to watch the playback about the above sentence at the appropriate moment.](../../../../images/iOSdev/tips20_Typography_DesignLineHeight_2.png)
</a>
</div>

<div class="tab-pane" id="TypographyDesignFontDesign" role="tabpanel">

It's possible to **change the design of an existing font descriptor** that describes a system UI font.
<a href="https://developer.apple.com/videos/play/wwdc2020/10175?time=1235"/>

![click to watch the playback about the above sentence at the appropriate moment.](../../../../images/iOSdev/tips20_Typography_DesignFontDesign_1.png)
</a>
This access system font design is available for AppKit, SwiftUI and UIKit.
<a href="https://developer.apple.com/videos/play/wwdc2020/10175?time=1266"/>
![click to watch the playback about the above sentence at the appropriate moment.](../../../../images/iOSdev/tips20_Typography_DesignFontDesign_2.png)
</a>
The `-apple-system` font family introduced by Webkit to use San Francisco font in CSS has now a **standard name**: `system-ui` with a set of CSS font family names, like `ui-rounded`, `ui-serif` and `ui-monospace` to Apple platforms.
<a href="https://developer.apple.com/videos/play/wwdc2020/10175?time=1308"/>
![click to watch the playback about the above sentence at the appropriate moment.](../../../../images/iOSdev/tips20_Typography_DesignFontDesign_3.png)
</a>
</div>
</div>
</br></br>

### Text&nbsp;styles

**Text styles** are a set of predefined combinations of a system font weight, a point size value and a leading value that are built in a system providing typographic hierarchy and making it easier to achieve clear and legible layouts.

<a href="https://developer.apple.com/videos/play/wwdc2020/10175?time=1335"/>

![click to watch the playback about the support of text styles on mac at the appropriate moment.](../../../../images/iOSdev/tips20_Typography_TextStyles_1.png)
</a>
The Catalyst apps have now a behavior that may be optimized for Mac.
<a href="https://developer.apple.com/videos/play/wwdc2020/10175?time=1308"/>
![click to watch the playback about the above sentence at the appropriate moment.](../../../../images/iOSdev/tips20_Typography_TextStyles_2.png)
</a>

### Dynamic&nbsp;type
This part deals with the way to **introduce the custom fonts** with the dynamic type feature both in UIKit and SwiftUI.

<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item" role="presentation">
        <a class="nav-link active"
           data-bs-toggle="tab" 
           href="#TypographyDynamicTypeScaling"
           id="TypographyDynamicTypeScaling_tab"
           role="tab" 
           aria-selected="true">Scaling</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#TypographyDynamicTypeUIKit"
           id="TypographyDynamicTypeUIKit_tab"
           role="tab" 
           aria-selected="false">UIKit</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#TypographyDynamicTypeSwiftUI"
           id="TypographyDynamicTypeSwiftUI_tab"
           role="tab" 
           aria-selected="false">SwiftUI</a>
    </li>
</ul>

<div class="tab-content">
<div class="tab-pane show active" id="TypographyDynamicTypeScaling" role="tabpanel">

It's important to notice that the different text styles may have different scaling behaviors. 
<a href="https://developer.apple.com/videos/play/wwdc2020/10175?time=1451"/>
![click to watch the playback about the above sentence at the appropriate moment.](../../../../images/iOSdev/tips20_Typography_DynamicTypeScaling.png)
</a>
</div>

<div class="tab-pane" id="TypographyDynamicTypeUIKit" role="tabpanel">
    
<a href="https://developer.apple.com/videos/play/wwdc2020/10175?time=1492"/>

![click to watch the playback about the implementation of a custom font in UIKit at the appropriate moment.](../../../../images/iOSdev/tips20_Typography_DynamicTypeUIKit.png)
</a>
</div>

<div class="tab-pane" id="TypographyDynamicTypeSwiftUI" role="tabpanel">

<a href="https://developer.apple.com/videos/play/wwdc2020/10175?time=1567"/>

![click to watch the playback about the implementation of a custom font in SwiftUI at the appropriate moment.](../../../../images/iOSdev/tips20_Typography_DynamicTypeSwiftUI_1.png)
</a>
... with a complete summary of what's been introduced in SwiftUI regarding the custom fonts with the dynamic type feature.
<a href="https://developer.apple.com/videos/play/wwdc2020/10175?time=1708"/>

![click to watch the playback about the implementation of a custom font in SwiftUI at the appropriate moment.](../../../../images/iOSdev/tips20_Typography_DynamicTypeSwiftUI_2.png)
</a>
</div>
</div>
</br></br>