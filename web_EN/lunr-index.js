
var index = lunr(function () {
    this.field('body');
    this.ref('url');
});

var documentTitles = {};



documentTitles["index.html#orange-web-accessibility-guidelines"] = "Orange web accessibility guidelines";
index.add({
    url: "index.html#orange-web-accessibility-guidelines",
    title: "Orange web accessibility guidelines",    
    body: "# Orange web accessibility guidelines    &lt;script&gt;$(document).ready(function () {     setBreadcrumb([{\&quot;label\&quot;:\&quot;Presentation\&quot;}]); });&lt;/script&gt;  *** The accessibility, a benefit for all, a need for some! ***  "
});

documentTitles["index.html#web-accessibility-definition"] = "Web accessibility definition";
index.add({
    url: "index.html#web-accessibility-definition",
    title: "Web accessibility definition",    
    body: "## Web accessibility definition ** It is a web service usable by everyone **  - Healthy person - Elderly people - People with disabilities (temporary or permanent)  ** and in all situations **  - With any kind of material: web browser, PC, MAC, mobile phones, tablet - In an unfavorable environment: poor luminosity, touchpad while moving, etc. - With specific software that compensate the handicap    "
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
    body: "### Essential criteria List of the most important criteria according to your profile, based on a subset of the recommendations WCAG 2.0 level AA. A good way to be aware of the main criteria and commit progressively in accessibility.    "
});

documentTitles["index.html#list-of-the-requirements"] = "List of the requirements";
index.add({
    url: "index.html#list-of-the-requirements",
    title: "List of the requirements",    
    body: "### List of the requirements Section for developers. Everything you need to know to code accessible pages and to perform the tests to validate developments.  "
});

documentTitles["index.html#methods-and-testing-tools"] = "Methods and testing tools";
index.add({
    url: "index.html#methods-and-testing-tools",
    title: "Methods and testing tools",    
    body: "### Methods and testing tools For those who want to check the accessibility of their websites more or less automatically with tools. Finally, all the technical and methodological tools to review its pages.  "
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
    body: "### Examples Didactic examples for certain types of components or elements of the user interface particularly difficult to make accessible and frequently used. Everything is explained, just go ahead!  These examples use the [boosted](http://boosted.orange.com/) library. The latter is based on [bootstrap](http://getbootstrap.com/) and let you create and test quickly the accessibility and responsiveness of a website. This library is branded with the Orange colors.  &amp;nbsp; &lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2016  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt;"
});



documentTitles["fondamentaux.html#essential-criteria"] = "Essential criteria";
index.add({
    url: "fondamentaux.html#essential-criteria",
    title: "Essential criteria",    
    body: "# Essential criteria  &lt;script&gt;$(document).ready(function () {     setBreadcrumb([{\&quot;label\&quot;:\&quot;Essential criteria\&quot;}]);     addSubMenu([         {\&quot;label\&quot;:\&quot;For designers\&quot;,\&quot;url\&quot;:\&quot;fondamentaux-nontech.html\&quot;},          {\&quot;label\&quot;:\&quot;For developers\&quot;,\&quot;url\&quot;:\&quot;fondamentaux-tech.html\&quot;}     ]);     });&lt;/script&gt;  &lt;span data-menuitem=\&quot;fondamentaux\&quot;&gt;&lt;/span&gt; This base criteria for the Orange websites and applications avoids the major accessibility errors. It is a subset of the accessibility requirements.    Its implementation does not give you the guarantee to be 100% accessible, but is a clean bedrock so you can engage in a progressive accessibility implementation process.  Following the Orange guidelines (Design for digital platforms Guideline), available on the [Orange brand site](http://brand.orange.com/) is a prerequisite to the use of this base criteria.  Some elements already present in the Orange Brand (such as the use of colors, text alignment...) have not been included in this list of criteria.  Two versions are available: - **The first version** does not mention the code, it is aimed at product designers, designers, project managers, etc. - **The second version** mentions the code and is aimed at developers, technical managers, validation teams, testers, etc.  &lt;div class=\&quot;perso col-xs-12 col-md-6 col-lg-4\&quot;&gt;     &lt;h2 class=\&quot;sr-only\&quot;&gt;For the product designers, designers, project managers&lt;/h2&gt;               &lt;a href=\&quot;./fondamentaux-nontech.html\&quot; class=\&quot;btn btn-info\&quot;&gt;         ![](./images/perso1.png)         &lt;div&gt;Essential criteria for designers&lt;/div&gt;     &lt;/a&gt; &lt;/div&gt; &lt;div class=\&quot;perso col-xs-12 col-md-6 col-lg-4\&quot;&gt;     &lt;h2 class=\&quot;sr-only\&quot;&gt;For the developers&lt;/h2&gt;               &lt;a href=\&quot;./fondamentaux-tech.html\&quot; class=\&quot;btn btn-info\&quot;&gt;         ![](./images/perso3.png)         &lt;div&gt;Essential criteria for the developers&lt;/div&gt;     &lt;/a&gt; &lt;/div&gt;              &lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2016  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt;"
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
    body: "## 1. Set a title for each page    **Target : ** everyone and especially people with visual disabilities.   **When: ** starting at conception and during development.  **Description:**    Set each page a title that is specific to it and which reflects its content or function  (`&lt;title&gt;` tag).   The page title is the first element read by the speech synthesis, it must help to formally identify the page where you are.  **Checklist: ** - Even if there is no rule, in general (opening many tabs in multiple applications), we go from the most specific information to the least specific (e.g. title of the current page - name of the site). For windowing a multitude of application, the approach is different, in this case we will prefer going from the least specific information to the most specific (e.g. name of the site - title of the current page). - When the content of the page is dynamic (displaying the result of a search, errors in a form, user adding content...), the title of the page should reflect this change.  **Users' goal: **   Allow users to identify the topic of a page, find and get a clear idea of the content of the page without having to read it. It is especially the first element vocalized by a screen reader.  **Do:**   `&lt;title&gt;Home - Corporate web site of Orange&lt;/title&gt;`   **Don't:**   `&lt;title&gt;Home&lt;/title&gt;`  **Reference: ** WCAG 2.4.2  "
});

documentTitles["fondamentaux-tech.html#2-set-a-title-to-headings"] = "2. Set a title to headings";
index.add({
    url: "fondamentaux-tech.html#2-set-a-title-to-headings",
    title: "2. Set a title to headings",    
    body: "## 2. Set a title to headings  **Target : ** everyone and especially people with cognitive limitations, reading difficulties and visual disabilities.   **When: ** from design, during content writing and development.  **Description:**   One must identify the title tags to use (`h1` to `h6` HTML tags) to structure the content of the pages. The visually impaired people browsing with a screen reader can access the list of titles of the page to navigate quickly.  Just like in a Word document, it is possible to use the table of contents only if the titles tags have been set properly within the document.    **Checklist: **  - The titles must be relevant, reflect the structure of the information contained in the page. - There must be no break in the heading hierarchy (we cannot jump from a `h2` title to a `h4` title). - You can use several `h1` titles per page (don't exceed two in most cases). - Hidden tags are dismissed by screen readers (`visibility: hidden;`, `display: none;`or `aria-hidden`). - The dynamically generated content must also meet this requirement.  **Goal: **  - For all users: improve the structure of the page and its contents. - For search engines: improve SEO. - For users with visual disabilities, cognitive limitations or reading difficulties: easy navigation and access to content.  **Do:**        Page with consistent and relevant titles:  `&lt;h1&gt;Home - Orange&lt;/h1&gt;`  `&lt;h2&gt;News&lt;/h2&gt;`  `&lt;h2&gt;Fiber broadband is coming!&lt;/h2&gt;`  `&lt;h3&gt;Check eligibility&lt;/h3&gt;`  **Don't: ** Page with a break in the heading hierarchy h2-&gt;h4:  `&lt;h1&gt;Home - Orange&lt;/h1&gt;`  `&lt;h2&gt;News&lt;/h2&gt;`  `&lt;h2&gt;Fiber broadband is coming!&lt;/h2&gt;`  `&lt;h4&gt;Check eligibility&lt;/h4&gt;`       **Reference:** WCAG 1.3.1  "
});

documentTitles["fondamentaux-tech.html#3-provide-enough-contrast-between-text-and-background"] = "3. Provide enough contrast between text and background";
index.add({
    url: "fondamentaux-tech.html#3-provide-enough-contrast-between-text-and-background",
    title: "3. Provide enough contrast between text and background",    
    body: "## 3. Provide enough contrast between text and background  **Target : ** everyone, especially the mobile and tablet users, people with visual impairments, experiencing reading or attention difficulties and elderly people.    **When: ** from design and during development.  **Description: **   The contrast between the text and its background should be high enough. Insufficient contrast level will have detrimental impact on users with visual difficulties and for mobile and tablets users in a very bright environment.  **Don't: **   The label \&quot;film | 8:40 PM ...\&quot; does not have enough contrast. It will not be readable by all users.    ![screenshot showing text with poor contrast](images/contraste.png)  **Checklist: **  - The contrast between the color of the background and the text must be at least 4.5:1 and this must also be applied for text on an image carrying information. - For applications used primarily in mobile web or in mobility, the contrast level of the main elements must be 7:1 in order to ensure a good readability for all. - Links should be easily identifiable from to the rest of the text.  **Users' goal: **  Ease of reading for all users especially the visually impaired, or people in a very bright environment (outdoors).  **Tool: **   The [color contrast analyzer](http://www.paciellogroup.com/resources/contrastanalyser/) application can quickly measure color contrast levels (free for Windows and Mac).    **Reference:** WCAG 1.4.3  "
});

documentTitles["fondamentaux-tech.html#4-do-not-use-color-or-sensory-characteristics-as-the-unique-source-of-information"] = "4. Do not use color or sensory characteristics as the unique source of information";
index.add({
    url: "fondamentaux-tech.html#4-do-not-use-color-or-sensory-characteristics-as-the-unique-source-of-information",
    title: "4. Do not use color or sensory characteristics as the unique source of information",    
    body: "## 4. Do not use color or sensory characteristics as the unique source of information  **Target : ** everyone, especially the colorblind and more generally people with visual impairments, cognitive limitations, hearing impairments and elderly people.   **When: ** from design and during development.  **Description: **   Do not use color or sensory characteristics (shape, size, sound, direction, visual localization ...) as the only way of conveying information, indicating an action, requesting a response or distinguishing an element. The information provided by a color change or a sensory characteristic must be completed with textual information (alternative) or / and semantic structuring.  **Example:**       For a pie chart, where each part is colored differently, you could add different pattern fills to identify them without color.   **Do: **   ![illustration using colored icons to convey information](images/couleur-ok.png)  **Don't: **   ![illustration using colored icons to convey information](images/couleur-ko.png)    This example is not valid because the information is conveyed only by color.  **Checklist: ** - Take a screenshot and convert it in black and white. The loss of color should not cause difficulty while navigating, nor cause loss of information. - Turn off the speakers, the level of information should remain the same.  **Users' goal: **  Allow users not distinguishing colors or sensory information (colorblind, visually impaired, hearing impaired, mobile users in bright environment or in noisy environments ...), access the same information by other means.  **Reference:** WCAG 1.4.1  "
});

