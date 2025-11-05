---
title: "Les bonnes pratiques pour les liens de téléchargement"
abstract: "Comment rendre accessible les liens de téléchargement"
titleBeforeTag: true
date: "2020-07-02"
updateDate: "2025-11-14"
tags:
  - web
  - intermediate
---


Il existe différents types de liens : [les liens classiques](/fr/web/developper/navigation-generale/) permettant d'atteindre une nouvelle page, [les liens d'évitement](/fr/articles/liens-evitement/) permettant de se déplacer au sein de la page et enfin ceux qui nous intéressent dans cet article : les liens permettant de télécharger un fichier.

Un lien permettant de télécharger un fichier devrait, à la fois, pour des raisons d'accessibilité et d'ergonomie, respecter les règles suivantes :

- son intitulé doit être explicite, il doit également préciser le type et le poids du fichier
- son intitulé doit préciser la langue du document lorsque celui-ci est rédigé dans une langue différente que celle de la page courante
- ce lien doit être réalisé à l'aide d'une balise `<a>` (et non une balise `<button>`)
- ce lien doit s'ouvrir dans la fenêtre en cours (pas d'attribut `target` pour ouvrir dans un nouvel onglet)

En plus de servir l'accessibilité et l'ergonomie, fournir ces informations permettra à l'utilisateur d'éviter un téléchargement inutile ce qui est également une bonne pratique eco-responsable.

## Exemples valides

Voici un exemple de lien présentant les informations nécessaires :  
  
Télécharger le <a href="#">bilan complet 2020 (PDF, 1,5 Mo)</a>.

Il est important que ces informations complémentaires soient présentes dans l'intitulé du lien et non juste après le lien (notamment pour les personnes qui utilisent un lecteur d'écran). Cela dit, pour des questions esthétiques, il est possible de faire en sorte que les informations complémentaires ne soient pas soulignées, exemple :  
  
Télécharger le <a href="#" style="text-decoration: none"><span style="text-decoration: underline">bilan complet 2020 </span>(PDF, 1,5 Mo)</a>

## À propos des unités

En anglais, les unités utilisées pour exprimer le poids des fichiers s'écrivent en lettres capitales (KB, MB, GB...). En Français, seul le préfixe est en majuscule (Ko, Mo...) 

## Langue du fichier

Pour les liens permettant de télécharger un document dans une langue autre que celle de la page courante, il est important de le préciser.  

Exemples de documents en anglais sur un site français :
- <a href="#"><span lang="en">Complete review</span> (Anglais, DOC, 800 Ko)</a>
- <a href="#"><span>Notice d'utilisation</span> (Anglais, PDF, 1.2 Mo)</a>

## Une petite image pour la déco, mais pas seulement

Si le type de fichier est connu, une petite icône à côté du fichier permet à l'utilisateur de le percevoir plus rapidement :
<a style="background-image: url(/images/icons/pdf-icon.svg); background-size: contain; background-repeat: no-repeat; padding-left: 2rem;" href="#">Bilan complet 2025 (PDF, 1,5 Mo)</a>
ou
<a href="#"><img src="/images/icons/pdf-icon.svg" alt="PDF file" width="16" height="16" /> Bilan complet 2025 (1,5 Mo)</a>
