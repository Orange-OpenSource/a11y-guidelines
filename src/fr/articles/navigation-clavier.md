---
title: "Gestion de la navigation au clavier avec ARIA"
abstract: "Gérer la navigation au clavier avec ARIA et les patrons de conception"
titleBeforeTag: true
date: "2018-01-16"
updateDate: "2026-01-01"
tags:
  - component
---

## Introduction
La gestion des interactions au clavier est l'un des piliers de la recommandation <span lang="en">Accessible Rich Internet Applications</span> (<abbr>ARIA</abbr>) du <abbr>W3C</abbr> (<span lang="en">World Wide Web Consortium</span>) / <abbr>WAI</abbr> (<span lang="en">Web Accessibility Initiative</span>).
L'objectif est de standardiser la navigation au clavier dans les composants d'interface d'une page.
Globalement, la navigation entre les composants d'interface se fait classiquement à l'aide de la touche <kbd>Tab</kbd>. À l'intérieur d'un composant, la navigation au clavier doit être gérée finement, selon les patrons de conception qui font partie intégrante de la recommandation <abbr>ARIA</abbr>.

## ARIA et interactions clavier

### tabindex
En <abbr>HTML5</abbr>, l'attribut global `tabindex` peut être utilisé sur la plupart des éléments rendus à l'écran. Il autorise notamment les usages suivants&nbsp;:

- d'une valeur négative (`tabindex="-1"`) qui retire l'élément de l'ordre de tabulation séquentielle (il n'est pas atteignable au clavier via la touche <kbd>Tab</kbd>), mais il peut recevoir le focus par script (`element.focus()`) ou par un clic.
- d'une valeur `tabindex="0"` qui permet à l'élément d'entrer dans l'ordre de tabulation naturel et de recevoir le focus comme les éléments nativement focusables.

Évitez d'utiliser des valeurs `tabindex` positives (supérieures à 0) sauf cas très justifiés : elles modifient l'ordre de tabulation et sont difficiles à maintenir.

### Patrons de conception
Avec <abbr>ARIA</abbr>, l'objectif est d'homogénéiser les interactions clavier en visant une navigation similaire à celle d'une application de bureau.
Il faut donc, pour chaque composant, implémenter l'interaction au clavier selon son type (accordéon, menu de navigation, barre d'outils, potentiomètre…) en se référant aux <a hreflang="en" href="https://www.w3.org/WAI/ARIA/apg/patterns/">patrons de conception</a>.
Outre la navigation au clavier à implémenter, les patrons de conception indiquent également comment mettre en œuvre les propriétés et états <abbr>ARIA</abbr> pour rendre un composant accessible, en fonction de son type.

### Tests utilisateurs
Pour valider l'utilisabilité pour les personnes en situation de handicap et la robustesse vis‑à‑vis des agents utilisateurs (aides techniques et navigateurs), il est recommandé de faire tester vos composants par des personnes utilisant des lecteurs d'écran, au minimum.
Testez vos développements sur les environnements cibles (combinaisons navigateur et aide technique). C'est un travail conséquent mais indispensable : sur un site ou une application web, testez au minimum avec&nbsp;:

- macOS&nbsp;: Safari + VoiceOver
- Windows (Chromium)&nbsp;: Chrome/Edge + NVDA
- Windows (Chromium)&nbsp;: Chrome/Edge + JAWS (si vos utilisateurs l'utilisent)
- Windows&nbsp;: Firefox + NVDA

Ces tests utilisateurs vont vous permettre de valider que votre composant est utilisable pour ce type d'utilisateurs et, par extension, pour l'ensemble des utilisateurs bénéficiant de l'accessibilité. Pour rappel, <a href="https://www.who.int/fr/news-room/fact-sheets/detail/disability-and-health">16&nbsp;% de la population mondiale présente un handicap d'après les données de l'OMS</a>.