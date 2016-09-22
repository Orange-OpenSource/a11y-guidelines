
var index = lunr(function () {
    this.field('body');
    this.ref('url');
});

var documentTitles = {};



documentTitles["contact.html#votre-avis-compte"] = "Votre avis compte";
index.add({
    url: "contact.html#votre-avis-compte",
    title: "Votre avis compte",    
    body: "# Votre avis compte    &lt;script&gt;$(document).ready(function () {     setBreadcrumb([{\&quot;label\&quot;:\&quot;Contact\&quot;}]); });&lt;/script&gt;  Vous avez une remarque, une suggestion à apporter ?    Vérifiez que ceci n'a pas déjà été remonté par quelqu'un d'autre en consultant [la liste des \&quot;issues\&quot;](https://github.com/Orange-OpenSource/a11y-guidelines/issues) sur notre compte github.   Si vous ne trouvez rien concernant votre remarque, [adressez-nous votre commentaire](https://github.com/Orange-OpenSource/a11y-guidelines/issues/new) via github. &lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2016  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt;"
});



documentTitles["organisation.html#organisation-du-site"] = "Organisation du site";
index.add({
    url: "organisation.html#organisation-du-site",
    title: "Organisation du site",    
    body: "# Organisation du site &lt;script&gt;$(document).ready(function () {     setBreadcrumb([{\&quot;label\&quot;:\&quot;Organisation du site\&quot;}]); });&lt;/script&gt;  Ce site est découpé en plusieurs rubriques. Chacune présente les recommandations accessibilité Orange pour un type de plateforme.   Ces différentes rubriques sont disponibles via le menu de navigation situé dans l'en-tête.  Chaque rubrique contient : - Des recommandations en fonction de la plateforme visée - Des ressources pour apprendre et tester soi-même - Des exemples techniques  "
});

documentTitles["organisation.html#liste-des-rubriques"] = "Liste des rubriques";
index.add({
    url: "organisation.html#liste-des-rubriques",
    title: "Liste des rubriques",    
    body: "## Liste des rubriques "
});

documentTitles["organisation.html#accueil"] = "Accueil";
index.add({
    url: "organisation.html#accueil",
    title: "Accueil",    
    body: "### Accueil Il s'agit de la rubrique actuelle : - Présentation succincte de l'accessibilité. - Organisation de ce site.  "
});

documentTitles["organisation.html#web"] = "Web";
index.add({
    url: "organisation.html#web",
    title: "Web",    
    body: "### Web Les recommandations accessibilité pour le Web. - Les critères indispensables à respecter. - Les recommandations techniques pour le web. - Des méthodes et des outils pour rendre un site accessible. - Des exemples fonctionnels.  "
});

documentTitles["organisation.html#mobile"] = "Mobile";
index.add({
    url: "organisation.html#mobile",
    title: "Mobile",    
    body: "### Mobile  Les recommandations accessibilité pour les mobiles. - Liste des différents critères d'accessibilité à respecter pour obtenir une application mobile (Android ou iOS) accessible.  - Tout ce qu'il faut savoir pour coder accessible sur mobile, sous Android ou iOS. - Présentation de l'application mDAN, le démonstrateur d'accessibilité numérique pour mobile. - Un guide simple pour utiliser les lecteurs d'écran d'iOS et d'Android, respectivement VoiceOver et TalkBack.  &lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2016  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt;"
});



documentTitles["index.html#recommandations-accessibilite-orange"] = "Recommandations accessibilité Orange";
index.add({
    url: "index.html#recommandations-accessibilite-orange",
    title: "Recommandations accessibilité Orange",    
    body: "# Recommandations accessibilité Orange  &lt;script&gt;$(document).ready(function () {     setBreadcrumb([{\&quot;label\&quot;:\&quot;Présentation\&quot;}]); });&lt;/script&gt;  "
});

