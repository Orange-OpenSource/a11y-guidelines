---
title: "Fenêtres modales : comprendre les bonnes pratiques d'accessibilité en 2026"
abstract: "Omniprésentes sur le web, les fenêtres modales font partie des composants les plus complexes à implémenter correctement. HTML, ARIA, gestion du focus : faisons le point sur les pratiques actuelles."
titleBeforeTag: true
date: "2026-09-24"
tags:
  - web
  - advanced
---

Les fenêtres modales sont devenues un composant incontournable des interfaces web modernes : formulaires, confirmations d'action, paramètres, authentification, affichage de contenus complémentaires...

Pourtant, leur mise en œuvre soulève de nombreux enjeux en matière d'accessibilité.

Une fenêtre modale ne consiste pas simplement à afficher un élément au-dessus du contenu de la page. Son ouverture modifie le contexte d'interaction de l'utilisateur : le focus clavier doit être géré correctement, les technologies d'assistance doivent pouvoir identifier la boîte de dialogue et le contenu situé derrière la fenêtre doit être rendu inerte tant qu'elle est ouverte.

Pendant longtemps, les développeurs ont dû implémenter eux-mêmes une grande partie de ces mécanismes à l'aide de JavaScript et d'ARIA. L'élément HTML `<dialog>` apporte aujourd'hui des mécanismes natifs qui simplifient la création de fenêtres modales, sans dispenser de vérifier leur comportement et leur accessibilité.

Cet article propose un tour d'horizon des bonnes pratiques actuelles autour des fenêtres modales :

- distinguer une boîte de dialogue modale d'une boîte de dialogue non modale ;
- découvrir les possibilités offertes par l'élément HTML `<dialog>` ;
- identifier le rôle des attributs ARIA ;
- comprendre les enjeux liés à la gestion du focus ;
- éviter les erreurs fréquemment rencontrées lors des audits d'accessibilité.

## Qu'est-ce qu'une fenêtre modale ?

Une fenêtre modale est une boîte de dialogue qui suspend temporairement l'interaction avec le reste de la page et demande à l'utilisateur d'interagir avec elle avant de reprendre son activité précédente.

Une modale peut par exemple être utilisée pour :

- confirmer une suppression ;
- afficher un formulaire ;
- demander une authentification ;
- présenter des paramètres ;
- afficher une information importante.

Lorsque la fenêtre est ouverte, le contenu situé derrière elle doit devenir temporairement inactif.

Il est important de distinguer deux notions souvent confondues :

- une boîte de dialogue (*dialog*) ;
- une boîte de dialogue modale (*modal dialog*).

Une boîte de dialogue non modale peut coexister avec le reste de l'interface, que l'utilisateur peut continuer à utiliser. À l'inverse, une boîte de dialogue modale suspend temporairement l'interaction avec le reste de la page jusqu'à sa fermeture.

Cette distinction existe à la fois dans les spécifications HTML et dans les modèles de conception ARIA.

## L'arrivée de l'élément HTML `<dialog>`

Pendant de nombreuses années, la création d'une fenêtre modale reposait principalement sur des éléments génériques comme des `<div>` enrichis avec JavaScript et des attributs ARIA.

HTML propose désormais un élément dédié : `<dialog>`.

Exemple minimal :

```html
<dialog>
  <h2>Supprimer cet élément ?</h2>

  <p>
    Cette action est définitive.
  </p>

  <button>Annuler</button>
  <button>Supprimer</button>
</dialog>
```

Cet exemple présente uniquement la structure HTML du dialogue. Son ouverture et le comportement des boutons doivent être définis séparément.

L'élément peut être manipulé en JavaScript grâce à différentes méthodes, notamment pour l'ouvrir ou le fermer.

Cette approche native permet aux navigateurs d'intégrer directement une partie des comportements traditionnellement implémentés manuellement.

Cependant, utiliser `<dialog>` ne dispense pas de réfléchir à l'accessibilité du composant.

Une fenêtre modale reste un composant complexe dont certains aspects doivent toujours être pris en compte lors de son développement.

## Ouvrir une boîte de dialogue

L'élément `<dialog>` peut être affiché de deux manières.

### Fenêtre non modale

```javascript
dialog.show();
```

La méthode `show()` ouvre une boîte de dialogue non modale. Le reste du document demeure interactif : l'utilisateur peut poursuivre ses interactions avec le contenu situé à l'extérieur de la boîte de dialogue.

