---
title: "iOS developer guide"
displayToc: true
---

# iOS developer guide

This guide aims to present the various iOS <abbr>SDK</abbr> accessibility options : through different categories, it explains how to use the accessibility attributes&nbsp;/ methods and provides links to the [`Apple official documentation`](https://developer.apple.com/documentation/uikit/accessibility).

Code snippets are also available to show the different possible implementations {(*Swift 5.3*, *Objective C*) + (*Xcode 12*, *iOS 14*)}.

<br><br>

## Element trait
<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item" role="presentation">
        <a class="nav-link active"
           data-toggle="tab" 
           href="#TraitElt-Description" 
           role="tab" 
           aria-selected="true">Description</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#TraitElt-Details" 
           role="tab" 
           aria-selected="false">Details</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#TraitElt-Example" 
           role="tab" 
           aria-selected="false">Example</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#TraitElt-BasicOperations" 
           role="tab" 
           aria-selected="false">Basic operations</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#TraitElt-Links" 
           role="tab" 
           aria-selected="false">Link</a>
    </li>
</ul><div class="tab-content">
<div class="tab-pane show active"
     id="TraitElt-Description"
     role="tabpanel">
     
The `accessibilityTraits` attribute allows to specify the trait of an element to the accessibility <abbr>API</abbr>.
<br>Then, this attribute **plays an important role on the element vocalization** because it enables VoiceOver to recognize its type.  

</div>
<div class="tab-pane" id="TraitElt-Details" role="tabpanel">

This accessibility attribute is available via the interface builder but also programmatically.

There are many available traits and the most commonly used are:

- **accessibilityTraitNone**: removes any semantic value to the element.

- **accessibilityTraitButton**: adds the “button” trait, the element is seen as a button by VoiceOver.

- **accessibilityTraitLink**: useful to define a label as a “link”.

- **accessibilityTraitHeader**: defines an element as a header *(see the <a href="../design#title-and-header">«&nbsp;Title&nbsp;and&nbsp;header&nbsp;»</a> section)*.

- **accessibilityTraitAdjustable**: defines an element as an “adjustable” element, that is to say an element that users can adjust in a continuous manner, such as a slider or a picker view (see the [VoiceOver&nbsp;user&nbsp;guide](../voiceover) with the one-finger swipe up and down).

</div>
<div class="tab-pane" id="TraitElt-Example" role="tabpanel">

<pre><code class="objectivec">
- (void)customTraits() {
    //Specified UIPageControl with the ’ajustable’ trait.
    pageControl.accessibilityTraits = UIAccessibilityTraitAdjustable;
    
    //Added header.  
    defaultHeaderViewCell.accessibilityTraits = UIAccessibilityTraitHeader;
}
</code></pre>

<pre><code class="swift">
func customTraits() {
    //Specified UIPageControl with the ’ajustable’ trait.
    pageControl.accessibilityTraits = .adjustable
    
    //Added header.
    defaultHeaderViewCell.accessibilityTraits = .header
}
</code></pre>

</div>
<div class="tab-pane" id="TraitElt-BasicOperations" role="tabpanel">

The `accessibilityTrait` attribute is actually a `bitmask` in which each element has its own value.

![](../../images/iOSdev/Traits.png)
<br>It's then possible to add and remove some `traits` after having checked their existence in the bitmask for instance.

<pre><code class="objectivec">

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
</code></pre>

<pre><code class="swift">
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

</div>
<div class="tab-pane" id="TraitElt-Links" role="tabpanel">

- [`accessibilityTraits`](https://developer.apple.com/documentation/objectivec/nsobject/1615202-accessibilitytraits)
</div>
</div>
<br><br>

## Text alternatives
<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item" role="presentation">
        <a class="nav-link active"
           data-toggle="tab" 
           href="#textAlt-Description" 
           role="tab" 
           aria-selected="true">Description</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-toggle="tab" 
           href="#textAlt-Details" 
           role="tab" 
           aria-selected="true">Details</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#textAlt-Example" 
           role="tab" 
           aria-selected="false">Example</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#textAlt-Links" 
           role="tab" 
           aria-selected="false">Links</a>
    </li>
</ul><div class="tab-content">
<div class="tab-pane show active"
     id="textAlt-Description"
     role="tabpanel">
     
VoiceOver must vocalize every informative element with a high degree of quality in order to let the user know and perfectly understand the context of the consulted page.

The accuracy of this vocalization is done through four attributes: `label`, `hint`, `value` and `trait`.
</div>
<div class="tab-pane" id="textAlt-Details" role="tabpanel">

The order of vocalization is always as follows: `label`, `value`, `trait` and `hint`.
It can't be changed and the vocalization is performed only once.

A section of this guide is dedicated to the <a href="#element-trait" style="text-decoration: underline;">trait</a>, we describe here the other three:

- **accessibilityLabel**: the `label` redefines the text read by VoiceOver. This allows a component to be more explicit than the text displayed on the screen. For example, for a button whose title is “OK”, this attribute can indicate that the button is used to confirm an action.

- **accessibilityValue**: the `value` of an element is by default the completion percentage (e.g. a progress bar percentage). Note that for most elements available in the <abbr>SDK</abbr>, this value does not need to be set (the system automatically sets the value).

- **accessibilityHint**: the `hint` describes the component’s behaviour. Example: “click here to get the result”.

These accessibility attributes are available via the interface builder but also programmatically.
Anything inheriting from `UIView` has these attributes by default that accept an optional string and are therefore easily localizable.

</div>
<div class="tab-pane" id="textAlt-Example" role="tabpanel">
 
<pre><code class="objectivec">
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
</code></pre>

<pre><code class="swift">
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

</div>
<div class="tab-pane" id="textAlt-Links" role="tabpanel"> 

- [`accessibilityLabel`](https://developer.apple.com/documentation/objectivec/nsobject/1615181-accessibilitylabel)

- [`accessibilityValue`](https://developer.apple.com/documentation/objectivec/nsobject/1615117-accessibilityvalue)

- [`accessibilityHint`](https://developer.apple.com/documentation/objectivec/nsobject/1615093-accessibilityhint)

- [Writing Great Accessibility Labels](../wwdc/2019/#writing-great-accessibility-labels)
    
</div>
</div>
<br><br>

## Date, time and numbers
<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item" role="presentation">
        <a class="nav-link active"
           data-toggle="tab" 
           href="#format-Description" 
           role="tab" 
           aria-selected="true">Description</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#format-DateTime" 
           role="tab" 
           aria-selected="false">Date & Time</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#format-Numbers" 
           role="tab" 
           aria-selected="false">Numbers</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#format-PhoneNumbers" 
           role="tab" 
           aria-selected="false">Phone numbers</a>
    </li>
</ul><div class="tab-content">
<div class="tab-pane show active"
     id="format-Description"
     role="tabpanel">
     
Using VoiceOver for reading date, time and numbers may become rapidly a headache if some steps fade into obscurity.

</div>
<div class="tab-pane" id="format-DateTime" role="tabpanel">

The rendering isn't natural if the date or time data are imported text in a `label`.


![](../../images/iOSdev/DateHeureNombres_11.png)
<br>Incoming data must be formatted to obtain a natural and understandable descriptive vocalization.

![](../../images/iOSdev/DateHeureNombres_7.png)
<pre><code class="objectivec">
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
</code></pre>

<pre><code class="swift">
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

</div>
<div class="tab-pane" id="format-Numbers" role="tabpanel">

If a number is imported as is in a `label`text, the vocalization will be made on each figure rendering a final value that may be hard to be well understood.

![](../../images/iOSdev/DateHeureNombres_12.png)
<br>As the previous sheet dealing with date and time, the incoming data must be formatted to be analyzed and vocalized according to the proper value of the explained number.

![](../../images/iOSdev/DateHeureNombres_8.png)
<pre><code class="objectivec">
    NSNumber * numberValue = @54038921.7;
    
    NSNumberFormatter * numberFormatter = [[NSNumberFormatter alloc]init];
    numberFormatter.numberStyle = NSNumberFormatterDecimalStyle;
    
    numberLabel.text = [numberFormatter stringFromNumber:numberValue];
    
    numberLabel.accessibilityLabel = [NSNumberFormatter localizedStringFromNumber:numberValue
                                                                      numberStyle:NSNumberFormatterSpellOutStyle];
</code></pre>

<pre><code class="swift">
    let numberValue = NSNumber(value: 54038921.7)
        
    numberLabel.text = NumberFormatter.localizedString(from: numberValue,
                                                       number: .decimal)
                                                           
    numberLabel.accessibilityLabel = NumberFormatter.localizedString(from: numberValue,
                                                                     number: .spellOut)
</code></pre>

</div>
<div class="tab-pane" id="format-PhoneNumbers" role="tabpanel">

Once more, formatting data is an essential step for a phone number vocalization including the special cases of the "0" figures.
<br>The example hereunder deals with the french dialing but the rationale behind may be applied to any international type of dialing format.

![default vocalization is not valid for the following phone number : 06.11.22.33.06](../../images/iOSdev/DateHeureNombres_10.png)
<br>The idea of this format is based on a comma separation of each pair of figures that will provide the vocal punctuation.

![in this case the phone number is well vocalized](../../images/iOSdev/DateHeureNombres_9.png)
<pre><code class="objectivec">
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
</code></pre>

<pre><code class="swift">
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

</div>
</div><br><br>

## Trigger a vocalization
<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item" role="presentation">
        <a class="nav-link active"
           data-toggle="tab" 
           href="#triggerVocal-Details" 
           role="tab" 
           aria-selected="true">Details</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#triggerVocal-Example" 
           role="tab" 
           aria-selected="false">Example</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#triggerVocal-Links" 
           role="tab" 
           aria-selected="false">Links</a>
    </li>
</ul><div class="tab-content">
<div class="tab-pane show active"
     id="triggerVocal-Details"
     role="tabpanel">
     
To trigger a vocalization, just call the **UIAccessibilityPostNotification** method passing the notification allowing to trigger a vocalization (UIAccessibilityAnnouncementNotification) and the string to vocalize as parameters.
<br>Note: the vocalization is done in the system’s language.

</div>
<div class="tab-pane" id="triggerVocal-Example" role="tabpanel">

<pre><code class="objectivec">
UIAccessibilityPostNotification(UIAccessibilityAnnouncementNotification, 
                                @"This is a VoiceOver message.");
</code></pre>

<pre><code class="swift">
UIAccessibility.post(notification: .announcement,
                     argument: "This is a VoiceOver message.")
</code></pre>

</div>
<div class="tab-pane" id="triggerVocal-Links" role="tabpanel">

- [`UIAccessibilityPostNotification`](https://developer.apple.com/documentation/uikit/1615194-uiaccessibilitypostnotification)

- [`UIAccessibilityAnnouncementNotification`](https://developer.apple.com/documentation/uikit/uiaccessibilityannouncementnotification)
</div>
</div><br><br>

## Notify a content change
<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item" role="presentation">
        <a class="nav-link active"
           data-toggle="tab" 
           href="#changeNotif-Description" 
           role="tab" 
           aria-selected="true">Description</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#changeNotif-Details" 
           role="tab" 
           aria-selected="false">Details</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#changeNotif-Example" 
           role="tab" 
           aria-selected="false">Example</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#changeNotif-Links" 
           role="tab" 
           aria-selected="false">Links</a>
    </li>
</ul><div class="tab-content">
<div class="tab-pane show active"
     id="changeNotif-Description"
     role="tabpanel">
     
When there is a content change in the current page, it is possible to notify the accessibility <abbr>API</abbr> using several types of notifications.

To do that, we must send the change notification to the accessibility <abbr>API</abbr> using the following `UIAccessibilityPostNotification` method.  

</div>
<div class="tab-pane" id="changeNotif-Details" role="tabpanel">

There are several types of change notifications but the most two commonly used are:

- **UIAccessibilityLayoutChangedNotification**: notifies that a part of the page has changed with 2 possible incoming parameters (a `NSString` or a `UIObject`).
With a `NSString`, the notification behaves like a **UIAccessibilityAnnouncementNotification** with a VoiceOver vocalization.
With a `UIObject`, focus is shifted to the user interface element.
This notification is very similar to the **UIAccessibilityAnnouncementNotification** but should come as a result of dynamic content being deleted or added to the current view.

- **UIAccessibilityScreenChangedNotification**: notifies that the whole page has changed including `nil` or a `UIObject` as incoming parameters.  
With `nil`, the first accessible element in the page is focused.
With a `UIObject`, focus is shifted to the specified element with a VoiceOver vocalization.
This notification comes along with a vocalization including a sound like announcing a new page.

</div>
<div class="tab-pane" id="changeNotif-Example" role="tabpanel">

<pre><code class="objectivec">
//The element 'myLabel' is focused and vocalized with its new value.
- (IBAction)tapHere:(UIButton *)sender {
    
    myLabel.accessibilityLabel = @"This is a new label.";
    UIAccessibilityPostNotification(UIAccessibilityLayoutChangedNotification, myLabel);
}

//The first accessible element in the page is focused and vocalized with a sound like announcing a new page.
- (IBAction)clic:(UIButton *)sender {
    
    UIAccessibilityPostNotification(UIAccessibilityScreenChangedNotification, nil);
}
</code></pre>

<pre><code class="swift">
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

</div>
<div class="tab-pane" id="changeNotif-Links" role="tabpanel">

- [`UIAccessibilityPostNotification`](https://developer.apple.com/documentation/uikit/1615194-uiaccessibilitypostnotification)

- [`UIAccessibilityLayoutChangedNotification`](https://developer.apple.com/documentation/uikit/uiaccessibilitylayoutchangednotification)

- [`UIAccessibilityScreenChangedNotification`](https://developer.apple.com/documentation/uikit/uiaccessibilityscreenchangednotification)

- [`UIAccessibilityPageScrolledNotification`](https://developer.apple.com/documentation/uikit/uiaccessibilitypagescrollednotification)
</div>
</div>
<br><br>

## Change the vocalization language
<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item" role="presentation">
        <a class="nav-link active"
           data-toggle="tab" 
           href="#changeLang-Details" 
           role="tab" 
           aria-selected="true">Details</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#changeLang-Example" 
           role="tab" 
           aria-selected="false">Example</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#changeLang-Links" 
           role="tab" 
           aria-selected="false">Link</a>
    </li>
</ul><div class="tab-content">
<div class="tab-pane show active"
     id="changeLang-Details"
     role="tabpanel">
     
To change the vocalization language of VoiceOver for a word or a sentence, one can use the **accessibilityLanguage**&nbsp; attribute.

Available through the `UIAccessibility` informal protocol, this attribute allows to specify a language for a dedicated text.

</div>
<div class="tab-pane" id="changeLang-Example" role="tabpanel">

If we use the `accessibilityLanguage` attribute on a `UILabel`, it will be vocalized by VoiceOver in the language set on this attribute.
<pre><code class="objectivec">
- (IBAction)tapHere:(UIButton *)sender {
    
    myLabel.accessibilityLanguage = @"fr";
    myLabel.accessibilityLabel = @"Ceci est un nouveau label. Merci.";
}
</code></pre>

<pre><code class="swift">
@IBAction func tapHere(_ sender: UIButton) {
        
    myLabel.accessibilityLanguage = "fr"
    myLabel.accessibilityLabel = "Ceci est un nouveau label. Merci."
}
</code></pre>

A single word in a foreign language may be added in a sentence with the appropriate pronunciation thanks to the **Attributed Accessibility Properties** using a `NSAttributedString` [since iOS&nbsp;11](https://a11y-guidelines.orange.com/en/mobile/ios/wwdc/2017/215/#attributed-accessibility-properties-2607).
</div>
<div class="tab-pane" id="changeLang-Links" role="tabpanel">  

- [`accessibilityLanguage`](https://developer.apple.com/documentation/objectivec/nsobject/1615192-accessibilitylanguage)
</div>
</div>
<br><br>

<a name="MaskElements"></a>
## Hide elements
<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item" role="presentation">
        <a class="nav-link active"
           data-toggle="tab" 
           href="#hideElts-Description" 
           role="tab" 
           aria-selected="true">Description</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#hideElts-Details" 
           role="tab" 
           aria-selected="false">Details</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#hideElts-Example" 
           role="tab" 
           aria-selected="false">Example</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#hideElts-Links" 
           role="tab" 
           aria-selected="false">Links</a>
    </li>
</ul><div class="tab-content">
<div class="tab-pane show active"
     id="hideElts-Description"
     role="tabpanel">
     
It is possible via an accessibility attribute to hide elements from accessibility tools (e.g. VoiceOver).
<br>By extension, it is also possible to force some elements to be visible to accessibility tools.

</div>
<div class="tab-pane" id="hideElts-Details" role="tabpanel">

- **isAccessibilityElement**: boolean to specify that an element is visible or not to the Accessibility <abbr>API</abbr> (any assistive technology).

- **accessibilityElementsHidden**: boolean to indicate that the children elements of the target element are visible or not to the Accessibility <abbr>API</abbr>.

- **accessibilityViewIsModal**: boolean that can make visible or not the sibling elements of the target element to the Accessibility <abbr>API</abbr>.

A [theoretical&nbsp;explanation](../wwdc/2018/230#accessibilityViewIsModal) and a [practical&nbsp;example](../wwdc/2018/230#demo) are provided in a video detailed in the WWDC part.
  
The `isAccessibilityElement` attribute is available via the interface builder but can also be used directly through the code while the other two attributes are only available through the code.

</div>
<div class="tab-pane" id="hideElts-Example" role="tabpanel">

A red square will be drawn and contain two other squares (blue and yellow) in order to apply the attributes defined in the `Details` sheet.

![](../../images/iOSdev/MasquerDesElements_1.png)

<pre><code class="objectivec">
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
</code></pre>

<pre><code class="swift">
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

</div>
<div class="tab-pane" id="hideElts-Links" role="tabpanel">

- [`isAccessibilityElement`](https://developer.apple.com/documentation/objectivec/nsobject/1615141-isaccessibilityelement)

- [`accessibilityElementsHidden`](https://developer.apple.com/documentation/objectivec/nsobject/1615080-accessibilityelementshidden)

- [`accessibilityViewIsModal`](https://developer.apple.com/documentation/objectivec/nsobject/1615089-accessibilityviewismodal)
</div>
</div>
<br><br>

## Grouping elements
<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item" role="presentation">
        <a class="nav-link active"
           data-toggle="tab" 
           href="#groupElts-Description" 
           role="tab" 
           aria-selected="true">Description</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#groupElts-Example1" 
           role="tab" 
           aria-selected="false">Example 1</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#groupElts-Example2"
           id="groupElts-Example2_tab"
           role="tab" 
           aria-selected="false">Example 2</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#groupElts-Links" 
           role="tab" 
           aria-selected="false">Links</a>
    </li>
</ul><div class="tab-content">
<div class="tab-pane show active"
     id="groupElts-Description"
     role="tabpanel">
     
Grouping elements may be used to vocalize the bundle once and to associate it a dedicated action.
</div>
<div class="tab-pane" id="groupElts-Example1" role="tabpanel">

We wish to obtain a 'label' and a 'switch control' as one unique block behaving like a `switch control`.
<br>In this case, a view must be created to encapsulate all the elements and an action must be implemented (only the container must be an accesible element).

![](../../images/iOSdev/GrouperDesElements_1.png)
Create your wrapper as an accessible element :
<pre><code class="objectivec">
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
</code></pre>

<pre><code class="swift">
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

<br>... and implement the wrapper class to define accurately the <a href="../wwdc/2017/215/#default-activation-3738">action&nbsp;when&nbsp;a&nbsp;double&nbsp;tap&nbsp;occurs</a>:
<pre><code class="objectivec">
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
</code></pre>

<pre><code class="swift">
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

</div>
<div class="tab-pane" id="groupElts-Example2" role="tabpanel">

We have a button, a label and a switch control to be regrouped in a single block whose activation will change the switch control status automatically without defining any action like before.

The easiest way would be to place the switch control in the middle of the created frame in order to locate its <a style="text-decoration: underline" role="button" onclick="$('#focusArea-Details_tab').trigger('click');document.getElementById('focusArea-Details').scrollIntoView({ behavior: 'smooth', block: 'start' })">accessibilityActivationPoint</a> directly on it but, unfortunately, that's not always possible.

A new accessible element must then be created to gather all the desired objects and its **accessibilityActivationPoint** has to be defined on the switch control.

![](../../images/iOSdev/GrouperDesElements_2.png)
<pre><code class="objectivec">
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
</code></pre>

<pre><code class="swift">
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
        
        elt = UIAccessibilityElement(accessibilityContainer: self.view!)
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

<br>Another grouping elements case could use the **shouldGroupAccessibilityChildren** attribute which is a Boolean that indicates whether <span lang="en">VoiceOver</span> must group its children views.

This allows making unique vocalizations or define a particular reading order for a part of the page (see the [Reading&nbsp;order](#reading-order) section for further information).
</div>
<div class="tab-pane" id="groupElts-Links" role="tabpanel">

- [`accessibilityActivate`](https://developer.apple.com/documentation/objectivec/nsobject/1615165-accessibilityactivate)

- [`shouldGroupAccessibilityChildren`](https://developer.apple.com/documentation/objectivec/nsobject/1615143-shouldgroupaccessibilitychildren)
</div>
</div>
<br><br>

## Reading order
<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item" role="presentation">
        <a class="nav-link active"
           data-toggle="tab" 
           href="#readingOrder-Details" 
           role="tab" 
           aria-selected="true">Details</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#readingOrder-Example" 
           role="tab" 
           aria-selected="false">Example</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#readingOrder-Links" 
           role="tab" 
           aria-selected="false">Links</a>
    </li>
</ul><div class="tab-content">
<div class="tab-pane show active"
     id="readingOrder-Details"
     role="tabpanel">
     
Redefining the VoiceOver reading order is done using the **UIAccessibilityContainer** protocol: the idea is to have a table of elements that defines the reading order of the elements.

It is often very useful to use the **shouldGroupAccessibilityElement** attribute to have a precise order but only for a part of the view (the rest of it will be read using the native order provided by VoiceOver).
</div>
<div class="tab-pane" id="readingOrder-Example" role="tabpanel">

The best way to illustrate this feature is the keyboard whose keys order isn't necessary the appropriate one.

Here's the desired order : 1, 2, 3, 4, 7, 6, 8, 9, 5.

Two views are created containing the numbers to be spelled out in a specific order:

![display of the blue and grey views](../../images/iOSdev/OrdreDeLecture_1.png)
<pre><code class="objectivec">
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
</code></pre>

<pre><code class="swift">
    @IBOutlet weak var greyColumn: UIView!
    @IBOutlet weak var blueBlock: UIView!
    
    override func viewDidAppear(_ animated: Bool) {
        super.viewDidAppear(animated)
        
        //Reads the first three numbers in the grey column.
        greyColumn.shouldGroupAccessibilityChildren = true
        
        //Reads 6, 8, 9 and 5 in this order inside the blue block.
        blueBlock.isAccessibilityElement = false
        blueBlock.accessibilityElements = [key_6!,
                                           key_8!,
                                           key_9!,
                                           key_5!]
    }
</code></pre>

</div>
<div class="tab-pane" id="readingOrder-Links" role="tabpanel">

- [`UIAccessibilityContainer`](https://developer.apple.com/documentation/uikit/accessibility/uiaccessibilitycontainer?language=objc)

- [`shouldGroupAccessibilityChildren`](https://developer.apple.com/documentation/objectivec/nsobject/1615143-shouldgroupaccessibilitychildren)
</div>
</div>
<br><br>

## Custom content provider
<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item" role="presentation">
        <a class="nav-link active"
           data-toggle="tab" 
           href="#CuCoPro-Description" 
           role="tab" 
           aria-selected="true">Description</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#CuCoPro-Details" 
           role="tab" 
           aria-selected="false">Details</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#CuCoPro-Example" 
           role="tab" 
           aria-selected="false">Example</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#CuCoPro-Links" 
           role="tab" 
           aria-selected="false">Links</a>
    </li>
</ul><div class="tab-content">
<div class="tab-pane show active"
     id="CuCoPro-Description"
     role="tabpanel">
     
This **iOS&nbsp;14 new feature** has unfortunately not been introduced during the WWDC 2020 while it's crucial to significantly improve the VoiceOver user experience.

The **custom content provider** provides a faster navigation within an interface the user can access some rich details without having to undergo the vocalization of parasitic elements before getting what he's interested in.

The main goal of this feature may be defined as merging **vocalized information** with a **smoother and faster navigation**.

The `Photos` iOS application is an outstanding example where some metadata (date, hour...) can be obtained while the photo is still selected thanks to the `More`&nbsp;`Content` [rotor item](#custom-rotor).
![](../../images/iOSdev/CustomContentProvider_1.png)
Another use case may be an important list of elements with rich details that may be vocalized only by this means according to the **user interest** for instance.
</div>
<div class="tab-pane" id="CuCoPro-Details" role="tabpanel">

To implement this functionality, it's mandatory to:

- conform to the **AXCustomContentProvider** protocol,

- provide an **accessibilityCustomContent** array of **AXCustomContent** elements,

- define each and every **AXCustomContent** element with its `value` and the kind of family this value belongs to (`label`).

The `More`&nbsp;`Content` **rotor item** is the only means to get these information by vocalizing every `AXCustomContent` element thanks to a one finger vertical swipe like the [continuous adjustable values](#continuous-adjustable-values) or the [custom actions](#custom-actions).
</div>
<div class="tab-pane" id="CuCoPro-Example" role="tabpanel">

The following code provides an example to reach some invisible information that are all completely embedded within an image.

⚠️ It's mandatory to **import the Accessibility framework** the `AXCustomContentProvider` protocol belongs to. ⚠️

First, define the class of the view that contains the image:

<pre><code class="objectivec">
//MyCustomView.h
#import &lt;UIKit/UIKit.h&gt;
#import &lt;Accessibility/Accessibility.h&gt;  //Fatal issue if not used.

@interface MyCustomView : UIImageView <AXCustomContentProvider>
@end

//MyCustomView.m
@implementation MyCustomView

@synthesize accessibilityCustomContent = _accessibilityCustomContent;

- (void)setAccessibilityCustomContent:(NSArray<AXCustomContent *> *)accessibilityCustomContent {

    if (accessibilityCustomContent != nil) {
        _accessibilityCustomContent = accessibilityCustomContent;
    }
}
@end        
</code></pre>

<pre><code class="swift">
import Accessibility  //Fatal issue if not used.

class MyCustomView: UIImageView, AXCustomContentProvider {
    
    var _accessibilityCustomContent: [AXCustomContent]? = nil
    var accessibilityCustomContent: [AXCustomContent]! {
           get { return _accessibilityCustomContent }
           set(newValue) { _accessibilityCustomContent = newValue }
       }
}
</code></pre>

Then, create each and every element to be vocalized with a one finger vertical swipe:

<pre><code class="objectivec">
@interface ViewController ()
@property (weak, nonatomic) IBOutlet MyCustomView * myView;
@end


@implementation ViewController

- (void)viewDidAppear:(BOOL)animated {
    [super viewDidAppear:animated];
    
    _myView.accessibilityLabel = @"Orange logo";
    _myView.accessibilityHint = @"use the rotor item entitled more content to get additional information";
    
    AXCustomContent * lastModified = [AXCustomContent customContentWithLabel:@"date of creation"
                                                                       value:@"1988"];
    AXCustomContent * items = [AXCustomContent customContentWithLabel:@"registered office location"
                                                                value:@"paris"];
    AXCustomContent * type = [AXCustomContent customContentWithLabel:@"type of company"
                                                               value:@"telecommunications"];
    
    _myView.accessibilityCustomContent = @[lastModified, items, type];
}
@end
</code></pre>

<pre><code class="swift">
class ViewController: UIViewController {

    @IBOutlet weak var myView: MyCustomView!
    
    override func viewDidAppear(_ animated: Bool) {
        super.viewDidAppear(animated)
        
        myView.accessibilityLabel = "Orange logo"
        myView.accessibilityHint = "use the rotor item entitled more content to get additional information"
        
        let lastModified = AXCustomContent(label: "date of creation", 
                                           value: "1988")
        let items = AXCustomContent(label: "registered office location", 
                                    value: "paris")
        let type = AXCustomContent(label: "type of company", 
                                   value: "telecommunications")

        myView.accessibilityCustomContent = [lastModified, items, type]
    }
}
</code></pre>

![](../../images/iOSdev/CustomContentProvider_2.png)
![](../../images/iOSdev/CustomContentProvider_3.png)
</div>
<div class="tab-pane" id="CuCoPro-Links" role="tabpanel">

- [Customized Accessibility Content](https://developer.apple.com/documentation/accessibility/customized_accessibility_content/)

- This [Rob Whitaker article](https://mobilea11y.com/blog/custom-accessibility-content/) provides an interesting description of this new feature that he's one of the few to highlight after the WWDC 2020.
</div>
</div>
<br><br>

## Focus an element
<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item" role="presentation">
        <a class="nav-link active"
           data-toggle="tab" 
           href="#focusElt-Description" 
           role="tab" 
           aria-selected="true">Description</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#focusElt-Details" 
           role="tab" 
           aria-selected="false">Details</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#focusElt-Example" 
           role="tab" 
           aria-selected="false">Example</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#focusElt-Links" 
           role="tab" 
           aria-selected="false">Link</a>
    </li>
</ul><div class="tab-content">
<div class="tab-pane show active"
     id="focusElt-Description"
     role="tabpanel">
     
The **UIAccessibilityFocus** informal protocol provides programming elements to be informed of the accessible element focus.

</div>
<div class="tab-pane" id="focusElt-Details" role="tabpanel">

- **accessibilityElementDidBecomeFocused** : called when the accessible element is focused.

- **accessibilityElementDidLoseFocus** : fired when the accessible element lost focus.

- **accessibilityElementIsFocused** : boolean value indicating the accessible element selection.

Overriden inside a view controller, these elements will be helpless if you think they will be called when an accessible element is focused.

However, if they are **implemented in the accessible element itself**, you won't be disappointed.

This mistake is due to the informal aspect of the protocol that allows an override of its methods inside an inherited NSObject element even if it's not accessible... like a view controller for instance.
</div>
<div class="tab-pane" id="focusElt-Example" role="tabpanel">

The example below enables to follow the focus of an accessible element identified by its `accessibleIdentifier`.
<pre><code class="objectivec">
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
</code></pre>

<pre><code class="swift">
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

</div>
<div class="tab-pane" id="focusElt-Links" role="tabpanel">

- [`UIAccessibilityFocus`](https://developer.apple.com/documentation/uikit/accessibility/uiaccessibilityfocus)
</div>
</div>
<br><br>

## Modify the focus area of VoiceOver
<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item" role="presentation">
        <a class="nav-link active"
           data-toggle="tab" 
           href="#focusArea-Description" 
           role="tab" 
           aria-selected="true">Description</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#focusArea-Details"
           id="focusArea-Details_tab"
           role="tab" 
           aria-selected="false">Details</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#focusArea-Example" 
           role="tab" 
           aria-selected="false">Example</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#focusArea-Links" 
           role="tab" 
           aria-selected="false">Links</a>
    </li>
</ul><div class="tab-content">
<div class="tab-pane show active"
     id="focusArea-Description"
     role="tabpanel">
     
In case of dynamically modified element or component not inheriting from `UIView`, it is possible to modify the focus area of accessibility of this element, i.e. the area <span lang="en">VoiceOver</span> highlights when focusing an element.
</div>
<div class="tab-pane" id="focusArea-Details" role="tabpanel">

- **accessibilityFrame**&nbsp;: sets the area via a rectangle (`CGRect`).
Usually, for an element inheriting from `UIView`, this area is the «&nbsp;visible&nbsp;» part of the view.

- **accessibilityPath**&nbsp;: equivalent to `accessibilityFrame` but sets the area via Bezier curves.

- **accessibilityActivationPoint**&nbsp;: defines a contact point inside the `frame` whose action will be fired by a double-tap element activation.
The default value is the midpoint of the `frame` but it can be redefine anywhere inside.

A classical use case could be an easy activation inside a <a style="text-decoration: underline" role="button" onclick="$('#groupElts-Example2_tab').trigger('click');document.getElementById('groupElts-Example2').scrollIntoView({ behavior: 'smooth', block: 'start' })">regroupment&nbsp;of&nbsp;elements</a> for instance.

![](../../images/iOSdev/ModifierLaZoneDeFocus_2.png)
By keeping this default value, one might unwillingly activate the element in the middle of the frame only by activating the created regroupment.

</div>
<div class="tab-pane" id="focusArea-Example" role="tabpanel">

![](../../images/iOSdev/ModifierLaZoneDeFocus_1.png)
<pre><code class="objectivec">
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
</code></pre>

<pre><code class="swift">
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
    
    //First way to enlarge the focus area.
    @IBAction func clicHere(_ sender: UIButton) {
        
        myLabel.accessibilityFrame = CGRect.init(x: xVal,
                                                 y: yVal,
                                                 width: widthVal + 100.0,
                                                 height: heightVal + 100.0)
        
        UIAccessibility.post(notification: UIAccessibility.Notification.layoutChanged,
                             argument: myLabel)
    }
    
    //Second way to enlarge the focus area (Bezier).
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

</div>
<div class="tab-pane" id="focusArea-Links" role="tabpanel">

- [`accessibilityFrame`](https://developer.apple.com/documentation/uikit/uiaccessibilityelement/1619579-accessibilityframe)

- [`accessibilityPath`](https://developer.apple.com/documentation/objectivec/nsobject/1615159-accessibilitypath)

- [`accessibilityActivationPoint`](https://developer.apple.com/documentation/objectivec/nsobject/1615179-accessibilityactivationpoint)
</div>
</div><br><br>

## Modal view
<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item" role="presentation">
        <a class="nav-link active"
           data-toggle="tab" 
           href="#modalView-Description" 
           role="tab" 
           aria-selected="true">Description</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-toggle="tab" 
           href="#modalView-Details" 
           role="tab" 
           aria-selected="false">Details</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-toggle="tab" 
           href="#modalView-Example"
           id="modalView-Example_tab"
           role="tab" 
           aria-selected="false">Examples</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#modalView-Links" 
           role="tab" 
           aria-selected="false">Links</a>
    </li>
</ul><div class="tab-content">
<div class="tab-pane show active"
     id="modalView-Description"
     role="tabpanel">
     
When a view is presented modally (alert, popup...), the screen reader must only analyze its elements and definitely not those still present in the background.

To reach this goal, you must put the **[accessibilityViewIsModal](../wwdc/2018/230/#accessibility-modal-view-2502)** property value to `true` to be sure that VoiceOver only takes care of the appropriate instance elements. 
</div>
<div class="tab-pane" id="modalView-Details" role="tabpanel">

Writing `accessibilityViewIsModal = true` may not be enough to get the intended read out because of the views hierarchy.

Indeed, **only the impacted view siblings** aren't taken into account by VoiceOver, all the other ones are.

If the explanations provided in the <a style="text-decoration: underline;" role="button" onclick="$('#modalView-Example_tab').trigger('click');document.getElementById('modalView').scrollIntoView({ behavior: 'smooth', block: 'start' })">Examples</a> tab aren't detailed enough, take a look at this [David&nbsp;RÖNNQVIST&nbsp;article](http://ronnqvi.st/adding-accessible-behavior) containing a pedagogical and interactive illustration that explains how the modal view process works (the 'Implementing accessible modal views' section).

</div>
<div class="tab-pane" id="modalView-Example" role="tabpanel">

Hereafter, knowledge about hiding wrappers and their contents is assumed to be acquired: if further information is needed, please refer to the **[Hide&nbsp;elements](#hide-elements)** section to feel comfortable with this notion.

For the examples, let's assume we have a main view containting the following accessible elements:

- A first view (parent A) with 3 subviews (A1, A2, A3).

- A second view (parent B) with a sublevel (B1 et B2) containing subviews (B1.1, B1.2, B2.1, B2.2 et B3.3).

![](../../images/iOSdev/ModalView_1.png)

<br><br>**Example 1**: `Parent A` view as modal.

Because `Parent B` is a `Parent A` sibling, `accessibilityViewIsModal = true` is enough to get the desired result.

![](../../images/iOSdev/ModalView_2.png)

<br><br>**Example 2**: `A2` view as modal.

`A1` and `A3` aren't taken into account by VoiceOver because they're `A2` siblings **BUT** `Parent B` (or possibly its subviews) will be vocalized... and that's definitely not the goal.

![](../../images/iOSdev/ModalView_3.png)
<br>In order to figure out this problem, hiding the undesirable elements when the view is activated as modal is the solution to be applied.
<pre><code class="objectivec">
    parentA.isAccessibilityElement = NO;
    parentA.accessibilityElementsHidden = NO;

    A2.accessibilityViewIsModal = YES;
        
    //Resolves the problem with Parent B and its subviews.
    parentB.isAccessibilityElement = NO;
    parentB.accessibilityElementsHidden = YES;
</code></pre>

<pre><code class="swift">
    parentA.isAccessibilityElement = false
    parentA.accessibilityElementsHidden = false

    A2.accessibilityViewIsModal = true
        
    //Resolves the problem with Parent B and its subviews.
    parentB.isAccessibilityElement = false
    parentB.accessibilityElementsHidden = true
</code></pre>

<br><br>**Example 3**&nbsp;: `B1.1` view as modal.

In this case, `parent A` and `B2` (or possibly their subviews) are vocalized with the modal view: only `B1.2` isn't read out by VoiceOver because it's `B1.1` sibling.

![](../../images/iOSdev/ModalView_4.png)

Again, all the undesirable elements must be hidden as soon as the modal view is activated as modal.
<pre><code class="objectivec">
    parentB.isAccessibilityElement = NO;
    parentB.accessibilityElementsHidden = NO;

    B1.isAccessibilityElement = NO;
    B1.accessibilityElementsHidden = NO;

    B11.accessibilityViewIsModal = YES;

    //Resolves the problem with Parent A and B2.
    parentA.isAccessibilityElement = NO;
    parentA.accessibilityElementsHidden = YES;

    B2.isAccessibilityElement = NO;
    B2.accessibilityElementsHidden = YES;
</code></pre>

<pre><code class="swift">
    parentB.isAccessibilityElement = false
    parentB.accessibilityElementsHidden = false

    B1.isAccessibilityElement = false
    B1.accessibilityElementsHidden = false

    B11.accessibilityViewIsModal = true

    //Resolves the problem with Parent A and B2.
    parentA.isAccessibilityElement = false
    parentA.accessibilityElementsHidden = true

    B2.isAccessibilityElement = false
    B2.accessibilityElementsHidden = true
</code></pre>

</div>
<div class="tab-pane" id="modalView-Links" role="tabpanel">

- [Hide&nbsp;elements](#MaskElements)

- [`accessibilityViewIsModal`](https://developer.apple.com/documentation/objectivec/nsobject/1615089-accessibilityviewismodal)

- [David&nbsp;Rönnqvist:&nbsp;"Implementing&nbsp;accessible&nbsp;modal&nbsp;views"](http://ronnqvi.st/adding-accessible-behavior)

- [WWDC&nbsp;2018:&nbsp;Deliver&nbsp;an&nbsp;exceptional&nbsp;accessibility&nbsp;experience](../wwdc/2018/230/#accessibility-modal-view-2502)
</div>
</div>
<br><br>

## Text size
<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item" role="presentation">
        <a class="nav-link active"
           data-toggle="tab" 
           href="#textSize-Description" 
           role="tab" 
           aria-selected="true">Description</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#textSize-Details" 
           role="tab" 
           aria-selected="false">Details</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#textSize-Links" 
           role="tab" 
           aria-selected="false">Links</a>
    </li>
</ul><div class="tab-content">
<div class="tab-pane show active"
     id="textSize-Description"
     role="tabpanel">
     
Since iOS7, it is possible to make the text size dynamic according to the device settings.
</div>
<div class="tab-pane" id="textSize-Details" role="tabpanel">
    
<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item" role="presentation">
        <a class="nav-link active"
           data-toggle="tab" 
           href="#TextSize-iOS13"
           role="tab" 
           aria-selected="true">iOS 13</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#TextSize-iOS12"
           role="tab" 
           aria-selected="false">iOS 12</a>
    </li>
</ul><div class="tab-content">
<div class="tab-pane show active"
     id="TextSize-iOS13"
     role="tabpanel">
    
![](../../images/iOSdev/TailleDesTextes_iOS13_1.png)
</div>
<div class="tab-pane" 
     id="TextSize-iOS12" 
     role="tabpanel">
    
![](../../images/iOSdev/TailleDesTextes_1.png)
</div></div>
    
<br>The following steps should be respected in order to easily use this <abbr>API</abbr>:

 - **Use the text styles** available with the application iOS version.
 
 ![](../../images/iOSdev/TailleDesTextes_2.png)
 - Choose the system font to facilitate your programing even if the use of other fonts is well assisted by the `UIFontMetrics` class since iOS11.
 <pre><code class="objectivec">
    __weak IBOutlet UILabel * fontHeadline;
    __weak IBOutlet UILabel * fontFootNote;
    
    //Use of the default native font.
    fontFootNote.font = [UIFont preferredFontForTextStyle:UIFontTextStyleHeadline];
    
    //Customed font definition for a header.
    UIFont * fontHead = [UIFont fontWithName:@"Chalkduster" size:30.0];
    UIFontMetrics * fontHeadMetrics = [[UIFontMetrics alloc]initForTextStyle:UIFontTextStyleHeadline];
    fontHeadline.font = [fontHeadMetrics scaledFontForFont:fontHead];
</code></pre>

<pre><code class="swift">
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
<br>Note that the **[traitCollectionDidChange](../wwdc/2017/245/#Demo)** method that belongs to the `UITraitEnvironment` informal protocol may also be used in this context because it will be called as soon as the iOS interface environment changes (class/content size, portrait/landscape, color contrast).
<pre><code class="objectivec">
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
</code></pre>

<pre><code class="swift">
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
 Don't forget to include the settings for the navigation/tab/status bar and toolbar items that will be handled by the **[Large Content Viewer](../wwdc/2019/261/)**.
 
 - Don't forget to adapt the [color contrast](../design#colours) to the text size.

</div>
<div class="tab-pane" id="textSize-Links" role="tabpanel">

- [Dynamic&nbsp;Type&nbsp;&&nbsp;Text&nbsp;Styles](https://developer.apple.com/design/human-interface-guidelines/ios/visual-design/typography/)

- [`UIContentSizeCategoryDidChangeNotification`](https://developer.apple.com/documentation/foundation/nsnotification.name/1622948-uicontentsizecategorydidchange)

- [`adjustsFontForContentSizeCategory`](https://developer.apple.com/documentation/uikit/uicontentsizecategoryadjusting/1771731-adjustsfontforcontentsizecategor?language=objc)

- [Building&nbsp;Apps&nbsp;with&nbsp;Dynamic&nbsp;Type](../wwdc/2017/245)
    
</div>
</div>
<br><br>

## Truncation hyphen
<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item" role="presentation">
        <a class="nav-link active"
           data-toggle="tab" 
           href="#truncHyphen-Description" 
           role="tab" 
           aria-selected="true">Description</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#truncHyphen-Example" 
           role="tab" 
           aria-selected="false">Example</a>
    </li>
</ul><div class="tab-content">
<div class="tab-pane show active"
     id="truncHyphen-Description"
     role="tabpanel">

The `Dynamic Type` feature introduced in the previous section may come along with a word truncation according to the magnifying that is defined in the settings.

Unfortunately, the iOS system doesn't handle natively this point that can be implemented only by programing to get an appreciated visual depiction.
</div>
<div class="tab-pane" id="truncHyphen-Example" role="tabpanel">

![](../../images/iOSdev/Troncature.png)
<br>The rationale behind is the use of a `NSMutableAttributedString` with a `NSMutableParagraphStyle` type property as exposed hereunder:

<pre><code class="objectivec">
@interface TruncationHyphen () {
    __weak IBOutlet UILabel * myLabel;
}
@end


@implementation TruncationHyphen

- (void)viewDidLoad {
    [super viewDidLoad];
    
    NSString * myString = @"floccinaucinihilipilification";
    NSMutableParagraphStyle * paraph = [[NSMutableParagraphStyle alloc] init];
    
    paraph.hyphenationFactor = 1.0;
    
    UIFont * myFont = [UIFont fontWithName:@"HoeflerText-Black" size:18.0];
    UIFont * myTextFont = [[UIFontMetrics metricsForTextStyle:UIFontTextStyleTitle1] scaledFontForFont:myFont];
    
    NSDictionary * attributesDictionary = @{NSFontAttributeName:myTextFont};
    NSMutableAttributedString * myText = [[NSMutableAttributedString alloc]initWithString:myString 
                                                                               attributes:attributesDictionary];
    
    [myText addAttribute:NSParagraphStyleAttributeName
                   value:paraph
                   range:NSMakeRange(0, 1)];
    
    myLabel.attributedText = myText;
}
@end
</code></pre>

<pre><code class="swift">
class TruncationHyphen: UIViewController {

    @IBOutlet weak var myLabel: UILabel!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        let myString = "floccinaucinihilipilification"
        
        let paraph = NSMutableParagraphStyle()
        paraph.hyphenationFactor = 1.0
        
        let myTextFont = UIFontMetrics(forTextStyle: .title1).scaledFont(for:UIFont(name:"HoeflerText-Black", size:18)!)
        
        let myText = NSMutableAttributedString(string:myString,
                                               attributes: [.font: myTextFont])
        
        myText.addAttribute(.paragraphStyle,
                            value: paraph,
                            range: NSMakeRange(0,1))

        myLabel.attributedText = myText
    }
}
</code></pre>

</div>
</div>
<br><br>

## Graphical elements size
<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item" role="presentation">
        <a class="nav-link active"
           data-toggle="tab" 
           href="#graphEltSize-Description" 
           role="tab" 
           aria-selected="true">Description</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#graphEltSize-Example" 
           role="tab" 
           aria-selected="false">Example</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-toggle="tab" 
           href="#graphEltSize-Links" 
           role="tab" 
           aria-selected="false">Links</a>
    </li>
</ul><div class="tab-content">
<div class="tab-pane show active"
     id="graphEltSize-Description"
     role="tabpanel">
     
Exactly like text, images and tab/tool bar items have a scalable size thanks to accessibility settings but **only since iOS11 with Xcode 9**.
</div>
<div class="tab-pane" id="graphEltSize-Example" role="tabpanel">

To illustrate these new features, the example below is obtained by following the steps hereafter:

1. Under Xcode, import the image to be enlarged with a `pdf` extension and a x1 resolution in the `xcassets` catalog.

2. In the new Image Set, tick `Preserve Vector Data` and specify `Single Scale` as Scales attribute:

![](../../images/iOSdev/TailleDesEltsGraphiques_4.png)

3. If a storyboard is used for this image, tick `Adjusts Image Size` in the Image View section, otherwise put the `adjustsImageSizeForAccessibilityContentSizeCategory` image property to `true` in code:

![](../../images/iOSdev/TailleDesEltsGraphiques_5.png)

4. If a **tab bar** or a **tool bar** is used in the application, first repeat the previous 3 steps for each image included in the items to be enlarged in the middle of the screen and then link the image to its appropriate item:

![](../../images/iOSdev/TailleDesEltsGraphiques_6.png)

<br>**WARNING : don't forget to check out your layout with these new images larger sizes.**
<br><br>An application with a tab bar, whose second bar item displays the Orange logo (added `Aspect Fit` content mode and constraints to stretch the image view), is created to test the features exposed in the description.
<br><br>With the `Larger Accessibility Sizes` activation in the settings (see <a href="#text-size">the previous section</a>), one can easily note in the application:

- A larger Orange image size.

- A larger version of the bar item in an overlay if you touch and hold over it ⟹ **[Large Content Viewer](../wwdc/2019/261/)** feature available since iOS 11.

![](../../images/iOSdev/TailleDesEltsGraphiques_9.png)
</div>
<div class="tab-pane" id="graphEltSize-Links" role="tabpanel">

- [`adjustsImageSizeForAccessibilityContentSizeCategory`](https://developer.apple.com/documentation/uikit/uiaccessibilitycontentsizecategoryimageadjusting/2890929-adjustsimagesizeforaccessibility)

- [WWDC&nbsp;2019:&nbsp;Large&nbsp;Content&nbsp;Viewer](../wwdc/2019/261/)
</div>
</div><br><br>

## Large Content Viewer
<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item" role="presentation">
        <a class="nav-link active"
           data-toggle="tab" 
           href="#largeContentViewer-Description" 
           role="tab" 
           aria-selected="true">Description</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#largeContentViewer-Details" 
           role="tab" 
           aria-selected="false">Details</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#largeContentViewer-Example" 
           role="tab" 
           aria-selected="false">Example</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-toggle="tab" 
           href="#largeContentViewer-Links" 
           role="tab" 
           aria-selected="false">Links</a>
    </li>
</ul><div class="tab-content">
<div class="tab-pane show active"
     id="largeContentViewer-Description"
     role="tabpanel">
     
This feature **introduced in iOS 11** allows people with low vision to use UIKit bar elements as effective as the `Dynamic`&nbsp;`Type` grows the text size.

To trigger this **Large Content Viewer** (see <a href="#graphical-elements-size">Graphical&nbsp;elements&nbsp;size</a>), the user must long press the element to see a larger version in the middle of the screen.
</div>
<div class="tab-pane" id="largeContentViewer-Details" role="tabpanel">
    
When implementing the `Dynamic`&nbsp;`Type` feature, **iOS 13** allows to show the same UI that's shown for standard UIKit bar items for every element that conforms to the **UILargeContentViewerItem** protocol.

![](../../images/iOSdev/LargeContentViewer_1.png)
<br>The following points are important to be noticed before implementing the `Large`&nbsp;`Content`&nbsp;`Viewer` feature:

- Notice that '**scaling with Dynamic Type is always preferred to showing the Large Content Viewer**' that must be implemented '**only for the case when your custom UI cannot grow in size**' ⟹ [Apple&nbsp;recommendation](https://developer.apple.com/videos/play/wwdc2019/261/?time=215).

- This feature is **available only for the the accessibility text sizes**.
</div>
<div class="tab-pane" id="largeContentViewer-Example" role="tabpanel">

If an element magnification may lower the user experience, the `Large`&nbsp;`Content`&nbsp;`Viewer` can be implemented on that particular view to get the Head's Up Display in the middle of the screen:

![](../../images/iOSdev/LargeContentViewer_2.png)

<pre><code class="objectivec">
@interface LogoViewController ()
@property (weak, nonatomic) IBOutlet UIImageView * myView;
@end


NS_ASSUME_NONNULL_BEGIN
@implementation LogoViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    
    _myView.showsLargeContentViewer = YES;
    _myView.largeContentTitle = @"logo";
    _myView.largeContentImage = [UIImage systemImageNamed:@"hand.thumbsup"];
    
    [_myView addInteraction:[[UILargeContentViewerInteraction alloc] init]];
}
@end
NS_ASSUME_NONNULL_END
</code></pre>

<pre><code class="swift">
class LogoViewController: UIViewController {
    
    @IBOutlet weak var myView: UIImageView!
    
    override func viewDidAppear(_ animated: Bool) {
        super.viewDidAppear(animated)
        
        myView.isUserInteractionEnabled = true
        
        myView.showsLargeContentViewer = true
        myView.largeContentTitle = "logo"
        myView.largeContentImage = UIImage(systemName: "hand.thumbsup")
        
        myView.addInteraction(UILargeContentViewerInteraction())
    }
}
</code></pre>

In the same way, on a **clickable element** like a button whose magnification may become problematic, it's quite possible to use this feature to display its content and to ensure to **trigger its actions when the finger is up**:

![](../../images/iOSdev/LargeContentViewer_3.png)

<pre><code class="objectivec">
@interface ButtonViewController ()
@property (weak, nonatomic) IBOutlet UIButton * myButton;
@end


NS_ASSUME_NONNULL_BEGIN
@implementation ButtonViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    
    _myButton.showsLargeContentViewer = YES;
    _myButton.largeContentTitle = @"button";
    _myButton.largeContentImage = @"hand.thumbsup";
    
    [_myButton addInteraction:[[UILargeContentViewerInteraction alloc] init]];
}

- (IBAction)tapButton:(UIButton *)sender {
    //Appropriate actions when the button is tapped.
}
@end
NS_ASSUME_NONNULL_END
</code></pre>

<pre><code class="swift">
class ButtonViewController: UIViewController {

    @IBOutlet weak var myButton: UIButton!
    
    override func viewDidAppear(_ animated: Bool) {
        super.viewDidAppear(animated)
        
        myButton.showsLargeContentViewer = true
        myButton.largeContentTitle = "button"
        myButton.largeContentImage = UIImage(systemName: "hand.thumbsup")
        myButton.addInteraction(UILargeContentViewerInteraction())
    }
    
    
    @IBAction func tapButton(_ sender: UIButton) {
        //Appropriate actions when the button is tapped.
    }
}
</code></pre>

When **the long press gesture is already implemented on the graphical element**, it may be interesting to use the `gestureRecognizer(_:shouldRecognizeSimultaneouslyWith:)` method that will be helpful to [set&nbsp;up&nbsp;the&nbsp;two&nbsp;gestures&nbsp;simutaneously](https://developer.apple.com/videos/play/wwdc2019/261/?time=636). 
</div>
<div class="tab-pane" id="largeContentViewer-Links" role="tabpanel">

- [`UILargeContentViewerItem`](https://developer.apple.com/documentation/uikit/uilargecontentvieweritem)

- [`UILargeContentViewerInteraction`](https://developer.apple.com/documentation/uikit/uilargecontentviewerinteraction)

- [`UIInteraction`](https://developer.apple.com/documentation/uikit/uiinteraction)

- [`gestureRecognizer(_:shouldRecognizeSimultaneouslyWithGestureRecognizer:)`](https://developer.apple.com/documentation/uikit/uigesturerecognizerdelegate/1624208-gesturerecognizer)

- [WWDC&nbsp;2019&nbsp;:&nbsp;Large&nbsp;Content&nbsp;Viewer](../wwdc/2019/261/)
</div>
</div><br><br>

## Continuous adjustable values
<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item" role="presentation">
        <a class="nav-link active"
           data-toggle="tab" 
           href="#adjustable-Description" 
           role="tab" 
           aria-selected="true">Description</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#adjustable-Example" 
           role="tab" 
           aria-selected="false">Example</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-toggle="tab" 
           href="#adjustable-Links" 
           role="tab" 
           aria-selected="false">Link</a>
    </li>
</ul><div class="tab-content">
<div class="tab-pane show active"
     id="adjustable-Description"
     role="tabpanel">

Graphics like `picker`, `stepper` or `slider` have the ability to continuously change the value they provide.

![](../../images/iOSdev/ValeursAjustables_1.png)
<br>It's hard to render what's happening when the changing isn't graphically or vocally notified.
</div>
<div class="tab-pane" id="adjustable-Example" role="tabpanel">

The following methodology to resolve this problem for blind people using VoiceOver may be the same for these three graphics, that's why only the `stepper` will be handled.
<br><br>Creating a `stepper` with a `label` to display its value provides discontiguous information.

![](../../images/iOSdev/ValeursAjustables_2.png)
<br>The focus must change to:

- Get each element that increases or decreases the value.

- Know the value provided by the `label`.

Moreover, there is no real time notification dealing with the value changing.
Nothing is definitely blocking in use but these latest remarks lead to a new design for this example that used to be so simple.

The rationale behind is to be able to change the `stepper` value, to be informed of this modification and to know the new value thanks to a single and unique object.

**Group the `stepper`and the `label`** (a StackView should do the job) then put **`UIAccessibilityTraitAdjustable`** as a new trait for this new accessible group.

This `trait` is **MANDATORY** linked to the `accessibilityIncrement()` and `accessibilityDecrement()` methods that must be implemented to define the continous way of changing the value.

As a result, all the previous constraints are removed and a `hint` is natively provided by this `trait` to mention the proper way of using this object.
![](../../images/iOSdev/ValeursAjustables_4.png)

- To get this result, the container class {`stepper` + `label`} is first created to allow the delegation for the future value changing.

<pre><code class="objectivec">
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
</code></pre>

<pre><code class="swift">
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

<pre><code class="objectivec">
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
</code></pre>

<pre><code class="swift">
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

</div>
<div class="tab-pane" id="adjustable-Links" role="tabpanel">

- [`UIAccessibilityTraitAdjustable`](https://developer.apple.com/documentation/uikit/uiaccessibilitytraitadjustable)
</div>
</div>
<br><br>

## Custom actions
<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item" role="presentation">
        <a class="nav-link active"
           data-toggle="tab" 
           href="#customActions-Description" 
           role="tab" 
           aria-selected="true">Description</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#customActions-Example" 
           role="tab" 
           aria-selected="false">Example</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-toggle="tab" 
           href="#customActions-Links" 
           role="tab" 
           aria-selected="false">Links</a>
    </li>
</ul><div class="tab-content">
<div class="tab-pane show active"
     id="customActions-Description"
     role="tabpanel">

Some basic gestures may become a real headache to be perfectly understood by VoiceOver in a fluent way for the user.

A convincing example is the iOS native mail that may suggest some actions&nbsp;:
<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item" role="presentation">
        <a class="nav-link active"
           data-toggle="tab" 
           href="#CustomActionsVoiceOver"
           role="tab" 
           aria-selected="true">VoiceOver</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#CustomActionsSwitchControl"
           role="tab" 
           aria-selected="false">Switch Control</a>
    </li>
</ul>
<div class="tab-content">
<div class="tab-pane show active"
     id="CustomActionsVoiceOver"
     role="tabpanel">

![](../../images/iOSdev/Actions_VoiceOver.png)

The appropriate gesture cannot lead to the proper result with VoiceOver because a flick left will give rise to the selection of the next accessible element instead of suggesting actions as above.

In this case, it would have been relevant to follow the pattern described in the `Example` sheet to get these actions if they weren't natively implemented.
</div>
<div class="tab-pane" 
     id="CustomActionsSwitchControl" 
     role="tabpanel">

![](../../images/iOSdev/Actions_SwitchControl.png)

Using the switch control feature, all the available actions are present at the first screen so as to ease the user experience by reaching his goal as quick as possible.

It's highly recommended to follow the pattern described in the `Example` sheet to get this purpose for a custom component.
</div></div>

<br><br>**iOS 13** intriduced a **new custom actions behavior**: the "actions available" announcement isn't always present anymore.
It was previously offered to every element containing custom actions but, now, **it will occur** when you navigate to another element that **contains a different set of actions**.

The purpose is to **prevent repetitive announcements** on elements where the same actions are present as the previous element.
</div>
<div class="tab-pane" id="customActions-Example" role="tabpanel">

Whatever the VoiceOver or the Switch Control feature, the implementation to get the desired actions on a custom element is exactly the same: VoiceOver is the option to illustrate the following example.

A solution may consist of **associating the selected element with an array of actions** that will be automatically introduced to the user.

![](../../images/iOSdev/Actions_2.png)
<pre><code class="objectivec">
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
</code></pre>

<pre><code class="swift">
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
        
        // iOS 13 new syntax with a closure.
        let a11yDeleteAction = UIAccessibilityCustomAction(name: "delete",
                                                           actionHandler: { (customAction: UIAccessibilityCustomAction) -> Bool in
                                                              //Code to be implemented for the appropriate action.
                                                              return true
                                                           })
                                                           
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
}
</code></pre>

<br>The code above gives rise to a smoother result thanks to consecutive flicks on the selected accessible element:

![flick up to vocalize suggested actions with VoiceOver activated](../../images/iOSdev/Actions_3.png)
<br>To get a visual information about this topic, take a look at the **Accessibility Custom Actions** video whose [detailed&nbsp;summary](../wwdc/2019/#accessibility-custom-actions) is available at the WWDC section of this site.
</div>
<div class="tab-pane" id="customActions-Links" role="tabpanel">

- [`accessibilityCustomActions`](https://developer.apple.com/documentation/objectivec/nsobject/1615150-accessibilitycustomactions)

- [`UIAccessibilityCustomAction`](https://developer.apple.com/documentation/uikit/uiaccessibilitycustomaction)

- [WWDC&nbsp;2017:&nbsp;What's&nbsp;New&nbsp;in&nbsp;Accessibility](../wwdc/2017/215/#custom-actions-3543)

- [Accessibility&nbsp;Custom&nbsp;Actions](../wwdc/2019/#accessibility-custom-actions)
</div>
</div>
<br><br>

## Custom rotor
<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item" role="presentation">
        <a class="nav-link active"
           data-toggle="tab" 
           href="#rotor-Details" 
           role="tab" 
           aria-selected="true">Details</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#rotor-Example" 
           role="tab" 
           aria-selected="false">Example</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-toggle="tab" 
           href="#rotor-Link" 
           role="tab" 
           aria-selected="false">Links</a>
    </li>
</ul><div class="tab-content">
<div class="tab-pane show active"
     id="rotor-Details"
     role="tabpanel">
     
Since iOS10, adding a new rotor option is possible thanks to the **UIAccessibilityCustomRotor** class whose creation is based on 2 elements:

- **UIAccessibilityCustomRotorSearchPredicate**: defines the logic according to the flick type on the screen.

- **UIAccessibilityCustomRotorItemResult**: ensued element from the logic above.
<br>
![](../../images/iOSdev/CustomRotor_1.png)
</div>
<div class="tab-pane" id="rotor-Example" role="tabpanel">

To illustrate the programing side of this feature, the code snippet below counts and displays all the flicks up and down.
<pre><code class="objectivec">
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
</code></pre>

<pre><code class="swift">
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

<br>The code above gives rise to the following illustrated steps:

![changed display with a rotor option](../../images/iOSdev/CustomRotor_2.png)

The use of a custom rotor is definitely not a natural part of a mobile application, that's why its **functioning** and **purpose** must be **fully explained** to assist the user experience.

The main difference between a rotor option and a custom action or an adjustable element relies on the fact that it can be activated whatever the selected element.

However, if the selected element is adjustable or holds any custom actions, **its actions will prevail over those of the rotor**.

Such a feature must be implemented with **caution** and according to **specific needs** whose only purpose should be to **improve and facilitate the user experience**.
</div>
<div class="tab-pane" id="rotor-Link" role="tabpanel">

- [`UIAccessibilityCustomRotor`](https://developer.apple.com/documentation/uikit/uiaccessibilitycustomrotor)

- [`UIAccessibilityCustomRotorItemResult`](https://developer.apple.com/documentation/uikit/uiaccessibilitycustomrotoritemresult)

- [`UIAccessibilityCustomRotorSearchPredicate`](https://developer.apple.com/documentation/uikit/uiaccessibilitycustomrotorsearchpredicate)
</div>
</div>
<br><br>

## Accessibility options
<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item" role="presentation">
        <a class="nav-link active"
           data-toggle="tab" 
           href="#a11yOptions-States" 
           role="tab" 
           aria-selected="true">States</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#a11yOptions-Events" 
           role="tab" 
           aria-selected="false">Events</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#a11yOptions-Recap" 
           role="tab" 
           aria-selected="false">Recap</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-toggle="tab" 
           href="#a11yOptions-Link" 
           role="tab" 
           aria-selected="false">Link</a>
    </li>
</ul><div class="tab-content">
<div class="tab-pane show active"
     id="a11yOptions-States"
     role="tabpanel">
     
On iOS, it is possible to check the accessibility options state that may be changed in the device settings. 

The most useful method provided by the `UIKit` framework is **UIAccessibilityIsVoiceOverRunning** which allows to know whether VoiceOver is activated.
<pre><code class="objectivec">
    BOOL isVoiveOverRunning = (UIAccessibilityIsVoiceOverRunning() ? 1 : 0);
    BOOL isSwitchControlRunning = (UIAccessibilityIsSwitchControlRunning() ? 1 : 0);
    
    NSLog(@"VoiceOver is %d and SwitchControl is %d.", isVoiveOverRunning, isSwitchControlRunning);
</code></pre>

<pre><code class="swift">
    let isVoiceOverRunning = (UIAccessibility.isVoiceOverRunning ? 1 : 0)
    let isSwitchControlRunning = (UIAccessibility.isSwitchControlRunning ? 1 : 0)
        
    print("VoiceOver is \(isVoiceOverRunning) and SwichControl is \(isSwitchControlRunning).")
</code></pre>

<br>Some other methods are deeply explained in a WWDC video whose content is [perfectly&nbsp;detailed](../wwdc/2018/230) in the iOS WWDC section of this site.
</div>
<div class="tab-pane" id="a11yOptions-Events" role="tabpanel">

iOS sends many accessibility events when accessibility options have changed.

For example, if VoiceOver is deactivated, the running applications will receive the `UIAccessibilityVoiceOverStatusDidChangeNotification` event.
This is very useful when used simultaneously with `UIAccessibilityIsVoiceOverRunning`.

Let's say the application behaves differently when VoiceOver is turned on.
What happens if VoiceOver is disabled? This is exactly the use case when the system events can be used.

By listening to these events, it is possible to dynamically change how the application behaves.

In the following example, a method is fired when VoiceOver or Switch Control status has changed.
<pre><code class="objectivec">
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
</code></pre>

<pre><code class="swift">
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

</div>
<div class="tab-pane" id="a11yOptions-Recap" role="tabpanel">

All accessibility <a href="https://developer.apple.com/documentation/uikit/accessibility/notification_names?language=objc" style="text-decoration: underline;">events</a> and <a href="https://developer.apple.com/documentation/uikit/accessibility?language=objc" style="text-decoration: underline;">options</a> are available on the official documentation from Apple.

![](../../images/iOSdev/OptionsA11Y.png)
</div>
<div class="tab-pane" id="a11yOptions-Link" role="tabpanel">

- [Accessibility&nbsp;options](./../design#accessibility-options) (the iOS conception section of this site)
</div>
</div>
<br><br>

## Navigation bar
<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item" role="presentation">
        <a class="nav-link active"
           data-toggle="tab" 
           href="#navBar-Description" 
           role="tab" 
           aria-selected="true">Description</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#navBar-LeftBarItem" 
           role="tab" 
           aria-selected="false">LeftBarItem</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#navBar-Title" 
           role="tab" 
           aria-selected="false">Title</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-toggle="tab" 
           href="#navBar-RightBarItem" 
           role="tab" 
           aria-selected="false">RightBarItem</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#navBar-ReadingOrder" 
           role="tab" 
           aria-selected="false">Reading order</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#navBar-Link" 
           role="tab" 
           aria-selected="false">Link</a>
    </li>
</ul><div class="tab-content">
<div class="tab-pane show active"
     id="navBar-Description"
     role="tabpanel">
     
Using a navigation bar is a common practice that can be divided into three main parts:

![](../../images/iOSdev/NavigationBar_1.png)

- **LeftBarItem**: usually includes only a single element to get back to the previous screen.

- **Title**: often presented as a simple text that may be build with StackViews in the most complex use cases.

- **RightBarItem**: area  that might contains many different icons (account, authentication, validation...).

Using the standard components with few navigation bar customizations is a good way to give rise to the best VoiceOver result with minimal effort.

Unfortunately, some project constraints may prevent such a practice: specific examples are then provided in the next tabs so as to ease some delicate implementations that might include the reading order of items comprising even those of the navigation bar.
</div>
<div class="tab-pane" id="navBar-LeftBarItem" role="tabpanel">
    
Once the navigation bar loaded, a new `label` must be provided so as to amend only the VoiceOver reading out without modifying the appearance of the left bar item.

<pre><code class="objectivec">
    self.navigationController.navigationBar.backItem.accessibilityLabel = @"new label for the back button";
</code></pre>
<pre><code class="swift">
    navigationController?.navigationBar.backItem?.accessibilityLabel = "new label for the back button"
</code></pre>

<br>The customization of this element often consists in **displaying a single disclosure indicator with no text**.

![](../../images/iOSdev/NavigationBar_2.png)
The two possible achievements that are detailed in the following examples are based on the standard component replacement by a customized **UIBarButtonItem** with a simple **image as an incoming parameter** for the disclosure indicator: 

<pre><code class="objectivec">
    UIBarButtonItem &#42; _a11yLeftBarButton;
    
    _a11yLeftBarButton = [[UIBarButtonItem alloc]initWithImage:[UIImage imageNamed:@"imgInfo"]
                                                         style:UIBarButtonItemStyleDone
                                                        target:self
                                                        action:@selector(goBackToThePreviousView:)];
    
    _a11yLeftBarButton.accessibilityLabel = @"previous screen";
    self.navigationItem.leftBarButtonItem = _a11yLeftBarButton;
</code></pre>

<pre><code class="swift">
    var a11yLeftBarButton: UIBarButtonItem?
    
    a11yLeftBarButton = UIBarButtonItem(image: UIImage(named: "imgInfo"),
                                        style: .done,
                                        target: self,
                                        action: #selector(goBackToThePreviousView(info:)))

    a11yLeftBarButton!.accessibilityLabel = "previous screen"
    navigationItem.leftBarButtonItem = a11yLeftBarButton
</code></pre>

<br>... or on a **UIView** with an added gesture recognizer to define the action of this element: it's a little bit longer than the previous one but it has the advantage of **providing a frame** whose interest will be enlighted if the reading order of the page items will include those of the navigation bar for instance.

<pre><code class="objectivec">
    var a11yLeftBarButton: UIBarButtonItem?
    
    UIImage &#42; img = [UIImage imageNamed:@"imgInfo"];
    UIImageView &#42; imgView = [[UIImageView alloc]initWithImage:img];
    _a11yLeftBarButton = [[UIBarButtonItem alloc]initWithCustomView:imgView];
    
    UITapGestureRecognizer &#42; tap = [[UITapGestureRecognizer alloc]initWithTarget:self
                                                                          action:@selector(goBackToThePreviousView:)];
    [_a11yLeftBarButton.customView addGestureRecognizer:tap];
    
    _a11yLeftBarButton.isAccessibilityElement = YES;
    _a11yLeftBarButton.accessibilityTraits = UIAccessibilityTraitButton;
    _a11yLeftBarButton.accessibilityLabel = @"previous screen";
    
    self.navigationItem.leftBarButtonItem = _a11yLeftBarButton;
</code></pre>

<pre><code class="swift">
    var a11yLeftBarButton: UIBarButtonItem?
    
    let a11yLeftBarButtonImage = UIImage(named: "imgInfo")
    a11yLeftBarButton = UIBarButtonItem(customView: UIImageView(image: a11yLeftBarButtonImage))
        
    let tap = UITapGestureRecognizer(target: self,
                                     action: #selector(goBackToThePreviousView(info:)))
    a11yLeftBarButton?.customView?.addGestureRecognizer(tap)
        
    a11yLeftBarButton?.isAccessibilityElement = true
    a11yLeftBarButton?.accessibilityTraits = .button
    a11yLeftBarButton?.accessibilityLabel = "previous screen"
        
    navigationItem.leftBarButtonItem = a11yLeftBarButton
</code></pre>

<br>Then, the chosen implementation will depend on the purpose of the new created element.
</div>
<div class="tab-pane" id="navBar-Title" role="tabpanel">

In order to have a quick access to the accessibility properties of a navigation bar title item, it's recommended to **implement its content in a UIView form**:

<pre><code class="objectivec">
    UILabel &#42; a11yTitleLabel = [[UILabel alloc]init];
    a11yTitleLabel.text = @"TITLE";
    [a11yTitleLabel sizeToFit];
    
    self.navigationItem.titleView = a11yTitleLabel;
    self.navigationItem.titleView.accessibilityLabel = @"writing and reading out are different";
</code></pre>

<pre><code class="swift">
    let a11yTitleLabel = UILabel()
    a11yTitleLabel.text = "TITLE"
    a11yTitleLabel.sizeToFit()

    navigationItem.titleView = a11yTitleLabel
    navigationItem.titleView?.accessibilityLabel = "writing and reading out are different"
</code></pre>

</div>
<div class="tab-pane" id="navBar-RightBarItem" role="tabpanel">

![](../../images/iOSdev/NavigationBar_3.png)
<br>**Using UIView is recommended** when new elements are created in the right part of the navigation bar so as to ease some VoiceOver future implementations.
<pre><code class="objectivec">
    UIBarButtonItem &#42; _a11yRightBarButton;

    UILabel &#42; a11y = [[UILabel alloc]init];
    a11y.text = @"OK";
    [a11y sizeToFit];
    [a11y setUserInteractionEnabled:YES]; //Mandatory to use the 'tap gesture'.
    
    _a11yRightBarButton = [[UIBarButtonItem alloc]initWithCustomView:a11y];
    
    UITapGestureRecognizer &#42; tap = [[UITapGestureRecognizer alloc]initWithTarget:self 
                                                                          action:@selector(validateActions:)];
    [_a11yRightBarButton.customView addGestureRecognizer:tap];
    
    _a11yRightBarButton.isAccessibilityElement = YES;
    _a11yRightBarButton.accessibilityTraits = UIAccessibilityTraitButton;
    _a11yRightBarButton.accessibilityLabel = @"validate your actions";
    
    self.navigationItem.rightBarButtonItem = _a11yRightBarButton;
</code></pre>

<pre><code class="swift">
    var a11yRightBarButton: UIBarButtonItem?

    let a11y = UILabel()
    a11y.text = "OK"
    a11y.sizeToFit()
    a11y.isUserInteractionEnabled = true //Mandatory to use the 'tap gesture'.

    a11yRightBarButton = UIBarButtonItem(customView: a11y)
        
    let tap = UITapGestureRecognizer(target: self,
                                     action: #selector(validateActions(info:)))
    a11yRightBarButton?.customView?.addGestureRecognizer(tap)
        
    a11yRightBarButton?.isAccessibilityElement = true
    a11yRightBarButton?.accessibilityTraits = .button
    a11yRightBarButton?.accessibilityLabel = "validate your actions"
        
    navigationItem.rightBarButtonItem = a11yRightBarButton
</code></pre>

</div>
<div class="tab-pane" id="navBar-ReadingOrder" role="tabpanel">

Usually, we don't need to change the VoiceOver reading order for the navigation bar items but it's sometimes necessary ⟹ tutorial page whose `RightBarItem` triggers the display of the next page for instance.

As an example, let's assume that the `RightBarItem` must be the last focused element thanks to one-finger left flicks in order to illustrate a reading order modification that involves the navigation bar items.

The proposed page will be composed of the following elements:
<ul>
  <li>A navigation bar with a disclosure indicator (LeftBarItem), a title and a 'OK' button (RightBarItem).</li>
  <li>Five not consecutive labels.</li>
  <li>An 'ACTION' button that is horizontally and vertically centered.</li>
</ul>

![](../../images/iOSdev/NavigationBar_4.png)

The rationale behind this presentation is to follow this order: LeftBarItem, title, Label1, Label2, Label3, 'ACTION' button, Label4, Label5 and RightBarItem.

First of all, the navigation bar items are customized thanks to the code examples provided in the other sheets of this section.
<pre><code class="objectivec">
@interface NavigationBarReadingOrder() {
    UIBarButtonItem &#42; _a11yLeftBarButton;
    UIView &#42; _a11yBarTitle;
    UIBarButtonItem &#42; _a11yRightBarButton;
}
@end


@implementation NavigationBarReadingOrder

- (void)viewDidLoad {
    [super viewDidLoad];
    
    [self setBackItem];
    [self setTitle];
    [self setNextPageBarButton];
}


- (void)setBackItem {
    
    UIImage &#42; img = [UIImage imageNamed:@"infoImg"];
    UIImageView &#42; imgView = [[UIImageView alloc]initWithImage:img];
    _a11yLeftBarButton = [[UIBarButtonItem alloc]initWithCustomView:imgView];
    
    UITapGestureRecognizer &#42; tap = [[UITapGestureRecognizer alloc]initWithTarget:self
                                                                          action:@selector(goBackToThePreviousView:)];
    [_a11yLeftBarButton.customView addGestureRecognizer:tap];
    
    self.navigationItem.leftBarButtonItem = _a11yLeftBarButton;
}


- (void)setTitle {
    
    UILabel &#42; a11yTitleLabel = [[UILabel alloc]init];
    a11yTitleLabel.text = @"TITLE";
    [a11yTitleLabel sizeToFit];
    
    self.navigationItem.titleView = a11yTitleLabel;
    _a11yBarTitle = self.navigationItem.titleView;
}


- (void)setNextPageBarButton {
    
    UILabel &#42; a11y = [[UILabel alloc]init];
    a11y.text = @"OK";
    [a11y sizeToFit];
    [a11y setUserInteractionEnabled:YES];
    
    _a11yRightBarButton = [[UIBarButtonItem alloc]initWithCustomView:a11y];
    
    UITapGestureRecognizer &#42; tap = [[UITapGestureRecognizer alloc]initWithTarget:self
                                                                          action:@selector(validateActions:)];
    [_a11yRightBarButton.customView addGestureRecognizer:tap];
    
    self.navigationItem.rightBarButtonItem = _a11yRightBarButton;
}
@end
</code></pre>

<pre><code class="swift">
class OrderViewController: UIViewController {

    var a11yLeftBarButton: UIBarButtonItem?
    var a11yBarTitle: UIView?
    var a11yRightBarButton: UIBarButtonItem?
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        setBackItem()
        setTitle()
        setNextPageBarButton()
    }
    
    private func setBackItem() {
        let a11yLeftBarButtonImage = UIImage(named: "infoImg")
        a11yLeftBarButton = UIBarButtonItem(customView: UIImageView(image: a11yLeftBarButtonImage))

        let tap = UITapGestureRecognizer(target: self,
                                         action: #selector(goBackToThePreviousView(info:)))
        a11yLeftBarButton?.customView?.addGestureRecognizer(tap)

        navigationItem.leftBarButtonItem = a11yLeftBarButton
    }
    
    private func setTitle() {
        
        let a11yTitleLabel = UILabel()
        a11yTitleLabel.text = "TITLE"
        a11yTitleLabel.sizeToFit()

        navigationItem.titleView = a11yTitleLabel
        a11yBarTitle = navigationItem.titleView
    }
    
    private func setNextPageBarButton() {
    
        let a11y = UILabel()
        a11y.text = "OK"
        a11y.sizeToFit()
        a11y.isUserInteractionEnabled = true

        a11yRightBarButton = UIBarButtonItem(customView: a11y)
        
        let tap = UITapGestureRecognizer(target: self,
                                         action: #selector(goToTheNextPage(info:)))
        a11yRightBarButton?.customView?.addGestureRecognizer(tap)
        
        navigationItem.rightBarButtonItem = a11yRightBarButton
    }
}
</code></pre>

<br>Next, we **create accessible elements** for the navigation bar and we **define the VoiceOver reading order** for the entire page thanks to its `accessibilityElements` array.

The entire page and the navigation bar are two different containers that lead to **hiding to VoiceOver the navigation bar native items** and to transfer them to the page view with the focus appropriate coordinates.

<pre><code class="objectivec">
@interface NavigationBarReadingOrder() {
    UIBarButtonItem &#42; _a11yLeftBarButton;
    UIView &#42; _a11yBarTitle;
    UIBarButtonItem &#42; _a11yRightBarButton;
}

@property (weak, nonatomic) IBOutlet UILabel &#42; a11yLabel1;
@property (weak, nonatomic) IBOutlet UILabel &#42; a11yLabel2;
@property (weak, nonatomic) IBOutlet UILabel &#42; a11yLabel3;
@property (weak, nonatomic) IBOutlet UILabel &#42; a11yLabel4;
@property (weak, nonatomic) IBOutlet UILabel &#42; a11yLabel5;
@property (weak, nonatomic) IBOutlet UIButton &#42; a11yCentralButton;

@end


@implementation NavigationBarReadingOrder

- (void)viewDidAppear:(BOOL)animated {
    [super viewDidAppear:animated];
    
    [self createA11yElts];
    self.navigationController.navigationBar.accessibilityElementsHidden = YES;
}


- (void)createA11yElts {
    
    UIView &#42; navBarView = [[[_a11yBarTitle superview] superview] superview];
    
    UIView &#42; leftButtonView = [_a11yLeftBarButton valueForKey:@"view"];
    UIAccessibilityElement * a11yLBB = [[UIAccessibilityElement alloc] initWithAccessibilityContainer:self.view];
    a11yLBB.accessibilityFrameInContainerSpace = [navBarView convertRect:[[leftButtonView superview] superview].frame toView:self.view];
    a11yLBB.accessibilityLabel = @"previous screen";
    a11yLBB.accessibilityTraits = UIAccessibilityTraitButton;
    
    UIAccessibilityElement &#42; a11yTBV = [[UIAccessibilityElement alloc] initWithAccessibilityContainer:self.view];
    a11yTBV.accessibilityFrameInContainerSpace = [navBarView convertRect:[self.navigationItem.titleView superview].frame toView:self.view];
    a11yTBV.accessibilityLabel = @"writing and reading out are different";
    a11yTBV.accessibilityTraits = UIAccessibilityTraitHeader;

    UIView &#42; rightButtonView = [_a11yRightBarButton valueForKey:@"view"];
    UIAccessibilityElement &#42; a11yRBB = [[UIAccessibilityElement alloc] initWithAccessibilityContainer:self.view];
    a11yRBB.accessibilityFrameInContainerSpace = [navBarView convertRect:[[rightButtonView superview] superview].frame toView:self.view];
    a11yRBB.accessibilityLabel = @"next screen";
    a11yRBB.accessibilityTraits = UIAccessibilityTraitButton;
    
    self.view.accessibilityElements = @[a11yLBB,
                                        a11yTBV,
                                        _a11yLabel1,
                                        _a11yLabel2,
                                        _a11yLabel3,
                                        _a11yCentralButton,
                                        _a11yLabel4,
                                        _a11yLabel5,
                                        a11yRBB];
}
@end

</code></pre>

<pre><code class="swift">
@IBOutlet weak var a11yLabel1: UILabel!
@IBOutlet weak var a11yLabel2: UILabel!
@IBOutlet weak var a11yLabel3: UILabel!
@IBOutlet weak var a11yLabel4: UILabel!
@IBOutlet weak var a11yLabel5: UILabel!
@IBOutlet weak var a11yCentralButton: UIButton!

override func viewDidAppear(&#95; animated: Bool) {
    super.viewDidAppear(animated)
        
    createA11yElts()
    navigationController?.navigationBar.accessibilityElementsHidden = true
}
    
private func createA11yElts() {
        
    let navBarView = a11yBarTitle?.superview?.superview?.superview

    let leftButtonView = a11yLeftBarButton?.value(forKey: "view") as? UIView
    let a11yLBB = UIAccessibilityElement(accessibilityContainer: self.view!)
    a11yLBB.accessibilityFrameInContainerSpace = navBarView!.convert((leftButtonView?.superview?.superview!.frame)!,to:self.view)
    a11yLBB.accessibilityLabel = "previous screen"
    a11yLBB.accessibilityTraits = .button

    let a11yTBV = UIAccessibilityElement(accessibilityContainer: self.view!)
    a11yTBV.accessibilityFrameInContainerSpace = navBarView!.convert((navigationItem.titleView?.superview!.frame)!,to:self.view)
    a11yTBV.accessibilityLabel = "writing and reading out are different"
    a11yTBV.accessibilityTraits = .header

    let rightButtonView = a11yRightBarButton?.value(forKey: "view") as? UIView
    let a11yRBB = UIAccessibilityElement(accessibilityContainer: self.view!)
    a11yRBB.accessibilityFrameInContainerSpace = navBarView!.convert((rightButtonView?.superview?.superview!.frame)!,to:self.view)
    a11yRBB.accessibilityLabel = "next screen"
    a11yRBB.accessibilityTraits = .button

    self.view.accessibilityElements = [a11yLBB,
                                       a11yTBV,
                                       a11yLabel1!,
                                       a11yLabel2!,
                                       a11yLabel3!,
                                       a11yCentralButton!,
                                       a11yLabel4!,
                                       a11yLabel5!,
                                       a11yRBB]
}
</code></pre>
    
<br>The result corresponds to the desired reading order using successive one-finger flicks to select the different accessible elements.

![](../../images/iOSdev/NavigationBar_5.png)
![](../../images/iOSdev/NavigationBar_6.png)
</div>
<div class="tab-pane" id="navBar-Link" role="tabpanel">

- [UINavigationBar](https://developer.apple.com/documentation/uikit/uinavigationbar)
</div>
</div>
<br><br>

## Speech synthesis
<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item" role="presentation">
        <a class="nav-link active"
           data-toggle="tab" 
           href="#speechSyn-Description" 
           role="tab" 
           aria-selected="true">Description</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#speechSyn-Details" 
           role="tab" 
           aria-selected="false">Details</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-toggle="tab" 
           href="#speechSyn-Example" 
           role="tab" 
           aria-selected="false">Example</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#speechSyn-Phonemes" 
           role="tab" 
           aria-selected="false">Phonemes</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#speechSyn-Links" 
           role="tab" 
           aria-selected="false">Links</a>
    </li>
</ul><div class="tab-content">
<div class="tab-pane show active"
     id="speechSyn-Description"
     role="tabpanel">

Many [use cases](../wwdc/2018/236/#uses-0048) are good candidates to use the speech synthesis and they aren't necessary all part of accessibility.

However, in that perspective, it's important to note that this **feature doesn't replace VoiceOver** but could be a good complement to the screen reader implementation (the speech overlaps the screen reader voice).
</div>
<div class="tab-pane" id="speechSyn-Details" role="tabpanel">

Few elements are mandatory to create a speech synthesis on the fly:
<ul>
  <li><B>The text</B>: `AVSpeechUtterance` instance with a `voice` property that's `AVSpeechSynthesisVoice` typed.</li>
    <br>
  <li><B>The synthesizer</B>: `AVSpeechSynthesizer` instance that handles the incoming text with an events control thanks to the `AVSpeechSynthesizerDelegate` protocol.</li>
</ul>
<br>

![](../../images/iOSdev/SpeechSynthesizer.png)
</div>
<div class="tab-pane" id="speechSyn-Example" role="tabpanel">

To be sure that a bunch of `AVSpeechUtterance` instances is entirely vocalized, it's [essential](../wwdc/2018/236/#basics-0203) to retain the `AVSpeechSynthesizer` instance until the speech is done.

The following example will define the speech rate and the voice pitch/volume for each utterance while:
<ul>
  <li>Highlighting the vocalized word thanks to the `AVSpeechSynthesizerDelegate` protocol.</li>
  <li>Pausing and resuming from where the speech stopped thanks to some `AVSpeechSynthesizer` instance methods.</li>
</ul>

<pre><code class="objectivec">
@interface SpeechSynthesis()  <AVSpeechSynthesizerDelegate> {

    NSMutableArray * playerQueue;
    AVSpeechSynthesizer * synthesizer;
    __weak IBOutlet UILabel * textLabel;
}
@end

NS_ASSUME_NONNULL_BEGIN
@implementation SpeechSynthesis

- (void)viewDidLoad {
    [super viewDidLoad];
    
    playerQueue = [[NSMutableArray alloc] init];
    synthesizer = [[AVSpeechSynthesizer alloc] init];
}

- (void)viewDidAppear:(BOOL)animated {
    [super viewDidAppear:animated];
    
    for (int i = 1 ; i < 11 ; i++) {
     
        NSString * stringNbPrefix = @"Sentence number ";
        NSString * stringNbSuffix = @" of the speech synthesizer.";
        NSString * stringNb = [NSString stringWithFormat:@"%@%i%@", stringNbPrefix, i, stringNbSuffix];
        
        AVSpeechUtterance * utterance = [[AVSpeechUtterance alloc] initWithString:stringNb];
        utterance.rate = AVSpeechUtteranceDefaultSpeechRate;
        utterance.pitchMultiplier = 1.0;
        utterance.volume = 1.0;
        
        [playerQueue addObject:utterance];
    }
    
    synthesizer.delegate = self;
    
    for (AVSpeechUtterance * utterance in playerQueue) {
        [synthesizer speakUtterance:utterance];
    }
}

//AVSpeechSynthesizerDelegate protocol method to highlight the vocalized word.
- (void)speechSynthesizer:(AVSpeechSynthesizer *)synthesizer
willSpeakRangeOfSpeechString:(NSRange)characterRange
                utterance:(AVSpeechUtterance *)utterance {
    
    NSMutableAttributedString * attributedString = [[NSMutableAttributedString alloc] initWithString:utterance.speechString];
    
    [attributedString addAttribute:NSFontAttributeName
                             value:[UIFont systemFontOfSize:19.0]
                             range:characterRange];
    
    NSAttributedString * subString = [attributedString attributedSubstringFromRange:characterRange];
    textLabel.attributedText = attributedString;
    
    NSString * output = [NSString stringWithFormat:@"%@%@", @"word : ", subString.string];
    NSLog(@"%@", output);
}

- (IBAction)pauseButton:(UIButton *)sender {
    
    if (synthesizer.isSpeaking == TRUE) {
        if ([synthesizer pauseSpeakingAtBoundary:AVSpeechBoundaryImmediate] == TRUE) {
            NSLog(@"PAUSE");
        } else {
            NSLog(@"P.R.O.B.L.E.M. when pausing.");
        }
    }
}

- (IBAction)resumeButton:(UIButton *)sender {
    
    if (synthesizer.isPaused == TRUE) {
        if ([synthesizer continueSpeaking] == TRUE) {
            NSLog(@"RESUME");
        } else {
            NSLog(@"P.R.O.B.L.E.M. when resuming.");
        }
    }
}
@end
</code></pre>

<pre><code class="swift">
class SpeechSynthesis: UIViewController, AVSpeechSynthesizerDelegate {
    
    @IBOutlet weak var textLabel: UILabel!
    
    var synthesizer = AVSpeechSynthesizer()
    var playQueue = [AVSpeechUtterance]()
    
    
    override func viewDidAppear(_ animated: Bool) {
        super.viewDidAppear(animated)
        
        for i in 1...10 {
            
            let stringNb = "Sentence number " + String(i) + " of the speech synthesizer."
            
            let utterance = AVSpeechUtterance(string: stringNb)
            utterance.rate = AVSpeechUtteranceDefaultSpeechRate
            utterance.pitchMultiplier = 1.0
            utterance.volume = 1.0
            
            playQueue.append(utterance)
        }

        synthesizer.delegate = self

        for utterance in playQueue {
            synthesizer.speak(utterance)
        }
    }
    
    //AVSpeechSynthesizerDelegate protocol method to highlight the vocalized word.
    func speechSynthesizer(_ synthesizer: AVSpeechSynthesizer,
                           willSpeakRangeOfSpeechString characterRange: NSRange,
                           utterance: AVSpeechUtterance) {

        let attributedString = NSMutableAttributedString(string: utterance.speechString)
        attributedString.addAttribute(.font,
                                      value: UIFont.boldSystemFont(ofSize: 19),
                                      range: characterRange)

        textLabel.attributedText = attributedString

        let subString = attributedString.attributedSubstring(from: characterRange)
        print("word : \(subString.string)")
    }
    
    
    @IBAction func pauseAction(_ sender: UIButton) {
    
        if (synthesizer.isSpeaking == true) {
            if (synthesizer.pauseSpeaking(at: .immediate) == true) {
                print("PAUSE")
            } else {
                print("P.R.O.B.L.E.M. when pausing.")
            }
        }
    }
    
    
    @IBAction func resumeAction(_ sender: UIButton) {
     
        if (synthesizer.isPaused == true) {
            if (synthesizer.continueSpeaking() == true) {
                print("RESUME")
            } else {
                print("P.R.O.B.L.E.M. when resuming.")
            }
        }
    }
}
</code></pre>

</div>
<div class="tab-pane" id="speechSyn-Phonemes" role="tabpanel">

When a particular spelling is intended, phonetics is highly recommended to get the desired purpose.

<pre><code class="objectivec">
    NSMutableAttributedString &#42; attrStr = [[NSMutableAttributedString alloc] initWithString:@"blablabla" 
                                                                             attributes:@{AVSpeechSynthesisIPANotationAttribute:@"ˈma͡ɪ.ˈa͡ɪ.ˈfʌ.ˈniz.ˈgɻe͡ɪt"}];
    
    AVSpeechUtterance &#42; utterance = [[AVSpeechUtterance alloc] initWithAttributedString:attrStr];
    
    AVSpeechSynthesizer &#42; synthesizer = [[AVSpeechSynthesizer alloc] init];
    [synthesizer speakUtterance:utterance];
</code></pre>

<pre><code class="swift">
        let pronunciationKey = NSAttributedString.Key(rawValue: AVSpeechSynthesisIPANotationAttribute)
        
        let attrStr = NSMutableAttributedString(string: "blablabla",
                                                attributes: [pronunciationKey: "ˈma͡ɪ.ˈa͡ɪ.ˈfʌ.ˈniz.ˈgɻe͡ɪt"])

        let utterance = AVSpeechUtterance(attributedString: attrStr)

        let synthesizer = AVSpeechSynthesizer()
        synthesizer.speak(utterance)
</code></pre>

<br>Generating phonetics may be done in the device settings.
<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item" role="presentation">
        <a class="nav-link active"
           data-toggle="tab" 
           href="#Phonemes-iOS13"
           role="tab" 
           aria-selected="true">iOS 13</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#Phonemes-iOS12"
           role="tab" 
           aria-selected="false">iOS 12</a>
    </li>
</ul><div class="tab-content">
<div class="tab-pane show active"
     id="Phonemes-iOS13"
     role="tabpanel">
     
![](../../images/iOSdev/SpeechSynthesizerEx_iOS13_1.png)
</div>
<div class="tab-pane" 
     id="Phonemes-iOS12" 
     role="tabpanel">
     
![](../../images/iOSdev/SpeechSynthesizerEx_1.png)
</div></div>

<br>Once the menu `Pronunciations` is reached...

![](../../images/iOSdev/SpeechSynthesizerEx_2.png)
<br>
<ol>
  <li>Select the '<B>+</B>' icon to add a new phonetic element.</li>
  <br>
  <li>Name this new element in order to quickly find it later on.</li>
  <br>
  <li>Tap the <B>microphone</B> icon.</li>
  <br>
  <li>Vocalize an entire sentence or a single word.</li>
  <br>
  <li>Listen to the different system proposals.</li>
  <br>
  <li>Validate your choice with the '<B>OK</B>' button or cancel to start over.</li>
  <br>
  <li>Tap the back button to confirm the new created phonetic element.</li>
  <br>
  <li>Find all the generated elements in the `Pronunciations` page.</li>
</ol>

![](../../images/iOSdev/SpeechSynthesizerEx_3.png)

To get the phonetic expression inside the code, pass it through the mobile `Notes` application to be synchronized with the iCloud one from which a copy-paste becomes easy as a pie.
</div>
<div class="tab-pane" id="speechSyn-Links" role="tabpanel">

<ul>
  <li> <a href="https://developer.apple.com/documentation/avfoundation/avspeechsynthesisvoice" style="text-decoration: underline;">AVSpeechSynthesisVoice</a>
  <br><br>
  <li><a href="https://developer.apple.com/documentation/avfoundation/avspeechsynthesizer" style="text-decoration: underline;">AVSpeechSynthesizer</a>
      </li>
  <br>
  <li><a href="https://developer.apple.com/documentation/avfoundation/avspeechsynthesizerdelegate" style="text-decoration: underline;">AVSpeechSynthesizerDelegate</a>
      </li>
  <br>
  <li><a href="https://developer.apple.com/documentation/avfoundation/avspeechutterance" style="text-decoration: underline;">AVSpeechUtterance</a>
      </li>
  <br>
  <li><a href="../wwdc/2018/236/" style="text-decoration: underline;">WWDC&nbsp;2018&nbsp;:&nbsp;Making&nbsp;iOS&nbsp;talk&nbsp;with&nbsp;AVSpeechSynthesizer</a>
    </li>
</ul>
</div>
</div>
<br>

All the speech synthesizer functionalities are introduced in a [WWDC video](../wwdc/2018/236) *(Making iOS talk with AVSpeechSynthesizer)* that's perfectly summarized in the WWDC section of this site.
<br><br>

## Switch Control
<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item" role="presentation">
        <a class="nav-link active"
           data-toggle="tab" 
           href="#switchCtrl-Description" 
           role="tab" 
           aria-selected="true">Description</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#switchCtrl-Custom" 
           role="tab" 
           aria-selected="false">Item mode customization</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#switchCtrl-Link" 
           role="tab" 
           aria-selected="false">Link</a>
    </li>
</ul><div class="tab-content">
<div class="tab-pane show active"
     id="switchCtrl-Description"
     role="tabpanel">
     
The accessibility Switch Control feature revolves around the point mode and the item mode.

![accessibility switch control screenshots](../../images/iOSdev/SwitchControl.png)

The element selection using the item mode works fine when the user interface isn't too complicated and uses native elements.

However, this mode may not be helpful according to the rationale behind some specific use cases and then needs to be customized.
</div>
<div class="tab-pane" id="switchCtrl-Custom" role="tabpanel">

The Xcode InterfaceBuilder shows the structure used for the example hereunder:

![xcode screenshot](../../images/iOSdev/SwitchControlIB.png)

The following steps represent the customization:

- Creation of 2 groups {Test_1 + Test_2 ; Btn 5 + Btn 6} that must be selectable in the item mode.

- Within the other elements, only Btn 1 et Btn 2 must be separately accessible.

<br>

<pre><code class="objectivec">
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
</code></pre>

<pre><code class="swift">
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

        let testWrap = UIAccessibilityElement(accessibilityContainer: self.view!)

        testWrap.isAccessibilityElement = false
        testWrap.accessibilityFrame = testWrapFrame!
        testWrap.accessibilityNavigationStyle = .combined   //Property specific to Switch Control.
        testWrap.accessibilityElements = [testOneButton!, testTwoButton!]


        //Creation of the 'secondGroup' SEPARATING the first two buttons.
        let secondGroupRect = btn1.frame.union(btn2.frame)
        let secondGroupFrame = btnsParentView.convert(secondGroupRect,
                                                      to: self.view)
        let secondGroup = UIAccessibilityElement(accessibilityContainer: btnsParentView!)

        secondGroup.isAccessibilityElement = false
        secondGroup.accessibilityFrame = secondGroupFrame
        secondGroup.accessibilityNavigationStyle = .separate
        secondGroup.accessibilityElements = [btn1!, btn2!]


        //Creation of the 'thirdGroup' COMBINING the last two buttons.
        let thirdGroupRect = btn5.frame.union(btn6.frame)
        let thirdGroupFrame = btnsParentView.convert(thirdGroupRect,
                                                     to: self.view)
        let thirdGroup = UIAccessibilityElement(accessibilityContainer: btnsParentView!)

        thirdGroup.isAccessibilityElement = false
        thirdGroup.accessibilityFrame = thirdGroupFrame
        thirdGroup.accessibilityNavigationStyle = .combined
        thirdGroup.accessibilityElements = [btn5!, btn6!]


        self.view.accessibilityElements = [testWrap,
                                           secondGroup, 
                                           thirdGroup]
    }
}
</code></pre>

<br>The visual rendering is exposed hereunder:

![visual rendering screenshot](../../images/iOSdev/SwitchControl_1.jpg)
<br>Once activated, the created groups allow to reach directly the elements they contain.

</div>
<div class="tab-pane" id="switchCtrl-Link" role="tabpanel">

- [`accessibilityNavigationStyle`](https://developer.apple.com/documentation/objectivec/nsobject/1615200-accessibilitynavigationstyle)
</div>
</div>
<br><br>

## Vocalized application name
<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item" role="presentation">
        <a class="nav-link active"
           data-toggle="tab" 
           href="#appName-Description" 
           role="tab" 
           aria-selected="true">Description</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#appName-Example" 
           role="tab" 
           aria-selected="false">Example</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#appName-Link" 
           role="tab" 
           aria-selected="false">Link</a>
    </li>
</ul><div class="tab-content">
<div class="tab-pane show active"
     id="appName-Description"
     role="tabpanel">
     
The same result as the <a href="../voiceover#CustomLabel" style="text-decoration: underline;">VoiceOver gesture</a> to set a custom label can be reached by code.

The rationale behind is to render a better vocalisation for an application name that could be very obscure according to its written abbreviation.
</div>
<div class="tab-pane" id="appName-Example" role="tabpanel">

**CFBundleSpokenName** is the property list key that vocally replaces an application name and might take many different translations depending on the foreign languages.

![](../../images/iOSdev/AppName_1.png)

In the end, we go from a weird to an understandable vocalized name that is defined upstream with no user modifications.

![](../../images/iOSdev/AppName_2.png)
</div>
<div class="tab-pane" id="appName-Link" role="tabpanel">

- [`CFBundleSpokenName`](https://developer.apple.com/documentation/bundleresources/information_property_list/cfbundlespokenname)
</div>
</div><br><br>
