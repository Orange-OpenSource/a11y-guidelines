---
title: "Media queries et préférences utilisateur : adapter les interfaces aux préférences des utilisateurs"
abstract: "Les media features de préférences utilisateur permettent d'adapter une interface en fonction des préférences exprimées par l'utilisateur. Définies par la spécification CSS Media Queries Level 5, elles permettent notamment de prendre en compte la réduction des animations, le contraste, le thème clair ou sombre, les couleurs forcées, la transparence et la réduction de la consommation de données."
titleBeforeTag: true
date: "2026-07-21"
tags:
  - web
  - advanced
---

Les **media queries** sont historiquement utilisées pour adapter la présentation d'une interface aux caractéristiques du périphérique utilisé, comme la largeur de l'écran, son orientation ou sa résolution.

Avec **CSS Media Queries Level 5**, le **World Wide Web Consortium (W3C)** étend cette approche en introduisant de nouvelles *media features* permettant de prendre en compte les **préférences utilisateur**. Elles permettent d'adapter l'interface en fonction de préférences telles que la réduction des animations (`prefers-reduced-motion`), le thème clair ou sombre (`prefers-color-scheme`), le contraste (`prefers-contrast`) ou encore les couleurs forcées (`forced-colors`). La spécification précise que ces préférences peuvent être définies directement par le navigateur, provenir des réglages du système d'exploitation ou, dans certains cas, être déterminées automatiquement par l'agent utilisateur.

Ces *media features* constituent un mécanisme permettant d'adapter le comportement ou la présentation d'une interface en fonction de certaines préférences d'affichage exprimées par les utilisateurs.

Cet article présente les principales *media features* de préférences utilisateur définies par **Media Queries Level 5**, leurs cas d'usage, leurs limites de compatibilité, ainsi que les bonnes pratiques pour les implémenter, les tester et les auditer.

> **À retenir**
> Les *media features* présentées dans cet article sont définies par la spécification **CSS Media Queries Level 5**. En revanche, leur niveau de prise en charge varie selon les navigateurs et les plateformes. Leur utilisation n'est pas explicitement exigée par les **WCAG**, le **RGAA** ou la norme **EN 301 549**, mais constitue une bonne pratique pour concevoir des interfaces capables de s'adapter aux préférences exprimées par les utilisateurs.

## Pourquoi ces media features ont-elles été introduites ?

// To do

## Les principales *media features* de préférences utilisateur

| *Media feature*                | Description                                                             |
| ------------------------------ | ----------------------------------------------------------------------- |
| `prefers-reduced-motion`       | Indique une préférence pour la réduction des animations.                |
| `prefers-contrast`             | Indique une préférence concernant le niveau de contraste.               |
| `prefers-color-scheme`         | Indique une préférence pour un thème clair ou sombre.                   |
| `forced-colors`                | Indique si un mode de couleurs forcées est actif.                       |
| `prefers-reduced-transparency` | Indique une préférence pour la réduction des effets de transparence.    |
| `prefers-reduced-data`         | Indique une préférence pour la réduction de la consommation de données. |

Les sections suivantes présentent chacune de ces *media features*, leur fonctionnement, les valeurs définies, lorsqu'elles existent, par la spécification, leurs principaux cas d'usage ainsi que les points d'attention à connaître pour les implémenter correctement.

> **Note**
> Cet article s'appuie sur la version actuelle de la spécification **CSS Media Queries Level 5**. Certaines documentations ou articles plus anciens peuvent mentionner des valeurs qui ne figurent plus dans la version actuelle, comme `no-preference` pour `prefers-color-scheme`.

## `prefers-reduced-motion`

La *media feature* `prefers-reduced-motion` indique si l'utilisateur a exprimé une préférence pour la réduction des animations et des mouvements. Elle permet d'adapter les animations et les effets de mouvement en conséquence.

### Valeurs définies par la spécification

La spécification définit les valeurs suivantes :
- `reduce` : l'utilisateur a exprimé une préférence pour la réduction des animations et des mouvements ;
- `no-preference` : aucune préférence particulière n'a été exprimée.

### Exemple

```css
@media (prefers-reduced-motion: reduce) {
  .animated-element {
    animation: none;
  }
}
```

### Cas d'usage

