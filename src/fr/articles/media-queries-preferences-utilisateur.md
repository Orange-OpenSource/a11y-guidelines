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

**À retenir**

Les *media features* présentées dans cet article sont définies par la spécification **CSS Media Queries Level 5**. En revanche, leur niveau de prise en charge varie selon les navigateurs et les plateformes. Leur utilisation n'est pas explicitement exigée par les **WCAG**, le **RGAA** ou la norme **EN 301 549**, mais constitue une bonne pratique pour concevoir des interfaces capables de s'adapter aux préférences exprimées par les utilisateurs.

## Tableau récapitulatif des *media features*

| *Media feature*                | Description                                                             |
| ------------------------------ | ----------------------------------------------------------------------- |
| `prefers-reduced-motion`       | Indique une préférence pour la réduction des animations.                |
| `prefers-contrast`             | Indique une préférence concernant le niveau de contraste.               |
| `prefers-color-scheme`         | Indique une préférence pour un thème clair ou sombre.                   |
| `forced-colors`                | Indique si un mode de couleurs forcées est actif.                       |
| `prefers-reduced-transparency` | Indique une préférence pour la réduction des effets de transparence.    |
| `prefers-reduced-data`         | Indique une préférence pour la réduction de la consommation de données. |

Les sections suivantes présentent chacune de ces *media features*, leur fonctionnement, les valeurs définies, lorsqu'elles existent, par la spécification, leurs principaux cas d'usage ainsi que les points d'attention à connaître pour les implémenter correctement.

## `prefers-reduced-motion`

Cette media query permet de détecter si l'utilisateur souhaite limiter les animations non essentielles.

Valeurs principales :

- `reduce`
- `no-preference`

### Exemple

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

### Bonnes pratiques

- Supprimer les animations purement décoratives.
- Conserver les animations indispensables à la compréhension.
- Désactiver le défilement fluide (`scroll-behavior: smooth`).

### Lien avec les WCAG

Cette approche contribue notamment au respect du critère **WCAG 2.2 – 2.3.3 Animation from Interactions (AAA)**.

## `prefers-contrast`

Permet de détecter la préférence de l'utilisateur concernant le niveau de contraste.

Valeurs définies par la spécification :

- `more`
- `less`
- `custom`
- `no-preference`

### Exemple

```css
@media (prefers-contrast: more) {
  :root {
    --border-width: 3px;
  }

  button,
  input,
  select,
  textarea {
    border-width: var(--border-width);
  }
}
```

### Cas d'usage

- renforcer les bordures ;
- augmenter les contrastes ;
- souligner systématiquement les liens.

## `prefers-color-scheme`

Permet de détecter la préférence entre thème clair et sombre.

Valeurs principales :

- `light`
- `dark`

### Exemple

```css
:root {
  color-scheme: light dark;
}

@media (prefers-color-scheme: dark) {
  body {
    background: #111;
    color: #f5f5f5;
  }
}
```

### Remarque importante

Le mode sombre n'améliore pas automatiquement l'accessibilité.
Les contrastes doivent toujours être vérifiés.

## `forced-colors`

Indique qu'un mode de couleurs forcées est actif, par exemple le mode contraste élevé de Windows.

Valeurs :

- `active`
- `none`

### Exemple

```css
@media (forced-colors: active) {
  .custom-button {
    border: 1px solid ButtonText;
  }
}
```

### Recommandations

- Utiliser les couleurs système (`Canvas`, `CanvasText`, `ButtonText`, etc.).
- Éviter de désactiver ce comportement avec `forced-color-adjust: none` sauf nécessité absolue.

## `prefers-reduced-transparency`

Indique que l'utilisateur souhaite limiter les effets de transparence.

Valeurs :

- `reduce`
- `no-preference`

### Exemple

```css
@media (prefers-reduced-transparency: reduce) {
  .glass-panel {
    backdrop-filter: none;
    background: rgba(255, 255, 255, 1);
  }
}
```

## `prefers-reduced-data`

Permet de détecter une préférence pour la réduction de la consommation de données.

Valeurs :

- `reduce`
- `no-preference`

### Exemple

```css
@media (prefers-reduced-data: reduce) {
  .hero-video {
    display: none;
  }
}
```

### Cas d'usage

- désactiver les vidéos d'arrière-plan ;
- charger des images plus légères ;
- différer certaines ressources.

## Détection en JavaScript

