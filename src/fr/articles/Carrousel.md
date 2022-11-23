---
title: "Les bonnes pratiques pour les carrousels"
abstract: "Les carrousels, qu'est-ce et comment bien les mettre en œuvre"
titleBeforeTag: true
date: "2022-10-28"
tags:
  - web
  - intermediate
---

## Pourquoi&nbsp;?
Le carrousel est un outil de communication dynamique, dont l'utilité n'est clairement pas à la hauteur de sa popularité (<a lang="en" hreflang="en" href="https://erikrunyon.com/2013/01/carousel-interaction-stats/">Carousel Interaction Stats</a>).
Si toutefois vous souhaitez malgré tout en développer un, voici quelques bonnes pratiques à mettre en place pour qu'il soit utilisable.

### Règles de conformité&nbsp;
Pour être conforme, le carrousel doit respecter **au moins une des règles** ci-dessous&nbsp;:

- La durée du mouvement doit être inférieure ou égale à 5 secondes,
- ou, l'utilisateur doit pouvoir arrêter et relancer le mouvement,
- ou, l'utilisateur doit pouvoir afficher et masquer le contenu en mouvement,
- ou, l'utilisateur doit pouvoir afficher la totalité de l'information sans le mouvement.

### Bonnes pratiques&nbsp;
Pour aller un peu plus loin, voici quelques bonnes pratiques supplémentaires&nbsp;:

- **Il vaut mieux positionner le bouton d'arrêt du carrousel juste avant celui-ci (dans le code), afin d'être atteignable rapidement par l'utilisateur.**
- Le contenu doit être manipulable avec des raccourcis clavier (touche <code>espace</code> pour arrêter, <code>Ctrl + flèche&nbsp;</code> pour &laquo;suivant&nbsp;&raquo; ou &laquo;précédent&nbsp;&raquo; etc.).
- À la prise de focus (clavier ou souris), il est préférable que la rotation du carrousel s'arrête et reprenne lors de la perte du focus.
- La visualisation de la position courante via la navigation à points permet à l'utilisateur de mieux s'y retrouver et pour finir, il est préférable de ne pas mettre plus de 3 panneaux dans le carrousel.

## Comment ?&nbsp;
Afin de rendre tout ceci accessible, nous allons pouvoir nous appuyer sur les attributs suivants&nbsp;:

- <code>role="tablist"</code> doit être appliqué sur l'élément englobant les onglets de pagination.
- <code>role="tab"</code> doit être appliqué sur chaque onglet de pagination.
- <code>tabindex="0"</code> doit être appliqué sur l'onglet de pagination sélectionné, les autres onglet doivent avoir l'attribut <code>tabindex="-1"&nbsp;</code>.
- <code>tabindex="-1"</code> omettra complètement l'élément du focus clavier, cet élément ne sera pas atteignable pour un utilisateur navigant au clavier.
- <code>aria-selected="true"</code> doit être appliqué sur l'onglet de pagination sélectionné, les autres onglets doivent avoir l'attribut <code>aria-selected="false"&nbsp;</code>.
- <code>aria-hidden="false"</code> sur le panneau affiché.
- <code>aria-hidden="true"</code> sur les autres panneaux.
- <code>aria-roledescription</code> permet d'indiquer le type de contenu.
- <code>aria-label</code> permettra d'ajouter de l'information sur les panneaux (numéro courant du panneau et le nombre total de panneau).
- <code>aria-controls</code> relie les boutons au contenu.
- <code>aria-selected</code> pour indiquer la position courante au lecteurs d'écran sur les boutons de la navigation par points.


### Exemple HTML&nbsp;
Ci-dessous, un exemple de carrousel accessible au format HTML&nbsp;:

```html
<button type="button" class="btn btn-icon btn-secondary carousel-control-play-pause pause mt-1" data-bs-target="#carouselExamplePause" data-bs-play-text="Play Carousel" data-bs-pause-text="Pause Carousel" title="Pause Carousel">
  <span class="visually-hidden">Pause Carousel</span>
</button>
<div id="carouselExamplePause" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExamplePause" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExamplePause" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExamplePause" data-bs-slide-to="2" aria-label="Slide 3"></button>
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
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExamplePause" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
```

### Sources&nbsp;

- <a href="https://www.adilade.fr/blog/carrousel-accessible-responsive-vanillajs/">Adilade - Carrousel-accessible-responsive-vanillasjs</a>
- <a href="https://www.accede-web.com/notices/interface-riche/carrousels/">AcceDe Web - carrousels</a>
- <a lang="en" hreflang="en" href="https://www.w3.org/WAI/tutorials/carousels/">W3C - Carousels Tutorial</a>
- <a lang="en" hreflang="en" href="https://erikrunyon.com/2013/01/carousel-interaction-stats/">erik runyon - Carousel Interaction Stats</a>
- <a lang="en" hreflang="en" href="https://boosted.orange.com/docs/5.2/components/carousel/#content">Boosted - Carousel</a>
