---
title: "Text size and color "
abstract: "What size and what colors should the texts adopt?"
titleBeforeTag: true
date: "2021-07-05"
updateDate: "2025-06-28"
tags:
  - web
  - beginner
---

In this article, we will try to answer the following questions concerning the accessibility of texts in web pages:
- What size should I use for the texts?
- What is the minimum font size to respect?
- What color can I use for the text? 

## What do the guidelines say?

The [WCAG](https://www.w3.org/WAI/standards-guidelines/wcag/) do not impose a minimum size or colors for texts. However, two criteria must be taken into consideration:
- <a href="https://www.w3.org/TR/WCAG22/#resize-text"> 1.4.4 Resize text </a>
- <a href="https://www.w3.org/TR/WCAG22/#contrast-minimum"> 1.4.3 Contrast (Minimum) </a> 

### Text size enlargement

If the guidelines do not impose a minimum size for characters, [criterion 1.4.4](https://www.w3.org/TR/WCAG22/#resize-text) indicates that the user must be able to increase text size up to 200% without loss of content or functionality. To comply with this criterion, it is essential to test. The procedure for increasing text size is available on the following page: [Text Size Enlargement](https://a11y-guidelines.orange.com/en/web/toolbox/methods-and-test-tools/text-zoom/).
Sometimes, the sizing of certain blocks of text, particularly when using pixel sizes, can lead to the loss of information (truncated or overlapped texts). It is therefore advisable to use relative units (%, em, rem, etc.). 

The procedure for increasing text size is available on the following page: [Text size enlargement](/en/web/toolbox/methods-and-test-tools/text-zoom/).

**Note:** at Orange, we decided to use 200% text only size enlargement to evaluate this criterion and not by the other two possible methods. We believe that this provides greater comfort for users, even if it requires more work for developers.



### Color contrast

The guidelines do not require or prohibit the use of certain colors for text. However, a light gray text on a white background, for example, could pose difficulties. It is therefore essential to check that the text color and the background color provide a sufficient level of contrast (see levels below). This can be done easily with help [of tools](https://a11y-guidelines.orange.com/en/web/toolbox/methods-and-test-tools/color-contrast-level/).

[Criterion 1.4.3 of the standard](https://www.w3.org/TR/WCAG22/#contrast-minimum) details the required contrast levels.

For standard texts (not bold):
- size less than 24px: contrast of 4.5:1 minimum
- size greater than or equal to 24px: contrast of 3:1 minimum

For bold texts:
- size less than 18.5px: contrast of 4.5:1 minimum
- size greater than or equal to 18.5px: contrast of 3:1 minimum

For non-underlined links
- contrast of 3:1 minimum with the surrounding text and with the background color

The criterion mentions a few exceptions subject to no constraint, in particular the texts of inactive elements (a button appearing grayed out for example), the texts forming part of a logo or a brand name. 

## What about users?

The guidelines do not impose a minimum size because it assumes that it is possible to enlarge the text if necessary. In fact, users do not always adjust the size of the text to their needs, due to a lack of habit or ignorance of the possibilities offered to them. This is why it is important that the default size be sufficient to ensure comfortable reading.

The size and the color are not the only characteristics that come into play on the readability of a text, indeed, the typeface or the use of text in italics can have important consequences. You will find some additional recommendations on this subject in the [editorial content section](https://a11y-guidelines.orange.com/en/content-and-communication/).
