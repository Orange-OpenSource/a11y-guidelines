# Structuring data tables

<script>$(document).ready(function () {
    setBreadcrumb([
        {"label":"Themed WCAG index - Developers", "url": "./incontournables.html#dev"},
        {"label":"Structuring data tables"}
    ]);
});</script>

<span data-menuitem="incontournables"></span>

**Target: **everyone, particularly people with visual disabilities.  
**When: **as of design and during development.

**Description: **

For tabular data:
- Use the `table` element with `th`(for table headers), `td`,` tr` children elements.
- Use the `scope` attribute with `row` / `col` values to associate header cells and data cells. For complex tables, use the` id` and `headers` attributes.
- Use the `caption` tag, a `h1` to `h6` tag just before the table or use a text near the table via an `aria-labelledby` attribute in the `table` element to associate a title to the table (see [ARIA attributes that can save you](./label-ledby-describedby.html)).
- Add a summary to explain the structure of a complex table :
 - **HTML5**: add the summary directly in the `caption`.
 - **Previous version:** add the summary in a `summary` attribute.


**Checklist: **

- Reminder: Do not use tables for page layout purposes. 
- The caption (`caption`) can be replaced by a section title (`hx`) located before the table.
- Prefer splitting a complex table into several simpler tables.
- The `tbody`, `tfoot` and `thead` tags have no influence on accessibility, hence, there is no obligation to use them.

In the case of a complex table, a summary is present to explain the structure:
- **HTML5**: the summary of the table is present in the legend (`caption`).
- **HTML5 - alternative solution**: the summary is linked to the array via an `aria-describedby` attribute.
- **Previous version:** the summary is present in a `summary` attribute of the table.

**Users’ goal: **

Giving a summary and title for data tables allows everyone to know quickly its purpose without having to read it. For visually impaired users, binding cells to headers allows them to know where they are situated and understand the data in it.

**Technical goal: **

Improve natural referencing.

**Reference <abbr>WCAG</abbr>&nbsp;:**  
- <a href="https://www.w3.org/TR/WCAG21/#info-and-relationships">1.3.1 Info and Relationships</a>


<!--  This file is part of a11y-guidelines | Our vision of mobile & web accessibility guidelines and best practices, with valid/invalid examples.
 Copyright (C) 2016  Orange SA
 See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). -->