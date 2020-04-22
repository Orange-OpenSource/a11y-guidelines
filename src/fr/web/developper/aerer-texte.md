---
title: "Permettre d'aérer le texte"
---

# Permettre d'aérer le texte

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

**Bookmarklet:**  
Pour faciliter le test, vous pouvez utiliser le bookmarklet suivant (à glisser dans votre barre de favoris) : 
<a href="javascript:(function(){document.querySelector(%27body%27).classList.add(%27text-spacing%27);%20var%20style%20=%20document.createElement(%27style%27),%20styleContent%20=%20document.createTextNode(%27.text-spacing%20*%20{%20line-height:%201.5%20!important;%20letter-spacing:%200.12em%20!important;%20word-spacing:%200.16em%20!important;%20}%20.text-spacing%20p{%20margin-bottom:%202em%20!important;%20}%20%27);%20style.appendChild(styleContent%20);%20var%20caput%20=%20document.getElementsByTagName(%27head%27);%20caput[0].appendChild(style);%20})();">Espacement du texte</a> créée par Steve Faulkner.

**Objectif utilisateur&nbsp;:**
Permettre aux personnes déficientes visuelles et cognitives d'améliorer le confort de lecture.

**Référence <abbr>WCAG</abbr>&nbsp;:**  
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#text-spacing">1.4.12 Text Spacing</a>