### Fenêtre modale

```javascript
dialog.showModal();
```

La méthode `showModal()` ouvre la boîte de dialogue de manière modale. Elle la place dans la couche supérieure du navigateur (*top layer*) et rend le reste du document inerte.

Il n'est donc pas nécessaire de rendre manuellement le contenu extérieur inerte pour obtenir ce comportement avec `showModal()`.

Il faut choisir la méthode en fonction du comportement recherché : `show()` pour une boîte de dialogue non modale, `showModal()` pour une boîte de dialogue modale.

### Exemple complet

L'élément `<dialog>` peut être ouvert depuis un bouton, puis fermé depuis un bouton placé dans la boîte de dialogue.

```html
<button type="button" id="open-dialog">
  Afficher les détails
</button>

<dialog id="details-dialog" aria-labelledby="details-title">
  <h2 id="details-title">Informations complémentaires</h2>

  <p>Voici les informations demandées.</p>

  <button type="button" id="close-dialog">
    Fermer
  </button>
</dialog>
```

```javascript
const dialog = document.querySelector("#details-dialog");

document.querySelector("#open-dialog").addEventListener("click", () => {
  dialog.showModal();
});

document.querySelector("#close-dialog").addEventListener("click", () => {
  dialog.close();
});
```

Cet exemple illustre le mécanisme d'ouverture et de fermeture. Dans une application réelle, il faut également vérifier le comportement du focus, la gestion des erreurs et la cohérence du parcours après la fermeture.

## Fermeture

L'élément HTML `<dialog>` propose plusieurs mécanismes natifs de fermeture. Le choix dépend du comportement attendu.

### Fermer directement avec `close()`

La méthode `close()` ferme la boîte de dialogue. Elle peut recevoir une chaîne de caractères qui sera exposée via la propriété `returnValue`.

```javascript
dialog.close();
```

### Demander la fermeture avec `requestClose()`

La méthode `requestClose()` déclenche une demande de fermeture. Elle provoque l'événement `cancel`, qui permet au code d'empêcher la fermeture avec `preventDefault()`. Si cet événement n'est pas annulé, la boîte de dialogue se ferme.

```javascript
dialog.requestClose();
```

Cette méthode est notamment utile lorsqu'une fermeture doit pouvoir être interceptée, par exemple pour demander confirmation avant d'abandonner une saisie. Sa prise en charge doit être vérifiée si le projet cible des navigateurs anciens.

### Fermer avec un formulaire

Un formulaire placé dans une boîte de dialogue peut utiliser `method="dialog"`. Sa soumission ferme alors la boîte de dialogue sans transmettre les données du formulaire. La valeur du bouton de soumission activé peut être récupérée via `returnValue`.

```html
<form method="dialog">
  <button value="cancel">Annuler</button>
  <button value="confirm">Confirmer</button>
</form>
```

### Prévoir les interactions de fermeture

La fermeture doit être cohérente avec le rôle de la boîte de dialogue et le parcours proposé. Un bouton de fermeture visible et utilisable au clavier reste un moyen explicite de quitter la fenêtre.

L'attribut `closedby` permet de préciser quelles actions utilisateur peuvent fermer une boîte de dialogue. Il distingue trois types d'actions :

- une **fermeture légère**, par exemple lorsque l'utilisateur clique en dehors de la fenêtre ;
- une **demande de fermeture propre à la plateforme**, comme la touche `Échap` sur ordinateur ;
- un **mécanisme défini par le développeur**, par exemple un bouton qui appelle `close()` ou la soumission d'un formulaire utilisant `method="dialog"`.

Il propose trois valeurs :

- `any` : autorise les trois types d'action ;
- `closerequest` : autorise les demandes de fermeture propres à la plateforme et les mécanismes définis par le développeur, mais pas la fermeture légère ;
- `none` : désactive les fermetures automatiques déclenchées par les actions utilisateur ; un mécanisme défini par le développeur reste nécessaire.

Si l'attribut est absent ou invalide, son comportement dépend de la méthode d'ouverture : un dialogue ouvert avec `showModal()` se comporte comme si `closedby="closerequest"`, tandis qu'un dialogue ouvert autrement se comporte comme si `closedby="none"`.

L'attribut ne bloque pas les appels programmatiques à `close()`. La méthode `requestClose()` constitue, quant à elle, une demande de fermeture qui peut être annulée via l'événement `cancel`.

