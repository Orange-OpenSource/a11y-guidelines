# <abbr>HTML5</abbr> & <abbr>ARIA</abbr>

<script>$(document).ready(function () {
    setBreadcrumb([{"label":"<abbr>HTML5</abbr> & <abbr>ARIA</abbr>"}]);
});</script>

## Introduction



## Les critères de conception

### Guidage

#### Titre de la page

Chaque page doit avoir un titre qui lui est spécifique et qui reflète son contenu ou sa fonction.	

**Périmètre&nbsp;:** la page globalement

**Tester**
- Vérifier que le titre commence, en général, par le titre de la page courante puis et le nom du site. 
- Vérifier que l'onglet de la page comporte un texte pertinent,  bien renseigné par un titre et non par son adresse html, par exemple (NB : balise HTLM `<title>` ), par exemple&nbsp;: Accueil - Espace client Orange.


#### Titre des rubriques	
Il faut structurer le contenu d'une page à l'aide de titres.

**périmètre&nbsp;:** les titres, le texte 

**Tester**

- Vérifier que les titres des rubriques dans la page sont bien des titres, c'est-à-dire qu'ils sont hiérarchisés dans des balises HTML `h1` à `h6` et enchaînés logiquement (sans saut dans les niveaux).
- Vérifier également qu'ils sont pertinents en regard contenu.

##### Regroupement d'informations
Les items, données et informations de même nature et/ou liées sémantiquement (par exemple les liens de navigation) doivent être physiquement regroupées pour faciliter leur repérage et leur identification.

**périmètre&nbsp;:** la page globalement 

**Tester**

Vérifier que les informations de même nature sont regroupées dans les mêmes composants (la même page, la même zone dans la page, le même menu, …). Notamment, vérifier que le logo, le titre de l'application et les fonctions transverses (liens utilitaires type moteur de recherche, choix de la langue) sont placés en en-tête de page et que le plan du site, l'accès à l'aide ou la FAQ, les contacts et les mentions légales sont positionnés en pied-de-page.

#### Visibilité du focus	
La visibilité du focus est primordiale, pour des utilisateurs navigant au clavier (ou sans souris), cela leur permet de se déplacer dans la page à l'aide du clavier avec la touche de tabulation tout en visualisant l'élément actif (celui sur lequel ils se trouvent).	

**périmètre&nbsp;:** la page globalement 

**Tester**

Vérifier en navigant à l'aide de la touche TAB que le focus est suffisamment visible et bien contrasté sur tous les éléments le recevant (liens, boutons, éléments de formulaire).

#### Apparence des liens
Les liens hypertextes doivent être facilement repérables visuellement par l'utilisateur. 	

**périmètre&nbsp;:** les liens 

**Tester**

Vérifier que tous les liens dans la page sont soulignés ou sont mis en évidence via des indices visuels (contrasté suffisamment par rapport au corps du texte) et que ce soit toujours fait de manière homogène&nbsp;: flèche, chevron…

#### Libellés des liens	
Les liens hypertextes doivent être compréhensibles hors contexte visuel pour permettre, notamment à un utilisateur privé de ce contexte visuel (mal ou non voyant) de connaître la fonction ou la destination du lien. 

**périmètre&nbsp;:** les liens 

**Tester**

- Vérifier que les intitulés des liens donnent une information suffisante sur leur destination. 
- Vérifier également que dans une page des liens ayant le même libellé ne pointent pas sur des destinations différentes.

#### Navigation dans le menu	
L'utilisateur doit toujours savoir où il se trouve dans l'application.	

**périmètre&nbsp;:** les menus 

**Tester**

Vérifier que l'item ou la rubrique en cours de consultation est mise en évidence (exemple : mettre en surbrillance l'item de menu en cours de consultation). 

#### Retour à la page d'accueil	
L'utilisateur doit pouvoir retourner à la page d'accueil simplement. 	

**périmètre&nbsp;:** les menus, la navigation 

**Tester**

Vérifier que toutes les pages intérieures de l'application disposent d'un lien retour à la page d’accueil (à défaut un clic sur le logo de l’application doit ramener l'utilisateur à la page d'accueil).

#### Délai d'attente	
L'utilisateur doit être informé de toute opération système prenant plus de 3 secondes afin d'être rassuré et d'éviter des actions erronées. 	

