---
title: "Tables in accessibility"
abstract: "All our recommendations so that the tables are accessible"
titleBeforeTag: true
date: "2022-04-15"
updateDate: "2026-01-30"
tags:
  - web
  - beginner
---

## General presentation

A table is an arrangement of information in rows and columns containing cells that make it easy to compare and highlight information. It allows tabular data to be presented in a two-dimensional grid, such data is easier to read in tabular form.

This allows a sighted user to quickly make visual associations between table data and its table headings.

However, a blind user will not have access to all these relations between the information, it's the reason why it is important that a table is implemented with the appropriate HTML markup so that it is correctly rendered by assistive technologies.

In the rest of this article, we will see the main rules to follow to create an accessible table.

### Add a caption/title to your table

It is important to define a title for your table. This text must be concise and relevant, so that the nature and type of data it contains can be understood.
It must be associated with the table using the <code>caption</code> element and must be the first element after the opening <code>table</code> tag.

#### Example using <code>caption</code>
<pre><code class="html">
&lt;table&gt;
    &lt;caption&gt;2022 timetable&lt;/caption&gt;
    [...]
&lt;/table&gt;
</code></pre>

Another way to provide a title is to use the <code>aria-labelledby</code> or <code>aria-label</code> attributes on the <code>table</code> tag. However, a title must be visible.

#### Example using <code>aria-label</code>
<pre><code class="html">
&lt;table aria-label="table title"&gt;
    [...]
&lt;/table&gt;
</code></pre>

As a last resort, it is also possible to use the <code>title</code> attribute, but a title must be visible.

#### Example using <code>title</code>
<pre><code class="html">
&lt;h2 id="title"&gt; 2022 Schedule&lt;/h2&gt;
&lt;table title="title"&gt;
    [...]
&lt;/table&gt;
</code></pre>

### Complex table: add a description

In the case of a complex table, the title must be accompanied by a summary describing the spatial organization of the data. 
It is recommended to use the ARIA <code>aria-describedby</code> attribute, which allows the description to be programmatically linked to the table.

<pre><code class="html">
&lt;p id="info-table"&gt;
example of description to help understanding complex table
&lt;/p&gt;

&lt;table aria-describedby="info-table"&gt;
    &lt;caption&gt;Time planning 2022&lt;/caption&gt;
    [...]
&lt;/table&gt;
</code></pre>


### Identify your table headers

#### Simple tables: scope attribute

To help assistive technology users, you must identify table headings, whether for rows or columns.
To identify these table headers, you must use the <code>th</code> tag, which must never be empty.

Once the headers are created, the data cells must be associated with the headers on which they rely.
The <code>scope</code> attribute allows cells to be programmatically linked to headers, and therefore, to be identified by assistive technologies.

<ul>
   <li><code>&lt;th scope="col"&gt;</code> for a column header</li>
   <li><code>&lt;th scope="row"&gt;</code> for a row header</li>
</ul>

#### Complex tables: id and header attributes

Some tables are too complex to identify a strict horizontal or vertical association (for example, merged columns or rows) between the header and the data cells.
The <code>scope</code> attribute does not solve this problem. A unique <code>id</code> attribute must be used for each header cell. To link this header to a cell, you must use the <code>headers</code> attribute and adding the required <code>id</code>.

For example, we have two header cells, <code>&lt;th id="toto"&gt;Toto&lt;/th&gt;</code> and <code>&lt;th id="tata"&gt;Tata&lt;/ th&gt;</code>, the code to link it to a data cell will be <code>&lt;td headers="toto tata"&gt;Tota&lt;/td&gt;</code>.

Tables should use <code>headers/id</code> only if:
<ul>
   <li>The table has column/row headings that change within the table.</li>
   <li>A data cell with three or more related headers (often linked to header cells that are merged)</li>
</ul>

### Special cases for formatting tables

