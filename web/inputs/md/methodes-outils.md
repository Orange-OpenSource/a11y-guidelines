# Méthodes et outils de test

<script>$(document).ready(function () {
    setBreadcrumb([{"label":"Outils de test"}]);
});</script>

## Introduction

Cette partie décrit une méthode d’évaluation à destination des acteurs projet pour tester la conformité d’un contenu Web et Web mobile aux critères d’accessibilité des Web Content Accessibility Guidelines (WCAG) version 2.1 niveau AA.

La description détaillée des tests se trouvent dans les critères <abbr>WCAG</abbr> par thème, partie « testeurs ». 

Les tests d’accessibilité doivent être effectués tout au long du cycle de vie des projets :
- au démarrage du projet, lors du choix du Framework, du logiciel ou progiciel… 
- dès la phase de conception sur les maquettes ou les prototypes
- lors des développements et des tests  
- en production, pour les sites de contenu

## Méthode générale

La démarche comprend 2 types de tests :
- Des **tests techniques** qui consistent à inspecter le code et le contraste des couleurs.
- Des **tests fonctionnels** qui permettent de tester le comportement de l’interface avec différentes <abbr>aides techniques</abbr> pour vérifier que les contenus évalués sont exempts de points bloquants.

En fonction de votre profil, vous pouvez réaliser les tests techniques, les tests fonctionnels ou les deux, sachant que les deux sont nécessaires pour tester l’accessibilité d’un site Web dans sa globalité. 

## Méthode pour tester le Web

### Évaluation technique

Une partie des tests peut-être réalisée automatiquement par des outils, mais la majorité nécessite un contrôle manuel.

Ces tests peuvent être réalisés par tout acteur du projet ( concepteur, développeur, testeur, rédacteur…).

**Démarche :**
- [Réaliser des tests automatiques](./methodes-outils-extensions.html) avec les extensions navigateur aXe ou Wave :
    - aXe repère des erreurs et valide la qualité du code
    - Wave repère également les erreurs d’accessibilité et précise les contrôles manuels à effectuer (cohérence du code langue avec la langue utilisée dans la page…) 
- [Mesurer le niveau de contraste des couleurs](./methodes-outils-contrastes.html)via l'outil <span lang="en">Colour Contrast Analyser</span>.
- [Vérifier le bon espacement du texte](./inc-con-aerer-texte.html) via un outil pour garantir la lisibilité du texte
- Tous les autres tests doivent être passés via une revue de code manuelle
    - exemple : tous les critères de pertinence ( alternative textuelle cohérente avec le contenu d’une image…) 

### Évaluation fonctionnelle

Ces tests peuvent être facilement réalisés par tout acteur projet. Seuls les lecteurs d’écran nécessitent un temps d’apprentissage. 

**Démarche :**
- [Tester la navigation au clavier](./methodes-outils-clavier.html) en utilisant les principaux raccourcis clavier pour naviguer au clavier dans une page web.
- [Evaluer l’agrandissement de la taille du texte](./methodes-outils-zoom.html) via la gestion du zoom navigateur.
- [Tester la navigation et la vocalisation](./methodes-outils-lecteur-ecran.html) à l’aide d’un lecteur d’écran.

## Méthode pour tester le Web mobile 

### Évaluation technique

Les tests à réaliser pour le web mobile sont identiques à ceux réalisés pour le web. Une partie des tests peut être réalisée à partir d’un ordinateur via les outils de développements présents dans les navigateurs :

- le module Vue adaptative sur Firefox 
- Device Toolbar sur Chrome

### Évaluation fonctionnelle

Ces tests doivent être réalisés avec des smartphones sur iOS et Android.

- [Tester la navigation et la vocalisation](/mobile/screen-reader.html) à l’aide d’un lecteur d’écran 

<!--  This file is part of a11y-guidelines | Our vision of mobile & web accessibility guidelines and best practices, with valid/invalid examples.
 Copyright (C) 2016  Orange SA
 See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). -->