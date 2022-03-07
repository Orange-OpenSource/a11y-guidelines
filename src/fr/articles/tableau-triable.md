---
title: "Les tableaux dans l'accessibilité"
abstract: "Toutes nos recommandations pour que les tableaux soit accessibles"
titleBeforeTag: true
date: "2022-02-18"
tags:
  - web
  - advanced
---


## Présentation générale

Un tableau est un agencement d'informations en lignes et en colonnes contenant des cellules facilitant la comparaison et la mise en avant des informations. Ils permettent de présenter des informations tabulaires dans une grille en deux dimension, ces données sont plus faciles à lire sous forme de tableau. 

Cela permet à un utilisateur voyant d'établir rapidement des associations visuelles entre les données du tableau et ses entêtes.

En revanche, un utilisateur non-voyant n'aura pas accès à toutes ces liens entre les informations, c'est pour cette raison qu'il est important que les tableaux soient implémentés avec le balisage HTML approprié afin qu'ils soient le plus accessible possible pour les technologies d'assistance.

Dans la suite de cette article, nous allons voir les principales règles à respecter pour obtenir un tableau accessible.

### Mettre une légende/titre à votre tableau tableau

Il est important de définir un titre à votre tableau. Ce texte permettra d'indiquer quel est le contenu et le types de données du tableau. Il doit être concis mais pertinent.
Il doit être associé au tableau grâce au balise <code>caption</code>, il doit être la premier élément après la balise d'ouverture du tableau <code>table</code>. On peut aussi utiliser un titre <code>h1,h2...</code> placé dans le code juste avant le tableau comme autre moyen de donner un titre à un tableau.

Exemple de <code>caption</code>
<pre><code class="html">
&lt;table&gt;
    &lt;caption&gt;Emploi du temps 2022&lt;/caption&gt;
    [...]
&lt;/table&gt;
</code></pre>

Exemple de titre HTML
<pre><code class="html">
&lt;h2&gt;Emploi du temps 2022&lt;/h2&gt;
&lt;table&gt;
    [...]
&lt;/table&gt;
</code></pre>

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

Il existe aussi la possibilité d'utiliser l'attribut <code>summary</code>pour donner, en plus, un résumé du contenu d'un tableau, néanmoins cette attribut ne fait plus partie des spécification HTML 5 et nous ne recommandons pas son utilisation.

### Identifier les entêtes de votre tableau

Pour aider les utilisateurs de technologies d'assistance, il est impératif d'identifier les entêtes des tableaux, que ce soit pour les lignes ou les colonnes.
Pour baliser ces entêtes, il faut utiliser la balise <code>th</code>, celle-ci ne doit jamais être vide.

Une fois que les entêtes sont créées, il faut associer les cellules de données aux entêtes dont elles dépendent.
L'attribut <code>scope</code> permet de lier programmatiquement les cellules aux entêtes et donc d'identifier, pour les technologies d'assistance, chaque cellule en fonctions de ses entêtes&nbsp;: 

<ul>
  <li><code>&lt;th scope="col"&gt;</code> pour une entête colonne</li>
  <li><code>&lt;th scope="row"&gt;</code> pour une entête ligne</li>
</ul>

### Cas particuliers des tableaux de mise en forme

Dans la mesure du possible <strong> évitez d'utiliser des tableaux pour faire de la mise en page</strong>. Les tableaux sont utiles pour présenter des données tabulaires avant tout.

Dans le cas où, vous utilisez un tableau pour faire de la mise en page, vous devez respecter ces règles&nbsp;:

<ul>
  <li>l'élément <code>table</code> doit avoir l'attribut <code>role="presentation</code></li>
  <li>les éléments sémantiques propres à un tableau ne doivent pas être utilisés : <code>caption</code>, <code>th</code>, <code>scope</code></li>
  <li>assurez vous que, si il existe un ordre de lecture spécifique pour comprendre le contenu, cet ordre suit l'ordre d'apparition dans le code</li>
</ul>

### Utilisation de NVDA avec les tableaux
Rajouter  Jaws !

Le fait de créer des tableaux accessible permettra la lecture au lecteur d'écran. Pour naviguer dans un tableau avec NVDA, il existe plusieurs raccourci.

Pour naviguer rapidement de tableau en tableau dans une page, il suffit d'utiliser sur la touche <kbd>t</kbd>, si on utilise le raccourci <kbd>Maj + t</kbd>, on navigue dans le sens contraire et donc on revient au tableau précédent.

Une fois qu'on est au sein d'un tableau il existe plusieurs raccourci afin de s'y déplacer simplement.

