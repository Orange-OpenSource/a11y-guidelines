---
title: "Créer un fichier Excel accessible"
abstract: "Quelques recommandations concernant l'accessibilité d'Excel"
date: "2023-01-01"
---

# Créer un fichier Excel accessible

Créer un fichier Excel accessible nécessite de respecter plusieurs recommandations :

## Onglet de feuille

Donner un nom unique et explicite à chaque onglet de feuille de calcul (par défaut, le nom commence par "Feuil") et supprimer les feuilles vides.
<figure>
    <img src="/fr/contenu-et-communication/images/excel_feuille_wrong.png" alt="" class="img-fluid my-2" />
    <figcaption>
        <strong>Exemple incorrect : </strong> les onglets de feuille ont les noms par défaut (Feuil 1, Feuil 2 ...).
    </figcation>
</figure>

<figure>
    <img src="/fr/contenu-et-communication/images/excel_feuille_valid.png" alt="" class="img-fluid my-2" />
    <figcaption>
        <strong>Exemple correct : </strong> les onglets de feuille ont des noms unique et explicite (Janvier, Février ...).
    </figcation>
</figure>

## Plage de données et tableau

Définir explicitement les plages de données comme un tableau et prévoir des entêtes de ligne ou de colonne.

### Plage de données existante

Se placer sur la première cellule de la plage de données (la première cellule de la ligne d'entête s'il y en a une).

<ul>
    <li>Utiliser le menu Insertion > Tableau</li>
    <li>Vérifier la plage où se trouvent les données du tableau</li>
    <li>Cocher "Mon tableau comporte des en-têtes" si c'est le cas</li>
    <li>Valider "Ok"</li>
</ul>

<img src="/fr/contenu-et-communication/images/excel_tableau.png" alt="" class="img-fluid my-2" />

Puis éventuellement, sur l'onglet "création de tableau"

<ul>
    <li>Redimensionner le tableau : Propriétés > redimensionner</li>
    <li>Choisir les options de styles : à bandes, filtre ...</li>
    <li>Donner un nom au tableau</li>
</ul>

Remarques :

<ul>
    <li>Un tableau est surtout nécessaire quand il y a de nombreuses lignes et colonnes, et quand le contenu est plus compréhensible avec le rappel du titre de la colonne ou ligne, par exemple quand il y a des nombres.</li>
    <li>Un tableau ne peut pas avoir des cellules fusionnées.</li>
    <li>Pour savoir si une plage de données a été définie comme un tableau : se positionner sur une cellule : le menu "Insertion > Tableau" apparait grisé et l'onglet "Création de tableau" est visible.</li>
</ul>

<img src="/fr/contenu-et-communication/images/excel_tableau2.png" alt="" class="img-fluid my-2" />

### Création d'une nouvelle plage de données de type tableau 

<ul>
    <li>Utiliser le menu "Insertion > Tableau" ; Excel crée par défaut des titres "Colonne 1" ...</li>
    <li>Remplacer les en-têtes de colonnes : "Colonne 1", "Colonne 2" par un nom approprié</li>
</ul>

<img src="/fr/contenu-et-communication/images/excel_tableau3.png" alt="" class="img-fluid my-2" />

### Modification d'un tableau

<ul>
    <li>Se placer dans le tableau</li>
    <li>Menu "Création de tableau" > cocher "Ligne d'en-tête", "Première colonne" ...</li>
</ul>

### Autres recommandations pour les tableaux

<ul>
    <li>Évitez de laisser des cellules vides et d'insérer des images</li>
    <li>Ne pas coller un tableau Excel dans un fichier PowerPoint avec l'option de collage "image"</li>
</ul>

## Police, accentuation et langue

<ul>
    <li>Utiliser une police de caractères <strong>sans sérif</strong> (Arial, Calibri, Helvetica)</li>
    <li>Conserver les accents sur les lettres capitales : cocher <strong>l'option "Majuscules accentuées en français"</strong> dans le menu Fichier > Options > Vérification</li>
    <li>Vérifier l'orthographe et les majuscules accentuées via l'onglet "Révision" > Orthographe</li>
</ul>

<img src="/fr/contenu-et-communication/images/excel_police.png" alt="" class="img-fluid my-2" />

