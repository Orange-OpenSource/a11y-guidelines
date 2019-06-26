# Rendre le parcours du focus séquentiel et logique sans piège clavier

<script>$(document).ready(function () {
    setBreadcrumb([
        {"label":"Critères WCAG par thème - Développeurs", "url": "./incontournables.html#dev"},
        {"label":"Rendre le parcours du focus séquentiel et logique sans piège clavier"}
    ]);
});</script>

<span data-menuitem="incontournables"></span>


**Cible&nbsp;:** tout le monde, et en particulier les personnes déficientes visuelles, cognitives ou avec un trouble de l’attention 1et en mobilité.  
**Quand&nbsp;:** lors du développement.

**Description&nbsp;:**

Les éléments (liens, boutons, éléments de formulaire) doivent recevoir le focus dans un ordre séquentiel et logique (de haut en bas et de gauche à droite) lorsque l'ordre du focus est nécessaire pour la compréhension ou l'opérabilité clavier et cela même pour du contenu généré dynamiquement (modification du DOM, Ajax,…). Bien-sûr, le focus ne doit ni rester piégé, ni bloqué. 

Pour le contenu, également, si un sens de lecture est nécessaire à la bonne compréhension, il faut s'assurer que celui-ci est cohérent pour tout utilisateur.

Exemple, les puces numérotées indiquent l'ordre de déplacement du focus dans cette page :  
![Capture d'écran indiquant l'ordre de déplacement du focus dans une page](./images/focus/focus-order.png)

**À vérifier&nbsp;:**
- Pour valider cette exigence, la position du focus doit être visible à tout moment (propriété `outline` et `:focus` en <abbr>CSS</abbr>), voir exigence 20, ci-dessous.
- Veillez à ce que l’ordre d’apparition des éléments dans le code <abbr>HTML</abbr>soit le même que l'ordre de déplacement du focus ou de lecture de l'information dans la page si cet ordre impacte la compréhension du contenu ou capacité d'utiliser l'interface. Un élément présent à la fin du code source mais positionné tout en haut de la page via <abbr>CSS</abbr> sera le dernier à recevoir le focus. C'est la solution la plus simple&nbsp;!
- Pour la maintenabilité, éviter l’utilisation de l’attribut `tabindex` avec des valeurs supérieures à 0.
- Même lors d’apparition ou de disparition de contenu, il faut conserver ce parcours logique et séquentiel.
 Ceci est vrai pour du contenu dynamiquement généré ou pour des <span lang="en"><abbr>SPA</abbr> (single page application)</span> ou des applications web sur une seule page. Pour plus de détails, voir [Gérer le focus pour du contenu dynamique](./exemples/dynFocus/index.html)

**Objectif utilisateur&nbsp;:**
Permettre la navigation logique, sans piège au clavier dans les pages de l’application. Nécessaire pour les utilisateurs ne naviguant qu’au clavier (non ou malvoyants, déficients moteurs, déficients cognitifs, en mobilité).

**Exemple valide&nbsp;:**      
Dans une page dédiée à la recherche dans le site, on passe, à la navigation clavier, sur le formulaire de recherche avant d'arriver à la liste des résultats.      

**Exemple non-valide&nbsp;:**      
Une page contenant un lecteur vidéo dont le focus peut entrer à l’intérieur du lecteur, mais ne peut pas en sortir (piège clavier).        

**Référence <abbr>WCAG</abbr>&nbsp;:**
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#meaningful-sequence">1.3.2 Meaningful Sequence</a>
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#no-keyboard-trap">2.1.2 No Keyboard Trap</a>
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#focus-order">2.4.3 Focus Order</a>

<!--  This file is part of a11y-guidelines | Our vision of mobile & web accessibility guidelines and best practices, with valid/invalid examples.
 Copyright (C) 2016  Orange SA
 See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). -->