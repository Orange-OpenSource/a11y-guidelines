---
title: "Les bonnes pratiques pour les liens d’évitements"
abstract: "Les liens d'évitement, qu'est-ce et comment bien les mettre en œuvre"
date: "2019-01-01"
tags:
  - componentExample
  - web
---

# Les bonnes pratiques pour les liens d’évitements

## Qu’est-ce qu’un lien d’évitement&nbsp;?

### Qu'est ce&nbsp;?

Les liens d’évitement sont des raccourcis permettant d’accéder directement à une zone de contenu ou d’éviter des régions de la page, afin de naviguer plus rapidement.
On peut distinguer 3 types de liens&nbsp;:
1. les liens d'accès rapide : rassemblés en haut de page et permettant d’aller aux principales régions de la page&nbsp;: «&nbsp;Aller au menu&nbsp;», «&nbsp;Aller au contenu&nbsp;», «&nbsp;Aller à la recherche&nbsp;», par exemple
2. les liens d’évitement : positionnés avant la région qu’ils permettent de sauter : «&nbsp;Passer la section&nbsp;», «&nbsp;Passer le chapitre&nbsp;» 
3. les liens de navigation interne à une page : «&nbsp;Retour en haut de page&nbsp;», par exemple

Ces liens d’évitement permettent donc à l’utilisateur d’éviter des parties de pages, que l’on navigue au clavier, que l’on ait du mal à se repérer dans une page longue ou que scroller soit difficile.

### Pour qui&nbsp;?

Les liens d’évitement sont précieux pour de multiples utilisateurs&nbsp;:
- les utilisateurs de lecteur d’écran ou ne pouvant utiliser la souris, qui se déplacent donc au clavier uniquement
- Les utilisateurs qui peinent à naviguer dans une page longue&nbsp;: les déficients moteurs (fatigabilité ou limitations motrices) ou les personnes qui naviguent sur leur smartphone (on évite le swipe, le balayage)
- les malvoyants, qui utilisent ou pas une loupe d’écran, et ayant du mal à se faire une représentation globale de la topologie de la page

### Quelles sont les types de solutions&nbsp;?

1. les liens d'accès rapide&nbsp;: la solution la plus répandue, est une série de liens (entre 1 et 6 généralement) positionnés tout en haut de page visuellement et intégrés dans le code juste après l’ouverture de la balise body. Chaque lien pointe vers  une région,  ou toute autre partie importante de la page. Ils sont, généralement, définies avec une taille de police plus petite que le corps du texte ou par défaut cachés et rendus visibles, lors de la navigation clavier, à la prise de focus.
2. Les liens d‘évitement&nbsp;: ces éléments sont positionnés juste avant chaque partie de page ou région à sauter. Ils peuvent être toujours visibles ou bien rendus visibles, lors de la navigation clavier, à la prise de focus.
3. Les liens de navigation internes de type « retour en haut de page »&nbsp;: ils sont souvent collés (position CSS `sticky`) tout en bas, côté droit du viewport, toujours visible ou n’apparaissant que lorsqu’on arrive en fin de scroll vertical.

## Quelles sont les bonnes pratiques&nbsp;?

### Quand doit-on mettre en place des liens d’évitement&nbsp;?

La première question à se poser est, sur mon site, l’utilisateur a-t-il besoin de liens d’évitement&nbsp;?

Les principales raisons de la mise en place de liens d’évitement&nbsp;:
- la page est longue
- la navigation contient beaucoup de liens
- le contenu contient beaucoup de liens (plusieurs menus de navigation, pieds de page faisant office de plan de site…)
- la page est découpée en de nombreuses parties distinctes (portail, tableau de bord…)

### Utiliser une solution hybride&nbsp;?

On a vu que les liens d’accès rapide, peuvent être visibles, ou masqués par défaut pour être affichés uniquement lors de la navigation clavier. Cette dernière option répond souvent à des problématiques esthétiques. Néanmoins, elle supprime le bénéfice que pourraient apporter ces liens aux autres utilisateurs qui n’utilisent pas le clavier (utilisateurs de loupe logicielle par exemple). Une solution, qui permettrait de concilier les avantages des deux techniques, serait de positionner un bouton discret mais affordant au click, en haut de page, permettant de déclencher à la demande l’ouverture et la fermeture du panneau des liens d’accès rapides. On pourrait également penser à une barre horizontale visible tout en haut à l’ouverture de la page et qui disparaît lors du scroll vers le bas de page.

Quelle que soit la solution, il faut que les liens d’évitement soient visibles (dans la mesure du possible) et utilisables par tous !

Pour toutes remarques, suggestions, n'hésitez pas à consulter ou créer une issue sur notre (<a href="https://github.com/Orange-OpenSource/a11y-guidelines/issues">compte github</a>).
