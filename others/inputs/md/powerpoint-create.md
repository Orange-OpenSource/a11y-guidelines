# Créer des documents PowerPoint accessibles
<script>$(document).ready(function () {
    setBreadcrumb([
      {"label":"PowerPoint accessible", "url":"powerpoint.html"},
      {"label":"Créer un document accessible"},
      ]);
    addSubMenu([
      {"label":"Créer un document accessible","url":"powerpoint-create.html", "expanded": true}, 
      {"label":"Comment tester mon document","url":"powerpoint-test.html"}
    ]);
});</script>

<style>code {font-weight: bold;}</style>

<span data-menuitem="powerpoint"></span>

Produire un document PowerPoint accessible nécessite de respecter différentes recommandations. Elles sont synthétisées ci-après (guides détaillés consultables sur <a href="https://disic.github.io/guides-documents_bureautiques_accessibles/html/">le site de la <abbr title="direction interministérielle du numérique et du système d’information et de communication">DINSIC</abbr></a>).
Pour vous aider PowerPoint intègre un outil permettant de vérifier l’accessibilité d’une présentation. Cet outil identifie les principales erreurs et propose des solutions. N’hésitez pas à vous y référer. 

## Masques de diapositive
Définir des masques de diapositives est la première chose à faire  et une condition sine qua none pour créer une présentation homogène et accessible.
- Ouvrir le mode Masque des diapositives pour mettre en forme vos diapositives (dans l’onglet `Affichage`, sélectionner `Masque des diapositives`).
- Utiliser les sous-menus `Mise en pages du masque` et `Insérer un espace réservé`.
- Éviter d’ajouter des Zones de texte ou des Images directement dans la présentation via le menu `Insertion`.
- Créer autant de masques que de types de diapositives nécessaires.
<img alt="Captures d'écran relatives à la création d'un masque de diapositive dans poweroint" title="Captures d'écran relatives à la création d'un masque de diapositive dans poweroint" src="./images/masques.png" class="img-fluid">

Remarque : Si vous modifiez le masque des diapositives ou les mises en pages après avoir créé les différentes diapositives, vous devrez réappliquer les mises en page modifiées aux diapositives existantes de votre présentation en mode Normal.

## Attributs de la présentation 
### 1. La langue
Pour qu’un lecteur d’écran puisse restituer correctement le contenu de votre présentation :  
- La langue principale doit être définie dans le menu : `Fichier > Options > Langue`.
- Tout changement de langue ponctuel doit être signalé en sélectionnant le groupe de mots concerné puis `Révision > Langue > Définir la langue de vérification`.

### 2.	Les autres propriétés
Renseigner les champs « Titre », « Auteur » et « Mots clefs » dans la zone « Propriétés » (colonne de droite), accessible depuis le menu `Fichier > Informations`.  

<img alt="Capture d'écran, propriétés d'un document poweroint" title="Capture d'écran, propriétés d'un document poweroint" src="./images/attributs.png" class="img-fluid">

Ces informations accessibles à tous via un simple clic dans Windows sur un fichier (affichage dans la partie basse de la fenêtre de dialogue) ou via un clic droit dans `Propriétés`, pourront également être lues par un lecteur d’écran.

<img alt="Capture d'écran, propriétés d'un document poweroint dans l'explorateur Windows" title="Capture d'écran, propriétés d'un document poweroint dans l'explorateur Windows" src="./images/attributs2.png" class="img-fluid">  &nbsp;

## Titre des diapositives

Pour éviter toute confusion entre des diapositives, notamment si l’utilisateur parcourt une présentation à l’aide d’un lecteur d’écran :  
donner un titre spécifique à chaque diapositive, à insérer dans la zone : « Cliquer pour ajouter un titre ».

## Rédaction des contenus

Limiter les abréviations et acronymes, et expliciter à la première occurrence ceux qui ne font pas partie du langage courant.

Conserver l’accentuation sur les majuscules (exemple : É  ou Ç) pour qu’elles puissent être lues correctement par un lecteur d’écran ; pour ce faire :  utiliser le menu `Insertion > Symbole` ou les raccourcis clavier ci-dessous.
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

## Mise en forme des contenus
Utiliser une police de caractères sans serif (sans empattement comme c’est le cas d’Arial et Helvetica) en corps 12 pixels minimum. 
Commencer les phrases par une majuscule et ne pas abuser des phrases entièrement écrites en majuscules.
Eviter de justifier le texte et privilégier l’alignement à gauche.
Ne pas utiliser de retour chariot ou de tabulation pour espacer des paragraphes, utiliser les options disponibles via un `clic droit > Paragraphe > Retrait et Espacement`.

