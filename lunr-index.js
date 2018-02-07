
var index = lunr(function () {
    this.use(lunr.fr);
    this.field('body');
    this.ref('url');
});

var documentTitles = {};



documentTitles["contact.html#recommandations-accessibilite-orange-h2-classpage-titlevotre-avis-compteh2"] = "Recommandations accessibilité Orange &lt;h2 class=\&quot;page-title\&quot;&gt;Votre avis compte&lt;/h2&gt;";
index.add({
    url: "contact.html#recommandations-accessibilite-orange-h2-classpage-titlevotre-avis-compteh2",
    title: "Recommandations accessibilité Orange &lt;h2 class=\&quot;page-title\&quot;&gt;Votre avis compte&lt;/h2&gt;",    
    body: "# Recommandations accessibilité Orange &lt;h2 class=\&quot;page-title\&quot;&gt;Votre avis compte&lt;/h2&gt; &lt;script&gt;$(document).ready(function () {     setBreadcrumb([{\&quot;label\&quot;:\&quot;Contact\&quot;}]); });&lt;/script&gt;  Vous avez une remarque, une suggestion à apporter&amp;nbsp;?    Vérifiez que ceci n’a pas déjà été remonté par quelqu’un d’autre en consultant [la liste des «&amp;nbsp;&lt;i lang=\&quot;en\&quot;&gt;issues&lt;/i&gt;&amp;nbsp;»](https://github.com/Orange-OpenSource/a11y-guidelines/issues) sur notre compte github.   Si vous ne trouvez rien concernant votre remarque, [adressez-nous votre commentaire](https://github.com/Orange-OpenSource/a11y-guidelines/issues/new) via github.  &amp;nbsp; &lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2016  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt;"
});



documentTitles["index.html#recommandations-accessibilite-orange"] = "Recommandations accessibilité Orange";
index.add({
    url: "index.html#recommandations-accessibilite-orange",
    title: "Recommandations accessibilité Orange",    
    body: "# Recommandations accessibilité Orange  &lt;script&gt;$(document).ready(function () {     setBreadcrumb([{\&quot;label\&quot;:\&quot;Présentation\&quot;}]); });&lt;/script&gt;  "
});

documentTitles["index.html#qui-sommes-nousnbsp"] = "Qui sommes-nous&amp;nbsp;?";
index.add({
    url: "index.html#qui-sommes-nousnbsp",
    title: "Qui sommes-nous&amp;nbsp;?",    
    body: "## Qui sommes-nous&amp;nbsp;?  &lt;abbr&gt;EASE&lt;/abbr&gt;, «&amp;nbsp;&lt;i lang=\&quot;en\&quot;&gt;E-Accessibility for Everyone&lt;/i&gt;&amp;nbsp;», un centre de compétences d’Orange, constitué d’une douzaine de personnes, dédié à l’accessibilité du contenu numérique (éditorial, applications Web et mobiles). Nous accompagnons les projets, proposons des formations, publions des recommandations et réalisons des outils destinés aux projets.  &lt;h2 class=\&quot;page-title\&quot;&gt;Qu’est ce que l’accessibilité numérique&amp;nbsp;?&lt;/h2&gt;  &lt;blockquote&gt;     &lt;p&gt;La puissance du Web réside dans son universalité. L’accès pour tous indépendamment du handicap est un aspect essentiel.&lt;/p&gt;     &lt;footer&gt;         Tim Berners-Lee, directeur du &lt;abbr title=\&quot;World Wide Web Consortium\&quot;&gt;W3C&lt;/abbr&gt; et inventeur du World Wide Web.     &lt;/footer&gt; &lt;/blockquote&gt;  L’accessibilité numérique vise à rendre possible l’accès à l’information numérique quelle que soit la nature du handicap des personnes et la façon dont chacun consulte l’information. Elle concerne différentes technologies comme le Web, les vidéos et les documents Word et PDF, mais également la télévision numérique ou les téléphones mobiles.  Il ne s’agit pas de démultiplier les supports de l’information, mais de respecter des règles fonctionnelles, graphiques, techniques et éditoriales qui permettront à tous d’accéder à l’information quels que soient leurs outils de consultation.  "
});

