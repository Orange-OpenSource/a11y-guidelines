---
title: "Mise en page"
abstract: "Mise en page, recommendations d'accessibilité web lors du développement"
---

# Mise en page

<p class="lead">S’assurer que la mise en page soit adaptée à l’utilisateur.</p>



## Utiliser des tailles relatives et faire du web adaptatif

**Cible&nbsp;:** tout le monde, et en particulier les personnes déficientes visuelles, en mobilité et seniors.  
**Quand&nbsp;:** lors du développement.

**Description&nbsp;:**

N’utiliser pour les tailles de police et pour les éléments conteneurs que des tailles relatives (`em`, `rem`, `%`) permettant l’agrandissement du texte seul de 200%. Globalement faire une interface web adaptative (responsive web design) sauf si la présentation en deux dimensions est nécessaire pour l'usage ou l'utilisation (images, cartes, diagrammes, vidéos, jeux, présentations, tableaux de données et barre d'outils...).

**À vérifier&nbsp;:**
- Ne pas utiliser le pixel (`px`) pour des tailles qui doivent pouvoir s’agrandir si l’on ne zoome que les textes (Internet Explorer ne le permet pas).
- Les éléments de formulaire doivent, eux aussi, posséder des tailles relatives pour s’agrandir.
- Penser à rendre fluides les conteneurs des textes afin qu’ils puissent s’agrandir lorsque les textes sont zoomés.
- Dans Firefox, faire Affichage>Zoom>Zoom texte seulement, utiliser les réglages du zoom pour atteindre 200%. Vérifier qu’il n’y a pas de perte d’information (disparition ou chevauchement de texte).  
- Le contenu doit s'adapter à la largeur de l'écran, il doit être consultable (sauf besoin particulier: carte, tableau, diagramme...) sans scroll horizontal même pour une largeur de la zone d'affichage (<span lang="en">vewport</span>) réduite à 320 pixels CSS. 
Note : 320 pixels CSS est équivalent à un viewport à 1280px CSS avec un zoom global (toute la page) à 400%.

![capture d’écran réglage du zoom dans Firefox](../../images/zoom-200.png)

**Objectif utilisateur&nbsp;:**
Permettre aux utilisateurs (malvoyants, en mobilité, seniors…) d’augmenter la taille du texte et zoomer pour plus aisément accéder à l’information.

**Exemple&nbsp;:**  
Voir l’exemple [gestion du zoom, agrandissement de la taille du texte](../../exemples-de-composants/zoom/) pour plus d’informations.

**Référence <abbr>WCAG</abbr>&nbsp;:**  
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#resize-text">1.4.4 Resize text</a>
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#reflow">1.4.10 Reflow</a>



## Permettre d'aérer le texte

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
Pour faciliter le test, vous pouvez utiliser le bookmarklet suivant (à glisser dans votre barre de favoris) : <a href="javascript:s%20=%20document.createElement(%22style%22)%3Bs.setAttribute(%22type%22%2C%22text%2Fcss%22)%3Bt%3Ddocument.createTextNode(%22*%20%7Bline-height%3A%201.5!important%3B%20letter-spacing%3A.12em!important%3B%20word-spacing%3A%20.16em%20!important%3B%7D%20p%7Bmargin-bottom%3A%202em!important%3B%20%7D%22)%3Bs.appendChild(t)%3Bh%20%3D%20document.getElementsByTagName(%22head%22)%5B0%5D%3Bh.appendChild(s)%3Bvoid(0)%3B">Espacement du texte</a> créée par Steve Faulkner.

**Objectif utilisateur&nbsp;:**
Permettre aux personnes déficientes visuelles et cognitives d'améliorer le confort de lecture.

**Référence <abbr>WCAG</abbr>&nbsp;:**  
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#text-spacing">1.4.12 Text Spacing</a>


## Assurer un ordre de lecture du contenu compréhensible

**Cible&nbsp;:** tout le monde, et en particulier les personnes déficientes visuelles, cognitives ou avec un trouble de l’attention et en mobilité.  
**Quand&nbsp;:** lors du développement.

**Description&nbsp;:**

Si un sens de lecture spécifique est nécessaire à la bonne compréhension du contenu ou l'utilisation de l'interface, il faut s'assurer que l'ordre d'apparition dans le code <abbr>HTML</abbr> permet également l'accès, pour tout utilisateur, au contenu et à l'interface.

**À vérifier&nbsp;:**

- Veillez à ce que l’ordre d’apparition des éléments dans le code <abbr>HTML</abbr> soit le même que l'ordre de lecture de l'information dans la page, si cet ordre impacte la compréhension du contenu ou la capacité à utiliser l'interface. C'est la solution la plus simple&nbsp;!

- Même lors d’apparition, de disparition de contenu ou de contenu dynamiquement généré, il faut conserver cet ordre de lecture compréhensible et une interface utilisable.

**Objectif utilisateur&nbsp;:**
Permettre de comprendre et utiliser le contenu, notamment pour des utilisateurs d'<abbr>AT</abbr> qui souvent lisent le contenu dans l'ordre d'apparition dans le code.

**Exemple valide&nbsp;:**
Un site de presse présente ses articles en trois colonnes. Dans le code, les colonnes sont placées dans le même ordre qu'affiché à l'écran. Dans ce cas, tous les utilisateurs peuvent lire les articles sans difficultés.

**Exemple non-valide&nbsp;:**      
 Le menu principal d'un site est présent à toute fin du code source (après le pied de page) mais positionné tout en haut de la page via <abbr>CSS</abbr>, il risque de n'être pas perçu par un utilisateur de lecteur d'écran.


**Référence <abbr>WCAG</abbr>&nbsp;:**
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#meaningful-sequence">1.3.2 Meaningful Sequence</a>


## Identifier et conserver la cohérence des regroupements et des différentes régions de la page
  
  **Cible&nbsp;:** tout le monde et en particulier les personnes déficientes visuelles, cognitives ou ayant des troubles de l’attention.
  
  **Description&nbsp;:**
  Fournir des moyens d’identifier et de distinguer visuellement les différentes parties de la page et assurer la cohérence de ces régions ou regroupements dans toutes les pages.
  
  **À vérifier&nbsp;:** 
  - S'assurer que les liens dans le corps du texte sont facilement identifiables visuellement par un autre moyen que la couleur (souligné, gras…) par rapport au reste du texte.
  - S’assurer que les mécanismes de navigation sont toujours situés au même endroit dans un ensemble de page.
  - S’assurer que les composants et les regroupements qui ont la même fonction sont identifiés (visuellement et sémantiquement) de la même façon.
  - S’assurer que les zones de la page sont clairement délimitées (bordures, filets, contraste suffisant…) ou qu’il y a un moyen de distinguer visuellement les groupes (sous-menu, liste déroulante…) ainsi que les différentes régions de la page.
  
  **Objectif utilisateur&nbsp;:**
  Permettre aux utilisateurs d’identifier et localiser les éléments d’interface dans toutes les pages.
  
  **Exemple valide&nbsp;:**  
  ![capture d’écran du site 100% pratique](../../images/groupement.jpg)  
  Ici, l’info bulle (<i lang="en">tooltip</i>) est délimitée par une bordure bien visible et suffisamment contrastée, permettant de bien identifier son contenu.
  
  **Exemple non-valide&nbsp;:**  
  ![capture d’écran du site fnac.com](../../images/groupement2.jpg)  
  Il est très difficile d’associer les thèmes («&nbsp;par région&nbsp;», «&nbsp;par genre&nbsp;»…) et les sous-thèmes en colonnes, d’autant plus que les filets horizontaux sont trop peu contrastés.
  
  **Exemple&nbsp;: Les balises <abbr>HTML5</abbr> et <i lang="en">landmarks</i> <abbr>ARIA</abbr>**
  Pour donner une structure sémantique aux grandes régions d’une page, on peut utiliser les balises de structure <abbr>HTML5</abbr> (`main` pour le contenu principal de la page, `nav` pour la navigation principale, `header` pour l’entête de page, `footer` pour le pied de page, `aside` pour du contenu complémentaire au contenu principal, et d’autres) même si leur support par les technologies d’assistance/navigateurs n’est pas total , il est suffisant. On peut aussi utiliser, pour mettre en place cette structure de page, [les <i lang="en">landmarks</i> <abbr>ARIA</abbr> (<i lang="en">Accessible Rich Internet Applications</i>)](https://www.w3.org/TR/wai-aria-practices/examples/landmarks/index.html) et là, le support est bien meilleur&nbsp;!
  
  Tout sur <a href="../../exemples-de-composants/landmarks-aria/">les <i lang="en">landmarks</i> <abbr>ARIA</abbr> dans nos exemples</a>.
  
  Mettre en place ce type de sémantique permet aux déficients visuels d’identifier et comprendre l’organisation, la structure globale de la page et donc de naviguer plus facilement.
  
  **Référence <abbr>WCAG</abbr>&nbsp;:**  
  - <a lang="en" href="https://www.w3.org/TR/WCAG21/#consistent-navigation">3.2.3 Consistent Navigation</a>
  - <a lang="en" href="https://www.w3.org/TR/WCAG21/#consistent-identification">3.2.4 Consistent Identification</a>




## Définir des zones sensibles de taille suffisante

**Cible&nbsp;:** tout le monde en particulier les personnes souffrant de handicap moteur ou visuel et en mobilité.  
**Quand&nbsp;:** lors de la conception et lors du développement.

**Description&nbsp;:**  
Pour les utilisateurs de périphériques tactiles (smartphones, tablettes...), les zones tactiles doivent avoir une taille suffisante pour permettre une navigation aisée. Par ailleurs celles-ci doivent être également suffisamment espacées les unes des autres.

**À vérifier**
- La taille des zones tactiles doit être de 9mm minimum de largeur et de hauteur.
- L'espacement entre les zones tactiles ne doit pas être inférieur à 2mm.





## Séparer le contenu de l’interactivité et de la présentation

**Cible&nbsp;:** tout le monde, et en particulier les personnes déficientes visuelles, avec des difficultés pour lire ou avec un déficit d’attention.  
**Quand&nbsp;:** lors du développement.

**Description&nbsp;:**

Séparer strictement le contenu (<abbr>HTML</abbr>), l’interactivité (Javascript) et la présentation (<abbr>CSS</abbr>). 

**À vérifier&nbsp;:**

- Ne pas faire de mise en pages en tableaux, ceux-ci étant réservés aux données tabulaires. 
- Ne pas utiliser d'image pour afficher du texte sauf exception (présentation qui ne peut pas être réalisée via <abbr>CSS</abbr>).
- Utiliser des classes <abbr>CSS</abbr> plutôt que manipuler des styles <abbr>CSS</abbr> en ligne dans le code <abbr>HTML</abbr>.
- Ne pas utiliser les pseudo éléments <abbr>CSS</abbr> (::before, ::after…) pour afficher du contenu porteur d’information
- Ne pas câbler des événements Javascript directement dans le code <abbr>HTML</abbr> mais gérer l’interactivité dans un script ou un fichier <abbr>JS</abbr> à part.

**Objectif utilisateur&nbsp;:**

Permettre aux utilisateurs, via leur agent utilisateur ou aide technique (par exemple, leur navigateur), de modifier le rendu visuel de la page (grossissement, couleur, position…). Par exemple, de grossir le texte sans problème de mise en page.

**Objectif technique&nbsp;:**

Améliore globalement la maintenabilité.

**Référence <abbr>WCAG</abbr>&nbsp;:**
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#info-and-relationships">1.3.1 Info and Relationships</a>
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#images-of-text">1.4.5 Images of Text</a>
