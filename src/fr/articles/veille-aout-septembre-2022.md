---
title: "Veille #A11y Août-Octobre 2022"
abstract: "Florilège de ressources en #a11y, Août-Octobre 2022"
date: "2022-11-03"
tags:
  - veille
---

# Veille accessibilité numérique Août-Octobre 2022
Bon, gros retard pour cette nouvelle veille, mais la voilà enfin !
Un brouillon d'une spécification pas officiel sur AOM (Accessibility Object Model), important pour les aides techniques https://wicg.github.io/aom/spec/. 
Bientôt les WCAG 2.2, deux réflexions sur cette candidate recommandation (en) : https://www.deque.com/blog/wcag-2-2-is-at-the-candidate-recommendation-stage/ https://intopia.digital/articles/wcag-2-2-hits-candidate-recommendation-but-what-does-it-mean/ https://www.youtube.com/watch?v=eDCd-isluUY. 
Bon assez de temps perdu, on y va !

## L'accessibilité dans les lois et les normes
- Je connaissais pas, juste essentiel, pour tout savoir sur ARIA avec ARIA Authoring Practices Guide (APG) du W3c (en) : https://www.w3.org/WAI/ARIA/apg/
- Point de vue sur un nouveau critères WCAG 2.2, focus appearence, intéressant (en) : https://hidde.blog/focus-appearance-too-complex/
- Charte de la communication accessible de l'état Français, de biens beaux engagements, comment dire ? à suivre, hein... : https://www.gouvernement.fr/charte-d-accessibilite-de-la-communication-de-l-etat/ 

## Retours d’expérience et accessibilité
- Un questionnaire pour voir ce qu'ont les gens qui risquent de travailler avec vous en matière d'a11y au delà d'un couche de vernis, à lire (en) : https://github.com/scottaohara/accessibility_interview_questions 
- Obfuscation de lien et a11y : https://www.lalutineduweb.fr/obfuscation-liens-seo-problemes-accessibilite/
- Un test utilisateur sur l'accessibilité des images, comment aller plus loin, à lire (en) : https://tetralogical.com/blog/2022/07/21/research-insight-accessibility-of-images/ 
- Améliorer l'a11y dans son entreprise, cas d'étude (en) : https://www.smashingmagazine.com/2022/08/organization-improved-web-accessibility-case-study/
- Bien rédiger des noms accessibles (en) : https://hidde.blog/better-accessible-names/
- Details/summary, encore des bugs (en) : https://www.scottohara.me//blog/2022/09/12/details-summary.html

## Stratégie de mise en accessibilité 
- Comment améliorer pratiquement la prise en compte global de l'a11y au sein d'une structure (en) https://www.smashingmagazine.com/2022/08/organization-improved-web-accessibility-case-study/
- Qr code et a11y, pour tout savoir (en) : https://tetralogical.com/blog/2022/08/08/accessibility-and-qr-codes/
- Bien utiliser le Tabindex, complet (en) : https://www.a11yproject.com/posts/how-to-use-the-tabindex-attribute/
- L'accessible name pour les nuls (en) : https://baymard.com/blog/names-accessibility
- Rester accessible avec de nombreux contributeurs (en) :https://equalizedigital.com/how-to-maintain-accessibility-on-a-website-with-many-contributors/ 
- Sémantique HTML, la base (en) : https://tetralogical.com/blog/2022/10/05/foundations-html-semantics/
- L'a11y concerne aussi le backend (en) : https://ericwbailey.website/published/yes-accessibility-is-also-a-backend-concern/
- Utiliser la couleur de manière accessible, complet (en) : https://mn.gov/mnit/media/blog/?id=38-544858
- Contraste, sémantique et anxiété (en) : https://sarajw.hashnode.dev/aspects-of-accessibility-a11y-semantics-contrast-and-anxiety

## Tester l’accessibilité
- Une bibliothèque pour tester au clavier les applis, à essayer (en) : https://testingaccessibility.com/introducing-keyboard-testing-library-by-grunet? 
- Tester avec un lecteur d'écran, un récap... (en) : https://dna.babylonhealth.com/accessibility/how-tos/how-to-test-with-a-screen-reader/ 
- Tester sur mac avec VoiceOver (en) : https://cloudfour.com/thinks/mac-voiceover-testing-the-simple-way/
- Un nouvel outil de tests d'a11y que je ne connais pas ! (en) : https://diginclusion.com/hugr 
- Des outils d'audit RGAA de Copsae : https://github.com/copsae/outils-audits-accessibilite
- Outîls de test, choix et limites (en) : https://knowbility.org/blog/2022/accessibility-checkers-a-good-start-not-a-solution