documentTitles["index.html#qui-est-concerne-par-laccessibilite-numeriquenbsp"] = "Qui est concerné par l’accessibilité numérique&amp;nbsp;?";
index.add({
    url: "index.html#qui-est-concerne-par-laccessibilite-numeriquenbsp",
    title: "Qui est concerné par l’accessibilité numérique&amp;nbsp;?",    
    body: "## Qui est concerné par l’accessibilité numérique&amp;nbsp;?  Les situations de handicap identifiées ne sont pas seulement celles que l’on voit.    Elles ne sont pas forcement définitives et peuvent atteindre chacun de nous à un moment de sa vie.  &amp;nbsp; &lt;div class=\&quot;sr-only\&quot;&gt;     Les citations suivantes en sont l’illustration&amp;nbsp;:     &lt;ul&gt;         &lt;li&gt;Les sous-titres me sont utiles car ma langue maternelle n’est pas le français.&lt;/li&gt;         &lt;li&gt;C’est utile de ne pas être obligé d’imprimer en couleur pour comprendre cette carte.&lt;/li&gt;         &lt;li&gt;Après avoir travaillé toute la journée derrière un écran, j’ai plus de difficultés à lire certains textes trop petits.&lt;/li&gt;     &lt;/ul&gt; &lt;/div&gt;    &lt;img src=\&quot;./images/chat.png\&quot; alt=\&quot;\&quot; class=\&quot;img-fluid\&quot;&gt;  &lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2016  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt;"
});



documentTitles["focus.html#recommandations-accessibilite-orange"] = "Recommandations accessibilité Orange";
index.add({
    url: "focus.html#recommandations-accessibilite-orange",
    title: "Recommandations accessibilité Orange",    
    body: "# Recommandations accessibilité Orange &lt;h2 class=\&quot;page-title\&quot;&gt;Les situations de handicap&lt;/h2&gt;  &lt;script&gt;$(document).ready(function () {     setBreadcrumb([{\&quot;label\&quot;:\&quot;Les situations de handicap\&quot;}]);     addSubMenu([         {\&quot;label\&quot;:\&quot;Le handicap cognitif\&quot;,\&quot;url\&quot;:\&quot;focus-cognitif.html\&quot;},         {\&quot;label\&quot;:\&quot;Les séniors\&quot;,\&quot;url\&quot;:\&quot;focus-seniors.html\&quot;}     ]); });&lt;/script&gt;  "
});

documentTitles["focus.html#le-handicap-auditif"] = "Le handicap auditif";
index.add({
    url: "focus.html#le-handicap-auditif",
    title: "Le handicap auditif",    
    body: "### Le handicap auditif &lt;div class=\&quot;axs-picto auditif\&quot;&gt;     &lt;ul&gt;         &lt;li&gt;Personnes sourdes&lt;/li&gt;         &lt;li&gt;Personnes malentendantes&lt;/li&gt;         &lt;li&gt;Personnes sourdes-aveugles&lt;/li&gt;         &lt;li&gt;Difficulté de perception de la parole dans un environnement bruyant&lt;/li&gt;     &lt;/ul&gt; **Solutions adaptées&amp;nbsp;:** ajout de transcrit (récit de la vidéo) ou de sous-titres &lt;/div&gt;  "
});

documentTitles["focus.html#le-handicap-visuel"] = "Le handicap visuel";
index.add({
    url: "focus.html#le-handicap-visuel",
    title: "Le handicap visuel",    
    body: "### Le handicap visuel  &lt;div class=\&quot;axs-picto visuel\&quot;&gt;     &lt;ul&gt;         &lt;li&gt;Personnes avec un petit reste visuel ou celles qui ont une vue incorrigible&lt;/li&gt;         &lt;li&gt;Personnes qui ne distinguent pas ou mal les couleurs (daltonisme, achromatopsie)&lt;/li&gt;         &lt;li&gt;Personnes sensibles à une luminosité accrue des couleurs&lt;/li&gt;         &lt;li&gt;Personnes complètement aveugles&lt;/li&gt;         &lt;li&gt;Personnes sourdes-aveugles&lt;/li&gt;     &lt;/ul&gt;     **Solutions adaptées&amp;nbsp;:** tablette Braille, synthèses vocales, personnalisation de l’affichage. &lt;/div&gt;  "
});

