---
title: "L'attribut HTML autocomplete : comprendre et utiliser correctement l'autocomplétion des formulaires"
abstract: "Derrière un simple attribut HTML se cache un mécanisme puissant : aider les navigateurs à comprendre ce que l'utilisateur doit saisir."
titleBeforeTag: true
date: "2026-04-27"
tags:
  - web
  - advanced
---

Les formulaires sont au cœur de l'expérience utilisateur sur le web : inscription, connexion, paiement… Ils sont partout.
Pourtant, leur remplissage peut représenter un obstacle, en particulier pour les personnes en situation de handicap. L'accessibilité des formulaires est donc un enjeu majeur.
Parmi les mécanismes souvent négligés, l'attribut HTML `autocomplete` joue un rôle clé.
Il permet aux navigateurs et aux gestionnaires de mots de passe de comprendre **le type d'information attendu dans un champ de formulaire**.

Correctement utilisé, il permet :

* d'accélérer la saisie ;
* de réduire les erreurs ;
* d'améliorer l'expérience utilisateur ;
* et de **répondre à des exigences d'accessibilité**.

Cet article propose un tour d'horizon de cet attribut souvent mal compris : son rôle, son impact sur l'accessibilité, sa syntaxe et les bonnes pratiques pour l'utiliser efficacement.

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

L'attribut `autocomplete` joue un rôle direct dans l'accessibilité des formulaires mais n'a pas été conçu spécifiquement pour les technologies d'assistance. Il permet avant tout aux navigateurs d'identifier le type d'information attendu dans un champ et de proposer une autocomplétion adaptée.

Certaines technologies d'assistance peuvent exploiter cette information pour **identifier la nature d'un champ de formulaire**, indépendamment de son libellé visible.

L'attribut `autocomplete` est particulièrement **bénéfique pour les utilisateurs**. Voici quelques exemples de son impact positif :
- **Utilisateurs avec des troubles cognitifs** : L'autocomplétion aide ces utilisateurs en réduisant la charge cognitive nécessaire pour remplir un formulaire. Les suggestions fournies par le navigateur peuvent servir de rappels ou d'indices, facilitant ainsi la saisie des informations.
- **Utilisateurs avec des handicaps moteurs** : Pour les personnes ayant des difficultés à utiliser un clavier ou une souris, l'autocomplétion réduit le nombre de frappes nécessaires, rendant le formulaire plus rapide et moins fatigant à remplir.
- **Utilisateurs malvoyants ou non-voyants** : Les utilisateurs de lecteurs d'écran bénéficient également de l'attribut `autocomplete`. Les suggestions d'autocomplétion peuvent être lues par les lecteurs d'écran, aidant ainsi les utilisateurs à comprendre les informations attendues et à remplir le formulaire plus efficacement.

Cette pratique est directement liée à un critère d'accessibilité des WCAG : **WCAG 2.2 – Success Criterion 1.3.5: Identify Input Purpose (niveau AA)**.

Ce critère demande que, pour certains champs collectant des données personnelles, **la finalité du champ soit identifiée programmatiquement** à l'aide des valeurs définies dans la spécification HTML.
L'utilisation de `autocomplete` constitue ainsi un moyen standardisé de répondre à ce critère, lorsqu'un token approprié existe.

*Remarque :* le critère concerne les informations relatives à l'utilisateur lui-même, et non celles concernant des tiers (par exemple : adresse de livraison d'un ami ou numéro de téléphone d'un contact).

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

L'attribut `autocomplete` ne fournit pas de nom accessible au champ. Les technologies d'assistance peuvent exploiter cette information comme un complément, mais jamais comme un substitut au libellé.

## Comprendre la syntaxe de `autocomplete`

L'attribut `autocomplete` accepte plusieurs types de valeurs définies dans la spécification HTML.

Ces valeurs peuvent être regroupées en plusieurs catégories.

### Règles de priorité

`autocomplete` peut être implémenté sur `form` et directement sur les champs, dans ce cas les règles suivantes s'appliquent :

