---
title: "How to maintain a logical sequential order (Wcag 1.3.2)"
abstract: "Best practices for WCAG 1.3.2 criteria"
titleBeforeTag: true
date: "2022-07-21"
tags:
  - web
  - advanced
---

## General explanation

The purpose of [WCAG 1.3.2 criterion](https://www.w3.org/WAI/WCAG21/Understanding/meaningful-sequence) is to ensure that, if the order of the content matters, it must be preserved regardless of how it is presented to the user. For example, if you browse with CSS disabled or when you use a screen reader.

The order of content is <strong>important</strong> if the order of the content cannot be changed without affecting its meaning.
For example, for an ordered list or a table, the order of the content is important, on the other hand for an unordered list, the reading order has no impact on the user's understanding of the content.

A WEB page can be composed of several independent sections having specific roles. The relative positions of a navigation section and a main page section generally do not affect the understanding of the page content. Whether the navigation is at the top or on the left of the screen, does not interfere with understanding, even if a reading order can be imposed within one of these sections.
There can therefore be several reading orders on a WEB page to satisfy the success criterion.

## What you should not do

### Use white space to format plain text

When presenting content, it is important not to use space characters, such as spaces, tabs, line feeds or carriage returns.
In some cases, these characters are used to format tables, or reproduce columns of data in textual content. This method is prohibited because assistive technologies will not be presented with the information in a logical reading order, so the information returned to some users will be incomprehensible.

Below are two examples that are invalid and therefore not understandable with screen readers.

#### Example of a blank character to format a tables

<pre class="border border-light">

Working hours with Classroom
 
                                                         
            Monday               Tuesday           Wednesday     

 Morning    9.30 a.m.            9.30 a.m.         8.00 a.m.
            to 1 p.m.            to 1 p.m.         to twelve o’clock     
            B201                 B201              A001

Afternoon   2 p.m                2 p.m             Break
            to 5 p.m.            to 5 p.m.
            A103                 B201

</pre>

Note that the presentation above is a purely a visual formatting, but no semantic relationship can represent tabular relationships.
Assistive technologies will read the content as it appears in the code, therefore, in an illogical and incomprehensible order. Here, the solution would be to use a table or present the information in a linear maner.

#### Example of a blank character to separate content into two columns

<p class="border border-light">
Digital accessibility aims to make possible &emsp;&emsp;&emsp;&emsp; it is not a question of multiplying <br/>
access to digital information whatever &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;media, but from<br/>
the nature of the person's disability and the way &emsp;&emsp;&emsp; respect functional rules, graphics, <br/>
whose information everyone consults. It concerns &emsp;&emsp;&emsp; technical and editorial that will allow everyone <br/>
different technologies such as the Web, videos &emsp;&emsp;&emsp;&emsp; to access information regardless of their <br/>
and Word and PDF documents, but also the &emsp;&emsp;&emsp;&emsp; consulting tools. <br/>
digital television or mobile phones. &emsp;&emsp;&emsp;
</p>

The paragraph above does not conform, space characters are used to separate the text into two columns. Assistive technologies will read the text line by line which would be an illogical reading order.

### Use a layout table

Although WCAG does not prohibit the use of layout tables, it is recommended to use layout in CSS in order to maintain the semantic reading of the content. If a layout table is used, it is important that the content makes sense when linearized.

Tables present content horizontally and vertically, however an assistive technology reads this content in a linear way, the table is read from top to bottom reading the entire row before moving on to the next.

Therefore, you have to be careful when using a layout table, you have to check that the content is understandable with a screen reader.

#### Example of an invalid table

<table role="presentation" class="m-2 border border-light">
  <tr>
    <td><a href="#">Home <span class="visually-hidden">(exemple)</span></a></td>
    <td rowspan="4"><img src="/assets/images/orange-logo.svg" alt="example logo" width="100" height="100
    "></td>
  </tr>
  <tr>
    <td><a href="#">Team<span class="visually-hidden">(example)</span></a></td>
  </tr>
  <tr>
    <td><a href="#">News <span class="visually-hidden">(example)</span></a></td>
  </tr>
  <tr>
    <td><a href="#">Contact <span class="visually-hidden">(example)</span></a></td>
  </tr>
</table>

The table above displays a menu, with the logo on the side.

The problem is that, with a screen reader, the reading order is changed, because, instead of stating all the menu links, the image will be vocalized in the middle of them.

### Use CSS to position information

To position content in a reading order, it is recommended to use structural markup, rather than CSS positioning properties. The latter can lead to errors, as the content can be displayed/interpreted in a different order than it is in the source code.

So, if the reading order is important, be careful, when using CSS Flexbox, grid and position, not to change the visual order of the content compared to its position in the code:

<ul>
   <li>With CSS flexbox, avoid using the <code>order</code> or <code>flex-direction:reverse property ;</code></li>
   <li>With CSS grid, be careful about manually placing elements on the grid</li>
   <li>With positioning properties, avoid detaching the visual order of elements from the order in which they appear in the DOM</li>
</ul>

If a user disables CSS, or uses a screen reader, the rendering of information will no longer be in the correct order.

#### Example of a position menu in CSS

The layout below was created with CSS, if you disable the CSS, you will notice that the reading direction will be different than the one displayed.

<div class="border border-light position-relative mb-3" style="width: 320px;height:180px">      
     <span class="position-absolute top-0 start-0"><strong>Sports</strong></span>       
     <span class="position-absolute top-0 end-0"><strong>Products</strong></span>       
     <span class="position-absolute top-50 start-0">Football</span>       
     <span class="position-absolute start-0" style="top:75%!important">Tennis</span>       
     <span class="position-absolute start-0" style="top:90%!important">Rugby</span>       
     <span class="position-absolute top-50 end-0">Clothes</span>       
     <span class="position-absolute end-0" style="top:75%!important">Accessories</span>
</div>

#### Example of a tab where the content is positioned before

In the example below, tabs will be displayed with content that will be positioned with flexboxes.

<div class="d-flex flex-column mb-3">
  <div class="tab-content order-2" id="myTabContent">
    <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">You are now on the Home tab. </div>
    <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">You are now on the Profile tab.</div>
  </div>
  <ul class="nav nav-tabs order-1" id="myTab" role="tablist">
    <li class="nav-item" role="presentation">
      <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Home</button>
    </li>
    <li class="nav-item" role="presentation">
      <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Profile</button>
    </li>
  </ul>
</div>

Elements are placed with the <code>order</code> attribute, which is not the same display order in the DOM.
By disabling the CSS or using a screen reader, we see that the tabs are no longer before, and so after, the content of these tabs.
