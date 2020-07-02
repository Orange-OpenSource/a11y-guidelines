# Les bonnes pratiques pour les liens de téléchargement
<script>$(document).ready(function () {
    setBreadcrumb([
      {"label":"Articles techniques", "url":"techniques.html"},
      {"label":"Les bonnes pratiques pour les liens de téléchargement"}
    ]);    
});</script>

Il existe différents types de liens : [les liens classiques](./inc-dev-intitules-hors-contexte.html) permettant d'atteindre une nouvelle page, [les liens d'évitements](./skiplinks.html) permettant de se déplacer au sein de la page et enfin ceux qui nous intéressent dans cet article, les liens permettant de télécharger un fichier.

Ces liens doivent respecter quelques règles :
- l'intitulé doit être explicite et préciser le type et le poid du fichier
- l'intitulé doit également préciser la langue si le document est dans une langue différente que celle de la page courante
- le lien doit être réalisé à l'aide d'une balise `<a>` (et non une balise `<button>`)
- le lien doit s'ouvrir dans la fenêtre en cours (pas d'attribut `target` pour ouvrir dans un nouvel onglet)

En plus de servir l'accessibilité, fournir ces informations permettrons à l'utilisateur d'éviter un téléchargement inutile ce qui est une bonne pratique eco-responsable.  

<h2>Exemples valides</h2>

Voici un exemple de lien présentant les informations nécessaires :  
  
Télécharger le <a href="#">bilan complet 2020 (PDF, 1.5 Mo)</a>.

<pre><code class="html">&lt;a href="#"&gt;Bilan complet 2020 (PDF, 1.5 Mo)&lt;/a&gt;</code></pre>

Il est important que ces informations complémentaires soient présentes dans l'intitulé du lien et non juste après le lien (notamment pour les personnes qui utilisent un lecteur d'écran). Cela dit pour des questions esthétiques il est possible de faire en sorte que les informations complémentaires ne soient pas soulignées, exemple :  
  
Télécharger le <a href="#" style="text-decoration: none"><span style="text-decoration: underline">bilan complet 2020 </span>(PDF, 1.5Mo)</a>

<pre><code class="html">&lt;a href="#" style="text-decoration: none"&gt;
  &lt;span style="text-decoration: underline"&gt;Bilan complet 2020 &lt;/span&gt;
  (PDF, 1.5Mo)
&lt;/a&gt;</code></pre>

<h2>À propos des unités</h2>

En anglais, les unités utilisés pour exprimer le poids des fichiers s'écrivent en lettres capitales (KB, MB, GB ...).

<h2>Langue du fichier</h2>

Pour les liens permettant de télécharger un document dans une langue autre que celle de la page courante, il est important de le préciser.  
Exemple de document en anglais :  
<a href="#"><span lang="en">Complete review</span> (Anglais, DOC, 800 Ko)

<pre><code class="html">&lt;a href="#"&gt;&lt;span lang="en"&gt;Complete review&lt;/span&gt; (Anglais, DOC, 800 Ko)</code></pre>


<!--  This file is part of a11y-guidelines | Our vision of mobile & web accessibility guidelines and best practices, with valid/invalid examples.
 Copyright (C) 2016  Orange SA
 See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). -->