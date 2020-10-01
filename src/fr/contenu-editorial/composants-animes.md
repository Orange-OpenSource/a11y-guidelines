---
title: "Recommandations accessibilité des contenus vidéos, animations et audios Orange"
---

# Recommandations accessibilité des contenus vidéos, animations et audios Orange

## Introduction&nbsp;: l’accessibilité des contenus vidéos, animations et audios
Les vidéos et les audios embarqués dans du contenu (page web, document bureautique...) nécessitent&nbsp;:
- que ces vidéos, animations et audios eux-même soient accessibles
- mais également, que l'interface qui permet la diffusion de ces fichiers soit accessible.

## Rendre les vidéos, animations ou audios accessibles

Pour qu’une vidéo ou un audio soit accessible, les éléments suivants doivent accompagner ces fichiers :

- Une transcription intégrale, seule nécessité pour un fichier audio.
- Des sous-titres.
- Une audiodescription, si besoin.

### Transcription intégrale
La transcription doit restituer textuellement l’ensemble des informations importantes véhiculées par le contenu, celles-ci peuvent être :
 - les dialogues
 - les messages affichés à l’écran
 - les graphiques et animations éventuels qui apportent de l'information
 - le nom et le titre des personnes
 - le nom des objets (bâtiments, produit...)
 - le lieu
 - ce qui se passe dans la vidéo
 - des informations sur les paramètres de la vidéo (qualité, noir et blanc...)

La transcription peut être également agrémentée d’images, si besoin.

**La transcription intégrale est la solution nécessaire et suffisante pour rendre accessible un fichier audio.**

Cette transcription doit, par ordre de préférence, être&nbsp;:
1. accessible directement à travers le lecteur audio/vidéo, lui-même.
1. directement présente dans la page ou le document à proximité immédiate (l'élément qui suit directement, en fait) de la vidéo ou audio.
1. accessible à travers un lien à proximité immédiate pointant sur une autre partie de la page ou du document ou même, une page ou un document autre.

Quelque soit le moyen choisi, il doit, bien sûr, être accessible à tous.

### Sous-titres
Les sous-titres doivent restituer l’ensemble des contenus (tout son porteur d'information : voix, coup de feu, ...) véhiculés par la bande son de la vidéo. Ils doivent être au format texte et synchronisés avec le son de la vidéo.

Ils ne doivent pas être affichés (incrustés) directement dans la vidéo, mais doivent être associées à cette dernière grâce à un fichier texte indépendant (souvent un fichier .xml ou .srt).

### Audiodescription

L’audiodescription doit, quant à elle, compléter la bande son originale. Elle n'est pas forcement nécessaire, par exemple, lorsqu'une vidéo est juste une interview, sans autre information visuelle.

Elle doit remplacer, au format audio, l’ensemble des informations qui sont accessibles seulement par l’image (mouvements des acteurs, textes affichés, ...).

De même, cette piste audio ne doit pas être intégrée directement dans la vidéo, mais lui être associée par l’intermédiaire d’un fichier audio indépendant (souvent un fichier .mp3).

### Lors de la lecture

Lors de la lecture du fichier embarqué dans la page web, vérifier :
- Ne pas lancer automatiquement, au chargement de la page, la vidéo, l'animation ou l'audio mais laisser la main à l'utilisateur.
- Pour une vidéo ou une animation, celle-ci doit être exempte de tout élément qui flashe plus de trois fois par seconde ou ce flash doit se situer sous <a href="https://www.w3.org/Translations/WCAG20-fr/#general-thresholddef">le seuil de flash générique et le seuil de flash rouge</a>.

## Le lecteur audio ou vidéo

Le lecteur vidéo utilisé doit&nbsp;:
- Prendre en charge au moins deux éléments&nbsp;: sous-titres et audiodescription.
- Permettre d'utiliser les contrôles du lecteurs (lecture/pause, avance/recul, montrer/cacher les sous-titres, arrêt/contrôle du volume, ajouter/enlever l'audiodescription, si besoin, à minima)  qui sont accessibles, notamment aux aides techniques (lecteurs d'écran, loupes logicielles, claviers, ...).
- Permettre de modifier les paramètres (à minima, la taille du texte, les couleurs texte/fond) d'affichage des sous-titres.

## Liens utiles
- Article en anglais sur le site du W3C&nbsp; <a href="https://www.w3.org/WAI/media/av/#how-to-make-audio-and-video-accessible" lang="en" hreflang="en">How to make audio and video accessible</a>
-  Article en anglais sur le site de SitePoint&nbsp;:  <a href="https://www.sitepoint.com/accessible-video/" lang="en" hreflang="en">8 Steps to Creating Accessible Video</a>
- Notice  d’accessibilité éditoriale AccedeWeb&nbsp;: <a href="https://www.accede-web.com/notices/editoriale/8-contenus-riches-multimedias/">Utiliser correctement les contenus riches et multimédias</a>
