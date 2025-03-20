---
title: "L'accessibilité des images SVG"
abstract: "Comment rendre accessibles les images SVG"
titleBeforeTag: true
date: "2021-01-01"
updateDate: "2025-02-28"
tags:
  - web
  - intermediate
---
Voici quelques recommandations techniques pour vous aider à intégrer des images SVG accessibles.

Important : quelle que soit la solution retenue, le support navigateurs/aides techniques évoluant très rapidement, pensez à tester vos implémentations sur les configurations les plus utilisées par vos utilisateurs.

## Image de décoration

### SVG dans une balise `img`
<pre><code class="html" title="html">
&lt;img src="XXX.svg" alt="" aria-hidden="true"&gt;
</code></pre>


### SVG en ligne (inline)
<pre><code class="html" title="html">
&lt;svg aria-hidden="true"&gt;
…
&lt;/svg&gt;
</code></pre>

Vous devez vous assurer que la balise `svg` ou un de ses enfants (`<g>`, `<path>`…) ne possède aucun attribut visant à lui fournir un nom accessible (`title`, `desc`, `aria-*`…).

Note : historiquement, l'attribut `focusable="false"` devait aussi être présent pour éviter toute prise de focus sur le SVG par Internet Explorer et Edge (avant Chromium), ceci n'est plus utile sur les navigateurs actuels (sauf si vos utilisateurs utilisent encore des anciens navigateurs mentionnés).


## Image informative (hors lien ou bouton)

### SVG dans une balise `img`

La solution la plus efficace consiste à utiliser l'attribut `alt` :

<pre><code class="html" title="html">
&lt;img src="XXX.svg" role="img" alt="texte de remplacement"&gt;
</code></pre>

en second choix, utiliser `aria-label` (mais cela enfreint la première règle d'ARIA, à savoir, ne pas utiliser d'ARIA si une solution native HTML existe) :

<pre><code class="html" title="html">
&lt;img src="XXX.svg" role="img" aria-label="texte de remplacement"&gt;
</code></pre>

Note : Afin d'assurer un support optimal par les aides techniques et navigateurs, éviter l'usage de `aria-labelledby` pointant sur un texte masqué :

<pre><code class="html" title="html">
&lt;p id="alt-text" class="visually-hidden">texte de remplacement&lt;/p&gt;
&lt;img src="XXX.svg" role="img" aria-labelledby="alt-text"&gt;
</code></pre>

Note : On rajoute `role="img"` pour s'assurer que l'élément soit bien considéré comme une image par les technologies d'assistance.


### SVG en ligne (inline)

Le meilleur support pour les SVG est l'affichage en ligne (balise `<svg>`).

<pre><code class="html" title="html">
&lt;svg role="img"&gt;
  &lt;title&gt;texte de remplacement&lt;/title&gt;
  ...
&lt;/svg&gt;

&lt;svg role="img" aria-labelledby="alt-text"&gt;
  &lt;title id="alt-text">texte de remplacement&lt;/title&gt;
  ...
&lt;/svg&gt;

&lt;svg role="img" aria-label="alt-text"&gt;
  ...
&lt;/svg&gt;
</code></pre>

Si besoin, pour des images dont le contenu nécessite une description détaillée, il est possible d'utiliser `aria-labelledby` en référençant le « title » et la « desc » :

<pre><code class="html" title="html">
&lt;svg role="img" aria-labelledby="alt-text description"&gt;

  &lt;title id="alt-text"&gt;texte de remplacement court&lt;/title&gt;

  &lt;desc id="description"&gt;
    Description détaillée de l'information portée par l'image.
  &lt;/desc&gt;
  ...
&lt;/svg&gt;
</code></pre>

Note : afin d'assurer un support optimal par les aides techniques et navigateurs, éviter l'usage de `aria-describedby` pour la description.


Si vous utilisez l'élément `<use>` pour cloner plusieurs versions du SVG, pensez à le masquer avec `aria-hidden` :

<pre><code class="html" title="html">
&lt;svg role="img"&gt;
  &lt;title&gt;texte de remplacement&lt;/title&gt;
    &lt;use href="some-id" fill="blue" x="5" y="5" aria-hidden="true" /&gt;
  ...
&lt;/svg&gt;
</code></pre>


## Les SVG dans des liens ou boutons

