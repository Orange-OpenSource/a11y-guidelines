
var index = lunr(function () {
    this.field('body');
    this.ref('url');
});

var documentTitles = {};



documentTitles["about.html#about"] = "About";
index.add({
    url: "about.html#about",
    title: "About",    
    body: "# About     &lt;script&gt;$(document).ready(function () {     setBreadcrumb([{\&quot;label\&quot;:\&quot;About\&quot;}]); });&lt;/script&gt;  Documentation under the [CC BY SA 3.0 license](https://github.com/Orange-OpenSource/a11y-guidelines/blob/master/LICENSE), source code of this site and examples are available [on github](https://github.com/Orange-OpenSource/a11y-guidelines).    The Orange logo and some images or screenshots are the property of Orange:  Copyright (C) 2016 Orange SA All rights reserved   [List of the concerned files](/NOTICE.txt)  &amp;nbsp; &lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2016  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt;"
});



documentTitles["contact.html#your-opinion-matters"] = "Your opinion matters ...";
index.add({
    url: "contact.html#your-opinion-matters",
    title: "Your opinion matters ...",    
    body: "# Your opinion matters ...    &lt;script&gt;$(document).ready(function () {     setBreadcrumb([{\&quot;label\&quot;:\&quot;Contact\&quot;}]); });&lt;/script&gt;  Have a bug or a feature request?    Please first check [the issues](https://github.com/Orange-OpenSource/a11y-guidelines/issues) and search for existing and closed issues. If your problem or idea is not addressed yet, please [open a new issue](https://github.com/Orange-OpenSource/a11y-guidelines/issues/new).  &amp;nbsp; &lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2016  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt;"
});



documentTitles["index.html#accessibility-recommendations-orange-for-editorial"] = "Accessibility recommendations Orange for editorial";
index.add({
    url: "index.html#accessibility-recommendations-orange-for-editorial",
    title: "Accessibility recommendations Orange for editorial",    
    body: "# Accessibility recommendations Orange for editorial  &lt;script&gt;$(document).ready(function () {     setBreadcrumb([{\&quot;label\&quot;:\&quot;Presentation\&quot;}]); });&lt;/script&gt;  "
});

documentTitles["index.html#general-editorial-recommendations"] = "General editorial recommendations";
index.add({
    url: "index.html#general-editorial-recommendations",
    title: "General editorial recommendations",    
    body: "## General editorial recommendations The general recommendations describe the recommendations to respect whatever the type of content (web, email, Word document, etc.). &lt;ul role=\&quot;presentation\&quot;&gt; &lt;li&gt;&lt;a href=\&quot;./editorial.html\&quot;&gt;Access to general editorial recommendations&lt;/a&gt;&lt;/li&gt; &lt;/ul&gt;  &amp;nbsp; &lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2016  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt;"
});



documentTitles["editorial.html#general-editorial-recommendations"] = "General editorial recommendations";
index.add({
    url: "editorial.html#general-editorial-recommendations",
    title: "General editorial recommendations",    
    body: "# General editorial recommendations &lt;script&gt;$(document).ready(function () {     setBreadcrumb([{\&quot;label\&quot;:\&quot;General editorial recommendations\&quot;}]); });&lt;/script&gt;  &lt;style&gt;h3 {font-size: 1rem;}&lt;/style&gt;  "
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


