
var index = lunr(function () {
    this.field('body');
    this.ref('url');
});

var documentTitles = {};



documentTitles["about.html#about"] = "About";
index.add({
    url: "about.html#about",
    title: "About",    
    body: "# About     &lt;script&gt;$(document).ready(function () {     setBreadcrumb([{\&quot;label\&quot;:\&quot;About\&quot;}]); });&lt;/script&gt;  Documentation under the [CC BY SA 3.0 license](https://github.com/Orange-OpenSource/a11y-guidelines/blob/master/LICENSE), source code of this site and examples are available [on github](https://github.com/Orange-OpenSource/a11y-guidelines).    The Orange logo and some images or screenshots are the property of Orange:  Copyright (C) 2016 Orange SA All rights reserved   [List of the concerned files](/NOTICE.txt)  "
});

documentTitles["about.html#cookie-management"] = "Cookie management";
index.add({
    url: "about.html#cookie-management",
    title: "Cookie management",    
    body: "## Cookie management  You can change your preferences at any time directly from the &lt;a role=\&quot;button\&quot; href=\&quot;javascript:tarteaucitron.userInterface.openPanel();\&quot;&gt;Cookie Management Panel&lt;/a&gt;.  &amp;nbsp; &lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2016  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt;"
});



documentTitles["contact.html#your-opinion-matters"] = "Your opinion matters ...";
index.add({
    url: "contact.html#your-opinion-matters",
    title: "Your opinion matters ...",    
    body: "# Your opinion matters ...    &lt;script&gt;$(document).ready(function () {     setBreadcrumb([{\&quot;label\&quot;:\&quot;Contact\&quot;}]); });&lt;/script&gt;  Have a bug or a feature request?    Please first check [the issues](https://github.com/Orange-OpenSource/a11y-guidelines/issues) and search for existing and closed issues. If your problem or idea is not addressed yet, please [open a new issue](https://github.com/Orange-OpenSource/a11y-guidelines/issues/new).  &amp;nbsp; &lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2016  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt;"
});



documentTitles["editorial.html#general-recommendations-for-content"] = "General recommendations for content";
index.add({
    url: "editorial.html#general-recommendations-for-content",
    title: "General recommendations for content",    
    body: "# General recommendations for content &lt;script&gt;$(document).ready(function () {     setBreadcrumb([{\&quot;label\&quot;:\&quot;General recommendations for content\&quot;}]); });&lt;/script&gt;  &lt;style&gt;h3 {font-size: 1rem;}&lt;/style&gt;  "
});

documentTitles["editorial.html#introduction"] = "Introduction";
index.add({
    url: "editorial.html#introduction",
    title: "Introduction",    
    body: "## Introduction This section proposes general recommendations to ensure your contents are accessible whatever the medium used (email, Web, Word, etc.).  "
});

documentTitles["editorial.html#check-colours"] = "Check colours";
index.add({
    url: "editorial.html#check-colours",
    title: "Check colours",    
    body: "## Check colours  - Make sure colour is not the only means used to convey information. - Make sure there is sufficient contrast between the text colour and the background.  The contrast can be checked with &lt;a href=\&quot;https://www.paciellogroup.com/resources/contrastanalyser/\&quot; hreflang=\&quot;en\&quot; lang=\&quot;en\&quot;&gt;Colour Contrast Analyzer&lt;/a&gt;&amp;nbsp;:  - 4.5:1 for normal size text.  - 3:1 for big text.  "
});

documentTitles["editorial.html#facilitate-reading"] = "Facilitate reading";
index.add({
    url: "editorial.html#facilitate-reading",
    title: "Facilitate reading",    
    body: "## Facilitate reading  - Align text to the left, don’t justify it. - Use an easily-readable font family with a minimum size of 12 pixels. - Use simple punctuation. - Avoid italics, completely capitalised sentences; but always put a capital at the beginning of a sentence. - Avoid textured backgrounds (images). - Do not do too many repeated carriage returns or tabs to space contents (rather, use “Paragraph&amp;nbsp;&amp;gt; Spacing” or “Indent” in Word for instance). - Avoid layout and data tables. - Avoid information-conveying content in images (graphs, schemas, diagrams,…) - Signal the end of the document (for instance, an image saying “End of email”, or a white-on-white text “End of document”). - Use simple, clear and short phrase turns: subject, verb, complement. One idea per sentence, with simple words. - Explain complicated words. - Use the present tense, preferably direct style, and active form (no subjunctive, no conjunctions). - Use proper typographic characters: dash -, em-dash —, “rounded quotes”. &lt;!-- removed 1 line re: accents and caps – not relevant in English --&gt;  - Avoid foreign words, abbreviations except those that are genuinely used.  "
});

documentTitles["editorial.html#provide-accessible-layout-tables"] = "Provide accessible layout tables";
index.add({
    url: "editorial.html#provide-accessible-layout-tables",
    title: "Provide accessible layout tables",    
    body: "## Provide accessible layout tables  Simplify tables, even if we know that email clients (including Outlook) still often demand to use tables for layout.  Checkpoints:  - In general, don’t do complex table layouts (merging cells, multicolumn,…). - Avoid embedding layout tables (maximum two levels of embedding), but also: - Don’t merge table cells, but use several simpler tables. - Don’t keep empty cells. - Don’t add background images. - Make sure that the sequential order is correct (one can read left to right and top to bottom). - Avoid complex data tables, graphs or schemas.  &amp;nbsp; &lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2016  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt;"
});



documentTitles["index.html#accessibility-recommendations-orange-for-content"] = "Accessibility recommendations Orange for content";
index.add({
    url: "index.html#accessibility-recommendations-orange-for-content",
    title: "Accessibility recommendations Orange for content",    
    body: "# Accessibility recommendations Orange for content  &lt;script&gt;$(document).ready(function () {     setBreadcrumb([{\&quot;label\&quot;:\&quot;Presentation\&quot;}]); });&lt;/script&gt;  "
});

documentTitles["index.html#general-recommendations-for-content"] = "General recommendations for content";
index.add({
    url: "index.html#general-recommendations-for-content",
    title: "General recommendations for content",    
    body: "## General recommendations for content The general recommendations describe the recommendations to respect whatever the type of content (web, email, Word document, etc.). &lt;ul role=\&quot;presentation\&quot;&gt; &lt;li&gt;&lt;a href=\&quot;./editorial.html\&quot;&gt;Access to general recommendations for content&lt;/a&gt;&lt;/li&gt; &lt;/ul&gt;  "
});

documentTitles["index.html#specific-recommendations-by-type-of-content"] = "Specific recommendations by type of content";
index.add({
    url: "index.html#specific-recommendations-by-type-of-content",
    title: "Specific recommendations by type of content",    
    body: "## Specific recommendations by type of content The following recommendations describe the specific rules to be followed depending on the type of document:  - [Microsoft Word](./word.html)&amp;nbsp;  - [Microsoft PowerPoint](./powerpoint.html)&amp;nbsp;  - [PDF documents](./pdf.html)&amp;nbsp;  - [Videos, audios, and animated components](./video.html)&amp;nbsp;  &amp;nbsp; &lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2016  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt;"
});



