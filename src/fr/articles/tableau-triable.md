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

## Exemple de tableau

Nous allons maintenant vous presenter des exemples de tableau accessible.

### Tableau simple

<table class="table">
 <caption class="h4">Accessibilité des lignes du réseau de surface RATP</caption>
 <tr>
  <th scope="col">Équipements</th>
  <th scope="col">Nombre de lignes</th>
  <th scope="col">Pourcentage du total de lignes</th>
 </tr>
 <tr>
  <td>Rampe d'accès</td>
  <td>260</td>
  <td>70,46 %</td>
 </tr>
 <tr>
  <td>Annonce sonore</td>
  <td>318</td>
  <td>86,17 %</td>
 </tr>
</table>

### Tableau à double entête

### Tableau avec colonne triable