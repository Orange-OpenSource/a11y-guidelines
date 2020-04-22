---
title: "Rendre visible le focus en toute circonstance"
---

# Rendre visible le focus en toute circonstance

**Cible&nbsp;:** tout le monde, et en particulier les personnes déficientes visuelles, motrices, cognitives, ayant un déficit d’attention et en mobilité.  
**Quand&nbsp;:** dès la phase de conception et lors du développement.

**Description&nbsp;:**

Ne pas masquer le focus et si nécessaire accentuer sa visibilité sur tous les éléments focusables, par exemple en modifiant la propriété <abbr>CSS</abbr> `outline`.

Veiller à fournir un niveau de contraste suffisant de 3:1 pour que celui-ci soit visible par tous (cf. [mesurer le niveau de contraste des couleurs](methodes-outils-contrastes.html)).

Lorsqu’un effet est visible sur un élément au survol de la souris (`:hover` en <abbr>CSS</abbr> par exemple), cet effet doit être également affiché à la prise du focus (`:focus`).

Il est possible, avec du code Javascript, de n’afficher l’`outline` que lors d’une navigation au clavier (c’est à dire de ne pas afficher l’`outline` lors d’un clic souris, qui active également l’état `:focus`)&nbsp;:

<pre><code class="javascript">
var head = document.head || document.getElementsByTagName(’head’)[0];
var axsStyles = head.appendChild(document.createElement(’style’));
document.addEventListener(’mousedown’, function() {
	axsStyles.innerHTML = ’* {outline:none !important}’;
});
document.addEventListener(’keydown’, function() {
	axsStyles.innerHTML = ’’;
});
</code></pre>

<a href="https://codepen.io/paipai/pen/jwLyzK">Démonstration de la visibilité du focus à la navigation clavier uniquement</a>

**À vérifier&nbsp;:**
Dans beaucoup de <i lang="en">frameworks</i> <span lang="en">front</span> ou dans les <i lang="en">reset</i> <abbr>CSS</abbr>, la propriété `outline` (qui permet de visualiser le focus) est désactivée (`outline: none;`), penser à la redéfinir et vérifier que le focus est visible sur tous les éléments le recevant.

 Par défaut, le focus est visible via la propriété <abbr>CSS</abbr> <code class="css">outline: 1px</code>. Ceci n'est pas suffisant pour être bien visible, nous préconisons au moins `2px` pour la propriété `outline` et un contraste de 3:1 par rapport à la couleur de fond. 
 
 De plus, il faut vérifier la visibilité du focus sur tous les éléments focusables, notamment, car la couleur de fond de l'élément peut être la même que le focus et donc, masquer celui-ci. 

**Objectif utilisateur&nbsp;:**
Permettre la visibilité du focus sur tous les éléments actifs, notamment pour les utilisateurs de clavier (déficients visuels, moteurs ou ceux ayant des déficiences d’attention et de mémorisation ou en mobilité).

**Exemples valides&nbsp;:**  
Dans les captures d’écran suivantes, le focus est positionné sur le lien «&nbsp;209 SMS/mois&nbsp;».  
La première capture présente le comportement par défaut (focus représenté par des pointillés).
Dans la seconde capture, les pointillés ont été supprimés, mais un encadré permet d’indiquer de manière explicite l’emplacement du focus.  
![capture d’écran présentant l’affichage du focus par défaut](images/focus.png)
![capture d’écran présentant un comportement personnalisé pour l’affichage du focus](images/focus2.png)

**Référence <abbr>WCAG</abbr>&nbsp;:**  
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#focus-visible">2.4.7 Focus Visible</a>