documentTitles["pdf.html#creating-accessible-abbrpdfabbr-documents"] = "Creating accessible &lt;abbr&gt;PDF&lt;/abbr&gt; documents";
index.add({
    url: "pdf.html#creating-accessible-abbrpdfabbr-documents",
    title: "Creating accessible &lt;abbr&gt;PDF&lt;/abbr&gt; documents",    
    body: "# Creating accessible &lt;abbr&gt;PDF&lt;/abbr&gt; documents &lt;script&gt;$(document).ready(function () {     setBreadcrumb([{\&quot;label\&quot;:\&quot;PDF recommendations\&quot;}]); });&lt;/script&gt;  &lt;style&gt;h3 {font-size: 1rem;}&lt;/style&gt;  "
});

documentTitles["pdf.html#introduction"] = "Introduction";
index.add({
    url: "pdf.html#introduction",
    title: "Introduction",    
    body: "## Introduction  Producing accessible &lt;abbr&gt;PDF&lt;/abbr&gt; documents requires to follow recommendations to make sure they are structured through proper tagging, to make them understandable and useable by everyone (including users with assistive technology).  Below are listed guides aiming at providing necessary information in order to manually create accessible &lt;abbr&gt;PDF&lt;/abbr&gt; documents based on the most popular softwares, then we will list the mandatory criteria to follow for &lt;abbr&gt;PDF&lt;/abbr&gt; accessibility.  "
});

documentTitles["pdf.html#guides-to-create-accessible-abbrpdfabbr-documents"] = "Guides to create accessible &lt;abbr&gt;PDF&lt;/abbr&gt; documents";
index.add({
    url: "pdf.html#guides-to-create-accessible-abbrpdfabbr-documents",
    title: "Guides to create accessible &lt;abbr&gt;PDF&lt;/abbr&gt; documents",    
    body: "## Guides to create accessible &lt;abbr&gt;PDF&lt;/abbr&gt; documents  "
});

documentTitles["pdf.html#with-microsoft-word"] = "With Microsoft Word";
index.add({
    url: "pdf.html#with-microsoft-word",
    title: "With Microsoft Word",    
    body: "### With Microsoft Word  You will find Microsoft Word recommendations as well as the &lt;abbr&gt;PDF&lt;/abbr&gt; export procedure on our &lt;a href=\&quot;/others_EN/word.html\&quot;&gt;Creating accessible Word documents&lt;/a&gt; page.  "
});

documentTitles["pdf.html#with-adobe-indesign"] = "With Adobe InDesign";
index.add({
    url: "pdf.html#with-adobe-indesign",
    title: "With Adobe InDesign",    
    body: "### With Adobe InDesign  You will find Adobe InDesign recommendations (in French) at &lt;a href=\&quot;http://www.pdf-accessible.com/notices-accessibilite-indesign-acrobat/#indesign\&quot; lang=\&quot;fr\&quot; hreflang=\&quot;fr\&quot;&gt;Créer des documents &lt;abbr&gt;PDF&lt;/abbr&gt; accessibles avec Adobe Indesign&lt;/a&gt; by the AcceDe &lt;abbr&gt;PDF&lt;/abbr&gt; initiative.  This document was produced by AcceDe &lt;abbr&gt;PDF&lt;/abbr&gt; phase 1 (2011), driven by Atalan together with 9 enterprises: Spie, Air Liquide, Société Générale, &lt;abbr&gt;BNP&lt;/abbr&gt; Paribas, Areva, &lt;abbr&gt;LVMH&lt;/abbr&gt;, Capgemini, Thales et &lt;abbr&gt;SNCF&lt;/abbr&gt;, who relied on a review team made up of numerous professionals and organisations involved in digital accessibility.  "
});

documentTitles["pdf.html#with-adobe-acrobat-pro"] = "With Adobe Acrobat Pro";
index.add({
    url: "pdf.html#with-adobe-acrobat-pro",
    title: "With Adobe Acrobat Pro",    
    body: "### With Adobe Acrobat Pro  You will find Adobe Acrobat Pro recommendations at &lt;a href=\&quot;http://www.pdf-accessible.com/wp-content/uploads/2015/01/making-PDF-accessible-Acrobat.pdf\&quot;&gt;Making &lt;abbr&gt;PDF&lt;/abbr&gt; documents accessible with Adobe Acrobat Pro&lt;/a&gt; by the AcceDe &lt;abbr&gt;PDF&lt;/abbr&gt; initiative.  This document was produced by AcceDe &lt;abbr&gt;PDF&lt;/abbr&gt; phase 2 (2015), driven by Atalan together with Orange and 9 other enterprises: La Poste, Siemens, Spie, Thales, Atos, &lt;abbr&gt;BNP&lt;/abbr&gt; Paribas, Devoteam, Manpower and &lt;abbr&gt;EDF&lt;/abbr&gt;, who relied on a review team made up of numerous professionals and organisations involved in digital accessibility.  "
});

documentTitles["pdf.html#testing-the-accessibility-of-a-abbrpdfabbr-document"] = "Testing the accessibility of a &lt;abbr&gt;PDF&lt;/abbr&gt; document";
index.add({
    url: "pdf.html#testing-the-accessibility-of-a-abbrpdfabbr-document",
    title: "Testing the accessibility of a &lt;abbr&gt;PDF&lt;/abbr&gt; document",    
    body: "## Testing the accessibility of a &lt;abbr&gt;PDF&lt;/abbr&gt; document  Install &lt;a href=\&quot;http://www.access-for-all.ch/en/pdf-lab/pdf-accessibility-checker-pac.html\&quot;&gt;&lt;abbr&gt;PDF&lt;/abbr&gt; Accessibility Checker (&lt;abbr&gt;PAC&lt;/abbr&gt;)&lt;/a&gt;.   This tool can, among other things, run automatic tests on a &lt;abbr&gt;PDF&lt;/abbr&gt; document and check for accessibility issues. &lt;figure&gt; &lt;img class=\&quot;center\&quot; src=\&quot;/others/images/pac1.png\&quot; alt=\&quot;Screenshot of automatic tests in PAC\&quot;/&gt; &lt;figcaption&gt;Screenshot of the tool&lt;/figcaption&gt; &lt;/figure&gt;  "
});

documentTitles["pdf.html#mandatory-criteria"] = "Mandatory criteria";
index.add({
    url: "pdf.html#mandatory-criteria",
    title: "Mandatory criteria",    
    body: "## Mandatory criteria  The following are the main criteria for a &lt;abbr&gt;PDF&lt;/abbr&gt; document to be accessible, regardless of the method used to create it. Mandatory criteria will be useful for people creating &lt;abbr&gt;PDF&lt;/abbr&gt; documents even when they don’t rely on publication software (Microsoft Word, Adobe InDesign, Adobe Acrobat Pro), e.g. developers whose applications generate &lt;abbr&gt;PDF&lt;/abbr&gt; documents.  "
});

