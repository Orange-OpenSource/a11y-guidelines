# Provide accessible audio or video tracks

<script>$(document).ready(function () {
    setBreadcrumb([
        {"label":"WCAG criteria by project phase - Developers", "url": "./incontournables.html#dev"},
        {"label":"Provide accessible audio or video tracks"}
    ]);
});</script>

<span data-menuitem="incontournables"></span>

**Target: **everyone and particularly people with visual disabilities, hearing impairments, cognitive limitations, or difficulties with English.  
**When: **during design and development.

**Description: **

To be accessible, the multimedia contents must:
1. propose a full transcript
2. offer subtitles (video only)
3. offer audio description (video only)
4. choose an accessible media player
5. Prohibit the automatic start of the video when loading the page
6. Prohibit videos that have more than 3 flashes per second
7. Furthermore, for any sound that has been emitted for more than 3 seconds, the user must have the option of either stopping or pausing it or controlling its volume regardless of the overall system volume.

For more info check out [accessibility recommendations for video content, animations and Orange audios](../others/video-audio.html).

**Users’ goal: **

Provide access to visual and hearing information for people who cannot access it: visually impaired, blind, deaf, cognitively deficient, computer without speakers, noisy or bright environment.

**Technical goal: **

Allow audio and video referencing.

**Reference <abbr>WCAG</abbr>&nbsp;:**  
- <a href="https://www.w3.org/TR/WCAG21/#audio-only-and-video-only-prerecorded">1.2.1 Audio-only and Video-only (Prerecorded)</a>
- <a href="https://www.w3.org/TR/WCAG21/#captions-prerecorded">1.2.2 Captions (Prerecorded)</a>
- <a href="https://www.w3.org/TR/WCAG21/#audio-description-or-media-alternative-prerecorded">1.2.3 Audio Description or Media Alternative (Prerecorded)</a>
- <a href="https://www.w3.org/TR/WCAG21/#captions-live">1.2.4 Captions (Live)</a>
- <a href="https://www.w3.org/TR/WCAG21/#audio-description-prerecorded">1.2.5 Audio Description (Prerecorded)</a>
- <a href="https://www.w3.org/TR/WCAG21/#audio-control">1.4.2 Audio Control</a>
- <a href="https://www.w3.org/TR/WCAG21/#pause-stop-hide">2.2.2 Pause, Stop, Hide</a>
- <a href="https://www.w3.org/TR/WCAG21/#three-flashes-or-below-threshold">2.3.1 Three Flashes or Below Threshold</a>

<!--  This file is part of a11y-guidelines | Our vision of mobile & web accessibility guidelines and best practices, with valid/invalid examples.
 Copyright (C) 2016  Orange SA
 See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). -->