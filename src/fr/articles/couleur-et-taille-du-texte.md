---
title: "Taille et couleur des textes"
abstract: "Quelle taille et quelles couleurs doit ont adopter pour les textes ?"
date: "2021-04-26"
tags:
  - web
---

# Taille et couleur des textes

Dans cet article, nous allons tenter de répondre aux questions suivantes concernant l'accessibilité des textes dans les pages Web:
- Quelle taille faut-il utiliser pour les textes ?
- Quelle est la taille de police minimale à respecter ?
- Quelle couleur puis-je utiliser pour le texte ?

## Qu'en dit le référenciel ?

Le [référentiel WCAG](https://www.w3.org/WAI/standards-guidelines/wcag/) n'impose pas de taille minimale ni de couleurs spécifiques pour les textes. Ceci dit deux critères permettant de répondre à ces questions méritent notre attention : 
- <a href="https://www.w3.org/TR/WCAG21/#resize-text" lang="en">1.4.4 Resize text</a>
- <a href="https://www.w3.org/TR/WCAG21/#contrast-minimum" lang="en">1.4.3 Contrast (Minimum)</a>

### Agrandissement de la taille des caractères

Si le référentiel n'impose pas de taille minimale pour la taille des caractères, [le critère 1.4.4](https://www.w3.org/TR/WCAG21/#resize-text) indique que l'utilisateur doit pouvoir augmenter la taille du texte jusqu'à 200% sans perte de contenu ou de fonctionnalité. Pour être conforme à ce critère il est indispensable de tester dans un navigateur. La procédure pour augmenter la taille du texte est disponible sur la page suivante : [Agrandissement de la taille du texte](/fr/web/outils/methodes-et-outils-de-test/agrandissement-texte/).
Parfois le dimensionnement de certains blocs de texte au niveau code, notamment à l'aide de tailles en pixels, peut entrainer l'affichage de textes tronqués lors de l'agrandissement, c'est pourquoi il est conseillé d'utilisé des unités relatives (%, em, rem ...).

### Contraste des couleurs

Le référentiel n'impose pas d'utiliser ni même n'interdit l'utilisation de certaines couleurs. Il est donc possible d'utiliser la couleur de votre choix à condition que celui-ci reste lisible. En effet un texte gris clair sur fond blanc par exemple pourra poser des difficultés. Il est donc indipensable de vérifier que la couleur du texte et la couleur du fond fournissent un niveau de contraste suffisant (cf. niveaux ci-dessous). Celui-ci peut être <a href="/fr/web/outils/methodes-et-outils-de-test/mesurer-contraste-couleurs/">mesuré très simplement à l'aide d'outils</a>.
&nbsp;
Le [critère 1.4.3 du référentiel](https://www.w3.org/TR/WCAG21/#contrast-minimum) impose des niveaux de contraste minimums permettant de garantir un confort de lecture suffisant. 

Pour les textes standards : 
- de taille inférieure à 24px : contraste de 4,5:1 minimum
- de taille supérieure ou égale à 24px : contraste de 3:1 minimum

Pour les textes gras :
- de taille inférieure à 18,5px : contraste de 4,5:1 minimum
- de taille supérieure ou égale à 18,5px : contraste de 3:1 minimum

Pour les liens non-soulignés
- contraste de 3:1 minimum avec le texte environnement et la couleur de fond

Le critère mentionne quelques exceptions qui ne sont soumis à aucune contrainte, notamment les textes des éléments inactifs (un bouton apparraissant grisé par exemple), les textes faisant parti d'un logo ou un nom de marque.

## Et, les utilisateurs dans tout ça ?

Comme on vient de le voir, le référentiel n'impose pas de taille minimale car il part du principe qu'il est possible pour l'utilisateur d'agrandir le texte si nécessaire. Dans les faits peu d'utilisateurs ajustent la taille du texte soit par habitude soit par méconnaissance des possibilités qui leur sont offertes. C'est pourquoi il est important que la taille par défaut soit suffisante pour garantir un confort de lecture qui donne envie de poursuivre sur le site. 

Voir les bonnes pratiques
Mettre à jour la page : /web/outils/methodes-et-outils-de-test/agrandissement-texte/