# Creating accessible Word documents
<script>$(document).ready(function () {
    setBreadcrumb([{"label":"Accessible Word"}]);
});</script>

<style>h3 {font-size: 1rem;}</style>

## Introduction

Accessible Word documents are needed in order to be read by all users. Creating accessible Word documents requires to respect the following recommendations. It also enables you to produce accessible <abbr>PDF</abbr> documents through the <abbr>PDF</abbr> export functionality inside Word.

## Recommendations


You will find below a summary of the recommendations to follow. For more detail, please refer to <a href="https://disic.github.io/guides-documents_bureautiques_accessibles/html/" hreflang="fr">the <abbr title="direction interministérielle du numérique et du système d’information et de communication" lang="fr">DINSIC</abbr> website</a> (in French).

### 1. Use “Heading” styles for headings and sub-headings

Headings and sub-headings must use the “Headings” styles (Heading 1, Heading 2, etc.) to structure the document’s content and provide easy access to them.

### 2. Use the “Normal” style for texts

The “Normal” style must be used for all text paragraphs (default style).

### 3. Use dedicated styles to emphasize some contents.

Use predefined styles to emphasize some contents (e.g. quotes, legends, etc.) rather than using character formatting tools (bold etc.).

### 4. Don’t insert empty lines

Space between lines must be created through Paragraph options, where you can define the space before and after a paragraph.

Page jumps must be created via proper “Jumps” (Insert&nbsp;> Page jump, new page).

### 5. Use bulleted lists

Lists must be made using the option “Bulleted list” or “Numbered list”, and not by inserting dashes into the text.

### 6. Use footnotes

Options to insert “Footnotes” and “Endnotes” must be used to properly insert notes in your document.

### 7. Number your pages

The “Page number” option makes it easier to get one’s bearings in a document.

### 8. Use “Columns” to layout text

The “Columns” option in the Layout group must be used (instead of tables) to layout the page as proper columns.

### 9. Define the anchor for objects inserted into the page

When you insert objects (image, shape, SmartArt, etc.), it is necessary to define an anchor point: in the options for page flow, choose the option “Aligned on the text” or “Top and bottom”.

### 10. Avoid text zones

Floating text zones are not always properly read by screen readers. Texts can be emphasized through the use of borders around a paragraph, for instance.

### 11. Ensure colour is not the only means to convey information

Information given through colour must also be conveyed via another means like shape, position, size…


### 12. Ensure a sufficient contrast

Contrast between the colour of text and of its background must be sufficient:
- 4.5:1 for normal-size text;
- 3:1 for bigger text.

Contrast can be verified with the <a href="https://www.paciellogroup.com/resources/contrastanalyser/" hreflang="en" lang="en">Colour Contrast Analyzer</a>.

### 13. Define language

Language must be defined through the menu: File&nbsp;> Options&nbsp;> Language.
Words or grops of words in another language must be explicitly described as such (menu: Revision&nbsp;> Language&nbsp;> Define the verification language).

### 14. Provide replacement text for images

If the image conveys information, you must provide a replacement text describing its content (right click, Image format&nbsp;> Replacement text&nbsp;> Description field).
If the image is strictly for decoration, the Description field must be left empty.

### 15. Make simple tables

Data tables must stay simple. Avoid blending cells together. Avoid inserting images: they will not be read as table elements but as independent elements which will be read before or after the table according to the internal document’s reading order. Leave no empty cell.

### 16. Use the automated Accessibility checker

Word provides an Accessibility checker (menu File&nbsp;> Check for problems&nbsp;> Check accessibility). It lists all contents prone to be hard to deal with and automatically detected failures. This tool must be used as it provides a huge help; however it does not prevent you from checking and applying all the recommendations provided in this page.

### 17. Exporting the document to <abbr>PDF</abbr>

To export to <abbr>PDF</abbr> you only need to go to File&nbsp;> Save as. Choose a name and select <abbr>PDF</abbr> as file type.
The first time, make sure that the “Accessibility-friendly document structure tags” checkbox in Export options is checked.

Please note that in Word for Office 2010 generated <abbr>PDF</abbr> documents can show accessibility issues, e.g. for the vocalisation of images. These issues were corrected in the following versions of Microsoft Office.

## External resources

- <a href="https://disic.github.io/guides-documents_bureautiques_accessibles/html/" hreflang="fr">Creating accessible office documents (in Frnech)</a>, <abbr title="direction interministérielle du numérique et du système d’information et de communication" lang="fr">DINSIC</abbr>.
- <a href="http://webaim.org/techniques/word/" hreflang="en">Word Accessibility, WebAIM</a>.

<!--  This file is part of a11y-guidelines | Our vision of mobile & web accessibility guidelines and best practices, with valid/invalid examples.
 Copyright (C) 2016  Orange SA
 See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). -->