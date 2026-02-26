---
title: "Le nom accessible en HTML"
abstract: "Le nom accessible, qu'est-ce et son rapport avec les technologies d'assistance"
titleBeforeTag: true
date: "2018-10-27"
tags:
  - web
  - intermediate
---

  
## Introduction

Le nom (<span lang="en">name</span>) du composant d'interface est appelé aussi nom accessible  (<span lang="en">accessible name</span>), c'est globalement ce nom qui va être exposé à la technologie d'assistance <abbr>AT</abbr> via l'<abbr>API</abbr> d'accessibilité (<span lang="en">accessibility <abbr>API</abbr></span>). Ce nom est calculé par le navigateur via un algorithme appelé [<span lang="en">Accessible Name and Description Computation 1.1</span>](https://www.w3.org/TR/accname-1.1/).
En fait, pour faire simple, le navigateur va générer un arbre accessible (<span lang="en">accessibility tree</span>) à partir du <span lang="en">Document Model Object</span> (<abbr>DOM</abbr>) dans lequel une grande majorité des éléments <abbr>HTML</abbr> (ceux qui n'ont qu'un but de présentation, ex. : balises `div` et `span` n'en ont pas l'utilité) ont besoin d'un nom (accessible) pour être correctement identifiés par l'<abbr>AT</abbr>.

Le nom accessible est issu du contenu d'une balise, d'attributs de cette balise ou d'un élément qui lui est associé.

## En pratique, comment ça marche&nbsp;?

Le nom accessible est, par exemple, annoncé par un lecteur d'écran à la prise de focus sur cet élément mais le rôle de l'élément est aussi ajouté (lien, graphique, bouton...).

### Accéder au nom accessible via le navigateur

Pour accéder au nom (accessible), le plus simple est d'utiliser les outils des navigateurs.

Dans Chrome, il faut utiliser les Chrome dev tools (<kbd>Ctrl+ Maj. + i</kbd>) pour inspecter un élément et ouvrir le panneau "Accessibility" à la place de celui de "Style" (généralement à droite). On accède à l'"Accessibility tree" et dans "Computed properties" au "Name", le nom accessible de l'élément inspecté.

![Panneaux des outils de développement de Chrome avec le Accessibility tree ouvert](../../web/images/chrome_name.png)

Dans FireFox, il faut utiliser les dev tools (<kbd>Ctrl+ Maj. + i</kbd>), ouvrir l'onglet "Accessibilité" (à afficher les "Options" des dev tools), inspecter un élément. On accède au "Name", le nom accessible de l'élément inspecté.

![Panneaux des outils de développement de Firefox avec l'onglet Accessibilité ouvert](../../web/images/FF_name.png)
### Contenu d'une balise

`<a href="canard.html">canards en plastique</a>`

Ici, le nom du lien est le contenu (libellé) de celui-ci : "canards en plastique". Un utilisateur de lecteur d'écran à la prise de focus sur cet élément entendra : "canards en plastique lien". Pour un utilisateur de commande vocale, pour cliquer sur ce lien, dira : "cliquer canards en plastique lien".

Donc, un élément de ce type `<button type=”submit”></button>` sans intitulé, ne sera pas accessible, bien sûr !

Également, on peut additionner les éléments pour donner un nom.

`<button type=”submit”>Acheter <img alt="le canard en plastique" src="canard.jpg"></button>` 
 
 Ce bouton aura lui un nom accessible qui est le contenu du bouton : l'intitulé textuel, "Acheter " plus le `alt` de l'image : "le canard en plastique" donc "Acheter le canard en plastique".

### Élément associé

Par ailleurs, pour les éléments de formulaire, le nom accessible est le `label` lorsqu’il est programmatiquement associé à l'élément via l'attribut `for` référençant l'`id` du champ.

<pre><code class="html">
&lt;label for="search"&gt;Rechercher&lt;/label&gt;
&lt;input id="search" type="text"&gt;
</code></pre>

Avec ce code, le lecteur d'écran dira : "Rechercher édition".

### Avec <abbr>ARIA</abbr> aussi !

<abbr>ARIA</abbr> va pouvoir nous aider pour donner un nom à un élément <abbr>HTML</abbr>, en utilisant `aria-label` et `aria-labelledby`.

<pre><code class="html">
&lt;button class="navbar-toggler" type="button" aria-label="Ouverture menu navigation" ... &gt;
&lt;span class="navbar-toggler-icon"&gt;&lt;/span&gt;
&lt;/button&gt;
</code></pre>

Ce bouton de menu hamburger a donc un nom : "Ouverture menu navigation". 
Mais on pourrait aussi utiliser `aria-labelledby` pour référencer un autre élément de la page comme nom :

<pre><code class="html">
&lt;input type="search" aria-labelledby="this"&gt;
&lt;button id="this"&gt;Rechercher dans le site&lt;/button&gt;
</code></pre>
Lors de la prise de focus sur le champ, le lecteur d'écran annonce "Rechercher sur le site édition".

Plus de détails sur ["Les attributs <abbr>ARIA</abbr> qui peuvent vous sauver"](../attributs-aria-qui-peuvent-vous-sauver/).

## Webographie

- <a href="https://www.w3.org/TR/accname-1.1/" lang="en" hreflang="en">Accessible Name and Description Computation 1.1</a> par <span lang="en">the Accessible Rich Internet Applications Working Group</span>
- <a href="https://developer.paciellogroup.com/blog/2017/04/what-is-an-accessible-name/" lang="en" hreflang="en">What is an accessible name?</a> par Léonie Watson
