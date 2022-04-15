---
title: "Tables in accessibility"
abstract: "All our recommendations so that the tables are accessible"
titleBeforeTag: true
date: "2022-04-15"
tags:
  - web
  - beginner
---

## General presentation

A table is an arrangement of information in rows and columns containing cells that make it easy to compare and highlight information. They allow tabular information to be presented in a two-dimensional grid, such data is easier to read in tabular form.

This allows a user, who does not have a vision problem, to quickly make visual associations between table data and its headings.

However, a blind user will not have access to all these links between the information, it is for this reason that it is important that the tables are implemented with the appropriate HTML markup so that they are the most accessible. possible for assistive technologies.

In the rest of this article, we will see the main rules to follow to obtain an accessible table.

### Add a caption/title to your table

It is important to define a title for your table. Concise and relevant, this text will indicate its content as well as the type of data it contains.
It must be associated with the table using the <code>caption</code> element and must be the first element after the opening <code>table</code> element. You can also use a <code>h1,h2...</code> title placed in the code just before the table as another way to associate a title.

#### Example <code>caption</code>
<pre><code class="html">
&lt;table&gt;
    &lt;caption&gt;Time planning 2022&lt;/caption&gt;
    [...]
&lt;/table&gt;
</code></pre>

#### Example HTML title
<pre><code class="html">
&lt;h2&gt;Time planning 2022&lt;/h2&gt;
&lt;table&gt;
    [...]
&lt;/table&gt;
</code></pre>

### Add a description for complex table

If you have a complex table and want to provide a more detailed summary, it is recommended to use the ARIA <code>aria-describedby</code> attribute.
It will programmatically link a description to your table.

<pre><code class="html">
&lt;p id="info-table"&gt;
example of description to help understanding complex table
&lt;/p&gt;

&lt;table aria-describedby="info-table"&gt;
    &lt;caption&gt;Time planning 2022&lt;/caption&gt;
    [...]
&lt;/table&gt;
</code></pre>

There is also the possibility of using the <code>summary</code> attribute to give, in addition, a summary of the contents of a table, however this attribute is no longer part of the HTML 5 specifications and we do not recommend not its use.


### Identify your table headers

#### Scope attribute

To help assistive technology users, it is imperative to identify table headings, whether for rows or columns.
To identify these headers, you must use the <code>th</code> element, which must never be empty.

Once the headers are created, the data cells must be associated with the headers on which they depend.
The <code>scope</code> attribute allows cells to be programmatically linked to headers, and therefore assistive technologies to identify them.

<ul>
   <li><code>&lt;th scope="col"&gt;</code> for a column header</li>
   <li><code>&lt;th scope="row"&gt;</code> for a row header</li>
</ul>

#### Id and header attributes

Some tables are too complex to identify a strict horizontal or vertical association (for example, merging columns or rows) between the header and the data cells.
The <code>scope</code> attribute does not solve this problem. A unique <code>id</code> attribute must be used for each header cell. To link this header to a cell, you must use the <code>headers</code> attribute by adding the desired <code>id</code>.

For example, we have two header cells, <code>&lt;th id="toto"&gt;Toto&lt;/th&gt;</code> and <code>&lt;th id="tata"&gt;Tata&lt;/ th&gt;</code>, the code to link it to a data cell will be <code>&lt;td headers="toto tata"&gt;Tota&lt;/td&gt;</code>.

Tables should use <code>headers/id</code> only if:
<ul>
   <li>The table has column headings that change within the table.</li>
   <li>A data cell with three or more related headers (often linked to header cells that are merged)</li>
</ul>

### Navigating a table using NVDA or JAWS

Creating accessible tables will allow consistent reading of this tabular data with a screen reader. To navigate in a table with Jaws or NVDA, there are several specific shortcuts.

#### NVDA
To quickly navigate from table to table in a page, just use the <kbd>t</kbd> key, if you use the <kbd>Shift + t</kbd> shortcut, you navigate in the opposite direction and so we return to the previous table.

Once inside a table, there are several shortcuts to move around easily.

<ul>
<li><kbd>Ctrl + alt + left arrow</kbd> moves to the left column while keeping the same line, <kbd>Ctrl + alt + right arrow</kbd> moves to the column right.</li>
<li><kbd>Ctrl + alt + down arrow</kbd> moves to the next line while staying on the same column, <kbd>Ctrl + alt + up arrow</kbd> moves to the previous line. </li>
</ul>

#### Jaws

For Jaws, you have to use the <kbd>Y</kbd> key and <kbd>Shift + Y</kbd> to navigate between tables.
To browse inside an array, there are several shortcuts:

