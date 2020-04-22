---
title: "Assurer la visibilité du focus"
---

# Assurer la visibilité du focus

**Cible&nbsp;:** tout le monde et en particulier les personnes déficientes visuelles, motrices, cognitives et en mobilité.  
**Quand&nbsp;:** lors de la conception graphique et lors du développement.

**Description&nbsp;:**  
La position du focus clavier doit être visible par tous les utilisateurs. Par défaut, le navigateur entoure l’élément avec des pointillés ou un cadre de couleur. Globalement, ce comportement peut être modifié (nous préconisons au moins `2px` pour ce cadre pointillé) ou remplacé (inversion de couleur, modification de la couleur de fond/texte...) pour être rendu plus visible mais ne doit pas être supprimé. 
Veiller à fournir un niveau de contraste suffisant de 3:1 par rapport à la couleur de fond pour rendre visible le focus (cf. [mesurer le niveau de contraste des couleurs](methodes-outils-contrastes.html)).
De plus, il faut vérifier la visibilité du focus sur tous les éléments focusables, notamment, car la couleur de fond de l'élément peut être la même que le focus et donc, masquer celui-ci. 
Les utilisateurs qui naviguent à l’aide du clavier (touche TAB) ont besoin de connaître la position du focus à tout moment.

L’effet visible à la prise du focus doit être étudié dès la conception graphique au même titre que l’effet visible au survol du pointeur de la souris.
    
**Exemples valides&nbsp;:**  
Dans les captures d’écran suivantes, le focus est positionné sur le lien «&nbsp;209 SMS/mois&nbsp;».  
La première capture présente le comportement par défaut (focus représenté par des pointillés).
Dans la seconde capture, les pointillés ont été supprimés, mais un encadré permet d’indiquer de manière explicite l’emplacement du focus.  
![capture d’écran présentant l’affichage du focus par défaut](images/focus.png)
![capture d’écran présentant un comportement personnalisé pour l’affichage du focus](images/focus2.png)
