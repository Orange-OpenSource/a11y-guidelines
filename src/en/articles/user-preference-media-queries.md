---
title: "Media queries and user preferences"
abstract: "User preference media features allow interfaces to adapt to preferences expressed by users. Defined by the CSS Media Queries Level 5 specification, they make it possible to adapt an interface based on user preferences such as reduced motion, increased contrast, light or dark color schemes, forced colors, reduced transparency, and reduced data usage."
titleBeforeTag: true
date: "2026-07-21"
tags:
  - web
  - advanced
---

<style>
  table + p {
    margin-top: 1rem;
  }
</style>

With **CSS Media Queries Level 5**, the **World Wide Web Consortium (W3C)** extends the capabilities of *media queries* by introducing new *media features* that allow interfaces to adapt to **user preferences**. These include preferences such as reduced motion (`prefers-reduced-motion`), light or dark color schemes (`prefers-color-scheme`), contrast (`prefers-contrast`), and forced colors (`forced-colors`).

This article covers the main user preference *media features* defined by **Media Queries Level 5**, their use cases, browser support considerations, and best practices for implementing, testing, and auditing them.

*Key takeaway:* the *media features* presented in this article are defined by the **CSS Media Queries Level 5** specification. However, browser support varies across browsers and platforms. While their use is not explicitly required by **WCAG**, **RGAA**, or **EN 301 549** (although they may contribute to meeting certain criteria), they are considered a best practice for designing interfaces that adapt to user preferences.

## Why were these media features introduced?

Early versions of *media queries* were primarily designed to adapt an interface to the characteristics of the user's device, such as its screen width, orientation, or resolution.

**CSS Media Queries Level 5** expands this approach. In addition to device characteristics, media queries can now take **user preferences** into account, such as reduced motion, light or dark color schemes, contrast, or forced colors. These preferences may be defined by the browser, inherited from the operating system settings, or, in some cases, determined automatically by the user agent.

This evolution reflects a broader shift toward more adaptive interfaces. Rather than presenting the same interface to every user, web applications can adjust certain aspects of their presentation to better align with the user's display preferences.

## The main user preference *media features*

The main *media features* defined by **CSS Media Queries Level 5** are summarized in the table below.

| *Media feature*                | Description                                                  |
| ------------------------------ | ------------------------------------------------------------ |
| `prefers-reduced-motion`       | Indicates a preference for reduced motion.                   |
| `prefers-contrast`             | Indicates a preference for a particular contrast level.      |
| `prefers-color-scheme`         | Indicates a preference for a light or dark color scheme.     |
| `forced-colors`                | Indicates whether forced colors mode is active.              |
| `prefers-reduced-transparency` | Indicates a preference for reduced transparency.             |
| `prefers-reduced-data`         | Indicates a preference for reduced data usage.               |

The following sections describe how each of these *media features* works, the values defined by the specification, their main use cases, and the key implementation considerations. Some of these values are not supported by all browsers.

*Note:* this article is based on the current version of the **CSS Media Queries Level 5** specification. Some older documentation or articles may refer to values that are no longer part of the current specification, such as `no-preference` for `prefers-color-scheme`.

## `prefers-reduced-motion`

The `prefers-reduced-motion` *media feature* indicates whether the user has expressed a preference for reducing animations and motion effects. It allows these effects to be adapted when such a preference is expressed.

### Values defined by the specification

The specification defines the following values:
- `reduce`: the user has expressed a preference for reducing animations and motion effects;
- `no-preference`: no particular preference has been expressed.

### Example

```css
@media (prefers-reduced-motion: reduce) {
  .animated-element {
    animation: none;
  }
}
```

### Use cases

This *media feature* can be used when an interface includes animations, transitions, parallax effects, or other types of motion that can be reduced.

### Best practices

Reducing motion does not necessarily mean removing every animation. Animations that contribute to understanding the interface may be preserved, while purely decorative animations can be reduced, simplified, or removed.

## `prefers-contrast`

The `prefers-contrast` *media feature* indicates the user's preference regarding the contrast level of the interface. It allows the presentation of the interface to be adapted accordingly.

### Values defined by the specification

The specification defines the following values:

