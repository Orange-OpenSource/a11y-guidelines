---
title: "Test by disabling CSS"
---

# Test by disabling CSS

Disabling <abbr>CSS</abbr> is a good way to ensure compliance with certain best practices and to validate some important accessibility criteria.
To disable <abbr>CSS</abbr>, the easiest way is to install the "Web developer toolbar" extension for FireFox or Chrome (https://chrispederick.com/work/web-developer/). Once this is in place, click on the "CSS" menu, then "Disable all styles".

## Separate content from presentation

Although this is only a best practice, the strict separation of <abbr>CSS</abbr> and <abbr>HTML</abbr> is important with regard to quality and maintainability of the code and sometimes has an impact on accessibility, by limiting the possibilities of modifying the visual rendering of the pages.

By disabling <abbr>CSS</abbr>, the page is displayed with the browser's default styles (blue underlined link, black text, white background, etc.). This is to verify that the content is not styled by inline <abbr>CSS</abbr>.

![screenshot of a page with CSS disabled](../../../images/sansCSS.png)

## Reading order and hidden content

The order of appearance of the content in the code must respect the order of visual display, if this affects comprehension. The problem can arise due, among other things, to the use of these types of <abbr>CSS</abbr> properties: `position:`, `float:`, `display: flexbox` (https://wiki.csswg.org/spec/css3-flexbox/accessibility) or `display: grid` (https://webdesign.tutsplus.com/articles/a-guide-to-css-grid-and-accessibility--cms-32857). Indeed, these properties can modify the display order of content.

Hidden content, which can be displayed by a user action, must also be displayed in the right place on the page so that the reading order is still understandable.

By disabling <abbr>CSS</abbr>, the page content is displayed in the order of appearance in the code, so it's easy to check that the content is understandable in that order.

**Warning:** In addition, you can see the content visually hidden and intended for assistive technologies (accessible masking) and therefore check its relevance and usefulness.

## Content semantics and presentation table

To be accessible, the content of a page must have a semantic structure that makes it possible to better understand its meaning.

By disabling <abbr>CSS</abbr>, the page is displayed with the browser's default styles (blue underlined link, black text, white background, etc.). This makes it possible to verify that the content is semantized with lists, emphases, paragraphs, titles... <br />
And that the content is not laid out with <abbr>HTML</abbr> tables, because therefore it is still displayed as a table even with <abbr>CSS</abbr> disabled. While this is not an accessibility issue, it is a very bad practice.

## Information carried only by color

Information should not be carried only by color.

By disabling <abbr>CSS</abbr>, we disable styles and therefore colors. We can thus verify that information are not conveyed only through a color.


## Informative content generated via CSS

Content can be generated by <abbr>CSS</abbr> via pseudo-elements (`::before`,` ::after`) or the `content:` property. It is not advisable to generate informative content with such methods because their support is low for older versions of assistive technologies, so avoid and test!
For the `background-image:` property, the risk is to display images carrying information in <abbr>CSS</abbr> which will be inaccessible to assistive t&echnologies.

Disabling <abbr>CSS</abbr> prevents the display of pseudo-elements and ignores the `content:` property, so we can identify the content generated by <abbr>CSS</abbr> and identify if there is loss of information. For images carrying information inserted in <abbr>CSS</abbr>, they will disappear with <abbr>CSS</abbr> disabled, this is an accessibility issue to be careful of.