---
title: "Web développer - Formulaires"
abstract: "Formulaires, recommendations d'accessibilité web lors du développement"
---

# Web développer - Formulaires

<p class="lead">S’assurer que l’utilisateur puisse efficacement compléter les formulaires</p>

## Rendre accessibles les champs de formulaire

**Cible&nbsp;:** tout le monde, et en particulier les personnes déficientes visuelles et cognitives, avec un déficit d’attention et les utilisateurs de tactiles (mobile et tablette).
**Quand&nbsp;:** lors de la conception et lors du développement.

**Description&nbsp;:**

Chaque champ de formulaire doit être accompagné d’un libellé ou d'instructions permettant d’identifier le rôle du champ, le type de donnée et le format attendu.

Ces informations doivent être proches visuellement du champ afin que l'utilisateur fasse facilement le lien entre eux (notamment pour les utilisateurs de zoom, de loupe logicielle, voire sur mobile).

Chaque libellé (ou instructions) doit être inclus dans une balise `label`, elle-même associée au champ de formulaire grâce à un attribut `for` renseigné, reprenant la valeur de l’`id` du champ.

Dans certains cas, il semble inutile d’accompagner le champ de formulaire d’un libellé car son rôle est évident (champ de recherche accompagné d’un bouton en forme de loupe par exemple, case à cocher pour sélectionner une ligne dans un tableau de données). Dans ce cas, prévoir au minimum un attribut `title`. Un libellé peut être également ajouté (reprenant la valeur du `title`), celui doit être associé au champ de formulaire et rendu invisible à l’écran (utiliser une classe de <a href="../../exemples-de-composants/masquage-accessible/">masquage accessible</a>).

À noter que l’attribut `title` positionné sur une balise de champ de formulaire fait office de libellé tout comme les attributs `aria-label` et `aria-labelledby` (cf. [les attributs ARIA qui peuvent vous sauver](../../../articles/attributs-aria-qui-peuvent-vous-sauver/)) dans cet ordre de préférence.

L'attribut `autocomplete` doit être présent et pertinent pour tous les champs listés dans <a lang="en" href="https://www.w3.org/TR/WCAG22/#input-purposes">7. Input Purposes for User Interface Components</a>.

**À vérifier&nbsp;:**

S’assurer que le libellé du champ (étiquette) est suffisamment proche du champ associé.

Aligner tous les libellés à gauche lorsque le nombre de caractères séparant le libellé le plus long de celui le plus court ne dépasse pas 6 caractères&nbsp;; au-delà, aligner tous les libellés à droite.

Si cela est pertinent, les champs ont un attribut `autocomplete` afin que l’utilisateur ait la possibilité d’utiliser une liste de propositions pré-enregistrées ou en auto-complétion.

Pour les boutons radio et les cases à cocher, l’utilisation de la balise `label` est, parfois, à compléter par un autre dispositif (`title`, `aria-labelledby`, `aria-label` ou parfois, `fieldset` et `legend`).

Pour les champs obligatoires, ceci doit être précisé dans le `label` via un texte explicite ("obligatoire"), si cette identification n'est pas réalisée de manière explicite, il faut en expliquer la signification comme, "Tous les champs obligatoires sont marqués d'un *", placée en début de formulaire, et/ou une propriété `aria-required`, `required`.

**Objectif utilisateur&nbsp;:**

Ne pas respecter ces recommandations est un point bloquant pour tout utilisateur de synthèse vocale mais aussi de loupe logicielle car il ne sait pas quelles valeurs entrer dans les champs. Pour les utilisateurs de mobiles et les déficients moteurs, cela permet d’activer ou de cliquer plus facilement sur les éléments de formulaire.

Pour les champs avec auto-complétion, facilite la tâche aux déficients moteur et cognitif, les dyslexiques. Cela permet d’éviter les erreurs de saisie et un gain de temps pour tous.

**Exemple valide&nbsp;:**
![capture d’écran d’un formulaire valide](../../images/formulaire.png)
![capture d’écran d’un formulaire label proche du champ](../../images/v_label.jpg)

