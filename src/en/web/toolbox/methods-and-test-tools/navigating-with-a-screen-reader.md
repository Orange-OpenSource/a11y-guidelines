---
title: "Navigating with a screen reader"
---

# Navigating with a screen reader

A screen reader is a voice synthesis software used by the visually impaired and the blind. It allows the user to interact with the computer and listen to what is displayed as text (usually) on the screen.
There are several screen readers, the most prevalent are:
- [NVDA](http://nvda-fr.org/): free, available for Windows.
- [Jaws](http://www.freedomscientific.com/Downloads/JAWS): commercial, available for Windows. In trial mode, you can only use it for 40 minutes, but if you restart your computer you can use it again.
- [VoiceOver](http://www.apple.com/fr/accessibility/osx/voiceover/): free, available for Mac. It is directly integrated into the MacOS system.

## Getting started with NVDA

NVDA is a free screen reader available for Windows.

### Installation

Download the NVDA installer on the [official website](https://www.nvaccess.org/).

The default voice is not very good but it is very reactive. It is not mandatory, but you can [download extra voices](https://github.com/nvaccess/nvda/wiki/ExtraVoices). Then just go to preferences to change NVDA voice settings.

### Configuration

At first startup, NVDA is configured to vocalize whatever the mouse pointer is over. This mode is used by visually-impaired people who have difficulties reading the text displayed on the screen, for example. It is recommended to disable this option if you use NVDA to test accessibility on your pages.
To disable this navigation mode, right-click on the NVDA icon located in the notification area. Then go to *Preferences&nbsp;&gt; Mouse settings* and uncheck “Enable mouse tracking”.

Finally, it is advisable to change the default playback mode. On a webpage use the following keyboard shortcut <kbd>Ins+v</kbd> to disable the “screen layout is preserved” option and then save this configuration as default using the shortcut <kbd>Ins+Ctrl+c</kbd>.

### Navigating web pages

The main useful shortcuts to test navigation in a web page using NVDA are:
- <kbd>Ctrl+Alt+N</kbd> to turn NVDA on.
- <kbd>Ins+Q</kbd> to turn NVDA off.
- <kbd>Up</kbd> and <kbd>down</kbd> keys to go to the next or the prior line.
- <kbd>Left</kbd> and <kbd>right</kbd> keys to move forward or backward one character
- <kbd>Ctrl+Home</kbd> to move to the top of the page.
- <kbd>Ctrl+End</kbd> to move to the bottom of the page.
- <kbd>Ins+F7</kbd> to display the heading list and the link list.
- <kbd>Ctrl</kbd> to mute NVDA.
- <kbd>Ins+T</kbd> to read the page title.
- <kbd>H</kbd> and <kbd>shift+H</kbd> to jump to the next title or the previous title (`H1` to `H6` title tags).
- <kbd>B</kbd> and <kbd>shift+B</kbd> to move through buttons.
- <kbd>C</kbd> and <kbd>shift+C</kbd> to move through drop down lists (Combobox).
- <kbd>D</kbd> and <kbd>shift+D</kbd> to move through ARIA landmarks.
- <kbd>E</kbd> and <kbd>shift+E</kbd> to move through text fields.
- <kbd>F</kbd> and <kbd>shift+F</kbd> to move through forms.
- <kbd>G</kbd> and <kbd>shift+G</kbd> to move through images (Graphics).
- <kbd>I</kbd> and <kbd>shift+I</kbd> to move through HTML list items.
- <kbd>K</kbd> and <kbd>shift+K</kbd> to move through links.
- <kbd>L</kbd> and <kbd>shift+L</kbd> to move through HTML lists.
- <kbd>M</kbd> and <kbd>shift+M</kbd> to move through frames and iframes.
- <kbd>O</kbd> and <kbd>shift+O</kbd> to move through embedded objects (flash). Press <kbd>Ins+Space</kbd> to start interaction. <kbd>Esc</kbd> to finish interaction.
- <kbd>Q</kbd> and <kbd>shift+Q</kbd> to move through quotes (blockquote).
- <kbd>R</kbd> and <kbd>shift+R</kbd> to move through radio buttons.
- <kbd>T</kbd> and <kbd>shift+T</kbd> to move through tables.
- <kbd>X</kbd> and <kbd>shift+X</kbd> to move through checkboxes.
- <kbd>Spacebar</kbd> to check or uncheck a checkbox.
- <kbd>Ins+shift+S</kbd> allows to pause NVDA only in the current application.

Also note that NVDA has a speech viewer (*Tools&nbsp;&gt; Speech viewer*), it displays everything that is vocalized.

## Getting Started with Jaws

Jaws is a commercial and very famous screen reader, available for Windows. It is used primarily with Internet Explorer. In trial, you can only use it 40 min, but if you restart your computer you can use it again.

### Installation

You can download Jaws directly from [the Freedom Scientific site](http://www.freedomscientific.com/Downloads/JAWS).

### Navigating web pages

The most useful shortcuts to test navigation in a Web page with JAWS:
- <kbd>Up</kbd> and <kbd>down</kbd> keys to go to the next or the prior line.
- <kbd>Ins+T</kbd> to read the page title.
- <kbd>Ins+F5</kbd> to display the form fields list.
- <kbd>Ins+F6</kbd> to display header list.
- <kbd>Ins+F7</kbd> to display link list.
- <kbd>Spacebar</kbd> to check or uncheck a checkbox.
- <kbd>Ctrl</kbd> to mute Jaws.

## Getting Started with VoiceOver

VoiceOver screen reader is only available on Mac. It requires no installation since it is integrated directly into the system.
You can activate VoiceOver from *System Preferences&nbsp;&gt; Accessibility*. Or directly using the shortcut <kbd>Command+F5</kbd>.

### Navigating web pages

When launching VoiceOver, it displays an interactive guide to learn the key shortcuts. You should have a look at it.
But here are the main shortcuts:
- <kbd>Ctrl+Option+Right</kbd> and <kbd>Ctrl+Option+Left</kbd> to go to the next or the prior line.
- <kbd>Ctrl+Option+U</kbd> to access the header, link, form field lists... (use the left and right arrows to navigate between lists).
- <kbd>Ctrl</kbd> to mute VoiceOver.
- <kbd>Ctrl+Option</kbd> [Uh-oh, something is missing here, we’ll come back to it, sorry.]
