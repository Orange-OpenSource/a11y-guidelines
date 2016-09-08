# Navigation à l'aide d'un lecteur d'écran

<script>$(document).ready(function () {
    setBreadcrumb([
        {"label":"Outils de test", "url": "./methodes-outils.html"},
        {"label":"Navigation à l'aide d'un lecteur d'écran"}]);
});</script>

<span data-menuitem="methodes-outils"></span>

Un lecteur d'écran (appelé aussi revue d'écran) est un logiciel de synthèse vocale utilisé par les personnes malvoyantes et non-voyantes. Il permet à l'utilisateur d'interagir avec l'ordinateur et d'écouter ce qui est affiché sous forme textuelle (le plus souvent) à l'écran.
Il existe plusieurs lecteurs d'écran, les plus connus sont :
- [NVDA](http://nvda-fr.org/) : gratuit disponible pour Windows.
- [Jaws](http://www.freedomscientific.com/Downloads/JAWS) : payant disponible pour Windows. En mode démonstration, vous pouvez l'utiliser 40 min, après quoi il faudra redémarrer votre ordinateur pour l'utiliser à nouveau.
- [Voiceover](http://www.apple.com/fr/accessibility/osx/voiceover/) : disponible pour mac. Il est est gratuit et intégré directement au système MacOS.

## Prise en main de NVDA

NVDA est un lecteur d'écran gratuit disponible pour Windows.

### Installation

Télécharger le fichier d'installation de NVDA sur le [site officiel](http://nvda-fr.org/).

La voix par défaut n'est pas de très bonne qualité mais elle est très réactive. Ce n'est pas indispensable, mais le téléchargement d'une voix de meilleure qualité est conseillé comme celle d'[Hortense](http://www.nvda-fr.org/voix.php). Il suffit ensuite de se rendre dans les préférences de NVDA pour modifier les paramètres vocaux.

### Configuration

Au premier démarrage, NVDA est configuré pour vocaliser tout ce que survol le pointeur de la souris. Ce mode est utilisé par certaines personnes malvoyantes qui ont des difficultés à lire les textes affichés à l'écran par exemple. Il est conseillé de désactiver cette option si vous utilisez NVDA pour faire des tests d'accessibilité sur vos pages. 
Pour désactiver ce mode de navigation, faites un clic droit sur l'icone de NVDA dans la barre windows à côté de l'heure. Puis aller dans *préférences >> paramètres* de la souris et désactiver la case "activer le suivi de la souris".

Enfin, il est conseillé de modifier le mode de lecture par défaut. Pour cela, se positionner sur une page web et utiliser le raccourci clavier suivant `INS+v` pour désactiver la "disposition telle qu'à l'écran" puis enregistrer cette configuration par défaut à l'aide du raccourci `INS+Ctrl+c`. 

### Navigation dans les pages Web

Voici les principaux raccourcis utiles pour tester la navigation au sein d'une page web à l'aide de NVDA :
- `flèche haut` et `flèche bas` pour avancer ou reculer dans la lecture de la page.
- `flèche droite` et `flèche gauche` pour avancer ou reculer d'un caractère
- `Ctrl+Home` pour se déplacer en haut de la page.
- `Ctrl+End` pour se déplacer en bas de la page.
- `INS+F7` pour afficher la liste des titres et la liste des liens.
- `Ctrl` pour faire taire NVDA.
- `INS+T` pour faire lire le titre de la page.
- `H` et `maj+H` pour passer au titre suivant ou au titre précédent (balises de titres `H1` à `H6`).
- `B` et `maj+B` pour passer d'un bouton à l'autre.
- `C` et `maj+C` pour passer d'une liste déroulante à une autre (Combobox).
- `D` et `maj+D` pour naviguer parmis les landmark ARIA.
- `E` et `maj+E` pour naviguer parmis les champs de texte.
- `F` et `maj+F` pour naviguer parmis les formulaires.
- `G` et `maj+G` pour naviguer parmis les images (Graphics).
- `I` et `maj+I` pour naviguer parmis les éléments d'une liste HTML.
- `K` et `maj+K` pour naviguer parmis les liens.
- `L` et `maj+L` pour naviguer parmis les listes HTML.
- `M` et `maj+M` pour naviguer parmis les frames et iframes.
- `O` et `maj+M` pour naviguer parmis les objets intégrés (flash). Appuyer sur INS+espace pour commencer l'interraction. Echap pour terminer l'interraction.
- `Q` et `maj+Q` pour naviguer parmis les citations (blockquote).
- `R` et `maj+R` pour naviguer parmis les boutons radio.
- `T` et `maj+T` pour naviguer parmis les tableaux (table).
- `X` et `maj+X` pour naviguer parmis les cases à cocher.
- `Barre espace` pour cocher ou décocher une case à cocher.
- `INS+maj+S` permet de mettre en veille NVDA uniquement dans l'application en cours.
- `INS+Q` pour quitter NVDA.

A noter également que NVDA dispose d'une visionneuse de parole (*outils >> visionneuse de parole*), celle-ci permet d'afficher tout ce qui est vocalisé.

## Prise en main de Jaws

Jaws est un lecteur d'écran payant très utilisé, disponible pour Windows. Il est à utiliser en priorité avec Internet Explorer. En mode démonstration, vous pouvez l'utiliser 40 min, après quoi il faudra redémarrer votre ordinateur pour l'utiliser à nouveau.

### Installation 

Vous pouvez télécharger Jaws directement depuis [le site de l'éditeur Freedom Scientific](http://www.freedomscientific.com/Downloads/JAWS).

### Navigation dans les pages Web

Voici les principaux raccourcis utiles pour tester la navigation au sein d'une page web à l'aide de Jaws :
- `flèche haut` et `flèche bas` pour avancer ou reculer dans la lecture de la page.
- `INS + T` pour faire lire le titre de la page.
- `INS + F5` pour afficher la liste des champs de formulaire.
- `INS + F6` pour afficher la liste des titres de la page.
- `INS + F7` pour afficher la liste des liens.
- `Barre espace` pour cocher ou décocher une case à cocher.
- `Ctrl` pour faire taire Jaws.

## Prise en main de Voiceover

Voiceover est le lecteur d'écran disponible sur Mac. Celui-ci nécessite aucune installation puisqu'il est intégré directement au système.  
Pour pouvez activer voiceover depuis les préférences systèmes >> accessibilité. Ou directement en utilisant le raccourci `Commande + F5`.

### Navigation dans les pages web

Au démarrage de voiceover, celui-ci propose un guide interactif permettant d'apprendre les principaux raccourcis clavier. Il est recommandé de le parcourir.  
Voici néanmoins les raccourcis principaux :
- `Ctrl + Option + flèche droite` et `Ctrl + Option + flèche gauche` pour avancer ou reculer dans la lecture de la page.
- `Ctrl + Option + U` pour accéder à la liste des titres, liens, champs de formulaires ... (utiliser les flèches gauche et droite pour naviguer entre les différentes listes). 
- `Ctrl` pour faire taire Voiceover.
- `Ctrl + Option`
<!--  This file is part of a11y-guidelines | Our vision of mobile & web accessibility guidelines and best practices, with valid/invalid examples.
 Copyright (C) 2016  Orange SA
 See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). -->