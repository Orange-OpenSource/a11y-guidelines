# Prévenir l’utilisateur de l’ouverture d’une nouvelle fenêtre

<script>$(document).ready(function () {
    setBreadcrumb([
        {"label":"Critères incontournables", "url": "./incontournables.html#dev"},
        {"label":"Prévenir l’utilisateur de l’ouverture d’une nouvelle fenêtre"}
    ]);
});</script>

<span data-menuitem="incontournables"></span>


**Cible&nbsp;:** tout le monde, et en particulier les personnes déficientes visuelles, cognitives ou ayant un déficit d’attention.  
**Quand&nbsp;:** dès la phase de conception et lors du développement.

**Description&nbsp;:**

Prévenir l’utilisateur de l’ouverture de toute nouvelle fenêtre en l’indiquant dans l’intitulé du lien. 
En cas d’impossibilité avérée, utiliser **un attribut `title`** avec l'ensemble de l'information nécessaire (exemple : "Acheter le Nokia 7510 (nouvelle fenêtre)") et compléter l'intitulé par, au choix :
- l'utilisation d'une icône (image avec un `alt` indiquant l’ouverture d’une nouvelle fenêtre ou juste «&nbsp;(nouvelle fenêtre)&nbsp;»).
- un morceau de texte caché en <a href="./exemples/masquage/index.html">masquage accessible</a> via CSS.
- un attribut `aria-label` ou `aria-labelledby` reprenant l'intégralité du contenu du `title` (cf. [les attributs ARIA qui peuvent vous sauver](./label-ledby-describedby.html)).

**Exemple&nbsp;:**  
  
Exemple d’icône pouvant indiquer l’ouverture d’une nouvelle fenêtre.  
![capture d’écran d’un lien accompagné d’une icône indiquant l’ouverture d’une nouvelle fenêtre](./images/nouvelle-fenetre.png)  

**À vérifier&nbsp;:**
Pour tout lien ouvrant une nouvelle fenêtre ou un nouvel onglet, une mention du type «&nbsp;(nouvelle fenêtre)&nbsp;» est présente dans l’intitulé du lien, ou la mention «&nbsp;(nouvelle fenêtre)&nbsp;» est indiquée à l'utilisateur via le lecteur d'écran et via la présence d'une info-bulle sur le lien en question.

**Objectif utilisateur&nbsp;:**
Éviter l’ouverture inattendue de fenêtre, car cela peut gêner, perturber ou désorienter l’utilisateur. En particulier, pour des personnes en mobilité, utilisant des synthèses vocales ou présentant des déficiences cognitives.

**Exemple valide&nbsp;:**      
Pour un lien pointant à l’extérieur du site et ouvrant une nouvelle fenêtre, l’intitulé du lien texte «&nbsp;Accéder au site orange.com (nouvelle fenêtre)&nbsp;».
Pour une image-lien, un attribut `alt="consulter les conditions générales d’utilisation (nouvelle fenêtre)"`.    

**Référence <abbr>WCAG</abbr>&nbsp;:**   
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#on-input">3.2.2 On Input</a>

<!--  This file is part of a11y-guidelines | Our vision of mobile & web accessibility guidelines and best practices, with valid/invalid examples.
 Copyright (C) 2016  Orange SA
 See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). -->