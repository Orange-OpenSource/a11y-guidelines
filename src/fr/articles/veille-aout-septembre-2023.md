---
title: "Veille #A11y Août-Septembre 2023"
abstract: "Florilège de ressources en #a11y, Août-Septembre 2023"
date: "2023-10-05"
tags:
  - veille
---

# Veille accessibilité numérique Août-Septembre 2023

Enfin, sortie officielle comme recommandation des WCAG 2.2, https://www.w3.org/TR/2023/REC-WCAG22-20231005/, on les attendait depuis longtemps, bravo le W3c/Wai. Et maitenant, où en sont les WCAG 3.0, (en) https://www.tpgi.com/wcag-3-0-further-on-up-the-road/.

Une petit tour dans les guidelines mobile inspirantes pour que vous vous y mettiez :
- BBC (GB) : https://www.bbc.co.uk/accessibility/forproducts/guides/mobile/
- Appt (PAYS-BAS) : https://appt.org/en/guidelines/beginnersguide-accessibility-testing
- Spotify : https://developer.spotify.com/documentation/accessibility

Et le w3c se mat au développement durable avec ce rapport (en) https://w3c.github.io/sustyweb/.

Donc, fin d'été pas si calme !


## L'accessibilité dans les lois et les normes 

- Nouvel editor's draft pour l'application des WCAG sur tout ce qui n'est pas web (en)&nbsp;: https://wcag2ict.netlify.app/
- Le EAA (European Accessibility Act) ses implications et même en Angleterre (en)&nbsp;: https://www.craigabbott.co.uk/blog/european-accessibility-act-what-you-need-to-know/
- Le cas des USA en ce qui concerne l'obligation d'accessibilité (ADA, American Disability Act) pour des segments à risque, bientôt en Europe ? (en)&nbsp;: https://karlgroves.com/web-accessibility-in-high-risk-segments/
- L'indicateur de prise de focus avec WCAG 2.2, tout savoir sur ce nouveau critère AAA (en)&nbsp;: https://www.sarasoueidan.com/blog/focus-indicators/
- L'état veut 100% d'a11y pour ses sites, on attend la &suite... : https://www.numerique.gouv.fr/espace-presse/accessibilite-numerique-a-100-percent-le-gouvernement-passe-a-la-vitesse-superieure-et-presente-une-ordonnance-visant-a-controler-laccessibilite-des-sites-des-administrations-publiques-a-compter-2024/
- Comment satisfaire aux critères 4.1.3 Status messages et 1.4.13 Content on hover or focus (en)&nbsp;: https://mn.gov/mnit/media/blog/?id=38-584530#/detail/appId/1/id/584530

## Stratégie de mise en accessibilité

- Simplifier son contenu textuel grâce à l'IA, à tester : https://www.01net.com/actualites/handicap-comment-produire-des-textes-simples-et-intelligiblesgrace-a-l-ia-1942964.html
- Comment faire des tableaux html a11y, pour bien commencer (en)&nbsp;: https://blog.pope.tech/2023/08/22/beginners-guide-to-accessible-tables/
- Un panier de e-commerce, vidéo (en)&nbsp;: https://www.nicchan.me/blog/talk-developing-an-accessible-add-to-cart-flow/
- Les différents types d'erreur multiple a11y et comment les corriger (en)&nbsp;: https://www.tpgi.com/managing-multiple-wcag-failures/
- Super vidéo Briefs toujours aussi drôle sur les surcouches d'a11y et pourquoi c'est mal (en)&nbsp;: https://briefs.video/videos/what-are-accessibility-overlays/
- Construire une vrai équipe d'a11y (en)&nbsp;: https://www.deque.com/blog/steps-build-core-accessibility-team/
- Mais l'a11y, ça coute combien (en)&nbsp;: https://www.digitala11y.com/cost-of-implementing-digital-accessibility-at-the-enterprise-level/

## Tester l’accessibilité

- Excellente idée pour tester le nouveau critère WCAG 2.2 target size (en)&nbsp;: https://html5accessibility.com/stuff/2023/08/28/quick-and-very-dirty-target-size-checker/
- Les nouveaux critères WCAG 2.2 (en)&nbsp;: https://www.tpgi.com/new-success-criteria-in-wcag22
- Vidéo sur tester les critères WCAG 2.2 (en)&nbsp;: WCAG 2.2 (en)&nbsp;: https://www.youtube.com/watch?v=XcSSTBaegi8

## Points techniques

