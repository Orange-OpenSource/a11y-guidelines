---
title: "Contenu non-textuel"
---

# Contenu non-textuel

<p class="lead">S’assurer, qu’une alternative aux contenus non-textuels soit proposée à l’utilisateur</p>




## Fournir un équivalent textuel pour les images et les cadres

**Cible&nbsp;:** tout le monde, et en particulier les personnes déficientes visuelles ou cognitives.  
**Quand&nbsp;:** lors de la conception et lors du développement.

**Description&nbsp;:** 

Avant toutes choses, il ne faut pas utiliser une image-texte lorsque cela n'est pas nécessaire ou que l'image peut être remplacée par une mise en forme du texte en <abbr>CSS</abbr>.

Mettre, dans toute balise `img`, un attribut `alt` pertinent&nbsp;: 
- Pour les images cliquables&nbsp;: préciser la fonction&nbsp;/ la cible du lien dans l’attribut `alt`.
- Pour les images porteuses d’information&nbsp;: mettre un `alt` décrivant l’information contenue dans l’image.
- Pour les images contenant du texte&nbsp;: mettre un attribut `alt` reprenant au moins le texte de l’image.
- Pour les images décoratives&nbsp;: mettre un attribut `alt` vide.
- Pour les images dont le contenu du `alt` serait trop long (schémas, graphes…), mettre à proximité de l’image à décrire, sa description sous forme de texte dans la page ou, un lien pointant vers une page <abbr>HTML</abbr> contenant cette description.

Mettre un attribut `title` décrivant le contenu et/ou la fonction de toute `frame` ou `iframe`. Si la `frame` ou `iframe` ne porte pas d’information pour l’utilisateur (purement technique), la rendre invisible cf. exemple: [Masquer les iframe techniques de manière accessible](../../exemples-de-composants/iframes-techniques/). Dans ce cas pas besoin de `title`.

**À vérifier&nbsp;:**

- S'assurer que les images ne peuvent être remplacées par du texte mis en forme
- Toute balise `img` doit posséder un attribut `alt`.
- Pour les images non-porteuses d’information, il est préférable de les passer en image de fond <abbr>CSS</abbr>.
- Pour les graphiques, la solution peut être de mettre un lien sous l’image permettant d’accéder à un tableau de chiffres (le faire apparaître dans la même page ou sur une autre page).
- Une `frame` ou `iframe` non-informative masquée convenablement n'a pas besoin de `title`.
- Un  `title` n'est pas requis si le contenu de l'`iframe` n'est pas distinct du contenu environnant et n'a pas d'élément tabulable à l'intérieur, et qu'on a ajouté `tabindex = "- 1"` sur l'`iframe` afin qu'elle ne reçoive pas le focus.

**Objectif utilisateur&nbsp;:**

Permettre l’accès à l’information incluse dans une image pour des utilisateurs qui n’y ont pas accès et éviter des images inutiles.

Point bloquant&nbsp;: une image sans description textuelle est inexploitable par des personnes ayant des déficiences visuelles ou celles n’affichant pas les images (mobile, faible bande passante…).

**Objectif technique&nbsp;:**

Améliorer le référencement naturel.

**Exemple valide&nbsp;:**

```html
<a href="./home">
  <img src="logo_orange.jpg" alt="Orange, retour à l’accueil">
</a>
```

```html
<img src="banner_bouquet_famille.png" alt="Bon plan, bouquet famille max à 2 euros par mois pendant 12 mois au lieu de 16 euros.">
```

```html
<iframe title="contenu publicitaire" id="cool_ads_iframe_/0101/woo_rec_1_300x250_0" height="250" width="300">
```

**Exemple d’alternative vide&nbsp;:**  
Dans l’exemple ci-dessous, le pictogramme à droite n’a pas besoin d’être vocalisé puisque le texte situé à gauche apporte déjà l’information.  
Renseigner l’attribut `alt` dans ce cas apporterait une information redondante.  

![exemple d’image décorative](../../images/service-24.png)  
  
```html
<h3>Le service 24h garanti</h3>  
<img src="service-24.png" alt="">
```

