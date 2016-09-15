# Guide d'accessibilité iOS

<script>$(document).ready(function () {
    
    setBreadcrumb([{"label":"Guide développeur", "url": "./dev-mobile.html"},
        {"label":"Guide développeur iOS"}
	]);
    addSubMenu();
    
});</script>

<span data-menuitem="dev-mobile"></span>

Ce guide a pour objectif de présenter les différentes options d'accessibilité du SDK iOS. À travers différentes catégories, ce guide explique comment utiliser les attributs et méthodes d'accessibilité et propose des liens vers la documentation officielle d'Apple. Des exemples de codes sont aussi présents pour illustrer les propos (la plupart du temps en Swift).

## Alternatives textuelles
**Description : **  

Sous iOS, la vocalisation d’un élément s’effectue à travers 4 attributs, à savoir le `label`, le `hint`, la `value` et le `trait`.  
L’ordre de vocalisation est toujours le suivant : `label`, `value`, `trait` et `hint`. Cet ordre ne peut pas être changé et la vocalisation est réalisée en une seule fois, à l’arrivée sur l’élément.  

Une section de ce guide est dédiée au trait, nous décrivons ici les 3 autres :  
- `accessibilityLabel` : le `label` permet de préciser le titre spécifique à l’accessibilité qui est lu par VoiceOver en lieu et place du texte du composant si celui-ci en possède un. Cela permet d’avoir un texte de composant plus explicite que celui affiché à l’écran. Par exemple, dans le cas d’un bouton dont le titre est « OK », on peut indiquer que le bouton sert à valider un choix.
- `accessibilityValue` : la valeur d’un élément est par défaut le pourcentage de progression (exemple : une barre de progression). À noter que pour la plupart des éléments ajustables disponibles dans le SDK, cette value n’a pas besoin d’être reprécisée (le système restitue automatiquement la valeur à l’utilisateur via VoiceOver).
- `accessibilityHint` : le `hint` permet de décrire le comportement du composant. Exemple : « cliquez pour obtenir le résultat ».  

Ces attributs d’accessibilité sont disponibles via l’interface builder, mais également via le code. Tout élément dérivant de `UIView` les possède par défaut. Ces attributs acceptent une chaine de caractère en option, et sont, par conséquent, facilement internationalisables.
 
**Exemples : **   

Exemple simple (internationalisé) :  
`accordionHeaderView.accessibilityHint = "example_elementState_foldArea_open_accessibilityHint".localized`

Indiquer l'état et la nature d'onglets personnalisés :  
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

**Liens : **

