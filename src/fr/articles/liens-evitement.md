---
title: "Les bonnes pratiques pour les liens d’évitements"
abstract: "Les liens d'évitement, qu'est-ce et comment bien les mettre en œuvre"
titleBeforeTag: true
date: "2022-07-12"
tags:
  - web
  - beginner
---

## Qu’est-ce qu’un lien d’évitement&nbsp;?

### Qu'est ce&nbsp;?

Les liens d’évitement sont des raccourcis permettant d’accéder directement à une zone de contenu ou d’éviter des régions de la page, afin de naviguer plus rapidement.

On peut distinguer trois types de liens&nbsp;:
1. les liens d'accès rapide : rassemblés en haut de page et permettant d’aller aux principales régions de la page&nbsp;: «&nbsp;Aller au menu&nbsp;», «&nbsp;Aller au contenu&nbsp;», «&nbsp;Aller à la recherche&nbsp;», par exemple
2. les liens d’évitement : positionnés avant la région qu’ils permettent d'éviter : «&nbsp;Passer la section&nbsp;», «&nbsp;Passer le chapitre&nbsp;» 
3. les liens de navigation interne à une page : «&nbsp;Retour en haut de page&nbsp;», par exemple

Ces liens d’évitement permettent donc à l’utilisateur d’éviter des parties de pages afin de faciliter la navigation, d’accéder au contenu souhaité plus aisément et se focaliser sur le contenu important, que l’on navigue au clavier, que l’on ait du mal à se repérer dans une page longue ou que scroller soit difficile.

### Pour qui&nbsp;?

Les liens d’évitement sont précieux pour de multiples utilisateurs&nbsp;:
- Les utilisateurs de lecteur d’écran ou ne pouvant utiliser la souris, qui se déplacent donc au clavier uniquement
- Les utilisateurs qui peinent à naviguer dans une page longue : les déficients moteurs (fatigabilité ou limitations motrices) ou les personnes qui naviguent sur leur smartphone (on évite le swipe, le balayage) 
- Les malvoyants, qui utilisent ou pas une loupe d’écran, et ayant du mal à se faire une représentation globale de la topologie de la page

On va donc, grâce aux liens d’évitement, limiter l’usage des touches de navigation clavier et plus généralement économiser des gestes lors de la navigation intra-page.

## Utilisation&nbsp;

Il s’agit généralement d'un lien pointant vers un élément HTML possédant un attribut id.

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

1. Il est possible d’intégrer un lien d’évitement de contenu au site sous forme d’image (type « flèche » par exemple avec un attribut title) apparaissant après avoir fait défiler la page vers le bas. Le lien d’évitement permettra de faire un retour vers le haut de page directement.
Ce lien d’évitement ne doit pas empêcher la lecture ou la compréhension de l’information, il doit être le dernier élément ciblable au clavier.
2.	Le lien d’évitement doit être atteignable au clavier quel que soit le sens de navigation (TAB ou Shift+TAB).
3.	Placer un lien d’évitement sur un « id » fonctionne, mais cibler le lien d’évitement sur des éléments comme <code>aside /</code>, <code>footer /</code> ou <code>main /</code> permet de rendre le lien d’évitement de contenu moins sensible aux éventuelles modifications. (Changement d’« id », ou simplement non repris dans le code d’une nouvelle page par exemple)
4.	les liens d’évitements ou d’accès rapide doivent être visuellement situés au même endroit dans la page et dans le même ordre relatif dans le code source sur l’ensemble des pages du site.

### Quand doit-on mettre en place des liens d’évitement&nbsp;?

La première question à se poser est, sur mon site, l’utilisateur a-t-il besoin de liens d’évitement ?

Les principales raisons de la mise en place de liens d’évitement:
- la page est longue
- la navigation contient beaucoup de liens
- le contenu contient beaucoup de liens (plusieurs menus de navigation, pieds de page faisant office de plan de site…)
- la page est découpée en de nombreuses parties distinctes (portail, tableau de bord…)

