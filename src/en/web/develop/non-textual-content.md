---
title: "Non-textual content"
---

# Non-textual content

<p class="lead">Ensure that an alternative to non-text content is provided to the user</p>



## Set a text alternatives for images and frames

**Target:** everyone and especially people with visual impairments and cognitive limitations.  
**When:** from design and during development.

**Description:**

First of all, do not use an image-text when it is not necessary or when the image can be replaced by formatted text in <abbr>CSS</abbr>.

All `img` tags should have an `alt` attribute with a relevant description: 
- For clickable images: specify the function&nbsp;/ link target in the `alt` attribute,
- For images carrying information: add an `alt` attribute describing the information contained in the image
- For images containing text: add an `alt` attribute containing at least the text from the image,
- For decorative images: add an empty `alt` attribute,
- For images having `alt` attributes that won’t be convenient when the text is too long (diagrams, graphs…), add a describing text close to the image, or add a link pointing to an <abbr>HTML</abbr> page with the description.

Add a `title` attribute to describe all `frame` or `iframe` content or function. If a `frame` or `iframe` doesn't convey information for the user (only technical), render it invisible, see example: [Hidden accessible frames technics](../../components-examples/technical-iframe/)

**Checklist:**

- Ensure that the images cannot be replaced by formatted text
- Each `img` tag must have an `alt` attribute.
- For images not carrying information, set them as background images preferably (<abbr>CSS</abbr>). 
- For graphics, you can add a link under them to access the data table (revealing it in the same page or in a different page).
- A properly masked non-informative `frame` or` iframe` does not need a `title`.
- A `title` is not required if the content of the` iframe` is not distinct from the surrounding content and has no focusable element inside, and there is an added `tabindex = "- 1" `on the` iframe` so that it does not get focus.

**Users’ goal:**

Access the information included in images for users who cannot access it.

Blocking point: an image without textual Description: is unusable by people with visual impairments or those that cannot display images (mobile, low bandwidth…).

**Technical goal:**

Improve the natural referencing.

**Valid example:**     
`<a href="./home"><img src="logo_orange.jpg" alt="back to home"></a>`        
`<img src="banner_bouquet_famille.png" alt="Good deal, family max plan 2 euros per month for 12 months instead of 16 euros.">`

**Example with an empty alternative:** 
In the example below, the right pictogram doesn’t have to be vocalized as the text on the left already provides the information.  
In this case setting the `alt` attribute to something other than empty would provide redundant information.  

![example with empty alternative](../../images/service-24.png)  
  
`<h3>guaranteed 24h service</h3>`  
`<img src="service-24.png" alt="">` 

**Tools:**
The <a href="https://chrispederick.com/work/web-developer/"> Web developer </a> extension (ability to display text alternatives for all images). 

**Reference <abbr>WCAG</abbr>&nbsp;:**  
- <a href="https://www.w3.org/TR/WCAG21/#non-text-content">1.1.1 Non-text Content</a>
- <a href="https://www.w3.org/WAI/WCAG21/Understanding/images-of-text">1.4.5 Images of text</a>




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

For more info check out [accessibility recommendations for video content, animations and Orange audios](../../../../fr/contenu-editorial/composants-animes/).

**Users’ goal:**

Provide access to visual and hearing information for people who cannot access it: visually impaired, blind, deaf, cognitively deficient, computer without speakers, noisy or bright environment.

**Technical goal:**

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




## Avoid captcha

**Target:** Everyone in particular, visually impaired people.  
**When:** during design and development.

**Description:**
Captchas are often the source of difficulties for users. If the implementation of an anti-spam system can not be avoided, it is advisable to move towards a more flexible solution for the user & nbsp ;:

- Double authentication
- Hidden form field to leave blank (honeypot technique), not visible to the user
- Providing phone support to ensure that the customer is a real person
- A check to ensure that the same <abbr>IP</abbr>/User agent combination does not attempt to submit the form more than N times per second.

If no other alternative is possible, it is essential to provide an alternative for captcha only visual or sound by proposing a combination of captcha types: an audio + visual captcha, logical tests (question whose answer is obvious, mathematical test simple ...) + classic visual captcha…

More details on [Captchas](../../../articles/captcha-accessibility).

**Reference <abbr>WCAG</abbr>&nbsp;:**  
- <a href="https://www.w3.org/TR/WCAG21/#non-text-content">1.1.1 Non-text Content</a>
