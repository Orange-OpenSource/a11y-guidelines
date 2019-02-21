# iOS developer guide

<script>$(document).ready(function () {
    
    setBreadcrumb([{"label":"Developer guide", "url": "./dev-mobile.html"},
        {"label":"iOS developer guide"}
	]);
    addSubMenu([
        {"label":"Android guide","url":"dev-android.html"}, 
        {"label":"iOS guide","url":"dev-mobile.html", "expanded": true},
        {"label":"iOS WWDC","url":"dev-ios-wwdc.html"}
    ]);        
});</script>

<span data-menuitem="dev-mobile"></span>

This guide aims to present the various iOS <abbr>SDK</abbr> accessibility options.
</br>Through different categories, this guide explains how to use the accessibility attributes&nbsp;/ methods and provides links to the [`official documentation from Apple`](https://developer.apple.com/documentation/uikit/accessibility).
</br>Code snippets are also available to show you how to implement it (Swift 4.2, Objective C).

## Text alternatives
### Description 
On iOS, the vocalization of an element is done through four attributes: `label`, `hint`, `value` and `trait`.
The order of vocalization is always as follows: `label`, `value`, `trait` and `hint`. This order cannot be changed and the vocalization is performed only once.

A section of this guide is dedicated to the trait, we describe here the other three:
- **accessibilityLabel**&nbsp;: the `label` redefines the text read by VoiceOver. This allows a component to be more explicit than the text displayed on the screen. For example, for a button whose title is “OK”, this attribute can indicate that the button is used to confirm an action.
- **accessibilityValue**&nbsp;: the `value` of an element is by default the completion percentage (e.g. a progress bar percentage). Note that for most elements available in the <abbr>SDK</abbr>, this value does not need to be set (the system automatically sets the value).
- **accessibilityHint**&nbsp;: the `hint` describes the component’s behaviour. Example: “click here to get the result”.

These accessibility attributes are available via the builder interface but also programmatically. Anything inheriting from `UIView` has these attributes by default. These attributes accept an optional string, and are therefore easily localizable.
 
### Example  
<pre><code class="objective-c">
@interface ChangeTextView() {
    
    __weak IBOutlet UILabel * myLabel;
    __weak IBOutlet UIProgressView * myProgressView;
}
@end

@implementation ChangeTextView

- (void)viewDidAppear:(BOOL)animated {
    [super viewDidAppear:animated];
    
    myLabel.accessibilityLabel = @"hello";
    myLabel.accessibilityHint = @"This is an added comment.";
    
    myProgressView.accessibilityValue = @"45 per cent";
}
@end
</code></pre><pre><code class="swift">
class ChangeTextView: UIViewController {

    @IBOutlet weak var myLabel: UILabel!
    @IBOutlet weak var myProgressView: UIProgressView!
    
    override func viewDidAppear(_ animated: Bool) {
        super.viewDidAppear(animated)
        
        myLabel.accessibilityLabel = "hello"
        myLabel.accessibilityHint = "This is an added comment."
        
        myProgressView.accessibilityValue = "45 per cent"
        
    }
}
</code></pre>
### Links
- [`accessibilityLabel`](https://developer.apple.com/documentation/objectivec/nsobject/1615181-accessibilitylabel)
- [`accessibilityValue`](https://developer.apple.com/documentation/objectivec/nsobject/1615117-accessibilityvalue)
- [`accessibilityHint`](https://developer.apple.com/documentation/objectivec/nsobject/1615093-accessibilityhint)

## Element trait
### Description
The `accessibilityTraits` attribute allows to specify the trait of an element to the accessibility <abbr>API</abbr>. Thus, it is possible to make a list item be considered as a button because it is clickable. Therefore, the `accessibilityTrait` attribute plays an important role on the element vocalization because the trait is vocalized by VoiceOver.  
 
This accessibility attribute is available via the builder interface but also programmatically.

There are many available traits. The more commonly used are:  
- **accessibilityTraitNone**&nbsp;: removes any semantic value to the element.
- **accessibilityTraitButton**&nbsp;: adds the “button” trait, the element is seen as a button by VoiceOver.
- **accessibilityTraitLink**&nbsp;: useful to define a label as a “link”.
- **accessibilityTraitHeader**&nbsp;: defines an element as a header (see the <a href="criteria-ios.html#title-and-header">«&nbsp;Title and header&nbsp;»</a> section).
- **accessibilityTraitAdjustable**&nbsp;: defines an element as an “adjustable” element, that is to say an element that users can adjust in a continuous manner, such as a slider or a picker view (see <a href="https://help.apple.com/iphone/9/#/iph3e2e2281">VoiceOver gestures documentation</a>).
### Example
<pre><code class="objective-c">
- (void)customTraits() {
    //Specified UIPageControl with the ’ajustable’ trait.
    pageControl.accessibilityTraits = UIAccessibilityTraitAdjustable;
    
    //Added header.  
    defaultHeaderViewCell.accessibilityTraits = UIAccessibilityTraitHeader;
}
</code></pre><pre><code class="swift">
func customTraits() {
    //Specified UIPageControl with the ’ajustable’ trait.
    pageControl.accessibilityTraits = .adjustable
    
    //Added header.  
    defaultHeaderViewCell.accessibilityTraits = .header
}
</code></pre>
### Basic operations
This attribute is actually a `bitmask` in which each element has its own value.
</br><img alt="" style="max-width: 600px; height: auto; " src="./images/iOSdev/Traits.png" />
</br>It's then possible to add and remove some `traits` after having checked their existence in the bitmask for instance.

<pre><code class="objective-c">
- (void)changeTraits {

    //Dedicated trait set with no other option.
    onePageButton.accessibilityTraits = UIAccessibilityTraitButton | UIAccessibilityTraitLink;
    
    //Added traits to the existing ones.
    pageControl.accessibilityTraits |= UIAccessibilityTraitHeader; //Only one trait.
    pageControl.accessibilityTraits |= UIAccessibilityTraitButton + UIAccessibilityTraitLink; //Many traits.
    
    //Remove a trait.
    onePageButton.accessibilityTraits &= ~UIAccessibilityTraitLink;
    
    //Check out the bitmask trait existence.
    if ((pageControl.accessibilityTraits & UIAccessibilityTraitHeader) != 0) {
        // Do the job if '.header' is one of the traits...
    }
}
</code></pre><pre><code class="swift">
func changeTraits() {
        
    //Dedicated trait set with no other option.
    onePageButton.accessibilityTraits = [.button, .link]
        
    //Added traits to the existing ones.
    pageControl.accessibilityTraits.insert(.header) //Only one trait.
    pageControl.accessibilityTraits.formUnion([.button, .link]) //Many traits.
        
    //Remove a trait.
    onePageButton.accessibilityTraits.remove(.link)
        
    //Check out the bitmask trait existence.
    if (pageControl.accessibilityTraits.rawValue & UIAccessibilityTraits.header.rawValue == UIAccessibilityTraits.header.rawValue) {
        // Do the job if '.header' is one of the traits...
    }
}
</code></pre>
### Link
- [`accessibilityTraits`](https://developer.apple.com/documentation/objectivec/nsobject/1615202-accessibilitytraits)

## Hide elements from accessibility
### Description
It is possible via an accessibility attribute to hide elements from accessibility tools (e.g. VoiceOver). By extension, it is possible to force some elements to be visible to accessibility tools.
  
- **isAccessibilityElement**&nbsp;: boolean to specify that an element is visible or not to the Accessibility <abbr>API</abbr> (VoiceOver or other).
- **accessibilityElementsHidden**&nbsp;: boolean to indicate that the children elements of the target element are visible or not to the Accessibility <abbr>API</abbr>.
- **accessibilityViewIsModal**&nbsp;: boolean that can make visible or not the sibling elements of the target element to the Accessibility <abbr>API</abbr>.
</br>A [theoretical explanation](./dev-ios-wwdc-18230.html#accessibilityViewIsModal) and a [practical example](./dev-ios-wwdc-18230.html#DemoModalView) are provided in a video detailed in the WWDC part.
  
The `accessibilityElement` attribute is available via the interface builder but can also be used directly through the code. The other two attributes are available only through the code.
### Example
A red square will be drawn and contain two other squares (blue and yellow) in order to apply the attributes defined hereabove.

<img alt="" style="max-width: 500px; height: auto; " src="./images/iOSdev/MasquerDesElements_1.png" />
<pre><code class="objective-c">
- (void)viewDidAppear:(BOOL)animated {
    [super viewDidAppear:animated];
    
    //Creation of an element inside which 2 other children elements will be inserted.
    CGRect redParentViewRect = CGRectMake(100.0, 100.0, 40.0, 40.0);
    UIView * myRedParentView = [[UIView alloc]initWithFrame:redParentViewRect];
    myRedParentView.backgroundColor = [UIColor redColor];
    
    [self.view addSubview:myRedParentView];
    
    //The target element musn't be accessible so as to be considered as a container to its children elements.
    //If this attribute is 'YES', the target element will be the only one accessible element.
    myRedParentView.isAccessibilityElement = NO;
    
    //The elements contained in the target element won't be accessible even if they're defined as such.
    //If this attribute is 'NO' and the previous one is 'NO', only the children elements will be accessible.
    myRedParentView.accessibilityElementsHidden = NO;
    
    [self createViewWithColor:[UIColor yellowColor] 
                       inside:myRedParentView];
    [self createViewWithColor:[UIColor blueColor] 
                       inside:myRedParentView];
}

- (void)createViewWithColor:(UIColor*)color
                     inside:(UIView*)parentView {
    
    float delta = (color == [UIColor yellowColor]) ? 0.0 : 20.0;
    
    CGRect rect = CGRectMake(10.0 + delta, 10.0 + delta, 10.0, 10.0);
    UIView * theView = [[UIView alloc]initWithFrame:rect];
    theView.backgroundColor = color;
    
    [parentView addSubview:theView];
    
    theView.isAccessibilityElement = YES;
}
</code></pre><pre><code class="swift">
override func viewDidAppear(_ animated: Bool) {
        super.viewDidAppear(animated)
        
        //Creation of an element inside which 2 other children elements will be inserted.
        let redParentViewRect = CGRect.init(x: 100.0,
                                            y: 100.0,
                                            width: 40.0,
                                            height: 40.0)
        let myParentView = UIView.init(frame: parentViewRect)
        myRedParentView.backgroundColor = .red
        
        self.view.addSubview(myRedParentView)
        
        //The target element musn't be accessible so as to be considered as a container to its children elements.
        //If this attribute is 'true', the target element will be the only one accessible element.
        myRedParentView.isAccessibilityElement = true
        
        //The elements contained in the target element won't be accessible even if they're defined as such.
        //If this attribute is 'false' and the previous one is 'false', only the children elements will be accessible.
        myRedParentView.accessibilityElementsHidden = false
        
        self.createViewWithColor(.yellow, inside: myRedParentView)
        self.createViewWithColor(.blue, inside: myRedParentView)
    }
    
    func createViewWithColor(_ color:UIColor, inside parentView:UIView) {
        
        let delta:CGFloat = ((color == .yellow) ? 0.0 : 20.0)
        let rect = CGRect.init(x: 10.0 + delta,
                               y: 10.0 + delta,
                               width: 10.0,
                               height: 10.0)
        
        let theView = UIView.init(frame: rect)
        theView.backgroundColor = color
        
        parentView.addSubview(theView)
        
        theView.isAccessibilityElement = true
    }
</code></pre>
### Links
- [`isAccessibilityElement`](https://developer.apple.com/documentation/objectivec/nsobject/1615141-isaccessibilityelement)
- [`accessibilityElementsHidden`](https://developer.apple.com/documentation/objectivec/nsobject/1615080-accessibilityelementshidden)
- [`accessibilityViewIsModal`](https://developer.apple.com/documentation/objectivec/nsobject/1615089-accessibilityviewismodal)

## Trigger a vocalization
### Description
It is very easy to trigger vocalizations with VoiceOver.
</br>Note that we are talking about VoiceOver vocalization and not <abbr>TTS</abbr> (Text To Speech) that can operate whether VoiceOver is on or off. 

To trigger a vocalization, just call the **UIAccessibilityPostNotification** method passing the notification allowing to trigger a vocalization (**UIAccessibilityAnnouncementNotification**) and the string to vocalize as parameters.

Note: the vocalization is done in the system’s language.
### Example
<pre><code class="objective-c">
UIAccessibilityPostNotification(UIAccessibilityAnnouncementNotification, 
                                @"This is a VoiceOver message.");
</code></pre><pre><code class="swift">
UIAccessibility.post(notification: .announcement,
                     argument: "This is a VoiceOver message.")
</code></pre>
### Links
- [`UIAccessibilityPostNotification`](https://developer.apple.com/documentation/uikit/1615194-uiaccessibilitypostnotification)
- [`UIAccessibilityAnnouncementNotification`](https://developer.apple.com/documentation/uikit/uiaccessibilityannouncementnotification)

## Check accessibility options state
### Description
On iOS, it is possible to check the accessibility options state. Is VoiceOver activated? Is the audio-mono mode activated? Several methods can help you to check with that. They are part of the `UIKit` framework.
</br>The most useful method is **UIAccessibilityIsVoiceOverRunning** which allows to know whether VoiceOver is activated.
</br></br>Many other methods are available in the links hereafter and some of them are deeply explained in a WWDC 2018 video *(Deliver en exceptional accessibility experience)* whose content is perfectly detailed in the [iOS WWDC section](./dev-ios-wwdc-18230.html) of this site.
### Exemple
<pre><code class="objective-c">
    BOOL isVoiveOverRunning = (UIAccessibilityIsVoiceOverRunning() ? 1 : 0);
    BOOL isSwitchControlRunning = (UIAccessibilityIsSwitchControlRunning() ? 1 : 0);
    
    NSLog(@"VoiceOver is %d and SwitchControl is %d.", isVoiveOverRunning, isSwitchControlRunning);
</code></pre><pre><code class="swift">
    let isVoiceOverRunning = (UIAccessibility.isVoiceOverRunning ? 1 : 0)
    let isSwitchControlRunning = (UIAccessibility.isSwitchControlRunning ? 1 : 0)
        
    print("VoiceOver is \(isVoiceOverRunning) and SwichControl is \(isSwitchControlRunning).")
</code></pre>
### Links
- [`UIAccessibilityDarkerSystemColorsEnabled`](https://developer.apple.com/documentation/uikit/1615087-uiaccessibilitydarkersystemcolor)
- [`UIAccessibilityIsAssistiveTouchRunning`](https://developer.apple.com/documentation/uikit/1648479-uiaccessibilityisassistivetouchr)
- [`UIAccessibilityIsBoldTextEnabled`](https://developer.apple.com/documentation/uikit/1615156-uiaccessibilityisboldtextenabled)
- [`UIAccessibilityIsClosedCaptioningEnabled`](https://developer.apple.com/documentation/uikit/1615112-uiaccessibilityisclosedcaptionin)
- [`UIAccessibilityIsGrayscaleEnabled`](https://developer.apple.com/documentation/uikit/1615189-uiaccessibilityisgrayscaleenable)
- [`UIAccessibilityIsGuidedAccessEnabled`](https://developer.apple.com/documentation/uikit/1615173-uiaccessibilityisguidedaccessena)
- [`UIAccessibilityIsInvertColorsEnabled`](https://developer.apple.com/documentation/uikit/1615167-uiaccessibilityisinvertcolorsena)
- [`UIAccessibilityIsMonoAudioEnabled`](https://developer.apple.com/documentation/uikit/1615123-uiaccessibilityismonoaudioenable)
- [`UIAccessibilityIsReduceMotionEnabled`](https://developer.apple.com/documentation/uikit/1615133-uiaccessibilityisreducemotionena)
- [`UIAccessibilityIsReduceTransparencyEnabled`](https://developer.apple.com/documentation/uikit/1615074-uiaccessibilityisreducetranspare)
- [`UIAccessibilityIsShakeToUndoEnabled`](https://developer.apple.com/documentation/uikit/1615103-uiaccessibilityisshaketoundoenab)
- [`UIAccessibilityIsSpeakScreenEnabled`](https://developer.apple.com/documentation/uikit/1615109-uiaccessibilityisspeakscreenenab)
- [`UIAccessibilityIsSpeakSelectionEnabled`](https://developer.apple.com/documentation/uikit/1615154-uiaccessibilityisspeakselectione)
- [`UIAccessibilityIsSwitchControlRunning`](https://developer.apple.com/documentation/uikit/1615131-uiaccessibilityisswitchcontrolru)
- [`UIAccessibilityIsVoiceOverRunning`](https://developer.apple.com/documentation/uikit/1615187-uiaccessibilityisvoiceoverrunnin)

## Notify a content change
### Description
When there is a content change in the current page, it is possible to notify the accessibility <abbr>API</abbr> using several types of notifications. To do that, we must send the change notification to the accessibility <abbr>API</abbr> using the following method: `UIAccessibilityPostNotification`.  

There are several types of change notifications but the two most commonly used are:
- **UIAccessibilityLayoutChangedNotification**&nbsp;: notifies that a part of the page has changed with 2 possible incoming parameters (a `NSString` or a `UIObject`).
</br>With a `NSString`, the notification behaves like a **UIAccessibilityAnnouncementNotification** with a <span lang="en">VoiceOver</span> vocalization.
</br>With a `UIObject`, focus is shifted to the user interface element.
</br>This notification is very similar to the **UIAccessibilityAnnouncementNotification** but should come as a result of dynamic content being deleted or added to the current view.
- **UIAccessibilityScreenChangedNotification**&nbsp;: notifies that the whole page has changed including `nil` or a `UIObject` as incoming parameters.  
With `nil`, the first accessible element in the page is focused.
</br>With a `UIObject`, focus is shifted to the specified element with a <span lang="en">VoiceOver</span>.
</br>This notification comes along with a vocalization including a sound like announcing a new page.
### Example
<pre><code class="objective-c">
//The element 'myLabel' is focused and vocalized with its new value.
- (IBAction)tapHere:(UIButton *)sender {
    
    myLabel.accessibilityLabel = @"This is a new label.";
    UIAccessibilityPostNotification(UIAccessibilityLayoutChangedNotification, myLabel);
}

//The first accessible element in the page is focused and vocalized with a sound like announcing a new page.
- (IBAction)clic:(UIButton *)sender {
    
    UIAccessibilityPostNotification(UIAccessibilityScreenChangedNotification, nil);
}
</code></pre><pre><code class="swift">
//The element 'myLabel' is focused and vocalized with its new value.
@IBAction func tapHere(_ sender: UIButton) {
        
    myLabel.accessibilityLabel = "This is a new label."
    UIAccessibility.post(notification: UIAccessibility.Notification.layoutChanged,
                         argument: myLabel)
}
    
//The first accessible element in the page is focused and vocalized with a sound like announcing a new page.
@IBAction func clic(_ sender: UIButton) {
        
    UIAccessibility.post(notification: UIAccessibility.Notification.screenChanged,
                         argument: nil)
}
</code></pre>
### Links
- [`UIAccessibilityPostNotification`](https://developer.apple.com/documentation/uikit/1615194-uiaccessibilitypostnotification)
- [`UIAccessibilityLayoutChangedNotification`](https://developer.apple.com/documentation/uikit/uiaccessibilitylayoutchangednotification)
- [`UIAccessibilityScreenChangedNotification`](https://developer.apple.com/documentation/uikit/uiaccessibilityscreenchangednotification)
- [`UIAccessibilityPageScrolledNotification`](https://developer.apple.com/documentation/uikit/uiaccessibilitypagescrollednotification)

## Change the vocalization language
### Description
To change the vocalization language of VoiceOver for a word or a sentence, one can use the **accessibilityLanguage**&nbsp; attribute.
</br>Available through the `UIAccessibility` informal protocol, this attribute allows to specify a language for a dedicated text.
</br>For instance, if we use this attribute on a `UILabel`, it will be vocalized by <span lang="en">VoiceOver</span> in the language set on this attribute.
</br>
### Example
<pre><code class="objective-c">
- (IBAction)tapHere:(UIButton *)sender {
    
    myLabel.accessibilityLanguage = @"fr";
    myLabel.accessibilityLabel = @"Ceci est un nouveau label. Merci.";
    UIAccessibilityPostNotification(UIAccessibilityLayoutChangedNotification, myLabel);
}
</code></pre><pre><code class="swift">
@IBAction func tapHere(_ sender: UIButton) {
        
    myLabel.accessibilityLanguage = "fr"
    myLabel.accessibilityLabel = "Ceci est un nouveau label. Merci."
    UIAccessibility.post(notification: UIAccessibility.Notification.layoutChanged,
                         argument: myLabel)
}
</code></pre>
### Link   
- [`accessibilityLanguage`](https://developer.apple.com/documentation/objectivec/nsobject/1615192-accessibilitylanguage)

## Modify the focus area of VoiceOver
### Description
In the case of dynamically modified element or component not inheriting from `UIView`, it is possible to modify the focus area of accessibility of this element, i.e. the area <span lang="en">VoiceOver</span> highlights when focusing an element.

- **accessibilityFrame**&nbsp;: sets the area via a rectangle (`CGRect`).
</br>Usually, for an element inheriting from `UIView`, this area is the «&nbsp;visible&nbsp;» part of the view.
- **accessibilityPath**&nbsp;: equivalent to `accessibilityFrame` but sets the area via Bezier curves.
<a name="AccessibilityActivationPoint"></a>
- **accessibilityActivationPoint**&nbsp;: defines a contact point inside the `frame` whose action will be fired by a double-tap element activation.
</br>The default value is the midpoint of the `frame` but it can be redefine anywhere inside.
</br>A classical use case could be an easy activation inside a [regroupment of elements](#ActivationPointExemple) for instance.
</br><img alt="" style="max-width: 350px; height: auto; " src="./images/iOSdev/ModifierLaZoneDeFocus_2.png" />
</br>By keeping this default value, one might unwillingly activate the element in the middle of the frame only by activating the created regroupment.

### Example
<img alt="" style="max-width: 700px; height: auto; " src="./images/iOSdev/ModifierLaZoneDeFocus_1.png" />
<pre><code class="objective-c">
float xVal;
float yVal;
float widthVal;
float heightVal;
    
- (void)viewDidAppear:(BOOL)animated {
    [super viewDidAppear:animated];
    
    xVal = myLabel.accessibilityFrame.origin.x;
    yVal = myLabel.accessibilityFrame.origin.y;
    widthVal = myLabel.accessibilityFrame.size.width;
    heightVal = myLabel.accessibilityFrame.size.height;
    
}

//First way to enlarge the focus area.
- (IBAction)tapHere:(UIButton *)sender {
    
    myLabel.accessibilityFrame = CGRectMake(xVal,
                                            yVal,
                                            widthVal + 100.0,
                                            heightVal+ 100.0);
    
    UIAccessibilityPostNotification(UIAccessibilityLayoutChangedNotification, myLabel);
}

//Second way to enlarge the focus area (Bezier).
- (IBAction)clic:(UIButton *)sender {
    
    UIBezierPath * bezierPath = [UIBezierPath bezierPath];
    
    [bezierPath moveToPoint:CGPointMake(xVal, yVal)];
    
    [bezierPath addLineToPoint:CGPointMake(xVal + widthVal + 100.0, 
                                           yVal)];
    [bezierPath addLineToPoint:CGPointMake(xVal + widthVal + 100.0, 
                                           yVal + heightVal+ 100.0)];
    [bezierPath addLineToPoint:CGPointMake(xVal, 
                                           yVal + heightVal+ 100.0)];
    [bezierPath closePath];
    
    myLabel.accessibilityPath = bezierPath;
    
    UIAccessibilityPostNotification(UIAccessibilityLayoutChangedNotification, myLabel);
}
</code></pre><pre><code class="swift">
    var xVal: CGFloat = 0.0
    var yVal: CGFloat = 0.0
    var widthVal: CGFloat = 0.0
    var heightVal: CGFloat = 0.0
    
    override func viewDidAppear(_ animated: Bool) {
        super.viewDidAppear(animated)
        
        xVal = myLabel.accessibilityFrame.origin.x;
        yVal = myLabel.accessibilityFrame.origin.y;
        widthVal = myLabel.accessibilityFrame.size.width;
        heightVal = myLabel.accessibilityFrame.size.height;
    }
    
    //Première façon d'augmenter la zone de focus.
    @IBAction func clicHere(_ sender: UIButton) {
        
        myLabel.accessibilityFrame = CGRect.init(x: xVal,
                                                 y: yVal,
                                                 width: widthVal + 100.0,
                                                 height: heightVal + 100.0)
        
        UIAccessibility.post(notification: UIAccessibility.Notification.layoutChanged,
                             argument: myLabel)
    }
    
    //Seconde façon d'augmenter la zone de focus (Bézier).
    @IBAction func clic(_ sender: UIButton) {
        
        let bezierPath = UIBezierPath.init()
        
        bezierPath.move(to: CGPoint.init(x: xVal, y: yVal))
        
        bezierPath.addLine(to: CGPoint.init(x: xVal + widthVal + 100.0,
                                            y: yVal))
        bezierPath.addLine(to: CGPoint.init(x: xVal + widthVal + 100.0,
                                            y: yVal + heightVal + 100.0))
        bezierPath.addLine(to: CGPoint.init(x: xVal,
                                            y: yVal + heightVal + 100.0))
        bezierPath.close()
        
        myLabel.accessibilityPath = bezierPath
        
        UIAccessibility.post(notification: UIAccessibility.Notification.screenChanged,
                             argument: myLabel)
    }
</code></pre>
### Links
- [`accessibilityFrame`](https://developer.apple.com/documentation/uikit/uiaccessibilityelement/1619579-accessibilityframe)
- [`accessibilityPath`](https://developer.apple.com/documentation/objectivec/nsobject/1615159-accessibilitypath)
- [`accessibilityActivationPoint`](https://developer.apple.com/documentation/objectivec/nsobject/1615179-accessibilityactivationpoint)

## Grouping elements
### Description
Grouping elements may be used to vocalize the bundle once and to associate a dedicated action to it.</br></br>
### Example 1
We wish to obtain a 'label' and a 'switch control' as one unique block behaving like a `switch control`.
</br>In this case, a view must be created to encapsulate all the elements and an action must be implemented (only the container must be an accesible element).
</br><img alt="" style="max-width: 700px; height: auto; " src="./images/iOSdev/GrouperDesElements_1.png" />
</br>Create your wrapper as an accessible element :
<pre><code class="objective-c">
#import "MyViewController.h"
#import "MyWrapView.h"

@interface MyViewController ()

@property (weak, nonatomic) IBOutlet UILabel * myLabel;
@property (weak, nonatomic) IBOutlet UISwitch * mySwitch;

@end


@implementation MyViewController

- (void)viewDidAppear:(BOOL)animated {
    [super viewDidAppear:animated];
    
    //Create the view that will encapsulate the 'label' and the 'Switch Control'.
    MyWrapView * wrap = [[MyWrapView alloc] initWith:_myLabel
                                                 and:_mySwitch];
    
    [self.view addSubview:wrap];
}
@end
</code></pre><pre><code class="swift">
    class MyViewController: UIViewController {

    @IBOutlet weak var myLabel: UILabel!
    @IBOutlet weak var mySwitch: UISwitch!
    
    
    override func viewDidAppear(_ animated: Bool) {
        super.viewDidAppear(animated)
        
        //Create the view that will encapsulate the 'label' and the 'Switch Control'.
        let wrap = MyWrapView.init(with: myLabel,
                                   and: mySwitch)
        
        self.view.addSubview(wrap)
    }
}
</code></pre>

</br>... and implement the wrapper class to define accurately the
<a href="http://a11y-guidelines.orange.com/mobile_EN/dev-ios-wwdc-17215.html#DefaultActivation">action when a double tap occurs</a> :
<pre><code class="objective-c">
@implementation MyWrapView

//Indexes for the array containing all the wrapped elements.
int indexLabel = 0;
int indexSwitch = 1;


- (instancetype)initWith:(UILabel *)label and:(UISwitch *)aSwitch {
    
    CGRect viewFrame = CGRectUnion(label.frame, aSwitch.frame);
    MyWrapView * wrapView = [[MyWrapView alloc]initWithFrame:viewFrame];
    
    wrapView.accessibilityElements = @[label, aSwitch];
    
    NSString * switchValue = (aSwitch.isOn) ? @"on" : @"off";
    
    wrapView.isAccessibilityElement = YES;
    wrapView.accessibilityLabel = [NSString stringWithFormat:@"the switch control is %@", switchValue.description];
    wrapView.accessibilityHint = @"tap twice to change the switch control status.";
    
    return wrapView;
}


//Function called by the system when a double tap occurs on the selected wrapper.
- (BOOL)accessibilityActivate {
    
    UISwitch * theSwitch = self.accessibilityElements[indexSwitch];
    [theSwitch setOn:!(theSwitch.isOn)];
    
    NSString * switchValue = (theSwitch.isOn) ? @"on" : @"off";
    
    self.accessibilityLabel = [NSString stringWithFormat:@"the switch control is %@", switchValue.description];
    return YES;
}
@end
</code></pre><pre><code class="swift">
    class MyWrapView: UIView {
    
    //Indexes for the array containing all the wrapped elements.
    let indexLabel = 0
    let indexSwitch = 1
    
    
    override init(frame: CGRect) {
        super.init(frame: frame)
    }
    
    
    required init?(coder aDecoder: NSCoder) {
        super.init(coder: aDecoder)
    }
    
    
    convenience init(with label: UILabel,and aSwitch: UISwitch) {
        
        let viewFrame = label.frame.union(aSwitch.frame)
        self.init(frame: viewFrame)
        
        self.accessibilityElements = [label, aSwitch]
        
        let switchValue = (aSwitch.isOn) ? "on" : "off"
        
        self.isAccessibilityElement = true
        self.accessibilityLabel = "the switch control is " + switchValue.description
        self.accessibilityHint = "tap twice to change the switch control status."
    }
    
    
    //Function called by the system when a double tap occurs on the selected wrapper.
    override func accessibilityActivate() -> Bool {
        
        let theSwitch = self.accessibilityElements?[indexSwitch] as? UISwitch
        theSwitch?.setOn(!((theSwitch?.isOn)!), animated: false)
        
        let switchValue = (theSwitch?.isOn)! ? "on" : "off"
        
        self.accessibilityLabel = "the switch control is " + switchValue.description
        
        return true
    }
}
</code></pre>

<a name="ActivationPointExemple"></a>
### Example 2
We have a button, a label and a switch control to be regrouped in a single block whose activation will change the switch control status automatically without defining any action like before.
</br>The easiest way would be to place the switch control in the middle of the created frame in order to locate its [accessibilityActivationPoint](#AccessibilityActivationPoint) directly on it.
</br>Unfortunately, that's not always possible.
</br></br>A new accessible element must then be created to gather all the desired objects and its **accessibilityActivationPoint** has to be defined on the switch control.
</br><img alt="" style="max-width: 350px; height: auto; " src="./images/iOSdev/GrouperDesElements_2.png" />
<pre><code class="objective-c">
@interface ActivationPointViewController ()

@property (weak, nonatomic) IBOutlet UIButton * myButton;
@property (weak, nonatomic) IBOutlet UILabel * myLabel;
@property (weak, nonatomic) IBOutlet UISwitch * mySwitch;

@end


@implementation ActivationPointViewController

UIAccessibilityElement * elt;

- (void)viewDidAppear:(BOOL)animated {
    [super viewDidAppear:animated];
    
    [_mySwitch addTarget:self
                  action:@selector(configChanged:)
        forControlEvents:UIControlEventValueChanged];
    
    elt = [[UIAccessibilityElement alloc]initWithAccessibilityContainer:self.view];
    
    CGRect a11yFirstEltFrame = CGRectUnion(_myLabel.frame, _myButton.frame);
    CGRect a11yEltFrame = CGRectUnion(a11yFirstEltFrame, _mySwitch.frame);
    
    elt.accessibilityLabel = @"regrouping elements";
    elt.accessibilityHint = @"double tap to change the switch control status";
    elt.accessibilityFrameInContainerSpace = a11yEltFrame;
    elt.accessibilityActivationPoint = [_mySwitch center];
    
    self.view.accessibilityElements = @[elt];
}
  
    
- (void)configChanged:(UISwitch *)sender {
 
    NSString * switchValue = _mySwitch.on ? @"on" : @"off";
    elt.accessibilityLabel = [NSString stringWithFormat:@"the switch control is %@", switchValue.description];
}
@end
</code></pre><pre><code class="swift">
    class ActivationPointViewController: UIViewController {
    
    @IBOutlet weak var myButton: UIButton!
    @IBOutlet weak var myLabel: UILabel!
    @IBOutlet weak var mySwitch: UISwitch!
    
    var elt: UIAccessibilityElement?
    
    
    override func viewDidAppear(_ animated: Bool) {
        super.viewDidAppear(animated)
        
        mySwitch.addTarget(self,
                           action: #selector(configChanged),
                           for: .valueChanged)
        
        elt = UIAccessibilityElement(accessibilityContainer: self.view)
        let a11yEltFrame = (myLabel.frame.union(myButton.frame)).union(mySwitch.frame)
        
        if let elt = elt {
            
            elt.accessibilityLabel = "regrouping elements"
            elt.accessibilityHint = "double tap to change the switch control status"
            elt.accessibilityFrameInContainerSpace = a11yEltFrame
            elt.accessibilityActivationPoint = mySwitch.center
            
            self.view.accessibilityElements = [elt]
        }
    }
    
    
    @objc func configChanged(sender: UISwitch){
        
        if let configGroup = elt {
            
            let switchValue = (mySwitch?.isOn)! ? "on" : "off"
            configGroup.accessibilityLabel = "the switch control is " + switchValue.description
        }
    }
}
</code></pre>

Another grouping elements case could use the **shouldGroupAccessibilityChildren** attribute which is a Boolean that indicates whether <span lang="en">VoiceOver</span> must group its children views.
</br>This allows making unique vocalizations or define a particular reading order for a part of the page (see <a href="http://a11y-guidelines.orange.com/mobile_EN/dev-ios.html#reading-order">Reading order</a> section for further information).
### Links
- [`accessibilityActivate`](https://developer.apple.com/documentation/objectivec/nsobject/1615165-accessibilityactivate)
- [`shouldGroupAccessibilityChildren`](https://developer.apple.com/documentation/objectivec/nsobject/1615143-shouldgroupaccessibilitychildren)

## Accessibility events
### Description
iOS sends several accessibility events to the applications. They are sent when accessibility options are changed.
</br>For example, if VoiceOver is deactivated, the running applications will receive the `UIAccessibilityVoiceOverStatusDidChange` event.
</br>This is very useful when used simultaneously with `UIAccessibilityIsVoiceOverRunning`.

Let's say the application behaves differently when VoiceOver is turned on.
</br>What happens if VoiceOver is disabled ? This is exactly when the system events can be used.
</br>By listening to these events, it is possible to dynamically change how the application behaves.
### Example
In this example, a method is fired when VoiceOver or Switch Control status has changed.
<pre><code class="objective-c">
- (void)viewDidAppear:(BOOL)animated {
    [super viewDidAppear:animated];
    
    [[NSNotificationCenter defaultCenter] addObserver:self
                                             selector:@selector(methodToBeCalled:)
                                                 name:UIAccessibilitySwitchControlStatusDidChangeNotification
                                               object:nil];
    
    [[NSNotificationCenter defaultCenter] addObserver:self
                                             selector:@selector(methodToBeCalled:)
                                                 name:UIAccessibilityVoiceOverStatusDidChangeNotification
                                               object:nil];
}

- (void)methodToBeCalled:(NSNotification *)notification {
    
    NSArray * checkStatus = @[@"NOK", @"OK"];
    
    NSLog(@"SWITCH CONTROL is %@ and VOICE OVER is %@",
          checkStatus[UIAccessibilityIsSwitchControlRunning()],
          checkStatus[UIAccessibilityIsVoiceOverRunning()]);
}
</code></pre><pre><code class="swift">
    override func viewDidAppear(_ animated: Bool) {
        super.viewDidAppear(animated)
        
        NotificationCenter.default.addObserver(self,
                                               selector: #selector(methodToBeCalled(notification:)),
                                               name: UIAccessibility.switchControlStatusDidChangeNotification,
                                               object: nil)
        
        NotificationCenter.default.addObserver(self,
                                               selector: #selector(methodToBeCalled(notification:)),
                                               name: UIAccessibility.voiceOverStatusDidChangeNotification,
                                               object: nil)
    }
    
    @objc private func methodToBeCalled(notification: Notification) {

        let switchControlStatus = (UIAccessibility.isSwitchControlRunning ? "OK" : "NOK")
        let voiceOverStatus = (UIAccessibility.isVoiceOverRunning ? "OK" : "NOK")
        
        print("SWITCH CONTROL is \(switchControlStatus) and VOICE OVER is \(voiceOverStatus).")
    }
</code></pre>
### Link
All accessibility events are available on the <a href="https://developer.apple.com/documentation/uikit/accessibility/notification_names?language=objc">official documentation from Apple</a>.

## Text size
### Description
Since iOS7, it is possible to make the text size dynamic according to the phone settings.
</br><img alt="larger accessibility sizes option screenshot" style="max-width: 600px; height: auto; " src="./images/iOSdev/TailleDesTextes_1.png" />
</br>The following steps should be respected in order to easily use this <abbr>API</abbr>&nbsp;:
 - **Use the text styles** available with the application iOS version.
 </br><img alt="" style="max-width: 400px; height: auto; " src="./images/iOSdev/TailleDesTextes_2.png" />
 - Choose the system font to facilitate your programing even if the use of other fonts is well assisted by the `UIFontMetrics` new class (iOS11).
 <pre><code class="objective-c">
    __weak IBOutlet UILabel * fontHeadline;
    __weak IBOutlet UILabel * fontFootNote;
    
    //Use of the default native font.
    fontFootNote.font = [UIFont preferredFontForTextStyle:UIFontTextStyleHeadline];
    
    //Customed font definition for a header.
    UIFont * fontHead = [UIFont fontWithName:@"Chalkduster" size:30.0];
    UIFontMetrics * fontHeadMetrics = [[UIFontMetrics alloc]initForTextStyle:UIFontTextStyleHeadline];
    fontHeadline.font = [fontHeadMetrics scaledFontForFont:fontHead];
</code></pre><pre><code class="swift">
    @IBOutlet weak var fontHeadline: UILabel!
    @IBOutlet weak var fontFootNote: UILabel!
    
    //Use of the default native font for a header.
    fontFootNote.font = .preferredFont(forTextStyle: .headline)
        
    //Customed font definition for a header.
    let fontHead = UIFont(name: "Chalkduster", size: 30.0)
    let fontHeadMetrics = UIFontMetrics(forTextStyle: .headline)
    fontHeadline.font = fontHeadMetrics.scaledFont(for: fontHead!)
</code></pre>
 - Listen to the font size settings change event **UIContentSizeCategoryDidChange** or directly use the property **adjustsFontForContentSizeCategory** to have an automatic update of your system font size if you're programming in iOS10 (this attribute applies to custom fonts only with the `UIFontMetrics` class).
</br>Note that the **traitCollectionDidChange** method that belongs to the `UITraitEnvironment` informal protocol may also be used in this context because it will be called as soon as the iOS interface environment changes *(class/content size, portrait/landscape)*.
<pre><code class="objective-c">
    //Listens to the notification dealing with the font size changing from the mobile settings.
    [[NSNotificationCenter defaultCenter] addObserver:self
                                             selector:@selector(methodToBeCalled:)
                                                 name:UIContentSizeCategoryDidChangeNotification
                                               object:nil];
    
    //Automatic changing of the font size without listening to the previous notification.
    fontHeadline.adjustsFontForContentSizeCategory = YES;
    
    - (void)methodToBeCalled:(NSNotification *)notification {
    
        //When handling the font size change event, you must redisplay the affected elements.
        fontFootNote.font = [UIFont preferredFontForTextStyle:UIFontTextStyleFootnote];
    }
</code></pre><pre><code class="swift">
    //Listens to the notification dealing with the font size changing from the mobile settings.
    NotificationCenter.default.addObserver(self,
                                           selector:#selector(methodToBeCalled(notification:)),
                                           name: UIContentSizeCategory.didChangeNotification,
                                           object: nil)
    
    //Automatic changing of the font size without listening to the previous notification.
    fontHeadline.adjustsFontForContentSizeCategory = true
    
    @objc func methodToBeCalled(notification: Notification) {

        //When handling the font size change event, you must redisplay the affected elements.
        fontFootNote.font = UIFont.preferredFont(forTextStyle: .footnote)
    }
</code></pre>
 - Be careful that the containers fit their contents: using constraints is the best way to perform this task using dynamic values.
 - Don't forget to adapt the [color contrast](./criteria-ios.html#colours) to the text size.
### Links
- [Dynamic Type & Text Styles](https://developer.apple.com/design/human-interface-guidelines/ios/visual-design/typography/)
- [`UIContentSizeCategoryDidChange`](https://developer.apple.com/documentation/foundation/nsnotification.name/1622948-uicontentsizecategorydidchange)
- [`adjustsFontForContentSizeCategory`](https://developer.apple.com/documentation/uikit/uicontentsizecategoryadjusting/1771731-adjustsfontforcontentsizecategor?language=objc)

## Graphical elements size
### Description
Exactly like text, images and tab/tool bar items have a scalable size thanks to accessibility settings but **only since iOS11 with Xcode 9**.
</br>The example below to illustrate these new features is obtained by following the steps hereafter &nbsp;:
</br></br>1. Under Xcode, import the image to be enlarged with a `pdf` extension and a x1 resolution in the `xcassets` catalog.
</br></br>2. In the new Image Set, tick `Preserve Vector Data` and specify `Single Scale` as Scales attribute &nbsp;:
</br><img alt="" style="max-width: 700px; height: auto; " src="./images/iOSdev/TailleDesEltsGraphiques_4.png" />
</br></br>3. If a storyboard is used for this image, tick `Adjusts Image Size` in the Image View section, otherwise put the `adjustsImageSizeForAccessibilityContentSizeCategory` image property to `true` in code &nbsp;:
</br><img alt="" style="max-width: 350px; height: auto; " src="./images/iOSdev/TailleDesEltsGraphiques_5.png" />
</br></br>4. If a **tab bar** or a **tool bar** is used in the application, first repeat the previous 3 steps for each image included in the items to be enlarged in the middle of the screen and then link the image to its appropriate item &nbsp;:
</br><img alt="" style="max-width: 350px; height: auto; " src="./images/iOSdev/TailleDesEltsGraphiques_6.png" />
</br>**WARNING : don't forget to check your layout with these new images larger sizes.**
### Example
An application with a tab bar, whose second bar item displays the Orange logo (added `Aspect Fit` content mode and constraints to stretch the image view), is created to test the features exposed in the description.
</br></br>With the `Larger Accessibility Sizes` activation in the settings (see <a href="http://a11y-guidelines.orange.com/mobile_EN/dev-ios.html#graphical-elements-size">the previous section</a>), one can easily note in the application &nbsp;:
- A larger Orange image size.
- A larger version of the bar item in an overlay if you touch and hold over it.
</br><img alt="" style="max-width: 1200px; height: auto; " src="./images/iOSdev/TailleDesEltsGraphiques_10.png" />
### Link
- [`adjustsImageSizeForAccessibilityContentSizeCategory`](https://developer.apple.com/documentation/uikit/uiaccessibilitycontentsizecategoryimageadjusting/2890929-adjustsimagesizeforaccessibility)

## Reading order
### Description
Redefining the VoiceOver reading order is done using the **UIAccessibilityContainer** protocol.
</br>The idea is to have a table of elements that defines the reading order of the elements.
</br>It is often very useful to use the **shouldGroupAccessibilityElement** attribute so we have a precise order but only for a part of the view *(the rest of it will be read using the native order provided by VoiceOver)*.
### Example
The best way to illustrate this feature is the keyboard whose keys order isn't necessary the appropriate one.
</br>Here's the desired order : 1, 2, 3, 4, 7, 6, 8, 9, 5.
</br><span aria-hidden="true">Two views are created (blue and grey) and we graphically put the numbers in them as defined hereunder :</span>
</br><img alt="display of the blue and grey views" style="max-width: 500px; height: auto; " src="./images/iOSdev/OrdreDeLecture_1.png" />
<pre><code class="objective-c">
    __weak IBOutlet UIView * blueBlock;
    __weak IBOutlet UIView * greyColumn;
    
- (void)viewDidAppear:(BOOL)animated {
    [super viewDidAppear:animated];
    
    //Reads the first three numbers in the grey column.
    greyColumn.shouldGroupAccessibilityChildren = YES;
    
    //Reads 6, 8, 9 and 5 in this order inside the blue block.
    blueBlock.isAccessibilityElement = NO;
    blueBlock.accessibilityElements = @[key_6,
                                        key_8,
                                        key_9,
                                        key_5];
}
</code></pre><pre><code class="swift">
    @IBOutlet weak var greyColumn: UIView!
    @IBOutlet weak var blueBlock: UIView!
    
    override func viewDidAppear(_ animated: Bool) {
        super.viewDidAppear(animated)
        
        //Reads the first three numbers in the grey column.
        greyColumn.shouldGroupAccessibilityChildren = true
        
        //Reads 6, 8, 9 and 5 in this order inside the blue block.
        blueBlock.isAccessibilityElement = false
        blueBlock.accessibilityElements = [key_6,
                                           key_8,
                                           key_9,
                                           key_5]
    }
</code></pre>
### Links
- [`UIAccessibilityContainer`](https://developer.apple.com/documentation/uikit/accessibility/uiaccessibilitycontainer?language=objc)
- [`shouldGroupAccessibilityChildren`](https://developer.apple.com/documentation/objectivec/nsobject/1615143-shouldgroupaccessibilitychildren)

## Date, time and numbers
### Description
Using VoiceOver for reading date, time and numbers may become rapidly a headache if some steps fade into obscurity.
#### Date and time vocalization
The rendering isn't natural if the date or time data are imported text in a `label`.
</br><img alt="" style="max-width: 800px; height: auto; " src="./images/iOSdev/DateHeureNombres_11.png" />
</br>Incoming data must be formatted to obtain a natural and understandable descriptive vocalization.
</br><img alt="" style="max-width: 800px; height: auto; " src="./images/iOSdev/DateHeureNombres_7.png" />
<pre><code class="objective-c">
    NSDateFormatter * dateFormatter = [[NSDateFormatter alloc]init];
    [dateFormatter setDateFormat:@"dd/MM/yyyy HH:mm"];
    
    NSDate * date = [dateFormatter dateFromString:@"01/04/2015 05:30"];
    
    dateLabel.text = [NSDateFormatter localizedStringFromDate:date
                                                    dateStyle:NSDateFormatterShortStyle
                                                    timeStyle:NSDateFormatterNoStyle];
    
    dateLabel.accessibilityLabel = [NSDateFormatter localizedStringFromDate:date
                                                                  dateStyle:NSDateFormatterMediumStyle
                                                                  timeStyle:NSDateFormatterNoStyle];

    
    hourLabel.text = [NSDateFormatter localizedStringFromDate:date
                                                    dateStyle:NSDateFormatterNoStyle
                                                    timeStyle:NSDateFormatterShortStyle];
    
    NSDateComponents * hourComponents = [[NSCalendar currentCalendar] components:NSCalendarUnitHour | NSCalendarUnitMinute
                                                                        fromDate:date];
                                                                        
    hourLabel.accessibilityLabel = [NSDateComponentsFormatter localizedStringFromDateComponents:hourComponents
                                                                                     unitsStyle:NSDateComponentsFormatterUnitsStyleSpellOut];
</code></pre><pre><code class="swift">
    let dateFormatter = DateFormatter()
    dateFormatter.dateFormat = "dd/MM/yyyy HH:mm"
        
    let date = dateFormatter.date(from: "01/04/2015 05:30")
        
    dateLabel.text = DateFormatter.localizedString(from: date!,
                                                   dateStyle: .short,
                                                   timeStyle: .none)
                                                       
    dateLabel.accessibilityLabel = DateFormatter.localizedString(from: date!,
                                                                 dateStyle: .medium,
                                                                 timeStyle: .none)
        
        
    hourLabel.text = DateFormatter.localizedString(from: date!,
                                                   dateStyle: .none,
                                                   timeStyle: .short)
        
    let hourComponents = Calendar.current.dateComponents([.hour, .minute],
                                                         from: date!)
    hourLabel.accessibilityLabel = DateComponentsFormatter.localizedString(from: hourComponents,
                                                                           unitsStyle: .spellOut)
</code></pre>
#### Numbers vocalization
If a number is imported as is in a `label`text, the vocalization will be made on each figure rendering a final value that may be hard to be well understood.
</br><img alt="" style="max-width: 475px; height: auto; " src="./images/iOSdev/DateHeureNombres_12.png" />
</br>As the previous chapter dealing with date and time, the incoming data must be formatted to be analyzed and vocalized according to the proper value of the explained number.
</br><img alt="" style="max-width: 700px; height: auto; " src="./images/iOSdev/DateHeureNombres_8.png" />
<pre><code class="objective-c">
    NSNumber * numberValue = @54038921.7;
    
    NSNumberFormatter * numberFormatter = [[NSNumberFormatter alloc]init];
    numberFormatter.numberStyle = NSNumberFormatterDecimalStyle;
    
    numberLabel.text = [numberFormatter stringFromNumber:numberValue];
    
    numberLabel.accessibilityLabel = [NSNumberFormatter localizedStringFromNumber:numberValue
                                                                      numberStyle:NSNumberFormatterSpellOutStyle];
</code></pre><pre><code class="swift">
    let numberValue = NSNumber(value: 54038921.7)
        
    numberLabel.text = NumberFormatter.localizedString(from: numberValue,
                                                       number: .decimal)
                                                           
    numberLabel.accessibilityLabel = NumberFormatter.localizedString(from: numberValue,
                                                                     number: .spellOut)
</code></pre>
#### Phone numbers vocalization
Once more, formatting data is an essential step for a phone number vocalization including the special cases of the "0" figures.
</br>The example hereunder deals with the french dialing but the rationale behind may be applied to any international type of dialing format.
</br><img alt="default vocalization is not valid for the following phone number : 06.11.22.33.06" style="max-width: 550px; height: auto; " src="./images/iOSdev/DateHeureNombres_10.png" />
</br>The idea of this format is based on a comma separation of each pair of figures that will provide the vocal punctuation.
</br><img alt="in this case the phone number is well vocalized" style="max-width: 550px; height: auto; " src="./images/iOSdev/DateHeureNombres_9.png" />
<pre><code class="objective-c">
    NSString * phoneNumberValue = @"06.11.22.33.06";
    NSArray * phoneNumberElts = [phoneNumberValue componentsSeparatedByString:@"."];
    
    NSNumberFormatter * nbFormatter = [[NSNumberFormatter alloc]init];
    nbFormatter.numberStyle = NSNumberFormatterSpellOutStyle;
    
    NSMutableString * spelledOutString = [[NSMutableString alloc]init];
    
    [phoneNumberElts enumerateObjectsUsingBlock:^(id  _Nonnull obj,
                                                  NSUInteger idx,
                                                  BOOL * _Nonnull stop) {
        NSString * elt = (NSString *)obj;
        
        if (idx != 0) {
            [spelledOutString appendString:@","];
        }
        
        if ([elt hasPrefix:@"0"]) {
            
            NSString * firstFigure = [nbFormatter stringFromNumber:@([[elt substringToIndex:1] integerValue])];
            NSString * secondFigure = [nbFormatter stringFromNumber:@([[elt substringFromIndex:1] integerValue])];
            
            [spelledOutString appendString:firstFigure];
            [spelledOutString appendString:secondFigure];
            
        } else {
            [spelledOutString appendString:[nbFormatter stringFromNumber:@([elt integerValue])]];
        }
    }];
    
    phoneNumberLabel.text = phoneNumberValue;
    phoneNumberLabel.accessibilityLabel = spelledOutString;
</code></pre><pre><code class="swift">
        let phoneNumberValue = "06.11.22.33.06"
        let phoneNumberElts = phoneNumberValue.components(separatedBy: ".")
        
        let nbFormatter = NumberFormatter()
        nbFormatter.numberStyle = .spellOut
        
        var spelledOutString = String()
        
        for (index, elt) in phoneNumberElts.enumerated() {
            
            if (index != 0) {
                spelledOutString.append(",")
            }
            
            if (elt.hasPrefix("0")) {
                
                let firstFigureValue = Int(String(elt[elt.startIndex]))!
                let firstFigure = nbFormatter.string(from: NSNumber(value:firstFigureValue))
                spelledOutString.append(firstFigure!)
                
                let secondFigureValue = Int(String(elt[elt.index(elt.startIndex, offsetBy: 1)]))!
                let secondFigure = nbFormatter.string(from: NSNumber(value:secondFigureValue))
                spelledOutString.append(secondFigure!)
                
            } else {
                
                let figure = nbFormatter.string(from: NSNumber(value:Int(elt)!))
                spelledOutString.append(figure!)
            }
        }

        phoneNumberLabel.text = phoneNumberValue
        phoneNumberLabel.accessibilityLabel = spelledOutString
</code></pre>

## Switch Control
### Description
The accessibility Switch Control feature revolves around the point mode and the item mode.
</br><img alt="accessibility switch control screenshots" style="max-width: 700px; height: auto; " src="./images/iOSdev/SwitchControl.png" />
</br>The element selection using the item mode works fine when the user interface isn't too complicated and uses native elements.
</br>However, this mode may not be helpful according to the rationale behind some specific use cases and then needs to be customized.
#### Customization of the item mode
The Xcode InterfaceBuilder shows the structure used for the example hereunder :
</br><img alt="xcode screenshot" style="max-width: 700px; height: auto; " src="./images/iOSdev/SwitchControlIB.png" />
</br>The following steps represent the customization :
- Creation of 2 groups {Test_1 + Test_2 ; Btn 5 + Btn 6} that must be selectable in the item mode.
- Within the other elements, only Btn 1 et Btn 2 must be separately accessible.

<pre><code class="objective-c">
@interface ViewController2 ()

@property (weak, nonatomic) IBOutlet UIStackView * btnsParentView;
@property (weak, nonatomic) IBOutlet UIButton * btn1;
@property (weak, nonatomic) IBOutlet UIButton * btn2;
@property (weak, nonatomic) IBOutlet UIButton * btn5;
@property (weak, nonatomic) IBOutlet UIButton * btn6;

@end


@implementation ViewController2
- (void)viewDidAppear:(BOOL)animated {
    [super viewDidAppear:animated];
    
    //Creation of the first group 'testWrap' COMBINING the 'Test_1' and 'Test_2' buttons.
    UIButton * testOneButton = [self.view viewWithTag:1];
    UIButton * testTwoButton = [self.view viewWithTag:2];
    CGRect testWrapFrame = CGRectUnion(testOneButton.frame, testTwoButton.frame);
    
    UIAccessibilityElement * testWrap = [[UIAccessibilityElement alloc]initWithAccessibilityContainer:self.view];
    
    testWrap.isAccessibilityElement = false;
    testWrap.accessibilityFrame = testWrapFrame;
    testWrap.accessibilityNavigationStyle = UIAccessibilityNavigationStyleCombined; //Property specific to Switch Control.
    testWrap.accessibilityElements = @[testOneButton, testTwoButton];
    
    
    //Creation of the 'secondGroup' SEPARATING the first two buttons.
    CGRect secondGroupRect = CGRectUnion(_btn1.frame, _btn2.frame);
    CGRect secondGroupFrame = [_btnsParentView convertRect:secondGroupRect
                                                    toView:self.view];
    UIAccessibilityElement * secondGroup = [[UIAccessibilityElement alloc]initWithAccessibilityContainer:_btnsParentView];
    
    secondGroup.isAccessibilityElement = false;
    secondGroup.accessibilityFrame = secondGroupFrame;
    secondGroup.accessibilityNavigationStyle = UIAccessibilityNavigationStyleSeparate;
    secondGroup.accessibilityElements = @[_btn1, _btn2];

    
    //Creation of the 'thirdGroup' COMBINING the last two buttons.
    CGRect thirdGroupRect = CGRectUnion(_btn5.frame, _btn6.frame);
    CGRect thirdGroupFrame = [_btnsParentView convertRect:thirdGroupRect
                                                   toView:self.view];
    UIAccessibilityElement * thirdGroup = [[UIAccessibilityElement alloc]initWithAccessibilityContainer:_btnsParentView];
    
    thirdGroup.isAccessibilityElement = false;
    thirdGroup.accessibilityFrame = thirdGroupFrame;
    thirdGroup.accessibilityNavigationStyle = UIAccessibilityNavigationStyleCombined;
    thirdGroup.accessibilityElements = @[_btn5, _btn6];
    
    
    self.view.accessibilityElements = @[testWrap, 
                                        secondGroup, 
                                        thirdGroup];
}
@end
</code></pre><pre><code class="swift">
class ViewController: UIViewController {
    
    @IBOutlet weak var btnsParentView: UIStackView!
    @IBOutlet weak var btn1: UIButton!
    @IBOutlet weak var btn2: UIButton!
    @IBOutlet weak var btn5: UIButton!
    @IBOutlet weak var btn6: UIButton!
    
    
    override func viewDidAppear(_ animated: Bool) {
        super.viewDidAppear(animated)
        
        //Creation of the first group 'testWrap' COMBINING the 'Test_1' and 'Test_2' buttons.
        let testOneButton = self.view.viewWithTag(1) as? UIButton
        let testTwoButton = self.view.viewWithTag(2) as? UIButton
        let testWrapFrame = testOneButton?.frame.union((testTwoButton?.frame)!)

        let testWrap = UIAccessibilityElement(accessibilityContainer: self.view)

        testWrap.isAccessibilityElement = false
        testWrap.accessibilityFrame = testWrapFrame!
        testWrap.accessibilityNavigationStyle = .combined   //Property specific to Switch Control.
        testWrap.accessibilityElements = [testOneButton!, testTwoButton!]


        //Creation of the 'secondGroup' SEPARATING the first two buttons.
        let secondGroupRect = btn1.frame.union(btn2.frame)
        let secondGroupFrame = btnsParentView.convert(secondGroupRect,
                                                      to: self.view)
        let secondGroup = UIAccessibilityElement(accessibilityContainer: btnsParentView)

        secondGroup.isAccessibilityElement = false
        secondGroup.accessibilityFrame = secondGroupFrame
        secondGroup.accessibilityNavigationStyle = .separate
        secondGroup.accessibilityElements = [btn1, btn2]


        //Creation of the 'thirdGroup' COMBINING the last two buttons.
        let thirdGroupRect = btn5.frame.union(btn6.frame)
        let thirdGroupFrame = btnsParentView.convert(thirdGroupRect,
                                                     to: self.view)
        let thirdGroup = UIAccessibilityElement(accessibilityContainer: btnsParentView)

        thirdGroup.isAccessibilityElement = false
        thirdGroup.accessibilityFrame = thirdGroupFrame
        thirdGroup.accessibilityNavigationStyle = .combined
        thirdGroup.accessibilityElements = [btn5, btn6]


        self.view.accessibilityElements = [testWrap,
                                           secondGroup, 
                                           thirdGroup]
    }
}
</code></pre>

</br>The visual rendering is exposed hereunder :
</br><img alt="visual rendering screenshot" style="max-width: 1100px; height: auto; " src="./images/iOSdev/SwitchControl_1.png" />
</br>Once activated, the created groups allow to reach directly the elements which they contain.
### Link
- [`accessibilityNavigationStyle`](https://developer.apple.com/documentation/objectivec/nsobject/1615200-accessibilitynavigationstyle)

## Continuous adjustable values
### Description
Graphics like `picker`, `stepper` or `slider` have the ability to continuously change the value they provide.
</br><img alt="picker, stepper and slider screenshot" style="max-width: 700px; height: auto; " src="./images/iOSdev/ValeursAjustables_1.png" />
</br>It's hard to render what's happening when the changing isn't graphically or vocally notified.
</br>The following methodology to resolve this problem for blind people using VoiceOver may be the same for these three graphics, that's why only the `stepper` will be handled.
</br></br>Creating a `stepper` with a `label` to display its value provides the following rendering :
</br><img alt="stepper is vocalize like 3 differents objects" style="max-width: 900px; height: auto; " src="./images/iOSdev/ValeursAjustables_2.png" />
</br>The focus must change to :
- Get each element that increases or decreases the value.
- Know the value provided by the `label`.

Moreover, there is no real time notification dealing with the value changing.
</br>Nothing is definitely blocking in use but these latest remarks lead to a new design for this example that used to be so simple.
</br></br>The rationale behind is to be able to change the `stepper` value, to be informed of this modification and to know the new value thanks to a single and unique object.
</br>**Group the `stepper`and the `label`** *(a StackView should do the job)* then put **`UIAccessibilityTraitAdjustable`** as a new trait for this new accessible group.
</br>This `trait` is **MANDATORY** linked to the `accessibilityIncrement()` and `accessibilityDecrement()` methods that must be implemented to define the continous way of changing the value.
</br></br>As a result, all the previous constraints are removed and a `hint` is natively provided by this `trait` to mention the proper way of using this object.
</br><img alt="stepper is well vocalized" style="max-width: 1000px; height: auto; " src="./images/iOSdev/ValeursAjustables_4.png" />
- To get this result, the container class {`stepper` + `label`} is first created to allow the delegation for the future value changing.

<pre><code class="objective-c">
-===== StepperWrapper.h =====-
NS_ASSUME_NONNULL_BEGIN
@class StepperWrapper;

@protocol AdjustableForAccessibilityDelegate &lt;NSObject&gt;
- (void)adjustableDecrementForView:(StepperWrapper *)view;
- (void)adjustableIncrementForView:(StepperWrapper *)view;
@end


@interface StepperWrapper : UIStackView
@property(nonatomic,weak) id &lt;AdjustableForAccessibilityDelegate&gt; delegate;
@end
NS_ASSUME_NONNULL_END
    
    
-===== StepperWrapper.m =====-
NS_ASSUME_NONNULL_BEGIN
@implementation StepperWrapper

- (instancetype)initWithCoder:(NSCoder *)coder {
    
    self = [super initWithCoder:coder];
    
    self.isAccessibilityElement = YES;
    self.accessibilityTraits = UIAccessibilityTraitAdjustable;
    
    return self;
}

- (void)accessibilityDecrement {
    if ([_delegate respondsToSelector:@selector(adjustableDecrementForView:)]) {
        [_delegate adjustableDecrementForView:self];
    }
}

- (void)accessibilityIncrement {
    if ([_delegate respondsToSelector:@selector(adjustableIncrementForView:)]) {
        [_delegate adjustableIncrementForView:self];
    }
}
</code></pre><pre><code class="swift">
protocol AdjustableForAccessibilityDelegate: class {
    func adjustableDecrementFor(_ view: StepperWrapper)
    func adjustableIncrementFor(_ view: StepperWrapper)
}


class StepperWrapper: UIStackView {

    weak var delegate: AdjustableForAccessibilityDelegate?
    
    override init(frame: CGRect) {
        super.init(frame: frame)
    }
    
    required init(coder: NSCoder) {
        super.init(coder: coder)
        
        isAccessibilityElement = true
        accessibilityTraits = .adjustable
    }
    
    override func accessibilityDecrement() {
        delegate?.adjustableDecrementFor(self)
    }
    
    override func accessibilityIncrement() {
        delegate?.adjustableIncrementFor(self)
    }
}
</code></pre>

- Next, the two methods of the implemented protocol must be defined before updating and vocally presenting the new value in the ViewController.

<pre><code class="objective-c">
NS_ASSUME_NONNULL_BEGIN
@interface ContinuousAdjustableValues () &lt;AdjustableForAccessibilityDelegate&gt;
@property (weak, nonatomic) IBOutlet StepperWrapper * stepperStackViewAccess;
@property (weak, nonatomic) IBOutlet UIStepper * stepperAccess;
@property (weak, nonatomic) IBOutlet UILabel * stepperValueAccess;
@end


@implementation ContinuousAdjustableValues
- (void)viewWillAppear:(BOOL)animated {
    [super viewWillAppear:animated];
    
    _stepperStackViewAccess.delegate = self;
    _stepperStackViewAccess.accessibilityLabel = @"increase or decrease the value";
    _stepperStackViewAccess.accessibilityValue = _stepperValueAccess.text;
}

- (void)adjustableDecrementForView:(StepperWrapper *)view {
    _stepperAccess.value  -= _stepperAccess.stepValue;
    [self updateStepperValue];
}

- (void)adjustableIncrementForView:(StepperWrapper *)view {
    _stepperAccess.value  += _stepperAccess.stepValue;
    [self updateStepperValue];
}

- (void) updateStepperValue {
    _stepperValueAccess.text = [NSString stringWithFormat:@"Value = %0.1f",_stepperAccess.value];
    _stepperStackViewAccess.accessibilityValue = _stepperValueAccess.text;
}
@end
NS_ASSUME_NONNULL_END
</code></pre><pre><code class="swift">
class ContinuousAdjustableValues: UIViewController, AdjustableForAccessibilityDelegate {
    
    @IBOutlet weak var stepperStackViewAccess: StepperWrapper!
    @IBOutlet weak var stepperAccess: UIStepper!
    @IBOutlet weak var stepperValueAccess: UILabel!
    
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        stepperStackViewAccess.delegate = self
        stepperStackViewAccess.accessibilityLabel = "increase or decrease the value"
        stepperStackViewAccess.accessibilityValue = stepperValueAccess.text
    }
    
    func adjustableDecrementFor(_ view: StepperWrapper) {
        stepperAccess.value -= stepperAccess.stepValue
        updateStepperValue()
    }
    
    func adjustableIncrementFor(_ view: StepperWrapper) {
        stepperAccess.value += stepperAccess.stepValue
        updateStepperValue()
    }
    
    private func updateStepperValue() {
        stepperValueAccess.text = "Value = \(stepperAccess.value)"
        stepperStackViewAccess.accessibilityValue = stepperValueAccess.text
    }
}
</code></pre>
### Link
- [`UIAccessibilityTraitAdjustable`](https://developer.apple.com/documentation/uikit/uiaccessibilitytraitadjustable)

## Custom actions
### Description
Some basic gestures may become a real headache to be perfectly understood by VoiceOver in a fluent way for the user.
</br>A convincing example is the iOS native mail that may suggest some actions as follows :
</br><img alt="flick left to display actions without VoiceOver" style="max-width: 900px; height: auto; " src="./images/iOSdev/Actions_1.png" />
</br>This gesture cannot lead to the proper result with VoiceOver because a flick left will give rise to the selection of the previous accessible element instead of suggesting actions as above.
</br></br>A solution may consist of **associating the selected element with an array of actions** that will be automatically introduced to the user.
</br><img alt="" style="max-width: 900px; height: auto; " src="./images/iOSdev/Actions_2.png" />

<pre><code class="objective-c">
@interface CustomActions ()
@property (weak, nonatomic) IBOutlet UILabel * persoElt;
@end


@implementation CustomActions
- (void)viewDidLoad {
    [super viewDidLoad];
    
    UIAccessibilityCustomAction * a11yMoreAction = [[UIAccessibilityCustomAction alloc]initWithName:@"more"
                                                                                                target:self
                                                                                              selector:@selector(moreAction)];
    UIAccessibilityCustomAction * a11yFlagAction = [[UIAccessibilityCustomAction alloc]initWithName:@"flag"
                                                                                                target:self
                                                                                              selector:@selector(flagAction)];
    UIAccessibilityCustomAction * a11yDeleteAction = [[UIAccessibilityCustomAction alloc]initWithName:@"delete"
                                                                                                  target:self
                                                                                                selector:@selector(deleteAction)];
    
    _persoElt.accessibilityCustomActions = @[a11yMoreAction,
                                             a11yFlagAction,
                                             a11yDeleteAction];
}

- (BOOL)moreAction {
    //Code to be implemented for the appropriate action.
    return YES;
}

- (BOOL)flagAction {
    //Code to be implemented for the appropriate action.
    return YES;
}

- (BOOL)deleteAction {
    //Code to be implemented for the appropriate action.
    return YES;
}
@end
</code></pre><pre><code class="swift">
class CustomActions: UIViewController {
    
    @IBOutlet weak var persoElt: UILabel!
    
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        let a11yMoreAction = UIAccessibilityCustomAction(name: "more",
                                                         target: self,
                                                         selector: #selector(moreAction))
        
        let a11yFlagAction = UIAccessibilityCustomAction(name: "flag",
                                                         target: self,
                                                         selector: #selector(flagAction))
        
        let a11yDeleteAction = UIAccessibilityCustomAction(name: "delete",
                                                           target: self,
                                                           selector: #selector(deleteAction))
        
        persoElt.accessibilityCustomActions = [a11yMoreAction,
                                               a11yFlagAction,
                                               a11yDeleteAction]
    }
    
    
    @objc func moreAction() -> Bool {
        //Code to be implemented for the appropriate action.
        return true
    }
    
    @objc func flagAction() -> Bool {
        //Code to be implemented for the appropriate action.
        return true
    }
    
    @objc func deleteAction() -> Bool {
        //Code to be implemented for the appropriate action.
        return true
    }
}
</code></pre>

</br>The code above gives rise to the following result thanks to consecutive flicks on the selected accessible element :
</br><img alt="flick up to vocalize suggesterd actions with VoiceOver activated" style="max-width: 900px; height: auto; " src="./images/iOSdev/Actions_3.png" />

### Links
- [`accessibilityCustomActions`](https://developer.apple.com/documentation/objectivec/nsobject/1615150-accessibilitycustomactions)
- [`UIAccessibilityCustomAction`](https://developer.apple.com/documentation/uikit/uiaccessibilitycustomaction)

## Focus an element
### Description
The **UIAccessibilityFocus** informal protocol provides programming elements to be informed of the accessible element focus :
- **accessibilityElementDidBecomeFocused** : called when the accessible element is focused.
- **accessibilityElementDidLoseFocus** : fired when the accessible element lost focus.
- **accessibilityElementIsFocused** : boolean value indicating the accessible element selection.

Overriden inside a view controller, these elements will be helpless if you think they will be called when an accessible element is focused.
</br>However, if they are **implemented in the accessible element itself**, you won't be disappointed.
</br>This mistake is due to the informal aspect of the protocol that allows an override of its methods inside an inherited NSObject element even if it's not accessible... like a view controller for instance.
</br></br>The example below enables to follow the focus of an accessible element identified by its `accessibleIdentifier`.
<pre><code class="objective-c">
#import "UIView+focus.h"

@implementation UIView (focus)

- (void)accessibilityElementDidBecomeFocused {
    
    if ([self accessibilityElementIsFocused]) {
        NSLog(@"My element has become focused.");
    }
}

- (void)accessibilityElementDidLoseFocus {
    
    if ([self accessibilityElementIsFocused]) {
        NSLog(@"My element has lost focus.");
    }
}

- (BOOL)accessibilityElementIsFocused {
    
    if ([self.accessibilityIdentifier isEqualToString:@"myAccessibleElt"]) {
        return YES;
    } else {
        return NO;
    }
}
@end
</code></pre><pre><code class="swift">
extension UIView {
    override open func accessibilityElementDidBecomeFocused() {
        
        if self.accessibilityElementIsFocused() {
            print("My element has become focused.")
        }
    }
    
    override open func accessibilityElementDidLoseFocus() {
        
        if self.accessibilityElementIsFocused() {
            print("My element has lost focus.")
        }
    }
    
    override open func accessibilityElementIsFocused() -> Bool {
        
        if (self.accessibilityIdentifier == "myAccessibleElt") {
            return true
        } else {
            return false
        }
    }
}
</code></pre>

### Link
- [`UIAccessibilityFocus`](https://developer.apple.com/documentation/uikit/accessibility/uiaccessibilityfocus)

## Custom rotor
### Description
Since iOS10, adding a new rotor option is possible thanks to the **UIAccessibilityCustomRotor** whose creation is based on 2 elements :
- **UIAccessibilityCustomRotorSearchPredicate** : defines the logic according to the flick type on the screen.
- **UIAccessibilityCustomRotorItemResult** : ensued element from the logic above.

<img alt="" style="max-width: 700px; height: auto; " src="./images/iOSdev/CustomRotor_1.png" />
</br></br>To illustrate the programing side of this feature, the code snippet below counts and displays all the flicks up and down.
<pre><code class="objective-c">
@interface CustomRotor ()
@property (weak, nonatomic) IBOutlet UILabel * rotorTitle;
@property (weak, nonatomic) IBOutlet UILabel * upLabel;
@property (weak, nonatomic) IBOutlet UILabel * downLabel;
@end


@implementation CustomRotor

static NSInteger flicksUp;
static NSInteger flicksDown;


+ (void)initialize {
    
    flicksUp = 0;
    flicksDown = 0;
}


- (void)viewDidLoad {
    [super viewDidLoad];
    
    UIAccessibilityCustomRotor * rotor = [self buildMyRotor:@"Rotor info"];
    self.accessibilityCustomRotors = @[rotor];
}


- (UIAccessibilityCustomRotor *)buildMyRotor:(NSString * _Nonnull)name{
    
    return [[UIAccessibilityCustomRotor alloc]initWithName:name
                                           itemSearchBlock:^UIAccessibilityCustomRotorItemResult * _Nullable(UIAccessibilityCustomRotorSearchPredicate * _Nonnull predicate) {
                                               
                                               if (predicate.searchDirection == UIAccessibilityCustomRotorDirectionNext) {
                                                   
                                                   flicksDown += 1;
                                                   self.downLabel.text = [NSString stringWithFormat:@"%ld",(long)flicksDown];
                                                   
                                               } else {
                                                   
                                                   flicksUp += 1;
                                                   self.upLabel.text = [NSString stringWithFormat:@"%ld",(long)flicksUp];
                                               }
                                               
                                               return [[UIAccessibilityCustomRotorItemResult alloc] initWithTargetElement:self.rotorTitle
                                                                                                              targetRange:nil];
                                           }];
}
@end
</code></pre><pre><code class="swift">
class CustomRotor: UIViewController {

    @IBOutlet weak var rotorTitle: UILabel!
    
    static var flicksUp = 0
    @IBOutlet weak var upLabel: UILabel!
    
    static var flicksDown = 0
    @IBOutlet weak var downLabel: UILabel!
    
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        let rotor = buildMyRotor("Rotor info")
        self.accessibilityCustomRotors = [rotor]
    }
    
    
    func buildMyRotor(_ name: String) -> UIAccessibilityCustomRotor {
        
        return  UIAccessibilityCustomRotor.init(name: name,
                                                itemSearch: { predicate -> UIAccessibilityCustomRotorItemResult? in
                                                    
                                                    if (predicate.searchDirection == UIAccessibilityCustomRotor.Direction.next) {
                                                        
                                                        CustomRotor.flicksDown += 1
                                                        self.downLabel.text = String(CustomRotor.flicksDown)
                                                        
                                                    } else {
                                                        
                                                        CustomRotor.flicksUp += 1
                                                        self.upLabel.text = String(CustomRotor.flicksUp)
                                                    }
                                                    
                                                    return UIAccessibilityCustomRotorItemResult.init(targetElement:self.rotorTitle,
                                                                                                     targetRange: nil)
        })
    }
}
</code></pre>

</br>The code above gives rise to the following illustrated steps :
</br><img alt="changed display with a rotor option" style="max-width: 1200px; height: auto; " src="./images/iOSdev/CustomRotor_2.png" />
</br>The use of a custom rotor is definitely not a natural part of a mobile application, that's why its **functioning** and **purpose** must be **fully explained** to assist the user experience.
</br></br>The main difference between a rotor option and a custom action or an adjustable element relies on the fact that it can be activated whatever the selected element.
</br>However, if the selected element is adjustable or holds any custom actions, **its actions will prevail over those of the rotor**.
</br></br>Such a feature must be implemented with **caution** and according to **specific needs** whose only purpose should be to **improve and facilitate the user experience**.
### Links
- [`UIAccessibilityCustomRotor`](https://developer.apple.com/documentation/uikit/uiaccessibilitycustomrotor)
- [`UIAccessibilityCustomRotorItemResult`](https://developer.apple.com/documentation/uikit/uiaccessibilitycustomrotoritemresult)
- [`UIAccessibilityCustomRotorSearchPredicate`](https://developer.apple.com/documentation/uikit/uiaccessibilitycustomrotorsearchpredicate)

<!--  This file is part of a11y-guidelines | Our vision of mobile & web accessibility guidelines and best practices, with valid/invalid examples.
 Copyright (C) 2016  Orange SA
 See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). -->