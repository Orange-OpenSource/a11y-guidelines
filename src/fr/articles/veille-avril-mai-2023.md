---
title: "Veille #A11y Avril-Mai 2023"
abstract: "Florilège de ressources en #a11y, Avril-Mai 2023"
date: "2023-06-05"
tags:
  - veille
---

# Veille accessibilité numérique Avril-Mai 2023

On commence par un joli récap sur les lois européennes d'a11y (en) https://uxplanet.org/understanding-eus-digital-accessibility-rules-ac60e2914b84 car on avance doucement mais surement... Un récap sur les lois Françaises https://docs.google.com/spreadsheets/d/12NcJpScAppfIfPKlOwuZzH8Zts_hZGhjdQI9i74McQw/edit#gid=0 et un exemple, l'Italie 
https://www.temesis.com/blog/italie-loi-stanca/.
Ensuite, un article important sur (enfin) une position claire du European Disability Forum (EDF) et International Association of Accessibility Professionals (IAAP) sur les surcouches d'a11y qui ne permettent pas de rendre sites ou applis accessibles (en) https://www.edf-feph.org/accessibility-overlays-dont-guarantee-compliance-with-european-legislation/. Surtout qu'Adrian Roselli, expert a11y bien connu, est poursuivi par un des vendeurs de ces surcouches (en) 
https://adrianroselli.com/2023/05/audioeye-is-suing-me.html.

On note aussi le passage de WCAG2.2 en Candidate  recommandation, dernière étape avant la sortie officielle toujours prévue pour septembre (en) https://www.linkedin.com/pulse/wcag-22-updated-candidate-recommendation-take-2-bradley-montgomery/.

## L'accessibilité dans les lois et les normes 

- Publication officielle par le W3c de Accessible Rich Internet Applications (WAI-ARIA) 1.2 (en) <https://www.w3.org/blog/news/archives/9942>.

## Retours d’expérience et accessibilité

- Reconsidérer nos interventions a11y suite à la dernière Webaim Million (en)&nbsp;: https://yatil.net/blog/accessibility-action
- Mettre en place certains critères WCAG AAA sur un site (en)&nbsp;: https://tetralogical.com/blog/2023/04/21/meeting-wcag-level-aaa/

## Stratégie de mise en accessibilité

- Accessibilité pour la dyslexie (en)&nbsp;: https://uxdesign.cc/software-accessibility-for-users-with-dyslexia-a506698af4d6
- Un "CanIUse?" mais pour ARIA au W3c (en)&nbsp;: https://bocoup.com/blog/can-i-use-but-for-aria
- Les bases de la dataviz visuellement accessible (en)&nbsp;: https://medium.com/plaid-design/visually-accessible-data-visualization-ff884121479b

## Tester l’accessibilité

- Les succès/échecs par l'exemple au critère 1.4.13 contraste de contenu non-textuel, à lire (en)&nbsp;: https://www.tpgi.com/when-i-get-that-low-contrast-feeling-i-need-non-textual-healing/
- Recruter des testeurs pour l'a11y (en)&nbsp;: https://www.accessibility.com/blog/recruiting-accessibility-testers-with-disabilities
- Outil bien pratique dans GitHub pour signaler des oublis de alternatives d'images (en)&nbsp;: https://github.com/marketplace/actions/accessibility-alt-text-bot

## Points techniques en accessibilité

- Les composants purement CSS sont (souvent) inaccessibles (en)&nbsp;: https://adrianroselli.com/2023/03/css-only-widgets-are-inaccessible.html
- Les alternatives d'images par l'exemple (en)&nbsp;: https://blog.pope.tech/2023/03/31/alternative-text-in-the-wild-5-alternative-text-examples/
- Le nouveau type="search" (en)&nbsp;: https://www.scottohara.me/blog/2023/03/24/search-element.htm
- Encore sur ce nouvel type="search" (en)&nbsp;: https://alvaromontoro.com/blog/68033/new-html-element-search
- Bannière de gestion des cookies et a11y (en)&nbsp;: https://www.smashingmagazine.com/2023/04/potentially-dangerous-non-accessibility-cookie-notices/
- Pas de role=presentation/none sur des éléments focusables (en)&nbsp;: https://html5accessibility.com/stuff/2023/05/02/short-note-why-isnt-rolepresentation-none-allowed-on-focusable-elements/
- Utiliser le mot menu avec précaution (en)&nbsp;: https://adrianroselli.com/2023/05/be-careful-using-menu.html
- La taille des éléments et a11y, tour d'horizon (en)&nbsp;: https://www.smashingmagazine.com/2023/04/accessible-tap-target-sizes-rage-taps-clicks/
- Les problèmes d'a11y avec des fieldset imbriqués(en)&nbsp;: https://adamsilver.io/blog/the-problem-with-nested-fieldsets-and-how-to-avoid-them/
- Les modales temporisées et a11y (en)&nbsp;: https://www.digitala11y.com/addressing-timeout-modals-navigating-the-nuances-for-inclusive-web-design/

