---
title: "Quelques bonnes pratiques pour les images SVG"
abstract: "Comment rendre accessibles les images SVG"
date: "2021-01-01"
tags:
  - web
---

# Les images SVG sont de plus en plus utilisées sur le web mais qu’en est-il de leur accessibilité ?

Voici quelques pistes sachant que le support navigateurs/aide techniques évolue très rapidement !
Important : Pensez donc à tester vos implémentations sur des cibles navigateurs /aides techniques les plus utilisées par vos utilisateurs, cela, quel que soit la solution pour laquelle vous optez. ;

## Image de décoration

### SVG dans une balise `img`
<pre><code class="html">
&lt;img src="XXX.svg" alt="" aria-hidden=”true” /&gt;
</code></pre>

### SVG en ligne (inline)
<pre><code class="html">
&lt;svg aria-hidden="true" focusable="false"&gt;
…
&lt;/svg&gt;
</code></pre>

On utilise `focusable="false"` pour éviter toute prise de focus sur le SVG par IE (>10 et Edge)

De plus, vous devez vous assurer que la balise `svg` ou un de ses enfants (`<g>`, `<path>`…) ne possède aucun attribut visant à lui fournir un nom accessible (`title`, `desc`, `aria-*`…). 

## Image informative (hors lien ou bouton)

### SVG dans une balise `img`
<pre><code class="html">
&lt;img src="XXX.svg" alt="texte de remplacement" role="img" /&gt;
</code></pre>

en second choix&nbsp;:
<pre><code class="html">
&lt;img src="XXX.svg" aria-label="texte de remplacement" role="img" /&gt;
</code></pre>

On rajoute `role="img"` pour s’assurer qu’avec macOS Safari, VoiceOver (anciennes versions) annonce bien « image ».

#### SVG en ligne (inline)
<pre><code class="html">
&lt;svg viewBox="0 0 440 540" version="1.1" role="img"
  lang="fr" xml:lang="fr"
  aria-labelledby="title description"&gt;

  &lt;title id="title"&gt;Revenus bruts 2019&lt;/title&gt;

  &lt;desc id="description"&gt;
    Ce schéma présente les revenus de l’année 2019, en pourcentage du total et en valeur absolue. Le total des revenus est de 20,3 millions d’Euros et se divise en 6,9 millions (34%) pour le premier trimestre, 2,1 millions (10%) pour le second, 10,3 millions pour le troisième (51%) et 1 million au dernier trimestre (5%).
  &lt;/desc&gt;

  ...
&lt;/svg&gt;
</code></pre>

Le meilleur support pour les SVG est de les afficher inline.

Il faut utiliser `aria-labelledby` en premier choix en référençant le « title » et la « desc » (éviter `aria-describedby` pour la « desc », support encore mauvais) pour assurer un support maximal.
Les SVG servant de lien ou de bouton

Plusieurs choix possibles&nbsp;: 

<pre><code class="html">
&lt;button&gt;
  &lt;svg focusable="false" aria-hidden="true"&gt;&lt;!--...--&gt;&lt;/svg&gt;
  Rechercher
&lt;/button&gt;

&lt;a href="/Rechercher"&gt;
  &lt;svg focusable="false" aria-hidden="true"&gt;&lt;!--...--&gt;&lt;/svg&gt;
  Rechercher
&lt;/a&gt;
</code></pre>

On utilise `focusable="false"` pour éviter toute prise de focus sur le SVG (en plus du lien `a`) par <abbr>IE</abbr>> 10 et Edge.
C’est la meilleure solution, la plus robuste mais pas toujours possible d’afficher un texte (contrainte graphique/design/marketing…).
Alors, voici une alternative qui permet de  cacher visuellement le texte pour un bouton ou un lien tout en le laissant lisible par les aides techniques via `aria-labelledby`&nbsp;:

<pre><code class="html">
&lt;button aria-labelledby="label"&gt; 

  &lt;span id="label" hidden&gt;Rechercher&lt;/span&gt;

  &lt;svg aria-hidden="true" focusable="false"&gt;&lt;!--...--&gt;&lt;/svg&gt;

&lt;/button&gt; 
</code></pre>

Enfin, ces deux solutions suivantes sont équivalentes et de toute façon à tester dans vos environnements de navigation (couples navigateur/aide technique) ciblés.

<pre><code class="html">
&lt;button&gt;
  &lt;svg focusable="false" aria-hidden="true"&gt;&lt;!--...--&gt;&lt;/svg&gt;
  &lt;span class="sr-only"&gt;Rechercher&lt;/span&gt;
&lt;/button&gt;

&lt;a href="/Rechercher"&gt;
  &lt;svg focusable="false" aria-hidden="true"&gt;&lt;!--...--&gt;&lt;/svg&gt;
  &lt;span class="sr-only"&gt;Rechercher&lt;/span&gt;
&lt;/a&gt;
</code></pre>

La class sr-only permet de cacher le texte sauf aux utilisateurs d’aide technique (masquage accessible).

ou

<pre><code class="html">
&lt;button aria-label="Rechercher"&gt;
  &lt;svg focusable="false" aria-hidden="true"&gt;&lt;!--...--&gt;&lt;/svg&gt;
&lt;/button&gt;

&lt;a href="/Rechercher" aria-label="Rechercher"&gt;
  &lt;svg focusable="false" aria-hidden="true"&gt;&lt;!--...--&gt;&lt;/svg&gt;
&lt;/a&gt;

ou, mais beaucoup plus risqué…
&lt;button&gt;
  &lt;svg aria-labelledby="rechercher-icon-title" focusable="false" role=”img”&gt;
    &lt;title id="rechercher-icon-title"&gt;Rechercher&lt;/title&gt;
    &lt;!--...--&gt;
  &lt;/svg&gt;
&lt;/button&gt;
</code></pre>

## Dernier mots…

En résumé, un seul conseil pour du SVG accessible, ce serait TESTER et tester encore !

## Webographie (articles qui m’ont bien, bien aidés)

- https://www.deque.com/blog/creating-accessible-svgs/ 
- https://weboverhauls.github.io/demos/svg/ 
- https://www.scottohara.me/blog/2019/05/22/contextual-images-svgs-and-a11y.html 
- https://www.slideshare.net/webaxe/svg-icons-and-screen-reader-accessibility 
- https://github.com/JeremiePat/svg-accessible/blob/master/slides.md 
- https://www.sarasoueidan.com/blog/accessible-icon-buttons/ 
