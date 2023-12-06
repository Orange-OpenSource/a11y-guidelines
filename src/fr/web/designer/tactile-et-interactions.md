---
title: "Web designer - Tactile et interactions"
abstract: "Tactile et interactions, recommendations d'accessibilité web lors de la conception"
---

# Web designer - Tactile et interactions

<p class="lead">S’assurer que l’utilisateur garde le contrôle sur les interactions, en particulier tactiles</p>


## Proposer une alternative aux gestuelles complexes

**Cible&nbsp;:** tout le monde en particulier les personnes souffrant de handicap moteur ou visuel et en mobilité.  
**Quand&nbsp;:** lors de la conception et lors du développement.

**Description&nbsp;:**  
Pour chaque interaction gestuelle complexe, une alternative doit être disponible (par exemple une alternative non gestuelle ou simplifiée).
De même pour les interactions nécessitant un changement d'orientation de l'écran (basculement, rotation, secouement...), une alternative doit exister.

**Gestuelles complexes**: tout geste multipointeurs (nécessitant plusieurs doigts), et/ou nécessitant de suivre une trajectoire précise.  
**Gestuelle simplifiée**: une alternative nécessitant un seul pointeur (un seul doigt) et sans trajectoire précise.

## Proposer une alternative aux mouvements de glisser-déposer 

**Cible&nbsp;:** tout le monde et en particulier les personnes souffrant de handicap moteur, visuel et en mobilité ou naviguant au clavier.   
**Quand&nbsp;:** lors de la conception et lors du développement.

**Description&nbsp;:** 
Pour chaque interaction de glisser-déposer, une alternative qui ne nécessite pas de mouvement de glisser est disponible. 
Ce critère concerne seulement les mouvements dont seuls les points de départ et d'arrivée sont pris en compte sans geste basé sur une trajectoire précise. 
Mouvement de glisser : Action de cliquez sur un point de départ, puis maintenir contact pour déplacer, puis relâcher le pointeur au positionnement final. 

**Exemple valide&nbsp;:** 
Une carte permet aux utilisateurs de faire glisser la vue de la carte, et la carte comporte des boutons haut/bas/gauche/droite pour déplacer également la vue. 

**Exception&nbsp;:** 
La fonctionnalité de glisser-déposer est essentielle (un jeu de dextérité par exemple) ou la fonctionnalité est native et gérée par l'agent utilisateur et non modifiée. 

**Référence <abbr>WCAG</abbr>&nbsp;:**  
- <a lang="en" href="https://www.w3.org/WAI/WCAG22/Understanding/dragging-movements">2.5.7 Dragging movements</a>

## Orientation de l’écran

**Cible&nbsp;:** tout le monde et en particulier les personnes souffrant de handicap moteur ou visuel et en mobilité.  
**Quand&nbsp;:** lors de la conception et lors du développement.

**Description&nbsp;:**  
L’accès au contenu ne doit pas dépendre de l’orientation de l’écran (portrait et paysage), sauf si une orientation particulière est essentielle pour la compréhension ou l’utilisation du contenu (projection, tableau…).

**Référence <abbr>WCAG</abbr>&nbsp;:**  
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#orientation">1.3.4 Orientation</a>
