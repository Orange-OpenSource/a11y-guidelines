
var index = lunr(function () {
    this.field('body');
    this.ref('url');
});

var documentTitles = {};



documentTitles["index.html#orange-web-accessibility-guidelines"] = "Orange web accessibility guidelines";
index.add({
    url: "index.html#orange-web-accessibility-guidelines",
    title: "Orange web accessibility guidelines",    
    body: "# Orange web accessibility guidelines    &lt;script&gt;$(document).ready(function () {     setBreadcrumb([{\&quot;label\&quot;:\&quot;Presentation\&quot;}]); });&lt;/script&gt;  *** Accessibility, a benefit for all, a need for some! ***  "
});

documentTitles["index.html#web-accessibility-definition"] = "Web accessibility definition";
index.add({
    url: "index.html#web-accessibility-definition",
    title: "Web accessibility definition",    
    body: "## Web accessibility definition ** An accessible web service can be used by anyone: **  - A valid person, - elderly people, - people with disabilities (temporary or permanent).  ** and in all situations: **  - with any kind of material: web browser, PC, MAC, mobile phones, tablet; - in an unfavourable environment: poor luminosity, touchpad while moving, etc.; - with specific software that compensates a disability.    "
});

documentTitles["index.html#site-organization"] = "Site organization";
index.add({
    url: "index.html#site-organization",
    title: "Site organization",    
    body: "## Site organization  "
});

documentTitles["index.html#essential-criteria"] = "Essential criteria";
index.add({
    url: "index.html#essential-criteria",
    title: "Essential criteria",    
    body: "### Essential criteria List of the most important criteria according to your profile, based on a subset of the WCAG 2.1 level AA recommendations. A good way to be aware of the main criteria and commit progressively to accessibility.    "
});

documentTitles["index.html#requirements-list"] = "Requirements list";
index.add({
    url: "index.html#requirements-list",
    title: "Requirements list",    
    body: "### Requirements list This section is for developers. Everything you need to know to code accessible pages and to perform the tests to validate developments.  "
});

documentTitles["index.html#methods-and-testing-tools"] = "Methods and testing tools";
index.add({
    url: "index.html#methods-and-testing-tools",
    title: "Methods and testing tools",    
    body: "### Methods and testing tools For those who want to check the accessibility of their websites more or less automatically with tools. Finally, all the technical and methodological tools to review pages.  "
});

documentTitles["index.html#open-source-orange-tools"] = "Open source Orange tools";
index.add({
    url: "index.html#open-source-orange-tools",
    title: "Open source Orange tools",    
    body: "### Open source Orange tools Presentation of the Boosted library and the Comfort+ service.  "
});

documentTitles["index.html#examples"] = "Examples";
index.add({
    url: "index.html#examples",
    title: "Examples",    
    body: "### Examples Didactic examples for certain types of components or elements of the user interface particularly difficult to make accessible but frequently used. Everything is explained, just go ahead!  These examples use the [Boosted](http://boosted.orange.com/) library. It is based on [Bootstrap](http://getbootstrap.com/) and lets you create and quickly test the accessibility and responsiveness of a website. This library is branded with the Orange colours.  "
});

documentTitles["index.html#technical-articles"] = "Technical articles";
index.add({
    url: "index.html#technical-articles",
    title: "Technical articles",    
    body: "### Technical articles Technical articles on setting up web accessibility.  &amp;nbsp; &lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2016  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt;"
});



documentTitles["captcha.html#captcha-accessibility"] = "CAPTCHA Accessibility";
index.add({
    url: "captcha.html#captcha-accessibility",
    title: "CAPTCHA Accessibility",    
    body: "# CAPTCHA Accessibility &lt;script&gt;$(document).ready(function () {     setBreadcrumb([         {\&quot;label\&quot;:\&quot;Technical articles\&quot;, \&quot;url\&quot;:\&quot;techniques.html\&quot;},         {\&quot;label\&quot;:\&quot;CAPTCHA Accessibility\&quot;}     ]); });&lt;/script&gt;  "
});

documentTitles["captcha.html#introduction"] = "Introduction";
index.add({
    url: "captcha.html#introduction",
    title: "Introduction",    
    body: "## Introduction  A CAPTCHA (“Completely Automated Public Turing-test to tell Computers and Humans Apart”) is an automated test aimed at telling apart a human user from a software program. It is often used on forms to prevent spam. There are several types of CAPTCHAs, most of them are visual tests that ask the user to type a series of deformed letters displayed on the screen.  ![Visual captcha screenshot](./images/captchas/captcha.png)   **Example of a visual CAPTCHA**  "
});

documentTitles["captcha.html#first-analysis-captchas-and-users"] = "First analysis: CAPTCHAs and users";
index.add({
    url: "captcha.html#first-analysis-captchas-and-users",
    title: "First analysis: CAPTCHAs and users",    
    body: "## First analysis: CAPTCHAs and users CAPTCHAs are often problematic, even for savvy users. It is often necessary to undergo several trials before giving the right answer to a CAPTCHA. For some users a CAPTCHA is a no-go, plain and simple. For example a blind user cannot solve a visual CAPTCHA. Even if some sites provide alternatives, like audio CAPTCHAs in addition to visual CAPTCHAs, it actually seldom works. It’s even the first source of difficulty quoted by visually impaired users according to [WebAIM’s latest survey at the end of 2017](https://webaim.org/projects/screenreadersurvey7):  ![Graph from webaim survey](./images/captchas/webaim.png)    **CAPTCHAs pointed out by visually impaired users as most common annoyance (2017 WebAIM survey)**  The boom in computation means enables bots and other programs to be more and more efficient. It is quite easy nowadays to write a program that guesses the text in an image or vocalised in an audio file. For the CAPTCHA to stay efficient against bots, it is necessary to augment deformations in the picture and audio file, thus making it even harder for users to get it right. This is why Google is trying to find alternatives to differentiate between a human user and a robot. They now propose “No CAPTCHA”, a plain checkbox from the user’s point of view. It uses additional information such as screen resolution, mouse pointer moves, the time it takes to fill a form, etc.  ![no captcha screenshot](./images/captchas/nocaptcha.png)   **No CAPTCHA by Google**  Even if this solution is more efficient, it is still not satisfactory from an accessibility point of view because, in case of doubt, a standard CAPTCHA is displayed. It is often the case for a user who does not use a mouse but a keyboard, or for a screen reader user (visually impaired users). You must thus always provide an alternative contact means (email, telephone, etc.) in the case when the CAPTCHA cannot be filled. Between users that cannot input the CAPTCHA text and those who don’t understand what’s expected of them, adding a CAPTCHA is not benign regarding the audience of a site. Considering CAPTCHAs are problematic to many users, the first recommendation is to **not use a CAPTCHA**.  "
});

documentTitles["captcha.html#second-analysis-captcha-and-security"] = "Second analysis: CAPTCHA and security";
index.add({
    url: "captcha.html#second-analysis-captcha-and-security",
    title: "Second analysis: CAPTCHA and security",    
    body: "## Second analysis: CAPTCHA and security  In [a 2014 article by Google](https://security.googleblog.com/2014/12/are-you-robot-introducing-no-captcha.html), we read that artificial intelligence get a 99.8% score when solving “even the most difficult variant of distorted text” – thus getting a better score than a real user! Services can guess which font was used in an image, or whether the image contains an object (a cat, a car, a hat, etc.) Considering this (users bouncing from the site in frustration and uncertain security), we come back to our first recommendation: **do not use a CAPTCHA**.  "
});

documentTitles["captcha.html#recommended-solutions"] = "Recommended solutions";
index.add({
    url: "captcha.html#recommended-solutions",
    title: "Recommended solutions",    
    body: "## Recommended solutions  Our idea is, first, to determine risks and to ask ourselves the following questions: - What are the risks in case of an attack? - What is the real need, between bouncing bots off and providing a secured solution?  According to our answers, we will be able to provide the solution most fit to the problem.  "
});

documentTitles["captcha.html#honeypot-and-time-measuring-two-simple-techniques-to-put-in-place-to-identify-bots"] = "HoneyPot and Time measuring, two simple techniques to put in place to identify bots";
index.add({
    url: "captcha.html#honeypot-and-time-measuring-two-simple-techniques-to-put-in-place-to-identify-bots",
    title: "HoneyPot and Time measuring, two simple techniques to put in place to identify bots",    
    body: "## HoneyPot and Time measuring, two simple techniques to put in place to identify bots  These two techniques are transparent for the user, and the risks they pose are very limited. The first solution consists in adding a hidden field in the form. This will never be filled by a user. If you detect server-side that the field was filled, it must be malevolent software. The second technique consists in measuring the time it takes for the user to fill the form. If it is very fast, there’s a good chance that it’s malevolent software.  "
});

documentTitles["captcha.html#anti-spam-and-blacklist-solutions-to-remove-bot-requests"] = "Anti-spam and blacklist solutions to remove bot requests";
index.add({
    url: "captcha.html#anti-spam-and-blacklist-solutions-to-remove-bot-requests",
    title: "Anti-spam and blacklist solutions to remove bot requests",    
    body: "## Anti-spam and blacklist solutions to remove bot requests  It is also possible, server-side, to triage information with anti-spam software and automatically remove submissions from malevolent software by analysing content data and the originating IP.  "
});

documentTitles["captcha.html#a-logical-or-mathematical-test-also-called-textual-captcha"] = "A logical or mathematical test, also called textual CAPTCHA";
index.add({
    url: "captcha.html#a-logical-or-mathematical-test-also-called-textual-captcha",
    title: "A logical or mathematical test, also called textual CAPTCHA",    
    body: "## A logical or mathematical test, also called textual CAPTCHA  This is done through a simple sentence asking the user to copy a word, to solve a simple mathematical operation, etc.  - “Copy the word: ‘House’” - “How much is 2 plus 2?” - “Which animal meows?” - “What colour is the sky?”  Under the condition that the questions stay very basic, this kind of CAPTCHA will not be problematic to users. A good practice in this case will be to provide a refresh solution, which will be very helpful for people with cognitive impairments.  "
});

documentTitles["captcha.html#an-email-sms-or-phone-verification-for-reinforced-security"] = "An email, SMS or phone verification for reinforced security";
index.add({
    url: "captcha.html#an-email-sms-or-phone-verification-for-reinforced-security",
    title: "An email, SMS or phone verification for reinforced security",    
    body: "## An email, SMS or phone verification for reinforced security  This solution consists in sending an email, an SMS or in calling directly the user to make sure they can confirm the transaction, by clicking on a link or by sending the code they received. This solution is at the same time more constraining for the user who must communicate personal information and more tedious to put in place, but it’s a very efficient solution when the security level needs to be high.  "
});

documentTitles["captcha.html#summary"] = "Summary";
index.add({
    url: "captcha.html#summary",
    title: "Summary",    
    body: "## Summary  There is no perfect solution, either for the user or security-wise. You should opt for the best technique according to the service provided. Also, it is important in the case of attack to have logs to analyse and to prepare for further attacks.  &amp;nbsp; &lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2016  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt;"
});



documentTitles["fondamentaux.html#wcag-criteria-by-theme"] = "WCAG criteria by theme";
index.add({
    url: "fondamentaux.html#wcag-criteria-by-theme",
    title: "WCAG criteria by theme",    
    body: "# WCAG criteria by theme  &lt;script&gt;$(document).ready(function () {     setBreadcrumb([{\&quot;label\&quot;:\&quot;WCAG criteria by theme\&quot;}]);     addSubMenu([         {\&quot;label\&quot;:\&quot;For designers\&quot;,\&quot;url\&quot;:\&quot;fondamentaux-nontech.html\&quot;},          {\&quot;label\&quot;:\&quot;For developers\&quot;,\&quot;url\&quot;:\&quot;fondamentaux-tech.html\&quot;}     ]);     });&lt;/script&gt;  &lt;span data-menuitem=\&quot;fondamentaux\&quot;&gt;&lt;/span&gt; This base criteria for the Orange websites and applications avoids the major accessibility errors. It is a subset of the accessibility requirements.    Its implementation does not give you the guarantee to be 100% accessible, but is a clean bedrock so you can engage in a progressive accessibility implementation process.  Following the Orange guidelines (&lt;cite&gt;Design for digital platforms Guidelines&lt;/cite&gt;), available on the [Orange brand site](http://design.orange.com/) is a prerequisite to the use of this base criteria.  Some elements already present in the Orange Brand (such as the use of colours, text alignment...) have not been included in this list of criteria.  Two versions are available: - **The first version** does not mention the code, it is aimed at product designers, designers, project managers, etc. - **The second version** mentions the code and is aimed at developers, technical managers, validation teams, testers, etc.  &lt;div class=\&quot;perso col-xs-12 col-md-6 col-lg-4\&quot;&gt;     &lt;h2 class=\&quot;sr-only\&quot;&gt;For product designers, designers, project managers&lt;/h2&gt;               &lt;a href=\&quot;./fondamentaux-nontech.html\&quot; class=\&quot;btn btn-info\&quot;&gt;         ![](./images/perso1.png)         &lt;div&gt;Criteria for designers&lt;/div&gt;     &lt;/a&gt; &lt;/div&gt; &lt;div class=\&quot;perso col-xs-12 col-md-6 col-lg-4\&quot;&gt;     &lt;h2 class=\&quot;sr-only\&quot;&gt;For developers&lt;/h2&gt;               &lt;a href=\&quot;./fondamentaux-tech.html\&quot; class=\&quot;btn btn-info\&quot;&gt;         ![](./images/perso3.png)         &lt;div&gt;Criteria for developers&lt;/div&gt;     &lt;/a&gt; &lt;/div&gt;              &lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2016  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt;"
});



documentTitles["fondamentaux-tech.html#essential-criteria-for-the-development"] = "Essential criteria for the development";
index.add({
    url: "fondamentaux-tech.html#essential-criteria-for-the-development",
    title: "Essential criteria for the development",    
    body: "# Essential criteria for the development  &lt;script&gt;$(document).ready(function () {     setBreadcrumb([         {\&quot;label\&quot;:\&quot;Essential criteria\&quot;, \&quot;url\&quot;: \&quot;./fondamentaux.html\&quot;},         {\&quot;label\&quot;:\&quot;Essential criteria for the development\&quot;}     ]);     addSubMenu([         {\&quot;label\&quot;:\&quot;For designers\&quot;, \&quot;url\&quot;:\&quot;fondamentaux-nontech.html\&quot;},          {\&quot;label\&quot;:\&quot;For developers\&quot;, \&quot;url\&quot;:\&quot;fondamentaux.html\&quot;, \&quot;expanded\&quot;:true}     ]); });&lt;/script&gt;  &lt;span data-menuitem=\&quot;fondamentaux\&quot;&gt;&lt;/span&gt;  "
});

documentTitles["fondamentaux-tech.html#1-set-a-title-for-each-page"] = "1. Set a title for each page";
index.add({
    url: "fondamentaux-tech.html#1-set-a-title-for-each-page",
    title: "1. Set a title for each page",    
    body: "## 1. Set a title for each page    **Target: **everyone and especially people with visual disabilities.   **When: **as of conception and during development.  **Description:**   Give each page a title that is specific to it and which reflects its content or function  (`&lt;title&gt;` tag).   The page title is the first element read by a screen reader, it must help to formally identify the page where you are.  **Checklist: ** - Even if there is no rule, in general (opening many tabs in multiple applications), we go from the most specific information to the least specific (e.g. title of the current page - name of the site). When opening a multitude of applications, the approach is different, in this case we will prefer going from the least specific information to the most specific (e.g. name of the site - title of the current page). - When the content of the page is dynamic (displaying the result of a search, errors in a form, user adding content…), the title of the page should reflect this change.  **Users’ goal: **  Allow users to identify the topic of a page, find and get a clear idea of the content of the page without having to read it. In particular, it is the first element vocalized by a screen reader.  **Do:**  `&lt;title&gt;Home - Corporate web site of Orange&lt;/title&gt;`   **Don’t:**  `&lt;title&gt;Home&lt;/title&gt;`  **Reference &lt;abbr&gt;WCAG&lt;/abbr&gt;&amp;nbsp;:** - &lt;a href=\&quot;https://www.w3.org/TR/WCAG21/#page-titled\&quot;&gt;2.4.2 Page Titled&lt;/a&gt;  "
});

documentTitles["fondamentaux-tech.html#2-give-a-title-to-headings"] = "2. Give a title to headings";
index.add({
    url: "fondamentaux-tech.html#2-give-a-title-to-headings",
    title: "2. Give a title to headings",    
    body: "## 2. Give a title to headings  **Target:** everyone and especially people with cognitive limitations, reading difficulties and visual disabilities.   **When: ** as of design, during content writing and development.  **Description:**  One must identify the heading tags (`h1` to `h6` &lt;abbr&gt;HTML&lt;/abbr&gt; tags) used to structure the content of the pages. Visually impaired people browsing with a screen reader can access the list of headings in the page to navigate quickly.  Just like in a Word document, it is possible to use the table of contents only if the heading tags have been properly set within the document.    **Checklist: **  - The headings must be relevant, reflect the structure of the information contained in the page. - There must be no break in the heading hierarchy (we cannot jump from a `h2` title to a `h4` title). - You can use several `h1` headings per page (Don’t exceed two in most cases). - Hidden tags are dismissed by screen readers (`visibility: hidden;`, `display: none;` or `aria-hidden`). - The dynamically-generated content must also meet this requirement.  **Goal: **  - For all users: improve the structure of the page and its contents. - For search engines: improve SEO. - For users with visual disabilities, cognitive limitations or reading difficulties: easy navigation and access to content.  **Do:**       Page with consistent and relevant headings:  ``` (Heading 1) Home – Orange (Heading 2) News (Heading 2) Fibre broadband is coming! (Heading 3) Check eligibility ```  **Don’t: ** Page with a break in the heading hierarchy h2 → h4:  &lt;pre&gt;&lt;code class=\&quot;html\&quot;&gt; &amp;lt;h1&amp;gt;Home – Orange&amp;lt;/h1&amp;gt; &amp;lt;h2&amp;gt;News&amp;lt;/h2&amp;gt; &amp;lt;h2&amp;gt;Fiber broadband is coming!&amp;lt;/h2&amp;gt; &amp;lt;h4&amp;gt;Check eligibility&amp;lt;/h4&amp;gt; &lt;/code&gt;&lt;/pre&gt;  **Tool :**  [HeadingsMaps](https://www.learningapps.co.uk/moodle/xertetoolkits/play.php?template_id=1309) extension, available for [Chrome](https://chrome.google.com/webstore/detail/headingsmap/flbjommegcjonpdmenkdiocclhjacmbi?hl=fr) and [Firefox](https://addons.mozilla.org/fr/firefox/addon/headingsmap/), extract and display page titles for the current page.       **Reference &lt;abbr&gt;WCAG&lt;/abbr&gt;&amp;nbsp;:** - &lt;a href=\&quot;https://www.w3.org/TR/WCAG21/#info-and-relationships\&quot;&gt;1.3.1 Info and Relationships&lt;/a&gt;  "
});

