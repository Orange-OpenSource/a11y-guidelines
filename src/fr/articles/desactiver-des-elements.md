---
title: "Désactiver des éléments HTML"
abstract: "Comment désactiver des éléments d'une page ?"
titleBeforeTag: true
date: "2021-07-01"
updateDate: "2025-10-31"
tags:
  - web
  - beginner
---

La désactivation d'un élément interactif sert à empêcher l'utilisateur d'interagir avec ce composant ou avec ses descendants.

Cette technique est à utiliser avec parcimonie, en fonction des composants et du contexte d'utilisation.

## Désactiver un bouton

Il est possible de désactiver un bouton en lui ajoutant simplement l'attribut `disabled`&nbsp;:

```html
<button disabled>Supprimer</button>
```

Cependant, cette technique n'est pas recommandée pour un bouton de soumission de formulaire pour diverses raisons, notamment : faible contraste, bouton non atteignable au clavier, aucune information donnée à l'utilisateur.

## Désactiver un champ de formulaire

Comme pour un bouton, un champ de formulaire est désactivé avec l'attribut `disabled`.

Il est ainsi possible de désactiver un champ `input` ou une zone de saisie `textarea`&nbsp;:
```html
<input type="text" name="address" disabled>
<textarea id="area" name="comment" disabled>This is a disabled comment</textarea>
```

Si `disabled` est utilisé sur un `<fieldset>`, les éléments enfants sont également désactivés. 
Dans l'exemple ci-dessous, l'`input`, la `checkbox` et le `select` sont désactivés car ils héritent de la désactivation sur le `fieldset`&nbsp;:
```html
<fieldset id="groupe" disabled>
    <input name="foo"> 
    <input type="checkbox" name="bar"> 
    <select name="values"> 
        <option value="1">Valeur 1</option>
        <option value="2">Valeur 2</option>
        <option value="3">Valeur 3</option>        
    </select>
</fieldset>
```

De la même manière, sur un `select`, l'attribut `disabled` aura un effet sur tous les choix&nbsp;:
```html
<label for="fruit-select" >Choisir un fruit :</label>
<select name="fruit" id="fruit-select" disabled>
  <option value="">Sélectionner un fruit</option>
  <option value="pomme" disabled>Pomme</option>
  <option value="banane">Banane</option>
  <option value="orange">Orange</option>
</select>
```

Il est aussi possible de désactiver une seule `option` présent dans le `select`&nbsp;:
```html
<label for="fruit-select" >Choisir un fruit :</label>
<select name="fruits" id="fruit-select">
  <option value="">Sélectionner un fruit</option>
  <option value="pomme" disabled>Pomme</option>
  <option value="banane">Banane</option>
  <option value="orange">Orange</option>
</select>
```

## Désactiver un lien

Pour désactiver un lien, l'utilisation de l'attribut `disabled` n'est pas autorisée. Cependant, il est possible de simuler une désactivation en suivant ces trois étapes&nbsp;: 
- supprimer l'attribut `href` pour qu'il ne puisse plus recevoir le focus
- ajouter un `role="link"` pour qu'il soit toujours considéré comme un lien par les lecteurs d'écran
- ajouter un attribut `aria-disabled="true"` pour qu'il soit indiqué comme étant désactivé  

<pre><code class="html">&lt;a role="link" aria-disabled="true"&gt;Lien désactivé&lt;/a&gt;</code></pre>


## L'attribut de lecture seule `read-only`

L'attribut booléen `read-only` contrôle la possibilité ou non d'éditer un champ texte. 
Il ne faut pas utiliser cet attribut pour désactiver d'autres éléments (boutons et autres éléments interactifs), car cela est justement le rôle de l'attribut `disabled`.

La principale différence entre les deux techniques réside dans le fait qu'un élément en lecture seule sera toujours atteignable au clavier et restitué par les aides techniques ; cela peut avoir un intérêt pour vérifier, sans pouvoir modifier, une information précédemment renseignée (par exemple : un email, une date de naissance, un numéro de téléphone, etc.).

## Webographie
<ul>
  <li><a href="https://www.scottohara.me/blog/2021/05/28/disabled-links.html" hreflang="en">Disabling a link - Scott O'Hara (en)</a></li>
  <li><a href="https://adamsilver.io/blog/the-problem-with-disabled-buttons-and-what-to-do-instead/" hreflang="en">The problem with disabled buttons and what to do instead - Adam Silver (en)</a></li>
  <li><a href="https://adrianroselli.com/2024/02/dont-disable-form-controls.html" hreflang="en">Don’t Disable Form Controls - Adrian Roselli (en)</a></li>
  <li><a href="https://adrianroselli.com/2024/11/avoid-read-only-controls.html" hreflang="en">Avoid Read-only Controls - Adrian Roselli (en)</a></li>
</ul>
