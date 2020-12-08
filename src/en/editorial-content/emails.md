---
title: "Emails accessibility guidelines"
---

# Design emails accessible to all 

Here is a list of recommendations for writing (or producing templates that generate) messages that are accessible, that is to say, understandable by all.

## What can be problematic?
Above all:
- Images
- Fonts, colors and styles used
- Layout tables
- Links
- Attachments

## Important

If your communication contains a lot of information and its layout needs to be complex:
- create the email with the method which is the easiest for you,
- add [an accessible Word file](/en/editorial-content/word/) (or text file) as an attachment containing the same level of information (but only in text!),
- specify that the equivalent accessible text is contained in the attachment.

## "Everyday" emails
For all your everyday emails:
- Use simple, sans serif fonts: Arial, Calibri or [Accessible DfA](https://github.com/Orange-OpenSource/font-accessible-dfa)
- Adopt a font size at least equal to 10 points
- Put a capital letter at the beginning of each sentence but avoid whole sentences in capital letters
- Align the texts to the left (avoid justifying)
- Avoid too many italic or bold chunks of text or phrases
- Check the contrast between the font color and the background using the tool [Color Contrast Analyser](https://www.paciellogroup.com/resources/contrastanalyser/) for example and limit the total number of colors used
- Use a neutral background: no decorative paper letter or background images
- Enter an alternative text for all the images (Office: right click on the picture> **Format Picture > Alt text> "Description" field**) or if the image is just descriptive, leave the "Description" field empty
- Use the "Title" and "Subtitle" styles of the "text format" menu if long mail, with several sections
- Add an emoticon alternative text, example: ";) [wink smiley] " instead of just ";)"
- Avoid animations, animated GIFs and luminosity flashes
- Write explicit link labels, for example: prefer "discover our offers" to "click here" or "find out more"
- Use the "Withdrawal, Spacing" functions to skip lines, example Office suite: **Page Layout menu> Paragraph> Indent or Spacing** or **Right click on your text: "Paragraph ..."**
- Check that the size of the buttons and clickable areas is sufficient : no smaller than 1cm (0.4")
- Configure your mail tool: HTML format by default, Outlook for example: **File> Options> Mail> Compose messages**
- **Attachments:** Use the "Insert" function to add an attachment so that the screen reader signals its presence, it will appear in the "Attached" field.

## Pushmails / newsletters / automatic communications
You have several options for creating an accessible Pushmail.

### From a Word document
1. Create a Word document accessible by following [the Word accessibility guidelines](/en/editorial-content/word/).
2. Then use the "Send to Mail Recipient"* option.

Add this Option the first time via **File> Options> Quick access toolbar> “Send to Mail Recipient”**

### From a newsletter / mailing tool
It is quite possible that the tool you have chosen will provide natively accessible templates, but that does not preclude following our [general guidelines for editorial content](/en/editorial-content/).
Always check:
- Text alternatives for images
- Level titles
- If presentation tables: role=presentation in the table tag

### Creation from HTML (or other dedicated tool)
Compose the HTML code in an accessible way by following our [main web recommendations](/en/web/develop/).  

Important: given the interpretation issues of multiple mail clients, the layout should instead be done via tables using the role=presentation attribute in the table tag.
In order to occasionally test the support for HTML and CSS in the various email clients, use [Can I email?](https://www.caniemail.com/) and [Can I use in HTML emails?](https://caniuse.email/) Websites.
To test your entire email campaign, use the [Accessible email site](http://www.accessible-email.org/).

## Related links
- [Improve email accessibility ](https://support.office.com/en-us/article/video-improve-email-accessibility-ebf3730a-18f8-4b57-81d1-730086231775?omkt=en-001&ui=en-US&rs=en-001&ad=US)
- [Analyse emails campaigns](http://www.accessible-email.org/)
- [Test support of HTML and CSS](https://www.caniemail.com/)
- [On which email clients to test first](https://emails.hteumeuleu.com/which-email-clients-should-you-test-on-b2a892e57606)
- [A Beginner’s Guide to Email Accessibility](https://webdesign.tutsplus.com/tutorials/a-beginners-guide-to-email-accessibility--cms-31240)
- [The Ultimate Guide to Accessible Emails](https://litmus.com/blog/ultimate-guide-accessible-emails)
- [Ideal Mobile Touchscreen Target Sizes](https://www.smashingmagazine.com/2012/02/finger-friendly-design-ideal-mobile-touchscreen-target-sizes/)
- [Accessible font DfA](https://github.com/Orange-OpenSource/font-accessible-dfa)
