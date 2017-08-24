# Créer des documents <abbr>PDF</abbr> accessibles
<script>$(document).ready(function () {
    setBreadcrumb([{"label":"Recommandations PDF"}]);
});</script>

<style>h3 {font-size: 1rem;}</style>

## Introduction

Produire des documents <abbr>PDF</abbr> accessibles nécessite de suivre des recommandations afin de s’assurer qu’ils soient structurés via un balisage approprié, pour les rendre ainsi compréhensibles et utilisables par tous (y compris les utilisateurs ceux utilisant des outils d’assistance).

Nous vous présenterons des guides ayant pour objectifs de vous fournir les informations nécessaires afin de créer manuellement des <abbr>PDF</abbr> accessibles à partir des logiciels principaux d’édition, puis nous vous énumérerons les critères incontournables à respecter pour s’assurer qu’un document <abbr>PDF</abbr> soit accessible.

## Guides pour créer des documents <abbr>PDF</abbr> accessibles

### Avec Microsoft Word

Vous trouverez les recommandations Microsoft Word, ainsi que la procédure pour exporter le document en <abbr>PDF</abbr>, sur la <a href="/others/word.html">rubrique Microsoft Word des recommandations accessibilité Orange</a>.

### Avec Adobe InDesign

Vous trouverez les recommandations Adobe inDesign sur la notice <a href="http://www.pdf-accessible.com/notices-accessibilite-indesign-acrobat/#indesign">Créer des documents <abbr>PDF</abbr> accessibles avec Adobe Indesign</a> de AcceDe <abbr>PDF</abbr>.

Ce document est issu de la phase 1 d’AcceDe <abbr>PDF</abbr> (2011), par Atalan en partenariat avec 9 entreprises&nbsp;: Spie, Air Liquide, Société Générale, <abbr>BNP</abbr> Paribas, Areva, <abbr>LVMH</abbr>, Capgemini, Thales et <abbr>SNCF</abbr>, en s’appuyant sur un comité de relecture constitué de nombreux professionnels et d’associations impliqués dans l’accessibilité numérique.

### Avec Adobe Acrobat Pro

Vous trouverez les recommandations Adobe Acrobat Pro sur la notice <a href="http://www.pdf-accessible.com/notices-accessibilite-indesign-acrobat/#acrobat">Créer des documents <abbr>PDF</abbr> accessibles avec Adobe Acrobat Pro</a> de AcceDe <abbr>PDF</abbr>. 

Ce document est issu de la phase 2 d’AcceDe <abbr>PDF</abbr> (2015). Sous la coordination d’Atalan, Orange fut partenaire de cette phase 2, aux côtés de 9 autres grandes entreprises&nbsp;: La Poste, Siemens, Spie, Thales, Atos, <abbr>BNP</abbr> Paribas, Devoteam, Manpower et <abbr>EDF</abbr> en s’appuyant sur un comité de relecture constitué de nombreux professionnels et d’associations impliqués dans l’accessibilité numérique.

## Critères incontournables

Ce sont les principaux critères à respecter pour qu’un document <abbr>PDF</abbr> soit accessible, indépendamment de la procédure utilisée pour le créer. Les critères incontournables seront utiles aux personnes créant des documents <abbr>PDF</abbr> sans utiliser les logiciels d’éditions (Microsoft Word, Adobe InDesign, Adobe Acrobat Pro), par exemple les développeurs dont les applications génèrent des documents <abbr>PDF</abbr>.

### Structure du document

Le document doit contenir a minima un titre de document et une langue par défaut (les changements de langues seront indiqués dans le document).

Voir <a hreflang="en" href="https://www.w3.org/TR/WCAG20-TECHS/PDF16.html" title="Technique PDF16 des WCAG 2.0" aria-label="Technique PDF16 des WCAG 2.0"><abbr>PDF16</abbr></a>, <a hreflang="en" href="https://www.w3.org/TR/WCAG20-TECHS/PDF17.html" title="Technique PDF17 des WCAG 2.0" aria-label="Technique PDF17 des WCAG 2.0"><abbr>PDF17</abbr></a>, <a hreflang="en" href="https://www.w3.org/TR/WCAG20-TECHS/PDF18.html" title="Technique PDF18 des WCAG 2.0" aria-label="Technique PDF18 des WCAG 2.0"><abbr>PDF18</abbr></a>.

