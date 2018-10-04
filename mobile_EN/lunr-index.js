
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



documentTitles["criteria-android.html#android-accessibility-guide"] = "Android accessibility guide";
index.add({
    url: "criteria-android.html#android-accessibility-guide",
    title: "Android accessibility guide",    
    body: "# Android accessibility guide  &lt;script&gt;$(document).ready(function () {          setBreadcrumb([{\&quot;label\&quot;:\&quot;Mobile criteria\&quot;, \&quot;url\&quot;: \&quot;./criteria-mobile.html\&quot;},         {\&quot;label\&quot;:\&quot;Android accessibility guide\&quot;} 	]);     addSubMenu([         {\&quot;label\&quot;:\&quot;Android guide\&quot;,\&quot;url\&quot;:\&quot;criteria-mobile.html\&quot;, \&quot;expanded\&quot;: true},          {\&quot;label\&quot;:\&quot;iOS guide\&quot;,\&quot;url\&quot;:\&quot;criteria-ios.html\&quot;}     ]);        	 });&lt;/script&gt;  &lt;span data-menuitem=\&quot;criteria-mobile\&quot;&gt;&lt;/span&gt;  This guide aims to present the different accessibility criteria for getting an accessible Android application. Each criterion explains for whom it is important, when it can be implemented, why it is important and the corresponding accessibility rule. The criteria are explained through code snippets and real case examples. We invite you to install the [mDAN](./mdan.html) application for working examples of Talkback, the screen reader for Android, and other assistive tools. For more information on the tool (how to activate it, how to use it…) please refer to the [Talkback section](./talkback.html).  "
});

documentTitles["criteria-android.html#images"] = "Images";
index.add({
    url: "criteria-android.html#images",
    title: "Images",    
    body: "## Images **Target: ** everyone, especially people with visual impairments.   **When: ** from design and during development.  **Description: **  Images are often used to convey a lot of information. As the saying goes, a picture is worth a thousand words. The blind cannot see the images, it is important that they get an alternative that gives all the information carried by the image. In the case of an image containing text, this text will be the alternative. In the case of an image that provides information as a graph, a drawing or something else, the alternative will contain all necessary information conveyed by the image.    Some images are used for decorative purposes. These pictures do not require alternative. By default, on Android the pictures are not vocalized by the Talkback screen reader. The illustrations in the application are also considered decorative images. The rule is the same: there is no alternative text to add. Icons are, conversely, widely used as buttons for various features. So they need relevant text alternatives.    The alternative for an image is set via the `contentDescription` attribute (available to any child of `View`).  **Checklist: **  - The images conveying information must convey this information through their text alternative. - Decorative images have no alternative text.  **Users’ goal: **  Access the information included in images for users who cannot access it. Blocking point: an image without textual description is unusable by people with visual impairments or those that cannot display images (mobile, low bandwidth...).  ** Examples: **  &lt;img src=\&quot;./images/image_ex.png\&quot; alt=\&quot;complete example of decorative picture and informative icon\&quot; width=\&quot;400\&quot;&gt;      By decomposing the image:   - &lt;img src=\&quot;./images/montagnard.png\&quot; alt=\&quot;example of decorative picture\&quot; width=\&quot;256\&quot;&gt; no `contentDescription`   - &lt;img src=\&quot;./images/edit.png\&quot; alt=\&quot;example of informative icon: “parameters”\&quot; width=\&quot;48\&quot;&gt; `imageView.setContentDescription(\&quot;parameters\&quot;)`   - &lt;img src=\&quot;./images/settings.png\&quot; alt=\&quot;example of informative icon: “edition”\&quot; width=\&quot;48\&quot;&gt; `imageView.setContentDescription(\&quot;edit the image name\&quot;)`    "
});

documentTitles["criteria-android.html#colors"] = "Colors";
index.add({
    url: "criteria-android.html#colors",
    title: "Colors",    
    body: "## Colors  **Target: ** everyone, especially people with visual impairments, elderly people and people with vision problems (colour blindness, vision contrasts etc.)   ** When: ** from the design phase and during development.  **Description: **  Colours have a very important role in the transmission of information. Some colours are associated with concepts or feelings but we must never forget the part of the population that does not correctly distinguish colours.  **Checklist: **  - Do not use colour as the only way of conveying information, indicating an action, requesting a response or distinguishing an element. - The contrast between the colour of the background and the text must be at least 7:1 and 4.5:1 for large font (can be measured with the Colour Contrast Analyser tool).  **Users’ goal: **   Ease of reading for all users, especially the visually impaired, or people in a very bright environment (outdoors). Allow users not distinguishing colours or sensory information (colour blind, visually impaired, hearing impaired, mobile users in bright environment or in noisy environments...) to access the same information by other means.  ** Tools: ** The [Colour Contrast Analyser](http://www.paciellogroup.com/resources/contrastanalyser/) application can quickly measure colour contrast levels (free for Windows and Mac).    The [AccessibilityScanner application](https://play.google.com/store/apps/details?id=com.google.android.apps.accessibility.auditor) allows you to test quickly and simply the accessibility of your apps on some criteria including the colour contrast. Available for Android 6+.   ** Example of invalid contrast **   The label “film | 8:40 PM…” does not have enough contrast. It will not be readable by all users.    ![screenshot showing text with poor contrast](images/contraste.png)  ** Example of information conveyed through valid and invalid colour: **   &lt;img src=\&quot;./images/couleur.png\&quot; alt=\&quot;example of information conveyed through valid and invalid colour\&quot; width=\&quot;300\&quot;&gt;     "
});

documentTitles["criteria-android.html#alternative-text"] = "Alternative text";
index.add({
    url: "criteria-android.html#alternative-text",
    title: "Alternative text",    
    body: "## Alternative text  **Target: ** everyone, especially people with visual impairments.   ** When: ** from design, content writing and during development.  **Description: **  Text alternatives are at the core of mobile accessibility. Thanks to them, a visually impaired user can use an application without loss of information.    As for the images, it is important to add a text alternative when information is not available for the visually impaired/blind. This is the case of components that provide information by colour, shape, position, sound… On mobile, all components can have a text alternative, it is possible to enrich the native vocalization of an element, including a simple text.    Space on mobile is reduced, we often use abbreviations for text. However, this raises an issue for users of screen readers that vocalize abbreviations literally. To correct these vocalizations, simply place a text alternative on the text. This alternative contains the expanded text. Note that Talkback can recognize some common abbreviations. For example, “etc.” and “Dr.” are vocalized “etcetera” and “doctor”.    Some images are frequently associated with text to give information. This is the case of “unread messages” when a badge shows the number of messages to read and which describes a “message”. In this case, the solution is to set a text alternative on the text that gives all the necessary information. For example: “3 unread messages”. One can also set this alternative on the images but in this case we must make the text “invisible” to the screen reader.  The text alternative of an element is set via the `contentDescription` attribute (available to any child of `View`). For the buttons in the `ActionBar` (or `ToolBar`) the `title` attribute must be set.  **Checklist: **  - The elements that require alternative must have one. - The alternative text must be clear and understandable.  **Users’ goal: **  Provide access to application information to screen reader users.  ** Example: **  Below is a common example of an icon that is associated with a text (badge) to add information. In our case, the “mail” icon associated with the “3” in the badge means that we have “3 unread mails”. If no text alternative is added, two vocalizations will be read “unlabelled button” and “3”. It is obvious that we must add text alternatives. &lt;img src=\&quot;./images/alt.png\&quot; alt=\&quot;icon example coupled with the text that requires a text alternative\&quot; width=\&quot;80\&quot; class=\&quot;pull-left\&quot;&gt; &lt;pre&gt;&lt;code class=\&quot;java\&quot;&gt;containerView.setContentDescription(\&quot;3 unread mails button\&quot;); //We add a complete alternative (dynamically built before) on the container containerView.setImportantForAccessibility(View.IMPORTANT_FOR_ACCESSIBILITY_YES); //The container is a View, not visible by the default accessibility API. We make it visible. mailImageView.setImportantForAccessibility(View.IMPORTANT_FOR_ACCESSIBILITY_NO); //We hide the button icon to avoid information redundancy badgeTextView.setImportantForAccessibility(View.IMPORTANT_FOR_ACCESSIBILITY_NO); //The text is hidden to avoid information redundancy&lt;/code&gt;&lt;/pre&gt;      "
});

documentTitles["criteria-android.html#title-and-header"] = "Title and header";
index.add({
    url: "criteria-android.html#title-and-header",
    title: "Title and header",    
    body: "## Title and header  ** Target: ** everyone   ** When: ** as of design and during content writing.  **Description: **   The page title is the first element vocalized or seen on a mobile screen. It makes navigation easier for everyone: at any time, we know where we are in the application.   A common mistake is to set the same title for every page of an application (or even no title at all).  **Checklist: **   - Each screen must have its own title allowing us to know where we are in the application navigation (together with the back button).  **Users’ goal: **  Allow users to identify the topic of a page, to locate and get a clear idea of the content of the page without having to read it.  ** Invalid example: **  &lt;img src=\&quot;./images/header.png\&quot; alt=\&quot;example of irrelevant title (no title)\&quot; width=\&quot;300\&quot;&gt;     "
});

documentTitles["criteria-android.html#element-states"] = "Element states";
index.add({
    url: "criteria-android.html#element-states",
    title: "Element states",    
    body: "## Element states  **Target: ** everyone, especially people with visual impairments.   ** When: ** during development.  **Description: **  If an element does not vocalize its status, nature or state, the Talkback user is unable to understand what is happening on the screen. Not specifying that a view is unfolded or that we have tabs are very common examples.    Common mistake: tabs. By default, tabs in Android do not give information on their nature and their state. It is therefore the responsibility of the developer to provide this information to the user via the corresponding accessibility attributes (`contentDescription`). In this case, a good alternative for the title of a tab can be “tab, tab title – 1 of 3 – selected”.    Another common instance of elements that do not vocalize their state: expandable views. Again, thanks to the text alternative title of the view, we can vocalize the state of the view for Talkback users.    To set this kind of information, use the `contentDescription` attribute (availble to any child of `View`).  **Checklist: **  - Any item whose status changes when using the application must vocalize its status through its text alternative. For example, an item that can be selected/unselected must vocalize its state through a text alternative.  **Users’ goal: **  Allow screen reader users to access components’ information, their status, their nature so they can use them without any difficulties.  ** Example: **  &lt;img src=\&quot;./images/tabs.png\&quot; alt=\&quot;example of tabs that do not provide information on their status and nature of default\&quot; width=\&quot;400\&quot;&gt;   To see a code snippet that corrects this issue, please refer to the corresponding page of the [Developer Guide](./dev-android.html#alternatives-textuelles).     "
});

documentTitles["criteria-android.html#standard-components"] = "Standard components";
index.add({
    url: "criteria-android.html#standard-components",
    title: "Standard components",    
    body: "## Standard components  **Target: ** everyone.   ** When: ** when choosing the libraries and during development.  **Description: **  Accessibility is taken into account in native components (most of the time). Additionally, the use of standard components allows the user to be in a situation or behaviour that they are already used to. Navigation through a standard interface is more comfortable.    Use native components as much as possible and change their appearance. If no standard component corresponds to the need, create a dedicated component based on a standard component while keeping the navigation and accessibility consistency.    A common example is the use of a custom component for the side navigation menu (`NavigationDrawer`). Some of the available libraries are not accessible with a screen reader. Unfortunately, this makes the application inaccessible.  **Users’ goal: **  Improve user navigation.  ** Technical Objective: **  Improve overall maintainability. Reduce development time.     "
});

documentTitles["criteria-android.html#touch-target"] = "Touch target";
index.add({
    url: "criteria-android.html#touch-target",
    title: "Touch target",    
    body: "## Touch target  **Target: ** everyone, especially people with motor impairments   ** When: ** as of design and during development.  **Description: **    If a touch target of a component is too small, it can prevent some users from enjoying the application. This can lead to frustration that can result in uninstalling it. Each clickable element must have a large enough touch target.  **Checklist: **  - 48 dp is the recommended touch target size for elements according to Google (height and width, with an 8 dp margin around the element).  **Users’ goal: **  Improve user experience.  **Tools:**   The [AccessibilityScanner application](https://play.google.com/store/apps/details?id=com.google.android.apps.accessibility.auditor) allows you to test quickly and simply the accessibility of your apps on some criteria including the touch target size. Available for Android 6+.   ** Valid example: **  In the examples below, the black box corresponds to the size of the interactive area.   &lt;img src=\&quot;./images/clic_ok.png\&quot; alt=\&quot;interactive component example with a fairly large touch target\&quot; width=\&quot;300\&quot;&gt;  ** Invalid example: **  &lt;img src=\&quot;./images/clic_ko.png\&quot; alt=\&quot;interactive component example with a small touch target\&quot; width=\&quot;300\&quot;&gt;   "
});

documentTitles["criteria-android.html#ghost-element"] = "Ghost element";
index.add({
    url: "criteria-android.html#ghost-element",
    title: "Ghost element",    
    body: "## Ghost element  **Target: ** people with visual impairments.   ** When: ** during development.  **Description: **    Although invisible on the screen, some elements can be vocalized by the screen reader (elements positioned outside the visible area or hidden by other elements). The superposition of screens is frequent when designing mobile apps but it generates very heavy accessibility problems if it is not done properly from the start. A screen reader such as Talkback is able to read information from a view that is placed “below” another. But if the user is able to interact with this view, it totally disturbs their navigation which quickly becomes impossible.    Common problem: fragments. A fragment is a component that can be easily stacked on top of another. Improper use of fragments may lead to serious problems when navigating with a screen reader.    Read the article on the [use of fragments](https://developer.android.com/guide/components/fragments.html) for more information.  **Checklist: **  - TalkBack must not vocalize any undesirable element that belongs to another view than the one being used.  **Users’ goal: **  Allow screen reader users to navigate within the application without having hidden elements disturb the reading of the current view.  ** Invalid example: **  In the example below, the green frame represents Talkback’s focus. It vocalizes the content behind the current view (vocalization is displayed at the bottom of the screen). &lt;img src=\&quot;./images/ghost.png\&quot; alt=\&quot;ghost element example\&quot; width=\&quot;300\&quot;&gt;   "
});

documentTitles["criteria-android.html#text-size"] = "Text size";
index.add({
    url: "criteria-android.html#text-size",
    title: "Text size",    
    body: "## Text size  **Target: ** everyone, especially people with visual impairments.   ** When: ** as of design and during development.  **Description: **  The user has the possibility of increasing the text size via an accessibility option. In order to make the application behave according to this option, it is necessary to use dynamic text sizes that adjust based on user settings. Too small text often won’t be noticed by some visually impaired users.    The application must implement dynamic text sizes, ensure good responsiveness of the display areas to text enlargement (containers that fit the size of their content). You should also ensure a minimum size for text (14sp).    In order for the “Huge font size” option to properly interact with the application, several points are to be respected during the development: - Use dynamic font size: the “sp”. This unit, specific to Android, allows to have a font size proportional to the pixel density of the display. It is highly recommended to use it for text, if only for a uniform design on all types of Android device. - Manage content overflows: A common mistake is to use a dynamic text size (“sp”) but not to pay attention to the container size. If the text gets bigger, the container must adapt so there is no overflow. One can perfectly play with the `min-height` and `height` attributes for correct result (the `height` set to `wrap_content` and `min-height` set to the default desired height).  **Checklist: **  - The application correctly responds to the Huge font size option. - Minimum text size must be 14sp.  **Tools:**   The [AccessibilityScanner application](https://play.google.com/store/apps/details?id=com.google.android.apps.accessibility.auditor) allows you to test quickly and simply the accessibility of your apps on some criteria including text size. Available for Android 6+.   **Users’ goal: **  Allow users (visually impaired, mobility, elderly people…) to increase the text size for easier access to information.  ** Example: **  &lt;img src=\&quot;./images/text.png\&quot; alt=\&quot;example using dynamic font size\&quot; width=\&quot;300\&quot;&gt;   "
});

documentTitles["criteria-android.html#content-control"] = "Content Control";
index.add({
    url: "criteria-android.html#content-control",
    title: "Content Control",    
    body: "## Content Control  **Target: ** everyone, especially people with visual and cognitive deficiencies.   ** When: ** when design and during development.  **Description: **  On mobile, screen readers try to notify the user when there is a context change. In some cases, it can give constant vocalizations, and can therefore become inaudible, or prevent any user action. The user must control the content at all times. This is especially true with interactive content. So avoid video players launching directly in full screen mode, or videos starting automatically without user action, or a carousel scrolling automatically etc.  **Checklist: **  - All interactive content must be controllable by the user (pausing a carousel, adding an accessible button to exit full-screen mode, etc.).  **Users’ goal: **  Allow users to keep control on the application. Allow the screen reader user to avoid noise pollution which may affect navigation.  ** Technical goal: **  Improve natural indexation.   "
});

documentTitles["criteria-android.html#changing-content"] = "Changing content";
index.add({
    url: "criteria-android.html#changing-content",
    title: "Changing content",    
    body: "## Changing content  **Target: ** everyone, especially people with visual impairments.   ** When: ** during development.  **Description: **  When content is dynamically modified after a user action, the screen reader must be notified. Without any voice feedback, the user does not know that the content has changed.   If the content has changed dynamically after a user action, it is important that the screen reader is notified so that it triggers a vocalization. E.g. refreshing a list or a timer.  A simple vocalization can be enough to warn the user. It is very easy to trigger vocalizations with Talkback. Warning: we are talking about the vocalization when Talkback is enabled and not &lt;abbr&gt;TTS&lt;/abbr&gt; (Text To Speech), the latter can operate whether Talkback is on or not. Just call the `announceForAccessibility` method with the parameter `id` of the string to vocalize. Note: the `announceForAccessibility` method is available on any item that inherits from` View` and is vocalized in the default system language.  It is also possible to specify that a view is a live region, that is to say that its content is subject to change dynamically and should in this case notify the Accessibility API. This will result in generating vocalizations with Talkback for example. A typical use case: on a form, if the user makes a mistake and an error message appears, the view containing the message must be defined as a live region. You must use the `setAccessibilityLiveRegion` method that takes a mode parameter for the live region. There are 3 modes: - `ACCESSIBILITY_LIVE_REGION_NONE`: this view is not a live region. This is the default for most views. - `ACCESSIBILITY_LIVE_REGION_POLITE`: when a change occurs, vocalizations are triggered by the changes. These vocalizations are “polite”; they have lower priority than system vocalizations for example. - `ACCESSIBILITY_LIVE_REGION_ASSERTIVE`: when a change occurs, vocalizations are triggered by the changes. These vocalizations are “assertive”; they have the highest priority and are immediately vocalized. Note the `setAccessibilityLiveRegion` method is available on any class that inherits from `View`.  **Checklist: **  - With a screen reader, ensure that dynamic changes are vocalized.  **Users’ goal: **  Provide access to changing content to screen reader users.   "
});

documentTitles["criteria-android.html#horizontal-scroll"] = "Horizontal scroll";
index.add({
    url: "criteria-android.html#horizontal-scroll",
    title: "Horizontal scroll",    
    body: "## Horizontal scroll  **Target: ** everyone, especially people with visual impairments.   ** When: ** as of design and during development.  **Description: **  A horizontal scroll can be very difficult to detect if no visual feedback is displayed to help the user understand that there are several pages. Do not hesitate to display an element to indicate a horizontal scroll (dots for example). When necessary, also add “next” and “previous” buttons.  **Checklist: **  - The horizontal scrolls are visually indicated. - When the screen reader is on, a mechanism enables the user to go from page to page when a horizontal scroll is present.  **Users’ goal: **  Provide a visual indication to users when there is horizontal scroll. Allow screen reader users to scroll horizontally.  &lt;div class=\&quot;sideToSide row\&quot;&gt; &lt;div class=\&quot;col-sm-6 col-xs-12\&quot;&gt; ** Valid example: **  &lt;img src=\&quot;./images/scroll_h1.png\&quot; alt=\&quot;Example with accessible horizontal scroll\&quot; width=\&quot;300\&quot;&gt; &lt;/div&gt; &lt;div class=\&quot;col-sm-6 col-xs-12\&quot;&gt; ** Invalid example: **  &lt;img src=\&quot;./images/scroll_h2.png\&quot; alt=\&quot;example of invalid horizontal scroll\&quot; width=\&quot;300\&quot;&gt; &lt;/div&gt; &lt;/div&gt;  "
});

documentTitles["criteria-android.html#form"] = "Form";
index.add({
    url: "criteria-android.html#form",
    title: "Form",    
    body: "## Form  **Target: ** everyone, especially people with visual impairments.   ** When: ** from design and during development.  **Description: **  Binding the form fields with their labels provides an additional vocalization allowing the user to understand what happens when filling out a form field.    There are 2 major techniques to achieve this:  - `LabelFor`: helps indicated that a view is the label of another view. This method takes the `id` of the view that is being labelled a a parameter. This method can be used with almost any type of form field. We can also use the `android:labelFor` &lt;abbr&gt;xml&lt;/abbr&gt; attribute or programmatically `setLabelFor`.  - `Hint`: add an example text when the text field is empty. This method only works for `TextView`. Supports setting the id to a string. Can be used with the `android:hint` &lt;abbr&gt;xml&lt;/abbr&gt; attribute or programmatically `setHint`.  **Checklist: **  - Form fields must be linked to a label if it is visible, otherwise a `hint` is displayed.  **Users’ goal: **  Improve navigation and overall understanding of the page, because form fields describing the expected input are easier to fill for visually impaired users.  "
});

documentTitles["criteria-android.html#reading-order"] = "Reading order";
index.add({
    url: "criteria-android.html#reading-order",
    title: "Reading order",    
    body: "## Reading order  **Target: ** people with visual impairments.   ** When: ** during development.  **Description: **  The reading order allows the screen reader user to get their bearings and to ensure functional coherence. It is therefore important to pay attention to it.    By default, the reading order of voice synthesis depends on several parameters: the “logical” reading order (in France), from left to right and top to bottom, and the parsing of &lt;abbr&gt;xml&lt;/abbr&gt; (order of elements declaration). However, there are some cases where the screen reader cannot determine the correct order; it then uses the order in which elements are defined, leading to inconsistent vocalizations.    It is quite possible to redefine the reading order with two attributes: - `accessibilityTraversalAfter`: sets the `id` of a view after which this one is visited in accessibility traversal. A screen-reader must visit the content of the other view before the content of this one. - `accessibilityTraversalBefore`: sets the `id` of a view before which this one is visited in accessibility traversal. A screen-reader must visit the content of this view before the content of the one it precedes.  Note: These attributes can be used directly in the &lt;abbr&gt;xml&lt;/abbr&gt; but also in the code via the `setAccessibilityTraversalBefore` and `setAccessibilityTraversalAfter` methods. These methods are available for any element that inherits from `View`.  **Checklist: **  - Traversal order (Talkback) is logical and coherent.  **Users’ goal: **  Ensure logic order and coherent reading to screen reader users.  ** Example: ** In this example, the default playback order depends completely on the implementation  and on the order of element declaration. In this case: `vol+, vol-, 1, 2, 3, 4, 5, 6, 7, 8, 9, p+, p-, 0`. A more consistent reading order is `1, 2, 3, 4, 5, 6, 7, 8, 9, 0, vol +, vol-, p + p-`.  &lt;img src=\&quot;./images/order.png\&quot; alt=\&quot;Example of reading order\&quot; width=\&quot;300\&quot;&gt; &lt;pre&gt;&lt;code class=\&quot;java\&quot;&gt;volupButton.setAccessibilityTraversalAfter(myView.findViewById(R.id.remote0).getId()); voldownButton.setAccessibilityTraversalAfter(myView.findViewById(R.id.volup).getId()); channelupButton.setAccessibilityTraversalAfter(myView.findViewById(R.id.voldown).getId()); channeldownButton.setAccessibilityTraversalAfter(myView.findViewById(R.id.channelup).getId()); [...]&lt;/code&gt;&lt;/pre&gt;   "
});

documentTitles["criteria-android.html#focus-based-navigation"] = "Focus-based navigation";
index.add({
    url: "criteria-android.html#focus-based-navigation",
    title: "Focus-based navigation",    
    body: "## Focus-based navigation  **Target: ** everyone, especially people with motor impairments or people using keyboard.   ** When: ** as of design and during development.  **Description: **  Focus-based navigation is very useful for people with motor or cognitive difficulties. This navigation allows to go through the interactive elements (elements on which an action can be performed). This is the kind of navigation that you can have with a Bluetooth keyboard paired to a smartphone.  To handle focus-based navigation, make sure to: - Allow interactive elements to receive the focus: focus-based navigation only concerns interactive elements. If, for example, your application has clickable custom views, it must be ensured that these views are focusable by setting the `focusable` attribute to `true`. - Manage the focus order: through the `nextFocusDown`, `nextFocusUp`, `nextFocusRight`, `nextFocusLeft` options, you can specify what view should take the focus when using the down, up, right and left arrows. - Managing the focus display: interactive elements must have the `state_focused` defined and must be easily distinguishable when having the focus.  Note: `nextFocusDown`, `nextFocusUp`, `nextFocusRight`, `nextFocusLeft, `focusable` and other focus management options are available either in the &lt;abbr&gt;xml&lt;/abbr&gt; or programmatically.    For more information on the [focus management on Android](http://developer.android.com/guide/topics/ui/accessibility/apps.html#focus-nav).   **Checklist: **  - The focusing order of navigation (keyboard) is logical and coherent. - It should be visually easy to determine the element that has focus.  **Users’ goal: **  Allow keyboard/dock tablet/sequential navigation device users to access the application.    &lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2016  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt;"
});



documentTitles["criteria-ios.html#ios-accessibility-guide"] = "iOS accessibility guide";
index.add({
    url: "criteria-ios.html#ios-accessibility-guide",
    title: "iOS accessibility guide",    
    body: "# iOS accessibility guide  &lt;script&gt;$(document).ready(function () {          setBreadcrumb([{\&quot;label\&quot;:\&quot;Mobile criteria\&quot;, \&quot;url\&quot;: \&quot;./criteria-mobile.html\&quot;},         {\&quot;label\&quot;:\&quot;iOS accessibility guide\&quot;} 	]);     addSubMenu([         {\&quot;label\&quot;:\&quot;Android guide\&quot;,\&quot;url\&quot;:\&quot;criteria-android.html\&quot;},          {\&quot;label\&quot;:\&quot;iOS guide\&quot;,\&quot;url\&quot;:\&quot;criteria-mobile.html\&quot;, \&quot;expanded\&quot;: true}     ]);      });&lt;/script&gt;  &lt;span data-menuitem=\&quot;criteria-mobile\&quot;&gt;&lt;/span&gt;  This guide aims to present the different accessibility criteria for getting an accessible iOS application. Each criterion explains for whom it is important, when it can be implemented, why it is important and the corresponding accessibility rule. The criteria are explained through code snippets and real cases examples. We invite you to install the [mDAN](./mdan.html) application for working examples of VoiceOver, the screen reader for iOS, and other assistive tools. For more information on the tool (how to activate it, how to use it…) please refer to the [VoiceOver section](./voiceover.html).  Note: code snippets are written in Swift.  "
});

documentTitles["criteria-ios.html#images"] = "Images";
index.add({
    url: "criteria-ios.html#images",
    title: "Images",    
    body: "## Images **Target: ** everyone, especially people with visual impairments.   **When: ** as of design and during development.  **Description: **  Images are often used to convey a lot of information. As the saying goes, a picture is worth a thousand words. The blind cannot see the images, it is important that they have an alternative that gives all the information conveyed by the image. In the case of an image containing text, this text will be used for the alternative. In the case of an image that provides information as a graph, drawing or other, the alternative will contain all necessary information in the image.    Some images are used for decorative purposes. These pictures do not require alternative. By default, on iOS pictures are not vocalized by the VoiceOver screen reader. Illustrations in the application are also considered decorative images. The rule is the same: there is no alternative text to add. Icons are, conversely, widely used as buttons for various features. So they need relevant text alternatives.    The alternative of an image is set via the `accessibilityLabel` attribute (using the `UIAccessibility` protocol available on any children of `UIView`).  **Checklist: **  - Images with information must convey this information through their text alternative. - Decorative images have no alternative text.  **Users’ goal: **  Access the information included in images for users who cannot access it. Blocking point: an image without textual description is unusable by people with visual impairments or those that cannot display images (mobile, low bandwidth…).  ** Examples: **  &lt;img src=\&quot;./images/image_ex.png\&quot; alt=\&quot;complete example of decorative picture and informative icon\&quot; width=\&quot;400\&quot;&gt;      By decomposing the image:   - &lt;img src=\&quot;./images/montagnard.png\&quot; alt=\&quot;example of decorative picture\&quot; width=\&quot;256\&quot;&gt; no `accessibilityLabel`   - &lt;img src=\&quot;./images/edit.png\&quot; alt=\&quot;example of informative icon - parameters\&quot; width=\&quot;48\&quot;&gt; `buttonView.accessibilityLabel = \&quot;example_image_edit_accessibilityLabel\&quot;.localized`   - &lt;img src=\&quot;./images/settings.png\&quot; alt=\&quot;example of informative icon - edition\&quot; width=\&quot;48\&quot;&gt; `buttonView.accessibilityLabel = \&quot;example_image_settings_accessibilityLabel\&quot;.localized`    "
});

documentTitles["criteria-ios.html#colours"] = "Colours";
index.add({
    url: "criteria-ios.html#colours",
    title: "Colours",    
    body: "## Colours  ** Target: ** everyone, especially people with visual impairments, elderly people and people with vision problems (colour blindness, vision contrasts etc.)   ** When: ** as of the design phase and during development.  **Description: **  Colours have a very important role in the transmission of information. Some colours are associated with concepts or feelings but we must never forget the part of the population that does not correctly distinguish colours.  **Checklist: **  - Do not use colour as the only way of conveying information, indicating an action, requesting a response or distinguishing an element. - The contrast between the colour of the background and the text must be at least 7:1 and 4.5:1 for large font (can be measured with the Colour Contrast Analyser tool).  **Users’ goal: **   Ease of reading for all users, especially the visually impaired, or people in a very bright environment (outdoors). Allow users who cannot distinguish colours or sensory information (colour blind, visually impaired, hearing impaired, mobile users in bright environment or in noisy environments…) to access the same information by other means.  ** Tools: ** The [Colour Contrast Analyser](http://www.paciellogroup.com/resources/contrastanalyser/) application can quickly measure colour contrast levels (free for Windows and Mac).    ** Example of invalid contrast **   The label “film | 8:40 PM…” does not have enough contrast. It will not be readable by all users.    ![screenshot showing text with poor contrast](images/contraste.png)  ** Example of information conveyed through valid and invalid colour: **   &lt;img src=\&quot;./images/couleur_ios.png\&quot; alt=\&quot;example of information conveyed through valid and invalid colour\&quot; width=\&quot;300\&quot;&gt;     "
});

