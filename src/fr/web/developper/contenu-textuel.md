---
title: "Web développer - Contenu textuel"
abstract: "Contenu textuel, recommendations d'accessibilité web lors du développement"
---

# Web développer - Contenu textuel

<p class="lead">S’assurer que les contenus textuels soient structurés avec la sémantique appropriée</p>


## Donner un titre aux pages

**Cible&nbsp;:** tout le monde, et en particulier les personnes déficientes visuelles.  
**Quand&nbsp;:** dès la conception et pendant le développement.

**Description&nbsp;:**  
Donner à chaque page un titre qui lui est spécifique et qui reflète son contenu ou sa fonction (balise `<title>`).  
Le titre de la page est le premier élément lu par la synthèse vocale, il doit permettre d’identifier la page sur laquelle on se trouve.

**À vérifier&nbsp;:**
- Bien qu’il n’y ait pas de règle, en général, on va de l’information la plus spécifique vers la moins spécifique (exemple : nom de la page courante - nom du site). Dans d’autres contextes d’utilisation pour lesquels l’utilisateur a de nombreuses applications ou sites ouverts en même temps, il vaut mieux aller de l’information la plus générale vers la plus spécifique (exemple : nom du site - nom de la page).
- Lorsque le contenu de la page est modifié dynamiquement (affichage du résultat d’une recherche, erreurs dans un formulaire, action utilisateur ajoutant du contenu…), le titre de la page doit refléter cette modification du contenu.

**Objectif utilisateur&nbsp;:**  
Permettre aux utilisateurs d’identifier le sujet d’une page, de se repérer et se faire une idée précise du contenu de la page sans avoir à le lire. C’est, notamment, le premier élément vocalisé par un lecteur d’écran.

**Exemple valide&nbsp;:**
`<title>Accueil - Espace client Orange</title>`
 
**Exemple non-valide&nbsp;:**
`<title>Accueil</title>`

**Référence <abbr>WCAG</abbr>&nbsp;:**
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#page-titled">2.4.2 Page Titled</a>



## Donner des titres aux rubriques

**Cible&nbsp;:** tout le monde, et en particulier les personnes déficientes cognitives, avec des difficultés pour lire et déficientes visuelles.  
**Quand&nbsp;:** dès la conception, à la rédaction du contenu et pendant le développement.

**Description&nbsp;:**  
Identifier les balises de titres à utiliser (balises <abbr>HTML</abbr> `h1` jusqu’à `h6`) pour structurer le contenu des pages.
Les personnes malvoyantes naviguant à l’aide d’un lecteur d’écran peuvent accéder à la liste des titres de la page pour naviguer rapidement. 
Tout comme dans un fichier Word, il est possible d’utiliser la table des matières si des titres ont correctement été positionnés à l’intérieur du document. 

**À vérifier&nbsp;:**

- Les titres doivent être pertinents et non vides.
- Il ne doit pas exister de saut dans la hiérarchie des titres (on ne passe pas directement d’un titre `h2` à un titre `h4`).
- On peut mettre plusieurs `h1` par page (se limiter tout de même à deux dans la majorité des cas).
- Les lecteurs d’écran ne prennent pas en compte les titres masqués (`visibility: hidden;`, `display: none;` ou `aria-hidden`).
- Le contenu généré dynamiquement doit aussi respecter cette exigence.

**Objectif utilisateur&nbsp;:**
- Pour tous les utilisateurs&nbsp;: améliorer la structure de la page et de son contenu. 
- Pour les utilisateurs déficients visuels, déficients cognitifs ou ayant des difficultés de lecture&nbsp;: faciliter la navigation et l’accès au contenu.

**Objectif technique&nbsp;:**
- Pour les moteurs de recherche&nbsp;: améliorer le référencement.

**Exemple valide&nbsp;:**   
   
Un titrage de page cohérent et pertinent&nbsp;:

<pre><code class="html">
&lt;h1&gt;Accueil – Orange&lt;/h1&gt;
    &lt;h2&gt;Les actualités&lt;/h2&gt;
    &lt;h2&gt;La fibre arrive&nbsp;!&lt;/h2&gt;
        &lt;h3&gt;Êtes-vous éligible&nbsp;?&lt;/h3&gt;