**Exemple non-valide&nbsp;:**
![capture d’écran d’un formulaire auquel il manque un label](../../images/formulaire2.png)
![capture d’écran d’un formulaire label loin du champ](../../images/nv_label.jpg)

**Exemple de formulaire accessible&nbsp;:**

Consulter [l’exemple de formulaire accessible](../../exemples-de-composants/formulaires/) pour plus d’informations.

**Référence <abbr>WCAG</abbr>&nbsp;:**
- <a lang="en" href="https://www.w3.org/TR/WCAG22/#headings-and-labels ">2.4.6 Headings and Labels</a>
- <a lang="en" href="https://www.w3.org/TR/WCAG22/#labels-or-instructions">3.3.2 Labels or Instructions</a>
- <a lang="en" href="https://www.w3.org/TR/WCAG22/#help">3.3.5 Help</a>
- <a lang="en" href="https://www.w3.org/TR/WCAG22/#identify-input-purpose">1.3.5 Identify input purpose</a>




## Détecter, identifier les erreurs et suggérer des corrections

**Cible&nbsp;:** tout le monde, et en particulier les personnes déficientes visuelles, cognitives, avec des difficultés pour lire ou ayant un déficit d’attention et les seniors.
**Quand&nbsp;:** lors de la conception et lors du développement.

**Description&nbsp;:**

Les erreurs sont automatiquement détectées, l’utilisateur est averti par la modification du titre de la page, l’élément de formulaire en erreur est identifié et l’erreur est décrite à l’utilisateur sous forme de texte. Si besoin, une correction est suggérée.

Les libellés des messages d’erreur doivent être explicites.

Pour les pages Web qui entraînent des actions importantes (engagement juridique, transaction financière, modification ou effacement de données importantes, réponse à un test ou examen...), l'action doit être réversible ou passer par une étape de confirmation permettant de vérifier ou rectifier la saisie en cas d'erreur.

**À vérifier&nbsp;:**

L’identification du champ en erreur ainsi qu’une éventuelle suggestion de correction peuvent être ajoutées dynamiquement à la balise `label`, en priorité, mais aussi à l’attribut `title` ou les attributs `aria-label` et `aria-labelledby` (cf. [les attributs ARIA qui peuvent vous sauver](../../../articles/attributs-aria-qui-peuvent-vous-sauver/)) selon le contexte et les besoins.

**Objectif utilisateur&nbsp;:**

Guider l’utilisateur en cas d’erreurs permet d’améliorer la compréhension et la correction des erreurs, pour tous les utilisateurs, en particulier pour les novices sur internet, les seniors et les personnes déficientes cognitives.

**Exemple valide&nbsp;:**
![capture d’écran d’un formulaire affichant des messages d’erreur à la saisie valides](../../images/formulaire-ok.png)

**Exemple non-valide&nbsp;:**
![capture d’écran d’un formulaire affichant des messages d’erreur à la saisie non-valides](../../images/formulaire-ko.png)

&nbsp;
**Exemple de formulaire accessible&nbsp;:**

Consulter [l’exemple de formulaire accessible](../../exemples-de-composants/formulaires/) pour plus d’informations.

**Référence <abbr>WCAG</abbr>&nbsp;:**
- <a lang="en" href="https://www.w3.org/TR/WCAG22/#error-identification">3.3.1 Error Identification</a>
- <a lang="en" href="https://www.w3.org/TR/WCAG22/#error-suggestion">3.3.3 Error Suggestion</a>
- <a lang="en" href="https://www.w3.org/TR/WCAG22/#error-prevention-legal-financial-data">3.3.4 Error Prevention (Legal, Financial, Data)</a>





**Cible&nbsp;:** tout le monde, et en particulier les personnes déficientes visuelles et cognitives, avec un déficit d’attention et les utilisateurs de tactiles (mobile et tablette).
**Quand&nbsp;:** lors de la conception et lors du développement.

**Description&nbsp;:**

Chaque champ de formulaire doit être accompagné d’un libellé ou d'instructions permettant d’identifier le rôle du champ, le type de donnée et le format attendu.

