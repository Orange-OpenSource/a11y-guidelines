
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



documentTitles["email.html#emails-accessibility"] = "Emails accessibility";
index.add({
    url: "email.html#emails-accessibility",
    title: "Emails accessibility",    
    body: "# Emails accessibility &lt;script&gt;$(document).ready(function () {     setBreadcrumb([{\&quot;label\&quot;:\&quot;Emails accessibility\&quot;}]); });&lt;/script&gt;  Here, a list of guidelines/best practices for writing messages that everyone can understand whether or not the recipient usesis using assistive technology.  "
});

documentTitles["email.html#what-can-be-problematic"] = "What can be problematic?";
index.add({
    url: "email.html#what-can-be-problematic",
    title: "What can be problematic?",    
    body: "## What can be problematic? - Images - Fonts, colors and styles used - Layout tables - Links  "
});

documentTitles["email.html#important"] = "Important";
index.add({
    url: "email.html#important",
    title: "Important",    
    body: "## Important  If your communication contains a lot of information and its layout needs to be complex: - create the email with the method which is the easiest for you, - add [an accessible Word file](./word-create.html) (or text file) as an attachment containing the same level of information (but only in text!), - specify that the equivalent accessible text is contained in the attachment.  "
});

documentTitles["email.html#everyday-emails"] = "\&quot;Everyday\&quot; emails";
index.add({
    url: "email.html#everyday-emails",
    title: "\&quot;Everyday\&quot; emails",    
    body: "## \&quot;Everyday\&quot; emails For all your everyday emails: - Use simple, sans serif fonts: Arial, Calibri or [Accessible DfA](http://c-rnt.apf.asso.fr/2019/01/07/accessible-dfa-une-police-open-source-concue-par-orange/) - Adopt a font size at least equal to 10 points - Put a capital letter at the beginning of each sentence but avoid whole sentences in capital letters - Align the texts to the left (avoid justifying) - Avoid too many italic or bold chunks of text or phrases - Check the contrast between the font color and the background (Colour Contrast Analyzer) and limit the total number of colors used - Use a neutral background: no decorative paper letter or background images - Enter an alternative text for all the images (Office: right click on the picture&gt; Format Picture &gt; Alt text&gt; \&quot;Description\&quot; field) or if the image is just descriptive, leave the \&quot;Description\&quot; field empty - Use the \&quot;Title\&quot; and \&quot;Subtitle\&quot; styles of the \&quot;text format\&quot; menu if long mail, with several sections - Add an emoticon alternative text, example: \&quot;;) [wink smiley] \&quot; instead of just \&quot;;)\&quot; - Avoid animations, animated GIFs and luminosity flashes - Write explicit link labels, for example: prefer \&quot;discover our offers\&quot; to \&quot;click here\&quot; or \&quot;find out more\&quot; - Use the \&quot;Withdrawal, Spacing\&quot; functions to skip lines, example Office suite: Page Layout menu&gt; Paragraph&gt; Indent or Spacing or Right click on your text: \&quot;Paragraph ...\&quot;) - Check that the size of the buttons and clickable areas is sufficient : no smaller than 1cm (0.4\&quot;) - Configure your mail tool: HTML format by default, Outlook for example: File&gt; Options&gt; Mail&gt; Compose messages  "
});

documentTitles["email.html#pushmails"] = "Pushmails";
index.add({
    url: "email.html#pushmails",
    title: "Pushmails",    
    body: "## Pushmails You have several options for creating an accessible Pushmail.  "
});

documentTitles["email.html#from-a-word-document"] = "From a Word document";
index.add({
    url: "email.html#from-a-word-document",
    title: "From a Word document",    
    body: "## From a Word document 1. Create a Word document accessible by following [the Word recommendations](word-create.html). 2. Then use the \&quot;Send to Mail Recipient\&quot;* option. *Add this Option the first time via File&gt; Options&gt; Quick access toolbar&gt; “Send to Mail Recipient”  "
});

documentTitles["email.html#from-my-pushmails-spip"] = "From \&quot;My Pushmails\&quot; (SPIP)";
index.add({
    url: "email.html#from-my-pushmails-spip",
    title: "From \&quot;My Pushmails\&quot; (SPIP)",    
    body: "## From \&quot;My Pushmails\&quot; (SPIP) The tool provides natively accessible templates (don’t forget alternative text for the images) which does not prevent you from following [the general recommendations for editorial content](editorial.html).  &lt;img alt=\&quot;My pushmails screenshot\&quot; src=\&quot;./images/email1.png\&quot;&gt;  "
});

documentTitles["email.html#creation-from-html-or-other-dedicated-tool"] = "Creation from HTML (or other dedicated tool)";
index.add({
    url: "email.html#creation-from-html-or-other-dedicated-tool",
    title: "Creation from HTML (or other dedicated tool)",    
    body: "## Creation from HTML (or other dedicated tool) Compose the HTML code in an accessible way by following [the main web recommendations](../web_EN/index.html).    Important: there are multiple email clients so there can be interpretation issues, the layout should rather be done via tables (using role=presentation in the &amp;lt;table&amp;gt; tag).  "
});

documentTitles["email.html#links"] = "Links";
index.add({
    url: "email.html#links",
    title: "Links",    
    body: "## Links - [Improve email accessibility ](https://support.office.com/en-us/article/video-improve-email-accessibility-ebf3730a-18f8-4b57-81d1-730086231775?omkt=en-001&amp;ui=en-US&amp;rs=en-001&amp;ad=US) - [A Beginner’s Guide to Email Accessibility](https://webdesign.tutsplus.com/tutorials/a-beginners-guide-to-email-accessibility--cms-31240) - [The Ultimate Guide to Accessible Emails](https://litmus.com/blog/ultimate-guide-accessible-emails) - [Ideal Mobile Touchscreen Target Sizes](https://www.smashingmagazine.com/2012/02/finger-friendly-design-ideal-mobile-touchscreen-target-sizes/)   &amp;nbsp; &lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2016  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt;"
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
    body: "### With Adobe InDesign  You will find Adobe InDesign recommendations (in French) at &lt;a href=\&quot;http://www.pdf-accessible.com/notices-accessibilite-indesign-acrobat/#indesign\&quot; lang=\&quot;fr\&quot; hreflang=\&quot;fr\&quot;&gt;Créer des documents &lt;abbr&gt;PDF&lt;/abbr&gt; accessibles avec Adobe Indesign&lt;/a&gt; by the AcceDe &lt;abbr&gt;PDF&lt;/abbr&gt; initiative.  "
});