documentTitles["fondamentaux-tech.html#3-provide-enough-contrast-between-text-and-background"] = "3. Provide enough contrast between text and background";
index.add({
    url: "fondamentaux-tech.html#3-provide-enough-contrast-between-text-and-background",
    title: "3. Provide enough contrast between text and background",    
    body: "## 3. Provide enough contrast between text and background  **Target: **everyone, especially the mobile and tablet users, people with visual impairments, experiencing reading or attention difficulties and elderly people.    **When: **as of design and during development.  **Description: **  The contrast between the text and its background should be high enough. Insufficient contrast level will have detrimental impact on users with visual difficulties and for mobile and tablets users in a very bright environment.  **Don’t: **  The label “film | 20h40…” does not have enough contrast. It will not be readable by all users.    ![screenshot showing text with poor contrast](images/contraste.png)  **Checklist: **  - The contrast between the colour of the background and the text must be 4.5:1 minimum and also for text on an image carrying information. - GUI components must have a contrast of 3:1. This includes: buttons, radio buttons, check boxes, selection lists, navigation menus and panels, toolbars, tabs, carousels, sliders, progress bars, tooltips, progress bars, graphics ... We do not have to apply this criterion, if:    - the GUI component is a logo    - if a text, like a label, a data table, brings the same information as the icon or the graphic    - if the contrast ratio of the image doesn't prevent the understanding of the content or the function of the image - For applications used primarily in mobile web or in mobility, the contrast level of the main elements must be 7:1 in order to ensure a good readability for all. - Links should be easily identifiable from to the rest of the text.  Any GUI component receiving focus must also be readable when taking focus. Inactive graphic elements on the page such as buttons are an exception to the rule because they could be ignored by the user.  **Users’ goal: **  Ease of reading for all users, especially the visually impaired, or people in a very bright environment (outdoors).  **Tool: **  The [Colour Contrast Analyser](http://www.paciellogroup.com/resources/contrastanalyser/) application can quickly measure colour contrast levels (free for Windows and Mac).    **Reference &lt;abbr&gt;WCAG&lt;/abbr&gt;&amp;nbsp;:** - &lt;a href=\&quot;https://www.w3.org/TR/WCAG21/#contrast-minimum\&quot;&gt;1.4.3 Contrast (Minimum)&lt;/a&gt; - &lt;a href=\&quot;https://www.w3.org/TR/WCAG21/#non-text-contrast\&quot;&gt;1.4.11 Non-text Contrast&lt;/a&gt;  "
});

documentTitles["fondamentaux-tech.html#4-do-not-use-colour-or-sensory-characteristics-as-the-unique-source-of-information"] = "4. Do not use colour or sensory characteristics as the unique source of information";
index.add({
    url: "fondamentaux-tech.html#4-do-not-use-colour-or-sensory-characteristics-as-the-unique-source-of-information",
    title: "4. Do not use colour or sensory characteristics as the unique source of information",    
    body: "## 4. Do not use colour or sensory characteristics as the unique source of information  **Target: **everyone, especially the colour-blind and more generally people with visual impairments, cognitive limitations, hearing impairments and elderly people.   **When: **as of design and during development.  **Description: **  Do not use colour or sensory characteristics (shape, size, sound, direction, visual localization …) as the only way of conveying information, indicating an action, requesting a response or distinguishing an element. The information provided by a colour change or a sensory characteristic must be completed with textual information (alternative) or / and semantic structuring.  **Example:**   For a pie chart, where each part is coloured differently, you could add different pattern fills to identify them without colour.   **Do: **   ![illustration using coloured icons to convey information](images/couleur-ok.png)  **Don’t: **   ![illustration using coloured icons to convey information](images/couleur-ko.png)    This example is not valid because the information is conveyed only by colour.  **Checklist: ** - Take a screenshot and convert it in black and white. The loss of colour should not cause difficulty while navigating, nor cause loss of information. - Turn off the speakers, the level of information should remain the same. - Be sure that links are not only identified by a different colour, usually underline them.  **Users’ goal: **  Allow users not distinguishing colours or sensory information (colour blind, visually impaired, hearing impaired, mobile users in bright environment or in noisy environments …) to access the same information by other means.  **Reference &lt;abbr&gt;WCAG&lt;/abbr&gt;&amp;nbsp;:** - &lt;a href=\&quot;https://www.w3.org/TR/WCAG21/#sensory-characteristics\&quot;&gt;1.3.3 Sensory Characteristics&lt;/a&gt; - &lt;a href=\&quot;https://www.w3.org/TR/WCAG21/#use-of-color\&quot;&gt;1.4.1 Use of Color&lt;/a&gt;  "
});

documentTitles["fondamentaux-tech.html#5-use-html-semantics"] = "5. Use HTML semantics";
index.add({
    url: "fondamentaux-tech.html#5-use-html-semantics",
    title: "5. Use HTML semantics",    
    body: "## 5. Use HTML semantics  **Target: **everyone, and especially people with visual impairments and cognitive limitations and elderly people.   **When: **as of design and during content writing.  **Description: ** Use HTML elements as they should, for that they have been made (code validation and compliance with specifications) and respect their semantics to be sure to be fully interpreted by assistive technologies.   **Checklist: ** Pages, if required, must contain semantically relevant lists.  Add semantics to the &lt;abbr&gt;HTML&lt;/abbr&gt; content using the following tags:  - `ol` for ordered lists  - `ul` for unordered lists  - `li` for list items  - `dl`, `dt` and `dd` for definition lists  There must be no empty list and a list must contain at least two elements to be a real list (unless this list is generated dynamically!).  Use `&lt;blockquote&gt;` for long citations and `&lt;q&gt;` for short ones.  Links are real links (a `&lt;a&gt;` tag):  they open a new URL, page or tab…  Buttons are real buttons (a `button`, ou `input type=button` tag): they trigger an action, a validation or allow a choice…  Respect as much as possible, the classic aspect of these elements to avoid bothering the user, accustomed to a specific aspect for them.  In the &lt;abbr&gt;HTML&lt;/abbr&gt; code, ensure, when you validate, that, at least: - Elements must have opening and closing tags - Elements can be nested according to their specifications - Elements cannot contain duplicate attributes - Each &lt;abbr&gt;ID&lt;/abbr&gt; is unique   **Objectif utilisateur&amp;nbsp;: **   Allows all users to anticipate how to use and possible behaviors for a given interface element.  **Objectif technique&amp;nbsp;: **   Forces the coherent structuring of the content by the creator of the site.  **Reference &lt;abbr&gt;WCAG&lt;/abbr&gt;&amp;nbsp;:** - &lt;a href=\&quot;https://www.w3.org/TR/WCAG21/#info-and-relationships\&quot;&gt;1.3.1 Info and Relationships&lt;/a&gt; - &lt;a href=\&quot;https://www.w3.org/TR/WCAG21/#parsing\&quot;&gt;4.1.1 Parsing&lt;/a&gt; - &lt;a href=\&quot;https://www.w3.org/TR/WCAG21/#name-role-value\&quot;&gt;4.1.2 Name, Role, Value&lt;/a&gt;  **Tool:   **[&lt;abbr&gt;HTML&lt;/abbr&gt; and &lt;abbr&gt;CSS&lt;/abbr&gt; Validation Service](https://validator.w3.org/)  "
});

documentTitles["fondamentaux-tech.html#6-decoupling-content-from-interaction-and-presentation"] = "6. Decoupling content from interaction and presentation";
index.add({
    url: "fondamentaux-tech.html#6-decoupling-content-from-interaction-and-presentation",
    title: "6. Decoupling content from interaction and presentation",    
    body: "## 6. Decoupling content from interaction and presentation  **Target: **everyone, especially people with visual disabilities, reading or attention difficulties.   **When: **during development.  **Description: **  Strictly decouple the content (&lt;abbr&gt;HTML&lt;/abbr&gt;), the interaction (Javascript) and presentation (&lt;abbr&gt;CSS&lt;/abbr&gt;).   **Checklist: **  - Do not use tables to design the page layout, they should be used only for tabular data.  - Do not use image to display text, except when the visual presentation cannot be achieved using &lt;abbr&gt;CSS&lt;/abbr&gt;. - Use &lt;abbr&gt;CSS&lt;/abbr&gt; classes rather than manipulating inline &lt;abbr&gt;CSS&lt;/abbr&gt; styles in &lt;abbr&gt;HTML&lt;/abbr&gt;. - Do not use &lt;abbr&gt;CSS&lt;/abbr&gt; pseudo-elements (::before, ::after…) to display information (or provide an alternative for screen readers especially). - Do not write Javascript events directly inside the &lt;abbr&gt;HTML&lt;/abbr&gt;, use a separate script or &lt;abbr&gt;JS&lt;/abbr&gt; file instead.  **Users’ goal: **  Allow users, via their User Agent or technical assistance (e.g. their browser) to change the visual appearance of the page (zoom, colour, position…). For example, increase the text size without display problems.  **Technical goal: **  Improves maintainability.  **Reference &lt;abbr&gt;WCAG&lt;/abbr&gt;&amp;nbsp;:** - &lt;a href=\&quot;https://www.w3.org/TR/WCAG21/#info-and-relationships\&quot;&gt;1.3.1 Info and Relationships&lt;/a&gt; - &lt;a href=\&quot;https://www.w3.org/TR/WCAG21/#images-of-text\&quot;&gt;1.4.5 Images of Text&lt;/a&gt;  "
});

documentTitles["fondamentaux-tech.html#8-declaring-the-main-language-and-language-changes"] = "8. Declaring the main language and language changes";
index.add({
    url: "fondamentaux-tech.html#8-declaring-the-main-language-and-language-changes",
    title: "8. Declaring the main language and language changes",    
    body: "## 8. Declaring the main language and language changes   **Target: **everyone, particularly people with visual impairments.   **When: **during development.  **Description: **   Specify the primary language of the document with the attribute `lang` in the `html` tag. Also specify the language of a content in a language other than the primary one, using the `lang` attribute in the &lt;abbr&gt;HTML&lt;/abbr&gt; element containing the foreign language text.    **Checklist: **  For words or phrases in foreign language used as generic terms (déjà vu, chef d'œuvre …) or proper names, do not indicate a change of language.  **Users’ goal: **  This attribute allows you to specify the language to the speech synthesis.  **Technical goal: **  Enable search engines to identify the language of a page to improve the natural referencing.    **Example for a page in French:**   - using &lt;abbr&gt;HTML&lt;/abbr&gt;: `&lt;html lang=\&quot;fr\&quot;&gt;` - using XHTML: `&lt;html xmlns=\&quot;http://www.w3.org/1999/xhtml\&quot; xml:lang=\&quot;fr\&quot; lang=\&quot;fr\&quot;&gt;`  **Example of language change: **  `découvrir Orange &lt;span lang=\&quot;en\&quot;&gt;live&lt;/span&gt; TV`  **Reference &lt;abbr&gt;WCAG&lt;/abbr&gt;&amp;nbsp;:**   - &lt;a href=\&quot;https://www.w3.org/TR/WCAG21/#language-of-page\&quot;&gt;3.1.1 Language of Page&lt;/a&gt; - &lt;a href=\&quot;https://www.w3.org/TR/WCAG21/#language-of-parts\&quot;&gt;3.1.2 Language of Parts&lt;/a&gt;  "
});

documentTitles["fondamentaux-tech.html#9-associate-a-relevant-label-to-form-fields"] = "9. Associate a relevant label to form fields";
index.add({
    url: "fondamentaux-tech.html#9-associate-a-relevant-label-to-form-fields",
    title: "9. Associate a relevant label to form fields",    
    body: "## 9. Associate a relevant label to form fields  **Target: **everyone and especially people with visual impairments, cognitive limitations, experiencing attention difficulties and mobile and tablet users.   **When: **during design and development.  **Description: **   Each form input must be associated with a label identifying the function of the field, the type of data and the expected format.   This label should be visually close to the field so we can easily mentally link them (especially for people using zoom or software magnifier or even mobile users).  Each label must be set in a `label` tag, which is associated to the form field with a` for` attribute, using the `id` attribute of the form element.  In some cases, it seems unnecessary to associate a label to a form field (e.g. search field with a magnifying glass button next to it). In such case you can provide a hidden label (using &lt;a href=\&quot;./exemples/masquage/index.html\&quot;&gt;accessible hiding&lt;/a&gt;), it will not be displayed on the screen but it will be associated with the form field programmatically so screen readers can vocalize it. The `title` attribute set on a form element can also be used like a label. You can also use the `aria-label` and `aria-labelledby` attributes (see [ARIA attributes that can save you](./label-ledby-describedby.html)), preferably in this order.  **Checklist: **  For any form element, the label should be visually close to the field it identifies.  Align all labels to the left when the number of characters separating the longest label from the shortest label does not exceed 6 characters &amp; nbsp ;; beyond that, align all the labels on the right.  If relevant, the fields have an `autocompleted` attribute so that the user can use a list of pre-recorded or auto-complete proposals.  For radio and check box buttons, in addition to the label tag you can use other tags (`title`, `aria-labelledby`, `aria-label` or, in some cases, `fieldset` and `legend`).   For required fields, this should be specified in the label using an image, a text symbol (`*` for example) or text and / or the `aria-required` property.  **Users’ goal: **  Not meeting this requirement is a blocking point for all users using speech synthesis. For mobile users and motor deficient it allows to click on the form elements more easily. For fields with auto-completion, this avoids users input errors.  **Do: **   ![screenshot of a valid form](images/formulaire.png)    &amp;nbsp;  **Don’t: **   ![screenshot of a form with a missing label](images/formulaire2.png)  &amp;nbsp;    **Example of an accessible form: **    See [the example of an accessible form](./exemples/formulaire/index.html) for more details.  **Reference &lt;abbr&gt;WCAG&lt;/abbr&gt;&amp;nbsp;:**   - &lt;a href=\&quot;https://www.w3.org/TR/WCAG21/#labels-or-instructions\&quot;&gt;3.3.2 Labels or Instructions&lt;/a&gt; - &lt;a href=\&quot;https://www.w3.org/TR/WCAG21/#help\&quot;&gt;3.3.5 Help&lt;/a&gt; - &lt;a href=\&quot;https://www.w3.org/TR/WCAG21/#identify-input-purpose\&quot;&gt;1.3.5 Identify input purpose&lt;/a&gt;  "
});

documentTitles["fondamentaux-tech.html#10-detect-identify-errors-and-suggest-corrections"] = "10. Detect, identify errors and suggest corrections";
index.add({
    url: "fondamentaux-tech.html#10-detect-identify-errors-and-suggest-corrections",
    title: "10. Detect, identify errors and suggest corrections",    
    body: "## 10. Detect, identify errors and suggest corrections  **Target: **everyone and particularly people with visual impairments, cognitive limitations, reading or attention difficulties and elderly people.   **When: **as of design and during development.  **Description: **  The errors are automatically detected, the user is warned by a page title change, the error of the form field is clearly identified and the error is described with words to the user. If necessary, a correction is suggested.  Finally, the wording of the error messages should be explicit.  For web pages that involve important actions (legal commitment, financial transaction, modification or deletion of important data, response to a test or examination ...), the action must be reversible or go through a confirmation step to verify or correct the entry in case of error.  **Checklist: **  Identifying the invalid field, as well as displaying a suggestion of correction can be dynamically added to the `label` tag, but also to the `title` tag or `aria-label` and `aria-labelledby` tags (see [ARIA attributes that can save you](./label-ledby-describedby.html)) depending on the needs.  **Users’ goal: **  Guide users when errors happen to improve the understanding and help them correct the errors, especially for internet beginners, elderly people and cognitively deficient.  **Do: **   ![screenshot of a form that displays relevant error messages](images/formulaire-ok.png)    **Don’t: **   ![screenshot of a form displaying irrelevant error messages](images/formulaire-ko.png)  &amp;nbsp;   **Example of an accessible form: **    See [the accessible form example](./exemples/formulaire/index.html) for more details.  **Reference &lt;abbr&gt;WCAG&lt;/abbr&gt;&amp;nbsp;:**   - &lt;a href=\&quot;https://www.w3.org/TR/WCAG21/#error-identification\&quot;&gt;3.3.1 Error Identification&lt;/a&gt; - &lt;a href=\&quot;https://www.w3.org/TR/WCAG21/#error-suggestion\&quot;&gt;3.3.3 Error Suggestion&lt;/a&gt; - &lt;a href=\&quot;https://www.w3.org/TR/WCAG21/#error-prevention-legal-financial-data\&quot;&gt;3.3.4 Error Prevention (Legal, Financial, Data)&lt;/a&gt;  "
});

documentTitles["fondamentaux-tech.html#11-set-a-text-alternatives-for-images-and-frames"] = "11. Set a text alternatives for images and frames";
index.add({
    url: "fondamentaux-tech.html#11-set-a-text-alternatives-for-images-and-frames",
    title: "11. Set a text alternatives for images and frames",    
    body: "## 11. Set a text alternatives for images and frames  **Target: **everyone and especially people with visual impairments and cognitive limitations.   **When: **from design and during development.  **Description: **  All `img` tags should have an `alt` attribute with a relevant description:  - For clickable images: specify the function&amp;nbsp;/ link target in the `alt` attribute, - For images carrying information: add an `alt` attribute describing the information contained in the image - For images containing text: add an `alt` attribute containing at least the text from the image, - For decorative images: add an empty `alt` attribute, - For images having `alt` attributes that won’t be convenient when the text is too long (diagrams, graphs…), add a describing text close to the image, or add a link pointing to an &lt;abbr&gt;HTML&lt;/abbr&gt; page with the description.  Add a `title` attribute to describe all `frame` or `iframe` content or function. If a `frame` or `iframe` doesn't convey information for the user (only technical), render it invisible, see example: [Hidden accessible frames technics](./exemples/iframes-techniques/index.html)  **Checklist: **  - Each `img` tag must have an `alt` attribute. - For images not carrying information, set them as background images preferably (&lt;abbr&gt;CSS&lt;/abbr&gt;).  - For graphics, you can add a link under them to access the data table (revealing it in the same page or in a different page).  **Users’ goal: **  Access the information included in images for users who cannot access it.  Blocking point: an image without textual Description: is unusable by people with visual impairments or those that cannot display images (mobile, low bandwidth…).  **Technical goal: **  Improve the natural referencing.  **Valid example:**      `&lt;a href=\&quot;./home\&quot;&gt;&lt;img src=\&quot;logo_orange.jpg\&quot; alt=\&quot;back to home\&quot;&gt;&lt;/a&gt;`         `&lt;img src=\&quot;banner_bouquet_famille.png\&quot; alt=\&quot;Good deal, family max plan 2 euros per month for 12 months instead of 16 euros.\&quot;&gt;`  **Example with an empty alternative:**  In the example below, the right pictogram doesn’t have to be vocalized as the text on the left already provides the information.   In this case setting the `alt` attribute to something other than empty would provide redundant information.    ![example with empty alternative](./images/service-24.png)      `&lt;h3&gt;guaranteed 24h service&lt;/h3&gt;`   `&lt;img src=\&quot;service-24.png\&quot; alt=\&quot;\&quot;&gt;`   **Tools: ** The &lt;a href=\&quot;https://chrispederick.com/work/web-developer/\&quot;&gt; Web developer &lt;/a&gt; extension (ability to display text alternatives for all images).   **Reference &lt;abbr&gt;WCAG&lt;/abbr&gt;&amp;nbsp;:**   - &lt;a href=\&quot;https://www.w3.org/TR/WCAG21/#non-text-content\&quot;&gt;1.1.1 Non-text Content&lt;/a&gt;  "
});

documentTitles["fondamentaux-tech.html#12-provide-accessible-audio-or-video-tracks"] = "12. Provide accessible audio or video tracks";
index.add({
    url: "fondamentaux-tech.html#12-provide-accessible-audio-or-video-tracks",
    title: "12. Provide accessible audio or video tracks",    
    body: "## 12. Provide accessible audio or video tracks  **Target: **everyone and particularly people with visual disabilities, hearing impairments, cognitive limitations, or difficulties with English.   **When: **during design and development.  **Description: **  To be accessible, the multimedia contents must: 1. propose a full transcript 2. offer subtitles (video only) 3. offer audio description (video only) 4. choose an accessible media player 5. Prohibit the automatic start of the video when loading the page 6. Prohibit videos that have more than 3 flashes per second 7. Furthermore, for any sound that has been emitted for more than 3 seconds, the user must have the option of either stopping or pausing it or controlling its volume regardless of the overall system volume.  For more info check out [accessibility recommendations for video content, animations and Orange audios](../others/video-audio.html).  **Users’ goal: **  Provide access to visual and hearing information for people who cannot access it: visually impaired, blind, deaf, cognitively deficient, computer without speakers, noisy or bright environment.  **Technical goal: **  Allow audio and video referencing.  **Reference &lt;abbr&gt;WCAG&lt;/abbr&gt;&amp;nbsp;:**   - &lt;a href=\&quot;https://www.w3.org/TR/WCAG21/#audio-only-and-video-only-prerecorded\&quot;&gt;1.2.1 Audio-only and Video-only (Prerecorded)&lt;/a&gt; - &lt;a href=\&quot;https://www.w3.org/TR/WCAG21/#captions-prerecorded\&quot;&gt;1.2.2 Captions (Prerecorded)&lt;/a&gt; - &lt;a href=\&quot;https://www.w3.org/TR/WCAG21/#audio-description-or-media-alternative-prerecorded\&quot;&gt;1.2.3 Audio Description or Media Alternative (Prerecorded)&lt;/a&gt; - &lt;a href=\&quot;https://www.w3.org/TR/WCAG21/#captions-live\&quot;&gt;1.2.4 Captions (Live)&lt;/a&gt; - &lt;a href=\&quot;https://www.w3.org/TR/WCAG21/#audio-description-prerecorded\&quot;&gt;1.2.5 Audio Description (Prerecorded)&lt;/a&gt; - &lt;a href=\&quot;https://www.w3.org/TR/WCAG21/#audio-control\&quot;&gt;1.4.2 Audio Control&lt;/a&gt; - &lt;a href=\&quot;https://www.w3.org/TR/WCAG21/#pause-stop-hide\&quot;&gt;2.2.2 Pause, Stop, Hide&lt;/a&gt; - &lt;a href=\&quot;https://www.w3.org/TR/WCAG21/#three-flashes-or-below-threshold\&quot;&gt;2.3.1 Three Flashes or Below Threshold&lt;/a&gt;  "
});

