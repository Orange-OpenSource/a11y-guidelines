# Liste des critères incontournables

<script>$(document).ready(function () {
    setBreadcrumb([{"label":"Liste des critères incontournables"}]);
});</script>

<span data-menuitem="incontournables"></span>

Ce socle de critères destiné aux sites et applications web Orange permet d’éviter les principales erreurs d’accessibilité. Il s’agit d’un sous-ensemble des exigences d’accessibilité.   
La mise en œuvre de ce socle ne permet pas d’obtenir à coup sûr un site accessible, mais pose les fondations qui permettent de s’engager dans une démarche de mise en accessibilité progressive.

Le respect de la charte Orange appelée la Brand (<span lang="en">Design for digital platforms Guideline</span>), disponible sur [le site de la marque Orange](http://design.orange.com/) est un prérequis à l’utilisation de ce socle.
Certains points déjà présents dans la charte Orange (utilisation des couleurs, alignement du texte…) n’ont pas été repris dans cette liste de critères.

Deux versions sont disponibles&nbsp;
- **La première version** n’aborde pas le code, elle s’adresse aux concepteurs de produits, designers, responsables de projet, etc.
- **La seconde version** aborde le code et s’adresse aux développeurs, aux responsables techniques, aux équipes de validation, qualification, etc.

<ul class="nav nav-tabs" role="tablist">
<li class="nav-item">
<a class="nav-link active" id="incontournables-concepteurs-tab" data-toggle="tab" href="#incontournables-concepteurs" role="tab" aria-controls="incontournables-concepteurs" aria-selected="true">Concepteurs</a>
</li>
<li class="nav-item">
<a class="nav-link" id="incontournables-developpeurs-tab" data-toggle="tab" href="#incontournables-developpeurs" role="tab" aria-controls="incontournables-developpeurs" aria-selected="false">Développeurs</a>
</li>
</ul>
<div class="tab-content">
<div class="tab-pane show active" id="incontournables-concepteurs" role="tabpanel" aria-labelledby="incontournables-concepteurs-tab">

## Contenu textuel

S'assurer que les contenus textuels soient structurés avec la sémantique appropriée

- [Donner un titre aux pages](titre-pages.html)
- [Donner des titres aux rubriques](#)

## Contenu non-textuel

S'assurer, qu'une alternative aux contenus non-textuels soit proposée à l'utilisateur

- [Définir des équivalents textuels](#)
- [Rendre accessible les pistes audio ou vidéo](#)
- [Éviter les captcha](#)

## Couleurs et contrastes

S'assurer que les couleurs utilisés ne posent pas de problème à l'utilisateur

- [Assurer un contraste suffisant entre texte et fond](#)
- [Ne pas utiliser la couleur ou l’information sensorielle comme seule source d’information](#)

## Navigation générale

S'assurer que l'utilisateur navigue facilement dans une page et plus globalement dans un site

- [Libellé des liens et des boutons](#)
- [Éviter les boites de dialogues et l’ouverture de nouvelles fenêtres](#)
- [Fournir des liens d’évitement](#)
- [Permettre le contrôle des animations](#)
- [Situer explicitement la page dans le site et fournir plusieurs moyens d'y accéder](#)

## Navigation clavier

S'assurer que l'utilisateur puisse naviguer uniquement à l'aide du clavier

- [Permettre la navigation au clavier](#)
- [Assurer la visibilité du focus](#)

## Mise en page

S'assurer que la mise en page soit adaptée à l'utilisateur.

- [Agrandissement de texte et adaptation à la taille d'affichage](#)
- [Permettre d'aérer le texte](#)
- [Identifier et conserver la cohérence des regroupements et des différentes régions de la page](#)
- [Définir des zones sensibles de taille suffisante](#)

## Formulaires

S'assurer que l'utilisateur puisse efficacement compléter les formulaires

- [Rendre utilisables les formulaires](#)

## Tactile et interactions

S'assurer que l'utilisateur garde le contrôle sur les interactions, en particulier tactiles

- [Proposer une alternative aux gestuelles complexes](#)
- [Donner accès au contenu quelle que soit l'orientation de l'écran](#)

</div>
<div class="tab-pane" id="incontournables-developpeurs" role="tabpanel" aria-labelledby="incontournables-developpeurs-tab">

## Contenu textuel

S'assurer que les contenus textuels soient structurés avec la sémantique appropriée

- [Donner un titre aux pages](titre-pages.html)
- [Donner des titres aux rubriques](titre-rubriques.html)
- [Respecter la sémantique HTML](semantique-html.html)
- [Indiquer la langue principale et les changements de langue](changement-langue.html)
- [Structurer les tableaux de données](tableaux.html)

## Contenu non-textuel

S'assurer, qu'une alternative aux contenus non-textuels soit proposée à l'utilisateur

- [Fournir un équivalent textuel pour les images et les cadres](equivalent-textuel.html)
- [Rendre accessible les pistes audio ou vidéo](audio-video.html)
- [Éviter les captcha](captcha.html)

## Couleurs et contrastes

S'assurer que les couleurs utilisés ne posent pas de problème à l'utilisateur

- [Assurer un contraste suffisant entre texte et fond](contrastes.html)
- [Ne pas utiliser la couleur ou l’information sensorielle comme seule source d’information](information-sensorielle.html)

## Navigation générale

S'assurer que l'utilisateur navigue facilement dans une page et plus globalement dans un site

- [Rendre les intitulés des liens et des boutons compréhensibles hors contexte](intitules-hors-contexte.html)
- [Prévenir l’utilisateur de l’ouverture d’une nouvelle fenêtre](nouvelle-fenetre.html)
- [Fournir des liens d’évitement](liens-evitement.html)
- [S’assurer que l’utilisateur garde le contrôle lors des interactions](controle-interactions.html)
- [Fournir des accès multiples et une localisation](acces-multiples.html)
- [Permettre de connaître le résultat d'une interaction utilisateur à l'aide de messages contextuels](message-contextuel.html)
- [Permettre le contrôle des animations](controle-animations.html)

## Navigation clavier

S'assurer que l'utilisateur puisse naviguer uniquement à l'aide du clavier

- [Permettre d’utiliser les principales fonctionnalités de l’application au clavier](utilisation-clavier.html)
- [Rendre le parcours du focus séquentiel et logique sans piège clavier](parcours-focus.html)
- [Rendre visible le focus en toute circonstance](visibilite-focus.html)

## Mise en page

S'assurer que la mise en page soit adaptée à l'utilisateur.

- [Utiliser des tailles relatives et faire du web adaptatif](adaptatif.html)
- [Permettre d'aérer le texte](aerer-texte.html)
- [Identifier et conserver la cohérence des regroupements et des différentes régions de la page](coherence-navigation.html)
- [Définir des zones sensibles de taille suffisante](taille-zones.html)

## Formulaires

S'assurer que l'utilisateur puisse efficacement compléter les formulaires

- [Associer une étiquette pertinente à chaque champ de formulaire](etiquette-formulaires.html)
- [Détecter, identifier les erreurs et suggérer des corrections](identifier-erreurs.html)

## Tactile et interactions

S'assurer que l'utilisateur garde le contrôle sur les interactions, en particulier tactiles

- [Autoriser l'utilisation du zoom](autoriser-zoom.html)
- [Permettre d'annuler le déclenchement des interactions gestuelles](annuler-gestuelle.html)
- [Proposer une alternative aux gestuelles complexes](alternative-gestures.html)
- [Donner accès au contenu quelle que soit l'orientation de l'écran](orientation-ecran.html)

## Aides techniques

Permettre à l’utilisateur de lecteur d’écran d’accéder aux principales fonctionnalités de l’application, mais aussi s’assurer pour tous les utilisateurs de l’utilisabilité de l’application

- [S’assurer que les principales fonctionnalités sont utilisables avec les lecteurs d’écran](lecteur-ecran.html)

</div>
</div>

<!--  This file is part of a11y-guidelines | Our vision of mobile & web accessibility guidelines and best practices, with valid/invalid examples.
 Copyright (C) 2016  Orange SA
 See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). -->