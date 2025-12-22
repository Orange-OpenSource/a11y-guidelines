---
title: "Gestion de la navigation au clavier avec ARIA"
abstract: "Gérer la navigation au clavier avec ARIA et les design patterns"
titleBeforeTag: true
date: "2018-01-16"
updateDate: "2026-01-01"
tags:
  - component
---

## Introduction
La gestion des interactions clavier est l'un des piliers de la recommandation <span lang="en">Accessible Rich Internet Applications</span> (<abbr>ARIA</abbr>) du <abbr>W3C</abbr> (<span lang="en">World Wide Web Consortium</span>) /<abbr>WAI</abbr> (<span lang="en">Web Accessibility Initiative</span>).
L'objectif est de standardiser la navigation au clavier dans les composants d'interface d'une page.  
Globalement, la navigation entre les composants d'interface se fait classiquement à l'aide de la touche <kbd>Tab</kbd>. À l'intérieur d'un composant, la navigation au clavier doit être gérée finement, selon les patrons de conception qui font partie intégrante de la recommandation <abbr>ARIA</abbr>.

## Patrons de conception

### tabindex
En <abbr>HTML5</abbr>, l'attribut global `tabindex` peut être utilisé sur la plupart des éléments rendus à l'écran et autorise l'utilisation&nbsp;:

- d'une valeur négative (`tabindex="-1"`) qui retire l'élément de l'ordre de tabulation séquentielle (il n'est pas atteignable avec <kbd>Tab</kbd>), mais il peut recevoir le focus par script (`element.focus()`) ou par clic.
- d'une valeur `tabindex="0"` qui permet à l'élément d'entrer dans l'ordre de tabulation naturel et de recevoir le focus comme les éléments nativement focusables. Attention toutefois car l'utilisation de valeur positives (>0) est déconseillée car difficile à maintenir et peut perturber l'ordre naturel de tabulation.

### Patrons de conception
En <abbr>ARIA</abbr>, tout part d'un besoin d'homogénéiser les interactions clavier en demandant que la navigation au clavier soit identique à une application de bureau (client lourd).  
Il faut donc, pour chaque composant, implémenter l'interaction au clavier selon son type (accordéon, menu de navigation, barre d'outils, potentiomètre…) en se reportant aux <a hreflang="en" href="https://www.w3.org/WAI/ARIA/apg/patterns/">patrons de conception</a>.
En plus de la navigation au clavier à implémenter les patrons de conception donnent aussi la manière de mettre en œuvre les propriétés et états <abbr>ARIA</abbr> pour rendre accessible son composant toujours en fonction de son type.

### Tests utilisateurs
Pour valider l'utilisabilité pour les personnes en situation de handicap et la robustesse en fonction des agents utilisateurs (aides techniques et navigateurs), il faut faire tester par des personnes utilisant des lecteurs d'écran, au minimum, car ce sont les plus affectées par les problèmes d'implémentation.  
Dans tous les cas, il faut tester les développements sur les environnements cibles (couple navigateurs/aides techniques). C'est un gros travail absolument nécessaire pour les cas complexes car sur un site web ou application web, il faut, au minimum, tester avec Safari/VoiceOver, Edge/JAWS et Firefox/<abbr>NVDA</abbr>.  
Ces tests utilisateurs vont vous permettre de valider que votre composant est ergonomique donc utilisable pour ce type d'utilisateurs et par extension pour l'ensemble des utilisateurs bénéficiant de l'accessibilité (pour rappel, 15% de la population totale).