**périmètre&nbsp;:** la page globalement, action du système 

**Tester**

Quand le système travaille (i.e. prend la main), vérifier que l'utilisateur est averti : 
- par une icône d’attente (chenillard) pour un délais compris entre 2 et 6 secondes, 
- par une barre de progression au delà de 6 secondes,  complétée d'une indication chiffrée et/ou une description de la tâche en cours 
-  par une barre de progression infinie si le temps est inconnu."

#### Contraste texte/fond	
Le niveau de contraste doit être suffisant pour garantir une lisibilité confortable du texte.	

**périmètre&nbsp;:** le texte, le texte sous forme d'image

**Tester**

Vérifier que le contraste entre la couleur du fond et celle du corps texte est de minimum 4.5:1. 
Pour les titres dont la taille de police est plus grande que le corps du texte, le contraste peut être ramené à 3:1.

Ceci est également valable pour du texte sous forme d'image porteur d'information. 

Note : le niveau de contraste peut-être mesuré avec l'outil [Color contrast analyser](http://a11y-guidelines.orange.com/web/methodes-outils-contrastes.html).

#### Police de texte 
Les textes doivent être en police Helvetica Neue (Brand Orange).

**périmètre&nbsp;:** le texte

**Tester**

Vérifier que les textes sont en police Helvetica Neue  et que du gras n'est pas utilisé dans le corps du texte.

#### Taille de texte	
La taille des textes ne doit pas être inférieure à 12 pixels.	

**périmètre&nbsp;:** le texte

**Tester**

Vérifier qu'aucun texte a une taille inférieure à 12 px (rendu écran), soit 9 points. 

#### Taille des titres	
La taille des titres ne doit pas être supérieure à 20 pixels. 

**périmètre&nbsp;:** le texte

**Tester**

Vérifier qu'aucun titre a une taille  supérieure à 20 px (rendu écran), soit 14 points.   

#### Libellés des champs de saisie	
Á la lecture du libellé, l'utilisateur doit savoir ce qu'il a à saisir dans le champ associé. 	

**périmètre&nbsp;:** les formulaires

**Tester**

Vérifier que chaque champ de saisie est accompagné d’un libellé permettant d’identifier le rôle du champ, le type de données et le format attendus. 

#### Positionnement des libellés de champ	
Un libellé doit être placé au plus près du champ auquel il se réfère. Quand plusieurs libellés se suivent, il doivent être tous justifiés à gauche ou tous justifiés à droite selon la taille du plus long libellé. 	

**périmètre&nbsp;:** les formulaires

**Tester**

Vérifier que les libellés sont placés à proximité de leur champ et sont tous justifiés :
- à gauche quand le libellé le plus long de la liste est inférieur ou égal à 6 caractères, 
- tous alignés à droite quand le libellé le plus long de la liste est supérieur à 6 caractères.

#### Alignement des données dans un tableau	
Les textes dans un tableau doivent être justifiés à gauche et les données quantitatives justifiées à droite. 

**périmètre&nbsp;:** les tableaux

**Tester**

Vérifier que dans tous les tableaux de l'application les textes sont justifiés à gauche dans les colonnes et les données quantitatives (i.e. valeur numérique) justifiées à droite.

#### Effet pyjama	
Un fond de couleur différente 1 ligne sur 2, facilite la lecture des tableaux multilignes et permet de discriminer le contenu tabulaire.

**périmètre&nbsp;:** les tableaux

**Tester**

Vérifier que dans les tableaux multilignes, 1 ligne sur 2 a un fond de couleur différente (exemple : fond gris clair #FAFAFA utilisé 1 ligne sur 2 => effet pyjama ou zébré). 

#### Présence d'éléments d'assistance	
Des éléments d'assistance (page d'aide, info bulle, FAQ, visite guidée,…) accompagnent l'utilisation de l'application. 	Vérifier que des éléments d'assistance (page d'aide, info bulle, FAQ, visite guidée,…) sont fournis à l'utilisateur, quand cela est nécessaire, pour l'accompagner dans l'usage de l'application.  

**périmètre&nbsp;:** l'aide utilisateur

**Tester**

