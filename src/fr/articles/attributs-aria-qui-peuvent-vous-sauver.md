---
title: "Les attributs ARIA qui peuvent vous sauver !"
abstract: "Quelques attributs ARIA à connaître pour avoir un nom accessible"
date: "2018-01-08"
tags:
  - web
---

# Les attributs <abbr>ARIA</abbr> qui peuvent vous sauver&nbsp;: `aria-label`, `aria-labelledby` et `aria-describedby` 

## Introduction
### Nom et description accessible

Un nom accessible (pour aller plus loin, [Le nom accessible en HTML](../le-nom-accessible-en-html/)) est l'information qui permet à l'aide technique (<abbr>AT</abbr>), par exemple, un lecteur d'écran ou une loupe logicielle, d'identifier l'élément (tag <abbr>HTML</abbr>) en question. Il peut être fourni par l'intitulé ou le contenu d'un élément, un attribut (par exemple, un attribut `alt` pour une image) ou par un élément associé (par exemple, une balise `label` pour un champ `input`).

Une description accessible est une information plus étendue qui est utilisée par l'<abbr>AT</abbr> lui permettant de compléter le nom accessible en précisant et rajoutant du sens là ou le nom accessible n'est pas suffisant.

Le  comme la description accessible peuvent être visuellement perceptible ou pas (intitulé de lien&nbsp;: visible, alternative d'image&nbsp;: cachée et utilisable que par une <abbr>AT</abbr>...)

### Les attributs <abbr>ARIA</abbr>&nbsp;: `aria-label`, `aria-labelledby` et `aria-describedby`

Trois attributs <abbr>ARIA</abbr> sont très bien supportés par les navigateurs et les <abbr>AT</abbr>: `aria-label`, `aria-labelledby` et `aria-describedby`. Ils permettent de rajouter de l'information à un élément <abbr>HTML</abbr>&nbsp;:
- `aria-label`, `aria-labelledby` permettent de donner un nom accessible à un élément
- `aria-describedby` permet de rajouter au nom accessible, si besoin, en sus, une description accessible à un élément

Cependant, ils ne fonctionnent bien qu'avec certains éléments :
- les éléments interactifs&nbsp;: `a` (avec un attribut `href`), `audio` et `video` (avec un attribut `controls`), `input` (sauf si `type="hidden"`), `select`, `button` et `textarea`
- les éléments `img` et `iframe`
- les éléments possédant un rôle de landmark explicite, donc, avec un attribut `role` ou un landmark implicite (une balise de structure <abbr>HTML5</abbr>&nbsp;: `header`, `footer`, `main`, `nav`, `aside` et `section`) 
- les éléments avec un des  <a href="https://www.w3.org/TR/wai-aria-1.1/#widget_roles" lang="en" hreflang="en">rôles de widget d'<abbr>ARIA</abbr> (27 pour <abbr>ARIA</abbr> 1.1)</a>.

Pour tout autre élément <abbr>HTML</abbr>, ces trois attributs <abbr>ARIA</abbr> ont un support peu robuste voire aléatoire selon les couples <abbr>AT</abr>/navigateur, donc ne pas l'utiliser comme seul moyen de passer une information nécessaire.

## Faut-il les utiliser et comment&nbsp;?
	
Oui, on peut utiliser ces trois attributs <abbr>ARIA</abbr> sur les éléments avec lesquels cela fonctionne (voir ci-dessus) pour passer une information essentielle, spécifiquement aux <abbr>AT</abbr>.

Il faut savoir que `aria-label` doit contenir, comme valeur, une chaîne de caractères qui sera le nom accessible. Alors que pour `aria-labelledby` et `aria-describedby`, la valeur de cet attribut référence le  ou les (séparée par un espace) `id` d'éléments (auto référencement possible) de la page dont le contenu sera utilisé comme nom accessible de l'élément portant l'attribut <abbr>Aria</abbr>.

Lorsqu'on utilise `aria-label` ou `aria-labelledby` sur un élément, le contenu ou l'intitulé de cet élément n'est plus restitué au <abbr>AT</abbr>, mais remplacé par le nom accessible (pour `aria-label` le contenu de cet attribut, pour `aria-labelledby` le contenu de l'élément référencé). Donc, seul, le nom accessible doit donner l'ensemble des informations nécessaires à l'<abbr>AT</abbr> et donc à l'utilisateur.

**Important&nbsp;:** l'`aria-labelledby` peut admettre plusieurs valeurs séparées par un espace et peut s'auto-référencer. Il fonctionne aussi avec du contenu généré par pseudo-classes <abbr>CSS</abbr> `::before` ou `::after`. On peut également référencer un contenu masqué visuellement par&nbsp;: <abbr>CSS</abbr>,  `visibility:hidden;` ou `display:none;`, et avec l'attribut <abbr>HTML</abbr>5 `hidden`. Cependant, les bonnes pratiques demandent que si l'interface est telle qu'il n'est pas possible d'avoir une étiquette textuelle visible à l'écran, il est préférable d'utiliser `aria-label` plutôt que `aria-labelledby`. 

Lorsque les deux attributs `aria-labelledby` et `aria-label` sont utilisés, les agents utilisateurs donnent la priorité (et donc sera le seul contenu restitué) à `aria-labelledby` lors du calcul de la propriété de nom accessible. 

Quant à lui, `aria-describedby` va rajouter au nom accessible de l'élément, une description accessible, plus longue ou plus complète, logiquement, que le nom accessible. 

## Exemples

<pre><code class="html">
&lt;button aria-label="accéder au code Hypertext markup language"&gt;html&lt;/button&gt;
</code></pre>
Sortie pour un lecteur d'écran : "accéder au code Hypertext markup language"

<pre><code class="html">
&lt;h2 id="titre"&gt;Code de la page HTML&lt;h2&gt;
&lt;button aria-label="accéder au code Hypertext markup language" aria-labelledby="titre"&gt;html&lt;/buttton&gt;
</code></pre>
Sortie pour un lecteur d'écran : "Code de la page HTML"

<pre><code class="html">
&lt;h3 id="titre"&gt;Code de la page de formulaire de connexion&lt;h3&gt;
&lt;button aria-label="accéder au code HTML" aria-describedby="titre"&gt;html&lt;/buttton&gt;
</code></pre>
Sortie pour un lecteur d'écran : "accéder au code HTML code de la page de formulaire de connexion"

<pre><code class="html">
&lt;h3 id="titre"&gt;Code de la page de formulaire de connexion&lt;h3&gt;
&lt;button id="code" aria-describedby="code titre"&gt;Accéder au code HTML&lt;/buttton&gt;
</code></pre>
Sortie pour un lecteur d'écran : "Accéder au code HTML code de la page de formulaire de connexion"
