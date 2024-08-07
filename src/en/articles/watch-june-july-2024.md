---
title: "#a11y technical watch, June-July 2024"
abstract: "#a11y anthology, June-July 2024"
date: "2024-08-07"
tags:
  - veille
---
# Digital accessibility watch June-July 2024
<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
We're back to accessibility overlays: https://www.joedolson.com/2024/07/overlays-misunderstand-accessibility/. And we continue with a nice class action lawsuit (it seems impossible in France) against AccessiBe, another overlay: https://www.lflegal.com/2024/07/accessibe-class-action/.
Finally, some enthusiastic feedback on the magnificent, free and very well-attended A11y Paris conference (fr):
https://www.temesis.com/blog/a11y-paris-2024-nos-temps-forts/ and https://access42.net/a11y-paris-2024-compte-rendu/.
Still a lot of great content in these months of June and July, no vacation for the a11y!

## Accessibility in laws and standards

- Draft note, Guidance on Applying WCAG 2 to Non-Web Information and Communications Technologies (WCAG2ICT): https://www.w3.org/TR/2024/DNOTE-wcag2ict-22-20240702/
- Explanations following this draft note part 1, https://www.tpgi.com/new-advice-on-wcag-for-software-and-documents-part-1/ and part 2, https://www.tpgi.com/new-advice-on-wcag-for-software-and-documents-part-2/
- State of digital accessibility in Europe, digital trust 2024: https://www.digitaltrustindex.eu/
- European Accessibility Act, the essentials: https://axesslab.com/european-accessibility-act-eaa-what-you-need-to-know/
- W3c draft note on user requirements for collaborative tools, interesting: https://www.w3.org/TR/ctaur/
- Draft note on ethical principles of the web, it was missing: https://www.w3.org/TR/ethical-web-principles/

## Accessibility implementation strategy

- You should always name your landmarks: https://adrianroselli.com/2024/06/maybe-dont-name-that-landmark.html
- To anticipate the a11y and not just correct: https://www.deque.com/blog/transform-digital-accessibility-from-a-reactive-break-fix-to-a-proactive-shift-left/

## Testing accessibility

- Usability tests a11y, comparing AT users and those without, to read: https://makeitfable.com/article/fable-webinar-recap-scoping-your-accessibility-research-study/
- Interesting considerations on SC 1.4.11 non-text contrast, to read: https://yatil.net/blog/non-text-contrast-in-detail-ui-components
- Audits, yes, but meh: https://yatil.net/blog/the-infuriating-inefficiency-of-accessibility-audits
- Testing a11y with modern CSS, a framework: https://heydonworks.com/article/testing-html-with-modern-css/
- About a11y in Web Platform Tests: https://webkit.org/blog/15400/improving-web-accessibility-with-web-platform-tests/
- first working draft for the Accessibility Conformance Testing Rules format: https://www.w3.org/news/2024/first-public-working-draft-accessibility-conformance-testing-act-rules-format-1-1/
- A Chrome extension to test live regions: https://github.com/wizzyfx/nerdeRegionPlugIn

## Technical points

- How to use aria-label and common mistakes: https://ideance.net/blog/2501/7-mauvaises-facons-dutiliser-lattribut-aria-label-la-troisieme-va-vous-surprendre/
- An example for accessible comboboxes, the approach: https://blog.pope.tech/2024/07/01/create-an-accessible-combobox-using-aria/
- Be careful about the accessibility of "grids": https://adrianroselli.com/2024/07/be-careful-using-grid.html
- How to use rem: https://www.a11y-collective.com/blog/what-is-rem-in-css/
- WCAG 1.3.5 input purpose explanations: https://www.digitala11y.com/what-are-the-autocomplete-attributes-defined-in-1-3-5-input-purpose/
- All about aria-expanded: https://www.a11y-collective.com/blog/aria-expanded/
- Accessible PDF forms: https://www.tpgi.com/accessible-pdf-forms-online-theres-a-catch/

## Feedback

- Inaccessibility of LinkedIn carousels: https://intopia.digital/articles/navigating-the-accessibility-challenges-of-linkedin-carousels/
- Don't use web.dev: https://adrianroselli.com/2024/07/dont-use-webdev-for-accessibility-info.html
- Not always easy to have good examples of a11y: https://cerovac.com/a11y/2024/06/why-is-it-so-difficult-to-give-best-in-class-accessibility-examples-of-websites/
- How I write my alt, Adrian Roselli, practical and effective: https://adrianroselli.com/2024/05/my-approach-to-alt-text.html
- Feedback on the design pattern (ARIA du W3c) pagination, where it is reiterated that they are a proposal, not an obligation, nor a standard (in): https://adrianroselli.com/2024/07/feedback-on-a-pagination-pattern.html
- Dungeons and Dragons can inspire you for your replacement texts (in): https://ericwbailey.website/published/dungeons-and-dragons-taught-me-how-to-write-alt-text/

