# Guide d'accessibilité iOS

<script>$(document).ready(function () {
    
    setBreadcrumb([{"label":"Critères mobiles", "url": "./criteria-mobile.html"},
        {"label":"Guide d'accessibilité iOS"}
	]);
    addSubMenu([
        {"label":"Guide pour Android","url":"criteria-android.html"}, 
        {"label":"Guide pour iOS","url":"criteria-mobile.html", "expanded": true}
    ]);	
});</script>

<span data-menuitem="criteria-mobile"></span>

Ce guide a pour objectif de présenter les différents critères d'accessibilité à respecter pour obtenir une application iOS accessible. Chaque critère est présenté en expliquant pour qui ce critère est important, quand on peut le mettre en place, pourquoi il est important et la règle d'accessibilité qui en découle. Les critères sont explicités par des exemples de code et des captures d'exemples réels. Nous vous invitons à installer l'application [mDAN](./mdan.html) pour obtenir des exemples fonctionnels avec VoiceOver, le lecteur d'écran d'iOS, et d'autres outils d'assistance. Pour plus d'information sur l'outil (comment l'activer, comment s'en servir…) nous vous invitons à vous référer à la [section correspondante à VoiceOver](./voiceover.html).  

À noter : les quelques exemples de code dans cette section seront présentés en Swift.

## Images
**Cible : ** tout le monde et en particulier les personnes déficientes visuelles.  
**Quand : ** lors de la conception et pendant le développement.

**Description : **  

Les images sont très souvent utilisées pour transmettre de nombreuses informations. Comme le dit l'adage, une image vaut mille mots. Les non-voyants ne pouvant voir les images, il est important que celles-ci possèdent une alternative qui donne toutes les informations portées par l'image.  
Dans le cas d'une image contenant du texte, l'alternative sera ledit texte. Dans le cas d'une image qui apporte des informations sous la forme d'un graphe, dessin ou autre, l'alternative devra contenir toutes les informations nécessaires présentes dans l'image.    
  
Certaines images sont utilisées à des fins décoratives. Ces images ne nécessitent pas d'alternative. Par défaut sous iOS, les images ne sont pas vocalisées par le lecteur d'écran VoiceOver.  
Les illustrations de l'application sont également considérées comme des images décoratives. La règle est donc la même : il n'y a pas d'alternative textuelle à ajouter.  
Les icônes sont, a contrario, largement utilisées en tant que bouton pour des fonctionnalités diverses. Elles ont donc besoin d'alternatives textuelles pertinentes.  
  
L'alternative d'une image est renseignée via l'attribut `accessibilityLabel` (via le protocole `UIAccessibility` implémenté par tout élément standard dérivant de `UIView`).

**À vérifier : **

- les images portant de l'information restitue cette information à travers leur alternative textuelle
- les images décoratives n'ont pas d'alternative textuelle

**Objectif utilisateur : ** 

Permettre l'accès à l'information incluse dans une image pour des utilisateurs qui n'y ont pas accès. Point bloquant : une image sans description textuelle est inexploitable par des personnes ayant des déficiences visuelles ou celles n'affichant pas les images (mobile, faible bande passante...).

**Exemples : **      

<img src="./images/image_ex.png" alt="exemple complet d'image décorative et d'icone informative" width="400">  
  
En décomposant l'image :  
- <img src="./images/montagnard.png" alt="exemple d'image décorative" width="256"> pas d'`accessibilityLabel`  
- <img src="./images/edit.png" alt="exemple d'icone informative - paramètres" width="48"> `buttonView.accessibilityLabel = "example_image_edit_accessibilityLabel".localized`  
- <img src="./images/settings.png" alt="exemple d'icone informative - édition" width="48"> `buttonView.accessibilityLabel = "example_image_settings_accessibilityLabel".localized`
  
## Couleurs  

**Cible : ** tout le monde, en particulier, les personnes malvoyantes, les seniors et les personnes avec des problèmes de vision (daltonisme, vision des contrastes, etc.)  
**Quand : **  dès la phase de conception et lors du développement.

**Description : **  

Les couleurs jouent un rôle très important dans la transmission des informations. On associe certaines couleurs à des concepts ou à des sensations, mais il ne faut pas oublier qu'une partie de la population ne distingue pas correctement les couleurs.

**À vérifier : **

