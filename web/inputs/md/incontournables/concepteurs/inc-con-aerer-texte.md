# Permettre d'aérer le texte

<script>$(document).ready(function () {
    setBreadcrumb([
        {"label":"Critères incontournables", "url": "./incontournables.html"},
        {"label":"Permettre d'aérer le texte"}
    ]);
});</script>

<span data-menuitem="incontournables"></span>


**Cible&nbsp;:** tout le monde, et en particulier les personnes déficientes visuelles et dyslexiques.  
**Quand&nbsp;:** lors de la conception et du développement.

Même si c'est pendant la phase de développement que l'on va s'assurer de la validité de ce critère, il est intéressant dès la phase de conception de réfléchir à la hauteur des lignes et à l'espacement des paragraphes et du texte. Il est couramment admis qu'une hauteur de ligne (<span lang="en">line-height</span>) de 1.5 permet d'obtenir une bonne lisibilité du texte, exemple article en anglais intitulé : <a href="https://www.invisionapp.com/blog/line-spacing/" lang="en">Why you shoud go big with line spacing</a>.

**Description&nbsp;:**  
Si l'utilisateur applique les réglages suivants, le texte doit rester lisible (pas de contenu tronqué, superposé):

- La hauteur des lignes doit pouvoir être ajustée à 1.5 fois minimum la taille de la police de caractères.
- L'espace situé entre deux paragraphes doit pouvoir être ajusté à 2 fois minimum la taille de la police de caractères.
- L'espacement entre les lettres doit pouvoir être ajusté à 0.12 fois minimum la taille de la police de caractères.
- L'espacement entre les mots doit pouvoir être ajusté à 0.16 fois minimum la taille de la police de caractères.

Pour info les critères cités précédemment reviennent à appliquer les styles CSS suivants au niveau de code : 
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

**Bookmarklet:**  
Pour faciliter le test, vous pouvez utiliser le bookmarklet suivant qui appliquera ces styles à la page courante de votre navigateur (bookmarklet à glisser dans votre barre de favoris) : <a href="javascript:s%20=%20document.createElement(%22style%22)%3Bs.setAttribute(%22type%22%2C%22text%2Fcss%22)%3Bt%3Ddocument.createTextNode(%22*%20%7Bline-height%3A%201.5!important%3B%20letter-spacing%3A.12em!important%3B%20word-spacing%3A%20.16em%20!important%3B%7D%20p%7Bmargin-bottom%3A%202em!important%3B%20%7D%22)%3Bs.appendChild(t)%3Bh%20%3D%20document.getElementsByTagName(%22head%22)%5B0%5D%3Bh.appendChild(s)%3Bvoid(0)%3B">Espacement du texte</a>


<!--  This file is part of a11y-guidelines | Our vision of mobile & web accessibility guidelines and best practices, with valid/invalid examples.
 Copyright (C) 2016  Orange SA
 See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). -->