documentTitles["criteria-ios.html#alternative-text"] = "Alternative text";
index.add({
    url: "criteria-ios.html#alternative-text",
    title: "Alternative text",    
    body: "## Alternative text  ** Target: ** everyone, especially people with visual impairments.   ** When: ** as of design, content writing and during development.  **Description: **  Text alternatives are at the core of mobile accessibility. Thanks to them, a visually impaired user can use an application without loss of information.    As for images, it is important to add a text alternative when information is not available for the visually impaired/blind. This is the case of components that provide information by colour, shape, position, sound… On mobile, all components can have a text alternative, it is possible to enrich the native vocalization of an element, including a simple text.    Space on mobile is reduced, we often use abbreviations for text. However, this raises an issue for users of screen readers that vocalize abbreviations literally. To correct these vocalizations, simply place a text alternative on the text. This alternative contains the expanded text. Note that VoiceOver can recognize some common abbreviations. For example, “etc.” is vocalized “etcetera”.    Some images are frequently associated with text to give information. This is the case of “unread messages” when a badge shows the number of messages to read and which describes a “message”. In this case, the solution is to set a text alternative on the text that gives all the necessary information. For example: “3 unread messages”. One can also set this alternative on the images but in this case we must make the text “invisible” to the screen reader.  The text alternative of an element is set via the `accessibilityLabel`, `accessibilityHint`, `accessibilityValue` and `accessibilityTrait` (using the `UIAccessibility` protocol available on any child of `UIView`).   The order of vocalization is as follows: label, value, trait and hint. This order cannot be changed and vocalization is done only once.   For more technical information on these attributes, please refer to the [textual alternatives on the developer guide](./dev-ios.html#alternatives-textuelles).  **Checklist: **  - Elements that require an alternative should have one. - The alternative text must be clear and understandable.  **Users’ goal: **  Provide access to application information to screen reader users.  ** Example: **  Below is a common example of an icon that is associated with a text (badge) to add information. In our case, the “mail” icon associated with the “3” in the badge makes us understand that we have “3 unread mails”. If no text alternative is added, two vocalizations will be read “unlabelled button” and “3”. It is obvious that we must add text alternatives. &lt;img src=\&quot;./images/alt.png\&quot; alt=\&quot;icon example coupled with the text that requires a text alternative\&quot; width=\&quot;80\&quot; class=\&quot;pull-left\&quot;&gt; &lt;pre&gt;&lt;code class=\&quot;swift\&quot;&gt;cell.mailImageView.accessibilityLabel = cell.badgeLabel.text! + \&quot; \&quot; + \&quot;exemple_textualAlternative_textImage_accessibilityLabel\&quot;.localized //We add the complete alternative cell.badgeLabel.isAccessibilityElemement = false //The text is hidden to avoid information redundancy &lt;/code&gt;&lt;/pre&gt;      "
});

documentTitles["criteria-ios.html#title-and-header"] = "Title and header";
index.add({
    url: "criteria-ios.html#title-and-header",
    title: "Title and header",    
    body: "## Title and header  ** Target: ** everyone   ** When: ** as of design and during content writing.  **Description: **   The page title is the first element vocalized or seen on a mobile screen. It makes navigation easier for everyone: at any time, we know where we are in the application.   A common mistake is to set the same title for every page of an application (or even no title at all).  iOS headers allow structuring pages providing additional information. This information is useful to the accessibility API because VoiceOver can navigate through the headers (VoiceOver wheel, header mode). This allows the user to browse the page faster. To set an item as a header, set the `accessibilityTraits` attribute on the `accessibilityTraitHeader` value.  **Checklist: **   - Each screen must have its own title allowing us to know where we are in the application navigation (together with the back button). - The elements identified as headers must be declared as headers for assistive tools.  **Users’ goal: **  Allow users to identify the topic of a page, to locate and get a clear idea of the content of the page without having to read it. Ease the navigation.  ** Invalid example: **  &lt;img src=\&quot;./images/header_ios.png\&quot; alt=\&quot;example of irrelevant title (no title)\&quot; width=\&quot;300\&quot;&gt;     "
});

documentTitles["criteria-ios.html#element-states"] = "Element states";
index.add({
    url: "criteria-ios.html#element-states",
    title: "Element states",    
    body: "## Element states  ** Target: ** everyone, especially people with visual impairments.   ** When: ** during development.  **Description: **  If an element does not vocalize its status, nature or state, the VoiceOver user is unable to understand what is happening on the screen. Not specifying that a view is unfolded or that we have tabs are very common examples.    By default, tabs in iOS are accessible. Meanwhile, it is very common to customize the tabs’ look and feel, so it is the developer’s responsibility to provide the tab state and nature to the user via the corresponding accessibility attributes. An example is available in the “Standard components” section.    Another common instance of elements that do not vocalize their state : expandable views. Again, thanks to the text alternative title of the view, we can vocalize the state of the view for VoiceOver users.    To set this kind of information, use the `accessibilityLabel` and `accessibilityTrait` attributes.  **Checklist: **  - Any item whose status changes when using the application must vocalize its status through its text alternative. For example, an item that can be selected/unselected must vocalize its state through a text alternative.  **Users’ goal: **  Allow screen reader users to access components’ information, their status, their nature so they can use them without any difficulties.  ** Example: **  &lt;img src=\&quot;./images/expandable_list.png\&quot; alt=\&quot;example of an expandable list that needs text alternative\&quot; width=\&quot;250\&quot; class=\&quot;pull-left\&quot;&gt; &lt;pre&gt;&lt;code class=\&quot;swift\&quot;&gt;if(accessibleIsFold) {    accordionHeaderView.accessibilityHint = \&quot;example_elementState_foldArea_open_accessibilityHint\&quot;.localized //\&quot;Click here to open the view\&quot; }else{   accordionHeaderView.accessibilityHint = \&quot;example_elementState_foldArea_close_accessibilityHint\&quot;.localized //\&quot;Click here to close the view\&quot; }&lt;/code&gt;&lt;/pre&gt;     "
});

documentTitles["criteria-ios.html#standard-components"] = "Standard components";
index.add({
    url: "criteria-ios.html#standard-components",
    title: "Standard components",    
    body: "## Standard components  ** Target: ** everyone.   ** When: ** when choosing the libraries and during development.  **Description: **  Accessibility is taken into account in native components (most of the time). Additionally, the use of standard components allows the user to be in a situation or behaviour that they are already used to. Navigation through a standard interface is more comfortable.    Use native components as much as possible and change their appearance. If no standard component corresponds to the need, create a dedicated component based on a standard component while keeping the navigation and accessibility consistency.  **Users’ goal: **  Improve user navigation.  ** Technical Objective: **  Improve overall maintainability. Reduce development time.     "
});

documentTitles["criteria-ios.html#touch-target"] = "Touch target";
index.add({
    url: "criteria-ios.html#touch-target",
    title: "Touch target",    
    body: "## Touch target  ** Target: ** everyone, especially people with motor impairments   ** When: ** as of design and during development.  **Description: **    If a touch target of a component is too small, it can prevent some users from enjoying the application. This can lead to frustration that can result in uninstalling it. Each clickable element must have a large enough touch target.  **Checklist: **  - 44 pt is the recommended touch target size for elements according to Apple (height and width); [see more information on the Apple guidelines](https://developer.apple.com/ios/human-interface-guidelines/visual-design/adaptivity-and-layout/).  **Users’ goal: **  Improve user experience.  ** Valid example: **  In the examples below, the black box corresponds to the size of the interactive area.   &lt;img src=\&quot;./images/clic_ok.png\&quot; alt=\&quot;interactive component example with a fairly large touch target\&quot; width=\&quot;300\&quot;&gt;  ** Invalid example: **  &lt;img src=\&quot;./images/clic_ko.png\&quot; alt=\&quot;interactive component example with a small touch target\&quot; width=\&quot;300\&quot;&gt;   "
});

documentTitles["criteria-ios.html#ghost-element"] = "Ghost element";
index.add({
    url: "criteria-ios.html#ghost-element",
    title: "Ghost element",    
    body: "## Ghost element  ** Target: ** people with visual impairments.   ** When: ** during development.  **Description: **    Although invisible on the screen, some elements can be vocalized by the screen reader (elements positioned outside the visible area or hidden by other elements). The superposition of screens is frequent when designing mobile apps but it generates very heavy accessibility problems if it is not done properly from the start. A screen reader such as VoiceOver is able to read information from a view that is placed “below” another. But if the user is able to interact with this view, it totally disturbs navigation and it quickly becomes impossible.    Ghost elements are very common when creating custom alert dialogs. However, this kind of component can be accessible. Please refer to the [corresponding section on the developer guide](./dev-ios.html#masquer-des-l-ments-l-accessibilit-)     Read the article on the [use of fragments](https://developer.android.com/guide/components/fragments.html) for more information.  **Checklist: **  - With the screen reader, no invisible element must be read or take focus when reading a page.  **Users’ goal: **  Allow screen reader users to navigate within the application without having hidden elements disturbing the reading of the current view.   ** Invalid example: **  In the example below, the custom alert dialog has a ghost element. When VoiceOver is activated it vocalizes the content behind the current view (shown in black).   &lt;img src=\&quot;./images/ghost_ios.png\&quot; alt=\&quot;ghost element example\&quot; width=\&quot;300\&quot;&gt;   "
});

documentTitles["criteria-ios.html#content-control"] = "Content Control";
index.add({
    url: "criteria-ios.html#content-control",
    title: "Content Control",    
    body: "## Content Control  ** Target: ** everyone and especially people with visual and cognitive deficiency.   ** When: ** as of design and during development.  **Description: **  On mobile, screen readers try to notify the user when there is a context change. In some cases, it can give constant vocalizations, and can therefore become inaudible, or prevent any user action. The user must control the content at any time. This is especially true with interactive content. So avoid video player launching directly in full screen mode or videos starting automatically without user action or a carousel scrolling automatically for instance.  **Checklist: **  - All interactive content must be controlled by the user (adding an accessible button to exit full-screen mode for instance).  **Users’ goal: **  Allow users to keep control on the application. Allow the screen reader user to avoid noise pollution which may affect navigation.  ** Technical Objective: **  Improve natural indexation.   "
});

documentTitles["criteria-ios.html#changing-content"] = "Changing content";
index.add({
    url: "criteria-ios.html#changing-content",
    title: "Changing content",    
    body: "## Changing content  ** Target: ** everyone, especially people with visual impairments.   ** When: ** during development.  **Description: **  When content is dynamically modified after a user action, the screen reader must notify it. Without any voice feedback, the user does not know that the content has changed.   If the content has changed dynamically after a user action, it is important that the screen reader is notified so that it triggers a vocalization. E.g. refreshing a list or a timer.  To start a vocalization, one must send a notification to the accessibility API via the `UIAccessibilityPostNotification` method with the `UIAccessibilityAnnouncementNotification` notification in parameter and the text to vocalize.  It is also recommended to notify the Accessibility API when there is a change of context. To do that, one must send a notification to the accessibility API via the `UIAccessibilityPostNotification`.   There are several types of notification, but the two most used are:   - `UIAccessibilityLayoutChangedNotification`: notify that a part of the content has changed. - `UIAccessibilityScreenChangedNotification`: notify a global change.  For more technical information, please check out the corresponding section on the [developer guide for iOS](./dev-ios.html#informer-d-une-modification-sur-la-page).  **Checklist: **  - With a screen reader, make sure that dynamic changes are vocalized.  **Users’ goal: **  Provide access to changing content to screen reader users.   "
});

documentTitles["criteria-ios.html#horizontal-scroll"] = "Horizontal scroll";
index.add({
    url: "criteria-ios.html#horizontal-scroll",
    title: "Horizontal scroll",    
    body: "## Horizontal scroll  ** Target: ** everyone, especially people with visual impairments.   ** When: ** as of design and during development.  **Description: **  A horizontal scroll can be very difficult to detect if no visual feedback is displayed to help the user understand that there are several pages. Do not hesitate to display a view to indicate a horizontal scroll (dots on `UIPageControl` for example). When necessary, also add “next” and “previous” buttons.  **Checklist: **  - The horizontal scrolls are visually indicated. - It must be possible to switch pages for screen reader users.  **Users’ goal: **  Provide a visual indication to users when there is horizontal scroll. Allow screen reader users to scroll horizontally.  &lt;div class=\&quot;sideToSide row\&quot;&gt; &lt;div class=\&quot;col-sm-6 col-xs-12\&quot;&gt; ** Valid example: **  &lt;img src=\&quot;./images/scroll_ios_h1.png\&quot; alt=\&quot;Valid example of a horizontal scroll\&quot; width=\&quot;300\&quot;&gt; &lt;/div&gt; &lt;div class=\&quot;col-sm-6 col-xs-12\&quot;&gt; ** Invalid example: **  &lt;img src=\&quot;./images/scroll_ios_h2.png\&quot; alt=\&quot;Invalid example of a horizontal scroll\&quot; width=\&quot;300\&quot;&gt; &lt;/div&gt; &lt;/div&gt;  "
});

documentTitles["criteria-ios.html#form"] = "Form";
index.add({
    url: "criteria-ios.html#form",
    title: "Form",    
    body: "## Form  ** Target: ** everyone, especially people with visual impairments.   ** When: ** as of design and during development.  **Description: **  Binding the form fields with their labels provides an additional vocalization allowing the user to understand what happens when filling out a form field.    We must use the `accessibilityLabel` attribute to associate a label to a form field.  **Checklist: **  - Form fields must vocalize their labels.  **Users’ goal: **  Improve navigation by improving the overall understanding of the page, because form fields describing the expected input are easier to fill for visually impaired users.   "
});

documentTitles["criteria-ios.html#reading-order"] = "Reading order";
index.add({
    url: "criteria-ios.html#reading-order",
    title: "Reading order",    
    body: "## Reading order  ** Target: ** people with visual impairments.   ** When: ** during development.  **Description: **  The reading order allows the screen reader user to get their bearings and to ensure functional coherence. It is therefore important to pay attention to it.    By default, the reading order of voice synthesis depends on the “logical” reading order (in France), from left to right and top to bottom. However, there are some cases where the screen reader cannot determine the correct order, and uses the order of &lt;abbr&gt;xml&lt;/abbr&gt; elements, leading to inconsistent vocalizations.    It is possible to redefine the VoiceOver reading order using the [`UIAccessibilityContainer`](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIAccessibilityContainer_Protocol/). The reading order is defined in a table. It is often useful to use the `shouldGroupAccessibilityElement` attribute to have a correct reading order in a sub-part of the page.    **Checklist: **  - Traversal order (VoiceOver) is logical and coherent.  **Users’ goal: **  Ensure logic order and coherent reading to screen reader users.  ** Example: ** In this example, the default playback order depends completely on the implementation and on the order of element declaration. In this case: `vol+, vol-, 1, 2, 3, 4, 5, 6, 7, 8, 9, p+, p-, 0`. A more consistent reading order is `1, 2, 3, 4, 5, 6, 7, 8, 9, 0, vol +, vol-, p + p-`.  &lt;img src=\&quot;./images/order.png\&quot; alt=\&quot;Example of reading order\&quot; width=\&quot;300\&quot;&gt; &lt;pre&gt;&lt;code&gt;remoteView.isAccessibilityElement = false remoteView.shouldGroupAccessibilityChildren = true remoteView.accessibilityElements = [] remoteView.accessibilityElements?.append(oneButton) remoteView.accessibilityElements?.append(twoButton) remoteView.accessibilityElements?.append(threeButton) remoteView.accessibilityElements?.append(fourButton) […]&lt;/code&gt;&lt;/pre&gt;   "
});

documentTitles["criteria-ios.html#language"] = "Language";
index.add({
    url: "criteria-ios.html#language",
    title: "Language",    
    body: "## Language  **Target : ** people with visual impairments.   **When: ** during development.  **Description: **  VoiceOver vocalization uses the default language of the mobile. Sometimes some words / texts of an application are in a different language. In order to make them properly understandable, they have to be declared in that specific language.    To change VoiceOver language pronunciation of a word or a text, use the `accessibilityLanguage` attribute, available via the `UIAccessibility` protocol.  **Checklist: **  - The words / text in a different language than the rest of the application should be vocalized in their corresponding language  **Users’ goal: **  Ensure the understanding of the application text.  &lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2016  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt;"
});



documentTitles["criteria-mobile.html#mobile-criteria"] = "Mobile criteria";
index.add({
    url: "criteria-mobile.html#mobile-criteria",
    title: "Mobile criteria",    
    body: "# Mobile criteria  &lt;script&gt;$(document).ready(function () {     setBreadcrumb([{\&quot;label\&quot;:\&quot;Mobile criteria\&quot;}]);     addSubMenu([         {\&quot;label\&quot;:\&quot;Android guide\&quot;,\&quot;url\&quot;:\&quot;criteria-android.html\&quot;},          {\&quot;label\&quot;:\&quot;iOS guide\&quot;,\&quot;url\&quot;:\&quot;criteria-ios.html\&quot;}     ]);     });&lt;/script&gt;  &lt;span data-menuitem=\&quot;criteria-mobile\&quot;&gt;&lt;/span&gt;  This base criteria for the Android and iOS Orange mobile applications avoids major accessibility errors. Its implementation does not give you the guarantee to be 100% accessible, but it is a clean bedrock so you can engage in a progressive accessibility implementation process.  Following the Orange guidelines (Design for digital platforms Guideline), available on the [Orange brand site](http://design.orange.com/) is a prerequisite to the use of this base criteria. Some elements already present in the Orange Brand (such as the use of colours) have not been included in this list of criteria.  Two versions are available: - ** Android version ** focused on the development of applications for the Google platform, Android. - ** iOS version ** focused on the development of applications for the Apple platform, iOS.  &lt;div class=\&quot;mobileImg col-xs-12 col-md-6 col-lg-4\&quot;&gt;     &lt;h2 class=\&quot;sr-only\&quot;&gt;Android criteria&lt;/h2&gt;               &lt;a href=\&quot;./criteria-android.html\&quot; class=\&quot;btn btn-info\&quot;&gt;         ![](./images/android.png)         &lt;div&gt;Android accessibility guide&lt;/div&gt;     &lt;/a&gt; &lt;/div&gt; &lt;div class=\&quot;mobileImg col-xs-12 col-md-6 col-lg-4\&quot;&gt;     &lt;h2 class=\&quot;sr-only\&quot;&gt;iOS criteria&lt;/h2&gt;               &lt;a href=\&quot;./criteria-ios.html\&quot; class=\&quot;btn btn-info\&quot;&gt;         ![](./images/iphone.png)         &lt;div&gt;iOS accessibility guide&lt;/div&gt;     &lt;/a&gt; &lt;/div&gt;              &lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2016  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt;"
});



documentTitles["dev-android.html#android-developer-guide"] = "Android developer guide";
index.add({
    url: "dev-android.html#android-developer-guide",
    title: "Android developer guide",    
    body: "# Android developer guide  &lt;script&gt;$(document).ready(function () {          setBreadcrumb([{\&quot;label\&quot;:\&quot;Guide for developers\&quot;, \&quot;url\&quot;: \&quot;./dev-mobile.html\&quot;},         {\&quot;label\&quot;:\&quot;Android developer guide\&quot;} 	]);     addSubMenu([         {\&quot;label\&quot;:\&quot;Android guide\&quot;,\&quot;url\&quot;:\&quot;dev-mobile.html\&quot;, \&quot;expanded\&quot;: true},          {\&quot;label\&quot;:\&quot;iOS guide\&quot;,\&quot;url\&quot;:\&quot;dev-ios.html\&quot;},         {\&quot;label\&quot;:\&quot;iOS WWDC\&quot;,\&quot;url\&quot;:\&quot;dev-ios-wwdc.html\&quot;}     ]);             });&lt;/script&gt;  &lt;span data-menuitem=\&quot;dev-mobile\&quot;&gt;&lt;/span&gt;  This guide aims to present the various accessibility options available on the Android &lt;abbr&gt;SDK&lt;/abbr&gt;. Through different categories, this guide explains how to use the accessibility attributes&amp;nbsp;/ methods and provides links to the official Google documentation. Code snippets are also available to show you how to implement it.    "
});

documentTitles["dev-android.html#text-alternative"] = "Text alternative";
index.add({
    url: "dev-android.html#text-alternative",
    title: "Text alternative",    
    body: "## Text alternative **Description: **    On Android, the vocalization of an element is made through an attribute named `contentDescription`. This attribute, which accepts a single string parameter (and therefore localizable), completely redefines the text to be read by an accessibility service like TalkBack. This allows a component to be more explicit than the text displayed on the screen. For example, in the case of a button whose title is “OK”, the `contentDescription` attribute can indicate that the button is used to confirm an action.  The `contentDescription` attribute must also be used on custom elements to indicate their nature. For example, a clickable `LinearLayout` must have a `contentDescription` like “button_name, button” (it should also be focusable to be properly accessible, see the corresponding section).   Note that the `contentDescription` is available in any element that inherits from `View`. It is therefore possible to set a `contentDescription` on a `TextView` for example, as shown in the “accessibility guide - text alternative - abbreviations, dates and times” section.   **Examples: **     Simple example (localized):   `myTextView.setContentDescription(getString(R.string.criteria_alt_ex1_cd_txt2));`  Example indicating the state and nature of a `TabHost` (not localized):   &lt;pre&gt;&lt;code&gt;private class TabHostListener implements TabHost.OnTabChangeListener { 	[...] 	public void onTabChanged(String tabId) {setContentDescription(mTabHost, mTabsLabel);} }  private void setContentDescription(TabHost mTabHost, String[] mTabsLabel) { 	int tab = mTabHost.getCurrentTab(); 	int tabCount = mTabHost.getTabWidget().getTabCount();  	for (int tabNumber = 0; tabNumber &lt; tabCount; tabNumber++) { 		CharSequence contentDescription = mTabsLabel[tabNumber];  		contentDescription = contentDescription + \&quot;, tab \&quot; + (tabNumber + 1) + \&quot; on \&quot; + tabCount; 		if (tabNumber == tab) { 			contentDescription = contentDescription + \&quot;, selected\&quot;; 		} 		mTabHost.getTabWidget().getChildAt(tabNumber).setContentDescription(contentDescription); 	} }&lt;/code&gt;&lt;/pre&gt;  **Link: **  - [`contentDescription`](https://developer.android.com/reference/android/view/View.html#attr_android:contentDescription)     "
});

documentTitles["dev-android.html#hiding-elements-from-accessibility"] = "Hiding elements from accessibility";
index.add({
    url: "dev-android.html#hiding-elements-from-accessibility",
    title: "Hiding elements from accessibility",    
    body: "## Hiding elements from accessibility    **Description: **    It is possible via an accessibility attribute to hide elements from accessibility tools (e.g. TalkBack). By extension, it is possible to force some elements to be visible to accessibility tools. `ImportantForAccessibility`: depending on the value of the attribute, it indicates whetheran element is visible or not to the Accessibility API. - `Auto` (0): this is the default, it is the system that decides. For example, a `Button` will have its default value set to 1 (&lt;i&gt;yes&lt;/i&gt;) whereas a `LinearLayout` will default to 2 (&lt;i&gt;no&lt;/i&gt;). - `Yes` (1): the view is important for accessibility. For example, it can receive the TalkBack focus. - `No` (2): the view is not important for accessibility. It does not trigger accessibility events and is therefore ignored by accessibility services such as TalkBack. - `NoHideDescendants` (4): the view is not important for accessibility, nor are its children views. This will hide all the items in a view to accessibility at once. Very useful on custom elements.    Note: the “`importantForAccessibility`” attribute is available to any element that inherits from `View`.  **Examples: **  From &lt;abbr&gt;xml&lt;/abbr&gt;:  `android:importantForAccessibility=\&quot;no\&quot;`  Programmatically: `myView.setImportantForAccessibility(View.IMPORTANT_FOR_ACCESSIBILITY_NO_HIDE_DESCENDANTS);`  **Link: **       - [`importantForAccessibility`](https://developer.android.com/reference/android/view/View.html#setImportantForAccessibility%28int%29)   "
});

documentTitles["dev-android.html#trigger-a-vocalization"] = "Trigger a vocalization";
index.add({
    url: "dev-android.html#trigger-a-vocalization",
    title: "Trigger a vocalization",    
    body: "## Trigger a vocalization  **Description: **    It is very easy to trigger vocalizations with TalkBack. Triggering a vocalization is very useful for dynamic content, just like a `LiveRegion` (see corresponding section). To trigger a vocalization, just call the `announceForAccessibility` method with the `id` parameter of the string to vocalize.  Note: the `announceForAccessibility` method is available on any item that inherits from `View` and is made in the system’s language.  Warning: we are talking about TalkBack vocalization and not &lt;abbr&gt;TTS&lt;/abbr&gt; (Text To Speech) that can operate whether TalkBack is on or off.  ** Example: **  It is common to check the Android version before triggering TalkBack vocalization. This is because `announceForAccessibility` has been introduced in Jelly Bean. &lt;pre&gt;&lt;code&gt;if (Build.VERSION.SDK_INT &gt;= Build.VERSION_CODES.JELLY_BEAN) { 	getView().announceForAccessibility(getString(R.string.criteria_contentchange_ex1_announce)); }&lt;/code&gt;&lt;/pre&gt;  **Link: **  - [`announceForAccessibility`](https://developer.android.com/reference/android/view/View.html#announceForAccessibility%28java.lang.CharSequence%29)   "
});

documentTitles["dev-android.html#check-if-talkback-is-on"] = "Check if Talkback is on";
index.add({
    url: "dev-android.html#check-if-talkback-is-on",
    title: "Check if Talkback is on",    
    body: "## Check if Talkback is on  **Description: **   On Android, it is possible to know whether the Accessibility API is enabled, thus whether TalkBack is enabled.  **Usage: **   &lt;pre&gt;&lt;code&gt;AccessibilityManager am = (AccessibilityManager) context.getSystemService(ACCESSIBILITY_SERVICE);   boolean isAccessibilityEnabled = am.isEnabled();&lt;/code&gt;&lt;/pre&gt;   "
});

documentTitles["dev-android.html#live-region-dynamic-content"] = "Live region (dynamic content)";
index.add({
    url: "dev-android.html#live-region-dynamic-content",
    title: "Live region (dynamic content)",    
    body: "## Live region (dynamic content)  **Description  **  You can specify to a view that it is a “live” region, it means that its content is subject to change dynamically and should in this case notify the Accessibility &lt;abbr&gt;API&lt;/abbr&gt;. This will generate TalkBack vocalizations. A typical use case: on a form, if the user makes a mistake and an error message appears, the view containing the error message must be defined as a “live” region.  We must use the `setAccessibilityLiveRegion` method that takes a mode parameter for the live region. There are 3 modes: - `ACCESSIBILITY_LIVE_REGION_NONE`: this view is not a live region. This is the default for most views. - `ACCESSIBILITY_LIVE_REGION_POLITE`: when a change occurs, vocalizations are triggered on the changes. These vocalizations are “polite”; they have lower priority than system vocalizations for example. - `ACCESSIBILITY_LIVE_REGION_ASSERTIVE`: when a change occurs, vocalizations are triggered on the changes. These vocalizations are “assertive”; they have the highest priority and are immediately vocalized.   Note the `setAccessibilityLiveRegion` method is available on any class that inherits from `View`.  **Example: **  &lt;pre&gt;&lt;code&gt;&amp;lt;TextView    […]    android:accessibilityLiveRegion=\&quot;polite\&quot; /&amp;gt;&lt;/code&gt;&lt;/pre&gt;  **Link: **  - [`setAccessibilityLiveRegion`](https://developer.android.com/reference/android/view/View.html#setAccessibilityLiveRegion%28int%29)   "
});

documentTitles["dev-android.html#reading-order-talkback"] = "Reading order (TalkBack)";
index.add({
    url: "dev-android.html#reading-order-talkback",
    title: "Reading order (TalkBack)",    
    body: "## Reading order (TalkBack)  **Description: **    By default, the reading order of voice synthesis depends on: the “logical” reading (in France), from left to right and top to bottom, and the &lt;abbr&gt;xml&lt;/abbr&gt; order (order of elements declaration). It is quite possible to redefine the reading order with two attributes:   - `AccessibilityTraversalAfter`: sets the `id` of a view after which this one is visited in accessibility traversal. A screen-reader must visit the content of the other view before the content of this one. - `AccessibilityTraversalBefore`: sets the `id` of a view before which this one is visited in accessibility traversal. A screen-reader must visit the content of this view before the content of the one it precedes.  Note: These attributes can be used directly in the &lt;abbr&gt;xml&lt;/abbr&gt; but also in the code via the `setAccessibilityTraversalBefore` and `setAccessibilityTraversalAfter` methods. These methods are available for any element that inherits from `View`.  **Example: **   &lt;pre&gt;&lt;code&gt;volupButton.setAccessibilityTraversalAfter(myView.findViewById(R.id.remote0).getId()); voldownButton.setAccessibilityTraversalAfter(myView.findViewById(R.id.volup).getId()); channelplusButton.setAccessibilityTraversalAfter(myView.findViewById(R.id.voldown).getId()); channelminusButton.setAccessibilityTraversalAfter(myView.findViewById(R.id.channelplus).getId());&lt;/code&gt;&lt;/pre&gt;  **Link: **        - [`setAccessibilityTraversalAfter`](https://developer.android.com/reference/android/view/View.html#setAccessibilityTraversalAfter%28int%29) - [`setAccessibilityTraversalBefore`](https://developer.android.com/reference/android/view/View.html#setAccessibilityTraversalBefore%28int%29)   "
});

documentTitles["dev-android.html#form"] = "Form";
index.add({
    url: "dev-android.html#form",
    title: "Form",    
    body: "## Form  **Description: **    It is very important to bind the form fields with their labels. There are 2 major techniques to achieve this:  - `LabelFor`: allow to specify a label to a view. This method takes the `id` of the view that it is associated with. This method can be used on almost any type of form field. We can also use the &lt;abbr&gt;xml&lt;/abbr&gt; `android:labelFor` or programmatically `setLabelFor`.  - `Hint`: add an example text when the text field is empty. This method only works for `TextView`. Supports setting the `id` to a string. Can be used in the &lt;abbr&gt;xml&lt;/abbr&gt; `android:hint` or programmatically `setHint`.  **Examples: **  `LabelFor` in &lt;abbr&gt;XML&lt;/abbr&gt;:  &lt;pre&gt;&lt;code&gt;&amp;lt;TextView 	[...]   android:labelFor=\&quot;@+id/imageView11\&quot;   android:importantForAccessibility=\&quot;no\&quot; /&amp;gt;&lt;/code&gt;&lt;/pre&gt;  Note: It is very common, once the label is bound to its field, to hide the label from the accessibility service. This is because this one does not need to be vocalized by the Accessibility &lt;abbr&gt;API&lt;/abbr&gt; anymore as it’s already associated with the form field (and will be vocalized by TalkBack for example).  `Hint` in &lt;abbr&gt;xml&lt;/abbr&gt;: &lt;pre&gt;&lt;code&gt;&amp;lt;EditText   [...]    android:hint=\&quot;@string/criteria_form_ex1_placeholder\&quot; /&amp;gt;&lt;/code&gt;&lt;/pre&gt;  **Links: **  - [`setLabelFor`](https://developer.android.com/reference/android/view/View.html#setLabelFor%28int%29) - [`setHint`](https://developer.android.com/reference/android/widget/TextView.html#setHint%28java.lang.CharSequence%29)   "
});

documentTitles["dev-android.html#text-size"] = "Text size";
index.add({
    url: "dev-android.html#text-size",
    title: "Text size",    
    body: "## Text size  **Description: **    To make it possible for the “Huge font size” option to properly interact with the application, several points are to be respected during the development: - Use dynamic font size: the “sp”. This unit, specific to Android, allows to have a font size proportional to the pixel density of the display. It is highly recommended to use it for text, if only for a uniform design on all types of Android devices. - Manage content overflows: A common mistake is to use a dynamic text size (“sp”) but not to pay attention to the container size. If the text gets bigger, the container must adapt so there is no overflow. One can perfectly play with the `min-height` and `height` attributes for correct results (the `height` set to `wrap_content` and `min-height` set to the default desired height).  **Link: **  - [typography](https://www.google.com/design/spec/style/typography.html#typography-styles)      "
});

