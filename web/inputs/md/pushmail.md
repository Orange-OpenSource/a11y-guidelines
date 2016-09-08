# Recommandations accessibilité pushmail Orange  

<script>$(document).ready(function () {
    setBreadcrumb([{"label":"Pushmails"}]);
});</script>


## Introduction : l'accessibilité des mails
Les mails au format texte et sans images, comme le sont les mails entre salariés, sont souvent accessibles. Le problème d'inaccessiiblité est plutôt le fait des pushmails. Ces mails, à la mise en forme évoluée (liens, mise en page complexe, illustrations, schémas), permettent la publication de quantité d'informations et sont un outil essentiel de la communication d'entreprise.

### Des solutions alternatives
Et si c’est complexe, 
pensez à proposer un lien redirigeant vers une page web
un lien de début de mail vers un word accessible

### Qui est impacté ?
- les personnes qui ne voient pas 
	- synthèse vocale
	- plage braille
- les personnes qui voient mal
	- malvoyant, âgé
	- contexte visuel contraint
- les personnes qui lisent avec difficulté 
	- autre langue maternelle
	- contraintes cognitives et illettrisme
- les personnes qui ont des difficultés à manipuler
- les personnes cumulant des difficultés légéres (senior)

## Les critères à respecter

### Considération générale

Ces critères sont génériques et présument pas de la manière de fabriquer les mails mais suppose que le contenu soit du html, seul format permettant une mise en page complexe. Pour les exemples utilisés dans ces recommandations, nous les avons mis en oeuvre dans Word qui semble être l'outil privilégié pour fabriquer les pushmails et les gabarits des newsletters, chez nous, Orange. Bien sûr, ces recommandations peuvent être appliquées dans n'importe quel outil permettant de fabriquer des mails.

### Simplifier la rédaction du contenu

**Pour qui : ** tout le monde et en particulier, les personnes déficientes visuelles, cognitives, avec des difficultés pour lire ou avec un déficit d'attention.  

**Description : **
Simplifier le rédactionnel pour tous les utilisateurs.

**À vérifier : **
S'assurer que le rédactionnel :
- Utilise des tournures de phrases limpides
    - des phrases courtes et à la construction simmple : sujet, verbe, complément
    - une idée par phrase
    - utiliser des mots simples et expliquer les mots compliqués
    - utiliser le présent
    - privilégier le style direct et la forme active (pas de subjonctif, pas de conjonctions)
- Ne contient pas de mots en anglais, de sigles ou abbréviations sauf ceux passés dans le langage courant 
- Utilise les caractères typographiques du Français  
    - Tiret - , cadratin —, « guillemets français »
    - Accents même aux majuscules (éèêçàïùÉÈÊÇÀÏÙ)

**Objectif : **
Permettre aux utilisateurs de comprendre facilement comprendre et interprêter le sens du contenu.

### Structurer sémantiquement le contenu

**Pour qui : ** tout le monde et en particulier, les personnes déficientes visuelles, cognitives, avec des difficultés pour lire ou avec un déficit d'attention.  

