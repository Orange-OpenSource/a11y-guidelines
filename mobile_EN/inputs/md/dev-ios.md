# iOS developer guide

<script>$(document).ready(function () {
    
    setBreadcrumb([{"label":"Developer guide", "url": "./dev-mobile.html"},
        {"label":"iOS developer guide"}
	]);
    addSubMenu([
        {"label":"Android guide","url":"dev-android.html"}, 
        {"label":"iOS guide","url":"dev-mobile.html", "expanded": true}
    ]);        
});</script>

<span data-menuitem="dev-mobile"></span>

This guide aims to present the various iOS SDK accessibility options. Through different categories, this guide explains how to use the accessibility attributes / methods and provides links to the official documentation from Apple. Code snippets are also available to show you how to implement it (mostly in Swift).

## Text alternatives
**Description: **  

On iOS, the vocalization of an element is done through four attributes: `label`, `hint`, `value` and `trait`.
The order of vocalization is always as follows: `label`, `value`, `trait` and `hint`. This order cannot be changed and the vocalization is performed only once.

A section of this guide is dedicated to the trait, we describe here the other three:
- `AccessibilityLabel`: the `label` redefines the text read by VoiceOver. This allows a component to be more explicit than the text displayed on the screen. For example, for a button whose title is "OK", this attribute can indicate that the button is used to confirm an action.
- `AccessibilityValue`: the `value` of an element is by default the completion percentage (e.g. a progress bar percentage). Note that for most elements available in the SDK, this value does not need to be set (the system automatically sets the value).
- `AccessibilityHint`: the` hint` describes the component behavior. Example: "click here to get the result".

These accessibility attributes are available via the builder interface but also programatically. Anything inheriting from `UIView` has these attributes by default. These attributes accept an optional string, and are therefore easily localizable.
 
**Examples: **   

Simple example (localized):  
`accordionHeaderView.accessibilityHint = "example_elementState_foldArea_open_accessibilityHint".localized`

Example of custom tabs indicating their trait and state:  
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

**Links: **

