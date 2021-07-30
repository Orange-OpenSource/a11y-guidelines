---
title: "Android accessibility testing"
abstract: "Orange group requires its Web sites to be compliant with the level AA of the Web Content Accessibility Guidelines"
---

# Android accessibility testing

Orange group requires its Web sites to be compliant with the level AA of the Web Content Accessibility Guidelines (<abbr>WCAG</abbr>) 2.1. The equivalent for native mobile applications is a transposition of these criteria and compliance with [Android platform recommendations](https://developer.android.com/training/accessibility/testing).

We recommend 4 steps to test accessibility with the objective to detect and fix accessibility errors as soon as possible during the project lifecycle. Whenever possible, it is useful to bring in an accessibility expert to get feedbak all along the project, as early as the design phase, as it could be expensive to fix accessibility issues identified during the test phase only.

- The first step is to check accessibility during the design phase, on interface models or prototypes.  Android app created for Orange must also be compliant with the [Orange Design Guidelines (“Android”, “Digital Colour Palettes”, “Accessibility”)](https://design.orange.com/fr/guidelines/) that detail the color usage, the type system, etc.

- The second step is to test the code during the development phase, by the developers. This step consists of performing automated tests or using the Lint tool from Android Studio.

- The third step is to scan the application with accessibility analysis tools.

- The last step is to carry out extensive manual tests, using the app as people with different disabilities or limitations would use it.

Ideally, the tests should be performed on Android mobiles without a custom OS like the Pixel. They must then be carried out on the mobiles with custom OS most used by the application.

To test accessibility on Android, it is useful to download from [Google Play](https://play.google.com/store/apps?hl=fr), [Android Accessibility Suite](https://play.google.com/store/apps/details?id=com.google.android.marvin.talkback) and [Accessibility Scanner](https://play.google.com/store/apps/details?id=com.google.android.apps.accessibility.auditor). The tools can be combined to check more criteria at the same time.
