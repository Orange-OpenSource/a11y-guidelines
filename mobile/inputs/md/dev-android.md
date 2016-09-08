# Guide d'accessibilité Android

<script>$(document).ready(function () {
    
    setBreadcrumb([{"label":"Guide développeur", "url": "./dev-mobile.html"},
        {"label":"Guide développeur Android"}
	]);
    addSubMenu();
    
});</script>

<span data-menuitem="dev-mobile"></span>

Ce guide a pour objectif de présenter les différentes options d'accessibilité du SDK Android. A travers différentes catégories, ce guide explique comment utiliser les attributs et méthodes d'accessibilité et propose des liens vers la documentation officielle de Google. Des exemples de codes sont aussi présents pour illustrer les propos.

## Alternatives textuelles
**Description : **  

Sous Android, la vocalisation d'un élément s'effectue à travers un attribut, à savoir le `contentDescription`. Cet attribut qui accepte une simple chaîne de caractère en paramètre (et donc internationalisable) redéfinit complètement le texte qui sera lu par le service d'accessibilité et notamment TalkBack. Cela permet d'avoir un texte de composant plus explicite que celui affiché à l'écran. Par exemple, dans le cas d'un bouton dont le titre est « OK », on pourra indiquer que le bouton sert à valider un choix.  

Le `contentDescription` doit aussi être utilisé sur les éléments custom pour indiquer leur nature. Par exemple, un `LinearLayout` que l'on rendrait cliquable doit avoir un `contentDescription` type « nom_du_bouton, bouton » (il faut également permettre le focus du bouton à l'accessibilité, voir la section correspondante).  

A noter que le `contentDescription` est disponible sous tout élément qui hérite de `View`. Il est donc possible de positionner un `contentDescription` sur une `TextView` par exemple, comme montré dans la section « guide d'accessibilité – alternative textuelle – abréviations, dates et heures ».  
 
**Exemples : **   

Exemple simple (internationalisé) :  
`myTextView.setContentDescription(getString(R.string.criteria_alt_ex1_cd_txt2));`

Indiquer l'état et la nature de TabHost (non internationalisé) :  
<pre><code>private class TabHostListener implements TabHost.OnTabChangeListener {
	[...]
	public void onTabChanged(String tabId) {setContentDescription(mTabHost, mTabsLabel);}
}

private void setContentDescription(TabHost mTabHost, String[] mTabsLabel) {
	int tab = mTabHost.getCurrentTab();
	int tabCount = mTabHost.getTabWidget().getTabCount();

	for (int tabNumber = 0; tabNumber < tabCount; tabNumber++) {
		CharSequence contentDescription = mTabsLabel[tabNumber];

		contentDescription = contentDescription + ", onglet " + (tabNumber + 1) + " sur " + tabCount;
		if (tabNumber == tab) {
			contentDescription = contentDescription + ", sélectionné";
		}
		mTabHost.getTabWidget().getChildAt(tabNumber).setContentDescription(contentDescription);
	}
}</code></pre>

**Lien : **