Vérifier que des éléments d'assistance (page d'aide, info bulle, FAQ, visite guidée,…) sont fournis à l'utilisateur, quand cela est nécessaire, pour l'accompagner dans l'usage de l'application.  

#### Visibilité des éléments d'assistance	
L'information de guidage est toujours accessible. 	

**périmètre&nbsp;:** l'aide utilisateur

**Tester**

Vérifier que l'on a toujours accès aux éléments d'assistance (info bulle et légendes à proximité du composant concerné; lien vers la page d'aide toujours visible à l'écran…). 

#### Accès multiples et la localisation	
Il existe plusieurs moyens de situer et accéder à un contenu spécifique, ou localiser la page Web en cours de consultation.	

**périmètre&nbsp;:** les menus, la navigation

**Tester**

Vérifier que plusieurs systèmes permettent de situer la page courante et accéder à une page ou un contenu dans le site : un outil de recherche sur l’ensemble du site, un plan du site, un menu de navigation global, un fil d’Ariane…

#### Libellé d'un champ, d'un lien et d'un bouton d'action	
Les libellés des champs, des liens et des boutons d'action doivent être concis.	

**périmètre&nbsp;:** les formulaires, les boutons, les liens

**Tester**

Vérifier que les libellés des champs, des liens et des boutons d'action sont courts (taille maximum conseillée : 80 caractères).

#### Bouton d'action	
Un libellé de bouton d'action doit indiquer l'action à laquelle il renvoie. 	

**périmètre&nbsp;:** les boutons

**Tester**

- Vérifier que l'intitulé des boutons d'action indiquent clairement par un verbe, l'action à laquelle ils renvoient (ex : « imprimer » versus « impression »). 
- Vérifier également que dans une page (voire dans l'application ou le site) des boutons ayant le même libellé ne permettent pas des actions différentes.

#### Saisie unique de données	
Les données identiques doivent faire l'objet d'une seule saisie. 	

**périmètre&nbsp;:** les formulaires

**Tester**

Vérifier qu'une même donnée n'a pas besoin d'être saisie plusieurs fois par l'utilisateur (par exemple, ne pas demander la ressaisie d'une référence client dans une même séquence d'action). 

#### Système de navigation 	
Le système de navigation doit être simple. 	

**périmètre&nbsp;:** la navigation

**Tester**

Vérifier que le système de navigation (barre de menu par exemple) ne comprend pas plus de 7 sections en largeur (i.e. rubriques)  et que chaque section ne comprend pas plus de 4 sous-niveaux imbriqués en profondeur (N-1 < N-2 < N-3 < N-4).

#### Taille des menus	
Les menus doivent être composés au maximum de 7 items.  	

**périmètre&nbsp;:** les menus

**Tester**

Vérifier que la taille des menus ne dépassent pas 7 items. 
En cas de dépassement : 
- utiliser des séparateurs, et/ou sous-menus pour regrouper les items, ou,
- regrouper en haut de liste des items les plus utilisés, ou,
- proposer un champ libre avec réduction dynamique de la liste d'items (auto-complétion).

#### Valeur par défaut	
Quand cela est possible, des valeurs par défaut doivent être proposées à l'utilisateur pour le renseignement d'un champ.	

**périmètre&nbsp;:** les formulaires

**Tester**

Vérifier que des valeurs par défaut  sont proposées à chaque fois que le contenu est prévisible. Par exemple, une liste d'items à cocher plutôt qu'un champ de saisie libre. 

#### Ascenseur horizontal	
Aucun ascenseur horizontal ne doit apparaître sur les écrans.  	

**périmètre&nbsp;:** la page globalement, les modales

**Tester**

Vérifier que sur aucun écran et dans aucune boîte de dialogue un ascenseur horizontal n'est nécessaire pour visualiser l'information.

#### Ascenseur et pop-up 	
Il ne doit pas y avoir d'ascenseur dans les pop-up. 

**périmètre&nbsp;:** les modales

**Tester**
Vérifier qu'il n'y a pas d'ascenseur dans les pop-up. Le contenu d'une pop-up doit par essence être court.


<!--  This file is part of a11y-guidelines | Our vision of mobile & web accessibility guidelines and best practices, with valid/invalid examples.
 Copyright (C) 2016  Orange SA
 See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). -->