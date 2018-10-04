
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
    body: "### Le handicap auditif &lt;div class=\&quot;axs-picto auditif\&quot;&gt;     &lt;ul&gt;         &lt;li&gt;Personnes sourdes&lt;/li&gt;         &lt;li&gt;Personnes malentendantes&lt;/li&gt;         &lt;li&gt;Personnes sourdes-aveugles&lt;/li&gt;         &lt;li&gt;Difficulté de perception de la parole dans un environnement bruyant&lt;/li&gt;     &lt;/ul&gt; **Solutions adaptées&amp;nbsp;:** transcription, sous-titres. &lt;/div&gt;  "
});

documentTitles["focus.html#le-handicap-visuel"] = "Le handicap visuel";
index.add({
    url: "focus.html#le-handicap-visuel",
    title: "Le handicap visuel",    
    body: "### Le handicap visuel  &lt;div class=\&quot;axs-picto visuel\&quot;&gt;     &lt;ul&gt;         &lt;li&gt;Personnes malvoyantes&lt;/li&gt;         &lt;li&gt;Personnes qui ne distinguent pas ou mal les couleurs (daltonisme, achromatopsie)&lt;/li&gt;         &lt;li&gt;Personnes sensibles à une forte luminosité des couleurs&lt;/li&gt;         &lt;li&gt;Personnes aveugles&lt;/li&gt;         &lt;li&gt;Personnes sourdes-aveugles&lt;/li&gt;     &lt;/ul&gt;     **Solutions adaptées&amp;nbsp;:** tablette Braille, synthèse vocale, personnalisation de l’affichage (ajustement des couleurs). &lt;/div&gt;  "
});

documentTitles["focus.html#le-handicap-cognitif"] = "Le handicap cognitif";
index.add({
    url: "focus.html#le-handicap-cognitif",
    title: "Le handicap cognitif",    
    body: "### Le handicap cognitif &lt;div class=\&quot;axs-picto cognitif\&quot;&gt;     &lt;ul&gt;         &lt;li&gt;Personnes avec des troubles DYS&lt;/li&gt;         &lt;li&gt;Autres troubles affectant la lecture, la mémorisation, la concentration, la compréhension, la résolution des problèmes, le raisonnement et le langage.&lt;/li&gt;     &lt;/ul&gt; **Solutions adaptées&amp;nbsp;:** hiérarchisation et simplification de l’information, mise en page linéaire, police sans serif (Arial, OpenDyslexic, AccessibleDfa), logiciels de dictée.   &amp;nbsp; &lt;/div&gt;  "
});

documentTitles["focus.html#le-handicap-moteur-et-de-prehension"] = "Le handicap moteur et de préhension";
index.add({
    url: "focus.html#le-handicap-moteur-et-de-prehension",
    title: "Le handicap moteur et de préhension",    
    body: "### Le handicap moteur et de préhension &lt;div class=\&quot;axs-picto physique\&quot;&gt;     &lt;ul&gt;         &lt;li&gt;Difficultés de préhension et de contrôle des mouvements.&lt;/li&gt;         &lt;li&gt;Personnes ayant des difficultés pour réaliser des combinaisons de touches&lt;/li&gt;         &lt;li&gt;Personnes dont les mains tremblent&lt;/li&gt;         &lt;li&gt;Personnes ne pouvant pas se servir d'une main ou de ses deux main(s)&lt;/li&gt;             &lt;/ul&gt; ** Solutions adaptées&amp;nbsp;:** périphériques adaptés (souris ou clavier ergonomique, guide-doigts pour clavier, trackball, joystick, contacteur…), logiciels de dictée &lt;/div&gt; &amp;nbsp;  &lt;h2 class=\&quot;page-title\&quot;&gt;L'accessibilité numérique&lt;/h2&gt;  &lt;div class=\&quot;axs-picto\&quot;&gt;     Les règles d’accessibilité servent au-delà des situations de handicaps identifiées et apportent du confort pour tous; quelques cas ci-dessous:           &lt;ul&gt;         &lt;li&gt;Les environnements bruyants tels que open space, boutiques, hall d'accueil…&lt;/li&gt;         &lt;li&gt;Les personnes avec un handicap temporaire (bras cassé, infection de l’œil…)&lt;/li&gt;         &lt;li&gt;Un matériel ou service inapproprié (imprimante noir et blanc, bas débit…)&lt;/li&gt;         &lt;li&gt;Les formulaires à renseigner : la navigation au clavier permet de remplir les formulaires sans utiliser la souris et apporte un gain de temps appréciable&lt;/li&gt;     &lt;/ul&gt; &lt;/div&gt;  &lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2016  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt;"
});



