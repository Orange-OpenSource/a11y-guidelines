---
title: "Navigation au clavier"
---

# Navigation au clavier

<p class="lead">S’assurer que l’utilisateur puisse naviguer uniquement à l’aide du clavier</p>



## Permettre la navigation au clavier

**Cible&nbsp;:** tout le monde, en particulier les personnes souffrant de handicap moteur ou visuel et en mobilité.  
**Quand&nbsp;:** lors de la conception du service et lors du développement.

**Description&nbsp;:**  
Toutes les fonctionnalités doivent être utilisables à l’aide du clavier uniquement. Le focus doit pouvoir être déplacé sur tous les éléments cliquables (à l’aide de la touche <kbd>Tab</kbd>).  
Par ailleurs si des fonctionnalités sont spécifiques pour la souris (glisser-déposer, menu apparaissant au clic droit…), faire en sorte que celles-ci soient également disponibles via un autre moyen ailleurs dans l’interface (bouton, icône, menu…). 

Voir [la façon de naviguer au clavier](/fr/web/outils/methodes-et-outils-de-test/navigation-clavier/) dans un navigateur web.

**Exemple&nbsp;:**  
Dans un webmail, si un clic droit sur le dossier «&nbsp;Corbeille&nbsp;» permet d’accéder à un menu pour vider la corbeille, cette option doit être également disponible via un bouton «&nbsp;Vider la corbeille&nbsp;» ailleurs dans l’interface ou depuis un menu déroulant accessible au clavier.



## Assurer la visibilité du focus

**Cible&nbsp;:** tout le monde et en particulier les personnes déficientes visuelles, motrices, cognitives et en mobilité.  
**Quand&nbsp;:** lors de la conception graphique et lors du développement.

**Description&nbsp;:**  
La position du focus clavier doit être visible par tous les utilisateurs. Par défaut, le navigateur entoure l’élément avec des pointillés ou un cadre de couleur. Globalement, ce comportement peut être modifié (nous préconisons au moins `2px` pour ce cadre pointillé) ou remplacé (inversion de couleur, modification de la couleur de fond/texte...) pour être rendu plus visible mais ne doit pas être supprimé. 
Veiller à fournir un niveau de contraste suffisant de 3:1 par rapport à la couleur de fond pour rendre visible le focus (cf. [mesurer le niveau de contraste des couleurs](../../outils/methodes-et-outils-de-test/mesurer-contraste-couleurs/)).
De plus, il faut vérifier la visibilité du focus sur tous les éléments focusables, notamment, car la couleur de fond de l'élément peut être la même que le focus et donc, masquer celui-ci. 
Les utilisateurs qui naviguent à l’aide du clavier (touche TAB) ont besoin de connaître la position du focus à tout moment.

L’effet visible à la prise du focus doit être étudié dès la conception graphique au même titre que l’effet visible au survol du pointeur de la souris.
    
**Exemples valides&nbsp;:**  
Dans les captures d’écran suivantes, le focus est positionné sur le lien «&nbsp;209 SMS/mois&nbsp;».  
La première capture présente le comportement par défaut (focus représenté par des pointillés).
Dans la seconde capture, les pointillés ont été supprimés, mais un encadré permet d’indiquer de manière explicite l’emplacement du focus.  
![capture d’écran présentant l’affichage du focus par défaut](../../images/focus.png)
![capture d’écran présentant un comportement personnalisé pour l’affichage du focus](../../images/focus2.png)
