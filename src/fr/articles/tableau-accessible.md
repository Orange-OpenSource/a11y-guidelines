---
title: "Les tableaux dans l'accessibilité"
abstract: "Toutes nos recommandations pour que les tableaux soit accessibles"
titleBeforeTag: true
date: "2022-04-08"
tags:
  - web
  - beginner
---


## Présentation générale

Un tableau est un agencement d'informations en lignes et en colonnes contenant des cellules facilitant la comparaison et la mise en avant des informations. Ils permettent de présenter des informations tabulaires dans une grille en deux dimensions, ces données sont plus faciles à lire sous forme de tableau. 

Cela permet à un utilisateur voyant d'établir rapidement des associations visuelles entre les données du tableau et ses en-têtes.

En revanche, un utilisateur non-voyant n'aura pas accès à tous ces liens entre les informations, c'est pour cette raison qu'il est important que les tableaux soient implémentés avec le balisage HTML approprié afin qu'ils soient le plus accessible possible pour les technologies d'assistance.

Dans la suite de cet article, nous allons voir les principales règles à respecter pour obtenir un tableau accessible.

### Mettre une légende/titre à votre tableau

Il est important de définir un titre à votre tableau. À la fois concis et pertinent, ce texte permettra d'en indiquer le contenu ainsi que le type de données qu'il contient.
Il doit être associé au tableau grâce à la balise <code>caption</code> et doit être le premier élément après la balise d'ouverture <code>table</code>. On peut aussi utiliser un titre <code>h1,h2...</code> placé dans le code juste avant le tableau comme autre moyen d'associer un titre.

#### Exemple de <code>caption</code>
<pre><code class="html">
&lt;table&gt;
    &lt;caption&gt;Emploi du temps 2022&lt;/caption&gt;
    [...]
&lt;/table&gt;
</code></pre>

#### Exemple de titre HTML
<pre><code class="html">
&lt;h2&gt;Emploi du temps 2022&lt;/h2&gt;
&lt;table&gt;
    [...]
&lt;/table&gt;
</code></pre>

### Ajouter une description aux tableaux complexes

Si vous êtes dans le cas d'un tableau complexe et vous souhaitez fournir un résumé plus détaillé, il est recommandé d'utiliser l'attribut ARIA <code>aria-describedby</code>.
Il permettra de lier programmatiquement une description à votre tableau.

<pre><code class="html">
&lt;p id="info-table"&gt;
exemple de description pour aider la compréhension du tableau complexe
&lt;/p&gt;

&lt;table aria-describedby="info-table"&gt;
    &lt;caption&gt; Emploi du temps 2022 &lt;/caption&gt;
    [...]
&lt;/table&gt;
</code></pre>

Il y a aussi la possibilité d'utiliser l'attribut <code>summary</code> pour donner, en plus, un résumé du contenu d'un tableau, néanmoins cet attribut ne fait plus partie des spécifications HTML 5 et nous ne recommandons pas son utilisation.

### Identifier les en-têtes de votre tableau

#### Attributs scope

Pour aider les utilisateurs de technologies d'assistance, il est impératif d'identifier les en-têtes des tableaux, que ce soit pour les lignes ou les colonnes.
Pour baliser ces en-têtes, il faut utiliser la balise <code>th</code>, celle-ci ne doit jamais être vide.

Une fois que les en-têtes sont créées, il faut associer les cellules de données aux en-têtes dont elles dépendent.
L'attribut <code>scope</code> permet de lier programmatiquement les cellules aux en-têtes et donc d'identifier, pour les technologies d'assistance, chaque cellule en liaison avec ses en-têtes&nbsp;: 

<ul>
  <li><code>&lt;th scope="col"&gt;</code> pour un en-tête colonne</li>
  <li><code>&lt;th scope="row"&gt;</code> pour un en-tête ligne</li>
</ul>


#### Attributs id et headers

Certains tableaux sont trop complexes pour identifier une association horizontale ou verticale stricte (par exemple, fusion de colonnes ou de lignes) entre l'entête et les cellules des données.
L'attribut <code>scope</code> ne permet pas de résoudre ce problème. Il faut utiliser un attribut <code>id</code> unique pour chaque cellule d'en-tête. Pour relier cette en-tête à une cellule, il faudra utiliser l'attribut <code>headers</code> en y rajoutant les <code>id</code> voulus.

