---
title: "Recommandations pour l'accessibilité d'un composant d'autocomplétion"
abstract: "Présentation de notre démarche et des recommandations sélectionnées"
date: "2020-12-23"
tags:
  - web
---

# Recommandations pour l'accessibilité d'un composant d'autocomplétion

Les composants d’autocomplétion sont de plus en plus courants au sein de nos interfaces, pourtant ils restent souvent peu accessibles.

Nous avons donc décidés de réaliser un état des lieux afin de définir plusieurs recommandations fonctionnelles.

L’objectif final est de proposer un composant prêt à l’emploi pour nos projets.

Dans cet article nous vous présentons notre démarche et les recommandations retenues.

## Notre démarche

Nous souhaitons dans la mesure du possible nous appuyer sur des <span lang="en">patterns</span> existants. 
  
Dans un premier temps, des audits en amont sont réalisés sur  plusieurs composants par un expert accessibilité afin d’assurer une première sélection.

Les composants les plus utilisables sont ensuite soumis à des tests utilisateurs.

Au terme du benchmark les implémentations retenues sont :

- <a href="https://alphagov.github.io/accessible-autocomplete/examples/" target="_blank" title="GOV UK, accessible autocomplete (nouvelle fenêtre)"><span lang="en">GOV UK, accessible autocomplete</span> <span class="sr-only">(nouvelle fenêtre)</span></a>
- <a href="https://www.w3.org/TR/wai-aria-practices-1.1/#combobox" target="_blank" title="Pattern WAI ARIA 1.1, combobox (nouvelle fenêtre)" >Pattern WAI ARIA 1.1, combobox <span class="sr-only">(nouvelle fenêtre)</span></a>

## Tests utilisateurs

Nous avons sollicité des salariés d’Orange en situation de handicap.

-	Documentaliste, utilisateur de JAWS et IE11
-	Développeur, utilisateur de NVDA et Firefox ESR
-	Téléconseiller, utilisateur de ZoomText et IE11

JAWS 19 (lecteur d’écran) et Zoomtext (loupe d’écran), sont les aides techniques fournies aux salariés non-voyants et malvoyants.
 
Internet Explorer 11 et Firefox ESR sont les navigateurs installés par défaut sur les postes de travail.
Les applications métiers et les intranets sont développés pour ces supports.

Les associations JAWS / IE et Zoomtext / IE sont les couples testés en priorité lors d’une évaluation de projets internes, car les plus répandu chez nos utilisateurs cibles.

Nous avons créé un scénario simple, basé sur des formulaires, utilisant chacun une version différente du composant : 

-	<abbr title="site web du gouvernement britannique">GOV UK <span class="sr-only">site du gouvernement britannique</span></abbr> <span lang="en">accessible autocomplete</span>
-	<span lang="en">Pattern</span> WAI ARIA 1.1, <span lang="en">Combobox with Listbox</span>, exemple 1
-	<span lang="en">Pattern</span> WAI ARIA 1.1, <span lang="en">Combobox with Listbox</span>, exemple 2
-	<span lang="en">Pattern</span> WAI ARIA 1.1, <span lang="en">Combobox with Listbox</span>, exemple 3

![](../images/page-test.png)

### Résumé des retours 

**Depuis JAWS :**

Dans les versions ARIA, exemples 2 et 3, l'utilisateur n'est pas informé qu’il s’agit d’un champ d’autocomplétion.  

**Depuis NVDA :**

-	L'utilisateur préfère la version GOV UK, car non seulement le composant lui indique le nombre de caractères minimum à saisir (2 ou 3 lettres) mais également le nombre de résultats affichés. 
-	Depuis l'exemple 1 du pattern ARIA 1.1, c’est par hasard en faisant flèche bas qu’il découvre des propositions.
> On peut complètement zapper l’auto complétion
-	Dans les exemples 2 et 3 du pattern ARIA 1.1, l'utilisateur perçoit la notion d’autocomplétion, mais on ne lui précise aucune information après la saisie de 2 ou 3 lettres (que ce soit le nombre de propositions, ou les propositions).
 
**Depuis ZoomText :**

L'utilisateur ne voit pas de différences significatives entre les 4 propositions.

### Tests mobile

En complément, des tests sur mobile sont réalisés par des experts accessibilités, à partir des mêmes pages de tests.

**Versions testées :**

-	IOS 13 + Safari + VoiceOver
-	Android 6.0.1+ Chrome + Talkback

Sur les 2 supports la conclusion est la même : 

**GOV UK <span lang="en">accessible autocomplete</span>**
-	Comportement identique au desktop (toutes les vocalisations sont lancées, que ce soit à l’entrée dans le champ, et lors de la navigation dans la liste)
-	Navigation dans la liste OK, et sélection de l’élément désiré OK

