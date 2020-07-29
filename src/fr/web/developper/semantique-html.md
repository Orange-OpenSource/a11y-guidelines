---
title: "Respecter la sémantique HTML"
---

# Respecter la sémantique HTML

**Cible&nbsp;:** tout le monde, et en particulier les personnes déficientes visuelles, avec des déficiences cognitives et les seniors.  
**Quand&nbsp;:** dès la conception et à la rédaction du contenu.

**Description&nbsp;:** 
Utiliser correctement les éléments <abbr>HTML</abbr>, en respectant ce pourquoi ils sont faits (validation du code et respect des spécifications) et donc leur sémantique.

**À vérifier&nbsp;:**
Vérifier que la page, si besoin, utilise des listes sémantiquement pertinentes (pas de liste vides ou ne contenant qu’un seul élément)&nbsp;:
 - `<ol>` pour les listes ordonnées,
 - `<ul>` pour les listes non ordonnées,
 - `<li>` pour les éléments de liste.
 - `<dl>`, `<dt>` et `<dd>` pour les listes de définitions

Les listes possèdent au moins deux éléments car sinon ce ne sont pas des listes (sauf si elles sont générées dynamiquement)

S’assurer de bien baliser les citations longues `<blockquote>` ou brèves `<q>`.

Les liens sont bien des liens (i.e. balise `<a>`)&nbsp;: ils pointent effectivement vers une autre adresse, page ou onglet…

Les boutons sont bien des boutons (i.e. balise `<button>`, ou `<input type="button">`)&nbsp;: ils déclenchent une action, une validation, ou encore permettent de faire un choix…

Penser, dans la mesure du possible, à respecter l’apparence classique de ces éléments pour ne pas perturber l’utilisateur habitué à leur aspect spécifique.

Dans le code <abbr>HTML</abbr> s’assurer, lors de la validation, qu'à minima&nbsp;:
- les éléments ont des balises de début et de fin,
- les éléments sont imbriqués conformément à leurs spécifications,
- les éléments ne contiennent pas d’attributs dupliqués,
- chaque `id` est unique.

**Objectif utilisateur&nbsp;:**  
Permettre à tous les utilisateurs d’anticiper la manière d’utiliser et les comportements possibles pour un élément d’interface donné, en assurant que le bon fonctionnement des <abbr>AT</abbr>.

**Objectif technique&nbsp;:**  
Oblige à la structuration cohérente du contenu par le créateur du site et permet d'améliorer la maintenabilité.

**Exemple non-valide&nbsp;:**  
![Exemple non-valide de mauvaise utilisation d ’un lien](../../images/nv-semantiq.jpg)  
Dans cet exemple, le lien «&nbsp;Actualiser&nbsp;» devrait être un bouton «&nbsp;Actualiser&nbsp;» car ici il déclenche une action et non le chargement d’une <abbr>URL</abbr> (page).

**Référence <abbr>WCAG</abbr>&nbsp;:**
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#info-and-relationships">1.3.1 Info and Relationships</a>
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#parsing">4.1.1 Parsing</a>
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#name-role-value">4.1.2 Name, Role, Value</a>

**Outil&nbsp;:** [validateur <abbr>HTML</abbr> et <abbr>CSS</abbr> du <abbr>W3c</abbr>](https://validator.w3.org/)
