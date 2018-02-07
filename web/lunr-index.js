
var index = lunr(function () {
    this.use(lunr.fr);
    this.field('body');
    this.ref('url');
});

var documentTitles = {};



documentTitles["index.html#recommandations-accessibilite-orange-pour-le-web"] = "Recommandations accessibilité Orange pour le web";
index.add({
    url: "index.html#recommandations-accessibilite-orange-pour-le-web",
    title: "Recommandations accessibilité Orange pour le web",    
    body: "# Recommandations accessibilité Orange pour le web  &lt;script&gt;$(document).ready(function () {     setBreadcrumb([{\&quot;label\&quot;:\&quot;Présentation\&quot;}]); });&lt;/script&gt;   *** L’accessibilité, un avantage pour tous, une nécessité pour certains&amp;nbsp;! ***  "
});

documentTitles["index.html#definition-de-laccessibilite-web"] = "Définition de l’accessibilité web";
index.add({
    url: "index.html#definition-de-laccessibilite-web",
    title: "Définition de l’accessibilité web",    
    body: "## Définition de l’accessibilité web ** C’est un service web utilisable par tous **  - Personnes valides - Seniors - Personnes en situation de handicap (temporaire ou permanent)  ** et dans tous les contextes **  - Avec tous types de matériel&amp;nbsp;: navigateurs, &lt;abbr&gt;PC&lt;/abbr&gt;, Mac, téléphones mobiles, tablettes - Dans un contexte dégradé&amp;nbsp;: mauvaise luminosité, &lt;i lang=\&quot;en\&quot;&gt;touchpad&lt;/i&gt; en mobilité, etc. - Avec des logiciels spécifiques de compensation du handicap    "
});

documentTitles["index.html#organisation-de-ce-site"] = "Organisation de ce site";
index.add({
    url: "index.html#organisation-de-ce-site",
    title: "Organisation de ce site",    
    body: "## Organisation de ce site  "
});

documentTitles["index.html#criteres-incontournables"] = "Critères incontournables";
index.add({
    url: "index.html#criteres-incontournables",
    title: "Critères incontournables",    
    body: "### Critères incontournables Liste des critères principaux selon votre profil, basés sur un sous-ensemble des recommandations &lt;abbr&gt;WCAG&lt;/abbr&gt; 2.0 niveau AA. Un bon moyen de prendre connaissance des principaux critères à respecter pour s’engager vers une démarche de mise en accessibilité progressive.    "
});

documentTitles["index.html#ensemble-des-exigences"] = "Ensemble des exigences";
index.add({
    url: "index.html#ensemble-des-exigences",
    title: "Ensemble des exigences",    
    body: "### Ensemble des exigences Section à destination des développeurs. Tout ce qu’il faut savoir pour coder accessible et pour effectuer les tests permettant de valider ses développements.  "
});

documentTitles["index.html#methodes-et-outils-de-test"] = "Méthodes et outils de test";
index.add({
    url: "index.html#methodes-et-outils-de-test",
    title: "Méthodes et outils de test",    
    body: "### Méthodes et outils de test Pour ceux qui veulent vérifier l’accessibilité de leurs pages avec des outils plus ou moins automatiques. Enfin, tout l’outillage méthodologique et technique pour évaluer ses pages.  "
});

documentTitles["index.html#outils-orange-open-source"] = "Outils Orange open source";
index.add({
    url: "index.html#outils-orange-open-source",
    title: "Outils Orange open source",    
    body: "### Outils Orange open source Présentation de la bibliothèque Boosted et du service Confort+.  "
});

documentTitles["index.html#exemples"] = "Exemples";
index.add({
    url: "index.html#exemples",
    title: "Exemples",    
    body: "### Exemples Des exemples didactiques pour certains types de composants ou d’éléments d’interface  particulièrement délicats à rendre accessibles et fréquemment utilisés. Tout y est expliqué, il n’y a plus qu’à se laisser guider&amp;nbsp;!  Ces exemples utilisent la librairie [Boosted](http://boosted.orange.com/). Cette librairie basée sur [Bootstrap](http://getbootstrap.com/) permet de réaliser rapidement un site web responsive et accessible aux couleurs de la charte Orange.  &lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2016  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt;"
});



documentTitles["captcha.html#les-captchas-et-laccessibilite"] = "Les CAPTCHAs et l'accessibilité";
index.add({
    url: "captcha.html#les-captchas-et-laccessibilite",
    title: "Les CAPTCHAs et l'accessibilité",    
    body: "# Les CAPTCHAs et l'accessibilité    &lt;script&gt;$(document).ready(function () {     setBreadcrumb([{\&quot;label\&quot;:\&quot;Confort+\&quot;}]); });&lt;/script&gt;    "
});

documentTitles["captcha.html#introduction"] = "Introduction";
index.add({
    url: "captcha.html#introduction",
    title: "Introduction",    
    body: "## Introduction  Un CAPTCHA (« Completely Automated Public Turing-test to tell Computers and Humans Apart », en français  « Test public de Turing complètement automatisé pour différencier les humains des ordinateurs ») est un test destiné à différencier un utilisateur d’un programme informatique. Il est utilisé notamment sur les formulaires pour se prémunir du SPAM.  Il existe différents types de CAPTCHA, les plus nombreux sont les CAPTCHAs visuels où on demande à l’utilisateur de saisir une série de lettres déformées affichées à l’écran.    ![Capture d'écran d'un captcha visuel](./images/captchas/captcha.png)   **Exemple de CAPTCHA visuel**  "
});

documentTitles["captcha.html#premier-constat-le-captcha-et-les-utilisateurs"] = "Premier constat : le Captcha et les utilisateurs";
index.add({
    url: "captcha.html#premier-constat-le-captcha-et-les-utilisateurs",
    title: "Premier constat : le Captcha et les utilisateurs",    
    body: "## Premier constat : le Captcha et les utilisateurs Les CAPTCHAs posent souvent des difficultés même pour les utilisateurs les plus aguerris. En effet il est souvent nécessaire d’effectuer plusieurs tentatives avant de répondre correctement à un CAPTCHA. Pour certains utilisateurs la présence d’un CAPTCHA est tout simplement rédhibitoire. Par exemple, un utilisateur non-voyant ne peut pas renseigner un CAPTCHA visuel. Même si certains sites proposent des alternatives, comme un CAPTCHA audio en plus d’un CAPTCHA visuel, dans les faits c’est rarement concluant. C'est d'ailleurs la première source de difficultés citée par les utilisateurs malvoyants d'après [le sondage réalisé par le site WebAIM fin 2017](https://webaim.org/projects/screenreadersurvey7) :   ![Graphique issu du sondage webAIM 2017 montrant que les captcha sont la première source de problème](./images/captchas/webaim.png)    **Les CAPTCHA pointés du doigt par les utilisateurs malvoyants (sondage WebAIM 2017)**  L’explosion des moyens de calcul permet aux bots et autres programmes informatiques d’être de plus en plus performants. Il est aujourd’hui simple de concevoir un programme permettant de deviner le texte inscrit dans une image ou vocalisé dans un fichier audio. Pour que le CAPTCHA reste efficace vis-à-vis des bots, il est donc nécessaire d’accentuer la déformation de l’image ou du son proposé par le CAPTCHA : cela accentue d’autant les difficultés pour l’utilisateur.  C’est pourquoi Google tente de trouver des alternatives pour différencier un utilisateur humain d’un robot. Ils proposent le « No Captcha », une simple case à cocher du point de vue de l’utilisateur. Celui-ci utilise des données annexes telles que la résolution de l’écran, le déplacement du pointeur de la souris ou le temps de saisie d'un formulaire…etc.  ![Capture d'écran du no captcha de google](./images/captchas/nocaptcha.png)   **No CAPTCHA de Google**  Bien que cette solution soit plus efficace, elle n’est pas aujourd’hui satisfaisante en termes d’accessibilité car en cas de doute, un CAPTCHA standard est affiché à l’écran. C’est souvent le cas pour un utilisateur qui ne peut pas utiliser une souris et qui navigue au clavier ou pour un utilisateur qui navigue à l’aide d’un lecteur d’écran (cas des personnes malvoyantes). Il faut donc toujours proposer un moyen de contact alternatif (email, téléphone….) dans le cas où le CAPTCHA ne pourrait pas être renseigné.  Entre les utilisateurs qui ne peuvent pas saisir le CAPTCHA, ceux qui n’y arrivent et ceux qui ne comprennent pas ce qu’il faut faire, la mise en place d’un CAPTCHA n’est pas anodine pour l’audience d’un site. Partant du principe que les CAPTCHAs posent des difficultés à de nombreux utilisateurs, la première recommandation est donc de ne pas utiliser de CAPTCHA.  "
});

documentTitles["captcha.html#deuxieme-constat-le-captcha-et-la-securite"] = "Deuxième constat : Le CAPTCHA et la sécurité";
index.add({
    url: "captcha.html#deuxieme-constat-le-captcha-et-la-securite",
    title: "Deuxième constat : Le CAPTCHA et la sécurité",    
    body: "## Deuxième constat : Le CAPTCHA et la sécurité  Dans [un article de Google publié en 2014](https://security.googleblog.com/2014/12/are-you-robot-introducing-no-captcha.html), on apprend qu’une intelligence artificielle obtient un score de 99,8% pour résoudre des CAPTCHAs visuels parmi les plus difficiles, soit un meilleur score que celui obtenu par un « vrai » utilisateur ! Des services sont en effet capables de déterminer la police de caractères utilisée dans une image ou bien de deviner si l’image contient un objet (un chat, une voiture, un chapeau, etc.).  Face à ce constat (fuite des utilisateurs et sécurité incertaine), on en revient à notre première recommandation qui est de ne pas utiliser de CAPTCHA.  "
});

documentTitles["captcha.html#les-solutions-preconisees"] = "Les solutions préconisées";
index.add({
    url: "captcha.html#les-solutions-preconisees",
    title: "Les solutions préconisées",    
    body: "## Les solutions préconisées  L’idée est donc dans un premier temps de déterminer les risques et de se poser les questions suivantes :  - Quels sont les risques en cas d’attaque ? - Quel est le besoin réel, entre éliminer les requêtes des bots et apporter une solution sécurisée ?  En fonction des réponses, il s’agit de mettre en place la solution la plus adaptée.  "
});

documentTitles["captcha.html#honeypot-et-time-mesuring-deux-techniques-simples-a-mettre-en-place-pour-identifier-les-bots"] = "HoneyPot et Time mesuring, deux techniques  simples à mettre en place pour identifier les bots";
index.add({
    url: "captcha.html#honeypot-et-time-mesuring-deux-techniques-simples-a-mettre-en-place-pour-identifier-les-bots",
    title: "HoneyPot et Time mesuring, deux techniques  simples à mettre en place pour identifier les bots",    
    body: "## HoneyPot et Time mesuring, deux techniques  simples à mettre en place pour identifier les bots  Si les risques sont limités, ces 2 techniques ont l’avantage d’être transparentes pour l’utilisateur. La première solution consiste à ajouter un champ masqué à l’écran dans le formulaire. Celui-ci ne sera donc jamais renseigné par un utilisateur. Coté serveur si on constate que ce champ a été renseigné, c’est qu’il s’agit d’un programme malveillant. La seconde technique consiste à mesurer le temps que l’utilisateur met pour saisir le formulaire. Si celui-ci s’avère très rapide, il s’agit très probablement d’un programme malveillant.  "
});

documentTitles["captcha.html#des-solutions-anti-spam-et-liste-noire-pour-eliminer-les-requetes-de-bots"] = "Des solutions anti-SPAM et liste noire pour éliminer les requêtes de bots";
index.add({
    url: "captcha.html#des-solutions-anti-spam-et-liste-noire-pour-eliminer-les-requetes-de-bots",
    title: "Des solutions anti-SPAM et liste noire pour éliminer les requêtes de bots",    
    body: "## Des solutions anti-SPAM et liste noire pour éliminer les requêtes de bots  Il est également possible coté serveur de trier les informations reçues à l’aide d’un logiciel anti-SPAM qui supprime automatiquement les soumissions des logiciels malveillants en analysant les données et l’adresse IP à l’origine de la requête.  "
});

documentTitles["captcha.html#un-test-logique-ou-mathematique-textuel-appele-aussi-captcha-textuel"] = "Un test logique ou mathématique textuel, appelé aussi Captcha textuel";
index.add({
    url: "captcha.html#un-test-logique-ou-mathematique-textuel-appele-aussi-captcha-textuel",
    title: "Un test logique ou mathématique textuel, appelé aussi Captcha textuel",    
    body: "## Un test logique ou mathématique textuel, appelé aussi Captcha textuel  Il s’agit de simples phrases demandant de recopier un mot, de résoudre une opération mathématique simple, etc.  « Recopier le mot : maison » « Combien font deux plus deux ? » « Quel animal fait miaou ? » « De quelle couleur est le ciel ? »  A condition que les questions restent très simples, ce type de CAPTCHA pose très peu de difficulté aux utilisateurs.  "
});

documentTitles["captcha.html#une-verification-par-email-sms-ou-telephone-pour-une-securite-renforcee"] = "Une vérification par email, SMS ou téléphone pour une sécurité renforcée";
index.add({
    url: "captcha.html#une-verification-par-email-sms-ou-telephone-pour-une-securite-renforcee",
    title: "Une vérification par email, SMS ou téléphone pour une sécurité renforcée",    
    body: "## Une vérification par email, SMS ou téléphone pour une sécurité renforcée  Cette solution consiste à envoyer un email, un SMS ou à téléphoner directement à l’utilisateur pour que celui-ci confirme la transaction en cliquant sur un lien ou en renseignant le code indiqué.  C'est à la fois à la fois plus contraignante pour l’utilisateur qui doit communiquer des informations personnelles et plus lourd à mettre en place mais c’est une solution très efficace quand un niveau de sécurité fort est nécessaire.  "
});

documentTitles["captcha.html#pour-recapituler"] = "Pour récapituler";
index.add({
    url: "captcha.html#pour-recapituler",
    title: "Pour récapituler",    
    body: "## Pour récapituler  Il n’existe pas de solutions parfaites ni pour l’utilisateur, ni en termes de sécurité. L’idée est d’opter pour la technique la plus juste en fonction du service proposé. Il est important par ailleurs en cas d’attaque d’avoir des logs pour analyser et contrer les attaques ultérieures.   &amp;nbsp;      &lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2016  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt;"
});



documentTitles["label-ledby-describedby.html#abbrhtml5abbr-abbrariaabbr"] = "&lt;abbr&gt;HTML5&lt;/abbr&gt; &amp; &lt;abbr&gt;ARIA&lt;/abbr&gt;";
index.add({
    url: "label-ledby-describedby.html#abbrhtml5abbr-abbrariaabbr",
    title: "&lt;abbr&gt;HTML5&lt;/abbr&gt; &amp; &lt;abbr&gt;ARIA&lt;/abbr&gt;",    
    body: "# &lt;abbr&gt;HTML5&lt;/abbr&gt; &amp; &lt;abbr&gt;ARIA&lt;/abbr&gt;  &lt;script&gt;$(document).ready(function () {     setBreadcrumb([{\&quot;label\&quot;:\&quot;&lt;abbr&gt;ARIA&lt;/abbr&gt; Label, labelledy et describedby\&quot;}]); });&lt;/script&gt;  "
});

documentTitles["label-ledby-describedby.html#introduction"] = "Introduction";
index.add({
    url: "label-ledby-describedby.html#introduction",
    title: "Introduction",    
    body: "## Introduction "
});

documentTitles["label-ledby-describedby.html#nom-et-description-accessible"] = "Nom et description accessible";
index.add({
    url: "label-ledby-describedby.html#nom-et-description-accessible",
    title: "Nom et description accessible",    
    body: "### Nom et description accessible  Un nom accessible est l'information qui permet à l'&lt;abbr&gt;AT&lt;/abbr&gt; d'identifier l'élément en question. Il peut être fourni par l'intitulé ou le contenu d'un élément, un attribut (par exemple, un attribut `alt` pour une image) ou par un élément associé (par exemple, une balise `label` pour un champ `input`).  Une description accessible est une information plus étendue qui est utilisée par l'&lt;abbr&gt;AT&lt;/abbr&gt; lui permettant de compléter le nom accessible en précisant et rajoutant du sens là ou le nom accessible n'est pas suffisant.  Le nom accessible comme la description accessible peuvent être visuellement perceptible ou pas (intitulé de lien&amp;nbsp;: visible, alternative d'image&amp;nbsp;: cachée et utilisable que par une &lt;abbr&gt;AT&lt;/abbr&gt;)  "
});

documentTitles["label-ledby-describedby.html#les-attributs-abbrariaabbrnbsp-aria-label-aria-labelledby-et-aria-describedby"] = "Les attributs &lt;abbr&gt;ARIA&lt;/abbr&gt;&amp;nbsp;: `aria-label`, `aria-labelledby` et `aria-describedby`";
index.add({
    url: "label-ledby-describedby.html#les-attributs-abbrariaabbrnbsp-aria-label-aria-labelledby-et-aria-describedby",
    title: "Les attributs &lt;abbr&gt;ARIA&lt;/abbr&gt;&amp;nbsp;: `aria-label`, `aria-labelledby` et `aria-describedby`",    
    body: "### Les attributs &lt;abbr&gt;ARIA&lt;/abbr&gt;&amp;nbsp;: `aria-label`, `aria-labelledby` et `aria-describedby`  Trois attributs &lt;abbr&gt;ARIA&lt;/abbr&gt; sont très bien supportés par les navigateurs et les &lt;abbr&gt;AT&lt;/abbr&gt;: `aria-label`, `aria-labelledby` et `aria-describedby`. Ils permettent de rajouter de l'information à un élément &lt;abbr&gt;HTML&lt;/abbr&gt;&amp;nbsp;: - `aria-label`, `aria-labelledby` permettent de donner un nom accessible à un élément - `aria-describedby` permet de rajouter, si besoin, une description accessible à un élément  Lorsque les deux attributs aria-labelledby et aria-label sont utilisés, les agents utilisateurs donnent la priorité à aria-labelledby lors du calcul de la propriété de nom accessible.  Cependant, ils ne fonctionnent bien qu'avec certains éléments : - les éléments interactifs&amp;nbsp;: `a` (avec un attribut `href`), `audio` et `video` (avec un attribut `controls`), `input` (sauf si `type=\&quot;hidden\&quot;`), `select`, `button` et `textarea` - les éléments `img` et `iframe` - les éléments possédant un rôle de landmark explicite, donc, avec un attribut `role` ou un landmark implicite (une balise de structure &lt;abbr&gt;HTML5&lt;/abbr&gt;&amp;nbsp;: `header`, `footer`, `main`, `nav`, `aside` et `section`)  - les éléments avec un des  &lt;a href=\&quot;https://www.w3.org/TR/wai-aria-1.1/#widget_roles\&quot; lang=\&quot;en\&quot; hreflang=\&quot;en\&quot;&gt;rôles de widget d'&lt;abbr&gt;ARIA&lt;/abbr&gt; (27 pour &lt;abbr&gt;ARIA&lt;/abbr&gt; 1.1)&lt;/a&gt;  "
});

documentTitles["label-ledby-describedby.html#faut-il-lutilisernbsp"] = "Faut-il l’utiliser&amp;nbsp;?";
index.add({
    url: "label-ledby-describedby.html#faut-il-lutilisernbsp",
    title: "Faut-il l’utiliser&amp;nbsp;?",    
    body: "## Faut-il l’utiliser&amp;nbsp;? 	  If you use aria-label, aria-labelledby, or aria-describedby with any other elements (like div, span, p, blockquote, or strong etc.), they generally won’t work across all browser/assistive technology combinations.    &lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2016  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt;"
});



documentTitles["fondamentaux.html#liste-des-criteres-incontournables"] = "Liste des critères incontournables";
index.add({
    url: "fondamentaux.html#liste-des-criteres-incontournables",
    title: "Liste des critères incontournables",    
    body: "# Liste des critères incontournables  &lt;script&gt;$(document).ready(function () {     setBreadcrumb([{\&quot;label\&quot;:\&quot;Liste des critères incontournables\&quot;}]);     addSubMenu([         {\&quot;label\&quot;:\&quot;Pour la conception\&quot;,\&quot;url\&quot;:\&quot;fondamentaux-nontech.html\&quot;},          {\&quot;label\&quot;:\&quot;Pour le développement\&quot;,\&quot;url\&quot;:\&quot;fondamentaux-tech.html\&quot;}     ]); });&lt;/script&gt;  &lt;span data-menuitem=\&quot;fondamentaux\&quot;&gt;&lt;/span&gt; Ce socle de critères destiné aux sites et applications web Orange permet d’éviter les principales erreurs d’accessibilité. Il s’agit d’un sous-ensemble des exigences d’accessibilité.    La mise en œuvre de ce socle ne permet pas d’obtenir à coup sûr un site accessible, mais pose les fondations qui permettent de s’engager dans une démarche de mise en accessibilité progressive.  Le respect de la charte Orange appelée la Brand (&lt;span lang=\&quot;en\&quot;&gt;Design for digital platforms Guideline&lt;/span&gt;), disponible sur [le site de la marque Orange](http://design.orange.com/) est un prérequis à l’utilisation de ce socle. Certains points déjà présents dans la charte Orange (utilisation des couleurs, alignement du texte…) n’ont pas été repris dans cette liste de critères.  Deux versions sont disponibles&amp;nbsp; - **La première version** n’aborde pas le code, elle s’adresse aux concepteurs de produits, designers, responsables de projet, etc. - **La seconde version** aborde le code et s’adresse aux développeurs, aux responsables techniques, aux équipes de validation, qualification, etc.  &lt;div class=\&quot;perso col-xs-12 col-md-6 col-lg-6 col-xl-5\&quot;&gt;     &lt;h2 class=\&quot;sr-only\&quot;&gt;Pour les concepteurs et designers&lt;/h2&gt;               &lt;a href=\&quot;./fondamentaux-nontech.html\&quot; class=\&quot;btn btn-info\&quot;&gt;         ![](./images/perso1.png)         &lt;div&gt;Les critères incontournables pour la conception&lt;/div&gt;     &lt;/a&gt; &lt;/div&gt; &lt;div class=\&quot;perso col-xs-12 col-md-6 col-lg-6 col-xl-5\&quot;&gt;     &lt;h2 class=\&quot;sr-only\&quot;&gt;Pour les développeurs&lt;/h2&gt;               &lt;a href=\&quot;./fondamentaux-tech.html\&quot; class=\&quot;btn btn-info\&quot;&gt;         ![](./images/perso3.png)         &lt;div&gt;Les critères incontournables pour le développement&lt;/div&gt;     &lt;/a&gt; &lt;/div&gt;  &lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2016  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt;"
});



documentTitles["fondamentaux-tech.html#criteres-incontournables-pour-le-developpement"] = "Critères incontournables pour le développement";
index.add({
    url: "fondamentaux-tech.html#criteres-incontournables-pour-le-developpement",
    title: "Critères incontournables pour le développement",    
    body: "# Critères incontournables pour le développement  &lt;script&gt;$(document).ready(function () {     setBreadcrumb([         {\&quot;label\&quot;:\&quot;Critères incontournables\&quot;, \&quot;url\&quot;: \&quot;./fondamentaux.html\&quot;},         {\&quot;label\&quot;:\&quot;Critères incontournables pour le développement\&quot;}     ]);     addSubMenu([         {\&quot;label\&quot;:\&quot;La conception\&quot;, \&quot;url\&quot;:\&quot;fondamentaux-nontech.html\&quot;},          {\&quot;label\&quot;:\&quot;Le développement\&quot;, \&quot;url\&quot;:\&quot;fondamentaux.html\&quot;, \&quot;expanded\&quot;:true}     ]); });&lt;/script&gt;  &lt;span data-menuitem=\&quot;fondamentaux\&quot;&gt;&lt;/span&gt;  "
});

