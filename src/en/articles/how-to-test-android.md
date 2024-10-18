---
title: "Testing the accessibility of an Android application"
abstract: "Description of the main testing tools and methods to quickly assess the accessibility of an Android application"
titleBeforeTag: true
date: "2024-10-15"
tags:
  - mobile
  - beginner
---

## Presentation and configuration of accessibility options

### Presentation of the main options
- **Talkback**: the screen reader for all Android devices. It allows you to vocalize all the (useful) information present on the screen. It's an essential tool for blind and visually impaired people.
- **Keyboard navigation**: enable this feature to use your phone with an external keyboard (usually via Bluetooth). It's useful for people who have difficulties using the touch screen due, for example, to motor impairment.
- **Voice Access**: option to control a phone only with the voice. It's essential for people who cannot physically interact with the device or an external contactor.
- **Font size**: increase text size, only useful with applications that manage this option.


### Accessibility shortcuts setting
For greater convenience, it is necessary to install some tools from the Google Play Store:
- Android Accessibility Suite (install TalkBack and others tools)
- Voice Access

For easier use, we recommend adding the essential tools to the accessibility shortcuts:
- Settings > Accessibility > Advanced settings > Accessibility button > Select Actions
- Choose at least : "TalkBack" and "Voice Access".

**Then choose how you want to access these options: either from the navigation bar or from a floating button. We advise to use the navigation bar, which is more discreet**.

  ![](https://github.com/user-attachments/assets/04773a89-c143-402e-9bf5-d85fd55137b9)




## Getting started with accessibility options

### TalkBack
Navigating with the screen reader is not always easy when you are starting, but a few simple basic gestures allow you to navigate within an application.

A detailed description of these actions is available on the following page: https://a11y-guidelines.orange.com/en/mobile/android/talkback/

By using TalkBack, you can verify that all the essential information for understanding and navigation is rendered by the screen reader, including:
 - interactive elements (buttons, links, checkboxes, etc.),
 - the status of the elements (checked or not, selected or not, unfolded or not, etc.),
 - the page titles must be read to allow users to be informed of a screen change and understand the context,
 - content changes or temporary messages must also be read (alerts, errors, messages, etc.),
 - the consistency between VoiceOver reading order and the visual order of information presentation.


### Keyboard navigation
It is possible to use your phone only with an external keyboard.
1. Connect a keyboard to the phone.
2. Now, all features available by touch gestures should also be operable with the keyboard.
Navigating is similar to a desktop keyboard, ```TAB``` key to move forward, ```SHIFT+TAB``` to go back, ```SPACE``` or ```ENTER``` to activate an element. 

Combinations are also specific to the Android mobile environment:

   ![Shortcuts examples: CMD+ENTER for Home, CMD+DEL for Back, ALT+TAB for Recents, ALT+F4 to close the current application, CMD+/ to access keyboard shortcuts.](https://github.com/user-attachments/assets/99bccc16-b3fb-4af8-b8c2-6e712b4367eb)



3. Keyboard navigation also allows you to check that the navigation order is consistent.


### Voice Access
When "Voice Access" is enabled, you can say commands like:
- "Go home "
- "Tap *item name*"
- "Open *app name*"
- "Turn volume up"

Once Voice Access has been activated, say "show labels", which will display the accessible name assigned to components without a visible label. For an application to be controllable in this way, the interactive components must have a simple and consistent accessible name (in particular in the case of a link image or button image without a visible label).

![](https://github.com/user-attachments/assets/6e28c394-bcdb-4937-9f37-083327e0208a)


### Font size
1. Increase the text size from the menu Settings > Display > Font size and style

   ![](https://github.com/user-attachments/assets/759344d4-c227-4401-8dd9-bb75e756aa2d)


2. Maximum font size corresponds to a 200% zoom.

3. If the application has been designed to support enlargement (Dynamic Type), then the texts will be correctly rendered, readable, and without loss of information (no truncated text or superposition).

   ![](https://github.com/user-attachments/assets/aaadf571-bb66-4455-9525-bd21df31bacc)  ![](https://github.com/user-attachments/assets/bac1f246-faeb-4cfc-b5df-4084c530d4e2)


### Dark mode
As the dark mode is used more and more, so it's strongly recommended to test your application by activating 'dark mode'.

1. Go to Settings > Display (or directly from Control Centre).

  ![](https://github.com/user-attachments/assets/45cea752-8ea2-4be5-ad36-d22f587fb204)

2. Check that all texts and components are visible and meet the expected contrast levels.
    
  ![](https://github.com/user-attachments/assets/0b910a56-9461-4512-8d42-9b19336b3757)