documentTitles["pdf.html#document-structure"] = "Document structure";
index.add({
    url: "pdf.html#document-structure",
    title: "Document structure",    
    body: "### Document structure  Le document doit contenir a minima un titre de document et une langue par défaut (les changements de langues seront indiqués dans le document).  The document must at the very least include a document title and a default language (language changes must be indicated in the document).  See &lt;a hreflang=\&quot;en\&quot; href=\&quot;https://www.w3.org/TR/WCAG20-TECHS/PDF16.html\&quot; title=\&quot;WCAG 2.0 technique: PDF16: Setting the default language using the /Lang entry in the document catalog of a PDF document\&quot; aria-label=\&quot;WCAG 2.0 technique: PDF16: Setting the default language using the /Lang entry in the document catalog of a PDF document\&quot;&gt;&lt;abbr&gt;PDF16&lt;/abbr&gt;&lt;/a&gt;, &lt;a hreflang=\&quot;en\&quot; href=\&quot;https://www.w3.org/TR/WCAG20-TECHS/PDF17.html\&quot; title=\&quot;WCAG 2.0 technique: PDF17: Specifying consistent page numbering for PDF documents\&quot; aria-label=\&quot;WCAG 2.0 technique: PDF17: Specifying consistent page numbering for PDF documents\&quot;&gt;&lt;abbr&gt;PDF17&lt;/abbr&gt;&lt;/a&gt;, &lt;a hreflang=\&quot;en\&quot; href=\&quot;https://www.w3.org/TR/WCAG20-TECHS/PDF18.html\&quot; title=\&quot;WCAG 2.0 technique: PDF18: Specifying the document title using the Title entry in the document information dictionary of a PDF document\&quot; aria-label=\&quot;WCAG 2.0 technique: PDF18: Specifying the document title using the Title entry in the document information dictionary of a PDF document\&quot;&gt;&lt;abbr&gt;PDF18&lt;/abbr&gt;&lt;/a&gt;.  The document is structured with titles, through the proper use of title “tags”. Moreover, long documents must include bookmarks to make navigation easier.  See &lt;a hreflang=\&quot;en\&quot; href=\&quot;https://www.w3.org/TR/WCAG20-TECHS/PDF2.html\&quot; title=\&quot;WCAG 2.0 technique: PDF2: Creating bookmarks in PDF documents\&quot; aria-label=\&quot;WCAG 2.0 technique: PDF2: Creating bookmarks in PDF documents\&quot;&gt;&lt;abbr&gt;PDF2&lt;/abbr&gt;&lt;/a&gt;, &lt;a hreflang=\&quot;en\&quot; href=\&quot;https://www.w3.org/TR/WCAG20-TECHS/PDF9.html\&quot; title=\&quot;WCAG 2.0 technique: PDF9: Providing headings by marking content with heading tags in PDF documents\&quot; aria-label=\&quot;WCAG 2.0 technique: PDF9: Providing headings by marking content with heading tags in PDF documents\&quot;&gt;&lt;abbr&gt;PDF9&lt;/abbr&gt;&lt;/a&gt;.  The use of headers and footers must help the user locating themselves in the document.  See &lt;a hreflang=\&quot;en\&quot; href=\&quot;https://www.w3.org/TR/WCAG20-TECHS/PDF14.html\&quot; title=\&quot;WCAG 2.0 technique: PDF14: Providing running headers and footers in PDF documents\&quot; aria-label=\&quot;WCAG 2.0 technique: PDF14: Providing running headers and footers in PDF documents\&quot;&gt;&lt;abbr&gt;PDF14&lt;/abbr&gt;&lt;/a&gt;.  "
});

documentTitles["pdf.html#keyboard-navigation-and-reading-order"] = "Keyboard navigation and reading order";
index.add({
    url: "pdf.html#keyboard-navigation-and-reading-order",
    title: "Keyboard navigation and reading order",    
    body: "### Keyboard navigation and reading order  The reading order conveyed by an assistive tool, as well as keyboard navigation (through tabbing) must reflect the document’s structure. There must be no keyboard trap (keybaord navigation must be possible in the whole document without any blocking point).  See &lt;a hreflang=\&quot;en\&quot; href=\&quot;https://www.w3.org/TR/WCAG20-TECHS/PDF3.html\&quot; title=\&quot;WCAG 2.0 technique: PDF3: Ensuring correct tab and reading order in PDF documents\&quot; aria-label=\&quot;WCAG 2.0 technique: PDF3: Ensuring correct tab and reading order in PDF documents\&quot;&gt;&lt;abbr&gt;PDF3&lt;/abbr&gt;&lt;/a&gt;, &lt;a hreflang=\&quot;en\&quot; href=\&quot;https://www.w3.org/TR/WCAG20-TECHS/G21.html\&quot; title=\&quot;WCAG 2.0 technique: G21: Ensuring that users are not trapped in content\&quot; aria-label=\&quot;WCAG 2.0 technique: G21: Ensuring that users are not trapped in content\&quot;&gt;&lt;abbr&gt;G21&lt;/abbr&gt;&lt;/a&gt;.  "
});

documentTitles["pdf.html#images"] = "Images";
index.add({
    url: "pdf.html#images",
    title: "Images",    
    body: "### Images  Images featuring information must have an appropriate alternative. Scanned documents must be covnerted to text through optical character recognition (&lt;abbr&gt;OCR&lt;/abbr&gt;). Decorational images must be hidden.  See &lt;a hreflang=\&quot;en\&quot; href=\&quot;https://www.w3.org/TR/WCAG20-TECHS/PDF1.html\&quot; title=\&quot;WCAG 2.0 technique: PDF1: Applying text alternatives to images with the Alt entry in PDF documents\&quot; aria-label=\&quot;WCAG 2.0 technique: PDF1: Applying text alternatives to images with the Alt entry in PDF documents\&quot;&gt;&lt;abbr&gt;PDF1&lt;/abbr&gt;&lt;/a&gt;, &lt;a hreflang=\&quot;en\&quot; href=\&quot;https://www.w3.org/TR/WCAG20-TECHS/PDF4.html\&quot; title=\&quot;WCAG 2.0 technique: PDF4: Hiding decorative images with the Artifact tag in PDF documents\&quot; aria-label=\&quot;WCAG 2.0 technique: PDF4: Hiding decorative images with the Artifact tag in PDF documents\&quot;&gt;&lt;abbr&gt;PDF4&lt;/abbr&gt;&lt;/a&gt;, &lt;a hreflang=\&quot;en\&quot; href=\&quot;https://www.w3.org/TR/WCAG20-TECHS/PDF7.html\&quot; title=\&quot;WCAG 2.0 technique: PDF7: Performing OCR on a scanned PDF document to provide actual text\&quot; aria-label=\&quot;WCAG 2.0 technique: PDF7: Performing OCR on a scanned PDF document to provide actual text\&quot;&gt;&lt;abbr&gt;PDF7&lt;/abbr&gt;&lt;/a&gt;.  "
});