- `no-preference`: the user has not expressed any particular preference;
- `more`: the user has expressed a preference for a higher level of contrast;
- `less`: the user has expressed a preference for a lower level of contrast;
- `custom`: the user has defined a custom contrast mode.

### Example

```css
@media (prefers-contrast: more) {
  body {
    background: white;
    color: black;
  }
}
```

### Use cases

This *media feature* can be used when an interface needs to adjust the contrast of its colors, emphasize or de-emphasize certain graphical elements, or adapt its presentation based on the user's expressed preference.

### Best practices

A contrast preference does not simply mean increasing or decreasing the contrast of every color. Adaptations should primarily improve the perceptibility of content and interactive elements while maintaining a consistent and readable interface.

## `prefers-color-scheme`

The `prefers-color-scheme` *media feature* indicates the user's preferred color scheme for the interface. It allows the interface to adapt its presentation accordingly.

### Values defined by the specification

The specification defines the following values:

- `light`: the user has expressed a preference for a light color scheme or has not expressed any particular preference;
- `dark`: the user has expressed a preference for a dark color scheme.

### Example

```css
@media (prefers-color-scheme: dark) {
  body {
    background-color: #121212;
    color: #f5f5f5;
  }
}
```

### Use cases

This *media feature* can be used when an interface provides multiple color schemes or when its appearance should automatically adapt to the user's preferred color scheme.

### Best practices

Designing a dark theme is not simply a matter of mechanically inverting the colors of a light theme. Text, icons, and interactive elements should be carefully designed to maintain sufficient contrast and good readability. Both themes should be tested to ensure that contrast, interactive states, and readability remain satisfactory in each mode.

## `forced-colors`

The `forced-colors` *media feature* indicates whether a forced colors mode is currently active in the user agent. In this mode, some colors defined by the page may be replaced with system colors to respect the user's display preferences.

### Values defined by the specification

The specification defines the following values:

- `active`: a forced colors mode is active;
- `none`: no forced colors mode is active.

### Example

```css
@media (forced-colors: active) {
  .custom-button {
    border: 1px solid ButtonText;
  }
}
```

### Use cases

This *media feature* can be used when custom components need to adapt to forced colors mode, use system colors, or adjust their presentation to remain compatible with this mode.

### Best practices

When specific adjustments are required, the `forced-color-adjust` property allows authors to control whether an element should be adapted when forced colors mode is active. Its `none` value prevents the user agent from replacing the colors of the affected element. It should be used sparingly and reserved for situations where this behavior is fully justified.

## `prefers-reduced-transparency`

The `prefers-reduced-transparency` *media feature* indicates whether the user has expressed a preference for reduced transparency. It allows certain visual effects to be adapted when this preference is expressed.

### Values defined by the specification

The specification defines the following values:

- `reduce`: the user has expressed a preference for reduced transparency;
- `no-preference`: the user has not expressed any particular preference.

### Example

```css
@media (prefers-reduced-transparency: reduce) {
  .overlay {
    opacity: 1;
    backdrop-filter: none;
  }
}
```

### Use cases

This *media feature* can be used when an interface includes transparency effects, blurred backgrounds, or other translucent elements that can be simplified.

### Best practices

When a preference for reduced transparency is expressed, visual effects based on transparency can be replaced with opaque colors to improve the readability of the interface.

## `prefers-reduced-data`

The `prefers-reduced-data` *media feature* indicates whether the user has expressed a preference for reducing data usage. It allows the loading of certain resources to be adapted when this preference is expressed.

### Values defined by the specification

The specification defines the following values:

- `reduce`: the user has expressed a preference for reduced data usage;
- `no-preference`: the user has not expressed any particular preference.

### Example

```css
@media (prefers-reduced-data: reduce) {
  .hero-video {
    display: none;
  }
}
```

### Use cases

This *media feature* can be used when large resources, such as videos or animations, can be replaced with lighter alternatives.

### Best practices

Reducing data usage should not result in essential content or critical functionality being removed. Adaptations should primarily target resources whose absence does not affect the understanding or use of the interface.

## Implementation support

The *media features* defined by **CSS Media Queries Level 5** do not all benefit from the same level of support across browsers and operating systems.