documentTitles["fondamentaux-tech.html#5-use-lists"] = "5. Use lists";
index.add({
    url: "fondamentaux-tech.html#5-use-lists",
    title: "5. Use lists",    
    body: "## 5. Use lists  **Target : ** everyone and especially people with visual impairments and cognitive limitations.   **When: ** from design and during content writing.  **Description: **   Pages, if required, must contain semantically relevant lists.  Add semantics to the HTML content using the following tags:  - `ol` for ordered lists  - `ul` for unordered lists  - `li` for list items  **Checklist: **  - There must be no empty list. - There must be no list with a single element (because this is not a list, unless this list is generated dynamically!).  **Users' goal: **  Using lists allows users to identify, consolidate and display sequentially elements of the same kind.  **Technical goal: **   Requires coherent structuring of the content by the creator of the site.  **Reference: ** WCAG 1.3.1  "
});

documentTitles["fondamentaux-tech.html#6-decoupling-content-from-interaction-and-presentation"] = "6. Decoupling content from interaction and presentation";
index.add({
    url: "fondamentaux-tech.html#6-decoupling-content-from-interaction-and-presentation",
    title: "6. Decoupling content from interaction and presentation",    
    body: "## 6. Decoupling content from interaction and presentation  **Target : ** everyone, especially people with visual disabilities, reading or attention difficulties.   **When: ** during development.  **Description: **  Strictly decouple the content (HTML), the interaction (Javascript) and presentation (CSS).   **Checklist: **  - Do not use Tables to design the page layout, the latter should be used only for tabular data.  - Avoid using images to display text, prefer CSS skins. - Use CSS classes rather than manipulate inline CSS styles in HTML. - Do not use CSS pseudo-elements (::before, ::after...) to display information (or provide an alternative for screen readers especially). - Do not write Javascript events directly inside the HTML, use a separate script or JS file instead.  **Users' goal: **  Allow users, via their User Agent or tool assistance (e.g. their browser) to change the visual appearance of the page (zoom, color, position...). For example, being able to increase the text size without display problems.  **Technical goal: **  Improves maintainability.  **Reference:** WCAG 1.3.1, 1.4.5  "
});

documentTitles["fondamentaux-tech.html#7-code-validation"] = "7. Code validation";
index.add({
    url: "fondamentaux-tech.html#7-code-validation",
    title: "7. Code validation",    
    body: "## 7. Code validation  **Target : ** everyone.   **When: ** during and at the end of development.  **Description: **    The source code of the page must have a valid HTML.  **Checklist **  In the HTML code, ensure that: - Elements must have opening and closing tags - Elements can be nested  according to their specifications - Elements cannot contain duplicate attributes - Each ID must be unique  **Users' goal: **   The validation errors can be used to prevent the user to access some content.   **Technical goal: **   - Ensuring HTML interoperability and maintainability. - Increase the compatibility with assistive technologies.  **Reference:** WCAG 4.1.1    **Tool: ** [HTML CSS Validation Service](https://validator.w3.org/)  "
});

documentTitles["fondamentaux-tech.html#8-declaring-the-main-language-and-language-changes"] = "8. Declaring the main language and language changes";
index.add({
    url: "fondamentaux-tech.html#8-declaring-the-main-language-and-language-changes",
    title: "8. Declaring the main language and language changes",    
    body: "## 8. Declaring the main language and language changes   **Target : ** everyone particularly people with visual impairments.   **When: ** during development.  **Description: **    Specify the primary language of the document with the attribute `lang` and / or` xml:lang` in the `html` tag. Also specify the language of a content in a language other than the primary one, using the `lang` and / or `xml:lang` in the html element containing the foreign language text.    **Checklist: **  For words or phrases in foreign language used as generic terms (Google, newsletter ...) or proper names, do not indicate a change of language.  **Users's goal: **  This attribute allows you to specify the language to the speech synthesis.  **Technical goal: **   Enable search engines to identify the language of a page to improve the natural referencing.    **Example for a page in French:**    - using HTML: `&lt;html lang=\&quot;fr\&quot;&gt;` - using XHTML: `&lt;html xmlns=\&quot;http://www.w3.org/1999/xhtml\&quot; xml:lang=\&quot;fr\&quot; lang=\&quot;fr\&quot;&gt;`  **Example of language change: **   `découvrir Orange &lt;span lang=\&quot;en\&quot;&gt;live&lt;/span&gt; TV`  **Reference: ** WCAG 3.1.1, 3.1.2  "
});

documentTitles["fondamentaux-tech.html#9-associate-a-relevant-label-to-form-fields"] = "9. Associate a relevant label to form fields";
index.add({
    url: "fondamentaux-tech.html#9-associate-a-relevant-label-to-form-fields",
    title: "9. Associate a relevant label to form fields",    
    body: "## 9. Associate a relevant label to form fields  **Target : ** everyone and especially people with visual impairments, cognitive limitations, experiencing attention difficulties and mobile and tablet users.   **When: ** during design and development.  **Description: **    Each form input must be associated with a label identifying the function of the field, the type of data and the expected format.   This label should be visually close to the field so we can easily link them (especially for people using zoom or software magnifier or even mobile users).  Each label must be set in a `label` tag, which is associated to the form field with a` for` attribute, using the `id` field.  In some cases, it seems unnecessary to associate a label to a form field (e.g. search field with a magnifying glass button next to it). In such case you can provide a hidden label (using &lt;a href=\&quot;./exemples/masquage/index.html\&quot;&gt;accessible hiding&lt;/a&gt;), it will not be displayed on the screen but it will be associated with the form field programmatically so screen readers can vocalize it. The `title` attribute set on a form field tags can also be used like a label, such as the `aria-aria-label` and `aria-labelledby` attributes preferably in this order.  **Checklist: **  For any form element, the label should be visually close to the field it identifies.  For radio and check box buttons, in addition to the label tag you can use other tags (`title`, `aria-labelledby`, `aria-label` or `fieldset` and `legend`). For required fields, this should be specified in the label using an image, a text symbol (`*` for example) or text and / or the `aria-required` property.  **Users' goal: **  Not meeting this requirement is a blocking point for all users using speech synthesis. For mobile users and motor deficient it allows to click on the form elements more easily.  **Do: **   ![screenshot of a valid form](images/formulaire.png)    &amp;nbsp;  **Don't: **   ![screenshot of a form with a missing label](images/formulaire2.png)  &amp;nbsp;    **Example of an accessible form: **    See [the example of an accessible form](./exemples/formulaire/index.html) for more details.  **Reference: **WCAG 3.3.2  "
});

documentTitles["fondamentaux-tech.html#10-detect-identify-errors-and-suggest-corrections"] = "10. Detect, identify errors and suggest corrections";
index.add({
    url: "fondamentaux-tech.html#10-detect-identify-errors-and-suggest-corrections",
    title: "10. Detect, identify errors and suggest corrections",    
    body: "## 10. Detect, identify errors and suggest corrections  **Target : ** everyone and particularly people with visual impairments, cognitive limitations, reading or attention difficulties and elderly people.   **When: ** from design and during development.  **Description: **   The errors are automatically detected, the user is warned by a page title change, the error of the form field is clearly identified and the error is described with words to the user. If necessary, a correction is suggested.  Finally, the wording of the error messages should be explicit.  **Checklist: **  Identifying the invalid field, as well as displaying a suggestion of correction can be dynamically added to the `label` tag, but also to the `title` tag or `aria-label` and `aria-labelledby` tags depending on the needs.  **Users' goal: **  Guide users when errors happen to improve the understanding and help them correct the errors, especially for internet beginners, elderly people and cognitively deficient.  **Do: **   ![screenshot of a form that displays relevant error messages](images/formulaire-ok.png)    **Don't: **   ![screenshot of a form displaying irrelevant error messages](images/formulaire-ko.png)  &amp;nbsp;   **Example of an accessible form: **    See [the accessible form example](./exemples/formulaire/index.html) for more details.  **Reference: **WCAG 3.3.1, 3.3.3  "
});

documentTitles["fondamentaux-tech.html#11-set-a-text-alternatives-for-images"] = "11. Set a text alternatives for images";
index.add({
    url: "fondamentaux-tech.html#11-set-a-text-alternatives-for-images",
    title: "11. Set a text alternatives for images",    
    body: "## 11. Set a text alternatives for images  **Target : ** everyone and especially people with visual impairments, and cognitive limitations.   **When: ** from design and during development.  **Description: **   All `img` tags should have an `alt` attribute with a relevant description:  - For clickable images: specify the function / link target in the `alt` attribute, - For images carrying information: add an `alt` attribute describing the information contained in the image - For images containing text: add an `alt` attribute containing at least the text from the image, - For decorative images: add an empty `alt` attribute, - For images having `alt` attributes text too long (diagrams, graphs...), add a describing text close to the image, or add a link pointing to a html page with the description.  **Checklist: **  Each `img` tag must have an `alt` attribute. For images not carrying information, set them as background images preferably (CSS).  For graphs, you can add a link under it to access the data table (revealing it in the same page or in a different page).  **Users' goal: **  Access the information included in images for users who cannot access it. Blocking point: an image without textual description is unusable by people with visual impairments or those that cannot display images (mobile, low bandwidth...).  **Technical goal: **  Improve the natural referencing.  **Valid example:**       `&lt;a href=\&quot;./home\&quot;&gt;&lt;img src=\&quot;logo_orange.jpg\&quot; alt=\&quot;back to home\&quot;&gt;&lt;/a&gt;`         `&lt;img src=\&quot;banner_bouquet_famille.png\&quot; alt=\&quot;Good deal, family max plan 2 euros per month for 12 months instead of 16 euros.\&quot;&gt;`  **Example with an empty alternative:**   In the example below, the right picto doesn't have to be vocalized as the text on the left already provides the information.   In this case setting the `alt` attribute would provide a redundant information.    ![example with empty alternative](./images/service-24.png)      `&lt;h3&gt;guaranteed 24h service&lt;/h3&gt;`   `&lt;img src=\&quot;service-24.png\&quot; alt=\&quot;\&quot;&gt;`    **Note about CAPTCHA :**   Captcha are often source of problems for users. If the implementation of an anti-spam system can not be avoided, it is desirable to move towards a more flexible solution for the user :  - Hidden input form left empty (honeypot technique), not visible to the user.  - Logical test (question whose answer is obvious, simple math test ...).  - Double authentication.  If the presence of a captcha can not be avoided, it is essential to provide an audio alternative. Furthermore the `alt` attribute of the captcha image must be setted (eg `alt = \&quot;CAPTCHA\&quot;`).  **Reference: **WCAG 1.1.1  "
});

