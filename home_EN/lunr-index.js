
var index = lunr(function () {
    this.field('body');
    this.ref('url');
});

var documentTitles = {};



documentTitles["about.html#orange-accessibility-guidelines-h2-classpage-titleabouth2"] = "Orange accessibility guidelines &lt;h2 class=\&quot;page-title\&quot;&gt;About&lt;/h2&gt;";
index.add({
    url: "about.html#orange-accessibility-guidelines-h2-classpage-titleabouth2",
    title: "Orange accessibility guidelines &lt;h2 class=\&quot;page-title\&quot;&gt;About&lt;/h2&gt;",    
    body: "# Orange accessibility guidelines &lt;h2 class=\&quot;page-title\&quot;&gt;About&lt;/h2&gt; &lt;script&gt;$(document).ready(function () {     setBreadcrumb([{\&quot;label\&quot;:\&quot;About\&quot;}]); });&lt;/script&gt;  Documentation under the [CC BY SA 3.0 license](https://github.com/Orange-OpenSource/a11y-guidelines/blob/master/LICENSE), source code of this site and examples are available [on github](https://github.com/Orange-OpenSource/a11y-guidelines).    The Orange logo and some images or screenshots are property of Orange:  Copyright (C) 2016 Orange SA All rights reserved   [List of the concerned files](/NOTICE.txt)  "
});

documentTitles["about.html#cookie-management"] = "Cookie management";
index.add({
    url: "about.html#cookie-management",
    title: "Cookie management",    
    body: "## Cookie management  You can change your preferences at any time directly from the &lt;a role=\&quot;button\&quot; href=\&quot;javascript:tarteaucitron.userInterface.openPanel();\&quot;&gt;Cookie Management Panel&lt;/a&gt;.  &amp;nbsp; &lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2016  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt;"
});



documentTitles["contact.html#orange-accessibility-guidelines-h2-classpage-titleyour-opinion-mattersh2"] = "Orange accessibility guidelines &lt;h2 class=\&quot;page-title\&quot;&gt;Your opinion matters…&lt;/h2&gt;";
index.add({
    url: "contact.html#orange-accessibility-guidelines-h2-classpage-titleyour-opinion-mattersh2",
    title: "Orange accessibility guidelines &lt;h2 class=\&quot;page-title\&quot;&gt;Your opinion matters…&lt;/h2&gt;",    
    body: "# Orange accessibility guidelines &lt;h2 class=\&quot;page-title\&quot;&gt;Your opinion matters…&lt;/h2&gt;  &lt;script&gt;$(document).ready(function () {     setBreadcrumb([{\&quot;label\&quot;:\&quot;Contact\&quot;}]); });&lt;/script&gt;  Have a bug or a feature request?    Please first check [the issues](https://github.com/Orange-OpenSource/a11y-guidelines/issues) and search for existing and closed issues. If your problem or idea is not addressed yet, please [open a new issue](https://github.com/Orange-OpenSource/a11y-guidelines/issues/new).  &amp;nbsp;  &lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2016  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt;"
});



documentTitles["focus.html#orange-accessibility-guidelines"] = "Orange accessibility guidelines";
index.add({
    url: "focus.html#orange-accessibility-guidelines",
    title: "Orange accessibility guidelines",    
    body: "# Orange accessibility guidelines &lt;h2 class=\&quot;page-title\&quot;&gt;Types of Disabilities&lt;/h2&gt;  &lt;script&gt;$(document).ready(function () {     setBreadcrumb([{\&quot;label\&quot;:\&quot;Disability situations\&quot;}]);     addSubMenu([         {\&quot;label\&quot;:\&quot;Cognitive disability\&quot;,\&quot;url\&quot;:\&quot;focus-cognitif.html\&quot;},         {\&quot;label\&quot;:\&quot;Older people\&quot;,\&quot;url\&quot;:\&quot;focus-seniors.html\&quot;}     ]); });&lt;/script&gt;  "
});

