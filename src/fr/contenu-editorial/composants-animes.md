---
title: "Accessibilité des contenus vidéos, animations et audios"
---

# Accessibilité des contenus vidéos, animations et audios
L'accessibilité des vidéos et audios embarqués dans du contenu (page web, document bureautique...) passe par :
* ces vidéos, animations et audios eux-même doivent être accessibles ;
ET
* l'interface qui permet la diffusion de ces contenus doit être accessible.

## Les vidéos, animations ou audios accessibles
Pour qu’une vidéo ou un audio soit accessible, les éléments suivants doivent accompagner le contenu :
* Une transcription intégrale (seule nécessité pour un fichier audio),
* Des sous-titres,
* Une audiodescription si besoin.

### Transcription intégrale
**La transcription intégrale est la solution nécessaire et suffisante pour rendre accessible un fichier audio.**
La transcription doit restituer textuellement l’ensemble des informations importantes véhiculées par le contenu, celles-ci peuvent être :
 - les dialogues, 
 - les messages affichés à l’écran, 
 - les graphiques et animations éventuels qui apportent de l'information, 
 - le nom et le titre des personnes, 
 - le nom des objets (bâtiments, produit...), 
 - le lieu, 
 - ce qui se passe dans la vidéo, 
 - des informations sur les paramètres de la vidéo (qualité, noir et blanc...).

Cette transcription doit, par ordre de préférence, être&nbsp;:
1. accessible directement à travers le lecteur audio/vidéo, lui-même.
2. directement présente dans la page ou le document à proximité immédiate (l'élément qui suit directement, en fait) de la vidéo ou audio.
3. accessible à travers un lien à proximité immédiate pointant sur une autre partie de la page ou du document ou même, une page ou un document autre.
Quelque soit le moyen choisi, il doit, bien sûr, être accessible à tous. 

La transcription peut éventuellement être agrémentée d’images, si besoin.

### Sous-titres
Les sous-titres doivent 
* restituer l’ensemble des contenus (tout son porteur d'information : voix, coup de feu, ...) véhiculés par la bande son de la vidéo. Ils doivent être au format texte et synchronisés avec le son de la vidéo, 
* être associées à cette dernière grâce à un fichier texte indépendant (souvent un fichier .xml ou .srt) et ne doivent pas être affichés (incrustés) directement dans la vidéo.

### Audiodescription
L’audiodescription doit
* compléter la bande son originale. Elle n'est pas forcement nécessaire, par exemple, lorsqu'une vidéo est juste une interview, sans autre information visuelle, 
* remplacer, au format audio, l’ensemble des informations qui sont accessibles seulement par l’image (mouvements des acteurs, textes affichés, ...). 
De même, cette piste audio ne doit pas être intégrée directement dans la vidéo, mais lui être associée par l’intermédiaire d’un fichier audio indépendant (souvent un fichier .mp3).

### Lecture
Lors de la lecture du contenu, vérifier :
- Laisser la main à l'utilisateur sur la vidéo, l'animation ou l'audio (ne pas lancer automatiquement la lecture au chargement de la page), 
- Pour une vidéo ou une animation, celle-ci doit être exempte de tout élément qui flashe plus de trois fois par seconde ou ce flash doit se situer sous <a href="https://www.w3.org/Translations/WCAG20-fr/#general-thresholddef">le seuil de flash générique et le seuil de flash rouge</a>.

## Un lecteur audio ou vidéo accessible
Le lecteur vidéo utilisé doit permettre :
- de prendre en charge au moins les sous-titres et l'audiodescription, 
- d'utiliser les boutons (lecture/pause, avance/recul, montrer/cacher les sous-titres, arrêt/contrôle du volume, ajouter/enlever l'audiodescription, si besoin) au clavier, 
- de modifier les paramètres d'affichage des sous-titres (à minima : la taille du texte et les couleurs du texte/fond) .

## Liens utiles
- Article en anglais sur le site du W3C&nbsp; <a href="https://www.w3.org/WAI/media/av/#how-to-make-audio-and-video-accessible" lang="en" hreflang="en">How to make audio and video accessible</a>
-  Article en anglais sur le site de SitePoint&nbsp;:  <a href="https://www.sitepoint.com/accessible-video/" lang="en" hreflang="en">8 Steps to Creating Accessible Video</a>
- Notice  d’accessibilité éditoriale AccedeWeb&nbsp;: <a href="https://www.accede-web.com/notices/editoriale/8-contenus-riches-multimedias/">Utiliser correctement les contenus riches et multimédias</a>
