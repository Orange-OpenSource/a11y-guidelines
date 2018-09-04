# Les critères incontournables sous Android pour le développement

<script>$(document).ready(function () {
    
    setBreadcrumb([{"label":"Critères incontournables sous Android", "url": "./criteria-android.html"},
        {"label":"Pour le développement"}
	]);
    addSubMenu([
        {"label":"Pour la conception","url":"criteria-android-conception.html"}, 
        {"label":"Pour le développement","url":"criteria-android-dev.html", "expanded": true}
    ]);
});</script>

<span data-menuitem="criteria-android"></span>

Ce guide a pour objectif de présenter les différentes options d’accessibilité du SDK Android.  À travers différentes catégories, ce guide explique comment utiliser les attributs et méthodes d’accessibilité et propose des liens vers la documentation officielle de Google. Des exemples de codes sont aussi présents pour illustrer les propos.

## Alternatives textuelles
**Description&nbsp;: **  

Sous Android, la vocalisation d’un élément s’effectue à travers un attribut, à savoir le `contentDescription`. Cet attribut qui accepte une simple chaîne de caractère en paramètre (et donc internationalisable) redéfinit complètement le texte qui sera lu par le service d’accessibilité et notamment <span lang="en">TalkBack</span>. Cela permet d’avoir un texte de composant plus explicite que celui affiché à l’écran. Par exemple, dans le cas d’un bouton dont le titre est «&nbsp;OK&nbsp;», on pourra indiquer que le bouton sert à valider un choix.  

Le `contentDescription` doit aussi être utilisé sur les éléments <i lang="en">custom</i> pour indiquer leur nature. Par exemple, un `LinearLayout` que l’on rendrait cliquable doit avoir un `contentDescription` de la forme «&nbsp;nom_du_bouton, bouton&nbsp;» (il faut également permettre le focus du bouton pour l’accessibilité, voir la section correspondante).  

À noter que le `contentDescription` est disponible sous tout élément qui hérite de `View`. Il est donc possible de positionner un `contentDescription` sur une `TextView` par exemple, comme montré dans la section «&nbsp;guide d’accessibilité – alternative textuelle – abréviations, dates et heures&nbsp;».  
 
**Exemples&nbsp;: **   

Exemple simple (internationalisé)&nbsp;:  
`myTextView.setContentDescription(getString(R.string.criteria_alt_ex1_cd_txt2));`

Indiquer l’état et la nature de TabHost (non internationalisé)&nbsp;:  
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

**Lien&nbsp;: **