documentTitles["pdf.html#with-adobe-acrobat-pro"] = "With Adobe Acrobat Pro";
index.add({
    url: "pdf.html#with-adobe-acrobat-pro",
    title: "With Adobe Acrobat Pro",    
    body: "### With Adobe Acrobat Pro  You will find Adobe Acrobat Pro recommendations at &lt;a href=\&quot;http://www.pdf-accessible.com/wp-content/uploads/2015/01/making-PDF-accessible-Acrobat.pdf\&quot;&gt;Making &lt;abbr&gt;PDF&lt;/abbr&gt; documents accessible with Adobe Acrobat Pro&lt;/a&gt; by the AcceDe &lt;abbr&gt;PDF&lt;/abbr&gt; initiative.  "
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
    body: "# Creating accessible PowerPoint documents &lt;script&gt;$(document).ready(function () {     setBreadcrumb([         {\&quot;label\&quot;:\&quot;Microsoft PowerPoint\&quot;}     ]);     addSubMenu([         {\&quot;label\&quot;:\&quot;Create an accessible document\&quot;,\&quot;url\&quot;:\&quot;powerpoint-create.html\&quot;},          {\&quot;label\&quot;:\&quot;How to test my document\&quot;,\&quot;url\&quot;:\&quot;powerpoint-test.html\&quot;}     ]); });&lt;/script&gt;  &lt;style&gt;h3 {font-size: 1rem;}&lt;/style&gt;  This section contains recommendations for: - [Create an accessible PowerPoint document](./powerpoint-create.html) - [How to test a PowerPoint document](./powerpoint-test.html)  &lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2016  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt;"
});



documentTitles["powerpoint-create.html#creating-accessible-powerpoint-documents"] = "Creating accessible PowerPoint documents";
index.add({
    url: "powerpoint-create.html#creating-accessible-powerpoint-documents",
    title: "Creating accessible PowerPoint documents",    
    body: "# Creating accessible PowerPoint documents &lt;script&gt;$(document).ready(function () {     setBreadcrumb([         {\&quot;label\&quot;:\&quot;Microsoft PowerPoint\&quot;, \&quot;url\&quot;: \&quot;./powerpoint.html\&quot;},         {\&quot;label\&quot;:\&quot;Create an accessible document\&quot;}     ]);     addSubMenu([         {\&quot;label\&quot;:\&quot;Create an accessible document\&quot;,\&quot;url\&quot;:\&quot;powerpoint-create.html\&quot;, \&quot;expanded\&quot;: true},          {\&quot;label\&quot;:\&quot;How to test my document\&quot;,\&quot;url\&quot;:\&quot;powerpoint-test.html\&quot;}     ]); });&lt;/script&gt;  &lt;style&gt;h3 {font-size: 1rem;}&lt;/style&gt;  &lt;span data-menuitem=\&quot;powerpoint\&quot;&gt;&lt;/span&gt;  "
});

documentTitles["powerpoint-create.html#introduction"] = "Introduction";
index.add({
    url: "powerpoint-create.html#introduction",
    title: "Introduction",    
    body: "## Introduction  Producing accessible PowerPoint presentations requires following different rules. They are summarized below (and detailed guides are available on the [WebAIM website](https://webaim.org/techniques/powerpoint/)).  In order to help you, PowerPoint includes a tool to check the accessibility of your presentation. This tool identifies the main errors and proposes different solutions.   "
});

documentTitles["powerpoint-create.html#slide-layouts"] = "Slide Layouts";
index.add({
    url: "powerpoint-create.html#slide-layouts",
    title: "Slide Layouts",    
    body: "## Slide Layouts  Defining slide layouts is the first action to do in order to create an accessible presentation, it will ensure information have the correct reading order. Use the Slide Master view: select the &lt;code&gt;View&lt;/code&gt; tab &gt; &lt;code&gt;Slide Master&lt;/code&gt; to create or modify slides layouts.   &lt;img class=\&quot;center\&quot; src=\&quot;./images/screen1.png\&quot; alt=\&quot;Screenshot of view tab\&quot;/&gt;  Use the Master Layout submenu to add titles or footers.  &lt;img class=\&quot;center\&quot; src=\&quot;./images/screen2.png\&quot; alt=\&quot;Screenshot of slide master tab\&quot;/&gt;  Create as many layouts as types of slides needed. Avoid adding text boxes or images directly into the presentation via the &lt;code&gt;Insert&lt;/code&gt; menu but use the &lt;code&gt;Slide Master&lt;/code&gt; view.   Note: if you edit the slide layout after you have created the slides, you must reapply the new model.  "
});

documentTitles["powerpoint-create.html#presentation-properties"] = "Presentation properties";
index.add({
    url: "powerpoint-create.html#presentation-properties",
    title: "Presentation properties",    
    body: "## Presentation properties  "
});

documentTitles["powerpoint-create.html#language"] = "Language";
index.add({
    url: "powerpoint-create.html#language",
    title: "Language",    
    body: "### Language  The main language must be defined in the tab &lt;code&gt;File &gt; Options &gt; Language&lt;/code&gt;. Every punctual change of language must be identified by selecting the text and: tab &lt;code&gt;Review &gt; Language &gt; Set proofing language&lt;/code&gt;.  "
});

