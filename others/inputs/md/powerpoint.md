# Créer des documents PowerPoint accessibles
<script>$(document).ready(function () {
    setBreadcrumb([{"label":"PowerPoint accessible"}]);
});</script>

<style>h3 {font-size: 1rem;}</style>

## Introduction
Produire des documents PowerPoint accessibles demande quelques efforts. Heureusement, PowerPoint est doté d’un outil permettant de vérifier l’accessibilité.
Celui-ci identifie les principales erreurs et propose des solutions pour y remédier.

Ceci étant dit, même après avoir corrigé les erreurs, nous nous sommes aperçus que certains éléments (SmartArt, tableaux ...) n’étaient pas toujours correctement vocalisés par les lecteurs d’écran et notamment par JAWS 17.
C’est pourquoi lorsque votre présentation est terminée, nous vous conseillons de l’exporter en PDF avant de la diffuser. 
En effet, l’option d’export intégrée à PowerPoint permet d’améliorer la restitution avec les outils d’assistance et supprime également les animations, sources de difficultés pour les personnes malvoyantes.

## Recommandations

Vous trouverez ci-dessous un résumé des recommandations à respecter pour produire des présentations PowerPoint accessibles. 
Pour plus de détails, n’hésitez pas à consulter <a href="https://disic.github.io/guides-documents_bureautiques_accessibles/html/">le site de la <abbr title="direction interministérielle des systèmes d’information et de communication">DISIC</abbr></a> qui propose des guides pour la rédaction de documents accessibles.

### 1. Utiliser les masques de diapositive
Pour garantir une bonne restitution de votre présentation par les outils d’assistance, veiller à bien utiliser les masques de diapositive. En effet, toute zone de texte, les titres... ajoutés à la main ne sera pas vocalisée par les lecteurs d’écran.

### 2. Donner des titres aux diapositives
Chaque diapositive doit posséder un titre unique. Celui-ci doit être renseigné dans la zone&nbsp;: «&nbsp;Cliquer pour ajouter un titre&nbsp;». Si les titres sont renseignés correctement, il sera aisé pour tous les utilisateurs de naviguer à l’intérieur de la présentation et de mieux appréhender le contenu des diapositives.

### 3. Renseigner une alternative textuelle sur les images
Si l’image apporte de l’information il faut lui associer un texte de remplacement (champ description uniquement). Si l’image au contraire est purement décorative, il n’y a rien à faire. Sans texte de remplacement, celle-ci sera ignorée par les outils d’assistance.

### 4. Vérifier l’ordre de lecture des éléments
Pour les utilisateurs qui naviguent à l’aide du clavier (touche TAB), il est important de vérifier l’ordre de lecture des éléments depuis le volet de sélection (attention ordre inversé, dernier élément dans la liste est lu en premier).

### 5. Rendre plus accessibles les tableaux
Les tableaux de données doivent rester simples. Éviter de fusionner des cellules, d’insérer des images (elles ne seront pas correctement restituées). Ne pas laisser de cellules vides ou sans contenu. 
Ne pas hésiter à insérer un titre, une légende voir une description sous forme de texte à l’intérieur de la diapositive.  

À noter que PowerPoint prévoit la possibilité d’ajouter une alternative textuelle aux tableaux. Par contre, contrairement aux images l’alternative sur les tableaux ne semble pas toujours vocalisée par les outils d’assistance.

### 6. S’assurer que la couleur n’est pas le seul moyen utilisé pour communiquer l’information
Ne pas véhiculer l’information que par la couleur. Ceci est important, notamment, pour les daltoniens, les malvoyants et les aveugles.

### 7. Assurer un contraste suffisant 
Le niveau de contraste entre la couleur du texte et celle de l’arrière-plan doit être suffisant.

### 8. Définir la langue
Sélectionner la langue du document (menu : Fichier > Options > Langue).
Préciser les mots ou groupes de mots qui sont dans une langue étrangère (Menu : Révision > Langue > Définir la langue de vérification)

### 9. Utiliser le vérificateur intégré
PowerPoint intègre un vérificateur d’accessibilité. Celui-ci permet d’identifier les contenus susceptibles de poser des difficultés.

## Ressources externes

- [Créer des documents bureautiques accessibles](https://disic.github.io/guides-documents_bureautiques_accessibles/html/), <abbr title="direction interministérielle des systèmes d’information et de communication">DISIC</abbr> (français).
- [Accessibilité PowerPoint](http://webaim.org/techniques/PowerPoint/), WebAIM (anglais).

&nbsp;
<!--  This file is part of a11y-guidelines | Our vision of mobile & web accessibility guidelines and best practices, with valid/invalid examples.
 Copyright (C) 2016  Orange SA
 See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). -->