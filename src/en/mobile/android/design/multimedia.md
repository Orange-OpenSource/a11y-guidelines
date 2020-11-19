---
title: "Multimedia"
---

# Multimedia

## Control multimedia content

**Target&nbsp;:** everyone and in particular the visually and cognitively impaired.  
**When&nbsp;:** during design and development.

**Description&nbsp;:** 

On mobile devices, screen readers try to transmit context changes to the user as much as possible. In some cases, this can result in permanent, and therefore inaudible vocalizations, or prevent any action by the user.  
The user must remain in control of the content at all times. This is especially true with interactive content. For example, a video should not be launched directly in full screen, or should not be launched directly without any prior action from the user, a carousel should not scroll automatically, etc...

In addition, multimedia content must be able to be controlled at any time by the user, whether to mute or pause the sound.

**To be verified&nbsp;:**

- Multimedia content can be controlled by the user (presence of a pause button, accessible button to exit full-screen mode, etc.).
- For any sound emitted for more than 3 seconds, the user must have the possibility to either stop or pause it, or to control its volume independently of the general volume of the system.
- There is no automatic start of the video when the page loads.

**Reference <abbr>WCAG</abbr>&nbsp;:**  
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#audio-control">1.4.2 Audio Control</a>
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#pause-stop-hide">2.2.2 Pause, Stop, Hide</a>

## Transcribe audio or video content

**Target&nbsp;:** everyone, and in particular people with visual, cognitive and hearing impairments
**When&nbsp;:** during design and development.

**Description&nbsp;:** 

It is essential to provide an access to visual and auditory information for people who cannot benefit from it: visually impaired, blind, deaf, cognitively impaired, computer without speakers, in bright or noisy environments.

**To be verified&nbsp;:**

- Full text transcription is available for pre-recorded audio content.
- A full text transcription or audio description is provided for pre-recorded video content.
- Subtitles are available for video content, pre-recorded or not.


**Reference <abbr>WCAG</abbr>&nbsp;:**  
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#audio-only-and-video-only-prerecorded">1.2.1 Audio-only and Video-only (Prerecorded)</a>
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#captions-prerecorded">1.2.2 Captions (Prerecorded)</a>
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#audio-description-or-media-alternative-prerecorded">1.2.3 Audio Description or Media Alternative (Prerecorded)</a>
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#captions-live">1.2.4 Captions (Live)</a>
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#audio-description-prerecorded">1.2.5 Audio Description (Prerecorded)</a>


## Avoid epileptic risk contents

**Target&nbsp;:** everyone, and especially people with epileptic seizures
**When&nbsp;:** during design and development.

**Description&nbsp;:** 
In order to prevent the content of the application from causing epileptic seizures, it is essential to avoid flashes of more than 3 flashes per second.

**To be verified&nbsp;:**
- No more than 3 flashes per second.


**Reference <abbr>WCAG</abbr>&nbsp;:**  
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#three-flashes-or-below-threshold">2.3.1 Three Flashes or Below Threshold</a>
