---
title: "Navigation vocale"
abstract: "Quelques recommandations d'accessibilité pour la navigation à l'aide du lecteur d'écran sous Android"
---

# Navigation vocale


## Vocaliser les images

**Cible&nbsp;:** tout le monde et en particulier les personnes ayant des déficiences visuelles.  
**Quand&nbsp;:** dès la conception, à la rédaction du contenu et pendant le développement.

**Description&nbsp;:**

Il est important que les images possèdent une alternative textuelle qui donne toutes les informations portées par l’image aux personnes qui utilisent la navigation vocale.

Dans le cas d’une image contenant du texte, l’alternative sera ledit texte. Dans le cas d’une image qui apporte des informations sous la forme d’un graphe, dessin ou autre, l’alternative devra contenir toutes les informations nécessaires présentes dans l’image.

Les images décoratives en revanche ne nécessitent pas d'alternative textuelle et ne doivent donc pas être vocalisées.
  
**À vérifier&nbsp;:**
- Les images portant de l’information restituent cette information à travers leurs alternatives textuelles


**Exemple valide&nbsp;:**  

L'image contenant l'information de la chaine est bien vocalisée par le lecteur d'écran.
<img src="../../../images/image_desc.jpg" alt="exemple d'écran avec une image informative vocalisée" width="300" height="530">


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
  
Certaines images sont régulièrement associées à du texte pour donner une information. C’est le cas notamment des «&nbsp;messages non lus&nbsp;» où une infobulle donne le nombre de messages à lire et où une image donne l’information «&nbsp;message&nbsp;». Dans ce cas, la solution consiste à placer une alternative textuelle sur le texte avec toutes les informations nécessaires. Par exemple&nbsp;: «&nbsp;3 messages non lus&nbsp;». On peut également placer cette alternative sur l’image, mais dans ce cas, il faut penser à rendre le texte «&nbsp;invisible&nbsp;» pour le lecteur d’écran.

**Exemple&nbsp;:**

Ci-dessous, un exemple fréquent d’une icône qu’on couple avec du texte (infobulle) pour ajouter de l’information. Dans notre cas, l’icône «&nbsp;mail&nbsp;» couplée à l’infobulle de valeur «&nbsp;3&nbsp;» nous fait comprendre que nous avons «&nbsp;3 mails non lus&nbsp;». Si aucune alternative textuelle n’est ajoutée, 2 vocalisations seront lues «&nbsp;bouton sans libellé&nbsp;» et «&nbsp;3&nbsp;». On comprend bien ici l’importance d’ajouter des alternatives textuelles.  
<img src="../../../images/alt.png" alt="exemple d’icône couplée à du texte qui nécessite une alternative textuelle" width="80" class="pull-left">


**À vérifier&nbsp;:**

- Les éléments de l’application sont tous vocalisés et accessibles
- Les vocalisations de l’application sont explicites et compréhensibles pour chacun des éléments.
- Les éléments interactifs sont vocalisés avec l'action associée
- Les titres des activités sont vocalisés
- Les items d'une liste sont vocalisés indépendamment les uns des autres


**Référence <abbr>WCAG</abbr>&nbsp;:**  
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#non-text-content">1.1.1 Non-text Content</a>

<br/><br/>
## Gérer l'ordre de lecture avec la navigation vocale 

**Cible&nbsp;:** tout le monde et en particulier les personnes déficientes visuelles.  
**Quand&nbsp;:** dès la conception, à la rédaction du contenu et pendant le développement.

**Description&nbsp;:**  
L’ordre du focus du lecteur d’écran par défaut prend en compte plusieurs paramètres : la lecture « logique », en français, de gauche à droite et de haut en bas, et la lecture du xml (ordre de déclaration des éléments). Il arrive parfois que cela ne suffise pas à établir un ordre cohérent, comme dans l'exemple ci-dessous, et il est donc nécessaire de redéfinir cet ordre de lecture.

**Exemple&nbsp;:**      
Dans cet exemple, l’ordre de lecture par défaut dépend complètement de l’implémentation et de l’ordre de déclaration des éléments. Dans ce cas-ci&nbsp;: `vol+, vol-, 1, 2, 3, 4, 5, 6, 7, 8, 9, p+, p-, 0`. Un ordre de lecture plus cohérent serait `1, 2, 3, 4, 5, 6, 7, 8, 9, 0, vol+, vol-, p+, p-`.  
<img src="../../../images/order.png" alt="exemple d'ordre de lecture pour un clavier de téléphone" width="300" height="245">


**À vérifier&nbsp;:**
- L'ordre de la vocalisation suit un ordre compréhensible et logique


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



## Ne pas vocaliser les éléments décoratifs et cachés

**Cible&nbsp;:** tout le monde et en particulier les personnes déficientes visuelles.  
**Quand&nbsp;:** dès la conception, à la rédaction du contenu et pendant le développement.

**Description&nbsp;:**  

Afin de ne pas polluer et de ne pas rendre confus la navigation avec un lecteur d'écran, il est nécessaire de ne vocaliser que les éléments signifiants. Les éléments décoratifs, tels que les illustrations, ne doivent donc pas être vocalisés.

De plus, bien qu’invisibles à l’écran, certains éléments peuvent être lus par le lecteur d’écran (éléments positionnés en dehors de la zone visible ou masqués par d’autres éléments). La superposition d’écrans est quelque chose de courant sur mobile, mais cela engendre des problèmes d’accessibilité très lourds à corriger si elle n’est pas faite correctement dès le départ. Un lecteur d’écran tel que <span lang="en">TalkBack</span> est capable de lire les informations d’une vue qui est placée «&nbsp;sous&nbsp;» une autre. Mais si l’utilisateur n’est plus capable d’interagir avec cette vue, cela perturbe totalement sa navigation et celle-ci devient vite impossible.  
  
