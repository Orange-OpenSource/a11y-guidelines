# Quelques bonnes pratiques pour les liens de téléchargement
<script>$(document).ready(function () {
    setBreadcrumb([
      {"label":"Articles techniques", "url":"techniques.html"},
      {"label":"Quelques bonnes pratiques pour les liens de téléchargement"}
    ]);    
});</script>

Il existe différents types de liens : [les liens classiques](./inc-dev-intitules-hors-contexte.html) permettant d'atteindre une nouvelle page, [les liens d'évitement](./skiplinks.html) permettant de se déplacer au sein de la page et enfin ceux qui nous intéressent dans cet article : les liens permettant de télécharger un fichier.

Un lien permettant de télécharger un fichier devrait respecter les règles suivantes :
- son intitulé doit être explicite, il doit également préciser le type et le poids du fichier
- son intitulé doit préciser la langue du document lorsque celui-ci est rédigé dans une langue différente que celle de la page courante
- ce lien doit être réalisé à l'aide d'une balise `<a>` (et non une balise `<button>`)
- ce lien doit s'ouvrir dans la fenêtre en cours (pas d'attribut `target` pour ouvrir dans un nouvel onglet)

En plus de servir l'accessibilité, fournir ces informations permettra à l'utilisateur d'éviter un téléchargement inutile ce qui est également une bonne pratique eco-responsable.  

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

En anglais, les unités utilisées pour exprimer le poids des fichiers s'écrivent en lettres capitales (KB, MB, GB ...).

<h2>Langue du fichier</h2>

Pour les liens permettant de télécharger un document dans une langue autre que celle de la page courante, il est important de le préciser.  

Exemples de documents en anglais sur un site français :  
- <a href="#"><span lang="en">Complete review</span> (Anglais, DOC, 800 Ko)
- <a href="#"><span>Notice d'utilisation</span> (Anglais, PDF, 1.2 Mo)

<pre><code class="html">&lt;a href="#"&gt;&lt;span lang="en"&gt;Complete review&lt;/span&gt; (Anglais, DOC, 800 Ko)
&lt;a href="#"&gt;&lt;span&gt;Notice d'utilisation&lt;/span&gt; (Anglais, PDF, 1.2 Mo)</code></pre>

<h2>Une petite image pour la déco, mais pas seulement</h2>

Si le type de fichier est connu, une petite icône à côté du fichier permet à l'utilisateur de percevoir plus rapidement le type du fichier :  
<a style="background-image: url(./images/pdf-icon.svg); background-size: contain; background-repeat: no-repeat; padding-left: 2rem;" href="#">bilan complet 2020 (PDF, 1.5 Mo)</a>

  
&nbsp;
<!--  This file is part of a11y-guidelines | Our vision of mobile & web accessibility guidelines and best practices, with valid/invalid examples.
 Copyright (C) 2016  Orange SA
 See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). -->