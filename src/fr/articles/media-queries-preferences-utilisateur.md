---
title: "Media queries et préférences utilisateur : adapter les interfaces aux besoins des utilisateurs"
abstract: "Les media queries liées aux préférences utilisateur permettent d'adapter automatiquement une interface aux réglages du système d'exploitation ou du navigateur. Réduction des animations, contraste renforcé, mode sombre, économie de données : ces fonctionnalités jouent un rôle important dans l'accessibilité numérique."
titleBeforeTag: true
date: "2026-05-13"
tags:
  - css
  - accessibility
  - advanced
---

Les technologies web modernes permettent de détecter certaines préférences exprimées par les utilisateurs au niveau du système d'exploitation ou du navigateur.
Ces préférences concernent notamment : les animations, le contraste, le thème visuel, la transparence ou encore la consommation de données.

Ces informations sont exposées via plusieurs **media features CSS** définies dans la spécification *Media Queries Level 5*.

Correctement utilisées, elles permettent de concevoir des interfaces plus confortables, plus robustes et plus inclusives.

Cet article propose un tour d'horizon des principales media queries liées aux préférences utilisateur, de leur impact sur l'accessibilité, des bonnes pratiques d'implémentation ainsi que des méthodes de test.

## Présentation des media queries liées aux préférences utilisateur

Une media query permet d'appliquer des styles conditionnellement en fonction de caractéristiques de l'environnement d'exécution.

Exemple classique :

```css
@media (max-width: 768px) {
  /* styles pour petits écrans */
}
```

La spécification CSS Media Queries Level 5 introduit plusieurs media features permettant de détecter des préférences utilisateur explicites.

Les plus importantes sont :

- `prefers-reduced-motion`
- `prefers-contrast`
- `prefers-color-scheme`
- `forced-colors`
- `prefers-reduced-transparency`
- `prefers-reduced-data`

Ces préférences peuvent être définies par l'utilisateur dans :

- le système d'exploitation ;
- le navigateur ;
- certains environnements d'assistance.

## Impact sur l'accessibilité

Ces media queries ont un impact direct sur l'expérience utilisateur.

### Réduction des animations

Certaines animations peuvent provoquer :

- inconfort visuel ;
- distraction ;
- fatigue cognitive ;
- voire des réactions vestibulaires chez certaines personnes.

### Augmentation du contraste

Des contrastes plus élevés facilitent la lecture pour :

- les personnes malvoyantes ;
- les personnes âgées ;
- les utilisateurs en environnement lumineux difficile.

### Adaptation du thème visuel

Le mode sombre peut améliorer le confort visuel dans certains contextes.

### Réduction de la transparence

Les effets de flou ou de transparence peuvent nuire à la lisibilité.

### Réduction de la consommation de données

Utile pour :

- les connexions limitées ;
- les forfaits mobiles restreints ;
- les zones à faible bande passante.

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
