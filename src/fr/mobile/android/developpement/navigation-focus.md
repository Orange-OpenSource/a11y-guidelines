---
title: "Navigation au clavier (Switch Access)"
---

# Navigation au clavier (Switch Access)

## Accéder aux éléments interactifs

**Cible&nbsp;:** tout le monde et en particulier les personnes déficientes motrices ou cognitives.  
**Quand&nbsp;:** lors de la conception et lors du développement.

La navigation avec Switch Access est très utile pour les personnes qui présentent des difficultés motrices ou cognitives. Cette navigation permet de passer d’élément interactif en élément interactif (élément sur lequel on peut effectuer une action). Elle correspond à la navigation que l’on peut faire avec un clavier Bluetooth lié à un smartphone.

Pour gérer la navigation au clavier, il faut s’assurer de 2 choses&nbsp;:  
- Permettre le focus sur les éléments interactifs&nbsp;: la navigation au clavier ne concerne que les éléments interactifs. Si, par exemple, votre application possède des vues <i lang="en">custom</i> cliquables, il faut s’assurer que ces vues soient "focusables" en positionnant l’attribut `focusable` à `true`.
- Gérer l’affichage du focus&nbsp;: tout élément interactif peut recevoir le focus, il faut donc que le `state_focused` soit défini et permette de distinguer d’un seul coup d’œil quel élément a le focus.

À noter : Android Pie (9, API 28), introduit un focus spécifique au lecteur d’écran permet d’éviter les effets de bords entre le focus du lecteur d’écran (screenReaderFocusable) et le focus clavier (focusable). La navigation clavier n’est pas sensible au screenReaderFocusable.

**À vérifier&nbsp;:**

- À la navigation au clavier, il est possible de déterminer visuellement l’élément qui a le focus
- Toutes les fonctionnalités sont accessibles avec la navigation au clavier
- Tous les éléments interactifs sont bien mis en surbrillance avec la navigation au clavier
- Il n'y a que les éléments interactifs qui sont mis en surbrillance avec la navigation au clavier

**Exemple&nbsp;**:
Exemple de sélecteur qui prend en compte l’état `state_focused` :
<pre><code class="xml">&lt;selector xmlns:android="http://schemas.android.com/apk/res/android"&gt;
	&lt;!-- Non focused states --&gt;
	&lt;item android:state_focused="false" android:state_selected="false" android:state_pressed="false" android:drawable="@drawable/draw_unselected_selector" /&gt;
	&lt;item android:state_focused="false" android:state_selected="true"  android:state_pressed="false" android:drawable="@drawable/draw_selected_selector" /&gt;
&nbsp;
	&lt;!-- Focused states --&gt;
	&lt;item android:state_focused="true" android:state_selected="false" android:state_pressed="false" android:drawable="@drawable/draw_unselected_focused_selector" /&gt;
	&lt;item android:state_focused="true" android:state_selected="true"  android:state_pressed="false" android:drawable="@drawable/draw_selected_focused_selector" /&gt;
&nbsp;
	&lt;!-- Pressed --&gt;
	&lt;!-- Non focused states --&gt;
	&lt;item android:state_focused="false" android:state_selected="false" android:state_pressed="true" android:drawable="@drawable/draw_unselected_pressed_selector" /&gt;
	&lt;item android:state_focused="false" android:state_selected="true"  android:state_pressed="true" android:drawable="@drawable/draw_selected_pressed_selector" /&gt;
&nbsp;
	&lt;!-- Focused states --&gt;
	&lt;item android:state_focused="true" android:state_selected="false" android:state_pressed="true" android:drawable="@drawable/draw_unselected_pressed_selector" /&gt;
	&lt;item android:state_focused="true" android:state_selected="true"  android:state_pressed="true" android:drawable="@drawable/draw_selected_pressed_selector" /&gt;
&lt;/selector&gt;</code></pre>

Exemple d'une vue focusable avec la navigation au clavier
<pre><code>&lt;View android:focusable="true"
              android:layout_width="0px"
              android:layout_height="0px" /&gt;</code></pre>


Exemple d'une vue non focusable avec la navigation au clavier mais focusable au toucher.	
<pre><code>&lt;View android:focusableInTouchMode="true" 
              android:layout_width="0px"
              android:layout_height="0px" /&gt;</code></pre>

**Référence <abbr>WCAG</abbr>&nbsp;:**  
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#keyboard">2.1.1 Keyboard</a>
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#name-role-value">4.1.2 Name, Role, Value</a>
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#focus-visible">2.4.7 Focus Visible</a>


## Ordonner la navigation au clavier

**Cible&nbsp;:** tout le monde et en particulier les personnes déficientes motrices qui utilisent un clavier pour naviguer.  
**Quand&nbsp;:** lors de la conception et lors du développement.

**Description&nbsp;:**

La navigation au clavier, pour être compréhensible et facile d'utilisation, doit proposer un ordre cohérent et compréhensible de navigation. Il est donc important de gérer l’ordre du focus&nbsp;: à travers les options `nextFocusDown`, `nextFocusUp`, `nextFocusRight` et `nextFocusLeft`, vous pouvez spécifier quelle vue doit prendre le focus selon l’utilisation des flèches tab, bas, haut, droit et gauche.

À noter&nbsp;: `nextFocusDown`, `nextFocusUp`, `nextFocusRight`, `nextFocusLeft`, `focusable` ainsi que d’autres options de gestion du focus sont accessibles directement dans le <abbr>XML</abbr> ou dans le code à travers les méthodes correspondantes.
  
Pour plus d’information sur la [gestion du focus sous Android](http://developer.android.com/guide/topics/ui/accessibility/apps.html#focus-nav).


**À vérifier&nbsp;:**

- L’ordre de navigation au clavier est logique et cohérent.
- Les éléments sont regroupés lorsqu'ils sont liés (exemple : contenu au sein d'un item cliquable d'une liste)

**Exemple**
<pre><code class="xml">&lt;EditText
    android:id="@+id/et1"
    android:nextFocusDown="@+id/et2"
    android:nextFocusUp="@+id/et2"
    ....../&gt;

&lt;EditText
    android:id="@+id/et2"
    android:nextFocusDown="@+id/et1"
    android:nextFocusUp="@+id/et1"
    ...../&gt;</code></pre>

**Référence <abbr>WCAG</abbr>&nbsp;:**  
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#meaningful-sequence">1.3.2 Meaningful Sequence</a>
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#no-keyboard-trap">2.1.2 No Keyboard Trap</a>
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#focus-order">2.4.3 Focus Order</a>


