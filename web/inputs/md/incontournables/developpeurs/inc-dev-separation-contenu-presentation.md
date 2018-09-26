# Séparer le contenu de l’interactivité et de la présentation

<script>$(document).ready(function () {
    setBreadcrumb([
        {"label":"Critères incontournables", "url": "./incontournables.html#dev"},
        {"label":"Séparer le contenu de l’interactivité et de la présentation"}
    ]);
});</script>

<span data-menuitem="incontournables"></span>

**Cible&nbsp;:** tout le monde, et en particulier les personnes déficientes visuelles, avec des difficultés pour lire ou avec un déficit d’attention.  
**Quand&nbsp;:** lors du développement.

**Description&nbsp;:**

Séparer strictement le contenu (<abbr>HTML</abbr>), l’interactivité (Javascript) et la présentation (<abbr>CSS</abbr>). 

**À vérifier&nbsp;:**

- Ne pas faire de mise en pages en tableaux, ceux-ci étant réservés aux données tabulaires. 
- Ne pas utiliser d'image pour afficher du texte sauf exception (présentation qui ne peut pas être réalisée via <abbr>CSS</abbr>).
- Utiliser des classes <abbr>CSS</abbr> plutôt que manipuler des styles <abbr>CSS</abbr> en ligne dans le code <abbr>HTML</abbr>.
- Ne pas utiliser les pseudo éléments <abbr>CSS</abbr> (::before, ::after…) pour afficher du contenu porteur d’information
- Ne pas câbler des événements Javascript directement dans le code <abbr>HTML</abbr> mais gérer l’interactivité dans un script ou un fichier <abbr>JS</abbr> à part.

**Objectif utilisateur&nbsp;:**

Permettre aux utilisateurs, via leur agent utilisateur ou aide technique (par exemple, leur navigateur), de modifier le rendu visuel de la page (grossissement, couleur, position…). Par exemple, de grossir le texte sans problème de mise en page.

**Objectif technique&nbsp;:**

Améliore globalement la maintenabilité.

**Référence <abbr>WCAG</abbr>&nbsp;:**
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#info-and-relationships">1.3.1 Info and Relationships</a>
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#images-of-text">1.4.5 Images of Text</a>

<!--  This file is part of a11y-guidelines | Our vision of mobile & web accessibility guidelines and best practices, with valid/invalid examples.
 Copyright (C) 2016  Orange SA
 See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). -->