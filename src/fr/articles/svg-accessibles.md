---
title: "Les images SVG sont de plus en plus utilisées sur le web mais qu’en est-il de leur accessibilité ?"
abstract: "Comment rendre accessibles les images SVG"
titleBeforeTag: true
date: "2021-01-01"
tags:
  - web
  - intermediate
---

Mise à jour : décembre 2024

Voici quelques pistes sachant que le support navigateurs/aide techniques évolue très rapidement !
Important : Pensez donc à tester vos implémentations sur des cibles navigateurs /aides techniques les plus utilisées par vos utilisateurs, cela, quel que soit la solution pour laquelle vous optez. ;

## Image de décoration

### SVG dans une balise `img`
<pre><code class="html">
&lt;img src="XXX.svg" alt="" aria-hidden="true" /&gt;
</code></pre>


### SVG en ligne (inline)
<pre><code class="html">
&lt;svg aria-hidden="true" &gt;
…
&lt;/svg&gt;
</code></pre>

Vous devez vous assurer que la balise `svg` ou un de ses enfants (`<g>`, `<path>`…) ne possède aucun attribut visant à lui fournir un nom accessible (`title`, `desc`, `aria-*`…).

Note : historiquement, l'attribut `focusable="false"` devait aussi être présent pour éviter toute prise de focus sur le SVG par Internet Explorer (>10 et Edge), ceci n'est plus utile sur les navigateurs actuels.



## Image informative (hors lien ou bouton)

### SVG dans une balise `img`
<pre><code class="html">
&lt;img src="XXX.svg" role="img" alt="texte de remplacement" /&gt;
</code></pre>

en second choix&nbsp;:
<pre><code class="html">
&lt;img src="XXX.svg" role="img" aria-label="texte de remplacement" /&gt;
</code></pre>

Note : Afin d'assurer un support optimal par les aides techniques et navigateurs, éviter l'usage de `aria-labelledby` pointant sur un texte masqué :

<pre><code class="html">
&lt;p id="alt-text" class="visually-hidden">texte de remplacement&lt;/p&gt;
&lt;img src="XXX.svg" role="img" aria-labelledby="alt-text" /&gt;
</code></pre>

Note : On rajoute `role="img"` pour s’assurer qu’avec macOS Safari, VoiceOver (anciennes versions) annonce bien « image ».

### SVG en ligne (inline)

Le meilleur support pour les SVG est l'affichage en ligne (balise `<svg>`).

<pre><code class="html">
&lt;svg role="img"&gt;
  &lt;title&gt;texte de remplacement&lt;/title&gt;
  ...
&lt;/svg&gt;

&lt;svg role="img" aria-labelledby="alt-text"&gt;
  &lt;title id="alt-text">texte de remplacement&lt;/title&gt;
  ...
&lt;/svg&gt;
</code></pre>

Si besoin, pour des images dont le contenu nécessite une description détaillée, il est possible d'utiliser `aria-labelledby` en référençant le « title » et la « desc » :

<pre><code class="html">
&lt;svg role="img" aria-labelledby="alt-text description"&gt;

  &lt;title id="alt-text"&gt;texte de remplacement court&lt;/title&gt;

  &lt;desc id="description"&gt;
    Description détaillée de l'information portée par l'image.
  &lt;/desc&gt;
  ...
&lt;/svg&gt;
</code></pre>

Note : Afin d'assurer un support optimal par les aides techniques et navigateurs, éviter l'usage de `aria-describedby` pour la description.

### Les SVG dans des liens ou boutons

S'il est possible d'afficher du texte à proximité, la meilleure solution est de simplement masquer le SVG à l'aide de l'attribut `aria-hidden` :

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

Mais comme il n'est pas toujours possible d’afficher un texte (contrainte graphique/design/marketing…), il est conseillé de cacher visuellement un texte tout en le laissant lisible par les aides techniques via `aria-labelledby`&nbsp;:

<pre><code class="html">
&lt;button aria-labelledby="label"&gt; 

  &lt;span id="label" hidden&gt;Rechercher&lt;/span&gt;

  &lt;svg aria-hidden="true" focusable="false"&gt;&lt;!--...--&gt;&lt;/svg&gt;

&lt;/button&gt; 

&lt;a href="/Rechercher"&gt;

  &lt;span id="label" hidden&gt;Rechercher&lt;/span&gt;

  &lt;svg aria-hidden="true" focusable="false"&gt;&lt;!--...--&gt;&lt;/svg&gt;

&lt;/a&gt;
</code></pre>

La solution suivante est équivalente, mais à tester systématiquement dans vos environnements de navigation ciblés (couples navigateur/aide technique) .
La classe `visually-hidden` permet de présenter le texte uniquement aux utilisateurs d’aide technique (masquage accessible). 

<pre><code class="html">
&lt;button&gt;
  &lt;svg focusable="false" aria-hidden="true"&gt;&lt;!--...--&gt;&lt;/svg&gt;
  &lt;span class="visually-hidden"&gt;Rechercher&lt;/span&gt;
&lt;/button&gt;

&lt;a href="/Rechercher"&gt;
  &lt;svg focusable="false" aria-hidden="true"&gt;&lt;!--...--&gt;&lt;/svg&gt;
  &lt;span class="visually-hidden"&gt;Rechercher&lt;/span&gt;
&lt;/a&gt;
</code></pre>


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

## Dernier mot…

En résumé, s'il ne fallait retenir qu'un seul conseil pour du SVG accessible, ce serait TESTER et tester encore !

## Webographie (articles qui m’ont bien, bien aidés)

- https://www.deque.com/blog/creating-accessible-svgs/ 
- https://weboverhauls.github.io/demos/svg/ 
- https://www.scottohara.me/blog/2019/05/22/contextual-images-svgs-and-a11y.html 
- https://www.slideshare.net/webaxe/svg-icons-and-screen-reader-accessibility 
- https://github.com/JeremiePat/svg-accessible/blob/master/slides.md 
- https://www.sarasoueidan.com/blog/accessible-icon-buttons/
- https://www.smashingmagazine.com/2021/05/accessible-svg-patterns-comparison/
