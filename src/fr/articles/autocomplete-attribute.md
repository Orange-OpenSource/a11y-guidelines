---
title: "L'attribut HTML autocomplete : comprendre et utiliser correctement l'autoremplissage des formulaires"
abstract: "Souvent oublié, l'attribut autocomplete améliore pourtant l'accessibilité et l'ergonomie des formulaires."
titleBeforeTag: true
date: "2026-04-17"
tags:
  - web
  - advanced
---

Les formulaires sont une partie essentielle de l'expérience utilisateur sur le web. Ils permettent aux utilisateurs de s'inscrire à un service, de se connecter à un compte, de faire des achats, et bien plus encore. Cependant, pour de nombreux utilisateurs, notamment les personnes en situation de handicap, les formulaires peuvent représenter un défi majeur. L'accessibilité des formulaires est donc cruciale pour garantir une expérience utilisateur inclusive. L'un des attributs HTML qui joue un rôle clé dans l'accessibilité des formulaires est l'attribut `autocomplete`. Dans cet article, nous allons explorer en détail cet attribut, son impact sur l'accessibilité, et comment l'utiliser efficacement.

L'attribut HTML `autocomplete` permet aux navigateurs et aux gestionnaires de mots de passe de comprendre **le type d'information attendu dans un champ de formulaire**.

Correctement utilisé, il permet :

* d'accélérer la saisie des formulaires ;
* de réduire les erreurs ;
* d'améliorer l'expérience utilisateur ;
* et dans certains cas, de **répondre à des exigences d'accessibilité**.

Cet article propose un tour d'horizon de cet attribut souvent mal compris : son rôle, son impact sur l'accessibilité, les différentes valeurs possibles et les méthodes pour vérifier sa présence dans un formulaire.

## Présentation de l'attribut `autocomplete`

L'attribut `autocomplete` peut être utilisé sur :

* l'élément `<form>`
* certains éléments de formulaire comme `<input>`, `<textarea>` ou `<select>`.

Il permet d'indiquer au navigateur **la nature de la donnée attendue dans un champ**, afin de faciliter son remplissage automatique.

Exemple simple :

```html
<label for="email">Adresse e-mail</label>
<input type="email" id="email" name="email" autocomplete="email">
```

Dans cet exemple, la valeur `email` indique au navigateur que le champ attend une adresse de messagerie électronique.

Le navigateur peut alors proposer :

* des valeurs déjà saisies précédemment,
* des données stockées dans le profil utilisateur,
* ou des informations provenant d'un gestionnaire de mots de passe.

La spécification HTML définit une **liste précise de valeurs normalisées** (ou `autofill tokens`), correspondant à différents types d'information.

## Impact de `autocomplete` sur l'accessibilité

L'attribut `autocomplete` joue un rôle direct dans l'accessibilité des formulaires.

Certaines technologies d'assistance peuvent exploiter cette information pour **identifier la nature d'un champ de formulaire**, indépendamment de son libellé visible.

L'attribut `autocomplete` est particulièrement **bénéfique pour les utilisateurs**. Voici quelques exemples de son impact positif :
- **Utilisateurs avec des troubles cognitifs** : L'auto-complétion aide ces utilisateurs en réduisant la charge cognitive nécessaire pour remplir un formulaire. Les suggestions fournies par le navigateur peuvent servir de rappels ou d'indices, facilitant ainsi la saisie des informations.
- **Utilisateurs avec des handicaps moteurs** : Pour les personnes ayant des difficultés à utiliser un clavier ou une souris, l'auto-complétion réduit le nombre de frappes nécessaires, rendant le formulaire plus rapide et moins fatigant à remplir.
- **Utilisateurs malvoyants ou non-voyants** : Les utilisateurs de lecteurs d'écran bénéficient également de l'attribut `autocomplete`. Les suggestions d'auto-complétion peuvent être lues par les lecteurs d'écran, aidant ainsi les utilisateurs à comprendre les informations attendues et à remplir le formulaire plus efficacement.

Cette pratique est directement liée à un critère d'accessibilité des WCAG : **WCAG 2.2 – Success Criterion 1.3.5: Identify Input Purpose (niveau AA)**.