- [`contentDescription`](http://developer.android.com/reference/android/view/View.html#attr_android:contentDescription)

  
## Masquer des éléments à l’accessibilité  

**Description&nbsp;: **  

Il est possible via un attribut d’accessibilité de masquer des éléments aux outils d’accessibilité (<span lang="en">TalkBack</span> par exemple). Par extension, il est possible de forcer certains éléments à être visibles aux outils d’accessibilité.  
`ImportantForAccessibility`&nbsp;: suivant la valeur de l’attribut, cela permet d’indiquer qu’un élément est visible ou non de l’<abbr>API</abbr> d’accessibilité.  
-	`auto` (0)&nbsp;: valeur par défaut, c’est le système qui décide. Par exemple, un `Button` aura sa valeur par défaut à 1 (<i lang="en">yes</i>) et un `LinearLayout` à 2 (<i lang="en">no</i>).
-	`yes` (1)&nbsp;: la vue est importante pour l’accessibilité. Elle peut par exemple recevoir le focus de <span lang="en">TalkBack</span>.
-	`no`(2)&nbsp;: la vue n’est pas importante pour l’accessibilité. Elle ne déclenche plus d’événement d’accessibilité et est par conséquent ignorée par des services tel que <span lang="en">TalkBack</span>.
-	`noHideDescendants`  (4)&nbsp;: la vue n’est pas importante pour l’accessibilité, mais également toutes ses vues filles. Cela permet de cacher tous les éléments d’une vue à l’accessibilité en une seule fois. Très utile sur les éléments custom.  
  
À noter&nbsp;: l’attribut «&nbsp;`importantForAccessibility`&nbsp;» est disponible pour tout élément qui hérite de `View`.

**Exemples&nbsp;: **

Depuis le <abbr>xml</abbr>&nbsp;: 
`android:importantForAccessibility="no"`

Depuis le code&nbsp;:
`myView.setImportantForAccessibility(View.IMPORTANT_FOR_ACCESSIBILITY_NO_HIDE_DESCENDANTS);`

**Lien&nbsp;: **     

- [`importantForAccessibility`](https://developer.android.com/reference/android/view/View.html#setImportantForAccessibility%28int%29)


## Déclencher une vocalisation

**Description&nbsp;: **  

Il est très facile de déclencher des vocalisations avec <span lang="en">TalkBack</span>. Déclencher une vocalisation est très utile dans le cas de contenu dynamique, au même titre que les `LiveRegion` (voir la section correspondante). Pour déclencher une vocalisation, il suffit de faire appel à la méthode `announceForAccessibility` en lui passant en paramètre l’`id` de la chaîne de caractères à vocaliser.  

À noter&nbsp;: la méthode `announceForAccessibility` est disponible sur tout élément qui hérite de `View` et se fait dans la langue du système.

Attention: nous parlons ici de vocalisation <span lang="en">TalkBack</span> et non pas de <abbr>TTS</abbr> (Text To Speech) qui peut fonctionner indépendamment du statut de <span lang="en">TalkBack</span>.

**Exemple&nbsp;: **

Il est fréquent de tester la version d’Android avant de déclencher une vocalisation <span lang="en">TalkBack</span>. En effet, `announceForAccessibility` ne fonctionne que depuis l’arrivée d’Android <i lang="en">Jelly Bean</i>.
<pre><code>if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.JELLY_BEAN) {
	getView().announceForAccessibility(getString(R.string.criteria_contentchange_ex1_announce));
}</code></pre>

**Lien&nbsp;: **

- [`announceForAccessibility`](https://developer.android.com/reference/android/view/View.html#announceForAccessibility%28java.lang.CharSequence%29)


## Détecter si <span lang="en">TalkBack</span> est activé

**Description&nbsp;: ** 

Sous Android, il est possible de savoir si l’<abbr>API</abbr> d’accessibilité est activée, et par extension de savoir si <span lang="en">TalkBack</span> est activé.

**À l’usage&nbsp;: ** 

<pre><code>AccessibilityManager am = (AccessibilityManager) context.getSystemService(ACCESSIBILITY_SERVICE);  
boolean isAccessibilityEnabled = am.isEnabled();</code></pre>


## Régions <i lang="en">live</i> (contenu dynamique)

**Description&nbsp;: **

Il est possible de spécifier à une vue qu’elle est une région «&nbsp;<i lang="en">live</i>&nbsp;», c’est-à-dire que son contenu est susceptible d’être modifié dynamiquement et qu’elle doit dans ce cas prévenir l’<abbr>API</abbr> d’accessibilité. Cela aura pour conséquence de générer des vocalisations avec <span lang="en">TalkBack</span>. Un exemple type d’utilisation&nbsp;: sur un formulaire, si l’utilisateur fait une erreur et qu’un message d’erreur apparaît, la vue contenant le message doit être définie comme une région «&nbsp;<i lang="en">live</i>&nbsp;».

Il faut passer par la méthode `setAccessibilityLiveRegion` qui prend en paramètre un mode pour la région <i lang="en">live</i>. Il existe 3 modes&nbsp;:  
-	`ACCESSIBILITY_LIVE_REGION_NONE`&nbsp;: cette vue n’est pas une région «&nbsp;<i lang="en">live</i>&nbsp;». C’est la valeur par défaut de la plupart des vues.
-	`ACCESSIBILITY_LIVE_REGION_POLITE`&nbsp;: en cas de changement dans la vue, des vocalisations sont effectuées sur les changements. Ces vocalisations sont «&nbsp;polies&nbsp;»&nbsp;: elles sont moins prioritaires que les vocalisations système par exemple.
-	`ACCESSIBILITY_LIVE_REGION_ASSERTIVE`&nbsp;: en cas de changement dans la vue, des vocalisations seront effectuées sur les changements. Ces vocalisations sont «&nbsp;<i lang="en">rude</i>&nbsp;»&nbsp;: elles sont prioritaires et immédiatement vocalisées.  

À noter&nbsp;: la méthode `setAccessibilityLiveRegion` est disponible sur tout élément qui hérite de `View`.

**Exemples&nbsp;: **

<pre><code>&lt;TextView
   [...]
   android:accessibilityLiveRegion="polite" /&gt;</code></pre>

**Lien&nbsp;: **

- [`setAccessibilityLiveRegion`](https://developer.android.com/reference/android/view/View.html#setAccessibilityLiveRegion%28int%29)


## Gérer l’ordre de lecture (<span lang="en">TalkBack</span>)

**Description&nbsp;: **  

L’ordre du focus de la synthèse vocale par défaut prend en compte plusieurs paramètres&nbsp;: la lecture «&nbsp;logique&nbsp;», (en France) soit de gauche à droite et de haut en bas, et la lecture du <abbr>xml</abbr> (ordre de déclaration des éléments). Il est tout à fait possible de redéfinir cet ordre de lecture avec deux outils&nbsp;:  
-	`accessibilityTraversalAfter`&nbsp;: prend un id en paramètre et permet de spécifier à la vue qu’elle doit être décrite par l’accessibilité après la vue passée en paramètre.
- `accessibilityTraversalBefore`&nbsp;: prend un id en paramètre et permet de spécifier à la vue qu’elle doit être décrite par l’accessibilité avant la vue passée en paramètre.

À noter&nbsp;: ces attributs peuvent être utilisés directement dans le <abbr>xml</abbr> mais également dans le code via les méthodes `setAccessibilityTraversalAfter` et `setAccessibilityTraversalBefore`. Ces méthodes sont disponibles pour tout élément qui hérite de `View`.

**Exemple&nbsp;: ** 

<pre><code>volupButton.setAccessibilityTraversalAfter(myView.findViewById(R.id.remote0).getId());
voldownButton.setAccessibilityTraversalAfter(myView.findViewById(R.id.volup).getId());
chaineplusButton.setAccessibilityTraversalAfter(myView.findViewById(R.id.voldown).getId());
chainemoinsButton.setAccessibilityTraversalAfter(myView.findViewById(R.id.chaineplus).getId());</code></pre>

**Liens&nbsp;: **      

- [`setAccessibilityTraversalAfter`](https://developer.android.com/reference/android/view/View.html#setAccessibilityTraversalAfter%28int%29)
- [`setAccessibilityTraversalBefore`](https://developer.android.com/reference/android/view/View.html#setAccessibilityTraversalBefore%28int%29)


## Formulaires

**Description&nbsp;: **  

Il est important que les champs de formulaire soient liés à un label. Il existe 2 grandes techniques pour réaliser cette liaison&nbsp;:
-	`labelFor`&nbsp;: permet de spécifier à une vue qu’elle est le label d’une autre vue. Cette méthode prend en paramètre l’`id` de la vue que l’on labellise. On peut utiliser cette méthode avec quasiment tout type de champ de formulaire. Utilisable depuis le <abbr>xml</abbr> `android:labelFor` ou le code `setLabelFor`. `LabelFor` est utilisable depuis tout élément qui hérite de `View`.
- `hint`&nbsp;: pour les `EditText` ou `TextView`. Permet d’ajouter un texte d’exemple quand le champ de texte est vide. Cette méthode ne marche que pour les `TextView`. Prend en paramètre l’`id` d’une chaîne de caractère. Utilisable depuis le <abbr>xml</abbr> `android:hint` ou le code `setHint`.

**Exemples&nbsp;: **

`LabelFor` dans le <abbr>xml</abbr>&nbsp;: 
<pre><code>&lt;TextView
	[...]
  android:labelFor="@+id/imageView11"
  android:importantForAccessibility="no" /&gt;</code></pre>

Remarque&nbsp;: il est très fréquent, une fois le label lié à son champ, de masquer le label à l’accessibilité. En effet, celui ci n’a plus besoin d’être reconnu par l’<abbr>API</abbr> d’accessibilité car son champ de formulaire l’utilise déjà (et sera donc restitué vocalement par <span lang="en">TalkBack</span> par exemple).

`Hint` dans le <abbr>xml</abbr>&nbsp;:
<pre><code>&lt;EditText
  [...]
   android:hint="@string/criteria_form_ex1_placeholder" /&gt;</code></pre>

**Liens&nbsp;: **

- [`setLabelFor`](https://developer.android.com/reference/android/view/View.html#setLabelFor%28int%29)
- [`setHint`](https://developer.android.com/reference/android/widget/TextView.html#setHint%28java.lang.CharSequence%29)


## Taille des textes

**Description&nbsp;: **  

Afin de permettre à l’option «&nbsp;grands caractères&nbsp;» d’interagir correctement avec l’application, plusieurs points sont à respecter durant les développements.
- Utiliser une taille de police dynamique&nbsp;: le «&nbsp;sp&nbsp;». Cette unité, spécifique à Android, permet d’obtenir une taille de police en fonction de la densité de pixel de l’écran. Il est plus que recommandé de l’utiliser, ne serait-ce que pour obtenir un design uniforme sur tous les types de <i lang="en">devices</i> Android.
- Gérer les débordements de contenu&nbsp;: une erreur courante est d’utiliser une taille de texte dynamique («&nbsp;sp&nbsp;» donc) mais de ne pas faire attention au conteneur. Si le texte grossit, le conteneur doit en faire autant pour ne pas qu’il y ait de débordement. On peut parfaitement jouer avec le `min-height` et le `height` des conteneurs pour obtenir un résultat correct (un `height` en `wrap_content` permet de laisser au système le soin de s’adapter).

**Lien&nbsp;: **

- [typographie sous Android](https://www.google.com/design/spec/style/typography.html#typography-styles)
  


## Événements d’accessibilité & <i lang="en">custom views</i>

**Description&nbsp;: ** 

Il existe sous Android un bon nombre d’événements liés à l’<abbr>API</abbr> d’accessibilité. Vous pouvez manipuler ces événements au même titre que d’autres événements. Ils permettent d’enrichir des composants <i lang="en">custom</i> insuffisamment accessibles. L’utilisation des événements d’accessibilité est assez rare dans les applications non dédiées à l’accessibilité, les autres options étant généralement suffisantes. Cependant, il faut savoir qu’ils existent et permettent de surcharger la vocalisation d’un composant.  

Pour plus d’informations, nous vous invitons à regarder les liens ci-dessous.

**Exemple&nbsp;: **

Dans cet exemple, on intercepte les événements d’accessibilité. En fonction de leur type (un texte a changé dans la vue ou <span lang="en">TalkBack</span> a mis le focus sur le composant), nous construisons une vocalisation à destination de <span lang="en">TalkBack</span>.
<pre><code>@Override
@TargetApi(Build.VERSION_CODES.ICE_CREAM_SANDWICH)
public boolean dispatchPopulateAccessibilityEvent(AccessibilityEvent event) {

  boolean result = super.dispatchPopulateAccessibilityEvent(event);

  // Detect what type of accessibility event is being passed in.
  int eventType = event.getEventType();

  // Common case: The user has interacted with our view in some way. State may or may not have been changed. Read out the current status of the view.
  if (eventType == AccessibilityEvent.TYPE_VIEW_TEXT_CHANGED) {
    event.getText().clear();
    event.getText().add("Valeur de la cagnotte&nbsp;: " + getBankValue() + ".");
    result = true;
  }

  // When a user first focuses on our view, we’ll also read out some simple instructions to make it clear that this is an interactive element.
  if (eventType == AccessibilityEvent.TYPE_VIEW_ACCESSIBILITY_FOCUSED) {
    event.getText().add("Cliquez pour lancer la roue et augmenter vos gains.");
    result = true;
  }

  return result;
}</code></pre>

**Liens&nbsp;: **

- [`AccessibilityEvents`](http://developer.android.com/reference/android/view/accessibility/AccessibilityEvent.html)
- [Construire une vue custom accessible](http://developer.android.com/guide/topics/ui/accessibility/apps.html#custom-views)
  

## <i lang="en">WebView</i>

**Description&nbsp;: ** 

Les `WebView` ont un traitement un peu particulier sous Android. Pour commencer, si on veut qu’une page soit accessible, il faut que le contenu HTML le soit, à savoir qu’il respecte les normes internationales sur le sujet&nbsp;: les WCAG2. Pour connaître ces règles et apprendre les techniques de développement pour un web accessible, nous vous invitons à visiter la section de notre site consacrée au sujet&nbsp;: [recommandations accessibilité pour le web](../web/index.html).  

Côté Android, il faut s’assurer que la <i lang="en">WebView</i> autorise le JavaScript&nbsp;: `mWebView.getSettings().setJavaScriptEnabled(true);`  
Dans ces conditions, la page affichée à travers la `WebView`  réagit convenablement à l’<abbr>API</abbr> d’accessibilité. 


## Vocalisation des listes

**Description&nbsp;: ** 

Il arrive parfois que les listes soient mal vocalisées&nbsp;: la synthèse vocale tente de vocaliser toute la liste en une seule fois (au moins ce qui est affiché à l’écran dans le cas de listes longues). C’est notamment le cas lorsque l’on utilise des `RecyclerView`. Pour pallier ce problème, une solution simple existe. Il suffit de positionner l’attribut `focusable` à `true` pour chaque item de la liste. Cela a pour effet de forcer la synthèse vocale (<span lang="en">TalkBack</span>) à lire les items un par un.


## Navigation au focus (clavier)

**Description&nbsp;: **

Pour gérer la navigation au focus, il faut s’assurer de 3 choses&nbsp;:
- Permettre le focus sur les éléments interactifs&nbsp;: la navigation au focus ne concerne que les éléments interactifs. Si, par exemple, votre application possède des vues <i lang="en">custom</i> cliquables, il faut s’assurer que ces vues soient focusables en positionnant l’attribut `focusable` à `true`.
- Gérer l’affichage du focus&nbsp;: tout élément interactif peut recevoir le focus, il faut donc que le `state_focused` soit défini et permette de distinguer d’un seul coup d’œil quel élément a le focus.
- Gérer l’ordre du focus&nbsp;: à travers les options `nextFocusDown`, `nextFocusUp`, `nextFocusRight` et `nextFocusLeft`, vous pouvez spécifier quelle vue doit prendre le focus selon l’utilisation des flèches bas, haut, droit et gauche.  

La plupart du temps, seuls les point 1 et 2 sont à prendre la compte. En effet, le système Android est capable de déterminer assez précisément les positions des éléments les uns par rapport aux autres et donc de fournir un ordre de lecture au clavier logique et cohérent.

À noter&nbsp;: `nextFocusDown`, `nextFocusUp`, `nextFocusRight`, `nextFocusLeft`, `focusable` ainsi que d’autres options de gestion du focus sont accessibles directement dans le <abbr>xml</abbr> ou dans le code à travers les méthodes correspondantes.

**Exemple&nbsp;: **

Exemple de sélecteur pour `TabHost` qui prend en compte l’état `state_focused` :
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

**Lien&nbsp;: **

- [Gestion du focus sous Android](http://developer.android.com/guide/topics/ui/accessibility/apps.html#focus-nav)

<!--  This file is part of a11y-guidelines | Our vision of mobile & web accessibility guidelines and best practices, with valid/invalid examples.
 Copyright (C) 2016  Orange SA
 See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). -->