<ul>
<li><kbd>Insert + Ctrl + t</kbd> lists all tables</li>
<li><kbd>Ctrl + alt + left arrow</kbd> moves to the left column while keeping the same line, <kbd>Ctrl + alt + right arrow</kbd> moves to the column right.</li>
<li><kbd>Ctrl + alt + down arrow</kbd> moves to the next line while staying on the same column, <kbd>Ctrl + alt + up arrow</kbd> moves to the previous line. </li>
<li><kbd>Insert + shift + up arrow</kbd> reads the entire line.</li>
<li><kbd>Insert + shift + num pad 5</kbd> reads the entire column.</li>
</ul>

## Table example

We will now show you examples of accessible tables.

### Simple table

The first example is a table with only headers on the columns, so we use the <code>scope="row"</code> attribute for assistive technologies to interpret it correctly.

<table class="table">
  <caption class="h4">People with their professional activity</caption>
   <tr>
     <th scope="col">First name</th>
     <th scope="col">Name</th>
     <th scope="col">Gender</th>
     <th scope="col">Profession</th>
   </tr>
   <tr>
     <td>John</td>
     <td>Doe</td>
     <td>M</td>
     <td>Unknown</td>
   </tr>
   <tr>
     <td>Marty</td>
     <td>McFly</td>
     <td>M</td>
     <td>Guitarist</td>
   </tr>
   <tr>
     <td>Ellen</td>
     <td>Ripley</td>
     <td>F</td>
     <td>Astronaut</td>
   </tr>
   <tr>
     <td>Indiana</td>
     <td>Jones</td>
     <td>M</td>
     <td>Archaeologist</td>
   </tr>
   <tr>
     <td>Sarah</td>
     <td>Connors</td>
     <td>F</td>
     <td>Waitress</td>
   </tr>
</table>

<pre><code class="html">
&lt;table class="table"&gt;
 &lt;caption class="h4"&gt; Personnes avec leur activité professionnelle&lt;/caption&gt;
  &lt;tr&gt;
    &lt;th scope="col"&gt;First name&lt;/th&gt;
    &lt;th scope="col"&gt;Name&lt;/th&gt;
    &lt;th scope="col"&gt;Genre&lt;/th&gt;
    &lt;th scope="col"&gt;Métier&lt;/th&gt;
  &lt;/tr&gt;
  &lt;tr&gt;
    &lt;td&gt;John&lt;/td&gt;
    &lt;td&gt;Doe&lt;/td&gt;
    &lt;td&gt;M&lt;/td&gt;
    &lt;td&gt;Inconnu&lt;/td&gt;
  &lt;/tr&gt;
  [...]
</code></pre>

In this way, it is possible to easily navigate within the table using a screen reader. Also, any cell change from one column to another, the header will be vocalized.

For example, if we are positioned on the First name column, and we use the shortcut <kbd>Ctrl+alt+right arrow</kbd> to go to the Last name column, NVDA vocalizes "Last Name Column 2 + column text ".

### Tables with Two Headers 

In this second example, the table is a planning time allowing you to quickly know whether the store is open or closed, depending on the day of the week and the time.

This table requires two headers, one for the days of the week and another for the time slot.

<table class="table">
  <caption class="h4">Toy store opening</caption>
   <tr>
     <td></td>
     <th scope="col">Monday</th>
     <th scope="col">Tuesday</th>
     <th scope="col">Wednesday</th>
     <th scope="col">Thursday</th>
     <th scope="col">Friday</th>
   </tr>
   <tr>
     <th scope="row">09:00 - 11:00</th>
     <td>Closed</td>
     <td>Open</td>
     <td>Open</td>
     <td>Open</td>
     <td>Closed</td>
   </tr>
   <tr>
     <th scope="row">11:00 - 13:00</th>
     <td>Open</td>
     <td>Open</td>
     <td>Open</td>
     <td>Open</td>
     <td>Closed</td>
   </tr>
   <tr>
   <th scope="row">13:00 - 15:00</th>
     <td>Open</td>
     <td>Open</td>
     <td>Closed</td>
     <td>Open</td>
     <td>Open</td>
   </tr>
   <th scope="row">15:00 - 17:00</th>
     <td>Open</td>
     <td>Open</td>
     <td>Closed</td>
     <td>Open</td>
     <td>Open</td>
   </tr>
</table>