<img alt="Capture d'écran, fenêtre paragraphe, retrait et espacement dans powerpoint" title="Capture d'écran, fenêtre paragraphe, retrait et espacement dans powerpoint" src="./images/paragraphe.png" class="img-fluid">  &nbsp;

## Couleurs et contrastes 
1.	Assurer un contraste suffisant entre la couleur du texte et celle du fond :
 - 4.5:1 pour du texte de taille normale (12pts ou 16px).
 - 3:1 pour du texte de grande taille (150% minimum de la taille normale ou 120% si gras).
Si vous utilisez des combinaisons de couleurs différentes de celles préconisées par la charte Orange Groupe, téléchargez gratuitement l’outil <a href="https://developer.paciellogroup.com/resources/contrastanalyser/" lang="en">Colour Contrast Analyser</a> qui vous permettra de vérifier très simplement la qualité de vos contrastes.
2.	S’assurer que la couleur n’est pas le seul moyen utilisé pour communiquer l’information
Certaines personnes ne perçoivent pas ou mal les couleurs, il est donc primordial d’utiliser un moyen suppléant la couleur pour véhiculer l’information.

<figure>
  <img src="./images/color-ko.png" alt="Exemple d'image transmettant de l'information via des puces de couleur (rouge, vert...) pour indiquer l'état d'un élément" />
  <figcaption>**Exemple incorrect** : l'information est transmise uniquement par la couleur.</figcaption>
</figure>
  
&nbsp;

<figure>
  <img src="./images/color-ok.png" alt="Dans cet exemple, les puces ont été remplacées par des icones de forme différente (croix rouge, coche verte ...)" />
  <figcaption>**Exemple correct** : l'information est transmise par la forme et la couleur.</figcaption>
</figure>

## Listes à puces ou numérotées  
Eviter de créer manuellement des listes, utiliser le style « liste » (à puces ou numérotées) pour énumérer les éléments de même nature.

<img alt="Capture d'écran, option listes à puces dans powerpoint" title="Capture d'écran, option listes à puces dans powerpoint" src="./images/puce.png" class="img-fluid">  &nbsp;

