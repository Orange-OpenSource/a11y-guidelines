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
Cela permet de garantir que n'importe quels utilisateurs, qu'ils utilisent une aide technique ou non, soient capables de s'appuyer sur les nom accessibles pour comprendre la fonction du composant afin d'interargir avec lui.
Par exemple, les utilisateurs de reconnaissance vocale pourront naviguer en prononçant les noms accessibles visibles sur les boutons.

Il n'est pas obligé que le texte visible et le nom accessible soit identique, mais le texte visible doit être présent dans le nom accesible, de préférence en premier.

### Exemple concret

#### Nom accessible

Prenons l'exemple d'un formulaire de contact HTLM. Un utilisateur peut utiliser un logiciel de reconnaissance vocale pour remplir le formulaire et l'envoyer.

![bouton avec le texte envoyer](../images/tester-wcag-253/button_send.png)

<pre><code class="html">
&lt;button&gt;
    &lt;img src="envoyer.png" alt="soumettre"&gt;
&lt;/button&gt;
</code></pre>

Dans l'exemple ci-dessus, le bouton de soumission ne fonctionnera pas correctement avec une technologie d'assistance.
Le bouton contient une image avec le texte "Envoyer", mais l'alternative textuelle de l'image est "Soumettre", son nom accessible est donc "Soumettre".

Les technologies d'assistance identifient les éléments grâce à leurs noms accessibles.
C'est pour cette raison que les utilisateurs de reconnaissance vocale ne pourront pas utiliser le bouton, puisque lors qu'ils prononceront "Envoyer" rien ne se passera vu que c'est le terme "Soumettre" qui est le nom accessible du composant d'interface.

Pour résoudre le problème, il faut que l'alternative textuelle soit la même que le texte de l'image, donc "Envoyer".

<pre><code class="html">
&lt;button&gt;
    &lt;img src="envoyer.png" alt="envoyer"&gt;
&lt;/button&gt;
</code></pre>

#### Masquage accessible

Il faut faire attention lorsqu'on utilise du <a href="/fr/web/exemples-de-composants/masquage-accessible/">masquage accessible</a>. Celui-ci ne doit pas être placé au milieu d'un texte visuel.

Sinon il sera impossible de faire une corrélation entre le nom accessible et le texte visuel.

Exemple d'erreur : 
<pre><code class="html">
&lt;a href="www.orange.com" target="_blank"&gt; Ouvrir &lt;span class="sr-only"&gt;dans une nouvelle fenêtre &lt;/span&gt; le site d'orange &lt;/a&gt;
</code></pre>

Si on prononce "Ouvrir le site d'orange", le logiciel de reconnaissance vocale ne comprendra pas, il attendra qu'on dise "Ouvrir dans une nouvelle fenêtre le site d'orange" puisque c'est le nom accessible.

## Comment le tester

### Lecteur d'écran

Le lecteur d'écran va vocaliser les éléments sur lesquels vous placez votre focus.
Celle-ci va exprimer les caractéristiques de l'élément : sa fonction (lien, bouton, texte ...), son statut et son nom accessible. Si le nom accessible que vous entendez ne correspond pas à ce qui est textuellement visible, alors le critère est considéré comme non-conforme.

Vous pouvez utiliser la visionneuse de paroles du lecteur d'écran afin de retranscrire de manière textuelle les caractéristique d'un élément. Il est donc possible de comparer le nom accessible lu par le lecteur d'écran avec le texte affiché sur le composant. 

![Exemple de visionneuse de parole](../images/tester-wcag-253/nvda_visionneuse.png)

### Inspecteur de commande

Le moyen de vérifier le critère avec l'inspecteur de commande dépend du navigateur utilisé.

#### Avec Firefox
<ol>
  <li>Accédez à l'inspecteur de commande (<kbd>Ctrl+ Maj. + i</kbd>)</li>
  <li>Sélectionnez l'onglet accessibilité</li>
  <li>Inspectez un élément</li>
  <li>Regardez la partie propriétés, si l'attribut <span lang="en">name</span> contient au moins le texte qui est affiché le critère est conforme</li> 
</ol>

![Panneaux des outils de développement de Firefox avec l'onglet Accessibilité ouvert](../images/tester-wcag-253/FF_name.png)

#### Avec Chrome ou bien Edge Chronium

<ol>
  <li>Accédez à l'inspecteur de commande (<kbd>Ctrl+ Maj. + i</kbd>)</li>
  <li>Sélectionnez l'onglet Éléments</li>
  <li>Choissisez l'élément que vous souhaitez inspecter</li>
  <li>
    Cliquez sur l'onglet <span lang="en">Accessibility</span>, cette onglet peut être caché derrière le bouton <span lang="en">"More tab"</span>
    <img src="../images/tester-wcag-253/more_tab_img.png" alt="">
  </li>
  <li>Regardez si l'attribut <span lang="en">name</span> contient au moins le texte qui est affiché</li>
</ol>



![Panneaux des outils de développement de Chrome avec le Accessibility tree ouvert](../images/tester-wcag-253/Chrome_name.png)