**Statut et compatibilité :** l'attribut `closedby` fait partie du standard HTML, mais sa prise en charge varie encore selon les navigateurs. Vérifiez sa disponibilité dans les environnements ciblés avant de vous appuyer sur lui pour définir le comportement de fermeture.

## Ce que fournit réellement `<dialog>`

L'élément HTML `<dialog>`, lorsqu'il est ouvert avec `showModal()`, fournit plusieurs mécanismes natifs qui évitent de devoir les réimplémenter manuellement.

- **Une couche d'affichage dédiée :** la boîte de dialogue est placée dans la *top layer* du navigateur, au-dessus du contenu habituel du document.
- **Le confinement des interactions :** le navigateur rend inerte le contenu extérieur à la boîte de dialogue. Le focus clavier ne peut donc pas être déplacé vers les éléments de la page situés derrière la fenêtre. Ce mécanisme natif évite d'avoir à implémenter manuellement le confinement du focus, mais ne garantit pas une boucle de tabulation entre le dernier et le premier élément focalisable.
- **Un arrière-plan personnalisable :** le pseudo-élément `::backdrop` permet de styliser la zone située derrière la boîte de dialogue.

Par exemple, le pseudo-élément `::backdrop` permet d'assombrir la page derrière une boîte de dialogue modale :

```css
dialog::backdrop {
  background-color: rgb(0 0 0 / 60%);
}
```

Le pseudo-élément `::backdrop` n'est pas un élément HTML à ajouter au document. Il représente la zone située derrière un élément placé dans la couche supérieure, notamment un `<dialog>` ouvert avec `showModal()`.

Ces mécanismes constituent une base solide pour une fenêtre modale accessible. Ils ne dispensent toutefois pas de concevoir correctement son contenu, son nom accessible, son point de départ pour la navigation et ses moyens de fermeture.

## Gestion du focus

La gestion du focus est essentielle à l'accessibilité des fenêtres modales. Lorsqu'un élément `<dialog>` est ouvert avec `showModal()`, le navigateur place le focus à l'intérieur de la boîte de dialogue. Le développeur doit néanmoins choisir un point de départ adapté au contenu et au parcours proposé.

Le point de départ peut notamment être défini avec l'attribut `autofocus` ou ajusté par programmation lorsque le contexte le justifie.

Le choix du focus initial dépend notamment de la nature du contenu :

- **Dialogue court et interactif :** le focus peut être placé sur le premier contrôle pertinent.
- **Dialogue contenant un texte long ou une structure complexe :** il peut être préférable de focaliser un élément statique au début du contenu, comme le titre ou le premier paragraphe, afin de faciliter son exploration.
- **Dialogue demandant une décision difficilement réversible :** le focus peut être placé sur l'action la moins destructive, lorsque cela aide à prévenir une validation accidentelle.

Ces stratégies sont décrites dans le WAI-ARIA Authoring Practices Guide (APG). Elles constituent des recommandations de conception : le choix approprié dépend du contenu et du parcours utilisateur.

Il faut également prévoir ce qui se passe lorsque la boîte de dialogue se ferme. En règle générale, le focus revient à l'élément qui l'a ouverte. Si cet élément n'existe plus ou si la suite du parcours rend un autre point de départ plus pertinent, le focus doit être placé sur un élément cohérent avec la tâche en cours.

## Navigation clavier

### Avec l'élément HTML `<dialog>`

Avec `showModal()`, le navigateur rend le contenu extérieur inerte et maintient le focus dans le contexte modal. Il faut toutefois distinguer ce confinement du focus de la boucle de tabulation décrite par le WAI-ARIA Authoring Practices Guide (APG), selon laquelle `Tab` depuis le dernier élément focalisable revient au premier, et `Maj + Tab` depuis le premier revient au dernier.

Le comportement effectif doit être vérifié dans les navigateurs et avec les technologies d’assistance ciblés. Pour une modale personnalisée, le confinement du focus et les comportements de navigation au clavier doivent être implémentés et testés explicitement.

### Le modèle recommandé par le WAI-ARIA APG

Le *Dialog (Modal) Pattern* du WAI-ARIA Authoring Practices Guide (APG) décrit les interactions clavier suivantes :