documentTitles["fondamentaux-tech.html#12-provide-a-transcript-for-any-audio-or-video"] = "12. Provide a transcript for any audio or video";
index.add({
    url: "fondamentaux-tech.html#12-provide-a-transcript-for-any-audio-or-video",
    title: "12. Provide a transcript for any audio or video",    
    body: "## 12. Provide a transcript for any audio or video  **Target : ** everyone and particularly people with visual disabilities, hearing impairments, cognitive limitations, or difficulties with French.   **When: ** during design and development.  **Description: **   Provide for any audio or video carrying information, a complete transcript in the page itself or through a link next to it.  **Checklist: **  A full transcript is a transcript containing all the visual and hearing information that is relevant.   **Users' goal: **  Provide access to visual and hearing information for people who cannot access it: visually impaired, blind, deaf, cognitively deficient, computer without speakers, noisy or bright environment.  **Technical goal: **  Allow audio and video referencing.  **Reference: **WCAG 1.2.3  "
});

documentTitles["fondamentaux-tech.html#13-structuring-data-tables"] = "13. Structuring data tables";
index.add({
    url: "fondamentaux-tech.html#13-structuring-data-tables",
    title: "13. Structuring data tables",    
    body: "## 13. Structuring data tables  **Target : ** everyone, particularly people with visual disabilities.   **When: ** from design and during development.  **Description: **  For tabular data: - Use the `table` element with `th`(for table headers), `td`,` tr` children elements. - Use the `scope` attribute with row / col to associate header cells and data cells. For complex tables, use the` id` and `headers` attributes. - Use the `caption` tag, a `h1` to `h6` tag just before the table or use a text near the table via an `aria-labelledby` in the `table` element to associate a title to the table. - Add the `summary` attribute to the `table` tag to explain the structure in the case of a complex table. Keep in mind that this attribute is deprecated in HTML5, therefore it can be necessary to add the `summary` in the table title.  **Checklist: **  - Reminder: Do not use tables for page layout purposes.  - The caption (`caption`) can be replaced by a section title (`hx`) located before the table. `summary`, meanwhile, is only needed for complex tables. - Prefer splitting a complex table into several simpler tables. - Add a summary (`summary` attribute) in the table to explain the structure in the case of a complex table. - The `tbody`, `tfoot` and `thead` tags have no influence on accessibility, hence, there is no obligation to use them.  **Users' goal: **  Giving a summary and title for data tables allows everyone to know quickly its purpose without having to read it. For visually impaired users, binding cells to headers allows them to know where they are situated and understand the data in it.  **Technical goal: **  Improve natural referencing.  **Reference:** WCAG 1.3.1  "
});

documentTitles["fondamentaux-tech.html#14-use-relative-size-to-allow-changing-text-size"] = "14. Use relative size to allow changing text size";
index.add({
    url: "fondamentaux-tech.html#14-use-relative-size-to-allow-changing-text-size",
    title: "14. Use relative size to allow changing text size",    
    body: "## 14. Use relative size to allow changing text size  **Target : ** everyone and especially people with visual impairments, using a device outdoors and elderly people.   **When: ** during development.  **Description: **  Use relative length units for font size (em, rem, %) and for containers handling text size enlargement up to 200%.  **Checklist: **  - Do not use pixel (px) for size that must adapt if we increase the text size. - Form fields must also have relative sizes to enlarge properly. - Try to make the container adaptive so they can increase in size when the text is zoomed in. - In Firefox, go to View&gt;Zoom and check Zoom text only, set the zoom to 200%. Verify that there is no loss of information (disappearance or overlapping text). ![screenshot Zoom settings In Firefox](./images/zoom-200.png)  **Users' goal: **  Allow users (visually impaired, using a device outdoors, elderly people...) to increase the font size so they can access easily the information.  **Example:**   See the example [handling zoom, increasing the text size](./exemples/zoom/index.html) for more details.  **Reference:** WCAG 1.4.4  "
});

documentTitles["fondamentaux-tech.html#15-link-label-must-be-understandable-ouf-of-context"] = "15. Link label must be understandable ouf of context";
index.add({
    url: "fondamentaux-tech.html#15-link-label-must-be-understandable-ouf-of-context",
    title: "15. Link label must be understandable ouf of context",    
    body: "## 15. Link label must be understandable ouf of context  **Target : ** everyone, especially people with visual impairments, cognitive limitations or attention difficulties.   **When: ** from design and during development.  **Description: **  Make the link labels understandable without the context for all users and, in particular, the visually impaired. During the navigation with a screen reader, it should be possible to access the links list of the page to navigate quickly. If your page contains several \&quot;learn more\&quot; links, it will be impossible to differentiate from each other.    If it is not possible to make a link more explicit (e.g. not enough space) but that the label of the current link is sufficiently clear for people having access to the screen, the link label can have an extra hidden text or an `aria-label` or `aria-labelledby` attribute, specifically for the screen reader users. For example, in the image below, the two \&quot;next\&quot; links are not explicit enough for a person with visual impairments. However, when one sees the screen, the positioning makes obvious the function of each button.  ![screenshot showing two valid links that should be clarified](./images/liens-valider.png)  In this case, add an &lt;a href=\&quot;./exemples/masquage/index.html\&quot;&gt;accessible hidden content&lt;/a&gt; using `span` to complete the link label. This will not be displayed on the screen, but will be vocalized by assistive technologies.  **Example:**   `&lt;a href=\&quot;...\&quot;&gt;next&lt;span class=\&quot;accessible-hidden-content\&quot;&gt; to pay by installments&lt;/span&gt;&lt;/a&gt;`   `&lt;a href=\&quot;...\&quot;&gt;next&lt;span class=\&quot;accessible-hidden-content\&quot;&gt; to pay at one time&lt;/span&gt;&lt;/a&gt;`  Another solution is to use an `aria-label` or `aria-labelledby` attribute to clarify the link label. In addition to these solutions, we could also use ** a `title` attribute ** to display a \&quot;confirm to pay in installments\&quot; tooltip when the mouse is over the link.   **Checklist: **  Ensure that links, out of context, give good information about the triggered action or destination. A page must not contain multiple links with the same label but pointing to different destinations / actions.  **Users' goal: **  Allow users who don't not have access to the visual context to know the destination of the link. Particularly important for the users navigating through a list of links extracted from the page (screen readers) or software magnifying glass users who see only a fraction of the page.  **Technical goal: **  Making explicit link labels improves the natural referencing.  **Do:**       Associate a link labeled \&quot;click here\&quot; with a hidden label: \&quot;order you mobile phone\&quot;.    **Don't:**       \&quot;Click here\&quot; or \&quot;Read more...\&quot; links without clarification.  **Reference:** WCAG 2.4.9  "
});

documentTitles["fondamentaux-tech.html#16-preventing-the-user-from-opening-a-new-window"] = "16. Preventing the user from opening a new window";
index.add({
    url: "fondamentaux-tech.html#16-preventing-the-user-from-opening-a-new-window",
    title: "16. Preventing the user from opening a new window",    
    body: "## 16. Preventing the user from opening a new window  **Target : ** everyone, especially people with visual impairments, cognitive limitations or having attention difficulties.   **When: ** from design and during development.  **Description:**  Notify the user of any new window opening by mentioning it in the title of the link. If it is not possible, use an icon (image with `alt` attribute) indicating the new window opening or just add a 'new window' in the label.   As a last resort, use an &lt;a href=\&quot;./exemples/masquage/index.html\&quot;&gt;accessibly hidden text&lt;/a&gt; (off-screen).  **Example: **      Example of an icon that indicates the opening of a new window.   ![screenshot of a link with an icon indicating the opening of a new window](./images/nouvelle-fenetre.png)    **Checklist: **  For any link opening a new window or a new tab, a mention like \&quot;(new window)\&quot; is shown in the link label, or the mention (new window) is positioned off the screen via CSS (&lt;a href=\&quot;./examples/hiding/index.html\&quot;&gt;accessible hidden content&lt;/a&gt;).  **Users' goal: **  Avoid the unexpected opening of window, because this can disturb, disrupt, or confuse the user. In particular for persons using mobile outdoors, using speech synthesis or cognitively impaired.  **Do:**       For any external link and opening a new window, the label could be: \&quot;Access the site orange.com (new window)\&quot;, for a picture-link the alt attribute could be: \&quot;consult the CGU (new window)\&quot;.       **Reference:** WCAG 3.2.2  "
});

documentTitles["fondamentaux-tech.html#17-allow-to-use-the-main-features-of-the-application-with-the-keyboard"] = "17. Allow to use the main features of the application with the keyboard";
index.add({
    url: "fondamentaux-tech.html#17-allow-to-use-the-main-features-of-the-application-with-the-keyboard",
    title: "17. Allow to use the main features of the application with the keyboard",    
    body: "## 17. Allow to use the main features of the application with the keyboard  **Target : ** everyone, especially people with motor or visual impairment and using a device outdoors.   **When: ** from design and during development.  **Description: **  Implement event handlers that don't rely only on mouse events.  **Checklist: **  All important actions performed with a mouse must also be reproduced with the keyboard, even complex interactions (drag &amp; drop, mobile touch gestures...).  **Users' goal: **   Allow users who cannot use the mouse (blind, motor disabled, mobile web, outdoor...) to access the main features of the application with the keyboard.  **Do:**       - A sub-menu displayed when the mouse is over an element must also be displayed when the parent menu item receives the keyboard focus. - In the webmail, right-clicking on the \&quot;trash\&quot; opens a menu to empty the trash, this option should be also available from a button \&quot;empty the trash\&quot; elsewhere in the interface or from a drop-down menu accessible with the keyboard.   **Don't:**       A functionality only available through drag &amp; drop and without any keyboard equivalent.  **Reference:** WCAG 2.1.1  "
});

documentTitles["fondamentaux-tech.html#18-the-focus-order-must-be-sequential-and-logical-without-keyboard-trap"] = "18. The focus order must be sequential and logical without keyboard trap";
index.add({
    url: "fondamentaux-tech.html#18-the-focus-order-must-be-sequential-and-logical-without-keyboard-trap",
    title: "18. The focus order must be sequential and logical without keyboard trap",    
    body: "## 18. The focus order must be sequential and logical without keyboard trap  **Target : ** everyone, especially people with motor or visual impairments and using a device outdoors.   **When: ** during development.  **Description: **  The elements (links, buttons, form fields) must receive the focus in a logical order for the user, without being trapped or blocked, even for dynamically generated content appearing or disappearing (changing the DOM, Ajax,...).   **Checklist: **  - To validate this requirement, the focus position must be visible at all times (`outline` and `:focus` CSS  properties), see requirement 19 below. - Be careful of the elements ordering in the HTML code, it affects the focus order. An element at the end of the source code, but positioned at the top of the page via CSS will be the last to receive focus. - For maintainability, avoid using the `tabindex` attribute with values higher than 0.  **Users' goal: **  Allowing logical navigation without \&quot;trapping\&quot; the keyboard in the pages of the application. Necessary for users navigating with the keyboard (visually impaired, motor impaired, cognitive impaired, using a device outdoors).  **Don't:**       A page containing a video player whose focus can enter inside the player, but cannot get out (keyboard trap).           **Reference:** WCAG 2.4.3, 2.1.2  "
});