documentTitles["fondamentaux-tech.html#1-donner-un-titre-aux-pages"] = "1. Donner un titre aux pages";
index.add({
    url: "fondamentaux-tech.html#1-donner-un-titre-aux-pages",
    title: "1. Donner un titre aux pages",    
    body: "## 1. Donner un titre aux pages    **Cible&amp;nbsp;:** tout le monde, et en particulier les personnes déficientes visuelles.   **Quand&amp;nbsp;:** dès la conception et pendant le développement.  **Description&amp;nbsp;:**   Donner à chaque page un titre qui lui est spécifique et qui reflète son contenu ou sa fonction (balise `&lt;title&gt;`).   Le titre de la page est le premier élément lu par la synthèse vocale, il doit permettre d’identifier formellement la page sur laquelle on se trouve.  **À vérifier&amp;nbsp;:** - Bien qu’il n’y ait pas de règle, en général, on va de l’information la plus spécifique vers la moins spécifique (ex.&amp;nbsp;: nom de la page courante - nom du site). Dans d’autres contextes d’utilisation pour lesquels l’utilisateur a de nombreuses applications ou sites ouverts en même temps, il vaut mieux aller de l’information la plus générale vers la plus spécifique (ex.&amp;nbsp ;: nom du site - nom de la page). - Lorsque le contenu de la page est modifié dynamiquement (affichage du résultat d’une recherche, erreurs dans un formulaire, action utilisateur ajoutant du contenu…), le titre de la page doit refléter cette modification du contenu.  **Objectif utilisateur&amp;nbsp;:**   Permettre aux utilisateurs d’identifier le sujet d’une page, de se repérer et se faire une idée précise du contenu de la page sans avoir à le lire. C’est, notamment, le premier élément vocalisé par un lecteur d’écran.  **Exemple valide&amp;nbsp;:**       `&lt;title&gt;Accueil - Espace client Orange&lt;/title&gt;`           **Exemple non-valide&amp;nbsp;:**       `&lt;title&gt;Accueil&lt;/title&gt;`  **Référence&amp;nbsp;:** WCAG 2.4.2  "
});

documentTitles["fondamentaux-tech.html#2-donner-des-titres-aux-rubriques"] = "2. Donner des titres aux rubriques";
index.add({
    url: "fondamentaux-tech.html#2-donner-des-titres-aux-rubriques",
    title: "2. Donner des titres aux rubriques",    
    body: "## 2. Donner des titres aux rubriques  **Cible&amp;nbsp;:** tout le monde, et en particulier les personnes déficientes cognitives, avec des difficultés pour lire et déficientes visuelles.   **Quand&amp;nbsp;:** dès la conception, à la rédaction du contenu et pendant le développement.  **Description&amp;nbsp;:**   Identifier les balises de titres à utiliser (balises &lt;abbr&gt;HTML&lt;/abbr&gt; `h1` jusqu’à `h6`) pour structurer le contenu des pages. Les personnes malvoyantes naviguant à l’aide d’un lecteur d’écran peuvent accéder à la liste des titres de la page pour naviguer rapidement.  Tout comme dans un fichier Word, il est possible d’utiliser la table des matières si des titres ont correctement été positionnés à l’intérieur du document.   **À vérifier&amp;nbsp;:**  - Les titres doivent être pertinents et non vides. - Il ne doit pas exister de saut dans la hiérarchie des titres (on ne passe pas directement d’un titre `h2` à un titre `h4`). - On peut mettre plusieurs `h1` par page (se limiter tout de même à deux dans la majorité des cas). - Les lecteurs d’écran ne prennent pas en compte les titres masqués (`visibility: hidden;`, `display: none;` ou `aria-hidden`). - Le contenu généré dynamiquement doit aussi respecter cette exigence.  **Objectif utilisateur&amp;nbsp;:** - Pour tous les utilisateurs&amp;nbsp;: améliorer la structure de la page et de son contenu.  - Pour les utilisateurs déficients visuels, déficients cognitifs ou ayant des difficultés de lecture&amp;nbsp;: faciliter la navigation et l’accès au contenu.  **Objectif technique&amp;nbsp;:** - Pour les moteurs de recherche&amp;nbsp;: améliorer le référencement.  **Exemple valide&amp;nbsp;:**        Un titrage de page cohérent et pertinent&amp;nbsp;:  ```html &lt;h1&gt;Accueil – Orange&lt;/h1&gt;     &lt;h2&gt;Les actualités&lt;/h2&gt;     &lt;h2&gt;La fibre arrive&amp;nbsp;!&lt;/h2&gt;         &lt;h3&gt;Êtes-vous éligible&amp;nbsp;?&lt;/h3&gt; ```   **Exemple non-valide&amp;nbsp;:**       Un titrage de page avec un saut de niveau h2 → h4&amp;nbsp;:  ```html &lt;h1&gt;Accueil – Orange&lt;/h1&gt;     &lt;h2&gt;Les actualités&lt;/h2&gt;     &lt;h2&gt;La fibre arrive&amp;nbsp;!&lt;/h2&gt;         &lt;h4&gt;Êtes-vous éligible&amp;nbsp;?&lt;/h4&gt; ```     **Outil :**   L’extension &lt;a href=\&quot;https://www.learningapps.co.uk/moodle/xertetoolkits/play.php?template_id=1309\&quot; hreflang=\&quot;en\&quot; lang=\&quot;en\&quot;&gt;HeadingsMaps&lt;/a&gt;, disponible pour [Chrome](https://chrome.google.com/webstore/detail/headingsmap/flbjommegcjonpdmenkdiocclhjacmbi?hl=fr) et [Firefox](https://addons.mozilla.org/fr/firefox/addon/headingsmap/), permet d’extraire les titres et de les visualiser sous forme de plan de document.  **Référence&amp;nbsp;:** WCAG 1.3.1  "
});

documentTitles["fondamentaux-tech.html#3-assurer-un-contraste-suffisant-entre-texte-et-fond"] = "3. Assurer un contraste suffisant entre texte et fond";
index.add({
    url: "fondamentaux-tech.html#3-assurer-un-contraste-suffisant-entre-texte-et-fond",
    title: "3. Assurer un contraste suffisant entre texte et fond",    
    body: "## 3. Assurer un contraste suffisant entre texte et fond  **Cible&amp;nbsp;:** tout le monde, en particulier les utilisateurs sur mobile et tablette, les personnes malvoyantes, éprouvant des difficultés de lecture ou avec un déficit d’attention et les seniors.    **Quand&amp;nbsp;:** dès la phase de conception et lors du développement.  **Description&amp;nbsp;:**   Le niveau de contraste entre le texte et l’arrière-plan doit être suffisamment élevé. Un niveau de contraste insuffisant sera préjudiciable pour les utilisateurs ayant des difficultés visuelles ainsi que pour les utilisateurs de mobiles et tablettes se trouvant dans un environnement très lumineux.  **Exemple non valide&amp;nbsp;:**   Le texte «&amp;nbsp;film | 20h40…&amp;nbsp;» ne présente pas un contraste suffisant. Celui-ci ne sera pas lisible par tous les utilisateurs.    ![capture d’écran présentant du texte dont le contraste n’est pas suffisant](images/contraste.png)  **À vérifier&amp;nbsp;:**  - Le contraste entre la couleur du fond et celle du texte doit être 4.5:1 minimum et ceci également pour du texte sous forme d’image porteur d’information. - Pour des applications principalement utilisées en web mobile ou en mobilité, le niveau de contraste des principaux éléments doit être de 7:1 afin d’assurer une bonne lisibilité pour tous. - Les liens doivent être facilement identifiables par rapport au reste du texte.  **Objectif utilisateur&amp;nbsp;:**  Faciliter la lecture à tous les utilisateurs, déficients visuels ou personnes dans un environnement lumineux défavorable (en mobilité).  **Outil&amp;nbsp;:**   L’application &lt;a href=\&quot;http://www.paciellogroup.com/resources/contrastanalyser/\&quot; hreflang=\&quot;en\&quot; lang=\&quot;en\&quot;&gt;Colour Contrast Analyser&lt;/a&gt; permet de mesurer rapidement des niveaux de contraste de couleurs (gratuit pour Mac et Windows).    **Référence&amp;nbsp;:** WCAG 1.4.3  "
});

documentTitles["fondamentaux-tech.html#4-ne-pas-utiliser-la-couleur-ou-linformation-sensorielle-comme-seule-source-dinformation"] = "4. Ne pas utiliser la couleur ou l’information sensorielle comme seule source d’information";
index.add({
    url: "fondamentaux-tech.html#4-ne-pas-utiliser-la-couleur-ou-linformation-sensorielle-comme-seule-source-dinformation",
    title: "4. Ne pas utiliser la couleur ou l’information sensorielle comme seule source d’information",    
    body: "## 4. Ne pas utiliser la couleur ou l’information sensorielle comme seule source d’information  **Cible&amp;nbsp;:** tout le monde, en particulier les daltoniens et plus généralement les personnes malvoyantes ou ayant une déficience cognitive, auditive et les seniors.   **Quand&amp;nbsp;:** dès la phase de conception et lors du développement.  **Description&amp;nbsp;:**   Ne pas utiliser la couleur ou une information sensorielle (forme, taille, son, orientation, localisation visuelle…) comme la seule façon de véhiculer de l’information, d’indiquer une action, de solliciter une réponse ou de distinguer un élément. L’information fournie par un changement de couleur ou une information sensorielle doit être complétée par une information textuelle (alternative) ou/et structuration sémantique.  **À vérifier&amp;nbsp;:** - Faire une capture d’écran et la passer en noir et blanc. La perte des couleurs ne doit pas entraîner de difficulté dans la navigation, ni provoquer de perte d’information. - Couper le son, le niveau d’information doit rester identique.  - S'assurer que les liens sont identifiables par un autre moyen que la couleur (en général, le soulignement).  **Objectif utilisateur&amp;nbsp;:**  Permettre aux utilisateurs ne distinguant pas les couleurs ou l’information sensorielle (les daltoniens, déficients visuels, déficients auditifs, utilisateurs de mobile en luminosité extérieure, en milieu bruyant…), d’accéder tout de même à l’information par d’autres moyens.  **Exemple&amp;nbsp;:**       Pour un graphique type camembert, où chaque partie est colorée différemment, ajouter par exemple une texture différente pour les identifier sans la couleur.   **Exemple valide&amp;nbsp;:**   ![Exemple d’image valide n’utilisant pas que la couleur pour transmettre l’information](./images/couleur-ok.png)  **Exemple non-valide&amp;nbsp;:**   ![Exemple non-valide utilisant uniquement des voyants de couleur pour transmettre l’information](./images/couleur-ko.png)  Cet exemple n’est pas valide, car l’information est transmise uniquement par la couleur.  **Référence&amp;nbsp;:** WCAG 1.4.1  "
});

documentTitles["fondamentaux-tech.html#5-respecter-la-semantique-html"] = "5. Respecter la sémantique HTML";
index.add({
    url: "fondamentaux-tech.html#5-respecter-la-semantique-html",
    title: "5. Respecter la sémantique HTML",    
    body: "## 5. Respecter la sémantique HTML  **Cible&amp;nbsp;:** tout le monde, et en particulier les personnes déficientes visuelles, avec des déficiences cognitives.   **Quand&amp;nbsp;:** dès la conception et à la rédaction du contenu.  **Description&amp;nbsp;:**  Utiliser correctement les éléments &lt;abbr&gt;HTML&lt;/abbr&gt; en respectant ce pourquoi ils sont faits (spécifications) et donc leur sémantique, afin qu’ils puissent être interprétés efficacement par les aides techniques.  **À vérifier&amp;nbsp;:**  Vérifier que la page, si besoin, utilise des listes sémantiquement pertinentes (pas de liste vides ou ne contenant qu’un seul élément)&amp;nbsp;:  - `&lt;ol&gt;` pour les listes ordonnées,  - `&lt;ul&gt;` pour les listes non ordonnées,  - `&lt;li&gt;` pour les éléments de liste.  - `&lt;dl&gt;`, `&lt;dt&gt;` et `&lt;dd&gt;` pour les listes de définitions  Les listes possèdent au moins deux éléments car sinon ce ne sont pas des listes (sauf si elles sont générées dynamiquement)  S’assurer de bien baliser les citations longues `&lt;blockquote&gt;` ou brèves `&lt;q&gt;`.  Les liens sont bien des liens (i.e. balise `&lt;a&gt;`)&amp;nbsp;: ils pointent effectivement vers une autre adresse, page ou onglet…  Les boutons sont bien des boutons (i.e. balise `&lt;button&gt;`, ou `&lt;input type=\&quot;button\&quot;&gt;`)&amp;nbsp;: ils déclenchent une action, une validation, ou encore permettent de faire un choix…  Penser, dans la mesure du possible, à respecter l’apparence classique de ces éléments pour ne pas perturber l’utilisateur habitué à leur aspect spécifique.  ** Objectif utilisateur&amp;nbsp;:** Permettre à tous les utilisateurs d’anticiper la manière d’utiliser et les comportements possibles pour un élément d’interface donné.  **Objectif technique&amp;nbsp;:**  Oblige à la structuration cohérente du contenu par le créateur du site.  **Exemple non-valide&amp;nbsp;:** ![Exemple non-valide de mauvaise utilisation d ’un lien](./images/nv-semantiq.jpg) Dans cet exemple, le lien «&amp;nbsp;Actualiser&amp;nbsp;» devrait être un bouton «&amp;nbsp;Actualiser&amp;nbsp;» car ici il déclenche une action et non le chargement d’une &lt;abbr&gt;URL&lt;/abbr&gt; (page).   **Référence&amp;nbsp;:** WCAG 1.3.1  "
});

documentTitles["fondamentaux-tech.html#6-separer-le-contenu-de-linteractivite-et-de-la-presentation"] = "6. Séparer le contenu de l’interactivité et de la présentation";
index.add({
    url: "fondamentaux-tech.html#6-separer-le-contenu-de-linteractivite-et-de-la-presentation",
    title: "6. Séparer le contenu de l’interactivité et de la présentation",    
    body: "## 6. Séparer le contenu de l’interactivité et de la présentation  **Cible&amp;nbsp;:** tout le monde, et en particulier les personnes déficientes visuelles, avec des difficultés pour lire ou avec un déficit d’attention.   **Quand&amp;nbsp;:** lors du développement.  **Description&amp;nbsp;:**  Séparer strictement le contenu (&lt;abbr&gt;HTML&lt;/abbr&gt;), l’interactivité (Javascript) et la présentation (&lt;abbr&gt;CSS&lt;/abbr&gt;).   **À vérifier&amp;nbsp;:**  - Ne pas faire de mise en pages en tableaux, ceux-ci étant réservés aux données tabulaires.  - Éviter d’utiliser des images pour afficher du texte, préférer les habillages &lt;abbr&gt;CSS&lt;/abbr&gt;. - Utiliser des classes &lt;abbr&gt;CSS&lt;/abbr&gt; plutôt que manipuler des styles &lt;abbr&gt;CSS&lt;/abbr&gt; en ligne dans le code &lt;abbr&gt;HTML&lt;/abbr&gt;. - Ne pas utiliser les pseudo éléments &lt;abbr&gt;CSS&lt;/abbr&gt; (::before, ::after…) pour afficher du contenu porteur d’information - Ne pas câbler des événements Javascript directement dans le code &lt;abbr&gt;HTML&lt;/abbr&gt; mais gérer l’interactivité dans un script ou un fichier &lt;abbr&gt;JS&lt;/abbr&gt; à part.  **Objectif utilisateur&amp;nbsp;:**  Permettre aux utilisateurs, via leur agent utilisateur ou aide technique (par exemple, leur navigateur), de modifier le rendu visuel de la page (grossissement, couleur, position…). Par exemple, de grossir le texte sans problème de mise en page.  **Objectif technique&amp;nbsp;:**  Améliore globalement la maintenabilité.  **Référence&amp;nbsp;:** WCAG 1.3.1, 1.4.5  "
});

documentTitles["fondamentaux-tech.html#7-valider-le-code-abbrhtmlabbr"] = "7. Valider le code &lt;abbr&gt;HTML&lt;/abbr&gt;";
index.add({
    url: "fondamentaux-tech.html#7-valider-le-code-abbrhtmlabbr",
    title: "7. Valider le code &lt;abbr&gt;HTML&lt;/abbr&gt;",    
    body: "## 7. Valider le code &lt;abbr&gt;HTML&lt;/abbr&gt;  **Cible&amp;nbsp;:** tout le monde.   **Quand&amp;nbsp;:** pendant et à la fin du développement.  **Description&amp;nbsp;:**    Valider la syntaxe du code &lt;abbr&gt;HTML&lt;/abbr&gt; (notamment l’absence de balise non fermée, d’`id` dupliqué…).  **À vérifier&amp;nbsp;:**  Dans le code &lt;abbr&gt;HTML&lt;/abbr&gt; s’assurer que&amp;nbsp;: - les éléments ont des balises de début et de fin, - les éléments sont imbriqués conformément à leurs spécifications, - les éléments ne contiennent pas d’attributs dupliqués, - chaque `id` est unique.  **Objectif utilisateur&amp;nbsp;:**   Des erreurs de validation peuvent empêcher l’accès à certains contenus.   **Objectif technique&amp;nbsp;:**   - Assurer l’interopérabilité, la maintenabilité du code &lt;abbr&gt;HTML&lt;/abbr&gt;. - Accroître la compatibilité avec les aides techniques.  **Référence&amp;nbsp;:** WCAG 4.1.1    **Outil&amp;nbsp;:** [validateur &lt;abbr&gt;HTML&lt;/abbr&gt; et &lt;abbr&gt;CSS&lt;/abbr&gt; du &lt;abbr&gt;W3c&lt;/abbr&gt;](https://validator.w3.org/)  "
});

documentTitles["fondamentaux-tech.html#8-indiquer-la-langue-principale-et-les-changements-de-langue"] = "8. Indiquer la langue principale et les changements de langue";
index.add({
    url: "fondamentaux-tech.html#8-indiquer-la-langue-principale-et-les-changements-de-langue",
    title: "8. Indiquer la langue principale et les changements de langue",    
    body: "## 8. Indiquer la langue principale et les changements de langue  **Cible&amp;nbsp;:** pour tous, et en particulier les personnes déficientes visuelles.   **Quand&amp;nbsp;:** lors du le développement.  **Description&amp;nbsp;:**    Spécifier la langue principale du document grâce à l’attribut `lang` dans la balise `html`.  Préciser également la langue d’un contenu exprimé dans une langue autre que la langue principale, en utilisant l’attribut `lang` dans l’élément &lt;abbr&gt;HTML&lt;/abbr&gt; contenant l’expression en langue étrangère.    **À vérifier&amp;nbsp;:**  Pour les mots ou les expressions en langue étrangère passés dans l’usage courant (Google, newsletter…) ou les noms propres, ne pas indiquer de changement de langue.  **Objectif utilisateur&amp;nbsp;:**  Cet attribut permet d’indiquer à la synthèse vocale la langue à utiliser.  **Objectif technique&amp;nbsp;:**   Permettre aux moteurs de recherche d’identifier la langue d’une page pour améliorer le référencement naturel.    **Exemple pour une page en français&amp;nbsp;:**    - pour du &lt;abbr&gt;HTML&lt;/abbr&gt;&amp;nbsp;: `&lt;html lang=\&quot;fr\&quot;&gt;` - pour du &lt;abbr&gt;XHTML&lt;/abbr&gt;&amp;nbsp;: `&lt;html xmlns=\&quot;http://www.w3.org/1999/xhtml\&quot; xml:lang=\&quot;fr\&quot; lang=\&quot;fr\&quot;&gt;`  **Exemple de changement de langue&amp;nbsp;:**   `découvrir Orange &lt;span lang=\&quot;en\&quot;&gt;live&lt;/span&gt; TV`  **Référence&amp;nbsp;:**WCAG 3.1.1, 3.1.2  "
});

documentTitles["fondamentaux-tech.html#9-associer-une-etiquette-pertinente-a-chaque-champ-de-formulaire"] = "9. Associer une étiquette pertinente à chaque champ de formulaire";
index.add({
    url: "fondamentaux-tech.html#9-associer-une-etiquette-pertinente-a-chaque-champ-de-formulaire",
    title: "9. Associer une étiquette pertinente à chaque champ de formulaire",    
    body: "## 9. Associer une étiquette pertinente à chaque champ de formulaire  **Cible&amp;nbsp;:** tout le monde, et en particulier les personnes déficientes visuelles et cognitives, avec un déficit d’attention et les utilisateurs de tactiles (mobile et tablette).   **Quand&amp;nbsp;:** lors de la conception et lors du développement.  **Description&amp;nbsp;:**    Chaque champ de formulaire doit être accompagné d’un libellé permettant d’identifier le rôle du champ, le type de donnée et le format attendu.   Le libellé doit être proche visuellement du champ afin qu’on fasse facilement le lien entre eux (notamment pour les utilisateurs de zoom ou de loupe logicielle, voire sur mobile).  Chaque libellé doit être inclus dans une balise `label`, elle-même associée au champ de formulaire grâce à un attribut `for` renseigné, reprenant la valeur de l’`id` du champ.  Dans certains cas, il semble inutile d’accompagner le champ de formulaire d’un libellé (champ de recherche accompagné d’un bouton en forme de loupe par exemple). Dans ce cas, prévoir tout de même un libellé, l’associer au champ de formulaire et le rendre invisible à l’écran (utiliser une classe de &lt;a href=\&quot;./exemples/masquage/index.html\&quot;&gt;masquage accessible&lt;/a&gt;), ainsi celui-ci sera quand même vocalisé par les lecteurs d’écran. L’attribut `title` positionné sur une balise de champ de formulaire peut faire également office de libellé tout comme les attributs `aria-label` et `aria-labelledby` dans cet ordre de préférence.  **À vérifier&amp;nbsp;:**  S’assurer que le libellé du champ (étiquette) est suffisamment proche du champ associé.  Aligner tous les libellés à gauche lorsque le nombre de caractères séparant le libellé le plus long de celui le plus court ne dépasse pas 6 caractères&amp;nbsp;; au-delà, aligner tous les libellés à droite.  Pour les boutons radio et les cases à cocher, l’utilisation de la balise `label` est, parfois, à compléter par un autre dispositif (`title`, `aria-labelledby`, `aria-label` ou `fieldset` et `legend`). Pour les champs obligatoires, ceci doit être précisé dans le `label` via une image, un symbole texte (`*` par exemple) ou du texte et/ou une propriété `aria-required`.  **Objectif utilisateur&amp;nbsp;:**  Ne pas respecter cette exigence est un point bloquant pour tout utilisateur de synthèse vocale mais aussi de loupe logicielle car il ne sait pas quelles valeurs entrer dans les champs. Pour les utilisateurs de mobiles et les déficients moteurs, cela permet d’activer ou de cliquer plus facilement sur les éléments de formulaire.  **Exemple valide&amp;nbsp;:**   ![capture d’écran d’un formulaire valide](images/formulaire.png) ![capture d’écran d’un formulaire label proche du champ](images/v_label.jpg)  **Exemple non-valide&amp;nbsp;:**   ![capture d’écran d’un formulaire auquel il manque un label](images/formulaire2.png) ![capture d’écran d’un formulaire label loin du champ](images/nv_label.jpg)  **Exemple de formulaire accessible&amp;nbsp;:**    Consulter [l’exemple de formulaire accessible](./exemples/formulaire/index.html) pour plus d’informations.  **Référence&amp;nbsp;:**WCAG 3.3.2  "
});

