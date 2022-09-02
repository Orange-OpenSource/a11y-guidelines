---
title: "Les bonnes pratiques pour les carrousels"
abstract: "Les carrousels, qu'est-ce et comment bien les mettre en œuvre"
titleBeforeTag: true
date: "2022-08-26"
tags:
  - web
  - beginner
---

## Pourquoi&nbsp;?
Le carrousel est un outil de communication dynamique, dont l'utilité n'est clairement pas à la hauteur de sa popularité (<a href="https://erikrunyon.com/2013/01/carousel-interaction-stats/">Carousel Interaction Stats</a>)
Si toutefois vous souhaitez malgré tout en développer un, voici quelques bonnes pratiques à mettre en place pour qu'il soit utilisable.

### Règles de conformité&nbsp;
Pour être conforme, le carrousel doit respecter **au moins une des règles** ci-dessous :

- La durée du mouvement doit être inférieure ou égale à 5 secondes,
- ou, l'utilisateur doit pouvoir arrêter et relancer le mouvement,
- ou, l'utilisateur doit pouvoir afficher et masquer le contenu en mouvement,
- ou, l'utilisateur doit pouvoir afficher la totalité de l'information sans le mouvement.

### bonnes pratiques&nbsp;
<u>Pour aller un peu plus loin, voici quelques bonnes pratiques supplémentaires :</u>

Il vaut mieux implémenter le bouton d'arrêt du carrousel au début du code, afin d'être atteignable rapidement par l'utilisateur.
Le contenu doit être manipulable avec des raccourcis clavier (touche <code>espace</code> pour arrêter, <code>Ctrl + flèche</code> pour &laquo;suivant&raquo; ou &laquo;précédent&raquo; etc...)
A la prise de focus (clavier ou souris), il est préférable que la rotation du carrousel s'arrête et reprenne lors de la perte du focus.
La Visualisation de la position courante via la navigation à points permet à l'utilisateur de mieux s'y retrouver et pour finir, il est préférable de ne pas mettre plus de 3 panneaux dans le carrousel.

## Comment ?&nbsp;
Afin de rendre tout ça accessible, nous allons pouvoir nous appuyer sur les attributs suivants :

- <code>role="tablist"</code> doit être appliqué sur l'élément englobant les onglets de pagination.
- <code>role="tab"</code> doit être appliqué sur chaque onglet de pagination.
- <code>tabindex="0"</code> doit être appliqué sur l'onglet de pagination sélectionné, les autres onglet doivent avoir l'attribut <code>tabindex="-1"</code>
- <code>aria-selected="true"</code> doit être appliqué sur l'onglet de pagination sélectionné, les autres onglets doivent avoir l'attribut <code>aria-selected="false"</code>.
- <code>aria-hidden="false"</code> sur le panneau affiché.
- <code>aria-hidden="true"</code> sur les autres panneaux.
- <code>aria-roledescription</code> permet d'indiquer le type de contenu.
- <code>aria-label</code> permettra d'ajouter de l'information sur les panneaux (numéro courant du panneau et le nombre total de panneau).
- <code>aria-controls</code> relie les boutons au contenu.
- <code>aria-selected</code> pour indiquer la postion courante au lecteurs d'écran sur les boutons de la navigation par points.


### Exemple HTML&nbsp;
Ci-dessous, un exemple de carrousel accessible au format HTML

```html
<button><img src="pause.png" alt="Arrêter le défilement du carrousel" /></button>
<ul role="tablist">
  <li role="tab" tabindex="-1" aria-selected="false" aria-controls="panneau-1"><img src="puce.png" alt="Panneau 1" /></li>
  <li role="tab" tabindex="0" aria-selected="true" aria-controls="panneau-2"><img src="puce-active.png" alt="Panneau 2" /></li>
  <li role="tab" tabindex="-1" aria-selected="false" aria-controls="panneau-3"><img src="puce.png" alt="Panneau 3" /></li>
</ul>
<button><img src="precedent.png" alt="Panneau précédent" /></button>
<div>
  <div role="tabpanel" id="panneau-1" aria-hidden="true">
    [Contenu du premier panneau (masqué)]
    <a href="#" tabindex="-1">Exemple de lien</a>
  </div>
  <div role="tabpanel" id="panneau-2" aria-hidden="false">
    [Contenu du deuxième panneau (affiché, car onglet associé sélectionné)]
    <a href="#">Exemple de lien</a>
  </div>
  <div role="tabpanel" id="panneau-3" aria-hidden="true">
    [Contenu du troisième panneau (masqué)]
    <a href="#" tabindex="-1">Exemple de lien</a>
  </div>
</div>
<button><img src="suivant.png" alt="Panneau suivant" /></button>
```

### Sources&nbsp;

- <a href="https://www.adilade.fr/blog/carrousel-accessible-responsive-vanillajs/">Adilade - Carrousel-accessible-responsive-vanillasjs</a>
- <a href="https://www.accede-web.com/notices/interface-riche/carrousels/">AcceDe Web - carrousels</a>
- <a href="https://www.w3.org/WAI/tutorials/carousels/">W3C - Carousels Tutorial</a>
- <a href="https://erikrunyon.com/2013/01/carousel-interaction-stats/">erik runyon - Carousel Interaction Stats</a>