<pre><code class="html">
&lt;table class="table"&gt;
  &lt;caption class="h4"&gt;Toy Store Opening&lt;/caption&gt;
   &lt;tr&gt;
     &lt;td&gt;&lt;/td&gt;
     &lt;th scope="col"&gt;Monday&lt;/th&gt;
     &lt;th scope="col"&gt;Tuesday&lt;/th&gt;
     &lt;th scope="col"&gt;Wednesday&lt;/th&gt;
     &lt;th scope="col"&gt;Thursday&lt;/th&gt;
     &lt;th scope="col"&gt;Friday&lt;/th&gt;
   &lt;/tr&gt;
   &lt;tr&gt;
     &lt;th scope="row"&gt;09:00 - 11:00&lt;/th&gt;
     &lt;td&gt;Closed&lt;/td&gt;
     &lt;td&gt;Open&lt;/td&gt;
     &lt;td&gt;Open&lt;/td&gt;
     &lt;td&gt;Closed&lt;/td&gt;
     &lt;td&gt;Closed&lt;/td&gt;
   &lt;/tr&gt;
   [...]
</code></pre>

### Complex table

In this example, some given cells have three associated headers, so use the <code>id</code> and <code>headers</code> attributes.

Since the table is complex, we can add a description to help users understand the table.

<p class="border-top border-light" id="tblDesc">Tables for calculating the compliance rate of a website.<br/>
For each page the criteria can be compliant, non-compliant or not applicable, and have two levels of difficulty: Beginner or advanced<br/>
</p>
<table aria-describedby="tblDesc" class="table text-center">
    <caption class="visually-hidden position-relative">Summary by level</caption>
      <tr>
        <th id="critere">Criteria</th>
        <th id="conforme" headers="critere" colspan="2">Compliant</th>
        <th id="non-conforme" headers="critere" colspan="2">Non-Compliant</th>
        <th id="non-applicable" headers="critere" colspan="2">Non applicables</th>
        <th id="conformite" rowspan="2" class="bg-light">Compliance rate</th>
      </tr>
      <tr>
        <th id="niveau">Level</th>
        <th id="debutant-conforme" headers="niveau conforme">Beginner</th>
        <th id="confirme-conforme" headers="niveau conforme">Confirmed</th>
        <th id="debutant-non-conforme" headers="niveau non-conforme">Beginner</th>
        <th id="confirme-non-conforme" headers="niveau non-conforme">Confirmed</th>
        <th id="debutant-non-applicable" headers="niveau non-applicable">Beginner</th>
        <th id="confirme-non-applicable" headers="niveau non-applicable">Confirmed</th>
      </tr>
      <tr>
        <th id="accueil">Home</th>
        <td headers="accueil conforme debutant-conforme">17</td>
        <td headers="accueil conforme confirme-conforme">13</td>
        <td headers="accueil non-conforme debutant-non-conforme">0</td>
        <td headers="accueil non-conforme confirme-non-conforme">0</td>
        <td headers="accueil non-applicable debutant-non-applicable">13</td>
        <td headers="accueil non-applicable confirme-non-applicable">7</td>
        <td headers="accueil conformite" class="bg-light">100%</td>
      </tr>
      <tr>
        <th id="article">Article</th>
        <td headers="article conforme debutant-conforme">17</td>
        <td headers="article conforme confirme-conforme">12</td>
        <td headers="article non-conforme debutant-non-conforme">0</td>
        <td headers="article non-conforme confirme-non-conforme">1</td>
        <td headers="article non-applicable debutant-non-applicable">13</td>
        <td headers="article non-applicable confirme-non-applicable">7</td>
        <td headers="article conformite" class="bg-light">97%</td>
      </tr>
  </table>

<pre><code class="html">
&lt;p class="border-top border-light" id="tblDesc">Description of the table&lt;/p&gt;
&lt;table aria-describedby="tblDesc" class="table"&gt;
 &lt;caption class="visually-hidden position-relative"&gt;Summary by level&lt;/caption&gt;
 &lt;tr&gt;
    &lt;th id="critere"&gt;Criteria&lt;/th&gt;
    &lt;th id="conforme" headers="critere" colspan="2"&gt;Compliant&lt;/th&gt;
    [...]
  &lt;/tr&gt;
  &lt;tr&gt;
    &lt;th id="niveau"&gt;Level&lt;/th&gt;
    &lt;th id="debutant-conforme" headers="niveau conforme"&gt;Beginner&lt;/th&gt;
    &lt;th id="confirme-conforme" headers="niveau conforme"&gt;Confirmed&lt;/th&gt;
    [...]
  &lt;/tr&gt;
  &lt;tr&gt;
    &lt;th id="accueil"&gt;Home&lt;/th&gt;
    &lt;td headers="accueil conforme debutant-conforme"&gt;17&lt;/td&gt;
    &lt;td headers="accueil conforme confirme-conforme"&gt;13&lt;/td&gt;
    [...]
  &lt;/tr&gt;
  [...]
</code></pre>