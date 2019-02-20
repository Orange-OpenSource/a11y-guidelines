# Les critères incontournables sous iOS pour le développement

<script>$(document).ready(function () {
    
    setBreadcrumb([{"label":"Les critères incontournables sous iOS", "url": "./criteria-ios.html"},
        {"label":"Pour le développement"}
	]);
    addSubMenu([
        {"label":"Pour la conception","url":"criteria-ios-conception.html"}, 
        {"label":"Pour le développement","url":"criteria-ios-dev.html", "expanded": true},
        {"label":"WWDC","url":"criteria-ios-wwdc.html"}
    ]);	
});</script>

<span data-menuitem="criteria-ios"></span>

Ce guide a pour objectif de présenter les différentes options du <abbr>SDK</abbr> d’accessibilité sous iOS 12 en associant&nbsp;:
- Des explications détaillées concernant les attributs et méthodes d'accessibilité.
- Des exemples de code en Swift 4.2 et en Objective C.

... et des liens vers la [`documentation officielle d'Apple`](https://developer.apple.com/documentation/uikit/accessibility).

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

<pre><code class="objective-c">
- (void)customTraits() {
    //Spécification d'un UIPageControl avec le trait ’ajustable’.
    pageControl.accessibilityTraits = UIAccessibilityTraitAdjustable;
    
    //Ajout d'un en-tête.  
    defaultHeaderViewCell.accessibilityTraits = UIAccessibilityTraitHeader;
}
</code></pre><pre><code class="swift">
func customTraits() {
    //Spécification d'un UIPageControl avec le trait ’ajustable’.
    pageControl.accessibilityTraits = .adjustable
    
    //Ajout d'un en-tête. 
    defaultHeaderViewCell.accessibilityTraits = .header
}
</code></pre>
### Opérations élémentaires
Cet attribut est en réalité un `bitmask` pour lequel chaque élément pris individuellement peut prendre une valeur spécifique.
</br><img alt="" style="max-width: 600px; height: auto; " src="./images/iOSdev/Traits.png" />
</br>Il est donc possible d'ajouter et d'enlever plusieurs `traits` présents pour caractériser un élement après avoir vérifié leur existence par exemple.

<pre><code class="objective-c">
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
</code></pre><pre><code class="swift">
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
### Lien
- [`accessibilityTraits`](https://developer.apple.com/documentation/objectivec/nsobject/1615202-accessibilitytraits)

## Masquer des éléments à l’accessibilité  
### Description
Il est possible de masquer des éléments aux outils d’accessibilité grâce aux attributs d’accessibilité mais aussi de forcer certains éléments à être visibles pour les outils d’accessibilité uniquement.  
  
- **isAccessibilityElement**&nbsp;: booléen qui permet d’indiquer qu’un élément est visible ou non de l’<abbr>API</abbr> d’accessibilité (de <span lang="en">VoiceOver</span> ou autre).
- **accessibilityElementsHidden**&nbsp;: booléen qui permet d’indiquer que les éléments fils de l’élément cible sont visibles ou non de l’<abbr>API</abbr> d’accessibilité.
- **accessibilityViewIsModal**&nbsp;: booléen qui permet de rendre visible ou non les éléments frères de l’élément cible à l’<abbr>API</abbr> d’accessibilité.
</br>Une [explication théorique](./criteria-ios-wwdc-18230.html#accessibilityViewIsModal) et une [application pratique](./criteria-ios-wwdc-18230.html#DemoModalView) de cette propriété sont fournies par une vidéo détaillée dans la partie WWDC de ce site.

L’attribut `accessibilityElement` est disponible via l’<i lang="en">interface builder</i> de Xcode mais est également utilisable directement via le code.
</br>Les deux autres attributs sont utilisables uniquement via le code.
### Exemple
L'idée est de créer un carré rouge qui va contenir 2 autres carrés (bleu et jaune) pour appliquer les attributs définis précedémment.
<img alt="" style="max-width: 500px; height: auto; " src="./images/iOSdev/MasquerDesElements_1.png" />
<pre><code class="objective-c">
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
</code></pre><pre><code class="swift">
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
UIAccessibilityPostNotification(UIAccessibilityAnnouncementNotification, 
                                @"Message pour la vocalisation.");
</code></pre><pre><code class="swift">
UIAccessibility.post(notification: .announcement,
                     argument: "Message pour la vocalisation.")
</code></pre>
### Liens
- [`UIAccessibilityPostNotification`](https://developer.apple.com/documentation/uikit/1615194-uiaccessibilitypostnotification)
- [`UIAccessibilityAnnouncementNotification`](https://developer.apple.com/documentation/uikit/uiaccessibilityannouncementnotification)


## Connaître l’état des options d’accessibilité
### Description
Est-ce que <span lang="en">VoiceOver</span> est activé&nbsp;? Est-ce que le mode audio-mono est activé&nbsp;?
</br>Plusieurs fonctions du <span lang="en">framework</span> `UIKit` permettent de connaître les statuts de ces options d'accessibilité.
 </br>La plus utile est certainement celle qui permet de savoir si <span lang="en">VoiceOver</span> est activé au moment de l’appel (**UIAccessibilityIsVoiceOverRunning**).
 </br></br>D'autres fonctions, peut-être moins utiles à première vue, sont fournies dans les liens ci-après et une présentation très visuelle de certaines d'entre elles est faite lors d'une vidéo WWDC 2018 *(Fournir une expérience exceptionnelle en accessibilité)* dont le contenu est parfaitement détaillée [sur ce site](./criteria-ios-wwdc-18230.html).
### Exemple
<pre><code class="objective-c">
    BOOL isVoiveOverRunning = (UIAccessibilityIsVoiceOverRunning() ? 1 : 0);
    BOOL isSwitchControlRunning = (UIAccessibilityIsSwitchControlRunning() ? 1 : 0);
    
    NSLog(@"VoiceOver vaut %d et SwitchControl vaut %d.", isVoiveOverRunning, isSwitchControlRunning);
</code></pre><pre><code class="swift">
    let isVoiceOverRunning = (UIAccessibility.isVoiceOverRunning ? 1 : 0)
    let isSwitchControlRunning = (UIAccessibility.isSwitchControlRunning ? 1 : 0)
        
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
    UIAccessibility.post(notification: UIAccessibility.Notification.layoutChanged,
                         argument: myLabel)
}
</code></pre>
### Lien
- [`accessibilityLanguage`](https://developer.apple.com/documentation/objectivec/nsobject/1615192-accessibilitylanguage)

## Modifier la zone de focus de <span lang="en">VoiceOver</span>
### Description
Dans le cas d’objet modifié dynamiquement ou d’élément ne dérivant pas de `UIView`, il est possible de déterminer la zone géographique d’accessibilité de cet élément, c’est-à-dire la zone que <span lang="en">VoiceOver</span> met en surbrillance lors du focus.  

- **accessibilityFrame**&nbsp;: permet de définir cette zone via un rectangle (`CGRect`).
</br>Par défaut pour un élément dérivant de `UIView`, cette zone est la partie «&nbsp;visible&nbsp;» de la vue.
- **accessibilityPath**&nbsp;: équivalent à `accessibilityFrame` mais permet de définir la zone via des courbes de Bézier.
<a name="AccessibilityActivationPoint"></a>
- **accessibilityActivationPoint**&nbsp;: définit un point de contact au sein de la `frame` dont l'action résultante sera activée par une sélection classique d'élément via un double tap.
</br> Par défaut, ce point se trouve au centre de la `frame` mais on peut le définir n'importe à l'intérieur de cette dernière, l'idée étant de pouvoir activer un élement facilement lors d'un [regroupement par exemple](#ActivationPointExemple).
</br><img alt="" style="max-width: 350px; height: auto; " src="./images/iOSdev/ModifierLaZoneDeFocus_2.png" />
</br> En conservant la valeur par défaut de ce point, on peut aisément se retrouver dans une situation où on active involontairement l'élément situé au milieu de la `frame` uniquement en activant le regroupement créé.
### Exemple
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
### Liens
- [`accessibilityFrame`](https://developer.apple.com/documentation/uikit/uiaccessibilityelement/1619579-accessibilityframe)
- [`accessibilityPath`](https://developer.apple.com/documentation/objectivec/nsobject/1615159-accessibilitypath)
- [`accessibilityActivationPoint`](https://developer.apple.com/documentation/objectivec/nsobject/1615179-accessibilityactivationpoint)

## Grouper des éléments
### Description
On peut envisager de grouper des éléments pour vocaliser en une seule fois l'ensemble formé et associer au groupe ainsi créé une action dédiée par exemple.
</br>Dès lors, les éléments encapsulés ne doivent plus être considérés comme accessibles car seul leur conteneur doit être perçu comme tel.
</br></br>
### Exemple 1
Nous avons un 'label' et un 'switch control' que nous souhaitons regrouper et traiter d'un seul bloc.
</br>Dans ce cas, on va créer une vue qui va englober les éléments impactés puis implémenter une action qui va indiquer l'action à réaliser en cas d'activation de la zone par l'utilisateur.</br><img alt="" style="max-width: 700px; height: auto; " src="./images/iOSdev/GrouperDesElements_1.png" />
</br>Création de l'élément accessible qui va regrouper les éléments souhaités :
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
    
    //Création de la vue qui va encapsuler le 'label' et le 'Switch Control'.
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
        
        //Création de la vue qui va encapsuler le 'label' et le 'Switch Control'.
        let wrap = MyWrapView.init(with: myLabel,
                                   and: mySwitch)
        
        self.view.addSubview(wrap)
    }
}
</code></pre>

</br>... et implémentation de la classe utilisée pour définir de façon précise l'<a href="http://a11y-guidelines.orange.com/mobile/criteria-ios-wwdc-17215.html#DefaultActivation">action à associer au double tap d'activation</a> :
<pre><code class="objective-c">
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
</code></pre><pre><code class="swift">
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

<a name="ActivationPointExemple"></a>
### Exemple 2
Nous avons un 'label', un 'switch control' et un bouton que nous souhaitons regrouper en un seul bloc dont l'activation changera automatiquement l'état du 'switch control' sans avoir à définir une action comme précédemment.
</br>L'idée la plus simple consisterait à placer le 'switch control' au milieu de la nouvelle `frame` créée de façon à avoir son [accessibilityActivationPoint](#AccessibilityActivationPoint) directement dessus.
</br>Cela n'étant malheureusement pas toujours possible, il va donc falloir créer un élément accessible qui regroupera tous les objets impactés puis définir son **accessibilityActivationPoint** sur le 'switch control'.
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

Une autre possibilité de groupement d'éléments pourrait utiliser l’attribut **shouldGroupAccessibilityChildren**, booléen qui permet d’indiquer à <span lang="en">VoiceOver</span> qu’il doit grouper les enfants de la vue qui porte l’attribut.
</br>Cela permet notamment de faire des vocalisations uniques ou de définir un ordre de lecture <span lang="en">VoiceOver</span> particulier pour une partie de la page seulement (voir la section <a href="http://a11y-guidelines.orange.com/mobile/criteria-ios-dev.html#ordre-de-lecture">Ordre de lecture</a>).
### Liens
- [`accessibilityActivate`](https://developer.apple.com/documentation/objectivec/nsobject/1615165-accessibilityactivate)
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
    
    NSLog(@"SWITCH CONTROL est %@ et VOICE OVER est %@",
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
### Lien
Tous les événements sont disponibles sur la <a href="https://developer.apple.com/documentation/uikit/accessibility/notification_names?language=objc">documentation officielle d'Apple</a>.

## Taille des textes
### Description
Depuis iOS7, il est possible de modifier dynamiquement la taille des textes d'une application à l’aide du paramétrage du téléphone.
</br><img alt="" style="max-width: 600px; height: auto; " src="./images/iOSdev/TailleDesTextes_1.png" />
</br>Quelques points sont néanmoins essentiels pour la bonne utilisation du <span lang="en">Dynamic Type</span> mis à disposition&nbsp;:
 - **Utiliser impérativement les styles de texte** proposés selon la version d'iOS avec laquelle l'application est développée.
 </br><img alt="" style="max-width: 400px; height: auto; " src="./images/iOSdev/TailleDesTextes_2.png" />
 - Utiliser la police système pour les textes de l’application afin de se faciliter grandement la tâche même si l'utilisation d'autres polices est devenue nettement plus aisée depuis l'arrivée de `UIFontMetrics` avec iOS11.
 <pre><code class="objective-c">
    __weak IBOutlet UILabel * fontHeadline;
    __weak IBOutlet UILabel * fontFootNote;
    
    //Utilisation de la font native.
    fontFootNote.font = [UIFont preferredFontForTextStyle:UIFontTextStyleHeadline];
    
    //Définition de la font pour le titre principal d'une page.
    UIFont * fontHead = [UIFont fontWithName:@"Chalkduster" size:30.0];
    UIFontMetrics * fontHeadMetrics = [[UIFontMetrics alloc]initForTextStyle:UIFontTextStyleHeadline];
    fontHeadline.font = [fontHeadMetrics scaledFontForFont:fontHead];
</code></pre><pre><code class="swift">
    @IBOutlet weak var fontHeadline: UILabel!
    @IBOutlet weak var fontFootNote: UILabel!
    
    //Utilisation de la police native.
    fontFootNote.font = .preferredFont(forTextStyle: .headline)
        
    //Définition personnalisée de la police pour le titre principal d'une page.
    let fontHead = UIFont(name: "Chalkduster", size: 30.0)
    let fontHeadMetrics = UIFontMetrics(forTextStyle: .headline)
    fontHeadline.font = fontHeadMetrics.scaledFont(for: fontHead!)
</code></pre>
 - Penser à écouter la notification **UIContentSizeCategoryDidChange** qui annonce le changement de la taille du texte à partir des paramètres du téléphone.
</br>Cette tâche est simplifiée depuis iOS10 où l'attribut **adjustsFontForContentSizeCategory** se charge de la mise à jour automatique de la nouvelle taille de la police système au sein de l'application (cet attribut ne peut s'appliquer aux polices personnalisées qu'avec l'utilisation de `UIFontMetrics` en iOS11).
</br>Il est aussi possible d'utiliser la méthode **traitCollectionDidChange** du protocole informel `UITraitEnvironment` qui sera automatiquement appelée dès qu'une modification concernant l'environnement de l'interface iOS surviendra *(class/content size, portrait/paysage)*.
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
                                           name: UIContentSizeCategory.didChangeNotification,
                                           object: nil)
    
    //Modification automatique de la taille de la police sans utiliser la notification.
    fontHeadline.adjustsFontForContentSizeCategory = true
    
    @objc func methodToBeCalled(notification: Notification) {

        //Il faut de nouveau affecter la police des éléments impactés lors du traitement de cette notification.
        fontFootNote.font = UIFont.preferredFont(forTextStyle: .footnote)
    }
</code></pre>
 - Ne pas oublier d'adapter les contraintes graphiques aux éléments susceptibles de voir leur taille modifiée en privilégiant l'utilisation de valeurs dynamiques.
 - Penser à adapter le [contraste des couleurs](./criteria-ios-conception.html#couleurs) à la taille de texte modifiée si nécessaire.
### Liens
- [<span lang="en">Dynamic Type</span> et styles de texte](https://developer.apple.com/design/human-interface-guidelines/ios/visual-design/typography/)
- [`UIContentSizeCategoryDidChange`](https://developer.apple.com/documentation/foundation/nsnotification.name/1622948-uicontentsizecategorydidchange)
- [`adjustsFontForContentSizeCategory`](https://developer.apple.com/documentation/uikit/uicontentsizecategoryadjusting/1771731-adjustsfontforcontentsizecategor?language=objc)

## Taille des éléments graphiques
### Description
Tout comme la taille des textes est adaptable selon les réglages d'accessibilité (voir <a href="http://a11y-guidelines.orange.com/mobile/criteria-ios-dev.html#taille-des-textes">la rubrique précédente</a>), la taille des images ainsi que celle des éléments d'une barre de tabulation ou d'outils l'est aussi mais **uniquement depuis iOS11 avec Xcode 9**.
</br></br>En suivant les différentes étapes ci-dessous, vous obtiendrez l'effet défini précédemment et présenté graphiquement en exemple à la fin de cette rubrique&nbsp;:
</br></br>1. Sous Xcode, importer l'image à grossir au format `pdf` à la résolution x1 dans le catalogue `xcassets`.
</br></br>2. Dans l'<span lang="en">Image Set</span> qui vient d'être créé, cocher la case `Preserve Vector Data` et spécifier `Single Scale` :
</br><img alt="" style="max-width: 700px; height: auto; " src="./images/iOSdev/TailleDesEltsGraphiques_4.png" />
</br></br>3. Si un <span lang="en">storyboard</span> est utilisé pour intégrer l'image, cocher `Adjusts Image Size` dans la partie <span lang="en">Image View</span>, sinon mettre à `true` la propriété `adjustsImageSizeForAccessibilityContentSizeCategory` de l'image si cette opération se fait de façon programmatique :
</br><img alt="" style="max-width: 350px; height: auto; " src="./images/iOSdev/TailleDesEltsGraphiques_5.png" />
</br></br>4. Si une **barre de tabulation** ou une **barre d'outils** est aussi à intégrer dans l'application, renouveler les 3 étapes précédentes pour chacune des images à utiliser en grossissement de l'onglet au milieu de l'écran puis associer l'image souhaitée aux différents éléments impactés :
</br><img alt="" style="max-width: 350px; height: auto; " src="./images/iOSdev/TailleDesEltsGraphiques_6.png" />
</br>**ATTENTION : s'assurer que les contraintes mises en place initialement permettent toujours un affichage cohérent et désiré après grossissement.**
### Exemple
De façon à pouvoir tester à la fois le grossissement des images et celui d'un onglet sélectionné, on crée une application contenant une barre de tabulations contenant 2 onglets dont seul le second nous intéresse et affiche l'image du logo Orange.
</br></br>Après modification du grossissement de texte dans les réglages (voir <a href="http://a11y-guidelines.orange.com/mobile/criteria-ios-dev.html#taille-des-textes">la rubrique précédente</a>), on revient dans l'application pour constater :
- Une taille de l'image Orange nettement plus conséquente.
- Au milieu de l'écran, l'affichage grossi de l'onglet sur lequel on doit appuyer de façon continue pour provoquer cettte apparition.
</br><img alt="" style="max-width: 1200px; height: auto; " src="./images/iOSdev/TailleDesEltsGraphiques_9.png" />
### Lien
- [`adjustsImageSizeForAccessibilityContentSizeCategory`](https://developer.apple.com/documentation/uikit/uiaccessibilitycontentsizecategoryimageadjusting/2890929-adjustsimagesizeforaccessibility)
 
## Ordre de lecture
### Description
Redéfinir l’ordre de lecture pour <span lang="en">VoiceOver</span> s’effectue en respectant le protocole **UIAccessibilityContainer**.
</br>L’idée est d’avoir un tableau des éléments de la vue qui définit l’ordre de lecture des éléments.
</br>Il est bien souvent nécessaire d’utiliser l’attribut **shouldGroupAccessibilityElement** afin d’avoir un ordre précis mais pour une partie seulement de la vue (le reste étant l’ordre naturel de lecture proposé par <span lang="en">VoiceOver</span>).
### Exemple
Le meilleur exemple pour illustrer cette fonctionnalité est le clavier pour lequel les touches sucessives ne suivent pas forcément l'ordre natif proposé par <span lang="en">VoiceOver</span>.
</br>Dans cet exemple, on veut l'ordre suivant : 1, 2, 3, 4, 7, 6, 8, 9, 5.
</br>On crée  les 2 vues grise et bleue au sein desquelles on incorpore les chiffres appropriés comme défini ci-dessous :
</br><img alt="affichage des vues grise et bleue pour l'exemple" style="max-width: 500px; height: auto; " src="./images/iOSdev/OrdreDeLecture_1.png" />
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

## Date, heure et nombres
### Description
La lecture des date, heure et nombres n'est pas compliquée mais peut très vite devenir un réel casse-tête avec <span lang="en">VoiceOver</span>&nbsp;.
#### Lecture des dates et des heures
Si on met directement sous forme de texte la date ou l'heure dans le `label`, on s'aperçoit rapidement que le rendu n'est pas naturel à l'écoute.
</br><img alt="" style="max-width: 800px; height: auto; " src="./images/iOSdev/DateHeureNombres_10.png" />
</br>Il faut absolument formater les données en entrée pour obtenir une vocalisation descriptive naturelle et compréhensible.
</br><img alt="" style="max-width: 800px; height: auto; " src="./images/iOSdev/DateHeureNombres_4.png" />
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
#### Lecture des nombres
En indiquant la valeur d'un nombre directement dans le texte d'un `label`, la vocalisation se fera sur chacun des chiffres présentés rendant la véritable valeur du nombre difficile à deviner.
</br><img alt="" style="max-width: 500px; height: auto; " src="./images/iOSdev/DateHeureNombres_8.png" />
</br>Comme pour les date et heure, il faut formater la donnée en entrée pour qu'elle puisse être analysée et vocalisée selon la véritable valeur du nombre qu'elle représente.
</br><img alt="" style="max-width: 700px; height: auto; " src="./images/iOSdev/DateHeureNombres_5.png" />
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
#### Lecture des numéros de téléphone
La problématique liée à la vocalisation d'un numéro de téléphone est identique à celle des nombres puisqu'elle s'appuie entièrement sur le formatage à appliquer avec une prise en compte particulière des chiffres "0".
</br>L'exemple donné ci-dessous concerne la numérotation française avec une logique qui peut se décliner à n'importe quel type de format de numérotation.
</br><img alt="" style="max-width: 550px; height: auto; " src="./images/iOSdev/DateHeureNombres_11.png" />
</br>L'idée est de séparer chaque paire de chiffres par une virgule qui va fournir la ponctuation vocale.
</br><img alt="" style="max-width: 550px; height: auto; " src="./images/iOSdev/DateHeureNombres_6.png" />
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

### Liens
- [`UIAccessibilityContainer`](https://developer.apple.com/documentation/uikit/accessibility/uiaccessibilitycontainer?language=objc)
- [`shouldGroupAccessibilityChildren`](https://developer.apple.com/documentation/objectivec/nsobject/1615143-shouldgroupaccessibilitychildren)

## Contrôle de sélection
### Description
L'utilisation du contrôle de sélection s'articule autour du mode point et du mode élément définis ci-dessous.
</br><img alt="modes point et élément pour le contrôle de sélection" style="max-width: 700px; height: auto; " src="./images/iOSdev/ControlesDeSelection.png" />
</br>La sélection des éléments avec le mode élément fonctionne globalement bien quand les éléments proposés sont natifs et que l'application n'est pas trop compliquée graphiquement.
</br>Il peut très bien arriver que ce mode de sélection ne suive pas la logique souhaitée et ne propose pas les éléments dans l'ordre désiré.
#### Personnalisation du mode élément
La structure utilisée pour l'exemple est présentée ci-dessous grâce à l'<span lang="en">InterfaceBuilder</span> de Xcode :
</br><img alt="exemple de l'interface graphique de xcode" style="max-width: 700px; height: auto; " src="./images/iOSdev/ControleDeSelectionIB_1.png" />
</br>Afin de personnaliser la sélection de ces éléments, on souhaite :
- Créer 2 groupes {Test_1 + Test_2 ; Btn 5 + Btn 6} sélectionnables en mode élément.
- Avoir uniquement les éléments restants Btn 1 et Btn 2 accessibles séparément.

<pre><code class="objective-c">
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
</code></pre><pre><code class="swift">
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

        let testWrap = UIAccessibilityElement(accessibilityContainer: self.view)

        testWrap.isAccessibilityElement = false
        testWrap.accessibilityFrame = testWrapFrame!
        testWrap.accessibilityNavigationStyle = .combined   //Property specifique au contrôle de sélection.
        testWrap.accessibilityElements = [testOneButton!, testTwoButton!]


        //Création du second groupe 'secondGroup' en SÉPARANT les boutons 1 et 2.
        let secondGroupRect = btn1.frame.union(btn2.frame)
        let secondGroupFrame = btnsParentView.convert(secondGroupRect,
                                                      to: self.view)
        let secondGroup = UIAccessibilityElement(accessibilityContainer: btnsParentView)

        secondGroup.isAccessibilityElement = false
        secondGroup.accessibilityFrame = secondGroupFrame
        secondGroup.accessibilityNavigationStyle = .separate
        secondGroup.accessibilityElements = [btn1, btn2]


        //Création du troisième groupe 'thirdGroup' en COMBINANT les boutons 5 et 6.
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

</br>Le rendu de ce code est visualisable ci-dessous :
</br><img alt="rendu final avec le code implémenté" style="max-width: 1100px; height: auto; " src="./images/iOSdev/ControleDeSelection_1.png" />
</br>Les groupes créés permettent d'accéder directement aux éléments qu'ils contiennent dès qu'ils sont activés.
### Lien
- [`accessibilityNavigationStyle`](https://developer.apple.com/documentation/objectivec/nsobject/1615200-accessibilitynavigationstyle)

## Valeurs continûment ajustables
### Description
Des éléments graphiques comme le `picker`, le `stepper` ou encore le `slider` permettent de changer de façon continue la valeur qu'ils proposent de modifier.
</br><img alt="" style="max-width: 700px; height: auto; " src="./images/iOSdev/ValeursAjustables_1.png" />
</br>Quand on ne voit pas la modification dynamique se faire ou qu'on n'en est pas informé vocalement, il devient très compliqué de pouvoir se rendre compte de ce qui se passe.
</br>La méthodologie utilisée pour solutionner cette problématique pour une personne non voyante utilisant <span lang="en">VoiceOver</span> reste la même pour ces trois éléments, c'est pourquoi seul le cas du `stepper` sera traité.
</br></br>L'implémentation de cet objet graphique est relativement simple mais son utilisation avec VoiceOver requiert quelques ajustements pour obtenir un meilleur parcours utilisateur.
</br>Si on crée un <span lang="en">stepper</span> auquel on ajoute un `label` pour afficher sa valeur, on obtient le résultat suivant :
</br><img alt="exemple de stepper sans une bonne implémentation" style="max-width: 900px; height: auto; " src="./images/iOSdev/ValeursAjustables_2.png" />
</br>À partir de là, on s'aperçoit que le focus doit être déplacé pour :
- Atteindre chacun des deux éléments permettant d'augmenter ou de diminuer la valeur.
- Connaître la valeur obtenue via le `label`.

De plus, il n'y a aucune indication de changement de la valeur en temps réel.
</br>Certes, rien n'est bloquant mais, si l'on souhaite réellement mettre en place cet objet avec un rendu le plus fluide possible, ces quelques remarques conduisent tout naturellement à concevoir différemment cet exemple pourtant si simple.
</br></br>L'idée est de pouvoir changer la valeur du <span lang="en">stepper</span>, être informé de son changement et d'en connaître la valeur par le biais d'un unique objet.
</br>Il faut donc **regrouper le <span lang="en">stepper</span> et le `label`** *(à l'aide d'une <span lang="en">StackView</span> par exemple)* puis associer **`UIAccessibilityTraitAdjustable`** à ce nouveau groupe accessible.
</br>Ce nouveau `trait` va permettre de modifier de façon continue la valeur de l'objet auquel il est associé en implémentant **OBLIGATOIREMENT** les méthodes `accessibilityIncrement()` et `accessibilityDecrement()`.
</br></br>On élimine ainsi toutes les contraintes rencontrées initialement et on obtient, en plus, un `hint` lié à ce nouveau `trait` qui indique la manipulation nécessaire au bon fonctionnement.
</br><img alt="" style="max-width: 1000px; height: auto; " src="./images/iOSdev/ValeursAjustables_3.png" />
- Pour aboutir à ce résultat, on définit tout d'abord une classe conteneur {<span lang="en">stepper</span> + `label`} qui va permettre la délégation pour la modification ultérieure de la valeur.

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
@end
NS_ASSUME_NONNULL_END
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

- Ensuite, il faut redéfinir les 2 méthodes du protocole implémenté pour indiquer ce qu'elles doivent réaliser avant de mettre à jour la valeur modifiée et de la présenter vocalement dans le <span lang="en">ViewController</span>.

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
</code></pre><pre><code class="swift">
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
### Lien
- [`UIAccessibilityTraitAdjustable`](https://developer.apple.com/documentation/uikit/uiaccessibilitytraitadjustable)

## Actions personnalisées
### Description
Certaines manipulations basiques peuvent devenir un vrai casse-tête pour se fondre dans une navigation sereine avec VoiceOver et se transformer en éléments parfaitement accessibles.
</br>Un exemple probant est celui du mail iOS natif qui permet d'accéder à un ensemble d'actions comme le montre le schéma suivant :
</br><img alt="accès aux actions d'un mail sans voiceover avec un balayage gauche" style="max-width: 900px; height: auto; " src="./images/iOSdev/Actions_1.png" />
</br>La gestuelle utilisée graphiquement ne peut convenir à VoiceOver : un balayage vers la gauche sélectionnerait l'élément accessible suivant au lieu de proposer les choix avancés dans l'exemple précédent.
</br></br>Une solution consiste à **associer à l'élément sélectionné un tableau d'actions** dont le système se chargera d'indiquer automatiquement la présence en informant vocalement l'utilisateur de leur disponibilité.
</br><img alt="" style="max-width: 900px; height: auto; " src="./images/iOSdev/Actions_2.png" />

<pre><code class="objective-c">
@interface ViewController ()

@property (weak, nonatomic) IBOutlet UILabel * persoElt;

@end


@implementation ViewController
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
</code></pre><pre><code class="swift">
class ViewController: UIViewController {
    
    @IBOutlet weak var persoElt: UILabel!
    
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        let a11yOptionsAction = UIAccessibilityCustomAction(name: "options",
                                                            target: self,
                                                            selector: #selector(optionsAction))
        
        let a11yDrapeauAction = UIAccessibilityCustomAction(name: "drapeau",
                                                            target: self,
                                                            selector: #selector(drapeauAction))
        
        let a11yCorbeilleAction = UIAccessibilityCustomAction(name: "corbeille",
                                                              target: self,
                                                              selector: #selector(corbeilleAction))
        
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
    
    @objc func corbeilleAction() -> Bool {
        //Code à implémenter pour cette action.
        return true
    }
}
</code></pre>

</br>Le code implémenté ci-dessus permet d'obtenir le résultat suivant par balayages successifs sur l'élément accessible utilisé :
</br><img alt="accès aux actions avec voiceover en utilisant un balayage vers le haut" style="max-width: 900px; height: auto; " src="./images/iOSdev/Actions_3.png" />

### Liens
- [`accessibilityCustomActions`](https://developer.apple.com/documentation/objectivec/nsobject/1615150-accessibilitycustomactions)
- [`UIAccessibilityCustomAction`](https://developer.apple.com/documentation/uikit/uiaccessibilitycustomaction)

## Focus d'un élément
### Description
Le protocole informel **UIAccessibilityFocus** fournit des éléments de programmation efficaces de façon à pouvoir être informé d'une sélection passé, active ou à venir d'un élément accessible :
- **accessibilityElementDidBecomeFocused** : méthode appelée dès que l'élément accessible est sélectionné.
- **accessibilityElementDidLoseFocus** : méthode appelée dès que l'élément accessible perd le focus.
- **accessibilityElementIsFocused** : valeur booléenne qui permet de savoir si un élément accessible est sélectionné.

Attention, ces méthodes ne sont pas appelées au sein d'un contrôleur de vue si un de ses élements accessibles est sélectionné mais uniquemnet si elles sont implémentées sur l'élément accessible lui-même.
</br>Cette erreur à laquelle on ne pense pas de prime abord provient du caractère informel du protocole **UIAccessibilityFocus** dont les éléments peuvent subir un <span lang="en">override</span> sur tout objet héritant de NSObject même s'il n'est pas accessible... comme un contrôleur de vue par exemple.
</br></br>L'exemple de code ci-dessous permet de suivre le focus d'un élément accessible identifié par son `accessibleIdentifier`.
<pre><code class="objective-c">
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
</code></pre><pre><code class="swift">
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

### Lien
- [`UIAccessibilityFocus`](https://developer.apple.com/documentation/uikit/accessibility/uiaccessibilityfocus)

## Rotor personnalisé
### Description
Depuis iOS10, il est possible d'ajouter une action spécifique au rotor de <span lang="en">VoiceOver</span> en s'appuyant sur l'objet **UIAccessibilityCustomRotor** dont la construction prend en compte 2 éléments principaux en entrée :
- **UIAccessibilityCustomRotorSearchPredicate** : définit la logique à mettre en oeuvre selon le type de balayage effectué sur l'écran.
- **UIAccessibilityCustomRotorItemResult** : correspond à l'élément issu de la logique précedente.

<img alt="" style="max-width: 700px; height: auto; " src="./images/iOSdev/CustomRotor_1.png" />
</br></br>Le code fourni ci-dessous permet de compter et d'afficher le nombre de balayages haut et bas *(finalité inutile avec le rotor mais qui permet de mettre en avant sa création programmatique)*.
<pre><code class="objective-c">
@interface ViewController ()

@property (weak, nonatomic) IBOutlet UILabel * rotorTitle;
@property (weak, nonatomic) IBOutlet UILabel * upLabel;
@property (weak, nonatomic) IBOutlet UILabel * downLabel;

@end


@implementation ViewController

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
class ViewController: UIViewController {
    
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
                                                    
                                                    if (predicate.searchDirection == UIAccessibilityCustomRotorDirection.next) {
                                                        
                                                        ViewController.flicksDown += 1
                                                        self.downLabel.text = String(ViewController.flicksDown)
                                                        
                                                    } else {
                                                        
                                                        ViewController.flicksUp += 1
                                                        self.upLabel.text = String(ViewController.flicksUp)
                                                    }
                                                    
                                                    return UIAccessibilityCustomRotorItemResult.init(targetElement:self.rotorTitle,
                                                                                                     targetRange: nil)
        })
    }
}
</code></pre>

</br>Le code implémenté ci-dessus permet d'obtenir le résultat suivant :
</br><img alt="affichage modifié avec une action du rotor" style="max-width: 1200px; height: auto; " src="./images/iOSdev/CustomRotor_2.png" />
</br>L'utilisation d'un rotor personnalisé n'est pas du tout naturelle au sein d'une application, c'est pourquoi il est primordial de **bien annoncer son fonctionnement et sa finalité** pour faciliter au maximum l'expérience utilisateur.
</br></br>La majeure différence du rotor avec les actions personnalisées ou encore les valeurs continûment ajustables réside dans sa possible utilisation quel que soit l'élément sélectionné sur l'écran.
</br>Cependant, si l'élément sélectionné est `ajustable` ou contient des actions personnalisées, **ses actions prévaudront sur celles du rotor**.
</br></br>L'implémentation d'une telle fonctionnalité au sein d'une application est donc à envisager selon des **besoins bien spécifiques** dont le seul objectif doit être de **faciliter l'expérience utilisateur**.
### Liens
- [`UIAccessibilityCustomRotor`](https://developer.apple.com/documentation/uikit/uiaccessibilitycustomrotor)
- [`UIAccessibilityCustomRotorItemResult`](https://developer.apple.com/documentation/uikit/uiaccessibilitycustomrotoritemresult)
- [`UIAccessibilityCustomRotorSearchPredicate`](https://developer.apple.com/documentation/uikit/uiaccessibilitycustomrotorsearchpredicate)

<!--  This file is part of a11y-guidelines | Our vision of mobile & web accessibility guidelines and best practices, with valid/invalid examples.
 Copyright (C) 2016  Orange SA
 See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). -->