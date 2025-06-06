---
title: "Taille et couleur des textes"
abstract: "Quelle taille et quelles couleurs doit ont adopter pour les textes ?"
titleBeforeTag: true
date: "2021-07-05"
tags:
  - web
  - beginner
---

Dans cet article, nous allons tenter de répondre aux questions suivantes concernant l'accessibilité des textes dans les pages Web&nbsp;:
- Quelle taille faut-il utiliser pour les textes&nbsp;?
- Quelle est la taille de police minimale à respecter&nbsp;?
- Quelle couleur puis-je utiliser pour le texte&nbsp;?

## Qu'en dit le référentiel&nbsp;?

Le [référentiel WCAG](https://www.w3.org/WAI/standards-guidelines/wcag/) n'impose pas de taille minimale ni de couleurs pour les textes. Deux critères permettant de répondre à ces questions méritent notre attention&nbsp;:
- <a href="https://www.w3.org/TR/WCAG22/#resize-text" lang="en" hreflang="en">1.4.4 Resize text</a>
- <a href="https://www.w3.org/TR/WCAG22/#contrast-minimum" lang="en">1.4.3 Contrast (Minimum)</a>

### Agrandissement de la taille des caractères

Si le référentiel n'impose pas de taille minimale pour la taille des caractères, [le critère 1.4.4](https://www.w3.org/TR/WCAG22/#resize-text) indique que l'utilisateur doit pouvoir augmenter la taille du texte jusqu'à 200% sans perte de contenu ou de fonctionnalité. 
Pour être conforme à ce critère, il est indispensable de tester dans un navigateur.

Le critère peut être validé selon l'une de ces trois conditions d'agrandissement&nbsp;:
- Un zoom du texte uniquement depuis le navigateur.
- Un zoom graphique.
- L'utilisation d'un composant d'interface propre au site.

le dimensionnement de certains blocs de texte, notamment à l'aide de tailles en pixels, peut entraîner des pertes d'informations (textes tronqués, qui se chevauchent), c'est pourquoi il est conseillé d'utiliser des unités relatives (%, em, rem...).

La procédure pour augmenter la taille du texte est disponible sur la page suivante : [Agrandissement de la taille du texte](/fr/web/outils/methodes-et-outils-de-test/agrandissement-texte/).

**Note&nbsp;:** chez Orange nous avons décidé que ce critère ne serait évalué que pour une taille de texte agrandie à 200% seulement et pas par les deux autres méthodes possibles. Nous pensons, en effet, que cela permet plus de confort aux utilisateurs même si cela demande plus de travail aux développeurs.

### Contraste des couleurs

Le référentiel n'impose pas d'utiliser, ni même, n'interdit l'utilisation de certaines couleurs pour les textes. Cela dit, un texte gris clair sur fond blanc par exemple pourra poser des difficultés. Il est donc indispensable de vérifier que la couleur du texte et la couleur du fond fournissent un niveau de contraste suffisant (cf. niveaux ci-dessous). Celui-ci peut être <a href="/fr/web/outils/methodes-et-outils-de-test/mesurer-contraste-couleurs/">mesuré très simplement à l'aide d'outils</a>.

Le [critère 1.4.3 du référentiel](https://www.w3.org/TR/WCAG22/#contrast-minimum) impose des niveaux de contraste minimums permettant de garantir un confort de lecture suffisant. 

Pour les textes standards (non gras) : 
- de taille inférieure à 24px : contraste de 4,5:1 minimum
- de taille supérieure ou égale à 24px : contraste de 3:1 minimum

Pour les textes gras :
- de taille inférieure à 18,5px : contraste de 4,5:1 minimum
- de taille supérieure ou égale à 18,5px : contraste de 3:1 minimum

Pour les liens non-soulignés
- contraste de 3:1 minimum avec le texte environnement et la couleur de fond

Le critère mentionne quelques exceptions soumises à aucune contrainte, notamment les textes des éléments inactifs (un bouton apparaissant grisé par exemple), les textes faisant partie d'un logo ou un nom de marque.

## Et qu'en est-il des utilisateurs&nbsp;?

Comme on vient de le voir, le référentiel n'impose pas de taille minimale car il part du principe qu'il est possible d'agrandir le texte si nécessaire. Dans les faits les utilisateurs n'ajustent pas toujours la taille du texte à leurs besoins, par manque d'habitude ou par méconnaissance des possibilités qui leur sont offertes. C'est pourquoi il est important que la taille par défaut soit suffisante pour garantir un confort de lecture qui donne envie de poursuivre sur le site. 

La taille et la couleur ne sont pas les seules caractéristiques qui entrent en jeu sur la lisibilité d'un texte, en effet la police de caractères ou l'utilisation de texte en italique peut avoir des conséquences importantes. Vous trouverez quelques recommandations complémentaires à ce sujet dans la section [contenu et communication](https://a11y-guidelines.orange.com/fr/contenu-et-communication/).
