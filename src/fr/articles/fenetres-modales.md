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

Lorsque la fenêtre est ouverte, le contenu extérieur devient inerte.

Il est important de distinguer deux notions souvent confondues :

- une boîte de dialogue (*dialog*) ;
- une boîte de dialogue modale (*modal dialog*).

Une boîte de dialogue non modale peut coexister avec le reste de l'interface, que l'utilisateur peut continuer à utiliser. À l'inverse, une boîte de dialogue modale suspend temporairement l'interaction avec le reste de la page jusqu'à sa fermeture.

Cette distinction existe à la fois dans les spécifications HTML et dans les modèles de conception ARIA.

## L'arrivée de l'élément HTML `<dialog>`

Pendant de nombreuses années, la création d'une fenêtre modale reposait principalement sur des éléments génériques, comme des `<div>`, enrichis avec JavaScript et des attributs ARIA.

HTML propose désormais un élément dédié aux boîtes de dialogue : `<dialog>`.

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

Cet exemple présente uniquement la structure HTML du dialogue. Il ne définit ni son ouverture, ni le comportement des boutons.

L'élément peut être manipulé en JavaScript grâce à différentes méthodes, notamment `show()`, `showModal()` et `close()`. Le choix de la méthode d'ouverture détermine notamment si le dialogue est modal.

Lorsqu'il est ouvert avec `showModal()`, le navigateur prend nativement en charge plusieurs comportements importants : le placement du dialogue dans la couche supérieure (<span lang="en">*top layer*</span>), l'inertie du contenu situé en dehors de celui-ci et la gestion de certaines interactions au clavier.

Cette prise en charge native permet de réduire la quantité de code nécessaire par rapport à une implémentation entièrement personnalisée.

Cependant, utiliser `<dialog>` ne dispense pas de réfléchir à l'accessibilité du composant. Le contenu, les intitulés, les actions proposées, la gestion du focus et les conditions de fermeture restent autant de points à examiner lors de son développement.

## Ouvrir une boîte de dialogue

L'élément `<dialog>` peut être ouvert de deux manières, selon que l'on souhaite créer une boîte de dialogue modale ou non modale.

### Fenêtre non modale

```javascript
dialog.show();
```

La méthode `show()` ouvre une boîte de dialogue non modale. Le reste du document demeure interactif : l'utilisateur peut poursuivre ses interactions avec le contenu situé à l'extérieur de la boîte de dialogue.

### Fenêtre modale

```javascript
dialog.showModal();
```

La méthode `showModal()` ouvre la boîte de dialogue de manière modale. Elle la place dans la couche supérieure du navigateur (<span lang="en">*top layer*</span>) et rend inerte le reste du document.

Il n'est donc pas nécessaire de rendre manuellement le contenu extérieur inerte pour obtenir ce comportement avec `showModal()`.

Le choix de la méthode dépend du comportement recherché : `show()` pour une boîte de dialogue non modale, `showModal()` pour une boîte de dialogue modale.

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

Cet exemple illustre le mécanisme d'ouverture et de fermeture d'une boîte de dialogue modale. Le navigateur gère nativement le placement initial du focus et tente de le restaurer à la fermeture.

Ces comportements doivent néanmoins être vérifiés : le focus initial doit être adapté au contenu de la boîte de dialogue et, à la fermeture, permettre à l'utilisateur de reprendre son parcours. Si l'élément précédemment focalisé n'est plus disponible ou si le parcours attendu diffère du comportement natif, une gestion spécifique peut être nécessaire.

## Fermeture

L'élément HTML `<dialog>` propose plusieurs mécanismes natifs de fermeture. Le choix dépend du comportement attendu et de la manière dont l'application doit traiter la demande de fermeture.

### Fermer directement avec `close()`

La méthode `close()` ferme la boîte de dialogue. Elle peut recevoir une chaîne de caractères qui sera exposée via la propriété `returnValue`.

```javascript
dialog.close();
```

Cette fermeture est immédiate et ne peut pas être annulée par un gestionnaire d'événement. L'événement `close` est déclenché après la fermeture.

### Demander la fermeture avec `requestClose()`

La méthode `requestClose()` demande la fermeture de la boîte de dialogue. Elle déclenche l'événement `cancel`, qui permet au code d'empêcher la fermeture en appelant `preventDefault()`. Si cet événement n'est pas annulé, la boîte de dialogue se ferme et l'événement `close` est ensuite déclenché.

```javascript
dialog.requestClose();
```