documentTitles["fondamentaux-tech.html#13-structuring-data-tables"] = "13. Structuring data tables";
index.add({
    url: "fondamentaux-tech.html#13-structuring-data-tables",
    title: "13. Structuring data tables",    
    body: "## 13. Structuring data tables  **Target: **everyone, particularly people with visual disabilities.   **When: **as of design and during development.  **Description: **  For tabular data: - Use the `table` element with `th`(for table headers), `td`,` tr` children elements. - Use the `scope` attribute with `row` / `col` values to associate header cells and data cells. For complex tables, use the` id` and `headers` attributes. - Use the `caption` tag, a `h1` to `h6` tag just before the table or use a text near the table via an `aria-labelledby` attribute in the `table` element to associate a title to the table (see [ARIA attributes that can save you](./label-ledby-describedby.html)). - Add a summary to explain the structure of a complex table :  - **HTML5**: add the summary directly in the `caption`.  - **Previous version:** add the summary in a `summary` attribute.   **Checklist: **  - Reminder: Do not use tables for page layout purposes.  - The caption (`caption`) can be replaced by a section title (`hx`) located before the table. - Prefer splitting a complex table into several simpler tables. - The `tbody`, `tfoot` and `thead` tags have no influence on accessibility, hence, there is no obligation to use them.  In the case of a complex table, a summary is present to explain the structure: - **HTML5**: the summary of the table is present in the legend (`caption`). - **HTML5 - alternative solution**: the summary is linked to the array via an `aria-describedby` attribute. - **Previous version:** the summary is present in a `summary` attribute of the table.  **Users’ goal: **  Giving a summary and title for data tables allows everyone to know quickly its purpose without having to read it. For visually impaired users, binding cells to headers allows them to know where they are situated and understand the data in it.  **Technical goal: **  Improve natural referencing.  **Reference &lt;abbr&gt;WCAG&lt;/abbr&gt;&amp;nbsp;:**   - &lt;a href=\&quot;https://www.w3.org/TR/WCAG21/#info-and-relationships\&quot;&gt;1.3.1 Info and Relationships&lt;/a&gt;  "
});

documentTitles["fondamentaux-tech.html#14-use-relative-size-to-allow-changing-text-size-and-responsive-design"] = "14. Use relative size to allow changing text size and responsive design";
index.add({
    url: "fondamentaux-tech.html#14-use-relative-size-to-allow-changing-text-size-and-responsive-design",
    title: "14. Use relative size to allow changing text size and responsive design",    
    body: "## 14. Use relative size to allow changing text size and responsive design  **Target: **everyone and especially people with visual impairments, using a device outdoors and elderly people.   **When: **during development.  **Description: **  Use relative length units for font size (`em`, `rem`, `%`) and for containers handling text size enlargement up to 200% and design your pages to be responsive.  **Checklist: **  - Do not use pixel (`px`) for size that must adapt if we increase the text size (impossible with Internet Explorer). - Form fields must also have relative sizes to enlarge properly. - Try to make the container adaptive so they can increase in size when the text is zoomed in. - In Firefox, go to View&gt;Zoom and activate Zoom text only, set the zoom to 200%. Verify that there is no loss of information (disappearance or overlapping text). - Content must respond to screen size changes, adjusting its contents without horizontal scroll even when screen width is reduced to 320 CSS pixels, unless special needs (map, table, diagram... ).  ![screenshot Zoom settings In Firefox](./images/zoom-200.png)  **Users’ goal: **  Allow users (visually impaired, using a device outdoors, elderly people…) to increase the font size and enlargement of the page so they can access easily the information.  **Example:**  See the example [handling zoom, increasing the text size](./exemples/zoom/index.html) for more details.  **Reference &lt;abbr&gt;WCAG&lt;/abbr&gt;&amp;nbsp;:**   - &lt;a href=\&quot;https://www.w3.org/TR/WCAG21/#resize-text\&quot;&gt;1.4.4 Resize text&lt;/a&gt; - &lt;a href=\&quot;https://www.w3.org/TR/WCAG21/#reflow\&quot;&gt;1.4.10 Reflow&lt;/a&gt;  "
});

documentTitles["fondamentaux-tech.html#15-allow-text-spacing"] = "15. Allow text spacing";
index.add({
    url: "fondamentaux-tech.html#15-allow-text-spacing",
    title: "15. Allow text spacing",    
    body: "## 15. Allow text spacing  **Target: **everyone, particularly people with visual disabilities.   **When: **as of design and during development.  If the user applies the following settings, the text must remain legible (no truncated content, superimposed):  - The line height must be adjustable to at least 1.5 times the font size. - The space between two paragraphs must be adjustable to at least 2 times the font size. - The letter spacing must be adjustable to 0.12 times the font size. - The word spacing between words must be adjustable to at least 0.16 times the font size.  This can be done by applying the following CSS rules :  &lt;pre&gt;&lt;code class=\&quot;css\&quot;&gt;   * {       line-height: 1.5!important;       letter-spacing:.12em!important;       word-spacing: .16em !important;   }    p {       margin-bottom: 2em!important;   } &lt;/code&gt;&lt;/pre&gt;  **Bookmarklet:**   To ease the test, use the following bookmarklet (to keep in your bookmarks) : &lt;a href=\&quot;javascript:s%20=%20document.createElement(%22style%22)%3Bs.setAttribute(%22type%22%2C%22text%2Fcss%22)%3Bt%3Ddocument.createTextNode(%22*%20%7Bline-height%3A%201.5!important%3B%20letter-spacing%3A.12em!important%3B%20word-spacing%3A%20.16em%20!important%3B%7D%20p%7Bmargin-bottom%3A%202em!important%3B%20%7D%22)%3Bs.appendChild(t)%3Bh%20%3D%20document.getElementsByTagName(%22head%22)%5B0%5D%3Bh.appendChild(s)%3Bvoid(0)%3B\&quot;&gt;Text spacing&lt;/a&gt;  **Users’ goal: ** Improve reading comfort for people with cognitive and visual disabilities.  **Reference &lt;abbr&gt;WCAG&lt;/abbr&gt;&amp;nbsp;:**   - &lt;a href=\&quot;https://www.w3.org/TR/WCAG21/#text-spacing\&quot;&gt;1.4.12 Text Spacing&lt;/a&gt;  "
});

documentTitles["fondamentaux-tech.html#16-link-and-button-labels-must-be-understandable-out-of-context"] = "16. Link and button labels must be understandable out of context";
index.add({
    url: "fondamentaux-tech.html#16-link-and-button-labels-must-be-understandable-out-of-context",
    title: "16. Link and button labels must be understandable out of context",    
    body: "## 16. Link and button labels must be understandable out of context  **Target: **everyone, especially people with visual impairments, cognitive limitations (dyslexic) or attention difficulties.   **When: **as of design and during development.  **Description: **  Make the link and button labels understandable without the context for all users and, in particular, the visually impaired. During the navigation with a screen reader, it should be possible to access the links list of the page to navigate quickly. If your page contains several “learn more” links, it will be impossible to differentiate from each other.    If it is not possible to make a link more explicit (e.g. not enough space) but the label of the current link is sufficiently clear for people having access to the screen, **a `title`**attribute must use to display a tooltip, containing all the necessary information, at the mouse rollover, but also to complete the title with additional content with, at choice: - a piece of text hidden by &lt;a href=\&quot;./examples/masking/index.html\&quot;&gt; accessible display &lt;/a&gt; via CSS - by using an attribute `aria-label` or` aria-labelledby` containing all the contents of `title` (see [ARIA attributes that can save you](./ label-ledby-describedby.html)).  For example, in the image below, the two “next” links are not explicit enough for a person with visual impairments. However, when one sees the screen, the positioning makes obvious the function of each button.  ![screenshot showing two valid links that should be clarified](./images/liens-valider.png)  In this case, add an &lt;a href=\&quot;./exemples/masquage/index.html\&quot;&gt;accessible hidden content&lt;/a&gt; using `span` to complete the link label. This will not be displayed on the screen, but will be vocalized by assistive technologies.  **Example:**  &lt;pre&gt;&lt;code class=\&quot;html\&quot;&gt; &amp;lt;a href=\&quot;…\&quot; title=\&quot;Validate the payment by installments\&quot;&amp;gt;Validate&amp;lt;span class=\&quot;accessible-hidden-content\&quot;&amp;gt; to pay by installments&amp;lt;/span&amp;gt;&amp;lt;/a&amp;gt; &amp;lt;a href=\&quot;…\&quot; title=\&quot;Validate the payment in one go\&quot;&amp;gt;Validate&amp;lt;span class=\&quot;accessible-hidden-content\&quot;&amp;gt; to pay in one go&amp;lt;/span&amp;gt;&amp;lt;/a&amp;gt; &lt;/code&gt;&lt;/pre&gt;  Another solution is to use an `aria-label` or `aria-labelledby` attribute to clarify the link label (see [ARIA attributes that can save you](./label-ledby-describedby.html)).  &lt;pre&gt;&lt;code class=\&quot;html\&quot;&gt; &amp;lt;a title=\&quot;confirm to pay in installments\&quot; aria-label=\&quot;confirm to pay in installments\&quot; href=\&quot;…\&quot;&amp;gt;next&amp;lt;/a&amp;gt; &amp;lt;a title=\&quot;confirm to pay in one go\&quot; aria-label=\&quot;confirm to pay in one go\&quot; href=\&quot;…\&quot;&amp;gt;next&amp;lt;/a&amp;gt; &lt;/code&gt;&lt;/pre&gt;  **Checklist: ** Make sure that the semantics &lt;abbr&gt;HTML&lt;/abbr&gt; are respected: - a link must allow to change &lt;abbr&gt;URL&lt;/abbr&gt;, to page, to download a file, to make appear / disappear contents, to go to an anchor. - a button must allow to submit / reset a form, to open a modal window, to make appear a sub-menu, to control a media, to trigger an action via &lt;abbr&gt;JS &lt;/abbr&gt;.  Ensure that links, out of context, give good information about the triggered action or destination.  A page must not contain multiple links with the same label but pointing to different destinations&amp;nbsp;/ actions.  **Users’ goal: **  Allow users who don’t have access to the visual context to know the destination of the link.   Particularly important for users navigating  through a list of links extracted from the page (screen readers) or software magnifying glass users who see only a fraction of the page.  **Technical goal: **  Making explicit link labels improves natural referencing.  **Do:**      Associate a link labelled “click here” with a hidden label: “order you mobile phone”.    **Don’t:**      “Click here” or “Read more…” links without clarification.  **Reference &lt;abbr&gt;WCAG&lt;/abbr&gt;&amp;nbsp;:**   - &lt;a href=\&quot;https://www.w3.org/TR/WCAG21/#link-purpose-link-only\&quot;&gt; 2.4.9 Link Purpose (Link Only)&lt;/a&gt;  "
});

documentTitles["fondamentaux-tech.html#17-warn-the-user-when-opening-a-new-window"] = "17. Warn the user when opening a new window";
index.add({
    url: "fondamentaux-tech.html#17-warn-the-user-when-opening-a-new-window",
    title: "17. Warn the user when opening a new window",    
    body: "## 17. Warn the user when opening a new window  **Target: **everyone, especially people with visual impairments, cognitive limitations or having attention difficulties.   **When: **as of design and during development.  **Description:**  Notify the user of any new window opening by mentioning it in the text of the link. If it is not possible, use the `title` attribute with the whole information needed (e.g. \&quot;buy the Nokia  7510 (new window)\&quot;) and add, at choice:  - the use of an icon (image with an `alt` indicating the opening of a new window or just \&quot;(new window)\&quot;). - a hidden piece of text in &lt;a href=\&quot;./examples/masking/index.html\&quot;&gt; accessible display &lt;/a&gt; via CSS. - an attribute `aria-label` or` aria-labelledby` containing all the contents of `title` (see [ARIA attributes that can save you] (./ label-ledby-describedby.html)).  **Example: **     Example of an icon that indicates the opening of a new window.   ![screenshot of a link with an icon indicating the opening of a new window](./images/nouvelle-fenetre.png)    **Checklist: **  For any link opening a new window or a new tab, a mention like “(new window)” is shown in the link label, or a “(new window)” mention is positioned off the screen via &lt;abbr&gt;CSS&lt;/abbr&gt; (&lt;a href=\&quot;./exemples/masquage/index.html\&quot;&gt;accessible hidden content&lt;/a&gt;).  **Users’ goal: **  Avoid the unexpected opening of a window, because this can disturb, disrupt, or confuse the user. In particular for persons using mobile browsers, using speech synthesis or cognitively impaired.  **Do:**      For any external link and opening a new window, the label could be: “Go to the orange.com site (new window)”, for a picture-link the `alt` attribute could be: “consult the &lt;abbr&gt;EULA&lt;/abbr&gt; (new window)”.      **Reference &lt;abbr&gt;WCAG&lt;/abbr&gt;&amp;nbsp;:**   - &lt;a href=\&quot;https://www.w3.org/TR/WCAG21/#on-input\&quot;&gt;3.2.2 On Input&lt;/a&gt;  "
});

documentTitles["fondamentaux-tech.html#18-allow-the-use-of-the-main-features-of-the-application-with-the-keyboard"] = "18. Allow the use of the main features of the application with the keyboard";
index.add({
    url: "fondamentaux-tech.html#18-allow-the-use-of-the-main-features-of-the-application-with-the-keyboard",
    title: "18. Allow the use of the main features of the application with the keyboard",    
    body: "## 18. Allow the use of the main features of the application with the keyboard  **Target: **everyone, especially people with motor or visual impairment and using a device outdoors.   **When: **as of design and during development.  **Description: **  Implement event handlers that don’t rely on mouse events only, therefore allow to be controlled by the keyboard and this without time limit.  **Checklist: **  - All the important actions performed with the mouse can also be done with the keyboard, even if you have to provide a specific alternative for the complex interactions (drag'n'drop, gestures with several fingers on mobile ...) while avoiding countless strikes. - Make maximum use of the basic &lt;abbr&gt;HTML&lt;/abbr&gt; interactive components (fields, links, buttons), these being natively accessible to the keyboard. Otherwise, ensure that the custom components are keyboard operable in a conventional manner. - All important actions performed with a mouse must also be reproduced with the keyboard, even complex interactions (drag &amp; drop, mobile touch gestures…).  See [how to navigate with a keyboard](./methodes-outils-clavier.html) in a web browser.  **Users’ goal: **   Allow users who cannot use the mouse (blind, motor disabled, mobile web, outdoor…) to access the main features of the application with the keyboard.  **Do:**      - A sub-menu displayed when the mouse is over an element must also be displayed when the parent menu item receives the keyboard focus. - In a webmail, right-clicking on the “trash” icon opens a menu to empty the trash, this option should be also available from an “empty the trash” button elsewhere in the interface or from a drop-down menu accessible with the keyboard.   **Don’t:**      A functionality only available through drag &amp; drop and without any keyboard equivalent.  **Reference &lt;abbr&gt;WCAG&lt;/abbr&gt;&amp;nbsp;:**   - &lt;a href=\&quot;https://www.w3.org/TR/WCAG21/#keyboard\&quot;&gt;2.1.1 Keyboard&lt;/a&gt;  "
});

documentTitles["fondamentaux-tech.html#19-the-focus-order-must-be-sequential-and-logical-without-keyboard-trap"] = "19. The focus order must be sequential and logical without keyboard trap";
index.add({
    url: "fondamentaux-tech.html#19-the-focus-order-must-be-sequential-and-logical-without-keyboard-trap",
    title: "19. The focus order must be sequential and logical without keyboard trap",    
    body: "## 19. The focus order must be sequential and logical without keyboard trap  **Target: **everyone, especially people with motor or visual impairments and using a device outdoors.   **When: **during development.  **Description: **  Elements (links, buttons, form fields) must receive the focus in a logical order for the user, without being trapped or blocked, even for dynamically-generated content appearing or disappearing (changing the DOM, Ajax,…).   Example (numbered bullets indicate how focus moves in the page) :   ![Screenshot showing focus order](./images/focus/focus-order.png)  **Checklist: **  - To validate this requirement, the focus position must be visible at all times (`outline` and `:focus` &lt;abbr&gt;CSS&lt;/abbr&gt;  properties), see requirement 20 below. - Be careful, the order of appearance of the elements in the &lt;abbr&gt;HTML&lt;/abbr&gt; code is the same as the order in which the focus is moved though the page. An element at the end of the source code but positioned at the top of the page via &lt;abbr&gt;CSS&lt;/abbr&gt; will be the last to receive the focus. - For maintainability, avoid using the `tabindex` attribute with values higher than 0. - Even when appearance or disappearance of content, it is necessary to keep this logical and sequential path. - Even when appearance or disappearance of content, it is necessary to keep this logical and sequential path. This is true for dynamically generated content or for &lt;abbr&gt;SPA&lt;/abbr&gt; (single page application). For more details, see [Manage Focus for Dynamic Content](./examples/dynFocus/index.html)  **Users’ goal: **  Allowing logical navigation without “trapping” the keyboard in the pages of the application. Necessary for users navigating with the keyboard (visually impaired, motor impaired, cognitive impaired, using a device outdoors).  **Don’t:**      A page containing a video player where the focus can enter inside the player, but cannot get out (keyboard trap).          **Reference &lt;abbr&gt;WCAG&lt;/abbr&gt;&amp;nbsp;:** - [1.3.2 Meaningful Sequence](https://www.w3.org/TR/WCAG21/#meaningful-sequence) - [2.1.2 No Keyboard Trap](https://www.w3.org/TR/WCAG21/#no-keyboard-trap) - [2.4.3 Focus Order](https://www.w3.org/TR/WCAG21/#focus-order) - [4.1.2 Name, Role, Value](https://www.w3.org/TR/WCAG21/#name-role-value)  "
});

