---
title: "Agrandissement de texte et adaptation à la taille d'affichage"
---

# Agrandissement de texte et adaptation à la taille d'affichage

**Cible&nbsp;:** tout le monde et en particulier les personnes déficientes visuelles, en mobilité et seniors.  
**Quand&nbsp;:** lors de la conception graphique et principalement lors du développement.

**Description&nbsp;:**  
La taille du texte doit pouvoir être multipliée par 2 (zoom du texte à 200% depuis les réglages du navigateur). À ce niveau de zoom, la présentation de la page peut être altérée, mais l’information doit rester lisible (pas de texte tronqué, ni superposé).

De plus, il faut s'assurer de faire du contenu web adaptatif (responsive web design) donc prévoir les différents affichages selon des largeurs type d'écran (points de rupture) en amont du développement. 

Par ailleurs, certains choix de design peuvent ou non faciliter la mise en place de ce critère lors du développement, il est donc important d’y réfléchir dès le départ.

    
**Exemple&nbsp;:**    
La capture ci-dessous montre une page avec un zoom à 100%.  
![capture d’écran avec zoom à 100%](images/zoom.png)    
  
**Exemple valide&nbsp;:**  
Avec zoom du texte à 200%.  
![capture d’écran avec zoom à 200% et texte lisible](images/zoom-ok.png)    
  
**Exemple non-valide&nbsp;:**  
Avec zoom du texte à 200%. Ici la hauteur de l’élément contenant le texte n’a pas été rendue variable en fonction de la taille des caractères.  
![capture d’écran avec zoom à 200% et texte tronqué](images/zoom-ko.png)  
