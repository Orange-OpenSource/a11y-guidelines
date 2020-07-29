---
title: "WCAG criteria by project phase"
boostedJS: true
---

# WCAG criteria by project phase

This base criteria for the Orange websites and applications avoids the major accessibility errors. It is a subset of the accessibility requirements.   
Its implementation does not give you the guarantee to be 100% accessible, but is a clean bedrock so you can engage in a progressive accessibility implementation process.

Following the Orange guidelines (<cite>Design for digital platforms Guidelines</cite>), available on the [Orange brand site](http://design.orange.com/) is a prerequisite to the use of this base criteria. 
Some elements already present in the Orange Brand (such as the use of colours, text alignment...) have not been included in this list of criteria.

Three versions are available:
- **The design version** does not mention the code, it is aimed at product designers, designers, project managers, etc.
- **The development version** mentions the code and is aimed at developers, technical managers, validation teams, testers, etc.
- **The test version** presents the procedures to follow in order to validate the compliance of each recommendation. It is intended for designers, developers, qualifiers, etc.

<ul class="nav nav-tabs" role="tablist">
<li class="nav-item">
<a class="nav-link active" id="incontournables-concepteurs-tab" data-toggle="tab" href="#incontournables-concepteurs" role="tab" aria-controls="incontournables-concepteurs" aria-selected="true">Design</a>
</li>
<li class="nav-item">
<a class="nav-link" id="incontournables-developpeurs-tab" data-toggle="tab" href="#incontournables-developpeurs" role="tab" aria-controls="incontournables-developpeurs" aria-selected="false">Development</a>
</li>
<li class="nav-item">
<a class="nav-link" id="incontournables-testeurs-tab" data-toggle="tab" href="#incontournables-testeurs" role="tab" aria-controls="incontournables-testeurs" aria-selected="false">Tests</a>
</li>
</ul><div class="tab-content"><div class="tab-pane show active" id="incontournables-concepteurs" role="tabpanel" aria-labelledby="incontournables-concepteurs-tab">

## Textual content

Ensure that textual content is structured with the appropriate semantics

- [Set a title for each page](../design/page-title/)
- [Start sections with headings](../design/start-sections-with-headings/)

## Non-text content

Ensure that an alternative to non-text content is provided to the user

- [Define text alternatives](../design/define-text-alternatives/)
- [Provide accessible audio or video tracks](../design/audio-or-video-tracks/)
- [Avoid captcha](../design/avoid-captcha/)

## Colors and contrasts

Ensure that the colors used are not a problem for the user

- [Make sure there is enough contrast between text and background](../design/color-contrasts/)
- [Do not use colour or sensory characteristics as the unique source of information](../design/color-as-information/)

## Common navigation

Make sure that the user easily navigate within page and more generally in the website

- [Link and button labels](../design/link-and-button-labels/)
- [Avoid dialogues and opening new windows](../design/avoid-dialogues-and-new-windows/)
- [Provide skip links](../design/provide-skip-links/)
- [Allowing control of animations](../design/allowing-control-of-animations/)
- [Explicitly locate the page in the site and provide several ways to access it](../design/locate-page/)

## Keyboard navigation

Ensure the user can navigate using the keyboard only

- [Navigating with the keyboard](../design/keyboard-navigation/)
- [Focus visibility](../design/focus-visibility/)

## Layout

Make sure the layout is suitable for the user

- [Relative text size and responsive design](../design/text-size-and-responsive-design/)
- [Allow text spacing](../design/allow-text-spacing/)
- [Identify and maintain consistency of groupings and different regions of the page](../design/consistency-across-pages/)
- [Define sensitive areas of sufficient size](../design/sufficient-size-for-sensitive-areas/)

## Forms

Ensure that the user can effectively complete the forms

- [Usable forms](../design/usable-forms/)

## Touch and interactions

Ensure that the user keeps control over interactions, particularly tactile ones

- [Offer an alternative to complex gestures](../design/complex-gestures/)
- [Give access to the content regardless of the orientation of the screen](../design/screen-orientation/)

</div>
<div class="tab-pane" id="incontournables-developpeurs" role="tabpanel" aria-labelledby="incontournables-developpeurs-tab">
<h2 id="dev-contenu-textuel">Textual content</h2>

Ensure that textual content is structured with the appropriate semantics

- [Set a title for each page](../develop/set-a-title-for-each-page/)
- [Give a title to headings](../develop/start-sections-with-headings/)
- [Use HTML semantics](../develop/use-html-semantics/)
- [Declaring the main language and language changes](../develop/declare-language/)
- [Structuring data tables](../develop/structuring-data-tables/)


<h2 id="dev-contenu-non-textuel">Non-text content</h2>

Ensure that an alternative to non-text content is provided to the user

- [Set a text alternatives for images and frames](../develop/images-and-frames-alternatives/)
- [Provide accessible audio or video tracks](../develop/audio-or-video-tracks/)
- [Avoid captcha](../develop/avoid-captcha/)


<h2 id="dev-couleurs-et-contrastes">Colors and contrasts</h2>

Ensure that the colors used are not a problem for the user

- [Provide enough contrast between text and background](../develop/color-contrasts/)
- [Do not use colour or sensory characteristics as the unique source of information](../develop/color-as-information/)


<h2 id="dev-navigation-generale">Common navigation</h2>

Make sure that the user easily navigate within page and more generally in the website

- [Link and button labels must be understandable out of context](../develop/link-and-button-labels/)
- [Warn the user when opening a new window](../develop/opening-in-a-new-window/)
- [Provide skip links](../develop/provide-skip-links/)
- [Ensure the user keeps control during interactions](../develop/interactions-control/)
- [Provide multiple access and location](../develop/multiple-access/)
- [Allow to know the result of a user interaction with status messages](../develop/status-messages/)
- [Allowing animations control](../develop/allowing-animations-control/)


<h2 id="dev-navigation-clavier">Keyboard navigation</h2>

Ensure the user can navigate using the keyboard only

- [Allow the use of the main features of the application with the keyboard](../develop/keyboard-navigation/)
- [The focus order must be sequential and logical without keyboard trap](../develop/focus-order/)
- [Make the focus visible at all times](../develop/focus-visibility/)


<h2 id="dev-mise-en-page">Layout</h2>

Make sure the layout is suitable for the user

- [Use relative size to allow changing text size and responsive design](../develop/relative-text-size/)
- [Allow text spacing](../develop/allow-text-spacing/)
- [Identify and maintain consistency of groupings and different regions of the page](../develop/consistency-across-pages/)
- [Define sensitive areas of sufficient size](../develop/sufficient-size-for-sensitive-areas/)


<h2 id="dev-formulaires">Forms</h2>

Ensure that the user can effectively complete the forms

- [Make form fields accessible](../develop/form-labels/)
- [Detect, identify errors and suggest corrections](../develop/form-errors/)


<h2 id="dev-tactile-et-interactions">Touch and interactions</h2>

Ensure that the user keeps control over interactions, particularly tactile ones

- [Allow zooming](../develop/allow-zooming/)
- [Allow to cancel the triggering of gestural interactions](../develop/cancel-gestural-interactions/)
- [Offer an alternative to complex gestures](../develop/complex-gestures/)
- [Give access to the content regardless of the orientation of the screen](../develop/screen-orientation/)


<h2 id="dev-aides-techniques">Assistive technology</h2>

Allow the screen reader user access to the main features of the application, but also ensure for all users the usability of the application

- [Make sure the main features can be used with screen readers](../develop/usable-with-screen-readers/)


</div>
<div class="tab-pane" id="incontournables-testeurs" role="tabpanel" aria-labelledby="incontournables-testeurs-tab">
<div class="row">
<section id="refTests" class="col-md-8 panel-group accordion" id="accordion" role="tablist" aria-multiselectable="true">
<h2 id="test-textual-content">Textual content</h2>
<h2 id="test-non-text-content">Non-text content</h2>
<h2 id="test-colors-and-contrasts">Colors and contrasts</h2>
<h2 id="test-common-navigation">Common Navigation</h2>
<h2 id="test-keyboard-navigation">Keyboard navigation</h2>
<h2 id="test-layout">Layout</h2>
<h2 id="test-forms">Forms</h2>
<h2 id="test-touch-and-interactions">Touch and interactions</h2>
<h2 id="test-assistive-technologies">Assistive technology</h2>
</section>
<aside id="filter" class="col-md-4">
<h2>Filters</h2>
<div id="feedback"></div>
<h3>Profiles</h3>
<ul id="profils" class="list-unstyled"></ul>
<h3>Tools</h3>
<ul id="types" class="list-unstyled"></ul>
<div id="filter-footer"></div>

</aside>
</div>
</div>
</div>
