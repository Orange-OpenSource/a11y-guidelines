---
title: "Formulaire partie 1 - Structurer son formulaire"
abstract: "Faire un formulaire accessible, partie 1 : labéliser ses champs et structurer son formulaire"
date: "2022-12-12"
updateDate: "2026-01-01"
tags:
  - web
  - intermediate
  - component
js:
- script.js
titleBeforeTag: true
---

## Introduction

Pour qu'un formulaire soit accessible à l'ensemble des utilisateurs, quelques règles doivent être respectées lors du développement.

Nous verrons dans cette première partie comment bien construire le formulaire, puis, dans la deuxième partie, la soumission et les étapes de validation.

Nous allons développer un formulaire d'inscription afin de voir toutes les subtilités pour rendre un formulaire accessible.

Dans cet exemple, nous avons utilisé <a href="http://boosted.orange.com/" target="_blank">la librairie Boosted</a>. Celle-ci permet d'obtenir des formulaires dont le design est conforme à la charte Orange.

## Étiqueter les champs de formulaires

Les étiquettes doivent décrire le rôle de chaque champ du formulaire. Afin que tous les utilisateurs puissent avoir accès à la même information, il est important que ces étiquettes soient correctement associées à leurs champs de formulaire. Pour réaliser ceci il existe plusieurs techniques.

### La balise label

La solution privilégiée est l'utilisation de la balise <code>label</code>. C'est la mieux supportée par les technologies d'assistance. Il existe deux manières d'utiliser cette balise <code>label</code>&nbsp;:

<ul>
  <li>lier explicitement la balise
    <code>label</code>
    avec son champ en renseignant un attribut
    <code>for</code>
    qui correspondra avec l'<code>id</code>
    du champ de formulaire auquel il est associé (solution conseillée),</li>
  <li>lier implicitement la balise
    <code>label</code>
    avec son champ, dans ce cas, la balise
    <code>label</code>
    sera utilisée comme un conteneur entourant le champ de formulaire.</li>
</ul>

#### Exemple

Exemple d'étiquettes correctement liées de manière explicite&nbsp;:

<div class="col-md-8">
  <form id="formulaire" class="border border-secondary p-3 my-2">
    <div class="mb-2">
      <label for="email" class="form-label">Email</label>
      <input type="text" class="form-control" id="email"/>
    </div>
    <div class="mb-2">
      <label for="name" class="form-label">Nom</label>
      <input type="text" class="form-control" id="name"/>
    </div>
    <div class="mb-2">
      <label for="firstname" class="form-label">Prénom</label>
      <input type="text" class="form-control" id="firstname"/>
    </div>
  </form>
</div>

Exemple de code&nbsp;:

```html
<form id="formulaire" class="border border-secondary p-3 my-2">
  <div class="mb-2">
    <label for="email" class="form-label">Email</label>
    <input type="text" class="form-control" id="email"/>
  </div>
  <div class="mb-2">
    <label for="name" class="form-label">Nom</label>
    <input type="text" class="form-control" id="name"/>
  </div>
  <div class="mb-2">
    <label for="firstname" class="form-label">Prénom</label>
    <input type="text" class="form-control" id="firstname"/>
  </div>
</form>
```

### Masquer les étiquettes de manière accessible

Dans certains cas, il peut être utile de masquer l'étiquette visuellement. Attention, on peut masquer les étiquettes si et seulement si la fonction champ est suffisamment claire et compréhensible dans son contexte : par exemple, un champ de recherche à côté d'une icône loupe.

Même si l'étiquette est masquée visuellement, elle doit toujours être accessible pour les technologies d'assistance.

Cette méthode consiste a utiliser une classe CSS (utilisation de la classe <code>visually-hidden</code> de Bootstrap/Boosted) permettant un masquage accessible. L'utilisation du masquage accessible permet de masquer l'élément à l'écran, tout en conservant sa vocalisation par les outils ou technologies d'assistance (AT). Attention, ne pas utiliser du masquage CSS classique (<code>display: none;</code> ou <code>visibility: hidden;</code>) car l'élément sera masqué également pour les lecteurs d'écran.