Ces informations doivent être proches visuellement du champ afin que l'utilisateur fasse facilement le lien entre eux (notamment pour les utilisateurs de zoom, de loupe logicielle, voire sur mobile).

Chaque libellé (ou instructions) doit être inclus dans une balise `label`, elle-même associée au champ de formulaire grâce à un attribut `for` renseigné, reprenant la valeur de l’`id` du champ.

Dans certains cas, il semble inutile d’accompagner le champ de formulaire d’un libellé car son rôle est évident (champ de recherche accompagné d’un bouton en forme de loupe par exemple, case à cocher pour sélectionner une ligne dans un tableau de données). Dans ce cas, prévoir au minimum un attribut `title`. Un libellé peut être également ajouté (reprenant la valeur du `title`), celui doit être associé au champ de formulaire et rendu invisible à l’écran (utiliser une classe de <a href="../../exemples-de-composants/masquage-accessible/">masquage accessible</a>).

À noter que l’attribut `title` positionné sur une balise de champ de formulaire fait office de libellé tout comme les attributs `aria-label` et `aria-labelledby` (cf. [les attributs ARIA qui peuvent vous sauver](../../../articles/attributs-aria-qui-peuvent-vous-sauver/)) dans cet ordre de préférence.

L'attribut `autocomplete` doit être présent et pertinent pour tous les champs listés dans <a lang="en" href="https://www.w3.org/TR/WCAG22/#input-purposes">7. Input Purposes for User Interface Components</a>.

**À vérifier&nbsp;:**

S’assurer que le libellé du champ (étiquette) est suffisamment proche du champ associé.

Aligner tous les libellés à gauche lorsque le nombre de caractères séparant le libellé le plus long de celui le plus court ne dépasse pas 6 caractères&nbsp;; au-delà, aligner tous les libellés à droite.

Si cela est pertinent, les champs ont un attribut `autocomplete` afin que l’utilisateur ait la possibilité d’utiliser une liste de propositions pré-enregistrées ou en auto-complétion.

Pour les boutons radio et les cases à cocher, l’utilisation de la balise `label` est, parfois, à compléter par un autre dispositif (`title`, `aria-labelledby`, `aria-label` ou parfois, `fieldset` et `legend`).

Pour les champs obligatoires, ceci doit être précisé dans le `label` via un texte explicite ("obligatoire"), si cette identification n'est pas réalisée de manière explicite, il faut en expliquer la signification comme, "Tous les champs obligatoires sont marqués d'un *",placée en début de formulaire, et/ou une propriété `aria-required`, `required`.

**Objectif utilisateur&nbsp;:**

Ne pas respecter ces recommandations est un point bloquant pour tout utilisateur de synthèse vocale mais aussi de loupe logicielle car il ne sait pas quelles valeurs entrer dans les champs. Pour les utilisateurs de mobiles et les déficients moteurs, cela permet d’activer ou de cliquer plus facilement sur les éléments de formulaire.

Pour les champs avec auto-complétion, facilite la tâche aux déficients moteur et cognitif, les dyslexiques. Cela permet d’éviter les erreurs de saisie et un gain de temps pour tous.

**Exemple valide&nbsp;:**
![capture d’écran d’un formulaire valide](../../images/formulaire.png)
![capture d’écran d’un formulaire label proche du champ](../../images/v_label.jpg)

**Exemple non-valide&nbsp;:**
![capture d’écran d’un formulaire auquel il manque un label](../../images/formulaire2.png)
![capture d’écran d’un formulaire label loin du champ](../../images/nv_label.jpg)

**Exemple de formulaire accessible&nbsp;:**

Consulter [l’exemple de formulaire accessible](../../exemples-de-composants/formulaires/) pour plus d’informations.

**Référence <abbr>WCAG</abbr>&nbsp;:**
- <a lang="en" href="https://www.w3.org/TR/WCAG22/#headings-and-labels ">2.4.6 Headings and Labels</a>
- <a lang="en" href="https://www.w3.org/TR/WCAG22/#labels-or-instructions">3.3.2 Labels or Instructions</a>
- <a lang="en" href="https://www.w3.org/TR/WCAG22/#help">3.3.5 Help</a>
- <a lang="en" href="https://www.w3.org/TR/WCAG22/#identify-input-purpose">1.3.5 Identify input purpose</a>




