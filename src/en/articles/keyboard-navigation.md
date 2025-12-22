---
title: "Handling keyboard navigation for ARIA"
abstract: "Handling keyboard navigation is one of the mainstays of the W3C WAI ARIA recommendations"
titleBeforeTag: true
date: "2018-01-16"
updateDate: "2026-01-01"
tags:
  - component
---

## Introduction
Handling keyboard navigation is one of the mainstays of the W3C/WAI <abbr>ARIA</abbr> recommendations (Accessible Rich Internet Applications). The goal is to standardize keyboard navigation in each interface component on a web page.
Generally, keyboard navigation between UI components is done by tabbing. However, inside a widget, keyboard navigation must be fine‑tuned by following the design patterns that are part of the ARIA recommendation.

## ARIA and keyboard interactions

### tabindex
In HTML5, the global attribute `tabindex` can be used on most rendered elements. It allows the following uses:

- a negative value (`tabindex="-1"`) which removes the element from the sequential tab order (it is not reachable via the <kbd>Tab</kbd> key), but it can receive focus programmatically (for example `element.focus()`) or with a click;
- a value of `tabindex="0"` which allows the element to enter the natural tab order and receive focus like natively focusable elements.

Avoid using positive `tabindex` values (> 0) except in very well‑justified cases: they change the tab order and are hard to maintain.

### Design patterns
With ARIA, the main goal is to standardize keyboard interactions by making keyboard navigation similar to that of a desktop application. For each component, implement keyboard behaviour according to its type (accordion, navigation menu, toolbar, slider, etc.) by referring to the <a href="https://www.w3.org/WAI/ARIA/apg/patterns/">ARIA design patterns</a>. In addition to keyboard navigation, these design patterns describe how to implement ARIA properties and states to make a component accessible depending on its type.

### User testing
To validate usability for people with disabilities and robustness with user agents (assistive technologies and browsers), it is recommended to have your components tested by people who use screen readers, at minimum. Test your developments on the target environments (browser + assistive technology combinations). This is a substantial but essential effort. At minimum, test with the following combinations:

- macOS: Safari + VoiceOver
- Windows (Chromium): Chrome/Edge + NVDA
- Windows (Chromium): Chrome/Edge + JAWS (if your users rely on it)
- Windows: Firefox + NVDA

These user tests will allow you to validate that your widget is usable for these users and, by extension, for all users benefiting from accessibility. For reference, <a href="https://www.who.int/news-room/fact-sheets/detail/disability-and-health">16% of the world population has a disability according to <abbr>>WHO</abbr> data</a>.
