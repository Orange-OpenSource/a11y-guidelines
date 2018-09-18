# S’assurer que l’utilisateur garde le contrôle lors des interactions

<script>$(document).ready(function () {
    setBreadcrumb([
        {"label":"Critères incontournables", "url": "./incontournables.html"},
        {"label":"S’assurer que l’utilisateur garde le contrôle lors des interactions"}
    ]);
});</script>

<span data-menuitem="incontournables"></span>

**Cible&nbsp;:** tout le monde, et en particulier les personnes déficientes visuelles, cognitives ou avec un déficit d’attention.  
**Quand&nbsp;:** dès la phase de conception et lors du développement.

**Description&nbsp;:**
Ne pas induire de changement de contexte lors de la prise de focus, la saisie de données ou l’activation d’un élément de formulaire sans que ce changement soit prévisible (bouton) ou que l’utilisateur ait été averti.  

Ne pas imposer à l’utilisateur un temps imparti pour effectuer une action et doit être en mesure de rallonger un temps imparti pour effectuer une action.

**À vérifier&nbsp;:**
Si des raccourcis clavier sont disponibles, s'assurer qu'il soit possible de désactiver, modifier ces raccourcis et qu'ils sont activables que lorsque le composant a le focus.

Si du contenu apparaît au survol de la souris ou à la prise de focus (ex: infobulle), l'utilisateur doit pouvoir :
- Masquer ce nouveau contenu sans avoir besoin de déplacer le pointeur ou le focus (par exemple avec la touche <kbd>échap.</kbd>).
- Déplacer le pointeur de la souris sur ce nouveau contenu sans que celui-ci disparaisse.

**Objectif utilisateur&nbsp;:**
Donner à tous les utilisateurs la maîtrise des changements de contexte lié à son action et lui laisser le temps nécessaire pour effectuer une action.

**Exemple&nbsp;:**    
Un formulaire doit obligatoirement posséder un bouton d’envoi. Il ne doit pas être envoyé automatiquement après la saisie de l’utilisateur.

**Référence <abbr>WCAG</abbr>&nbsp;:**  
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#content-on-hover-or-focus">1.4.13 Content on Hover or Focus</a>
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#timing-adjustable">2.2.1 Timing Adjustable</a>
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#on-focus">3.2.1 On Focus</a>
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#on-input">3.2.2 On Input</a>
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#character-key-shortcuts">2.1.4 Character key shortcuts</a>

<!--  This file is part of a11y-guidelines | Our vision of mobile & web accessibility guidelines and best practices, with valid/invalid examples.
 Copyright (C) 2016  Orange SA
 See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). -->