S'il est possible d'afficher du texte à proximité, la meilleure solution est de simplement masquer le SVG à l'aide de l'attribut `aria-hidden` :

<pre><code class="html" title="html">
&lt;button&gt;
  &lt;svg aria-hidden="true"&gt;&lt;!--...--&gt;&lt;/svg&gt;
  Texte visible
&lt;/button&gt;

&lt;a href="/Rechercher"&gt;
  &lt;svg aria-hidden="true"&gt;&lt;!--...--&gt;&lt;/svg&gt;
  Texte visible
&lt;/a&gt;
</code></pre>

Mais comme il n'est pas toujours possible d'afficher un texte (contrainte graphique/design/marketing…), il est conseillé de cacher visuellement un texte tout en le laissant lisible par les aides techniques via `aria-labelledby` :

<pre><code class="html" title="html">
&lt;button aria-labelledby="label"&gt; 
  &lt;span id="label" hidden&gt;Texte masqué&lt;/span&gt;
  &lt;svg aria-hidden="true"&gt;&lt;!--...--&gt;&lt;/svg&gt;
&lt;/button&gt; 

&lt;a href="/Rechercher"&gt;
  &lt;span id="label" hidden&gt;Texte masqué&lt;/span&gt;
  &lt;svg aria-hidden="true"&gt;&lt;!--...--&gt;&lt;/svg&gt;
&lt;/a&gt;
</code></pre>

La classe `visually-hidden` permet également de présenter le texte uniquement aux utilisateurs d'aide technique (masquage accessible). 
La solution suivante est similaire à la précédente, mais à tester systématiquement dans vos environnements de navigation ciblés (couples navigateur/aide technique).

<pre><code class="html" title="html">
&lt;button&gt;
  &lt;svg aria-hidden="true"&gt;&lt;!--...--&gt;&lt;/svg&gt;
  &lt;span class="visually-hidden"&gt;Rechercher&lt;/span&gt;
&lt;/button&gt;

&lt;a href="/Rechercher"&gt;
  &lt;svg aria-hidden="true"&gt;&lt;!--...--&gt;&lt;/svg&gt;
  &lt;span class="visually-hidden"&gt;Rechercher&lt;/span&gt;
&lt;/a&gt;
</code></pre>

Il est aussi possible d'utiliser l'attribut `aria-label` :

<pre><code class="html" title="html">
&lt;button aria-label="Rechercher"&gt;
  &lt;svg aria-hidden="true"&gt;&lt;!--...--&gt;&lt;/svg&gt;
&lt;/button&gt;

&lt;a href="/Rechercher" aria-label="Rechercher"&gt;
  &lt;svg aria-hidden="true"&gt;&lt;!--...--&gt;&lt;/svg&gt;
&lt;/a&gt;
</code></pre>

## Dernier mot…

En résumé, s'il ne fallait retenir qu'un seul conseil pour du SVG accessible, ce serait TESTER et tester encore !

## Webographie (articles qui m'ont bien, bien aidés)

- https://www.deque.com/blog/creating-accessible-svgs/ 
- https://weboverhauls.github.io/demos/svg/ 
- https://www.scottohara.me/blog/2019/05/22/contextual-images-svgs-and-a11y.html 
- https://www.slideshare.net/webaxe/svg-icons-and-screen-reader-accessibility 
- https://github.com/JeremiePat/svg-accessible/blob/master/slides.md 
- https://www.sarasoueidan.com/blog/accessible-icon-buttons/
<a href="https://www.deque.com/blog/creating-accessible-svgs/" hreflang="en">XXX</a>
<a href="https://weboverhauls.github.io/demos/svg/" hreflang="en">XXX</a>
<a href="https://www.scottohara.me/blog/2019/05/22/contextual-images-svgs-and-a11y.html" hreflang="en">XXX</a>
<a href="https://www.slideshare.net/webaxe/svg-icons-and-screen-reader-accessibility" hreflang="en">XXX</a>
<a href="https://github.com/JeremiePat/svg-accessible/blob/master/slides.md" hreflang="en">XXX</a>
<a href="https://www.sarasoueidan.com/blog/accessible-icon-buttons/" hreflang="en">XXX</a>
<a href="https://www.smashingmagazine.com/2021/05/accessible-svg-patterns-comparison/" hreflang="en">XXX</a>
