---
title: "Navigation vocale"
---

# Navigation vocale

## Vocaliser tout les éléments signifiants

**Cible&nbsp;:** tout le monde et en particulier les personnes déficientes visuelles.  
**Quand&nbsp;:** dès la conception, à la rédaction du contenu et pendant le développement.

**Description&nbsp;:**  
Lorsqu'un utilisateur navigue à l'aide de la navigation vocale (Talkback par exemple), chaque élément signifiant de l'écran doit lui être restitué vocalement, afin qu'il puisse utiliser l'application sans aucune perte d'information. 

Les alternatives textuelles sont au cœur de l’accessibilité sur mobile. Tandis qu'un texte sera restitué nativement par le lecteur d'écran, certains éléments nécessitent une alternative textuelle pour pouvoir vocaliser l'information correctement.

Il est important de renseigner une alternative textuelle lorsque l’information n’est pas disponible ou suffisante nativement. C’est le cas des composants fournissant de l’information par la couleur, la forme, la position, le son… Sur mobile, tous les composants peuvent recevoir une alternative textuelle, il est donc possible d’enrichir la vocalisation native d’un élément, y compris celle d’un simple texte.  
  
Concernant les images,il est important que celles-ci possèdent une alternative qui donne toutes les informations portées par l’image.
Dans le cas d’une image contenant du texte, l’alternative sera ledit texte. Dans le cas d’une image qui apporte des informations sous la forme d’un graphe, dessin ou autre, l’alternative devra contenir toutes les informations nécessaires présentes dans l’image.

Les images décoratives en revanche ne nécessitent pas d'alternative textuelles et ne doivent donc pas être vocalisées.

L’alternative textuelle est renseignée via l’attribut contentDescription (disponible pour tout élément héritant de View).

La place sur mobile étant réduite, on utilise bien souvent des abréviations pour les textes. Mais cependant, cela pose un problème aux utilisateurs de synthèse vocale qui restituent les abréviations telles quelles. Pour corriger ces vocalisations, il suffit de placer une alternative textuelle sur le texte. Cette alternative contient le texte non abrégé. À noter que <span lang="en">TalkBack</span> sait reconnaître quelques abréviations courantes. Par exemple, «&nbsp;etc.&nbsp;» et «&nbsp;Dr.&nbsp;» sont bien vocalisées «&nbsp;et cetera&nbsp;» et «&nbsp;Docteur&nbsp;».  
  
Certaines images sont régulièrement associées à du texte pour donner une information. C’est le cas notamment des «&nbsp;messages non lus&nbsp;» où une infobulle donne le nombre de messages à lire et où une image donne l’information «&nbsp;message&nbsp;». Dans ce cas, la solution consiste à placer une alternative textuelle sur le texte qui donne toutes les informations nécessaires. Par exemple&nbsp;: «&nbsp;3 messages non lus&nbsp;». On peut également placer cette alternative sur l’image, mais dans ce cas, il faut penser à rendre le texte «&nbsp;invisible&nbsp;» pour le lecteur d’écran.


**À vérifier&nbsp;:**

- Les éléments de l’application sont tous vocalisés et accessibles
- Les vocalisations de l’application sont explicites et compréhensibles pour chacun des éléments.
- Les éléments interactifs sont vocalisés avec l'action associée
- Les titres des activités sont vocalisés
- Les items d'une liste sont vocalisés indépendamment les uns des autres
- Les images portant de l’information restituent cette information à travers leur alternative textuelle
- L'ordre de la vocalisation suit un ordre compréhensible et logique

**Exemple&nbsp;:**

Ci-dessous, un exemple fréquent d’une icône qu’on couple avec du texte (infobulle) pour ajouter de l’information. Dans notre cas, l’icône «&nbsp;mail&nbsp;» couplée à l’infobulle de valeur «&nbsp;3&nbsp;» nous fait comprendre que nous avons «&nbsp;3 mails non lus&nbsp;». Si aucune alternative textuelle n’est ajoutée, 2 vocalisations seront lues «&nbsp;bouton sans libellé&nbsp;» et «&nbsp;3&nbsp;». On comprend bien ici l’importance d’ajouter des alternatives textuelles.  
<img src="../../../images/alt.png" alt="exemple d’icône couplée à du texte qui nécessite une alternative textuelle" width="80" class="pull-left">
   
**Exemple&nbsp;:**      
Dans cet exemple, l’ordre de lecture par défaut dépend complètement de l’implémentation et de l’ordre de déclaration des éléments. Dans ce cas-ci&nbsp;: `vol+, vol-, 1, 2, 3, 4, 5, 6, 7, 8, 9, p+, p-, 0`. Un ordre de lecture plus cohérent serait `1, 2, 3, 4, 5, 6, 7, 8, 9, 0, vol+, vol-, p+, p-`.  
<img src="../../../images/order.png" alt="exemple de scroll horizontal accessible" width="300">

## Vocaliser le changement de contenu

**Cible&nbsp;:** tout le monde et en particulier les personnes déficientes visuelles.  
**Quand&nbsp;:** dès la conception, à la rédaction du contenu et pendant le développement.

**Description&nbsp;:**  

Lorsque du contenu est modifié dynamiquement à la suite d’une action de l’utilisateur, il faut le notifier à la synthèse vocale. Sans retour vocal, l’utilisateur ne sait pas qu’une action a été déclenchée.  
Sur une page, si du contenu est modifié dynamiquement suite à une action utilisateur, il est important que le lecteur d’écran soit notifié afin qu’il déclenche une vocalisation. Par exemple, les listes qui se rafraîchissent, ou un compteur de temps.

