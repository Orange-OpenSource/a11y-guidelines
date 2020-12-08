---
title: "Concevoir des mails accessibles à tous"
---

# Concevoir des mails accessibles à tous

Voici une liste de recommandations pour écrire (ou produire des templates qui permettent de générer) des messages accessibles, c’est-à-dire, compréhensibles par tous.

## Qu’est ce qui peut poser problème d’un point de vue accessibilité ?
Principalement : 
- Les images
- Les polices, couleurs et styles utilisés
- Les tableaux de mise en forme
- Les liens
- Les pièces jointes 

## À noter 
Si votre communication contient beaucoup d'informations et que sa mise en page nécessite d’être complexe : 
-	Créer le mail avec la méthode qui vous est la plus simple, 
-	Ajouter en pièce jointe un [fichier Word accessible](/fr/contenu-editorial/word/) (ou fichier texte) contenant le même niveau d’information mais sous forme **textuelle uniquement**, 
-	Ajouter une alternative textuelle précisant que l'équivalent textuel est contenu dans la pièce jointe. 

## Les mails du quotidien 
Pour tous vos mails du quotidien : 
- Utiliser des polices simples, sans serif : Arial, Calibri ou la [police Accessible DfA](https://opensource.orange.com/fr/category/actualites/ow2-fr/osai-fr/accessible_dfa-fr/)
-	Adopter une taille de police au moins égale à 10 points
- Conserver l’accent des lettres en majuscule, voir [comment mettre des accents aux majuscules](/fr/contenu-editorial/#comment-mettre-des-accents-aux-majuscules) ? ou suite Office : menu **Insertion** > **Symbole**
- Mettre une  majuscule à chaque début de phrase mais éviter les phrases entières en majuscule
- Aligner les textes à gauche (éviter de justifier) 
- Éviter l’italique 
- Vérifier le contraste entre la couleur de police et l’arrière-plan à l’aide de l’outil [Colour Contrast Analyser](https://www.paciellogroup.com/resources/contrastanalyser/) et limiter le nombre total de couleurs utilisées
- Utiliser un fond neutre : pas de papier à lettre décoratif ni d’images d’arrière-plan
- Renseigner un texte de remplacement pour toutes les images (ou alternative textuelle, suite Office : **clic droit** sur l’image > **Format de l’image** > **Texte de remplacement** > champ **« Description »**) 
- Utiliser les styles « Titre » et « Sous-titre » du menu « format du texte » si mail long, avec plusieurs sections
- Traduire les émoticônes, exemple : [smiley clin d’oeil] à la place du classique « ;) »
- Éviter les animations, les GIFs et les flashs 
- Utiliser les fonctions « **Retrait, Espacement** » pour sauter des lignes, exemple suite Office : **Menu Mise en page > Paragraphe > Retrait ou Espacement** ou **Clic droit : « Paragraphe… »**) 
- Rédiger des libellés de liens explicites, exemple : préférer « découvrez nos offres » à « cliquer ici » ou « en savoir plus » 
- Vérifier que la [taille des boutons et des zones cliquables](https://www.ludotic.com/quelle-taille-boutons-sur-une-interface-tactile/) est suffisante (1cm de côté)
- Paramétrer votre outil mail : format HTML par défaut, exemple Outlook : **Fichier > Options > Courrier > Composition des messages**
-	**Pièces jointes** : Utiliser la fonction « Insérer » pour ajouter une pièce jointe afin que le lecteur d’écran signale sa présence, elle apparaitra dans le champ « Attaché » 

## Les Pushmails / newsletters / communications automatiques

Plusieurs options s’offrent à vous pour créer un Pushmail accessible.

### Création à partir d’un document Word
1. Créer un document Word accessible en suivant [nos recommandations Word](/fr/contenu-editorial/word/).
2. Utiliser l’option « Envoyer au destinataire du message ».  

Option à ajouter la première fois via **Fichier > Option > Barre d’outils accès rapide > Envoyer au destinataire du message**. 

<img src="/fr/contenu-editorial/images/email1.png" width="400">

### Création à partir d’un outil de newsletter / mailing 
Il est tout à fait possible que l’outil que vous avez choisi fournisse des gabarits nativement accessibles mais cela n’empêche pas de suivre nos [recommandations générales pour le contenu éditorial](/fr/contenu-editorial/). 

Toujours vérifier : 
-	Alternatives textuelles des images,  
-	Titres de niveaux,  
-	Si tableaux de présentation : ajouter le role=presentation dans la balise `table`. 

### Création à partir d’HTML (ou autre outil dédié)

Composer le code HTML de façon accessible en suivant [les principales recommandations Web](/fr/web/developper/). 

**Important :** compte tenu des problématiques d’interprétation des multiples clients mail, la mise en page devrait plutôt être faite via des tableaux en utilisant l’attribut role=presentation dans la balise table.

Afin de tester ponctuellement la prise en charge de l’HTML et du CSS dans les différents clients mails, utilisez les sites [Can I email ?](https://www.caniemail.com/) et [Can I use in HTML emails ?](https://caniuse.email/).  
Afin de tester toute votre campagne mail, utiliser le site [Accessible email](http://www.accessible-email.org/)

## Liens utiles

- [Tuto Office mails accessibles](https://support.office.com/fr-fr/article/vid%C3%A9o-am%C3%A9liorer-l-accessibilit%C3%A9-des-e-mails-ebf3730a-18f8-4b57-81d1-730086231775)
- [Tester la prise en charge de l’HTML et du CSS sur les différents clients mails](https://www.caniemail.com/)
- [Sur quels clients mails tester en priorité (anglais)](https://emails.hteumeuleu.com/which-email-clients-should-you-test-on-b2a892e57606)
- [Guide le l’accessibilité des mails (anglais)](https://webdesign.tutsplus.com/tutorials/a-beginners-guide-to-email-accessibility--cms-31240)
- [Guide Litmus : mails accessibles (anglais)](https://litmus.com/blog/ultimate-guide-accessible-emails)
- [Taille idéale des zones cliquables (anglais)](https://www.smashingmagazine.com/2012/02/finger-friendly-design-ideal-mobile-touchscreen-target-sizes/)
- [Taille des boutons interface tactile](https://www.ludotic.com/quelle-taille-boutons-sur-une-interface-tactile/)
- [Police Accessible DfA](https://opensource.orange.com/fr/category/actualites/ow2-fr/osai-fr/accessible_dfa-fr/)
