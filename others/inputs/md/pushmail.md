# Concevoir des mails accessibles à tous  

<script>$(document).ready(function () {
    setBreadcrumb([{"label":"Concevoir des mails accessibles à tous"}]);
});</script>

Voici une liste de recommandations pour écrire des messages compréhensibles par tous, que le destinataire utilise ou non des technologies d’assistance.

## Les mails « du quotidien »
### Qu’est ce qui peut poser problème d’un point de vue accessibilité ?
- Les images
- Les polices, couleurs et styles utilisés
- Les tableaux de mise en forme
- Les liens

## À noter
Si votre communication contient beaucoup d'informations et que sa mise en page nécessite d’être complexe : 
- créer le mail avec la méthode qui vous est la plus simple, 
- ajouter en pièce jointe un fichier Word accessible (ou fichier texte) contenant le même niveau d’information mais sous forme textuelle uniquement, 
- ajouter une alternative textuelle précisant que l'équivalent textuel est contenu dans la pièce jointe. 


## Les mails « du quotidien »
Pour tous vos mails du quotidien : 
- Utiliser des polices simples, sans serif : Arial, Calibri ou Accessible DfA
- Adopter une taille de police au moins égale à 10 points
- Conserver l’accentuation sur les lettres majuscules, voir [comment mettre des accents aux majuscules ?](./editorial.html#annexes) ou suite Office : menu **Insertion > Symbole**
- Mettre une  majuscule à chaque début de phrase mais éviter les phrases entières en majuscule
- Aligner les textes à gauche (éviter de justifier) 
- Éviter l’italique 
- Vérifier le contraste entre la couleur de police et l’arrière-plan ([outil Colour Contrast Analyzer](https://developer.paciellogroup.com/resources/contrastanalyser/)) et limiter le nombre total de couleurs utilisées
- Utiliser un fond neutre : pas de papier à lettre décoratif ni d’images d’arrière-plan
- Renseigner un texte de remplacement pour toutes les images (ou alternative textuelle, suite Office : **clic droit** sur l’image **> Format de l’image > Texte de remplacement >** champ **« Description »**) 
- Utiliser les styles « Titre » et « Sous-titre » du menu « format du texte » si mail long, avec plusieurs sections
- Transcrire les émoticônes, exemple : [smiley clin d’oeil] à la place de « ;) »
- Éviter les animations, les GIFs et les flashs 
- Rédiger des libellés de liens explicites, exemple : préférer « découvrez nos offres » à « cliquer ici » ou « en savoir plus »
- Utiliser les fonctions « Retrait, Espacement » pour sauter des lignes, exemple suite Office : Menu Mise en page > Paragraphe > Retrait ou Espacement ou Clic droit : « Paragraphe… »)
- Vérifier que la taille des boutons et des zones cliquables est suffisante (1cm de côté)
- Paramétrer votre outil mail : format HTML par défaut, exemple Outlook : Fichier > Options > Courrier > Composition des messages 

## Les Pushmails 

Plusieurs options s’offrent à vous pour créer un Pushmail accessible.

### Création à partir d’un document Word
1. Créer un document Word accessible en suivant [les recommandations Word](./word.html).
2. Puis utiliser l’option « Envoyer au destinataire du message ».  

Option à ajouter la première fois via Fichier > Option > Barre d’outils accès rapide > Envoyer au destinataire du message. 
<img alt="capture d'écran : paramétrer Word pour envoi de message à un destinataire" src="./images/email1.png">

### Création à partir de « Mes Pushmails » (SPIP)

L’outil fournit des gabarits nativement accessibles (à condition d’ajouter du texte de remplacement pour les images) ce qui n’empêche pas de suivre [les recommandations générales](./editorial.html) pour le contenu éditorial.

<img alt="capture d'écran de l'outil mes Pushmails" src="./images/email2.png">

### Création à partir d’HTML (ou autre outil dédié)

Composer le code HTML de façon accessible en suivant [les principales recommandations Web](https://a11y-guidelines.orange.com/web/index.html).  
Important : compte tenu des problématiques d’interprétation des multiples clients mail, la mise en page devrait plutôt être faite via des tableaux (en utilisant role=presentation dans la balise table). 

## Liens utiles

- [Tuto Office mails accessibles](https://support.office.com/fr-fr/article/vid%C3%A9o-am%C3%A9liorer-l-accessibilit%C3%A9-des-e-mails-ebf3730a-18f8-4b57-81d1-730086231775)
- [Guide le l’accessibilité des mails (anglais)](https://webdesign.tutsplus.com/tutorials/a-beginners-guide-to-email-accessibility--cms-31240)
- [Guide Litmus : mails accessibles (anglais)](https://litmus.com/blog/ultimate-guide-accessible-emails)
- [Taille idéale des zones cliquables (anglais)](https://www.smashingmagazine.com/2012/02/finger-friendly-design-ideal-mobile-touchscreen-target-sizes/)
- [Taille des boutons interface tactile](https://www.ludotic.com/quelle-taille-boutons-sur-une-interface-tactile/)
- [Police Accessible DfA](http://c-rnt.apf.asso.fr/2019/01/07/accessible-dfa-une-police-open-source-concue-par-orange/)

<!--  This file is part of a11y-guidelines | Our vision of mobile & web accessibility guidelines and best practices, with valid/invalid examples.
 Copyright (C) 2016  Orange SA
 See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). -->