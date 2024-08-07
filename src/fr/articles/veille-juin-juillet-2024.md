---
title: "Veille #A11y Juin-Juillet 2024"
abstract: "Florilège de ressources en #a11y, Juin-Juillet 2024"
date: "2024-08-05"
tags:
  - veille
---

# Veille accessibilité numérique Juin-Juillet 2024

On repart sur les overlays ou surcouches d'accessibilité (en) : https://www.joedolson.com/2024/07/overlays-misunderstand-accessibility/. Et on poursuit avec une jolie plainte collective (il me semble impossible en France) contre AccessiBe, une autre surcouche (en) : https://www.lflegal.com/2024/07/accessibe-class-action/.
Pour finir, des retours enthousiastes sur la magnifique, gratuite et très suivie conférence A11y Paris : 
https://www.temesis.com/blog/a11y-paris-2024-nos-temps-forts/ et https://access42.net/a11y-paris-2024-compte-rendu/.
Ecore beaucoup éde beaux contenus en ces mois de juin et juillet, pas de vacances pour l'a11y !

## L'accessibilité dans les lois et les normes

- Draft note, Guidance on Applying WCAG 2 to Non-Web Information and Communications Technologies (WCAG2ICT) (en) : https://www.w3.org/TR/2024/DNOTE-wcag2ict-22-20240702/
- Explications suite à cette draft note part 1 (en) https://www.tpgi.com/new-advice-on-wcag-for-software-and-documents-part-1/ et part 2 (en) https://www.tpgi.com/new-advice-on-wcag-for-software-and-documents-part-2/
- État de l'accessibilité numérique en Europe,, digital trust 2024 (en) : https://www.digitaltrustindex.eu/
- European Accessibility Act, l'essentiel (en) : https://axesslab.com/european-accessibility-act-eaa-what-you-need-to-know/
- Draft note W3c sur les exigences utilisateurs pour les outils collaboratifs, intéressant (en) : https://www.w3.org/TR/ctaur/
- Draft note sur les principes éthiques du web, ça manquait (en) : https://www.w3.org/TR/ethical-web-principles/

## Stratégie de mise en accessibilité

- Il ne faut toujours nommer vos landmarks (en) : https://adrianroselli.com/2024/06/maybe-dont-name-that-landmark.html
- Pour anticiper l'a11y et non juste corriger (en) : https://www.deque.com/blog/transform-digital-accessibility-from-a-reactive-break-fix-to-a-proactive-shift-left/

## Tester l’accessibilité

- Tests d'utilisabilité a11y, comparaison utilisateurs d'AT et ceux sans, à lire (en) : https://makeitfable.com/article/fable-webinar-recap-scoping-your-accessibility-research-study/
- Intéressantes considérations sur le SCm 1.4.11 non-text contrast, à lire (en) : https://yatil.net/blog/non-text-contrast-in-detail-ui-components
- Les audits, oui, mais bof (en) : htmmmtps://yatil.net/blog/the-infuriating-inefficiency-of-accessibility-audits
- Tester l'a11y avec les CSS modernes, un framework (en) : https://heydonworks.com/article/testing-html-with-modern-css/
- De l'a11y dans Web Platform Tests (en) : https://webkit.org/blog/15400/improving-web-accessibility-with-web-platform-tests/
- premier working draft pour le format de règles d'Accessibility Conformance Testing (en) : https://www.w3.org/news/2024/first-public-working-draft-accessibility-conformance-testing-act-rules-format-1-1/
- Une extension Chrome pour tester les live regions (en) : https://github.com/wizzyfx/nerdeRegionPlugIn

## Points techniques

- Bien utiliser aria-label et les erreurs fréquentes : https://ideance.net/blog/2501/7-mauvaises-facons-dutiliser-lattribut-aria-label-la-troisieme-va-vous-surprendre/
- Un exemple pour les combobox accessible, la démarche (en) : https://blog.pope.tech/2024/07/01/create-an-accessible-combobox-using-aria/
- Attention à l'accessibilité des "grid" (en) : https://adrianroselli.com/2024/07/be-careful-using-grid.html
- Comment bien utiliser les rem (en) : https://www.a11y-collective.com/blog/what-is-rem-in-css/
- Explications WCAG 1.3.5 input purpose (en) : https://www.digitala11y.com/what-are-the-autocomplete-attributes-defined-in-1-3-5-input-purpose/
- Tout sur aria-expanded (en) : https://www.a11y-collective.com/blog/aria-expanded/
- Des formulaires PDF accessibles (en) : https://www.tpgi.com/accessible-pdf-forms-online-theres-a-catch/

## Retour d'expérience