documentTitles["focus.html#hearing-impairments"] = "Hearing impairments";
index.add({
    url: "focus.html#hearing-impairments",
    title: "Hearing impairments",    
    body: "### Hearing impairments &lt;div class=\&quot;axs-picto auditif\&quot;&gt;     &lt;ul&gt;         &lt;li&gt;Deaf people&lt;/li&gt;         &lt;li&gt;Hard of hearing people&lt;/li&gt;         &lt;li&gt;Deaf-blind people&lt;/li&gt;         &lt;li&gt;Difficulty understanding speech in noisy environments&lt;/li&gt;     &lt;/ul&gt; **Examples of assistive technologies for video:** transcript (text document that contains the text spoken in a video), captions (text displayed on screen that describes the dialog or sound of a video).   &lt;/div&gt;  "
});

documentTitles["focus.html#visual-impairments"] = "Visual impairments";
index.add({
    url: "focus.html#visual-impairments",
    title: "Visual impairments",    
    body: "### Visual impairments  &lt;div class=\&quot;axs-picto visuel\&quot;&gt;     &lt;ul&gt;         &lt;li&gt;People with low vision&lt;/li&gt;         &lt;li&gt;People with color blindness &lt;/li&gt;         &lt;li&gt;People sensitive to bright colors or lights&lt;/li&gt;         &lt;li&gt;Blind people&lt;/li&gt;         &lt;li&gt;Deaf-blind people&lt;/li&gt;     &lt;/ul&gt;  **Examples of assistive technologies:** braille display, screen reader, screen magnifier, customization of the display options.   &lt;/div&gt;  "
});

documentTitles["focus.html#cognitive-impairments"] = "Cognitive impairments";
index.add({
    url: "focus.html#cognitive-impairments",
    title: "Cognitive impairments",    
    body: "### Cognitive impairments  &lt;div class=\&quot;axs-picto cognitif\&quot;&gt;     &lt;ul&gt;         &lt;li&gt;People with dyslexia&lt;/li&gt;         &lt;li&gt;People with autism&lt;/li&gt;         &lt;li&gt;Other disorder involving problems with reading, memory, concentration, understanding, problem solving, and language. &lt;/li&gt;     &lt;/ul&gt;  **Examples of assistive technologies:** speech recognition, hierarchized and simplified information, sans-serif fonts (Arial, OpenDyslexic), customized text spacing and colors.  &lt;/div&gt;  "
});

documentTitles["focus.html#motor-and-dexterity-impairments"] = "Motor and dexterity impairments";
index.add({
    url: "focus.html#motor-and-dexterity-impairments",
    title: "Motor and dexterity impairments",    
    body: "### Motor and dexterity impairments &lt;div class=\&quot;axs-picto physique\&quot;&gt;     &lt;ul&gt;         &lt;li&gt;People with limited or no use of their hands&lt;/li&gt;          &lt;li&gt;People with uncontrollable tremors&lt;/li&gt;         &lt;li&gt;People with difficulties to manipulate a mouse or type on a keyboard&lt;/li&gt;         &lt;li&gt;People not able to use a mouse or a keyboard&lt;/li&gt;     &lt;/ul&gt;  **Examples of assistive technologies:** ergonomic keyboard and mouse, keyboard keyguard, joysticks, trackballs, switches, speech recognition software.   &amp;nbsp;   **Digital accessibility is useful beyond physical and mental impairments and brings comfort to everyone** in case of:   &lt;ul&gt;     &lt;li&gt;Noisy environments such as open space, shop, reception hall&lt;/li&gt;     &lt;li&gt;Inadequate resources (black and white printer, low bandwidth Internet)&lt;/li&gt;     &lt;li&gt;Online forms that can be completed using the keyboard alone without the need to use the mouse&lt;/li&gt; &lt;/ul&gt;  &lt;/div&gt;  &lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2016  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt;"
});