documentTitles["pdf.html#tables"] = "Tables";
index.add({
    url: "pdf.html#tables",
    title: "Tables",    
    body: "### Tables  A data table must be structured by a `table` “tag” containing at least one line. Table headers must be used appropriately. All lines must contain the same number of cells. Merged cells must clearly indicate if the merge was vertical or horizontal (`rowSpan` or `colSpan` attribute).  See&lt;a hreflang=\&quot;en\&quot; href=\&quot;https://www.w3.org/TR/WCAG20-TECHS/PDF6.html\&quot; title=\&quot;WCAG 2.0 technique: PDF6: Using table elements for table markup in PDF Documents\&quot; aria-label=\&quot;WCAG 2.0 technique: PDF6: Using table elements for table markup in PDF Documents\&quot;&gt;&lt;abbr&gt;PDF6&lt;/abbr&gt;&lt;/a&gt;.  "
});

documentTitles["pdf.html#links"] = "Links";
index.add({
    url: "pdf.html#links",
    title: "Links",    
    body: "### Links  Link texts must be explicit, or the links must provide an accessible alternative.  See &lt;a hreflang=\&quot;en\&quot; href=\&quot;https://www.w3.org/TR/WCAG20-TECHS/PDF11.html\&quot; title=\&quot;WCAG 2.0 technique: PDF11: Providing links and link text using the Link annotation and the /Link structure element in PDF documents\&quot; aria-label=\&quot;WCAG 2.0 technique: PDF11: Providing links and link text using the Link annotation and the /Link structure element in PDF documents\&quot;&gt;&lt;abbr&gt;PDF11&lt;/abbr&gt;&lt;/a&gt;, &lt;a hreflang=\&quot;en\&quot; href=\&quot;https://www.w3.org/TR/WCAG20-TECHS/PDF13.html\&quot; title=\&quot;WCAG 2.0 technique: PDF13: Providing replacement text using the /Alt entry for links in PDF documents\&quot; aria-label=\&quot;WCAG 2.0 technique: PDF13: Providing replacement text using the /Alt entry for links in PDF documents\&quot;&gt;&lt;abbr&gt;PDF13&lt;/abbr&gt;&lt;/a&gt;.  "
});

documentTitles["pdf.html#lists"] = "Lists";
index.add({
    url: "pdf.html#lists",
    title: "Lists",    
    body: "### Lists  Lists must use the appropriate “tags”: list tag `L`, list item tag `LI`, list item label tag `Lbl` (for instance the item number, or the `Lbody` content tag of the list item).  See &lt;a hreflang=\&quot;en\&quot; href=\&quot;https://www.w3.org/TR/WCAG20-TECHS/PDF21.html\&quot; title=\&quot;WCAG 2.0 technique: PDF21: Using List tags for lists in PDF documents\&quot; aria-label=\&quot;WCAG 2.0 technique: PDF21: Using List tags for lists in PDF documents\&quot;&gt;&lt;abbr&gt;PDF21&lt;/abbr&gt;&lt;/a&gt;, section 14.8.4.3.3 of the &lt;a href=\&quot;http://www.adobe.com/devnet/pdf/pdf_reference.html\&quot;&gt;&lt;abbr&gt;PDF&lt;/abbr&gt; specification&lt;/a&gt;.  "
});

documentTitles["pdf.html#forms"] = "Forms";
index.add({
    url: "pdf.html#forms",
    title: "Forms",    
    body: "### Forms  Form fields must have a name, a role, a value, and a state (if needed). Visually, labels must be correctly positioned towards the field. Mandatory fields and expected formats must be indicated. Fields must be accessible and keyboard-modifiable. Forms that can be submitted must provide a submit button.  See &lt;a hreflang=\&quot;en\&quot; href=\&quot;https://www.w3.org/TR/WCAG20-TECHS/PDF5.html\&quot; title=\&quot;WCAG 2.0 technique: PDF5: Indicating required form controls in PDF forms\&quot; aria-label=\&quot;WCAG 2.0 technique: PDF5: Indicating required form controls in PDF forms\&quot;&gt;&lt;abbr&gt;PDF5&lt;/abbr&gt;&lt;/a&gt;, &lt;a hreflang=\&quot;en\&quot; href=\&quot;https://www.w3.org/TR/WCAG20-TECHS/PDF10.html\&quot; title=\&quot;WCAG 2.0 technique: PDF10: Providing labels for interactive form controls in PDF documents\&quot; aria-label=\&quot;WCAG 2.0 technique: PDF10: Providing labels for interactive form controls in PDF documents\&quot;&gt;&lt;abbr&gt;PDF10&lt;/abbr&gt;&lt;/a&gt;, &lt;a hreflang=\&quot;en\&quot; href=\&quot;https://www.w3.org/TR/WCAG20-TECHS/PDF12.html\&quot; title=\&quot;WCAG 2.0 technique: PDF12: Providing name, role, value information for form fields in PDF documents\&quot; aria-label=\&quot;WCAG 2.0 technique: PDF12: Providing name, role, value information for form fields in PDF documents\&quot;&gt;&lt;abbr&gt;PDF12&lt;/abbr&gt;&lt;/a&gt;, &lt;a hreflang=\&quot;en\&quot; href=\&quot;https://www.w3.org/TR/WCAG20-TECHS/PDF15.html\&quot; title=\&quot;WCAG 2.0 technique: PDF15: Providing submit buttons with the submit-form action in PDF forms\&quot; aria-label=\&quot;WCAG 2.0 technique: PDF15: Providing submit buttons with the submit-form action in PDF forms\&quot;&gt;&lt;abbr&gt;PDF15&lt;/abbr&gt;&lt;/a&gt;, &lt;a hreflang=\&quot;en\&quot; href=\&quot;https://www.w3.org/TR/WCAG20-TECHS/PDF22.html\&quot; title=\&quot;WCAG 2.0 technique: PDF22: Indicating when user input falls outside the required format or values in PDF forms\&quot; aria-label=\&quot;WCAG 2.0 technique: PDF22: Indicating when user input falls outside the required format or values in PDF forms\&quot;&gt;&lt;abbr&gt;PDF22&lt;/abbr&gt;&lt;/a&gt;.  "
});

documentTitles["pdf.html#colours"] = "Colours";
index.add({
    url: "pdf.html#colours",
    title: "Colours",    
    body: "### Colours  Colours must not be the only means to convey information.  Contrast between the colour of text and of its background must be sufficient: - 4.5:1 for normal-size text; - 3:1 for bigger text."
});



