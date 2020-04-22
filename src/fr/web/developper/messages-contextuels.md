---
title: "Permettre de connaître le résultat d'une interaction utilisateur à l'aide de messages contextuels"
---

# Permettre de connaître le résultat d'une interaction utilisateur à l'aide de messages contextuels

**Cible&nbsp;:** tout le monde, et en particulier les personnes déficientes visuelles, cognitives et des troubles de l'attention.  
**Quand&nbsp;:** dès la conception, à la rédaction du contenu et pendant le développement.

**Description&nbsp;:**
Fournir à l'utilisateur de technologie d'assistance (<abbr>AT</abbr>) des messages d'état qui lui donnent un retour sur l'action qu'il vient d'effectuer dans son parcours sans recevoir le focus.

**À vérifier&nbsp;:**
Les informations importantes pour l'utilisateur mais sans changement de contexte (pas d'ouverture d'une nouvelle fenêtre, sans prise de focus, pas de modification du contenu ou du <span lang="en">viewport<span>) doivent être perçues via des propriétés et roles (<abbr>ARIA</abbr>) par toute personne utilisant une <abbr>AT</abbr> sans prise de focus sur le message.
   
Un message de statut, d'état ou message contextuel peut être&nbsp;:
- un message qui donne à l'utilisateur une information sur le résultat ou la réussite d'une action (ex: Votre demande a bien été pris en compte)
- un message d'attente qui indique que l'action déclenchée est en cours d'exécution et qui indique un temps d'attente approximatif
- un message d'erreur suite à une interaction utilisateur
- un message qui donne une information sans un changement de contexte

En <abbr>HTML</abbr>, les rôles spécifiques <abbr>ARIA</abbr> de type `alert`, `status`, `dialog`, `progressbar`, etc. sont les moyens de rendre accessible ces messages de statut (pour aller plus loin [Utiliser ARIA pour les messages d'état, de statut ou contextuel"](./aria-status.html).

**Objectif utilisateur&nbsp;:**
Pour tous les utilisateurs d'<abbr>AT</abbr>, avoir un feedback sur les actions essentielles qu'il effectue.

**Référence <abbr>WCAG</abbr>&nbsp;:**  
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#status-messages">4.1.3 Status Messages</a>