- La couleur ne doit jamais être le seul canal de transmission d'une information, d'indiquer une action, de solliciter une réponse ou de distinguer un élément. 
- Le contraste entre les couleurs de texte et de fond doit aussi être suffisant (7:1 sur mobile, 4,5:1 pour les textes larges, à calculer avec Color Constrast Analyzer par exemple).

**Objectif utilisateur : ** 

Faciliter la lecture à tous les utilisateurs, déficients visuels ou personne dans un environnement lumineux défavorable (en mobilité).  
Permettre aux utilisateurs ne distinguant pas les couleurs (les daltoniens, déficients visuels, déficients auditifs, utilisateurs de mobile en luminosité extérieure... ), d'accéder tout de même à l'information par d'autres moyens.

**Outil : **
L'application [colour contrast analyser](http://www.paciellogroup.com/resources/contrastanalyser/) permet de mesurer rapidement des niveaux de contraste de couleurs (gratuit pour mac et windows).  

**Exemple de contraste non valide : **  
Le texte "film | 20h40 ..." ne présente pas un contraste suffisant. Celui-ci ne sera pas lisible par tous les utilisateurs.  

![capture d'écran présentant du texte dont le contraste n'est pas suffisant](images/contraste.png)   

**Exemple de passage d'information par la couleur valide et non valide : ** 

<img src="./images/couleur_ios.png" alt="exemple de passage d'information par la couleur valide et non valide" width="300">

  
## Alternative textuelle

**Cible : ** tout le monde et en particulier les personnes déficientes visuelles.  
**Quand : ** dès la conception, à la rédaction du contenu et pendant le développement.

**Description : **  

Les alternatives textuelles sont au coeur de l'accessibilité sur mobile. Grâce à elles, un utilisateur non voyant peut utiliser une application sans perte d'information.  
  
Tout comme pour les images, il est important de renseigner une alternative textuelle lorsque l'information n'est pas disponible pour les personnes malvoyantes/non-voyantes. C'est le cas des composants fournissant de l'information par la couleur, la forme, la position, le son... Sur mobile, tous les composants peuvent recevoir une alternative textuelle, il est donc possible d'enrichir la vocalisation native d'un élément, y compris celle d'un simple texte.  
  
La place sur mobile étant réduite, on utilise bien souvent des abréviations pour les textes. Mais Cependant, cela pose un problème aux utilisateurs de synthèse vocale qui restitue les abréviations telles quelles. Pour corriger ces vocalisations, il suffit de placer une alternative textuelle sur le texte. Cette alternative contient le texte non abrégé. À noter que VoiceOver sait reconnaitre quelques abréviations courantes. Par exemple, "etc." est bien vocalisé "et cetera".  
  
Certaines images sont régulièrement associées à du texte pour donner une information. C'est le cas notamment des "messages non lus" où une infobulle donne le nombre de messages à lire et où une image donne l'information "message". Dans ce cas, la solution consiste à placer une alternative textuelle sur le texte qui donne toutes les informations nécessaires. Par exemple : "3 messages non lus". On peut également placer cette alternative sur l'image, mais dans ce cas, il faut penser à rendre le texte "invisible" pour le lecteur d'écran.

L'alternative textuelle d'un élément est renseignée via les attribut `accessibilityLabel, accessibilityHint, accessibilityValue` et `accessibilityTrait` (via le protocole `UIAccessibility` implémenté par tout élément standard dérivant de `UIView`).  
L’ordre de vocalisation est toujours le suivant : label, value, trait et hint. Cet ordre ne peut pas être changé et la vocalisation est réalisée en une seule fois, à l’arrivée sur l’élément.  
Pour plus d'informations techniques sur ces attributs, nous vous conseillons de lire la section des [alternatives textuelles dans le guide développeur](./dev-ios.html#alternatives-textuelles).

**À vérifier : **

- Les éléments de l'application qui nécessitent une alternative en possède bien une
- Les alternatives textuelles de l'application sont explicites et compréhensibles

**Objectif utilisateur : **

Permettre aux utilisateurs ayant des déficiences sensorielles (déficients visuels, déficients auditifs, utilisateurs de mobile en luminosité extérieure, en milieu bruyant, malentendant... ) d'accéder aux informations véhiculées par l'application par d'autres biais.

**Exemple : **      