Le document est structuré à l’aide de titres, par l’usage approprié de «&nbsp;tags&nbsp;» (balises) titres. De plus, les documents longs proposeront des signets afin de faciliter la navigation.

Voir <a hreflang="en" href="https://www.w3.org/TR/WCAG20-TECHS/PDF2.html" title="Technique PDF2 des WCAG 2.0" aria-label="Technique PDF2 des WCAG 2.0"><abbr>PDF2</abbr></a>, <a hreflang="en" href="https://www.w3.org/TR/WCAG20-TECHS/PDF9.html" title="Technique PDF9 des WCAG 2.0" aria-label="Technique PDF9 des WCAG 2.0"><abbr>PDF9</abbr></a>.

L’usage d’en-têtes et de pieds de page doit permettre à l’utilisateur de se situer dans le document.

Voir <a hreflang="en" href="https://www.w3.org/TR/WCAG20-TECHS/PDF14.html" title="Technique PDF14 des WCAG 2.0" aria-label="Technique PDF14 des WCAG 2.0"><abbr>PDF14</abbr></a>.

### Navigation clavier et ordre de lecture

L’ordre de lecture restitué par un outil d’assistance, ainsi que l’ordre de la navigation clavier (par tabulation) reflètent la structure du document. Il ne doit pas y avoir de piège clavier (la navigation au clavier doit être possible dans l’ensemble du document sans blocage).

Voir <a hreflang="en" href="https://www.w3.org/TR/WCAG20-TECHS/PDF3.html" title="Technique PDF3 des WCAG 2.0" aria-label="Technique PDF3 des WCAG 2.0"><abbr>PDF3</abbr></a>, <a hreflang="en" href="https://www.w3.org/TR/WCAG20-TECHS/G21.html" title="Technique G21 des WCAG 2.0" aria-label="Technique G21 des WCAG 2.0"><abbr>G21</abbr></a>.

### Images

Les images comportant une information ont une alternative textuelle appropriée. Les documents scannés sont convertis correctement en texte par reconnaissance optique des caractères (<abbr>OCR</abbr>). Les images décoratives sont cachées.

Voir <a hreflang="en" href="https://www.w3.org/TR/WCAG20-TECHS/PDF1.html" title="Technique PDF1 des WCAG 2.0" aria-label="Technique PDF1 des WCAG 2.0"><abbr>PDF1</abbr></a>, <a hreflang="en" href="https://www.w3.org/TR/WCAG20-TECHS/PDF4.html" title="Technique PDF4 des WCAG 2.0" aria-label="Technique PDF4 des WCAG 2.0"><abbr>PDF4</abbr></a>, <a hreflang="en" href="https://www.w3.org/TR/WCAG20-TECHS/PDF7.html" title="Technique PDF7 des WCAG 2.0" aria-label="Technique PDF7 des WCAG 2.0"><abbr>PDF7</abbr></a>.

### Tableaux

Un tableau de données doit être structuré par un «&nbsp;tag&nbsp;» (balise) `table` contenant au moins une ligne. Les en-têtes de tableaux sont utilisées de manière appropriée. Toutes les lignes contiennent le même nombre de cellules. Les cellules fusionnées indiquent de manière appropriée une fusion par ligne ou colonne (attribut `rowSpan` ou `colSpan`). 

Voir <a hreflang="en" href="https://www.w3.org/TR/WCAG20-TECHS/PDF6.html" title="Technique PDF6 des WCAG 2.0" aria-label="Technique PDF6 des WCAG 2.0"><abbr>PDF6</abbr></a>.

### Liens

Les intitulés de liens sont explicites, ou les liens possèdent une alternative explicite.

Voir <a hreflang="en" href="https://www.w3.org/TR/WCAG20-TECHS/PDF11.html" title="Technique PDF11 des WCAG 2.0" aria-label="Technique PDF11 des WCAG 2.0"><abbr>PDF11</abbr></a>, <a hreflang="en" href="https://www.w3.org/TR/WCAG20-TECHS/PDF13.html" title="Technique PDF13 des WCAG 2.0" aria-label="Technique PDF13 des WCAG 2.0"><abbr>PDF13</abbr></a>.

