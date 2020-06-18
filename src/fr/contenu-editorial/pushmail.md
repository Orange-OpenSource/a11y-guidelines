---
title: "Recommandations accessibilité pushmail Orange"
highlightjs: true
---

# Recommandations accessibilité <span lang="en">pushmail</span> Orange

## Introduction&nbsp;: l’accessibilité des emails
Les emails au format texte et sans image, comme souvent les emails entre salariés, sont accessibles. 
Le problème de non accessibilité est plutôt le fait des <span lang="en">pushmails</span> et des newsletters. Ces emails, à la mise en forme élaborée (liens, mise en page complexe, illustrations, schémas), permettent la diffusion d’informations à de nombreux destinataires et sont un outil essentiel de la communication d’entreprise.

### Des solutions alternatives
Si la mise en page du <span lang="en">pushmail</span> est complexe, notamment si celle-ci implique d’utiliser des tableaux, créer le <span lang="en">pushmail</span> avec la méthode choisie et ajouter en pièce jointe un fichier Word ou un fichier texte accessible contenant le même niveau d’information sous forme textuelle.

## Méthodes de création des <span lang="en">pushmail</span>
En interne Orange, nous utilisons principalement trois méthodes pour composer les <span lang="en">pushmails</span>&nbsp;: 
- Création du <span lang="en">pushmail</span> via Word.
- Utilisation d'un outil dédié comme «&nbsp;Mes Pushmails&nbsp;».
- Composition directe ou indirecte (via des <i lang="en">frameworks</i>) en <abbr>HTML</abbr>.

Quelle que soit la méthode choisie, il faut au préalable respecter les [recommandations générales](../generalites) pour tout document rédactionnel.

### Création à partir d’un document Word 
Créer un document Word accessible en suivant les [recommandations Word](../word). Puis utiliser l’option «&nbsp;Envoyer au destinataire du message&nbsp;» (option à ajouter la première fois via Fichier&nbsp;> Option&nbsp;> Barre d’outils accès rapide&nbsp;> Envoyer au destinataire du message). 

### Création à partir d’<abbr>HTML</abbr> ou d'un outil dédié
Créer des pages <abbr>HTML</abbr> accessibles en suivant [les recommandations Web](../../web), si besoin et les recommandations spécifiques ci dessous.  
Á noter&nbsp;: en interne à Orange, l’outil «&nbsp;Mes Pushmails&nbsp;» fournit des gabarits nativement accessibles, ce qui n’empêche pas de suivre les [recommandations générales](../generalites) pour du contenu éditorial.

## Règle spécifique <span lang="en">pushmail</span> <abbr>HTML</abbr>

### Fournir des marges homogènes
Pour s'assurer que la présentation soit identique quel que soit le client de messagerie utilisé (Outlook, Thunderbird, webmail ...), les balises sémantiques `hx`, `p` et les listes `ul`, `ol` doivent avoir une marge nulle fixée en <abbr>CSS</abbr> (`style="margin:0"`).
Pour les titres `hx`, on ajoute en plus la propriété <abbr>CSS</abbr> spécifique `mso-line-height-rule:exactly` pour que dans Outlook la hauteur de ligne soit fixe et cohérente.

<pre><code class="html">
<h1 style="margin:0; mso-line-height-rule:exactly;">Titre</h1>
  <p style="margin:0;">Paragraphe</p>
</code></pre>

### Rendre accessibles les tableaux
Mettre un attribut <code>role="presentation"</code> dans la balise `table` d'un tableau de présentation pour que la sémantique du tableau soit ignorée par les aides techniques.  

## Liens utiles
- <a href="http://www.accessible-email.org/" hreflang="en">Outil pour valider l'accessibilité du code <abbr>HTML</abbr> de ses <span lang="en">pushmails</span></a> (en anglais)
- Article en anglais sur le site de Microsoft&nbsp;: <a lang="en" href="https://support.office.com/en-us/article/Make-your-Outlook-email-accessible-71ce71f4-7b15-4b7a-a2e3-cf91721bbacb" hreflang="en">Make your Outlook email accessible – Microsoft Office Support</a>
