# Créer des documents Word accessibles
<script>$(document).ready(function () {
    setBreadcrumb([{"label":"Word accessible"}]);
});</script>

<style>h3 {font-size: 1rem;}</style>

## Introduction
Des documents Word accessibles sont la garantie que les documents peuvent être lus par tous les utilisateurs. Créer des documents Word accessibles demande de respecter les recommandations suivantes. Cela permet également de produire des documents <abbr>PDF</abbr> accessibles grâce à la fonctionnalité d’export <abbr>PDF</abbr> intégrée à Word. 

## Recommandations

Vous trouverez ci-dessous un résumé des recommandations à respecter. Pour plus de détails, n’hésitez pas à consulter <a href="https://disic.github.io/guides-documents_bureautiques_accessibles/html/">le site de la <abbr title="direction interministérielle du numérique et du système d’information et de communication">DINSIC</abbr></a>.

### 1. Utiliser les styles «&nbsp;Titre&nbsp;» pour les titres et sous-titres
Les titres et sous-titres doivent utiliser les styles «&nbsp;Titre&nbsp;» (Titre 1, Titre 2, etc.) pour structurer le contenu du document et permettre d’y accéder directement.

### 2. Utiliser le style «&nbsp;Normal&nbsp;» pour les textes
Le style «&nbsp;Normal&nbsp;» doit être attribué à tous les textes des paragraphes (style par défaut).

### 3. Utiliser des styles dédiés pour mettre en évidence certains contenus
Utiliser les styles prédéfinis pour mettre en évidence certains contenus (citations, légendes, etc.) plutôt qu’utiliser les outils de formatage de caractères.

### 4. Ne pas insérer de lignes vides
Les espacements entre lignes doivent être crées à l’aide des options du groupe Paragraphe, option Espacement qui permet de définir l’espace avant et après un paragraphe. 
Les sauts de page doivent être créés à l’aide des «&nbsp;Sauts&nbsp;» (Insertion&nbsp;> Saut de page, page vierge).

### 5. Utiliser les listes à puces
Les listes doivent être réalisées en utilisant l’option «&nbsp;Liste à puces&nbsp;» ou «&nbsp;Liste numérotée&nbsp;» et non en utilisant des tirets dans le texte.

### 6. Utiliser les notes de bas de page
Les options «&nbsp;notes de bas de page&nbsp;» et «&nbsp;notes de fin&nbsp;» permettent d’insérer des notes dans votre document.

### 7. Numéroter vos pages
L’option «&nbsp;Numéro de page&nbsp;» permet de se repérer dans le document.

### 8. Utiliser la mise en page «&nbsp;Colonnes&nbsp;»  pour distribuer le texte
L’option «&nbsp;Colonnes&nbsp;» de l’onglet Mise en page (et non des tableaux) doit être utilisée pour créer une mise en page sous forme de colonnes.

### 9. Définir le point d’ancrage des objets insérés
Lors de l’insertion d’objets (image, forme, SmartArt, etc.), il est nécessaire de définir un point d’ancrage&nbsp;: dans les options d’habillage du texte, choisir l’option «&nbsp;Aligné sur le texte&nbsp;» ou «&nbsp;Haut et bas&nbsp;».

### 10. Éviter les zones de texte
Celles-ci ne sont pas toujours correctement restituées. Les textes peuvent être mis en valeur en ajoutant des bordures à un paragraphe.

### 11. S’assurer que la couleur n’est pas le seul moyen utilisé pour communiquer l’information
Une information donnée par une couleur doit aussi être donnée par un autre moyen comme la forme, la position, la taille…

### 12. Assurer un contraste suffisant
Le niveau de contraste entre la couleur du texte et celle de l’arrière-plan doit être suffisant&nbsp;:
- 4.5:1 pour du texte de taille normale.
- 3:1 pour du texte de grande taille.

Le contraste peut être vérifié à l’aide de l’outil [Colour Contrast Analyzer](https://www.paciellogroup.com/resources/contrastanalyser/).

### 13. Définir la Langue
La langue doit être définie dans le menu&nbsp;: Fichier&nbsp;> Options&nbsp;> Langue.  
Les mots ou groupes de mots qui sont dans une langue étrangère doivent être précisés (menu&nbsp;: Révision&nbsp;> Langue&nbsp;> Définir la langue de vérification).

### 14. Renseigner un texte de remplacement sur les images
Si l’image apporte de l’information, il faut lui associer un texte de remplacement décrivant le contenu (clic droit, Format de l’image&nbsp;> Texte de remplacement&nbsp;> champ Description).   
Si l’image est purement décorative, le champ Description du texte de remplacement doit être laissé vide.

### 15. Faire des tableaux simples
Les tableaux de données doivent rester simples. Éviter de fusionner des cellules, d’insérer des images (elles ne seront pas lues comme des éléments du tableau mais comme des éléments indépendants qui seront lus avant ou après le tableau – selon l’ordre de lecture prévu)&nbsp;; ne pas laisser de cellules vides. 

### 16. Utiliser le vérificateur intégré
Word intègre un vérificateur d’accessibilité (menu&nbsp;: Fichier&nbsp;> Vérifier la présence de problèmes&nbsp;> Vérifier l’accessibilité). Celui-ci liste les contenus susceptibles de poser des difficultés et les erreurs automatiquement détectées. Cet outil est à utiliser car il est d’une grande aide&nbsp;; cependant il ne dispense pas de vérifier et d’appliquer à la main l’ensemble des recommandations ci-dessus. 

### 17. Exporter le document au format <abbr>PDF</abbr>
Pour exporter en <abbr>PDF</abbr> il suffit d’aller dans le menu&nbsp;: Fichier&nbsp;> Enregistrer sous. Choisissez un nom et sélectionnez le type de fichier <abbr>PDF</abbr>.  
À vérifier la première fois&nbsp;: dans les options d’export, la case à cocher «&nbsp;Balises de structure de document pour l’accessibilité&nbsp;» doit être cochée.

A noter, qu'avec Word pour Office 2010, les documents PDF générés peuvent souffrir de problèmes d'accessibilité (notamment au niveau de la vocalisation des images). Ces problèmes ont été corrigés dans les versions ultérieures de Microsoft Office.

## Ressources externes

- [Créer des documents bureautiques accessibles](https://disic.github.io/guides-documents_bureautiques_accessibles/html/), <abbr title="direction interministérielle du numérique et du système d’information et de communication">DINSIC</abbr> (français).
- [Accessibilité Word](http://webaim.org/techniques/word/), WebAIM (anglais).

&nbsp;
<!--  This file is part of a11y-guidelines | Our vision of mobile & web accessibility guidelines and best practices, with valid/invalid examples.
 Copyright (C) 2016  Orange SA
 See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). -->