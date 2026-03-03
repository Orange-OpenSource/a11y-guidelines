---
title: "Créer des documents PDF accessibles"
abstract: "Quelques recommandations pour créer des documents PDF accessibles"
---

# Créer des documents PDF accessibles

## Introduction
Afin de rendre vos PDF compréhensibles et utilisables par tous, il faut qu'ils soient structurés en suivant ces recommandations.

### Depuis Microsoft Word ou PowerPoint
Retrouvez [nos recommandations pour créer un PDF accessible depuis Microsoft Word](/fr/contenu-et-communication/word/#convertir-en-fichier-pdf) et [nos recommandations pour Microsoft PowerPoint](/fr/contenu-et-communication/powerpoint/#convertir-une-presentation-powerpoint-en-fichier-pdf).

### Depuis Adobe InDesign
InDesign est un logiciel de mise en page, notamment utilisé en pré-presse pour la production de documents imprimables.
Il est cependant tout à fait possible de configurer son fichier pour produire un PDF accessible.
Retrouvez [les recommandations Adobe inDesign sur cette notice](http://www.pdf-accessible.com/notices-accessibilite-indesign-acrobat/#indesign). 

### Depuis Adobe Acrobat Pro
Retrouvez [la fiche Adobe Acrobat Pro de AcceDe PDF](http://www.pdf-accessible.com/notices-accessibilite-indesign-acrobat/#acrobat). 

## Critères incontournables

Ces critères sont utiles aux personnes créant des documents PDF sans utiliser les logiciels d’éditions cités (Microsoft Word, Adobe InDesign, Adobe Acrobat Pro, etc.), par exemple les développeurs dont les applications génèrent des documents PDF.

### Structure du document
* Le document doit contenir a minima un titre de document et une langue par défaut (les changements de langues seront indiqués dans le document).
  * Voir les critères WCAG associés <a hreflang="en" href="https://www.w3.org/TR/WCAG20-TECHS/PDF16.html" title="Technique PDF16 des WCAG 2.0" aria-label="Technique PDF16 des WCAG 2.0"><abbr>PDF16</abbr></a>, <a hreflang="en" href="https://www.w3.org/TR/WCAG20-TECHS/PDF17.html" title="Technique PDF17 des WCAG 2.0" aria-label="Technique PDF17 des WCAG 2.0"><abbr>PDF17</abbr></a>, <a hreflang="en" href="https://www.w3.org/TR/WCAG20-TECHS/PDF18.html" title="Technique PDF18 des WCAG 2.0" aria-label="Technique PDF18 des WCAG 2.0"><abbr>PDF18</abbr></a>.
<br>

* Le document est structuré à l’aide de titres, par l’usage approprié de «&nbsp;tags&nbsp;» (balises) titres. De plus, les documents longs proposeront des signets afin de faciliter la navigation.
  * Voir les critères WCAG associés <a hreflang="en" href="https://www.w3.org/TR/WCAG20-TECHS/PDF2.html" title="Technique PDF2 des WCAG 2.0" aria-label="Technique PDF2 des WCAG 2.0"><abbr>PDF2</abbr></a>, <a hreflang="en" href="https://www.w3.org/TR/WCAG20-TECHS/PDF9.html" title="Technique PDF9 des WCAG 2.0" aria-label="Technique PDF9 des WCAG 2.0"><abbr>PDF9</abbr></a>.
<br>

* L’usage d’en-têtes et de pieds de page doit permettre à l’utilisateur de se situer dans le document.
  * Voir le critère WCAG associé <a hreflang="en" href="https://www.w3.org/TR/WCAG20-TECHS/PDF14.html" title="Technique PDF14 des WCAG 2.0" aria-label="Technique PDF14 des WCAG 2.0"><abbr>PDF14</abbr></a>.
<br>

### Navigation clavier et ordre de lecture

* L’ordre de lecture restitué par un outil d’assistance, ainsi que l’ordre de la navigation clavier (par tabulation) reflètent la structure du document. 
* La navigation au clavier doit être possible dans l’ensemble du document sans blocage (empêcher les "pièges" clavier).
Voir les critères WCAG associés <a hreflang="en" href="https://www.w3.org/TR/WCAG20-TECHS/PDF3.html" title="Technique PDF3 des WCAG 2.0" aria-label="Technique PDF3 des WCAG 2.0"><abbr>PDF3</abbr></a>, <a hreflang="en" href="https://www.w3.org/TR/WCAG20-TECHS/G21.html" title="Technique G21 des WCAG 2.0" aria-label="Technique G21 des WCAG 2.0"><abbr>G21</abbr></a>.

### Images

* Les images comportant une information ont une alternative textuelle appropriée. 
* Les documents scannés sont convertis correctement en texte par reconnaissance optique des caractères (OCR). 
* Les images décoratives sont cachées.

Voir les critères WCAG associés  <a hreflang="en" href="https://www.w3.org/TR/WCAG20-TECHS/PDF1.html" title="Technique PDF1 des WCAG 2.0" aria-label="Technique PDF1 des WCAG 2.0"><abbr>PDF1</abbr></a>, <a hreflang="en" href="https://www.w3.org/TR/WCAG20-TECHS/PDF4.html" title="Technique PDF4 des WCAG 2.0" aria-label="Technique PDF4 des WCAG 2.0"><abbr>PDF4</abbr></a>, <a hreflang="en" href="https://www.w3.org/TR/WCAG20-TECHS/PDF7.html" title="Technique PDF7 des WCAG 2.0" aria-label="Technique PDF7 des WCAG 2.0"><abbr>PDF7</abbr></a>.

### Tableaux

* Un tableau de données doit être structuré par un «&nbsp;tag&nbsp;» (balise) `table` contenant au moins une ligne. 
* Les en-têtes de tableaux sont utilisées de manière appropriée. 
* Toutes les lignes contiennent le même nombre de cellules. 
* Les cellules fusionnées indiquent de manière appropriée une fusion par ligne ou colonne (attribut `rowSpan` ou `colSpan`). 

Voir le critère WCAG associé <a hreflang="en" href="https://www.w3.org/TR/WCAG20-TECHS/PDF6.html" title="Technique PDF6 des WCAG 2.0" aria-label="Technique PDF6 des WCAG 2.0"><abbr>PDF6</abbr></a>.

### Liens

Les intitulés de liens sont explicites ou les liens possèdent une alternative explicite.

Voir les critères WCAG associés <a hreflang="en" href="https://www.w3.org/TR/WCAG20-TECHS/PDF11.html" title="Technique PDF11 des WCAG 2.0" aria-label="Technique PDF11 des WCAG 2.0"><abbr>PDF11</abbr></a>, <a hreflang="en" href="https://www.w3.org/TR/WCAG20-TECHS/PDF13.html" title="Technique PDF13 des WCAG 2.0" aria-label="Technique PDF13 des WCAG 2.0"><abbr>PDF13</abbr></a>.

### Listes

Les listes utilisent les «&nbsp;tags&nbsp;» (balises) appropriés (exemples : `L`, `LI`, `Lbl` et `LBody`).

Voir le critère WCAG associé <a hreflang="en" href="https://www.w3.org/TR/WCAG20-TECHS/PDF21.html" title="Technique PDF21 des WCAG 2.0" aria-label="Technique PDF21 des WCAG 2.0"><abbr>PDF21</abbr></a>.

### Formulaires

* Les champs de formulaire ont un nom, un rôle, une valeur, et un état (si approprié). 
* Visuellement, les labels sont correctement positionnés en relation avec le champ. 
* Les champs obligatoires et les formats attendus sont indiqués. 
* Les champs sont accessibles et modifiables au clavier. 
* Les formulaires pouvant être soumis possèdent un bouton de soumission.

Voir les critères WCAG associés <a hreflang="en" href="https://www.w3.org/TR/WCAG20-TECHS/PDF5.html" title="Technique PDF5 des WCAG 2.0" aria-label="Technique PDF5 des WCAG 2.0"><abbr>PDF5</abbr></a>, <a hreflang="en" href="https://www.w3.org/TR/WCAG20-TECHS/PDF10.html" title="Technique PDF10 des WCAG 2.0" aria-label="Technique PDF10 des WCAG 2.0"><abbr>PDF10</abbr></a>, <a hreflang="en" href="https://www.w3.org/TR/WCAG20-TECHS/PDF12.html" title="Technique PDF12 des WCAG 2.0" aria-label="Technique PDF12 des WCAG 2.0"><abbr>PDF12</abbr></a>, <a hreflang="en" href="https://www.w3.org/TR/WCAG20-TECHS/PDF15.html" title="Technique PDF15 des WCAG 2.0" aria-label="Technique PDF15 des WCAG 2.0"><abbr>PDF15</abbr></a>, <a hreflang="en" href="https://www.w3.org/TR/WCAG20-TECHS/PDF22.html" title="Technique PDF22 des WCAG 2.0" aria-label="Technique PDF22 des WCAG 2.0"><abbr>PDF22</abbr></a>.

### Couleurs

S’assurer que [la couleur n’est pas le seul moyen utilisé pour communiquer l’information](/fr/web/designer/couleurs-et-contrastes/#ne-pas-utiliser-la-couleur-ou-linformation-sensorielle-comme-seule-source-dinformation).

Assurer un niveau de [contraste suffisant entre la couleur du texte et celle de l’arrière-plan](/fr/web/designer/couleurs-et-contrastes/#assurer-un-contraste-suffisant-entre-les-couleurs-de-premier-plan-et-de-fond). Ceci est valable pour vos textes mais aussi pour les icônes, boutons et autres éléments graphiques porteurs d'information. Le contraste peut être vérifié à l’aide de l’outil [Colour Contrast Analyser](https://www.paciellogroup.com/resources/contrastanalyser/) par exemple :
* 4.5:1 pour du texte de taille normale.
* 3:1 pour du [texte de grande taille](/fr/glossaire/#texte-de-grande-taille) et les composants d'interface ou éléments graphiques porteurs d'informations.

## Tester l’accessibilité d’un document PDF

Enfin, vous pouvez demander à [télécharger le PDF Validator de Allyant (en)](https://allyant.com/free-pdf-accessibility-checker-validator/) ou encore [installer PDF Accessibility Checker (PAC) (en)](https://pac.pdf-accessibility.org/en/download). 
Ces logiciels permettent l’exécution de tests automatiques sur un document PDF et la détection de problèmes d’accessibilité : 
* testent les propriétés du document, 
* vérifient le balisage des listes et des liens, des formulaires et des tableaux.

<img src="/fr/contenu-et-communication/images/pac1.png" alt="" class="img-fluid" />