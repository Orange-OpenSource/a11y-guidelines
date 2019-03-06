# S’assurer que l’utilisateur garde le contrôle lors des interactions

<script>$(document).ready(function () {
    setBreadcrumb([
        {"label":"Critères WCAG par thème - Développeurs", "url": "./incontournables.html#dev"},
        {"label":"S’assurer que l’utilisateur garde le contrôle lors des interactions"}
    ]);
});</script>

<span data-menuitem="incontournables"></span>

**Cible&nbsp;:** tout le monde, et en particulier les personnes déficientes visuelles, cognitives ou avec un déficit d’attention, les utilisateurs qui augmentent la taille du pointeur souris, avec des mouvements peu précis et ceux qui utilisent la commande vocales.  

**Quand&nbsp;:** dès la phase de conception et lors du développement.

**Description&nbsp;:**
- Ne pas induire de changement de contexte lors de la prise de focus, la saisie de données ou l’activation d’un élément de formulaire sans que ce changement soit prévisible (bouton) ou que l’utilisateur ait été averti.  
- Ne pas imposer à l’utilisateur un temps imparti pour effectuer une action. Celui-ci doit être en mesure de rallonger un temps imparti le cas échéant.
- Si des raccourcis clavier reposant sur un seul caractère (lettre, y compris les lettres majuscules et minuscules, ponctuation, nombre ou symbole) sont disponibles, il est nécessaire de prendre certaines mesures afin d'éviter d'éventuels conflits avec des outils d'assistance.
- Laisser le contrôle à l'utilisateur des contenus s'ouvrant au survol ou à la prise de focus (<span lang="en">tooltip</span>, infobulle).

**À vérifier&nbsp;:**  

1. Concernant les raccourcis, s'assurer qu'au moins une des affirmations suivantes est vraie:
 - **désactivation**: le raccourci peut être désactivé.
 - **modification**: le raccourci peut être modifié (possibilité de choisir une seule ou plusieurs touches successives pour déclencher le raccourci), avec la possibilité d'ajouter 1 ou plusieurs caractères non-imprimables (Ctrl, Alt, etc.) à la combinaison.
 - **activation au focus**: le raccourci est actif uniquement à la prise du focus sur l'élément concerné. 

2. Si du contenu apparaît au survol de la souris ou à la prise de focus (ex: infobulle), l'utilisateur doit pouvoir **à la fois** :

- Masquer ce nouveau contenu sans avoir besoin de déplacer le pointeur ou le focus ; par exemple, avec la touche <kbd>échap.</kbd> (utile notamment pour les utilisateurs de loupe d'écran).
- Déplacer le pointeur de la souris sur ce nouveau contenu sans que celui-ci disparaisse.
- Accéder au contenu supplémentaire jusqu'à ce que le survol ou le focus soit retiré du déclencheur, que l'utilisateur le fasse disparaître ou les informations ne soient plus valides (pas de temporisation).

3. Si des actions doivent être réalisées dans un temps imparti, vérifier que l’utilisateur puisse allonger ou supprimer cette restriction.

**Objectif utilisateur&nbsp;:**
donner à tous les utilisateurs la maîtrise de l'apparition de contenu, des changements de contexte lié à son action et lui laisser le temps nécessaire pour effectuer une action.

**Exemple&nbsp;:** un formulaire doit obligatoirement posséder un bouton d’envoi. Il ne doit pas être envoyé automatiquement après la saisie de l’utilisateur.

**Référence <abbr>WCAG</abbr>&nbsp;:**  
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#content-on-hover-or-focus">1.4.13 Content on Hover or Focus</a>
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#timing-adjustable">2.2.1 Timing Adjustable</a>
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#on-focus">3.2.1 On Focus</a>
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#on-input">3.2.2 On Input</a>
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#character-key-shortcuts">2.1.4 Character key shortcuts</a>

<!--  This file is part of a11y-guidelines | Our vision of mobile & web accessibility guidelines and best practices, with valid/invalid examples.
 Copyright (C) 2016  Orange SA
 See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). -->