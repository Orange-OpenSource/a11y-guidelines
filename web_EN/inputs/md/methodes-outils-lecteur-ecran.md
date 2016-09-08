# Navigating with a screen reader

<script>$(document).ready(function () {
    setBreadcrumb([
        {"label":"Test tools", "url": "./methodes-outils.html"},
        {"label":"Navigating with a screen reader"}]);
});</script>

<span data-menuitem="methodes-outils"></span>

A screen reader is a voice synthesis software used by the visually impaired and blind. It allows the user to interact with the computer and listen to what is displayed as text (usually) on the screen.
There are several screen readers, the most prevalent are:
- [NVDA](http://nvda-fr.org/): free, available for Windows.
- [Jaws](http://www.freedomscientific.com/Downloads/JAWS): commercial, available for Windows. In trial, you can only use it 40 min, but if you restart your computer you can use it again.
- [VoiceOver](http://www.apple.com/fr/accessibility/osx/voiceover/): free, available for Mac. It is directly integrated into the MacOS system.

## Getting started with NVDA

NVDA is a free screen reader available for Windows.

### Installation

Download the NVDA installer on the [official website](http://nvda-fr.org/).

The default voice is not very good but it is very reactive. It is not mandatory, but you can download a better voice named [Hortense](http://www.nvda-fr.org/voix.php). Then just go to preferences to change NVDA voice settings.

### Configuration

At first startup, NVDA is configured to vocalize whatever the mouse is hover. This mode is used by visually impaired people who have difficulties reading the text displayed on the screen, for example. It is recommended to disable this option if you use NVDA to test accessibility on your pages.
To disable this navigation mode, right click on the NVDA icon located in the notification area. Then go to *Preferences >> Mouse settings* and uncheck "Enable mouse tracking".

Finally, it is advisable to change the default playback mode. On a webpage use the following keyboard shortcut `INS + v` to disable the "screen layout is preserved" and then save this configuration as default using the shortcut `INS + Ctrl + c`.

### Navigating web pages

The main useful shortcuts to test navigation in a web page using NVDA:
- `Up` and `down` keys to go to the next or the prior line.
- `Left` and `right` keys to move forward or backward one character
- `Ctrl + Home` to move to the top of the page.
- `Ctrl + End` to move to the bottom of the page.
- `INS + F7` to display the heading list and the link list.
- `Ctrl` to mute NVDA.
- `INS + T` to read the page title.
- `H` and `shift + H` to jump to the next title or the previous title (`H1` to` H6` title tags).
- `B` and `shift + B` to move through buttons.
- `C` and `shift + C` to move through drop down lists (Combobox).
- `D` and `shift + D` to move through ARIA landmarks.
- `E` and `shift + E` to move through text fields.
- `F` and `shift + F` to move through forms.
- `G` and `shift + G` to move through images (Graphics).
- `I` and `shift + I` to move through HTML list items.
- `K` and `shift + K` to move through links.
- `L` and `shift + L` to move through HTML lists.
- `M` and `shift + M` to move through frames and iframes.
- `O` and `shift + O` to move through embedded objects (flash). Press INS + Space to start interaction. Esc to finish interaction.
- `Q` and `shift + Q` to move through quotes (blockquote).
- `R` and `shift + R` to move through radio buttons.
- `T` and `shift + T` to move through tables.
- `X` and `shift + X` to move through checkboxes.
- `Spacebar` to check or uncheck a checkbox.
- `INS + shift + S` allows to pause NVDA only in the current application.
- `INS + Q` to exit NVDA.

Also note that NVDA has a speech viewer (*tools >> speech viewer*), it displays everything that is vocalized.

## Getting Started with Jaws

Jaws is a commercial and very famous screen reader, available for Windows. It is used primarily with Internet Explorer. In trial, you can only use it 40 min, but if you restart your computer you can use it again.

### Installation

You can download Jaws directly from [the Freedom Scientific site](http://www.freedomscientific.com/Downloads/JAWS).

### Navigating web pages

The most useful shortcuts to test navigation in a Web page with JAWS:
- `Up` and `down` keys to go to the next or the prior line.
- `INS + T` to read the page title.
- `INS + F5` to display the form fields list.
- `INS + F6` to display header list.
- `INS + F7` to display link list.
- `Spacebar` to check or uncheck a checkbox.
- `Ctrl` to mute Jaws.

## Getting Started with VoiceOver

VoiceOver screen reader is only available on Mac. It requires no installation since it is integrated directly into the system.
To can activate VoiceOver from System Preferences >> accessibility. Or directly using the shortcut Command + `F5`.

### Navigating web pages

When launching VoiceOver, it displays an interactive guide to learn the key shortcuts. You should have a look at it.
But here are the main shortcuts:
- `Ctrl + Option + Right` and `Ctrl + Option + Left` to go to the next or the prior line.
- `Ctrl + Option + U` to access the header, link, form field lists... (use the left and right arrows to navigate between lists).
- `Ctrl` to mute VoiceOver.
- `Ctrl + Option`
<!--  This file is part of a11y-guidelines | Our vision of mobile & web accessibility guidelines and best practices, with valid/invalid examples.
 Copyright (C) 2016  Orange SA
 See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). -->