Par exemple, on a deux cellules d'entêtes, <code>&lt;th id="toto"&gt;Toto&lt;/th&gt;</code> et <code>&lt;th id="tata"&gt;Tata&lt;/th&gt;</code>, le code pour la relier à une cellule de donnée sera <code>&lt;td headers="toto tata"&gt;Tota&lt;/td&gt;</code>

Les tableaux doivent utiliser <code>headers/id</code> que si :
<ul>
  <li>Le tableau a des en-têtes de colonnes qui changent à l'intérieur du tableau.</li>
  <li>Une cellule de données à trois en-têtes ou plus associées.</li>
  <li>Des cellules sont fusionnées</li>
</ul>

### Cas particuliers des tableaux de mise en forme

Dans la mesure du possible <strong>évitez d'utiliser des tableaux pour faire de la mise en pages</strong>. Les tableaux sont faits pour présenter des données tabulaires avant tout et les CSS permettent, maintenant, de se passer de la mise en forme via des tableaux.

Dans le cas où, vous utilisez un tableau pour faire de la mise en page, vous devez respecter ces règles&nbsp;:

<ul>
  <li>l'élément <code>table</code> doit avoir l'attribut <code>role="presentation</code> afin de retire la sémantique du tableau</li>
  <li>les éléments sémantiques propres à un tableau ne doivent pas être utilisés : <code>caption</code>, <code>th</code>, <code>scope</code></li>
  <li>assurez-vous que, s'il existe un ordre de lecture spécifique pour comprendre le contenu, cet ordre suit l'ordre d'apparition dans le code</li>
</ul>

### Navigation dans un tableau à l'aide des lecteurs d'écran Jaws et NVDA

Le fait de créer des tableaux accessibles permettra une lecture compréhensible de ces données tabulaires avec lecteur d'écran. Pour naviguer dans un tableau avec Jaws ou NVDA, il existe plusieurs raccourcis spécifiques.


#### NVDA
Pour naviguer rapidement de tableau en tableau dans une page, il suffit d'utiliser sur la touche <kbd>t</kbd>, si on utilise le raccourci <kbd>Maj + t</kbd>, on navigue dans le sens contraire et donc on revient au tableau précédent.

Une fois au sein d'un tableau, il existe plusieurs raccourcis afin de s'y déplacer simplement.

<ul>
<li><kbd>Ctrl + alt + flèche gauche</kbd> permet de se déplacer sur la colonne de gauche tout en gardant la même ligne, <kbd>Ctrl + alt + flèche droite</kbd> se déplace sur la colonne de droite.</li>
<li><kbd>Ctrl + alt + flèche bas</kbd> permet de passer à la ligne suivante en restant sur la même colonne, <kbd>Ctrl + alt + flèche haut</kbd> pour passer à la ligne précédente.</li>
</ul>

#### Jaws

Pour Jaws, il faut utiliser la touche <kbd>Y</kbd> et <kbd>Maj + Y</kbd> pour naviguer entre les tableaux.
Pour parcourir un tableau il existe plusieurs raccourcis :

<ul>
<li><kbd>Insert + Ctrl + t</kbd> permet de lister tous les tableaux</li>
<li><kbd>Ctrl + alt + flèche gauche</kbd> permet de se déplacer sur la colonne de gauche tout en gardant la même ligne, <kbd>Ctrl + alt + flèche droite</kbd> se déplace sur la colonne de droite.</li>
<li><kbd>Ctrl + alt + flèche bas</kbd> permet de passer à la ligne suivante en restant sur la même colonne, <kbd>Ctrl + alt + flèche haut</kbd> pour passer à la ligne précédente.</li>
<li><kbd>Insert + maj + flèche haut</kbd> permet de lire toute la ligne.</li>
<li><kbd>Insert + maj + num pad 5</kbd> permet de lire toute la colonne.</li>
</ul>

## Exemple de tableau

Nous allons maintenant vous présenter des exemples de tableaux accessibles.

### Tableau simple

Le premier exemple est un tableau avec seulement des en-têtes sur les colonnes, nous utilisons donc l'attribut <code>scope="row"</code> pour que les technologies d'assistance le comprennent.

