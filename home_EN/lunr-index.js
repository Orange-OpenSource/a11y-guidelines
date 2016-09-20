
var index = lunr(function () {
    this.field('body');
    this.ref('url');
});

var documentTitles = {};



documentTitles["contact.html#your-opinion-matters"] = "Your opinion matters ...";
index.add({
    url: "contact.html#your-opinion-matters",
    title: "Your opinion matters ...",    
    body: "# Your opinion matters ...    &lt;script&gt;$(document).ready(function () {     setBreadcrumb([{\&quot;label\&quot;:\&quot;Contact\&quot;}]); });&lt;/script&gt;  Have a bug or a feature request?    Please first check [the issues](https://github.com/Orange-OpenSource/a11y-guidelines/issues) and search for existing and closed issues. If your problem or idea is not addressed yet, please [open a new issue](https://github.com/Orange-OpenSource/a11y-guidelines/issues/new).   &lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2016  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt;"
});



documentTitles["organisation.html#site-organization"] = "Site organization";
index.add({
    url: "organisation.html#site-organization",
    title: "Site organization",    
    body: "# Site organization &lt;script&gt;$(document).ready(function () {     setBreadcrumb([{\&quot;label\&quot;:\&quot;Organization\&quot;}]); });&lt;/script&gt;  This site is divided into several headings. Each one presents the Orange accessibility recommendations for a type of platform.   These different topics are available through the navigation menu located in the header.  Each section contains: - Recommendations for the targeted platform - Resources to learn and test yourself - Technical examples  "
});

documentTitles["organisation.html#headings-list"] = "Headings list";
index.add({
    url: "organisation.html#headings-list",
    title: "Headings list",    
    body: "## Headings list "
});

documentTitles["organisation.html#home"] = "Home";
index.add({
    url: "organisation.html#home",
    title: "Home",    
    body: "### Home It is the current heading : - Succinct presentation of the accessibility. - Site organization.  "
});

documentTitles["organisation.html#web"] = "Web";
index.add({
    url: "organisation.html#web",
    title: "Web",    
    body: "### Web Accessibility guidelines for the Web. - The essential criteria to meet. - The technical recommendations for the web. - Methods and tools to make a site accessible. - Functional examples.  "
});

documentTitles["organisation.html#mobile-tbd"] = "Mobile (TBD)";
index.add({
    url: "organisation.html#mobile-tbd",
    title: "Mobile (TBD)",    
    body: "### Mobile (TBD) Here you will find the Orange accessibility recommendations for mobile.  &lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2016  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt;"
});



documentTitles["index.html#orange-accessibility-guidelines"] = "Orange accessibility guidelines";
index.add({
    url: "index.html#orange-accessibility-guidelines",
    title: "Orange accessibility guidelines",    
    body: "# Orange accessibility guidelines &lt;script&gt;$(document).ready(function () {     setBreadcrumb([{\&quot;label\&quot;:\&quot;Presentation\&quot;}]); });&lt;/script&gt;  "
});

documentTitles["index.html#warning"] = "Warning";
index.add({
    url: "index.html#warning",
    title: "Warning",    
    body: "## Warning  This site is under construction. Some items are not fully finalized, others may evolve over the coming weeks.   Any comments or suggestions are welcome.  Thanks for your understanding.  "
});

documentTitles["index.html#what-is-digital-accessibility"] = "What is digital accessibility ?";
index.add({
    url: "index.html#what-is-digital-accessibility",
    title: "What is digital accessibility ?",    
    body: "## What is digital accessibility ?  &lt;div class=\&quot;axs-picto axs\&quot;&gt; Digital accessibility is about making possible the access to digital information regardless of the nature of the disability of the persons and how each consults the information. It involves different technologies such as the Web, videos, Word and PDF documents, but also the digital television or mobile phones.   It is not a question of increasing the information media, but to respect the functional, graphical, technical and editorial rules that will enable everyone to access information no matter what tools they use.  "
});

documentTitles["index.html#who-is-concerned-by-the-digital-accessibility"] = "Who is concerned by the digital accessibility ?";
index.add({
    url: "index.html#who-is-concerned-by-the-digital-accessibility",
    title: "Who is concerned by the digital accessibility ?",    
    body: "## Who is concerned by the digital accessibility ?  The situations of handicap identified are not only those that are visible.    They are not necessarily final and can happen to us at some point in our life.  &amp;nbsp;   ![](./images/chat.png)  &lt;div class=\&quot;sr-only\&quot;&gt;     The following quotes are a great example of that :     &lt;ul&gt;         &lt;li&gt;The subtitles are useful to me because my mother tongue is not French&lt;/li&gt;         &lt;li&gt;It is useful not to be forced to print in color to understand this map.&lt;/li&gt;         &lt;li&gt;After working the whole day in front of a screen, reading text in small font gets more difficult.&lt;/li&gt;     &lt;/ul&gt; &lt;/div&gt;  "
});

