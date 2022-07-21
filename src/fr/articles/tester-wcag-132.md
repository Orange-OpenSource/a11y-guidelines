---
title: "Comment conserver un ordre séquentiel logique (Wcag 1.3.2)"
abstract: "Les bonnes pratiques pour le critère WCAG 1.3.2"
titleBeforeTag: true
date: "2022-07-21"
tags:
  - web
  - advanced
---


## Explication générale

Le but du [critère WCAG 1.3.2](https://www.w3.org/WAI/WCAG21/Understanding/meaningful-sequence) est de s'assurer que, si l'ordre du contenu est important, alors, celui-ci doit être préservé quelle que soit la manière dont il est présenté à l'utilisateur. Par exemple, lorsque le CSS est désactivé ou lors de l'utilisation d’un lecteur d'écran.

L'ordre d'un contenu est <strong>important</strong> dès lors que l'ordre du contenu ne peut pas être modifié sans en affecter sa signification.
Par exemple, pour une liste ordonnée ou un tableau, l'ordre du contenu est important, en revanche pour une liste non-ordonnée, l'ordre de lecture n’a pas d’impact sur la compréhension de l'utilisateur.

Une page WEB peut être composée de plusieurs sections indépendantes ayant des rôles spécifiques. Les positions relatives d'une section de navigation et une section principale de page, n'affectent généralement pas la compréhension du contenu de la page. Que la navigation soit, en haut ou à gauche de l’écran, ne gêne pas la compréhension, même si un ordre de lecture peut être imposé à l’intérieur d’une de ces sections. 
Il peut donc exister plusieurs ordres de lecture sur une page WEB pour satisfaire ce critère.


## Ce qu'il ne faut pas faire

### Utiliser des espaces blancs pour formater du texte brut

Pour présenter du contenu, il est important de ne pas utiliser des caractères d'espacement, comme les espaces, la tabulation, le saut de ligne ou le retour chariot.
Dans certains cas, ces caractères sont utilisés pour formater des tableaux, ou reproduire des colonnes de données dans un contenu textuel. Cette méthode est proscrite, car les technologies d'assistances ne se verront pas présenter les informations dans un ordre de lecture logique, les informations retournées à certains utilisateurs seront donc incompréhensibles.

Ci-dessous, deux exemples qui ne sont pas valides et donc pas compréhensible avec un lecteur d'écran.

#### Exemple de caractère d'espacement pour formater un tableau

<pre class="border border-light">

Horaires de travail avec Salle de classe
 
                                                         
            Lundi                Mardi             Mercredi     

 Matin      9H30-13H             9H30-13H          8H-12H     
            B201                 B201              A001

 Après-     14h-17h              14h-17h           Repos
 Midi       A103                 B201

</pre>

On remarque, que la présentation ci-dessus est un formatage uniquement visuel, mais aucune relation sémantique ne permet de représenter les relations tabulaires.
Les technologies d'assistance vont lire le contenu au fur et à mesure qu'il apparait dans le code, donc, dans un ordre illogique et incompréhensible. Ici, la solution serait d'utiliser un tableau ou présenter les informations de manière linéaire.

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

Le paragraphe ci-dessus n'est pas conforme, des caractères d'espacement sont utilisés pour séparer le texte en deux colonnes. Les technologies d'assistance liront le texte ligne par ligne ce qui serait un ordre de lecture illogique.

### Utiliser un tableau de mise en page

Même si les WCAG n'interdisent pas l'utilisation des tableaux de mise en page, il est recommandé d'utiliser la mise en page en CSS afin de conserver une sémantique au contenu. Si un tableau de mise en page est utilisé, il est important que le contenu ait un sens lorsqu'il est linéarisé.

Les tableaux présentent le contenu de manière horizontale et verticale, cependant une technologie d'assistance lit ce contenu de manière linéaire, le tableau est lu de haut en bas en lisant l'intégralité de la ligne avant de passer à la suivante.

C'est pour cela qu'il faut faire attention lorsqu'on utilise un tableau de mise en page, à bien vérifier que le contenu soit également compréhensible avec un lecteur d'écran.


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

Le problème est qu'au lecteur d'écran l'ordre de lecture est différent de celui affiché, car au lieu d'énoncer tous les liens du menu, l'image sera vocalisée au milieu de ceux-ci.

### Utiliser du CSS pour positionner l'information

Pour positionner du contenu dans un ordre de lecture, il est recommandé d'utiliser le balisage sémantique, plutôt que les propriétés de positionnement du CSS. Ce dernier peut engendrer des erreurs, car le contenu peut s'afficher / être interprété dans un ordre différent de celui du code source.

Donc, si l'ordre de lecture est important, prudence lors de l'utilisation des CSS Flexbox, grid et position à ne pas modifier l'ordre du contenu visuellement par rapport à sa position dans le code.

<ul>
  <li>Avec CSS flexbox, évitez d'utiliser la propriété <span lang="en"><code>order</code></span> ou <span lang="en"><code>flex-direction:reverse;</code></span></li>
  <li>Avec CSS grid, faites attention au placement manuel des éléments sur la grille</li>
  <li>Avec les propriétés de positionnement, évitez de détacher l'ordre visuel des éléments de l'ordre dans lequel ils apparaissent dans le DOM</li>
</ul>

Si un utilisateur désactive le CSS, ou utilise un lecteur d'écran la restitution de l'information ne sera plus dans le bon ordre.

#### Exemple d'un menu positionner en CSS

La mise en page ci-dessous a été créée avec du CSS, si vous désactivez le CSS, vous allez remarquer que le sens de lecture sera différent de celui affiché.

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
    <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">Vous voilà présent sur l'onglet Accueil. </div>
    <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">Vous voilà présent sur l'onglet Profil.</div>
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
En désactivant le CSS ou au lecteur d'écran, on constate que les onglets ne sont plus avant mais après leur propre contenu.

