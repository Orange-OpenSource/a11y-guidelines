# Créer des documents PowerPoint accessibles
<script>$(document).ready(function () {
    setBreadcrumb([{"label":"PowerPoint accessible"}]);
});</script>

<style>h3 {font-size: 1rem;}</style>

## Introduction
Produire des documents PowerPoint accessibles demande de suivre quelques recommandations. Heureusement, PowerPoint est doté d’un outil permettant de vérifier l’accessibilité.
Celui-ci identifie les principales erreurs et propose des solutions pour y remédier.

Ceci étant dit, même après avoir corrigé les erreurs, nous nous sommes aperçus que certains éléments (SmartArt, tableaux ...) n’étaient pas toujours correctement vocalisés par les lecteurs d’écran.
C’est pourquoi lorsque votre présentation est terminée, nous vous conseillons de l’exporter en PDF avant de la diffuser. 
En effet, l’option d’export intégrée à PowerPoint permet d’améliorer la restitution avec les outils d’assistance et supprime également les animations, sources de difficultés pour les personnes malvoyantes.

## Recommandations

Vous trouverez ci-dessous un résumé des recommandations à respecter pour produire des présentations PowerPoint accessibles (version 2013). 
Pour plus de détails, n’hésitez pas à consulter <a href="https://disic.github.io/guides-documents_bureautiques_accessibles/html/">le site de la <abbr title="direction interministérielle du numérique et du système d’information et de communication">DINSIC</abbr></a> qui propose des guides.

### 1. Utiliser les masques de diapositive
Les présentations doivent être créées en utilisant les masques de diapositive (menu&nbsp;: Affichage > Masque des diapositives). Ensuite utiliser les cases à cocher « titre », « pieds de page » et le menu « insérer un espace réservé ».

### 2. Vérifier l’ordre de lecture des éléments
L’ordre de lecture doit être vérifié depuis le volet de sélection (menu Accueil > Organiser > Volet de sélection). Attention&nbsp;: le dernier élément dans la liste est lu en premier par les lecteurs d’écran&nbsp;; l’ordre doit donc être indiqué de bas en haut dès la définition des masques de diapositives.

### 3. Donner des titres uniques aux diapositives
Chaque diapositive doit posséder un titre unique. Celui-ci doit être renseigné dans la zone&nbsp;: «&nbsp;Cliquer pour ajouter un titre&nbsp;».

### 4. Renseigner un texte de remplacement sur les images
Si l’image apporte de l’information, il faut lui associer un texte de remplacement décrivant le contenu (clic droit, format de l’image, texte de remplacement, champ description).   
Si l’image est purement décorative, le champ description du texte de remplacement doit être vide.

### 5. Faire des tableaux simples
Les tableaux de données doivent rester simples. Éviter de fusionner des cellules, d’insérer des images (elles ne seront pas lues comme des éléments du tableau mais comme des éléments indépendants qui seront lus avant ou après le tableau – selon l’ordre de lecture prévu)&nbsp;; Ne pas laisser de cellules vides. 

### 6. Utiliser des SmartArt plutôt que des assemblages de textes et formes spécifiques
Les SmartArt permettent d’intégrer des images et des textes qui sont vocalisés dans le bon ordre. Tous les SmartArt ne sont pas encore correctement vocalisés&nbsp;: il est possible d’ajouter un texte alternatif (format de l’objet, texte de remplacement description). 

### 7. Renseigner un texte de remplacement aux graphiques
Le contenu des graphiques doit être décrit dans le texte de remplacement du graphique (format de l’objet, texte de remplacement description).

### 8. S’assurer que la couleur n’est pas le seul moyen utilisé pour communiquer l’information
Une information donnée par une couleur doit aussi être donnée par un autre moyen comme la forme, la position, la taille…

### 9. Assurer un contraste suffisant
Le niveau de contraste entre la couleur du texte et celle de l’arrière-plan doit être suffisant&nbsp;:
- 4.5:1 pour du texte de taille normale.
- 3:1 pour du texte de grande taille.

Celui-ci peut être vérifié à l'aide de l’outil [Colour Contrast Analyzer](https://www.paciellogroup.com/resources/contrastanalyser/).

### 10. Définir la langue
Sélectionner la langue du document (menu&nbsp;: Fichier > Options > Langue).  
Préciser les mots ou groupes de mots qui sont dans une langue étrangère (menu&nbsp;: Révision > Langue > Définir la langue de vérification).

### 11. Utiliser le vérificateur intégré
PowerPoint intègre un vérificateur d’accessibilité (menu&nbsp;: Fichier > Vérifier la présence de problèmes > Vérifier l’accessibilité). Celui-ci liste les contenus susceptibles de poser des difficultés. 

### 12. Exporter la présentation en document PDF
Pour exporter en PDF il suffit d'aller dans le menu&nbsp;: Fichier > Enregistrer sous. Choisissez un nom et sélectionner le type de fichier PDF.

## Ressources externes

- [Créer des documents bureautiques accessibles](https://disic.github.io/guides-documents_bureautiques_accessibles/html/), <abbr title="direction interministérielle du numérique et du système d’information et de communication">DINSIC</abbr> (français).
- [Accessibilité PowerPoint](http://webaim.org/techniques/PowerPoint/), WebAIM (anglais).

&nbsp;
<!--  This file is part of a11y-guidelines | Our vision of mobile & web accessibility guidelines and best practices, with valid/invalid examples.
 Copyright (C) 2016  Orange SA
 See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). -->