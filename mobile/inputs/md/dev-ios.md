# Guide d’accessibilité iOS

<script>$(document).ready(function () {
    
    setBreadcrumb([{"label":"Guide développeur", "url": "./dev-mobile.html"},
        {"label":"Guide développeur iOS"}
	]);
    addSubMenu([
        {"label":"Guide pour Android","url":"dev-android.html"}, 
        {"label":"Guide pour iOS","url":"dev-mobile.html", "expanded": true}
    ]);    
    
});</script>

<span data-menuitem="dev-mobile"></span>

Ce guide a pour objectif de présenter les différentes options d’accessibilité du <abbr>SDK</abbr> iOS. À travers différentes catégories, ce guide explique comment utiliser les attributs et méthodes d’accessibilité et propose des liens vers la documentation officielle d’Apple. Des exemples de codes sont aussi présents pour illustrer les propos (la plupart du temps en Swift).

## Alternatives textuelles
**Description&nbsp;: **  

Sous iOS, la vocalisation d’un élément s’effectue à travers 4 attributs, à savoir le `label`, le `hint`, la `value` et le `trait`.  
L’ordre de vocalisation est toujours le suivant&nbsp;: `label`, `value`, `trait` et `hint`. Cet ordre ne peut pas être changé et la vocalisation est réalisée en une seule fois, à l’arrivée sur l’élément.  

Une section de ce guide est dédiée au `trait`, nous décrivons ici les 3 autres&nbsp;:  
- `accessibilityLabel`&nbsp;: le `label` permet de préciser le titre spécifique à l’accessibilité qui est lu par <span lang="en">VoiceOver</span> en lieu et place du texte du composant si celui-ci en possède un. Cela permet d’avoir un texte de composant plus explicite que celui affiché à l’écran. Par exemple, dans le cas d’un bouton dont le titre est « OK », on peut indiquer que le bouton sert à valider un choix.
- `accessibilityValue`&nbsp;: la valeur d’un élément est par défaut le pourcentage de progression (exemple&nbsp;: une barre de progression). À noter que pour la plupart des éléments ajustables disponibles dans le <abbr>SDK</abbr>, cette `value` n’a pas besoin d’être reprécisée (le système restitue automatiquement la valeur à l’utilisateur via <span lang="en">VoiceOver</span>).
- `accessibilityHint`&nbsp;: le `hint` permet de décrire le comportement du composant. Exemple&nbsp;: «&nbsp;cliquez pour obtenir le résultat&nbsp;».  

Ces attributs d’accessibilité sont disponibles via l’<i lang="en">interface builder</i>, mais également via le code. Tout élément dérivant de `UIView` les possède par défaut. Ces attributs acceptent une chaîne de caractère en option, et sont, par conséquent, facilement internationalisables.
 
**Exemples&nbsp;: **   

Exemple simple (internationalisé)&nbsp;:  
`accordionHeaderView.accessibilityHint = "example_elementState_foldArea_open_accessibilityHint".localized`

Indiquer l’état et la nature d’onglets personnalisés&nbsp;:  
<pre><code class="swift">@IBAction func buttonClicked(sender: AnyObject) {
	for button:UIButton in buttonList {

		if button == sender as! UIButton {
			button.selected = true
			if accessible {
				button.accessibilityTraits = UIAccessibilityTraitButton + UIAccessibilityTraitSelected
			}
			button.setTitleColor(UIColor.orange_orangeForWhiteBG(), forState: UIControlState.Selected)
			button.tintColor = UIColor.clearColor()
		}
		else {
			button.selected = false
			if accessible {
				button.accessibilityTraits = UIAccessibilityTraitNone
				button.accessibilityTraits = UIAccessibilityTraitButton
			}
			button.setTitleColor(UIColor.orange_blackColor(), forState: UIControlState.Normal)
		}
	}
}
    
