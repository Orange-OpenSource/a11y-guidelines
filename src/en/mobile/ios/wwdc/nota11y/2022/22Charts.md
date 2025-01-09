---
title : "Discover the Swift Charts framework"
abstract: "Discover this new flexible framework that helps you create charts entirely in SwiftUI that look and feel right at home on all Apple platforms."

displayToc: true
---

# WWDC 2022: Discover the Swift Charts framework
Find hereafter a detailed summary of four videos that belong to a [taxonomy&nbsp;of&nbsp;some&nbsp;WWDC&nbsp;footages](../../).

The original videos are available on the **Apple official website** ([session&nbsp;10136](https://developer.apple.com/videos/play/wwdc2022/10136/), [session&nbsp;10137](https://developer.apple.com/videos/play/wwdc2022/10137/), [session&nbsp;110340](https://developer.apple.com/videos/play/wwdc2022/110340/) and [session&nbsp;110342](https://developer.apple.com/videos/play/wwdc2022/110342/)).

![](../../../../../images/iOSdev/wwdc22-Charts-PresentationsPoster.png)

"Say hello to **Swift Charts** — a flexible **framework** that helps you create charts entirely **in SwiftUI** that look and feel right at home on all Apple platforms.
Discover how you can use compositional syntax to make informative, delightful, and accessible charts with less code.
We'll share the building blocks for making visualizations with Swift Charts, and explore how you can change your charts' design with a simple modifier.
We'll also take you through the **latest updates to Xcode Previews** to help you chart a path toward an engaging experience."

"Dive deep into data visualizations: Learn how **Swift Charts and SwiftUI** can help your apps represent complex datasets through a wide variety of chart options.
We'll show you how to plot different kinds of data and compose marks to create more elaborate charts.
We'll also take you through Swift Charts' extensive chart customization API to help you **match the style of your charts** to your app."

"Learn how to **design focused, approachable, and accessible charts**.
We'll show you how to design great charts with clear marks, axes, descriptions, interaction, and color and help you **create useful experiences for everyone**."

"Learn how you can **enhance your app with charts** to communicate data with more clarity and appeal.
We'll show you when to use charts and how they work together in a chart design system."

</br>Most of the illustrations are parts of the Apple presentations and may be available at the `Resources` section inside the `Overview` sheet of each video.
</br>Hereafter, the underlined elements lead directly to the playback of the WWDC video at the appropriate moment.
</br>
## [Design](https://developer.apple.com/videos/play/wwdc2022/110342/?time=84)
![](../../../../../images/iOSdev/wwdc22-Charts_1.png)
</br>
### [When&nbsp;to&nbsp;use&nbsp;charts?](https://developer.apple.com/videos/play/wwdc2022/110342/?time=117)

![](../../../../../images/iOSdev/wwdc22-Charts_2.png)

The type of chart is based on the crucial priority to **[keep&nbsp;focus](https://developer.apple.com/videos/play/wwdc2022/110342/?time=144)** on the displayed information to be easily understood by the user.
![](../../../../../images/iOSdev/wwdc22-Charts_3.png)
</br>
### How&nbsp;to&nbsp;use&nbsp;charts?
Some important elements must be taken into account for providing an efficient chart.
![](../../../../../images/iOSdev/wwdc22-Charts_9.png)

<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item" role="presentation">
        <a class="nav-link active"
           data-bs-toggle="tab" 
           href="#DesignChartsDescription"
           id="DesignChartsDescription_tab"
           role="tab" 
           aria-selected="true">Description</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#DesignChartsDetails"
           id="DesignChartsDetails_tab"
           role="tab" 
           aria-selected="false">Details</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#DesignChartsComplexity"
           id="DesignChartsComplexity_tab"
           role="tab" 
           aria-selected="false">Complexity</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#DesignChartsExample"
           id="DesignChartsExample_tab"
           role="tab" 
           aria-selected="false">Example</a>
    </li>
    </ul>

<div class="tab-content">
<div class="tab-pane show active" id="DesignChartsDescription" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment regarding the chart design through the content description" href="https://developer.apple.com/videos/play/wwdc2022/110342/?time=220">🎬</a>

![](../../../../../images/iOSdev/wwdc22-Charts_4.png)
</div>

<div class="tab-pane" id="DesignChartsDetails" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment regarding the chart design through the details" href="https://developer.apple.com/videos/play/wwdc2022/110342/?time=306">🎬</a>

![](../../../../../images/iOSdev/wwdc22-Charts_5.png)

Adding [dynamic&nbsp;functionalities](https://developer.apple.com/videos/play/wwdc2022/110342/?time=358) may be an interesting way of highlighting some specific information.
![](../../../../../images/iOSdev/wwdc22-Charts_6.png)
</div>

<div class="tab-pane" id="DesignChartsComplexity" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment regarding the chart design through the complexity highlighting" href="https://developer.apple.com/videos/play/wwdc2022/110342/?time=478">🎬</a>

When [interactivity](https://developer.apple.com/videos/play/wwdc2022/110342/?time=435) is an integral part of a chart, the height and width thereof should be scaled in line with the user experience in order to smoothly display  the different data types.

![](../../../../../images/iOSdev/wwdc22-Charts_7.png)
</div>

<div class="tab-pane" id="DesignChartsExample" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment regarding the chart design through an example" href="https://developer.apple.com/videos/play/wwdc2022/110342/?time=526">🎬</a>

![](../../../../../images/iOSdev/wwdc22-Charts_8.png)
</div>
</div>
</br></br>

### [What&nbsp;is&nbsp;an&nbsp;effective&nbsp;chart?](https://developer.apple.com/videos/play/wwdc2022/110340?time=61)

![](../../../../../images/iOSdev/wwdc22-Charts_16.png)

What are the [most&nbsp;significant&nbsp;insights](https://developer.apple.com/videos/play/wwdc2022/110340?time=104) for designing an efficient chart?
![](../../../../../images/iOSdev/wwdc22-Charts_17.png)
</br>
### [The&nbsp;design&nbsp;process](https://developer.apple.com/videos/play/wwdc2022/110340?time=163)
 
 <ul class="nav nav-tabs" role="tablist">
    <li class="nav-item" role="presentation">
        <a class="nav-link active"
           data-bs-toggle="tab" 
           href="#DesignProcessMarks"
           id="DesignProcessMarks_tab"
           role="tab" 
           aria-selected="true">Marks</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#DesignProcessAxes"
           id="DesignProcessAxes_tab"
           role="tab" 
           aria-selected="false">Axes</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#DesignProcessDescriptions"
           id="DesignProcessDescriptions_tab"
           role="tab" 
           aria-selected="false">Descriptions</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#DesignProcessInteraction"
           id="DesignProcessInteraction_tab"
           role="tab" 
           aria-selected="false">Interaction</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#DesignProcessColor"
           id="DesignProcessColor_tab"
           role="tab" 
           aria-selected="false">Color</a>
    </li>
    </ul>

<div class="tab-content">
<div class="tab-pane show active" id="DesignProcessMarks" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment regarding the chart design process through the marks" href="https://developer.apple.com/videos/play/wwdc2022/110340/?time=201">🎬</a>

![](../../../../../images/iOSdev/wwdc22-Charts_20.png)

**[Marks](https://developer.apple.com/videos/play/wwdc2022/10136?time=170)** represent the visual elements for each item in the data.
![](../../../../../images/iOSdev/wwdc22-Charts_18.png)

[Options](https://developer.apple.com/videos/play/wwdc2022/110340?time=279) for a mark may be various but the **goal of the chart** will define the appropriate one.
![](../../../../../images/iOSdev/wwdc22-Charts_19.png)

Regarding the [accessibility](https://developer.apple.com/videos/play/wwdc2022/110340?time=368), the use of a chart by **impaired people** is also highly possible thanks to the **SwiftUI API's possibilities**.
![](../../../../../images/iOSdev/wwdc22-Charts_21.png)
</div>

<div class="tab-pane" id="DesignProcessAxes" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment regarding the chart design process through the axes" href="https://developer.apple.com/videos/play/wwdc2022/110340/?time=505">🎬</a>

**Adjusting the ranges of values** is definitely important according to the goal to be reached.
![](../../../../../images/iOSdev/wwdc22-Charts_22.png)

It's also crucial to [adapt&nbsp;the&nbsp;density](https://developer.apple.com/videos/play/wwdc2022/110340/?time=621) of **grid lines and labels**.
![](../../../../../images/iOSdev/wwdc22-Charts_23.png)
</div>

<div class="tab-pane" id="DesignProcessDescriptions" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment regarding the chart design process through the descriptions" href="https://developer.apple.com/videos/play/wwdc2022/110340/?time=734">🎬</a>

![](../../../../../images/iOSdev/wwdc22-Charts_24.png)

As regards the accessibility, including the [`Audio`&nbsp;`Graphs`&nbsp;`feature`](https://developer.apple.com/videos/play/wwdc2022/110340/?time=878) should facilitate the use of a chart for impaired people.
</div>

<div class="tab-pane" id="DesignProcessInteraction" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment regarding the chart design process through the interactions" href="https://developer.apple.com/videos/play/wwdc2022/110340/?time=938">🎬</a>

![](../../../../../images/iOSdev/wwdc22-Charts_25.png)

**Interactions** are a great opportunity to **enhance the user experience** through the different ways to introduce data on the same chart.
![](../../../../../images/iOSdev/wwdc22-Charts_26.png)

One of the most obvious examples is the [mark&nbsp;selection](https://developer.apple.com/videos/play/wwdc2022/110340/?time=960) to find out the value thereof. 
![](../../../../../images/iOSdev/wwdc22-Charts_27.png)

This kind of interaction must also be designed and implemented with [all&nbsp;the&nbsp;categories&nbsp;of&nbsp;users](https://developer.apple.com/videos/play/wwdc2022/110340/?time=995) in mind.
![](../../../../../images/iOSdev/wwdc22-Charts_28.png)

And looking more closely at [VoiceOver](https://developer.apple.com/videos/play/wwdc2022/110340/?time=1038), it's crucial to put a special attention to the **labels authoring**.
![](../../../../../images/iOSdev/wwdc22-Charts_29.png)
</div>

<div class="tab-pane" id="DesignProcessColor" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment regarding the chart design process through the color" href="https://developer.apple.com/videos/play/wwdc2022/110340/?time=1174">🎬</a>

![](../../../../../images/iOSdev/wwdc22-Charts_30.png)

[Carrying&nbsp;information](https://developer.apple.com/videos/play/wwdc2022/110340/?time=1210) through colors may be important, but it mustn't be the only way, quite the contrary.
![](../../../../../images/iOSdev/wwdc22-Charts_31.png)

It's also essential to assist the comprehension regarding the **[meaning&nbsp;of&nbsp;the&nbsp;displayed&nbsp;colors](https://developer.apple.com/videos/play/wwdc2022/110340/?time=1275)**.
![](../../../../../images/iOSdev/wwdc22-Charts_32.png)

Finally, **[balancing&nbsp;the&nbsp;visual&nbsp;height](https://developer.apple.com/videos/play/wwdc2022/110340/?time=1306)** and **[choosing distinct&nbsp;colors](https://developer.apple.com/videos/play/wwdc2022/110340/?time=1371)** are important steps to be embedded in the design...
![](../../../../../images/iOSdev/wwdc22-Charts_33.png)

... including the respect of the **[user&nbsp;settings](https://developer.apple.com/videos/play/wwdc2022/110340/?time=1415)** with an express look at those regarding the accessibility.
![](../../../../../images/iOSdev/wwdc22-Charts_34.png)
</div>
</div>
</br></br>

### [The&nbsp;chart&nbsp;design&nbsp;system](https://developer.apple.com/videos/play/wwdc2022/110342/?time=604)

![](../../../../../images/iOSdev/wwdc22-Charts_15.png)

<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item" role="presentation">
        <a class="nav-link active"
           data-bs-toggle="tab" 
           href="#DesignChartSystemFamiliar"
           id="DesignChartSystemFamiliar_tab"
           role="tab" 
           aria-selected="true">Familiar&nbsp;forms</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#DesignChartSystemDifferences"
           id="DesignChartSystemDifferences_tab"
           role="tab" 
           aria-selected="false">Differences</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#DesignChartSystemExample"
           id="DesignChartSystemExample_tab"
           role="tab" 
           aria-selected="false">Example</a>
    </li>
    </ul>

<div class="tab-content">
<div class="tab-pane show active" id="DesignChartSystemFamiliar" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment regarding the chart design system through the use of familiar forms" href="https://developer.apple.com/videos/play/wwdc2022/110342/?time=615">🎬</a>

![](../../../../../images/iOSdev/wwdc22-Charts_10.png)

Designing one's forms is also possible inside a [careful&nbsp;frame](https://developer.apple.com/videos/play/wwdc2022/110342/?time=636) so as to immediately assist the comprehension regarding the displayed information.
![](../../../../../images/iOSdev/wwdc22-Charts_11.png)
</div>

<div class="tab-pane" id="DesignChartSystemDifferences" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment regarding the chart design system through the importance of the differences between charts" href="https://developer.apple.com/videos/play/wwdc2022/110342/?time=673">🎬</a>

![](../../../../../images/iOSdev/wwdc22-Charts_13.png)

[Differences](https://developer.apple.com/videos/play/wwdc2022/110342/?time=692) between charts should be emphasized through basic manipulations that keep the user's attention to the slightest details.
![](../../../../../images/iOSdev/wwdc22-Charts_12.png)
</div>

<div class="tab-pane" id="DesignChartSystemExample" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment regarding the chart design system through an example" href="https://developer.apple.com/videos/play/wwdc2022/110342/?time=768">🎬</a>

![](../../../../../images/iOSdev/wwdc22-Charts_14.png)
</div>
</div>
</br></br>

## Build
### Introduction
Some examples are explained in details to assist the comprehension of a chart creation.

<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item" role="presentation">
        <a class="nav-link active"
           data-bs-toggle="tab" 
           href="#BuildExamples1"
           id="BuildExamples1_tab"
           role="tab" 
           aria-selected="true">Example&nbsp;1</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#BuildExamples2"
           id="BuildExamples2_tab"
           role="tab" 
           aria-selected="false">Example&nbsp;2</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#BuildExamples3"
           id="BuildExamples3_tab"
           role="tab" 
           aria-selected="false">Example&nbsp;3</a>
    </li>
    </ul>

<div class="tab-content">
<div class="tab-pane show active" id="BuildExamples1" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment regarding the first chart example" href="https://developer.apple.com/videos/play/wwdc2022/10137/?time=199">🎬</a>

![](../../../../../images/iOSdev/wwdc22-Charts_54.png)

![](../../../../../images/iOSdev/wwdc22-Charts_55.png)
</div>

<div class="tab-pane" id="BuildExamples2" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment regarding the second chart example" href="https://developer.apple.com/videos/play/wwdc2022/10136/?time=188">🎬</a>

![](../../../../../images/iOSdev/wwdc22-Charts_40.png)

First step to display a [simple&nbsp;bar&nbsp;chart](https://developer.apple.com/videos/play/wwdc2022/10136?time=558)...
![](../../../../../images/iOSdev/wwdc22-Charts_39.png)

... for which a [SwiftUI&nbsp;picker](https://developer.apple.com/videos/play/wwdc2022/10136?time=599) is incorporated.
![](../../../../../images/iOSdev/wwdc22-Charts_37.png)
</div>

<div class="tab-pane" id="BuildExamples3" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment regarding the third chart example" href="https://developer.apple.com/videos/play/wwdc2022/10136/?time=775">🎬</a>

Combine the data into one multiseries line chart.
![](../../../../../images/iOSdev/wwdc22-Charts_38.png)
</div>
</div>
</br></br>

### Mark properties
The `Swift`&nbsp;`Charts` framework is based on three main [types of data](https://developer.apple.com/videos/play/wwdc2022/10137/?time=621)...
![](../../../../../images/iOSdev/wwdc22-Charts_43.png)

... that may be [combined](https://developer.apple.com/videos/play/wwdc2022/10137/?time=741) with the **six different mark types** and the **six mark properties**.
![](../../../../../images/iOSdev/wwdc22-Charts_45.png)

Following this rationale could lead to a [scale&nbsp;adaptation](https://developer.apple.com/videos/play/wwdc2022/10137/?time=760) and a [colour&nbsp;modification](https://developer.apple.com/videos/play/wwdc2022/10137/?time=866) for some rendered information.
![](../../../../../images/iOSdev/wwdc22-Charts_46.png)

Using data within the mark properties is the basis for [creating&nbsp;a&nbsp;chart](https://developer.apple.com/videos/play/wwdc2022/10137/?time=672).
![](../../../../../images/iOSdev/wwdc22-Charts_44.png)

The creation of charts through [marks&nbsp;and&nbsp;their&nbsp;properties](https://developer.apple.com/videos/play/wwdc2022/10136?time=871) leads to various and diversified styles.
![](../../../../../images/iOSdev/wwdc22-Charts_36.png)

These properties are easy to be adapted according to the way for displaying the information.

<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item" role="presentation">
        <a class="nav-link active"
           data-bs-toggle="tab" 
           href="#MarksPropertiesBasics"
           id="MarksPropertiesBasics_tab"
           role="tab" 
           aria-selected="true">Basics</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#MarksPropertiesAddSerie"
           id="MarksPropertiesAddSerie_tab"
           role="tab" 
           aria-selected="false">Add&nbsp;a&nbsp;serie</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#MarksPropertiesTailor"
           id="MarksPropertiesTailor_tab"
           role="tab" 
           aria-selected="false">Tailor&nbsp;the&nbsp;chart</a>
    </li>
    </ul>

<div class="tab-content">
<div class="tab-pane show active" id="MarksPropertiesBasics" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment regarding the first chart example" href="https://developer.apple.com/videos/play/wwdc2022/10137/?time=314">🎬</a>

![](../../../../../images/iOSdev/wwdc22-Charts_56.png)
</div>

<div class="tab-pane" id="MarksPropertiesAddSerie" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment regarding the second chart example" href="https://developer.apple.com/videos/play/wwdc2022/10136/?time=696">🎬</a>

![](../../../../../images/iOSdev/wwdc22-Charts_57.png)
</div>

<div class="tab-pane" id="MarksPropertiesTailor" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment regarding the third chart example" href="https://developer.apple.com/videos/play/wwdc2022/10136/?time=813">🎬</a>

![](../../../../../images/iOSdev/wwdc22-Charts_58.png)
</div>
</div>
</br></br>

### Mark&nbsp;combinations
![](../../../../../images/iOSdev/wwdc22-Charts_59.png)

Combining marks is the appropriate way for creating more complex charts.
![](../../../../../images/iOSdev/wwdc22-Charts_60.png)

<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item" role="presentation">
        <a class="nav-link active"
           data-bs-toggle="tab" 
           href="#MarksCombination1"
           id="MarksPropertiesBasics_tab"
           role="tab" 
           aria-selected="true">1</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#MarksCombination2"
           id="MarksPropertiesAddSerie_tab"
           role="tab" 
           aria-selected="false">2</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#MarksCombination3"
           id="MarksPropertiesTailor_tab"
           role="tab" 
           aria-selected="false">3</a>
    </li>
    </ul>

<div class="tab-content">
<div class="tab-pane show active" id="MarksCombination1" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment regarding the first  example for creating a more complex chart" href="https://developer.apple.com/videos/play/wwdc2022/10137/?time=483">🎬</a>

![](../../../../../images/iOSdev/wwdc22-Charts_61.png)
</div>

<div class="tab-pane" id="MarksCombination2" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment regarding the second example for creating a more complex chart" href="https://developer.apple.com/videos/play/wwdc2022/10137/?time=523">🎬</a>

![](../../../../../images/iOSdev/wwdc22-Charts_62.png)
</div>

<div class="tab-pane" id="MarksCombination3" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment regarding the third example for creating a more complex chart" href="https://developer.apple.com/videos/play/wwdc2022/10137/?time=560">🎬</a>

![](../../../../../images/iOSdev/wwdc22-Charts_63.png)
</div>
</div>
</br></br>

### [Customizations](https://developer.apple.com/videos/play/wwdc2022/10137/?time=880)
![](../../../../../images/iOSdev/wwdc22-Charts_47.png)

Customizations of some chart elements are possible.
![](../../../../../images/iOSdev/wwdc22-Charts_48.png)

<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item" role="presentation">
        <a class="nav-link active"
           data-bs-toggle="tab" 
           href="#CustomizationXaxis"
           id="CustomizationXaxis_tab"
           role="tab" 
           aria-selected="true">X-axis</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#CustomizationYaxis"
           id="CustomizationYaxis_tab"
           role="tab" 
           aria-selected="false">Y-axis</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#CustomizationPlotArea"
           id="CustomizationPlotArea_tab"
           role="tab" 
           aria-selected="false">Plot&nbsp;area</a>
    </li>
    </ul>

<div class="tab-content">
<div class="tab-pane show active" id="CustomizationXaxis" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment regarding the chart customization for the X-axis" href="https://developer.apple.com/videos/play/wwdc2022/10137/?time=907">🎬</a>

![](../../../../../images/iOSdev/wwdc22-Charts_49.png)
</div>

<div class="tab-pane" id="CustomizationYaxis" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment regarding the chart customization for the Y-axis" href="https://developer.apple.com/videos/play/wwdc2022/10137/?time=1019">🎬</a>

![](../../../../../images/iOSdev/wwdc22-Charts_50.png)
</div>

<div class="tab-pane" id="CustomizationPlotArea" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment regarding the chart customization for the plot area" href="https://developer.apple.com/videos/play/wwdc2022/10137/?time=1092">🎬</a>

![](../../../../../images/iOSdev/wwdc22-Charts_51.png)
</div>
</div>
</br></br>

`Swift`&nbsp;`Charts` also encompasses a **[ChartProxy](https://developer.apple.com/videos/play/wwdc2022/10137/?time=1149)** to access the scales and plot area of a chart.
![](../../../../../images/iOSdev/wwdc22-Charts_52.png)

This new structure permits the **storage of data** in state and **drives the chart rendering** thereof through a [hover&nbsp;or&nbsp;show&nbsp;data&nbsp;effects](https://developer.apple.com/videos/play/wwdc2022/10137/?time=1180) that highlight its power.
![](../../../../../images/iOSdev/wwdc22-Charts_53.png)
</br>
### [Accessibility](https://developer.apple.com/videos/play/wwdc2022/10136?time=444)
`VoiceOver` and the `Audio Graphs` feature are also taken into account in this new framework by using various [native&nbsp;elements](https://developer.apple.com/videos/play/wwdc2022/10137/?time=261).
![](../../../../../images/iOSdev/wwdc22-Charts_42.png)
</br>
### Xcode
The data visualization in `Swift`&nbsp;`Charts` is highly facilitated thanks to the **[new&nbsp;variant&nbsp;feature](https://developer.apple.com/videos/play/wwdc2022/10136?time=417)** in Xcode.
![](../../../../../images/iOSdev/wwdc22-Charts_41.png)

![](../../../../../images/iOSdev/wwdc22-Charts_35.png)