Cette méthode est notamment utile lorsqu'une demande de fermeture doit pouvoir être interceptée, par exemple pour demander confirmation avant d'abandonner une saisie.

Contrairement à `close()`, `requestClose()` ne ferme donc pas nécessairement la boîte de dialogue : un gestionnaire de l'événement `cancel` peut empêcher sa fermeture. Cette méthode ignore toutefois l'attribut `closedby` : elle peut fermer la boîte de dialogue même si celui-ci vaut `none`.

**Compatibilité :** `requestClose()` est prise en charge par les navigateurs récents, mais peut être indisponible dans des environnements plus anciens. Vérifiez sa compatibilité avec les navigateurs ciblés avant de l'utiliser.

### Fermer avec un formulaire

Un formulaire placé dans une boîte de dialogue peut utiliser `method="dialog"`. Sa soumission ferme alors la boîte de dialogue sans transmettre les données à un serveur. La valeur du bouton de soumission activé peut être récupérée via la propriété `returnValue` du dialogue.

```html
<form method="dialog">
  <button value="cancel">Annuler</button>
  <button value="confirm">Confirmer</button>
</form>
```

Ce mécanisme permet notamment de distinguer les différents choix effectués par l'utilisateur. Le code appelant peut ensuite consulter `dialog.returnValue` pour adapter la suite du parcours.

### Prévoir les interactions de fermeture

La fermeture doit être cohérente avec le rôle de la boîte de dialogue et le parcours proposé. Un bouton de fermeture visible et utilisable au clavier reste un moyen explicite de quitter la fenêtre.

L'attribut `closedby` permet de préciser quelles actions utilisateur peuvent fermer une boîte de dialogue. Il distingue trois types d'actions :

- une **fermeture légère** (*light dismiss*), par exemple lorsque l'utilisateur clique ou appuie à l'extérieur de la fenêtre ;
- une **demande de fermeture propre à la plateforme**, comme la touche `Échap` sur ordinateur ou certains gestes de retour sur appareil mobile ;
- un **mécanisme défini par le développeur**, par exemple un bouton qui appelle `close()` ou la soumission d'un formulaire utilisant `method="dialog"`.

Il propose trois valeurs :

- `any` : autorise les trois types d'action ;
- `closerequest` : autorise les demandes de fermeture propres à la plateforme et les mécanismes définis par le développeur, mais pas la fermeture légère ;
- `none` : désactive les fermetures automatiques déclenchées par les actions utilisateur. La fermeture reste possible par un mécanisme défini par le développeur, comme un bouton qui appelle `close()`.

Si l'attribut est absent ou invalide, son comportement dépend de la méthode d'ouverture : un dialogue ouvert avec `showModal()` se comporte comme si `closedby="closerequest"`, tandis qu'un dialogue ouvert autrement se comporte comme si `closedby="none"`.

L'attribut `closedby` ne bloque pas les appels programmatiques à `close()`. Les mécanismes de fermeture définis par le développeur restent donc possibles, même lorsque les fermetures automatiques déclenchées par les actions utilisateur sont désactivées.

**Statut et compatibilité :** l'attribut `closedby` fait partie du standard HTML, mais sa prise en charge varie encore selon les navigateurs. La méthode `requestClose()` peut également ne pas être disponible dans certains environnements anciens. Vérifiez la compatibilité de ces fonctionnalités avec les navigateurs ciblés avant de vous appuyer sur elles pour définir le comportement de fermeture.

## Ce que fournit réellement `<dialog>`

L'élément HTML `<dialog>`, lorsqu'il est ouvert avec `showModal()`, fournit plusieurs mécanismes natifs utiles à la création d'une fenêtre modale.

Le pseudo-élément `::backdrop` permet notamment de personnaliser la zone située derrière la boîte de dialogue.

Par exemple, il est possible d'assombrir l'arrière-plan :

```css
dialog::backdrop {
  background-color: rgb(0 0 0 / 60%);
}
```

Le pseudo-élément `::backdrop` n'est pas un élément HTML à ajouter au document. Il représente la zone située derrière un élément placé dans la couche supérieure (<span lang="en">*top layer*</span>), notamment un `<dialog>` ouvert avec `showModal()`.

Ces mécanismes natifs ne dispensent pas de vérifier l'accessibilité du composant : son contenu, son nom accessible, le placement initial du focus et ses moyens de fermeture doivent rester adaptés. La navigation au clavier mérite également une attention particulière : l'inertie du contenu extérieur ne garantit pas, à elle seule, que la tabulation reste confinée dans la boîte de dialogue.

