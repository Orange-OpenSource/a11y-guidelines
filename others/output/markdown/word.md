# Créer des documents Word accessibles
<script>$(document).ready(function () {
    setBreadcrumb([{"label":"Word accessible"}]);
});</script>

<style>h3 {font-size: 1rem;}</style>

## Introduction
Des documents Word accessibles sont la garantie que les documents peuvent être lus par tous les utilisateurs. Créer des documents Word accessibles demande de respecter les recommandations suivantes. Cela permet également de produire des documents PDF accessibles grâce à la fonctionnalité d’export PDF intégrée à Word. 

## Recommandations

Vous trouverez ci-dessous un résumé des recommandations à respecter. Pour plus de détails, n’hésitez pas à consulter <a href="https://disic.github.io/guides-documents_bureautiques_accessibles/html/">le site de la <abbr title="direction interministérielle du numérique et du système d’information et de communication">DINSIC</abbr></a>.

### 1. Utiliser les styles «&nbsp;Titre&nbsp;» pour les titres et sous-titres
Les titres et sous-titres doivent utiliser les styles «&nbsp;Titre&nbsp;» (Titre 1, Titre 2, etc.) pour permettre d’être identifiés comme titres par les personnes utilisant un lecteur d’écran.

### 2. Utiliser le style «&nbsp;Normal&nbsp;» pour les textes
Le style «&nbsp;Normal&nbsp;» doit être attribué à tous les textes des paragraphes (style par défaut).

### 3. Utiliser des styles dédiés pour mettre en évidence certains contenus
Utiliser les styles prédéfinis pour mettre en évidence certains contenus (citations, légendes, etc.) plutôt qu’utiliser les outils de formatage de caractères.

### 4. Ne pas insérer de lignes vides
Les espacements entre lignes doivent être crées à l’aide des options du groupe Paragraphe, option espacement qui permet de définir l’espace avant et après un paragraphe. 
Les sauts de page doivent être créés à l’aide des «&nbsp;sauts&nbsp;» (Insertion > Saut de page, page vierge).
Plusieurs lignes vides successives peuvent être perçues comme la fin du document pour un utilisateur de synthèse vocale.

### 5. Utiliser les listes à puces
Les listes doivent être réalisées en utilisant l’option liste à puces ou liste numérotée et non en utilisant des tirets dans le texte.

### 6. Utiliser les notes de bas de page
Pour insérer des notes dans votre texte, utiliser les options «&nbsp;notes de bas de page&nbsp;» et «&nbsp;notes de fin&nbsp;» de documents.

### 7. Numéroter vos pages
Utiliser l’option «&nbsp;Numéro de page&nbsp;» pour permettre de se repérer dans le document.

### 8. Utiliser la mise en page «&nbsp;colonnes&nbsp;»  pour distribuer le texte
Utiliser l’option «&nbsp;colonnes&nbsp;» de l’onglet mise en page et non des tableaux pour créer une mise en page sous forme de colonnes.

### 9. Définir le point d’ancrage des objets insérés
Lors de l’insertion d’objets (image, forme, smart art, etc.), il est nécessaire de définir un point d’ancrage : dans les options d’habillage du texte, choisir l’option «&nbsp;Aligné sur le texte&nbsp;» ou «&nbsp;Haut et bas&nbsp;».

### 10. Éviter les zones de texte
Celles-ci ne sont pas toujours correctement restituées. Les textes peuvent être mis en valeur en ajoutant des bordures à un paragraphe.

### 11. S’assurer que la couleur n’est pas le seul moyen utilisé pour communiquer l’information
Une information donnée par une couleur doit aussi être donnée par un autre moyen comme la forme, la position, la taille…

### 12. Assurer un contraste suffisant
Le niveau de contraste entre la couleur du texte et celle de l’arrière-plan doit être suffisant&nbsp;:
- 4.5:1 pour du texte de taille normale.
- 3:1 pour du texte de grande taille.

### 13. Définir la Langue
Sélectionner la langue du document (menu&nbsp;: Fichier > Options > Langue).  
Préciser les mots ou groupes de mots qui sont dans une langue étrangère (menu&nbsp;: Révision > Langue > Définir la langue de vérification).

### 14. Renseigner un texte de remplacement sur les images
Si l’image apporte de l’information, il faut lui associer un texte de remplacement décrivant le contenu (clic droit, Format de l’image > Texte de remplacement > champ Description).   
Si l’image est purement décorative, le champ Description du texte de remplacement doit être vide.

### 15. Faire des tableaux simples
Les tableaux de données doivent rester simples. Éviter de fusionner des cellules, d’insérer des images (elles ne seront pas lues comme des éléments du tableau mais comme des éléments indépendants qui seront lus avant ou après le tableau – selon l’ordre de lecture prévu)&nbsp;; ne pas laisser de cellules vides. 

### 16. Utiliser le vérificateur intégré
Word intègre un vérificateur d’accessibilité (fichier, vérifier la présence de problèmes, vérifier l’accessibilité). Celui-ci liste les contenus susceptibles de poser des difficultés et les erreurs automatiquement détectées. Cet outil est à utiliser car il est d'une grande aide, cependant, il ne dispense pas de vérifier et d'appliquer à la main l'ensemble des recommandations ci-dessus. 

### 17. Exporter le document au format PDF
Pour exporter en PDF il suffit d'aller dans le menu&nbsp;: Fichier > Enregistrer sous. Choisissez un nom et sélectionner le type de fichier PDF.  
A vérifier la première fois : dans les options d'export, la case à cocher «&nbsp;Balises de structure de document pour l'accessiblité&nbsp;» doit être cochée.

## Ressources externes

- [Créer des documents bureautiques accessibles](https://disic.github.io/guides-documents_bureautiques_accessibles/html/), <abbr title="direction interministérielle des systèmes d’information et de communication">DISIC</abbr> (français).
- [Accessibilité Word](http://webaim.org/techniques/word/), WebAIM (anglais).

&nbsp;
<!--  This file is part of a11y-guidelines | Our vision of mobile & web accessibility guidelines and best practices, with valid/invalid examples.
 Copyright (C) 2016  Orange SA
 See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). -->