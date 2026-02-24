---
title: "Utiliser ARIA, les messages d'état ou contextuel"
abstract: "Les messages d'état ou contextuel gérés par ARIA"
titleBeforeTag: true
date: "2018-10-26"
update: "2026-03-12"
tags:
  - web
  - intermediate
---
   
## Message d'état et accessibilité
Le critère <a lang="en" href="https://www.w3.org/TR/WCAG22/#status-messages">4.1.3 Status Messages</a> des WCAG demande que les informations importantes pour l'utilisateur, qui n'induisent pas de changement de contexte (pas d'ouverture d'une nouvelle fenêtre, pas de prise de focus sur le contenu, pas de modification du contenu significatif ou du <span lang="en">viewport</span>), soient perçues via des propriétés et rôles <abbr>ARIA</abbr> (Accessible Rich Internet Applications) par toute personne utilisant une <abbr>AT</abbr> (Aide Technique) sans prise de focus sur le message.

## Quelques exemples de messages d'état ou contextuels

Lorsqu'un utilisateur appuie sur un bouton de recherche, le contenu de la page est mis à jour de manière asynchrone pour ajouter les résultats de la recherche affichés dans une région située sous le bouton de recherche. Le message "XX résultats trouvés" s'affiche en haut de ce nouveau contenu. Un lecteur d'écran devra annoncer "XX résultats ont été trouvés". Dans ce cas, l'information fournie à l'utilisateur est importante et doit être immédiatement donnée, donc on utilisera le rôle `"alert"`.

```html
<h2 role="alert">
    5 résultats ont été trouvés
</h2>
```

Après avoir choisi un article, l'utilisateur appuie sur un bouton "Ajouter au panier", une mention textuelle "1 élément ajouté, 4 articles dans le panier" apparait temporairement près de l'icône du panier. Un lecteur d'écran devra annoncer automatiquement "un article ajouté au panier, le panier contient actuellement 4 articles".
Ici, l'information à restituer à l'utilisateur est moins cruciale que précédemment donc on utilisera le rôle `"status"`.

```html
<p role="status">
    un article ajouté au panier, le panier contient actuellement 4 articles
</p>
```

Durant le processus d'application d'un filtre de recherche complexe, une icône symbolisant «&nbsp;en attente&nbsp;»&nbsp;: un sablier, une horloge… apparait à l'écran. Le lecteur d'écran annonce "Application occupée, chargement en cours". Là encore, l'information est importante pour l'utilisateur, on utilisera le rôle `"alert"`.

```html
<div role="alert">
    Application occupée, chargement en cours
</div>
```

Une application affiche une barre de progression pour indiquer l'état d'une mise à jour d'un élément de contenu. Le lecteur d'écran fournit des annonces intermittentes des progrès&nbsp;: "10% mis à jour", puis "20% mis à jour"…

```html
<div role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
    20% mis à jour
</div>
```

Après soumission d'un formulaire, un texte de confirmation est ajouté au formulaire existant&nbsp;: "Votre formulaire a été soumis avec succès". Le lecteur d'écran annonce ce message important via le rôle `"alert"`.

```html
<div role="alert">
    Votre formulaire a été soumis avec succès
</div>
```

Lorsqu'un utilisateur remplit un formulaire contenant des données incorrectes, du texte est ajouté en haut du formulaire indiquant&nbsp;: "XX erreurs dans le formulaire". Le lecteur d'écran annonce le message "Formulaire non envoyé car XX erreurs de validation" et liste les erreurs liées aux champs en erreur (ceci ne dispense pas de donner les détails de l'erreur pour chaque champ incorrectement rempli).
L'information d'erreur dans le formulaire est importante, urgente, et demande une interaction utilisateur, donc on utilise  le rôle `"alertdialog"`.

```html
<div role="alertdialog" aria-labelledby="errors">
   <p id="errors">Formulaire non envoyé car 2 erreurs de validation :</p>
   <ul>
      <li><a href="xxx">Email obligatoire...
   ...::::::::
   </ul>
</div>
```

Dans une application de gestion documentaire en ligne, l'utilisateur insère un nouveau document dans un répertoire, une notification toast (message de feedback en popup) affiche le message "Le document YYY est bien enregistré dans le répertoire XXX", qui est également lu par un lecteur d'écran sans caractère d'urgence grâce au rôle `"statut"`.

```html
<p role="status">
    Le document YYY est bien enregistré dans le répertoire XXX
</p>
```

Dans une application de mailing en ligne, l'utilisateur choisi  d'ajouter (ou supprimer) une adresse mail dans une liste de destinataires. Cette adresse e-mail est ajoutée (ou supprimée) à la liste d'adresses déjà existantes. Le lecteur d'écran devra annoncer l'ajout (ou suppression) de cette nouvelle adresse mail. 
Il faut comprendre que l'adresse mail, ajoutée (ou supprimée) à la liste n'est pas visible pour certains utilisateurs d'<abbr>AT</abbr>,  en particulier de lecteurs d'écran. Afin de donner le contexte à ces utilisateurs, une information supplémentaire est nécessaire sous forme de contenu textuel non affiché mais lu par la synthèse vocale.
Comme de nouvelles informations sont ajoutées dans un ordre significatif et/ou que les anciennes informations disparaissent, on utilise, ici, le rôle `"log"`.
 Un autre exemple d'utilisation pourrait être un <span lang="en">chat</span> ou <span lang="en">chatbot</span>.

```html
<div role="log">
  <ol>
    <li>XX@YY.ZZ a été rajouté</li>
    <li>XX@YY.ZZ a été retiré</li>
  </ol>
</div>
```

Parfois, il peut être utile de fournir des messages uniquement pour les lecteurs d'écran, sans avoir besoin de les afficher visuellement. Dans ce cas, il faut également utiliser les rôles <abbr>ARIA</abbr> pour restituer les messages aux <abbr>AT</abbr> et en particulier aux lecteurs d'écran.

## Les messages d'état qui n'en sont pas...

La règle de base est que si le focus est déplacé ou que le contexte est restitué aux utilisateur d'<abbr>AT</abbr>, ce n'est pas un message d'état&nbsp;:

- une modale qui demande une action utilisateur, sur laquelle le focus est positionné automatiquement.
- l'apparition/disparition de contenu suite à une interaction utilisateur qui est annoncé aussi aux <abbr>AT</abbr> (par exemple, on annonce au lecteur d'écran "ouvert/fermé" pour un menu, un accordéon)
- pour une système de panneaux, dont l'ouverture de l'onglet sélectionné est annoncé aux <abbr>AT</abbr>  