## Gestion du focus

Lorsqu'un élément `<dialog>` est ouvert avec `showModal()`, le navigateur déplace le focus à l'intérieur de la boîte de dialogue. Il reste toutefois nécessaire de choisir un point de départ adapté au contenu et au parcours proposé.

L'attribut `autofocus` permet de désigner l'élément qui doit recevoir le focus à l'ouverture. Le focus peut également être ajusté par programmation lorsque le contexte le justifie.

Le choix du focus initial dépend notamment de la nature du contenu :

- **Dialogue court et interactif :** le focus peut être placé sur le premier contrôle pertinent, par exemple un champ de formulaire ou un bouton permettant de continuer.
- **Dialogue contenant un texte long ou une structure complexe :** il peut être préférable de placer le focus sur un élément statique au début du contenu, comme le titre ou un paragraphe introductif. Cet élément peut recevoir `tabindex="-1"` pour pouvoir être focalisé par programmation, sans être ajouté à l'ordre de tabulation habituel.
- **Dialogue demandant une décision difficilement réversible :** placer le focus sur l'action la moins destructive peut contribuer à éviter une validation accidentelle, lorsque ce choix est pertinent dans le contexte.

Ces stratégies sont décrites dans le <span lang="en">*WAI-ARIA Authoring Practices Guide* (APG)</span>. Il s'agit de recommandations de conception, et non de règles universelles : le choix approprié dépend du contenu, du contexte et du parcours utilisateur.

## Navigation clavier

### Avec l'élément HTML `<dialog>`

Lorsqu'une boîte de dialogue est ouverte avec `showModal()`, le navigateur rend le contenu extérieur à la boîte de dialogue inerte. Le focus clavier reste alors dans le contenu de la boîte de dialogue, mais peut également se déplacer vers l'interface du navigateur, par exemple la barre d'adresse.

Toutefois, contrairement au modèle d'interaction décrit par le WAI-ARIA Authoring Practices Guide (APG), le comportement natif de `<dialog>` ne garantit pas nécessairement que la navigation au clavier boucle du dernier élément focalisable au premier, et inversement. Lorsque le focus atteint l'une des extrémités de la séquence de tabulation, appuyer sur `Tab` ou `Shift + Tab` peut ainsi déplacer le focus vers l'interface du navigateur.

Cette distinction est importante lors de l'évaluation de l'accessibilité au clavier. Il ne faut pas conclure qu'une boîte de dialogue native nécessite un mécanisme JavaScript de boucle de focus simplement parce que celui-ci ne boucle pas à l'intérieur de la fenêtre. Il convient de tester le comportement dans les navigateurs ciblés et avec les technologies d'assistance concernées, puis de déterminer si un traitement complémentaire est nécessaire.

### Le modèle recommandé par le WAI-ARIA APG

Le *Dialog (Modal) Pattern* du <span lang="en">*WAI-ARIA Authoring Practices Guide* (APG)</span> recommande les interactions clavier suivantes :

- `Tab` déplace le focus vers l'élément focalisable suivant. Depuis le dernier élément, le focus revient au premier.
- `Shift + Tab` déplace le focus vers l'élément focalisable précédent. Depuis le premier élément, le focus revient au dernier.
- `Escape` permet de fermer la boîte de dialogue.

Ce modèle décrit le comportement clavier attendu pour une boîte de dialogue modale. Il est particulièrement pertinent pour les modales personnalisées, dont le développeur doit implémenter lui-même les comportements nécessaires.

Pour une boîte de dialogue HTML native, le navigateur fournit plusieurs mécanismes intégrés de gestion du clavier et du focus. La fermeture avec `Escape` peut dépendre de la configuration de la boîte de dialogue, notamment de l'attribut `closedby` lorsque celui-ci est pris en charge.

### Et pour une modale personnalisée ?

Une modale construite à partir d'éléments génériques, comme une `<div>`, ne bénéficie pas automatiquement des mécanismes natifs de `<dialog>`. Le développeur doit implémenter et tester les comportements nécessaires, notamment :

