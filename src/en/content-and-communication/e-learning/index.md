---
title: "Storyline 360 - E-learning"
abstract: "Storyline 360 recommandations"
---
# Storyline 360 recommandations

Recommendations for making an accessible e-learning presentation.
*Note* : in addition, <a href="/fr/contenu-et-communication/">the general editorial recommendations </a> (colors, make reading easier, etc.) must also be applied, but are not described in this article.

## Personalize the user experience from the start

### Provide instructions from the first slide

Users must be able to know and anticipate the navigation mechanisms.
- Provide textual instructions from the first slide
- These instructions provide all the shortcuts specific to e-learning
- For screen reader users, we suggest adding keyboard navigation instructions
<figure class="figure">
  <img alt="" src="/fr/contenu-et-communication/images/trigger-wizard.png" class="img-fluid">
  <figcaption class="figure-caption">If keyboard shortcuts are defined, they must be announced from the first slide.</figcaption>
</figure>

### Give the choice between different profiles

The goal of accessibility is to provide a single interface that can be used by all users.
However, e-learning has specific features, such as serious games for example, which can prevent the implementation of an interface without degradation of the experience for all users.
The solution is therefore to offer the choice of profiles.
The content (serious game, exercises, etc.) can be adapted to the context of each user.

- Propose alternative mechanisms (example: replacing a drag n’drop system for example)
- Offer additional content (example: addition of detailed descriptions for screen readers)
<figure class="figure">
  <img alt="" src="/fr/contenu-et-communication/images/profile-selection.png" class="img-fluid">
  <figcaption class="figure-caption">In this example, alternative Serious Games are offered to blind users.</figcaption>
</figure>

## Allow to use the main functions of the application through a keyboard interface

This is to allow users who cannot use the mouse (blind, motor impaired, etc.) to access the main functionalities of the application from the keyboard.

- Ensure that all interactive elements are usable from the keyboard
- Focus on native components (radio, checkbox, button) offered by Storyline
- Do not use systems that only rely on mouse interaction, such as: 
	- drag n’drop 
	- the "hover" state to transmit important information

### Make the focus visible in all circumstances

A visible focus indicator allows keyboard users to know which component is currently active.

1. Activate "Player properties"
2. Select "Colors & Effects"
3. Change the default focus color

 <img alt="" src="/fr/contenu-et-communication/images/storyline-focus.png" class="img-fluid">  &nbsp;
  
## Ensure that the user keeps control during interactions

### Know the result of your actions

The results of quizzes in particular must be perceived by all users.

- Use Storyline's native notification components (feedback layers)
- Start a vocalization of the result after submission by the user
<figure class="figure">
  <img alt="" src="/fr/contenu-et-communication/images/feedback-message.png" class="img-fluid">
  <figcaption class="figure-caption">In this example, the result "Not quite ... All of the above are correct!" is vocalized by a voice-over</figcaption>
</figure>

### Avoid time limits

All users must be able to complete their actions without unexpected behavior, such as a slide change for example.

- Avoid time limits to complete an exercise or a quiz, read content
- If a time limit is essential for carrying out an exercise, offer an alternative (possibility of deactivating or modifying the time limit, or proposing a different exercise depending on the profile for example)

Conversely, it may be useful to specify the time required for viewing alternative content, or viewing e-learning.

## Organize objects and texts in a logical way

For all users, whatever their method of browsing (screen reader, screen magnifier, keyboard navigation), the reading order of the components on the screen will correspond to the reading direction of the language of the document (therefore from left to right and from top to bottom for an interface in French for example)..

- In general, make sure to reproduce a logical reading order (left to right and top to bottom depending on the language used)
- Make sure that the order of the items allows the information to be understood. For example, in a questionnaire make sure that users move the focus or vocalize first on the question, then on the choice of answers
- If control buttons are used (submit button, next button), place them at the bottom right of the slide, so that they are read last
- Avoid layouts on several columns so as not to disrupt the understanding of information

