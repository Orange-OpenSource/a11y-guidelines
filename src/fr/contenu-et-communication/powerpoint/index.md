---
title: "Créer des présentations PowerPoint accessibles"
abstract: "Quelques recommandations pour créer des documents Powerpoint accessibles"
---

# Créer des présentations PowerPoint accessibles

Produire une présentation PowerPoint accessible nécessite de respecter ces différentes recommandations : 

## Masques de diapositive
Définir des masques de diapositives est la première chose à faire  et une condition sine qua none pour créer une présentation homogène et accessible.

<img alt="" src="/fr/contenu-et-communication/images/image-masque-de-diapo.png" class="img-fluid">


- Ouvrir le mode Masque des diapositives pour mettre en forme vos diapositives (dans l’onglet `Affichage`, sélectionner `Masque des diapositives`).
- Utiliser les sous-menus `Mise en pages du masque` et `Insérer un espace réservé`.
- Éviter d’ajouter des Zones de texte ou des Images directement dans la présentation via le menu `Insertion`.
-	Prévoir un thème général des masques accessible : 	
<img alt="" src="/fr/contenu-et-communication/images/image-theme.png" class="img-fluid">
- Créer autant de masques que de types de diapositives nécessaires.
<img alt="" src="/fr/contenu-et-communication/images/masques.png" class="img-fluid">



-	Couleurs accessibles cf. ci-dessous chapitre « couleur »
-	Polices accessibles cf. ci-dessous chapitre « mise en forme » 
-	Éviter de mettre des effets 



-	Bien choisir une couleur « du thème » pour chaque texte. 

<img alt="" src="/fr/contenu-et-communication/images/Image-couleur-theme.png" class="img-fluid">



Remarque : Si vous modifiez le masque des diapositives ou les mises en pages après avoir créé les différentes diapositives, vous devrez réappliquer les mises en page modifiées aux diapositives existantes de votre présentation en mode Normal.

## Attributs de la présentation 

### La langue

Pour qu’un lecteur d’écran puisse restituer correctement le contenu de votre présentation :  
- La langue principale doit être définie dans le menu : `Fichier > Options > Langue`.
- Tout changement de langue ponctuel doit être signalé en sélectionnant le groupe de mots concerné puis `Révision > Langue > Définir la langue de vérification`.

## Titre des diapositives

Pour éviter toute confusion entre des diapositives, notamment si l’utilisateur parcourt une présentation à l’aide d’un lecteur d’écran :  
donner un titre spécifique à chaque diapositive, à insérer dans la zone : « Cliquer pour ajouter un titre ».

## Rédaction des contenus

Limiter les abréviations et acronymes, et expliciter à la première occurrence ceux qui ne font pas partie du langage courant.

## Mise en forme des contenus

Utiliser une police de caractères sans serif (sans empattement comme c’est le cas d’Arial, Calibri et Helvetica). Privilégier une taille de 12 points minimum pour du texte (corps) et de 18 points pour les titres.
Commencer les phrases par une majuscule et éviter les phrases entièrement écrites en majuscules.

Conserver l’accentuation sur les majuscules À, É, È, Ê, Ï, Ô, Ù, Ç ; Cocher l’option « Majuscules accentuées en français » dans le menu `Fichier > Options > Vérification`
Éviter de justifier le texte et privilégier l’alignement à gauche.

Ne pas utiliser de retour chariot ou de tabulation pour espacer des paragraphes, utiliser les options disponibles via un `clic droit > Paragraphe > Retrait et Espacement`.

<img alt="" src="/fr/contenu-et-communication/images/paragraphe.png" class="img-fluid">  &nbsp;

## Couleurs et contrastes 