Cette *media feature* peut notamment être utilisée lorsque l'interface comporte des animations, des transitions, des effets de parallaxe ou d'autres mouvements susceptibles d'être réduits lorsque cette préférence est exprimée.

### Bonnes pratiques

La réduction des animations ne consiste pas nécessairement à supprimer tous les effets visuels. D'une manière générale, il n'est pas nécessaire de supprimer toutes les animations. Lorsqu'une réduction des animations est souhaitée, il n'est pas toujours nécessaire de supprimer tous les effets de mouvement. Les animations qui participent à la compréhension de l'interface peuvent être conservées, tandis que les animations purement décoratives peuvent être réduites ou supprimées.

## `prefers-contrast`

La *media feature* `prefers-contrast` indique la préférence de l'utilisateur concernant le niveau de contraste de l'interface.

### Valeurs définies par la spécification

La spécification définit les valeurs suivantes :
- `no-preference` : aucune préférence particulière n'a été exprimée ;
- `more` : l'utilisateur a exprimé une préférence pour un contraste plus élevé ;
- `less` : l'utilisateur a exprimé une préférence pour un contraste plus faible ;
- `custom` : l'utilisateur a défini un mode de contraste personnalisé.

### Exemple

```css
@media (prefers-contrast: more) {
  body {
    background: white;
    color: black;
  }
}
```

### Cas d'usage

Cette *media feature* peut notamment être utilisée pour :
- adapter le contraste des couleurs de l'interface ;
- renforcer ou atténuer certains éléments graphiques (bordures, icônes, indicateurs visuels) ;
- ajuster la présentation en fonction de la préférence de contraste exprimée par l'utilisateur.

## `prefers-color-scheme`

La *media feature* `prefers-color-scheme` permet de détecter si l'utilisateur a exprimé une préférence pour un thème de couleur clair ou sombre pour l'interface utilisateur.

### Valeurs définies par la spécification

La spécification définit les valeurs suivantes :
- `light` : l'utilisateur a exprimé une préférence pour un thème clair ou n'a exprimé aucune préférence particulière ;
- `dark` : l'utilisateur a exprimé une préférence pour un thème sombre.

### Exemple

```css
@media (prefers-color-scheme: dark) {
  body {
    background-color: #121212;
    color: #f5f5f5;
  }
}
```

### Cas d'usage

Cette *media feature* peut notamment être utilisée lorsqu'une interface propose plusieurs thèmes de couleur ou lorsque son apparence doit s'adapter automatiquement au thème choisi par l'utilisateur.

### Bonnes pratiques

La conception d'un thème sombre ne consiste pas à inverser automatiquement les couleurs d'un thème clair. Les couleurs du texte, des icônes et des éléments interactifs doivent être soigneusement choisies pour maintenir un contraste suffisant et une bonne lisibilité. Testez toujours les deux modes afin de vérifier que les contrastes, les états interactifs et la lisibilité restent satisfaisants dans chaque thème.

## `forced-colors`

La *media feature* `forced-colors` indique si un mode de couleurs forcées est actuellement appliqué par l'agent utilisateur. Dans ce mode, certaines couleurs définies par la page peuvent être remplacées par des couleurs système afin de respecter les préférences d'affichage de l'utilisateur.

### Valeurs définies par la spécification

La spécification définit les valeurs suivantes :
- `active` : un mode de couleurs forcées est actif ;
- `none` : aucun mode de couleurs forcées n'est actif.

### Exemple

```css
@media (forced-colors: active) {
  .custom-button {
    border: 1px solid ButtonText;
  }
}
```

### Cas d'usage

Cette *media feature* peut notamment être utilisée pour :
- adapter l'apparence de composants personnalisés lorsque le mode de couleurs forcées est actif ;
- appliquer des couleurs système à certains éléments de l'interface ;
- ajuster la présentation de certains composants afin qu'ils restent compatibles avec le mode de couleurs forcées.

### Bonnes pratiques

La propriété `forced-color-adjust` permet de contrôler si un élément doit être adapté lorsque le mode de couleurs forcées est actif.

Sa valeur `none` empêche l'agent utilisateur de remplacer les couleurs de l'élément concerné. Son utilisation devrait rester exceptionnelle et être réservée aux situations où ce comportement est pleinement justifié.

## `prefers-reduced-transparency`

