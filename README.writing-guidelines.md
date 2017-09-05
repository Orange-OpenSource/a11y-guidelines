# Production de contenus accessibles et conformes aux règles de typographie

Quelques points à respecter pour produire les <i lang="en">guidelines</i>.

Version 0.1 - sdeschamps - septembre 2017

## Liens vers une langue étrangère

En Markdown natif, on écrit&nbsp;:

```
[lien dans une autre langue](url)
```

Il faut écrire les liens complètement en HTML pour respecter la langue du texte du lien (`lang`) et la langue d’arrivée (`hreflang`)

Donc&nbsp;:

```
<a href="http://example.com/" lang="en" hreflang="en">This is good</a>
```

## Guillemets

Les guillemets droits, c’est le mal <span aria-label="clin d’oeil">;)</span> sauf dans le code.

En résumé&nbsp;:

- En anglais&nbsp;:
  - Guillemet ouvrant&nbsp;: `"` → `“`
  - Guillemet fermant&nbsp;: `"` → `”`
- En français&nbsp;:
  - Guillemet ouvrant&nbsp;: `"` → `«&nbsp;`
  - Guillemet fermant&nbsp;: `"` → `&nbsp;»`

(Si on voulait vraiment bien faire les choses on mettrait même des espaces fines insécables&nbsp;; cf. [Espace fine insécable par Emmanuel Clément](http://emmanuel.clement.free.fr/2017/04/10/fine-insecable.html), mais c’est plus dur à mémoriser je trouve.)

## Espaces insécables devant la ponctuation verticale

En anglais, la ponctuation verticale suit directement un mot, sans aucun espace&nbsp;:

- `word:`
- `word!`
- `word?`
- `word;`

En français en revanche, il faut mettre une espace insécable&nbsp;:

- ` :` → `&nbsp;:`
- ` !` → `&nbsp;!`
- ` ?` → `&nbsp;?`
- ` ;` → `&nbsp;;`

(Ce qui serait encore mieux, ce serait une fine insécable, voir ci-dessus.)

## Points de suspension

- Le point de suspension n’est pas une suite de trois points `...` mais un caractère `…`.
- Pas d’espace devant un point de suspension quand il suit directement un mot&nbsp;: `mot…`.
- Un espace devant le point de suspension quand il suit une virgule `mot un, mot deux, …`.

## Apostrophe

Une apostrophe doit être arrondie&nbsp;: `'` → `’`.


## Ponctuation et accents

En français, mettez des majuscules accentuées au début de vos phrases, et des cédilles&nbsp;: À, É, Ç, etc.

## Sémantique HTML&nbsp;: abréviations

Quand j’écris `HTML`, je dois a minima écrire `<abbr>HTML</abbr>`.

Si vous voulez faire les choses comme il faut, écrivez la signification de l’abréviation en entier lors de sa première apparition. Par exemple ici&nbsp;: `<abbr>HTML</abbr> <span lang="en">(Hypertext Markup Language)</span>`. Note&nbsp;: sur ce site de recommandations, nous avons mis en place un système de glossaire qui fait des liens automatiques sur chaque `abbr` vers sa signification en pied de page.