**Description : **
Donner une structure cohérente au contenu rédactionnel grâce à la mise en place :
- de titres (balises HTML `h1` jusqu'à `h6`) 
- de listes (balises HTML `ol`, `ul` et `li`) 

**À vérifier : **
- Les titres doivent être pertinents et non vides.
- Il ne doit pas exister de saut dans la hiérarchie des titres (on ne passe pas directement d'un titre `h2` à un titre `h4`).
- On peut mettre plusieurs `h1` par mail (se limiter tout de même à deux dans la majorité des cas).
- les listes doivent être de réelles liste de plusieurs éléments et bien différencier les listes ordonnées de celles qui ne le sont pas.

**Objectif : **
Permettre aux utilisateurs de facilement comprendre et hiérarchiser le contenu.

**Exemple : **
Word styles

### Simplifier la présentation

**Pour qui : ** tout le monde et en particulier, les personnes déficientes visuelles, cognitives, avec des difficultés pour lire ou avec un déficit d'attention.  

**Description : **
Simplifier la présentation du contenu et respecter les bonnes pratiques en terme de présentation. 

**À vérifier : **
Pour assurer une lecture facile :
- aligner texte à gauche mais ne pas le justifier
- Utiliser police de caractères facilement lisible en corps 12pt minimum
- Mettre  en place une ponctuation simple
- Ne pas mettre d’italiques, ni de phrases en majuscules mais une majuscule en début de phrase
- Éviter les de fonds texturés (images)
- Ne pas faire de retours chariots répétés ou de tabulation pour espacer (mais la fonction Paragraphe Espacement ou Retrait dans Word)
- Éviter les tableaux de mise en page ou de données
- Mettre en place un indicateur de fin de mail (par exemple, une image indiquant « fin de mail », un texte blanc sur fond blanc "fin de mail")

**Objectif : **
S'assurer que la présentation n'empêche pas l'accès au contenu et à sa compréhension.

### Donner une alternative aux images

**Pour qui : ** tout le monde et en particulier, les personnes déficientes visuelles ou cognitives.  

**Description : **
Mettre en place des alternatives textuelles à tous les éléments informatifs non-textuels (alternatives aux images, icones...). 
Mettre pour toute image (balise `img` en HTML) une alternative pertinente (un attribut `alt` en HTML) : 
- Pour les images cliquables : préciser la fonction / la cible du lien dans l’alternative,
- Pour les images porteuses d'information : mettre une alternative décrivant l'information contenue dans l'image
- Pour les images contenant du texte : mettre une alternative reprenant au moins le texte de l’image,
- Pour les images décoratives : mettre une alternative vide,
- Pour les images dont le contenu de l'alternative serait trop long (schémas, graphes...), mettre à proximité de l'image à décrire, sa description sous forme de texte dans le mail ou, un lien pointant vers une page html contenant cette description.

**À vérifier : **
Toute image doit posséder une  alternative qui ne reflette que le contenu informatif qu'elle porte.
Pour les graphes, la solution, peut être, de mettre un lien sous l'image permettant d'accéder à un tableau de chiffre en bas du mail, par exemple.
Une alternative doit être :
- Précise et équivalente au contenu de l'image ou sa fonction
- Succinte, quelques mots à deux phrases courte semble la bonne taille
- Pas redondante, ne pas fournir la même information que dans le texte environnant
- Pas de texte générique, pas besoin d'alternative du type "image de...", "graphique sur...", "lien vers...", ...

**Objectif : **
Permettre l'accès à l'information incluse dans une image pour des utilisateurs qui n'y ont pas accès.
Point bloquant : une image sans description textuelle est inexploitable par des personnes ayant des déficiences visuelles ou celles n'affichant pas les images (mobile, faible bande passante...).

**Exemple : **
word

### Spécifier la langue du mail et les changements éventuels

**Pour qui : ** les personnes déficientes visuelles.  

**Description : **  
Spécifier la langue principale du document (l'attribut `lang` et/ou `xml:lang` dans la balise `html`). 
Préciser également la langue d'un contenu exprimé dans une langue autre que la langue principale (l'attribut `lang` et/ou `xml:lang` dans l'élément html contenant l'expression en langue étrangère).  

**À vérifier : **
Pour les mots ou les expressions en langue étrangère passés dans l'usage courant (Google, newsletter...) ou les noms propres, ne pas indiquer de changement de langue.

**Objectif : **
Cette indication permet d'adapter la synthèse vocale pour une bonne prononciation de la langue à utiliser.

**Exemple pour une page en français : **  
Word !!!!!!!!!!!!!!!!
- pour du HTML : `<html lang="fr">`
- pour du XHTML : `<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="fr" lang="fr">`

**Exemple de changement de langue : **  
`découvrir Orange <span lang="fr">live</span> TV`

### Fournir une mise en page accessible

**Pour qui : ** les personnes déficientes visuelles.  

**Description : **  
Simplifier la mise en page bien que les clients de messagerie (Outlook inclus) obligent à utiliser une mise en page en tableau.

**À vérifier : **
- Globalement, ne pas utilliser de mise en page complexe (fusion de cellules d'un tableau, multicolonnage...), 
- Éviter d'imbriquer les tableaux de mise en page (grand maximum, 2 niveaux d'imbrication), mais aussi :
    - Ne pas fusionner les cellules d’un tableau mais utiliser plusieurs tableaux plus simples
    - Pas de cellules vides utiliser 
    - Pas d’images de fond 
- Assurer une lecture séquentielle (on doit pouvoir lire de gauche à droite et de haut en bas)
- Éviter les tableaux de données, les graphiques ou les schémas complexes

**Objectif : **
Permettre, notamment aux utilisateurs de lecteurs d'écran, de comprendre facilement le contenu quelque soit la mise en page utilisée.

### Rendre accessible les couleurs et le contraste

**Pour qui : ** tout le monde, en particulier, les utilisateurs sur mobile et tablette, les personnes malvoyantes, éprouvant des difficultés de lecture ou avec un déficit d'attention et les seniors.   

**Description : **  
- Le niveau de contraste entre le texte et l'arrière-plan, doit être suffisamment élevé.
- Ne pas utiliser la couleur ou une information sensorielle (forme, taille, son, orientation, localisation visuelle...) comme la seule façon de véhiculer de l'information, d'indiquer une action, de solliciter une réponse ou de distinguer un élément.

**Objectif : **
Un niveau de contraste insuffisant sera préjudiciable pour les utilisateurs ayant des difficultés visuelles ainsi que pour les utilisateurs de mobiles et tablettes se trouvant dans un environnement très lumineux.
De même, utiliser des informations sensorielles (forme, taille, son, orientation, localisation visuelle...) seules sans alternative empêche, ceux qui ne peuvent les interprêter, d'agir efficacement voire d'agir tout simplement. 

**Outil : **  
L'application [colour contrast analyser](http://www.paciellogroup.com/resources/contrastanalyser/) permet de mesurer rapidement des niveaux de contraste de couleurs (gratuit pour mac et windows).  

### Identifier les liens et leurs cibles

**Pour qui : ** tout le monde, en particulier, pour les malvoyants, les non-voyants, les difficultés de lecture.

**Description : **
Rendre les liens identifiables et compréhensibles hors contexte

**À vérifier : **
- Souligner les liens, parce que sinon, les personnes doivent faire un effort cognitif pour savoir où ils pourraient bien se trouver, et les personnes en situation de contrainte motrice ne peuvent les trouver qu’en naviguant davantage.
- Ne pas utiliser des intitulés comme "Cliquez ici", "Pour en savoir plus", "Suivez ce lien", "Plus de détails", "Lire la suite", mais des intitulés qui identifient  bien leur cible
- Indiquer l’ouverture de toute nouvelle fenêtre (adresse e-mail, site internet…) en rajoutant à l'intitulé du texte, par exemple "nouvelle fenêtre" car le multifenêtrage qui peut être déjà troublant pour un voyant est tout simplement bloquant pour un non-voyant.

**Objectif : **
Permettre à un utilisateur n'ayant pas accès au contexte visuel de connaître la destination du lien. Notamment important pour les utilisateurs naviguant grâce à une liste de liens extraite de la page (lecteurs d'écran) ou les utilisateurs de loupe logicielle qui ne voient qu'une fraction de la page. 

### Word et accessibilité, quelques liens

- http://www.webaim.org/techniques/word/ 
- https://support.office.com/en-us/article/Creating-accessible-Word-documents-D9BF3683-87AC-47EA-B91A-78DCACB3C66D
- http://www.anysurfer.be/fr/en-pratique/documents/word

<!--  This file is part of a11y-guidelines | Our vision of mobile & web accessibility guidelines and best practices, with valid/invalid examples.
 Copyright (C) 2016  Orange SA
 See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). -->