documentTitles["powerpoint.html#creating-accessible-powerpoint-documents"] = "Creating accessible PowerPoint documents";
index.add({
    url: "powerpoint.html#creating-accessible-powerpoint-documents",
    title: "Creating accessible PowerPoint documents",    
    body: "# Creating accessible PowerPoint documents &lt;script&gt;$(document).ready(function () {     setBreadcrumb([{\&quot;label\&quot;:\&quot;Accessible PowerPoint\&quot;}]); });&lt;/script&gt;  &lt;style&gt;h3 {font-size: 1rem;}&lt;/style&gt;  "
});

documentTitles["powerpoint.html#introduction"] = "Introduction";
index.add({
    url: "powerpoint.html#introduction",
    title: "Introduction",    
    body: "## Introduction  To produce accessible PowerPoint documents, one has to follow recommendations. Fortunately, PowerPoint comes equipped with a tool to check accessibility. It pinpoints the main issues and suggests solutions to remedy them.  This being said, even after correcting said issues, we realised that some elements (SmartArt, tables, …) were not always correctly vocalised by screen readers. This is why, when your presentation is done, we recommend to export it in PDF before broadcasting the document: the Export option in PowerPoint gives better results with assistive technologies; also it removes animations, which are often a problem for people with vision problems.  "
});

documentTitles["powerpoint.html#recommendations"] = "Recommendations";
index.add({
    url: "powerpoint.html#recommendations",
    title: "Recommendations",    
    body: "## Recommendations  Below you will find a summary of recommendations that provide better accessibility with PowerPoint. For more information, please refer to the guides provided on &lt;a href=\&quot;https://disic.github.io/guides-documents_bureautiques_accessibles/html/\&quot; hreflang=\&quot;fr\&quot;&gt;the &lt;abbr title=\&quot;direction interministérielle du numérique et du système d’information et de communication\&quot; lang=\&quot;fr\&quot;&gt;DINSIC&lt;/abbr&gt; website (in French)&lt;/a&gt;.  Our tests were done using Office 2010 with Jaws 17 and &lt;abbr&gt;NVDA&lt;/abbr&gt; 2017-1. The below recommendations are the result of these tests.  "
});

documentTitles["powerpoint.html#1-use-slide-masks"] = "1. Use slide masks";
index.add({
    url: "powerpoint.html#1-use-slide-masks",
    title: "1. Use slide masks",    
    body: "### 1. Use slide masks  Presentations must be created using slide masks (menu: Display&amp;nbsp;&gt; Slide masks). Then use checkboxes “Title”, “Footers”, and the menu “Insert reserved space”.  "
});

documentTitles["powerpoint.html#2-check-the-reading-order-of-elements"] = "2. Check the reading order of elements";
index.add({
    url: "powerpoint.html#2-check-the-reading-order-of-elements",
    title: "2. Check the reading order of elements",    
    body: "### 2. Check the reading order of elements  The reading order must be checked through the Selection pane (menu Home&amp;nbsp;&gt; Organise&amp;nbsp;&gt; Selection pane). Be careful: the last element in the list is the first read by screen readers: the reading order must thus be from bottom to top in your slide masks.  "
});

documentTitles["powerpoint.html#3-give-a-unique-title-to-each-slide"] = "3. Give a unique title to each slide";
index.add({
    url: "powerpoint.html#3-give-a-unique-title-to-each-slide",
    title: "3. Give a unique title to each slide",    
    body: "### 3. Give a unique title to each slide  Each slide must have a unique title. This must be added in the zone titled “Click to add a title”.  "
});

documentTitles["powerpoint.html#4-provide-replacement-text-for-images"] = "4. Provide replacement text for images";
index.add({
    url: "powerpoint.html#4-provide-replacement-text-for-images",
    title: "4. Provide replacement text for images",    
    body: "### 4. Provide replacement text for images  If the image conveys information, you must provide a replacement text describing its content (right click, Image format&amp;nbsp;&gt; Replacement text&amp;nbsp;&gt; Description field). If the image is strictly for decoration, the Description field must be left empty.   "
});

documentTitles["powerpoint.html#5-make-simple-tables"] = "5. Make simple tables";
index.add({
    url: "powerpoint.html#5-make-simple-tables",
    title: "5. Make simple tables",    
    body: "### 5. Make simple tables  Data tables must stay simple. Avoid blending cells together. Avoid inserting images: they will not be read as table elements but as independent elements which will be read before or after the table according to the internal document’s reading order. Leave no empty cell.  "
});

documentTitles["powerpoint.html#6-use-smartart-rather-than-assembling-text-and-shapes"] = "6. Use SmartArt rather than assembling text and shapes";
index.add({
    url: "powerpoint.html#6-use-smartart-rather-than-assembling-text-and-shapes",
    title: "6. Use SmartArt rather than assembling text and shapes",    
    body: "### 6. Use SmartArt rather than assembling text and shapes  SmartArt enables you to integrate images and text that will be vocalised in the proper order. All SmartArt clips are not correct yet, be careful.  "
});

documentTitles["powerpoint.html#7-add-a-replacement-text-to-graphics"] = "7. Add a replacement text to graphics";
index.add({
    url: "powerpoint.html#7-add-a-replacement-text-to-graphics",
    title: "7. Add a replacement text to graphics",    
    body: "### 7. Add a replacement text to graphics  The content of graphics must be described in the Replacement text for the graphic (Object format&amp;nbsp;&gt; Replacement text&amp;nbsp;&gt; Description).  "
});

documentTitles["powerpoint.html#8-ensure-colour-is-not-the-only-means-to-convey-information"] = "8. Ensure colour is not the only means to convey information";
index.add({
    url: "powerpoint.html#8-ensure-colour-is-not-the-only-means-to-convey-information",
    title: "8. Ensure colour is not the only means to convey information",    
    body: "### 8. Ensure colour is not the only means to convey information  Information given through colour must also be conveyed via another means like shape, position, size…  "
});

documentTitles["powerpoint.html#9-ensure-a-sufficient-contrast"] = "9. Ensure a sufficient contrast";
index.add({
    url: "powerpoint.html#9-ensure-a-sufficient-contrast",
    title: "9. Ensure a sufficient contrast",    
    body: "### 9. Ensure a sufficient contrast  Contrast between the colour of text and of its background must be sufficient: - 4.5:1 for normal-size text; - 3:1 for bigger text.  Contrast can be verified with the &lt;a href=\&quot;https://www.paciellogroup.com/resources/contrastanalyser/\&quot; hreflang=\&quot;en\&quot; lang=\&quot;en\&quot;&gt;Colour Contrast Analyzer&lt;/a&gt;.  "
});

documentTitles["powerpoint.html#10-define-language"] = "10. Define language";
index.add({
    url: "powerpoint.html#10-define-language",
    title: "10. Define language",    
    body: "### 10. Define language  Language must be defined through the menu: File&amp;nbsp;&gt; Options&amp;nbsp;&gt; Language. Words or grops of words in another language must be explicitly described as such (menu: Revision&amp;nbsp;&gt; Language&amp;nbsp;&gt; Define the verification language).  "
});

