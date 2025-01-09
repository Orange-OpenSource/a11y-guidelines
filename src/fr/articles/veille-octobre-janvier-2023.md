---
title: "Veille #A11y Octobre 2022 -Janvier 2023"
abstract: "Florilège de ressources en #a11y, Octobre 2022 -Janvier 2023"
date: "2023-02-05"
tags:
  - veille
---

# Veille accessibilité numérique Octobre 2022 - Janvier 2023
Bon grosse flemme en fin 2022, donc 4 mois de veille, promis, je en le referai plus !
On a eu le droit à plein de super calendrier de l'avant, plein de chouette truc&s à regarder :
- une liste de calendrier en webdev (en) : https://adrianroselli.com/2022/12/web-development-advent-calendars-for-2022.html
- une autre (en) : https://www.smashingmagazine.com/2022/12/tech-advent-calendars-web-developers-web-designers-2022/
- le fameux 24 jours de web : https://www.24joursdeweb.fr/
- et un petit nouveau (en) : https://www.htmhell.dev/adventcalendar/

En cette nouvelle année  où la France n'a pas brillé en ce qui concerne son rapport d'a11y à la Commission Européenne (lire à ce sujet : https://koena.net/rapport-de-la-france-a-la-commission-europeenne-sur-la-directive-accessibilite-web-regles-du-jeu-modifiees/ ), un avis que je partage sur le fait que l'inaccessibilité n'est souvent QUE politique :https://www.lalutineduweb.fr/inaccessibilite-politique/

Bonne lecture !
## L'accessibilité dans les lois et les normes 
-	WCAG enfin AG 3.0, où en est on ? (en) : https://www.tpgi.com/wcag-3-0-are-we-there-yet/
- Explication du futur critère 2.4.11 apparence du focus des WCAG 2.2 (en) : https://www.tempertemper.net/blog/focus-appearance-explained
- 
## Retours d’expérience et accessibilité
- Point sur les listes de définition en HTML, attention (en) : https://adrianroselli.com/2022/12/brief-note-on-description-list-support.html
- Les soucis d'aria-label, à lire (en) : https://ericwbailey.website/published/aria-label-is-a-code-smell/
- Démarrer dans la mise en a11y : https://access42.net/comment-demarrer-demarche-accessibilite-numerique
- Toujours tester le support navigateur/AT, car ça évolue (en) : https://www.tpgi.com/carry-on-testing-2023/
## Stratégie de mise en accessibilité 
- La stratégie de l'a11y du site du gouvernement anglais gov.uk évolue, à lire (en) : https://accessibility.blog.gov.uk/2023/01/06/a-new-accessibility-strategy-for-the-gov-uk-design-system/
-	SEO et a11y, ensemble, 4 articles sur le sujet (en) : https://www.deque.com/blog/author/matthew-luken/
- Petit rappel pour taille de la police (en) : https://joshcollinsworth.com/blog/never-use-px-for-font-size
- Accessibilité et navigation clavier tout ce qu'il faut savoir (en) :
 - part 1 : https://www.smashingmagazine.com/2022/11/guide-keyboard-accessibility-html-css-part1/ 
 - part 2 : https://www.smashingmagazine.com/2022/11/guide-keyboard-accessibility-javascript-part2/
- L'architecture de l'information est aussi de l'a11y (en) : https://medium.com/known-item/your-information-architecture-is-an-accessibility-problem-cd54ae917f8e
- A11y washing, arrêtez de vous mentir (en) : https://adrianroselli.com/2022/11/accessibility-gaps-in-mvps.html
- 7 choses a faire pour l'a11y et le SEO (en) : https://www.deque.com/blog/7-tactics-that-benefit-both-accessibility-and-seo/ 
## Tester l’accessibilité
- Les 5 top erreurs d'a11y en 2022, instructif (en) : https://intopia.digital/articles/top-5-critical-accessibility-issues-in-2022/
- Béta de l'outil d'aide à la déclaration RGAA du gouvernement : https://ara.numerique.gouv.fr/
- La cohérence des principaux outils de test aux WCAG publié par le W3c, à lire (en) : 
  - Annonce sur le blog de Deque (en) : https://www.deque.com/blog/w3c-publishes-wcag-testers-consistency-list/
  - Article du w3c (en) : https://www.w3.org/WAI/standards-guidelines/act/implementations/
- Comparaison de 5 outils de tests a11y auto et à la main, à lire (en) : https://adrianroselli.com/2023/01/comparing-manual-and-free-automated-wcag-reviews.html
- Test auto, la base (en) : https://www.smashingmagazine.com/2022/11/automated-test-results-improve-accessibility/
-	Mettre en place un environnement de test pour lecteur d'écran, complet (en) : https://www.sarasoueidan.com/blog/testing-environment-setup/
- Guide pour tester les WCAG 2.1 AA, en cours (en) : https://github.com/alphagov/wcag-primer/wiki
- Une extension Chrome pour tester  1.14.12 - Text Spacing (en) : https://chrome.google.com/webstore/detail/text-spacing-editor/amnelgbfbdlfjeaobejkfmjjnmeddaoj
## Points techniques en accessibilité
-	La balise label et son utilisation, j'ai appris des trucs (en)&nbsp;: https://maxdesign.com.au/articles/label.html:
- La sémantique HTML et son support (en) : https://www.tpgi.com/screen-readers-support-for-text-level-html-semantics/
- Un lien et pas un bouton (en) : https://www.tempertemper.net/blog/if-you-need-a-link-dont-use-a-button
- La solution pour un focus toujours visible avec des éléments sticky (en) : https://www.tpgi.com/prevent-focused-elements-from-being-obscured-by-sticky-headers/
-	Icones plus texte, rappel du problème (en) : https://www.tempertemper.net/blog/buttons-with-icons-and-text
- Ne pas imbriquer des éléments interactifs HTML (en) : https://www.tempertemper.net/blog/overlapping-interactive-areas
- Aria, il n'en faut que quand on en a besoin, encore une fois (en) : https://www.htmhell.dev/adventcalendar/2022/2/
- Shadow Dom et ARIA, les problèmes (en) : https://nolanlawson.com/2022/11/28/shadow-dom-and-accessibility-the-trouble-with-aria/
- Explication en détails du masquage accessible (visually-hidden ou sr-only), didactique (en) : https://www.tpgi.com/the-anatomy-of-visually-hidden/
- Considération sur la validation HTML et le critère WCAG 4.1.1 (en) : https://adrianroselli.com/2022/12/the-411-on-4-1-1.html
- Aria-label et l'étiquette affichée, ce qui pose problème (en) : https://ashleemboyer.com/blog/don-t-overwrite-visual-labels-with-aria-label
- Focus-visible, le sauveur : https://www.nicolas-hoffmann.net/source/1716-Focus-visible-la-pseudo-classe-qui-met-presque-tout-le-monde-d-accord.html
- Point d'actu sur l'attribut HTML title (en) : https://www.tpgi.com/using-the-html-title-attribute/
- Retour sur la visibilité du focus, état de l'art avant WCAG 2.2  (en) : https://tetralogical.com/blog/2023/01/13/foundations-visible-focus-styles/
## Appli mobile, web mobile
-	Le zoom dans safari (en) : https://convergeaccessibility.com/2023/01/09/hidden-accessibility-gems/
- Développer a11y sous Android, quelques points (en) : https://dev.to/steady5063/android-accessibility-a-developers-guide-1n0m
 - Développeur iOS spécialiste d'a11y, à suivre (en) : https://iosdev.space/@dadederk/

## Ergonomie, UI & UX
- Annotations a11y dans les wireframes (en) : https://kb.iu.edu/d/bhpk
- Une étude qui fait le point en France, UX mobile : https://wexperience.fr/blog/lux-mobile-en-2023-en-france-pire-ou-mieux/
-	Checklist pour les tests utilisateurs en accessibilité, pratique (en) : http://www.uiaccess.com/accessucd/ut_checklist.html
- Retour de tests utilisateurs de lecteurs d'écran, à lire (en)s : https://jessbudd.com/blog/screen-reader-usability-testing-observations/
- Différences entre modales, dialogs et popover (en) : https://hidde.blog/dialog-modal-popover-differences/
- Le drag&Drop anatomie (en) : https://pencilandpaper.io/articles/ux-pattern-drag-and-drop/#drag-and-drop-alternatives
- Utiliser à bon escient le scroll infini (en) : https://www.nngroup.com/articles/infinite-scrolling-tips/infinite-scrolling-tips/
## Ressources
- Design system, bibliothèque de composants et a11y, des ressources (en) : https://www.webaxe.org/web-accessible-code-library-design-systems-patterns/
- Neurodiversité et design system, à lire (en) : https://www.neurodiversity.design/
- Tester l'a11y, tout est expliqué (en) : https://web.dev/learn-accessibility-available/
-	Une étude sur l'a11y des sites d'emploi, édifiant : https://www.access-first.fr/etude-accessibilite-sites-emploi
- Autre étude sur les boutiques et l'a11y, pas mieux (en) : https://www.access-first.fr/etude-accessibilite-de-sites-de-vente-en-ligne
- L'a11y du texte et des liens expliquée, complet (en) : https://blog.pope.tech/2023/01/01/link-and-text-accessibility/
- Commencer avec WCAG 2.2 (en) : https://alphagov.github.io/wcag-primer/
- Quelques chiffres autour du handicap (en) : https://dequeuniversity.com/resources/disability-statistics
-	Une autre étude sur les achats de Noël et a11y : https://blog.empreintedigitale.fr/2022/12/08/accessibilite-numerique-et-e-commerce-ou-en-sommes-nous__trashed/
-	Petits cours de HTML sémantique, rappel (en) : https://mikemai.net/blog/2022/12/04/24-semantic-terms-web-pros-should-know.html#main
-	Site sur l'a11y chouette, notamment sur les spécifications de composants (en/fr) : https://accessuse.eu/en/components.html
## Autres
-	Trouver des couleurs accessibles donc bien contrasté (en) : https://randoma11y.com/
-	L'accessibilité est politique, point de vue plein de bon sens : https://www.lalutineduweb.fr/inaccessibilite-politique/
- Techniques pour l'audiodescription (en) : https://mn.gov/mnit/media/blog/?id=38-560867
 