* Si `autocomplete` est présent à la fois sur le `form` et sur un champ, la valeur du champ a priorité.
* Un `autocomplete` absent sur un champ hérite du comportement du `form`, qui se comporte alors comme une valeur par défaut (par exemple `autocomplete="off"` sur le formulaire, mais `autocomplete="email"` sur un champ précis).

### Syntaxe de l'attribut `autocomplete`

La spécification HTML Living Standard ne définit pas la valeur de l'attribut `autocomplete` comme une simple valeur libre mais plutôt comme une **séquence structurée de tokens** devant obéir à une grammaire stricte ainsi qu'à un ordre précis. Chaque token a un rôle précis, et leur ordre n'est pas interchangeable. L'ordre des tokens est en effet significatif : une valeur mal ordonnée peut être ignorée par le navigateur.

La syntaxe attendue est la suivante :

```html
autocomplete = "on" | "off" | [section-*] [shipping|billing] [contact-type] autofill-field-name [webauthn]
```

#### 1. Valeurs générales : `on` et `off`

Les valeurs `on` et `off` permettent d'activer ou de désactiver l'autocomplétion.

Exemple :

```html
<form autocomplete="on">
```

ou :

```html
<input type="text" autocomplete="off">
```

Cependant, la spécification précise que **les navigateurs peuvent ignorer la valeur `off` dans certains cas**, notamment pour les champs liés à l'authentification.
Il est crucial de noter que l'utilisation de `autocomplete="off"` peut dégrader l'expérience utilisateur et l'accessibilité en empêchant l'autocomplétion pour des champs où elle serait bénéfique.

