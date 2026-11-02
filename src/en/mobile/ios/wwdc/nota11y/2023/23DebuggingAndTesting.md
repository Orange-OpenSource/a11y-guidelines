---
title : "Debugging and testing"
abstract: "Improve your diagnostic experience through logging and learn how to use the test report in Xcode."

displayToc: true
---

# WWDC 2023: Debugging and testing
Find hereafter a detailed summary of two WWDC videos that belong to a [taxonomy&nbsp;of&nbsp;some&nbsp;WWDC&nbsp;footages](../../).

The original videos are available on the **Apple official website** ([session&nbsp;10175](https://developer.apple.com/videos/play/wwdc2023/10175/), [session&nbsp;10226](https://developer.apple.com/videos/play/wwdc2023/10226/)).

![](../../../../../images/iOSdev/wwdc23-DebugAndTesting_Poster.png)

"Discover the **debug console in Xcode 15** and learn how you can **improve your diagnostic experience** through logging. Explore how you can navigate your logs easily and efficiently using **advanced filtering and improved visualization**. We'll also show you how to use the dwim-print command to **evaluate expressions** in your code while debugging."

"Discover how you can find, debug, and fix **test failures** faster with the **test report** in Xcode and Xcode Cloud. Learn how Xcode identifies failure patterns to help you find the right place to start investigating. We'll also show you how to use the UI automation explorer and video recordings to understand the events that led up to your **UI test failure**."

</br>Hereafter, the underlined elements **lead directly to the playback of the WWDC video** at the appropriate moment.
</br>

## Debugging
### [Console](https://developer.apple.com/videos/play/wwdc2023/10226/?time=49)
`Xcode 15` provides a brand **new `Debug Console`** with many features to be pointed out hereunder.

#### [Metadata](https://developer.apple.com/videos/play/wwdc2023/10226/?time=73)
The metadata can be customized through an **options button** and its content is cleverly placed below each log.
![](../../../../../images/iOSdev/wwdc23-DebugAndTesting_1.png)

#### [Log&nbsp;preview](https://developer.apple.com/videos/play/wwdc2023/10226/?time=112)
Besides the different options to be displayed below each log, it's also possible to have a quick overview of a single log by **pressing the space bar** after the selection thereof.
![](../../../../../images/iOSdev/wwdc23-DebugAndTesting_2.png)

#### [Filtering&nbsp;methods](https://developer.apple.com/videos/play/wwdc2023/10226/?time=141)
The new `Debug Console` provides some methods for offering **various filterings**: use the [filter&nbsp;bar](https://developer.apple.com/videos/play/wwdc2023/10226/?time=160), select the sought [log&nbsp;types](https://developer.apple.com/videos/play/wwdc2023/10226/?time=175) and [second&nbsp;click](https://developer.apple.com/videos/play/wwdc2023/10226/?time=185) a log.
![](../../../../../images/iOSdev/wwdc23-DebugAndTesting_3.png)
</br>

#### [Examples](https://developer.apple.com/videos/play/wwdc2023/10226/?time=215)
1. Use the **category filter** from the displayed popup⟹&nbsp;<a alt="Click to playback the video footage." href="https://developer.apple.com/videos/play/wwdc2023/10226/?time=269">🎬</a>
![](../../../../../images/iOSdev/wwdc23-DebugAndTesting_4.png)

2. Locate the code linked to the log writing⟹ <a alt="Click to playback the video footage." href="https://developer.apple.com/videos/play/wwdc2023/10226/?time=303">🎬</a>
![](../../../../../images/iOSdev/wwdc23-DebugAndTesting_5.png)
</br>

### [LLDB](https://developer.apple.com/videos/play/wwdc2023/10226/?time=445)
![](../../../../../images/iOSdev/wwdc23-DebugAndTesting_6.png)
Using `po` or `p`might become cumbersome when there's [no&nbsp;conformance](https://developer.apple.com/videos/play/wwdc2023/10226/?time=400) to the `CustomStringConvertible` protocol on the specific element.
![](../../../../../images/iOSdev/wwdc23-DebugAndTesting_7.png)

A new command called **[Do&nbsp;What&nbsp;I&nbsp;Mean&nbsp;Print](https://developer.apple.com/videos/play/wwdc2023/10226/?time=491)** has been added to be used at all times and to print the best possible description.
![](../../../../../images/iOSdev/wwdc23-DebugAndTesting_8.png)
The expression length has caused the `p` and `po` [aliases&nbsp;replacement](https://developer.apple.com/videos/play/wwdc2023/10226/?time=502) with this print command.
</br>

### Unified&nbsp;Logging
![](../../../../../images/iOSdev/wwdc23-DebugAndTesting_9.png)
Based on the rationale that `OSLog` is for [debugging](https://developer.apple.com/videos/play/wwdc2023/10226/?time=565), specific approaches to code writing may be [more&nbsp;appropriate](https://developer.apple.com/videos/play/wwdc2023/10226/?time=636)...
![](../../../../../images/iOSdev/wwdc23-DebugAndTesting_10.png)

... to provide log information in the [most&nbsp;efficient&nbsp;manner](https://developer.apple.com/videos/play/wwdc2023/10226/?time=671) that can be easily parsed and examined later.
![](../../../../../images/iOSdev/wwdc23-DebugAndTesting_11.png)
</br>

## Testing
### [The&nbsp;basics](https://developer.apple.com/videos/play/wwdc2023/10175/?time=66)
![](../../../../../images/iOSdev/wwdc23-DebugAndTesting_14.png)
Highlighting key terms about the `Xcode` testing gives rise to a better understanding of the tests structure concepts.

![](../../../../../images/iOSdev/wwdc23-DebugAndTesting_13.png)

Refining the **runtime environment** for the tests and the **devices** on which they run are [critical&nbsp;parts](https://developer.apple.com/videos/play/wwdc2023/10175/?time=131) of testing.

![](../../../../../images/iOSdev/wwdc23-DebugAndTesting_15.png)

The combination of the above explained notions lead towards a [structured&nbsp;idea](https://developer.apple.com/videos/play/wwdc2023/10175/?time=196) of testing.

![](../../../../../images/iOSdev/wwdc23-DebugAndTesting_16.png)
</br>

### [Overview](https://developer.apple.com/videos/play/wwdc2023/10175/?time=267)
![](../../../../../images/iOSdev/wwdc23-DebugAndTesting_17.png)

The **test report** has been revised to provide a better user experience of what needs to be done for both the unit tests and the `UI` tests.

<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item" role="presentation">
        <a class="nav-link active"
           data-bs-toggle="tab" 
           href="#DebAndTestOverview1"
           id="DebAndTestOverview1_tab"
           role="tab" 
           aria-selected="true">Unit&nbsp;tests</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#DebAndTestOverview2"
           id="DebAndTestOverview2_tab"
           role="tab" 
           aria-selected="false">UI&nbsp;tests</a>
    </li>
    </ul>

<div class="tab-content">
<div class="tab-pane show active" id="DebAndTestOverview1" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment regarding the unit test within the test report" href="https://developer.apple.com/videos/play/wwdc2023/10175/?time=361">🎬</a>

The test report summary enables to get a glimpse of the tests health condition.
![](../../../../../images/iOSdev/wwdc23-DebugAndTesting_19.png)

The **insights** are made for highlighting the **common failure patterns** and the **longest test runs**: working with them guides the [resolution](https://developer.apple.com/videos/play/wwdc2023/10175/?time=462) towards specific **test method runs** and finally towards the **test details view**.
</div>

<div class="tab-pane" id="DebAndTestOverview2" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment regarding the ui test within the test report" href="https://developer.apple.com/videos/play/wwdc2023/10175/?time=579">🎬</a>

A selected failure leads towards the **test details view** that displays an **activities tab** including three different items whose interactivity comes with a smoother experience for debugging this kind of tests: the **[test&nbsp;activity](https://developer.apple.com/videos/play/wwdc2023/10175/?time=603)**, the **[automation&nbsp;explorer](https://developer.apple.com/videos/play/wwdc2023/10175/?time=617)** and the **[scrubber](https://developer.apple.com/videos/play/wwdc2023/10175/?time=626)**.

![](../../../../../images/iOSdev/wwdc23-DebugAndTesting_18.png)
</div>
</div>
</br>
</br>

### [Example](https://developer.apple.com/videos/play/wwdc2023/10175/?time=660)
The automation explorer is synchronously updated with the events within the test activity layer, moving the scrubber to the appropriate moments.
![](../../../../../images/iOSdev/wwdc23-DebugAndTesting_20.png)

Fixing a failure through the test details view may be quite simple and quick by using these new above pieces that make the test debugging experience interactive like never before.
![](../../../../../images/iOSdev/wwdc23-DebugAndTesting_21.png)