<table class="table">
 <caption class="h4"> Personnes avec leur activité professionnelle</caption>
  <tr>
    <th scope="col">Prénom</th>
    <th scope="col">Nom</th>
    <th scope="col">Genre</th>
    <th scope="col">Métier</th>
  </tr>
  <tr>
    <td>John</td>
    <td>Doe</td>
    <td>M</td>
    <td>Inconnu</td>
  </tr>
  <tr>
    <td>Marty</td>
    <td>McFly</td>
    <td>M</td>
    <td>Guitariste</td>
  </tr>
  <tr>
    <td>Ellen</td>
    <td>Ripley</td>
    <td>F</td>
    <td>Astronaute</td>
  </tr>
  <tr>
    <td>Indiana</td>
    <td>Jones</td>
    <td>M</td>
    <td>Archéologue</td>
  </tr>
  <tr>
    <td>Sarah</td>
    <td>Connors</td>
    <td>F</td>
    <td>Serveuse</td>
  </tr>
</table>

<pre><code class="html">
&lt;table class="table"&gt;
 &lt;caption class="h4"&gt; Personnes avec leur activité professionnelle&lt;/caption&gt;
  &lt;tr&gt;
    &lt;th scope="col"&gt;Prénom&lt;/th&gt;
    &lt;th scope="col"&gt;Nom&lt;/th&gt;
    &lt;th scope="col"&gt;Genre&lt;/th&gt;
    &lt;th scope="col"&gt;Métier&lt;/th&gt;
  &lt;/tr&gt;
  &lt;tr&gt;
    &lt;td&gt;John&lt;/td&gt;
    &lt;td&gt;Doe&lt;/td&gt;
    &lt;td&gt;M&lt;/td&gt;
    &lt;td&gt;Inconnu&lt;/td&gt;
  &lt;/tr&gt;
  [...]
</code></pre>

De cette manière, il est possible de naviguer facilement au sein du tableau à l'aide d'un lecteur d'écran. Pour tout changement de colonne l'en-tête sera vocalisée.

Par Exemple, si on est positionné sur la colonne Prénom, et qu'on utilise le raccourci <kbd>Ctrl+alt+fleche droite</kbd> pour passer à la colonne Nom, NVDA vocalise "Nom Colonne 2 + texte de la colonne".

### Tableau à double en-tête

Dans ce deuxième exemple, le tableau est un emploi du temps permettant de savoir rapidement si le magasin est ouvert ou fermé, en fonction du jour de la semaine et de l'heure.

Ce tableau nécessite deux en-têtes, une pour les jours de la semaine et une autre pour le créneau horaire.

<table class="table">
 <caption class="h4">Ouverture du magasin de jouets</caption>
  <tr>
    <td></td>
    <th scope="col">Lundi</th>
    <th scope="col">Mardi</th>
    <th scope="col">Mercredi</th>
    <th scope="col">Jeudi</th>
    <th scope="col">Vendredi</th>
  </tr>
  <tr>
    <th scope="row">09:00 - 11:00</th>
    <td>Fermé</td>
    <td>Ouvert</td>
    <td>Ouvert</td>
    <td>Ouvert</td>
    <td>Fermé</td>
  </tr>
  <tr>
    <th scope="row">11:00 - 13:00</th>
    <td>Ouvert</td>
    <td>Ouvert</td>
    <td>Ouvert</td>
    <td>Ouvert</td>
    <td>Fermé</td>
  </tr>
  <tr>
  <th scope="row">13:00 - 15:00</th>
    <td>Ouvert</td>
    <td>Ouvert</td>
    <td>Fermé</td>
    <td>Ouvert</td>
    <td>Ouvert</td>
  </tr>
  <th scope="row">15:00 - 17:00</th>
    <td>Ouvert</td>
    <td>Ouvert</td>
    <td>Fermé</td>
    <td>Ouvert</td>
    <td>Ouvert</td>
  </tr>
</table>

<pre><code class="html">
&lt;table class="table"&gt;
 &lt;caption class="h4"&gt;Ouverture du magasin de jouet&lt;/caption&gt;
  &lt;tr&gt;
    &lt;td&gt;&lt;/td&gt;
    &lt;th scope="col"&gt;Lundi&lt;/th&gt;
    &lt;th scope="col"&gt;Mardi&lt;/th&gt;
    &lt;th scope="col"&gt;Mercredi&lt;/th&gt;
    &lt;th scope="col"&gt;Jeudi&lt;/th&gt;
    &lt;th scope="col"&gt;Vendredi&lt;/th&gt;
  &lt;/tr&gt;
  &lt;tr&gt;
    &lt;th scope="row"&gt;09:00 - 11:00&lt;/th&gt;
    &lt;td&gt;Fermé&lt;/td&gt;
    &lt;td&gt;Ouvert&lt;/td&gt;
    &lt;td&gt;Ouvert&lt;/td&gt;
    &lt;td&gt;Fermé&lt;/td&gt;
    &lt;td&gt;Fermé&lt;/td&gt;
  &lt;/tr&gt;
  [...]