## Authentification accessible

**Cible&nbsp;:** tout le monde, en particulier les personnes avec des déficiences cognitives.
**Quand&nbsp;:** dès la conception et pendant le développement.

**Description&nbsp;:**

Pour être accessible, aucune étape du processus d'authentification ne doit être basée sur les fonctions cognitives de l'utilisateur (ex : mémoriser un identifiant et mot de passe, saisir un mot de passe qui doit être recopié sans erreur, reproduire un schéma gestuel sur un écran tactile, résoudre une énigme), sauf si cette étape fournit au moins l'un des moyens suivants :
- une **méthode alternative d'authentification** qui ne repose pas sur la réalisation d'un test cognitif - critères 3.3.8 et 3.3.9
- un **mécanisme** qui **aide** l'utilisateur à réaliser le test cognitif demandé pour s'authentifier (ex : gestionnaires de mots de passe qui permettent à l'utilisateur de moins faire appel à sa mémoire, possibilité de copier-coller son mot de passe pour éviter la difficulté de re saisir ce qui l'a déjà été) - critères 3.3.8 et 3.3.9
- un test cognitif de **reconnaissance d'objets courants** (images, vidéo, audio) - critère 3.3.8
- un test cognitif d'**identification d'un contenu personnel non textuel** (images, vidéo, audio) **préalablement fourni au site web par l'utilisateur** - critère 3.3.8

**Bonnes pratiques&nbsp;:**

Le respect du critère 3.3.9 (AAA) repose sur la non-utilisation dans le processus d'authentification des méthodes basées sur :
- la reconnaissance d'objets courants (images, vidéo, audio)
- l'identification d'un contenu personnel non textuel (images, vidéo, audio) préalablement fourni au site web par l'utilisateur.

**À vérifier&nbsp;:**

Pour un système d'authentification par la saisie d'un identifiant et d'un mot de passe, s'assurer que :
- l'agent utilisateur (navigateur et applications de gestion de mots de passe) permet le **remplissage automatique des champs "identifiant" et "mot de passe"**
**ou**
- l'utilisateur peut **copier** son identifiant puis son mot de passe à partir d'une source locale (ex : application de gestion de mots de passe) pour ensuite les **coller** respectivement dans les champs correspondants du formulaire d'authentification ou dans une interface en ligne de commande. Le **format demandé** par les champs "identifiant" et "mot de passe" doit être le **même que celui des informations** copiées pour éviter à l'utilisateur de devoir transcrire (i.e., saisir et copier) ces informations.

Pour un système d'authentification à 2 facteurs (double authentification), s'assurer :
- qu'il ne soit pas demandé à l'utilisateur de recopier un **code de vérification**. L'utilisateur doit disposer à minima de l'une des **aides** suivantes :
  - possibilité de copier-coller le code de vérification à partir d'une application de gestion de mots de passe, d'une application de message textuel ou d'une clé de sécurité logicielle,
  - ou permettre à l'agent utilisateur de remplir le champ automatiquement.
Note : lorsqu'un code de vérification doit être reçu ou généré par un deuxième appareil (ex : SMS reçu sur un mobile), la possibilité de pouvoir envoyer ce code de vérification au premier appareil n'est pas à évaluer dans ce critère.
**ou**
- que le système d'authentification à 2 facteurs ne repose pas sur des codes, mais par exemple sur une clé USB d'authentification, une application tierce (qui peut être ou non sur un 2ème appareil) qui demande à l'utilisateur de confirmer qu'il est bien à l'origine de la requête, une méthode d'authentification proposée par le système d'exploitation de l'appareil.

