---
title: "Améliorer l'accessibilité des QR Codes"
abstract: "Quelques recommandations pour rendre accessible les QR Code"
titleBeforeTag: true
date: "2022-09-13"
tags:
  - beginner
---

## Ils sont partout

Les QR Codes sont de plus en plus utilisés dans le monde physique sur les emballages, les vitrines, dans les musées. Mais également sur les sites Web, pour enrôler votre mobile dans certains processus qui nécessitent un smartphone. Là où le QR Code était réservé il y a quelques années aux utilisateurs avertis, l'intégration native des lecteurs de code dans les smartphones a démocratisé son utilisation.

Même si on imagine que les QR Codes ne sont pas sans poser de difficulté à certains utilisateurs (en particulier les déficients visuels), il s'agit néanmoins d'un moyen intéressant pour transmettre rapidement de l'information. En effet grâce à un QR Code sur un emballage, une personne malvoyante pourrait par exemple accéder à des informations sur le produit avec l'aide de son smartphone et de son lecteur d'écran.

## Quelques recommandations pour le numérique

Voici quelques recommandations pour faciliter l'utilisation d'un QR Code affiché dans une page web :
- Vérifier les contrastes des couleurs. Le QR code doit fournir un niveau de contraste suffisant pour être identifiable par l'utilisateur et pour être scanné facilement.
- Ne pas afficher un QR Code seul, accompagnez-le d'un verbe d'action pour prévenir et inciter l'utilisateur à l'utiliser (exemple : "scannez-moi", "télécharger l'application"...).
- Proposer des QR Code de grande taille. Ou mieux proposer l'affichage du QR Code en plein écran, ainsi le scan en sera facilité.
- Ajouter une alternative textuelle sur votre image de QR Code (attribut `alt`). Exemple : `<img src="qr-code.png" alt="QR Code à scanner pour télécharger l'application">`. L'alternative textuelle peut également contenir des informations sur l'emplacement. Exemple : "QR Code affiché au centre de l'écran permettant de télécharger l'application".
- Enfin si le QR Code permet d'accéder à des informations importantes ou fait partie d'une étape d'un processus, vous devez proposer une alternative permettant de réaliser cette étape d'une autre manière. Exemples : accompagner le QR Code d'un lien permettant d'effectuer l'étape, proposer à l'utilisateur de recevoir un email ou un SMS avec un lien permettant d'effectuer cette étape sur son smartphone sans avoir à utiliser le QR Code.

<figure style="text-align: center;">
  <img class="img-fluid" style="max-width: 250px" src="../images/qr-code/qr-code.png" alt="qr code pour consulter le site des recommandations accessibilité Orange">
  <figcaption>Scanner le QR Code pour <a href="https://a11y-guidelines.orange.com/">consulter le site des recommandations accessibilité Orange</a></figcaption>
</figure>