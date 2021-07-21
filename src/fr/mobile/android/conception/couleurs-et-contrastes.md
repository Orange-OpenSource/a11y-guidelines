---
title: "Couleurs et contrastes"
---

# Couleurs et contrastes

S'assurer que les couleurs utilisées ne posent pas de problèmes à l'utilisateur

## Assurer un contraste suffisant entre les couleurs de premier plan et de fond

**Cible&nbsp;:** tout le monde (soleil sur l’écran, impression noir et blanc…) et en particulier les personnes malvoyantes, les seniors et les personnes avec des problèmes de vision (daltonisme, vision des contrastes, etc.)  
**Quand&nbsp;:**  dès la phase de conception et lors du développement.

**Description&nbsp;:**
Le niveau de contraste entre le texte ou un composant graphique et l’arrière-plan doit être suffisamment élevé.
Un niveau de contraste insuffisant sera préjudiciable pour les utilisateurs ayant des difficultés visuelles ainsi que pour ceux dans un environnement très lumineux.

**À vérifier&nbsp;:**
- S'assurer que le contraste entre la couleur de fond et du texte, est de :
	- De 4,5:1 minimum pour les petits textes (inférieur à 18sp ou 14sp si le texte est en gras)
	- De 3:1 minimum pour les grands textes (supérieur ou égale à 18sp, ou 14sp si le texte est en gras)
- S'assurer que les couleurs utilisés dans les composants d'interface, ou que les éléments graphiques porteurs d'informations, ont un contraste de 3:1 par rapport à l'arrière-plan. Sont concernés, entre autres : les boutons, les boutons radios, les cases à cocher, les listes de sélection, le focus, les barres de progression etc... Ne sont pas concernés : les textes décoratifs, les éléments inactifs, le logo et le brand name.

**Outil&nbsp;:**
L’application [<span lang="en">Colour Constrast Analyzer</span>](http://www.paciellogroup.com/resources/contrastanalyser/) permet de mesurer rapidement des niveaux de contraste de couleurs (gratuit pour Mac et Windows).  

L’application [<span lang="en">AccessibilityScanner</span>](https://play.google.com/store/apps/details?id=com.google.android.apps.accessibility.auditor&hl=fr) permet de tester directement vos applications sur certains critères d’accessibilité et notamment les couleurs. Disponible à partir d’Android 6.

**Exemple de contraste non valide&nbsp;:**  
Le texte "film | 20h40 …" ne présente pas un contraste suffisant. Celui-ci ne sera pas lisible par tous les utilisateurs.  

![capture d’écran présentant du texte dont le contraste n’est pas suffisant](../../../images/contraste.png)  


**Référence <abbr>WCAG</abbr>&nbsp;:**  
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#contrast-minimum">1.4.3 Contrast minimum</a>
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#non-text-contrast">1.4.11 Non text contrast</a>

<br/><br/>

## S'assurer que la couleur ou l'information sensorielle ne sont pas les seules sources d'information 


**Cible&nbsp;:** tout le monde (soleil sur l’écran, impression noir et blanc…) et en particulier les personnes malvoyantes, les seniors et les personnes avec des problèmes de vision (daltonisme, vision des contrastes, etc.)  
**Quand&nbsp;:**  dès la phase de conception et lors du développement.

**Description&nbsp;:**
Ne pas utiliser la couleur ou une information sensorielle (forme, taille, son, orientation, localisation visuelle…) comme la seule façon de véhiculer de l’information, d’indiquer une action, de solliciter une réponse ou de distinguer un élément. L’information fournie par un changement de couleur ou une information sensorielle doit être complétée par une information textuelle (alternative) ou/et structuration sémantique.

**À vérifier&nbsp;:**

- La perte des couleurs ne doit pas entraîner de difficulté dans la navigation, ni provoquer de perte d’information.
 

**Exemple de passage d’information par la couleur valide et non valide&nbsp;:** 

<img src="../../../images/couleur.png" alt="exemple de passage d’information par la couleur valide et non valide. Dans un cas la couleur et la forme de l’objet porte l’information avec une légende, dans l’autre cas seule la couleur porte l’information." width="300" height="530">


**Référence <abbr>WCAG</abbr>&nbsp;:**  
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#sensory-characteristics">1.3.3 Sensory characteristics</a>
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#use-of-color">1.4.1 Use of color</a>


## S'assurer que le mode sombre est prévu par l'application

**Cible&nbsp;:** tout le monde (soleil sur l’écran, impression noir et blanc…) et en particulier les personnes malvoyantes, les seniors et les personnes avec des problèmes de vision (daltonisme, vision des contrastes, etc.)  
**Quand&nbsp;:**  dès la phase de conception et lors du développement.

**Description&nbsp;:**
Bien que le mode sombre soit utilisé majoritairement par préférence esthétique par les utilisateurs, pour certains utilisateurs malvoyants (présence de corps flottants par exemple), le mode sombre apporte une réelle différence dans le confort d'utilisation de l'application et il est donc essentiel de le prendre en compte afin de rendre celle-ci accessible.

**À vérifier&nbsp;:**
- L'application propose de passer du mode clair au mode sombre dans les paramètres de l'application, et/ou s'adapte au paramètre du téléphone (Paramètres/Ecran/Mode sombre).

**Exemple d'un écran en mode clair&nbsp;:**  

![capture d’écran présentant un écran avec le mode clair actif](../../../images/light_mode.png)  

**Exemple du même écran avec le mode sombre&nbsp;:**  

![capture d’écran présentant le même écran avec le mode sombre actif](../../../images/dark_mode.png)  

<br/><br/>