Consultez l'exemple sur <a href="../../../web/exemples-de-composants/masquage-accessible/" target="_blank">l'exemple sur le masquage accessible</a> pour plus d'informations.

#### Exemple

Par exemple, nous pouvons utiliser le masquage accessible pour un champ de recherche, si un bouton avec pour libellé recherche, ou une image loupe, est à coté du champ. Ainsi, l'étiquette du champ est cachée visuellement afin d'éviter une redondance.
Exemple de code&nbsp;:

```html
<label for="recherche" class="visually-hidden">Recherche: </label>
<input type="text" name="recherche" id="recherche">
<button type="submit">Recherche</button>
```

### Les attributs ARIA

Il est aussi possible d'utiliser les attributs <code>aria-label</code> et <code>aria-labelledby</code> pour étiqueter des champs de formulaire. Le support est généralement bon, mais varie selon la technologie d'assistance et la version du navigateur ; testez donc avec les technologies d'assistance (NVDA, JAWS, VoiceOver, TalkBack, etc.) et les navigateurs ciblés.

<ul>
  <li>L'attribut <code>aria-labelledby</code> permet de préciser l'<code>id</code> d'un élément présent dans le code qui sera utilisé pour étiqueter le champ.
  </li>
  <li>L'attribut <code>aria-label</code> permet de préciser directement un label sous forme d'une chaîne de caractères. Attention l'information ne sera pas donnée visuellement.</li>
</ul>

Un exemple possible&nbsp;:

```html
<input type="text" name="recherche" aria-labelledby="recherche">
<button id="recherche" type="submit" class="icon-loup" aria-label="Recherche"></button>
```

### L'attribut title

L'attribut <code>title</code> permet d'étiqueter un champ de formulaire de manière accessible, mais ne constitue pas pour autant un substitut fiable à une étiquette visible. Il déclenche également l'affichage d'une infobulle au survol de l'élément avec la souris, ce qui peut aider les utilisateurs présentant des troubles cognitifs et les utilisateurs débutants. De plus, l'attribut <code>title</code> n'est souvent pas accessible aux utilisateurs ne naviguant qu'au clavier et n'est pas lu de manière fiable par les lecteurs d'écran.

Attention, nous pourrions être tentés d'utiliser l'attribut <code>placeholder</code>. Cet attribut n'est pas assez robuste, en effet&nbsp;:

<ul>
  <li>le texte du <code>placeholder</code> qui s'affiche dans le champ n'est généralement pas assez contrasté&nbsp;;
  </li>
  <li>il s'efface à la saisie du contenu dans le champ (entraînant des difficultés en cas de déficience
    cognitive)&nbsp;;
  </li>
  <li>le <code>placeholder</code> n'est pas toujours lu par les aides techniques&nbsp;;</li>
  <li>il rend les corrections difficiles en cas d'erreur s'il n'existe pas de label affiché&nbsp;;</li>
</ul>

En revanche, le <code>placeholder</code> peut servir de guide, d'aide pour remplir le champ sans que cette information soit absolument nécessaire (par exemple, proposer une valeur attendue valide)&nbsp;: ne pas hésiter à l'utiliser pour ce type de besoin.


## Regrouper les champs de même nature

Lorsque nécessaire, il est important de regrouper les champs de même nature, ça permettra de rendre l'ensemble du formulaire plus compréhensible.
La plupart du temps, on regroupe nos boutons radio, ou nos cases à cocher, afin d'associer une entête à ces éléments.

Pour les regrouper, on utilise la balise <code>fieldset</code>, qui aura comme premier enfant la balise <code>legend</code> qui servira d'entête à nos champs regroupés.

### Exemple