Les mêmes préférences peuvent être interrogées via `window.matchMedia()`.

```javascript
const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

if (mediaQuery.matches) {
  disableAnimations();
}
```

## User Preferences API

Le navigateur expose également une API expérimentale documentée par MDN sous le nom **User Preferences API**.

Cette API (`navigator.preferences`) est encore expérimentale et ne doit pas être utilisée sans vérification approfondie de la compatibilité.

Dans la pratique, `matchMedia()` reste aujourd'hui la méthode la plus robuste.

## Comment utiliser ces media queries de la bonne façon

### 1. Prévoir une expérience fonctionnelle par défaut

Le contenu doit rester compréhensible même sans effets visuels avancés.

### 2. Adapter uniquement ce qui est nécessaire

L'objectif n'est pas de supprimer toutes les fonctionnalités, mais d'ajuster la présentation.

### 3. Respecter les préférences explicites

Une préférence utilisateur constitue un signal fort à prendre en compte.

### 4. Tester sur plusieurs plateformes

Le support varie selon :

- les navigateurs ;
- les systèmes d'exploitation ;
- les versions.

### 5. Combiner CSS et JavaScript si nécessaire

CSS couvre la majorité des besoins, JavaScript permet des comportements plus complexes.

## Exemple global

```css
/* Réduction des animations */
@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
}

/* Contraste renforcé */
@media (prefers-contrast: more) {
  a {
    text-decoration: underline;
  }
}

/* Mode sombre */
@media (prefers-color-scheme: dark) {
  body {
    background: #121212;
    color: #ffffff;
  }
}

/* Couleurs forcées */
@media (forced-colors: active) {
  svg {
    forced-color-adjust: auto;
  }
}
```

## Comment tester

## Inspection manuelle

Les outils de développement permettent de simuler plusieurs préférences utilisateur.

Dans les navigateurs basés sur Chromium, il est possible d'émuler :

- `prefers-reduced-motion` ;
- `prefers-color-scheme` ;
- `prefers-contrast` ;
- `forced-colors`.

## Utilisation de `matchMedia()` dans la console

```javascript
window.matchMedia('(prefers-reduced-motion: reduce)').matches
```

Cette expression renvoie `true` ou `false`.

## Utiliser le bookmarklet `prefers-scan`

Pour faciliter l'audit, le bookmarklet **prefers-scan** analyse la page et détecte les media queries liées aux préférences utilisateur présentes dans les feuilles de styles.

Il permet notamment de :

- recenser les media queries utilisées ;
- identifier les préférences prises en charge ;
- repérer les éventuelles omissions.

Le projet est disponible sur GitHub : https://github.com/MewenLeHo/prefers-scan

## Erreurs fréquentes observées en audit

### Ignorer complètement `prefers-reduced-motion`

Les interfaces riches utilisent souvent de nombreuses animations sans tenir compte des préférences utilisateur.

### Supposer que le mode sombre suffit

Un thème sombre mal contrasté peut rester difficile à lire.

### Désactiver `forced-colors`

Cette pratique peut rendre certains composants inutilisables.

### Ajouter uniquement des ajustements cosmétiques

Les préférences utilisateur doivent avoir un effet réel sur l'interface.

### Ne pas tester

Le support théorique d'une media query ne garantit pas une implémentation correcte.

## Compatibilité et support

Toutes les media queries présentées ne bénéficient pas du même niveau de support.

En pratique :

- `prefers-reduced-motion` est largement supportée ;
- `prefers-color-scheme` est très largement supportée ;
- `forced-colors` est bien prise en charge sur Windows ;
- `prefers-contrast` progresse mais son support reste plus variable ;
- `prefers-reduced-transparency` et `prefers-reduced-data` sont plus expérimentales.

La documentation MDN doit être consultée avant toute utilisation en production.

## Conclusion

Les media queries liées aux préférences utilisateur constituent un outil puissant pour rendre les interfaces plus adaptatives et plus accessibles.

Elles permettent de tenir compte de besoins concrets exprimés directement par les utilisateurs : réduction des animations, augmentation du contraste, adaptation des couleurs, diminution des effets visuels ou optimisation de la consommation de données.

Leur mise en œuvre est généralement simple, mais leur impact sur le confort d'utilisation peut être considérable.

Comme souvent en accessibilité numérique, quelques lignes de code bien pensées peuvent améliorer significativement l'expérience de nombreux utilisateurs.

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