documentTitles["dev-android.html#accessibility-events-custom-views"] = "Accessibility events &amp; custom views";
index.add({
    url: "dev-android.html#accessibility-events-custom-views",
    title: "Accessibility events &amp; custom views",    
    body: "## Accessibility events &amp; custom views  **Description: **   On Android there are several events available for accessibility. You can manipulate them just like any event. They can enhance custom views that are not accessible enough. Using accessible events is not common on applications that are not intended to be used by disabled people, because other options are in most cases sufficient. Yet one must know they exist and they let you redefine the vocalization of a component.    For more information, please refer to the following links:  **Example: **  In this example, accessibility events are intercepted. Depending on their type (text has been changed in the view or the component has the TalkBack focus), we construct a vocalization to TalkBack. &lt;pre&gt;&lt;code&gt;@Override @TargetApi(Build.VERSION_CODES.ICE_CREAM_SANDWICH) public boolean dispatchPopulateAccessibilityEvent(AccessibilityEvent event) {    boolean result = super.dispatchPopulateAccessibilityEvent(event);    // Detect what type of accessibility event is being passed in.   int eventType = event.getEventType();    // Common case: The user has interacted with our view in some way. State may or may not have been changed. Read out the current status of the view.   if (eventType == AccessibilityEvent.TYPE_VIEW_TEXT_CHANGED) {     event.getText().clear();     event.getText().add(\&quot;Possible reward: \&quot; + getBankValue() + \&quot;.\&quot;);     result = true;   }    // When a user first focuses on our view, we'll also read out some simple instructions to make it clear that this is an interactive element.   if (eventType == AccessibilityEvent.TYPE_VIEW_ACCESSIBILITY_FOCUSED) {     event.getText().add(\&quot;Click here to play again.\&quot;);     result = true;   }    return result; }&lt;/code&gt;&lt;/pre&gt;  **Links: **  - [`AccessibilityEvents`](http://developer.android.com/reference/android/view/accessibility/AccessibilityEvent.html) - [Creating a custom view](http://developer.android.com/guide/topics/ui/accessibility/apps.html#custom-views)     "
});

documentTitles["dev-android.html#webview"] = "WebView";
index.add({
    url: "dev-android.html#webview",
    title: "WebView",    
    body: "## WebView  **Description: **   `WebView`s are a special thing on Android. First, if you want a page to be accessible, its &lt;abbr&gt;HTML&lt;/abbr&gt; content must be accessible as well, it must follow the international standards: the &lt;abbr&gt;WCAG&lt;/abbr&gt;2. To know the requirements and learn techniques for developing an accessible Web, please visit the following section in our site: [accessibility recommendations for the Web](../web/index.html).  Second, on Android you must ensure that the `WebView` allows JavaScript `mWebView.getSettings().setJavaScriptEnabled(true);` In these conditions, the page displayed through the `WebView` properly responds to the Accessibility &lt;abbr&gt;API&lt;/abbr&gt;.    "
});

documentTitles["dev-android.html#list-vocalization"] = "List vocalization";
index.add({
    url: "dev-android.html#list-vocalization",
    title: "List vocalization",    
    body: "## List vocalization  **Description: **   Sometimes lists are not vocalized correctly: the speech synthesis is trying to vocalize the whole list at once (only the items displayed on the screen). This is especially the case when using the `RecyclerView`. To overcome this problem, there is a simple fix. Just set the `focusable` attribute to `true` for each item in the list. This has the effect of forcing the speech synthesis (TalkBack) to read the items one by one.   "
});

documentTitles["dev-android.html#navigating-via-the-focus-keyboard"] = "Navigating via the focus (keyboard)";
index.add({
    url: "dev-android.html#navigating-via-the-focus-keyboard",
    title: "Navigating via the focus (keyboard)",    
    body: "## Navigating via the focus (keyboard)  **Description: **  To handle focus-based navigation, make sure to: - Allow interactive elements to receive the focus: focus-based navigation only concerns interactive elements. If, for example, your application has clickable custom views, it must be ensured that these views are focusable setting the `focusable` attribute to `true`. - Managing the focus display: interactive elements must have the `state_focused` defined and must be easily distinguishable when having the focus. - Managing the focus order: through the `nextFocusDown`, `nextFocusUp`, `nextFocusRight`, `nextFocusLeft` options, you can specify what view should take the focus when using the down, up, right and left arrow.  Most of the time, only the two first points must be taken care of. Android is able to determine very precisely the positions of the elements between them and therefore to provide a logical and coherent reading order for the keyboard.  Note: `nextFocusDown`, `nextFocusUp`, `nextFocusRight`, `nextFocusLeft`, `focusable` and other focus management options are available either in the &lt;abbr&gt;xml&lt;/abbr&gt; or programmatically.  **Example: **  `Tabhost` selector handling the `state_focused`: &lt;pre&gt;&lt;code&gt;&amp;lt;selector xmlns:android=\&quot;http://schemas.android.com/apk/res/android\&quot;&amp;gt; 	&amp;lt;!-- Non focused states --&amp;gt; 	&amp;lt;item android:state_focused=\&quot;false\&quot; android:state_selected=\&quot;false\&quot; android:state_pressed=\&quot;false\&quot; android:drawable=\&quot;@drawable/tab_unselected_tab_selector\&quot; /&amp;gt; 	&amp;lt;item android:state_focused=\&quot;false\&quot; android:state_selected=\&quot;true\&quot;  android:state_pressed=\&quot;false\&quot; android:drawable=\&quot;@drawable/tab_selected_tab_selector\&quot; /&amp;gt;  	&amp;lt;!-- Focused states --&amp;gt; 	&amp;lt;item android:state_focused=\&quot;true\&quot; android:state_selected=\&quot;false\&quot; android:state_pressed=\&quot;false\&quot; android:drawable=\&quot;@drawable/tab_unselected_focused_tab_selector\&quot; /&amp;gt; 	&amp;lt;item android:state_focused=\&quot;true\&quot; android:state_selected=\&quot;true\&quot;  android:state_pressed=\&quot;false\&quot; android:drawable=\&quot;@drawable/tab_selected_focused_tab_selector\&quot; /&amp;gt;  	&amp;lt;!-- Pressed --&amp;gt; 	&amp;lt;!-- Non focused states --&amp;gt; 	&amp;lt;item android:state_focused=\&quot;false\&quot; android:state_selected=\&quot;false\&quot; android:state_pressed=\&quot;true\&quot; android:drawable=\&quot;@drawable/tab_unselected_pressed_tab_selector\&quot; /&amp;gt; 	&amp;lt;item android:state_focused=\&quot;false\&quot; android:state_selected=\&quot;true\&quot;  android:state_pressed=\&quot;true\&quot; android:drawable=\&quot;@drawable/tab_selected_pressed_tab_selector\&quot; /&amp;gt;  	&amp;lt;!-- Focused states --&amp;gt; 	&amp;lt;item android:state_focused=\&quot;true\&quot; android:state_selected=\&quot;false\&quot; android:state_pressed=\&quot;true\&quot; android:drawable=\&quot;@drawable/tab_unselected_pressed_tab_selector\&quot; /&amp;gt; 	&amp;lt;item android:state_focused=\&quot;true\&quot; android:state_selected=\&quot;true\&quot;  android:state_pressed=\&quot;true\&quot; android:drawable=\&quot;@drawable/tab_selected_pressed_tab_selector\&quot; /&amp;gt; &amp;lt;/selector&amp;gt;&lt;/code&gt;&lt;/pre&gt;  **Link: **  - [Focus-based navigation](http://developer.android.com/guide/topics/ui/accessibility/apps.html#focus-nav)  &lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2016  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt;"
});



documentTitles["dev-ios.html#ios-developer-guide"] = "iOS developer guide";
index.add({
    url: "dev-ios.html#ios-developer-guide",
    title: "iOS developer guide",    
    body: "# iOS developer guide  &lt;script&gt;$(document).ready(function () {          setBreadcrumb([{\&quot;label\&quot;:\&quot;Developer guide\&quot;, \&quot;url\&quot;: \&quot;./dev-mobile.html\&quot;},         {\&quot;label\&quot;:\&quot;iOS developer guide\&quot;} 	]);     addSubMenu([         {\&quot;label\&quot;:\&quot;Android guide\&quot;,\&quot;url\&quot;:\&quot;dev-android.html\&quot;},          {\&quot;label\&quot;:\&quot;iOS guide\&quot;,\&quot;url\&quot;:\&quot;dev-mobile.html\&quot;, \&quot;expanded\&quot;: true},         {\&quot;label\&quot;:\&quot;iOS WWDC\&quot;,\&quot;url\&quot;:\&quot;dev-ios-wwdc.html\&quot;}     ]);         });&lt;/script&gt;  &lt;span data-menuitem=\&quot;dev-mobile\&quot;&gt;&lt;/span&gt;  This guide aims to present the various iOS &lt;abbr&gt;SDK&lt;/abbr&gt; accessibility options. Through different categories, this guide explains how to use the accessibility attributes&amp;nbsp;/ methods and provides links to the [`official documentation from Apple`](https://developer.apple.com/documentation/uikit/accessibility). Code snippets are also available to show you how to implement it (Swift 4, Objective C).  "
});

documentTitles["dev-ios.html#text-alternatives"] = "Text alternatives";
index.add({
    url: "dev-ios.html#text-alternatives",
    title: "Text alternatives",    
    body: "## Text alternatives "
});

documentTitles["dev-ios.html#description"] = "Description";
index.add({
    url: "dev-ios.html#description",
    title: "Description",    
    body: "### Description  On iOS, the vocalization of an element is done through four attributes: `label`, `hint`, `value` and `trait`. The order of vocalization is always as follows: `label`, `value`, `trait` and `hint`. This order cannot be changed and the vocalization is performed only once.  A section of this guide is dedicated to the trait, we describe here the other three: - **accessibilityLabel**&amp;nbsp;: the `label` redefines the text read by VoiceOver. This allows a component to be more explicit than the text displayed on the screen. For example, for a button whose title is “OK”, this attribute can indicate that the button is used to confirm an action. - **accessibilityValue**&amp;nbsp;: the `value` of an element is by default the completion percentage (e.g. a progress bar percentage). Note that for most elements available in the &lt;abbr&gt;SDK&lt;/abbr&gt;, this value does not need to be set (the system automatically sets the value). - **accessibilityHint**&amp;nbsp;: the `hint` describes the component’s behaviour. Example: “click here to get the result”.  These accessibility attributes are available via the builder interface but also programmatically. Anything inheriting from `UIView` has these attributes by default. These attributes accept an optional string, and are therefore easily localizable.   "
});

documentTitles["dev-ios.html#example"] = "Example";
index.add({
    url: "dev-ios.html#example",
    title: "Example",    
    body: "### Example   &lt;pre&gt;&lt;code class=\&quot;objective-c\&quot;&gt; @interface ChangeTextView() {          __weak IBOutlet UILabel * myLabel;     __weak IBOutlet UIProgressView * myProgressView; } @end  @implementation ChangeTextView  - (void)viewDidAppear:(BOOL)animated {     [super viewDidAppear:animated];          myLabel.accessibilityLabel = @\&quot;hello\&quot;;     myLabel.accessibilityHint = @\&quot;This is an added comment.\&quot;;          myProgressView.accessibilityValue = @\&quot;45 per cent\&quot;; } @end &lt;/code&gt;&lt;/pre&gt;&lt;pre&gt;&lt;code class=\&quot;swift\&quot;&gt; class ChangeTextView: UIViewController {      @IBOutlet weak var myLabel: UILabel!     @IBOutlet weak var myProgressView: UIProgressView!          override func viewDidAppear(_ animated: Bool) {         super.viewDidAppear(animated)                  myLabel.accessibilityLabel = \&quot;hello\&quot;         myLabel.accessibilityHint = \&quot;This is an added comment.\&quot;                  myProgressView.accessibilityValue = \&quot;45 per cent\&quot;              } } &lt;/code&gt;&lt;/pre&gt; "
});

documentTitles["dev-ios.html#links"] = "Links";
index.add({
    url: "dev-ios.html#links",
    title: "Links",    
    body: "### Links - [`accessibilityLabel`](https://developer.apple.com/documentation/objectivec/nsobject/1615181-accessibilitylabel) - [`accessibilityValue`](https://developer.apple.com/documentation/objectivec/nsobject/1615117-accessibilityvalue) - [`accessibilityHint`](https://developer.apple.com/documentation/objectivec/nsobject/1615093-accessibilityhint)  "
});

documentTitles["dev-ios.html#element-trait"] = "Element trait";
index.add({
    url: "dev-ios.html#element-trait",
    title: "Element trait",    
    body: "## Element trait "
});

documentTitles["dev-ios.html#description"] = "Description";
index.add({
    url: "dev-ios.html#description",
    title: "Description",    
    body: "### Description The `accessibilityTraits` attribute allows to specify the trait of an element to the accessibility &lt;abbr&gt;API&lt;/abbr&gt;. Thus, it is possible to make a list item be considered as a button because it is clickable. Therefore, the `accessibilityTrait` attribute plays an important role on the element vocalization because the trait is vocalized by VoiceOver.     This accessibility attribute is available via the builder interface but also programmatically.  There are many available traits. The more commonly used are:   - **accessibilityTraitNone**&amp;nbsp;: removes any semantic value to the element. - **accessibilityTraitButton**&amp;nbsp;: adds the “button” trait, the element is seen as a button by VoiceOver. - **accessibilityTraitLink**&amp;nbsp;: useful to define a label as a “link”. - **accessibilityTraitHeader**&amp;nbsp;: defines an element as a header (see the &lt;a href=\&quot;criteria-ios.html#title-and-header\&quot;&gt;«&amp;nbsp;Title and header&amp;nbsp;»&lt;/a&gt; section). - **accessibilityTraitAdjustable**&amp;nbsp;: defines an element as an “adjustable” element, that is to say an element that users can adjust in a continuous manner, such as a slider or a picker view (see &lt;a href=\&quot;https://help.apple.com/iphone/9/#/iph3e2e2281\&quot;&gt;VoiceOver gestures documentation&lt;/a&gt;). "
});

documentTitles["dev-ios.html#example"] = "Example";
index.add({
    url: "dev-ios.html#example",
    title: "Example",    
    body: "### Example &lt;pre&gt;&lt;code class=\&quot;objective-c\&quot;&gt; - (void)customTraits() {     //Specified UIPageControl with the ’ajustable’ trait.     pageControl.accessibilityTraits = UIAccessibilityTraitAdjustable;          //Added header.       defaultHeaderViewCell.accessibilityTraits = UIAccessibilityTraitHeader;      //Many traits possible combination.       onePageButton.accessibilityTraits = UIAccessibilityTraitButton + UIAccessibilityTraitSelected; } &lt;/code&gt;&lt;/pre&gt;&lt;pre&gt;&lt;code class=\&quot;swift\&quot;&gt; func customTraits() {     //Specified UIPageControl with the ’ajustable’ trait.     pageControl.accessibilityTraits = UIAccessibilityTraitAdjustable          //Added header.       defaultHeaderViewCell.accessibilityTraits = UIAccessibilityTraitHeader      //Many traits possible combination.       onePageButton.accessibilityTraits = UIAccessibilityTraitButton + UIAccessibilityTraitSelected } &lt;/code&gt;&lt;/pre&gt; "
});

documentTitles["dev-ios.html#link"] = "Link";
index.add({
    url: "dev-ios.html#link",
    title: "Link",    
    body: "### Link - [`accessibilityTraits`](https://developer.apple.com/documentation/objectivec/nsobject/1615202-accessibilitytraits)  "
});

documentTitles["dev-ios.html#hide-elements-from-accessibility"] = "Hide elements from accessibility";
index.add({
    url: "dev-ios.html#hide-elements-from-accessibility",
    title: "Hide elements from accessibility",    
    body: "## Hide elements from accessibility "
});

documentTitles["dev-ios.html#description"] = "Description";
index.add({
    url: "dev-ios.html#description",
    title: "Description",    
    body: "### Description It is possible via an accessibility attribute to hide elements from accessibility tools (e.g. VoiceOver). By extension, it is possible to force some elements to be visible to accessibility tools.    - **isAccessibilityElement**&amp;nbsp;: boolean to specify that an element is visible or not to the Accessibility &lt;abbr&gt;API&lt;/abbr&gt; (VoiceOver or other). - **accessibilityElementsHidden**&amp;nbsp;: boolean to indicate that the children elements of the target element are visible or not to the Accessibility &lt;abbr&gt;API&lt;/abbr&gt;. - **accessibilityViewIsModal**&amp;nbsp;: boolean that can make visible or not the sibling elements of the target element to the Accessibility &lt;abbr&gt;API&lt;/abbr&gt;. Very useful for making accessible custom popup views for example.    The `accessibilityElement` attribute is available via the interface builder but can also be used directly through the code. The other two attributes are available only through the code. "
});

documentTitles["dev-ios.html#example"] = "Example";
index.add({
    url: "dev-ios.html#example",
    title: "Example",    
    body: "### Example A red square will be drawn and contain two other squares (blue and yellow) in order to apply the attributes defined hereabove.  &lt;img alt=\&quot;\&quot; style=\&quot;max-width: 500px; height: auto; \&quot; src=\&quot;./images/iOSdev/MasquerDesElements_1.png\&quot; /&gt; &lt;pre&gt;&lt;code class=\&quot;objective-c\&quot;&gt; - (void)viewDidAppear:(BOOL)animated {     [super viewDidAppear:animated];          //Creation of an element inside which 2 other children elements will be inserted.     CGRect parentViewRect = CGRectMake(100.0, 100.0, 40.0, 40.0);     UIView * myParentView = [[UIView alloc]initWithFrame:parentViewRect];     myParentView.backgroundColor = [UIColor redColor];          [UIApplication.sharedApplication.keyWindow addSubview:myParentView];          //The target element musn't be accessible so as to be considered as a container to its children elements.     //If this attribute is 'YES', the target element will be the only one accessible element.     myParentView.isAccessibilityElement = NO;          //The elements contained in the target element won't be accessible even if they're defined as such.     //If this attribute is 'NO' and the previous one is 'NO', only the children elements will be accessible.     myParentView.accessibilityElementsHidden = NO;          [self createViewWithColor:[UIColor yellowColor]                         inside:myParentView];     [self createViewWithColor:[UIColor blueColor]                         inside:myParentView]; }  - (void)createViewWithColor:(UIColor*)color                      inside:(UIView*)parentView {          float delta = (color == [UIColor yellowColor]) ? 0.0 : 20.0;          CGRect rect = CGRectMake(10.0 + delta, 10.0 + delta, 10.0, 10.0);     UIView * theView = [[UIView alloc]initWithFrame:rect];     theView.backgroundColor = color;          [parentView addSubview:theView];          theView.isAccessibilityElement = YES; } &lt;/code&gt;&lt;/pre&gt;&lt;pre&gt;&lt;code class=\&quot;swift\&quot;&gt; override func viewDidAppear(_ animated: Bool) {         super.viewDidAppear(animated)                  //Creation of an element inside which 2 other children elements will be inserted.         let parentViewRect = CGRect.init(x: 100.0,                                          y: 100.0,                                          width: 40.0,                                          height: 40.0)         let myParentView = UIView.init(frame: parentViewRect)         myParentView.backgroundColor = .red                  UIApplication.shared.keyWindow?.addSubview(myParentView)                  //The target element musn't be accessible so as to be considered as a container to its children elements.         //If this attribute is 'true', the target element will be the only one accessible element.         myParentView.isAccessibilityElement = true                  //The elements contained in the target element won't be accessible even if they're defined as such.         //If this attribute is 'false' and the previous one is 'false', only the children elements will be accessible.         myParentView.accessibilityElementsHidden = false                  self.createViewWithColor(.yellow, inside: myParentView)         self.createViewWithColor(.blue, inside: myParentView)     }          func createViewWithColor(_ color:UIColor, inside parentView:UIView) {                  let delta:CGFloat = ((color == .yellow) ? 0.0 : 20.0)         let rect = CGRect.init(x: 10.0 + delta,                                y: 10.0 + delta,                                width: 10.0,                                height: 10.0)                  let theView = UIView.init(frame: rect)         theView.backgroundColor = color                  parentView.addSubview(theView)                  theView.isAccessibilityElement = true     } &lt;/code&gt;&lt;/pre&gt; "
});

documentTitles["dev-ios.html#links"] = "Links";
index.add({
    url: "dev-ios.html#links",
    title: "Links",    
    body: "### Links - [`isAccessibilityElement`](https://developer.apple.com/documentation/objectivec/nsobject/1615141-isaccessibilityelement) - [`accessibilityElementsHidden`](https://developer.apple.com/documentation/objectivec/nsobject/1615080-accessibilityelementshidden) - [`accessibilityViewIsModal`](https://developer.apple.com/documentation/objectivec/nsobject/1615089-accessibilityviewismodal)  "
});

documentTitles["dev-ios.html#trigger-a-vocalization"] = "Trigger a vocalization";
index.add({
    url: "dev-ios.html#trigger-a-vocalization",
    title: "Trigger a vocalization",    
    body: "## Trigger a vocalization "
});

documentTitles["dev-ios.html#description"] = "Description";
index.add({
    url: "dev-ios.html#description",
    title: "Description",    
    body: "### Description It is very easy to trigger vocalizations with VoiceOver. &lt;/br&gt;Note that we are talking about VoiceOver vocalization and not &lt;abbr&gt;TTS&lt;/abbr&gt; (Text To Speech) that can operate whether VoiceOver is on or off.   To trigger a vocalization, just call the **UIAccessibilityPostNotification** method passing the notification allowing to trigger a vocalization (**UIAccessibilityAnnouncementNotification**) and the string to vocalize as parameters.  Note: the vocalization is done in the system’s language. "
});

documentTitles["dev-ios.html#example"] = "Example";
index.add({
    url: "dev-ios.html#example",
    title: "Example",    
    body: "### Example &lt;pre&gt;&lt;code class=\&quot;objective-c\&quot;&gt; UIAccessibilityPostNotification(UIAccessibilityAnnouncementNotification, @\&quot;This is a VoiceOver message.\&quot;); &lt;/code&gt;&lt;/pre&gt;&lt;pre&gt;&lt;code class=\&quot;swift\&quot;&gt; UIAccessibilityPostNotification(UIAccessibilityAnnouncementNotification, \&quot;This is a VoiceOver message.\&quot;) &lt;/code&gt;&lt;/pre&gt; "
});

documentTitles["dev-ios.html#links"] = "Links";
index.add({
    url: "dev-ios.html#links",
    title: "Links",    
    body: "### Links - [`UIAccessibilityPostNotification`](https://developer.apple.com/documentation/uikit/1615194-uiaccessibilitypostnotification) - [`UIAccessibilityAnnouncementNotification`](https://developer.apple.com/documentation/uikit/uiaccessibilityannouncementnotification)  "
});

documentTitles["dev-ios.html#check-accessibility-options-state"] = "Check accessibility options state";
index.add({
    url: "dev-ios.html#check-accessibility-options-state",
    title: "Check accessibility options state",    
    body: "## Check accessibility options state "
});

documentTitles["dev-ios.html#description"] = "Description";
index.add({
    url: "dev-ios.html#description",
    title: "Description",    
    body: "### Description On iOS, it is possible to check the accessibility options state. Is VoiceOver activated? Is the audio-mono mode activated? Several methods can help you to check with that. They are part of the `UIKit` framework. &lt;/br&gt;The most useful method is **UIAccessibilityIsVoiceOverRunning** which allows to know whether VoiceOver is activated. &lt;/br&gt;&lt;/br&gt;Many other methods are available in the links hereafter. "
});

documentTitles["dev-ios.html#exemple"] = "Exemple";
index.add({
    url: "dev-ios.html#exemple",
    title: "Exemple",    
    body: "### Exemple &lt;pre&gt;&lt;code class=\&quot;objective-c\&quot;&gt;     BOOL isVoiveOverRunning = (UIAccessibilityIsVoiceOverRunning() ? 1 : 0);     BOOL isSwitchControlRunning = (UIAccessibilityIsSwitchControlRunning() ? 1 : 0);          NSLog(@\&quot;VoiceOver is %d and SwitchControl is %d.\&quot;, isVoiveOverRunning, isSwitchControlRunning); &lt;/code&gt;&lt;/pre&gt;&lt;pre&gt;&lt;code class=\&quot;swift\&quot;&gt;     let isVoiceOverRunning = (UIAccessibilityIsVoiceOverRunning() ? 1 : 0)     let isSwitchControlRunning = (UIAccessibilityIsSwitchControlRunning() ? 1 : 0)              print(\&quot;VoiceOver is \(isVoiceOverRunning) and SwichControl is \(isSwitchControlRunning).\&quot;) &lt;/code&gt;&lt;/pre&gt; "
});

documentTitles["dev-ios.html#links"] = "Links";
index.add({
    url: "dev-ios.html#links",
    title: "Links",    
    body: "### Links - [`UIAccessibilityDarkerSystemColorsEnabled`](https://developer.apple.com/documentation/uikit/1615087-uiaccessibilitydarkersystemcolor) - [`UIAccessibilityIsAssistiveTouchRunning`](https://developer.apple.com/documentation/uikit/1648479-uiaccessibilityisassistivetouchr) - [`UIAccessibilityIsBoldTextEnabled`](https://developer.apple.com/documentation/uikit/1615156-uiaccessibilityisboldtextenabled) - [`UIAccessibilityIsClosedCaptioningEnabled`](https://developer.apple.com/documentation/uikit/1615112-uiaccessibilityisclosedcaptionin) - [`UIAccessibilityIsGrayscaleEnabled`](https://developer.apple.com/documentation/uikit/1615189-uiaccessibilityisgrayscaleenable) - [`UIAccessibilityIsGuidedAccessEnabled`](https://developer.apple.com/documentation/uikit/1615173-uiaccessibilityisguidedaccessena) - [`UIAccessibilityIsInvertColorsEnabled`](https://developer.apple.com/documentation/uikit/1615167-uiaccessibilityisinvertcolorsena) - [`UIAccessibilityIsMonoAudioEnabled`](https://developer.apple.com/documentation/uikit/1615123-uiaccessibilityismonoaudioenable) - [`UIAccessibilityIsReduceMotionEnabled`](https://developer.apple.com/documentation/uikit/1615133-uiaccessibilityisreducemotionena) - [`UIAccessibilityIsReduceTransparencyEnabled`](https://developer.apple.com/documentation/uikit/1615074-uiaccessibilityisreducetranspare) - [`UIAccessibilityIsShakeToUndoEnabled`](https://developer.apple.com/documentation/uikit/1615103-uiaccessibilityisshaketoundoenab) - [`UIAccessibilityIsSpeakScreenEnabled`](https://developer.apple.com/documentation/uikit/1615109-uiaccessibilityisspeakscreenenab) - [`UIAccessibilityIsSpeakSelectionEnabled`](https://developer.apple.com/documentation/uikit/1615154-uiaccessibilityisspeakselectione) - [`UIAccessibilityIsSwitchControlRunning`](https://developer.apple.com/documentation/uikit/1615131-uiaccessibilityisswitchcontrolru) - [`UIAccessibilityIsVoiceOverRunning`](https://developer.apple.com/documentation/uikit/1615187-uiaccessibilityisvoiceoverrunnin)  "
});

documentTitles["dev-ios.html#notify-a-content-change"] = "Notify a content change";
index.add({
    url: "dev-ios.html#notify-a-content-change",
    title: "Notify a content change",    
    body: "## Notify a content change "
});

documentTitles["dev-ios.html#description"] = "Description";
index.add({
    url: "dev-ios.html#description",
    title: "Description",    
    body: "### Description When there is a content change in the current page, it is possible to notify the accessibility &lt;abbr&gt;API&lt;/abbr&gt; using several types of notifications. To do that, we must send the change notification to the accessibility &lt;abbr&gt;API&lt;/abbr&gt; using the following method: `UIAccessibilityPostNotification`.    There are several types of change notifications but the two most commonly used are: - **UIAccessibilityLayoutChangedNotification**&amp;nbsp;: notifies that a part of the page has changed with 2 possible incoming parameters (a `NSString` or a `UIObject`). &lt;/br&gt;With a `NSString`, the notification behaves like a **UIAccessibilityAnnouncementNotification** with a &lt;span lang=\&quot;en\&quot;&gt;VoiceOver&lt;/span&gt; vocalization. &lt;/br&gt;With a `UIObject`, focus is shifted to the user interface element. &lt;/br&gt;This notification is very similar to the **UIAccessibilityAnnouncementNotification** but should come as a result of dynamic content being deleted or added to the current view. - **UIAccessibilityScreenChangedNotification**&amp;nbsp;: notifies that the whole page has changed including `nil` or a `UIObject` as incoming parameters.   With `nil`, the first accessible element in the page is focused. &lt;/br&gt;With a `UIObject`, focus is shifted to the specified element with a &lt;span lang=\&quot;en\&quot;&gt;VoiceOver&lt;/span&gt;. &lt;/br&gt;This notification comes along with a vocalization including a sound like announcing a new page. "
});

documentTitles["dev-ios.html#example"] = "Example";
index.add({
    url: "dev-ios.html#example",
    title: "Example",    
    body: "### Example &lt;pre&gt;&lt;code class=\&quot;objective-c\&quot;&gt; //The element'myLabel' is focused and vocalized with its new value. - (IBAction)tapHere:(UIButton *)sender {          myLabel.accessibilityLabel = @\&quot;This is a new label.\&quot;;     UIAccessibilityPostNotification(UIAccessibilityLayoutChangedNotification, myLabel); }  //The first accessible element in the page is focused and vocalized with a sound like announcing a new page. - (IBAction)clic:(UIButton *)sender {          UIAccessibilityPostNotification(UIAccessibilityScreenChangedNotification, nil); } &lt;/code&gt;&lt;/pre&gt;&lt;pre&gt;&lt;code class=\&quot;swift\&quot;&gt; //The element'myLabel' is focused and vocalized with its new value. @IBAction func tapHere(_ sender: UIButton) {              myLabel.accessibilityLabel = \&quot;This is a new label.\&quot;     UIAccessibilityPostNotification(UIAccessibilityLayoutChangedNotification, myLabel) }      //The first accessible element in the page is focused and vocalized with a sound like announcing a new page. @IBAction func clic(_ sender: UIButton) {              UIAccessibilityPostNotification(UIAccessibilityScreenChangedNotification, mySecondLabel) } &lt;/code&gt;&lt;/pre&gt; "
});

documentTitles["dev-ios.html#links"] = "Links";
index.add({
    url: "dev-ios.html#links",
    title: "Links",    
    body: "### Links - [`UIAccessibilityPostNotification`](https://developer.apple.com/documentation/uikit/1615194-uiaccessibilitypostnotification) - [`UIAccessibilityLayoutChangedNotification`](https://developer.apple.com/documentation/uikit/uiaccessibilitylayoutchangednotification) - [`UIAccessibilityScreenChangedNotification`](https://developer.apple.com/documentation/uikit/uiaccessibilityscreenchangednotification) - [`UIAccessibilityPageScrolledNotification`](https://developer.apple.com/documentation/uikit/uiaccessibilitypagescrollednotification)  "
});

documentTitles["dev-ios.html#change-the-vocalization-language"] = "Change the vocalization language";
index.add({
    url: "dev-ios.html#change-the-vocalization-language",
    title: "Change the vocalization language",    
    body: "## Change the vocalization language "
});

documentTitles["dev-ios.html#description"] = "Description";
index.add({
    url: "dev-ios.html#description",
    title: "Description",    
    body: "### Description To change the vocalization language of VoiceOver for a word or a sentence, one can use the **accessibilityLanguage**&amp;nbsp; attribute. &lt;/br&gt;Available through the `UIAccessibility` informal protocol, this attribute allows to specify a language for a dedicated text. &lt;/br&gt;For instance, if we use this attribute on a `UILabel`, it will be vocalized by &lt;span lang=\&quot;en\&quot;&gt;VoiceOver&lt;/span&gt; in the language set on this attribute. &lt;/br&gt; "
});

