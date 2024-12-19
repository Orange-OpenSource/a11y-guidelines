---
title: "Skip links best practices"
abstract: "Skip links, what is it and how to implement them"
titleBeforeTag: true
date: "2019-06-19"
tags:
  - web
  - beginner
---

Update: December 2024

## What is an skip link?

### What is it?

Skip links are shortcuts that allow you to directly access a content area or avoid some areas of the page, so you can navigate faster.

We can distinguish 3 types of skip links:

1. **quick access links:** gathered at the top of the page to go to the main regions of the page: "Skip to menu", "Skip to content", "Skip to search", for example
2. **section skip links:** positioned before the region that they allow to jump: "Skip the section", "Skip the chapter"
3. **In-page navigation links:** "Back to top", for example

These skip links allow the user to avoid parts of pages, if we navigate with the keyboard, or if it is difficult to locate content in a large page or even if scrolling thought the page is difficult.

### For whom?

Skip links are valuable for many users:

- Screen reader users or people unable to use the mouse, so they only navigate with the keyboard
- Users who are struggling to navigate a large page: motor impaired people (fatigability or motor limitations) or people on their smartphone (this is a way to spare the user from swiping to browse the page)
- the visually impaired, who use or not a screen magnifier, and have trouble having a global representation of the topology of the page

### What are the types of solutions?

1. Quick Links: the most common solution, is a series of links (usually between 1 and 6) positioned at the top of the page and embedded in the code just after the body tag. Each link points to a region, or any other important part of the page. They are generally defined with a font size smaller than the body text, or hidden by default and appearing only when keyboard navigation is detected or when listening to focus capture events.
2. Skip links: these elements are positioned just before each page part or region to skip. They can be always visible or made visible, during keyboard navigation, on focus.
3. "Back to top" internal navigation links: they are often pinned (CSS <code>sticky</code> position) at the very bottom, right side of the viewport, always visible or appearing only when we're at the end of the vertical scrolling.

## What are the best practices?

### When should skip links be put in place?

The first question to ask is: on my site, does the user need skip links?

The main reasons for setting up skip links:

- the page is long
- navigation contains a lot of links
- the content has a lot of links (several navigation menus, footers acting as a site map, etc.)
- the page is divided into many different parts (portal, dashboard, etc.)
- there is no other way to navigate within the page (section title, HTML5 semantic structure…)

### Using a hybrid solution?

We have seen that the quick access links can be visible or hidden by default and can be displayed according to keyboard navigation. This last option often answers aesthetic problems. Nevertheless, it removes the benefit that these links could bring to other users who do not use the keyboard (users of software magnifiers for example). One solution, which would reconcile the advantages of the two techniques, would be to position a discrete but affording button at the top of the page, to trigger on demand the opening and closing of the quick access links panel. We could also think of a horizontal bar visible at the top of the page opening and disappearing when scrolling down the page.

Whatever the solution, the skip links must be visible (as far as possible) and usable by everyone!

For any comments, suggestions, feel free to view or create an issue on our <a href="https://github.com/Orange-OpenSource/a11y-guidelines/issues">github account</a>.
