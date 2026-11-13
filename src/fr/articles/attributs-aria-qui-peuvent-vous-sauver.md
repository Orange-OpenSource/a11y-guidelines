---
title: "Les attributs ARIA qui peuvent vous sauver !"
abstract: "Quelques attributs ARIA à connaître pour avoir un nom accessible"
titleBeforeTag: true
date: "2018-01-08"
updateDate: "2025-12-15"
tags:
  - web
  - intermediate
---

## Introduction
### Nom et description accessible

Un nom accessible est l'information qui permet à l'Aide Technique (<abbr>AT</abbr>), comme un lecteur d'écran ou une loupe logicielle, d'identifier l'élément (balise <abbr>HTML</abbr>) en question. Il peut être fourni par l'intitulé ou le contenu d'un élément, un attribut (exemple : un attribut `alt` pour une image) ou par un élément associé (exemple: une balise `label` pour un champ `input`). Pour aller plus loin, [Le nom accessible en HTML](../le-nom-accessible-en-html/).


Une description accessible est une information plus étendue utilisée par l'<abbr>AT</abbr> pour compléter le nom accessible en le précisant et en lui ajoutant du sens.

Le nom comme la description accessible peuvent être visuellement perceptibles ou non (exemples : intitulé de lien&nbsp; "visible", ou alternative d'image&nbsp;"cachée et utilisable que par une <abbr>AT</abbr>", ...)

### Les attributs <abbr>ARIA</abbr>&nbsp;: `aria-label`, `aria-labelledby` et `aria-describedby`

Trois attributs <abbr>ARIA</abbr> sont très bien supportés par les navigateurs et les <abbr>AT</abbr>: `aria-label`, `aria-labelledby` et `aria-describedby`. Ils permettent de rajouter de l'information à un élément <abbr>HTML</abbr>&nbsp;:
- `aria-label` et `aria-labelledby` permettent de donner un nom accessible à un élément.
- `aria-describedby` permet d’ajouter, si nécessaire, une description accessible à un élément, en complément de son nom accessible.

Cependant, ces attributs <abbr>ARIA</abbr> ne fonctionnent bien qu'avec certains éléments :
- les éléments interactifs&nbsp;: `a` (avec un attribut `href`), `audio` et `video` (avec un attribut `controls`), `input` (sauf si `type="hidden"`), `select`, `button` et `textarea`.
- les éléments : `img` et `iframe`.
- les éléments possédant un rôle de landmark explicite, ayant un attribut `role` ou un landmark implicite (une balise de structure <abbr>HTML5</abbr>&nbsp;: `header`, `footer`, `main`, `nav`, `aside` et `section`). 
- les éléments ayant l'un des <a href="https://www.w3.org/TR/wai-aria-1.1/#widget_roles" lang="en" hreflang="en">rôles de widget définis par <abbr>ARIA</abbr></a> (au nombre de 27 dans la version <abbr>ARIA</abbr> 1.1).

Pour tout autre élément <abbr>HTML</abbr>, ces trois attributs <abbr>ARIA</abbr> ont un support peu robuste, voire aléatoire, selon les couples <abbr>AT</abbr> et navigateur. Il ne faut donc pas les utiliser comme seul moyen de passer une information nécessaire.

## Faut-il les utiliser et comment&nbsp;?
	
Oui, on peut utiliser ces trois attributs <abbr>ARIA</abbr> sur les éléments avec lesquels cela fonctionne (voir ci-dessus) pour passer une information essentielle, spécifiquement aux <abbr>AT</abbr>.

Il faut savoir que `aria-label` doit contenir, comme valeur, une chaîne de caractères qui sera le nom accessible, exemple :

<pre><code class="html">
&lt;button aria-label="Accéder au code HTML (HyperText Markup Language)"&gt;html&lt;/button&gt;
</code></pre>
Sortie pour un lecteur d'écran : "Accéder au code HTML (HyperText Markup Language), bouton".

Pour `aria-labelledby` et `aria-describedby`, la valeur de l’attribut correspond à un ou plusieurs `id` d’éléments (séparés par un espace) de la page. Le contenu de ces éléments est utilisé comme nom accessible pour l’élément portant l’attribut <abbr>ARIA</abbr>, l’auto-référencement étant possible.

Lorsqu'on utilise `aria-label` ou `aria-labelledby` sur un élément, le contenu ou l'intitulé de cet élément n'est plus restitué au <abbr>AT</abbr>, mais est remplacé par le nom accessible, c’est‑à‑dire le contenu de l’attribut pour `aria-label` et le contenu de l’élément référencé pour `aria-labelledby`. Seul, le nom accessible doit donner l'ensemble des informations nécessaires à l'<abbr>AT</abbr> et donc à l'utilisateur.

**Important&nbsp;:** L'`aria-labelledby` peut admettre plusieurs valeurs séparées par un espace et peut s'auto-référencer. Il fonctionne aussi avec du contenu généré par pseudo-éléments <abbr>CSS</abbr> `::before` ou `::after`. On peut également référencer un contenu masqué visuellement par&nbsp;: <abbr>CSS</abbr> (`visibility:hidden;` ou `display:none;`) ou avec l'attribut <abbr>HTML</abbr>5 `hidden`. Cependant, les bonnes pratiques demandent que si l'interface ne permet pas d’afficher une étiquette textuelle visible à l’écran, il est préférable d'utiliser `aria-label` plutôt qu'`aria-labelledby`. 

Lorsque les deux attributs `aria-labelledby` et `aria-label` sont utilisés, les agents utilisateurs donnent la priorité à `aria-labelledby` pour la restitution du contenu, lors du calcul de la propriété du nom accessible, exemple :

<pre><code class="html">
&lt;h2 id="titre"&gt;Code de la page HTML&lt;/h2&gt;
&lt;button aria-label="accéder au code HyperText Markup Language" aria-labelledby="titre"&gt;html&lt;/button&gt;
</code></pre>
Sortie pour un lecteur d'écran : "Code de la page HTML, bouton".

L’attribut `aria-describedby` a pour fonction d’ajouter une description accessible à un élément, en complément de son nom accessible.
Cette description, souvent plus longue ou plus détaillée que le nom accessible, permet de fournir des informations supplémentaires à l’utilisateur, exemples :

<pre><code class="html">
&lt;h3 id="titre"&gt;Code de la page de formulaire de connexion&lt;/h3&gt;
&lt;button aria-label="Accéder au code HTML" aria-describedby="titre"&gt;html&lt;/button&gt;
</code></pre>
Sortie pour un lecteur d'écran : "Accéder au code HTML, bouton, Code de la page de formulaire de connexion".
<pre><code class="html">
&lt;h3 id="titre"&gt;Code de la page de formulaire de connexion&lt;/h3&gt;
&lt;button id="code" aria-describedby="titre"&gt;Accéder au code HTML&lt;/button&gt;
</code></pre>
Sortie pour un lecteur d'écran : "Accéder au code HTML, bouton, Code de la page de formulaire de connexion".