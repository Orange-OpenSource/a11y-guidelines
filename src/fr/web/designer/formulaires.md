---
title: "Web designer - Les formulaires"
abstract: "Formulaires, recommendations d'accessibilité web lors de la conception"
---

# Web designer - Les formulaires

<p class="lead">S’assurer que l’utilisateur puisse efficacement compléter les formulaires</p>


## Rendre utilisables les formulaires

**Cible&nbsp;:** tout le monde et en particulier les personnes déficientes visuelles, dyslexiques et les déficients cognitifs. 

**Quand&nbsp;:** lors de la conception et lors du développement.

**Description&nbsp;:**  
Chaque champ de formulaire doit être accompagné d’un libellé (ou d'instructions) permettant d’identifier le rôle du champ, le type de donnée et le format attendu. Ce libellé doit être proche visuellement du champ afin que l'utilisateur fasse facilement le lien entre eux (notamment pour les utilisateurs de zoom, de loupe logicielle, voire sur mobile). 

Les champs en erreur doivent pouvoir être identifiés et, si besoin, suggérer une correction. Ceci s’applique aux champs de saisie, mais également aux autres types de champs (liste déroulante, bouton radio, case à cocher…). Au niveau du développement, ce libellé sera associé au champ de formulaire pour faciliter la navigation à l’aide d’un lecteur d’écran.

**Exemple valide&nbsp;:**  
![capture d’écran d’un formulaire valide](../../images/formulaire.png)
  
**Exemple non-valide&nbsp;:**  
![capture d’écran d’un formulaire auquel il manque un label](../../images/formulaire2.png)

Dans certains cas, il semble inutile d’accompagner le champ de formulaire d’un libellé (champ de recherche accompagné d’un bouton en forme de loupe par exemple). Dans ce cas prévoir tout de même un libellé. Celui-ci ne sera pas affiché à l’écran mais sera tout de même associé au champ de formulaire lors du développement pour faciliter la navigation à l’aide d’un lecteur d’écran.

Enfin les libellés des messages d’erreur doivent être explicites.

**Exemple valide&nbsp;:**  
![capture d’écran d’un formulaire affichant des messages d’erreur à la saisie valides](../../images/formulaire-ok.png)  

**Exemple non-valide&nbsp;:**  
![capture d’écran d’un formulaire affichant des messages d’erreur à la saisie non-valides](../../images/formulaire-ko.png)


## Limiter les saisies redondantes

**Cible :**  Les personnes avec des déficiences cognitives (notamment avec troubles de la mémoire).

**Quand :** Lors de la conception et du développement.

**Description :** 
Ce critère vise à réduire les efforts cognitifs demandés par le remplissage des formulaires avec des saisies redondantes. 

Les personnes ayant des troubles de la mémoire peuvent avoir des difficultés si un formulaire demande de saisir des informations qui ont été déjà saisies au préalable. Par exemple : devoir saisir une seconde fois son adresse mail.
 
Le fait d'obliger l’utilisateur à saisir plusieurs fois les mêmes informations peut entrainer stress ou fatigue cognitive avec le risque de générer des saisies incorrectes. 
L'utilisateur peut donc se retrouver dans l’impossibilité de poursuivre un parcours donné, voire abandonner la tâche.
 
Un formulaire dont le processus demande de saisir plusieurs fois les mêmes informations doit remplir automatiquement les champs concernés avec les données déjà saisies ou proposer une liste de données déjà saisies.

**À vérifier :**
Vérifier que dans un processus qui demande de saisir plusieurs fois certaines informations (par exemple formulaire en plusieurs étapes), au moins l'une des conditions ci-dessous est respectée : 

* les champs dont les données ont déjà été saisies sont remplis automatiquement.
* l'utilisateur peut sélectionner dans une liste une donnée déjà saisie.
* L'utilisateur peut cocher une case pour remplir automatiquement un champ de formulaire avec des données déjà saisies.

Le fait d'utiliser le système d'autocompletion fourni par le navigateur n'est pas jugé suffisant.

**Exceptions :**
* Une activité (jeu de mémoire) où saisir à nouveau une information est essentiel
* Des informations de sécurité comme la double saisie d'un mot de passe créé par l'utilisateur
* Des informations préalablement renseignées qui ne sont plus valides (session expirée)

**Objectif utilisateur :**
Simplifier le remplissage d'un formulaire pour tous les utilisateurs, notamment ceux ayant des problèmes cognitifs et/ou moteurs.

**Exemple valide :**
Dans le cas d’un formulaire d’achat qui nécessite de saisir une adresse de facturation et une adresse de livraison, si l’utilisateur a déjà saisi l’adresse de facturation et que l’adresse de livraison est la même, il doit alors être possible de remplir automatiquement l’adresse de livraison sur la base des informations saisies pour l’adresse de facturation. 
Il pourrait s’agir par exemple d’une case à cocher qui permettrait de dupliquer automatiquement les informations déjà saisies.

**Exemple non valide :**
Sur un site d'e-commerce, un utilisateur lance une recherche avec le mot clé "manteau" et consulte la page de résultats. 
Après la consultation des détails d'un article faisant partie de la liste des résultats, si l'utilisateur retourne sur la page de recherche, le mot "manteau" n'apparait plus dans le champ de recherche et aucun historique de recherche n'est disponible.

**Référence <abbr>WCAG</abbr> :**  
<a lang="en" href="https://www.w3.org/WAI/WCAG22/Understanding/redundant-entry.html">3.3.7 Redundant Entry</a>


## Authentification accessible

**Cible&nbsp;:** tout le monde, en particulier les personnes avec des déficiences cognitives.
**Quand&nbsp;:** dès la conception et pendant le développement.

**Description&nbsp;:**

Pour être accessible, aucune étape du processus d'authentification ne doit être basée sur les fonctions cognitives de l'utilisateur (ex : mémoriser un identifiant et mot de passe, saisir un mot de passe qui doit être recopié sans erreur, reproduire un schéma gestuel sur un écran tactile, résoudre une énigme), sauf si cette étape fournit au moins l'un des moyens suivants :
- une **méthode alternative d'authentification** qui ne repose pas sur la réalisation d'un test cognitif - critères 3.3.8 et 3.3.9,
- un **mécanisme** qui **aide** l'utilisateur à réaliser le test cognitif demandé pour s'authentifier (ex : gestionnaires de mots de passe qui permettent à l'utilisateur de moins faire appel à sa mémoire, possibilité de copier-coller son mot de passe pour éviter la difficulté de re saisir ce qui l'a déjà été) - critères 3.3.8 et 3.3.9,
- un test cognitif de **reconnaissance d'objets courants** (images, vidéo, audio) - critère 3.3.8,
- un test cognitif d'**identification d'un contenu personnel non textuel** (images, vidéo, audio) **préalablement fourni au site web par l'utilisateur** - critère 3.3.8.

**Bonnes pratiques&nbsp;:**

Le respect du critère 3.3.9 (AAA) repose sur la non-utilisation dans le processus d'authentification des méthodes basées sur :
- la reconnaissance d'objets courants (images, vidéo, audio),
- l'identification d'un contenu personnel non textuel (images, vidéo, audio) préalablement fourni au site web par l'utilisateur.

**À vérifier&nbsp;:**

Pour un système d'authentification par la saisie d'un identifiant et d'un mot de passe, s'assurer que l'une des conditions suivantes est remplie :
  - l'agent utilisateur (navigateur et applications de gestion de mots de passe) permet le **remplissage automatique des champs "identifiant" et "mot de passe"**,
  - l'utilisateur peut **copier** son identifiant puis son mot de passe à partir d'une source locale (ex : application de gestion de mots de passe) pour ensuite les **coller** respectivement dans les champs correspondants du formulaire d'authentification ou dans une interface en ligne de commande. Le **format demandé** par les champs "identifiant" et "mot de passe" doit être le **même que celui des informations** copiées pour éviter à l'utilisateur de devoir transcrire (i.e., saisir et copier) ces informations.

Pour un système d'authentification à 2 facteurs (double authentification), s'assurer que l'une des conditions suivantes est remplie :
  - qu'il ne soit pas demandé à l'utilisateur de recopier un **code de vérification**. L'utilisateur doit disposer à minima de l'une des **aides** suivantes :
    - possibilité de copier-coller le code de vérification à partir d'une application de gestion de mots de passe, d'une application de message textuel ou d'une clé de sécurité logicielle,
    - ou permettre à l'agent utilisateur de remplir le champ automatiquement.
Note : lorsqu'un code de vérification doit être reçu ou généré par un deuxième appareil (ex : SMS reçu sur un mobile), la possibilité de pouvoir envoyer ce code de vérification au premier appareil n'est pas à évaluer dans ce critère.
  - que le système d'authentification à 2 facteurs ne repose pas sur des codes, mais par exemple sur une clé USB d'authentification, une application tierce (qui peut être ou non sur un 2ème appareil) qui demande à l'utilisateur de confirmer qu'il est bien à l'origine de la requête, une méthode d'authentification proposée par le système d'exploitation de l'appareil.

Pour un système d'authentification dont l'une des étapes est un **captcha**, s'assurer qu'il y a une méthode qui n'inclut pas de test cognitif (retenir, recopier un mot, reconnaitre une image donnée par le site web), sauf si cela repose sur la reconnaissance d'objets ou l'identification d'un contenu personnel non textuel.
  - Si l'authentification à double facteur se fait par la reconnaissance d'un contenu personnel non textuel, les conditions de sécurité doivent permettre d'éviter à une tierce personne de deviner quelle est l'image à reconnaitre,
  - Dans le cas où l'utilisateur est obligé de transcrire du texte (ex : création pour la 1ère fois d'un mot de passe qui sera ensuite enregistré dans un logiciel de gestion de mot de passe), la possibilité de montrer les caractères saisis doit être proposée.

