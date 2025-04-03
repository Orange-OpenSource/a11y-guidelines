---
title: "Les bonnes pratiques pour les liens d'évitement"
abstract: "Les liens d'évitement, qu'est-ce et comment bien les mettre en œuvre"
titleBeforeTag: true
date: "2023-06-22"
updateDate: "2025-02-28"
tags:
  - web
  - beginner
---

## Qu'est-ce qu'un lien d'évitement&nbsp;?

### Qu'est-ce&nbsp;?

Les liens d'évitement sont des raccourcis permettant d'accéder directement à une zone de contenu ou d'éviter des régions de la page afin de naviguer plus rapidement.

On peut distinguer trois types de liens&nbsp;:
1. les liens d'accès rapide : rassemblés en haut de page et permettant d'aller aux principales régions de la page&nbsp;: «&nbsp;Aller au menu&nbsp;», «&nbsp;Aller au contenu&nbsp;», «&nbsp;Aller à la recherche&nbsp;», par exemple
2. les liens d'évitement : positionnés avant la région qu'ils permettent d'éviter : «&nbsp;Passer la section&nbsp;», «&nbsp;Passer le chapitre&nbsp;»
3. les liens de navigation interne à une page : «&nbsp;Retour en haut de page&nbsp;», par exemple

Ces liens d'évitement permettent donc à l'utilisateur d'éviter des parties de pages afin de faciliter la navigation, d'accéder au contenu souhaité plus aisément et se focaliser sur le contenu important, que l'on navigue au clavier, que l'on ait du mal à se repérer dans une page longue ou que scroller soit difficile.

Les liens d'évitement sont souvent les premiers liens présents dans la page car ils permettent aux utilisateurs de naviguer plus simplement. Pourtant, ils peuvent ne pas être les premiers éléments focusables, quand, par exemple, on propose à l'utilisateur un bandeau de gestion des cookies. En effet, l'utilisateur doit réaliser une action sur le bandeau de cookies avant de naviguer sur le site, et cela, quelle que soit la position du bandeau dans la page.

### Pour qui&nbsp;?

Les liens d'évitement sont précieux pour de multiples utilisateurs&nbsp;:
- Les utilisateurs de lecteur d'écran ou ne pouvant utiliser la souris, qui se déplacent donc au clavier uniquement
- Les utilisateurs qui peinent à naviguer dans une page longue : les déficients moteurs (fatigabilité ou limitations motrices) ou les personnes qui naviguent sur leur smartphone (on évite le swipe, le balayage)
- Les malvoyants, qui utilisent ou pas une loupe d'écran, et ayant du mal à se faire une représentation globale de la topologie de la page

On va donc, grâce aux liens d'évitement, limiter l'usage des touches de navigation clavier et plus généralement économiser des gestes lors de la navigation intra-page.

## Utilisation&nbsp;

Il s'agit généralement d'un lien pointant vers un élément HTML possédant un attribut <code>id</code>.

```html
<body>
  <a class="evitement" href="#contenu">Aller au contenu</a>
  […]
  <main id="contenu">
     […]
  </main>
  […]
</body>
```

## Quelles sont les bonnes pratiques&nbsp;?

- Il est possible d'intégrer un lien d'évitement de contenu au site sous forme d'image (type «&nbsp;flèche&nbsp;» par exemple avec un attribut <code>title</code>) apparaissant après avoir fait défiler la page vers le bas. Le lien d'évitement permettra de faire un retour vers le haut de page directement. Ce lien d'évitement ne doit pas empêcher la lecture ou la compréhension de l'information, il doit être le dernier élément ciblable au clavier.
- Le lien d'évitement doit être atteignable au clavier quel que soit le sens de navigation (<kbd>Tab</kbd> ou <kbd>Shift</kbd> + <kbd>Tab</kbd>).
- Placer un lien dévitement sur un <code>id</code> fonctionne, mais cibler le lien d'évitement sur des éléments comme <code>aside</code>, <code>footer</code> ou <code>main</code> permet de rendre le lien d'évitement de contenu moins sensible aux éventuelles modifications. (Changement d'<code>id</code>, ou simplement non repris dans le code d'une nouvelle page par exemple)
- les liens d'évitements ou d'accès rapide doivent être visuellement situés au même endroit dans la page et dans le même ordre relatif dans le code source sur l'ensemble des pages du site.

### Quand doit-on mettre en place des liens d'évitement&nbsp;?

La première question à se poser est : l'utilisateur a-t-il besoin de liens d'évitement sur mon site ?

Les principales raisons de la mise en place de liens d'évitement:
- la page est longue
- la navigation contient beaucoup de liens
- le contenu contient beaucoup de liens (plusieurs menus de navigation, pieds de page faisant office de plan de site…)
- la page est découpée en de nombreuses parties distinctes (portail, tableau de bord…)
- il n'existe pas de moyen autre pour naviguer au sein de la page (titre de rubrique, structure sémantique HTML5…)

