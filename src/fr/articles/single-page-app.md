---
title: "Single Page Applications (SPA)"
abstract: "Recommandations pour les Single Page Applications"
date: "2021-06-16"
tags:
  - web
---

<h1>Recommandations pour les <span lang="en">Single Page Applications</span></h1>
   
Une [application web monopage](https://fr.wikipedia.org/wiki/Application_web_monopage) (en anglais single-page application ou <abbr lang="en" title="single-page application">SPA</abbr>) est une application web dont la particularité est de n'avoir qu'une seule page. Lors de la navigation celle-ci n'est jamais rechargée, seuls des portions de la page sont dynamiquement mis à jour à l'aide de code Javascript. 

Les <abbr lang="en" title="single-page application">SPA</abbr> rencontrent un engouement depuis l'avènement des frameworks Javascript : `Angular`, `React` ou `Vue` pour ne citer que les plus populaires. Dans cet article, l'idée n'est pas de prendre partie pour ou contre les <abbr lang="en" title="single-page application">SPA</abbr>. Il faut reconnaître qu'utilisé correctement, ce type de framework peut résoudre des problèmes notamment lorsqu'il est utilisé dans la conception de grosses applications web. Nous allons nous concentrer ici sur les difficultés que cela peut apporter en terme d'accessibilité.

**Avertissement :** les <abbr lang="en" title="single-page application">SPA</abbr> ne doivent en aucun cas devenir la norme. Si votre besoin peut être satisfait à l'aide d'un site standard inutile de succomber aux effets de mode. Un site Web standard offre nativement une prise en charge de l'accessiblité et vous épargne la prise en main d'un framework complexe, la monté en compétence, la maintenance ou les problèmes de compatibilité avec les anciens navigateurs.

## Mettre à jour le titre des pages
La navigation à travers une <abbr lang="en" title="single-page application">SPA</abbr> n'entraîne pas de rechargement de page par le navigateur. Qui dit pas de rechargement, dit pas de modification du titre de la page (balise `title`). Or, il est important que [chaque page ait un titre unique](https://a11y-guidelines.orange.com/fr/web/developper/contenu-textuel/#donner-un-titre-aux-pages).

Il faudra donc veiller à mettre à jour le titre de la page via Javascript (`document.title`). Se référer à la documentation du framework utilisé pour savoir si une implémentation de ce mécanisme est proposée ou s'il doit être créé de toute pièce.

## Prévenir l'utilisateur des changements de page

Les lecteurs d'écran utilisés par les personnes malvoyantes informent l'utilisateur automatiquement dès qu'une nouvelle page est chargée par le navigateur. Dans le cadre d'une <abbr lang="en" title="single-page application">SPA</abbr>, les changements de page n'entraînent pas de rechargement par le navigateur. Le lecteur d'écran n'a donc aucun moyen de prévenir l'utilisateur.

Une solution acceptable consiste à déplacer le focus sur le premier titre `<h1>` de la page courante. Ceci entraînerra sa lecture par le lecteur d'écran, ainsi l'utilisateur sera prévenu qu'une nouvelle page est affichée.
À noter que par défaut une balise `<h1>` n'est pas focusable. Pour L'autoriser à recevoir le focus via Javascript, il suffit de lui ajouter un attribut `tabindex="-1"`.

## Prévenir l'utilisateur des mises à jour à l'intérieur de la page

Si certaines informations sont mises à jour dynamiquement dans la page (message de confirmation, chargement en cours, affichage d'erreur…). Il est important de faire en sorte que les lecteurs d'écran annoncent ces modifications. Plusieurs méthodes sont disponibles selon les cas :
- Déplacer le focus sur un élément qui vient d'être mis à jour.
- Utiliser de l'ARIA comme indiqué dans les articles suivants : [Utiliser ARIA les messages d'état, de statut ou contextuel](https://a11y-guidelines.orange.com/fr/articles/messages-de-statut-aria/) et [L'attribut aria-live et le role alert](https://a11y-guidelines.orange.com/fr/articles/aria-live-alert/#main-content).

## Déplacer le focus

Sur un site web classique, lorsqu'un utilisateur clique sur un lien et qu'une nouvelle page s'affiche, le focus est automatiquement repositionné en haut de page (sur le `body`). Ainsi pour les utilisateurs qui naviguent à l'aide du clavier, il suffit d'utiliser la touche `TAB` pour se déplacer dans la page.

Dans une <abbr lang="en" title="single-page application">SPA</abbr>, si un utilisateur clique sur un bouton qui entraîne une mise jour du contenu, le focus n'est pas déplacé (il reste sur le bouton). Plus important encore, si le changement de page a fait disparaître l'élément sur lequel était positionné le focus, l'utilisateur ne sait plus où il est dans la page. Cela peut également entraîner des problèmes de vocalisation pour les personnes qui naviguent à l'aide d'un lecteur d'écran.

Il est donc important de veiller à déplacer le focus via Javascript lorsque cela est nécessaire. De même si une boite de dialogue modale est affichée à l'écran, le focus doit être positionné dans la boite lors de son apparition puis replacé sur l'élément d'origine (un bouton par exemple) lors de sa disparition.

## Utiliser la sémantique HTML 5

Les <abbr lang="en" title="single-page application">SPA</abbr> sont souvent utilisées dans le cadre d'applications Web. L'utilisateur doit composer parfois avec une interface qui s'apparente plus a une application native qu'à celle d'un site Web. Il est important de veiller à identifier correctement les différentes zones : navigation, contenu, zone de recherche…

Si votre application possèdent des zones spécifiques, il est recommandé de leur attribuer un `label` afin qu'elles soient rapidement identifiables. Par exemple à l'aide d'une balise `<region>` et d'un attribut `aria-label` ou `aria-labelledby`.

<pre><code class="html">
&lt;div role="region" aria-label="moniteur d'activité"&gt;
  &lt;!-- contenu de la région --&gt;
&lt;/div&gt;
</code></pre>

<pre><code class="html">
&lt;div role="region" aria-label="simulateur des coûts"&gt;
  &lt;!-- contenu de la région --&gt;
&lt;/div&gt;
</code></pre>

Consultez l'article : [les régions ou landmarks ARIA](https://a11y-guidelines.orange.com/fr/web/exemples-de-composants/landmarks-aria/#main-content), pour obtenir plus d'information sur l'utilisation de ces balises.

## Gérer l'historique du navigateur

Rien de plus agaçant que de sortir d'une application alors qu'on souhaitait simplement revenir à la page précédente en utilisant le bouton `précédent` du navigateur. C'est pourtant ce qui se produit parfois dans les <abbr lang="en" title="single-page application">SPA</abbr>.

La solution consiste à manipuler l'historique du navigateur en Javascript à l'aide de l'<a href="https://developer.mozilla.org/fr/docs/Web/API/History_API" lang="en">History API</a>. Celle-ci permet de mémoriser les différents états de l'application et d'y revenir à l'aide des boutons `précédent` et `suivant` du navigateur.

<h2 id="resume">Résumé des bonnes pratiques</h2>

- Mettre à jour le titre des pages (`document.title`)
- Prévenir l'utilisateur des changements de page 
- Prévenir l'utilisateur des mises à jour à l'intérieur de la page (ARIA)
- Déplacer le focus
- Utiliser la sémantique HTML 5
- Gérer l'historique du navigateur (<span lang="en">History API</span>)

## Liens utiles 
- <a href="https://dev.to/s_aitchison/page-titles-and-a11y-in-single-page-applications-esp-react-vue-4ok8" hreflang="en" lang="en">Page Titles and A11y in Single Page Applications (Suzanne Aitchison)</a>
- <a href="https://www.gatsbyjs.com/blog/2019-07-11-user-testing-accessible-client-routing/" hreflang="en" lang="en">What we learned from user testing of accessible client-side routing techniques with Fable Tech Labs (Marcy Sutton)</a>
- <a href="https://www.paris-web.fr/2020/conferences/trucs-et-astuces-pour-construire-une-single-page-app-accessible.php">Mini-conf Maël Brunet, Paris Web 2020</a>