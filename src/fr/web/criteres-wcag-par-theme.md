---
title: "Liste des critères WCAG par thème"
boostedJS: true
---

# Liste des critères WCAG par thème

Ce socle de critères destiné aux sites et applications web Orange permet d’éviter les principales erreurs d’accessibilité. Il s’agit d’un sous-ensemble des exigences d’accessibilité.   
La mise en œuvre de ce socle ne permet pas d’obtenir à coup sûr un site accessible, mais pose les fondations qui permettent de s’engager dans une démarche de mise en accessibilité progressive.

Le respect de la charte Orange appelée la Brand (<span lang="en">Design for digital platforms Guideline</span>), disponible sur [le site de la marque Orange](http://design.orange.com/) est un prérequis à l’utilisation de ce socle.
Certains points déjà présents dans la charte Orange (utilisation des couleurs, alignement du texte…) n’ont pas été repris dans cette liste de critères.

Trois versions sont disponibles&nbsp;
- **La version conception** n’aborde pas le code, elle s’adresse aux concepteurs de produits, designers, responsables de projet, etc.
- **La version développement** aborde le code et s’adresse aux développeurs, aux responsables techniques, aux équipes de validation, qualification, etc.
- **La version tests** présente les procédures à réaliser afin de valider la conformité de chaque recommandation. Elle s’adresse aux concepteurs, développeurs, qualifieurs, etc. Pour tirer le meilleur partie de ces tests, il faut utiliser [une méthode de tests d'accessibilité et des outils](https://a11y-guidelines.orange.com/web/methodes-outils.html)

<ul class="nav nav-tabs" role="tablist">
<li class="nav-item">
<a class="nav-link active" id="incontournables-concepteurs-tab" data-toggle="tab" href="#incontournables-concepteurs" role="tab" aria-controls="incontournables-concepteurs" aria-selected="true">Conception</a>
</li>
<li class="nav-item">
<a class="nav-link" id="incontournables-developpeurs-tab" data-toggle="tab" href="#incontournables-developpeurs" role="tab" aria-controls="incontournables-developpeurs" aria-selected="false">Développement</a>
</li>
<li class="nav-item">
<a class="nav-link" id="incontournables-testeurs-tab" data-toggle="tab" href="#incontournables-testeurs" role="tab" aria-controls="incontournables-testeurs" aria-selected="false">Tests</a>
</li>
</ul><div class="tab-content"><div class="tab-pane show active" id="incontournables-concepteurs" role="tabpanel" aria-labelledby="incontournables-concepteurs-tab">

## Contenu textuel

S’assurer que les contenus textuels soient structurés avec la sémantique appropriée

- [Donner un titre aux pages](../designer/titre-pages/)
- [Donner des titres aux rubriques](../designer/titres-rubriques/)

## Contenu non-textuel

S’assurer, qu’une alternative aux contenus non-textuels soit proposée à l’utilisateur

- [Définir des équivalents textuels](../designer/equivalents-textuels/)
- [Rendre accessible les pistes audio ou vidéo](../designer/audio-ou-video/)
- [Éviter les captcha](../designer/captcha/)

## Couleurs et contrastes

S’assurer que les couleurs utilisés ne posent pas de problème à l’utilisateur

- [Assurer un contraste suffisant entre texte et fond](../designer/contraste-couleurs/)
- [Ne pas utiliser la couleur ou l’information sensorielle comme seule source d’information](../designer/couleur-seule-source-information/)

## Navigation générale

S’assurer que l’utilisateur navigue facilement dans une page et plus globalement dans un site

- [Libellé des liens et des boutons](../designer/libelle-liens-boutons/)
- [Éviter les boites de dialogues et l’ouverture de nouvelles fenêtres](../designer/boites-dialogues-nouvelles-fenetres/)
- [Fournir des liens d’évitement](../designer/liens-evitement/)
- [Permettre le contrôle des animations](../designer/controle-animations/)
- [Situer explicitement la page dans le site et fournir plusieurs moyens d’y accéder](../designer/situer-explicitement-page/)

## Navigation clavier

S’assurer que l’utilisateur puisse naviguer uniquement à l’aide du clavier

- [Permettre la navigation au clavier](../designer/navigation-clavier/)
- [Assurer la visibilité du focus](../designer/visibilite-focus/)

## Mise en page

S’assurer que la mise en page soit adaptée à l’utilisateur.

- [Agrandissement de texte et adaptation à la taille d’affichage](../designer/agrandissement-adaptation/)
- [Permettre d’aérer le texte](../designer/aerer-le-texte/)
- [Identifier et conserver la cohérence des regroupements et des différentes régions de la page](../designer/coherence-regroupements-regions/)
- [Définir des zones sensibles de taille suffisante](../designer/taille-zones-sensibles/)

## Formulaires

S’assurer que l’utilisateur puisse efficacement compléter les formulaires

- [Rendre utilisables les formulaires](../designer/formulaires/)

## Tactile et interactions

S’assurer que l’utilisateur garde le contrôle sur les interactions, en particulier tactiles

- [Proposer une alternative aux gestuelles complexes](../designer/alternative-gestuelles-complexes/)
- [Donner accès au contenu quelle que soit l’orientation de l’écran](../designer/orientation-ecran/)

</div>
<div class="tab-pane" id="incontournables-developpeurs" role="tabpanel" aria-labelledby="incontournables-developpeurs-tab">
<h2 id="dev-contenu-textuel">Contenu textuel</h2>

S’assurer que les contenus textuels soient structurés avec la sémantique appropriée

- [Donner un titre aux pages](../developper/titre-pages/)
- [Donner des titres aux rubriques](../developper/titres-rubriques/)
- [Respecter la sémantique HTML](../developper/semantique-html/)
- [Indiquer la langue principale et les changements de langue](../developper/indiquer-langue/)
- [Structurer les tableaux de données](../developper/tableaux-donnees/)


<h2 id="dev-contenu-non-textuel">Contenu non-textuel</h2>

S’assurer, qu’une alternative aux contenus non-textuels soit proposée à l’utilisateur

- [Fournir un équivalent textuel pour les images et les cadres](../developper/equivalent-textuel-images-cadres/)
- [Rendre accessible les pistes audio ou vidéo](../developper/audio-video/)
- [Éviter les captcha](../developper/captcha/)

<h2 id="dev-couleurs-et-contrastes">Couleurs et contrastes</h2>

S’assurer que les couleurs utilisés ne posent pas de problème à l’utilisateur

- [Assurer un contraste suffisant entre texte et fond](../developper/contraste-couleurs/)
- [Ne pas utiliser la couleur ou l’information sensorielle comme seule source d’information](../developper/couleur-source-information/)

<h2 id="dev-navigation-generale">Navigation générale</h2>

S’assurer que l’utilisateur navigue facilement dans une page et plus globalement dans un site

- [Rendre les intitulés des liens et des boutons accessibles](../developper/intitules-liens-boutons/)
- [Prévenir l’utilisateur de l’ouverture d’une nouvelle fenêtre](../developper/nouvelle-fenetre/)
- [Fournir des liens d’évitement](../developper/liens-evitement/)
- [S’assurer que l’utilisateur garde le contrôle lors des interactions](../developper/controle-interactions/)
- [Fournir des accès multiples et une localisation](../developper/acces-multiples-localisation/)
- [Permettre de connaître le résultat d’une interaction utilisateur à l’aide de messages contextuels](../developper/messages-contextuels/)
- [Permettre le contrôle des animations](../developper/controle-animations/)


<h2 id="dev-navigation-clavier">Navigation clavier</h2>

S’assurer que l’utilisateur puisse naviguer uniquement à l’aide du clavier

- [Permettre d’utiliser les principales fonctionnalités de l’application au clavier](../developper/fonctionnalites-clavier/)
- [Rendre le parcours du focus séquentiel et logique sans piège clavier](../developper/parcours-focus/)
- [Rendre visible le focus en toute circonstance](../developper/visibilite-focus/)


<h2 id="dev-mise-en-page">Mise en page</h2>

S’assurer que la mise en page soit adaptée à l’utilisateur.

[Utiliser des tailles relatives et faire du web adaptatif](../developper/tailles-relatives/)
[Permettre d’aérer le texte](../developper/aerer-texte/)
[Identifier et conserver la cohérence des regroupements et des différentes régions de la page](../developper/coherence-regroupements-regions/)
[Définir des zones sensibles de taille suffisante](../developper/taille-zones-sensibles/)


<h2 id="dev-formulaires">Formulaires</h2>

S’assurer que l’utilisateur puisse efficacement compléter les formulaires

- [Rendre accessible les champs de formulaire](../developper/champs-formulaire/)
- [Détecter, identifier les erreurs et suggérer des corrections](../developper/erreurs-corrections/)


<h2 id="dev-tactile-et-interactions">Tactile et interactions</h2>

S’assurer que l’utilisateur garde le contrôle sur les interactions, en particulier tactiles

- [Autoriser l’utilisation du zoom](../developper/utilisation-zoom/)
- [Permettre d’annuler le déclenchement des interactions](../developper/annuler-declenchement-interactions/)
- [Proposer une alternative aux gestuelles complexes](../developper/alternative-gestuelles-complexes/)
- [Donner accès au contenu quelle que soit l’orientation de l’écran](../developper/orientation-ecran/)


<h2 id="dev-aides-techniques">Aides techniques</h2>

Permettre à l’utilisateur de lecteur d’écran d’accéder aux principales fonctionnalités de l’application, mais aussi s’assurer pour tous les utilisateurs de l’utilisabilité de l’application

- [S’assurer que les principales fonctionnalités sont utilisables avec les lecteurs d’écran](../developper/fonctionnalites-lecteurs-ecran/)


</div>
<div class="tab-pane" id="incontournables-testeurs" role="tabpanel" aria-labelledby="incontournables-testeurs-tab">
<div class="row">
<section id="refTests" class="col-md-8 panel-group accordion" id="accordion" role="tablist" aria-multiselectable="true">
<h2 id="test-contenu-textuel">Contenu textuel</h2>
<h2 id="test-contenu-non-textuel">Contenu non-textuel</h2>
<h2 id="test-couleurs-et-contrastes">Couleurs et contrastes</h2>
<h2 id="test-navigation-generale">Navigation générale</h2>
<h2 id="test-navigation-clavier">Navigation clavier</h2>
<h2 id="test-mise-en-page">Mise en page</h2>
<h2 id="test-formulaires">Formulaires</h2>
<h2 id="test-tactile-et-interactions">Tactile et interactions</h2>
<h2 id="test-aides-techniques">Aides techniques</h2>
</section>
<aside id="filter" class="col-md-4">

<h2>Filtres</h2>
<div id="feedback"></div>
<h3>Profils</h3>
<ul id="profils" class="list-unstyled"></ul>
<h3>Outils</h3>
<ul id="types" class="list-unstyled"></ul>
<div id="filter-footer"></div>
</aside>
</div>
</div>
</div>
