---
title: "Guide pour les développeurs iOS"
displayToc: true
---

# Guide pour les développeurs iOS

Ce guide a pour objectif de présenter les différentes notions d’accessibilité à la main des développeurs en associant&nbsp;:

- des explications détaillées concernant les attributs et méthodes d'accessibilité,

- des exemples de code en **Swift 5.3** et en **Objective C** sous {Xcode 13 ; iOS 14},

- des liens vers la [`documentation officielle Apple`](https://developer.apple.com/documentation/uikit/accessibility).

<br><br>

## Nature des éléments
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
           aria-selected="false">Fonctionnement</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#TraitElt-Example" 
           role="tab" 
           aria-selected="false">Exemple</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#TraitElt-BasicOperations" 
           role="tab" 
           aria-selected="false">Operations</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#TraitElt-Links" 
           role="tab" 
           aria-selected="false">Lien</a>
    </li>
</ul><div class="tab-content">
<div class="tab-pane show active"
     id="TraitElt-Description"
     role="tabpanel">
     
L’attribut `accessibilityTraits` permet de donner une information à l’<abbr>API</abbr> d’accessibilité sur la nature d’un composant.
<br>De ce fait, cet attribut joue également sur la vocalisation de l’élément car cette nature est restituée par <span lang="en">VoiceOver</span>.  

</div>
<div class="tab-pane" id="TraitElt-Details" role="tabpanel">

L'`accessibilityTrait` est disponible via l’<i lang="en">interface builder</i> de Xcode mais également utilisable directement via le code.  

Il existe beaucoup de traits dont les principaux sont fournis ci-dessous&nbsp;:

- **accessibilityTraitNone**&nbsp;: supprime toute valeur sémantique à l’élément,

- **accessibilityTraitButton**&nbsp;: ajoute le trait «&nbsp;bouton&nbsp;», l’élément est vu comme un bouton par <span lang="en">VoiceOver</span>,

- **accessibilityTraitLink**&nbsp;: utile pour définir un label en tant que «&nbsp;lien&nbsp;»,

- **accessibilityTraitHeader**&nbsp;: permet de définir un élément comme un en-tête (voir la section <a href="../conception#titre-et-en-tete">«&nbsp;titre&nbsp;et&nbsp;en-tête&nbsp;»</a>),

- **accessibilityTraitAdjustable**&nbsp;: permet de définir un élément comme un élément «&nbsp;ajustable&nbsp;», c’est-à-dire un élément dont la valeur instantanée peut être modifiée via un [geste&nbsp;spécifique](../voiceover/) de <span lang="en">VoiceOver</span> (balayage avec un doigt vers le haut ou le bas).

</div>
<div class="tab-pane" id="TraitElt-Example" role="tabpanel">

<pre><code class="objectivec">
- (void)customTraits() {
    //Spécification d'un UIPageControl avec le trait ’ajustable’.
    pageControl.accessibilityTraits = UIAccessibilityTraitAdjustable;
    
    //Ajout d'un en-tête.  
    defaultHeaderViewCell.accessibilityTraits = UIAccessibilityTraitHeader;
}
</code></pre>

<pre><code class="swift">
func customTraits() {
    //Spécification d'un UIPageControl avec le trait ’ajustable’.
    pageControl.accessibilityTraits = .adjustable
    
    //Ajout d'un en-tête. 
    defaultHeaderViewCell.accessibilityTraits = .header
}
</code></pre>

</div>
<div class="tab-pane" id="TraitElt-BasicOperations" role="tabpanel" >

L'attribut `accessibilityTrait` est en réalité un `bitmask` pour lequel chaque élément pris individuellement peut prendre une valeur spécifique.

![](../../images/iOSdev/Traits.png)
<br>Il est donc possible d'ajouter et d'enlever plusieurs `traits` présents pour caractériser un élement après avoir vérifié leur existence par exemple.

<pre><code class="objectivec">

- (void)changeTraits {

    //Création d'un jeu de traits qui efface le contenu précédent du bitmask.
    onePageButton.accessibilityTraits = UIAccessibilityTraitButton | UIAccessibilityTraitLink;
    
    //Ajouts de traits au contenu existant du bitmask.
    pageControl.accessibilityTraits |= UIAccessibilityTraitHeader; //Only one trait.
    pageControl.accessibilityTraits |= UIAccessibilityTraitButton + UIAccessibilityTraitLink; //Many traits.
    
    //Suppression d'un trait.
    onePageButton.accessibilityTraits &= ~UIAccessibilityTraitLink;
    
    //Vérification de l'existence d'un trait au sein du bitmask.
    if ((pageControl.accessibilityTraits & UIAccessibilityTraitHeader) != 0) {
        // Tâches à réaliser si le trait '.header' est présent...
    }
}
</code></pre>

<pre><code class="swift">
func changeTraits() {
        
    //Création d'un jeu de traits qui efface le contenu précédent du bitmask.
    onePageButton.accessibilityTraits = [.button, .link]
        
    //Ajouts de traits au contenu existant du bitmask.
    pageControl.accessibilityTraits.insert(.header) //Only one trait.
    pageControl.accessibilityTraits.formUnion([.button, .link]) //Many traits.
        
    //Suppression d'un trait.
    onePageButton.accessibilityTraits.remove(.link)
        
    //Vérification de l'existence d'un trait au sein du bitmask.
    if (pageControl.accessibilityTraits.rawValue & UIAccessibilityTraits.header.rawValue == UIAccessibilityTraits.header.rawValue) {
        // Tâches à réaliser si le trait '.header' est présent...
    }
}
</code></pre>

</div>
<div class="tab-pane" id="TraitElt-Links" role="tabpanel" >

- [`accessibilityTraits`](https://developer.apple.com/documentation/objectivec/nsobject/1615202-accessibilitytraits)
</div>
</div>
<br><br>

## Alternatives textuelles
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
           aria-selected="true">Fonctionnement</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#textAlt-Example" 
           role="tab" 
           aria-selected="false">Exemple</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#textAlt-Links" 
           role="tab" 
           aria-selected="false">Liens</a>
    </li>
</ul><div class="tab-content">
<div class="tab-pane show active"
     id="textAlt-Description"
     role="tabpanel">
     
Avec VoiceOver, la vocalisation de chaque élément apportant de l'information doit être parfaitement comprise par l'utilisateur pour lui permettre de ne pas avoir à se poser quelque question que ce soit concernant le contenu de la page qu'il consulte.

Cette précision nécessaire dans l'implémentation de ce mode de fonctionnement est possible en grande partie grâce à 4 attributs&nbsp;: `label`, `hint`, `value` et `trait`.
</div>
<div class="tab-pane" id="textAlt-Details" role="tabpanel">

L’ordre de vocalisation est toujours le même (`label`, `value`, `trait` et `hint`), il ne peut pas être changé et la vocalisation est réalisée en une seule fois à l’arrivée sur l’élément.

Une section de ce guide étant dédiée au <a href="#nature-des-elements" style="text-decoration: underline;">trait</a>, nous décrivons ici les 3 autres attributs&nbsp;:

- **accessibilityLabel**&nbsp;: le label permet de préciser le titre spécifique à l’accessibilité qui est lu par <span lang="en">VoiceOver</span> en lieu et place du texte du composant si celui-ci en possède un, ce qui permet d’avoir un texte de composant plus explicite que celui affiché à l’écran.
Par exemple, dans le cas d’un bouton dont le titre est « OK », on peut indiquer que le bouton sert à valider un choix,

- **accessibilityValue**&nbsp;: la valeur d’un élément est, par défaut, le pourcentage de progression.
À noter que, pour la plupart des éléments ajustables disponibles dans le <abbr>SDK</abbr>, cette `value` n’a pas besoin d’être précisée car le système restitue automatiquement la valeur à l’utilisateur via <span lang="en">VoiceOver</span>,

- **accessibilityHint**&nbsp;: le `hint` permet de décrire le comportement du composant en incorporant des explications supplémentaires.
Exemple&nbsp;: «&nbsp;cliquez pour obtenir le résultat&nbsp;».

Ces attributs sont disponibles via l’<i lang="en">interface builder</i> de Xcode mais également accessibles en programmation.
Tout élément dérivant de `UIView` possède ces attributs qui acceptent une chaîne de caractère les rendant ainsi internationalisables.

</div>
<div class="tab-pane" id="textAlt-Example" role="tabpanel" > 

<pre><code class="objectivec">
@interface ChangeTextView() {
    
    __weak IBOutlet UILabel * monLabel;
    __weak IBOutlet UIProgressView * maProgressView;
}
@end

@implementation ChangeTextView

- (void)viewDidAppear:(BOOL)animated {
    [super viewDidAppear:animated];
    
    monLabel.accessibilityLabel = @"bonjour";
    monLabel.accessibilityHint = @"Ceci est un commentaire supplémentaire.";
    
    maProgressView.accessibilityValue = @"45 pour cent";
}
@end
</code></pre>

<pre><code class="swift">
class ChangeTextView: UIViewController {

    @IBOutlet weak var monLabel: UILabel!
    @IBOutlet weak var maProgressView: UIProgressView!
    
    override func viewDidAppear(_ animated: Bool) {
        super.viewDidAppear(animated)
        
        monLabel.accessibilityLabel = "bonjour"
        monLabel.accessibilityHint = "Ceci est un commentaire supplémentaire."
        
        maProgressView.accessibilityValue = "45 pour cent"
    }
}
</code></pre>

</div>
<div class="tab-pane" id="textAlt-Links" role="tabpanel" > 

- [`accessibilityLabel`](https://developer.apple.com/documentation/objectivec/nsobject/1615181-accessibilitylabel)

- [`accessibilityValue`](https://developer.apple.com/documentation/objectivec/nsobject/1615117-accessibilityvalue)

- [`accessibilityHint`](https://developer.apple.com/documentation/objectivec/nsobject/1615093-accessibilityhint)

- [La&nbsp;bonne&nbsp;rédaction&nbsp;des&nbsp;labels](../wwdc/2019#la-bonne-redaction-des-labels)
</div>
</div>
<br><br>

## Date, heure et nombres
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
           aria-selected="false">Date & Heure</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#format-Numbers" 
           role="tab" 
           aria-selected="false">Nombre</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#format-PhoneNumbers" 
           role="tab" 
           aria-selected="false">Numéro de téléphone</a>
    </li>
</ul><div class="tab-content">
<div class="tab-pane show active"
     id="format-Description"
     role="tabpanel">
     
La lecture des date, heure et nombres n'est pas compliquée mais peut très vite devenir un réel casse-tête avec <span lang="en">VoiceOver</span>.

</div>
<div class="tab-pane" id="format-DateTime" role="tabpanel" >

Si on met directement sous forme de texte la date ou l'heure dans le `label`, on s'aperçoit rapidement que le rendu n'est pas naturel à l'écoute.

![](../../images/iOSdev/DateHeureNombres_10.png)
Il faut absolument formater les données en entrée pour obtenir une vocalisation descriptive naturelle et compréhensible.

![](../../images/iOSdev/DateHeureNombres_4.png)
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
<div class="tab-pane" id="format-Numbers" role="tabpanel" >

En indiquant la valeur d'un nombre directement dans le texte d'un `label`, la vocalisation se fera sur chacun des chiffres présentés rendant la véritable valeur du nombre difficile à deviner.

![](../../images/iOSdev/DateHeureNombres_8.png)

Comme pour les date et heure, il faut formater la donnée en entrée pour qu'elle puisse être analysée et vocalisée selon la véritable valeur du nombre qu'elle représente.

![](../../images/iOSdev/DateHeureNombres_5.png)
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
<div class="tab-pane" id="format-PhoneNumbers" role="tabpanel" >

La problématique liée à la vocalisation d'un numéro de téléphone est identique à celle des nombres puisqu'elle s'appuie entièrement sur le formatage à appliquer avec une prise en compte particulière des chiffres "0".

L'exemple donné ci-dessous concerne la numérotation française avec une logique qui peut se décliner à n'importe quel type de format de numérotation.

![](../../images/iOSdev/DateHeureNombres_11.png)

L'idée est de séparer chaque paire de chiffres par une virgule qui va fournir la ponctuation vocale.
![](../../images/iOSdev/DateHeureNombres_6.png)
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
</div>
<br><br>

## Déclencher une vocalisation
<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item" role="presentation">
        <a class="nav-link active"
           data-toggle="tab" 
           href="#triggerVocal-Details" 
           role="tab" 
           aria-selected="true">Fonctionnement</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#triggerVocal-Example" 
           role="tab" 
           aria-selected="false">Exemple</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#triggerVocal-Links" 
           role="tab" 
           aria-selected="false">Liens</a>
    </li>
</ul><div class="tab-content">
<div class="tab-pane show active"
     id="triggerVocal-Details"
     role="tabpanel">
     
Pour déclencher une vocalisation qui se fera dans la langue du système, il faut envoyer une notification à l’<abbr>API</abbr> d’accessibilité via la méthode **UIAccessibilityPostNotification** avec en paramètres&nbsp;:

- la notification permettant de déclencher une vocalisation **UIAccessibilityAnnouncementNotification**,

- la chaîne de caractères à vocaliser.

</div>
<div class="tab-pane" id="triggerVocal-Example" role="tabpanel">

<pre><code class="objectivec">
UIAccessibilityPostNotification(UIAccessibilityAnnouncementNotification, 
                                @"Message pour la vocalisation.");
</code></pre>

<pre><code class="swift">
UIAccessibility.post(notification: .announcement,
                     argument: "Message pour la vocalisation.")
</code></pre>

</div>
<div class="tab-pane" id="triggerVocal-Links" role="tabpanel">

- [`UIAccessibilityPostNotification`](https://developer.apple.com/documentation/uikit/1615194-uiaccessibilitypostnotification)

- [`UIAccessibilityAnnouncementNotification`](https://developer.apple.com/documentation/uikit/uiaccessibilityannouncementnotification)
</div>
</div>
<br><br>

## Informer d’une modification sur la page
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
           aria-selected="false">Fonctionnement</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#changeNotif-Example" 
           role="tab" 
           aria-selected="false">Exemple</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#changeNotif-Links" 
           role="tab" 
           aria-selected="false">Liens</a>
    </li>
</ul><div class="tab-content">
<div class="tab-pane show active"
     id="changeNotif-Description"
     role="tabpanel">

Lors d’un changement de contenu sur une page, il est primordial de notifier l’<abbr>API</abbr> d’accessibilité de ce changement à travers différentes notifications.

Pour ce faire, il faut envoyer une notification de modification à l’<abbr>API</abbr> d’accessibilité via la méthode **UIAccessibilityPostNotification**.  
</div>
<div class="tab-pane" id="changeNotif-Details" role="tabpanel">

Il existe plusieurs notifications de modification, mais les deux plus utiles sont&nbsp;:

- **UIAccessibilityLayoutChangedNotification**&nbsp;: permet de spécifier à l’<abbr>API</abbr> d’accessibilité qu’une partie de la page a été modifiée et doit être accompagné d'un `NSString` ou d'un `UIObject`.
Avec un `NSString`, la notification se comporte comme une **UIAccessibilityAnnouncementNotification** et lance une vocalisation <span lang="en">VoiceOver</span>.
Avec un `UIObject`, le focus est repositionné sur l’élément précisé.
Cette notification est très similaire à **UIAccessibilityAnnouncementNotification** mais son utilisation doit être mise en avant dès lors qu'une modification dynamique du contenu se produit,

- **UIAccessibilityScreenChangedNotification**&nbsp;: permet d’annoncer un changement global de la page et accepte soit `nil`, soit l’élément qui doit recevoir le focus.
Avec `nil`, la notification vocalise et sélectionne le premier élément accessible de la page.
Avec un `UIObject`, le focus est repositionné sur l’élément précisé en lançant une vocalisation <span lang="en">VoiceOver</span>.
Le son utilisé pour notifier la modification est similaire à l'arrivée d'une nouvelle page.

</div>
<div class="tab-pane" id="changeNotif-Example" role="tabpanel">

<pre><code class="objectivec">
//L'élément 'myLabel' est sélectionné et vocalisé avec sa nouvelle valeur.
- (IBAction)tapHere:(UIButton *)sender {
    
    myLabel.accessibilityLabel = @"Ceci est un nouveau label.";
    UIAccessibilityPostNotification(UIAccessibilityLayoutChangedNotification, myLabel);
}

//Le premier élément accessible de la page est sélectioné et vocalisé avec un son spécifique.
- (IBAction)clic:(UIButton *)sender {
    
    UIAccessibilityPostNotification(UIAccessibilityScreenChangedNotification, nil);
}
</code></pre>

<pre><code class="swift">
//L'élément 'myLabel' est sélectionné et vocalisé avec sa nouvelle valeur.
@IBAction func tapHere(_ sender: UIButton) {
        
    myLabel.accessibilityLabel = "Ceci est un nouveau label."
    UIAccessibility.post(notification: UIAccessibility.Notification.layoutChanged,
                         argument: myLabel)
}
    
//Le premier élément accessible de la page est sélectioné et vocalisé avec un son spécifique.
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

## Modifier la langue de vocalisation
<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item" role="presentation">
        <a class="nav-link active"
           data-toggle="tab" 
           href="#changeLang-Details" 
           role="tab" 
           aria-selected="true">Fonctionnement</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#changeLang-Example" 
           role="tab" 
           aria-selected="false">Exemple</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#changeLang-Links" 
           role="tab" 
           aria-selected="false">Lien</a>
    </li>
</ul><div class="tab-content">
<div class="tab-pane show active"
     id="changeLang-Details"
     role="tabpanel">

Afin de modifier la langue de prononciation de <span lang="en">VoiceOver</span> pour un mot ou un texte, il existe l’attribut **accessibilityLanguage**.

Disponible via le protocole `UIAccessibility`, cet attribut permet de redéfinir la langue de prononciation d’un texte.

</div>
<div class="tab-pane" id="changeLang-Example" role="tabpanel">

Si on utilise l'attribut `accessibilityLanguage` sur un `UILabel`, alors celui-ci sera vocalisé par <span lang="en">VoiceOver</span> dans la nouvelle langue donnée en valeur de l’attribut.<br>

<pre><code class="objectivec">
- (IBAction)tapHere:(UIButton *)sender {
    
    myLabel.accessibilityLanguage = @"en";
    myLabel.accessibilityLabel = @"This is a new label. Thank you.";
}
</code></pre>

<pre><code class="swift">
@IBAction func tapHere(_ sender: UIButton) {
        
    myLabel.accessibilityLanguage = "en"
    myLabel.accessibilityLabel = "This is a new label. Thank you."
}
</code></pre>

Si l'on souhaite ajouter un mot dans une langue spécifique au sein d'une phrase à prononcer de façon appropriée avec VoiceOver, on peut s'appuyer sur les **Attributed Accessibility Properties** en utilisant un `NSAttributedString` [depuis iOS&nbsp;11](https://a11y-guidelines.orange.com/fr/mobile/ios/wwdc/2017/215/#attributed-accessibility-properties-2607).
</div>
<div class="tab-pane" id="changeLang-Links" role="tabpanel">

- [`accessibilityLanguage`](https://developer.apple.com/documentation/objectivec/nsobject/1615192-accessibilitylanguage)
</div>
</div>
<br><br>

<a name="MaskElements"></a>
## Masquer des éléments  
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
           aria-selected="false">Fonctionnement</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#hideElts-Example" 
           role="tab" 
           aria-selected="false">Exemple</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#hideElts-Links" 
           role="tab" 
           aria-selected="false">Liens</a>
    </li>
</ul><div class="tab-content">
<div class="tab-pane show active"
     id="hideElts-Description"
     role="tabpanel">
     
Il est possible de masquer des éléments aux outils d’accessibilité grâce aux attributs d’accessibilité mais aussi de forcer certains éléments à être visibles pour les outils d’accessibilité uniquement.  

</div>
<div class="tab-pane" id="hideElts-Details" role="tabpanel">

- **isAccessibilityElement**&nbsp;: booléen qui permet d’indiquer qu’un élément est visible ou non de l’<abbr>API</abbr> d’accessibilité (de <span lang="en">VoiceOver</span> ou autre).

- **accessibilityElementsHidden**&nbsp;: booléen qui permet d’indiquer que les éléments fils de l’élément cible sont visibles ou non de l’<abbr>API</abbr> d’accessibilité.

- **accessibilityViewIsModal**&nbsp;: booléen qui permet de rendre visible ou non les éléments frères de l’élément cible à l’<abbr>API</abbr> d’accessibilité.
<br>Une [explication&nbsp;théorique](../wwdc/2018/230#element-au-premier-plan-2502) et une [application&nbsp;pratique](../wwdc/2018/230#exemple) de cette propriété sont fournies par une vidéo détaillée dans la partie WWDC de ce site.

L’attribut `isAccessibilityElement` est disponible via l’<i lang="en">interface builder</i> de Xcode mais est également utilisable directement via le code alors que les deux autres attributs sont utilisables uniquement via le code.

</div> 
<div class="tab-pane" id="hideElts-Example" role="tabpanel">

L'idée est de créer un carré rouge qui va contenir 2 autres carrés (bleu et jaune) pour appliquer les attributs définis dans l'onglet `Fonctionnement`.


![](../../images/iOSdev/MasquerDesElements_1.png)
<pre><code class="objectivec">
- (void)viewDidAppear:(BOOL)animated {
    [super viewDidAppear:animated];
    
    //Création d'un élément père dans lequel 2 autres éléments fils vont être insérés.
    CGRect redParentViewRect = CGRectMake(100.0, 100.0, 40.0, 40.0);
    UIView * myRedParentView = [[UIView alloc]initWithFrame:redParentViewRect];
    myRedParentView.backgroundColor = [UIColor redColor];
    
    [self.view addSubview:myRedParentView];
    
    //L'élément père ne doit pas être accessible pour servir de conteneur à ses enfants.
    //Si la valeur est à 'YES', seul cet élément sera accessible sans ses enfants.
    myRedParentView.isAccessibilityElement = NO;
    
    //Indication du conteneur que ses enfants peuvent ne pas être accessibles même s'ils sont définis comme tels.
    //Si cette valeur est à 'NO' et la précédente à 'NO', seuls ces élements seront accessibles.
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
        
        //Création d'un élément père dans lequel 2 autres éléments fils vont être insérés.
        let redParentViewRect = CGRect.init(x: 100.0,
                                            y: 100.0,
                                            width: 40.0,
                                            height: 40.0)
        let myRedParentView = UIView.init(frame: redParentViewRect)
        myRedParentView.backgroundColor = .red
        
        self.view.addSubview(myRedParentView)
        
        //L'élément père ne doit pas être accessible pour servir de conteneur à ses enfants.
        //Si la valeur est à 'true', seul cet élément sera accessible sans ses enfants.
        myRedParentView.isAccessibilityElement = false
        
        //Indication du conteneur que ses enfants peuvent ne pas être accessibles même s'ils sont définis comme tels.
        //Si cette valeur est à 'false' et la précédente à 'false', seuls ces élements seront accessibles.
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

## Grouper des éléments
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
           aria-selected="false">Exemple 1</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#groupElts-Example2"
           id="groupElts-Example2_tab"
           role="tab" 
           aria-selected="false">Exemple 2</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#groupElts-Links" 
           role="tab" 
           aria-selected="false">Liens</a>
    </li>
</ul><div class="tab-content">
<div class="tab-pane show active"
     id="groupElts-Description"
     role="tabpanel">

On peut envisager de grouper des éléments pour vocaliser en une seule fois l'ensemble formé et associer au groupe ainsi créé une action dédiée par exemple.

Dès lors, les éléments encapsulés ne doivent plus être considérés comme accessibles car seul leur conteneur doit être perçu comme tel.

</div>
<div class="tab-pane" id="groupElts-Example1" role="tabpanel">

Nous avons un 'label' et un 'switch control' que nous souhaitons regrouper et traiter d'un seul bloc.

Dans ce cas, on va créer une vue qui va englober les éléments impactés puis implémenter une action qui va indiquer l'action à réaliser en cas d'activation de la zone par l'utilisateur.
![](../../images/iOSdev/GrouperDesElements_1.png)
Création de l'élément accessible qui va regrouper les éléments souhaités :
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
    
    //Création de la vue qui va encapsuler le 'label' et le 'Switch Control'.
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
        
        //Création de la vue qui va encapsuler le 'label' et le 'Switch Control'.
        let wrap = MyWrapView.init(with: myLabel,
                                   and: mySwitch)
        
        self.view.addSubview(wrap)
    }
}
</code></pre>

<br>... et implémentation de la classe utilisée pour définir de façon précise l'<a href="../wwdc/2017/215/#action-par-defaut-3738">action à associer au double tap d'activation</a> :
<pre><code class="objectivec">
@implementation MyWrapView

//Index utilisés pour repérer les éléments accessibles dans la vue de regroupement.
int indexLabel = 0;
int indexSwitch = 1;


- (instancetype)initWith:(UILabel *)label and:(UISwitch *)aSwitch {
    
    CGRect viewFrame = CGRectUnion(label.frame, aSwitch.frame);
    MyWrapView * wrapView = [[MyWrapView alloc]initWithFrame:viewFrame];
    
    wrapView.accessibilityElements = @[label, aSwitch];
    
    NSString * switchValue = (aSwitch.isOn) ? @"activé" : @"désactivé";
    
    wrapView.isAccessibilityElement = YES;
    wrapView.accessibilityLabel = [NSString stringWithFormat:@"le contrôle est %@", switchValue.description];
    wrapView.accessibilityHint = @"tapez deux fois pour changer sa valeur";
    
    return wrapView;
}


//Fonction appelée par le système quand un double tap est réalisé sur l'élément sélectionné pour l'activer.
- (BOOL)accessibilityActivate {
    
    UISwitch * theSwitch = self.accessibilityElements[indexSwitch];
    [theSwitch setOn:!(theSwitch.isOn)];
    
    NSString * switchValue = (theSwitch.isOn) ? @"activé" : @"désactivé";
    
    self.accessibilityLabel = [NSString stringWithFormat:@"le contrôle est %@", switchValue.description];
    return YES;
}
@end
</code></pre>

<pre><code class="swift">
    class MyWrapView: UIView {
    
    //Index utilisés pour repérer les éléments accessibles dans la vue de regroupement.
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
        
        let switchValue = (aSwitch.isOn) ? "activé" : "désactivé"
        
        self.isAccessibilityElement = true
        self.accessibilityLabel = "le contrôle est " + switchValue.description
        self.accessibilityHint = "tapez deux fois pour changer sa valeur."
    }
    
    
    //Fonction appelée par le système quand un double tap est réalisé sur l'élément sélectionné pour l'activer.
    override func accessibilityActivate() -> Bool {
        
        let theSwitch = self.accessibilityElements?[indexSwitch] as? UISwitch
        theSwitch?.setOn(!((theSwitch?.isOn)!), animated: false)
        
        let switchValue = (theSwitch?.isOn)! ? "activé" : "désactivé"
        
        self.accessibilityLabel = "le contrôle est" + switchValue.description
        
        return true
    }
}
</code></pre>

</div>
<div class="tab-pane" id="groupElts-Example2" role="tabpanel">

Nous avons un 'label', un 'switch control' et un bouton que nous souhaitons regrouper en un seul bloc dont l'activation changera automatiquement l'état du 'switch control' sans avoir à définir une action comme précédemment.

L'idée la plus simple consisterait à placer le 'switch control' au milieu de la nouvelle `frame` créée de façon à avoir son <a style="text-decoration: underline" role="button" onclick="$('#focusArea-Details_tab').trigger('click');document.getElementById('focusArea-Details').scrollIntoView({ behavior: 'smooth', block: 'start' })">accessibilityActivationPoint</a> directement dessus.

Cela n'étant malheureusement pas toujours possible, il va donc falloir créer un élément accessible qui regroupera tous les objets impactés puis définir son **accessibilityActivationPoint** sur le 'switch control'.

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
    
    elt.accessibilityLabel = @"regroupement d'éléments";
    elt.accessibilityHint = @"tapez deux fois pour modifier le switch";
    elt.accessibilityFrameInContainerSpace = a11yEltFrame;
    elt.accessibilityActivationPoint = [_mySwitch center];
    
    self.view.accessibilityElements = @[elt];
}
  
    
- (void)configChanged:(UISwitch *)sender {
 
    NSString * switchValue = _mySwitch.on ? @"activé" : @"désactivé";
    elt.accessibilityLabel = [NSString stringWithFormat:@"le contrôle est %@", switchValue.description];
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
            
            elt.accessibilityLabel = "regroupement d'éléments"
            elt.accessibilityHint = "tapez deux fois pour modifier le switch"
            elt.accessibilityFrameInContainerSpace = a11yEltFrame
            elt.accessibilityActivationPoint = mySwitch.center
            
            self.view.accessibilityElements = [elt]
        }
    }
    
    
    @objc func configChanged(sender: UISwitch){
        
        if let configGroup = elt {
            
            let switchValue = (mySwitch?.isOn)! ? "activé" : "désactivé"
            configGroup.accessibilityLabel = "le contrôle est " + switchValue.description
        }
    }
}
</code></pre>

<br>Une autre possibilité de groupement d'éléments pourrait utiliser l’attribut **shouldGroupAccessibilityChildren**, booléen qui permet d’indiquer à <span lang="en">VoiceOver</span> qu’il doit grouper les enfants de la vue qui porte l’attribut.

Cela permet notamment de faire des vocalisations uniques ou de définir un ordre de lecture <span lang="en">VoiceOver</span> particulier pour une partie de la page seulement (voir la section [Ordre&nbsp;de&nbsp;lecture](#ordre-de-lecture)).

</div>
<div class="tab-pane" id="groupElts-Links" role="tabpanel">

- [`accessibilityActivate`](https://developer.apple.com/documentation/objectivec/nsobject/1615165-accessibilityactivate)

- [`shouldGroupAccessibilityChildren`](https://developer.apple.com/documentation/objectivec/nsobject/1615143-shouldgroupaccessibilitychildren)
</div>
</div>
<br><br>

## Ordre de lecture
<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item" role="presentation">
        <a class="nav-link active"
           data-toggle="tab" 
           href="#readingOrder-Details" 
           role="tab" 
           aria-selected="true">Fonctionnement</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#readingOrder-Example" 
           role="tab" 
           aria-selected="false">Exemple</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#readingOrder-Links" 
           role="tab" 
           aria-selected="false">Liens</a>
    </li>
</ul><div class="tab-content">
<div class="tab-pane show active"
     id="readingOrder-Details"
     role="tabpanel">
     
Redéfinir l’ordre de lecture pour <span lang="en">VoiceOver</span> s’effectue en respectant le protocole **UIAccessibilityContainer**.

L’idée est d’avoir un tableau des éléments de la vue qui définit l’ordre de lecture des éléments.

Il est bien souvent nécessaire d’utiliser l’attribut **shouldGroupAccessibilityElement** afin d’avoir un ordre précis mais pour une partie seulement de la vue (le reste étant l’ordre naturel de lecture proposé par <span lang="en">VoiceOver</span>).

</div>
<div class="tab-pane" id="readingOrder-Example" role="tabpanel">

Le meilleur exemple pour illustrer cette fonctionnalité est le clavier pour lequel les touches sucessives ne suivent pas forcément l'ordre natif proposé par <span lang="en">VoiceOver</span>.

Dans cet exemple, on veut l'ordre suivant : 1, 2, 3, 4, 7, 6, 8, 9, 5.

On crée deux vues au sein desquelles on incorpore les chiffres qu'on souhaite vocaliser selon un ordre bien précis :

![affichage des vues grise et bleue pour l'exemple](../../images/iOSdev/OrdreDeLecture_1.png)
<pre><code class="objectivec">
    __weak IBOutlet UIView * blueBlock;
    __weak IBOutlet UIView * greyColumn;
    
- (void)viewDidAppear:(BOOL)animated {
    [super viewDidAppear:animated];
    
    //Lecture des 3 premiers nombres dans la vue grise.
    greyColumn.shouldGroupAccessibilityChildren = YES;
    
    // Lecture des chiffres 6, 8, 9 et 5 au sein du bloc bleu.
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
        
        //Lecture des 3 premiers nombres dans la vue grise.
        greyColumn.shouldGroupAccessibilityChildren = true
        
        // Lecture des chiffres 6, 8, 9 et 5 au sein du bloc bleu.
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

## Fournisseur de contenu personnalisé
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
           aria-selected="false">Fonctionnement</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#CuCoPro-Example" 
           role="tab" 
           aria-selected="false">Exemple</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#CuCoPro-Links" 
           role="tab" 
           aria-selected="false">Liens</a>
    </li>
</ul><div class="tab-content">
<div class="tab-pane show active"
     id="CuCoPro-Description"
     role="tabpanel">
     
Cette **nouveauté iOS&nbsp;14** passée incognito lors de la WWDC 2020 est pourtant véritablement essentielle pour améliorer de façon significative le confort d'utilisation de <span lang="en">VoiceOver</span>.

L'objectif principal du **fournisseur de contenu personnalisé** réside dans une navigation plus rapide au sein d'une interface riche en détails auxquels l'utilisateur peut accéder sans être obligé de subir la vocalisation d'éléments parasites avant d'obtenir ce qui l'intéresse.

L'association d'une **vocalisation souhaitée** de l'information (visuelle ou non) avec une **navigation plus fluide et plus rapide** caractérise donc parfaitement la finalité de cette fonctionnalité.

Un exemple probant est celui de l'application `Photos` où cette fonctionnalité permet l'accès à certaines métadonnées (date, heure...) en ayant toujours la photo sélectionnée&nbsp;: ces informations sont accessibles via l'item `Plus`&nbsp;`de`&nbsp;`contenus` présent dans le [rotor](#rotor-personnalise).
![](../../images/iOSdev/CustomContentProvider_1.png)
On peut aussi envisager l'implémentation de cette fonctionnalité dans des listes de cellules comprenant de nombreux détails dont la vocalisation pourrait être réalisée uniquement par ce biais selon l'**intérêt manifesté par l'utilisateur**.
</div>
<div class="tab-pane" id="CuCoPro-Details" role="tabpanel">

Pour utiliser cette fonctionnalité, il est impératif de&nbsp;:

- se conformer au protocole **AXCustomContentProvider**,

- fournir un tableau **accessibilityCustomContent** rempli d'éléments **AXCustomContent**,

- définir chaque élément **AXCustomContent** avec sa caractéristique (`value`) ainsi que la famille à laquelle elle appartient (`label`).



L'accès à ces informations se fait en **utilisant le rotor** qui contiendra alors un item **`Plus`&nbsp;`de`&nbsp;`contenus`** qui permettra de vocaliser chaque `AXCustomContent` par un **balayage vertical avec un doigt** comme pour les [valeurs continûment ajustables](#valeurs-continument-ajustables) ou les [actions personnalisées](#actions-personnalisees).
</div>
<div class="tab-pane" id="CuCoPro-Example" role="tabpanel">

L'exemple de code ci-dessous permet d'obtenir tout un tas d'informations présentes sur une image sous forme de données non visuelles mais vocalisables.

⚠️ Il faut absolument penser à **importer le framework Accessibility** auquel appartient le protocole `AXCustomContentProvider`. ⚠️

Après avoir défini la classe pour la vue contenant l'image&nbsp;:

<pre><code class="objectivec">
//MyCustomView.h
#import &lt;UIKit/UIKit.h&gt;
#import &lt;Accessibility/Accessibility.h&gt;  //Oubli rédhibitoire

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
import Accessibility  //Oubli rédhibitoire

class MyCustomView: UIImageView, AXCustomContentProvider {
    
    var _accessibilityCustomContent: [AXCustomContent]? = nil
    var accessibilityCustomContent: [AXCustomContent]! {
           get { return _accessibilityCustomContent }
           set(newValue) { _accessibilityCustomContent = newValue }
       }
}
</code></pre>

... on crée chaque élément à vocaliser lors du balayage vertical avec un doigt&nbsp;:

<pre><code class="objectivec">
@interface ViewController ()
@property (weak, nonatomic) IBOutlet MyCustomView * myView;
@end


@implementation ViewController

- (void)viewDidAppear:(BOOL)animated {
    [super viewDidAppear:animated];
    
    _myView.accessibilityLabel = @"logo Orange";
    _myView.accessibilityHint = @"utiliser l'élément du rotor intitulé plus de contenus pour obtenir des informations complémentaires";
    
    AXCustomContent * lastModified = [AXCustomContent customContentWithLabel:@"date de création"
                                                                       value:@"1988"];
    AXCustomContent * items = [AXCustomContent customContentWithLabel:@"siège social"
                                                                value:@"paris"];
    AXCustomContent * type = [AXCustomContent customContentWithLabel:@"type de société"
                                                               value:@"télécommunications"];
    
    _myView.accessibilityCustomContent = @[lastModified, items, type];
}
@end
</code></pre>

<pre><code class="swift">
class ViewController: UIViewController {

    @IBOutlet weak var myView: MyCustomView!
    
    override func viewDidAppear(_ animated: Bool) {
        super.viewDidAppear(animated)
        
        myView.accessibilityLabel = "logo Orange"
        myView.accessibilityHint = "utiliser l'élément du rotor intitulé plus de contenus pour obtenir des informations complémentaires"
        
        let lastModified = AXCustomContent(label: "date de création", 
                                           value: "1988")
        let items = AXCustomContent(label: "siège social", 
                                    value: "paris")
        let type = AXCustomContent(label: "type de société", 
                                   value: "télécommunications")

        myView.accessibilityCustomContent = [lastModified, items, type]
    }
}
</code></pre>

![](../../images/iOSdev/CustomContentProvider_2.png)
![](../../images/iOSdev/CustomContentProvider_3.png)
</div>
<div class="tab-pane" id="CuCoPro-Links" role="tabpanel">

- [Customized Accessibility Content](https://developer.apple.com/documentation/accessibility/customized_accessibility_content/)

- L'[article de Rob Whitaker](https://mobilea11y.com/blog/custom-accessibility-content/) apporte une belle description pédagogique de cette nouvelle fonctionnalité qu'il est un des seuls aujourd'hui à exposer à l'issue de la WWDC 2020.
</div>
</div>
<br><br>

## Focus d'un élément
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
           aria-selected="false">Fonctionnement</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#focusElt-Example" 
           role="tab" 
           aria-selected="false">Exemple</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#focusElt-Links" 
           role="tab" 
           aria-selected="false">Lien</a>
    </li>
</ul><div class="tab-content">
<div class="tab-pane show active"
     id="focusElt-Description"
     role="tabpanel">
     
Le protocole informel **UIAccessibilityFocus** fournit des éléments de programmation efficaces de façon à pouvoir être informé d'une sélection passée, active ou à venir d'un élément accessible.
</div>
<div class="tab-pane" id="focusElt-Details" role="tabpanel">

- **accessibilityElementDidBecomeFocused** : méthode appelée dès que l'élément accessible est sélectionné.

- **accessibilityElementDidLoseFocus** : méthode appelée dès que l'élément accessible perd le focus.

- **accessibilityElementIsFocused** : valeur booléenne qui permet de savoir si un élément accessible est sélectionné.

Attention, ces **méthodes** ne sont pas appelées au sein d'un contrôleur de vue si un de ses élements accessibles est sélectionné mais uniquemnet si elles sont **implémentées sur l'élément accessible lui-même**.

Cette erreur à laquelle on ne pense pas de prime abord provient du caractère informel du protocole **UIAccessibilityFocus** dont les éléments peuvent subir un <span lang="en">override</span> sur tout objet héritant de NSObject même s'il n'est pas accessible... comme un contrôleur de vue par exemple.
</div>
<div class="tab-pane" id="focusElt-Example" role="tabpanel">

L'exemple de code ci-dessous permet de suivre le focus d'un élément accessible identifié par son `accessibleIdentifier`.
<pre><code class="objectivec">
#import "UIView+focus.h"

@implementation UIView (focus)

- (void)accessibilityElementDidBecomeFocused {
    
    if ([self accessibilityElementIsFocused]) {
        NSLog(@"Mon élément est sélectionné.");
    }
}

- (void)accessibilityElementDidLoseFocus {
    
    if ([self accessibilityElementIsFocused]) {
        NSLog(@"Mon élément a perdu le focus.");
    }
}

- (BOOL)accessibilityElementIsFocused {
    
    if ([self.accessibilityIdentifier isEqualToString:@"monEltAccessible"]) {
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
            print("Mon élément est sélectionné.")
        }
    }
    
    override open func accessibilityElementDidLoseFocus() {
        
        if self.accessibilityElementIsFocused() {
            print("Mon élément a perdu le focus.")
        }
    }
    
    override open func accessibilityElementIsFocused() -> Bool {
        
        if (self.accessibilityIdentifier == "monEltAccessible") {
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

## Modifier la zone de focus de <span lang="en">VoiceOver</span>
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
           aria-selected="false">Fonctionnement</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#focusArea-Example" 
           role="tab" 
           aria-selected="false">Exemple</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#focusArea-Links" 
           role="tab" 
           aria-selected="false">Liens</a>
    </li>
</ul><div class="tab-content">
<div class="tab-pane show active"
     id="focusArea-Description"
     role="tabpanel">
     
Dans le cas d’objet modifié dynamiquement ou d’élément ne dérivant pas de `UIView`, il est possible de déterminer la zone géographique d’accessibilité de cet élément, c’est-à-dire la zone que <span lang="en">VoiceOver</span> met en surbrillance lors du focus.
</div>
<div class="tab-pane" id="focusArea-Details" role="tabpanel">

- **accessibilityFrame**&nbsp;: permet de définir cette zone via un rectangle (`CGRect`). Par défaut pour un élément dérivant de `UIView`, cette zone est la partie «&nbsp;visible&nbsp;» de la vue.

- **accessibilityPath**&nbsp;: équivalent à `accessibilityFrame` mais permet de définir la zone via des courbes de Bézier.

- **accessibilityActivationPoint**&nbsp;: définit un point de contact au sein de la `frame` dont l'action résultante sera activée par une sélection classique d'élément via un double tap.
Par défaut, ce point se trouve au centre de la `frame` mais on peut le définir n'importe à l'intérieur de cette dernière, l'idée étant de pouvoir activer un élement facilement lors d'un <a style="text-decoration: underline" role="button" onclick="$('#groupElts-Example2_tab').trigger('click');document.getElementById('groupElts-Example2').scrollIntoView({ behavior: 'smooth', block: 'start' })">regroupement&nbsp;par&nbsp;exemple</a>.

![](../../images/iOSdev/ModifierLaZoneDeFocus_2.png)

En conservant la valeur par défaut de ce point, on peut aisément se retrouver dans une situation où on active involontairement l'élément situé au milieu de la `frame` uniquement en activant le regroupement créé.
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

//Première façon d'augmenter la zone de focus.
- (IBAction)tapHere:(UIButton *)sender {
    
    myLabel.accessibilityFrame = CGRectMake(xVal,
                                            yVal,
                                            widthVal + 100.0,
                                            heightVal+ 100.0);
    
    UIAccessibilityPostNotification(UIAccessibilityLayoutChangedNotification, myLabel);
}

//Seconde façon d'augmenter la zone de focus (Bézier).
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

</div>
<div class="tab-pane" id="focusArea-Links" role="tabpanel">

- [`accessibilityFrame`](https://developer.apple.com/documentation/uikit/uiaccessibilityelement/1619579-accessibilityframe)

- [`accessibilityPath`](https://developer.apple.com/documentation/objectivec/nsobject/1615159-accessibilitypath)

- [`accessibilityActivationPoint`](https://developer.apple.com/documentation/objectivec/nsobject/1615179-accessibilityactivationpoint)
</div>
</div>
<br><br>

## Vue modale
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
           aria-selected="false">Fonctionnement</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-toggle="tab" 
           href="#modalView-Example"
           id="modalView-Example_tab"
           role="tab" 
           aria-selected="false">Exemples</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#modalView-Links" 
           role="tab" 
           aria-selected="false">Liens</a>
    </li>
</ul><div class="tab-content">
<div class="tab-pane show active"
     id="modalView-Description"
     role="tabpanel">
     
Quand on souhaite que le lecteur d'écran ne puisse voir et vocaliser qu'une seule et unique vue mise en avant (alertes, popups...) alors que d'autres éléments sont toujours présents en arrière-plan, il faut absolument utiliser la propriété **[accessibilityViewIsModal](../wwdc/2018/230/#element-au-premier-plan-2502)** qui va focaliser <span lang="en">VoiceOver</span> sur l'instance possédant cette propriété à la valeur <span lang="en">'true'</span>. 
</div>
<div class="tab-pane" id="modalView-Details" role="tabpanel">

En fonction de la hiérarchie des vues implémentée au sein d'une application, le simple fait d'écrire `accessibilityViewIsModal = true` risque de ne pas produire toujours l'effet escompté en vocalisant certains éléments situés en arrière-plan.

En effet, **seuls les éléments accessibles situés au même niveau hiérarchique** que la vue impactée sur laquelle cette propriété sera activée **seront exclus de l'analyse <span lang="en">VoiceOver</span>**.

Une illustration pédagogique et interactive présente dans [cet&nbsp;article&nbsp;de&nbsp;David&nbsp;RÖNNQVIST](http://ronnqvi.st/adding-accessible-behavior) (section 'Implementing accessible modal views') permet de parfaitement comprendre graphiquement comment fonctionne une vue modale si les explications fournies dans l'onglet <a style="text-decoration: underline;" role="button" onclick="$('#modalView-Example_tab').trigger('click');document.getElementById('modalView').scrollIntoView({ behavior: 'smooth', block: 'start' })">Exemples</a> ne sont pas suffisamment claires.
</div>
<div class="tab-pane" id="modalView-Example" role="tabpanel">

Les exemples développés par la suite supposent acquises les connaissances concernant l'affichage/masquage des conteneurs et de leurs contenus&nbsp;: se référer à la rubrique **[Masquer des éléments](#masquer-des-elements)** pour approfondir ces notions si besoin.

Pour application, supposons que nous avons une vue générique contenant des éléments tous accessibles&nbsp;:

- Une première vue (parent A) avec 3 sous-vues (A1, A2, A3).

- Une seconde vue (parent B) avec un premier niveau (B1 et B2) possédant lui-même des sous-vues (B1.1, B1.2, B2.1, B2.2 et B3.3).

![](../../images/iOSdev/ModalView_1.png)

<br><br>**Exemple 1**&nbsp;: passer `Parent A` en vue modale.
<br>Sachant que `Parent A` et `Parent B` sont au même niveau de la hiérarchie des vues, le simple fait d'activer `accessibilityViewIsModal` sur `Parent A` permet d'obtenir le résulat souhaité.

![](../../images/iOSdev/ModalView_2.png)

<br><br>**Exemple 2**&nbsp;: passer `A2` en vue modale.
<br>Les vues `A1` et `A3` ne sont pas prises en compte par <span lang="en">VoiceOver</span> car elles sont au même niveau de la hiérarchie des vues que `A2` **MAIS** `Parent B` (ou éventuellement ses sous-vues) sera vocalisé... ce qui n'est pas souhaité.

![](../../images/iOSdev/ModalView_3.png)
<br>Pour solutionner ce problème, l'idée est de masquer les éléments non désirables dès lors qu'on active la vue modale.
<pre><code class="objectivec">
    parentA.isAccessibilityElement = NO;
    parentA.accessibilityElementsHidden = NO;

    A2.accessibilityViewIsModal = YES;
        
    //Résout le problème de Parent B et de ses sous-vues.
    parentB.isAccessibilityElement = NO;
    parentB.accessibilityElementsHidden = YES;
</code></pre>

<pre><code class="swift">
    parentA.isAccessibilityElement = false
    parentA.accessibilityElementsHidden = false

    A2.accessibilityViewIsModal = true
        
    //Résout le problème de Parent B et de ses sous-vues.
    parentB.isAccessibilityElement = false
    parentB.accessibilityElementsHidden = true
</code></pre>

<br>**Exemple 3**&nbsp;: passer `B1.1` en vue modale.
<br>Dans ce cas, les vues `parent A` et `B2`  (ou éventuellement leurs sous-vues) sont vocalisées tout comme la vue modale.
<br>Seule `B1.2` qui est au même niveau que `B1.1` n'est pas analysée par <span lang="en">VoiceOver</span>.

![](../../images/iOSdev/ModalView_4.png)
<br>Là encore, il faut masquer tous les éléments accessibles non désirables dès lors qu'on active la vue modale.
<pre><code class="objectivec">
    parentB.isAccessibilityElement = NO;
    parentB.accessibilityElementsHidden = NO;

    B1.isAccessibilityElement = NO;
    B1.accessibilityElementsHidden = NO;

    B11.accessibilityViewIsModal = YES;

    //Résout le problème de Parent A et de B2.
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

    //Résout le problème de Parent A et de B2.
    parentA.isAccessibilityElement = false
    parentA.accessibilityElementsHidden = true

    B2.isAccessibilityElement = false
    B2.accessibilityElementsHidden = true
</code></pre>

</div>
<div class="tab-pane" id="modalView-Links" role="tabpanel">

- [Masquer&nbsp;des&nbsp;éléments](#masquer-des-elements)

- [`accessibilityViewIsModal`](https://developer.apple.com/documentation/objectivec/nsobject/1615089-accessibilityviewismodal)
- [David&nbsp;Rönnqvist&nbsp;:&nbsp;"Implementing&nbsp;accessible&nbsp;modal&nbsp;views"](http://ronnqvi.st/adding-accessible-behavior)

- [WWDC&nbsp;2018&nbsp;:&nbsp;Fournir&nbsp;une&nbsp;expérience&nbsp;exceptionnelle&nbsp;en&nbsp;accessibilité](../wwdc/2018/230/#element-au-premier-plan-2502)
</div>
</div>
<br><br>

## Taille des textes
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
           aria-selected="false">Fonctionnement</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#textSize-Links" 
           role="tab" 
           aria-selected="false">Liens</a>
    </li>
</ul><div class="tab-content">
<div class="tab-pane show active"
     id="textSize-Description"
     role="tabpanel">
Depuis iOS7, il est possible de modifier dynamiquement la taille des textes d'une application à l’aide des réglages du terminal.

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

<br>Quelques points sont néanmoins essentiels pour la bonne utilisation du <span lang="en">Dynamic Type</span> mis à disposition&nbsp;:

 - **utiliser impérativement les styles de texte** proposés selon la version d'iOS avec laquelle l'application est développée,
 
 ![](../../images/iOSdev/TailleDesTextes_2.png)
 - utiliser la police système pour les textes de l’application afin de se faciliter grandement la tâche même si l'utilisation d'autres polices est devenue nettement plus aisée depuis l'arrivée de `UIFontMetrics` avec iOS11,
 <pre><code class="objectivec">
    __weak IBOutlet UILabel * fontHeadline;
    __weak IBOutlet UILabel * fontFootNote;
    
    //Utilisation de la font native.
    fontFootNote.font = [UIFont preferredFontForTextStyle:UIFontTextStyleHeadline];
    
    //Définition de la font pour le titre principal d'une page.
    UIFont * fontHead = [UIFont fontWithName:@"Chalkduster" size:30.0];
    UIFontMetrics * fontHeadMetrics = [[UIFontMetrics alloc]initForTextStyle:UIFontTextStyleHeadline];
    fontHeadline.font = [fontHeadMetrics scaledFontForFont:fontHead];
</code></pre>

<pre><code class="swift">
    @IBOutlet weak var fontHeadline: UILabel!
    @IBOutlet weak var fontFootNote: UILabel!
    
    //Utilisation de la police native.
    fontFootNote.font = .preferredFont(forTextStyle: .headline)
        
    //Définition personnalisée de la police pour le titre principal d'une page.
    let fontHead = UIFont(name: "Chalkduster", size: 30.0)
    let fontHeadMetrics = UIFontMetrics(forTextStyle: .headline)
    fontHeadline.font = fontHeadMetrics.scaledFont(for: fontHead!)
</code></pre>
 - penser à écouter la notification **UIContentSizeCategoryDidChange** qui annonce le changement de la taille du texte à partir des paramètres du téléphone.
 Cette tâche est simplifiée depuis iOS10 où l'attribut **adjustsFontForContentSizeCategory** se charge de la mise à jour automatique de la nouvelle taille de la police système au sein de l'application (cet attribut ne peut s'appliquer aux polices personnalisées qu'avec l'utilisation de `UIFontMetrics` depuis iOS11).
Il est aussi possible d'utiliser la méthode **[traitCollectionDidChange](../wwdc/2017/245/#exemple-2432)** du protocole informel `UITraitEnvironment` qui sera automatiquement appelée dès qu'une modification concernant l'environnement de l'interface iOS surviendra (class/content size, portrait/paysage, constraste des couleurs...),
<pre><code class="objectivec">
    //Écoute de la notification annonçant le changement de taille de la police.
    [[NSNotificationCenter defaultCenter] addObserver:self
                                             selector:@selector(methodToBeCalled:)
                                                 name:UIContentSizeCategoryDidChangeNotification
                                               object:nil];
    
    //Modification automatique de la taille de la police sans utiliser la notification.
    fontHeadline.adjustsFontForContentSizeCategory = YES;
    
    - (void)methodToBeCalled:(NSNotification *)notification {
    
        //Il faut de nouveau affecter la police des éléments impactés lors du traitement de cette notification.
        fontFootNote.font = [UIFont preferredFontForTextStyle:UIFontTextStyleFootnote];
    }
</code></pre>

<pre><code class="swift">
    //Écoute de la notification annonçant le changement de taille de la police.
    NotificationCenter.default.addObserver(self,
                                           selector:#selector(methodToBeCalled(notification:)),
                                           name: UIContentSizeCategory.didChangeNotification,
                                           object: nil)
    
    //Modification automatique de la taille de la police sans utiliser la notification.
    fontHeadline.adjustsFontForContentSizeCategory = true
    
    @objc func methodToBeCalled(notification: Notification) {

        //Il faut de nouveau affecter la police des éléments impactés lors du traitement de cette notification.
        fontFootNote.font = UIFont.preferredFont(forTextStyle: .footnote)
    }
</code></pre>
 - ne pas oublier d'adapter les contraintes graphiques aux éléments susceptibles de voir leur taille modifiée en privilégiant l'utilisation de valeurs dynamiques : penser à paramétrer les éléments inclus dans les navigation/tab/status bar et toolbar qui seront affichés via le **[Large Content Viewer](../wwdc/2019/261)**,
 
 - penser à adapter le [contraste des couleurs](../conception#couleurs) à la taille de texte modifiée si nécessaire.

</div>
<div class="tab-pane" id="textSize-Links" role="tabpanel">

- [<span lang="en">Dynamic&nbsp;Type</span>&nbsp;et&nbsp;styles&nbsp;de&nbsp;texte](https://developer.apple.com/design/human-interface-guidelines/ios/visual-design/typography/)

- [`UIContentSizeCategoryDidChangeNotification`](https://developer.apple.com/documentation/uikit/uicontentsizecategorydidchangenotification?language=objc)

- [`adjustsFontForContentSizeCategory`](https://developer.apple.com/documentation/uikit/uicontentsizecategoryadjusting/1771731-adjustsfontforcontentsizecategor?language=objc)

- [Application&nbsp;du&nbsp;Dynamic&nbsp;Type](../wwdc/2017/245)
    
</div>
</div>
<br><br>

## Trait d'union de troncature
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
           aria-selected="false">Exemple</a>
    </li>
</ul><div class="tab-content">
<div class="tab-pane show active"
     id="truncHyphen-Description"
     role="tabpanel">
     
L'utilisation du `Dynamic Type` exposé dans le paragraphe précédent s'accompagne indéniablement de la troncature de mots en fonction du grossissement de texte choisi par l'utilisateur.

Malheureusement, cela n'est pas pris en compte nativement par le système et seule une intervention au niveau programmatique permet d'obtenir ce rendu visuel particulièrement apprécié.
</div>
<div class="tab-pane" id="truncHyphen-Example" role="tabpanel">

![](../../images/iOSdev/Troncature.png)
<br>L'idée est de spécifier l'utilisation d'un `NSMutableAttributedString` auquel on ajoute une propriété de type  `NSMutableParagraphStyle` comme indiqué par l'exemple ci-dessous :
<pre><code class="objectivec">
@interface TruncationHyphen () {
    __weak IBOutlet UILabel * myLabel;
}
@end


@implementation TruncationHyphen

- (void)viewDidLoad {
    [super viewDidLoad];
    
    NSString * myString = @"anticonstitutionnellement";
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
        
        let myString = "anticonstitutionnellement"
        
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

## Taille des éléments graphiques
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
           aria-selected="false">Exemple</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-toggle="tab" 
           href="#graphEltSize-Links" 
           role="tab" 
           aria-selected="false">Liens</a>
    </li>
</ul><div class="tab-content">
<div class="tab-pane show active"
     id="graphEltSize-Description"
     role="tabpanel">
    
Tout comme la taille des textes est adaptable selon les réglages d'accessibilité (voir <a href="#taille-des-textes">la&nbsp;rubrique&nbsp;précédente</a>), la taille des images ainsi que celle des éléments d'une barre de tabulation ou d'outils l'est aussi mais **uniquement depuis iOS11 avec Xcode 9**.
</div>
<div class="tab-pane" id="graphEltSize-Example" role="tabpanel" >

En suivant les différentes étapes ci-dessous, vous obtiendrez l'effet défini dans la partie Description et présenté graphiquement en exemple à la fin de cette rubrique&nbsp;:

1. Sous Xcode, importer l'image à grossir au format `pdf` à la résolution x1 dans le catalogue `xcassets`,

2. Dans l'<span lang="en">Image Set</span> qui vient d'être créé, cocher la case `Preserve Vector Data` et spécifier `Single Scale`&nbsp;:

![](../../images/iOSdev/TailleDesEltsGraphiques_4.png)

3. Si un <span lang="en">storyboard</span> est utilisé pour intégrer l'image, cocher `Adjusts Image Size` dans la partie <span lang="en">Image View</span>, sinon mettre à `true` la propriété `adjustsImageSizeForAccessibilityContentSizeCategory` de l'image si cette opération se fait de façon programmatique&nbsp;:

![](../../images/iOSdev/TailleDesEltsGraphiques_5.png)

4. Si une **barre de tabulation** ou une **barre d'outils** est aussi à intégrer dans l'application, renouveler les 3 étapes précédentes pour chacune des images à utiliser en grossissement de l'onglet au milieu de l'écran puis associer l'image souhaitée aux différents éléments impactés&nbsp;:

![](../../images/iOSdev/TailleDesEltsGraphiques_6.png)

**ATTENTION : s'assurer que les contraintes mises en place initialement permettent toujours un affichage cohérent et désiré après grossissement.**
<br><br>De façon à pouvoir tester à la fois le grossissement des images et celui d'un onglet sélectionné, on crée une application contenant une barre de tabulations contenant 2 onglets dont seul le second nous intéresse et affiche l'image du logo Orange.
<br>Après modification du grossissement de texte dans les réglages (voir <a href="#taille-des-textes">la&nbsp;rubrique&nbsp;précédente</a>), on revient dans l'application pour constater&nbsp;:

- une taille de l'image Orange nettement plus conséquente,

- au milieu de l'écran, l'affichage grossi de l'onglet sur lequel on doit appuyer de façon continue pour provoquer cette apparition ⟹ fonctionnalité **[Large Content Viewer](../wwdc/2019/261/)** disponible depuis iOS 11.

![](../../images/iOSdev/TailleDesEltsGraphiques_9.png)
</div>
<div class="tab-pane" id="graphEltSize-Links" role="tabpanel">

- [`adjustsImageSizeForAccessibilityContentSizeCategory`](https://developer.apple.com/documentation/uikit/uiaccessibilitycontentsizecategoryimageadjusting/2890929-adjustsimagesizeforaccessibility)

- [WWDC&nbsp;2019&nbsp;:&nbsp;Large&nbsp;Content&nbsp;Viewer](../wwdc/2019/261)
</div>
</div>
<br><br>

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
           aria-selected="false">Fonctionnement</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#largeContentViewer-Example" 
           role="tab" 
           aria-selected="false">Exemple</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-toggle="tab" 
           href="#largeContentViewer-Links" 
           role="tab" 
           aria-selected="false">Liens</a>
    </li>
</ul><div class="tab-content">
<div class="tab-pane show active"
     id="largeContentViewer-Description"
     role="tabpanel">

Le `Dynamic`&nbsp;`Type` permet le grossissement de tous les éléments graphiques avec une particularité pour les éléments {`navigation`/`tab`/`status bars` + `toolbars`} pour lesquels un appui long est nécessaire pour afficher un `HUD` en plein écran appelé **Large Content Viewer** (voir <a href="#taille-des-elements-graphiques">Taille&nbsp;des&nbsp;éléments graphiques</a>).
</div>
<div class="tab-pane" id="largeContentViewer-Details" role="tabpanel">
    
Disponible depuis iOS 11, cette fonctionnalité était confinée aux seuls éléments UIKit mentionnés précédemment jusqu'à **iOS 13** où son utilisation est désormais possible sur tout élément graphique qui se conforme au protocole **UILargeContentViewerItem**.

![](../../images/iOSdev/LargeContentViewer_1.png)
<br><br>Avant d'implémenter le `Large`&nbsp;`Content`&nbsp;`Viewer`, il y a deux points importants qu'il est nécessaire de préciser&nbsp;:

- cette fonctionnalité n'est **disponible que pour les cinq dernières tailles de grossissement activées en accessibilité** dans les réglages du terminal,

- avoir à l'esprit que les modifications de taille liées au `Dynamic`&nbsp;`Type` doivent toujours être implémentées de façon **P.R.I.O.R.I.T.A.I.R.E.**&nbsp;: le `Large`&nbsp;`Content`&nbsp;`Viewer` n'est à utiliser qu'à partir du moment où **l'élément graphique impacté ne peut pas répondre aux changements souhaités** ⟹ [recommandation&nbsp;Apple](https://developer.apple.com/videos/play/wwdc2019/261/?time=215).
</div>
<div class="tab-pane" id="largeContentViewer-Example" role="tabpanel">

Si le grossissement extrême d'un élément graphique risque de dégrader l'expérience utilisateur, on peut très simplement implémenter le `Large`&nbsp;`Content`&nbsp;`Viewer` sur cette vue pour obtenir le résultat grossi an milieu d'écran&nbsp;:

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

De la même façon, pour un **élément cliquable** comme un bouton dont le grossissement pourrait devenir problématique, il est tout à fait possible d'utiliser cette fonctionnalité pour afficher son contenu et s'assurer que **son action sera déclenchée dès que le doigt sera relevé**&nbsp;:

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
    //Actions à réaliser dès que le bouton est activé.
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
        //Actions à réaliser dès que le bouton est activé.
    }
}
</code></pre>

Lorsque la **gestuelle 'appui long' est déjà implémentée sur l'élément impacté**, il est nécessaire d'utiliser la méthode `gestureRecognizer(_:shouldRecognizeSimultaneouslyWith:)` qui permettra de [mettre&nbsp;en&nbsp;place&nbsp;concomitamment&nbsp;les&nbsp;deux&nbsp;gestuelles](https://developer.apple.com/videos/play/wwdc2019/261/?time=636). 
</div>
<div class="tab-pane" id="largeContentViewer-Links" role="tabpanel">

- [`UILargeContentViewerItem`](https://developer.apple.com/documentation/uikit/uilargecontentvieweritem)

- [`UILargeContentViewerInteraction`](https://developer.apple.com/documentation/uikit/uilargecontentviewerinteraction)

- [`UIInteraction`](https://developer.apple.com/documentation/uikit/uiinteraction)

- [`gestureRecognizer(_:shouldRecognizeSimultaneouslyWithGestureRecognizer:)`](https://developer.apple.com/documentation/uikit/uigesturerecognizerdelegate/1624208-gesturerecognizer)

- [WWDC&nbsp;2019&nbsp;:&nbsp;Large&nbsp;Content&nbsp;Viewer](../wwdc/2019/261/)
</div>
</div>
<br><br>

## Valeurs continûment ajustables
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
           aria-selected="false">Exemple</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-toggle="tab" 
           href="#adjustable-Links" 
           role="tab" 
           aria-selected="false">Lien</a>
    </li>
</ul><div class="tab-content">
<div class="tab-pane show active"
     id="adjustable-Description"
     role="tabpanel">
    
Des éléments graphiques comme le `picker`, le `stepper` ou encore le `slider` permettent de changer de façon continue la valeur qu'ils proposent de modifier.

![](../../images/iOSdev/ValeursAjustables_1.png)
<br>Quand on ne voit pas la modification dynamique se faire ou qu'on n'en est pas informé vocalement, il devient très compliqué de pouvoir se rendre compte de ce qui se passe.
</div>
<div class="tab-pane" id="adjustable-Example" role="tabpanel">

La méthodologie utilisée pour solutionner cette problématique pour une personne non voyante utilisant <span lang="en">VoiceOver</span> reste la même pour ces trois éléments, c'est pourquoi seul le cas du `stepper` sera traité.

L'implémentation de cet objet graphique est relativement simple mais son utilisation avec VoiceOver requiert quelques ajustements pour obtenir un meilleur parcours utilisateur.

Si on crée un <span lang="en">stepper</span> auquel on ajoute un `label` pour afficher sa valeur, on obtient un ensemble d'éléments disjoints.
![](../../images/iOSdev/ValeursAjustables_2.png)

À partir de là, on s'aperçoit que le focus doit être déplacé pour&nbsp;:

- atteindre chacun des deux éléments permettant d'augmenter ou de diminuer la valeur,

- connaître la valeur obtenue via le `label`.

De plus, il n'y a aucune indication de changement de la valeur en temps réel.
Certes, rien n'est bloquant mais, si l'on souhaite réellement mettre en place cet objet avec un rendu le plus fluide possible, ces quelques remarques conduisent tout naturellement à concevoir différemment cet exemple pourtant si simple.

L'idée est de pouvoir changer la valeur du <span lang="en">stepper</span>, être informé de son changement et d'en connaître la valeur par le biais d'un unique objet.

Il faut donc **regrouper le <span lang="en">stepper</span> et le `label`** *(à l'aide d'une <span lang="en">StackView</span> par exemple)* puis associer **`UIAccessibilityTraitAdjustable`** à ce nouveau groupe accessible.

Ce nouveau `trait` va permettre de modifier de façon continue la valeur de l'objet auquel il est associé en implémentant **OBLIGATOIREMENT** les méthodes `accessibilityIncrement()` et `accessibilityDecrement()`.

On élimine ainsi toutes les contraintes rencontrées initialement et on obtient, en plus, un `hint` lié à ce nouveau `trait` qui indique la manipulation nécessaire au bon fonctionnement.

![](../../images/iOSdev/ValeursAjustables_3.png)

- Pour aboutir à ce résultat, on définit tout d'abord une classe conteneur {<span lang="en">stepper</span> + `label`} qui va permettre la délégation pour la modification ultérieure de la valeur.

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
@end
NS_ASSUME_NONNULL_END
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

- Ensuite, il faut redéfinir les 2 méthodes du protocole implémenté pour indiquer ce qu'elles doivent réaliser avant de mettre à jour la valeur modifiée et de la présenter vocalement dans le <span lang="en">ViewController</span>.

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
    _stepperStackViewAccess.accessibilityLabel = @"augmenter ou diminuer la valeur";
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
    _stepperValueAccess.text = [NSString stringWithFormat:@"Valeur = %0.1f",_stepperAccess.value];
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
        stepperStackViewAccess.accessibilityLabel = "augmenter ou diminuer la valeur"
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
        stepperValueAccess.text = "Valeur = \(stepperAccess.value)"
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

## Actions personnalisées
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
           aria-selected="false">Exemple</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-toggle="tab" 
           href="#customActions-Links" 
           role="tab" 
           aria-selected="false">Liens</a>
    </li>
</ul><div class="tab-content">
<div class="tab-pane show active"
     id="customActions-Description"
     role="tabpanel">
     
Certaines manipulations basiques peuvent devenir un vrai casse-tête pour se fondre dans une navigation sereine avec VoiceOver et se transformer en éléments parfaitement accessibles.

Un exemple probant est celui du mail iOS natif qui permet d'accéder à un ensemble d'actions.

<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item" role="presentation">
        <a class="nav-link active"
           data-toggle="tab" 
           href="#CustomActionsVoiceOver"
           role="tab" 
           aria-selected="true">Lecteur d'écran</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#CustomActionsSwitchControl"
           role="tab" 
           aria-selected="false">Contrôle de sélection</a>
    </li>
</ul>
<div class="tab-content">
<div class="tab-pane show active"
     id="CustomActionsVoiceOver"
     role="tabpanel">
     
![accès aux actions d'un mail sans voiceover avec un balayage gauche](../../images/iOSdev/Actions_VoiceOver.png)

La gestuelle utilisée sans utilisation du lecteur d'écran ne peut pas convenir à VoiceOver pour obtenir le résultat désiré&nbsp;: un balayage vers la gauche sélectionnerait l'élément accessible suivant au lieu de proposer les actions à réaliser sur le mail sélectionné.

Dans un cas comme celui-là, il conviendrait de réaliser les opérations décrites dans l'onglet `Exemple` pour donner accès à ces opérations si elles n'étaient pas implémentées nativement.
</div>
<div class="tab-pane" 
     id="CustomActionsSwitchControl" 
     role="tabpanel">

![accès aux actions d'un mail avec le contrôle de sélection](../../images/iOSdev/Actions_SwitchControl.png)

Ici, toutes les actions sont directement disponibles dès le premier écran pour faciliter grandement l'expérience utilisateur en arrivant rapidement aux resultats souhaités.

Pour un composant développé au sein d'une application, il est très fortement recommandé de réaliser ce même type de parcours en s'appuyant sur le modèle fourni dans l'onglet `Exemple`.
</div></div>

<br><br>**iOS 13** a introduit un **nouveau comportement** des actions personnalisées&nbsp;: seul le premier élément avec des actions sera vocalisé, tous les autres disposant du même jeu d'actions resteront muets afin d'éviter les annonces répétitives des "actions disponibles".

Dès que la **liste d'actions** est **différente** sur un élément, **l'annonce reprend** sur ce dernier de façon à faire comprendre à l'utilisateur qu'un nouveau jeu d'actions est à disposition.
</div>

<div class="tab-pane" id="customActions-Example" role="tabpanel">

Que ce soit pour le lecteur d'écran ou le contrôle de sélection, la réalisation programmatique est exactement la même pour obtenir les actions souhaitées&nbsp;: l'exemple suivant sera illustré pour VoiceOver.

Une solution consiste à **associer à l'élément sélectionné un tableau d'actions** dont le système se chargera d'indiquer automatiquement la présence en informant vocalement l'utilisateur de leur disponibilité.

![](../../images/iOSdev/Actions_2.png)

<pre><code class="objectivec">
@interface CustomActions ()
@property (weak, nonatomic) IBOutlet UILabel * persoElt;
@end


@implementation CustomActions
- (void)viewDidLoad {
    [super viewDidLoad];
    
    UIAccessibilityCustomAction * a11yOptionsAction = [[UIAccessibilityCustomAction alloc]initWithName:@"options"
                                                                                                target:self
                                                                                              selector:@selector(optionsAction)];
    UIAccessibilityCustomAction * a11yDrapeauAction = [[UIAccessibilityCustomAction alloc]initWithName:@"drapeau"
                                                                                                target:self
                                                                                              selector:@selector(drapeauAction)];
    UIAccessibilityCustomAction * a11yCorbeilleAction = [[UIAccessibilityCustomAction alloc]initWithName:@"corbeille"
                                                                                                  target:self
                                                                                                selector:@selector(corbeilleAction)];
    
    _persoElt.accessibilityCustomActions = @[a11yOptionsAction,
                                             a11yDrapeauAction,
                                             a11yCorbeilleAction];
}

- (BOOL)optionsAction {
    //Code à implémenter pour cette action.
    return YES;
}

- (BOOL)drapeauAction {
    //Code à implémenter pour cette action.
    return YES;
}

- (BOOL)corbeilleAction {
    //Code à implémenter pour cette action.
    return YES;
}
@end
</code></pre>

<pre><code class="swift">
class CustomActions: UIViewController {
    
    @IBOutlet weak var persoElt: UILabel!
    
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        let a11yOptionsAction = UIAccessibilityCustomAction(name: "options",
                                                            target: self,
                                                            selector: #selector(optionsAction))
        
        let a11yDrapeauAction = UIAccessibilityCustomAction(name: "drapeau",
                                                            target: self,
                                                            selector: #selector(drapeauAction))
        
        // Nouvelle syntaxe iOS 13 avec une 'closure'.
        let a11yCorbeilleAction = UIAccessibilityCustomAction(name: "corbeille",
                                                              actionHandler: { (customAction: UIAccessibilityCustomAction) -> Bool in
                                                                //Code à implémenter pour cette action.
                                                                return true
                                                              })
        
        persoElt.accessibilityCustomActions = [a11yOptionsAction,
                                               a11yDrapeauAction,
                                               a11yCorbeilleAction]
    }
    
    
    @objc func optionsAction() -> Bool {
        //Code à implémenter pour cette action.
        return true
    }
    
    @objc func drapeauAction() -> Bool {
        //Code à implémenter pour cette action.
        return true
    }
}
</code></pre>

<br>Le code implémenté ci-dessus permet d'obtenir le résultat suivant par balayages successifs sur l'élément accessible sélectionné&nbsp;:

![accès aux actions avec voiceover en utilisant un balayage vers le haut](../../images/iOSdev/Actions_3.png)
<br>Pour plus d'informations sur ce sujet, ne pas hésiter à visualiser la vidéo **Utiliser les actions personnalisées** dont le [résumé&nbsp;détaillé](../wwdc/2019/#utiliser-les-actions-personnalisees) se trouve dans la section WWDC de ce site.

</div>
<div class="tab-pane" id="customActions-Links" role="tabpanel">

- [`accessibilityCustomActions`](https://developer.apple.com/documentation/objectivec/nsobject/1615150-accessibilitycustomactions)

- [`UIAccessibilityCustomAction`](https://developer.apple.com/documentation/uikit/uiaccessibilitycustomaction)

- [WWDC&nbsp;2017&nbsp;:&nbsp;les&nbsp;nouveautés&nbsp;en&nbsp;accessibilité](../wwdc/2017/215/#les-actions-personnalisees-3543)

- [Utiliser&nbsp;les&nbsp;actions&nbsp;personnalisées](../wwdc/2019/#utiliser-les-actions-personnalisees)
</div>
</div><br><br>

## Rotor personnalisé
<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item" role="presentation">
        <a class="nav-link active"
           data-toggle="tab" 
           href="#rotor-Details" 
           role="tab" 
           aria-selected="true">Fonctionnement</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#rotor-Example" 
           role="tab" 
           aria-selected="false">Exemple</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-toggle="tab" 
           href="#rotor-Link" 
           role="tab" 
           aria-selected="false">Liens</a>
    </li>
</ul><div class="tab-content">
<div class="tab-pane show active"
     id="rotor-Details"
     role="tabpanel">
     
Depuis iOS10, il est possible d'ajouter une action spécifique au rotor de <span lang="en">VoiceOver</span> en s'appuyant sur la classe **UIAccessibilityCustomRotor** dont la construction prend en compte 2 éléments principaux en entrée&nbsp;:

- **UIAccessibilityCustomRotorSearchPredicate**&nbsp;: définit la logique à mettre en oeuvre selon le type de balayage effectué sur l'écran,

- **UIAccessibilityCustomRotorItemResult**&nbsp;: correspond à l'élément issu de la logique précedente.
<br>
![](../../images/iOSdev/CustomRotor_1.png)
</div>
<div class="tab-pane" id="rotor-Example" role="tabpanel">

Le code fourni ci-dessous permet de compter et d'afficher le nombre de balayages haut et bas (finalité inutile avec le rotor mais qui permet de mettre en avant sa création programmatique).
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

<br>Le code implémenté ci-dessus permet d'obtenir le résultat suivant :

![changed display with a rotor option](../../images/iOSdev/CustomRotor_2.png)

L'utilisation d'un rotor personnalisé n'est pas du tout naturelle au sein d'une application, c'est pourquoi il est primordial de **bien annoncer son fonctionnement et sa finalité** pour faciliter au maximum l'expérience utilisateur.

La majeure différence du rotor avec les actions personnalisées ou encore les valeurs continûment ajustables réside dans sa possible utilisation quel que soit l'élément sélectionné sur l'écran.

Cependant, si l'élément sélectionné est `ajustable` ou contient des actions personnalisées, **ses actions prévaudront sur celles du rotor**.

L'implémentation d'une telle fonctionnalité au sein d'une application est donc à envisager selon des **besoins bien spécifiques** dont le seul objectif doit être de **faciliter l'expérience utilisateur**.
</div>
<div class="tab-pane" id="rotor-Link" role="tabpanel">

- [`UIAccessibilityCustomRotor`](https://developer.apple.com/documentation/uikit/uiaccessibilitycustomrotor)

- [`UIAccessibilityCustomRotorItemResult`](https://developer.apple.com/documentation/uikit/uiaccessibilitycustomrotoritemresult)

- [`UIAccessibilityCustomRotorSearchPredicate`](https://developer.apple.com/documentation/uikit/uiaccessibilitycustomrotorsearchpredicate)
</div>
</div>
<br><br>

## Options d’accessibilité
<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item" role="presentation">
        <a class="nav-link active"
           data-toggle="tab" 
           href="#a11yOptions-States" 
           role="tab" 
           aria-selected="true">États</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#a11yOptions-Events" 
           role="tab" 
           aria-selected="false">Événements</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#a11yOptions-Recap" 
           role="tab" 
           aria-selected="false">Recapitulatif</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-toggle="tab" 
           href="#a11yOptions-Link" 
           role="tab" 
           aria-selected="false">Lien</a>
    </li>
</ul><div class="tab-content">
<div class="tab-pane show active"
     id="a11yOptions-States"
     role="tabpanel">
     

Plusieurs fonctions du <span lang="en">framework</span> `UIKit` permettent de connaître le statut des options d'accessibilité qui peut être modifié dans les réglages du terminal.

La plus utile est certainement celle qui permet de savoir si <span lang="en">VoiceOver</span> est activé au moment de l’appel (**UIAccessibilityIsVoiceOverRunning**).

Une présentation très visuelle de certaines fonctions, peut-être moins utiles à première vue, est faite lors d'une vidéo WWDC dont le contenu est [parfaitement détaillé](../wwdc/2018/230/) sur ce site.

<pre><code class="objectivec">
    BOOL isVoiveOverRunning = (UIAccessibilityIsVoiceOverRunning() ? 1 : 0);
    BOOL isSwitchControlRunning = (UIAccessibilityIsSwitchControlRunning() ? 1 : 0);
    
    NSLog(@"VoiceOver vaut %d et SwitchControl vaut %d.", isVoiveOverRunning, isSwitchControlRunning);
</code></pre>

<pre><code class="swift">
    let isVoiceOverRunning = (UIAccessibility.isVoiceOverRunning ? 1 : 0)
    let isSwitchControlRunning = (UIAccessibility.isSwitchControlRunning ? 1 : 0)
        
    print("VoiceOver vaut \(isVoiceOverRunning) et SwichControl vaut \(isSwitchControlRunning).")
</code></pre>

</div>
<div class="tab-pane" id="a11yOptions-Events" role="tabpanel">

Le système iOS envoie un certain nombre d’événements d’accessibilité à destination des applications lors de la modification des options d’accessibilité.

Par exemple, si <span lang="en">VoiceOver</span> est désactivé durant l’utilisation de l’application, celle-ci recevra l’événement **UIAccessibilityVoiceOverStatusDidChangeNotification**, ce qui peut être très utile couplé à la fonction **UIAccessibilityIsVoiceOverRunning** grâce à laquelle on peut exécuter un traitement particulier quand <span lang="en">VoiceOver</span> est activé.

Mais que se passe-t-il si <span lang="en">VoiceOver</span> est désactivé alors que ce traitement a déjà eu lieu&nbsp;?
C’est là que les événements système peuvent être utilisés et, en restant à leur écoute, il est possible d’appliquer des traitements spécifiques de manière dynamique.

Dans l'exemple suivant, on appelle une méthode spécifique au moment où le statut de VoiceOver ou du Switch Control change.
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
    
    NSLog(@"SWITCH CONTROL est %@ et VOICE OVER est %@",
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
        
        print("SWITCH CONTROL est \(switchControlStatus) et VOICE OVER est \(voiceOverStatus).")
    }
</code></pre>

</div>
<div class="tab-pane" id="a11yOptions-Recap" role="tabpanel">

Tous les <a href="https://developer.apple.com/documentation/uikit/accessibility/notification_names?language=objc" style="text-decoration: underline;">événements</a> et les <a href="https://developer.apple.com/documentation/uikit/accessibility?language=objc" style="text-decoration: underline;">options d'accessibilité</a> sont disponibles sur la documentation officielle d'Apple.

![](../../images/iOSdev/OptionsA11Y.png)
</div>
<div class="tab-pane" id="a11yOptions-Link" role="tabpanel">

- [Options&nbsp;d'accessibilité](../conception#options-daccessibilite) (partie conception iOS de ce site)
</div>
</div>
<br><br>

## Barre de navigation
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
           aria-selected="false">Titre</a>
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
           aria-selected="false">Ordre de lecture</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#navBar-Link" 
           role="tab" 
           aria-selected="false">Lien</a>
    </li>
</ul><div class="tab-content">
<div class="tab-pane show active"
     id="navBar-Description"
     role="tabpanel">
     
L'utilisation d'une barre de navigation est particulièrement répandue pour développer des applications iOS et peut se résumer à trois parties à étudier de façon précise pour obtenir un résultat efficace&nbsp;:
<br>
![](../../images/iOSdev/NavigationBar_1.png)

- **LeftBarItem**&nbsp;: comprend généralement un seul élément qui permet le retour vers la page de provenance.

- **Titre**&nbsp;: souvent un simple texte qui peut aussi se présenter sous forme de <span lang="en">StackView</span> dans les cas les plus complexes.

- **RightBarItem**&nbsp;: zone qui comprend souvent plusieurs icônes *(compte, authentification, validation...)*.

Utiliser les composants standards en personnalisant un minimum la barre de navigation permet d'assurer sans trop d'efforts un résultat probant avec <span lang="en">VoiceOver</span>.

Malheureusement, ce n'est pas toujours possible selon les contraintes liées au projet, c'est pourquoi des exemples concrets sont fournis pour faciliter une implémentation parfois délicate pouvant aller jusqu'à une modification de l'ordre de lecture au sein-même des éléments de la barre de navigation.
</div>
<div class="tab-pane" id="navBar-LeftBarItem" role="tabpanel">

Si on ne souhaite modifier que la vocalisation <span lang="en">VoiceOver</span> de cet élément sans en changer l'aspect, il suffit de lui fournir un nouveau `label` une fois la barre de navigation chargée.
<pre><code class="objectivec">
    self.navigationController.navigationBar.backItem.accessibilityLabel = @"nouveau label pour le bouton de retour";
</code></pre>

<pre><code class="swift">
    navigationController?.navigationBar.backItem?.accessibilityLabel = "nouveau label pour le bouton de retour"
</code></pre>

<br>La personnalisation de cet élément consiste souvent à **afficher un chevron particulier sans texte**.

![](../../images/iOSdev/NavigationBar_2.png)
<br>Les deux façons possibles de réalisation détaillées dans les exemples ci-dessous s'appuient sur le remplacement de l'élément standard par un **UIBarButtonItem** personnalisé avec une simple **image fournie en entrée** qui définit le chevron à présenter&nbsp;:

<pre><code class="objectivec">
    UIBarButtonItem &#42; _a11yLeftBarButton;
    
    _a11yLeftBarButton = [[UIBarButtonItem alloc]initWithImage:[UIImage imageNamed:@"info_chevron"]
                                                         style:UIBarButtonItemStyleDone
                                                        target:self
                                                        action:@selector(goBackToThePreviousView:)];
    
    _a11yLeftBarButton.accessibilityLabel = @"écran précédent";
    self.navigationItem.leftBarButtonItem = _a11yLeftBarButton;
</code></pre>

<pre><code class="swift">
    var a11yLeftBarButton: UIBarButtonItem?
    
    a11yLeftBarButton = UIBarButtonItem(image: UIImage(named: "info_chevron"),
                                        style: .done,
                                        target: self,
                                        action: #selector(goBackToThePreviousView(info:)))

    a11yLeftBarButton!.accessibilityLabel = "écran précédent"
    navigationItem.leftBarButtonItem = a11yLeftBarButton
</code></pre>

<br>... ou avec une **UIView** pour laquelle une action doit être ajoutée pour définir le rôle du nouveau bouton&nbsp;: cette implémentation est plus longue que la précédente mais a l'avantage de **fournir une <span lang="en">frame</span>** dont on va avoir besoin si l'on souhaite travailler sur l'ordre de lecture des éléments de la barre de navigation par exemple.

<pre><code class="objectivec">
    var a11yLeftBarButton: UIBarButtonItem?
    
    UIImage &#42; img = [UIImage imageNamed:@"info_chevron"];
    UIImageView &#42; imgView = [[UIImageView alloc]initWithImage:img];
    _a11yLeftBarButton = [[UIBarButtonItem alloc]initWithCustomView:imgView];
    
    UITapGestureRecognizer &#42; tap = [[UITapGestureRecognizer alloc]initWithTarget:self
                                                                          action:@selector(goBackToThePreviousView:)];
    [_a11yLeftBarButton.customView addGestureRecognizer:tap];
    
    _a11yLeftBarButton.isAccessibilityElement = YES;
    _a11yLeftBarButton.accessibilityTraits = UIAccessibilityTraitButton;
    _a11yLeftBarButton.accessibilityLabel = @"écran précédent";
    
    self.navigationItem.leftBarButtonItem = _a11yLeftBarButton;
</code></pre>

<pre><code class="swift">
    var a11yLeftBarButton: UIBarButtonItem?
    
    let a11yLeftBarButtonImage = UIImage(named: "info_chevron")
    a11yLeftBarButton = UIBarButtonItem(customView: UIImageView(image: a11yLeftBarButtonImage))
        
    let tap = UITapGestureRecognizer(target: self,
                                     action: #selector(goBackToThePreviousView(info:)))
    a11yLeftBarButton?.customView?.addGestureRecognizer(tap)
        
    a11yLeftBarButton?.isAccessibilityElement = true
    a11yLeftBarButton?.accessibilityTraits = .button
    a11yLeftBarButton?.accessibilityLabel = "écran précédent"
        
    navigationItem.leftBarButtonItem = a11yLeftBarButton
</code></pre>

<br>L'implémentation de l'une ou l'autre de ces solutions va donc dépendre de l'utilisation ultérieure du nouvel élément avec <span lang="en">VoiceOver</span>.
</div>
<div class="tab-pane" id="navBar-Title" role="tabpanel">

De façon à pouvoir utiliser rapidement les propriétés d'accessibilité du titre d'une barre de navigation, le plus simple est d'**implémenter son contenu sous forme de <span lang="en">UIView</span>**&nbsp;:

<pre><code class="objectivec">
    UILabel &#42; a11yTitleLabel = [[UILabel alloc]init];
    a11yTitleLabel.text = @"TITRE";
    [a11yTitleLabel sizeToFit];
    
    self.navigationItem.titleView = a11yTitleLabel;
    self.navigationItem.titleView.accessibilityLabel = @"vocalisation du titre différente de l'écrit";
</code></pre>

<pre><code class="swift">
    let a11yTitleLabel = UILabel()
    a11yTitleLabel.text = "TITRE"
    a11yTitleLabel.sizeToFit()

    navigationItem.titleView = a11yTitleLabel
    navigationItem.titleView?.accessibilityLabel = "vocalisation du titre différente de l'écrit"
</code></pre>

</div>
<div class="tab-pane" id="navBar-RightBarItem" role="tabpanel">

![](../../images/iOSdev/NavigationBar_3.png)
<br>À la création d'éléments dans la partie droite de la barre de navigation, l'utilisation de <span lang="en">UIView</span> est recommandée de façon à pouvoir interagir avec <span lang="en">VoiceOver</span> sans effectuer trop de modifications ultérieurement.
<pre><code class="objectivec">
    UIBarButtonItem &#42; _a11yRightBarButton;

    UILabel &#42; a11y = [[UILabel alloc]init];
    a11y.text = @"OK";
    [a11y sizeToFit];
    [a11y setUserInteractionEnabled:YES]; //Obligatoire pour reconnaître le 'tap gesture'.
    
    _a11yRightBarButton = [[UIBarButtonItem alloc]initWithCustomView:a11y];
    
    UITapGestureRecognizer &#42; tap = [[UITapGestureRecognizer alloc]initWithTarget:self 
                                                                          action:@selector(validateActions:)];
    [_a11yRightBarButton.customView addGestureRecognizer:tap];
    
    _a11yRightBarButton.isAccessibilityElement = YES;
    _a11yRightBarButton.accessibilityTraits = UIAccessibilityTraitButton;
    _a11yRightBarButton.accessibilityLabel = @"validation des actions";
    
    self.navigationItem.rightBarButtonItem = _a11yRightBarButton;
</code></pre>

<pre><code class="swift">
    var a11yRightBarButton: UIBarButtonItem?

    let a11y = UILabel()
    a11y.text = "OK"
    a11y.sizeToFit()
    a11y.isUserInteractionEnabled = true //Obligatoire pour reconnaître le 'tap gesture'.

    a11yRightBarButton = UIBarButtonItem(customView: a11y)
        
    let tap = UITapGestureRecognizer(target: self,
                                     action: #selector(validateActions(info:)))
    a11yRightBarButton?.customView?.addGestureRecognizer(tap)
        
    a11yRightBarButton?.isAccessibilityElement = true
    a11yRightBarButton?.accessibilityTraits = .button
    a11yRightBarButton?.accessibilityLabel = "validation des actions"
        
    navigationItem.rightBarButtonItem = a11yRightBarButton
</code></pre>

</div>
<div class="tab-pane" id="navBar-ReadingOrder" role="tabpanel">

Généralement, on n'a pas à toucher l'ordre de lecture <span lang="en">VoiceOver</span> pour les éléments de la barre de navigation mais il arrive pourtant que cela soit nécessaire ⟹ exemple d'une page de tutoriel pour laquelle `RightBarItem` permet de passer à la page suivante.

De façon à pouvoir illustrer une modification d'ordre de lecture impactant les éléments de la barre de navigation, nous allons supposer que le `RightBarItem` doit être le dernier élément de la page atteint à l'aide de balayages horizontaux successifs avec un seul doigt.

La page étudiée comprendra&nbsp;:
<ul>
  <li>une barre de navigation avec un chevron simple (LeftBarItem), un titre et un bouton 'OK' (RightBarItem),</li>
  <li>cinq labels non consécutifs,</li>
  <li>un bouton 'ACTION' centré en milieu de page.</li>
</ul>

![](../../images/iOSdev/NavigationBar_4.png)

L'idée est de lire les éléments dans l'ordre suivant : LeftBarItem, titre, Label1, Label2, Label3, bouton 'ACTION', Label4, Label5 et RightBarItem.

Dans un premier temps, on **personnalise les éléments de la barre de navigation** en s'appuyant sur les exemples de code fournis dans les autres onglets de cette section. 

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
    
    UIImage &#42; img = [UIImage imageNamed:@"info_chevron"];
    UIImageView &#42; imgView = [[UIImageView alloc]initWithImage:img];
    _a11yLeftBarButton = [[UIBarButtonItem alloc]initWithCustomView:imgView];
    
    UITapGestureRecognizer &#42; tap = [[UITapGestureRecognizer alloc]initWithTarget:self
                                                                          action:@selector(goBackToThePreviousView:)];
    [_a11yLeftBarButton.customView addGestureRecognizer:tap];
    
    self.navigationItem.leftBarButtonItem = _a11yLeftBarButton;
}


- (void)setTitle {
    
    UILabel &#42; a11yTitleLabel = [[UILabel alloc]init];
    a11yTitleLabel.text = @"TITRE";
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
        let a11yLeftBarButtonImage = UIImage(named: "infoChevron")
        a11yLeftBarButton = UIBarButtonItem(customView: UIImageView(image: a11yLeftBarButtonImage))

        let tap = UITapGestureRecognizer(target: self,
                                         action: #selector(goBackToThePreviousView(info:)))
        a11yLeftBarButton?.customView?.addGestureRecognizer(tap)

        navigationItem.leftBarButtonItem = a11yLeftBarButton
    }
    
    private func setTitle() {
        
        let a11yTitleLabel = UILabel()
        a11yTitleLabel.text = "TITRE"
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

<br>Ensuite, on **crée des éléments accessibles** pour la barre de navigation et on **spécifie l'ordre de lecture** <span lang="en">VoiceOver</span> pour les éléments de la vue à l'aide de son tableau `accessibilityElements`.

La vue et la barre de navigation étant deux conteneurs différents, on **cache les éléments de la barre de navigation à <span lang="en">VoiceOver</span>** et on les transfère à la vue en les créant avec des coordonnées de focus appropriées.

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
    a11yLBB.accessibilityLabel = @"écran précédent";
    a11yLBB.accessibilityTraits = UIAccessibilityTraitButton;
    
    UIAccessibilityElement &#42; a11yTBV = [[UIAccessibilityElement alloc] initWithAccessibilityContainer:self.view];
    a11yTBV.accessibilityFrameInContainerSpace = [navBarView convertRect:[self.navigationItem.titleView superview].frame toView:self.view];
    a11yTBV.accessibilityLabel = @"vocalisation du titre différente de l'écrit";
    a11yTBV.accessibilityTraits = UIAccessibilityTraitHeader;

    UIView &#42; rightButtonView = [_a11yRightBarButton valueForKey:@"view"];
    UIAccessibilityElement &#42; a11yRBB = [[UIAccessibilityElement alloc] initWithAccessibilityContainer:self.view];
    a11yRBB.accessibilityFrameInContainerSpace = [navBarView convertRect:[[rightButtonView superview] superview].frame toView:self.view];
    a11yRBB.accessibilityLabel = @"écran suivant";
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
    a11yLBB.accessibilityLabel = "écran précédent"
    a11yLBB.accessibilityTraits = .button

    let a11yTBV = UIAccessibilityElement(accessibilityContainer: self.view!)
    a11yTBV.accessibilityFrameInContainerSpace = navBarView!.convert((navigationItem.titleView?.superview!.frame)!,to:self.view)
    a11yTBV.accessibilityLabel = "vocalisation du titre différente de l'écrit"
    a11yTBV.accessibilityTraits = .header

    let rightButtonView = a11yRightBarButton?.value(forKey: "view") as? UIView
    let a11yRBB = UIAccessibilityElement(accessibilityContainer: self.view!)
    a11yRBB.accessibilityFrameInContainerSpace = navBarView!.convert((rightButtonView?.superview?.superview!.frame)!,to:self.view)
    a11yRBB.accessibilityLabel = "écran suivant"
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
    
<br>Le résultat correspond bien à l'ordre de lecture souhaité à l'aide de balayages successifs avec un doigt pour sélectionner les différents éléments accessibles.
![](../../images/iOSdev/NavigationBar_5.png)
![](../../images/iOSdev/NavigationBar_6.png)
</div>
<div class="tab-pane" id="navBar-Link" role="tabpanel">

- [UINavigationBar](https://developer.apple.com/documentation/uikit/uinavigationbar)
</div>
</div>
<br><br>

## Vocalisation synthétisée
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
           aria-selected="false">Fonctionnement</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link"
           data-toggle="tab" 
           href="#speechSyn-Example" 
           role="tab" 
           aria-selected="false">Exemple</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#speechSyn-Phonemes" 
           role="tab" 
           aria-selected="false">Phonèmes</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#speechSyn-Links" 
           role="tab" 
           aria-selected="false">Liens</a>
    </li>
</ul><div class="tab-content">
<div class="tab-pane show active"
     id="speechSyn-Description"
     role="tabpanel">

L'utilisation d'une voix synthétisée peut se faire dans [bon&nbsp;nombre&nbsp;de&nbsp;cas](../wwdc/2018/236/#cas-dusage-0048) non nécessairement liés à l'accessibilité mais, dans ce cadre, il est important de noter que **cette fonctionnalité ne remplace absolument pas <span lang="en">VoiceOver</span>** mais peut judicieusement compléter son implémentation selon les configurations rencontrées (la voix synthétisée peut chevaucher celle du lecteur d'écran).
</div>
<div class="tab-pane" id="speechSyn-Details" role="tabpanel">

Très peu d'éléments sont nécessaires pour créer rapidement une vocalisation synthétisée&nbsp;:
<ul>
  <li><B>Le texte à fournir</B>&nbsp;: se présente sous forme d'instance `AVSpeechUtterance` comprenant une propriété `voice` typée `AVSpeechSynthesisVoice`,</li>
  <br>
  <li><B>Le synthétiseur</B>&nbsp;: instance `AVSpeechSynthesizer` qui se charge de traiter le texte à fournir en assurant un contrôle d'événements grâce au protocole `AVSpeechSynthesizerDelegate`.</li>
</ul>

<br>

![](../../images/iOSdev/SpeechSynthesizer.png)
</div>
<div class="tab-pane" id="speechSyn-Example" role="tabpanel">

Pour assurer la vocalisation complète d'instances `AVSpeechUtterance`, il est [primordial](../wwdc/2018/236/#par-ou-commencer-0203) de **conserver l'instance `AVSpeechSynthesizer` jusqu'à la fin de l'ensemble de la vocalisation**.

L'exemple suivant va permettre de définir le débit vocal, la hauteur tonale ainsi que le volume de la voix pour chaque type de texte passé au synthétiseur vocal tout en permettant aussi de&nbsp;:
<ul>
  <li>mettre en avant le mot vocalisé grâce au protocole `AVSpeechSynthesizerDelegate`,</li>
  <br>
  <li>réaliser une pause et repartir de l'endroit d'où l'on vient avec des méthodes d'instance `AVSpeechSynthesizer`.</li>
</ul>

<br>

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
     
        NSString * stringNbPrefix = @"phrase numéro ";
        NSString * stringNbSuffix = @" de la voix synthétisée.";
        NSString * stringNb = [NSString stringWithFormat:@"%@%i%@", stringNbPrefix, i, stringNbSuffix];
        
        AVSpeechUtterance * utterance = [[AVSpeechUtterance alloc] initWithString:stringNb];
        utterance.rate = AVSpeechUtteranceDefaultSpeechRate;     //débit vocal
        utterance.pitchMultiplier = 1.0;     //hauteur tonale
        utterance.volume = 1.0;      //volume de la voix
        
        [playerQueue addObject:utterance];
    }
    
    synthesizer.delegate = self;
    
    for (AVSpeechUtterance * utterance in playerQueue) {
        [synthesizer speakUtterance:utterance];
    }
}

//Méthode du protocole AVSpeechSynthesizerDelegate pour déterminer visuellement le mot vocalisé.
- (void)speechSynthesizer:(AVSpeechSynthesizer *)synthesizer
willSpeakRangeOfSpeechString:(NSRange)characterRange
                utterance:(AVSpeechUtterance *)utterance {
    
    NSMutableAttributedString * attributedString = [[NSMutableAttributedString alloc] initWithString:utterance.speechString];
    
    [attributedString addAttribute:NSFontAttributeName
                             value:[UIFont systemFontOfSize:19.0]
                             range:characterRange];
    
    NSAttributedString * subString = [attributedString attributedSubstringFromRange:characterRange];
    textLabel.attributedText = attributedString;
    
    NSString * output = [NSString stringWithFormat:@"%@%@", @"mot : ", subString.string];
    NSLog(@"%@", output);
}

- (IBAction)pauseButton:(UIButton *)sender {
    
    if (synthesizer.isSpeaking == TRUE) {
        if ([synthesizer pauseSpeakingAtBoundary:AVSpeechBoundaryImmediate] == TRUE) {
            NSLog(@"PAUSE");
        } else {
            NSLog(@"P.R.O.B.L.È.M.E. avec la PAUSE.");
        }
    }
}

- (IBAction)resumeButton:(UIButton *)sender {
    
    if (synthesizer.isPaused == TRUE) {
        if ([synthesizer continueSpeaking] == TRUE) {
            NSLog(@"REPRISE");
        } else {
            NSLog(@"P.R.O.B.L.È.M.E. avec la REPRISE.");
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
            
            let stringNb = "phrase numéro " + String(i) + " de la voix synthétisée."
            
            let utterance = AVSpeechUtterance(string: stringNb)
            utterance.rate = AVSpeechUtteranceDefaultSpeechRate     //débit vocal
            utterance.pitchMultiplier = 1.0     //hauteur tonale
            utterance.volume = 1.0      //volume de la voix
            
            playQueue.append(utterance)
        }

        synthesizer.delegate = self

        for utterance in playQueue {
            synthesizer.speak(utterance)
        }
    }
    
    //Méthode du protocole AVSpeechSynthesizerDelegate pour déterminer visuellement le mot vocalisé.
    func speechSynthesizer(_ synthesizer: AVSpeechSynthesizer,
                           willSpeakRangeOfSpeechString characterRange: NSRange,
                           utterance: AVSpeechUtterance) {

        let attributedString = NSMutableAttributedString(string: utterance.speechString)
        attributedString.addAttribute(.font,
                                      value: UIFont.boldSystemFont(ofSize: 19),
                                      range: characterRange)

        textLabel.attributedText = attributedString

        let subString = attributedString.attributedSubstring(from: characterRange)
        print("mot : \(subString.string)")
    }
    
    
    @IBAction func pauseAction(_ sender: UIButton) {
    
        if (synthesizer.isSpeaking == true) {
            if (synthesizer.pauseSpeaking(at: .immediate) == true) {
                print("PAUSE")
            } else {
                print("P.R.O.B.L.È.M.E. avec la PAUSE.")
            }
        }
    }
    
    
    @IBAction func resumeAction(_ sender: UIButton) {
     
        if (synthesizer.isPaused == true) {
            if (synthesizer.continueSpeaking() == true) {
                print("REPRISE")
            } else {
                print("P.R.O.B.L.È.M.E. avec la REPRISE.")
            }
        }
    }
}
</code></pre>

</div>
<div class="tab-pane" id="speechSyn-Phonemes" role="tabpanel">

Lorsque des mots ont une consonance bien particulière ou que l'on souhaite réaliser une épellation spécifique, l'utilisation de la phonétique est fortement recommandée pour s'assurer du résultat.

<pre><code class="objectivec">
    NSMutableAttributedString &#42; attrStr = [[NSMutableAttributedString alloc] initWithString:@"blablabla" 
                                                                             attributes:@{AVSpeechSynthesisIPANotationAttribute:@"mɔ̃.daj.fɔ.nə.fɔ̃.ksjɔ.nə.paʀ.fɛ.tə.ˈmɑ̃"}];
    
    AVSpeechUtterance &#42; utterance = [[AVSpeechUtterance alloc] initWithAttributedString:attrStr];
    
    AVSpeechSynthesizer &#42; synthesizer = [[AVSpeechSynthesizer alloc] init];
    [synthesizer speakUtterance:utterance];
</code></pre>

<pre><code class="swift">
        let pronunciationKey = NSAttributedString.Key(rawValue: AVSpeechSynthesisIPANotationAttribute)
        
        let attrStr = NSMutableAttributedString(string: "blablabla",
                                                attributes: [pronunciationKey: "mɔ̃.daj.fɔ.nə.fɔ̃.ksjɔ.nə.paʀ.fɛ.tə.ˈmɑ̃"])

        let utterance = AVSpeechUtterance(attributedString: attrStr)

        let synthesizer = AVSpeechSynthesizer()
        synthesizer.speak(utterance)
</code></pre>

La génération de cette phonétique peut se faire en passant par les réglages du terminal.
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

<br>Une fois le menu `Prononciations` activé...

![](../../images/iOSdev/SpeechSynthesizerEx_2.png)
<br>
<ol>
  <li>Sélectionner l'icône '<B>+</B>' pour ajouter une nouvelle phonétique.</li>
  <br>
  <li>Donner un nom à la nouvelle entrée de façon à la retrouver plus facilement ultérieurement,</li>
  <br>
  <li>Taper sur l'icône <B>micro</B>,</li>
  <br>
  <li>Vocaliser la phrase ou le mot souhaité,</li>
  <br>
  <li>Écouter les différentes propositions faites par le système,</li>
  <br>
  <li>Valider le choix à l'aide du bouton '<B>OK</B>' ou annuler pour recommencer l'opération,</li>
  <br>
  <li>Sélectionner le bouton de retour pour valider la nouvelle phonétique créée,</li>
  <br>
  <li>Retrouver l'ensemble des éléments ainsi générés sur la page `Prononciations`.</li>
</ol>

![](../../images/iOSdev/SpeechSynthesizerEx_3.png)

Une des possibilités pour copier cette expression dans le code est de passer par l'**application locale `Notes`** dans laquelle on copiera la phonétique pour la synchroniser avec l'**application iCloud `Notes`** d'où on pourra aisément transférer l'information désirée au sein de `Xcode`.
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
  <li><a href="../wwdc/2018/236/" style="text-decoration: underline;">WWDC&nbsp;2018&nbsp;:&nbsp;Utiliser&nbsp;une&nbsp;voix&nbsp;synthétisée&nbsp;avec&nbsp;AVSpeechSynthesizer</a>
      </li>
</ul>

</div>
</div>
<br>

L'ensemble des fonctionnalités proposées par le synthétiseur vocal sont présentées dans une [vidéo WWDC](../wwdc/2018/236/) (Utiliser une voix synthétisée avec AVSpeechSynthesizer) parfaitement résumée dans la partie WWDC de ce site.
<br><br>

## Contrôle de sélection
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
           aria-selected="false">Personnalisation du mode élément</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#switchCtrl-Link" 
           role="tab" 
           aria-selected="false">Lien</a>
    </li>
</ul><div class="tab-content">
<div class="tab-pane show active"
     id="switchCtrl-Description"
     role="tabpanel">
     
L'utilisation du contrôle de sélection s'articule autour du mode point et du mode élément définis ci-dessous.

![modes point et élément pour le contrôle de sélection](../../images/iOSdev/ControlesDeSelection.png)

La sélection des éléments avec le mode élément fonctionne globalement bien quand les éléments proposés sont natifs et que l'application n'est pas trop compliquée graphiquement.

Il peut très bien arriver que ce mode de sélection ne suive pas la logique souhaitée et ne propose pas les éléments dans l'ordre désiré.
</div>
<div class="tab-pane" id="switchCtrl-Custom" role="tabpanel">

La structure utilisée pour l'exemple est présentée ci-dessous grâce à l'<span lang="en">InterfaceBuilder</span> de Xcode&nbsp;:

![exemple de l'interface graphique de xcode](../../images/iOSdev/ControleDeSelectionIB_1.png)

Afin de personnaliser la sélection de ces éléments, on souhaite&nbsp;:

- créer 2 groupes {Test_1 + Test_2 ; Btn 5 + Btn 6} sélectionnables en mode élément,

- avoir uniquement les éléments restants Btn 1 et Btn 2 accessibles séparément.

<br>

<pre><code class="objectivec">
@interface ViewController ()

@property (weak, nonatomic) IBOutlet UIStackView * btnsParentView;
@property (weak, nonatomic) IBOutlet UIButton * btn1;
@property (weak, nonatomic) IBOutlet UIButton * btn2;
@property (weak, nonatomic) IBOutlet UIButton * btn5;
@property (weak, nonatomic) IBOutlet UIButton * btn6;

@end


@implementation ViewController
- (void)viewDidAppear:(BOOL)animated {
    [super viewDidAppear:animated];
    
    //Création du premier groupe 'testWrap' en COMBINANT les boutons 'Test_1' et 'Test_2'.
    UIButton * testOneButton = [self.view viewWithTag:1];
    UIButton * testTwoButton = [self.view viewWithTag:2];
    CGRect testWrapFrame = CGRectUnion(testOneButton.frame, testTwoButton.frame);
    
    UIAccessibilityElement * testWrap = [[UIAccessibilityElement alloc]initWithAccessibilityContainer:self.view];
    
    testWrap.isAccessibilityElement = false;
    testWrap.accessibilityFrame = testWrapFrame;
    testWrap.accessibilityNavigationStyle = UIAccessibilityNavigationStyleCombined; //Property specifique au contrôle de sélection.
    testWrap.accessibilityElements = @[testOneButton, testTwoButton];
    
    
    //Création du second groupe 'secondGroup' en SÉPARANT les boutons 1 et 2.
    CGRect secondGroupRect = CGRectUnion(_btn1.frame, _btn2.frame);
    CGRect secondGroupFrame = [_btnsParentView convertRect:secondGroupRect
                                                    toView:self.view];
    UIAccessibilityElement * secondGroup = [[UIAccessibilityElement alloc]initWithAccessibilityContainer:_btnsParentView];
    
    secondGroup.isAccessibilityElement = false;
    secondGroup.accessibilityFrame = secondGroupFrame;
    secondGroup.accessibilityNavigationStyle = UIAccessibilityNavigationStyleSeparate;
    secondGroup.accessibilityElements = @[_btn1, _btn2];

    
    //Création du troisième groupe 'thirdGroup' en COMBINANT les boutons 5 et 6.
    CGRect thirdGroupRect = CGRectUnion(_btn1.frame, _btn2.frame);
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
        
        //Création du premier groupe 'testWrap' en COMBINANT les boutons 'Test_1' et 'Test_2'.
        let testOneButton = self.view.viewWithTag(1) as? UIButton
        let testTwoButton = self.view.viewWithTag(2) as? UIButton
        let testWrapFrame = testOneButton?.frame.union((testTwoButton?.frame)!)

        let testWrap = UIAccessibilityElement(accessibilityContainer: self.view!)

        testWrap.isAccessibilityElement = false
        testWrap.accessibilityFrame = testWrapFrame!
        testWrap.accessibilityNavigationStyle = .combined   //Property specifique au contrôle de sélection.
        testWrap.accessibilityElements = [testOneButton!, testTwoButton!]


        //Création du second groupe 'secondGroup' en SÉPARANT les boutons 1 et 2.
        let secondGroupRect = btn1.frame.union(btn2.frame)
        let secondGroupFrame = btnsParentView.convert(secondGroupRect,
                                                      to: self.view)
        let secondGroup = UIAccessibilityElement(accessibilityContainer: btnsParentView!)

        secondGroup.isAccessibilityElement = false
        secondGroup.accessibilityFrame = secondGroupFrame
        secondGroup.accessibilityNavigationStyle = .separate
        secondGroup.accessibilityElements = [btn1!, btn2!]


        //Création du troisième groupe 'thirdGroup' en COMBINANT les boutons 5 et 6.
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

<br>Le rendu de ce code est visualisable ci-dessous :

![rendu final avec le code implémenté](../../images/iOSdev/ControleDeSelection_1.jpg)

Les groupes créés permettent d'accéder directement aux éléments qu'ils contiennent dès qu'ils sont activés.

</div>
<div class="tab-pane" id="switchCtrl-Link" role="tabpanel">

- [`accessibilityNavigationStyle`](https://developer.apple.com/documentation/objectivec/nsobject/1615200-accessibilitynavigationstyle)
</div>
</div>
<br><br>

## Vocalisation du nom de l'application
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
           aria-selected="false">Exemple</a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#appName-Link" 
           role="tab" 
           aria-selected="false">Lien</a>
    </li>
</ul><div class="tab-content">
<div class="tab-pane show active"
     id="appName-Description"
     role="tabpanel">
     
Même s'il est possible à un utilisateur de personnaliser manuellement la vocalisation du nom d'une application via une <a href="../voiceover#CustomLabel" style="text-decoration: underline;">gestuelle spécifique <span lang="en">VoiceOver</span></a>, cette manipulation est aussi réalisable en programmation.

L'idée est de pouvoir vocaliser proprement les sigles présents sur les icônes applicatives qui sont très expressifs visuellement mais textuellement incompréhensibles.
</div>
<div class="tab-pane" id="appName-Example" role="tabpanel">

**CFBundleSpokenName** est la clé permettant d'adapter la vocalisation du texte définissant le nom d'une application qui, dans un cadre d'internationalisation, peut prendre différentes valeurs selon les langues visées.

![](../../images/iOSdev/AppName_1.png)

On passe alors d'un sigle incompréhensible avec une icône éventuellement plus parlante à une expression parfaitement compréhensible par un utilisateur pour lequel l'icône n'est peut-être pas du tout accessible.

![](../../images/iOSdev/AppName_2.png)
</div>
<div class="tab-pane" id="appName-Link" role="tabpanel">

- [`CFBundleSpokenName`](https://developer.apple.com/documentation/bundleresources/information_property_list/cfbundlespokenname)
</div>
</div><br><br>