documentTitles["focus.html#le-handicap-cognitif"] = "Le handicap cognitif";
index.add({
    url: "focus.html#le-handicap-cognitif",
    title: "Le handicap cognitif",    
    body: "### Le handicap cognitif &lt;div class=\&quot;axs-picto cognitif\&quot;&gt;     &lt;ul&gt;         &lt;li&gt;Les troubles DYS&lt;/li&gt;         &lt;li&gt;Autres troubles affectant la lecture, la mémorisation, la concentration, la compréhension, la résolution des problèmes, le raisonnement et le langage.&lt;/li&gt;     &lt;/ul&gt; **Solutions adaptées&amp;nbsp;:** hiérarchisation et simplification de l’information, attention apportées à la mise en page. &lt;/div&gt;  "
});

documentTitles["focus.html#le-handicap-moteur-et-de-prehension"] = "Le handicap moteur et de préhension";
index.add({
    url: "focus.html#le-handicap-moteur-et-de-prehension",
    title: "Le handicap moteur et de préhension",    
    body: "### Le handicap moteur et de préhension &lt;div class=\&quot;axs-picto physique\&quot;&gt;     &lt;ul&gt;         &lt;li&gt;Troubles de la réalisation des gestes (dyspraxies)&lt;/li&gt;          &lt;li&gt;Dystrophies musculaires&lt;/li&gt;         &lt;li&gt;Lésions rhumatismales&lt;/li&gt;         &lt;li&gt;Un bras cassé&lt;/li&gt;     &lt;/ul&gt; ** Solutions adaptées&amp;nbsp;:** périphériques adaptés (souris, claviers…), outils de dictée &lt;/div&gt;  "
});

documentTitles["focus.html#le-handicap-materiel"] = "Le handicap matériel";
index.add({
    url: "focus.html#le-handicap-materiel",
    title: "Le handicap matériel",    
    body: "### Le handicap matériel &lt;div class=\&quot;axs-picto materiel\&quot;&gt;     Les règles d’accessibilité servent au-delà des situations de handicaps identifiées.       L’accessibilité numérique apporte du confort pour tous&amp;nbsp;:         &lt;ul&gt;         &lt;li&gt;Les utilisateurs de mobiles et smartphones&lt;/li&gt;         &lt;li&gt;Les utilisateurs ayant un bas débit&lt;/li&gt;         &lt;li&gt;Les seniors&lt;/li&gt;         &lt;li&gt;Les environnements bruyants tels que open space, boutiques, accueil…&lt;/li&gt;         &lt;li&gt;Les personnes avec un handicap temporaire (bras cassé, infection de l’œil…)         &lt;li&gt;Matériel non approprié (imprimante noir et blanc…)&lt;/li&gt;     &lt;/ul&gt; &lt;/div&gt;  &lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2016  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt;"
});



