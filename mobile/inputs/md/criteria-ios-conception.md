# Les critères de conception iOS

<script>$(document).ready(function () {
    setBreadcrumb([{"label":"iOS", "url": "./criteria-ios.html"},
        {"label":"Critères de conception"}
	]);
    addSubMenu([
        {"label":"Critères de conception","url":"criteria-ios-conception.html", "expanded": true}, 
        {"label":"Guide pour les développeurs","url":"criteria-ios-dev.html"},
        {"label":"VoiceOver","url":"lecteur-ecran-voiceover.html"},
        {"label":"WWDC","url":"criteria-ios-wwdc.html"},
        {"label":"Tests","url":"criteria-ios-test.html"}
    ]);	
});</script>

<span data-menuitem="criteria-ios"></span>

Ce guide a pour objectif de présenter les différents critères d’accessibilité à respecter pour obtenir une application iOS accessible.
</br>Chacun de ces critères est présenté en expliquant pour qui il est important, quand on peut le mettre en place, pourquoi il est important et la règle d’accessibilité qui en découle.
</br></br>
## Images
<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item">
        <a class="nav-link active"
           data-toggle="tab" 
           href="#images-Objectives" 
           role="tab" 
           aria-selected="true">Objectif</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#images-Description" 
           role="tab" 
           aria-selected="false">Description</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#images-Examples" 
           role="tab" 
           aria-selected="false">Exemple</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#images-Check" 
           role="tab" 
           aria-selected="false">À vérifier</a>
    </li>
</ul><div class="tab-content">
<div class="tab-pane show active"
     id="images-Objectives"
     role="tabpanel">
    
Permettre l’accès à l’information incluse dans une image pour des utilisateurs qui n’y ont pas accès.
</br>Le point bloquant est une image sans description textuelle qui est inexploitable par des personnes ayant des déficiences visuelles.
</br></br>**Cible&nbsp;:** tout le monde et en particulier les personnes déficientes visuelles.  
**Quand&nbsp;:** lors de la conception et pendant le développement.
</div>
<div class="tab-pane" id="images-Description" role="tabpanel" >
Les images sont très souvent utilisées pour transmettre de nombreuses informations.
</br>Les non-voyants ne pouvant voir les images, il est important que celles-ci possèdent une alternative qui donne toutes les informations portées par cette dernière.
</br>Dans le cas d’une image contenant du texte, l’alternative sera ledit texte mais dans le cas d’une image qui apporte des informations sous la forme d’un graphe, dessin ou autre, l’alternative devra contenir toutes les informations nécessaires présentes dans l’image.
</br></br>Certaines images sont utilisées à des fins décoratives et ne nécessitent donc pas d’alternative.
</br>Par défaut sous iOS, les images ne sont pas vocalisées par le lecteur d’écran.
</br></br>Les illustrations de l’application sont également considérées comme des images décoratives.
</br>La règle est donc la même&nbsp;: il n’y a pas d’alternative textuelle à ajouter.
Les icônes sont, a contrario, largement utilisées en tant que boutons pour des fonctionnalités diverses. Elles ont donc besoin d’alternatives textuelles pertinentes.
</br></br>L’alternative d’une image est renseignée via l’attribut `accessibilityLabel` *(via le protocole `UIAccessibility` implémenté par tout élément standard dérivant de `UIView`)*.
</div>
<div class="tab-pane" id="images-Examples" role="tabpanel" >
<img src="./images/image_ex.png" alt="exemple complet d’image décorative et d’icône informative" width="400">  
  
</br></br>En décomposant l’image, on obtient&nbsp;:  
- <img src="./images/montagnard.png" alt="exemple d’image décorative" width="256"> pas d’`accessibilityLabel`  
- <img src="./images/edit.png" alt="exemple d’icône informative - paramètres" width="48"> `buttonView.accessibilityLabel = "example_image_edit_accessibilityLabel".localized`  
- <img src="./images/settings.png" alt="exemple d’icône informative - édition" width="48"> `buttonView.accessibilityLabel = "example_image_settings_accessibilityLabel".localized`
</div>
<div class="tab-pane" id="images-Check" role="tabpanel" >
- Les images portant de l’information restituent cette information à travers leur alternative textuelle.
- Les images décoratives n’ont pas d’alternative textuelle.
</div>
</div></br></br>

## Couleurs  
<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item">
        <a class="nav-link active"
           data-toggle="tab" 
           href="#colours-Objectives" 
           role="tab" 
           aria-selected="true">Objectif</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#colours-Description" 
           role="tab" 
           aria-selected="false">Description</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#colours-Examples" 
           role="tab" 
           aria-selected="false">Exemples</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#colours-Check" 
           role="tab" 
           aria-selected="false">À vérifier</a>
    </li>
</ul><div class="tab-content">
<div class="tab-pane show active"
     id="colours-Objectives"
     role="tabpanel">