documentTitles["powerpoint.html#11-use-the-automated-accessibility-checker"] = "11. Use the automated Accessibility checker";
index.add({
    url: "powerpoint.html#11-use-the-automated-accessibility-checker",
    title: "11. Use the automated Accessibility checker",    
    body: "### 11. Use the automated Accessibility checker  PowerPoint provides an Accessibility checker (menu File&amp;nbsp;&gt; Check for problems&amp;nbsp;&gt; Check accessibility). It lists all contents prone to be hard to deal with.  "
});

documentTitles["powerpoint.html#12-exporting-the-presentation-to-abbrpdfabbr"] = "12. Exporting the presentation to &lt;abbr&gt;PDF&lt;/abbr&gt;";
index.add({
    url: "powerpoint.html#12-exporting-the-presentation-to-abbrpdfabbr",
    title: "12. Exporting the presentation to &lt;abbr&gt;PDF&lt;/abbr&gt;",    
    body: "### 12. Exporting the presentation to &lt;abbr&gt;PDF&lt;/abbr&gt;  To export to &lt;abbr&gt;PDF&lt;/abbr&gt; you only need to go to File&amp;nbsp;&gt; Save as. Choose a name and select &lt;abbr&gt;PDF&lt;/abbr&gt; as file type. The first time, make sure that the “Accessibility-friendly document structure tags” checkbox in Export options is checked.  "
});

documentTitles["powerpoint.html#external-resources"] = "External resources";
index.add({
    url: "powerpoint.html#external-resources",
    title: "External resources",    
    body: "## External resources  - &lt;a href=\&quot;https://disic.github.io/guides-documents_bureautiques_accessibles/html/\&quot; hreflang=\&quot;fr\&quot;&gt;Creating accessible office documents (in French)&lt;/a&gt;, &lt;abbr title=\&quot;direction interministérielle du numérique et du système d’information et de communication\&quot; lang=\&quot;fr\&quot;&gt;DINSIC&lt;/abbr&gt;. - &lt;a href=\&quot;https://webaim.org/techniques/powerpoint/\&quot; hreflang=\&quot;en\&quot;&gt;PowerPoint accessibility, WebAIM&lt;/a&gt;.  "
});

documentTitles["powerpoint.html#results-of-our-tests"] = "Results of our tests";
index.add({
    url: "powerpoint.html#results-of-our-tests",
    title: "Results of our tests",    
    body: "## Results of our tests  We tested the behaviour of &lt;abbr&gt;NVDA&lt;/abbr&gt; (version 2017.1) and Jaws (version 17) under Windows with a &lt;abbr&gt;PDF&lt;/abbr&gt; file generated with PowerPoint 2010.  "
});

documentTitles["powerpoint.html#tables"] = "Tables";
index.add({
    url: "powerpoint.html#tables",
    title: "Tables",    
    body: "### Tables  Tables were vocalised correctly with Jaws and &lt;abbr&gt;NVDA&lt;/abbr&gt;.  "
});

documentTitles["powerpoint.html#tables-with-replacement-text"] = "Tables with replacement text";
index.add({
    url: "powerpoint.html#tables-with-replacement-text",
    title: "Tables with replacement text",    
    body: "### Tables with replacement text  &lt;abbr&gt;NVDA&lt;/abbr&gt;: tables were still vocalised, replacement texts were ignored. Jaws: tables were not vocalised any more, replacement texts were ignored.   "
});

documentTitles["powerpoint.html#smartart"] = "SmartArt";
index.add({
    url: "powerpoint.html#smartart",
    title: "SmartArt",    
    body: "### SmartArt  Same behaviour for Jaws and &lt;abbr&gt;NVDA&lt;/abbr&gt;: SmartArt texts were vocalised (not always in the proper order though).  "
});

documentTitles["powerpoint.html#smartart-with-replacement-texts"] = "SmartArt with replacement texts";
index.add({
    url: "powerpoint.html#smartart-with-replacement-texts",
    title: "SmartArt with replacement texts",    
    body: "### SmartArt with replacement texts  &lt;abbr&gt;NVDA&lt;/abbr&gt;: expected behaviour, replacement texts were read instead of the SmartArt. Jaws: SmartArt were not vocalised any more, replacement texts were ignored.  "
});

documentTitles["powerpoint.html#graphics"] = "Graphics";
index.add({
    url: "powerpoint.html#graphics",
    title: "Graphics",    
    body: "### Graphics  Jaws and &lt;abbr&gt;NVDA&lt;/abbr&gt; had the same behaviour: figures in graphics were vocalised.  "
});

documentTitles["powerpoint.html#graphics-with-replacement-texts"] = "Graphics with replacement texts";
index.add({
    url: "powerpoint.html#graphics-with-replacement-texts",
    title: "Graphics with replacement texts",    
    body: "### Graphics with replacement texts  Jaws and &lt;abbr&gt;NVDA&lt;/abbr&gt; behaved as expected: replacement texts were vocalised instead of the graphics.  &lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2016  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt;"
});



documentTitles["video.html#videos-audios-and-animated-components"] = "Videos, audios, and animated components";
index.add({
    url: "video.html#videos-audios-and-animated-components",
    title: "Videos, audios, and animated components",    
    body: "# Videos, audios, and animated components  &lt;script&gt;$(document).ready(function () {     setBreadcrumb([{\&quot;label\&quot;:\&quot;General recommendations for content\&quot;}]); });&lt;/script&gt;  &lt;style&gt;h3 {font-size: 1rem;}&lt;/style&gt;  "
});

documentTitles["video.html#introduction"] = "Introduction";
index.add({
    url: "video.html#introduction",
    title: "Introduction",    
    body: "## Introduction All pre-recorded videos should have a transcript attached and closed captions available, and audio description available when necessary.  "
});

documentTitles["video.html#provide-a-transcript"] = "Provide a transcript";
index.add({
    url: "video.html#provide-a-transcript",
    title: "Provide a transcript",    
    body: "## Provide a transcript  Transcripts include the text of the words spoken in the video, and also the text of important words that appear on screen and important actions or changes of scene. It must be provided in text, HTML (to be preferred) or Word and must be immediately after the video.    **Perimeter:** all.  "
});

documentTitles["video.html#provide-captions"] = "Provide captions";
index.add({
    url: "video.html#provide-captions",
    title: "Provide captions",    
    body: "## Provide captions  Captions are a text version of the speech and sound on the video. They are displayed over the video. Captions should appear at the same time as the sound they are captioning and appear onscreen long enough to be read. Closed captions have to be preferred over open captions as they can be set on or off by the viewer while open captions are displayed to all viewers. They are mainly needed for users with hearing disabilities.    **Perimeter:** videos, animated components.  "
});

