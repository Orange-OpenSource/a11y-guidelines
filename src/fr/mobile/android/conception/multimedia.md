---
title: "Android designer - Multimédia"
abstract: "Multimédia, recommendations d'accessibilité lors de la conception sous Android"
---

# Android designer - Multimédia

## Contrôler le contenu multimédia

**Cible&nbsp;:** tout le monde et en particulier les personnes déficientes visuelles et cognitives.  
**Quand&nbsp;:** lors de la conception et lors du développement.

**Description&nbsp;:** 

Sur mobile, les lecteurs d’écran essayent de transmettre au maximum à l’utilisateur les changements de contexte. Dans certains cas, cela peut donner des vocalisations permanentes, et donc inaudibles, ou empêcher toute action de l’utilisateur.  
L’utilisateur doit rester maître du contenu à tout instant. C’est particulièrement vrai avec le contenu interactif. Il faut donc éviter par exemple qu’une vidéo ne se lance directement en plein écran, qu’une vidéo ne se lance directement sans une action au préalable de l’utilisateur, qu’un carrousel ne défile de manière automatique, etc.

De plus, un contenu multimédia doit pouvoir être contrôlé à tout instant par l'utilisateur, que ce soit pour couper le son, ou pour le mettre en pause.

**À vérifier&nbsp;:**

- Les contenus multimédias peuvent être contrôlés par l’utilisateur (présence d’un bouton pause, bouton accessible pour sortir du mode plein-écran, etc...)
- Pour tout son émis de plus de 3 secondes, l'utilisateur doit avoir la possibilité soit de l'arrêter ou de le mettre en pause, soit d'en contrôler son volume indépendamment du volume général du système.
- Il n'y a pas de démarrage automatique de la vidéo au chargement de la page.

**Référence <abbr>WCAG</abbr>&nbsp;:**  
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#audio-control">1.4.2 Audio Control</a>
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#pause-stop-hide">2.2.2 Pause, Stop, Hide</a>

## Transcrire le contenu audio ou vidéo

**Cible&nbsp;:** tout le monde, et en particulier les personnes déficientes visuelles, cognitives et auditives et celles qui maîtrisent mal le français.
**Quand&nbsp;:** lors de la conception et lors du développement.

**Description&nbsp;:** 

Il est essentiel de fournir un moyen d’accès à l’information visuelle et auditive pour des personnes ne pouvant pas en bénéficier : malvoyants, aveugles, sourds, déficients cognitifs, ordinateur sans haut-parleurs, en environnement lumineux ou bruyant.

**À vérifier&nbsp;:**

- Une transcription intégrale textuelle est proposée pour le contenu audio préenregistré
- Une transcription intégrale textuelle ou une audiodescription est proposée pour le contenu vidéo préenregistré
- Des sous-titres sont proposés pour le contenu vidéo, préenregistré ou non


**Référence <abbr>WCAG</abbr>&nbsp;:**  
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#audio-only-and-video-only-prerecorded">1.2.1 Audio-only and Video-only (Prerecorded)</a>
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#captions-prerecorded">1.2.2 Captions (Prerecorded)</a>
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#audio-description-or-media-alternative-prerecorded">1.2.3 Audio Description or Media Alternative (Prerecorded)</a>
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#captions-live">1.2.4 Captions (Live)</a>
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#audio-description-prerecorded">1.2.5 Audio Description (Prerecorded)</a>


## Eviter le contenu à risque épileptique

**Cible&nbsp;:** tout le monde, et en particulier les personnes ayant des crises d'épilepsie
**Quand&nbsp;:** lors de la conception et lors du développement.

**Description&nbsp;:** 
Afin d'éviter que le contenu de l'application provoque des crises d'épilepsie, il est primordial d'éviter les clignotements de plus de 3 flashs par seconde.

**À vérifier&nbsp;:**
- Il n'y a aucun clignotement de plus de 3 flashs à la seconde


**Référence <abbr>WCAG</abbr>&nbsp;:**  
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#three-flashes-or-below-threshold">2.3.1 Three Flashes or Below Threshold</a>