Some, such as `prefers-reduced-motion`, `prefers-color-scheme`, and `forced-colors`, are now widely implemented. Others, such as `prefers-reduced-transparency`, `prefers-reduced-data`, or some values of `prefers-contrast`, have more limited support depending on the browser or platform.

Support for a *media feature* in a browser does not necessarily mean that the corresponding preference can be expressed on every operating system. Some preferences depend on the availability of a corresponding system setting or on support provided by the user agent.

Before relying on a *media feature* in production, it is therefore recommended to verify both its level of support and the contexts in which it is actually available.

The following resources can be used to track the implementation status of these *media features*:

- the MDN documentation (Browser compatibility) for each *media feature*;
- the **CSS Media Queries Level 5** specification;
- compatibility data from **Can I Use**, when available.

*Note:* a *media feature* may be recognized by a browser even if the corresponding preference cannot easily be modified on every platform. When testing, it is therefore important to verify both support for the *media feature* and the ability to enable the corresponding preference on the operating system being used.

The following information reflects the general implementation status at the time of writing.

| *Media feature*                | General level of support                                        |
| ------------------------------ | --------------------------------------------------------------- |
| `prefers-reduced-motion`       | Widely supported                                                |
| `prefers-color-scheme`         | Widely supported                                                |
| `forced-colors`                | Well supported, but primarily relevant on certain platforms     |
| `prefers-contrast`             | Support varies depending on the browser and supported values    |
| `prefers-reduced-transparency` | Limited support                                                 |
| `prefers-reduced-data`         | Limited support                                                 |

These indications are provided for informational purposes only. They may evolve as browsers, operating systems, and runtime environments continue to evolve.

## Detecting user preferences in JavaScript

User preferences are primarily intended to be used in CSS stylesheets through *media queries*. In some cases, however, it may also be necessary to adapt the behavior of an interface using JavaScript.

`window.matchMedia()` allows the same *media queries* used in CSS to be evaluated and enables applications to react when their result changes.

```javascript
const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

if (mediaQuery.matches) {
  disableAnimations();
}
```

In the longer term, the **User Preferences API** aims to provide richer access to user preferences from JavaScript. However, it remains experimental and is not currently a practical alternative to `matchMedia()`.

## User Preferences API

The **User Preferences API** is an experimental API that aims to provide richer access to user preferences from JavaScript.

Whereas CSS *media features* are primarily intended to adapt the presentation of an interface, this API provides programmatic access to user preferences through the `navigator.preferences` object. In particular, it allows applications to observe preference changes while the user is interacting with the page.

At the time of writing, the API remains experimental and has limited browser support. For most use cases, `window.matchMedia()` remains the most widely supported solution.

## Combining multiple user preferences

User preference *media features* are not mutually exclusive. A user may express several preferences at the same time, such as a dark color scheme combined with reduced motion or a preference for higher contrast.

Like other CSS *media features*, they can be combined within the same *media query* to adapt the interface to multiple user preferences.

```css
@media (prefers-color-scheme: dark) and (prefers-contrast: more) {
  /* Specific adaptations */
}
```

In practice, it is generally unnecessary to design a complete variant of the interface for every possible combination. Instead, it is preferable to implement targeted, independent adaptations that combine naturally when multiple preferences are detected.

## Best practices

### 1. Design a functional interface by default

User preference *media features* should not be a prerequisite for an interface to function correctly. They allow the presentation or certain behaviors to be adapted, but the content should remain understandable and usable even when no particular preference is expressed.

### 2. Adapt only what is necessary

The goal is not to create multiple versions of the same interface, but to adapt only the elements affected by the detected preference. Adaptations should remain targeted and proportionate.

### 3. Respect user preferences

Detected preferences reflect either an explicit user choice or a preference determined automatically by the user's runtime environment. When available, they should be taken into account during the design of the interface.

### 4. Test across multiple platforms

Support varies across browsers, operating systems, and platforms. A working implementation in one environment does not guarantee identical behavior elsewhere. It is therefore recommended to test these features across multiple browser and operating system combinations.

### 5. Combine CSS and JavaScript judiciously

CSS *media features* cover most interface adaptation needs. When behavioral adaptations are required, `window.matchMedia()` makes it possible to query the same preferences from JavaScript.

## Testing

### 1. Check the system preferences

