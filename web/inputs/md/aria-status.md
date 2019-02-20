# Utiliser <abbr>ARIA</abbr>  les messages d'état, de statut ou contextuel
  
<script>$(document).ready(function () {
    setBreadcrumb([
            {"label":"Articles techniques", "url":"techniques.html"},
            {"label":"Utiliser <abbr>ARIA</abbr> pour les messages d'état"}
        ]);
});</script>
  
## Message de statut et accessibilité
Le critère  <a lang="en" href="https://www.w3.org/TR/WCAG21/#status-messages">4.1.3 Status Messages</a> des WCAG 2.1 demande que les informations importantes pour l'utilisateur, qui n'induisent pas de changement de contexte (pas d'ouverture d'une nouvelle fenêtre, pas de prise de focus sur le contenu, pas de modification du contenu ou du <span lang="en">viewport<span>), soient perçues via des propriétés et rôles (<abbr>ARIA</abbr>) par toute personne utilisant une <abbr>AT</abbr> sans prise de focus sur le message.

## Quelques exemple de messages d'état, de statut ou contextuels

Lorsqu'un utilisateur appuie sur un bouton de recherche, le contenu de la page est mis à jour asynchronement pour ajouter les résultats de la recherche  affichés dans une région située sous le bouton de recherche. Le message "XX résultats trouvés" est en haut de ce nouveau contenu. Un lecteur d'écran devra annoncer "XX résultats ont été trouvés". Dans ce cas, l'information fournie à l'utilisateur est important et doit être immédiatement donnée, donc on utilisera le rôle "alert". 

`<h2 role="alert">
    5 résultats ont été trouvés
</h2>`

Lorsqu'un utilisateur après avoir choisi un article, appuie sur un bouton "Ajouter au panier", une mention textuelle "1 élément ajouté, 4 articles dans le panier" apparaît temporairement près de l'icône du panier. Un lecteur d'écran devra annoncer "un article ajouté au panier, le panier contient actuellement 4 articles". Ici, l'information à pousser à l'utilisateur est moins cruciale que précédemment donc on utilisera le rôle "status".

`<p role="status">
    un article ajouté au panier, le panier contient actuellement 4 articles
</p>`

Une fois qu'un utilisateur a activé un processus d'application de filtres de recherche complexes, une icône symbolisant «&nbsp;en attente&nbsp;»&nbsp;: un sablier, une horloge… apparaît à l'écran. Le lecteur d'écran annonce "Application occupée, chargement en cours".

`<div role="alert">
    Application occupée, chargement en cours
</div>`

Une application affiche une barre de progression pour indiquer l'état d'une mise à jour d'un élément de contenu. Le lecteur d'écran fournit des annonces intermittentes des progrès : "10% mis à jour", puis "20% mis à jour"…

`<div role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
20% mis à jour
</div>`

Après qu'un utilisateur a soumis un formulaire, du texte est ajouté au formulaire existant comme suit&nbsp;: "Votre formulaire a été soumis avec succès". Le lecteur d'écran annonce le même message.

`<div role="alert">
    Votre formulaire a été soumis avec succès
</div>`

Lorsqu'un utilisateur remplit un formulaire mais certaines des données entrées sont incorrectes, du texte est ajouté en haut du formulaire existant indique "XX erreurs dans le formulaire". Le lecteur d'écran annonce le message "Formulaire non envoyé car XX erreurs de validation" (ceci ne dispense pas de donner les détails de l'erreur pour chaque champ incorrectement rempli). L'information d'erreur dans le formulaire est importante et urgente, immédiate, donc on utilise  le rôle "alertdialog".

`<div role="alertdialog" aria-labelledby="errors">
   <p id="errors"> Formulaire non envoyé car 2 erreurs de validation </p>
</div>`

Une fois qu'un utilisateur, dans une application de gestion documentaire en ligne, a inséré un nouveau document dans un répertoire, une notification toast (message de feedback en popup) affiche le message "Le document YYY est bien enregistré dans le répertoire XXX", qui est également lu par un lecteur d'écran.

`<p role="status">
    Le document YYY est bien enregistré dans le répertoire XXX
</p>`

Dans une application de mailing en ligne, l'utilisateur choisi dans une liste de destinataire de rajouter/enlever une nouvelle adresse mail, cette l'adresse e-mail du destinataire est affichée à l'écran à la suite de celle déjà choisies pour ce message. Le lecteur d'écran devra annoncer l'ajout de cette nouvelle adresse mail. Il faut comprendre que le texte, adresse mail, ajouté/retiré à la liste peut ne pas être visible à l'écran pour certains utilisateurs d'<abbr>AT</abbr>. Donc, afin de donner le contexte aux utilisateurs de lecteurs d'écran, une information supplémentaire est nécessaire sous forme de contenu non affiché mais lu par la synthèse vocale. Comme de nouvelles informations sont ajoutées dans un ordre significatif et les anciennes informations peuvent disparaître (un autre exemple pourrait être un <span lang="en">chat</span> ou <span lang="en">chatbot</span>), on utilise, ici, le rôle "log".

`<div role="log">
  <ol>
    <li>XX@YY.ZZ a été rajouté</li>
    <li>XX@YY.ZZ a été retiré</li>
  </ol>
</div>`

Parfois, on veut fournir des messages que pour les lecteurs d'écran, donc, sans avoir besoin de les afficher visuellement. Dans ce cas aussi, il faut utiliser ces rôles <abbr>ARIA</abbr> pour pousser le message au <abbr>AT</abbr> et en particulier aux lecteurs d'écran sans les afficher à l'écran.

## Les messages de statut qui n'en sont pas !

La règle de base est que si le focus est déplacé ou que le contexte est restitué aux utilisateur d'<abbr>AT</abbr>, ce n'est pas un message de statut&nbsp;:
- une modale qui demande une action utilisateur, sur laquelle le focus est donc mis
- lors de l'apparition/disparition de contenu suite une interaction utilisateur qui est annoncé aussi aux <abbr>AT</abbr> (par exemple, on annonce au lecteur d'écran "ouvert/fermé" pour un menu, un accordéon)
- pour une système de panneaux, dont l'onglet sélectionné est annoncé aux <abbr>AT</abbr>  


&nbsp;
    
<!--  This file is part of a11y-guidelines | Our vision of mobile & web accessibility guidelines and best practices, with valid/invalid examples.
 Copyright (C) 2016  Orange SA
 See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). -->