# Creating accessible <abbr>PDF</abbr> documents
<script>$(document).ready(function () {
    setBreadcrumb([{"label":"PDF recommendations"}]);
});</script>

<style>h3 {font-size: 1rem;}</style>

## Introduction

Producing accessible <abbr>PDF</abbr> documents requires to follow recommendations to make sure they are structured through proper tagging, to make them understandable and useable by everyone (including users with assistive technology).

Below are listed guides aiming at providing necessary information in order to manually create accessible <abbr>PDF</abbr> documents based on the most popular softwares, then we will list the mandatory criteria to follow for <abbr>PDF</abbr> accessibility.

## Guides to create accessible <abbr>PDF</abbr> documents

### With Microsoft Word

You will find Microsoft Word recommendations as well as the <abbr>PDF</abbr> export procedure on our <a href="/others_EN/word.html">Creating accessible Word documents</a> page.

### With Adobe InDesign

You will find Adobe InDesign recommendations (in French) at <a href="http://www.pdf-accessible.com/notices-accessibilite-indesign-acrobat/#indesign" lang="fr" hreflang="fr">Créer des documents <abbr>PDF</abbr> accessibles avec Adobe Indesign</a> by the AcceDe <abbr>PDF</abbr> initiative.

This document was produced by AcceDe <abbr>PDF</abbr> phase 1 (2011), driven by Atalan together with 9 enterprises: Spie, Air Liquide, Société Générale, <abbr>BNP</abbr> Paribas, Areva, <abbr>LVMH</abbr>, Capgemini, Thales et <abbr>SNCF</abbr>, who relied on a review team made up of numerous professionals and organisations involved in digital accessibility.

### With Adobe Acrobat Pro

You will find Adobe Acrobat Pro recommendations at <a href="http://www.pdf-accessible.com/wp-content/uploads/2015/01/making-PDF-accessible-Acrobat.pdf">Making <abbr>PDF</abbr> documents accessible with Adobe Acrobat Pro</a> by the AcceDe <abbr>PDF</abbr> initiative.

This document was produced by AcceDe <abbr>PDF</abbr> phase 2 (2015), driven by Atalan together with Orange and 9 other enterprises: La Poste, Siemens, Spie, Thales, Atos, <abbr>BNP</abbr> Paribas, Devoteam, Manpower and <abbr>EDF</abbr>, who relied on a review team made up of numerous professionals and organisations involved in digital accessibility.

## Mandatory criteria

The following are the main criteria for a <abbr>PDF</abbr> document to be accessible, regardless of the method used to create it. Mandatory criteria will be useful for people creating <abbr>PDF</abbr> documents even when they don’t rely on publication software (Microsoft Word, Adobe InDesign, Adobe Acrobat Pro), e.g. developers whose applications generate <abbr>PDF</abbr> documents.

### Document structure

Le document doit contenir a minima un titre de document et une langue par défaut (les changements de langues seront indiqués dans le document).

The document must at the very least include a document title and a default language (language changes must be indicated in the document).

See <a hreflang="en" href="https://www.w3.org/TR/WCAG20-TECHS/PDF16.html" title="WCAG 2.0 technique: PDF16: Setting the default language using the /Lang entry in the document catalog of a PDF document" aria-label="WCAG 2.0 technique: PDF16: Setting the default language using the /Lang entry in the document catalog of a PDF document"><abbr>PDF16</abbr></a>, <a hreflang="en" href="https://www.w3.org/TR/WCAG20-TECHS/PDF17.html" title="WCAG 2.0 technique: PDF17: Specifying consistent page numbering for PDF documents" aria-label="WCAG 2.0 technique: PDF17: Specifying consistent page numbering for PDF documents"><abbr>PDF17</abbr></a>, <a hreflang="en" href="https://www.w3.org/TR/WCAG20-TECHS/PDF18.html" title="WCAG 2.0 technique: PDF18: Specifying the document title using the Title entry in the document information dictionary of a PDF document" aria-label="WCAG 2.0 technique: PDF18: Specifying the document title using the Title entry in the document information dictionary of a PDF document"><abbr>PDF18</abbr></a>.

The document is structured with titles, through the proper use of title “tags”. Moreover, long documents must include bookmarks to make navigation easier.

