# WWDC 2016 : Audit d'une app en accessibilité

<script>$(document).ready(function () {
    setBreadcrumb([{"label":"Les critères incontournables sous iOS", "url": "./criteria-ios.html"},
                   {"label":"WWDC", "url": "./criteria-ios-wwdc.html"},
                   {"label":"2016 - Audit d'une app en accessibilité"}
	]);
    addSubMenu([
        {"label":"Pour la conception","url":"criteria-ios-conception.html"}, 
        {"label":"Pour le développement","url":"criteria-ios-dev.html"},
        {"label":"WWDC","url":"criteria-ios-wwdc.html"}
    ]);
});</script>

<span data-menuitem="criteria-ios-wwdc"></span>

Cette présentation visualisable sur le **site développeur officiel d'Apple** ([session 407](https://developer.apple.com/videos/play/wwdc2016/407/)) a pour but d'expliquer l'outil de développement <span lang="en">Accessibility Inspector</span> et comment l'utiliser par le biais d'une application d'exemple très simple.
</br><img style="max-width: 200px; height: auto;" alt="" src="./images/iOSdev/wwdc16-logo.png" />
<img style="max-width: 700px; height: auto;" alt="" src="./images/iOSdev/wwdc16-407.png" />
</br></br>Les thèmes abordés ainsi que leur référence temporelle au sein de la vidéo sont décrits ci-dessous :
- [Accessibility Inspector](#AccessibilityInspector) (09:38)
- [Audit](#Audit) (11:21)
- [Inspection](#Inspection) (20:30)
- [Settings](#Settings) (28:33)

Par la suite, le fait de cliquer sur un titre permet d'ouvrir la vidéo de présentation <span lang="en">Apple</span> directement au moment indiqué.

<a name="AccessibilityInspector"></a>
### [Accessibility Inspector (09:38)](https://developer.apple.com/videos/play/wwdc2016/407/?time=578)
Présentation générale de l'outil en décrivant son contenu ainsi que les différents thèmes autour desquels va s'articuler cette présentation.
</br><img style="max-width: 1000px; height: auto;" alt="" src="./images/iOSdev/wwdc16-407-AccessibilityInspector.png" />
</br>La suite va s'attacher à détailler spécifiquement les parties <span lang="en">audit</span>, <span lang="en">inspection</span> et <span lang="en">settings</span>.

<a name="Audit"></a>
### [Audit (11:21)](https://developer.apple.com/videos/play/wwdc2016/407/?time=681)
Explications fournies sur l'intérêt et l'utilisation de cette fonctionnalité avec une démonstration par un exemple pratique [(12:22)](https://developer.apple.com/videos/play/wwdc2016/407/?time=742) qui permet de mettre en avant la façon de trouver une solution au problème décelé par l'outil [(14:24)](https://developer.apple.com/videos/play/wwdc2016/407/?time=864) tout en pouvant remonter rapidement ce problème sous forme de rapport [(17:07)](https://developer.apple.com/videos/play/wwdc2016/407/?time=1027).
</br><img style="max-width: 600px; height: auto;" alt="" src="./images/iOSdev/wwdc16-407-Audit.png" />
</br>Ce type d'audit automatique est très important mais un **audit manuel** complémentaire est **indispensable** car il permet d'éviter des écueils qui pourraient être dévastateurs dans l'utilisation de l'application [(18:55)](https://developer.apple.com/videos/play/wwdc2016/407/?time=1135).

<a name="Inspection"></a>
### [Inspection (20:30)](https://developer.apple.com/videos/play/wwdc2016/407/?time=1230)
Seconde fonctionnalité expliquée en s'appuyant sur un exemple [(21:58)](https://developer.apple.com/videos/play/wwdc2016/407/?time=1318) qui peut permettre de déceler différents types de problèmes :
- Ordonnancement chaotique d'éléments dans la navigation. [(23:11)](https://developer.apple.com/videos/play/wwdc2016/407/?time=1391)
- Description absconse d'un élément. [(23:34)](https://developer.apple.com/videos/play/wwdc2016/407/?time=1414)
- Action non souhaitée déclenchée par un élément. [(24:02)](https://developer.apple.com/videos/play/wwdc2016/407/?time=1442)

Lors de la visualisation de la hiérarchie des éléments par cette fonctionnalité [(24:40)](https://developer.apple.com/videos/play/wwdc2016/407/?time=1480), il est précisé que les composants gérés par <span lang="en">CALayer</span> ne sont pas traités nativement par <span lang="en">VoiceOver</span>.
</br><img style="max-width: 600px; height: auto;" alt="" src="./images/iOSdev/wwdc16-407-Inspection.png" />

<a name="Settings"></a>
### [Settings (28:33)](https://developer.apple.com/videos/play/wwdc2016/407/?time=1713)
Dernière fonctionnalité de l'outil qui permet d'éviter des allers-retours entre l'application testée et les modifications des principaux réglages d'accessibilité qu'une démonstration met en évidence [(30:25)](https://developer.apple.com/videos/play/wwdc2016/407/?time=1825).
</br><img style="max-width: 600px; height: auto;" alt="" src="./images/iOSdev/wwdc16-407-Settings.png" />

<!--  This file is part of a11y-guidelines | Our vision of mobile & web accessibility guidelines and best practices, with valid/invalid examples.
 Copyright (C) 2016  Orange SA
 See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). -->