<ul>
<li><kbd>Ctrl+alt+flèche gauche</kbd> permet de se déplacer sur la colonne de gauche tout en gardant la même ligne, <kbd>Ctrl+alt+flèche droite</kbd> se déplace sur la colonne de droite</li>
<li><kbd>Ctrl+alt+flèche bas</kbd> permet de passer à la ligne suivante en restant sur la même colonne, <kbd>Ctrl+alt+flèche haut</kbd> pour passer à la ligne précédente</li>
</ul>

## Exemple de tableau

Nous allons maintenant vous presenter des exemples de tableau accessible.

### Tableau simple

Le premier exemple sera un tableau avec seulement des entêtes sur les colonnes, nous utiliserons dons l'attribut <code>scope="row"</code> pour que les technologies d'assistance le comprennent.

<table class="table">
 <caption class="h4"> Personnes avec leur activités professionnels</caption>
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
 &lt;caption class="h4"&gt; Personnes avec leur activités professionnelles&lt;/caption&gt;
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

La navigation avec NVDA sera facilitée. Pour tout changement de colonne l'entête sera vocalisée.

Par Exemple, si on était sur la colonne Prénom, et qu'on utilise le raccourci <kbd>Ctrl+alt+fleche de /droite</kbd> pour passer à la colonne d'après, avec l'entête Nom, NVDA nous vocalisera "Nom Colonne 2 + texte de la colonne"

### Tableau à double entête

Dans ce deuxieme exemple, le tableau sera un emploi du temps permettant de savoir rapidement si le magasin est ouvert ou fermé, en fonction du jour de la semaine et de l'heure.

Du coup le tableau nécessite deux entête, une pour les jours de la semaine et une pour le créneau horaire.

<table class="table">
 <caption class="h4">Ouverture du magasin de jouet</caption>
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

Dans le tableau ci-dessus, il y a deux choses à retenir&nbsp;:
<ul>
  <li>L'utilisation du <code>scope="row"</code> pour definir les créneaux horaires comme entête.</li>
  <li>Attention à ne pas mettre une entête vide, dans la première ligne un mauvais réflexe est d'utiliser la balise <code>th</code> pour toutes les colonnes, or la premiere colonne ne sera pas une entête vu qu'elle affiche seulement les entêtes de ligne.</li>
</ul>

Sur NVDA, pour tout changement de ligne ou de colonne l'entête sera vocalisée.

### Tableau avec colonne triable

Pour le dernier exemple, nous allons implémenter un tableau avec des colonnes triables, afin que ce tableau soit accessible il y a certaines règles à suivre.

<table class="table">
 <caption class="h4">Liste des plus gros succès français au box-office mondial</caption>
  <tr>
    <th scope="col">Rang</th>
    <th scope="col">Film</th>
    <th scope="col">Réalisateur</th>
    <th scope="col">Année</th>
    <th scope="col">Recettes</th>
  </tr>
  <tr>
    <td>1</td>
    <td>Lucy</td>
    <td>Luc Besson</td>
    <td>2014</td>
    <td>463 360 063 $</td>
  </tr>
  <tr>
    <td>2</td>
    <td>Intouchables</td>
    <td>Olivier Nakache</td>
    <td>2011</td>
    <td>426 588 510 $</td>
  </tr>
  <tr>
    <td>3</td>
    <td>Taken 2</td>
    <td>Olivier Megaton</td>
    <td>2012</td>
    <td>376 141 306 $</td>
  </tr>
  <tr>
    <td>4</td>
    <td>Taken 3</td>
    <td>Olivier Megaton</td>
    <td>2015</td>
    <td>326 479 141 $</td>
  </tr>
  <tr>
    <td>5</td>
    <td>Le Cinquième Élément</td>
    <td>Luc Besson</td>
    <td>1997</td>
    <td>263 920 180 $</td>
  </tr>
  <tr>
    <td>6</td>
    <td>Bienvenue chez les Ch'tis</td>
    <td>Dany Boon</td>
    <td>2008</td>
    <td>245 144 417 $</td>
  </tr>
  <tr>
    <td>7</td>
    <td>Taken</td>
    <td>Pierre Morel</td>
    <td>2008</td>
    <td>226 830 568 $</td>
  </tr>
  <tr>
    <td>8</td>
    <td>Valérian et la Cité des mille planètes</td>
    <td>Luc Besson</td>
    <td>2017</td>
    <td>225 874 228 $</td>
  </tr>
  <tr>
    <td>9</td>
    <td>Le Fabuleux Destin d'Amélie Poulain</td>
    <td>Jean-Pierre Jeunet</td>
    <td>2001</td>
    <td>173 921 954 $</td>
  </tr>
  <tr>
    <td>10</td>
    <td>Qu'est-ce qu'on a fait au Bon Dieu ?</td>
    <td>Philippe de Chauveron</td>
    <td>2014</td>
    <td>148 480 000 $</td>
  </tr>
</table>