documentTitles["dev-ios.html#example"] = "Example";
index.add({
    url: "dev-ios.html#example",
    title: "Example",    
    body: "### Example &lt;pre&gt;&lt;code class=\&quot;objective-c\&quot;&gt; - (IBAction)tapHere:(UIButton *)sender {          myLabel.accessibilityLanguage = @\&quot;fr\&quot;;     myLabel.accessibilityLabel = @\&quot;Ceci est un nouveau label. Merci.\&quot;;     UIAccessibilityPostNotification(UIAccessibilityLayoutChangedNotification, myLabel); } &lt;/code&gt;&lt;/pre&gt;&lt;pre&gt;&lt;code class=\&quot;swift\&quot;&gt; @IBAction func tapHere(_ sender: UIButton) {              myLabel.accessibilityLanguage = \&quot;fr\&quot;     myLabel.accessibilityLabel = \&quot;Ceci est un nouveau label. Merci.\&quot;     UIAccessibilityPostNotification(UIAccessibilityLayoutChangedNotification, myLabel) } &lt;/code&gt;&lt;/pre&gt; "
});

documentTitles["dev-ios.html#link"] = "Link";
index.add({
    url: "dev-ios.html#link",
    title: "Link",    
    body: "### Link    - [`accessibilityLanguage`](https://developer.apple.com/documentation/objectivec/nsobject/1615192-accessibilitylanguage)  "
});

documentTitles["dev-ios.html#modify-the-focus-area-of-voiceover"] = "Modify the focus area of VoiceOver";
index.add({
    url: "dev-ios.html#modify-the-focus-area-of-voiceover",
    title: "Modify the focus area of VoiceOver",    
    body: "## Modify the focus area of VoiceOver "
});

documentTitles["dev-ios.html#description"] = "Description";
index.add({
    url: "dev-ios.html#description",
    title: "Description",    
    body: "### Description In the case of dynamically modified element or component not inheriting from `UIView`, it is possible to modify the focus area of accessibility of this element, i.e. the area &lt;span lang=\&quot;en\&quot;&gt;VoiceOver&lt;/span&gt; highlights when focusing an element.  - **accessibilityFrame**&amp;nbsp;: sets the area via a rectangle (`CGRect`). &lt;/br&gt;Usually, for an element inheriting from `UIView`, this area is the «&amp;nbsp;visible&amp;nbsp;» part of the view. - **accessibilityPath**&amp;nbsp;: equivalent to `AccessibilityFrame` but sets the area via Bezier curves. "
});

documentTitles["dev-ios.html#example"] = "Example";
index.add({
    url: "dev-ios.html#example",
    title: "Example",    
    body: "### Example &lt;img alt=\&quot;\&quot; style=\&quot;max-width: 700px; height: auto; \&quot; src=\&quot;./images/iOSdev/ModifierLaZoneDeFocus_1.png\&quot; /&gt; &lt;pre&gt;&lt;code class=\&quot;objective-c\&quot;&gt; float xVal; float yVal; float widthVal; float heightVal;      - (void)viewDidAppear:(BOOL)animated {     [super viewDidAppear:animated];          xVal = myLabel.accessibilityFrame.origin.x;     yVal = myLabel.accessibilityFrame.origin.y;     widthVal = myLabel.accessibilityFrame.size.width;     heightVal = myLabel.accessibilityFrame.size.height;      }  //First way to enlarge the focus area. - (IBAction)tapHere:(UIButton *)sender {          myLabel.accessibilityFrame = CGRectMake(xVal,                                             yVal,                                             widthVal + 100.0,                                             heightVal+ 100.0);          UIAccessibilityPostNotification(UIAccessibilityLayoutChangedNotification, myLabel); }  //Second way to enlarge the focus area (Bezier). - (IBAction)clic:(UIButton *)sender {          UIBezierPath * bezierPath = [UIBezierPath bezierPath];          [bezierPath moveToPoint:CGPointMake(xVal, yVal)];          [bezierPath addLineToPoint:CGPointMake(xVal + widthVal + 100.0,                                             yVal)];     [bezierPath addLineToPoint:CGPointMake(xVal + widthVal + 100.0,                                             yVal + heightVal+ 100.0)];     [bezierPath addLineToPoint:CGPointMake(xVal,                                             yVal + heightVal+ 100.0)];     [bezierPath closePath];          myLabel.accessibilityPath = bezierPath;          UIAccessibilityPostNotification(UIAccessibilityLayoutChangedNotification, myLabel); } &lt;/code&gt;&lt;/pre&gt;&lt;pre&gt;&lt;code class=\&quot;swift\&quot;&gt;     var xVal: CGFloat = 0.0     var yVal: CGFloat = 0.0     var widthVal: CGFloat = 0.0     var heightVal: CGFloat = 0.0          override func viewDidAppear(_ animated: Bool) {         super.viewDidAppear(animated)                  xVal = myLabel.accessibilityFrame.origin.x;         yVal = myLabel.accessibilityFrame.origin.y;         widthVal = myLabel.accessibilityFrame.size.width;         heightVal = myLabel.accessibilityFrame.size.height;     }          //Première façon d'augmenter la zone de focus.     @IBAction func clicHere(_ sender: UIButton) {                  myLabel.accessibilityFrame = CGRect.init(x: xVal,                                                  y: yVal,                                                  width: widthVal + 100.0,                                                  height: heightVal + 100.0)                  UIAccessibilityPostNotification(UIAccessibilityLayoutChangedNotification, myLabel)     }          //Seconde façon d'augmenter la zone de focus (Bézier).     @IBAction func clic(_ sender: UIButton) {                  let bezierPath = UIBezierPath.init()                  bezierPath.move(to: CGPoint.init(x: xVal, y: yVal))                  bezierPath.addLine(to: CGPoint.init(x: xVal + widthVal + 100.0,                                             y: yVal))         bezierPath.addLine(to: CGPoint.init(x: xVal + widthVal + 100.0,                                             y: yVal + heightVal + 100.0))         bezierPath.addLine(to: CGPoint.init(x: xVal,                                             y: yVal + heightVal + 100.0))         bezierPath.close()                  myLabel.accessibilityPath = bezierPath                  UIAccessibilityPostNotification(UIAccessibilityScreenChangedNotification, myLabel)     } &lt;/code&gt;&lt;/pre&gt; "
});

documentTitles["dev-ios.html#links"] = "Links";
index.add({
    url: "dev-ios.html#links",
    title: "Links",    
    body: "### Links - [`accessibilityFrame`](https://developer.apple.com/documentation/uikit/uiaccessibilityelement/1619579-accessibilityframe) - [`accessibilityPath`](https://developer.apple.com/documentation/objectivec/nsobject/1615159-accessibilitypath) - [`accessibilityActivationPoint`](https://developer.apple.com/documentation/objectivec/nsobject/1615179-accessibilityactivationpoint)  "
});

documentTitles["dev-ios.html#grouping-elements"] = "Grouping elements";
index.add({
    url: "dev-ios.html#grouping-elements",
    title: "Grouping elements",    
    body: "## Grouping elements "
});

documentTitles["dev-ios.html#description"] = "Description";
index.add({
    url: "dev-ios.html#description",
    title: "Description",    
    body: "### Description Grouping elements may be used to vocalize the bundle once and to associate a dedicated action to it. &lt;/br&gt;In this case, a view must be created to encapsulate all the elements and an action must be implemented (only the container must be an accesible element). &lt;/br&gt;&lt;/br&gt;Another grouping elements case could use the **shouldGroupAccessibilityChildren** attribute which is a Boolean that indicates whether &lt;span lang=\&quot;en\&quot;&gt;VoiceOver&lt;/span&gt; must group its children views. &lt;/br&gt;This allows making unique vocalizations or define a particular reading order for a part of the page (see &lt;a href=\&quot;http://a11y-guidelines.orange.com/mobile_EN/dev-ios.html#reading-order\&quot;&gt;Reading order&lt;/a&gt; section for further information). "
});

documentTitles["dev-ios.html#example"] = "Example";
index.add({
    url: "dev-ios.html#example",
    title: "Example",    
    body: "### Example We wish to obtain a 'label' and a 'switch control' as one unique block behaving like a `switch control`. &lt;/br&gt;&lt;img alt=\&quot;\&quot; style=\&quot;max-width: 700px; height: auto; \&quot; src=\&quot;./images/iOSdev/GrouperDesElements.png\&quot; /&gt; &lt;/br&gt;Create your wrapper as an accessible element : &lt;pre&gt;&lt;code class=\&quot;objective-c\&quot;&gt; #import \&quot;MyViewController.h\&quot; #import \&quot;MyWrapView.h\&quot;  @interface MyViewController ()  @property (weak, nonatomic) IBOutlet UILabel * myLabel; @property (weak, nonatomic) IBOutlet UISwitch * mySwitch;  @end   @implementation MyViewController  - (void)viewDidAppear:(BOOL)animated {     [super viewDidAppear:animated];          //Create the view that will encapsulate the 'label' and the 'Switch Control'.     MyWrapView * wrap = [[MyWrapView alloc] initWith:_myLabel                                                  and:_mySwitch];          [self.view addSubview:wrap]; } @end &lt;/code&gt;&lt;/pre&gt;&lt;pre&gt;&lt;code class=\&quot;swift\&quot;&gt;     class MyViewController: UIViewController {      @IBOutlet weak var myLabel: UILabel!     @IBOutlet weak var mySwitch: UISwitch!               override func viewDidAppear(_ animated: Bool) {         super.viewDidAppear(animated)                  //Create the view that will encapsulate the 'label' and the 'Switch Control'.         let wrap = MyWrapView.init(with: myLabel,                                    and: mySwitch)                  self.view.addSubview(wrap)     } } &lt;/code&gt;&lt;/pre&gt;  &lt;/br&gt;... and implement the wrapper class to define accurately the &lt;a href=\&quot;http://a11y-guidelines.orange.com/mobile_EN/dev-ios-wwdc-17215.html#DefaultActivation\&quot;&gt;action when a double tap occurs&lt;/a&gt; : &lt;pre&gt;&lt;code class=\&quot;objective-c\&quot;&gt; @implementation MyWrapView  //Indexes for the array containing all the wrapped elements. int indexLabel = 0; int indexSwitch = 1;   - (instancetype)initWith:(UILabel *)label and:(UISwitch *)aSwitch {          CGRect viewFrame = CGRectUnion(label.frame, aSwitch.frame);     MyWrapView * wrapView = [[MyWrapView alloc]initWithFrame:viewFrame];          wrapView.accessibilityElements = @[label, aSwitch];          NSString * switchValue = (aSwitch.isOn) ? @\&quot;on\&quot; : @\&quot;off\&quot;;          wrapView.isAccessibilityElement = YES;     wrapView.accessibilityLabel = [NSString stringWithFormat:@\&quot; %@ %@\&quot;,                                    @\&quot;the switch control is\&quot;,                                    switchValue.description];     wrapView.accessibilityHint = @\&quot;tap twice to change the switch control status.\&quot;;          return wrapView; }   //Function called by the system when a double tap occurs on the selected wrapper. - (BOOL)accessibilityActivate {          UISwitch * theSwitch = self.accessibilityElements[indexSwitch];     [theSwitch setOn:!(theSwitch.isOn)];          NSString * switchValue = (theSwitch.isOn) ? @\&quot;on\&quot; : @\&quot;off\&quot;;          self.accessibilityLabel = [NSString stringWithFormat:@\&quot; %@ %@\&quot;,                                @\&quot;the switch control is\&quot;,                                switchValue.description];     return YES; } @end &lt;/code&gt;&lt;/pre&gt;&lt;pre&gt;&lt;code class=\&quot;swift\&quot;&gt;     class MyWrapView: UIView {          //Indexes for the array containing all the wrapped elements.     let indexLabel = 0     let indexSwitch = 1               override init(frame: CGRect) {         super.init(frame: frame)     }               required init?(coder aDecoder: NSCoder) {         super.init(coder: aDecoder)     }               convenience init(with label: UILabel,and aSwitch: UISwitch) {                  let viewFrame = label.frame.union(aSwitch.frame)         self.init(frame: viewFrame)                  self.accessibilityElements = [label, aSwitch]                  let switchValue = (aSwitch.isOn) ? \&quot;on\&quot; : \&quot;off\&quot;                  self.isAccessibilityElement = true         self.accessibilityLabel = \&quot;the switch control is\&quot; + switchValue.description         self.accessibilityHint = \&quot;tap twice to change the switch control status.\&quot;     }               //Function called by the system when a double tap occurs on the selected wrapper.     override func accessibilityActivate() -&gt; Bool {                  let theSwitch = self.accessibilityElements?[indexSwitch] as? UISwitch         theSwitch?.setOn(!((theSwitch?.isOn)!), animated: false)                  let switchValue = (theSwitch?.isOn)! ? \&quot;on\&quot; : \&quot;off\&quot;                  self.accessibilityLabel = \&quot;the switch control is\&quot; + switchValue.description                  return true     } } &lt;/code&gt;&lt;/pre&gt; "
});

documentTitles["dev-ios.html#links"] = "Links";
index.add({
    url: "dev-ios.html#links",
    title: "Links",    
    body: "### Links - [`accessibilityActivate`](https://developer.apple.com/documentation/objectivec/nsobject/1615165-accessibilityactivate) - [`shouldGroupAccessibilityChildren`](https://developer.apple.com/documentation/objectivec/nsobject/1615143-shouldgroupaccessibilitychildren)  "
});

documentTitles["dev-ios.html#accessibility-events"] = "Accessibility events";
index.add({
    url: "dev-ios.html#accessibility-events",
    title: "Accessibility events",    
    body: "## Accessibility events "
});

documentTitles["dev-ios.html#description"] = "Description";
index.add({
    url: "dev-ios.html#description",
    title: "Description",    
    body: "### Description iOS sends several accessibility events to the applications. They are sent when accessibility options are changed. For example, if VoiceOver is deactivated, the running applications will receive the `UIAccessibilityVoiceOverStatusDidChange` event. This is very useful when used simultaneously with `UIAccessibilityIsVoiceOverRunning`.  Let's say the application behaves differently when VoiceOver is turned on. This is detected by the `UIAccessibilityIsVoiceOverRunning` method. What happens if VoiceOver is disabled? This is when the system events can be used. By listening to these events, it is possible to dynamically change how the application behaves. "
});

documentTitles["dev-ios.html#example"] = "Example";
index.add({
    url: "dev-ios.html#example",
    title: "Example",    
    body: "### Example In this example, a method is fired when VoiceOver or Switch Control status has changed. &lt;pre&gt;&lt;code class=\&quot;objective-c\&quot;&gt; - (void)viewDidAppear:(BOOL)animated {     [super viewDidAppear:animated];          [[NSNotificationCenter defaultCenter] addObserver:self                                              selector:@selector(methodToBeCalled:)                                                  name:UIAccessibilitySwitchControlStatusDidChangeNotification                                                object:nil];          [[NSNotificationCenter defaultCenter] addObserver:self                                              selector:@selector(methodToBeCalled:)                                                  name:UIAccessibilityVoiceOverStatusDidChangeNotification                                                object:nil]; }  - (void)methodToBeCalled:(NSNotification *)notification {          NSArray * checkStatus = @[@\&quot;NOK\&quot;, @\&quot;OK\&quot;];          NSLog(@\&quot;SWITCH CONTROL is %@ and VOICE OVER is %@\&quot;,           checkStatus[UIAccessibilityIsSwitchControlRunning()],           checkStatus[UIAccessibilityIsVoiceOverRunning()]); } &lt;/code&gt;&lt;/pre&gt;&lt;pre&gt;&lt;code class=\&quot;swift\&quot;&gt;     override func viewDidAppear(_ animated: Bool) {         super.viewDidAppear(animated)                  NotificationCenter.default.addObserver(self,                                                selector: #selector(methodToBeCalled(notification:)),                                                name: .UIAccessibilitySwitchControlStatusDidChange,                                                object: nil)                                                         NotificationCenter.default.addObserver(self,                                                selector: #selector(methodToBeCalled(notification:)),                                                name: .UIAccessibilityVoiceOverStatusDidChange,                                                object: nil)     }          @objc private func methodToBeCalled(notification: Notification) {          let switchControlStatus = (UIAccessibilityIsSwitchControlRunning() ? \&quot;OK\&quot; : \&quot;NOK\&quot;)         let voiceOverStatus = (UIAccessibilityIsVoiceOverRunning() ? \&quot;OK\&quot; : \&quot;NOK\&quot;)                  print(\&quot;SWITCH CONTROL is \(switchControlStatus) and VOICE OVER is \(voiceOverStatus).\&quot;)     } &lt;/code&gt;&lt;/pre&gt; "
});

documentTitles["dev-ios.html#link"] = "Link";
index.add({
    url: "dev-ios.html#link",
    title: "Link",    
    body: "### Link All accessibility events are available on the &lt;a href=\&quot;https://developer.apple.com/documentation/uikit/accessibility/notification_names?language=objc\&quot;&gt;official documentation from Apple&lt;/a&gt;.  "
});

documentTitles["dev-ios.html#text-size"] = "Text size";
index.add({
    url: "dev-ios.html#text-size",
    title: "Text size",    
    body: "## Text size "
});

documentTitles["dev-ios.html#description"] = "Description";
index.add({
    url: "dev-ios.html#description",
    title: "Description",    
    body: "### Description Since iOS7, it is possible to make the text size dynamic according to the phone settings. &lt;/br&gt;&lt;img alt=\&quot;larger accessibility sizes option screenshot\&quot; style=\&quot;max-width: 600px; height: auto; \&quot; src=\&quot;./images/iOSdev/TailleDesTextes_1.png\&quot; /&gt; &lt;/br&gt;The following steps should be respected in order to easily use this &lt;abbr&gt;API&lt;/abbr&gt;&amp;nbsp;:  - Choose the system font to facilitate your programing even if the use of other fonts is well assisted by the `UIFontMetrics` new class (iOS11).  &lt;pre&gt;&lt;code class=\&quot;objective-c\&quot;&gt;     __weak IBOutlet UILabel * fontHeadline;     __weak IBOutlet UILabel * fontFootNote;          //Use of the default native font for a header.     UIFont * myFont = [UIFont preferredFontForTextStyle:UIFontTextStyleHeadline];          //Personal font definition for a header.     UIFont * fontHead = [UIFont fontWithName:@\&quot;Chalkduster\&quot; size:30.0];     UIFontMetrics * fontHeadMetrics = [[UIFontMetrics alloc]initForTextStyle:UIFontTextStyleHeadline];     fontHeadline.font = [fontHeadMetrics scaledFontForFont:fontHead]; &lt;/code&gt;&lt;/pre&gt;&lt;pre&gt;&lt;code class=\&quot;swift\&quot;&gt;     @IBOutlet weak var fontHeadline: UILabel!     @IBOutlet weak var fontFootNote: UILabel!          //Use of the default native font for a header.     let myFont = UIFont.preferredFont(forTextStyle: .headline)              //Personal font definition for a header.     let fontHead = UIFont(name: \&quot;Chalkduster\&quot;, size: 30.0)     let fontHeadMetrics = UIFontMetrics(forTextStyle: .headline)     fontHeadline.font = fontHeadMetrics.scaledFont(for: fontHead!) &lt;/code&gt;&lt;/pre&gt;  - Listen to the font size settings change event **UIContentSizeCategoryDidChange** or directly use the property **adjustsFontForContentSizeCategory** to have an automatic update of your system font size if you're programming in iOS10 (this attribute applies to custom fonts only with the `UIFontMetrics` class). &lt;/br&gt;Note that the **traitCollectionDidChange** method that belongs to the `UITraitEnvironment` informal protocol may also be used in this context because it will be called as soon as the iOS interface environment changes *(class/content size, portrait/landscape)*. &lt;pre&gt;&lt;code class=\&quot;objective-c\&quot;&gt;     //Listens to the notification dealing with the font size changing from the mobile settings.     [[NSNotificationCenter defaultCenter] addObserver:self                                              selector:@selector(methodToBeCalled:)                                                  name:UIContentSizeCategoryDidChangeNotification                                                object:nil];          //Automatic changing of the font size without listening to the previous notification.     fontHeadline.adjustsFontForContentSizeCategory = YES;          - (void)methodToBeCalled:(NSNotification *)notification {              //When handling the font size change event, you must redisplay the affected elements.         fontFootNote.font = [UIFont preferredFontForTextStyle:UIFontTextStyleFootnote];     } &lt;/code&gt;&lt;/pre&gt;&lt;pre&gt;&lt;code class=\&quot;swift\&quot;&gt;     //Listens to the notification dealing with the font size changing from the mobile settings.     NotificationCenter.default.addObserver(self,                                            selector:#selector(methodToBeCalled(notification:)),                                            name: .UIContentSizeCategoryDidChange,                                            object: nil)          //Automatic changing of the font size without listening to the previous notification.     fontHeadline.adjustsFontForContentSizeCategory = true          @objc func methodToBeCalled(notification: Notification) {          //When handling the font size change event, you must redisplay the affected elements.         fontFootNote.font = UIFont.preferredFont(forTextStyle: .footnote)     } &lt;/code&gt;&lt;/pre&gt;  - Be careful that the containers fit their contents: using constraints is the best way to perform this task using dynamic values. "
});

documentTitles["dev-ios.html#links"] = "Links";
index.add({
    url: "dev-ios.html#links",
    title: "Links",    
    body: "### Links - [Dynamic Type &lt;abbr&gt;API&lt;/abbr&gt;](https://developer.apple.com/library/ios/documentation/StringsTextFonts/Conceptual/TextAndWebiPhoneOS/CustomTextProcessing/CustomTextProcessing.html#//apple_ref/doc/uid/TP40009542-CH4-SW65) - [`UIContentSizeCategoryDidChange`](https://developer.apple.com/documentation/foundation/nsnotification.name/1622948-uicontentsizecategorydidchange) - [`adjustsFontForContentSizeCategory`](https://developer.apple.com/documentation/uikit/uicontentsizecategoryadjusting/1771731-adjustsfontforcontentsizecategor?language=objc)  "
});

documentTitles["dev-ios.html#graphical-elements-size"] = "Graphical elements size";
index.add({
    url: "dev-ios.html#graphical-elements-size",
    title: "Graphical elements size",    
    body: "## Graphical elements size "
});

documentTitles["dev-ios.html#description"] = "Description";
index.add({
    url: "dev-ios.html#description",
    title: "Description",    
    body: "### Description Exactly like text, images and tab/tool bar items have a scalable size thanks to accessibility settings but **only since iOS11 with Xcode 9**. &lt;/br&gt;The example below to illustrate these new features is obtained by following the steps hereafter &amp;nbsp;: &lt;/br&gt;&lt;/br&gt;1. Under Xcode, import the image to be enlarged with a `pdf` extension and a x1 resolution in the `xcassets` catalog. &lt;/br&gt;&lt;/br&gt;2. In the new Image Set, tick `Preserve Vector Data` and specify `Single Scale` as Scales attribute &amp;nbsp;: &lt;/br&gt;&lt;img alt=\&quot;\&quot; style=\&quot;max-width: 700px; height: auto; \&quot; src=\&quot;./images/iOSdev/TailleDesEltsGraphiques_4.png\&quot; /&gt; &lt;/br&gt;&lt;/br&gt;3. If a storyboard is used for this image, tick `Adjusts Image Size` in the Image View section, otherwise put the `adjustsImageSizeForAccessibilityContentSizeCategory` image property to `true` in code &amp;nbsp;: &lt;/br&gt;&lt;img alt=\&quot;\&quot; style=\&quot;max-width: 350px; height: auto; \&quot; src=\&quot;./images/iOSdev/TailleDesEltsGraphiques_5.png\&quot; /&gt; &lt;/br&gt;&lt;/br&gt;4. If a **tab bar** or a **tool bar** is used in the application, first repeat the previous 3 steps for each image included in the items to be enlarged in the middle of the screen and then link the image to its appropriate item &amp;nbsp;: &lt;/br&gt;&lt;img alt=\&quot;\&quot; style=\&quot;max-width: 350px; height: auto; \&quot; src=\&quot;./images/iOSdev/TailleDesEltsGraphiques_6.png\&quot; /&gt; &lt;/br&gt;**WARNING : don't forget to check your layout with these new images larger sizes.** "
});

documentTitles["dev-ios.html#example"] = "Example";
index.add({
    url: "dev-ios.html#example",
    title: "Example",    
    body: "### Example An application with a tab bar, whose second bar item displays the Orange logo (added `Aspect Fit` content mode and constraints to stretch the image view), is created to test the features exposed in the description. &lt;/br&gt;&lt;/br&gt;With the `Larger Accessibility Sizes` activation in the settings (see &lt;a href=\&quot;http://a11y-guidelines.orange.com/mobile_EN/dev-ios.html#graphical-elements-size\&quot;&gt;the previous section&lt;/a&gt;), one can easily note in the application &amp;nbsp;: - A larger Orange image size. - A larger version of the bar item in an overlay if you touch and hold over it. &lt;/br&gt;&lt;img alt=\&quot;\&quot; style=\&quot;max-width: 1200px; height: auto; \&quot; src=\&quot;./images/iOSdev/TailleDesEltsGraphiques_10.png\&quot; /&gt; "
});

documentTitles["dev-ios.html#link"] = "Link";
index.add({
    url: "dev-ios.html#link",
    title: "Link",    
    body: "### Link - [`adjustsImageSizeForAccessibilityContentSizeCategory`](https://developer.apple.com/documentation/uikit/uiaccessibilitycontentsizecategoryimageadjusting/2890929-adjustsimagesizeforaccessibility)  "
});

documentTitles["dev-ios.html#reading-order"] = "Reading order";
index.add({
    url: "dev-ios.html#reading-order",
    title: "Reading order",    
    body: "## Reading order "
});

documentTitles["dev-ios.html#description"] = "Description";
index.add({
    url: "dev-ios.html#description",
    title: "Description",    
    body: "### Description Redefining the VoiceOver reading order is done using the **UIAccessibilityContainer** protocol. The idea is to have a table of elements that defines the reading order of the elements. It is often very useful to use the **shouldGroupAccessibilityElement** attribute so we have a precise order but for a part of the view only (the rest of the view will be read using the native order provided by VoiceOver). "
});

documentTitles["dev-ios.html#example"] = "Example";
index.add({
    url: "dev-ios.html#example",
    title: "Example",    
    body: "### Example The best way to illustrate this feature is the keyboard whose keys order isn't necessary the appropriate one. &lt;/br&gt;Here's the desired order : 1, 2, 3, 4, 7, 6, 8, 9, 5. &lt;/br&gt;&lt;span aria-hidden=\&quot;true\&quot;&gt;Two views are created (blue and grey) and we graphically put the numbers in them as defined hereunder :&lt;/span&gt; &lt;/br&gt;&lt;img alt=\&quot;\&quot; style=\&quot;max-width: 500px; height: auto; \&quot; src=\&quot;./images/iOSdev/OrdreDeLecture_1.png\&quot; /&gt; &lt;pre&gt;&lt;code class=\&quot;objective-c\&quot;&gt;     __weak IBOutlet UIView * blueBlock;     __weak IBOutlet UIView * greyColumn;      - (void)viewDidAppear:(BOOL)animated {     [super viewDidAppear:animated];          //Reads the first three numbers in the grey column.     greyColumn.shouldGroupAccessibilityChildren = YES;          //Reads 6, 8, 9 and 5 in this order inside the blue block.     blueBlock.isAccessibilityElement = NO;     blueBlock.accessibilityElements = @[key_6,                                         key_8,                                         key_9,                                         key_5]; } &lt;/code&gt;&lt;/pre&gt;&lt;pre&gt;&lt;code class=\&quot;swift\&quot;&gt;     @IBOutlet weak var greyColumn: UIView!     @IBOutlet weak var blueBlock: UIView!          override func viewDidAppear(_ animated: Bool) {         super.viewDidAppear(animated)                  //Reads the first three numbers in the grey column.         greyColumn.shouldGroupAccessibilityChildren = true                  //Reads 6, 8, 9 and 5 in this order inside the blue block.         blueBlock.isAccessibilityElement = false         blueBlock.accessibilityElements = [key_6,                                            key_8,                                            key_9,                                            key_5]     } &lt;/code&gt;&lt;/pre&gt; "
});

documentTitles["dev-ios.html#links"] = "Links";
index.add({
    url: "dev-ios.html#links",
    title: "Links",    
    body: "### Links - [`UIAccessibilityContainer`](https://developer.apple.com/documentation/uikit/accessibility/uiaccessibilitycontainer?language=objc) - [`shouldGroupAccessibilityChildren`](https://developer.apple.com/documentation/objectivec/nsobject/1615143-shouldgroupaccessibilitychildren)  "
});

documentTitles["dev-ios.html#date-time-and-numbers"] = "Date, time and numbers";
index.add({
    url: "dev-ios.html#date-time-and-numbers",
    title: "Date, time and numbers",    
    body: "## Date, time and numbers "
});

documentTitles["dev-ios.html#description"] = "Description";
index.add({
    url: "dev-ios.html#description",
    title: "Description",    
    body: "### Description Using VoiceOver for reading date, time and numbers may become rapidly a headache if some steps fade into obscurity. "
});

documentTitles["dev-ios.html#date-and-time-vocalization"] = "Date and time vocalization";
index.add({
    url: "dev-ios.html#date-and-time-vocalization",
    title: "Date and time vocalization",    
    body: "#### Date and time vocalization The rendering isn't natural if the date or time data are imported text in a `label`. &lt;/br&gt;&lt;img alt=\&quot;\&quot; style=\&quot;max-width: 800px; height: auto; \&quot; src=\&quot;./images/iOSdev/DateHeureNombres_11.png\&quot; /&gt; &lt;/br&gt;Incoming data must be formatted to obtain a natural and understandable descriptive vocalization. &lt;/br&gt;&lt;img alt=\&quot;\&quot; style=\&quot;max-width: 800px; height: auto; \&quot; src=\&quot;./images/iOSdev/DateHeureNombres_7.png\&quot; /&gt; &lt;pre&gt;&lt;code class=\&quot;objective-c\&quot;&gt;     NSDateFormatter * dateFormatter = [[NSDateFormatter alloc]init];     [dateFormatter setDateFormat:@\&quot;dd/MM/yyyy HH:mm\&quot;];          NSDate * date = [dateFormatter dateFromString:@\&quot;01/04/2015 05:30\&quot;];          dateLabel.text = [NSDateFormatter localizedStringFromDate:date                                                     dateStyle:NSDateFormatterShortStyle                                                     timeStyle:NSDateFormatterNoStyle];          dateLabel.accessibilityLabel = [NSDateFormatter localizedStringFromDate:date                                                                   dateStyle:NSDateFormatterMediumStyle                                                                   timeStyle:NSDateFormatterNoStyle];           hourLabel.text = [NSDateFormatter localizedStringFromDate:date                                                     dateStyle:NSDateFormatterNoStyle                                                     timeStyle:NSDateFormatterShortStyle];          NSDateComponents * hourComponents = [[NSCalendar currentCalendar] components:NSCalendarUnitHour | NSCalendarUnitMinute                                                                         fromDate:date];                                                                              hourLabel.accessibilityLabel = [NSDateComponentsFormatter localizedStringFromDateComponents:hourComponents                                                                                      unitsStyle:NSDateComponentsFormatterUnitsStyleSpellOut]; &lt;/code&gt;&lt;/pre&gt;&lt;pre&gt;&lt;code class=\&quot;swift\&quot;&gt;     let dateFormatter = DateFormatter()     dateFormatter.dateFormat = \&quot;dd/MM/yyyy HH:mm\&quot;              let date = dateFormatter.date(from: \&quot;01/04/2015 05:30\&quot;)              dateLabel.text = DateFormatter.localizedString(from: date!,                                                    dateStyle: .short,                                                    timeStyle: .none)                                                             dateLabel.accessibilityLabel = DateFormatter.localizedString(from: date!,                                                                  dateStyle: .medium,                                                                  timeStyle: .none)                       hourLabel.text = DateFormatter.localizedString(from: date!,                                                    dateStyle: .none,                                                    timeStyle: .short)              let hourComponents = Calendar.current.dateComponents([.hour, .minute],                                                          from: date!)     hourLabel.accessibilityLabel = DateComponentsFormatter.localizedString(from: hourComponents,                                                                            unitsStyle: .spellOut) &lt;/code&gt;&lt;/pre&gt; "
});