documentTitles["index.html#quest-ce-que-laccessibilite-numerique"] = "Qu'est ce que l'accessibilité numérique ?";
index.add({
    url: "index.html#quest-ce-que-laccessibilite-numerique",
    title: "Qu'est ce que l'accessibilité numérique ?",    
    body: "## Qu'est ce que l'accessibilité numérique ?  &lt;div class=\&quot;axs-picto axs\&quot;&gt; L’accessibilité numérique, c’est rendre possible l’accès à l’information numérique quelle que soit la nature du handicap des personnes et la façon dont chacun consulte l’information. Elle concerne différentes technologies comme le Web, les vidéos et les documents Word et PDF, mais également la télévision numérique ou les téléphones mobiles.  Il ne s’agit pas de démultiplier les supports de l’information, mais de respecter des règles fonctionnelles, graphiques, techniques et éditoriales qui permettront à tous d’accéder à l’information quels que soient leurs outils de consultation. &lt;/div&gt;  "
});

documentTitles["index.html#qui-est-concerne-par-laccessibilite-numerique"] = "Qui est concerné par l’accessibilité numérique ?";
index.add({
    url: "index.html#qui-est-concerne-par-laccessibilite-numerique",
    title: "Qui est concerné par l’accessibilité numérique ?",    
    body: "## Qui est concerné par l’accessibilité numérique ?  Les situations de handicap identifiées ne sont pas seulement celles que l’on voit.    Elles ne sont pas forcement définitives et peuvent atteindre chacun de nous à un moment de sa vie.  &amp;nbsp;   ![](./images/chat.png)  &lt;div class=\&quot;sr-only\&quot;&gt;     Les citations suivantes en sont l'illustration :     &lt;ul&gt;         &lt;li&gt;Les sous-titres me sont utiles car ma langue maternelle n'est pas le français.&lt;/li&gt;         &lt;li&gt;C'est utile de ne pas être obligé d'imprimer en couleur pour comprendre cette carte.&lt;/li&gt;         &lt;li&gt;Après avoir travaillé toute la journée derrière un écran, j'ai plus de difficultés à lire certains textes trop petits.&lt;/li&gt;     &lt;/ul&gt; &lt;/div&gt;  "
});

documentTitles["index.html#les-situations-de-handicap"] = "Les situations de handicap";
index.add({
    url: "index.html#les-situations-de-handicap",
    title: "Les situations de handicap",    
    body: "## Les situations de handicap  "
});

documentTitles["index.html#le-handicap-auditif"] = "Le handicap auditif";
index.add({
    url: "index.html#le-handicap-auditif",
    title: "Le handicap auditif",    
    body: "### Le handicap auditif &lt;div class=\&quot;axs-picto auditif\&quot;&gt;     &lt;ul&gt;         &lt;li&gt;Personnes sourdes&lt;/li&gt;         &lt;li&gt;Personnes mal entendantes&lt;/li&gt;         &lt;li&gt;Personnes sourdes-aveugles&lt;/li&gt;         &lt;li&gt;Difficulté de perception de la parole dans un environnement bruyant&lt;/li&gt;     &lt;/ul&gt; **Solutions adaptées :** ajout de script ou de sous-titres &lt;/div&gt;  "
});

documentTitles["index.html#le-handicap-visuel"] = "Le handicap visuel";
index.add({
    url: "index.html#le-handicap-visuel",
    title: "Le handicap visuel",    
    body: "### Le handicap visuel  &lt;div class=\&quot;axs-picto visuel\&quot;&gt;     &lt;ul&gt;         &lt;li&gt;Personnes avec un petit reste visuel ou celles qui ont une vue incorrigible.&lt;/li&gt;         &lt;li&gt;Personnes qui ne distinguent pas ou mal les couleurs (daltonisme, achromatopsie).&lt;/li&gt;         &lt;li&gt;Personnes sensibles à une luminosité accrue des couleurs&lt;/li&gt;         &lt;li&gt;Personnes complètement aveugles&lt;/li&gt;         &lt;li&gt;Personnes sourdes-aveugles&lt;/li&gt;     &lt;/ul&gt;     **Solutions adaptées :** tablette braille, synthèses vocales, personnalisation de l’affichage. &lt;/div&gt;  "
});