Dans notre formulaire d'inscription, on peut ajouter le genre de notre utilisateur. Pour cela, on va implémenter des boutons radio, et les regrouper avec l'entête <strong>Genre</strong>

<div class="col-md-8">
  <form id="formulaire3" class="border border-secondary p-3 my-2">
    [...]
    <fieldset>
      <legend>Genre</legend>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="M" value="M">
        <label class="form-check-label" for="M">M</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="Mme" value="Mme">
        <label class="form-check-label" for="Mme">Mme</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="non-binaire" value="Non-binaire" >
        <label class="form-check-label" for="non-binaire">Non-binaire</label>
      </div>
    </fieldset>
  </form>
</div>

Un exemple possible&nbsp;:

```html
<div class="col-md-8">
  <form id="formulaire3" class="border border-secondary p-3 my-2">
    [...]
    <fieldset>
      <legend>Genre</legend>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="M" value="M">
        <label class="form-check-label" for="M">M</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="Mme" value="Mme">
        <label class="form-check-label" for="Mme">Mme</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="non-binaire" value="Non-binaire" >
        <label class="form-check-label" for="non-binaire">Non-binaire</label>
      </div>
    </fieldset>
  </form>
</div>
```

## Préciser le type ou le format attendu

Pour aider l'utilisateur, il est aussi important de lui préciser le type ou le format attendu lorsque nécessaire. Par exemple, pour une date de naissance, on doit, si besoin, lui indiquer le format de saisie (jj/mm/aaaa).

Pour informer l'utilisateur, on peut&nbsp;:

<ul>
  <li>fournir les instructions dans l'étiquette visible</li>
  <li>utiliser l'attribut <code>aria-labelledby</code> ou <code>aria-describedby</code></li>
</ul>


### Exemple

Pour notre formulaire d'inscription, nous allons rajouter un champ de mot de passe en précisant le format que l'on souhaite.

Lorsqu'on ajoute un champ mot de passe, il est aussi important de laisser la possibilité d'afficher ou de cacher le mot de passe. Cela permet aux utilisateurs atteints de troubles moteurs, de l'attention ou cognitifs d'éviter d'éventuelles erreurs de saisie.

<div class="col-md-8">
  <form id="formulaire4" class="border border-secondary p-3 my-2">
    <label for="password" class="form-label">Mot de passe </label>
    <div class="mb-2 input-group">
      <input type="password" class="form-control" id="password" aria-describedby="passwordHelpBlock"/>
      <span class="input-group-text">
        <button type="button" class="btn btn-icon btn-outline-secondary btn-sm" id="password_visibility" title="Afficher le mot de passe" >
          <svg aria-hidden="true" focusable="false" fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 1000 1000">
            <defs>
              <style>
                .cls-1 {
                  fill-rule: evenodd;
                }
              </style>
            </defs>
            <path id="vision" class="cls-1" d="M513.081,250.129c-4.017,0-8.041-.129-12.081-0.129s-8.064.129-12.081,0.129C301.335,250.129,111.491,382.343,50,500c61.491,117.656,249.335,249.871,436.919,249.871,4.017,0,8.04.129,12.081,0.129s8.064-.129,12.081-0.129C698.665,749.871,888.51,617.656,950,500,888.51,382.343,700.665,250.129,513.081,250.129ZM498.62,680a180,180,0,1,1,180-180A180,180,0,0,1,498.62,680Zm-378.2-179.963c29.782-41.595,77.4-84.081,132.916-117.816a545.263,545.263,0,0,1,55.918-29.695,239.848,239.848,0,0,0,.78,295.942,537.117,537.117,0,0,1-57.553-30.6C197.469,584.226,150.153,541.734,120.417,500.034Zm626.25,117.747a544.106,544.106,0,0,1-60.236,31.655,239.784,239.784,0,0,0-.761-299.823,536.07,536.07,0,0,1,61.852,32.517c55.01,33.642,102.326,76.136,132.061,117.836C849.8,541.564,802.185,584.045,746.667,617.781ZM597.931,453.153a48.227,48.227,0,1,1-62.472-56.6A109.731,109.731,0,1,0,597.931,453.153Z" />
          </svg>
        </button>
      </span>
    </div>
    <p id="passwordHelpBlock" class="form-text mb-0">
        Votre mot de passe doit contenir au moins 6 caractères.
    </p>
  </form>