documentTitles["focus-cognitif.html#recommandations-accessibilite-orange"] = "Recommandations accessibilité Orange";
index.add({
    url: "focus-cognitif.html#recommandations-accessibilite-orange",
    title: "Recommandations accessibilité Orange",    
    body: "# Recommandations accessibilité Orange &lt;h2 class=\&quot;page-title\&quot;&gt;Le handicap cognitif&lt;/h2&gt;  &lt;script&gt;$(document).ready(function () {     setBreadcrumb([{\&quot;label\&quot;:\&quot;Les situations de handicap\&quot;, \&quot;url\&quot;: \&quot;./focus.html\&quot;},         {\&quot;label\&quot;:\&quot;Le handicap cognitif\&quot;}]);     addSubMenu([         {\&quot;label\&quot;:\&quot;Le handicap cognitif\&quot;,\&quot;url\&quot;:\&quot;focus-cognitif.html\&quot;},         {\&quot;label\&quot;:\&quot;Les séniors\&quot;,\&quot;url\&quot;:\&quot;focus-seniors.html\&quot;}     ]); });&lt;/script&gt;  &lt;span data-menuitem=\&quot;focus\&quot;&gt;&lt;/span&gt;  **Le handicap cognitif** est la conséquence de dysfonctionnements des fonctions cognitives : troubles de l’attention, de la mémoire, de l’adaptation au changement, du langage, des identifications perceptives (gnosies) et des gestes (praxies). Le handicap cognitif n’implique **pas de déficience intellectuelle** mais des difficultés à mobiliser ses capacités. A ne pas confondre avec le handicap mental et le handicap psychique : - Le handicap mental, qui est la conséquence d’une déficience intellectuelle, considérée comme une capacité plus limitée d’apprentissage et un développement intellectuel significativement inférieur à la moyenne et se traduit par des difficultés plus ou moins importantes de réflexion, de conceptualisation, de communication, de décision, etc. - Le handicap psychique qui est la conséquence de troubles psychiques invalidants. Comme le handicap cognitif, le handicap psychique n’implique pas de déficience intellectuelle. Il est caractérisé par une alternance d’états psychiques calmes ou tendus et par des difficultés à acquérir ou à exprimer des habiletés psychosociales, avec des déficits d’attention et des difficultés à élaborer et suivre un plan d’action. Il peut donc notamment se traduire par des angoisses, des troubles cognitifs (mémorisation, attention, capacités d’organisation, d’anticipation, adaptation au contexte de la situation) et des difficultés dans la relation à autrui et la communication.  "
});

documentTitles["focus-cognitif.html#les-troubles-dys"] = "Les troubles DYS";
index.add({
    url: "focus-cognitif.html#les-troubles-dys",
    title: "Les troubles DYS",    
    body: "### Les troubles DYS Les troubles DYS sont des troubles neurologiques durables qui vont affecter une fonction cognitive particulière comme la lecture, le geste, le calcul… Il ne s’agit pas d’une déficience intellectuelle, mais d’un mode de raisonnement différent. Les troubles DYS rassemblent différents type de troubles : - La dyslexie = Trouble de la lecture - La dysorthographie = Trouble de l’écriture - La dysphasie = Trouble du langage - La dyscalculie = Trouble du calcul et du raisonnement logico-mathématique - La dyspraxie = Dysfonctionnement des praxies  La dyslexie est un trouble impactant l’accessibilité numérique.  "
});

documentTitles["focus-cognitif.html#exemples-dobstacles-rencontres-par-un-internautes-dyslexiques"] = "Exemples d’obstacles rencontrés par un internautes dyslexiques";
index.add({
    url: "focus-cognitif.html#exemples-dobstacles-rencontres-par-un-internautes-dyslexiques",
    title: "Exemples d’obstacles rencontrés par un internautes dyslexiques",    
    body: "#### Exemples d’obstacles rencontrés par un internautes dyslexiques - des pages surchargées d’informations - une mise en page non linéaire - de longs blocs de texte - un police de caractère avec empattement - des mots soulignés, en italique ou en majuscule - des fonds blancs éblouissants ou non uniformes - des éléments animés  - des champs de formulaire rigides…   &lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2016  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt;"
});



documentTitles["focus-seniors.html#recommandations-accessibilite-orange"] = "Recommandations accessibilité Orange";
index.add({
    url: "focus-seniors.html#recommandations-accessibilite-orange",
    title: "Recommandations accessibilité Orange",    
    body: "# Recommandations accessibilité Orange &lt;h2 class=\&quot;page-title\&quot;&gt;Les séniors&lt;/h2&gt;  &lt;script&gt;$(document).ready(function () {     setBreadcrumb([{\&quot;label\&quot;:\&quot;Les situations de handicap\&quot;, \&quot;url\&quot;: \&quot;./focus.html\&quot;},         {\&quot;label\&quot;:\&quot;Les séniors\&quot;}]);     addSubMenu([         {\&quot;label\&quot;:\&quot;Le handicap cognitif\&quot;,\&quot;url\&quot;:\&quot;focus-cognitif.html\&quot;},         {\&quot;label\&quot;:\&quot;Les séniors\&quot;,\&quot;url\&quot;:\&quot;focus-seniors.html\&quot;}     ]); });&lt;/script&gt;  &lt;span data-menuitem=\&quot;focus\&quot;&gt;&lt;/span&gt;  "
});

