---
title: "Le test de l’accessibilité sous Android"
---

# Le test de l’accessibilité sous Android

Pour le web, le niveau d’accessibilité demandé à toute interface <abbr>HTML</abbr> par le groupe Orange est le respect des critères du niveau AA des <span lang="en">Web Content Accessibility Guidelines</span> (<abbr>WCAG</abbr>) 2.1. L'équivalent pour les applications mobiles natives est  une transposition de ces critères et le respect des [recommandations de la plateforme Android](https://developer.android.com/training/accessibility/testing).

Les 4 étapes qui suivent permettent de détecter la majorité des erreurs d’accessibilité, très en amont, avant la phase de tests, et ainsi de réduire le coût du processus pour rendre une application accessible.

- La première étape consiste à analyser l’accessibilité dès la phase de conception, sur les maquettes ou les prototypes. En faisant intervenir un expert en accessibilité, celui-ci pourra fournir dès cette phase des retours pour adapter les maquettes au besoin, ce qui évitera par la suite des pertes de temps en développements d’interfaces non adaptées à l’accessibilité.

- La deuxième étape consiste à l’analyse du code durant la phase de développement par les développeurs. Cela passe notamment par des tests automatisés ou par l’outil <span lang="en">Lint </span> de Android Studio.

- La troisième étape consiste à scanner l’application par des outils d’analyse en accessibilité, afin de détecter d’autres potentielles erreurs commises.

- La dernière étape consiste à réaliser des tests manuels, en utilisant l'application comme le font les personnes en situation de handicap, pour détecter les potentiels problèmes d’accessibilité.

Dans l’idéal, les tests doivent être effectués sur des mobiles Android sans surcouche constructeur comme le Pixel. Ils doivent ensuite être réalisés sur les mobiles avec surcouche constructeur les plus utilisés par l’application.