documentTitles["powerpoint-create.html#other-properties"] = "Other properties";
index.add({
    url: "powerpoint-create.html#other-properties",
    title: "Other properties",    
    body: "### Other properties Title, author and tags fields have to be completed in tab &lt;code&gt;File &gt; Info &gt; Properties&lt;/code&gt;.  &lt;img class=\&quot;center\&quot; src=\&quot;./images/screen3.png\&quot; alt=\&quot;Screenshot of file properties\&quot;/&gt;  This information is accessible by everyone in Windows Explorer and are readable by the screen readers.   "
});

documentTitles["powerpoint-create.html#use-unique-slide-titles"] = "Use unique slide titles";
index.add({
    url: "powerpoint-create.html#use-unique-slide-titles",
    title: "Use unique slide titles",    
    body: "## Use unique slide titles Give every slide a unique and descriptive title, it allows screen reader users to clearly understand which slide they are on.  "
});

documentTitles["powerpoint-create.html#wording"] = "Wording";
index.add({
    url: "powerpoint-create.html#wording",
    title: "Wording",    
    body: "## Wording Avoid abbreviations and acronyms; explain them at the first occurrence. If necessary, keep accentuation on capital letters (example: É or Ç): use the &lt;code&gt;Insert tab &gt; Symbol&lt;/code&gt;.  "
});

documentTitles["powerpoint-create.html#formatting-layout"] = "Formatting / layout";
index.add({
    url: "powerpoint-create.html#formatting-layout",
    title: "Formatting / layout",    
    body: "## Formatting / layout Use familiar sans serif fonts (such as Arial or Calibri), in a larger font size (18pt or larger). Begin all sentences by a capital letter but avoid using all capital letters and excessive italics or underlines. Avoid justifying the text; prefer left alignment. In order to add white space between sentences and paragraphs, use option: &lt;code&gt;right click&lt;/code&gt; on the text and select &lt;code&gt;Paragraph… &gt; Indents and Spacing&lt;/code&gt;.  &lt;img class=\&quot;center\&quot; src=\&quot;./images/screen4.png\&quot; alt=\&quot;Screenshot of paragraph dialog\&quot;/&gt;  "
});

documentTitles["powerpoint-create.html#colors-and-contrasts"] = "Colors and contrasts";
index.add({
    url: "powerpoint-create.html#colors-and-contrasts",
    title: "Colors and contrasts",    
    body: "## Colors and contrasts  "
});

documentTitles["powerpoint-create.html#use-sufficient-contrast-for-text-and-background-colors"] = "Use sufficient contrast for text and background colors";
index.add({
    url: "powerpoint-create.html#use-sufficient-contrast-for-text-and-background-colors",
    title: "Use sufficient contrast for text and background colors",    
    body: "### Use sufficient contrast for text and background colors  The presentation of text should have a contrast ratio of at least 4.5:1. Here are some examples on a white background: - Foreground black : very good contrast, ratio = 21:1  - Foreground #767676 (dark grey), acceptable contrast, ratio = 4.54:1 - Foreground #AAAAAA (lighter grey), unacceptable contrast, ratio = 2.32:1  If you choose to not use the Orange Group colors guidelines, you can download the [Colour Contrast Analyser](https://www.paciellogroup.com/resources/contrastanalyser/) tool; it will be useful for checking your contrasts.  "
});

documentTitles["powerpoint-create.html#ensure-that-color-is-not-the-only-means-of-conveying-information"] = "Ensure that color is not the only means of conveying information";
index.add({
    url: "powerpoint-create.html#ensure-that-color-is-not-the-only-means-of-conveying-information",
    title: "Ensure that color is not the only means of conveying information",    
    body: "### Ensure that color is not the only means of conveying information For people who can not see the colors or the shades of colors, it is important to convey the information differently.  &lt;img class=\&quot;center\&quot; src=\&quot;./images/color1.png\&quot; alt=\&quot;Bad example, color is used to convey the information\&quot;/&gt;   &lt;img class=\&quot;center\&quot; src=\&quot;./images/color2.png\&quot; alt=\&quot;Good example, the shape is used to convey the information\&quot;/&gt;  Appropriate colors and contrast are necessary for people to see your presentations and understand their meaning.   "
});

documentTitles["powerpoint-create.html#bulleted-lists-or-numbered-lists"] = "Bulleted Lists or Numbered Lists";
index.add({
    url: "powerpoint-create.html#bulleted-lists-or-numbered-lists",
    title: "Bulleted Lists or Numbered Lists",    
    body: "## Bulleted Lists or Numbered Lists Always use the appropriate and native functions in order to create lists.  &lt;img class=\&quot;center\&quot; src=\&quot;./images/screen5.png\&quot; alt=\&quot;Screenshot of lists options\&quot;/&gt;  "
});

documentTitles["powerpoint-create.html#pictures-and-other-images"] = "Pictures and other Images";
index.add({
    url: "powerpoint-create.html#pictures-and-other-images",
    title: "Pictures and other Images",    
    body: "## Pictures and other Images  Add alt text to images, shapes or SmartArt graphics in your PowerPoint slides. In order to write a good alt text, make sure to convey the content and the purpose of the image and its context in a concise and unambiguous manner. Right-click on an image and select &lt;code&gt;Format Picture&lt;/code&gt; or &lt;code&gt;Format Shape &gt; Alt Text&lt;/code&gt;.  &lt;img class=\&quot;center\&quot; src=\&quot;./images/screen6.png\&quot; alt=\&quot;Screenshot of format picture dialog\&quot;/&gt;  Type the alt text in the Description text box (but leave Title blank, this information is not conveyed to assistive technologies). If the picture is only decorative, leave the Description text box blank. Alternative text helps people who can’t see the screen to understand what’s important in images and other visuals. Do not use text in images to convey important information.    Note: If a picture or a chart is too complex to describe with alt text, you will need to provide a text description elsewhere. You can add the full description to the Notes section of the slide for example. In this case, put a very short description in the alt text, endings with the words: “full text description in the Notes section of this slide”.  For every downloadable file, it is necessary to specify its name, type, size and language (if different of the presentation language). Screen reader users sometimes scan a list of links, so the labels have to be simple and easy to understand.  "
});

