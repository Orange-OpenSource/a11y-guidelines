---
title: "Skip links best practices"
abstract: "Skip links, what is it and how to implement them"
titleBeforeTag: true
date: "2019-06-19"
updateDate: "2025-02-28"
tags:
  - web
  - beginner
---

## What is a skip link?

### What is it?

Skip links are shortcuts that allow you to directly access a content area or avoid some areas of the page, so you can navigate faster.

We can distinguish 3 types of skip links:

1. **quick access links:** gathered at the top of the page to go to the main regions of the page: "Skip to menu", "Skip to content", "Skip to search", for example
2. **section skip links:** positioned before the region that they allow to skip: "Skip the section", "Skip the chapter"
3. **In-page navigation links:** "Back to top", for example

These skip links allow the user to avoid parts of pages, if we navigate with the keyboard, or if it is difficult to locate content in a large page or even if scrolling thought the page is difficult.

Skip links are the first links on the page, and this makes sense as they allow users to navigate more easily. However, they may not be the first focusable elements when, for example, a cookie management banner is presented to the user. Indeed, the user must take action on the cookie banner before navigating the site, regardless of the position of the banner on the page.

### For whom?

Skip links are valuable for many users:

- Screen reader users or people unable to use the mouse, so they only navigate with the keyboard
- Users who are struggling to navigate a large page: motor impaired people (fatigability or motor limitations) or people on their smartphone (this is a way to spare the user from swiping to browse the page)
- the visually impaired, who use or not a screen magnifier, and have trouble having a global representation of the topology of the page

We will therefore, thanks to skip links, limit the use of keyboard navigation keys and more generally decrease the gestures to be done when navigating between pages.

## Use

It is generally a link pointing to an HTML element with an id attribute.

```html
<body>
  <a class="skip" href="#content">Go to content</a>
  […]
  <main id="content">
     […]
  </main>
  […]
</body>
```

## What are the best practices?

- It is possible to embed a skip link as an image (such as an 'arrow' with a <code>title</code> attribute) that appears after scrolling the page. The skip link returns directly to the top of the page. This avoidance link should not hinder the reading or understanding of the information; it should be the last keyboard-focusable element.
- The skip link must be reachable by keyboard navigation and independent of the navigation direction.(<kbd>Tab</kbd> ou <kbd>Shift</kbd> + <kbd>Tab</kbd>).
- Placing a skip link on an <code>id</code> works, but targeting the skip link on elements like <code>aside</code>, <code>footer</code>, or <code>main</code> makes it less sensitive to potential changes (such as an <code>id</code> change, or simply not being included in the code of a new page, for instance).
- Skip or quick access links should be visually located in the same place on the page and in the same relative order in the source code across all pages of the site.

### When should skip links be put in place?

The first question to ask is: does the user need skip links on my site?

The main reasons for setting up skip links:

- the page is long
- navigation contains a lot of links
- the content has a lot of links (several navigation menus, footers acting as a site map, etc.)
- the page is divided into many different parts (portal, dashboard, etc.)
- there is no other way to navigate within the page (section title, HTML5 semantic structure…)

**Note**: keep in mind that for a skip link to be functional, it should not merely scroll the page to the indicated location (such as the main content). It must allow the user to 'skip' a part of the page. If a user activates a 'Go to content' link using the keyboard, on the next <kbd>Tab</kbd>, the focus should move to the main content and not to the next avoidance link. This focus can be achieved by placing an anchor to the next <code>id</code> to target, for example."

Thus, when we use an anchor link, the system focus moves with it. However, the screen reader cursor will only move to the anchored element if it is focusable. When the anchored element is not focusable, the skip link is still considered the 'active element'.

To resolve this issue, we can place an anchor on the element and use a <code>tabindex="-1"</code> to make it focusable via JavaScript (it will remain excluded from focusable elements when using the <kbd>Tab</kbd> key).

**Note**: skip links are also important for business applications, whose content is typically very dense and complex.

### Using a hybrid solution?

We have seen that the quick access links can be visible or hidden by default and can be displayed according to keyboard navigation. This last option often answers aesthetic problems. Nevertheless, it removes the benefit that these links could bring to other users who do not use the keyboard (users of software magnifiers for example). One solution, which would reconcile the advantages of the two techniques, would be to position a discrete but <a href="/en/glossary/#:~:text=Glossary-,AFFORDANCE,-The%20quality%20or">affording</a> button at the top of the page, to trigger on demand the opening and closing of the quick access links panel. We could also think of a horizontal bar visible at the top of the page opening and disappearing when scrolling down the page.

Whatever the solution, the skip links must be visible (as far as possible) and usable by everyone!

## Exemples

&nbsp;Exemple 1:
```html
<ul id="skip">
   <li>
      <a href="#content">Go to content</a>
   </li>
   <li>
      <a href="#menu">Go to menu</a>
   </li>
   <li>
      <a href="#search">Go to search</a>
   </li>
</ul>
```

&nbsp;Exemple 2:
```html
<p id="skiplink">
   <a href="#navigation">Go to navigation</a>
</p>
```

## Examples of specific usage

If skip links are not made visible on the screen by default (for design reasons, for example), it is important that they remain interpretable by assistive tools.
The solution is to use an accessible hiding CSS class. Frameworks like **Bootstrap** and **Boosted** directly include this type of class (<code lang="en">visually-hidden</code>  and <code lang="en">visually-hidden-focusable</code>). Thus, even if it is not visible on the screen, an element with the class <code lang="en">visually-hidden</code> will be correctly vocalized by a screen reader.

```css
a.evitement {
   position: absolute;
   left: -99999px;
}
a.evitement:focus {
   position: static;
}
```

## Key points
- On a page, there can be three types of skip links (quick access links, escape links, and internal navigation links).
- Skip links position the user in the requested area and do not just scroll the page (focus management).
- Quick access links target the fixed elements in pages layouts (<code>footer</code>, <code>main</code>, <code>banner</code>, etc.). They are more robust.
- Skip  links are particularly useful and used in business applications or back-office.

For any comments, suggestions, feel free to view or create an issue on our <a href="https://github.com/Orange-OpenSource/a11y-guidelines/issues">github account</a>.