*The procedure:*

1. Activate the "Focus order" function
2. The "Focus Order" dialog box opens. This centralizes all the elements of the slide
3. Select "Create a custom focus order"
4. Select an item
5. Use the "up / down" arrows to change the order of the item
6. Activate "save"

<figure class="figure">
<img alt="" src="/fr/contenu-et-communication/images/storyline-order-1.png" class="img-fluid">
<figcaption class="figure-caption">Storyline allows all items to be rearranged with the "Focus Order" option.
</figcaption>
</figure>

<figure class="figure">
<img alt="" src="/fr/contenu-et-communication/images/storyline-order-2.png" class="img-fluid">
<figcaption class="figure-caption">The order of items on the screen does not always match the order of items in the source code.
The order of the elements in the source code will have an impact when reading from a technical aid, such as a screen reader for example.
</figcaption>
</figure>

## Give a title to the presentation and slides

### Presentation title

The presentation title must be explicit.
It allows end users to identify the training in their browser.
This is especially important for users of screen readers.

*The procedure:*
1. Click on Publish
2. Go to the "Web" tab of the dialog box
3. Complete the "Title" field

<figure class="figure">
<img alt="" src="/fr/contenu-et-communication/images/titre-formation.png" class="img-fluid">
<figcaption class="figure-caption">Click on Publish, then fill in the Title field.
</figcaption>

</figure>
<figure class="figure">
<img alt="" src="/fr/contenu-et-communication/images/onglet-formation.png" class="img-fluid">
<figcaption class="figure-caption">The title appears in the browser tab.
</figcaption>
</figure>

### Slide title

The slide title should also be self-explanatory.
It allows end users to understand the context of each new slide.
Especially screen reader users, indeed this element will be vocalized automatically upon arrival on a new slide.


<figure class="figure">
<img alt="" src="/fr/contenu-et-communication/images/titre-diapo.png" class="img-fluid">  &nbsp;
<figcaption class="figure-caption">Double click on the title of the slide to modify it.
</figcaption>
</figure>

## Structure the content with headings

Apply heading styles to texts presented as heading.
Headings are essential for screen reader users to understand the structure of content and navigate easily within it.

<figure class="figure">
<img alt="" src="/fr/contenu-et-communication/images/storyline-titre-niveau.png" class="img-fluid">  &nbsp;
<figcaption class="figure-caption">Use the appropriate styles (from Heading 1 to Heading 4).
</figcaption>
</figure>

## Provide relevant alternative texts

Alt text is essential for blind users.
It is this content that will be vocalized.

<figure class="figure">
<img alt="" src="/fr/contenu-et-communication/images/alt-images.png" class="img-fluid">
<figcaption class="figure-caption">
List of 3 buttons : <span lang="fr">anticiper</span> (anticipate), <span lang="fr">gérer</span> (manage), <span lang="fr">communiquer</span> (communicate), based on images.

- *Invalid alternative:* button-gerer-1.png
- *Valid alternative:* <span lang="fr">Gérer</span>

</figcaption>
</figure>

*The recommendations:*

- For images with text, the alternative text includes the textual content present in the image
- For buttons and other form elements, the alternative text conveys the target or the action carried by the button
- It is counterproductive to begin texts with "image of". Be concise and provide only the information that is necessary for the user
- Avoid abbreviations and repetition of punctuation elements

<figure class="figure">
<img alt="" src="/fr/contenu-et-communication/images/alt-images-infos.png" class="img-fluid">
<figcaption class="figure-caption">
Example of an image that conveys information:

- *Invalid alternative:* coche.png
- *Valid alternative:* hearing impaired sequence already consulted
</figcaption>
</figure>

*The procedure:*
1. Activate the "Focus order" function
2. The "Focus Order" dialog box opens. This centralizes all the elements of a slide
3. Enter the alternative text of buttons or objects carrying information
4. Click on "Save"