documentTitles["focus-cognitif.html#orange-accessibility-guidelines"] = "Orange accessibility guidelines";
index.add({
    url: "focus-cognitif.html#orange-accessibility-guidelines",
    title: "Orange accessibility guidelines",    
    body: "# Orange accessibility guidelines &lt;h2 class=\&quot;page-title\&quot;&gt;Cognitive disability&lt;/h2&gt;  &lt;script&gt;$(document).ready(function () {     setBreadcrumb([{\&quot;label\&quot;:\&quot;Disability situations\&quot;, \&quot;url\&quot;: \&quot;./focus.html\&quot;},         {\&quot;label\&quot;:\&quot;Cognitive disability\&quot;}]);     addSubMenu([         {\&quot;label\&quot;:\&quot;Cognitive disability\&quot;,\&quot;url\&quot;:\&quot;focus-cognitif.html\&quot;},         {\&quot;label\&quot;:\&quot;Older people\&quot;,\&quot;url\&quot;:\&quot;focus-seniors.html\&quot;}     ]); });&lt;/script&gt;  &lt;span data-menuitem=\&quot;focus\&quot;&gt;&lt;/span&gt;  **Cognitive disability** is the consequence of cognitive dysfunctions: difficulties with memory, problems coping with change, language, receptive identification and gestures. Cognitive disability **does not imply intellectual deficiency**, but difficulties to muster capacities.  This should not be mistaken for mental or psychological handicap:  - **Mental handicap**, which results from an intellectual disability: a limited capacity to learn and an intellectual development significantly lower than average that is reflected in some difficulty thinking, conceptualizing, communicating, making decisions, etc. - **Psychological handicap**, which results from invalidating psychological trouble. Like cognitive handicap, psychological handicap does not imply intellectual deficiency. It is characterized by alternating mental states of calm and tension, and by difficulties to acquire or express psychosocial abilities, with attention deficits and difficulties to elaborate and follow a plan of action. It can be translated in anguish, cognitive crises (problems with memorization, attention, organization, anticipation, adaptation to a context) and in difficulties to relate to people and in communication.  "
});

documentTitles["focus-cognitif.html#learning-disabilities-dysorders"] = "Learning disabilities (“Dys”orders)";
index.add({
    url: "focus-cognitif.html#learning-disabilities-dysorders",
    title: "Learning disabilities (“Dys”orders)",    
    body: "### Learning disabilities (“Dys”orders)  Learning disabilities are lasting neurologically-based processing problems. These problems can interfere with cognitive function such as reading, motor coordination, computing… it is not an intellectual deficiency, but a different mode of reasoning.  Learning disabilities encompass different types of problems:  - Dyslexia: reading disorder - Dysorthograph: writing disorder - Dysphasia: language disorder - Dyscalculia: trouble with arithmetic, logic, and mathematical reasoning - Dyspraxia: coordination disorder  Digital accessibility has also to take in account cognitive disabilities.   "
});

documentTitles["focus-cognitif.html#examples-of-barriers-met-by-dyslexic-users"] = "Examples of barriers met by dyslexic users:";
index.add({
    url: "focus-cognitif.html#examples-of-barriers-met-by-dyslexic-users",
    title: "Examples of barriers met by dyslexic users:",    
    body: "#### Examples of barriers met by dyslexic users:  - Information overload - Column layout - Long blocks of text - Serif font - Blinding white of non uniform backgrounds - Animated elements   &lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2016  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt;"
});



documentTitles["focus-seniors.html#orange-accessibility-guidelines"] = "Orange accessibility guidelines";
index.add({
    url: "focus-seniors.html#orange-accessibility-guidelines",
    title: "Orange accessibility guidelines",    
    body: "# Orange accessibility guidelines &lt;h2 class=\&quot;page-title\&quot;&gt;Older people&lt;/h2&gt;  &lt;script&gt;$(document).ready(function () {     setBreadcrumb([{\&quot;label\&quot;:\&quot;Disability situations\&quot;, \&quot;url\&quot;: \&quot;./focus.html\&quot;},         {\&quot;label\&quot;:\&quot;Older people\&quot;}]);     addSubMenu([         {\&quot;label\&quot;:\&quot;Cognitive disability\&quot;,\&quot;url\&quot;:\&quot;focus-cognitif.html\&quot;},         {\&quot;label\&quot;:\&quot;Older people\&quot;,\&quot;url\&quot;:\&quot;focus-seniors.html\&quot;}     ]); });&lt;/script&gt;  &lt;span data-menuitem=\&quot;focus\&quot;&gt;&lt;/span&gt;  "
});

