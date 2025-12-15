---
title: "Nouveautés de la version 1.3 de la norme ARIA : guide pour les développeurs"
abstract: "Découvrez les nouvelles fonctionnalités de la version 1.3 de la norme ARIA. Cet article fournit des exemples pratiques et explique comment ces améliorations renforcent l'accessibilité des applications web pour tous les utilisateurs."
titleBeforeTag: true
date: "2025-08-01"
updateDate: "2025-10-06"
tags:
  - web
  - advanced
---

Cet article est régulièrement mis à jour en fonction des nouveautés annoncées dans la nouvelle version 1.3 de la norme <abbr>ARIA</abbr>.

## Introduction
La version 1.3 de la norme <abbr>ARIA</abbr> (Accessible Rich Internet Applications) des améliorations importantes pour l'accessibilité des applications web. Cet article a pour objectif de présenter les nouveaux attributs et rôles introduits, leur utilisation, ainsi que l'impact qu'ils peuvent avoir sur l'expérience utilisateur.

## Nouveaux attributs ARIA

### aria-braillelabel

Description : cet attribut permet de fournir une étiquette spécifique pour les utilisateurs de dispositifs braille. Il est particulièrement utile pour les éléments interactifs, comme les boutons ou les liens, où une étiquette claire est essentielle pour la compréhension.

Exemple d'utilisation :

```html
<button aria-braillelabel="Envoyer le message">Envoyer</button>
```

Impact utilisateur : les utilisateurs de dispositifs braille bénéficieront d'une meilleure compréhension des actions disponibles, ce qui peut améliorer leur expérience de navigation et leur autonomie.

### aria-brailleroledescription

Description : cet attribut fournit une description du rôle d'un élément pour les utilisateurs de dispositifs braille. Cela aide à contextualiser la fonction d'un élément, en particulier dans des interfaces complexes.

Exemple d'utilisation :

```html
<div role="navigation" aria-brailleroledescription="Menu principal de navigation">
  <ul>
    <li><a href="#home">Accueil</a></li>
    <li><a href="#about">À propos</a></li>
  </ul>
</div>
```

Impact utilisateur : les utilisateurs de dispositifs braille auront une meilleure compréhension de la structure de la page, ce qui facilite la navigation et l'interaction avec le contenu.

### aria-details

Description : cet attribut a été modifié dans la version 1.3 d'<abbr>ARIA</abbr> pour permettre la référence à plusieurs <code>id</code>. Il permet ainsi de référencer un ou plusieurs éléments qui fournissent des informations supplémentaires sur un autre élément, offrant ainsi un contexte plus riche.

Exemple d'utilisation :

```html
<button aria-details="details1 details2">En savoir plus</button>
<div id="details1">
  <p>Voici des informations supplémentaires sur ce bouton.</p>
</div>
<div id="details2">
  <p>Consultez également notre guide d'utilisation.</p>
</div>
```

Impact utilisateur : les utilisateurs, notamment ceux utilisant des lecteurs d'écran, bénéficieront d'une meilleure compréhension des éléments, ce qui peut réduire la confusion et améliorer l'expérience globale.

### aria-description

Description : cet attribut permet de fournir une description d'un élément, offrant ainsi des informations contextuelles supplémentaires aux utilisateurs.

Exemple d'utilisation :

```html
<input type="mail" aria-description="Veuillez entrer votre adresse e-mail." />
```

Impact utilisateur : les utilisateurs auront accès à des informations supplémentaires qui peuvent les aider à remplir des formulaires ou à interagir avec des éléments de manière plus efficace.

### aria-errormessage

Description : cet attribut permet de lier un message d'erreur à un élément de formulaire. Le message d'erreur est alors vocalisé par les technologies d'assistance uniquement si l'élément de formulaire est invalide (<code>aria-invalid="true"</code>).


Exemple d'utilisation :

```html
<label for="mail">Adresse mail</label>
<input type="email" id="mail" aria-invalid="true" aria-errormessage="erreurMail" />
<p id="erreurMail">Erreur : cette adresse mail n'est pas valide</p>
```

Impact utilisateur : les utilisateurs pourront plus facilement comprendre et corriger les erreurs en remplisant un formulaire.

### aria-keyshortcuts

Description : cet attribut permet de mettre en évidence, dans le DOM, les éventuels raccourcis clavier à la disposition des utilisateurs.


Exemple d'utilisation :

```html
<button type="button" aria-keyshortcuts="Esc">Fermer la modale</button>
```

Impact utilisateur : informer les utilisateurs et permettre à tous les utilisateurs de connaître les raccourcis claviers disponibles pour faciliter la navigation.


### aria-placeholder