Where possible, <strong>avoid using tables for layout</strong>. Tables are primarily designed to present tabular data, and CSS styles allow you to avoid using tables for formatting.

However, if you do use a table for layout, you must follow these rules:

<ul>
  <li>the <code>table</code> element must have the attribute <code>role="presentation"</code> or <code>role="none"</code> in order to remove the semantics from the table</li>
  <li>semantic elements specific to a table must not be used: <code>caption</code>, <code>th</code>, <code>scope</code>, <code>headers</code>,</li>
  <li>Ensure that if there is a specific reading order for understanding the content, this order is respected when reading the table linearly (which follows the order of appearance in the code).</li>
</ul>

### Navigating a table using NVDA and JAWS screenreaders

Creating accessible tables will allow consistent reading of these tabular data with a screen reader. To navigate in a table with Jaws or NVDA, there are several specific shortcuts.

#### NVDA
To quickly navigate from table to table in a page, just use the <kbd>t</kbd> key. If you use the <kbd>Shift</kbd> + <kbd>t</kbd> shortcut, you will navigate in the opposite direction and return to the previous table.

Once inside a table, there are several shortcuts to move around easily:

<ul>
<li><kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>left arrow</kbd> moves to the left column while keeping the same line, <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>right arrow</kbd> moves to the column right.</li>
<li><kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>down arrow</kbd> moves to the next line while staying on the same column, <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>up arrow</kbd> moves to the previous line.</li>
</ul>

#### Jaws

For Jaws, you have to use the <kbd>Y</kbd> key and <kbd>Shift + Y</kbd> to navigate between tables.
To browse in tables, there are several shortcuts:

<ul>
<li><kbd>Insert</kbd> + <kbd>Ctrl</kbd> + <kbd>t</kbd> lists all tables</li>
<li><kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>left arrow</kbd> moves to the left column while keeping the same line, <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>right arrow</kbd> moves to the column right.</li>
<li><kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>down arrow</kbd> moves to the next line while staying on the same column, <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>up arrow</kbd> moves to the previous line. </li>
<li><kbd>Insert</kbd> + <kbd>Shift</kbd> + <kbd>up arrow</kbd> reads the entire line.</li>
<li><kbd>Insert</kbd> + <kbd>Shift</kbd> + <kbd>5</kbd> reads the entire column.</li>
</ul>

## Table examples

We will now show you examples of accessible tables.

### Simple table

The first example is a table with only headers on the columns, so we use the <code>scope="col"</code> attribute for assistive technologies to interpret it correctly.

<table class="table">
  <caption class="h4">People with their professional activity</caption>
   <tr>
     <th scope="col">First name</th>
     <th scope="col">Last Name</th>
     <th scope="col">Gender</th>
     <th scope="col">Job</th>
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
 &lt;caption class="h4"&gt; People with their professional activity&lt;/caption&gt;
  &lt;tr&gt;
    &lt;th scope="col"&gt;First name&lt;/th&gt;
    &lt;th scope="col"&gt;Last Name&lt;/th&gt;
    &lt;th scope="col"&gt;Genre&lt;/th&gt;
    &lt;th scope="col"&gt;Job&lt;/th&gt;
  &lt;/tr&gt;
  &lt;tr&gt;
    &lt;td&gt;John&lt;/td&gt;
    &lt;td&gt;Doe&lt;/td&gt;
    &lt;td&gt;M&lt;/td&gt;
    &lt;td&gt;Unknown&lt;/td&gt;
  &lt;/tr&gt;
  [...]
</code></pre>

Like this, it is possible to easily navigate within the table using a screen reader. Also, any cell change from one column, or row, to another, the header will be vocalized.

For example, if we are positioned on the First name column, and we use the shortcut <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>right arrow</kbd> to go to the "Last name" column, NVDA vocalizes _"Last Name Column 2 + column text "_.

### Tables with two headers 

