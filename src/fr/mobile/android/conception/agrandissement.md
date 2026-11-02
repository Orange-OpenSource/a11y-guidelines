---
title: "Android designer - Agrandissement des éléments"
abstract: "Android designer - Agrandir les textes, recommendations d'accessibilité lors de la conception"
---

# Android designer - Agrandissement des éléments

## Agrandir les textes sans perte d'information

**Cible&nbsp;:** tout le monde et en particulier les personnes déficientes visuelles.  
**Quand&nbsp;:** lors de la conception et lors du développement.

**Description&nbsp;:** 

La taille du texte doit pouvoir être multipliée par 2 (zoom du texte à 200% depuis les paramètres d'accessibilité du téléphone). À ce niveau de zoom, la présentation peut être altérée, mais l’information doit rester lisible (pas de texte tronqué, ni superposé).

De plus, il faut s'assurer de faire du contenu adaptatif, donc prévoir les containers de textes pour qu'ils puissent s'ajuster au zoom des textes, en amont du développement.

Par ailleurs, certains choix de design peuvent ou non faciliter la mise en place de ce critère lors du développement, il est donc important d’y réfléchir dès le départ.

**À vérifier&nbsp;:**

- L’application réagit correctement à l’option grand caractère

**Outil&nbsp;:**
L'option d'accessibilité d'agrandissement de la taille des textes, présent dans les paramètres du téléphone.


**Exemple valide&nbsp;:**  

<img src="../../../images/agrandissement.jpg" alt="exemple d'écran avec le texte à 200% sans perte d'information" width="300" height="530">


**Référence <abbr>WCAG</abbr>&nbsp;:**  
- <a lang="en" href="https://www.w3.org/TR/WCAG22/#resize-text">1.4.4 Resize text</a>
- <a lang="en" href="https://www.w3.org/TR/WCAG22/#reflow">1.4.10 Reflow</a>