documentTitles["fondamentaux-tech.html#10-detecter-identifier-les-erreurs-et-suggerer-des-corrections"] = "10. Détecter, identifier les erreurs et suggérer des corrections";
index.add({
    url: "fondamentaux-tech.html#10-detecter-identifier-les-erreurs-et-suggerer-des-corrections",
    title: "10. Détecter, identifier les erreurs et suggérer des corrections",    
    body: "## 10. Détecter, identifier les erreurs et suggérer des corrections  **Cible&amp;nbsp;:** tout le monde, et en particulier les personnes déficientes visuelles, cognitives, avec des difficultés pour lire ou ayant un déficit d’attention et les seniors.   **Quand&amp;nbsp;:** lors de la conception et lors du développement.  **Description&amp;nbsp;:**   Les erreurs sont automatiquement détectées, l’utilisateur est averti par la modification du titre de la page, l’élément de formulaire en erreur est identifié et l’erreur est décrite à l’utilisateur sous forme de texte. Si besoin, une correction est suggérée.  Enfin les libellés des messages d’erreur doivent être explicites.  **À vérifier&amp;nbsp;:**  L’identification du champ en erreur ainsi qu’une éventuelle suggestion de correction peuvent être ajoutées dynamiquement à la balise `label`, en priorité, mais aussi à l’attribut `title` ou les attributs `aria-label` et `aria-labelledby` selon le contexte et les besoins.  **Objectif utilisateur&amp;nbsp;:**  Guider l’utilisateur en cas d’erreurs permet d’améliorer la compréhension et la correction des erreurs, pour tous les utilisateurs, en particulier pour les novices sur internet, les seniors et les personnes déficientes cognitives.  **Exemple valide&amp;nbsp;:**   ![capture d’écran d’un formulaire affichant des messages d’erreur à la saisie valides](images/formulaire-ok.png)    **Exemple non-valide&amp;nbsp;:**   ![capture d’écran d’un formulaire affichant des messages d’erreur à la saisie non-valides](images/formulaire-ko.png)  &amp;nbsp;   **Exemple de formulaire accessible&amp;nbsp;:**    Consulter [l’exemple de formulaire accessible](./exemples/formulaire/index.html) pour plus d’informations.  **Référence&amp;nbsp;:**WCAG 3.3.1, 3.3.3  "
});

documentTitles["fondamentaux-tech.html#11-fournir-un-equivalent-textuel-pour-les-images-et-les-cadres"] = "11. Fournir un équivalent textuel pour les images et les cadres";
index.add({
    url: "fondamentaux-tech.html#11-fournir-un-equivalent-textuel-pour-les-images-et-les-cadres",
    title: "11. Fournir un équivalent textuel pour les images et les cadres",    
    body: "## 11. Fournir un équivalent textuel pour les images et les cadres  **Cible&amp;nbsp;:** tout le monde, et en particulier les personnes déficientes visuelles ou cognitives.   **Quand&amp;nbsp;:** lors de la conception et lors du développement.  **Description&amp;nbsp;:**   Mettre, dans toute balise `img`, un attribut `alt` pertinent&amp;nbsp;:  - Pour les images cliquables&amp;nbsp;: préciser la fonction&amp;nbsp;/ la cible du lien dans l’attribut `alt`. - Pour les images porteuses d’information&amp;nbsp;: mettre un `alt` décrivant l’information contenue dans l’image. - Pour les images contenant du texte&amp;nbsp;: mettre un attribut `alt` reprenant au moins le texte de l’image. - Pour les images décoratives&amp;nbsp;: mettre un attribut `alt` vide. - Pour les images dont le contenu du `alt` serait trop long (schémas, graphes…), mettre à proximité de l’image à décrire, sa description sous forme de texte dans la page ou, un lien pointant vers une page &lt;abbr&gt;HTML&lt;/abbr&gt; contenant cette description.  Mettre un attribut `title` décrivant le contenu et/ou la fonction de toute `frame` ou `iframe`. Si la `frame` ou `iframe` ne porte pas d’information pour l’utilisateur (purement technique), la rendre invisible cf. exemple: [Masquer les iframe techniques de manière accessible](./exemples/iframes-techniques/index.html)  **À vérifier&amp;nbsp;:**  - Toute balise `img` doit posséder un attribut `alt`. - Pour les images non-porteuses d’information, il est préférable de les passer en image de fond &lt;abbr&gt;CSS&lt;/abbr&gt;. - Pour les graphes, la solution peut être de mettre un lien sous l’image permettant d’accéder à un tableau de chiffres (le faire apparaître dans la même page ou sur une autre page).  **Objectif utilisateur&amp;nbsp;:** Permettre l’accès à l’information incluse dans une image pour des utilisateurs qui n’y ont pas accès. Point bloquant&amp;nbsp;: une image sans description textuelle est inexploitable par des personnes ayant des déficiences visuelles ou celles n’affichant pas les images (mobile, faible bande passante…).  **Objectif technique&amp;nbsp;:**  Améliorer le référencement naturel.  **Exemple valide&amp;nbsp;:**       `&lt;a href=\&quot;./home\&quot;&gt;&lt;img src=\&quot;logo_orange.jpg\&quot; alt=\&quot;Retour à l’accueil\&quot;&gt;&lt;/a&gt;`         `&lt;img src=\&quot;banner_bouquet_famille.png\&quot; alt=\&quot;Bon plan, bouquet famille max à 2 euros par mois pendant 12 mois au lieu de 16 euros.\&quot;&gt;`  **Exemple d’alternative vide&amp;nbsp;:**   Dans l’exemple ci-dessous, le picto à droite n’a pas besoin d’être vocalisé puisque le texte situé à gauche apporte déjà l’information.   Renseigner l’attribut `alt` dans ce cas apporterait une information redondante.    ![exemple d’image décorative](./images/service-24.png)      `&lt;h3&gt;Le service 24h garanti&lt;/h3&gt;`   `&lt;img src=\&quot;service-24.png\&quot; alt=\&quot;\&quot;&gt;`  **Référence&amp;nbsp;:**WCAG 1.1.1  "
});

documentTitles["fondamentaux-tech.html#12-fournir-un-transcrit-pour-toute-piste-audio-ou-video"] = "12. Fournir un transcrit pour toute piste audio ou vidéo";
index.add({
    url: "fondamentaux-tech.html#12-fournir-un-transcrit-pour-toute-piste-audio-ou-video",
    title: "12. Fournir un transcrit pour toute piste audio ou vidéo",    
    body: "## 12. Fournir un transcrit pour toute piste audio ou vidéo  **Cible&amp;nbsp;:** tout le monde, et en particulier les personnes déficientes visuelles, cognitives et auditives et celles qui maîtrisent mal le français.   **Quand&amp;nbsp;:** lors de la conception et lors du développement.  **Description&amp;nbsp;:**   Fournir, pour toute piste audio ou vidéo porteuse d’information, un transcrit complet dans la page elle-même ou grâce à un lien à proximité de la piste audio ou vidéo.  **À vérifier&amp;nbsp;:**  Un transcrit complet est le texte contenant l’ensemble des informations visuelles et auditives porteuses de sens.   **Objectif utilisateur&amp;nbsp;:**  Fournir un moyen d’accès à l’information visuelle et auditive pour des personnes ne pouvant pas en bénéficier&amp;nbsp;: malvoyants, aveugles, sourds, déficients cognitifs, ordinateur sans haut-parleurs, environnement lumineux ou bruyant.  **Objectif technique&amp;nbsp;:**  Permet le référencement de tout contenu audio et vidéo.  **Référence&amp;nbsp;:**WCAG 1.2.3  "
});

documentTitles["fondamentaux-tech.html#13-structurer-les-tableaux-de-donnees"] = "13. Structurer les tableaux de données";
index.add({
    url: "fondamentaux-tech.html#13-structurer-les-tableaux-de-donnees",
    title: "13. Structurer les tableaux de données",    
    body: "## 13. Structurer les tableaux de données  **Cible&amp;nbsp;:** tout le monde, et en particulier les personnes déficientes visuelles.   **Quand&amp;nbsp;:** dès la phase de conception et lors du développement.  **Description&amp;nbsp;:**  Pour des données tabulaires&amp;nbsp;: - Utiliser l’élément `table` avec les éléments enfants `th` (pour les cellules d’entêtes), `td`, `tr`. - Utiliser l’attribut `scope` avec la valeur `row`/`col` pour associer les cellules d’en-têtes et les cellules de données ; pour des tableaux complexes, utiliser les attributs `id` et `headers`. - Utiliser la balise `caption`, une balise `h1` à `h6` juste avant le tableau ou lier un texte proche du tableau via un attribut `aria-labelledby` dans l’élément `table` pour associer un titre au tableau. - Mettre un attribut `summary` dans l’élément `table` pour expliciter la structure dans le cas d’un tableau complexe. Attention cet attribut est déprécié en &lt;abbr&gt;HTML5&lt;/abbr&gt;, il faudra donc rajouter, si besoin, le contenu du `summary` dans le titre du tableau.  **À vérifier&amp;nbsp;:**  - Rappel&amp;nbsp;: ne pas utiliser de tableaux à des fins de mise en page.  - La légende (`caption`) peut être remplacée par un titre de section (`hx`) placé avant le tableau. L’attribut `summary`, quant à lui, n’est nécessaire que pour des tableaux complexes. - Préférer scinder un tableau complexe en plusieurs tableaux plus simples. - Mettre un résumé (attribut `summary`) dans le tableau pour expliciter la structure dans le cas d’un tableau complexe. - Les balises `tbody`, `tfoot` et `thead` n’ont aucune influence sur l’accessibilité, il n’y a donc pas d’obligation à les utiliser.  **Objectif utilisateur&amp;nbsp;:** Donner un résumé et un titre aux tableaux de données permet à tous d’en connaître l’objet rapidement sans avoir à le parcourir. Pour des utilisateurs déficients visuels, lier les cellules aux en-têtes permet de se situer dans le tableau et de comprendre les données de celui-ci.  **Référence&amp;nbsp;:** WCAG 1.3.1  "
});

documentTitles["fondamentaux-tech.html#14-utiliser-des-tailles-relatives-pour-permettre-le-grossissement-des-textes"] = "14. Utiliser des tailles relatives pour permettre le grossissement des textes";
index.add({
    url: "fondamentaux-tech.html#14-utiliser-des-tailles-relatives-pour-permettre-le-grossissement-des-textes",
    title: "14. Utiliser des tailles relatives pour permettre le grossissement des textes",    
    body: "## 14. Utiliser des tailles relatives pour permettre le grossissement des textes  **Cible&amp;nbsp;:** tout le monde, et en particulier les personnes déficientes visuelles, en mobilité et seniors.   **Quand&amp;nbsp;:** lors du développement.  **Description&amp;nbsp;:**  N’utiliser pour les tailles de police que des tailles relatives (`em`, `rem`, `%`) et pour les éléments conteneurs permettant l’agrandissement du texte seul de 200%.  **À vérifier&amp;nbsp;:** - Ne pas utiliser le pixel (`px`) pour des tailles qui doivent pouvoir s’agrandir si l’on ne zoome que les textes. - Les éléments de formulaire doivent, eux aussi, posséder des tailles relatives pour s’agrandir. - Penser à rendre fluides les conteneurs des textes afin qu’ils puissent s’agrandir lorsque les textes sont zoomés. - Dans Firefox, faire Affichage&gt;Zoom&gt;Zoom texte seulement, utiliser les réglages du zoom pour atteindre 200%. Vérifier qu’il n’y a pas de perte d’information (disparition ou chevauchement de texte).      ![capture d’écran réglage du zoom dans Firefox](./images/zoom-200.png)  **Objectif utilisateur&amp;nbsp;:** Permettre aux utilisateurs (malvoyants, en mobilité, seniors…) d’augmenter la taille du texte pour plus aisément accéder à l’information.  **Exemple&amp;nbsp;:**   Voir l’exemple [gestion du zoom, agrandissement de la taille du texte](./exemples/zoom/index.html) pour plus d’informations.  **Référence&amp;nbsp;:** WCAG 1.4.4  "
});

documentTitles["fondamentaux-tech.html#15-rendre-les-intitules-des-liens-et-des-boutons-comprehensibles-hors-contexte"] = "15. Rendre les intitulés des liens et des boutons compréhensibles hors contexte";
index.add({
    url: "fondamentaux-tech.html#15-rendre-les-intitules-des-liens-et-des-boutons-comprehensibles-hors-contexte",
    title: "15. Rendre les intitulés des liens et des boutons compréhensibles hors contexte",    
    body: "## 15. Rendre les intitulés des liens et des boutons compréhensibles hors contexte  **Cible&amp;nbsp;:** tout le monde, et en particulier les personnes déficientes visuelles, cognitives ou ayant un déficit d’attention.   **Quand&amp;nbsp;:** dès la phase de conception et lors du développement.  **Description&amp;nbsp;:**  Rendre les intitulés des liens et des boutons compréhensibles hors contexte, en particulier pour les déficients visuels. Lors de la navigation avec un lecteur d’écran, il est possible d’accéder à la liste des liens de la page pour naviguer rapidement. Si votre page contient plusieurs liens «&amp;nbsp;en savoir plus&amp;nbsp;», il sera impossible de les différencier les uns des autres.    S’il n’est pas possible de rendre un lien ou un bouton plus explicite, faute de place, mais que l’intitulé actuel est suffisant dans son contexte, cet intitulé peut être complété par un contenu supplétif caché ou en utilisant un attribut `aria-label` ou `aria-labelledby`, spécifiquement pour les utilisateurs qui naviguent à l’aide d’un lecteur d’écran. Par exemple dans l’image ci-dessous, les deux éléments «&amp;nbsp;valider&amp;nbsp;» ne sont pas suffisamment explicites pour une personne utilisant un lecteur d’écran et ne bénéficiant pas obligatoirement du contexte. En revanche, quand on voit l’écran, le contexte fait qu’il n’y a pas d’ambiguïté sur leur rôle.  ![capture d’écran présentant deux liens «&amp;nbsp;valider&amp;nbsp;» dont le libellé doit être explicité](./images/liens-valider.png)  Dans ce cas, ajouter un `span` en &lt;a href=\&quot;./exemples/masquage/index.html\&quot;&gt;masquage accessible&lt;/a&gt; pour compléter l’intitulé. Il ne sera pas affiché à l’écran mais sera vocalisé par les outils d’assistance.  **Exemple&amp;nbsp;:**   ```html &lt;a href=\&quot;…\&quot;&gt;valider&lt;span class=\&quot;masquage-accessible\&quot;&gt; le paiement en plusieurs fois&lt;/span&gt;&lt;/a&gt; &lt;a href=\&quot;…\&quot;&gt;valider&lt;span class=\&quot;masquage-accessible\&quot;&gt; le paiement en une seule fois&lt;/span&gt;&lt;/a&gt; ```  Une autre solution consiste à utiliser un attribut `aria-label` ou `aria-labelledby` pour préciser l’intitulé.   En complément de ces solutions, on pourrait ici également utiliser **un attribut `title`** pour faire apparaître une info-bulle «&amp;nbsp;valider le paiement en plusieurs fois&amp;nbsp;» au survol avec la souris.   **À vérifier&amp;nbsp;:** S’assurer que la sémantique &lt;abbr&gt;HTML&lt;/abbr&gt; soit respectée&amp;nbsp;: - un lien doit permettre de changer d’&lt;abbr&gt;URL&lt;/abbr&gt;, de page, de télécharger un fichier, de faire apparaître/disparaître du contenu, d’aller à un ancre. - un bouton doit permettre de soumettre/réinitialiser un formulaire, d’ouvrir une fenêtre modale, de faire apparaître un sous-menu, de piloter un media, de déclencher une action via &lt;abbr&gt;JS&lt;/abbr&gt;.  S’assurer que les liens et les boutons isolés du contenu donnent une bonne information sur l’action déclenchée ou sa destination.  Une page ne doit pas avoir plusieurs liens ou boutons dont l’intitulé est le même, mais pointant sur des destinations/actions différentes.  **Objectif utilisateur&amp;nbsp;:** Permettre à un utilisateur n’ayant pas accès au contexte visuel de connaître la destination du lien ou l’action du bouton.  Notamment important pour les utilisateurs naviguant grâce à une liste de liens extraite de la page (lecteurs d’écran) ou les utilisateurs de loupe logicielle qui ne voient qu’une fraction de la page.   **Objectif technique&amp;nbsp;:** Expliciter les liens et les boutons permet d’améliorer le référencement naturel.  **Exemple valide&amp;nbsp;:**       Associer à un lien «&amp;nbsp;cliquer ici&amp;nbsp;», un texte caché hors écran&amp;nbsp;: «&amp;nbsp;commander votre téléphone&amp;nbsp;».   **Exemple non-valide&amp;nbsp;:**       Liens «&amp;nbsp;Cliquez ici&amp;nbsp;» ou «&amp;nbsp;Lire la suite…&amp;nbsp;» sans plus de précision.  **Référence&amp;nbsp;:** WCAG 2.4.9  "
});

documentTitles["fondamentaux-tech.html#16-prevenir-lutilisateur-de-louverture-dune-nouvelle-fenetre"] = "16. Prévenir l’utilisateur de l’ouverture d’une nouvelle fenêtre";
index.add({
    url: "fondamentaux-tech.html#16-prevenir-lutilisateur-de-louverture-dune-nouvelle-fenetre",
    title: "16. Prévenir l’utilisateur de l’ouverture d’une nouvelle fenêtre",    
    body: "## 16. Prévenir l’utilisateur de l’ouverture d’une nouvelle fenêtre  **Cible&amp;nbsp;:** tout le monde, et en particulier les personnes déficientes visuelles, cognitives ou ayant un déficit d’attention.   **Quand&amp;nbsp;:** dès la phase de conception et lors du développement.  **Description&amp;nbsp;:**  Prévenir l’utilisateur de l’ouverture de toute nouvelle fenêtre en l’indiquant dans l’intitulé du lien.  En cas d’impossibilité avérée, utiliser un icône (image avec un `alt`) en ajoutant l’indication d’ouverture d’une nouvelle fenêtre ou juste «&amp;nbsp;nouvelle fenêtre&amp;nbsp;».   En dernier recours, un texte  en &lt;a href=\&quot;./exemples/masquage/index.html\&quot;&gt;masquage accessible&lt;/a&gt; (hors écran).  **Exemple&amp;nbsp;:**      Exemple d’icône pouvant indiquer l’ouverture d’une nouvelle fenêtre.   ![capture d’écran d’un lien accompagné d’une icône indiquant l’ouverture d’une nouvelle fenêtre](./images/nouvelle-fenetre.png)    **À vérifier&amp;nbsp;:** Pour tout lien ouvrant une nouvelle fenêtre ou un nouvel onglet, une mention du type «&amp;nbsp;(nouvelle fenêtre)&amp;nbsp;» est présente dans l’intitulé du lien, ou la mention «&amp;nbsp;(nouvelle fenêtre)&amp;nbsp;» est positionnée hors écran via &lt;abbr&gt;CSS&lt;/abbr&gt; (&lt;a href=\&quot;./exemples/masquage/index.html\&quot;&gt;masquage accessible&lt;/a&gt;).  **Objectif utilisateur&amp;nbsp;:** Éviter l’ouverture inattendue de fenêtre, car cela peut gêner, perturber ou désorienter l’utilisateur. En particulier, pour des personnes en mobilité, utilisant des synthèses vocales ou présentant des déficiences cognitives.  **Exemple valide&amp;nbsp;:**       Pour un lien pointant à l’extérieur du site et ouvrant une nouvelle fenêtre, l’intitulé du lien texte «&amp;nbsp;Accéder au site orange.com (nouvelle fenêtre)&amp;nbsp;». Pour une image-lien, un attribut `alt=\&quot;consulter les conditions générales d’utilisation (nouvelle fenêtre)\&quot;`.       **Référence&amp;nbsp;:** WCAG 3.2.2  "
});

documentTitles["fondamentaux-tech.html#17-permettre-dutiliser-les-principales-fonctionnalites-de-lapplication-au-clavier"] = "17. Permettre d’utiliser les principales fonctionnalités de l’application au clavier";
index.add({
    url: "fondamentaux-tech.html#17-permettre-dutiliser-les-principales-fonctionnalites-de-lapplication-au-clavier",
    title: "17. Permettre d’utiliser les principales fonctionnalités de l’application au clavier",    
    body: "## 17. Permettre d’utiliser les principales fonctionnalités de l’application au clavier  **Cible&amp;nbsp;:** tout le monde, et en particulier les personnes déficientes visuelles, motrices et en mobilité.   **Quand&amp;nbsp;:** dès la phase de conception et lors du développement.  **Description&amp;nbsp;:** Mettre en place des gestionnaires d’événements qui ne s’appuient pas uniquement sur des événements souris.   **À vérifier&amp;nbsp;:** Toutes les actions importantes effectuées à la souris peuvent aussi l’être avec le clavier, quitte à proposer une alternative spécifique pour les interactions complexes (&lt;i lang=\&quot;en\&quot;&gt;drag’n’drop&lt;/i&gt;, gestes à plusieurs doigts sur mobile …).  Voir [la façon de naviguer au clavier](./methodes-outils-clavier.html) dans un navigateur web.  **Objectif utilisateur&amp;nbsp;:**  Permettre aux utilisateurs qui ne peuvent pas utiliser la souris (non ou malvoyants, déficients moteurs, web mobile, en mobilité…) d’accéder aux fonctionnalités principales de l’application au clavier.  **Exemple valide&amp;nbsp;:**       - Un sous-menu qui se déroule au survol doit aussi se dérouler quand l’item de menu parent reçoit le focus clavier. - Dans un webmail, un clic droit permet d’accéder à un menu pour vider la corbeille, un bouton «&amp;nbsp;vider la corbeille&amp;nbsp;» est également présent dans l’interface quand la corbeille est en cours de consultation.    **Exemple non-valide&amp;nbsp;:**       Une fonctionnalité réalisable uniquement à l’aide du &lt;i lang=\&quot;en\&quot;&gt;drag’n’drop&lt;/i&gt; et sans équivalent au clavier.  **Référence&amp;nbsp;:** WCAG 2.1.1  "
});

documentTitles["fondamentaux-tech.html#18-rendre-le-parcours-du-focus-sequentiel-et-logique-sans-piege-clavier"] = "18. Rendre le parcours du focus séquentiel et logique sans piège clavier";
index.add({
    url: "fondamentaux-tech.html#18-rendre-le-parcours-du-focus-sequentiel-et-logique-sans-piege-clavier",
    title: "18. Rendre le parcours du focus séquentiel et logique sans piège clavier",    
    body: "## 18. Rendre le parcours du focus séquentiel et logique sans piège clavier  **Cible&amp;nbsp;:** tout le monde, et en particulier les personnes déficientes visuelles, motrices, cognitives et en mobilité.   **Quand&amp;nbsp;:** lors du développement.  **Description&amp;nbsp;:**  Les éléments (liens, boutons, éléments de formulaire) doivent recevoir le focus dans un ordre logique pour l’utilisateur, sans que celui-ci ne reste piégé ou bloqué, même pour du contenu généré dynamiquement apparaissant ou disparaissant (modification du DOM, Ajax,…).   **À vérifier&amp;nbsp;:** - Pour valider cette exigence, la position du focus doit être visible à tout moment (propriété `outline` et `:focus` en &lt;abbr&gt;CSS&lt;/abbr&gt;), voir exigence 19, ci-dessous. - Attention à l’ordre d’insertion des éléments dans le code &lt;abbr&gt;HTML&lt;/abbr&gt;, cela a une influence sur l’ordre de déplacement du focus. Un élément présent à la fin du code source mais positionné tout en haut de la page via &lt;abbr&gt;CSS&lt;/abbr&gt; sera le dernier à recevoir le focus.  - Pour la maintenabilité, éviter l’utilisation de l’attribut `tabindex` avec des valeurs supérieures à 0. - Même lors d’apparition ou de disparition de contenu, il faut conserver ce parcours logique et séquentiel.  **Objectif utilisateur&amp;nbsp;:** Permettre la navigation logique sans piège au clavier dans les pages de l’application. Nécessaire pour les utilisateurs ne naviguant qu’au clavier (non ou malvoyants, déficients moteurs, déficients cognitifs, en mobilité).  **Exemple non-valide&amp;nbsp;:**       Une page contenant un lecteur vidéo dont le focus peut entrer à l’intérieur du lecteur, mais ne peut pas en sortir (piège clavier).           **Référence&amp;nbsp;:** WCAG 2.4.3, 2.1.2  "
});