documentTitles["dev-ios.html#numbers-vocalization"] = "Numbers vocalization";
index.add({
    url: "dev-ios.html#numbers-vocalization",
    title: "Numbers vocalization",    
    body: "#### Numbers vocalization If a number is imported as is in a `label`text, the vocalization will be made on each figure rendering a final value that may be hard to be well understood. &lt;/br&gt;&lt;img alt=\&quot;\&quot; style=\&quot;max-width: 475px; height: auto; \&quot; src=\&quot;./images/iOSdev/DateHeureNombres_12.png\&quot; /&gt; &lt;/br&gt;As the previous chapter dealing with date and time, the incoming data must be formatted to be analyzed and vocalized according to the proper value of the explained number. &lt;/br&gt;&lt;img alt=\&quot;\&quot; style=\&quot;max-width: 700px; height: auto; \&quot; src=\&quot;./images/iOSdev/DateHeureNombres_8.png\&quot; /&gt; &lt;pre&gt;&lt;code class=\&quot;objective-c\&quot;&gt;     NSNumber * numberValue = @54038921.7;          NSNumberFormatter * numberFormatter = [[NSNumberFormatter alloc]init];     numberFormatter.numberStyle = NSNumberFormatterDecimalStyle;          numberLabel.text = [numberFormatter stringFromNumber:numberValue];          numberLabel.accessibilityLabel = [NSNumberFormatter localizedStringFromNumber:numberValue                                                                       numberStyle:NSNumberFormatterSpellOutStyle]; &lt;/code&gt;&lt;/pre&gt;&lt;pre&gt;&lt;code class=\&quot;swift\&quot;&gt;     let numberValue = NSNumber(value: 54038921.7)              numberLabel.text = NumberFormatter.localizedString(from: numberValue,                                                        number: .decimal)                                                                 numberLabel.accessibilityLabel = NumberFormatter.localizedString(from: numberValue,                                                                      number: .spellOut) &lt;/code&gt;&lt;/pre&gt; "
});

documentTitles["dev-ios.html#phone-numbers-vocalization"] = "Phone numbers vocalization";
index.add({
    url: "dev-ios.html#phone-numbers-vocalization",
    title: "Phone numbers vocalization",    
    body: "#### Phone numbers vocalization Once more, formatting data is an essential step for a phone number vocalization including the special cases of the \&quot;0\&quot; figures. &lt;/br&gt;The example hereunder deals with the french dialing but the rationale behind may be applied to any international type of dialing format. &lt;/br&gt;&lt;img alt=\&quot;default vocalization is not valid for the following phone number : 06.11.22.33.06\&quot; style=\&quot;max-width: 550px; height: auto; \&quot; src=\&quot;./images/iOSdev/DateHeureNombres_10.png\&quot; /&gt; &lt;/br&gt;The idea of this format is based on a comma separation of each pair of figures that will provide the vocal punctuation. &lt;/br&gt;&lt;img alt=\&quot;in this case the phone number is well vocalized\&quot; style=\&quot;max-width: 550px; height: auto; \&quot; src=\&quot;./images/iOSdev/DateHeureNombres_9.png\&quot; /&gt; &lt;pre&gt;&lt;code class=\&quot;objective-c\&quot;&gt;     NSString * phoneNumberValue = @\&quot;06.11.22.33.06\&quot;;     NSArray * phoneNumberElts = [phoneNumberValue componentsSeparatedByString:@\&quot;.\&quot;];          NSNumberFormatter * nbFormatter = [[NSNumberFormatter alloc]init];     nbFormatter.numberStyle = NSNumberFormatterSpellOutStyle;          NSMutableString * spelledOutString = [[NSMutableString alloc]init];          [phoneNumberElts enumerateObjectsUsingBlock:^(id  _Nonnull obj,                                                   NSUInteger idx,                                                   BOOL * _Nonnull stop) {         NSString * elt = (NSString *)obj;                  if (idx != 0) {             [spelledOutString appendString:@\&quot;,\&quot;];         }                  if ([elt hasPrefix:@\&quot;0\&quot;]) {                          NSString * firstFigure = [nbFormatter stringFromNumber:@([[elt substringToIndex:1] integerValue])];             NSString * secondFigure = [nbFormatter stringFromNumber:@([[elt substringFromIndex:1] integerValue])];                          [spelledOutString appendString:firstFigure];             [spelledOutString appendString:secondFigure];                      } else {             [spelledOutString appendString:[nbFormatter stringFromNumber:@([elt integerValue])]];         }     }];          phoneNumberLabel.text = phoneNumberValue;     phoneNumberLabel.accessibilityLabel = spelledOutString; &lt;/code&gt;&lt;/pre&gt;&lt;pre&gt;&lt;code class=\&quot;swift\&quot;&gt;         let phoneNumberValue = \&quot;06.11.22.33.06\&quot;         let phoneNumberElts = phoneNumberValue.components(separatedBy: \&quot;.\&quot;)                  let nbFormatter = NumberFormatter()         nbFormatter.numberStyle = .spellOut                  var spelledOutString = String()                  for (index, elt) in phoneNumberElts.enumerated() {                          if (index != 0) {                 spelledOutString.append(\&quot;,\&quot;)             }                          if (elt.hasPrefix(\&quot;0\&quot;)) {                                  let firstFigureValue = Int(String(elt[elt.startIndex]))!                 let firstFigure = nbFormatter.string(from: NSNumber(value:firstFigureValue))                 spelledOutString.append(firstFigure!)                                  let secondFigureValue = Int(String(elt[elt.index(elt.startIndex, offsetBy: 1)]))!                 let secondFigure = nbFormatter.string(from: NSNumber(value:secondFigureValue))                 spelledOutString.append(secondFigure!)                              } else {                                  let figure = nbFormatter.string(from: NSNumber(value:Int(elt)!))                 spelledOutString.append(figure!)             }         }          phoneNumberLabel.text = phoneNumberValue         phoneNumberLabel.accessibilityLabel = spelledOutString &lt;/code&gt;&lt;/pre&gt;  "
});

documentTitles["dev-ios.html#switch-control"] = "Switch Control";
index.add({
    url: "dev-ios.html#switch-control",
    title: "Switch Control",    
    body: "## Switch Control "
});

documentTitles["dev-ios.html#description"] = "Description";
index.add({
    url: "dev-ios.html#description",
    title: "Description",    
    body: "### Description The accessibility Switch Control feature revolves around the point mode and the item mode. &lt;/br&gt;&lt;img alt=\&quot;accessibility switch control screenshots\&quot; style=\&quot;max-width: 700px; height: auto; \&quot; src=\&quot;./images/iOSdev/SwitchControl.png\&quot; /&gt; &lt;/br&gt;The element selection using the item mode works fine when the user interface isn't too complicated and uses native elements. &lt;/br&gt;However, this mode may not be helpful according to the rationale behind some specific use cases and then needs to be customized. "
});

documentTitles["dev-ios.html#customization-of-the-item-mode"] = "Customization of the item mode";
index.add({
    url: "dev-ios.html#customization-of-the-item-mode",
    title: "Customization of the item mode",    
    body: "#### Customization of the item mode The Xcode InterfaceBuilder shows the structure used for the example hereunder : &lt;/br&gt;&lt;img alt=\&quot;xcode screenshot\&quot; style=\&quot;max-width: 700px; height: auto; \&quot; src=\&quot;./images/iOSdev/SwitchControlIB.png\&quot; /&gt; &lt;/br&gt;The following steps represent the customization : - Creation of 2 groups {Test_1 + Test_2 ; Btn 5 + Btn 6} that must be selectable in the item mode. - Within the other elements, only Btn 1 et Btn 2 must be separately accessible.  &lt;pre&gt;&lt;code class=\&quot;objective-c\&quot;&gt; @interface ViewController2 ()  @property (weak, nonatomic) IBOutlet UIStackView * btnsParentView; @property (weak, nonatomic) IBOutlet UIButton * btn1; @property (weak, nonatomic) IBOutlet UIButton * btn2; @property (weak, nonatomic) IBOutlet UIButton * btn5; @property (weak, nonatomic) IBOutlet UIButton * btn6;  @end   @implementation ViewController2 - (void)viewDidAppear:(BOOL)animated {     [super viewDidAppear:animated];          //Creation of the first group 'testWrap' COMBINING the 'Test_1' and 'Test_2' buttons.     UIButton * testOneButton = [self.view viewWithTag:1];     UIButton * testTwoButton = [self.view viewWithTag:2];     CGRect testWrapFrame = CGRectUnion(testOneButton.frame, testTwoButton.frame);          UIAccessibilityElement * testWrap = [[UIAccessibilityElement alloc]initWithAccessibilityContainer:self.view];          testWrap.isAccessibilityElement = false;     testWrap.accessibilityFrame = testWrapFrame;     testWrap.accessibilityNavigationStyle = UIAccessibilityNavigationStyleCombined; //Property specific to Switch Control.     testWrap.accessibilityElements = @[testOneButton, testTwoButton];               //Creation of the 'secondGroup' SEPARATING the first two buttons.     CGRect secondGroupRect = CGRectUnion(_btn1.frame, _btn2.frame);     CGRect secondGroupFrame = [_btnsParentView convertRect:secondGroupRect                                                     toView:self.view];     UIAccessibilityElement * secondGroup = [[UIAccessibilityElement alloc]initWithAccessibilityContainer:_btnsParentView];          secondGroup.isAccessibilityElement = false;     secondGroup.accessibilityFrame = secondGroupFrame;     secondGroup.accessibilityNavigationStyle = UIAccessibilityNavigationStyleSeparate;     secondGroup.accessibilityElements = @[_btn1, _btn2];           //Creation of the 'thirdGroup' COMBINING the last two buttons.     CGRect thirdGroupRect = CGRectUnion(_btn5.frame, _btn6.frame);     CGRect thirdGroupFrame = [_btnsParentView convertRect:thirdGroupRect                                                    toView:self.view];     UIAccessibilityElement * thirdGroup = [[UIAccessibilityElement alloc]initWithAccessibilityContainer:_btnsParentView];          thirdGroup.isAccessibilityElement = false;     thirdGroup.accessibilityFrame = thirdGroupFrame;     thirdGroup.accessibilityNavigationStyle = UIAccessibilityNavigationStyleCombined;     thirdGroup.accessibilityElements = @[_btn5, _btn6];               self.view.accessibilityElements = @[testWrap,                                          secondGroup,                                          thirdGroup]; } @end &lt;/code&gt;&lt;/pre&gt;&lt;pre&gt;&lt;code class=\&quot;swift\&quot;&gt; class ViewController: UIViewController {          @IBOutlet weak var btnsParentView: UIStackView!     @IBOutlet weak var btn1: UIButton!     @IBOutlet weak var btn2: UIButton!     @IBOutlet weak var btn5: UIButton!     @IBOutlet weak var btn6: UIButton!               override func viewDidAppear(_ animated: Bool) {         super.viewDidAppear(animated)                  //Creation of the first group 'testWrap' COMBINING the 'Test_1' and 'Test_2' buttons.         let testOneButton = self.view.viewWithTag(1) as? UIButton         let testTwoButton = self.view.viewWithTag(2) as? UIButton         let testWrapFrame = testOneButton?.frame.union((testTwoButton?.frame)!)          let testWrap = UIAccessibilityElement(accessibilityContainer: self.view)          testWrap.isAccessibilityElement = false         testWrap.accessibilityFrame = testWrapFrame!         testWrap.accessibilityNavigationStyle = .combined   //Property specific to Switch Control.         testWrap.accessibilityElements = [testOneButton!, testTwoButton!]           //Creation of the 'secondGroup' SEPARATING the first two buttons.         let secondGroupRect = btn1.frame.union(btn2.frame)         let secondGroupFrame = btnsParentView.convert(secondGroupRect,                                                       to: self.view)         let secondGroup = UIAccessibilityElement(accessibilityContainer: btnsParentView)          secondGroup.isAccessibilityElement = false         secondGroup.accessibilityFrame = secondGroupFrame         secondGroup.accessibilityNavigationStyle = .separate         secondGroup.accessibilityElements = [btn1, btn2]           //Creation of the 'thirdGroup' COMBINING the last two buttons.         let thirdGroupRect = btn5.frame.union(btn6.frame)         let thirdGroupFrame = btnsParentView.convert(thirdGroupRect,                                                      to: self.view)         let thirdGroup = UIAccessibilityElement(accessibilityContainer: btnsParentView)          thirdGroup.isAccessibilityElement = false         thirdGroup.accessibilityFrame = thirdGroupFrame         thirdGroup.accessibilityNavigationStyle = .combined         thirdGroup.accessibilityElements = [btn5, btn6]           self.view.accessibilityElements = [testWrap,                                            secondGroup,                                             thirdGroup]     } } &lt;/code&gt;&lt;/pre&gt;  &lt;/br&gt;The visual rendering is exposed hereunder : &lt;/br&gt;&lt;img alt=\&quot;visual rendering screenshot\&quot; style=\&quot;max-width: 1100px; height: auto; \&quot; src=\&quot;./images/iOSdev/SwitchControl_1.png\&quot; /&gt; &lt;/br&gt;Once activated, the created groups allow to reach directly the elements which they contain. "
});

documentTitles["dev-ios.html#link"] = "Link";
index.add({
    url: "dev-ios.html#link",
    title: "Link",    
    body: "### Link - [`accessibilityNavigationStyle`](https://developer.apple.com/documentation/objectivec/nsobject/1615200-accessibilitynavigationstyle)  "
});

documentTitles["dev-ios.html#continuous-adjustable-values"] = "Continuous adjustable values";
index.add({
    url: "dev-ios.html#continuous-adjustable-values",
    title: "Continuous adjustable values",    
    body: "## Continuous adjustable values "
});

documentTitles["dev-ios.html#description"] = "Description";
index.add({
    url: "dev-ios.html#description",
    title: "Description",    
    body: "### Description Graphics like `picker`, `stepper` or `slider` have the ability to continuously change the value they provide. &lt;/br&gt;&lt;img alt=\&quot;picker, stepper and slider screenshot\&quot; style=\&quot;max-width: 700px; height: auto; \&quot; src=\&quot;./images/iOSdev/ValeursAjustables_1.png\&quot; /&gt; &lt;/br&gt;It's hard to render what's happening when the changing isn't graphically or vocally notified. &lt;/br&gt;The following methodology to resolve this problem for blind people using VoiceOver may be the same for these three graphics, that's why only the `stepper` will be handled. &lt;/br&gt;&lt;/br&gt;Creating a `stepper` with a `label` to display its value provides the following rendering : &lt;/br&gt;&lt;img alt=\&quot;stepper is vocalize like 3 differents objects\&quot; style=\&quot;max-width: 900px; height: auto; \&quot; src=\&quot;./images/iOSdev/ValeursAjustables_2.png\&quot; /&gt; &lt;/br&gt;The focus must change to : - Get each element that increases or decreases the value. - Know the value provided by the `label`.  Moreover, there is no real time notification dealing with the value changing. &lt;/br&gt;Nothing is definitely blocking in use but these latest remarks lead to a new design for this example that used to be so simple. &lt;/br&gt;&lt;/br&gt;The rationale behind is to be able to change the `stepper` value, to be informed of this modification and to know the new value thanks to a single and unique object. &lt;/br&gt;**Group the `stepper`and the `label`** *(a StackView should do the job)* then put **`UIAccessibilityTraitAdjustable`** as a new trait for this new accessible group. &lt;/br&gt;This `trait` is **MANDATORY** linked to the `accessibilityIncrement()` and `accessibilityDecrement()` methods that must be implemented to define the continous way of changing the value. &lt;/br&gt;&lt;/br&gt;As a result, all the previous constraints are removed and a `hint` is natively provided by this `trait` to mention the proper way of using this object. &lt;/br&gt;&lt;img alt=\&quot;stepper is well vocalized\&quot; style=\&quot;max-width: 1000px; height: auto; \&quot; src=\&quot;./images/iOSdev/ValeursAjustables_4.png\&quot; /&gt; - To get this result, the container class {`stepper` + `label`} is first created to allow the delegation for the future value changing.  &lt;pre&gt;&lt;code class=\&quot;objective-c\&quot;&gt; -===== StepperWrapper.h =====- NS_ASSUME_NONNULL_BEGIN @class StepperWrapper;  @protocol AdjustableForAccessibilityDelegate &lt;NSObject&gt; - (void)adjustableDecrementForView:(StepperWrapper *)view; - (void)adjustableIncrementForView:(StepperWrapper *)view; @end   @interface StepperWrapper : UIStackView @property(nonatomic,weak) id&lt;AdjustableForAccessibilityDelegate&gt; delegate; @end NS_ASSUME_NONNULL_END           -===== StepperWrapper.m =====- NS_ASSUME_NONNULL_BEGIN @implementation StepperWrapper  - (instancetype)initWithCoder:(NSCoder *)coder {          self = [super initWithCoder:coder];          self.isAccessibilityElement = YES;     self.accessibilityTraits = UIAccessibilityTraitAdjustable;          return self; }  - (void)accessibilityDecrement {     [_delegate adjustableDecrementForView:self]; }  - (void)accessibilityIncrement {     [_delegate adjustableIncrementForView:self]; } @end NS_ASSUME_NONNULL_END &lt;/code&gt;&lt;/pre&gt;&lt;pre&gt;&lt;code class=\&quot;swift\&quot;&gt; protocol AdjustableForAccessibilityDelegate: class {     func adjustableDecrementFor(_ view: StepperWrapper)     func adjustableIncrementFor(_ view: StepperWrapper) }   class StepperWrapper: UIStackView {      weak var delegate: AdjustableForAccessibilityDelegate?          override init(frame: CGRect) {         super.init(frame: frame)     }          required init(coder: NSCoder) {         super.init(coder: coder)                  isAccessibilityElement = true         accessibilityTraits = UIAccessibilityTraitAdjustable     }          override func accessibilityDecrement() {         delegate?.adjustableDecrementFor(self)     }          override func accessibilityIncrement() {         delegate?.adjustableIncrementFor(self)     } } &lt;/code&gt;&lt;/pre&gt;  - Next, the two methods of the implemented protocol must be defined before updating and vocally presenting the new value in the ViewController.  &lt;pre&gt;&lt;code class=\&quot;objective-c\&quot;&gt; NS_ASSUME_NONNULL_BEGIN @interface ViewController () &lt;AdjustableForAccessibilityDelegate&gt;  @property (weak, nonatomic) IBOutlet UIStepper * stepperNoAccess; @property (weak, nonatomic) IBOutlet UILabel * stepperValueNoAccess;  @property (weak, nonatomic) IBOutlet StepperWrapper * stepperStackViewAccess; @property (weak, nonatomic) IBOutlet UIStepper * stepperAccess; @property (weak, nonatomic) IBOutlet UILabel * stepperValueAccess; @end   @implementation ViewController - (void)viewDidLoad {     [super viewDidLoad];          _stepperStackViewAccess.delegate = self;     _stepperStackViewAccess.accessibilityLabel = @\&quot;Increase or decrease the value\&quot;;     _stepperStackViewAccess.accessibilityValue = _stepperValueAccess.text; }  - (void)adjustableDecrementForView:(StepperWrapper *)view {     _stepperAccess.value  -= _stepperAccess.stepValue;     [self updateStepperValue]; }  - (void)adjustableIncrementForView:(StepperWrapper *)view {     _stepperAccess.value  += _stepperAccess.stepValue;     [self updateStepperValue]; }  - (void) updateStepperValue {     _stepperValueAccess.text = [NSString stringWithFormat:@\&quot;Value = %0.1f\&quot;,_stepperAccess.value];     _stepperStackViewAccess.accessibilityValue = _stepperValueAccess.text; } @end NS_ASSUME_NONNULL_END &lt;/code&gt;&lt;/pre&gt;&lt;pre&gt;&lt;code class=\&quot;swift\&quot;&gt; class ViewController: UIViewController, AdjustableForAccessibilityDelegate {          @IBOutlet weak var stepperStackViewAccess: StepperWrapper!     @IBOutlet weak var stepperAccess: UIStepper!     @IBOutlet weak var stepperValueAccess: UILabel!               override func viewDidLoad() {         super.viewDidLoad()                  stepperStackViewAccess.delegate = self         stepperStackViewAccess.accessibilityLabel = \&quot;Increase or decrease the value\&quot;         stepperStackViewAccess.accessibilityValue = stepperValueAccess.text     }          func adjustableDecrementFor(_ view: StepperWrapper) {         stepperAccess.value -= stepperAccess.stepValue         updateStepperValue()     }          func adjustableIncrementFor(_ view: StepperWrapper) {         stepperAccess.value += stepperAccess.stepValue         updateStepperValue()     }          private func updateStepperValue() {         stepperValueAccess.text = \&quot;Value = \(stepperAccess.value)\&quot;         stepperStackViewAccess.accessibilityValue = stepperValueAccess.text     } } &lt;/code&gt;&lt;/pre&gt; "
});

documentTitles["dev-ios.html#link"] = "Link";
index.add({
    url: "dev-ios.html#link",
    title: "Link",    
    body: "### Link - [`UIAccessibilityTraitAdjustable`](https://developer.apple.com/documentation/uikit/uiaccessibilitytraitadjustable)  "
});

documentTitles["dev-ios.html#custom-actions"] = "Custom actions";
index.add({
    url: "dev-ios.html#custom-actions",
    title: "Custom actions",    
    body: "## Custom actions "
});

documentTitles["dev-ios.html#description"] = "Description";
index.add({
    url: "dev-ios.html#description",
    title: "Description",    
    body: "### Description Some basic gestures may become a real headache to be perfectly understood by VoiceOver in a fluent way for the user. &lt;/br&gt;A convincing example is the iOS native mail that may suggest some actions as follows : &lt;/br&gt;&lt;img alt=\&quot;flick left to display actions without VoiceOver\&quot; style=\&quot;max-width: 900px; height: auto; \&quot; src=\&quot;./images/iOSdev/Actions_1.png\&quot; /&gt; &lt;/br&gt;This gesture cannot lead to the proper result with VoiceOver because a flick left will give rise to the selection of the next accessible element instead of suggesting actions as above. &lt;/br&gt;&lt;/br&gt;A solution may consist of **associating the selected element with an array of actions** that will be automatically introduced to the user. &lt;/br&gt;&lt;img alt=\&quot;\&quot; style=\&quot;max-width: 900px; height: auto; \&quot; src=\&quot;./images/iOSdev/Actions_2.png\&quot; /&gt;  &lt;pre&gt;&lt;code class=\&quot;objective-c\&quot;&gt; @interface ViewController ()  @property (weak, nonatomic) IBOutlet UILabel * persoElt;  @end   @implementation ViewController - (void)viewDidLoad {     [super viewDidLoad];          UIAccessibilityCustomAction * a11yMoreAction = [[UIAccessibilityCustomAction alloc]initWithName:@\&quot;more\&quot;                                                                                                 target:self                                                                                               selector:@selector(moreAction)];     UIAccessibilityCustomAction * a11yFlagAction = [[UIAccessibilityCustomAction alloc]initWithName:@\&quot;flag\&quot;                                                                                                 target:self                                                                                               selector:@selector(flagAction)];     UIAccessibilityCustomAction * a11yDeleteAction = [[UIAccessibilityCustomAction alloc]initWithName:@\&quot;delete\&quot;                                                                                                   target:self                                                                                                 selector:@selector(deleteAction)];          _persoElt.accessibilityCustomActions = @[a11yMoreAction,                                              a11yFlagAction,                                              a11yDeleteAction]; }  - (BOOL)moreAction {     //Code to be implemented for the appropriate action.     return YES; }  - (BOOL)flagAction {     //Code to be implemented for the appropriate action.     return YES; }  - (BOOL)deleteAction {     //Code to be implemented for the appropriate action.     return YES; } @end &lt;/code&gt;&lt;/pre&gt;&lt;pre&gt;&lt;code class=\&quot;swift\&quot;&gt; class ViewController: UIViewController {          @IBOutlet weak var persoElt: UILabel!               override func viewDidLoad() {         super.viewDidLoad()                  let a11yMoreAction = UIAccessibilityCustomAction(name: \&quot;more\&quot;,                                                          target: self,                                                          selector: #selector(moreAction))                  let a11yFlagAction = UIAccessibilityCustomAction(name: \&quot;flag\&quot;,                                                          target: self,                                                          selector: #selector(flagAction))                  let a11yDeleteAction = UIAccessibilityCustomAction(name: \&quot;delete\&quot;,                                                            target: self,                                                            selector: #selector(deleteAction))                  persoElt.accessibilityCustomActions = [a11yMoreAction,                                                a11yFlagAction,                                                a11yDeleteAction]     }               @objc func moreAction() -&gt; Bool {         //Code to be implemented for the appropriate action.         return true     }          @objc func flagAction() -&gt; Bool {         //Code to be implemented for the appropriate action.         return true     }          @objc func deleteAction() -&gt; Bool {         //Code to be implemented for the appropriate action.         return true     } } &lt;/code&gt;&lt;/pre&gt;  &lt;/br&gt;The code above gives rise to the following result thanks to consecutive flicks on the selected accessible element : &lt;/br&gt;&lt;img alt=\&quot;flick up to vocalize suggesterd actions with VoiceOver activated\&quot; style=\&quot;max-width: 900px; height: auto; \&quot; src=\&quot;./images/iOSdev/Actions_3.png\&quot; /&gt;  "
});

documentTitles["dev-ios.html#links"] = "Links";
index.add({
    url: "dev-ios.html#links",
    title: "Links",    
    body: "### Links - [`accessibilityCustomActions`](https://developer.apple.com/documentation/objectivec/nsobject/1615150-accessibilitycustomactions) - [`UIAccessibilityCustomAction`](https://developer.apple.com/documentation/uikit/uiaccessibilitycustomaction)  "
});

documentTitles["dev-ios.html#focus-an-element"] = "Focus an element";
index.add({
    url: "dev-ios.html#focus-an-element",
    title: "Focus an element",    
    body: "## Focus an element "
});

documentTitles["dev-ios.html#description"] = "Description";
index.add({
    url: "dev-ios.html#description",
    title: "Description",    
    body: "### Description The **UIAccessibilityFocus** informal protocol provides programming elements to be informed of the accessible element focus : - **accessibilityElementDidBecomeFocused** : called when the accessible element is focused. - **accessibilityElementDidLoseFocus** : fired when the accessible element lost focus. - **accessibilityElementIsFocused** : boolean value indicating the accessible element selection.  Overriden inside a view controller, these elements will be helpless if you think they will be called when an accessible element is focused. &lt;/br&gt;However, if they are implemented in the accessible element itself, you won't be disappointed. &lt;/br&gt;This mistake is due to the informal aspect of the protocol that allows an override of its methods inside an inherited NSObject element even if it's not accessible... like a view controller for instance. &lt;/br&gt;&lt;/br&gt;The example below enables to follow the focus of an accessible element identified by its `accessibleIdentifier`. &lt;pre&gt;&lt;code class=\&quot;objective-c\&quot;&gt; #import \&quot;UIView+focus.h\&quot;  @implementation UIView (focus)  - (void)accessibilityElementDidBecomeFocused {          if ([self accessibilityElementIsFocused]) {         NSLog(@\&quot;My element has become focused.\&quot;);     } }  - (void)accessibilityElementDidLoseFocus {          if ([self accessibilityElementIsFocused]) {         NSLog(@\&quot;My element has lost focus.\&quot;);     } }  - (BOOL)accessibilityElementIsFocused {          if ([self.accessibilityIdentifier isEqualToString:@\&quot;myAccessibleElt\&quot;]) {         return YES;     } else {         return NO;     } } @end &lt;/code&gt;&lt;/pre&gt;&lt;pre&gt;&lt;code class=\&quot;swift\&quot;&gt; extension UIView {     override open func accessibilityElementDidBecomeFocused() {                  if self.accessibilityElementIsFocused() {             print(\&quot;My element has become focused.\&quot;)         }     }          override open func accessibilityElementDidLoseFocus() {                  if self.accessibilityElementIsFocused() {             print(\&quot;My element has lost focus.\&quot;)         }     }          override open func accessibilityElementIsFocused() -&gt; Bool {                  if (self.accessibilityIdentifier == \&quot;myAccessibleElt\&quot;) {             return true         } else {             return false         }     } } &lt;/code&gt;&lt;/pre&gt;  "
});

documentTitles["dev-ios.html#link"] = "Link";
index.add({
    url: "dev-ios.html#link",
    title: "Link",    
    body: "### Link - [`UIAccessibilityFocus`](https://developer.apple.com/documentation/uikit/accessibility/uiaccessibilityfocus)  "
});

documentTitles["dev-ios.html#custom-rotor"] = "Custom rotor";
index.add({
    url: "dev-ios.html#custom-rotor",
    title: "Custom rotor",    
    body: "## Custom rotor "
});

