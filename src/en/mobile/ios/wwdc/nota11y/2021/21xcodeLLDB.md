---
title : "Debugging with Xcode and LLDB"
abstract: "Discover advanced techniques for enhancing your Xcode debugging."

displayToc: true
---

# WWDC 2021: Debugging with Xcode and LLDB
Find hereafter a detailed summary of three videos that belong to a [taxonomy&nbsp;of&nbsp;some&nbsp;WWDC&nbsp;footages](../../).

The original videos are available on the **official Apple website** ([wwdc18](https://developer.apple.com/videos/play/wwdc2018/412/), [wwdc19](https://developer.apple.com/videos/play/wwdc2019/429/) and [wwdc21](https://developer.apple.com/videos/play/wwdc2021/10209/)).

![](../../../../../images/iOSdev/wwdc21-xcodeLLDB.png)

"Discover **advanced techniques**, and tips and tricks for enhancing your **Xcode debugging** workflows. Learn how to take advantage of **LLDB** and **custom breakpoints** for more powerful debugging. Get the most out of **Xcode's view debugging tools** to solve UI issues in your app more efficiently."
</br>"LLDB is a powerful tool for exploring and debugging your app at runtime. Discover the various ways to **display values** in your app, how to **format custom data types**, and how to **extend LLDB** using your own Python 3 scripts."
</br>"Breakpoints can help you debug issues by allowing you to pause and inspect problems in the middle of a process. Discover the **latest improvements to breakpoints** in Xcode including column and unresolved breakpoints. We'll also go over **best practices** for general breakpoints and **LLDB** tips and tricks."

</br>The various contents of this video are indicated hereunder:
- [LLDB:&nbsp;print&nbsp;variables](#lldb-print-variables)

- [LLDB:&nbsp;custom&nbsp;data&nbsp;formatters](#lldb-custom-data-formatters)

- [Breakpoints](#breakpoints)

- [Miscellaneous](#miscellaneous)

- [View&nbsp;debugging&nbsp;tips](#view-debugging-tips)

</br>Most of the illustrations are parts of the Apple presentations and may be available at the `Resources` section inside the `Overview` sheet of each video.
</br>Hereafter, the underlined elements lead directly to the playback of the WWDC video at the appropriate moment.
</br>
## [LLDB:&nbsp;print&nbsp;variables](https://developer.apple.com/videos/play/wwdc2019/429/?time=16)
The **L**ow&nbsp;**L**evel&nbsp;**D**e**B**ugger (**LLDB**) contains many effective commands to deliver an output efficient format as a debugger component of the **L**ow&nbsp;**L**evel&nbsp;**V**irtual&nbsp;**M**achine (**LLVM**) project. 
<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item" role="presentation">
        <a class="nav-link active"
           data-bs-toggle="tab" 
           href="#LLDBprintVariablespo"
           id="LLDBprintVariablespo_tab"
           role="tab" 
           aria-selected="true">po</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#LLDBprintVariablesp"
           id="LLDBprintVariablesp_tab"
           role="tab" 
           aria-selected="false">p</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#LLDBprintVariablesv"
           id="LLDBprintVariablesv_tab"
           role="tab" 
           aria-selected="false">v</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#LLDBprintVariablesComparison"
           id="LLDBprintVariablesComparison_tab"
           role="tab" 
           aria-selected="false">Recap</a>
    </li>
</ul>

<div class="tab-content">
<div class="tab-pane show active" id="LLDBprintVariablespo" role="tabpanel">

<a alt="Click to playback the video at the indicated time." href="https://developer.apple.com/videos/play/wwdc2019/429/?time=80">🎬 (01:20)</a> 

The **p**rint&nbsp;**o**bject command displays a **default textual representation** of the input parameter.

![](../../../../../images/iOSdev/wwdc21-xcodeLLDB-print-po_1.png)

To [customize&nbsp;the&nbsp;top-level&nbsp;description](https://developer.apple.com/videos/play/wwdc2019/429/?time=97), conforming to the [**CustomStringDebugConvertible** protocol](https://developer.apple.com/videos/play/wwdc2018/412/?time=1255) is mandatory while the **CustomReflectable** protocol tackles rather the substructure configuration.

![](../../../../../images/iOSdev/wwdc21-xcodeLLDB-print-po_2.png)

Besides printing variables, the po-command that is nothing more than an [alias](https://developer.apple.com/videos/play/wwdc2019/429/?time=166) of the `expression` command, can also [perform&nbsp;evaluated&nbsp;expressions](https://developer.apple.com/videos/play/wwdc2019/429/?time=140).

![](../../../../../images/iOSdev/wwdc21-xcodeLLDB-print-po_3.png)

A [representation&nbsp;of&nbsp;the&nbsp;phases](https://developer.apple.com/videos/play/wwdc2019/429/?time=202) followed by the po-command process is detailed to point out the different evaluations during these operations.
![](../../../../../images/iOSdev/wwdc21-xcodeLLDB-print-po_4.png)
</div>

<div class="tab-pane" id="LLDBprintVariablesp" role="tabpanel">

<a alt="Click to playback the video at the indicated time." href="https://developer.apple.com/videos/play/wwdc2019/429/?time=266">🎬 (04:26)</a> 

As an alias of the `expression` command, the **p**rint command displays a **raw representation** of an object using the most out of the **LLDB variable name convention** and without taking into account the specific description of the po&nbsp;command.

![](../../../../../images/iOSdev/wwdc21-xcodeLLDB-print-p_1.png)

A [caveat&nbsp;is&nbsp;highlighted](https://developer.apple.com/videos/play/wwdc2019/429/?time=371) regarding the type that may be returned by this command. 

![](../../../../../images/iOSdev/wwdc21-xcodeLLDB-print-p_2.png)

The review of the different steps of the [p-command process](https://developer.apple.com/videos/play/wwdc2019/429/?time=468) points out **less work to be done** than the po-command's while underlining a **special attention** to the returned type detailed in the previous example.

![](../../../../../images/iOSdev/wwdc21-xcodeLLDB-print-p_3.png)

LLDB provides a [default&nbsp;formatter](https://developer.apple.com/videos/play/wwdc2019/429/?time=485) that [may be customized](#lldb-custom-data-formatters) and that works for commonly used types.

![](../../../../../images/iOSdev/wwdc21-xcodeLLDB-print-p_4.png)

</div>

<div class="tab-pane" id="LLDBprintVariablesv" role="tabpanel">

<a alt="Click to playback the video at the indicated time." href="https://developer.apple.com/videos/play/wwdc2019/429/?time=532">🎬 (08:52)</a> 

The **v**-command displays the **same results as the p-command's** while being an **alias** of the `frame`&nbsp;`variable` command as well.

![](../../../../../images/iOSdev/wwdc21-xcodeLLDB-print-v_1.png)

However, **no code is compiled or executed with the v-command** that gives rise to a faster way to get results.
Then, the [use&nbsp;of&nbsp;`p`&nbsp;or&nbsp;`po`&nbsp;is&nbsp;mandatory](https://developer.apple.com/videos/play/wwdc2019/429/?time=554) if some computed properties must be reached because of the code execution requirement in this case.

![](../../../../../images/iOSdev/wwdc21-xcodeLLDB-print-v_2.png)

The detailed study of the different steps of the [v-command process](https://developer.apple.com/videos/play/wwdc2019/429/?time=603) highlights potential multiple dynamic type resolutions.

![](../../../../../images/iOSdev/wwdc21-xcodeLLDB-print-v_3.png)

</div>

<div class="tab-pane" id="LLDBprintVariablesComparison" role="tabpanel">

<a alt="Click to playback the video at the indicated time." href="https://developer.apple.com/videos/play/wwdc2019/429/?time=683">🎬 (11:23)</a> 

![](../../../../../images/iOSdev/wwdc21-xcodeLLDB-print-summary_1.png)

A complete summary of the LLDB print commmands is made during the [WWDC18](https://developer.apple.com/videos/play/wwdc2018/412/?time=2078).

![](../../../../../images/iOSdev/wwdc21-xcodeLLDB-print-summary_2.png)
</div>
</div>

</br></br>
## [LLDB:&nbsp;custom&nbsp;data&nbsp;formatters](https://developer.apple.com/videos/play/wwdc2019/429/?time=736)
LLDB introduces some helpers to tailor the representation of each displayed data type.
<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item" role="presentation">
        <a class="nav-link active"
           data-bs-toggle="tab" 
           href="#LLDBcustomDataFormattersFilters"
           id="LLDBcustomDataFormattersFilters_tab"
           role="tab" 
           aria-selected="true">Filters</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#LLDBcustomDataFormattersSummaries"
           id="LLDBcustomDataFormatters_tab"
           role="tab" 
           aria-selected="false">Summaries</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#LLDBcustomDataFormattersSyntheticChildren"
           id="LLDBcustomDataFormattersSyntheticChildren_tab"
           role="tab" 
           aria-selected="false">Synthetic&nbsp;children</a>
    </li>
</ul>

<div class="tab-content">
<div class="tab-pane show active" id="LLDBcustomDataFormattersFilters" role="tabpanel">

<a alt="Click to playback the video at the indicated time." href="https://developer.apple.com/videos/play/wwdc2019/429/?time=784">🎬 (13:04)</a> 

Using the filter formatter enables to process only the proper items instead of displaying the complete bunch of elements composing the analyzed object.

![](../../../../../images/iOSdev/wwdc21-xcodeLLDB-custom-filters_1.png)

Some of the subcommands that permit to define custom display options are introduced in the next sheets of this section and are available in the [variable&nbsp;formatting&nbsp;section](https://lldb.llvm.org/use/variable.html) of the LLVM site as well.

![](../../../../../images/iOSdev/wwdc21-xcodeLLDB-custom-filters_2.png)
</div>

<div class="tab-pane" id="LLDBcustomDataFormattersSummaries" role="tabpanel">

<a alt="Click to playback the video at the indicated time." href="https://developer.apple.com/videos/play/wwdc2019/429/?time=810">🎬 (13:30)</a> 

A summary is a customized way to render the major information of **a&nbsp;type** at first sight and may use regular text and variables with a dollar sign.

![](../../../../../images/iOSdev/wwdc21-xcodeLLDB-custom-summaries_1.png)

The solution to have a dynamic behavior regarding the flexible size of some elements relies on defining this kind of summaries in [Python](https://developer.apple.com/videos/play/wwdc2019/429/?time=862).
 
![](../../../../../images/iOSdev/wwdc21-xcodeLLDB-custom-summaries_2.png)

[Launching&nbsp;the&nbsp;**script**&nbsp;command](https://developer.apple.com/videos/play/wwdc2019/429/?time=940) is the basics to begin writing some command lines interpreted by Python 3.

![](../../../../../images/iOSdev/wwdc21-xcodeLLDB-custom-summaries_3.png)

The stream of command lines can be merged into a [single&nbsp;file](https://developer.apple.com/videos/play/wwdc2019/429/?time=1036) in order to get the final result in a faster way.

![](../../../../../images/iOSdev/wwdc21-xcodeLLDB-custom-summaries_4.png)

This customized summary that's exposed in the console through LLDB may also be revealed in the [Xcode's&nbsp;variable&nbsp;view](https://developer.apple.com/videos/play/wwdc2019/429/?time=1107).

![](../../../../../images/iOSdev/wwdc21-xcodeLLDB-custom-summaries_5.png)
</div>

<div class="tab-pane" id="LLDBcustomDataFormattersSyntheticChildren" role="tabpanel">

<a alt="Click to playback the video at the indicated time." href="https://developer.apple.com/videos/play/wwdc2019/429/?time=1115">🎬 (18:35)</a> 

![](../../../../../images/iOSdev/wwdc21-xcodeLLDB-custom-synthetic_1.png)

This class file is used the [same&nbsp;way](https://developer.apple.com/videos/play/wwdc2019/429/?time=1157) as the summary provider is.

![](../../../../../images/iOSdev/wwdc21-xcodeLLDB-custom-synthetic_2.png)

Finally, all the command lines used in the console are stored in a [dedicated&nbsp;file](https://developer.apple.com/videos/play/wwdc2019/429/?time=1179).

![](../../../../../images/iOSdev/wwdc21-xcodeLLDB-custom-synthetic_3.png)
</div>
</div>

</br></br>
## [Breakpoints](https://developer.apple.com/videos/play/wwdc2021/10209/?time=64)
### [Source&nbsp;file](https://developer.apple.com/videos/play/wwdc2021/10209/?time=71)
To increase the accuracy of the line breakpoint, a **[column&nbsp;breakpoint](https://developer.apple.com/videos/play/wwdc2021/10209/?time=146)** has been introduced in Xcode&nbsp;13.

![](../../../../../images/iOSdev/wwdc21-xcodeLLDB-BreakpointsSourceFile_1.png)

The column breakpoint may be especially **useful for closures** thanks to the [line&nbsp;table](https://developer.apple.com/videos/play/wwdc2021/10209/?time=270) created by the compiler under debug condition that maps source lines and columns to the compiled addresses.

![](../../../../../images/iOSdev/wwdc21-xcodeLLDB-BreakpointsSourceFile_2.png)

Instead of repeatedly writing many command lines in the console to get a single result, it comes in handy to use the [Debug&nbsp;Command&nbsp;action](https://developer.apple.com/videos/play/wwdc2018/412/?time=429) to make it faster.

![](../../../../../images/iOSdev/wwdc21-xcodeLLDB-BreakpointsSourceFile_3.png)

This process is also precious to notice at a glance the effective change in code [without&nbsp;recompiling](https://developer.apple.com/videos/play/wwdc2018/412/?time=511)...

![](../../../../../images/iOSdev/wwdc21-xcodeLLDB-BreakpointsSourceFile_4.png)

... and some code can be put [as&nbsp;an&nbsp;argument](https://developer.apple.com/videos/play/wwdc2018/412/?time=1403) of the `expression` command as well.

![](../../../../../images/iOSdev/wwdc21-xcodeLLDB-BreakpointsSourceFile_5.png)

**Modifying the line breakpoint selection [only&nbsp;once](https://developer.apple.com/videos/play/wwdc2018/412/?time=860)** is feasible by means of a specific option.

![](../../../../../images/iOSdev/wwdc21-xcodeLLDB-BreakpointsSourceFile_6.png)

It's also possible to **[ignore&nbsp;the&nbsp;content](https://developer.apple.com/videos/play/wwdc2018/412/?time=1176)** of the breakpoint line while passing a command as a substitute.

![](../../../../../images/iOSdev/wwdc21-xcodeLLDB-BreakpointsSourceFile_7.png)

An **unresolved breakpoint** may be also pointed out with a [dashed&nbsp;icon](https://developer.apple.com/videos/play/wwdc2021/10209/?time=481) and a pop-up containing the possible reasons of its appearing (more information about this topic are provided in the [Breakpoint&nbsp;Symbolic&nbsp;section](#symbolic)).

![](../../../../../images/iOSdev/wwdc21-xcodeLLDB-BreakpointsSourceFile_8.png)

### [Symbolic](https://developer.apple.com/videos/play/wwdc2021/10209/?time=332)
![](../../../../../images/iOSdev/wwdc21-xcodeLLDB-BreakpointsSymbolic_1.png)

Even if every interesting elements may be in **assembly code**, it's still possible to reach their value by [inspecting&nbsp;the&nbsp;passed&nbsp;arguments](https://developer.apple.com/videos/play/wwdc2018/412/?time=638).

![](../../../../../images/iOSdev/wwdc21-xcodeLLDB-BreakpointsSymbolic_2.png)

If the symbolic breakpoint can't be resolved, a [dashed&nbsp;icon](https://developer.apple.com/videos/play/wwdc2021/10209/?time=624) is highlighted with a couple of reasons appearing in a pop-up.
A [LLDB&nbsp;tip](https://developer.apple.com/videos/play/wwdc2021/10209/?time=557) is pointed out to avoid a potential cumbersome searching in the Xcode `Find`&nbsp;`Navigator`.

![](../../../../../images/iOSdev/wwdc21-xcodeLLDB-BreakpointsSymbolic_3.png)

### [Runtime&nbsp;issue](https://developer.apple.com/videos/play/wwdc2021/10209/?time=654)
The Xcode `Issue`&nbsp;`Navigator` renders the recorded backtrace of the runtime issue and the best way to deal with it is to create the proper runtime issue breakpoint.

![](../../../../../images/iOSdev/wwdc21-xcodeLLDB-BreakpointsRuntimeIssue_1.png)

According to the chosen breakpoint, it may be necessary to dive into the diagnostics tab of the scheme editor to enable the [appropriate&nbsp;feature](https://developer.apple.com/videos/play/wwdc2021/10209/?time=711).
 
![](../../../../../images/iOSdev/wwdc21-xcodeLLDB-BreakpointsRuntimeIssue_2.png)

</br></br>
## [View&nbsp;debugging&nbsp;tips](https://developer.apple.com/videos/play/wwdc2018/412/?time=2158)

1. In [Xcode](https://developer.apple.com/videos/play/wwdc2018/412/?time=2307), hold down the ⌘ button while clicking on the debug bar to invoke the **capture of the view hierarchy** (the app will be still in its active state).

2. The **memory address** of a selected object can be [brought&nbsp;directly&nbsp;to&nbsp;the&nbsp;console](https://developer.apple.com/videos/play/wwdc2018/412/?time=2581) to **simplify its replication in a command line**.

![](../../../../../images/iOSdev/wwdc21-xcodeLLDB-ViewDebuggingTips_1.png)

3. **Modifications can be immediately displayed** to [notice&nbsp;their&nbsp;efficiency](https://developer.apple.com/videos/play/wwdc2018/412/?time=2630) before applying the final implementation in code.

![](../../../../../images/iOSdev/wwdc21-xcodeLLDB-ViewDebuggingTips_2.png)

The [same&nbsp;rationale](https://developer.apple.com/videos/play/wwdc2018/412/?time=2958) may be followed for **adapting a text color** with the `Dark Mode` feature.

![](../../../../../images/iOSdev/wwdc21-xcodeLLDB-ViewDebuggingTips_2bis.png)

4. When multiple windows are shown in the view debugger, the first tip detailed in this section isn't available anymore and the solution to keep on capturing these windows in their active state lies in [browsing&nbsp;the&nbsp;debug&nbsp;navigator&nbsp;panel](https://developer.apple.com/videos/play/wwdc2018/412/?time=2779).

![](../../../../../images/iOSdev/wwdc21-xcodeLLDB-ViewDebuggingTips_3.png)

</br></br>
## Miscellaneous
### Xcode

1. [Settings](https://developer.apple.com/videos/play/wwdc2018/412/?time=310) come in handy for having a **specific debugging display** thanks to the customized behaviors whenever the code pauses.

2. A [spray&nbsp;can&nbsp;icon](https://developer.apple.com/videos/play/wwdc2018/412/?time=2274) on the touch bar may be useful when developping in full screen mode for example by **showing some options of the debug bar**.

3. To **locate an element in the view hierarchy** when it's selected on the interface, the [easiest&nbsp;way](https://developer.apple.com/videos/play/wwdc2018/412/?time=2391) relies on choosing the `Reveal in the Debug Navigator` item in the navigation menu.

4. Highlighting the **[constraints](https://developer.apple.com/videos/play/wwdc2018/412/?time=2425) of an element** and the **[clipped&nbsp;contents](https://developer.apple.com/videos/play/wwdc2018/412/?time=2540)** is quickly achieved by means of the shortcuts located at the bottom of the inferface.

5.  Once validated, the **access to the code** into which the modifications should be put is straightly carried out [through&nbsp;the&nbsp;interface](https://developer.apple.com/videos/play/wwdc2018/412/?time=2677).

6. While running, it's now possible to **tweak the dark mode appearance** in order to check the final results of the changings thanks to a [button&nbsp;in&nbsp;the&nbsp;debug&nbsp;bar](https://developer.apple.com/videos/play/wwdc2018/412/?time=3002)...

7. ... whose function is [also&nbsp;available](https://developer.apple.com/videos/play/wwdc2018/412/?time=3046) in the **touch bar**.

<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item" role="presentation">
        <a class="nav-link active"
           data-bs-toggle="tab" 
           href="#MiscellaneousXcode1"
           id="MiscellaneousXcode1_tab"
           role="tab" 
           aria-selected="true">1</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#MiscellaneousXcode2"
           id="MiscellaneousXcode2tab"
           role="tab" 
           aria-selected="false">2</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#MiscellaneousXcode3"
           id="MiscellaneousXcode3_tab"
           role="tab" 
           aria-selected="false">3</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#MiscellaneousXcode4"
           id="MiscellaneousXcode4_tab"
           role="tab" 
           aria-selected="false">4</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#MiscellaneousXcode5"
           id="MiscellaneousXcode5_tab"
           role="tab" 
           aria-selected="false">5</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#MiscellaneousXcode6"
           id="MiscellaneousXcode6_tab"
           role="tab" 
           aria-selected="false">6</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#MiscellaneousXcode7"
           id="MiscellaneousXcode7_tab"
           role="tab" 
           aria-selected="false">7</a>
    </li>
    </ul>

<div class="tab-content">
<div class="tab-pane show active" id="MiscellaneousXcode1" role="tabpanel">

![](../../../../../images/iOSdev/wwdc21-xcodeLLDB-MiscellaneaousXcode_1.png)
</div>

<div class="tab-pane" id="MiscellaneousXcode2" role="tabpanel">

![](../../../../../images/iOSdev/wwdc21-xcodeLLDB-MiscellaneaousXcode_2.png) 
</div>

<div class="tab-pane" id="MiscellaneousXcode3" role="tabpanel">

![](../../../../../images/iOSdev/wwdc21-xcodeLLDB-MiscellaneaousXcode_3.png) 
</div>

<div class="tab-pane" id="MiscellaneousXcode4" role="tabpanel">

![](../../../../../images/iOSdev/wwdc21-xcodeLLDB-MiscellaneaousXcode_4.png) 
</div>

<div class="tab-pane" id="MiscellaneousXcode5" role="tabpanel">

![](../../../../../images/iOSdev/wwdc21-xcodeLLDB-MiscellaneaousXcode_5.png) 
</div>

<div class="tab-pane" id="MiscellaneousXcode6" role="tabpanel">

![](../../../../../images/iOSdev/wwdc21-xcodeLLDB-MiscellaneaousXcode_6.png) 
</div>

<div class="tab-pane" id="MiscellaneousXcode7" role="tabpanel">

![](../../../../../images/iOSdev/wwdc21-xcodeLLDB-MiscellaneaousXcode_7.png) 
</div>
</div>

</br></br>

### [Watchpoints](https://developer.apple.com/videos/play/wwdc2018/412/?time=1336)
Watchpoints are used to monitor the value of a variable for changes while triggering a pause in the debugger when these changes occur.

![](../../../../../images/iOSdev/wwdc21-xcodeLLDB-MiscellaneaousWatchpoint.png)

### [Recursive&nbsp;description](https://developer.apple.com/videos/play/wwdc2018/412/?time=1565)
The use of this **debug function** that permits to display the debug description for all the views in the view hierarchy while remaining in the console is a bit tricky:

1. The `po` command is useful to find the memory address of a view with the appropriate property.
2. When it's not the case, the call of the `recursive`&nbsp;`description` function is necessary.
3. The use of an **objective-c syntax** including the back ticks is crucial to reach the desired result.
4. Check out the displayed view's memory address.
5. The first solution is to create an alias involving an objective-c syntax to get the view properties.
6. The other solution is to use the **unsafeBitCast** function with the `po` command...
7. ... that entitles to **exploit functions and properties** of the returned typed result...
8. ... without forgetting to **synchronize** the screen's frame buffer with the changes.

![](../../../../../images/iOSdev/wwdc21-xcodeLLDB-MiscellaneaousRecursiveDescription.png)

### [Python&nbsp;wrap&nbsp;up](https://developer.apple.com/videos/play/wwdc2018/412/?time=1788)
The automation of many command lines to be rounded up and launched in a simple command is possible and detailed in this part.

![](../../../../../images/iOSdev/wwdc21-xcodeLLDB-MiscellaneaousPython.png)

</br></br></br>