Grand classique du problème&nbsp;: les fragments. Un fragment est un composant qu’on peut facilement superposer par-dessus un autre sous Android. Une mauvaise utilisation des fragments peut aboutir à une navigation impossible avec le lecteur d’écran.  
  
Consulter l’article sur l’[utilisation des fragments](https://developer.android.com/guide/components/fragments.html) pour plus d’informations.

**À vérifier&nbsp;:**
- Aucun élément fantôme n'est vocalisé
- Les éléments décoratifs sont ignorés et ne sont pas vocalisés

**Exemples&nbsp;:**

<img src="../../../images/image_ex.png" alt="exemple complet d’image décorative et d’icône informative" width="400" height="149">

En décomposant l’image&nbsp;:
- <img src="../../../images/montagnard.png" alt="exemple d’image décorative" width="256" height="95"> pas de `contentDescription`
- <img src="../../../images/settings.png" alt="exemple d’icône informative - paramètres" width="48" height="48"> `imageView.setContentDescription("paramètres")`
- <img src="../../../images/edit.png" alt="exemple d’icône informative - édition" width="48" height="48"> `imageView.setContentDescription("éditer le nom de l’image")`


Dans l’exemple ci-dessous, le cadre vert correspond au focus de <span lang="en">TalkBack</span>. Ce dernier vocalise (la vocalisation est affichée en bas de l’écran sur la capture) un contenu se trouvant derrière la vue active.  
<img src="../../../images/ghost.png" alt="exemple d’élément fantôme" width="300" height="530">


**Référence <abbr>WCAG</abbr>&nbsp;:**  
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#non-text-content">1.1.1 Non-text Content</a>


## Regrouper les éléments 

**Cible&nbsp;:** tout le monde et en particulier les personnes déficientes visuelles.  
**Quand&nbsp;:** dès la conception, à la rédaction du contenu et pendant le développement.

**Description&nbsp;:**  

Il est recommandé de regrouper les éléments pour la vocalisation vocale lorsque cela permet de gagner en efficacité et en compréhension.

Par exemple, dans le cadre d'une application de musique, il est plus intéressant de regrouper la vocalisation du titre de la musique, du nom de l'artiste et de la durée de celle-ci en un seul bloc, plutôt que de les vocaliser séparément et d'alourdir la navigation.

Il faut veiller à trouver le bon équilibre entre la navigation et la vocalisation. Vocaliser trop d'informations dans un seul bloc va nuire à l'écoute, l'utilisateur devant patienter avant d'entendre l'info qu'il recherche. Tandis qu'avoir aucun élément regroupé va augmenter la quantité d'éléments naviguables et donc alourdir la navigation. C'est d'autant plus le cas lorsqu'on a des informations multidimensionnelles.

**À vérifier&nbsp;:**
- Les éléments reliés sont groupés au sein d'un même bloc d'annonces pour la vocalisation
- Les informations multidimensionnelles respectent un bon équilibre entre le nombre de blocs et le nombre de contenus dans chaque bloc 


**Exemple valide&nbsp;:**  

Plusieurs éléments sont ici regroupés pour améliorer la navigation
<img src="../../../images/regroupement.jpg" alt="exemple d'écran avec des éléments regroupés en une seule vocalisation" width="300" height="530">


**Référence <abbr>WCAG</abbr>&nbsp;:**  
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#info-and-relationships">1.3.1 Info and Relationships</a>


## Permettre la navigation par entêtes

**Cible&nbsp;:** tout le monde et en particulier les personnes déficientes visuelles.  
**Quand&nbsp;:** dès la conception, à la rédaction du contenu et pendant le développement.

**Description&nbsp;:**  

Au sein d'un même écran, il arrive parfois que le contenu affiché présente différentes sections, avec pour chacune d'entre elles une entête. Il est possible avec le lecteur d'écran Talkback de naviguer par entêtes, plutôt que de naviguer par éléments. Il est alors plus rapide pour un utilisateur de naviguer entre les différentes sections.

Pour que Talkback puisse reconnaitre les entêtes, il faut ajouter un attribut dans le layout XML aux différents éléments considérés comme tels : **accessibilityHeading**

**À vérifier&nbsp;:**
- Les entêtes sont navigables avec le paramètre "Heading" de navigation Talkback 


**Référence <abbr>WCAG</abbr>&nbsp;:**  
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#headings-and-labels">2.4.6 Headings and Labels</a>
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#info-and-relationships">1.3.1 Info and Relationships</a>

## Permettre la navigation par contrôles

**Cible&nbsp;:** tout le monde et en particulier les personnes déficientes visuelles.  
**Quand&nbsp;:** dès la conception, à la rédaction du contenu et pendant le développement.

**Description&nbsp;:**  

Avec l'outil Talkback, l'utilisateur peut opter pour la navigation entre les différents contrôles (bouton, checkbox, champs de saisie, etc...) de l'application, plutôt qu'élément par élément. Cela lui permet d'interagir plus rapidement avec l'application. Il faut donc faire attention aux éléments "custom", qui peuvent ne pas être reconnu comme contrôle.

**À vérifier&nbsp;:**
- Les éléments interactifs sont tous navigables une fois le paramètre Talkback de navigation par contrôle défini