documentTitles["video.html#provide-audio-descriptions-when-important-visual-information-is-not-covered-in-what-is-said"] = "Provide audio descriptions when important visual information is not covered in what is said";
index.add({
    url: "video.html#provide-audio-descriptions-when-important-visual-information-is-not-covered-in-what-is-said",
    title: "Provide audio descriptions when important visual information is not covered in what is said",    
    body: "## Provide audio descriptions when important visual information is not covered in what is said  Audio descriptions are separate audio tracks containing speech that describes the action, characters, and scenes of a video. It is played along with the video and it lets blind and vision-impaired users know what’s happening on the screen.    Audio description is not needed for talking heads only, or for text on slides as long as the slide text is included into what is said. Audio description might be needed for components like charts and diagrams.    **Perimeter:** videos, animated components.  "
});

documentTitles["video.html#choose-an-accessible-media-player"] = "Choose an accessible media Player";
index.add({
    url: "video.html#choose-an-accessible-media-player",
    title: "Choose an accessible media Player",    
    body: "## Choose an accessible media Player  - Captions and audio description supported - On/off command for captions, audio description and setup menu - Buttons and controls usable without a mouse and properly labeled - Accessible to keyboard-only users and screen reader users.    Media player must support captions, and audio descriptions. Users must be able to set these features on and off.    Users with disabilities may use navigational devices other than a mouse, such as keyboards or screen readers. For this reason, users should be able to operate the media player without using a mouse. The player should also label its buttons and controls, so that users with screen readers can hear the name of each button and control and select the correct option.  **Perimeter:** all.    "
});

documentTitles["video.html#do-not-play-videos-automatically-when-the-page-loads"] = "Do not play videos automatically when the page loads";
index.add({
    url: "video.html#do-not-play-videos-automatically-when-the-page-loads",
    title: "Do not play videos automatically when the page loads",    
    body: "## Do not play videos automatically when the page loads   This can be confusing for many users, and the sound can interfere with assistive technologies such as screen readers.    **Perimeter:** all.  "
});

documentTitles["video.html#do-not-use-videos-that-have-more-than-three-flashes-within-a-period-of-1-second"] = "Do not use videos that have more than three flashes within a period of 1 second";
index.add({
    url: "video.html#do-not-use-videos-that-have-more-than-three-flashes-within-a-period-of-1-second",
    title: "Do not use videos that have more than three flashes within a period of 1 second",    
    body: "## Do not use videos that have more than three flashes within a period of 1 second This can provoke seizures in users with epilepsy.    **Perimeter:** videos, animated components.  **All other relevant criteria such as color contrasts must also be enforced.**  &amp;nbsp; &lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2016  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt;"
});



documentTitles["word.html#creating-accessible-word-documents"] = "Creating accessible Word documents";
index.add({
    url: "word.html#creating-accessible-word-documents",
    title: "Creating accessible Word documents",    
    body: "# Creating accessible Word documents &lt;script&gt;$(document).ready(function () {     setBreadcrumb([{\&quot;label\&quot;:\&quot;Accessible Word\&quot;}]); });&lt;/script&gt;  &lt;style&gt;h3 {font-size: 1rem;}&lt;/style&gt;  "
});

documentTitles["word.html#introduction"] = "Introduction";
index.add({
    url: "word.html#introduction",
    title: "Introduction",    
    body: "## Introduction  Accessible Word documents are needed in order to be read by all users. Creating accessible Word documents requires to respect the following recommendations. It also enables you to produce accessible &lt;abbr&gt;PDF&lt;/abbr&gt; documents through the &lt;abbr&gt;PDF&lt;/abbr&gt; export functionality inside Word.  "
});

documentTitles["word.html#recommendations"] = "Recommendations";
index.add({
    url: "word.html#recommendations",
    title: "Recommendations",    
    body: "## Recommendations   You will find below a summary of the recommendations to follow. For more detail, please refer to &lt;a href=\&quot;https://disic.github.io/guides-documents_bureautiques_accessibles/html/\&quot; hreflang=\&quot;fr\&quot;&gt;the &lt;abbr title=\&quot;direction interministérielle du numérique et du système d’information et de communication\&quot; lang=\&quot;fr\&quot;&gt;DINSIC&lt;/abbr&gt; website&lt;/a&gt; (in French).  "
});

documentTitles["word.html#1-use-heading-styles-for-headings-and-sub-headings"] = "1. Use “Heading” styles for headings and sub-headings";
index.add({
    url: "word.html#1-use-heading-styles-for-headings-and-sub-headings",
    title: "1. Use “Heading” styles for headings and sub-headings",    
    body: "### 1. Use “Heading” styles for headings and sub-headings  Headings and sub-headings must use the “Headings” styles (Heading 1, Heading 2, etc.) to structure the document’s content and provide easy access to them.  "
});

documentTitles["word.html#2-use-the-normal-style-for-texts"] = "2. Use the “Normal” style for texts";
index.add({
    url: "word.html#2-use-the-normal-style-for-texts",
    title: "2. Use the “Normal” style for texts",    
    body: "### 2. Use the “Normal” style for texts  The “Normal” style must be used for all text paragraphs (default style).  "
});

documentTitles["word.html#3-use-dedicated-styles-to-emphasize-some-contents"] = "3. Use dedicated styles to emphasize some contents.";
index.add({
    url: "word.html#3-use-dedicated-styles-to-emphasize-some-contents",
    title: "3. Use dedicated styles to emphasize some contents.",    
    body: "### 3. Use dedicated styles to emphasize some contents.  Use predefined styles to emphasize some contents (e.g. quotes, legends, etc.) rather than using character formatting tools (bold etc.).  "
});

documentTitles["word.html#4-dont-insert-empty-lines"] = "4. Don’t insert empty lines";
index.add({
    url: "word.html#4-dont-insert-empty-lines",
    title: "4. Don’t insert empty lines",    
    body: "### 4. Don’t insert empty lines  Space between lines must be created through Paragraph options, where you can define the space before and after a paragraph.  Page jumps must be created via proper “Jumps” (Insert&amp;nbsp;&gt; Page jump, new page).  "
});

documentTitles["word.html#5-use-bulleted-lists"] = "5. Use bulleted lists";
index.add({
    url: "word.html#5-use-bulleted-lists",
    title: "5. Use bulleted lists",    
    body: "### 5. Use bulleted lists  Lists must be made using the option “Bulleted list” or “Numbered list”, and not by inserting dashes into the text.  "
});

documentTitles["word.html#6-use-footnotes"] = "6. Use footnotes";
index.add({
    url: "word.html#6-use-footnotes",
    title: "6. Use footnotes",    
    body: "### 6. Use footnotes  Options to insert “Footnotes” and “Endnotes” must be used to properly insert notes in your document.  "
});

documentTitles["word.html#7-number-your-pages"] = "7. Number your pages";
index.add({
    url: "word.html#7-number-your-pages",
    title: "7. Number your pages",    
    body: "### 7. Number your pages  The “Page number” option makes it easier to get one’s bearings in a document.  "
});