documentTitles["fondamentaux-tech.html#20-make-the-focus-visible-at-all-times"] = "20. Make the focus visible at all times";
index.add({
    url: "fondamentaux-tech.html#20-make-the-focus-visible-at-all-times",
    title: "20. Make the focus visible at all times",    
    body: "## 20. Make the focus visible at all times  **Target: **everyone and especially people with visual impairments, cognitive limitations, motor disabled, having attention difficulties or using a device outdoors.   **When: **as of design and during development.  **Description: **  Do not hide the focus and if necessary make it visible enough (e.g. by modifying the `outline` &lt;abbr&gt;CSS&lt;/abbr&gt; property) on all elements likely to receive it (links, buttons, form elements). You can also accentuate the visibility of the focus so that it is easily identifiable.  Make sure to provide a sufficient level of contrast so that it is visible to all (see [measure the level of contrast of colors](methods-tools-contrasts.html)).  When an effect is visible on an element during mouse-over (e.g. `:hover` &lt;abbr&gt;CSS&lt;/abbr&gt; property), this effect must also be displayed when capturing the focus (`:focus`).  It is possible, with Javascript code, to display the `outline` only during a keyboard navigation (ie not to display the `outline` when clicking a mouse, which also activates the `: focus` state:    &lt;pre&gt;&lt;code class=\&quot;javascript\&quot;&gt; var head = document.head || document.getElementsByTagName(’head’)[0]; var axsStyles = head.appendChild(document.createElement(’style’)); document.addEventListener(’mousedown’, function() { 	axsStyles.innerHTML = ’* {outline:none !important}’; }); document.addEventListener(’keydown’, function() { 	axsStyles.innerHTML = ’’; }); &lt;/code&gt;&lt;/pre&gt;  &lt;a href=\&quot;https://codepen.io/paipai/pen/jwLyzK\&quot;&gt; Demonstration of visibility of focus on keyboard navigation only &lt;/a&gt;  **Checklist: **  In many front-end frameworks or &lt;abbr&gt;CSS&lt;/abbr&gt; resets, the `outline` property (to visualize the focus) is disabled (`outline: none;`), don’t forget to redefine it and check that the focus is visible on all focusable elements.  **Users’ goal: **  Allow focus visibility on all elements, especially for keyboard users (visually impaired, motor disabled or those with attention or memory difficulties and using devices outdoors).  **Do:**  Focus set on the «&amp;nbsp;Apple iPhone 5s argent&amp;nbsp;» link, clearly visible.    ![screenshot showing a link whose focus is clearly visible](./images/focus-ok.png)     **Don’t:**  Focus set on the «&amp;nbsp;Apple iPhone 5s argent&amp;nbsp;».      ![screenshot showing a link whose focus is not visible enough](./images/focus-ko.png)     **Reference &lt;abbr&gt;WCAG&lt;/abbr&gt;&amp;nbsp;:**   - &lt;a href=\&quot;https://www.w3.org/TR/WCAG21/#focus-visible\&quot;&gt;2.4.7 Focus Visible&lt;/a&gt;  "
});

documentTitles["fondamentaux-tech.html#21-provide-skip-links"] = "21. Provide skip links";
index.add({
    url: "fondamentaux-tech.html#21-provide-skip-links",
    title: "21. Provide skip links",    
    body: "## 21. Provide skip links  **Target: **useful for mobile and tablet users, people with visual impairments, motor disabilities or using a device outdoors.   **When: **as of design and during development.  **Description: **  Provide skip links allowing to access directly the main page areas (navigation, content, bottom of the page, search…) with internal links pointing to anchors. (`&lt;a&gt;` tags or any &lt;abbr&gt;HTML&lt;/abbr&gt; element with an `id` attribute). In **very specific** cases, the links can be hidden on the screen and appear only when keyboard navigation is detected.  **Checklist: ** When a skip link is activated, make sure the focus is correctly set (not only scrolled to the right position).  **Users’ goal: **  Facilitate the navigation for users using a keyboard, visually impaired, users of magnifying glass software or mobile phone.       **Example: **  Skip links (“Skip to navigation”, “Skip to content”) are available on this site. To make them appear, move the focus on the top of the page by clicking on your browser’s address bar, for example, then repeatedly press the &lt;kbd&gt;TAB&lt;/kbd&gt; key.  ![screenshot of the site orange.com](images/skiplink.png)     **Reference &lt;abbr&gt;WCAG&lt;/abbr&gt;&amp;nbsp;:**   - &lt;a href=\&quot;https://www.w3.org/TR/WCAG21/#bypass-blocks\&quot;&gt;2.4.1 Bypass Blocks&lt;/a&gt;   "
});

documentTitles["fondamentaux-tech.html#22-allowing-animations-control"] = "22. Allowing animations control";
index.add({
    url: "fondamentaux-tech.html#22-allowing-animations-control",
    title: "22. Allowing animations control",    
    body: "## 22. Allowing animations control **Target: **people with visual impairments, reading, attention or understanding difficulties, people with seizure disorders.   **When: **when designing the service and graphic design.  **Description:**   All moving, refreshed, flashing or scrolling content (eg a carousel) must be able to be stopped, hidden or paused by the user if this animation lasts more than 5 seconds.  Also, avoid as much as possible flashing content and sudden brightness changes (see [The logo of the Olympics causes seizures](http://news.bbc.co.uk/2/hi/uk_news/england/london/6724245.stm)).  Therefore, it is necessary to pause the animation when loading the page or to give a way to stop or pause the animation, the update or the flashing via a button for example.  **Example: **   ![screenshot of a carousel with a button to pause the animation](./images/carrousel.png)    A carousel that automatically scrolls must be paused when the mouse is over it or when it receives the focus.   It is also possible to add a “pause” button directly in the interface.  **Reference &lt;abbr&gt;WCAG&lt;/abbr&gt;&amp;nbsp;:**   - &lt;a href=\&quot;https://www.w3.org/TR/WCAG21/#pause-stop-hide\&quot;&gt;2.2.2 Pause, Stop, Hide&lt;/a&gt; - &lt;a href=\&quot;https://www.w3.org/TR/WCAG21/#three-flashes-or-below-threshold\&quot;&gt;2.3.1 Three Flashes or Below Threshold&lt;/a&gt;  "
});

documentTitles["fondamentaux-tech.html#23-make-sure-the-main-features-can-be-used-with-screen-readers"] = "23. Make sure the main features can be used with screen readers";
index.add({
    url: "fondamentaux-tech.html#23-make-sure-the-main-features-can-be-used-with-screen-readers",
    title: "23. Make sure the main features can be used with screen readers",    
    body: "## 23. Make sure the main features can be used with screen readers  **Target: **everyone, especially people with visual impairments.   **When: **during development.  **Description: **  Follow general recommendations for accessibility, use primarily the &lt;abbr&gt;HTML&lt;/abbr&gt; standard components, otherwise, use the &lt;abbr&gt;ARIA&lt;/abbr&gt; (Accessible Rich Internet Applications) interface for complex components.   **Checklist: **  Ensure there is no blocking point with a browser/screen reader combination (Firefox/NVDA, IE/Jaws, Safari/VoiceOver) when a user navigates (accessing the main features of the application). Indeed, screen reader users are the most affected by the lack of accessibility, we can identify a huge amount of problems in satisfying this requirement.  **Users’ goal: **  Allow the screen reader users to access the main features of the application, but also ensure the usability of the application for all users.  **Reference &lt;abbr&gt;WCAG&lt;/abbr&gt;&amp;nbsp;:**   - [4.1.2 Name, Role, Value](https://www.w3.org/TR/WCAG21/#name-role-value)  "
});

documentTitles["fondamentaux-tech.html#25-ensure-the-user-keeps-control-during-interactions"] = "25. Ensure the user keeps control during interactions";
index.add({
    url: "fondamentaux-tech.html#25-ensure-the-user-keeps-control-during-interactions",
    title: "25. Ensure the user keeps control during interactions",    
    body: "## 25. Ensure the user keeps control during interactions  **Target: **Everyone, especially those who are visually impaired, cognitive or with attention deficit.   **When: **early in the design phase and during development.  **Description: **   - Do not induce a change of context when setting the focus on an element, entering data or activating a form element without this change being predictable (button) or the user has been warned. - Do not impose on the user a time limit to perform an action. This must be able to extend a time limit if appropriate. - If keyboard shortcuts based on a single key is available, it is necessary to take some measures to avoid possible conflicts with assistive technology. - The user must have control on the contents opening on hover or focus.  **Checklist:**   1. Regarding shortcuts, make sure that at least one of the following statements is true:  - **turn off**: the shortcut can be turned off.  - **modification**: a mechanism is available to remap the shortcut to use one or more non-printable keyboard characters (e.g. Ctrl, Alt, etc).  - **focus activation**: the keyboard shortcut for a user interface component is only active when that component has focus.  2. If content appears on mouse over or focus (eg tooltip), the user must be able to:  - Hide this new content without the need to move the pointer or focus; eg with the &lt;kbd&gt;esc.&lt;/kbd&gt; key (useful especially for screen magnifier users).  - Move the mouse pointer on this new content without it disappearing.  3. If actions are to be performed in a timely manner, verify that the user can extend or remove this restriction.  **User Objective: ** give all users control of the context changes related to their action and give them the necessary time to perform an action.  **Example: ** a form must have a send button. It should not be sent automatically after the user input.  **Reference &lt;abbr&gt;WCAG&lt;/abbr&gt;&amp;nbsp;:**   - &lt;a href=\&quot;https://www.w3.org/TR/WCAG21/#content-on-hover-or-focus\&quot;&gt;1.4.13 Content on Hover or Focus&lt;/a&gt; - &lt;a href=\&quot;https://www.w3.org/TR/WCAG21/#timing-adjustable\&quot;&gt;2.2.1 Timing Adjustable&lt;/a&gt; - &lt;a href=\&quot;https://www.w3.org/TR/WCAG21/#on-focus\&quot;&gt;3.2.1 On Focus&lt;/a&gt; - &lt;a href=\&quot;https://www.w3.org/TR/WCAG21/#on-input\&quot;&gt;3.2.2 On Input&lt;/a&gt; - &lt;a href=\&quot;https://www.w3.org/TR/WCAG21/#character-key-shortcuts\&quot;&gt;2.1.4 Character key shortcuts&lt;/a&gt;  "
});

documentTitles["fondamentaux-tech.html#26-avoid-captcha"] = "26. Avoid captcha";
index.add({
    url: "fondamentaux-tech.html#26-avoid-captcha",
    title: "26. Avoid captcha",    
    body: "## 26. Avoid captcha **Target: **Everyone in particular, visually impaired people.   **When: **during design and development.  **Description: ** Captchas are often the source of difficulties for users. If the implementation of an anti-spam system can not be avoided, it is advisable to move towards a more flexible solution for the user &amp; nbsp ;:  - Double authentication - Hidden form field to leave blank (honeypot technique), not visible to the user - Providing phone support to ensure that the customer is a real person - A check to ensure that the same &lt;abbr&gt;IP&lt;/abbr&gt;/User agent combination does not attempt to submit the form more than N times per second.  If no other alternative is possible, it is essential to provide an alternative for captcha only visual or sound by proposing a combination of captcha types: an audio + visual captcha, logical tests (question whose answer is obvious, mathematical test simple ...) + classic visual captcha ...  **Reference &lt;abbr&gt;WCAG&lt;/abbr&gt;&amp;nbsp;:**   - &lt;a href=\&quot;https://www.w3.org/TR/WCAG21/#non-text-content\&quot;&gt;1.1.1 Non-text Content&lt;/a&gt;  "
});

documentTitles["fondamentaux-tech.html#27-identify-and-maintain-consistency-of-groupings-and-different-regions-of-the-page"] = "27. Identify and maintain consistency of groupings and different regions of the page";
index.add({
    url: "fondamentaux-tech.html#27-identify-and-maintain-consistency-of-groupings-and-different-regions-of-the-page",
    title: "27. Identify and maintain consistency of groupings and different regions of the page",    
    body: "## 27. Identify and maintain consistency of groupings and different regions of the page **Target: **Everyone, especially people with visual, cognitive or attention deficit disorders.  **Description: ** Provide ways to identify and visually distinguish the different parts of the page and ensure the consistency of these regions or groupings in all pages.  **Checklist: ** - Make sure that the navigation mechanisms are always located at the same place in a set of pages. - Ensure that the components and groupings that have the same function are identified (visually and semantically) in the same way. - Ensure that the areas of the page are clearly delimited (borders, edges, sufficient contrast ...) or that there is a way to visually distinguish the groups (sub-menu, drop-down list ...) as well as the different regions of the page.  **User Objective: **   Allow users to identify and locate interface elements in all pages.  **Do: **   ![screenshot of the site 100% practical](./images/groupement.jpg)   Here, the tooltip (tooltip) is delimited by a visible edge and sufficiently contrasted, to identify its content.  **Don't: **   ![screenshot of the fnac.com website](./images/groupement2.jpg)   It is very difficult to associate the themes (\&quot;par region\&quot;, \&quot;par genre\&quot;, ...) and the sub-themes in columns, especially since the horizontal borders are too little contrasted.  **Example: The &lt;abbr&gt;HTML5&lt;/abbr&gt; and landmarks &lt;abbr&gt;ARIA&lt;/abbr&gt; **   To give a semantic structure to the main regions of a page, we can use the &lt;abbr&gt; HTML5 &lt;/ abbr&gt; structure tags (`main` for the main content of the page,` nav` for the main navigation, `header `for page header,` footer` for footer, `aside` for content complementary to the main content, and others) even if their support by assistive technologies / browsers is not total , it's enough. You can also use, to set up this page structure, [the landmarks &lt;abbr&gt;ARIA&lt;/abbr&gt; (Accessible Rich Internet Applications)](https://www.w3.org/TR/wai-aria-practices/examples/landmarks/index.html) and there, the support is much better &amp; nbsp ;!  All about &lt;a href=\&quot;./examples/landmarks/index.html\&quot;&gt;the landmarks &lt;abbr&gt;ARIA&lt;/abbr&gt; in our examples&lt;/a&gt;.  Setting up this type of semantics allows visually impaired people to identify and understand the organization, the overall structure of the page and thus navigate more easily.  **Reference &lt;abbr&gt;WCAG&lt;/abbr&gt;&amp;nbsp;:**   - &lt;a href=\&quot;https://www.w3.org/TR/WCAG21/#consistent-navigation\&quot;&gt;3.2.3 Consistent Navigation&lt;/a&gt; - &lt;a href=\&quot;https://www.w3.org/TR/WCAG21/#consistent-identification\&quot;&gt;3.2.4 Consistent Identification&lt;/a&gt;  "
});

documentTitles["fondamentaux-tech.html#28-provide-multiple-access-and-location"] = "28. Provide multiple access and location";
index.add({
    url: "fondamentaux-tech.html#28-provide-multiple-access-and-location",
    title: "28. Provide multiple access and location",    
    body: "## 28. Provide multiple access and location  **Target:** Everyone, especially people who are visually or cognitively impaired.  **Description: **   Give the user several ways to locate and access specific content, locate the web page being viewed in a set of pages. When the page is a step in a process where the pages follow one after the other, providing a way to locate can be ignored.  **Checklist: **   Make sure that several systems allow you to locate and access a page or content in the site &amp; nbsp ;: a search tool on the entire site, a site map, a global navigation menu, a breadcrumb trail...  **User Objective: **   Allow all users to find their way in order to access more easily all the content of the site.  **Do: **   The site offers, at the same time, a complete and precise main navigation and a breadcrumb trail.  **Don't: **   An application provides a parcel navigation menu and no other way for the user to navigate the pages or locate where the current page is in the tree.  **Reference &lt;abbr&gt;WCAG&lt;/abbr&gt;&amp;nbsp;:**   - &lt;a href=\&quot;https://www.w3.org/TR/WCAG21/#multiple-ways\&quot;&gt;2.4.5 Multiple Ways&lt;/a&gt; - &lt;a href=\&quot;https://www.w3.org/TR/WCAG21/#location\&quot;&gt;2.4.8 Location&lt;/a&gt;  "
});

documentTitles["fondamentaux-tech.html#29-define-sensitive-areas-of-sufficient-size"] = "29. Define sensitive areas of sufficient size";
index.add({
    url: "fondamentaux-tech.html#29-define-sensitive-areas-of-sufficient-size",
    title: "29. Define sensitive areas of sufficient size",    
    body: "## 29. Define sensitive areas of sufficient size  **Target: **Everyone, especially people with motor or visual disabilities and mobility.   **When: **during design and development.    **Description: **   Each sensitive area must have a sufficient size (minimum 9mm width and height). In addition, the sensitive areas must be sufficiently spaced from each other (about 2mm minimum).  "
});

documentTitles["fondamentaux-tech.html#30-allow-zooming"] = "30. Allow zooming";
index.add({
    url: "fondamentaux-tech.html#30-allow-zooming",
    title: "30. Allow zooming",    
    body: "## 30. Allow zooming  **Target: ** everyone especially the visually impaired.   **When: ** during development.  **Description: **   The site must not prohibit or limit the use of the zoom (especially on mobiles).  "
});

documentTitles["fondamentaux-tech.html#31-allow-to-cancel-the-triggering-of-gestural-interactions"] = "31. Allow to cancel the triggering of gestural interactions";
index.add({
    url: "fondamentaux-tech.html#31-allow-to-cancel-the-triggering-of-gestural-interactions",
    title: "31. Allow to cancel the triggering of gestural interactions",    
    body: "## 31. Allow to cancel the triggering of gestural interactions  **Target: ** Everyone, especially people with motor or visual disabilities and mobility.   **When: ** during development.  **Description: **   During gesture interaction, the action is triggered only at the end of the interaction, and the action is not triggered if the trigger element loses focus.  **Reference &lt;abbr&gt;WCAG&lt;/abbr&gt;&amp;nbsp;:**   - &lt;a href=\&quot;https://www.w3.org/TR/WCAG21/#pointer-cancellation\&quot;&gt;2.5.2 Pointer Cancellation&lt;/a&gt;  "
});

documentTitles["fondamentaux-tech.html#32-offer-an-alternative-to-complex-gestures"] = "32. Offer an alternative to complex gestures";
index.add({
    url: "fondamentaux-tech.html#32-offer-an-alternative-to-complex-gestures",
    title: "32. Offer an alternative to complex gestures",    
    body: "## 32. Offer an alternative to complex gestures  **Target: **Everyone, especially people with motor or visual disabilities and mobility.   **When: **during design and development.  **Description: **   For each complex gestural interaction, an alternative must be available (for example a non-gestural or simplified alternative). Similarly for interactions requiring a change of orientation of the screen (tilting, rotation, shaking ...), an alternative must exist.  **Complex gesture:** any multi-pointer gesture (requiring several fingers), and / or path-bases gesture.   **Simplified gesture:** an alternative requiring a single pointer (one finger) without path-based gesture.  **Reference &lt;abbr&gt;WCAG&lt;/abbr&gt;&amp;nbsp;:**   - &lt;a href=\&quot;https://www.w3.org/TR/WCAG21/#pointer-gestures\&quot;&gt;2.5.1 Pointer Gestures&lt;/a&gt;  "
});

documentTitles["fondamentaux-tech.html#33-give-access-to-the-content-regardless-of-the-orientation-of-the-screen"] = "33. Give access to the content regardless of the orientation of the screen";
index.add({
    url: "fondamentaux-tech.html#33-give-access-to-the-content-regardless-of-the-orientation-of-the-screen",
    title: "33. Give access to the content regardless of the orientation of the screen",    
    body: "## 33. Give access to the content regardless of the orientation of the screen  **Target: **Everyone, especially people with motor or visual disabilities and mobility.   **When: **during design and development.  **Description: **   Access to the content must not depend on the orientation of the screen (portrait and landscape) unless a specific display orientation is essential (e.g. serious game).  **Reference &lt;abbr&gt;WCAG&lt;/abbr&gt;&amp;nbsp;:**   - &lt;a href=\&quot;https://www.w3.org/TR/WCAG21/#orientation\&quot;&gt;1.3.4 Orientation&lt;/a&gt;  "
});

documentTitles["fondamentaux-tech.html#34-allow-to-know-the-result-of-a-user-interaction-with-status-messages"] = "34. Allow to know the result of a user interaction with status messages";
index.add({
    url: "fondamentaux-tech.html#34-allow-to-know-the-result-of-a-user-interaction-with-status-messages",
    title: "34. Allow to know the result of a user interaction with status messages",    
    body: "## 34. Allow to know the result of a user interaction with status messages  **Target: ** Everyone, especially people with visual, cognitive and attention deficit disorders   **When: ** during conception to content writing and development.  **Description: **   Provide the user with status messages that give him feedback on the action he has just completed.  **Checklist: **      Contextual messages must be perceived by anyone using a &lt;abbr&gt;AT&lt;/abbr&gt; (speech synthesis) without taking focus on the message.        A status message or pop-up message can be &amp; nbsp ;: - a message that gives the user information on the result of an interaction (ex: Your request has been taken into account) - a waiting message that indicates that the triggered action is running and indicates an approximate wait time - a message that gives information on a change of context  **User Objective: **       For all users, have feedback on the essential actions it performs.  **Reference &lt;abbr&gt;WCAG&lt;/abbr&gt;&amp;nbsp;:**   - &lt;a href=\&quot;https://www.w3.org/TR/WCAG21/#status-messages\&quot;&gt;4.1.3 Status Messages&lt;/a&gt;  &lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2016  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt;"
});



