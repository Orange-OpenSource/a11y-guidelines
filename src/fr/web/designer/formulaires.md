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

**Quand :** dès la phase de conception.

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
* L'utilisateur peut cocher une case pour remplir automatiquement un formulaire avec des données déjà saisies.

Le fait d'utiliser un système d'autocompletion n'est pas jugé suffisant.

**Exceptions :**
* Une activité (jeu de mémoire) où saisir à nouveau une information est essentiel
* Des informations de sécurité comme la double saisie d'un mot de passe créé par l'utilisateur
* Des informations préalablement renseignées qui ne sont plus valides (session expirée)

**Objectif utilisateur :**
Simplifier le remplissage d'un formulaire pour tous les utilisateurs, notamment ceux ayant des problèmes cognitifs et/ou moteurs.

**Exemple valide :**
Dans le cas d’un formulaire d’achat qui demande de saisir une adresse de facturation et une adresse de livraison, si l’utilisateur a déjà saisi l’adresse de facturation et que l’adresse de livraison est la même, il doit alors être possible, depuis l’interface, de remplir automatiquement l’adresse de livraison sur la base des informations saisies pour l’adresse de facturation. 
Il pourrait s’agir par exemple d’une case à cocher qui permettrait de dupliquer automatiquement les informations déjà saisies.

**Exemple non valide :**
Sur un site d'e-commerce, un utilisateur lance une recherche avec le mot clé "manteau" et consulte la page de résultat. Après la consultation des détails d'un article faisant partie de la liste des résultats, si l'utilisateur retourne sur la page de recherche, le mot "manteau" n'apparait plus dans le champs de recherche et aucune liste des recherches déjà effectuées n'est proposée/disponible.

**Référence <abbr>WCAG</abbr> :**  
<a lang="en" href=https://www.w3.org/WAI/WCAG22/Understanding/redundant-entry>3.3.7 Redundant Entry</a>