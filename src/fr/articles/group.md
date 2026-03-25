---
title: "Le rôle group"
abstract: "Comment bien utiliser le rôle group"
titleBeforeTag: true
date: "2026-04-02"
tags:
  - web
  - intermediate
---

## Le rôle `group`

C'est l'un des rôles présent dans la spécification ARIA 1.3 ([le rôle `group` dans la spécification ARIA](https://www.w3.org/TR/wai-aria-1.3/#group)). Il fait partie des rôles de structure de document.

### À quoi sert le rôle `group`&nbsp;?

Il va permettre de grouper des éléments de la page qui doivent être traités comme une seule et même entité. En fait, grouper des éléments qui ont la même finalité, la même fonction, un but commun.
Il est un bon moyen de passer l'information de structure et de relation qu'est un groupe aux AT (aide technique) autrement que par un indicateur seulement visuel.

### Support dans les AT

Le support est plutôt bon, exception faite des environnements mobiles ([support sur a11y support (en)](https://a11ysupport.io/tech/aria/group_role)). Comme le support reste partiel, il est toujours important de tester les implémentations avec vos environnements navigateurs/AT cibles, comme toujours pour de l'ARIA.

### Quand peut-on l'utiliser&nbsp;?

#### Pour des éléments de formulaire

Le rôle `group` est tout indiqué pour jouer le rôle équivalent de `fieldset` pour des éléments de formulaire quand on ne peut faire autrement.

#### Pour d'autres éléments

On peut utiliser le rôle `group` avec n'importe quel groupe d'éléments liés entre eux de façon logique.

#### Exemples

Pour un panneau de commande pour la lecture d'un podcast, il est judicieux de mettre un `group` autour des boutons de contrôle de la lecture du son, c'est bien un groupe logique identifiable visuellement et donc a identifier pour les AT.

```html
<div role="group" aria-label="Contrôleur son du podcast">
    <button>Lire</button>
    <button>Pause</button>
    <button>Stop</button>
</div>
```

Ici, on s'assure que l'information sur l'existence du groupe image et légende est bien restitué aux AT malgré le mauvais support natif de `figure`.

```html
<figure aria-labelledby="opera_1" role="group">
  <img src="/operabatiment.jpg" alt="L'opéra Garnier Paris, France">
  <figcaption id="opera_1">
    Une représentation du <cite>Barbier de  Séville</cite> à laquelle j'assistais (Nov 2022)&nbsp;!
  </figcaption>
</figure>
```

```html
<div role="menu">
  <ul role="group">
    <li role="menuitem">Boite de réception</li>
    <li role="menuitem">Archive</li>
    <li role="menuitem">Poubelle</li>
  </ul>
  <ul role="group">
    <li role="menuitem">Dossier perso</li>
    <li role="menuitem">Dossier famille</li>
    <li role="menuitem">Dossier images</li>
  </ul>
  <ul role="group">
    <li role="menuitem">Nouveau dossier</li>
  </ul>
</div>
```

Dans un menu applicatif, on peut utiliser le rôle `group` pour grouper les différents types d'actions possibles. Ici, pas forcement besoin d'un nom au `group`, la typologie est évidente.

### Bonnes pratiques

- Il faut nommer via `aria-label` ou `aria-labelledby`, lorsque nécessaire à la compréhension, toute balise avec un`role="group"`.
- Ne pas utiliser de `role="group"` à la place de landmark ou balises de structure de page HTML5.
- Le rôle `group` amenant une augmentation de la charge cognitive pour l'utilisateur, il est à utiliser avec parcimonie et discrétion et donc réservé à des cas réellement nécessaires.
- Si on utilise le rôle `group`, il est aussi intéressant de donner une indication visuelle également du groupage.
- On peut imbriquer des rôles `group` mais attention au risque de grande verbosité.

### Mauvaises utilisations
landmark
infos importante