documentTitles["fondamentaux-tech.html#19-make-visible-the-focus-at-all-times"] = "19. Make visible the focus at all times";
index.add({
    url: "fondamentaux-tech.html#19-make-visible-the-focus-at-all-times",
    title: "19. Make visible the focus at all times",    
    body: "## 19. Make visible the focus at all times  **Target : ** everyone and especially people with visual impairments, cognitive limitations, motor disabled, having attention difficulties or using a device outdoors.   **When: ** from design and during development.  **Description: **  Do not hide the focus and if necessary make it visible enough (e.g. by modifying the `outline` CSS property) on all elements likely to receive it (links, buttons, form elements). You can also accentuate the visibility of the focus so that it is easily identifiable.  When an effect is visible on an element during mouse-over (e.g. `:hover` CSS property), this effect must also be displayed when capturing the focus (`:focus`).   **Checklist: **  In many front-end frameworks or CSS resets, the `outline` property (to visualize the focus) is disabled (`outline: none;`), don't forget to redefine it and check the focus is visible on all focusable elements.  **Users' goal: **  Allow focus visibility on all elements, especially for keyboard users (visually impaired, motor disabled or those with attention or memory difficulties and using devices outdoors).  **Do:**   Focus set on the \&quot;HTC Desire 620\&quot; link.    ![screenshot showing a link whose focus is clearly visible](./images/focus-ok.png)     **Don't:**   Focus set on the \&quot;HTC Desire 620\&quot; link.      ![screenshot showing a link whose focus is not visible enough](./images/focus-ko.png)     **Reference:** WCAG 2.4.7  "
});

documentTitles["fondamentaux-tech.html#20-provide-skip-links"] = "20. Provide skip links";
index.add({
    url: "fondamentaux-tech.html#20-provide-skip-links",
    title: "20. Provide skip links",    
    body: "## 20. Provide skip links  **Target : ** useful for mobile and tablet users, people with visual impairments, motor disabilities or using a device outdoors.   **When: ** from design and during development.  **Description: **  Provide skip links allowing to access directly the main page areas (navigation, content, bottom of the page, search...) with internal links pointing to anchors. (`&lt;a&gt;` tags or any HTML element with an `id` attribute). In **very specific** cases, the links can be hidden on the screen and appear only when keyboard navigation.  **Checklist: ** When a skip link is activated, make sure the focus is correctly set (not only scrolled to the right position).  **Users' goal: **  Facilitate the navigation for users using a keyboard, visually impaired, users of magnifying glass software or mobile phone.       **Example: **   Skip links (\&quot;Skip to navigation\&quot;, \&quot;Skip to content\&quot;) are available on this site. To make them appear, move the focus on the top of the page by clicking on your browser's address bar, for example, then repeatedly press the button `TAB`.  ![screenshot of the site orange.com](images/skiplink.png)     **Reference:** WCAG 2.4.1   "
});

documentTitles["fondamentaux-tech.html#21-animation"] = "21. Animation";
index.add({
    url: "fondamentaux-tech.html#21-animation",
    title: "21. Animation",    
    body: "## 21. Animation **Target : ** people with visual impairments, reading, attention or understanding difficulties, people with seizure disorders.   **When: ** when designing the service and graphic design.  **Description:**   All moving, refreshing or flashing content must be able to be stopped, paused or hidden by the user. Also, avoid as much as possible flashing content and sudden brightness changes (see [The logo of the Olympics causes seizures](http://www.leparisien.fr/societe/le-logo-des-jo-provoque-des-crises-d-epilepsie-09-06-2007-2008107333.php)). Therefore, it is necessary to add a pause when loading the page or a way to stop or pause the animation, the update or the flashing via a button for example.  **Example: **   ![screenshot of a carousel with a button to pause the animation](./images/carrousel.png)    A carousel that automatically scrolls must be paused when the mouse is over it or when it receives the focus.   It is also possible to add a \&quot;pause\&quot; button directly in the interface.  **Reference:** WCAG 2.2.2  "
});

documentTitles["fondamentaux-tech.html#22-make-sure-the-main-features-can-be-used-with-screen-readers"] = "22. Make sure the main features can be used with screen readers";
index.add({
    url: "fondamentaux-tech.html#22-make-sure-the-main-features-can-be-used-with-screen-readers",
    title: "22. Make sure the main features can be used with screen readers",    
    body: "## 22. Make sure the main features can be used with screen readers  **Target : ** everyone, especially people with visual impairments.   **When: ** during development.  **Description: **  Follow general recommendations for accessibility, use primarily the HTML standard components, otherwise, use the ARIA (Accessible Rich Internet Application) interface for complex components.   **Checklist: **  Ensure there is no blocking point with the combination browser/screen reader (Firefox/NVDA, IE/Jaws, Safari/VoiceOver) when a user navigates (accessing the main features of the application). Indeed, the screen reader users are the most affected by the lack of accessibility, we can identify a huge amount of problems in satisfying this requirement.  **Users' goal: **  Allow the screen reader users to access the main features of the application, but also ensure the usability of the application for all users.  "
});

documentTitles["fondamentaux-tech.html#23-keep-a-logical-tab-order-on-dynamic-insertion-or-modification"] = "23. Keep a logical tab order on dynamic insertion or modification";
index.add({
    url: "fondamentaux-tech.html#23-keep-a-logical-tab-order-on-dynamic-insertion-or-modification",
    title: "23. Keep a logical tab order on dynamic insertion or modification",    
    body: "## 23. Keep a logical tab order on dynamic insertion or modification  **Target : ** everyone, especially people with visual disabilities, cognitive limitations, or attention difficulties.   **When: ** during development.  **Description: **  When an element is displayed on a user interaction: - it must appear in the source code right after the triggering element (e.g. drop down menu), - or the focus must be set on one of the first elements of the generated content (link, button, title, paragraph...).       When the content disappears, the focus must be restored on the triggering element. For example, when closing a dialog, the focus must be moved to the element that triggered the popup opening (button, link...).  Reminder: dynamically generated content must be accessible and therefore respect all accessibility criteria.  There are several solutions to warn the user in case of appearing/disappearing of content: - via text - moving the focus - using ARIA  See [the drop down menu example](./exemples/simple-menu/simple-menu.html) for the `aria-haspopup` attribute implementation.  **Checklist: ** - The focus moves in a logical way (natural reading order). - The focus order must not be defined using the `tabindex` attribute (with positive values).    In practice, `tabindex` should be used with only two attribute values: - `tabindex=\&quot;-1\&quot;`: prevents an element to be focusable via the `TAB` key and allows it to be focusable via Javascript. - `tabindex=\&quot;0\&quot;`: makes an element focusable via the `TAB` key and via Javascript.  **Users' goal: **  Allow a user, for example, a blind or visually impaired, to detect and interact with new appearing content.    **Reference:** WCAG 2.4.3  "
});

documentTitles["fondamentaux-tech.html#24-ensure-the-user-keeps-control-during-interactions"] = "24. Ensure the user keeps control during interactions";
index.add({
    url: "fondamentaux-tech.html#24-ensure-the-user-keeps-control-during-interactions",
    title: "24. Ensure the user keeps control during interactions",    
    body: "## 24. Ensure the user keeps control during interactions  **Target : ** everyone, especially people with visual impairments, cognitive limitations or attention difficulties.   **When: ** from design and during development.  **Description: **  Do not introduce confusion when setting the focus on an element, entering data, on an unpredictable form field activation or without notifying the user.   **Users' goal: **  Allow all users to maintain control over any change of context after an action.  **Example:**     A form must have a submit button. It should not be sent automatically after the user input.  **Reference:** WCAG 3.2.1, 3.2.2 &lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2016  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt;"
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
    body: "## 1. Set a title for each page **Target : ** everyone and especially people with visual impairments.   **When: ** from design and during development.  **Description:**   Set each page a title that is specific to it and which reflects its content or function  (`&lt;title&gt;` tag).   The page title is the first element read by the speech synthesis, it must help to formally identify the page where you are.  **Checklist: ** - Even if there is no rule, in general (opening many tabs in multiple applications), we go from the most specific information to the least specific (eg title of the current page - name of the site). For windowing a multitude of application, the approach is different, in this case we will prefer going from the least specific information to the most specific (eg name of the site - title of the current page). - When the content of the page is dynamic (displaying the result of a search, errors in a form, user adding content...), the title of the page should reflect this change.  **Do:**   `Home - Corporate web site of Orange`   **Don't:**   `Home`  "
});

documentTitles["fondamentaux-nontech.html#2-set-a-title-to-headings"] = "2. Set a title to headings";
index.add({
    url: "fondamentaux-nontech.html#2-set-a-title-to-headings",
    title: "2. Set a title to headings",    
    body: "## 2. Set a title to headings **Target : ** everyone and especially people with cognitive limitations, reading difficulties and visual impairments.   **When: ** from the design, content writing and during development.  **Description:**   Identifying title tags to use (`h1` to `h6` HTML tags) to structure the content of the pages. The visually impaired people browsing with a screen reader can access the list of titles of the page to navigate quickly.  Just like in a Word document, it is possible to use the table of contents only if the titles tags have been properly set within the document.    **Checklist: **  - The titles must be relevant, reflect the structure of the information contained in the page. - There should be no break in the heading hierarchy (we cannot jump from a `h2` title to a `h4` title). - You can use several `h1` titles per page (don't exceed two in most cases).  **Goal: ** - For all users: improve the structure of the page and its contents. - For search engines: improve SEO. - For users that are visually impaired, cognitively impaired or having reading difficulties: easy navigation and access to content.  **Do:**        Page with consistent and relevant titles:  `(Title 1) Home - Orange`  `(Title 2) News`  `(Title 2) Fiber broadband is coming!`  `(Title 3) Check eligibility`  "
});

documentTitles["fondamentaux-nontech.html#3-make-sure-there-is-enough-contrast-between-text-and-background"] = "3. Make sure there is enough contrast between text and background";
index.add({
    url: "fondamentaux-nontech.html#3-make-sure-there-is-enough-contrast-between-text-and-background",
    title: "3. Make sure there is enough contrast between text and background",    
    body: "## 3. Make sure there is enough contrast between text and background **Target : ** everyone, especially the mobile and tablet users, people with visual impairments, reading or attention difficulties and elderly people.    **When: ** from design and during development.  **Description:**   The contrast between the text and the background should be high enough. Insufficient contrast level will have detrimental impact on users with visual difficulties and for mobile and tablets users in a very bright environment.      **Don't: **   The label \&quot;film | 20h40 ...\&quot; does not have enough contrast. It will not be readable by all users.    ![screenshot showing text with poor contrast](images/contraste.png)  **Checklist: **  - The contrast between the color of the background and the text must be 4.5:1 minimum and also for text on an image carrying information. - For applications used primarily in mobile web or in mobility, the contrast level of the main elements must be 7:1 in order to ensure a good readability for all. - Links should be easily identifiable from to the rest of the text.  **Tool: **   The [color contrast analyzer](http://www.paciellogroup.com/resources/contrastanalyser/) application can quickly measure color contrast levels (free for Windows and Mac).     "
});