**Note** : attention pour qu'un lien d'évitement soit fonctionnel, il ne doit pas se contenter de faire défiler la page à l'endroit indiqué (contenu principal par exemple). Il doit permettre à l'utilisateur de «&nbsp;sauter&nbsp;» une partie de la page.
Si un utilisateur active un lien «&nbsp;Aller au contenu&nbsp;» à l'aide du clavier, au prochain <kbd>Tab</kbd> de l'utilisateur le focus doit se déplacer dans le contenu principal et non sur le lien d'évitement suivant.
Ce focus peut être fait en plaçant une ancre vers le prochain <code>id</code> à cibler par exemple.

Ainsi, lorsque nous utilisons un lien d'ancrage, le focus système se déplace avec lui. Cependant le curseur du lecteur d'écran se déplacera pour être défini sur l'élément ancré que s'il est focusable. Lorsque l'élément ancré n'est pas focusable, le lien de saut est toujours considéré comme «&nbsp;l'élément actif&nbsp;».

Pour régler cette problématique, on peut mettre une ancre sur l'élément, et utiliser un <code>tabindex="-1"</code> pour le rendre focusable via JavaScript (il restera exclu des éléments focusables via la touche <kbd>Tab</kbd>).

**Note** : les liens d'accès rapide sont également importants dans le cas des applications métiers, dont le contenu est généralement très dense et complexe.

### Utiliser une solution hybride&nbsp;?

On a vu que les liens d'accès rapide peuvent être visibles ou masqués par défaut pour être affichés uniquement lors de la navigation clavier. Cette dernière option répond souvent à des problématiques esthétiques. Néanmoins, elle supprime le bénéfice que pourraient apporter ces liens aux autres utilisateurs qui n'utilisent pas le clavier (utilisateurs de loupe logicielle par exemple). Une solution, qui permettrait de concilier les avantages des deux techniques, serait de positionner un bouton discret mais <a href="/fr/glossaire/#:~:text=Glossaire-,AFFORDANCE,-Qualit%C3%A9%20ou%20propri%C3%A9t%C3%A9" target="_blank" title="Affordant : voir la définition dans le glossaire (nouvelle fenêtre)">affordant<span class="visually-hidden">&nbsp;(nouvelle fenêtre)</span><svg width="16" height="16" class="ms-1" viewBox="0 0 1000 1000" aria-hidden="true" focusable="false"><path class="cls-1" d="M374.908,308.958L600,309V109L921.719,430.9a74.988,74.988,0,0,1,0,106.044L600,859V659H325A150.027,150.027,0,0,0,175,809v81C98.941,830.528,50,737.929,50,633.891,50,454.436,195.466,308.958,374.908,308.958Z"></path></svg></a> au clic, en haut de page, permettant de déclencher à la demande l'ouverture et la fermeture du panneau des liens d'accès rapides. On pourrait également penser à une barre horizontale visible tout en haut à l'ouverture de la page et qui disparaît lors du scroll vers le bas de page.

Quelle que soit la solution, il faut que les liens d'évitement soient visibles (dans la mesure du possible) et utilisables par tous !

## Exemples d'usage

&nbsp;Exemple 1&nbsp;:
```html
<ul id="evitement">
   <li>
      <a href="#contenu">Aller au contenu</a>
   </li>
   <li>
      <a href="#menu">Aller au menu</a>
   </li>
   <li>
      <a href="#recherche">Aller à la recherche</a>
   </li>
</ul>
```

&nbsp;Exemple 2&nbsp;:
```html
<p id="skiplink">
   <a href="#navigation">Sauter à la navigation</a>
</p>
```

## Exemples d'usage particulier

Si les liens d'évitement ne sont pas rendus visibles à l'écran par défaut (pour des questions de design par exemple). Il est important que ceux-ci restent interprétés par les outils d'assistance.
La solution consiste à utiliser une classe CSS de masquage accessible. Les frameworks type **Bootstrap** et **Boosted** embarquent directement ce type de classe (<code lang="en">visually-hidden</code> et <code lang="en">visually-hidden-focusable</code>). Ainsi même s'il ne sera pas visible à l'écran, un élément possédant la classe <code lang="en">visually-hidden</code> sera correctement vocalisé par un lecteur d'écran.

```css
a.evitement {
   position: absolute;
   left: -99999px;
}
a.evitement:focus {
   position: static;
}
```

## À retenir
- Sur une page, on peut avoir trois types de liens d'évitement (liens d'accès rapide, liens d'évitement et liens de navigation interne).
- Les liens d'évitement positionnent l'utilisateur sur la zone demandée et ne se contentent pas de faire défiler la page (gestion du focus).
- Les liens d'accès rapides ciblent plutôt les éléments fixes des gabarits de pages (<code>footer</code>, <code>main</code>, <code>banner</code>, etc.). Ils sont plus robustes.
- Les liens d'évitement sont particulièrement utiles et utilisés dans des applications métiers ou back-office.

Pour toutes remarques, suggestions, n'hésitez pas à consulter ou créer une issue sur notre <a href="https://github.com/Orange-OpenSource/a11y-guidelines/issues">compte github</a>.
