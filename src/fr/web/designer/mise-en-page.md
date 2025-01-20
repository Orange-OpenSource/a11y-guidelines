---
title: "Web designer - Mise en page"
abstract: "Mise en page, recommendations d'accessibilité Web lors de la conception"
---

# Web designer - Mise en page

<p class="lead">S’assurer que la mise en page soit adaptée à l’utilisateur.</p>


## Agrandissement de texte et adaptation à la taille d'affichage

**Cible&nbsp;:** tout le monde et en particulier les personnes déficientes visuelles, en mobilité et seniors.  
**Quand&nbsp;:** lors de la conception graphique et principalement lors du développement.

**Description&nbsp;:**  
La taille du texte doit pouvoir être multipliée par 2 (zoom du texte à 200% depuis les réglages du navigateur). À ce niveau de zoom, la présentation de la page peut être altérée, mais l’information doit rester lisible (pas de texte tronqué, ni superposé).

De plus, il faut s'assurer de faire du contenu web adaptatif (responsive web design) donc prévoir les différents affichages selon des largeurs type d'écran (points de rupture) en amont du développement. 

Par ailleurs, certains choix de design peuvent ou non faciliter la mise en place de ce critère lors du développement, il est donc important d’y réfléchir dès le départ.

    
**Exemple&nbsp;:**    
La capture ci-dessous montre une page avec un zoom à 100%.  
![capture d’écran avec zoom à 100%](../../images/zoom.png)    
  
**Exemple valide&nbsp;:**  
Avec zoom du texte à 200%.  
![capture d’écran avec zoom à 200% et texte lisible](../../images/zoom-ok.png)    
  
**Exemple non-valide&nbsp;:**  
Avec zoom du texte à 200%. Ici la hauteur de l’élément contenant le texte n’a pas été rendue variable en fonction de la taille des caractères.  
![capture d’écran avec zoom à 200% et texte tronqué](../../images/zoom-ko.png)  



## Permettre d'aérer le texte

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



## Identifier et conserver la cohérence des regroupements et des différentes régions de la page

**Cible&nbsp;:** tout le monde et en particulier les personnes déficientes visuelles, cognitives ou ayant des troubles de l’attention.

**Quand&nbsp;:** lors de la conception.

**Description&nbsp;:**  
Fournir des moyens d’identifier et de distinguer visuellement les différentes parties de la page et assurer la cohérence de ces régions ou regroupements dans toutes les pages.

**À vérifier&nbsp;:** 

- S'assurer que les liens dans le corps du texte sont facilement identifiables visuellement par un autre moyen que la couleur (souligné, gras…) par rapport au reste du texte.
- S’assurer que les mécanismes de navigation sont toujours situés au même endroit dans un ensemble de page.
- S’assurer que les composants et les regroupements qui ont la même fonction, sont identifiés (visuellement) de la même façon et, dans la mesure du possible, respecter l’apparence classique de ces éléments pour ne pas perturber l’utilisateur habitué à un aspect spécifique de ceux-ci (par exemple, les liens sont généralement soulignés…).
- S’assurer que les zones de la page sont clairement délimitées (bordures, filets, contraste suffisant…) ou qu’il y a un moyen de distinguer visuellement les groupes (sous-menu, liste déroulante…) ainsi que les différentes régions de la page.

**Exemple valide&nbsp;:**  

![capture d’écran du site 100% pratique](../../images/groupement.jpg)  

Ici, l’info bulle (<i lang="en">tooltip</i>) est délimitée par une bordure bien visible et suffisamment contrastée, permettant de bien identifier son contenu.

**Exemple non-valide&nbsp;:**  

![capture d’écran du site fnac.com](../../images/groupement2.jpg){:class="lol"}

Il est très difficile d’associer les thèmes («&nbsp;par région&nbsp;», «&nbsp;par genre&nbsp;»…) et les sous-thèmes en colonnes, d’autant plus que les filets horizontaux sont trop peu contrastés.




## Surface minimale des éléments interactifs

**Cible :** tout le monde, en particulier les personnes déficientes visuelles et les personnes souffrant de handicap moteur ou en mobilité. 
**Quand :** dès la phase de conception et lors du développement.

**Description :**  
- Les éléments interactifs doivent avoir une surface suffisamment grandes ou être suffisamment espacés pour pouvoir être facilement activés afin de réduire les risques d'erreurs.
- Les éléments interactifs doivent mesurer au moins 24 pixels de haut par 24 pixels de large. Il est nécessaire de prendre en compte la totalité de la zone de clic ou de toucher et pas uniquement le texte ou l'image.

**À vérifier :**
- Vérifier les dimensions des éléments interactifs.
- Vérifier que les éléments interactifs respectent une surface minimale de 24 pixels de haut par 24 pixels de large, et ce dans toutes les conditions d'affichage indépendamment du niveau de zoom ou de la taille du viewport notamment.

**Exceptions conformes :**
- Si des éléments interactifs ont une surface inférieure à la surface minimale de 24*24 pixels mais sont placés de manière à ce qu'un cercle de 24 pixels de diamètre centré sur chacun d'eux ne chevauche pas d'autres éléments interactifs.
- Si la surface de l'élément interactif est inférieure à 24*24 pixels mais qu'il existe une alternative conforme permettant de réaliser la même action.
- Si l'élément interactif est intégré dans une phrase ou dont la taille est contrainte par la hauteur de ligne du texte non interactif environnant.

**Exceptions non-applicables :**
- Si le rendu des éléments interactifs est le rendu par défaut de l'agent utilisateur.
- Si la taille et la position des éléments interactifs sont cruciales pour le contenu (exemple : des repères sur une carte) ou contraintes par une obligation légale. Dans ce cas il est toutefois recommandé de fournir des alternatives lorsque cela est possible.

**Objectif utilisateur :**
Permettre aux utilisateurs de sélectionner facilement les éléments interactifs, même en cas de difficultés motrices et indépendamment de la taille du terminal utilisé.

**Exemples valides :**
- Trois boutons sont affichés à l'écran et chacun mesure 24*24 pixels.
- Une rangée de boutons est affichée à l'écran. Chaque bouton présente une longueur supérieure à 24 pixels, une hauteur de 20 pixels et une marge supérieure et inférieure de 4 pixels.
- Un élément interactif a une surface inférieure à 24*24 pixels mais est placé de manière à ce qu'un cercle de 24 pixels de diamètre centré sur lui ne chevauche pas d'autres éléments interactifs.

**Référence WCAG :**
<a lang="en" href="https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html">2.5.8 Target Size (Minimum)</a>