- placer le focus à l'intérieur de la fenêtre à son ouverture ;
- empêcher les interactions avec le contenu extérieur tant que la fenêtre est modale, en utilisant notamment `inert` lorsque cela convient ;
- gérer la navigation au clavier conformément au modèle d'interaction retenu, notamment en maintenant le focus dans la fenêtre et en faisant boucler la navigation entre ses éléments focalisables ;
- prendre en charge les demandes de fermeture au clavier, notamment avec `Escape` ;
- restaurer le focus à la fermeture, vers l'élément déclencheur ou vers un autre point de départ cohérent avec la tâche que l'utilisateur doit reprendre ;
- permettre aux technologies d'assistance d'identifier correctement la boîte de dialogue, notamment en définissant son rôle, son nom accessible et, lorsque cela est approprié, son caractère modal.

L'attribut `aria-hidden="true"` peut masquer un contenu aux technologies d'assistance, mais il ne bloque pas les interactions et ne remplace donc ni `inert` ni la gestion du focus. Il faut également veiller à ne pas masquer un élément qui contient le focus, directement ou par l'intermédiaire de l'un de ses ancêtres.

Enfin, une fenêtre modale doit proposer un moyen explicite et visible de la fermer, par exemple un bouton « Fermer » ou « Annuler ». La touche `Escape` constitue un moyen complémentaire de fermeture lorsque ce comportement est prévu ; elle ne remplace pas le bouton.

## HTML et ARIA

Une fenêtre modale peut être construite à partir de l'élément HTML `<dialog>` ou d'éléments génériques, comme une `<div>`. Ces deux approches ne fournissent pas les mêmes mécanismes natifs.

Pour une modale personnalisée, les attributs ARIA permettent notamment d'exposer son rôle et son nom accessible aux technologies d'assistance :

- `role="dialog"` identifie la boîte de dialogue ;
- `aria-modal="true"` indique qu'elle est modale ;
- `aria-labelledby` ou `aria-label` permet de lui fournir un nom accessible ;
- `aria-describedby` peut lui associer une description complémentaire, lorsque cela est pertinent.

**Attention : `aria-modal="true"` ne rend pas, à lui seul, une fenêtre modale.** Cet attribut communique l'état modal aux technologies d'assistance, mais ne bloque pas les interactions avec le contenu extérieur et ne maintient pas le focus dans la boîte de dialogue. Ces comportements doivent être assurés par l'implémentation.

Il ne faut donc utiliser cet attribut que si la fenêtre est réellement modale : le code doit empêcher les interactions avec le contenu extérieur, et celui-ci doit être visuellement occulté ou obscurci. Le [WAI-ARIA APG détaille cette précaution](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/).

Avec l'élément HTML `<dialog>`, le rôle `dialog` est fourni nativement. Lorsqu'il est ouvert avec `showModal()`, le navigateur assure les mécanismes natifs de modalité et expose l'état modal aux technologies d'assistance. Il n'est donc généralement pas nécessaire d'ajouter explicitement `aria-modal="true"`.

L'attribut `aria-labelledby` reste pertinent pour associer la boîte de dialogue à son titre visible et définir son nom accessible. L'utilisation de `aria-describedby` dépend quant à elle du contenu et mérite une attention particulière, notamment lorsque celui-ci comporte plusieurs paragraphes ou des structures sémantiques.

Plus largement, il faut privilégier la sémantique HTML native et éviter les attributs ARIA redondants, sauf besoin particulier.

## `dialog` et `alertdialog`

Toutes les boîtes de dialogue modales ne remplissent pas la même fonction. Le rôle ARIA doit refléter l'objectif du composant, et non simplement l'importance de l'action proposée.

### Le rôle `dialog`

Le rôle `dialog` convient aux interactions qui nécessitent un échange avec l'utilisateur dans une boîte de dialogue distincte du reste de l'interface : formulaire, paramètres, consultation d'informations ou modification d'une configuration, par exemple.

### Le rôle `alertdialog`

Le rôle `alertdialog` est destiné aux boîtes de dialogue modales qui interrompent le déroulement habituel de l'interaction pour communiquer un message important et obtenir une réponse de l'utilisateur.

**Son caractère interruptif justifie un usage parcimonieux.** Il ne doit pas être choisi simplement parce qu'une action est importante ou irréversible, mais lorsque la situation nécessite réellement d'attirer immédiatement l'attention de l'utilisateur et de solliciter une réponse.

Il peut notamment convenir à une confirmation d'action ou à un message d'erreur qui exige une réponse. Une confirmation de suppression ne justifie toutefois pas, à elle seule, le recours à `alertdialog` : le choix dépend du contexte et de la nécessité réelle d'interrompre l'utilisateur.

Le rôle `alertdialog` permet aux technologies d'assistance et aux navigateurs d'identifier ce type de dialogue et, éventuellement, de lui réserver un traitement spécifique. Son annonce peut toutefois varier selon les environnements.