documentTitles["focus-seniors.html#problematique"] = "Problématique";
index.add({
    url: "focus-seniors.html#problematique",
    title: "Problématique",    
    body: "### Problématique  Un sénior est une personne plus ou moins âgée faisant partie d’une catégorie de personnes dont la définition varie selon le contexte : travail, santé, etc. D’un point de vue de la santé,  l’Organisation Mondiale de la Santé considère comme personne âgée une personne de plus de 60 ans. Elle estime qu’entre 2000 et 2050, cette population doublera au niveau mondial de 11% à 22%. Selon l’INSERM, le déclin des capacités cognitives commencent dès 45 ans.   Les déficiences qui peuvent être liées à l’âge ont un impact sur l’utilisation des technologies numériques.  "
});

documentTitles["focus-seniors.html#obstacles-rencontres"] = "Obstacles rencontrés";
index.add({
    url: "focus-seniors.html#obstacles-rencontres",
    title: "Obstacles rencontrés",    
    body: "### Obstacles rencontrés  Les obstacles rencontrés par les séniors présentant des déficiences liées à l’âge peuvent-être multiples : - Le déclin de la **vision**, comme la réduction de la sensibilité aux contrastes, de la perception des couleurs, de la capacité à se concentrer sur des objets proches, rend difficile la lecture d’une ressource numérique. - Le déclin des **capacités motrices**, comme la diminution de la dextérité, du contrôle moteur fin, rend difficile l’usage de la souris et le clic sur des éléments petits. - Le déclin de l’**audition**, comme la capacité à percevoir les sons les plus aigus, à séparer les sons, rend difficile l’écoute de documents audio (particulièrement dans un environnement bruyant). - Le déclin des **capacités cognitives**, comme la mémoire à court terme, la concentration, rend difficile la navigation et l’exécution de tâches.  "
});

documentTitles["focus-seniors.html#exemple-de-solutions"] = "Exemple de solutions";
index.add({
    url: "focus-seniors.html#exemple-de-solutions",
    title: "Exemple de solutions",    
    body: "### Exemple de solutions "
});

documentTitles["focus-seniors.html#declin-de-la-vision"] = "Déclin de la vision";
index.add({
    url: "focus-seniors.html#declin-de-la-vision",
    title: "Déclin de la vision",    
    body: "#### Déclin de la vision - L’utilisateur peut paramétrer la taille de tous les contenus textuels de l’application - Les contrastes de couleurs sont élevés  - Les vidéos ont une audiodescription ou une transcription textuelle - Les images ont une alternative textuelle  "
});

documentTitles["focus-seniors.html#declin-des-capacites-motrices"] = "Déclin des capacités motrices";
index.add({
    url: "focus-seniors.html#declin-des-capacites-motrices",
    title: "Déclin des capacités motrices",    
    body: "#### Déclin des capacités motrices - La navigation clavier permet d’accéder à toutes les fonctionnalités sans piège clavier - Le focus est bien visible - Les zones cliquables sont suffisamment grandes (largeur et hauteur d’au moins 48 px)  "
});

documentTitles["focus-seniors.html#declin-de-laudition"] = "Déclin de l’audition";
index.add({
    url: "focus-seniors.html#declin-de-laudition",
    title: "Déclin de l’audition",    
    body: "#### Déclin de l’audition -	Les vidéos ont des sous titres ou une transcription textuelle  "
});

