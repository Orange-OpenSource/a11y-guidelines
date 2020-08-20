---
title: "Non-textual content"
---

# Non-textual content

<p class="lead">Ensure that an alternative to non-text content is provided to the user</p>



## Define text alternatives

**Target:** people with visual impairments, hearing difficulties or cognitive limitations and search engines.  
**When:** as of design and during development.

**Description:**
Set text alternatives on all non-text informative elements (alternatives to images, icons). Also provide scripts or subtitles for the audio or video content.

**Example**
In the screenshot below, the design phase should provide  text alternatives for each button:
- “menu”,
- “settings”,
- “previous channel”,
- “mute”…

![screenshot of a video player with multiple buttons](../../images/player.png)



## Provide accessible audio or video tracks

**Target:** everyone and particularly people with visual disabilities, hearing impairments, cognitive limitations, or difficulties with English.  
**When:** during design and development.

**Description:**

To be accessible, the multimedia contents must:
1. propose a full transcript
2. offer subtitles (video only)
3. offer audio description (video only)
4. choose an accessible media player
5. Prohibit the automatic start of the video when loading the page
6. Prohibit videos that have more than 3 flashes per second
7. Furthermore, for any sound that has been emitted for more than 3 seconds, the user must have the option of either stopping or pausing it or controlling its volume regardless of the overall system volume.

For more info check out [accessibility recommendations for video content, animations and Orange audios](../../../editorial-content/animated-components/).

**Users’ goal:**  
Provide access to visual and hearing information for people who cannot access it: visually impaired, blind, deaf, cognitively deficient, computer without speakers, noisy or bright environment.

**Technical goal:**  
Allow audio and video referencing.




## Avoid captcha

**Target:** everyone in particular, visually impaired people.  
**When:** during design and development.

**Description**  
Captchas are often the source of difficulties for all users. If the implementation of an anti-spam system can not be avoided, it is advisable to move towards a more flexible solution for the user:
- Double authentication;
- Hidden form field left blank (honeypot technique), not visible to the user;
- Providing phone support to make sure the customer is a real person;
- A check to ensure that the same <abbr> IP </abbr> / User agent combination does not attempt to submit the form more than N times per second.

If no other alternative is possible, it is essential to provide an alternative for captcha only visual or sound by proposing a combination of captcha:
- an audio captcha + visual,
- logical tests (question whose answer is obvious, simple mathematical test ...) + classic visual captcha
- …
