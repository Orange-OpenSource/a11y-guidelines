# Recommandations accessibilité des contenus vidéos et audios Orange  

<script>$(document).ready(function () {
    setBreadcrumb([{"label":"Vidéo audio"}]);
});</script>

<style>h3 {font-size: 1rem;}</style>

## Introduction&nbsp;: l’accessibilité des contenus vidéos et audios
Les vidéos et les audios embarqués dans du contenu (page web, document bureautique...) nécessitent&nbsp;:
- que ces vidéos et audios eux-même soient accessibles
- mais également, que l'interface qui permet la diffusion de ces fichiers soit accessible.

## Rendre les vidéos ou audios accessibles

Pour qu’une vidéo ou un audio soit accessible, les éléments suivants doivent accompagner ces fichiers :

- Une transcription intégrale, seule nécessité pour un fichier audio.
- Des sous-titres.
- Une audiodescription, si besoin.

### Transcription intégrale
La transcription doit restituer textuellement l’ensemble des informations véhiculées par la vidéo (paroles, messages affichés à l’écran, ...). La transcription peut être agrémentée d’images, si besoin.

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

L’audiodescription doit, quant à elle, compléter la bande son originale. Elle n'est pas forcement nécessaire, par exemple, lorsque la vidéo est juste une interview, sans autre information visuelle.

Elle doit remplacer, au format audio, l’ensemble des informations qui sont accessibles seulement par l’image (mouvements des acteurs, textes affichés, ...).

De même, cette piste audio ne doit pas être intégrée directement dans la vidéo, mais lui être associée par l’intermédiaire d’un fichier audio indépendant (souvent un fichier .mp3).

## Le lecteur audio ou vidéo

Le lecteur vidéo utilisé doit&nbsp;:
- prendre en charge d'au moins deux éléments&nbsp;: sous-titres et audiodescription.

- permettre d'utiliser les contrôles du lecteurs (lecture/pause, avance/recul, montrer/cacher les sous-titres, arrêt/contrôle du volume, ajouter/enlever l'audiodescription, si besoin, à minima)  qui sont accessibles, notamment aux aides techniques (lecteurs d'écran, loupes logicielles, claviers, ...).

- permettre de modifier les paramètres (à minima, la taille du texte, les couleurs texte/fond) d'affichage des sous-titres.

- ne pas lancer automatiquement l'audio ou la vidéo mais laisser la main à l'utilisateur.

## Liens utiles
-  Article en anglais sur le site de SitePoint&nbsp;:  <a href="https://www.sitepoint.com/accessible-video/" hreflang="en">8 Steps to Creating Accessible Video</a> (en anglais)
- Notice  d’accessibilité éditoriale AccedeWeb&nbsp;: <a href="https://www.accede-web.com/notices/editoriale/8-contenus-riches-multimedias/">Utiliser correctement les contenus riches et multimédias</a>

<!--  This file is part of a11y-guidelines | Our vision of mobile & web accessibility guidelines and best practices, with valid/invalid examples.
 Copyright (C) 2016  Orange SA
 See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). -->