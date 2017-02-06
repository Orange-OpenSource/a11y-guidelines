# Android developer guide

<script>$(document).ready(function () {
    
    setBreadcrumb([{"label":"Guide for developers", "url": "./dev-mobile.html"},
        {"label":"Android developer guide"}
	]);
    addSubMenu([
        {"label":"Android guide","url":"dev-mobile.html", "expanded": true}, 
        {"label":"iOS guide","url":"dev-ios.html"}
    ]);            
});</script>

<span data-menuitem="dev-mobile"></span>

This guide aims to present the various accessibility options available on the Android <abbr>SDK</abbr>. Through different categories, this guide explains how to use the accessibility attributes&nbsp;/ methods and provides links to the official Google documentation. Code snippets are also available to show you how to implement it.  

## Text alternative
**Description: **  

On Android, the vocalization of an element is made through an attribute named `contentDescription`. This attribute, which accepts a single string parameter (and therefore localizable), completely redefines the text to be read by an accessibility service like TalkBack. This allows a component to be more explicit than the text displayed on the screen. For example, in the case of a button whose title is “OK”, the `contentDescription` attribute can indicate that the button is used to confirm an action.

The `contentDescription` attribute must also be used on custom elements to indicate their nature. For example, a clickable `LinearLayout` must have a `contentDescription` like “button_name, button” (it should also be focusable to be properly accessible, see the corresponding section). 

Note that the `contentDescription` is available in any element that inherits from `View`. It is therefore possible to set a `contentDescription` on a `TextView` for example, as shown in the “accessibility guide - text alternative - abbreviations, dates and times” section.
 
**Examples: **   

Simple example (localized):  
`myTextView.setContentDescription(getString(R.string.criteria_alt_ex1_cd_txt2));`

Example indicating the state and nature of a `TabHost` (not localized):  
<pre><code>private class TabHostListener implements TabHost.OnTabChangeListener {
	[...]
	public void onTabChanged(String tabId) {setContentDescription(mTabHost, mTabsLabel);}
}

private void setContentDescription(TabHost mTabHost, String[] mTabsLabel) {
	int tab = mTabHost.getCurrentTab();
	int tabCount = mTabHost.getTabWidget().getTabCount();

	for (int tabNumber = 0; tabNumber < tabCount; tabNumber++) {
		CharSequence contentDescription = mTabsLabel[tabNumber];

		contentDescription = contentDescription + ", tab " + (tabNumber + 1) + " on " + tabCount;
		if (tabNumber == tab) {
			contentDescription = contentDescription + ", selected";
		}
		mTabHost.getTabWidget().getChildAt(tabNumber).setContentDescription(contentDescription);
	}
}</code></pre>

**Link: **