documentTitles["index.html#situations-of-handicap"] = "Situations of handicap";
index.add({
    url: "index.html#situations-of-handicap",
    title: "Situations of handicap",    
    body: "## Situations of handicap  "
});

documentTitles["index.html#hearing-impairment"] = "Hearing impairment";
index.add({
    url: "index.html#hearing-impairment",
    title: "Hearing impairment",    
    body: "### Hearing impairment &lt;div class=\&quot;axs-picto auditif\&quot;&gt;     &lt;ul&gt;         &lt;li&gt;Deaf people&lt;/li&gt;         &lt;li&gt;Hard of hearing people&lt;/li&gt;         &lt;li&gt;Deaf-blind people&lt;/li&gt;         &lt;li&gt;Difficult speech perception in noisy environments&lt;/li&gt;     &lt;/ul&gt; **Suitable solutions :** adding scripts or subtitles &lt;/div&gt;  "
});

documentTitles["index.html#visual-impairment"] = "Visual impairment";
index.add({
    url: "index.html#visual-impairment",
    title: "Visual impairment",    
    body: "### Visual impairment  &lt;div class=\&quot;axs-picto visuel\&quot;&gt;     &lt;ul&gt;         &lt;li&gt;People with a remaining part of vision or those with an uncorrectable vision.&lt;/li&gt;         &lt;li&gt;People that can barely distinguish colors or not at all (colorblind, achromatopsia).&lt;/li&gt;         &lt;li&gt;People highly sensitive to color brightness&lt;/li&gt;         &lt;li&gt;Blind people&lt;/li&gt;         &lt;li&gt;Deaf and blind people&lt;/li&gt;     &lt;/ul&gt;     **Suitable solutions :** tablet with Braille support, speech synthesis, display customisation. &lt;/div&gt;  "
});

documentTitles["index.html#cognitive-impairment"] = "Cognitive impairment";
index.add({
    url: "index.html#cognitive-impairment",
    title: "Cognitive impairment",    
    body: "### Cognitive impairment &lt;div class=\&quot;axs-picto cognitif\&quot;&gt;     &lt;ul&gt;         &lt;li&gt;Dyslexia, memory, concentration, comprehension&lt;/li&gt;         &lt;li&gt;Solving problems&lt;/li&gt;          &lt;li&gt;Reading&lt;/li&gt;         &lt;li&gt;Language&lt;/li&gt;         &lt;li&gt;Reasoning&lt;/li&gt;     &lt;/ul&gt; **Suitable solutions :** prioritization and simplification of the information, giving importance to the page layout. &lt;/div&gt;  "
});

documentTitles["index.html#motor-and-physical-handicap"] = "Motor and physical handicap";
index.add({
    url: "index.html#motor-and-physical-handicap",
    title: "Motor and physical handicap",    
    body: "### Motor and physical handicap &lt;div class=\&quot;axs-picto physique\&quot;&gt;     &lt;ul&gt;         &lt;li&gt;Gesture coordination disorder (dyspraxia)&lt;/li&gt;          &lt;li&gt;Muscular dystrophy&lt;/li&gt;         &lt;li&gt;Rheumatic disease&lt;/li&gt;         &lt;li&gt;A broken arm&lt;/li&gt;     &lt;/ul&gt; **Suitable solutions :** suitable devices (mouse, keyboard...) &lt;/div&gt;  "
});

documentTitles["index.html#equipment-handicap"] = "Equipment handicap";
index.add({
    url: "index.html#equipment-handicap",
    title: "Equipment handicap",    
    body: "### Equipment handicap &lt;div class=\&quot;axs-picto materiel\&quot;&gt;     The use of the rules of the accessibility serve beyond situations of the identified handicaps.       The digital accessibility brings comfort for all the following :         &lt;ul&gt;         &lt;li&gt;Mobile device and smartphone users&lt;/li&gt;         &lt;li&gt;Low bandwidth users&lt;/li&gt;         &lt;li&gt;Elderly people&lt;/li&gt;         &lt;li&gt;Noisy environments such as open space, shops, reception...&lt;/li&gt;         &lt;li&gt;Inappropriate equipment (black and white printer...)&lt;/li&gt;     &lt;/ul&gt; &lt;/div&gt;  &amp;nbsp;  &lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2016  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt;"
});



documentTitles["about.html#about"] = "About";
index.add({
    url: "about.html#about",
    title: "About",    
    body: "# About     &lt;script&gt;$(document).ready(function () {     setBreadcrumb([{\&quot;label\&quot;:\&quot;About\&quot;}]); });&lt;/script&gt;  Documentation under the [CC BY SA 3.0 license](https://github.com/Orange-OpenSource/a11y-guidelines/blob/master/LICENSE), source code of this site and examples are available [on github](https://github.com/Orange-OpenSource/a11y-guidelines).    The Orange logo and some images or screenshots are property of Orange:  Copyright (C) 2016 Orange SA All rights reserved   [List of the concerned files](/notice.txt)   &lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2016  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt;"
});