documentTitles["fondamentaux-nontech.html#essential-criteria-for-the-design"] = "Essential criteria for the design";
index.add({
    url: "fondamentaux-nontech.html#essential-criteria-for-the-design",
    title: "Essential criteria for the design",    
    body: "# Essential criteria for the design  &lt;script&gt;$(document).ready(function () {     setBreadcrumb([         {\&quot;label\&quot;:\&quot;Essential criteria\&quot;, \&quot;url\&quot;: \&quot;./fondamentaux.html\&quot;},         {\&quot;label\&quot;:\&quot;Essential criteria for the design\&quot;}     ]);     addSubMenu([         {\&quot;label\&quot;:\&quot;For designers\&quot;, \&quot;url\&quot;:\&quot;fondamentaux.html\&quot;, \&quot;expanded\&quot;:true},          {\&quot;label\&quot;:\&quot;For developers\&quot;, \&quot;url\&quot;:\&quot;fondamentaux-tech.html\&quot;}     ]); });&lt;/script&gt;  &lt;span data-menuitem=\&quot;fondamentaux\&quot;&gt;&lt;/span&gt;   "
});

documentTitles["fondamentaux-nontech.html#1-set-a-title-for-each-page"] = "1. Set a title for each page";
index.add({
    url: "fondamentaux-nontech.html#1-set-a-title-for-each-page",
    title: "1. Set a title for each page",    
    body: "## 1. Set a title for each page **Target: ** everyone and especially people with visual impairments.   **When: ** as of design and during development.  **Description:**   Give each page a title that is specific to it and which reflects its content or function  (`&lt;title&gt;` tag).   The page title is the first element read by a screen reader, it must help to formally identify the page where you are.  **Checklist: ** - Even if there is no rule, in general (opening many tabs in multiple applications), we go from the most specific information to the least specific (e.g. title of the current page - name of the site). When opening a multitude of applications, the approach is different, in this case we will prefer going from the least specific information to the most specific (eg name of the site - title of the current page). - When the content of the page is dynamic (displaying the result of a search, errors in a form, user adding content…), the title of the page should reflect this change.  **Do:**   `Home - Corporate web site of Orange`   **Don’t:**   `Home`  "
});

documentTitles["fondamentaux-nontech.html#2-start-sections-with-headings"] = "2. Start sections with headings";
index.add({
    url: "fondamentaux-nontech.html#2-start-sections-with-headings",
    title: "2. Start sections with headings",    
    body: "## 2. Start sections with headings **Target: ** everyone and especially people with cognitive limitations, reading difficulties and visual impairments.   **When: ** as of design, content writing and during development.  **Description:**   Identifying heading tags (`h1` to `h6` &lt;abbr&gt;HTML&lt;/abbr&gt; tags) used to structure the content of the pages. Visually impaired people browsing with a screen reader can access the list of headings in the page to navigate quickly.  Just like in a Word document, it is possible to use the table of contents only if the heading tags have been properly set within the document.    **Checklist: **  - The headings must be relevant, reflect the structure of the information contained in the page. - There should be no break in the heading hierarchy (we cannot jump from a `h2` heading to a `h4` heading). - You can use several `h1` headings per page (Don’t exceed two in most cases).  **Goal: ** - For all users: improve the structure of the page and its contents. - For search engines: improve &lt;abbr&gt;SEO&lt;/abbr&gt;. - For users that are visually impaired, cognitively impaired or having reading difficulties: easy navigation and access to content.  **Do:**   Page with consistent and relevant headings:  ``` (Heading 1) Home – Orange (Heading 2) News (Heading 2) Fibre broadband is coming! (Heading 3) Check eligibility ```  "
});

documentTitles["fondamentaux-nontech.html#3-make-sure-there-is-enough-contrast-between-text-and-background"] = "3. Make sure there is enough contrast between text and background";
index.add({
    url: "fondamentaux-nontech.html#3-make-sure-there-is-enough-contrast-between-text-and-background",
    title: "3. Make sure there is enough contrast between text and background",    
    body: "## 3. Make sure there is enough contrast between text and background **Target: ** everyone, especially mobile and tablet users, people with visual impairments, reading or attention difficulties and elderly people.    **When: ** as of design and during development.  **Description:**   The contrast between the text and the background should be high enough. Insufficient contrast level will have detrimental impact on users with visual difficulties and for mobile and tablet users in a very bright environment.      **Don’t: **   The label “film | 20h40…” does not have enough contrast. It will not be readable by all users.    ![screenshot showing text with poor contrast](images/contraste.png)  **Checklist: **  - The contrast between the colour of the background and the text must be 4.5:1 minimum and also for text on an image carrying information. - For applications used primarily in mobile web or in mobility, the contrast level of the main elements must be 7:1 in order to ensure a good readability for all. - Links should be easily identifiable from to the rest of the text.  **Tool: **   The [Colour Contrast Analyser](http://www.paciellogroup.com/resources/contrastanalyser/) application can quickly measure colour contrast levels (free for Windows and Mac).     "
});

documentTitles["fondamentaux-nontech.html#4-do-not-use-colour-or-sensory-characteristics-as-the-unique-source-of-information"] = "4. Do not use colour or sensory characteristics as the unique source of information";
index.add({
    url: "fondamentaux-nontech.html#4-do-not-use-colour-or-sensory-characteristics-as-the-unique-source-of-information",
    title: "4. Do not use colour or sensory characteristics as the unique source of information",    
    body: "## 4. Do not use colour or sensory characteristics as the unique source of information **Target: ** everyone, especially the colour-blind and more generally people with visual impairments, cognitive limitations, hearing impairments and elderly people.   **When: ** as of design and during development.  **Description: **   Do not use colour or sensory characteristics (shape, size, sound, direction, visual localization…) as the only way of conveying information, indicating an action, requesting a response or distinguishing an element. The information provided by a colour change or a sensory characteristic must be completed with textual information (alternative) or / and semantic structuring.  **Do: **    ![illustration using coloured icons to convey information](images/couleur-ok.png)  **Don’t: **    ![illustration using coloured icons to convey information](images/couleur-ko.png)    This example is not valid because the information is conveyed only by colour.  **Checklist: ** - Take a screenshot and convert it in black and white. The loss of colour should not cause difficulty while navigating, nor cause loss of information. - Turn off the speakers, the level of information should remain the same.  "
});

documentTitles["fondamentaux-nontech.html#5-define-text-alternatives"] = "5. Define text alternatives";
index.add({
    url: "fondamentaux-nontech.html#5-define-text-alternatives",
    title: "5. Define text alternatives",    
    body: "## 5. Define text alternatives **Target: ** people with visual impairments, hearing difficulties or cognitive limitations and search engines.   **When: ** as of design and during development.  **Description:**   Set text alternatives on all non-text informative elements (alternatives to images, icons). Also provide scripts or subtitles for the audio or video content.  **Example  **   In the screenshot below, the design phase should provide  text alternatives for each button: - “menu”, - “settings”, - “previous channel”, - “mute”…  ![screenshot of a video player with multiple buttons](images/player.png)     "
});

documentTitles["fondamentaux-nontech.html#6-focus-visibility"] = "6. Focus visibility";
index.add({
    url: "fondamentaux-nontech.html#6-focus-visibility",
    title: "6. Focus visibility",    
    body: "## 6. Focus visibility **Target: ** everyone and especially people with visual impairments or cognitive limitations, motor disabilities and using a device outdoors.   **When: ** as of graphic design and during development.  **Description:**   The position of the keyboard focus must be visible at all times. When a clickable element receives the focus (link, button…), this must be visible to the user. By default, the browser sets a dotted or a coloured box around the element. This behavior can be replaced by a custom effect (improving the contrast, for example) but must not be deleted. Users who navigate using the keyboard (&lt;kbd&gt;TAB&lt;/kbd&gt;) need to know the position of the focus.      The focus indicator as well as the hover indicator (when the mouse is over an element) should be carefully considered since the graphic design.       **Do: **   In the following screenshots, the focus is located on the “209 SMS/month”.  The first figure shows the default behavior (focus represented by a dotted box). In the second capture, the dotted lines have been removed, replaced by a coloured box to explicitly indicate the location of the focus.   ![screenshot showing the default focus](images/focus.png) ![screenshot with a custom focus](images/focus2.png)    "
});

documentTitles["fondamentaux-nontech.html#7-changing-text-size"] = "7. Changing text size";
index.add({
    url: "fondamentaux-nontech.html#7-changing-text-size",
    title: "7. Changing text size",    
    body: "## 7. Changing text size  **Target: ** everyone and especially people with visual impairments, using a device outdoors, and elderly people.   **When: ** as of graphic design and mainly during development.  **Description:**   The text size should be able to be doubled (set the zoom to 200% in the browser settings). At this zoom level, the page layout can be altered, but the information must be readable (text or bunk not truncated). Although this must be taken into account during the development phase, we can identify, even still in the graphic design phase, areas of the screen that should or should not grow together with the text size. Moreover, some design choices may or may not facilitate the implementation of this criterion during development, so it is important to think about it from the start.       **Example: **     The screenshot below shows a page with the zoom set to 100%.   ![screenshot showing a page zoomed to 100%](images/zoom.png)        &amp;nbsp;   **Do: **   Zoom set to 200%.   ![screenshot with 200% zoom and readable text](images/zoom-ok.png)        &amp;nbsp;   **Don’t: **   Zoom set to 200%. In this case the height of the text container did not resized according to text size.   ![screenshot with 200% zoom and truncated text](images/zoom-ko.png)    "
});

documentTitles["fondamentaux-nontech.html#8-allow-text-spacing"] = "8. Allow text spacing";
index.add({
    url: "fondamentaux-nontech.html#8-allow-text-spacing",
    title: "8. Allow text spacing",    
    body: "## 8. Allow text spacing  **Target: ** Everyone, especially people with visual and dyslexic disabilities.   **When: ** as of graphic design and during development.  Even if it is during the development phase that we will ensure the validity of this criterion, it is important, from the design phase, to think about the height of the lines and the spacing of the paragraphs and text. It is generally accepted that a line height (line-height) of 1.5 makes it possible to obtain a good readability of the text, for example an article in English entitled: &lt;a href = \&quot; https://www.invisionapp.com/blog/line-spacing/ \&quot;lang =\&quot; en \&quot;&gt; Why you should go big with line spacing &lt;/a&gt;.  **Description: **   If the user applies the following settings, the text must remain legible (no truncated content, superimposed):  - The height of the lines must be able to be adjusted to 1.5 times minimum the size of the font. - The space between two paragraphs must be adjustable to at least 2 times the size of the font. - The spacing between the letters must be able to be adjusted to 0.12 times the size of the font. - The spacing between words must be able to be adjusted to 0.16 times minimum the size of the font.  For information, the criteria mentioned above is like applying the following CSS styles at the code level: &lt;pre&gt;&lt;code class = \&quot;css\&quot;&gt;   * {       line-height: 1.5! important;       letter-spacing: .12em! important;       word-spacing: .16em! important;   }    p {       margin-bottom: 2em!important;   } &lt;/code&gt;&lt;/pre&gt;  **Bookmarklet:**   To make the test easier, you can use the following bookmarklet that will apply these styles to your browser's current page (bookmarklet to slide in your bookmarks bar):  &lt;a href=\&quot;javascript:s%20=%20document.createElement(%22style%22)%3Bs.setAttribute(%22type%22%2C%22text%2Fcss%22)%3Bt%3Ddocument.createTextNode(%22*%20%7Bline-height%3A%201.5!important%3B%20letter-spacing%3A.12em!important%3B%20word-spacing%3A%20.16em%20!important%3B%7D%20p%7Bmargin-bottom%3A%202em!important%3B%20%7D%22)%3Bs.appendChild(t)%3Bh%20%3D%20document.getElementsByTagName(%22head%22)%5B0%5D%3Bh.appendChild(s)%3Bvoid(0)%3B\&quot;&gt;Text spacing&lt;/a&gt;  "
});

documentTitles["fondamentaux-nontech.html#9-allowing-control-of-animations"] = "9. Allowing control of animations";
index.add({
    url: "fondamentaux-nontech.html#9-allowing-control-of-animations",
    title: "9. Allowing control of animations",    
    body: "## 9. Allowing control of animations **Target: ** people with visual impairments, reading/attention/understanding difficulties and seizure disorders.   **When: ** when designing the service and during graphic design.  **Description:**   All moving, refreshed or flashing content must provide a way to be stopped, paused or hidden by the user. Also, avoid as much as possible flashing content and sudden brightness changes (see [The logo of the Olympics causes seizures](http://news.bbc.co.uk/2/hi/uk_news/england/london/6724245.stm)).  **Example: **   ![screenshot of a carousel with a button to pause the animation](./images/carrousel.png)    A carousel that automatically scrolls must be paused when the mouse is over it or when it receives the focus. It is also possible to add a “pause” button directly in the interface.  "
});

documentTitles["fondamentaux-nontech.html#10-link-and-button-labels"] = "10. Link and button labels";
index.add({
    url: "fondamentaux-nontech.html#10-link-and-button-labels",
    title: "10. Link and button labels",    
    body: "## 10. Link and button labels **Target: ** everyone and especially people with visual impairments, cognitive limitations or attention difficulties.   **When: ** when designing the service and during graphic design.  **Description:**   The wording of the links ad buttons should be explicit enough. In exceptional cases when it is technically impossible, provide a explicit label that can be read only by screen reader (and other assistive technologies).  **Do:**   `Learn about our offers`   **Don’t:**   `click here`   `more details`  "
});

documentTitles["fondamentaux-nontech.html#11-navigating-with-the-keyboard"] = "11. Navigating with the keyboard";
index.add({
    url: "fondamentaux-nontech.html#11-navigating-with-the-keyboard",
    title: "11. Navigating with the keyboard",    
    body: "## 11. Navigating with the keyboard **Target: ** everyone, especially people with motor or visual impairments or using a device outdoors.   **When: ** when designing the service and during development.  **Description:**   All features must be accessible using the keyboard. Pressing the keyboard &lt;kbd&gt;Tab&lt;/kbd&gt; key, the browser passes the focus between clickable elements.   Moreover, if the features are mouse-specific (drag and drop, right click menu…), ensure that these are also available through other means elsewhere in the interface (button, icon, menu…).  See [how to navigate with a keyboard](./methodes-outils-clavier.html) in a web browser.  **Example: **   In the webmail, right-clicking on the “trash” opens a menu to empty the trash, this option should be also available through an “empty the trash” button elsewhere in the interface or from a drop-down menu accessible with the keyboard.  "
});

documentTitles["fondamentaux-nontech.html#12-usable-forms"] = "12. Usable forms";
index.add({
    url: "fondamentaux-nontech.html#12-usable-forms",
    title: "12. Usable forms",    
    body: "## 12. Usable forms **Target: ** everyone and especially people with visual impairments, dyslexia and cognitive disabilities.   **When: ** during design and development.  **Description:**   Each form input must be associated with a label identifying the function of the field, the type of data and the expected format. This label should be visually close to the field so we can easily mentally link them (especially for people using zoom or a software magnifier, or even for mobile users).   Error messages should clearly identify the invalid field, and if necessary suggest a correction. This applies to input fields, but also to other types of fields (drop-down list, radio button, checkbox…). From the development perspective, this label must be associated with the form field to facilitate the navigation with a screen reader.  **Do: **   ![screenshot of a valid form](images/formulaire.png)    &amp;nbsp;  **Don’t: **   ![screenshot of a form with a missing label](images/formulaire2.png)  &amp;nbsp;  In some cases, it seems unnecessary to associate a label to a form field (search field accompanied by a magnifying glass button for example). In such case you can provide a hidden label, it will not be displayed on the screen but it will be associated with the form field programmatically for easy navigation with a screen reader.  Lastly, the wording of the error messages should be explicit.  **Do: **   ![screenshot of a form that displays relevant error messages](images/formulaire-ok.png)    **Don’t: **   ![screenshot of a form displaying irrelevant error messages](images/formulaire-ko.png)  "
});

documentTitles["fondamentaux-nontech.html#13-avoid-dialogues-and-opening-new-windows"] = "13. Avoid dialogues and opening new windows";
index.add({
    url: "fondamentaux-nontech.html#13-avoid-dialogues-and-opening-new-windows",
    title: "13. Avoid dialogues and opening new windows",    
    body: "## 13. Avoid dialogues and opening new windows **Target: ** elderly people, people with cognitive or visual impairments or using a device outdoors.   **When: ** as of design and in the development.  **Description:**   Avoid as much as possible the actions that open a new window (or tab) of the browser. If a link triggers the opening of a new window, you need to ensure that the text “new window” is vocalized by screen readers programmatically. So that visually impaired people know that a new window has been opened.  Also avoid the systematic use of dialogues to display information in the pages (presentation of service…). They must be reserved for important information that requires immediate attention and remain small.   These modal windows or pop-in often cause accessibility problems for people who navigate with a keyboard or a screen reader, and they will require special attention during the development phase.  **Don’t: **   In the example below the use of a dialogue is not justified. Using a standard web page would: - allow more space to the content (by removing the margins around the dialogue), - allow the “back” button to go back when navigating between pages of the dialogue, - make the display on small screens easier, - avoid accessibility problems for people who navigate using the keyboard or using a screen reader, - reduce the weight of the page and improve loading time, as in this example the page behind the dialogue box must be charged.    ![screenshot of a dialogue way too big](images/dialog.png)  "
});

documentTitles["fondamentaux-nontech.html#14-provide-skip-links"] = "14. Provide skip links";
index.add({
    url: "fondamentaux-nontech.html#14-provide-skip-links",
    title: "14. Provide skip links",    
    body: "## 14. Provide skip links **Target: ** useful for mobile and tablet users, people with visual impairments, motor disabilities or using a device outdoors.   **When: ** as of the design phase and in the development.  **Description:**   Provide skip links such as “Skip to content” on each page. It facilitates navigation for people using the keyboard, using a device outdoors or with a screen reader. In **very specific** cases, the links can be hidden on the screen and appear only when keyboard navigation is detected.  **Example: **   Skip links (“Skip to navigation”, “Skip to content”) are available on this site. To make them appear, move the focus on the top of the page by clicking on your browser’s address bar, for example, then repeatedly press the &lt;kbd&gt;TAB&lt;/kbd&gt; key.  ![screenshot of the orange.com site](images/skiplink.png)  "
});

documentTitles["fondamentaux-nontech.html#15-identify-and-maintain-consistency-of-groupings-and-different-regions-of-the-page"] = "15. Identify and maintain consistency of groupings and different regions of the page";
index.add({
    url: "fondamentaux-nontech.html#15-identify-and-maintain-consistency-of-groupings-and-different-regions-of-the-page",
    title: "15. Identify and maintain consistency of groupings and different regions of the page",    
    body: "## 15. Identify and maintain consistency of groupings and different regions of the page  **Target: ** Everyone, especially people with visual, cognitive or attention deficit disorders.  **When: ** when designing.  **Description: **   Provide ways to identify and visually distinguish the different parts of the page and ensure the consistency of these regions or groupings in all pages.  **Checklist: **  - Make sure that the navigation mechanisms are always located at the same place in a set of pages. - Ensure that the components and groupings that have the same function, are identified (visually) in the same way and, as far as possible, respect the classic appearance of these elements so as not to disturb the user accustomed to a specific aspect of them (for example, links are usually underlined ...). - Ensure that the areas of the page are clearly delimited (borders, edges, sufficient contrast ...) or that there is a way to visually distinguish the groups (sub-menu, drop-down list ...) as well as the different regions of the page.  **Do: **  ![screenshot of the site 100% practical](images/groupement.jpg)  Here, the tooltip (tooltip) is delimited by a visible border and sufficiently contrasted, to identify its content.  **Don't: **  ![screenshot of the fnac.com website](images/groupement2.jpg)  It is very difficult to associate the themes (\&quot;par region\&quot;, \&quot;par genre\&quot;...) and the sub-themes in columns, especially since the horizontal borders are not enough contrasted.  "
});

