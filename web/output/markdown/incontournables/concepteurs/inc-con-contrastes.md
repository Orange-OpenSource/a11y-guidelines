# Assurer un contraste suffisant entre les couleurs de premier plan et de fond

<script>$(document).ready(function () {
    setBreadcrumb([
        {"label":"Critères WCAG par thème - Concepteurs", "url": "./incontournables.html"},
        {"label":"Assurer un contraste suffisant entre les couleurs de premier plan et de fond"}
    ]);
});</script>

<span data-menuitem="incontournables"></span>

**Cible&nbsp;:** tout le monde, en particulier les utilisateurs sur mobile et tablette, les personnes malvoyantes, éprouvant des difficultés de lecture ou avec un déficit d’attention et les seniors.   
**Quand&nbsp;:** dès la phase de conception et lors du développement.

**Description&nbsp;:**  
Le niveau de contraste entre le texte ou un composant graphique et l’arrière-plan doit être suffisamment élevé.
Un niveau de contraste insuffisant sera préjudiciable pour les utilisateurs ayant des difficultés visuelles ainsi que pour les utilisateurs de mobiles et tablettes se trouvant dans un environnement très lumineux.
    
**Exemple non-valide&nbsp;:**  
Le texte «&nbsp;film&nbsp;| 20h40…&nbsp;» ne présente pas un contraste suffisant. Celui-ci ne sera pas lisible par tous les utilisateurs.  

![capture d’écran présentant du texte dont le contraste n’est pas suffisant](images/contraste.png)

Les icônes ci-après sont porteuses d’information pour les utilisateurs. Elles devront alors avoir un contraste de couleur de 3:1.

![capture d’écran présentant des icônes et des graphiques dont le contraste n'est suffisant](images/icones.png)

**À vérifier&nbsp;: **
- S'assurer que le contraste entre la couleur du fond et celle du texte et également pour du texte sous forme d’image porteur d’information, est :
  - De 4.5:1 minimum pour une taille inférieure à 24px <abbr>CSS</abbr> et 19px <abbr>CSS</abbr> en gras.
  - De 3:1 minimum suffit pour une taille est supérieure à 24px <abbr>CSS</abbr> et 19px <abbr>CSS</abbr> en gras.
- S'assurer que Les objets graphiques porteurs d'information non-textuelle, les composants d’interface utilisateur et les états de l'interface (focus, hover…) ont un contraste de 3:1. Sont concernés, entre autres&nbsp;: les boutons, les boutons radios, les cases à cocher, les listes de sélection, les menus et volets de navigation, les barres d’outils, les onglets, les carrousels, les curseurs, les barres de progression, les bulles d’aides, les barres de progression, les graphiques… On n’est pas tenus d’appliquer ce critère&nbsp;:

  -	si le composant graphique ne peut pas être représenté autrement (drapeau, logotype, photos réelles, captures d'écran, diagrammes d'informations médicales utilisant les couleurs de la biologie, dégradés représentant une mesure, cartes de chaleur…)
  -	si un texte, comme un label, un tableau de donnée… apporte la même information que l’icône ou le graphique.
  -	si le manque de contraste de l’image n'empêche pas la compréhension du contenu ou d'identifier la fonction 
  - si un composant d'interface est inactif et donc peut être ignoré par l’utilisateur sans réelle perte d'information.
- **Attention&nbsp;:** pour des applications principalement utilisées en web mobile ou en mobilité, le niveau de contraste des principaux éléments doit être de 7:1 afin d’assurer une bonne lisibilité pour tous.

**Outil&nbsp;:**  
L’application <a href="http://www.paciellogroup.com/resources/contrastanalyser/" hreflang="en" lang="en">Colour Contrast Analyser</a> permet de mesurer rapidement des niveaux de contraste de couleurs (gratuit pour Mac et Windows).  
 
<!--  This file is part of a11y-guidelines | Our vision of mobile & web accessibility guidelines and best practices, with valid/invalid examples.
 Copyright (C) 2016  Orange SA
 See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). -->