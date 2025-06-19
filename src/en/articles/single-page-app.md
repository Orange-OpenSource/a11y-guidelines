---
title: "Recommendations for Single Page Applications"
abstract: "Recommendations for Single Page Applications"
titleBeforeTag: true
date: "2021-06-25"
tags:
  - web
  - advanced
---
   
A <a href="https://developer.mozilla.org/en-US/docs/Glossary/SPA">single-page web application (SPA)</a> is a web application in which page refresh never occurs. During navigation, only portions of the page are dynamically updated using JavaScript code. 

<abbr title="single page application">SPA</abbr>s have met with enthusiasm since the advent of JavaScript frameworks: Angular, React or Vue to name only the most popular. In this article, the idea is not to take sides for or against SPAs. It must be recognized that used correctly, this type of framework can solve problems, especially when it is used in the design of large web applications. We will focus here on the difficulties that this can bring in terms of accessibility. 

**Warning:** <abbr title="single page applications">SPAs</abbr> should never become the norm. If your need can be met with the help of a standard site you don't need to succumb to the hype. A standard website natively offers accessibility support and spares you the need to get started with a complex framework, skills training, maintenance or compatibility problems with old browsers. 

## Update page title
Browsing through an <abbr title="single-page application">SPA</abbr> does not cause the browser to reload the page. No reloading means no modification of the page title (`title` tag). However, it is important that [each page has a unique title](https://a11y-guidelines.orange.com/en/web/develop/textual-content/#set-a-title-for-each-page).

It will therefore be necessary to update the page title via Javascript (`document.title`). Refer to the documentation of the framework used to know if an implementation of this mechanism is proposed or if it must be created from scratch. 

## Notify user of page changes 

Screen readers used by visually impaired people automatically inform the user when a new page is loaded by the browser. With a <abbr title="single-page application">SPA</abbr>, page changes do not lead the browser to reload, a screen reader therefore has no way of warning the user.

An acceptable solution is to move the focus to the first heading `<h1>` of the current page. This will cause it to be read by the screen reader, so the user will be warned that a new page is displayed.
Note that by default an `<h1>` tag is not focusable. To allow it to receive focus via Javascript, you must add a `tabindex="-1"` attribute to it. 

## Notify the user of updates inside the page 

If some information is dynamically updated in the page (confirmation message, loading in progress, error display, etc., it is important to ensure that screen readers announce these changes. Several methods are available depending on the case:
- Move the focus to an element that has just been updated.
- Use ARIA as indicated in the following articles: [Use ARIA for status messages](https://a11y-guidelines.orange.com/en/articles/aria-status-messages/) and [The aria-live attribute and the role alert](https://a11y-guidelines.orange.com/en/articles/aria-live-alert/). 

## Move focus

On a classic website, when a user clicks on a link and a new page is displayed, the focus is automatically moved to the top of the page (on the `body`). So, for users who navigate using the keyboard, just use the `TAB` key to move around the page.

In a <abbr title="single-page application">SPA</abbr>, if a user clicks on a button that causes a content update, the focus is not moved (it remains on the button). 
More importantly, if the page change makes the focused element disappear, the user will no longer know where he is on the page. This can also cause vocalization issues for screen reader users.

It is therefore important to make sure to move the focus via Javascript when necessary. Likewise, if a modal dialog box is displayed on the screen, the focus must be positioned in the modal when it appears and then returned to the trigger element (a button for example) when it disappears. 

## Use HTML5 semantics

<Abbr title="single-page application">SPA</abbr> are often used in web applications. Sometimes the user has to deal with an interface that looks more like a native application than a website. It is important to ensure that the different areas are correctly identified: navigation, content, search area, etc.

If your application has specific areas, it is recommended to assign them a `label` so that they are quickly identifiable. For example using a `<region>` tag and an `aria-label` or` aria-labelledby` attribute. 

<pre><code class="html">
&lt;div role="region" aria-label="activity monitor"&gt;
  &lt;!-- region content --&gt;
&lt;/div&gt;
</code></pre>

<pre><code class="html">
&lt;div role="region" aria-label="cost simulator"&gt;
  &lt;!-- region content --&gt;
&lt;/div&gt;
</code></pre>

See the article: [Landmarks ARIA](https://a11y-guidelines.orange.com/en/web/components-examples/landmarks/), to get more information on the use of these tags. 

## Manage browser history 

Nothing could be more annoying than exiting an application when you simply wanted to return to the previous page using the browser's `previous` button. However, this is what sometimes happens in <abbr title="single-page application">SPA</abbr>.

The solution is to manipulate the browser history in Javascript using the [History API](https://developer.mozilla.org/en/docs/Web/API/History_API). This allows you to store the different states of the application and return to them using the `previous` and `next` buttons of the browser.

<h2>Summary of good practices</h2>

- Update the page title (`document.title`)
- Notify the user of page changes
- Notify the user of updates inside the page (ARIA)
- Move focus
- Use HTML5 semantics
- Manage browser history (History API)

## Useful links
- <a href="https://dev.to/s_aitchison/page-titles-and-a11y-in-single-page-applications-esp-react-vue-4ok8">Page Titles and A11y in Single Page Applications (Suzanne Aitchison)</a>
- <a href="https://www.gatsbyjs.com/blog/2019-07-11-user-testing-accessible-client-routing/">What we learned from user testing of accessible client-side routing techniques with Fable Tech Labs (Marcy Sutton)</a>
