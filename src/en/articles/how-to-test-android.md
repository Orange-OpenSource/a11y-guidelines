---
title: "Testing the accessibility of an iOS application"
abstract: "Description of the main testing tools and methods to quickly assess the accessibility of an iOS application"
titleBeforeTag: true
date: "2024-08-09"
tags:
  - mobile
  - beginner
---

## Presentation and configuration of accessibility options

### Presentation of the main options
- **Talkback**: the screen reader for all Android devices.  It allows you to vocalize all the (useful) information present on the screen. It's an essential tool for blind and visually impaired people.
- **Keyboard navigation**: enable this feature to use your phone with an external keyboard (usually via Bluetooth). It's useful for people who have difficulties using the touch screen due, for example, to motor impairment.
- **Voice Access**: option to control a phone only with the voice. It's essential for people who cannot physically interact with the device or an external contactor.
- **Font size**: increase text size, only useful with applications that manage this option.


### Accessibility shortcuts setting
For greater convenience, it is necessary to install some tools from the Google Play Store:
- Android Accessibility Suite (install TalkBack and others tools)
- Voice Access

For easier use, we recommend adding the essential tools to the accessibility shortcuts:
- Settings > Accessibility > Advanced settings > Accessibility button.
- Choose at least : "TalkcBack" and "Voice Access".

    ![](https://github.com/Orange-OpenSource/a11y-guidelines/assets/105045667/79ec9de6-f042-4ef0-8387-0c709766dcc4)


**Then choose how you want to access these options: either from the navigation bar or from a floating button. We advise to use the navigation bar, which is more discreet**.


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

   ![Shift+TAB pour afficher l'aide, Fn+H pour revenir à l'accueil, Fn+flèche haut pour sélecteur d'app, Fn+C pour centre de contrôle, Fn+N pour centre de notifications](https://github.com/Orange-OpenSource/a11y-guidelines/assets/105045667/83408f02-edab-4456-bd48-9c7e2e778ffc)

4. Keyboard navigation also allows you to check that the navigation order is consistent.


### Voice Access
When "Voice Access" is enabled, you can say commands like:
- "Go home "
- "Tap *item name*"
- "Open *app name*"
- "Turn volume up"

By default, element names are superimposed.  Also, for an application to be controllable in this way, the interactive components must have a simple and consistent accessible name (in particular in the case of a link image or button image without a visible label).

![](https://github.com/Orange-OpenSource/a11y-guidelines/assets/105045667/c94e478c-eaf1-4589-b4e2-369573079df9)

It's also possible to display the number of the elements or even a numbered grid to reach them.


### Font size
1. Increase the text size from the menu Settings > Display > Font size and style

2. Maximum font size corresponds to a 200% zoom.

3. If the application has been designed to support enlargement (Dynamic Type), then the texts will be correctly rendered, readable, and without loss of information (no truncated text or superposition).

   ![](https://github.com/Orange-OpenSource/a11y-guidelines/assets/105045667/9bc33609-bdee-4a34-8a05-c45a89305b69)


### Dark mode
As the dark mode is used more and more, so it's strongly recommended to test your application by activating “dark mode”.

1. Go to Settings > Display (or directly from Control Centre).

   ![](https://github.com/Orange-OpenSource/a11y-guidelines/assets/105045667/0561fddb-e639-4754-a2c2-7bad673e0a79)

2. Check that all texts and components are visible and meet the expected contrast levels.
   
   ![](https://github.com/Orange-OpenSource/a11y-guidelines/assets/105045667/539031f1-910e-4762-801e-8ca34c8fdf8d)