documentTitles["dev-ios.html#description"] = "Description";
index.add({
    url: "dev-ios.html#description",
    title: "Description",    
    body: "### Description Since iOS10, adding a new rotor option is possible thanks to the **UIAccessibilityCustomRotor** whose creation is based on 2 elements : - **UIAccessibilityCustomRotorSearchPredicate** : defines the logic according to the flick type on the screen. - **UIAccessibilityCustomRotorItemResult** : ensued element from the logic above.  &lt;img alt=\&quot;\&quot; style=\&quot;max-width: 700px; height: auto; \&quot; src=\&quot;./images/iOSdev/CustomRotor_1.png\&quot; /&gt; &lt;/br&gt;&lt;/br&gt;To illustrate the programing side of this feature, the code snippet below counts and displays all the flicks up and down. &lt;pre&gt;&lt;code class=\&quot;objective-c\&quot;&gt; @interface ViewController ()  @property (weak, nonatomic) IBOutlet UILabel * rotorTitle; @property (weak, nonatomic) IBOutlet UILabel * upLabel; @property (weak, nonatomic) IBOutlet UILabel * downLabel;  @end   @implementation ViewController  static NSInteger flicksUp; static NSInteger flicksDown;   + (void)initialize {          flicksUp = 0;     flicksDown = 0; }   - (void)viewDidLoad {     [super viewDidLoad];          UIAccessibilityCustomRotor * rotor = [self buildMyRotor:@\&quot;Rotor info\&quot;];     self.accessibilityCustomRotors = @[rotor]; }   - (UIAccessibilityCustomRotor *)buildMyRotor:(NSString * _Nonnull)name{          return [[UIAccessibilityCustomRotor alloc]initWithName:name                                            itemSearchBlock:^UIAccessibilityCustomRotorItemResult * _Nullable(UIAccessibilityCustomRotorSearchPredicate * _Nonnull predicate) {                                                                                                if (predicate.searchDirection == UIAccessibilityCustomRotorDirectionNext) {                                                                                                        flicksDown += 1;                                                    self.downLabel.text = [NSString stringWithFormat:@\&quot;%ld\&quot;,(long)flicksDown];                                                                                                    } else {                                                                                                        flicksUp += 1;                                                    self.upLabel.text = [NSString stringWithFormat:@\&quot;%ld\&quot;,(long)flicksUp];                                                }                                                                                                return [[UIAccessibilityCustomRotorItemResult alloc] initWithTargetElement:self.rotorTitle                                                                                                               targetRange:nil];                                            }]; } @end &lt;/code&gt;&lt;/pre&gt;&lt;pre&gt;&lt;code class=\&quot;swift\&quot;&gt; class ViewController: UIViewController {          @IBOutlet weak var rotorTitle: UILabel!          static var flicksUp = 0     @IBOutlet weak var upLabel: UILabel!          static var flicksDown = 0     @IBOutlet weak var downLabel: UILabel!               override func viewDidLoad() {         super.viewDidLoad()                  let rotor = buildMyRotor(\&quot;Rotor info\&quot;)         self.accessibilityCustomRotors = [rotor]     }               func buildMyRotor(_ name: String) -&gt; UIAccessibilityCustomRotor {                  return  UIAccessibilityCustomRotor.init(name: name,                                                 itemSearch: { predicate -&gt; UIAccessibilityCustomRotorItemResult? in                                                                                                          if (predicate.searchDirection == UIAccessibilityCustomRotorDirection.next) {                                                                                                                  ViewController.flicksDown += 1                                                         self.downLabel.text = String(ViewController.flicksDown)                                                                                                              } else {                                                                                                                  ViewController.flicksUp += 1                                                         self.upLabel.text = String(ViewController.flicksUp)                                                     }                                                                                                          return UIAccessibilityCustomRotorItemResult.init(targetElement:self.rotorTitle,                                                                                                      targetRange: nil)         })     } } &lt;/code&gt;&lt;/pre&gt;  &lt;/br&gt;The code above gives rise to the following illustrated steps : &lt;/br&gt;&lt;img alt=\&quot;changed display with a rotor option\&quot; style=\&quot;max-width: 1200px; height: auto; \&quot; src=\&quot;./images/iOSdev/CustomRotor_2.png\&quot; /&gt; &lt;/br&gt;The use of a custom rotor is definitely not a natural part of a mobile application, that's why its **functioning** and **purpose** must be **fully explained** to assist the user experience. &lt;/br&gt;&lt;/br&gt;The main difference between a rotor option and a custom action or an adjustable element relies on the fact that it can be activated whatever the selected element. &lt;/br&gt;However, if this selected element is adjustable or holds any custom actions, **its actions will prevail over those of the rotor**. &lt;/br&gt;&lt;/br&gt;Such a feature must be implemented with **caution** and according to **specific needs** whose only purpose should be to **improve and facilitate the user experience**. "
});

documentTitles["dev-ios.html#links"] = "Links";
index.add({
    url: "dev-ios.html#links",
    title: "Links",    
    body: "### Links - [`UIAccessibilityCustomRotor`](https://developer.apple.com/documentation/uikit/uiaccessibilitycustomrotor) - [`UIAccessibilityCustomRotorItemResult`](https://developer.apple.com/documentation/uikit/uiaccessibilitycustomrotoritemresult) - [`UIAccessibilityCustomRotorSearchPredicate`](https://developer.apple.com/documentation/uikit/uiaccessibilitycustomrotorsearchpredicate)  &lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2016  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt;"
});



documentTitles["dev-ios-wwdc.html#wwdc-world-wide-developers-conference"] = "WWDC : World Wide Developers Conference";
index.add({
    url: "dev-ios-wwdc.html#wwdc-world-wide-developers-conference",
    title: "WWDC : World Wide Developers Conference",    
    body: "# WWDC : World Wide Developers Conference  &lt;script&gt;$(document).ready(function () {     setBreadcrumb([{\&quot;label\&quot;:\&quot;Developer guide\&quot;, \&quot;url\&quot;: \&quot;./dev-mobile.html\&quot;},                    {\&quot;label\&quot;:\&quot;iOS WWDC\&quot;} 	]);     addSubMenu([         {\&quot;label\&quot;:\&quot;Android guide\&quot;,\&quot;url\&quot;:\&quot;dev-android.html\&quot;},          {\&quot;label\&quot;:\&quot;iOS guide\&quot;,\&quot;url\&quot;:\&quot;dev-mobile.html\&quot;},         {\&quot;label\&quot;:\&quot;iOS WWDC\&quot;,\&quot;url\&quot;:\&quot;dev-ios-wwdc.html\&quot;, \&quot;expanded\&quot;: true}     ]); });&lt;/script&gt;  &lt;span data-menuitem=\&quot;dev-mobile\&quot;&gt;&lt;/span&gt;  This section regroups [presentations at the WWDC](https://developer.apple.com/videos/) dealing with accessibility. &lt;/br&gt;Each one of them is detailed with time references to their different contents. &lt;/br&gt;&lt;/br&gt;Most of the illustrations are parts of Apple presentations and are available at the `Resources` section inside the `Overview` sheet of each video. &lt;/br&gt;The summary of each video can be reached on clicking the title or the image presentation.  "
});

documentTitles["dev-ios-wwdc.html#2017-whats-new-in-accessibilitydev-ios-wwdc-17215html"] = "[2017 - What's New in Accessibility](./dev-ios-wwdc-17215.html)";
index.add({
    url: "dev-ios-wwdc.html#2017-whats-new-in-accessibilitydev-ios-wwdc-17215html",
    title: "[2017 - What's New in Accessibility](./dev-ios-wwdc-17215.html)",    
    body: "## [2017 - What's New in Accessibility](./dev-ios-wwdc-17215.html) Introduction of new iOS 11 accessibility features merging the user and the developer sides. &lt;/br&gt;&lt;a href=\&quot;./dev-ios-wwdc-17215.html\&quot;&gt;&lt;img style=\&quot;max-width: 700px; height: auto;\&quot; alt=\&quot;Access to what's new in accessibility.\&quot; src=\&quot;./images/iOSdev/wwdc17-215.png\&quot; /&gt;  "
});

documentTitles["dev-ios-wwdc.html#2017-building-apps-with-dynamic-typedev-ios-wwdc-17245html"] = "[2017 - Building Apps with Dynamic Type](./dev-ios-wwdc-17245.html)";
index.add({
    url: "dev-ios-wwdc.html#2017-building-apps-with-dynamic-typedev-ios-wwdc-17245html",
    title: "[2017 - Building Apps with Dynamic Type](./dev-ios-wwdc-17245.html)",    
    body: "## [2017 - Building Apps with Dynamic Type](./dev-ios-wwdc-17245.html) `Dynamic Type` highlights the iOS capacity to adapt the text size according to the user settings. &lt;/br&gt;This video contains a theoretical approach to understand all the `Dynamic Type` possibilities as well as a practical part dealing with the developer side to avoid common pitfalls. &lt;/br&gt;&lt;a href=\&quot;./dev-ios-wwdc-17245.html\&quot;&gt;&lt;img style=\&quot;max-width: 700px; height: auto;\&quot; alt=\&quot;Access to building apps with dynamic type.\&quot; src=\&quot;./images/iOSdev/wwdc17-245.png\&quot; /&gt;  "
});

documentTitles["dev-ios-wwdc.html#2016-auditing-your-apps-for-accessibilitydev-ios-wwdc-16407html"] = "[2016 - Auditing Your Apps for Accessibility](./dev-ios-wwdc-16407.html)";
index.add({
    url: "dev-ios-wwdc.html#2016-auditing-your-apps-for-accessibilitydev-ios-wwdc-16407html",
    title: "[2016 - Auditing Your Apps for Accessibility](./dev-ios-wwdc-16407.html)",    
    body: "## [2016 - Auditing Your Apps for Accessibility](./dev-ios-wwdc-16407.html) This presentation is a detailed explanation of the `Accessibility Inspector` Xcode tool with a programatic VoiceOver introduction at the begining. &lt;/br&gt;&lt;a href=\&quot;./dev-ios-wwdc-16407.html\&quot;&gt;&lt;img style=\&quot;max-width: 700px; height: auto;\&quot; alt=\&quot;Access to auditing your apps for accessibility\&quot; src=\&quot;./images/iOSdev/wwdc16-407.png\&quot; /&gt;  &lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2016  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt;"
});



documentTitles["dev-ios-wwdc-16407.html#wwdc-2016-auditing-your-apps-for-accessibility"] = "WWDC 2016 : Auditing Your Apps for Accessibility";
index.add({
    url: "dev-ios-wwdc-16407.html#wwdc-2016-auditing-your-apps-for-accessibility",
    title: "WWDC 2016 : Auditing Your Apps for Accessibility",    
    body: "# WWDC 2016 : Auditing Your Apps for Accessibility   &lt;script&gt;$(document).ready(function () {     setBreadcrumb([{\&quot;label\&quot;:\&quot;Developer guide\&quot;, \&quot;url\&quot;: \&quot;./dev-mobile.html\&quot;},                    {\&quot;label\&quot;:\&quot;iOS WWDC\&quot;, \&quot;url\&quot;: \&quot;./dev-ios-wwdc.html\&quot;},                    {\&quot;label\&quot;:\&quot;2016 - Auditing Your Apps for Accessibility\&quot;} 	]);     addSubMenu([         {\&quot;label\&quot;:\&quot;Android guide\&quot;,\&quot;url\&quot;:\&quot;dev-android.html\&quot;},          {\&quot;label\&quot;:\&quot;iOS guide\&quot;,\&quot;url\&quot;:\&quot;dev-mobile.html\&quot;},         {\&quot;label\&quot;:\&quot;iOS WWDC\&quot;,\&quot;url\&quot;:\&quot;dev-ios-wwdc.html\&quot;}     ]); });&lt;/script&gt;  &lt;span data-menuitem=\&quot;dev-mobile\&quot;&gt;&lt;/span&gt;  This video available on the **official Apple website** ([session 407](https://developer.apple.com/videos/play/wwdc2016/407/)) aims at defining and using the `Accessibility Inspector` tool of Xcode, based on good practice implementation. &lt;/br&gt;&lt;img style=\&quot;max-width: 200px; height: auto;\&quot; alt=\&quot;\&quot; src=\&quot;./images/iOSdev/wwdc16-logo.png\&quot; /&gt; &lt;img style=\&quot;max-width: 700px; height: auto;\&quot; alt=\&quot;\&quot; src=\&quot;./images/iOSdev/wwdc16-407.png\&quot; /&gt; &lt;/br&gt;&lt;/br&gt;Various contents and their video timelapse are indicated hereunder : - [Accessibility Inspector](#AccessibilityInspector) (09:38) - [Audit](#Audit) (11:21) - [Inspection](#Inspection) (20:30) - [Settings](#Settings) (28:33)  Thereafter, the selection of a title will give rise to the video playback on the Apple website directly at the proper moment.  &lt;a name=\&quot;AccessibilityInspector\&quot;&gt;&lt;/a&gt; "
});

documentTitles["dev-ios-wwdc-16407.html#accessibility-inspector-0938httpsdeveloperapplecomvideosplaywwdc2016407time578"] = "[Accessibility Inspector (09:38)](https://developer.apple.com/videos/play/wwdc2016/407/?time=578)";
index.add({
    url: "dev-ios-wwdc-16407.html#accessibility-inspector-0938httpsdeveloperapplecomvideosplaywwdc2016407time578",
    title: "[Accessibility Inspector (09:38)](https://developer.apple.com/videos/play/wwdc2016/407/?time=578)",    
    body: "### [Accessibility Inspector (09:38)](https://developer.apple.com/videos/play/wwdc2016/407/?time=578) Overview of the tool pointing out the themes to be developed : audit, inspection and settings. &lt;/br&gt;&lt;img style=\&quot;max-width: 1000px; height: auto;\&quot; alt=\&quot;\&quot; src=\&quot;./images/iOSdev/wwdc16-407-AccessibilityInspector.png\&quot; /&gt;  &lt;a name=\&quot;Audit\&quot;&gt;&lt;/a&gt; "
});

documentTitles["dev-ios-wwdc-16407.html#audit-1121httpsdeveloperapplecomvideosplaywwdc2016407time681"] = "[Audit (11:21)](https://developer.apple.com/videos/play/wwdc2016/407/?time=681)";
index.add({
    url: "dev-ios-wwdc-16407.html#audit-1121httpsdeveloperapplecomvideosplaywwdc2016407time681",
    title: "[Audit (11:21)](https://developer.apple.com/videos/play/wwdc2016/407/?time=681)",    
    body: "### [Audit (11:21)](https://developer.apple.com/videos/play/wwdc2016/407/?time=681) This part contains a demo [(12:22)](https://developer.apple.com/videos/play/wwdc2016/407/?time=742) that highlights the way to find out a solution for the problem detected by the tool [(14:24)](https://developer.apple.com/videos/play/wwdc2016/407/?time=864) while providing a bug report [(17:07)](https://developer.apple.com/videos/play/wwdc2016/407/?time=1027). &lt;/br&gt;&lt;img style=\&quot;max-width: 600px; height: auto;\&quot; alt=\&quot;\&quot; src=\&quot;./images/iOSdev/wwdc16-407-Audit.png\&quot; /&gt; &lt;/br&gt;A complementary **manual audit** is also **mandatory** to avoid bypassing some kind of hidden problems [(18:55)](https://developer.apple.com/videos/play/wwdc2016/407/?time=1135).  &lt;a name=\&quot;Inspection\&quot;&gt;&lt;/a&gt; "
});

documentTitles["dev-ios-wwdc-16407.html#inspection-2030httpsdeveloperapplecomvideosplaywwdc2016407time1230"] = "[Inspection (20:30)](https://developer.apple.com/videos/play/wwdc2016/407/?time=1230)";
index.add({
    url: "dev-ios-wwdc-16407.html#inspection-2030httpsdeveloperapplecomvideosplaywwdc2016407time1230",
    title: "[Inspection (20:30)](https://developer.apple.com/videos/play/wwdc2016/407/?time=1230)",    
    body: "### [Inspection (20:30)](https://developer.apple.com/videos/play/wwdc2016/407/?time=1230) This feature explanation is build on an example [(21:58)](https://developer.apple.com/videos/play/wwdc2016/407/?time=1318) that points out possible kinds of problems in an app like : - Inappropriate sequencing of elements during the navigation. [(23:11)](https://developer.apple.com/videos/play/wwdc2016/407/?time=1391) - Abstruse description of an element. [(23:34)](https://developer.apple.com/videos/play/wwdc2016/407/?time=1414) - Improper action of an element. [(24:02)](https://developer.apple.com/videos/play/wwdc2016/407/?time=1442)  The presentation of the view hierarchy of this feature [(24:40)](https://developer.apple.com/videos/play/wwdc2016/407/?time=1480) comes along with an important point dealing with CALayer elements that aren't taken into account by VoiceOver. &lt;/br&gt;&lt;img style=\&quot;max-width: 600px; height: auto;\&quot; alt=\&quot;\&quot; src=\&quot;./images/iOSdev/wwdc16-407-Inspection.png\&quot; /&gt;  &lt;a name=\&quot;Settings\&quot;&gt;&lt;/a&gt; "
});

documentTitles["dev-ios-wwdc-16407.html#settings-2833httpsdeveloperapplecomvideosplaywwdc2016407time1713"] = "[Settings (28:33)](https://developer.apple.com/videos/play/wwdc2016/407/?time=1713)";
index.add({
    url: "dev-ios-wwdc-16407.html#settings-2833httpsdeveloperapplecomvideosplaywwdc2016407time1713",
    title: "[Settings (28:33)](https://developer.apple.com/videos/play/wwdc2016/407/?time=1713)",    
    body: "### [Settings (28:33)](https://developer.apple.com/videos/play/wwdc2016/407/?time=1713) Last but not least, this feature (highlighted thanks to a demo - [30:25](https://developer.apple.com/videos/play/wwdc2016/407/?time=1825)) avoids switching back and forth between changing some accessibility settings and verifying the result on the app. &lt;/br&gt;&lt;img style=\&quot;max-width: 600px; height: auto;\&quot; alt=\&quot;\&quot; src=\&quot;./images/iOSdev/wwdc16-407-Settings.png\&quot; /&gt;  &lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2016  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt;"
});



documentTitles["dev-ios-wwdc-17215.html#wwdc-2017-whats-new-in-accessibility"] = "WWDC 2017 : What's New in Accessibility";
index.add({
    url: "dev-ios-wwdc-17215.html#wwdc-2017-whats-new-in-accessibility",
    title: "WWDC 2017 : What's New in Accessibility",    
    body: "# WWDC 2017 : What's New in Accessibility  &lt;script&gt;$(document).ready(function () {     setBreadcrumb([{\&quot;label\&quot;:\&quot;Developer guide\&quot;, \&quot;url\&quot;: \&quot;./dev-mobile.html\&quot;},                    {\&quot;label\&quot;:\&quot;iOS WWDC\&quot;, \&quot;url\&quot;: \&quot;./dev-ios-wwdc.html\&quot;},                    {\&quot;label\&quot;:\&quot;2017 - What's New in Accessibility\&quot;} 	]);     addSubMenu([         {\&quot;label\&quot;:\&quot;Android guide\&quot;,\&quot;url\&quot;:\&quot;dev-android.html\&quot;},          {\&quot;label\&quot;:\&quot;iOS guide\&quot;,\&quot;url\&quot;:\&quot;dev-mobile.html\&quot;},         {\&quot;label\&quot;:\&quot;iOS WWDC\&quot;,\&quot;url\&quot;:\&quot;dev-ios-wwdc.html\&quot;}     ]); });&lt;/script&gt;  &lt;span data-menuitem=\&quot;dev-mobile\&quot;&gt;&lt;/span&gt;  This video available on the **official Apple website** ([session 215](https://developer.apple.com/videos/play/wwdc2017/215/)) points out the main iOS11 accessibility features. &lt;/br&gt;&lt;img style=\&quot;max-width: 200px; height: auto;\&quot; alt=\&quot;\&quot; src=\&quot;./images/iOSdev/wwdc17-logo.png\&quot; /&gt; &lt;img style=\&quot;max-width: 700px; height: auto;\&quot; alt=\&quot;\&quot; src=\&quot;./images/iOSdev/wwdc17-215.png\&quot; /&gt; &lt;/br&gt;&lt;/br&gt;Various contents and their video timelapse are indicated hereunder : - [Text detection in image](#ImageTextDetection) (07:07) - [Improved photo description](#ImprovedPhotoDescription) (08:01) - [Type to SIRI](#TypeToSIRI) (11:37) - [Accessibility Inspector](#AccessibilityInspector) (15:35) - [UIAccessibilityProtocol](#UIAccessibilityProtocol) (21:14) - [Attributed Accessibility Properties](#AttributedProperties) (26:07) - [Accessibility Container Type](#AccessibilityContainer) (27:20) - [Custom actions](#CustomActions) (35:43) - [Default activation](#DefaultActivation) (37:38) - [Adjustable](#AdjustableValues) (38:22) - [Pass through](#PassThrough) (39:40) - [Custom scrolling](#CustomScrolling) (41:02) - [Drag &amp; Drop](#DragAndDrop) (42:54)  &lt;/br&gt;During this presentation, the following solutions for accessibility development pitfalls are suggested thanks to a simple application ([take a look at it](https://developer.apple.com/videos/play/wwdc2017/215/?time=1007)) : - How to define an (in)accessible element ? [(31:10)](https://developer.apple.com/videos/play/wwdc2017/215/?time=1870) - How to fill the `label` and `value` properties? [(29:59)](https://developer.apple.com/videos/play/wwdc2017/215/?time=1799) - How to gather several elements into a single one ? [(31:50)](https://developer.apple.com/videos/play/wwdc2017/215/?time=1910)  Thereafter, the selection of a title will give rise to the video playback directly at the proper moment.  &lt;a name=\&quot;ImageTextDetection\&quot;&gt;&lt;/a&gt; "
});

documentTitles["dev-ios-wwdc-17215.html#text-detection-in-image-0707httpsdeveloperapplecomvideosplaywwdc2017215time427"] = "[Text detection in image (07:07)](https://developer.apple.com/videos/play/wwdc2017/215/?time=427)";
index.add({
    url: "dev-ios-wwdc-17215.html#text-detection-in-image-0707httpsdeveloperapplecomvideosplaywwdc2017215time427",
    title: "[Text detection in image (07:07)](https://developer.apple.com/videos/play/wwdc2017/215/?time=427)",    
    body: "### [Text detection in image (07:07)](https://developer.apple.com/videos/play/wwdc2017/215/?time=427) It's now possible to find out if some **text is incrusted inside an image**. &lt;/br&gt;&lt;img style=\&quot;max-width: 1000px; height: auto;\&quot; alt=\&quot;\&quot; src=\&quot;./images/iOSdev/wwdc17-215-ImageTextDetection.png\&quot; /&gt; &lt;/br&gt;This basic detection that can be done thanks to a **simple tap with 3 fingers** will vocalize the text to someone who  can't initially read it.  &lt;a name=\&quot;ImprovedPhotoDescription\&quot;&gt;&lt;/a&gt; "
});

documentTitles["dev-ios-wwdc-17215.html#improved-photo-description-0801httpsdeveloperapplecomvideosplaywwdc2017215time481"] = "[Improved photo description (08:01)](https://developer.apple.com/videos/play/wwdc2017/215/?time=481)";
index.add({
    url: "dev-ios-wwdc-17215.html#improved-photo-description-0801httpsdeveloperapplecomvideosplaywwdc2017215time481",
    title: "[Improved photo description (08:01)](https://developer.apple.com/videos/play/wwdc2017/215/?time=481)",    
    body: "### [Improved photo description (08:01)](https://developer.apple.com/videos/play/wwdc2017/215/?time=481) The **vocalization of a photo description** is a new Voice Over feature that is fired thanks to a **simple tap with 3 fingers**. &lt;/br&gt;&lt;img style=\&quot;max-width: 1000px; height: auto;\&quot; alt=\&quot;\&quot; src=\&quot;./images/iOSdev/wwdc17-215-ImprovedPhotoDescription.png\&quot; /&gt; &lt;/br&gt;A very simple detection of the context, the faces and their expressions is then vocalized to a visual impaired user.  &lt;a name=\&quot;TypeToSIRI\&quot;&gt;&lt;/a&gt; "
});

documentTitles["dev-ios-wwdc-17215.html#type-to-siri-1137httpsdeveloperapplecomvideosplaywwdc2017215time697"] = "[Type to SIRI (11:37)](https://developer.apple.com/videos/play/wwdc2017/215/?time=697)";
index.add({
    url: "dev-ios-wwdc-17215.html#type-to-siri-1137httpsdeveloperapplecomvideosplaywwdc2017215time697",
    title: "[Type to SIRI (11:37)](https://developer.apple.com/videos/play/wwdc2017/215/?time=697)",    
    body: "### [Type to SIRI (11:37)](https://developer.apple.com/videos/play/wwdc2017/215/?time=697) Very usefull feature for people who **can't use SIRI vocally** or who are willing to **make some requests in a discreet way**. &lt;/br&gt;To enable this feature, go to `Accessibility` in the `Settings` to make the activation effective. &lt;/br&gt;&lt;img style=\&quot;max-width: 600px; height: auto;\&quot; alt=\&quot;\&quot; src=\&quot;./images/iOSdev/wwdc17-215-TypeToSiri.png\&quot; /&gt;  &lt;a name=\&quot;AccessibilityInspector\&quot;&gt;&lt;/a&gt; "
});

documentTitles["dev-ios-wwdc-17215.html#accessibility-inspector-1535httpsdeveloperapplecomvideosplaywwdc2017215time935"] = "[Accessibility Inspector (15:35)](https://developer.apple.com/videos/play/wwdc2017/215/?time=935)";
index.add({
    url: "dev-ios-wwdc-17215.html#accessibility-inspector-1535httpsdeveloperapplecomvideosplaywwdc2017215time935",
    title: "[Accessibility Inspector (15:35)](https://developer.apple.com/videos/play/wwdc2017/215/?time=935)",    
    body: "### [Accessibility Inspector (15:35)](https://developer.apple.com/videos/play/wwdc2017/215/?time=935) In this part, the Xcode accessibility inspector instrument is used to show basics about an accessibility app audit. &lt;/br&gt;Examples are provided without explaining in depth the tool itself to which a former Apple session ([2016 - 407](https://developer.apple.com/videos/play/wwdc2016/407/)) is dedicated.  &lt;a name=\&quot;UIAccessibilityProtocol\&quot;&gt;&lt;/a&gt; "
});

documentTitles["dev-ios-wwdc-17215.html#uiaccessibilityprotocol-2114httpsdeveloperapplecomvideosplaywwdc2017215time1274"] = "[UIAccessibilityProtocol (21:14)](https://developer.apple.com/videos/play/wwdc2017/215/?time=1274)";
index.add({
    url: "dev-ios-wwdc-17215.html#uiaccessibilityprotocol-2114httpsdeveloperapplecomvideosplaywwdc2017215time1274",
    title: "[UIAccessibilityProtocol (21:14)](https://developer.apple.com/videos/play/wwdc2017/215/?time=1274)",    
    body: "### [UIAccessibilityProtocol (21:14)](https://developer.apple.com/videos/play/wwdc2017/215/?time=1274) Reminder on the `UIAccessibility` informal protocol fundamentals that will be used during the presentation. &lt;/br&gt;&lt;img style=\&quot;max-width: 450px; height: auto;\&quot; alt=\&quot;\&quot; src=\&quot;./images/iOSdev/wwdc17-215-UIAccessibilityProtocol.png\&quot; /&gt;  &lt;a name=\&quot;AttributedProperties\&quot;&gt;&lt;/a&gt; "
});

documentTitles["dev-ios-wwdc-17215.html#attributed-accessibility-properties-2607httpsdeveloperapplecomvideosplaywwdc2017215time1567"] = "[Attributed Accessibility Properties (26:07)](https://developer.apple.com/videos/play/wwdc2017/215/?time=1567)";
index.add({
    url: "dev-ios-wwdc-17215.html#attributed-accessibility-properties-2607httpsdeveloperapplecomvideosplaywwdc2017215time1567",
    title: "[Attributed Accessibility Properties (26:07)](https://developer.apple.com/videos/play/wwdc2017/215/?time=1567)",    
    body: "### [Attributed Accessibility Properties (26:07)](https://developer.apple.com/videos/play/wwdc2017/215/?time=1567) `NSAttributedString` can be used in order to customize the way to vocalize the `label`, `value` and `hint` accessibility properties. &lt;/br&gt;&lt;img style=\&quot;max-width: 550px; height: auto;\&quot; alt=\&quot;\&quot; src=\&quot;./images/iOSdev/wwdc17-215-AttributedStrings.png\&quot; /&gt; &lt;/br&gt;Among the provided examples, one deals with the vocalization of a specific element in a foreign language. &lt;/br&gt;&lt;img style=\&quot;max-width: 600px; height: auto;\&quot; alt=\&quot;\&quot; src=\&quot;./images/iOSdev/wwdc17-215-AttributedStringsExample.png\&quot; /&gt; &lt;/br&gt;All usable keys can be found on the [Apple official documentation](https://developer.apple.com/documentation/uikit/accessibility/uiaccessibility/speech_attributes_for_attributed_strings).  &lt;a name=\&quot;AccessibilityContainer\&quot;&gt;&lt;/a&gt; "
});

documentTitles["dev-ios-wwdc-17215.html#accessibility-container-type-2720httpsdeveloperapplecomvideosplaywwdc2017215time1640"] = "[Accessibility Container Type (27:20)](https://developer.apple.com/videos/play/wwdc2017/215/?time=1640)";
index.add({
    url: "dev-ios-wwdc-17215.html#accessibility-container-type-2720httpsdeveloperapplecomvideosplaywwdc2017215time1640",
    title: "[Accessibility Container Type (27:20)](https://developer.apple.com/videos/play/wwdc2017/215/?time=1640)",    
    body: "### [Accessibility Container Type (27:20)](https://developer.apple.com/videos/play/wwdc2017/215/?time=1640) A new accessibility **typed container** is available in **iOS 11**. &lt;/br&gt;&lt;img style=\&quot;max-width: 750px; height: auto;\&quot; alt=\&quot;\&quot; src=\&quot;./images/iOSdev/wwdc17-215-ContainerType.png\&quot; /&gt; &lt;/br&gt;The notion of container already existed in iOS but VoiceOver couldn't know the kind of container until now.  &lt;a name=\&quot;CustomActions\&quot;&gt;&lt;/a&gt; "
});

documentTitles["dev-ios-wwdc-17215.html#custom-actions-3543httpsdeveloperapplecomvideosplaywwdc2017215time2143"] = "[Custom actions (35:43)](https://developer.apple.com/videos/play/wwdc2017/215/?time=2143)";
index.add({
    url: "dev-ios-wwdc-17215.html#custom-actions-3543httpsdeveloperapplecomvideosplaywwdc2017215time2143",
    title: "[Custom actions (35:43)](https://developer.apple.com/videos/play/wwdc2017/215/?time=2143)",    
    body: "### [Custom actions (35:43)](https://developer.apple.com/videos/play/wwdc2017/215/?time=2143) **Many different actions may be attributed** to an element thanks to a bunch of `accessibilityCustomAction`. &lt;/br&gt;&lt;img style=\&quot;max-width: 600px; height: auto;\&quot; alt=\&quot;\&quot; src=\&quot;./images/iOSdev/wwdc17-215-CustomActions.png\&quot; /&gt; &lt;/br&gt;As soon as this element is selected, a **vertical swipe with one finger** will be proposing the choices of possible actions. &lt;/br&gt;The programming implementation of this feature is detailed in the [development part](./dev-ios.html#custom-actions).  &lt;a name=\&quot;DefaultActivation\&quot;&gt;&lt;/a&gt; "
});

documentTitles["dev-ios-wwdc-17215.html#default-activation-3738httpsdeveloperapplecomvideosplaywwdc2017215time2258"] = "[Default activation (37:38)](https://developer.apple.com/videos/play/wwdc2017/215/?time=2258)";
index.add({
    url: "dev-ios-wwdc-17215.html#default-activation-3738httpsdeveloperapplecomvideosplaywwdc2017215time2258",
    title: "[Default activation (37:38)](https://developer.apple.com/videos/play/wwdc2017/215/?time=2258)",    
    body: "### [Default activation (37:38)](https://developer.apple.com/videos/play/wwdc2017/215/?time=2258) In order to limit or make them easier all the user VoiceOver handlings, it's possible to trigger appropriate actions as soon as an element is activated thanks to a double tap. &lt;/br&gt;&lt;img style=\&quot;max-width: 750px; height: auto;\&quot; alt=\&quot;\&quot; src=\&quot;./images/iOSdev/wwdc17-215-DefaultAction.png\&quot; /&gt;  &lt;a name=\&quot;AdjustableValues\&quot;&gt;&lt;/a&gt; "
});

documentTitles["dev-ios-wwdc-17215.html#adjustable-3822httpsdeveloperapplecomvideosplaywwdc2017215time2302"] = "[Adjustable (38:22)](https://developer.apple.com/videos/play/wwdc2017/215/?time=2302)";
index.add({
    url: "dev-ios-wwdc-17215.html#adjustable-3822httpsdeveloperapplecomvideosplaywwdc2017215time2302",
    title: "[Adjustable (38:22)](https://developer.apple.com/videos/play/wwdc2017/215/?time=2302)",    
    body: "### [Adjustable (38:22)](https://developer.apple.com/videos/play/wwdc2017/215/?time=2302) When you want to **change the value** provided by elements such as `slider` or `picker` in a **very fluid way**, two methods have to be implemented : &lt;/br&gt;&lt;img style=\&quot;max-width: 470px; height: auto;\&quot; alt=\&quot;\&quot; src=\&quot;./images/iOSdev/wwdc17-215-AdjustableValues.png\&quot; /&gt; &lt;/br&gt;As soon as the view is selected, a **vertical swipe with one finger** increases (up) or shrinks (down) the value. &lt;/br&gt;The programming implementation of this feature is detailed in the [development part](./dev-ios.html#continuous-adjustable-values).  &lt;a name=\&quot;PassThrough\&quot;&gt;&lt;/a&gt; "
});

