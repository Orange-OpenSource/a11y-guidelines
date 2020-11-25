---
title: "Navigation vocale"
---

# Navigation vocale


## Vocaliser les images

**Cible&nbsp;:** tout le monde et en particulier les personnes ayant des déficiences visuelles.  
**Quand&nbsp;:** dès la conception, à la rédaction du contenu et pendant le développement.

**Description&nbsp;:**

Il est important que les images possèdent une alternative textuelle, qui donne toutes les informations portées par l’image, pour les personnes qui utilisent la navigation vocale.

Dans le cas d’une image contenant du texte, l’alternative sera ledit texte. Dans le cas d’une image qui apporte des informations sous la forme d’un graphe, dessin ou autre, l’alternative devra contenir toutes les informations nécessaires présentes dans l’image.

Les images décoratives en revanche ne nécessitent pas d'alternative textuelle et ne doivent donc pas être vocalisées.
  
**À vérifier&nbsp;:**
- Les images portant de l’information restituent cette information à travers leurs alternatives textuelles

**Exemple simple (internationalisé)&nbsp;:**
<pre><code class="xml">&lt;TextView
…
android:id="@+id/myTextviewId"
android:contentDescription="@string/criteria_alt_ex1_cd_txt2"
&#47;&gt;</code></pre><pre>
<code class="java">myTextView = (TextView) findViewById(R.id.myTextviewId);
myTextView.setContentDescription(getString(R.string.criteria_alt_ex1_cd_txt2));</code></pre><pre><code class="kotlin">myTextViewId.contentDescription = getString(R.string.criteria_alt_ex1_cd_txt2)</code></pre>


**Référence <abbr>WCAG</abbr>&nbsp;:**  
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#non-text-content">1.1.1 Non-text Content</a>
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#images-of-text">1.4.5 Images of Text</a>


<br/><br/>
## Vocaliser tous les éléments signifiants

**Cible&nbsp;:** tout le monde et en particulier les personnes déficientes visuelles.  
**Quand&nbsp;:** dès la conception, à la rédaction du contenu et pendant le développement.

**Description&nbsp;:**  
Lorsqu'un utilisateur navigue à l'aide de la navigation vocale (Talkback par exemple), chaque élément signifiant de l'écran doit lui être restitué vocalement, afin qu'il puisse utiliser l'application sans aucune perte d'information. 

Les alternatives textuelles sont au cœur de l’accessibilité sur mobile. Tandis qu'un texte sera restitué nativement par le lecteur d'écran, certains éléments nécessitent une alternative textuelle pour pouvoir vocaliser l'information correctement.

Il est important de renseigner une alternative textuelle lorsque l’information n’est pas disponible ou suffisante nativement. C’est le cas des composants fournissant de l’information par la couleur, la forme, la position, le son… Sur mobile, tous les composants peuvent recevoir une alternative textuelle, il est donc possible d’enrichir la vocalisation native d’un élément, y compris celle d’un simple texte.  
  
Certaines images sont régulièrement associées à du texte pour donner une information. C’est le cas notamment des «&nbsp;messages non lus&nbsp;» où une infobulle donne le nombre de messages à lire et où une image donne l’information «&nbsp;message&nbsp;». Dans ce cas, la solution consiste à placer une alternative textuelle sur le texte qui donne toutes les informations nécessaires. Par exemple&nbsp;: «&nbsp;3 messages non lus&nbsp;». On peut également placer cette alternative sur l’image, mais dans ce cas, il faut penser à rendre le texte «&nbsp;invisible&nbsp;» pour le lecteur d’écran.


**À vérifier&nbsp;:**

- Les éléments de l’application sont tous vocalisés et accessibles
- Les vocalisations de l’application sont explicites et compréhensibles pour chacun des éléments.
- Les éléments interactifs sont vocalisés avec l'action associée
- Les titres des activités sont vocalisés
- Les items d'une liste sont vocalisés indépendamment les uns des autres

**Exemple&nbsp;:**

