# Recommandations accessibilité <span lang="en">pushmail</span> Orange  

<script>$(document).ready(function () {
    setBreadcrumb([{"label":"Pushmails"}]);
});</script>


## Introduction&nbsp;: l’accessibilité des emails
Les emails au format texte et sans image, comme souvent les emails entre salariés, sont accessibles. 
Le problème de non accessibilité est plutôt le fait des <span lang="en">pushmails</span> et des newsletters. Ces emails, à la mise en forme élaborée (liens, mise en page complexe, illustrations, schémas), permettent la diffusion d’informations à de nombreux destinataires et sont un outil essentiel de la communication d’entreprise.

### Des solutions alternatives
Si la mise en page du <span lang="en">pushmail</span> est complexe, notamment si celle-ci implique d’utiliser des tableaux, créer le <span lang="en">pushmail</span> avec la méthode choisie et ajouter en pièce jointe un fichier Word ou un fichier texte accessible contenant le même niveau d’information sous forme textuelle.

## Méthodes de création des pushmail
En interne Orange, nous utilisons principalement trois méthodes pour composer les pushmails : 
- Création du <span lang="en">pushmail</span> via Word.
- Utilisation d'un outil dédié comme « Mes Pushmails ».
- Composition directe ou indirecte (via des frameworks) en HTML.

Quelle que soit la méthode choisie, il faut au préalable respecter les [recommandations générales](./editorial.html) pour tout document rédactionnel.

### Création à partir d’un document Word 
Créer un document Word accessible en suivant les [recommandations Word](./word.html). Puis utiliser l’option « Envoyer au destinataire du message » (option à ajouter la première fois via Fichier>Option>Barre d’outils accès rapide>Envoyer au destinataire du message). 

### Création à partir d’HTML ou d'un outil dédié
Créer des pages HTML accessibles en suivant [les recommandations Web](../web/index.html), si besoin et les recommandations spécifiques ci dessous.  
Á noter : en interne, l’outil « Mes Pushmails » fournit des gabarits nativement accessibles, ce qui n’empêche pas de suivre les [recommandations générales](./editorial.html) pour du contenu éditorial.

## Règle spécifique <span lang="en">pushmail</span> HTML

### Fournir des marges homogènes
Pour s'assurer que la présentation soit identique quelque soit le client de messagerie utilisé (Outlook, Thunderbird, webmail ...), les balises sémantiques `hx`, `p` et les listes `ul`, `ol` doivent avoir une marge nulle fixée en <abbr>CSS</abbr> (`style="margin:0"`).
Pour les titres `hx`, on ajoute en plus la propriété <abbr>CSS</abbr> spécifique `mso-line-height-rule:exactly` pour que dans Outlook la hauteur de ligne soit fixe et cohérente.

`<h1 style="margin:0; mso-line-height-rule:exactly;">Titre</h1>
  <p style="margin:0;">Paragraphe</p>`

### Rendre accessible les tableaux
Mettre un attribut <code>role="presentation"</code> dans la balise table d'un tableau de présentation pour que la sémantique du tableau soit ignorée par les aides techniques.  

## Liens utiles
- [Outil pour valider l'accessibilité du code HTML de ses pushmails (en anglais)](http://www.accessible-email.org/)
- Article en anglais sur le site de Microsoft : <a lang="en" href="https://support.office.com/en-us/article/Make-your-Outlook-email-accessible-71ce71f4-7b15-4b7a-a2e3-cf91721bbacb">Make your Outlook email accessible – Microsoft Office Support</a>

<!--  This file is part of a11y-guidelines | Our vision of mobile & web accessibility guidelines and best practices, with valid/invalid examples.
 Copyright (C) 2016  Orange SA
 See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). -->