documentTitles["fondamentaux-tech.html#19-rendre-visible-le-focus-en-toute-circonstance"] = "19. Rendre visible le focus en toute circonstance";
index.add({
    url: "fondamentaux-tech.html#19-rendre-visible-le-focus-en-toute-circonstance",
    title: "19. Rendre visible le focus en toute circonstance",    
    body: "## 19. Rendre visible le focus en toute circonstance  **Cible&amp;nbsp;:** tout le monde, et en particulier les personnes déficientes visuelles, motrices, cognitives, ayant un déficit d’attention et en mobilité.   **Quand&amp;nbsp;:** dès la phase de conception et lors du développement.  **Description&amp;nbsp;:**  Ne pas masquer le focus et si nécessaire accentuer sa visibilité sur tous les éléments focusables, par exemple en modifiant la propriété &lt;abbr&gt;CSS&lt;/abbr&gt; `outline`. Veiller à fournir un niveau de contraste suffisant pour que celui-ci soit visible par tous (cf. [mesurer le niveau de contraste des couleurs](methodes-outils-contrastes.html)).  Lorsqu’un effet est visible sur un élément au survol de la souris (`:hover` en &lt;abbr&gt;CSS&lt;/abbr&gt; par exemple), cet effet doit être également affiché à la prise du focus (`:focus`).  Il est possible, avec du code Javascript, de n’afficher l’&lt;i lang=\&quot;en\&quot;&gt;outline&lt;/i&gt; que lors d’une navigation au clavier (c’est à dire de ne pas afficher l’&lt;i lang=\&quot;en\&quot;&gt;outline&lt;/i&gt; lors d’un clic souris, qui active également l’état `:focus`)&amp;nbsp;:  ```javascript var head = document.head || document.getElementsByTagName(’head’)[0]; var axsStyles = head.appendChild(document.createElement(’style’)); document.addEventListener(’mousedown’, function() { 	axsStyles.innerHTML = ’* {outline:none !important}’; }); document.addEventListener(’keydown’, function() { 	axsStyles.innerHTML = ’’; }); ```  &lt;a href=\&quot;https://codepen.io/paipai/pen/jwLyzK\&quot;&gt;Demonstration de la visibilité du focus à la navigation clavier uniquement&lt;/a&gt;  **À vérifier&amp;nbsp;:** Dans beaucoup de &lt;i lang=\&quot;en\&quot;&gt;frameworks&lt;/i&gt; &lt;span lang=\&quot;en\&quot;&gt;front&lt;/span&gt; ou dans les &lt;i lang=\&quot;en\&quot;&gt;reset&lt;/i&gt; &lt;abbr&gt;CSS&lt;/abbr&gt;, la propriété `outline` (qui permet de visualiser le focus) est désactivée (`outline: none;`), penser à la redéfinir et vérifier que le focus est visible sur tous les éléments le recevant.  **Objectif utilisateur&amp;nbsp;:** Permettre la visibilité du focus sur tous les éléments actifs, notamment pour les utilisateurs de clavier (déficients visuels, moteurs ou ceux ayant des déficiences d’attention et de mémorisation ou en mobilité).  **Exemples valides&amp;nbsp;:**   Dans les captures d’écran suivantes, le focus est positionné sur le lien «&amp;nbsp;209 SMS/mois&amp;nbsp;».   La première capture présente le comportement par défaut (focus représenté par des pointillés). Dans la seconde capture, les pointillés ont été supprimés, mais un encadré permet d’indiquer de manière explicite l’emplacement du focus.   ![capture d’écran présentant l’affichage du focus par défaut](images/focus.png) ![capture d’écran présentant un comportement personnalisé pour l’affichage du focus](images/focus2.png)   **Référence&amp;nbsp;:** WCAG 2.4.7  "
});

documentTitles["fondamentaux-tech.html#20-fournir-des-liens-devitement"] = "20. Fournir des liens d’évitement";
index.add({
    url: "fondamentaux-tech.html#20-fournir-des-liens-devitement",
    title: "20. Fournir des liens d’évitement",    
    body: "## 20. Fournir des liens d’évitement  **Cible&amp;nbsp;:** utile pour les utilisateurs de mobile et tablette, les personnes déficientes visuelles et les personnes souffrant de handicap moteur ou en mobilité.   **Quand&amp;nbsp;:** dès la phase de conception et lors du développement.  **Description&amp;nbsp;:**  Mettre en place des liens d’accès direct (liens d’évitement) permettant d’accéder aux principales zones de la page (navigation, contenu, pied de page, recherche…) grâce à des liens internes vers des ancres (balises `&lt;a&gt;` ou tout élément &lt;abbr&gt;HTML&lt;/abbr&gt; possédant un attribut `id`). En cas de **fortes contraintes,** ces liens peuvent être cachés et affichés uniquement lors de la navigation clavier.  **À vérifier&amp;nbsp;:** Lorsqu’un lien d’évitement est activé, vérifier que le focus est bien déplacé (il ne s’agit pas uniquement de faire défiler la page au bon endroit).  **Objectif utilisateur&amp;nbsp;:** Faciliter la navigation pour des utilisateurs naviguant au clavier, des utilisateurs malvoyants, utilisateurs de loupe logicielle ou de téléphone mobile.       **Exemple&amp;nbsp;:**   Des liens d’évitement («&amp;nbsp;Aller à la navigation&amp;nbsp;», «&amp;nbsp;Aller au contenu&amp;nbsp;») sont disponibles sur ce site. Pour les faire apparaître, placer le focus en haut de la page en cliquant sur la barre d’adresse de votre navigateur par exemple puis appuyer plusieurs fois sur la touche `TAB`.  ![capture d’écran du site orange.com](images/skiplink.png)     **Référence&amp;nbsp;:** WCAG 2.4.1   "
});

documentTitles["fondamentaux-tech.html#21-permettre-le-controle-des-animations"] = "21. Permettre le contrôle des animations";
index.add({
    url: "fondamentaux-tech.html#21-permettre-le-controle-des-animations",
    title: "21. Permettre le contrôle des animations",    
    body: "## 21. Permettre le contrôle des animations **Cible&amp;nbsp;:** les personnes malvoyantes, les personnes éprouvant des difficultés de lecture, d’attention ou de compréhension, les personnes épileptiques.   **Quand&amp;nbsp;:** lors de la conception du service et lors de la conception graphique.  **Description&amp;nbsp;:**   Tout contenu en mouvement, mis à jour, clignotant doit pouvoir être stoppé, caché ou mis en pause par l’utilisateur.   Par ailleurs, éviter autant que possible les flashs lumineux et les changements brusques de luminosité (cf. [Le logo des &lt;abbr&gt;JO&lt;/abbr&gt; provoque des crises d’épilepsie](http://www.leparisien.fr/societe/le-logo-des-jo-provoque-des-crises-d-epilepsie-09-06-2007-2008107333.php)). Il faut donc prévoir une pause au chargement de la page ou un moyen de stopper ou mettre en pause l’animation, la mise à jour ou le clignotement via un bouton par exemple.  **Exemple&amp;nbsp;:**   ![capture d’écran d’un carrousel disposant d’un bouton pour mettre en pause l’animation](./images/carrousel.png)    Un carrousel qui défile automatiquement doit se mettre en pause au survol de la souris ou lorsqu’il a le focus.   Il est également possible d’ajouter un bouton «&amp;nbsp;pause&amp;nbsp;» directement dans l’interface.  **Référence&amp;nbsp;:** WCAG 2.2.2  "
});

documentTitles["fondamentaux-tech.html#22-sassurer-que-les-principales-fonctionnalites-sont-utilisables-avec-les-lecteurs-decran"] = "22. S’assurer que les principales fonctionnalités sont utilisables avec les lecteurs d’écran";
index.add({
    url: "fondamentaux-tech.html#22-sassurer-que-les-principales-fonctionnalites-sont-utilisables-avec-les-lecteurs-decran",
    title: "22. S’assurer que les principales fonctionnalités sont utilisables avec les lecteurs d’écran",    
    body: "## 22. S’assurer que les principales fonctionnalités sont utilisables avec les lecteurs d’écran  **Cible&amp;nbsp;:** tout le monde, et en particulier les personnes déficientes visuelles.   **Quand&amp;nbsp;:**lors du développement.  **Description&amp;nbsp;:**  Respecter les recommandations générales d’accessibilité, utiliser en priorité les composants standards &lt;abbr&gt;HTML&lt;/abbr&gt;, sinon, utiliser &lt;abbr&gt;ARIA&lt;/abbr&gt; (&lt;i lang=\&quot;en\&quot;&gt;Accessible Rich Internet Applications&lt;/i&gt;) pour les composants d’interface complexes.   **À vérifier&amp;nbsp;:**  S’assurer de l’absence de point bloquant avec les couples navigateur/lecteur d’écran (Firefox/&lt;abbr&gt;NVDA&lt;/abbr&gt;, &lt;abbr&gt;IE&lt;/abbr&gt;/Jaws, Safari/VoiceOver) dans les parcours utilisateurs (scénarios d’utilisation des principales fonctionnalités de l’application). En effet, les utilisateurs de lecteur d’écran sont les plus impactés par un manque d’accessibilité, on repère un grand nombre de problèmes en vérifiant cette exigence.  **Objectif utilisateur&amp;nbsp;:** Permettre à l’utilisateur de lecteur d’écran d’accéder aux principales fonctionnalités de l’application, mais aussi s’assurer pour tous les utilisateurs de l’utilisabilité de l’application.  "
});

documentTitles["fondamentaux-tech.html#23-gerer-dynamiquement-le-focus-lors-dune-insertion-ou-dune-modification-du-contenu"] = "23. Gérer dynamiquement le focus lors d’une insertion ou d’une modification du contenu";
index.add({
    url: "fondamentaux-tech.html#23-gerer-dynamiquement-le-focus-lors-dune-insertion-ou-dune-modification-du-contenu",
    title: "23. Gérer dynamiquement le focus lors d’une insertion ou d’une modification du contenu",    
    body: "## 23. Gérer dynamiquement le focus lors d’une insertion ou d’une modification du contenu  **Cible&amp;nbsp;:** tout le monde, et en particulier les personnes déficientes visuelles, cognitives ou avec un trouble de l’attention.   **Quand&amp;nbsp;:**lors du développement.  **Description&amp;nbsp;:**  Lorsqu’un élément est affiché suite à une interaction de l’utilisateur&amp;nbsp;:  - celui-ci doit apparaître dans le code source juste après l’élément déclenchant (exemple&amp;nbsp;: menu dépliant),  - et/ou le focus doit être déplacé sur un des premiers éléments du contenu généré (lien, bouton, titre, paragraphe…).       Lors de la disparition de contenu, le focus doit être redonné à l’élément déclenchant ou, si c’est impossible, positionné juste avant le contenu qui a disparu.   Par exemple à la fermeture d’une boîte de dialogue, le focus doit être repositionné sur l’élément qui a déclenché l’ouverture (bouton, lien, …).  Pour rappel&amp;nbsp;: le contenu dynamiquement généré doit être accessible et donc respecter tous les critères d’accessibilité.   Il existe plusieurs solutions pour prévenir l’utilisateur en cas d’apparition/disparition de contenu&amp;nbsp;: - via du texte, - en déplaçant le focus, - en utilisant de l’&lt;abbr&gt;ARIA&lt;/abbr&gt;.  Voir [l’exemple de menu déroulant](./exemples/simple-menu/simple-menu.html) pour la mise en pratique de l’attribut `aria-haspopup`.  **À vérifier&amp;nbsp;:** - Le déplacement du focus s’effectue de manière logique (ordre de lecture naturel). - L’ordre de lecture n’a pas été redéfini en utilisant des attributs `tabindex` (avec des valeurs positives).    En pratique, l’attribut `tabindex` ne devrait être utilisé qu’avec deux valeurs&amp;nbsp;: - `tabindex=\&quot;-1\&quot;`&amp;nbsp;: pour interdire à un élément de recevoir le focus via la touche `TAB` et l’autoriser à recevoir le focus via Javascript. - `tabindex=\&quot;0\&quot;`&amp;nbsp;: pour rendre un élément focusable via la touche `TAB` et via Javascript.  **Objectif utilisateur&amp;nbsp;:** Permettre à l’utilisateur, par exemple non ou malvoyant, de repérer l’apparition de nouveaux contenus et d’interagir avec ceux-ci.    **Exemple valide&amp;nbsp;:**  Menu replié :   ![capture d’écran d’un menu replié](images/v_gererFocus1.jpg)    Menu déplié :  ![capture d’écran d’un menu déplié](images/v_gererFocus2.jpg)    Sur ce site, le menu principal de navigation est fermé par défaut et une mention «&amp;nbsp;menu fermé&amp;nbsp;» est mise en alternative de l’icône hamburger pour les malvoyants. Lors de son ouverture, l’icône hamburger se change en croix (permettant la fermeture du menu) et donc l’alternative est dès lors «&amp;nbsp;fermer le menu&amp;nbsp;».   De plus, le focus est positionné directement sur le premier item du menu apparu, c’est la bonne manière de gérer le focus pour ce type de menu dépliant.  **Exemple non-valide&amp;nbsp;:**   ![capture d’écran de résultats d’une recherche dynamique](images/nv_gererFocus.jpg)    Sur ce site, la recherche est dynamique, elle se met à jour dès que l’utilisateur active (sélectionne) un filtre ou qu’il tape &lt;kbd&gt;Entrée&lt;/kbd&gt; après avoir saisi un mot clé. Le problème est que la région qui affiche dynamiquement les résultats est très éloignée de la zone de critères de recherche. Il est donc difficile voire impossible pour certains utilisateurs (déficients visuels, cognitifs ou avec troubles de l’attention) d’identifier la zone de résultats et de savoir quand celle-ci est mise à jour. Il faudrait pousser le focus sur la zone de résultats à chaque recherche.  **Référence&amp;nbsp;:** WCAG 2.4.3  "
});

documentTitles["fondamentaux-tech.html#24-sassurer-que-lutilisateur-garde-le-controle-lors-des-interactions"] = "24. S’assurer que l’utilisateur garde le contrôle lors des interactions";
index.add({
    url: "fondamentaux-tech.html#24-sassurer-que-lutilisateur-garde-le-controle-lors-des-interactions",
    title: "24. S’assurer que l’utilisateur garde le contrôle lors des interactions",    
    body: "## 24. S’assurer que l’utilisateur garde le contrôle lors des interactions  **Cible&amp;nbsp;:** tout le monde, et en particulier les personnes déficientes visuelles, cognitives ou avec un déficit d’attention.   **Quand&amp;nbsp;:** dès la phase de conception et lors du développement.  **Description&amp;nbsp;:** Ne pas induire de changement de contexte lors de la prise de focus, la saisie de données ou l’activation d’un élément de formulaire sans que ce changement soit prévisible (bouton) ou que l’utilisateur ait été averti.   **Objectif utilisateur&amp;nbsp;:** Donner à tous les utilisateurs la maîtrise des changements de contexte lié à son action.  **Exemple&amp;nbsp;:**     Un formulaire doit obligatoirement posséder un bouton d’envoi. Il ne doit pas être envoyé automatiquement après la saisie de l’utilisateur.  **Référence&amp;nbsp;:** WCAG 3.2.1, 3.2.2  "
});

documentTitles["fondamentaux-tech.html#25-eviter-les-captcha"] = "25. Eviter les captcha";
index.add({
    url: "fondamentaux-tech.html#25-eviter-les-captcha",
    title: "25. Eviter les captcha",    
    body: "## 25. Eviter les captcha **Cible&amp;nbsp;:** tous les utilisateurs en particulier, les personnes déficientes visuelles.   **Quand&amp;nbsp;:** lors de la conception et lors du développement.  **Description&amp;nbsp;:**   Les captcha sont souvent la source de difficultés pour les utilisateurs. Si la mise en place d’un système anti-spam ne peut être évitée, il est souhaitable de s’orienter vers une solution plus souple pour l’utilisateur&amp;nbsp;:   - Double authentification - Champ de formulaire caché à laisser vide (technique du &lt;span lang=\&quot;en\&quot;&gt;honeypot&lt;/span&gt;), non-visibles pour l’utilisateur - Mise à disposition d’un support téléphonique afin de s’assurer que le client est une vraie personne - Un contrôle permettant de s’assurer qu’une même combinaison &lt;abbr&gt;IP&lt;/abbr&gt;/&lt;i lang=\&quot;en\&quot;&gt;User agent&lt;/i&gt; ne tente pas de soumettre le formulaire plus de N fois par seconde.  Si aucune autre alternative n’est possible, il est indispensable de prévoir une alternative pour les captcha uniquement visuels ou sonores en proposant une  combinaison de captcha&amp;nbsp;: un captcha  audio + visuel, des tests logiques (question dont la réponse est évidente, test  mathématique simple…) + captcha visuel classique...  "
});

documentTitles["fondamentaux-tech.html#26-identifier-et-conserver-la-coherence-des-regroupements-et-des-differentes-regions-de-la-page"] = "26. Identifier et conserver la cohérence des regroupements et des différentes régions de la page";
index.add({
    url: "fondamentaux-tech.html#26-identifier-et-conserver-la-coherence-des-regroupements-et-des-differentes-regions-de-la-page",
    title: "26. Identifier et conserver la cohérence des regroupements et des différentes régions de la page",    
    body: "## 26. Identifier et conserver la cohérence des regroupements et des différentes régions de la page **Cible&amp;nbsp;:** tout le monde et en particulier les personnes déficientes visuelles, cognitives ou ayant des troubles de l’attention.  **Description&amp;nbsp;:** Fournir des moyens d’identifier et de distinguer visuellement les différentes parties de la page et assurer la cohérence de ces régions ou regroupements dans toutes les pages.  **À vérifier&amp;nbsp;:**  - S’assurer que les mécanismes de navigation sont toujours situés au même endroit dans un ensemble de page. - S’assurer que les composants et les regroupements qui ont la même fonction sont identifiés (visuellement) de la même façon. - S’assurer que les zones de la page sont clairement délimitées (bordures, filets, contraste suffisant…) ou qu’il y a un moyen de distinguer visuellement les groupes (sous-menu, liste déroulante…) ainsi que les différentes régions de la page.  **Objectif utilisateur&amp;nbsp;:** Permettre aux utilisateurs d’identifier et localiser les éléments d’interface dans toutes les pages.  **Exemple valide&amp;nbsp;:**   ![capture d’écran du site 100% pratique](images/groupement.jpg)   Ici, l’info bulle (&lt;i lang=\&quot;en\&quot;&gt;tooltip&lt;/i&gt;) est délimitée par une bordure bien visible et suffisamment contrastée, permettant de bien identifier son contenu.  **Exemple non-valide&amp;nbsp;:**   ![capture d’écran du site fnac.com](images/groupement2.jpg)   Il est très difficile d’associer les thèmes («&amp;nbsp;par région&amp;nbsp;», «&amp;nbsp;par genre&amp;nbsp;»…) et les sous-thèmes en colonnes, d’autant plus que les filets horizontaux sont trop peu contrastés.  **Exemple&amp;nbsp;: Les balises &lt;abbr&gt;HTML5&lt;/abbr&gt; et &lt;i lang=\&quot;en\&quot;&gt;landmarks&lt;/i&gt; &lt;abbr&gt;ARIA&lt;/abbr&gt;** Pour donner une structure sémantique aux grandes régions d’une page, on peut utiliser les balises de structure &lt;abbr&gt;HTML5&lt;/abbr&gt; (`main` pour le contenu principal de la page, `nav` pour la navigation principale, `header` pour l’entête de page, `footer` pour le pied de page, `aside` pour du contenu complémentaire au contenu principal, et d’autres) même si leur support par les technologies d’assistance/navigateurs n’est pas total mais il s’améliore rapidement. On peut aussi utiliser, pour mettre en place cette structure de page, [les &lt;i lang=\&quot;en\&quot;&gt;landmarks&lt;/i&gt; &lt;abbr&gt;ARIA&lt;/abbr&gt; (&lt;i lang=\&quot;en\&quot;&gt;Accessible Rich Internet Applications&lt;/i&gt;)](https://www.w3.org/TR/wai-aria-practices/examples/landmarks/index.html) et là, le support est bien meilleur&amp;nbsp;!  Mettre en place ce type de sémantique permet aux déficients visuels d’identifier et comprendre l’organisation, la structure globale de la page et donc de naviguer plus facilement.  Pour aller plus loin (en anglais)&amp;nbsp;: &lt;a href=\&quot;https://dequeuniversity.com/assets/html/jquery-summit/html5/slides/landmarks.html\&quot; hreflang=\&quot;en\&quot;&gt;&lt;abbr&gt;HTML5&lt;/abbr&gt; et &lt;i lang=\&quot;en\&quot;&gt;landmarks&lt;/i&gt; &lt;abbr&gt;ARIA&lt;/abbr&gt;&lt;/a&gt;   Pour une page en &lt;abbr&gt;HTML5&lt;/abbr&gt;&amp;nbsp;:  ```html &lt;head&gt;   …   &lt;title&gt;Titre de la page&lt;/title&gt;   … &lt;/head&gt; &lt;body&gt;   &lt;header&gt;     &lt;h1&gt;…&lt;/h1&gt;     &lt;nav&gt;…navigation…&lt;/nav&gt;     &lt;p&gt;en tête de page&amp;nbsp;: logo, baseline…&lt;/p&gt;     …   &lt;/header&gt;   &lt;main&gt;     &lt;p&gt;contenu principal&lt;/p&gt;     …   &lt;/main&gt;   &lt;aside&gt;     &lt;p&gt;contenu annexe en relation avec le contenu principal&lt;/p&gt;     …   &lt;/aside&gt;   &lt;footer&gt;     &lt;p&gt;contenu du pied de page&amp;nbsp;: copyright…&lt;/p&gt;     …   &lt;/footer&gt; &lt;/body&gt; ```     Pour une page qui n’est pas en &lt;abbr&gt;HTML5&lt;/abbr&gt;, ajouter les &lt;i lang=\&quot;en\&quot;&gt;landmarks&lt;/i&gt; &lt;abbr&gt;ARIA&lt;/abbr&gt;&amp;nbsp;:  ```html &lt;head&gt;   …   &lt;title&gt;Titre de la page&lt;/title&gt;   … &lt;/head&gt; &lt;body&gt;   &lt;div role=\&quot;banner\&quot;&gt;     &lt;h1&gt;…&lt;/h1&gt;     &lt;div role=\&quot;navigation\&quot;&gt;…navigation…&lt;/div&gt;     &lt;p&gt;en tête de page&amp;nbsp;: logo, baseline…&lt;/p&gt;     …   &lt;/div&gt;   &lt;div role=\&quot;main\&quot;&gt;     &lt;p&gt;contenu principal&lt;/p&gt;     …   &lt;/div&gt;   &lt;div role=\&quot;complementary\&quot;&gt;     &lt;p&gt;contenu annexe en relation avec le contenu principal&lt;/p&gt;     …   &lt;/div&gt;   &lt;div role=\&quot;contentinfo\&quot;&gt;     &lt;p&gt;contenu du pied de page&amp;nbsp;: copyright…&lt;/p&gt;     …   &lt;/div&gt; &lt;/body&gt; ```  **Référence WCAG&amp;nbsp;:** 3.2.3., 3.2.4    "
});