**Pattern WAI ARIA 1.1 <span lang="en">Combobox with Listbox</span>**
-	La liste de propositions ne s’affiche pas systématiquement
-	Lorsque la liste s’affiche, aucune vocalisation automatiques n’est lancée
-	L’utilisateur ne sait pas que des propositions lui sont faites

## Conclusion des tests

Il apparaît que ce sur les supports évalués, l’implémentation du GOV UK est plus robuste.

L’implémentation ARIA repose sur une gestion du focus par `aria-activedescendant`, contrairement à l’implémentation de GOV UK qui repose sur la méthode `focus()`.

Il est possible que ce soit cette implémentation qui impacte le comportement sur mobile.

C'est en tout cas  une différence significative entre les 2 composants.

Nous avons pris également l’initiative des tester le pattern WAI ARIA 1.2, **encore en draft**.

Là encore le comportement sur mobile n'est pas concluant, la liste de propositions n'est pas perçue.

Cependant, pour le reste le pattern utilisé se rapproche de l'implémentation GOV UK (par exemple le role=’combobox’ est positionné directement sur l’input dorénavant, contrairement à la version ARIA 1.1).

A ce stade compte tenu des retours utilisateurs et des points de blocages sur mobile, nous orientons notre choix sur le composant GOV UK, par ailleurs conforté par l’évolution que semble prendre le pattern ARIA 1.2.

## Recommandations

Vous l’avez compris, nous nous sommes grandement appuyés sur le composant GOV UK.

Les écarts avec le composant initial sont commentés directement dans les recommandations.

### Combobox

**Input text avec les attributs suivants :**

![](../images/autocompletion-combobox.png)

-	`role = "combobox"`  
-	`aria-expanded = true/false`
-	`autocomplete = "off"`  
-	`aria-autocomplete = "list"`
	-	La valeur `list` correspond au comportement actuel du composant que nous devons produire, d’autres valeurs sont cependant possibles (`inline` et `both`)
	-	`inline` = suggestion automatique dans le champ de saisie
	-	`both` = suggestion automatique dans le champ de saisie + liste de choix
-	`aria-control` (<span lang="en">ID</span> de la listbox)

**Remarques**

1.	Le role est directement positionné sur l’`input`, contrairement à l’implémentation ARIA 1.1. et conformément à l’implémentation GOV UK et ARIA 1.2 <span lang="en">(draft)</span>, 
2.	Par contre nous privilégions l’utilisation du `aria-control` au `aria-owns`, qui nous parait plus adaptée au regard de la description du <span lang="en">pattern</span>.
Plus d’informations dans l'article <a href="https://www.levelaccess.com/differences-aria-1-0-1-1-changes/" target="_blank" lang="en" title="Differences between ARIA 1.0 and 1.1: Changes (nouvelle fenêtre)">Differences between ARIA 1.0 and 1.1: Changes <span class="sr-only">(nouvelle fenêtre)</span></a>

### Listbox

**Elément UL avec les attributs suivant :**

![](../images/autocompletion-listbox.png)

-	`role = "listbox"`  
-	`aria-label` (la valeur est identique au label associé au champ de saisie) 

**Elément LI avec les attributs suivant :**

-	`role = "option"` 
-	`aria-posinset` (position de l’item dans la liste)
-	`aria-setsize` (longueur totale de liste de proposition)
-	`aria-selected = "true"` (lorsqu’un item est en cours de sélection)
-	`tabindex = "-1"` (la valeur -1 permettra une gestion du déplacement focus de manière programmatique)

**Remarques**

1.	Pour rappel, cette solution s’avère plus robuste que gestion du focus par l’attribut aria-descendant, plus d’infos : 
	a.	<a href="https://www.w3.org/TR/wai-aria-practices-1.2/#kbd_roving_tabindex" target="_blank" title="Gestion du focus par tabindex (nouvelle fenêtre)">Gestion du focus par tabindex <span class="sr-only">(nouvelle fenêtre)</span></a>
	b.	<a href="https://www.w3.org/TR/wai-aria-practices-1.2/#kbd_focus_activedescendant)" target="_blank" title="Gestion du focus par aria-activedescendant (nouvelle fenêtre)">gestion du focus par aria-activedescendant <span class="sr-only">(nouvelle fenêtre)</span></a> 
2.	La liste de résultats étant rafraichie dynamiquement nous préservons les attributs aria-posinset, etc. afin de fournir une liste à jour au lecteur d’écran.
Pour information, cette implémentation n’est pas préservée dans la <span lang="en">draft</span> ARIA 1.2.

### <span lang="en">Feedbacks</span>

-	Un message pour indiquer les interactions, exemple GOV UK :
> Lorsque des résultats sont disponibles, utiliser les flèches haut et bas pour naviguer dans les propositions.
Depuis un périphérique tactile, explorer en utilisant un balayage

-	Un message pour indiquer le nombre de caractères mininum à saisir 
-	Un message pour indiquer le nombre de résultats et l’item en cours de sélection :
> 3 résultats sont disponibles. Afghanistan 1 sur 3 est sélectionné