documentTitles["fondamentaux-nontech.html#4-do-not-use-color-or-sensory-characteristics-as-the-unique-source-of-information"] = "4. Do not use color or sensory characteristics as the unique source of information";
index.add({
    url: "fondamentaux-nontech.html#4-do-not-use-color-or-sensory-characteristics-as-the-unique-source-of-information",
    title: "4. Do not use color or sensory characteristics as the unique source of information",    
    body: "## 4. Do not use color or sensory characteristics as the unique source of information **Target : ** everyone, especially the colorblind and more generally people with visual impairments, cognitive limitations, hearing impairments and elderly people.   **When: ** from the design and during development.  **Description: **   Do not use color or sensory characteristics (shape, size, sound, direction, visual localization ...) as the only way of conveying information, indicating an action, requesting a response or distinguishing an element. The information provided by a color change or a sensory characteristic must be completed with textual information (alternative) or / and semantic structuring.  **Do: **    ![illustration using colored icons to convey information](images/couleur-ok.png)  **Don't: **    ![illustration using colored icons to convey information](images/couleur-ko.png)    This example is not valid because the information is conveyed only by color.  **Checklist: ** - Take a screenshot and convert it in black and white. The loss of color should not cause difficulty while navigating, nor cause loss of information. - Turn off the speakers, the level of information should remain the same.  "
});

documentTitles["fondamentaux-nontech.html#5-define-text-alternatives"] = "5. Define text alternatives";
index.add({
    url: "fondamentaux-nontech.html#5-define-text-alternatives",
    title: "5. Define text alternatives",    
    body: "## 5. Define text alternatives **Target : ** people with visual impairments, hearing difficulties or cognitive limitations and search engines.   **When: ** from the design and during development.  **Description:**   Set text alternatives for all non-text informative elements (alternatives to images, icons). Also provide scripts or subtitles for the audio or video content.  **Example  **   In the screenshot below, we should provide since the design, text alternatives for each button: - menu - settings - previous channel - mute ...  ![screenshot of a video player with multiple buttons](images/player.png)     **Note about CAPTCHA :**   Captcha are often source of problems for users. If the implementation of an anti-spam system can not be avoided, it is desirable to move towards a more flexible solution for the user :  - Hidden input form left empty (honeypot technique), not visible to the user.  - Logical test (question whose answer is obvious, simple math test ...).  - Double authentication.  If the presence of a captcha can not be avoided, **it is essential to provide an audio alternative**.  "
});

documentTitles["fondamentaux-nontech.html#6-focus-visibility"] = "6. Focus visibility";
index.add({
    url: "fondamentaux-nontech.html#6-focus-visibility",
    title: "6. Focus visibility",    
    body: "## 6. Focus visibility **Target : ** everyone and especially people with visual impairments or cognitive limitations, motor disabilities and using a device outdoors.   **When: ** from the graphic design and during development.  **Description:**   The position of the keyboard focus must be visible at all times. When a clickable element receives the focus (link, button...), this must be visible to the user. By default, the browser sets a dotted or a colored box around the element. This behavior can be replaced by a custom effect (improving the contrast, for example) but must not be deleted. Users who navigate using the keyboard (TAB) need to know the position of the focus.      The focus indicator as well as the hover indicator (when the mouse is over an element) should be carefully considered since the graphic design.       **Do: **   In the following screenshots, the focus is located on the \&quot;209 SMS / month\&quot;.  The first figure shows the default behavior (focus represented by a dotted box). In the second capture, the dotted lines have been removed, replaced by a colored box to indicate explicitly the location of the focus.   ![screenshot showing the default focus](images/focus.png) ![screenshot with a custom focus](images/focus2.png)    "
});

documentTitles["fondamentaux-nontech.html#7-changing-text-size"] = "7. Changing text size";
index.add({
    url: "fondamentaux-nontech.html#7-changing-text-size",
    title: "7. Changing text size",    
    body: "## 7. Changing text size  **Target : ** everyone and especially people with visual impairments, using a device outdoors and elderly people.   **Who: ** from graphic design and mainly during development.  **Description:**   The text size should be able to be doubled (set the zoom to 200% from the browser settings). At this zoom level, the page layout can be altered, but the information must be readable (text or bunk not truncated). Although this must be taken into account during the development phase, we can identify, from the graphic design phase, areas of the screen that should or should not grow along with the text size. Moreover, some design choices may or may not facilitate the implementation of this criterion during development, so it is important to think about it from the start.       **Example: **     The screenshot below shows a page with the zoom to 100%.   ![screenshot showing a page zoomed to 100%](images/zoom.png)        &amp;nbsp;   **Do: **   Zoom set to 200%.   ![screenshot with 200% zoom and readable text](images/zoom-ok.png)        &amp;nbsp;   **Don't: **   Zoom set to 200%. In this case the height of the text container did not resized accordingly to text size.   ![screenshot with 200% zoom and truncated text](images/zoom-ko.png)    "
});

documentTitles["fondamentaux-nontech.html#8-animation"] = "8. Animation";
index.add({
    url: "fondamentaux-nontech.html#8-animation",
    title: "8. Animation",    
    body: "## 8. Animation **Target : ** people with visual impairments, reading/attention/understanding difficulties and seizure disorders.   **When: ** when designing the service and graphic design.  **Description:**   All moving, refreshed or flashing content must be stoppable, paused or hidden by the user. Also, avoid as much as possible flashing content and sudden brightness changes (see [The logo of the Olympics causes seizures](http://news.bbc.co.uk/2/hi/uk_news/england/london/6724245.stm)).  **Example: **   ![screenshot of a carousel with a button to pause the animation](./images/carrousel.png)    A carousel that automatically scrolls must be paused when the mouse is over it or when it receives the focus. It is also possible to add a \&quot;pause\&quot; button directly in the interface.  "
});

documentTitles["fondamentaux-nontech.html#9-links-label"] = "9. Links label";
index.add({
    url: "fondamentaux-nontech.html#9-links-label",
    title: "9. Links label",    
    body: "## 9. Links label **Target : ** everyone and especially people with visual impairments, cognitive limitations or attention difficulties.   **When: ** when designing the service and the graphic design.  **Description:**   The wording of the links should be explicit enough. In exceptional cases when it is technically impossible, provide a proper label so the speech synthesis can use it.  **Do:**   `Learn about our offers`   **Don't:**   `click here`   `more details`  "
});

documentTitles["fondamentaux-nontech.html#10-navigating-with-the-keyboard"] = "10. Navigating with the keyboard";
index.add({
    url: "fondamentaux-nontech.html#10-navigating-with-the-keyboard",
    title: "10. Navigating with the keyboard",    
    body: "## 10. Navigating with the keyboard **Target : ** everyone, especially people with motor or visual impairments or using a device outdoors.   **When: ** when designing the service and during development.  **Description:**   All features must be accessible from the keyboard. Pressing the keyboard Tab key, the browser passes the focus between clickable elements.   Moreover, if the features are specific to mouse (drag and drop, right click menu...), ensure that these are also available through other means elsewhere in the interface (button, icon, menu...).   **Example: **   In the webmail, right-clicking on the \&quot;trash\&quot; opens a menu to empty the trash, this option should be also available from a button \&quot;empty the trash\&quot; elsewhere in the interface or from a drop-down menu accessible with the keyboard.  "
});

documentTitles["fondamentaux-nontech.html#11-forms"] = "11. Forms";
index.add({
    url: "fondamentaux-nontech.html#11-forms",
    title: "11. Forms",    
    body: "## 11. Forms **Target : ** everyone and especially people with visual impairments.   **When: ** during design and development.  **Description:**   Each form input must be associated with a label identifying the function of the field, the type of data and the expected format. This label should be visually close to the field so we can easily link them (especially for people using zoom or software magnifier or even mobile users). Error messages should identify clearly the invalid field, and if necessary suggest a correction. This applies to input fields, but also to other types of fields (drop-down list, radio button, checkbox...). From the development perspective, this label must be associated with the form field to facilitate the navigation with a screen reader.  **Do: **   ![screenshot of a valid form](images/formulaire.png)    &amp;nbsp;  **Don't: **   ![screenshot of a form with a missing label](images/formulaire2.png)  &amp;nbsp;  In some cases, it seems unnecessary to associate a label to a form field (search field accompanied by a magnifying glass button for example). In such case you can provide a hidden label, it will not be displayed on the screen but it will be associated with the form field programmatically for easy navigation with a screen reader.  Lastly, the wording of the error messages should be explicit.  **Do: **   ![screenshot of a form that displays relevant error messages](images/formulaire-ok.png)    **Don't: **   ![screenshot of a form displaying irrelevant error messages](images/formulaire-ko.png)  "
});

documentTitles["fondamentaux-nontech.html#12-dialogs-and-opening-new-windows"] = "12. Dialogs and opening new windows";
index.add({
    url: "fondamentaux-nontech.html#12-dialogs-and-opening-new-windows",
    title: "12. Dialogs and opening new windows",    
    body: "## 12. Dialogs and opening new windows **Target : ** elderly people, people with cognitive or visual impairments or using a device outdoors.   **When: ** from the design and in the development.  **Description:**   Avoid as much as possible the actions that open a new window (or tab) of the browser. If a link triggers the opening of a new window, you need to ensure that the text \&quot;new window\&quot; is vocalized by screen readers programmatically. So that visually impaired people know that a new window has been opened. Also avoid the systematic use of dialogs to display information in the pages (presentation of service...). They often cause accessibility problems for people who navigate with a keyboard or a screen reader, they will require special attention during the development phase.  **Don't: **   In the example below the use of a dialog is not justified. Using a standard web page would: - Allow more space to the content (by removing the margins around the dialog). - Allow the \&quot;back\&quot; button to go back when navigating between pages of the dialog. - To make easier the display on small screens. - To avoid problems of accessibility for people who navigate using the keyboard or using a screen reader. - To reduce the weight of the page and improve loading time, as in this example the page behind the dialog box must be charged.    ![screenshot of a dialog way too big](images/dialog.png)  "
});

documentTitles["fondamentaux-nontech.html#13-provide-skip-links"] = "13. Provide skip links";
index.add({
    url: "fondamentaux-nontech.html#13-provide-skip-links",
    title: "13. Provide skip links",    
    body: "## 13. Provide skip links **Target : ** useful for mobile and tablet users, people with visual impairments, motor disabilities or using a device outdoors.   **When: ** from the design phase and in the development.  **Description:**   Provide skip links such as \&quot;Skip to content\&quot; on each page. It facilitates navigation for people using the keyboard, using a device outdoors or with a screen reader. In **very specific** cases, the links can be hidden on the screen and appear only when keyboard navigation.  **Example: **   Skip links (\&quot;Skip to navigation, \&quot;Skip to content\&quot;) are available on this site. To make them appear, move the focus on the top of the page by clicking on your browser's address bar, for example, then repeatedly press the button `TAB`.  ![screenshot of the site orange.com](images/skiplink.png) &lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2016  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt;"
});



documentTitles["exigences.html#orange-web-accessibility-requirements"] = "Orange web accessibility requirements";
index.add({
    url: "exigences.html#orange-web-accessibility-requirements",
    title: "Orange web accessibility requirements",    
    body: "# Orange web accessibility requirements &lt;script&gt;$(document).ready(function () {     setBreadcrumb([{\&quot;label\&quot;:\&quot;All requirements\&quot;}]); });&lt;/script&gt; "
});

