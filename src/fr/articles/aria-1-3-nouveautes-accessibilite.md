---
title: "Nouveautés de la version 1.3 de la norme ARIA : guide pour les développeurs"
abstract: "Découvrez les nouvelles fonctionnalités de la version 1.3 de la norme ARIA. Cet article fournit des exemples pratiques et explique comment ces améliorations renforcent l'accessibilité des applications web pour tous les utilisateurs."
date: "2025-03-18"
tags:
  - web
  - advanced
---

# Introduction
La version 1.3 de la norme <abbr>ARIA</abbr> (Accessible Rich Internet Applications) apporte des améliorations significatives pour l'accessibilité des applications web. Cet article vise à informer les développeurs web et mobile, ainsi que toute personne intéressée par l'accessibilité numérique, des nouveaux attributs et rôles introduits, de leur utilisation, et de l'impact qu'ils peuvent avoir sur l'expérience utilisateur.

# Nouveaux attributs ARIA

1. aria-braillelabel

Description : cet attribut permet de fournir une étiquette spécifique pour les utilisateurs de dispositifs braille. Il est particulièrement utile pour les éléments interactifs, comme les boutons ou les liens, où une étiquette claire est essentielle pour la compréhension.

Exemple d'utilisation :

```html
<button aria-braillelabel="Envoyer le message">Envoyer</button>
```

Impact utilisateur : les utilisateurs de dispositifs braille bénéficieront d'une meilleure compréhension des actions disponibles, ce qui peut améliorer leur expérience de navigation et leur autonomie.

2. aria-brailleroledescription

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

3. aria-details

Description : cet attribut permet de référencer un élément qui fournit des informations supplémentaires sur un autre élément. Cela est particulièrement utile pour les éléments qui nécessitent des explications contextuelles.

Exemple d'utilisation :

```html
<button aria-details="details1">En savoir plus</button>
<div id="details1" hidden>
  <p>Voici des informations supplémentaires sur ce bouton.</p>
</div>
```

Impact utilisateur : les utilisateurs, notamment ceux utilisant des lecteurs d'écran, bénéficieront d'une meilleure compréhension des éléments, ce qui peut réduire la confusion et améliorer l'expérience globale.

4. aria-description

Description : cet attribut permet de fournir une description d'un élément, offrant ainsi des informations contextuelles supplémentaires aux utilisateurs.

Exemple d'utilisation :

```html
<input type="text" aria-description="Veuillez entrer votre adresse e-mail." />
```

Impact utilisateur : les utilisateurs auront accès à des informations supplémentaires qui peuvent les aider à remplir des formulaires ou à interagir avec des éléments de manière plus efficace.

# Nouveaux rôles ARIA

1. role="mark"

Description : le rôle <code>mark</code> est utilisé pour indiquer un texte qui a été mis en surbrillance ou qui est d'une importance particulière dans le contenu.

Exemple d'utilisation :

```html
<p>Ce texte est <mark>important</mark> pour la compréhension.</p>
```

Impact utilisateur : les utilisateurs de lecteurs d'écran peuvent être informés des éléments importants dans le contenu, ce qui améliore leur capacité à saisir les points clés.



# Cas d'utilisation

## Applications de messagerie
Dans une application de messagerie, l'utilisation de <code>aria-braillelabel</code> et <code>aria-brailleroledescription</code> peut améliorer l'expérience utilisateur en fournissant des étiquettes claires pour les boutons d'action, permettant aux utilisateurs de comprendre rapidement les options disponibles.

## Interfaces de navigation
Pour les interfaces de navigation, <code>aria-details</code> et <code>aria-description</code> peuvent être utilisés pour donner un contexte supplémentaire sur les éléments de navigation, rendant l'expérience plus intuitive pour tous les utilisateurs, en particulier ceux utilisant des technologies d'assistance.

# Conclusion
La version 1.3 de la norme <abbr>ARIA</abbr> introduit des attributs et rôles essentiels qui améliorent l'accessibilité des applications web. En intégrant ces nouveautés, les développeurs peuvent créer des expériences plus inclusives pour tous les utilisateurs, en particulier ceux qui dépendent de technologies d'assistance. N'hésitez pas à explorer ces nouveautés et à les appliquer dans vos projets pour garantir une meilleure accessibilité numérique.

# Webographie
<ul>
  <li><a href="https://w3c.github.io/aria/" hreflang="en">WAI-ARIA 1.3 draft (en)</a></li>
  <li><a href="https://www.craigabbott.co.uk/blog/a-look-at-the-new-wai-aria-1-3-draft/" hreflang="en">A look at the new WAI-ARIA 1.3 draft (en)</a></li>
</ul>