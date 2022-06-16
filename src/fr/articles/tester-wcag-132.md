---
title: "Qu'est-ce que l'ordre Séquentiel logique (Wcag 1.3.2)"
abstract: "Les bonnes pratiques pour le critère WCAG 1.3.2"
titleBeforeTag: true
date: "2022-06-16"
tags:
  - web
  - advanced
---


## Explication générale

Le but du  [critère WCAG 1.3.2](https://www.w3.org/WAI/WCAG21/Understanding/meaningful-sequence) est de s'assurer que si l'ordre du contenu est important, celui-ci doit être préservé quelle que soit la manière dont il est présenté à l'utilisateur, par exemple si on désactive le CSS ou si on utilise un lecteur d'écran.

L'ordre d'un contenu est <strong>important</strong> si l'ordre du contenu ne peut pas être modifié sans en affecter sa signification.
Par exemple, pour une liste ordonnée ou un tableau, l'ordre du contenu est important, en revanche pour une liste non-ordonné, on peut modifier l'ordre de lecture sans que ça n'impacte la compréhension de l'utilisateur.

Dans une page WEB, la position d'une section de navigation et de la section principale de la page, généralement, n'affecte pas la compréhension du contenu de la page, que la navigation soit, en première ou en deuxième, il n'existe donc pas un ordre de lecture spécifique pour comprendre ces deux parties de la page.
Il peut donc exister plusieurs ordres de lecture sur une page WEB pour satisfaire le critère de succès.


## Ce qu'il ne faut pas faire

### Utiliser des espaces blancs pour formater du texte brut

Pour présenter du contenu, il est important de ne pas utiliser des caractères d'espacement, comme les espaces, la tabulation, le saut de ligne ou le retour chariot.
Dans certains cas, ces caractères sont utilisés pour formater des tableaux, ou des colonnes des données dans un contenu textuel. Cette méthode est proscrite, car les technologies d'assistances ne se verront pas présenter les informations dans un ordre de lecture logique, et les informations retournées par cette technologie seront incompréhensibles.


Ci-dessous, deux exemples qui ne sont pas valides aux lecteurs d'écran.

#### Exemple de caractère d'espacement pour formater un tableau

<pre class="border border-light">

Horaires de travail avec Salle de classe
 
                                                         
            Lundi                Mardi             Mercredi     

 Matin      9H30-13H             9H30-13H          8H-12H     
            B201                 B201              A001

 Après-     14h-17h              14h-17h           Repos
 Midi       A103                 B201

</pre>

On remarque, que la présentation ci-dessus est très visuelle, mais le texte n'est pas adapté, car il est impossible de représenter les relations tabulaires.
Ce qui change le sens de lectures pour les technologies d'assistance. Il faudrait utiliser un tableau ou présenter les informations de manière linéaire.

#### Exemple de caractère d'espacement pour séparer du contenu en deux colonnes

<p class="border border-light">
L’accessibilité numérique vise à rendre possible &emsp;&emsp;&emsp;il ne s’agit pas de démultiplier les <br/>
l’accès à l’information numérique quelle que soit &emsp;&emsp;&emsp;supports de l’information, mais de<br/>
la nature du handicap des personnes et la façon &emsp;&emsp;&emsp; respecter des règles fonctionnelles, graphiques,  <br/>
dont chacun consulte l’information. Elle concerne &emsp;&emsp;&emsp; techniques et éditoriales qui permettront à tous <br/>
différentes technologies comme le Web, les vidéos &emsp;&emsp;&emsp; d’accéder à l’information quels que soient leurs <br/>
et les documents Word et PDF, mais également la &emsp;&emsp;&emsp; outils de consultation. <br/>
télévision numérique ou les téléphones mobiles. &emsp;&emsp;&emsp;
</p>

Le paragraphe au-dessus n'est pas conforme, des caractères d'espacement sont utilisés pour séparer le texte en deux colonnes, mais les technologies d'assistance liront le texte ligne par ligne ce qui affectera donc l'ordre de lecture.

### Utiliser un tableau de mise en page

Même si les WCAG n'interdisent pas l'utilisation des tableaux de mise en page, il est recommandé d'utiliser la mise en page en CSS afin de conserver la lecture sémantique du contenu. Si un tableau de mise en page est utilisé, il est important que le contenu est un sens lorsqu'il est linéarisé.

Les tableaux présentent le contenu de manière horizontale et verticale, cependant une technologie d'assistance lit ce contenu de manière linéaire, le tableau est lu de haut en bas en lisant l'intégralité de la ligne avant de passer à la suivante.

C'est pour cela qu'il faut faire attention lorsqu'on utilise un tableau de mise en page, il faut bien vérifier que le contenu est compréhensible avec un lecteur d'écran.

#### Exemple d'un tableau non-valide

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

Le problème est qu'au lecteur d'écran l'ordre de lecture est modifié, car au lieu d'énoncer tous les liens du menu, l'image sera vocalisée au milieu de ceux-ci.

### Utiliser du CSS pour positionner l'information

Pour positionner du contenu, il est recommandé d'utiliser le balisage structurel, afin de le mettre dans le bon ordre de lecture, plutôt que les propriétés de positionnement du CSS. Ça peut engendrer des erreurs, car le contenu peut s'afficher dans un ordre différent dans lequel il se trouve dans le code source.

Il faut faire attention avec l'utilisation des CSS Flexbox, grid et position

<ul>
  <li>Avec CSS flexbox, évitez d'utiliser la propriété <span lang="en"><code>order</code></span> ou <span lang="en"><code>flex-direction:reverse;</code></span></li>
  <li>Avec CSS grid, faites attention au placement manuel des éléments sur la grille</li>
  <li>Avec les propriétés de positionnement, évitez de détacher l'ordre visuel des éléments de l'ordre dans lequel ils apparaissent dans le DOM</li>
</ul>

Si un utilisateur désactive le CSS, ou utilise un lecteur d'écran la restitution de l'information ne sera plus dans le bon ordre.

#### Exemple d'un menu positionner en CSS

La mise en page ci-dessous a été créé avec du CSS, si vous désactivez le CSS, vous allez remarquer que le sens de lecture sera différent que celui affiché.

<div class="border border-light position-relative mb-3" style="width: 320px;height:180px">      
     <span class="position-absolute top-0 start-0"><strong>Sports</strong></span>       
     <span class="position-absolute top-0 end-0"><strong>Produit</strong></span>       
     <span class="position-absolute top-50 start-0">Football</span>       
     <span class="position-absolute start-0" style="top:75%!important">Tennis</span>       
     <span class="position-absolute start-0" style="top:90%!important">Rugby</span>       
     <span class="position-absolute top-50 end-0">Vêtements</span>       
     <span class="position-absolute end-0" style="top:75%!important">Accessoires</span>
</div>



#### Exemple d'onglet où le contenu est positionné avant

Dans l'exemple ci-dessous, des onglets seront affichés avec le contenu qui sera positionné avec des flexbox.

<div class="d-flex flex-column mb-3">
  <div class="tab-content order-2" id="myTabContent">
    <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">Vous voila présent sur l'onglet Accueil. </div>
    <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">Vous voila présent sur l'onglet Profil.</div>
  </div>
  <ul class="nav nav-tabs order-1" id="myTab" role="tablist">
    <li class="nav-item" role="presentation">
      <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Accueil</button>
    </li>
    <li class="nav-item" role="presentation">
      <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Profil</button>
    </li>
  </ul>
</div>

Les éléments sont placés avec l'attribut <span lang="en"><code>order</code></span>, qui n'est pas le même ordre d'affichage dans le dom.
En désactivant le CSS ou au lecteur d'écran, on constate que la signification des onglets n'est plus la même.