documentTitles["powerpoint-create.html#hyperlinks"] = "Hyperlinks";
index.add({
    url: "powerpoint-create.html#hyperlinks",
    title: "Hyperlinks",    
    body: "## Hyperlinks Select the text to which you want to add the hyperlink, and then right-click. The text you selected displays in the “Text to display” box. This is the hyperlink text. If necessary, add a ScreenTip by clicking on the ScreenTip button.    &lt;img class=\&quot;center\&quot; src=\&quot;./images/screen11.png\&quot; alt=\&quot;Insert hyperlink dialog box screenshot\&quot;/&gt;  For every downloadable file, it is necessary to specify its name, type, size and language (if different of the presentation language).   Screen reader users sometimes scan a list of links, so the labels have to be simple and easy to understand.    "
});

documentTitles["powerpoint-create.html#tables"] = "Tables";
index.add({
    url: "powerpoint-create.html#tables",
    title: "Tables",    
    body: "## Tables  Use a simple table structure, and specify column header information.  Ensure that tables don't contain split cells, merged cells, nested tables, or completely blank rows or columns.  If a table is too complex, you will need to provide an additional description: Right-click &lt;code&gt;Format Shape &gt; Alt Text&lt;/code&gt;.  "
});

documentTitles["powerpoint-create.html#audio-or-video-file"] = "Audio or video file";
index.add({
    url: "powerpoint-create.html#audio-or-video-file",
    title: "Audio or video file",    
    body: "## Audio or video file For audio and video content, in addition to alt text, include closed captioning for people who are deaf or have limited hearing.    Video content must have synchronized captions and also needs a rich description of the visual components. Closed captions typically also describe audio attributes such as music or sound effects that occur off-screen. Subtitles typically contain a transcription (or translation) of the dialogue.    Audio content must have a transcript.    Avoid automatic launching or slide transitions.    Avoid content that blinks or flashes more than three times a second.  "
});

documentTitles["powerpoint-create.html#set-the-reading-order"] = "Set the reading order";
index.add({
    url: "powerpoint-create.html#set-the-reading-order",
    title: "Set the reading order",    
    body: "## Set the reading order The order in which the screen readers read the slide contents can be modified in the Selection pane.   On the &lt;code&gt;Home&lt;/code&gt; tab, in the &lt;code&gt;Drawing group&lt;/code&gt;, select &lt;code&gt;Arrange &gt; Selection&lt;/code&gt; Pane. The elements of your slide are read in the reverse order listed in this pane.  &lt;img class=\&quot;center\&quot; src=\&quot;./images/screen7.png\&quot; alt=\&quot;Screenshot of selection pane\&quot;/&gt;  "
});

documentTitles["powerpoint-create.html#accessibility-checker"] = "Accessibility Checker";
index.add({
    url: "powerpoint-create.html#accessibility-checker",
    title: "Accessibility Checker",    
    body: "## Accessibility Checker At least, run Accessibility Checker to make sure your content is accessible.    In &lt;code&gt;File tab &gt; Check for Issues&lt;/code&gt;.  &lt;img class=\&quot;center\&quot; src=\&quot;./images/screen8.png\&quot; alt=\&quot;Screenshot of accessibility checker menu\&quot;/&gt;  "
});

documentTitles["powerpoint-create.html#convert-to-pdf"] = "Convert to PDF";
index.add({
    url: "powerpoint-create.html#convert-to-pdf",
    title: "Convert to PDF",    
    body: "## Convert to PDF  Save you presentation as &lt;abbr&gt;PDF&lt;/abbr&gt;: &lt;code&gt;File tab &gt; Save As&lt;/code&gt; and save as type PDF. Check the « Document structure tags for accessibility » option.  &lt;img class=\&quot;center\&quot; src=\&quot;./images/screen9.png\&quot; alt=\&quot;Screenshot of PDF options dialog\&quot;/&gt;  &lt;abbr&gt;PDF&lt;/abbr&gt; is often a better format to present PowerPoint presentations electronically.    Note:  If your presentation have more than 50 slides, it is better to advise your readers to change the following setting in Adobe: &lt;code&gt;Edit &gt; Preferences &gt; Reading &gt; Screen Reader Options &gt; Page vs Document: \&quot;Read the entire document\&quot;&lt;/code&gt;  &lt;img class=\&quot;center\&quot; src=\&quot;./images/screen10.png\&quot; alt=\&quot;Screenshot of screen reader options\&quot;/&gt;  To check &lt;abbr&gt;PDF&lt;/abbr&gt; document accessibility: download [PDF Accessibility Checker (PAC 3)](http://www.access-for-all.ch/en/pdf-lab/pdf-accessibility-checker-pac.html).  "
});

documentTitles["powerpoint-create.html#for-more-detailed-information"] = "For more detailed information";
index.add({
    url: "powerpoint-create.html#for-more-detailed-information",
    title: "For more detailed information",    
    body: "## For more detailed information - [PowerPoint Accessibility, WebAIM](https://webaim.org/techniques/powerpoint/) - [Microsoft Accessibility Support website](https://support.office.com/en-us/article/Make-your-PowerPoint-presentations-accessible-6f7772b2-2f33-4bd2-8ca7-dae3b2b3ef25) - &lt;a href=\&quot;https://disic.github.io/guides-documents_bureautiques_accessibles/html/\&quot; lang=\&quot;fr\&quot;&gt;(FR) Créer des documents bureautiques accessibles, DINISIC&lt;/a&gt;.  &lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2016  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt;"
});



