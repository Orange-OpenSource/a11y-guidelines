# Permettre d'aérer le texte

<script>$(document).ready(function () {
    setBreadcrumb([
        {"label":"Critères incontournables", "url": "./incontournables.html#dev"},
        {"label":"Permettre d'aérer le texte"}
    ]);
});</script>

<span data-menuitem="incontournables"></span>

**Cible&nbsp;:** tout le monde, et en particulier les personnes déficientes visuelles, avec des limitations cognitives (dyslexique) et celles avec un déficit d'attention.  
**Quand&nbsp;:** lors de la conception et du développement.

Si l'utilisateur applique les réglages suivants, le texte doit rester lisible (pas de contenu tronqué, superposé):

- La hauteur des lignes doit pouvoir être ajustée à 1.5 fois minimum la taille de la police de caractères.
- L'espace situé entre deux paragraphes doit pouvoir être ajusté à 2 fois minimum la taille de la police de caractères.
- L'espacement entre les lettres doit pouvoir être ajusté à 0.12 fois minimum la taille de la police de caractères.
- L'espacement entre les mots doit pouvoir être ajusté à 0.16 fois minimum la taille de la police de caractères.

Cela revient à appliquer les styles CSS suivants : 
<pre><code class="css">
  * {
      line-height: 1.5!important;
      letter-spacing:.12em!important;
      word-spacing: .16em !important;
  }

  p {
      margin-bottom: 2em!important;
  }
</code></pre>

Pour faciliter le test, vous pouvez utiliser le bookmarklet suivant (à glisser dans votre barre de favoris) : <a href="javascript:s%20=%20document.createElement(%22style%22)%3Bs.setAttribute(%22type%22%2C%22text%2Fcss%22)%3Bt%3Ddocument.createTextNode(%22*%20%7Bline-height%3A%201.5!important%3B%20letter-spacing%3A.12em!important%3B%20word-spacing%3A%20.16em%20!important%3B%7D%20p%7Bmargin-bottom%3A%202em!important%3B%20%7D%22)%3Bs.appendChild(t)%3Bh%20%3D%20document.getElementsByTagName(%22head%22)%5B0%5D%3Bh.appendChild(s)%3Bvoid(0)%3B">Espacement du texte</a>

**Objectif utilisateur&nbsp;:**
Permettre aux personnes déficientes visuelles et cognitives d'améliorer le confort de lecture.

**Référence <abbr>WCAG</abbr>&nbsp;:**  
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#text-spacing">1.4.12 Text Spacing</a>

<!--  This file is part of a11y-guidelines | Our vision of mobile & web accessibility guidelines and best practices, with valid/invalid examples.
 Copyright (C) 2016  Orange SA
 See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). -->