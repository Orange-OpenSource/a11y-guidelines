---
title: "Create accessible PowerPoint slides"
---

# Create accessible PowerPoint slides

## Introduction

Producing accessible PowerPoint slides requires following these different recommendations:

## Slide Layouts

Defining slide layouts is the first action to do in order to create an accessible presentation, it will ensure information have the correct reading order.
Use the Slide Master view: select the <code>View</code> tab > <code>Slide Master</code> to create or modify slides layouts. 

<img class="center" src="/en/editorial-content/images/screen1.png" alt=""/>

Use the Master Layout submenu to add titles or footers.

<img class="center" src="/en/editorial-content/images/screen2.png" alt=""/>

Create as many layouts as types of slides needed.
Avoid adding text boxes or images directly into the presentation via the <code>Insert</code> menu but use the <code>Slide Master</code> view.  
Note: if you edit the slide layout after you have created the slides, you must reapply the new model.

## Presentation properties

### Language

The main language must be defined in the tab <code>File > Options > Language</code>.
Every punctual change of language must be identified by selecting the text and: tab <code>Review > Language > Set proofing language</code>.

### Other properties
Title, author and tags fields have to be completed in tab <code>File > Info > Properties</code>.

<img class="center" src="/en/editorial-content/images/screen3.png" alt=""/>

This information is accessible by everyone in Windows Explorer and are readable by the screen readers. 

## Use unique slide title
Give every slide a unique and descriptive title, it allows screen reader users to clearly understand which slide they are on.

## Wording
Avoid abbreviations and acronyms; explain them at the first occurrence.

## Formatting / layout
Use familiar sans serif fonts (such as Arial or Calibri), in a larger font size (18pt or larger).
Begin all sentences by a capital letter but avoid using all capital letters and excessive italics or underlines.
Avoid justifying the text; prefer left alignment.
In order to add white space between sentences and paragraphs, use option: <code>right click</code> on the text and select <code>Paragraph… > Indents and Spacing</code>.

<img class="center" src="/en/editorial-content/images/screen4.png" alt=""/>

## Colors and contrasts

Ensure a level of [sufficient contrast between the color of the text and that of the background](/en/web/design/colors-and-contrasts/#make-sure-there-is-enough-contrast-between-font-and-background-colors). This is valid for your texts but also for icons, buttons and other graphic elements. Contrast can be checked using the tool [Color Contrast Analyser](https://www.paciellogroup.com/resources/contrastanalyser/) for example:
* 4.5:1 for normal size text.
* 3:1 for [large text](/en/glossary/#large-text) and interface components or graphical elements that convey information.

Make sure [color is not the only means used to convey information](/en/web/design/colors-and-contrasts/#do-not-use-colour-or-sensory-characteristics-as-the-unique-source-of-information).

<figure>
  <img src="/en/editorial-content/images/color1.png" alt=""/>  
  <figcaption><strong>Not correct</strong>: information is transmitted only by color.</figcaption>
</figure>

<figure>
  <img src="/en/editorial-content/images/color2.png" alt=""/>
  <figcaption><strong>Correct</strong>: information is conveyed by color and shape.</figcaption>
</figure>

## Bulleted Lists or Numbered Lists
Always use the appropriate and native functions in order to create lists.

<img class="center" src="/en/editorial-content/images/images/screen5.png" alt=""/>

## Pictures and other Images

Add alt text to images, shapes or SmartArt graphics in your PowerPoint slides.
In order to write a good alt text, make sure to convey the content and the purpose of the image and its context in a concise and unambiguous manner.
Right-click on an image and select <code>Format Picture</code> or <code>Format Shape > Alt Text</code>.

<img class="center" src="/en/editorial-content/images/screen6.png" alt=""/>

Type the alt text in the Description text box (but leave Title blank, this information is not conveyed to assistive technologies).
If the picture is only decorative, leave the Description text box blank.
Alternative text helps people who can’t see the screen to understand what’s important in images and other visuals.
Do not use text in images to convey important information.  

Note: If a picture or a chart is too complex to describe with alt text, you will need to provide a text description elsewhere. You can add the full description to the Notes section of the slide for example. In this case, put a very short description in the alt text, endings with the words: “full text description in the Notes section of this slide”.

## Hyperlinks
Select the text to which you want to add the hyperlink, and then right-click.
The text you selected displays in the “Text to display” box. This is the hyperlink text.
If necessary, add a ScreenTip by clicking on the ScreenTip button.  

<img class="center" src="/en/editorial-content/images/screen11.png" alt=""/>

For every downloadable file, it is necessary to specify its name, type, size and language (if different of the presentation language).  
Screen reader users sometimes scan a list of links, so the labels have to be simple and easy to understand. 

## Tables

Use a simple table structure, and specify column header information.

Ensure that tables don't contain split cells, merged cells, nested tables, or completely blank rows or columns.

If a table is too complex, you will need to provide an additional description: Right-click <code>Format Shape > Alt Text</code>.

## Audio or video file
For audio and video content, in addition to alt text, be sure the video or audio as well as the player are accessible.
<a href="/en/editorial-content/animated-components/">See our recommendations for audio or video files.</a>

## Set the reading order
The order in which the screen readers read the slide contents can be modified in the Selection pane.  
On the <code>Home</code> tab, in the <code>Drawing group</code>, select <code>Arrange > Selection</code> Pane.
The elements of your slide are read in the reverse order listed in this pane.

<img class="center" src="/en/editorial-content/images/screen7.png" alt=""/>

## Accessibility Checker
At least, run Accessibility Checker to make sure your content is accessible.  

In <code>File tab > Check for Issues</code>.

<img class="center" src="/en/editorial-content/images/screen8.png" alt=""/>

## Convert to PDF

After checking the accessibility of your document (see the <a href="/en/editorial-content/powerpoint/test/">Testing the accessibility of your Word document section</a>), you can convert it to a PDF file, if necessary, by selecting: <code>File tab > Save As</code> and save as type PDF.
Check the « Document structure tags for accessibility » option.

<img src="/en/editorial-content/images/screen9.png" alt=""/>

PDF is often a better format to present PowerPoint presentations electronically.  

Note:  If your presentation have more than 50 slides, it is better to advise your readers to change the following setting in Adobe:
<code>Edit > Preferences > Reading > Screen Reader Options > Page vs Document: "Read the entire document"</code>

<img src="/en/editorial-content/images/screen10.png" alt=""/>

To check the accessibility of a PDF document, see the <a href="/en/editorial-content/pdf/">accessible PDF section of our site</a>.

## For more detailed information
- [PowerPoint Accessibility, WebAIM](https://webaim.org/techniques/powerpoint/)
- [Microsoft Accessibility Support website](https://support.office.com/en-us/article/Make-your-PowerPoint-presentations-accessible-6f7772b2-2f33-4bd2-8ca7-dae3b2b3ef25)
- <a href="https://disic.github.io/guides-documents_bureautiques_accessibles/html/" lang="fr">(FR) Créer des documents bureautiques accessibles, DINISIC</a>.
