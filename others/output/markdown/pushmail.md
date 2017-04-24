# Recommandations accessibilité pushmail Orange  

<script>$(document).ready(function () {
    setBreadcrumb([{"label":"Pushmails"}]);
});</script>


## Introduction&nbsp;: l’accessibilité des mails
Les mails au format texte et sans image, comme souvent les mails entre salariés, sont accessibles. Le problème de non accessibilité est plutôt le fait des <i lang="en">pushmails</i>. Ces mails, à la mise en forme évoluée (liens, mise en page complexe, illustrations, schémas), permettent la publication de quantité d’informations et sont un outil essentiel de la communication d’entreprise.

### Des solutions alternatives
Et si la mise en page du <i lang="en">pushmail</i> est complexe, que l’on n’a pas la possibilité de rendre le <i lang="en">pushmail</i> accessible, il existe des solutions alternatives qui permettent aussi l'accès à tous&nbsp;:
- Proposer un lien en début de page redirigeant vers une page web, elle-même accessible
- Mettre en pièce jointe un fichier texte ou un fichier Word accessibles

## Les critères généraux

### Considération générale

Ces critères sont génériques et ne présument pas de la manière de fabriquer les mails, mais supposent que le contenu final soit du <abbr>HTML</abbr>, seul format permettant une mise en page complexe. Cependant, les logiciels de boite mail (Outlook,Thunderbird...) ne supportent différemment et que très partiellement les feuilles de style CSS avancée et pas du tout le Javascript. Il faut donc tester ces pushmails dans les logiciels et applications web de boite de mail afin de s'assurer du rendu final sur les cibles visées.
Nous utilisons, en interne Orange, pour composer les pushmails, Word, qui semble être l’outil privilégié pour fabriquer les <i lang="en">pushmails</i> et les gabarits des <i lang="en">newsletters</i>, mais nous avons également des outils de composition directe en HTML avec des gabarits prêt à l'emploi. Donc, nos recommandations se basent à la fois sur celles du web et celle de Word (traitement de texte) déjà existantes sur ce site.

Bien sûr, ces recommandations peuvent être appliquées dans n’importe quel outil permettant de fabriquer des mails.
En fonction de votre outil (HTML, traitement de texte type Word), il faut respecter le critère correspondant :
- aux [recommandations Word](./word.html)
- aux [incontournables HTML](../web/fondamentaux-tech.html),
Et en particulier :
- Structurer sémantiquement le contenu
- Spécifier la langue du mail et les changements éventuels
- Rendre accessibles les couleurs et le contraste

## Les critères spécifiques

### Fournir des marges homogènes
**Pour qui&nbsp;: ** Tous les utilisateurs.  

**Description&nbsp;: **  
S'assurer que dans tous les aplication de boite mail les marges des balises sémantiques sont homogènes.

**À vérifier&nbsp;: ** 
Les balises sémantiques `hx`, `p` et les listes `ul`, `ol` doivent avoir une marge nulle fixée en CSS (`style="margin:0"`).
Pour les titres `hx`, on rajoute, en plus la propriété CSS spécifique `mso-line-height-rule:exactly` pour que dans Outlook la hauteur de ligne soit fixe et cohérente.

`<h1 style="margin:0; mso-line-height-rule:exactly;">Titre</h1>
  <p style="margin:0;">Paragraphe</p>`

### Fournir une mise en page des tableaux accessible

**Pour qui&nbsp;: ** les personnes déficientes visuelles.  

**Description&nbsp;: **  
Simplifier les tableaux sachant que les clients de messagerie (Outlook inclus) obligent encore parfois à utiliser une mise en page en tableau.

**À vérifier&nbsp;: **  
- Globalement, ne pas utiliser de mise en page complexe de tableau (fusion de cellules d’un tableau, multicolonnage…) 
- Éviter d’imbriquer les tableaux de mise en page (grand maximum, 2 niveaux d’imbrication), mais aussi&nbsp;:
    - Ne pas fusionner les cellules d’un tableau, mais utiliser plusieurs tableaux plus simples
    - Pas de cellules vides
    - Pas d’images de fond 