documentTitles["powerpoint-test.html#check-accessibility-in-powerpoint-slides"] = "Check accessibility in PowerPoint slides";
index.add({
    url: "powerpoint-test.html#check-accessibility-in-powerpoint-slides",
    title: "Check accessibility in PowerPoint slides",    
    body: "# Check accessibility in PowerPoint slides  &lt;script&gt;$(document).ready(function () {     setBreadcrumb([         {\&quot;label\&quot;:\&quot;Microsoft PowerPoint\&quot;, \&quot;url\&quot;: \&quot;./powerpoint.html\&quot;},         {\&quot;label\&quot;:\&quot;How to test my document\&quot;}     ]);     addSubMenu([         {\&quot;label\&quot;:\&quot;Create an accessible document\&quot;,\&quot;url\&quot;:\&quot;powerpoint-create.html\&quot;},          {\&quot;label\&quot;:\&quot;How to test my document\&quot;,\&quot;url\&quot;:\&quot;powerpoint-test.html\&quot;, \&quot;expanded\&quot;: true}     ]); });&lt;/script&gt;  &lt;style&gt;code {font-weight: bold;}h2{padding-top: 1.5rem;}&lt;/style&gt; &lt;span data-menuitem=\&quot;powerpoint\&quot;&gt;&lt;/span&gt;  "
});

documentTitles["powerpoint-test.html#automated-tests"] = "Automated tests";
index.add({
    url: "powerpoint-test.html#automated-tests",
    title: "Automated tests",    
    body: "## Automated tests  "
});

documentTitles["powerpoint-test.html#office-accessibility-verification-tool"] = "Office Accessibility Verification Tool";
index.add({
    url: "powerpoint-test.html#office-accessibility-verification-tool",
    title: "Office Accessibility Verification Tool",    
    body: "### Office Accessibility Verification Tool  Start your tests with the Office Accessibility Verification Tool:  **File &gt; Info &gt; Check for Issues &gt; Check Accessibility**  &lt;img alt=\&quot;Accessibility checker screenshot\&quot; src=\&quot;./images/word_verification_en.png\&quot; class=\&quot;img-fluid\&quot; /&gt;    **Important:** if you encounter some difficulties, try to save your document from within PowerPoint 2010 in \&quot;.pptx\&quot; format. The option to \&quot;Maintain compatibility with previous versions of Word\&quot; has to remains unchecked.   "
});

documentTitles["powerpoint-test.html#color-contrasts"] = "Color contrasts";
index.add({
    url: "powerpoint-test.html#color-contrasts",
    title: "Color contrasts",    
    body: "### Color contrasts [Download Colour Contrast Analyser](https://developer.paciellogroup.com/resources/contrastanalyser/)  &lt;img alt=\&quot;colour contrast analyser screenshot\&quot; src=\&quot;./images/cca.png\&quot; class=\&quot;img-fluid\&quot; /&gt;    "
});

documentTitles["powerpoint-test.html#screen-reader-jaws-nvda"] = "Screen reader: JAWS &amp; NVDA";
index.add({
    url: "powerpoint-test.html#screen-reader-jaws-nvda",
    title: "Screen reader: JAWS &amp; NVDA",    
    body: "### Screen reader: JAWS &amp; NVDA To complete the verification, you can test with a screen reader.  It helps you to simulate the configuration as the visually impaired and blind people. [For further information to navigate with JAWS &amp; NVDA](https://a11y-guidelines.orange.com/web/methodes-outils-lecteur-ecran.html)  "
});

documentTitles["powerpoint-test.html#self-assessment-grids"] = "Self-Assessment Grids";
index.add({
    url: "powerpoint-test.html#self-assessment-grids",
    title: "Self-Assessment Grids",    
    body: "### Self-Assessment Grids  - &lt;a href=\&quot;AXS_assess_grid_WORD_EN.xlsx\&quot;&gt;Accessibility Assessment Grid for Word (16 ko)&lt;/a&gt; - &lt;a href=\&quot;AXS_assess_grid_PPT_EN.xlsx\&quot;&gt;Accessibility Assessment Grid for PowerPoint (16 ko)&lt;/a&gt;  These Grids are designed for self-assessment of the accessibility of Word and PowerPoint documents:  &lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2016  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt;"
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
    body: "## Provide a transcript   The transcription must reproduce textually all important informations conveyed by the content, these can be: - the dialogues - messages displayed on the screen - any graphics and animations that bring information - the name and title of person - the name of things (buildings, products ...) - the place - what happens in the video - The settings of the video (quality, black and white ...)  It must be provided in text, HTML (to be preferred) or Word and must be immediately after the video.    **Perimeter:** all.  "
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
    body: "## Do not use videos that have more than three flashes within a period of 1 second This can provoke seizures in users with epilepsy.    **Perimeter:** videos, animated components.  **All other relevant criteria such as color contrasts must also be enforced.**  "
});

documentTitles["video.html#for-more-detailed-information"] = "For more detailed information";
index.add({
    url: "video.html#for-more-detailed-information",
    title: "For more detailed information",    
    body: "## For more detailed information - W3C&amp;nbsp; &lt;a href=\&quot;https://www.w3.org/WAI/media/av/#how-to-make-audio-and-video-accessible\&quot;&gt;How to make audio and video accessible&lt;/a&gt; - SitePoint&amp;nbsp;:  &lt;a href=\&quot;https://www.sitepoint.com/accessible-video/\&quot;&gt;8 Steps to Creating Accessible Video&lt;/a&gt;  &amp;nbsp; &lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2016  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt;"
});



documentTitles["word.html#creating-accessible-word-documents"] = "Creating accessible Word documents";
index.add({
    url: "word.html#creating-accessible-word-documents",
    title: "Creating accessible Word documents",    
    body: "# Creating accessible Word documents &lt;script&gt;$(document).ready(function () {     setBreadcrumb([{\&quot;label\&quot;:\&quot;Microsoft Word\&quot;}]);     addSubMenu([         {\&quot;label\&quot;:\&quot;Create an accessible document\&quot;,\&quot;url\&quot;:\&quot;word-create.html\&quot;},         {\&quot;label\&quot;:\&quot;How to test my document\&quot;,\&quot;url\&quot;:\&quot;word-test.html\&quot;}     ]);     });&lt;/script&gt;  &lt;style&gt;h3 {font-size: 1rem;}&lt;/style&gt;  This section contains recommendations for: - [Create an accessible Word document](./word-create.html) - [How to test a Word document](./word-test.html)  &lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2016  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt;"
});