Description : cet attribut permet d'ajouter un placeholder à des éléments de formulaire personnalisés qui ne supportent pas nativement l'attribut <code>placeholder</code>, par exemple une <code>div</code> avec un attribut <code>contenteditable</code>.


Exemple d'utilisation :

```html
<div contenteditable="true" aria-placeholder="Tapez un message">...</div>
```

Impact utilisateur : meilleure compréhension des utilisateurs.

## Nouveaux rôles ARIA

### role="suggestion"

Description : ce rôle est utilisé pour indiquer programmatiquement qu'une modification a été faite dans un texte. Cela permet aux utilisateurs de comprendre qu'il y a des options ou des corrections proposées dans le texte qu'ils peuvent considérer ou appliquer.

Exemple d'utilisation :

```html
<p>
  Les meilleurs animaux de compagnie sont
  <span role="suggestion">
    <span role="deletion">les chiens.</span>
    <span role="insertion">les T-rex.</span>
  </span>
</p>
```

Impact utilisateur : les utilisateurs peuvent recevoir des conseils utiles qui améliorent leur expérience et les aident à naviguer plus efficacement dans l'application.

### role="comment"

Description : ce rôle est utilisé pour signaler programmatiquement les zones de commentaires.

Exemple d'utilisation :

```html
<article>
  <h1>Mon article de blog</h1>
  <div class="comments-section">
    <div role="comment" aria-labelledby="user1">
      <h3 id="user1">Marie</h3>
      <time datetime="2024-01-20">20/01/2024</time>
      <p>Super article, merci !</p>
    </div>
  </div>
</article>
```

Impact utilisateur : les utilisateurs bénéficieront d'instructions claires qui les aident à interagir avec les éléments de manière plus efficace.

### role="mark"

Description : le rôle <code>mark</code> est utilisé pour indiquer un texte qui a été mis en surbrillance ou qui est d'une importance particulière dans le contenu.

Exemple d'utilisation :

```html
<p>Ce texte est <span role="mark">important</span> pour la compréhension.</p>
```

Impact utilisateur : les utilisateurs de lecteurs d'écran peuvent être informés des éléments importants dans le contenu, ce qui améliore leur capacité à saisir les points clés.

### role="code" et role="time"

Description : le <code>role="code"</code> et le <code>role="time"</code> reproduisent la sémantique des éléments HTML <code>code</code> et <code>time</code>.

Impact utilisateur : conserver une bonne sémantique dans les cas où il n'est pas possible d'utiliser les éléments HTML en raison de contraintes techniques.

### role="image"

Description : le <code>role="image"</code> est créé en remplacement du <code>role="img"</code> afin d'harmoniser les noms des différents rôles <abbr>ARIA</abbr>. <code>role="img"</code> reste valide pour des raisons de rétrocompatibilité.

## Cas d'utilisation

### Applications de messagerie
Dans une application de messagerie, l'utilisation de <code>aria-braillelabel</code> et <code>aria-brailleroledescription</code> peut améliorer l'expérience utilisateur en fournissant des étiquettes claires pour les boutons d'action, permettant aux utilisateurs de comprendre rapidement les options disponibles.

### Interfaces de navigation
Pour les interfaces de navigation, <code>aria-details</code> et <code>aria-description</code> peuvent être utilisés pour donner un contexte supplémentaire sur les éléments de navigation, rendant l'expérience plus intuitive pour tous les utilisateurs, en particulier ceux utilisant des technologies d'assistance.

### Suggestions et instructions
L'utilisation des nouveaux rôles <code>suggestion</code> et <code>comment</code> peut aider à guider les utilisateurs dans l'utilisation des fonctionnalités de l'application, en leur fournissant des conseils et des instructions claires.

## Conclusion
La version 1.3 de la norme <abbr>ARIA</abbr> introduit des attributs et rôles essentiels qui améliorent l'accessibilité des applications web. En intégrant ces nouveautés, les développeurs peuvent créer des expériences plus inclusives pour tous les utilisateurs, en particulier ceux qui dépendent de technologies d'assistance. N'hésitez pas à explorer ces nouveautés et à les appliquer dans vos projets pour garantir une meilleure accessibilité numérique.

## Webographie
<ul lang="en">
  <li><a href="https://w3c.github.io/aria/" hreflang="en">WAI-ARIA 1.3 draft (en)</a></li>
  <li><a href="https://www.craigabbott.co.uk/blog/a-look-at-the-new-wai-aria-1-3-draft/" hreflang="en">A look at the new WAI-ARIA 1.3 draft (en)</a></li>
  <li><a href="https://webaim.org/blog/up-and-coming-aria/" hreflang="en">Up and Coming ARIA (en)</a></li>
</ul>
