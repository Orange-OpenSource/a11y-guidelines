# Donner des titres aux rubriques

<script>$(document).ready(function () {
    setBreadcrumb([
        {"label":"Critères WCAG par thème - Développeurs", "url": "./incontournables.html#dev"},
        {"label":"Donner des titres aux rubriques"}
    ]);
});</script>

<span data-menuitem="incontournables"></span>

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
- L’extension <a href="https://www.learningapps.co.uk/moodle/xertetoolkits/play.php?template_id=1309" hreflang="en" lang="en">HeadingsMaps</a>.
- L'extension <a href="https://chrispederick.com/work/web-developer/" lang="en">Web developer</a>.

**Référence <abbr>WCAG</abbr>&nbsp;:**
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#info-and-relationships">1.3.1 Info and Relationships</a>


<!--  This file is part of a11y-guidelines | Our vision of mobile & web accessibility guidelines and best practices, with valid/invalid examples.
 Copyright (C) 2016  Orange SA
 See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). -->