- Assurer une lecture séquentielle (on doit pouvoir lire de gauche à droite et de haut en bas)
- Éviter les tableaux de données, mais aussi les graphiques ou les schémas complexes

**Important&nbsp;:* il faut mettre un attribut role="presentation" dans la balise `table` d'un tableau de présentation pour que la sémantique du tableau soit ignorée par les aides techniques.

**Objectif&nbsp;: **  
Permettre, notamment aux utilisateurs de lecteurs d’écran, de comprendre facilement le contenu sous forme de tableau quelle que soit la mise en page utilisée.

### Simplifier la présentation

**Pour qui&nbsp;: ** tout le monde, et en particulier les personnes déficientes visuelles, cognitives, avec des difficultés pour lire ou avec un déficit d’attention.  

**Description&nbsp;: **  
Simplifier la présentation du contenu et respecter les bonnes pratiques pour ce qui est de la présentation. 

**À vérifier&nbsp;: **  
Pour assurer une lecture facile&nbsp;:
- Aligner le texte à gauche, mais ne pas le justifier
- Utiliser une police de caractères facilement lisible en corps 12 pixels minimum
- Mettre  en place une ponctuation simple
- Ne pas mettre d’italique, ni de phrases en majuscules, mais une majuscule en début de phrase
- Éviter les fonds texturés (images)
- Ne pas faire de retours chariots répétés ou de tabulation pour espacer (mais la fonction «&nbsp;Paragraphe &gt; Espacement&nbsp;» ou «&nbsp;Retrait&nbsp;» dans Word)
- Éviter les tableaux de mise en page ou de données
- Éviter le contenu image porteur d'information : graphes, schémas, diagrammes...
- Mettre en place un indicateur de fin de mail (par exemple, une image indiquant«&nbsp;fin de mail&nbsp;», un texte blanc sur fond blanc «&nbsp;fin de mail&nbsp;»)

**Objectif&nbsp;: **
S’assurer que la présentation n’empêche pas l’accès au contenu et à sa compréhension.


### Simplifier la rédaction du contenu

**Pour qui&nbsp;: ** tout le monde et en particulier, les personnes déficientes visuelles, cognitives, avec des difficultés pour lire ou avec un déficit d’attention.  

**Description&nbsp;: **  
Simplifier le rédactionnel pour tous les utilisateurs.

**À vérifier&nbsp;: **  
S’assurer que le rédacteur utilise&nbsp;:
- Des tournures de phrases limpides
    - des phrases courtes et à la construction simple&nbsp;: sujet, verbe, complément
    - une idée par phrase
    - des mots simples et les mots compliqués doivent être expliqués
    - le présent
    - de préférence, le style direct et la forme active (pas de subjonctif, pas de conjonctions)
- Les caractères typographiques du Français  
    - Tiret - , cadratin —,«&nbsp;guillemets français&nbsp;»
    - Accents même aux majuscules (éèêçàïùÉÈÊÇÀÏÙ)
et n’utilisent pas&nbsp;:
- de mots en anglais, de sigles ou abréviations sauf ceux passés dans le langage courant 

**Objectif&nbsp;: **  
Permettre aux utilisateurs de comprendre facilement le sens du contenu.

### Pushmail et accessibilité, quelques liens

- [Un outil pour valider l'accessibilité de son code HTML de ses pushmails (en anglais)](http://www.accessible-email.org/) 
- [<i lang="en">Make your Outlook email accessible – Microsoft Office Support</i>](https://support.office.com/en-us/article/Make-your-Outlook-email-accessible-71ce71f4-7b15-4b7a-a2e3-cf91721bbacb)

<!--  This file is part of a11y-guidelines | Our vision of mobile & web accessibility guidelines and best practices, with valid/invalid examples.
 Copyright (C) 2016  Orange SA
 See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). -->