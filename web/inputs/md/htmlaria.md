# HTML5 & ARIA

<script>$(document).ready(function () {
    setBreadcrumb([{"label":"HTML5 & ARIA"}]);
});</script>

## Introduction

Les sites internet sont de plus en plus dynamiques (chargement asynchrone, génération dynamique de contenu) et interactifs (composants d’interface complexes : slider, datepicker…). Il est donc très difficile voire impossible de rendre ce genre de composants accessibles avec le HTML classique. 

Même avec l’évolution due au HTML5, on manque encore d’informations sémantiques à fournir aux aides techniques (lecteurs d’écran, loupes logicielles…), la navigation clavier est souvent impossible, la gestion complexe du focus clavier est absente et les mises à jour des régions dynamiques ne sont pas signalées.

## Qu’est-ce ?

Pour remédier à ces limitations, le W3c/WAI a officiellement publié une recommandation appelée ARIA, pour Accessible Rich Internet Applications, ainsi qu’une suite de documents traitant de l’utilisation d’ARIA.

ARIA est une sur-couche sémantique à base de couples attribut/valeur utilisables dans les langages de balisage tels que HTML, SVG, XML, etc. Cette recommandation est composée de rôles, d’états et de propriétés qui vont spécifiquement interagir avec les aides techniques (AT). Grâce à ARIA, on peut décrire des éléments et leurs comportements en HTML lorsqu’ils sont nativement non sémantiquement explicites, par exemple, des onglets, les arbres dépliants, des régions dynamiques, les info-bulles, les fenêtres modales. ARIA définit également comment doit se comporter un composant d’interface avec le clavier afin d’homogénéiser l’expérience des utilisateurs qui naviguent au clavier. ** ARIA prend tout son sens et exprime tout son potentiel lorsqu'il est utilisé dans du HTML5 **.

Aria ne rajoute aucun comportement particulier ni aucune présentation visuelle aux composants d’interface. Il faut donc toujours assurer la mise en forme grâce aux CSS, le contrôle du contenu et la gestion de l’interactivité via Javascript.

## Le support

Le support d’ARIA s’améliore constamment et est déjà présent depuis longtemps :
- Dans les navigateurs modernes (Firefox >=3.0, Chrome >=16, Safari >=4, Opera >=9.5, Internet Explorer 8 pour un support basique, Internet Explorer >=9 et Edge pour un support avancé).
- Dans les aides techniques (NVDA >=2010, Orca >= 2 + Firefox uniquement, VoiceOver OSX >=10.5, iOS >=4, JAWS >=8, Window-Eyes >=7, ZoomText 10 pour un support basique, ZoomText >=11 pour un support avancé).  

De plus, l’efficacité optimale de la prise en charge d’ARIA dépend du couple navigateur, aide technique, Firefox avec NVDA, Jaws avec Internet Explorer et Safari avec VoiceOver, par exemple.

## Faut-il l’utiliser ?

Globalement, ARIA améliore l’accessibilité pour des composants pas nativement présents en html (ou pas accessibles notamment certains 
HTML5). La robustesse et l’interopérabilité d’ARIA sont maintenant suffisantes pour qu’[une vingtaine de techniques WCAG 2.0 soient spécifiques à ARIA](https://www.w3.org/WAI/GL/WCAG20-TECHS/aria.html) (contre 10 techniques HTML5). En conséquence, pour des applications Internet riches, l’ARIA est incontournable pour leur mise en accessibilité.

Dans tous les cas, il faut tester les développements sur les environnements cibles (couple navigateurs aides techniques). C’est un gros travail absolument nécessaire pour les cas complexes car sur un site ou une application internet classique, il faut, à minima, tester avec Safari/VoiceOver, Jaws/Internet Explorer et Firefox/NVDA.

Dans un environnement maitrisé (intranet), les environnements cibles sont connus et en nombre fini, donc, on peut statuer plus facilement !

## Webographie
* Page de synthèse sur "ARIA in HTML" : https://specs.webplatform.org/html-aria/webspecs/master/
* W3c :
  * Introduction à ARIA : http://www.w3.org/TR/wai-aria/introduction 
  *	Spécification ARIA : http://www.w3.org/TR/wai-aria/
  * Mettre en place ARIA : http://www.w3.org/TR/wai-aria-practices/, attention « working draft »
  * Utiliser ARIA en HTML (5) : http://www.w3.org/TR/aria-in-html/ , attention « working draft »
  *	Techniques ARIA dans les WCAG 2 : https://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/aria.html 
* Introduction à ARIA chez Site Point : http://www.sitepoint.com/introduction-wai-aria/ 
* Introduction et liste de liens vers des sources sur ARIA : http://developer.mozilla.org/fr/docs/Accessibilit%C3%A9/ARIA 
<!--  This file is part of a11y-guidelines | Our vision of mobile & web accessibility guidelines and best practices, with valid/invalid examples.
 Copyright (C) 2016  Orange SA
 See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). -->