documentTitles["focus-cognitif.html#recommandations-accessibilite-orange"] = "Recommandations accessibilité Orange";
index.add({
    url: "focus-cognitif.html#recommandations-accessibilite-orange",
    title: "Recommandations accessibilité Orange",    
    body: "# Recommandations accessibilité Orange &lt;h2 class=\&quot;page-title\&quot;&gt;Le handicap cognitif&lt;/h2&gt;  &lt;script&gt;$(document).ready(function () {     setBreadcrumb([{\&quot;label\&quot;:\&quot;Les situations de handicap\&quot;, \&quot;url\&quot;: \&quot;./focus.html\&quot;},         {\&quot;label\&quot;:\&quot;Le handicap cognitif\&quot;}]);     addSubMenu([         {\&quot;label\&quot;:\&quot;Le handicap cognitif\&quot;,\&quot;url\&quot;:\&quot;focus-cognitif.html\&quot;},         {\&quot;label\&quot;:\&quot;Les séniors\&quot;,\&quot;url\&quot;:\&quot;focus-seniors.html\&quot;}     ]); });&lt;/script&gt;  &lt;span data-menuitem=\&quot;focus\&quot;&gt;&lt;/span&gt;  **Le handicap cognitif** est la conséquence de dysfonctionnements des fonctions cognitives : troubles de l’attention, de la mémoire, de l’adaptation au changement, du langage, des identifications perceptives (gnosies) et des gestes (praxies). Le handicap cognitif n’implique **pas de déficience intellectuelle** mais des difficultés à mobiliser ses capacités. À ne pas confondre avec le handicap mental et le handicap psychique : - Le handicap mental, qui est la conséquence d’une déficience intellectuelle, considérée comme une capacité plus limitée d’apprentissage et un développement intellectuel significativement inférieur à la moyenne et se traduit par des difficultés plus ou moins importantes de réflexion, de conceptualisation, de communication, de décision, etc. - Le handicap psychique qui est la conséquence de troubles psychiques invalidants. Comme le handicap cognitif, le handicap psychique n’implique pas de déficience intellectuelle. Il est caractérisé par une alternance d’états psychiques calmes ou tendus et par des difficultés à acquérir ou à exprimer des habiletés psychosociales, avec des déficits d’attention et des difficultés à élaborer et suivre un plan d’action. Il peut donc notamment se traduire par des angoisses, des troubles cognitifs (mémorisation, attention, capacités d’organisation, d’anticipation, adaptation au contexte de la situation) et des difficultés dans la relation à autrui et la communication.  "
});

documentTitles["focus-cognitif.html#les-troubles-dys"] = "Les troubles DYS";
index.add({
    url: "focus-cognitif.html#les-troubles-dys",
    title: "Les troubles DYS",    
    body: "### Les troubles DYS Les troubles DYS sont des troubles neurologiques durables qui vont affecter une fonction cognitive particulière comme la lecture, le geste, le calcul… Il ne s’agit pas d’une déficience intellectuelle, mais d’un mode de raisonnement différent. Les troubles DYS rassemblent différents type de troubles : - La dyslexie = Trouble de la lecture - La dysorthographie = Trouble de l’écriture - La dysphasie = Trouble du langage - La dyscalculie = Trouble du calcul et du raisonnement logico-mathématique - La dyspraxie = Dysfonctionnement des praxies  La dyslexie est un trouble impactant l’accessibilité numérique.  "
});

