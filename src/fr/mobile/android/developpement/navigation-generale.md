---
title: "Navigation générale"
---

# Navigation générale

## Avoir des zones de clic suffisamment grandes

**Cible&nbsp;:** pour tous et en particulier les personnes avec des déficiences motrices  
**Quand&nbsp;:** dès la phase de conception et lors du développement.

**Description&nbsp;:**  

Une taille insuffisante pour la zone d’action d’un composant peut empêcher certains utilisateurs de profiter pleinement de l’application. Cela peut engendrer des frustrations qui peuvent conduire à la désinstallation de l’application. Chaque élément cliquable de l’application doit donner à l’utilisateur une taille suffisante pour sa zone d’action.

**À vérifier&nbsp;:**

- La zone de clic a une taille d'au minimum 48 dp
- La zone de clic a une marge autour de l'élément d'au moins 8 dp
- Les erreurs de clic peuvent être annulées en déplaçant son doigt hors de la zone cliquable avant de relâcher


**Exemples valide&nbsp;:** 

Exemple simple &nbsp;:
<pre><code class="xml">&lt;Button 
    android:text="Click"
    android:layout_width="48dp"
    android:layout_height="48dp"
    android:margin="8dp"
&#47;&gt;</code></pre>

Exemple avec padding &nbsp;:
<pre><code class="xml">&lt;Button 
    android:text="Click"
    android:layout_width="40dp"
    android:layout_height="40dp"
    android:padding="4dp"
    android:margin="8dp"
&#47;&gt;</code></pre>

**Exemples non-valide&nbsp;:** 

<pre><code class="xml">&lt;Button 
    android:text="Click"
    android:layout_width="48dp"
    android:layout_height="48dp"
    android:margin="4dp"
&#47;&gt;</code></pre>


<pre><code class="xml">&lt;Button 
    android:text="Click"
    android:layout_width="40dp"
    android:layout_height="40dp"
    android:margin="8dp"
&#47;&gt;</code></pre>


**Référence <abbr>WCAG</abbr>&nbsp;:**  
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#target-size">2.5.5 Target Size</a>
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#pointer-cancellation">2.5.2 Pointer Cancellation</a>


<br/><br/>

## Proposer des textes lisibles

**Cible&nbsp;:** tout le monde et en particulier les personnes ayant des déficiences visuelles, et les personnes dyslexiques.  
**Quand&nbsp;:** dès la phase de conception et lors du développement.

**Description&nbsp;:**

Le texte peut poser des problèmes de lisibilité lorsque celui-ci présente une police d'écriture avec de l'empâtement ou que sa taille du texte est trop petite. Il est notamment recommandé d'utiliser une taille minimum de 14sp pour les textes. 

**À vérifier&nbsp;:**

- La police d'écriture est sans serif
- Les textes sont suffisamment grands pour être lus confortablement
- Il n'y a pas d'italique utilisé

**Exemple valide&nbsp;:** 

<pre><code class="xml">&lt;TextView
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:fontFamily="sans-serif" 
    android:textSize="14sp"
    android:text="Exemple"
&#47;&gt;</code></pre>


**Exemple non valide&nbsp;:** 
<pre><code class="xml">&lt;TextView
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:fontFamily="sans-serif" 
    android:textStyle="italic" 
    android:textSize="14sp"
    android:text="Exemple"
&#47;&gt;</code></pre>


<pre><code class="xml">&lt;TextView
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:fontFamily="sans-serif" 
    android:textSize="10sp"
    android:text="Exemple"
&#47;&gt;</code></pre>


**Référence <abbr>WCAG</abbr>&nbsp;:**  
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#text-spacing">1.4.12 Text Spacing</a>


<br/><br/>

## Rendre adaptable les UI avec limite de temps

**Cible&nbsp;:** tout le monde et en particulier les personnes ayant des déficiences visuelles et/ou motrices.
**Quand&nbsp;:** dès la phase de conception et lors du développement.

**Description&nbsp;:**

Sur certaines applications, il arrive que l’UI change après un certain délai. C'est le cas par exemple pour les lecteurs vidéo : il est fréquent que les boutons de contrôles associés à la vidéo disparaissent après une dizaine de secondes sans interaction. 

Cette évolution automatique de l'interface pose cependant un problème pour l'accessibilité, une personne ayant peut-être besoin de plus de temps pour interagir avec les éléments. Ce délai doit donc pouvoir être adapté selon le besoin de chaque utilisateur. 

Une option d'accessibilité nommée **Time to take action** existe depuis Android 10, et permet de définir son propre timeout depuis les paramètres d'accessibilité. Il est ainsi possible d'exploiter cette option par le biais de la fonction `getRecommendedTimeoutMillis()`. Cette méthode prend en charge les délais d'expiration définis par l'utilisateur pour les éléments d'interface utilisateur interactifs et non interactifs. La valeur de retour est influencée à la fois par les préférences de l'utilisateur (Time to take action) et les API du service d'accessibilité.

**À vérifier&nbsp;:**

- Une UI avec limite de temps a son délai paramétrable

**Référence <abbr>WCAG</abbr>&nbsp;:**  
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#timing-adjustable">2.2.1 Timing Adjustable</a>


## Événements d’accessibilité & <i lang="en">custom views</i>

**Cible&nbsp;:** tout le monde et en particulier les personnes ayant des déficiences visuelles et/ou motrices.
**Quand&nbsp;:** lors du développement.

**Description&nbsp;:**
Il existe sous Android un bon nombre d’événements liés à l’<abbr>API</abbr> d’accessibilité. Vous pouvez manipuler ces événements au même titre que d’autres événements. Ils permettent d’enrichir des composants <i lang="en">custom</i> insuffisamment accessibles. L’utilisation des événements d’accessibilité est assez rare dans les applications non dédiées à l’accessibilité, les autres options étant généralement suffisantes. Cependant, il faut savoir qu’ils existent et permettent de surcharger la vocalisation d’un composant.

Pour plus d’informations, nous vous invitons à regarder les liens ci-dessous.

**Liens&nbsp;:**

- [`AccessibilityEvents`](http://developer.android.com/reference/android/view/accessibility/AccessibilityEvent.html)
- [Construire une vue custom accessible](https://developer.android.com/guide/topics/ui/accessibility/custom-views)
- [Exemple de squelette d’implémentation des événements](https://github.com/Pascale22/A11yEventApp) en <abbr>Kotlin</abbr>


**À vérifier&nbsp;:**

- Les custom views réagissent convenablement à l'accessibilité
  
<br/><br/>

## <i lang="en">WebView</i>

**Cible&nbsp;:** tout le monde et en particulier les personnes ayant des déficiences visuelles et/ou motrices.
**Quand&nbsp;:** lors du développement.

**Description&nbsp;:**
Les `WebView` ont un traitement un peu particulier sous Android. Pour commencer, si on veut qu’une page soit accessible, il faut que le contenu HTML le soit, à savoir qu’il respecte les normes internationales sur le sujet&nbsp;: les WCAG2. Pour connaître ces règles et apprendre les techniques de développement pour un web accessible, nous vous invitons à visiter la section de notre site consacrée au sujet&nbsp;: [recommandations accessibilité pour le web](../../../../web/).

Côté Android, il faut s’assurer que la <i lang="en">WebView</i> autorise le JavaScript&nbsp;: `mWebView.getSettings().setJavaScriptEnabled(true);`  
Dans ces conditions, la page affichée à travers la `WebView`  réagit convenablement à l’<abbr>API</abbr> d’accessibilité.


**À vérifier&nbsp;:**

- Les WebView réagissent convenablement à l'accessibilité