La *media feature* `prefers-reduced-transparency` permet de détecter si l'utilisateur a exprimé une préférence pour la réduction des effets de transparence dans l'interface utilisateur. Elle permet d'adapter certains effets visuels lorsque cette préférence est exprimée.

### Valeurs définies par la spécification

La spécification définit les valeurs suivantes :
- `reduce` : l'utilisateur a exprimé une préférence pour la réduction des effets de transparence ;
- `no-preference` : aucune préférence particulière n'a été exprimée.

### Exemple

```css
@media (prefers-reduced-transparency: reduce) {
  .overlay {
    opacity: 1;
    backdrop-filter: none;
  }
}
```

### Cas d'usage

Cette *media feature* peut notamment être utilisée pour :
- réduire les effets de transparence ;
- supprimer certains effets de flou appliqués à l'arrière-plan ;
- adapter la présentation des composants utilisant des effets translucides.

### Bonnes pratiques

Lorsqu'une préférence pour la réduction de la transparence est exprimée, les effets reposant sur la translucidité peuvent être remplacés par des couleurs opaques afin de conserver une bonne lisibilité de l'interface.

## `prefers-reduced-data`

La *media feature* `prefers-reduced-data` permet de détecter si l'utilisateur a exprimé une préférence visant à limiter la consommation de données lors du chargement ou de l'utilisation d'une interface.

### Valeurs définies par la spécification

La spécification définit les valeurs suivantes :

- `reduce` : l'utilisateur a exprimé une préférence pour limiter la consommation de données ;
- `no-preference` : aucune préférence particulière n'a été exprimée.

### Exemple

```css
@media (prefers-reduced-data: reduce) {
  .hero-video {
    display: none;
  }
}
```

### Cas d'usage

Cette *media feature* peut notamment être utilisée pour :
- désactiver le chargement de médias volumineux ;
- limiter l'affichage de contenus vidéo ou d'animations ;
- proposer des versions plus légères de certains contenus.

### Bonnes pratiques

La réduction de la consommation de données ne devrait pas entraîner la suppression de contenus essentiels ou de fonctionnalités indispensables. Les adaptations devraient concerner en priorité les contenus ou ressources dont l'absence n'affecte pas la compréhension ou l'utilisation de l'interface.

## Compatibilité des implémentations

Les *media features* présentées dans cet article ne bénéficient pas toutes du même niveau de prise en charge par les navigateurs et les systèmes d'exploitation.

Certaines, comme `prefers-reduced-motion`, `prefers-color-scheme` ou `forced-colors`, sont aujourd'hui largement implémentées. D'autres, comme `prefers-reduced-transparency`, `prefers-reduced-data` ou certaines valeurs de `prefers-contrast`, présentent un support plus limité selon les navigateurs ou les plateformes.

La simple prise en charge d'une *media feature* par un navigateur ne garantit pas que la préférence puisse être exprimée sur tous les systèmes d'exploitation. Certaines préférences dépendent en effet de la présence d'un réglage correspondant dans le système ou de sa prise en charge par l'agent utilisateur.

Avant de s'appuyer sur une media feature en production, il est donc recommandé de vérifier son niveau de compatibilité ainsi que le contexte dans lequel elle est effectivement disponible.

Les ressources suivantes permettent de suivre l'état des implémentations :
- la compatibilité MDN (Browser compatibility) de chaque media feature ;
- la spécification CSS Media Queries Level 5 ;
- les données de compatibilité de Can I Use lorsque celles-ci sont disponibles.

> **Note**
> Une *media feature* peut être reconnue par un navigateur sans qu'il soit possible de modifier facilement la préférence correspondante sur toutes les plateformes. Lors des tests, il est donc important de vérifier à la fois la prise en charge de la *media feature* et la possibilité d'activer la préférence sur le système utilisé.

| *Media feature*                | Niveau de maturité                                                             |
| ------------------------------ | ------------------------------------------------------------------------------ |
| `prefers-reduced-motion`       | Large prise en charge                                                          |
| `prefers-color-scheme`         | Large prise en charge                                                          |
| `forced-colors`                | Bonne prise en charge mais principalement pertinente sur certaines plateformes |
| `prefers-contrast`             | Prise en charge variable selon les navigateurs et les valeurs                  |
| `prefers-reduced-transparency` | Prise en charge limitée                                                        |
| `prefers-reduced-data`         | Prise en charge limitée                                                        |