documentTitles["fondamentaux-tech.html#27-fournir-des-acces-multiples-et-une-localisation"] = "27. Fournir des accès multiples et une localisation";
index.add({
    url: "fondamentaux-tech.html#27-fournir-des-acces-multiples-et-une-localisation",
    title: "27. Fournir des accès multiples et une localisation",    
    body: "## 27. Fournir des accès multiples et une localisation  ** Cible&amp;nbsp;:** tout le monde et en particulier les personnes déficientes visuelles ou cognitives.  ** Description&amp;nbsp;:** Donner à l’utilisateur plusieurs moyens de situer et accéder à un contenu spécifique, localiser la page Web en cours de consultation dans un ensemble de pages. Lorsque la page est une étape dans un processus où les pages s’enchaînent les unes après les autres, ce critère peut être ignoré.  ** À vérifier&amp;nbsp;:** S’assurer que plusieurs systèmes permettent de situer et accéder à une page ou un contenu dans le site&amp;nbsp;: un outil de recherche sur l’ensemble du site, un plan du site, un menu de navigation global, un fil d’Ariane… ** Objectif utilisateur&amp;nbsp;:** Permettre à tous les utilisateurs de se repérer afin d’accéder plus facilement à l’ensemble du contenu du site.  ** Exemple valide&amp;nbsp;:** Le site propose, à la fois, une navigation principale complète et précise et un fil d’Ariane.  ** Exemple invalide&amp;nbsp;:** Une application offre un menu de navigation parcellaire et aucun autre moyen pour l’utilisateur de s’orienter dans les pages ou de repérer où se situe la page courante dans l’arborescence.  **Référence WCAG&amp;nbsp;:** 2.4.5., 2.4.8  &lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2016  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt;"
});



documentTitles["fondamentaux-nontech.html#criteres-incontournables-pour-la-conception"] = "Critères incontournables pour la conception";
index.add({
    url: "fondamentaux-nontech.html#criteres-incontournables-pour-la-conception",
    title: "Critères incontournables pour la conception",    
    body: "# Critères incontournables pour la conception  &lt;script&gt;$(document).ready(function () {     setBreadcrumb([         {\&quot;label\&quot;:\&quot;Critères incontournables\&quot;, \&quot;url\&quot;: \&quot;./fondamentaux.html\&quot;},         {\&quot;label\&quot;:\&quot;Critères incontournables pour la conception\&quot;}]     );     addSubMenu([         {\&quot;label\&quot;:\&quot;La conception\&quot;, \&quot;url\&quot;:\&quot;fondamentaux.html\&quot;, \&quot;expanded\&quot;:true},          {\&quot;label\&quot;:\&quot;Le développement\&quot;, \&quot;url\&quot;:\&quot;fondamentaux-tech.html\&quot;}     ]); });&lt;/script&gt;  &lt;span data-menuitem=\&quot;fondamentaux\&quot;&gt;&lt;/span&gt;   "
});

documentTitles["fondamentaux-nontech.html#1-donner-un-titre-aux-pages"] = "1. Donner un titre aux pages";
index.add({
    url: "fondamentaux-nontech.html#1-donner-un-titre-aux-pages",
    title: "1. Donner un titre aux pages",    
    body: "## 1. Donner un titre aux pages   **Cible&amp;nbsp;:** tout le monde et en particulier les personnes déficientes visuelles.   **Quand&amp;nbsp;:** dès la conception et pendant le développement.  **Description&amp;nbsp;:**   Donner à chaque page un titre qui lui est spécifique et qui reflète son contenu ou sa fonction (balise `&lt;title&gt;`).   Le titre de la page est le premier élément lu par la synthèse vocale, il doit permettre d’identifier formellement la page sur laquelle on se trouve.  **À vérifier&amp;nbsp;:** - Bien qu’il n’y ait pas de règle, en général (ouverture de nombreux onglets de multiples applications), on va de l’information la plus spécifique vers la moins spécifique (ex&amp;nbsp;: nom de la page courante - nom du site). Pour le fenêtrage d’une multitude d’applications, le contexte d’utilisation est différent&amp;nbsp;; dans ce cas, on préférera aller de l’information la moins spécifique vers la plus spécifique. - Lorsque le contenu de la page est modifié dynamiquement (affichage du résultat d’une recherche, erreurs dans un formulaire, action utilisateur ajoutant du contenu…), le titre de la page doit refléter cette modification du contenu.  **Exemple valide&amp;nbsp;:**   `Accueil - Espace client Orange`   **Exemple non-valide&amp;nbsp;:**   `Accueil`  "
});

documentTitles["fondamentaux-nontech.html#2-donner-des-titres-aux-rubriques"] = "2. Donner des titres aux rubriques";
index.add({
    url: "fondamentaux-nontech.html#2-donner-des-titres-aux-rubriques",
    title: "2. Donner des titres aux rubriques",    
    body: "## 2. Donner des titres aux rubriques **Cible&amp;nbsp;:** tout le monde et en particulier les personnes déficientes cognitives, ayant des difficultés pour lire ou déficientes visuelles.   **Quand&amp;nbsp;:** dès la conception, à la rédaction du contenu et pendant le développement.  **Description&amp;nbsp;:**   Identifier les balises de titres à utiliser (balises &lt;abbr&gt;HTML&lt;/abbr&gt; `h1` jusqu’à `h6`) pour structurer le contenu des pages. Les personnes malvoyantes naviguant à l’aide d’un lecteur d’écran peuvent accéder à la liste des titres de la page pour naviguer rapidement.  Tout comme dans un fichier Word, il est possible d’utiliser la table des matières si des titres ont correctement été positionnés à l’intérieur du document.    **À vérifier&amp;nbsp;:**  - Les titres doivent être pertinents, refléter la structure de l’information contenue dans la page. - Il ne doit pas exister de saut dans la hiérarchie des titres (on ne passe pas directement d’un titre `h2` à un titre `h4`). - On peut mettre plusieurs `h1` par page (se limiter tout de même à deux dans la majorité des cas).  **Exemple valide&amp;nbsp;:**        Un titrage de page cohérent et pertinent&amp;nbsp;:  ``` (Titre 1) Accueil - Orange 	(Titre 2) Les actualités 	(Titre 2) La fibre arrive&amp;nbsp;! 		(Titre 3) Êtes-vous éligible&amp;nbsp;? ```  "
});

documentTitles["fondamentaux-nontech.html#3-assurer-un-contraste-suffisant-entre-texte-et-fond"] = "3. Assurer un contraste suffisant entre texte et fond";
index.add({
    url: "fondamentaux-nontech.html#3-assurer-un-contraste-suffisant-entre-texte-et-fond",
    title: "3. Assurer un contraste suffisant entre texte et fond",    
    body: "## 3. Assurer un contraste suffisant entre texte et fond **Cible&amp;nbsp;:** tout le monde, en particulier les utilisateurs sur mobile et tablette, les personnes malvoyantes, éprouvant des difficultés de lecture ou avec un déficit d’attention et les seniors.    **Quand&amp;nbsp;:** dès la phase de conception et lors du développement.  **Description&amp;nbsp;:**   Le niveau de contraste entre le texte et l’arrière-plan doit être suffisamment élevé. Un niveau de contraste insuffisant sera préjudiciable pour les utilisateurs ayant des difficultés visuelles ainsi que pour les utilisateurs de mobiles et tablettes se trouvant dans un environnement très lumineux.      **Exemple non-valide&amp;nbsp;:**   Le texte «&amp;nbsp;film&amp;nbsp;| 20h40…&amp;nbsp;» ne présente pas un contraste suffisant. Celui-ci ne sera pas lisible par tous les utilisateurs.    ![capture d’écran présentant du texte dont le contraste n’est pas suffisant](images/contraste.png)  **À vérifier&amp;nbsp;: **  - Le contraste entre la couleur du fond et celle du texte doit être 4.5:1 minimum, et ceci également pour du texte sous forme d’image porteuse d’information. - Pour des applications principalement utilisées en web mobile ou en mobilité, le niveau de contraste des principaux éléments doit être de 7:1 afin d’assurer une bonne lisibilité pour tous. - Les liens doivent être facilement identifiables par rapport au reste du texte.  **Outil&amp;nbsp;:**   L’application &lt;a href=\&quot;http://www.paciellogroup.com/resources/contrastanalyser/\&quot; hreflang=\&quot;en\&quot; lang=\&quot;en\&quot;&gt;Colour Contrast Analyser&lt;/a&gt; permet de mesurer rapidement des niveaux de contraste de couleurs (gratuit pour Mac et Windows).     "
});

documentTitles["fondamentaux-nontech.html#4-ne-pas-utiliser-la-couleur-ou-linformation-sensorielle-comme-seule-source-dinformation"] = "4. Ne pas utiliser la couleur ou l’information sensorielle comme seule source d’information";
index.add({
    url: "fondamentaux-nontech.html#4-ne-pas-utiliser-la-couleur-ou-linformation-sensorielle-comme-seule-source-dinformation",
    title: "4. Ne pas utiliser la couleur ou l’information sensorielle comme seule source d’information",    
    body: "## 4. Ne pas utiliser la couleur ou l’information sensorielle comme seule source d’information **Cible&amp;nbsp;:** tout le monde, en particulier les daltoniens et plus généralement les personnes malvoyantes ou ayant une déficience cognitive, auditive et les seniors.   **Quand&amp;nbsp;:** dès la phase de conception et lors du développement.  **Description&amp;nbsp;:**   Ne pas utiliser la couleur ou une information sensorielle (forme, taille, son, orientation, localisation visuelle…) comme la seule façon de véhiculer de l’information, d’indiquer une action, de solliciter une réponse ou de distinguer un élément. L’information fournie par un changement de couleur ou une information sensorielle doit être complétée par une information textuelle (alternative) ou/et structuration sémantique.  **Exemple valide&amp;nbsp;:**    ![illustration utilisant des icônes de couleurs avec des formes différenciées pour transmettre l’information](images/couleur-ok.png)  **Exemple non-valide&amp;nbsp;:**    ![illustration utilisant des icônes de couleurs avec des formes identiques pour transmettre l’information](images/couleur-ko.png)    Cet exemple n’est pas valide, car l’information est transmise uniquement par la couleur.  **À vérifier&amp;nbsp;:** - Faire une capture d’écran et la passer en noir et blanc. La perte des couleurs ne doit pas entraîner de difficulté dans la navigation, ni provoquer de perte d’information. - Couper le son, le niveau d’information doit rester identique.  "
});

documentTitles["fondamentaux-nontech.html#5-definir-des-equivalents-textuels"] = "5. Définir des équivalents textuels";
index.add({
    url: "fondamentaux-nontech.html#5-definir-des-equivalents-textuels",
    title: "5. Définir des équivalents textuels",    
    body: "## 5. Définir des équivalents textuels **Cible&amp;nbsp;:** les personnes déficientes visuelles, les personnes malentendantes ou déficientes cognitives et les moteurs de recherche.   **Quand&amp;nbsp;:** dès la conception et pendant le développement.  **Description&amp;nbsp;:**   Mettre en place des alternatives textuelles pour tous les éléments informatifs non-textuels (alternatives aux images, icônes). De même, prévoir des scripts ou des sous-titres pour les contenus audio ou vidéo.  **Exemple&amp;nbsp;:**   Dans la capture ci-dessous, il faudrait par exemple prévoir dès la conception les textes alternatifs pour chaque bouton&amp;nbsp;: - «&amp;nbsp;menu&amp;nbsp;», - «&amp;nbsp;réglages&amp;nbsp;», - «&amp;nbsp;chaîne précédente&amp;nbsp;» - «&amp;nbsp;couper le son&amp;nbsp;» - …    ![capture d’écran d’un lecteur vidéo contenant plusieurs boutons](images/player.png)     "
});

documentTitles["fondamentaux-nontech.html#6-assurer-la-visibilite-du-focus"] = "6. Assurer la visibilité du focus";
index.add({
    url: "fondamentaux-nontech.html#6-assurer-la-visibilite-du-focus",
    title: "6. Assurer la visibilité du focus",    
    body: "## 6. Assurer la visibilité du focus **Cible&amp;nbsp;:** tout le monde et en particulier les personnes déficientes visuelles, motrices, cognitives et en mobilité.   **Quand&amp;nbsp;:** lors de la conception graphique et lors du développement.  **Description&amp;nbsp;:**   La position du focus clavier doit être visible par tous les utilisateurs. Par défaut, le navigateur entoure l’élément avec des pointillés ou un cadre de couleur. Ce comportement peut être remplacé pour être rendu plus visible mais ne doit pas être supprimé.  Veiller à fournir un niveau de contraste suffisant (cf. [mesurer le niveau de contraste des couleurs](methodes-outils-contrastes.html)). Les utilisateurs qui naviguent à l’aide du clavier (touche TAB) ont besoin de connaître la position du focus à tout moment.  L’effet visible à la prise du focus doit être étudié dès la conception graphique au même titre que l’effet visible au survol du pointeur de la souris.      **Exemples valides&amp;nbsp;:**   Dans les captures d’écran suivantes, le focus est positionné sur le lien «&amp;nbsp;209 SMS/mois&amp;nbsp;».   La première capture présente le comportement par défaut (focus représenté par des pointillés). Dans la seconde capture, les pointillés ont été supprimés, mais un encadré permet d’indiquer de manière explicite l’emplacement du focus.   ![capture d’écran présentant l’affichage du focus par défaut](images/focus.png) ![capture d’écran présentant un comportement personnalisé pour l’affichage du focus](images/focus2.png)    "
});

documentTitles["fondamentaux-nontech.html#7-agrandissement-de-la-taille-du-texte"] = "7. Agrandissement de la taille du texte";
index.add({
    url: "fondamentaux-nontech.html#7-agrandissement-de-la-taille-du-texte",
    title: "7. Agrandissement de la taille du texte",    
    body: "## 7. Agrandissement de la taille du texte  **Cible&amp;nbsp;:** tout le monde et en particulier les personnes déficientes visuelles, en mobilité et seniors.   **Quand&amp;nbsp;:** lors de la conception graphique et principalement lors du développement.  **Description&amp;nbsp;:**   La taille du texte doit pouvoir être multipliée par 2 (zoom du texte à 200% depuis les réglages du navigateur). À ce niveau de zoom, la présentation de la page peut être altérée, mais l’information doit rester lisible (pas de texte tronqué, ni superposé). Bien que ceci doive être pris en compte pendant la phase de développement, on peut identifier les zones de l’écran qui doivent ou non s’agrandir en même temps que la taille du texte dès la phase de conception graphique. Par ailleurs, certains choix de design peuvent ou non faciliter la mise en place de ce critère lors du développement, il est donc important d’y réfléchir dès le départ.       **Exemple&amp;nbsp;:**     La capture ci-dessous montre une page avec un zoom à 100%.   ![capture d’écran avec zoom à 100%](images/zoom.png)        **Exemple valide&amp;nbsp;:**   Avec zoom du texte à 200%.   ![capture d’écran avec zoom à 200% et texte lisible](images/zoom-ok.png)        **Exemple non-valide&amp;nbsp;:**   Avec zoom du texte à 200%. Ici la hauteur de l’élément contenant le texte n’a pas été rendue variable en fonction de la taille des caractères.   ![capture d’écran avec zoom à 200% et texte tronqué](images/zoom-ko.png)    "
});

documentTitles["fondamentaux-nontech.html#8-permettre-le-controle-des-animations"] = "8. Permettre le contrôle des animations";
index.add({
    url: "fondamentaux-nontech.html#8-permettre-le-controle-des-animations",
    title: "8. Permettre le contrôle des animations",    
    body: "## 8. Permettre le contrôle des animations **Cible&amp;nbsp;:** les personnes malvoyantes, les personnes éprouvant des difficultés de lecture, d’attention ou de compréhension, les personnes épileptiques.   **Quand&amp;nbsp;:** lors de la conception du service et lors de la conception graphique.  **Description&amp;nbsp;:**   Tout contenu en mouvement, mis à jour, clignotant doit pouvoir être stoppé, caché ou mis en pause par l’utilisateur.   Par ailleurs, éviter autant que possible les flashs lumineux et les changements brusques de luminosité (cf. [Le logo des JO provoque des crises d’épilepsie](http://www.leparisien.fr/societe/le-logo-des-jo-provoque-des-crises-d-epilepsie-09-06-2007-2008107333.php)).  **Exemple&amp;nbsp;:**   ![capture d’écran d’un carrousel disposant d’un bouton pour mettre en pause l’animation](./images/carrousel.png)    Un carrousel qui défile automatiquement doit se mettre en pause au survol de la souris ou lorsqu’il reçoit le focus.   Il est également possible d’ajouter un bouton «&amp;nbsp;pause&amp;nbsp;» directement dans l’interface.  "
});

documentTitles["fondamentaux-nontech.html#9-libelle-des-liens-et-des-boutons"] = "9. Libellé des liens et des boutons";
index.add({
    url: "fondamentaux-nontech.html#9-libelle-des-liens-et-des-boutons",
    title: "9. Libellé des liens et des boutons",    
    body: "## 9. Libellé des liens et des boutons **Cible&amp;nbsp;:** tout le monde et en particulier les personnes déficientes visuelles, cognitives ou ayant un déficit d’attention.   **Quand&amp;nbsp;:** lors de la conception du service et lors de la conception graphique.  **Description&amp;nbsp;:**   Les libellés des liens et des boutons doivent être suffisamment explicites. Dans les cas exceptionnels où ce n’est techniquement pas possible, prévoir quand même un libellé explicite qui sera utilisé par la synthèse vocale (et les autres technologies d'assistance).  **Exemple valide&amp;nbsp;:**   «&amp;nbsp;découvrez nos offres&amp;nbsp;»   **Exemples non-valides&amp;nbsp;:**   «&amp;nbsp;cliquez ici&amp;nbsp;»   «&amp;nbsp;en savoir plus&amp;nbsp;»  "
});

documentTitles["fondamentaux-nontech.html#10-permettre-la-navigation-au-clavier"] = "10. Permettre la navigation au clavier";
index.add({
    url: "fondamentaux-nontech.html#10-permettre-la-navigation-au-clavier",
    title: "10. Permettre la navigation au clavier",    
    body: "## 10. Permettre la navigation au clavier **Cible&amp;nbsp;:** tout le monde, en particulier les personnes souffrant de handicap moteur ou visuel et en mobilité.   **Quand&amp;nbsp;:** lors de la conception du service et lors du développement.  **Description&amp;nbsp;:**   Toutes les fonctionnalités doivent être utilisables à l’aide du clavier uniquement. Le focus doit pouvoir être déplacé sur tous les éléments cliquables (à l’aide de la touche &lt;kbd&gt;Tab&lt;/kbd&gt;).   Par ailleurs si des fonctionnalités sont spécifiques pour la souris (glisser-déposer, menu apparaissant au clic droit…), faire en sorte que celles-ci soient également disponibles via un autre moyen ailleurs dans l’interface (bouton, icône, menu…).   Voir [la façon de naviguer au clavier](./methodes-outils-clavier.html) dans un navigateur web.  **Exemple&amp;nbsp;:**   Dans un webmail, si un clic droit sur le dossier «&amp;nbsp;Corbeille&amp;nbsp;» permet d’accéder à un menu pour vider la corbeille, cette option doit être également disponible via un bouton «&amp;nbsp;Vider la corbeille&amp;nbsp;» ailleurs dans l’interface ou depuis un menu déroulant accessible au clavier.  "
});

documentTitles["fondamentaux-nontech.html#11-rendre-utilisables-les-formulaires"] = "11. Rendre utilisables les formulaires";
index.add({
    url: "fondamentaux-nontech.html#11-rendre-utilisables-les-formulaires",
    title: "11. Rendre utilisables les formulaires",    
    body: "## 11. Rendre utilisables les formulaires  **Cible&amp;nbsp;:** tout le monde et en particulier les personnes déficientes visuelles.   **Quand&amp;nbsp;:** lors de la conception et lors du développement.  **Description&amp;nbsp;:**   Chaque champ de formulaire doit être accompagné d’un libellé permettant d’identifier le rôle du champ, le type de donnée et le format attendu. Ce libellé doit être proche visuellement du champ afin qu’on fasse facilement le lien entre eux (notamment pour les utilisateurs de zoom ou de loupe logicielle, voire sur mobile). Les champs en erreur doivent pouvoir être identifiés et, si besoin, suggérer une correction. Ceci s’applique aux champs de saisie, mais également aux autres types de champs (liste déroulante, bouton radio, case à cocher…). Au niveau du développement, ce libellé sera associé au champ de formulaire pour faciliter la navigation à l’aide d’un lecteur d’écran.  **Exemple valide&amp;nbsp;:**   ![capture d’écran d’un formulaire valide](images/formulaire.png)    **Exemple non-valide&amp;nbsp;:**   ![capture d’écran d’un formulaire auquel il manque un label](images/formulaire2.png)  Dans certains cas, il semble inutile d’accompagner le champ de formulaire d’un libellé (champ de recherche accompagné d’un bouton en forme de loupe par exemple). Dans ce cas prévoir tout de même un libellé. Celui-ci ne sera pas affiché à l’écran mais sera tout de même associé au champ de formulaire lors du développement pour faciliter la navigation à l’aide d’un lecteur d’écran.  Enfin les libellés des messages d’erreur doivent être explicites.  **Exemple valide&amp;nbsp;:**   ![capture d’écran d’un formulaire affichant des messages d’erreur à la saisie valides](images/formulaire-ok.png)    **Exemple non-valide&amp;nbsp;:**   ![capture d’écran d’un formulaire affichant des messages d’erreur à la saisie non-valides](images/formulaire-ko.png)  "
});

documentTitles["fondamentaux-nontech.html#12-eviter-les-boites-de-dialogues-et-louverture-de-nouvelles-fenetres"] = "12. Éviter les boites de dialogues et l’ouverture de nouvelles fenêtres";
index.add({
    url: "fondamentaux-nontech.html#12-eviter-les-boites-de-dialogues-et-louverture-de-nouvelles-fenetres",
    title: "12. Éviter les boites de dialogues et l’ouverture de nouvelles fenêtres",    
    body: "## 12. Éviter les boites de dialogues et l’ouverture de nouvelles fenêtres **Cible&amp;nbsp;:** les seniors, les personnes déficientes cognitives, malvoyantes ou en mobilité.   **Quand&amp;nbsp;:** lors de la conception et lors du développement.  **Description&amp;nbsp;:**   Éviter autant que possible les actions qui ouvrent une nouvelle fenêtre (ou un nouvel onglet) du navigateur. Si un lien déclenche l’ouverture d’une nouvelle fenêtre, il faudra lors du développement faire en sorte que le texte «&amp;nbsp;nouvelle fenêtre&amp;nbsp;» soit vocalisé par les lecteurs d’écran, afin que les personnes malvoyantes sachent qu’une nouvelle fenêtre s’ouvre. De même éviter le recours systématique aux boîtes de dialogue pour présenter des informations dans les pages (présentation du service …). Celles-ci posent souvent des problèmes d’accessibilité pour les personnes qui naviguent au clavier ou au lecteur d’écran, problèmes qui nécessiteront une attention particulière lors de la phase de développement.  **Exemple non-valide&amp;nbsp;:**   Dans l’exemple ci-dessous le recours à une boîte de dialogue n’est pas justifié. L’utilisation d’une page web standard permettrait&amp;nbsp;: - de laisser plus d’espace au contenu (en supprimant les marges autour de la boite de dialogue), - de pouvoir utiliser le bouton «&amp;nbsp;Précédent&amp;nbsp;» du navigateur pour revenir en arrière lors de la navigation entre les différentes pages de la boite de dialogue, - de faciliter l’affichage sur les petits écrans, - d’éviter des problèmes d’accessibilité pour les personnes qui naviguent à l’aide du clavier ou à l’aide d’un lecteur d’écran, - d’alléger le poids de la page et le temps de chargement, car dans cet exemple la page derrière la boite de dialogue doit être chargée.    ![Capture d’écran d’une boîte de dialogue beaucoup trop volumineuse](images/dialog.png)  "
});

