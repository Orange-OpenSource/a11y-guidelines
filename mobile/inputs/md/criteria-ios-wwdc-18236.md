# WWDC 2018 : Utiliser une voix synthétisée avec AVSpeechSynthesizer

<script>$(document).ready(function () {
    setBreadcrumb([{"label":"iOS", "url": "./criteria-ios.html"},
                   {"label":"WWDC", "url": "./criteria-ios-wwdc.html"},
                   {"label":"2018 - AVSpeechSynthesizer"}
	]);
    addSubMenu([
        {"label":"Critères de conception","url":"criteria-ios-conception.html"}, 
        {"label":"Guide pour les développeurs","url":"criteria-ios-dev.html"},
        {"label":"VoiceOver","url":"lecteur-ecran-voiceover.html"},
        {"label":"WWDC","url":"criteria-ios-wwdc.html"},
        {"label":"Tests","url":"criteria-ios-test.html"}
    ]);
});</script>

<span data-menuitem="criteria-ios"></span>

Cette présentation visualisable sur le **site développeur officiel d'<span lang="en">Apple</span>** ([session 236](https://developer.apple.com/videos/play/wwdc2018/236/)) a pour but de mettre en avant les éléments essentiels qui permettent à une application iOS d'**utiliser une voix synthétisée en s'appuyant sur <span lang="en">AVSpeechSynthesizer</span>**.
</br><img style="max-width: 466px; height: auto;" alt="" src="./images/iOSdev/wwdc18-236.png" />
</br></br>Les thèmes abordés ainsi que leur référence temporelle au sein de la vidéo sont décrits ci-dessous :

- [Cas d'usage](#Uses) (00:48)
- [Par où commencer ?](#Basics) (02:03)
- [AVSpeechSynthesizerDelegate](#AVSpeechSynthesizerDelegate) (03:20)
- [Démonstration](#Demo) (04:11)
- [Choix de la voix synthétisée](#TheRightVoice) (04:31)
- [Débit vocal](#SpeechRate) (05:32)
- [Hauteur tonale et volume](#PitchAndVolume) (06:15)
- [Phonétique](#IPA) (06:54)

Par la suite, le fait de cliquer sur un titre permet d'ouvrir la vidéo de présentation <span lang="en">Apple</span> directement au moment indiqué.
</br></br>
<a name="Uses"></a>
### [Cas d'usage (00:48)](https://developer.apple.com/videos/play/wwdc2018/236/?time=48)
Les différentes utilisations possibles de cette fonctionnalité sont décrites dans cette partie.
</br></br>
<a name="Basics"></a>
### [Par où commencer ? (02:03)](https://developer.apple.com/videos/play/wwdc2018/236/?time=123)
Pour utiliser une voix synthétisée, il est primordial de **créer** tout d'abord **une instance `AVSpeechSynthesizer`** en s'assurant de son existence programmatique jusqu'à la fin de la vocalisation souhaitée.
</br><img style="max-width: 400px; height: auto;" alt="" src="./images/iOSdev/wwdc18-236-Basics_1.png" />
</br>Il faut ensuite **décrire sous forme de texte ce qui doit être vocalisé** et fournir le résultat obtenu à l'instance précédente.
</br><img style="max-width: 500px; height: auto;" alt="" src="./images/iOSdev/wwdc18-236-Basics_2.png" />
</br>Dans ce cas, une session `AVAUdioSession` est automatiquement activée et peut être utilisée conjointement avec la vocalisation créée.
</br><img style="max-width: 850px; height: auto;" alt="" src="./images/iOSdev/wwdc18-236-Basics_3.png" />
</br>Cette session devra être explicitement désactivée à la disparition de l'instance `AVSpeechSynthesizer`.
</br></br>
<a name="AVSpeechSynthesizerDelegate"></a>
### [AVSpeechSynthesizerDelegate (03:20)](https://developer.apple.com/videos/play/wwdc2018/236/?time=200)
Ce protocole comprend un **ensemble de méthodes optionnelles permettant de gérer certains événements du synthétiseur vocal** :

- Pauses et reprises.
- Débuts et fins des vocalisations `AVSpeechUtterance `.
- Position de l'élément vocalisé au sein du texte auquel il appartient.
</br><img style="max-width: 900px; height: auto;" alt="" src="./images/iOSdev/wwdc18-236-AVSpeechSynthesizerDelegate.png" />
</br></br>
<a name="Demo"></a>
### [Démonstration (04:11)](https://developer.apple.com/videos/play/wwdc2018/236/?time=251)
Exemple très simple d'une vocalisation synthétisée s'appuyant sur les méthodes du protocole `AVSpeechSynthesizerDelegate`.
</br><img style="max-width: 230px; height: auto;" alt="" src="./images/iOSdev/wwdc18-236-Demo.png" />
</br></br>
<a name="TheRightVoice"></a>
### [Choix de la voix synthétisée (04:31)](https://developer.apple.com/videos/play/wwdc2018/236/?time=271)
La voix synthétisée par **défaut** est celle du **langage défini dans les préférences du terminal**.
</br><img style="max-width: 1000px; height: auto;" alt="" src="./images/iOSdev/wwdc18-236-TheRightVoice_1.png" />
</br>Il est toutefois possible de définir cette dernière en spécifiant le langage désiré ou en utilisant un identifiant propre à une voix téléchargée. 
</br><img style="max-width: 800px; height: auto;" alt="" src="./images/iOSdev/wwdc18-236-TheRightVoice_2.png" />
</br></br>
<a name="SpeechRate"></a>
### [Débit vocal (05:32)](https://developer.apple.com/videos/play/wwdc2018/236/?time=332)
La vitesse du débit vocal peut être modifiée avec des coefficients multiplicateurs plus ou moins importants selon la valeur programmatique implémentée.
</br><img style="max-width: 530px; height: auto;" alt="" src="./images/iOSdev/wwdc18-236-SpeechRate.png" />
</br></br>
<a name="PitchAndVolume"></a>
### [Hauteur tonale et volume (06:15)](https://developer.apple.com/videos/play/wwdc2018/236/?time=375)
Ces deux propriétés vocales sont facilement personnalisables en notant bien que l'augmentation du volume de la voix ne modifie absolument pas le volume système.
</br><img style="max-width: 720px; height: auto;" alt="" src="./images/iOSdev/wwdc18-236-PitchAndVolume.png" />
</br></br>
<a name="IPA"></a>
### [Phonétique (06:54)](https://developer.apple.com/videos/play/wwdc2018/236/?time=414)
La prononciation de certains mots pouvant parfois prêter à confusion, il est très pratique d'utiliser la phonétique pour s'assurer de la vocalisation appropriée.
</br>Côté développement, on s'appuie sur les **<span lang="en">Attributed Strings</span>** pour utiliser l'alphabet phonétique international *(<abbr>IPA</abbr>)*, ces éléments pouvant aussi servir à spécifier une langue différente uniquement pour une partie de la phrase à vocaliser par exemple.
</br><img style="max-width: 800px; height: auto;" alt="" src="./images/iOSdev/wwdc18-236-IPA.png" />
</br></br>


<!--  This file is part of a11y-guidelines | Our vision of mobile & web accessibility guidelines and best practices, with valid/invalid examples.
 Copyright (C) 2016  Orange SA
 See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). -->