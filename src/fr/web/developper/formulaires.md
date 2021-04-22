---
title: "Formulaires"
---

# Formulaires

<p class="lead">S’assurer que l’utilisateur puisse efficacement compléter les formulaires</p>




## Rendre accessibles les champs de formulaire

**Cible&nbsp;:** tout le monde, et en particulier les personnes déficientes visuelles et cognitives, avec un déficit d’attention et les utilisateurs de tactiles (mobile et tablette).  
**Quand&nbsp;:** lors de la conception et lors du développement.

**Description&nbsp;:**  

Chaque champ de formulaire doit être accompagné d’un libellé ou d'instructions permettant d’identifier le rôle du champ, le type de donnée et le format attendu. 

Ces informations doivent être proches visuellement du champ afin que l'utilisateur fasse facilement le lien entre eux (notamment pour les utilisateurs de zoom, de loupe logicielle, voire sur mobile).

Chaque libellé (ou instructions) doit être inclus dans une balise `label`, elle-même associée au champ de formulaire grâce à un attribut `for` renseigné, reprenant la valeur de l’`id` du champ.

Dans certains cas, il semble inutile d’accompagner le champ de formulaire d’un libellé (champ de recherche accompagné d’un bouton en forme de loupe par exemple). Dans ce cas, prévoir tout de même un libellé, l’associer au champ de formulaire et le rendre invisible à l’écran (utiliser une classe de <a href="../../exemples-de-composants/masquage-accessible/">masquage accessible</a>), ainsi celui-ci sera quand même vocalisé par les lecteurs d’écran.
L’attribut `title` positionné sur une balise de champ de formulaire peut faire également office de libellé tout comme les attributs `aria-label` et `aria-labelledby` (cf. [les attributs ARIA qui peuvent vous sauver](../../../articles/attributs-aria-qui-peuvent-vous-sauver/)) dans cet ordre de préférence.

L'attribut `autocomplete` doit être présent et pertinent pour tous les champs listés dans <a lang="en" href="https://www.w3.org/TR/WCAG21/#input-purposes">7. Input Purposes for User Interface Components</a>.

**À vérifier&nbsp;:**

S’assurer que le libellé du champ (étiquette) est suffisamment proche du champ associé.

Aligner tous les libellés à gauche lorsque le nombre de caractères séparant le libellé le plus long de celui le plus court ne dépasse pas 6 caractères&nbsp;; au-delà, aligner tous les libellés à droite.

Si cela est pertinent, les champs ont un attribut `autocomplete` afin que l’utilisateur ait la possibilité d’utiliser une liste de propositions pré-enregistrées ou en auto-complétion.

Pour les boutons radio et les cases à cocher, l’utilisation de la balise `label` est, parfois, à compléter par un autre dispositif (`title`, `aria-labelledby`, `aria-label` ou parfois, `fieldset` et `legend`).

Pour les champs obligatoires, ceci doit être précisé dans le `label` via une image, un symbole texte (`*` par exemple) ou du texte et/ou une propriété `aria-required`.

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
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#headings-and-labels ">2.4.6 Headings and Labels</a>
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#labels-or-instructions">3.3.2 Labels or Instructions</a>
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#help">3.3.5 Help</a>
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#identify-input-purpose">1.3.5 Identify input purpose</a>




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
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#error-identification">3.3.1 Error Identification</a>
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#error-suggestion">3.3.3 Error Suggestion</a>
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#error-prevention-legal-financial-data">3.3.4 Error Prevention (Legal, Financial, Data)</a>

## Désactiver des champs de formulaire

Pour désactiver un champ de formulaire il suffit de lui attribuer l'attribut `disabled` :

```html
<button disabled>Supprimer</button>
<input type="text" name="address" disabled>
```
Si `disable` est utilisé sur un `<fieldset>`, les éléments enfants sont désactivés.
```html
<fieldset id="groupe" disabled> 
    <input name="foo"> 
    <input type="checkbox" name="bar"> 
    <select name="values"> 
        <option value="1">Valeur 1</option>
        <option value="2">Valeur 2</option>
        <option value="3">Valeur 3</option>        
    </select>
</fieldset>
```
