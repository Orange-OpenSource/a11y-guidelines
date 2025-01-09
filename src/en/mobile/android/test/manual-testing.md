---
title: "Android - Manual tests: use cases"
abstract: "Manual tests by reproducing the situation experienced by your users with Android"
---

# Android - Manual tests: use cases

Manual tests are those that you will perform yourself, by reproducing the situation experienced by your users, and therefore using their interaction tools. It is even better to have the application tested by real users with disabilities. Several tools must be used, to take into account as many possible situations as possible:


## Screen reader TalkBack

The screen reader is a tool for the blind and visually impaired people. It has two functions: vocalization and on-screen navigation. All significant elements must be **vocalized** in **logical order**.

For Talkback activation and use, you can get more details in the [section about it](../../talkback/).

The different types of Talkback navigation:

- **Reading by scanning with your finger** : by sliding your finger slowly on the screen, Talkback announces the elements as you pass your finger on.

<img src="../../../images/gesture1.png" alt="Representation of finger sliding action on a phone screen " width="80">   



- **Linear reading** : You can explore the screen, item by item, by swiping your finger left or right to navigate between items, in order. It is also possible to browse the navigation settings by swiping up or down the screen until you get the desired setting. The swipe to the right or to the left will then be done using the chosen parameter; The various existing navigation parameters are:

	- **Headings**: navigate by headings
	- **Links**: navigate by links (email, phone number, website or other links on the screen)
	- **Controls**: navigate by checkboxes, switches, text fields, buttons, radio buttons, sliders.
	- **Default**: explore every element on the page in logical order.
  
  <dl>
    <dt>Double click with one finger</dt>
    <dd>
      <img src="../../../images/gesture2.png" alt="" width="80">
      Activate the last vocalized element
    </dd>
  <dt>Swipe up or down with two fingers</dt>
    <dd>
      <img src="../../../images/gesture3_1.png" alt="" width="80">
      Vertical scroll in the page
    </dd>
  <dt>Swipe left or right with two fingers</dt>
    <dd>
      <img src="../../../images/gesture4_2.png" alt="" width="80">
      Horizontal scroll in the page
    </dd>
  <dt>Swipe right with one finger</dt>
    <dd>
      <img src="../../../images/gesture6.png" alt="" width="80">
      Moves to the next element
    </dd>
  <dt>Swipe left with one finger</dt>
    <dd>
      <img src="../../../images/gesture5.png" alt="" width="80">
	Moves to the previous element
    </dd>
  <dt>Swipe up or down with one finger</dt>
    <dd>
      <img src="../../../images/gesture8.png" alt="" width="80">
      Change the navigation setting applied
    </dd>
  </dl>


- **Search your screen** : it is possible to navigate using screen search; to do this, swipe left then down, enter the search term and choose a match from the list provided

<img src="../../../images/search_talkback.jpg" alt="screenshot showing the Search your screen navigation on Talkback" width="50%"> 


- **Read continuously** : To use `read continuously`, open general contextual menu by swiping down then right, and choose the option **read from top* or **read from next item**. Then, double tap to select the option. Continuous reading will start and can be stopped by tapping on the screen.


### Procedure

Use the application on the differents use cases and check that all the information is vocalized in a logical and understandable order as well as:

- Are all the significant elements accessible?

- Is all the information vocalized in a logical and understandable order?

- Are the interactive elements vocalized with the associated action? (button, checkbox ... Double tap to activate)

- Are the states of the elements specified? (disabled, checked)

- Are temporary messages and alerts vocalized?

- Are the transitions between activities vocalized?

- Are error messages and dynamic content vocalized?

- Are the horizontal scrolls vocalized?

- Are visible items the only items to be vocalized (no ghost items vocalized)?

- Are the titles of the activities vocalized?

- Is the workflow easy?

- Is the vocalization coherent, succinct, and simple?

- Are decorative images well ignored? And on the contrary, are the meaningful images vocalized?

Ideally, the test should be done without looking at the screen, or by activating the black screen (**Darken the screen**).



## Focus navigation (with keyboard)

Navigation in an application or a web page must be possible using an external keyboard (connected to the smartphone by Bluetooth or USB), in order to reproduce the case of people who cannot use the touch screen, such as those using a joystick (on a wheelchair for example), or those with Parkinson's disease. It is important to check its operation because some developments can cause difficulties to navigate correctly in the page.

To test keyboard navigation, you must connect a computer keyboard to the smartphone, either with an adapter (USB - USB C for example), or, if the keyboard is bluetooth, by pairing the keypad and the phone. The bluetooth keyboard has the advantage of facilitating debugging.

### Procedure

Navigate the application using the keyboard and check that:
- all functionalities are accessible.
- the focus remains sufficiently visible on each element receiving this focus (activable elements, buttons, clickable elements, check boxes, etc.).


### List of main keyboard shortcuts

- **TAB** key to advance the focus.
- **SHIFT + TAB** keys to move the focus back.
- **Enter** key to activate the focused element (link, button, menu ...).
- **Space bar** to check/uncheck a checkbox.
- **Directional arrows** to modify the selection of the radio buttons, to move in a drop-down list, or to scroll through the **scrollbar**) when they are present.

These are the same keys used to test the accessibility of a website. But the use of the **Tab** in relation to the **arrows** as well as the use of the **space bar** in relation to the **enter** key are less codified: the test is considered successful when at least one of the two options allows the action to be taken.