Ce niveau de maturité constitue une indication générale. Il peut varier selon les versions des navigateurs, les systèmes d'exploitation et les plateformes utilisées.

## Détection en JavaScript

Les préférences utilisateur sont avant tout destinées à être utilisées dans les feuilles de styles CSS grâce aux *media queries*. Dans certains cas, il peut toutefois être nécessaire d'adapter également le comportement de l'interface depuis JavaScript.

`window.matchMedia()` permet d'interroger les mêmes *media queries* que celles utilisées en CSS et de réagir à leurs éventuelles évolutions.

```javascript
const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

if (mediaQuery.matches) {
  disableAnimations();
}
```

À plus long terme, la **User Preferences API** vise à offrir un accès plus riche aux préférences utilisateur depuis JavaScript. Elle reste toutefois expérimentale et ne constitue pas aujourd'hui une alternative à `matchMedia()`.

## User Preferences API

Les préférences utilisateur peuvent également être interrogées depuis JavaScript grâce à la **User Preferences API**, une API expérimentale documentée par MDN.

Contrairement aux *media features* CSS, cette API fournit un accès programmatique aux préférences utilisateur via l'objet `navigator.preferences`. Elle permet notamment d'observer les changements de préférences au cours de la navigation.

À ce jour, cette API reste expérimentale et son niveau de prise en charge est limité. Pour les besoins courants, `window.matchMedia()` demeure la solution la plus largement compatible.

## Bonnes pratiques d'implémentation

### 1. Concevoir une interface fonctionnelle par défaut

Les *media features* de préférences utilisateur ne devraient pas constituer un prérequis au bon fonctionnement de l'interface. Elles permettent d'adapter la présentation ou certains comportements, mais le contenu doit rester compréhensible et utilisable même lorsqu'aucune préférence particulière n'est exprimée.

### 2. Adapter uniquement ce qui est nécessaire

L'objectif n'est pas de créer plusieurs versions d'une même interface, mais d'adapter uniquement les éléments concernés par la préférence détectée. Les adaptations doivent rester ciblées et proportionnées.

### 3. Respecter les préférences exprimées

Les préférences détectées traduisent un choix explicite de l'utilisateur ou une préférence déterminée par son environnement d'exécution. Lorsqu'elles sont disponibles, elles devraient être prises en compte plutôt qu'ignorées ou contournées.

### 4. Vérifier les implémentations sur plusieurs plateformes

Le niveau de prise en charge varie selon les navigateurs, les systèmes d'exploitation et les plateformes. Une implémentation fonctionnelle sur un environnement donné ne garantit pas un comportement identique ailleurs.

Il est recommandé de tester les fonctionnalités sur plusieurs combinaisons de navigateurs et de systèmes d'exploitation.

### 5. Combiner CSS et JavaScript lorsque cela est pertinent

Les *media features* CSS couvrent la majorité des besoins liés à l'adaptation de l'interface. Lorsque des comportements plus avancés sont nécessaires, `window.matchMedia()` permet d'interroger les mêmes préférences depuis JavaScript et de réagir à leurs éventuelles évolutions.

## Comment tester

### 1. Vérifier les préférences du système

Avant de tester une *media feature*, il peut être utile de vérifier que la préférence correspondante est bien activée dans le système d'exploitation ou le navigateur. Selon les plateformes, ces préférences peuvent notamment concerner la réduction des animations, le thème clair ou sombre, le contraste ou les couleurs forcées.

### 2. Inspection manuelle

Les outils de développement permettent d'émuler plusieurs préférences utilisateur sans modifier les réglages du système d'exploitation. Cette approche est particulièrement utile pour vérifier rapidement qu'une media feature est correctement prise en compte.

Dans les navigateurs basés sur Chromium, il est possible d'émuler :
- `prefers-reduced-motion` ;
- `prefers-color-scheme` ;
- `prefers-contrast` ;
- `forced-colors`.

### 3. Vérifier avec `matchMedia()`

Depuis la console du navigateur, `window.matchMedia()` permet de vérifier la valeur retournée par une *media feature*.

```javascript
window.matchMedia('(prefers-reduced-motion: reduce)').matches
```

Cette expression renvoie `true` lorsque la préférence est détectée, et `false` dans le cas contraire.

