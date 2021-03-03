---
title: Écran de saisie
---

# Écran de saisie

## Avoir des champs de saisie explicites

**Cible&nbsp;:** tout le monde et en particulier les personnes déficientes visuelles.  
**Quand&nbsp;:** lors de la conception et lors du développement.

**Description&nbsp;:**

Lier les champs de saisie avec leurs labels apporte une vocalisation supplémentaire qui permet à l’utilisateur de comprendre ce qu'il faut remplir lorsqu’il arrive sur un champ de saisie.
  
Il existe 2 grandes techniques pour réaliser cette liaison&nbsp;:
 - `labelFor`&nbsp;: permet de spécifier à une vue qu’elle est le label d’une autre vue. Cette méthode prend en paramètre l’`id` de la vue que l’on labellise. On peut utiliser cette méthode avec quasiment tout type de champ de saisie. Utilisable depuis le <abbr>xml</abbr> `android:labelFor` ou le code `setLabelFor`.
 - `hint`&nbsp;: permet d’ajouter un texte d’exemple quand le champ de texte est vide. Cette méthode ne marche que pour les `EditText`. Prend en paramètre l’`id` d’une chaîne de caractère. Utilisable depuis le <abbr>xml</abbr> `android:hint` ou le code `setHint`.

De plus, il est essentiel d'indiquer à l'utilisateur, pour une bonne compréhension du formulaire, les différents champs obligatoires, le format attendu, ou encore les erreurs commises sur de potentiels champs.

**À vérifier&nbsp;:**

- Les champs de saisie doivent être liés à un label si celui-ci est visible, sinon un `hint` est présent.
- Les champs obligatoires sont identifiables
- Le format de données des champs "complexe" est indiqué à l'utilisateur


**Référence <abbr>WCAG</abbr>&nbsp;:**  
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#headings-and-labels">2.4.6 Headings and labels</a>
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#labels-or-instructions">3.3.2 Labels or instructions</a>
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#identify-input-purpose">1.3.5 Identify input purpose</a>


## Identifier les erreurs de saisie

**Cible&nbsp;:** tout le monde et en particulier les personnes déficientes visuelles.  
**Quand&nbsp;:** lors de la conception et lors du développement.

**Description&nbsp;:**

Lorsqu'un utilisateur se trompe lors de la saisie de différents champs, il est important de lui indiquer clairement quelles sont ses erreurs, afin qu'il puisse corriger les champs en question sans difficulté. 

Il est d'ailleurs recommandé de fournir une suggestion de correction à l'utilisateur.

**À vérifier&nbsp;:**

- Les champs en erreurs sont clairement identifiables
- Les messages d'erreurs sont explicites
- Une suggestion de correction est proposée à l'utilisateur


**Référence <abbr>WCAG</abbr>&nbsp;:**  
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#error-identification">3.3.1 Error identification</a>
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#error-suggestion">3.3.3 Error suggestion</a>