Ci-dessous, un exemple fréquent d’une icône qu’on couple avec du texte (infobulle) pour ajouter de l’information. Dans notre cas, l’icône «&nbsp;mail&nbsp;» couplée à l’infobulle de valeur «&nbsp;3&nbsp;» nous fait comprendre que nous avons «&nbsp;3 mails non lus&nbsp;». Si aucune alternative textuelle n’est ajoutée, 2 vocalisations seront lues «&nbsp;bouton sans libellé&nbsp;» et «&nbsp;3&nbsp;». On comprend bien ici l’importance d’ajouter des alternatives textuelles.  
<img src="../../../images/alt.png" alt="exemple d’icône couplée à du texte qui nécessite une alternative textuelle" width="80" class="pull-left">

<pre><code class="java">containerView.setContentDescription("3 mails non lus, bouton"); //On ajoute l’alternative complète (construite dynamiquement au préalable) sur le conteneur
containerView.setImportantForAccessibility(View.IMPORTANT_FOR_ACCESSIBILITY_YES); //Le conteneur est une View, non visible par l’<abbr>API</abbr> d’accessibilité par défaut. On le rend visible.
mailImageView.setImportantForAccessibility(View.IMPORTANT_FOR_ACCESSIBILITY_NO); //On masque le bouton-icône pour éviter une redondance d’information
infobulleTextView.setImportantForAccessibility(View.IMPORTANT_FOR_ACCESSIBILITY_NO); //On masque le texte pour éviter une redondance d’information
</code></pre><pre>
<code class="kotlin">containerView.contentDescription = "3 mails non lus, bouton" //On ajoute l’alternative complète (construite dynamiquement au préalable) sur le conteneur
containerView.importantForAccessibility = View.IMPORTANT_FOR_ACCESSIBILITY_YES //Le conteneur est une View, non visible par l’<abbr>API</abbr> d’accessibilité par défaut. On le rend visible.
mailImageView.importantForAccessibility = View.IMPORTANT_FOR_ACCESSIBILITY_NO //On masque le bouton-icône pour éviter une redondance d’information
infobulleTextView.importantForAccessibility = View.IMPORTANT_FOR_ACCESSIBILITY_NO) //On masque le texte pour éviter une redondance d’information
</code></pre>


**Référence <abbr>WCAG</abbr>&nbsp;:**  
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#non-text-content">1.1.1 Non-text Content</a>


<br/><br/>

## Vocaliser l'état des éléments

**Cible&nbsp;:** tout le monde et en particulier les personnes déficientes visuelles.  
**Quand&nbsp;:** lors du développement.

**Description&nbsp;:**	

Si un élément ne restitue pas à la vocalisation son statut, sa nature ou son état, l’utilisateur de <span lang="en">TalkBack</span> est dans l’impossibilité de comprendre ce qui se passe à l’écran. Ne pas préciser qu’une zone est dépliée ou que l’on se trouve face à un système d’onglets sont des exemples très fréquents.  
  
Les différents types d’onglets proposés dans Android, par exemple, ne donnent pas toutes les informations sur leur nature et sur leur état. Il est donc à la charge du développeur de donner ces informations à l’utilisateur via les attributs d’accessibilité correspondants (`contentDescription`). En l’occurrence, une bonne alternative pour le titre d’un onglet peut être&nbsp;: "sélectionné, titre de l’onglet, onglet 1 sur 3"  
  
Autre classique d’élément qui ne restitue pas par défaut son état&nbsp;: les zones dépliables. Encore une fois, c’est grâce à l’alternative textuelle du titre de la zone dépliable que l’on peut donner à l’utilisateur de <span lang="en">TalkBack</span> le statut de celle-ci. 
  
Pour renseigner ce genre d’information, il faut utiliser l’attribut `contentDescription` (disponible pour tout élément héritant de `View`).

**À vérifier&nbsp;:**

