---
title: "Navigation clavier"
---

# Navigation clavier

<p class="lead">S’assurer que l’utilisateur puisse naviguer uniquement à l’aide du clavier</p>



## Permettre d’utiliser les principales fonctionnalités de l’application au clavier

**Cible&nbsp;:** tout le monde, et en particulier les personnes déficientes visuelles, cognitives, motrices et en mobilité.  
**Quand&nbsp;:** dès la phase de conception et lors du développement.

**Description&nbsp;:**
Mettre en place des gestionnaires d’événements qui ne s’appuient pas uniquement sur des événements souris, permettent donc d'être pilotable au clavier et ceci sans limite de temps. 

**À vérifier&nbsp;:**
- Toutes les actions importantes effectuées à la souris peuvent aussi l’être avec le clavier, quitte à proposer une alternative spécifique pour les interactions complexes (<i lang="en">drag’n’drop</i>, gestes à plusieurs doigts sur mobile …) tout en évitant d'innombrables frappes.

- Utiliser au maximum les composants <abbr>HTML</abbr> interactifs de base (champs, liens, boutons), ceux-ci étant nativement accessibles au clavier. À défaut, veiller à ce que les composants personnalisés soient opérables au clavier de manière classique.

Voir [la façon de naviguer au clavier](/fr/web/outils/methodes-et-outils-de-test/navigation-clavier/) dans un navigateur web.

**Objectif utilisateur&nbsp;:**
 Permettre aux utilisateurs qui ne peuvent pas utiliser la souris (non ou malvoyants, déficients moteurs, cognitives, web mobile, en mobilité…) d’accéder aux fonctionnalités principales de l’application au clavier.

**Exemple valide&nbsp;:**      
- Un sous-menu qui se déroule au survol doit aussi se dérouler quand l’item de menu parent reçoit le focus clavier.
- Dans un webmail, un clic droit permet d’accéder à un menu pour vider la corbeille, un bouton «&nbsp;vider la corbeille&nbsp;» est également présent dans l’interface quand la corbeille est en cours de consultation. 
 
**Exemple non-valide&nbsp;:**      
Une fonctionnalité réalisable uniquement à l’aide du <i lang="en">drag’n’drop</i> et sans équivalent au clavier.

**Référence <abbr>WCAG</abbr>&nbsp;:**  
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#keyboard">2.1.1 Keyboard</a>
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#name-role-value">4.1.2 Name, Role, Value</a>




## Rendre le parcours du focus séquentiel et logique sans piège clavier

**Cible&nbsp;:** tout le monde, et en particulier les personnes déficientes visuelles, cognitives ou avec un trouble de l’attention 1et en mobilité.  
**Quand&nbsp;:** lors du développement.

**Description&nbsp;:**

Les éléments (liens, boutons, éléments de formulaire) doivent recevoir le focus dans un ordre séquentiel et logique (de haut en bas et de gauche à droite) lorsque l'ordre du focus est nécessaire pour la compréhension ou l'opérabilité clavier et cela même pour du contenu généré dynamiquement (modification du DOM, Ajax,…). Bien-sûr, le focus ne doit ni rester piégé, ni bloqué. 

Pour le contenu, également, si un sens de lecture est nécessaire à la bonne compréhension, il faut s'assurer que celui-ci est cohérent pour tout utilisateur.

Exemple, les puces numérotées indiquent l'ordre de déplacement du focus dans cette page :  
![Capture d'écran indiquant l'ordre de déplacement du focus dans une page](../../images/focus/focus-order.png)

**À vérifier&nbsp;:**
- Pour valider cette exigence, la position du focus doit être visible à tout moment (propriété `outline` et `:focus` en <abbr>CSS</abbr>), voir exigence 20, ci-dessous.
- Veillez à ce que l’ordre d’apparition des éléments dans le code <abbr>HTML</abbr>soit le même que l'ordre de déplacement du focus ou de lecture de l'information dans la page si cet ordre impacte la compréhension du contenu ou capacité d'utiliser l'interface. Un élément présent à la fin du code source mais positionné tout en haut de la page via <abbr>CSS</abbr> sera le dernier à recevoir le focus. C'est la solution la plus simple&nbsp;!
- Pour la maintenabilité, éviter l’utilisation de l’attribut `tabindex` avec des valeurs supérieures à 0.
- Même lors d’apparition ou de disparition de contenu, il faut conserver ce parcours logique et séquentiel.
 Ceci est vrai pour du contenu dynamiquement généré ou pour des <span lang="en"><abbr>SPA</abbr> (single page application)</span> ou des applications web sur une seule page. Pour plus de détails, voir [Gérer le focus pour du contenu dynamique](../../exemples-de-composants/gestion-dynamique-du-focus/)

**Objectif utilisateur&nbsp;:**
Permettre la navigation logique, sans piège au clavier dans les pages de l’application. Nécessaire pour les utilisateurs ne naviguant qu’au clavier (non ou malvoyants, déficients moteurs, déficients cognitifs, en mobilité).

**Exemple valide&nbsp;:**      
Dans une page dédiée à la recherche dans le site, on passe, à la navigation clavier, sur le formulaire de recherche avant d'arriver à la liste des résultats.      

**Exemple non-valide&nbsp;:**      
Une page contenant un lecteur vidéo dont le focus peut entrer à l’intérieur du lecteur, mais ne peut pas en sortir (piège clavier).        

**Référence <abbr>WCAG</abbr>&nbsp;:**
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#meaningful-sequence">1.3.2 Meaningful Sequence</a>
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#no-keyboard-trap">2.1.2 No Keyboard Trap</a>
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#focus-order">2.4.3 Focus Order</a>




## Rendre visible le focus en toute circonstance

**Cible&nbsp;:** tout le monde, et en particulier les personnes déficientes visuelles, motrices, cognitives, ayant un déficit d’attention et en mobilité.  
**Quand&nbsp;:** dès la phase de conception et lors du développement.

**Description&nbsp;:**

Ne pas masquer le focus et si nécessaire accentuer sa visibilité sur tous les éléments focusables, par exemple en modifiant la propriété <abbr>CSS</abbr> `outline`.

Veiller à fournir un niveau de contraste suffisant de 3:1 pour que celui-ci soit visible par tous (cf. [mesurer le niveau de contraste des couleurs](/fr/web/outils/methodes-et-outils-de-test/mesurer-contraste-couleurs)).

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
