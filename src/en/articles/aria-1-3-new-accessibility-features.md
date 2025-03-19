---
title: "New features in ARIA version 1.3: a guide for developers"
abstract: "Explore the new features introduced in ARIA version 1.3. This article provides practical examples and explains how these enhancements improve web application accessibility for all users."
titleBeforeTag: true
date: "2025-03-18"
tags:
  - web
  - advanced
---

## Introduction
Version 1.3 of the <abbr>ARIA</abbr> (Accessible Rich Internet Applications) standard brings significant improvements to the accessibility of web applications. This article aims to inform web and mobile developers, as well as anyone interested in digital accessibility, about the new attributes and roles introduced, their usage, and the impact they can have on user experience.

## New ARIA attributes

### aria-braillelabel

Description: this attribute allows developers to provide a specific label for users of braille devices. It is particularly useful for interactive elements, such as buttons or links, where a clear label is essential for understanding.

Example usage:

```html
<button aria-braillelabel="Send message">Send</button>
```

User impact: braille device users will benefit from a better understanding of available actions, which can enhance their navigation experience and autonomy.

### aria-brailleroledescription

Description: this attribute provides a description of an element's role for users of braille devices. It helps to contextualize the function of an element, especially in complex interfaces.

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

### aria-details

Description: this attribute has been modified in the version 1.3 of <abbr>ARIA</abbr> to allow referencing multiple <code>is</code>. It thus allows referencing one or more elements that provide additional information about another element, offering a richer context.

Example usage:

```html
<button aria-details="details1 details2">Learn more</button>
<div id="details1">
  <p>Here is additional information about this button.</p>
</div>
<div id="details2">
  <p>Also, check our user guide.</p>
</div>
```

User impact: users, especially those using screen readers, will benefit from a better understanding of elements, reducing confusion and enhancing the overall experience.

### aria-description

Description: this attribute allows providing a description of an element, offering additional contextual information to users.

Example usage:

```html
<input type="text" aria-description="Please enter your email address." />
```

User impact: users will have access to additional information that can help them fill out forms or interact with elements more effectively.

## New ARIA roles

### role="suggestion"

Description: This role is used to indicate that an element provides a suggestion or recommendation to the user.

Example usage:

```html
<div role="suggestion">
  <p>We recommend trying our new feature!</p>
</div>
```

User impact: users can receive helpful advice that enhances their experience and helps them navigate more effectively through the application.

### role="comment"

Description: This role is used to provide instructions or guidance on how to use an element or feature.

Example usage:

```html
<div role="comment">
  <p>To use this feature, click the button and follow the on-screen instructions.</p>
</div>
```

User impact: users will benefit from clear instructions that help them interact with elements more effectively.

### role="mark"

Description: the mark role is used to indicate text that has been highlighted or is of particular importance within the content.

Example usage:

```html
<p>This text is <mark>important</mark> for understanding.</p>
```

User impact: screen reader users can be informed about important elements in the content, improving their ability to grasp key points.

## Use cases

### Messaging applications
In a messaging application, using <code>aria-braillelabel</code> and <code>aria-brailleroledescription</code> can enhance the user experience by providing clear labels for action buttons, allowing users to quickly understand available options.

### Navigation interfaces
For navigation interfaces, <code>aria-details</code> and <code>aria-description</code> can be used to provide additional context about navigation elements, making the experience more intuitive for all users, especially those using assistive technologies.

### Suggestions and Instructions
Using the new roles <code>suggestion</code> and <code>comment</code> can help guide users in using the application's features by providing them with advice and clear instructions.

## Conclusion
Version 1.3 of the <abbr>ARIA</abbr> standard introduces essential attributes and roles that enhance the accessibility of web applications. By integrating these new features, developers can create more inclusive experiences for all users, particularly those who rely on assistive technologies. Feel free to explore these new features and apply them in your projects to ensure better digital accessibility.

## Webography
<ul>
  <li><a href="https://w3c.github.io/aria/">WAI-ARIA 1.3 draft</a></li>
  <li><a href="https://www.craigabbott.co.uk/blog/a-look-at-the-new-wai-aria-1-3-draft/">A look at the new WAI-ARIA 1.3 draft</a></li>
</ul>