- Tout élément dont le statut peut être modifié durant l’utilisation de l’application doit restituer son état à travers son alternative textuelle. Par exemple, un élément qui peut être sélectionné/non sélectionné.


**Exemple des onglets tabulés :**
L’exemple présente des onglets tabulés au-dessus et en-dessous d’un `ViewPager` dans un cas en `TabLayout` et dans l’autre en `BottomNavigationView`. Les onglets ne se pratiquent plus sous forme de `TabHost`.
Il faut indiquer l’état et la nature des onglets (non internationalisé)&nbsp;:  

<pre><code class="xml">//Dans le layout de l’activité
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
//Dans le fichier strings.xml
&lt;string name="cd_tab_title_param"&gt;%1$s, onglet %2$s sur %3$s&lt;/string&gt;
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
//initialise le contentDescription à la création
        updateTabContentDescription(0);
        mViewPager.addOnPageChangeListener(new ViewPager.OnPageChangeListener() {
            […]
            public void onPageSelected(int position) {
                updateTabContentDescription(position);
            }
        });
//Le BottomNavigationView n’est pas forcément au bas de la vue, il est à positionner dans le layout. 
        BottomNavigationView navigation = (BottomNavigationView) findViewById(R.id.navigation);
        navigation.setOnNavigationItemSelectedListener(mOnNavigationItemSelectedListener);
        […]
        }
    private void updateTabContentDescription(int position) {
        for (int i = 0; i &lt; mAdapter.getCount(); i++) {
            TabLayout.Tab tab = mTabLayout.getTabAt(i);
            String cd_param_string = getString(R.string.cd_tab_title_param,
                    mAdapter.getPageTitle(i), // titre en paramètre 1 voir le xml
                    i + 1,                    // le numéro de l’onglet actuel, paramètre 2
                    mAdapter.getCount());     // le nombre d’onglets automatique, paramètre 3
            if (tab != null) {
                tab.setContentDescription(cd_param_string);
            }         
//Pour Tablayout and BottomNavigationView l’information “sélectionné” est déjà vocalisée. 
//Soit, par exemple : «&nbsp;sélectionné, `titre onglet 1`, onglet 1 sur 5&nbsp;»
//ou encore «&nbsp;`titre onglet 3`, onglet 3 sur 5.&nbsp;» Puis  «&nbsp;appuyer deux fois pour activer&nbsp;».
// Paramètrer la borne supérieure automatiquement permet de ne pas se retrouver avec une vocalisation du type :
//«&nbsp;sélectionné, `titre onglet 4`, onglet 4 sur 3.&nbsp;», où la borne supérieure est incohérente.
// Pour le `TabHost` il faudrait en plus préciser l’information «&nbsp;sélectionné&nbsp;».
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
//Pour Tablayout and BottomNavigationView l’information “sélectionné” est déjà vocalisée. 
//Soit, par exemple : «&nbsp;sélectionné, `titre onglet 1`, onglet 1 sur 5&nbsp;»
//ou encore «&nbsp;`titre onglet 3`, onglet 3 sur 5.&nbsp;» Puis  «&nbsp;appuyer deux fois pour activer&nbsp;».
// Paramètrer la borne supérieure automatiquement permet de ne pas se retrouver avec une vocalisation du type :
// «&nbsp;sélectionné, `titre onglet 5`, onglet 4 sur 3.&nbsp;», où la borne supérieure est incohérente.
// Pour le `TabHost` il faudrait en plus préciser l’information «&nbsp;sélectionné&nbsp;».
            }
        }
    }
</code></pre>

**Référence <abbr>WCAG</abbr>&nbsp;:**  
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#non-text-content">1.1.1 Non-text Content</a>

  
<br/><br/>
  

## Gérer l'ordre de lecture avec la navigation vocale 

**Cible&nbsp;:** tout le monde et en particulier les personnes déficientes visuelles.  
**Quand&nbsp;:** dès la conception, à la rédaction du contenu et pendant le développement.

**Description&nbsp;:**  

