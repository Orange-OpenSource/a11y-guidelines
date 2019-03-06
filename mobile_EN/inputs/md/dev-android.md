# Android developer guide

<script>$(document).ready(function () {
    
    setBreadcrumb([{"label":"Guide for developers", "url": "./dev-mobile.html"},
        {"label":"Android developer guide"}
	]);
    addSubMenu([
        {"label":"Android guide","url":"dev-mobile.html", "expanded": true}, 
        {"label":"iOS guide","url":"dev-ios.html"},
        {"label":"iOS WWDC","url":"dev-ios-wwdc.html"}
    ]);            
});</script>

<span data-menuitem="dev-mobile"></span>

This guide aims to present the various accessibility options available on the Android <abbr>SDK</abbr>. Through different categories, this guide explains how to use the accessibility attributes&nbsp;/ methods and provides links to the official Google documentation. Code snippets are also available to show you how to implement it.  

## Text alternative
### Description: 

On Android, the vocalization of an element is made through an attribute named `contentDescription`. This attribute, which accepts a single string parameter (and therefore localizable), completely redefines the text to be read by an accessibility service like TalkBack. This allows a component to be more explicit than the text displayed on the screen. For example, in the case of a button whose title is “OK”, the `contentDescription` attribute can indicate that the button is used to confirm an action.

The `contentDescription` attribute must also be used on custom elements to indicate their nature. For example, a clickable `LinearLayout` must have a `contentDescription` like “button_name, button” (it should also be focusable to be properly accessible, see the corresponding section). 

Note that the `contentDescription` is available in any element that inherits from `View`. It is therefore possible to set a `contentDescription` on a `TextView` for example, as shown in the “accessibility guide - text alternative - abbreviations, dates and times” section.
 
### Examples:

Simple example (localized):
<pre><code class="xml">&lt;TextView
…
android:id="@+id/myTextviewId"
android:contentDescription="@string/criteria_alt_ex1_cd_txt2"
&#47;&gt;</code></pre><pre>
<code class="java">myTextView = (TextView) findViewById(R.id.myTextviewId);
myTextView.setContentDescription(getString(R.string.criteria_alt_ex1_cd_txt2));</code></pre><pre><code class="kotlin">myTextViewId.contentDescription = getString(R.string.criteria_alt_ex1_cd_txt2)</code></pre>

Example of a `Tab`:  
The example has tabs above and below a `ViewPager` in one case in` TabLayout` and in the other in `BottomNavigationView`. The tabs are no longer coded in `TabHost` component.
It is necessary to indicate the state and the nature of the tabs (not internationalized):

<pre><code class="xml">//In the layout of the activity
&lt;android.support.constraint.ConstraintLayout
   …&gt;
    &lt;android.support.v4.view.ViewPager
    android:id="@+id/viewpager"
        …
        &gt;
    &lt;android.support.design.widget.TabLayout
            android:id="@+id/tabtoolbar_pager"
            …
    &lt;/android.support.v4.view.ViewPager&gt;
    &lt;android.support.design.widget.BottomNavigationView
        android:id="@+id/navigation"
        […]
        app:menu="@menu/navigation" /&gt;
&lt;/android.support.constraint.ConstraintLayout&gt;
&nbsp;
&nbsp;
//In the file strings.xml
&lt;string name="cd_tab_title_param"&gt;%1$s, tab %2$s on %3$s&lt;/string&gt;
</code></pre><pre>
<code class="java">
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        mTabLayout = (TabLayout) findViewById(R.id.tabtoolbar_pager);
        mViewPager = (ViewPager) findViewById(R.id.viewpager);
        mTabLayout.addOnLayoutChangeListener(mTabLayoutListener);
        mTabLayout.setupWithViewPager(mViewPager);
        mAdapter = new ScreenSlidePagerAdapter(getSupportFragmentManager());
        mViewPager.setAdapter(mAdapter);
//At creation, initialize the contentDescription
        updateTabContentDescription(0);
        mViewPager.addOnPageChangeListener(new ViewPager.OnPageChangeListener() {
            […]
            public void onPageSelected(int position) {
                updateTabContentDescription(position);
            }
        });