Faciliter la lecture à tous les utilisateurs, déficients visuels ou personnes dans un environnement lumineux défavorable.
</br>Permettre aux utilisateurs ne distinguant pas les couleurs *(daltoniens, déficients visuels, déficients auditifs, utilisateurs de mobile en luminosité extérieure…)*, d’accéder tout de même à l’information par d’autres moyens.
</br></br>**Cible&nbsp;:** tout le monde, en particulier les personnes malvoyantes, les seniors et les personnes avec des problèmes de vision *(daltonisme, vision des contrastes,...)*  
**Quand&nbsp;:**  dès la phase de conception et lors du développement.
</div>
<div class="tab-pane" id="colours-Description" role="tabpanel" >
Les couleurs jouent un rôle très important dans la transmission des informations.
</br>On associe certaines couleurs à des concepts ou à des sensations, mais il ne faut pas oublier qu’une partie de la population ne distingue pas correctement les couleurs.
</br></br>La décision de mettre certaines polices en gras va favoriser un contraste plus faible pour des tailles basses de police.
</br><img style="max-width: 1000px; height: auto;" alt="" src="./images/color_contrast_2.png" />
</br></br>Ne pas mettre des polices en gras va demander un contraste des couleurs plus fort que dans le cas précédent.
</br><img style="max-width: 1000px; height: auto;" alt="" src="./images/color_contrast_3.png" />
</br></br> Avec l’apparition du [Dynamic Type](./criteria-ios-dev.html#taille-des-textes) permettant de grossir de façon conséquente la taille de police, le contraste des couleurs n’est pas nécessairement figé et doit s’adapter au grossissement souhaité.
</br><img style="max-width: 300px; height: auto;" alt="" src="./images/color_contrast_1.png" />
</br></br>Il existe des cas où rajouter des motifs pour différencier les informations véhiculées uniquement par la couleur surcharge inutilement l'interface graphique si l'utilisateur n'en a pas besoin.
</br><img style="max-width: 1100px; height: auto;" alt="" src="./images/iOSdev/wwdc19-244-TextStyles_11.png" />
</br>Dans ce cas, l'utilisation de l'option d'accessibilité [différencier sans couleur](#optionA11Y_differentiateWithoutColour) *(nouveauté iOS 13)* va permettre ce type d'affichage **uniquement à la demande de l'utilisateur**.
</br></br>**Outil&nbsp;:**
L’application [<span lang="en">Colour Contrast Analyzer</span>](http://www.paciellogroup.com/resources/contrastanalyser/) permet de mesurer rapidement des niveaux de contraste de couleurs (gratuit pour mac et windows).
</br>L'outil <span lang="en">Accessibility Inspector</span> dispose aussi d'une fonctionnalité [<span lang="en">Color Contrast Calculator</span>](./criteria-ios-wwdc-19000.html#ColorContrast) depuis Xcode 11 qui permet d'obtenir les mêmes résultats.
</div>
<div class="tab-pane" id="colours-Examples" role="tabpanel" >
**Contraste non valide&nbsp;:**  
Le texte «&nbsp;film | 20h40 …&nbsp;» ne présente pas un contraste suffisant&nbsp;: celui-ci ne sera pas lisible par tous les utilisateurs.
    
![capture d’écran présentant du texte dont le contraste n’est pas suffisant](images/contraste.png)   
</br></br>**Passage d’information par la couleur valide et non valide&nbsp;:**
</br><img src="./images/couleur_ios.png" alt="exemple de passage d’information par la couleur valide et non valide" width="300">
</div>
<div class="tab-pane" id="colours-Check" role="tabpanel" >
- La couleur ne doit jamais être le seul canal de transmission d’une information, d’indication d’une action, de sollicitation d’une réponse ou de distinction d’un élément. 
- Le contraste entre les couleurs de texte et de fond doit aussi être suffisant *(à calculer avec <span lang="en">Colour Contrast Analyzer</span> ou avec la fonctionnalité [Color Contrast Calculator](./criteria-ios-wwdc-19000.html#ColorContrast) de l'outil <span lang="en">Accessibility Inspector</span> sous Xcode 11)*.
- Avec l'arrivée du **Mode Sombre** en iOS 13, une attention toute particulière doit être portée sur les contrastes utilisés au sein des différents thèmes et pouvant être modifiés avec l'option d'accessibilité [augmenter le contraste](#optionA11Y_contraste).
</div>
</div></br></br>

## Alternative textuelle
<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item">
        <a class="nav-link active"
           data-toggle="tab" 
           href="#alternativeText-Objectives" 
           role="tab" 
           aria-selected="true">Objectif</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#alternativeText-Description" 
           role="tab" 
           aria-selected="false">Description</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#alternativeText-Examples" 
           role="tab" 
           aria-selected="false">Exemple</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#alternativeText-Check" 
           role="tab" 
           aria-selected="false">À vérifier</a>
    </li>
</ul><div class="tab-content">
<div class="tab-pane show active"
     id="alternativeText-Objectives"
     role="tabpanel">
Permettre aux utilisateurs ayant des déficiences sensorielles *(déficients visuels, déficients auditifs, utilisateurs de mobiles en luminosité extérieure, en milieu bruyant, malentendant…)* d’accéder aux informations véhiculées par l’application par d’autres biais.
</br></br>**Cible&nbsp;:** tout le monde et en particulier les personnes déficientes visuelles.  
**Quand&nbsp;:** dès la conception, à la rédaction du contenu et pendant le développement.
</div>
<div class="tab-pane" id="alternativeText-Description" role="tabpanel" >
Les alternatives textuelles sont au cœur de l’accessibilité sur mobile. Grâce à elles, un utilisateur non voyant peut utiliser une application sans perte d’information.
</br></br>Tout comme pour les images, il est important de renseigner une alternative textuelle lorsque l’information n’est pas disponible pour les personnes malvoyantes/non-voyantes.
</br>C’est le cas des composants fournissant de l’information par la couleur, la forme, la position, le son…
</br>Sur mobile, tous les composants peuvent recevoir une alternative textuelle, il est donc possible d’enrichir la vocalisation native d’un élément, y compris celle d’un simple texte.
</br></br>La place sur mobile étant réduite, on utilise bien souvent des abréviations pour les textes.
</br>Cependant, cela pose un problème aux utilisateurs de synthèse vocale qui restitue les abréviations telles quelles.
</br>Pour corriger ces vocalisations, il suffit de placer une alternative textuelle sur le texte.
</br>Cette alternative contient le texte non abrégé.

</br>À noter que <span lang="en">VoiceOver</span> sait reconnaître quelques abréviations courantes&nbsp;: «&nbsp;etc.&nbsp;» est bien vocalisé «&nbsp;et cetera&nbsp;».
</br></br>Certaines images sont régulièrement associées à du texte pour donner une information.
</br>C’est le cas notamment des «&nbsp;messages non lus&nbsp;» où une infobulle donne le nombre de messages à lire et où une image donne l’information «&nbsp;message&nbsp;».
</br>Dans ce cas, la solution consiste à placer une alternative textuelle sur le texte qui donne toutes les informations nécessaires.
</br>Par exemple&nbsp;: «&nbsp;3 messages non lus&nbsp;».
</br></br>On peut également placer cette alternative sur l’image, mais dans ce cas, il faut penser à rendre le texte «&nbsp;invisible&nbsp;» pour le lecteur d’écran.
</br></br>L’alternative textuelle d’un élément est renseignée via les attributs `accessibilityLabel`, `accessibilityHint`, `accessibilityValue` et `accessibilityTrait` (via le protocole `UIAccessibility` implémenté par tout élément standard dérivant de `UIView`).
</br></br>L’ordre de vocalisation est toujours le suivant : `label`, `value`, `trait` et `hint`.
</br>Cet ordre ne peut pas être changé et la vocalisation est réalisée en une seule fois, à l’arrivée sur l’élément.
</br></br>Pour plus d’informations techniques sur ces attributs, nous vous conseillons de lire la section des [alternatives textuelles dans le guide développeur](./criteria-ios-dev.html#alternatives-textuelles).
</div>
<div class="tab-pane" id="alternativeText-Examples" role="tabpanel" >
Ci-dessous, un exemple fréquent d’une icône qu’on couple avec du texte (infobulle) pour ajouter de l’information&nbsp;: dans notre cas, l’icône «&nbsp;mail&nbsp;» couplée à l’infobulle de valeur «&nbsp;3&nbsp;» nous fait comprendre que nous avons «&nbsp;3 mails non lus&nbsp;».
</br></br>Si aucune alternative textuelle n’est ajoutée, 2 vocalisations seront lues «&nbsp;bouton sans libellé&nbsp;» et «&nbsp;3&nbsp;»: on comprend bien ici l’importance d’ajouter des alternatives textuelles.  
</br><img src="./images/alt.png" alt="exemple d’icône couplée à du texte qui nécessite une alternative textuelle" width="80" class="pull-left">
</div>
<div class="tab-pane" id="alternativeText-Check" role="tabpanel" >
- Les éléments de l’application qui nécessitent une alternative en possède bien une.
- Les alternatives textuelles de l’application sont explicites et compréhensibles.
</div>
</div></br></br>

## Titre et en-tête
<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item">
        <a class="nav-link active"
           data-toggle="tab" 
           href="#titleAndHeaders-Objectives" 
           role="tab" 
           aria-selected="true">Objectif</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#titleAndHeaders-Description" 
           role="tab" 
           aria-selected="false">Description</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#titleAndHeaders-Examples" 
           role="tab" 
           aria-selected="false">Exemple</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#titleAndHeaders-Check" 
           role="tab" 
           aria-selected="false">À vérifier</a>
    </li>
</ul><div class="tab-content">
<div class="tab-pane show active"
     id="titleAndHeaders-Objectives"
     role="tabpanel">
Favoriser une navigation plus aisée en permettant aux utilisateurs d’identifier le sujet d’une page, de se repérer et se faire une idée précise du contenu de la page sans avoir à le lire.
</br></br>**Cible&nbsp;:** tout le monde  
**Quand&nbsp;:** dès la conception et à la rédaction du contenu.
</div>
<div class="tab-pane" id="titleAndHeaders-Description" role="tabpanel" >
Le titre de la page est le premier élément qui est vocalisé ou vu sur un écran mobile.
</br>Il facilite la navigation pour tout le monde&nbsp;: à tout moment, on sait où on se trouve dans l’application.
</br></br>Une erreur commune est de mettre un titre unique pour toutes les pages d’une application *(ou même pas de titre du tout)*.
</br>Les en-tête iOS permettent de structurer les pages en apportant une information supplémentaire utile à l’<abbr>API</abbr> d’accessibilité car <span lang="en">VoiceOver</span> est capable de naviguer d’en-tête en en-tête *(molette de <span lang="en">VoiceOver</span>, mode en-tête)* permettant de se déplacer plus rapidement dans la page.
</div>
<div class="tab-pane" id="titleAndHeaders-Examples" role="tabpanel" >
**Exemple non valide&nbsp;:**      
</br><img src="./images/header_ios.png" alt="exemple de titre non pertinent (absence de titre)" width="300"> 
</div>
<div class="tab-pane" id="titleAndHeaders-Check" role="tabpanel" >
- Chaque écran doit avoir un titre qui lui est propre ou qui permet de se repérer dans la navigation *(couplé avec le bouton de retour)*.
- Les éléments identifiés visuellement comme des en-têtes doivent être déclarés à l’<abbr>API</abbr> d’accessibilité comme tels.
</div>
</div></br></br>

## État des éléments
<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item">
        <a class="nav-link active"
           data-toggle="tab" 
           href="#eltStates-Objectives" 
           role="tab" 
           aria-selected="true">Objectif</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#eltStates-Description" 
           role="tab" 
           aria-selected="false">Description</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#eltStates-Examples" 
           role="tab" 
           aria-selected="false">Exemple</a>
    </li>
</ul><div class="tab-content">
<div class="tab-pane show active"
     id="eltStates-Objectives"
     role="tabpanel">
Permettre aux utilisateurs de lecteurs d’écran d’avoir accès aux informations des composants, à leur état et leur nature afin qu’ils puissent les utiliser sans difficultés.
</br></br>**Cible&nbsp;:** tout le monde et en particulier les personnes déficientes visuelles.  
**Quand&nbsp;:** lors du développement.
</div>
<div class="tab-pane" id="eltStates-Description" role="tabpanel" >
Si un élément ne restitue pas à la vocalisation son statut, sa nature ou son état, l’utilisateur <span lang="en">VoiceOver</span> est dans l’impossibilité de comprendre ce qui se passe à l’écran.
</br></br>Ne pas préciser qu’une zone est dépliée ou que l’on se trouve face à un système d’onglets sont des exemples très fréquents.
</br></br>Par défaut, les onglets proposés dans iOS sont parfaitement accessibles.
</br>Cependant, il est fréquent de proposer des onglets personnalisés afin d’avoir un rendu différent : il est donc à la charge du développeur de donner les informations de nature et d’états des onglets à l’utilisateur via les attributs d’accessibilité correspondants.
</br>Notons toutefois qu’il serait possible de rendre accessibles ces onglets personnalisés comme cela est montré avec l’exemple de la section «&nbsp;composants standards&nbsp;».
</br></br>Autres éléments classiques qui ne restituent pas par défaut leur état&nbsp;: les zones dépliables.
</br>Encore une fois, c’est grâce à l’alternative textuelle du titre de la zone dépliable que l’on peut donner à l’utilisateur de <span lang="en">VoiceOver</span> le statut de celle-ci.
</br></br>Pour renseigner ce genre d’information, il faut utiliser les attributs `accessibilityLabel` et `accessibilityTrait`.
</div>
<div class="tab-pane" id="eltStates-Examples" role="tabpanel" >
Tout élément dont le statut est modifié durant l’utilisation de l’application doit restituer son état à travers son alternative textuelle.
</br></br><img src="./images/expandable_list.png" alt="exemple de liste dépliable qui nécessite une alternative textuelle" width="250" class="pull-left">
</br></br>Par exemple, un élément qui peut être sélectionné/non sélectionné doit restituer son état à travers une alternative textuelle.
</div>
</div></br></br>

## Composant standard
<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item">
        <a class="nav-link active"
           data-toggle="tab" 
           href="#stdComponent-Objectives" 
           role="tab" 
           aria-selected="true">Objectif</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#stdComponent-Description" 
           role="tab" 
           aria-selected="false">Description</a>
    </li>
</ul><div class="tab-content">
<div class="tab-pane show active"
     id="stdComponent-Objectives"
     role="tabpanel">
Utilisateur ⟹ permet à tous les utilisateurs d’interagir plus intuitivement avec l’interface.
</br>Technique ⟹ améliore globalement la maintenabilité et réduit les temps de développement.
</br></br>**Cible&nbsp;:** tout le monde.  
**Quand&nbsp;:** en phase de sélection des briques logicielles et lors des développements.
</div>
<div class="tab-pane" id="stdComponent-Description" role="tabpanel" >
L’accessibilité est prise en compte dans les composants natifs la plupart du temps.
</br>De plus, l’utilisation de composants standards permet à l’utilisateur de se retrouver dans une situation et un comportement habituels : la navigation dans une interface standard est donc plus confortable.
</br></br>Utiliser au maximum les composants natifs en modifiant leur apparence.
</br>Si aucun composant standard ne permet de répondre au besoin, créer un composant dédié basé sur un composant standard en veillant à conserver la cohérence de navigation et l’accessibilité.
</div>
</div></br></br>

## Zone de clic
<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item">
        <a class="nav-link active"
           data-toggle="tab" 
           href="#touchTarget-Objectives" 
           role="tab" 
           aria-selected="true">Objectif</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#touchTarget-Description" 
           role="tab" 
           aria-selected="false">Description</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#touchTarget-Examples" 
           role="tab" 
           aria-selected="false">Exemples</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#touchTarget-Check" 
           role="tab" 
           aria-selected="false">À vérifier</a>
    </li>
</ul><div class="tab-content">
<div class="tab-pane show active"
     id="touchTarget-Objectives"
     role="tabpanel">
Améliorer le confort de navigation au toucher *(<i lang="en">touch</i>)*.
</br></br>**Cible&nbsp;:** tout le monde et en particulier les personnes avec des déficiences motrices.  
**Quand&nbsp;:** dès la phase de conception et lors du développement.
</div>
<div class="tab-pane" id="touchTarget-Description" role="tabpanel" >
Une taille insuffisante pour la zone d’action d’un composant peut empêcher certains utilisateurs de profiter pleinement de l’application.
</br>Cela peut engendrer des frustrations qui peuvent conduire à la désinstallation de l’application.
</br></br>Chaque élément cliquable de l’application doit donner à l’utilisateur une taille suffisante pour sa zone d’action.
</div>
<div class="tab-pane" id="touchTarget-Examples" role="tabpanel" >
**Exemple valide&nbsp;:** 
</br><img src="./images/clic_ok.png" alt="exemple de composant interactif avec une zone d’interaction assez large" width="300">
</br></br>**Exemple non-valide&nbsp;:**
</br><img src="./images/clic_ko.png" alt="exemple de composant interactif avec une zone d’interaction trop petite" width="300">
</div>
<div class="tab-pane" id="touchTarget-Check" role="tabpanel" >
Apple définit pour son système une taille de zone de clic minimum de 44pt *(hauteur ET largeur)*.
</div>
</div></br></br>

## Elément fantôme
<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item">
        <a class="nav-link active"
           data-toggle="tab" 
           href="#ghostElt-Objectives" 
           role="tab" 
           aria-selected="true">Objectif</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#ghostElt-Description" 
           role="tab" 
           aria-selected="false">Description</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#ghostElt-Examples" 
           role="tab" 
           aria-selected="false">Exemple</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#ghostElt-Check" 
           role="tab" 
           aria-selected="false">À vérifier</a>
    </li>
</ul><div class="tab-content">
<div class="tab-pane show active"
     id="ghostElt-Objectives"
     role="tabpanel">
Permettre la navigation dans l’application sans avoir d’éléments perturbants, non utilisables sur la vue courante.
</br></br>**Cible&nbsp;:** les personnes déficientes visuelles.  
**Quand&nbsp;:** lors du développement.
</div>
<div class="tab-pane" id="ghostElt-Description" role="tabpanel" >
Bien qu’invisibles à l’écran, certains éléments peuvent être lus par le lecteur d’écran *(éléments positionnés en dehors de la zone visible ou masqués par d’autres éléments)*.
</br>La superposition d’écrans est quelque chose de courant sur mobile mais cela engendre des problèmes d’accessibilité très lourds à corriger si elle n’est pas faite correctement dès le départ.
</br></br>Un lecteur d’écran tel que <span lang="en">VoiceOver</span> est capable de lire les informations d’une vue qui est placée «&nbsp;sous&nbsp;» une autre mais si l’utilisateur n’est plus capable d’interagir avec cette vue, cela perturbe totalement sa navigation et celle-ci devient vite impossible.
</br></br>Un exemple fréquent d’élément fantôme survient lors de la création de composant personnalisé tel que des «&nbsp;<span lang="en">alert dialog</span>&nbsp;» *(notification utilisateur)*.
</br>Notons toutefois que ce genre de composant personnalisé est tout à fait susceptible d’être accessible.
</br></br>Nous vous invitons à lire la section 'vue modale' dans la <a href="./criteria-ios-dev.html#vue-modale" style="text-decoration: underline;">partie développeur</a>.
</div>
<div class="tab-pane" id="ghostElt-Examples" role="tabpanel" >
Dans l’exemple ci-dessous, l’alerte personnalisée présente le problème de vue fantôme. 
</br><img src="./images/ghost_ios.png" alt="exemple d’élément fantôme" width="300">
</div>
<div class="tab-pane" id="ghostElt-Check" role="tabpanel" >
<span lang="en">VoiceOver</span> ne doit pas vocaliser d’éléments indésirables appartenant à un autre écran que celui en cours de consultation.
</div>
</div></br></br>

## Contrôle de contenu
<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item">
        <a class="nav-link active"
           data-toggle="tab" 
           href="#contentControl-Objectives" 
           role="tab" 
           aria-selected="true">Objectif</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#contentControl-Description" 
           role="tab" 
           aria-selected="false">Description</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#contentControl-Check" 
           role="tab" 
           aria-selected="false">À vérifier</a>
    </li>
</ul><div class="tab-content">
<div class="tab-pane show active"
     id="contentControl-Objectives"
     role="tabpanel">
Utilisateur ⟹ permettre aux utilisateurs de rester maître de l’application et d’éviter une pollution sonore qui peut nuire à la navigation. 
</br>Technique ⟹ améliorer le référencement naturel.
</br></br>**Cible&nbsp;:** tout le monde et en particulier les personnes déficientes visuelles et cognitives.  
**Quand&nbsp;:** lors de la conception et lors du développement.
</div>
<div class="tab-pane" id="contentControl-Description" role="tabpanel" >
Sur mobile, les lecteurs d’écran essaient de transmettre au maximum à l’utilisateur les changements de contexte.
</br>Dans certains cas, cela peut donner des vocalisations permanentes et donc inaudibles ou empêcher toute action de l’utilisateur.
</br></br>L’utilisateur doit rester maître du contenu à tout instant.
</br>C’est particulièrement vrai avec le contenu interactif : il faut donc éviter par exemple qu’une vidéo ne se lance directement en plein écran sans une action au préalable de l’utilisateur ou encore qu’un carrousel défile de manière automatique par exemple.
</div>
<div class="tab-pane" id="contentControl-Check" role="tabpanel" >
Les contenus interactifs peuvent être maîtrisés par l’utilisateur *(bouton accessible pour sortir du mode plein-écran par exemple)*.
</div>
</div></br></br>

## Changement de contenu
<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item">
        <a class="nav-link active"
           data-toggle="tab" 
           href="#changingContent-Objectives" 
           role="tab" 
           aria-selected="true">Objectif</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#changingContent-Description" 
           role="tab" 
           aria-selected="false">Description</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#changingContent-Check" 
           role="tab" 
           aria-selected="false">À vérifier</a>
    </li>
</ul><div class="tab-content">
<div class="tab-pane show active"
     id="changingContent-Objectives"
     role="tabpanel">
Donner accès aux modifications des informations de l’application aux utilisateurs de lecteur d’écran.
</br></br>**Cible&nbsp;:** tout le monde et en particulier les personnes déficientes visuelles.  
**Quand&nbsp;:** lors du développement.
</div>
<div class="tab-pane" id="changingContent-Description" role="tabpanel" >
Lorsque du contenu est modifié dynamiquement à la suite d’une action de l’utilisateur, il faut le notifier à la synthèse vocale.
</br>Sans retour vocal, l’utilisateur ne sait pas qu’une action a été déclenchée.
</br></br>Sur une page, si du contenu est modifié dynamiquement suite à une action utilisateur, il est important que le lecteur d’écran soit notifié afin qu’il déclenche une vocalisation.
</br>Par exemple pour les listes qui se rafraîchissent ou pour un compteur de temps.
</br></br>Pour déclencher une vocalisation, il faut envoyer une notification à l’<abbr>API</abbr> d’accessibilité via la méthode `UIAccessibilityPostNotification` avec en paramètre la notification permettant de déclencher une vocalisation `UIAccessibilityAnnouncementNotification` et la chaîne de caractère à vocaliser.
</br></br>Il est également conseillé de notifier l’<abbr>API</abbr> d’accessibilité lorsqu’un changement de contexte survient.
</br>Pour ce faire, il faut envoyer une notification de modification à l’<abbr>API</abbr> d’accessibilité via la méthode `UIAccessibilityPostNotification`.
</br></br>Il existe plusieurs notifications de modification, mais les deux plus utiles sont&nbsp;:  
- `UIAccessibilityLayoutChangedNotification`&nbsp;: permet de spécifier à l’<abbr>API</abbr> d’accessibilité qu’une partie de la page a été modifiée.
- `UIAccessibilityScreenChangedNotification`&nbsp;: permet d’annoncer un changement global de la page.

Pour plus d’information technique sur ces méthodes, nous vous invitons à regarder la section correspondante dans le [guide développeur pour iOS](./criteria-ios-dev.html#informer-d-une-modification-sur-la-page).
</div>
<div class="tab-pane" id="changingContent-Check" role="tabpanel" >
Avec un lecteur d’écran, s’assurer que les modifications dynamiques dans les pages sont bien vocalisées.
</div>
</div></br></br>

## <i lang="en">Scroll</i> horizontal
<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item">
        <a class="nav-link active"
           data-toggle="tab" 
           href="#horizontalScroll-Objectives" 
           role="tab" 
           aria-selected="true">Objectif</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#horizontalScroll-Description" 
           role="tab" 
           aria-selected="false">Description</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#horizontalScroll-Examples" 
           role="tab" 
           aria-selected="false">Exemple</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#horizontalScroll-Check" 
           role="tab" 
           aria-selected="false">À vérifier</a>
    </li>
</ul><div class="tab-content">
<div class="tab-pane show active"
     id="horizontalScroll-Objectives"
     role="tabpanel">
Donner une indication visuelle aux utilisateurs lors de la présence de <i lang="en">scrolls</i> horizontaux et leur permettre de les utiliser naturellement.
</br></br>**Cible&nbsp;:** tout le monde et en particulier les personnes déficientes visuelles.  
**Quand&nbsp;:** dès la phase de conception et lors du développement.
</div>
<div class="tab-pane" id="horizontalScroll-Description" role="tabpanel" >
Un <i lang="en">scroll</i> horizontal peut être très difficile à détecter si aucun visuel n’aide l’utilisateur à comprendre qu’il existe plusieurs pages.
</br></br>Ne pas hésiter à afficher un élément pour indiquer un <i lang="en">scroll</i> horizontal *(les "points" d’un `UIPageControl`)*.
</br>Quand cela est nécessaire, ajouter également des boutons «&nbsp;suivant&nbsp;» et «&nbsp;précédent&nbsp;».
</div>
<div class="tab-pane" id="horizontalScroll-Examples" role="tabpanel" >
<div class="sideToSide row">
<div class="col-sm-6 col-xs-12">
**Exemple valide&nbsp;:**

<img src="./images/scroll_ios_h1.png" alt="exemple de scroll horizontal accessible" width="300">
</div>
<div class="col-sm-6 col-xs-12">
**Exemple non-valide&nbsp;:**

<img src="./images/scroll_ios_h2.png" alt="exemple de scroll horizontal non accessible" width="300">
</div>
</div>
</div>
<div class="tab-pane" id="horizontalScroll-Check" role="tabpanel" >
- Les <i lang="en">scrolls</i> horizontaux sont indiqués visuellement
- Avec le lecteur d’écran activé, un mécanisme permet de passer de page en page lorsqu’un <i lang="en">scroll</i> horizontal est présent.
</div>
</div></br></br>

## Formulaire
<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item">
        <a class="nav-link active"
           data-toggle="tab" 
           href="#form-Objectives" 
           role="tab" 
           aria-selected="true">Objectif</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#form-Description" 
           role="tab" 
           aria-selected="false">Description</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#form-Check" 
           role="tab" 
           aria-selected="false">À vérifier</a>
    </li>
</ul><div class="tab-content">
<div class="tab-pane show active"
     id="form-Objectives"
     role="tabpanel">
Améliorer la navigation en améliorant la compréhension globale de la page, les champs de formulaires décrivant le contenu attendu.
</br></br>**Cible&nbsp;:** tout le monde et en particulier les personnes déficientes visuelles.  
**Quand&nbsp;:** lors de la conception et lors du développement.
</div>
<div class="tab-pane" id="form-Description" role="tabpanel" >
Lier les champs de formulaires avec leurs labels apporte une vocalisation supplémentaire qui permet à l’utilisateur de comprendre quoi remplir lorsqu’il arrive sur un champ de formulaire.
</br></br>Sous iOS, on apporte une information supplémentaire sur les champs de formulaire via son alternative textuelle (`accessibilityLabel`).
</div>
<div class="tab-pane" id="form-Check" role="tabpanel" >
Les champs de formulaire doivent restituer leurs labels.
</div>
</div></br></br>

## Ordre de lecture
<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item">
        <a class="nav-link active"
           data-toggle="tab" 
           href="#readingOrder-Objectives" 
           role="tab" 
           aria-selected="true">Objectif</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#readingOrder-Description" 
           role="tab" 
           aria-selected="false">Description</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#readingOrder-Examples" 
           role="tab" 
           aria-selected="false">Exemple</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#readingOrder-Check" 
           role="tab" 
           aria-selected="false">À vérifier</a>
    </li>
</ul><div class="tab-content">
<div class="tab-pane show active"
     id="readingOrder-Objectives"
     role="tabpanel">
Assurer un ordre de lecture logique et cohérent aux utilisateurs de lecteur d’écran  pour leur assurer une complète compréhension du contenu.
</br></br>**Cible&nbsp;:** les personnes déficientes visuelles.  
**Quand&nbsp;:** lors du développement.
</div>
<div class="tab-pane" id="readingOrder-Description" role="tabpanel" >
L’ordre de lecture permet à l’utilisateur de lecteur d’écran de se repérer dans la navigation et d’assurer une cohérence fonctionnelle&nbsp;: il est donc important d’y faire attention.
</br></br>Par défaut, l’ordre de lecture de la synthèse vocale commence par le permier élément de la hiérarchie des vues en haut à gauche de l'écran pour finir au dernier élément situé le plus en bas à droite, le sens de lecture allant de la gauche vers la droite.
</br></br>Pour implémenter une définition personnalisée de l’ordre de lecture dans <span lang="en">VoiceOver</span>, consultez la section appropriée dans la <a href="./criteria-ios-dev.html#ordre-de-lecture" style="text-decoration: underline;">partie développeur</a>.
</div>
<div class="tab-pane" id="readingOrder-Examples" role="tabpanel" >
L’ordre de lecture par défaut dépend complètement de l’implémentation et de l’ordre de déclaration des éléments. </br>Dans ce cas-ci&nbsp;: `1, 2, 3,  vol+, 4, 5, 6, p+, vol-, 7, 8, 9, p-, 0`.
</br><img src="./images/order.png" alt="exemple de scroll horizontal accessible" width="300">
</br>Un ordre de lecture plus cohérent serait `1, 2, 3, 4, 5, 6, 7, 8, 9, 0, vol+, vol-, p+, p-`.
</div>
<div class="tab-pane" id="readingOrder-Check" role="tabpanel" >
S'assurer que l’ordre de lecture de <span lang="en">VoiceOver</span> est logique et cohérent avec le parcours utilisateur souhaité.
</div>
</div></br></br>

## Langue
<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item">
        <a class="nav-link active"
           data-toggle="tab" 
           href="#language-Objectives" 
           role="tab" 
           aria-selected="true">Objectif</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#language-Description" 
           role="tab" 
           aria-selected="false">Description</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#language-Check" 
           role="tab" 
           aria-selected="false">À vérifier</a>
    </li>
</ul><div class="tab-content">
<div class="tab-pane show active"
     id="language-Objectives"
     role="tabpanel">
Assurer une compréhension des textes de l’application.
</br></br>**Cible&nbsp;:** les personnes déficientes visuelles.  
**Quand&nbsp;:** lors du développement.
</div>
<div class="tab-pane" id="language-Description" role="tabpanel" >
La vocalisation donnée par <span lang="en">VoiceOver</span> s’effectue, par défaut, dans la langue du système du mobile.
</br>Il arrive parfois que certain mots/textes d’une application soient dans une langue différente.
</br></br>Afin que la vocalisation soit audible, il faut déclarer ces textes dans la langue correspondante à l'aide de l’attribut `accessibilityLanguage` disponible via le protocole `UIAccessibility` (voir la <a href="./criteria-ios-dev.html#modifier-la-langue-de-vocalisation" style="text-decoration: underline;">partie développeur</a>). 
</div>
<div class="tab-pane" id="language-Check" role="tabpanel" >
Les mots/textes dans une langue différente de celle du reste de l’application sont bien vocalisés dans leur langue.
</div>
</div></br></br>

## Orientation de l’écran
<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item">
        <a class="nav-link active"
           data-toggle="tab" 
           href="#screenOrientation-Objectives" 
           role="tab" 
           aria-selected="true">Objectif</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#screenOrientation-Description" 
           role="tab" 
           aria-selected="false">Description</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#screenOrientation-Check" 
           role="tab" 
           aria-selected="false">À vérifier</a>
    </li>
</ul><div class="tab-content">
<div class="tab-pane show active"
     id="screenOrientation-Objectives"
     role="tabpanel">
Assurer une meilleure lisibilité du contenu tout en permettant aux personnes déficientes motrices qui utilisent leur terminal en mode paysage de pouvoir utiliser l’application sans contraintes.
</br></br>**Cible&nbsp;:** tout le monde et en particulier les personnes avec des déficiences visuelles et/ou motrices.  
**Quand&nbsp;:** lors de la conception et lors du développement.
</div>
<div class="tab-pane" id="screenOrientation-Description" role="tabpanel" >
L’accès au contenu d’une application ne doit absolument pas dépendre de l’orientation de l’écran, c’est pourquoi il est très fortement recommandé de mettre en place un **passage sans contraintes entre les modes portrait et paysage** dès le début du projet.
</br></br>Bien évidemment, ceci n’est valable que si des contraintes fonctionnelles ne viennent pas à l’encontre d’un de ces deux modes *(projection, tableau…)*.
</br></br>L’idéal est de pouvoir aussi déployer l’application sur des écrans de type iPad de façon à favoriser la lecture et la gestuelle pour l’utilisateur.
</div>
<div class="tab-pane" id="screenOrientation-Check" role="tabpanel" >
- Le cahier des charges `design` parfaitement détaillé et comprenant l’ensemble des écrans à implémenter selon leur orientation.
- La définition très précise de la façon dont les transitions entre les modes doivent être réalisées.
- La parfaite adaptation du contenu aux modes portrait et paysage par le biais d’une batterie de tests graphiques sur tous les mobiles compatibles avec la version iOS déployée *(très important pour le grossissement de texte)*.
- Le paramétrage approprié dans l’éditeur de code.
</div>
</div></br></br>

## Options d'accessibilité

<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item">
        <a class="nav-link active"
           data-toggle="tab" 
           href="#a11yOptions-Objectives" 
           role="tab" 
           aria-selected="true">Objectifs</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#a11yOptions-Description" 
           role="tab" 
           aria-selected="false">Description</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#a11yOptions-Check" 
           role="tab" 
           aria-selected="false">À vérifier</a>
    </li>
</ul><div class="tab-content">
<div class="tab-pane show active"
     id="a11yOptions-Objectives"
     role="tabpanel">
Les options d'accessibilité présentes dans les réglages du terminal sont toutes susceptibles d'améliorer de façon conséquente le parcours d'un utilisateur souffrant d'un trouble que l'option peut fortement aider à surmonter.
</br></br>Il est donc primordial de :
- **Comprendre** comment chacune de ces options peut impacter la conception et la réalisation d'une application.
- **Tester** chacune des options appropriées afin de s'assurer que son effet est bien pris en compte au sein de l'application proposée.

**Cible&nbsp;:** tout le monde.  
**Quand&nbsp;:** lors de la conception et lors du développement.
</div>
<div class="tab-pane" id="a11yOptions-Description" role="tabpanel" >
La liste exhaustive de ces options est fournie ci-dessous en détaillant leur action et leur correspondance programmatique une fois sélectionnées&nbsp;:
    
1. [Augmenter le contraste](#optionA11Y_contraste).
2. [Activer l'AssistiveTouch](#optionA11Y_assistiveTouch).
3. [Mettre le texte en gras](#optionA11Y_bold).
4. [Afficher les sous-titres](#optionA11Y_closedCaption).
5. [Modifier les couleurs en échelle de gris](#optionA11Y_grayScale).
6. [Activer l'Accès Guidé](#optionA11Y_guidedAccess).
7. [Inverser les couleurs](#optionA11Y_inverserLesCouleurs).
8. [Passer l'audio en mono](#optionA11Y_audioEnMono).
9. [Limiter les animations visuelles](#optionA11Y_limiteVisuel).
10. [Réduire le floutage et la transparence](#optionA11Y_reductionTransparence).
11. [Secouer pour annuler](#optionA11Y_secouerPourAnnuler).
12. [Énoncer le contenu de l'écran](#optionA11Y_lecturePage).
13. [Énoncer la sélection](#optionA11Y_speakSelection).
14. [Activer le Contrôle de Sélection](#optionA11Y_switchControl).
15. [Activer VoiceOver](#optionA11Y_voiceOver).
16. [Prévisualisation vidéo](#optionA11Y_autoPlayVideoPreviews) ⟹ **nouveauté iOS 13**
17. [Différencier sans couleur](#optionA11Y_differentiateWithoutColour) ⟹ **nouveauté iOS 13**
18. [Boutons avec I/O](#optionA11Y_onOffSwitchLabels) ⟹ **nouveau dans iOS 13**

<a name="optionA11Y_contraste"></a>
- **Augmenter le contraste** *(UIAccessibilityDarkerSystemColorsEnabled)* : voir [WWDC 2018](./criteria-ios-wwdc-18230.html#Contrast) pour un descriptif de la fonctionnalité.

<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item">
        <a class="nav-link active"
           data-toggle="tab" 
           href="#Contrast-iOS13"
           role="tab" 
           aria-selected="true">iOS 13</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#Contrast-iOS12"
           role="tab" 
           aria-selected="false">iOS 12</a>
    </li>
</ul><div class="tab-content">
<div class="tab-pane show active"
     id="Contrast-iOS13"
     role="tabpanel">
<img style="max-width: 1000px; height: auto;" alt="Illustration d'accès via le menu Réglages - Accessibilité - Affichage et taille du texte - Augmenter le contraste." src="./images/optionA11Y_iOS13_contraste.png" />
</br>Depuis **iOS 13**, cette option d'accessibilité est désormais une **<a href="https://developer.apple.com/documentation/uikit/uitraitcollection/3238079-accessibilitycontrast" style="text-decoration: underline;">variable d'instance</a>** `traitCollection`.
</div>
<div class="tab-pane" id="Contrast-iOS12" role="tabpanel" >
<img style="max-width: 600px; height: auto;" alt="Illustration d'accès via le menu Réglages - Général - Accessibilité - Augmenter le contraste." src="./images/optionA11Y_iOS12_contraste.png" />
</div></div></br>
<a name="optionA11Y_assistiveTouch"></a>
- **Activer l'AssistiveTouch** *(UIAccessibilityIsAssistiveTouchRunning)* : affiche le menu homonyme au premier plan quelle que soit l'application lancée.

<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item">
        <a class="nav-link active"
           data-toggle="tab" 
           href="#AssistiveTouch-iOS13"
           role="tab" 
           aria-selected="true">iOS 13</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#AssistiveTouch-iOS12"
           role="tab" 
           aria-selected="false">iOS 12</a>
    </li>
</ul><div class="tab-content">
<div class="tab-pane show active"
     id="AssistiveTouch-iOS13"
     role="tabpanel">
<img style="max-width: 1100px; height: auto;" alt="Illustration d'accès via le menu Réglages - Accessibilité - Toucher - AssistiveTouch - AssistiveTouch." src="./images/optionA11Y_iOS13_assistiveTouch.png" />
</div>
<div class="tab-pane" id="AssistiveTouch-iOS12" role="tabpanel" >
<img style="max-width: 600px; height: auto;" alt="Illustration d'accès via le menu Réglages - Général - Accessibilité - AssistiveTouch" src="./images/optionA11Y_iOS12_assistiveTouch.png" />
</div></div></br>
<a name="optionA11Y_bold"></a>
- **Mettre le texte en gras** *(UIAccessibilityIsBoldTextEnabled)* : voir [WWDC 2018](./criteria-ios-wwdc-18230.html#Sizing) pour un descriptif de la fonctionnalité.

<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item">
        <a class="nav-link active"
           data-toggle="tab" 
           href="#Bold-iOS13"
           role="tab" 
           aria-selected="true">iOS 13</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#Bold-iOS12"
           role="tab" 
           aria-selected="false">iOS 12</a>
    </li>
</ul><div class="tab-content">
<div class="tab-pane show active"
     id="Bold-iOS13"
     role="tabpanel">
<img style="max-width: 1000px; height: auto;" alt="Illustration d'accès via le menu Réglages - Accessibilité - Affichage et taille du texte - Texte en gras" src="./images/optionA11Y_iOS13_bold.png" />
</div>
<div class="tab-pane" id="Bold-iOS12" role="tabpanel" >
<img style="max-width: 600px; height: auto;" alt="Illustration d'accès via le menu Réglages - Général - Accessibilité - Texte en gras" src="./images/optionA11Y_iOS12_bold.png" />
</div></div></br>
<a name="optionA11Y_closedCaption"></a>
- **Afficher les sous-titres** *(UIAccessibilityIsClosedCaptioningEnabled)* : permet l'affichage de sous-titres codés (SC) ou pour sourds/malentendants selon leur disponibilité au visionnage dans l'`appTV` ou dans `Vidéos`.

<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item">
        <a class="nav-link active"
           data-toggle="tab" 
           href="#ClosedCaption-iOS13"
           role="tab" 
           aria-selected="true">iOS 13</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#ClosedCaption-iOS12"
           role="tab" 
           aria-selected="false">iOS 12</a>
    </li>
</ul><div class="tab-content">
<div class="tab-pane show active"
     id="ClosedCaption-iOS13"
     role="tabpanel">
<img style="max-width: 1000px; height: auto;" alt="Illustration d'accès via le menu Réglages - Accessibilité - Sous-titres codés et SM" src="./images/optionA11Y_iOS13_closedCaptions.png" />
</div>
<div class="tab-pane" id="ClosedCaption-iOS12" role="tabpanel" >
<img style="max-width: 950px; height: auto;" alt="Illustration d'accès via le menu Réglages - Général - Accessibilité - Sous-titres codés et SM" src="./images/optionA11Y_iOS12_closedCaptions.png" />
</div></div></br>
<a name="optionA11Y_grayScale"></a>
- **Modifier les couleurs en échelle de gris** *(UIAccessibilityIsGrayscaleEnabled)* : permet aux personnes ne distinguant pas les couleurs de pouvoir cerner sans problèmes les écrans particulièrement bigarrés.

<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item">
        <a class="nav-link active"
           data-toggle="tab" 
           href="#GrayScale-iOS13"
           role="tab" 
           aria-selected="true">iOS 13</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#GrayScale-iOS12"
           role="tab" 
           aria-selected="false">iOS 12</a>
    </li>
</ul><div class="tab-content">
<div class="tab-pane show active"
     id="GrayScale-iOS13"
     role="tabpanel">
<img style="max-width: 1000px; height: auto;" alt="Illustration d'accès via le menu Réglages - Accessibilité - Affichage et taille du texte - Filtres de couleur" src="./images/optionA11Y_iOS13_grayScale.png" />
</div>
<div class="tab-pane" id="GrayScale-iOS12" role="tabpanel" >
<img style="max-width: 950px; height: auto;" alt="Illustration d'accès via le menu Réglages - Général - Accessibilité - Adapter l'affichage - Filtres de couleur" src="./images/optionA11Y_iOS12_grayScale.png" />
</div></div></br>
</br>
<a name="optionA11Y_guidedAccess"></a>
- **Activer l'Accès Guidé** *(UIAccessibilityIsGuidedAccessEnabled)* : limite l'utilisation du terminal à une seule et unique application.

<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item">
        <a class="nav-link active"
           data-toggle="tab" 
           href="#GuidedAccess-iOS13"
           role="tab" 
           aria-selected="true">iOS 13</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#GuidedAccess-iOS12"
           role="tab" 
           aria-selected="false">iOS 12</a>
    </li>
</ul><div class="tab-content">
<div class="tab-pane show active"
     id="GuidedAccess-iOS13"
     role="tabpanel">
<img style="max-width: 1000px; height: auto;" alt="Illustration d'accès via le menu Réglages - Accessibilité - Accès guidé - Accès guidé" src="./images/optionA11Y_iOS13_guidedAccess.png" />
</div>
<div class="tab-pane" id="GuidedAccess-iOS12" role="tabpanel" >
<img style="max-width: 950px; height: auto;" alt="Illustration d'accès via le menu Réglages - Général - Accessibilité - Accès guidé - Accès guidé" src="./images/optionA11Y_iOS12_guidedAccess.png" />
</div></div></br>
<a name="optionA11Y_inverserLesCouleurs"></a>
- **Inverser les couleurs** *(UIAccessibilityIsInvertColorsEnabled)* : limite l'éblouissement tout en atténuant fortement les contraintes et la fatigue occulaires en passant le terminal en `mode sombre`.

<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item">
        <a class="nav-link active"
           data-toggle="tab" 
           href="#invertColors-iOS13"
           role="tab" 
           aria-selected="true">iOS 13</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#invertColors-iOS12"
           role="tab" 
           aria-selected="false">iOS 12</a>
    </li>
</ul><div class="tab-content">
<div class="tab-pane show active"
     id="invertColors-iOS13"
     role="tabpanel">
<img style="max-width: 600px; height: auto;" alt="Illustration d'accès via le menu Réglages - Accessibilité - Affichage et taille du texte - Inversion intelligente" src="./images/optionA11Y_iOS13_invertColors.png" />
</div>
<div class="tab-pane" id="invertColors-iOS12" role="tabpanel" >
<img style="max-width: 950px; height: auto;" alt="Illustration d'accès via le menu Réglages - Général - Accessibilité - Adapter l'affichage - Inverser les couleurs - Inversion intelligente" src="./images/optionA11Y_iOS12_invertColors.png" />
</div></div></br>
<a name="optionA11Y_audioEnMono"></a>
- **Passer l'audio en mono** *(UIAccessibilityIsMonoAudioEnabled)* : aide les personnes malentendantes ou sourdes d'une oreille par exemple.

<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item">
        <a class="nav-link active"
           data-toggle="tab" 
           href="#AudioMono-iOS13"
           role="tab" 
           aria-selected="true">iOS 13</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#AudioMono-iOS12"
           role="tab" 
           aria-selected="false">iOS 12</a>
    </li>
</ul><div class="tab-content">
<div class="tab-pane show active"
     id="AudioMono-iOS13"
     role="tabpanel">
<img style="max-width: 1000px; height: auto;" alt="Illustration d'accès via le menu Réglages - Accessibilité - Audio Visuel - Mono Audio" src="./images/optionA11Y_iOS13_audioEnMono.png" />
</div>
<div class="tab-pane" id="AudioMono-iOS12" role="tabpanel" >
<img style="max-width: 590px; height: auto;" alt="Illustration d'accès via le menu Réglages - Général - Accessibilité - Audio mono" src="./images/optionA11Y_iOS12_audioEnMono.png" />
</div></div></br>
<a name="optionA11Y_limiteVisuel"></a>
- **Limiter les animations visuelles** *(UIAccessibilityIsReduceMotionEnabled)* : voir [WWDC 2018](./criteria-ios-wwdc-18230.html#Motion) pour un descriptif de la fonctionnalité.

<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item">
        <a class="nav-link active"
           data-toggle="tab" 
           href="#ReduceMotion-iOS13"
           role="tab" 
           aria-selected="true">iOS 13</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#ReduceMotion-iOS12"
           role="tab" 
           aria-selected="false">iOS 12</a>
    </li>
</ul><div class="tab-content">
<div class="tab-pane show active"
     id="ReduceMotion-iOS13"
     role="tabpanel">
<img style="max-width: 1000px; height: auto;" alt="Illustration d'accès via le menu Réglages - Accessibilité - Mouvement - Réduire les animations" src="./images/optionA11Y_iOS13_reduceMotion.png" />
</div>
<div class="tab-pane" id="ReduceMotion-iOS12" role="tabpanel" >
<img style="max-width: 950px; height: auto;" alt="Illustration d'accès via le menu Réglages - Général - Accessibilité - Réduire les animations" src="./images/optionA11Y_iOS12_reduceMotion.png" />
</div></div></br>
<a name="optionA11Y_reductionTransparence"></a>
- **Réduire le floutage et la transparence** *(UIAccessibilityIsReduceTransparencyEnabled)* : voir [WWDC 2018](./criteria-ios-wwdc-18230.html#TransparencyAndBlurring) pour un descriptif de la fonctionnalité.

<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item">
        <a class="nav-link active"
           data-toggle="tab" 
           href="#ReduceTransparency-iOS13"
           role="tab" 
           aria-selected="true">iOS 13</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#ReduceTransparency-iOS12"
           role="tab" 
           aria-selected="false">iOS 12</a>
    </li>
</ul><div class="tab-content">
<div class="tab-pane show active"
     id="ReduceTransparency-iOS13"
     role="tabpanel">
<img style="max-width: 1000px; height: auto;" alt="Illustration d'accès via le menu Réglages - Accessibilité - Affichage et taille du texte - Réduire la transparence" src="./images/optionA11Y_iOS13_reduceTransparency.png" />
</div>
<div class="tab-pane" id="ReduceTransparency-iOS12" role="tabpanel" >
<img style="max-width: 950px; height: auto;" alt="Illustration d'accès via le menu Réglages - Général - Accessibilité - Réduire la transparence" src="./images/optionA11Y_iOS12_reduceTransparency.png" />
</div></div></br>
<a name="optionA11Y_secouerPourAnnuler"></a>
- **Secouer pour annuler** *(UIAccessibilityIsShakeToUndoEnabled)* : affichage d'un menu par secousse du terminal qui permet de rétablir une action supprimée ou encore d'éviter de rester appuyé sur la touche d'effacement pour regarder les lettres s'effacer l'une après l'autre.

<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item">
        <a class="nav-link active"
           data-toggle="tab" 
           href="#ShakeToUndo-iOS13"
           role="tab" 
           aria-selected="true">iOS 13</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#ShakeToUndo-iOS12"
           role="tab" 
           aria-selected="false">iOS 12</a>
    </li>
</ul><div class="tab-content">
<div class="tab-pane show active"
     id="ShakeToUndo-iOS13"
     role="tabpanel">
<img style="max-width: 1000px; height: auto;" alt="Illustration d'accès via le menu Réglages - Accessibilité - Toucher - Secouer pour annuler" src="./images/optionA11Y_iOS13_shakeToUndo.png" />
</div>
<div class="tab-pane" id="ShakeToUndo-iOS12" role="tabpanel" >
<img style="max-width: 950px; height: auto;" alt="Illustration d'accès via le menu Réglages - Général - Accessibilité - Secouer pour annuler" src="./images/optionA11Y_iOS12_shakeToUndo.png" />
</div></div></br>
<a name="optionA11Y_lecturePage"></a>
- **Énoncer le contenu de l'écran** *(UIAccessibilityIsSpeakScreenEnabled)* : permet l'accès au player natif pour lire automatiquement une page web par exemple.

<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item">
        <a class="nav-link active"
           data-toggle="tab" 
           href="#SpeakScreen-iOS13"
           role="tab" 
           aria-selected="true">iOS 13</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#SpeakScreen-iOS12"
           role="tab" 
           aria-selected="false">iOS 12</a>
    </li>
</ul><div class="tab-content">
<div class="tab-pane show active"
     id="SpeakScreen-iOS13"
     role="tabpanel">
<img style="max-width: 1000px; height: auto;" alt="Illustration d'accès via le menu Réglages - Accessibilité - Contenu énoncé - Énoncer lecontenu de l'écran" src="./images/optionA11Y_iOS13_speakScreen.png" />
</div>
<div class="tab-pane" id="SpeakScreen-iOS12" role="tabpanel" >
<img style="max-width: 950px; height: auto;" alt="Illustration d'accès via le menu Réglages - Général - Accessibilité - Parole - Énoncer le contenu de l'écran" src="./images/optionA11Y_iOS12_speakScreen.png" />
</div></div></br>
<a name="optionA11Y_speakSelection"></a>
- **Énoncer la sélection** *(UIAccessibilityIsSpeakSelectionEnabled)* : donne accès à l'affichage d'un menu qui propose d'énoncer la sélection qui a déclenché son apparition.

<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item">
        <a class="nav-link active"
           data-toggle="tab" 
           href="#SpeakSelection-iOS13"
           role="tab" 
           aria-selected="true">iOS 13</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#SpeakSelection-iOS12"
           role="tab" 
           aria-selected="false">iOS 12</a>
    </li>
</ul><div class="tab-content">
<div class="tab-pane show active"
     id="SpeakSelection-iOS13"
     role="tabpanel">
<img style="max-width: 1000px; height: auto;" alt="Illustration d'accès via le menu Réglages - Accessibilité - Contenu énoncé - Énoncer la sélection" src="./images/optionA11Y_iOS13_speakSelection.png" />
</div>
<div class="tab-pane" id="SpeakSelection-iOS12" role="tabpanel" >
<img style="max-width: 950px; height: auto;" alt="Illustration d'accès via le menu Réglages - Général - Accessibilité - Parole - Énoncer la sélection" src="./images/optionA11Y_iOS12_speakSelection.png" />
</div></div></br>
<a name="optionA11Y_switchControl"></a>
- **Activer le Contrôle de Sélection** *(UIAccessibilityIsSwitchControlRunning)* : active la fonctionnalité en `mode point` ou en `mode élément`.

<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item">
        <a class="nav-link active"
           data-toggle="tab" 
           href="#SwitchControl-iOS13"
           role="tab" 
           aria-selected="true">iOS 13</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#SwitchControl-iOS12"
           role="tab" 
           aria-selected="false">iOS 12</a>
    </li>
</ul><div class="tab-content">
<div class="tab-pane show active"
     id="SwitchControl-iOS13"
     role="tabpanel">
<img style="max-width: 1000px; height: auto;" alt="Illustration d'accès via le menu Réglages - Accessibilité - Switch Control - Switch Control" src="./images/optionA11Y_iOS13_switchControl.png" />
</div>
<div class="tab-pane" id="SwitchControl-iOS12" role="tabpanel" >
<img style="max-width: 950px; height: auto;" alt="Illustration d'accès via le menu Réglages - Général - Accessibilité - Contrôle de sélection" src="./images/optionA11Y_iOS12_switchControl.png" />
</div></div></br>
<a name="optionA11Y_voiceOver"></a>
- **Activer VoiceOver** *(UIAccessibilityIsVoiceOverRunning)* : active le lecteur d'écran.

<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item">
        <a class="nav-link active"
           data-toggle="tab" 
           href="#VoiceOver-iOS13"
           role="tab" 
           aria-selected="true">iOS 13</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" 
           data-toggle="tab" 
           href="#VoiceOver-iOS12"
           role="tab" 
           aria-selected="false">iOS 12</a>
    </li>
</ul><div class="tab-content">
<div class="tab-pane show active"
     id="VoiceOver-iOS13"
     role="tabpanel">
<img style="max-width: 1000px; height: auto;" alt="Illustration d'accès via le menu Réglages - Accessibilité - VoiceOver - VoiceOver" src="./images/optionA11Y_iOS13_voiceOver.png" />
</div>
<div class="tab-pane" id="VoiceOver-iOS12" role="tabpanel" >
<img style="max-width: 950px; height: auto;" alt="Illustration d'accès via le menu Réglages - Général - Accessibilité - VoiceOver - VoiceOver" src="./images/optionA11Y_iOS12_voiceOver.png" />
</div></div></br>
<a name="optionA11Y_autoPlayVideoPreviews"></a>
- **Prévisualisation vidéo** *(UIAccessibilityIsVideoAutoplayEnabled)* : voir [WWDC 2019](./criteria-ios-wwdc-19000.html#nouveaut-s-ios-13-pour-l-accessibilit-visuelle) pour un descriptif de cette **nouvelle fonctionnalité iOS 13**.
</br><img style="max-width: 375px; height: auto;" alt="Illustration d'accès via le menu Réglages - Accessibilité - Mouvement - Lire automatiquement les aperçus" src="./images/iOSdev/wwdc19-244-TextStyles_6.png" />
</br></br></br>
<a name="optionA11Y_differentiateWithoutColour"></a>
- **Différencier sans couleur** *(UIAccessibilityShouldDifferentiateWithoutColour)* : voir [WWDC 2019](./criteria-ios-wwdc-19000.html#nouveaut-s-ios-13-pour-l-accessibilit-visuelle) pour un descriptif de cette **nouvelle fonctionnalité iOS 13**.
</br><img style="max-width: 1000px; height: auto;" alt="Illustration d'accès via le menu Réglages - Accessibilité - Affichage et taille du texte - Différencier sans couleur" src="./images/optionA11Y_iOS13_differentiateWithoutColour.png" />
</br></br></br>
<a name="optionA11Y_onOffSwitchLabels"></a>
- **Boutons avec I/O** *(UIAccessibilityIsOnOffSwitchLabelsEnabled)* : une fois activée, cette option dont l'**accès programmatique est une nouveauté iOS 13** affiche directement l'état des boutons à bascule pour éviter que seule la couleur soit porteuse de l'information.
</br><img style="max-width: 1000px; height: auto;" alt="Illustration d'accès via le menu Réglages - Accessibilité - Affichage et taille du texte - Boutons avec I/O" src="./images/optionA11Y_iOS13_onOffSwitchLabels.png" />

</div>
<div class="tab-pane" id="a11yOptions-Check" role="tabpanel" >
Une fois l'option activée, si l'action désirée n'est pas effective au sein de l'application, il est **très fortement recommandé** d'agir en conséquence en se tenant informé de l'état de l'option impactée pour fournir à l'utilisateur l'expérience à laquelle il s'attend.
</br></br>La liste complète des options d'accessibilité avec leur notification dédiée est présente dans la <a href="./criteria-ios-dev.html#options-d-accessibilit-" style="text-decoration: underline;">partie développeur</a>.
</br></br>Il peut être aussi particulièrement intéressant de suivre les (dés)activations de ces options sous forme d'indicateurs afin de mieux connaître les utilisateurs d'une application et d'affiner subséquemment sa mise en oeuvre.
</div> 
</div></br></br>

<!--  This file is part of a11y-guidelines | Our vision of mobile & web accessibility guidelines and best practices, with valid/invalid examples.
 Copyright (C) 2016  Orange SA
 See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). -->