- Du JS pour étendre la zone de click d'une carte, bien (en)&nbsp;: https://www.nomensa.com/blog/how-build-accessible-cards-block-links/
- Aria-haspopup support des différentes valeurs possibles dans les AT (en)&nbsp;: https://www.matuzo.at/blog/2023/aria-haspopup/
- Techniques pour lier les erreurs de formulaire aux champs (en)&nbsp;: https://marcus.io/blog/contextual-form-errors-aria
- Du texte accessible sur une image, tout ce qu'il faut savoir avec pleins d'exemples (en)&nbsp;: https://www.smashingmagazine.com/2023/08/designing-accessible-text-over-images-part1/ et https://www.smashingmagazine.com/2023/08/designing-accessible-text-over-images-part2/
- Où en est-on de l'élément dialog ? teaser : pas prêt au niveau a11y (en)&nbsp;: https://gomakethings.com/an-intro-to-the-dialog-element/
- Gestion du focus lors de la disparition de contenu, à lire (en)&nbsp;: https://adrianroselli.com/2023/08/where-to-put-focus-when-deleting-a-thing.html
- Étendre la zone de click/touch (en)&nbsp;: https://www.stubbornella.org/2023/09/17/expanding-your-touch-targets/
- Au delà des basiques de l'a11y des formulaires (en)&nbsp;: https://blog.pope.tech/2023/09/26/form-accessibility-and-usability-beyond-the-basics/
- Quatre articles sur amélioration progressive et validation de formulaire avec de l'a11y dedans (en)&nbsp;:
  - https://cloudfour.com/thinks/progressively-enhanced-form-validation-part-1-html-and-css/
  - https://cloudfour.com/thinks/progressively-enhanced-form-validation-part-2-layering-in-javascript/
  - https://cloudfour.com/thinks/progressively-enhanced-form-validation-part-3-validating-a-checkbox-group/
  - https://cloudfour.com/thinks/progressively-enhanced-form-validation-part-4-custom-validation-messages/
- Implémenter l'a11y dans React, premiers pas (en)&nbsp;: https://medium.com/@kanishbharathi4/getting-started-with-building-accessible-react-components-68b83f0c0585
- Le critère 4.1.1 Parsing est absent de WCAG 2.2 et obsolete dans WCAG 2.1 et 2.0 (en)&nbsp;: https://www.w3.org/WAI/standards-guidelines/wcag/faq/#Sept2023

## Retour d'expérience

- Quand on est le seul spécialiste d'a11y, bons conseils (en)&nbsp;: https://tetralogical.com/blog/2023/06/05/the-only-accessibility-specialist-in-the-room/
- Le reflow bien fait est important pour les utilisateur de loupe logicielle (en)&nbsp;: https://www.tpgi.com/how-does-reflowing-content-affect-people-with-screen-magnification/
- Progresser plutôt que vouloir la perfection, interview captivant d'une experte a11y M. Evans (en)&nbsp;: https://www.levelaccess.com/blog/progress-over-perfection-advice-for-sustainable-digital-accessibility/
- Démystifier les croyances sur l'a11y, quelques évidences (en)&nbsp;: https://smart-interface-design-patterns.com/articles/accessibility-strong-case/
- Un manque de culture en a11y peut tout tuer (en)&nbsp;: https://yatil.net/blog/misconceptions-can-kill-accessibility-momentum

## Aides techniques

- Un pense-bête pour organiser des tests utilisateurs avec déficients visuels utilisateurs de lecteurs d'écran (en)&nbsp;: https://www.smashingmagazine.com/2023/06/testing-sites-apps-blind-users-cheat-sheet/
- Support des API vidéo player des navigateurs dans les AT (en)&nbsp;: https://adrianroselli.com/2023/09/browser-video-players-review.html

## Appli mobile, web mobile

- Options iOS17 pour déficient auditif et visuel (en)&nbsp;: https://www.applevis.com/blog/whats-new-ios-17-accessibility-blind-deaf-blind-users
- Audits d'a11y dans XCode15 (en)&nbsp;: https://www.polpiella.dev/xcode-15-automated-accessibility-audits?ref=accessible-mobile-apps-weekly.ghost.io
- Axe dev tool un nouvel outil de tests mobile (en)&nbsp;: https://www.deque.com/blog/introducing-the-next-generation-of-mobile-accessibility-testing/
- Une évol dans Android 14 qui coiffe Apple (en)&nbsp;: https://www.phonearena.com/news/android-14-flash-notifications_id150189


## Ergonomie, UI & UX

- Le problème des boutons disabled, à lire (en)&nbsp;: https://adamsilver.io/blog/the-problem-with-disabled-buttons-and-what-to-do-instead/
- Le guide complet sur le design universel (en)&nbsp;: https://universaldesignguide.com/
- Figma et a11y , une vue d'ensemble (en)&nbsp;: https://equalentry.com/accessibility-figma/

## Ressources

- Plein de chouettes leçons d'a11y, une par semaine (en)&nbsp;: https://theadminbar.com/accessibility-weekly
- Grosse base de liens autour de l'a11y, précieux (en)&nbsp;: https://raindrop.io/a11ycat/a-35893871/sort=title
- Jargon d'a11y : https://ideance.net/fr/glossaire-accessibilite/
- Q/A sur les web composants (en)&nbsp;: https://www.matuzo.at/blog/2023/web-components-accessibility-faq/

## Autres

- Un cours d'intro sur l'a11y en ligne (en)&nbsp;: https://www.abra.ac/order?ct=2e43b55d-46fe-4a98-af64-1b15f7d8ee98