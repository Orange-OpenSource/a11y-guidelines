# Méthodes et outils de test

<script>$(document).ready(function () {
    setBreadcrumb([{"label":"Outils de test"}]);
});</script>

Orange évalue l’accessibilité d’une application ou d’un site à l’aide de trois méthodes complémentaires :

- **Évaluation technique :** inspecter le code et le contraste des couleurs pour mesurer la conformité des pages Web aux règles <abbr>WCAG</abbr> 2.0 niveau AA.

- **Évaluation fonctionnelle :** tester le comportement de l’interface avec différentes <abbr>aides techniques</abbr> pour vérifier que les contenus évalués sont exempts de points bloquants.

- **Évaluation utilisateur :** faire tester l’application par des utilisateurs en situation de handicap sur la base de tâches à accomplir afin de vérifier le niveau d’accessibilité du point de vue de l’utilisateur. 



## Évaluation technique

Une partie des tests peut-être réalisée automatiquement par des outils, mais la majorité nécessite un contrôle manuel. Les tests automatisés sont à réaliser par les acteurs projet, les tests manuels essentiellement par les experts accessibilité.

Exemple d'outils : 

- [Outils de tests automatique sur la page en cours de consultation](./methodes-outils-extensions.html)&nbsp;: extension navigateur.

- [Mesurer le niveau de contraste des couleurs](./methodes-outils-contrastes.html)&nbsp;: présentation de l'outil <span lang="en">Colour Contrast Analyser</span>.

## Évaluation fonctionnelle

Ces tests sont réalisés généralement par les experts accessibilité, ils peuvent également être menés par des acteurs projet.

Quelques exemples de tests :
- [Navigation au clavier](./methodes-outils-clavier.html)&nbsp;: liste des principaux raccourcis pour naviguer au clavier dans une page web.

- [Agrandissement de la taille du texte](./methodes-outils-zoom.html)&nbsp;: un guide sur la gestion du zoom.

- [Navigation à l’aide d’un lecteur d’écran](./methodes-outils-lecteur-ecran.html)&nbsp;: les principaux lecteurs d’écrans utilisés.

## Évaluation par des utilisateurs en situation de handicap

Ces tests consistent à faire faire à quelques utilisateurs cibles dont le poste (ou le mobile…) est équipé d’une aide technique particulière (loupe numérique d’écran, lecteur d’écran, clavier seul, plage braille) les  tâches principales de l’application. Ils permettent d’identifier les problèmes d’usage et de valider la criticité des anomalies rencontrées.  

Ces tests sont conduits par des experts accessibilité.

<!--  This file is part of a11y-guidelines | Our vision of mobile & web accessibility guidelines and best practices, with valid/invalid examples.
 Copyright (C) 2016  Orange SA
 See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). -->