- [contentDescription](http://developer.android.com/reference/android/view/View.html#attr_android:contentDescription)

  
## Masquer des éléments à l'accessibilité  

**Description : **  

Il est possible via un attribut d'accessibilité de masquer des éléments aux outils d'accessibilité (TalkBack par exemple). Par extension, il est possible de forcer certains éléments à être visible aux outils d'accessibilité.  
`ImportantForAccessibility` : suivant la valeur de l'attribut, cela permet d'indiquer qu'un élément est visible ou non de l'API d'accessibilité.  
-	`auto` (0) : valeur par défaut, c'est le système qui décide. Par exemple, un `Button` aura sa valeur par défaut à 1 (<i>yes</i>) et un `LinearLayout` à 2 (<i>no</i>).
-	`yes` (1) : la vue est importante pour l'accessibilité. Elle peut par exemple recevoir le focus de TalkBack.
-	`no`(2) : la vue n'est pas importante pour l'accessibilité. Elle ne déclenche plus d'évènement d'accessibilité et est par conséquent ignorée par des services tel que TalkBack.
-	`noHideDescendants`  (4) : la vue n'est pas importante pour l'accessibilité, mais également toutes ses vues filles. Cela permet de cacher tous les éléments d'une vue à l'accessibilité en une seule fois. Très utile sur les éléments custom.  
  
A noter : l'attribut « `importantForAccessibility` » est disponible pour tout élément qui hérite de `View`.

**Exemples : **

Depuis le xml : 
`android:importantForAccessibility="no"`

Depuis le code :
`myView.setImportantForAccessibility(View.IMPORTANT_FOR_ACCESSIBILITY_NO_HIDE_DESCENDANTS);`

**Lien : **     

- [importantForAccessibility](https://developer.android.com/reference/android/view/View.html#setImportantForAccessibility%28int%29)


## Déclencher une vocalisation

**Description : **  

Il est très facile de déclencher des vocalisations avec TalkBack. Déclencher une vocalisation est très utile dans le cas de contenu dynamique, au même titre que les `LiveRegion` (voir la section correspondante). Pour déclencher une vocalisation, il suffit de faire appel à la méthode `announceForAccessibility` en lui passant en paramètre l'id de la chaine de caractère à vocaliser.  

A noter : la méthode `announceForAccessibility` est disponible sur tout élément qui hérite de `View` et se fait dans la langue du système.

Attention: nous parlons ici de vocalisation TalkBack et non pas de TTS (Text To Speech) qui peut fonctionner indépendamment du statut de TalkBack.

**Exemple : **

Il est fréquent de tester la version d'Android avant de déclencher une vocalisation TalkBack. En effet, `announceForAccessibility` ne fonctionne que depuis l'arrivée d'Android Jelly Bean.
<pre><code>if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.JELLY_BEAN) {
	getView().announceForAccessibility(getString(R.string.criteria_contentchange_ex1_announce));
}</code></pre>

**Lien : **

- [announceForAccessibility](https://developer.android.com/reference/android/view/View.html#announceForAccessibility%28java.lang.CharSequence%29)


## Détecter si TalkBack est activé

**Description : ** 

Sous Android, il est possible de savoir si l'API d'accessibilité est activée, et par extension de savoir si TalkBack est activé.

**A l'usage : ** 

<pre><code>AccessibilityManager am = (AccessibilityManager) context.getSystemService(ACCESSIBILITY_SERVICE);  
boolean isAccessibilityEnabled = am.isEnabled();</code></pre>


## Régions Live (contenu dynamique)

**Description : **

Il est possible de spécifier à une vue qu'elle est une région « live », c'est-à-dire que son contenu est susceptible d'être modifié dynamiquement et qu'elle doit dans ce cas prévenir l'API d'accessibilité. Cela aura pour conséquence de générer des vocalisations avec TalkBack. Un exemple type d'utilisation : sur un formulaire, si l'utilisateur fait une erreur et qu'un message d'erreur apparaît, la vue contenant le message doit être définie comme une région « live ».

Il faut passer par la méthode `setAccessibilityLiveRegion` qui prend en paramètre un mode pour la région live. Il existe 3 modes :  
-	`ACCESSIBILITY_LIVE_REGION_NONE` : cette vue n'est pas une région « live ». C'est la valeur par défaut de la plupart des vues.
-	`ACCESSIBILITY_LIVE_REGION_POLITE` : en cas de changement dans la vue, des vocalisations sont effectuées sur les changements. Ces vocalisations sont « polies » : elles sont moins prioritaires que les vocalisations système par exemple.
-	`ACCESSIBILITY_LIVE_REGION_ASSERTIVE` : en cas de changement dans la vue, des vocalisations seront effectuées sur les changements. Ces vocalisations sont « rudes » : elles sont prioritaires et immédiatement vocalisées.  

A noter : la méthode `setAccessibilityLiveRegion` est disponible sur tout élément qui hérite de `View`.

**Exemples : **

<pre><code>&lt;TextView
   [...]
   android:accessibilityLiveRegion="polite" /&gt;</code></pre>

**Lien : **

- [setAccessibilityLiveRegion](https://developer.android.com/reference/android/view/View.html#setAccessibilityLiveRegion%28int%29)


## Gérer l'ordre de lecture (TalkBack)

**Description : **  

L'ordre du focus de la synthèse vocale par défaut prend en compte plusieurs paramètres : la lecture « logique », (en France) soit de gauche à droite et de haut en bas, et la lecture du xml (ordre de déclaration des éléments). Il est tout à fait possible de redéfinir cet ordre de lecture avec deux outils :  
-	`accessibilityTraversalAfter` : prend un id en paramètre et permet de spécifier à la vue qu'elle doit être décrite par l'accessibilité après la vue passée en paramètre.
- `accessibilityTraversalBefore` : prend un id en paramètre et permet de spécifier à la vue qu'elle doit être décrite par l'accessibilité avant la vue passée en paramètre.

A noter : ces attributs peuvent être utilisés directement dans le xml mais également dans le code via les méthodes `setAccessibilityTraversalAfter` et `setAccessibilityTraversalBefore`. Ces méthodes sont disponibles pour tout élément qui hérite de `View`.

**Exemple : ** 

<pre><code>volupButton.setAccessibilityTraversalAfter(myView.findViewById(R.id.remote0).getId());
voldownButton.setAccessibilityTraversalAfter(myView.findViewById(R.id.volup).getId());
chaineplusButton.setAccessibilityTraversalAfter(myView.findViewById(R.id.voldown).getId());
chainemoinsButton.setAccessibilityTraversalAfter(myView.findViewById(R.id.chaineplus).getId());</code></pre>

**Liens : **      

- [setAccessibilityTraversalAfter](https://developer.android.com/reference/android/view/View.html#setAccessibilityTraversalAfter%28int%29)
- [setAccessibilityTraversalBefore](https://developer.android.com/reference/android/view/View.html#setAccessibilityTraversalBefore%28int%29)


## Formulaires

**Description : **  

Il est important que les champs de formulaire soient liés à un label. Il existe 2 grandes techniques pour réaliser cette liaison :
-	`labelFor` : permet de spécifier à une vue qu'elle est le label d'une autre vue. Cette méthode prend en paramètre l'id de la vue que l'on labellise. On peut utiliser cette méthode avec quasiment tout type de champ de formulaire. Utilisable depuis le xml `android:labelFor` ou le code `setLabelFor`. `LabelFor` est utilisable depuis tout élément qui hérite de `View`.
- `hint` : pour les `EditText` ou `TextView`. Permet d'ajouter un texte d'exemple quand le champ de texte est vide. Cette méthode ne marche que pour les `TextView`. Prend en paramètre l'id d'une chaîne de caractère. Utilisable depuis le xml `android:hint` ou le code `setHint`.

**Exemples : **

LabelFor dans le xml : 
<pre><code>&lt;TextView
	[...]
  android:labelFor="@+id/imageView11"
  android:importantForAccessibility="no" /&gt;</code></pre>
	Remarque : il est très fréquent, une fois le label lié à son champ, de masquer le label à l'accessibilité. En effet, celui ci n'a plus besoin d'être reconnu par l'api d'accessibilité car son champ de formulaire l'utilise déjà (et sera donc restitué vocalement par TalkBack par exemple).</br>
</br>
Hint dans le xml :
<pre><code>&lt;EditText
  [...]
   android:hint="@string/criteria_form_ex1_placeholder" /&gt;</code></pre>

**Liens : **

- [setLabelFor](https://developer.android.com/reference/android/view/View.html#setLabelFor%28int%29)
- [setHint](https://developer.android.com/reference/android/widget/TextView.html#setHint%28java.lang.CharSequence%29)


## Taille des textes

**Description : **  

Afin de permettre à l'option « grands caractères » d'interagir correctement avec l'application, plusieurs points sont à respecter durant les développements.
- Utiliser une taille de police dynamique : le « sp ». Cette unité, spécifique à Android, permet d'obtenir une taille de police en fonction de la densité de pixel de l'écran. Il est plus que recommandé de l'utiliser, ne serait-ce que pour obtenir un design uniforme sur tous les types de device Android.
- Gérer les débordements de contenu : une erreur courante est d'utiliser une taille de texte dynamique (« sp » donc) mais de ne pas faire attention au conteneur. Si le texte grossit, le conteneur doit en faire autant pour ne pas qu'il y ait de débordement. On peut parfaitement jouer avec le `min-height` et le `height` des conteneurs pour obtenir un résultat correct (un `height` en `wrap_content` permet de laisser au système le soin de s'adapter).

**Lien : **

- [typographie sous Android](https://www.google.com/design/spec/style/typography.html#typography-styles)
  


## Evénements d'accessibilité & custom views

**Description : ** 

Il existe sous Android un bon nombre d'événements liés à l'API d'accessibilité. Vous pouvez manipuler ces événements au même titre que d'autres événements. Ils permettent d'enrichir des composants custom insuffisamment accessibles. L'utilisation des événements d'accessibilité est assez rare dans les applications non dédiées à l'accessibilité, les autres options étant généralement suffisantes. Cependant, il faut savoir qu'ils existent et permettent de surcharger la vocalisation d'un composant.  

Pour plus d'informations, nous vous invitons à regarder les liens ci-dessous.

**Exemple : **

Dans cet exemple, on intercepte les événements d'accessibilité. En fonction de leur type (un texte à changé dans la vue ou le composant est focus par TalkBack), nous construisons une vocalisation à destination de TalkBack.
<pre><code>@Override
@TargetApi(Build.VERSION_CODES.ICE_CREAM_SANDWICH)
public boolean dispatchPopulateAccessibilityEvent(AccessibilityEvent event) {

  boolean result = super.dispatchPopulateAccessibilityEvent(event);

  // Detect what type of accessibility event is being passed in.
  int eventType = event.getEventType();

  // Common case: The user has interacted with our view in some way. State may or may not have been changed. Read out the current status of the view.
  if (eventType == AccessibilityEvent.TYPE_VIEW_TEXT_CHANGED) {
    event.getText().clear();
    event.getText().add("Valeur de la cagnotte : " + getBankValue() + ".");
    result = true;
  }

  // When a user first focuses on our view, we'll also read out some simple instructions to make it clear that this is an interactive element.
  if (eventType == AccessibilityEvent.TYPE_VIEW_ACCESSIBILITY_FOCUSED) {
    event.getText().add("Cliquez pour lancer la roue et augmenter vos gains.");
    result = true;
  }

  return result;
}</code></pre>

**Liens : **

- [AccessibilityEvents](http://developer.android.com/reference/android/view/accessibility/AccessibilityEvent.html)
- [Construire une vue custom accessible](http://developer.android.com/guide/topics/ui/accessibility/apps.html#custom-views)
  

## WebView

**Description : ** 

Les `WebView` ont un traitement un peu particulier sous Android. Pour commencer, si on veut qu'une page soit accessible, il faut que le contenu HTML le soit, à savoir qu'il respecte les normes internationales sur le sujet : les WCAG2. Pour connaitre ces règles et apprendre les techniques de développement pour un web accessible, nous vous invitons à visiter la section de notre site consacrée au sujet : [recommandations accessibilité pour le web](../web/index.html).  

Côté Android, il faut s'assurer que la WebView autorise le JavaScript : `mWebView.getSettings.setJavaScriptEnabled(true);`  
Dans ces conditions, la page affichée à travers la `WebView`  réagit convenablement à l'API d'accessibilité. 


## Vocalisation des listes

**Description : ** 

Il arrive parfois que les listes soient mal vocalisées : la synthèse vocale tente de vocaliser toute la liste en une seule fois (au moins ce qui est affiché à l'écran dans le cas de liste longue). C'est notamment le cas lorsque l'on utilise des `RecyclerView`. Pour palier à ce problème, une solution simple existe. Il suffit de positionner l'attribut `focusable` à `true` pour chaque item de la liste. Cela a pour effet de forcer la synthèse vocale (TalkBack) à lire les items un par un.


## Navigation au focus (clavier)

**Description : **

Pour gérer la navigation au focus, il faut s'assurer de 3 choses :
- Permettre le focus sur les éléments interactifs : la navigation au focus ne concerne que les éléments interactifs. Si, par exemple, votre application possède des vues custom cliquables, il faut s'assurer que ces vues soient focusables en positionnant l'attribut `focusable` à `true`.
- Gérer l'affichage du focus : tout élément interactif peut recevoir le focus, il faut donc que le `state_focused` soit défini et permette de distinguer d'un seul coup d'œil quel élément a le focus.
- Gérer l'ordre du focus : à travers les options `nextFocusDown, nextFocusUp, nextFocusRight` et `nextFocusLeft`, vous pouvez spécifier quelle vue doit prendre le focus selon l'utilisation des flèches bas, haut, droit et gauche.  

La plupart du temps, seuls les point 1 et 2 sont à prendre la compte. En effet, le système Android est capable de déterminer assez précisément les positions des éléments par rapport aux autres et donc de fournir un ordre de lecture au clavier logique et cohérent.

A noter : `nextFocusDown, nextFocusUp, nextFocusRight, nextFocusLeft, focusable` ainsi que d'autres options de gestion du focus sont accessibles directement dans le xml ou dans le code à travers les méthodes correspondantes.

**Exemple : **

Exemple de sélecteur pour TabHost qui prend en compte l'état `state_focused`
<pre><code>&lt;selector xmlns:android="http://schemas.android.com/apk/res/android"&gt;
	&lt;!-- Non focused states --&gt;
	&lt;item android:state_focused="false" android:state_selected="false" android:state_pressed="false" android:drawable="@drawable/tab_unselected_tab_selector" /&gt;
	&lt;item android:state_focused="false" android:state_selected="true"  android:state_pressed="false" android:drawable="@drawable/tab_selected_tab_selector" /&gt;

	&lt;!-- Focused states --&gt;
	&lt;item android:state_focused="true" android:state_selected="false" android:state_pressed="false" android:drawable="@drawable/tab_unselected_focused_tab_selector" /&gt;
	&lt;item android:state_focused="true" android:state_selected="true"  android:state_pressed="false" android:drawable="@drawable/tab_selected_focused_tab_selector" /&gt;

	&lt;!-- Pressed --&gt;
	&lt;!-- Non focused states --&gt;
	&lt;item android:state_focused="false" android:state_selected="false" android:state_pressed="true" android:drawable="@drawable/tab_unselected_pressed_tab_selector" /&gt;
	&lt;item android:state_focused="false" android:state_selected="true"  android:state_pressed="true" android:drawable="@drawable/tab_selected_pressed_tab_selector" /&gt;

	&lt;!-- Focused states --&gt;
	&lt;item android:state_focused="true" android:state_selected="false" android:state_pressed="true" android:drawable="@drawable/tab_unselected_pressed_tab_selector" /&gt;
	&lt;item android:state_focused="true" android:state_selected="true"  android:state_pressed="true" android:drawable="@drawable/tab_selected_pressed_tab_selector" /&gt;
&lt;/selector&gt;</code></pre>

**Lien : **

- [Gestion du focus sous Android](http://developer.android.com/guide/topics/ui/accessibility/apps.html#focus-nav)
<!--  This file is part of a11y-guidelines | Our vision of mobile & web accessibility guidelines and best practices, with valid/invalid examples.
 Copyright (C) 2016  Orange SA
 See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). -->