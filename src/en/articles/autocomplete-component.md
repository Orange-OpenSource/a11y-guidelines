---
title: "Best practices for the accessibility of an autocompletion component"
abstract: "Presentation of our approach and selected guidelines"
date: "2020-12-23"
tags:
  - web
---

# Guidelines for the accessibility of an autocompletion component

Autocomplete components are increasingly common in user interfaces, yet they often remain inaccessible.

We therefore decided to carry out an inventory in order to define several functional guidelines.

The end goal is to offer a ready-to-use component for projects.

In this article, we present our method and the guidelines adopted.

## Our method

We want to build on existing patterns wherever possible.
  
First, upstream audits are carried out on several components by an accessibility expert in order to ensure an initial selection.

The most usable components are then subjected to user tests.

At the end of the benchmark, the selected implementations are:

- <a href="https://alphagov.github.io/accessible-autocomplete/examples/" target="_blank" title="GOV UK, accessible autocomplete (new window)">GOV UK, accessible autocomplete<span class="sr-only"> (new window)</span></a>
- <a href="https://www.w3.org/TR/wai-aria-practices-1.1/#combobox" target="_blank" title="Pattern WAI ARIA 1.1, combobox (new window)"> Pattern WAI ARIA 1.1, combobox<span class="sr-only"> (new window)</span></a>

## User tests

We contacted Orange employees with disabilities.

- Documentalist, JAWS and IE11 user
- Developer, user of NVDA and Firefox ESR
- Phone advisor, ZoomText and IE11 user

JAWS 19 (screen reader) and Zoomtext (screen magnifier) ​​are the technical aids provided to blind and partially sighted employees.
 
Internet Explorer 11 and Firefox ESR are the default browsers installed on workstations.
Business applications and intranets are developed for these browsers.

The JAWS / IE and Zoomtext / IE combinations are the pairs tested as a priority during an evaluation of internal projects, as they are the most common among our targeted users.

We've created a simple, form-based scenario, each using a different version of the component:

- <abbr title="UK government website"> GOV UK <span class="sr-only">UK government website</span></abbr> accessible autocomplete</span >
- WAI ARIA 1.1 pattern, Combobox with Listbox, example 1
- WAI ARIA 1.1 pattern, Combobox with Listbox, example 2
- WAI ARIA 1.1 pattern, Combobox with Listbox, example 3

![](../images/page-test.png)

### Summary of feedbacks

**with JAWS:**

In the ARIA versions, examples 2 and 3, the user is not informed that this is an autocompletion field.

**with NVDA:**

- The user prefers the GOV UK version, because, not only, does the component indicate the minimum number of characters to enter (2 or 3 letters), but also, the number of results displayed.
- From example 1 of the ARIA 1.1 pattern, it is by accident while pointing down that he discovers proposals.
> You can completely skip the auto-completion
- In examples 2 and 3 of the ARIA 1.1 pattern, the user perceives the notion of autocompletion, but no information is given to him after entering 2 or 3 letters (whether it is the number of porposals, or the proposals themselves) .
 
**with ZoomText:**

The user does not see any significant differences between the four implementations.

### Mobile tests

In addition, mobile tests are carried out by accessibility experts on the same test pages.

**Tested versions:**

- IOS 13 + Safari + VoiceOver
- Android 6.0.1+ Chrome + Talkback

On these two environments, the conclusion is the same:

**GOV UK accessible autocomplete**
- Behavior identical to the desktop (all vocalizations are started, wether it is when entering the control or when browsing the list)
- Navigation in the list is ok, and selection of the desired item also ok

**WAI ARIA 1.1 Combobox pattern with Listbox**
- The list of proposals is not displayed systematically
- When the list is displayed, no automatic vocalization is started
- The user does not know that are the suggested proposals

## Conclusion of tests

It appears that with the assistive technologies and browers tested, the implementation of GOV UK is more robust.

The ARIA pattern relies on focus management by `aria-activedescendant`, unlike the GOV UK component which relies on the `focus()`method.

It's possible that these different implementations that impacts the behavior on mobile.

It is, in any case, a significant difference between the two components.

We also took the initiative to test the WAI ARIA 1.2 version of the combobox **still in draft**.

Here again the behavior on mobile is not the one expected, the list of proposals is not perceived.

However, for the rest the pattern used is similar to the GOV UK implementation (for example the `role="combobox"` is now positioned directly on the `input`, unlike in the ARIA version 1.1).

At this stage, taking into account user feedback and blockages on mobile, we are orienting our choice on the GOV UK component, moreover reinforced by the evolution that the ARIA 1.2 pattern seems to take.

## Guidelines

You understand, we relied heavily on the GOV UK component.

The differences with the initial component are commented directly in the guidelines.

### Combobox

**Input text with the following attributes:**

![](../images/autocompletion-combobox.png)

- `role="combobox"`
- `aria-expanded=true/false`
- `autocomplete="off"`
- `aria-autocomplete="list"`
    - The value `list` corresponds to the current behavior of the component that we have to produce, other values ​​are however possible (`inline` and `both`)
    - `inline` = automatic suggestion in the input field
    - `both` = automatic suggestion in the input field + list of choices
- `aria-control` (ID of the listbox)

**Notes **

1. The role is directly positioned on the input, unlike the ARIA 1.1 implementation. and in accordance with the GOV UK and ARIA 1.2 implementation (draft),
2. On the other hand, we favor the use of `aria-control` over` aria-owns`, which seems more suitable with regard to the description of pattern.
More information in the article <a href = "https://www.levelaccess.com/differences-aria-1-0-1-1-changes/" target="_blank" title="Differences between ARIA 1.0 and 1.1: Changes (new window)">Differences between ARIA 1.0 and 1.1: Changes <span class = "sr-only">(new window)</span></a>

