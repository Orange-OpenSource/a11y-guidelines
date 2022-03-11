---
title: "Utilisation de l'attribut aria-current"
abstract: "Les différentes utilisations possibles de l'attribut ARIA : aria-current"
titleBeforeTag: true
date: "2022-03-10"
tags:
  - web
  - intermediate
---
  
## Introduction
L'attribut [aria-current](https://www.w3.org/TR/wai-aria-1.2/#aria-current) sert à indiquer (au niveau du code) l'élément courant dans un ensemble d'éléments. 

Pour faire simple, prenons l'exemple d'un menu de navigation. L'élément courant est généralement mis en évidence par un effet visuel. Pour que cette mise en évidence soit également perçue par les utilisateurs qui utilisent un lecteur d'écran (ou un outil d'assistance quel qu'il soit), il est indispensable de marquer l'élément au niveau code en utilisant l'attribut `aria-current`.

## Utilisation

Pour indiquer l'élément en cours dans un ensemble d'éléments, il suffit d'ajouter un attribut `aria-current` au niveau du code HTML. Dans l'exemple ci-dessous, on utilise la valeur générique `true` :
<pre><code class="html">
  &lt;ul&gt;
    &lt;li&gt;élément 1&lt;/li&gt;
    &lt;li <span class="important">aria-current="true"</span>&gt;élément 2&lt;/li&gt;
    &lt;li&gt;élément 3&lt;/li&gt;
  &lt;ul&gt;
</code></pre>

Le second élément de cette liste sera par exemple vocalisé "**en cours**, élément 2" par le lecteur d'écran NVDA.

## Liste des différents usages

L'attribut `aria-current` accepte les valeurs suivantes : `true`, `page`, `step`, `location`, `date`, `time` et `false`.

- `true` : indique l'élément en cours dans un ensemble d'éléments
- `step` : indique l'étape en cours
- `location` : indique l'élément en cours dans un diagramme
- `date` : indique la date courante dans un ensemble de date
- `time` : indique l'heure en cours
- `false` (valeur par défaut) : n'a pas d'effet


## Quelques exemples d'usages courants

### Exemples 1 : menu de navigation

Utiliser la valeur `page` pour indiquer la page courante dans un ensemble de pages. 

![Menu de navigation proposant 3 éléments : accueil, aide et à propos. L'élément à propos est souligné et affiché d'une couleur différente ce qui permet visuelement de comprendre qu'il s'agit de l'élément en cours de consultation](../images/utilisation-de-l-attribut-aria-current/menu-navigation.png)

<pre><code class="html">
  &lt;nav aria-label="Navigation principale"&gt;
    &lt;ul&gt;
      &lt;li&gt;
        &lt;a href="/fr/"&gt;Accueil&lt;/a&gt;
      &lt;/li&gt;
      &lt;li&gt;
        &lt;a href="/fr/aide/"&gt;Aide&lt;/a&gt;
      &lt;/li&gt;
      &lt;li&gt;
        &lt;a href="/fr/a-propos/" <span class="important">aria-current="page"</span>&gt;À propos&lt;/a&gt;
      &lt;/li&gt;      
    &lt;/ul&gt;
</code></pre>

### Exemples 2 : système de pagination

Utiliser la valeur `page` pour indiquer la page en cours de consultation dans un système de pagination :
![Capture d'écran, exemple de système de pagination, un bouton précédent, un bouton suivant et 3 liens intitulés 1, 2 et 3](../images/utilisation-de-l-attribut-aria-current/pagination.png)

<pre><code class="html">
  &lt;ol&gt;
    &lt;li aria-label="page 1"&gt;1&lt;/li&gt;
    &lt;li aria-label="page 2" <span class="important">aria-current="page"</span>&gt;2&lt;/li&gt;
    &lt;li aria-label="page 3"&gt;3&lt;/li&gt;    
  &lt;/ol&gt;
</code></pre>

### Exemples 3 : fil d'Ariane

Utiliser la valeur `page` pour indiquer la page en cours dans un fil d'Ariane :
![Capture d'écran d'un exemple de fil d'Ariane](../images/utilisation-de-l-attribut-aria-current/breadcrumb.png)

<pre><code class="html">
  &lt;ol&gt;
    &lt;li&gt;&lt;a href="..."&gt;Accueil&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href="..."&gt;Articles&lt;/a&gt;&lt;/li&gt;
    &lt;li <span class="important">aria-current="page"</span>&gt;Utilisation de l'attribut aria-current&lt;/li&gt;
  &lt;/ol&gt;
</code></pre>

### Exemples 4 : processus à étapes

Utiliser la valeur `step` pour indiquer l'étape en cours dans un processus à étapes en plusieurs page.

![Capture d'écran un composant affichant un processus à étapes tel qu'on peux le trouver sur un site marchant (choix d'un produit, livraison, paiement...). 5 étapes sont visibles, l'étape 3 est mise en valeur (changement de couleur) pour indiquer qu'il s'agit de l'étape en cours.](../images/utilisation-de-l-attribut-aria-current/stepbar.png)

<pre><code class="html">
  &lt;ol&gt;
    &lt;li&gt;Label n°1&lt;/li&gt;
    &lt;li&gt;Label n°2&lt;/li&gt;
    &lt;li <span class="important">aria-current="step"</span>&gt;Label n°3&lt;/li&gt;
    &lt;li&gt;Label n°4&lt;/li&gt;
    &lt;li&gt;Label n°5&lt;/li&gt;
  &lt;/ol&gt;
</code></pre>

### Exemple 5 : sélection d'une date

Utiliser la valeur `date` dans un composant permettant de sélectionner une date. Un attribut `aria-current="date"` est positionné sur la date du jours tandis qu'un attribut `aria-selected="true"` est positionné sur la date en cours de sélection.

![Capture d'écran d'un composant de type datepicker, la date du jour et la date en cours de sélection sont mises en évidence via un changement de couleur.](../images/utilisation-de-l-attribut-aria-current/datepicker.png)
