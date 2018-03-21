# <abbr>HTML5</abbr> & <abbr>ARIA</abbr>

<script>$(document).ready(function () {
    setBreadcrumb([{"label":"<abbr>HTML5</abbr> & <abbr>ARIA</abbr>"}]);
});</script>

## Introduction

Les sites internet sont de plus en plus dynamiques (chargement asynchrone, génération dynamique de contenu) et interactifs (composants d’interface complexes&nbsp;: <i lang="en">slider</i>, <i lang="en">datepicker</i>…). Il est donc très difficile voire impossible de rendre ce genre de composants accessibles avec le <abbr>HTML</abbr> classique. 

Même avec l’évolution due au <abbr>HTML5</abbr>, on manque encore d’informations sémantiques à fournir aux aides techniques (lecteurs d’écran, loupes logicielles…), la navigation clavier est souvent impossible, la gestion complexe du focus clavier est absente et les mises à jour des régions dynamiques ne sont pas signalées.

## Qu’est-ce que c’est&nbsp;?

Pour remédier à ces limitations, le <abbr>W3c</abbr>/<abbr>WAI</abbr> a officiellement publié une recommandation appelée <abbr>ARIA</abbr>, pour <i lang="en">Accessible Rich Internet Applications</i>, ainsi qu’une suite de documents traitant de l’utilisation d’<abbr>ARIA</abbr>.

<abbr>ARIA</abbr> est une sur-couche sémantique à base de couples attribut/valeur utilisables dans les langages de balisage tels que <abbr>HTML</abbr>, <abbr>SVG</abbr>, <abbr>XML</abbr>, etc. Cette recommandation est composée de rôles, d’états et de propriétés qui vont spécifiquement interagir avec les aides techniques (<abbr>AT</abbr>). Grâce à <abbr>ARIA</abbr>, on peut décrire des éléments et leurs comportements en <abbr>HTML</abbr> lorsqu’ils sont nativement non sémantiquement explicites, par exemple, des onglets, les arbres dépliants, des régions dynamiques, les info-bulles, les fenêtres modales. <abbr>ARIA</abbr> définit également comment doit se comporter un composant d’interface avec le clavier afin d’homogénéiser l’expérience des utilisateurs qui naviguent au clavier. ** <abbr>ARIA</abbr> prend tout son sens et exprime tout son potentiel lorsqu’il est utilisé dans du <abbr>HTML5</abbr> **.

Aria ne rajoute aucun comportement particulier ni aucune présentation visuelle aux composants d’interface. Il faut donc toujours assurer la mise en forme grâce aux <abbr>CSS</abbr>, le contrôle du contenu et la gestion de l’interactivité via Javascript.

## Le support

Le support d’<abbr>ARIA</abbr> s’améliore constamment et est déjà présent depuis longtemps&nbsp;:
- Dans les navigateurs modernes (Firefox >=3.0, Chrome >=16, Safari >=4, Opera >=9.5, Internet Explorer 8 pour un support basique, Internet Explorer >=9 et Edge pour un support avancé).
- Dans les aides techniques (<abbr>NVDA</abbr> >=2010, Orca >= 2 + Firefox uniquement, VoiceOver <abbr>OSX</abbr> >=10.5, <abbr>iOS</abbr> >=4, <abbr>JAWS</abbr> >=8, Window-Eyes >=7, ZoomText 10 pour un support basique, ZoomText >=11 pour un support avancé).  

De plus, l’efficacité optimale de la prise en charge d’<abbr>ARIA</abbr> dépend du couple navigateur&nbsp;/ aide technique&nbsp;: Firefox avec <abbr>NVDA</abbr>, Jaws avec Internet Explorer et Safari avec VoiceOver, par exemple.

## Faut-il l’utiliser&nbsp;?

Globalement, <abbr>ARIA</abbr> améliore l’accessibilité pour des composants pas nativement présents en <abbr>HTML</abbr> (ou pas accessibles notamment certains éléments <abbr>HTML5</abbr>). La robustesse et l’interopérabilité d’<abbr>ARIA</abbr> sont maintenant suffisantes pour qu’[une vingtaine de techniques WCAG 2.0 soient spécifiques à <abbr>ARIA</abbr>](https://www.w3.org/WAI/GL/WCAG20-TECHS/aria.html) (contre 10 techniques <abbr>HTML5</abbr>). En conséquence, pour des applications Internet riches, l’<abbr>ARIA</abbr> est incontournable pour leur mise en accessibilité.

Dans tous les cas, il faut tester les développements sur les environnements cibles (couple navigateurs&nbsp;/ aides techniques). C’est un gros travail absolument nécessaire pour les cas complexes car sur un site ou une application internet classique, il faut, à minima, tester avec Safari/VoiceOver, Jaws/Internet Explorer et Firefox/<abbr>NVDA</abbr>.

Dans un environnement maîtrisé (intranet), les environnements cibles sont connus et en nombre fini, on peut donc statuer plus facilement&nbsp;!

## Webographie
* <abbr>W3c</abbr>&nbsp;:
  * [Spécification <abbr>ARIA</abbr>](http://www.w3.org/TR/wai-aria/)
  * [Mettre en place <abbr>ARIA</abbr>](http://www.w3.org/TR/wai-aria-practices/), attention «&nbsp;<i lang="en">working draft</i>&nbsp;»
  * [Utiliser <abbr>ARIA</abbr> en <abbr>HTML</abbr> (5)](http://www.w3.org/TR/aria-in-html/) , attention «&nbsp;<i lang="en">working draft</i>&nbsp;»
  * [Techniques <abbr>ARIA</abbr> dans les <abbr>WCAG</abbr> 2](https://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/aria.html)
* [Introduction à <abbr>ARIA</abbr> chez Site Point](http://www.sitepoint.com/introduction-wai-aria/)
* [Introduction et liste de liens vers des sources sur <abbr>ARIA</abbr>](http://developer.mozilla.org/fr/docs/Accessibilit%C3%A9/ARIA)

<!--  This file is part of a11y-guidelines | Our vision of mobile & web accessibility guidelines and best practices, with valid/invalid examples.
 Copyright (C) 2016  Orange SA
 See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). -->