**Outils :**  
L'extension <a href="https://chrispederick.com/work/web-developer/" lang="en">Web developer</a> (possibilité d'afficher les alternatives textuelles de toutes les images).

**Référence <abbr>WCAG</abbr>&nbsp;:**  
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#non-text-content">1.1.1 Non-text Content</a>
- <a lang="en" href="https://www.w3.org/WAI/WCAG21/Understanding/images-of-text">1.4.5 Images of text</a>




## Rendre accessible les pistes audio ou vidéo

**Cible&nbsp;:** tout le monde, et en particulier les personnes déficientes visuelles, cognitives et auditives et celles qui maîtrisent mal le français.  
**Quand&nbsp;:** lors de la conception et lors du développement.

**Description&nbsp;:** 

Pour être accessibles, les contenus multimédias doivent&nbsp;: 
1. proposer une transcription intégrale
2.	proposer des sous-titres (vidéo uniquement) 
3.	proposer une audiodescription (vidéo uniquement)
4.	choisir un lecteur média accessible
5.	proscrire le démarrage automatique de la vidéo au chargement de la page
6.	proscrire les vidéos qui présentent plus de 3 flashs à la seconde 
7. par ailleurs, pour tout son émis de plus de 3 secondes, l'utilisateur doit avoir la possibilité soit de l'arrêter ou de le mettre en pause soit d'en contrôler son volume indépendamment du volume général du système.

Pour plus d'infos consulter [les recommandations accessibilité pour les contenus vidéos, animations et audios Orange](../../../contenu-editorial/composants-animes/).

**Objectif utilisateur&nbsp;:**

Fournir un moyen d’accès à l’information visuelle et auditive pour des personnes ne pouvant pas en bénéficier&nbsp;: malvoyants, aveugles, sourds, déficients cognitifs, ordinateur sans haut-parleurs, en environnement lumineux ou bruyant.

**Objectif technique&nbsp;:**

Permet le référencement de tout contenu audio et vidéo.

**Référence <abbr>WCAG</abbr>&nbsp;:**  
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#audio-only-and-video-only-prerecorded">1.2.1 Audio-only and Video-only (Prerecorded)</a>
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#captions-prerecorded">1.2.2 Captions (Prerecorded)</a>
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#audio-description-or-media-alternative-prerecorded">1.2.3 Audio Description or Media Alternative (Prerecorded)</a>
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#captions-live">1.2.4 Captions (Live)</a>
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#audio-description-prerecorded">1.2.5 Audio Description (Prerecorded)</a>
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#audio-control">1.4.2 Audio Control</a>
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#pause-stop-hide">2.2.2 Pause, Stop, Hide</a>
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#three-flashes-or-below-threshold">2.3.1 Three Flashes or Below Threshold</a>




## Éviter les captcha

**Cible&nbsp;:** tout le monde en particulier, les personnes déficientes visuelles.  
**Quand&nbsp;:** lors de la conception et lors du développement.

**Description&nbsp;:**  
Les captcha sont souvent la source de difficultés pour les utilisateurs. Si la mise en place d’un système anti-spam ne peut être évitée, il est souhaitable de s’orienter vers une solution plus souple pour l’utilisateur&nbsp;: 

- Double authentification
- Champ de formulaire caché à laisser vide (technique du <span lang="en">honeypot</span>), non-visibles pour l’utilisateur
- Mise à disposition d’un support téléphonique afin de s’assurer que le client est une vraie personne
- Un contrôle permettant de s’assurer qu’une même combinaison <abbr>IP</abbr>/<i lang="en">User agent</i> ne tente pas de soumettre le formulaire plus de N fois par seconde.

Si aucune autre alternative n’est possible, il est indispensable de prévoir une alternative pour les captcha uniquement visuels ou sonores en proposant une  combinaison de captcha&nbsp;: un captcha  audio + visuel, des tests logiques (question dont la réponse est évidente, test  mathématique simple…) + captcha visuel classique...

Plus de détails sur [les Captchas](../../../articles/les-captchas-et-l-accessibilite/).

**Référence <abbr>WCAG</abbr>&nbsp;:**  
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#non-text-content">1.1.1 Non-text Content</a>