## Assistive technologies

- Testimony of a screen reader user: https://ideance.net/blog/2341/stephane-hagues-lexperience-du-numerique-en-tant-que-personne-aveugle/
- Navigating the web with the keyboard, how do we do it?: https://www.tempertemper.net/blog/how-to-browse-the-web-with-the-keyboard-alone
- The different types of browser zoom: https://www.oddbird.net/2024/07/09/zoomies/
- Restitution to screen readers of the hyphenation point, no ideal solution (fr): https://www.lalutineduweb.fr/ecriture-inclusive-point-hyphenation-accessibilite-lecteurs-ecran/
- It's better but not yet the aria-errormessage support: https://cerovac.com/a11y/2024/06/support-for-aria-errormessage-is-getting-better-but-still-not-there-yet/

## Mobile app, mobile web

- Tab system on mobile app: https://www.tpgi.com/mobile-tabs-part-1-native-apis/
- A paid but quality mobile design toolkit by S. Walter: https://shop.stephaniewalter.design/b/mobile-native-apps-accessibility-toolkit-for-designers
- Wcag applies to mobile, level a: https://html5accessibility.com/stuff/2024/07/08/wcag-level-a-bang-for-your-app-a11y-buck/
- Wcag applies to mobile, level aa: https://html5accessibility.com/stuff/2024/07/09/peaky-wcag-level-aa-bang-for-your-app-a11y-buck/
- Accessible tab system part 1 native apis, https://www.tpgi.com/mobile-tabs-part-1-native-apis/, part 2 React native, https://www.tpgi.com/mobile-tabs-part-2-react-native/ and part 3 Flutter, https://www.tpgi.com/mobile-tabs-part-3-flutter/
- The Appt foundation has just published 100 examples of code accessible in SwiftUI (iOS) and Jetpack Compose (Android), thanks to them! : https://appt.org/en/docs/swiftui/samples and https://appt.org/en/docs/jetpack-compose
- Apple's explanation of DynamicType implementation (text magnification), video from WWDC24: https://developer.apple.com/videos/play/wwdc2024/10073/
- Overview of some accessibility options available with SwiftUI, video from WWDC24: https://developer.apple.com/videos/play/wwdc2024/10073/
- Writing accessibility tests for Android JetPack Compose: https://www.droidcon.com/2024/06/10/accessibility-tests-in-compose-name-role-value/
- Does WCAG 2.2 apply to native apps? Answers by Steve Faulkner: https://tetralogical.com/blog/2024/07/18/WCAG2ICT/
- Reflection on the challenges to improve accessibility testing of mobile apps: https://cerovac.com/a11y/2024/07/auditing-accessibility-of-mobile-apps-2024-update/

## Ergonomics, UI & UX

- W3c a11y personas update: https://www.w3.org/WAI/news/2024-06-24/people-use-web/
- User testing and AI, still need humans, phew!: https://makeitfable.com/article/fable-webinar-recap-scoping-your-accessibility-research-study/

## Eco-design

- CR on the eco-design day of ethical designers (fr): https://access42.net/compte-rendu-journee-ecoconception-numerique-designers-ethiques/
- Video, Building a sustainable a11y program: https://info.usablenet.com/on-demand-webinar-building-a-sustainable-accessibility-program?_hsmi=312666306

## Resources

- Writing alternative texts for images at the BBC, writing guide: https://www.bbc.co.uk/gel/how-to-write-text-descriptions-alt-text
- Video of a conference on the problems of neurodivergents: https://yougotthis.io/library/understanding-the-why-around-neurodivergent-inclusive-web-design/

## Others

- Article showing the inefficiency of Google's Recaptcha2, to think about (in): https://arxiv.org/pdf/2311.10911
- Manage light/dark web modes (fr): https://www.alsacreations.com/article/lire/1927-Les-modes-d-apparence-Light-mode-et-Dark-mode.html
- Publication of the first working draft for the eBraille format: https://daisy.github.io/ebraille/published/1.0/
