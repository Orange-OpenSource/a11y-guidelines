---
title: "Navigation générale"
---

# Navigation générale

## Avoir des zones de clic suffisamment grandes

**Cible&nbsp;:** pour tous et en particulier les personnes avec des déficiences motrices  
**Quand&nbsp;:** dès la phase de conception et lors du développement.

**Description&nbsp;:**  

Une taille insuffisante pour la zone d’action d’un composant peut empêcher certains utilisateurs de profiter pleinement de l’application. Cela peut engendrer des frustrations qui peuvent conduire à la désinstallation de l’application. Chaque élément cliquable de l’application doit donner à l’utilisateur une taille suffisante pour sa zone d’action.

**À vérifier&nbsp;:**

- La zone de clic a une taille d'au minimum 48 dp
- La zone de clic a une marge autour de l'élément d'au moins 8 dp
- Les erreurs de clic peuvent être annulées en déplaçant son doigt hors de la zone cliquable avant de relâcher

**Outil&nbsp;:**

L’application [<span lang="en">AccessibilityScanner</span>](https://play.google.com/store/apps/details?id=com.google.android.apps.accessibility.auditor&hl=fr) permet de tester directement vos applications sur certains critères d’accessibilité et notamment la taille des zones de clic. Disponible à partir d’Android 6. 

**Exemple valide&nbsp;:** 

Dans les exemples ci-dessous, le cadre noir correspond à la taille de la zone interactive.  
<img src="../../../images/clic_ok.png" alt="exemple de composant interactif avec une zone d’interaction assez large" width="300">

**Exemple non-valide&nbsp;:**  

<img src="../../../images/clic_ko.png" alt="exemple de composant interactif avec une zone d’interaction trop petite" width="300">

<br/><br/>
## Avoir une application utilisable quel que soit l'orientation
**Cible&nbsp;:** tout le monde et en particulier les personnes avec des déficiences visuelles ou motrices.

**Quand&nbsp;:** lors de la conception et lors du développement.

**Description&nbsp;:**
L’accès au contenu d’une application ne doit pas dépendre de l’orientation de l’écran (portrait et paysage), sauf si une orientation particulière est essentielle pour la compréhension ou l’utilisation du contenu (projection, tableau…).

**À vérifier&nbsp;:**
- L’utilisation de composants graphiques standard qui supportent les deux modes (fragments…), ou définir un `design` spécifique à chaque orientation.
- L’application n’est pas verrouillée dans un mode (portrait ou paysage).

**Exemple valide&nbsp;:**  

L'application reste utilisable en mode portrait et en mode paysage
<img src="../../../images/portrait.jpg" alt="exemple d'écran fonctionnel en mode portrait" width="300">
<img src="../../../images/paysage.jpg" alt="exemple d'écran fonctionnel en mode paysage" width="300">


<br/><br/>
## Proposer une alternative aux actions gestuelles

**Cible&nbsp;:** tout le monde et en particulier les personnes avec des déficiences visuelles et/ou motrices.
**Quand&nbsp;:** dès la phase de conception et lors du développement.

**Description&nbsp;:**

Naviguer entre plusieurs pages à l'aide d'un swipe horizontal (avec les ViewPager notamment) peut devenir très complexe pour les personnes ayant des déficiences motrices ou visuelles. Il est donc essentiel d'ajouter une alternative, à l'aide de boutons «&nbsp;suivant&nbsp;» et «&nbsp;précédent&nbsp;» par exemple.

**À vérifier&nbsp;:**

- Les actions déclenchées par un geste de l'utilisateur ou un mouvement de l'appareil dispose d'une alternative.

**Exemple valide&nbsp;:**

<img src="../../../images/scroll_h1.png" alt="exemple de scroll horizontal accessible, avec des flèches matérialisant le scroll horizontal et des points indiquant le nombre de pages disponibles et laquelle est affichée." width="300">


**Exemple non-valide&nbsp;:**

<img src="../../../images/scroll_h2.png" alt="exemple de scroll horizontal non accessible, sans informations sur l’action de scroll possible." width="300">

<br/><br/>
## Proposer des textes lisibles

**Cible&nbsp;:** tout le monde et en particulier les personnes ayant des déficiences visuelles, et les personnes dyslexiques.  
**Quand&nbsp;:** dès la phase de conception et lors du développement.

**Description&nbsp;:**

Le texte peut poser des problèmes de lisibilité lorsque celui-ci présente une police d'écriture avec de l'empâtement ou que sa taille du texte est trop petite. Il est notamment recommandé d'utiliser une taille minimum de 14sp pour les textes. 

**À vérifier&nbsp;:**

- La police d'écriture est sans serif
- Les textes sont suffisamment grands pour être lus confortablement
- Il n'y a pas d'italique utilisé

<br/><br/>
## Utiliser les composants natifs

**Cible&nbsp;:** tout le monde.  
**Quand&nbsp;:** en phase de sélection des briques logicielles et lors des développements.

**Description&nbsp;:**  

L’accessibilité est prise en compte dans les composants natifs (la plupart du temps). De plus, l’utilisation de composants standards permet à l’utilisateur de se retrouver dans une situation et un comportement habituels. La navigation dans une interface standard est donc plus confortable.  
  
Utiliser au maximum les composants natifs en modifiant leur apparence. Si aucun composant standard ne permet de répondre au besoin, créer un composant dédié basé sur un composant standard en veillant à conserver la cohérence de navigation et l’accessibilité.  
  
<br/><br/>

## Rendre adaptable les UI avec limite de temps

**Cible&nbsp;:** tout le monde et en particulier les personnes ayant des déficiences visuelles et/ou motrices.
**Quand&nbsp;:** dès la phase de conception et lors du développement.

**Description&nbsp;:**

Sur certaines applications, il arrive que l’UI change après un certain délai. C'est le cas par exemple pour les lecteurs vidéo : il est fréquent que les boutons de contrôles associés à la vidéo disparaissent après une dizaine de secondes sans interaction. 

Cette évolution automatique de l'interface pose cependant un problème pour l'accessibilité, une personne ayant peut-être besoin de plus de temps pour interagir avec les éléments. Ce délai doit donc pouvoir être adapté selon le besoin de chaque utilisateur. 

Une option d'accessibilité nommée "Time to take action" existe depuis Android 10, et permet de définir son propre timeout. En faisant appel à cette option depuis son application, il est possible d'adapter ses interfaces avec timeout à l'utilisateur.

**À vérifier&nbsp;:**

- Une UI avec limite de temps a son délai paramétrable

