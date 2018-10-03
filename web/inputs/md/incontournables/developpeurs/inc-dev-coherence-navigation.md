# Identifier et conserver la cohérence des regroupements et des différentes régions de la page

<script>$(document).ready(function () {
    setBreadcrumb([
        {"label":"Critères WCAG par thème - Développeurs", "url": "./incontournables.html#dev"},
        {"label":"Identifier et conserver la cohérence des regroupements et des différentes régions de la page"}
    ]);
});</script>

<span data-menuitem="incontournables"></span>

**Cible&nbsp;:** tout le monde et en particulier les personnes déficientes visuelles, cognitives ou ayant des troubles de l’attention.

**Description&nbsp;:**
Fournir des moyens d’identifier et de distinguer visuellement les différentes parties de la page et assurer la cohérence de ces régions ou regroupements dans toutes les pages.

**À vérifier&nbsp;:** 
- S’assurer que les mécanismes de navigation sont toujours situés au même endroit dans un ensemble de page.
- S’assurer que les composants et les regroupements qui ont la même fonction sont identifiés (visuellement et sémantiquement) de la même façon.
- S’assurer que les zones de la page sont clairement délimitées (bordures, filets, contraste suffisant…) ou qu’il y a un moyen de distinguer visuellement les groupes (sous-menu, liste déroulante…) ainsi que les différentes régions de la page.

**Objectif utilisateur&nbsp;:**
Permettre aux utilisateurs d’identifier et localiser les éléments d’interface dans toutes les pages.

**Exemple valide&nbsp;:**  
![capture d’écran du site 100% pratique](images/groupement.jpg)  
Ici, l’info bulle (<i lang="en">tooltip</i>) est délimitée par une bordure bien visible et suffisamment contrastée, permettant de bien identifier son contenu.

**Exemple non-valide&nbsp;:**  
![capture d’écran du site fnac.com](images/groupement2.jpg)  
Il est très difficile d’associer les thèmes («&nbsp;par région&nbsp;», «&nbsp;par genre&nbsp;»…) et les sous-thèmes en colonnes, d’autant plus que les filets horizontaux sont trop peu contrastés.

**Exemple&nbsp;: Les balises <abbr>HTML5</abbr> et <i lang="en">landmarks</i> <abbr>ARIA</abbr>**
Pour donner une structure sémantique aux grandes régions d’une page, on peut utiliser les balises de structure <abbr>HTML5</abbr> (`main` pour le contenu principal de la page, `nav` pour la navigation principale, `header` pour l’entête de page, `footer` pour le pied de page, `aside` pour du contenu complémentaire au contenu principal, et d’autres) même si leur support par les technologies d’assistance/navigateurs n’est pas total , il est suffisant. On peut aussi utiliser, pour mettre en place cette structure de page, [les <i lang="en">landmarks</i> <abbr>ARIA</abbr> (<i lang="en">Accessible Rich Internet Applications</i>)](https://www.w3.org/TR/wai-aria-practices/examples/landmarks/index.html) et là, le support est bien meilleur&nbsp;!

Tout sur <a href="./exemples/landmarks/index.html">les <i lang="en">landmarks</i> <abbr>ARIA</abbr> dans nos exemples</a>.

Mettre en place ce type de sémantique permet aux déficients visuels d’identifier et comprendre l’organisation, la structure globale de la page et donc de naviguer plus facilement.

**Référence <abbr>WCAG</abbr>&nbsp;:**  
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#consistent-navigation">3.2.3 Consistent Navigation</a>
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#consistent-identification">3.2.4 Consistent Identification</a>

<!--  This file is part of a11y-guidelines | Our vision of mobile & web accessibility guidelines and best practices, with valid/invalid examples.
 Copyright (C) 2016  Orange SA
 See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). -->