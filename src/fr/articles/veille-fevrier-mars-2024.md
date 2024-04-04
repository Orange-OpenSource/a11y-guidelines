---
title: "Veille #A11y Février-Mars 2024"
abstract: "Florilège de ressources en #a11y, Février-Mars 2024"
date: "2024-04-05"
tags:
  - veille
---

# Veille accessibilité numérique Décembre-Janvier 2024

Beaucoup de choses à lire en ce moment, en particulier la nouvelle mouture de ARIA in HTML du W3c (en) : https://www.w3.org/TR/2024/REC-html-aria-20240216/.
Hormis cette grosse annonce, un départ bien malheureux pour l'a11y en France, Jean-Pierre Vilain est parti, et pour les personnes engagées en accessibilité, c'est une grande perte : https://access42.net/hommage-jean-pierre-villain/.
On peut noter aussi la  sortie du RAWeb luxembourgeois, un RGAA en accord complet avec EN301549, la norme européenne : https://accessibilite.public.lu/fr/news/2024-02-08-RAWeb.html.
Et pour illustrer le manque d'accessibilité pour l'état voici quelques chiffres édifiant sur les 250 démarche en ligne, on rigole, jaune : https://www.temesis.com/blog/moins-de-3-du-top-250-des-demarches-en-ligne-sont-conformes-au-rgaa/.
Bon papillonnage !

## L'accessibilité dans les lois et les normes 

- Le critère 2.5.8 Target size expliqué (en) : https://www.tpgi.com/how-to-test-2-5-8-target-size-minimum/
- Le critère 3.3.8 Accessible authentification (minimum) expliqué (en) : https://www.tpgi.com/how-to-test-3-3-8-accessible-authentication-minimum/
- Les titres de section et a11y : https://ideance.net/blog/1831/accessibilite-et-titres-de-section/
-	Applications mobiles et obligation d’accessibilité : que dit la loi ? https://www.bam.tech/article/applications-mobiles-et-obligation-daccessibilite-que-dit-la-loi
-	Une proposition d'interprétation et des transposition des critères WCAG 2.2 aux applis mobiles (en) : https://getevinced.github.io/mcag/

## Stratégie de mise en accessibilité

- D'après Jacob Nielsen, l'a11y a raté, place aux interfaces individualisées générées par IA, j'suis pas d'accord mais à lire (en) : https://jakobnielsenphd.substack.com/p/accessibility-generative-ui
- Résultats de la nouvelle étude Milion de WebAim (en) : https://webaim.org/projects/million/
- Une réponse à Jacob Nielsen par Adrian Roselli (en) : https://adrianroselli.com/2024/03/jakob-has-jumped-the-shark.html
- Une autre réponse de la fameuse Léonie Watson à N. Nielsen (en) : https://tink.uk/nielsen-needs-to-think-again/
- Et encore un retour de baton pour J. Nielsen (en) : https://www.briandeconinck.com/jakob-nielsens-bad-ideas-about-accessibility/
- Et enfin, une liste d'articles consécutive à la levée de boucliers suite à l'article de J. Nielsen (en) : https://toot.cafe/@aardrian/112035138874620031
- Réflexion intéressante sur l'évolution de l'a11y (en)  : https://yatil.net/blog/access-by-a-thousand-curb-cuts
- Encore une démonstrations des dommages des overlays, s'il en fallait (en) : https://html5accessibility.com/stuff/2024/03/03/accessibility-darkness-2/
- Une clarification sur certains points flous des WCAG, à lire (en) : https://melsumner.github.io/reasonable-wcag-additions
- Mesurer pour voir les progrès en a11y retours de 4 experts (en) : https://makeitfable.com/article/measure-and-quantify-accessibility-progress-like-successful-accessibility-leaders/
- Retour sur AI et a11y (en) : https://alistapart.com/article/opportunities-for-ai-in-accessibility/

## Tester l’accessibilité

- Les tests auto d'a11y et les risque d'effet pervers sur les données récoltées (en) : https://cerovac.com/a11y/2024/02/
-	Un nouvel outil pour tester le contraste sur Chrome, il se démarque par la possibilité de calculer aussi le contraste selon le futur standard WCAG Silver (WCAG3) : https://a11ycolor.tools/more-toolstesting-and-monitoring-accessibility-with-automatic-tools-will-get-less-effective/
- Les erreurs ARIA les plus communes dans les audits (en) : https://cerovac.com/a11y/2024/03/common-aria-problems-found-in-accessibility-audits/
- Des indices pour les détectives WCAG (en) : https://accessibility.blog.gov.uk/2024/03/13/wcag-2-2-detective-skills/

## Points techniques

- Construire une navigation accessible, à lire (en) : https://blog.pope.tech/2024/01/30/how-to-create-accessible-navigations-and-sub-menus/
- Des graphes accessibles pour améliorer le confort de tous (en) : https://www.smashingmagazine.com/2024/02/accessibility-standards-empower-better-chart-visual-design/
- Tout sur indiquer les champs obligatoires ou optionnels, super, tout y est (en) : https://www.tpgi.com/doing-whats-required-indicating-mandatory-fields-in-an-accessible-way/
- Exemples du critère WCAG 1.4.5 images de texte conforme et non-conforme, à faire : https://www.tpgi.com/does-it-fail-1-4-5-images-of-text/
- Rendre les équations mathématiques accessibles (en) : https://www.tpgi.com/making-math-accessible/
- Qui a besoin d'un nom accessible (en) : https://html5accessibility.com/stuff/2024/02/14/when-it-says-name-from-author-it-means-from-you-not-boll-or-bukowski/ 
- Attributs ARIA et HTML, leurs différences (en) : https://www.deque.com/blog/distinguishing-between-aria-and-native-html-attributes/
- Tout sur la surface de clic et comment l'augmenter en CSS, tout y est (en) : https://ishadeed.com/article/target-size
- L'attribut html popover et a11y (en) : https://hidde.blog/popover-accessibility/
- Améliorer le focus dans les formulaires en pseudo-classe CSS (en) : https://css-tricks.com/accessible-forms-with-pseudo-classes/
- Attributs disabled html et aria-disabled (en) : https://kittygiraudel.com/2024/03/29/on-disabled-and-aria-disabled-attributes/
-	Apple expérimente un nouveau contrôle de formulaire HTML, un switch (en) : https://webkit.org/blog/15054/an-html-switch-control/