documentTitles["fondamentaux-nontech.html#16-explicitly-locate-the-page-in-the-site-and-provide-several-ways-to-access-it"] = "16. Explicitly locate the page in the site and provide several ways to access it";
index.add({
    url: "fondamentaux-nontech.html#16-explicitly-locate-the-page-in-the-site-and-provide-several-ways-to-access-it",
    title: "16. Explicitly locate the page in the site and provide several ways to access it",    
    body: "## 16. Explicitly locate the page in the site and provide several ways to access it    ** Target: ** everyone, especially people who are visually or cognitively impaired.  **When: ** when designing.  **Description: **   Give the user several ways to locate and access specific content, locate the web page being viewed in a set of pages. When the page is a step in a process where the pages follow one after the other, this criterion can be ignored.  **Checklist: **   Make sure that several systems allow you to locate and access a page or content in the site: a search tool on the entire site, a site map, a global navigation menu, a breadcrumb trail ...  **Do: **   The site offers, at the same time, a complete and precise main navigation and a breadcrumb trail.  **Don't: **   An application provides a parcel navigation menu and no other way for the user to navigate the pages or locate where the current page is in the tree.  "
});

documentTitles["fondamentaux-nontech.html#17-avoid-captcha"] = "17. Avoid captcha";
index.add({
    url: "fondamentaux-nontech.html#17-avoid-captcha",
    title: "17. Avoid captcha",    
    body: "## 17. Avoid captcha  **Target: ** everyone in particular, visually impaired people.   **When: ** during design and development.  **Description **   Captchas are often the source of difficulties for all users. If the implementation of an anti-spam system can not be avoided, it is advisable to move towards a more flexible solution for the user: - Double authentication; - Hidden form field left blank (honeypot technique), not visible to the user; - Providing phone support to make sure the customer is a real person; - A check to ensure that the same &lt;abbr&gt; IP &lt;/abbr&gt; / User agent combination does not attempt to submit the form more than N times per second.  If no other alternative is possible, it is essential to provide an alternative for captcha only visual or sound by proposing a combination of captcha: - an audio captcha + visual, - logical tests (question whose answer is obvious, simple mathematical test ...) + classic visual captcha - …  "
});

documentTitles["fondamentaux-nontech.html#18-define-sensitive-areas-of-sufficient-size"] = "18. Define sensitive areas of sufficient size";
index.add({
    url: "fondamentaux-nontech.html#18-define-sensitive-areas-of-sufficient-size",
    title: "18. Define sensitive areas of sufficient size",    
    body: "## 18. Define sensitive areas of sufficient size  **Target: ** everyone in particular, people with motor or visual disability and mobility.   **When: ** during design and development.  **Description: **   Each sensitive area must have a sufficient size (minimum 9mm width and height). In addition, the sensitive areas must be sufficiently spaced from each other (about 2mm minimum).  "
});

documentTitles["fondamentaux-nontech.html#21-offer-an-alternative-to-complex-gestures"] = "21. Offer an alternative to complex gestures";
index.add({
    url: "fondamentaux-nontech.html#21-offer-an-alternative-to-complex-gestures",
    title: "21. Offer an alternative to complex gestures",    
    body: "## 21. Offer an alternative to complex gestures  **Target: ** everyone in particular, people with motor or visual disability and mobility.   **When &amp; nbsp;: ** during design and development.  **Description: **   For each complex gestural interaction, an alternative must be available (for example a non-gestural or simplified alternative). Similarly for interactions requiring a change of orientation of the screen (tilting, rotation, shaking ...).  **Complex gesture:** any multi-pointer gesture (requiring several fingers), and / or path-bases gesture.   **Simplified gesture:** an alternative requiring a single pointer (one finger) without path-based gesture.  "
});

documentTitles["fondamentaux-nontech.html#22-give-access-to-the-content-regardless-of-the-orientation-of-the-screen"] = "22. Give access to the content regardless of the orientation of the screen";
index.add({
    url: "fondamentaux-nontech.html#22-give-access-to-the-content-regardless-of-the-orientation-of-the-screen",
    title: "22. Give access to the content regardless of the orientation of the screen",    
    body: "## 22. Give access to the content regardless of the orientation of the screen  **Target: ** Everyone in particular, people with motor or visual disability and mobility.    **When: ** during design and development.  **Description: **   Access to the content must not depend on the orientation of the screen (portrait and landscape) unless a specific display orientation is essential (e.g. serious game).  "
});

documentTitles["fondamentaux-nontech.html#23-provide-accessible-audio-or-video-tracks"] = "23. Provide accessible audio or video tracks";
index.add({
    url: "fondamentaux-nontech.html#23-provide-accessible-audio-or-video-tracks",
    title: "23. Provide accessible audio or video tracks",    
    body: "## 23. Provide accessible audio or video tracks  **Target: **everyone and particularly people with visual disabilities, hearing impairments, cognitive limitations, or difficulties with English.   **When: **during design and development.  **Description: **  To be accessible, the multimedia contents must: 1. propose a full transcript 2. offer subtitles (video only) 3. offer audio description (video only) 4. choose an accessible media player 5. Prohibit the automatic start of the video when loading the page 6. Prohibit videos that have more than 3 flashes per second 7. Furthermore, for any sound that has been emitted for more than 3 seconds, the user must have the option of either stopping or pausing it or controlling its volume regardless of the overall system volume.  For more info check out [accessibility recommendations for video content, animations and Orange audios](../others/video-audio.html).  **Users’ goal: **   Provide access to visual and hearing information for people who cannot access it: visually impaired, blind, deaf, cognitively deficient, computer without speakers, noisy or bright environment.  **Technical goal: **   Allow audio and video referencing.  &lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2016  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt;"
});



documentTitles["exigences.html#requirements-and-resources"] = "Requirements and resources";
index.add({
    url: "exigences.html#requirements-and-resources",
    title: "Requirements and resources",    
    body: "# Requirements and resources &lt;script&gt;$(document).ready(function () {     setBreadcrumb([{\&quot;label\&quot;:\&quot;Requirements and resources\&quot;}]); });&lt;/script&gt; "
});

documentTitles["exigences.html#wcag"] = "WCAG";
index.add({
    url: "exigences.html#wcag",
    title: "WCAG",    
    body: "## WCAG  For Orange internal accessibility requirements, we have chosen to rely on the [Web Content Accessibility Guidelines v2](https://www.w3.org/TR/WCAG20/) (&lt;abbr&gt;WCAG&lt;/abbr&gt; 2). Those guidelines are international guidelines published by the World Wide Web Consortium (&lt;abbr&gt;W3C&lt;/abbr&gt;) Web Accessibility Initiative (&lt;abbr&gt;WAI&lt;/abbr&gt;) task force, which comply with the &lt;abbr&gt;ISO&lt;/abbr&gt; standard 40500:2012.  All &lt;abbr&gt;HTML&lt;/abbr&gt; pages made by the Orange group must **comply with the AA level criteria of Web Content Accessibility Guidelines (&lt;abbr&gt;WCAG&lt;/abbr&gt;) 2.1, without blocking point** for the user after testing the main features of the site or application.  For technical solutions, you should consult [essential criteria](./fondamentaux.html) and [examples](./exemples.html) sections. You can also refer to an external resource available at [Accede-Web references](http://wiki.accede-web.com/en/home).  "
});

documentTitles["exigences.html#abbrrgaaabbr"] = "&lt;abbr&gt;RGAA&lt;/abbr&gt;";
index.add({
    url: "exigences.html#abbrrgaaabbr",
    title: "&lt;abbr&gt;RGAA&lt;/abbr&gt;",    
    body: "## &lt;abbr&gt;RGAA&lt;/abbr&gt;  The &lt;abbr&gt;RGAA&lt;/abbr&gt; is the French government’s [General Accessibility Reference for Administrations (in French)](http://references.modernisation.gouv.fr/referentiel/). It is meant to provide a way to check compliance against &lt;abbr&gt;WCAG&lt;/abbr&gt; 2.1. If your are familiar with this reference, you can use it to test your site.  An [English translation](https://disic.github.io/rgaa_referentiel_en/introduction-RGAA.html) is available for informational purposes only.   "
});

documentTitles["exigences.html#accede-web-references"] = "Accede-web references";
index.add({
    url: "exigences.html#accede-web-references",
    title: "Accede-web references",    
    body: "## Accede-web references  The [Accede-web](http://wiki.accede-web.com/en/) site offers great manuals on web accessibility. These references are very useful, pedagogical and come from Atalan, a group of major companies as well as schools and associations of people with disabilities:     &lt;div class=\&quot;perso col-sm-12 col-md-6 col-lg-3\&quot;&gt;     ![](./images/perso1.png)      &lt;a href=\&quot;http://wiki.accede-web.com/en/notices/graphique-ergonomique\&quot; class=\&quot;btn btn-info\&quot;&gt;Accessibility guidelines for graphic design (to ensure &lt;abbr&gt;WCAG&lt;/abbr&gt; 2.1 compliance)&lt;/a&gt; &lt;/div&gt; &lt;div class=\&quot;perso col-sm-12 col-md-6 col-lg-3\&quot;&gt;     ![](./images/perso2.png)         &lt;a href=\&quot;http://wiki.accede-web.com/en/notices/contributeurs\&quot; class=\&quot;btn btn-info\&quot;&gt;Accessibility guidelines for editors (template)&lt;/a&gt; &lt;/div&gt; &lt;div class=\&quot;perso col-sm-12 col-md-6 col-lg-3\&quot;&gt;     ![](./images/perso3.png)       &lt;a href=\&quot;http://wiki.accede-web.com/en/notices/html-css\&quot; class=\&quot;btn btn-info\&quot;&gt;Accessibility guidelines for &lt;abbr&gt;HTML&lt;/abbr&gt; and &lt;abbr&gt;CSS&lt;/abbr&gt; (to ensure &lt;abbr&gt;WCAG&lt;/abbr&gt; 2.1 compliance)&lt;/a&gt; &lt;/div&gt; &lt;div class=\&quot;perso col-sm-12 col-md-6 col-lg-3\&quot;&gt;     ![](./images/perso4.png)       &lt;a href=\&quot;http://wiki.accede-web.com/en/notices/interfaces-riches-javascript\&quot; class=\&quot;btn btn-info\&quot;&gt;Accessibility guidelines for rich interfaces and JavaScript (Use cases to comply with France’s accessibility guidelines)&lt;/a&gt; &lt;/div&gt;         &lt;br&gt;&amp;nbsp; &lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2016  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt;"
});



documentTitles["methodes-outils.html#methods-and-testing-tools"] = "Methods and testing tools";
index.add({
    url: "methodes-outils.html#methods-and-testing-tools",
    title: "Methods and testing tools",    
    body: "# Methods and testing tools  &lt;script&gt;$(document).ready(function () {     setBreadcrumb([{\&quot;label\&quot;:\&quot;Methods and testing tools\&quot;}]); });&lt;/script&gt;  When developing or redesigning sites or applications, accessibility must be evaluated early and throughout the project cycle process to identify accessibility problems early, when it is easier to address them.    Digital accessibility evaluation within Orange is performed with 3 types of testing:  - **Technical evaluation** consists in checking code and colors contrast in order to verify compliance against the criteria of the international standard &lt;abbr&gt;WCAG&lt;/abbr&gt; 2.1 level AA. - **Functional evaluation** verifies the application works with &lt;abbr&gt;assistive technologies&lt;/abbr&gt; and there are no blocking defects. - **User evaluation** evaluates the application by participants with disabilities watching for potential barriers related to accessibility when they complete tasks using their assistive technologies.  "
});

documentTitles["methodes-outils.html#technical-evaluation"] = "Technical evaluation";
index.add({
    url: "methodes-outils.html#technical-evaluation",
    title: "Technical evaluation",    
    body: "## Technical evaluation There are different tools for automatic accessibility testing that help ensure that the web content meets the required standards. However most criteria require human evaluation. These tests are performed within project teams, though manual testing is mostly realized by accessibility experts.  Examples of tools: - [Perform automated tests on a page](./methodes-outils-extensions.html): browser extensions. - [Measure the colour contrast level](./methodes-outils-contrastes.html): introducing the \&quot;Colour Contrast Analyser\&quot; tool.  "
});

documentTitles["methodes-outils.html#functional-evaluation"] = "Functional evaluation";
index.add({
    url: "methodes-outils.html#functional-evaluation",
    title: "Functional evaluation",    
    body: "## Functional evaluation  These tests are usually performed by accessibility experts but can also be realized by projects actors trained to assistive technologies.    Examples of testing: - [Keyboard navigation](./methodes-outils-clavier.html): main shorcuts to navigate web pages with keyboard alone. - [Text size enlargement](./methodes-outils-zoom.html): zoom guide. - [Navigating with screen reader](./methodes-outils-lecteur-ecran.html): screen readers commonly used.  "
});

documentTitles["methodes-outils.html#user-evaluation"] = "User evaluation";
index.add({
    url: "methodes-outils.html#user-evaluation",
    title: "User evaluation",    
    body: "## User evaluation  These tests are performed once the technical and functional tests have confirmed a good level of accessibility. Participants will use their usual environment and assistive technologies to realize the main tasks of the product or service to be tested. Focus on accessibility issues, these tests aim at raising usage problems and assessing the critical importance of remaining problems.    These tests are managed by accessibility experts.  &lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2016  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt;"
});



documentTitles["nos-outils.html#orange-open-source-tools"] = "Orange Open source tools";
index.add({
    url: "nos-outils.html#orange-open-source-tools",
    title: "Orange Open source tools",    
    body: "# Orange Open source tools      &lt;script&gt;$(document).ready(function () {     setBreadcrumb([{\&quot;label\&quot;:\&quot;Orange Open source tools\&quot;}]); });&lt;/script&gt;      Here is our list of open source tools for the web:  - **Orange Boosted:** allows you to create accessible web sites branded with Orange colours. - **Orange Comfort+:** allows you to improve user comfort while browsing your website.  "
});

documentTitles["nos-outils.html#orange-boosted"] = "Orange Boosted";
index.add({
    url: "nos-outils.html#orange-boosted",
    title: "Orange Boosted",    
    body: "## Orange Boosted  "
});

documentTitles["nos-outils.html#presentation"] = "Presentation";
index.add({
    url: "nos-outils.html#presentation",
    title: "Presentation",    
    body: "### Presentation Orange Boosted is an &lt;abbr&gt;HTML&lt;/abbr&gt;, &lt;abbr&gt;CSS&lt;/abbr&gt; and Javascript framework based on the popular framework [Bootstrap](http://getbootstrap.com/). It allows to quickly create a responsive and accessible website branded with the Orange colours.  "
});

documentTitles["nos-outils.html#why-you-should-use-it"] = "Why you should use it?";
index.add({
    url: "nos-outils.html#why-you-should-use-it",
    title: "Why you should use it?",    
    body: "### Why you should use it?  - Based on [Bootstrap](http://getbootstrap.com/)  - Orange branded  - Enhanced with **more accessible** components  - Enriched with specific components we use at Orange  - Example pages  - Open source, &lt;abbr&gt;MIT&lt;/abbr&gt; license  "
});

documentTitles["nos-outils.html#official-site"] = "Official site";
index.add({
    url: "nos-outils.html#official-site",
    title: "Official site",    
    body: "### Official site  [Orange Boosted with Bootstrap](http://boosted.orange.com/)  "
});

documentTitles["nos-outils.html#orange-confort"] = "Orange Confort+";
index.add({
    url: "nos-outils.html#orange-confort",
    title: "Orange Confort+",    
    body: "## Orange Confort+  "
});

documentTitles["nos-outils.html#presentation"] = "Presentation";
index.add({
    url: "nos-outils.html#presentation",
    title: "Presentation",    
    body: "### Presentation The Orange Comfort+ service can adapt the layout of a website to improve comfort during the navigation. It has a wide range of settings that can improve the comfort of all users. It also provides valuable assistance to users with motor, visual or cognitive disabilities.  You can test the service by clicking on the “Comfort+” button at the top right of this page.  "
});

documentTitles["nos-outils.html#its-main-features"] = "Its main features:";
index.add({
    url: "nos-outils.html#its-main-features",
    title: "Its main features:",    
    body: "### Its main features: - Useful for all users - Supports different user disabilities - Works with all websites - Also available as a browser extension - Open source, MIT license  ![screenshot of the Comfort+ service](./images/confort-plus.png)  "
});

documentTitles["nos-outils.html#browser-extensions"] = "Browser Extensions";
index.add({
    url: "nos-outils.html#browser-extensions",
    title: "Browser Extensions",    
    body: "### Browser Extensions - [Firefox](https://addons.mozilla.org/fr/firefox/addon/orange-confort) - [Chrome](https://chrome.google.com/webstore/detail/orange-confort%2B/ddnpdohiipephjpdpohikkamhdikbldp) - [IE11, 64 or 32 bits](http://confort-plus.orange.com/)  "
});

documentTitles["nos-outils.html#official-website"] = "Official website";
index.add({
    url: "nos-outils.html#official-website",
    title: "Official website",    
    body: "### Official website [Orange Comfort+](http://confort-plus.orange.com/)       &lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2016  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt;"
});



documentTitles["label-ledby-describedby.html#abbrariaabbr-attributes-that-can-save-you-aria-label-aria-labelledby-and-aria-describedby"] = "&lt;abbr&gt;ARIA&lt;/abbr&gt; attributes that can save you: `aria-label`, `aria-labelledby` and `aria-describedby`";
index.add({
    url: "label-ledby-describedby.html#abbrariaabbr-attributes-that-can-save-you-aria-label-aria-labelledby-and-aria-describedby",
    title: "&lt;abbr&gt;ARIA&lt;/abbr&gt; attributes that can save you: `aria-label`, `aria-labelledby` and `aria-describedby`",    
    body: "# &lt;abbr&gt;ARIA&lt;/abbr&gt; attributes that can save you: `aria-label`, `aria-labelledby` and `aria-describedby`   &lt;script&gt;$(document).ready(function () {     setBreadcrumb([{\&quot;label\&quot;:\&quot;&lt;abbr&gt;ARIA&lt;/abbr&gt; aria-Label, labelledy and describedby\&quot;}]); });&lt;/script&gt;  "
});

documentTitles["label-ledby-describedby.html#introduction"] = "Introduction";
index.add({
    url: "label-ledby-describedby.html#introduction",
    title: "Introduction",    
    body: "## Introduction "
});