Assurer un niveau de [contraste suffisant entre la couleur du texte et celle de l’arrière-plan](/fr/web/designer/couleurs-et-contrastes/#assurer-un-contraste-suffisant-entre-les-couleurs-de-premier-plan-et-de-fond). Ceci est valable pour vos textes mais aussi pour les icônes, boutons et autres éléments graphiques porteurs d'information. Le contraste peut être vérifié à l’aide de l’outil [Colour Contrast Analyser](https://www.paciellogroup.com/resources/contrastanalyser/) par exemple :
* 4.5:1 pour du texte de taille normale.
* 3:1 pour du [texte de grande taille](/fr/glossaire/#texte-de-grande-taille) et les composants d'interface ou éléments graphiques porteurs d'informations.

S’assurer que [la couleur n’est pas le seul moyen utilisé pour communiquer l’information](/fr/web/designer/couleurs-et-contrastes/#ne-pas-utiliser-la-couleur-ou-linformation-sensorielle-comme-seule-source-dinformation).
Certaines personnes ne perçoivent pas ou mal les couleurs, il est donc primordial d’utiliser un moyen suppléant la couleur pour véhiculer l’information.

<figure>
  <img src="/fr/contenu-et-communication/images/color-ko.png" alt="" />
  <figcaption><strong>Exemple incorrect</strong> : l'information est transmise uniquement par la couleur.</figcaption>
</figure>
  
&nbsp;

<figure>
  <img src="/fr/contenu-et-communication/images/color-ok.png" alt="" />
  <figcaption><strong>Exemple correct</strong> : l'information est transmise par la forme et la couleur.</figcaption>
</figure>

## Listes à puces ou numérotées  
Éviter de créer manuellement des listes, utiliser le style « liste » (à puces ou numérotées) pour énumérer les éléments de même nature.

<img alt="" src="/fr/contenu-et-communication/images/puce.png" class="img-fluid">  &nbsp;

## Images
Un document peut contenir des images et être accessible, il faut simplement que l’information portée par l’image soit retranscrite textuellement. 
- **Pour les images porteuses d’informations** : associer un texte de remplacement décrivant le contenu informatif via un `clic droit > Modifier le texte de remplacement`.
- **Pour les images décoratives/illustratives** : cocher `marquer comme décoratif`.
- **Pour les images informatives complexes** : rédiger un court texte de remplacement et une description détaillée située à proximité de l’image (ou accessible via un lien). Exemple disponible dans [le guide du concepteur RGAA](https://disic.github.io/guide-concepteur/1-images.html#exemple-dune-image-complexe-avec-une-description-d%C3%A9taill%C3%A9e)

 <img alt="" src="/fr/contenu-et-communication/images/Image-alt-text.png" class="img-fluid">

Pour les graphiques ou schémas : utiliser les composants `SmartArt` plutôt que des images (menu `Insertion > SmartArt`).  
Le contenu informatif des graphiques doit être décrit dans le texte de remplacement (`clic droit > modifier le texte de remplacement`). 

## Liens
Une personne non-voyante va, pour naviguer plus rapidement dans un document, demander à son lecteur d’écran de lui lire l’ensemble des liens présents sur une page. Chaque lien sera donc lu en dehors de son contexte visuel et doit donc se suffire à lui-même : 
* Rédiger des intitulés de liens explicites (compréhensibles hors contexte visuel de la page). 
Ouvrir la pop-up "Insérer/Modifier un lien hypertexte". Dans le champ "Texte à afficher", saisir le texte qui doit apparaître pour votre lien hypertexte. Saisir dans info-bulle le texte à afficher quand l’utilisateur pointe sur le lien hypertexte (facultatif).
<img alt="" src="/fr/contenu-et-communication/images/Image-info-bulle.png" class="img-fluid">  &nbsp;
* Annoncer les liens qui déclenchent l’ouverture d’une nouvelle fenêtre (ajouter « nouvelle fenêtre » dans le libellé).
* Pour chaque fichier téléchargeable, indiquer le nom, le format, le poids et la langue du fichier si celle-ci est différente de la langue principale du document.

## Tableaux de données / tableaux de présentation 
La structure des tableaux doit être le plus simple possible : 
* Éviter de fusionner des cellules, d’insérer des images ou de laisser des cellules vides.
* Ajouter une description s'il s'agit d'un tableau complexe : `clic droit > Modifier le texte de remplacement`
*	`Ne pas insérer une capture d’écran (ou image) d’un tableau Excel`. Depuis Excel, sélectionner un tableau bien identifié en tant que tel, le copier et le coller dans Powerpoint en conservant la mise en forme source.

**Important :** Ne pas utiliser les tableaux à des fins de mise en forme.

## Contenus audio ou vidéo
La communication audiovisuelle est aujourd’hui très fréquente en entreprise. Mais parce que certaines personnes peuvent ne pas voir ou ne pas entendre il est primordial de suppléer l’information transmise dans une modalité par une autre :
* Fournir une transcription intégrale des contenus audio (solution nécessaire et suffisante).
* Empêcher toute lecture automatique de contenu vidéo ou audio (menu `Animations` : démarrer au clic).

<img alt="" src="/fr/contenu-et-communication/images/video.png" class="img-fluid">  &nbsp;

Tout contenu vidéo doit respecter ces prérequis :

`Sous-titrage` : contenu textuel synchronisé avec la vidéo donnant accès à la totalité de ce qui est exprimé en audio (dialogue, bruit, musique…)

`Audiodescription` : narration ajoutée pour décrire les détails visuels essentiels à la compréhension de la vidéo (actions, personnages, décors…)

`Transcription` : version textuelle reprenant la totalité de l’information du contenu

**Les exigences selon le type de contenu :**


<div class="table-responsive">
    <table class="table">
        <caption class="visually-hidden">Quelles sont les exigences selon le type de contenu?</caption>
        <tr>
            <th class="bg-600" scope="col">Type de contenu</th>
            <th class="bg-600" scope="col">Sous-titrage</th>
            <th class="bg-600" scope="col">Audio description</th>
            <th class="bg-600" scope="col">Transcription</th>
        </tr>
        <tr>
            <th class="bg-600" scope="row">Audio</th>
            <td>Pas obligatoire</td>
            <td>Pas obligatoire</td>
            <td class="bg-supporting-green">Obligatoire</td>
        </tr>
        <tr>
            <th class="bg-600" scope="row">Vidéo</th>
            <td class="bg-supporting-green">Obligatoire</td>
            <td class="bg-supporting-green">Obligatoire si présence d'infos uniquement visuelles</td>
            <td class="bg-supporting-green">Obligatoire si la vidéo contient des éléments interactifs</td>
        </tr>
    </table>
</div>


Consultez [nos recommandations sur les contenus audio et vidéo](/fr/contenu-et-communication/composants-animes/) pour en savoir plus.


## Convertir une présentation PowerPoint en fichier PDF

Après avoir vérifié l'accessibilité de votre présentation (voir la rubrique [Tester l'accessibilité d'une présentation PowerPoint](/fr/contenu-et-communication/powerpoint/tester/)), vous pouvez convertir la présentation en <abbr>PDF</abbr> : `Fichier > Enregistrer sous` et de sélectionner le type de fichier <abbr>PDF</abbr>.
Cocher la case « Balises de structure de document pour l'accessibilité ».

<img alt="" src="/fr/contenu-et-communication/images/imagepdf.png" class="img-fluid">  &nbsp;


## Conseils pour une présentation orale

Exprimer oralement tout ce qui est transmis visuellement. Vous pouvez activer le sous-titrage dans « Sous-titre en direct » dans le menu Diaporama. Si besoin, prévoir un système de vélotypie(méthode de transcription en temps réel) et/ou une interprétation des signes.

Remarque : pour les présentations de plus de 50 diapositives, il faut conseiller aux lecteurs de modifier le paramètre suivant dans Adobe :
`Édition > Préférences > Lecture > Option de lecteur d’écran` : « Lire l’intégralité du document »

<img alt="" src="/fr/contenu-et-communication/images/adobe.png" class="img-fluid">  &nbsp;

Pour vérifier l’accessibilité d’un document PDF, consultez la [rubrique PDF accessible de notre site](/fr/contenu-et-communication/pdf/).

## Ressources

- [Créer des documents bureautiques accessibles](https://disic.github.io/guides-documents_bureautiques_accessibles/html/), <abbr title="direction interministérielle du numérique et du système d’information et de communication">DINSIC</abbr> (français).
- <a href="https://webaim.org/techniques/powerpoint/" hreflang="en">Accessibilité PowerPoint, WebAIM</a> (anglais).