Pour tester l’accessibilité sur Android, il est utile de télécharger sur [<span lang="en">Google Play</span>](https://play.google.com/store/apps?hl=fr), [<span lang="en">Android Accessibility Suite</span>](https://play.google.com/store/apps/details?id=com.google.android.marvin.talkback) et [<span lang="en">Accessibility Scanner</span>](https://play.google.com/store/apps/details?id=com.google.android.apps.accessibility.auditor). Les outils peuvent être combinés pour vérifier plus de critères en même temps.

## Tests des développeurs : analyse du code

Cette étape permet de remonter directement des problèmes d’accessibilité pendant la phase de développement et provoque des erreurs de build de l’application, ou divers warnings. Le développeur doit ainsi les corriger directement pour pouvoir builder son application et la faire fonctionner, ce qui la rend d’office plus accessible avant même de la faire passer par des tests manuels, ou par des outils d’analyse. De plus, cela évite les possibles régressions d’accessibilité.

### <span lang="en">Lint</span>
Le développeur peut en premier lieu utiliser l’outil <span lang="en">Lint</span> dans Android Studio, sur son application, afin de faire une première passe sur les problèmes d’accessibilités.
5 problèmes d’accessibilités peuvent être remontés grâce à <span lang="en">Lint</span> :

- **<span lang="en">ClickableViewAccessibility </span>**: Si une vue surcharge  <span lang="en">onTouchEvent </span> ou utilise une surcharge <span lang="en">onTouchListener</span> , mais n’implémente pas <span lang="en">performClick</span>
- **<span lang="en">ContentDescription</span>** : les widgets non textuels ne portant aucune <span lang="en">contentDescription</span>
- **<span lang="en">KeyboardInaccessibleWidget</span>** : les widgets étant déclarés comme clickables mais non focusables. 
- **<span lang="en">LabelFor</span>** : un <span lang="en">EditText</span> doit contenir soit un <span lang="en">hint</span>, soit la référence d’un label associé avec <span lang="en">labelFor</span>
- **<span lang="en">GetContentDescriptionOverride</span>** : surcharger <span lang="en">getContentDescription</span> peut poser des problèmes d’accès aux services d’accessibilité. Dans le cas où on a besoin de modifier la description, il faut plutôt faire appel à la fonction : <span lang="en">setContentDescription</span>

**Exemple de rapport Lint sous Android Studio :**   

<img src="../../images/lint.png" alt="capture d’écran présentant un rapport de l'outil Lint, qui affiche une erreur d'accessibilité" width="50%">


### Tests automatisés : Espresso

Espresso est un framework permettant de tester son UI sous Android. On peut alors y intégrer le framework ATF (<span lang="en">Accessibility Test Framework</span>), qui va ajouter une couche de tests concernant l’accessibilité. 

Aucun test explicite n’a besoin d’être écrit. Une fois ATF intégré aux tests Expresso, les vérifications d’accessibilité se rajoutent automatiquement. ATF fonctionne cependant avec les <span lang="en">ViewAction</span>, c’est-à-dire qu’il va effectuer automatiquement la vérification d’accessibilité sur les interactions <span lang="en">ViewAction</span> mis en place dans les tests Espresso. De plus, pour activer les vérifications d’accessibilité, il faut faire appel à la fonction `AccessibilityChecks.enable()` dans la suite de tests. 

Voici comment l’intégrer :

<pre>
<code class="java">
@Before
    public static void enableAccessibilityChecks() {
        AccessibilityChecks.enable();
    }
</code></pre>

<pre>
<code class="kotlin">
companion object {
    @BeforeClass @JvmStatic
    fun enableAccessibilityChecks() {
        AccessibilityChecks.enable()
    }
}
</code></pre>

C’est ainsi que, dans le cas où l’on réalise dans la suite de test un `ViewAction.click()` sur un bouton qui ne correspond pas à la taille requise pour un élément interactif, le test apparaitra en erreur jusqu’à ce que le problème d’accessibilité soit résolu.

#### Réaliser les tests automatisés d’accessibilité sur l’ensemble de l’écran

L’automatisation du test d’accessibilité selon les <span lang="en">ViewAction</span> peut cependant devenir limitant. C’est pourquoi, on peut indiquer lors de l’activation de ATF, que l’on souhaite faire les validations depuis la vue racine. Ainsi, toutes les vues seront testées, sans besoin d’ajouter de <span lang="en">ViewActions</span>. Pour ce faire, il faut remplacer  `AccessibilityChecks.enable()` par `AccessibilityChecks.enable().setRunChecksFromRootView(true)`

#### Loguer les erreurs d’accessibilité plutôt que faire passer les tests en erreur

Il est possible de loguer les erreurs d’accessibilité afin de les voir apparaitre dans le logcat d’Android Studio, plutôt que de causer l’erreur des tests Espresso, même si cela n’est pas conseillé. Cela ne doit être utilisé que dans un cadre temporaire. Pour ce faire, il faut ajouter la fonction suivante : `AccessibilityChecks.enable().setThrowExceptionForErrors(false)`

#### Créer une whitelist 

Plutôt que de loguer toutes les erreurs d’accessibilité dans le logcat, il est possible de créer une <span lang="en">whitelist</span> pour ne loguer que celles que l’on souhaite, tout en conservant les autres en erreur. Pour cela, il faut ajouter la fonction suivante : 
`AccessibilityChecks.enable().setRunChecksFromRootView(true).setSuppressingResultMatcher(matchesView(anyOf(withId(R.id.buttonPlus))))`

Dans cet exemple, la vue ayant pour id **<span lang="en">buttonPlus</span>** ne sera pas indiquée en erreur en cas de problème d’accessibilité, mais sera affichée dans le logcat.

## Scan de l'application : les outils d'analyse

Les outils d’analyse complètent parfaitement la première approche, afin de détecter d’autres problèmes d’accessibilité potentiels, comme ceux liés à la taille des boutons, aux contrastes des couleurs etc…

### Accessibility Scanner

Le [scanner](https://play.google.com/store/apps/details?id=com.google.android.apps.accessibility.auditor) est téléchargeable sur le playstore.

Le scanner prend des captures d’écran de la page et vérifie :
- que l’écran contient des “vocalisations ou label” pour le lecteur d’écran
- que les zones cliquables sont suffisamment grandes et qu’elles ont un label propre 
- Les contrastes de couleur

Attention, c’est une aide à la vérification, l’outil remonte parfois des faux positifs.

Certaines de ces vérifications font doublon avec `lint`.
En cas de doute sur les contrastes, [<span lang="en">Colour contrast analysor</span>](https://developer.paciellogroup.com/resources/contrastanalyser/) permet de faire un diagnostic plus précis.

#### Mode opératoire :

- Activer le scanner dans les **paramètres/accessibilité/Accessibility Scanner** (paramètres/accessibilité/Services installés/Accessibility Scanner avec la surcouche de Samsung). Cela affiche un “<span lang="en">floating action button</span>” sur l’écran.
- Actionner le bouton sur les écrans à tester. Une capture d’écran est réalisée et la liste des suggestions de correction s’affiche.

**Exemple d'utilisation de l'<span lang="en">Accessibility Scanner</span> :**   

Le <span lang="en">floating button</span> présent sur l'écran pour déclencher un rapport en cas de clic.

<img src="../../images/scanner_floating.jpg" alt="capture d’écran présentant un écran de l'application Orange TV, avec le bouton permettant de déclencer le scan" width="25%">

Le rapport ainsi généré par <span lang="en">Accessibility Scanner</span> une fois le bouton cliqué.

<img src="../../images/scanner_report.jpg" alt="capture d’écran présentant le rapport de l'outil Accessibility Scanner" width="25%">  



### <span lang="en">Google Play - Pre Launch Report</span>

Proche de l’analyse effectuée par <span lang="en">Accessibility Scanner, Google Play</span>  est en mesure de générer des rapports d’accessibilité après avoir transféré son application sur la console développeur. Celui-ci, s’appuyant sur le même Framework que l’application <span lang="en">Accessibility Scanner</span>, vérifie notamment 3 exigences <span lang="en">UI</span> au sein de l’application :

- La zone utilisée pour les éléments interactifs : un bouton trop petit sera alors indiqué dans le rapport par exemple
- Les contrastes : vérifie que les ratios de contraste sont respectés entre les textes et leurs backgrounds
- Les descriptions de contenu : vérifie que tous les éléments possèdent un texte pour le décrire à l’utilisateur en cas de besoin

Ce test étant réalisé depuis la console <span lang="en">Google Play</span>, cela peut être une dernière vérification faite par le Product Owner lui-même, avant de pousser en production l’application, et ainsi constater que les critères d’accessibilité ont bien été respectés.


**Exemple de rapport généré par <span lang="en">Google Play Report</span> :**   

![capture d’écran présentant un rapport d'accessibilité, sur la console développeur](../../images/google_report.png) <!-- .element height="50%" width="50%" --> 


### aXe

aXe est une application présente sur le <span lang="en">Google Play Store</span> et qui permet, de même que <span lang="en">Accessibility Scanner</span> ou que le <span lang="en">Pre Launch Report</span> de Google, d’afficher les problèmes d’accessibilité au sein des différents écrans de son application. Bien que redondant avec les deux outils précédents présentés dans certaines vérifications, il est recommandé de l’utiliser en complément, puisqu’il sera en mesure d’afficher des erreurs différentes d’accessibilité, et complètera donc parfaitement les premiers examens, pour avoir un compte rendu plus complet.

L’utilisation d’aXe est très facile, puisqu’il suffit de télécharger l’application et de se laisser ensuite guider. A l’aide d’un <span lang="en">floating buton</span>, une analyse pourra être lancée sur l’écran de son choix, et les rapports d’erreurs seront immédiatement retranscrits au bas de l’écran.

**Exemple d'utilisation de aXe :**   

Le <span lang="en">floating button</span> de l'application aXe présent sur l'écran pour déclencher un rapport en cas de clic.

<img src="../../images/aXe_floating.jpg" alt="capture d’écran présentant un écran de l'application Orange TV, avec le bouton permettant de déclencer le scan grâce à aXe" width="25%">   

Le rapport ainsi généré par aXe une fois le bouton cliqué.

<img src="../../images/aXe_report.jpg" alt="capture d’écran présentant le rapport de l'outil aXe" width="25%">   



### <span lang="en">UI Automator View</span>

<span lang="en">UI Automator View</span> est un outil présent dans le SDK Android, qui permet de scanner et d’analyser les composants UI d’une application Android. Cela permet ainsi de voir la hiérarchie des vues et les différentes propriétés pour chacune d’elle.
Bien que n’étant pas un outil dédié à l’accessibilité, celui-ci peut être utilisé afin d’analyser plus en détail un problème d’accessibilité rencontré, et ainsi mieux en comprendre l’origine.

Pour utiliser cet outil, vous avez donc besoin d’installer le SDK Android. Une fois celui-ci installé, vous devriez pouvoir trouver l’outil au chemin suivant : **C:\users\username\AppData\Local\Android\sdk\tools\uiautomatorviewer.bat**

Il est ainsi possible de l’utiliser au sein d’une application présente sur son téléphone, si celui-ci a le mode développeur activé et qu’il est connecté via un câble USB à l’ordinateur sur lequel <span lang="en">UI Automator View/<span> est lancé. Une fois ces conditions réunies, il suffit de cliquer sur le bouton <span lang="en">Device Screenshot</span> dans l’outil pour lancer l’analyse des composants UI de l’écran affiché sur le téléphone.



### Outil tracé des contours

Il est possible sous Android d’afficher les contours des différentes vues d’une application, ce qui permet de détecter les possibles problématiques liées aux dimensions des éléments, de vérifier des marges suffisantes entre divers éléments, et de vérifier que chaque zone sensible a une taille suffisante.
Pour ce faire, il suffit dans les paramètres, puis dans les options pour les développeurs du téléphone, d’activer l’option « Afficher les contours » dans la catégorie « Tracé »

**Exemple d'utilisation du tracé des contours :**   

L'écran des paramètres permettant d'activer le tracé des contours.

<img src="../../images/contour_param.jpg" alt="capture d’écran présentant l'écran des paramètres, avec la checkbox permettant d'activer ou de désactiver l'affichage des contours" width="25%"> 

Exemple d'écran avec le tracé des contours actifs

<img src="../../images/contour_UI.jpg" alt="capture d’écran présentant un écran de l'application Orange TV, en ayant le tracé des contours des différentes vues" width="25%"> 



### <span lang="en">Colour Contrast Analyser</span>

Les contrastes de couleurs se vérifient sur les maquettes de l’application, ou via <span lang="en">Accessibility Scanner</span> sur un mobile Android. Si un doute subsiste, il est possible de faire un screenshot de l’application, puis de faire une vérification sur un ordinateur [Mesurer le niveau de contraste des couleurs](../../../web/outils/methodes-et-outils-de-test/mesurer-contraste-couleurs/) via l'outil <span lang="en">Colour Contrast Analyser</span>.
Pour les valeurs à respecter voir la [section concernant les couleurs](../conception#couleurs).



## Les tests manuels : mise en situation

Les tests manuels concernent ceux que vous allez réaliser vous-même, en reproduisant la situation vécue par vos utilisateurs, et donc en utilisant leurs outils d’interaction pour votre application. Il est même préférable de faire tester l’application par de réels utilisateurs en situation de handicap si cela est possible. Plusieurs outils sont donc à utiliser, afin de prendre en compte le maximum de situations possibles : 



### Le lecteur d’écran <span lang="en">TalkBack</span>

Le lecteur d’écran est un outil pour les personnes non voyantes et malvoyantes. Il a deux fonctions, la vocalisation et la navigation dans l’écran. Tous les éléments signifiants doivent être **vocalisés** dans un **ordre logique**.

Pour l’activation et l’utilisation du lecteur, vous pourrez obtenir davantage de précision dans la [section concernant <span lang="en">TalkBack</span>](../talkback/).

La navigation peut être utilisée en :

- **Lecture par exploration avec le doigt** : en glissant lentement son doigt sur l’écran, <span lang="en">Talkback</span> annonce les éléments à mesure qu’on l’on passe son doigt sur l’écran.

<img src="../../images/gesture1.png" alt="image schématisant l'action de glisser son doigt sur un écran de téléphone" width="80">   



- **Lecture linéaire** : il est possible d’explorer l’écran, élément par élément en faisant glisser son doigt vers la gauche ou vers la droite pour naviguer entre les éléments, dans l’ordre. Il est aussi possible de parcourir les paramètres de navigation en balayant l’écran vers le haut ou vers le bas jusqu’à obtenir le paramètre souhaité. Le balayage vers la droite ou la gauche se fera alors en utilisant le paramètre choisi ; Les différents paramètres de navigation existants sont : 
	- **Titres** : naviguer par titre
	- **Liens** : naviguer par liens (mail, numéro, sites ou tout autre lien à l’écran)
	- **Commandes** : naviguer par cases à cocher, boutons et autres éléments interactifs
	- **Défaut** : naviguer par ordre d’affichage pour chaque élément
  
  <dl>
    <dt>Double clique avec un doigt</dt>
    <dd>
      <img src="../../images/gestureclick.png" alt="" width="80">
      Active le dernier élément qui a été vocalisé
    </dd>
  <dt><span lang="en">Swipe</span> vers le haut ou vers le bas avec deux doigts</dt>
    <dd>
      <img src="../../images/gesture3_1.png" alt="" width="80">
      <span lang="en">Scroll</span> dans la page, équivalent à un <span lang="en">scroll</span> vertical traditionnel
    </dd>
  <dt><span lang="en">Swipe</span> vers la gauche ou vers la droite avec deux doigts</dt>
    <dd>
      <img src="../../images/gesture4_2.png" alt="" width="80">
      Equivalent à un <span lang="en">scroll</span> horizontal traditionnel
    </dd>
  <dt><span lang="en">Swipe</span> vers la droite avec un doigt</dt>
    <dd>
      <img src="../../images/gesture6.png" alt="" width="80">
      Se déplace sur l'élément suivant
    </dd>
  <dt><span lang="en">Swipe</span> vers la gauche avec un doigt</dt>
    <dd>
      <img src="../../images/gesture5.png" alt="" width="80">
      Se déplace sur l'élément précédent
    </dd>
  <dt><span lang="en">Swipe</span> vers le haut ou vers le bas avec un doigt</dt>
    <dd>
      <img src="../../images/gesture8.png" alt="" width="80">
      Modifie le paramètre de navigation appliqué
    </dd>
  </dl>


- **Recherche sur écran** : il est possible de naviguer en utilisant la recherche sur l’écran ; pour cela, il faut balayer l’écran vers la gauche, puis vers le bas, saisir le terme de recherche et choisir une correspondance dans la liste fournie.

<img src="../../images/search_talkback.jpg" alt="capture d'écran représentant le type de navigation recherche sur écran avec l'outil Talkback" width="25%"> 


- **Lecture en continu** : Pour utiliser la lecture de l’écran en continu, il faut ouvrir le menu contextuel général avec un balayage vers le bas puis vers la droite, puis choisir l’option (en balayant vers la droite pour la trouver dans le menu) « Lire à partir du haut de page » ou « Lire à part de l’élément suivant », puis appuyer deux fois dessus pour sélectionner l’option. La lecture en continu démarre alors et peut-être arrêtée en appuyant sur l’écran. 


#### Mode opératoire

Parcourir l’application sur les scénarios utilisateurs et vérifier que toutes les informations sont vocalisées dans un ordre logique et compréhensible ainsi que :

- Tous les éléments signifiants sont-ils bien accessibles ?

- Les informations sont-elles vocalisées dans un ordre logique et compréhensible ?

- Les éléments interactifs sont-ils vocalisés avec l’action associée ? (bouton, case à cocher… Appuyer deux fois pour activer)

- Les états des éléments sont-ils précisés ? (désactivé, coché)

- Les messages temporaires, et les alertes sont-ils vocalisés ?

- Les transitions entre les activités sont-elles vocalisées ?

- Les messages d’erreurs et les contenus dynamiques sont-ils vocalisés ?

- Les scrolls horizontaux sont-ils vocalisés ?

- Y-a-t-il la présence d’éléments fantômes ?

- Les titres des activités sont-ils vocalisés ?

- Le workflow est-il facile ? 

- La vocalisation est-elle cohérente, succincte, et simple ?

- Les images décoratives sont-elles bien ignorées ? Et au contraire, les images signifiantes sont-elles vocalisées ?

Idéalement, le test doit se faire sans regarder l’écran, ou en activant l’écran noir (**Assombrir l’écran**).


### Navigation au focus (au clavier)

La navigation dans une application ou une page web doit être possible à l’aide d’un clavier externe (connecté au smartphone par Bluetooth ou USB), afin de reproduire le cas des personnes ne pouvant pas utiliser l’écran tactile, comme celles utilisant un joystick (sur un fauteuil roulant par exemple), ou celles étant atteintes de la maladie de parkinson. Il est important de vérifier son fonctionnement car certains développements peuvent entraîner des difficultés pour naviguer correctement dans la page.
Pour tester la navigation au clavier, il faut connecter un clavier d’ordinateur au smartphone, soit avec un adaptateur (USB - USB C par exemple), soit, si le clavier est , <span lang="en">bluetooth</span>, en appairant le clavier et le téléphone. Le clavier , <span lang="en">bluetooth</span> a l’avantage de faciliter le débuggage.

#### Mode opératoire

Parcourir l’application à l’aide du clavier
- toutes les fonctionnalités doivent être accessibles.  
- le focus doit rester suffisamment visible sur chaque élément recevant ce focus (éléments activables, boutons, éléments cliquables, cases à cocher…).

#### Liste des raccourcis clavier principaux&nbsp;: 

- La touche **TAB** pour faire avancer le focus.
- Les touches **maj+TAB** pour faire reculer le focus.
- La touche **entrée** pour activer l’élément qui a le focus (lien, bouton, menu…).
- La **barre espace** pour cocher/décocher une case à cocher.
- Les **flèches directionnelles** pour modifier la sélection des boutons radio, pour se déplacer dans une liste déroulante, ou faire défiler les ascenseurs **scrollbar** ) lorsque ceux-ci sont présents.

Ce sont les mêmes touches utilisées pour tester l'accessibilité d'un site web. Mais l’usage du **Tab** par rapport aux **flèches** ainsi que l’usage de la **barre espace** par rapport à la touche **entrée** sont moins codifiés : on considère le test réussi lorsqu’au moins l’une des deux options permet de réaliser l’action.

Il est considéré comme bloquant l’impossibilité de sortir d’une fonctionnalité ou de l’application.


### <span lang="en">Switch Access</span>

**<span lang="en">Switch Access</span>** est une application à destination des personnes présentant des troubles moteur. Elle permet de contrôler le téléphone en programmant des touches. Elle ne peut se substituer aux tests claviers, mais reste cependant intéressante à tester, dans le cas de la méthode two switch.

Pour l’activer, il faut procéder comme suit : 

- Aller dans les paramètres du téléphone
- Naviguer dans le menu jusqu’à accessibilité (puis Services installés avec la surcouche Samsung), puis sélectionner <span lang="en">Switch Access</span>, puis Paramètres
- Vérifier que la recherche automatique est désactivé
- Utiliser le bouton **Volume Haut** comme correspondant à l’action **Passer à l'option suivante**
- Utiliser le bouton **Volume Bas** comme correspondant à l’action **Selectionner**
- Revenir à l’écran principal de <span lang="en">Switch Access</span> et activer ou désactiver l’option d’accessibilité <span lang="en">Switch Access</span> quand nécessaire

#### Mode opératoire

Parcourir l’application à l’aide du bouton **Passer à l'option suivante** (volume haut).

Puis vérifier de la même sorte avec la navigation au clavier que : 
- Le <span lang="en">workflow</span> peut-il être parcouru totalement et facilement, dans un ordre cohérent ?
- Les <span lang="en">inputs</span> peuvent-ils être édités facilement ?
- Les éléments mis en surbrillance sont-ils seulement ceux sur lesquels on peut réaliser une action ?

#### Afficher tout les éléments interactifs

Afin d’afficher en surbrillance tous les éléments interactifs d’un écran rapidement, et ainsi de réaliser une vérification rapide, il est possible d’utiliser l’option <span lang="en">Group Selection</span> du <span lang="en">Switch Access</span>.

Pour ce faire, il faut sélectionner la méthode <span lang="en">Group Selection</span> en tant que <span lang="en">Scanning Method</span> dans les paramètres du <span lang="en">Switch Access</span>, et ensuite attribuer une touche pour le scan.

Une fois au sein de son application, il suffit d’appuyer sur l’action **<span lang="en">Select</span>** (volume bas dans notre configuration) pour afficher tous les éléments interactifs de notre écran actuel et ainsi vérifier que :
- Tous les éléments interactifs sont-ils bien mis en surbrillance ?
- N’y a-t-il que des éléments interactifs en surbrillance ?


### Agrandissement

Android propose plusieurs options d’agrandissement :
- Taille de la police
- Taille d’affichage
- Agrandissement (zoom)

Lire les instructions lors de l’activation des outils.

#### Mode opératoire :

- Positionner **Taille de la police** et **Taille d’affichage** au maximum. Parcourir l’application et noter les textes qui ne sont plus lisibles car ils ont disparu ou se chevauchent.
- Positionner **Agrandissement** sur **Utiliser le service**. Revenir à l’application, cliquer 3 fois sur l’écran. Vérifier que les écrans sont lisibles dans ce mode. Pour agrandir, placer 2 doigts sur l’écran puis écarter les, se déplacer avec deux doigts sur l’écran et un doigt dans certaines listes. Toutes les informations de l’écran doivent être lisibles en mode zoom.


### Orientation

Il est nécessaire de vérifier l’orientation de son application, celle-ci devant fonctionner aussi bien en mode Paysage, qu’en mode portrait. Il convient donc de réaliser les tests manuels dans les deux cas, puisque contraindre l’utilisateur à un seul mode, pose des problèmes d’accessibilité.


### <span lang="en">Accessibility timeouts</span>

Cet outil n’est disponible qu’à partir de Android Q.

Sur certaines applications, il arrive que l’UI change après un certain délai (par exemple la disparition des boutons de contrôles sur un lecteur vidéo après quelques secondes). Ce délai peut être adapté en fonction du besoin de chacun dans les paramètres, des utilisateurs ayant besoin de plus de temps pour réussir à « voir » les contrôles et à interagir avec eux (que ce soit par le biais d’une assistance ou non). On peut alors faire appel à cette fonction de <span lang="en">AccessibilityManager</span> qui permet d’obtenir le timeout recommandé pour l’utilisateur, en fonction de ces préférences en matière d’accessibilité : `public int getRecommendedTimeoutMillis (int originalTimeout, 
                int uiContentFlags)`

Ainsi, pour tester si ce besoin d’accessibilité est bien pris en compte par l’application, il faut procéder comme suit : 

- Aller dans les paramètres du téléphone
- Naviguer dans le menu jusqu’à accessibilité, puis sélectionner <span lang="en">Time to take action</span>
- Choisir un délai dans les options proposées
- Vérifier que l’application s’adapte bien au délai indiqué précédemment, pour les changements d’UI potentiellement concernés par ce délai.


### <span lang="en">Voice Access</span>

[<span lang="en">Voice Access</span>](https://play.google.com/store/apps/details?id=com.google.android.apps.accessibility.voiceaccess) est une application intégrée à [<span lang="en">Android Accessibility Suite</span>](https://play.google.com/store/apps/details?id=com.google.android.marvin.talkback), à destination des personnes présentant des troubles moteur. Elle permet de commander à la voix l’application à la place de l’écran tactile.

Parmi les commandes possibles générales : 
- Ouvrir « application »
- Retour
- Accueil
- Afficher les notifications
- Faire défiler vers le haut
- Faire défiler vers la droite
- Faire défiler jusqu’en bas
- Balayer vers l’avant
- Etc..

Dans le cadre du test de notre application, des numéros s’affichent à côté de tous les éléments de l’écran avec lesquels il est possible d’interagir. Si on souhaite ainsi interagir avec un bouton **Valider** qui a pour numéro 6, on peut énoncer les commandes suivantes :
- 6
- Valider
- Cliquer sur 6
- Cliquer sur Valider

Il convient donc de tester qu’il n’y a pas plusieurs labels identiques pour des éléments interactifs au sein d’un même écran. Même si l’utilisateur peut toujours passer par le numéro pour la commande vocale, cela limite la possibilité de passer par son nom. Il est aussi utile de tester qu’on peut bien ouvrir l’application par son nom, avec la commande **Ouvrir "application"**.


**Exemple d'utilisation de <span lang="en">Voice Access</span> :**   

Exemple d'écran proposant le <span lang="en">floating button</span> qui permet de démarrer <span lang="en">Voice Access</span>.

<img src="../../images/voice_access_floating.jpg" alt="capture d’écran présentant un écran de l'application Orange TV, avec le bouton de Voice Access flottant" width="25%"> 

Exemple d'écran avec <span lang="en">Voice Access</span> activé

<img src="../../images/voice_access_actif.jpg" alt="capture d’écran présentant un écran de l'application Orange TV, en ayant Voice Access actif, chaque élément interactif étant alors associé à un numéro" width="25%"> 



### Sélectionner pour prononcer

Sélectionner pour prononcer est un outil intégré à <span lang="en">Android Accessibility Suite</span> qui permet de lire les parties de l’écran qui sont sélectionnées.

Lorsqu’un seul élément est sélectionné, l'outil vocalise l’élément. Lorsque plusieurs éléments sont sélectionnés, il implémente un ordre logique de lecture comme <span lang="en">Talkback</span> mais il n’implémente pas les actions ni l’état des éléments.

Il est utile pour les malvoyants, lorsque l’écran n’est pas lisible, pour l’apprentissage de la lecture (fonctionne comme un karaoké) ou pour l’apprentissage d’une langue étrangère.

Il peut être utilisé dans un but de démonstration mais est redondant avec <span lang="en">Talkback</span> pour des tests d’accessibilité sans pouvoir le remplacer.



<span class="licence" lang="en">These images are licensed under a Creative Commons Share Alike 2.0 license. Photo credit: <a href="http://www.flickr.com/people/27512715@N02/" hreflang="en">openexhibits</a></span>
