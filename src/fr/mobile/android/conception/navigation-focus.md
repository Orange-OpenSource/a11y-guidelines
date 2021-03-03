---
title: "Navigation au clavier (Switch Access)"
---

# Navigation au clavier (Switch Access)

## Accéder aux éléments interactifs

La navigation avec l'outil Switch Access est très utile pour les personnes qui présentent des difficultés motrices ou cognitives. Cette navigation permet de passer d’élément interactif en élément interactif (élément sur lequel on peut effectuer une action). Elle correspond à la navigation que l’on peut faire avec un clavier Bluetooth lié à un smartphone.

Pour gérer la navigation au clavier, il faut s’assurer de 2 choses&nbsp;:  
- Permettre le focus sur les éléments interactifs&nbsp;: la navigation au clavier ne concerne que les éléments interactifs. Si, par exemple, votre application possède des vues <i lang="en">custom</i> cliquables, il faut s’assurer que ces vues soient "focusables" en positionnant l’attribut `focusable` à `true`.
- Gérer l’affichage du focus&nbsp;: tout élément interactif peut recevoir le focus, il faut donc que le `state_focused` soit défini et permette de distinguer d’un seul coup d’œil quel élément a le focus.

**À vérifier&nbsp;:**

- À la navigation au clavier, il est possible de déterminer visuellement l’élément qui a le focus
- Toutes les fonctionnalités sont accessibles avec la navigation au clavier
- Tous les éléments interactifs sont bien mis en surbrillance avec la navigation au clavier
- Il n'y a que les éléments interactifs qui sont mis en surbrillance avec la navigation au clavier


**Référence <abbr>WCAG</abbr>&nbsp;:**  
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#keyboard">2.1.1 Keyboard</a>
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#name-role-value">4.1.2 Name, Role, Value</a>
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#focus-visible">2.4.7 Focus Visible</a>


## Ordonner la navigation au clavier

**Cible&nbsp;:** tout le monde et en particulier les personnes déficientes motrices qui utilisent un clavier pour naviguer.  
**Quand&nbsp;:** lors de la conception et lors du développement.

**Description&nbsp;:**

La navigation au clavier, pour être compréhensible et facile d'utilisation, doit proposer un ordre cohérent et compréhensible de navigation. Il est donc important de gérer l’ordre du focus&nbsp;: à travers les options `nextFocusDown`, `nextFocusUp`, `nextFocusRight` et `nextFocusLeft`, vous pouvez spécifier quelle vue doit prendre le focus selon l’utilisation des flèches tab, bas, haut, droit et gauche.

À noter&nbsp;: `nextFocusDown`, `nextFocusUp`, `nextFocusRight`, `nextFocusLeft`, `focusable` ainsi que d’autres options de gestion du focus sont accessibles directement dans le <abbr>XML</abbr> ou dans le code à travers les méthodes correspondantes.
  
Pour plus d’information sur la [gestion du focus sous Android](http://developer.android.com/guide/topics/ui/accessibility/apps.html#focus-nav).


**À vérifier&nbsp;:**

- L’ordre de navigation au focus est logique et cohérent.
- Les éléments sont regroupés lorsqu'ils sont liés (exemple : contenu au sein d'un item cliquable d'une liste)


**Référence <abbr>WCAG</abbr>&nbsp;:**  
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#meaningful-sequence">1.3.2 Meaningful Sequence</a>
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#no-keyboard-trap">2.1.2 No Keyboard Trap</a>
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#focus-order">2.4.3 Focus Order</a>


