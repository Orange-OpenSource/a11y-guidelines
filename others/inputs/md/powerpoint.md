# Créer des documents PowerPoint accessibles
<script>$(document).ready(function () {
    setBreadcrumb([{"label":"PowerPoint accessible"}]);
});</script>

<style>h3 {font-size: 1rem;}</style>

## Introduction
Produire des documents PowerPoint accessibles demande de suivre quelques recommandations. Heureusement, PowerPoint est doté d’un outil permettant de vérifier l’accessibilité.
Celui-ci identifie les principales erreurs et propose des solutions pour y remédier.

Ceci étant dit, même après avoir corrigé les erreurs, nous nous sommes aperçus que certains éléments (SmartArt, tableaux…) n’étaient pas toujours correctement vocalisés par les lecteurs d’écran.
C’est pourquoi lorsque votre présentation est terminée, nous vous conseillons de l’exporter en <abbr>PDF</abbr> avant de la diffuser. 
En effet, l’option d’export intégrée à PowerPoint permet d’améliorer la restitution avec les outils d’assistance et supprime également les animations, sources de difficultés pour les personnes malvoyantes.  

## Recommandations

Vous trouverez ci-dessous un résumé des recommandations à respecter pour produire des présentations PowerPoint accessibles. 
Pour plus de détails, n’hésitez pas à consulter les guides proposés sur <a href="https://disic.github.io/guides-documents_bureautiques_accessibles/html/">le site de la <abbr title="direction interministérielle du numérique et du système d’information et de communication">DINSIC</abbr></a>.

Nos tests ont été réalisé avec Office 2010 et les lecteurs d'écran Jaws 17 et <abbr>NVDA</abbr> 2017-1. Les recommandations ci-dessous découlent de ces tests.

### 1. Utiliser les masques de diapositive
Les présentations doivent être créées en utilisant les masques de diapositive (menu&nbsp;: Affichage&nbsp;> Masque des diapositives). Ensuite utiliser les cases à cocher «&nbsp;Titre&nbsp;», «&nbsp;Pieds de page&nbsp;» et le menu «&nbsp;Insérer un espace réservé&nbsp;».

### 2. Vérifier l’ordre de lecture des éléments
L’ordre de lecture doit être vérifié depuis le volet de sélection (menu Accueil&nbsp;> Organiser&nbsp;> Volet de sélection). Attention&nbsp;: le dernier élément dans la liste est lu en premier par les lecteurs d’écran&nbsp;; l’ordre doit donc être indiqué de bas en haut dès la définition des masques de diapositives.

### 3. Donner des titres uniques aux diapositives
Chaque diapositive doit posséder un titre unique. Celui-ci doit être renseigné dans la zone&nbsp;: «&nbsp;Cliquer pour ajouter un titre&nbsp;».

### 4. Renseigner un texte de remplacement sur les images
Si l’image apporte de l’information, il faut lui associer un texte de remplacement décrivant le contenu (clic droit, Format de l’image&nbsp;> Texte de remplacement&nbsp;> champ Description).   
Si l’image est purement décorative, le champ «&nbsp;Description du texte de remplacement&nbsp;» doit être vide.

### 5. Faire des tableaux simples
Les tableaux de données doivent rester simples. Éviter de fusionner des cellules, d’insérer des images (elles ne seront pas lues comme des éléments du tableau mais comme des éléments indépendants qui seront lus avant ou après le tableau – selon l’ordre de lecture prévu)&nbsp;; ne pas laisser de cellules vides. 

### 6. Utiliser des SmartArt plutôt que des assemblages de textes et formes spécifiques
Les SmartArt permettent d’intégrer des images et des textes qui sont vocalisés dans le bon ordre. Tous les SmartArt ne sont pas encore correctement vocalisés.

### 7. Renseigner un texte de remplacement aux graphiques
Le contenu des graphiques doit être décrit dans le texte de remplacement du graphique (Format de l’objet&nbsp;> Texte de remplacement&nbsp;> Description).

### 8. S’assurer que la couleur n’est pas le seul moyen utilisé pour communiquer l’information
Une information donnée par une couleur doit aussi être donnée par un autre moyen comme la forme, la position, la taille…

### 9. Assurer un contraste suffisant
Le niveau de contraste entre la couleur du texte et celle de l’arrière-plan doit être suffisant&nbsp;:
- 4.5:1 pour du texte de taille normale.
- 3:1 pour du texte de grande taille.

Le contraste peut être vérifié à l'aide de l’outil <a href="https://www.paciellogroup.com/resources/contrastanalyser/" hreflang="en" lang="en">Colour Contrast Analyzer</a>.

### 10. Définir la langue
Sélectionner la langue du document (menu&nbsp;: Fichier&nbsp;> Options&nbsp;> Langue).  
Préciser les mots ou groupes de mots qui sont dans une langue étrangère (menu&nbsp;: Révision&nbsp;> Langue&nbsp;> Définir la langue de vérification).

### 11. Utiliser le vérificateur intégré
PowerPoint intègre un vérificateur d’accessibilité (menu&nbsp;: Fichier&nbsp;> Vérifier la présence de problèmes&nbsp;> Vérifier l’accessibilité). Celui-ci liste les contenus susceptibles de poser des difficultés. 

### 12. Exporter la présentation en document <abbr>PDF</abbr>
Pour exporter en <abbr>PDF</abbr> il suffit d'aller dans le menu&nbsp;: Fichier&nbsp;> Enregistrer sous. Choisissez un nom et sélectionner le type de fichier <abbr>PDF</abbr>.  
A vérifier la première fois : dans les options d'export, la case à cocher «&nbsp;Balises de structure de document pour l'accessibilité&nbsp;» doit être cochée.

## Ressources externes

- [Créer des documents bureautiques accessibles](https://disic.github.io/guides-documents_bureautiques_accessibles/html/), <abbr title="direction interministérielle du numérique et du système d’information et de communication">DINSIC</abbr> (français).
- <a href="http://webaim.org/techniques/PowerPoint/" hreflang="en">Accessibilité PowerPoint, WebAIM</a> (anglais).

## Résultats des tests effectués
Nous avons testé le comportement des lecteurs d'écran <abbr>NVDA</abbr> (version 2017.1) et Jaws (version 17) avec un fichier <abbr>PDF</abbr> généré à l'aide de PowerPoint 2010.

### Tableaux
Les tableaux sont vocalisés correctement avec Jaws et <abbr>NVDA</abbr>.

### Tableaux avec textes de remplacement
<abbr>NVDA</abbr> : les tableaux restent vocalisés, les textes de remplacement sont ignorés.  
Jaws : les tableaux ne sont plus vocalisés, les textes de remplacement sont ignorés.

### SmartArt
Même comportement pour Jaws et <abbr>NVDA</abbr>, les textes des SmartArt sont vocalisés (pas toujours dans le bon ordre).

### SmartArt avec textes de remplacement
<abbr>NVDA</abbr> : comportement attendu, les textes de remplacement sont correctement vocalisés à la place du SmartArt.  
Jaws : les SmartArt ne sont plus vocalisés, les textes de remplacement sont ignorés.

### Graphiques
Même comportement pour Jaws et <abbr>NVDA</abbr>, les chiffres apparaissant dans les graphiques sont vocalisés.

### Graphiques avec textes de remplacement
Comportement attendu pour Jaws et <abbr>NVDA</abbr>, le texte de remplacement est vocalisé à la place du graphique.

<!--  This file is part of a11y-guidelines | Our vision of mobile & web accessibility guidelines and best practices, with valid/invalid examples.
 Copyright (C) 2016  Orange SA
 See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). -->