- `Tab` déplace le focus vers l'élément focalisable suivant dans la boîte de dialogue. Depuis le dernier élément, il revient au premier.
- `Shift + Tab` déplace le focus vers l'élément focalisable précédent. Depuis le premier élément, il revient au dernier.
- `Escape` ferme la boîte de dialogue.

Ces comportements constituent le modèle de conception recommandé par l'APG. Ils ne doivent pas être confondus avec une description exhaustive du comportement natif de chaque navigateur : en particulier, le confinement du focus assuré par `<dialog>` ne signifie pas nécessairement que la tabulation boucle du dernier au premier élément.

Le comportement de fermeture avec `Escape` dépend également de la configuration de la boîte de dialogue, notamment de l'attribut `closedby` lorsqu'il est pris en charge.

### Et pour une modale personnalisée ?

Une modale construite à partir d'éléments génériques, comme une `<div>`, ne bénéficie pas automatiquement des mécanismes natifs de `<dialog>`. Le développeur doit implémenter et tester les comportements nécessaires, notamment :

- placer le focus dans la fenêtre à son ouverture ;
- empêcher l'interaction avec le contenu extérieur tant que la fenêtre est modale ;
- gérer correctement la navigation au clavier ;
- prendre en charge la fermeture au clavier, notamment avec `Escape` lorsque ce comportement est prévu ;
- restaurer le focus à la fermeture ;
- empêcher les interactions avec le contenu extérieur, par exemple à l'aide de `inert` ;
- veiller à ce que le contenu extérieur ne soit pas exposé à tort aux technologies d'assistance. Dans certaines implémentations personnalisées, `aria-hidden="true"` peut être utilisé comme complément ou solution de compatibilité, mais il ne remplace pas le blocage des interactions. Il faut également veiller à ne pas masquer la boîte de dialogue elle-même en la plaçant dans un élément ancêtre portant `aria-hidden="true"`.

Enfin, une fenêtre modale doit proposer un moyen explicite et visible de la fermer, par exemple un bouton « Fermer » ou « Annuler ». La touche `Escape` constitue un moyen complémentaire, et non un substitut à ce bouton.

## HTML et ARIA

Une fenêtre modale peut être construite à partir de l'élément HTML `<dialog>` ou d'éléments génériques, comme une `<div>`. Les deux approches ne fournissent pas les mêmes mécanismes natifs.

Pour une modale personnalisée, les attributs ARIA permettent notamment d'exposer sa nature et son état aux technologies d'assistance :

- `role="dialog"` identifie la boîte de dialogue ;
- `aria-modal="true"` indique que la boîte de dialogue est modale ;
- `aria-labelledby` ou `aria-label` lui fournit un nom accessible ;
- `aria-describedby` peut lui associer une description complémentaire, lorsque cela est pertinent.

**Attention : `aria-modal="true"` ne rend pas, à lui seul, une fenêtre modale.** Cet attribut communique la modalité aux technologies d'assistance, mais ne bloque pas les interactions avec le contenu extérieur et ne confine pas le focus. Ces comportements doivent être assurés par l'implémentation.

Il ne faut donc utiliser `aria-modal="true"` que lorsque la fenêtre est réellement modale : le contenu extérieur doit être rendu inactif pendant son ouverture et la navigation au clavier doit rester cohérente avec ce contexte.

Avec l'élément HTML `<dialog>`, le rôle `dialog` est fourni nativement. Lorsqu'il est ouvert avec `showModal()`, le navigateur assure également les mécanismes propres au contexte modal et expose cette modalité aux technologies d'assistance. Il n'est donc généralement pas nécessaire d'ajouter explicitement `aria-modal="true"`.

Il convient plus largement d'éviter les attributs ARIA qui feraient doublon avec la sémantique native, sauf besoin particulier.

## `dialog` et `alertdialog`

Toutes les boîtes de dialogue modales ne remplissent pas la même fonction. Le rôle ARIA doit refléter l’objectif réel du composant, et non simplement l’importance de l’action proposée.

### Le rôle `dialog`

Le rôle `dialog` convient aux interactions qui nécessitent un échange avec l'utilisateur dans une fenêtre distincte du reste de l'interface : formulaire, paramètres, consultation d'informations ou modification d'une configuration, par exemple.

### Le rôle `alertdialog`

Le rôle `alertdialog` est destiné aux boîtes de dialogue modales qui interrompent le déroulement habituel de l'interaction pour communiquer un message important et obtenir une réponse de l'utilisateur.