L’ordre du focus du lecteur d’écran par défaut prend en compte plusieurs paramètres&nbsp;: la lecture «&nbsp;logique&nbsp;», en français, de gauche à droite et de haut en bas, et la lecture du <abbr>xml</abbr> (ordre de déclaration des éléments). Il est tout à fait possible de redéfinir cet ordre de lecture avec deux outils&nbsp;:  
- `accessibilityTraversalAfter`&nbsp;: prend un id en paramètre et permet de spécifier à la vue qu’elle doit être décrite par l’accessibilité après la vue passée en paramètre.
- `accessibilityTraversalBefore`&nbsp;: prend un id en paramètre et permet de spécifier à la vue qu’elle doit être décrite par l’accessibilité avant la vue passée en paramètre.

À noter&nbsp;: ces attributs peuvent être utilisés directement dans le <abbr>xml</abbr> mais également dans le code via les méthodes `setAccessibilityTraversalAfter` et `setAccessibilityTraversalBefore`. Ces méthodes sont disponibles pour tout élément qui hérite de `View`.

**À vérifier&nbsp;:**
- L'ordre de la vocalisation suit un ordre compréhensible et logique

**Exemple&nbsp;:**
Dans cet exemple, l’ordre de lecture par défaut dépend complètement de l’implémentation et de l’ordre de déclaration des éléments. Dans ce cas-ci&nbsp;: `vol+, vol-, 1, 2, 3, 4, 5, 6, 7, 8, 9, p+, p-, 0`. Un ordre de lecture plus cohérent serait `1, 2, 3, 4, 5, 6, 7, 8, 9, 0, vol+, vol-, p+, p-`.  

<img src="../../../images/order.png" alt="exemple d'écran représentant un clavier téléphonique" width="300">  

<pre><code class="java">volupButton.setAccessibilityTraversalAfter(myView.findViewById(R.id.remote0).getId());
voldownButton.setAccessibilityTraversalAfter(myView.findViewById(R.id.volup).getId());
chaineplusButton.setAccessibilityTraversalAfter(myView.findViewById(R.id.voldown).getId());
chainemoinsButton.setAccessibilityTraversalAfter(myView.findViewById(R.id.chaineplus).getId());</code></pre>

<pre><code class="kotlin">
volupButton.accessibilityTraversalAfter = remote0.id
voldownButton.accessibilityTraversalAfter = volup.id
chaineplusButton.accessibilityTraversalAfter = voldown.id
chainemoinsButton.accessibilityTraversalAfter = chaineplus.id
</code></pre>

**Référence <abbr>WCAG</abbr>&nbsp;:**  
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#meaningful-sequence">1.3.2 Meaningful Sequence</a>
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#focus-order">2.4.3 Focus Order</a>


<br/><br/>
## Vocaliser le changement de contenu

**Cible&nbsp;:** tout le monde et en particulier les personnes déficientes visuelles.  
**Quand&nbsp;:** dès la conception, à la rédaction du contenu et pendant le développement.

**Description&nbsp;:**  

Lorsque du contenu est modifié dynamiquement à la suite d’une action de l’utilisateur, il faut le notifier à la synthèse vocale. Autrement, un utilisateur non voyant ne peut pas savoir qu’une action a été déclenchée.  

Une simple vocalisation peut suffire à avertir l’utilisateur. Il est très facile de déclencher des vocalisations avec <span lang="en">TalkBack</span>. Attention : nous parlons de la vocalisation si <span lang="en">TalkBack</span> est activé et non pas de <abbr>TTS</abbr> (Text To Speech) qui peut fonctionner indépendamment du statut de <span lang="en">TalkBack</span>. Il suffit de faire appel à la méthode `announceForAccessibility` en lui passant en paramètre l’`id` de la chaîne de caractère à vocaliser. À noter&nbsp;: la méthode `announceForAccessibility` est disponible sur tout élément qui hérite de `View` et se fait dans la langue du système.

