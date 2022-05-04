---
title: "Comment tester le WCAG 1.3.2 ? (Ordre Séquentiel Logique)"
abstract: "Les bonnes pratiques pour tester le critère WCAG 1.3.2"
titleBeforeTag: true
date: "2022-04-21"
tags:
  - web
  - advanced
---

## Que signifie le Wcag 1.3.2

### Explication générale


/* A RÉECRIRE */
Le but de [ce critère](https://www.w3.org/WAI/WCAG21/Understanding/meaningful-sequence) est de s'assurer que si l'ordre du contenu est important, celui-ci doit être préservé quelle que soit la manière dont il est présenté à l'utilisateur, par exemple si on désactive le CSS ou si on utilise un lecteur d'écran.

Fournir un ordre de lecture est important que si ça affecte le sens. Une liste ordonnée est une séquence significative, il faut donc que le sens de lecture soit bien significatif peut importe la manière dont il est présenté à l'utilisateur. En revanche, pour une liste non-ordonnée l'ordre de lecture n'affecte pas le sens.

### Ce qu'il ne faut pas faire

#### Utiliser des espaces blancs pour formater du texte brut

Pour présenter du contenu, il est important de ne pas utiliser des caractères d'espacement, comme les espaces, la tabulation, le saut de ligne ou le retour chariot.
Dans certains cas, ces caractères sont utilisés pour formater des tableaux, ou des colonne des données dans un contenu textuel. Cette méthode est proscrit car les technologies d'assistances ne se verra pas présenter les informations dans un ordre de lecture logique, et les informations retournées par cette technologie seront incrompréhensible.


Ci-dessous, deux exemple qui ne sont pas valides aux lecteurs d'écran.

##### Exemple de caracères d'espacement pour formater un tableaux.

<pre class="border border-light">

Horaires de travail avec Salle de classe
 
                                                         
            Lundi                Mardi             Mercredi     

 Matin      9H30-13H             9H30-13H          8H-12H     
            B201                 B201              A001

 Après-     14h-17h              14h-17h           Repos
 Midi       A103                 B201

</pre>

On remarque, que la présentation ci-dessus est très visuelle, mais le texte n'est pas adapté, car il est impossible de répresenter les relations tabulaires.
Ce qui change le sens de lectures pour les technologies d'assistance. Il faudrait utiliser un tableau ou présenter les informations de manière linéaire.

##### Exemple de caracères d'espacement pour séparer du contenu en deux colonnes.

<p class="border border-light">
L’accessibilité numérique vise à rendre possible &emsp;&emsp;&emsp;il ne s’agit pas de démultiplier les <br/>
l’accès à l’informationnumérique quelle que soit &emsp;&emsp;&emsp;supports de l’information, mais de<br/>
la nature du handicap des personnes et la façon &emsp;&emsp;&emsp; respecter des règles fonctionnelles, graphiques,  <br/>
dont chacun consulte l’information. Elle concerne &emsp;&emsp;&emsp; techniques et éditoriales qui permettront à tous <br/>
différentes technologiescomme le Web, les vidéos &emsp;&emsp;&emsp; d’accéder à l’informationquels que soient leurs <br/>
et les documents Word et PDF, mais également la &emsp;&emsp;&emsp; outils de consultation. <br/>
télévision numérique ou les téléphones mobiles. &emsp;&emsp;&emsp;
</p>

Le paragraphe au-dessus n'est pas conforme, des caractères d'espacement sont utilisés pour séparer le texte en deux colonnes, mais les technologies d'assistance liront le texte ligne par ligne ce qui affectera donc l'ordre de lecture.

#### Utiliser un tableau de mise en page

Même si les WCAG n'interdisent pas l'utilisation des tableaux de mise en page, il est recommandé d'utiliser la mise en page en CSS afin de conserver la lecture semantique du contenu. Si un tableau de mise en page est utilisé, il est important que le contenu est un sens lorsqu'il est linéarisé.

Les tableaux présentent le contenu de manière horizontale et verticale, cependant une technologie d'assistance lit se contenu de manière linéaire, le tableau est lu de haut en bas en lisant l'intégralité de la ligne avant de passer à la suivante.

C'est pour cela qu'il faut faire attention lorsqu'on utilise un tableau de mise en page, il faut bien vérifier que le contenu est compréhensible avec un lecteur d'écran.

##### Exemple d'un tableau non-valide

<table role="presentation" class="m-2 border border-light">
  <tr>
    <td><a href="#">Accueil <span class="visually-hidden">(exemple)</span></a></td>
    <td rowspan="4"><img src="/assets/images/orange-logo.svg" alt="exemple logo" width="100" height="100
    "></td>
  </tr>
  <tr>
    <td><a href="#">L'équipe <span class="visually-hidden">(exemple)</span></a></td>
  </tr>
  <tr>
    <td><a href="#">Actualités <span class="visually-hidden">(exemple)</span></a></td>
  </tr>
  <tr>
    <td><a href="#">Contact <span class="visually-hidden">(exemple)</span></a></td>
  </tr>
</table>

Le tableau ci-dessus permet d'afficher un menu, avec le logo sur le côté.

Le problème est qu'au lecteur d'écran l'ordre de lecture est modifié, car au lieu d'énoncer tous les liens du menu, l'image sera vocalisé au milieu de ceux-ci.

#### Utiliser du CSS pour positionner l'information

Pour positionner du contenu, il est recommandé d'utiliser le balisage structurel, afin de le mettre dans le bon ordre de lecture, plutôt que les propriétés de positionnement du CSS. Ça peut engendrer des erreurs, car le contenu peut s'afficher dans un ordre différent dans lequel il se trouve dans le code source.

Si un utilisateur désactive le css, ou utilise un lecteur d'écran la restitution de l'information ne sera plus dans le bon ordre.

##### Exemple d'un menu positionner en CSS

<div class="border border-light position-relative" style="width: 320px;height:180px">      
     <span class="position-absolute top-0 start-0"><strong>Sports</strong></span>       
     <span class="position-absolute top-0 end-0"><strong>Produit</strong></span>       
     <span class="position-absolute top-50 start-0">Football</span>       
     <span class="position-absolute start-0" style="top:75%!important">Tennis</span>       
     <span class="position-absolute start-0" style="top:90%!important">Rugby</span>       
     <span class="position-absolute top-50 end-0">Vêtements</span>       
     <span class="position-absolute end-0" style="top:75%!important">Accessoires</span>
</div>

<div class="mt-3">
La mise en page ci-dessus a été créé avec du CSS, si vous désactivez le CSS, vous allez remarquer que le sens de lecture sera différent que celui affiché.
</div>