documentTitles["focus-seniors.html#summary"] = "Summary";
index.add({
    url: "focus-seniors.html#summary",
    title: "Summary",    
    body: "### Summary  An older person (“senior”) belongs to a category of people whose definition varies according to context: work, health, etc. Regarding health, the World Health Organisation defines an older person as being over 60 years old. They estimate that between 2000 and 2050 this population will double on a world level, going from 11% to 22%. According to INSERM, French National Institute of Health and Medical Research, the decline in cognitive abilities begins at 45.  Age-related disabilities impact our use of digital technologies.  "
});

documentTitles["focus-seniors.html#obstacles-found"] = "Obstacles found";
index.add({
    url: "focus-seniors.html#obstacles-found",
    title: "Obstacles found",    
    body: "### Obstacles found  Obstacles found by people suffering from age-related disabilities can be numerous:  - Lower **vision**: lower sensitivity to contrast, colour blindness, lower capacity to concentrate on close objects, make it difficult to read a digital resource. - Lower **motor** capabilities: lower dexterity, fine motor control, make it difficult to handle a mouse and to click on smaller elements. - Lower **hearing**: lower ability to perceive high-pitched sounds, to separate sounds, make it difficult to listen to audio documents (especially in a noisy environment). - Lower **cognitive** capabilities: lower short-term memory, concentration, make it difficult to browse and achieve tasks.  "
});

documentTitles["focus-seniors.html#examples-of-solutions"] = "Examples of solutions";
index.add({
    url: "focus-seniors.html#examples-of-solutions",
    title: "Examples of solutions",    
    body: "### Examples of solutions  "
});

documentTitles["focus-seniors.html#lower-vision"] = "Lower vision";
index.add({
    url: "focus-seniors.html#lower-vision",
    title: "Lower vision",    
    body: "#### Lower vision  - The user can set the size of all the text contents in the application. - Colour contrasts are high. - Videos feature audiodescription or a text transcript. - Images feature a text alternative.  "
});

documentTitles["focus-seniors.html#lower-motor-capacities"] = "Lower motor capacities";
index.add({
    url: "focus-seniors.html#lower-motor-capacities",
    title: "Lower motor capacities",    
    body: "#### Lower motor capacities  - Keyboard navigation makes it easy to use all functionalities without any keyboard trap. - Focus is always very visible. - Clickable zones are large enough (for instance in mobile applications: width and height at least the equivalent of 48 px)  "
});

documentTitles["focus-seniors.html#lower-hearing"] = "Lower hearing";
index.add({
    url: "focus-seniors.html#lower-hearing",
    title: "Lower hearing",    
    body: "#### Lower hearing  - Videos feature captions or a text transcript  "
});

documentTitles["focus-seniors.html#lower-cognitive-capabilities"] = "Lower cognitive capabilities";
index.add({
    url: "focus-seniors.html#lower-cognitive-capabilities",
    title: "Lower cognitive capabilities",    
    body: "#### Lower cognitive capabilities  - Every screen has the same logic regarding content organisation and navigation - Interface components (links, buttons, etc.) area easily identifiable - One can pause or stop moving elements and sounds - There is no time limit for an action - Field label texts are explicit, a help mechanism is available if needed, errors in input are identified and explained - Help is available for the user  &lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2016  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt;"
});