documentTitles["focus-seniors.html#declin-des-capacites-cognitives"] = "Déclin des capacités cognitives";
index.add({
    url: "focus-seniors.html#declin-des-capacites-cognitives",
    title: "Déclin des capacités cognitives",    
    body: "#### Déclin des capacités cognitives - Les écrans suivent toutes la même logique d’organisation des contenus et de la navigation - Les composants d’interfaces (liens, boutons, etc.) sont facilement identifiables - Il est possible de mettre en pause ou arrêter les éléments en mouvement et les sons - L’utilisateur n’est pas limité en temps pour effectuer une action - Les labels des champs de formulaire sont explicitement libellés, une aide à la saisie est proposée si besoin, les erreurs de saisies sont identifiées et expliquées - Une aide utilisateur est disponible  &lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2016  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt;"
});



documentTitles["organisation.html#recommandations-accessibilite-orange-h2-classpage-titleorganisation-du-siteh2"] = "Recommandations accessibilité Orange &lt;h2 class=\&quot;page-title\&quot;&gt;Organisation du site&lt;/h2&gt;";
index.add({
    url: "organisation.html#recommandations-accessibilite-orange-h2-classpage-titleorganisation-du-siteh2",
    title: "Recommandations accessibilité Orange &lt;h2 class=\&quot;page-title\&quot;&gt;Organisation du site&lt;/h2&gt;",    
    body: "# Recommandations accessibilité Orange &lt;h2 class=\&quot;page-title\&quot;&gt;Organisation du site&lt;/h2&gt; &lt;script&gt;$(document).ready(function () {     setBreadcrumb([{\&quot;label\&quot;:\&quot;Organisation du site\&quot;}]); });&lt;/script&gt;  Ce site est découpé en plusieurs rubriques. Chacune présente les recommandations accessibilité Orange pour un type de plateforme.   Ces différentes rubriques sont disponibles via le menu de navigation situé dans l’en-tête.  Chaque rubrique contient&amp;nbsp;: - Des recommandations en fonction de la plateforme visée, - Des ressources pour apprendre et tester soi-même, - Des exemples techniques.  "
});

documentTitles["organisation.html#liste-des-rubriques"] = "Liste des rubriques";
index.add({
    url: "organisation.html#liste-des-rubriques",
    title: "Liste des rubriques",    
    body: "### Liste des rubriques "
});

documentTitles["organisation.html#accueil"] = "Accueil";
index.add({
    url: "organisation.html#accueil",
    title: "Accueil",    
    body: "#### Accueil Il s’agit de la rubrique actuelle&amp;nbsp;: - Présentation succincte de l'accessibilité, - Organisation de ce site.  "
});

documentTitles["organisation.html#web"] = "Web";
index.add({
    url: "organisation.html#web",
    title: "Web",    
    body: "#### Web Les recommandations accessibilité pour le Web. - Les critères indispensables à respecter, - Les recommandations techniques pour le Web, - Des méthodes et des outils pour rendre un site accessible, - Des exemples fonctionnels.  "
});

documentTitles["organisation.html#mobile"] = "Mobile";
index.add({
    url: "organisation.html#mobile",
    title: "Mobile",    
    body: "#### Mobile  Les recommandations accessibilité pour les mobiles. - Liste des différents critères d’accessibilité à respecter pour obtenir une application mobile (Android ou iOS) accessible,  - Tout ce qu’il faut savoir pour coder accessible sur mobile, sous Android ou iOS, - Présentation de l’application mDAN, le démonstrateur d’accessibilité numérique pour mobile, - Un guide simple pour utiliser les lecteurs d’écran d’iOS et d’Android, respectivement &lt;span lang=\&quot;en\&quot;&gt;VoiceOver&lt;/span&gt; et &lt;span lang=\&quot;en\&quot;&gt;TalkBack&lt;/span&gt;.  "
});

documentTitles["organisation.html#editorial"] = "Éditorial";
index.add({
    url: "organisation.html#editorial",
    title: "Éditorial",    
    body: "#### Éditorial  Les recommandations pour la rédaction de documents Word et PowerPoint accessibles.  &amp;nbsp; &lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2016  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt;"
});



