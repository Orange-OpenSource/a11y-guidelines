---
title: "New Features in ARIA Version 1.3: a guide for developers"
abstract: "Explore the new features introduced in ARIA version 1.3. This article provides practical examples and explains how these enhancements improve web application accessibility for all users."
date: "2025-03-18"
tags:
  - web
  - advanced
---

# Introduction
Version 1.3 of the <abbr>ARIA</abbr> (Accessible Rich Internet Applications) standard brings significant improvements to the accessibility of web applications. This article aims to inform web and mobile developers, as well as anyone interested in digital accessibility, about the new attributes and roles introduced, their usage, and the impact they can have on user experience.

# New ARIA attributes

1. aria-braillelabel

Description: this attribute allows developers to provide a specific label for users of braille devices. It is particularly useful for interactive elements, such as buttons or links, where a clear label is essential for understanding.

Example usage:

```html
<button aria-braillelabel="Send message">Send</button>
```

User impact: braille device users will benefit from a better understanding of available actions, which can enhance their navigation experience and autonomy.

2. aria-brailleroledescription

Description: this attribute provides a description of an element's role for users of Braille devices. It helps to contextualize the function of an element, especially in complex interfaces.

Example usage:

```html
<div role="navigation" aria-brailleroledescription="Main navigation menu">
  <ul>
    <li><a href="#home">Home</a></li>
    <li><a href="#about">About</a></li>
  </ul>
</div>
```

User impact: braille device users will have a better understanding of the page structure, making navigation and interaction with content easier.

3. aria-details

Description: this attribute allows referencing an element that provides additional information about another element. It is particularly useful for elements that require contextual explanations.

Example usage:

```html
<button aria-details="details1">Learn more</button>
<div id="details1" hidden>
  <p>Here is additional information about this button.</p>
</div>
```

User impact: users, especially those using screen readers, will benefit from a better understanding of elements, reducing confusion and enhancing the overall experience.

4. aria-description

Description: this attribute allows providing a description of an element, offering additional contextual information to users.

Example Usage:

```html
<input type="text" aria-description="Please enter your email address." />
```

User impact: users will have access to additional information that can help them fill out forms or interact with elements more effectively.

# New ARIA roles

1. role="mark"

Description: the <code>mark</code> role is used to indicate text that has been highlighted or is of particular importance within the content.

Example usage:

```html
<p>This text is <mark>important</mark> for understanding.</p>
```

User impact: screen reader users can be informed about important elements in the content, improving their ability to grasp key points.

2. role="complementary"

Description: the <code>complementary</code> role designates content that complements the main content but is not essential for its understanding. This helps to structure content logically.

Example usage:

```html
<aside role="complementary">
  <h2>Related Articles</h2>
  <ul>
    <li><a href="#article1">Article 1</a></li>
    <li><a href="#article2">Article 2</a></li>
  </ul>
</aside>
```

User impact: users can more easily navigate complementary content, enriching their experience and overall understanding.

3. role="description"

Description: the description role is used to provide additional information about an element, often used in conjunction with other roles.

Example usage:

```html
<div role="description">
  <p>This is a detailed description of the element.</p>
</div>
```

User impact: users will benefit from a better understanding of elements, helping them interact more effectively with the content.

# Use Cases

## Messaging Applications
In a messaging application, using <code>aria-braillelabel</code> and <code>aria-brailleroledescription</code> can enhance the user experience by providing clear labels for action buttons, allowing users to quickly understand available options.

## Navigation Interfaces
For navigation interfaces, <code>aria-details</code> and <code>aria-description</code> can be used to provide additional context about navigation elements, making the experience more intuitive for all users, especially those using assistive technologies.

# Conclusion
Version 1.3 of the <abbr>ARIA</abbr> standard introduces essential attributes and roles that enhance the accessibility of web applications. By integrating these new features, developers can create more inclusive experiences for all users, particularly those who rely on assistive technologies. Feel free to explore these new features and apply them in your projects to ensure better digital accessibility.

# Webography
<ul>
  <li><a href="https://w3c.github.io/aria/">WAI-ARIA 1.3 draft</a></li>
  <li><a href="https://www.craigabbott.co.uk/blog/a-look-at-the-new-wai-aria-1-3-draft/">A look at the new WAI-ARIA 1.3 draft</a></li>
</ul>