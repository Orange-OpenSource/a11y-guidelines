# Creating accessible PowerPoint documents
<script>$(document).ready(function () {
    setBreadcrumb([{"label":"Accessible PowerPoint"}]);
});</script>

<style>h3 {font-size: 1rem;}</style>

## Introduction

To produce accessible PowerPoint documents, one has to follow recommendations. Fortunately, PowerPoint comes equipped with a tool to check accessibility.
It pinpoints the main issues and suggests solutions to remedy them.

This being said, even after correcting said issues, we realised that some elements (SmartArt, tables, …) were not always correctly vocalised by screen readers.
This is why, when your presentation is done, we recommend to export it in PDF before broadcasting the document: the Export option in PowerPoint gives better results with assistive technologies; also it removes animations, which are often a problem for people with vision problems.

## Recommendations

Below you will find a summary of recommendations that provide better accessibility with PowerPoint.
For more information, please refer to the guides provided on <a href="https://disic.github.io/guides-documents_bureautiques_accessibles/html/" hreflang="fr">the <abbr title="direction interministérielle du numérique et du système d’information et de communication" lang="fr">DINSIC</abbr> website (in French)</a>.

Our tests were done using Office 2010 with Jaws 17 and <abbr>NVDA</abbr> 2017-1. The below recommendations are the result of these tests.

### 1. Use slide masks

Presentations must be created using slide masks (menu: Display&nbsp;> Slide masks). Then use checkboxes “Title”, “Footers”, and the menu “Insert reserved space”.

### 2. Check the reading order of elements

The reading order must be checked through the Selection pane (menu Home&nbsp;> Organise&nbsp;> Selection pane). Be careful: the last element in the list is the first read by screen readers: the reading order must thus be from bottom to top in your slide masks.

### 3. Give a unique title to each slide

Each slide must have a unique title. This must be added in the zone titled “Click to add a title”.

### 4. Provide replacement text for images

If the image conveys information, you must provide a replacement text describing its content (right click, Image format&nbsp;> Replacement text&nbsp;> Description field).
If the image is strictly for decoration, the Description field must be left empty.


### 5. Make simple tables

Data tables must stay simple. Avoid blending cells together. Avoid inserting images: they will not be read as table elements but as independent elements which will be read before or after the table according to the internal document’s reading order. Leave no empty cell.

### 6. Use SmartArt rather than assembling text and shapes

SmartArt enables you to integrate images and text that will be vocalised in the proper order. All SmartArt clips are not correct yet, be careful.

### 7. Add a replacement text to graphics

The content of graphics must be described in the Replacement text for the graphic (Object format&nbsp;> Replacement text&nbsp;> Description).

### 8. Ensure colour is not the only means to convey information

Information given through colour must also be conveyed via another means like shape, position, size…

### 9. Ensure a sufficient contrast

Contrast between the colour of text and of its background must be sufficient:
- 4.5:1 for normal-size text;
- 3:1 for bigger text.

Contrast can be verified with the <a href="https://www.paciellogroup.com/resources/contrastanalyser/" hreflang="en" lang="en">Colour Contrast Analyzer</a>.

### 10. Define language

Language must be defined through the menu: File&nbsp;> Options&nbsp;> Language.
Words or grops of words in another language must be explicitly described as such (menu: Revision&nbsp;> Language&nbsp;> Define the verification language).

### 11. Use the automated Accessibility checker

PowerPoint provides an Accessibility checker (menu File&nbsp;> Check for problems&nbsp;> Check accessibility). It lists all contents prone to be hard to deal with.

### 12. Exporting the presentation to <abbr>PDF</abbr>

To export to <abbr>PDF</abbr> you only need to go to File&nbsp;> Save as. Choose a name and select <abbr>PDF</abbr> as file type.
The first time, make sure that the “Accessibility-friendly document structure tags” checkbox in Export options is checked.

## External resources

- <a href="https://disic.github.io/guides-documents_bureautiques_accessibles/html/" hreflang="fr">Creating accessible office documents (in French)</a>, <abbr title="direction interministérielle du numérique et du système d’information et de communication" lang="fr">DINSIC</abbr>.
- <a href="http://webaim.org/techniques/PowerPoint/" hreflang="en">PowerPoint accessibility, WebAIM</a>.

## Results of our tests

We tested the behaviour of <abbr>NVDA</abbr> (version 2017.1) and Jaws (version 17) under Windows with a <abbr>PDF</abbr> file generated with PowerPoint 2010.

### Tables

Tables were vocalised correctly with Jaws and <abbr>NVDA</abbr>.

### Tables with replacement text

<abbr>NVDA</abbr>: tables were still vocalised, replacement texts were ignored.
Jaws: tables were not vocalised any more, replacement texts were ignored.


### SmartArt

Same behaviour for Jaws and <abbr>NVDA</abbr>: SmartArt texts were vocalised (not always in the proper order though).

### SmartArt with replacement texts

<abbr>NVDA</abbr>: expected behaviour, replacement texts were read instead of the SmartArt.
Jaws: SmartArt were not vocalised any more, replacement texts were ignored.

### Graphics

Jaws and <abbr>NVDA</abbr> had the same behaviour: figures in graphics were vocalised.

### Graphics with replacement texts

Jaws and <abbr>NVDA</abbr> behaved as expected: replacement texts were vocalised instead of the graphics.

<!--  This file is part of a11y-guidelines | Our vision of mobile & web accessibility guidelines and best practices, with valid/invalid examples.
 Copyright (C) 2016  Orange SA
 See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). -->