- Inaccessibilité des carousels LinkedIn (en) : https://intopia.digital/articles/navigating-the-accessibility-challenges-of-linkedin-carousels/
- N'utilisez pas web.dev (en) : https://adrianroselli.com/2024/07/dont-use-webdev-for-accessibility-info.html
- Pas toujours facile d'avoir des bons exemples d'a11y (en) : https://cerovac.com/a11y/2024/06/why-is-it-so-difficult-to-give-best-in-class-accessibility-examples-of-websites/
- Comment je rédige mes alt, Adrian Roselli, pratique et efficace (en) : https://adrianroselli.com/2024/05/my-approach-to-alt-text.html
- Retour sur le design pattern (ARIA du W3c) pagination, où on redit qu'ils sont une proposition pas une obligation, ni une norme (en) : https://adrianroselli.com/2024/07/feedback-on-a-pagination-pattern.html
- Donjons et Dragons peut vous inspirer pour vos textes de remplacement (en) : https://ericwbailey.website/published/dungeons-and-dragons-taught-me-how-to-write-alt-text/

## Aides techniques

- Témoignage d'un utilisateur de lecteur d'écran : https://ideance.net/blog/2341/stephane-hagues-lexperience-du-numerique-en-tant-que-personne-aveugle/
- Naviguer sur le web avec le clavier, comment fait-on ? (en) : https://www.tempertemper.net/blog/how-to-browse-the-web-with-the-keyboard-alone
- Les différents types de zoom navigateur (en) : https://www.oddbird.net/2024/07/09/zoomies/
- Restitution aux lecteurs d'écran du point d'hyphénation, pas de solution idéale : https://www.lalutineduweb.fr/ecriture-inclusive-point-hyphenation-accessibilite-lecteurs-ecran/
- C'est mieux mais pas encore ça le support aria-errormessage (en) : https://cerovac.com/a11y/2024/06/support-for-aria-errormessage-is-getting-better-but-still-not-there-yet/

## Appli mobile, web mobile

- Tab system sur app mobile (en) : https://www.tpgi.com/mobile-tabs-part-1-native-apis/
- Un toolkit design pour mobile payant mais de  qualité par S. Walter (en) : https://shop.stephaniewalter.design/b/mobile-native-apps-accessibility-toolkit-for-designers
- Wcag s'applique aux mobiles, niveau a (en) : https://html5accessibility.com/stuff/2024/07/08/wcag-level-a-bang-for-your-app-a11y-buck/
- Wcag s'applique aux mobiles, niveau aa (en) : https://html5accessibility.com/stuff/2024/07/09/peaky-wcag-level-aa-bang-for-your-app-a11y-buck/
- Système d'onglet accessible part 1 api natives (en) https://www.tpgi.com/mobile-tabs-part-1-native-apis/, part 2 React native (en) https://www.tpgi.com/mobile-tabs-part-2-react-native/ et part 3 Flutter (en) https://www.tpgi.com/mobile-tabs-part-3-flutter/ 
- La fondation Appt vient de publier 100 exemples de code accessible en SwiftUI (iOS) et Jetpack Compose (Android), merci à eux ! : https://appt.org/en/docs/swiftui/samples et https://appt.org/en/docs/jetpack-compose
- Explication d'Apple sur l'implémentation du DynamicType (agrandissement de texte), vidéo issue du WWDC24 : https://developer.apple.com/videos/play/wwdc2024/10073/
- Tour d'horizon de quelques options d'accessibilité disponibles avec SwiftUI, vidéo issue du WWDC24 : https://developer.apple.com/videos/play/wwdc2024/10073/
- Écrire des tests d'accessibilité pour Android JetPack Compose : https://www.droidcon.com/2024/06/10/accessibility-tests-in-compose-name-role-value/
- Les WCAG 2.2 s’appliquent-ils aux applications natives ? Éléments de réponse par Steve Faulkner : https://tetralogical.com/blog/2024/07/18/WCAG2ICT/
- Réflexion sur les défis à relever pour améliorer les tests d'accessibilité des applis mobiles : https://cerovac.com/a11y/2024/07/auditing-accessibility-of-mobile-apps-2024-update/


## Ergonomie, UI & UX

- Mise à jour des personas d'a11y du W3c (en)) : https://www.w3.org/WAI/news/2024-06-24/people-use-web/
- Tests utilisateurs et AI, toujours besoin d'humain, ouf ! (en) : https://makeitfable.com/article/fable-webinar-recap-scoping-your-accessibility-research-study/

## Éco-conception

- CR sur la journée écoconception des designers éthiques : https://access42.net/compte-rendu-journee-ecoconception-numerique-designers-ethiques/
- Vidéo, Construire un programme d'a11y durable (en) : https://info.usablenet.com/on-demand-webinar-building-a-sustainable-accessibility-program?_hsmi=312666306

## Ressources

- Rédiger des textes de remplacement aux images à la BBC, guide d'écriture (en) : <https://www.bbc.co.uk/gel/how-to-write-text-descriptions-alt-text>
- Vidéo d'une conf sur les problèmes des neurodivergents (en)  :https://yougotthis.io/library/understanding-the-why-around-neurodivergent-inclusive-web-design/

## Autres

- Article montrant l'inefficacité de Recaptcha2 de Google, à méditer (en) : https://arxiv.org/pdf/2311.10911
- Gérer les light/dark modes web : https://www.alsacreations.com/article/lire/1927-Les-modes-d-apparence-Light-mode-et-Dark-mode.html
- Publication du premier working draft pour le format eBraille : <https://daisy.github.io/ebraille/published/1.0/