documentTitles["fondamentaux-nontech.html#13-fournir-des-liens-devitement"] = "13. Fournir des liens d’évitement";
index.add({
    url: "fondamentaux-nontech.html#13-fournir-des-liens-devitement",
    title: "13. Fournir des liens d’évitement",    
    body: "## 13. Fournir des liens d’évitement  **Cible&amp;nbsp;:** utile pour les utilisateurs de mobile et tablette, les personnes déficientes visuelles et les personnes souffrant de handicap moteur ou en mobilité.    **Quand&amp;nbsp;:** dès la phase de conception et lors du développement.  **Description&amp;nbsp;:**   Fournir des liens d’évitement du type «&amp;nbsp;Aller au contenu&amp;nbsp;» sur chaque page. Ceux-ci facilitent la navigation pour les personnes utilisant le clavier, en mobilité ou navigant à l’aide d’un lecteur d’écran. En cas de **fortes contraintes,** les liens peuvent être masqués à l’écran et apparaître uniquement lors de la navigation au clavier.  **Exemple&amp;nbsp;:**   Des liens d’évitement («&amp;nbsp;Aller à la navigation&amp;nbsp;», «&amp;nbsp;Aller au contenu&amp;nbsp;») sont disponibles sur ce site. Pour les faire apparaître, placer le focus en haut de la page en cliquant sur la barre d’adresse de votre navigateur par exemple, puis appuyer plusieurs fois sur la touche &lt;kbd&gt;Tab&lt;/kbd&gt;.  ![capture d’écran du site orange.com](images/skiplink.png)  "
});

documentTitles["fondamentaux-nontech.html#14-identifier-et-conserver-la-coherence-des-regroupements-et-des-differentes-regions-de-la-page"] = "14. Identifier et conserver la cohérence des regroupements et des différentes régions de la page";
index.add({
    url: "fondamentaux-nontech.html#14-identifier-et-conserver-la-coherence-des-regroupements-et-des-differentes-regions-de-la-page",
    title: "14. Identifier et conserver la cohérence des regroupements et des différentes régions de la page",    
    body: "## 14. Identifier et conserver la cohérence des regroupements et des différentes régions de la page  **Cible&amp;nbsp;:** tout le monde et en particulier les personnes déficientes visuelles, cognitives ou ayant des troubles de l’attention.  **Quand&amp;nbsp;:** lors de la conception.  **Description&amp;nbsp;:**   Fournir des moyens d’identifier et de distinguer visuellement les différentes parties de la page et assurer la cohérence de ces régions ou regroupements dans toutes les pages.  **À vérifier&amp;nbsp;:**   - S’assurer que les mécanismes de navigation sont toujours situés au même endroit dans un ensemble de page. - S’assurer que les composants et les regroupements qui ont la même fonction, sont identifiés (visuellement) de la même façon et, dans la mesure du possible, respecter l’apparence classique de ces éléments pour ne pas perturber l’utilisateur habitué à un aspect spécifique de ceux-ci (par exemple, les liens sont généralement soulignés…). - S’assurer que les zones de la page sont clairement délimitées (bordures, filets, contraste suffisant…) ou qu’il y a un moyen de distinguer visuellement les groupes (sous-menu, liste déroulante…) ainsi que les différentes régions de la page.  **Objectif utilisateur&amp;nbsp;:** Permettre aux utilisateurs d’identifier et localiser les éléments d’interface dans toutes les pages.  **Exemple valide&amp;nbsp;:**    ![capture d’écran du site 100% pratique](images/groupement.jpg)    Ici, l’info bulle (&lt;i lang=\&quot;en\&quot;&gt;tooltip&lt;/i&gt;) est délimitée par une bordure bien visible et suffisamment contrastée, permettant de bien identifier son contenu.  **Exemple non-valide&amp;nbsp;:**    ![capture d’écran du site fnac.com](images/groupement2.jpg)    Il est très difficile d’associer les thèmes («&amp;nbsp;par région&amp;nbsp;», «&amp;nbsp;par genre&amp;nbsp;»…) et les sous-thèmes en colonnes, d’autant plus que les filets horizontaux sont trop peu contrastés.  "
});

documentTitles["fondamentaux-nontech.html#15-situer-explicitement-la-page-dans-le-site-et-fournir-plusieurs-moyens-dy-acceder"] = "15. Situer explicitement la page dans le site et fournir plusieurs moyens d'y accéder";
index.add({
    url: "fondamentaux-nontech.html#15-situer-explicitement-la-page-dans-le-site-et-fournir-plusieurs-moyens-dy-acceder",
    title: "15. Situer explicitement la page dans le site et fournir plusieurs moyens d'y accéder",    
    body: "## 15. Situer explicitement la page dans le site et fournir plusieurs moyens d'y accéder  **Cible&amp;nbsp;:** tout le monde et en particulier les personnes déficientes visuelles ou cognitives.  **Quand&amp;nbsp;:** lors de la conception.  **Description&amp;nbsp;:** Donner à l’utilisateur plusieurs moyens de situer et accéder à un contenu spécifique, localiser la page Web en cours de consultation dans un ensemble de pages. Lorsque la page est une étape dans un processus où les pages s’enchaînent les unes après les autres, ce critère peut être ignoré.  **À vérifier&amp;nbsp;:** S’assurer que plusieurs systèmes permettent de situer et accéder à une page ou un contenu dans le site&amp;nbsp;: un outil de recherche sur l’ensemble du site, un plan du site, un menu de navigation global, un fil d’Ariane…  **Objectif utilisateur&amp;nbsp;:** Permettre à tous les utilisateurs de se repérer afin d’accéder plus facilement à l’ensemble du contenu du site.  **Exemple valide&amp;nbsp;:** Le site propose, à la fois, une navigation principale complète et précise et un fil d’Ariane.  **Exemple invalide&amp;nbsp;:** Une application offre un menu de navigation parcellaire et aucun autre moyen pour  l’utilisateur de s’orienter dans les pages ou de repérer où se situe la page courante dans l’arborescence.  "
});

documentTitles["fondamentaux-nontech.html#16-eviter-les-captcha"] = "16. Eviter les captcha";
index.add({
    url: "fondamentaux-nontech.html#16-eviter-les-captcha",
    title: "16. Eviter les captcha",    
    body: "## 16. Eviter les captcha  **Cible&amp;nbsp;:** tous les utilisateurs en particulier, les personnes déficientes visuelles.   **Quand&amp;nbsp;:** lors de la conception et lors du développement.  **Description&amp;nbsp;:**   Les captcha sont souvent  la source de difficultés pour les utilisateurs. Si la mise en place d’un système anti-spam ne peut être évitée, il est souhaitable de s’orienter vers une solution plus souple pour l’utilisateur&amp;nbsp;:  - Double authentification&amp;nbsp;; - Champ de formulaire caché à laisser vide (technique du &lt;span lang=\&quot;en\&quot;&gt;honeypot&lt;/span&gt;), non-visibles pour l’utilisateur&amp;nbsp;; - Mise à disposition d'un support téléphonique afin de s'assurer que le client est une vraie personne&amp;nbsp;; - Un contrôle permettant de s'assurer qu'une même combinaison &lt;abbr&gt;IP&lt;/abbr&gt;/&lt;i lang=\&quot;en\&quot;&gt;User agent&lt;/i&gt; ne tente pas de soumettre le formulaire plus de N fois par seconde.  Si aucune autre alternative n’est possible, il est indispensable de prévoir une alternative pour les captcha uniquement visuels ou sonores en proposant une combinaison de captcha&amp;nbsp;:  - un captcha  audio&amp;nbsp;+ visuel, - des tests logiques (question dont la réponse est évidente, test  mathématique simple…)&amp;nbsp;+ captcha visuel clasique - … &lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2016  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt;"
});



documentTitles["exigences.html#referentiels-complets-daccessibilite-web"] = "Référentiels complets d’accessibilité web";
index.add({
    url: "exigences.html#referentiels-complets-daccessibilite-web",
    title: "Référentiels complets d’accessibilité web",    
    body: "# Référentiels complets d’accessibilité web &lt;script&gt;$(document).ready(function () {     setBreadcrumb([{\&quot;label\&quot;:\&quot;Référentiels complets\&quot;}]); });&lt;/script&gt; "
});

documentTitles["exigences.html#le-referentiel-abbrwcagabbr"] = "Le référentiel &lt;abbr&gt;WCAG&lt;/abbr&gt;";
index.add({
    url: "exigences.html#le-referentiel-abbrwcagabbr",
    title: "Le référentiel &lt;abbr&gt;WCAG&lt;/abbr&gt;",    
    body: "## Le référentiel &lt;abbr&gt;WCAG&lt;/abbr&gt;  Pour les exigences d’accessibilité interne d’Orange, nous avons choisi de nous appuyer sur les [&lt;span lang=\&quot;en\&quot;&gt;Web Content Accessibility Guidelines&lt;/span&gt; v2](http://www.w3.org/Translations/WCAG20-fr/) (&lt;abbr&gt;WCAG&lt;/abbr&gt; 2). Il s’agit des recommandations internationales éditées par le groupe de travail &lt;span lang=\&quot;en\&quot;&gt;Web Accessibility Initiative&lt;/span&gt; (&lt;abbr&gt;WAI&lt;/abbr&gt;) du &lt;span lang=\&quot;en\&quot;&gt;World Wide Web Consortium&lt;/span&gt; (&lt;abbr&gt;W3C&lt;/abbr&gt;) qui sont aussi les normes ISO 40500:2012.  Le niveau d’accessibilité demandé à toute interface &lt;abbr&gt;HTML&lt;/abbr&gt; par le groupe Orange est **le respect des critères du niveau AA des &lt;span lang=\&quot;en\&quot;&gt;Web Content Accessibility Guidelines&lt;/span&gt; (&lt;abbr&gt;WCAG&lt;/abbr&gt;) 2.0, sans point bloquant** suite à un test utilisateur d’aide technique pour les principaux scénarios d’utilisation des fonctionnalités du site ou de l’application.  Pour les solutions à mettre en place afin de respecter cet objectif, nous vous conseillons la consultation des [critères incontournables](./fondamentaux.html) et des [exemples](./exemples.html) de ce site. Vous pouvez aussi utiliser les [notices Accede-Web](http://www.accede-web.com/notices/) cf. ci-dessous.    "
});

documentTitles["exigences.html#le-referentiel-general-daccessibilite-des-administrations-abbrrgaaabbr"] = "Le référentiel général d’accessibilité des administrations (&lt;abbr&gt;RGAA&lt;/abbr&gt;)";
index.add({
    url: "exigences.html#le-referentiel-general-daccessibilite-des-administrations-abbrrgaaabbr",
    title: "Le référentiel général d’accessibilité des administrations (&lt;abbr&gt;RGAA&lt;/abbr&gt;)",    
    body: "## Le référentiel général d’accessibilité des administrations (&lt;abbr&gt;RGAA&lt;/abbr&gt;)  Si vous êtes familiarisé avec le [Référentiel Général d’Accessibilité des Administrations](http://references.modernisation.gouv.fr/referentiel) (&lt;abbr&gt;RGAA&lt;/abbr&gt;), celui-ci peut être utilisé pour effectuer les tests d’accessibilité.  Il s’agit du référentiel officiel permettant de s’assurer qu’un site d’état et de collectivités territoriales est en conformité avec l’[article 47 de la loi de février 2005 pour l’égalité des droits et des chances, la participation et la citoyenneté des personnes handicapées](http://www.legifrance.gouv.fr/affichTexteArticle.do?idArticle=JORFARTI000001290363&amp;cidTexte=JORFTEXT000000809647).  Le &lt;abbr&gt;RGAA&lt;/abbr&gt; est une méthode d’implémentation des &lt;span lang=\&quot;en\&quot;&gt;Web Content Accessibility Guidelines&lt;/span&gt; v2 (&lt;abbr&gt;WCAG&lt;/abbr&gt; 2). Un site conforme au &lt;abbr&gt;RGAA&lt;/abbr&gt; est également conforme aux &lt;abbr&gt;WCAG&lt;/abbr&gt;2.    "
});

documentTitles["exigences.html#les-notices-accede-web"] = "Les notices Accede-Web";
index.add({
    url: "exigences.html#les-notices-accede-web",
    title: "Les notices Accede-Web",    
    body: "## Les notices Accede-Web  Le site [Accede-Web](http://accede-web.com/) propose d’excellentes notices sur l’accessibilité au format Web et &lt;abbr&gt;PDF&lt;/abbr&gt;. Celles-ci sont très pratiques, pédagogiques et émanent de la société Atalan, d’un collectif de grandes entreprises ainsi que d’écoles et d’associations de personnes en situation de handicap.  Ces notices ont été traduites en anglais et font consensus dans le domaine de l’accessibilité numérique comme une source de bonnes pratiques, complète et de qualité. Ces notices sont mises à jour régulièrement pour coller à l’évolution des technologies (navigateurs, aides techniques…).  &lt;div class=\&quot;perso col-sm-12 col-md-6 col-lg-3\&quot;&gt;     ![](./images/perso1.png)      &lt;a href=\&quot;http://www.accede-web.com/notices/graphique/\&quot; class=\&quot;btn btn-info\&quot;&gt;Notice d’accessibilité pour la conception fonctionnelle et graphique&lt;/a&gt; &lt;/div&gt; &lt;div class=\&quot;perso col-sm-12 col-md-6 col-lg-3\&quot;&gt;     ![](./images/perso2.png)         &lt;a href=\&quot;http://www.accede-web.com/notices/editoriale/\&quot; class=\&quot;btn btn-info\&quot;&gt;Notice d’accessibilité éditoriale (modèle)&lt;/a&gt; &lt;/div&gt; &lt;div class=\&quot;perso col-sm-12 col-md-6 col-lg-3\&quot;&gt;     ![](./images/perso3.png)       &lt;a href=\&quot;http://www.accede-web.com/notices/html-css-javascript/\&quot; class=\&quot;btn btn-info\&quot;&gt;Notice d’accessibilité &lt;abbr&gt;HTML&lt;/abbr&gt;, &lt;abbr&gt;CSS&lt;/abbr&gt; et JavaScript&lt;/a&gt; &lt;/div&gt; &lt;div class=\&quot;perso col-sm-12 col-md-6 col-lg-3\&quot;&gt;     ![](./images/perso4.png)       &lt;a href=\&quot;http://www.accede-web.com/notices/interface-riche/\&quot; class=\&quot;btn btn-info\&quot;&gt;Notice d’accessibilité pour les composants d’interfaces riches&lt;/a&gt; &lt;/div&gt;        &lt;br&gt;&amp;nbsp; &lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2016  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt;"
});



documentTitles["htmlaria.html#abbrhtml5abbr-abbrariaabbr"] = "&lt;abbr&gt;HTML5&lt;/abbr&gt; &amp; &lt;abbr&gt;ARIA&lt;/abbr&gt;";
index.add({
    url: "htmlaria.html#abbrhtml5abbr-abbrariaabbr",
    title: "&lt;abbr&gt;HTML5&lt;/abbr&gt; &amp; &lt;abbr&gt;ARIA&lt;/abbr&gt;",    
    body: "# &lt;abbr&gt;HTML5&lt;/abbr&gt; &amp; &lt;abbr&gt;ARIA&lt;/abbr&gt;  &lt;script&gt;$(document).ready(function () {     setBreadcrumb([{\&quot;label\&quot;:\&quot;&lt;abbr&gt;HTML5&lt;/abbr&gt; &amp; &lt;abbr&gt;ARIA&lt;/abbr&gt;\&quot;}]); });&lt;/script&gt;  "
});

documentTitles["htmlaria.html#introduction"] = "Introduction";
index.add({
    url: "htmlaria.html#introduction",
    title: "Introduction",    
    body: "## Introduction  Les sites internet sont de plus en plus dynamiques (chargement asynchrone, génération dynamique de contenu) et interactifs (composants d’interface complexes&amp;nbsp;: &lt;i lang=\&quot;en\&quot;&gt;slider&lt;/i&gt;, &lt;i lang=\&quot;en\&quot;&gt;datepicker&lt;/i&gt;…). Il est donc très difficile voire impossible de rendre ce genre de composants accessibles avec le &lt;abbr&gt;HTML&lt;/abbr&gt; classique.   Même avec l’évolution due au &lt;abbr&gt;HTML5&lt;/abbr&gt;, on manque encore d’informations sémantiques à fournir aux aides techniques (lecteurs d’écran, loupes logicielles…), la navigation clavier est souvent impossible, la gestion complexe du focus clavier est absente et les mises à jour des régions dynamiques ne sont pas signalées.  "
});

documentTitles["htmlaria.html#quest-ce-que-cestnbsp"] = "Qu’est-ce que c’est&amp;nbsp;?";
index.add({
    url: "htmlaria.html#quest-ce-que-cestnbsp",
    title: "Qu’est-ce que c’est&amp;nbsp;?",    
    body: "## Qu’est-ce que c’est&amp;nbsp;?  Pour remédier à ces limitations, le &lt;abbr&gt;W3c&lt;/abbr&gt;/&lt;abbr&gt;WAI&lt;/abbr&gt; a officiellement publié une recommandation appelée &lt;abbr&gt;ARIA&lt;/abbr&gt;, pour &lt;i lang=\&quot;en\&quot;&gt;Accessible Rich Internet Applications&lt;/i&gt;, ainsi qu’une suite de documents traitant de l’utilisation d’&lt;abbr&gt;ARIA&lt;/abbr&gt;.  &lt;abbr&gt;ARIA&lt;/abbr&gt; est une sur-couche sémantique à base de couples attribut/valeur utilisables dans les langages de balisage tels que &lt;abbr&gt;HTML&lt;/abbr&gt;, &lt;abbr&gt;SVG&lt;/abbr&gt;, &lt;abbr&gt;XML&lt;/abbr&gt;, etc. Cette recommandation est composée de rôles, d’états et de propriétés qui vont spécifiquement interagir avec les aides techniques (&lt;abbr&gt;AT&lt;/abbr&gt;). Grâce à &lt;abbr&gt;ARIA&lt;/abbr&gt;, on peut décrire des éléments et leurs comportements en &lt;abbr&gt;HTML&lt;/abbr&gt; lorsqu’ils sont nativement non sémantiquement explicites, par exemple, des onglets, les arbres dépliants, des régions dynamiques, les info-bulles, les fenêtres modales. &lt;abbr&gt;ARIA&lt;/abbr&gt; définit également comment doit se comporter un composant d’interface avec le clavier afin d’homogénéiser l’expérience des utilisateurs qui naviguent au clavier. ** &lt;abbr&gt;ARIA&lt;/abbr&gt; prend tout son sens et exprime tout son potentiel lorsqu’il est utilisé dans du &lt;abbr&gt;HTML5&lt;/abbr&gt; **.  Aria ne rajoute aucun comportement particulier ni aucune présentation visuelle aux composants d’interface. Il faut donc toujours assurer la mise en forme grâce aux &lt;abbr&gt;CSS&lt;/abbr&gt;, le contrôle du contenu et la gestion de l’interactivité via Javascript.  "
});

documentTitles["htmlaria.html#le-support"] = "Le support";
index.add({
    url: "htmlaria.html#le-support",
    title: "Le support",    
    body: "## Le support  Le support d’&lt;abbr&gt;ARIA&lt;/abbr&gt; s’améliore constamment et est déjà présent depuis longtemps&amp;nbsp;: - Dans les navigateurs modernes (Firefox &gt;=3.0, Chrome &gt;=16, Safari &gt;=4, Opera &gt;=9.5, Internet Explorer 8 pour un support basique, Internet Explorer &gt;=9 et Edge pour un support avancé). - Dans les aides techniques (&lt;abbr&gt;NVDA&lt;/abbr&gt; &gt;=2010, Orca &gt;= 2 + Firefox uniquement, VoiceOver &lt;abbr&gt;OSX&lt;/abbr&gt; &gt;=10.5, &lt;abbr&gt;iOS&lt;/abbr&gt; &gt;=4, &lt;abbr&gt;JAWS&lt;/abbr&gt; &gt;=8, Window-Eyes &gt;=7, ZoomText 10 pour un support basique, ZoomText &gt;=11 pour un support avancé).    De plus, l’efficacité optimale de la prise en charge d’&lt;abbr&gt;ARIA&lt;/abbr&gt; dépend du couple navigateur&amp;nbsp;/ aide technique&amp;nbsp;: Firefox avec &lt;abbr&gt;NVDA&lt;/abbr&gt;, Jaws avec Internet Explorer et Safari avec VoiceOver, par exemple.  "
});

documentTitles["htmlaria.html#faut-il-lutilisernbsp"] = "Faut-il l’utiliser&amp;nbsp;?";
index.add({
    url: "htmlaria.html#faut-il-lutilisernbsp",
    title: "Faut-il l’utiliser&amp;nbsp;?",    
    body: "## Faut-il l’utiliser&amp;nbsp;?  Globalement, &lt;abbr&gt;ARIA&lt;/abbr&gt; améliore l’accessibilité pour des composants pas nativement présents en &lt;abbr&gt;HTML&lt;/abbr&gt; (ou pas accessibles notamment certains éléments &lt;abbr&gt;HTML5&lt;/abbr&gt;). La robustesse et l’interopérabilité d’&lt;abbr&gt;ARIA&lt;/abbr&gt; sont maintenant suffisantes pour qu’[une vingtaine de techniques WCAG 2.0 soient spécifiques à &lt;abbr&gt;ARIA&lt;/abbr&gt;](https://www.w3.org/&lt;abbr&gt;WAI&lt;/abbr&gt;/GL/WCAG20-TECHS/aria.html) (contre 10 techniques &lt;abbr&gt;HTML5&lt;/abbr&gt;). En conséquence, pour des applications Internet riches, l’&lt;abbr&gt;ARIA&lt;/abbr&gt; est incontournable pour leur mise en accessibilité.  Dans tous les cas, il faut tester les développements sur les environnements cibles (couple navigateurs&amp;nbsp;/ aides techniques). C’est un gros travail absolument nécessaire pour les cas complexes car sur un site ou une application internet classique, il faut, à minima, tester avec Safari/VoiceOver, Jaws/Internet Explorer et Firefox/&lt;abbr&gt;NVDA&lt;/abbr&gt;.  Dans un environnement maîtrisé (intranet), les environnements cibles sont connus et en nombre fini, on peut donc statuer plus facilement&amp;nbsp;!  "
});

documentTitles["htmlaria.html#webographie"] = "Webographie";
index.add({
    url: "htmlaria.html#webographie",
    title: "Webographie",    
    body: "## Webographie * [Page de synthèse sur «&amp;nbsp;&lt;i lang=\&quot;en\&quot;&gt;&lt;abbr&gt;ARIA&lt;/abbr&gt; in &lt;abbr&gt;HTML&lt;/abbr&gt;&lt;/i&gt;&amp;nbsp;»](https://specs.webplatform.org/html-aria/webspecs/master/) * &lt;abbr&gt;W3c&lt;/abbr&gt;&amp;nbsp;:   * [Introduction à &lt;abbr&gt;ARIA&lt;/abbr&gt;](http://www.w3.org/TR/wai-aria/introduction)   * [Spécification &lt;abbr&gt;ARIA&lt;/abbr&gt;](http://www.w3.org/TR/wai-aria/)   * [Mettre en place &lt;abbr&gt;ARIA&lt;/abbr&gt;](http://www.w3.org/TR/wai-aria-practices/), attention «&amp;nbsp;&lt;i lang=\&quot;en\&quot;&gt;working draft&lt;/i&gt;&amp;nbsp;»   * [Utiliser &lt;abbr&gt;ARIA&lt;/abbr&gt; en &lt;abbr&gt;HTML&lt;/abbr&gt; (5)](http://www.w3.org/TR/aria-in-html/) , attention «&amp;nbsp;&lt;i lang=\&quot;en\&quot;&gt;working draft&lt;/i&gt;&amp;nbsp;»   * [Techniques &lt;abbr&gt;ARIA&lt;/abbr&gt; dans les &lt;abbr&gt;WCAG&lt;/abbr&gt; 2](https://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/aria.html) * [Introduction à &lt;abbr&gt;ARIA&lt;/abbr&gt; chez Site Point](http://www.sitepoint.com/introduction-wai-aria/) * [Introduction et liste de liens vers des sources sur &lt;abbr&gt;ARIA&lt;/abbr&gt;](http://developer.mozilla.org/fr/docs/Accessibilit%C3%A9/ARIA)  &lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2016  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt;"
});