### Quel rôle choisir ?

Le choix dépend donc avant tout de la fonction de la boîte de dialogue et de la manière dont elle intervient dans le parcours utilisateur.

Dans les deux cas, la boîte de dialogue doit disposer d'un nom accessible, par exemple en référençant son titre avec `aria-labelledby`. Pour `alertdialog`, le modèle de l'APG prévoit également `aria-describedby` pour associer le message d'alerte à la boîte de dialogue. Ce message doit rester suffisamment concis pour être facilement compris lors de son annonce.

## Une erreur fréquente : `aria-describedby`

L'attribut `aria-describedby` est parfois ajouté systématiquement aux fenêtres modales pour associer l'ensemble de leur contenu à leur description accessible.

Cette approche n'est pas toujours pertinente. Lorsque la boîte de dialogue contient plusieurs paragraphes, des listes ou d'autres structures sémantiques, associer un conteneur englobant l'ensemble du contenu peut conduire les technologies d'assistance à restituer celui-ci sous la forme d'un bloc de texte, sans que sa structure soit nécessairement perceptible dans cette annonce.

Le <span lang="en">*WAI-ARIA Authoring Practices Guide* (APG)</span> recommande notamment d'omettre `aria-describedby` lorsque le contenu est complexe ou structuré et qu'une annonce globale risquerait d'en rendre la compréhension difficile.

Pour une boîte de dialogue contenant un message descriptif court, l'attribut peut en revanche être utile pour associer ce message à la boîte de dialogue.

**À retenir :** utilisez `aria-labelledby` pour fournir le nom accessible de la boîte de dialogue, par exemple à partir de son titre. Réservez `aria-describedby` aux descriptions dont l'annonce globale apporte réellement une information utile.

## Une erreur fréquente : ajouter `tabindex` à `<dialog>`

L'attribut `tabindex` ne doit pas être utilisé sur l'élément HTML `<dialog>` lui-même. Il n'est pas nécessaire de rendre la boîte de dialogue focalisable pour que son contenu puisse recevoir le focus.

En revanche, lorsqu'une boîte de dialogue contient un texte long ou une structure complexe, il peut être pertinent de placer initialement le focus sur un élément statique situé à l'intérieur, comme son titre ou le début du contenu.

Cet élément peut alors recevoir `tabindex="-1"` : il devient focalisable par programmation, sans être ajouté à l'ordre de tabulation séquentiel.

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

Il est ensuite possible de placer explicitement le focus sur le titre à l'ouverture :

```javascript
const dialog = document.querySelector("#details");
const dialogTitle = document.querySelector("#details-title");

dialog.showModal();
dialogTitle.focus();
```

La méthode `showModal()` déclenche le comportement natif de placement initial du focus. L'appel explicite à `focus()` permet ici de choisir le titre comme point de départ, ce qui peut faciliter la compréhension et l'exploration d'un contenu long ou complexe.

Ce déplacement de focus n'est pas systématiquement nécessaire : le point de départ doit être adapté au contenu et à l'objectif de la modale.

## Reprise du focus

Lorsqu'une fenêtre modale se ferme, le focus doit retrouver une position cohérente avec la suite du parcours.

En règle générale, il revient sur l'élément qui a déclenché l'ouverture de la boîte de dialogue. Si cet élément a été supprimé du DOM ou n'est plus pertinent, par exemple après la suppression d'un élément de la page, le focus doit être déplacé vers une cible adaptée à la poursuite de la tâche.

Avec `<dialog>` ouvert à l'aide de `showModal()`, le navigateur tente de restaurer le focus à la fermeture. Ce comportement natif ne dispense pas de vérifier le résultat lorsque le contenu de la page a été modifié pendant l'ouverture. Pour une modale personnalisée, cette gestion doit être implémentée explicitement.

Pour une modale personnalisée, il est possible de mémoriser l'élément actif avant l'ouverture, puis de restaurer le focus à la fermeture si cet élément existe toujours :

```javascript
let previousFocus = null;

function openModal() {
  previousFocus = document.activeElement;
  // Ouvrir la modale et placer le focus à l'intérieur.
}

function closeModal() {
  // Fermer la modale et rétablir l'interaction avec la page.

  if (
    previousFocus instanceof HTMLElement &&
    previousFocus.isConnected
  ) {
    previousFocus.focus();
  } else {
    // Placer le focus sur un élément pertinent
    // pour la suite du parcours.
  }
}
```