documentTitles["label-ledby-describedby.html#accessible-name-and-description"] = "Accessible name and description";
index.add({
    url: "label-ledby-describedby.html#accessible-name-and-description",
    title: "Accessible name and description",    
    body: "### Accessible name and description  An accessible name is the information that allows assistive technology (&lt;abbr&gt;AT&lt;/abbr&gt;), for example, a screen reader or a magnification program, to identify a given element (&lt;abbr&gt;HTML&lt;/abbr&gt; tag). It can be provided by the title or content of an element, an attribute (for example, an `alt` attribute for an image) or by an associated element (for example, a `label` tag for a `input` field).  An accessible description is more extensive information that is used by the &lt;abbr&gt;AT&lt;/abbr&gt; allowing it to complete the accessible name by specifying and adding meaning where the accessible name is not sufficient.  The accessible name as the accessible description can be visually noticeable or not (link title: visible, alternative image: hidden and usable only by &lt;abbr&gt;AT&lt;/abbr&gt;...)  ###&lt;abbr&gt;ARIA&lt;/abbr&gt; attributes: `aria-label`, `aria-labelledby` and `aria-describedby`  Three &lt;abbr&gt;ARIA&lt;/abbr&gt; attributes are very well supported by browsers and &lt;abbr&gt;AT&lt;/abbr&gt;: `aria-label`, `aria-labelledby` and `aria-describedby`. They allow to add extra information to an &lt;abbr&gt;HTML&lt;/abbr&gt; tag: - `aria-label`, `aria-labelledby` allow to give an accessible name to an element - `aria-describedby` allows to add to the accessible name, if necessary, in addition, an accessible description to an element  However, they only work well with certain elements: - interactive elements: `a` (with `href` attribute), `audio` and `video` (with `controls` attribute), `input` (exept `type=\&quot;hidden\&quot;`), `select`, `button` and `textarea` - `img` and `iframe` elements - elements with an explicit landmark role, therefore, with a `role` attribute or an implicit landmark (a &lt;abbr&gt;HTML5&lt;/abbr&gt; structural tag: `header`, `footer`, `main`, `nav`, `aside` and `section`)  - One of the &lt;a href=\&quot;https://www.w3.org/TR/wai-aria-1.1/#widget_roles\&quot; lang=\&quot;en\&quot; hreflang=\&quot;en\&quot;&gt;&lt;abbr&gt;ARIA&lt;/abbr&gt; widget roles (27 in &lt;abbr&gt;ARIA&lt;/abbr&gt; 1.1)&lt;/a&gt;.  For any other &lt;abbr&gt;HTML&lt;/abbr&gt; element, these three &lt;abbr&gt;ARIA&lt;/abbr&gt; attributes have few or even random support depending on the &lt;abbr&gt;AT&lt;/abr&gt; / browser pair, so do not use as the only way of giving necessary information.  "
});

documentTitles["label-ledby-describedby.html#should-it-be-used-and-hownbsp"] = "Should it be used and how&amp;nbsp;?";
index.add({
    url: "label-ledby-describedby.html#should-it-be-used-and-hownbsp",
    title: "Should it be used and how&amp;nbsp;?",    
    body: "## Should it be used and how&amp;nbsp;?  Yes, we can use these three &lt;abbr&gt;ARIA&lt;/abbr&gt; attributes on the elements with which it works (see above) to pass essential information, specifically to &lt;abbr&gt;AT&lt;/abbr&gt;.  You should know that `aria-label` must contain, as a value, a string of characters that will be the accessible name. While for `aria-labelledby` and `aria-describedby`, the value of this attribute references the `id` of an element of the page whose content will be used as the accessible name of the element.  When using `aria-label` or` aria-labelledby` on an element, the content or title of that element is no longer rendered to &lt;abbr&gt;AT&lt;/abbr&gt; but replaced by the accessible name (for `aria-label` the contents of this attribute, for` aria-labelledby` the contents of the referenced element). Therefore, only the accessible name must give all the necessary information to &lt;abbr&gt;AT&lt;/abbr&gt; and therefore to the user.  When the two attributes `aria-labelledby` and` aria-label` are used, user agents give priority to aria-labelledby when calculating the accessible name property.  At last, `aria-describedby' will add an accessible description in addition to the accessible name of the element.  "
});

documentTitles["label-ledby-describedby.html#examples"] = "Examples";
index.add({
    url: "label-ledby-describedby.html#examples",
    title: "Examples",    
    body: "## Examples  &lt;pre&gt;&lt;code class=\&quot;html\&quot;&gt; &amp;lt;button aria-label=\&quot;Access Hypertext markup language\&quot;&amp;gt;html&amp;lt;/button&amp;gt; &lt;/code&gt;&lt;/pre&gt; Screen reader output: \&quot;Access Hypertext markup language\&quot;  &lt;pre&gt;&lt;code class=\&quot;html\&quot;&gt; &amp;lt;h2 id=\&quot;titre\&quot;&amp;gt;HTML source&amp;lt;h2&amp;gt; &amp;lt;button aria-label=\&quot;Access Hypertext markup language\&quot; aria-labelledby=\&quot;titre\&quot;&amp;gt;html&amp;lt;/buttton&amp;gt; &lt;/code&gt;&lt;/pre&gt; Screen reader output: \&quot;HTML source\&quot;  &lt;pre&gt;&lt;code class=\&quot;html\&quot;&gt; &amp;lt;h3 id=\&quot;titre\&quot;&amp;gt;Login page sourcecode&amp;lt;h3&amp;gt; &amp;lt;button aria-label=\&quot;Access HTML\&quot; aria-describedby=\&quot;titre\&quot;&amp;gt;html&amp;lt;/buttton&amp;gt; &lt;/code&gt;&lt;/pre&gt; Screen reader output: \&quot;Access HTML Login page sourcecode\&quot;  &lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2018  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt;"
});



documentTitles["methodes-outils-contrastes.html#measure-the-colour-contrast-level"] = "Measure the colour contrast level";
index.add({
    url: "methodes-outils-contrastes.html#measure-the-colour-contrast-level",
    title: "Measure the colour contrast level",    
    body: "# Measure the colour contrast level  &lt;script&gt;$(document).ready(function () {     setBreadcrumb([         {\&quot;label\&quot;:\&quot;Test tools\&quot;, \&quot;url\&quot;: \&quot;./methodes-outils.html\&quot;},         {\&quot;label\&quot;:\&quot;Measure the colour contrast level\&quot;}]); });&lt;/script&gt;  &lt;span data-menuitem=\&quot;methodes-outils\&quot;&gt;&lt;/span&gt;  The contrast level can be measured simply by using the [Colour Contrast Analyser tool](http://www.paciellogroup.com/resources/contrastanalyser/).  This tool is available for Mac and Windows. It measures the contrast between two colours (text colour and background colour). You can select them using an eyedropper directly into a web page, image or application.  ![Screenshot of the Colour Contrast Analyser tool](./images/contraste2.png)  &lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2016  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt;"
});



documentTitles["methodes-outils-clavier.html#keyboard-navigation"] = "Keyboard navigation";
index.add({
    url: "methodes-outils-clavier.html#keyboard-navigation",
    title: "Keyboard navigation",    
    body: "# Keyboard navigation  &lt;script&gt;$(document).ready(function () {     setBreadcrumb([         {\&quot;label\&quot;:\&quot;Test tools\&quot;, \&quot;url\&quot;: \&quot;./methodes-outils.html\&quot;},         {\&quot;label\&quot;:\&quot;Keyboard navigation\&quot;}]); });&lt;/script&gt;  &lt;span data-menuitem=\&quot;methodes-outils\&quot;&gt;&lt;/span&gt;  Navigation in a web page should be possible using only the keyboard, particularly for people who cannot use a mouse. This feature is supported directly by the browser. It is important to verify it is operating correctly, as some developments can lead to difficulties to properly navigate the page.    To test if your service is accessible using the keyboard, you can try to navigate without your mouse. All available features must be accessible.   ** Reminder: **the focus must be visible enough on all focusable elements.  "
});

documentTitles["methodes-outils-clavier.html#list-of-keyboard-shortcuts"] = "List of keyboard shortcuts:";
index.add({
    url: "methodes-outils-clavier.html#list-of-keyboard-shortcuts",
    title: "List of keyboard shortcuts:",    
    body: "## List of keyboard shortcuts:  - The &lt;kbd&gt;Tab&lt;/kbd&gt; key: to move the focus. - The &lt;kbd&gt;shift + Tab&lt;/kbd&gt; keys: to move backwards the focus. - The &lt;kbd&gt;Return&lt;/kbd&gt; key to activate the element that has the focus (link, button, menu…). - The &lt;kbd&gt;Spacebar&lt;/kbd&gt; to check / uncheck a checkbox. - The arrow keys to change the selection of the radio buttons, to move in a drop-down list, or to scroll (scrollbar) when available.  ** Note: on Mac, keyboard navigation must be enabled first: **   In Safari: Edit &gt; Preferences… &gt; Advanced   Then check the box *“Press tab to highlight each item on a webpage”*.  &amp;nbsp; &lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2016  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt;"
});



documentTitles["methodes-outils-liste-titres.html#accessing-page-headers-h1-to-h6-tags"] = "Accessing page headers (`H1` to `H6` tags)";
index.add({
    url: "methodes-outils-liste-titres.html#accessing-page-headers-h1-to-h6-tags",
    title: "Accessing page headers (`H1` to `H6` tags)",    
    body: "# Accessing page headers (`H1` to `H6` tags)  &lt;script&gt;$(document).ready(function () {     setBreadcrumb([         {\&quot;label\&quot;:\&quot;Test tools\&quot;, \&quot;url\&quot;: \&quot;./methodes-outils.html\&quot;},         {\&quot;label\&quot;:\&quot;Accessing page headers\&quot;}]); });&lt;/script&gt;  &lt;span data-menuitem=\&quot;methodes-outils\&quot;&gt;&lt;/span&gt;  To check if the headers have been properly positioned on the page, there are several solutions: - Browse the page code source by hand. - Use an extension such as [HeadingsMap](https://addons.mozilla.org/fr/firefox/addon/headingsmap/) for Firefox, [WAVE for Chrome](http://wave.webaim.org/extension/) or [Web Developer Toolbar](http://chrispederick.com/work/web-developer/). - Access the headers list from a screen reader (see the [screen reader](./methodes-outils-lecteur-ecran.html) section).  The last solution is the most reliable, because extensions do not always take into account the CSS and any ARIA attributes positioned on the HTML tags. You can find more information in this article: [Navigation with a screen reader](./methodes-outils-lecteur-ecran.html).  &lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2016  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt;"
});



documentTitles["methodes-outils-lecteur-ecran.html#navigating-with-a-screen-reader"] = "Navigating with a screen reader";
index.add({
    url: "methodes-outils-lecteur-ecran.html#navigating-with-a-screen-reader",
    title: "Navigating with a screen reader",    
    body: "# Navigating with a screen reader  &lt;script&gt;$(document).ready(function () {     setBreadcrumb([         {\&quot;label\&quot;:\&quot;Test tools\&quot;, \&quot;url\&quot;: \&quot;./methodes-outils.html\&quot;},         {\&quot;label\&quot;:\&quot;Navigating with a screen reader\&quot;}]); });&lt;/script&gt;  &lt;span data-menuitem=\&quot;methodes-outils\&quot;&gt;&lt;/span&gt;  A screen reader is a voice synthesis software used by the visually impaired and the blind. It allows the user to interact with the computer and listen to what is displayed as text (usually) on the screen. There are several screen readers, the most prevalent are: - [NVDA](http://nvda-fr.org/): free, available for Windows. - [Jaws](http://www.freedomscientific.com/Downloads/JAWS): commercial, available for Windows. In trial mode, you can only use it for 40 minutes, but if you restart your computer you can use it again. - [VoiceOver](http://www.apple.com/fr/accessibility/osx/voiceover/): free, available for Mac. It is directly integrated into the MacOS system.  "
});

documentTitles["methodes-outils-lecteur-ecran.html#getting-started-with-nvda"] = "Getting started with NVDA";
index.add({
    url: "methodes-outils-lecteur-ecran.html#getting-started-with-nvda",
    title: "Getting started with NVDA",    
    body: "## Getting started with NVDA  NVDA is a free screen reader available for Windows.  "
});

documentTitles["methodes-outils-lecteur-ecran.html#installation"] = "Installation";
index.add({
    url: "methodes-outils-lecteur-ecran.html#installation",
    title: "Installation",    
    body: "### Installation  Download the NVDA installer on the [official website](https://www.nvaccess.org/).  The default voice is not very good but it is very reactive. It is not mandatory, but you can [download extra voices](https://github.com/nvaccess/nvda/wiki/ExtraVoices). Then just go to preferences to change NVDA voice settings.  "
});

documentTitles["methodes-outils-lecteur-ecran.html#configuration"] = "Configuration";
index.add({
    url: "methodes-outils-lecteur-ecran.html#configuration",
    title: "Configuration",    
    body: "### Configuration  At first startup, NVDA is configured to vocalize whatever the mouse pointer is over. This mode is used by visually-impaired people who have difficulties reading the text displayed on the screen, for example. It is recommended to disable this option if you use NVDA to test accessibility on your pages. To disable this navigation mode, right-click on the NVDA icon located in the notification area. Then go to *Preferences&amp;nbsp;&amp;gt; Mouse settings* and uncheck “Enable mouse tracking”.  Finally, it is advisable to change the default playback mode. On a webpage use the following keyboard shortcut &lt;kbd&gt;Ins + v&lt;/kbd&gt; to disable the “screen layout is preserved” option and then save this configuration as default using the shortcut &lt;kbd&gt;Ins + Ctrl + c&lt;/kbd&gt;.  "
});

documentTitles["methodes-outils-lecteur-ecran.html#navigating-web-pages"] = "Navigating web pages";
index.add({
    url: "methodes-outils-lecteur-ecran.html#navigating-web-pages",
    title: "Navigating web pages",    
    body: "### Navigating web pages  The main useful shortcuts to test navigation in a web page using NVDA are: - &lt;kbd&gt;Up&lt;/kbd&gt; and &lt;kbd&gt;down&lt;/kbd&gt; keys to go to the next or the prior line. - &lt;kbd&gt;Left&lt;/kbd&gt; and &lt;kbd&gt;right&lt;/kbd&gt; keys to move forward or backward one character - &lt;kbd&gt;Ctrl + Home&lt;/kbd&gt; to move to the top of the page. - &lt;kbd&gt;Ctrl + End&lt;/kbd&gt; to move to the bottom of the page. - &lt;kbd&gt;Ins + F7&lt;/kbd&gt; to display the heading list and the link list. - &lt;kbd&gt;Ctrl&lt;/kbd&gt; to mute NVDA. - &lt;kbd&gt;Ins + T&lt;/kbd&gt; to read the page title. - &lt;kbd&gt;H&lt;/kbd&gt; and &lt;kbd&gt;shift + H&lt;/kbd&gt; to jump to the next title or the previous title (`H1` to `H6` title tags). - &lt;kbd&gt;B&lt;/kbd&gt; and &lt;kbd&gt;shift + B&lt;/kbd&gt; to move through buttons. - &lt;kbd&gt;C&lt;/kbd&gt; and &lt;kbd&gt;shift + C&lt;/kbd&gt; to move through drop down lists (Combobox). - &lt;kbd&gt;D&lt;/kbd&gt; and &lt;kbd&gt;shift + D&lt;/kbd&gt; to move through ARIA landmarks. - &lt;kbd&gt;E&lt;/kbd&gt; and &lt;kbd&gt;shift + E&lt;/kbd&gt; to move through text fields. - &lt;kbd&gt;F&lt;/kbd&gt; and &lt;kbd&gt;shift + F&lt;/kbd&gt; to move through forms. - &lt;kbd&gt;G&lt;/kbd&gt; and &lt;kbd&gt;shift + G&lt;/kbd&gt; to move through images (Graphics). - &lt;kbd&gt;I&lt;/kbd&gt; and &lt;kbd&gt;shift + I&lt;/kbd&gt; to move through HTML list items. - &lt;kbd&gt;K&lt;/kbd&gt; and &lt;kbd&gt;shift + K&lt;/kbd&gt; to move through links. - &lt;kbd&gt;L&lt;/kbd&gt; and &lt;kbd&gt;shift + L&lt;/kbd&gt; to move through HTML lists. - &lt;kbd&gt;M&lt;/kbd&gt; and &lt;kbd&gt;shift + M&lt;/kbd&gt; to move through frames and iframes. - &lt;kbd&gt;O&lt;/kbd&gt; and &lt;kbd&gt;shift + O&lt;/kbd&gt; to move through embedded objects (flash). Press &lt;kbd&gt;Ins + Space&lt;/kbd&gt; to start interaction. &lt;kbd&gt;Esc&lt;/kbd&gt; to finish interaction. - &lt;kbd&gt;Q&lt;/kbd&gt; and &lt;kbd&gt;shift + Q&lt;/kbd&gt; to move through quotes (blockquote). - &lt;kbd&gt;R&lt;/kbd&gt; and &lt;kbd&gt;shift + R&lt;/kbd&gt; to move through radio buttons. - &lt;kbd&gt;T&lt;/kbd&gt; and &lt;kbd&gt;shift + T&lt;/kbd&gt; to move through tables. - &lt;kbd&gt;X&lt;/kbd&gt; and &lt;kbd&gt;shift + X&lt;/kbd&gt; to move through checkboxes. - &lt;kbd&gt;Spacebar&lt;/kbd&gt; to check or uncheck a checkbox. - &lt;kbd&gt;Ins + shift + S&lt;/kbd&gt; allows to pause NVDA only in the current application. - &lt;kbd&gt;Ins + Q&lt;/kbd&gt; to exit NVDA.  Also note that NVDA has a speech viewer (*Tools&amp;nbsp;&amp;gt; Speech viewer*), it displays everything that is vocalized.  "
});

documentTitles["methodes-outils-lecteur-ecran.html#getting-started-with-jaws"] = "Getting Started with Jaws";
index.add({
    url: "methodes-outils-lecteur-ecran.html#getting-started-with-jaws",
    title: "Getting Started with Jaws",    
    body: "## Getting Started with Jaws  Jaws is a commercial and very famous screen reader, available for Windows. It is used primarily with Internet Explorer. In trial, you can only use it 40 min, but if you restart your computer you can use it again.  "
});

documentTitles["methodes-outils-lecteur-ecran.html#installation"] = "Installation";
index.add({
    url: "methodes-outils-lecteur-ecran.html#installation",
    title: "Installation",    
    body: "### Installation  You can download Jaws directly from [the Freedom Scientific site](http://www.freedomscientific.com/Downloads/JAWS).  "
});

documentTitles["methodes-outils-lecteur-ecran.html#navigating-web-pages"] = "Navigating web pages";
index.add({
    url: "methodes-outils-lecteur-ecran.html#navigating-web-pages",
    title: "Navigating web pages",    
    body: "### Navigating web pages  The most useful shortcuts to test navigation in a Web page with JAWS: - &lt;kbd&gt;Up&lt;/kbd&gt; and &lt;kbd&gt;down&lt;/kbd&gt; keys to go to the next or the prior line. - &lt;kbd&gt;Ins + T&lt;/kbd&gt; to read the page title. - &lt;kbd&gt;Ins + F5&lt;/kbd&gt; to display the form fields list. - &lt;kbd&gt;Ins + F6&lt;/kbd&gt; to display header list. - &lt;kbd&gt;Ins + F7&lt;/kbd&gt; to display link list. - &lt;kbd&gt;Spacebar&lt;/kbd&gt; to check or uncheck a checkbox. - &lt;kbd&gt;Ctrl&lt;/kbd&gt; to mute Jaws.  "
});

documentTitles["methodes-outils-lecteur-ecran.html#getting-started-with-voiceover"] = "Getting Started with VoiceOver";
index.add({
    url: "methodes-outils-lecteur-ecran.html#getting-started-with-voiceover",
    title: "Getting Started with VoiceOver",    
    body: "## Getting Started with VoiceOver  VoiceOver screen reader is only available on Mac. It requires no installation since it is integrated directly into the system. You can activate VoiceOver from *System Preferences&amp;nbsp;&amp;gt; Accessibility*. Or directly using the shortcut &lt;kbd&gt;Command + F5&lt;/kbd&gt;.  "
});

documentTitles["methodes-outils-lecteur-ecran.html#navigating-web-pages"] = "Navigating web pages";
index.add({
    url: "methodes-outils-lecteur-ecran.html#navigating-web-pages",
    title: "Navigating web pages",    
    body: "### Navigating web pages  When launching VoiceOver, it displays an interactive guide to learn the key shortcuts. You should have a look at it. But here are the main shortcuts: - &lt;kbd&gt;Ctrl + Option + Right&lt;/kbd&gt; and &lt;kbd&gt;Ctrl + Option + Left&lt;/kbd&gt; to go to the next or the prior line. - &lt;kbd&gt;Ctrl + Option + U&lt;/kbd&gt; to access the header, link, form field lists... (use the left and right arrows to navigate between lists). - &lt;kbd&gt;Ctrl&lt;/kbd&gt; to mute VoiceOver. - &lt;kbd&gt;Ctrl + Option&lt;/kbd&gt; [Uh-oh, something is missing here, we’ll come back to it, sorry.]  &lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2016  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt;"
});



