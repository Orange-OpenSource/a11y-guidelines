# WWDC 2018 : Fournir une expérience exceptionnelle en accessibilité

<script>$(document).ready(function () {
    setBreadcrumb([{"label":"Les critères incontournables sous iOS", "url": "./criteria-ios.html"},
                   {"label":"WWDC", "url": "./criteria-ios-wwdc.html"},
                   {"label":"2018 - Fournir une expérience exceptionnelle en accessibilité"}
	]);
    addSubMenu([
        {"label":"Pour la conception","url":"criteria-ios-conception.html"}, 
        {"label":"Pour le développement","url":"criteria-ios-dev.html"},
        {"label":"WWDC","url":"criteria-ios-wwdc.html"}
    ]);
});</script>

<span data-menuitem="criteria-ios-wwdc"></span>

Cette présentation visualisable sur le **site développeur officiel d'<span lang="en">Apple</span>** ([session 230](https://developer.apple.com/videos/play/wwdc2018/230/)) a pour but de mettre en avant les éléments essentiels qui permettent à une application de fournir une expérience utilisateur optimale en accessibilité visuelle.
</br><img style="max-width: 700px; height: auto;" alt="" src="./images/iOSdev/wwdc18-230.png" />
</br></br>Les thèmes abordés ainsi que leur référence temporelle au sein de la vidéo sont décrits ci-dessous :

