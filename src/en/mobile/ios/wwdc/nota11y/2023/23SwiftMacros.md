---
title : "Swift macros"
abstract: "Discover how Swift macros can help you reduce boilerplate in your codebase and adopt complex features more easily."

displayToc: true
---

# WWDC 2023: Swift macros
Find hereafter a detailed summary of two videos that belong to a [taxonomy&nbsp;of&nbsp;some&nbsp;WWDC&nbsp;footages](../../).

The original videos is available on the **Apple official website** ([session&nbsp;10166](https://developer.apple.com/videos/play/wwdc2023/10166/), [session&nbsp;10167](https://developer.apple.com/videos/play/wwdc2023/10167/)).

![](../../../../../images/iOSdev/wwdc23-SwiftMacros_Poster.png)

"Discover how **Swift macros** can help you **reduce boilerplate** in your codebase and **adopt complex features** more easily. Learn how macros can analyze code, emit rich compiler errors to guide developers towards correct usage, and generate new code that is automatically incorporated back into your project. We'll also take you through important concepts like **macro roles**, **compiler plugins**, and **syntax trees**."

"Discover how you can use Swift macros to make your codebase **more expressive** and **easier to read**. Code along as we explore how macros can help you **avoid writing repetitive code** and find out how to use them in your app. We'll share the **building blocks** of a macro, show you how to **test** it, and take you through how you can **emit compilation errors** from macros."
</br>Hereafter, the underlined elements lead directly to the playback of the WWDC video at the appropriate moment.
</br>

## [The&nbsp;basics](https://developer.apple.com/videos/play/wwdc2023/10167/?time=46)
The [numerous&nbsp;reasons](https://developer.apple.com/videos/play/wwdc2023/10167/?time=120) for introducing the **macros with `Swift`&nbsp;`5.9`** are all different but head alltogether towards the **simplicity of code**.
![](../../../../../images/iOSdev/wwdc23-SwiftMacros_1.png)

The **design goals** of these macros are fourthfold.

![](../../../../../images/iOSdev/wwdc23-SwiftMacros_5.png)

<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item" role="presentation">
        <a class="nav-link active"
           data-bs-toggle="tab" 
           href="#SwiftMacrosDesign1"
           id="SwiftMacrosDesign1_tab"
           role="tab" 
           aria-selected="true">1</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#SwiftMacrosDesign2"
           id="SwiftMacrosDesign2_tab"
           role="tab" 
           aria-selected="false">2</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#SwiftMacrosDesign3"
           id="SwiftMacrosDesign3_tab"
           role="tab" 
           aria-selected="false">3</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#SwiftMacrosDesign4"
           id="SwiftMacrosDesign4_tab"
           role="tab" 
           aria-selected="false">4</a>
    </li>
    </ul>

<div class="tab-content">
<div class="tab-pane show active" id="SwiftMacrosDesign1" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment regarding the freestanding and attached macros" href="https://developer.apple.com/videos/play/wwdc2023/10167/?time=158">🎬</a>

Two kinds of macros may be used: the **freestanding** macros...
![](../../../../../images/iOSdev/wwdc23-SwiftMacros_2.png)
... and the **attached** macros.
![](../../../../../images/iOSdev/wwdc23-SwiftMacros_3.png)

</div>

<div class="tab-pane" id="SwiftMacrosDesign2" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment regarding the type checked and validated information" href="https://developer.apple.com/videos/play/wwdc2023/10167/?time=186">🎬</a>

Before using a macro, the **incoming parameters** are validated and the **error warnings** may be taken in to account.
![](../../../../../images/iOSdev/wwdc23-SwiftMacros_4.png)
</div>

<div class="tab-pane" id="SwiftMacrosDesign3" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment regarding the way the macros are read in the code" href="https://developer.apple.com/videos/play/wwdc2023/10167/?time=217">🎬</a>

![](../../../../../images/iOSdev/wwdc23-SwiftMacros_6.png)
</div>

<div class="tab-pane" id="SwiftMacrosDesign4" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment regarding the rationale behind a macro writing" href="https://developer.apple.com/videos/play/wwdc2023/10167/?time=242">🎬</a>

The code behind a macro may be reviewed thanks to the **`Xcode` new features**.
![](../../../../../images/iOSdev/wwdc23-SwiftMacros_7.png)
</div>
</div>
</br>
</br>

A dedicated [compiler&nbsp;plugin](https://developer.apple.com/videos/play/wwdc2023/10167/?time=291) is assigned to the **macro expansion** that's added as code to the program logic.

![](../../../../../images/iOSdev/wwdc23-SwiftMacros_8.png)

And all that new functioning relies on a basic **[macro declaration](https://developer.apple.com/videos/play/wwdc2023/10167/?time=339)**.
![](../../../../../images/iOSdev/wwdc23-SwiftMacros_9.png)
</br>

## [The&nbsp;roles](https://developer.apple.com/videos/play/wwdc2023/10167/?time=376)
The set of rules that handle responsabilities areas of a macro is called a **role**.
![](../../../../../images/iOSdev/wwdc23-SwiftMacros_10.png)
The roles for creating **attached** and **freestanding** macros are listed below.

![](../../../../../images/iOSdev/wwdc23-SwiftMacros_11.png)
<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item" role="presentation">
        <a class="nav-link active"
           data-bs-toggle="tab" 
           href="#SwiftMacrosRoles1"
           id="SwiftMacrosRoles1_tab"
           role="tab" 
           aria-selected="true">1</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#SwiftMacrosRoles2"
           id="SwiftMacrosRoles2_tab"
           role="tab" 
           aria-selected="false">2</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#SwiftMacrosRoles3"
           id="SwiftMacrosRoles3_tab"
           role="tab" 
           aria-selected="false">3</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#SwiftMacrosRoles4"
           id="SwiftMacrosRoles4_tab"
           role="tab" 
           aria-selected="false">4</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#SwiftMacrosRoles5"
           id="SwiftMacrosRoles5_tab"
           role="tab" 
           aria-selected="false">5</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#SwiftMacrosRoles6"
           id="SwiftMacrosRoles6_tab"
           role="tab" 
           aria-selected="false">6</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#SwiftMacrosRoles7"
           id="SwiftMacrosRoles7_tab"
           role="tab" 
           aria-selected="false">7</a>
    </li>
    </ul>

<div class="tab-content">
<div class="tab-pane show active" id="SwiftMacrosRoles1" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment regarding the freestanding expression role" href="https://developer.apple.com/videos/play/wwdc2023/10167/?time=423">🎬</a>

This role is made for creating a piece of code that returns a value.

![](../../../../../images/iOSdev/wwdc23-SwiftMacros_12.png)
</div>

<div class="tab-pane" id="SwiftMacrosRoles2" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment regarding the freestanding declaration role" href="https://developer.apple.com/videos/play/wwdc2023/10167/?time=519">🎬</a>

This role is used to create one or more declarations.
![](../../../../../images/iOSdev/wwdc23-SwiftMacros_13.png)
</div>

<div class="tab-pane" id="SwiftMacrosRoles3" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment regarding the attached peer role" href="https://developer.apple.com/videos/play/wwdc2023/10167/?time=658">🎬</a>

This role adds extra declarations to the existing ones.
![](../../../../../images/iOSdev/wwdc23-SwiftMacros_14.png)
</div>

<div class="tab-pane" id="SwiftMacrosRoles4" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment regarding the attached accessor role" href="https://developer.apple.com/videos/play/wwdc2023/10167/?time=735">🎬</a>

This role is meant for macros that handle variables and subscripts for creating accessors.
![](../../../../../images/iOSdev/wwdc23-SwiftMacros_15.png)
</div>

<div class="tab-pane" id="SwiftMacrosRoles5" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment regarding the attached member attribute role" href="https://developer.apple.com/videos/play/wwdc2023/10167/?time=822">🎬</a>

The goal of this role is to add some attributes to an existing type.
![](../../../../../images/iOSdev/wwdc23-SwiftMacros_17.png)

The **role composition** highlighted in this example is explained below, after the macro roles introduction.
</div>

<div class="tab-pane" id="SwiftMacrosRoles6" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment regarding the attached member role" href="https://developer.apple.com/videos/play/wwdc2023/10167/?time=934">🎬</a>

Through this role, new declarations may be added to the type the macro is applied to.
![](../../../../../images/iOSdev/wwdc23-SwiftMacros_18.png)
</div>

<div class="tab-pane" id="SwiftMacrosRoles7" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment regarding the attached conformance role" href="https://developer.apple.com/videos/play/wwdc2023/10167/?time=1004">🎬</a>

This role aims at adding a conformance to a protocol.
![](../../../../../images/iOSdev/wwdc23-SwiftMacros_19.png)
</div>
</div>
</br>
</br>

The **[role&nbsp;composition](https://developer.apple.com/videos/play/wwdc2023/10167/?time=835)** should be used for creating macros in order to enrich their range usage and to avoid boilerplate code.

![](../../../../../images/iOSdev/wwdc23-SwiftMacros_16.png)
</br>

## [The&nbsp;implementation](https://developer.apple.com/videos/play/wwdc2023/10167/?time=1067)
When a macro has to be used, the [compiler&nbsp;creates&nbsp;a&nbsp;process](https://developer.apple.com/videos/play/wwdc2023/10167/?time=1110) in a secure sandbox where a plugin is launched to get the original code through a potential *[external&nbsp;macro](https://developer.apple.com/videos/play/wwdc2023/10167/?time=1117)*.
![](../../../../../images/iOSdev/wwdc23-SwiftMacros_20.png)

The source code is then parsed into a **[SwiftSyntax&nbsp;tree](https://developer.apple.com/videos/play/wwdc2023/10166?time=227)**...
![](../../../../../images/iOSdev/wwdc23-SwiftMacros_21.png)

... that highlights its [own&nbsp;types](https://developer.apple.com/videos/play/wwdc2023/10167/?time=1192) including **nodes** that may be [tokens](https://developer.apple.com/videos/play/wwdc2023/10167/?time=1233) or just have child nodes as properties.

![](../../../../../images/iOSdev/wwdc23-SwiftMacros_23.png)
</br>

### Libraries
To fully support the `SwiftSyntax tree`, dedicated libraires should be imported:
- **[SwiftSyntax](https://developer.apple.com/videos/play/wwdc2023/10167/?time=1177)** representing the source code as a tree structure.
- **[SwiftSyntaxMacros](https://developer.apple.com/videos/play/wwdc2023/10167/?time=1324)** dealing with necessary types and protocols for macros.
- **[SwiftSyntaxBuilder](https://developer.apple.com/videos/play/wwdc2023/10167/?time=1331)** supporting the new generated code through the syntax trees.

![](../../../../../images/iOSdev/wwdc23-SwiftMacros_22.png)

### [Correct&nbsp;writing](https://developer.apple.com/videos/play/wwdc2023/10167/?time=2018)
Unlike many languages that hold [hygienic&nbsp;macro&nbsp;systems](https://developer.apple.com/videos/play/wwdc2023/10167/?time=2086), `Swift` handles the **[name&nbsp;collisions](https://developer.apple.com/videos/play/wwdc2023/10167/?time=2021)** through a dedicated method to be used.
![](../../../../../images/iOSdev/wwdc23-SwiftMacros_24.png)

Moreover, the **names specifiers** that can be used as arguments in macros are [fivefold](https://developer.apple.com/videos/play/wwdc2023/10167/?time=2162).
![](../../../../../images/iOSdev/wwdc23-SwiftMacros_25.png)

Should the **macros be reliable**, it's important [some&nbsp;rules](https://developer.apple.com/videos/play/wwdc2023/10167/?time=2236) be followed so as not to encounter outlandish behaviors.
![](../../../../../images/iOSdev/wwdc23-SwiftMacros_26.png)
</br>

### [Testing](https://developer.apple.com/videos/play/wwdc2023/10167/?time=2293)
Testing macros should be one of the **essential milestones** of the development that relies on a **simple code structure**.
![](../../../../../images/iOSdev/wwdc23-SwiftMacros_27.png)
</br>

## Detailed&nbsp;example
Before diving into the different steps for creating a macro, let's look into the `Xcode` environment to find out some new features regarding this context.

- Create a **macro template** ⟹ <a alt="Click to playback the video footage." href="https://developer.apple.com/videos/play/wwdc2023/10166?time=316">🎬</a>

- Test a macro through **unit tests** ⟹ <a alt="Click to playback the video footage." href="https://developer.apple.com/videos/play/wwdc2023/10166?time=538">🎬</a>

</br>

The [following&nbsp;phases](https://developer.apple.com/videos/play/wwdc2023/10166/?time=708) are meant to be automatically generating an initializer with a macro:

- **Declare** a macro ⟹ <a alt="Click to playback the video footage." href="https://developer.apple.com/videos/play/wwdc2023/10166?time=849">🎬</a>

- **Implement** a macro ⟹ <a alt="Click to playback the video footage." href="https://developer.apple.com/videos/play/wwdc2023/10166?time=882">🎬</a>

- Connect an `attached macro` with its corresponding **MemberMacro protocol** ⟹ <a alt="Click to playback the video footage." href="https://developer.apple.com/videos/play/wwdc2023/10166?time=906">🎬</a>

- Write the **test case first** ⟹ <a alt="Click to playback the video footage." href="https://developer.apple.com/videos/play/wwdc2023/10166/?time=1011">🎬</a>

- Inspect the **SwiftSyntax tree** of an enum through its syntactic structure ⟹ <a alt="Click to playback the video footage." href="https://developer.apple.com/videos/play/wwdc2023/10166?time=1225">🎬</a>

- Use the `Xcode` **breakpoint** for macros ⟹ <a alt="Click to playback the video footage." href="https://developer.apple.com/videos/play/wwdc2023/10166?time=1192">🎬</a>

- Add the **macro package** to the Xcode project ⟹ <a alt="Click to playback the video footage." href="https://developer.apple.com/videos/play/wwdc2023/10166?time=1482">🎬</a>

- **Expand a macro** to find out what its content is ⟹ <a alt="Click to playback the video footage." href="https://developer.apple.com/videos/play/wwdc2023/10166?time=1556">🎬</a>

- Emit an **error message** and use the **diagnostics** ⟹ <a alt="Click to playback the video footage." href="https://developer.apple.com/videos/play/wwdc2023/10166?time=1681">🎬</a>

- Insert **macro errors** with the `Swift Error protocol` ⟹ <a alt="Click to playback the video footage." href="https://developer.apple.com/videos/play/wwdc2023/10166?time=1721">🎬</a>

</br>