documentTitles["about.html#recommandations-accessibilite-orange"] = "Recommandations accessibilité Orange";
index.add({
    url: "about.html#recommandations-accessibilite-orange",
    title: "Recommandations accessibilité Orange",    
    body: "# Recommandations accessibilité Orange &lt;h2 class=\&quot;page-title\&quot;&gt;À propos&lt;/h2&gt;  &lt;script&gt;$(document).ready(function () {     setBreadcrumb([{\&quot;label\&quot;:\&quot;À propos\&quot;}]); });&lt;/script&gt;  Documentation sous [licence CC BY SA 3.0](https://github.com/Orange-OpenSource/a11y-guidelines/blob/master/LICENSE). Le code source de ce site ainsi que celui des exemples est disponible [sur notre compte github](https://github.com/Orange-OpenSource/a11y-guidelines).    Le logo Orange ainsi que certaines images et captures sont la propriété d'Orange&amp;nbsp;:    &lt;span lang=\&quot;en\&quot;&gt;Copyright (C) 2016 Orange SA All rights reserved&lt;/span&gt;   [Liste des fichiers concernés](/NOTICE.txt)  &amp;nbsp; &lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2016  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt;"
});



documentTitles["faq.html#recommandations-accessibilite-orange-h2-classpage-titlequestions-habituellesh2"] = "Recommandations accessibilité Orange &lt;h2 class=\&quot;page-title\&quot;&gt;Questions habituelles…&lt;/h2&gt;";
index.add({
    url: "faq.html#recommandations-accessibilite-orange-h2-classpage-titlequestions-habituellesh2",
    title: "Recommandations accessibilité Orange &lt;h2 class=\&quot;page-title\&quot;&gt;Questions habituelles…&lt;/h2&gt;",    
    body: "# Recommandations accessibilité Orange &lt;h2 class=\&quot;page-title\&quot;&gt;Questions habituelles…&lt;/h2&gt; &lt;script&gt;$(document).ready(function () {     setBreadcrumb([{\&quot;label\&quot;:\&quot;Organisation du site\&quot;}]); });&lt;/script&gt;  "
});

documentTitles["faq.html#qui-peut-utiliser-ces-recommandationsnbsp"] = "Qui peut utiliser ces recommandations&amp;nbsp;?";
index.add({
    url: "faq.html#qui-peut-utiliser-ces-recommandationsnbsp",
    title: "Qui peut utiliser ces recommandations&amp;nbsp;?",    
    body: "## Qui peut utiliser ces recommandations&amp;nbsp;?  En tant que membre d’une équipe projet, designer, concepteur, développeur… , je me forme en utilisant les recommandations EASE pour améliorer l’accessibilité de mon site/application, je m’auto-évalue en utilisant les outils et les méthodes, j’utilise les exemples, Boosted et ses composants réutilisables, ergonomiques, accessibles et chartés groupe pour gagner du temps.  "
});

documentTitles["faq.html#a-quel-moment-dois-je-me-soucier-daccessibilitenbsp"] = "À quel moment dois-je me soucier d’accessibilité&amp;nbsp;?";
index.add({
    url: "faq.html#a-quel-moment-dois-je-me-soucier-daccessibilitenbsp",
    title: "À quel moment dois-je me soucier d’accessibilité&amp;nbsp;?",    
    body: "## À quel moment dois-je me soucier d’accessibilité&amp;nbsp;?  L’accessibilité doit être prise en compte à toutes les étapes de la vie d’un projet, des études préalables à la maintenance. Il est crucial que l’accessibilité soit embarquée dans le projet au plus tôt dès l’étude d’opportunité, car elle peut être structurante pour l’ensemble du projet et notamment lors des choix de technologies.  "
});

