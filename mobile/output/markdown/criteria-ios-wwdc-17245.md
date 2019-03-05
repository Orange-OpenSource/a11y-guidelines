# WWDC 2017 : Application du Dynamic Type

<script>$(document).ready(function () {
    setBreadcrumb([{"label":"Les critères incontournables sous iOS", "url": "./criteria-ios.html"},
                   {"label":"WWDC", "url": "./criteria-ios-wwdc.html"},
                   {"label":"2017 - Application du Dynamic Type"}
	]);
    addSubMenu([
        {"label":"Pour la conception","url":"criteria-ios-conception.html"}, 
        {"label":"Pour le développement","url":"criteria-ios-dev.html"},
        {"label":"WWDC","url":"criteria-ios-wwdc.html"}
    ]);
});</script>

<span data-menuitem="criteria-ios-wwdc"></span>

Cette présentation visualisable sur le **site développeur officiel d'Apple** ([session 245](https://developer.apple.com/videos/play/wwdc2017/245/)) a pour but d'expliquer ce qu'est le <span lang="en">Dynamic Type</span> et comment le mettre en oeuvre par le biais de bonnes pratiques.
</br><img style="max-width: 200px; height: auto;" alt="" src="./images/iOSdev/wwdc17-logo.png" />
<img style="max-width: 700px; height: auto;" alt="" src="./images/iOSdev/wwdc17-245.png" />
</br></br>Les thèmes abordés ainsi que leur référence temporelle au sein de la vidéo sont décrits ci-dessous :
- [Styles de texte](#TextStyles) (06:06)
- [Police personnalisée](#CustomFonts) (08:17)
- [Utilisation de pages web](#WebViews) (09:25)
- [Affichage sur plusieurs lignes](#WrapToMultipleLines) (10:14)
- [ConstraintEqualToSystemSpacingBelow](#AutoLayoutSystemSpacingConstraints) (11:31)
- [ScaledValue](#ScaledValue) (12:56)
- [Grossissement d'éléments voisins](#SideBySideText) (13:36)
- [PreferredContentSizeCategory](#PreferredContentSizeCategory) (15:23)
- [Table view cells](#TableViewCells) (16:38)
- [Images](#Images) (20:13)
- [Exemple](#Demo) (24:32)

Par la suite, le fait de cliquer sur un titre permet d'ouvrir la vidéo de présentation <span lang="en">Apple</span> directement au moment indiqué.

<a name="TextStyles"></a>
### [Styles de texte (06:06)](https://developer.apple.com/videos/play/wwdc2017/245/?time=366)
Avec iOS 11, **tous les styles de texte s'adaptent aux 5 tailles de texte disponibles en accessibilité** ce qui n'était le cas que pour le style *body* auparavant.
</br>Dans l'<span lang="en">Interface Builder</span> de Xcode, il suffit d'indiquer le style souhaité dans la partie <span lang="en">Attribute Inspector</span> et de cocher la case <span lang="en">Dynamic Type</span> qui permettra d'adapter automatiquement la taille selon les réglages.
</br><img style="max-width: 1000px; height: auto;" alt="" src="./images/iOSdev/wwdc17-245-TextStyle_1.png" />
</br>Au niveau code, on obtient exactement le même résulat de la façon suivante :
</br><img style="max-width: 500px; height: auto;" alt="" src="./images/iOSdev/wwdc17-245-TextStyle_2.png" />

<a name="CustomFonts"></a>
### [Police personnalisée (08:17)](https://developer.apple.com/videos/play/wwdc2017/245/?time=497)
L'introduction de la classe `UIFontMetrics` en iOS 11 permet à une police personnalisée de respecter le comportement du grossissement de caractères.
</br><img style="max-width: 750px; height: auto;" alt="" src="./images/iOSdev/wwdc17-245-CustomFonts.png" />

<a name="WebViews"></a>
### [Utilisation de pages web (09:25)](https://developer.apple.com/videos/play/wwdc2017/245/?time=565)
Afin d'assurer une compatibilité entre le comportement attendu sur un **terminal iOS** utilisant le <span lang="en">Dynamic Type</span> et l'**affichage de pages web** sur ce même type de terminal, il est possible d'indiquer le style de texte souhaité au niveau CSS :
</br><img style="max-width: 600px; height: auto;" alt="" src="./images/iOSdev/wwdc17-245-WebViews.png" />

<a name="WrapToMultipleLines"></a>
### [Affichage sur plusieurs lignes (10:14)](https://developer.apple.com/videos/play/wwdc2017/245/?time=614)
Afin d'éviter la troncature d'un texte trop long dans un `label` après grossissement, il est conseillé de mettre la valeur `0` dans le nombre de lignes à afficher, ce qui aura pour signification d'afficher l'ensemble des lignes.
</br><img style="max-width: 1000px; height: auto;" alt="" src="./images/iOSdev/wwdc17-245-WrapToMultipleLines.png" />

<a name="AutoLayoutSystemSpacingConstraints"></a>
### [ConstraintEqualToSystemSpacingBelow (11:31)](https://developer.apple.com/videos/play/wwdc2017/245/?time=691)
Dans la mise en place de contraintes graphiques entre deux éléments de type `label` s'appuyant sur leur 'baseline', il est préférable de ne pas mettre de valeur fixe pour ne pas rencontrer la situation ci-dessous lors de grossissement de caractères :
</br><img style="max-width: 450px; height: auto;" alt="" src="./images/iOSdev/wwdc17-245-AutoLayoutsystemSpacingConstraints_1.png" />
</br>Une constante égale à 'Standard Value' dans l'<span lang="en">Interface Builder</span> de Xcode ou une définition programmatique de la contrainte utilisant `constraintEqualToSystemSpacingBelow` (nouveauté iOS 11) permet de résoudre ce problème.
</br><img style="max-width: 650px; height: auto;" alt="" src="./images/iOSdev/wwdc17-245-AutoLayoutsystemSpacingConstraints_2.png" />

<a name="ScaledValue"></a>
### [ScaledValue (12:56)](https://developer.apple.com/videos/play/wwdc2017/245/?time=776)
Introduite en iOS 11, la méthode **scaledValue** permet de déterminer la hauteur d'un élement graphique contenant du texte selon le grossissement implémenté.
</br><img style="max-width: 700px; height: auto;" alt="" src="./images/iOSdev/wwdc17-245-ScaledValue.png" />
</br>À utiliser par exemple pour un bouton contenant du texte dont la taille est liée au <span lang="en">Dynamic Type</span> et dont on souhaite connaître la hauteur.

<a name="SideBySideText"></a>
### [Grossissement d'éléments voisins (13:36)](https://developer.apple.com/videos/play/wwdc2017/245/?time=816)
Arrivé à un certain seuil de grossissement, des éléments verticalement voisins peuvent finir par devenir illisibles et même transformer une interface graphique initialement ergonomique en une juxtaposition grossière d'objets.
</br>Dans ce cas, il est recommandé de passer à un alignement horizontal lorsque le grossisement problématique est atteint.
</br><img style="max-width: 700px; height: auto;" alt="" src="./images/iOSdev/wwdc17-245-SideBySideText.png" />

<a name="PreferredContentSizeCategory"></a>
### [PreferredContentSizeCategory (15:23)](https://developer.apple.com/videos/play/wwdc2017/245/?time=923)
Il existe **2 familles** bien distinctes qui contiennent les paliers de grossissement souhaités :
- La première comprend les **7 seuils** de base allant de `extraSmall` à `extraExtraExtraLarge`.
- La seconde est **spécifique à l'accessibilité** et doit être activée pour être prise en compte : elle comprend **5 seuils** qui vont de `accessibilityMedium` à `accessibilityExtraExtraExtraLarge`.

Ces différents seuils sont accessibles depuis le `traitCollection` de la vue ou bien directement depuis l'application par le biais de la méthode **preferredContentSizeCategory**.
</br><img style="max-width: 900px; height: auto;" alt="" src="./images/iOSdev/wwdc17-245-PreferredContentSizeCategory_1.png" />
</br>Il est possible de mettre en place des conditions pour savoir si un seuil de grossissement a été atteint de façon à faire un réarrangement graphique des éléments quand cela est nécessaire.
</br><img style="max-width: 650px; height: auto;" alt="" src="./images/iOSdev/wwdc17-245-PreferredContentSizeCategory_2.png" />

<a name="TableViewCells"></a>
### [Table view cells (16:38)](https://developer.apple.com/videos/play/wwdc2017/245/?time=998)
L'utilisation de <span lang="en">table view cells</span> standards va permettre d'adapter automatiquement la disposition d'une cellule en fonction du <span lang="en">Dynamic Type</span> grâce au [cell-sizing](https://developer.apple.com/videos/play/wwdc2017/245/?time=1058).
</br><img style="max-width: 600px; height: auto;" alt="" src="./images/iOSdev/wwdc17-245-TableViews_1.png" />
</br>Dans le cadre de cellules personnalisées, il faut mettre en place les contraintes pour définir le rendu souhaité et laisser le <span lang="en">cell-sizing</span> opérer.
</br><img style="max-width: 750px; height: auto;" alt="" src="./images/iOSdev/wwdc17-245-TableViews_2.png" />

<a name="Images"></a>
### [Images (20:13)](https://developer.apple.com/videos/play/wwdc2017/245/?time=1213)
Le <span lang="en">Dynamic Type</span> permet aussi le grossissement des images à la fois sur les vues et les barres de tabulation.
</br>Les explications détaillées de ce point se trouvent dans la partie [développement](./criteria-ios-dev.html#taille-des-l-ments-graphiques).

<a name="Demo"></a>
### [Exemple (24:32)](https://developer.apple.com/videos/play/wwdc2017/245/?time=1472)
Une application d'exemple est proposée pour répondre aux questions que se posent les développeurs face aux éventuels problèmes rencontrés dans l'implémentation du <span lang="en">Dynamic Type</span> (regarder l'[introduction](https://developer.apple.com/videos/play/wwdc2017/245/?time=1506) avant de lire la suite) :
- **Pourquoi mon implémentation du <span lang="en">Dynamic Type</span> ne fonctionne-t-elle pas** ?
[(26:19)](https://developer.apple.com/videos/play/wwdc2017/245/?time=1579) (aide = <span lang="en">`adjustsFontForContentSizeCategory`</span> (code) ou <span lang="en">`Automatically Adjusts Font`</span> (<span lang="en">Attribute Inspector</span>) + <span lang="en">`scaledFont`</span> si police personnalisée)
- **Comment modifier le positionnement des éléments pour adapter la lisibilité à la largeur maximale de texte** ?
[(28:01)](https://developer.apple.com/videos/play/wwdc2017/245/?time=1681) (aide = mettre en place les contraintes à activer pour un positionnement vertical des éléments impactés + déterminer le moment auquel activer ces nouvelles contraintes avec <span lang="en">`preferredContentSizeCategory`</span> + <span lang="en">`traitCollectionDidChange`</span> pour être notifié d'un changement de taille de texte)
- **Comment adapter la taille de mes <span lang="en">`table view cells`</span> à leur contenu** ?
[(31:03)](https://developer.apple.com/videos/play/wwdc2017/245/?time=1863) (aide = <span lang="en">`UITableViewAutomaticDimension`</span> + <span lang="en">`estimatedRowHeight`</span>)
- **Pourquoi la taille de mes images ne suit pas le grossissement de texte** ? [(32:11)](https://developer.apple.com/videos/play/wwdc2017/245/?time=1931) (aide = <span lang="en">`adjustsImageSizeForAccessibilityContentSizeCategory`</span>)
- **Comment mettre une définition visuelle parfaite aux images après grossissement** ? [(33:07)](https://developer.apple.com/videos/play/wwdc2017/245/?time=1987) (aide = <span lang="en">`Preserve Vector Data`</span> dans l'<span lang="en">Attribute Inspector</span> du .xcassets)
- **Comment utiliser l'instrument <span lang="en">Accessibility Inspector</span> pour vérifer le grossissement de texte** ? [(34:56)](https://developer.apple.com/videos/play/wwdc2017/245/?time=2096)

<!--  This file is part of a11y-guidelines | Our vision of mobile & web accessibility guidelines and best practices, with valid/invalid examples.
 Copyright (C) 2016  Orange SA
 See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). -->