//The BottomNavigationView is not necessarily at the bottom of the view, its position is defined in the layout.
        BottomNavigationView navigation = (BottomNavigationView) findViewById(R.id.navigation);
        navigation.setOnNavigationItemSelectedListener(mOnNavigationItemSelectedListener);
        […]
        }
    private void updateTabContentDescription(int position) {
        for (int i = 0; i &lt; mAdapter.getCount(); i++) {
            TabLayout.Tab tab = mTabLayout.getTabAt(i);
            String cd_param_string = getString(R.string.cd_tab_title_param,
                    mAdapter.getPageTitle(i), // title, first parameter see xml
                    i + 1,                    // tab number, second parameter
                    mAdapter.getCount());     // total number of tabs, third parameter
            if (tab != null) {
                tab.setContentDescription(cd_param_string);
            }         
//For Tablayout and BottomNavigationView, information “selected” is already vocalized.
//Either, for example: “selected, `tab title 1`, tab 1 of 5”
//or “`tab title 3`, tab 3 of 5”. Then “Double-tap to activate”.
// Setting the upper bound automatically will prevent a vocalization like:
//“selected, `tab title 4`, tab 4 of 3.", where the upper bound is inconsistent.
// For the `TabHost` implementation, it would be necessary to specify the "selected" state of the tab.
        }
    }
</code></pre><pre>
<code class="kotlin">
    private fun updateTabContentDescription(position: Int) {
        for (i in 0 until mAdapter!!.count) {
            val tab = mTabLayout!!.getTabAt(i)
            val cd_param_string = getString(R.string.cd_tab_title_param,
                    mAdapter!!.getPageTitle(i), // titre en paramètre 1 voir le xml
                    i + 1,                      // le numéro de l’onglet actuel, paramètre 2
                    mAdapter!!.count)           // le nombre d’onglets automatique, paramètre 3
            if (tab != null) {
                tab.contentDescription = cd_param_string
//For Tablayout and BottomNavigationView, information “selected” is already vocalized.
//Either, for example: “selected, `tab title 1`, tab 1 of 5”
//or “`tab title 3`, tab 3 of 5”. Then “Double-tap to activate”.
// Setting the upper bound automatically will prevent with a vocalization like:
//“selected, `tab title 4`, tab 4 of 3.", where the upper bound is inconsistent.
// For the `TabHost` implementation, it would be necessary to specify the "selected" state of the tab.
            }
        }
    }
</code></pre>

**Link: **

- [`contentDescription`](https://developer.android.com/reference/android/view/View.html#attr_android:contentDescription)

  
## Hiding elements from accessibility  

### Description: 

It is possible via an accessibility attribute to hide elements from accessibility tools (e.g. TalkBack). By extension, it is possible to force some elements to be visible to accessibility tools.
`ImportantForAccessibility`: depending on the value of the attribute, it indicates whether an element is visible or not to the Accessibility API.
- `Auto` (0): this is the default, it is the system that decides. For example, a `Button` will have its default value set to 1 (<i>yes</i>) whereas a `LinearLayout` will default to 2 (<i>no</i>).
- `Yes` (1): the view is important for accessibility. For example, it can receive the TalkBack focus.
- `No` (2): the view is not important for accessibility. It does not trigger accessibility events and is therefore ignored by accessibility services such as TalkBack.
- `NoHideDescendants` (4): the view is not important for accessibility, nor are its children views. This will hide all the items in a view to accessibility at once. Very useful on custom elements.
  
Note: the “`importantForAccessibility`” attribute is available to any element that inherits from `View`.

### Examples:

<pre><code class="xml">&lt;TextView
[…]
android:id="@+id/myTextviewId1"
android:importantForAccessibility="4"
&#47;&gt;
&lt;TextView
[…]
android:id="@+id/myTextviewId2"
android:importantForAccessibility="noHideDescendants"
&#47;&gt;</code></pre><pre>
<code class="java">myTextView1 = (TextView) findViewById(R.id.myTextviewId1);
myTextView2 = (TextView) findViewById(R.id.myTextviewId2);
myTextView1.setImportantForAccessibility(4); // JELLY_BEAN
myTextView2.setImportantForAccessibility(View.IMPORTANT_FOR_ACCESSIBILITY_NO_HIDE_DESCENDANTS); // KITKAT</code></pre><pre><code class="kotlin">myTextView1.importantForAccessibility = "4" // JELLY_BEAN
myTextView2.importantForAccessibility = View.IMPORTANT_FOR_ACCESSIBILITY_NO_HIDE_DESCENDANTS  // KITKAT
</code></pre>

### Link:  

- [`importantForAccessibility`](https://developer.android.com/reference/android/view/View.html#setImportantForAccessibility%28int%29)


## Trigger a vocalization

### Description:

It is very easy to trigger vocalizations with TalkBack. Triggering a vocalization is very useful for dynamic content, just like a `LiveRegion` (see corresponding section). To trigger a vocalization, just call the `announceForAccessibility` method with the `id` parameter of the string to vocalize.

Note: the `announceForAccessibility` method is available on any item that inherits from `View` and is made in the system’s language.

Warning: we are talking about TalkBack vocalization and not <abbr>TTS</abbr> (Text To Speech) that can operate whether TalkBack is on or off.

### Example:

It is common to check the Android version before triggering TalkBack vocalization. This is because `announceForAccessibility` has been introduced in Jelly Bean.
<pre>
<code class="java">if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.JELLY_BEAN) {
    myView.announceForAccessibility(getString(R.string.criteria_contentchange_ex1_announce));
    }
</code></pre><pre>
<code class="kotlin">if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.JELLY_BEAN) {
    myView.announceForAccessibility(getString(R.string.criteria_contentchange_ex1_announce))
    }
