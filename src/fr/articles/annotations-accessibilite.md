---
title: "Spécifier l'accessibilité de vos designs grâce aux annotations"
abstract: "Les annotations d'accessibilité permettent de spécifier comment les différents composants présents sur un écran doivent être interprétés par les outils d'assistance"
titleBeforeTag: true
date: "2022-07-29"
updateDate : "2025-01-31"
tags:
  - beginner
---

## De quoi s'agit-il ?

Les annotations d'accessibilité permettent de spécifier comment les différents composants présents sur un écran doivent être interprétés par les outils d'assistance (par exemple un lecteur d'écran) et d'anticiper certains risques d'erreur d'accessibilité. Bien que certaines annotations peuvent être ajoutées directement par les designers lors de la phase de conception graphique, d'autres demandent une expertise technique. C'est tout l'intérêt de cette activité qui permet d'engager une réflexion transverse sur l'accessiblité (designer, responsable produit, expert en accessibilité, développeur...). 
En l'absence de spécification, l'accessibilité technique repose exclusivement sur les épaules des développeurs, or il s'agit avant tout d'un travail d'équipe.

## Que doit-on annoter ?

Voici quelques exemples d'informations qui peuvent être ajoutées sur vos designs&nbsp;: 
- Les alternatives textuelles pour les images
- Le titre de page
- Les titres à l'intérieur de la page (balises `h1`, `h2`...)
- La sémantique (listes, paragraphes, citations...)
- La liste des différentes régions qui composent la page (landmarks)
- Les éléments interactifs (les liens, les boutons...)
- L'ordre de vocalisation des éléments
- L'ordre de déplacement du focus
- Les formulaires (labels, champs obligatoires, messages d'erreur...)
- La présence de raccourcis clavier (Esc pour fermer une boite de dialogue par exemple)
- La présence de liens d'évitement...

<img src="../images/annotations/exemple.png" alt="Exemple de design pourvu d'annotations pour l'accessibilité" title="Exemple de design pourvu d'annotations pour l'accessibilité" class="img-fluid">


## Comment fait-on ?

Quel que soit le logiciel utilisé, il est simple d'annoter des maquettes. Par exemple, à l'aide de puces numérotées qui renvoient vers une description détaillée. Il existe également des kits d'annotation qui proposent des pastilles de couleurs et de formes différentes qui permettent d'annoter rapidement un design. Le meilleur outil est celui qui correspond le mieux à votre façon de travailler. Il peut être différent en fonction des profils et de la taille de votre équipe. Les kits d'annotation proposent une base qu'il ne faut donc pas hésiter à faire évoluer selon vos besoins.

<img src="../images/annotations/ordre de lecture.png" alt="Exemple de design pourvu d'annotations sur l'ordre de lecture des éléments" title="Exemple de design pourvu d'annotations sur l'ordre de lecture des éléments" class="img-fluid">


## Ressources

Il existe des outils voire des plugins spécifiques pour les principaux outils de maquettage/design&nbsp; : Figma, Sketch, Zeplin.
Mais pour tout autre outil, vous pouvez aussi vous appuyer sur des kits d'annotation qui sont des icônes spécifiques utilisables dans tous les environements.

Voici quelques ressources qui vous permettront d'approfondir le sujet&nbsp;: 
- <a href="https://stephaniewalter.design/blog/a-designers-guide-to-documenting-accessibility-user-interactions/" lang="en" hreflang="en">A Designer’s Guide to Documenting Accessibility & User Interactions</a>
- <a href="https://tangible.is/en/thinking/2024/10/the-value-of-accessibility-annotations-in-inclusive-design" lang="en" hreflang="en">The value of accessibility annotations in inclusive design</a>
- <a lang="en" hreflang="en" href="https://medium.com/indeed-design/building-an-accessibility-library-e134e9012c17">Building an Accessibility Library</a>
- <a hreflang="en" href="https://blog.zeplin.io/introducing-flows-and-annotations-a-new-way-to-communicate-design-intention">Introducing Flows and Annotations</a>
- <a lang="en" hreflang="en" href="https://www.youtube.com/watch?v=Y35jmpS8lQM&feature=youtu.be&ab_channel=InclusiveDesign24%23id24">Annotating designs for Accessibility / Claire Webber and Sarah Pulis</a>

Quelques plugins pour ajouter des annotations sous Figma&nbsp;: 
- <a hreflang="en" href="https://www.figma.com/community/file/953682768192596304">Accessibility Annotation Kit réalisé par Indeed</a>
- <a hreflang="en" href="https://www.figma.com/community/file/1311421011482282592">Web Accessibility Annotation Kit by CVS Health</a>
- <a hreflang="en" href="https://www.figma.com/comunity/plugin/1085612091163821851">axe for Designers by Deque Systems</a>
- <a hreflang="en" href="https://www.figma.com/community/file/1022394680250523675">Intopia's accessibility annotation kit</a>


 