documentTitles["word.html#8-use-columns-to-layout-text"] = "8. Use “Columns” to layout text";
index.add({
    url: "word.html#8-use-columns-to-layout-text",
    title: "8. Use “Columns” to layout text",    
    body: "### 8. Use “Columns” to layout text  The “Columns” option in the Layout group must be used (instead of tables) to layout the page as proper columns.  "
});

documentTitles["word.html#9-define-the-anchor-for-objects-inserted-into-the-page"] = "9. Define the anchor for objects inserted into the page";
index.add({
    url: "word.html#9-define-the-anchor-for-objects-inserted-into-the-page",
    title: "9. Define the anchor for objects inserted into the page",    
    body: "### 9. Define the anchor for objects inserted into the page  When you insert objects (image, shape, SmartArt, etc.), it is necessary to define an anchor point: in the options for page flow, choose the option “Aligned on the text” or “Top and bottom”.  "
});

documentTitles["word.html#10-avoid-text-zones"] = "10. Avoid text zones";
index.add({
    url: "word.html#10-avoid-text-zones",
    title: "10. Avoid text zones",    
    body: "### 10. Avoid text zones  Floating text zones are not always properly read by screen readers. Texts can be emphasized through the use of borders around a paragraph, for instance.  "
});

documentTitles["word.html#11-ensure-colour-is-not-the-only-means-to-convey-information"] = "11. Ensure colour is not the only means to convey information";
index.add({
    url: "word.html#11-ensure-colour-is-not-the-only-means-to-convey-information",
    title: "11. Ensure colour is not the only means to convey information",    
    body: "### 11. Ensure colour is not the only means to convey information  Information given through colour must also be conveyed via another means like shape, position, size…   "
});

documentTitles["word.html#12-ensure-a-sufficient-contrast"] = "12. Ensure a sufficient contrast";
index.add({
    url: "word.html#12-ensure-a-sufficient-contrast",
    title: "12. Ensure a sufficient contrast",    
    body: "### 12. Ensure a sufficient contrast  Contrast between the colour of text and of its background must be sufficient: - 4.5:1 for normal-size text; - 3:1 for bigger text.  Contrast can be verified with the &lt;a href=\&quot;https://www.paciellogroup.com/resources/contrastanalyser/\&quot; hreflang=\&quot;en\&quot; lang=\&quot;en\&quot;&gt;Colour Contrast Analyzer&lt;/a&gt;.  "
});

documentTitles["word.html#13-define-language"] = "13. Define language";
index.add({
    url: "word.html#13-define-language",
    title: "13. Define language",    
    body: "### 13. Define language  Language must be defined through the menu: File&amp;nbsp;&gt; Options&amp;nbsp;&gt; Language. Words or groups of words in another language must be explicitly described as such (menu: Revision&amp;nbsp;&gt; Language&amp;nbsp;&gt; Define the verification language).  "
});

documentTitles["word.html#14-provide-replacement-text-for-images"] = "14. Provide replacement text for images";
index.add({
    url: "word.html#14-provide-replacement-text-for-images",
    title: "14. Provide replacement text for images",    
    body: "### 14. Provide replacement text for images  If the image conveys information, you must provide a replacement text describing its content (right click, Image format&amp;nbsp;&gt; Replacement text&amp;nbsp;&gt; Description field). If the image is strictly for decoration, the Description field must be left empty.  "
});

documentTitles["word.html#15-make-simple-tables"] = "15. Make simple tables";
index.add({
    url: "word.html#15-make-simple-tables",
    title: "15. Make simple tables",    
    body: "### 15. Make simple tables  Data tables must stay simple. Avoid blending cells together. Avoid inserting images: they will not be read as table elements but as independent elements which will be read before or after the table according to the internal document’s reading order. Leave no empty cell.  "
});

documentTitles["word.html#16-use-the-automated-accessibility-checker"] = "16. Use the automated Accessibility checker";
index.add({
    url: "word.html#16-use-the-automated-accessibility-checker",
    title: "16. Use the automated Accessibility checker",    
    body: "### 16. Use the automated Accessibility checker  Word provides an Accessibility checker (menu File&amp;nbsp;&gt; Check for problems&amp;nbsp;&gt; Check accessibility). It lists all contents prone to be hard to deal with and automatically detects failures. This tool must be used as it provides a huge help; however it does not prevent you from checking and applying all the recommendations provided in this page.  "
});

documentTitles["word.html#17-exporting-the-document-to-abbrpdfabbr"] = "17. Exporting the document to &lt;abbr&gt;PDF&lt;/abbr&gt;";
index.add({
    url: "word.html#17-exporting-the-document-to-abbrpdfabbr",
    title: "17. Exporting the document to &lt;abbr&gt;PDF&lt;/abbr&gt;",    
    body: "### 17. Exporting the document to &lt;abbr&gt;PDF&lt;/abbr&gt;  To export to &lt;abbr&gt;PDF&lt;/abbr&gt; you only need to go to File&amp;nbsp;&gt; Save as. Choose a name and select &lt;abbr&gt;PDF&lt;/abbr&gt; as file type. The first time, make sure that the “Accessibility-friendly document structure tags” checkbox in Export options is checked.  Please note that in Word for Office 2010 generated &lt;abbr&gt;PDF&lt;/abbr&gt; documents can show accessibility issues, e.g. for the vocalisation of images. These issues were corrected in the following versions of Microsoft Office.  "
});

documentTitles["word.html#18-insert-an-table-of-contents"] = "18. Insert an table of contents";
index.add({
    url: "word.html#18-insert-an-table-of-contents",
    title: "18. Insert an table of contents",    
    body: "### 18. Insert an table of contents  For any long document (more than 2 pages), insert an automatically generated table of contents, in the menu &amp; nbsp ;: References &amp; nbsp;&gt; Table of contents. It makes easier for everyone to find their way around and quickly go to the content you want to read.  Note that you must update this table of contents as soon as you change the structure of the content, so prefer to generate the table of contents at the end of the content modifications.  "
});

documentTitles["word.html#external-resources"] = "External resources";
index.add({
    url: "word.html#external-resources",
    title: "External resources",    
    body: "## External resources  - &lt;a href=\&quot;https://disic.github.io/guides-documents_bureautiques_accessibles/html/\&quot; hreflang=\&quot;fr\&quot;&gt;Creating accessible office documents (in French)&lt;/a&gt;, &lt;abbr title=\&quot;direction interministérielle du numérique et du système d’information et de communication\&quot; lang=\&quot;fr\&quot;&gt;DINSIC&lt;/abbr&gt;. - &lt;a href=\&quot;http://webaim.org/techniques/word/\&quot; hreflang=\&quot;en\&quot;&gt;Word Accessibility, WebAIM&lt;/a&gt;.  &lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2016  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt;"
});


