---
title: "Tester l'accessibilité d'une application iOS"
abstract: "Description des principaux outils et méthodes de tests pour évaluer rapidement l'accessibilité d'une application iOS"
titleBeforeTag: true
date: "2024-031-01"
tags:
  - mobile
  - beginner
---

## Présentation et paramétrage des options d'accessibilité

### Présentation des principales options
- **Voice Over** : c'est le lecteur d'écran pour tous les devices Apple (iPhone, iPad, MacOS). Il permet de vocaliser toutes les informations présentes à l'écran. Outil indispensable pour les non-voyants et mal-voyants.
- **Contrôle de sélection** : cette option permet d'utiliser son téléphone à l'aide d'un accessoire extérieur, de mouvements de tête ou encore de sons. Cet outil est principalement utilisé par les personnes atteintes d'une déficiece motrice.
- **Police plus grande** : permet d'ajuster la taille des polices de caractères dans les applications qui gèrent cette option

### Paramétrage des raccourcis d'accessibilité
Pour plus de facilité, il est recommandé d'ajouter les outils indispensables dans les raccourcis d'accessibilité
- Réglages > Accessibilité > Raccourci Accessibilité
- Choisir à minima : "Contrôle de sélection" et "VoiceOver“
- Vous pouvez aussi ajouter "Contrôle vocal" et "Accès complet au clavier"
  
![image](https://github.com/Orange-OpenSource/a11y-guidelines/assets/105045667/74baf176-593e-499e-a0a8-8f1267216b3d)

**Le raccourci d'accessibilité s'active en appuyant 3 fois sur le bouton latéral de l'iPhone.**

Vous pouvez aussi ajouter les raccourcis d’accessibilité au centre de contrôle (Réglages > Centre de contrôle) pour y accéder sans avoir à réaliser la manipulation avec le bouton latéral.

![image](https://github.com/Orange-OpenSource/a11y-guidelines/assets/105045667/423eeffd-e3db-40c4-94ff-041da2ebe565)

### Paramétrage du Contrôle de sélection
Aller dans Réglages > Accessibilité	> Contrôle de sélection > Boutons
Sans dispositif externe, il convient de configurer simplement :
- mode: “Bouton”
- type: “Ecran” 
- action: “Sélectionner un élément”
 
![image](https://github.com/Orange-OpenSource/a11y-guidelines/assets/105045667/0e85631b-a638-4b6e-af34-a3abed2e439a)

De cette manière, une succession de taps n'importe où sur l'écran permettra de contrôler l'avancée du focus et les actions associées (nous détaillerons le principe plus bas dans l'article).

### "Police plus grande" dans le centre de contrôle
Toujours pour faciliter l'accès aux fonctions d'accessibilité, il est possible d'ajouter le réglage de la taille des textes.
Aller dans Réglages > Centre de contrôle et sélectionner "Taille du texte".
Vous pourrez alors accéder facilement à l'option.

![image](https://github.com/Orange-OpenSource/a11y-guidelines/assets/105045667/20e7a11e-d3f8-481d-a021-ec4f7ab4632a)

## Prise en main des options d'accessibilité

### Tester avec le contrôle de sélection
Utiliser le contrôle de sélection permet de vérifier principalement deux choses : l'ordre du focus et l'accessibilité des éléments interactifs.
1. Activer le contrôle de sélection. 
2. Le focus s'affiche alors et commence à se déplacer d'un conteneur à l'autre (par exemple, le header, la vue principale, la barre de navigation...).
3. Pour que le focus se déplace à l'intérieur d'un conteneur, il suffit de taper une fois lorsque le focus arrive sur ce conteneur.
4. Dès lors, un tap supplémentaire fera apparaître les options d'intéractions possibles avec l'élément ayant le focus (tap, défilement haut/bas, glissé...)

![image](https://github.com/Orange-OpenSource/a11y-guidelines/assets/105045667/6fde5e3b-5084-4199-8e09-0925d3a763cf)