Il est également possible de spécifier à une vue qu’elle est une région <i lang="en">live</i>, c’est-à-dire que son contenu est susceptible d’être modifié dynamiquement et qu’elle doit dans ce cas prévenir l’<abbr>API</abbr> d’accessibilité. Cela aura pour conséquence de générer des vocalisations avec <span lang="en">TalkBack</span> par exemple. Un exemple type d’utilisation&nbsp;: sur un formulaire, si l’utilisateur fait une erreur et qu’un message d’erreur apparaît, la vue contenant le message doit être définie comme une région <i lang="en">live</i>.  Il faut passer par la méthode `setAccessibilityLiveRegion` qui prend en paramètre un mode pour la région <i lang="en">live</i>. Il existe 3 modes&nbsp;:
-	`ACCESSIBILITY_LIVE_REGION_NONE`&nbsp;: cette vue n’est pas une région <i lang="en">live</i>. C’est la valeur par défaut de la plupart des vues.
-	`ACCESSIBILITY_LIVE_REGION_POLITE`&nbsp;: en cas de changement dans la vue, des vocalisations sont effectuées sur les changements. Ces vocalisations sont «&nbsp;polies&nbsp;»&nbsp;; elles sont moins prioritaires que les vocalisations système par exemple.
-	`ACCESSIBILITY_LIVE_REGION_ASSERTIVE`&nbsp;: en cas de changement dans la vue, des vocalisations seront effectuées sur les changements. Ces vocalisations sont «&nbsp;<i lang="en">rude</i>&nbsp;»&nbsp;; elles sont prioritaires et immédiatement vocalisées. À noter, la méthode `setAccessibilityLiveRegion` est disponible sur tout élément qui hérite de `View`.


**À vérifier&nbsp;:**
- Les messages temporaires affichés à l'écran (tels que les Toast) sont vocalisés
- L'ouverture des dialogs sont vocalisés
- Les transitions entre les activités sont vocalisées (par le titre de la nouvelle activité par exemple)
- Les messages d'erreurs sont vocalisés
- Les scrolls horizontaux sont vocalisés
- Le changement d'une partie de l'écran (par exemple le changement un fragment) est vocalisé
- Le changement d'un élément de l'écran est vocalisé si il est utile pour l'utilisateur d'en être informé


**Exemple de déclenchement d'une vocalisation**:

Il est fréquent de tester la version d’Android avant de déclencher une vocalisation <span lang="en">TalkBack</span>. En effet, `announceForAccessibility` ne fonctionne que depuis l’arrivée d’Android <i lang="en">Jelly Bean</i>.
<pre>
<code class="java">if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.JELLY_BEAN) {
    myView.announceForAccessibility(getString(R.string.criteria_contentchange_ex1_announce));
    }
</code></pre><pre>
<code class="kotlin">if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.JELLY_BEAN) {
    myView.announceForAccessibility(getString(R.string.criteria_contentchange_ex1_announce))
    }
</code></pre>

**Exemple de région live**:

<pre><code class="xml">&lt;TextView
   […]
   android:accessibilityLiveRegion="polite" /&gt;
</code></pre>

## Ne pas vocaliser les éléments décoratifs et cachés

**Cible&nbsp;:** tout le monde et en particulier les personnes déficientes visuelles.  
**Quand&nbsp;:** dès la conception, à la rédaction du contenu et pendant le développement.

**Description&nbsp;:**  

Afin de ne pas polluer et de ne pas rendre confus la navigation avec un lecteur d'écran, il est nécessaire de ne vocaliser que les éléments signifiants. Les éléments décoratifs, tels que les illustrations ne doivent donc pas être vocalisés.

De plus, bien qu’invisibles à l’écran, certains éléments peuvent être lus par le lecteur d’écran (éléments positionnés en dehors de la zone visible ou masqués par d’autres éléments). La superposition d’écrans est quelque chose de courant sur mobile, mais cela engendre des problèmes d’accessibilité très lourds à corriger si elle n’est pas faite correctement dès le départ. Un lecteur d’écran tel que <span lang="en">TalkBack</span> est capable de lire les informations d’une vue qui est placée «&nbsp;sous&nbsp;» une autre. Mais si l’utilisateur n’est plus capable d’interagir avec cette vue, cela perturbe totalement sa navigation et celle-ci devient vite impossible.  
  