</code></pre>

### Link:

- [`announceForAccessibility`](https://developer.android.com/reference/android/view/View.html#announceForAccessibility%28java.lang.CharSequence%29)


## Check if Talkback is on

### Description:

On Android, it is possible to know whether the Accessibility API is enabled, thus whether TalkBack is enabled.

### Usage:

<pre><code class="java">AccessibilityManager am = (AccessibilityManager) context.getSystemService(ACCESSIBILITY_SERVICE);  
boolean isAccessibilityEnabled = am.isEnabled();
</code></pre><pre>
<code class="kotlin">val am = context.getSystemService(Context.ACCESSIBILITY_SERVICE) as AccessibilityManager
val isAccessibilityEnabled = am.isEnabled
</code></pre>


## Live region (dynamic content)

### Description:

You can specify to a view that it is a “live” region, it means that its content is subject to change dynamically and should in this case notify the Accessibility <abbr>API</abbr>. This will generate TalkBack vocalizations. A typical use case: on a form, if the user makes a mistake and an error message appears, the view containing the error message must be defined as a “live” region.

We must use the `setAccessibilityLiveRegion` method that takes a mode parameter for the live region. There are 3 modes:
- `ACCESSIBILITY_LIVE_REGION_NONE`: this view is not a live region. This is the default for most views.
- `ACCESSIBILITY_LIVE_REGION_POLITE`: when a change occurs, vocalizations are triggered on the changes. These vocalizations are “polite”; they have lower priority than system vocalizations for example.
- `ACCESSIBILITY_LIVE_REGION_ASSERTIVE`: when a change occurs, vocalizations are triggered on the changes. These vocalizations are “assertive”; they have the highest priority and are immediately vocalized. 

Note the `setAccessibilityLiveRegion` method is available on any class that inherits from `View`.

### Example:

<pre><code class="xml">&lt;TextView
   […]
   android:accessibilityLiveRegion="polite" /&gt;</code></pre>

### Link:

- [`setAccessibilityLiveRegion`](https://developer.android.com/reference/android/view/View.html#setAccessibilityLiveRegion%28int%29)


## Reading order (TalkBack)

### Description:  

By default, the reading order of voice synthesis depends on: the “logical” reading (in France), from left to right and top to bottom, and the <abbr>xml</abbr> order (order of elements declaration). It is quite possible to redefine the reading order with two attributes:  
- `AccessibilityTraversalAfter`: sets the `id` of a view after which this one is visited in accessibility traversal. A screen-reader must visit the content of the other view before the content of this one.
- `AccessibilityTraversalBefore`: sets the `id` of a view before which this one is visited in accessibility traversal. A screen-reader must visit the content of this view before the content of the one it precedes.

Note: These attributes can be used directly in the <abbr>xml</abbr> but also in the code via the `setAccessibilityTraversalBefore` and `setAccessibilityTraversalAfter` methods. These methods are available for any element that inherits from `View`.

### Example:

<pre><code class="java">volupButton.setAccessibilityTraversalAfter(myView.findViewById(R.id.remote0).getId());
voldownButton.setAccessibilityTraversalAfter(myView.findViewById(R.id.volup).getId());
chaineplusButton.setAccessibilityTraversalAfter(myView.findViewById(R.id.voldown).getId());
chainemoinsButton.setAccessibilityTraversalAfter(myView.findViewById(R.id.chaineplus).getId());</code></pre><pre>
<code class="kotlin">volupButton.accessibilityTraversalAfter = remote0Button.id
voldownButton.accessibilityTraversalAfte = volupButton.id
chaineplusButton.accessibilityTraversalAfter = voldownButton.id
chainemoinsButton.accessibilityTraversalAfter = chaineplusButton.id</code></pre>

### Link:  

- [`setAccessibilityTraversalAfter`](https://developer.android.com/reference/android/view/View.html#setAccessibilityTraversalAfter%28int%29)
- [`setAccessibilityTraversalBefore`](https://developer.android.com/reference/android/view/View.html#setAccessibilityTraversalBefore%28int%29)

## Manage the reading of headers (TalkBack)
Android <i>Pie</i> introduces an additional level of reading of the `accessibilityHeading` feature that allows you to browse the page on these titles instead of all the elements of the page.

### Description&nbsp;:
The screen reader can read only the headers defined in a page (see the TalkBack User Guide, the “Slide Up Using a Finger” gesture). These headers allow the reader to browse the large sections of the page to see if the information sought is there, without having to listen to everything.

#### Example&nbsp;:
<pre><code class="xml">&lt;TextView
[…]
android:id="@+id/myTextLevel1viewId"
android:accessibilityHeading="true"
&#47;&gt;</code></pre>

#### Link:
- [`accessibilityHeading`](https://developer.android.com/reference/android/R.attr#accessibilityHeading)

## Form

### Description:

It is very important to bind the form fields with their labels. There are 2 major techniques to achieve this:
 - `LabelFor`: allow to specify a label to a view. This method takes the `id` of the view that it is associated with. This method can be used on almost any type of form field. We can also use the <abbr>xml</abbr> `android:labelFor` or programmatically `setLabelFor`.
 - `Hint`: add an example text when the text field is empty. This method only works for `TextView`. Supports setting the `id` to a string. Can be used in the <abbr>xml</abbr> `android:hint` or programmatically `setHint`.

### Examples:

`LabelFor` in <abbr>XML</abbr>: 
<pre><code class="xml">&lt;TextView
	[...]
  android:labelFor="@+id/imageView11"
  android:importantForAccessibility="no" /&gt;</code></pre>

Note: It is very common, once the label is bound to its field, to hide the label from the accessibility service. This is because this one does not need to be vocalized by the Accessibility <abbr>API</abbr> anymore as it’s already associated with the form field (and will be vocalized by TalkBack for example).

`Hint` in <abbr>xml</abbr>:
<pre><code class="xml">&lt;EditText
  [...]
   android:hint="@string/criteria_form_ex1_placeholder" /&gt;</code></pre>

### Links:

- [`setLabelFor`](https://developer.android.com/reference/android/view/View.html#setLabelFor%28int%29)
- [`setHint`](https://developer.android.com/reference/android/widget/TextView.html#setHint%28java.lang.CharSequence%29)


## Text size

### Description: 

To make it possible for the “Huge font size” option to properly interact with the application, several points are to be respected during the development:
- Use dynamic font size: the “sp”. This unit, specific to Android, allows to have a font size proportional to the pixel density of the display. It is highly recommended to use it for text, if only for a uniform design on all types of Android devices.
- Manage content overflows: A common mistake is to use a dynamic text size (“sp”) but not to pay attention to the container size. If the text gets bigger, the container must adapt so there is no overflow. One can perfectly play with the `min-height` and `height` attributes for correct results (the `height` set to `wrap_content` and `min-height` set to the default desired height).

### Link:

- [typography](https://www.google.com/design/spec/style/typography.html#typography-styles)
  


## Accessibility events & custom views

### Description: 

On Android there are several events available for accessibility. You can manipulate them just like any event. They can enhance custom views that are not accessible enough. Using accessible events is not common on applications that are not intended to be used by disabled people, because other options are in most cases sufficient. Yet one must know they exist and they let you redefine the vocalization of a component.  

For more information, please refer to the following links:

### Links:

- [`AccessibilityEvents`](http://developer.android.com/reference/android/view/accessibility/AccessibilityEvent.html)
- [Creating a custom view](http://developer.android.com/guide/topics/ui/accessibility/apps.html#custom-views)
- [Accessibility Event Skeleton sample](https://github.com/Pascale22/A11yEventApp) in <abbr>Kotlin</abbr>
  

## WebView

#### Description: 

`WebView`s are a special thing on Android. First, if you want a page to be accessible, its <abbr>HTML</abbr> content must be accessible as well, it must follow the international standards: the <abbr>WCAG</abbr>2. To know the requirements and learn techniques for developing an accessible Web, please visit the following section in our site: [accessibility recommendations for the Web](../web/index.html).

Second, on Android you must ensure that the `WebView` allows JavaScript `mWebView.getSettings().setJavaScriptEnabled(true);`

In these conditions, the page displayed through the `WebView` properly responds to the Accessibility <abbr>API</abbr>. 


## List vocalization

#### Description:

Sometimes lists are not vocalized correctly: the speech synthesis is trying to vocalize the whole list at once (only the items displayed on the screen). This is especially the case when using the `RecyclerView`. To overcome this problem, there is a simple fix. Just set the `focusable` attribute to `true` for each item in the list. This has the effect of forcing the speech synthesis (TalkBack) to read the items one by one.


## Navigating via the focus (keyboard)

#### Description:

To handle focus-based navigation, make sure to:
- Allow interactive elements to receive the focus: focus-based navigation only concerns interactive elements. If, for example, your application has clickable custom views, it must be ensured that these views are focusable setting the `focusable` attribute to `true`.
- Managing the focus display: interactive elements must have the `state_focused` defined and must be easily distinguishable when having the focus.
- Managing the focus order: through the `nextFocusDown`, `nextFocusUp`, `nextFocusRight`, `nextFocusLeft` options, you can specify what view should take the focus when using the down, up, right and left arrow.

Most of the time, only the two first points must be taken care of. Android is able to determine very precisely the positions of the elements between them and therefore to provide a logical and coherent reading order for the keyboard.

Note: `nextFocusDown`, `nextFocusUp`, `nextFocusRight`, `nextFocusLeft`, `focusable` and other focus management options are available either in the <abbr>xml</abbr> or programmatically.

Note: Android Pie (9, <abbr>API</abbr> 28) introduces a screen reader-specific focus to avoid edge effects between the screen reader focus (`screenReaderFocusable`) and the keyboard focus (`focusable`). Keyboard navigation is not sensitive to `screenReaderFocusable`.

#### Example:

Selector handling the `state_focused`:
<pre><code class="xml">&lt;selector xmlns:android="http://schemas.android.com/apk/res/android"&gt;
	&lt;!-- Non focused states --&gt;
	&lt;item android:state_focused="false" android:state_selected="false" android:state_pressed="false" android:drawable="@drawable/tab_unselected_tab_selector" /&gt;
	&lt;item android:state_focused="false" android:state_selected="true"  android:state_pressed="false" android:drawable="@drawable/tab_selected_tab_selector" /&gt;
&nbsp;
	&lt;!-- Focused states --&gt;
	&lt;item android:state_focused="true" android:state_selected="false" android:state_pressed="false" android:drawable="@drawable/tab_unselected_focused_tab_selector" /&gt;
	&lt;item android:state_focused="true" android:state_selected="true"  android:state_pressed="false" android:drawable="@drawable/tab_selected_focused_tab_selector" /&gt;
&nbsp;
	&lt;!-- Pressed --&gt;
	&lt;!-- Non focused states --&gt;
	&lt;item android:state_focused="false" android:state_selected="false" android:state_pressed="true" android:drawable="@drawable/tab_unselected_pressed_tab_selector" /&gt;
	&lt;item android:state_focused="false" android:state_selected="true"  android:state_pressed="true" android:drawable="@drawable/tab_selected_pressed_tab_selector" /&gt;
&nbsp;
	&lt;!-- Focused states --&gt;
	&lt;item android:state_focused="true" android:state_selected="false" android:state_pressed="true" android:drawable="@drawable/tab_unselected_pressed_tab_selector" /&gt;
	&lt;item android:state_focused="true" android:state_selected="true"  android:state_pressed="true" android:drawable="@drawable/tab_selected_pressed_tab_selector" /&gt;
&lt;/selector&gt;</code></pre>

#### Link:

- [Focus-based navigation](http://developer.android.com/guide/topics/ui/accessibility/apps.html#focus-nav)

<!--  This file is part of a11y-guidelines | Our vision of mobile & web accessibility guidelines and best practices, with valid/invalid examples.
 Copyright (C) 2016  Orange SA
 See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). -->