**Objectif utilisateur&nbsp;:**

Permettre aux utilisateurs ayant des problèmes cognitifs (mémoire, dyslexie, dyscalculie, capacités cognitives limitées) de s'authentifier.

**Exemples valides (AA et AAA)&nbsp;:**

Un système d'**authentification à 2 facteurs** : authentification sur le navigateur web d'un ordinateur qui nécessite un **code de vérification reçu par SMS sur le téléphone mobile**. Dans la plupart des cas, il est possible d'envoyer le code sur l'appareil où il peut ensuite être copié-collé, par exemple en le copiant-collant dans un mail sur le téléphone pour l'envoyer sur l'ordinateur ou en passant une application de presse-papier.

Un site web utilise un **couple identifiant** (nom d'utilisateur ou adresse mail) et **mot de passe pour** l'authentification de la connexion (satisfaisant au critère de réussite "1.3.5 But de l'entrée" et au critère de réussite "4.1.2 : Nom, rôle, valeur"). Le navigateur de l'utilisateur ou une extension de gestionnaire de mot de passe tiers intégrée peut identifier la fonction de ces 2 champs et **remplir automatiquement l'identifiant** et le mot de passe.

Un site web utilise **WebAuthn** pour que l'utilisateur puisse s'**authentifier avec son appareil plutôt qu'avec son nom d'utilisateur et son mot de passe**. L'appareil de l'utilisateur peut utiliser n'importe quelle modalité disponible. Les méthodes les plus courantes sur les ordinateurs portables et les téléphones sont la reconnaissance faciale, les empreintes digitales et le code PIN (numéro d'identification personnel). Le site web n'impose aucune utilisation particulière, il est supposé que l'utilisateur choisira la méthode qui lui convient.