Grand classique du problème&nbsp;: les fragments. Un fragment est un composant qu’on peut facilement superposer par-dessus un autre sous Android. Une mauvaise utilisation des fragments peut aboutir à une navigation impossible avec le lecteur d’écran.  
  
Consulter l’article sur l’[utilisation des fragments](https://developer.android.com/guide/components/fragments.html) pour plus d’informations.

**À vérifier&nbsp;:**
- Aucun élément fantôme n'est vocalisé
- Les éléments décoratifs sont ignorés et ne sont pas vocalisés

**Exemples&nbsp;:**

<img src="../../../images/image_ex.png" alt="exemple complet d’image décorative et d’icône informative" width="400">

En décomposant l’image&nbsp;:
- <img src="../../../images/montagnard.png" alt="exemple d’image décorative" width="256"> pas de `contentDescription`
- <img src="../../../images/settings.png" alt="exemple d’icône informative - paramètres" width="48"> `imageView.setContentDescription("paramètres")`
- <img src="../../../images/edit.png" alt="exemple d’icône informative - édition" width="48"> `imageView.setContentDescription("éditer le nom de l’image")`

<pre><code class="xml">
    &lt;ImageView
        android:id="@+id/montagnard"
        android:src="@drawable/montagnard"
        android:contentDescription="@null"
        ... /&gt;
    &lt;ImageButton
        android:id="@+id/settings"
        android:src="@drawable/settings"
        android:contentDescription="@string/settings"
        ... /&gt;
    &lt;ImageButton
        android:id="@+id/edit"
        android:src="@drawable/edit"
        android:contentDescription="@string/edit"
        ... /&gt;
</code></pre>

**Référence <abbr>WCAG</abbr>&nbsp;:**  
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#non-text-content">1.1.1 Non-text Content</a>


## Regrouper les éléments 

**Cible&nbsp;:** tout le monde et en particulier les personnes déficientes visuelles.  
**Quand&nbsp;:** dès la conception, à la rédaction du contenu et pendant le développement.

**Description&nbsp;:**  

Il est recommandé de regrouper les éléments pour la vocalisation vocale lorsque cela permet de gagner en efficacité et en compréhension.

Par exemple, dans le cadre d'une application de musique, il est plus intéressant regrouper la vocalisation du nom de la musique, du nom de l'artiste et de la durée de celle-ci en un seul bloc, plutôt que de les vocaliser séparément et d'alourdir la navigation.

Il faut veiller à trouver la bonne balance entre la navigation et la vocalisation. Vocaliser trop d'informations dans un seul bloc va nuire à l'écoute, l'utilisateur devant patienter avant d'entendre l'info qu'il recherche. Tandis qu'avoir aucun élément regroupé va augmenter la quantité d'éléments naviguable et donc alourdir la navigation. C'est d'autant plus le cas lorsqu'on a des informations multidimensionnelles.

**À vérifier&nbsp;:**
- Les éléments reliés sont groupés au sein d'un même block d'annonce pour la vocalisation
- Les informations multidimensionnelles respectent une bonne balance entre nombre de blocs et nombre de contenu dans chaque bloc 


**Exemple d'une vocalisation groupée&nbsp;:**  
<pre><code class="xml">
&lt;ConstraintLayout
    android:id="@+id/song_data_container" ...
    android:screenReaderFocusable="true"&gt;

    &lt;TextView
        android:id="@+id/song_title" ...
        android:focusable="false"
        android:text="@string/my_song_title" /&gt;
    &lt;TextView
        android:id="@+id/song_artist"
        android:focusable="false"
        android:text="@string/my_songwriter" /&gt;
&lt;/ConstraintLayout&gt;</code></pre>

**Référence <abbr>WCAG</abbr>&nbsp;:**  
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#info-and-relationships">1.3.1 Info and Relationships</a>


## Gérer la navigation par entêtes

**Cible&nbsp;:** tout le monde et en particulier les personnes déficientes visuelles.  
**Quand&nbsp;:** dès la conception, à la rédaction du contenu et pendant le développement.

**Description&nbsp;:**  

Au sein d'un même écran, il arrive parfois que le contenu affiché présente différentes sections, avec pour chacune d'entre elles une entête. Il est possible avec le lecteur d'écran Talkback de naviguer par entêtes, plutôt que de naviguer par éléments. Il est donc bien plus rapide pour un utilisateur de naviguer entre les différentes sections.

Pour que Talkback puisse reconnaitre les entêtes, il faut ajouter un attribut dans le layout XML aux différents éléments considérés comme tel : **accessibilityHeading**

**À vérifier&nbsp;:**
- Les entêtes sont navigables avec le paramètre "Heading" de navigation Talkback

**Exemple&nbsp;**:
<pre><code class="xml">&lt;TextView
[…]
android:id="@+id/myTextLevel1viewId"
android:accessibilityHeading="true"
&#47;&gt;</code></pre>

**Référence <abbr>WCAG</abbr>&nbsp;:**  
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#headings-and-labels">2.4.6 Headings and Labels</a>
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#info-and-relationships">1.3.1 Info and Relationships</a>


## Masquer des éléments à l’accessibilité  

**Cible&nbsp;:** tout le monde et en particulier les personnes ayant des déficiences visuelles et/ou motrices.  
**Quand&nbsp;:** dès la phase de conception et lors du développement.

**Description&nbsp;:**

Il est possible via un attribut d’accessibilité de masquer des éléments aux outils d’accessibilité (<span lang="en">TalkBack</span> par exemple). Par extension, il est possible de forcer certains éléments à être visibles aux outils d’accessibilité.  
`ImportantForAccessibility`&nbsp;: suivant la valeur de l’attribut, cela permet d’indiquer qu’un élément est visible ou non de l’<abbr>API</abbr> d’accessibilité.  
-	`auto` (0)&nbsp;: valeur par défaut, c’est le système qui décide. Par exemple, un `Button` aura sa valeur par défaut à 1 (<i lang="en">yes</i>) et un `LinearLayout` à 2 (<i lang="en">no</i>).
-	`yes` (1)&nbsp;: la vue est importante pour l’accessibilité. Elle peut par exemple recevoir le focus de <span lang="en">TalkBack</span>.
-	`no` (2)&nbsp;: la vue n’est pas importante pour l’accessibilité. Elle ne déclenche plus d’événement d’accessibilité et est par conséquent ignorée par des services tel que <span lang="en">TalkBack</span>.
-	`noHideDescendants`  (4)&nbsp;: la vue n’est pas importante pour l’accessibilité, mais également toutes ses vues filles. Cela permet de cacher tous les éléments d’une vue à l’accessibilité en une seule fois. Très utile sur les éléments custom.  
  
À noter&nbsp;: l’attribut «&nbsp;`importantForAccessibility`&nbsp;» est disponible pour tout élément qui hérite de `View`.

**Exemples&nbsp;:**

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

## Détecter si <span lang="en">TalkBack</span> est activé
**Description&nbsp;:**

Sous Android, il est possible de savoir si l’<abbr>API</abbr> d’accessibilité est activée, et par extension de savoir si <span lang="en">TalkBack</span> est activé.

**Exemple&nbsp;**:

<pre><code>AccessibilityManager am = (AccessibilityManager) context.getSystemService(ACCESSIBILITY_SERVICE);  
boolean isAccessibilityEnabled = am.isEnabled();
</code></pre><pre>
<code class="kotlin">val am = context.getSystemService(Context.ACCESSIBILITY_SERVICE) as AccessibilityManager
val isAccessibilityEnabled = am.isEnabled
</code></pre>

