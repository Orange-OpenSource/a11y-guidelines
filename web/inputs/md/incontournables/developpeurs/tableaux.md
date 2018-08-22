# Structurer les tableaux de données

<script>$(document).ready(function () {
    setBreadcrumb([
        {"label":"Critères incontournables", "url": "./incontournables.html"},
        {"label":"Structurer les tableaux de données"}
    ]);
});</script>

<span data-menuitem="incontournables"></span>

**Cible&nbsp;:** tout le monde, et en particulier les personnes déficientes visuelles.  
**Quand&nbsp;:** dès la phase de conception et lors du développement.

**Description&nbsp;:**

Pour des données tabulaires&nbsp;:
- Utiliser l’élément `table` avec les éléments enfants `th` (pour les cellules d’entêtes), `td`, `tr`.
- Utiliser l’attribut `scope` avec la valeur `row`/`col` pour associer les cellules d’en-têtes et les cellules de données ; pour des tableaux complexes, utiliser les attributs `id` et `headers`.
- Utiliser la balise `caption`, une balise `h1` à `h6` juste avant le tableau ou lier un texte proche du tableau via un attribut `aria-labelledby` dans l’élément `table` pour associer un titre au tableau (cf. [les attributs ARIA qui peuvent vous sauver](./label-ledby-describedby.html)).
- Mettre un attribut `summary` dans l’élément `table` pour expliciter la structure dans le cas d’un tableau complexe. Attention cet attribut est déprécié en <abbr>HTML5</abbr>, il faudra donc rajouter, si besoin, le contenu du `summary` dans le titre du tableau.

**À vérifier&nbsp;:**

- Rappel&nbsp;: ne pas utiliser de tableaux à des fins de mise en page. 
- La légende (`caption`) peut être remplacée par un titre de section (`hx`) placé avant le tableau. L’attribut `summary`, quant à lui, n’est nécessaire que pour des tableaux complexes.
- Préférer scinder un tableau complexe en plusieurs tableaux plus simples.
- Mettre un résumé (attribut `summary`) dans le tableau pour expliciter la structure dans le cas d’un tableau complexe.
- Les balises `tbody`, `tfoot` et `thead` n’ont aucune influence sur l’accessibilité, il n’y a donc pas d’obligation à les utiliser.

**Objectif utilisateur&nbsp;:**
Donner un résumé et un titre aux tableaux de données permet à tous d’en connaître l’objet rapidement sans avoir à le parcourir. Pour des utilisateurs déficients visuels, lier les cellules aux en-têtes permet de se situer dans le tableau et de comprendre les données de celui-ci.

**Référence <abbr>WCAG</abbr>&nbsp;:**  
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#info-and-relationships">1.3.1 Info and Relationships</a>

<!--  This file is part of a11y-guidelines | Our vision of mobile & web accessibility guidelines and best practices, with valid/invalid examples.
 Copyright (C) 2016  Orange SA
 See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). -->