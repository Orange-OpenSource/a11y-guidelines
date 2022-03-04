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

Le but des tableaux est de présenter des informations tabulaires dans une grille. Ils permettent d'organiser des données de façon logique entre des lignes et des colonnes.
Ça permet à un utilisateur voyant d'établir rapidement des associations visuelles entre les données du tableau et ses entêtes.

Par contre un utilisateur non-voyant n'aura pas accès à toutes ses informations, c'est pour cela qu'il est important que les tableaux soient implémentés avec le balisage HTML approprié afin qu'ils soient les plus accessibles possibles pour les technologies d'assistance.

Dans la suite de cette article nous allons voir les principales règles à respecter pour obtenir un tableau accessible.

### Mettre une légende à votre tableau tableau

Il est important de définir un titre à votre tableau. Ce texte permettra d'indiquer le contenu du tableau. Il doit être associé au tableau grâce au balise <code>caption</code>, l'élement doit être la premier chose après la balise d'ouverture du tableau.

<pre><code class="html">
&lt;table&gt;
    &lt;caption&gt; Emploi du temps 2022 &lt;/caption&gt;
    [...]
&lt;/table&gt;
</code></pre>

L'élément <code>caption</code> est utilisé comme un titre au tableau et permet de donner le sens générale de celui-ci. Il ne doit pas être trop long.
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

Il existe aussi la possibilité d'utiliser l'attribut <code>summary</code> d'un tableau, néanmoins cette attribut ne fait plus partie des spécification HTML 5 et nous ne recommandons pas son utilisation.

### Identifier les entêtes de votre tableau

Pour aider les utilisateurs de technologies d'assistance, il est impératif de déterminer les entêtes de nos tableaux, que ce soit pour les lignes et les colonnes.
Pour determiner ces entêtes il faut utiliser la balise <code>th</code>, celle-ci ne doit jamais être vide.

Une fois que les entêtes sont créés, il faut les associer au cellules de données appropriés.
L'attribut <code>scope</code> permet d'indiquer aux technologies d'assistance si la cellule contient une entête de colonne ou de ligne : 

<ul>
  <li><code>&lt;th scope="col"&gt;</code> pour une entête colonne</li>
  <li><code>&lt;th scope="row"&gt;</code> pour une entête ligne</li>
</ul>

### Cas particuliers des tableaux de mise en forme

Dans la mesure du possible <strong> évitez d'utiliser des tableaux pour faire de la mise en page</strong>. Les tableaux sont utiles pour présenter des données tabulaires avant tout.

Dans le cas ou vous utilisez un tableau pour faire de la mise en page, vous devez respecter ces règles :

<ul>
  <li>l'élement <code>table</code> doit avoir l'attribut <code>role="presentation</code></li>
  <li>les éléments propres à un tableau ne doivent pas être utilisés : <code>caption</code>, <code>th</code>, <code>scope</code></li>
  <li>assurez vous que le tableau se lit bien de gauche à droite</li>
</ul>

### Utilisation de NVDA avec les tableaux

Le fait de créer des tableaux accessible permettra de faciliter la lecture au lecteur d'écran. Pour naviguer dans un tableau avec NVDA il existe plusieurs raccourci.

Pour naviguer rapidement sur un tableau, il suffit de cliquer sur la touche <kbd>t</kbd>, si on utilise le raccourci <kbd>Maj + t</kbd> on revient au tableau précedent.

Une fois qu'on est au sein d'un tableau il existe plusieurs raccourci afin de s'y déplacer simplement.

<ul>
<li><kbd>Ctrl+alt+fleche de gauche</kbd> permet de se déplacer sur la colonne de gauche tout en gardant la même ligne, <kbd>Ctrl+alt+fleche de droite</kbd> se déplace sur la colonne de droite</li>
<li><kbd>Ctrl+alt+fleche de bas</kbd> permet de passer à la ligne suivante en restant sur la même ligne, <kbd>Ctrl+alt+fleche de haut</kbd> pour passer à la ligne précedante</li>
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
 &lt;caption class="h4"&gt; Personnes avec leur activités professionnels&lt;/caption&gt;
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

La navigation avec NVDA sera facilité. Pour tout changement de colonne l'entête sera vocalisée.

Par Exemple si on était sur la colonne Prénom, et qu'on utilise le raccourci <kbd>Ctrl+alt+fleche de /droite</kbd> pour passer à la colonne d'après, avec l'entête Nom, NVDA nous vocalisera "Nom Colonne 2 + texte de la colonne"

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

Dans le tableau ci-dessus, il y a deux choses à retenir :
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