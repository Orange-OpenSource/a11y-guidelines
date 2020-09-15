---
title: "Web-specific methods and tools"
---

# Web-specific methods and tools

## Introduction
This section describes an evaluation method for project stakeholders to test the compliance of mobile web and web content with the accessibility criteria of the Web Content Accessibility Guidelines (<abbr>WCAG</abbr>) version 2.1 - level AA.  

The detailed description of the tests can be found in the <a href="../wcag-criteria-by-project-phase/">WCAG criteria by project phase, "tests" section</a>.  

Accessibility tests must be carried out throughout the project life cycle:
- at the start of the project, when choosing the framework, software, or package...
- at the design phase on storyboards or prototypes
- during development and testing
- in production, for content sites

## General method
The approach includes 2 types of tests:
- Technical tests that consist of inspecting the code and colour contrast.
- Functional tests that evaluate the interface's performance with various <abbr>assistive technologies</abbr> to ensure that there are no blocking points in the evaluated content.  

Depending on your profile, you can perform technical tests, functional tests or both, but both are necessary to test the accessibility of a website as a whole.
## Method for testing the Web
### Technical evaluation 
Some of the tests can be performed automatically by tools, but the majority of them require manual check. These tests can be performed by any actor in the project (designer, developer, tester, contributor...).  

Approach:
- [Perform automatic tests](./browser-extensions/) with the browser extensions aXe or Wave :
    - aXe automatically identifies errors and validates the quality of the code
    - Wave also identifies accessibility errors and specifies the manual checks to do (consistency of the language code with the language used on the page...)
- [Measure the contrast level of the colours](./color-contrast-level/) with the Colour Contrast Analyser tool.
- Check the valid text spacing via a tool to ensure the readability of the text
- All other tests must be passed through a manual review of the code
- Example: all relevance criteria (consistency of a textual alternative with the content of an image...)

### Functional evaluation
These tests can easily be performed by any project actor. Only screen readers require a learning period.
Approach:
- [Test keyboard navigation](./keyboard-navigation/) using the main keyboard shortcuts to navigate in a web page.
- [Check the adjustment of the text size](./text-zoom/) by handling the browser zoom.
- [Test navigation and vocalization](./navigating-with-a-screen-reader/) with a screen reader.

## Method for testing the mobile web
### Technical evaluation
The tests for the mobile web are identical to those performed for the web. Some of the tests can be performed from a computer using the development tools available in web browsers:
- The Adaptive View module on Firefox
- Device Toolbar on Chrome

### Functional evaluation
These tests must be performed with smartphones on iOS and Android.
- [Test navigation and vocalization with a screen reader](../../mobile/screen-readers/)
