---
title: "Web développer - Tactile et interactions"
abstract: "Tactile et interactions, recommendations d'accessibilité web lors du développement"
---

# Web développer - Tactile et interactions

<p class="lead">S’assurer que l’utilisateur garde le contrôle sur les interactions, en particulier tactiles</p>




## Autoriser l'utilisation du zoom

**Cible&nbsp;:** tout le monde en particulier les personnes déficientes visuelles.  
**Quand&nbsp;:** lors du développement.

**Description&nbsp;:**  
L'utilisateur doit être capable de zoomer le contenu de la page facilement sur périphérique tactile (smartphone, tablette...). Cette fonctionnalité de base offerte par le navigateur ne doit pas être désactivée au niveau du code (ne pas utiliser de balise `meta` interdisant le zoom).




## Permettre d'annuler le déclenchement des interactions

**Cible&nbsp;:** Facilite l'annulation pour tous les utilisateurs en cas d'erreur sur la cible.
Aide les personnes ayant des déficiences visuelles, des limitations cognitives et des déficiences motrices.
Les personnes incapables de détecter les changements de contexte sont moins susceptibles d'être désorientées lors de la navigation sur un site.

**Quand&nbsp;:** lors du développement.

**Description&nbsp;:**  
Lors d'une interaction gestuelle mono-point, au moins une condition est vraie :
- l'événement "descendant" du pointeur (ex: <span lang="en">MouseDown</span>) n'est pas utilisé pour effectuer une partie de la fonction
- Pouvoir abandonner ou annuler, la fonction est terminée sur l'événement "montant" (ex: <span lang="en">MouseUp</span>) et un mécanisme est disponible pour abandonner la fonction avant la fin ou pour annuler la fonction une fois terminée
- Pouvoir sur l'événement montant inverser tout résultat de l'événement descendant précédent
- Terminer la fonction sur l'événement est essentiel. Note : les fonctions qui émulent un appui clavier ou un pavé numérique sont considérées comme essentielles. 

**Référence <abbr>WCAG</abbr>&nbsp;:**  
- <a lang="en" href="https://www.w3.org/TR/WCAG22/#pointer-cancellation">2.5.2 Pointer Cancellation</a>




## Proposer une alternative aux gestuelles complexes
   
**Cible&nbsp;:** tout le monde en particulier les personnes souffrant de handicap moteur ou visuel, de troubles cognitifs ou d'apprentissage et en mobilité. Les utilisateurs qui ne peuvent pas (avec précision) effectuer des gestes complexes avec un pointeur. Les utilisateurs novices qui ignorent souvent la prise en charge de gestes de pointeur complexes. 

**Quand&nbsp;:** lors de la conception et lors du développement.

**Description&nbsp;:**  
- Pour chaque interaction gestuelle complexe ou basée sur une trajectoire (<span lang="en">swipe, drag, pinch</span>...), une alternative doit être disponible (par exemple une alternative non gestuelle ou simplifiée) sauf si cette gestuelle ou cette trajectoire est essentielle (ex. : signature).
- De même, pour les interactions nécessitant un changement d'orientation de l'appareil ou un mouvement de l'appareil effectué par l'utilisateur (basculement, rotation, secouement...),  cette fonctionnalité peut être désactivée et doit avoir une alternative dans l'interface.

**Gestuelles complexes**: tout geste multi-points (nécessitant plusieurs doigts), et/ou nécessitant de suivre une trajectoire précise.  
**Gestuelle simplifiée**: une alternative nécessitant un seul pointeur (un seul doigt) et sans trajectoire précise.

**Référence <abbr>WCAG</abbr>&nbsp;:**  
- <a lang="en" href="https://www.w3.org/TR/WCAG22/#pointer-gestures">2.5.1 Pointer Gestures</a>
- <a lang="en" href="https://www.w3.org/TR/WCAG22/#motion-actuation">2.5.4 Motion Actuation</a>

## Proposer une alternative aux mouvements de glisser-déposer 

**Cible&nbsp;:** tout le monde en particulier les personnes souffrant de handicap moteur, visuel et en mobilité. 
**Quand&nbsp;:** lors de la conception et lors du développement.

**Description&nbsp;:**  
Pour chaque interaction de glisser-déposer, vérifier qu'une alternative accessible est disponible et ne demande pas de mouvement de glisser. 
Ce critère concerne seulement les mouvements dont seuls les points de départ et d'arrivée sont pris en compte sans geste basé sur une trajectoire précise. 
Mouvement de glisser : Action de cliquez sur un point de départ, puis maintenir contact pour déplacer puis relâcher le pointeur au positionnement final. 

**Exemple valide&nbsp;:**  
Par exemple, si on peut glisser-déposer des valeurs dans différentes colonnes, une alternative suffisante serait un bouton qui permet de sélectionner la colonne où déplacer la valeur. 

**Exception&nbsp;:** 
La fonctionnalité de glisser-déposer est essentielle (un jeu de dextérité par exemple) ou la fonctionnalité est native et gérée par l'agent utilisateur et non modifiée. 

**Référence <abbr>WCAG</abbr>&nbsp;:**  
- <a lang="en" href="https://www.w3.org/WAI/WCAG22/Understanding/dragging-movements">2.5.7 Dragging movements</a>

