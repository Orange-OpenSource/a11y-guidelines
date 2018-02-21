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

This guide aims to present the various iOS <abbr>SDK</abbr> accessibility options. Through different categories, this guide explains how to use the accessibility attributes&nbsp;/ methods and provides links to the [`official documentation from Apple`](https://developer.apple.com/documentation/uikit/accessibility). Code snippets are also available to show you how to implement it (Swift 4, Objective C).

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

    //Many traits possible combination.  
    onePageButton.accessibilityTraits = UIAccessibilityTraitButton + UIAccessibilityTraitSelected;
}
</code></pre><pre><code class="swift">
func customTraits() {
    //Specified UIPageControl with the ’ajustable’ trait.
    pageControl.accessibilityTraits = UIAccessibilityTraitAdjustable
    
    //Added header.  
    defaultHeaderViewCell.accessibilityTraits = UIAccessibilityTraitHeader

    //Many traits possible combination.  
    onePageButton.accessibilityTraits = UIAccessibilityTraitButton + UIAccessibilityTraitSelected
}
</code></pre>
### Link
- [`accessibilityTraits`](https://developer.apple.com/documentation/objectivec/nsobject/1615202-accessibilitytraits)

## Hide elements from accessibility
### Description
It is possible via an accessibility attribute to hide elements from accessibility tools (e.g. VoiceOver). By extension, it is possible to force some elements to be visible to accessibility tools.
  
- **isAccessibilityElement**&nbsp;: boolean to specify that an element is visible or not to the Accessibility <abbr>API</abbr> (VoiceOver or other).
- **accessibilityElementsHidden**&nbsp;: boolean to indicate that the children elements of the target element are visible or not to the Accessibility <abbr>API</abbr>.
- **accessibilityViewIsModal**&nbsp;: boolean that can make visible or not the sibling elements of the target element to the Accessibility <abbr>API</abbr>. Very useful for making accessible custom popin views for example.
  
The `accessibilityElement` attribute is available via the interface builder but can also be used directly through the code. The other two attributes are available only through the code.
### Example
A red square will be drawn and contain two other squares (blue and yellow) in order to apply the attributes defined hereabove.

<img style="max-width: 500px; height: auto; " src="./images/iOSdev/MasquerDesÉléments_1.png" />
<pre><code class="objective-c">
- (void)viewDidAppear:(BOOL)animated {
    [super viewDidAppear:animated];
    
    //Creation of an element inside which 2 other children elements will be inserted.
    CGRect parentViewRect = CGRectMake(100.0, 100.0, 40.0, 40.0);
    UIView * myParentView = [[UIView alloc]initWithFrame:parentViewRect];
    myParentView.backgroundColor = [UIColor redColor];
    
    [UIApplication.sharedApplication.keyWindow addSubview:myParentView];
    
    //The target element musn't be accessible so as to be considered as a container to its children elements.
    //If this attribute is 'YES', the target element will be the only one accessible element.
    myParentView.isAccessibilityElement = NO;
    
    //The elements contained in the target element won't be accessible even if they're defined as such.
    //If this attribute is 'NO' and the previous one is 'NO', only the children elements will be accessible.
    myParentView.accessibilityElementsHidden = NO;
    
    [self createViewWithColor:[UIColor yellowColor] 
                       inside:myParentView];
    [self createViewWithColor:[UIColor blueColor] 
                       inside:myParentView];
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
        let parentViewRect = CGRect.init(x: 100.0,
                                         y: 100.0,
                                         width: 40.0,
                                         height: 40.0)
        let myParentView = UIView.init(frame: parentViewRect)
        myParentView.backgroundColor = .red
        
        UIApplication.shared.keyWindow?.addSubview(myParentView)
        
        //The target element musn't be accessible so as to be considered as a container to its children elements.
        //If this attribute is 'true', the target element will be the only one accessible element.
        myParentView.isAccessibilityElement = true
        
        //The elements contained in the target element won't be accessible even if they're defined as such.
        //If this attribute is 'false' and the previous one is 'false', only the children elements will be accessible.
        myParentView.accessibilityElementsHidden = false
        
        self.createViewWithColor(.yellow, inside: myParentView)
        self.createViewWithColor(.blue, inside: myParentView)
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
UIAccessibilityPostNotification(UIAccessibilityAnnouncementNotification, @"This is a VoiceOver message.");
</code></pre><pre><code class="swift">
UIAccessibilityPostNotification(UIAccessibilityAnnouncementNotification, "This is a VoiceOver message.")
</code></pre>
### Links
- [`UIAccessibilityPostNotification`](https://developer.apple.com/documentation/uikit/1615194-uiaccessibilitypostnotification)
- [`UIAccessibilityAnnouncementNotification`](https://developer.apple.com/documentation/uikit/uiaccessibilityannouncementnotification)

## Check accessibility options state
### Description
On iOS, it is possible to check the accessibility options state. Is VoiceOver activated? Is the audio-mono mode activated? Several methods can help you to check with that. They are part of the `UIKit` framework.
</br>The most useful method is **UIAccessibilityIsVoiceOverRunning** which allows to know whether VoiceOver is activated.
</br></br>Many other methods are available in the links hereafter.
### Exemple
<pre><code class="objective-c">
    BOOL isVoiveOverRunning = (UIAccessibilityIsVoiceOverRunning() ? 1 : 0);
    BOOL isSwitchControlRunning = (UIAccessibilityIsSwitchControlRunning() ? 1 : 0);
    
    NSLog(@"VoiceOver is %d and SwitchControl is %d.", isVoiveOverRunning, isSwitchControlRunning);
</code></pre><pre><code class="swift">
    let isVoiceOverRunning = (UIAccessibilityIsVoiceOverRunning() ? 1 : 0)
    let isSwitchControlRunning = (UIAccessibilityIsSwitchControlRunning() ? 1 : 0)
        
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
//The element'myLabel' is focused and vocalized with its new value.
- (IBAction)tapHere:(UIButton *)sender {
    
    myLabel.accessibilityLabel = @"This is a new label.";
    UIAccessibilityPostNotification(UIAccessibilityLayoutChangedNotification, myLabel);
}

//The first accessible element in the page is focused and vocalized with a sound like announcing a new page.
- (IBAction)clic:(UIButton *)sender {
    
    UIAccessibilityPostNotification(UIAccessibilityScreenChangedNotification, nil);
}
</code></pre><pre><code class="swift">
//The element'myLabel' is focused and vocalized with its new value.
@IBAction func tapHere(_ sender: UIButton) {
        
    myLabel.accessibilityLabel = "This is a new label."
    UIAccessibilityPostNotification(UIAccessibilityLayoutChangedNotification, myLabel)
}
    
//The first accessible element in the page is focused and vocalized with a sound like announcing a new page.
@IBAction func clic(_ sender: UIButton) {
        
    UIAccessibilityPostNotification(UIAccessibilityScreenChangedNotification, mySecondLabel)
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
    UIAccessibilityPostNotification(UIAccessibilityLayoutChangedNotification, myLabel)
}
</code></pre>
### Link   
- [`accessibilityLanguage`](https://developer.apple.com/documentation/objectivec/nsobject/1615192-accessibilitylanguage)

## Modify the focus area of VoiceOver
### Description
In the case of dynamically modified element or component not inheriting from `UIView`, it is possible to modify the focus area of accessibility of this element, i.e. the area <span lang="en">VoiceOver</span> highlights when focusing an element.

- **accessibilityFrame**&nbsp;: sets the area via a rectangle (`CGRect`).
</br>Usually, for an element inheriting from `UIView`, this area is the «&nbsp;visible&nbsp;» part of the view.
- **accessibilityPath**&nbsp;: equivalent to `AccessibilityFrame` but sets the area via Bezier curves.
- **accessibilityActivationPoint**&nbsp;: the activation «&nbsp;point&nbsp;» of an element for accessibility tools.
</br>By default, this point is at the centre of the element.
### Example
<img style="max-width: 700px; height: auto; " src="./images/iOSdev/ModifierLaZoneDeFocus_1.png" />
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
        
        UIAccessibilityPostNotification(UIAccessibilityLayoutChangedNotification, myLabel)
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
        
        UIAccessibilityPostNotification(UIAccessibilityScreenChangedNotification, myLabel)
    }
</code></pre>
### Links
- [`accessibilityFrame`](https://developer.apple.com/documentation/uikit/uiaccessibilityelement/1619579-accessibilityframe)
- [`accessibilityPath`](https://developer.apple.com/documentation/objectivec/nsobject/1615159-accessibilitypath)
- [`accessibilityActivationPoint`](https://developer.apple.com/documentation/objectivec/nsobject/1615179-accessibilityactivationpoint)

## Grouping elements
### Description
Grouping elements may be used to vocalize the bundle once and to associate a dedicated action to it.
</br>In this case, a view must be created to encapsulate all the elements and an action must be implemented (only the container must be an accesible element).
</br></br>Another grouping elements case could use the **shouldGroupAccessibilityChildren** attribute which is a Boolean that indicates whether <span lang="en">VoiceOver</span> must group its children views.
</br>This allows making unique vocalizations or define a particular reading order for a part of the page (see <a href="http://a11y-guidelines.orange.com/mobile_EN/dev-ios.html#reading-order">Reading order</a> section for further information).
### Example
We wish to obtain a 'label' and a 'switch control' as one unique block.
</br><img style="max-width: 700px; height: auto; " src="./images/iOSdev/GrouperDesÉléments.png" />
<pre><code class="objective-c">
- (void)viewDidAppear:(BOOL)animated {
    [super viewDidAppear:animated];
    
    //View that will encapsulate the 'label' and the 'Switch Control'.
    CGRect wrapFrame = CGRectUnion(myLabel.frame, mySwitchControl.frame);
    wrapView = [[UIView alloc]initWithFrame: wrapFrame];
    
    wrapView.isAccessibilityElement = YES;
    wrapView.accessibilityLabel = myLabel.accessibilityLabel;
    wrapView.accessibilityValue = mySwitchControl.accessibilityValue;
    
    
    //Gesture for action on the previous created view.
    UITapGestureRecognizer * tapGesture = [[UITapGestureRecognizer alloc] initWithTarget:self
                                                                                  action:@selector(changeValue:)];
    tapGesture.numberOfTapsRequired = 1;
    [wrapView addGestureRecognizer:tapGesture];
    
    [self.view addSubview:wrapView];
}

- (void)changeValue:(UITapGestureRecognizer *)sender {
    mySwitchControl.on = ![mySwitchControl.accessibilityValue boolValue];
}
</code></pre><pre><code class="swift">
    override func viewDidAppear(_ animated: Bool) {
        super.viewDidAppear(animated)
        
        //View that will encapsulate the 'label' and the 'Switch Control'.
        let wrapFrame = myLabel.frame.union(mySwitchControl.frame)
        let wrapView = UIView.init(frame: wrapFrame)
        
        wrapView.isAccessibilityElement = true
        wrapView.accessibilityLabel = myLabel.accessibilityLabel
        wrapView.accessibilityValue = mySwitchControl.accessibilityValue
        
        
        //Gesture for action on the previous created view.
        let tapGesture = UITapGestureRecognizer.init(target: self,
                                                     action: #selector(changeValue(sender:)))
        tapGesture.numberOfTapsRequired = 1;
        wrapView.addGestureRecognizer(tapGesture)
        
        self.view.addSubview(wrapView)
    }
    
    @objc func changeValue(sender: UITapGestureRecognizer) {
        
        let switchBoolValue = NSString(string:mySwitchControl.accessibilityValue!).boolValue
        mySwitchControl.setOn(!switchBoolValue,
                              animated: false)
    }
</code></pre>
### Link
- [`shouldGroupAccessibilityChildren`](https://developer.apple.com/documentation/objectivec/nsobject/1615143-shouldgroupaccessibilitychildren)

## Accessibility events
### Description
iOS sends several accessibility events to the applications. They are sent when accessibility options are changed. For example, if VoiceOver is deactivated, the running applications will receive the `UIAccessibilityVoiceOverStatusDidChange` event. This is very useful when used simultaneously with `UIAccessibilityIsVoiceOverRunning`.

Let's say the application behaves differently when VoiceOver is turned on. This is detected by the `UIAccessibilityIsVoiceOverRunning` method. What happens if VoiceOver is disabled? This is when the system events can be used. By listening to these events, it is possible to dynamically change how the application behaves.
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
                                               name: .UIAccessibilitySwitchControlStatusDidChange,
                                               object: nil)
                                               
        NotificationCenter.default.addObserver(self,
                                               selector: #selector(methodToBeCalled(notification:)),
                                               name: .UIAccessibilityVoiceOverStatusDidChange,
                                               object: nil)
    }
    
    @objc private func methodToBeCalled(notification: Notification) {

        let switchControlStatus = (UIAccessibilityIsSwitchControlRunning() ? "OK" : "NOK")
        let voiceOverStatus = (UIAccessibilityIsVoiceOverRunning() ? "OK" : "NOK")
        
        print("SWITCH CONTROL is \(switchControlStatus) and VOICE OVER is \(voiceOverStatus).")
    }
</code></pre>
### Link
All accessibility events are available on the <a href="https://developer.apple.com/documentation/uikit/accessibility/notification_names?language=objc">official documentation from Apple</a>.

## Text size
### Description
Dynamic font size on iOS is very tricky.
</br>Since iOS7, it is possible to use an <abbr>API</abbr> to make the text size dynamic according to the phone settings.
</br><img style="max-width: 600px; height: auto; " src="./images/iOSdev/TailleDesTextes_1.png" />
</br>The following steps should be respected in order to easily use this <abbr>API</abbr>&nbsp;:
 - Choose the system fonts even if it's possible to use its own fonts inherited from `UIFont` and assisted with `UIFontMetrics` (iOS11 new feature).
 <pre><code class="objective-c">
    __weak IBOutlet UILabel * fontHeadline;
    __weak IBOutlet UILabel * fontFootNote;
    
    //Use of the default native font for a header.
    UIFont * myFont = [UIFont preferredFontForTextStyle:UIFontTextStyleHeadline];
    
    //Personal font definition for a header.
    UIFont * fontHead = [UIFont fontWithName:@"Chalkduster" size:30.0];
    UIFontMetrics * fontHeadMetrics = [[UIFontMetrics alloc]initForTextStyle:UIFontTextStyleHeadline];
    fontHeadline.font = [fontHeadMetrics scaledFontForFont:fontHead];
</code></pre><pre><code class="swift">
    @IBOutlet weak var fontHeadline: UILabel!
    @IBOutlet weak var fontFootNote: UILabel!
    
    //Use of the default native font for a header.
    let myFont = UIFont.preferredFont(forTextStyle: .headline)
        
    //Personal font definition for a header.
    let fontHead = UIFont(name: "Chalkduster", size: 30.0)
    let fontHeadMetrics = UIFontMetrics(forTextStyle: .headline)
    fontHeadline.font = fontHeadMetrics.scaledFont(for: fontHead!)
</code></pre>
 - Listen to the font size settings change event **UIContentSizeCategoryDidChange** or directly use the property **adjustsFontForContentSizeCategory** to have an automatic update if you're programming in iOS11.
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
                                           name: .UIContentSizeCategoryDidChange,
                                           object: nil)
    
    //Automatic changing of the font size without listening to the previous notification.
    fontHeadline.adjustsFontForContentSizeCategory = true
    
    @objc func methodToBeCalled(notification: Notification) {

        //When handling the font size change event, you must redisplay the affected elements.
        fontFootNote.font = UIFont.preferredFont(forTextStyle: .footnote)
    }
</code></pre>
 - Be careful that the containers fit their contents: using constraints is the best way to perform this task using dynamic values.
### Links
- [Dynamic Type <abbr>API</abbr>](https://developer.apple.com/library/ios/documentation/StringsTextFonts/Conceptual/TextAndWebiPhoneOS/CustomTextProcessing/CustomTextProcessing.html#//apple_ref/doc/uid/TP40009542-CH4-SW65)
- [`UIContentSizeCategoryDidChange`](https://developer.apple.com/documentation/foundation/nsnotification.name/1622948-uicontentsizecategorydidchange)
- [`adjustsFontForContentSizeCategory`](https://developer.apple.com/documentation/uikit/uicontentsizecategoryadjusting/1771731-adjustsfontforcontentsizecategor?language=objc)


## Reading order
### Description
Redefining the VoiceOver reading order is done using the **UIAccessibilityContainer** protocol. The idea is to have a table of elements that defines the reading order of the elements. It is often very useful to use the **shouldGroupAccessibilityElement** attribute so we have a precise order but for a part of the view only (the rest of the view will be read using the native order provided by VoiceOver).
### Example
The best way to illustrate this feature is the keyboard whose keys order isn't necessary the appropriate one.
</br>Here's the desired order : 1, 2, 3, 4, 7, 6, 8, 9, 5.
</br>Two views are created (blue and grey) and we graphically put the numbers in them as defined hereunder :
</br><img style="max-width: 500px; height: auto; " src="./images/iOSdev/OrdreDeLecture_1.png" />
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
### Link
- [`UIAccessibilityContainer`](https://developer.apple.com/documentation/uikit/accessibility/uiaccessibilitycontainer?language=objc)
- [`shouldGroupAccessibilityChildren`](https://developer.apple.com/documentation/objectivec/nsobject/1615143-shouldgroupaccessibilitychildren)

<!--  This file is part of a11y-guidelines | Our vision of mobile & web accessibility guidelines and best practices, with valid/invalid examples.
 Copyright (C) 2016  Orange SA
 See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). -->