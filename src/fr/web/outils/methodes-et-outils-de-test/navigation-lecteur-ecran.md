---
title: "Navigation à l’aide d’un lecteur d’écran"
---

# Navigation à l’aide d’un lecteur d’écran

Un lecteur d’écran (appelé aussi revue d’écran) est un logiciel de synthèse vocale utilisé par les personnes malvoyantes et non-voyantes. Il permet à l’utilisateur d’interagir avec l’ordinateur et d’écouter ce qui est affiché sous forme textuelle (le plus souvent) à l’écran.
Il existe plusieurs lecteurs d’écran, les plus connus sont&nbsp;:
- [<abbr>NVDA</abbr>](http://nvda-fr.org/)&nbsp;: gratuit disponible pour Windows.
- [<abbr>JAWS</abbr>](http://www.freedomscientific.com/Downloads/JAWS)&nbsp;: payant disponible pour Windows. En mode démonstration, vous pouvez l’utiliser 40 min, après quoi il faudra redémarrer votre ordinateur pour l’utiliser à nouveau.
- [VoiceOver](http://www.apple.com/fr/accessibility/osx/voiceover/)&nbsp;: disponible pour Mac. Il est gratuit et intégré directement au système MacOS.

## Prise en main de <abbr>NVDA</abbr>

<abbr>NVDA</abbr> est un lecteur d’écran gratuit disponible pour Windows.

### Installation

Télécharger le fichier d’installation de <abbr>NVDA</abbr> sur le [site officiel](http://nvda-fr.org/).

La voix par défaut n’est pas de très bonne qualité mais elle est très réactive. Ce n’est pas indispensable, mais le téléchargement d’une voix de meilleure qualité est conseillé comme celle d’[Hortense](https://www.nvda-fr.org/voix/MSSpeech_TTS_fr-FR_Hortense.msi). Il suffit ensuite de se rendre dans les préférences de <abbr>NVDA</abbr> pour modifier les paramètres vocaux.

### Configuration

Au premier démarrage, <abbr>NVDA</abbr> est configuré pour vocaliser tout ce que survole le pointeur de la souris. Ce mode est utilisé par certaines personnes malvoyantes qui ont des difficultés à lire les textes affichés à l’écran par exemple. Il est conseillé de désactiver cette option si vous utilisez <abbr>NVDA</abbr> pour faire des tests d’accessibilité sur vos pages. 
Pour désactiver ce mode de navigation, faites un clic droit sur l’icône de <abbr>NVDA</abbr> dans la barre Windows à côté de l’heure. Puis aller dans *Préférences &gt; Paramètres* de la souris et désactiver la case «&nbsp;Activer le suivi de la souris&nbsp;».

Enfin, il est conseillé de modifier le mode de lecture par défaut. Pour cela, se positionner sur une page web et utiliser le raccourci clavier suivant <kbd>INS+v</kbd> pour désactiver la «&nbsp;disposition telle qu’à l’écran&nbsp;» puis enregistrer cette configuration par défaut à l’aide du raccourci <kbd>INS+Ctrl+c</kbd>. 

### Navigation dans les pages Web

Voici les principaux raccourcis utiles pour tester la navigation au sein d’une page web à l’aide de <abbr>NVDA</abbr>&nbsp;:
- <kbd>Ctrl+Alt+N</kbd> pour démarrer <abbr>NVDA</abbr>.
- <kbd>INS+Q</kbd> pour quitter <abbr>NVDA</abbr>.
- <kbd>flèche haut</kbd> et <kbd>flèche bas</kbd> pour avancer ou reculer dans la lecture de la page.
- <kbd>flèche droite</kbd> et <kbd>flèche gauche</kbd> pour avancer ou reculer d’un caractère
- <kbd>Ctrl+Home</kbd> pour se déplacer en haut de la page.
- <kbd>Ctrl+End</kbd> pour se déplacer en bas de la page.
- <kbd>INS+F7</kbd> pour afficher la liste des titres et la liste des liens.
- <kbd>Ctrl</kbd> pour faire taire <abbr>NVDA</abbr>.
- <kbd>INS+T</kbd> pour faire lire le titre de la page.
- <kbd>H</kbd> et <kbd>maj+H</kbd> pour passer au titre suivant ou au titre précédent (balises de titres `H1` à `H6`).
- <kbd>B</kbd> et <kbd>maj+B</kbd> pour passer d’un bouton à l’autre.
- <kbd>C</kbd> et <kbd>maj+C</kbd> pour passer d’une liste déroulante à une autre (<i lang="en">Combobox</i>).
- <kbd>D</kbd> et <kbd>maj+D</kbd> pour naviguer parmi les <i lang="en">landmarks</i> <abbr>ARIA</abbr>.
- <kbd>E</kbd> et <kbd>maj+E</kbd> pour naviguer parmi les champs de texte.
- <kbd>F</kbd> et <kbd>maj+F</kbd> pour naviguer parmi les formulaires.
- <kbd>G</kbd> et <kbd>maj+G</kbd> pour naviguer parmi les images (<i lang="en">Graphics</i>).
- <kbd>I</kbd> et <kbd>maj+I</kbd> pour naviguer parmi les éléments d’une liste <abbr>HTML</abbr>.
- <kbd>K</kbd> et <kbd>maj+K</kbd> pour naviguer parmi les liens.
- <kbd>L</kbd> et <kbd>maj+L</kbd> pour naviguer parmi les listes <abbr>HTML</abbr>.
- <kbd>M</kbd> et <kbd>maj+M</kbd> pour naviguer parmi les <i lang="en">frames</i> et <i lang="en">iframes</i>.
- <kbd>O</kbd> et <kbd>maj+M</kbd> pour naviguer parmi les objets intégrés (Flash). Appuyer sur <kbd>INS+espace</kbd> pour commencer l’interaction. <kbd>Echap</kbd> pour terminer l’interaction.
- <kbd>Q</kbd> et <kbd>maj+Q</kbd> pour naviguer parmi les citations (`blockquote`).
- <kbd>R</kbd> et <kbd>maj+R</kbd> pour naviguer parmi les boutons radio.
- <kbd>T</kbd> et <kbd>maj+T</kbd> pour naviguer parmi les tableaux (`table`).
- <kbd>X</kbd> et <kbd>maj+X</kbd> pour naviguer parmi les cases à cocher.
- <kbd>Barre espace</kbd> pour cocher ou décocher une case à cocher.
- <kbd>INS+maj+S</kbd> permet de mettre en veille <abbr>NVDA</abbr> uniquement dans l’application en cours.

À noter également que <abbr>NVDA</abbr> dispose d’une visionneuse de parole (*Outils &gt; Visionneuse de parole*), celle-ci permet d’afficher tout ce qui est vocalisé.

## Prise en main de Jaws

Jaws est un lecteur d’écran payant très utilisé, disponible pour Windows. Il est à utiliser en priorité avec Internet Explorer. En mode démonstration, vous pouvez l’utiliser 40 min, après quoi il faudra redémarrer votre ordinateur pour l’utiliser à nouveau.

### Installation 

Vous pouvez télécharger Jaws directement depuis [le site de l’éditeur Freedom Scientific](http://www.freedomscientific.com/Downloads/JAWS).

### Navigation dans les pages Web

Voici les principaux raccourcis utiles pour tester la navigation au sein d’une page web à l’aide de Jaws&nbsp;:
- <kbd>flèche haut</kbd> et <kbd>flèche bas</kbd> pour avancer ou reculer dans la lecture de la page.
- <kbd>INS+T</kbd> pour faire lire le titre de la page.
- <kbd>INS+F5</kbd> pour afficher la liste des champs de formulaire.
- <kbd>INS+F6</kbd> pour afficher la liste des titres de la page.
- <kbd>INS+F7</kbd> pour afficher la liste des liens.
- <kbd>Barre espace</kbd> pour cocher ou décocher une case à cocher.
- <kbd>Ctrl</kbd> pour faire taire Jaws.

## Prise en main de VoiceOver (sous Mac)

VoiceOver est le lecteur d’écran disponible sur Mac. Celui-ci nécessite aucune installation puisqu’il est intégré directement au système.  
Pour pouvez activer VoiceOver depuis les *Préférences systèmes &gt; Accessibilité*. Ou directement en utilisant le raccourci <kbd>Commande+F5</kbd>.

### Navigation dans les pages web

Au démarrage de VoiceOver, celui-ci propose un guide interactif permettant d’apprendre les principaux raccourcis clavier. Il est recommandé de le parcourir.  
Voici néanmoins les raccourcis principaux&nbsp;:
- <kbd>Ctrl+Option+flèche droite</kbd> et <kbd>Ctrl+Option+flèche gauche</kbd> pour avancer ou reculer dans la lecture de la page.
- <kbd>Ctrl+Option+U</kbd> pour accéder à la liste des titres, liens, champs de formulaires… (utiliser les flèches gauche et droite pour naviguer entre les différentes listes). 
- <kbd>Ctrl</kbd> pour faire taire VoiceOver.
- <kbd>Ctrl+Option</kbd> <!-- MISSING SOMETHING HERE? (sd) -->

## Prise en main des lecteurs d'écran sous mobile
Pour tester un site web sur mobile : 
- <a href="../../../mobile/android/talkback/">Guide d’utilisation de TalkBack (sous Android)</a>
- <a href="../../../mobile/ios/voiceover/">Guide d’utilisation de VoiceOver (sous iOS)</a>
