# Permettre d’utiliser les principales fonctionnalités de l’application au clavier

<script>$(document).ready(function () {
    setBreadcrumb([
        {"label":"Critères incontournables", "url": "./incontournables.html#dev"},
        {"label":"Permettre d’utiliser les principales fonctionnalités de l’application au clavier"}
    ]);
});</script>

<span data-menuitem="incontournables"></span>

**Cible&nbsp;:** tout le monde, et en particulier les personnes déficientes visuelles, cognitives, motrices et en mobilité.  
**Quand&nbsp;:** dès la phase de conception et lors du développement.

**Description&nbsp;:**
Mettre en place des gestionnaires d’événements qui ne s’appuient pas uniquement sur des événements souris, permettent donc d'être pilotable au clavier et ceci sans limite de temps. 

**À vérifier&nbsp;:**
- Toutes les actions importantes effectuées à la souris peuvent aussi l’être avec le clavier, quitte à proposer une alternative spécifique pour les interactions complexes (<i lang="en">drag’n’drop</i>, gestes à plusieurs doigts sur mobile …) tout en évitant d'innombrables frappes.

- Utiliser au maximum les composants <abbr>HTML</abbr> interactifs de base (champs, liens, boutons), ceux-ci étant nativement accessibles au clavier. À défaut, veiller à ce que les composants personnalisés soient opérables au clavier de manière classique.

Voir [la façon de naviguer au clavier](./methodes-outils-clavier.html) dans un navigateur web.

**Objectif utilisateur&nbsp;:**
 Permettre aux utilisateurs qui ne peuvent pas utiliser la souris (non ou malvoyants, déficients moteurs, cognitives, web mobile, en mobilité…) d’accéder aux fonctionnalités principales de l’application au clavier.

**Exemple valide&nbsp;:**      
- Un sous-menu qui se déroule au survol doit aussi se dérouler quand l’item de menu parent reçoit le focus clavier.
- Dans un webmail, un clic droit permet d’accéder à un menu pour vider la corbeille, un bouton «&nbsp;vider la corbeille&nbsp;» est également présent dans l’interface quand la corbeille est en cours de consultation. 
 
**Exemple non-valide&nbsp;:**      
Une fonctionnalité réalisable uniquement à l’aide du <i lang="en">drag’n’drop</i> et sans équivalent au clavier.

**Référence <abbr>WCAG</abbr>&nbsp;:**  
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#keyboard">2.1.1 Keyboard</a>
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#name-role-value">4.1.2 Name, Role, Value</a>
<!--  This file is part of a11y-guidelines | Our vision of mobile & web accessibility guidelines and best practices, with valid/invalid examples.
 Copyright (C) 2016  Orange SA
 See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). -->