func accessibleSegmentedControl() {
	onePageButton.accessibilityTraits = UIAccessibilityTraitButton + UIAccessibilityTraitSelected
	twoPageButton.accessibilityTraits = UIAccessibilityTraitButton
	threePageButton.accessibilityTraits = UIAccessibilityTraitButton

	onePageButton.accessibilityHint = "1 " + "common_of".localized + " " + String(buttonList.count)
	twoPageButton.accessibilityHint = "2 " + "common_of".localized + " " + String(buttonList.count)
	threePageButton.accessibilityHint = "3 " + "common_of".localized + " " + String(buttonList.count)
}</code></pre>

**Liens&nbsp;: **

- [`accessibilityLabel`](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIAccessibility_Protocol/#//apple_ref/occ/instp/NSObject/accessibilityLabel)
- [`accessibilityValue`](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIAccessibility_Protocol/#//apple_ref/occ/instp/NSObject/accessibilityValue)
- [`accessibilityHint`](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIAccessibility_Protocol/#//apple_ref/occ/instp/NSObject/accessibilityHint)


## Nature des éléments

**Description&nbsp;: ** 

L’attribut `accessibilityTraits` permet de donner une information à l’<abbr>API</abbr> d’accessibilité sur la nature d’un composant. On peut décider ainsi qu’un item de liste soit pris en compte comme un bouton par <span lang="en">VoiceOver</span> car celui-ci est cliquable. De ce fait, l’`accessibilityTrait` joue également sur la vocalisation de l’élément car cette nature est restituée par <span lang="en">VoiceOver</span>.  
 
Cet attribut d’accessibilité est disponible via l’<i lang="en">interface builder</i>, mais également utilisable directement via le code.  

Il existe beaucoup de traits. Ci-après, les principaux (les plus utiles)&nbsp;:  
- `accessibilityTraitNone`&nbsp;: supprime toute valeur sémantique à l’élément.
- `accessibilityTraitButton`&nbsp;: ajoute le trait «&nbsp;bouton&nbsp;», l’élément est vu comme un bouton par <span lang="en">VoiceOver</span>.
- `accessibilityTraitLink`&nbsp;: utile pour définir un label en tant que «&nbsp;lien&nbsp;».
- `accessibilityTraitHeader`&nbsp;: permet de définir un élément comme une en-tête (pour plus d’information, voir la section «&nbsp;titres et en-têtes&nbsp;» dans la partie critères de l’application).
- `accessibilityTraitAdjustable`&nbsp;: permet de définir un élément comme un élément «&nbsp;ajustable&nbsp;», c’est-à-dire un élément dont la valeur instantanée peut être modifiée via un geste spécifique de <span lang="en">VoiceOver</span>.

**Exemples&nbsp;: **   

Exemple avec un `UIPageControl` et le trait ’ajustable’&nbsp;:  
`pageControl.accessibilityTraits = UIAccessibilityTraitAdjustable`

Exemple pour ajouter un en-tête&nbsp;:  
`defaultHeaderViewCell.accessibilityTraits = UIAccessibilityTraitHeader`

On peut également combiner plusieurs trait&nbsp;:  
`onePageButton.accessibilityTraits = UIAccessibilityTraitButton + UIAccessibilityTraitSelected`

**Lien&nbsp;: **     

- [`accessibilityTraits`](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIAccessibility_Protocol/#//apple_ref/doc/constant_group/Accessibility_Traits)


## Masquer des éléments à l’accessibilité  

**Description&nbsp;: **  

Il est possible via des attributs d’accessibilité de masquer des éléments aux outils d’accessibilité (<span lang="en">VoiceOver</span> par exemple). Il est aussi possible de forcer certains éléments à être visibles pour les outils d’accessibilité.  
  
-	`AccessibilityElement`&nbsp;: booléen qui permet d’indiquer qu’un élément est visible ou non de l’<abbr>API</abbr> d’accessibilité (de <span lang="en">VoiceOver</span> ou autre).
-	`AccessibilityElementIsHidden`&nbsp;: booléen qui permet d’indiquer que les éléments fils de l’élément cible sont visibles ou non de l’<abbr>API</abbr> d’accessibilité.
-	`AccessibilityViewIsModal`&nbsp;: booléen qui permet de rendre visible ou non les éléments frères de l’élément cible à l’<abbr>API</abbr> d’accessibilité. Très utile pour rendre accessible des <i lang="en">popin custom</i> par exemple.  
  
L’attribut `accessibilityElement` est disponible via l’<i lang="en">interface builder</i>, mais est également utilisable directement via le code. Les deux autres attributs sont utilisables uniquement via le code.

**Exemples&nbsp;: **

Exemple simple&nbsp;:   
`pageControl.isAccessibilityElement = true`

Exemple d’alerte <i lang="en">custom</i> accessible&nbsp;:  
<pre><code class="swift">@IBAction func displayCustomAlert() {
	popUpVIew.hidden = false //La vue a été créée au préalable, on ne fait que l’afficher et la rendre accessible
	popUpVIew.accessibilityViewIsModal = true //Empêche l’accessibilité de voir ce qui est "derrière" l’alerte
	popUpVIew.frame = CGRectMake(0, 0, UIScreen.mainScreen().bounds.width, UIScreen.mainScreen().bounds.height) //Le filtre modal de l’alerte prend tout l’écran

	let window = UIApplication.sharedApplication().keyWindow
	window?.addSubview(popUpVIew)

	UIAccessibilityPostNotification(UIAccessibilityScreenChangedNotification, popUpVIew) //On informe l’accessibilité de l’affichage de l’alerte afin que celle-ci soit focus si <span lang="en">VoiceOver</span> est actif
}</code></pre>

**Liens&nbsp;: **     

- [`accessibilityElement`](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIAccessibility_Protocol/#//apple_ref/occ/instp/NSObject/isAccessibilityElement)
- [`accessibilityElementIsHidden`](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIAccessibility_Protocol/#//apple_ref/occ/instp/NSObject/accessibilityElementsHidden)
- [`accessibilityViewIsModal`](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIAccessibility_Protocol/#//apple_ref/occ/instp/NSObject/accessibilityViewIsModal)


## Déclencher une vocalisation

**Description&nbsp;: **  

Il est très facile de déclencher des vocalisations avec <span lang="en">VoiceOver</span>. Attention, nous parlons de vocalisation avec <span lang="en">VoiceOver</span> (ce qui implique que <span lang="en">VoiceOver</span> soit activé) et pas de <abbr>TTS</abbr> (<span lang="en">Text To Speech</span>) (qui fonctionne indépendamment de l’activation ou non de <span lang="en">VoiceOver</span>).  

Pour déclencher une vocalisation, il faut envoyer une notification à l’<abbr>API</abbr> d’accessibilité via la méthode `UIAccessibilityPostNotification`  avec en paramètre la notification permettant de déclencher une vocalisation `UIAccessibilityAnnouncementNotification` et la chaîne de caractères à vocaliser.    
 
La vocalisation se fait dans la langue du système.

**Exemple&nbsp;: **

`UIAccessibilityPostNotification(UIAccessibilityAnnouncementNotification, speakString);`

**Liens&nbsp;: **

- [`UIAccessibilityPostNotification`](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIKitFunctionReference/index.html#//apple_ref/c/func/UIAccessibilityPostNotification)
- [`UIAccessibilityAnnouncementNotification`](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIAccessibility_Protocol/#//apple_ref/c/data/UIAccessibilityAnnouncementNotification)


## Connaître l’état des options d’accessibilité

**Description&nbsp;: ** 

Sous iOS, il est possible de connaître les statuts des options d’accessibilité. Est-ce que <span lang="en">VoiceOver</span> est activé&nbsp;? Est-ce que le mode audio-mono est activé&nbsp;? Plusieurs fonctions permettent de connaître ces valeurs. Ces fonctions font partie du `UIKit` <span lang="en">framework</span>.  

La plus utile de ces fonctions est certainement `UIAccessibilityIsVoiceOverRunning` qui permet de savoir si <span lang="en">VoiceOver</span> est activé au moment de l’appel.

**Exemple&nbsp;: ** 

`UIAccessibilityIsVoiceOverRunning() ? 1&nbsp;: 0`

**Liens&nbsp;: **

- [`UIAccessibilityIsVoiceOverRunning`](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIKitFunctionReference/#//apple_ref/c/func/UIAccessibilityIsVoiceOverRunning)
- [`UIAccessibilityIsClosedCaptioningEnabled`](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIKitFunctionReference/#//apple_ref/c/func/UIAccessibilityIsClosedCaptioningEnabled)
- [`UIAccessibilityIsMonoAudioEnabled`](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIKitFunctionReference/#//apple_ref/c/func/UIAccessibilityIsMonoAudioEnabled)
- [`UIAccessibilityIsBoldTextEnabled`](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIKitFunctionReference/#//apple_ref/c/func/UIAccessibilityIsBoldTextEnabled)
- [`UIAccessibilityDarkerSystemColorsEnabled`](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIKitFunctionReference/#//apple_ref/c/func/UIAccessibilityDarkerSystemColorsEnabled)
- [`UIAccessibilityIsGrayscaleEnabled`](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIKitFunctionReference/#//apple_ref/c/func/UIAccessibilityIsGrayscaleEnabled)
- [`UIAccessibilityIsGuidedAccessEnabled`](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIKitFunctionReference/#//apple_ref/c/func/UIAccessibilityIsGuidedAccessEnabled)
- [`UIAccessibilityIsInvertColorsEnabled`](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIKitFunctionReference/#//apple_ref/c/func/UIAccessibilityIsInvertColorsEnabled)
- [`UIAccessibilityIsReduceMotionEnabled`](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIKitFunctionReference/#//apple_ref/c/func/UIAccessibilityIsReduceMotionEnabled)
- [`UIAccessibilityIsReduceTransparencyEnabled`](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIKitFunctionReference/#//apple_ref/c/func/UIAccessibilityIsReduceTransparencyEnabled)
- [`UIAccessibilityIsSpeakScreenEnabled`](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIKitFunctionReference/#//apple_ref/c/func/UIAccessibilityIsSpeakScreenEnabled)
- [`UIAccessibilityIsSpeakSelectionEnabled`](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIKitFunctionReference/#//apple_ref/c/func/UIAccessibilityIsSpeakSelectionEnabled)
- [`UIAccessibilityIsSwitchControlRunning`](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIKitFunctionReference/#//apple_ref/c/func/UIAccessibilityIsSwitchControlRunning)

## Informer d’une modification sur la page

**Description&nbsp;: **

Lors d’un changement de contenu sur une page, il est possible de notifier l’<abbr>API</abbr> d’accessibilité de ce changement à travers différentes notifications. Pour ce faire, il faut envoyer une notification de modification à l’<abbr>API</abbr> d’accessibilité via la méthode `UIAccessibilityPostNotification`.  

Il existe plusieurs notifications de modification, mais les deux plus utiles sont&nbsp;:
- `UIAccessibilityLayoutChangedNotification`&nbsp;: permet de spécifier à l’<abbr>API</abbr> d’accessibilité qu’une partie de la page a été modifiée.
- `UIAccessibilityScreenChangedNotification`&nbsp;: permet d’annoncer un changement global de la page.  

À l’usage, il existe une petite différence entre les deux. `UIAccessibilityLayoutChangedNotification` accepte une `NSString` ou un `UIObject`. Avec le premier paramètre, la notification se comporte comme une `UIAccessibilityAnnouncementNotification` et lance une vocalisation <span lang="en">VoiceOver</span>. Avec le second, le focus est repositionné sur l’élément de notre choix.  

`UIAccessibilityScreenChangedNotification` accepte soit `nil`, soit l’élément qui doit recevoir le focus.

**Exemples&nbsp;: **
 
<pre><code class="objectivec">UIAccessibilityPostNotification(UIAccessibilityLayoutChangedNotification, @"speakString");
UIAccessibilityPostNotification(UIAccessibilityLayoutChangedNotification, aViewObject);

UIAccessibilityPostNotification(UIAccessibilityScreenChangedNotification, nil);
UIAccessibilityPostNotification(UIAccessibilityScreenChangedNotification, aViewObject);</code></pre>

**Liens&nbsp;: **

- [`UIAccessibilityPostNotification`](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIKitFunctionReference/index.html#//apple_ref/c/func/UIAccessibilityPostNotification)
- [`UIAccessibilityLayoutChangedNotification`](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIAccessibility_Protocol/index.html#//apple_ref/c/data/UIAccessibilityLayoutChangedNotification)
- [`UIAccessibilityScreenChangedNotification`](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIAccessibility_Protocol/index.html#//apple_ref/c/data/UIAccessibilityScreenChangedNotification)
- [`UIAccessibilityPageScrolledNotification`](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIAccessibility_Protocol/index.html#//apple_ref/c/data/UIAccessibilityPageScrolledNotification)


## Modifier la langue de vocalisation

**Description&nbsp;: **  

Afin de modifier la langue de prononciation de <span lang="en">VoiceOver</span> pour un mot ou un texte, il existe l’attribut `accessibilityLanguage`. Disponible via le protocole `UIAccessibility`, cet attribut permet de redéfinir la langue de prononciation d’un texte. Par exemple, si on utilise cet attribut sur un `UILabel`, alors celui-ci sera vocalisé par <span lang="en">VoiceOver</span> dans la nouvelle langue donnée en valeur de l’attribut.

**Exemple&nbsp;: ** 

`cell.textLabel?.accessibilityLanguage = "en_EN"`

**Lien&nbsp;: **      

- [`accessibilityLanguage`](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIAccessibility_Protocol/#//apple_ref/occ/instp/NSObject/accessibilityLanguage)


## Modifier la zone de focus de <span lang="en">VoiceOver</span>

**Description&nbsp;: **  

Dans le cas d’objet modifié dynamiquement ou d’élément ne dérivant pas de `UIView`, il est possible de déterminer la zone géographique d’accessibilité de cet élément, c’est-à-dire la zone que <span lang="en">VoiceOver</span> met en surbrillance lors du focus.  

- `AccessibilityFrame`&nbsp;: permet de définir cette zone via un rectangle (`CGRect`). Par défaut pour un élément dérivant de `UIView`, cette zone est la partie «&nbsp;visible&nbsp;» de la vue.
- `AccessibilityPath`&nbsp;: équivalent à `AccessibilityFrame` mais permet de définir la zone via des courbes de Bézier.
- `AccessibilityActivationPoint`&nbsp;: le «&nbsp;point&nbsp;» d’activation d’un élément pour les outils d’accessibilité. Par défaut, ce point est au centre de l’élément.

**Liens&nbsp;: **

- [`AccessibilityFrame`](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIAccessibility_Protocol/#//apple_ref/occ/instp/NSObject/accessibilityFrame)
- [`AccessibilityPath`](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIAccessibility_Protocol/#//apple_ref/occ/instp/NSObject/accessibilityPath)
- [`AccessibilityActivationPoint`](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIAccessibility_Protocol/#//apple_ref/occ/instp/NSObject/accessibilityActivationPoint)


## Grouper des éléments

**Description&nbsp;: **  

L’attribut `shouldGroupAccessibilityChildren` est un booléen qui permet d’indiquer à <span lang="en">VoiceOver</span> qu’il doit grouper les enfants de la vue qui porte l’attribut. Cela permet notamment de faire des vocalisations uniques ou de définir un ordre de lecture <span lang="en">VoiceOver</span> particulier pour une partie de la page seulement (voir la section «&nbsp;ordre de lecture&nbsp;»).

**Exemple&nbsp;: ** 

Très pratique quand on veut redéfinir l’ordre de lecture pour <span lang="en">VoiceOver</span>, ici sur une cellule de tableau qui comporte des éléments de formulaire&nbsp;:  
<pre><code class="swift">class AddressTableViewCell: UITableViewCell {

	@IBOutlet weak var deliveringAddressLabel:  UILabel!
	@IBOutlet weak var addressLabel:            UILabel!
	@IBOutlet weak var switchLabel:             UILabel!
	@IBOutlet weak var addressSwitch:           UISwitch!

	override func awakeFromNib() {
		super.awakeFromNib()

		isAccessibilityElement = false
		shouldGroupAccessibilityChildren = true
		accessibilityElements = [deliveringAddressLabel, addressLabel, addressSwitch]
	}
}</code></pre>

**Lien&nbsp;: **      

- [`shouldGroupAccessibilityChildren`](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIAccessibility_Protocol/#//apple_ref/occ/instp/NSObject/shouldGroupAccessibilityChildren)

## Événements d’accessibilité

**Description&nbsp;: **  

Le système iOS envoie un certain nombre d’événements d’accessibilité à destination des applications. Ces événements sont envoyés lors de la modification des options d’accessibilité. Par exemple, si <span lang="en">VoiceOver</span> est désactivé durant l’utilisation de l’application, celle-ci recevra l’événement `UIAccessibilityVoiceOverStatusChanged`. Cela est très utile couplé à la fonction `UIAccessibilityIsVoiceOverRunning`.  

Imaginons que nous ayons un traitement particulier quand <span lang="en">VoiceOver</span> est activé. Ceci est détecté grâce à la fonction `UIAccessibilityIsVoiceOverRunning`. Mais que se passe-t-il si <span lang="en">VoiceOver</span> est désactivé alors que ce traitement a déjà eu lieu&nbsp;? C’est là que les événements système peuvent être utilisés. En restant à l’écoute de ces événements, il est possible d’appliquer des traitements particuliers de manière dynamique.

**Exemple&nbsp;: ** 

Ici, on appelle le sélecteur `VoiceOverStatusDidChange` au moment où le statut change&nbsp;:  
`NSNotificationCenter.defaultCenter().addObserver(self, selector: "VoiceOverStatusDidChange:", name: UIAccessibilityVoiceOverStatusChanged, object: nil)`

**Lien&nbsp;: **      

- [`UIAccessibilityVoiceOverStatusChanged`](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIAccessibility_Protocol/#//apple_ref/c/data/UIAccessibility<span lang="en">VoiceOver</span>StatusChanged)
- [`UIAccessibilityClosedCaptioningStatusDidChangeNotification`](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIAccessibility_Protocol/#//apple_ref/c/data/UIAccessibilityClosedCaptioningStatusDidChangeNotification)
- [`UIAccessibilityMonoAudioStatusDidChangeNotification`](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIAccessibility_Protocol/#//apple_ref/c/data/UIAccessibilityMonoAudioStatusDidChangeNotification)
- [`UIAccessibilityAnnouncementDidFinishNotification`](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIAccessibility_Protocol/#//apple_ref/c/data/UIAccessibilityAnnouncementDidFinishNotification)
- [`UIAccessibilityGuideAccessStatusDidChangeNotification`](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIAccessibility_Protocol/#//apple_ref/c/data/UIAccessibilityAnnouncementDidFinishNotification)
- [`UIAccessibilityInvertColorsStatusDidChangeNotification`](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIAccessibility_Protocol/#//apple_ref/c/data/UIAccessibilityInvertColorsStatusDidChangeNotification)
- [`UIAccessibilityDarkerSystemColorsStatusDidChangeNotification`](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIAccessibility_Protocol/#//apple_ref/c/data/UIAccessibilityDarkerSystemColorsStatusDidChangeNotification)
- [`UIAccessibilityGrayscaleStatusDidChangeNotification`](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIAccessibility_Protocol/#//apple_ref/c/data/UIAccessibilityGrayscaleStatusDidChangeNotification)
- [`UIAccessibilityBoldTextStatusDidChangeNotification`](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIAccessibility_Protocol/#//apple_ref/c/data/UIAccessibilityBoldTextStatusDidChangeNotification)

## Taille des textes

**Description&nbsp;: **  

La gestion des polices dynamiques sous iOS est complexe. Il est possible depuis iOS7 d’utiliser une <abbr>API</abbr> permettant de rendre la taille des textes de son application dynamiquement modifiable à l’aide du paramétrage du téléphone. Si on résume cette <abbr>API</abbr>, il faut&nbsp;:  

 - Utiliser les polices système pour les textes de l’application, `[UIFont preferredFontForTextStyle:UIFontTextStyle…]`. Il est aussi possible de définir ses propres polices dérivées de la classe `UIFont`&nbsp;;
- Traiter l’événement signalant le changement de la taille du texte dans les paramètres du téléphone `UIContentSizeCategoryDidChangeNotification`, `[[NSNotificationCenter defaultCenter] addObserver:… selector:@selector(…) name: UIContentSizeCategoryDidChangeNotification object:…];`&nbsp;;
- Lors du traitement de l’événement signalant le changement de taille, il faut réafficher les éléments concernés.  

Il faut aussi faire attention à ce que les conteneurs s’adaptent à leur contenu&nbsp;: utiliser les contraintes est le meilleur moyen de réaliser cette tâche.

**Lien&nbsp;: **

- [<span lang="en">Dynamic Type <abbr>API</abbr></span>](https://developer.apple.com/library/ios/documentation/StringsTextFonts/Conceptual/TextAndWebiPhoneOS/CustomTextProcessing/CustomTextProcessing.html#//apple_ref/doc/uid/TP40009542-CH4-SW65)


## Ordre de lecture

**Description&nbsp;: ** 

Redéfinir l’ordre de lecture pour <span lang="en">VoiceOver</span> s’effectue en respectant le protocole `UIAccessibilityContainer`. L’idée est d’avoir un tableau des éléments de la vue qui définit l’ordre de lecture des éléments. Il est bien souvent nécessaire d’utiliser l’attribut `shouldGroupAccessibilityElement` afin d’avoir un ordre précis, mais pour une partie seulement de la vue (le reste étant l’ordre naturel de lecture).

**Exemple&nbsp;: ** 

Cellule de tableau qui comporte des éléments de formulaire&nbsp;:  
<pre><code class="swift">class AddressTableViewCell: UITableViewCell {

	@IBOutlet weak var deliveringAddressLabel:  UILabel!
	@IBOutlet weak var addressLabel:            UILabel!
	@IBOutlet weak var switchLabel:             UILabel!
	@IBOutlet weak var addressSwitch:           UISwitch!

	override func awakeFromNib() {
		super.awakeFromNib()

		isAccessibilityElement = false
		shouldGroupAccessibilityChildren = true
		accessibilityElements = [deliveringAddressLabel, addressLabel, addressSwitch]
	}
}</code></pre>

**Lien&nbsp;: **

- [`UIAccessibilityContainer`](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIAccessibilityContainer_Protocol/)

<!--  This file is part of a11y-guidelines | Our vision of mobile & web accessibility guidelines and best practices, with valid/invalid examples.
 Copyright (C) 2016  Orange SA
 See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). -->