Une simple vocalisation peut suffire à avertir l’utilisateur. Il est très facile de déclencher des vocalisations avec <span lang="en">TalkBack</span>. Attention : nous parlons de la vocalisation si <span lang="en">TalkBack</span> est activé et non pas de <abbr>TTS</abbr> (Text To Speech) qui peut fonctionner indépendamment du statut de <span lang="en">TalkBack</span>. Il suffit de faire appel à la méthode `announceForAccessibility` en lui passant en paramètre l’`id` de la chaîne de caractère à vocaliser. À noter&nbsp;: la méthode `announceForAccessibility` est disponible sur tout élément qui hérite de `View` et se fait dans la langue du système.

Il est également possible de spécifier à une vue qu’elle est une région <i lang="en">live</i>, c’est-à-dire que son contenu est susceptible d’être modifié dynamiquement et qu’elle doit dans ce cas prévenir l’<abbr>API</abbr> d’accessibilité. Cela aura pour conséquence de générer des vocalisations avec <span lang="en">TalkBack</span> par exemple. Un exemple type d’utilisation&nbsp;: sur un formulaire, si l’utilisateur fait une erreur et qu’un message d’erreur apparaît, la vue contenant le message doit être définie comme une région <i lang="en">live</i>.  Il faut passer par la méthode `setAccessibilityLiveRegion` qui prend en paramètre un mode pour la région <i lang="en">live</i>. Il existe 3 modes&nbsp;:
-	`ACCESSIBILITY_LIVE_REGION_NONE`&nbsp;: cette vue n’est pas une région <i lang="en">live</i>. C’est la valeur par défaut de la plupart des vues.
-	`ACCESSIBILITY_LIVE_REGION_POLITE`&nbsp;: en cas de changement dans la vue, des vocalisations sont effectuées sur les changements. Ces vocalisations sont «&nbsp;polies&nbsp;»&nbsp;; elles sont moins prioritaires que les vocalisations système par exemple.
-	`ACCESSIBILITY_LIVE_REGION_ASSERTIVE`&nbsp;: en cas de changement dans la vue, des vocalisations seront effectuées sur les changements. Ces vocalisations sont «&nbsp;<i lang="en">rude</i>&nbsp;»&nbsp;; elles sont prioritaires et immédiatement vocalisées. À noter, la méthode `setAccessibilityLiveRegion` est disponible sur tout élément qui hérite de `View`.


**À vérifier&nbsp;:**
- Les messages temporaires affichés à l'écran (tels que les Toast) sont vocalisés
- L'ouverture des dialogs sont vocalisés
- Les transitions entre les activités sont vocalisés (par le titre de la nouvelle activité par exemple)
- Les messages d'erreurs sont vocalisés
- Les scrolls horizontaux sont vocalisés
- Le changement d'une partie de l'écran (par exemple le changement un fragment) est vocalisé
- Le changement d'un élément de l'écran est vocalisé si il est utile pour l'utilisateur d'en être informé

## Vocaliser l'état des éléments

**Cible&nbsp;:** tout le monde et en particulier les personnes déficientes visuelles.  
**Quand&nbsp;:** lors du développement.

**Description&nbsp;:**

Si un élément ne restitue pas à la vocalisation son statut, sa nature ou son état, l’utilisateur de <span lang="en">TalkBack</span> est dans l’impossibilité de comprendre ce qui se passe à l’écran. Ne pas préciser qu’une zone est dépliée ou que l’on se trouve face à un système d’onglets sont des exemples très fréquents.  
  
Grand classique de ce problème&nbsp;: les onglets. Les différents types d’onglets proposés dans Android ne donnent pas toutes les informations sur leur nature et sur leur état. Il est donc à la charge du développeur de donner ces informations à l’utilisateur via les attributs d’accessibilité correspondants (`contentDescription`). En l’occurrence, une bonne alternative pour le titre d’un onglet peut être&nbsp;: "sélectionné, titre de l’onglet, onglet 1 sur 3"  
  
Autre classique d’élément qui ne restitue pas par défaut son état&nbsp;: les zones dépliables. Encore une fois, c’est grâce à l’alternative textuelle du titre de la zone dépliable que l’on peut donner à l’utilisateur de <span lang="en">TalkBack</span> le statut de celle-ci. 
  
Pour renseigner ce genre d’information, il faut utiliser l’attribut `contentDescription` (disponible pour tout élément héritant de `View`).

**À vérifier&nbsp;:**

- Tout élément dont le statut peut être modifié durant l’utilisation de l’application doit restituer son état à travers son alternative textuelle. Par exemple, un élément qui peut être sélectionné/non sélectionné doit restituer son état à travers une alternative textuelle.


**Exemple&nbsp;:**

<img src="../../../images/tabs.png" alt="exemple d’onglets qui ne restituent pas leur état et nature par défaut" width="400"> 
  

## Ne pas vocaliser les éléments décoratifs et cachés

**Cible&nbsp;:** tout le monde et en particulier les personnes déficientes visuelles.  
**Quand&nbsp;:** dès la conception, à la rédaction du contenu et pendant le développement.

**Description&nbsp;:**  

Afin de ne pas polluer et de rendre confus la navigation à l'aide d'un lecteur d'écran, il est nécessaire de ne vocaliser que les éléments signifiants. Les éléments décoratifs, telles que certaines images et illustrations ne doivent donc pas être vocalisés.

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


Dans l’exemple ci-dessous, le cadre vert correspond au focus de <span lang="en">TalkBack</span>. Ce dernier vocalise (la vocalisation est affichée en bas de l’écran sur la capture) un contenu se trouvant derrière la vue active.  
<img src="../../../images/ghost.png" alt="exemple d’élément fantôme" width="300">