Cet exemple illustre le principe de mémorisation et de restauration du focus. La propriété `isConnected` permet de vérifier que l'élément appartient toujours au DOM, mais ne garantit pas qu'il soit visible ou qu'il puisse effectivement recevoir le focus.

Dans une implémentation réelle, il faut donc vérifier le résultat et prévoir une cible de remplacement pertinente si nécessaire. L'ouverture, la fermeture, la gestion du focus et le rétablissement des interactions avec le contenu extérieur doivent être adaptés à l'implémentation retenue.

## Erreurs fréquentes observées en audit

Plusieurs défauts reviennent régulièrement lors des audits de fenêtres modales.

### Créer une modale avec une `<div>` sans implémenter les comportements nécessaires

Une modale personnalisée doit fournir la sémantique d'une boîte de dialogue et gérer les comportements attendus, notamment le focus, la navigation au clavier et l'inactivité du contenu extérieur. Une apparence visuelle correcte ne garantit pas un comportement accessible.

### Oublier le nom accessible

La boîte de dialogue doit disposer d'un nom accessible pertinent, généralement fourni par son titre avec `aria-labelledby`, ou par `aria-label` lorsque cette solution est adaptée.

### Mal gérer le focus

Le focus doit être placé à un endroit pertinent à l'ouverture, permettre une navigation cohérente pendant l'interaction et retrouver une position adaptée à la fermeture.

### Ne pas proposer de moyen de fermeture explicite

Une fenêtre modale devrait proposer un moyen de fermeture visible et accessible au clavier, par exemple un bouton « Fermer » ou « Annuler ». La touche `Escape` ou un clic à l'extérieur peuvent compléter ce mécanisme, mais ne devraient pas constituer l'unique possibilité.

### Utiliser une modale lorsque ce n'est pas nécessaire

Une modale interrompt temporairement l'interaction avec le reste de la page. Selon le besoin, une présentation directement intégrée au contenu peut être plus simple et moins intrusive.

## Conclusion

Les fenêtres modales illustrent bien la complexité de certains composants d'interface : derrière une apparence parfois simple se cachent des enjeux de sémantique, de gestion du focus, de navigation au clavier et d'interaction avec les technologies d'assistance.

L'élément HTML `<dialog>`, lorsqu'il est utilisé avec `showModal()`, fournit plusieurs mécanismes natifs qui facilitent la création d'une fenêtre modale accessible. Il reste néanmoins nécessaire de choisir un focus initial pertinent, de vérifier la reprise du focus, de définir un nom accessible et de s'interroger sur la pertinence même d'une présentation modale.

Comprendre ce que le HTML natif fournit, ce que les attributs ARIA décrivent et ce que le développeur doit encore prendre en charge permet de concevoir des interfaces plus robustes et plus interopérables.

**Une fenêtre modale accessible ne se résume pas à un composant correctement balisé : elle doit permettre à chacun de comprendre le dialogue, d'interagir avec lui et de reprendre son parcours dans de bonnes conditions.**

## Webographie

<ul lang="en">
  <li><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog" hreflang="en">MDN – HTML <code>dialog</code> element (en)</a></li>
  <li><a href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement/showModal" hreflang="en">MDN – HTMLDialogElement: showModal() method (en)</a></li>
  <li><a href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement/closedBy" hreflang="en">MDN – HTMLDialogElement: closedBy property (en)</a></li>
  <li><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/tabindex" hreflang="en">MDN – HTML <code>tabindex</code> global attribute (en)</a></li>
  <li><a href="https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/" hreflang="en">WAI-ARIA Authoring Practices Guide – Dialog (Modal) Pattern (en)</a></li>
  <li><a href="https://www.w3.org/WAI/ARIA/apg/patterns/alertdialog/" hreflang="en">WAI-ARIA Authoring Practices Guide – Alert and Message Dialogs Pattern (en)</a></li>
  <li><a href="https://html.spec.whatwg.org/multipage/interactive-elements.html#the-dialog-element" hreflang="en">WHATWG – HTML Living Standard: The <code>dialog</code> element (en)</a></li>
  <li><a href="https://www.w3.org/TR/wai-aria-1.2/#dialog" hreflang="en">W3C – WAI-ARIA 1.2: dialog role (en)</a></li>
  <li><a href="https://caniuse.com/?search=closedby" hreflang="en">Can I Use – Browser support for the <code>closedby</code> attribute (en)</a></li>
</ul>
