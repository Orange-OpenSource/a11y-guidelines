---
title: "Media queries and user preferences: adapting interfaces to user preferences"
abstract: "User preference media features allow interfaces to adapt to preferences expressed by users. Defined by the CSS Media Queries Level 5 specification, they make it possible to respond to preferences such as reduced motion, increased contrast, light or dark color schemes, forced colors, reduced transparency, and reduced data usage."
titleBeforeTag: true
date: "2026-07-21"
tags:
  - web
  - advanced
---

<style>
  table + p {
    margin-top: 1rem;
  }
</style>

With **CSS Media Queries Level 5**, the **World Wide Web Consortium (W3C)** extends the capabilities of *media queries* by introducing new *media features* that allow interfaces to adapt to **user preferences**. These include preferences such as reduced motion (`prefers-reduced-motion`), light or dark color schemes (`prefers-color-scheme`), contrast (`prefers-contrast`), and forced colors (`forced-colors`).

This article covers the main user preference *media features* defined by **Media Queries Level 5**, their use cases, browser support considerations, and best practices for implementing, testing, and auditing them.

*Key takeaway:* the *media features* presented in this article are defined by the **CSS Media Queries Level 5** specification. However, browser support varies across browsers and platforms. While their use is not explicitly required by **WCAG**, **RGAA**, or **EN 301 549**, they represent a good practice for designing interfaces that adapt to user preferences.

## Why were these media features introduced?

Early versions of *media queries* were primarily designed to adapt an interface to the characteristics of the user's device, such as its screen width, orientation, or resolution.

**CSS Media Queries Level 5** expands this approach. In addition to device characteristics, it becomes possible to take **user preferences** into account, such as reduced motion, light or dark color schemes, contrast, or forced colors. These preferences may be defined by the browser, inherited from the operating system settings, or, in some cases, determined automatically by the user agent.

This evolution reflects a broader shift toward more adaptive interfaces. Rather than presenting the same interface to every user, web applications can adjust certain aspects of their presentation to better respect the user's display preferences.
