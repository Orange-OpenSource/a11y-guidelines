---
title: "Create an accessible Word document"
---

# Create an accessible Word document

This part describes how to make your Word documents accessible to everyone, including assistive technology users.

## Language

The main language of the document must be defined in the tab `File > Options > Language`.  
Every change of language within the document must be identified by selecting the text and: `tab Review > Language > Set proofing language`.  

## Document properties

Title, author and tags fields have to be completed in tab `File > Info > Properties`.
<img alt="" src="/en/editorial-content/images/word1.png" class="img-fluid">

These properties are readable by everyone in Windows Explorer and by the screen readers. 

## Headings
Give unique and descriptive headings allow users to clearly understand in which part they are on.  
Use a “Heading 1” for the main content heading, and then a “Heading 2” for the major section headings and a “Heading 3” etc. (in the Home panel).  
A good heading structure is often the most important accessibility criteria in Word documents. 
Screen reader users have the ability to navigate long Word documents by heading structure. 

## Table of contents 
Provide a table of contents for long documents using tab `References > Table of Contents`  
It allows users to find information more easily in the document. 

## Wording
Use simple language: avoid abbreviations and acronyms (explain them at the first occurrence).  
If necessary, keep accentuation on capital letters (example: É or Ç): use the `Insert tab > Symbol`

## Formatting / layout
* Use familiar sans serif fonts (such as Arial or Calibri), in a large font size (12pt or larger). Begin all sentences by a capital letter but avoid using all capital letters and excessive italics or underlines.  
* Use predefined styles for formatting content: "normal" style must be assigned almost everywhere (default style), the "quote" style for quotes, etc.
* Avoid justifying the text; prefer left alignment.  
<img alt="" src="/en/editorial-content/images/word2.png" class="img-fluid">

* Do not use text boxes because their content is not interpreted by screen readers.  
* Use the page break option via the `Insert Tab > “Page Break”` menu to move to the next page.  
* Number pages of your document (`Insert Tab > “Page Number”`) to allow users to navigate easily.  
* Do not use carriage returns to skip rows nor successive tabs ("Tab" key on the keyboard ) for text formatting.  
  * In order to add white space between sentences and paragraphs, use option: `right click` on the text and select `Paragraph… > Indents and Spacing`.  
<img alt="" src="/en/editorial-content/images/word3.png" class="img-fluid">  

  * Note: the « Tabs… » options can let you adjust the Tab stop position.  
<img alt="" src="/en/editorial-content/images/word4.png" class="img-fluid">  

## Colors and contrasts
Ensure a level of [sufficient contrast between the color of the text and that of the background](/en/web/design/colors-and-contrasts/#make-sure-there-is-enough-contrast-between-font-and-background-colors). This is valid for your texts but also for icons, buttons and other graphic elements. Contrast can be checked using the tool [Color Contrast Analyser](https://www.paciellogroup.com/resources/contrastanalyser/) for example:
* 4.5:1 for normal size text.
* 3:1 for [large text](/en/glossary/#large-text) and interface components or graphical elements that convey information.

Make sure [color is not the only means used to convey information](/en/web/design/colors-and-contrasts/#do-not-use-colour-or-sensory-characteristics-as-the-unique-source-of-information).

<img alt="" src="/en/editorial-content/images/word5.png" class="img-fluid">  
<img alt="" src="/en/editorial-content/images/word6.png" class="img-fluid">

## Bulleted Lists or Numbered Lists
Always use the appropriate and native functions to create lists: 
- Ordered (numbered) lists are used to present a group of items (words, sentences…) that follow a sequence
- Unordered (bulleted) lists are used for a group of items without a sequence
<img alt="" src="/en/editorial-content/images/word7.png" class="img-fluid">

## Alternative Text for pictures, shapes, chart, SmartArt graphic, or other graphical content
The alternative text has to convey the content and the purpose of the image and its context in a concise and unambiguous manner.  
Right-click on an image and select Format Picture or Format `Shape > Alt Text`.  
Enter the alt text in the Description text box (but leave Title blank, this information is not conveyed to assistive technologies).  
If the picture is only decorative, leave the Description text box blank.  
Alternative text helps people who can’t see the screen to understand what’s important in pictures and other visuals.  
Note: if you use a layout option other than "In Line With Text" (by right-clicking on the image an “Wrap Text” or the “Picture Tools” Tab), the image and text present in the description of image (Alt Text) will be ignored by some screen readers.  

## Audio or video file
For audio and video content, in addition to alt text, be sure the video or audio as well as the player are accessible.  
<a href="/en/editorial-content/animated-components/">See our recommendations for audio or video files.</a>  

## Links 
Specify clear and accurate link text: it must make sense as standalone information to understand the destination target.  
Specify when links are opened in a new window:  
`Insert tab > Hyperlink > SreenTip`  
<img alt="" src="/en/editorial-content/images/word8.png" class="img-fluid">  
Note: a blind person asks his screen reader to list all the links on a page. Each link text will therefore be read isolated from its visual context.

## Data Tables
Use a simple table structure, and specify column header information.  
Ensure that tables don't contain split cells, merged cells, nested tables, or completely blank rows or columns.  
If a table is too complex, you will need to provide an additional description: Right-click `Table Properties > Alt Text`  
Finally, tables should not be used for formatting purposes : use the "Columns" option on the “Page Layout” tab to create a columns layout.

## Accessibility Checker
At least, run Accessibility Checker to make sure your content is accessible. It can detect the main errors and suggests some solutions.  
In `File tab > Check for Issues`.
<img alt="" src="/en/editorial-content/images/word9.png" class="img-fluid">  

Important: if you encounter some difficulties, try to save your document from within Word 2010 in ".docx" (or ".pptx") format. The option to "Maintain compatibility with previous versions of Word" has to remains unchecked. 

## Converting to PDF

After checking the accessibility of your document (see the [Testing the accessibility of your Word document section](/en/editorial-content/word/test/)), you can convert it to a PDF file, if necessary, by selecting: `File tab > Save & Send` and create PDF document.  
Check if the « Document structure tags for accessibility » option is selected.  

<img alt="" src="/en/editorial-content/images/word10.png" class="img-fluid">  

<img alt="" src="/en/editorial-content/images/word11.png" class="img-fluid">  

Note: with Word 2010, generated PDF documents may have accessibility issues (especially with the images vocalization). These issues have been fixed in later versions of Microsoft Office.

## For more detailed information

- <a href="http://webaim.org/techniques/word/" hreflang="en">Word Accessibility, WebAIM</a>.
- <a href="https://support.office.com/en-us/article/make-your-powerpoint-presentations-accessible-to-people-with-disabilities-6f7772b2-2f33-4bd2-8ca7-dae3b2b3ef25?ui=en-US&rs=en-US&ad=US">Microsoft Accessibility Support website</a>
- <a lang="fr" href="https://disic.github.io/guides-documents_bureautiques_accessibles/html/" hreflang="fr">(FR) Créer des documents bureautiques accessible <abbr title="direction interministérielle du numérique et du système d’information et de communication" lang="fr">DINSIC</abbr>.</a> 
