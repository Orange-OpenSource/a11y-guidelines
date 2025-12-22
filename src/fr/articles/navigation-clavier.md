---
title: "Gestion de la navigation clavier avec ARIA"
abstract: "Gérer la navigation clavier avec ARIA et les design patterns"
titleBeforeTag: true
date: "2018-01-16"
updateDate: "2026-01-01"
tags:
  - component
---

## Introduction
La gestion des interactions clavier est un des piliers de la recommandation <abbr>ARIA</abbr> (Accessible Rich Internet Application) du <abbr>W3C</abbr>/<abbr>WAI</abbr>.
Le but est de standardiser la navigation clavier dans les composants d'interface d'une page.  
Globalement, la navigation clavier entre les composants d'interface (widget) se fait «&nbsp;classiquement&nbsp;»
en tabulant. En revanche, à l'intérieur d'un widget, la navigation clavier va être gérée finement
en respectant les <span lang="en">design patterns</span> qui sont partie intégrante de la recommandation <abbr>ARIA</abbr>.

## Design patterns

### TabIndex
En <abbr>HTML5</abbr>, <abbr>ARIA</abbr> étend l'attribut <code>tabindex</code> à tous les éléments visibles et autorise l'utilisation&nbsp;:

- d'une valeur négative (<code>-1</code>) pour les éléments ne devant pas être accessibles à la navigation au
clavier (pas de prise de focus), mais pouvant recevoir le focus par programmation. </li>
- d'une valeur à <code>0</code>, il permet à l'élément de recevoir le focus comme tout élément nativement focusable.


### Design Patterns
<p>En <abbr>ARIA</abbr>, tout part d'un besoin d'homogénéiser les interactions clavier en demandant que la navigation clavier soit identique à une application <span lang="en">desktop</span> (client lourd).
Il faut donc pour chaque widget implémenter l'interaction clavier selon son type (accordéon, barre de navigation,
d'outils, potentiomètre…) en se reportant aux <span lang="en">design patterns</span> (https://www.w3.org/WAI/ARIA/apg/patterns/).
En plus de la navigation clavier à implémenter les <span lang="en">design patterns</span> donnent aussi la manière de mettre en œuvre les propriétés et
états <abbr>ARIA</abbr> pour rendre accessible son <span lang="en">widget</span> toujours en fonction de son type.</p>

### Tests utilisateurs
<p>Pour valider l'utilisabilité pour les personnes en situation de handicap et la robustesse en fonction des agents utilisateurs (aides techniques et navigateurs), il faut faire tester par des utilisateurs de lecteurs d'écran, à minima (c'est la population la plus impactée par des problèmes d'implémentation des <span lang="en">design patterns</span>).</p>
<p>Dans tous les cas, il faut tester les développements sur les environnements cibles (couple navigateurs/aides techniques). C'est un gros travail absolument nécessaire pour les cas complexes car sur un site ou une application internet classique, il faut, à minima, tester avec Safari/VoiceOver, Jaws/Internet Explorer et Firefox/<abbr>NVDA</abbr>.</p>

<p>Ces tests utilisateurs vont vous permettre de valider que votre widget est ergonomique donc utilisable pour ce type d'utilisateurs et par extension pour l'ensemble des utilisateurs bénéficiant de l'accessibilité (pour rappel, 15% de la population totale).</p>