Ci-dessous, un exemple fréquent d'une icône qu'on couple avec du texte (infobulle) pour ajouter de l'information. Dans notre cas, l'icone "mail" couplé à l'infobulle de valeur "3" nous fait comprendre que nous avons "3 mails non lus". Si aucune alternative textuelle n'est ajoutée, 2 vocalisations seront lues "bouton sans libellé" et "3". On comprend bien ici l'importance d'ajouter des alternatives textuelles.  
<img src="./images/alt.png" alt="exemple d'icône couplée à du texte qui nécessite une alternative textuelle" width="80" class="pull-left">
<pre><code class="swift">cell.mailImageView.accessibilityLabel = cell.badgeLabel.text! + " " + "exemple_textualAlternative_textImage_accessibilityLabel".localized //On ajoute l'alternative complète
cell.badgeLabel.isAccessibilityElemement = false //On masque le bouton-icône pour éviter une redondance d'information</code></pre>
   

## Titre et entête

**Cible : ** tout le monde  
**Quand : ** dès la conception et à la rédaction du contenu.

**Description : ** 

Le titre de la page est le premier élément qui est vocalisé ou vu sur un écran mobile. Il facilite la navigation pour tout le monde : à tous moment, on sait où on se trouve dans l'application.  
Une erreur commune est de mettre un titre unique pour toutes les pages d'une application (ou même pas de titre du tout).

Les en-tête iOS permettent des structurer les pages en apportant une information supplémentaire. Cette information est utile à l'API d'accessibilité car VoiceOver est capable de naviguer d'en-tête en en-tête (molette de VoiceOver, mode en-tête). Cela permet de se déplacer plus rapidement dans la page.  
Pour définir un élément en tant qu'en-tête, il faut positionner son attribut `accessibilityTraits` à la valeur `accessibilityTraitHeader`.

**À vérifier : ** 

- Chaque écran doit avoir un titre qui lui est propre ou qui permet de se repérer dans la navigation (couplé avec le bouton de retour)
- Les éléments identifiés visuellement comme des en-têtes doivent être déclarés à l'API d'accessibilité comme tel

** Objectif utilisateur : **

Permettre aux utilisateurs d'identifier le sujet d'une page, de se repérer et se faire une idée précise du contenu de la page sans avoir à le lire. Permettre une navigation plus aisée.

**Exemple non valide : **      

<img src="./images/header_ios.png" alt="exemple de titre non pertinent (absence de titre)" width="300"> 
  

## État des éléments

**Cible : ** tout le monde et en particulier les personnes déficientes visuelles.  
**Quand : ** lors du développement.

**Description : **

Si un élément ne restitue pas à la vocalisation, son statut, sa nature ou son état, l'utilisateur de VoiceOver est dans l'impossibilité de comprendre ce qu'il se passe à l'écran. Ne pas préciser qu'une zone est dépliée ou que l'on se trouve face à un système d'onglets sont des exemples très fréquents.  
  
Par défaut, les onglets proposés dans iOS sont parfaitement accessible. Cependant, il est fréquent de proposer des onglets personnalisés afin d’avoir un rendu différent. Il est donc à la charge du développeur de donner les informations de nature et d’états des onglets à l'utilisateur via les attributs d'accessibilité correspondants. Notons toutefois qu'il serait possible de rendre accessibles ces onglets personnalisés comme cela est montré avec l'exemple de la section "composants standards".
  
Autres éléments classiques qui ne restituent pas par défaut leur état : les zones dépliables. Encore une fois, c'est grâce à l'alternative textuelle du titre de la zone dépliable que l'on peut donner à l'utilisateur de VoiceOver le statut de celle-ci. 
  
Pour renseigner ce genre d'information, il faut utiliser les attributs `accessibilityLabel` et `accessibilityTrait`.

**À vérifier : **

- Tout élément dont le statut est modifié durant l'utilisation de l'application doit restituer son état à travers son alternative textuelle. Par exemple, un élément qui peut être sélectionné/non sélectionné doit restituer son état à travers une alternative textuelle.

**Objectif utilisateur : **

Permettre aux utilisateurs de lecteur d'écran d'avoir accès aux informations des composants, leur état, leur nature afin qu'ils puissent les utiliser sans difficultés.

**Exemple : **      

