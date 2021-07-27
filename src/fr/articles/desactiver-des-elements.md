---
title: "Désactiver des éléments HTML"
abstract: "Comment désactiver des éléments dans la page ?"
date: "2021-07-01"
tags:
  - web
---

# Désactiver un champ de formulaire

Pour désactiver un champ de formulaire il suffit de lui attribuer l'attribut `disabled` :

```html
<button disabled>Supprimer</button>
<input type="text" name="address" disabled>
```
Si `disable` est utilisé sur un `<fieldset>`, les éléments enfants sont désactivés.
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

# Désactiver un lien

Pour désactiver un lien, contrairement à la technique précédente, l'utilisation de l'attribut `disabled` n'est pas autorisée. Il est tout de même possible de désactiver un lien en suivant les 3 étapes suivantes : 
- supprimer l'attribut `href` pour qu'il ne puisse plus recevoir le focus
- ajouter un `role="link"` pour qu'il soit toujours considéré comme un lien par les lecteurs d'écran
- ajouter un attribut `aria-disabled="true"` pour qu'il soit indiqué comme étant désactivé  

<pre><code class="html">&lt;a role="link" aria-disabled="true"&gt;Lien désactivé&lt;/a&gt;</code></pre>

Consultez l'excellent article de Scott O'Hara sur le sujet : <a href="https://www.scottohara.me/blog/2021/05/28/disabled-links.html" hreflang="en" lang="en">Disabling a link</a>.
