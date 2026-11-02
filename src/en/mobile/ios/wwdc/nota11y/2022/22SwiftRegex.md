---
title : "Swift Regex"
abstract: "Learn how you can process strings with Swift Regex."

displayToc: true
---

# WWDC 2022: Swift Regex
Find hereafter a detailed summary of two videos that belong to a [taxonomy&nbsp;of&nbsp;some&nbsp;WWDC&nbsp;footages](../../).

The original videos are available on the **official Apple website** ([session&nbsp;110357](https://developer.apple.com/videos/play/wwdc2022//110357/), [session&nbsp;110358](https://developer.apple.com/videos/play/wwdc2022//110358/)).

![](../../../../../images/iOSdev/wwdc22-SwiftRegex.png)

"Learn how you can **process strings** more effectively when you take advantage of Swift Regex. Come for concise literals but stay for **Regex builders** — a new, declarative approach to string processing. We'll also explore the Unicode models in String and share how Swift Regex can **make Unicode-correct processing easy**."

"Go beyond the basics of string processing with Swift Regex. We'll share an overview of Regex and how it works, explore **Foundation's rich data parsers** and discover how to integrate your own, and **delve into captures**. We'll also provide **best practices for matching strings** and wielding Regex-powered algorithms with ease."
</br>
The outlines of this speech are indicated hereunder:
- [Overview](#overview)

- [Working&nbsp;mode](#working-mode)

- [Basic&nbsp;elements](#basic-elements)

- [String&nbsp;&&nbsp;Unicode](#string-unicode)

- [Existing&nbsp;parsers](#existing-parsers)

- [Example](#example)

</br>Most of the illustrations are parts of the Apple presentations and may be available at the `Resources` section inside the `Overview` sheet of each video.
</br>Hereafter, the underlined elements lead directly to the playback of the WWDC video at the appropriate moment.
</br>

## Overview
The [regular&nbsp;expression](https://developer.apple.com/videos/play/wwdc2022/110357?time=130) (**regex**) used in Swift may be authored in **[three&nbsp;different&nbsp;ways](https://developer.apple.com/videos/play/wwdc2022/110358/?time=18)** including its own derivative Regex that's more readable than the traditional regex syntax.

![](../../../../../images/iOSdev/wwdc22-SwiftRegex-overview_1.png)

When the `Regex` string is known at compile-time, it may be wise to [use&nbsp;a&nbsp;regex&nbsp;literal](https://developer.apple.com/videos/play/wwdc2022/110358/?time=64) in order to allow the compiler to check for syntax errors.

![](../../../../../images/iOSdev/wwdc22-SwiftRegex-overview_2.png)

`Swift regex` is based on [four&nbsp;main&nbsp;outlines](https://developer.apple.com/videos/play/wwdc2022/110357?time=305).

![](../../../../../images/iOSdev/wwdc22-SwiftRegex-overview_3.png)

The `RegexBuilder` library **integrates the regex literals syntax** to create a [comprehensive&nbsp;writing](https://developer.apple.com/videos/play/wwdc2022/110357/?time=402) of the extraction that is also easy to understand by using a **D**omain-**S**pecific&nbsp;**L**anguage similar to SwiftUI code.

![](../../../../../images/iOSdev/wwdc22-SwiftRegex-overview_4.png)

For instance, the `NegativeLookahead` regex component asserts that what immediately follows the current position in the string doesn't match the specified content.
</br>

## Working&nbsp;mode
<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item" role="presentation">
        <a class="nav-link active"
           data-bs-toggle="tab" 
           href="#WorkingModeRegex"
           id="WorkingModeRegex_tab"
           role="tab" 
           aria-selected="true">Regex</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#WorkingModeBuilder"
           id="WorkingModeBuilder_tab"
           role="tab" 
           aria-selected="false">Builder&nbsp;&&nbsp;algorithms</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#WorkingModeFoundation"
           id="WorkingModeFoundation_tab"
           role="tab" 
           aria-selected="false">Foundation</a>
    </li>
    </ul>

<div class="tab-content">
<div class="tab-pane show active" id="WorkingModeRegex" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment." href="https://developer.apple.com/videos/play/wwdc2022/110358?time=149">🎬</a>

A regex can de defined as a program to be executed by its underlying **Regex engine**.

![](../../../../../images/iOSdev/wwdc22-SwiftRegex-workingModeRegex.png)

</div>

<div class="tab-pane" id="WorkingModeBuilder" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment." href="https://developer.apple.com/videos/play/wwdc2022/110358/?time=211">🎬</a>

Some of the most common operations for string processing are parts of the **Regex-powered algorithms** and are also supplied by the Swift standard library by including the possibility of using the regex according to the Swift's pattern matching syntax.

![](../../../../../images/iOSdev/wwdc22-SwiftRegex-workingModeBuilder.png)
</div>

<div class="tab-pane" id="WorkingModeFoundation" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment." href="https://developer.apple.com/videos/play/wwdc2022/110358/?time=280">🎬</a>

The formatters and the parsers provided by `Foundation` can be embedded in the `Regex` builder to facilitate the string processing.  

![](../../../../../images/iOSdev/wwdc22-SwiftRegex-workingModeFoundation.png)
</div>
</div>
</br>

## Basic&nbsp;elements
A bunch of elements to be used for building efficient regex is suggested hereafter.
<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item" role="presentation">
        <a class="nav-link active"
           data-bs-toggle="tab" 
           href="#BasicEltsRegexLiteral"
           id="BasicEltsRegexLiteral_tab"
           role="tab" 
           aria-selected="true">Regex&nbsp;literal</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#BasicEltsCapture"
           id="BasicEltsCapture_tab"
           role="tab" 
           aria-selected="false">Capture</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#BasicEltsRepetitions"
           id="BasicEltsRepetitions_tab"
           role="tab" 
           aria-selected="false">Repetitions</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#BasicEltsDelimiter"
           id="BasicEltsDelimiter_tab"
           role="tab" 
           aria-selected="false">Delimiter</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#BasicEltsLocal"
           id="BasicEltsLocal_tab"
           role="tab" 
           aria-selected="false">Local</a>
    </li>
    </ul>

<div class="tab-content">
<div class="tab-pane show active" id="BasicEltsRegexLiteral" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment." href="https://developer.apple.com/videos/play/wwdc2022/110358/?time=466">🎬</a>

![](../../../../../images/iOSdev/wwdc22-SwiftRegex-basicEltsRegexLiteral.png)
</div>

<div class="tab-pane" id="BasicEltsCapture" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment." href="https://developer.apple.com/videos/play/wwdc2022/110358/?time=626">🎬</a>

![](../../../../../images/iOSdev/wwdc22-SwiftRegex-basicEltsCapture_1.png)

The **Capture** `struct` type [extracts&nbsp;portions](https://developer.apple.com/videos/play/wwdc2022/110357/?time=531) of the input for later processing while the **TryCapture** `struct` type includes a [transform&nbsp;closure](https://developer.apple.com/videos/play/wwdc2022/110358/?time=920) so as to adapt the returning result through removing the optionality in the output type.

![](../../../../../images/iOSdev/wwdc22-SwiftRegex-basicEltsCapture_2.png)

These two struct types represent an [efficient&nbsp;way](https://developer.apple.com/videos/play/wwdc2022/110357/?time=1135) to extract the matched data from the parsed elements.

![](../../../../../images/iOSdev/wwdc22-SwiftRegex-basicEltsCapture_3.png)
</div>

<div class="tab-pane" id="BasicEltsRepetitions" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment." href="https://developer.apple.com/videos/play/wwdc2022/110358/?time=738">🎬</a>

![](../../../../../images/iOSdev/wwdc22-SwiftRegex-basicEltsRepetitions.png)
</div>

<div class="tab-pane" id="BasicEltsDelimiter" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment." href="https://developer.apple.com/videos/play/wwdc2022/110357/?time=645">🎬</a>

A sed-like script may be written inside a regex through an **extended&nbsp;delimiter**.

![](../../../../../images/iOSdev/wwdc22-SwiftRegex-basicEltsDelimiter_1.png)

This way of [authoring&nbsp;a&nbsp;regex](https://developer.apple.com/videos/play/wwdc2022/110357/?time=706) permits to **use names instead of the positions**.

![](../../../../../images/iOSdev/wwdc22-SwiftRegex-basicEltsDelimiter_2.png)
</div>

<div class="tab-pane" id="BasicEltsLocal" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment." href="https://developer.apple.com/videos/play/wwdc2022/110357/?time=1240">🎬</a>

Called as an **atomic non-capturing group**, the **Local** builder is efficient for matching precisely specified elements unlike the **[global&nbsp;backtracking](https://developer.apple.com/videos/play/wwdc2022/110357/?time=1177)**, the default one for regex, that is useful for a broad search including an approximative matching.
</div>
</div>
</br>

Take a look at the [Example](#example) section to dive deeper into the different ways to be followed for an efficient regex building.
</br>

## String&nbsp;&&nbsp;Unicode
A Character is a [collection&nbsp;of&nbsp;Unicode&nbsp;scalars](https://developer.apple.com/videos/play/wwdc2022/110357/?time=759) that may contain an invisible codepoint called **variation-selector&nbsp;16** to inform that the preceeding character should be displayed as an emoji.

![](../../../../../images/iOSdev/wwdc22-SwiftRegex-StringUnicode_1.png)

The String and Character comparisons abide by the **[Unicode&nbsp;Canonical&nbsp;Equivalence](https://developer.apple.com/videos/play/wwdc2022/110357/?time=852)**...

![](../../../../../images/iOSdev/wwdc22-SwiftRegex-StringUnicode_2.png)

... while using the [Unicode&nbsp;Scalar&nbsp;name](https://developer.apple.com/videos/play/wwdc2022/110357/?time=909) for a string processing is also possible.
![](../../../../../images/iOSdev/wwdc22-SwiftRegex-StringUnicode_3.png)

Useful instance methods are available to handle an element at the [Unicode&nbsp;Scalar&nbsp;level](https://developer.apple.com/videos/play/wwdc2022/110357/?time=949).

![](../../../../../images/iOSdev/wwdc22-SwiftRegex-StringUnicode_4.png)
</br>

## Existing&nbsp;parsers
`Foundation` provides some useful [date&nbsp;parsers](https://developer.apple.com/videos/play/wwdc2022/110357/?time=683) that come in handy for string processing. 

![](../../../../../images/iOSdev/wwdc22-SwiftRegex-existingParsers-date.png)

In order to parse the duration floating-point number, it's possible to [implement&nbsp;an&nbsp;existing&nbsp;parser](https://developer.apple.com/videos/play/wwdc2022/110358/?time=1088) inside a regex through the  definition of one's parser type and make it conform to a dedicated protocol.
![](../../../../../images/iOSdev/wwdc22-SwiftRegex-existingParsers-number.png)


## Example
First, a good tip to detect and standardise a [field&nbsp;separator](https://developer.apple.com/videos/play/wwdc2022/110357?time=233) between strings may be to **use a single instance method** instead of combining some of them with a **regex literal** to get the same result.

![](../../../../../images/iOSdev/wwdc22-SwiftRegex-Examples_1.png)

Then, a [complete&nbsp;example](https://developer.apple.com/videos/play/wwdc2022/110358/?time=341) including each milestone is detailed to get the appropriate results.

![](../../../../../images/iOSdev/wwdc22-SwiftRegex-Examples_2.png)

Finally, the use of this elaborate regex renders the proper outcome.

![](../../../../../images/iOSdev/wwdc22-SwiftRegex-Examples_3.png)
</br>