documentTitles["dev-ios-wwdc-17215.html#pass-through-3940httpsdeveloperapplecomvideosplaywwdc2017215time2380"] = "[Pass through (39:40)](https://developer.apple.com/videos/play/wwdc2017/215/?time=2380)";
index.add({
    url: "dev-ios-wwdc-17215.html#pass-through-3940httpsdeveloperapplecomvideosplaywwdc2017215time2380",
    title: "[Pass through (39:40)](https://developer.apple.com/videos/play/wwdc2017/215/?time=2380)",    
    body: "### [Pass through (39:40)](https://developer.apple.com/videos/play/wwdc2017/215/?time=2380) If a VoiceOver user **double taps with one finger, holds it** and passes it through the panning gesture, a finer adjustment of a slider can be obtained as below : &lt;/br&gt;&lt;img style=\&quot;max-width: 400px; height: auto;\&quot; alt=\&quot;\&quot; src=\&quot;./images/iOSdev/wwdc17-215-PassThrough_1.png\&quot; /&gt; &lt;/br&gt;The [accessibilityActivationPoint](./dev-ios.html#modify-the-focus-area-of-voiceover) attribute will allow a fine location in the panning gesture : &lt;/br&gt;&lt;img style=\&quot;max-width: 500px; height: auto;\&quot; alt=\&quot;\&quot; src=\&quot;./images/iOSdev/wwdc17-215-PassThrough_2.png\&quot; /&gt;  &lt;a name=\&quot;CustomScrolling\&quot;&gt;&lt;/a&gt; "
});

documentTitles["dev-ios-wwdc-17215.html#custom-scrolling-4102httpsdeveloperapplecomvideosplaywwdc2017215time2462"] = "[Custom scrolling (41:02)](https://developer.apple.com/videos/play/wwdc2017/215/?time=2462)";
index.add({
    url: "dev-ios-wwdc-17215.html#custom-scrolling-4102httpsdeveloperapplecomvideosplaywwdc2017215time2462",
    title: "[Custom scrolling (41:02)](https://developer.apple.com/videos/play/wwdc2017/215/?time=2462)",    
    body: "### [Custom scrolling (41:02)](https://developer.apple.com/videos/play/wwdc2017/215/?time=2462) The VoiceOver basic scrolling is based on a ** 3 fingers swipe** but it can be customized thanks to the `accessibilityScroll` method belonging to the `UIAccessibilityAction` protocol. &lt;/br&gt;&lt;img style=\&quot;max-width: 750px; height: auto;\&quot; alt=\&quot;\&quot; src=\&quot;./images/iOSdev/wwdc17-215-CustomScrolling.png\&quot; /&gt;  &lt;a name=\&quot;DragAndDrop\&quot;&gt;&lt;/a&gt; "
});

documentTitles["dev-ios-wwdc-17215.html#drag-drop-4254httpsdeveloperapplecomvideosplaywwdc2017215time2574"] = "[Drag &amp; Drop (42:54)](https://developer.apple.com/videos/play/wwdc2017/215/?time=2574)";
index.add({
    url: "dev-ios-wwdc-17215.html#drag-drop-4254httpsdeveloperapplecomvideosplaywwdc2017215time2574",
    title: "[Drag &amp; Drop (42:54)](https://developer.apple.com/videos/play/wwdc2017/215/?time=2574)",    
    body: "### [Drag &amp; Drop (42:54)](https://developer.apple.com/videos/play/wwdc2017/215/?time=2574) This new feature isn't explained in depth but only its 2 overriding principles are presented : the drag sources and the drop points. &lt;/br&gt;&lt;img style=\&quot;max-width: 750px; height: auto;\&quot; alt=\&quot;\&quot; src=\&quot;./images/iOSdev/wwdc17-215-DragAndDrop.png\&quot; /&gt; &lt;/br&gt;Their use is briefly described in an [example](https://developer.apple.com/videos/play/wwdc2017/215/?time=2729) at the end of the video.  &lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2016  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt;"
});



documentTitles["dev-ios-wwdc-17245.html#wwdc-2017-building-apps-with-dynamic-type"] = "WWDC 2017 : Building Apps with Dynamic Type";
index.add({
    url: "dev-ios-wwdc-17245.html#wwdc-2017-building-apps-with-dynamic-type",
    title: "WWDC 2017 : Building Apps with Dynamic Type",    
    body: "# WWDC 2017 : Building Apps with Dynamic Type  &lt;script&gt;$(document).ready(function () {     setBreadcrumb([{\&quot;label\&quot;:\&quot;Developer guide\&quot;, \&quot;url\&quot;: \&quot;./dev-mobile.html\&quot;},                    {\&quot;label\&quot;:\&quot;iOS WWDC\&quot;, \&quot;url\&quot;: \&quot;./dev-ios-wwdc.html\&quot;},                    {\&quot;label\&quot;:\&quot;2017 - Building Apps with Dynamic Type\&quot;} 	]);     addSubMenu([         {\&quot;label\&quot;:\&quot;Android guide\&quot;,\&quot;url\&quot;:\&quot;dev-android.html\&quot;},          {\&quot;label\&quot;:\&quot;iOS guide\&quot;,\&quot;url\&quot;:\&quot;dev-mobile.html\&quot;},         {\&quot;label\&quot;:\&quot;iOS WWDC\&quot;,\&quot;url\&quot;:\&quot;dev-ios-wwdc.html\&quot;}     ]); });&lt;/script&gt;  &lt;span data-menuitem=\&quot;dev-mobile\&quot;&gt;&lt;/span&gt;  This video available on the **official Apple website** ([session 245](https://developer.apple.com/videos/play/wwdc2017/245/)) aims at defining what `Dynamic Type` is, based on good practice implementation. &lt;/br&gt;&lt;img style=\&quot;max-width: 200px; height: auto;\&quot; alt=\&quot;\&quot; src=\&quot;./images/iOSdev/wwdc17-logo.png\&quot; /&gt; &lt;img style=\&quot;max-width: 700px; height: auto;\&quot; alt=\&quot;\&quot; src=\&quot;./images/iOSdev/wwdc17-245.png\&quot; /&gt; &lt;/br&gt;&lt;/br&gt;Various contents and their video timelapse are indicated hereunder : - [Text styles](#TextStyles) (06:06) - [Custom fonts](#CustomFonts) (08:17) - [Web views](#WebViews) (09:25) - [Wrap to multiple lines](#WrapToMultipleLines) (10:14) - [Auto layout system spacing constraints](#AutoLayoutSystemSpacingConstraints) (11:31) - [Scaled values](#ScaledValue) (12:56) - [Side-by-side text](#SideBySideText) (13:36) - [PreferredContentSizeCategory](#PreferredContentSizeCategory) (15:23) - [Table view cells](#TableViewCells) (16:38) - [Images](#Images) (20:13) - [Exemple](#Demo) (24:32)  Thereafter, the selection of a title will give rise to the video playback on the Apple website directly at the proper moment.  &lt;a name=\&quot;TextStyles\&quot;&gt;&lt;/a&gt; "
});

documentTitles["dev-ios-wwdc-17245.html#text-styles-0606httpsdeveloperapplecomvideosplaywwdc2017245time366"] = "[Text styles (06:06)](https://developer.apple.com/videos/play/wwdc2017/245/?time=366)";
index.add({
    url: "dev-ios-wwdc-17245.html#text-styles-0606httpsdeveloperapplecomvideosplaywwdc2017245time366",
    title: "[Text styles (06:06)](https://developer.apple.com/videos/play/wwdc2017/245/?time=366)",    
    body: "### [Text styles (06:06)](https://developer.apple.com/videos/play/wwdc2017/245/?time=366) **All the text styles can have the 5 accessibility sizes** in iOS 11 whereas it was only the case for the *body* text style before. &lt;/br&gt;In the Xcode Interface Builder, just indicate the style in the Attribute Inspector part and tick `Dynamic Type` to adjust the text size to the device settings. &lt;/br&gt;&lt;img style=\&quot;max-width: 1000px; height: auto;\&quot; alt=\&quot;\&quot; src=\&quot;./images/iOSdev/wwdc17-245-TextStyle_1.png\&quot; /&gt; &lt;/br&gt;Get the exact same result with the following code : &lt;/br&gt;&lt;img style=\&quot;max-width: 500px; height: auto;\&quot; alt=\&quot;\&quot; src=\&quot;./images/iOSdev/wwdc17-245-TextStyle_2.png\&quot; /&gt;  &lt;a name=\&quot;CustomFonts\&quot;&gt;&lt;/a&gt; "
});

documentTitles["dev-ios-wwdc-17245.html#custom-fonts-0817httpsdeveloperapplecomvideosplaywwdc2017245time497"] = "[Custom fonts (08:17)](https://developer.apple.com/videos/play/wwdc2017/245/?time=497)";
index.add({
    url: "dev-ios-wwdc-17245.html#custom-fonts-0817httpsdeveloperapplecomvideosplaywwdc2017245time497",
    title: "[Custom fonts (08:17)](https://developer.apple.com/videos/play/wwdc2017/245/?time=497)",    
    body: "### [Custom fonts (08:17)](https://developer.apple.com/videos/play/wwdc2017/245/?time=497) The new iOS 11 class `UIFontMetrics` allows a custom font to be automatically adjusted. &lt;/br&gt;&lt;img style=\&quot;max-width: 750px; height: auto;\&quot; alt=\&quot;\&quot; src=\&quot;./images/iOSdev/wwdc17-245-CustomFonts.png\&quot; /&gt;  &lt;a name=\&quot;WebViews\&quot;&gt;&lt;/a&gt; "
});

documentTitles["dev-ios-wwdc-17245.html#web-views-0925httpsdeveloperapplecomvideosplaywwdc2017245time565"] = "[Web views (09:25)](https://developer.apple.com/videos/play/wwdc2017/245/?time=565)";
index.add({
    url: "dev-ios-wwdc-17245.html#web-views-0925httpsdeveloperapplecomvideosplaywwdc2017245time565",
    title: "[Web views (09:25)](https://developer.apple.com/videos/play/wwdc2017/245/?time=565)",    
    body: "### [Web views (09:25)](https://developer.apple.com/videos/play/wwdc2017/245/?time=565) When a web view is used, the CSS may contain information about the text style to be displayed : &lt;/br&gt;&lt;img style=\&quot;max-width: 600px; height: auto;\&quot; alt=\&quot;\&quot; src=\&quot;./images/iOSdev/wwdc17-245-WebViews.png\&quot; /&gt;  &lt;a name=\&quot;WrapToMultipleLines\&quot;&gt;&lt;/a&gt; "
});

documentTitles["dev-ios-wwdc-17245.html#wrap-to-multiple-lines-1014httpsdeveloperapplecomvideosplaywwdc2017245time614"] = "[Wrap to multiple lines (10:14)](https://developer.apple.com/videos/play/wwdc2017/245/?time=614)";
index.add({
    url: "dev-ios-wwdc-17245.html#wrap-to-multiple-lines-1014httpsdeveloperapplecomvideosplaywwdc2017245time614",
    title: "[Wrap to multiple lines (10:14)](https://developer.apple.com/videos/play/wwdc2017/245/?time=614)",    
    body: "### [Wrap to multiple lines (10:14)](https://developer.apple.com/videos/play/wwdc2017/245/?time=614) When a `label` may be troncatured after adjustement, it's recommended to write `0` number of lines in the Attribute Inspector part of the Interface Builder that will be understood as no limit. &lt;/br&gt;&lt;img style=\&quot;max-width: 1000px; height: auto;\&quot; alt=\&quot;\&quot; src=\&quot;./images/iOSdev/wwdc17-245-WrapToMultipleLines.png\&quot; /&gt;  &lt;a name=\&quot;AutoLayoutSystemSpacingConstraints\&quot;&gt;&lt;/a&gt; "
});

documentTitles["dev-ios-wwdc-17245.html#auto-layout-system-spacing-constraints-1131httpsdeveloperapplecomvideosplaywwdc2017245time691"] = "[Auto layout system spacing constraints (11:31)](https://developer.apple.com/videos/play/wwdc2017/245/?time=691)";
index.add({
    url: "dev-ios-wwdc-17245.html#auto-layout-system-spacing-constraints-1131httpsdeveloperapplecomvideosplaywwdc2017245time691",
    title: "[Auto layout system spacing constraints (11:31)](https://developer.apple.com/videos/play/wwdc2017/245/?time=691)",    
    body: "### [Auto layout system spacing constraints (11:31)](https://developer.apple.com/videos/play/wwdc2017/245/?time=691) Using a baseline constraint between two labels, the good practice for `Dynamic Type` is not to put a constant value so as not to end up in the following situation : &lt;/br&gt;&lt;img style=\&quot;max-width: 450px; height: auto;\&quot; alt=\&quot;\&quot; src=\&quot;./images/iOSdev/wwdc17-245-AutoLayoutsystemSpacingConstraints_1.png\&quot; /&gt; &lt;/br&gt;The baseline contraint `Standard Value` in Interface Builder or a programmatic solution using  `constraintEqualToSystemSpacingBelow` (iOS 11 feature) will lead to an overcome situation. &lt;/br&gt;&lt;img style=\&quot;max-width: 650px; height: auto;\&quot; alt=\&quot;\&quot; src=\&quot;./images/iOSdev/wwdc17-245-AutoLayoutsystemSpacingConstraints_2.png\&quot; /&gt;  &lt;a name=\&quot;ScaledValue\&quot;&gt;&lt;/a&gt; "
});

documentTitles["dev-ios-wwdc-17245.html#scaled-values-1256httpsdeveloperapplecomvideosplaywwdc2017245time776"] = "[Scaled values (12:56)](https://developer.apple.com/videos/play/wwdc2017/245/?time=776)";
index.add({
    url: "dev-ios-wwdc-17245.html#scaled-values-1256httpsdeveloperapplecomvideosplaywwdc2017245time776",
    title: "[Scaled values (12:56)](https://developer.apple.com/videos/play/wwdc2017/245/?time=776)",    
    body: "### [Scaled values (12:56)](https://developer.apple.com/videos/play/wwdc2017/245/?time=776) The new **scaledValue** method provides the height of a graphical element containing text whose size may automacally grow or shrink. &lt;/br&gt;&lt;img style=\&quot;max-width: 700px; height: auto;\&quot; alt=\&quot;\&quot; src=\&quot;./images/iOSdev/wwdc17-245-ScaledValue.png\&quot; /&gt; &lt;/br&gt;This might be useful for a button whose background content must be updated after a font size modification for instance.  &lt;a name=\&quot;SideBySideText\&quot;&gt;&lt;/a&gt; "
});

documentTitles["dev-ios-wwdc-17245.html#side-by-side-text-1336httpsdeveloperapplecomvideosplaywwdc2017245time816"] = "[Side-by-side text (13:36)](https://developer.apple.com/videos/play/wwdc2017/245/?time=816)";
index.add({
    url: "dev-ios-wwdc-17245.html#side-by-side-text-1336httpsdeveloperapplecomvideosplaywwdc2017245time816",
    title: "[Side-by-side text (13:36)](https://developer.apple.com/videos/play/wwdc2017/245/?time=816)",    
    body: "### [Side-by-side text (13:36)](https://developer.apple.com/videos/play/wwdc2017/245/?time=816) Vertically nearby labeled elements may become unreadable or may worsen the graphical interface at a specific text size. &lt;/br&gt;In that case, it's highly recommended to update the alignment from horizontal to vertical once this size threshold is reached. &lt;/br&gt;&lt;img style=\&quot;max-width: 700px; height: auto;\&quot; alt=\&quot;\&quot; src=\&quot;./images/iOSdev/wwdc17-245-SideBySideText.png\&quot; /&gt;  &lt;a name=\&quot;PreferredContentSizeCategory\&quot;&gt;&lt;/a&gt; "
});

documentTitles["dev-ios-wwdc-17245.html#preferredcontentsizecategory-1523httpsdeveloperapplecomvideosplaywwdc2017245time923"] = "[PreferredContentSizeCategory (15:23)](https://developer.apple.com/videos/play/wwdc2017/245/?time=923)";
index.add({
    url: "dev-ios-wwdc-17245.html#preferredcontentsizecategory-1523httpsdeveloperapplecomvideosplaywwdc2017245time923",
    title: "[PreferredContentSizeCategory (15:23)](https://developer.apple.com/videos/play/wwdc2017/245/?time=923)",    
    body: "### [PreferredContentSizeCategory (15:23)](https://developer.apple.com/videos/play/wwdc2017/245/?time=923) **2 specific groups** gather all the possible text sizes : - The first one contains the **7 basic thresholds** from `extraSmall` to `extraExtraExtraLarge`. - The second one is **accessibility dedicated** and must be activated to be taken into account. It includes the **last 5 thresholds** from `accessibilityMedium` to `accessibilityExtraExtraExtraLarge`.  These values can be obtained from the view `traitCollection` or from the application **preferredContentSizeCategory** method. &lt;/br&gt;&lt;img style=\&quot;max-width: 900px; height: auto;\&quot; alt=\&quot;\&quot; src=\&quot;./images/iOSdev/wwdc17-245-PreferredContentSizeCategory_1.png\&quot; /&gt; &lt;/br&gt;It's also possible to set conditions dealing with text sizing in order to rearrange graphical elements when necessary. &lt;/br&gt;&lt;img style=\&quot;max-width: 650px; height: auto;\&quot; alt=\&quot;\&quot; src=\&quot;./images/iOSdev/wwdc17-245-PreferredContentSizeCategory_2.png\&quot; /&gt;  &lt;a name=\&quot;TableViewCells\&quot;&gt;&lt;/a&gt; "
});

documentTitles["dev-ios-wwdc-17245.html#table-view-cells-1638httpsdeveloperapplecomvideosplaywwdc2017245time998"] = "[Table view cells (16:38)](https://developer.apple.com/videos/play/wwdc2017/245/?time=998)";
index.add({
    url: "dev-ios-wwdc-17245.html#table-view-cells-1638httpsdeveloperapplecomvideosplaywwdc2017245time998",
    title: "[Table view cells (16:38)](https://developer.apple.com/videos/play/wwdc2017/245/?time=998)",    
    body: "### [Table view cells (16:38)](https://developer.apple.com/videos/play/wwdc2017/245/?time=998) Standard table view cells content is automatically adjusted thanks to the [cell-sizing](https://developer.apple.com/videos/play/wwdc2017/245/?time=1058). &lt;/br&gt;&lt;img style=\&quot;max-width: 600px; height: auto;\&quot; alt=\&quot;\&quot; src=\&quot;./images/iOSdev/wwdc17-245-TableViews_1.png\&quot; /&gt; &lt;/br&gt;Constraints must be adapted in case of custom cells in order to obtain the desired rendering and let the cell-sizing work. &lt;/br&gt;&lt;img style=\&quot;max-width: 750px; height: auto;\&quot; alt=\&quot;\&quot; src=\&quot;./images/iOSdev/wwdc17-245-TableViews_2.png\&quot; /&gt;  &lt;a name=\&quot;Images\&quot;&gt;&lt;/a&gt; "
});

documentTitles["dev-ios-wwdc-17245.html#images-2013httpsdeveloperapplecomvideosplaywwdc2017245time1213"] = "[Images (20:13)](https://developer.apple.com/videos/play/wwdc2017/245/?time=1213)";
index.add({
    url: "dev-ios-wwdc-17245.html#images-2013httpsdeveloperapplecomvideosplaywwdc2017245time1213",
    title: "[Images (20:13)](https://developer.apple.com/videos/play/wwdc2017/245/?time=1213)",    
    body: "### [Images (20:13)](https://developer.apple.com/videos/play/wwdc2017/245/?time=1213) `Dynamic Type` allows image size adjustement for both views and tab bars as well. &lt;/br&gt;All the detailed explanations for this implementation can be found in the [development part](./dev-ios.html#graphical-elements-size).  &lt;a name=\&quot;Demo\&quot;&gt;&lt;/a&gt; "
});

documentTitles["dev-ios-wwdc-17245.html#exemple-2432httpsdeveloperapplecomvideosplaywwdc2017245time1472"] = "[Exemple (24:32)](https://developer.apple.com/videos/play/wwdc2017/245/?time=1472)";
index.add({
    url: "dev-ios-wwdc-17245.html#exemple-2432httpsdeveloperapplecomvideosplaywwdc2017245time1472",
    title: "[Exemple (24:32)](https://developer.apple.com/videos/play/wwdc2017/245/?time=1472)",    
    body: "### [Exemple (24:32)](https://developer.apple.com/videos/play/wwdc2017/245/?time=1472) During this presentation, some solutions for `Dynamic Type` pitfalls are suggested thanks to a simple application ([take a look at it](https://developer.apple.com/videos/play/wwdc2017/245/?time=1506) before reading what's next) : - **Why doesn't my implemented `Dynamic Type` work** ? [(26:19)](https://developer.apple.com/videos/play/wwdc2017/245/?time=1579) (hint = `adjustsFontForContentSizeCategory` (code) or `Automatically Adjusts Font` (Attribute Inspector) + `scaledFont` if custom font is used) - **How can I change items position to adapt text enlargement** ? [(28:01)](https://developer.apple.com/videos/play/wwdc2017/245/?time=1681) (hint = set up constraints for a vertical alignment + define these new constraints activation thanks to `preferredContentSizeCategory` + `traitCollectionDidChange` to be notified of a text size changing) - **How to make my table view cells size to fit content** ? [(31:03)](https://developer.apple.com/videos/play/wwdc2017/245/?time=1863) (hint = `UITableViewAutomaticDimension` + `estimatedRowHeight`) - **Why is there unscaled image size with the text enlargement** ? [(32:11)](https://developer.apple.com/videos/play/wwdc2017/245/?time=1931) (hint = `adjustsImageSizeForAccessibilityContentSizeCategory`) - **Why have I unsmooth images when enlargement is set up** ? [(33:07)](https://developer.apple.com/videos/play/wwdc2017/245/?time=1987) (hint = `Preserve Vector Data` in the Attribute Inspector of the .xcassets) - **How can I check enlargement with accessibility inspector** ? [(34:56)](https://developer.apple.com/videos/play/wwdc2017/245/?time=2096)  &lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2016  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt;"
});



documentTitles["dev-mobile.html#guide-for-developers"] = "Guide for developers";
index.add({
    url: "dev-mobile.html#guide-for-developers",
    title: "Guide for developers",    
    body: "# Guide for developers  &lt;script&gt;$(document).ready(function () {     setBreadcrumb([{\&quot;label\&quot;:\&quot;Guide for mobile developers\&quot;}]);     addSubMenu([         {\&quot;label\&quot;:\&quot;Android guide\&quot;,\&quot;url\&quot;:\&quot;dev-android.html\&quot;},          {\&quot;label\&quot;:\&quot;iOS guide\&quot;,\&quot;url\&quot;:\&quot;dev-ios.html\&quot;},         {\&quot;label\&quot;:\&quot;iOS WWDC\&quot;,\&quot;url\&quot;:\&quot;dev-ios-wwdc.html\&quot;}     ]);         });&lt;/script&gt;  &lt;span data-menuitem=\&quot;dev-mobile\&quot;&gt;&lt;/span&gt;  The developer guide is intended to help developers with the major Android&amp;nbsp;/ iOS accessibility options. &lt;/br&gt;Through different categories, this guide explains how to use the accessibility attributes&amp;nbsp;/ methods and provides links to the official documentation of Google&amp;nbsp;/ Apple.  Two versions are available: - **[Android version](./dev-android.html)** is about application development for the Google platform: Android. - **[iOS version](./dev-ios.html)** is about application development for the Apple platform: iOS.  The **[iOS WWDC](./dev-ios-wwdc.html)** section is dedicated to some World Wide Developers Conference presentations.         &lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2016  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt;"
});



documentTitles["index.html#orange-mobile-accessibility-guidelines"] = "Orange mobile accessibility guidelines";
index.add({
    url: "index.html#orange-mobile-accessibility-guidelines",
    title: "Orange mobile accessibility guidelines",    
    body: "# Orange mobile accessibility guidelines  &lt;script&gt;$(document).ready(function () {     setBreadcrumb([{\&quot;label\&quot;:\&quot;Presentation\&quot;}]); });&lt;/script&gt;  *** Accessibility: a need for some, a benefit for all! ***  "
});

documentTitles["index.html#mobile-accessibility-definition"] = "Mobile accessibility definition";
index.add({
    url: "index.html#mobile-accessibility-definition",
    title: "Mobile accessibility definition",    
    body: "## Mobile accessibility definition ** It is an application usable by everyone **  - People with no disabilities; - Elderly people; - People with disabilities (temporary or permanent).  ** and in all situations **  - With any kind of material: mobile browser, Android, iOS, tablet - In an unfavourable environment: poor luminosity, touchpad while moving, etc. - With specific software that compensate the handicap  "
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
    body: "### Essential criteria List of different accessibility criteria for obtaining an accessible mobile app (Android or iOS). A good way to be aware of the main criteria and commit progressively in accessibility.  "
});

documentTitles["index.html#criteria-for-developers"] = "Criteria for developers";
index.add({
    url: "index.html#criteria-for-developers",
    title: "Criteria for developers",    
    body: "### Criteria for developers Section for developers. Everything you need to know to code accessible on mobile, Android or iOS.  "
});

documentTitles["index.html#mdan"] = "mDAN";
index.add({
    url: "index.html#mdan",
    title: "mDAN",    
    body: "### mDAN mDAN application overview, the digital accessibility demonstrator for mobile. You will also find links to download the application (Android and iOS).  "
});

documentTitles["index.html#screen-reader"] = "Screen reader";
index.add({
    url: "index.html#screen-reader",
    title: "Screen reader",    
    body: "### Screen reader A simple guide to using the iOS and Android screen readers, respectively VoiceOver and TalkBack.  "
});

documentTitles["index.html#useful-links"] = "Useful links";
index.add({
    url: "index.html#useful-links",
    title: "Useful links",    
    body: "### Useful links Some useful links that will complete the explanation of this website.  &lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2016  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt;"
});



documentTitles["links.html#useful-links"] = "Useful links";
index.add({
    url: "links.html#useful-links",
    title: "Useful links",    
    body: "# Useful links  &lt;script&gt;$(document).ready(function () {     setBreadcrumb([{\&quot;label\&quot;:\&quot;Useful links\&quot;}]); });&lt;/script&gt;  &lt;span data-menuitem=\&quot;links\&quot;&gt;&lt;/span&gt;  "
});

documentTitles["links.html#going-further"] = "Going further";
index.add({
    url: "links.html#going-further",
    title: "Going further",    
    body: "## Going further You will find more detailed information on accessibility for iOS and Android on [the github repository of Disic](https://github.com/DISIC/guide-mobile_app_dev_natif) (Interministerial Directorate for Information and Communication Systems): - [Audit guide for mobile application](https://github.com/DISIC/guide-mobile_app_audit) - [Design guide for accessible mobile applications](https://github.com/DISIC/guide-mobile_app_conception) - [Guide for accessible hybrid mobile applications with Ionic and OnsenUI](https://github.com/DISIC/guide-mobile_app_dev_hybride)  "
});

documentTitles["links.html#for-android"] = "For Android";
index.add({
    url: "links.html#for-android",
    title: "For Android",    
    body: "## For Android Google and Android accessibility &lt;abbr&gt;API&lt;/abbr&gt;: - [Google official documentation](https://developer.android.com/guide/topics/ui/accessibility/index.html)   - [Complete Talkback guide](https://support.google.com/accessibility/android/answer/6283677?ref_topic=3529932)  The AccessibilityScanner application allows you to test quickly and simply the accessibility of your apps: - [AccessibilityScanner application](https://play.google.com/store/apps/details?id=com.google.android.apps.accessibility.auditor)   "
});

documentTitles["links.html#for-ios"] = "For iOS";
index.add({
    url: "links.html#for-ios",
    title: "For iOS",    
    body: "## For iOS Apple accessibility &lt;abbr&gt;API&lt;/abbr&gt;: - [Official accessibility &lt;abbr&gt;API&lt;/abbr&gt; documentation](https://developer.apple.com/library/ios/documentation/UserExperience/Conceptual/iPhoneAccessibility/Introduction/Introduction.html) - [iOS accessibility features](http://www.apple.com/accessibility/) - [Apple official accessibility documentation](https://developer.apple.com/accessibility/ios/) - [VoiceOver user guide](https://help.apple.com/iphone/9/#/iph3e2e415f)   &lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2016  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt;"
});



documentTitles["mdan.html#mdan"] = "mDAN";
index.add({
    url: "mdan.html#mdan",
    title: "mDAN",    
    body: "# mDAN     &lt;script&gt;$(document).ready(function () {     setBreadcrumb([{\&quot;label\&quot;:\&quot;mDAN\&quot;}]); });&lt;/script&gt;  &lt;span data-menuitem=\&quot;mdan\&quot;&gt;&lt;/span&gt;  "
});

documentTitles["mdan.html#mdan-what-is-it"] = "mDAN, what is it?";
index.add({
    url: "mdan.html#mdan-what-is-it",
    title: "mDAN, what is it?",    
    body: "## mDAN, what is it?  mDAN is a mobile application (for Android and iOS) that showcases accessibility on a mobile device. Its objectives are: - accessibility presentation, - mobile accessibility criteria, - guide for Developers, - screen reader user guide (Talkback or VoiceOver), - presentation of accessibility, - contact, etc.  "
});

documentTitles["mdan.html#mdan-yes-but-for-whom"] = "mDAN, yes, but for whom?";
index.add({
    url: "mdan.html#mdan-yes-but-for-whom",
    title: "mDAN, yes, but for whom?",    
    body: "## mDAN, yes, but for whom?  mDAN targets everybody interested or involved in accessibility:  - Testers: with the accessibility criteria and the screen reader user guide; - Developers: with the development guide; - Managers, designers, etc.: for accessibility awareness.  "
});

documentTitles["mdan.html#i-want-mdan"] = "I want mDAN!";
index.add({
    url: "mdan.html#i-want-mdan",
    title: "I want mDAN!",    
    body: "## I want mDAN!  [Source code is available on github](https://github.com/Orange-OpenSource/m-dan)  mDAN will be available soon on the Play Store and the App Store.  You can already [download the Android version](/mDAN_v2.2.0.apk).  &amp;nbsp; &lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2016  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt;"
});



documentTitles["screen-reader.html#talkback-and-voiceover-guide"] = "TalkBack and VoiceOver guide";
index.add({
    url: "screen-reader.html#talkback-and-voiceover-guide",
    title: "TalkBack and VoiceOver guide",    
    body: "# TalkBack and VoiceOver guide  &lt;script&gt;$(document).ready(function () {     setBreadcrumb([{\&quot;label\&quot;:\&quot;Screen reader\&quot;}]);     addSubMenu([         {\&quot;label\&quot;:\&quot;Android guide\&quot;,\&quot;url\&quot;:\&quot;talkback.html\&quot;},          {\&quot;label\&quot;:\&quot;iOS guide\&quot;,\&quot;url\&quot;:\&quot;voiceover.html\&quot;}     ]);             });&lt;/script&gt;  &lt;span data-menuitem=\&quot;screen-reader\&quot;&gt;&lt;/span&gt;  Through this section, we list the common gestures for Android and iOS screen readers. These assistive tools have a lot of functionalities but require a minimum knowledge to be used effectively.  Two versions are available: - **TalkBack** built-in screen reader for Android. - **VoiceOver** built-in screen reader for iOS.  &lt;div class=\&quot;mobileImg col-xs-12 col-md-6 col-lg-4\&quot;&gt;     &lt;h2 class=\&quot;sr-only\&quot;&gt;TalkBack&lt;/h2&gt;               &lt;a href=\&quot;./talkback.html\&quot; class=\&quot;btn btn-info\&quot;&gt;         ![](./images/android.png)         &lt;div&gt;TalkBack user guide&lt;/div&gt;     &lt;/a&gt; &lt;/div&gt; &lt;div class=\&quot;mobileImg col-xs-12 col-md-6 col-lg-4\&quot;&gt;     &lt;h2 class=\&quot;sr-only\&quot;&gt;Voiceover&lt;/h2&gt;               &lt;a href=\&quot;./voiceover.html\&quot; class=\&quot;btn btn-info\&quot;&gt;         ![](./images/iphone.png)         &lt;div&gt;VoiceOver user guide&lt;/div&gt;     &lt;/a&gt; &lt;/div&gt;              &lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2016  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt;"
});