documentTitles["exigences.html#wcag"] = "WCAG";
index.add({
    url: "exigences.html#wcag",
    title: "WCAG",    
    body: "## WCAG  For Orange internal accessibility requirements, we have chosen to rely on the [Web Content Accessibility Guidelines v2](https://www.w3.org/TR/WCAG20/) (WCAG 2). Those guidelines are international guidelines published by the World Wide Web Consortium (W3C) Web Accessibility Initiative (WAI) task force, which comply with the ISO standard 40500:2012.  All HTML pages made by the Orange group must **comply with the AA level criteria of Web Content Accessibility Guidelines (WCAG) 2.0, without blocking point** for the user after testing the main features of the site or application.  For the technical solutions, you should consult [essential criteria](./fondamentaux.html) and [examples](./exemples.html) sections. You should also refer to an external content available at [Accede-Web references](http://wiki.accede-web.com/en/home).  "
});

documentTitles["exigences.html#rgaa"] = "RGAA";
index.add({
    url: "exigences.html#rgaa",
    title: "RGAA",    
    body: "## RGAA  The RGAA is the French government's [General Accessibility Reference for Administrations (in french)](http://references.modernisation.gouv.fr/referentiel/). It is meant to provide a way to check compliance against WCAG 2.0. If your are familiar with this reference, you can use it for testing your site.  An [english translation](http://disic.github.io/rgaa_referentiel_en/RGAA3.0_Criteria_English_version_v1.html) is available for informational purposes only.   "
});

documentTitles["exigences.html#accede-web-references"] = "Accede-web references";
index.add({
    url: "exigences.html#accede-web-references",
    title: "Accede-web references",    
    body: "## Accede-web references  [Accede-web](http://wiki.accede-web.com/en/) site offers great manuals on web accessibility. These references are very useful, pedagogical and come from Atalan, a group of major companies as well as schools and associations of people with disabilities:     &lt;div class=\&quot;perso col-sm-12 col-md-6 col-lg-3\&quot;&gt;     ![](./images/perso1.png)      &lt;a href=\&quot;http://wiki.accede-web.com/en/notices/graphique-ergonomique\&quot; class=\&quot;btn btn-info\&quot;&gt;Accessibility guidelines for graphic design (to ensure WCAG 2.0 compliance)&lt;/a&gt; &lt;/div&gt; &lt;div class=\&quot;perso col-sm-12 col-md-6 col-lg-3\&quot;&gt;     ![](./images/perso2.png)         &lt;a href=\&quot;http://wiki.accede-web.com/en/notices/contributeurs\&quot; class=\&quot;btn btn-info\&quot;&gt;Accessibility guidelines for editors (template)&lt;/a&gt; &lt;/div&gt; &lt;div class=\&quot;perso col-sm-12 col-md-6 col-lg-3\&quot;&gt;     ![](./images/perso3.png)       &lt;a href=\&quot;http://wiki.accede-web.com/en/notices/html-css\&quot; class=\&quot;btn btn-info\&quot;&gt;Accessibility guidelines for HTML and CSS (to ensure WCAG 2.0 compliance)&lt;/a&gt; &lt;/div&gt; &lt;div class=\&quot;perso col-sm-12 col-md-6 col-lg-3\&quot;&gt;     ![](./images/perso4.png)       &lt;a href=\&quot;http://wiki.accede-web.com/en/notices/interfaces-riches-javascript\&quot; class=\&quot;btn btn-info\&quot;&gt;Accessibility guidelines for rich interfaces and JavaScript (Use cases to comply with France’s accessibility guidelines)&lt;/a&gt; &lt;/div&gt;         &lt;br&gt;&amp;nbsp; &lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2016  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt; "
});



documentTitles["htmlaria.html#html5-aria"] = "HTML5 &amp; ARIA";
index.add({
    url: "htmlaria.html#html5-aria",
    title: "HTML5 &amp; ARIA",    
    body: "# HTML5 &amp; ARIA  &lt;script&gt;$(document).ready(function () {     setBreadcrumb([{\&quot;label\&quot;:\&quot;HTML5 &amp; ARIA\&quot;}]); });&lt;/script&gt;  "
});

documentTitles["htmlaria.html#introduction"] = "Introduction";
index.add({
    url: "htmlaria.html#introduction",
    title: "Introduction",    
    body: "## Introduction  Web sites are increasingly dynamic (asynchronous loading, dynamic content generation) and interactive (rich interface components: slider, datepicker...). So it is very difficult or impossible to make these components accessible with conventional HTML.  Even with the HTML5 change, we still lack semantic information to provide technical aids (screen readers, magnifiers software ...), keyboard navigation is often impossible, the complex handling of the keyboard focus is missing and live regions are not notified to the user.  "
});

documentTitles["htmlaria.html#what-is-it"] = "What is it ?";
index.add({
    url: "htmlaria.html#what-is-it",
    title: "What is it ?",    
    body: "## What is it ?  To overcome these limitations, the W3C / WAI has officially issued a recommendation called ARIA, standing for Accessible Rich Internet Applications, and several documents on the use of ARIA.  ARIA is a semantic wrapper based on the attribute / value combination used in markup languages ​​such as HTML, SVG, XML, etc. This recommendation consists of roles, states and properties that will specifically interact with assistive technologies (AT). With ARIA, one can describe the elements and behaviors with simple HTML when not natively semantically explicit, for example, tabs, dropdown, live regions, tooltips, modal windows. ARIA also defines how an interface component has to behave with the keyboard in order to standardize the user experience with keyboard navigation. **ARIA makes sense and delivers its full potential when used with HTML5**.  ARIA does not add any particular behavior or any style to UI components. So always be sure the presentation is done through CSS, content control and interaction via Javascript.  "
});

documentTitles["htmlaria.html#the-support"] = "The support";
index.add({
    url: "htmlaria.html#the-support",
    title: "The support",    
    body: "## The support  ARIA support improves quickly and is already supported : - In modern browsers (Firefox &gt;=3.0, Chrome &gt;=16, Safari &gt;=4, Opera 9.5&gt;=, Internet Explorer 8 for a basic support, Internet Explorer &gt;=9 and Edge for advanced support)  - In assistive technologies (NVDA &gt;=2010, Orca &gt;=2 + Firefox only, VoiceOver OSX &gt;=10.5, iOS &gt;=4, JAWS &gt;=8, Window-Eyes &gt;=7, ZoomText 10 for a basic support, ZoomText &gt;=11 for advanced support).   Moreover, the optimal efficiency of the ARIA compatibility depends heavily on the combination browser/assistive technologies, Firefox with NVDA, Jaws with Internet Explorer and Safari with VoiceOver, for example.  "
});

documentTitles["htmlaria.html#should-we-use-it"] = "Should we use it?";
index.add({
    url: "htmlaria.html#should-we-use-it",
    title: "Should we use it?",    
    body: "## Should we use it?  ARIA improves the accessibility for components not natively available in HTML (or inaccessible HTML5 components). The ARIA robustness and interoperability is rather complacent, [twenty WCAG 2.0 techniques are specific to ARIA](https://www.w3.org/WAI/GL/WCAG20-TECHS/aria.html) (10 are HTML5 techniques). Therefore, for rich Internet applications, ARIA is essential for accessibility implementation.  In all cases, you have to test developments in the target environments (browsers/assistive technologies combination). This is a tough task absolutely necessary for complex cases because on a web site or a traditional web application, you must, at least, test with Safari/VoiceOver, Internet Explorer/Jaws and Firefox/NVDA.  In a well-defined environment (e.g. intranet), target environments are known and in a finite number, so it gets easier!  "
});

documentTitles["htmlaria.html#webography"] = "Webography";
index.add({
    url: "htmlaria.html#webography",
    title: "Webography",    
    body: "## Webography * \&quot;ARIA in HTML\&quot; summary  https://specs.webplatform.org/html-aria/webspecs/master/ * W3C:   * Introduction to ARIA: http://www.w3.org/TR/wai-aria/introduction   * ARIA specification: http://www.w3.org/TR/wai-aria/   * ARIA implementation: http://www.w3.org/TR/wai-aria-practices/, careful with \&quot;working draft\&quot;   * Use ARIA HTML (5): http://www.w3.org/TR/aria-in-html/, careful with  \&quot;working draft\&quot;   * ARIA techniques in WCAG 2: https://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/aria.html * Introduction to ARIA by Site Point: http://www.sitepoint.com/introduction-wai-aria/ * Introduction and link list to ARIA sources: http://developer.mozilla.org/fr/docs/Accessibilit%C3%A9/ARIA &lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2016  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt;"
});



documentTitles["methodes-outils.html#methods-and-testing-tools"] = "Methods and testing tools";
index.add({
    url: "methodes-outils.html#methods-and-testing-tools",
    title: "Methods and testing tools",    
    body: "# Methods and testing tools  &lt;script&gt;$(document).ready(function () {     setBreadcrumb([{\&quot;label\&quot;:\&quot;Test tools\&quot;}]); });&lt;/script&gt;  You will find articles describing useful methods and tools to test the accessibility of your web pages.  "
});

documentTitles["methodes-outils.html#manual-test-and-assistive-technology"] = "Manual test and assistive technology";
index.add({
    url: "methodes-outils.html#manual-test-and-assistive-technology",
    title: "Manual test and assistive technology",    
    body: "## Manual test and assistive technology  [Keyboard navigation](./methodes-outils-clavier.html) List of the main shortcuts to navigate with the keyboard in a web page.  [Text size enlargement](./methodes-outils-zoom.html) Zoom guide.  [Navigating with a screen reader](./methodes-outils-lecteur-ecran.html) The screen readers commonly used.  "
});

documentTitles["methodes-outils.html#automated-testing-tools"] = "Automated testing tools";
index.add({
    url: "methodes-outils.html#automated-testing-tools",
    title: "Automated testing tools",    
    body: "## Automated testing tools [Browser extensions](./methodes-outils-extensions.html) Some extensions allow you to perform automated tests on the current page.  "
});

documentTitles["methodes-outils.html#test-criteria"] = "Test criteria";
index.add({
    url: "methodes-outils.html#test-criteria",
    title: "Test criteria",    
    body: "## Test criteria [Measure the color contrast level](./methodes-outils-contrastes.html) Introducing the color contrast analyzer tool.  [Accessing page headers (`H1` to `H6` tags)](./methodes-outils-liste-titres.html) The different ways to access the list of page headers.  &amp;nbsp; &lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2016  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt;"
});



documentTitles["nos-outils.html#open-source-orange-test-tools"] = "Open source Orange test tools";
index.add({
    url: "nos-outils.html#open-source-orange-test-tools",
    title: "Open source Orange test tools",    
    body: "# Open source Orange test tools      &lt;script&gt;$(document).ready(function () {     setBreadcrumb([{\&quot;label\&quot;:\&quot;Open source Orange test tools\&quot;}]); });&lt;/script&gt;      Here is our list of open source tools for the web:  - **Orange Boosted:** allows you to create accessible web sites branded with Orange colors. - **Orange Comfort+:** allows you to improve user comfort while viewing your website.  "
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
    body: "### Presentation Orange Boosted is an HTML, CSS and Javascript framework based on the popular [Twitter Bootstrap](http://getbootstrap.com/). It allows to create quickly a responsive website branded with the Orange colors.  "
});

