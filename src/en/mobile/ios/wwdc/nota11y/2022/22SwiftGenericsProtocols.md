---
title : "Swift generics and protocols"
abstract: "Discover language features in Swift 5.7 that can help you make generic code easier to write and understand. Learn how you can use Swift 5.7 to design advanced abstractions using protocols."

displayToc: true
---

# WWDC 2022: Swift generics and protocols
Find hereafter a detailed summary of two videos that belong to a [taxonomy&nbsp;of&nbsp;some&nbsp;WWDC&nbsp;footages](../../).

The original videos are available on the **official Apple website** ([session&nbsp;110352](https://developer.apple.com/videos/play/wwdc2022//110352/), [session&nbsp;110353](https://developer.apple.com/videos/play/wwdc2022//110353/)).

![](../../../../../images/iOSdev/wwdc22-SwiftGenericsProtocols.png)

"Generics are a fundamental tool for **writing abstract code in Swift**. Learn how you can identify opportunities for abstraction as your code evolves, evaluate strategies for writing one piece of code with many behaviors, and **discover language features in Swift 5.7** that can help you **make generic code easier to write and understand**."

"Learn how you can **use Swift 5.7 to design advanced abstractions using protocols**. We'll show you how to **use existential types**, explore how you can separate implementation from interface with **opaque result types**, and share the same-type requirements that can help you **identify and guarantee relationships between concrete types**."
</br>

The crucial terms used in this speech are indicated hereunder:
- <button class="btn btn-link" onclick="location.href='#protocol'">Associated type</button>
- <button class="btn btn-link" onclick="tabPanelFocus('AnyAssociateTypePosition_tab','AnyAssociateTypePosition')">Associated type in consuming/producing position</button>
- <button class="btn btn-link" onclick="location.href='#ConstainedResultType'">Constrained existential/opaque result type</button>
- <button class="btn btn-link" onclick="location.href='#any'">Existential type</button>
- <button class="btn btn-link" onclick="location.href='#basics-for-generic-code'">Interface</button>
- <button class="btn btn-link" onclick="location.href='#some'">Opaque type</button>
- <button class="btn btn-link" onclick="location.href='#polymorphism'">Polymorphism</button>
- <button class="btn btn-link" onclick="location.href='#hide-identify'">Primary associated type</button>
- <button class="btn btn-link" onclick="location.href='#protocol'">Protocol</button>
- <button class="btn btn-link" onclick="location.href='#SameTypeRequirement'">Same-type requirement</button>
- <button class="btn btn-link" onclick="tabPanelFocus('AnyTypeErasure_tab','AnyTypeErasure')">Type erasure</button>
- <button class="btn btn-link" onclick="tabPanelFocus('PolymorphismParametric_tab','PolymorphismParametric')">Type parameter</button>
- <button class="btn btn-link" onclick="tabPanelFocus('AnyUnboxing_tab','AnyUnboxing')">Unboxing</button>
- <button class="btn btn-link" onclick="location.href='#some'">Underlying type</button>
- <button class="btn btn-link" onclick="tabPanelFocus('AnyTypeErasure_tab','AnyTypeErasure')">Upper bound</button>

</br>Most of the illustrations are parts of the Apple presentations and may be available at the `Resources` section inside the `Overview` sheet of each video.
</br>Hereafter, the underlined elements lead directly to the playback of the WWDC video at the appropriate moment.

![](../../../../../images/iOSdev/wwdc22-SwiftGenericsProtocols_1.png)

When code snippets turn out to be [iterative](https://developer.apple.com/videos/play/wwdc2022/110352?time=184), it might be interesting to implement some abstract code by using **polymorphism** in the first place.
</br>

## [Polymorphism](https://developer.apple.com/videos/play/wwdc2022/110352?time=231)

![](../../../../../images/iOSdev/wwdc22-SwiftGenericsProtocols-Polymorphism_1.png)

<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item" role="presentation">
        <a class="nav-link active"
           data-bs-toggle="tab" 
           href="#PolymorphismAdHoc"
           id="PolymorphismAdHoc_tab"
           role="tab" 
           aria-selected="true">Ad-hoc</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#PolymorphismSubtype"
           id="PolymorphismSubtype_tab"
           role="tab" 
           aria-selected="false">Subtype</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#PolymorphismParametric"
           id="PolymorphismParametric_tab"
           role="tab" 
           aria-selected="false">Parametric</a>
    </li>
    </ul>

<div class="tab-content">
<div class="tab-pane show active" id="PolymorphismAdHoc" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment." href="https://developer.apple.com/videos/play/wwdc2022/110352/?time=108">🎬</a>

This kind of polymorphism relies on **overloads** to reach the initial goal.

![](../../../../../images/iOSdev/wwdc22-SwiftGenericsProtocols-PolymorphismAdHoc.png)
</div>

<div class="tab-pane" id="PolymorphismSubtype" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment." href="https://developer.apple.com/videos/play/wwdc2022/110352/?time=304">🎬</a>

Using subtypes brings about the creation of a parent class from which each global functions will be inherited.

![](../../../../../images/iOSdev/wwdc22-SwiftGenericsProtocols-PolymorphismSubtype.png)

</div>

<div class="tab-pane" id="PolymorphismParametric" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment." href="https://developer.apple.com/videos/play/wwdc2022/110352/?time=416">🎬</a>

To avoid potential problems with the subtype solution, a more generic code is set up by way of **generic types** through **type parameters** that specify and name a placeholder type with a pair of matching angle brackets.

![](../../../../../images/iOSdev/wwdc22-SwiftGenericsProtocols-PolymorphismParametric.png)

In case of [numerous&nbsp;added&nbsp;types](https://developer.apple.com/videos/play/wwdc2022/110352/?time=468), this code design could quickly become cumbersome.
</div>
</div>
</br></br>

## Basics&nbsp;for&nbsp;generic&nbsp;code
The best way to get rid of some problematic situations using polymorphism is based on **[building&nbsp;an&nbsp;interface](https://developer.apple.com/videos/play/wwdc2022/110352/?time=495)** that won't take the implementation details into account.

### [Protocol](https://developer.apple.com/videos/play/wwdc2022/110352?time=524)
In this perspective, Swift leans on a protocol to **describe the functionality of conforming types** in conjuction with **associated types** acting as placeholders for concrete types inside this protocol.
![](../../../../../images/iOSdev/wwdc22-SwiftGenericsProtocols-BasicsProtocol_1.png)

The best way to set up a refined conception is based on the [powerful&nbsp;expression](https://developer.apple.com/videos/play/wwdc2022/110352/?time=666) of **named type parameters and trailing `where` clauses**...
![](../../../../../images/iOSdev/wwdc22-SwiftGenericsProtocols-BasicsProtocol_2.png)

... whose code writing has been **[enhanced](https://developer.apple.com/videos/play/wwdc2022/110352/?time=749) in `Swift`&nbsp;`5.7`**.

![](../../../../../images/iOSdev/wwdc22-SwiftGenericsProtocols-BasicsProtocol_3.png)

However, this improvement may be avoided in some [specific&nbsp;situations](https://developer.apple.com/videos/play/wwdc2022/110352/?time=1091). 

![](../../../../../images/iOSdev/wwdc22-SwiftGenericsProtocols-BasicsProtocol_4.png)

### Some
The **abstract type** prefixed by the `some` keyword was introduced in `Swift`&nbsp;`5.1` as an **[opaque&nbsp;type](https://developer.apple.com/videos/play/wwdc2022/110352/?time=868)**...
![](../../../../../images/iOSdev/wwdc22-SwiftGenericsProtocols-Some_1.png)

... that isn't analyzed the same way depending on its role that will give rise to different assessings of its **underlying type**.

<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item" role="presentation">
        <a class="nav-link active"
           data-bs-toggle="tab" 
           href="#OpaqueTypeLocalVariable"
           id="OpaqueTypeLocalVariable_tab"
           role="tab" 
           aria-selected="true">Local&nbsp;variable</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#OpaqueTypeParameter"
           id="OpaqueTypeParameter_tab"
           role="tab" 
           aria-selected="false">Parameter</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#OpaqueTypeResult"
           id="OpaqueTypeResult_tab"
           role="tab" 
           aria-selected="false">Result</a>
    </li>
    </ul>

<div class="tab-content">
<div class="tab-pane show active" id="OpaqueTypeLocalVariable" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment." href="https://developer.apple.com/videos/play/wwdc2022/110352/?time=969">🎬</a>

As the underlying type must be fixed, it's impossible to modify the initial value of an opaque type when used for a local variable.

![](../../../../../images/iOSdev/wwdc22-SwiftGenericsProtocols-SomeOpaqueTypeLocalVariable.png)
</div>

<div class="tab-pane" id="OpaqueTypeParameter" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment." href="https://developer.apple.com/videos/play/wwdc2022/110352/?time=997">🎬</a>

Using `some` as parameter is **new in `Swift`&nbsp;`5.7`** and offers the opportunity to **provide various types of elements**.

![](../../../../../images/iOSdev/wwdc22-SwiftGenericsProtocols-SomeOpaqueTypeParameter.png)

</div>

<div class="tab-pane" id="OpaqueTypeResult" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment." href="https://developer.apple.com/videos/play/wwdc2022/110352/?time=1018">🎬</a>
![](../../../../../images/iOSdev/wwdc22-SwiftGenericsProtocols-SomeOpaqueTypeResult_1.png)

When the underlying return type isn't the same across all return statements, the **D**omain-**S**pecific **L**anguage **ViewBuilder** handles this situation to make it work in [SwiftUI](https://developer.apple.com/videos/play/wwdc2022/110352?time=1048).

![](../../../../../images/iOSdev/wwdc22-SwiftGenericsProtocols-SomeOpaqueTypeResult_2.png)
</div>
</div>
</br>

</br>An opaque type also permits to **dive into the underlying type's properties** [in&nbsp;a&nbsp;safe&nbsp;way](https://developer.apple.com/videos/play/wwdc2022/110352/?time=1152).

![](../../../../../images/iOSdev/wwdc22-SwiftGenericsProtocols-Some_2.png)

Using the `some` keyword implies having the **same type** for all the elements [inside&nbsp;an&nbsp;array](https://developer.apple.com/videos/play/wwdc2022/110352?time=1239) (the underlying type is fixed and can't vary).

![](../../../../../images/iOSdev/wwdc22-SwiftGenericsProtocols-Some_3.png)

### Any
The static type prefixed by the `any` keyword introduced in `Swift`&nbsp;`5.6` is appointed an **[existential&nbsp;type](https://developer.apple.com/videos/play/wwdc2022/110352/?time=1300)** and is represented by a **specific structure in memory**.
<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item" role="presentation">
        <a class="nav-link active"
           data-bs-toggle="tab" 
           href="#AnyTypeErasure"
           id="AnyTypeErasure_tab"
           role="tab" 
           aria-selected="true">Type&nbsp;erasure</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#AnyAssociateTypePosition"
           id="AnyAssociateTypePosition_tab"
           role="tab" 
           aria-selected="false">Associate&nbsp;type's&nbsp;position</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#AnyUnboxing"
           id="AnyUnboxing_tab"
           role="tab" 
           aria-selected="false">Unboxing</a>
    </li>
    </ul>

<div class="tab-content">
<div class="tab-pane show active" id="AnyTypeErasure" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment." href="https://developer.apple.com/videos/play/wwdc2022/110352?time=1336">🎬</a>

The idea of having the same representation for different concrete types is called **type erasure** and these concrete types known only at runtime are said to be erased at compile time⟹ **same static type and different dynamic types**.

![](../../../../../images/iOSdev/wwdc22-SwiftGenericsProtocols-AnyTypeErasure.png)

The type `'any`&nbsp;`ProtocolName'` is called the **[upper&nbsp;bound](https://developer.apple.com/videos/play/wwdc2022/110353/?time=256)** of the associated type in the protocol referred to.
</div>

<div class="tab-pane" id="AnyAssociateTypePosition" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment." href="https://developer.apple.com/videos/play/wwdc2022/110353/?time=275">🎬</a>

It's important to notice that the `type erasure` doesn't work the same way depending on the role the associated types act in the implementation.

![](../../../../../images/iOSdev/wwdc22-SwiftGenericsProtocols-AnyAssociateTypePosition.png)

</div>

<div class="tab-pane" id="AnyUnboxing" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment." href="https://developer.apple.com/videos/play/wwdc2022/110352/?time=1380">🎬</a>

Let the compiler reveal the value stored inside a static type is **new in `Swift`&nbsp;`5.7`** and is called **unboxing**.
This compiler behavior aims at **exposing the existential type content by passing this element to a function that takes an opaque type**, which is crucial regarding a consuming position of an associate type.

![](../../../../../images/iOSdev/wwdc22-SwiftGenericsProtocols-AnyUnboxing.png)
</div>
</div>
</br>

</br>Using the `any` keyword entitles to **store any concrete type dynamically** within an array unlike the `some` keyword.

![](../../../../../images/iOSdev/wwdc22-SwiftGenericsProtocols-Any.png)

</br>

## Hide&nbsp;&&nbsp;Identify
Protocols can now include **[primary&nbsp;associated&nbsp;types](https://developer.apple.com/videos/play/wwdc2022/110353/?time=740)** to specify the type for a given associated type as a generic constraint.

![](../../../../../images/iOSdev/wwdc22-SwiftGenericsProtocols-HideIdentity_1.png)
<a id="ConstainedResultType"></a>
Moreover, `Swift`&nbsp;`5.7` offers an interesting new way for **hiding implementation** through the **[constrained&nbsp;opaque&nbsp;result&nbsp;types](https://developer.apple.com/videos/play/wwdc2022/110353/?time=682)** that are also available for existential types via the [constrained&nbsp;existential&nbsp;result&nbsp;types](https://developer.apple.com/videos/play/wwdc2022/110353/?time=801).

![](../../../../../images/iOSdev/wwdc22-SwiftGenericsProtocols-HideIdentity_2.png)

When protocol definitions are too general, they may lead to [unfortunate&nbsp;relationships](https://developer.apple.com/videos/play/wwdc2022/110353/?time=894) between different groups of concrete types.

![](../../../../../images/iOSdev/wwdc22-SwiftGenericsProtocols-HideIdentity_3.png)
<a id="SameTypeRequirement"></a>
To clear up the impediments outlined by the previous situation, associating the **protocol's `Self` type** (which stands for the concrete conforming type) and the **same-type requirement** (written in a where clause) is definitely the [best&nbsp;way](https://developer.apple.com/videos/play/wwdc2022/110353/?time=1272) to identify the fact that two different associated types designate the **same concrete type**.

![](../../../../../images/iOSdev/wwdc22-SwiftGenericsProtocols-HideIdentity_4.png)

![](../../../../../images/iOSdev/wwdc22-SwiftGenericsProtocols_2.png)