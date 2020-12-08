---
title: "Contenu non-textuel"
---

# Contenu non-textuel

<p class="lead">S’assurer qu’une alternative aux contenus non-textuels soit proposée à l’utilisateur.</p>

## Définir des équivalents textuels
**Cible :** les personnes déficientes visuelles ou auditives, les séniors, les personnes déficientes cognitives et les moteurs de recherche.  
**Quand :** dès la conception et pendant le développement. 

**Description :**  
Il faut prévoir une alternative textuelle pour chaque élément non-textuel : images, animation, vidéo, podcast, publicités, boutons, icônes, logos, etc. 
Pour les images, boutons, icônes, logos, etc, les règles sont les suivantes : 
* Pour les images cliquables : préciser la fonction / la cible du lien 
* Pour les images décoratives : laisser l’alternative textuelle vide
* Pour les images porteuses d’information : alternative textuelle décrivant l’information 
* Pour les images complexes (schémas, graphes…) : prévoir un contenu textuel équivalent adjacent : 
  * du texte dans la page 
  * ou un lien pointant vers une autre page présentant cette description.
  
## Cas particulier : mise en forme via une image 
S’il vous est possible techniquement de réaliser votre visuel via du texte mise en forme, il est préférable de choisir cette solution pour véhiculer l’information plutôt que du texte sous forme d’image. 

Seuls cas où la mise en forme peut se faire via une image :
* Si le [texte sous forme d'image peut être personnalisé visuellement](https://www.w3.org/Translations/NOTE-UNDERSTANDING-WCAG20-fr/visual-audio-contrast-text-presentation.html#visually-customizeddef) par l'utilisateur ;
* Si une [présentation spécifique du texte est essentielle à l'information véhiculée](https://www.w3.org/Translations/NOTE-UNDERSTANDING-WCAG20-fr/visual-audio-contrast-text-presentation.html#essentialdef) (exemple : logo contenu du texte ou nom d’une marque).
Dans ces cas précis, prévoir une alternative textuelle reprenant au moins le texte de l’image et [vérifier les contrastes des couleurs utilisées](/fr/web/outils/methodes-et-outils-de-test/mesurer-contraste-couleurs). 

## Cas particuliers des animations, contenus vidéo et audio
Pour les éléments non informatifs et purement décoratifs, pas besoin d’alternative textuelle et faire en sorte que l’animation soit [ignorée par les aides techniques](/fr/web/exemples-de-composants/masquage-accessible).

Pour les animations portant de l’information, prévoir une transcription (de type script) reprenant l’information du contenu sous forme de texte.

Pour les contenus audio et/ou vidéo, il faut prévoir une transcription textuelle (scripts) et/ou des sous-titres selon les règles suivantes : 
* Contenu audio préenregistré : transcription textuelle équivalente au contenu de l’audio 
* Vidéo préenregistrée sans audio : 
  * transcription textuelle à minima
  * ou une piste audio équivalente au contenu de la vidéo 
* Vidéo préenregistrée (avec ou sans audio) : 
  * transcription textuelle à minima 
  * audiodescription pertinente et correctement synchronisée si nécessaire
* Vidéo préenregistrée avec audio : sous-titres transcrits reprenant tout le contenu 
* Vidéo en direct avec audio : sous-titres transcrits reprenant tout le contenu 

## Exemples : 
* Image décorative : Alternative textuelle vide (comprendre attribut `alt=""`)

<img alt="capture d'écran alternative textuelle image décorative" src="../../images/image_decorative.png" width="250"/> 

* Image cliquable : exemple d'alternative textuelle correcte : « ajouter un bouquet TV » 

<img alt="capture d'écran alternative textuelle image cliquable" src="../../images/image_cliquable.png"/>

## Ressources : 
* [Arbre de décision W3C (anglais)](https://www.w3.org/WAI/tutorials/images/decision-tree/) 
* [Autres cas pratiques sur le site du W3C](https://www.w3.org/Translations/NOTE-UNDERSTANDING-WCAG20-fr/text-equiv-all.html)
* [Plongez dans l’accessibilité : Fournir des équivalents texte pour les images](https://www.la-grange.net/accessibilite/day_23.html)