documentTitles["nos-outils.html#why-you-should-use-it"] = "Why you should use it?";
index.add({
    url: "nos-outils.html#why-you-should-use-it",
    title: "Why you should use it?",    
    body: "### Why you should use it?  - Based on [Twitter Bootstrap](http://getbootstrap.com/)  - Orange branded  - Enhanced with **more accessible** components  - Enriched with specific components we use at Orange  - Examples pages  - Open source, MIT license  "
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
    body: "### Presentation The Orange Comfort+ service can adapt the layout of a website to improve comfort during the navigation. It has a wide range of settings that can improve the comfort of all users. It also provides valuable assistance to users with motor, visual or cognitive disabilities.  You can test the service by clicking on the \&quot;Comfort+\&quot; button at the top right of this page.  "
});

documentTitles["nos-outils.html#its-main-features"] = "Its main features:";
index.add({
    url: "nos-outils.html#its-main-features",
    title: "Its main features:",    
    body: "### Its main features: - Useful for all users - Supports different user disabilities - Works with all websites - Also available as a browser extension - Open source, MIT license  ![screenshot of the service more comfort](./images/confort-plus.png)  "
});

documentTitles["nos-outils.html#browser-extensions"] = "Browser Extensions";
index.add({
    url: "nos-outils.html#browser-extensions",
    title: "Browser Extensions",    
    body: "### Browser Extensions - Firefox: https://addons.mozilla.org/fr/firefox/addon/orange-confort - Chrome: https://chrome.google.com/webstore/detail/orange-confort%2B/ddnpdohiipephjpdpohikkamhdikbldp - IE11, 64 or 32 bits: http://confort-plus.orange.com/  "
});

documentTitles["nos-outils.html#official-website"] = "Official website";
index.add({
    url: "nos-outils.html#official-website",
    title: "Official website",    
    body: "### Official website [Orange Comfort+](http://confort-plus.orange.com/)       &lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2016  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt;"
});



documentTitles["methodes-outils-contrastes.html#measure-the-color-contrast-level"] = "Measure the color contrast level";
index.add({
    url: "methodes-outils-contrastes.html#measure-the-color-contrast-level",
    title: "Measure the color contrast level",    
    body: "# Measure the color contrast level  &lt;script&gt;$(document).ready(function () {     setBreadcrumb([         {\&quot;label\&quot;:\&quot;Test tools\&quot;, \&quot;url\&quot;: \&quot;./methodes-outils.html\&quot;},         {\&quot;label\&quot;:\&quot;Measure the color contrast level\&quot;}]); });&lt;/script&gt;  &lt;span data-menuitem=\&quot;methodes-outils\&quot;&gt;&lt;/span&gt;  The contrast level can be measured simply by using the [color contrast analyzer tool](http://www.paciellogroup.com/resources/contrastanalyser/).  This tool is available for Mac and Windows. It measures the contrast between two colors (text color and background color). You can select them using an eyedropper directly into a web page, image or application.  ![screenshot of the color contrast analyzer tool](./images/contraste2.png)&lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2016  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt;"
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
    body: "## List of keyboard shortcuts:  - The `TAB` key: to move the focus. - The `shift + TAB` keys: to move backwards the focus. - The `Return` key to activate the element that has the focus (link, button, menu...). - The spacebar to check / uncheck a checkbox. - The arrow keys to change the selection of the radio buttons, to move in a drop-down list, or to scroll (scrollbar) when available.  ** Note on mac, the keyboard navigation must be enabled first: **   In Safari: Edit&gt; Preferences...&gt; Advanced   Then check the box *\&quot;Press tab to highlight each item on a webpage\&quot;*.  &amp;nbsp; &lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2016  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt;"
});



documentTitles["methodes-outils-liste-titres.html#accessing-page-headers-h1-to-h6-tags"] = "Accessing page headers (`H1` to `H6` tags)";
index.add({
    url: "methodes-outils-liste-titres.html#accessing-page-headers-h1-to-h6-tags",
    title: "Accessing page headers (`H1` to `H6` tags)",    
    body: "# Accessing page headers (`H1` to `H6` tags)  &lt;script&gt;$(document).ready(function () {     setBreadcrumb([         {\&quot;label\&quot;:\&quot;Test tools\&quot;, \&quot;url\&quot;: \&quot;./methodes-outils.html\&quot;},         {\&quot;label\&quot;:\&quot;Accessing page headers\&quot;}]); });&lt;/script&gt;  &lt;span data-menuitem=\&quot;methodes-outils\&quot;&gt;&lt;/span&gt;  To check if the headers have been properly positioned on the page, there are several solutions: - Browse the page code source by hand. - Use an extension such as [HeadingsMap](https://addons.mozilla.org/fr/firefox/addon/headingsmap/) for Firefox, [Wave for Chrome](http://wave.webaim.org/extension/) or [Web Developer Toolbar](http://chrispederick.com/work/web-developer/). - Access the headers list from a screen reader (see the [screen reader](./methodes-outils-lecteur-ecran.html) section).  The last solution is the most reliable, because extensions do not always take into account the CSS and any ARIA attributes positioned on the HTML tags. You can find more information in this article: [navigation with a screen reader](./methods-tools-player-ecran.html).  &lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2016  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt;"
});



documentTitles["methodes-outils-lecteur-ecran.html#navigating-with-a-screen-reader"] = "Navigating with a screen reader";
index.add({
    url: "methodes-outils-lecteur-ecran.html#navigating-with-a-screen-reader",
    title: "Navigating with a screen reader",    
    body: "# Navigating with a screen reader  &lt;script&gt;$(document).ready(function () {     setBreadcrumb([         {\&quot;label\&quot;:\&quot;Test tools\&quot;, \&quot;url\&quot;: \&quot;./methodes-outils.html\&quot;},         {\&quot;label\&quot;:\&quot;Navigating with a screen reader\&quot;}]); });&lt;/script&gt;  &lt;span data-menuitem=\&quot;methodes-outils\&quot;&gt;&lt;/span&gt;  A screen reader is a voice synthesis software used by the visually impaired and blind. It allows the user to interact with the computer and listen to what is displayed as text (usually) on the screen. There are several screen readers, the most prevalent are: - [NVDA](http://nvda-fr.org/): free, available for Windows. - [Jaws](http://www.freedomscientific.com/Downloads/JAWS): commercial, available for Windows. In trial, you can only use it 40 min, but if you restart your computer you can use it again. - [VoiceOver](http://www.apple.com/fr/accessibility/osx/voiceover/): free, available for Mac. It is directly integrated into the MacOS system.  "
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
    body: "### Installation  Download the NVDA installer on the [official website](http://nvda-fr.org/).  The default voice is not very good but it is very reactive. It is not mandatory, but you can download a better voice named [Hortense](http://www.nvda-fr.org/voix.php). Then just go to preferences to change NVDA voice settings.  "
});

documentTitles["methodes-outils-lecteur-ecran.html#configuration"] = "Configuration";
index.add({
    url: "methodes-outils-lecteur-ecran.html#configuration",
    title: "Configuration",    
    body: "### Configuration  At first startup, NVDA is configured to vocalize whatever the mouse is hover. This mode is used by visually impaired people who have difficulties reading the text displayed on the screen, for example. It is recommended to disable this option if you use NVDA to test accessibility on your pages. To disable this navigation mode, right click on the NVDA icon located in the notification area. Then go to *Preferences &gt;&gt; Mouse settings* and uncheck \&quot;Enable mouse tracking\&quot;.  Finally, it is advisable to change the default playback mode. On a webpage use the following keyboard shortcut `INS + v` to disable the \&quot;screen layout is preserved\&quot; and then save this configuration as default using the shortcut `INS + Ctrl + c`.  "
});

documentTitles["methodes-outils-lecteur-ecran.html#navigating-web-pages"] = "Navigating web pages";
index.add({
    url: "methodes-outils-lecteur-ecran.html#navigating-web-pages",
    title: "Navigating web pages",    
    body: "### Navigating web pages  The main useful shortcuts to test navigation in a web page using NVDA: - `Up` and `down` keys to go to the next or the prior line. - `Left` and `right` keys to move forward or backward one character - `Ctrl + Home` to move to the top of the page. - `Ctrl + End` to move to the bottom of the page. - `INS + F7` to display the heading list and the link list. - `Ctrl` to mute NVDA. - `INS + T` to read the page title. - `H` and `shift + H` to jump to the next title or the previous title (`H1` to` H6` title tags). - `B` and `shift + B` to move through buttons. - `C` and `shift + C` to move through drop down lists (Combobox). - `D` and `shift + D` to move through ARIA landmarks. - `E` and `shift + E` to move through text fields. - `F` and `shift + F` to move through forms. - `G` and `shift + G` to move through images (Graphics). - `I` and `shift + I` to move through HTML list items. - `K` and `shift + K` to move through links. - `L` and `shift + L` to move through HTML lists. - `M` and `shift + M` to move through frames and iframes. - `O` and `shift + O` to move through embedded objects (flash). Press INS + Space to start interaction. Esc to finish interaction. - `Q` and `shift + Q` to move through quotes (blockquote). - `R` and `shift + R` to move through radio buttons. - `T` and `shift + T` to move through tables. - `X` and `shift + X` to move through checkboxes. - `Spacebar` to check or uncheck a checkbox. - `INS + shift + S` allows to pause NVDA only in the current application. - `INS + Q` to exit NVDA.  Also note that NVDA has a speech viewer (*tools &gt;&gt; speech viewer*), it displays everything that is vocalized.  "
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
    body: "### Navigating web pages  The most useful shortcuts to test navigation in a Web page with JAWS: - `Up` and `down` keys to go to the next or the prior line. - `INS + T` to read the page title. - `INS + F5` to display the form fields list. - `INS + F6` to display header list. - `INS + F7` to display link list. - `Spacebar` to check or uncheck a checkbox. - `Ctrl` to mute Jaws.  "
});

documentTitles["methodes-outils-lecteur-ecran.html#getting-started-with-voiceover"] = "Getting Started with VoiceOver";
index.add({
    url: "methodes-outils-lecteur-ecran.html#getting-started-with-voiceover",
    title: "Getting Started with VoiceOver",    
    body: "## Getting Started with VoiceOver  VoiceOver screen reader is only available on Mac. It requires no installation since it is integrated directly into the system. To can activate VoiceOver from System Preferences &gt;&gt; accessibility. Or directly using the shortcut Command + `F5`.  "
});

documentTitles["methodes-outils-lecteur-ecran.html#navigating-web-pages"] = "Navigating web pages";
index.add({
    url: "methodes-outils-lecteur-ecran.html#navigating-web-pages",
    title: "Navigating web pages",    
    body: "### Navigating web pages  When launching VoiceOver, it displays an interactive guide to learn the key shortcuts. You should have a look at it. But here are the main shortcuts: - `Ctrl + Option + Right` and `Ctrl + Option + Left` to go to the next or the prior line. - `Ctrl + Option + U` to access the header, link, form field lists... (use the left and right arrows to navigate between lists). - `Ctrl` to mute VoiceOver. - `Ctrl + Option` &lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2016  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt;"
});