documentTitles["methodes-outils.html#methodes-et-outils-de-test"] = "Méthodes et outils de test";
index.add({
    url: "methodes-outils.html#methodes-et-outils-de-test",
    title: "Méthodes et outils de test",    
    body: "# Méthodes et outils de test  &lt;script&gt;$(document).ready(function () {     setBreadcrumb([{\&quot;label\&quot;:\&quot;Outils de test\&quot;}]); });&lt;/script&gt;  Vous trouverez ci-dessous des articles décrivant les méthodes et outils utiles pour tester l’accessibilité de vos pages web.  "
});

documentTitles["methodes-outils.html#tests-manuel-et-outils-dassistance"] = "Tests manuel et outils d’assistance";
index.add({
    url: "methodes-outils.html#tests-manuel-et-outils-dassistance",
    title: "Tests manuel et outils d’assistance",    
    body: "## Tests manuel et outils d’assistance  [Navigation au clavier](./methodes-outils-clavier.html)&amp;nbsp;: Liste des principaux raccourcis pour naviguer au clavier dans une page web.  [Agrandissement de la taille du texte](./methodes-outils-zoom.html)&amp;nbsp;:  Un guide sur la gestion du zoom.  [Navigation à l’aide d’un lecteur d’écran](./methodes-outils-lecteur-ecran.html)&amp;nbsp;:  Les principaux lecteurs d’écrans utilisés.  "
});

documentTitles["methodes-outils.html#outils-de-test-automatises"] = "Outils de test automatisés";
index.add({
    url: "methodes-outils.html#outils-de-test-automatises",
    title: "Outils de test automatisés",    
    body: "## Outils de test automatisés [Extensions pour navigateur](./methodes-outils-extensions.html)&amp;nbsp;:  Certaines extensions permettent d’effectuer des tests automatiques sur la page en cours de consultation.  "
});

documentTitles["methodes-outils.html#test-des-criteres"] = "Test des critères";
index.add({
    url: "methodes-outils.html#test-des-criteres",
    title: "Test des critères",    
    body: "## Test des critères [Mesurer le niveau de contraste des couleurs](./methodes-outils-contrastes.html)&amp;nbsp;:  Présentation de l’outil &lt;i lang=\&quot;en\&quot;&gt;Colour Contrast Analyser&lt;/i&gt;.  [Accéder à la liste des titres de la page (balises `H1` à `H6`)](./methodes-outils-liste-titres.html)&amp;nbsp;:  Les différentes façons d’accéder à la liste des titres d’une page.  &amp;nbsp; &lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2016  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt;"
});



documentTitles["orange-boosted.html#orange-boosted"] = "Orange Boosted";
index.add({
    url: "orange-boosted.html#orange-boosted",
    title: "Orange Boosted",    
    body: "# Orange Boosted    &lt;script&gt;$(document).ready(function () {     setBreadcrumb([{\&quot;label\&quot;:\&quot;Orange Boosted\&quot;}]); });&lt;/script&gt;  &lt;h2 id=\&quot;boosted\&quot; lang=\&quot;en\&quot;&gt;Orange Boosted&lt;/h2&gt; "
});

documentTitles["orange-boosted.html#presentation"] = "Présentation";
index.add({
    url: "orange-boosted.html#presentation",
    title: "Présentation",    
    body: "### Présentation Orange &lt;span lang=\&quot;en\&quot;&gt;Boosted&lt;/span&gt; est un framework &lt;abbr&gt;HTML&lt;/abbr&gt;, &lt;abbr&gt;CSS&lt;/abbr&gt; et Javascript basé sur le très populaire &lt;span lang=\&quot;en\&quot;&gt;[Twitter Boostrap](http://getbootstrap.com/)&lt;/span&gt;. Il permet la mise en place rapide d’un site web responsive et accessible aux couleurs de la charte Orange.  "
});

documentTitles["orange-boosted.html#pourquoi-lutiliser"] = "Pourquoi l’utiliser ?";
index.add({
    url: "orange-boosted.html#pourquoi-lutiliser",
    title: "Pourquoi l’utiliser ?",    
    body: "### Pourquoi l’utiliser ?  - Basé sur &lt;span lang=\&quot;en\&quot;&gt;[Twitter Boostrap](http://getbootstrap.com/)&lt;/span&gt;  - À la charte Orange, la Brand  - Amélioré avec des composants **plus accessibles**  - Enrichi de composants spécifiques à Orange  - Illustré de pages d’exemples  - &lt;span lang=\&quot;en\&quot;&gt;Open source&lt;/span&gt; sous Licence &lt;abbr lang=\&quot;en\&quot;&gt;MIT&lt;/abbr&gt;  "
});

documentTitles["orange-boosted.html#site-officiel"] = "Site officiel";
index.add({
    url: "orange-boosted.html#site-officiel",
    title: "Site officiel",    
    body: "### Site officiel  &lt;span lang=\&quot;en\&quot;&gt;[Orange Boosted with Bootstrap](http://boosted.orange.com/)&lt;/span&gt;      &lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2016  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt;"
});



documentTitles["confort-plus.html#confort"] = "Confort+";
index.add({
    url: "confort-plus.html#confort",
    title: "Confort+",    
    body: "# Confort+      &lt;script&gt;$(document).ready(function () {     setBreadcrumb([{\&quot;label\&quot;:\&quot;Confort+\&quot;}]); });&lt;/script&gt;     "
});

documentTitles["confort-plus.html#orange-confort"] = "Orange Confort+";
index.add({
    url: "confort-plus.html#orange-confort",
    title: "Orange Confort+",    
    body: "## Orange Confort+  "
});

documentTitles["confort-plus.html#presentation"] = "Présentation";
index.add({
    url: "confort-plus.html#presentation",
    title: "Présentation",    
    body: "### Présentation Le service Orange Confort+ permet d’adapter l’affichage d’un site web pour améliorer le confort lors de la consultation. Il dispose d’un vaste choix de réglages qui peuvent améliorer le confort de tous les utilisateurs. Il apporte également une aide précieuse aux utilisateurs ayant un handicap moteur, visuel ou cognitif.  Vous pouvez tester le service en cliquant sur le lien «&amp;nbsp;Confort+&amp;nbsp;» situé en haut à droite de cette page.  "
});

documentTitles["confort-plus.html#ses-principaux-atouts"] = "Ses principaux atouts :";
index.add({
    url: "confort-plus.html#ses-principaux-atouts",
    title: "Ses principaux atouts :",    
    body: "### Ses principaux atouts : - Utile pour tous les utilisateurs - Prise en charge de différents handicaps - S’intègre sur tous les sites web - Également disponible sous forme d’extensions pour navigateur - &lt;span lang=\&quot;en\&quot;&gt;Open source&lt;/span&gt; sous Licence &lt;abbr lang=\&quot;en\&quot;&gt;MIT&lt;/abbr&gt;   ![capture d’écran du service confort plus](./images/confort-plus.png)  "
});

documentTitles["confort-plus.html#extensions-a-installer-dans-votre-navigateur"] = "Extensions à installer dans votre navigateur";
index.add({
    url: "confort-plus.html#extensions-a-installer-dans-votre-navigateur",
    title: "Extensions à installer dans votre navigateur",    
    body: "### Extensions à installer dans votre navigateur - [Firefox](https://addons.mozilla.org/fr/firefox/addon/orange-confort) - [Chrome](https://chrome.google.com/webstore/detail/orange-confort%2B/ddnpdohiipephjpdpohikkamhdikbldp) - [IE11, 64 ou 32 bits](http://confort-plus.orange.com/)  "
});

documentTitles["confort-plus.html#site-officiel"] = "Site officiel";
index.add({
    url: "confort-plus.html#site-officiel",
    title: "Site officiel",    
    body: "### Site officiel [Orange Confort+](http://confort-plus.orange.com/)      &lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2016  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt;"
});



documentTitles["methodes-outils-contrastes.html#mesurer-le-niveau-de-contraste-des-couleurs"] = "Mesurer le niveau de contraste des couleurs";
index.add({
    url: "methodes-outils-contrastes.html#mesurer-le-niveau-de-contraste-des-couleurs",
    title: "Mesurer le niveau de contraste des couleurs",    
    body: "# Mesurer le niveau de contraste des couleurs  &lt;script&gt;$(document).ready(function () {     setBreadcrumb([         {\&quot;label\&quot;:\&quot;Outils de test\&quot;, \&quot;url\&quot;: \&quot;./methodes-outils.html\&quot;},         {\&quot;label\&quot;:\&quot;Mesurer le niveau de contraste des couleurs\&quot;}]); });&lt;/script&gt;  &lt;span data-menuitem=\&quot;methodes-outils\&quot;&gt;&lt;/span&gt;  Le niveau de contraste peut être mesuré simplement à l’aide de l’outil [&lt;i lang=\&quot;en\&quot;&gt;Colour Contrast Analyser&lt;/i&gt;](http://www.paciellogroup.com/resources/contrastanalyser/).  Cet outil est disponible gratuitement pour Mac et Windows. Il permet de mesurer la différence de contraste entre deux couleurs (la couleur du texte et la couleur du fond). Celles-ci peuvent être sélectionnées à l’aide d’une pipette directement dans une page web, une image ou une application.    ![capture d’écran de l’outil colour contrast analyser](./images/contraste2.png)&lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2016  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt;"
});



documentTitles["methodes-outils-clavier.html#navigation-a-laide-du-clavier"] = "Navigation à l’aide du clavier";
index.add({
    url: "methodes-outils-clavier.html#navigation-a-laide-du-clavier",
    title: "Navigation à l’aide du clavier",    
    body: "# Navigation à l’aide du clavier  &lt;script&gt;$(document).ready(function () {     setBreadcrumb([         {\&quot;label\&quot;:\&quot;Outils de test\&quot;, \&quot;url\&quot;: \&quot;./methodes-outils.html\&quot;},         {\&quot;label\&quot;:\&quot;Navigation à l’aide du clavier\&quot;}]); });&lt;/script&gt;  &lt;span data-menuitem=\&quot;methodes-outils\&quot;&gt;&lt;/span&gt;  La navigation dans une page web doit être possible à l’aide du clavier seul, notamment pour les personnes qui ne peuvent pas utiliser de souris. Cette fonctionnalité est prise en charge directement par le navigateur. Il est tout de même important de vérifier son fonctionnement, car certains développements peuvent entraîner des difficultés pour naviguer correctement dans la page.    Pour tester si votre service est accessible à l’aide du clavier, vous pouvez tenter de naviguer sans votre souris. Toutes les fonctionnalités disponibles habituellement doivent rester accessible.   ** Rappel&amp;nbsp;: **le focus doit rester suffisamment visible sur tous les éléments recevant le focus.  "
});

documentTitles["methodes-outils-clavier.html#liste-des-raccourcis-clavier-principauxnbsp"] = "Liste des raccourcis clavier principaux&amp;nbsp;:";
index.add({
    url: "methodes-outils-clavier.html#liste-des-raccourcis-clavier-principauxnbsp",
    title: "Liste des raccourcis clavier principaux&amp;nbsp;:",    
    body: "## Liste des raccourcis clavier principaux&amp;nbsp;:  - La touche `TAB`&amp;nbsp;: pour faire avancer le focus. - Les touches `maj+TAB`&amp;nbsp;: pour faire reculer le focus. - La touche entrée pour activer l’élément qui a le focus (lien, bouton, menu…). - La barre espace pour cocher/décocher une case à cocher. - Les flèches directionnelles pour modifier la sélection des boutons radio, pour se déplacer dans une liste déroulante, ou faire défiler les ascenseurs (&lt;i lang=\&quot;en\&quot;&gt;scrollbar&lt;/i&gt;) lorsque ceux-ci sont présents.  ** Remarque&amp;nbsp;: sur Mac la navigation au clavier doit être activée au préalable. **   Dans Safari&amp;nbsp;: Edition &amp;gt; Préférences… &amp;gt; Avancées   Puis cocher la case *«&amp;nbsp;La touche TAB permet de naviguer parmi les objets des pages web&amp;nbsp;»*. &lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2016  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt;"
});



documentTitles["methodes-outils-liste-titres.html#acceder-a-la-liste-des-titres-de-la-page-balises-h1-a-h6"] = "Accéder à la liste des titres de la page (balises `H1` à `H6`)";
index.add({
    url: "methodes-outils-liste-titres.html#acceder-a-la-liste-des-titres-de-la-page-balises-h1-a-h6",
    title: "Accéder à la liste des titres de la page (balises `H1` à `H6`)",    
    body: "# Accéder à la liste des titres de la page (balises `H1` à `H6`)  &lt;script&gt;$(document).ready(function () {     setBreadcrumb([         {\&quot;label\&quot;:\&quot;Outils de test\&quot;, \&quot;url\&quot;: \&quot;./methodes-outils.html\&quot;},         {\&quot;label\&quot;:\&quot;Accéder à la liste des titres de la page\&quot;}]); });&lt;/script&gt;  &lt;span data-menuitem=\&quot;methodes-outils\&quot;&gt;&lt;/span&gt;  Pour vérifier si des titres ont été correctement positionnés dans la page, il existe plusieurs solutions&amp;nbsp;: - Parcourir le code de la page à la main. - Utiliser une extension telle que [&lt;span lang=\&quot;en\&quot;&gt;HeadingsMap&lt;/span&gt;](https://addons.mozilla.org/fr/firefox/addon/headingsmap/) pour Firefox, [&lt;span lang=\&quot;en\&quot;&gt;Wave&lt;/span&gt; pour Chrome](http://wave.webaim.org/extension/) ou [&lt;span lang=\&quot;en\&quot;&gt;Web Developper Toolbar&lt;/span&gt;](http://chrispederick.com/work/web-developer/). - Accéder à la liste des titres depuis un lecteur d'écran (cf. chapitre [lecteur d'écran](./methodes-outils-lecteur-ecran.html)).  La dernière solution reste la plus fiable, car les extensions ne prennent pas toujours en compte les &lt;abbr&gt;CSS&lt;/abbr&gt; et les éventuels attributs &lt;abbr&gt;ARIA&lt;/abbr&gt; positionnés sur les balises &lt;abbr&gt;HTML&lt;/abbr&gt;.   Vous pouvez trouver des informations complémentaires dans l'article : [navigation à l'aide d'un lecteur d'écran](./methodes-outils-lecteur-ecran.html).  &lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2016  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt;"
});



documentTitles["methodes-outils-lecteur-ecran.html#navigation-a-laide-dun-lecteur-decran"] = "Navigation à l’aide d’un lecteur d’écran";
index.add({
    url: "methodes-outils-lecteur-ecran.html#navigation-a-laide-dun-lecteur-decran",
    title: "Navigation à l’aide d’un lecteur d’écran",    
    body: "# Navigation à l’aide d’un lecteur d’écran  &lt;script&gt;$(document).ready(function () {     setBreadcrumb([         {\&quot;label\&quot;:\&quot;Outils de test\&quot;, \&quot;url\&quot;: \&quot;./methodes-outils.html\&quot;},         {\&quot;label\&quot;:\&quot;Navigation à l’aide d’un lecteur d’écran\&quot;}]); });&lt;/script&gt;  &lt;span data-menuitem=\&quot;methodes-outils\&quot;&gt;&lt;/span&gt;  Un lecteur d’écran (appelé aussi revue d’écran) est un logiciel de synthèse vocale utilisé par les personnes malvoyantes et non-voyantes. Il permet à l’utilisateur d’interagir avec l’ordinateur et d’écouter ce qui est affiché sous forme textuelle (le plus souvent) à l’écran. Il existe plusieurs lecteurs d’écran, les plus connus sont&amp;nbsp;: - [&lt;abbr&gt;NVDA&lt;/abbr&gt;](http://nvda-fr.org/)&amp;nbsp;: gratuit disponible pour Windows. - [&lt;abbr&gt;JAWS&lt;/abbr&gt;](http://www.freedomscientific.com/Downloads/JAWS)&amp;nbsp;: payant disponible pour Windows. En mode démonstration, vous pouvez l’utiliser 40 min, après quoi il faudra redémarrer votre ordinateur pour l’utiliser à nouveau. - [VoiceOver](http://www.apple.com/fr/accessibility/osx/voiceover/)&amp;nbsp;: disponible pour Mac. Il est gratuit et intégré directement au système MacOS.  "
});

documentTitles["methodes-outils-lecteur-ecran.html#prise-en-main-de-abbrnvdaabbr"] = "Prise en main de &lt;abbr&gt;NVDA&lt;/abbr&gt;";
index.add({
    url: "methodes-outils-lecteur-ecran.html#prise-en-main-de-abbrnvdaabbr",
    title: "Prise en main de &lt;abbr&gt;NVDA&lt;/abbr&gt;",    
    body: "## Prise en main de &lt;abbr&gt;NVDA&lt;/abbr&gt;  &lt;abbr&gt;NVDA&lt;/abbr&gt; est un lecteur d’écran gratuit disponible pour Windows.  "
});

documentTitles["methodes-outils-lecteur-ecran.html#installation"] = "Installation";
index.add({
    url: "methodes-outils-lecteur-ecran.html#installation",
    title: "Installation",    
    body: "### Installation  Télécharger le fichier d’installation de &lt;abbr&gt;NVDA&lt;/abbr&gt; sur le [site officiel](http://nvda-fr.org/).  La voix par défaut n’est pas de très bonne qualité mais elle est très réactive. Ce n’est pas indispensable, mais le téléchargement d’une voix de meilleure qualité est conseillé comme celle d’[Hortense](https://www.nvda-fr.org/voix/). Il suffit ensuite de se rendre dans les préférences de &lt;abbr&gt;NVDA&lt;/abbr&gt; pour modifier les paramètres vocaux.  "
});

documentTitles["methodes-outils-lecteur-ecran.html#configuration"] = "Configuration";
index.add({
    url: "methodes-outils-lecteur-ecran.html#configuration",
    title: "Configuration",    
    body: "### Configuration  Au premier démarrage, &lt;abbr&gt;NVDA&lt;/abbr&gt; est configuré pour vocaliser tout ce que survole le pointeur de la souris. Ce mode est utilisé par certaines personnes malvoyantes qui ont des difficultés à lire les textes affichés à l’écran par exemple. Il est conseillé de désactiver cette option si vous utilisez &lt;abbr&gt;NVDA&lt;/abbr&gt; pour faire des tests d’accessibilité sur vos pages.  Pour désactiver ce mode de navigation, faites un clic droit sur l’icône de &lt;abbr&gt;NVDA&lt;/abbr&gt; dans la barre Windows à côté de l’heure. Puis aller dans *Préférences &amp;gt; Paramètres* de la souris et désactiver la case «&amp;nbsp;Activer le suivi de la souris&amp;nbsp;».  Enfin, il est conseillé de modifier le mode de lecture par défaut. Pour cela, se positionner sur une page web et utiliser le raccourci clavier suivant &lt;kbd&gt;INS+v&lt;/kbd&gt; pour désactiver la «&amp;nbsp;disposition telle qu’à l’écran&amp;nbsp;» puis enregistrer cette configuration par défaut à l’aide du raccourci &lt;kbd&gt;INS+Ctrl+c&lt;/kbd&gt;.   "
});

documentTitles["methodes-outils-lecteur-ecran.html#navigation-dans-les-pages-web"] = "Navigation dans les pages Web";
index.add({
    url: "methodes-outils-lecteur-ecran.html#navigation-dans-les-pages-web",
    title: "Navigation dans les pages Web",    
    body: "### Navigation dans les pages Web  Voici les principaux raccourcis utiles pour tester la navigation au sein d’une page web à l’aide de &lt;abbr&gt;NVDA&lt;/abbr&gt;&amp;nbsp;: - &lt;kbd&gt;flèche haut&lt;/kbd&gt; et &lt;kbd&gt;flèche bas&lt;/kbd&gt; pour avancer ou reculer dans la lecture de la page. - &lt;kbd&gt;flèche droite&lt;/kbd&gt; et &lt;kbd&gt;flèche gauche&lt;/kbd&gt; pour avancer ou reculer d’un caractère - &lt;kbd&gt;Ctrl+Home&lt;/kbd&gt; pour se déplacer en haut de la page. - &lt;kbd&gt;Ctrl+End&lt;/kbd&gt; pour se déplacer en bas de la page. - &lt;kbd&gt;INS+F7&lt;/kbd&gt; pour afficher la liste des titres et la liste des liens. - &lt;kbd&gt;Ctrl&lt;/kbd&gt; pour faire taire &lt;abbr&gt;NVDA&lt;/abbr&gt;. - &lt;kbd&gt;INS+T&lt;/kbd&gt; pour faire lire le titre de la page. - &lt;kbd&gt;H&lt;/kbd&gt; et &lt;kbd&gt;maj+H&lt;/kbd&gt; pour passer au titre suivant ou au titre précédent (balises de titres `H1` à `H6`). - &lt;kbd&gt;B&lt;/kbd&gt; et &lt;kbd&gt;maj+B&lt;/kbd&gt; pour passer d’un bouton à l’autre. - &lt;kbd&gt;C&lt;/kbd&gt; et &lt;kbd&gt;maj+C&lt;/kbd&gt; pour passer d’une liste déroulante à une autre (&lt;i lang=\&quot;en\&quot;&gt;Combobox&lt;/i&gt;). - &lt;kbd&gt;D&lt;/kbd&gt; et &lt;kbd&gt;maj+D&lt;/kbd&gt; pour naviguer parmi les &lt;i lang=\&quot;en\&quot;&gt;landmarks&lt;/i&gt; &lt;abbr&gt;ARIA&lt;/abbr&gt;. - &lt;kbd&gt;E&lt;/kbd&gt; et &lt;kbd&gt;maj+E&lt;/kbd&gt; pour naviguer parmi les champs de texte. - &lt;kbd&gt;F&lt;/kbd&gt; et &lt;kbd&gt;maj+F&lt;/kbd&gt; pour naviguer parmi les formulaires. - &lt;kbd&gt;G&lt;/kbd&gt; et &lt;kbd&gt;maj+G&lt;/kbd&gt; pour naviguer parmi les images (&lt;i lang=\&quot;en\&quot;&gt;Graphics&lt;/i&gt;). - &lt;kbd&gt;I&lt;/kbd&gt; et &lt;kbd&gt;maj+I&lt;/kbd&gt; pour naviguer parmi les éléments d’une liste &lt;abbr&gt;HTML&lt;/abbr&gt;. - &lt;kbd&gt;K&lt;/kbd&gt; et &lt;kbd&gt;maj+K&lt;/kbd&gt; pour naviguer parmi les liens. - &lt;kbd&gt;L&lt;/kbd&gt; et &lt;kbd&gt;maj+L&lt;/kbd&gt; pour naviguer parmi les listes &lt;abbr&gt;HTML&lt;/abbr&gt;. - &lt;kbd&gt;M&lt;/kbd&gt; et &lt;kbd&gt;maj+M&lt;/kbd&gt; pour naviguer parmi les &lt;i lang=\&quot;en\&quot;&gt;frames&lt;/i&gt; et &lt;i lang=\&quot;en\&quot;&gt;iframes&lt;/i&gt;. - &lt;kbd&gt;O&lt;/kbd&gt; et &lt;kbd&gt;maj+M&lt;/kbd&gt; pour naviguer parmi les objets intégrés (Flash). Appuyer sur &lt;kbd&gt;INS+espace&lt;/kbd&gt; pour commencer l’interaction. &lt;kbd&gt;Echap&lt;/kbd&gt; pour terminer l’interaction. - &lt;kbd&gt;Q&lt;/kbd&gt; et &lt;kbd&gt;maj+Q&lt;/kbd&gt; pour naviguer parmi les citations (`blockquote`). - &lt;kbd&gt;R&lt;/kbd&gt; et &lt;kbd&gt;maj+R&lt;/kbd&gt; pour naviguer parmi les boutons radio. - &lt;kbd&gt;T&lt;/kbd&gt; et &lt;kbd&gt;maj+T&lt;/kbd&gt; pour naviguer parmi les tableaux (`table`). - &lt;kbd&gt;X&lt;/kbd&gt; et &lt;kbd&gt;maj+X&lt;/kbd&gt; pour naviguer parmi les cases à cocher. - &lt;kbd&gt;Barre espace&lt;/kbd&gt; pour cocher ou décocher une case à cocher. - &lt;kbd&gt;INS+maj+S&lt;/kbd&gt; permet de mettre en veille &lt;abbr&gt;NVDA&lt;/abbr&gt; uniquement dans l’application en cours. - &lt;kbd&gt;INS+Q&lt;/kbd&gt; pour quitter &lt;abbr&gt;NVDA&lt;/abbr&gt;.  À noter également que &lt;abbr&gt;NVDA&lt;/abbr&gt; dispose d’une visionneuse de parole (*Outils &amp;gt; Visionneuse de parole*), celle-ci permet d’afficher tout ce qui est vocalisé.  "
});

