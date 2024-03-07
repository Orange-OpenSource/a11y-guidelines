---
title: "Testing the accessibility of an iOS application"
abstract: "Description of the main testing tools and methods to quickly assess the accessibility of an iOS application"
titleBeforeTag: true
date: "2024-03-08"
tags:
  - mobile
  - beginner
---

## Presentation and configuration of accessibility options

### Presentation of the main options
- **Voice Over** : the screen reader for all Apple devices (iPhone, iPad, MacOS).  It allows you to vocalize all the (useful) information present on the screen. Essential tool for blind and visually impaired people.
- **Switch control** : this option allows controlling the phone with an external contactor, head movements or even sounds.  This tool is mainly used by people with motor disabilities who can't perform the touch screen gestures.
- **Keyboard navigation** : enable this feature to use your phone from an external keyboard (usually via Bluetooth). Useful for people who have difficulties using the touch screen.
- **Voice control** : option to control a phone only with the voice. Essential for people who cannot physically interact with the device or with an external contactor.
- **Larger Text size** : increase text size, only works for applications that manage this option.


### Accessibility shortcuts setting
For greater convenience, it is recommended to add the essential tools in the accessibility shortcuts
- Settings > Accessibility > Accessibility Shortcut.
- Choose : "Switch Control", "VoiceOver“, "Voice Control" and "Full Keyboard Access".
  
![](https://github.com/Orange-OpenSource/a11y-guidelines/assets/105045667/74baf176-593e-499e-a0a8-8f1267216b3d)

**The accessibility shortcut is activated by pressing the side button on the iPhone 3 times.**

You can also add accessibility shortcut to the control center (Settings > Control Centre) to access it without having to operate with the side button.

![](https://github.com/Orange-OpenSource/a11y-guidelines/assets/105045667/423eeffd-e3db-40c4-94ff-041da2ebe565)


### Switch Control setting
Go to Settings > Accessibility > Switch Control > Switches
Without external accessory, you can simply configure :
- mode: "Full Screen"
- type: “Screen” 
- action: “Select Item”
 
![](https://github.com/Orange-OpenSource/a11y-guidelines/assets/105045667/0e85631b-a638-4b6e-af34-a3abed2e439a)

In this way, a succession of taps anywhere on the screen will allow you to control the progress of the focus and the associated actions (we will detail the use further down in the article).


### "Text Size" in Control centre
Still to facilitate access to accessibility features, it is possible to add larget text size adjustment.
Go to Settings > Control Centre and select "Text Size".
You will then be able to easily access the option.

![](https://github.com/Orange-OpenSource/a11y-guidelines/assets/105045667/20e7a11e-d3f8-481d-a021-ec4f7ab4632a)


## Getting started with accessibility options

### VoiceOver
Navigating with the screen reader is not always easy when you are starting out, but a few simple basic gestures allow you to navigate within an application
The detailed description of these actions is available on the following page: https://a11y-guidelines.orange.com/en/mobile/ios/voiceover/

By using VoiceOver, you can verify that all the essential information for understanding and navigation is rendered by the screen reader, including:
 - interactive elements (buttons, links, check boxes, etc.),
 - the state of the elements (checked or not, selected or not, unfolded or not...),
 - the page titles must be read to allow users being informed of a screen change and understanding the context,
 - content changes or temporary messages must also be read (alerts, errors, messages, etc.),
 - the consistency of reading order with the presentation of the information.

 
### Switch Control
Using the Switch Control allows you to mainly check two things: the focus order and the accessibility of interactive elements.
1. Enable Switch Control. 
2. The focus is then displayed and begins to move from one container to another (for example: the header, the main view, the navigation bar...).
3. To make the focus move inside a container, simply tap once when the focus comes to that container.
4. Then an additional tap will bring up the possible interaction options with each element having the focus (tap, scroll up/down, drag, etc.)

![](https://github.com/Orange-OpenSource/a11y-guidelines/assets/105045667/6fde5e3b-5084-4199-8e09-0925d3a763cf)


### Keyboard navigation
It is possible to use your phone only with an external keyboard.
1. Connect a keyboard to the phone.
2. Enable "Full Keyboard Access" option.

![](https://github.com/Orange-OpenSource/a11y-guidelines/assets/105045667/dd8e2a5a-607c-4f77-921c-be43dfdf5e2e)

3. Now, all features available by touch gestures should also be available with the keyboard.
Navigation is done in the same way as for a desktop keyboard, ``TAB``` key to move forward, ```SHIFT+TAB``` to go back, ```SPACE``` to activate an element.

Combinations are also specific to the iOS mobile environment:

![](https://github.com/Orange-OpenSource/a11y-guidelines/assets/105045667/f3e1bb95-27dc-47ce-9b16-fa89a91079e8)

4. Keyboard navigation also allows you to check that the navigation order is respected.
5. If the focus is not visible enough, it is possible to increase its contrast in the option settings

![](https://github.com/Orange-OpenSource/a11y-guidelines/assets/105045667/d1e966c5-bc5b-447f-a8db-b0fea6140fec)


### Voice control
When "Voice Control" is enabled, you can speak commands like:
- "Return to home screen"
- "Touch *item name*"
- "Open *app name*"
- "Turn up the volume"

By default, element names are superimposed.  Also, for an application to be controllable in this way, the interactive components must have a simple and consistent accessible name (in particular in the case of a link image or button image without visible label).

![](https://github.com/Orange-OpenSource/a11y-guidelines/assets/105045667/ec76969b-d442-484e-8a80-c36376dcdc92)

It's also possible to display the number of the elements or even a numbered grid to reach them.


### Larger text
1. Increase the text size using the shortcut configured above

![](https://github.com/Orange-OpenSource/a11y-guidelines/assets/105045667/20e7a11e-d3f8-481d-a021-ec4f7ab4632a)

2. It is possible to increase text up to 310%, but accessibility recommendations require a correct display up to 235%.
3. If the application has been designed to support enlargement (Dynamic Type), then the texts will be correctly rendered, readable and without loss of information (no truncated text or superposition)

![](https://github.com/Orange-OpenSource/a11y-guidelines/assets/105045667/f3bd6e96-b44b-44a8-b2f2-cd5136c82993)


### Dark mode
Dark mode is used more and more, so it's strongly recommended to test your application by activating “dark mode”

1. Go to Settings > Display & Brightness (or directly from Control Centre)

   ![](https://github.com/Orange-OpenSource/a11y-guidelines/assets/105045667/3f36c173-6744-48ae-98b8-54634993165e)

2. Check that all texts and components are clearly visible and meet the expected contrast levels.
   
   ![](https://github.com/Orange-OpenSource/a11y-guidelines/assets/105045667/95b1a4cf-7821-44fe-8f1b-8114ba2094fd)