documentTitles["focus-cognitif.html#exemples-dobstacles-rencontres-par-un-internaute-dyslexique"] = "Exemples d’obstacles rencontrés par un internaute dyslexique";
index.add({
    url: "focus-cognitif.html#exemples-dobstacles-rencontres-par-un-internaute-dyslexique",
    title: "Exemples d’obstacles rencontrés par un internaute dyslexique",    
    body: "#### Exemples d’obstacles rencontrés par un internaute dyslexique - des pages surchargées d’informations - une mise en page non linéaire - de longs blocs de texte - une police de caractère avec empattements - des mots soulignés, en italique ou en majuscule - des fonds blancs éblouissants ou non uniformes - des éléments animés    &lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2016  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt;"
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
    body: "### Problématique  Un sénior est une personne plus ou moins âgée faisant partie d’une catégorie de personnes dont la définition varie selon le contexte : travail, santé, etc. D’un point de vue de la santé,  l’Organisation Mondiale de la Santé considère comme personne âgée une personne de plus de 60 ans. Elle estime qu’entre 2000 et 2050, cette population doublera au niveau mondial de 11% à 22%. Selon l’INSERM, le déclin des capacités cognitives commence dès 45 ans.   Les déficiences qui peuvent être liées à l’âge ont un impact sur l’utilisation des technologies numériques.  "
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



documentTitles["outils.html#les-solutions-dassistances-ou-aides-techniques"] = "Les solutions d'assistances ou aides techniques";
index.add({
    url: "outils.html#les-solutions-dassistances-ou-aides-techniques",
    title: "Les solutions d'assistances ou aides techniques",    
    body: "# Les solutions d'assistances ou aides techniques  &lt;script&gt;$(document).ready(function () {     setBreadcrumb([{\&quot;label\&quot;:\&quot;Les solutions d'assistance\&quot;}]); });&lt;/script&gt;  L’accès aux &lt;abbr&gt;TICS&lt;/abbr&gt; &lt;i&gt;Technologies de l'Information et de la Communication&lt;/i&gt; telles que sites Web, applications mobile, contenus bureautiques ou multimédias….) est rendu possible aux personnes en situation de handicap grâce à des technologies  d’assistance. Ces technologies comprennent :  * des aides logicielles, comme les synthèses vocales ou les loupes numériques, * des aides matérielles : souris adaptées, claviers à grosses touches, micros, trackballs, plage Braille, etc.  Ces aides ne fonctionnent que si les applications ou contenus ont été créés en suivant les règles d’accessibilité de conception et de développement. On dira ainsi qu’un site est accessible s’il est compatible avec les aides techniques (synthèses vocales, systèmes de modifications de la taille des polices ou des couleurs, etc.) et avec la navigation au clavier.  "
});

documentTitles["outils.html#quelques-exemples-et-definitions"] = "Quelques exemples et définitions";
index.add({
    url: "outils.html#quelques-exemples-et-definitions",
    title: "Quelques exemples et définitions",    
    body: "## Quelques exemples et définitions  "
});

documentTitles["outils.html#la-synthese-vocale"] = "La synthèse vocale";
index.add({
    url: "outils.html#la-synthese-vocale",
    title: "La synthèse vocale",    
    body: "### La synthèse vocale La **synthèse vocale** est une voix qui lit les textes et images affichés à l’écran.    Autre terme utilisé : lecteur d’écran (note : le lecteur d’écran est un logiciel qui récupère le texte présent sur l’écran. Le texte est ensuite  restitué vocalement ou en Braille).   Exemples : Jaws et NVDA sur PC Windows, TalkBack sur mobile Android, VoiceOver sur mobile Apple ou Mac.  &lt;img src=\&quot;./images/audio.jpg\&quot; alt=\&quot;\&quot; class=\&quot;img-fluid\&quot;&gt;   "
});

documentTitles["outils.html#la-plage-braille"] = "La plage braille";
index.add({
    url: "outils.html#la-plage-braille",
    title: "La plage braille",    
    body: "### La plage braille La **plage Braille** permet de lire du bout des doigts la transcription en braille du contenu de l’écran ou de rentrer de l'information en braille dans l'ordinateur.   &lt;figure&gt;     &lt;img src=\&quot;./images/plage-braille.jpg\&quot; alt=\&quot;photo d'une plage braille\&quot; class=\&quot;img-fluid\&quot;&gt;     &lt;figcaption&gt;Photo : terminal braille, de Karola Riegler, 2009, Licence CC BY ND&lt;/figcaption&gt; &lt;/figure&gt;  "
});

documentTitles["outils.html#la-loupe-numerique"] = "La loupe numérique";
index.add({
    url: "outils.html#la-loupe-numerique",
    title: "La loupe numérique",    
    body: "### La loupe numérique  La **loupe numérique** est un logiciel qui permet un agrandissement total ou partiel de l’écran ; elle donne la possibilité de régler les contrastes, la luminosité, les couleurs du fond de page et du texte, la taille et la couleur du pointeur (curseur), la mise en valeur des menus et lignes, ou même de vocaliser du texte.    Autres termes utilisés : logiciel de zoom, logiciel de grossissement de caractères.   Exemples : le logiciel ZoomText, le logiciel loupe de windows.  &lt;figure&gt;     &lt;img src=\&quot;./images/loupe.jpg\&quot; alt=\&quot;photo d'un ecran d'ordinateur avec zoom à 400%\&quot; class=\&quot;img-fluid\&quot;&gt;     &lt;figcaption&gt;Exemple d'utilisation de la loupe windows avec réglage du grossissement à 400%.&lt;/figcaption&gt; &lt;/figure&gt;  "
});

documentTitles["outils.html#le-guide-doigts"] = "Le guide-doigts";
index.add({
    url: "outils.html#le-guide-doigts",
    title: "Le guide-doigts",    
    body: "### Le guide-doigts Le **guide-doigts** est une plaque posée sur le clavier qui permet de faciliter l’accès aux touches et d’éviter les frappes parasites ou la pression simultanée sur plusieurs touches.  &lt;figure&gt;     &lt;img src=\&quot;./images/guidedoigt.jpg\&quot; alt=\&quot;photo d'un clavier équipé d'un guide doigt\&quot; class=\&quot;img-fluid\&quot;&gt;     &lt;figcaption&gt;Photo : guide doigt copyplastic.com&lt;/figcaption&gt; &lt;/figure&gt;  "
});

documentTitles["outils.html#les-peripheriques-tactiles-de-pointage"] = "Les périphériques tactiles de pointage";
index.add({
    url: "outils.html#les-peripheriques-tactiles-de-pointage",
    title: "Les périphériques tactiles de pointage",    
    body: "### Les périphériques tactiles de pointage  Les **périphériques tactiles de pointage** permettent de remplacer des souris ou des claviers standards et d’interagir avec des mouvements réduits des mains et des doigts, ou avec d’autres parties du corps. * Les **joysticks** (ou souris-joystick) sont équipés d’un manche qui permet de contrôler le mouvement du pointeur à l’écran dans différentes directions.  * Les **trackballs** ou souris à boule sont équipés d'une grosse boule qui permet de déplacer le pointeur en faisant simplement rouler la boule. * Les **contacteurs** sont des périphériques qui jouent la fonction de sélection (clic, double clic) de la souris conventionnelle. Il existe une grande variété de contacteurs : au doigt, à la bouche ou à la tête, au pied, etc.  Autres termes utilisés : interrupteur, switch, souris à bouche, etc.   La plupart de ces périphériques tactiles fonctionnent avec le système de « navigation au clavier » et sont configurés pour la personne qui l’utilise.  "
});

documentTitles["outils.html#la-navigation-au-clavier"] = "La navigation au clavier";
index.add({
    url: "outils.html#la-navigation-au-clavier",
    title: "La navigation au clavier",    
    body: "### La navigation au clavier  La **navigation au clavier** permet à un utilisateur de parcourir le contenu et d’utiliser les fonctionnalités des sites Web ou applications mobiles uniquement grâce au clavier ou à la gestuelle mobile. Le curseur est contrôlé à l'aide de quelques touches. La navigation au sein d’une page se fait d’item en item à l’aide de la touche de tabulation principalement. Et la manipulation de ces items se fait à l’aide des touches directionnelles (flèche gauche, flèche droite…), de la touche espace et de la touche de validation. Au fur et à mesure des actions, le focus (l’endroit où est positionné le curseur) doit être visible pour permettre à l’utilisateur de se situer. La  navigation au clavier est indispensable pour certains périphériques et demande de respecter des règles de développement précises.   &lt;img src=\&quot;./images/clavier.jpg\&quot; alt=\&quot;\&quot; class=\&quot;img-fluid\&quot;&gt;  "
});

documentTitles["outils.html#la-reconnaissance-vocale"] = "La reconnaissance vocale";
index.add({
    url: "outils.html#la-reconnaissance-vocale",
    title: "La reconnaissance vocale",    
    body: "### La reconnaissance vocale  La **reconnaissance vocale** permet d'analyser la voix humaine captée au moyen d'un microphone pour la transcrire sous la forme d'un texte.    Exemples : le logiciel de dictée Dragon, les assistants vocaux de nos smartphones.  &lt;figure&gt;     &lt;img src=\&quot;./images/vocale.jpg\&quot; alt=\&quot;photo d'une personne parlant devant son téléphone\&quot; class=\&quot;img-fluid\&quot;&gt;     &lt;figcaption&gt;Photo : Alex Washburn / Wired / Licence Creative Commons&lt;/figcaption&gt; &lt;/figure&gt;  "
});

documentTitles["outils.html#la-transcription"] = "La transcription";
index.add({
    url: "outils.html#la-transcription",
    title: "La transcription",    
    body: "### La transcription  La **transcription** est une version textuelle d’enregistrements vidéo ou audio. La transcription est présentée dans un document numérique (Word, PDF….).  "
});

documentTitles["outils.html#les-sous-titres"] = "Les sous-titres";
index.add({
    url: "outils.html#les-sous-titres",
    title: "Les sous-titres",    
    body: "### Les sous-titres  Les **sous-titres** sont une version textuelle synchronisée du contenu audio d’un enregistrement multimédia et s’affichent sur l’écran.    Autres termes utilisés : sous-titres transcrits, « &lt;span lang=\&quot;en\&quot;&gt;Closed Captions&lt;/span&gt; » (CC). L’anglais fait une distinction entre le texte transcrit (« &lt;span lang=\&quot;en\&quot;&gt;Closed Captions&lt;/span&gt; ») destiné en premier aux malentendants et le texte traduit d’une langue à une autre (« &lt;span lang=\&quot;en\&quot;&gt;subtitles &lt;/span&gt;»). Cette distinction n’existe pas en français qui parle simplement de sous-titres.    &lt;img src=\&quot;./images/soustitres.jpg\&quot; alt=\&quot;capture d'écran d'une vidéo affichant des sous-titres\&quot; class=\&quot;img-fluid\&quot;&gt;      &lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2016  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt;"
});



documentTitles["about.html#recommandations-accessibilite-orange"] = "Recommandations accessibilité Orange";
index.add({
    url: "about.html#recommandations-accessibilite-orange",
    title: "Recommandations accessibilité Orange",    
    body: "# Recommandations accessibilité Orange &lt;h2 class=\&quot;page-title\&quot;&gt;À propos&lt;/h2&gt;  &lt;script&gt;$(document).ready(function () {     setBreadcrumb([{\&quot;label\&quot;:\&quot;À propos\&quot;}]); });&lt;/script&gt;  Documentation sous [licence CC BY SA 3.0](https://github.com/Orange-OpenSource/a11y-guidelines/blob/master/LICENSE). Le code source de ce site ainsi que celui des exemples est disponible [sur notre compte github](https://github.com/Orange-OpenSource/a11y-guidelines).    Le logo Orange ainsi que certaines images et captures sont la propriété d'Orange&amp;nbsp;:    &lt;span lang=\&quot;en\&quot;&gt;Copyright (C) 2016 Orange SA All rights reserved&lt;/span&gt;   [Liste des fichiers concernés](/NOTICE.txt)  "
});

documentTitles["about.html#gestion-des-cookies"] = "Gestion des cookies";
index.add({
    url: "about.html#gestion-des-cookies",
    title: "Gestion des cookies",    
    body: "## Gestion des cookies  Vous pouvez modifier à tous moments vos préférences directement depuis le &lt;a role=\&quot;button\&quot; href=\&quot;javascript:tarteaucitron.userInterface.openPanel();\&quot;&gt;panneau de gestion des cookies&lt;/a&gt;. &amp;nbsp; &lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2016  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt;"
});