## Retour d'expérience

- Formulaire avec des champs en lecture seule (en)&nbsp;: https://equalentry.com/accessibility-lessons-context-sensitive-text-alternatives/
- Focus visible et WCAG2.2, réflexions (en)&nbsp;: https://yatil.net/blog/wcag22-visible-focus

## Aides techniques

- Ne pas changer la prononciation par default des AT (en)&nbsp;: https://adrianroselli.com/2023/04/dont-override-screen-reader-pronunciation.html
- Une étude sur comment les utilisateurs de lecteurs d'écran utilisent les mobiles (en)&nbsp;: https://www.nngroup.com/articles/screen-reader-type-control/

## Appli mobile, web mobile

- Tester React native dans aXe DevTools mobile (en)&nbsp;: https://www.deque.com/blog/react-native-testing-and-linting-in-axe-devtools-mobile/
- Mise en a11y avec iOS (en)&nbsp;: https://equalentry.com/creating-accessible-ios-apps-an-action-plan/
- Tests d'a11y avec Espresso (en)&nbsp;: https://dev.to/steady5063/writing-accessibility-tests-with-espresso-53m9?ref=accessible-mobile-apps-weekly.ghost.io
- Bonnes pratiques du dev accessible sous Android (en)&nbsp;: https://github.com/cvs-health/android-view-accessibility-techniques?ref=accessible-mobile-apps-weekly.ghost.io
- Nouveautés iOS en matière d'a11y (en)&nbsp;: https://developer.apple.com/documentation/Updates/Accessibility

## Ergonomie, UI & UX

- Des ressources pour UX/UI&nbsp;: https://ideance.net/blog/467/accessibilite-ux-ui-design/
- Tester avec des utilisateurs de lecteur d'écran (en)&nbsp;: https://www.nngroup.com/articles/mobile-accessibility-research/
- Bonnes pratiques pour les messages d'erreur (en)&nbsp;: https://www.nngroup.com/articles/error-message-guidelines/

## Ressources

- Pour développer des chatbots accessibles (en)&nbsp;: https://mitre.github.io/chatbot-accessibility-playbook/docs/4_3.html
- Hover, Focus et a11y , tout savoir (en)&nbsp;: https://www.tpgi.com/a-whole-lot-of-bovver-over-hover/
- Tout sur fieldset/legend et a11y (en)&nbsp;: https://www.tpgi.com/fieldsets-legends-and-screen-readers-again/
- Des ressources A11y de qualité&nbsp;: https://ideance.net/fr/ressources-accessibilite-numerique/
- Boite à outils a11y des PDF&nbsp;: https://accessibilite.public.lu/fr/news/2023-04-05-RAPDF.html
- Comment "bien" parler d'accessibilité (en)&nbsp;: https://uxpajournal.org/we-need-to-talk-about-how-we-talk-about-accessibility/
- Faire des PDF accessibles (en)&nbsp;: https://mn.gov/mnit/media/blog/?id=38-577889
- Ressources a11y du Washington Post (en)&nbsp;: https://build.washingtonpost.com/resources/accessibility
- Les méthodes de transcription automatique (en)&nbsp;: https://www.maxability.co.in/2023/05/13/automatic-captions-an-overview/
- Garde-fous pour un dev accessible (en)&nbsp;: https://netzartist.de/blog/guardrails-for-better-accessibility-support-in-frontend/

## Autres

- Jeux pour tester vos connaissances en a11y (en)&nbsp;: https://trivia11y.com/
- Plus besoin de tableau dans les Emails (en)&nbsp;: https://fullystacked.net/posts/modern-html-email/
- Tout sur les chiffres afin de les rendre accessible, une anthologie (en)&nbsp;: https://accessiblenumbers.com/