</code></pre>


### Tableau complexe

Dans cet exemple, certaines cellules données ont trois en-têtes associées, il faut donc utiliser les attributs <code>id</code> et <code>headers</code>.

Vu que le tableau est complexe, on peut rajouter une description afin d'aider les utilisateurs à comprendre le tableau.


<p class="border-top border-light" id="tblDesc">Tableaux permettant de calculer le taux de conformité d'un site internet.<br/>
Pour chaque page les critères peuvent être conformes, non-conformes ou non-applicables, et ont deux niveaux de difficultés : Débutant ou confirmé<br/>
</p>
<table aria-describedby="tblDesc" class="table text-center">
    <caption class="visually-hidden position-relative">Synthèse par niveau</caption>
      <tr>
        <th id="critere">Critères</th>
        <th id="conforme" headers="critere" colspan="2">Conformes</th>
        <th id="non-conforme" headers="critere" colspan="2">Non-conformes</th>
        <th id="non-applicable" headers="critere" colspan="2">Non-applicables</th>
        <th id="conformite" rowspan="2" class="bg-light">Taux de conformité </th>
      </tr>
      <tr>
        <th id="niveau">Niveau</th>
        <th id="debutant-conforme" headers="niveau conforme">Débutant</th>
        <th id="confirme-conforme" headers="niveau conforme">Confirmé</th>
        <th id="debutant-non-conforme" headers="niveau non-conforme">Débutant</th>
        <th id="confirme-non-confrome" headers="niveau non-conforme">Confirmé</th>
        <th id="debutant-non-applicable" headers="niveau non-applicable">Débutant</th>
        <th id="confirme-non-applicable" headers="niveau non-applicable">Confirmé</th>
      </tr>
      <tr>
        <th id="accueil">Accueil</th>
        <td headers="accueil conforme debutant-conforme">17</td>
        <td headers="accueil conforme confirme-conforme">13</td>
        <td headers="accueil non-conforme debutant-non-conforme">0</td>
        <td headers="accueil non-conforme confirme-non-confrome">0</td>
        <td headers="accueil non-applicable debutant-non-applicable">13</td>
        <td headers="accueil non-applicable confirme-non-applicable">7</td>
        <td headers="accueil conformite" class="bg-light">100%</td>
      </tr>
      <tr>
        <th id="article">Article</th>
        <td headers="article conforme debutant-conforme">17</td>
        <td headers="article conforme confirme-conforme">12</td>
        <td headers="article non-conforme debutant-non-conforme">0</td>
        <td headers="article non-conforme confirme-non-confrome">1</td>
        <td headers="article non-applicable debutant-non-applicable">13</td>
        <td headers="article non-applicable confirme-non-applicable">7</td>
        <td headers="article conformite" class="bg-light">97%</td>
      </tr>
  </table>

<pre><code class="html">
&lt;p class="border-top border-light" id="tblDesc">Description du tableau&lt;/p&gt;
&lt;table aria-describedby="tblDesc" class="table"&gt;
 &lt;caption class="visually-hidden position-relative"&gt;Synthèse par niveau&lt;/caption&gt;
 &lt;tr&gt;
    &lt;th id="critere"&gt;Critères&lt;/th&gt;
    &lt;th id="conforme" headers="critere" colspan="2"&gt;Conformes&lt;/th&gt;
    [...]
  &lt;/tr&gt;
  &lt;tr&gt;
    &lt;th id="niveau"&gt;Niveau&lt;/th&gt;
    &lt;th id="debutant-conforme" headers="niveau conforme"&gt;Débutant&lt;/th&gt;
    &lt;th id="confirme-conforme" headers="niveau conforme"&gt;Débutant&lt;/th&gt;
    [...]
  &lt;/tr&gt;
  &lt;tr&gt;
    &lt;th id="accueil"&gt;Accueil&lt;/th&gt;
    &lt;td headers="accueil conforme debutant-conforme"&gt;17&lt;/td&gt;
    &lt;td headers="accueil conforme confirme-conforme"&gt;13&lt;/td&gt;
    [...]
  &lt;/tr&gt;
  [...]
</code></pre>