- [Floutage et transparence](#TransparencyAndBlurring) (03:07)
- [Contraste](#Contrast) (04:38)
- [Grossissement](#Sizing) (07:04)
- [Mouvement](#Motion) (08:48)
- [UIAccessibilityElement](#UIAccessibilityElement) (21:03)
- [Les valeurs continûment ajustables](#AdjustableValues) (21:44)
- [Les actions personnalisées](#CustomActions) (23:49)
- [Élément au premier plan](#accessibilityViewIsModal) (25:02)
- [Notifications](#Notifications) (25:13)
- [Exemple](#Demo)
    - [Comment rendre un carrousel parfaitement interprétable par VoiceOver ?](#DemoSetCarousel) (25:53)
    - [Comment synchroniser la mise à jour de données avec l'élément du carrousel sélectioné ?](#DemoUpdateData) (30:53)
    - [Comment associer des actions à un regroupement d'éléments ?](#DemoCustomActions) (33:05)
    - [Comment éviter la sélection d'éléments derrière une 'Modal View' ?](#DemoModalView) (34:32)
    - [Rendu final de l'application avec VoiceOver optimisé](#DemoExceptionalVoiceOverExperience) (35:38)

Le dernier thème développe un exemple d'application particulièrement intéressant pour :
- Les développeurs qui souhaitent trouver des réponses détaillées aux problèmes d'implémentation avec VoiceOver.
- Celles et ceux qui souhaitent découvrir comment une application doit interagir avec VoiceOver pour que le parcours utilisateur soit optimal (voir '[Rendu final de l'application avec VoiceOVer optimisé](#DemoExceptionalVoiceOverExperience)').

Par la suite, le fait de cliquer sur un titre permet d'ouvrir la vidéo de présentation <span lang="en">Apple</span> directement au moment indiqué.
</br></br>
<a name="TransparencyAndBlurring"></a>
### [Floutage et transparence (03:07)](https://developer.apple.com/videos/play/wwdc2018/230/?time=187)
Depuis iOS 8, des classes telles que `UIBlurEffect` et `UIVisualEffectView` permettent de gérer parfaitement l'effet de flou d'une image.
</br>Cependant, cela peut entraîner des difficultés occulaires pour les personnes ayant des problèmes visuels.
</br>L'utilisateur peut alors atténuer très fortement ces effets néfastes en activant l'[option d'accessibilité](./criteria-ios-conception.html#options-d-accessibilit-) appropriée dans ses réglages.
</br><img style="max-width: 950px; height: auto;" alt="" src="./images/iOSdev/wwdc18-230-TransparencyAndBlurring_1.png" />
</br>Le résultat conduit à un fond d'écran beaucoup plus sombre voire uni dans certains cas.
</br><img style="max-width: 700px; height: auto;" alt="" src="./images/iOSdev/wwdc18-230-TransparencyAndBlurring_2.png" />
</br>Côté développement, il est possible de connaître la valeur de la propriété `isReduceTransparencyEnabled`.
</br><img style="max-width: 650px; height: auto;" alt="" src="./images/iOSdev/wwdc18-230-TransparencyAndBlurring_3.png" />

<a name="Contrast"></a>
### [Contraste (04:38)](https://developer.apple.com/videos/play/wwdc2018/230/?time=278)
Le contraste {couleur du contenu exposé / couleur du fond d'écran} est très important et repose beaucoup sur les propriétés de la police affichée détaillées dans la [partie conception de ce site](./criteria-ios-conception.html#couleurs).
</br>Il est possible d'augmenter nativement le contraste des couleurs en activant l'[option d'accessibilité](./criteria-ios-conception.html#options-d-accessibilit-) appropriée dans les réglages du terminal, pouvant ainsi favoriser un confort de lecture.
</br><img style="max-width: 600px; height: auto;" alt="" src="./images/iOSdev/wwdc18-230-Contrast_1.png" />
</br>Côté développement, le suivi de la modification de ce réglage se fait grâce à la valeur de `isDarkerSystemColorsEnabled`.
</br><img style="max-width: 650px; height: auto;" alt="" src="./images/iOSdev/wwdc18-230-Contrast_2.png" />

<a name="Sizing"></a>
### [Grossissement (07:04)](https://developer.apple.com/videos/play/wwdc2018/230/?time=424)
Les quelques points concernant le `Dynamic Type` sont largement expliqués dans la [section développement iOS](./criteria-ios-dev.html#taille-des-textes) et font référence à une [autre présentation](./criteria-ios-wwdc-17245.html) parfaitement détaillée dans la partie WWDC de ce site.
</br>Le simple fait de passer une police en gras peut nettement améliorer le rendu visuel pour certains utilisateurs sans avoir à en grossir démesurément la taille.
</br>Ici encore, les réglages du terminal permettent d'activer cette [option d'accessibilité](./criteria-ios-conception.html#options-d-accessibilit-).
</br><img style="max-width: 600px; height: auto;" alt="" src="./images/iOSdev/wwdc18-230-Sizing_1.png" />
</br>Côté développement, le suivi de la modification de ce réglage se fait grâce à la valeur de `isBoldTextEnabled`.
</br><img style="max-width: 600px; height: auto;" alt="" src="./images/iOSdev/wwdc18-230-Sizing_2.png" />

<a name="Motion"></a>
### [Mouvement (08:48)](https://developer.apple.com/videos/play/wwdc2018/230/?time=528)
Certaines animations peuvent entraîner des problèmes d'équilibre voire de nausées à certaines personnes.
</br>Les réglages utilisateurs permettent de réduire fortement tout type d'animations natives en activant l'[option d'accessibilité](./criteria-ios-conception.html#options-d-accessibilit-) appropriée.
</br><img style="max-width: 950px; height: auto;" alt="" src="./images/iOSdev/wwdc18-230-Motion_1.png" />
</br>Côté développement, le suivi de la modification de ce réglage se fait grâce à la valeur de `isReduceMotionEnabled` et permet d'adapter les effets de l'application aux souhaits de l'utilisateur s'ils ne sont pas automatiquement pris en compte.
</br><img style="max-width: 600px; height: auto;" alt="" src="./images/iOSdev/wwdc18-230-Motion_2.png" />

<a name="UIAccessibilityElement"></a>
### [UIAccessibilityElement (21:03)](https://developer.apple.com/videos/play/wwdc2018/230/?time=1263)
L'intérêt de cet élément ainsi que son implémentation sont expliqués et mis en situation au sein de l'application de démonstration.
</br><img style="max-width: 550px; height: auto;" alt="" src="./images/iOSdev/wwdc18-230-UIAccessibilityElement.png" />

<a name="AdjustableValues"></a>
### [Les valeurs continûment ajustables (21:44)](https://developer.apple.com/videos/play/wwdc2018/230/?time=1304)
Cette fonctionnalité implémentable par définition de `trait` spécifique est présentée ici de façon à **fluidifier la sélection d'éléments** dans une `CollectionView`.
</br><img style="max-width: 550px; height: auto;" alt="" src="./images/iOSdev/wwdc18-230-AdjustableValues.png" />
</br>Un aperçu différent de cette utilisation a déjà été développé dans une [autre vidéo détaillée](./criteria-ios-wwdc-17215.html#AdjustableValues) de la partie WWDC de ce site.
</br></br>
<a name="CustomActions"></a>
### [Les actions personnalisées (23:49)](https://developer.apple.com/videos/play/wwdc2018/230/?time=1429)
Sur une unique sélection, il est possible de **regrouper un ensemble d'actions** proposées sur différents éléments graphiques.
</br><img style="max-width: 700px; height: auto;" alt="" src="./images/iOSdev/wwdc18-230-CustomActions.png" />
</br>Les explications fournies ici sont aussi développées dans une [autre vidéo détaillée](./criteria-ios-wwdc-17215.html#CustomActions) de la partie WWDC de ce site.
</br></br>
<a name="accessibilityViewIsModal"></a>
### [Élément au premier plan (25:02)](https://developer.apple.com/videos/play/wwdc2018/230/?time=1502)
Lorsqu'une vue est simplement présentée comme étant "en haut" de la hiérarchie des vues, VoiceOver ne sait pas nativement qu'**il ne faut pas traiter les éléments présents en fond d'écran**.
</br>La solution consiste à modifier `accessibilityViewIsModal` de façon à ce que VoiceOver n'analyse que les éléments de la vue mise en avant.
</br><img style="max-width: 450px; height: auto;" alt="" src="./images/iOSdev/wwdc18-230-ModalView.png" />

<a name="Notifications"></a>
### [Notifications (25:13)](https://developer.apple.com/videos/play/wwdc2018/230/?time=1513)
Petit rappel pour **notifier les utilisateurs de modifications** sur l'écran.
</br><img style="max-width: 800px; height: auto;" alt="" src="./images/iOSdev/wwdc18-230-Notifications.png" />
</br>Des explications plus détaillées sur ce point sont fournies dans la [partie développeur de ce site](./criteria-ios-dev.html#informer-d-une-modification-sur-la-page).
</br></br>
<a name="Demo"></a>
### Exemple
Un exemple d'application est proposé pour répondre aux questions que se posent les développeurs face aux éventuels problèmes rencontrés dans la mise en oeuvre de l'accessibilité avec VoiceOver.
</br>La [présentation de l'exemple](https://developer.apple.com/videos/play/wwdc2018/230/?time=938) ainsi que le [rendu VoiceOver non optimisé](https://developer.apple.com/videos/play/wwdc2018/230/?time=1022) sont absolument à visionner afin de mieux comprendre la logique des solutions apportées par tous les éléments exposés précédemment.</br></br>
<a name="DemoSetCarousel"></a>
##### [Comment rendre un carrousel parfaitement interprétable par VoiceOver ? (25:53)](https://developer.apple.com/videos/play/wwdc2018/230/?time=1553)
- Création d'un élement accessible pour définir le carrousel. [(26:11)](https://developer.apple.com/videos/play/wwdc2018/230/?time=1571)
- Implémentations des propriétés `label` et `value`. [(26:43)](https://developer.apple.com/videos/play/wwdc2018/230/?time=1603)
- Spécification de `adjustableTrait` avec définitions de `increment` et `decrement`. [(26:58)](https://developer.apple.com/videos/play/wwdc2018/230/?time=1618)
- Création d'une fonction de défilement. [(27:14)](https://developer.apple.com/videos/play/wwdc2018/230/?time=1634)
- Ajouter l'élément du carrousel en tant qu'élément sélectionnable par VoiceOver. [(28:38)](https://developer.apple.com/videos/play/wwdc2018/230/?time=1718)
- Mise à jour de l'élément affiché en fonction de la sélection. [(29:51)](https://developer.apple.com/videos/play/wwdc2018/230/?time=1791)
- Notification de mise à jour d'écran dès qu'un nouvel élément du carrousel est sélectionné. [(30:14)](https://developer.apple.com/videos/play/wwdc2018/230/?time=1814)
</br></br>
<a name="DemoUpdateData"></a>
##### [Comment synchroniser la mise à jour de données avec l'élément du carrousel sélectioné ? (30:53)](https://developer.apple.com/videos/play/wwdc2018/230/?time=1853)
- Grouper des données pour améliorer significativement la sélection d'éléments. [(31:14)](https://developer.apple.com/videos/play/wwdc2018/230/?time=1874)
- Synchronisation des données regroupées avec l'élément du carrousel sélectionné. [(32:46)](https://developer.apple.com/videos/play/wwdc2018/230/?time=1966)
</br></br>
<a name="DemoCustomActions"></a>
##### [Comment associer des actions à un regroupement d'éléments ? (33:05)](https://developer.apple.com/videos/play/wwdc2018/230/?time=1985)
</br>
<a name="DemoModalView"></a>
##### Comment éviter la sélection d'éléments derrière une 'Modal View' ?
- Modifier `accessibilityViewIsModal` en `override`. [(34:33)](https://developer.apple.com/videos/play/wwdc2018/230/?time=2073)
- Penser à notifier l'utilisateur de l'apparition d'un nouvel écran. [(35:00)](https://developer.apple.com/videos/play/wwdc2018/230/?time=2100)
</br></br>
<a name="DemoExceptionalVoiceOverExperience"></a>
##### [Rendu final de l'application avec VoiceOver optimisé. (35:38)](https://developer.apple.com/videos/play/wwdc2018/230/?time=2138)

</br>
Le code présenté lors de cette vidéo ainsi que des explications sur son implémentation sont accessibles sur le [site développeur d'<span lang="en">Apple</span>](https://developer.apple.com/documentation/uikit/accessibility/delivering_an_exceptional_accessibility_experience).

<!--  This file is part of a11y-guidelines | Our vision of mobile & web accessibility guidelines and best practices, with valid/invalid examples.
 Copyright (C) 2016  Orange SA
 See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). -->