</div>

Un exemple possible&nbsp;:

```html
<div class="col-md-8">
  <form id="formulaire4" class="border border-secondary p-3 my-2">
    <label for="password" class="form-label">Mot de passe </label>
    <div class="mb-2 input-group">
      <input type="password" class="form-control" id="password" aria-describedby="passwordHelpBlock"/>
      <span class="input-group-text">
        <button type="button" class="btn btn-icon btn-outline-secondary btn-sm" id="password_visibility" title="Afficher le mot de passe" >
          <svg aria-hidden="true" focusable="false" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            [...]
          </svg>
        </button>
      </span>
    </div>
    <p id="passwordHelpBlock" class="form-text mb-0">
        Votre mot de passe doit contenir minimum 6 caractères.
      </p>
  </form>
</div>
```

## Exemple complet

L'exemple complet avec tous les éléments que l'on a passés en revue. Dans la deuxième partie, on verra comment valider le formulaire et gérer les messages d'erreurs.
Pour la suite de l'exercice et compléter notre formulaire d'inscription, nous avons rajouté des champs pour l'adresse (adresse, ville, code postal).

<div class="col-md-8">
  <form id="formulaire_final" class="border border-secondary p-3 my-2">
    <div class="mb-2">
      <label for="email_final" class="form-label">Email</label>
      <input type="text" class="form-control" id="email_final"/>
    </div>
    <label for="password_final" class="form-label">Mot de passe</label>
    <div class="mb-2 input-group">
      <input type="password" class="form-control" id="password_final" aria-describedby="passwordHelpBlock_final"/>
      <span class="input-group-text">
        <button type="button" class="btn btn-icon btn-outline-secondary btn-sm" id="password_visibility_final" title="Afficher le mot de passe" >
          <svg aria-hidden="true" focusable="false" fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 1000 1000">
            <defs>
              <style>
                .cls-1 {
                  fill-rule: evenodd;
                }
              </style>
            </defs>
            <path id="vision_final" class="cls-1" d="M513.081,250.129c-4.017,0-8.041-.129-12.081-0.129s-8.064.129-12.081,0.129C301.335,250.129,111.491,382.343,50,500c61.491,117.656,249.335,249.871,436.919,249.871,4.017,0,8.04.129,12.081,0.129s8.064-.129,12.081-0.129C698.665,749.871,888.51,617.656,950,500,888.51,382.343,700.665,250.129,513.081,250.129ZM498.62,680a180,180,0,1,1,180-180A180,180,0,0,1,498.62,680Zm-378.2-179.963c29.782-41.595,77.4-84.081,132.916-117.816a545.263,545.263,0,0,1,55.918-29.695,239.848,239.848,0,0,0,.78,295.942,537.117,537.117,0,0,1-57.553-30.6C197.469,584.226,150.153,541.734,120.417,500.034Zm626.25,117.747a544.106,544.106,0,0,1-60.236,31.655,239.784,239.784,0,0,0-.761-299.823,536.07,536.07,0,0,1,61.852,32.517c55.01,33.642,102.326,76.136,132.061,117.836C849.8,541.564,802.185,584.045,746.667,617.781ZM597.931,453.153a48.227,48.227,0,1,1-62.472-56.6A109.731,109.731,0,1,0,597.931,453.153Z" />
          </svg>
        </button>
      </span>
    </div>
    <p id="passwordHelpBlock_final" class="form-text mb-0">
        Votre mot de passe doit contenir minimum 6 caractères.
    </p>
    <div class="mb-2">
      <label for="name_final" class="form-label">Nom</label>
      <input type="text" class="form-control" id="name_final"/>
    </div>
    <div class="mb-2">
      <label for="firstname_final" class="form-label">Prénom</label>
      <input type="text" class="form-control" id="firstname_final"/>
    </div>
    <fieldset>
      <legend>Genre</legend>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="inlineRadioOptions_final" id="M_final" value="M">
        <label class="form-check-label" for="M_final">M</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="inlineRadioOptions_final" id="Mme_final" value="Mme">
        <label class="form-check-label" for="Mme_final">Mme</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="inlineRadioOptions_final" id="non-binaire_final" value="Non-binaire" >
        <label class="form-check-label" for="non-binaire_final">Non-binaire</label>
      </div>
    </fieldset>
    <div class="mb-2">
      <label for="adresse_final" class="form-label">Adresse</label>
      <input type="text" class="form-control" id="adresse_final"/>
    </div>
    <div class="mb-2">
      <label for="adresse2_final" class="form-label">Complément d'adresse</label>
      <input type="text" class="form-control" id="adresse2_final"/>
    </div>
    <div class="mb-2">
      <label for="ville_final" class="form-label">Ville</label>
      <input type="text" class="form-control" id="ville_final"/>
    </div>
    <div class="mb-2">
      <label for="cp_final" class="form-label">Code postal</label>
      <input type="text" class="form-control" id="cp_final"/>
    </div>
  </form>