documentTitles["word-create.html#creating-accessible-word-documents"] = "Creating accessible Word documents";
index.add({
    url: "word-create.html#creating-accessible-word-documents",
    title: "Creating accessible Word documents",    
    body: "# Creating accessible Word documents &lt;script&gt;$(document).ready(function () {     setBreadcrumb([         {\&quot;label\&quot;:\&quot;Microsoft Word\&quot;, \&quot;url\&quot;:\&quot;./word.html\&quot;},         {\&quot;label\&quot;:\&quot;Create an accessible document\&quot;}     ]);     addSubMenu([         {\&quot;label\&quot;:\&quot;Create an accessible document\&quot;,\&quot;url\&quot;:\&quot;word-create.html\&quot;, \&quot;expanded\&quot;: true},          {\&quot;label\&quot;:\&quot;How to test my document\&quot;,\&quot;url\&quot;:\&quot;word-test.html\&quot;}     ]);  });&lt;/script&gt;  &lt;style&gt;h3 {font-size: 1rem;}&lt;/style&gt; &lt;span data-menuitem=\&quot;word\&quot;&gt;&lt;/span&gt;   Designing accessible Word Documents requires following different rules.   They are summarized below (and detailed guides are available on the &lt;a href=\&quot;https://webaim.org/techniques/word/\&quot;&gt;WebAIM Website&lt;/a&gt;).   In order to help you, Word includes a tool to check the accessibility of your presentation. This tool identifies the main errors and proposes different solutions.   "
});

documentTitles["word-create.html#language"] = "Language";
index.add({
    url: "word-create.html#language",
    title: "Language",    
    body: "## Language  The main language of the document must be defined in the tab `File &gt; Options &gt; Language`.   Every change of language within the document must be identified by selecting the text and: `tab Review &gt; Language &gt; Set proofing language`.    "
});

documentTitles["word-create.html#document-properties"] = "Document properties";
index.add({
    url: "word-create.html#document-properties",
    title: "Document properties",    
    body: "## Document properties  Title, author and tags fields have to be completed in tab `File &gt; Info &gt; Properties`. &lt;img alt=\&quot;\&quot; src=\&quot;./images/word1.png\&quot; class=\&quot;img-fluid\&quot;&gt;  These properties are readable by everyone in Windows Explorer and by the screen readers.   "
});

documentTitles["word-create.html#headings"] = "Headings";
index.add({
    url: "word-create.html#headings",
    title: "Headings",    
    body: "## Headings Give unique and descriptive headings allow users to clearly understand in which part they are on.   Use a “Heading 1” for the main content heading, and then a “Heading 2” for the major section headings and a “Heading 3” etc. (in the Home panel).   A good heading structure is often the most important accessibility criteria in Word documents.  Screen reader users have the ability to navigate long Word documents by heading structure.   "
});

documentTitles["word-create.html#table-of-contents"] = "Table of contents";
index.add({
    url: "word-create.html#table-of-contents",
    title: "Table of contents",    
    body: "## Table of contents  Provide a table of contents for long documents using tab `References &gt; Table of Contents`   It allows users to find information more easily in the document.   "
});

documentTitles["word-create.html#wording"] = "Wording";
index.add({
    url: "word-create.html#wording",
    title: "Wording",    
    body: "## Wording Use simple language: avoid abbreviations and acronyms (explain them at the first occurrence).   If necessary, keep accentuation on capital letters (example: É or Ç): use the `Insert tab &gt; Symbol`  "
});

documentTitles["word-create.html#formatting-layout"] = "Formatting / layout";
index.add({
    url: "word-create.html#formatting-layout",
    title: "Formatting / layout",    
    body: "## Formatting / layout Use familiar sans serif fonts (such as Arial or Calibri), in a large font size (12pt or larger). Begin all sentences by a capital letter but avoid using all capital letters and excessive italics or underlines.   Use predefined styles for formatting content: \&quot;normal\&quot; style must be assigned almost everywhere (default style), the \&quot;quote\&quot; style for quotes, etc. Avoid justifying the text; prefer left alignment.   &lt;img alt=\&quot;\&quot; src=\&quot;./images/word2.png\&quot; class=\&quot;img-fluid\&quot;&gt;  Do not use carriage returns to skip rows nor successive tabs (\&quot;Tab\&quot; key on the keyboard ) for text formatting.   In order to add white space between sentences and paragraphs, use option: `right click` on the text and select `Paragraph… &gt; Indents and Spacing`.   &lt;img alt=\&quot;\&quot; src=\&quot;./images/word3.png\&quot; class=\&quot;img-fluid\&quot;&gt;   Do not use text boxes because their content is not interpreted by screen readers.   Use the page break option via the `Insert Tab &gt; “Page Break”` menu to move to the next page.   Number pages of your document (`Insert Tab &gt; “Page Number”`) to allow users to navigate easily.   Note: the « Tabs… » options can let you adjust the Tab stop position.   &lt;img alt=\&quot;\&quot; src=\&quot;./images/word4.png\&quot; class=\&quot;img-fluid\&quot;&gt;    "
});

documentTitles["word-create.html#colors-and-contrasts"] = "Colors and contrasts";
index.add({
    url: "word-create.html#colors-and-contrasts",
    title: "Colors and contrasts",    
    body: "## Colors and contrasts "
});