See <a hreflang="en" href="https://www.w3.org/TR/WCAG20-TECHS/PDF2.html" title="WCAG 2.0 technique: PDF2: Creating bookmarks in PDF documents" aria-label="WCAG 2.0 technique: PDF2: Creating bookmarks in PDF documents"><abbr>PDF2</abbr></a>, <a hreflang="en" href="https://www.w3.org/TR/WCAG20-TECHS/PDF9.html" title="WCAG 2.0 technique: PDF9: Providing headings by marking content with heading tags in PDF documents" aria-label="WCAG 2.0 technique: PDF9: Providing headings by marking content with heading tags in PDF documents"><abbr>PDF9</abbr></a>.

The use of headers and footers must help the user locating themselves in the document.

See <a hreflang="en" href="https://www.w3.org/TR/WCAG20-TECHS/PDF14.html" title="WCAG 2.0 technique: PDF14: Providing running headers and footers in PDF documents" aria-label="WCAG 2.0 technique: PDF14: Providing running headers and footers in PDF documents"><abbr>PDF14</abbr></a>.

### Keyboard navigation and reading order

The reading order conveyed by an assistive tool, as well as keyboard navigation (through tabbing) must reflect the document’s structure. There must be no keyboard trap (keybaord navigation must be possible in the whole document without any blocking point).

See <a hreflang="en" href="https://www.w3.org/TR/WCAG20-TECHS/PDF3.html" title="WCAG 2.0 technique: PDF3: Ensuring correct tab and reading order in PDF documents" aria-label="WCAG 2.0 technique: PDF3: Ensuring correct tab and reading order in PDF documents"><abbr>PDF3</abbr></a>, <a hreflang="en" href="https://www.w3.org/TR/WCAG20-TECHS/G21.html" title="WCAG 2.0 technique: G21: Ensuring that users are not trapped in content" aria-label="WCAG 2.0 technique: G21: Ensuring that users are not trapped in content"><abbr>G21</abbr></a>.

### Images

Images featuring information must have an appropriate alternative. Scanned documents must be covnerted to text through optical character recognition (<abbr>OCR</abbr>). Decorational images must be hidden.

See <a hreflang="en" href="https://www.w3.org/TR/WCAG20-TECHS/PDF1.html" title="WCAG 2.0 technique: PDF1: Applying text alternatives to images with the Alt entry in PDF documents" aria-label="WCAG 2.0 technique: PDF1: Applying text alternatives to images with the Alt entry in PDF documents"><abbr>PDF1</abbr></a>, <a hreflang="en" href="https://www.w3.org/TR/WCAG20-TECHS/PDF4.html" title="WCAG 2.0 technique: PDF4: Hiding decorative images with the Artifact tag in PDF documents" aria-label="WCAG 2.0 technique: PDF4: Hiding decorative images with the Artifact tag in PDF documents"><abbr>PDF4</abbr></a>, <a hreflang="en" href="https://www.w3.org/TR/WCAG20-TECHS/PDF7.html" title="WCAG 2.0 technique: PDF7: Performing OCR on a scanned PDF document to provide actual text" aria-label="WCAG 2.0 technique: PDF7: Performing OCR on a scanned PDF document to provide actual text"><abbr>PDF7</abbr></a>.

### Tables

A data table must be structured by a `table` “tag” containing at least one line. Table headers must be used appropriately. All lines must contain the same number of cells. Merged cells must clearly indicate if the merge was vertical or horizontal (`rowSpan` or `colSpan` attribute).

See<a hreflang="en" href="https://www.w3.org/TR/WCAG20-TECHS/PDF6.html" title="WCAG 2.0 technique: PDF6: Using table elements for table markup in PDF Documents" aria-label="WCAG 2.0 technique: PDF6: Using table elements for table markup in PDF Documents"><abbr>PDF6</abbr></a>.

### Links

Link texts must be explicit, or the links must provide an accessible alternative.

See <a hreflang="en" href="https://www.w3.org/TR/WCAG20-TECHS/PDF11.html" title="WCAG 2.0 technique: PDF11: Providing links and link text using the Link annotation and the /Link structure element in PDF documents" aria-label="WCAG 2.0 technique: PDF11: Providing links and link text using the Link annotation and the /Link structure element in PDF documents"><abbr>PDF11</abbr></a>, <a hreflang="en" href="https://www.w3.org/TR/WCAG20-TECHS/PDF13.html" title="WCAG 2.0 technique: PDF13: Providing replacement text using the /Alt entry for links in PDF documents" aria-label="WCAG 2.0 technique: PDF13: Providing replacement text using the /Alt entry for links in PDF documents"><abbr>PDF13</abbr></a>.