</div>

Le code final :

```html
<div class="col-md-8">
  <form id="formulaire_final" class="border border-secondary p-3 my-2">
    <div class="mb-2">
      <label for="email_final" class="form-label">Email</label>
      <input type="text" class="form-control" id="email_final"/>
    </div>
    <label for="password_final" class="form-label">Mot de passe</label>
    <div class="mb-2 input-group">
      <input type="password" class="form-control" id="password_final" aria-describedby="passwordHelpBlock_final"/>
      <span class="input-group-text">
        <button type="button" class="btn btn-icon btn-outline-secondary btn-sm" id="password_visibility_final" title="Afficher le mot de passe" >
          <svg aria-hidden="true" focusable="false" fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 1000 1000"></svg>
        </button>
      </span>
    </div>
    <p id="passwordHelpBlock_final" class="form-text mb-0">
      Votre mot de passe doit contenir minimum 6 caractères.
    </p>
    <div class="mb-2">
      <label for="name_final" class="form-label">Nom</label>
      <input type="text" class="form-control" id="name_final"/>
    </div>
    <div class="mb-2">
      <label for="firstname_final" class="form-label">Prénom</label>
      <input type="text" class="form-control" id="firstname_final"/>
    </div>
    <fieldset>
      <legend>Genre</legend>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="inlineRadioOptions_final" id="M_final" value="M">
        <label class="form-check-label" for="M_final">M</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="inlineRadioOptions_final" id="Mme_final" value="Mme">
        <label class="form-check-label" for="Mme_final">Mme</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="inlineRadioOptions_final" id="non-binaire_final" value="Non-binaire" >
        <label class="form-check-label" for="non-binaire_final">non-binaire</label>
      </div>
    </fieldset>
    <div class="mb-2">
      <label for="adresse_final" class="form-label">Adresse</label>
      <input type="text" class="form-control" id="adresse_final"/>
    </div>
    <div class="mb-2">
      <label for="adresse2_final" class="form-label">Complément d'adresse</label>
      <input type="text" class="form-control" id="adresse2_final"/>
    </div>
    <div class="mb-2">
      <label for="ville_final" class="form-label">Ville</label>
      <input type="text" class="form-control" id="ville_final"/>
    </div>
    <div class="mb-2">
      <label for="cp_final" class="form-label">Code postal</label>
      <input type="text" class="form-control" id="cp_final"/>
    </div>
  </form>
</div>
```

## Lien vers la deuxième partie

<a href="../part2/">Formulaire partie 2 - Soumettre son formulaire</a>