documentTitles["word-create.html#use-sufficient-contrast-between-text-and-background-colors"] = "Use sufficient contrast between text and background colors";
index.add({
    url: "word-create.html#use-sufficient-contrast-between-text-and-background-colors",
    title: "Use sufficient contrast between text and background colors",    
    body: "### Use sufficient contrast between text and background colors The presentation of text should have a contrast ratio of at least 4.5:1. Here are some examples on a white background: - Foreground black : very good contrast, ratio = 21:1  - Foreground #767676 (dark grey), acceptable contrast, ratio = 4.54:1 - Foreground #AAAAAA (lighter grey), unacceptable contrast, ratio = 2.32:1    If you choose to not use the Orange Group colors guidelines, you can download the &lt;a href=\&quot;https://developer.paciellogroup.com/resources/contrastanalyser/\&quot;&gt;Colour Contrast Analyser tool&lt;/a&gt;; it will be useful for checking your contrasts.  "
});

documentTitles["word-create.html#ensure-that-color-is-not-the-only-way-to-convey-content"] = "Ensure that color is not the only way to convey content";
index.add({
    url: "word-create.html#ensure-that-color-is-not-the-only-way-to-convey-content",
    title: "Ensure that color is not the only way to convey content",    
    body: "### Ensure that color is not the only way to convey content For people who cannot see the colors or the shades of colors, it is important to convey content differently. &lt;img alt=\&quot;\&quot; src=\&quot;./images/word5.png\&quot; class=\&quot;img-fluid\&quot;&gt;   &lt;img alt=\&quot;\&quot; src=\&quot;./images/word6.png\&quot; class=\&quot;img-fluid\&quot;&gt;  "
});

documentTitles["word-create.html#bulleted-lists-or-numbered-lists"] = "Bulleted Lists or Numbered Lists";
index.add({
    url: "word-create.html#bulleted-lists-or-numbered-lists",
    title: "Bulleted Lists or Numbered Lists",    
    body: "## Bulleted Lists or Numbered Lists Always use the appropriate and native functions to create lists:  - Ordered (numbered) lists are used to present a group of items (words, sentences…) that follow a sequence - Unordered (bulleted) lists are used for a group of items without a sequence &lt;img alt=\&quot;\&quot; src=\&quot;./images/word7.png\&quot; class=\&quot;img-fluid\&quot;&gt;  "
});

documentTitles["word-create.html#alternative-text-for-pictures-shapes-chart-smartart-graphic-or-other-graphical-content"] = "Alternative Text for pictures, shapes, chart, SmartArt graphic, or other graphical content";
index.add({
    url: "word-create.html#alternative-text-for-pictures-shapes-chart-smartart-graphic-or-other-graphical-content",
    title: "Alternative Text for pictures, shapes, chart, SmartArt graphic, or other graphical content",    
    body: "## Alternative Text for pictures, shapes, chart, SmartArt graphic, or other graphical content The alternative text has to convey the content and the purpose of the image and its context in a concise and unambiguous manner.   Right-click on an image and select Format Picture or Format `Shape &gt; Alt Text`.   Enter the alt text in the Description text box (but leave Title blank, this information is not conveyed to assistive technologies).   If the picture is only decorative, leave the Description text box blank.   Alternative text helps people who can’t see the screen to understand what’s important in pictures and other visuals.   Note: if you use a layout option other than \&quot;In Line With Text\&quot; (by right-clicking on the image an “Wrap Text” or the “Picture Tools” Tab), the image and text present in the description of image (Alt Text) will be ignored by some screen readers.    "
});

documentTitles["word-create.html#audio-or-video-file"] = "Audio or video file";
index.add({
    url: "word-create.html#audio-or-video-file",
    title: "Audio or video file",    
    body: "## Audio or video file For audio and video content, in addition to alt text, be sure the video or audio as well as the player are accessible.   &lt;a href=\&quot;https://a11y-guidelines.orange.com/others_EN/video.html\&quot;&gt;See our recommendations for audio or video files.&lt;/a&gt;    "
});

documentTitles["word-create.html#links"] = "Links";
index.add({
    url: "word-create.html#links",
    title: "Links",    
    body: "## Links  Specify clear and accurate link text: it must make sense as standalone information to understand the destination target.   Specify when links are opened in a new window:   `Insert tab &gt; Hyperlink &gt; SreenTip`   &lt;img alt=\&quot;\&quot; src=\&quot;./images/word8.png\&quot; class=\&quot;img-fluid\&quot;&gt;   Note: a blind person asks his screen reader to list all the links on a page. Each link text will therefore be read isolated from its visual context.  "
});

documentTitles["word-create.html#data-tables"] = "Data Tables";
index.add({
    url: "word-create.html#data-tables",
    title: "Data Tables",    
    body: "## Data Tables Use a simple table structure, and specify column header information.   Ensure that tables don't contain split cells, merged cells, nested tables, or completely blank rows or columns.   If a table is too complex, you will need to provide an additional description: Right-click `Table Properties &gt; Alt Text`   Finally, tables should not be used for formatting purposes : use the \&quot;Columns\&quot; option on the “Page Layout” tab to create a columns layout.  "
});

documentTitles["word-create.html#accessibility-checker"] = "Accessibility Checker";
index.add({
    url: "word-create.html#accessibility-checker",
    title: "Accessibility Checker",    
    body: "## Accessibility Checker At least, run Accessibility Checker to make sure your content is accessible. It can detect the main errors and suggests some solutions.   In `File tab &gt; Check for Issues`. &lt;img alt=\&quot;\&quot; src=\&quot;./images/word9.png\&quot; class=\&quot;img-fluid\&quot;&gt;    Important: if you encounter some difficulties, try to save your document from within Word 2010 in \&quot;.docx\&quot; (or \&quot;.pptx\&quot;) format. The option to \&quot;Maintain compatibility with previous versions of Word\&quot; has to remains unchecked.   "
});

documentTitles["word-create.html#converting-to-pdf"] = "Converting to PDF";
index.add({
    url: "word-create.html#converting-to-pdf",
    title: "Converting to PDF",    
    body: "## Converting to PDF If you want to save you presentation as PDF, select: `File tab &gt; Save &amp; Send` and create PDF document.   Check if the « Document structure tags for accessibility » option is selected.   &lt;img alt=\&quot;\&quot; src=\&quot;./images/word10.png\&quot; class=\&quot;img-fluid\&quot;&gt;   &lt;img alt=\&quot;\&quot; src=\&quot;./images/word11.png\&quot; class=\&quot;img-fluid\&quot;&gt;    Note: with Word 2010, generated PDF documents may have accessibility issues (especially with the images vocalization). These issues have been fixed in later versions of Microsoft Office.  "
});

