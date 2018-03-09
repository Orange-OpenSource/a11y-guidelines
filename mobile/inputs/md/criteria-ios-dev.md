# Les critères incontournables sous iOS pour le développement

<script>$(document).ready(function () {
    
    setBreadcrumb([{"label":"Les critères incontournables sous iOS", "url": "./criteria-ios.html"},
        {"label":"Pour le développement"}
	]);
    addSubMenu([
        {"label":"Pour la conception","url":"criteria-ios-conception.html"}, 
        {"label":"Pour le développement","url":"criteria-ios-dev.html", "expanded": true}
    ]);	
});</script>

<span data-menuitem="criteria-ios"></span>

Ce guide a pour objectif de présenter les différentes options du <abbr>SDK</abbr> d’accessibilité sous iOS 11 en associant&nbsp;:
- Des explications détaillées concernant les attributs et méthodes d'accessibilité.
- Des exemples de code en Swift 4 et en Objective C.

</br>... et des liens vers la [`documentation officielle d'Apple`](https://developer.apple.com/documentation/uikit/accessibility).

## Alternatives textuelles
### Description
Sous iOS, la vocalisation d’un élément s’effectue à travers 4 attributs&nbsp;: `label`, `hint`, `value` et `trait`.  
L’ordre de vocalisation est toujours le même (`label`, `value`, `trait` et `hint`), il ne peut pas être changé et la vocalisation est réalisée en une seule fois à l’arrivée sur l’élément.  

Une section de ce guide étant dédiée au `trait`, nous décrivons ici les 3 autres attributs&nbsp;:  
- **accessibilityLabel**&nbsp;: le label permet de préciser le titre spécifique à l’accessibilité qui est lu par <span lang="en">VoiceOver</span> en lieu et place du texte du composant si celui-ci en possède un, ce qui permet d’avoir un texte de composant plus explicite que celui affiché à l’écran.
</br>Par exemple, dans le cas d’un bouton dont le titre est « OK », on peut indiquer que le bouton sert à valider un choix.
- **accessibilityValue**&nbsp;: la valeur d’un élément est, par défaut, le pourcentage de progression.
</br>À noter que, pour la plupart des éléments ajustables disponibles dans le <abbr>SDK</abbr>, cette `value` n’a pas besoin d’être précisée car le système restitue automatiquement la valeur à l’utilisateur via <span lang="en">VoiceOver</span>.
- **accessibilityHint**&nbsp;: le `hint` permet de décrire le comportement du composant en incorporant des explications supplémentaires.
</br>Exemple&nbsp;: «&nbsp;cliquez pour obtenir le résultat&nbsp;».  

Ces attributs sont disponibles via l’<i lang="en">interface builder</i> de Xcode mais également accessibles en programmation.
</br>Tout élément dérivant de `UIView` possède ces attributs qui acceptent une chaîne de caractère les rendant subséquemment internationalisables.
### Exemple  
<pre><code class="objective-c">
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
</code></pre><pre><code class="swift">
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
### Liens
- [`accessibilityLabel`](https://developer.apple.com/documentation/objectivec/nsobject/1615181-accessibilitylabel)
- [`accessibilityValue`](https://developer.apple.com/documentation/objectivec/nsobject/1615117-accessibilityvalue)
- [`accessibilityHint`](https://developer.apple.com/documentation/objectivec/nsobject/1615093-accessibilityhint)

## Nature des éléments
### Description
L’attribut `accessibilityTraits` permet de donner une information à l’<abbr>API</abbr> d’accessibilité sur la nature d’un composant.
</br>On peut décider ainsi qu’un item de liste soit pris en compte comme un bouton par <span lang="en">VoiceOver</span> car celui-ci est cliquable.
</br>De ce fait, l’`accessibilityTrait` joue également sur la vocalisation de l’élément car cette nature est restituée par <span lang="en">VoiceOver</span>.  
 
Cet attribut d’accessibilité est disponible via l’<i lang="en">interface builder</i> de Xcode mais également utilisable directement via le code.  

Il existe beaucoup de traits dont les principaux sont fournis ci-dessous&nbsp;:  
- **accessibilityTraitNone**&nbsp;: supprime toute valeur sémantique à l’élément.
- **accessibilityTraitButton**&nbsp;: ajoute le trait «&nbsp;bouton&nbsp;», l’élément est vu comme un bouton par <span lang="en">VoiceOver</span>.
- **accessibilityTraitLink**&nbsp;: utile pour définir un label en tant que «&nbsp;lien&nbsp;».
- **accessibilityTraitHeader**&nbsp;: permet de définir un élément comme un en-tête (voir la section <a href="criteria-ios-conception.html#titre-et-en-t-te">«&nbsp;titre et en-tête&nbsp;»</a>).
- **accessibilityTraitAdjustable**&nbsp;: permet de définir un élément comme un élément «&nbsp;ajustable&nbsp;», c’est-à-dire un élément dont la valeur instantanée peut être modifiée via un <a href="https://help.apple.com/iphone/9/#/iph3e2e2281">geste spécifique</a> de <span lang="en">VoiceOver</span>.
### Exemple
<pre><code class="objective-c">
- (void)customTraits() {
    //Spécification d'un UIPageControl avec le trait ’ajustable’.
    pageControl.accessibilityTraits = UIAccessibilityTraitAdjustable;
    
    //Ajout d'un en-tête.  
    defaultHeaderViewCell.accessibilityTraits = UIAccessibilityTraitHeader;

    //Combinaison possible de plusieurs traits.  
    onePageButton.accessibilityTraits = UIAccessibilityTraitButton + UIAccessibilityTraitSelected;
}
</code></pre><pre><code class="swift">
func customTraits() {
    //Spécification d'un UIPageControl avec le trait ’ajustable’.
    pageControl.accessibilityTraits = UIAccessibilityTraitAdjustable
    
    //Ajout d'un en-tête. 
    defaultHeaderViewCell.accessibilityTraits = UIAccessibilityTraitHeader

    //Combinaison possible de plusieurs traits. 
    onePageButton.accessibilityTraits = UIAccessibilityTraitButton + UIAccessibilityTraitSelected
}
</code></pre>
### Lien
- [`accessibilityTraits`](https://developer.apple.com/documentation/objectivec/nsobject/1615202-accessibilitytraits)

## Masquer des éléments à l’accessibilité  
### Description
Il est possible de masquer des éléments aux outils d’accessibilité grâce aux attributs d’accessibilité mais aussi de forcer certains éléments à être visibles pour les outils d’accessibilité uniquement.  
  
- **isAccessibilityElement**&nbsp;: booléen qui permet d’indiquer qu’un élément est visible ou non de l’<abbr>API</abbr> d’accessibilité (de <span lang="en">VoiceOver</span> ou autre).
- **accessibilityElementsHidden**&nbsp;: booléen qui permet d’indiquer que les éléments fils de l’élément cible sont visibles ou non de l’<abbr>API</abbr> d’accessibilité.
- **accessibilityViewIsModal**&nbsp;: booléen qui permet de rendre visible ou non les éléments frères de l’élément cible à l’<abbr>API</abbr> d’accessibilité.
</br>Très utile pour rendre accessible des <i lang="en">popin custom view</i> par exemple.  
  
L’attribut `accessibilityElement` est disponible via l’<i lang="en">interface builder</i> de Xcode mais est également utilisable directement via le code.
</br>Les deux autres attributs sont utilisables uniquement via le code.
### Exemple
L'idée est de créer un carré rouge qui va contenir 2 autres carrés (bleu et jaune) pour appliquer les attributs définis précedémment.
<img style="max-width: 500px; height: auto; " src="./images/iOSdev/MasquerDesÉléments_1.png" />
<pre><code class="objective-c">
- (void)viewDidAppear:(BOOL)animated {
    [super viewDidAppear:animated];
    
    //Création d'un élément père dans lequel 2 autres éléments fils vont être insérés.
    CGRect parentViewRect = CGRectMake(100.0, 100.0, 40.0, 40.0);
    UIView * myParentView = [[UIView alloc]initWithFrame:parentViewRect];
    myParentView.backgroundColor = [UIColor redColor];
    
    [UIApplication.sharedApplication.keyWindow addSubview:myParentView];
    
    //L'élément père ne doit pas être accessible pour servir de conteneur à ses enfants.
    //Si la valeur est à 'YES', seul cet élément sera accessible sans ses enfants.
    myParentView.isAccessibilityElement = NO;
    
    //Indication du conteneur que ses enfants peuvent ne pas être accessibles même s'ils sont définis comme tels.
    //Si cette valeur est à 'NO' et la précedénte à 'NO', seuls ces élements seront accessibles.
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
        
        //Création d'un élément père dans lequel 2 autres éléments fils vont être insérés.
        let parentViewRect = CGRect.init(x: 100.0,
                                         y: 100.0,
                                         width: 40.0,
                                         height: 40.0)
        let myParentView = UIView.init(frame: parentViewRect)
        myParentView.backgroundColor = .red
        
        UIApplication.shared.keyWindow?.addSubview(myParentView)
        
        //L'élément père ne doit pas être accessible pour servir de conteneur à ses enfants.
        //Si la valeur est à 'true', seul cet élément sera accessible sans ses enfants.
        myParentView.isAccessibilityElement = false
        
        //Indication du conteneur que ses enfants peuvent ne pas être accessibles même s'ils sont définis comme tels.
        //Si cette valeur est à 'false' et la précedénte à 'false', seuls ces élements seront accessibles.
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
### Liens     
- [`isAccessibilityElement`](https://developer.apple.com/documentation/objectivec/nsobject/1615141-isaccessibilityelement)
- [`accessibilityElementsHidden`](https://developer.apple.com/documentation/objectivec/nsobject/1615080-accessibilityelementshidden)
- [`accessibilityViewIsModal`](https://developer.apple.com/documentation/objectivec/nsobject/1615089-accessibilityviewismodal)

## Déclencher une vocalisation
### Description
Il est très facile de déclencher des vocalisations avec <span lang="en">VoiceOver</span>.
</br>Attention, nous parlons de vocalisation avec <span lang="en">VoiceOver</span> (ce qui implique que <span lang="en">VoiceOver</span> soit activé) et pas de <abbr>TTS</abbr> (<span lang="en">Text To Speech</span>) qui fonctionne indépendamment de l’activation ou non de <span lang="en">VoiceOver</span>.
</br></br>Pour déclencher une vocalisation qui se fera dans la langue du système, il faut envoyer une notification à l’<abbr>API</abbr> d’accessibilité via la méthode **UIAccessibilityPostNotification** avec en paramètres la notification permettant de déclencher une vocalisation **UIAccessibilityAnnouncementNotification** et la chaîne de caractères à vocaliser.
### Exemple
<pre><code class="objective-c">
UIAccessibilityPostNotification(UIAccessibilityAnnouncementNotification, @"Message pour la vocalisation.");
</code></pre><pre><code class="swift">
UIAccessibilityPostNotification(UIAccessibilityAnnouncementNotification, "Message pour la vocalisation.")
</code></pre>
### Liens
- [`UIAccessibilityPostNotification`](https://developer.apple.com/documentation/uikit/1615194-uiaccessibilitypostnotification)
- [`UIAccessibilityAnnouncementNotification`](https://developer.apple.com/documentation/uikit/uiaccessibilityannouncementnotification)


## Connaître l’état des options d’accessibilité
### Description
Est-ce que <span lang="en">VoiceOver</span> est activé&nbsp;? Est-ce que le mode audio-mono est activé&nbsp;?
</br>Plusieurs fonctions du <span lang="en">framework</span> `UIKit` permettent de connaître les statuts de ces options d'accessibilité.
 </br>La plus utile est certainement celle qui permet de savoir si <span lang="en">VoiceOver</span> est activé au moment de l’appel (**UIAccessibilityIsVoiceOverRunning**).
 </br></br>D'autres fonctions, peut-être moins utiles à première vue, sont fournies dans les liens ci-après.
### Exemple
<pre><code class="objective-c">
    BOOL isVoiveOverRunning = (UIAccessibilityIsVoiceOverRunning() ? 1 : 0);
    BOOL isSwitchControlRunning = (UIAccessibilityIsSwitchControlRunning() ? 1 : 0);
    
    NSLog(@"VoiceOver vaut %d et SwitchControl vaut %d.", isVoiveOverRunning, isSwitchControlRunning);
</code></pre><pre><code class="swift">
    let isVoiceOverRunning = (UIAccessibilityIsVoiceOverRunning() ? 1 : 0)
    let isSwitchControlRunning = (UIAccessibilityIsSwitchControlRunning() ? 1 : 0)
        
    print("VoiceOver vaut \(isVoiceOverRunning) et SwichControl vaut \(isSwitchControlRunning).")
</code></pre>
### Liens
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

## Informer d’une modification sur la page
### Description
Lors d’un changement de contenu sur une page, il est possible de notifier l’<abbr>API</abbr> d’accessibilité de ce changement à travers différentes notifications.
</br>Pour ce faire, il faut envoyer une notification de modification à l’<abbr>API</abbr> d’accessibilité via la méthode **UIAccessibilityPostNotification**.  
</br>Il existe plusieurs notifications de modification, mais les deux plus utiles sont&nbsp;:
- **UIAccessibilityLayoutChangedNotification**&nbsp;: permet de spécifier à l’<abbr>API</abbr> d’accessibilité qu’une partie de la page a été modifiée et doit être accompagné d'un `NSString` ou d'un `UIObject`.
</br>Avec un `NSString`, la notification se comporte comme une **UIAccessibilityAnnouncementNotification** et lance une vocalisation <span lang="en">VoiceOver</span>.
</br>Avec un `UIObject`, le focus est repositionné sur l’élément précisé.
</br>Cette notification est très similaire à **UIAccessibilityAnnouncementNotification** mais son utilisation doit être mise en avant dès lors qu'une modification dynamique du contenu se produit.
- **UIAccessibilityScreenChangedNotification**&nbsp;: permet d’annoncer un changement global de la page et accepte soit `nil`, soit l’élément qui doit recevoir le focus.
</br>Avec `nil`, la notification vocalise et sélectionne le premier élément accessible de la page.
</br>Avec un `UIObject`, le focus est repositionné sur l’élément précisé en lançant une vocalisation <span lang="en">VoiceOver</span>.
</br>Le son utilisé pour notifier la modification est similaire à l'arrivée d'une nouvelle page.
### Exemple
<pre><code class="objective-c">
//L'élément 'myLabel' est sélectionné et vocalisé avec sa nouvelle valeur.
- (IBAction)tapHere:(UIButton *)sender {
    
    myLabel.accessibilityLabel = @"Ceci est un nouveau label.";
    UIAccessibilityPostNotification(UIAccessibilityLayoutChangedNotification, myLabel);
}

//Le premier élément accessible de la page est sélectioné et vocalisé avec un son spécifique.
- (IBAction)clic:(UIButton *)sender {
    
    UIAccessibilityPostNotification(UIAccessibilityScreenChangedNotification, nil);
}
</code></pre><pre><code class="swift">
//L'élément 'myLabel' est sélectionné et vocalisé avec sa nouvelle valeur.
@IBAction func clicHere(_ sender: UIButton) {
        
    myLabel.accessibilityLabel = "Ceci est un nouveau label."
    UIAccessibilityPostNotification(UIAccessibilityLayoutChangedNotification, myLabel)
}
    
//Le premier élément accessible de la page est sélectioné et vocalisé avec un son spécifique.
@IBAction func clic(_ sender: UIButton) {
        
    UIAccessibilityPostNotification(UIAccessibilityScreenChangedNotification, mySecondLabel)
}
</code></pre>
### Liens
- [`UIAccessibilityPostNotification`](https://developer.apple.com/documentation/uikit/1615194-uiaccessibilitypostnotification)
- [`UIAccessibilityLayoutChangedNotification`](https://developer.apple.com/documentation/uikit/uiaccessibilitylayoutchangednotification)
- [`UIAccessibilityScreenChangedNotification`](https://developer.apple.com/documentation/uikit/uiaccessibilityscreenchangednotification)
- [`UIAccessibilityPageScrolledNotification`](https://developer.apple.com/documentation/uikit/uiaccessibilitypagescrollednotification)

## Modifier la langue de vocalisation
### Description
Afin de modifier la langue de prononciation de <span lang="en">VoiceOver</span> pour un mot ou un texte, il existe l’attribut **accessibilityLanguage**&nbsp;. </br>Disponible via le protocole `UIAccessibility`, cet attribut permet de redéfinir la langue de prononciation d’un texte.
</br>Par exemple, si on utilise cet attribut sur un `UILabel`, alors celui-ci sera vocalisé par <span lang="en">VoiceOver</span> dans la nouvelle langue donnée en valeur de l’attribut.</br>
### Exemple
<pre><code class="objective-c">
- (IBAction)tapHere:(UIButton *)sender {
    
    myLabel.accessibilityLanguage = @"en";
    myLabel.accessibilityLabel = @"This is a new label. Thank you.";
    UIAccessibilityPostNotification(UIAccessibilityLayoutChangedNotification, myLabel);
}
</code></pre><pre><code class="swift">
@IBAction func tapHere(_ sender: UIButton) {
        
    myLabel.accessibilityLanguage = "en"
    myLabel.accessibilityLabel = "This is a new label. Thank you."
    UIAccessibilityPostNotification(UIAccessibilityLayoutChangedNotification, myLabel)
}
</code></pre>
### Lien
- [`accessibilityLanguage`](https://developer.apple.com/documentation/objectivec/nsobject/1615192-accessibilitylanguage)

## Modifier la zone de focus de <span lang="en">VoiceOver</span>
### Description
Dans le cas d’objet modifié dynamiquement ou d’élément ne dérivant pas de `UIView`, il est possible de déterminer la zone géographique d’accessibilité de cet élément, c’est-à-dire la zone que <span lang="en">VoiceOver</span> met en surbrillance lors du focus.  

- **accessibilityFrame**&nbsp;: permet de définir cette zone via un rectangle (`CGRect`).
</br>Par défaut pour un élément dérivant de `UIView`, cette zone est la partie «&nbsp;visible&nbsp;» de la vue.
- **accessibilityPath**&nbsp;: équivalent à `AccessibilityFrame` mais permet de définir la zone via des courbes de Bézier.
- **accessibilityActivationPoint**&nbsp;: le «&nbsp;point&nbsp;» d’activation d’un élément pour les outils d’accessibilité.
</br>Par défaut, ce point est au centre de l’élément.
### Exemple
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
### Liens
- [`accessibilityFrame`](https://developer.apple.com/documentation/uikit/uiaccessibilityelement/1619579-accessibilityframe)
- [`accessibilityPath`](https://developer.apple.com/documentation/objectivec/nsobject/1615159-accessibilitypath)
- [`accessibilityActivationPoint`](https://developer.apple.com/documentation/objectivec/nsobject/1615179-accessibilityactivationpoint)

## Grouper des éléments
### Description
On peut envisager de grouper des éléments pour vocaliser l'ensemble formé en une seule fois et associer au groupe ainsi créé une action dédiée par exemple.
</br>Dans ce cas, on va créer une vue qui va englober les éléments impactés puis implémenter une action qui va indiquer l'action à réaliser en cas d'activation de la zone par l'utilisateur.
</br>Dès lors, les éléments encapsulés ne doivent plus être considérés comme accessibles car seul leur conteneur doit être perçu comme tel.
</br></br>Une autre possibilité de groupement d'éléments pourrait utiliser l’attribut **shouldGroupAccessibilityChildren**, booléen qui permet d’indiquer à <span lang="en">VoiceOver</span> qu’il doit grouper les enfants de la vue qui porte l’attribut.
</br>Cela permet notamment de faire des vocalisations uniques ou de définir un ordre de lecture <span lang="en">VoiceOver</span> particulier pour une partie de la page seulement (voir la section <a href="http://a11y-guidelines.orange.com/mobile/criteria-ios-dev.html#ordre-de-lecture">Ordre de lecture</a>).
### Exemple
Nous avons un 'label' et un 'switch control' que nous allons souhaitons regrouper et traiter d'un seul bloc.
</br><img style="max-width: 700px; height: auto; " src="./images/iOSdev/GrouperDesÉléments_1.png" />
<pre><code class="objective-c">
- (void)viewDidAppear:(BOOL)animated {
    [super viewDidAppear:animated];
    
    //Création de la vue qui va encapsuler le 'label' et le 'Switch Control'.
    CGRect wrapFrame = CGRectUnion(myLabel.frame, mySwitchControl.frame);
    wrapView = [[UIView alloc]initWithFrame: wrapFrame];
    
    wrapView.isAccessibilityElement = YES;
    wrapView.accessibilityLabel = myLabel.accessibilityLabel;
    wrapView.accessibilityValue = mySwitchControl.accessibilityValue;
    
    
    //Création de la manipulation qui va permettre une action sur la vue précédente.
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
        
        //Création de la vue qui va encapsuler le 'label' et le 'Switch Control'.
        let wrapFrame = myLabel.frame.union(mySwitchControl.frame)
        let wrapView = UIView.init(frame: wrapFrame)
        
        wrapView.isAccessibilityElement = true
        wrapView.accessibilityLabel = myLabel.accessibilityLabel
        wrapView.accessibilityValue = mySwitchControl.accessibilityValue
        
        
        //Création de la manipulation qui va permettre une action sur la vue précédente.
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
### Lien
- [`shouldGroupAccessibilityChildren`](https://developer.apple.com/documentation/objectivec/nsobject/1615143-shouldgroupaccessibilitychildren)

## Événements d’accessibilité
### Description
Le système iOS envoie un certain nombre d’événements d’accessibilité à destination des applications lors de la modification des options d’accessibilité.
</br>Par exemple, si <span lang="en">VoiceOver</span> est désactivé durant l’utilisation de l’application, celle-ci recevra l’événement **UIAccessibilityVoiceOverStatusDidChange**, ce qui peut être très utile couplé à la fonction **UIAccessibilityIsVoiceOverRunning** grâce à laquelle on peut exécuter un traitement particulier quand <span lang="en">VoiceOver</span> est activé.
</br>Mais que se passe-t-il si <span lang="en">VoiceOver</span> est désactivé alors que ce traitement a déjà eu lieu&nbsp;?
</br></br>C’est là que les événements système peuvent être utilisés et, en restant à leur écoute, il est possible d’appliquer des traitements spécifiques de manière dynamique.
### Exemple
Dans cet exemple, on appelle une méthode spécifique au moment où le statut de VoiceOver ou du Switch Control change.
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
### Lien
Tous les événements sont disponibles sur la <a href="https://developer.apple.com/documentation/uikit/accessibility/notification_names?language=objc">documentation officielle d'Apple</a>.


## Taille des textes
### Description
La gestion des polices dynamiques sous iOS est complexe.
</br>Depuis iOS7, il est possible d’utiliser une <abbr>API</abbr> permettant de modifier dynamiquement la taille des textes d'une application à l’aide du paramétrage du téléphone.
</br><img style="max-width: 600px; height: auto; " src="./images/iOSdev/TailleDesTextes_1.png" />
</br>Quelques points sont néanmoins essentiels pour la bonne utilisation de cette <abbr>API</abbr>&nbsp;:
 - Utiliser les polices système pour les textes de l’application afin d'éviter les mauvaises surprises même s'il est toutefois possible de définir ses propres polices dérivées de la classe `UIFont` surtout depuis l'arrivée de `UIFontMetrics` avec iOS11.
 <pre><code class="objective-c">
    __weak IBOutlet UILabel * fontHeadline;
    __weak IBOutlet UILabel * fontFootNote;
    
    //Utilisation de la font native pour le titre principal d'un page.
    UIFont * myFont = [UIFont preferredFontForTextStyle:UIFontTextStyleHeadline];
    
    //Définition de la font pour le titre principal d'une page.
    UIFont * fontHead = [UIFont fontWithName:@"Chalkduster" size:30.0];
    UIFontMetrics * fontHeadMetrics = [[UIFontMetrics alloc]initForTextStyle:UIFontTextStyleHeadline];
    fontHeadline.font = [fontHeadMetrics scaledFontForFont:fontHead];
</code></pre><pre><code class="swift">
    @IBOutlet weak var fontHeadline: UILabel!
    @IBOutlet weak var fontFootNote: UILabel!
    
    //Utilisation de la police native par défaut pour le titre principal d'une page.
    let myFont = UIFont.preferredFont(forTextStyle: .headline)
        
    //Définition personnalisée de la police pour le titre principal d'une page.
    let fontHead = UIFont(name: "Chalkduster", size: 30.0)
    let fontHeadMetrics = UIFontMetrics(forTextStyle: .headline)
    fontHeadline.font = fontHeadMetrics.scaledFont(for: fontHead!)
</code></pre>
 - Penser à écouter la notification **UIContentSizeCategoryDidChange** qui annonce le changement de la taille du texte à partir des paramètres du téléphone.
</br>Cette tâche est simplifiée depuis iOS11 où l'attribut **adjustsFontForContentSizeCategory** se charge de la mise à jour automatique de la nouvelle taille de police au sein de l'application.
<pre><code class="objective-c">
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
</code></pre><pre><code class="swift">
    //Écoute de la notification annonçant le changement de taille de la police.
    NotificationCenter.default.addObserver(self,
                                           selector:#selector(methodToBeCalled(notification:)),
                                           name: .UIContentSizeCategoryDidChange,
                                           object: nil)
    
    //Modification automatique de la taille de la police sans utiliser la notification.
    fontHeadline.adjustsFontForContentSizeCategory = true
    
    @objc func methodToBeCalled(notification: Notification) {

        //Il faut de nouveau affecter la police des éléments impactés lors du traitement de cette notification.
        fontFootNote.font = UIFont.preferredFont(forTextStyle: .footnote)
    }
</code></pre>
 - Ne pas oublier d'adapter les contraintes graphiques aux éléments susceptibles de voir leur taille modifiée en privilégiant l'utilisation de valeurs dynamiques.
### Liens
- [<span lang="en">Dynamic Type <abbr>API</abbr></span>](https://developer.apple.com/library/ios/documentation/StringsTextFonts/Conceptual/TextAndWebiPhoneOS/CustomTextProcessing/CustomTextProcessing.html#//apple_ref/doc/uid/TP40009542-CH4-SW65)
- [`UIContentSizeCategoryDidChange`](https://developer.apple.com/documentation/foundation/nsnotification.name/1622948-uicontentsizecategorydidchange)
- [`adjustsFontForContentSizeCategory`](https://developer.apple.com/documentation/uikit/uicontentsizecategoryadjusting/1771731-adjustsfontforcontentsizecategor?language=objc)


## Ordre de lecture
### Description
Redéfinir l’ordre de lecture pour <span lang="en">VoiceOver</span> s’effectue en respectant le protocole **UIAccessibilityContainer**.
</br>L’idée est d’avoir un tableau des éléments de la vue qui définit l’ordre de lecture des éléments.
</br>Il est bien souvent nécessaire d’utiliser l’attribut **shouldGroupAccessibilityElement** afin d’avoir un ordre précis mais pour une partie seulement de la vue (le reste étant l’ordre naturel de lecture proposé par <span lang="en">VoiceOver</span>).
### Exemple
Le meilleur exemple pour illustrer cette fonctionnalité est le clavier pour lequel les touches sucessives ne suivent pas forcément l'ordre natif proposé par <span lang="en">VoiceOver</span>.
</br>Dans cet exemple, on veut l'ordre suivant : 1, 2, 3, 4, 7, 6, 8, 9, 5.
</br>On crée  les 2 vues grise et bleue au sein desquelles on incorpore les chiffres appropriés comme défini ci-dessous :
</br><img style="max-width: 500px; height: auto; " src="./images/iOSdev/OrdreDeLecture_1.png" />
<pre><code class="objective-c">
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
</code></pre><pre><code class="swift">
    @IBOutlet weak var greyColumn: UIView!
    @IBOutlet weak var blueBlock: UIView!
    
    override func viewDidAppear(_ animated: Bool) {
        super.viewDidAppear(animated)
        
        //Lecture des 3 premiers nombres dans la vue grise.
        greyColumn.shouldGroupAccessibilityChildren = true
        
        // Lecture des chiffres 6, 8, 9 et 5 au sein du bloc bleu.
        blueBlock.isAccessibilityElement = false
        blueBlock.accessibilityElements = [key_6,
                                           key_8,
                                           key_9,
                                           key_5]
    }
</code></pre>
### Liens
- [`UIAccessibilityContainer`](https://developer.apple.com/documentation/uikit/accessibility/uiaccessibilitycontainer?language=objc)
- [`shouldGroupAccessibilityChildren`](https://developer.apple.com/documentation/objectivec/nsobject/1615143-shouldgroupaccessibilitychildren)

<!--  This file is part of a11y-guidelines | Our vision of mobile & web accessibility guidelines and best practices, with valid/invalid examples.
 Copyright (C) 2016  Orange SA
 See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). -->