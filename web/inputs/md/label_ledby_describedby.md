# <abbr>HTML5</abbr> & <abbr>ARIA</abbr>

<script>$(document).ready(function () {
    setBreadcrumb([{"label":"<abbr>ARIA</abbr> Label, labelledy et describedby"}]);
});</script>

## Introduction
### Nom et description accessible

Un nom accessible est l'information qui permet à l'<abbr>AT</abbr> d'identifier l'élément en question. Il peut être fourni par l'intitulé ou le contenu d'un élément, un atrribut (part exemple, un attribut `alt` pour une image) ou par un élément associé (par exemple, une balise `label` pour un champ `input`).

Une description accessible est une information plus étendue qui est utilisé par l'<abbr>AT</abbr> lui permettant de compléter le nom accessible en précisant et rajoutant du sens là ou le nomaccessible n'est pas suffisant.

Le nom accessible comme la description accessible peuvent être visuellement perceptible ou pas (intitulé de lien&nbsp;: visible, altenative d'image&nbsp;: cachée et utilisable que par une <abbr>AT</abbr>)

### Les attributs <abbr>ARIA</abbr>&nbsp;: `aria-label`, `aria-labelledby` et `aria-describedby`

Trois attributs <abbr>ARIA</abbr> sont très bien supportés par les navigateurs& et les <abbr>AT</abbr>, ce sont `aria-label`, `aria-labelledby` et `aria-describedby`. Ils permettent de rajouter de l'infomation à un éléments <abbr>HTML</abbr>&nbsp;:
- `aria-label`, `aria-labelledby` permettent de donner un nom accessible à un élément
- `aria-describedby` permet de rajouter, si besoin, une description accessible à un élément

Lorsque les deux attributs aria-labelledby et aria-label sont utilisés, les agents utilisateurs donnent la priorité à aria-labelledby lors du calcul de la propriété de nom accessible.

Cependant, ils ne fonctionnent bien qu'avec certains éléments :
- les élémens interacifs&nbsp;: `a` (avec un attribut `href`), `audio` et `video` (avec un attribut `controls`), `input` (sauf si `type="hidden"`), `select`, `button` et `textarea`
- les éléments`img` et `iframe`
- les éléments possédant un rôle de landmark explicite, donc, avec un attribut `role` ou un landmark implicite (une balise de structure <abbr>HTML5</abbr>&nbsp;: `header`, `footer`, `main`, `nav`, `aside` et `section`) 
- les éléments avec un des  <a href="https://www.w3.org/TR/wai-aria-1.1/#widget_roles" lang="en" hreflang="en">rôles de widget d'<abbr>ARIA</abbr> (27 pour <abbr>ARIA</abbr> 1.1)</a>

## Faut-il l’utiliser&nbsp;?
	

If you use aria-label, aria-labelledby, or aria-describedby with any other elements (like div, span, p, blockquote, or strong etc.), they generally won’t work across all browser/assistive technology combinations.



<!--  This file is part of a11y-guidelines | Our vision of mobile & web accessibility guidelines and best practices, with valid/invalid examples.
 Copyright (C) 2016  Orange SA
 See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). -->