documentTitles["organisation.html#orange-accessibility-guidelines-h2-classpage-titlesite-organizationh2"] = "Orange accessibility guidelines &lt;h2 class=\&quot;page-title\&quot;&gt;Site organization&lt;/h2&gt;";
index.add({
    url: "organisation.html#orange-accessibility-guidelines-h2-classpage-titlesite-organizationh2",
    title: "Orange accessibility guidelines &lt;h2 class=\&quot;page-title\&quot;&gt;Site organization&lt;/h2&gt;",    
    body: "# Orange accessibility guidelines &lt;h2 class=\&quot;page-title\&quot;&gt;Site organization&lt;/h2&gt; &lt;script&gt;$(document).ready(function () {     setBreadcrumb([{\&quot;label\&quot;:\&quot;Organization\&quot;}]); });&lt;/script&gt;  This site is divided into several headings. Each one presents Orange accessibility recommendations for a type of platform.   These different topics are available through the navigation menu located in the header.  Each section contains: - Recommendations for the targeted platform - Resources to learn and test yourself - Technical examples  "
});

documentTitles["organisation.html#headings-list"] = "Headings list";
index.add({
    url: "organisation.html#headings-list",
    title: "Headings list",    
    body: "### Headings list "
});

documentTitles["organisation.html#home"] = "Home";
index.add({
    url: "organisation.html#home",
    title: "Home",    
    body: "#### Home This is the current section: - Succinct presentation of accessibility, - Site organization.  "
});

documentTitles["organisation.html#web"] = "Web";
index.add({
    url: "organisation.html#web",
    title: "Web",    
    body: "#### Web Accessibility guidelines for the Web. - Essential criteria to meet, - Technical recommendations for the web, - Methods and tools to make a site accessible, - Functional examples.  "
});

documentTitles["organisation.html#mobile-abbr-titleto-be-donetbdabbr"] = "Mobile (&lt;abbr title=\&quot;to be done\&quot;&gt;TBD&lt;/abbr&gt;)";
index.add({
    url: "organisation.html#mobile-abbr-titleto-be-donetbdabbr",
    title: "Mobile (&lt;abbr title=\&quot;to be done\&quot;&gt;TBD&lt;/abbr&gt;)",    
    body: "#### Mobile (&lt;abbr title=\&quot;to be done\&quot;&gt;TBD&lt;/abbr&gt;) Here you will find the Orange accessibility recommendations for mobile.  &amp;nbsp; &lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2016  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt;"
});



documentTitles["index.html#orange-accessibility-guidelines"] = "Orange accessibility guidelines";
index.add({
    url: "index.html#orange-accessibility-guidelines",
    title: "Orange accessibility guidelines",    
    body: "# Orange accessibility guidelines &lt;script&gt;$(document).ready(function () {     setBreadcrumb([{\&quot;label\&quot;:\&quot;Presentation\&quot;}]); });&lt;/script&gt;  &lt;h2 class=\&quot;page-title\&quot;&gt;What is digital accessibility?&lt;/h2&gt;  Digital accessibility is about making the access to digital information possible regardless of the nature of a person’s disability and how they consult the information. It involves different technologies such as the Web, videos, Word and PDF documents, but also digital television or mobile phones.   It is not a question of increasing the number of information outlets, but of respecting functional, graphical, technical and editorial rules that will enable everyone to access information no matter what tools they use.  "
});

documentTitles["index.html#who-is-concerned-by-digital-accessibility"] = "Who is concerned by digital accessibility?";
index.add({
    url: "index.html#who-is-concerned-by-digital-accessibility",
    title: "Who is concerned by digital accessibility?",    
    body: "## Who is concerned by digital accessibility?  Being disabled is not limited to what other people can see. Also, it is not necessarily a permanent situation and it can happen to any of us at some point in our life.  &amp;nbsp;   ![](./images/chat.png)  &lt;div class=\&quot;sr-only\&quot;&gt;     The following quotes are a great example of that:     &lt;ul&gt;         &lt;li&gt;The subtitles are useful to me because my mother tongue is not French,&lt;/li&gt;         &lt;li&gt;It is useful not to be forced to print in colour to understand this map,&lt;/li&gt;         &lt;li&gt;After working the whole day in front of a screen, reading text in small fonts gets more difficult.&lt;/li&gt;     &lt;/ul&gt; &lt;/div&gt;  &lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2016  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt;"
});