### Listbox

**UL element with the following attributes:**

![](../images/autocompletion-listbox.png)

- `role="listbox"`
- `aria-label` (the value is identical to the label associated with the edit control)

**LI element with the following attributes:**

- `role="option"`
- `aria-posinset` (item position in the list)
- `aria-setsize` (total length of proposal elements list)
- `aria-selected="true "` (when an item is being selected)
- `tabindex="-1"` (the value -1 will allow management of the focus shift in a programmatic way)

**Notes**

1. As a reminder, this solution turns out to be more robust than the management of the active element by the `aria-descendant` attribute, more information:
    a. <a href="https://www.w3.org/TR/wai-aria-practices-1.2/#kbd_roving_tabindex" target="_blank" title="Focus management by tabindex (new window )">Focus management by tabindex<span class="sr-only"> (new window)</span></a>
    b. <a href="https://www.w3.org/TR/wai-aria-practices-1.2/#kbd_focus_activedescendant)" target="_blank" title="Focus management by aria-activedescendant (new window)">Focus management by aria-activedescendant <span class="sr-only"> (new window)</span></a>
2. As the list of propositions is refreshed dynamically, we preserve the `aria-posinset` and` aria-setsize` attributes, in order to provide an up-to-date list to the screen reader, regardless of the number of propositions.
This seems to be more robust in order to overcome any errors in the interpretation of screen readers.
Indeed, these could be misled in cases like this one, where the content of a list, and in particular the number of items, is dynamically updated.
For information, this implementation is not preserved in the ARIA 1.2 draft.

### Feedback messages

- A message to indicate the interactions, example from GOV UK:
> When results are available, use the up and down arrows to navigate through the proposals.
From a touch device, explore using a swipe

- A message to indicate the minimum number of characters to enter
- A message to indicate the number of results and the item being selected:
> 3 results are available. Afghanistan 1 of 3 is selected

**Notes**

We preserve the feedbacks put in place by GOV UK. They have proven to be relevant in guiding users in using the component.

**Integration**

A `DIV` element is present in the <abbr title ="Document Object Model"> DOM </abbr> as soon as the page loads:

- `role="status"`
- `aria-live="polite"`
- `aria-atomic="true"`
- `class="sr-only"`

**Notes**

`DIV` element with the `aria-live` attribute is present in the DOM as soon as the page loads.

We thus make sure that the assistive technologies correctly identify this dynamic zone during their analysis of the DOM.

At initialization, the `DIV` is empty to avoid unwanted vocalization.

The messages are dynamically integrated according to the actions of the user.

A message is returned as soon as it is included in the LIVE area.

### Interactions

- **Enter the proposals:** down arrows (input to first item)
- **Navigation between the proposals:** up and down arrows (no tabulation)
- **Exit proposals:** up arrows (first item to input)
- **Select a proposal:**
    - Space or Entrance
    - Automatically reposition the focus in the input after selection
- **Esc key:**
    - Close the `listbox` and reposition focus in the` input`
    - No item is selected
    - If a selection is already made, the focus is repositioned in the control without emptying it
- **Right / left arrow:** reposition cursor in the combobox without closing the listbox
- **TAB key from the combobox:** continue with the focus course, so the user is positioned on the next element eligible for focus (`input`,` button`, `link` etc.)
- **TAB key from the listbox:**
    - Continue the focus course
    - The combobox is filled in with the value currently selected when pressing the TAB key
- **SHIFT + TAB shortcut from the listbox:**
    - Continue the focus course in the opposite direction
    - The combobox is filled in with the value currently selected when pressing the TAB key

**Notes**

1. When the TAB key is used from the listbox, the currently selected value is automatically added to the combobox, before exiting the component.
Here we are choosing to align with the native behavior of autocompletion.
The GOV UK component does not follow this behavior.
2. The arrows allow you to reposition yourself in the combobox, again we choose to align ourselves with the native behavior (unlike this time the ARIA 1.2 pattern draft </span>)

### Resources

- <a href="https://alphagov.github.io/accessible-autocomplete/examples/" target="_blank" title="GOV UK, accessible autocomplete (new window)"> GOV UK, <span lang = " en "> accessible autocomplete </span> <span class =" sr-only "> (new window) </span> </a>
- <a href ="https://designnotes.blog.gov.uk/2017/04/20/were-building-an-autocomplete/" target = "_ blank" title = "Article We're building an autocomplete (new window ) "> Article <span lang =" en "> We're building an autocomplete </span> <span class =" sr-only "> (new window) </span> </a>
- <a href="https://www.w3.org/TR/wai-aria-practices-1.1/#combobox" target="_blank" title="WAI-ARIA Authoring Practices 1.1 Combobox (new window)"> WAI-ARIA Authoring Practices 1.1 Combobox </span> <span class = "sr-only"> (new window) </span> </a>
- <a href="https://pidila.gitlab.io/select-a11y/" target="_blank" title="Select-a11y-demo (new window)"> Select- a11y - demo </span> <span class = "sr-only"> (new window) </span> </a>
- <a href="https://www.24a11y.com/2019/select-your-poison/" target="_blank" title="Select your poison (new window)"> Select your poison </span> <span class = "sr-only"> (new window) </span> </a>
- <a href="https://www.24a11y.com/2019/select-your-poison-part-2/" target="_blank" title="Select your poison part 2 (new window)"> Select your poison part 2 </span> <span class = "sr-only"> (new window) </span> </a>
- <a href ="https://www.levelaccess.com/differences-aria-1-0-1-1-changes/" target = "_ blank" title = "Differences between ARIA 1.0 and 1.1: Changes (new window ) "> <span lang =" en "> Differences between ARIA 1.0 and 1.1: Changes </span> <span class =" sr-only "> (new window) </span> </a>