**Son caractère interruptif justifie un usage parcimonieux.** Il ne doit pas être choisi simplement parce qu'une action est importante ou irréversible, mais lorsque la situation nécessite réellement d'attirer immédiatement l'attention de l'utilisateur et de solliciter une réponse.

Il peut notamment convenir à une confirmation d'action irréversible ou à un message d'erreur qui nécessite une intervention. **Une confirmation de suppression ne justifie toutefois pas, à elle seule, le recours à `alertdialog`** : le choix dépend du contexte et de la nécessité réelle d'interrompre l'utilisateur.

Le focus initial doit être placé à l'intérieur de la boîte de dialogue. Lorsqu'une réponse est attendue, il peut être pertinent de le placer sur un bouton, en privilégiant si nécessaire l'action la moins destructive. Le choix doit toutefois rester adapté au contenu et à la situation.

Le rôle permet aux technologies d'assistance d'identifier ce type de dialogue, mais son annonce et son traitement peuvent varier selon les environnements.

### Quel rôle choisir ?

Le choix ne repose donc pas uniquement sur le caractère critique du message ou sur la présence d'une action destructive. Il dépend avant tout de la fonction de la boîte de dialogue et de la manière dont elle intervient dans le parcours utilisateur.

Dans les deux cas, le nom accessible doit identifier la boîte de dialogue. Pour `alertdialog`, le message principal doit également être associé à celle-ci afin que l'utilisateur puisse comprendre rapidement la situation et la réponse attendue.

## Une erreur fréquente : `aria-describedby`

L'attribut `aria-describedby` est parfois ajouté systématiquement aux fenêtres modales pour associer l'ensemble de leur contenu à leur description accessible.

Cette approche n'est pas toujours pertinente. Lorsque la boîte de dialogue contient plusieurs paragraphes, des listes ou d'autres structures sémantiques, faire restituer l'ensemble du contenu sous la forme d'une description textuelle peut rendre son exploration plus difficile.

Le WAI-ARIA Authoring Practices Guide (APG) recommande notamment d'omettre `aria-describedby` lorsque le contenu comporte des structures qui doivent être perçues pour être comprises, et qu'une annonce sous la forme d'un bloc de texte serait difficile à exploiter.

Pour une boîte de dialogue contenant un message descriptif court, l'attribut peut en revanche être utile pour en associer le contenu à la fenêtre.

**À retenir :** utilisez `aria-labelledby` pour fournir le nom accessible de la boîte de dialogue, par exemple à partir de son titre. Réservez `aria-describedby` aux descriptions dont l'annonce globale apporte réellement une information utile. Pour les contenus longs ou structurés, privilégiez leur exploration avec les mécanismes habituels de navigation de la technologie d'assistance.

## Une erreur fréquente : ajouter `tabindex`

L'attribut `tabindex` ne doit pas être utilisé sur l'élément HTML `<dialog>`. Celui-ci n'a pas besoin d'être rendu focalisable pour que son contenu puisse recevoir le focus.

En revanche, lorsqu'une boîte de dialogue contient un texte long ou une structure complexe, il peut être pertinent de placer initialement le focus sur un élément statique situé à l'intérieur de la fenêtre, comme son titre ou le premier paragraphe.

Dans ce cas, cet élément peut recevoir `tabindex="-1"` : il devient focalisable par programmation, sans être ajouté à l'ordre de tabulation habituel.

Par exemple :

```html
<dialog id="details">
  <h2 id="details-title" tabindex="-1">
    Informations complémentaires
  </h2>

  <p>
    Ce contenu présente plusieurs informations
    qui doivent pouvoir être parcourues séparément.
  </p>

  <button type="button">Fermer</button>
</dialog>
```

Le développeur peut ensuite placer explicitement le focus sur le titre au moment de l'ouverture :

```javascript
const dialog = document.querySelector("#details");
const dialogTitle = document.querySelector("#details-title");

dialog.showModal();
dialogTitle.focus();
```

Cet exemple illustre le mécanisme technique. Le choix de l'élément à focaliser doit toutefois être adapté au contenu et à l'objectif de la boîte de dialogue. Pour une modale courte, un élément interactif peut être un meilleur point de départ.

## Retour du focus

Lorsqu'une fenêtre modale se ferme, le focus doit retrouver une position cohérente avec la suite du parcours.

