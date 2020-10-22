---
title: "Formulaire"
---

# Formulaire

## Avoir des champs de formulaires explicites

**Cible&nbsp;:** tout le monde et en particulier les personnes déficientes visuelles.  
**Quand&nbsp;:** lors de la conception et lors du développement.

**Description&nbsp;:**

Lier les champs de formulaires avec leurs labels apporte une vocalisation supplémentaire qui permet à l’utilisateur de comprendre quoi remplir lorsqu’il arrive sur un champ de formulaire.  
  
Il existe 2 grandes techniques pour réaliser cette liaison&nbsp;:
 - `labelFor`&nbsp;: permet de spécifier à une vue qu’elle est le label d’une autre vue. Cette méthode prend en paramètre l’`id` de la vue que l’on labellise. On peut utiliser cette méthode avec quasiment tout type de champ de formulaire. Utilisable depuis le <abbr>xml</abbr> `android:labelFor` ou le code `setLabelFor`.
 - `hint`&nbsp;: permet d’ajouter un texte d’exemple quand le champ de texte est vide. Cette méthode ne marche que pour les `TextView`. Prend en paramètre l’`id` d’une chaîne de caractère. Utilisable depuis le <abbr>xml</abbr> `android:hint` ou le code `setHint`.

De plus, il est essentiel d'indiquer à l'utilisateur, pour une bonne compréhension du formulaire, les différents champs obligatoires, le format attendu, ou encore les erreurs commises sur de potentiels champs.

**À vérifier&nbsp;:**

- Les champs de formulaire doivent être liés à un label si celui-ci est visible, sinon un `hint` est présent.
- Les champs obligatoires sont identifiables
- Le format de données des champs "complexe" est indiqué à l'utilisateur


## Identifier les erreurs de saisie dans le formulaire

**Cible&nbsp;:** tout le monde et en particulier les personnes déficientes visuelles.  
**Quand&nbsp;:** lors de la conception et lors du développement.

**Description&nbsp;:**

Lorsqu'un utilisateur se trompe lors de la saisie d'un formulaire, il est important de lui indiquer clairement quelles sont ses erreurs, afin qu'il puisse corriger les champs en question sans difficulté. 

Il est d'ailleurs recommandé de fournir une suggestion de correction à l'utilisateur.

**À vérifier&nbsp;:**

- Les champs en erreurs sont clairement identifiables
- Les messages d'erreurs sont explicites
- Une suggestion de correction est proposée à l'utilisateur