Remark: the inability to exit a feature or the application is a blocking issue.


## <span lang="en">Switch Access</span>

**Switch Access** is an application for people with motor disorders. It allows you to control the phone by programming keys. It cannot replace the keyboard tests, but remains interesting in the case of the two switch method.

To activate it, proceed as follows:

- Go to phone settings
- Navigate in accessibility menu (then Services installed with the Samsung overlay), then select Switch Access, then Settings
- Check that the automatic search is disabled
- Use the **Volume Up** button as corresponding to the action **Go to the next option**
- Use the **Volume Down** button as corresponding to the **Select** action
- Return to the main screen from Switch Access and enable or disable the Switch Access accessibility option when necessary

### Procedure

Navigate in the application using the **Next** button (volume up).

Then check that:
- Can the workflow be covered completely and easily, in a logical order?
- Can the inputs be edited easily?
- Are the highlighted elements only those on which we can perform an action?


### Show all interactive elements

To highlight all the interactive elements of a screen, and thus do a quick check, it is possible to use the **Group Selection** option of the Switch Access.

To do this, select the **Group Selection** method as **Scanning Method** in the settings of Switch Access, and then assign a key for scanning.

Once inside your application, you just have to press the **Select** action (low volume in our configuration) to display all the interactive elements and thus check that:
- Are all interactive elements highlighted correctly?
- Are only interactive elements highlighted?


## Magnification

Android offers several enlargement options:
- Font size
- Display size
- Magnification

Read the instructions when you activate the tools.

### Procedure:

- Set **Font size** and **Display size** to the maximum. Navigate in the application and note the texts that are no longer readable because they have disappeared or they overlap.
- Enable **Magnification** option from accessibility settings. Go back to your application and tap the screen 3 times (if you have kept this shortcut) to start the display with magnification. Check that the screens are readable in this mode. Pinch with 2 fingers to adjust zoom and drag 2 fingers to move around the screen. All information on the screen should be readable in zoom mode.


## Orientation

It is necessary to check the orientation of your application, as it should work in both landscape and portrait mode. Manual tests must be performed in both modes, since constraining the user to a single mode poses accessibility problems.


## Accessibility timeouts

This tool is only available from Android Q.

On some applications, the UI may change after a delay (for example the disappearance of control buttons on a video player after a few seconds). This delay can be adapted in the settings to suit everyone's needs , some users needing more time to successfully "see" the controls and interact with them. You can then use this AccessibilityManager function which allows to obtain the recommended timeout for the user, according to these accessibility preferences: `public int getRecommendedTimeoutMillis(int originalTimeout,              int uiContentFlags) `

To test whether this need for accessibility is taken into account by the application, proceed as follows:

- Go to the phone settings
- Navigate in accessibility menu, then select **Time to take action**
- Choose a timeout from the options offered
- Check that the application adapts well to the delay indicated above, for UI changes potentially affected by this delay.

## Voice Access

[Voice Access](https://play.google.com/store/apps/details?id=com.google.android.apps.accessibility.voiceaccess) is an application integrated into [Android Accessibility Suite] (https://play.google.com/store/apps/details?id=com.google.android.marvin.talkback), intended for people with motor disorders. It allows you to control the application by voice instead of the touch screen.

Among the possible commands:
- Open "app"
- Go back
- Go home
- Show notifications
- Scroll up
- Scroll right
- Scroll down
- Swipe forwards
- Etc ..

Once Voice Access is enabled, numbers appear next to each item you can interact with. If you wish to interact with a **Save** button whose number is 6, you can say the following commands:

- 6
- Save
- Click 6
- Click save

It is necessary to test that there are not several identical labels for interactive elements within the same screen. Although the user can still use the number for voice control, this limits the ability to use their label. It is also useful to test that you can open the application by name, with the command **Open "application"**.


**Voice Access use example:**   

Screen example displaying a floating button which allows you to start Voice Access.

<img src="../../../images/voice_access_floating.jpg" alt="Orange TV application screenshot, with the Voice Access floating button" width="50%"> 

Screen example with Voice Access enabled.

<img src="../../../images/voice_access_actif.jpg" alt="Orange TV application screenshot with Voice Access enabled, each interactive element being associated with a number" width="50%"> 



## Select to Speak

Select to Speak is a tool from Android Accessibility Suite, that makes it possible to read selected elements of the screen. 

When a single item is selected, the tool vocalizes the item. When multiple items are selected, it implements a logical reading order like Talkback but it does not implement the actions or state of the items.

It is useful for the visually impaired, when the screen is not readable, for learning to read (it functions like karaoke) or for learning a foreign language.

It can be used for demonstration purposes but is redundant with Talkback for accessibility testing without being able to replace it.

## Simulate color space

It is possible to simulate different vision problems related to color perception (Monochromacy, Deuteranomaly , Protanomly & Tritanomaly) directly on your Android phone using an accessibility parameter. This is offered in the developer options, which must first be unlocked.

By applying this setting, it will be easier for you to detect problems related to a source of information provided only by the color.

<span class="licence" lang="en">These images are licensed under a Creative Commons Share Alike 2.0 license. Photo credit: <a href="http://www.flickr.com/people/27512715@N02/" hreflang="en">openexhibits</a></span>