documentTitles["screen-reader-voiceover-iphonex.html#iphonex-basic-gestures"] = "iPhoneX basic gestures";
index.add({
    url: "screen-reader-voiceover-iphonex.html#iphonex-basic-gestures",
    title: "iPhoneX basic gestures",    
    body: "# iPhoneX basic gestures  &lt;script&gt;$(document).ready(function () {     setBreadcrumb([         {\&quot;label\&quot;:\&quot;Screen reader\&quot;, \&quot;url\&quot;: \&quot;./screen-reader.html\&quot;},         {\&quot;label\&quot;:\&quot;iOS guide\&quot;, \&quot;url\&quot;: \&quot;./voiceover.html\&quot;}     ]);     addSubMenu([         {\&quot;label\&quot;:\&quot;Android guide\&quot;,\&quot;url\&quot;:\&quot;talkback.html\&quot;},          {\&quot;label\&quot;:\&quot;iOS guide\&quot;,\&quot;url\&quot;:\&quot;voiceover.html\&quot;}     ]); });&lt;/script&gt;  &lt;span data-menuitem=\&quot;screen-reader\&quot;&gt;&lt;/span&gt;  This page describes the iPhoneX common gestures thanks to textual explanations and illustrations so as to easily understand the movements to be done. &lt;/br&gt;Thereafter, **illustrations with a home button device** are also included to see possible differences.  - [Go to Home Screen.](#BackHome) - [Unlock the screen.](#UnlockScreen) - [Turn on the locked screen.](#TurnOnLockedScreen) - [Open Control Center.](#ControlCenter) - [Get Multitask Pane.](#Multitask) - [Select an opened application.](#ChangeOpenedApp) - [Reachability.](#Reachability) - [Ask Siri.](#Siri) - [Use Apple Pay.](#ApplePay) - [Take a screenshot.](#Screenshot) - [Power off the device.](#PowerOff)  &lt;a name=\&quot;BackHome\&quot;&gt;&lt;/a&gt; &lt;/br&gt;Gesture : **flick up with 1 finger** from the bottom edge of the screen. &lt;/br&gt;&lt;img style=\&quot;max-width: 700px; height: auto;\&quot; alt=\&quot;\&quot; src=\&quot;./images/iphonex_en_back_home.png\&quot; /&gt; &lt;/br&gt;&lt;/br&gt; &lt;a name=\&quot;UnlockScreen\&quot;&gt;&lt;/a&gt; "
});

documentTitles["screen-reader-voiceover-iphonex.html#unlock-the-screen"] = "Unlock the screen";
index.add({
    url: "screen-reader-voiceover-iphonex.html#unlock-the-screen",
    title: "Unlock the screen",    
    body: "### Unlock the screen Gesture : **flick up with 1 finger** from the bottom edge of the locked screen. &lt;/br&gt;Result : screen automatic unlock with the activated faceID functionality. &lt;/br&gt;The gesture is exactly the same as previously explained but deals with a locked screen in our case.  &lt;a name=\&quot;TurnOnLockedScreen\&quot;&gt;&lt;/a&gt; &lt;/br&gt;&lt;/br&gt;&lt;/br&gt;Gesture : **simple-tap with 1 finger** anywhere on the screen. &lt;/br&gt;&lt;img style=\&quot;max-width: 700px; height: auto;\&quot; alt=\&quot;\&quot; src=\&quot;./images/iphonex_en_turn_on_locked_screen.png\&quot; /&gt;  &lt;a name=\&quot;ControlCenter\&quot;&gt;&lt;/a&gt; &lt;/br&gt;Gesture : **flick down with 1 finger** from the upper right corner of the screen. &lt;/br&gt;&lt;img style=\&quot;max-width: 700px; height: auto;\&quot; alt=\&quot;\&quot; src=\&quot;./images/iphonex_en_control_center.png\&quot; /&gt;  &lt;a name=\&quot;Multitask\&quot;&gt;&lt;/a&gt; &lt;/br&gt;&lt;/br&gt;Gesture : **swipe up and hold with 1 finger** from the bottom edge of the screen until seeing a list of opened applications. &lt;/br&gt;This swipe may also end up to the right side of the screen to obtain the same result. &lt;/br&gt;&lt;/br&gt;Result : display of all opened applications. &lt;/br&gt;&lt;img style=\&quot;max-width: 700px; height: auto;\&quot; alt=\&quot;\&quot; src=\&quot;./images/iphonex_en_multitask.png\&quot; /&gt;  &lt;a name=\&quot;ChangeOpenedApp\&quot;&gt;&lt;/a&gt; &lt;/br&gt;Gesture : **swipe right or left with 1 finger** in the lowest part of the screen. &lt;/br&gt;&lt;img style=\&quot;max-width: 500px; height: auto;\&quot; alt=\&quot;\&quot; src=\&quot;./images/iphonex_en_change_opened_app.png\&quot; /&gt;  &lt;a name=\&quot;Reachability\&quot;&gt;&lt;/a&gt; &lt;/br&gt;Gesture : **flick down with 1 finger** from the lowest part of the screen. &lt;/br&gt;A flick up will rise the top of the minimized page up to the top of the screen. &lt;/br&gt;&lt;img style=\&quot;max-width: 700px; height: auto;\&quot; alt=\&quot;\&quot; src=\&quot;./images/iphonex_en_reachability.png\&quot; /&gt;  &lt;a name=\&quot;Siri\&quot;&gt;&lt;/a&gt; &lt;/br&gt;Gesture : **press and hold** the power side button until the Siri screen appears (1 or 2 seconds max). &lt;/br&gt;&lt;img style=\&quot;max-width: 700px; height: auto;\&quot; alt=\&quot;\&quot; src=\&quot;./images/iphonex_en_siri.png\&quot; /&gt;  &lt;a name=\&quot;ApplePay\&quot;&gt;&lt;/a&gt; &lt;/br&gt;Gesture : **double-click** the power side button until the Apple Pay screen appears. &lt;/br&gt;&lt;img style=\&quot;max-width: 700px; height: auto;\&quot; alt=\&quot;\&quot; src=\&quot;./images/iphonex_en_apple_pay.png\&quot; /&gt;  &lt;a name=\&quot;Screenshot\&quot;&gt;&lt;/a&gt; &lt;/br&gt;Gesture : **rapid click** on the power side and the volume up buttons **at the same time**. &lt;/br&gt;The screenshot is recorded in the `Photos` application of the device. &lt;/br&gt;&lt;img style=\&quot;max-width: 800px; height: auto;\&quot; alt=\&quot;\&quot; src=\&quot;./images/iphonex_en_screenshot.png\&quot; /&gt;  &lt;a name=\&quot;PowerOff\&quot;&gt;&lt;/a&gt; &lt;/br&gt;Gesture : **press and hold** the power side and the volume up buttons **at the same time**. &lt;/br&gt;Result : updated screen display with a choice for powering off the device. &lt;/br&gt;&lt;img style=\&quot;max-width: 800px; height: auto;\&quot; alt=\&quot;\&quot; src=\&quot;./images/iphonex_en_power_off.png\&quot; /&gt;  &lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2016  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt;"
});



documentTitles["talkback.html#talkback-user-guide"] = "Talkback user guide";
index.add({
    url: "talkback.html#talkback-user-guide",
    title: "Talkback user guide",    
    body: "# Talkback user guide  &lt;script&gt;$(document).ready(function () {     setBreadcrumb([{\&quot;label\&quot;:\&quot;Screen reader\&quot;, \&quot;url\&quot;:\&quot;./screen-reader.html\&quot;}, {\&quot;label\&quot;:\&quot;Talkback user guide\&quot;}]);     addSubMenu([         {\&quot;label\&quot;:\&quot;Android guide\&quot;,\&quot;url\&quot;:\&quot;talkback.html\&quot;, \&quot;expanded\&quot;: true},          {\&quot;label\&quot;:\&quot;iOS guide\&quot;,\&quot;url\&quot;:\&quot;voiceover.html\&quot;}     ]);                 });&lt;/script&gt;  &lt;span data-menuitem=\&quot;screen-reader\&quot;&gt;&lt;/span&gt;  TalkBack is a built-in screen reader for Android that reads aloud the items that appear on the device screen. It is free and it vocalizes all visible elements in the page specially for blind or partially sighted, dyslexic or illiterate users. A tool like TalkBack is called either screen reader or speech synthesizer, even if a screen reader is actually a software associated with voice synthesis.  When TalkBack is on, the standard gestures behave differently. Furthermore, additional gestures let you move the focus on the screen and control the selected items. TalkBack has gestures with one, two and three fingers to select and to go through elements. We describe here the basic gestures commonly used. Note: TalkBack is considered as accessible since the JellyBean release (4.1) because you can navigate sequentially.  First of all, update TalkBack here: [PlayStore Link](https://play.google.com/store/apps/details?id=com.google.android.marvin.talkback)  "
});

documentTitles["talkback.html#common-gestures"] = "Common gestures";
index.add({
    url: "talkback.html#common-gestures",
    title: "Common gestures",    
    body: "## Common gestures &lt;ul class=\&quot;list-gesture\&quot;&gt;   &lt;li class=\&quot;clearfix\&quot;&gt;     &lt;img src=\&quot;./images/gesture1.png\&quot; alt=\&quot;\&quot; width=\&quot;80\&quot;&gt;         &lt;h3&gt;Drag one finger&lt;/h3&gt;     &lt;p&gt;Explore your screen and hear audible feedback for what is being touched.&lt;/p&gt;   &lt;/li&gt;   &lt;li class=\&quot;clearfix\&quot;&gt;         &lt;img src=\&quot;./images/gesture2.png\&quot; alt=\&quot;\&quot; width=\&quot;80\&quot;&gt;     &lt;h3&gt;Double-tap anywhere on the screen&lt;/h3&gt;     &lt;p&gt;Opens or activates the item that you last touched (vocalized).&lt;/p&gt;   &lt;/li&gt;   &lt;li class=\&quot;clearfix\&quot;&gt;       &lt;img src=\&quot;./images/gesture3_1.png\&quot; alt=\&quot;\&quot; width=\&quot;80\&quot;&gt;       &lt;img src=\&quot;./images/gesture3_2.png\&quot; alt=\&quot;\&quot; width=\&quot;80\&quot;&gt;           &lt;h3&gt;Swipe up or down using two fingers&lt;/h3&gt;       &lt;p&gt;Scroll within lists or pages if selected. Equivalent to a vertical swipe.&lt;/p&gt;   &lt;/li&gt;   &lt;li class=\&quot;clearfix\&quot;&gt;       &lt;img src=\&quot;./images/gesture4_1.png\&quot; alt=\&quot;\&quot; width=\&quot;80\&quot;&gt;       &lt;img src=\&quot;./images/gesture4_2.png\&quot; alt=\&quot;\&quot; width=\&quot;80\&quot;&gt;           &lt;h3&gt;Swipe left or right using two fingers&lt;/h3&gt;       &lt;p&gt;Change pages and screens when possible. Equivalent to a horizontal swipe.&lt;/p&gt;    &lt;/li&gt;   &lt;li class=\&quot;clearfix\&quot;&gt;       &lt;img src=\&quot;./images/gesture5.png\&quot; alt=\&quot;\&quot; width=\&quot;80\&quot;&gt;           &lt;h3&gt;Swipe right using one finger&lt;/h3&gt;       &lt;p&gt;Move the focus to the next item.&lt;/p&gt;   &lt;/li&gt;   &lt;li class=\&quot;clearfix\&quot;&gt;       &lt;img src=\&quot;./images/gesture6.png\&quot; alt=\&quot;\&quot; width=\&quot;80\&quot;&gt;           &lt;h3&gt;Swipe left using one finger.&lt;/h3&gt;       &lt;p&gt;Move the focus to the previous item.&lt;/p&gt;   &lt;/li&gt;   &lt;li class=\&quot;clearfix\&quot;&gt;       &lt;img src=\&quot;./images/gesture7.png\&quot; alt=\&quot;\&quot; width=\&quot;80\&quot;&gt;       &lt;img src=\&quot;./images/gesture8.png\&quot; alt=\&quot;\&quot; width=\&quot;80\&quot;&gt;       &lt;h3&gt;Swipe up or down using one finger&lt;/h3&gt;       &lt;p&gt;Cycle through navigation mode: “pages”, “by default (elements)”, “characters”, “words”, “lines” et “paragraphs”.&lt;/p&gt;   &lt;/li&gt; &lt;/ul&gt;  &lt;span class=\&quot;licence\&quot;&gt;These images are licensed under the Creative Commons Share Alike 2.0 license. Photo credit: &lt;a href=\&quot;http://www.flickr.com/people/27512715@N02/\&quot;&gt;openexhibits&lt;/a&gt;&lt;/span&gt;  For more information about TalkBack and a detailed description of its features, please read the [Google’s official documentation on TalkBack](https://support.google.com/accessibility/android/answer/6283677?ref_topic=3529932).  &amp;nbsp; &lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2016  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt;"
});



documentTitles["voiceover.html#voiceover-user-guide"] = "VoiceOver user guide";
index.add({
    url: "voiceover.html#voiceover-user-guide",
    title: "VoiceOver user guide",    
    body: "# VoiceOver user guide  &lt;script&gt;$(document).ready(function () {     setBreadcrumb([{\&quot;label\&quot;:\&quot;Screen reader\&quot;, \&quot;url\&quot;:\&quot;./screen-reader.html\&quot;},                    {\&quot;label\&quot;:\&quot;VoiceOver user guide\&quot;}]);     addSubMenu([         {\&quot;label\&quot;:\&quot;Android guide\&quot;,\&quot;url\&quot;:\&quot;talkback.html\&quot;},          {\&quot;label\&quot;:\&quot;iOS guide\&quot;,\&quot;url\&quot;:\&quot;voiceover.html\&quot;, \&quot;expanded\&quot;: true}     ]);             });&lt;/script&gt;  &lt;span data-menuitem=\&quot;screen-reader\&quot;&gt;&lt;/span&gt;  VoiceOver is a built-in screen reader that reads aloud the items that appear on the device screen. &lt;/br&gt;It vocalizes all visible elements in the page specially for blind or impaired, dyslexic or illiterate users.  When VoiceOver is on, the standard gestures behave differently and additional gestures let you move the focus on the screen and control the selected items.   It's better but not mandatory to **activate the vibration** feature in the accessibility settings in order to feel the trigger of some actions. &lt;/br&gt;&lt;img style=\&quot;max-width: 350px; height: auto;\&quot; alt=\&quot;\&quot; src=\&quot;./images/iphonex_vo_en_vibration.png\&quot; /&gt; &lt;/br&gt;A sound may be heard in case of a disactivated vibration feature but VoiceOver might cover it.  Two gestures are important to be well understood so as to perfectly harness the provided details thereafter : &lt;/br&gt;&lt;img style=\&quot;max-width: 100px; height: auto;\&quot; alt=\&quot;\&quot; src=\&quot;./images/iphonex_1finger_flick_up.png\&quot; /&gt; The **flick** consists in raising the finger of the screen at the end of the mopvement while continuing it in the air. &lt;/br&gt;&lt;img style=\&quot;max-width: 100px; height: auto;\&quot; alt=\&quot;\&quot; src=\&quot;./images/iphonex_1finger_swipe_up.png\&quot; /&gt; The **swipe** consists in doing the gesture while keeping the finger on the screen.  First, VoiceOver common gestures will be introduced to be followed by iPhoneX dedicated gestures. &lt;/br&gt;The last part will deal with unusual but useful features for an advanced user.  "
});

documentTitles["voiceover.html#common-gestures"] = "Common gestures";
index.add({
    url: "voiceover.html#common-gestures",
    title: "Common gestures",    
    body: "## Common gestures &lt;ul class=\&quot;list-gesture\&quot;&gt;   &lt;li class=\&quot;clearfix\&quot;&gt;       &lt;img src=\&quot;./images/gesture1.png\&quot; alt=\&quot;\&quot; width=\&quot;80\&quot;&gt;           &lt;h3&gt;Drag one finger&lt;/h3&gt;       &lt;p&gt;Explore your screen and hear audible feedback for what is being touched.&lt;/p&gt;   &lt;/li&gt;   &lt;li class=\&quot;clearfix\&quot;&gt;       &lt;img src=\&quot;./images/gesture2.png\&quot; alt=\&quot;\&quot; width=\&quot;80\&quot;&gt;           &lt;h3&gt;Double-tap anywhere on the screen&lt;/h3&gt;       &lt;p&gt;Opens or activates the item that you last touched (vocalized).&lt;/p&gt;   &lt;/li&gt;     &lt;li class=\&quot;clearfix\&quot;&gt;       &lt;img src=\&quot;./images/gesture9_1.png\&quot; alt=\&quot;\&quot; width=\&quot;80\&quot;&gt;       &lt;img src=\&quot;./images/gesture9_2.png\&quot; alt=\&quot;\&quot; width=\&quot;80\&quot;&gt;         &lt;h3&gt;Swipe up or down using three fingers&lt;/h3&gt;       &lt;p&gt;Scroll within lists or pages if selected. Equivalent to a vertical swipe.&lt;/p&gt;&lt;/br&gt;&lt;/br&gt;   &lt;/li&gt;   &lt;li class=\&quot;clearfix\&quot;&gt;       &lt;img src=\&quot;./images/gesture10_1.png\&quot; alt=\&quot;\&quot; width=\&quot;80\&quot;&gt;       &lt;img src=\&quot;./images/gesture10_2.png\&quot; alt=\&quot;\&quot; width=\&quot;80\&quot;&gt;         &lt;h3&gt;Swipe left or right using three fingers&lt;/h3&gt;       &lt;p&gt;Change pages and screens when possible. Equivalent to a horizontal swipe.&lt;/p&gt;   &lt;/li&gt;   &lt;li class=\&quot;clearfix\&quot;&gt;           &lt;img src=\&quot;./images/gesture5.png\&quot; alt=\&quot;\&quot; width=\&quot;80\&quot;&gt;         &lt;h3&gt;Flick right using one finger&lt;/h3&gt;       &lt;p&gt;Move the focus to the next item.&lt;/p&gt;   &lt;/li&gt;   &lt;li class=\&quot;clearfix\&quot;&gt;       &lt;img src=\&quot;./images/gesture6.png\&quot; alt=\&quot;\&quot; width=\&quot;80\&quot;&gt;         &lt;h3&gt;Flick left using one finger.&lt;/h3&gt;       &lt;p&gt;Move the focus to the previous item.&lt;/p&gt;   &lt;/li&gt;   &lt;li class=\&quot;clearfix\&quot;&gt;          &lt;img src=\&quot;./images/gesture7.png\&quot; alt=\&quot;\&quot; width=\&quot;80\&quot;&gt;           &lt;h3&gt;Flick up using one finger&lt;/h3&gt;       &lt;p&gt;Increase the value of an adjustable element.&lt;/p&gt;   &lt;/li&gt;   &lt;li class=\&quot;clearfix\&quot;&gt;       &lt;img src=\&quot;./images/gesture8.png\&quot; alt=\&quot;\&quot; width=\&quot;80\&quot;&gt;           &lt;h3&gt;Flick down using one finger&lt;/h3&gt;       &lt;p&gt;Decrease the value of an adjustable element.&lt;/p&gt;   &lt;/li&gt; &lt;/ul&gt;  &lt;span class=\&quot;licence\&quot;&gt;These images are licensed under the Creative Commons Share Alike 2.0 license. Photo credit: &lt;a href=\&quot;http://www.flickr.com/people/27512715@N02/\&quot;&gt;openexhibits&lt;/a&gt;&lt;/span&gt;  For more information about VoiceOver and a detailed description of its features, please read [Apple’s official documentation on VoiceOver](https://help.apple.com/iphone/9/#/iph3e2e415f). &lt;/br&gt;&lt;/br&gt;&lt;/br&gt; "
});

documentTitles["voiceover.html#iphonex-img-stylemax-width-400px-height-auto-alt-srcimagesiphonexjpg"] = "iPhoneX &lt;img style=\&quot;max-width: 400px; height: auto;\&quot; alt=\&quot;\&quot; src=\&quot;./images/iphonex.jpg\&quot; /&gt;";
index.add({
    url: "voiceover.html#iphonex-img-stylemax-width-400px-height-auto-alt-srcimagesiphonexjpg",
    title: "iPhoneX &lt;img style=\&quot;max-width: 400px; height: auto;\&quot; alt=\&quot;\&quot; src=\&quot;./images/iphonex.jpg\&quot; /&gt;",    
    body: "## iPhoneX &lt;img style=\&quot;max-width: 400px; height: auto;\&quot; alt=\&quot;\&quot; src=\&quot;./images/iphonex.jpg\&quot; /&gt; The lack of the home button on the main screen for this device has modified the usual gestures. &lt;/br&gt;These [new common gestures](./screen-reader-voiceover-iphonex.html) have induced new VoiceOver behavior for some actions : - [Go to Home Screen.](#BackHome) - [Get Multitask Pane.](#Multitask) - [Open Control Center.](#ControlCenter) - [See Notifications.](#NotificationCenter)  &lt;a name=\&quot;BackHome\&quot;&gt;&lt;/a&gt; &lt;/br&gt;Gesture : **flick up with one finger** from the bottom edge of the screen until you feel a **simple vibration** (approximately the **first lower quarter part of the screen**). &lt;/br&gt;&lt;img style=\&quot;max-width: 470px; height: auto;\&quot; alt=\&quot;\&quot; src=\&quot;./images/iphonex_vo_en_back_home.png\&quot; /&gt;  &lt;a name=\&quot;Multitask\&quot;&gt;&lt;/a&gt; &lt;/br&gt;&lt;/br&gt;Gesture : **flick up with one finger** from the bottom edge of the screen until you feel a **double vibration** (approximately **in the middle of the screen**). &lt;/br&gt;&lt;img style=\&quot;max-width: 500px; height: auto;\&quot; alt=\&quot;\&quot; src=\&quot;./images/iphonex_vo_en_multitask.png\&quot; /&gt;  &lt;a name=\&quot;ControlCenter\&quot;&gt;&lt;/a&gt; &lt;/br&gt;Gesture: **flick down with one finger** from the top edge of the screen until you feel a **simple vibration** (approximately the **first upper quarter part of the screen**). &lt;/br&gt;&lt;img style=\&quot;max-width: 520px; height: auto;\&quot; alt=\&quot;\&quot; src=\&quot;./images/iphonex_vo_en_control_center.png\&quot; /&gt;  &lt;a name=\&quot;NotificationCenter\&quot;&gt;&lt;/a&gt; &lt;/br&gt;Gesture: **flick down with one finger** from the top edge of the screen until you feel a **double vibration** (approximately **in the middle of the screen**). &lt;/br&gt;&lt;img style=\&quot;max-width: 550px; height: auto;\&quot; alt=\&quot;\&quot; src=\&quot;./images/iphonex_vo_en_notification_center.png\&quot; /&gt; &lt;/br&gt;&lt;/br&gt;&lt;/br&gt; "
});

documentTitles["voiceover.html#tips-tricks"] = "Tips &amp; Tricks";
index.add({
    url: "voiceover.html#tips-tricks",
    title: "Tips &amp; Tricks",    
    body: "## Tips &amp; Tricks Hereunder are unusual features that may be useful to a VoiceOver user on any device : - [Read elements from the top.](#ReadAllElementsFromTop) - [Read elements from the selection.](#ReadAllElementsFromSelection) - [Start/pause the elements vocalization.](#ToggleAutomaticReading) - [Locate the selected element.](#LocateSelectedElement) - [Toggle Speech.](#ToggleSpeech) - [Open Control Center.](#ControlCenter) - [See Notifications.](#NotificationCenter) - [Activate the selected element.](#ElementActivation) - [Go back to the previous page.](#Scrub) - [Use the item chooser list.](#ItemChooserList) - [Select the first element on the page.](#PageFirstElement) - [Select the last element on the page.](#PageLastElement) - [Toggle Curtain Screen.](#CurtainScreen) - [Set a custom label.](#CustomLabel) - [Use Spotlight Search.](#SpotlightSearch)  &lt;a name=\&quot;ReadAllElementsFromTop\&quot;&gt;&lt;/a&gt; &lt;/br&gt;Gesture : **flick up with 2 fingers** anywhere on the screen. &lt;/br&gt;&lt;img style=\&quot;max-width: 550px; height: auto;\&quot; alt=\&quot;\&quot; src=\&quot;./images/iphonex_vo_en_all_from_top.png\&quot; /&gt;  &lt;a name=\&quot;ReadAllElementsFromSelection\&quot;&gt;&lt;/a&gt; &lt;/br&gt;Gesture : **flick down with 2 fingers** anywhere on the screen. &lt;/br&gt;&lt;img style=\&quot;max-width: 500px; height: auto;\&quot; alt=\&quot;\&quot; src=\&quot;./images/iphonex_vo_en_all_from_selection.png\&quot; /&gt;  &lt;a name=\&quot;ToggleAutomaticReading\&quot;&gt;&lt;/a&gt; &lt;/br&gt;Gesture : **simple-tap with 2 fingers** anywhere on the screen. &lt;/br&gt;&lt;img style=\&quot;max-width: 500px; height: auto;\&quot; alt=\&quot;\&quot; src=\&quot;./images/iphonex_vo_en_stop_resume_ auto_vocal.png\&quot; /&gt;  &lt;a name=\&quot;LocateSelectedElement\&quot;&gt;&lt;/a&gt; &lt;/br&gt;Gesture : **simple-tap with 3 fingers** anywhere on the screen. &lt;/br&gt;&lt;img style=\&quot;max-width: 500px; height: auto;\&quot; alt=\&quot;\&quot; src=\&quot;./images/iphonex_vo_en_locate_select.png\&quot; /&gt;  &lt;a name=\&quot;ToggleSpeech\&quot;&gt;&lt;/a&gt; &lt;/br&gt;Gesture : **double-tap with 3 fingers** anywhere on the screen. &lt;/br&gt;If the `zoom` functionality is activated in the settings, a **triple-tap** will be mandatory to obtain the same result. &lt;/br&gt;&lt;img style=\&quot;max-width: 400px; height: auto;\&quot; alt=\&quot;\&quot; src=\&quot;./images/iphonex_vo_en_stop_resume_speech.png\&quot; /&gt;  &lt;a name=\&quot;ControlCenter\&quot;&gt;&lt;/a&gt; &lt;/br&gt;First of all, **an element of the status bar must be selected**. &lt;/br&gt;Gesture: **flick up with 3 fingers** anywhere on the screen. &lt;/br&gt;&lt;img style=\&quot;max-width: 550px; height: auto;\&quot; alt=\&quot;\&quot; src=\&quot;./images/iphonex_vo_en_control_center_bis.png\&quot; /&gt;  &lt;a name=\&quot;NotificationCenter\&quot;&gt;&lt;/a&gt; &lt;/br&gt;First of all, **an element of the status bar must be selected**. &lt;/br&gt;Gesture: **flick down with 3 fingers** anywhere on the screen. &lt;/br&gt;&lt;img style=\&quot;max-width: 600px; height: auto;\&quot; alt=\&quot;\&quot; src=\&quot;./images/iphonex_vo_en_notification_center_bis.png\&quot; /&gt;  &lt;a name=\&quot;ElementActivation\&quot;&gt;&lt;/a&gt; &lt;/br&gt;Gesture : **select and hold** the element with **one finger**, then make a **simple-tap with another finger** anywhere on the screen. &lt;/br&gt;This is a very useful gesture when using a keyboard : the index finger select the letter while the middle finger makes the simple-tap. &lt;/br&gt;&lt;img style=\&quot;max-width: 600px; height: auto;\&quot; alt=\&quot;\&quot; src=\&quot;./images/iphonex_vo_en_activate_elt_bis.png\&quot; /&gt;  &lt;a name=\&quot;Scrub\&quot;&gt;&lt;/a&gt; &lt;/br&gt;Gesture : **swipe with 2 fingers** drawing a **Z-shape** anywhere on the screen. &lt;/br&gt;This ends exactly in the same result as the click on the native back button. &lt;/br&gt;&lt;img style=\&quot;max-width: 600px; height: auto;\&quot; alt=\&quot;\&quot; src=\&quot;./images/iphonex_vo_en_scrub.png\&quot; /&gt;  &lt;a name=\&quot;ItemChooserList\&quot;&gt;&lt;/a&gt; &lt;/br&gt;Gesture : **triple-tap with 2 fingers** anywhere on the screen. &lt;/br&gt;&lt;img style=\&quot;max-width: 600px; height: auto;\&quot; alt=\&quot;\&quot; src=\&quot;./images/iphonex_vo_en_item_chooser_list.png\&quot; /&gt;  &lt;a name=\&quot;PageFirstElement\&quot;&gt;&lt;/a&gt; &lt;/br&gt;Gesture : **simple-tap with 4 fingers** in the upper half part of the screen. &lt;/br&gt;&lt;img style=\&quot;max-width: 550px; height: auto;\&quot; alt=\&quot;\&quot; src=\&quot;./images/iphonex_vo_en_first_elt.png\&quot; /&gt;  &lt;a name=\&quot;PageLastElement\&quot;&gt;&lt;/a&gt; &lt;/br&gt;Gesture : **simple-tap with 4 fingers** in the lower half part of the screen. &lt;/br&gt;&lt;img style=\&quot;max-width: 550px; height: auto;\&quot; alt=\&quot;\&quot; src=\&quot;./images/iphonex_vo_en_last_elt.png\&quot; /&gt;  &lt;a name=\&quot;CurtainScreen\&quot;&gt;&lt;/a&gt; &lt;/br&gt;Gesture : **triple-tap with 3 fingers** anywhere on the screen. &lt;/br&gt;If the `zoom` functionality is activated in the settings, a **quadruple-tap** will be mandatory to obtain the same result. &lt;/br&gt;It will allow a VoiceOver using with a dark screen promoting the confidentiality and the longevity of the battery at the same time. &lt;/br&gt;&lt;img style=\&quot;max-width: 500px; height: auto;\&quot; alt=\&quot;\&quot; src=\&quot;./images/iphonex_vo_en_curtain_screen.png\&quot; /&gt;  &lt;a name=\&quot;CustomLabel\&quot;&gt;&lt;/a&gt; &lt;/br&gt;Gesture : **double-tap and hold with 2 fingers** anywhere on the screen. &lt;/br&gt;&lt;img style=\&quot;max-width: 500px; height: auto;\&quot; alt=\&quot;\&quot; src=\&quot;./images/iphonex_vo_en_custom_label.png\&quot; /&gt;  &lt;a name=\&quot;SpotlightSearch\&quot;&gt;&lt;/a&gt; &lt;/br&gt;Gesture : **flick down with 3 fingers** anywhere on the screen. &lt;/br&gt;&lt;img style=\&quot;max-width: 550px; height: auto;\&quot; alt=\&quot;\&quot; src=\&quot;./images/iphonex_en_search.png\&quot; /&gt;  &amp;nbsp; &lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2016  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt;"
});