- [accessibilityLabel](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIAccessibility_Protocol/#//apple_ref/occ/instp/NSObject/accessibilityLabel)
- [accessibilityValue](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIAccessibility_Protocol/#//apple_ref/occ/instp/NSObject/accessibilityValue)
- [accessibilityHint](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIAccessibility_Protocol/#//apple_ref/occ/instp/NSObject/accessibilityHint)


## Nature des éléments

**Description : ** 

L’attribut `accessibilityTraits` permet de donner une information à l'API d'accessibilité sur la nature d’un composant. On peut décider ainsi qu’un item de liste soit pris en compte comme un bouton par VoiceOver car celui-ci est cliquable. De ce fait, l’`accessibilityTrait` joue également sur la vocalisation de l’élément car cette nature est restituée par VoiceOver.  
 
Cet attribut d’accessibilité est disponible via l’interface builder, mais également utilisable directement via le code.  

Il existe beaucoup de traits. Ci-après, les principaux (les plus utiles) :  
- `accessibilityTraitNone` : supprime toute valeur sémantique à l’élément.
- `accessibilityTraitButton` : ajoute le trait « bouton », l’élément est vu comme un bouton par VoiceOver.
- `accessibilityTraitLink` : utile pour définir un label en tant que « lien ».
- `accessibilityTraitHeader` : permet de définir un élément comme une en-tête (pour plus d’information, voir la section « titres et en-têtes » dans la partie critères de l’application).
- `accessibilityTraitAdjustable` : permet de définir un élément comme un élément « ajustable », c’est-à-dire un élément dont la valeur instantanée peut être modifiée via un geste spécifique de VoiceOver.

**Exemples : **   

Exemple avec un `UIPageControl` et le trait 'ajustable' :  
`pageControl.accessibilityTraits = UIAccessibilityTraitAdjustable`

Exemple pour ajouter un en-tête :  
`defaultHeaderViewCell.accessibilityTraits = UIAccessibilityTraitHeader`

On peut également combiner plusieurs trait :  
`onePageButton.accessibilityTraits = UIAccessibilityTraitButton + UIAccessibilityTraitSelected`

**Lien : **     

- [accessibilityTraits](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIAccessibility_Protocol/#//apple_ref/doc/constant_group/Accessibility_Traits)


## Masquer des éléments à l'accessibilité  

**Description : **  

Il est possible via des attributs d’accessibilité de masquer des éléments aux outils d’accessibilité (VoiceOver par exemple). Il est aussi possible de forcer certains éléments à être visibles aux outils d’accessibilité.  
  
-	`AccessibilityElement` : booléen qui permet d’indiquer qu’un élément est visible ou non de l’API d’accessibilité (de VoiceOver ou autre).
-	`AccessibilityElementIsHidden` : booléen qui permet d’indiquer que les éléments fils de l’élément cible sont visibles ou non de l’API d’accessibilité.
-	`AccessibilityViewIsModal` : booléen qui permet de rendre visible ou non les éléments frères de l’élément cible à l’API d’accessibilité. Très utile pour rendre accessible des popin custom par exemple.  
  
L’attribut `accessibilityElement` est disponible via l’interface builder, mais est également utilisable directement via le code. Les deux autres attributs sont utilisables uniquement via le code.

**Exemples : **

Exemple simple :   
`pageControl.isAccessibilityElement = true`

Exemple d'alerte custom accessible :  
<pre><code class="swift">@IBAction func displayCustomAlert() {
	popUpVIew.hidden = false //La vue a été créée au préalable, on ne fait que l'afficher et la rendre accessible
	popUpVIew.accessibilityViewIsModal = true //Empêche l'accessibilité de voir ce qui est "derrière" l'alerte
	popUpVIew.frame = CGRectMake(0, 0, UIScreen.mainScreen().bounds.width, UIScreen.mainScreen().bounds.height) //Le filtre modal de l'alerte prend tout l'écran

	let window = UIApplication.sharedApplication().keyWindow
	window?.addSubview(popUpVIew)

	UIAccessibilityPostNotification(UIAccessibilityScreenChangedNotification, popUpVIew) //On informe l'accessibilité de l'affichage de l'alerte afin que celle-ci soit focus si VoiceOver est actif
}</code></pre>

**Liens : **     

- [accessibilityElement](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIAccessibility_Protocol/#//apple_ref/occ/instp/NSObject/isAccessibilityElement)
- [accessibilityElementIsHidden](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIAccessibility_Protocol/#//apple_ref/occ/instp/NSObject/accessibilityElementsHidden)
- [accessibilityViewIsModal](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIAccessibility_Protocol/#//apple_ref/occ/instp/NSObject/accessibilityViewIsModal)


## Déclencher une vocalisation

**Description : **  

Il est très facile de déclencher des vocalisations avec VoiceOver. Attention, nous parlons de vocalisation avec VoiceOver (ce qui implique que VoiceOver soit activé) et pas de TTS (<span lang="en">Text To Speech</span>) (qui fonctionne indépendamment de l'activation ou non de VoiceOver).  

Pour déclencher une vocalisation, il faut envoyer une notification à l’API d’accessibilité via la méthode `UIAccessibilityPostNotification`  avec en paramètre la notification permettant de déclencher une vocalisation `UIAccessibilityAnnouncementNotification` et la chaine de caractère à vocaliser.    
 
La vocalisation se fait dans la langue du système.

**Exemple : **

`UIAccessibilityPostNotification(UIAccessibilityAnnouncementNotification, speakString);`

**Liens : **

- [UIAccessibilityPostNotification](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIKitFunctionReference/index.html#//apple_ref/c/func/UIAccessibilityPostNotification)
- [UIAccessibilityAnnouncementNotification](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIAccessibility_Protocol/#//apple_ref/c/data/UIAccessibilityAnnouncementNotification)


## Connaitre l'état des options d'accessibilité

**Description : ** 

Sous iOS, il est possible de connaitre les statuts des options d’accessibilité. Est-ce que VoiceOver est activé ? Est-ce que le mode audio-mono est activé ? Plusieurs fonctions permettent de connaitre ces valeurs. Ces fonctions font partie du `UIKit` framework.  

La plus utile de ces fonctions est certainement `UIAccessibilityIsVoiceOverRunning` qui permet de savoir si VoiceOver est activé au moment de l’appel.

**Exemple : ** 

`UIAccessibilityIsVoiceOverRunning() ? 1 : 0`

**Liens : **

- [UIAccessibilityIsVoiceOverRunning](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIKitFunctionReference/#//apple_ref/c/func/UIAccessibilityIsVoiceOverRunning)
- [UIAccessibilityIsClosedCaptioningEnabled](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIKitFunctionReference/#//apple_ref/c/func/UIAccessibilityIsClosedCaptioningEnabled)
- [UIAccessibilityIsMonoAudioEnabled](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIKitFunctionReference/#//apple_ref/c/func/UIAccessibilityIsMonoAudioEnabled)
- [UIAccessibilityIsBoldTextEnabled](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIKitFunctionReference/#//apple_ref/c/func/UIAccessibilityIsBoldTextEnabled)
- [UIAccessibilityDarkerSystemColorsEnabled](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIKitFunctionReference/#//apple_ref/c/func/UIAccessibilityDarkerSystemColorsEnabled)
- [UIAccessibilityIsGrayscaleEnabled](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIKitFunctionReference/#//apple_ref/c/func/UIAccessibilityIsGrayscaleEnabled)
- [UIAccessibilityIsGuidedAccessEnabled](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIKitFunctionReference/#//apple_ref/c/func/UIAccessibilityIsGuidedAccessEnabled)
- [UIAccessibilityIsInvertColorsEnabled](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIKitFunctionReference/#//apple_ref/c/func/UIAccessibilityIsInvertColorsEnabled)
- [UIAccessibilityIsReduceMotionEnabled](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIKitFunctionReference/#//apple_ref/c/func/UIAccessibilityIsReduceMotionEnabled)
- [UIAccessibilityIsReduceTransparencyEnabled](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIKitFunctionReference/#//apple_ref/c/func/UIAccessibilityIsReduceTransparencyEnabled)
- [UIAccessibilityIsSpeakScreenEnabled](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIKitFunctionReference/#//apple_ref/c/func/UIAccessibilityIsSpeakScreenEnabled)
- [UIAccessibilityIsSpeakSelectionEnabled](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIKitFunctionReference/#//apple_ref/c/func/UIAccessibilityIsSpeakSelectionEnabled)
- [UIAccessibilityIsSwitchControlRunning](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIKitFunctionReference/#//apple_ref/c/func/UIAccessibilityIsSwitchControlRunning)

## Informer d'une modification sur la page

**Description : **

Lors d’un changement de contenu sur une page, il est possible de notifier l’API d’accessibilité de ce changement à travers différentes notifications. Pour ce faire, il faut envoyer une notification de modification à l’API d’accessibilité via la méthode `UIAccessibilityPostNotification`.  

Il existe plusieurs notifications de modification, mais les deux plus utiles sont :
- `UIAccessibilityLayoutChangedNotification` : permet de spécifier à l’API d’accessibilité qu’une partie de la page a été modifiée.
- `UIAccessibilityScreenChangedNotification` : permet d’annoncer un changement global de la page.  

À l’usage, il existe une petite différence entre les deux. `UIAccessibilityLayoutChangedNotification` accepte une `NSString` ou un `UIObject`. Avec le premier paramètre, la notification se comporte comme une `UIAccessibilityAnnouncementNotification` et lance une vocalisation VoiceOver. Avec le second, le focus est repositionné sur l’élément de notre choix.  

`UIAccessibilityScreenChangedNotification` accepte soit `nil`, soit l’élément qui doit recevoir le focus.

**Exemples : **
 
<pre><code class="objectivec">UIAccessibilityPostNotification(UIAccessibilityLayoutChangedNotification, @"speakString");
UIAccessibilityPostNotification(UIAccessibilityLayoutChangedNotification, aViewObject);

UIAccessibilityPostNotification(UIAccessibilityScreenChangedNotification, nil);
UIAccessibilityPostNotification(UIAccessibilityScreenChangedNotification, aViewObject);</code></pre>

**Liens : **

- [UIAccessibilityPostNotification](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIKitFunctionReference/index.html#//apple_ref/c/func/UIAccessibilityPostNotification)
- [UIAccessibilityLayoutChangedNotification](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIAccessibility_Protocol/index.html#//apple_ref/c/data/UIAccessibilityLayoutChangedNotification)
- [UIAccessibilityScreenChangedNotification](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIAccessibility_Protocol/index.html#//apple_ref/c/data/UIAccessibilityScreenChangedNotification)
- [UIAccessibilityPageScrolledNotification](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIAccessibility_Protocol/index.html#//apple_ref/c/data/UIAccessibilityPageScrolledNotification)


## Modifier la langue de vocalisation

**Description : **  

Afin de modifier la langue de prononciation de VoiceOver pour un mot ou un texte, il existe l’attribut `accessibilityLanguage`. Disponible via le protocole `UIAccessibility`, cet attribut permet de redéfinir la langue de prononciation d’un texte. Par exemple, si on utilise cet attribut sur un `UILabel`, alors celui-ci sera vocalisé par VoiceOver dans la nouvelle langue donnée en valeur de l’attribut.

**Exemple : ** 

`cell.textLabel?.accessibilityLanguage = "en_EN"`

**Lien : **      

- [accessibilityLanguage](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIAccessibility_Protocol/#//apple_ref/occ/instp/NSObject/accessibilityLanguage)


## Modifier la zone de focus de VoiceOver

**Description : **  

Dans le cas d’objet modifié dynamiquement ou d’élément ne dérivant pas de `UIView`, il est possible de déterminer la zone géographique d’accessibilité de cet élément, c'est-à-dire la zone que VoiceOver met en surbrillance lors du focus.  

- `AccessibilityFrame` : permet de définir cette zone via un rectangle (`CGRect`). Par défaut pour un élément dérivant de `UIView`, cette zone est la partie « visible » de la vue.
- `AccessibilityPath` : équivalent à `AccessibilityFrame` mais permet de définir la zone via des courbes de Bézier.
- `AccessibilityActivationPoint` : le « point » d’activation d’un élément pour les outils d’accessibilité. Par défaut, ce point est au centre de l’élément.

**Liens : **

- [AccessibilityFrame](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIAccessibility_Protocol/#//apple_ref/occ/instp/NSObject/accessibilityFrame)
- [AccessibilityPath](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIAccessibility_Protocol/#//apple_ref/occ/instp/NSObject/accessibilityPath)
- [AccessibilityActivationPoint](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIAccessibility_Protocol/#//apple_ref/occ/instp/NSObject/accessibilityActivationPoint)


## Grouper des éléments

**Description : **  

L'attribut `shouldGroupAccessibilityChildren` est un booléen qui permet d’indiquer à VoiceOver qu’il doit grouper les enfants de la vue qui porte l’attribut. Cela permet notamment de faire des vocalisations uniques ou de définir un ordre de lecture VoiceOver particulier pour une partie de la page seulement (voir la section « ordre de lecture »).

**Exemple : ** 

Très pratique quand on veut redéfinir l'ordre de lecture VoiceOver, ici sur une cellule de tableau qui comporte des éléments de formulaire :  
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

**Lien : **      

- [shouldGroupAccessibilityChildren](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIAccessibility_Protocol/#//apple_ref/occ/instp/NSObject/shouldGroupAccessibilityChildren)

## Evènements d'accessibilité

**Description : **  

Le système iOS envoie un certain nombre d’évènements d’accessibilité à destination des applications. Ces événements sont envoyés lors de la modification des options d’accessibilité. Par exemple, si VoiceOver est désactivé durant l’utilisation de l’application, celle-ci recevra l’évènement `UIAccessibilityVoiceOverStatusChanged`. Cela est très utile couplé à la fonction `UIAccessibilityIsVoiceOverRunning`.  

Imaginons que nous ayons un traitement particulier quand VoiceOver est activé. Ceci est détecté grâce à la fonction `UIAccessibilityIsVoiceOverRunning`. Mais que se passe-t-il si VoiceOver est désactivé alors que ce traitement a déjà eu lieu ? C’est là que les évènements système peuvent être utilisés. En restant à l’écoute de ces évènements, il est possible d’appliquer des traitements particuliers de manière dynamique.

**Exemple : ** 

Ici, on appelle le sélecteur "voiceOverStatusDidChange" au moment ou le status change :  
`NSNotificationCenter.defaultCenter().addObserver(self, selector: "voiceOverStatusDidChange:", name: UIAccessibilityVoiceOverStatusChanged, object: nil)`

**Lien : **      

- [UIAccessibilityVoiceOverStatusChanged](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIAccessibility_Protocol/#//apple_ref/c/data/UIAccessibilityVoiceOverStatusChanged)
- [UIAccessibilityClosedCaptioningStatusDidChangeNotification](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIAccessibility_Protocol/#//apple_ref/c/data/UIAccessibilityClosedCaptioningStatusDidChangeNotification)
- [UIAccessibilityMonoAudioStatusDidChangeNotification](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIAccessibility_Protocol/#//apple_ref/c/data/UIAccessibilityMonoAudioStatusDidChangeNotification)
- [UIAccessibilityAnnouncementDidFinishNotification](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIAccessibility_Protocol/#//apple_ref/c/data/UIAccessibilityAnnouncementDidFinishNotification)
- [UIAccessibilityGuideAccessStatusDidChangeNotification](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIAccessibility_Protocol/#//apple_ref/c/data/UIAccessibilityAnnouncementDidFinishNotification)
- [UIAccessibilityInvertColorsStatusDidChangeNotification](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIAccessibility_Protocol/#//apple_ref/c/data/UIAccessibilityInvertColorsStatusDidChangeNotification)
- [UIAccessibilityDarkerSystemColorsStatusDidChangeNotification](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIAccessibility_Protocol/#//apple_ref/c/data/UIAccessibilityDarkerSystemColorsStatusDidChangeNotification)
- [UIAccessibilityGrayscaleStatusDidChangeNotification](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIAccessibility_Protocol/#//apple_ref/c/data/UIAccessibilityGrayscaleStatusDidChangeNotification)
- [UIAccessibilityBoldTextStatusDidChangeNotification](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIAccessibility_Protocol/#//apple_ref/c/data/UIAccessibilityBoldTextStatusDidChangeNotification)

## Taille des textes

**Description : **  

La gestion des polices dynamiques sous iOS est complexe. Il est possible depuis iOS7 d’utiliser une API permettant de rendre la taille des textes de son application dynamiquement modifiable à l’aide du paramétrage du téléphone. Si on résume cette API, il faut :  

 - Utiliser les polices système pour les textes de l’application, `[UIFont preferredFontForTextStyle:UIFontTextStyle…]`. Il est aussi possible de définir ses propres polices dérivées de la classe `UIFont`.
- Traiter l’évènement signalant le changement de la taille du texte dans les paramètres du téléphone `UIContentSizeCategoryDidChangeNotification`, `[[NSNotificationCenter defaultCenter] addObserver:… selector:@selector(…) name: UIContentSizeCategoryDidChangeNotification object:…];`
- Lors du traitement de l’évènement signalant le changement de taille, il faut réafficher les éléments concernés.</li>  

Il faut aussi faire attention à ce que les conteneurs s’adaptent à leur contenu : utiliser les contraintes est le meilleur moyen de réaliser cette tâche.

**Lien : **

- [Dynamic Type API](https://developer.apple.com/library/ios/documentation/StringsTextFonts/Conceptual/TextAndWebiPhoneOS/CustomTextProcessing/CustomTextProcessing.html#//apple_ref/doc/uid/TP40009542-CH4-SW65)


## Ordre de lecture

**Description : ** 

Redéfinir l’ordre de lecture VoiceOver s’effectue en respectant le protocole `UIAccessibilityContainer`. L’idée est d’avoir un tableau des éléments de la vue qui définit l’ordre de lecture des éléments. Il est bien souvent nécessaire d’utiliser l’attribut `shouldGroupAccessibilityElement` afin d’avoir un ordre précis, mais pour une partie seulement de la vue (le reste étant l’ordre naturel de lecture).

**Exemple : ** 

Cellule de tableau qui comporte des éléments de formulaire :  
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

**Lien : **

- [UIAccessibilityContainer](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIAccessibilityContainer_Protocol/)
<!--  This file is part of a11y-guidelines | Our vision of mobile & web accessibility guidelines and best practices, with valid/invalid examples.
 Copyright (C) 2016  Orange SA
 See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). -->