- [`contentDescription`](https://developer.android.com/reference/android/view/View.html#attr_android:contentDescription)

  
## Hiding elements from accessibility  

**Description: **  

It is possible via an accessibility attribute to hide elements from accessibility tools (e.g. TalkBack). By extension, it is possible to force some elements to be visible to accessibility tools.
`ImportantForAccessibility`: depending on the value of the attribute, it indicates whetheran element is visible or not to the Accessibility API.
- `Auto` (0): this is the default, it is the system that decides. For example, a `Button` will have its default value set to 1 (<i>yes</i>) whereas a `LinearLayout` will default to 2 (<i>no</i>).
- `Yes` (1): the view is important for accessibility. For example, it can receive the TalkBack focus.
- `No` (2): the view is not important for accessibility. It does not trigger accessibility events and is therefore ignored by accessibility services such as TalkBack.
- `NoHideDescendants` (4): the view is not important for accessibility, nor are its children views. This will hide all the items in a view to accessibility at once. Very useful on custom elements.
  
Note: the “`importantForAccessibility`” attribute is available to any element that inherits from `View`.

**Examples: **

From <abbr>xml</abbr>: 
`android:importantForAccessibility="no"`

Programmatically:
`myView.setImportantForAccessibility(View.IMPORTANT_FOR_ACCESSIBILITY_NO_HIDE_DESCENDANTS);`

**Link: **     

- [`importantForAccessibility`](https://developer.android.com/reference/android/view/View.html#setImportantForAccessibility%28int%29)


## Trigger a vocalization

**Description: **  

It is very easy to trigger vocalizations with TalkBack. Triggering a vocalization is very useful for dynamic content, just like a `LiveRegion` (see corresponding section). To trigger a vocalization, just call the `announceForAccessibility` method with the `id` parameter of the string to vocalize.

Note: the `announceForAccessibility` method is available on any item that inherits from `View` and is made in the system’s language.

Warning: we are talking about TalkBack vocalization and not <abbr>TTS</abbr> (Text To Speech) that can operate whether TalkBack is on or off.

** Example: **

It is common to check the Android version before triggering TalkBack vocalization. This is because `announceForAccessibility` has been introduced in Jelly Bean.
<pre><code>if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.JELLY_BEAN) {
	getView().announceForAccessibility(getString(R.string.criteria_contentchange_ex1_announce));
}</code></pre>

**Link: **

- [`announceForAccessibility`](https://developer.android.com/reference/android/view/View.html#announceForAccessibility%28java.lang.CharSequence%29)


## Check if Talkback is on

**Description: ** 

On Android, it is possible to know whether the Accessibility API is enabled, thus whether TalkBack is enabled.

**Usage: ** 

<pre><code>AccessibilityManager am = (AccessibilityManager) context.getSystemService(ACCESSIBILITY_SERVICE);  
boolean isAccessibilityEnabled = am.isEnabled();</code></pre>


## Live region (dynamic content)

**Description  **

You can specify to a view that it is a “live” region, it means that its content is subject to change dynamically and should in this case notify the Accessibility <abbr>API</abbr>. This will generate TalkBack vocalizations. A typical use case: on a form, if the user makes a mistake and an error message appears, the view containing the error message must be defined as a “live” region.

We must use the `setAccessibilityLiveRegion` method that takes a mode parameter for the live region. There are 3 modes:
- `ACCESSIBILITY_LIVE_REGION_NONE`: this view is not a live region. This is the default for most views.
- `ACCESSIBILITY_LIVE_REGION_POLITE`: when a change occurs, vocalizations are triggered on the changes. These vocalizations are “polite”; they have lower priority than system vocalizations for example.
- `ACCESSIBILITY_LIVE_REGION_ASSERTIVE`: when a change occurs, vocalizations are triggered on the changes. These vocalizations are “assertive”; they have the highest priority and are immediately vocalized. 

Note the `setAccessibilityLiveRegion` method is available on any class that inherits from `View`.

**Example: **

<pre><code>&lt;TextView
   […]
   android:accessibilityLiveRegion="polite" /&gt;</code></pre>

**Link: **

- [`setAccessibilityLiveRegion`](https://developer.android.com/reference/android/view/View.html#setAccessibilityLiveRegion%28int%29)


## Reading order (TalkBack)

**Description: **  

By default, the reading order of voice synthesis depends on: the “logical” reading (in France), from left to right and top to bottom, and the <abbr>xml</abbr> order (order of elements declaration). It is quite possible to redefine the reading order with two attributes:  
- `AccessibilityTraversalAfter`: sets the `id` of a view after which this one is visited in accessibility traversal. A screen-reader must visit the content of the other view before the content of this one.
- `AccessibilityTraversalBefore`: sets the `id` of a view before which this one is visited in accessibility traversal. A screen-reader must visit the content of this view before the content of the one it precedes.

Note: These attributes can be used directly in the <abbr>xml</abbr> but also in the code via the `setAccessibilityTraversalBefore` and `setAccessibilityTraversalAfter` methods. These methods are available for any element that inherits from `View`.

**Example: ** 

<pre><code>volupButton.setAccessibilityTraversalAfter(myView.findViewById(R.id.remote0).getId());
voldownButton.setAccessibilityTraversalAfter(myView.findViewById(R.id.volup).getId());
channelplusButton.setAccessibilityTraversalAfter(myView.findViewById(R.id.voldown).getId());
channelminusButton.setAccessibilityTraversalAfter(myView.findViewById(R.id.channelplus).getId());</code></pre>

**Link: **      

- [`setAccessibilityTraversalAfter`](https://developer.android.com/reference/android/view/View.html#setAccessibilityTraversalAfter%28int%29)
- [`setAccessibilityTraversalBefore`](https://developer.android.com/reference/android/view/View.html#setAccessibilityTraversalBefore%28int%29)


## Form

**Description: **  

It is very important to bind the form fields with their labels. There are 2 major techniques to achieve this:
 - `LabelFor`: allow to specify a label to a view. This method takes the `id` of the view that it is associated with. This method can be used on almost any type of form field. We can also use the <abbr>xml</abbr> `android:labelFor` or programmatically `setLabelFor`.
 - `Hint`: add an example text when the text field is empty. This method only works for `TextView`. Supports setting the `id` to a string. Can be used in the <abbr>xml</abbr> `android:hint` or programmatically `setHint`.

**Examples: **

`LabelFor` in <abbr>XML</abbr>: 
<pre><code>&lt;TextView
	[...]
  android:labelFor="@+id/imageView11"
  android:importantForAccessibility="no" /&gt;</code></pre>

Note: It is very common, once the label is bound to its field, to hide the label from the accessibility service. This is because this one does not need to be vocalized by the Accessibility <abbr>API</abbr> anymore as it’s already associated with the form field (and will be vocalized by TalkBack for example).

`Hint` in <abbr>xml</abbr>:
<pre><code>&lt;EditText
  [...]
   android:hint="@string/criteria_form_ex1_placeholder" /&gt;</code></pre>

**Links: **

- [`setLabelFor`](https://developer.android.com/reference/android/view/View.html#setLabelFor%28int%29)
- [`setHint`](https://developer.android.com/reference/android/widget/TextView.html#setHint%28java.lang.CharSequence%29)


## Text size

**Description: **  

To make it possible for the “Huge font size” option to properly interact with the application, several points are to be respected during the development:
- Use dynamic font size: the “sp”. This unit, specific to Android, allows to have a font size proportional to the pixel density of the display. It is highly recommended to use it for text, if only for a uniform design on all types of Android devices.
- Manage content overflows: A common mistake is to use a dynamic text size (“sp”) but not to pay attention to the container size. If the text gets bigger, the container must adapt so there is no overflow. One can perfectly play with the `min-height` and `height` attributes for correct results (the `height` set to `wrap_content` and `min-height` set to the default desired height).

**Link: **

- [typography](https://www.google.com/design/spec/style/typography.html#typography-styles)
  


## Accessibility events & custom views

**Description: ** 

On Android there are several events available for accessibility. You can manipulate them just like any event. They can enhance custom views that are not accessible enough. Using accessible events is not common on applications that are not intended to be used by disabled people, because other options are in most cases sufficient. Yet one must know they exist and they let you redefine the vocalization of a component.  

For more information, please refer to the following links:

**Example: **

In this example, accessibility events are intercepted. Depending on their type (text has been changed in the view or the component has the TalkBack focus), we construct a vocalization to TalkBack.
<pre><code>@Override
@TargetApi(Build.VERSION_CODES.ICE_CREAM_SANDWICH)
public boolean dispatchPopulateAccessibilityEvent(AccessibilityEvent event) {

  boolean result = super.dispatchPopulateAccessibilityEvent(event);

  // Detect what type of accessibility event is being passed in.
  int eventType = event.getEventType();

  // Common case: The user has interacted with our view in some way. State may or may not have been changed. Read out the current status of the view.
  if (eventType == AccessibilityEvent.TYPE_VIEW_TEXT_CHANGED) {
    event.getText().clear();
    event.getText().add("Possible reward: " + getBankValue() + ".");
    result = true;
  }

  // When a user first focuses on our view, we'll also read out some simple instructions to make it clear that this is an interactive element.
  if (eventType == AccessibilityEvent.TYPE_VIEW_ACCESSIBILITY_FOCUSED) {
    event.getText().add("Click here to play again.");
    result = true;
  }

  return result;
}</code></pre>

**Links: **

- [`AccessibilityEvents`](http://developer.android.com/reference/android/view/accessibility/AccessibilityEvent.html)
- [Creating a custom view](http://developer.android.com/guide/topics/ui/accessibility/apps.html#custom-views)
  

## WebView

**Description: ** 

`WebView`s are a special thing on Android. First, if you want a page to be accessible, its <abbr>HTML</abbr> content must be accessible as well, it must follow the international standards: the <abbr>WCAG</abbr>2. To know the requirements and learn techniques for developing an accessible Web, please visit the following section in our site: [accessibility recommendations for the Web](../web/index.html).

Second, on Android you must ensure that the `WebView` allows JavaScript `mWebView.getSettings.setJavaScriptEnabled(true);`
In these conditions, the page displayed through the `WebView` properly responds to the Accessibility <abbr>API</abbr>. 


## List vocalization

**Description: ** 

Sometimes lists are not vocalized correctly: the speech synthesis is trying to vocalize the whole list at once (only the items displayed on the screen). This is especially the case when using the `RecyclerView`. To overcome this problem, there is a simple fix. Just set the `focusable` attribute to `true` for each item in the list. This has the effect of forcing the speech synthesis (TalkBack) to read the items one by one.


## Navigating via the focus (keyboard)

**Description: **

To handle focus-based navigation, make sure to:
- Allow interactive elements to receive the focus: focus-based navigation only concerns interactive elements. If, for example, your application has clickable custom views, it must be ensured that these views are focusable setting the `focusable` attribute to `true`.
- Managing the focus display: interactive elements must have the `state_focused` defined and must be easily distinguishable when having the focus.
- Managing the focus order: through the `nextFocusDown`, `nextFocusUp`, `nextFocusRight`, `nextFocusLeft` options, you can specify what view should take the focus when using the down, up, right and left arrow.

Most of the time, only the two first points must be taken care of. Android is able to determine very precisely the positions of the elements between them and therefore to provide a logical and coherent reading order for the keyboard.

Note: `nextFocusDown`, `nextFocusUp`, `nextFocusRight`, `nextFocusLeft`, `focusable` and other focus management options are available either in the <abbr>xml</abbr> or programmatically.

**Example: **

`Tabhost` selector handling the `state_focused`:
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

**Link: **

- [Focus-based navigation](http://developer.android.com/guide/topics/ui/accessibility/apps.html#focus-nav)

<!--  This file is part of a11y-guidelines | Our vision of mobile & web accessibility guidelines and best practices, with valid/invalid examples.
 Copyright (C) 2016  Orange SA
 See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). -->