<img src="./images/expandable_list.png" alt="exemple de liste dépliable qui nécessite une alternative textuelle" width="250" class="pull-left">
<pre><code class="swift">if(accessibleIsFold) {
   accordionHeaderView.accessibilityHint = "example_elementState_foldArea_open_accessibilityHint".localized //"Cliquer pour ouvrir la section"
}else{
  accordionHeaderView.accessibilityHint = "example_elementState_foldArea_close_accessibilityHint".localized //"Cliquer pour fermer la section"
}</code></pre>
  

## Composant standard

**Cible : ** tout le monde.  
**Quand : ** en phase de sélection des briques logicielles et lors des développements.

**Description : **  

L'accessibilité  est prise en compte dans les composants natifs (la plupart du temps). De plus, l'utilisation de composants standards permet à l'utilisateur de se retrouver dans une situation et un comportement habituels. La navigation dans une interface standard est donc plus confortable.  
  
Utiliser au maximum les composants natifs en modifiant leur apparence. Si aucun composant standard ne permet de répondre au besoin, créer un composant dédié basé sur un composant standard en veillant à conserver la cohérence de navigation et l'accessibilité.  

**Objectif utilisateur : ** 

Permet à tous les utilisateurs de plus intuitivement interagir avec l'interface.

**Objectif technique : **

Améliore globalement la maintenabilité. Réduit les temps de développement. 
  

## Zone de clic

**Cible : ** pour tous et en particulier les personnes avec des déficiences motrices  
**Quand : ** dès la phase de conception et lors du développement.

**Description : **  

Une taille insuffisante pour la zone d'action d'un composant peut empêcher certains utilisateurs à profiter pleinement de l'application. Cela peut engendrer des frustrations qui peuvent conduire à la désinstallation de l'application. Chaque élément cliquable de l'application doit donner à l'utilisateur une taille suffisante pour sa zone d'action.

**À vérifier : **

- Apple définit pour son système une taille de zone de clic minimum de 44pt (en hauteur ET largeur) ; [lien vers les recommandations Apple](https://developer.apple.com/ios/human-interface-guidelines/visual-design/layout/)

**Objectif utilisateur : **

Améliorer le confort de navigation au toucher (touch).

**Exemple valide : ** 

Dans les exemples ci-dessous, le cadre noir correspond à la taille de la zone interactive.  
<img src="./images/clic_ok.png" alt="exemple de composant interractif avec une zone d'interraction assez large" width="300">

**Exemple non-valide : **  

<img src="./images/clic_ko.png" alt="exemple de composant interractif avec une zone d'interraction trop petite" width="300">


## Elément fantôme

**Cible : ** les personnes déficientes visuelles.  
**Quand : ** lors du développement.

**Description : **  

Bien qu'invisibles à l'écran, certains éléments peuvent être lus par le lecteur d'écran (éléments positionnés en dehors de la zone visible ou masqués par d'autres éléments). La superposition d'écrans est quelque chose de courant sur mobile, mais cela engendre des problèmes d'accessibilité très lourds à corriger si elle n'est pas faite correctement dès le départ. Un lecteur d'écran tel que VoiceOver est capable de lire les informations d'une vue qui est placée "sous" une autre. Mais si l'utilisateur n'est plus capable d'interagir avec cette vue, cela perturbe totalement sa navigation et celle-ci devient vite impossible.  
  
