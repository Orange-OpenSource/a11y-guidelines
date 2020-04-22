---
title: "Détecter, identifier les erreurs et suggérer des corrections"
---

# Détecter, identifier les erreurs et suggérer des corrections

**Cible&nbsp;:** tout le monde, et en particulier les personnes déficientes visuelles, cognitives, avec des difficultés pour lire ou ayant un déficit d’attention et les seniors.  
**Quand&nbsp;:** lors de la conception et lors du développement.

**Description&nbsp;:** 

Les erreurs sont automatiquement détectées, l’utilisateur est averti par la modification du titre de la page, l’élément de formulaire en erreur est identifié et l’erreur est décrite à l’utilisateur sous forme de texte. Si besoin, une correction est suggérée.

Les libellés des messages d’erreur doivent être explicites.

Pour les pages Web qui entraînent des actions importantes (engagement juridique, transaction financière, modification ou effacement de données importantes, réponse à un test ou examen...), l'action doit être réversible ou passer par une étape de confirmation permettant de vérifier ou rectifier la saisie en cas d'erreur.

**À vérifier&nbsp;:**

L’identification du champ en erreur ainsi qu’une éventuelle suggestion de correction peuvent être ajoutées dynamiquement à la balise `label`, en priorité, mais aussi à l’attribut `title` ou les attributs `aria-label` et `aria-labelledby` (cf. [les attributs ARIA qui peuvent vous sauver](./label-ledby-describedby.html)) selon le contexte et les besoins.

**Objectif utilisateur&nbsp;:**

Guider l’utilisateur en cas d’erreurs permet d’améliorer la compréhension et la correction des erreurs, pour tous les utilisateurs, en particulier pour les novices sur internet, les seniors et les personnes déficientes cognitives.

**Exemple valide&nbsp;:**  
![capture d’écran d’un formulaire affichant des messages d’erreur à la saisie valides](images/formulaire-ok.png)  

**Exemple non-valide&nbsp;:**  
![capture d’écran d’un formulaire affichant des messages d’erreur à la saisie non-valides](images/formulaire-ko.png)

&nbsp;  
**Exemple de formulaire accessible&nbsp;:**
  
Consulter [l’exemple de formulaire accessible](./exemples/formulaire/index.html) pour plus d’informations.

**Référence <abbr>WCAG</abbr>&nbsp;:**  
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#error-identification">3.3.1 Error Identification</a>
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#error-suggestion">3.3.3 Error Suggestion</a>
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#error-prevention-legal-financial-data">3.3.4 Error Prevention (Legal, Financial, Data)</a>
