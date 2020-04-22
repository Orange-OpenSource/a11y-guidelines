---
title: "Indiquer la langue principale et les changements de langue"
---

# Indiquer la langue principale et les changements de langue

**Cible&nbsp;:** pour tout le monde, et en particulier les personnes déficientes visuelles.  
**Quand&nbsp;:** lors du le développement.

**Description&nbsp;:**  

Spécifier la langue principale du document grâce à l’attribut `lang` dans la balise `html`. 
Préciser également la langue d’un contenu exprimé dans une langue autre que la langue principale, en utilisant l’attribut `lang` dans l’élément <abbr>HTML</abbr> contenant l’expression en langue étrangère.  

**À vérifier&nbsp;:**

Pour les mots ou les expressions en langue étrangère passés dans l’usage courant (Google, newsletter…) ou les noms propres, ne pas indiquer de changement de langue.

**Objectif utilisateur&nbsp;:**

Cet attribut permet d’indiquer à la synthèse vocale la langue à utiliser.

**Objectif technique&nbsp;:** 

Permettre aux moteurs de recherche d’identifier la langue d’une page pour améliorer le référencement naturel.  

**Exemple pour une page en français&nbsp;:**  

- pour du <abbr>HTML</abbr>&nbsp;: `<html lang="fr">`
- pour du <abbr>XHTML</abbr>&nbsp;: `<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="fr" lang="fr">`

**Exemple de changement de langue&nbsp;:**  
`découvrir Orange <span lang="en">live</span> TV`

**Référence <abbr>WCAG</abbr>&nbsp;:**  
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#language-of-page">3.1.1 Language of Page</a>
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#language-of-parts">3.1.2 Language of Parts</a>
