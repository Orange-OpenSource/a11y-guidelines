---
title: "Tester l'accessibilité d'une application iOS"
abstract: "Description des principaux outils et méthodes de tests pour évaluer rapidement l'accessibilité d'une application iOS"
titleBeforeTag: true
date: "2024-03-04"
tags:
  - mobile
  - beginner
---

## Présentation et paramétrage des options d'accessibilité

### Présentation des principales options
- **Voice Over** : c'est le lecteur d'écran pour tous les devices Apple (iPhone, iPad, MacOS). Il permet de vocaliser toutes les informations (utiles) présentes à l'écran. Outil indispensable pour les non-voyants et mal-voyants.
- **Contrôle de sélection** : cette option permet d'utiliser son téléphone à l'aide d'un contacteur extérieur, de mouvements de tête ou encore de sons. Cet outil est principalement utilisé par les personnes atteintes d'une déficience motrice ne leur permettant pas d'utiliser les gestes usuels de l'écran tactile.
- **Navigation clavier** : permet d'utiliser son téléphone à partir d'un clavier externe (généralement en bluetooth), utile pour les personnes ayant des difficultés à utiliser l'écran tactile.
- **Contrôle vocal** : option pour piloter son téléphone entièrement à la voix. Indispensable pour les personnes ne pouvant pas interagir physiquement avec le device ou avec un contacteur externe.
- **Police plus grande** : permet d'ajuster la taille des polices de caractères dans les applications qui gèrent cette option.

### Paramétrage des raccourcis d'accessibilité
Pour plus de facilité, il est recommandé d'ajouter les outils indispensables dans les raccourcis d'accessibilité
- Réglages > Accessibilité > Raccourci Accessibilité.
- Choisir : "Contrôle de sélection", "VoiceOver“, "Contrôle vocal" et "Accès complet au clavier".
  
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

### Voice Over
La navigation à l'aide du lecteur d'écran n'est pas toujours aisée quand on débute, mais quelques gestes de base assez simples permettent de naviguer dans une application.

La description détaillée de ces gestes est disponible sur la page suivante : https://a11y-guidelines.orange.com/fr/mobile/ios/voiceover/

En utilisant Voice Over, vous pourrez vérifier que toutes les informations indispensables à la compréhension et à la navigation sont restituées par le lecteur d'écran, notamment :
- les éléments interactifs (boutons, liens, cases à cocher...),
- l'état des éléments (coché ou non, sélectionné ou non, déplié ou non...),
- les titres des pages doivent être restitués pour permettre aux utilisateurs de s'assurer d'un changement de page et d'en comprendre le contexte,
- les changements de contenus ou messages temporaires doivent également être lus (alertes, erreurs, changement de contenu...),
- l'ordre de lecture est cohérent par rapport à la présentation de l'information.
 
### Contrôle de sélection
Utiliser le contrôle de sélection permet de vérifier principalement deux choses : l'ordre du focus et l'accessibilité des éléments interactifs.
1. Activer le contrôle de sélection. 
2. Le focus s'affiche alors et commence à se déplacer d'un conteneur à l'autre (par exemple, le header, la vue principale, la barre de navigation...).
3. Pour que le focus se déplace à l'intérieur d'un conteneur, il suffit de taper une fois lorsque le focus arrive sur ce conteneur.
4. Dès lors, un tap supplémentaire fera apparaître les options d'intéractions possibles avec chaque élément ayant le focus (tap, défilement haut/bas, glissé...)

![image](https://github.com/Orange-OpenSource/a11y-guidelines/assets/105045667/6fde5e3b-5084-4199-8e09-0925d3a763cf)

### Navigation clavier
Il est possible d'utiliser son téléphone seulement avec un clavier externe.
1. Connecter un clavier au téléphone
2. Activer l’option “Accès complet au clavier”

![image](https://github.com/Orange-OpenSource/a11y-guidelines/assets/105045667/dd8e2a5a-607c-4f77-921c-be43dfdf5e2e)

3. A présent, toutes les fonctionnalités disponibles à la souris doivent l’être également à l’aide du clavier.
La navigation se fait de la même manière que pour un clavier sur desktop, touche ```TAB``` pour avancer, ```SHIFT+TAB``` pour reculer, ```ESPACE``` pour activer un élément.
Des combinaisons sont également spécifiques à l'environnement mobile iOS.
4. La navigation clavier permet également de vérifier que l'ordre de navigation est respecté.

![image](https://github.com/Orange-OpenSource/a11y-guidelines/assets/105045667/f3e1bb95-27dc-47ce-9b16-fa89a91079e8)

5. Si le focus n'est pas assez visible, il est possible d'augmenter son contraste dans les paramètres de l'option

![image](https://github.com/Orange-OpenSource/a11y-guidelines/assets/105045667/d1e966c5-bc5b-447f-a8db-b0fea6140fec)

### Contrôle vocal
Lorsque « Contrôle vocal » est activé, vous pouvez énoncer des commandes comme :
- « Revenir à l’écran d’accueil »
- « Toucher *nom de l’élément* »
- « Ouvrir *nom de l’app* »
- « Monter le volume »

Par défaut, le nom des éléments est superposé. Aussi, pour qu'une application soit pilotable de la sorte, il faut que les composants interactifs aient un nom accessible simple et cohérent (en particulier dans le cas d'une image-lien ou image-bouton sans libellé visible).

![image](https://github.com/Orange-OpenSource/a11y-guidelines/assets/105045667/ec76969b-d442-484e-8a80-c36376dcdc92)

Il est également possible d'afficher le numéro des éléments ou même une grille numérotée pour les atteindre.

### Police plus grande
1. Agrandir la police de caractères à partir du raccourci configuré plus haut

![image](https://github.com/Orange-OpenSource/a11y-guidelines/assets/105045667/20e7a11e-d3f8-481d-a021-ec4f7ab4632a)

2. Il est possible d'activer l'agrandissement de texte jusqu'à 310%, mais les recommandations d'accessibilité demandent un affichage correct jusqu'à 235%.

3. Si l'application a été prévue pour supporter l'agrandissement (Dynamic Type), alors les textes seront correctement restitués, lisibles et sans perte d'information (pas de texte tronqué ni de superposition)

![image](https://github.com/Orange-OpenSource/a11y-guidelines/assets/105045667/d40af4bc-6397-48e6-9e72-e76bf97a8df4)
![image](https://github.com/Orange-OpenSource/a11y-guidelines/assets/105045667/8a186731-ec78-4b2d-b7de-1a42ac265c4e)
![image](https://github.com/Orange-OpenSource/a11y-guidelines/assets/105045667/76ef0b5a-382b-48be-847a-4517cf0a512a)