</code></pre>
 
**Exemple non-valide&nbsp;:**      
Un titrage de page avec un saut de niveau h2 → h4&nbsp;:

<pre><code class="html">
&lt;h1&gt;Accueil – Orange&lt;/h1&gt;
    &lt;h2&gt;Les actualités&lt;/h2&gt;
    &lt;h2&gt;La fibre arrive&nbsp;!&lt;/h2&gt;
        &lt;h4&gt;Êtes-vous éligible&nbsp;?&lt;/h4&gt;
</code></pre>
   
**Outils :**  
Des extensions à installer dans votre navigateur permettent d'extraire la liste des titres : 
- L’extension <strong>HeadingsMaps</strong> disponible sur Firefox et chrome.
- L'extension <a href="https://chrispederick.com/work/web-developer/" lang="en">Web developer</a>.

**Référence <abbr>WCAG</abbr>&nbsp;:**
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#headings-and-labels ">2.4.6 Headings and Labels</a>
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#info-and-relationships">1.3.1 Info and Relationships</a>




## Respecter la sémantique HTML

**Cible&nbsp;:** tout le monde, et en particulier les personnes déficientes visuelles, avec des déficiences cognitives et les seniors.  
**Quand&nbsp;:** dès la conception et à la rédaction du contenu.

**Description&nbsp;:** 
Utiliser correctement les éléments <abbr>HTML</abbr>, en respectant ce pourquoi ils sont faits (validation du code et respect des spécifications) et donc leur sémantique.

**À vérifier&nbsp;:**
Vérifier que la page, si besoin, utilise des listes sémantiquement pertinentes (pas de liste vides ou ne contenant qu’un seul élément)&nbsp;:
 - `<ol>` pour les listes ordonnées,
 - `<ul>` pour les listes non ordonnées,
 - `<li>` pour les éléments de liste.
 - `<dl>`, `<dt>` et `<dd>` pour les listes de définitions

Les listes possèdent au moins deux éléments car sinon ce ne sont pas des listes (sauf si elles sont générées dynamiquement)

S’assurer de bien baliser les citations longues `<blockquote>` ou brèves `<q>`.

Les liens sont bien des liens (i.e. balise `<a>`)&nbsp;: ils pointent effectivement vers une autre adresse, page ou onglet…

Les boutons sont bien des boutons (i.e. balise `<button>`, ou `<input type="button">`)&nbsp;: ils déclenchent une action, une validation, ou encore permettent de faire un choix…

Penser, dans la mesure du possible, à respecter l’apparence classique de ces éléments pour ne pas perturber l’utilisateur habitué à leur aspect spécifique.

Dans le code <abbr>HTML</abbr> s’assurer, lors de la validation, qu'à minima&nbsp;:
- les éléments ont des balises de début et de fin,
- les éléments sont imbriqués conformément à leurs spécifications,
- les éléments ne contiennent pas d’attributs dupliqués,
- chaque `id` est unique.

**Objectif utilisateur&nbsp;:**  
Permettre à tous les utilisateurs d’anticiper la manière d’utiliser et les comportements possibles pour un élément d’interface donné, en assurant que le bon fonctionnement des <abbr>AT</abbr>.

**Objectif technique&nbsp;:**  
Oblige à la structuration cohérente du contenu par le créateur du site et permet d'améliorer la maintenabilité.

**Exemple non-valide&nbsp;:**  
![Exemple non-valide de mauvaise utilisation d ’un lien](../../images/nv-semantiq.jpg)  
Dans cet exemple, le lien «&nbsp;Actualiser&nbsp;» devrait être un bouton «&nbsp;Actualiser&nbsp;» car ici il déclenche une action et non le chargement d’une <abbr>URL</abbr> (page).

**Référence <abbr>WCAG</abbr>&nbsp;:**
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#info-and-relationships">1.3.1 Info and Relationships</a>
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#parsing">4.1.1 Parsing</a>
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#name-role-value">4.1.2 Name, Role, Value</a>