<figure class="figure">
<img alt="" src="/fr/contenu-et-communication/images/storyline-order-1.png" class="img-fluid">
<figcaption class="figure-caption">
Alternative texts can be defined from the "Focus order" panel.
</figcaption>
</figure>

<img alt="" src="/fr/contenu-et-communication/images/storyline-order-3.png" class="img-fluid">  &nbsp;


## Hide decorative images

An image is considered decorative when it does not provide additional information for the understanding of a text or a feature.

It is recommended that you hide these items from screen reader users.

Profits : 
- Lighten vocalization, avoiding the reading of information useless to understanding the content
- Simplify keyboard navigation by removing unnecessary elements from the keyboard path

<figure class="figure">
<img alt="" src="/fr/contenu-et-communication/images/image-deco-1.png" class="w-50 pr-1 float-left">
<img alt="" src="/fr/contenu-et-communication/images/image-deco-2.png" class="w-50 float-left">
<figcaption class="figure-caption">
Examples of decorative images, in these contexts, the figures or the table leg do not provide any information.
They can therefore be hidden from users of technical aids.
</figcaption>
</figure>

*The procedure:*
1. Right click on the image
2. Select "Accessibility" in the menu
3. The "size and position" dialog box opens
4. The "Accessibility" tab is open by default
5. Uncheck the box "The object is visible ..."
6. Click on "close"

<img alt="" src="/fr/contenu-et-communication/images/hide-image.png" class="img-fluid mb-1">
<img alt="" src="/fr/contenu-et-communication/images/hide-image-2.png" class="img-fluid">  &nbsp;


## Indicate the main language of the document
  
Defining the language of a document will allow screen readers to adapt their vocalization to the language of the content.

*The procedure:*
1. Select "player - modify reader properties"
2. Select "text labels"
3. In the "language" drop-down menu, select the language corresponding to the document
4. Edit the texts in the "personalized text" column
5. Click on “OK”

<img alt="" src="/fr/contenu-et-communication/images/storyline-langue-1.png" class="img-fluid mb-1">  &nbsp;

## Audio or video content

- Provide transcription for audios and videos
- Do not start audio or video automatically
- If the media starts automatically, make sure the user has the option to stop it manually

<img alt="" src="/fr/contenu-et-communication/images/lancement-auto.png" class="img-fluid">  &nbsp;

### Accessible audios

Some formations have a vocalization of each slide (voice over):

- If the voice provides information not present in the content of the slide, then subtitles are necessary.
Storyline enables the creation of synchronized captions.
- Make sure that all textual content on the slide is vocalized, so as not to mislead blind users who may rely solely on audio and not manually view all of the slide's content.

<figure class="figure">
<img alt="" src="/fr/contenu-et-communication/images/activer-sous-titre.png" class="img-fluid">
<figcaption class="figure-caption">
Give the possibility to users to activate the subtitles from the beginning of the presentation.
</figcaption>
</figure>

### Accessible videos

See [Accessibility of video, animation and audio content](/en/content-and-communication/animated-components/) to learn more.

## Ressources

- <a href="https://articulate-heroes.s3.amazonaws.com/uploads/attachment/attachment_url/24511/Storyline_accessibility_guide.pdf?dl=true" hreflang="en" lang="en">Designing Accessible E-Learning Using Articulate Storyline (pdf)</a>
- <a href="https://www.ucop.edu/electronic-accessibility/_files/creating-accessible-ecourses.pdf" hreflang="en" lang="en">Creating Accessible eCourses (pdf, anglais)</a>
- <a href="http://generic.wordpress.soton.ac.uk/digital-learning/2019/01/28/accessibility-for-articulate-storyline-are-you-wcag-compliant/" hreflang="en" lang="en">Accessibility for Articulate storyline – Are you WCAG compliant?</a>
- <a href="https://www.hassellinclusion.com/blog/elearning-accessibility-poster/" hreflang="en" lang="en">Creating e-learning that can be used by everyone (POSTER)</a>