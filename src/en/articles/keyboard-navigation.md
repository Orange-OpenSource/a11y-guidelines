---
title: "Handling keyboard navigation for ARIA"
abstract: "Handling keyboard navigation is one of the mainstays of the W3c WAI ARIA recommendations"
titleBeforeTag: true
date: "2018-01-16"
updateDate: "2026-01-01"
tags:
  - component
---

## Introduction
Handling keyboard navigation is one of the mainstays of the <abbr>W3c</abbr>/<abbr>WAI</abbr> <abbr>ARIA</abbr> recommendations (Accessible Rich Internet Application). The goal is to standardize keyboard navigation in each interface components on a web page.  
Generally, keyboard navigation between <abbr>UI</abbr> components (widgets) is “classically” done by tabbing. However, inside a widget, keyboard navigation has to be fine-tuned following the design patterns that are part of the <abbr>ARIA</abbr> recommendation.

## Design patterns

### TabIndex
In HTML5, <abbr>ARIA</abbr> makes `tabindex` available to all visible elements and allows the use of:

- a negative value (`-1`) for components that must not be accessible with keyboard navigation, but can receive focus programmatically;
- a value set to `0`, which allows the element to receive the focus like all natively focusable elements.


### Design Patterns
<p>In <abbr>ARIA</abbr>, the main goal is to standardize keyboard interactions by making keyboard navigation identical to a desktop application (“thick client”). It is therefore necessary to implement the keyboard behaviour on each widget according to its type (accordion, navigation bar, tool bar, potentiometer...) by following [<abbr>ARIA</abbr>design patterns](https://www.w3.org/WAI/ARIA/apg/patterns/). In addition to that, design patterns also give a way to implement the <abbr>ARIA</abbr> properties and states in order to make the widget accessible depending on its type.</p>

### User tests
<p>To validate the usability for people with disabilities and the robustness according to user agents (assistive aids and browsers), the web site must be tested at least by screen reader users (this is the most affected population by wrong implementation of design patterns).</p>
<p>In any case, you have to test developments in a combination of target environments (browsers/assistive technologies combination). This is a tough but absolutely necessary task for complex cases because on a web site or a traditional web application, you must, at least, test with Safari/VoiceOver, Internet Explorer/Jaws and Firefox/NVDA.</p>

<p> These user tests will allow you to validate that your widget is ergonomic which means that it is usable for this type of users and by extension for all users benefiting from accessibility (remember that 15% of the total population is said to have a disability of some sort or other).</p>
