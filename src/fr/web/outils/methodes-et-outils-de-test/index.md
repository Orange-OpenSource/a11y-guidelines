---
title: "Méthodes et outils de test"
---

# Méthodes et outils de test

## Introduction

Cette partie décrit une méthode d’évaluation à destination des acteurs projet pour tester la conformité d’un contenu Web et Web mobile aux critères d’accessibilité des Web Content Accessibility Guidelines (WCAG) version 2.1 niveau AA.


Pour utiliser cette méthode, voici la [description détaillée des tests d'accessibilité](/fr/web/tester/) à utiliser, en fonction de différents profils&nbsp;: qualifieurs, développeurs, concepteurs et experts. 

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
- Il existe des outils qui vous aident à tester l’accessibilité de vos contenus Web : apprenez à [réaliser des tests automatiques ou semi-automatique (levées d’alertes)](./extensions-navigateur/) avec les extensions de navigateur aXe et Wave, par exemple.  
- [Mesurer le niveau de contraste des couleurs](./mesurer-contraste-couleurs/) via l'outil <span lang="en">Colour Contrast Analyser</span>.
- [Vérifier le bon espacement du texte](/fr/web/designer/mise-en-page/#permettre-daerer-le-texte) via un outil pour garantir la lisibilité du texte
- [Désactiver les <abbr>CSS</abbr> pour vérifier plusieurs critères facilement](./desactiver-les-css/)
- Tous les autres tests doivent être passés via une revue de code manuelle, par exemple, tous les critères de pertinence (alternative textuelle cohérente avec le contenu d’une image…) 

### Évaluation fonctionnelle

Ces tests peuvent être facilement réalisés par tout acteur projet. Seuls les lecteurs d’écran nécessitent un temps d’apprentissage. 

**Démarche :**
- [Tester la navigation au clavier](./navigation-clavier/) en utilisant les principaux raccourcis clavier pour naviguer au clavier dans une page web.
- [Évaluer l’agrandissement de la taille du texte](./agrandissement-texte/) via la gestion du zoom navigateur.
- [Tester la navigation et la vocalisation](./navigation-lecteur-ecran/) à l’aide d’un lecteur d’écran.

## Méthode pour tester le Web mobile 

### Évaluation technique

Les tests à réaliser pour le web mobile sont identiques à ceux réalisés pour le web. Une partie des tests peut être réalisée à partir d’un ordinateur via les outils de développements présents dans les navigateurs :

- le module Vue adaptative sur Firefox 
- Device Toolbar sur Chrome

### Évaluation fonctionnelle

Ces tests doivent être réalisés sur smartphone, à l’aide des lecteurs d’écran mis à disposition sur iOS et Android :
- [Talkback sous Android](/fr/mobile/android/talkback/) 
- [VoiceOver sous iOS](/fr/mobile/ios/voiceover/)
