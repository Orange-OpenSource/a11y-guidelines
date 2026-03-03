---
title: "Creating accessible PDF documents"
abstract: "Create accessible PDFs for all"
---

# Creating accessible <abbr>PDF</abbr> documents

In order to make your PDFs understandable and usable by everyone, they must be structured according to these recommendations.

## Guides to create accessible PDF documents

### From Microsoft Word or PowerPoint

Find [our recommendations for creating a PDF accessible from Microsoft Word](/en/content-and-communication/word/) and [our recommendations for Microsoft PowerPoint](/en/content-and-communication/powerpoint/). 

### From Adobe InDesign
InDesign is a design layout software, used in particular for the production of printable documents.
However, it is quite possible to configure your file to produce an accessible PDF.
Find the [Adobe inDesign recommendations in this guide](http://www.pdf-accessible.com/notices-accessibilite-indesign-acrobat/#indesign).

### From Adobe Acrobat Pro

Find the [Adobe Acrobat Pro file for AcceDe PDF (PDF, 6,2Mo)](http://www.pdf-accessible.com/wp-content/uploads/2015/01/making-PDF-accessible-Acrobat.pdf).

## Mandatory criteria

These criteria are useful for people creating PDF documents without using the cited editing software (Microsoft Word, Adobe InDesign, Adobe Acrobat Pro, etc.), for example developers whose applications generate PDF documents.

### Document structure

* The document must at the very least include a document title and a default language (language changes must be indicated in the document).

See related WCAG criteria <a hreflang="en" href="https://www.w3.org/TR/WCAG20-TECHS/PDF16.html" title="WCAG 2.0 technique: PDF16: Setting the default language using the /Lang entry in the document catalog of a PDF document" aria-label="WCAG 2.0 technique: PDF16: Setting the default language using the /Lang entry in the document catalog of a PDF document"><abbr>PDF16</abbr></a>, <a hreflang="en" href="https://www.w3.org/TR/WCAG20-TECHS/PDF17.html" title="WCAG 2.0 technique: PDF17: Specifying consistent page numbering for PDF documents" aria-label="WCAG 2.0 technique: PDF17: Specifying consistent page numbering for PDF documents"><abbr>PDF17</abbr></a>, <a hreflang="en" href="https://www.w3.org/TR/WCAG20-TECHS/PDF18.html" title="WCAG 2.0 technique: PDF18: Specifying the document title using the Title entry in the document information dictionary of a PDF document" aria-label="WCAG 2.0 technique: PDF18: Specifying the document title using the Title entry in the document information dictionary of a PDF document"><abbr>PDF18</abbr></a>.

* The document is structured with titles, through the proper use of title “tags”. Moreover, long documents must include bookmarks to make navigation easier.

See related WCAG criteria <a hreflang="en" href="https://www.w3.org/TR/WCAG20-TECHS/PDF2.html" title="WCAG 2.0 technique: PDF2: Creating bookmarks in PDF documents" aria-label="WCAG 2.0 technique: PDF2: Creating bookmarks in PDF documents"><abbr>PDF2</abbr></a>, <a hreflang="en" href="https://www.w3.org/TR/WCAG20-TECHS/PDF9.html" title="WCAG 2.0 technique: PDF9: Providing headings by marking content with heading tags in PDF documents" aria-label="WCAG 2.0 technique: PDF9: Providing headings by marking content with heading tags in PDF documents"><abbr>PDF9</abbr></a>.

* The use of headers and footers must help the user locating themselves in the document.

See the associated WCAG criterion <a hreflang="en" href="https://www.w3.org/TR/WCAG20-TECHS/PDF14.html" title="WCAG 2.0 technique: PDF14: Providing running headers and footers in PDF documents" aria-label="WCAG 2.0 technique: PDF14: Providing running headers and footers in PDF documents"><abbr>PDF14</abbr></a>.

### Keyboard navigation and reading order

* The reading order conveyed by an assistive tool, as well as keyboard navigation (through tabbing) must reflect the document’s structure. 
* Keyboard navigation should be possible throughout the document without blocking (preventing keyboard "traps").

See the related WCAG criterion <a hreflang="en" href="https://www.w3.org/TR/WCAG20-TECHS/PDF3.html" title="WCAG 2.0 technique: PDF3: Ensuring correct tab and reading order in PDF documents" aria-label="WCAG 2.0 technique: PDF3: Ensuring correct tab and reading order in PDF documents"><abbr>PDF3</abbr></a>.

### Images

* Images featuring information must have an appropriate alternative. 
* Scanned documents must be covnerted to text through optical character recognition (<abbr>OCR</abbr>). 
* Decorational images must be hidden.

See related WCAG criteria <a hreflang="en" href="https://www.w3.org/TR/WCAG20-TECHS/PDF1.html" title="WCAG 2.0 technique: PDF1: Applying text alternatives to images with the Alt entry in PDF documents" aria-label="WCAG 2.0 technique: PDF1: Applying text alternatives to images with the Alt entry in PDF documents"><abbr>PDF1</abbr></a>, <a hreflang="en" href="https://www.w3.org/TR/WCAG20-TECHS/PDF4.html" title="WCAG 2.0 technique: PDF4: Hiding decorative images with the Artifact tag in PDF documents" aria-label="WCAG 2.0 technique: PDF4: Hiding decorative images with the Artifact tag in PDF documents"><abbr>PDF4</abbr></a>, <a hreflang="en" href="https://www.w3.org/TR/WCAG20-TECHS/PDF7.html" title="WCAG 2.0 technique: PDF7: Performing OCR on a scanned PDF document to provide actual text" aria-label="WCAG 2.0 technique: PDF7: Performing OCR on a scanned PDF document to provide actual text"><abbr>PDF7</abbr></a>.

### Tables

* A data table must be structured by a `table` “tag” containing at least one line. 
* Table headers must be used appropriately. 
* All lines must contain the same number of cells. 
* Merged cells must clearly indicate if the merge was vertical or horizontal (`rowSpan` or `colSpan` attribute).

See the associated WCAG criterion <a hreflang="en" href="https://www.w3.org/TR/WCAG20-TECHS/PDF6.html" title="WCAG 2.0 technique: PDF6: Using table elements for table markup in PDF Documents" aria-label="WCAG 2.0 technique: PDF6: Using table elements for table markup in PDF Documents"><abbr>PDF6</abbr></a>.

### Links

Link texts must be explicit, or the links must provide an accessible alternative.

See related WCAG criteria <a hreflang="en" href="https://www.w3.org/TR/WCAG20-TECHS/PDF11.html" title="WCAG 2.0 technique: PDF11: Providing links and link text using the Link annotation and the /Link structure element in PDF documents" aria-label="WCAG 2.0 technique: PDF11: Providing links and link text using the Link annotation and the /Link structure element in PDF documents"><abbr>PDF11</abbr></a>, <a hreflang="en" href="https://www.w3.org/TR/WCAG20-TECHS/PDF13.html" title="WCAG 2.0 technique: PDF13: Providing replacement text using the /Alt entry for links in PDF documents" aria-label="WCAG 2.0 technique: PDF13: Providing replacement text using the /Alt entry for links in PDF documents"><abbr>PDF13</abbr></a>.

### Lists

Lists use the appropriate “tags” (examples: L, LI, Lbl and LBody).

See the associated WCAG criterion <a hreflang="en" href="https://www.w3.org/TR/WCAG20-TECHS/PDF21.html" title="WCAG 2.0 technique: PDF21: Using List tags for lists in PDF documents" aria-label="WCAG 2.0 technique: PDF21: Using List tags for lists in PDF documents"><abbr>PDF21</abbr></a>.

### Forms

* Form fields must have a name, a role, a value, and a state (if needed). 
* Visually, labels must be correctly positioned towards the field. 
* Mandatory fields and expected formats must be indicated. 
* Fields must be accessible and keyboard-modifiable. 
* Forms that can be submitted must provide a submit button.

See associated WCAG criteria  <a hreflang="en" href="https://www.w3.org/TR/WCAG20-TECHS/PDF5.html" title="WCAG 2.0 technique: PDF5: Indicating required form controls in PDF forms" aria-label="WCAG 2.0 technique: PDF5: Indicating required form controls in PDF forms"><abbr>PDF5</abbr></a>, <a hreflang="en" href="https://www.w3.org/TR/WCAG20-TECHS/PDF10.html" title="WCAG 2.0 technique: PDF10: Providing labels for interactive form controls in PDF documents" aria-label="WCAG 2.0 technique: PDF10: Providing labels for interactive form controls in PDF documents"><abbr>PDF10</abbr></a>, <a hreflang="en" href="https://www.w3.org/TR/WCAG20-TECHS/PDF12.html" title="WCAG 2.0 technique: PDF12: Providing name, role, value information for form fields in PDF documents" aria-label="WCAG 2.0 technique: PDF12: Providing name, role, value information for form fields in PDF documents"><abbr>PDF12</abbr></a>, <a hreflang="en" href="https://www.w3.org/TR/WCAG20-TECHS/PDF15.html" title="WCAG 2.0 technique: PDF15: Providing submit buttons with the submit-form action in PDF forms" aria-label="WCAG 2.0 technique: PDF15: Providing submit buttons with the submit-form action in PDF forms"><abbr>PDF15</abbr></a>, <a hreflang="en" href="https://www.w3.org/TR/WCAG20-TECHS/PDF22.html" title="WCAG 2.0 technique: PDF22: Indicating when user input falls outside the required format or values in PDF forms" aria-label="WCAG 2.0 technique: PDF22: Indicating when user input falls outside the required format or values in PDF forms"><abbr>PDF22</abbr></a>.

### Colours

Make sure [color is not the only means used to convey information](/en/web/design/colors-and-contrasts/#do-not-use-colour-or-sensory-characteristics-as-the-unique-source-of-information).
Ensure a level of [sufficient contrast between the color of the text and that of the background](/en/web/design/colors-and-contrasts/#make-sure-there-is-enough-contrast-between-font-and-background-colors). This is valid for your texts but also for icons, buttons and other graphic elements. Contrast can be checked using the tool [Color Contrast Analyser](https://www.paciellogroup.com/resources/contrastanalyser/) for example:
* 4.5:1 for normal size text.
* 3:1 for [large text](/en/glossary/#large-text) and interface components or graphical elements that convey information.

## Testing the accessibility of a PDF document

Finally, you can ask to [download the Allyant PDF Validator](https://allyant.com/free-pdf-accessibility-checker-validator/) or [install the PDF Accessibility Checker (PAC)](https://pac.pdf-accessibility.org/en/download).
These softwares allow the execution of automatic tests on a PDF document and the detection of accessibility problems:
* test the document properties,
* check the markup of lists and links, forms and tables.

<img  src="/en/content-and-communication/images/pac1.png" alt=""/>
