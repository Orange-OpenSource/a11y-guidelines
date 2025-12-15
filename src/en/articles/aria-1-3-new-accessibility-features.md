---
title: "New features in ARIA version 1.3: a guide for developers"
abstract: "Explore the new features introduced in ARIA version 1.3. This article provides practical examples and explains how these enhancements improve web application accessibility for all users."
titleBeforeTag: true
date: "2025-08-01"
updateDate: "2025-10-06"
tags:
  - web
  - advanced
---

This article is regularly updated based on the new features announced in version 1.3 of the <abbr>ARIA</abbr> standard.

## Introduction
Version 1.3 of the <abbr>ARIA</abbr> (Accessible Rich Internet Applications) standard introduces significant improvements for web application accessibility. This article aims to present the new attributes and roles introduced, their usage, and the impact they can have on the user experience.

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

Description: this attribute has been modified in the version 1.3 of <abbr>ARIA</abbr> to allow referencing multiple <code>id</code> attributes. It thus allows referencing one or more elements that provide additional information about another element, offering a richer context.

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
<input type="email" aria-description="Please enter your email address." />
```

User impact: users will have access to additional information that can help them fill out forms or interact with elements more effectively.

### aria-errormessage

Description: this attribute allows linking an error message to a form element. The error message is then vocalized by assistive technologies only if the form element is invalid (<code>aria-invalid="true"</code>).

Example usage:

```html
<label for="mail">Email address</label>
<input type="email" id="mail" aria-invalid="true" aria-errormessage="mailError" />
<p id="mailError">Error: enter a valid email address</p>
```

User impact: users will be able to understand and correct errors more easily when filling out a form.

### aria-keyshortcuts

Description: this attribute allows highlighting in the DOM any keyboard shortcuts available to users.

Example usage:

```html
<button type="button" aria-keyshortcuts="Esc">Close dialog</button>
```

User impact: inform users and enable all users to know the available keyboard shortcuts to facilitate navigation.

### aria-placeholder

Description: this attribute allows adding a placeholder to custom form elements that do not natively support the placeholder attribute, such as a <code>div</code> with a <code>contenteditable</code> attribute.

Example usage:

```html
<div contenteditable="true" aria-placeholder="Write your message">...</div>
```

User impact: better understanding of users.

## New ARIA roles

### role="suggestion"

Description: this role is used to programmatically indicate that a change has been made in a text. This allows users to understand that there are options or proposed corrections in the text that they can consider or apply.

Example usage:

```html
<p>
  The best pets are
  <span role="suggestion">
    <span role="deletion">dogs.</span>
    <span role="insertion">T. Rex.</span>
  </span>
</p>
```

User impact: users can receive helpful advice that enhances their experience and helps them navigate more effectively through the application.

### role="comment"

Description: this role is used to programmatically indicate comment areas.

Example usage:

```html
<article>
  <h1>My Blog Post</h1>
  <div class="comments-section">
    <div role="comment" aria-labelledby="user1">
      <h3 id="user1">Mary</h3>
      <time datetime="2024-01-20">01/20/2024</time>
      <p>Great article, thanks!</p>
    </div>
  </div>
</article>
```

User impact: users will benefit from clear instructions that help them interact with elements more effectively.

### role="mark"

Description: the <code>mark</code> role is used to indicate text that has been highlighted or is of particular importance within the content.

Example usage:

```html
<p>This text is <span role="mark">important</span> for understanding.</p>
```

User impact: screen reader users can be informed about important elements in the content, improving their ability to grasp key points.

### role="code" and role="time"

Description: <code>role="code"</code> and <code>role="time"</code> reproduce the semantics of the HTML elements <code>code</code> and <code>time</code>.

User impact: maintain good semantics in cases where it is not possible to use native HTML elements due to technical constraints.

### role="image"

Description: <code>role="image"</code> is created as a replacement for <code>role="img"</code> to harmonize the names of different <abbr>ARIA</abbr> roles. <code>role="img"</code> remains valid for backward compatibility reasons.

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
  <li><a href="https://webaim.org/blog/up-and-coming-aria/">Up and Coming ARIA</a></li>
</ul>