Pour un système d'authentification dont l'une des étapes est un **captcha**, s'assurer qu'il y a une méthode qui n'inclut pas de test cognitif (retenir, recopier un mot, reconnaitre une image donnée par le site web), sauf si cela repose sur la reconnaissance d'objets ou l'identification d'un contenu personnel non textuel.
- Si l'authentification à double facteur se fait par la reconnaissance d'un contenu personnel non textuel, les conditions de sécurité doivent permettre d'éviter à une tierce personne de deviner quelle est l'image à reconnaitre.
- Dans le cas où l'utilisateur est obligé de transcrire du texte (ex : création pour la 1ère fois d'un mot de passe qui sera ensuite enregistré dans un logiciel de gestion de mot de passe), la possibilité de montrer les caractères saisis doit être proposée.

**Objectif utilisateur&nbsp;:**

Permettre aux utilisateurs ayant des problèmes cognitifs (mémoire, dyslexie, dyscalculie, capacités cognitives limitées) de s'authentifier.

**Exemples valides (AA et AAA)&nbsp;:**

Système d'**authentification à 2 facteurs** : authentification sur le navigateur web d'un ordinateur qui nécessite un **code de vérification reçu par SMS sur le téléphone mobile**. Dans la plupart des cas, il est possible d'envoyer le code sur l'appareil où il peut ensuite être copié-collé, par exemple en le copiant-collant dans un mail sur le téléphone pour l'envoyer sur l'ordinateur ou en passant une application de presse-papier.

Un site web utilise un **couple identifiant** (nom d'utilisateur ou adresse mail) et **mot de passe pour** l'authentification de la connexion (satisfaisant au critère de réussite "1.3.5 But de l'entrée" et au critère de réussite "4.1.2 : Nom, rôle, valeur"). Le navigateur de l'utilisateur ou une extension de gestionnaire de mot de passe tiers intégrée peut identifier la fonction de ces 2 champs et **remplir automatiquement l'identifiant** et le mot de passe.

Un site web utilise **WebAuthn** pour que l'utilisateur puisse s'**authentifier avec son appareil plutôt qu'avec son nom d'utilisateur et son mot de passe**. L'appareil de l'utilisateur peut utiliser n'importe quelle modalité disponible. Les méthodes les plus courantes sur les ordinateurs portables et les téléphones sont la reconnaissance faciale, les empreintes digitales et le code PIN (numéro d'identification personnel). Le site web n'impose aucune utilisation particulière, il est supposé que l'utilisateur choisira la méthode qui lui convient.

Un site web offre la possibilité de se connecter avec un fournisseur tiers en utilisant la méthode **OAuth**.

Un site web qui requiert une **authentification à deux facteurs** offre **plusieurs options pour le deuxième facteur**, y compris une méthode basée sur une clé USB où l'utilisateur clique simplement sur un bouton pour entrer un code valable pendant une durée limitée.

Un site web qui requiert une **authentification à deux facteurs** affiche un **QR code** qui peut être scanné par une application sur l'appareil de l'utilisateur pour confirmer son identité.

Un site web qui requiert une **authentification à deux facteurs** envoie une notification à l'appareil de l'utilisateur. L'utilisateur doit utiliser le **mécanisme d'authentification de son appareil** (par exemple, un code PIN défini par l'utilisateur, une empreinte digitale, une reconnaissance faciale) pour confirmer son identité.

**Exemple non-valide&nbsp;:**

Exemple qui empêche un utilisateur de saisir un mot de passe ou un code de vérification dans le même format que celui dans lequel il a initialement été créé :
- Un formulaire qui demande à l'utilisateur de saisir les 4 derniers chiffres de son identifiant dans 4 champs différents.
  Exception : l'utilisateur peut copier son code puis le coller dans un premier champ. Les caractères seront automatiquement répartis dans les champs suivants.

**Référence <abbr>WCAG</abbr>&nbsp;:**
- <a lang="en" href="https://www.w3.org/TR/WCAG22/#accessible-authentication-minimum">3.3.8 Accessible Authentication (Minimum)</a>
- <a lang="en" href="https://www.w3.org/TR/WCAG22/#accessible-authentication-enhanced">3.3.9 Accessible Authentication (Enhanced)</a>