L'usage de `autocomplete="off"` doit être réservé à des cas très spécifiques où la prédiction d'une valeur n'a aucun sens ou pourrait nuire à la sécurité, comme par exemple :
* un champ de saisie d'un code à usage unique (OTP)
* un champ de confirmation de type "Veuillez saisir à nouveau votre e-mail" (bien que cette pratique soit elle-même discutable en termes d'ergonomie).

#### 2. Les sections personnalisées (optionnel)

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

#### 3. Les sections prédéfinies (optionnel)

La spécification HTML permet de **regrouper des champs appartenant à une même section logique**. Ces regroupements permettent d'indiquer le contexte de la donnée.

Exemple :

```html
<input autocomplete="shipping given-name">
<input autocomplete="shipping family-name">
<input autocomplete="shipping street-address">
```

Dans cet exemple, les champs sont associés à la section **shipping**, ce qui indique qu'ils correspondent à une **adresse de livraison**.
Une autre section courante est `billing`, utilisée pour les informations de facturation.

Ces sections permettent aux navigateurs de distinguer plusieurs ensembles de données dans un même formulaire.

#### 4. Les modificateurs du type de contact (optionnel)

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

#### 5. Les valeurs définies par la spécification HTML (obligatoire)

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

#### 6. Identifiants WebAuthn (optionnel)

La spécification HTML inclut également le token `webauthn`, utilisé pour signaler qu'un champ peut déclencher une authentification *via* WebAuthn (par exemple avec des `passkeys`).
Ce token est défini dans l'[API Web Authentication](https://developer.mozilla.org/fr/docs/Web/API/Web_Authentication_API).

Exemple :

```html
<input autocomplete="username webauthn">
```

## Comportement réel des navigateurs

L'attribut `autocomplete` fournit une indication aux navigateurs, mais ne garantit pas à lui seul le fonctionnement de l'autocomplétion.

En pratique, les navigateurs utilisent également :

* l'attribut `name`
* l'attribut `id`
* le texte du `label`
* la structure du formulaire
* des heuristiques internes

Par exemple, un champ nommé `email` peut être reconnu comme un champ de messagerie même sans `autocomplete`.

```html
<input name="email">
```

Cependant, ce comportement n'est pas standardisé et peut varier selon les navigateurs.
L'utilisation correcte de `autocomplete` permet de fiabiliser ce mécanisme et de réduire les ambiguïtés. En d'autres termes, `autocomplete` est un signal important, mais il n'est pas le seul utilisé par les navigateurs. Ces heuristiques peuvent produire des résultats variables selon les navigateurs et les contextes.

## Exemple complet de formulaire

Voici un exemple simplifié de formulaire utilisant correctement l'attribut `autocomplete` :

```html
<form>

  <label for="firstname">Prénom</label>
  <input id="firstname" name="firstname" autocomplete="given-name">

  <label for="lastname">Nom</label>
  <input id="lastname" name="lastname" autocomplete="family-name">

  <label for="email">Adresse e-mail</label>
  <input id="email" name="email" type="email" autocomplete="email">

  <label for="street">Adresse</label>
  <input id="street" name="street" autocomplete="street-address">

  <label for="postal">Code postal</label>
  <input id="postal" name="postal" autocomplete="postal-code">

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

1. **Oublier complètement `autocomplete`** :
  - **Impact** : Les utilisateurs doivent saisir manuellement toutes les informations, ce qui peut être fastidieux et source d'erreurs.
  - **Solution** : Toujours inclure l'attribut `autocomplete` pour les champs de formulaire pertinents.

2. **Utiliser des tokens non standard** :
  - **Impact** : Les navigateurs peuvent ne pas reconnaître les valeurs incorrectes, rendant l'autocomplétion inefficace.
  - **Solution** : Utiliser les valeurs standardisées pour l'attribut `autocomplete` comme spécifié dans la documentation HTML.

Exemple :

```html
<input type="email" autocomplete="name">
```

La valeur ne correspond pas à la donnée demandée.
Les valeurs non définies par la spécification sont ignorées par les navigateurs, qui peuvent alors se reposer sur leurs propres heuristiques.

3. **Désactiver inutilement l'autocomplétion** :
  - **Impact** : pratique souvent inutile, parfois ignorée par les navigateurs, et qui prive certains utilisateurs d'une fonctionnalité importante pour l'accessibilité.
  - **Solution** : limiter `autocomplete="off"` aux cas réellement justifiés (OTP, champs très sensibles ou sans bénéfice d'autocomplétion) et laisser l'autocomplétion active partout ailleurs.

4. **Ignorer les sections** :
  - **Impact** : les navigateurs et gestionnaires de mots de passe peuvent avoir plus de mal à distinguer plusieurs ensembles de données (par exemple plusieurs adresses ou plusieurs personnes) dans un même formulaire.
  - **Solution** : utiliser `shipping`, `billing` ou des sections personnalisées (`section-*`) quand un même formulaire regroupe plusieurs ensembles d'informations similaires.

### Règle simple à retenir

Pour chaque champ de formulaire :

1. fournir un nom accessible clair (`label` ou autre technique de nommage) ;
2. utiliser un token `autocomplete` standard si applicable ;
3. ne pas inventer de valeur.

Ces trois règles couvrent la majorité des cas d'usage.

## Conclusion

L'attribut `autocomplete` illustre une idée simple : une information sémantique minimale peut avoir un impact significatif sur l'expérience utilisateur et l'accessibilité.

Correctement utilisé, il permet :

* d'accélérer la saisie ;
* de réduire les erreurs ;
* d'améliorer l'interopérabilité avec les navigateurs et les gestionnaires de mots de passe ;
* et de répondre à certaines exigences d'accessibilité.

Malgré cela, il reste encore **sous-utilisé ou mal implémenté dans de nombreux formulaires**.
Prendre le temps de l'implémenter correctement est une amélioration simple, rapide à mettre en œuvre,… et pourtant encore trop souvent négligée.

## Webographie

<ul lang="en">
  <li><a href="https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofilling-form-controls:-the-autocomplete-attribute" hreflang="en">HTML Living Standard – Autofilling form controls (en)</a></li>
  <li><a href="https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose.html" hreflang="en">WCAG 2.2 – Understanding Success Criterion 1.3.5 (en)</a></li>
  <li><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/autocomplete" hreflang="en">MDN – HTML attribute: autocomplete (en)</a></li>
</ul>
