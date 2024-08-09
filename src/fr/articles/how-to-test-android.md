---
title: "Tester l'accessibilité d'une application Android"
abstract: "Description des principaux outils et méthodes de tests pour évaluer rapidement l'accessibilité d'une application Android"
titleBeforeTag: true
date: "2024-08-09"
tags:
  - mobile
  - beginner
---

## Présentation et paramétrage des options d'accessibilité

### Présentation des principales options
- **TalkBack** : c'est le lecteur d'écran pour tous les devices Android. Il permet de vocaliser toutes les informations (utiles) présentes à l'écran. Outil indispensable pour les non-voyants et mal-voyants.
- **Navigation clavier** : permet d'utiliser son téléphone à partir d'un clavier externe (généralement en bluetooth), utile pour les personnes ayant des difficultés à utiliser l'écran tactile.
- **Voice Access** : option pour piloter son téléphone entièrement à la voix. Indispensable pour les personnes ne pouvant pas interagir physiquement avec le device ou avec un contacteur externe.
- **Taille de police** : permet d'ajuster la taille des polices de caractères dans les applications qui gèrent cette option.


### Paramétrage des raccourcis d'accessibilité
En premier lieu, il est nécessaire d'installer certains outils depuis le Play Store Google:
- Outils d’accessibilité Android (installera TalkBack et des outils supplémentaires)
- Voice Access

Pour plus de facilité, il est recommandé d'ajouter les outils indispensables dans les raccourcis d'accessibilité :
- Paramètres > Accessibilité > Paramètres avancés > Touche Accessibilité > Sélectionner des actions
- Choisir à minima: "TalkBack" et "Voice Access".

**Choisir ensuite le moyen d'accéder à ces options : soit depuis la barre de navigation soit depuis une touche flottante. Nous vous conseillons d'utliser la barre de navigation qui reste plus discrète**

  ![image](https://github.com/user-attachments/assets/feee1fed-5bf4-433b-9a7e-480056016669)

## Prise en main des options d'accessibilité

### TalkBack
La navigation à l'aide du lecteur d'écran n'est pas toujours aisée quand on débute, mais quelques gestes de base assez simples permettent de naviguer dans une application.

La description détaillée de ces gestes est disponible sur la page suivante : https://a11y-guidelines.orange.com/fr/mobile/android/talkback/

En utilisant TalkBack, vous pourrez vérifier que toutes les informations indispensables à la compréhension et à la navigation sont restituées par le lecteur d'écran, notamment :
- les éléments interactifs (boutons, liens, cases à cocher...),
- l'état des éléments (coché ou non, sélectionné ou non, déplié ou non...),
- les titres des pages doivent être restitués pour permettre aux utilisateurs de s'assurer d'un changement de page et d'en comprendre le contexte,
- les changements de contenus ou messages temporaires doivent également être lus (alertes, erreurs, changement de contenu...),
- l'ordre de lecture est cohérent par rapport à la présentation de l'information.


### Navigation clavier
Il est possible d'utiliser son téléphone seulement avec un clavier externe.
1. Connecter un clavier au téléphone
2. A présent, toutes les fonctionnalités disponibles par gestes tactiles doivent l’être également à l’aide du clavier.
La navigation se fait de la même manière que pour un clavier sur desktop, touche ```TAB``` pour avancer, ```SHIFT+TAB``` pour reculer, ```ESPACE``` ou ```ENTREE``` pour activer un élément.

Des combinaisons sont également spécifiques à l'environnement mobile Android :

![Exemples de raccourcis : CMD+ENTREE pour l'accueil, CMD+SUPPR pour retour, ALT+TAB pour récents, ALT+F4 pour fermer l'application en cours, CMD+! pour accéder aux raccourcis clavier](https://github.com/user-attachments/assets/1c9e4c15-40ae-4db7-9740-fc1de6209383)

3. La navigation clavier permet également de vérifier que l'ordre de navigation est respecté.


### Voice Access
Lorsque « Voice Access » est activé, vous pouvez énoncer des commandes comme :
- « Retourner à l’écran d’accueil »
- Appuyer sur *nom de l’élément* »
- « Ouvrir *nom de l’app* »
- « Monter le volume »

Par défaut, le nom des éléments est superposé. Aussi, pour qu'une application soit pilotable de la sorte, il faut que les composants interactifs aient un nom accessible simple et cohérent (en particulier dans le cas d'une image-lien ou image-bouton sans libellé visible).

![](https://github.com/Orange-OpenSource/a11y-guidelines/assets/105045667/3061ff62-cb7f-4b69-ac4f-4c5db5245128)

Il est également possible d'afficher le numéro des éléments ou même une grille numérotée pour les atteindre.


### Taille de police
1. Agrandir la police de caractères à partir du menu Paramètres > Écran > Taille et style de police
   
  ![](https://github.com/user-attachments/assets/ca65ff4e-79dc-470d-be74-a532f402ce11)

3. L'agrandissement maximal correspond à un zoom de 200%

4. Si l'application a été prévue pour supporter l'agrandissement, alors les textes seront correctement restitués, lisibles et sans perte d'information (pas de texte tronqué ni de superposition)

![](https://github.com/user-attachments/assets/4ace81f9-96c1-49c3-9b89-cb733feea71b)
![](https://github.com/user-attachments/assets/934976df-2dc3-444d-bd70-5fac671e76f7)


### Mode sombre
Le mode sombre est de plus en plus utilisé par les utilisateurs, il est donc fortement recommandé de tester son application en activant le "dark mode"

1. Aller dans Paramètres > Ecran (ou directement depuis le centre de contrôle)

  ![](https://github.com/user-attachments/assets/f589b599-4f72-43af-bd3b-4f9ea2636686)

2. Vérifier que tous les textes et composants sont bien visibles et respectent les niveaux de contrastes attendus.
   
   ![](https://github.com/user-attachments/assets/0b910a56-9461-4512-8d42-9b19336b3757)
