---
title: "Comment tester le WCAG 2.5.3 ?"
abstract: "Les bonnes pratiques pour tester le WCAG 2.5.3"
titleBeforeTag: true
date: "2021-11-22"
tags:
  - web
  - intermediate
---

## Que signifie le WCAG 2.5.3

### Explication générale

Le but de ce critère est de s'assurer que si un bouton, un lien ou un autre élément d'interface contient du texte visible à l'écran, <a href="/fr/articles/le-nom-accessible-en-html/">le nom accessible</a> doit contenir au moins le même texte que celui affiché.
Cela permet de garantir que n'importe quels utilisateurs, qu'ils utilisent une aide technique ou non, soient capables de s'appuyer sur les noms accessibles pour comprendre la fonction du composant afin d'interargir avec lui.
Par exemple, les utilisateurs de reconnaissance vocale pourront naviguer en prononçant les noms accessibles visibles sur les boutons.

Il n'est pas demandé que le texte visible et le nom accessible soit identique, mais le texte visible doit être présent dans le nom accesible, de préférence en premier.

### Exemple concret

#### Nom accessible

Prenons l'exemple d'un formulaire de contact HTLM. Un utilisateur peut utiliser un logiciel de reconnaissance vocale pour remplir le formulaire et l'envoyer.

![bouton avec le texte envoyer](../images/tester-wcag-253/button_send.png)

<pre><code class="html">
&lt;button&gt;
    &lt;img src="envoyer.png" alt="Soumettre"&gt;
&lt;/button&gt;
</code></pre>

Dans l'exemple ci-dessus, le bouton de soumission ne fonctionnera pas correctement avec certaines technologie d'assistance.
Le bouton contient une image avec le texte "Envoyer", mais l'alternative textuelle de l'image est "Soumettre", son nom accessible est donc "Soumettre".

Les technologies d'assistance identifient les éléments grâce à leurs noms accessibles.
C'est pour cette raison que les utilisateurs de reconnaissance vocale ne pourront pas utiliser le bouton, puisque lors qu'ils prononceront "Envoyer" rien ne se passera? vu que c'est le terme "Soumettre" qui est le nom accessible du composant d'interface.

Pour résoudre le problème, il faut que l'alternative textuelle soit la même que le texte de l'image, donc "Envoyer".

<pre><code class="html">
&lt;button&gt;
    &lt;img src="envoyer.png" alt="Envoyer"&gt;
&lt;/button&gt;
</code></pre>

#### Masquage accessible

Il faut faire attention lorsqu'on utilise du <a href="/fr/web/exemples-de-composants/masquage-accessible/">masquage accessible</a>. Celui-ci ne doit pas être placé au milieu d'un intitulé affiché visuellement.

Sinon il sera impossible de faire une corrélation entre le nom accessible et le texte affiché.

Exemple d'erreur : 
<pre><code class="html">
&lt;a href="www.orange.com" target="_blank"&gt; Ouvrir &lt;span class="sr-only"&gt;dans une nouvelle fenêtre &lt;/span&gt; le site d'orange &lt;/a&gt;
</code></pre>

Si on prononce "Ouvrir le site d'orange", le logiciel de reconnaissance vocale ne trouvera pas cet élément. En revanche, si l'on prononce "Ouvrir dans une nouvelle fenêtre le site d'orange" le lien sera activé, puisque c'est son nom accessible.

## Comment le tester

### Lecteur d'écran

Le lecteur d'écran vocalise les propriétés éléments sur lesquels vous placez votre focus.
En particulier, les caractéristiques suivantes de l'élément : sa fonction (lien, bouton, texte ...), son statut et son nom accessible. Si le nom accessible que vous entendez ne correspond pas à ce qui est textuellement visible, alors le critère est considéré comme non-conforme.

Vous pouvez utiliser la visionneuse de paroles du lecteur d'écran afin de retranscrire de manière textuelle les caractéristiques d'un élément. Il est donc possible de comparer le nom accessible sous forme textuelle lu par le lecteur d'écran avec le texte affiché sur le composant. 

![Exemple de visionneuse de parole](../images/tester-wcag-253/nvda_visionneuse.png)

### Inspecteur de commande

Le moyen de vérifier le critère avec l'inspecteur de commande dépend du navigateur utilisé.

Avec Firefox, il faut accéder à l'inspecteur de commande (<kbd>Ctrl+ Maj. + i</kbd>), puis sélectionner l'onglet accessibilité, puis inspecter un élément.
Les différentes propriétés de l’élément sont affichées dans la console comme son rôle, les différentes actions de celui-ci et en premier la caractéristique « name » qui est le nom accessible de l’objet. Si le nom accessible, qui se trouve dans « name », contient au moins le même texte, de préférence en premier, que celui qui est affiché alors le critère est valide.

![Panneaux des outils de développement de Firefox avec l'onglet Accessibilité ouvert](../images/tester-wcag-253/FF_name.png)

Avec Chrome ou bien Edge Chronium, il faut ouvrir l'inspecteur de commande (<kbd>Ctrl+ Maj. + i</kbd>), puis acceder à l'onglet "Accessibility" qui se trouve en dessous du code HTML de l'inspecteur.

Celui-ci nous expose les propriétés de l’élément. En premier lieu, la localisation de l'élément dans l’arborescence d’accessibilité puis les noms qui lui sont associés en sachant que le dernier nom est celui qui est affiché dans le site. 
En dessous, nous trouvons les attributs ARIA, si celui-ci en contient, puis les propriétés calculées où, le premier paramètre, le nom accessible de l’objet en question avec les attributs aria, la source, le contenu, le titre et d’autres paramètres. 
C’est ici que l’on aperçoit le nom accessible qui est reconnu par un lecteur d’écran. Si le nom accessible qui se trouve dans « Name » ne contient pas au moins le même texte et de préférence en premier, que celui qui est affiché alors le critère est invalide.

![Panneaux des outils de développement de Chrome avec le Accessibility tree ouvert](../images/tester-wcag-253/Chrome_name.png)