## Utiliser le bookmarklet `prefers-scan`

Lors d'un audit d'accessibilité ou d'une revue de code, il n'est pas toujours évident d'identifier manuellement toutes les *media queries* liées aux préférences utilisateur présentes dans une application. Cette vérification peut être longue, en particulier lorsque plusieurs feuilles de styles sont chargées.

Le bookmarklet **Prefers Scan** automatise cette première étape en analysant les feuilles de styles accessibles de la page.

Il permet notamment de :
- recenser les media features utilisées ;
- identifier les préférences prises en charge ;
- repérer rapidement les préférences absentes ;
- faciliter la préparation d'un audit manuel.

**Prefers Scan** permet d'identifier la présence des media features dans les feuilles de styles, mais ne vérifie pas la pertinence ni la qualité des adaptations mises en œuvre. Une vérification manuelle reste indispensable.

Le code source et les instructions d'installation sont disponibles sur GitHub : https://github.com/MewenLeHo/prefers-scan

## Erreurs fréquentes observées en audit

### Ignorer complètement `prefers-reduced-motion`

Les interfaces modernes utilisent souvent des animations pour accompagner les transitions, attirer l'attention ou enrichir l'expérience utilisateur. Ignorer `prefers-reduced-motion` revient à maintenir ces animations malgré une préférence explicite de l'utilisateur, ce qui peut provoquer une gêne ou un inconfort.

### Supposer que le mode sombre suffit

Un thème sombre n'est pas automatiquement accessible. Des contrastes insuffisants, des couleurs mal choisies ou des états interactifs peu visibles peuvent nuire à la lisibilité et à l'utilisation de l'interface.

### Désactiver `forced-colors`

Désactiver le mode de couleurs forcées à l'aide de `forced-color-adjust: none` prive l'utilisateur des adaptations réalisées par le navigateur. Cette propriété ne devrait être utilisée que dans des situations exceptionnelles et pleinement maîtrisées.

### Ajouter uniquement des ajustements cosmétiques

Les adaptations apportées devraient modifier le comportement ou la présentation des éléments réellement concernés. Changer uniquement quelques couleurs ou espacements sans répondre à la préférence exprimée limite fortement l'intérêt de ces media features.

### Ne pas tester

Une *media feature* peut être reconnue par le navigateur tout en étant mal implémentée ou inadaptée au contexte. Il est donc indispensable de vérifier le comportement réel de l'interface sur les plateformes pertinentes.

## Conclusion

Les *media queries* liées aux préférences utilisateur constituent un outil puissant pour rendre les interfaces plus adaptatives et plus accessibles.

Elles permettent de tenir compte de besoins concrets exprimés directement par les utilisateurs : réduction des animations, augmentation du contraste, adaptation des couleurs, diminution des effets visuels ou optimisation de la consommation de données.

Leur mise en œuvre est généralement simple, mais leur impact sur le confort d'utilisation peut être considérable.

Comme souvent en accessibilité numérique, quelques lignes de code bien pensées peuvent améliorer significativement l'expérience de nombreux utilisateurs.

Les *media features* de préférences utilisateur illustrent une évolution importante du Web : plutôt que de s'adapter uniquement aux caractéristiques techniques des appareils, les interfaces peuvent désormais tenir compte des préférences exprimées par leurs utilisateurs. Elles participent ainsi à la conception d'expériences plus personnalisables, plus confortables et, dans de nombreux cas, plus accessibles.

## Webographie

<ul lang="en">
  <li><a href="https://www.w3.org/TR/mediaqueries-5/" hreflang="en">W3C – Media Queries Level 5 (en)</a></li>
  <li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries_for_accessibility" hreflang="en">MDN – Using media queries for accessibility (en)</a></li>
  <li><a href="https://developer.mozilla.org/en-US/docs/Web/API/User_Preferences_API" hreflang="en">MDN – User Preferences API (en)</a></li>
  <li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion" hreflang="en">MDN – prefers-reduced-motion (en)</a></li>
  <li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-contrast" hreflang="en">MDN – prefers-contrast (en)</a></li>
  <li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme" hreflang="en">MDN – prefers-color-scheme (en)</a></li>
  <li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/@media/forced-colors" hreflang="en">MDN – forced-colors (en)</a></li>
</ul>