- [accessibilityLabel](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIAccessibility_Protocol/#//apple_ref/occ/instp/NSObject/accessibilityLabel)
- [accessibilityValue](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIAccessibility_Protocol/#//apple_ref/occ/instp/NSObject/accessibilityValue)
- [accessibilityHint](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIAccessibility_Protocol/#//apple_ref/occ/instp/NSObject/accessibilityHint)


## Element trait

**Description:**  

The `accessibilityTraits` attribute allows to specify the trait of an element to the accessibility API. Thus, it is possible to make a list item be considered as a button because it is clickable. Therefore, the `accessibilityTrait` attribute plays an important role on the element vocalization because the trait is vocalized by VoiceOver.  
 
This accessibility attribute is available via the builder interface but also programmatically.

There are many available traits. The more commonly used are:  
- `AccessibilityTraitNone`: removes any semantic value to the element.
- `AccessibilityTraitButton`: adds the "button" trait, the element is seen as a button by VoiceOver.
- `AccessibilityTraitLink`: useful to define a label as a "link".
- `AccessibilityTraitHeader`: defines an element as a header (for more information, see the "titles and headers" section).
- `AccessibilityTraitAdjustable`: defines an element as an "adjustable" element, that is to say an element that users can adjust in a continuous manner, such as a slider or a picker view.

**Examples: **   

Example with a `UIPageControl` and the 'adjustable' trait:  
`pageControl.accessibilityTraits = UIAccessibilityTraitAdjustable`

Example with a `header` trait :  
`defaultHeaderViewCell.accessibilityTraits = UIAccessibilityTraitHeader`

We can also combine traits:  
`onePageButton.accessibilityTraits = UIAccessibilityTraitButton + UIAccessibilityTraitSelected`

**Link: **     

- [accessibilityTraits](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIAccessibility_Protocol/#//apple_ref/doc/constant_group/Accessibility_Traits)


## Hide elements from accessibility

**Description: **  

It is possible via an accessibility attribute to hide elements from accessibility tools (e.g. VoiceOver). By extension, it is possible to force some elements to be visible to accessibility tools.
  
- `AccessibilityElement`: boolean to specify that an element is visible or not to the Accessibility API (VoiceOver or other).
- `AccessibilityElementIsHidden`: boolean to indicate that the children elements of the target element are visible or not to the Accessibility API.
- `AccessibilityViewIsModal`: boolean that can make visible or not the sibling elements of the target element to the Accessibility API. Very useful for making accessible custom popin for example.
  
The `accessibilityElement` attribute is available via the interface builder but can also be used directly through the code. The other two attributes are available only through the code.

**Examples: **

Simple example:   
`pageControl.isAccessibilityElement = true`

Example of an accessible custom alert:  
<pre><code class="swift">@IBAction func displayCustomAlert() {
	popUpVIew.hidden = false //The view has been created before, we only make it visible and accessible
	popUpVIew.accessibilityViewIsModal = true //Prevent VoiceOver seeing what is behind the popin
	popUpVIew.frame = CGRectMake(0, 0, UIScreen.mainScreen().bounds.width, UIScreen.mainScreen().bounds.height) //The modal filter of the alert covers the hole screen

	let window = UIApplication.sharedApplication().keyWindow
	window?.addSubview(popUpVIew)

	UIAccessibilityPostNotification(UIAccessibilityScreenChangedNotification, popUpVIew) //We notify that a popin is shown in order to be focused by VoiceOver, if enabled
}</code></pre>

**Links: **     

- [accessibilityElement](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIAccessibility_Protocol/#//apple_ref/occ/instp/NSObject/isAccessibilityElement)
- [accessibilityElementIsHidden](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIAccessibility_Protocol/#//apple_ref/occ/instp/NSObject/accessibilityElementsHidden)
- [accessibilityViewIsModal](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIAccessibility_Protocol/#//apple_ref/occ/instp/NSObject/accessibilityViewIsModal)


## Trigger a vocalization

**Description: **  

It is very easy to trigger vocalizations with VoiceOver. Note that we are talking about VoiceOver vocalization and not TTS (Text To Speech) that can operate whether VoiceOver is on or off. 

To trigger a vocalization, just call the `UIAccessibilityPostNotification` method passing the notification allowing to trigger a vocalization (`UIAccessibilityAnnouncementNotification`) and the string to vocalize as parameters.

Note: the vocalization is done in the system language.

**Example: **

`UIAccessibilityPostNotification(UIAccessibilityAnnouncementNotification, speakString);`

**Links : **

- [UIAccessibilityPostNotification](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIKitFunctionReference/index.html#//apple_ref/c/func/UIAccessibilityPostNotification)
- [UIAccessibilityAnnouncementNotification](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIAccessibility_Protocol/#//apple_ref/c/data/UIAccessibilityAnnouncementNotification)


## Check accessibility options state

**Description: ** 

On iOS, it is possible to check the accessibility options state. Is VoiceOver activated? Is the audio-mono mode activated? Several methods can help you to check with that. They are part of the `UIKit` framework.  

The most useful method is `UIAccessibilityIsVoiceOverRunning` which allows to know wether VoiceOver is activated.

**Exemple: ** 

`UIAccessibilityIsVoiceOverRunning() ? 1 : 0`

**Links: **

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

## Notify a content change

**Description: **

When there is a content change in the current page, it is possible to notify the accessibility API using several types of notifications. To do that, we must send the change notification to the accessibility API using the following method: `UIAccessibilityPostNotification`.  

There are several types of change notification but the two most commonly used are:
- `UIAccessibilityLayoutChangedNotification`: notifies that a part of the page has changed.
- `UIAccessibilityScreenChangedNotification` : notifies that the whole page has changed.  

There is a small difference between them. We can pass a `NSString` or a `UIObject` to the `UIAccessibilityLayoutChangedNotification` method. With a `NSString` it behaves like a `UIAccessibilityAnnouncementNotification` and triggers a VoiceOver vocalization. With a `UIObject` the focus is set on the `UIObject`.  

`UIAccessibilityScreenChangedNotification`'s parameter can be either `nil` or the elements to set the focus on.

**Examples: **
 
<pre><code class="objectivec">UIAccessibilityPostNotification(UIAccessibilityLayoutChangedNotification, @"speakString");
UIAccessibilityPostNotification(UIAccessibilityLayoutChangedNotification, aViewObject);

UIAccessibilityPostNotification(UIAccessibilityScreenChangedNotification, nil);
UIAccessibilityPostNotification(UIAccessibilityScreenChangedNotification, aViewObject);</code></pre>

**Links: **

- [UIAccessibilityPostNotification](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIKitFunctionReference/index.html#//apple_ref/c/func/UIAccessibilityPostNotification)
- [UIAccessibilityLayoutChangedNotification](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIAccessibility_Protocol/index.html#//apple_ref/c/data/UIAccessibilityLayoutChangedNotification)
- [UIAccessibilityScreenChangedNotification](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIAccessibility_Protocol/index.html#//apple_ref/c/data/UIAccessibilityScreenChangedNotification)
- [UIAccessibilityPageScrolledNotification](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIAccessibility_Protocol/index.html#//apple_ref/c/data/UIAccessibilityPageScrolledNotification)


## Change the vocalization language

**Description: **  

To change the vocalization language of VoiceOver for a word or a sentence, one can use the `accessibilityLanguage` attribute. Available using the `UIAccessibility`, this attributes allows to specify a language for a specific text. E.g. if we use this attribute on a `UILabel`, it will be vocalized by VoiceOver in the language set on this attribute.

**Exemple: ** 

`cell.textLabel?.accessibilityLanguage = "fr_FR"`

**Link: **      

- [accessibilityLanguage](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIAccessibility_Protocol/#//apple_ref/occ/instp/NSObject/accessibilityLanguage)


## Modify the focus area of VoiceOver

**Description: **  

In the case of dynamically modified element or component not inheriting from `UIView`, it is possible to modify the focus area of accessibility of this element, i.e. the area VoiceOver highlights when focusing an element.

- `AccessibilityFrame`: sets the area via a rectangle (`CGRect`). Generally, for an element inheriting from `UIView`, this area is the "visible" part of the view.
- `AccessibilityPath`: equivalent to `AccessibilityFrame` but sets the area via Bezier curves.
- `AccessibilityActivationPoint`: the activation "point" of an element for accessibility tools. By default, this point is at the center of the element.

**Links: **

- [AccessibilityFrame](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIAccessibility_Protocol/#//apple_ref/occ/instp/NSObject/accessibilityFrame)
- [AccessibilityPath](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIAccessibility_Protocol/#//apple_ref/occ/instp/NSObject/accessibilityPath)
- [AccessibilityActivationPoint](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIAccessibility_Protocol/#//apple_ref/occ/instp/NSObject/accessibilityActivationPoint)


## Grouping elements

**Description: **  

The `shouldGroupAccessibilityChildren` attribute is a Boolean that indicates if VoiceOver must group its view children. This allows making unique vocalizations or define a particular VoiceOver reading order for a part of the page (see "Reading order" section).

**Example: ** 

Very useful when we want the customize the VoiceOver reading order, like here on a table cell containing form data:  
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

**Link: **      

- [shouldGroupAccessibilityChildren](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIAccessibility_Protocol/#//apple_ref/occ/instp/NSObject/shouldGroupAccessibilityChildren)

## Accessibility events

**Description: **  

iOS sends several accessibility events to the applications. They are sent when accessibility options are changed. For example, if VoiceOver is deactivated, the running applications will receive the `UIAccessibilityVoiceOverStatusChanged` event. This is very useful when used simultaneously with `UIAccessibilityIsVoiceOverRunning`.

Let's say the application behaves differently when VoiceOver is turned on. This is detected by the `UIAccessibilityIsVoiceOverRunning` method. What happens if VoiceOver is disabled? This is when the system events can be used. By listening to these events, it is possible to dynamically change how the application behaves.

**Example: ** 

We call the "voiceOverStatusDidChange" method when the VoiceOver state changes:  
`NSNotificationCenter.defaultCenter().addObserver(self, selector: "voiceOverStatusDidChange:", name: UIAccessibilityVoiceOverStatusChanged, object: nil)`

**Link: **      

- [UIAccessibilityVoiceOverStatusChanged](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIAccessibility_Protocol/#//apple_ref/c/data/UIAccessibilityVoiceOverStatusChanged)
- [UIAccessibilityClosedCaptioningStatusDidChangeNotification](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIAccessibility_Protocol/#//apple_ref/c/data/UIAccessibilityClosedCaptioningStatusDidChangeNotification)
- [UIAccessibilityMonoAudioStatusDidChangeNotification](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIAccessibility_Protocol/#//apple_ref/c/data/UIAccessibilityMonoAudioStatusDidChangeNotification)
- [UIAccessibilityAnnouncementDidFinishNotification](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIAccessibility_Protocol/#//apple_ref/c/data/UIAccessibilityAnnouncementDidFinishNotification)
- [UIAccessibilityGuideAccessStatusDidChangeNotification](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIAccessibility_Protocol/#//apple_ref/c/data/UIAccessibilityAnnouncementDidFinishNotification)
- [UIAccessibilityInvertColorsStatusDidChangeNotification](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIAccessibility_Protocol/#//apple_ref/c/data/UIAccessibilityInvertColorsStatusDidChangeNotification)
- [UIAccessibilityDarkerSystemColorsStatusDidChangeNotification](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIAccessibility_Protocol/#//apple_ref/c/data/UIAccessibilityDarkerSystemColorsStatusDidChangeNotification)
- [UIAccessibilityGrayscaleStatusDidChangeNotification](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIAccessibility_Protocol/#//apple_ref/c/data/UIAccessibilityGrayscaleStatusDidChangeNotification)
- [UIAccessibilityBoldTextStatusDidChangeNotification](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIAccessibility_Protocol/#//apple_ref/c/data/UIAccessibilityBoldTextStatusDidChangeNotification)

## Text size

**Description: **  

Dynamic font size on iOS is very tricky. Since iOS7, it is possible to use an API to make the text size dynamic according to the phone settings. If we summarize this API, you must:

 - Use the system fonts for the application, `[UIFont preferredFontForTextStyle:UIFontTextStyle…]`. You can also use custom fonts only if they inherit from `UIFont`.
 - Listen the font size settings change events `UIContentSizeCategoryDidChangeNotification`, `[[NSNotificationCenter defaultCenter] addObserver:… selector:@selector(…) name: UIContentSizeCategoryDidChangeNotification object:…];`
 - When handling the font size change event, you must redisplay the affected elements.</li>  

We must also be careful that the containers fit their content: using constraints is the best way to perform this task.

**Link: **

- [Dynamic Type API](https://developer.apple.com/library/ios/documentation/StringsTextFonts/Conceptual/TextAndWebiPhoneOS/CustomTextProcessing/CustomTextProcessing.html#//apple_ref/doc/uid/TP40009542-CH4-SW65)


## Reading order

**Description: ** 

Redefining the VoiceOver reading order is done using the `UIAccessibilityContainer` protocol. The idea is to have a table of elements that defines the reading order of the elements. It is often very useful to use the `shouldGroupAccessibilityElement` attribute so we have a precise order but for a part if the view only (the rest of the view will be read using the 'logical' order)

**Example: ** 

Table cell containing form elements:  
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

**Link: **

- [UIAccessibilityContainer](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIAccessibilityContainer_Protocol/)
<!--  This file is part of a11y-guidelines | Our vision of mobile & web accessibility guidelines and best practices, with valid/invalid examples.
 Copyright (C) 2016  Orange SA
 See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). -->