## Points techniques en accessibilité
- Un bref tour d'horizon sur abréviation/title, où en est on ? spoiler: rien de neuf(en) : https://www.tpgi.com/short-note-the-abbreviation-appreciation-society/ 
- Aria-label, réflexions et état de l'art, à lire (en) : https://ericwbailey.website/published/aria-label-is-a-code-smell/
- Emoticon, emoji, caractères unicode exotique, un fléau pour l'a11y : https://www.lalutineduweb.fr/detournement-unicode-emojis-accessibilite/
- 5 erreurs sur les titres de contenu, clair et pratique  (en) : https://blog.pope.tech/2022/08/04/5-heading-accessibility-issues-and-how-to-fix-them/ 
- Le focus outline, la base (en) : https://www.matuzo.at/blog/2022/focus-outline/
- Explications du critère 2.1.4 Keyboard shortcuts (en) : https://hidde.blog/keyboard-shortcuts/
- Rajouter une Github action Pa11y sur un site Next.js, à voir (en) : https://ashleemboyer.com/blog/how-i-added-a-pa11y-ci-github-action-to-my-next-js-site
- Lien ou bouton, bien fait (en) : https://ashleemboyer.com/blog/should-i-use-a-button-or-a-link
- Toujours sur liens et boutons (en) : https://kilianvalkhof.com/2022/css-html/when-going-somewhere-does-a-thing-on-links-and-buttons/
- Aria-description, où en est on ? (en) : https://www.darins.page/articles/aria-description-crash-course
- Pas aria-label quand un intitulé visible existe (en) : https://ashleemboyer.com/blog/don-t-overwrite-visual-labels-with-aria-label
- Les différentes techniques pour étiqueter un bouton (en) : https://www.matuzo.at/blog/2022/button-baader/

## Appli mobile, web mobile
- Label et Hints sur Android (en) : https://qbalsdon.github.io/android,/labels,/hints,/accessibility,/robust/2022/07/20/labels-and-hints.html
- WCAG 2.2 et son implication pour les apps natives mobiles (en) : https://www.deque.com/blog/what-wcag-2-2-means-for-native-mobile-accessibility/
- Corriger les erreurs d'IOs a11y (en) : https://www.deque.com/blog/how-to-fix-common-ios-accessibility-issues/
- un site ressources sur app mobile et a11y (en) : https://mobilea11y.com/
- bibliothèque d'exemples a11y pour apps mobile (en) : https://github.com/appt-org/accessibility-code-examples

## Ergonomie, UI & UX
- Documenter l'a11y en phase de conception, énorme, indispensable : https://stephaniewalter.design/fr/blog/documenter-accessibilite-en-phase-de-design/ vidéo (en) : https://www.youtube.com/watch?v=eDCd-isluUY
- Design et documentation de l'accessibilité, à lire : https://stephaniewalter.design/fr/blog/documenter-accessibilite-en-phase-de-design/
- Le bouton retour, comment mieux le concevoir/positionner (en) : https://www.smashingmagazine.com/2022/08/back-button-ux-design/ 
- Comment bien choisir des testeurs en situation de handicap (en) : https://tetralogical.com/blog/2022/08/01/inclusive-user-research-recruiting-participants/
- Tout sur le contraste de couleur pour les concepteurs (en) : https://colorandcontrast.com/#/introduction
- Pour faire de la conception en prenant en compte les déficients cognitifs, intéressant (en) : https://www.ab11y.com/articles/ux-principles-that-include-cognitive-accessibility/ 
- Bonnes pratiques UX sur les drag&drop (en) : https://pencilandpaper.io/articles/ux-pattern-drag-and-drop/

## Ressources
- Des statistiques sur le handicap, riche (en) : https://dequeuniversity.com/resources/disability-statistics
- Ressources développeur a11y (en) : https://web.dev/learn/accessibility/
- Guide sur les bases d'une formulaire HTML accessible (en) : https://blog.pope.tech/2022/10/03/a-beginners-complete-guide-to-form-accessibility-the-5-things-accessible-forms-needs-and-how-to-fix-common-errors/
- Ressources concepteur a11y (en) : https://www.a11yproject.com/
- Un site ressource sur prendre en compte au niveau du numérique de la santé mentale, la déficience mentale, essentiel (en) : https://designpatternsformentalhealth.org/
- Aria et HTML, nouvelle partie dans ce site ressource sur le webdev avec un gros morceau d'a11y (en) : https://web.dev/learn/accessibility/aria-html/
- Mythes et réalités du contraste de couleur, complet (en) :  https://www.smashingmagazine.com/2022/09/realities-myths-contrast-color/

## Autres
- Anatomie de la construction d'une navbar web avec de l'a11y dedans, bien (en) : https://web.dev/website-navigation/
- Des design patterns pour la santé mentale (en) : https://ericwbailey.website/published/yes-accessibility-is-also-a-backend-concern/