Un exemple fréquent d'élément fantôme survient lors de la création de composant personnalisé tel que des "alert dialog" (notification utilisateur). Notons toutefois que ce genre de composant personnalisé est tout à fait susceptible d'être accessible. Nous vous invitons à lire la section correspondante dans la [partie développeur](./dev-ios.html#masquer-des-l-ments-l-accessibilit-).

**À vérifier : **

- Voiceover ne doit pas vocaliser d'éléments indésirables appartenant à un autre écran que celui en cours de consultation.

**Objectif utilisateur : **

Permettre la navigation dans l'application sans avoir d'élément perturbant, non utilisable, sur la vue courante.


**Exemple non-valide : **  

Dans l’exemple ci-dessous, l’alerte personnalisée présente ce problème de vue fantôme. En effet, avec VoiceOver activé, il est possible de "lire" les éléments situés en dessous, comme nous le montre le focus de VoiceOver (en noir sur l'image)  
<img src="./images/ghost_ios.png" alt="exemple d'élément fantôme" width="300">


## Contrôle de contenu

**Cible : ** tout le monde et en particulier les personnes déficientes visuelles et cognitives.  
**Quand : ** lors de la conception et lors du développement.

**Description : ** 

Sur mobile, les lecteurs d'écran essayent de transmettre au maximum à l'utilisateur les changements de contexte. Dans certains cas, cela peut donner des vocalisations permanentes, et donc inaudibles, ou empêcher toute action de l'utilisateur.  
L'utilisateur doit rester maître du contenu à tout instant. C'est particulièrement vrai avec le contenu interactif. Il faut donc éviter par exemple qu'une vidéo ne se lance directement en plein écran, qu'une vidéo ne se lance directement sans une action au préalable de l'utilisateur, qu'un carrousel défile de manière automatique, etc.

**À vérifier : **

- Les contenus interactifs peuvent être maitrisés par l'utilisateur (pause sur carrousel automatique, bouton accessible pour sortir du mode plein-écran etc)

**Objectif utilisateur : **

Permettre aux utilisateurs de rester maître de l'application. Permettre à l'utilisateur de lecteur d'écran d'éviter une pollution sonore qui peut nuire à sa navigation. 

**Objectif technique : **

Améliorer le référencement naturel.


## Changement de contenu

**Cible : ** tout le monde et en particulier les personnes déficientes visuelles.  
**Quand : ** lors du développement.

**Description : ** 

Lorsque du contenu est modifié dynamiquement à la suite d'une action de l'utilisateur, il faut le notifier à la synthèse vocale. Sans retour vocal, l'utilisateur ne sait pas qu'une action a été déclenchée.  
Sur une page, si du contenu est modifié dynamiquement suite à une action utilisateur, il est important que le lecteur d'écran soit notifié afin qu'il déclenche une vocalisation. Par exemple, les listes qui se rafraîchissent, ou un compteur de temps.

Pour déclencher une vocalisation, il faut envoyer une notification à l’API d’accessibilité via la méthode `UIAccessibilityPostNotification` avec en paramètre la notification permettant de déclencher une vocalisation `UIAccessibilityAnnouncementNotification` et la chaine de caractère à vocaliser.  

Il est également conseillé de notifier l’API d’accessibilité lorsqu'un changement de contexte survient. Pour ce faire, il faut envoyer une notification de modification à l’API d’accessibilité via la méthode `UIAccessibilityPostNotification`.  
Il existe plusieurs notifications de modification, mais les deux plus utiles sont :  
- `UIAccessibilityLayoutChangedNotification` : permet de spécifier à l’API d’accessibilité qu’une partie de la page a été modifiée.
- `UIAccessibilityScreenChangedNotification` : permet d’annoncer un changement global de la page.

Pour plus d'information technique sur ces méthodes, nous vous invitons à regarder la section correspondante dans le [guide développeur pour iOS](./dev-ios.html#informer-d-une-modification-sur-la-page).

**À vérifier : **

- Avec un lecteur d'écran, s'assurer que les modifications dynamiques dans les pages sont bien vocalisées.

**Objectif utilisateur : **

Donner accès aux modifications des informations de l'application aux utilisateurs de lecteur d'écran.


## Scroll horizontal

**Cible : ** tout le monde et en particulier les personnes déficientes visuelles.  
**Quand : ** dès la phase de conception et lors du développement.

**Description : **

Un scroll horizontal peut être très difficile à détecter si aucun visuel n'aide l'utilisateur à comprendre qu'il existe plusieurs pages.  
Ne pas hésiter à afficher un élément pour indiquer un scroll horizontal (les "points" d'un `UIPageControl`). Quand cela est nécessaire, ajouter également des boutons "suivant" et "précédent".

**À vérifier : **

- Les scrolls horizontaux sont indiqués visuellement
- Avec le lecteur d'écran activé, un mécanisme permet de passer de page en page lorsqu'un scroll horizontal est présent.

**Objectif utilisateur : **

Donner une indication visuelle aux utilisateurs lors de la présence de scrolls horizontaux. Permettre aux utilisateurs de lecteur d'écran d'utiliser les scrolls horizontaux.

<div class="sideToSide row">
<div class="col-sm-6 col-xs-12">
**Exemple valide :**

<img src="./images/scroll_ios_h1.png" alt="exemple de scroll horizontal accessible" width="300">
</div>
<div class="col-sm-6 col-xs-12">
**Exemple non-valide :**

<img src="./images/scroll_ios_h2.png" alt="exemple de scroll horizontal non accessible" width="300">
</div>
</div>

## Formulaire

**Cible : ** tout le monde et en particulier les personnes déficientes visuelles.  
**Quand : ** lors de la conception et lors du développement.

**Description : **

Lier les champs de formulaires avec leurs labels apporte une vocalisation supplémentaire qui permet à l'utilisateur de comprendre quoi remplir lorsqu'il arrive sur un champ de formulaire.  
  
Sous iOS, on apporte une information supplémentaire sur les champs de formulaire via son alternative textuelle, soit l'attribut `accessibilityLabel`.

**À vérifier : **

- les champs de formulaire doivent restituer leurs labels

**Objectif utilisateur : **

Améliorer la navigation en améliorant la compréhension globale de la page, les champs de formulaires décrivant le contenu attendu.


## Ordre de lecture

**Cible : ** les personnes déficientes visuelles.  
**Quand : ** lors du développement.

**Description : **

L'ordre de lecture permet à l'utilisateur de lecteur d'écran de se repérer dans la navigation et d'assurer une cohérence fonctionnelle. Il est donc important d'y faire attention.  
  
Par défaut, l'ordre de lecture de la synthèse vocale prend en compte plusieurs paramètres : la lecture « logique » (en France), soit de gauche à droite et de haut en bas. Il existe cependant certain cas ou le lecteur d'écran n'arrive pas à déterminer un ordre et dans ce cas, il utilise l'ordre de définition des éléments ce qui peut amener des vocalisations incohérentes.  

Redéfinir l’ordre de lecture VoiceOver s’effectue en respectant le protocole [`UIAccessibilityContainer`](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIAccessibilityContainer_Protocol/). L’idée est d’avoir un tableau des éléments de la vue qui définit l’ordre de lecture des éléments. Il est bien souvent nécessaire d’utiliser l’attribut `shouldGroupAccessibilityElement` afin d’avoir un ordre précis, mais pour une partie seulement de la vue (le reste étant l’ordre naturel de lecture).  

**À vérifier : **

- L'ordre de lecture (celui de VoiceOver) est logique et cohérent.

**Objectif utilisateur : **

Assurer un ordre de lecture logique et cohérent aux utilisateurs de lecteur d'écran  pour leur assurer une complète compréhension du contenu.


**Exemple :**      
Dans cet exemple, l'ordre de lecture par défaut dépend complétement de l'implémentation et de l'ordre de déclaration des éléments. Dans ce cas-ci : `1, 4, 7, 2, 5, 8, 0, 3, 6, 9, vol+, vol-, p+, p-`. Un ordre de lecture plus cohérent serait `1, 2, 3, 4, 5, 6, 7, 8, 9, 0, vol+, vol-, p+, p-`.  

<img src="./images/order.png" alt="exemple de scroll horizontal accessible" width="300">  
<pre><code>remoteView.isAccessibilityElement = false
remoteView.shouldGroupAccessibilityChildren = true
remoteView.accessibilityElements = []
remoteView.accessibilityElements?.append(oneButton)
remoteView.accessibilityElements?.append(twoButton)
remoteView.accessibilityElements?.append(threeButton)
remoteView.accessibilityElements?.append(fourButton)
[...]</code></pre>


## Langue

**Cible : ** les personnes déficientes visuelles.  
**Quand : ** lors du développement.

**Description : **

La vocalisation donnée par VoiceOver s'effectue, par défaut, dans la langue du système du mobile. Il arrive parfois que certain mots/textes d'une application soient dans une langue différente. Afin que la vocalisation soit audible, il faut déclarer ces textes dans la langue correspondante.  

Afin de modifier la langue de prononciation de VoiceOver pour un mot ou un texte, il existe l’attribut `accessibilityLanguage`. Disponible via le protocole `UIAccessibility`. 

**À vérifier : **

- Les mots/textes dans une langue différente de celle du reste de l'application sont bien vocalisés dans leur langue

**Objectif utilisateur : **

Assurer une compréhension des textes de l'application. 

<!--  This file is part of a11y-guidelines | Our vision of mobile & web accessibility guidelines and best practices, with valid/invalid examples.
 Copyright (C) 2016  Orange SA
 See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). -->