**Outil&nbsp;:** [validateur <abbr>HTML</abbr> et <abbr>CSS</abbr> du <abbr>W3c</abbr>](https://validator.w3.org/)




## Indiquer la langue principale et les changements de langue

**Cible&nbsp;:** pour tout le monde, et en particulier les personnes déficientes visuelles.  
**Quand&nbsp;:** lors du le développement.

**Description&nbsp;:**  

Spécifier la langue principale du document grâce à l’attribut `lang` dans la balise `html`. 
Préciser également la langue d’un contenu exprimé dans une langue autre que la langue principale, en utilisant l’attribut `lang` dans l’élément <abbr>HTML</abbr> contenant l’expression en langue étrangère.  

**À vérifier&nbsp;:**

Pour les mots ou les expressions en langue étrangère passés dans l’usage courant (Google, newsletter…) ou les noms propres, ne pas indiquer de changement de langue.

**Objectif utilisateur&nbsp;:**

Cet attribut permet d’indiquer à la synthèse vocale la langue à utiliser.

**Objectif technique&nbsp;:** 

Permettre aux moteurs de recherche d’identifier la langue d’une page pour améliorer le référencement naturel.  

**Exemple pour une page en français&nbsp;:**  

- pour du <abbr>HTML</abbr>&nbsp;: `<html lang="fr">`
- pour du <abbr>XHTML</abbr>&nbsp;: `<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="fr" lang="fr">`

**Exemple de changement de langue&nbsp;:**  
`découvrir Orange <span lang="en">live</span> TV`

**Référence <abbr>WCAG</abbr>&nbsp;:**  
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#language-of-page">3.1.1 Language of Page</a>
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#language-of-parts">3.1.2 Language of Parts</a>




## Structurer les tableaux de données

**Cible&nbsp;:** tout le monde, et en particulier les personnes déficientes visuelles.  
**Quand&nbsp;:** dès la phase de conception et lors du développement.

**Description&nbsp;:**

Pour des données tabulaires&nbsp;:
- Utiliser l’élément `table` avec les éléments enfants `th` (pour les cellules d’entêtes), `td`, `tr`.
- Utiliser l’attribut `scope` avec la valeur `row`/`col` pour associer les cellules d’en-têtes et les cellules de données ; pour des tableaux complexes, utiliser les attributs `id` et `headers`.
- Utiliser la balise `caption`, une balise `h1` à `h6` juste avant le tableau ou lier un texte proche du tableau via un attribut `aria-labelledby` dans l’élément `table` pour associer un titre au tableau (cf. [les attributs ARIA qui peuvent vous sauver](../../../articles/attributs-aria-qui-peuvent-vous-sauver/)).
- Ajouter un résumé afin d’expliciter la structure d'un tableau complexe :
 - **HTML5**: ajouter le résumé directement dans la légende (`caption`).
 - **Version antérieure d'HTML**: ajouter le résumé dans un attribut `summary`.

**À vérifier&nbsp;:**

- Rappel&nbsp;: ne pas utiliser de tableaux à des fins de mise en page. 
- La légende (`caption`) peut être remplacée par un titre de section (`hx`) placé avant le tableau.
- Préférer scinder un tableau complexe en plusieurs tableaux plus simples.
- Les balises `tbody`, `tfoot` et `thead` n’ont aucune influence sur l’accessibilité, il n’y a donc pas d’obligation à les utiliser.

Dans le cas d’un tableau complexe, un résumé est présent pour expliciter la structure :
- **HTML5**: le résumé du tableau est présent dans la légende (`caption`).
- **HTML5 - solution alternative**: le résumé est lié au tableau via un attribut `aria-describedby` 
- **Version antérieure d'HTML**: le résumé est présent dans un attribut `summary` du tableau


**Objectif utilisateur&nbsp;:**
Donner un résumé et un titre aux tableaux de données permet à tous d’en connaître l’objet rapidement sans avoir à le parcourir. Pour des utilisateurs déficients visuels, lier les cellules aux en-têtes permet de se situer dans le tableau et de comprendre les données de celui-ci.

**Référence <abbr>WCAG</abbr>&nbsp;:**  
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#info-and-relationships">1.3.1 Info and Relationships</a>