il n’existe pas de moyen autre pour naviguer au sein de la page (titre de rubrique, structure sémantique HTML5…) 
**Note** : attention pour qu’un lien d’évitement soit fonctionnel, il ne doit pas se contenter de faire défiler la page à l’endroit indiqué (contenu principal par exemple). Il doit permettre à l’utilisateur de « &nbsp;sauter&nbsp; » une partie de la page. 
Si un utilisateur active un lien « Aller au contenu » à l’aide du clavier, au prochain « TAB » de l’utilisateur le focus doit se déplacer dans le contenu principal et non sur le lien d’évitement suivant. 
Ce focus peut être fait en plaçant une ancre vers le prochain « &nbsp;id&nbsp; » à cibler par exemple.

Les lecteurs d'écran font la distinction entre le focus système et leur curseur (les lecteurs d'écran utilisent divers autres noms pour cela). Sur VoiceOver d'Apple, il s'appelle le «&nbsp;curseur VO&nbsp;», et NVDA l'appelle «&nbsp;l'objet Navigator&nbsp;», par exemple. Cette distinction est faite puisque le focus système ne peut être défini que sur des éléments focusables. Le rôle du curseur du lecteur d'écran est de définir et de lire des éléments non focusables tels que des paragraphes de textes.

Ainsi, Lorsque nous utilisons un lien d'ancrage, le focus système se déplace avec lui. Cependant le curseur du lecteur d'écran se déplacera pour être défini sur l'élément ancré que s'il est focusable. Lorsque l'élément ancré n'est pas focusable, le lien de saut est toujours considéré comme «&nbsp;l'élément actif&nbsp;».

Pour régler cette problématique, on peut mettre une ancre sur l’élément, et utiliser un « &nbsp;<code>tabindex=-1</code>&nbsp; » pour le rendre focusable via Javascript (il restera exclu des éléments focusables via la touche tab).


### Utiliser une solution hybride&nbsp;?

On a vu que les liens d’accès rapide, peuvent être visibles, ou masqués par défaut pour être affichés uniquement lors de la navigation clavier. Cette dernière option répond souvent à des problématiques esthétiques. Néanmoins, elle supprime le bénéfice que pourraient apporter ces liens aux autres utilisateurs qui n’utilisent pas le clavier (utilisateurs de loupe logicielle par exemple). Une solution, qui permettrait de concilier les avantages des deux techniques, serait de positionner un bouton discret mais affordant au click, en haut de page, permettant de déclencher à la demande l’ouverture et la fermeture du panneau des liens d’accès rapides. On pourrait également penser à une barre horizontale visible tout en haut à l’ouverture de la page et qui disparaît lors du scroll vers le bas de page.

Quelle que soit la solution, il faut que les liens d’évitement soient visibles (dans la mesure du possible) et utilisables par tous !

## Exemples d’usage

&nbsp;Exemple 1&nbsp; :
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

&nbsp;Exemple 2&nbsp; :
```html
<p id="skiplink">
   <a href="#navigation" >Sauter à la navigation</a>
</p>
```

## Exemples d’usage particulier

Si les liens d’évitement ne sont pas rendus visibles à l’écran par défaut (pour des questions de design par exemple). Il est important que ceux-ci restent interprétés par les outils d’assistance.
La solution consiste à utiliser une classe CSS de masquage accessible. Les frameworks type **Bootstrap** et **Boosted** embarquent directement ce type de classe (&nbsp;<code>visually-hidden</code>&nbsp; et &nbsp;<code>visually-hidden-focusable</code>&nbsp;). Ainsi même s’il ne sera pas visible à l’écran, un élément possédant la classe &nbsp;<code>visually-hidden</code>&nbsp; sera correctement vocalisé par un lecteur d’écran.

```css
a.evitement {
   position: absolute;
   left: -99999px;
}
a.evitement:focus {
   position: static;
}
```

Pour toutes remarques, suggestions, n'hésitez pas à consulter ou créer une issue sur notre (<a href="https://github.com/Orange-OpenSource/a11y-guidelines/issues">compte github</a>).