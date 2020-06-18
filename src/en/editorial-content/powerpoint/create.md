---
title: "Creating accessible PowerPoint documents"
---

# Creating accessible PowerPoint documents

## Introduction

Producing accessible PowerPoint presentations requires following different rules. They are summarized below (and detailed guides are available on the [WebAIM website](https://webaim.org/techniques/powerpoint/)).

In order to help you, PowerPoint includes a tool to check the accessibility of your presentation. This tool identifies the main errors and proposes different solutions. 

## Slide Layouts

Defining slide layouts is the first action to do in order to create an accessible presentation, it will ensure information have the correct reading order.
Use the Slide Master view: select the <code>View</code> tab > <code>Slide Master</code> to create or modify slides layouts. 

<img class="center" src="../../images/screen1.png" alt="Screenshot of view tab"/>

Use the Master Layout submenu to add titles or footers.

<img class="center" src="../../images/screen2.png" alt="Screenshot of slide master tab"/>

Create as many layouts as types of slides needed.
Avoid adding text boxes or images directly into the presentation via the <code>Insert</code> menu but use the <code>Slide Master</code> view.  
Note: if you edit the slide layout after you have created the slides, you must reapply the new model.

## Presentation properties

### Language

The main language must be defined in the tab <code>File > Options > Language</code>.
Every punctual change of language must be identified by selecting the text and: tab <code>Review > Language > Set proofing language</code>.

### Other properties
Title, author and tags fields have to be completed in tab <code>File > Info > Properties</code>.

<img class="center" src="../../images/screen3.png" alt="Screenshot of file properties"/>

This information is accessible by everyone in Windows Explorer and are readable by the screen readers. 

## Use unique slide titles
Give every slide a unique and descriptive title, it allows screen reader users to clearly understand which slide they are on.

## Wording
Avoid abbreviations and acronyms; explain them at the first occurrence.
If necessary, keep accentuation on capital letters (example: É or Ç): use the <code>Insert tab > Symbol</code>.

## Formatting / layout
Use familiar sans serif fonts (such as Arial or Calibri), in a larger font size (18pt or larger).
Begin all sentences by a capital letter but avoid using all capital letters and excessive italics or underlines.
Avoid justifying the text; prefer left alignment.
In order to add white space between sentences and paragraphs, use option: <code>right click</code> on the text and select <code>Paragraph… > Indents and Spacing</code>.

<img class="center" src="../../images/screen4.png" alt="Screenshot of paragraph dialog"/>

## Colors and contrasts

### Use sufficient contrast for text and background colors

The presentation of text should have a contrast ratio of at least 4.5:1.
Here are some examples on a white background:
- Foreground black : very good contrast, ratio = 21:1 
- Foreground #767676 (dark grey), acceptable contrast, ratio = 4.54:1
- Foreground #AAAAAA (lighter grey), unacceptable contrast, ratio = 2.32:1

If you choose to not use the Orange Group colors guidelines, you can download the [Colour Contrast Analyser](https://www.paciellogroup.com/resources/contrastanalyser/) tool; it will be useful for checking your contrasts.

### Ensure that color is not the only means of conveying information
For people who can not see the colors or the shades of colors, it is important to convey the information differently.

<img class="center" src="../../images/color1.png" alt="Bad example, color is used to convey the information"/>  
<img class="center" src="../../images/color2.png" alt="Good example, the shape is used to convey the information"/>

Appropriate colors and contrast are necessary for people to see your presentations and understand their meaning. 

## Bulleted Lists or Numbered Lists
Always use the appropriate and native functions in order to create lists.

<img class="center" src="../../images/screen5.png" alt="Screenshot of lists options"/>

## Pictures and other Images

Add alt text to images, shapes or SmartArt graphics in your PowerPoint slides.
In order to write a good alt text, make sure to convey the content and the purpose of the image and its context in a concise and unambiguous manner.
Right-click on an image and select <code>Format Picture</code> or <code>Format Shape > Alt Text</code>.

<img class="center" src="../../images/screen6.png" alt="Screenshot of format picture dialog"/>

Type the alt text in the Description text box (but leave Title blank, this information is not conveyed to assistive technologies).
If the picture is only decorative, leave the Description text box blank.
Alternative text helps people who can’t see the screen to understand what’s important in images and other visuals.
Do not use text in images to convey important information.  

Note: If a picture or a chart is too complex to describe with alt text, you will need to provide a text description elsewhere. You can add the full description to the Notes section of the slide for example. In this case, put a very short description in the alt text, endings with the words: “full text description in the Notes section of this slide”.

For every downloadable file, it is necessary to specify its name, type, size and language (if different of the presentation language).
Screen reader users sometimes scan a list of links, so the labels have to be simple and easy to understand.

## Hyperlinks
Select the text to which you want to add the hyperlink, and then right-click.
The text you selected displays in the “Text to display” box. This is the hyperlink text.
If necessary, add a ScreenTip by clicking on the ScreenTip button.  

<img class="center" src="../../images/screen11.png" alt="Insert hyperlink dialog box screenshot"/>

For every downloadable file, it is necessary to specify its name, type, size and language (if different of the presentation language).  
Screen reader users sometimes scan a list of links, so the labels have to be simple and easy to understand. 


## Tables

Use a simple table structure, and specify column header information.

Ensure that tables don't contain split cells, merged cells, nested tables, or completely blank rows or columns.

If a table is too complex, you will need to provide an additional description: Right-click <code>Format Shape > Alt Text</code>.

## Audio or video file
For audio and video content, in addition to alt text, include closed captioning for people who are deaf or have limited hearing.  

Video content must have synchronized captions and also needs a rich description of the visual components.
Closed captions typically also describe audio attributes such as music or sound effects that occur off-screen.
Subtitles typically contain a transcription (or translation) of the dialogue.  

Audio content must have a transcript.  

Avoid automatic launching or slide transitions.  

Avoid content that blinks or flashes more than three times a second.

## Set the reading order
The order in which the screen readers read the slide contents can be modified in the Selection pane.  
On the <code>Home</code> tab, in the <code>Drawing group</code>, select <code>Arrange > Selection</code> Pane.
The elements of your slide are read in the reverse order listed in this pane.

<img class="center" src="../../images/screen7.png" alt="Screenshot of selection pane"/>

## Accessibility Checker
At least, run Accessibility Checker to make sure your content is accessible.  

In <code>File tab > Check for Issues</code>.

<img class="center" src="../../images/screen8.png" alt="Screenshot of accessibility checker menu"/>

## Convert to PDF

Save you presentation as <abbr>PDF</abbr>: <code>File tab > Save As</code> and save as type PDF.
Check the « Document structure tags for accessibility » option.

<img class="center" src="../../images/screen9.png" alt="Screenshot of PDF options dialog"/>

<abbr>PDF</abbr> is often a better format to present PowerPoint presentations electronically.  

Note:  If your presentation have more than 50 slides, it is better to advise your readers to change the following setting in Adobe:
<code>Edit > Preferences > Reading > Screen Reader Options > Page vs Document: "Read the entire document"</code>

<img class="center" src="../../images/screen10.png" alt="Screenshot of screen reader options"/>

To check <abbr>PDF</abbr> document accessibility: download [PDF Accessibility Checker (PAC 3)](http://www.access-for-all.ch/en/pdf-lab/pdf-accessibility-checker-pac.html).

## For more detailed information
- [PowerPoint Accessibility, WebAIM](https://webaim.org/techniques/powerpoint/)
- [Microsoft Accessibility Support website](https://support.office.com/en-us/article/Make-your-PowerPoint-presentations-accessible-6f7772b2-2f33-4bd2-8ca7-dae3b2b3ef25)
- <a href="https://disic.github.io/guides-documents_bureautiques_accessibles/html/" lang="fr">(FR) Créer des documents bureautiques accessibles, DINISIC</a>.
