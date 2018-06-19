# WWDC 2017 : les nouveautés en accessibilité

<script>$(document).ready(function () {
    setBreadcrumb([{"label":"Les critères incontournables sous iOS", "url": "./criteria-ios.html"},
                   {"label":"WWDC", "url": "./criteria-ios-wwdc.html"},
                   {"label":"2017 - Les nouveautés en accessibilité"}
	]);
    addSubMenu([
        {"label":"Pour la conception","url":"criteria-ios-conception.html"}, 
        {"label":"Pour le développement","url":"criteria-ios-dev.html"},
        {"label":"WWDC","url":"criteria-ios-wwdc.html"}
    ]);
});</script>

<span data-menuitem="criteria-ios-wwdc"></span>

Cette présentation visualisable sur le **site développeur officiel d'Apple** ([session 215](https://developer.apple.com/videos/play/wwdc2017/215/)) a pour but de mettre en avant les principales nouveautés iOS 11 en terme d'accessibilité avec une importance notable pour <span lang="en">VoiceOver</span>.
</br><img style="max-width: 200px; height: auto;" alt="" src="./images/iOSdev/wwdc17-logo.png" />
<img style="max-width: 700px; height: auto;" alt="" src="./images/iOSdev/wwdc17-215.png" />
</br></br>Les thèmes abordés ainsi que leur référence temporelle au sein de la vidéo sont décrits ci-dessous :
- [Détection de texte dans une image](#ImageTextDetection) (07:07)
- [Amélioration de la description d'une photo](#ImprovedPhotoDescription) (08:01)
- [Ecrire des infos pour SIRI](#TypeToSIRI) (11:37)
- [Accessibility Inspector : cas pratique](#AccessibilityInspector) (15:35)
- [Découvrir UIAccessibilityProtocol](#UIAccessibilityProtocol) (21:14)
- [Attributed Accessibility Properties](#AttributedProperties) (26:07)
- [Accessibility Container Type](#AccessibilityContainer) (27:20)
- [Les actions personnalisées](#CustomActions) (35:43)
- [Action par défaut](#DefaultActivation) (37:38)
- [Les valeurs continûment ajustables](#AdjustableValues) (38:22)
- [Sélection en défilement continu](#PassThrough) (39:40)
- [Défilement personnalisé](#CustomScrolling) (41:02)
- [Drag & Drop](#DragAndDrop) (42:54)

</br>Au cours de cette présentation, de nombreuses solutions sont proposées par le biais d'une application d'exemple pour répondre aux questions que se posent les développeurs face aux problèmes rencontrés en accessibilité avec <span lang="en">VoiceOver</span> (regarder l'[application d'exemple](https://developer.apple.com/videos/play/wwdc2017/215/?time=1007) avant de lire la suite) :
- Rendre un élément (in)accessible [(31:10)](https://developer.apple.com/videos/play/wwdc2017/215/?time=1870)
- Remplir des propriétés `label` et `value` [(29:59)](https://developer.apple.com/videos/play/wwdc2017/215/?time=1799).
- Rassembler plusieurs éléments pour n'en former qu'un seul [(31:50)](https://developer.apple.com/videos/play/wwdc2017/215/?time=1910).

Par la suite, le fait de cliquer sur un titre permet d'ouvrir la vidéo de présentation <span lang="en">Apple</span> directement au moment indiqué.

<a name="ImageTextDetection"></a>
### [Détection de texte dans une image (07:07)](https://developer.apple.com/videos/play/wwdc2017/215/?time=427)
Il est désormais possible de **déterminer si du texte est incrusté dans une image**.
</br><img style="max-width: 1000px; height: auto;" alt="" src="./images/iOSdev/wwdc17-215-ImageTextDetection.png" />
</br>Cette détection très basique est obtenue en réalisant un **tap avec 3 doigts**.
</br>Elle permet ainsi de vocaliser cette inscription à une personne qui ne peut initialement pas la détecter.

<a name="ImprovedPhotoDescription"></a>
### [Amélioration de la description d'une photo (08:01)](https://developer.apple.com/videos/play/wwdc2017/215/?time=481)
La **vocalisation de la description d'une photo** est une nouvelle fonctionnalité de Voice Over et est obtenue par un simple <span lang="en">tap</span> à l'aide de 3 doigts.
</br><img style="max-width: 1000px; height: auto;" alt="" src="./images/iOSdev/wwdc17-215-ImprovedPhotoDescription.png" />
</br>Une détection très simple du contexte, des visages et de leurs expressions est donc exposée à l'utilisateur pour qui ce type d'informations devient plus que jamais un lien fort avec son environnement.

<a name="TypeToSIRI"></a>
### [Ecrire des infos pour SIRI (11:37)](https://developer.apple.com/videos/play/wwdc2017/215/?time=697)
Nouveauté très utile pour les **personnes ne pouvant pas utiliser SIRI vocalement** ou désirant simplement **effectuer des requêtes de façon discrète**.
</br>Pour utiliser cette fonctionnalité, il faut se rendre dans la partie `Accessibilité` des `Réglages` pour rendre l'activation effective.
</br><img style="max-width: 600px; height: auto;" alt="" src="./images/iOSdev/wwdc17-215-TypeToSiri.png" />

<a name="AccessibilityInspector"></a>
### [Accessibility Inspector : cas pratique (15:35)](https://developer.apple.com/videos/play/wwdc2017/215/?time=935)
Dans cette partie, l'outil <span lang="en">Accessibility Inspector</span> de Xcode est utilisé pour une démonstration d'audit accessibilité d'une application.
</br>Des exemples sont fournis sans expliquer fondamentalement les notions propres à l'outil qui sont détaillées dans la session [407](https://developer.apple.com/videos/play/wwdc2016/407/) (2016).

<a name="UIAccessibilityProtocol"></a>
### [Découvrir UIAccessibilityProtocol (21:14)](https://developer.apple.com/videos/play/wwdc2017/215/?time=1274)
Petit rappel sur les fondements de `UIAccessibilityProtocol` qui vont être utilisés dans la suite de la présentation.
</br><img style="max-width: 450px; height: auto;" alt="" src="./images/iOSdev/wwdc17-215-UIAccessibilityProtocol.png" />

<a name="AttributedProperties"></a>
### [Attributed Accessibility Properties (26:07)](https://developer.apple.com/videos/play/wwdc2017/215/?time=1567)
iOS 11 permet de transformer les propriétés d'accessibilité `label`, `value` et `hint` de base en `NSAttributedString` de façon à pouvoir **agir sur la façon dont ils vont être vocalisés**.
</br><img style="max-width: 550px; height: auto;" alt="" src="./images/iOSdev/wwdc17-215-AttributedStrings.png" />
</br>Parmi les exemples fournis, on trouve la possibilité de vocaliser en langue étrangère un élément accessible bien particulier.
</br><img style="max-width: 600px; height: auto;" alt="" src="./images/iOSdev/wwdc17-215-AttributedStringsExample.png" />
</br>L'ensemble des clés utilisables se trouve sur la [documentation officielle Apple](https://developer.apple.com/documentation/uikit/accessibility/uiaccessibility/speech_attributes_for_attributed_strings).

<a name="AccessibilityContainer"></a>
### [Accessibility Container Type (27:20)](https://developer.apple.com/videos/play/wwdc2017/215/?time=1640)
Une définition de **conteneur typé** au niveau accessibilité est disponible en **iOS 11**.
</br><img style="max-width: 750px; height: auto;" alt="" src="./images/iOSdev/wwdc17-215-ContainerType.png" />
</br>La notion de conteneur existait déjà mais rien ne permettait à <span lang="en">VoiceOver</span> de savoir ce qu'était réellement ce conteneur.
</br>Ce nouveau typage va donc permettre à <span lang="en">VoiceOver</span> de faciliter et de mieux appréhender la façon dont l'utilisateur va pouvoir naviguer au sein de ce conteneur.

<a name="CustomActions"></a>
### [Les actions personnalisées (35:43)](https://developer.apple.com/videos/play/wwdc2017/215/?time=2143)
Il est possible de définir sur une vue un ensemble constitué de `accessibilityCustomAction` de façon à lui **attribuer différentes actions possibles**.
</br><img style="max-width: 600px; height: auto;" alt="" src="./images/iOSdev/wwdc17-215-CustomActions.png" />
</br>Dès que cette vue est sélectionnée avec <span lang="en">VoiceOver</span>, un **swipe vertical avec un doigt** permet de déterminer l'action de son choix.

<a name="DefaultActivation"></a>
### [Action par défaut (37:38)](https://developer.apple.com/videos/play/wwdc2017/215/?time=2258)
Afin de limiter ou de rendre plus faciles les manipulations à réaliser par les utilsateurs de <span lang="en">VoiceOver</span>, il est possible de déclencher des actions appropriées dès qu'un élément est activé par un double tap.
</br><img style="max-width: 750px; height: auto;" alt="" src="./images/iOSdev/wwdc17-215-DefaultAction.png" />


<a name="AdjustableValues"></a>
### [Les valeurs continûment ajustables (38:22)](https://developer.apple.com/videos/play/wwdc2017/215/?time=2302)
La **modification de valeur** pour des éléments tels que le `slider` ou le `picker` peut se faire de façon **très fluide** grâce à l'implémentation de deux fonctions :
</br><img style="max-width: 470px; height: auto;" alt="" src="./images/iOSdev/wwdc17-215-AdjustableValues.png" />
</br>Dès que la vue est sélectionnée avec <span lang="en">VoiceOver</span>, un **swipe vertical avec un doigt** permet d'augmenter (vers le haut) ou de diminuer (vers le bas) la valeur.
</br>La mise en place programmatique de ce type de fonctionnement est présentée dans la partie [développement](./criteria-ios-dev.html#valeurs-contin-ment-ajustables).

<a name="PassThrough"></a>
### [Sélection en défilement continu (39:40)](https://developer.apple.com/videos/play/wwdc2017/215/?time=2380)
L'application d'une **double pression d'un doigt accompagnée d'un maintien à l'issue** sur un défilement panoramique permet de déclencher la fonctionnalité <span lang="en">pass-through</span> de <span lang="en">VoiceOver</span>.
</br><img style="max-width: 400px; height: auto;" alt="" src="./images/iOSdev/wwdc17-215-PassThrough_1.png" />
</br>Cette fonctionnalité permet d'obtenir une sélection beaucoup plus précise de la valeur remontée.
</br>Il est donc possible de préciser à <span lang="en">VoiceOver</span> le focus de l'élément sélectionné grâce à l'attribut [accessibilityActivationPoint](./criteria-ios-dev.html#modifier-la-zone-de-focus-de-span-lang-en-voiceover-span-) de façon à indiquer finement à l'utilisateur où il se trouve au niveau du panoramique.
</br><img style="max-width: 500px; height: auto;" alt="" src="./images/iOSdev/wwdc17-215-PassThrough_2.png" />

<a name="CustomScrolling"></a>
### [Défilement personnalisé (41:02)](https://developer.apple.com/videos/play/wwdc2017/215/?time=2462)
Le défilement classique de pages proposé par <span lang="en">VoiceOver</span> se fait avec un <span lang="en">swipe</span> à l'aide de 3 doigts.
</br>Il est toutefois possible de personnaliser le résultat obtenu grâce à la méthode `accessibilityScroll` présente dans le protocole `UIAccessibilityAction`.
</br><img style="max-width: 750px; height: auto;" alt="" src="./images/iOSdev/wwdc17-215-CustomScrolling.png" />

<a name="DragAndDrop"></a>
### [Drag & Drop (42:54)](https://developer.apple.com/videos/play/wwdc2017/215/?time=2574)
Nouveauté iOS11, le <span lang="en">drag-and-drop</span> présenté en accessibilité ne décrit pas la nouvelle API mais rappelle les 2 principes primordiaux autour desquels s'appuie son fonctionnement : les <span lang="en">drag sources</span> et les <span lang="en">drop points</span>.
</br><img style="max-width: 750px; height: auto;" alt="" src="./images/iOSdev/wwdc17-215-DragAndDrop.png" />
</br>Leur utilisation est ensuite succinctement proposée par le biais d'un [exemple](https://developer.apple.com/videos/play/wwdc2017/215/?time=2729).

<!--  This file is part of a11y-guidelines | Our vision of mobile & web accessibility guidelines and best practices, with valid/invalid examples.
 Copyright (C) 2016  Orange SA
 See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). -->