documentTitles["methodes-outils-extensions.html#browser-extensions"] = "Browser extensions";
index.add({
    url: "methodes-outils-extensions.html#browser-extensions",
    title: "Browser extensions",    
    body: "# Browser extensions  &lt;script&gt;$(document).ready(function () {     setBreadcrumb([         {\&quot;label\&quot;:\&quot;Test tools\&quot;, \&quot;url\&quot;: \&quot;./methodes-outils.html\&quot;},         {\&quot;label\&quot;:\&quot;Browser extensions\&quot;}]); });&lt;/script&gt;  &lt;span data-menuitem=\&quot;methodes-outils\&quot;&gt;&lt;/span&gt;  Some extensions allow you to perform automated tests on the current page.  "
});

documentTitles["methodes-outils-extensions.html#axe-accessibility-audit"] = "aXe accessibility audit";
index.add({
    url: "methodes-outils-extensions.html#axe-accessibility-audit",
    title: "aXe accessibility audit",    
    body: "## aXe accessibility audit [aXe](http://www.deque.com/products/axe/) is an extension available for Chrome and Firefox to perform several tests based on the [WCAG](https://www.w3.org/WAI/intro/wcag).  ![screenshot of the aXe extension](images/aXe.png) &amp;nbsp;  "
});

documentTitles["methodes-outils-extensions.html#wave-toolbar"] = "WAVE Toolbar";
index.add({
    url: "methodes-outils-extensions.html#wave-toolbar",
    title: "WAVE Toolbar",    
    body: "## WAVE Toolbar [WAVE Toolbar](http://wave.webaim.org/extension/) is a toolbar extension for Chrome. It allows to perform several tests on the current page just like aXe. Unlike aXe, which shows errors in a tab of Web Inspector, here the errors are displayed directly on the page. A [bookmarklet (or favelet) for WAVE](http://wave.webaim.org/help) is also available.  ![screenshot of the WAVE Toolbar extension](images/wave.png)  &lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2016  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt;"
});



documentTitles["methodes-outils-zoom.html#text-size-enlargement"] = "Text size enlargement";
index.add({
    url: "methodes-outils-zoom.html#text-size-enlargement",
    title: "Text size enlargement",    
    body: "# Text size enlargement  &lt;script&gt;$(document).ready(function () {     setBreadcrumb([         {\&quot;label\&quot;:\&quot;Test tools\&quot;, \&quot;url\&quot;: \&quot;./methodes-outils.html\&quot;},         {\&quot;label\&quot;:\&quot;Text size enlargement\&quot;}]); });&lt;/script&gt;  &lt;span data-menuitem=\&quot;methodes-outils\&quot;&gt;&lt;/span&gt;  "
});

documentTitles["methodes-outils-zoom.html#how-to-test"] = "How to test?";
index.add({
    url: "methodes-outils-zoom.html#how-to-test",
    title: "How to test?",    
    body: "## How to test?  One of the accessibility requirements is being able to enlarge the text up to 200% —only the text size, not the entire page. Actually when you use the browser default zoom it enlarges the entire page adding vertical and horizontal scrollbars. For example, reading a blog could be very tedious because you would have to scroll all the time to access the content.  Increasing only the text size does not necessarily add a horizontal scrollbar. You must verify that at this zoom level (200%), the text remains readable. No text must be truncated or superposed. Information must be accessible even if the presentation can be somewhat altered.   To enlarge only the text size, tick the “Zoom Text Only” option in Firefox. To enlarge the text by 200% press &lt;kbd&gt;Ctrl +&lt;/kbd&gt; four times.     ![screenshot of the “Zoom text only” option, in Firefox](images/zoom-firefox.png)   "
});

documentTitles["methodes-outils-zoom.html#what-implications-for-development"] = "What implications for development?";
index.add({
    url: "methodes-outils-zoom.html#what-implications-for-development",
    title: "What implications for development?",    
    body: "## What implications for development?  If your page is not displayed correctly when you enlarge the text, it might be because you use the pixel as length unit for text size and container size (height or width of a `div`...). To fix display issues when the zoom is set to 200%, it is not necessary to remove all pixels units from all your code but correct only the unreadable content (replacing `px` by `%`, `em` or `rem`).  ** Example with 100% zoom **   ![screenshot of a page with 100% zoom](images/zoom.png)  &amp;nbsp;  ** Example with 200% zoom and using pixel as length unit**   The height of the elements is not based on the size of the text, they do not expand.  ![screenshot of a page with 200% zoom](images/zoom-ko.png)  &amp;nbsp;    ** Example with 200% zoom and using relative length units(`rem`)**   The height of the elements containing the text has been set with a relative unit which varies depending on the text size (`rem`). The elements become larger, the text remains readable.  ![screenshot of a page with 100% zoom](images/zoom-ok.png)  &amp;nbsp; More information in the **examples** section: [handling zoom, increasing the text size](exemples/zoom/index.html). &amp;nbsp;   &lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2016  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt;"
});



documentTitles["exemples.html#componant-examples"] = "Componant examples";
index.add({
    url: "exemples.html#componant-examples",
    title: "Componant examples",    
    body: "# Componant examples &lt;script&gt;$(document).ready(function () {     setBreadcrumb([{\&quot;label\&quot;:\&quot;Componant examples\&quot;}]); });&lt;/script&gt;  &lt;style&gt;     dt a {text-decoration: underline;}     dd {margin-bottom: 1rem;} &lt;/style&gt;  &lt;dl&gt;     &lt;dt&gt;&lt;a href=\&quot;exemples/masquage/index.html\&quot;&gt;Accessible hiding&lt;/a&gt;&lt;/dt&gt;     &lt;dd&gt;Elements not visible on the screen but accessible to assistive technology.&lt;/dd&gt;     &lt;dt&gt;&lt;a href=\&quot;exemples/formulaire/index.html\&quot;&gt;Handling forms&lt;/a&gt;&lt;/dt&gt;     &lt;dd&gt;Creating accessible forms.&lt;/dd&gt;     &lt;dt&gt;&lt;a href=\&quot;exemples/role-dialog/role-dialog.html\&quot;&gt;Dialog box 1/2&lt;/a&gt;&lt;/dt&gt;     &lt;dd&gt;Example of an accessible dialog (part 1).&lt;/dd&gt;     &lt;dt&gt;&lt;a href=\&quot;exemples/role-dialog2/role-dialog.html\&quot;&gt;Dialog box 2/2&lt;/a&gt;&lt;/dt&gt;     &lt;dd&gt;Example of an accessible dialog (part 2).&lt;/dd&gt;     &lt;dt&gt;&lt;a href=\&quot;exemples/simple-menu/simple-menu.html\&quot;&gt;Dropdown menu&lt;/a&gt;&lt;/dt&gt;     &lt;dd&gt;Create an accessible drop-down menu.&lt;/dd&gt;     &lt;dt&gt;&lt;a href=\&quot;exemples/speak/index.html\&quot;&gt;Make a screen reader speak using Javascript&lt;a&gt;&lt;/dt&gt;     &lt;dd&gt;Sample code to make screen reader speech.&lt;/dd&gt;     &lt;dt&gt;&lt;a href=\&quot;exemples/tag/index.html\&quot;&gt;Create accessible “tags” 1/2&lt;/a&gt;&lt;/dt&gt;     &lt;dd&gt;Sample code to make accessible tags (part 1).&lt;/dd&gt;     &lt;dt&gt;&lt;a href=\&quot;exemples/tag-exemples/index.html\&quot;&gt;Create accessible “tags” 2/2 (examples)&lt;/a&gt;&lt;/dt&gt;     &lt;dd&gt;Sample code to make accessible tags (part 2) examples.&lt;/dd&gt;     &lt;dt&gt;&lt;a href=\&quot;exemples/iframes-techniques/index.html\&quot;&gt;Hidding technical &lt;code&gt;iframes&lt;/code&gt;&lt;/a&gt;&lt;/dt&gt;     &lt;dd&gt;Hidding iframes to assistive technology.&lt;/dd&gt;     &lt;dt&gt;&lt;a href=\&quot;label-ledby-describedby.html\&quot;&gt;&lt;abbr&gt;ARIA&lt;/abbr&gt; attributes that can save you&lt;/a&gt;&lt;/dt&gt;     &lt;dd&gt;Some ARIA attributes to know.&lt;/dd&gt;     &lt;dt&gt;&lt;a href=\&quot;exemples/listbox/index.html\&quot;&gt;&lt;abbr&gt;ARIA&lt;/abbr&gt; lists (listbox) 1/3&lt;/a&gt;&lt;/dt&gt;     &lt;dd&gt;Example of ARIA list (part 1).&lt;/dd&gt;     &lt;dt&gt;&lt;a href=\&quot;exemples/check-listbox/index.html\&quot;&gt;&lt;abbr&gt;ARIA&lt;/abbr&gt; lists (listbox) 2/3 (with checkboxes)&lt;/a&gt;&lt;/dt&gt;     &lt;dd&gt;Example of ARIA list (part 2).&lt;/dd&gt;     &lt;dt&gt;&lt;a href=\&quot;exemples/listbox-pattern-aria/index.html\&quot;&gt;The listbox and &lt;abbr&gt;ARIA&lt;/abbr&gt; patterns 3/3 (keyboard navigation)&lt;/a&gt;&lt;/dt&gt;     &lt;dd&gt;Example of ARIA list (part 3).&lt;/dd&gt;     &lt;dt&gt;&lt;a href=\&quot;exemples/files/index.html\&quot;&gt;File Explorer (cloud)&lt;/a&gt;&lt;/dt&gt;     &lt;dd&gt;Example of accessible file explorer.&lt;/dd&gt;     &lt;dt&gt;&lt;a href=\&quot;exemples/dynFocus/index.html\&quot;&gt;Live regions, dynamic content, handling focus and &lt;abbr&gt;ARIA&lt;/abbr&gt;&lt;/a&gt;&lt;/dt&gt;     &lt;dd&gt;Management of areas that update dynamically in your pages.&lt;/dd&gt; &lt;/dl&gt;  &lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2016  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt;"
});



documentTitles["techniques.html#technical-articles"] = "Technical articles";
index.add({
    url: "techniques.html#technical-articles",
    title: "Technical articles",    
    body: "# Technical articles &lt;script&gt;$(document).ready(function () {     setBreadcrumb([{\&quot;label\&quot;:\&quot;Technical articles\&quot;}]); });&lt;/script&gt;  &lt;style&gt;     dt a {text-decoration: underline;}     dd {margin-bottom: 1rem;} &lt;/style&gt;  &lt;dl&gt;     &lt;dt&gt;&lt;a href=\&quot;captcha.html\&quot;&gt;CAPTCHA Accessibility&lt;/a&gt;&lt;/dt&gt;     &lt;dd&gt;CAPTCHA and accessibility&lt;/dd&gt;     &lt;dt&gt;&lt;a href=\&quot;htmlaria.html\&quot;&gt;HTML 5 and ARIA&lt;/a&gt;&lt;/dt&gt;     &lt;dd&gt;HTML 5 and ARIA introduction&lt;/dd&gt; &lt;/dl&gt;  &lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2016  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt;"
});



documentTitles["htmlaria.html#abbrhtml5abbr-abbrariaabbr"] = "&lt;abbr&gt;HTML5&lt;/abbr&gt; &amp; &lt;abbr&gt;ARIA&lt;/abbr&gt;";
index.add({
    url: "htmlaria.html#abbrhtml5abbr-abbrariaabbr",
    title: "&lt;abbr&gt;HTML5&lt;/abbr&gt; &amp; &lt;abbr&gt;ARIA&lt;/abbr&gt;",    
    body: "# &lt;abbr&gt;HTML5&lt;/abbr&gt; &amp; &lt;abbr&gt;ARIA&lt;/abbr&gt;  &lt;script&gt;$(document).ready(function () {     setBreadcrumb([         {\&quot;label\&quot;:\&quot;Technical articles\&quot;, \&quot;url\&quot;:\&quot;techniques.html\&quot;},         {\&quot;label\&quot;:\&quot;HTML5 &amp; ARIA\&quot;}     ]); });&lt;/script&gt;  "
});

documentTitles["htmlaria.html#introduction"] = "Introduction";
index.add({
    url: "htmlaria.html#introduction",
    title: "Introduction",    
    body: "## Introduction  Web sites are increasingly dynamic (asynchronous loading, dynamic content generation) and interactive (rich interface components: slider, datepicker…). So it is very difficult or impossible to make these components accessible with conventional &lt;abbr&gt;HTML&lt;/abbr&gt;.  Even with the &lt;abbr&gt;HTML5&lt;/abbr&gt; change, we still lack semantics to provide technical aids (screen readers, magnifiying software, …), keyboard navigation is often impossible, complex handling of the keyboard focus is missing and live regions are not notified to the user.  "
});

documentTitles["htmlaria.html#what-is-it"] = "What is it ?";
index.add({
    url: "htmlaria.html#what-is-it",
    title: "What is it ?",    
    body: "## What is it ?  To overcome these limitations, the W3C&amp;nbsp;/ WAI has officially issued a recommendation called &lt;abbr&gt;ARIA&lt;/abbr&gt;, standing for Accessible Rich Internet Applications, and several documents on the use of &lt;abbr&gt;ARIA&lt;/abbr&gt;.  &lt;abbr&gt;ARIA&lt;/abbr&gt; is a semantic wrapper based on the attribute&amp;nbsp;/ value combination used in markup languages such as &lt;abbr&gt;HTML&lt;/abbr&gt;, &lt;abbr&gt;SVG&lt;/abbr&gt;, &lt;abbr&gt;XML&lt;/abbr&gt;, etc. This recommendation consists of roles, states and properties that will specifically interact with assistive technologies (&lt;abbr&gt;AT&lt;/abbr&gt;). With &lt;abbr&gt;ARIA&lt;/abbr&gt;, one can describe elements and behaviours with simple HTML when they do not exist natively, for example tabs, drop-downs, live regions, tooltips, modal windows, etc. &lt;abbr&gt;ARIA&lt;/abbr&gt; also defines how an interface component has to behave with the keyboard in order to standardize the user experience with keyboard navigation. **&lt;abbr&gt;ARIA&lt;/abbr&gt; makes sense and delivers its full potential when used with &lt;abbr&gt;HTML5&lt;/abbr&gt;**.  &lt;abbr&gt;ARIA&lt;/abbr&gt; does not add any particular behaviour or any style to &lt;abbr&gt;UI&lt;/abbr&gt; components as it is only descriptive. So always make sure presentation is done through &lt;abbr&gt;CSS&lt;/abbr&gt;, content control and interaction via Javascript.  "
});

documentTitles["htmlaria.html#support"] = "Support";
index.add({
    url: "htmlaria.html#support",
    title: "Support",    
    body: "## Support  &lt;abbr&gt;ARIA&lt;/abbr&gt; support improves quickly and is already supported : - in modern browsers (Firefox &gt;=3.0, Chrome &gt;=16, Safari &gt;=4, Opera 9.5&gt;=, Internet Explorer 8 for a basic support, Internet Explorer &gt;=9 and Edge for advanced support); - in assistive technologies (&lt;abbr&gt;NVDA&lt;/abbr&gt; &gt;=2010, Orca &gt;=2 + Firefox only, VoiceOver &lt;abbr&gt;OSX&lt;/abbr&gt; &gt;=10.5, iOS &gt;=4, JAWS &gt;=8, Window-Eyes &gt;=7, ZoomText 10 for a basic support, ZoomText &gt;=11 for advanced support).   Moreover, the optimal efficiency of the &lt;abbr&gt;ARIA&lt;/abbr&gt; compatibility depends heavily on the browser/assistive technology combination: Firefox with &lt;abbr&gt;NVDA&lt;/abbr&gt;, Jaws with Internet Explorer or Safari with VoiceOver, for example.  "
});

documentTitles["htmlaria.html#should-we-use-it"] = "Should we use it?";
index.add({
    url: "htmlaria.html#should-we-use-it",
    title: "Should we use it?",    
    body: "## Should we use it?  &lt;abbr&gt;ARIA&lt;/abbr&gt; improves the accessibility of components that are not natively available in HTML (or inaccessible &lt;abbr&gt;HTML5&lt;/abbr&gt; components). &lt;abbr&gt;ARIA&lt;/abbr&gt;’s robustness and interoperability is rather complacent, [twenty &lt;abbr&gt;WCAG&lt;/abbr&gt; 2.1 techniques are specific to &lt;abbr&gt;ARIA&lt;/abbr&gt;](https://www.w3.org/WAI/GL/WCAG20-TECHS/aria.html) (10 are &lt;abbr&gt;HTML5&lt;/abbr&gt; techniques). Therefore, for rich Internet applications, &lt;abbr&gt;ARIA&lt;/abbr&gt; is essential for accessibility implementation.  In all cases, you have to test developments in the target environments (browser/assistive technology combinations). This is a tough task, but absolutely necessary for complex cases because on a web site or a traditional web application, you must, at least, test with Safari/VoiceOver, Internet Explorer/Jaws and Firefox/&lt;abbr&gt;NVDA&lt;/abbr&gt;.  In a well-defined environment (e.g. intranet), target environments are known and in a finite number, so it gets easier!  "
});

documentTitles["htmlaria.html#webography"] = "Webography";
index.add({
    url: "htmlaria.html#webography",
    title: "Webography",    
    body: "## Webography * W3C:   * [&lt;abbr&gt;ARIA&lt;/abbr&gt; specification](http://www.w3.org/TR/wai-aria/)   * [&lt;abbr&gt;ARIA&lt;/abbr&gt; implementation](http://www.w3.org/TR/wai-aria-practices/) (be careful as it’s a “working draft”)   * [Use &lt;abbr&gt;ARIA&lt;/abbr&gt; HTML (5)](http://www.w3.org/TR/aria-in-html/) (be careful as it’s a “working draft”)   * [&lt;abbr&gt;ARIA&lt;/abbr&gt; techniques in &lt;abbr&gt;WCAG&lt;/abbr&gt; 2](https://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/aria.html) * [Introduction to &lt;abbr&gt;ARIA&lt;/abbr&gt; by Site Point](http://www.sitepoint.com/introduction-wai-aria/) * [Introduction and link list to &lt;abbr&gt;ARIA&lt;/abbr&gt; sources](http://developer.mozilla.org/fr/docs/Accessibilit%C3%A9/ARIA)  &lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2016  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt;"
});



documentTitles["about.html#about"] = "About";
index.add({
    url: "about.html#about",
    title: "About",    
    body: "# About     &lt;script&gt;$(document).ready(function () {     setBreadcrumb([{\&quot;label\&quot;:\&quot;About\&quot;}]); });&lt;/script&gt;  Documentation under the [CC BY SA 3.0 license](https://github.com/Orange-OpenSource/a11y-guidelines/blob/master/LICENSE), source code of this site and examples are available [on github](https://github.com/Orange-OpenSource/a11y-guidelines).    The Orange logo and some images or screenshots are the property of Orange:  Copyright (C) 2016 Orange SA All rights reserved   [List of the concerned files](/NOTICE.txt)  "
});

documentTitles["about.html#contact"] = "Contact";
index.add({
    url: "about.html#contact",
    title: "Contact",    
    body: "# Contact  Have a bug or a feature request?    Please first check [the issues](https://github.com/Orange-OpenSource/a11y-guidelines/issues) and search for existing and closed issues. If your problem or idea is not addressed yet, please [open a new issue](https://github.com/Orange-OpenSource/a11y-guidelines/issues/new).  "
});

documentTitles["about.html#cookie-management"] = "Cookie management";
index.add({
    url: "about.html#cookie-management",
    title: "Cookie management",    
    body: "## Cookie management  You can change your preferences at any time directly from the &lt;a role=\&quot;button\&quot; href=\&quot;javascript:tarteaucitron.userInterface.openPanel();\&quot;&gt;Cookie Management Panel&lt;/a&gt;.  &amp;nbsp; &lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2016  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt;"
});


