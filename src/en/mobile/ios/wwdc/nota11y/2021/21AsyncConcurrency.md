---
title : "Asynchronicity and concurrency in iOS 15"
abstract: ""

displayToc: true
---

# WWDC 2021: Asynchronicity and concurrency in iOS&nbsp;15
Find hereafter a detailed summary of four videos that belong to a [taxonomy&nbsp;of&nbsp;some&nbsp;WWDC&nbsp;footages](../../).

The original videos are available on the **official Apple website** ([session&nbsp;10133](https://developer.apple.com/videos/play/wwdc2021/10133/),  [session&nbsp;10132](https://developer.apple.com/videos/play/wwdc2021/10132/),  [session&nbsp;10134](https://developer.apple.com/videos/play/wwdc2021/10134/) and  [session&nbsp;10254](https://developer.apple.com/videos/play/wwdc2021/10254/)).

![](../../../../../images/iOSdev/wwdc21-Concurrency-Intro.png)

"Data races occur when two separate threads concurrently access the same mutable state. They are trivial to construct, but are notoriously hard to debug. Discover how you can **stop these data races** in their tracks **with Swift actors**, which help synchronize access to data in your code. Discover how actors work and how to share values between them. Learn about how **actor isolation** affects protocol conformances. And finally, meet the **main actor**, a new way of ensuring that your code always runs on the main thread when needed."

"Swift now supports **asynchronous functions** — a pattern commonly known as async/await. Discover how the **new syntax** can make your code easier to read and understand. Learn what happens when a function suspends, and find out how to **adapt existing completion handlers to asynchronous functions**."

"When you have code that needs to run at the same time as other code, it's important to choose the right tool for the job. We'll take you through the different kinds of **concurrent tasks** you can create in Swift, show you how to create **groups of tasks**, and find out how to **cancel tasks in progress**. We'll also provide guidance on when you may want to use **unstructured tasks**."

"Dive into the details of **Swift concurrency** and discover how Swift provides greater safety from data races and thread explosion while simultaneously improving performance. We'll explore how **Swift tasks** differ from Grand Central Dispatch, how the **new cooperative threading model** works, and how to ensure the best performance for your apps."
</br>
The various contents of this speech are indicated hereunder:
- [Swift&nbsp;Concurrency](#swift-concurrency)

- [Async-await](#async-await)

- [Tasks](#tasks)

- [Actors](#actors)

</br>Most of the illustrations are parts of the Apple presentations and may be available at the `Resources` section inside the `Overview` sheet of each video.
</br>Hereafter, the underlined elements lead directly to the playback of the WWDC video at the appropriate moment.
</br>

## Swift&nbsp;Concurrency
In order to improve the efficiency at different levels, the usual Grand Central Dispatch process has moved to the **new Concurrency Model** in **iOS&nbsp;15** including:

- A **cooperative thread pool**.

- The **[async/await&nbsp;syntax](#async-await)** that lets the compiler and the runtime be aware of a piece of code might suspend and resume execution while never using escaping closures as callbacks anymore.

- A **structured concurrency** based on the<button class="btn btn-link" onclick="tabPanelFocus('TasksAsyncLetTaskTree_tab','TasksAsyncLetTaskTree')">task&nbsp;tree</button>with a hierachical approach with a parent task and a given priority of execution.
</br>
<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item" role="presentation">
        <a class="nav-link active"
           data-bs-toggle="tab" 
           href="#SwiftConcurrencyThreads"
           id="SwiftConcurrencyThreads_tab"
           role="tab" 
           aria-selected="true">Threads</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#SwiftConcurrencyContinuation"
           id="SwiftConcurrencyContinuation_tab"
           role="tab" 
           aria-selected="false">Continuation</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#SwiftConcurrencyExample"
           id="SwiftConcurrencyExample_tab"
           role="tab" 
           aria-selected="false">Example</a>
    </li>
</ul>

<div class="tab-content">
<div class="tab-pane show active" id="SwiftConcurrencyThreads" role="tabpanel">

Spawning a [huge&nbsp;amount&nbsp;of&nbsp;threads](https://developer.apple.com/videos/play/wwdc2021/10254/?time=506) may lead to dangerous situations.

![](../../../../../images/iOSdev/wwdc21-Concurrency-SwiftConcurrencyThreads_1.png)

A **new [cooperative&nbsp;thread&nbsp;pool](https://developer.apple.com/videos/play/wwdc2021/10254/?time=1239)** has been introduced to ensure the number of created threads doesn’t exceed the number of CPU cores available.

![](../../../../../images/iOSdev/wwdc21-Concurrency-SwiftConcurrencyThreads_2.png)

It's recommended to activate the dedicated [environment&nbsp;variable](https://developer.apple.com/videos/play/wwdc2021/10254/?time=1611) that points out the use of an unsafe blocking primitive under a debug runtime.

![](../../../../../images/iOSdev/wwdc21-Concurrency-SwiftConcurrencyThreads_3.png)
</div>

<div class="tab-pane" id="SwiftConcurrencyContinuation" role="tabpanel">

The power of concurrency relied on the [timesharing](https://developer.apple.com/videos/play/wwdc2021/10254/?time=611) that could unfortunately lead to  in tough situations due to the context switches processing the results.
These thread context switches are **replaced by the continuations** for managing the [resumption&nbsp;of&nbsp;work](https://developer.apple.com/videos/play/wwdc2021/10254/?time=671).

![](../../../../../images/iOSdev/wwdc21-Concurrency-SwiftConcurrencyContinuation_1.png)

A [continuation](https://developer.apple.com/videos/play/wwdc2021/10254/?time=1126) is the **block of code that runs after the await** and is put back on a thread’s stack when execution should resume.

![](../../../../../images/iOSdev/wwdc21-Concurrency-SwiftConcurrencyContinuation_2.png)
</div>

<div class="tab-pane" id="SwiftConcurrencyExample" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment." href="https://developer.apple.com/videos/play/wwdc2021/10254/?time=791">🎬</a>

![](../../../../../images/iOSdev/wwdc21-Concurrency-SwiftConcurrencyExample.png)
</div>
</div>
</br></br>

Serialization and avoidance of data races are ensured by the **Actor protocol** detailed in the [devoted&nbsp;part](#actors).
</br></br>

## [Async-await](https://developer.apple.com/videos/play/wwdc2021/10132/?time=28)

![](../../../../../images/iOSdev/wwdc21-Concurrency-AsyncAwait-Intro.png)

Based on the differences between functions that are [async](https://developer.apple.com/videos/play/wwdc2021/10132/?time=982) or [not](https://developer.apple.com/videos/play/wwdc2021/10132/?time=919), the `async-await` syntax can also be **applied to [properties](https://developer.apple.com/videos/play/wwdc2021/10132/?time=796)** that can thus behave asynchronously.

![](../../../../../images/iOSdev/wwdc21-Concurrency-AsyncAwait-Properties.png)

Besides properties, the [`in-for`&nbsp;loops](https://developer.apple.com/videos/play/wwdc2021/10132/?time=853) can additionally include this syntax to turn their returns into asynchronous results.

![](../../../../../images/iOSdev/wwdc21-Concurrency-AsyncAwait-Loops.png)

Some explanations and examples are pointed out hereafter to find out the potential areas of implementations of this syntax.
<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item" role="presentation">
        <a class="nav-link active"
           data-bs-toggle="tab" 
           href="#AsyncAwaitExamples1"
           id="AsyncAwaitExamples1_tab"
           role="tab" 
           aria-selected="true">Example</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#AsyncAwaitExamples2"
           id="AsyncAwaitExamples2_tab"
           role="tab" 
           aria-selected="false">SyncContext</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#AsyncAwaitExamples3"
           id="AsyncAwaitExamples3_tab"
           role="tab" 
           aria-selected="false">Test</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#AsyncAwaitExamples4"
           id="AsyncAwaitExamples4_tab"
           role="tab" 
           aria-selected="false">Continuation</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#AsyncAwaitExamples5"
           id="AsyncAwaitExamples5_tab"
           role="tab" 
           aria-selected="false">Delegate</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#AsyncAwaitExamples6"
           id="AsyncAwaitExamples6_tab"
           role="tab" 
           aria-selected="false">AsyncThread</a>
    </li>
</ul>

<div class="tab-content">
<div class="tab-pane show active" id="AsyncAwaitExamples1" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment." href="https://developer.apple.com/videos/play/wwdc2021/10132/?time=215">🎬</a>

Instead of using the completion handlers, the `async-await` syntax brings about [less&nbsp;boilerplate&nbsp;code](https://developer.apple.com/videos/play/wwdc2021/10132/?time=510).

![](../../../../../images/iOSdev/wwdc21-Concurrency-AsyncAwait-Example.png)
</div>

<div class="tab-pane" id="AsyncAwaitExamples2" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment." href="https://developer.apple.com/videos/play/wwdc2021/10132/?time=1326">🎬</a>

Adding the `async-await` syntax in a synchronous context may lead to some troubles if some cautiousness isn't taken into account.

![](../../../../../images/iOSdev/wwdc21-Concurrency-AsyncAwait-ExampleSyncContext.png)
</div>

<div class="tab-pane" id="AsyncAwaitExamples3" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment." href="https://developer.apple.com/videos/play/wwdc2021/10132/?time=1280">🎬</a>

![](../../../../../images/iOSdev/wwdc21-Concurrency-AsyncAwait-ExamplesTesting.png)
</div>

<div class="tab-pane" id="AsyncAwaitExamples4" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment." href="https://developer.apple.com/videos/play/wwdc2021/10132/?time=1726">🎬</a>

An excellent way to **keep control over an async process** relies on the **[continuation](https://developer.apple.com/videos/play/wwdc2021/10254/?time=1126)** notion that involves some [caveats](https://developer.apple.com/videos/play/wwdc2021/10132/?time=1856) nevertheless.

![](../../../../../images/iOSdev/wwdc21-Concurrency-AsyncAwait-ExamplesContinuations_1.png)

The continuation has been introduced to replace the thread context switches for becoming the perfect place to **insert the results from the completion handler** using the [withCheckedThrowingContinuation](https://developer.apple.com/videos/play/wwdc2021/10132/?time=1787) method if any errors are taken into account (consider the `withCheckedContinuation` method otherwise).

![](../../../../../images/iOSdev/wwdc21-Concurrency-AsyncAwait-ExamplesContinuations_2.png)
</div>

<div class="tab-pane" id="AsyncAwaitExamples5" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment." href="https://developer.apple.com/videos/play/wwdc2021/10132/?time=1904">🎬</a>

![](../../../../../images/iOSdev/wwdc21-Concurrency-AsyncAwait-ExamplesDelegate.png)
</div>

<div class="tab-pane" id="AsyncAwaitExamples6" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment." href="https://developer.apple.com/videos/play/wwdc2021/10254/?time=879">🎬</a>

This part details the design of the `await` language feature to guarantee the **new suspension and resumption** in Swift concurrency.

![](../../../../../images/iOSdev/wwdc21-Concurrency-AsyncAwait-ExamplesAsyncThread.png)
</div>
</div>
</br></br>

## [Tasks](https://developer.apple.com/videos/play/wwdc2021/10134/?time=34)
This **new feature in Swift** is introduced through an [example](https://developer.apple.com/videos/play/wwdc2021/10134/?time=111) to point out its special connection with the new `async/await` syntax based on structured programming.

![](../../../../../images/iOSdev/wwdc21-Concurrency-TasksIntro.png)

[Tasks](https://developer.apple.com/videos/play/wwdc2021/10134/?time=237) are of **four different types** that are described in details hereafter.

![](../../../../../images/iOSdev/wwdc21-Concurrency-TasksOverview.png)

### [Async-let](https://developer.apple.com/videos/play/wwdc2021/10134/?time=291)
<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item" role="presentation">
        <a class="nav-link active"
           data-bs-toggle="tab" 
           href="#TasksAsyncLetOverview"
           id="TasksAsyncLetOverview_tab"
           role="tab" 
           aria-selected="true">Overview</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#TasksAsyncLetExample"
           id="TasksAsyncLetExample_tab"
           role="tab" 
           aria-selected="false">Example</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#TasksAsyncLetTaskTree"
           id="TasksAsyncLetTaskTree_tab"
           role="tab" 
           aria-selected="false">Task&nbsp;tree</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#TasksAsyncLetCancellation"
           id="TasksAsyncLetCancellation_tab"
           role="tab" 
           aria-selected="false">Cancellation</a>
    </li>
</ul>

<div class="tab-content">
<div class="tab-pane show active" id="TasksAsyncLetOverview" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment." href="https://developer.apple.com/videos/play/wwdc2021/10134/?time=298">🎬</a>

The async-let task is a **concurrent binding** whose evaluation is pretty much different from the usual let binding.

![](../../../../../images/iOSdev/wwdc21-Concurrency-Tasks-AsyncLet_Overview.png)
</div>

<div class="tab-pane" id="TasksAsyncLetExample" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment." href="https://developer.apple.com/videos/play/wwdc2021/10134/?time=448">🎬</a>

![](../../../../../images/iOSdev/wwdc21-Concurrency-Tasks-AsyncLet_Example.png)
</div>

<div class="tab-pane" id="TasksAsyncLetTaskTree" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment." href="https://developer.apple.com/videos/play/wwdc2021/10134/?time=519">🎬</a>

The **task tree** is an **integral part of the structured concurrency** while providing a special environment to its elements (priorities, cancellation, inheritance...).

![](../../../../../images/iOSdev/wwdc21-Concurrency-Tasks-AsyncLet_Tasktree.png)
</div>

<div class="tab-pane" id="TasksAsyncLetCancellation" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment." href="https://developer.apple.com/videos/play/wwdc2021/10134/?time=656">🎬</a>

Cancelling a task doesn't imply its complete cessation if it's already started but its results won't be needed anymore.

![](../../../../../images/iOSdev/wwdc21-Concurrency-Tasks-AsyncLet_Cancellation.png)

Moreover, when this situation occurs, the cancelled task informs its potential subtasks of their cancellation as well.
</div>
</div>
</br></br>

### [Group](https://developer.apple.com/videos/play/wwdc2021/10134/?time=773)
A task group is a form of structured concurrency that is designed to provide a dynamic amount of concurrency. 

When a specific **dynamic amount of concurency tasks** is required, the task group is the type to be implemented using the [withThrowingTaskgroup](https://developer.apple.com/videos/play/wwdc2021/10134/?time=838) function to **ceate child tasks** thanks to the group's async method. 

An [example](https://developer.apple.com/videos/play/wwdc2021/10134/?time=992) for downloading thumbnails highlights the new `for-await` loop to access an asynchronous sequence of values and explains the cancellation automation.

![](../../../../../images/iOSdev/wwdc21-Concurrency-Tasks-TaskGroup.png)

**Manual cancellation of all tasks** before exiting the block is also possible thanks to the **cancelAll** method applied to the group itself.

### [Unstructured](https://developer.apple.com/videos/play/wwdc2021/10134/?time=1137)

![](../../../../../images/iOSdev/wwdc21-Concurrency-Tasks-UnstructuredOverview.png)

An interesting [example](https://developer.apple.com/videos/play/wwdc2021/10134/?time=1197) is introduced to deliver an appropriate way to use this kind of task and to define the context in which it can be inserted.
![](../../../../../images/iOSdev/wwdc21-Concurrency-Tasks-UnstructuredExample.png)

[Cancellation](https://developer.apple.com/videos/play/wwdc2021/10134/?time=1333) for unstructured tasks isn't automatic and **must be implemented** to be taken into account.

![](../../../../../images/iOSdev/wwdc21-Concurrency-Tasks-UnstructuredCancellation.png)

### [Detached](https://developer.apple.com/videos/play/wwdc2021/10134/?time=1403)

![](../../../../../images/iOSdev/wwdc21-Concurrency-Tasks-DetachedOverview.png)

The combination of the structured concurrency inside of a detached task is carried out in an [example](https://developer.apple.com/videos/play/wwdc2021/10134/?time=1435) performing the creation of a group with no error returns by using the `withTaskGroup` method.

![](../../../../../images/iOSdev/wwdc21-Concurrency-Tasks-DetachedExample.png)


## Actors

Set up concurrent programs may lead to different situations pointed out in a basic counter example:

1. [Data&nbsp;races](https://developer.apple.com/videos/play/wwdc2021/10133/?time=42) appear at first sight with a class object defining the counter.

2. Using [value&nbsp;semantics](https://developer.apple.com/videos/play/wwdc2021/10133/?time=174) instead of reference type brings about a new scenario that doesn't completely overcome the initial problem.

3. Finally, a **new type** comes in as [actor](https://developer.apple.com/videos/play/wwdc2021/10133/?time=393) to take advantage of synchronization with a shared mutable state and provide an appropriate solution for the previous downsides.

![](../../../../../images/iOSdev/wwdc21-Concurrency-Actors_1.png)

This **[new&nbsp;type](https://developer.apple.com/videos/play/wwdc2021/10133/?time=321)** reaches the Swift named types to provide another perspective for concurrently accessing data.
![](../../../../../images/iOSdev/wwdc21-Concurrency-Actors_3.png)

The [actor&nbsp;properties](https://developer.apple.com/videos/play/wwdc2021/10133/?time=282) create a **synchronization mechanism** that is completely safe.
![](../../../../../images/iOSdev/wwdc21-Concurrency-Actors_2.png)

**Using actors** can only be done **from within an asynchronous context** and this interaction becomes [synchronous](https://developer.apple.com/videos/play/wwdc2021/10133/?time=470) when running on the actor itself.
![](../../../../../images/iOSdev/wwdc21-Concurrency-Actors_4.png)

However, it's imperative to keep in mind that [successive&nbsp;calls](https://developer.apple.com/videos/play/wwdc2021/10133/?time=542) to a method handled by an actor element may lead to situations whose complete process must be managed to avoid useless operations and disappointed results.

![](../../../../../images/iOSdev/wwdc21-Concurrency-Actors_5.png)

Execution switching from one actor to another is called the **[actor&nbsp;hopping](https://developer.apple.com/videos/play/wwdc2021/10254/?time=1852)** giving rise to the **[actor&nbsp;reentrancy](https://developer.apple.com/videos/play/wwdc2021/10254/?time=2109)** notion that leads to a better scheduling and resource utilization.


Actors **guarantee [mutual&nbsp;exclusion](https://developer.apple.com/videos/play/wwdc2021/10254/?time=1689)** while executing at most one method call at a time. 

![](../../../../../images/iOSdev/wwdc21-Concurrency-ActorsMutualExclusion.png)

### [Isolation](https://developer.apple.com/videos/play/wwdc2021/10133/?time=797)
<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item" role="presentation">
        <a class="nav-link active"
           data-bs-toggle="tab" 
           href="#ActorsIsolationProtocol"
           id="ActorsIsolationProtocol_tab"
           role="tab" 
           aria-selected="true">Protocol</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#ActorsIsolationClosure"
           id="ActorsIsolationClosure_tab"
           role="tab" 
           aria-selected="false">Closure</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#ActorsIsolationData"
           id="ActorsIsolationData_tab"
           role="tab" 
           aria-selected="false">Data</a>
    </li>
</ul>

<div class="tab-content">
<div class="tab-pane show active" id="ActorsIsolationProtocol" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment." href="https://developer.apple.com/videos/play/wwdc2021/10133/?time=808">🎬</a>

When conforming to a protocol that contains synchronous functions, an actor must prefix these overriden functions with the **nonisolated** keyword to be marked as an outside process that **permits data races** without referencing the mutable state on the actor.

![](../../../../../images/iOSdev/wwdc21-Concurrency-ActorsIsolationProtocol.png)
</div>

<div class="tab-pane" id="ActorsIsolationClosure" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment." href="https://developer.apple.com/videos/play/wwdc2021/10133/?time=933">🎬</a>

Creating closures inside an actor **doesn't imply a mandatory isolation** to its context thanks to the `Task` model.

![](../../../../../images/iOSdev/wwdc21-Concurrency-ActorsIsolationClosure.png)

</div>

<div class="tab-pane" id="ActorsIsolationData" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment." href="https://developer.apple.com/videos/play/wwdc2021/10133/?time=1027">🎬</a>

Accessing classes through an actor may lead to data races though while **structs ensures safety in concurrency**.

![](../../../../../images/iOSdev/wwdc21-Concurrency-ActorsIsolationData.png)

Concurrently processing in a safe way is secured with elements of **Sendable** types.
</div>
</div>
</br></br>

### Sendable
<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item" role="presentation">
        <a class="nav-link active"
           data-bs-toggle="tab" 
           href="#ActorsIsolationSendableOverview"
           id="ActorsIsolationSendableOverview_tab"
           role="tab" 
           aria-selected="true">Overview</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#ActorsIsolationSendableCheck"
           id="ActorsIsolationSendableCheck_tab"
           role="tab" 
           aria-selected="false">Checking</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#ActorsIsolationSendableConformance"
           id="ActorsIsolationSendableConformance_tab"
           role="tab" 
           aria-selected="false">Conformance</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#ActorsIsolationSendableFunction"
           id="ActorsIsolationSendableFunction_tab"
           role="tab" 
           aria-selected="false">Function</a>
    </li>
</ul>

<div class="tab-content">
<div class="tab-pane show active" id="ActorsIsolationSendableOverview" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment." href="https://developer.apple.com/videos/play/wwdc2021/10133/?time=1118">🎬</a>

![](../../../../../images/iOSdev/wwdc21-Concurrency-ActorsIsolationSendableOverview.png)
</div>

<div class="tab-pane" id="ActorsIsolationSendableCheck" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment." href="https://developer.apple.com/videos/play/wwdc2021/10133/?time=1184">🎬</a>

![](../../../../../images/iOSdev/wwdc21-Concurrency-ActorsIsolationSendableCheck.png)
</div>

<div class="tab-pane" id="ActorsIsolationSendableConformance" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment." href="https://developer.apple.com/videos/play/wwdc2021/10133/?time=1206">🎬</a>

![](../../../../../images/iOSdev/wwdc21-Concurrency-ActorsIsolationSendableConformance.png)
</div>

<div class="tab-pane" id="ActorsIsolationSendableFunction" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment." href="https://developer.apple.com/videos/play/wwdc2021/10133/?time=1283">🎬</a>

![](../../../../../images/iOSdev/wwdc21-Concurrency-ActorsIsolationSendableFunction.png)

It's important to notice that `@unchecked Sendable` can also be used for a class to stop the IDE warnings if the necessary dispatch queues have been implemented to ensure a safe concurrency in the appropriate functions.
</div>
</div>
</br>

### [Main&nbsp;actor](https://developer.apple.com/videos/play/wwdc2021/10133/?time=1408)
Using the [@MainActor&nbsp;attribute](https://developer.apple.com/videos/play/wwdc2021/10133/?time=1496) indicates that the examined element is **working on the main thread**.

![](../../../../../images/iOSdev/wwdc21-Concurrency-ActorsMainActor_1.png)

This [attribute&nbsp;on&nbsp;a&nbsp;specific&nbsp;type](https://developer.apple.com/videos/play/wwdc2021/10133/?time=1580) ensures that its scope **spreads all over the methods and properties** of this type while giving the opportunity to get rid of it thanks to the `nonisolated` keyword.

![](../../../../../images/iOSdev/wwdc21-Concurrency-ActorsMainActor_2.png)

It may be also highly useful to modify the code structure in order to [avoid&nbsp;back&nbsp;and&nbsp;forth](https://developer.apple.com/videos/play/wwdc2021/10254/?time=2233) between a thread and the main actor.

![](../../../../../images/iOSdev/wwdc21-Concurrency-ActorsMainActor_3.png)
</br></br></br>