Before testing a *media feature*, it is recommended to verify that the corresponding preference is enabled in the operating system or browser. Depending on the platform, these preferences may include reduced motion, light or dark color schemes, contrast, or forced colors.

### 2. Manual inspection

Developer tools make it possible to emulate several user preferences without changing the operating system settings. This is particularly useful for quickly verifying that a *media feature* is correctly taken into account.

In Chromium-based browsers, you can emulate:
- `prefers-reduced-motion`;
- `prefers-color-scheme`;
- `prefers-contrast`;
- `forced-colors`.

### 3. Verify with `matchMedia()`

From the browser console, `window.matchMedia()` can be used to verify the value returned by a *media feature*.

```javascript
window.matchMedia('(prefers-reduced-motion: reduce)').matches
```

This expression returns `true` when the preference is detected, and `false` otherwise.

### 4. Use the `prefers-scan` bookmarklet

During an accessibility audit or code review, it is not always easy to manually identify every user preference *media query* used by an application. This process can be time-consuming, especially when multiple style sheets are loaded.

The **Prefers Scan** bookmarklet automates this task by analyzing the page's accessible style sheets.

It can:
- list the *media features* in use;
- identify which user preferences are supported;
- quickly highlight missing preferences;
- facilitate the preparation of a manual accessibility audit.

**Prefers Scan** identifies the presence of user preference *media features* in style sheets, but it does not assess the relevance or quality of the adaptations they implement. Manual verification therefore remains essential.

[The source code, installation instructions, and documentation are available on the Prefers Scan GitHub repository.](https://github.com/MewenLeHo/prefers-scan)

## Common mistakes found during accessibility audits

### Ignoring `prefers-reduced-motion`

Modern interfaces often use animations to support transitions, draw attention, or enhance the user experience. Ignoring `prefers-reduced-motion` means that these animations remain enabled despite an explicit user preference, which may cause discomfort or motion sensitivity issues.

### Assuming that dark mode is enough

Supporting `prefers-color-scheme` alone does not guarantee that a dark theme is accessible. Insufficient contrast, poorly chosen colors, or difficult-to-distinguish interactive states can negatively affect readability and usability.

### Disabling `forced-colors`

Disabling forced colors with `forced-color-adjust: none` prevents users from benefiting from the adaptations provided by the browser. This property should only be used in exceptional cases where its consequences are fully understood and carefully considered.

### Making only cosmetic adjustments

Adaptations should modify the behavior or presentation of the elements actually affected by the detected preference. Simply changing a few colors or spacing values without addressing the user's expressed preference significantly reduces the value of these *media features*.

### Not testing

A *media feature* may be recognized by the browser while still being implemented incorrectly or behaving unexpectedly in practice. It is therefore essential to verify the actual behavior of the interface on the relevant platforms.

## Conclusion

User preference *media features* provide a powerful way to make interfaces more adaptive and more accessible.

They make it possible to accommodate concrete user needs, such as reduced motion, increased contrast, color scheme preferences, reduced transparency, or reduced data usage.

Their implementation is generally straightforward, yet their impact on user comfort can be significant.

When implemented thoughtfully, these adaptations can significantly improve the experience of many users.

User preference *media features* also illustrate an important evolution of the Web. Rather than adapting only to the technical characteristics of a device, interfaces can now respond to preferences expressed by their users. As a result, they contribute to creating experiences that are more personalized, more comfortable, and, in many cases, more accessible.

## References

<ul>
  <li><a href="https://www.w3.org/TR/mediaqueries-5/">W3C – Media Queries Level 5</a></li>
  <li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries_for_accessibility">MDN – Using media queries for accessibility</a></li>
  <li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion">MDN – prefers-reduced-motion</a></li>
  <li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-contrast">MDN – prefers-contrast</a></li>
  <li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme">MDN – prefers-color-scheme</a></li>
  <li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/@media/forced-colors">MDN – forced-colors</a></li>
  <li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-transparency">MDN – prefers-reduced-transparency</a></li>
  <li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-data">MDN – prefers-reduced-data</a></li>
  <li><a href="https://developer.mozilla.org/en-US/docs/Web/API/User_Preferences_API">MDN – User Preferences API</a></li>
</ul>