## Mise en forme des textes

<ul>
    <li>Aligner le texte à gauche, évitez de justifier, de centrer ou d'aligner à droite</li>
    <li>Ne pas écrire de phrase tout en majuscule et éviter l'italique</li>
    <li>Cocher "Renvoyer à la ligne automatique" sur les cellules : clic droit sur les cellules, Format de cellules, Alignement</li>
</ul>

## Couleurs et contrastes

<ul>
<li>

Assurer un contraste suffisant entre la couleur du texte et celle de remplissage

<img src="/fr/contenu-et-communication/images/excel_couleur.png" alt="Exemples de contrastes insuffisants entre des arrières-plans de couleurs pastel et un texte en blanc" class="img-fluid my-2" />

<img src="/fr/contenu-et-communication/images/excel_couleur2.png" alt="Exemples correctes de contrastes entre les mêmes couleurs pastel en arrière-plan mais un texte en noir" class="img-fluid my-2" />
</li>
<li>
Veiller à ce que la couleur ne soit pas le seul moyen pour transmettre une information.
Exemple 1: une valeur négative ne doit pas être indiquée par le seul moyen de la couleur rouge ; une solution est d’utiliser le signe ‘-‘   ou de mettre les valeurs négatives entre parenthèses.

<img src="/fr/contenu-et-communication/images/excel_couleur3.png" alt="" class="img-fluid my-2" />

Exemple 2 :

<img src="/fr/contenu-et-communication/images/excel_couleur4.png" alt="Répartition de ventes représentée sur un camembert avec la légende à droite du graphique et seulement la couler reliant un secteur de ventes à son pourcentage " class="img-fluid my-2" />

Une personne qui ne distingue pas les couleurs ne pourra pas relier un secteur et un pourcentage des ventes.

<img src="/fr/contenu-et-communication/images/excel_couleur5.png" alt="Répartition de ventes représentée sur un camembert où le pourcentage de ventes est visible à côté de chaque secteur." class="img-fluid my-2" />
</li>
</ul>

## Image, graphique et objet incorporé

Renseigner un texte de remplacement à toute illustration (image, forme, icône, SmartArt...), graphique ou fichier incorporé ; Sélectionner l’illustration > clic droit > Modifier le texte de remplacement.

<img src="/fr/contenu-et-communication/images/excel_image.png" alt="La fenêtre du texte de remplacement propose 2 zones : 1 champ pour saisir le texte de remplacement, 1 case à cocher pour marquer comme décoratif." class="img-fluid my-2" />

<ul>
    <li>Contenu porteur d’information : renseigner un texte de remplacement qui reprend l’information véhiculée par le contenu…</li>
    <li>Contenu décoratif/illustratif : cocher « marquer comme décoratif »</li>
    <li>Contenu lien : rédiger un texte de remplacement qui décrit la fonction ou la destination du lien</li>
    <li>Contenu informatif complexe : rédiger un texte de remplacement indiquant l’emplacement de la description détaillée. Celle-ci doit être équivalente à l’information transmise par l’image et doit être à proximité ou accessible via un lien. Exemple : préciser où se trouvent les données d’un graphique fait à partir d’un tableau.</li>
</ul>

## Lien hypertexte

Fournir des intitulés de liens explicites. Exemple : préférer « découvrez nos offres » à « cliquer ici » ou « en savoir plus ». Aller dans Menu > Insertion > Lien hypertexte, préciser le texte à afficher, l’adresse ou URL et éventuellement une info-bulle qui s’affichera au survol.

Pour chaque fichier téléchargeable, indiquer le nom, le format, le poids et la langue du fichier (si différente de celle du document).

<img src="/fr/contenu-et-communication/images/excel_lien.png" alt="" class="img-fluid my-2" />

## Enregistrement du fichier

Enregistrer toute version partagée en étant positionné sur la première feuille du fichier Excel.

## Conversion en PDF

Il est préférable de diffuser le document Excel au format PDF :

<ul>
    <li>Menu Fichier > Exporter > Créer un document PDF/XPS</li>
    <li>Dans « options… », Vérifier que « Balises de structure de document pour l’accessibilité » est coché (à faire une seule fois)</li>
    <li>Publier</li>
</ul>