Ce critère demande que, pour certains champs collectant des données personnelles, **la finalité du champ soit identifiée programmatiquement** à l'aide des valeurs définies dans la spécification HTML.

*Remarque :* le critère concerne les informations relatives à l'utilisateur lui-même, et non celles concernant des tiers (par exemple : adresse de livraisons d'un ami ou numéro de téléphone d'un contact).

Exemples de données concernées :

* nom
* prénom
* adresse
* numéro de téléphone
* adresse e-mail
* informations de paiement

Objectif : permettre aux technologies d'assistance et aux outils d'aide à la saisie de **reconnaître automatiquement ces champs**.

Il est important de noter que :

* ce critère **ne s'applique qu'à certains types de données personnelles** prédéfinies par la spécification HTML
* uniquement **lorsque ces données sont demandées à l'utilisateur** sous forme de contrôles de saisie (`inputs`, etc.)
* et lorsque la finalité du champ figure bien dans la liste des `input purposes` définie par les WCAG, eux‑mêmes alignés sur les `autofill tokens HTML`.

*Remarque :* les champs dont la finalité n'est pas couverte par les `autofill-tokens` (par exemple : champ de recherche libre, zone de texte pour un commentaire, champs très métier, ou non standardisés) n'ont pas besoin de cet attribut, ou ne devraient pas utiliser une valeur inappropriée.

L'utilisation de `autocomplete` ne remplace évidemment pas :

* un **libellé accessible (fourni par un `label` ou toute autre méthode de nommage accessible)**
* une **structure de formulaire claire**
* des **instructions compréhensibles pour l'utilisateur**.

L'attribut autocomplete ne fournit pas de nom accessible au champ. Les technologies d'assistance peuvent exploiter cette information comme un complément, mais jamais comme un substitut au libellé.

## Comprendre la syntaxe de `autocomplete`

L'attribut `autocomplete` accepte plusieurs types de valeurs définies dans la spécification HTML.

Ces valeurs peuvent être regroupées en plusieurs catégories.

### Règles de priorité

`autocomplete` peut être implémenté sur `form` et directement sur les champs, dans ce cas les règles suivantes s'appliquent :

* Si `autocomplete` est présent à la fois sur le `form` et sur un champ, la valeur du champ a priorité.
* Un `autocomplete` absent sur un champ hérite du comportement du `form`, qui se comporte alors comme une valeur par défaut (par exemple `autocomplete="off"` sur le formulaire, mais `autocomplete="email"` sur un champ précis).

### 1. Valeurs générales : `on` et `off`

Les valeurs `on` et `off` permettent d'activer ou de désactiver l'autoremplissage.

Exemple :

```html
<form autocomplete="on">
```

ou :

```html
<input type="text" autocomplete="off">
```

Cependant, la spécification précise que **les navigateurs peuvent ignorer la valeur `off` dans certains cas**, notamment pour les champs liés à l'authentification.
Il est crucial de noter que l'utilisation de `autocomplete="off"` doit être réservée à des cas très spécifiques et justifiés, car elle peut dégrader l'expérience utilisateur et l'accessibilité en empêchant l'autocomplétion pour des champs où elle serait bénéfique.

