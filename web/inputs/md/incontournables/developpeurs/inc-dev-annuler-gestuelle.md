# Permettre d'annuler le déclenchement des interactions gestuelles

<script>$(document).ready(function () {
    setBreadcrumb([
        {"label":"Critères WCAG par thème - Développeurs", "url": "./incontournables.html#dev"},
        {"label":"Permettre d'annuler le déclenchement des interactions gestuelles"}
    ]);
});</script>

<span data-menuitem="incontournables"></span>



**Cible&nbsp;:** Facilite l'annulation pour tous les utilisateurs en cas d'erreur sur la cible.
Aide les personnes ayant des déficiences visuelles, des limitations cognitives et des déficiences motrices.
Les personnes incapables de détecter les changements de contexte sont moins susceptibles d'être désorientées lors de la navigation sur un site.

**Quand&nbsp;:** lors du développement.

**Description&nbsp;:**  
Lors d'une interaction gestuelle mono-point, au moins une condition est vraie :
- l'événement descendant du pointeur (<span lang="en">MouseDown</span>) n'est pas utilisé pour effectuer une partie de la fonction
- Pouvoir abandonner ou annuler, la fonction est terminée sur l'événement montant (<span lang="en">MouseDown</span>) et un mécanisme est disponible pour abandonner la fonction avant la fin ou pour annuler la fonction une fois terminée
- Pouvoir sur l'événement montant inverser tout résultat de l'événement descendant précédent
- Terminer la fonction sur l'événement est essentiel. Note : les fonctions qui émulent un appui clavier ou un pavé numérique sont considérées comme essentielles. 

**Référence <abbr>WCAG</abbr>&nbsp;:**  
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#pointer-cancellation">2.5.2 Pointer Cancellation</a>

<!--  This file is part of a11y-guidelines | Our vision of mobile & web accessibility guidelines and best practices, with valid/invalid examples.
 Copyright (C) 2016  Orange SA
 See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). -->