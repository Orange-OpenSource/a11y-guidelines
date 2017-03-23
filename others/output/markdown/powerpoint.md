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
Pour plus de détails, n’hésitez pas à consulter <a href="https://disic.github.io/guides-documents_bureautiques_accessibles/html/">le site de la <abbr title="direction interministérielle du numérique et du système d’information et de communication">DINSIC</abbr></a> qui propose des guides pour la rédaction de documents accessibles.

### 1. Utiliser les masques de diapositive
Les présentations doivent être créeés en utilisant les masques de diapositive, masques créés à l’aide des options « insérer un espace réservé », cases à cocher « titre » ou « pieds de page ». 

### 2. Vérifier l’ordre de lecture des éléments
Pour les utilisateurs qui naviguent à l’aide du clavier (touche TAB), il est important de vérifier l’ordre de lecture des éléments depuis le volet de sélection (accueil, organiser, volet de sélection). Attention : le dernier élément dans la liste est lu en premier par les lecteurs d’écran ; l’ordre doit donc être indiqué de bas en haut dès la définition des masques de dispositives.

### 3. Donner des titres uniques aux diapositives
Chaque diapositive doit posséder un titre unique. Celui-ci doit être renseigné dans la zone&nbsp;: «&nbsp;Cliquer pour ajouter un titre&nbsp;».

### 4. Renseigner un texte de remplacement sur les images
Si l’image apporte de l’information il faut lui associer un texte de remplacement décrivant le contenu (clic droit, format de l’image, texte de remplacement, champ description).   
Si l’image est purement décorative, le champ description du texte de remplacement doit être vide.

### 5. Faire des tableaux simples
Les tableaux de données doivent rester simples. Éviter de fusionner des cellules, d’insérer des images (elles ne seront pas lues comme des éléments du tableau mais comme des éléments indépendants qui seront lus avant ou après le tableau – selon l’ordre de lecture prévu) ; Ne pas laisser de cellules vides. 

### 6. Utiliser des SmartArt plutôt que des assemblages de textes et formes spécifiques
Les SmartArt permettent d’intégrer des images et des textes qui sont vocalisés dans le bon ordre. Tous les SmartArt ne sont pas encore correctement vocalisés : il est possible d’ajouter un texte alternatif (format de l’objet, texte de remplacement description). 

### 7. Renseigner un texte de remplacement aux graphiques
Le contenu des graphiques doit être décrit dans le texte de remplacement du graphique (format de l’objet, texte de remplacement descritption). 

### 8. S’assurer que la couleur n’est pas le seul moyen utilisé pour communiquer l’information
Une information donnée par une couleur doit aussi être donnée par un autre moyen comme la forme, la position, la taille…

### 9. Assurer un contraste suffisant
Le niveau de contraste entre la couleur du texte et celle de l’arrière-plan doit être suffisant :
- 4.5:1 pour du texte de taille normale
- 3:1 pour du texte de grande taille (18pt minimum ou 14pt minimum pour du texte gras).

Celui-ci peut être vérifié avec l’outil [Colour Contrast Analyzer](https://www.paciellogroup.com/resources/contrastanalyser/).

### 10. Définir la langue
Sélectionner la langue du document (menu : Fichier > Options > Langue).  
Préciser les mots ou groupes de mots qui sont dans une langue étrangère (Menu : Révision > Langue > Définir la langue de vérification).

### 11. Utiliser le vérificateur intégré
PowerPoint intègre un vérificateur d’accessibilité (fichier, vérifier la présence de problèmes, vérifier l’accessibilité). Celui-ci liste les contenus susceptibles de poser des difficultés et les erreurs automatiquement détectées. Cet outil est à utiliser car il est d'une grande aide, cependant, il ne dispense pas de vérifier et d'appliquer à la main l'ensemble des recommandations ci-dessus. 

## Ressources externes

- [Créer des documents bureautiques accessibles](https://disic.github.io/guides-documents_bureautiques_accessibles/html/), <abbr title="direction interministérielle du numérique et du système d’information et de communication">DINSIC</abbr> (français).
- [Accessibilité PowerPoint](http://webaim.org/techniques/PowerPoint/), WebAIM (anglais).

&nbsp;
<!--  This file is part of a11y-guidelines | Our vision of mobile & web accessibility guidelines and best practices, with valid/invalid examples.
 Copyright (C) 2016  Orange SA
 See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). -->