documentTitles["methodes-outils-lecteur-ecran.html#prise-en-main-de-jaws"] = "Prise en main de Jaws";
index.add({
    url: "methodes-outils-lecteur-ecran.html#prise-en-main-de-jaws",
    title: "Prise en main de Jaws",    
    body: "## Prise en main de Jaws  Jaws est un lecteur d’écran payant très utilisé, disponible pour Windows. Il est à utiliser en priorité avec Internet Explorer. En mode démonstration, vous pouvez l’utiliser 40 min, après quoi il faudra redémarrer votre ordinateur pour l’utiliser à nouveau.  "
});

documentTitles["methodes-outils-lecteur-ecran.html#installation"] = "Installation";
index.add({
    url: "methodes-outils-lecteur-ecran.html#installation",
    title: "Installation",    
    body: "### Installation   Vous pouvez télécharger Jaws directement depuis [le site de l’éditeur Freedom Scientific](http://www.freedomscientific.com/Downloads/JAWS).  "
});

documentTitles["methodes-outils-lecteur-ecran.html#navigation-dans-les-pages-web"] = "Navigation dans les pages Web";
index.add({
    url: "methodes-outils-lecteur-ecran.html#navigation-dans-les-pages-web",
    title: "Navigation dans les pages Web",    
    body: "### Navigation dans les pages Web  Voici les principaux raccourcis utiles pour tester la navigation au sein d’une page web à l’aide de Jaws&amp;nbsp;: - &lt;kbd&gt;flèche haut&lt;/kbd&gt; et &lt;kbd&gt;flèche bas&lt;/kbd&gt; pour avancer ou reculer dans la lecture de la page. - &lt;kbd&gt;INS + T&lt;/kbd&gt; pour faire lire le titre de la page. - &lt;kbd&gt;INS + F5&lt;/kbd&gt; pour afficher la liste des champs de formulaire. - &lt;kbd&gt;INS + F6&lt;/kbd&gt; pour afficher la liste des titres de la page. - &lt;kbd&gt;INS + F7&lt;/kbd&gt; pour afficher la liste des liens. - &lt;kbd&gt;Barre espace&lt;/kbd&gt; pour cocher ou décocher une case à cocher. - &lt;kbd&gt;Ctrl&lt;/kbd&gt; pour faire taire Jaws.  "
});

documentTitles["methodes-outils-lecteur-ecran.html#prise-en-main-de-voiceover-sous-mac"] = "Prise en main de VoiceOver (sous Mac)";
index.add({
    url: "methodes-outils-lecteur-ecran.html#prise-en-main-de-voiceover-sous-mac",
    title: "Prise en main de VoiceOver (sous Mac)",    
    body: "## Prise en main de VoiceOver (sous Mac)  VoiceOver est le lecteur d’écran disponible sur Mac. Celui-ci nécessite aucune installation puisqu’il est intégré directement au système.   Pour pouvez activer VoiceOver depuis les *Préférences systèmes &amp;gt; Accessibilité*. Ou directement en utilisant le raccourci &lt;kbd&gt;Commande + F5&lt;/kbd&gt;.  "
});

documentTitles["methodes-outils-lecteur-ecran.html#navigation-dans-les-pages-web"] = "Navigation dans les pages web";
index.add({
    url: "methodes-outils-lecteur-ecran.html#navigation-dans-les-pages-web",
    title: "Navigation dans les pages web",    
    body: "### Navigation dans les pages web  Au démarrage de VoiceOver, celui-ci propose un guide interactif permettant d’apprendre les principaux raccourcis clavier. Il est recommandé de le parcourir.   Voici néanmoins les raccourcis principaux&amp;nbsp;: - &lt;kbd&gt;Ctrl + Option + flèche droite&lt;/kbd&gt; et &lt;kbd&gt;Ctrl + Option + flèche gauche&lt;/kbd&gt; pour avancer ou reculer dans la lecture de la page. - &lt;kbd&gt;Ctrl + Option + U&lt;/kbd&gt; pour accéder à la liste des titres, liens, champs de formulaires… (utiliser les flèches gauche et droite pour naviguer entre les différentes listes).  - &lt;kbd&gt;Ctrl&lt;/kbd&gt; pour faire taire VoiceOver. - &lt;kbd&gt;Ctrl + Option&lt;/kbd&gt; &lt;!-- MISSING SOMETHING HERE? (sd) --&gt;  "
});

documentTitles["methodes-outils-lecteur-ecran.html#prise-en-main-des-lecteurs-decran-sous-mobile"] = "Prise en main des lecteurs d'écran sous mobile";
index.add({
    url: "methodes-outils-lecteur-ecran.html#prise-en-main-des-lecteurs-decran-sous-mobile",
    title: "Prise en main des lecteurs d'écran sous mobile",    
    body: "## Prise en main des lecteurs d'écran sous mobile Pour tester un site web sur mobile :  - &lt;a href=\&quot;../mobile/screen-reader-talkback.html\&quot;&gt;Guide d’utilisation de TalkBack (sous Android)&lt;/a&gt; - &lt;a href=\&quot;../mobile/screen-reader-voiceover.html\&quot;&gt;Guide d’utilisation de VoiceOver (sous iOS)&lt;/a&gt;  &lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2016  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt;"
});



documentTitles["methodes-outils-extensions.html#extensions-pour-navigateur"] = "Extensions pour navigateur";
index.add({
    url: "methodes-outils-extensions.html#extensions-pour-navigateur",
    title: "Extensions pour navigateur",    
    body: "# Extensions pour navigateur  &lt;script&gt;$(document).ready(function () {     setBreadcrumb([         {\&quot;label\&quot;:\&quot;Outils de test\&quot;, \&quot;url\&quot;: \&quot;./methodes-outils.html\&quot;},         {\&quot;label\&quot;:\&quot;Extensions pour navigateur\&quot;}]); });&lt;/script&gt;  &lt;span data-menuitem=\&quot;methodes-outils\&quot;&gt;&lt;/span&gt;  Certaines extensions permettent d’effectuer des tests automatiques sur la page en cours de consultation.  "
});

documentTitles["methodes-outils-extensions.html#span-langenaxe-accessibility-auditspan"] = "&lt;span lang=\&quot;en\&quot;&gt;aXe accessibility audit&lt;/span&gt;";
index.add({
    url: "methodes-outils-extensions.html#span-langenaxe-accessibility-auditspan",
    title: "&lt;span lang=\&quot;en\&quot;&gt;aXe accessibility audit&lt;/span&gt;",    
    body: "## &lt;span lang=\&quot;en\&quot;&gt;aXe accessibility audit&lt;/span&gt; [aXe](http://www.deque.com/products/axe/) est une extension disponible pour Chrome et Firefox permettant d’effectuer une série de tests basés sur les [WCAG](https://www.w3.org/WAI/intro/wcag).  ![capture d’écran de l’extension axe](images/aXe.png) &amp;nbsp;  "
});

documentTitles["methodes-outils-extensions.html#span-langenwave-toolbarspan"] = "&lt;span lang=\&quot;en\&quot;&gt;Wave toolbar&lt;/span&gt;";
index.add({
    url: "methodes-outils-extensions.html#span-langenwave-toolbarspan",
    title: "&lt;span lang=\&quot;en\&quot;&gt;Wave toolbar&lt;/span&gt;",    
    body: "## &lt;span lang=\&quot;en\&quot;&gt;Wave toolbar&lt;/span&gt; [&lt;span lang=\&quot;en\&quot;&gt;Wave toolbar&lt;/span&gt;](http://wave.webaim.org/extension/) est une barre d’extension pour Chrome. Tout comme aXe, elle permet d’effectuer une série de tests d’accessibilité sur la page en cours. A la différence de ce dernier qui affiche les erreurs dans un onglet de l’inspecteur web, ici les erreurs sont affichées directement dans la page. Il existe un [bookmarklet (ou favlet) pour &lt;span lang=\&quot;en\&quot;&gt;Wave&lt;/span&gt;](http://wave.webaim.org/help).  ![capture d’écran de l’extension wave toolbar](images/wave.png)  &lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2016  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt;"
});



documentTitles["methodes-outils-zoom.html#agrandissement-de-la-taille-du-texte"] = "Agrandissement de la taille du texte";
index.add({
    url: "methodes-outils-zoom.html#agrandissement-de-la-taille-du-texte",
    title: "Agrandissement de la taille du texte",    
    body: "# Agrandissement de la taille du texte  &lt;script&gt;$(document).ready(function () {     setBreadcrumb([         {\&quot;label\&quot;:\&quot;Outils de test\&quot;, \&quot;url\&quot;: \&quot;./methodes-outils.html\&quot;},         {\&quot;label\&quot;:\&quot;Agrandissement de la taille du texte\&quot;}]); });&lt;/script&gt;  &lt;span data-menuitem=\&quot;methodes-outils\&quot;&gt;&lt;/span&gt;  "
});

documentTitles["methodes-outils-zoom.html#comment-on-teste"] = "Comment on teste ?";
index.add({
    url: "methodes-outils-zoom.html#comment-on-teste",
    title: "Comment on teste ?",    
    body: "## Comment on teste ?  Une des recommandations d’accessibilité est la possibilité pour l’utilisateur d’agrandir la taille du texte à 200%. Il s’agit bien d’agrandir uniquement le texte et non l’ensemble de la page. En effet, si vous utilisez le zoom par défaut du navigateur, toute la page est agrandie, ce qui entraîne l’apparition systématique d’ascenseurs horizontaux et verticaux. La lecture d’un article de blog par exemple devient fastidieuse puisqu’il faut jouer constamment avec l’ascenseur horizontal.  L’agrandissement du texte seul, n’entraîne pas systématiquement l’apparition de barres de défilement horizontale. Vous devez vérifier qu’a ce niveau de zoom (200%), le texte reste lisible. Aucun texte ne doit être tronqué, ni superposé. L’information doit rester accessible même si la présentation peut être quelque peu altérée.  Pour agrandir le texte uniquement, il faut cocher l’option «&amp;nbsp;zoom texte seulement&amp;nbsp;» dans Firefox. Pour agrandir le texte de 200%, faire &lt;kbd&gt;Ctrl&amp;nbsp;:+&lt;/kbd&gt; quatre fois.     ![capture d’écran de l’option zoom texte seulement, dans Firefox](images/zoom-firefox.png)   "
});

documentTitles["methodes-outils-zoom.html#quelles-consequences-sur-le-developpement"] = "Quelles conséquences sur le développement ?";
index.add({
    url: "methodes-outils-zoom.html#quelles-consequences-sur-le-developpement",
    title: "Quelles conséquences sur le développement ?",    
    body: "## Quelles conséquences sur le développement ?  Si votre page ne s’affiche pas correctement lorsque vous agrandissez le texte, il se peut que ceci soit lié à l’utilisation du pixel comme unité pour dimensionner la taille des textes et la taille des éléments (hauteur ou largeur des `div`…). Pour corriger les problèmes d’affichage lorsque le zoom est à 200%, il ne s’agit pas nécessairement de tout revoir et de supprimer les pixels définitivement. L’idée est de revoir uniquement les éléments qui posent un problème (remplacer les `px` par des `em`, `rem` ou `%`).  ** Exemple zoom à 100% **   ![capture d’une page avec zoom à 100%](images/zoom.png)  &amp;nbsp;  ** Exemple zoom à 200% et taille en pixels**   La hauteur des éléments n’étant pas fonction de la taille du texte, ceux-ci ne s’agrandissent pas.  ![capture d’une page avec zoom à 100%](images/zoom-ko.png)  &amp;nbsp;    ** Exemple zoom à 200% et hauteur des éléments en unités relatives (`rem`)**   La hauteur des éléments contenant le texte a été renseignée avec une unité relative qui varie en fonction de la taille du texte (`rem`). Les éléments s’agrandissent, le texte reste lisible.  ![capture d’une page avec zoom à 100%](images/zoom-ok.png)  &amp;nbsp; Plus d’information dans la rubrique **exemples**&amp;nbsp;: [gestion de l’agrandissement de la taille du texte à 200%](exemples/zoom/index.html).    &amp;nbsp;   &lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2016  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt;"
});



documentTitles["exemples.html#liste-des-exemples"] = "Liste des exemples";
index.add({
    url: "exemples.html#liste-des-exemples",
    title: "Liste des exemples",    
    body: "# Liste des exemples       &lt;script&gt;$(document).ready(function () {     setBreadcrumb([{\&quot;label\&quot;:\&quot;Exemples\&quot;}]); });&lt;/script&gt;  "
});

documentTitles["exemples.html#les-bases"] = "Les bases";
index.add({
    url: "exemples.html#les-bases",
    title: "Les bases",    
    body: "## Les bases  &lt;ul class=\&quot;examples-list\&quot;&gt;     &lt;li&gt;         &lt;a href=\&quot;exemples/masquage/index.html\&quot;&gt;             &lt;img class=\&quot;hidden-sm-down\&quot; alt=\&quot;\&quot; src=\&quot;./images/exemples/masquage.png\&quot;&gt;&lt;span&gt;Masquage accessible&lt;/span&gt;         &lt;/a&gt;     &lt;/li&gt;     &lt;li&gt;         &lt;a href=\&quot;exemples/formulaire/index.html\&quot;&gt;             &lt;img class=\&quot;hidden-sm-down\&quot; alt=\&quot;\&quot; src=\&quot;./images/exemples/formulaire.png\&quot;&gt;&lt;span&gt;Gestion des formulaires&lt;/span&gt;         &lt;/a&gt;     &lt;/li&gt;     &lt;li&gt;         &lt;a href=\&quot;exemples/zoom/index.html\&quot;&gt;             &lt;img class=\&quot;hidden-sm-down\&quot; alt=\&quot;\&quot; src=\&quot;./images/exemples/zoom.png\&quot;&gt;&lt;span&gt;Gestion du zoom, agrandissement de la taille du texte&lt;/span&gt;         &lt;/a&gt;     &lt;/li&gt; &lt;/ul&gt;  "
});

documentTitles["exemples.html#niveau-intermediaire"] = "Niveau intermédiaire";
index.add({
    url: "exemples.html#niveau-intermediaire",
    title: "Niveau intermédiaire",    
    body: "## Niveau intermédiaire  &lt;ul class=\&quot;examples-list\&quot;&gt;     &lt;li&gt;         &lt;a href=\&quot;exemples/role-dialog/role-dialog.html\&quot;&gt;             &lt;img class=\&quot;hidden-sm-down\&quot; alt=\&quot;\&quot; src=\&quot;./images/exemples/dialog1.png\&quot;&gt;&lt;span&gt;Les boîtes de dialogue 1/2&lt;/span&gt;         &lt;/a&gt;     &lt;/li&gt;     &lt;li&gt;         &lt;a href=\&quot;exemples/role-dialog2/role-dialog.html\&quot;&gt;             &lt;img class=\&quot;hidden-sm-down\&quot; alt=\&quot;\&quot; src=\&quot;./images/exemples/dialog2.png\&quot;&gt;&lt;span&gt;Les boîtes de dialogue 2/2&lt;/span&gt;         &lt;/a&gt;     &lt;/li&gt;     &lt;li&gt;         &lt;a href=\&quot;exemples/simple-menu/simple-menu.html\&quot;&gt;             &lt;img class=\&quot;hidden-sm-down\&quot; alt=\&quot;\&quot; src=\&quot;./images/exemples/menu.png\&quot;&gt;&lt;span&gt;Menu déroulant&lt;/span&gt;         &lt;/a&gt;     &lt;/li&gt;     &lt;li&gt;         &lt;a href=\&quot;exemples/speak/index.html\&quot;&gt;             &lt;img class=\&quot;hidden-sm-down\&quot; alt=\&quot;\&quot; src=\&quot;./images/exemples/speak.png\&quot;&gt;&lt;span&gt;Faire parler le lecteur d’écran via Javascript&lt;/span&gt;         &lt;/a&gt;     &lt;/li&gt;     &lt;li&gt;         &lt;a href=\&quot;exemples/tag/index.html\&quot;&gt;             &lt;img class=\&quot;hidden-sm-down\&quot; alt=\&quot;\&quot; src=\&quot;./images/exemples/tag.png\&quot;&gt;&lt;span&gt;Créer des «&amp;nbsp;tags&amp;nbsp;» accessibles 1/2&lt;/span&gt;         &lt;/a&gt;     &lt;/li&gt;         &lt;li&gt;         &lt;a href=\&quot;exemples/tag-exemples/index.html\&quot;&gt;             &lt;img class=\&quot;hidden-sm-down\&quot; alt=\&quot;\&quot; src=\&quot;./images/exemples/tag.png\&quot;&gt;&lt;span&gt;Créer des «&amp;nbsp;tags&amp;nbsp;» accessibles 2/2 (exemples)&lt;/span&gt;         &lt;/a&gt;     &lt;/li&gt;     &lt;li&gt;         &lt;a href=\&quot;exemples/iframes-techniques/index.html\&quot;&gt;             &lt;img class=\&quot;hidden-sm-down\&quot; alt=\&quot;\&quot; src=\&quot;./images/exemples/speak.png\&quot;&gt;&lt;span&gt;Les iframes «&amp;nbsp;techniques&amp;nbsp;»&lt;/span&gt;         &lt;/a&gt;     &lt;/li&gt; &lt;/ul&gt;  "
});

documentTitles["exemples.html#niveau-avance"] = "Niveau avancé";
index.add({
    url: "exemples.html#niveau-avance",
    title: "Niveau avancé",    
    body: "## Niveau avancé  &lt;ul class=\&quot;examples-list\&quot;&gt;     &lt;li&gt;         &lt;a href=\&quot;exemples/listbox/index.html\&quot;&gt;             &lt;img class=\&quot;hidden-sm-down\&quot; alt=\&quot;\&quot; src=\&quot;./images/exemples/listbox.png\&quot;&gt;&lt;span&gt;Les listes &lt;abbr&gt;ARIA&lt;/abbr&gt; (listbox) 1/3&lt;/span&gt;         &lt;/a&gt;     &lt;/li&gt;     &lt;li&gt;         &lt;a href=\&quot;exemples/check-listbox/index.html\&quot;&gt;             &lt;img class=\&quot;hidden-sm-down\&quot; alt=\&quot;\&quot; src=\&quot;./images/exemples/listbox2.png\&quot;&gt;&lt;span&gt;Les listes &lt;abbr&gt;ARIA&lt;/abbr&gt; (listbox) 2/3 (avec cases à cocher)&lt;/span&gt;         &lt;/a&gt;     &lt;/li&gt;      &lt;li&gt;         &lt;a href=\&quot;exemples/listbox-pattern-aria/index.html\&quot;&gt;             &lt;img class=\&quot;hidden-sm-down\&quot; alt=\&quot;\&quot; src=\&quot;./images/exemples/listbox3.png\&quot;&gt;&lt;span&gt;Les &lt;i lang=\&quot;en\&quot;&gt;listbox&lt;/i&gt; et &lt;i lang=\&quot;en\&quot;&gt;patterns&lt;/i&gt; &lt;abbr&gt;ARIA&lt;/abbr&gt; 3/3 (navigation au clavier)&lt;/span&gt;         &lt;/a&gt;     &lt;/li&gt;     &lt;li&gt;         &lt;a href=\&quot;exemples/files/index.html\&quot;&gt;             &lt;img class=\&quot;hidden-sm-down\&quot; alt=\&quot;\&quot; src=\&quot;./images/exemples/cloud.png\&quot;&gt;&lt;span&gt;Explorateur de fichiers (&lt;i lang=\&quot;en\&quot;&gt;cloud&lt;/i&gt;)&lt;/span&gt;         &lt;/a&gt;     &lt;/li&gt;     &lt;li&gt;         &lt;a href=\&quot;exemples/dynFocus/index.html\&quot;&gt;             &lt;img class=\&quot;hidden-sm-down\&quot; alt=\&quot;\&quot; src=\&quot;./images/exemples/live-region.png\&quot;&gt;&lt;span&gt;Les régions vivantes (&lt;i lang=\&quot;en\&quot;&gt;live regions&lt;/i&gt;), contenu dynamique, gestion du focus et &lt;abbr&gt;ARIA&lt;/abbr&gt;&lt;/span&gt;         &lt;/a&gt;     &lt;/li&gt; &lt;/ul&gt; &lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2016  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt;"
});



documentTitles["contact.html#votre-avis-compte"] = "Votre avis compte";
index.add({
    url: "contact.html#votre-avis-compte",
    title: "Votre avis compte",    
    body: "# Votre avis compte    &lt;script&gt;$(document).ready(function () {     setBreadcrumb([{\&quot;label\&quot;:\&quot;Contact\&quot;}]); });&lt;/script&gt;  Vous avez une remarque, une suggestion à apporter&amp;nbsp;?  Vérifiez que ceci n’a pas déjà été remonté par quelqu’un d’autre en consultant [la liste des «&amp;nbsp;&lt;i lang=\&quot;en\&quot;&gt;issues&lt;/i&gt;&amp;nbsp;»](https://github.com/Orange-OpenSource/a11y-guidelines/issues) sur notre compte github.   Si vous ne trouvez rien concernant votre remarque, [adressez-nous votre commentaire](https://github.com/Orange-OpenSource/a11y-guidelines/issues/new) via github.  &amp;nbsp; &lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2016  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt;"
});



documentTitles["about.html#a-propos"] = "A propos";
index.add({
    url: "about.html#a-propos",
    title: "A propos",    
    body: "# A propos     &lt;script&gt;$(document).ready(function () {     setBreadcrumb([{\&quot;label\&quot;:\&quot;A propos\&quot;}]); });&lt;/script&gt;  Documentation sous [licence CC BY SA 3.0](https://github.com/Orange-OpenSource/a11y-guidelines/blob/master/LICENSE). Le code source de ce site ainsi que celui des exemples est disponible [sur notre compte github](https://github.com/Orange-OpenSource/a11y-guidelines).    Le logo Orange ainsi que certaines images et captures sont la propriété d'Orange:    Copyright (C) 2016 Orange SA All rights reserved   [Liste des fichiers concernés](/NOTICE.txt)  &amp;nbsp; &lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2016  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt;"
});


