---
title : "Live Activities"
abstract: "Learn the best way to create graphically rich layouts for the Live Activities."

displayToc: true
---

# WWDC 2023: Live Activities
Find hereafter a detailed summary of three videos that belong to a [taxonomy&nbsp;of&nbsp;some&nbsp;WWDC&nbsp;footages](../../).

The original videos are available on the **Apple official website** ([session&nbsp;10184](https://developer.apple.com/videos/play/wwdc2023/10184/), [session&nbsp;10185](https://developer.apple.com/videos/play/wwdc2023/10185/), [session&nbsp;10194](https://developer.apple.com/videos/play/wwdc2023/10194/)).
![](../../../../../images/iOSdev/wwdc23-LiveActivities_Poster.png)
"Live Activities are a glanceable way for someone to keep track of the progress of a task within your app. We'll teach you how you can **create helpful experiences** for the Lock Screen, the Dynamic Island, and StandBy. Learn how to **update your app's Live Activities**, monitor activity state, and take advantage of WidgetKit and SwiftUI to build richer experiences."

"Discover how you can remotely **update Live Activities** in your app when you push content through **Apple Push Notification service** (APNs). We'll show you how to configure your first Live Activity push locally so you can quickly iterate on your implementation. **Learn best practices** for determining your push priority and configuring alerting updates, and explore how to further improve your Live Activities with relevance score and stale date."

"Live Activities allow your app to display live information in key system locations on iOS and iPadOS. Learn the best way to **create graphically rich layouts** that update seamlessly on the Lock Screen, in StandBy, and in the Dynamic Island. **Incorporate interactivity and animation** to help people stay in touch with live updating events from your app as they navigate outside of your app."

</br>Hereafter, the underlined elements **lead directly to the playback of the WWDC video** at the appropriate moment.
</br>

## [Overview](https://developer.apple.com/videos/play/wwdc2023/10184/?time=41)
**Live Activities** are the best way to follow an event or a task progression in real time instead of using a [huge&nbsp;number&nbsp;of&nbsp;notifications](https://developer.apple.com/videos/play/wwdc2023/10194?time=41) to reach the same goal.
![](../../../../../images/iOSdev/wwdc23-LiveActivities_1.png)

They can be displayed through the **Dynamic Island** available after a certain [model&nbsp;of&nbsp;iPhone](https://developer.apple.com/videos/play/wwdc2023/10184/?time=66) (the compact, minimal and expanded presentations are explained in the [BuildUI](#build) section).

![](../../../../../images/iOSdev/wwdc23-LiveActivities_2.png)

The new **[`Standby`](https://developer.apple.com/videos/play/wwdc2023/101/?time=1916)** feature and **`iPadOS`&nbsp;`17`** are [good&nbsp;candidates](https://developer.apple.com/videos/play/wwdc2023/10184/?time=127) for these activities to improve the user experience supported by the `API`.

![](../../../../../images/iOSdev/wwdc23-LiveActivities_3.png)

Based on the **Activity framework** used by `SwiftUI` and `WidgetKit`, the `Live Activities` rely on some [best&nbsp;practices](https://developer.apple.com/videos/play/wwdc2023/10184/?time=197) to be followed.

![](../../../../../images/iOSdev/wwdc23-LiveActivities_4.png)

</br>

## Design
### [Lock&nbsp;Screen](https://developer.apple.com/videos/play/wwdc2023/10194?time=78)

![](../../../../../images/iOSdev/wwdc23-LiveActivities_11.png)

Located above the usual notifications on the lock screen, the `Live Activities` should have a dedicated interface so as to be undoubtedly identified.
</br>

<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item" role="presentation">
        <a class="nav-link active"
           data-bs-toggle="tab" 
           href="#LiveActivitiesLockScreen1"
           id="LiveActivitiesLockScreen1_tab"
           role="tab" 
           aria-selected="true">Personality</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#LiveActivitiesLockScreen2"
           id="LiveActivitiesLockScreen2_tab"
           role="tab" 
           aria-selected="false">Transitions</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#LiveActivitiesLockScreen3"
           id="LiveActivitiesLockScreen3_tab"
           role="tab" 
           aria-selected="false">Alerting</a>
    </li>
    </ul>

<div class="tab-content">
<div class="tab-pane show active" id="LiveActivitiesLockScreen1" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment regarding the personality" href="https://developer.apple.com/videos/play/wwdc2023/10194?time=147">🎬</a>

The importance of maintaining a **graphical consistency** shouldn't be removed in the `Dark Mode`.
![](../../../../../images/iOSdev/wwdc23-LiveActivities_12.png)

Using [bold&nbsp;colors](https://developer.apple.com/videos/play/wwdc2023/10194?time=182) is a good way to **highlight some elements** in the widget.
![](../../../../../images/iOSdev/wwdc23-LiveActivities_13.png)

The layout should **adapt the display of information** according to their [relevance](https://developer.apple.com/videos/play/wwdc2023/10194?time=224).
![](../../../../../images/iOSdev/wwdc23-LiveActivities_14.png)
</div>

<div class="tab-pane" id="LiveActivitiesLockScreen2" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment regarding the transitions" href="https://developer.apple.com/videos/play/wwdc2023/10194?time=278">🎬</a>

Whatever the native default transitions (numeric or replace content transitions...) or some customized ones, **smoothness** with **unoverlapping** and **fading** are important notions to be taken into account for transitions in the widget.
</div>

<div class="tab-pane" id="LiveActivitiesLockScreen3" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment regarding the alerting" href="https://developer.apple.com/videos/play/wwdc2023/10194?time=330">🎬</a>

It's crucial to notify the user by means of an alert if an **update** requires his attention. 

![](../../../../../images/iOSdev/wwdc23-LiveActivities_15.png)

The **standard notification sound** combined with the **screen lighting** are the essential elements that point out an alert that should be highlighted by a specific graphical element as well.
</div>
</div>
</br>
</br>

### [Standby](https://developer.apple.com/videos/play/wwdc2023/10194?time=364)
This `iOS 17` **[new feature](https://developer.apple.com/videos/play/wwdc2023/101/?time=1916)** has an **2X scale-up** process regarding the widget size so as to make the most of the screen size. 

![](../../../../../images/iOSdev/wwdc23-LiveActivities_16.png)

It automatically **tailors the background color** to the `Live Activity`'s but [special&nbsp;attention](https://developer.apple.com/videos/play/wwdc2023/10194?time=387) must be paid to the highlighted graphic elements that divide parts in the widget.

![](../../../../../images/iOSdev/wwdc23-LiveActivities_17.png)

Besides checking the color contrast for accessibility, it's vital to inspect the widget's in order to have the [best&nbsp;rendering](https://developer.apple.com/videos/play/wwdc2023/10194?time=442) that's offered by the **night mode** feature.
![](../../../../../images/iOSdev/wwdc23-LiveActivities_18.png)
</br>

### [Dynamic&nbsp;Island](https://developer.apple.com/videos/play/wwdc2023/10194?time=463)
![](../../../../../images/iOSdev/wwdc23-LiveActivities_19.png)

[Smoothness&nbsp;and&nbsp;fluidity](https://developer.apple.com/videos/play/wwdc2023/10194/?time=537) are the main keywords that go with the `Dynamic Island` for outlining the essential information through animations.
![](../../../../../images/iOSdev/wwdc23-LiveActivities_20.png)

It's of a [major&nbsp;importance](https://developer.apple.com/videos/play/wwdc2023/10194/?time=577) to have **fluent rounded shapes** with the `Dynamic Island` edges...

![](../../../../../images/iOSdev/wwdc23-LiveActivities_21.png)

... and converting **non rounded shapes** into a blurry element is also a good trick to get an harmonious fit.

![](../../../../../images/iOSdev/wwdc23-LiveActivities_22.png)

Some necessary advice should be known for perfectly designing the **[three&nbsp;size&nbsp;classes](https://developer.apple.com/videos/play/wwdc2023/10194/?time=666)** of the `Dynamic Island` detailed in the [BuildUI](#build) section.
<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item" role="presentation">
        <a class="nav-link active"
           data-bs-toggle="tab" 
           href="#LiveActivitiesDesign1"
           id="LiveActivitiesDesign1_tab"
           role="tab" 
           aria-selected="true">Compact</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#LiveActivitiesDesign2"
           id="LiveActivitiesDesign2_tab"
           role="tab" 
           aria-selected="false">Expanded</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#LiveActivitiesDesign3"
           id="LiveActivitiesDesign3_tab"
           role="tab" 
           aria-selected="false">Minimal</a>
    </li>
    </ul>

<div class="tab-content">
<div class="tab-pane show active" id="LiveActivitiesDesign1" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment regarding the compact view" href="https://developer.apple.com/videos/play/wwdc2023/10194/?time=679">🎬</a>

This view aims at keeping on using one's device whithout losing sight on the most important information about some running activities.
For this purpose, it's highly recommended to **avoid useless spaces** around the [sensor&nbsp;region](https://developer.apple.com/videos/play/wwdc2023/10194/?time=700).

![](../../../../../images/iOSdev/wwdc23-LiveActivities_23.png)

When [alerting](https://developer.apple.com/videos/play/wwdc2023/10194/?time=738) the user about a crucial information, it's better to **expand the view** instead of sending a notification.

![](../../../../../images/iOSdev/wwdc23-LiveActivities_24.png)
</div>

<div class="tab-pane" id="LiveActivitiesDesign2" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment regarding the expanded view" href="https://developer.apple.com/videos/play/wwdc2023/10194/?time=759">🎬</a>
![](../../../../../images/iOSdev/wwdc23-LiveActivities_26.png)

When expanded, the view should keep the **same information at the same location** in order to [be&nbsp;coherent](https://developer.apple.com/videos/play/wwdc2023/10194/?time=797) and avoid a cognitive work for the user.

![](../../../../../images/iOSdev/wwdc23-LiveActivities_25.png)

Better is the [refinement](https://developer.apple.com/videos/play/wwdc2023/10194/?time=806) regarding the spaces around the graphic items, better will be the user experience and more undetected will be the sensor region.

![](../../../../../images/iOSdev/wwdc23-LiveActivities_27.png)
</div>

<div class="tab-pane" id="LiveActivitiesDesign3" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment regarding the minimal view" href="https://developer.apple.com/videos/play/wwdc2023/10194/?time=834">🎬</a>

Appearing when switching between **multiple apps** while `Live Activities` are still alive, the minimal view aims at providing a relevant information through a teeny-weeny area that must be refined when devising the app. 

![](../../../../../images/iOSdev/wwdc23-LiveActivities_28.png)
</div>
</div>
</br>
</br>

## [Lifecycle](https://developer.apple.com/videos/play/wwdc2023/10184/?time=305)
<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item" role="presentation">
        <a class="nav-link active"
           data-bs-toggle="tab" 
           href="#LiveActivitiesLifecycle1"
           id="LiveActivitiesLifecycle1_tab"
           role="tab" 
           aria-selected="true">Request</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#LiveActivitiesLifecycle2"
           id="LiveActivitiesLifecycle2_tab"
           role="tab" 
           aria-selected="false">Update</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#LiveActivitiesLifecycle3"
           id="LiveActivitiesLifecycle3_tab"
           role="tab" 
           aria-selected="false">Observe&nbsp;activity&nbsp;state</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#LiveActivitiesLifecycle4"
           id="LiveActivitiesLifecycle4_tab"
           role="tab" 
           aria-selected="false">End</a>
    </li>
    </ul>

<div class="tab-content">
<div class="tab-pane show active" id="LiveActivitiesLifecycle1" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment regarding the lifecycle request" href="https://developer.apple.com/videos/play/wwdc2023/10184/?time=328">🎬</a>

Few milestones are mandatory for this first lifecycle step:
1. Implement the **ActivityAttributes** protocol to describe the dynamic and static contents.

2. Define a structure to outline the state and the configuration of the activity.

3. Request and start the `Live Activity`.

![](../../../../../images/iOSdev/wwdc23-LiveActivities_5.png)
</div>

<div class="tab-pane" id="LiveActivitiesLifecycle2" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment regarding the lifecycle update" href="https://developer.apple.com/videos/play/wwdc2023/10184/?time=470">🎬</a>

When updating an activity, it's important to:
- **Identify** what needs to be updated,

- **Create an alert** for informing the user the update occurs if need be. 

![](../../../../../images/iOSdev/wwdc23-LiveActivities_6.png)
</div>

<div class="tab-pane" id="LiveActivitiesLifecycle3" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment regarding the lifecycle observable active state" href="https://developer.apple.com/videos/play/wwdc2023/10184/?time=557">🎬</a>

Using the **ActivityStateUpdates** structure is the best way to observe the **four states** an activity may encounter (started, finished, dismissed, stale) so as to provide the appropriate command to be executed as quick as possible.

![](../../../../../images/iOSdev/wwdc23-LiveActivities_7.png)
</div>

<div class="tab-pane" id="LiveActivitiesLifecycle4" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment regarding the lifecycle end" href="https://developer.apple.com/videos/play/wwdc2023/10184/?time=603">🎬</a>

Before ending an activity, it's important to **create a final content** combined with the **policy** the system should remove the `Live Activity`.

![](../../../../../images/iOSdev/wwdc23-LiveActivities_8.png)
</div>
</div>
</br>
</br>

<a name="build"></a>
## [Build&nbsp;UI](https://developer.apple.com/videos/play/wwdc2023/10184/?time=647)
<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item" role="presentation">
        <a class="nav-link active"
           data-bs-toggle="tab" 
           href="#LiveActivitiesBuildUI1"
           id="LiveActivitiesBuildUI1_tab"
           role="tab" 
           aria-selected="true">User&nbsp;interface</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#LiveActivitiesBuildUI2"
           id="LiveActivitiesBuildUI2_tab"
           role="tab" 
           aria-selected="false">Implemented&nbsp;code</a>
    </li>
    </ul>

<div class="tab-content">
<div class="tab-pane show active" id="LiveActivitiesBuildUI1" role="tabpanel">
    
Besides the **`Lock Screen UI`** that displays the `Live Activities` under a usual notification aspect, it's important to notice that the specific **`Dynamic Island`** is made up of three distinct presentations:

- **[compact](https://developer.apple.com/videos/play/wwdc2023/10184/?time=774)**: when the owner app is the only one to fire an activity,

- **[minimal](https://developer.apple.com/videos/play/wwdc2023/10184/?time=855)**: when more than one app starts a `Live Activity`,

- **[expanded](https://developer.apple.com/videos/play/wwdc2023/10184/?time=905)**: when one of the previous two presentations is touched and held.

</br>

![](../../../../../images/iOSdev/wwdc23-LiveActivities_10.png)
</div>

<div class="tab-pane" id="LiveActivitiesBuildUI2" role="tabpanel">
    
To realize the interface introduced in the previous tab, the `Live Activity` configuration should be put in the **[WidgetBundle](https://developer.apple.com/videos/play/wwdc2023/10184/?time=650)**.

The implementation for the **`Lock`&nbsp;`Screen`&nbsp;`UI`** concerns the [first&nbsp;closure](https://developer.apple.com/videos/play/wwdc2023/10184/?time=710) of the configuration while the second one deals with the **`Dynamic`&nbsp;`Island`** whose size classes are detailed in the `User interface` tab of this section.

![](../../../../../images/iOSdev/wwdc23-LiveActivities_9.png)
</div>
</div>
</br>
</br>
</br>

## Notifications
### [Preparations](https://developer.apple.com/videos/play/wwdc2023/10185/?time=134)
The basic understanding of what the interactions between an app, its content server and the **A**pple **P**ush **N**otification **S**ervice are is of a great help for integrating the push updates.


![](../../../../../images/iOSdev/wwdc23-LiveActivities_29.png)

Configuring `Xcode` and implementing the proper code for handling push tokens are madatory milestones.

<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item" role="presentation">
        <a class="nav-link active"
           data-bs-toggle="tab" 
           href="#LiveActivitiesNotificationsPreparations1"
           id="LiveActivitiesNotificationsPreparations1_tab"
           role="tab" 
           aria-selected="true">Xcode</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#LiveActivitiesNotificationsPreparations2"
           id="LiveActivitiesNotificationsPreparations2_tab"
           role="tab" 
           aria-selected="false">Code&nbsp;writing</a>
    </li>
    </ul>

<div class="tab-content">
<div class="tab-pane show active" id="LiveActivitiesNotificationsPreparations1" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment regarding the xcode configuration" href="https://developer.apple.com/videos/play/wwdc2023/10185/?time=210">🎬</a>

Adding the push notifications service in `Xcode` is necessary for `ActivityKit` to request push tokens.
![](../../../../../images/iOSdev/wwdc23-LiveActivities_30.png)
</div>

<div class="tab-pane" id="LiveActivitiesNotificationsPreparations2" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment regarding the code to be implemented" href="https://developer.apple.com/videos/play/wwdc2023/10185/?time=233">🎬</a>

Few lines of code are required for enabling and handling push updates.
![](../../../../../images/iOSdev/wwdc23-LiveActivities_31.png)
</div>
</div>
</br>
</br>

Due to the **push token uniqueness for each activity**, it's crucial to be aware of the appropriate one when [dealing&nbsp;with&nbsp;the&nbsp;updates](https://developer.apple.com/videos/play/wwdc2023/10185/?time=335).
![](../../../../../images/iOSdev/wwdc23-LiveActivities_32.png)

### [First&nbsp;push&nbsp;update](https://developer.apple.com/videos/play/wwdc2023/10185/?time=364)
Sending a push update relies on an `HTTP` request to `APNs`.
![](../../../../../images/iOSdev/wwdc23-LiveActivities_33.png)
<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item" role="presentation">
        <a class="nav-link active"
           data-bs-toggle="tab" 
           href="#LiveActivitiesFirstPushUpdate1"
           id="LiveActivitiesFirstPushUpdate1_tab"
           role="tab" 
           aria-selected="true">Headers</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-bs-toggle="tab" 
           href="#LiveActivitiesFirstPushUpdate2"
           id="LiveActivitiesFirstPushUpdate2_tab"
           role="tab" 
           aria-selected="false">Payload</a>
    </li>
    </ul>

<div class="tab-content">
<div class="tab-pane show active" id="LiveActivitiesFirstPushUpdate1" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment regarding the headers" href="https://developer.apple.com/videos/play/wwdc2023/10185/?time=376">🎬</a>

Besides the normal `HTTP` headers to be used, the **`APNs` headers are threefold**.

![](../../../../../images/iOSdev/wwdc23-LiveActivities_34.png)
</div>

<div class="tab-pane" id="LiveActivitiesFirstPushUpdate2" role="tabpanel">

<a alt="Click to playback the footage at the appropriate moment regarding the first apns payload" href="https://developer.apple.com/videos/play/wwdc2023/10185/?time=414">🎬</a>

The first `APNs` payload to be sent is made up of **three essential fields**.

![](../../../../../images/iOSdev/wwdc23-LiveActivities_36.png)
</div>
</div>
</br>
</br>

For [testing](https://developer.apple.com/videos/play/wwdc2023/10185/?time=502), using **command lines** may be the quickest way to achieve one's goal through executing a **[curl&nbsp;command](https://developer.apple.com/videos/play/wwdc2023/10185/?time=565)** for sending the `APNs` request.

![](../../../../../images/iOSdev/wwdc23-LiveActivities_37.png)

### [Debugging&nbsp;updates&nbsp;failures](https://developer.apple.com/videos/play/wwdc2023/10185/?time=619)
![](../../../../../images/iOSdev/wwdc23-LiveActivities_35.png)

### [Priorities](https://developer.apple.com/videos/play/wwdc2023/10185/?time=672)
Priorities have different purposes and their characteristics may impact the way they will be introduced in an app.

![](../../../../../images/iOSdev/wwdc23-LiveActivities_38.png)

When [frequent&nbsp;updates](https://developer.apple.com/videos/play/wwdc2023/10185/?time=775) are necessary, useful details have to be taken into account for avoiding the cons of such events.

![](../../../../../images/iOSdev/wwdc23-LiveActivities_39.png)

Even though enabled, the **[user&nbsp;has&nbsp;still&nbsp;control](https://developer.apple.com/videos/play/wwdc2023/10185/?time=810)** over the updates frequency of which the server needs to be aware.

![](../../../../../images/iOSdev/wwdc23-LiveActivities_40.png)
</br>

### [Alerts](https://developer.apple.com/videos/play/wwdc2023/10185/?time=849)
In order to point out some elements or events for capturing the user's attention, the `APNs` payload is added a [complementary&nbsp;object](https://developer.apple.com/videos/play/wwdc2023/10185/?time=861) for which **[localization](https://developer.apple.com/videos/play/wwdc2023/10185/?time=896)** and **[sound&nbsp;customization](https://developer.apple.com/videos/play/wwdc2023/10185/?time=919)** are possible.

![](../../../../../images/iOSdev/wwdc23-LiveActivities_41.png)
</br>

### Miscellaneous
**Ending a `Live Activity`** is triggered thanks to a [new&nbsp;event&nbsp;value](https://developer.apple.com/videos/play/wwdc2023/10185/?time=946) in the `APNs` payload.
![](../../../../../images/iOSdev/wwdc23-LiveActivities_42.png)

**Informing** the user of **[outdated&nbsp;updates](https://developer.apple.com/videos/play/wwdc2023/10185/?time=987)** can be displayed through an [added&nbsp;stale&nbsp;date&nbsp;field](https://developer.apple.com/videos/play/wwdc2023/10185/?time=1004) in the `APNs` payload and a [dedicated&nbsp;property](https://developer.apple.com/videos/play/wwdc2023/10185/?time=996) in the `ActivityConfiguration`.

![](../../../../../images/iOSdev/wwdc23-LiveActivities_43.png)

**Ordering the notification stack** on the `Lock Screen` in case of [multiple&nbsp;`Live Activities`](https://developer.apple.com/videos/play/wwdc2023/10185/?time=1027) is handled by the system with the ones with more important updates set near the top.
Besides, the most important `Live Activity` is also displayed in the `Dynamic Island` by the system that follows the indication of the **relevant-score field** in the `APNs` payload.

![](../../../../../images/iOSdev/wwdc23-LiveActivities_44.png)
</br>