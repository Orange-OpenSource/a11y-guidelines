# Utiliser des tailles relatives et faire du web adaptatif

<script>$(document).ready(function () {
    setBreadcrumb([
        {"label":"Critères incontournables", "url": "./incontournables.html"},
        {"label":"Utiliser des tailles relatives et faire du web adaptatif"}
    ]);
});</script>

<span data-menuitem="incontournables"></span>

**Cible&nbsp;:** tout le monde, et en particulier les personnes déficientes visuelles, en mobilité et seniors.  
**Quand&nbsp;:** lors du développement.

**Description&nbsp;:**

N’utiliser pour les tailles de police et pour les éléments conteneurs que des tailles relatives (`em`, `rem`, `%`)  permettant l’agrandissement du texte seul de 200% et globalement faire une interface web adaptative (responsive web design).

**À vérifier&nbsp;:**
- Ne pas utiliser le pixel (`px`) pour des tailles qui doivent pouvoir s’agrandir si l’on ne zoome que les textes (Internet Explorer ne le permet pas).
- Les éléments de formulaire doivent, eux aussi, posséder des tailles relatives pour s’agrandir.
- Penser à rendre fluides les conteneurs des textes afin qu’ils puissent s’agrandir lorsque les textes sont zoomés.
- Dans Firefox, faire Affichage>Zoom>Zoom texte seulement, utiliser les réglages du zoom pour atteindre 200%. Vérifier qu’il n’y a pas de perte d’information (disparition ou chevauchement de texte).  
- Le contenu doit s'adapter à la largeur de l'écran, il doit être consultable, sauf besoin particulier (carte, tableau, diagramme...), sans scroll horizontal même lorsque la largeur de la zone d'affichage est réduite à 320 pixels CSS.  

![capture d’écran réglage du zoom dans Firefox](./images/zoom-200.png)

**Objectif utilisateur&nbsp;:**
Permettre aux utilisateurs (malvoyants, en mobilité, seniors…) d’augmenter la taille du texte et zoomer pour plus aisément accéder à l’information.

**Exemple&nbsp;:**  
Voir l’exemple [gestion du zoom, agrandissement de la taille du texte](./exemples/zoom/index.html) pour plus d’informations.

**Référence <abbr>WCAG</abbr>&nbsp;:**  
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#resize-text">1.4.4 Resize text</a>
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#reflow">1.4.10 Reflow</a>

<!--  This file is part of a11y-guidelines | Our vision of mobile & web accessibility guidelines and best practices, with valid/invalid examples.
 Copyright (C) 2016  Orange SA
 See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). -->