Un site web offre la possibilité de se connecter avec un fournisseur tiers en utilisant la méthode **OAuth**.

Un site web qui requiert une **authentification à deux facteurs** offre **plusieurs options pour le deuxième facteur**, y compris une méthode basée sur une clé USB où l'utilisateur clique simplement sur un bouton pour entrer un code valable pendant une durée limitée.

Un site web qui requiert une **authentification à deux facteurs** affiche un **QR code** qui peut être scanné par une application sur l'appareil de l'utilisateur pour confirmer son identité.

Un site web qui requiert une **authentification à deux facteurs** envoie une notification à l'appareil de l'utilisateur. L'utilisateur doit utiliser le **mécanisme d'authentification de son appareil** (par exemple, un code PIN défini par l'utilisateur, une empreinte digitale, une reconnaissance faciale) pour confirmer son identité.

**Exemple non-valide&nbsp;:**

Empêcher un utilisateur de saisir un mot de passe ou un code de vérification dans le même format que celui dans lequel il a initialement été créé : par exemple un formulaire qui demande à l'utilisateur de saisir les 4 derniers chiffres de son identifiant dans 4 champs différents.
Exception : l'utilisateur peut copier son code puis le coller dans un premier champ. Les caractères seront automatiquement répartis dans les champs suivants.

**Référence <abbr>WCAG</abbr>&nbsp;:**
- <a lang="en" href="https://www.w3.org/TR/WCAG22/#accessible-authentication-minimum">3.3.8 Accessible Authentication (Minimum)</a>
- <a lang="en" href="https://www.w3.org/TR/WCAG22/#accessible-authentication-enhanced">3.3.9 Accessible Authentication (Enhanced)</a>