**Remarques**

Nous préservons les feedbacks mis en places par GovUK. Ils se sont avérés pertinents pour diriger les utilisateurs dans l’utilisation du composant.

**Intégration**

Elément DIV présent dans le <abbr title="Document Object Model" lang="en">DOM</abbr> dès le chargement de la page :

-	`role = "status"`
-	`aria-live = "polite"`
-	`aria-atomic = "true"` 
-	`class = "sr-only"`

**Remarques**

L’élément `DIV` avec l’attribut `aria-live` est présent dans le DOM dès le chargement de la page.

Nous nous assurons ainsi que les aides techniques identifient correctement cette zone dynamique lors de leur analyse du DOM.

A l’initialisation, le `DIV` est vide afin d’éviter une vocalisation intempestive à l’utilisateur.

Les messages sont intégrés dynamiquement selon les actions de l’utilisateur.

La restitution d’un message s’opère dès son intégration dans la zone <span lang="en">LIVE</span>.

### Interactions

-	**Entrer dans les propositions :** flèches bas (input vers premier item)
-	**Navigation entre les propositions :** flèches haut et bas (pas de tabulation)
-	**Sortir des propositions :** flèches haut (premier item vers input)
-	**Sélectionner une proposition :** 
	-	Espace ou Entrée
	-	Repositionner automatiquement le focus dans l’`input` après sélection
-	**Touche Echap :** 
	-	Ferme la `listbox` et repositionne focus dans l'`input`
	-	Aucun item n’est sélectionné
	-	Si une sélection est déjà faite, le focus est repositionné dans le champ sans le vider
-	**Fleche droite/gauche :** repositionner curseur dans l’input sans fermer la listbox
-	**Touche TAB depuis la combobox :** poursuivre le parcours focus, donc l’utilisateur est positionné sur l’élément suivant éligible au focus (`input`, `button`, `link`, …)
-	**Touche TAB depuis la listbox :**
	-	Poursuivre le parcours focus
	-	La combobox est renseignée avec la valeur en cours de sélection lors de l’activation de la touche TAB
-	**Raccourci SHIFT + TAB depuis la listbox :**
	-	Poursuivre le parcours focus en sens inverse
	-	La combobox est renseignée avec la valeur en cours de sélection lors de l’activation de la touche TAB
	
**Remarques**

1.	Le composant GOV UK ne reprend pas l’ajout automatiquement de la valeur lors d’une tabulation.
Nous faisons ici le choix de nous aligner sur le comportement natif de l’autocomplétion
2.	Les flèches permettent de se repositionner dans l’input, là encore nous choisissons de nous aligner sur le comportement natif (contrairement cette fois-ci au pattern ARIA 1.2 <span lang="en">draft</span>)

### Ressources

-	<a href="https://alphagov.github.io/accessible-autocomplete/examples/" target="_blank" title="GOV UK, composant accessible autocomplete (nouvelle fenêtre)">GOV UK, composant <span lang="en">accessible autocomplete</span> <span class="sr-only">(nouvelle fenêtre)</span></a>
-	<a href="https://designnotes.blog.GOV UK/2017/04/20/were-building-an-autocomplete/" target="_blank" title="Article We’re building an autocomplete (nouvelle fenêtre)">Article <span lang="en">We’re building an autocomplete</span> <span class="sr-only">(nouvelle fenêtre)</span></a>
-	<a href="https://www.w3.org/TR/wai-aria-practices-1.1/#combobox" target="_blank" title="WAI-ARIA Authoring Practices 1.1 Combobox (nouvelle fenêtre)"><span lang="en">WAI-ARIA Authoring Practices 1.1 Combobox </span> <span class="sr-only">(nouvelle fenêtre)</span></a>
-	<a href="https://pidila.gitlab.io/select-a11y/" target="_blank" title="Select-a11y - demo (nouvelle fenêtre)"><span lang="en">Select-a11y - demo</span> <span class="sr-only">(nouvelle fenêtre)</span></a>
-	<a href="https://www.24a11y.com/2019/select-your-poison/" target="_blank" title="Select your poison (nouvelle fenêtre)"><span lang="en">Select your poison</span> <span class="sr-only">(nouvelle fenêtre)</span></a>
-	<a href="https://www.24a11y.com/2019/select-your-poison-part-2/" target="_blank" title="Select your poison part 2 (nouvelle fenêtre)"><span lang="en">Select your poison part 2</span> <span class="sr-only">(nouvelle fenêtre)</span></a>
-	<a href="-	https://www.levelaccess.com/differences-aria-1-0-1-1-changes/" target="_blank" title="Differences between ARIA 1.0 and 1.1: Changes (nouvelle fenêtre)"><span lang="en">Differences between ARIA 1.0 and 1.1: Changes</span> <span class="sr-only">(nouvelle fenêtre)</span></a>