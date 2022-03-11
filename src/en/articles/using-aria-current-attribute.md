---
title: "Using the aria-current attribute "
abstract: "The different possible uses of the ARIA attribute: aria-current"
titleBeforeTag: true
date: "2022-03-10"
tags:
  - web
  - intermediate
---
  
## Introduction
The [aria-current](https://www.w3.org/TR/wai-aria-1.2/#aria-current) attribute indicates the element that represents the current item within a container or set of related elements.

To put it simply, let's take the example of a navigation menu. The current element is usually highlighted by a visual effect. So that this highlighting is also perceived by users who use a screen reader (or any assistance tool), it is essential to mark the element at code level using the aria attribute `aria-current`.

## How to use it ?

To indicate the current element in an element set, simply add an `aria-current` attribute in the HTML code. For the example below, we use the generic value `true`: 

<pre><code class="html">
  &lt;ul&gt;
    &lt;li&gt;element 1&lt;/li&gt;
    &lt;li <span class="important">aria-current="true"</span>&gt;element 2&lt;/li&gt;
    &lt;li&gt;element 3&lt;/li&gt;
  &lt;ul&gt;
</code></pre>

The second element of this list will for example be vocalized "**current**, element 2" by the NVDA screen reader. 

## Uses

The `aria-current` attribute accepts the following values: `true`, `page`, `step`, `location`, `date`, `time` and `false`.

- `true` : indicates the current item within a set
- `step` : indicates the current step within a process
- `location` : indicates the current location within an environment or context.
- `date` : indicates the current date within a collection of dates.
- `time` : indicates the current time within a set of times
- `false` (default) : does not represent the current item within a set


## Some examples of common uses

### Examples 1: navigation menu

Use the value `page` to indicate the current page in a set of pages.

![Navigation menu with 3 items: home, help and about. The about element is underlined and displayed in a different color which visually allows to understand that it is the element currently being consulted ](../images/using-aria-current-attribute/menu-navigation.png)

<pre><code class="html">
  &lt;nav aria-label="Main navigation"&gt;
    &lt;ul&gt;
      &lt;li&gt;
        &lt;a href="/en/"&gt;Home&lt;/a&gt;
      &lt;/li&gt;
      &lt;li&gt;
        &lt;a href="/en/help/"&gt;Help&lt;/a&gt;
      &lt;/li&gt;
      &lt;li&gt;
        &lt;a href="/en/about/" <span class="important">aria-current="page"</span>&gt;About&lt;/a&gt;
      &lt;/li&gt;      
    &lt;/ul&gt;
</code></pre>

### Examples 2: paging system

Use the `page` value to indicate the page being viewed in a paging system: 
![Screenshot, example of paging system, a previous button, a next button and 3 links labeled 1, 2 and 3 ](../images/using-aria-current-attribute/pagination.png)

<pre><code class="html">
  &lt;ol&gt;
    &lt;li aria-label="page 1"&gt;1&lt;/li&gt;
    &lt;li aria-label="page 2" <span class="important">aria-current="page"</span>&gt;2&lt;/li&gt;
    &lt;li aria-label="page 3"&gt;3&lt;/li&gt;    
  &lt;/ol&gt;
</code></pre>

### Examples 3: breadcrumb

Use the `page` value to indicate the current page in a breadcrumb: 
![Screenshot of a breadcrumb ](../images/using-aria-current-attribute/breadcrumb.png)

<pre><code class="html">
  &lt;ol&gt;
    &lt;li&gt;&lt;a href="..."&gt;Home&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href="..."&gt;Articles&lt;/a&gt;&lt;/li&gt;
    &lt;li <span class="important">aria-current="page"</span>&gt;Using the aria-current attribute&lt;/li&gt;
  &lt;/ol&gt;
</code></pre>

### Examples 4: step process

Use the `step` value to indicate the current step in a multi-page step process. 

![Screenshot of a component displaying a step-by-step process such as can be found on a merchant site (choice of a product, delivery, payment...). 5 steps are visible, step 3 is highlighted (color change) to indicate that it is the current step. ](../images/using-aria-current-attribute/stepbar.png)

<pre><code class="html">
  &lt;ol&gt;
    &lt;li&gt;Label n°1&lt;/li&gt;
    &lt;li&gt;Label n°2&lt;/li&gt;
    &lt;li <span class="important">aria-current="step"</span>&gt;Label n°3&lt;/li&gt;
    &lt;li&gt;Label n°4&lt;/li&gt;
    &lt;li&gt;Label n°5&lt;/li&gt;
  &lt;/ol&gt;
</code></pre>

### Example 5: datepicker

Use the `date` value in a datepicker component. An `aria-current="date"` attribute is positioned on the current date while an `aria-selected="true"` attribute is positioned on the currently selected date.

![Screenshot of a datepicker component, today's date and the date being selected are highlighted.](../images/using-aria-current-attribute/datepicker.png)
