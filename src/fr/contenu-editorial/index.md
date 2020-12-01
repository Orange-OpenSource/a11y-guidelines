---
title: "Recommandations éditoriales générales"
---

# Recommandations éditoriales générales

## Introduction
Cette section présente des recommandations générales à respecter pour garantir l’accessibilité de vos contenus quel que soit le support utilisé (email, PPT, PDF, Word, etc.).

## Vérifier les couleurs

* S’assurer que [la couleur n’est pas le seul moyen utilisé pour communiquer l’information](/fr/web/designer/couleurs-et-contrastes/#ne-pas-utiliser-la-couleur-ou-linformation-sensorielle-comme-seule-source-dinformation).
* Assurer un niveau de [contraste suffisant entre la couleur du texte et celle de l’arrière-plan](/fr/web/designer/couleurs-et-contrastes/#assurer-un-contraste-suffisant-entre-les-couleurs-de-premier-plan-et-de-fond). Ceci est valable pour vos textes mais aussi pour les icônes, boutons et autres éléments graphiques porteurs d'information. Le contraste peut être vérifié à l’aide de l’outil [Colour Contrast Analyser](https://www.paciellogroup.com/resources/contrastanalyser/) par exemple :
  * 4.5:1 pour du texte de taille normale.
  * 3:1 pour du [texte de grande taille](/fr/glossaire/#texte-de-grande-taille) et les composants d'interface ou éléments graphiques porteurs d'informations.

## Faciliter la lecture

* Aligner les textes à gauche (éviter de justifier). 
* Mettre une majuscule à chaque début de phrase mais éviter les phrases entières en majuscule.
* Éviter l’italique.	
*	Utiliser des polices simples, sans serif : Arial, Calibri ou la <a href="https://opensource.orange.com/fr/category/actualites/ow2-fr/osai-fr/accessible_dfa-fr/">police Accessible DfA</a> ayant une taille au moins égale à 10 points.
*	Ajouter des accents aux majuscules éèêçàïùÉÈÊÇÀÏÙ («&nbsp;Insertion&nbsp;&gt; Symbole&nbsp;&gt; Texte normal&nbsp;» ou utiliser [les raccourcis clavier](#annexes)).
*	Mettre en place une ponctuation simple.
*	Éviter les fonds texturés (images).
* Ne pas faire de retours chariots répétés ou de tabulation pour espacer (mais la fonction «&nbsp;Paragraphe&nbsp;&gt; Espacement&nbsp;» ou «&nbsp;Retrait&nbsp;» dans Word, par exemple).
*	Éviter les tableaux de mise en page ou tableaux de données complexes (sauf en HTML si la [structure du tableau est accessible](/fr/web/developper/contenu-textuel/#structurer-les-tableaux-de-donnees)). 
*	Éviter le contenu «&nbsp;image&nbsp;» porteur d’information : graphes, schémas, diagrammes (sauf en HTML si une [alternative textuelle est accessible](/fr/web/designer/contenu-non-textuel/))
*	Utiliser des tournures de phrases limpides, des phrases courtes et à la construction simple&nbsp;: sujet, verbe, complément. Une idée par phrase.
*	Éviter au maximum les mots trop compliqués ou spécifiques à un domaine, et sinon, les expliquer.
*	Utiliser le présent, de préférence le style direct et la forme active (pas de subjonctif, pas de conjonction).
*	Utiliser les caractères typographiques du Français&nbsp;: tiret - , cadratin — , «&nbsp;guillemets français&nbsp;».
*	Éviter les termes dans une langue étrangère (mots en anglais), les sigles ou abréviations sauf ceux passés dans le langage courant.
*	Mettre en place un indicateur de fin de document (par exemple, une image indiquant «&nbsp;fin de mail&nbsp;», un texte blanc sur fond blanc «&nbsp;fin de document&nbsp;»).

## Mise en page avec des tableaux 

Sachant que les clients de messagerie (Outlook inclus) obligent encore parfois à utiliser une [mise en page en tableaux](/fr/contenu-editorial/emails/) : ajouter un `role="presentation"` à vos balises table afin que les synthèses vocales comprennent qu'il ne s'agit que de mise en forme.  


## Des tableaux de données accessibles

Afin que vos tableaux de données soient accessible, simplifiez-les au maximum dès leur conception : 
* Éviter d’imbriquer les tableaux les uns dans les autres (maximum 2 niveaux d’imbrication).
* Éviter de fusionner les cellules, d'utiliser trop de cellules vides, d'ajouter des images de fond.
* Assurer une lecture séquentielle (on doit pouvoir lire de gauche à droite et de haut en bas).

Et pour l'implémentation dans une page Web par exemple, consultez [notre article dédié aux tableaux de données accessibles](/fr/web/developper/contenu-textuel/#structurer-les-tableaux-de-donnees).

## Annexes
### Comment mettre des accents aux majuscules ?

Pour mettre des accents sur mac, il suffit de taper la lettre désirée par exemple « E » et laisser la touche enfoncée. Un menu contextuel apparait et permet de sélectionner la lettre accentuée désirée (É, È, Ë...), à noter qu'il est également possible d'utiliser des raccourcis clavier (cf. tableau ci-dessous).  

Sur Windows, les raccourcis clavier suivants permettent d'écrire des lettres majuscule accentuées quelle que soit l'application utilisée : 

<table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">Lettre</th>
      <th scope="col">raccourci Windows</th>
      <th scope="col">raccourci Mac</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">À</th>
      <td>Alt Gr + \` (touche 7) puis A majuscule</td>
      <td>Maj lock puis à</td>
    </tr>
    <tr>
      <th scope="row">Ç</th>
      <td>alt + 128</td>
      <td>Option + ç</td>
    </tr>
    <tr>
      <th scope="row">È</th>
      <td>Alt Gr + ` (touche 7) puis E majuscule</td>
      <td>Maj lock puis è</td>
    </tr>
    <tr>
      <th scope="row">É</th>
      <td>alt + 144</td>
      <td>Maj lock puis é</td>
    </tr>
    <tr>
      <th scope="row">Ê</th>
      <td>^ puis E majuscule </td>
      <td>^ puis E majuscule</td>
    </tr>
  </tbody>
</table>
