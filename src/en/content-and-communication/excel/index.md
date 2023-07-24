---
title: "Create an accessible Excel document"
abstract: "Some Excel Accessibility Recommendations"
date: "2023-07-20"
---

# Create an accessible Excel document

Producing accessible Excel file requires following different recommandations.

## Sheet tab

Give a unique and explicit name to each sheet tab (by default, the name starts with "Sheet") and delete the empty sheets.
<figure>
    <img src="/en/content-and-communication/images/excel_feuille_wrong.png" alt="" class="img-fluid my-2" />
    <figcaption>
        <strong>Incorrect example: </strong> sheet tabs have default name (Sheet1, Sheet2, Sheet3 ...).
    </figcation>
</figure>

<figure>
    <img src="/en/content-and-communication/images/excel_feuille_valid.png" alt="" class="img-fluid my-2" />
    <figcaption>
        <strong>Correct example : </strong> sheet tabs have unique and explicit names (January, February, March ...).
    </figcation>
</figure>

## Data range and table

Define explicitly data range as a table and use row and column header cells.

### Existant range of data

Move cursor on the first cell in the data range (header row's first cell if there is one).

<ul>
    <li>Use the menu Insert / Table</li>
    <li>Check the range where the table data are located</li>
    <li>Check "My table has headers" if it's the case</li>
    <li>Validate "Ok"</li>
</ul>

<img src="/en/content-and-communication/images/excel_tableau.png" alt="" class="img-fluid my-2" />

Then possibly, from the "Table Design" menu :

<ul>
    <li>Resize the table : Properties > Resize Table</li>
    <li>Choose "Table Style Options" : "Banded Rows" or "Filter button"...</li>
    <li>Give a name to the table : Properties > Table Name</li>
</ul>

Remarks :

<ul>
    <li>A table is especially necessary when there are many rows and columns, and when the content is more understandable with the reminder of the title of the column or row, for example when there are numbers.</li>
    <li>A table cannot have merged cells.</li>
    <li>To find out if a data range has been defined as a table : move the cursor within one of its cells: the "Insert > Table" menu appears grayed out and the "Creation of table" tab is visible.</li>
</ul>

<img src="/en/content-and-communication/images/excel_tableau2.png" alt="" class="img-fluid my-2" />

### Create a new data range type table  

<ul>
    <li>Use the "Insert > Table " menu; Excel create "Column1" heading by default...</li>
    <li>Replace column headers "Column1", "Column2" by an explicit name</li>
</ul>

<img src="/en/content-and-communication/images/excel_tableau3.png" alt="" class="img-fluid my-2" />

### Modifying a table

<ul>
    <li>Move cursor on a cell of the tab</li>
    <li>"Table Design" / "Table Style Options" menu > check "Header row" and/or "First column" ...</li>
</ul>

### Other Table Recommendations 

<ul>
    <li>Avoid leaving empty cells and inserting images </li>
    <li>Do not paste an Excel table into a PowerPoint file with the "image" paste option </li>
</ul>

## Font, accent and language

<ul>
    <li>Use sans serif fonts (such as Arial, Calibri, Helvetica) </li>
    <li>If necessary, keep accentuation on capital letters (example: É or Ç): use the option “Enforce accented uppercase in French” in the menu "File" / "Options" / "Proofing"</li>
    <li>Check spelling and accented capitals via the "Review" tab > Spelling </li>
</ul>

<img src="/en/content-and-communication/images/excel_police.png" alt="" class="img-fluid my-2" />

## Formatting / layout

<ul>
    <li>Avoid justifying the text, centering or aligning right; prefer left alignment. </li>
    <li>Begin all sentences by a capital letter but avoid using all capital letters and excessive italics or underlines. </li>
    <li>Check "Wrap Text" on the cells: right click on the cells, Format cells /Text Control </li>
</ul>

## Colors and contrasts

<ul>
<li>

Ensure a sufficient contrast between text color and background color (compliant with Orange brand) 

<img src="/en/content-and-communication/images/excel_couleur.png" alt="Examples of insufficient contrast between pastel colored backgrounds and white text" class="img-fluid my-2" />

<img src="/en/content-and-communication/images/excel_couleur2.png" alt="Correct examples of contrast between the same pastel colors in the background but black text" class="img-fluid my-2" />
</li>
<li>
Ensure that color is not the only way to give information.  
Example 1: a negative value must not be indicated by the only use of the color red; one solution is to use the ‘-‘ sign or put negative values ​​in parentheses

<img src="/en/content-and-communication/images/excel_couleur3.png" alt="" class="img-fluid my-2" />

Example 2 : 

<img src="/en/content-and-communication/images/excel_couleur4.png" alt="Distribution of sales represented on a pie chart with the legend to the right of the graph and only the color linking a sector of sales to its percentage" class="img-fluid my-2" />

A user not distinguishing colors will not be able to link a sector

<img src="/en/content-and-communication/images/excel_couleur5.png" alt="Distribution of sales represented on a pie chart where the percentage of sales is visible next to each sector" class="img-fluid my-2" />
</li>
</ul>

## A user not distinguishing colors will not be able to link a sector

Provide an alternative text for any illustration (image, form, icon, SmartArt...), graphic or embedded file ; Right click on the illustration > Edit Alt text. 

<img src="/en/content-and-communication/images/excel_image.png" alt="The replacement text window offers 2 areas: 1 field to enter the replacement text, 1 check box to mark as decorative" class="img-fluid my-2" />

<ul>
    <li>Informative content: provide an alternative text which explains the information presented by the content </li>
    <li>Decorative content: check "Mark as decorative" and keep the description text box blank. </li>
    <li>Link content: provide an alternative text that describes the function or destination of the link </li>
    <li>Complex informative content: provide an alternative text which indicates the location of the detailed content description. This must be equivalent to the information presented by the content and must be nearby or accessible through a link. Example: indicate where are the data of a graphic built from a table.</li>
</ul>

## Links 

Provide explicit label names for links. Example: prefer "Discover our offers" to "Click here" or "See more". Go to Menu Insert / Links, indicate the text to be displayed, the address and eventually a screen tip that will be displayed on hover 

For each downloadable file, indicate its name, format, weight, and file language (if different from the document one) 

<img src="/en/content-and-communication/images/excel_lien.png" alt="" class="img-fluid my-2" />

## Saving file

Before saving, cursor must be in A1 cell in each sheet. If there are several sheets, go to the 1rst sheet before saving.

## Conversion in PDF

It is better to publish the Excel document in PDF format: 

<ul>
    <li>Menu File / Export / Create a PDF/XPS Document </li>
    <li>In "Options", verify "document structure tags for accessibility" is checked  (to do once) </li>
    <li>Publish</li>
</ul>
