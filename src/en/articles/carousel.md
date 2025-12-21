---
title: "Best practices for carousels"
abstract: "Carousels: what are they and how to implement them properly?"
titleBeforeTag: true
date: "2026-01-01"
tags:
  - web
  - intermediate
---

## Why
The carousel is a dynamic communication tool whose usefulness clearly does not match its popularity (<a href="https://erikrunyon.com/2013/01/carousel-interaction-stats/">Carousel Interaction Stats</a>).
If, despite everything, you want to develop one, here are some good practices to put in place to make it usable.

### Compliance rules
To be compliant, the carousel must satisfy **at least one** of the following rules:

- The duration of motion must be less than or equal to 5 seconds.
- The user must be able to stop and restart the motion.
- The user must be able to show and hide the moving content.
- The user must be able to view all information without motion.

### Best practices
To go a little further, here are some additional best practices:

- **It is better to position the carousel stop button just before it (in the code), so that the user can reach it quickly.**
- Content must be usable by keyboard: <kbd>Space</kbd> key to stop, <kbd>Ctrl</kbd> + <kbd>Left</kbd>/<kbd>Right</kbd> arrow to navigate between slides, etc. <a href="https://www.w3.org/WAI/ARIA/apg/patterns/carousel/">The full list of keyboard interactions is detailed in the ARIA carousel design pattern</a>.
- It is preferable to stop rotation on focus and restart it when focus is lost.
- Displaying the current position via dot navigation helps the user orient themselves. Finally, it is preferable not to include more than three panels in the carousel.

## How?
To make all this accessible, we can rely on the following attributes:

- `role="tablist"` should be applied to the element wrapping the pagination tabs.
- `role="tab"` should be applied to each pagination tab.
- `tabindex="0"` should be applied to the selected pagination tab; the other tabs should have the attribute `tabindex="-1"`.
- `tabindex="-1"` removes the element from the tab order: it will not be reachable via keyboard navigation.
- `aria-selected="true"` should be applied to the selected pagination tab; the other tabs should have the attribute `aria-selected="false"`.
- `aria-hidden="false"` on the displayed panel.
- `aria-hidden="true"` on the other panels.
- `aria-roledescription` allows indicating the type of content.
- `aria-label` can be used to add information about the panels (current panel number and the total number of panels).
- `aria-controls` links the buttons to the content.
- `aria-selected` to indicate the current position to screen readers on the dot navigation buttons.


### HTML example
Below is an example of an accessible carousel in HTML format:

```html
<button type="button" class="btn btn-icon btn-outline-secondary carousel-control-play-pause pause mt-1" data-bs-target="#carouselExamplePause" data-bs-play-text="Play Carousel" data-bs-pause-text="Pause Carousel" title="Pause Carousel">
  <span class="visually-hidden">Pause Carousel</span>
</button>
<div id="carouselExamplePause" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExamplePause" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExamplePause" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExamplePause" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="..." class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExamplePause" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExamplePause" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
```

### Webography

- <a href="https://www.w3.org/WAI/ARIA/apg/patterns/carousel/">Carousel (Slide Show or Image Rotator) Pattern</a>
- <a href="https://boosted.orange.com/docs/5.3/components/carousel/">Boosted documentation about Carousel</a>
- <a href="https://erikrunyon.com/2013/01/carousel-interaction-stats/">Carousel Interaction Stats</a>
- <a href="https://www.w3.org/WAI/tutorials/carousels/">W3C - Carousels Tutorial</a>
- <a lang="fr" hreflang="fr" href="https://www.adilade.fr/blog/carrousel-accessible-responsive-vanillajs/">Un carrousel accessible et responsive en Vanilla JS</a>
- <a lang="fr" hreflang="fr" href="https://www.accede-web.com/notices/interface-riche/carrousels/">AcceDe Web - carrousels</a>
