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
