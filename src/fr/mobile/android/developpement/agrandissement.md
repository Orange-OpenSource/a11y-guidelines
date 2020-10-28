---
title: "Agrandissement des éléments"
---

# Agrandissement des éléments

## Agrandir les textes sans perte d'information

**Cible&nbsp;:** tout le monde et en particulier les personnes déficientes visuelles.  
**Quand&nbsp;:** lors de la conception et lors du développement.

**Description&nbsp;:** 

L’utilisateur a la possibilité d’augmenter la taille du texte via une option d’accessibilité. Afin que l’application réagisse correctement à cette option, il est nécessaire d’utiliser des tailles de texte dynamiques qui s’ajusteront en fonction des paramètres utilisateurs. Un texte trop petit sera facilement ignoré par certains utilisateurs malvoyants.  
  
L’application devra mettre en œuvre des tailles de textes dynamiques, s’assurer de la bonne réactivité des zones d’affichage au grossissement de texte (conteneurs qui s’adaptent à la taille de leur contenu).
  
Afin de permettre à l’option «&nbsp;grand caractère&nbsp;» d’interagir correctement avec l’application, plusieurs points sont à respecter durant les développements&nbsp;:
- Utiliser une taille de police dynamique&nbsp;: le «&nbsp;sp&nbsp;». Cette unité, spécifique à Android, permet d’obtenir une taille de police en fonction de la densité de pixel de l’écran. Il est plus que recommandé de l’utiliser pour les textes, ne serait-ce que pour obtenir un design uniforme sur tous les types d'appareils Android. 
- Gérer les débordements de contenu&nbsp;: une erreur courante est d’utiliser une taille de texte dynamique («&nbsp;sp&nbsp;» donc) mais de ne pas faire attention au conteneur. Si le texte grossit, le conteneur doit en faire autant pour ne pas qu’il y ait de débordement. On peut parfaitement jouer avec le `min-height` et le `height` des conteneurs pour obtenir un résultat correct (le `height` à `wrap_content` et le `min-height` à la hauteur voulue par défaut).

**À vérifier&nbsp;:**

- L’application réagit correctement à l’option grand caractère

**Outil&nbsp;:**
L'option d'accessibilité d'agrandissement de la taille des textes, présent dans les paramètres du téléphone.


**Exemple valide&nbsp;:**  

<img src="../../../../images/agrandissement.jpg" alt="exemple d'écran avec le texte à 200% sans perte d'information" width="300">