documentTitles["index.html#le-handicap-cognitif"] = "Le handicap cognitif";
index.add({
    url: "index.html#le-handicap-cognitif",
    title: "Le handicap cognitif",    
    body: "### Le handicap cognitif &lt;div class=\&quot;axs-picto cognitif\&quot;&gt;     &lt;ul&gt;         &lt;li&gt;Dyslexie, mémorisation, concentration, compréhension&lt;/li&gt;         &lt;li&gt;Résolution des problèmes&lt;/li&gt;          &lt;li&gt;Lecture&lt;/li&gt;         &lt;li&gt;Langage&lt;/li&gt;         &lt;li&gt;Raisonnement&lt;/li&gt;     &lt;/ul&gt; **Solutions adaptées :** hiérarchisation et simplification de l’information, attention apportées à la mise en page. &lt;/div&gt;  "
});

documentTitles["index.html#le-handicap-moteur-et-de-prehension"] = "Le handicap moteur et de préhension";
index.add({
    url: "index.html#le-handicap-moteur-et-de-prehension",
    title: "Le handicap moteur et de préhension",    
    body: "### Le handicap moteur et de préhension &lt;div class=\&quot;axs-picto physique\&quot;&gt;     &lt;ul&gt;         &lt;li&gt;Troubles de la réalisation des gestes (dyspraxies)&lt;/li&gt;          &lt;li&gt;Dystrophies musculaires&lt;/li&gt;         &lt;li&gt;Lésions rhumatismales&lt;/li&gt;         &lt;li&gt;Un bras cassé&lt;/li&gt;     &lt;/ul&gt; ** Solutions adaptées :** périphériques adaptés (souris, claviers...) &lt;/div&gt;  "
});

documentTitles["index.html#le-handicap-materiel"] = "Le handicap matériel";
index.add({
    url: "index.html#le-handicap-materiel",
    title: "Le handicap matériel",    
    body: "### Le handicap matériel &lt;div class=\&quot;axs-picto materiel\&quot;&gt;     L’utilisation des règles de l’accessibilité servent au delà des situations de handicaps identifiées.       L’accessibilité numérique apporte du confort pour tous :         &lt;ul&gt;         &lt;li&gt;Les utilisateurs de mobiles et smartphones&lt;/li&gt;         &lt;li&gt;Les utilisateurs ayant un bas débit&lt;/li&gt;         &lt;li&gt;Les séniors&lt;/li&gt;         &lt;li&gt;Les environnements bruyants tels que open space, boutiques, accueil...&lt;/li&gt;         &lt;li&gt;Matériel non approprié (imprimante noir et blanc...)&lt;/li&gt;     &lt;/ul&gt; &lt;/div&gt;  &amp;nbsp;  &lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2016  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt;"
});



documentTitles["about.html#a-propos"] = "A propos";
index.add({
    url: "about.html#a-propos",
    title: "A propos",    
    body: "# A propos     &lt;script&gt;$(document).ready(function () {     setBreadcrumb([{\&quot;label\&quot;:\&quot;A propos\&quot;}]); });&lt;/script&gt;  Documentation sous [licence CC BY SA 3.0](https://github.com/Orange-OpenSource/a11y-guidelines/blob/master/LICENSE). Le code source de ce site ainsi que celui des exemples est disponible [sur notre compte github](https://github.com/Orange-OpenSource/a11y-guidelines).    Le logo Orange ainsi que certaines images et captures sont la propriété d'Orange:    Copyright (C) 2016 Orange SA All rights reserved   [Liste des fichiers concernés](/NOTICE.txt)   &lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2016  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt;"
});


