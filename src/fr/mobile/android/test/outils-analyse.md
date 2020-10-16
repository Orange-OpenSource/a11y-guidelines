---
title: "Scan de l'application : les outils d'analyse"
---

# Scan de l'application : les outils d'analyse

Les outils d’analyse complètent parfaitement la première approche, afin de détecter d’autres problèmes d’accessibilité potentiels, comme ceux liés à la taille des boutons, aux contrastes des couleurs etc…

## Accessibility Scanner

Le [scanner](https://play.google.com/store/apps/details?id=com.google.android.apps.accessibility.auditor) est téléchargeable sur le playstore.

Le scanner prend des captures d’écran de la page et vérifie :
- que l’écran contient des “vocalisations ou label” pour le lecteur d’écran
- que les zones cliquables sont suffisamment grandes et qu’elles ont un label propre 
- Les contrastes de couleur

Attention, il ne s'agit que d'une aide à la vérification, l’outil remonte parfois des faux positifs.

Certaines de ces vérifications font doublon avec `lint`.
En cas de doute sur les contrastes, [<span lang="en">Colour contrast analysor</span>](https://developer.paciellogroup.com/resources/contrastanalyser/) permet de faire un diagnostic plus précis.

### Mode opératoire :

- Activer le scanner dans les **paramètres/accessibilité/Accessibility Scanner** (paramètres/accessibilité/Services installés/Accessibility Scanner avec la surcouche de Samsung). Cela affiche un “<span lang="en">floating action button</span>” sur l’écran.
- Actionner le bouton sur les écrans à tester. Une capture d’écran est réalisée et la liste des corrections suggérées s’affiche.

**Exemple d'utilisation de l'<span lang="en">Accessibility Scanner</span> :**   

Le <span lang="en">floating button</span> permettant de générer un rapport lorsque <span lang="en">Accessibility Scanner</span> est actif.

<img src="../../images/scanner_floating.jpg" alt="capture d’écran présentant l'application Orange TV, avec le bouton flottant permettant de déclencher le scan" width="25%">

Le rapport ainsi généré par <span lang="en">Accessibility Scanner</span> une fois le bouton cliqué.

<img src="../../images/scanner_report.jpg" alt="capture d’écran présentant le rapport de l'outil Accessibility Scanner" width="25%">  



## <span lang="en">Google Play - Pre Launch Report</span>

Proche de l’analyse effectuée par <span lang="en">Accessibility Scanner, Google Play</span>  est en mesure de générer des rapports d’accessibilité après avoir transféré son application sur la console développeur. Celui-ci, s’appuyant sur le même Framework que l’application <span lang="en">Accessibility Scanner</span>, vérifie notamment 3 exigences <span lang="en">UI</span> au sein de l’application :

- La zone utilisée pour les éléments interactifs : un bouton trop petit sera alors indiqué dans le rapport par exemple
- Les contrastes : vérifie que les ratios de contraste sont respectés entre les textes et leurs backgrounds
- Les descriptions de contenu : vérifie que tous les éléments possèdent un texte pour le décrire à l’utilisateur en cas de besoin

Ce test étant réalisé depuis la console <span lang="en">Google Play</span>, cela peut être une dernière vérification faite par le Product Owner lui-même, avant de pousser en production l’application, et ainsi constater que les critères d’accessibilité ont bien été respectés.


**Exemple de rapport généré par <span lang="en">Google Play Report</span> :**   

![capture d’écran présentant un rapport d'accessibilité, sur la console développeur](../../images/google_report.png) 


## aXe

aXe est une application présente sur le <span lang="en">Google Play Store</span> et qui permet, de même que <span lang="en">Accessibility Scanner</span> ou que le <span lang="en">Pre Launch Report</span> de Google, d’afficher les problèmes d’accessibilité au sein des différents écrans de son application. Bien que redondant avec les deux outils précédents présentés dans certaines vérifications, il est recommandé de l’utiliser en complément, puisqu’il sera en mesure d’afficher des erreurs différentes d’accessibilité, et complètera donc parfaitement les premiers examens, pour avoir un compte rendu plus complet.

L’utilisation d’aXe est très facile, puisqu’il suffit de télécharger l’application et de se laisser ensuite guider. A l’aide d’un <span lang="en">floating buton</span>, une analyse pourra être lancée sur l’écran de son choix, et les rapports d’erreurs seront immédiatement retranscrits au bas de l’écran.

**Exemple d'utilisation de aXe :**   

Le <span lang="en">floating button</span> de l'application aXe permettant de déclencher un rapport.

<img src="../../images/aXe_floating.jpg" alt="capture d’écran de l'application Orange TV, avec le bouton aXe permettant de déclencher le scan" width="25%">   

Le rapport ainsi généré par aXe une fois le bouton cliqué.

<img src="../../images/aXe_report.jpg" alt="capture d’écran présentant le rapport de l'outil aXe" width="25%">   



## <span lang="en">UI Automator View</span>

<span lang="en">UI Automator View</span> est un outil présent dans le SDK Android, qui permet de scanner et d’analyser les composants UI d’une application Android. Cela permet ainsi de voir la hiérarchie des vues et les différentes propriétés pour chacune d’elle.
Bien que n’étant pas un outil dédié à l’accessibilité, celui-ci peut être utilisé afin d’analyser plus en détail un problème d’accessibilité rencontré, et ainsi mieux en comprendre l’origine.

Pour utiliser cet outil, vous avez donc besoin d’installer le SDK Android. Une fois celui-ci installé, vous devriez pouvoir trouver l’outil au chemin suivant : **C:\users\username\AppData\Local\Android\sdk\tools\uiautomatorviewer.bat**

Il est ainsi possible de l’utiliser au sein d’une application présente sur son téléphone, si celui-ci a le mode développeur activé et qu’il est connecté via un câble USB à l’ordinateur sur lequel <span lang="en">UI Automator View/<span> est lancé. Une fois ces conditions réunies, il suffit de cliquer sur le bouton <span lang="en">Device Screenshot</span> dans l’outil pour lancer l’analyse des composants UI de l’écran affiché sur le téléphone.



## Outil tracé des contours

Il est possible sous Android d’afficher les contours des différentes vues d’une application, ce qui permet de détecter les possibles problématiques liées aux dimensions des éléments, de vérifier des marges suffisantes entre divers éléments, et de vérifier que chaque zone sensible a une taille suffisante.
Pour ce faire, il suffit de naviguer dans les paramètres, puis dans les options pour les développeurs du téléphone, et d’activer l’option « Afficher les contours » dans la catégorie « Tracé »

**Exemple d'utilisation du tracé des contours :**   

L'écran des paramètres permettant d'activer le tracé des contours.

<img src="../../images/contour_param.jpg" alt="capture d’écran présentant l'écran des paramètres, avec la checkbox permettant d'activer ou de désactiver l'affichage des contours" width="25%"> 

Exemple d'écran avec le tracé des contours actifs

<img src="../../images/contour_UI.jpg" alt="capture d’écran présentant un écran de l'application Orange TV, en ayant le tracé des contours des différentes vues" width="25%"> 



## <span lang="en">Colour Contrast Analyser</span>

Les contrastes de couleurs se vérifient sur les maquettes de l’application, ou via <span lang="en">Accessibility Scanner</span> sur un mobile Android. Si un doute subsiste, il est possible de faire un screenshot de l’application, puis de faire une vérification sur un ordinateur [Mesurer le niveau de contraste des couleurs](../../../web/outils/methodes-et-outils-de-test/mesurer-contraste-couleurs/) via l'outil <span lang="en">Colour Contrast Analyser</span>.
Pour les valeurs à respecter voir la [section concernant les couleurs](../conception#couleurs).

<span class="licence" lang="en">These images are licensed under a Creative Commons Share Alike 2.0 license. Photo credit: <a href="http://www.flickr.com/people/27512715@N02/" hreflang="en">openexhibits</a></span>

