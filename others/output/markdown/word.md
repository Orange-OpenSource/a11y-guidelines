# Créer des documents Word accessibles
<script>$(document).ready(function () {
    setBreadcrumb([{"label":"Word accessible"}]);
});</script>

<style>h3 {font-size: 1rem;}</style>

## Introduction
Produire des documents Word accessibles, c’est la garantie que vos documents puissent être consultés par tous les utilisateurs. Créer des documents Word accessibles ne demande pas beaucoup d’efforts et permet également de produire des documents PDF accessibles grâce à la fonctionnalité d’export PDF intégrée à Word.

## Recommandations

Vous trouverez ci-dessous un résumé des recommandations à respecter.
Pour plus de détails, n’hésitez pas à consulter <a href="https://disic.github.io/guides-documents_bureautiques_accessibles/html/">le site de la <abbr title="direction interministérielle des systèmes d’information et de communication">DISIC</abbr></a> qui propose des guides pour la rédaction de documents accessibles.

### 1. Définir des titres
Pour garantir une bonne restitution de votre présentation par les outils d’assistance, veiller à sélectionner un style «&nbsp;Titre&nbsp;» (Titre 1, Titre 2, etc.) pour tous vos titres et sous-titres pour mettre en place une hiérarchie cohérente, logique et reflettant le contenu.

### 2. Définir les paragraphes
Le texte des paragraphes doit être identifiés à l’aide du style «&nbsp;Normal&nbsp;» (style par défaut).

### 3. Ne pas insérer de lignes vides
Plusieurs lignes vides successives peuvent être perçues comme la fin du document pour un utilsiateur de synthèse vocale. Utiliser les options d’espacement pour modifier l’espace avant et après un paragraphe. Utiliser les «&nbsp;sauts&nbsp;» (saut de page, page vierge) pour reprendre l’écriture sur la page suivante ou insérer une page vierge.

### 4. Utiliser les listes à puces
Ne pas réaliser de listes en utilisant des tirets dans le texte mais utiliser l’option liste à puces ou liste numérotée de Word pour identifier correctement les listes.

### 5. Utiliser les notes de bas de page
Pour insérer des notes dans votre texte, utiliser les options «&nbsp;notes de bas de page&nbsp;» et «&nbsp;notes de fin&nbsp;» de document. Celles-ci seront ainsi correctement restituées.

### 6. Numéroter vos pages
La numérotation des pages permet de se repérer dans un document. Utiliser l’option «&nbsp;Numéro de page&nbsp;» intégrée à Word.

### 7. Définir des colonnes pour la mise en page
Ne pas utiliser de tableau pour créer une mise en page sous forme de colonnes mais préférer l’option «&nbsp;colonnes&nbsp;» de l’onglet mise en page.

### 8. Éviter les objets flottants
Lors de l’insertion d’objets (image, forme, smart art, etc.), préférer leur définir un point d’ancrage. Dans les options d’habillage du texte, choisir l’option "Aligné sur le texte" ou "Haut et bas".

### 9. Éviter les zones de texte
Celles-ci ne sont pas toujours correctement restituées. Vous pouvez réaliser un encadré en ajoutant des bordures à un paragraphe.

### 10. S’assurer que la couleur n’est pas le seul moyen utilisé pour communiquer l’information
Ne pas véhiculer l’information que par la couleur. Ceci est important, notamment, pour les daltoniens, les malvoyants et les aveugles.

### 11. Assurer un contraste suffisant 
Le niveau de contraste entre la couleur du texte et celle de l’arrière-plan doit être suffisant.

### 12. Utiliser les styles
Utiliser les styles prédéfinis pour mettre en évidence certains contenus (citations, légendes, etc.) plutôt qu’utiliser les outils de formatage de caractères.

### 13. Définir la Langue 
Sélectionner la langue du document (menu&nbsp;: Fichier > Options > Langue).
Préciser les mots ou groupes de mots qui sont dans une langue étrangère (Menu&nbsp;: Révision > Langue > Définir la langue de vérification)

### 14. Renseigner une alternative textuelle sur les images
Si l’image apporte de l’information il faut lui associer un texte de remplacement (champ description uniquement). Si l’image au contraire est purement décorative, il n’y a rien à faire. Sans texte de remplacement celle-ci sera ignorée par les outils d’assistance.

### 15. Rendre les tableaux plus accessibles
Les tableaux de données doivent rester simples. Éviter de fusionner des cellules, d’insérer des images (elles ne seront pas correctement restituées). Ne pas laisser de cellules vides ou sans contenu. 
Ne pas hésiter à insérer une légende si nécessaire (Menu&nbsp;: Référence > Insérer une légende).

À noter que Word prévoit la possibilité d’ajouter une alternative textuelle aux tableaux. En revanche, contrairement aux images l’alternative sur les tableaux ne semble pas toujours vocalisée par les outils d’assistance.

### 16. Utiliser le vérificateur intégré
Word intègre un vérificateur d’accessibilité. Celui-ci permet d’identifier les contenus susceptibles de poser des difficultés.

## Ressources externes

- [Créer des documents bureautiques accessibles](https://disic.github.io/guides-documents_bureautiques_accessibles/html/), <abbr title="direction interministérielle des systèmes d’information et de communication">DISIC</abbr> (français).
- [Accessibilité Word](http://webaim.org/techniques/word/), WebAIM (anglais).

&nbsp;
<!--  This file is part of a11y-guidelines | Our vision of mobile & web accessibility guidelines and best practices, with valid/invalid examples.
 Copyright (C) 2016  Orange SA
 See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). -->