### Lists

Lists must use the appropriate “tags”: list tag `L`, list item tag `LI`, list item label tag `Lbl` (for instance the item number, or the `Lbody` content tag of the list item).

See <a hreflang="en" href="https://www.w3.org/TR/WCAG20-TECHS/PDF21.html" title="WCAG 2.0 technique: PDF21: Using List tags for lists in PDF documents" aria-label="WCAG 2.0 technique: PDF21: Using List tags for lists in PDF documents"><abbr>PDF21</abbr></a>, section 14.8.4.3.3 of the <a href="http://www.adobe.com/devnet/pdf/pdf_reference.html"><abbr>PDF</abbr> specification</a>.

### Forms

Form fields must have a name, a role, a value, and a state (if needed). Visually, labels must be correctly positioned towards the field. Mandatory fields and expected formats must be indicated. Fields must be accessible and keyboard-modifiable. Forms that can be submitted must provide a submit button.

See <a hreflang="en" href="https://www.w3.org/TR/WCAG20-TECHS/PDF5.html" title="WCAG 2.0 technique: PDF5: Indicating required form controls in PDF forms" aria-label="WCAG 2.0 technique: PDF5: Indicating required form controls in PDF forms"><abbr>PDF5</abbr></a>, <a hreflang="en" href="https://www.w3.org/TR/WCAG20-TECHS/PDF10.html" title="WCAG 2.0 technique: PDF10: Providing labels for interactive form controls in PDF documents" aria-label="WCAG 2.0 technique: PDF10: Providing labels for interactive form controls in PDF documents"><abbr>PDF10</abbr></a>, <a hreflang="en" href="https://www.w3.org/TR/WCAG20-TECHS/PDF12.html" title="WCAG 2.0 technique: PDF12: Providing name, role, value information for form fields in PDF documents" aria-label="WCAG 2.0 technique: PDF12: Providing name, role, value information for form fields in PDF documents"><abbr>PDF12</abbr></a>, <a hreflang="en" href="https://www.w3.org/TR/WCAG20-TECHS/PDF15.html" title="WCAG 2.0 technique: PDF15: Providing submit buttons with the submit-form action in PDF forms" aria-label="WCAG 2.0 technique: PDF15: Providing submit buttons with the submit-form action in PDF forms"><abbr>PDF15</abbr></a>, <a hreflang="en" href="https://www.w3.org/TR/WCAG20-TECHS/PDF22.html" title="WCAG 2.0 technique: PDF22: Indicating when user input falls outside the required format or values in PDF forms" aria-label="WCAG 2.0 technique: PDF22: Indicating when user input falls outside the required format or values in PDF forms"><abbr>PDF22</abbr></a>.

### Colours

Colours must not be the only means to convey information.

Contrast between the colour of text and of its background must be sufficient:
- 4.5:1 for normal-size text;
- 3:1 for bigger text.

## Testing the accessibility of a <abbr>PDF</abbr> document

Install <a href="http://www.access-for-all.ch/en/pdf-lab/pdf-accessibility-checker-pac.html"><abbr>PDF</abbr> Accessibility Checker (<abbr>PAC 2</abbr>)</a>. 

This tool can, among other things:

- run automatic tests on a <abbr>PDF</abbr> document and check for accessibility issues,
<figure>
<img class="center" src="/others/images/pac1.png" alt="Screenshot of automatic tests in PAC 2"/>
<figcaption>Results of automatic tests</figcaption>
</figure>
<figure>
<img class="center" src="/others/images/pac2.png" alt="Screenshot of an error detail in PAC 2"/>
<figcaption>Detail of an automatically detected issue</figcaption>
</figure>
- pre-visualise the document the way it will be presented to assistive tools, so as to check the reading order and the semantics used (title, paragraph, …),
<div><img class="center" src="/others/images/pac3.png" alt=""/></div>
- give access to a detailed view of the accessible information given to an assistive tool.
<div><img class="center" src="/others/images/pac4.png" alt=""/></div>