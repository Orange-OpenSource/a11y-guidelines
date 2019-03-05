# Extensions pour navigateur

<script>$(document).ready(function () {
    setBreadcrumb([
        {"label":"Outils de test", "url": "./methodes-outils.html"},
        {"label":"Extensions pour navigateur"}]);
});</script>

<span data-menuitem="methodes-outils"></span>

Certaines extensions permettent d’effectuer des tests automatiques sur la page en cours de consultation.

## <span lang="en">aXe accessibility audit</span>
[aXe](http://www.deque.com/axe/) est une extension disponible pour Chrome et Firefox permettant d’effectuer une série de tests basés sur les [WCAG](https://www.w3.org/WAI/intro/wcag).

![capture d’écran de l’extension axe](images/aXe.png)
&nbsp;

## <span lang="en">Wave toolbar</span>
[<span lang="en">Wave toolbar</span>](http://wave.webaim.org/extension/) est une barre d’extension pour Chrome. Tout comme aXe, elle permet d’effectuer une série de tests d’accessibilité sur la page en cours (proche des tests automatique de aXe). À la différence de ce dernier qui affiche les erreurs dans un onglet de l’inspecteur web, ici les erreurs sont affichées directement dans la page. Il existe un [bookmarklet (ou favlet) pour <span lang="en">Wave</span>](http://wave.webaim.org/help).

![capture d’écran de l’extension wave toolbar](images/wave.png)
<span lang="en">Wave toolbar</span> assure un grand nombre de tests automatiques mais aussi un certains nombre de tests semi-manuels qui demandent validation humaine,  appelés alertes ou <span lang="en">alert</span>. Que ce soit les alertes ou les erreurs, on peut examiner le noeud <abbr>DOM</abbr> qui à généré cette remontée et accéder à une information plus détaillée sur le critère d'accessibilité non respecté et comment y remédier.

Cette extension permet, également, de visualiser directement la hiérarchie des titres de la page (via un onglet dans la barre latérale), afficher la page avec et sans <abbr>CSS</abbr> et visualiser les problèmes de contraste via des icônes situés dans la page.

<!--  This file is part of a11y-guidelines | Our vision of mobile & web accessibility guidelines and best practices, with valid/invalid examples.
 Copyright (C) 2016  Orange SA
 See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). -->