L'usage de `autocomplete="off"` doit être réservé à des cas très spécifiques où la prédiction d'une valeur n'a aucun sens ou pourrait nuire à la sécurité, comme par exemple :
* un champ de saisie d'un code à usage unique (OTP)
* un champ de confirmation de type "Veuillez saisir à nouveau votre e-mail" (bien que cette pratique soit elle-même discutable en termes d'ergonomie).

### 2. Les valeurs définies par la spécification HTML (obligatoire)

La spécification HTML définit de nombreuses **valeurs normalisées**, appelées `autofill tokens`, permettant d'identifier précisément la donnée attendue.

Exemples courants :

| Valeur           | Signification       |
| ---------------- | ------------------- |
| `name`           | nom complet         |
| `given-name`     | prénom              |
| `family-name`    | nom de famille      |
| `email`          | adresse e-mail      |
| `tel`            | numéro de téléphone |
| `street-address` | adresse postale     |
| `postal-code`    | code postal         |
| `country`        | pays                |


Exemple d'utilisation :

```html
<label for="firstname">Prénom</label>
<input id="firstname" name="firstname" autocomplete="given-name">
```

Ces valeurs sont utilisées par :

* les navigateurs
* les gestionnaires de mots de passe
* certains outils d'assistance.

[La liste complète est définie dans la spécification HTML](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofilling-form-controls:-the-autocomplete-attribute).

### 3. Les sections prédéfinies (optionnel)

Contrairement à ce que l'on croit souvent, la valeur de `autocomplete` peut contenir plusieurs tokens.
La spécification permet en effet de **regrouper des champs appartenant à une même section logique**. Ces regroupements permettent d'indiquer le contexte de la donnée.

La spécification HTML définit une syntaxe structurée :

```html
[section-*] [shipping | billing] [contact-type] autofill-token
```

Les tokens sont séparés par des espaces et doivent respecter un ordre précis.

Exemple :

```html
<input autocomplete="shipping given-name">
<input autocomplete="shipping family-name">
<input autocomplete="shipping street-address">
```

Dans cet exemple, les champs sont associés à la section **shipping**, ce qui indique qu'ils correspondent à une **adresse de livraison**.
Une autre section courante est `billing`, utilisée pour les informations de facturation.

Ces sections permettent aux navigateurs de distinguer plusieurs ensembles de données dans un même formulaire.

### 4. Les sections personnalisées (optionnel)

Il est également possible de définir des sections personnalisées grâce au préfixe :

```html
section-*
```

Exemple :

```html
<input autocomplete="section-user1 email">
<input autocomplete="section-user2 email">
```

Cela permet de distinguer plusieurs utilisateurs ou plusieurs ensembles d'informations similaires dans un même formulaire.

### 5. Les modificateurs du type de contact (optionnel)

Certains champs acceptent des tokens supplémentaires appelés `contact type hints`.
Ces tokens ne sont ni des sections ni des champs, mais des `modificateurs du type de contact`.

Exemple :

```html
home
work
mobile
fax
pager
```

Prenons un champ téléphone :

```html
<input autocomplete="home tel">
```

Ici :

| token  | rôle            |
| ------ | --------------- |
| `home` | type de contact |
| `tel`  | champ autofill  |

Cela signifie que le formulaire attend dans ce champ un numéro de téléphone personnel.

Autres exemples :

```html
autocomplete="work email"
```

indique une adresse e-mail professionnelle.

```html
autocomplete="mobile tel"
```

indique que le formulaire attend un numéro de téléphone mobile.

Ces `tokens` permettent de préciser le contexte d'une information de contact comme un numéro de téléphone ou une adresse e-mail. Ce ne sont pas des sections car ces dernières servent à distinguer des groupes de données dans un formulaire.

### 6. Identifiants WebAuthn (optionnel)

La spécification HTML inclut également le token `webauthn`, utilisé pour signaler qu'un champ peut déclencher une authentification WebAuthn (par exemple avec des `passkeys`).

## Exemple complet de formulaire

Voici un exemple simplifié de formulaire utilisant correctement l'attribut `autocomplete` :

```html
<form>

  <label for="firstname">Prénom</label>
  <input id="firstname" autocomplete="given-name">

  <label for="lastname">Nom</label>
  <input id="lastname" autocomplete="family-name">

  <label for="email">Adresse e-mail</label>
  <input id="email" type="email" autocomplete="email">

  <label for="street">Adresse</label>
  <input id="street" autocomplete="street-address">

  <label for="postal">Code postal</label>
  <input id="postal" autocomplete="postal-code">

</form>
```

## Comment tester la présence et la pertinence de `autocomplete`

L'analyse de l'attribut `autocomplete` peut se faire de différentes manières.

### Inspection manuelle

La première méthode consiste à inspecter le code source du formulaire.

Points à vérifier :

* présence de l'attribut `autocomplete`
* cohérence entre la valeur et la donnée demandée
* utilisation correcte des tokens définis par la spécification HTML

Par exemple :

```html
<input type="email" autocomplete="email">
```

est cohérent, tandis que :

```html
<input type="email" autocomplete="name">
```

ne l'est pas.

### Utiliser le bookmarklet detectAutocomplete

Pour faciliter l'audit des formulaires, il est possible d'utiliser le bookmarklet **detectAutocomplete**.

Cet outil permet d'analyser une page et de **mettre en évidence les champs de formulaire ainsi que leurs valeurs `autocomplete`**.

Il peut aider à :

* identifier les champs qui utilisent `autocomplete` ;
* identifier les champs qui n'utilisent pas cet attribut ;
* repérer les valeurs incorrectes ;
* analyser rapidement la structure d'un formulaire.

Le bookmarklet est disponible sur GitHub : https://github.com/MewenLeHo/detectAutocomplete

## Erreurs fréquentes observées en audit

Lors des audits d'accessibilité ou d'ergonomie, plusieurs erreurs sont souvent rencontrées :

1. **Oublier l'attribut `autocomplete`** :
  - **Impact** : Les utilisateurs doivent saisir manuellement toutes les informations, ce qui peut être fastidieux et source d'erreurs.
  - **Solution** : Toujours inclure l'attribut `autocomplete` pour les champs de formulaire pertinents.

2. **Utiliser des valeurs incorrectes pour `autocomplete`** :
  - **Impact** : Les navigateurs peuvent ne pas reconnaître les valeurs incorrectes, rendant l'auto-complétion inefficace.
  - **Solution** : Utiliser les valeurs standardisées pour l'attribut `autocomplete` comme spécifié dans la documentation HTML.

Exemple :

```html
<input type="email" autocomplete="name">
```

La valeur ne correspond pas à la donnée demandée.

3. **Utilisation excessive de `autocomplete="off"`** :
  - **Impact** : pratique souvent inutile, parfois ignorée par les navigateurs, et qui prive certains utilisateurs d'une fonctionnalité importante pour l'accessibilité.
  - **Solution** : limiter `autocomplete="off"` aux cas réellement justifiés (OTP, champs très sensibles ou sans bénéfice d'autoremplissage) et laisser l'autocomplétion active partout ailleurs.

4. **Ignorer les sections** :
  - **Impact** : les navigateurs et gestionnaires de mots de passe peuvent avoir plus de mal à distinguer plusieurs ensembles de données (par exemple plusieurs adresses ou plusieurs personnes) dans un même formulaire.
  - **Solution** : utiliser `shipping`, `billing` ou des sections personnalisées (`section-*`) quand un même formulaire regroupe plusieurs ensembles d'informations similaires.

## Conclusion

L'attribut `autocomplete` illustre bien une idée simple : une petite information sémantique peut avoir un impact important sur l'expérience utilisateur et l'accessibilité.

Correctement utilisé, il permet :

* de faciliter et accélérer la saisie des informations,
* de réduire les erreurs,
* d'améliorer l'interopérabilité avec les navigateurs et les gestionnaires de mots de passe,
* et de répondre à certaines exigences des WCAG concernant l'identification de la finalité des champs.

Malgré cela, il reste encore **sous-utilisé ou mal implémenté dans de nombreux formulaires**. La spécification HTML définit aujourd'hui plus de cinquante valeurs possibles pour l'attribut `autocomplete`. En pratique, seule une petite partie est couramment utilisée dans les formulaires.

Prendre le temps de l'ajouter correctement constitue donc une amélioration rapide, à la fois pour l'ergonomie et pour l'accessibilité.

L'attribut `autocomplete` est un outil puissant pour améliorer l'accessibilité des formulaires web. En réduisant la charge cognitive et physique nécessaire pour remplir un formulaire, il rend l'expérience utilisateur plus inclusive et agréable pour tous, y compris les personnes ayant des handicaps. En suivant les bonnes pratiques et en évitant les erreurs courantes, les développeurs peuvent créer des formulaires accessibles qui bénéficient à tous les utilisateurs. Ajouter correctement cet attribut est une amélioration simple, rapide à mettre en œuvre, et pourtant encore trop souvent oubliée dans les formulaires web.

## Webographie

<ul lang="en">
  <li><a href="https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofilling-form-controls:-the-autocomplete-attribute" hreflang="en">HTML Living Standard – Autofilling form controls (en)</a></li>
  <li><a href="https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose.html" hreflang="en">WCAG 2.2 – Understanding Success Criterion 1.3.5 (en)</a></li>
  <li><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/autocomplete" hreflang="en">MDN – HTML attribute: autocomplete (en)</a></li>
</ul>
