---
title: "Utiliser des tailles relatives et faire du web adaptatif"
---

# Utiliser des tailles relatives et faire du web adaptatif

**Cible&nbsp;:** tout le monde, et en particulier les personnes déficientes visuelles, en mobilité et seniors.  
**Quand&nbsp;:** lors du développement.

**Description&nbsp;:**

N’utiliser pour les tailles de police et pour les éléments conteneurs que des tailles relatives (`em`, `rem`, `%`) permettant l’agrandissement du texte seul de 200%. Globalement faire une interface web adaptative (responsive web design) sauf si la présentation en deux dimensions est nécessaire pour l'usage ou l'utilisation (images, cartes, diagrammes, vidéos, jeux, présentations, tableaux de données et barre d'outils...).

**À vérifier&nbsp;:**
- Ne pas utiliser le pixel (`px`) pour des tailles qui doivent pouvoir s’agrandir si l’on ne zoome que les textes (Internet Explorer ne le permet pas).
- Les éléments de formulaire doivent, eux aussi, posséder des tailles relatives pour s’agrandir.
- Penser à rendre fluides les conteneurs des textes afin qu’ils puissent s’agrandir lorsque les textes sont zoomés.
- Dans Firefox, faire Affichage>Zoom>Zoom texte seulement, utiliser les réglages du zoom pour atteindre 200%. Vérifier qu’il n’y a pas de perte d’information (disparition ou chevauchement de texte).  
- Le contenu doit s'adapter à la largeur de l'écran, il doit être consultable (sauf besoin particulier: carte, tableau, diagramme...) sans scroll horizontal même pour une largeur de la zone d'affichage (<span lang="en">vewport</span>) réduite à 320 pixels CSS. 
Note : 320 pixels CSS est équivalent à un viewport à 1280px CSS avec un zoom global (toute la page) à 400%.

![capture d’écran réglage du zoom dans Firefox](./images/zoom-200.png)

**Objectif utilisateur&nbsp;:**
Permettre aux utilisateurs (malvoyants, en mobilité, seniors…) d’augmenter la taille du texte et zoomer pour plus aisément accéder à l’information.

**Exemple&nbsp;:**  
Voir l’exemple [gestion du zoom, agrandissement de la taille du texte](./exemples/zoom/index.html) pour plus d’informations.

**Référence <abbr>WCAG</abbr>&nbsp;:**  
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#resize-text">1.4.4 Resize text</a>
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#reflow">1.4.10 Reflow</a>