documentTitles["faq.html#quels-sont-les-liens-entre-accessibilite-et-ergonomienbsp"] = "Quels sont les liens entre accessibilité et ergonomie&amp;nbsp;?";
index.add({
    url: "faq.html#quels-sont-les-liens-entre-accessibilite-et-ergonomienbsp",
    title: "Quels sont les liens entre accessibilité et ergonomie&amp;nbsp;?",    
    body: "## Quels sont les liens entre accessibilité et ergonomie&amp;nbsp;?  L’ergonomie (conception d’outils, machines et dispositifs confortables, sécurisés et efficaces pour le plus grand nombre) inclut l’accessibilité (réalisation d’interfaces utilisables par tous quel que soit leur matériel, leurs logiciels, leur langue, leur culture et leurs aptitudes physiques ou mentales).  L’ergonomie traite de l’utilité (le fonctionnel et le partage des tâches entre opérateur et système) et de l’utilisabilité (l’organisation de l’information et les modes d’actions utilisateur). L’accessibilité se concentre sur l’utilisabilité, elle est donc une partie de l’ergonomie. Rendre une IHM accessible améliore, de fait, l’ergonomie, la réciproque n’étant pas forcément vraie.  Faire intervenir, de concert, ces deux spécialités vous permet d’optimiser la qualité du service rendu à vos utilisateurs.  "
});

documentTitles["faq.html#a-quel-public-sadresse-laccessibilitenbsp"] = "À quel public s’adresse l’accessibilité&amp;nbsp;?";
index.add({
    url: "faq.html#a-quel-public-sadresse-laccessibilitenbsp",
    title: "À quel public s’adresse l’accessibilité&amp;nbsp;?",    
    body: "## À quel public s’adresse l’accessibilité&amp;nbsp;?  La prise en compte de l’accessibilité bénéficie en premier lieu aux personnes souffrant d’une déficience ou d’un handicap et qui parfois utilisent des outils d’assistance spécifiques (lecteur d’écrans, joystick, …), même temporairement. Par extension, les seniors sont concernés ainsi que les utilisateurs de matériels et de technologies obsolètes ou vieillissantes.  On estime que 15% de la population, en Europe, est directement impactée par un manque d’accessibilité.  De plus, l’amélioration de l’accessibilité permet une augmentation de l’ergonomie et donc a un impact positif sur l’expérience de tous les utilisateurs.  "
});

documentTitles["faq.html#combien-ca-coute-et-quest-ce-que-ca-apportenbsp"] = "Combien ça coûte et qu’est ce que ça apporte&amp;nbsp;?";
index.add({
    url: "faq.html#combien-ca-coute-et-quest-ce-que-ca-apportenbsp",
    title: "Combien ça coûte et qu’est ce que ça apporte&amp;nbsp;?",    
    body: "## Combien ça coûte et qu’est ce que ça apporte&amp;nbsp;?  La prise en compte de l’accessibilité relève principalement de l’application de bonnes pratiques. C’est peu coûteux, 5-10% du développement, voire moins si on en tient compte dès le début et donc que l'équipe projet et les développeurs sont formés. En revanche, une prise en compte tardive peut mener à une refonte de tout ou partie de l’interface et nécessitera d’importants re-développements.  L’amélioration de l’accessibilité permet d’augmenter le nombre d’utilisateurs potentiels mais aussi&amp;nbsp;:      - d’améliorer le référencement par les moteurs de recherche.     - d’assurer une plus grande pérennité de l’application et de faciliter l’adaptation aux contextes de mobilité (tablette, téléphones…).     - de diminuer des coûts de maintenance avec des évolutions plus aisées car basées sur un code de qualité, plus interopérable et plus maintenable.     - d’améliorer l’utilisabilité (ergonomie) avec une plus grande qualité du service pour tous.   "
});

documentTitles["faq.html#quels-sont-les-outils-mis-a-disposition-par-easenbsp"] = "Quels sont les outils mis à disposition par EASE&amp;nbsp;?";
index.add({
    url: "faq.html#quels-sont-les-outils-mis-a-disposition-par-easenbsp",
    title: "Quels sont les outils mis à disposition par EASE&amp;nbsp;?",    
    body: "## Quels sont les outils mis à disposition par EASE&amp;nbsp;?  - Orange Boosted, framework front basé sur Bootstrap - confort +, outils de modification de l'apparence et du comportement des pages web - mDAN, application mobile pour apprendre à coder accessible sous iOS et Android - Des outils et méthodes  - Des exemples  "
});


