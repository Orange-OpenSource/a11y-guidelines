---
title: "Les bonnes pratiques pour les carrousels"
abstract: "Les carrousels, qu'est-ce que c'est et comment bien les mettre en œuvre ?"
titleBeforeTag: true
date: "2022-10-28"
updateDate: "2026-01-01"
tags:
  - web
  - intermediate
---

## Pourquoi
Le carrousel est un outil de communication dynamique, souvent employé alors que ses avantages pour l'accessibilité et l'expérience utilisateur demeurent limités (<a lang="en" hreflang="en" href="https://erikrunyon.com/2013/01/carousel-interaction-stats/">Carousel Interaction Stats</a>).
Si, malgré tout, vous souhaitez en développer un, voici quelques bonnes pratiques à mettre en place pour qu'il soit utilisable.

### Règles de conformité
Pour être conforme, le carrousel doit respecter **au moins une des règles** suivantes&nbsp;:

- La durée du mouvement doit être inférieure ou égale à 5 secondes (conformément aux règles définies dans le critère <a lang="en" hreflang="en" href="https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html">2.2.2: Pause, Stop, Hide (Level A)</a>).
- L'utilisateur doit pouvoir arrêter et relancer le mouvement.
- L'utilisateur doit pouvoir afficher et masquer le contenu en mouvement.
- L'utilisateur doit pouvoir afficher la totalité de l'information sans que le contenu soit en mouvement.

### Bonnes pratiques
Pour aller un peu plus loin, voici quelques bonnes pratiques supplémentaires&nbsp;:

- **Il est préférable de positionner le bouton d'arrêt juste avant le carrousel dans l'ordre du <abbr>DOM</abbr>, afin que le bouton soit atteint facilement par la navigation clavier.**
- Le contenu doit être utilisable au clavier&nbsp;: touche <kbd>Espace</kbd> pour arrêter, <kbd>Ctrl</kbd> + <kbd>flèche gauche/droite</kbd> pour naviguer entre les diapositives, etc. <a hreflang="en" href="https://www.w3.org/WAI/ARIA/apg/patterns/carousel/">La liste complète des interactions au clavier est détaillée dans le patron de conception <abbr>ARIA</abbr> des carrousels</a>.
- Il est préférable d'arrêter la rotation lorsque l'élément reçoit le focus, et de la relancer lorsqu'il le perd.
- La visualisation de la position courante via la navigation par points permet à l'utilisateur de mieux s'y retrouver. Enfin, il est recommandé de ne pas mettre plus de trois diapositives dans le carrousel.

## Comment&nbsp;?
Afin de rendre tout ceci accessible, nous allons nous appuyer sur les attributs suivants&nbsp;:

- `role="tablist"` doit être appliqué sur l'élément englobant les onglets de pagination.
- `role="tab"` doit être appliqué sur chaque onglet de pagination.
- `tabindex="0"` doit être appliqué sur l'onglet de pagination sélectionné, les autres onglets doivent avoir l'attribut `tabindex="-1"`.
- `tabindex="-1"` retire l'élément de l'ordre de tabulation&nbsp;: il ne sera pas atteignable au clavier.
- `aria-selected="true"` pour indiquer la position courante aux lecteurs d'écran sur les boutons de la navigation par points, les autres boutons doivent avoir l'attribut `aria-selected="false"`.
- `aria-hidden="false"` sur la diapositive active.
- `aria-hidden="true"` sur les autres diapositives.
- `aria-roledescription` permet d'indiquer le type de contenu.
- `aria-label` permettra d'ajouter de l'information sur les diapositives (numéro de la diapositive active et nombre total de diapositives).
- `aria-controls` relie les boutons au contenu.

### Exemple HTML
Ci-dessous, un exemple de carrousel accessible au format HTML&nbsp;:

```html
<button type="button" class="btn btn-icon btn-outline-secondary carousel-control-play-pause pause mt-1" data-bs-target="#carouselExamplePause" data-bs-play-text="Lecture" data-bs-pause-text="Pause" title="Pause">
  <span class="visually-hidden">Pause</span>
</button>
<div id="carouselExamplePause" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExamplePause" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Diapositive 1"></button>
    <button type="button" data-bs-target="#carouselExamplePause" data-bs-slide-to="1" aria-label="Diapositive 2"></button>
    <button type="button" data-bs-target="#carouselExamplePause" data-bs-slide-to="2" aria-label="Diapositive 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="..." class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExamplePause" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Précédent</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExamplePause" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Suivant</span>
  </button>
</div>
```

### Webographie

- <a lang="en" hreflang="en" href="https://www.w3.org/WAI/ARIA/apg/patterns/carousel/">Carousel (Slide Show or Image Rotator) Pattern</a>
- <a lang="en" hreflang="en" href="https://boosted.orange.com/docs/5.3/components/carousel/">Boosted documentation about Carousel</a>
- <a lang="en" hreflang="en" href="https://erikrunyon.com/2013/01/carousel-interaction-stats/">Carousel Interaction Stats</a>
- <a lang="en" hreflang="en" href="https://www.w3.org/WAI/tutorials/carousels/">W3C - Carousels Tutorial</a>
- <a href="https://www.adilade.fr/blog/carrousel-accessible-responsive-vanillajs/">Un carrousel accessible et responsive en Vanilla JS</a>
- <a href="https://www.accede-web.com/notices/interface-riche/carrousels/">AcceDe Web - carrousels</a>