### Listes

Les listes utilisent les «&nbsp;tags&nbsp;» (balises) appropriés (tag liste `L`,  tag item de liste `LI`, tag label de l’item de liste `Lbl` - par exemple le numéro de l’item, tag contenu de l’item de liste `LBody`).

Voir <a hreflang="en" href="https://www.w3.org/TR/WCAG20-TECHS/PDF21.html" title="Technique PDF21 des WCAG 2.0" aria-label="Technique PDF21 des WCAG 2.0"><abbr>PDF21</abbr></a>, section 14.8.4.3.3 de la <a href="http://www.adobe.com/devnet/pdf/pdf_reference.html">spécification <abbr>PDF</abbr></a>.

### Formulaires

Les champs de formulaire ont un nom, un rôle, une valeur, et un état (si approprié). Visuellement, les labels sont correctement positionnés en relation avec le champ. Les champs obligatoires et les formats attendus sont indiqués. Les champs sont accessibles et modifiables au clavier. Les formulaires pouvant être soumis possèdent un bouton de soumission.

Voir <a hreflang="en" href="https://www.w3.org/TR/WCAG20-TECHS/PDF5.html" title="Technique PDF5 des WCAG 2.0" aria-label="Technique PDF5 des WCAG 2.0"><abbr>PDF5</abbr></a>, <a hreflang="en" href="https://www.w3.org/TR/WCAG20-TECHS/PDF10.html" title="Technique PDF10 des WCAG 2.0" aria-label="Technique PDF10 des WCAG 2.0"><abbr>PDF10</abbr></a>, <a hreflang="en" href="https://www.w3.org/TR/WCAG20-TECHS/PDF12.html" title="Technique PDF12 des WCAG 2.0" aria-label="Technique PDF12 des WCAG 2.0"><abbr>PDF12</abbr></a>, <a hreflang="en" href="https://www.w3.org/TR/WCAG20-TECHS/PDF15.html" title="Technique PDF15 des WCAG 2.0" aria-label="Technique PDF15 des WCAG 2.0"><abbr>PDF15</abbr></a>, <a hreflang="en" href="https://www.w3.org/TR/WCAG20-TECHS/PDF22.html" title="Technique PDF22 des WCAG 2.0" aria-label="Technique PDF22 des WCAG 2.0"><abbr>PDF22</abbr></a>.

### Couleurs

Les couleurs ne sont pas le seul moyen utilisé pour communiquer l’information.

Le contraste entre le texte et l’arrière-plan est suffisant&nbsp;:

-	4.5:1 pour du texte de taille normale.
-	3:1 pour du texte de grande taille.

## Tester l’accessibilité d’un document <abbr>PDF</abbr>

Installer <a href="http://www.access-for-all.ch/en/pdf-lab/pdf-accessibility-checker-pac.html"><abbr>PDF</abbr> Accessibility Checker (<abbr>PAC 2</abbr>)</a>. 

Ce logiciel permet entre autres&nbsp;:

- d’exécuter des tests automatiques sur un document <abbr>PDF</abbr> et détecter des erreurs d’accessibilité,
<figure>
<img class="center" src="/others/images/pac1.png" alt="copie d’écran des résultats des tests automatiques dans PAC 2"/>
<figcaption>Résultats des tests automatiques</figcaption>
</figure>
<figure>
<img class="center" src="/others/images/pac2.png" alt="copie d’écran du détail d’une erreur dans PAC 2"/>
<figcaption>Détail d’une erreur d’accessibilité détectée automatiquement</figcaption>
</figure>
- de pré-visualiser le document tel qu’il sera restitué par les outils d’assistance, afin de vérifier l’ordre de lecture et l’utilisation pertinente de la sémantique (titre, paragraphe…),
<div><img class="center" src="/others/images/pac3.png" alt=""/></div>
- d’accéder à une vue détaillée des informations accessibles à un outil d’assistance.
<div><img class="center" src="/others/images/pac4.png" alt=""/></div>