documentTitles["methodes-outils-extensions.html#browser-extensions"] = "Browser extensions";
index.add({
    url: "methodes-outils-extensions.html#browser-extensions",
    title: "Browser extensions",    
    body: "# Browser extensions  &lt;script&gt;$(document).ready(function () {     setBreadcrumb([         {\&quot;label\&quot;:\&quot;Test tools\&quot;, \&quot;url\&quot;: \&quot;./methodes-outils.html\&quot;},         {\&quot;label\&quot;:\&quot;Browser extensions\&quot;}]); });&lt;/script&gt;  &lt;span data-menuitem=\&quot;methodes-outils\&quot;&gt;&lt;/span&gt;  Some extensions allow you to perform automated tests on the displayed current page.  "
});

documentTitles["methodes-outils-extensions.html#axe-accessibility-audit"] = "aXe accessibility audit";
index.add({
    url: "methodes-outils-extensions.html#axe-accessibility-audit",
    title: "aXe accessibility audit",    
    body: "## aXe accessibility audit [aXe](http://www.deque.com/products/axe/) is an extension available for Chrome and Firefox for performing several tests based on the [WCAG](https://www.w3.org/WAI/intro/wcag).  ![screenshot of the aXe extension](images/aXe.png) &amp;nbsp;  "
});

documentTitles["methodes-outils-extensions.html#wave-toolbar"] = "Wave toolbar";
index.add({
    url: "methodes-outils-extensions.html#wave-toolbar",
    title: "Wave toolbar",    
    body: "## Wave toolbar [Wave toolbar](http://wave.webaim.org/extension/) is a toolbar extension for Chrome. It allows performing several tests on the current page just like aXe. Unlike the latter which shows errors in a tab of Web Inspector, here the errors are displayed directly on the page. A [bookmarklet (or favlet) for Wave](http://wave.webaim.org/help) is also available.  ![screenshot of the wave toolbar extension](images/wave.png) &lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2016  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt;"
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
    body: "## How to test?  One of the accessibility requirements is being able to enlarge the text up to 200%, only the text size, not the entire page. Actually when you use the browser default zoom it enlarges the entire page adding vertical and horizontal scrollbars. For example, reading a blog could be very tedious because you would have to scroll all the time to access the content.  Increasing only the text size does not necessarily add a horizontal scrollbar. You must verify that at this zoom level (200%), the text remains readable. No text must be truncated or superposed. Information must be accessible even if the presentation can be somewhat altered.   To enlarge only the text size, tick the \&quot;Zoom Text Only\&quot; option in Firefox. To enlarge the text by 200% press `Ctrl +` four times.     ![screenshot of the Zoom text only option, in Firefox](images/zoom-firefox.png)   "
});

documentTitles["methodes-outils-zoom.html#what-implications-for-development"] = "What implications for development?";
index.add({
    url: "methodes-outils-zoom.html#what-implications-for-development",
    title: "What implications for development?",    
    body: "## What implications for development?  If your page is not displayed correctly when you enlarge the text, it might be because you use the pixel as length unit for text size and container size (height or width of a `div`...). To fix display issues when the zoom is set to 200%, it is not necessary to remove all pixels units from all your code but correct only the unreadable content (replacing px by %, em or rem).  ** Example with 100% zoom **   ![screenshot of a page with 100% zoom](images/zoom.png)  &amp;nbsp;  ** Example with 200% zoom and using pixel as length unit**   The height of the elements is not based on the size of the text, they do not expand.  ![screenshot of a page with 200% zoom](images/zoom-ko.png)  &amp;nbsp;    ** Example with 200% zoom and using relative length units(rem)**   The height of the elements containing the text has been set with a relative unit which varies depending on the text size (rem). The elements become larger, the text remains readable.  ![screenshot of a page with 100% zoom](images/zoom-ok.png)  &amp;nbsp; More information in the **examples** section: [handling zoom, increasing the text size](examples/zoom/index.html). &amp;nbsp;   &lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2016  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt;"
});



documentTitles["exemples.html#examples"] = "Examples";
index.add({
    url: "exemples.html#examples",
    title: "Examples",    
    body: "# Examples       &lt;script&gt;$(document).ready(function () {     setBreadcrumb([{\&quot;label\&quot;:\&quot;Examples\&quot;}]); });&lt;/script&gt;  "
});

documentTitles["exemples.html#the-basics"] = "The basics";
index.add({
    url: "exemples.html#the-basics",
    title: "The basics",    
    body: "## The basics  &lt;ul class=\&quot;examples-list\&quot;&gt;     &lt;li&gt;         &lt;a href=\&quot;exemples/masquage/index.html\&quot;&gt;             &lt;img class=\&quot;hidden-sm-down\&quot; alt=\&quot;\&quot; src=\&quot;./images/exemples/masquage.png\&quot;&gt;&lt;span&gt;Accessible hiding&lt;/span&gt;         &lt;/a&gt;     &lt;/li&gt;     &lt;li&gt;         &lt;a href=\&quot;exemples/formulaire/index.html\&quot;&gt;             &lt;img class=\&quot;hidden-sm-down\&quot; alt=\&quot;\&quot; src=\&quot;./images/exemples/formulaire.png\&quot;&gt;&lt;span&gt;Handling forms&lt;/span&gt;         &lt;/a&gt;     &lt;/li&gt;     &lt;li&gt;         &lt;a href=\&quot;exemples/zoom/index.html\&quot;&gt;             &lt;img class=\&quot;hidden-sm-down\&quot; alt=\&quot;\&quot; src=\&quot;./images/exemples/zoom.png\&quot;&gt;&lt;span&gt;Handling Zoom, enlarging text size&lt;/span&gt;         &lt;/a&gt;     &lt;/li&gt; &lt;/ul&gt;  "
});

documentTitles["exemples.html#intermediate-level"] = "Intermediate level";
index.add({
    url: "exemples.html#intermediate-level",
    title: "Intermediate level",    
    body: "## Intermediate level  &lt;ul class=\&quot;examples-list\&quot;&gt;     &lt;li&gt;         &lt;a href=\&quot;exemples/role-dialog/role-dialog.html\&quot;&gt;             &lt;img class=\&quot;hidden-sm-down\&quot; alt=\&quot;\&quot; src=\&quot;./images/exemples/dialog1.png\&quot;&gt;&lt;span&gt;Dialog box 1/2&lt;/span&gt;         &lt;/a&gt;     &lt;/li&gt;     &lt;li&gt;         &lt;a href=\&quot;exemples/role-dialog2/role-dialog.html\&quot;&gt;             &lt;img class=\&quot;hidden-sm-down\&quot; alt=\&quot;\&quot; src=\&quot;./images/exemples/dialog2.png\&quot;&gt;&lt;span&gt;Dialog box 2/2&lt;/span&gt;         &lt;/a&gt;     &lt;/li&gt;     &lt;li&gt;         &lt;a href=\&quot;exemples/simple-menu/simple-menu.html\&quot;&gt;             &lt;img class=\&quot;hidden-sm-down\&quot; alt=\&quot;\&quot; src=\&quot;./images/exemples/menu.png\&quot;&gt;&lt;span&gt;Dropdown menu&lt;/span&gt;         &lt;/a&gt;     &lt;/li&gt; &lt;/ul&gt;  "
});

documentTitles["exemples.html#advanced-level"] = "Advanced level";
index.add({
    url: "exemples.html#advanced-level",
    title: "Advanced level",    
    body: "## Advanced level  &lt;ul class=\&quot;examples-list\&quot;&gt;     &lt;li&gt;         &lt;a href=\&quot;exemples/listbox/index.html\&quot;&gt;             &lt;img class=\&quot;hidden-sm-down\&quot; alt=\&quot;\&quot; src=\&quot;./images/exemples/listbox.png\&quot;&gt;&lt;span&gt;ARIA lists (listbox) 1/3&lt;/span&gt;         &lt;/a&gt;     &lt;/li&gt;     &lt;li&gt;         &lt;a href=\&quot;exemples/check-listbox/index.html\&quot;&gt;             &lt;img class=\&quot;hidden-sm-down\&quot; alt=\&quot;\&quot; src=\&quot;./images/exemples/listbox2.png\&quot;&gt;&lt;span&gt;ARIA lists (listbox) 2/3 (with checkboxes)&lt;/span&gt;         &lt;/a&gt;     &lt;/li&gt;      &lt;li&gt;         &lt;a href=\&quot;exemples/listbox-pattern-aria/index.html\&quot;&gt;             &lt;img class=\&quot;hidden-sm-down\&quot; alt=\&quot;\&quot; src=\&quot;./images/exemples/listbox3.png\&quot;&gt;&lt;span&gt;The listbox and patterns ARIA 3/3 (keyboard navigation)&lt;/span&gt;         &lt;/a&gt;     &lt;/li&gt;     &lt;li&gt;         &lt;a href=\&quot;exemples/files/index.html\&quot;&gt;             &lt;img class=\&quot;hidden-sm-down\&quot; alt=\&quot;\&quot; src=\&quot;./images/exemples/cloud.png\&quot;&gt;&lt;span&gt;File Explorer (cloud)&lt;/span&gt;         &lt;/a&gt;     &lt;/li&gt;     &lt;li&gt;         &lt;a href=\&quot;exemples/dynFocus/index.html\&quot;&gt;             &lt;img class=\&quot;hidden-sm-down\&quot; alt=\&quot;\&quot; src=\&quot;./images/exemples/live-region.png\&quot;&gt;&lt;span&gt;The live regions, dynamic content, handling focus and ARIA&lt;/span&gt;         &lt;/a&gt;     &lt;/li&gt; &lt;/ul&gt;  &lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2016  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt;"
});



documentTitles["contact.html#your-opinion-matters"] = "Your opinion matters ...";
index.add({
    url: "contact.html#your-opinion-matters",
    title: "Your opinion matters ...",    
    body: "# Your opinion matters ...    &lt;script&gt;$(document).ready(function () {     setBreadcrumb([{\&quot;label\&quot;:\&quot;Contact\&quot;}]); });&lt;/script&gt;  Have a bug or a feature request?    Please first check [the issues](https://github.com/Orange-OpenSource/a11y-guidelines/issues) and search for existing and closed issues. If your problem or idea is not addressed yet, please [open a new issue](https://github.com/Orange-OpenSource/a11y-guidelines/issues/new).  &amp;nbsp; &lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2016  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt;"
});



documentTitles["about.html#about"] = "About";
index.add({
    url: "about.html#about",
    title: "About",    
    body: "# About     &lt;script&gt;$(document).ready(function () {     setBreadcrumb([{\&quot;label\&quot;:\&quot;About\&quot;}]); });&lt;/script&gt;  Documentation under the [CC BY SA 3.0 license](https://github.com/Orange-OpenSource/a11y-guidelines/blob/master/LICENSE), source code of this site and examples are available [on github](https://github.com/Orange-OpenSource/a11y-guidelines).    The Orange logo and some images or screenshots are property of Orange:  Copyright (C) 2016 Orange SA All rights reserved   [List of the concerned files](/NOTICE.txt)  &amp;nbsp; &lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2016  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt;"
});