## Retour d'expérience

- Support du role ARIA note, faut voir... (en) : https://adrianroselli.com/2024/02/aria-note.html
- Les limites des AI génératives pour du code accessible (en) : https://tetralogical.com/blog/2024/02/12/can-generative-ai-help-write-accessible-code/
- Un tuto pour rédiger une alternative à une infographie complexe, bien : https://koena.net/infographie-accessible-les-12-discours-retardant-laction-climatique/
- Retours sous forme de conseils d'une experte a11y, si vrai (en) : https://heather-buchel.com/blog/2024/03/letters-to-an-accessibility-advocate/
- 5 risques moins connus du fait d'un manque d'a11y (en) : https://www.deque.com/blog/5-hidden-risks-inaccessible-website/

## Aides techniques

- Désactiver un lien pour les aides techniques : https://vincent-valentin.name/articles/desactiver-les-liens
- Support des caractères spéciaux dans les AT (en) : https://elevenways.be/en/articles/screenreaders-special-characters
- 5 AT à garder en mémoire (en) : https://www.nomensa.com/blog/five-assistive-technologies-you-should-be-aware-of/

## Appli mobile, web mobile

- Les barrières d'a11y pour les utilisateurs d'AT sur mobile, chouette résumé (en) : https://www.smashingmagazine.com/2024/02/mobile-accessibility-barriers-assistive-technology-users/
-	La version bêta d'Abra Desktop est disponible. Cet outil permet de tester l'accessibilité d'une application installée sur un mobile connecté à un Mac (en) : https://abra.ai/products/desktop
-	50+ statistiques d'utilisation du mode sombre Pour 2023 (en) : https://marketsplash.com/fr/statistiques-dutilisation-du-mode-sombre/
-	Nouveau plugin Android Ally pour les développeurs sur Android Studio (en) : https://plugins.jetbrains.com/plugin/23902-android-ally/
-	Encore l'outil Android Ally mais en version desktop pour testeurs ou développeurs (&en) : https://github.com/qbalsdon/android_ally_issues/
  
## Ergonomie, UI & UX

- Un guide très détaillé pour prendre en compte et documenter l'accessibilité dès la phase de design (en) : https://stephaniewalter.design/blog/a-designers-guide-to-documenting-accessibility-user-interactions/

## Ressources

- Tous les liens vers les présentations proposées au CSUN  (en) : https://docs.google.com/spreadsheets/d/1yBCYJ6flHW_KSYfBX1wNBRhGx9bxZ993_PoYaFrUAvE/edit#gid=80757841
- Le résultat du dixième questionnaire aux rs de lecteurs d'écran de WebAim (en) : https://webaim.org/projects/screenreadersurvey10/
- Retours sur ce questionnaire #10 de WebAim (en) : https://adrianroselli.com/2024/02/my-webaim-10th-sr-user-survey-takeaways.html
- Encore un retour sur le questionnaire #10 de WebAim (en) : https://afixt.com/10-takeaways-from-the-webaim-screenreader-survey-10/
- Comparatif a11y de 5 plugins de formulaire pour WordPress : https://www.temesis.com/blog/comparatif-de-laccessibilite-de-5-plugins-de-formulaire-pour-wordpress/
- Premier pas en a11y pour les devs, conseils de base forts utiles (en) : https://scribe.rip/@askParamSingh/a-developers-guide-for-web-accessibility-6b85448cc7a0
- Une clarification des différents types de sous-titrages (en) : https://benmyers.dev/blog/captions-and-subtitles/

## Autres

- Recruter en accessibilité, trop d'incompréhensions de notre métier (en) : https://www.craigabbott.co.uk/blog/stop-trying-to-recruit-unicorns-with-acorns/
- Réflexion sur le devenir de l'a11y, j'y crois (en) : https://cerovac.com/a11y/2024/02/dont-care-about-accessibility-resistance-is-futile/
- Toujours sur les AI génératives de code accessible (en) : https://hidde.blog/ai-for-accessible-components/
- Faire des césures de mots efficaces (en) : https://adrianroselli.com/2024/02/techniques-to-break-words.html
- Les mythes d'a11y, joli florilège (en) : https://a11ymyths.com/
- Version française du célèbre site expliquant pourquoi les surcouches c'est mal : https://overlayfactsheet.com/fr/
- Réflexions d'un professionnel de l'accessibilité après 15 ans d'expérience, ses déceptions et ses espoirs (en) :  https://yatil.net/blog/hope-kills-you
- Playability vient de sortir une version beta pour Windows, permettant de jouer aux jeux vidéos à partir des mouvements du visage : https://www.playability.gg/fr
- Retour d'expérience d'un mal voyant sur le casque Apple Vision Pro (en) : https://zmknox.com/2024/02/18/vision-accessibility-on-apple-vision-pro