documentTitles["word-create.html#for-more-detailed-information"] = "For more detailed information";
index.add({
    url: "word-create.html#for-more-detailed-information",
    title: "For more detailed information",    
    body: "## For more detailed information  - &lt;a href=\&quot;http://webaim.org/techniques/word/\&quot; hreflang=\&quot;en\&quot;&gt;Word Accessibility, WebAIM&lt;/a&gt;. - check &lt;a href=\&quot;https://a11y-guidelines.orange.com/others_EN/pdf.html\&quot;&gt;PDF&lt;/a&gt; document accessibility: download &lt;a href=\&quot;https://www.access-for-all.ch/en/pdf-lab/pdf-accessibility-checker-pac.html\&quot;&gt;PDF Accessibility Checker (PAC 3)&lt;/a&gt;. - &lt;a href=\&quot;https://support.office.com/en-us/article/make-your-powerpoint-presentations-accessible-to-people-with-disabilities-6f7772b2-2f33-4bd2-8ca7-dae3b2b3ef25?ui=en-US&amp;rs=en-US&amp;ad=US\&quot;&gt;Microsoft Accessibility Support website&lt;/a&gt; - &lt;a lang=\&quot;fr\&quot; href=\&quot;https://disic.github.io/guides-documents_bureautiques_accessibles/html/\&quot; hreflang=\&quot;fr\&quot;&gt;(FR) Créer des documents bureautiques accessible &lt;abbr title=\&quot;direction interministérielle du numérique et du système d’information et de communication\&quot; lang=\&quot;fr\&quot;&gt;DINSIC&lt;/abbr&gt;.&lt;/a&gt;    &lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2016  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt;"
});



documentTitles["word-test.html#check-accessibility-in-word"] = "Check accessibility in Word";
index.add({
    url: "word-test.html#check-accessibility-in-word",
    title: "Check accessibility in Word",    
    body: "# Check accessibility in Word &lt;script&gt;$(document).ready(function () {     setBreadcrumb([         {\&quot;label\&quot;:\&quot;Microsoft Word\&quot;, \&quot;url\&quot;:\&quot;./word.html\&quot;},         {\&quot;label\&quot;:\&quot;How to test my document\&quot;}     ]);     addSubMenu([         {\&quot;label\&quot;:\&quot;Create an accessible document\&quot;,\&quot;url\&quot;:\&quot;word-create.html\&quot;},          {\&quot;label\&quot;:\&quot;How to test my document\&quot;,\&quot;url\&quot;:\&quot;word-test.html\&quot;, \&quot;expanded\&quot;: true}     ]); });&lt;/script&gt;  &lt;style&gt;code {font-weight: bold;}h2{padding-top: 1.5rem;}&lt;/style&gt; &lt;span data-menuitem=\&quot;word\&quot;&gt;&lt;/span&gt;  "
});

documentTitles["word-test.html#automated-tests"] = "Automated tests";
index.add({
    url: "word-test.html#automated-tests",
    title: "Automated tests",    
    body: "## Automated tests "
});

documentTitles["word-test.html#office-accessibility-verification-tool"] = "Office Accessibility Verification Tool";
index.add({
    url: "word-test.html#office-accessibility-verification-tool",
    title: "Office Accessibility Verification Tool",    
    body: "### Office Accessibility Verification Tool  Start your tests with the Office Accessibility Verification Tool:  **File &gt; Info &gt; Check for Issues &gt; Check Accessibility**  &lt;img alt=\&quot;Accessibility checker screenshot\&quot; src=\&quot;./images/word_verification_en.png\&quot; class=\&quot;img-fluid\&quot; /&gt;    **Important:** if you encounter some difficulties, try to save your document from within Word 2010 in \&quot;.docx\&quot; format. The option to \&quot;Maintain compatibility with previous versions of Word\&quot; has to remains unchecked.   "
});

documentTitles["word-test.html#color-contrasts"] = "Color contrasts";
index.add({
    url: "word-test.html#color-contrasts",
    title: "Color contrasts",    
    body: "### Color contrasts [Download Colour Contrast Analyser](https://developer.paciellogroup.com/resources/contrastanalyser/)  &lt;img alt=\&quot;colour contrast analyser screenshot\&quot; src=\&quot;./images/cca.png\&quot; class=\&quot;img-fluid\&quot; /&gt;    "
});

documentTitles["word-test.html#screen-reader-jaws-nvda"] = "Screen reader: JAWS &amp; NVDA";
index.add({
    url: "word-test.html#screen-reader-jaws-nvda",
    title: "Screen reader: JAWS &amp; NVDA",    
    body: "### Screen reader: JAWS &amp; NVDA To complete the verification, you can test with a screen reader.  It helps you to simulate the configuration as the visually impaired and blind people. [For further information to navigate with JAWS &amp; NVDA](https://a11y-guidelines.orange.com/web/methodes-outils-lecteur-ecran.html)  "
});

documentTitles["word-test.html#self-assessment-grids"] = "Self-Assessment Grids";
index.add({
    url: "word-test.html#self-assessment-grids",
    title: "Self-Assessment Grids",    
    body: "### Self-Assessment Grids  - &lt;a href=\&quot;AXS_assess_grid_WORD_EN.xlsx\&quot;&gt;Accessibility Assessment Grid for Word (16 ko)&lt;/a&gt; - &lt;a href=\&quot;AXS_assess_grid_PPT_EN.xlsx\&quot;&gt;Accessibility Assessment Grid for PowerPoint (16 ko)&lt;/a&gt;  These Grids are designed for self-assessment of the accessibility of Word and PowerPoint documents:  &lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2016  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt;"
});


