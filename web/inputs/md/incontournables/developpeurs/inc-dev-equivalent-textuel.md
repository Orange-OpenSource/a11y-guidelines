# Fournir un équivalent textuel pour les images et les cadres

<script>$(document).ready(function () {
    setBreadcrumb([
        {"label":"Critères WCAG par thème - Développeurs", "url": "./incontournables.html#dev"},
        {"label":"Fournir un équivalent textuel pour les images et les cadres"}
    ]);
});</script>

<span data-menuitem="incontournables"></span>

**Cible&nbsp;:** tout le monde, et en particulier les personnes déficientes visuelles ou cognitives.  
**Quand&nbsp;:** lors de la conception et lors du développement.

**Description&nbsp;:** 

Avant toutes choses, il ne faut pas utiliser une image-texte lorsque cela n'est pas nécessaire ou que l'image peut être remplacée par une mise en forme du texte en <abbr>CSS</abbr>.

Mettre, dans toute balise `img`, un attribut `alt` pertinent&nbsp;: 
- Pour les images cliquables&nbsp;: préciser la fonction&nbsp;/ la cible du lien dans l’attribut `alt`.
- Pour les images porteuses d’information&nbsp;: mettre un `alt` décrivant l’information contenue dans l’image.
- Pour les images contenant du texte&nbsp;: mettre un attribut `alt` reprenant au moins le texte de l’image.
- Pour les images décoratives&nbsp;: mettre un attribut `alt` vide.
- Pour les images dont le contenu du `alt` serait trop long (schémas, graphes…), mettre à proximité de l’image à décrire, sa description sous forme de texte dans la page ou, un lien pointant vers une page <abbr>HTML</abbr> contenant cette description.

Mettre un attribut `title` décrivant le contenu et/ou la fonction de toute `frame` ou `iframe`. Si la `frame` ou `iframe` ne porte pas d’information pour l’utilisateur (purement technique), la rendre invisible cf. exemple: [Masquer les iframe techniques de manière accessible](./exemples/iframes-techniques/index.html)

**À vérifier&nbsp;:**

- S'assurer que les images ne peuvent être remplacées par du texte mis en forme
- Toute balise `img` doit posséder un attribut `alt`.
- Pour les images non-porteuses d’information, il est préférable de les passer en image de fond <abbr>CSS</abbr>.
- Pour les graphiques, la solution peut être de mettre un lien sous l’image permettant d’accéder à un tableau de chiffres (le faire apparaître dans la même page ou sur une autre page).

**Objectif utilisateur&nbsp;:**
Permettre l’accès à l’information incluse dans une image pour des utilisateurs qui n’y ont pas accès et éviter des images inutiles.

Point bloquant&nbsp;: une image sans description textuelle est inexploitable par des personnes ayant des déficiences visuelles ou celles n’affichant pas les images (mobile, faible bande passante…).

**Objectif technique&nbsp;:**

Améliorer le référencement naturel.

**Exemples valides&nbsp;:**      
`<a href="./home"><img src="logo_orange.jpg" alt="Orange, retour à l’accueil"></a>`  
`<img src="banner_bouquet_famille.png" alt="Bon plan, bouquet famille max à 2 euros par mois pendant 12 mois au lieu de 16 euros.">`  
`<iframe title="contenu publicitaire" id="cool_ads_iframe_/0101/woo_rec_1_300x250_0" height="250" width="300">`


**Exemple d’alternative vide&nbsp;:**  
Dans l’exemple ci-dessous, le pictogramme à droite n’a pas besoin d’être vocalisé puisque le texte situé à gauche apporte déjà l’information.  
Renseigner l’attribut `alt` dans ce cas apporterait une information redondante.  

![exemple d’image décorative](./images/service-24.png)  
  
`<h3>Le service 24h garanti</h3>`  
`<img src="service-24.png" alt="">`

**Outils :**  
L'extension <a href="https://chrispederick.com/work/web-developer/" lang="en">Web developer</a> (possibilité d'afficher les alternatives textuelles de toutes les images).

**Référence <abbr>WCAG</abbr>&nbsp;:**  
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#non-text-content">1.1.1 Non-text Content</a>
- <a lang="en" href="https://www.w3.org/WAI/WCAG21/Understanding/images-of-text">1.4.5 Images of text</a>

<!--  This file is part of a11y-guidelines | Our vision of mobile & web accessibility guidelines and best practices, with valid/invalid examples.
 Copyright (C) 2016  Orange SA
 See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). -->