En règle générale, il revient sur l'élément qui a déclenché l'ouverture de la boîte de dialogue. Toutefois, cet élément peut avoir été supprimé du DOM à la suite de l'action réalisée dans la modale, par exemple lorsqu'un utilisateur confirme la suppression d'un élément de la page.

Dans ce cas, le focus doit être déplacé vers un élément pertinent pour poursuivre la tâche, comme le titre de la liste mise à jour ou le prochain élément disponible. Il ne faut pas tenter de restaurer le focus sur un élément qui n'existe plus.

Avec `<dialog>`, le navigateur mémorise l'élément précédemment focalisé et tente de restaurer le focus lors de la fermeture. Pour une modale personnalisée, ce comportement doit être géré explicitement.

Pour une modale personnalisée, il est possible de mémoriser l'élément actif avant l'ouverture, puis de restaurer le focus à la fermeture, à condition que cet élément existe toujours et soit encore pertinent :

```javascript
let previousFocus = null;

function openModal() {
  previousFocus = document.activeElement;
  // Ouvrir la modale et placer le focus à l'intérieur.
}

function closeModal() {
  // Fermer la modale et retirer son contenu de l'état modal.

  if (previousFocus instanceof HTMLElement && previousFocus.isConnected) {
    previousFocus.focus();
  } else {
    // Placer le focus sur un élément pertinent pour la suite du parcours.
  }
}
```

Cet exemple illustre le principe de mémorisation et de restauration du focus. L'ouverture, la fermeture et la gestion de l'inertie doivent être adaptées à l'implémentation réelle.

## Erreurs fréquentes observées en audit

Plusieurs défauts reviennent régulièrement lors des audits de fenêtres modales.

### Utiliser une `<div>` sans implémenter les comportements nécessaires

Une fenêtre personnalisée doit fournir la sémantique, la gestion du focus et les interactions attendues d'un dialogue modal. Une apparence visuelle correcte ne garantit pas un comportement accessible.

### Oublier le nom accessible

La boîte de dialogue doit disposer d'un nom accessible pertinent, généralement fourni par son titre avec `aria-labelledby`.

### Mal gérer le focus

Le focus doit être placé à un endroit pertinent à l'ouverture, rester cohérent pendant l'interaction et retrouver une position adaptée à la fermeture.

### Ne pas proposer de fermeture visible

Une fenêtre modale doit proposer un moyen explicite de fermeture, accessible au clavier. La touche `Escape` ou un clic extérieur ne doit pas constituer l'unique solution proposée.

### Utiliser une modale lorsque ce n'est pas nécessaire

Une modale interrompt temporairement l'interaction avec le reste de la page. Selon le besoin, une présentation directement intégrée au contenu peut être plus simple et moins intrusive.

## Conclusion

Les fenêtres modales illustrent parfaitement la complexité de certains composants d'interface modernes.

Au-delà de leur apparence visuelle, elles modifient profondément le contexte d'interaction de l'utilisateur et nécessitent une gestion rigoureuse du focus, du clavier et des technologies d'assistance.

L'arrivée de l'élément HTML `<dialog>` simplifie une partie de cette implémentation, mais ne dispense pas de respecter les bonnes pratiques d'accessibilité.

Comprendre les différences entre HTML natif, ARIA et comportements attendus permet de concevoir des interfaces plus robustes, plus interopérables et plus confortables pour l'ensemble des utilisateurs.

## Webographie

<ul lang="en">
  <li><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog" hreflang="en">MDN – HTML <code>dialog</code> element (en)</a></li>
  <li><a href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement/showModal" hreflang="en">MDN – HTMLDialogElement: showModal() method (en)</a></li>
  <li><a href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement/closedBy" hreflang="en">MDN – HTMLDialogElement: closedBy property (en)</a></li>
  <li><a href="https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/" hreflang="en">WAI-ARIA Authoring Practices Guide – Dialog (Modal) Pattern (en)</a></li>
  <li><a href="https://html.spec.whatwg.org/multipage/interactive-elements.html#the-dialog-element" hreflang="en">WHATWG – HTML Living Standard: The <code>dialog</code> element (en)</a></li>
  <li><a href="https://www.w3.org/TR/wai-aria-1.2/#dialog" hreflang="en">W3C – WAI-ARIA 1.2: dialog role (en)</a></li>
  <li><a href="https://caniuse.com/?search=closedby" hreflang="en">Can I Use – Browser support for the <code>closedby</code> attribute (en)</a></li>
</ul>