## Images
Un document peut tout à fait contenir des images et être accessible à une personne non-voyante. Il faut simplement que l’information portée par l’image soit retranscrite textuellement. 
- **Pour les images porteuses d’informations** : associer un texte de remplacement décrivant le contenu informatif via un `clic droit > Format de l’image > Texte de remplacement > champ « Description »`.
- **Pour les images décoratives/illustratives** : laisser le champ `description` vide.
- **Pour les images informatives complexes** : rédiger un court texte de remplacement et une description détaillée située à proximité de l’image (ou accessible via un lien). Exemple disponible dans [le guide du concepteur RGAA](https://disic.github.io/guide-concepteur/1-images.html#exemple-dune-image-complexe-avec-une-description-d%C3%A9taill%C3%A9e)

 <img alt="Capture d'écran, de la fenêtre permettant de saisir un texte de remplacement sur une image dans powerpoint" title="Capture d'écran, de la fenêtre permettant de saisir un texte de remplacement sur une image dans powerpoint" src="./images/remplacement.png" class="img-fluid">

Pour les graphiques ou schémas : utiliser les composants `SmartArt` plutôt que des images (menu `Insertion > SmartArt`).  
Le contenu informatif des graphiques doit être décrit dans le texte de remplacement (`Format de l’objet ou de l’image > Texte de remplacement > Description`). 

## Liens
Une personne non-voyante va, pour naviguer plus rapidement dans un document, demander à son lecteur d’écran de lui lire l’ensemble des liens présents sur une page. Chaque lien sera donc lu en dehors de son contexte visuel  et doit donc se suffire à lui-même.

Rédiger des intitulés de liens explicites (compréhensibles hors contexte visuel de la page).

Annoncer les liens qui déclenchent l’ouverture d’une nouvelle fenêtre (ajouter « nouvelle fenêtre » dans le libellé).
<img alt="Capture d'écran, fenêtre modifier le lien hypertexte dans powerpoint" title="Capture d'écran, fenêtre modifier le lien hypertexte dans powerpoint" src="./images/lien.png" class="img-fluid">  &nbsp;

Pour chaque fichier téléchargeable, indiquer le nom, le format, le poids et la langue du fichier si celle-ci est différente de la langue principale du document.

## Tableaux de données
Les tableaux sont des composants par définition difficilement accessibles pour un non-voyant. Il faut donc les utiliser avec parcimonie et les structurer le plus simplement possible.
Ne pas utiliser les tableaux à des fins de mise en forme.
Éviter de fusionner des cellules, d’insérer des images ou de laisser des cellules vides.
Ajouter une description s'il s'agit d'un tableau complexe, clic droit : `Format de la forme > Texte de remplacement > Description`

## Contenus audio ou vidéo
La communication audiovisuelle est aujourd’hui très fréquente en entreprise. Mais parce que certaines personnes peuvent ne pas voir ou ne pas entendre il est primordial de suppléer l’information transmise dans une modalité par une autre.
Fournir une transcription intégrale des contenus audio (solution nécessaire et suffisante).
Empêcher toute lecture automatique de contenu vidéo ou audio (menu `Animations` : démarrer au clic).

<img alt="Capture d'écran, menu animation dans powerpoint" title="Capture d'écran, menu animation dans powerpoint" src="./images/video.png" class="img-fluid">  &nbsp;

Tout contenu vidéo doit respecter ces prérequis :
- Fournir des sous-titres pour restituer l’ensemble des informations véhiculées par la bande son.
- Fournir une audiodescription si la vidéo présente des informations accessibles seulement via les images.
- Utiliser des vidéos sans flashs rapides (pas plus de 3 clignotements par seconde).

## Ordre de lecture des éléments
L’ordre de lecture qui sera suivi par une synthèse vocale peut être vérifié depuis le volet de sélection (menu `Accueil > Organiser > Volet de sélection`).  
**Attention** : l’ordre doit être décroissant car c’est le dernier élément de la liste qui est lu en premier par le lecteur.

<img alt="Capture d'écran, du volet de sélection dans powerpoint" title="Capture d'écran, du volet de sélection dans powerpoint" src="./images/volet.png" class="img-fluid">  &nbsp;

Il est important de vérifier cet ordre directement dans les masques des diapositives.

## Vérificateur d’accessibilité intégré
Il est important de contrôler l’accessibilité de la présentation à l'aide du vérificateur d’accessibilité (menu : `Fichier > Vérifier la présence de problèmes > Vérifier l’accessibilité`).
<img alt="Capture d'écran, du vérificateur d'accessibilité dans powerpoint" title="Capture d'écran, du vérificateur d'accessibilité dans powerpoint" src="./images/verificateur.png" class="img-fluid">  &nbsp;

## Convertir une présentation PowerPoint en fichier PDF

Enregistrer la présentation en <abbr>PDF</abbr> : `Fichier > Enregistrer sous` et de sélectionner le type de fichier <abbr>PDF</abbr>.
Cocher la case « Balises de structure de document pour l'accessibilité ».

<img alt="Capture d'écran, fenêtre d'export en PDF dans powerpoint" title="Capture d'écran, fenêtre d'export en PDF dans powerpoint" src="./images/export.png" class="img-fluid">  &nbsp;

Remarque : pour les présentations de plus de 50 diapositives, il faut conseiller aux lecteurs de modifier le paramètre suivant dans Adobe :
`Édition > Préférences > Lecture > Option de lecteur d’écran` : « Lire l’intégralité du document »

<img alt="Capture d'écran de la fenêtre des préférences dans Adobe reader" title="Capture d'écran de la fenêtre des préférences dans Adobe reader" src="./images/adobe.png" class="img-fluid">  &nbsp;

Et pour vérifier l’accessibilité d’un document <abbr>PDF</abbr> : télécharger <a href="https://www.access-for-all.ch/en/pdf-lab/pdf-accessibility-checker-pac.html" lang="en">PDF Accessiblity Checker (PAC 3)</a>.

## Ressources

- [Créer des documents bureautiques accessibles](https://disic.github.io/guides-documents_bureautiques_accessibles/html/), <abbr title="direction interministérielle du numérique et du système d’information et de communication">DINSIC</abbr> (français).
- <a href="https://webaim.org/techniques/powerpoint/" hreflang="en">Accessibilité PowerPoint, WebAIM</a> (anglais).

<!--  This file is part of a11y-guidelines | Our vision of mobile & web accessibility guidelines and best practices, with valid/invalid examples.
 Copyright (C) 2016  Orange SA
 See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). -->