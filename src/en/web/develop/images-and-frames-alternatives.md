---
title: "Set a text alternatives for images and frames"
---

# Set a text alternatives for images and frames

**Target:** everyone and especially people with visual impairments and cognitive limitations.  
**When:** from design and during development.

**Description:**

All `img` tags should have an `alt` attribute with a relevant description: 
- For clickable images: specify the function&nbsp;/ link target in the `alt` attribute,
- For images carrying information: add an `alt` attribute describing the information contained in the image
- For images containing text: add an `alt` attribute containing at least the text from the image,
- For decorative images: add an empty `alt` attribute,
- For images having `alt` attributes that won’t be convenient when the text is too long (diagrams, graphs…), add a describing text close to the image, or add a link pointing to an <abbr>HTML</abbr> page with the description.

Add a `title` attribute to describe all `frame` or `iframe` content or function. If a `frame` or `iframe` doesn't convey information for the user (only technical), render it invisible, see example: [Hidden accessible frames technics](../../components-examples/technical-iframe/)

**Checklist:**

- Each `img` tag must have an `alt` attribute.
- For images not carrying information, set them as background images preferably (<abbr>CSS</abbr>). 
- For graphics, you can add a link under them to access the data table (revealing it in the same page or in a different page).

**Users’ goal:**

Access the information included in images for users who cannot access it.

Blocking point: an image without textual Description: is unusable by people with visual impairments or those that cannot display images (mobile, low bandwidth…).

**Technical goal:**

Improve the natural referencing.

**Valid example:**     
`<a href="./home"><img src="logo_orange.jpg" alt="back to home"></a>`        
`<img src="banner_bouquet_famille.png" alt="Good deal, family max plan 2 euros per month for 12 months instead of 16 euros.">`

**Example with an empty alternative:** 
In the example below, the right pictogram doesn’t have to be vocalized as the text on the left already provides the information.  
In this case setting the `alt` attribute to something other than empty would provide redundant information.  

![example with empty alternative](../../images/service-24.png)  
  
`<h3>guaranteed 24h service</h3>`  
`<img src="service-24.png" alt="">` 

**Tools:**
The <a href="https://chrispederick.com/work/web-developer/"> Web developer </a> extension (ability to display text alternatives for all images). 

**Reference <abbr>WCAG</abbr>&nbsp;:**  
- <a href="https://www.w3.org/TR/WCAG21/#non-text-content">1.1.1 Non-text Content</a>