In this second example, the table is a planning time allowing you to quickly know whether the store is open or not, depending on the day of the week and the time.

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
   <tr>
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
  &lt;caption class="h4"&gt;Toy store opening&lt;/caption&gt;
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

In this example, some given cells have three associated headers, so we have to use the <code>id</code> and <code>headers</code> attributes.

Since the table is complex, we can add a description to help users understand the table nature an structure.

<p class="border-top border-light" id="tblDesc">Tables for calculating the compliance rate of a website.<br/>
For each page the criteria can be compliant, not compliant or not applicable, and have two levels of difficulty: Beginner or Advanced<br/>
</p>
<table aria-describedby="tblDesc" class="table text-center">
    <caption class="visually-hidden position-relative">Summary by level</caption>
      <tr>
        <th id="criterion">Criteria</th>
        <th id="compliant" headers="criterion" colspan="2">Compliant</th>
        <th id="not-compliant" headers="criterion" colspan="2">Not Compliant</th>
        <th id="not-applicable" headers="criterion" colspan="2">Not Applicable</th>
        <th id="conformity" rowspan="2" class="bg-light">Compliance rate</th>
      </tr>
      <tr>
        <th id="level">Level</th>
        <th id="beginner-compliant" headers="level compliant">Beginner</th>
        <th id="advanced-compliant" headers="level compliant">Advanced</th>
        <th id="beginner-not-compliant" headers="level not-compliant">Beginner</th>
        <th id="advanced-not-compliant" headers="level not-compliant">Advanced</th>
        <th id="beginner-not-compliant" headers="level not-applicable">Beginner</th>
        <th id="advanced-not-compliant" headers="level not-applicable">Advanced</th>
      </tr>
      <tr>
        <th id="home">Home</th>
        <td headers="home compliant beginner-compliant">17</td>
        <td headers="home compliant advanced-compliant">13</td>
        <td headers="home not-compliant beginner-not-compliant">0</td>
        <td headers="home not-compliant advanced-not-compliant">0</td>
        <td headers="home not-applicable beginner-not-applicable">13</td>
        <td headers="home not-applicable advanced-not-applicable">7</td>
        <td headers="home conformity" class="bg-light">100%</td>
      </tr>
      <tr>
        <th id="article">Article</th>
        <td headers="article compliant beginner-compliant">17</td>
        <td headers="article compliant advanced-compliant">12</td>
        <td headers="article not-compliant beginner-not-compliant">0</td>
        <td headers="article not-compliant advanced-not-compliant">1</td>
        <td headers="article not-applicable beginner-not-applicable">13</td>
        <td headers="article not-applicable advanced-not-applicable">7</td>
        <td headers="article conformity" class="bg-light">97%</td>
      </tr>
  </table>

<pre><code class="html">
&lt;p class="border-top border-light" id="tblDesc">Description of the table&lt;/p&gt;
&lt;table aria-describedby="tblDesc" class="table"&gt;
 &lt;caption class="visually-hidden position-relative"&gt;Summary by level&lt;/caption&gt;
 &lt;tr&gt;
    &lt;th id="criterion"&gt;Criteria&lt;/th&gt;
    &lt;th id="compliant" headers="criterion" colspan="2"&gt;Compliant&lt;/th&gt;
    [...]
  &lt;/tr&gt;
  &lt;tr&gt;
    &lt;th id="level"&gt;Level&lt;/th&gt;
    &lt;th id="beginner-compliant" headers="Compliant"&gt;Beginner&lt;/th&gt;
    &lt;th id="advanced-compliant" headers="Advanced"&gt;Advanced&lt;/th&gt;
    [...]
  &lt;/tr&gt;
  &lt;tr&gt;
    &lt;th id="home"&gt;Home&lt;/th&gt;
    &lt;td headers="home compliant beginner-compliant"&gt;17&lt;/td&gt;
    &lt;td headers="home compliant advanced-compliant"&gt;13&lt;/td&gt;
    [...]
  &lt;/tr&gt;
  [...]
</code></pre>
