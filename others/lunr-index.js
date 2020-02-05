
var index = lunr(function () {
    this.use(lunr.fr);
    this.field('body');
    this.ref('url');
});

var documentTitles = {};



documentTitles["about.html#a-propos"] = "À propos";
index.add({
    url: "about.html#a-propos",
    title: "À propos",    
    body: "# À propos     &lt;script&gt;$(document).ready(function () {     setBreadcrumb([{\&quot;label\&quot;:\&quot;À propos\&quot;}]); });&lt;/script&gt;  Documentation sous [licence CC BY SA 3.0](https://github.com/Orange-OpenSource/a11y-guidelines/blob/master/LICENSE). Le code source de ce site ainsi que celui des exemples est disponible [sur notre compte github](https://github.com/Orange-OpenSource/a11y-guidelines).    Le logo Orange ainsi que certaines images et captures sont la propriété d'Orange&amp;nbsp;:    Copyright (C) 2016 Orange SA All rights reserved   [Liste des fichiers concernés](/NOTICE.txt)  "
});

documentTitles["about.html#gestion-des-cookies"] = "Gestion des cookies";
index.add({
    url: "about.html#gestion-des-cookies",
    title: "Gestion des cookies",    
    body: "## Gestion des cookies  Vous pouvez modifier à tous moments vos préférences directement depuis le &lt;a role=\&quot;button\&quot; href=\&quot;javascript:tarteaucitron.userInterface.openPanel();\&quot;&gt;panneau de gestion des cookies&lt;/a&gt;.  &amp;nbsp; &lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2016  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt;"
});



documentTitles["contact.html#votre-avis-compte"] = "Votre avis compte";
index.add({
    url: "contact.html#votre-avis-compte",
    title: "Votre avis compte",    
    body: "# Votre avis compte    &lt;script&gt;$(document).ready(function () {     setBreadcrumb([{\&quot;label\&quot;:\&quot;Contact\&quot;}]); });&lt;/script&gt;  Vous avez une remarque, une suggestion à apporter&amp;nbsp;?  Vérifiez que ceci n’a pas déjà été remonté par quelqu’un d’autre en consultant [la liste des «&amp;nbsp;&lt;i lang=\&quot;en\&quot;&gt;issues&lt;/i&gt;&amp;nbsp;»](https://github.com/Orange-OpenSource/a11y-guidelines/issues) sur notre compte github.   Si vous ne trouvez rien concernant votre remarque, [adressez-nous votre commentaire](https://github.com/Orange-OpenSource/a11y-guidelines/issues/new) via github.  &amp;nbsp; &lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2016  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt;"
});



documentTitles["index.html#recommandations-accessibilite-orange-pour-leditorial"] = "Recommandations accessibilité Orange pour l’éditorial";
index.add({
    url: "index.html#recommandations-accessibilite-orange-pour-leditorial",
    title: "Recommandations accessibilité Orange pour l’éditorial",    
    body: "# Recommandations accessibilité Orange pour l’éditorial  &lt;script&gt;$(document).ready(function () {     setBreadcrumb([{\&quot;label\&quot;:\&quot;Présentation\&quot;}]); });&lt;/script&gt;  "
});

documentTitles["index.html#recommandations-editoriales-generales"] = "Recommandations éditoriales générales";
index.add({
    url: "index.html#recommandations-editoriales-generales",
    title: "Recommandations éditoriales générales",    
    body: "## Recommandations éditoriales générales Les recommandations générales décrivent les recommandations à respecter quel que soit le type de contenu (web, email, document Word, etc.). &lt;ul role=\&quot;presentation\&quot;&gt; &lt;li&gt;&lt;a href=\&quot;./editorial.html\&quot;&gt;Accéder aux recommandations éditoriales générales&lt;/a&gt;&lt;/li&gt; &lt;/ul&gt;  "
});

documentTitles["index.html#recommandations-specifiques-par-type-de-contenu"] = "Recommandations spécifiques par type de contenu";
index.add({
    url: "index.html#recommandations-specifiques-par-type-de-contenu",
    title: "Recommandations spécifiques par type de contenu",    
    body: "## Recommandations spécifiques par type de contenu Les recommandations suivantes décrivent les règles spécifiques à respecter en fonction du type de document&amp;nbsp;: - [Documents Word](./word.html)&amp;nbsp;: section consacrée à la création de documents Word accessibles.  - [Documents PowerPoint](./powerpoint.html)&amp;nbsp;: section consacrée à la création de présentations PowerPoint accessibles.  - [Documents PDF](./pdf.html)&amp;nbsp;: section consacrée à la rédaction de documents PDF accessibles.  - [Rédiger des emails accessibles](./pushmail.html)&amp;nbsp;: section consacrée à la rédaction de «&amp;nbsp;&lt;i lang=\&quot;en\&quot;&gt;pushmail&lt;/i&gt;&amp;nbsp;» accessibles.  - [Fournir des contenus vidéos ou audios](./video-audio.html)&amp;nbsp;: section consacrée à la mise en place dans le contenu de vidéos ou de fichiers audios accessibles.  &amp;nbsp; &lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2016  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt;"
});



documentTitles["powerpoint.html#accessibilite-des-documents-powerpoint"] = "Accessibilité des documents PowerPoint";
index.add({
    url: "powerpoint.html#accessibilite-des-documents-powerpoint",
    title: "Accessibilité des documents PowerPoint",    
    body: "# Accessibilité des documents PowerPoint &lt;script&gt;$(document).ready(function () {     setBreadcrumb([{\&quot;label\&quot;:\&quot;Microsoft Powerpoint\&quot;}]);     addSubMenu([       {\&quot;label\&quot;:\&quot;Créer un document accessible\&quot;,\&quot;url\&quot;:\&quot;powerpoint-create.html\&quot;},        {\&quot;label\&quot;:\&quot;Comment tester mon document\&quot;,\&quot;url\&quot;:\&quot;powerpoint-test.html\&quot;}     ]); });&lt;/script&gt;  &lt;style&gt;code {font-weight: bold;}&lt;/style&gt;    Cette section contient des recommandations pour : - [Créer un document PowerPoint accessible](./powerpoint-create.html) - [Tester l'accessibilité d'un document PowerPoint](./powerpoint-test.html)  &lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2016  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt;"
});



documentTitles["powerpoint-create.html#creer-des-documents-powerpoint-accessibles"] = "Créer des documents PowerPoint accessibles";
index.add({
    url: "powerpoint-create.html#creer-des-documents-powerpoint-accessibles",
    title: "Créer des documents PowerPoint accessibles",    
    body: "# Créer des documents PowerPoint accessibles &lt;script&gt;$(document).ready(function () {     setBreadcrumb([       {\&quot;label\&quot;:\&quot;PowerPoint accessible\&quot;, \&quot;url\&quot;:\&quot;powerpoint.html\&quot;},       {\&quot;label\&quot;:\&quot;Créer un document accessible\&quot;},       ]);     addSubMenu([       {\&quot;label\&quot;:\&quot;Créer un document accessible\&quot;,\&quot;url\&quot;:\&quot;powerpoint-create.html\&quot;, \&quot;expanded\&quot;: true},        {\&quot;label\&quot;:\&quot;Comment tester mon document\&quot;,\&quot;url\&quot;:\&quot;powerpoint-test.html\&quot;}     ]); });&lt;/script&gt;  &lt;style&gt;code {font-weight: bold;}&lt;/style&gt;  &lt;span data-menuitem=\&quot;powerpoint\&quot;&gt;&lt;/span&gt;  Produire un document PowerPoint accessible nécessite de respecter différentes recommandations. Elles sont synthétisées ci-après (guides détaillés consultables sur &lt;a href=\&quot;https://disic.github.io/guides-documents_bureautiques_accessibles/html/\&quot;&gt;le site de la &lt;abbr title=\&quot;direction interministérielle du numérique et du système d’information et de communication\&quot;&gt;DINSIC&lt;/abbr&gt;&lt;/a&gt;). Pour vous aider PowerPoint intègre un outil permettant de vérifier l’accessibilité d’une présentation. Cet outil identifie les principales erreurs et propose des solutions. N’hésitez pas à vous y référer.   "
});

documentTitles["powerpoint-create.html#masques-de-diapositive"] = "Masques de diapositive";
index.add({
    url: "powerpoint-create.html#masques-de-diapositive",
    title: "Masques de diapositive",    
    body: "## Masques de diapositive Définir des masques de diapositives est la première chose à faire  et une condition sine qua none pour créer une présentation homogène et accessible. - Ouvrir le mode Masque des diapositives pour mettre en forme vos diapositives (dans l’onglet `Affichage`, sélectionner `Masque des diapositives`). - Utiliser les sous-menus `Mise en pages du masque` et `Insérer un espace réservé`. - Éviter d’ajouter des Zones de texte ou des Images directement dans la présentation via le menu `Insertion`. - Créer autant de masques que de types de diapositives nécessaires. &lt;img alt=\&quot;Captures d'écran relatives à la création d'un masque de diapositive dans poweroint\&quot; title=\&quot;Captures d'écran relatives à la création d'un masque de diapositive dans poweroint\&quot; src=\&quot;./images/masques.png\&quot; class=\&quot;img-fluid\&quot;&gt;  Remarque : Si vous modifiez le masque des diapositives ou les mises en pages après avoir créé les différentes diapositives, vous devrez réappliquer les mises en page modifiées aux diapositives existantes de votre présentation en mode Normal.  "
});

documentTitles["powerpoint-create.html#attributs-de-la-presentation"] = "Attributs de la présentation";
index.add({
    url: "powerpoint-create.html#attributs-de-la-presentation",
    title: "Attributs de la présentation",    
    body: "## Attributs de la présentation  "
});

documentTitles["powerpoint-create.html#1-la-langue"] = "1. La langue";
index.add({
    url: "powerpoint-create.html#1-la-langue",
    title: "1. La langue",    
    body: "### 1. La langue Pour qu’un lecteur d’écran puisse restituer correctement le contenu de votre présentation :   - La langue principale doit être définie dans le menu : `Fichier &gt; Options &gt; Langue`. - Tout changement de langue ponctuel doit être signalé en sélectionnant le groupe de mots concerné puis `Révision &gt; Langue &gt; Définir la langue de vérification`.  "
});

documentTitles["powerpoint-create.html#2-les-autres-proprietes"] = "2.	Les autres propriétés";
index.add({
    url: "powerpoint-create.html#2-les-autres-proprietes",
    title: "2.	Les autres propriétés",    
    body: "### 2.	Les autres propriétés Renseigner les champs « Titre », « Auteur » et « Mots clefs » dans la zone « Propriétés » (colonne de droite), accessible depuis le menu `Fichier &gt; Informations`.    &lt;img alt=\&quot;Capture d'écran, propriétés d'un document poweroint\&quot; title=\&quot;Capture d'écran, propriétés d'un document poweroint\&quot; src=\&quot;./images/attributs.png\&quot; class=\&quot;img-fluid\&quot;&gt;  Ces informations accessibles à tous via un simple clic dans Windows sur un fichier (affichage dans la partie basse de la fenêtre de dialogue) ou via un clic droit dans `Propriétés`, pourront également être lues par un lecteur d’écran.  &lt;img alt=\&quot;Capture d'écran, propriétés d'un document poweroint dans l'explorateur Windows\&quot; title=\&quot;Capture d'écran, propriétés d'un document poweroint dans l'explorateur Windows\&quot; src=\&quot;./images/attributs2.png\&quot; class=\&quot;img-fluid\&quot;&gt;  &amp;nbsp;  "
});

documentTitles["powerpoint-create.html#titre-des-diapositives"] = "Titre des diapositives";
index.add({
    url: "powerpoint-create.html#titre-des-diapositives",
    title: "Titre des diapositives",    
    body: "## Titre des diapositives  Pour éviter toute confusion entre des diapositives, notamment si l’utilisateur parcourt une présentation à l’aide d’un lecteur d’écran :   donner un titre spécifique à chaque diapositive, à insérer dans la zone : « Cliquer pour ajouter un titre ».  "
});

documentTitles["powerpoint-create.html#redaction-des-contenus"] = "Rédaction des contenus";
index.add({
    url: "powerpoint-create.html#redaction-des-contenus",
    title: "Rédaction des contenus",    
    body: "## Rédaction des contenus  Limiter les abréviations et acronymes, et expliciter à la première occurrence ceux qui ne font pas partie du langage courant.  Conserver l’accentuation sur les majuscules (exemple : É ou Ç) : menu **Insertion &gt; Symbole** ou utiliser [les raccourcis clavier](./editorial.html#annexes).  "
});

documentTitles["powerpoint-create.html#mise-en-forme-des-contenus"] = "Mise en forme des contenus";
index.add({
    url: "powerpoint-create.html#mise-en-forme-des-contenus",
    title: "Mise en forme des contenus",    
    body: "## Mise en forme des contenus Utiliser une police de caractères sans serif (sans empattement comme c’est le cas d’Arial et Helvetica) en corps 12 pixels minimum.  Commencer les phrases par une majuscule et ne pas abuser des phrases entièrement écrites en majuscules. Eviter de justifier le texte et privilégier l’alignement à gauche. Ne pas utiliser de retour chariot ou de tabulation pour espacer des paragraphes, utiliser les options disponibles via un `clic droit &gt; Paragraphe &gt; Retrait et Espacement`.  &lt;img alt=\&quot;Capture d'écran, fenêtre paragraphe, retrait et espacement dans powerpoint\&quot; title=\&quot;Capture d'écran, fenêtre paragraphe, retrait et espacement dans powerpoint\&quot; src=\&quot;./images/paragraphe.png\&quot; class=\&quot;img-fluid\&quot;&gt;  &amp;nbsp;  "
});

documentTitles["powerpoint-create.html#couleurs-et-contrastes"] = "Couleurs et contrastes";
index.add({
    url: "powerpoint-create.html#couleurs-et-contrastes",
    title: "Couleurs et contrastes",    
    body: "## Couleurs et contrastes  1.	Assurer un contraste suffisant entre la couleur du texte et celle du fond :  - 4.5:1 pour du texte de taille normale (12pts ou 16px).  - 3:1 pour du texte de grande taille (150% minimum de la taille normale ou 120% si gras). Si vous utilisez des combinaisons de couleurs différentes de celles préconisées par la charte Orange Groupe, téléchargez gratuitement l’outil &lt;a href=\&quot;https://developer.paciellogroup.com/resources/contrastanalyser/\&quot; lang=\&quot;en\&quot;&gt;Colour Contrast Analyser&lt;/a&gt; qui vous permettra de vérifier très simplement la qualité de vos contrastes. 2.	S’assurer que la couleur n’est pas le seul moyen utilisé pour communiquer l’information Certaines personnes ne perçoivent pas ou mal les couleurs, il est donc primordial d’utiliser un moyen suppléant la couleur pour véhiculer l’information.  &lt;figure&gt;   &lt;img src=\&quot;./images/color-ko.png\&quot; alt=\&quot;Exemple d'image transmettant de l'information via des puces de couleur (rouge, vert...) pour indiquer l'état d'un élément\&quot; /&gt;   &lt;figcaption&gt;**Exemple incorrect** : l'information est transmise uniquement par la couleur.&lt;/figcaption&gt; &lt;/figure&gt;    &amp;nbsp;  &lt;figure&gt;   &lt;img src=\&quot;./images/color-ok.png\&quot; alt=\&quot;Dans cet exemple, les puces ont été remplacées par des icones de forme différente (croix rouge, coche verte ...)\&quot; /&gt;   &lt;figcaption&gt;**Exemple correct** : l'information est transmise par la forme et la couleur.&lt;/figcaption&gt; &lt;/figure&gt;  "
});

documentTitles["powerpoint-create.html#listes-a-puces-ou-numerotees"] = "Listes à puces ou numérotées";
index.add({
    url: "powerpoint-create.html#listes-a-puces-ou-numerotees",
    title: "Listes à puces ou numérotées",    
    body: "## Listes à puces ou numérotées   Eviter de créer manuellement des listes, utiliser le style « liste » (à puces ou numérotées) pour énumérer les éléments de même nature.  &lt;img alt=\&quot;Capture d'écran, option listes à puces dans powerpoint\&quot; title=\&quot;Capture d'écran, option listes à puces dans powerpoint\&quot; src=\&quot;./images/puce.png\&quot; class=\&quot;img-fluid\&quot;&gt;  &amp;nbsp;  "
});

documentTitles["powerpoint-create.html#images"] = "Images";
index.add({
    url: "powerpoint-create.html#images",
    title: "Images",    
    body: "## Images Un document peut tout à fait contenir des images et être accessible à une personne non-voyante. Il faut simplement que l’information portée par l’image soit retranscrite textuellement.  - **Pour les images porteuses d’informations** : associer un texte de remplacement décrivant le contenu informatif via un `clic droit &gt; Format de l’image &gt; Texte de remplacement &gt; champ « Description »`. - **Pour les images décoratives/illustratives** : laisser le champ `description` vide. - **Pour les images informatives complexes** : rédiger un court texte de remplacement et une description détaillée située à proximité de l’image (ou accessible via un lien). Exemple disponible dans [le guide du concepteur RGAA](https://disic.github.io/guide-concepteur/1-images.html#exemple-dune-image-complexe-avec-une-description-d%C3%A9taill%C3%A9e)   &lt;img alt=\&quot;Capture d'écran, de la fenêtre permettant de saisir un texte de remplacement sur une image dans powerpoint\&quot; title=\&quot;Capture d'écran, de la fenêtre permettant de saisir un texte de remplacement sur une image dans powerpoint\&quot; src=\&quot;./images/remplacement.png\&quot; class=\&quot;img-fluid\&quot;&gt;  Pour les graphiques ou schémas : utiliser les composants `SmartArt` plutôt que des images (menu `Insertion &gt; SmartArt`).   Le contenu informatif des graphiques doit être décrit dans le texte de remplacement (`Format de l’objet ou de l’image &gt; Texte de remplacement &gt; Description`).   "
});

documentTitles["powerpoint-create.html#liens"] = "Liens";
index.add({
    url: "powerpoint-create.html#liens",
    title: "Liens",    
    body: "## Liens Une personne non-voyante va, pour naviguer plus rapidement dans un document, demander à son lecteur d’écran de lui lire l’ensemble des liens présents sur une page. Chaque lien sera donc lu en dehors de son contexte visuel  et doit donc se suffire à lui-même.  Rédiger des intitulés de liens explicites (compréhensibles hors contexte visuel de la page).  Annoncer les liens qui déclenchent l’ouverture d’une nouvelle fenêtre (ajouter « nouvelle fenêtre » dans le libellé). &lt;img alt=\&quot;Capture d'écran, fenêtre modifier le lien hypertexte dans powerpoint\&quot; title=\&quot;Capture d'écran, fenêtre modifier le lien hypertexte dans powerpoint\&quot; src=\&quot;./images/lien.png\&quot; class=\&quot;img-fluid\&quot;&gt;  &amp;nbsp;  Pour chaque fichier téléchargeable, indiquer le nom, le format, le poids et la langue du fichier si celle-ci est différente de la langue principale du document.  "
});

documentTitles["powerpoint-create.html#tableaux-de-donnees"] = "Tableaux de données";
index.add({
    url: "powerpoint-create.html#tableaux-de-donnees",
    title: "Tableaux de données",    
    body: "## Tableaux de données Les tableaux sont des composants par définition difficilement accessibles pour un non-voyant. Il faut donc les utiliser avec parcimonie et les structurer le plus simplement possible. Ne pas utiliser les tableaux à des fins de mise en forme. Éviter de fusionner des cellules, d’insérer des images ou de laisser des cellules vides. Ajouter une description s'il s'agit d'un tableau complexe, clic droit : `Format de la forme &gt; Texte de remplacement &gt; Description`  "
});

documentTitles["powerpoint-create.html#contenus-audio-ou-video"] = "Contenus audio ou vidéo";
index.add({
    url: "powerpoint-create.html#contenus-audio-ou-video",
    title: "Contenus audio ou vidéo",    
    body: "## Contenus audio ou vidéo La communication audiovisuelle est aujourd’hui très fréquente en entreprise. Mais parce que certaines personnes peuvent ne pas voir ou ne pas entendre il est primordial de suppléer l’information transmise dans une modalité par une autre. Fournir une transcription intégrale des contenus audio (solution nécessaire et suffisante). Empêcher toute lecture automatique de contenu vidéo ou audio (menu `Animations` : démarrer au clic).  &lt;img alt=\&quot;Capture d'écran, menu animation dans powerpoint\&quot; title=\&quot;Capture d'écran, menu animation dans powerpoint\&quot; src=\&quot;./images/video.png\&quot; class=\&quot;img-fluid\&quot;&gt;  &amp;nbsp;  Tout contenu vidéo doit respecter ces prérequis : - Fournir des sous-titres pour restituer l’ensemble des informations véhiculées par la bande son. - Fournir une audiodescription si la vidéo présente des informations accessibles seulement via les images. - Utiliser des vidéos sans flashs rapides (pas plus de 3 clignotements par seconde).  "
});

documentTitles["powerpoint-create.html#ordre-de-lecture-des-elements"] = "Ordre de lecture des éléments";
index.add({
    url: "powerpoint-create.html#ordre-de-lecture-des-elements",
    title: "Ordre de lecture des éléments",    
    body: "## Ordre de lecture des éléments L’ordre de lecture qui sera suivi par une synthèse vocale peut être vérifié depuis le volet de sélection (menu `Accueil &gt; Organiser &gt; Volet de sélection`).   **Attention** : l’ordre doit être décroissant car c’est le dernier élément de la liste qui est lu en premier par le lecteur.  &lt;img alt=\&quot;Capture d'écran, du volet de sélection dans powerpoint\&quot; title=\&quot;Capture d'écran, du volet de sélection dans powerpoint\&quot; src=\&quot;./images/volet.png\&quot; class=\&quot;img-fluid\&quot;&gt;  &amp;nbsp;  Il est important de vérifier cet ordre directement dans les masques des diapositives.  "
});

documentTitles["powerpoint-create.html#verificateur-daccessibilite-integre"] = "Vérificateur d’accessibilité intégré";
index.add({
    url: "powerpoint-create.html#verificateur-daccessibilite-integre",
    title: "Vérificateur d’accessibilité intégré",    
    body: "## Vérificateur d’accessibilité intégré Il est important de contrôler l’accessibilité de la présentation à l'aide du vérificateur d’accessibilité (menu : `Fichier &gt; Vérifier la présence de problèmes &gt; Vérifier l’accessibilité`). &lt;img alt=\&quot;Capture d'écran, du vérificateur d'accessibilité dans powerpoint\&quot; title=\&quot;Capture d'écran, du vérificateur d'accessibilité dans powerpoint\&quot; src=\&quot;./images/verificateur.png\&quot; class=\&quot;img-fluid\&quot;&gt;  &amp;nbsp;  "
});

documentTitles["powerpoint-create.html#convertir-une-presentation-powerpoint-en-fichier-pdf"] = "Convertir une présentation PowerPoint en fichier PDF";
index.add({
    url: "powerpoint-create.html#convertir-une-presentation-powerpoint-en-fichier-pdf",
    title: "Convertir une présentation PowerPoint en fichier PDF",    
    body: "## Convertir une présentation PowerPoint en fichier PDF  Enregistrer la présentation en &lt;abbr&gt;PDF&lt;/abbr&gt; : `Fichier &gt; Enregistrer sous` et de sélectionner le type de fichier &lt;abbr&gt;PDF&lt;/abbr&gt;. Cocher la case « Balises de structure de document pour l'accessibilité ».  &lt;img alt=\&quot;Capture d'écran, fenêtre d'export en PDF dans powerpoint\&quot; title=\&quot;Capture d'écran, fenêtre d'export en PDF dans powerpoint\&quot; src=\&quot;./images/export.png\&quot; class=\&quot;img-fluid\&quot;&gt;  &amp;nbsp;  Remarque : pour les présentations de plus de 50 diapositives, il faut conseiller aux lecteurs de modifier le paramètre suivant dans Adobe : `Édition &gt; Préférences &gt; Lecture &gt; Option de lecteur d’écran` : « Lire l’intégralité du document »  &lt;img alt=\&quot;Capture d'écran de la fenêtre des préférences dans Adobe reader\&quot; title=\&quot;Capture d'écran de la fenêtre des préférences dans Adobe reader\&quot; src=\&quot;./images/adobe.png\&quot; class=\&quot;img-fluid\&quot;&gt;  &amp;nbsp;  Et pour vérifier l’accessibilité d’un document &lt;abbr&gt;PDF&lt;/abbr&gt; : télécharger &lt;a href=\&quot;https://www.access-for-all.ch/en/pdf-lab/pdf-accessibility-checker-pac.html\&quot; lang=\&quot;en\&quot;&gt;PDF Accessiblity Checker (PAC 3)&lt;/a&gt;.  "
});

documentTitles["powerpoint-create.html#ressources"] = "Ressources";
index.add({
    url: "powerpoint-create.html#ressources",
    title: "Ressources",    
    body: "## Ressources  - [Créer des documents bureautiques accessibles](https://disic.github.io/guides-documents_bureautiques_accessibles/html/), &lt;abbr title=\&quot;direction interministérielle du numérique et du système d’information et de communication\&quot;&gt;DINSIC&lt;/abbr&gt; (français). - &lt;a href=\&quot;https://webaim.org/techniques/powerpoint/\&quot; hreflang=\&quot;en\&quot;&gt;Accessibilité PowerPoint, WebAIM&lt;/a&gt; (anglais).  &lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2016  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt;"
});



documentTitles["powerpoint-test.html#comment-tester-laccessibilite-dun-document-powerpoint"] = "Comment tester l'accessibilité d'un document PowerPoint";
index.add({
    url: "powerpoint-test.html#comment-tester-laccessibilite-dun-document-powerpoint",
    title: "Comment tester l'accessibilité d'un document PowerPoint",    
    body: "# Comment tester l'accessibilité d'un document PowerPoint &lt;script&gt;$(document).ready(function () {     setBreadcrumb([       {\&quot;label\&quot;:\&quot;Microsoft PowerPoint\&quot;, \&quot;url\&quot;:\&quot;powerpoint.html\&quot;},       {\&quot;label\&quot;:\&quot;Comment tester mon document\&quot;} 	  ]);     addSubMenu([         {\&quot;label\&quot;:\&quot;Créer un document accessible\&quot;,\&quot;url\&quot;:\&quot;powerpoint-create.html\&quot;},          {\&quot;label\&quot;:\&quot;Comment tester mon document\&quot;,\&quot;url\&quot;:\&quot;powerpoint-test.html\&quot;, \&quot;expanded\&quot;: true}     ]);      });&lt;/script&gt;  &lt;span data-menuitem=\&quot;powerpoint\&quot;&gt;&lt;/span&gt;  &lt;style&gt;code {font-weight: bold;}h2{padding-top: 1.5rem;}&lt;/style&gt;  "
});

documentTitles["powerpoint-test.html#tests-automatiques"] = "Tests automatiques";
index.add({
    url: "powerpoint-test.html#tests-automatiques",
    title: "Tests automatiques",    
    body: "## Tests automatiques Vous pouvez commencer vos tests avec l’outil de vérification de l’accessibilité de Microsoft Office.   **Fichier &gt; Vérifier la présence de problèmes &gt; Vérifier l’accessibilité**  &lt;img alt=\&quot;capture d'écran du vérificateur d'accessibilité\&quot; src=\&quot;./images/word_verification_fr.png\&quot; class=\&quot;img-fluid\&quot; /&gt;   **Important :** si vous n’avez pas l’option « Vérifier l’accessibilité » dans le document ouvert, faites la manipulation suivante pour la rendre active : enregistrez votre document depuis une version d’Office supérieure (ou égale) à 2010 et au format \&quot;.pptx\&quot; avec la case « compatibilité avec les versions précédentes » décochée.   "
});

documentTitles["powerpoint-test.html#verifications-des-contrastes-de-couleurs"] = "Vérifications des contrastes de couleurs";
index.add({
    url: "powerpoint-test.html#verifications-des-contrastes-de-couleurs",
    title: "Vérifications des contrastes de couleurs",    
    body: "## Vérifications des contrastes de couleurs  Le logiciel &lt;a lang=\&quot;en\&quot; href=\&quot;https://developer.paciellogroup.com/resources/contrastanalyser/\&quot;&gt;Colour Contrast Analyser&lt;/a&gt; indique si les contrastes de couleurs utilisés sont conformes.   &lt;img alt=\&quot;capture d'écran de l'outil colour contrast analyser\&quot; src=\&quot;./images/cca.png\&quot; class=\&quot;img-fluid\&quot; /&gt;    "
});

documentTitles["powerpoint-test.html#tests-avec-les-syntheses-vocales-jaws-et-nvda"] = "Tests avec les synthèses vocales JAWS et NVDA";
index.add({
    url: "powerpoint-test.html#tests-avec-les-syntheses-vocales-jaws-et-nvda",
    title: "Tests avec les synthèses vocales JAWS et NVDA",    
    body: "## Tests avec les synthèses vocales JAWS et NVDA Afin de poursuivre vos vérifications, vous pouvez tester avec une synthèse vocale. Ces tests permettent de naviguer dans la même configuration que les personnes malvoyantes et non-voyantes.  [Apprendre la navigation vocale avec JAWS 2018 et NVDA 2018](https://a11y-guidelines.orange.com/web/methodes-outils-lecteur-ecran.html)  "
});

documentTitles["powerpoint-test.html#autres-tests-manuels"] = "Autres tests manuels";
index.add({
    url: "powerpoint-test.html#autres-tests-manuels",
    title: "Autres tests manuels",    
    body: "## Autres tests manuels Les grilles suivantes au format Excel permettant de vérifier l’accessibilité de vos documents Word et PowerPoint : - [Grille d'évaluation PowerPoint](./grille_eval_AXS_PPT_V2.xlsx) (16 Ko) - [Grille d'évaluation Word](./grille_eval_AXS_WORD_V1.xlsx) (16 Ko)    &lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2016  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt;"
});



documentTitles["word.html#accessibilite-des-documents-word"] = "Accessibilité des documents Word";
index.add({
    url: "word.html#accessibilite-des-documents-word",
    title: "Accessibilité des documents Word",    
    body: "# Accessibilité des documents Word &lt;script&gt;$(document).ready(function () {     setBreadcrumb([{\&quot;label\&quot;:\&quot;Microsoft Word\&quot;}]);     addSubMenu([       {\&quot;label\&quot;:\&quot;Créer un document accessible\&quot;,\&quot;url\&quot;:\&quot;word-create.html\&quot;},        {\&quot;label\&quot;:\&quot;Comment tester mon document\&quot;,\&quot;url\&quot;:\&quot;word-test.html\&quot;}     ]); });&lt;/script&gt;  &lt;style&gt;code {font-weight: bold;}&lt;/style&gt;    Cette section contient des recommandations pour : - [Créer un document Word accessible](./word-create.html) - [Tester l'accessibilité d'un document Word](./word-test.html)  &lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2016  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt;"
});



documentTitles["word-create.html#creer-un-document-word-accessibles"] = "Créer un document Word accessibles";
index.add({
    url: "word-create.html#creer-un-document-word-accessibles",
    title: "Créer un document Word accessibles",    
    body: "# Créer un document Word accessibles &lt;script&gt;$(document).ready(function () {     setBreadcrumb([             {\&quot;label\&quot;:\&quot;Microsoft Word\&quot;,\&quot;url\&quot;:\&quot;word.html\&quot;},       {\&quot;label\&quot;:\&quot;Créer un document accessible\&quot;}     ]);     addSubMenu([       {\&quot;label\&quot;:\&quot;Créer un document accessible\&quot;,\&quot;url\&quot;:\&quot;word-create.html\&quot;, \&quot;expanded\&quot;:true},        {\&quot;label\&quot;:\&quot;Comment tester mon document\&quot;,\&quot;url\&quot;:\&quot;word-test.html\&quot;}     ]); });&lt;/script&gt;  &lt;span data-menuitem=\&quot;word\&quot;&gt;&lt;/span&gt;  &lt;style&gt;h3 {font-size: 1rem;}&lt;/style&gt;  Cette partie décrit la marche à suivre pour rendre vos documents Word accessibles à tous, y compris aux utilisateurs des technologies d’assistance.   "
});

documentTitles["word-create.html#langue"] = "Langue";
index.add({
    url: "word-create.html#langue",
    title: "Langue",    
    body: "## Langue  Définir la langue principale du document dans le menu : **Fichier &gt; Options &gt; Langue**.  Signaler tout changement de langue ponctuel en sélectionnant le groupe de mots concerné puis **Révision &gt; Langue &gt; Définir la langue de vérification**.   &lt;img alt=\&quot;\&quot; src=\&quot;./images/word_langue_fr.png\&quot; class=\&quot;img-fluid\&quot; /&gt;   Ce sont ces attributs qui permettent  qu’un lecteur d’écran restitue correctement le contenu dans la langue du texter.   "
});

documentTitles["word-create.html#attributs-du-fichier"] = "Attributs du fichier";
index.add({
    url: "word-create.html#attributs-du-fichier",
    title: "Attributs du fichier",    
    body: "## Attributs du fichier  Renseigner les champs « Titre », « Auteur » et « Balises » dans la zone « Propriétés » (colonne de droite), accessible depuis le menu **Fichier &gt; Informations**.  Ces informations accessibles à tous via un clic dans Windows sur un fichier (affichage dans la partie basse de la fenêtre de dialogue) ou via un clic droit dans Propriétés, sont aussi lues par un lecteur d’écran.  &lt;img alt=\&quot;\&quot; src=\&quot;./images/word_attributs_fr.png\&quot; class=\&quot;img-fluid\&quot; /&gt;   "
});

documentTitles["word-create.html#titres"] = "Titres";
index.add({
    url: "word-create.html#titres",
    title: "Titres",    
    body: "## Titres   Utiliser les styles « Titre » et « Sous-titre » du menu **Accueil** (Titre 1, Titre 2, etc.).   Définir des intitulés clairs et précis, qui reflètent le contenu du paragraphe concerné.   Ceci permet de structurer le document et d’accéder directement à un contenu spécifique.  "
});

documentTitles["word-create.html#table-des-matieres"] = "Table des matières";
index.add({
    url: "word-create.html#table-des-matieres",
    title: "Table des matières",    
    body: "## Table des matières  Insérer une table des matières via le menu **Références &gt; Table des matières**.   Cela permet aux utilisateurs de trouver des informations plus aisément dans le document.   "
});

documentTitles["word-create.html#redaction-des-contenus"] = "Rédaction des contenus";
index.add({
    url: "word-create.html#redaction-des-contenus",
    title: "Rédaction des contenus",    
    body: "## Rédaction des contenus  Limiter les abréviations et acronymes, et expliciter, à la première occurrence, ceux qui ne font pas partie du langage courant.  Conserver l’accentuation sur les majuscules (exemple : É ou Ç) : menu **Insertion &gt; Symbole** ou utiliser [les raccourcis clavier](./editorial.html#annexes).  "
});

documentTitles["word-create.html#mise-en-forme-des-contenus"] = "Mise en forme des contenus";
index.add({
    url: "word-create.html#mise-en-forme-des-contenus",
    title: "Mise en forme des contenus",    
    body: "## Mise en forme des contenus  Utiliser les styles prédéfinis pour la mise en forme des contenus : le style « Normal » doit être attribué à tous les textes des paragraphes (style par défaut), le style « citation » pour les citations, etc.  Utiliser une police de caractères sans empattement (extensions qui terminent les extrémités des caractères) comme Arial ou Helvetica, en corps 12 pixels minimum et un espacement entre les caractères normal ou élargi.  Commencer les phrases par une majuscule, ne pas écrire de phrase tout en majuscule ; limiter l’utilisation de l’italique.  Éviter de justifier le texte, de le centrer ou de l’aligner à droite ; préférer l’alignement à gauche.  &lt;img alt=\&quot;\&quot; src=\&quot;./images/word_mise_en_forme_fr.png\&quot; class=\&quot;img-fluid\&quot; /&gt;   Ne pas utiliser les zones de textes, leurs contenus n’est pas interprété par les lecteurs d’écran.   Ne pas utiliser les retours chariots pour sauter des lignes ou les tabulations successives (touche « Tab » du clavier &lt;img alt=\&quot;\&quot; src=\&quot;./images/word_tab_fr.png\&quot; /&gt;) pour mettre en forme le contenu.   Utiliser les fonctions Retrait, Espacement :  - Menu **Mise en page &gt; Paragraphe &gt; Retrait** ou **Espacement** ou **Clic droit : « Paragraphe… »**  &lt;img alt=\&quot;\&quot; src=\&quot;./images/word_retrait_fr.png\&quot; class=\&quot;img-fluid\&quot; /&gt;   Remarque : le menu « Tabulations… » accessible dans la fenêtre « Paragraphe » permet d’ajuster la taille des tabulations (ajuste « Taquets par défaut ») :   &lt;img alt=\&quot;\&quot; src=\&quot;./images/word_tab1_fr.png\&quot; class=\&quot;img-fluid\&quot; /&gt;  &lt;img alt=\&quot;\&quot; src=\&quot;./images/word_tab2_fr.png\&quot; class=\&quot;img-fluid\&quot; /&gt;   Utiliser l’option « Colonnes » de l’onglet **Mise en page** pour créer une mise en page sous forme de colonnes, et non les tableaux.  Utiliser le saut de page via le menu **Insertion &gt; Saut de page** pour passer à la page suivante.   Numéroter les pages (menu **Insertion &gt; Numéro de page**) pour permettre aux utilisateurs de se repérer dans le document.  "
});

documentTitles["word-create.html#couleurs-et-contrastes"] = "Couleurs et contrastes";
index.add({
    url: "word-create.html#couleurs-et-contrastes",
    title: "Couleurs et contrastes",    
    body: "## Couleurs et contrastes  Assurer un contraste suffisant entre la couleur du texte et celle du fond : au minimum 4.5 / 1.  Si vous utilisez des combinaisons de couleurs différentes de celles préconisées par la charte Orange Groupe, téléchargez gratuitement l’outil &lt;a href=\&quot;https://www.paciellogroup.com/resources/contrastanalyser/\&quot; hreflang=\&quot;en\&quot; lang=\&quot;en\&quot;&gt;Colour Contrast Analyzer&lt;/a&gt; qui vous permettra de vérifier très simplement la qualité de vos contrastes.  S’assurer que la couleur n’est pas le seul moyen utilisé pour communiquer l’information. Certaines personnes ne perçoivent pas ou mal les couleurs, il est donc primordial d’utiliser un moyen en plus de la couleur pour véhiculer l’information.  &lt;img alt=\&quot;\&quot; src=\&quot;./images/word_contrastes1_fr.png\&quot; class=\&quot;img-fluid\&quot; /&gt;  **Exemple incorrect** : l'information est transmise uniquement par la couleur.   &lt;img alt=\&quot;\&quot; src=\&quot;./images/word_contrastes2_fr.png\&quot; class=\&quot;img-fluid\&quot; /&gt;  **Exemple correct** : l'information est transmise par la forme et la couleur  "
});

documentTitles["word-create.html#listes-a-puces-ou-numerotees"] = "Listes à puces ou numérotées";
index.add({
    url: "word-create.html#listes-a-puces-ou-numerotees",
    title: "Listes à puces ou numérotées",    
    body: "## Listes à puces ou numérotées  Créer des listes en utilisant le style « liste » (à puces, numérotées ou à plusieurs niveaux) pour énumérer les éléments de même nature.  &lt;img alt=\&quot;\&quot; src=\&quot;./images/word_liste_fr.png\&quot; class=\&quot;img-fluid\&quot; /&gt;   "
});

documentTitles["word-create.html#images"] = "Images";
index.add({
    url: "word-create.html#images",
    title: "Images",    
    body: "## Images  Décrire l’information portée par l’image dans le champ « description » des propriétés de l’image.   - **Pour les images porteuses d’informations** : renseigner un texte de remplacement qui reprend le contenu informatif de l’image : **clic droit &gt; Format de l’image &gt; Texte de remplacement &gt; champ « Description »**. - **Pour les images décoratives/illustratives** : laisser le champ description vide. - **Pour les images informatives complexes** : rédiger un court texte de remplacement (champ « Description ») indiquant l’emplacement de la description détaillée. Celle-ci doit être équivalente à l’information transmise par l’image et doit être à proximité de l’image ou accessible via un lien.  - **Pour les images « lien »** : Rédiger un texte de remplacement  (champ « Description ») qui décrit la fonction ou la destination du lien. - **Pour les graphiques ou schémas** : utiliser les composants Smart Art plutôt que des images ou une capture d’écran (menu **Insertion &gt; Smart Art**). Le contenu informatif des graphiques doit être décrit dans le texte de remplacement (**Format de l’objet** ou **de l’image &gt; Texte de remplacement &gt; Description**).  &lt;img alt=\&quot;\&quot; src=\&quot;./images/word_remplacement_fr.png\&quot; class=\&quot;img-fluid\&quot; /&gt;   Important : si vous utilisez une option de disposition autre que « aligné sur le texte » (via un **clic droit sur l’image &gt; renvoyer à la ligne automatiquement** ou le menu **Outils Image &gt; Organiser**), l’image et le texte présent dans la description de l’image seront ignorés par certains lecteurs d’écran.    "
});

documentTitles["word-create.html#contenus-audio-et-video"] = "Contenus audio et vidéo";
index.add({
    url: "word-create.html#contenus-audio-et-video",
    title: "Contenus audio et vidéo",    
    body: "## Contenus audio et vidéo   [Nos préconisations sur les contenus audio et vidéo](./video-audio.html)  "
});

documentTitles["word-create.html#liens"] = "Liens";
index.add({
    url: "word-create.html#liens",
    title: "Liens",    
    body: "## Liens  Rédiger des intitulés de lien clairs et explicites, ils doivent se suffire à eux-mêmes afin qu’on en comprenne leur destination.  En effet, une personne non-voyante va, pour naviguer plus rapidement dans un document, demander à son lecteur d’écran de lister l’ensemble des liens présents sur une page. Chaque intitulé de lien sera donc, lu isolé de son contexte visuel.   Signaler les liens qui déclenchent l’ouverture d’une nouvelle fenêtre :  - menu **Insertion &gt; Lien hypertexte &gt; Info-bulle** : ajouter « nouvelle fenêtre » dans le libellé   Enfin, renseigner le nom, le format, le poids et la langue du fichier si celle-ci est différente de la langue principale du document pour un lien qui permet de télécharger un fichier.   &lt;img alt=\&quot;\&quot; src=\&quot;./images/word_lien_fr.png\&quot; class=\&quot;img-fluid\&quot; /&gt;   "
});

documentTitles["word-create.html#tableaux-de-donnees"] = "Tableaux de données";
index.add({
    url: "word-create.html#tableaux-de-donnees",
    title: "Tableaux de données",    
    body: "## Tableaux de données  Structurer le plus simplement possible les tableaux de données : éviter de fusionner des cellules, d’insérer des images ou de laisser des cellules vides.   Les tableaux sont des composants difficilement accessibles pour un non-voyant. Il faut donc les utiliser avec parcimonie.   Ajouter une description s'il s'agit d'un tableau complexe, **clic droit : Format de la forme &gt; Texte de remplacement &gt; Description**.  Enfin, les tableaux ne doivent pas être utilisés à des fins de mise en forme.   "
});

documentTitles["word-create.html#verification-finale"] = "Vérification finale";
index.add({
    url: "word-create.html#verification-finale",
    title: "Vérification finale",    
    body: "## Vérification finale  Enfin, utiliser le vérificateur d’accessibilité intégré (menu : **Fichier &gt; Vérifier la présence de problèmes &gt; Vérifier l’accessibilité**).   &lt;img alt=\&quot;\&quot; src=\&quot;./images/word_verification_fr.png\&quot; class=\&quot;img-fluid\&quot; /&gt;   Ce vérificateur permet de détecter les principales erreurs et propose des solutions.   "
});

documentTitles["word-create.html#convertir-en-fichier-pdf"] = "Convertir en fichier PDF";
index.add({
    url: "word-create.html#convertir-en-fichier-pdf",
    title: "Convertir en fichier PDF",    
    body: "## Convertir en fichier PDF  Pour transformer votre document en &lt;abbr&gt;PDF&lt;/abbr&gt;, aller dans le menu : **Fichier &gt; Enregistrer sous** puis de sélectionner le type de fichier **PDF**.   La case à cocher « Balises de structure de document pour l’accessibilité » doit être cochée.  À noter qu’avec Word 2010, les documents PDF générés peuvent présenter des problèmes d’accessibilité (notamment au niveau de la vocalisation des images). Ces problèmes ont été corrigés dans les versions ultérieures de Microsoft Office.  &lt;img alt=\&quot;\&quot; src=\&quot;./images/word_pdf_fr.png\&quot; class=\&quot;img-fluid\&quot; /&gt;   Pour vérifier l’accessibilité d’un document PDF : [télécharger PDF Accessiblity Checker (PAC 3)](https://www.access-for-all.ch/en/pdf-lab/pdf-accessibility-checker-pac.html).  "
});

documentTitles["word-create.html#ressources-externes"] = "Ressources externes";
index.add({
    url: "word-create.html#ressources-externes",
    title: "Ressources externes",    
    body: "## Ressources externes  - [Créer des documents bureautiques accessibles](https://disic.github.io/guides-documents_bureautiques_accessibles/html/), &lt;abbr title=\&quot;direction interministérielle du numérique et du système d’information et de communication\&quot;&gt;DINSIC&lt;/abbr&gt; (français). - &lt;a href=\&quot;http://webaim.org/techniques/word/\&quot; hreflang=\&quot;en\&quot;&gt;Accessibilité Word, WebAIM&lt;/a&gt; (anglais).  &lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2016  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt;"
});



documentTitles["word-test.html#comment-tester-laccessibilite-dun-documents-word"] = "Comment tester l'accessibilité d'un documents Word";
index.add({
    url: "word-test.html#comment-tester-laccessibilite-dun-documents-word",
    title: "Comment tester l'accessibilité d'un documents Word",    
    body: "# Comment tester l'accessibilité d'un documents Word &lt;script&gt;$(document).ready(function () {     setBreadcrumb([             {\&quot;label\&quot;:\&quot;Microsoft Word\&quot;,\&quot;url\&quot;:\&quot;word.html\&quot;},       {\&quot;label\&quot;:\&quot;Comment tester mon document\&quot;}     ]);     addSubMenu([       {\&quot;label\&quot;:\&quot;Créer un document accessible\&quot;,\&quot;url\&quot;:\&quot;word-create.html\&quot;},        {\&quot;label\&quot;:\&quot;Comment tester mon document\&quot;,\&quot;url\&quot;:\&quot;word-test.html\&quot;, \&quot;expanded\&quot;:true}     ]); });&lt;/script&gt;   &lt;span data-menuitem=\&quot;word\&quot;&gt;&lt;/span&gt;  &lt;style&gt;code {font-weight: bold;}h2{padding-top: 1.5rem;}&lt;/style&gt; "
});

documentTitles["word-test.html#tests-automatiques"] = "Tests automatiques";
index.add({
    url: "word-test.html#tests-automatiques",
    title: "Tests automatiques",    
    body: "## Tests automatiques Vous pouvez commencer vos tests avec l’outil de vérification de l’accessibilité de Microsoft Office.   **Fichier &gt; Vérifier la présence de problèmes &gt; Vérifier l’accessibilité**  &lt;img alt=\&quot;capture d'écran du vérificateur d'accessibilité\&quot; src=\&quot;./images/word_verification_fr.png\&quot; class=\&quot;img-fluid\&quot; /&gt;   **Important :** si vous n’avez pas l’option « Vérifier l’accessibilité » dans le document ouvert, faites la manipulation suivante pour la rendre active : enregistrez votre document depuis une version d’Office supérieure (ou égale) à 2010 et au format \&quot;.docx\&quot; avec la case « compatibilité avec les versions précédentes » décochée.   "
});

documentTitles["word-test.html#verifications-des-contrastes-de-couleurs"] = "Vérifications des contrastes de couleurs";
index.add({
    url: "word-test.html#verifications-des-contrastes-de-couleurs",
    title: "Vérifications des contrastes de couleurs",    
    body: "## Vérifications des contrastes de couleurs  Le logiciel &lt;a lang=\&quot;en\&quot; href=\&quot;https://developer.paciellogroup.com/resources/contrastanalyser/\&quot;&gt;Colour Contrast Analyser&lt;/a&gt; indique si les contrastes de couleurs utilisés sont conformes.   &lt;img alt=\&quot;capture d'écran de l'outil colour contrast analyser\&quot; src=\&quot;./images/cca.png\&quot; class=\&quot;img-fluid\&quot; /&gt;    "
});

documentTitles["word-test.html#tests-avec-les-syntheses-vocales-jaws-et-nvda"] = "Tests avec les synthèses vocales JAWS et NVDA";
index.add({
    url: "word-test.html#tests-avec-les-syntheses-vocales-jaws-et-nvda",
    title: "Tests avec les synthèses vocales JAWS et NVDA",    
    body: "## Tests avec les synthèses vocales JAWS et NVDA Afin de poursuivre vos vérifications, vous pouvez tester avec une synthèse vocale. Ces tests permettent de naviguer dans la même configuration que les personnes malvoyantes et non-voyantes.  [Apprendre la navigation vocale avec JAWS 2018 et NVDA 2018](https://a11y-guidelines.orange.com/web/methodes-outils-lecteur-ecran.html)  "
});

documentTitles["word-test.html#autres-tests-manuels"] = "Autres tests manuels";
index.add({
    url: "word-test.html#autres-tests-manuels",
    title: "Autres tests manuels",    
    body: "## Autres tests manuels Les grilles suivantes au format Excel permettant de vérifier l’accessibilité de vos documents Word et PowerPoint : - [Grille d'évaluation Word](./grille_eval_AXS_WORD_V1.xlsx) (16 Ko) - [Grille d'évaluation PowerPoint](./grille_eval_AXS_PPT_V2.xlsx) (16 Ko)     &lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2016  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt;"
});



documentTitles["pdf.html#creer-des-documents-abbrpdfabbr-accessibles"] = "Créer des documents &lt;abbr&gt;PDF&lt;/abbr&gt; accessibles";
index.add({
    url: "pdf.html#creer-des-documents-abbrpdfabbr-accessibles",
    title: "Créer des documents &lt;abbr&gt;PDF&lt;/abbr&gt; accessibles",    
    body: "# Créer des documents &lt;abbr&gt;PDF&lt;/abbr&gt; accessibles &lt;script&gt;$(document).ready(function () {     setBreadcrumb([{\&quot;label\&quot;:\&quot;Recommandations PDF\&quot;}]); });&lt;/script&gt;  &lt;style&gt;h3 {font-size: 1rem;}&lt;/style&gt;  "
});

documentTitles["pdf.html#introduction"] = "Introduction";
index.add({
    url: "pdf.html#introduction",
    title: "Introduction",    
    body: "## Introduction  Produire des documents &lt;abbr&gt;PDF&lt;/abbr&gt; accessibles nécessite de suivre des recommandations afin de s’assurer qu’ils soient structurés via un balisage approprié, pour les rendre ainsi compréhensibles et utilisables par tous (y compris les utilisateurs ceux utilisant des outils d’assistance).  Nous vous présenterons des guides ayant pour objectifs de vous fournir les informations nécessaires afin de créer manuellement des &lt;abbr&gt;PDF&lt;/abbr&gt; accessibles à partir des logiciels principaux d’édition, puis nous vous énumérerons les critères incontournables à respecter pour s’assurer qu’un document &lt;abbr&gt;PDF&lt;/abbr&gt; soit accessible.  "
});

documentTitles["pdf.html#guides-pour-creer-des-documents-abbrpdfabbr-accessibles"] = "Guides pour créer des documents &lt;abbr&gt;PDF&lt;/abbr&gt; accessibles";
index.add({
    url: "pdf.html#guides-pour-creer-des-documents-abbrpdfabbr-accessibles",
    title: "Guides pour créer des documents &lt;abbr&gt;PDF&lt;/abbr&gt; accessibles",    
    body: "## Guides pour créer des documents &lt;abbr&gt;PDF&lt;/abbr&gt; accessibles  "
});

documentTitles["pdf.html#avec-microsoft-word"] = "Avec Microsoft Word";
index.add({
    url: "pdf.html#avec-microsoft-word",
    title: "Avec Microsoft Word",    
    body: "### Avec Microsoft Word  Vous trouverez les recommandations Microsoft Word, ainsi que la procédure pour exporter le document en &lt;abbr&gt;PDF&lt;/abbr&gt;, sur la &lt;a href=\&quot;/others/word.html\&quot;&gt;rubrique Microsoft Word des recommandations accessibilité Orange&lt;/a&gt;.  "
});

documentTitles["pdf.html#avec-adobe-indesign"] = "Avec Adobe InDesign";
index.add({
    url: "pdf.html#avec-adobe-indesign",
    title: "Avec Adobe InDesign",    
    body: "### Avec Adobe InDesign  Vous trouverez les recommandations Adobe inDesign sur la notice &lt;a href=\&quot;http://www.pdf-accessible.com/notices-accessibilite-indesign-acrobat/#indesign\&quot;&gt;Créer des documents &lt;abbr&gt;PDF&lt;/abbr&gt; accessibles avec Adobe Indesign&lt;/a&gt; de AcceDe &lt;abbr&gt;PDF&lt;/abbr&gt;.  "
});

documentTitles["pdf.html#avec-adobe-acrobat-pro"] = "Avec Adobe Acrobat Pro";
index.add({
    url: "pdf.html#avec-adobe-acrobat-pro",
    title: "Avec Adobe Acrobat Pro",    
    body: "### Avec Adobe Acrobat Pro  Vous trouverez les recommandations Adobe Acrobat Pro sur la notice &lt;a href=\&quot;http://www.pdf-accessible.com/notices-accessibilite-indesign-acrobat/#acrobat\&quot;&gt;Créer des documents &lt;abbr&gt;PDF&lt;/abbr&gt; accessibles avec Adobe Acrobat Pro&lt;/a&gt; de AcceDe &lt;abbr&gt;PDF&lt;/abbr&gt;.   "
});

documentTitles["pdf.html#tester-laccessibilite-dun-document-abbrpdfabbr"] = "Tester l’accessibilité d’un document &lt;abbr&gt;PDF&lt;/abbr&gt;";
index.add({
    url: "pdf.html#tester-laccessibilite-dun-document-abbrpdfabbr",
    title: "Tester l’accessibilité d’un document &lt;abbr&gt;PDF&lt;/abbr&gt;",    
    body: "## Tester l’accessibilité d’un document &lt;abbr&gt;PDF&lt;/abbr&gt;  Installer &lt;a href=\&quot;http://www.access-for-all.ch/en/pdf-lab/pdf-accessibility-checker-pac.html\&quot;&gt;&lt;abbr&gt;PDF&lt;/abbr&gt; Accessibility Checker (&lt;abbr&gt;PAC&lt;/abbr&gt;)&lt;/a&gt;.   Ce logiciel permet entre autres l’exécution des tests automatiques sur un document &lt;abbr&gt;PDF&lt;/abbr&gt; et la détection des problèmes d’accessibilité, &lt;figure&gt; &lt;img class=\&quot;center\&quot; src=\&quot;/others/images/pac1.png\&quot; alt=\&quot;copie d’écran des résultats des tests automatiques dans PAC\&quot;/&gt; &lt;figcaption&gt;Capture d'écran de l'outil.&lt;/figcaption&gt; &lt;/figure&gt;  "
});

documentTitles["pdf.html#criteres-incontournables"] = "Critères incontournables";
index.add({
    url: "pdf.html#criteres-incontournables",
    title: "Critères incontournables",    
    body: "## Critères incontournables  Ce sont les principaux critères à respecter pour qu’un document &lt;abbr&gt;PDF&lt;/abbr&gt; soit accessible, indépendamment de la procédure utilisée pour le créer. Les critères incontournables seront utiles aux personnes créant des documents &lt;abbr&gt;PDF&lt;/abbr&gt; sans utiliser les logiciels d’éditions (Microsoft Word, Adobe InDesign, Adobe Acrobat Pro), par exemple les développeurs dont les applications génèrent des documents &lt;abbr&gt;PDF&lt;/abbr&gt;.  "
});

documentTitles["pdf.html#structure-du-document"] = "Structure du document";
index.add({
    url: "pdf.html#structure-du-document",
    title: "Structure du document",    
    body: "### Structure du document  Le document doit contenir a minima un titre de document et une langue par défaut (les changements de langues seront indiqués dans le document).  Voir &lt;a hreflang=\&quot;en\&quot; href=\&quot;https://www.w3.org/TR/WCAG20-TECHS/PDF16.html\&quot; title=\&quot;Technique PDF16 des WCAG 2.0\&quot; aria-label=\&quot;Technique PDF16 des WCAG 2.0\&quot;&gt;&lt;abbr&gt;PDF16&lt;/abbr&gt;&lt;/a&gt;, &lt;a hreflang=\&quot;en\&quot; href=\&quot;https://www.w3.org/TR/WCAG20-TECHS/PDF17.html\&quot; title=\&quot;Technique PDF17 des WCAG 2.0\&quot; aria-label=\&quot;Technique PDF17 des WCAG 2.0\&quot;&gt;&lt;abbr&gt;PDF17&lt;/abbr&gt;&lt;/a&gt;, &lt;a hreflang=\&quot;en\&quot; href=\&quot;https://www.w3.org/TR/WCAG20-TECHS/PDF18.html\&quot; title=\&quot;Technique PDF18 des WCAG 2.0\&quot; aria-label=\&quot;Technique PDF18 des WCAG 2.0\&quot;&gt;&lt;abbr&gt;PDF18&lt;/abbr&gt;&lt;/a&gt;.  Le document est structuré à l’aide de titres, par l’usage approprié de «&amp;nbsp;tags&amp;nbsp;» (balises) titres. De plus, les documents longs proposeront des signets afin de faciliter la navigation.  Voir &lt;a hreflang=\&quot;en\&quot; href=\&quot;https://www.w3.org/TR/WCAG20-TECHS/PDF2.html\&quot; title=\&quot;Technique PDF2 des WCAG 2.0\&quot; aria-label=\&quot;Technique PDF2 des WCAG 2.0\&quot;&gt;&lt;abbr&gt;PDF2&lt;/abbr&gt;&lt;/a&gt;, &lt;a hreflang=\&quot;en\&quot; href=\&quot;https://www.w3.org/TR/WCAG20-TECHS/PDF9.html\&quot; title=\&quot;Technique PDF9 des WCAG 2.0\&quot; aria-label=\&quot;Technique PDF9 des WCAG 2.0\&quot;&gt;&lt;abbr&gt;PDF9&lt;/abbr&gt;&lt;/a&gt;.  L’usage d’en-têtes et de pieds de page doit permettre à l’utilisateur de se situer dans le document.  Voir &lt;a hreflang=\&quot;en\&quot; href=\&quot;https://www.w3.org/TR/WCAG20-TECHS/PDF14.html\&quot; title=\&quot;Technique PDF14 des WCAG 2.0\&quot; aria-label=\&quot;Technique PDF14 des WCAG 2.0\&quot;&gt;&lt;abbr&gt;PDF14&lt;/abbr&gt;&lt;/a&gt;.  "
});

documentTitles["pdf.html#navigation-clavier-et-ordre-de-lecture"] = "Navigation clavier et ordre de lecture";
index.add({
    url: "pdf.html#navigation-clavier-et-ordre-de-lecture",
    title: "Navigation clavier et ordre de lecture",    
    body: "### Navigation clavier et ordre de lecture  L’ordre de lecture restitué par un outil d’assistance, ainsi que l’ordre de la navigation clavier (par tabulation) reflètent la structure du document. Il ne doit pas y avoir de piège clavier (la navigation au clavier doit être possible dans l’ensemble du document sans blocage).  Voir &lt;a hreflang=\&quot;en\&quot; href=\&quot;https://www.w3.org/TR/WCAG20-TECHS/PDF3.html\&quot; title=\&quot;Technique PDF3 des WCAG 2.0\&quot; aria-label=\&quot;Technique PDF3 des WCAG 2.0\&quot;&gt;&lt;abbr&gt;PDF3&lt;/abbr&gt;&lt;/a&gt;, &lt;a hreflang=\&quot;en\&quot; href=\&quot;https://www.w3.org/TR/WCAG20-TECHS/G21.html\&quot; title=\&quot;Technique G21 des WCAG 2.0\&quot; aria-label=\&quot;Technique G21 des WCAG 2.0\&quot;&gt;&lt;abbr&gt;G21&lt;/abbr&gt;&lt;/a&gt;.  "
});

documentTitles["pdf.html#images"] = "Images";
index.add({
    url: "pdf.html#images",
    title: "Images",    
    body: "### Images  Les images comportant une information ont une alternative textuelle appropriée. Les documents scannés sont convertis correctement en texte par reconnaissance optique des caractères (&lt;abbr&gt;OCR&lt;/abbr&gt;). Les images décoratives sont cachées.  Voir &lt;a hreflang=\&quot;en\&quot; href=\&quot;https://www.w3.org/TR/WCAG20-TECHS/PDF1.html\&quot; title=\&quot;Technique PDF1 des WCAG 2.0\&quot; aria-label=\&quot;Technique PDF1 des WCAG 2.0\&quot;&gt;&lt;abbr&gt;PDF1&lt;/abbr&gt;&lt;/a&gt;, &lt;a hreflang=\&quot;en\&quot; href=\&quot;https://www.w3.org/TR/WCAG20-TECHS/PDF4.html\&quot; title=\&quot;Technique PDF4 des WCAG 2.0\&quot; aria-label=\&quot;Technique PDF4 des WCAG 2.0\&quot;&gt;&lt;abbr&gt;PDF4&lt;/abbr&gt;&lt;/a&gt;, &lt;a hreflang=\&quot;en\&quot; href=\&quot;https://www.w3.org/TR/WCAG20-TECHS/PDF7.html\&quot; title=\&quot;Technique PDF7 des WCAG 2.0\&quot; aria-label=\&quot;Technique PDF7 des WCAG 2.0\&quot;&gt;&lt;abbr&gt;PDF7&lt;/abbr&gt;&lt;/a&gt;.  "
});

documentTitles["pdf.html#tableaux"] = "Tableaux";
index.add({
    url: "pdf.html#tableaux",
    title: "Tableaux",    
    body: "### Tableaux  Un tableau de données doit être structuré par un «&amp;nbsp;tag&amp;nbsp;» (balise) `table` contenant au moins une ligne. Les en-têtes de tableaux sont utilisées de manière appropriée. Toutes les lignes contiennent le même nombre de cellules. Les cellules fusionnées indiquent de manière appropriée une fusion par ligne ou colonne (attribut `rowSpan` ou `colSpan`).   Voir &lt;a hreflang=\&quot;en\&quot; href=\&quot;https://www.w3.org/TR/WCAG20-TECHS/PDF6.html\&quot; title=\&quot;Technique PDF6 des WCAG 2.0\&quot; aria-label=\&quot;Technique PDF6 des WCAG 2.0\&quot;&gt;&lt;abbr&gt;PDF6&lt;/abbr&gt;&lt;/a&gt;.  "
});

documentTitles["pdf.html#liens"] = "Liens";
index.add({
    url: "pdf.html#liens",
    title: "Liens",    
    body: "### Liens  Les intitulés de liens sont explicites, ou les liens possèdent une alternative explicite.  Voir &lt;a hreflang=\&quot;en\&quot; href=\&quot;https://www.w3.org/TR/WCAG20-TECHS/PDF11.html\&quot; title=\&quot;Technique PDF11 des WCAG 2.0\&quot; aria-label=\&quot;Technique PDF11 des WCAG 2.0\&quot;&gt;&lt;abbr&gt;PDF11&lt;/abbr&gt;&lt;/a&gt;, &lt;a hreflang=\&quot;en\&quot; href=\&quot;https://www.w3.org/TR/WCAG20-TECHS/PDF13.html\&quot; title=\&quot;Technique PDF13 des WCAG 2.0\&quot; aria-label=\&quot;Technique PDF13 des WCAG 2.0\&quot;&gt;&lt;abbr&gt;PDF13&lt;/abbr&gt;&lt;/a&gt;.  "
});

documentTitles["pdf.html#listes"] = "Listes";
index.add({
    url: "pdf.html#listes",
    title: "Listes",    
    body: "### Listes  Les listes utilisent les «&amp;nbsp;tags&amp;nbsp;» (balises) appropriés (tag liste `L`,  tag item de liste `LI`, tag label de l’item de liste `Lbl` - par exemple le numéro de l’item, tag contenu de l’item de liste `LBody`).  Voir &lt;a hreflang=\&quot;en\&quot; href=\&quot;https://www.w3.org/TR/WCAG20-TECHS/PDF21.html\&quot; title=\&quot;Technique PDF21 des WCAG 2.0\&quot; aria-label=\&quot;Technique PDF21 des WCAG 2.0\&quot;&gt;&lt;abbr&gt;PDF21&lt;/abbr&gt;&lt;/a&gt;, section 14.8.4.3.3 de la &lt;a href=\&quot;http://www.adobe.com/devnet/pdf/pdf_reference.html\&quot;&gt;spécification &lt;abbr&gt;PDF&lt;/abbr&gt;&lt;/a&gt;.  "
});

documentTitles["pdf.html#formulaires"] = "Formulaires";
index.add({
    url: "pdf.html#formulaires",
    title: "Formulaires",    
    body: "### Formulaires  Les champs de formulaire ont un nom, un rôle, une valeur, et un état (si approprié). Visuellement, les labels sont correctement positionnés en relation avec le champ. Les champs obligatoires et les formats attendus sont indiqués. Les champs sont accessibles et modifiables au clavier. Les formulaires pouvant être soumis possèdent un bouton de soumission.  Voir &lt;a hreflang=\&quot;en\&quot; href=\&quot;https://www.w3.org/TR/WCAG20-TECHS/PDF5.html\&quot; title=\&quot;Technique PDF5 des WCAG 2.0\&quot; aria-label=\&quot;Technique PDF5 des WCAG 2.0\&quot;&gt;&lt;abbr&gt;PDF5&lt;/abbr&gt;&lt;/a&gt;, &lt;a hreflang=\&quot;en\&quot; href=\&quot;https://www.w3.org/TR/WCAG20-TECHS/PDF10.html\&quot; title=\&quot;Technique PDF10 des WCAG 2.0\&quot; aria-label=\&quot;Technique PDF10 des WCAG 2.0\&quot;&gt;&lt;abbr&gt;PDF10&lt;/abbr&gt;&lt;/a&gt;, &lt;a hreflang=\&quot;en\&quot; href=\&quot;https://www.w3.org/TR/WCAG20-TECHS/PDF12.html\&quot; title=\&quot;Technique PDF12 des WCAG 2.0\&quot; aria-label=\&quot;Technique PDF12 des WCAG 2.0\&quot;&gt;&lt;abbr&gt;PDF12&lt;/abbr&gt;&lt;/a&gt;, &lt;a hreflang=\&quot;en\&quot; href=\&quot;https://www.w3.org/TR/WCAG20-TECHS/PDF15.html\&quot; title=\&quot;Technique PDF15 des WCAG 2.0\&quot; aria-label=\&quot;Technique PDF15 des WCAG 2.0\&quot;&gt;&lt;abbr&gt;PDF15&lt;/abbr&gt;&lt;/a&gt;, &lt;a hreflang=\&quot;en\&quot; href=\&quot;https://www.w3.org/TR/WCAG20-TECHS/PDF22.html\&quot; title=\&quot;Technique PDF22 des WCAG 2.0\&quot; aria-label=\&quot;Technique PDF22 des WCAG 2.0\&quot;&gt;&lt;abbr&gt;PDF22&lt;/abbr&gt;&lt;/a&gt;.  "
});

documentTitles["pdf.html#couleurs"] = "Couleurs";
index.add({
    url: "pdf.html#couleurs",
    title: "Couleurs",    
    body: "### Couleurs  Les couleurs ne sont pas le seul moyen utilisé pour communiquer l’information.  Le contraste entre le texte et l’arrière-plan est suffisant&amp;nbsp;:  -	4.5:1 pour du texte de taille normale. -	3:1 pour du texte de grande taille. "
});



documentTitles["pushmail.html#concevoir-des-mails-accessibles-a-tous"] = "Concevoir des mails accessibles à tous";
index.add({
    url: "pushmail.html#concevoir-des-mails-accessibles-a-tous",
    title: "Concevoir des mails accessibles à tous",    
    body: "# Concevoir des mails accessibles à tous    &lt;script&gt;$(document).ready(function () {     setBreadcrumb([{\&quot;label\&quot;:\&quot;Concevoir des mails accessibles à tous\&quot;}]); });&lt;/script&gt;  Voici une liste de recommandations pour écrire des messages compréhensibles par tous, que le destinataire utilise ou non des technologies d’assistance.  "
});

documentTitles["pushmail.html#les-mails-du-quotidien"] = "Les mails « du quotidien »";
index.add({
    url: "pushmail.html#les-mails-du-quotidien",
    title: "Les mails « du quotidien »",    
    body: "## Les mails « du quotidien » "
});

documentTitles["pushmail.html#quest-ce-qui-peut-poser-probleme-dun-point-de-vue-accessibilite"] = "Qu’est ce qui peut poser problème d’un point de vue accessibilité ?";
index.add({
    url: "pushmail.html#quest-ce-qui-peut-poser-probleme-dun-point-de-vue-accessibilite",
    title: "Qu’est ce qui peut poser problème d’un point de vue accessibilité ?",    
    body: "### Qu’est ce qui peut poser problème d’un point de vue accessibilité ? - Les images - Les polices, couleurs et styles utilisés - Les tableaux de mise en forme - Les liens  "
});

documentTitles["pushmail.html#a-noter"] = "À noter";
index.add({
    url: "pushmail.html#a-noter",
    title: "À noter",    
    body: "## À noter Si votre communication contient beaucoup d'informations et que sa mise en page nécessite d’être complexe :  - créer le mail avec la méthode qui vous est la plus simple,  - ajouter en pièce jointe un fichier Word accessible (ou fichier texte) contenant le même niveau d’information mais sous forme textuelle uniquement,  - ajouter une alternative textuelle précisant que l'équivalent textuel est contenu dans la pièce jointe.    "
});

documentTitles["pushmail.html#les-mails-du-quotidien"] = "Les mails « du quotidien »";
index.add({
    url: "pushmail.html#les-mails-du-quotidien",
    title: "Les mails « du quotidien »",    
    body: "## Les mails « du quotidien » Pour tous vos mails du quotidien :  - Utiliser des polices simples, sans serif : Arial, Calibri ou Accessible DfA - Adopter une taille de police au moins égale à 10 points - Conserver l’accentuation sur les lettres majuscules, voir [comment mettre des accents aux majuscules ?](./editorial.html#annexes) ou suite Office : menu **Insertion &gt; Symbole** - Mettre une  majuscule à chaque début de phrase mais éviter les phrases entières en majuscule - Aligner les textes à gauche (éviter de justifier)  - Éviter l’italique  - Vérifier le contraste entre la couleur de police et l’arrière-plan ([outil Colour Contrast Analyzer](https://developer.paciellogroup.com/resources/contrastanalyser/)) et limiter le nombre total de couleurs utilisées - Utiliser un fond neutre : pas de papier à lettre décoratif ni d’images d’arrière-plan - Renseigner un texte de remplacement pour toutes les images (ou alternative textuelle, suite Office : **clic droit** sur l’image **&gt; Format de l’image &gt; Texte de remplacement &gt;** champ **« Description »**)  - Utiliser les styles « Titre » et « Sous-titre » du menu « format du texte » si mail long, avec plusieurs sections - Transcrire les émoticônes, exemple : [smiley clin d’oeil] à la place de « ;) » - Éviter les animations, les GIFs et les flashs  - Rédiger des libellés de liens explicites, exemple : préférer « découvrez nos offres » à « cliquer ici » ou « en savoir plus » - Utiliser les fonctions « Retrait, Espacement » pour sauter des lignes, exemple suite Office : Menu Mise en page &gt; Paragraphe &gt; Retrait ou Espacement ou Clic droit : « Paragraphe… ») - Vérifier que la taille des boutons et des zones cliquables est suffisante (1cm de côté) - Paramétrer votre outil mail : format HTML par défaut, exemple Outlook : Fichier &gt; Options &gt; Courrier &gt; Composition des messages   "
});

documentTitles["pushmail.html#les-pushmails"] = "Les Pushmails";
index.add({
    url: "pushmail.html#les-pushmails",
    title: "Les Pushmails",    
    body: "## Les Pushmails   Plusieurs options s’offrent à vous pour créer un Pushmail accessible.  "
});

documentTitles["pushmail.html#creation-a-partir-dun-document-word"] = "Création à partir d’un document Word";
index.add({
    url: "pushmail.html#creation-a-partir-dun-document-word",
    title: "Création à partir d’un document Word",    
    body: "### Création à partir d’un document Word 1. Créer un document Word accessible en suivant [les recommandations Word](./word.html). 2. Puis utiliser l’option « Envoyer au destinataire du message ».    Option à ajouter la première fois via Fichier &gt; Option &gt; Barre d’outils accès rapide &gt; Envoyer au destinataire du message.  &lt;img alt=\&quot;capture d'écran : paramétrer Word pour envoi de message à un destinataire\&quot; src=\&quot;./images/email1.png\&quot;&gt;  "
});

documentTitles["pushmail.html#creation-a-partir-de-mes-pushmails-spip"] = "Création à partir de « Mes Pushmails » (SPIP)";
index.add({
    url: "pushmail.html#creation-a-partir-de-mes-pushmails-spip",
    title: "Création à partir de « Mes Pushmails » (SPIP)",    
    body: "### Création à partir de « Mes Pushmails » (SPIP)  L’outil fournit des gabarits nativement accessibles (à condition d’ajouter du texte de remplacement pour les images) ce qui n’empêche pas de suivre [les recommandations générales](./editorial.html) pour le contenu éditorial.  &lt;img alt=\&quot;capture d'écran de l'outil mes Pushmails\&quot; src=\&quot;./images/email2.png\&quot;&gt;  "
});

documentTitles["pushmail.html#creation-a-partir-dhtml-ou-autre-outil-dedie"] = "Création à partir d’HTML (ou autre outil dédié)";
index.add({
    url: "pushmail.html#creation-a-partir-dhtml-ou-autre-outil-dedie",
    title: "Création à partir d’HTML (ou autre outil dédié)",    
    body: "### Création à partir d’HTML (ou autre outil dédié)  Composer le code HTML de façon accessible en suivant [les principales recommandations Web](https://a11y-guidelines.orange.com/web/index.html).   Important : compte tenu des problématiques d’interprétation des multiples clients mail, la mise en page devrait plutôt être faite via des tableaux (en utilisant role=presentation dans la balise table).   "
});

documentTitles["pushmail.html#liens-utiles"] = "Liens utiles";
index.add({
    url: "pushmail.html#liens-utiles",
    title: "Liens utiles",    
    body: "## Liens utiles  - [Tuto Office mails accessibles](https://support.office.com/fr-fr/article/vid%C3%A9o-am%C3%A9liorer-l-accessibilit%C3%A9-des-e-mails-ebf3730a-18f8-4b57-81d1-730086231775) - [Guide le l’accessibilité des mails (anglais)](https://webdesign.tutsplus.com/tutorials/a-beginners-guide-to-email-accessibility--cms-31240) - [Guide Litmus : mails accessibles (anglais)](https://litmus.com/blog/ultimate-guide-accessible-emails) - [Taille idéale des zones cliquables (anglais)](https://www.smashingmagazine.com/2012/02/finger-friendly-design-ideal-mobile-touchscreen-target-sizes/) - [Taille des boutons interface tactile](https://www.ludotic.com/quelle-taille-boutons-sur-une-interface-tactile/) - [Police Accessible DfA](http://c-rnt.apf.asso.fr/2019/01/07/accessible-dfa-une-police-open-source-concue-par-orange/)  &lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2016  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt;"
});



documentTitles["editorial.html#recommandations-editoriales-generales"] = "Recommandations éditoriales générales";
index.add({
    url: "editorial.html#recommandations-editoriales-generales",
    title: "Recommandations éditoriales générales",    
    body: "# Recommandations éditoriales générales &lt;script&gt;$(document).ready(function () {     setBreadcrumb([{\&quot;label\&quot;:\&quot;Recommandations éditoriales générales\&quot;}]); });&lt;/script&gt;  &lt;style&gt;h3 {font-size: 1rem;}&lt;/style&gt;  "
});

documentTitles["editorial.html#introduction"] = "Introduction";
index.add({
    url: "editorial.html#introduction",
    title: "Introduction",    
    body: "## Introduction Cette section propose des recommandations générales à respecter pour garantir l’accessibilité de vos contenus quel que soit le support utilisé (email, Web, Word, etc.).  "
});

documentTitles["editorial.html#verifier-les-couleurs"] = "Vérifier les couleurs";
index.add({
    url: "editorial.html#verifier-les-couleurs",
    title: "Vérifier les couleurs",    
    body: "## Vérifier les couleurs  - S’assurer que la couleur n’est pas le seul moyen utilisé pour communiquer l’information. - Assurer un niveau de contraste suffisant entre la couleur du texte et celle de l’arrière-plan.    Le contraste peut être vérifié à l’aide de l’outil &lt;a href=\&quot;https://www.paciellogroup.com/resources/contrastanalyser/\&quot; hreflang=\&quot;en\&quot; lang=\&quot;en\&quot;&gt;Colour Contrast Analyzer&lt;/a&gt;&amp;nbsp;:  - 4.5:1 pour du texte de taille normale.  - 3:1 pour du texte de grande taille.  "
});

documentTitles["editorial.html#faciliter-la-lecture"] = "Faciliter la lecture";
index.add({
    url: "editorial.html#faciliter-la-lecture",
    title: "Faciliter la lecture",    
    body: "## Faciliter la lecture  -	Aligner le texte à gauche, mais ne pas le justifier. -	Utiliser une police de caractères facilement lisible en corps 12 pixels minimum. -	Mettre en place une ponctuation simple. -	Ne pas mettre d’italique, ni de phrase en majuscule, mais une majuscule en début de phrase. -	Éviter les fonds texturés (images). -	Ne pas faire de retours chariots répétés ou de tabulation pour espacer (mais la fonction «&amp;nbsp;Paragraphe&amp;nbsp;&amp;gt; Espacement&amp;nbsp;» ou «&amp;nbsp;Retrait&amp;nbsp;» dans Word, par exemple). -	Éviter les tableaux de mise en page ou de données. -	Éviter le contenu image porteur d’information&amp;nbsp;: graphes, schémas, diagrammes… -	Mettre en place un indicateur de fin de document (par exemple, une image indiquant «&amp;nbsp;fin de mail&amp;nbsp;», un texte blanc sur fond blanc «&amp;nbsp;fin de document&amp;nbsp;»). -	Utiliser des tournures de phrases limpides, des phrases courtes et à la construction simple&amp;nbsp;: sujet, verbe, complément. Une idée par phrase, des mots simples. -	Expliquer les mots compliqués. -	Utiliser le présent, de préférence le style direct et la forme active (pas de subjonctif, pas de conjonction). -	Utiliser les caractères typographiques du Français&amp;nbsp;: tiret - , cadratin — , «&amp;nbsp;guillemets français&amp;nbsp;». -	Ajouter des accents même aux majuscules éèêçàïùÉÈÊÇÀÏÙ («&amp;nbsp;Insertion&amp;nbsp;&amp;gt; Symbole&amp;nbsp;&amp;gt; Texte normal&amp;nbsp;» ou utiliser [les raccourcis clavier](./editorial.html#annexes)). -	Éviter les termes dans une langue étrangère (mots en anglais), les sigles ou abréviations sauf ceux passés dans le langage courant.  "
});

documentTitles["editorial.html#fournir-une-mise-en-page-des-tableaux-accessibles"] = "Fournir une mise en page des tableaux accessibles";
index.add({
    url: "editorial.html#fournir-une-mise-en-page-des-tableaux-accessibles",
    title: "Fournir une mise en page des tableaux accessibles",    
    body: "## Fournir une mise en page des tableaux accessibles  Simplifier les tableaux sachant que les clients de messagerie (Outlook inclus) obligent encore parfois à utiliser une mise en page en tableau.  À vérifier&amp;nbsp;:   - Globalement, ne pas utiliser de mise en page complexe de tableau (fusion de cellules d’un tableau, multicolonnage…). - Éviter d’imbriquer les tableaux de mise en page (grand maximum, 2 niveaux d’imbrication), mais aussi&amp;nbsp;: - Ne pas fusionner les cellules d’un tableau, mais utiliser plusieurs tableaux plus simples. - Ne pas conserver de cellules vides. - Ne pas ajouter d’images de fond. - Assurer une lecture séquentielle (on doit pouvoir lire de gauche à droite et de haut en bas). - Éviter les tableaux de données, mais aussi les graphiques ou les schémas complexes.  "
});

documentTitles["editorial.html#annexes"] = "Annexes";
index.add({
    url: "editorial.html#annexes",
    title: "Annexes",    
    body: "## Annexes "
});

documentTitles["editorial.html#comment-mettre-des-accents-aux-majuscules"] = "Comment mettre des accents aux majuscules ?";
index.add({
    url: "editorial.html#comment-mettre-des-accents-aux-majuscules",
    title: "Comment mettre des accents aux majuscules ?",    
    body: "### Comment mettre des accents aux majuscules ?  Pour mettre des accents sur mac, il suffit de taper la lettre désirée par exemple « E » et laisser la touche enfoncée. Un menu contextuel apparait et permet de sélectionner la lettre accentuée désirée (É, È, Ë...), à noter qu'il est également possible d'utiliser des raccourcis clavier (cf. tableau ci-dessous).    Sur Windows, les raccourcis clavier suivants permettent d'écrire des lettres majuscule accentuées quelle que soit l'application utilisée :   &lt;table class=\&quot;table table-striped\&quot;&gt;   &lt;thead&gt;     &lt;tr&gt;       &lt;th scope=\&quot;col\&quot;&gt;Lettre&lt;/th&gt;       &lt;th scope=\&quot;col\&quot;&gt;raccourci Windows&lt;/th&gt;       &lt;th scope=\&quot;col\&quot;&gt;raccourci Mac&lt;/th&gt;     &lt;/tr&gt;   &lt;/thead&gt;   &lt;tbody&gt;     &lt;tr&gt;       &lt;th scope=\&quot;row\&quot;&gt;À&lt;/th&gt;       &lt;td&gt;Alt Gr + \` (touche 7) puis A majuscule&lt;/td&gt;       &lt;td&gt;Maj lock puis à&lt;/td&gt;     &lt;/tr&gt;     &lt;tr&gt;       &lt;th scope=\&quot;row\&quot;&gt;Ç&lt;/th&gt;       &lt;td&gt;alt + 128 (du pavé numérique)&lt;/td&gt;       &lt;td&gt;Option + ç&lt;/td&gt;     &lt;/tr&gt;     &lt;tr&gt;       &lt;th scope=\&quot;row\&quot;&gt;È&lt;/th&gt;       &lt;td&gt;Alt Gr + ` (touche 7) puis E majuscule&lt;/td&gt;       &lt;td&gt;Maj lock puis è&lt;/td&gt;     &lt;/tr&gt;     &lt;tr&gt;       &lt;th scope=\&quot;row\&quot;&gt;É&lt;/th&gt;       &lt;td&gt;alt + 144 (du pavé numérique)&lt;/td&gt;       &lt;td&gt;Maj lock puis é&lt;/td&gt;     &lt;/tr&gt;     &lt;tr&gt;       &lt;th scope=\&quot;row\&quot;&gt;Ê&lt;/th&gt;       &lt;td&gt;^ puis E majuscule &lt;/td&gt;       &lt;td&gt;^ puis E majuscule&lt;/td&gt;     &lt;/tr&gt;   &lt;/tbody&gt; &lt;/table&gt;  &amp;nbsp; &lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2016  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt;"
});



documentTitles["video-audio.html#recommandations-accessibilite-des-contenus-videos-animations-et-audios-orange"] = "Recommandations accessibilité des contenus vidéos, animations et audios Orange";
index.add({
    url: "video-audio.html#recommandations-accessibilite-des-contenus-videos-animations-et-audios-orange",
    title: "Recommandations accessibilité des contenus vidéos, animations et audios Orange",    
    body: "# Recommandations accessibilité des contenus vidéos, animations et audios Orange    &lt;script&gt;$(document).ready(function () {     setBreadcrumb([{\&quot;label\&quot;:\&quot;Vidéo audio\&quot;}]); });&lt;/script&gt;  &lt;style&gt;h3 {font-size: 1rem;}&lt;/style&gt;  "
});

documentTitles["video-audio.html#introductionnbsp-laccessibilite-des-contenus-videos-animations-et-audios"] = "Introduction&amp;nbsp;: l’accessibilité des contenus vidéos, animations et audios";
index.add({
    url: "video-audio.html#introductionnbsp-laccessibilite-des-contenus-videos-animations-et-audios",
    title: "Introduction&amp;nbsp;: l’accessibilité des contenus vidéos, animations et audios",    
    body: "## Introduction&amp;nbsp;: l’accessibilité des contenus vidéos, animations et audios Les vidéos et les audios embarqués dans du contenu (page web, document bureautique...) nécessitent&amp;nbsp;: - que ces vidéos, animations et audios eux-même soient accessibles - mais également, que l'interface qui permet la diffusion de ces fichiers soit accessible.  "
});

documentTitles["video-audio.html#rendre-les-videos-animations-ou-audios-accessibles"] = "Rendre les vidéos, animations ou audios accessibles";
index.add({
    url: "video-audio.html#rendre-les-videos-animations-ou-audios-accessibles",
    title: "Rendre les vidéos, animations ou audios accessibles",    
    body: "## Rendre les vidéos, animations ou audios accessibles  Pour qu’une vidéo ou un audio soit accessible, les éléments suivants doivent accompagner ces fichiers :  - Une transcription intégrale, seule nécessité pour un fichier audio. - Des sous-titres. - Une audiodescription, si besoin.  "
});

documentTitles["video-audio.html#transcription-integrale"] = "Transcription intégrale";
index.add({
    url: "video-audio.html#transcription-integrale",
    title: "Transcription intégrale",    
    body: "### Transcription intégrale La transcription doit restituer textuellement l’ensemble des informations importantes véhiculées par le contenu, celles-ci peuvent être :  - les dialogues  - les messages affichés à l’écran  - les graphiques et animations éventuels qui apportent de l'information  - le nom et le titre des personnes  - le nom des objets (bâtiments, produit...)  - le lieu  - ce qui se passe dans la vidéo  - des informations sur les paramètres de la vidéo (qualité, noir et blanc...)  La transcription peut être également agrémentée d’images, si besoin.  **La transcription intégrale est la solution nécessaire et suffisante pour rendre accessible un fichier audio.**  Cette transcription doit, par ordre de préférence, être&amp;nbsp;: 1. accessible directement à travers le lecteur audio/vidéo, lui-même. 1. directement présente dans la page ou le document à proximité immédiate (l'élément qui suit directement, en fait) de la vidéo ou audio. 1. accessible à travers un lien à proximité immédiate pointant sur une autre partie de la page ou du document ou même, une page ou un document autre.  Quelque soit le moyen choisi, il doit, bien sûr, être accessible à tous.  "
});

documentTitles["video-audio.html#sous-titres"] = "Sous-titres";
index.add({
    url: "video-audio.html#sous-titres",
    title: "Sous-titres",    
    body: "### Sous-titres Les sous-titres doivent restituer l’ensemble des contenus (tout son porteur d'information : voix, coup de feu, ...) véhiculés par la bande son de la vidéo. Ils doivent être au format texte et synchronisés avec le son de la vidéo.  Ils ne doivent pas être affichés (incrustés) directement dans la vidéo, mais doivent être associées à cette dernière grâce à un fichier texte indépendant (souvent un fichier .xml ou .srt).  "
});

documentTitles["video-audio.html#audiodescription"] = "Audiodescription";
index.add({
    url: "video-audio.html#audiodescription",
    title: "Audiodescription",    
    body: "### Audiodescription  L’audiodescription doit, quant à elle, compléter la bande son originale. Elle n'est pas forcement nécessaire, par exemple, lorsqu'une vidéo est juste une interview, sans autre information visuelle.  Elle doit remplacer, au format audio, l’ensemble des informations qui sont accessibles seulement par l’image (mouvements des acteurs, textes affichés, ...).  De même, cette piste audio ne doit pas être intégrée directement dans la vidéo, mais lui être associée par l’intermédiaire d’un fichier audio indépendant (souvent un fichier .mp3).  "
});

documentTitles["video-audio.html#lors-de-la-lecture"] = "Lors de la lecture";
index.add({
    url: "video-audio.html#lors-de-la-lecture",
    title: "Lors de la lecture",    
    body: "### Lors de la lecture  Lors de la lecture du fichier embarqué dans la page web, vérifier : - Ne pas lancer automatiquement, au chargement de la page, la vidéo, l'animation ou l'audio mais laisser la main à l'utilisateur. - Pour une vidéo ou une animation, celle-ci doit être exempte de tout élément qui flashe plus de trois fois par seconde ou ce flash doit se situer sous &lt;a href=\&quot;https://www.w3.org/Translations/WCAG20-fr/#general-thresholddef\&quot;&gt;le seuil de flash générique et le seuil de flash rouge&lt;/a&gt;.  "
});

documentTitles["video-audio.html#le-lecteur-audio-ou-video"] = "Le lecteur audio ou vidéo";
index.add({
    url: "video-audio.html#le-lecteur-audio-ou-video",
    title: "Le lecteur audio ou vidéo",    
    body: "## Le lecteur audio ou vidéo  Le lecteur vidéo utilisé doit&amp;nbsp;: - Prendre en charge au moins deux éléments&amp;nbsp;: sous-titres et audiodescription. - Permettre d'utiliser les contrôles du lecteurs (lecture/pause, avance/recul, montrer/cacher les sous-titres, arrêt/contrôle du volume, ajouter/enlever l'audiodescription, si besoin, à minima)  qui sont accessibles, notamment aux aides techniques (lecteurs d'écran, loupes logicielles, claviers, ...). - Permettre de modifier les paramètres (à minima, la taille du texte, les couleurs texte/fond) d'affichage des sous-titres.  "
});

documentTitles["video-audio.html#liens-utiles"] = "Liens utiles";
index.add({
    url: "video-audio.html#liens-utiles",
    title: "Liens utiles",    
    body: "## Liens utiles - Article en anglais sur le site du W3C&amp;nbsp; &lt;a href=\&quot;https://www.w3.org/WAI/media/av/#how-to-make-audio-and-video-accessible\&quot; lang=\&quot;en\&quot; hreflang=\&quot;en\&quot;&gt;How to make audio and video accessible&lt;/a&gt; -  Article en anglais sur le site de SitePoint&amp;nbsp;:  &lt;a href=\&quot;https://www.sitepoint.com/accessible-video/\&quot; lang=\&quot;en\&quot; hreflang=\&quot;en\&quot;&gt;8 Steps to Creating Accessible Video&lt;/a&gt; - Notice  d’accessibilité éditoriale AccedeWeb&amp;nbsp;: &lt;a href=\&quot;https://www.accede-web.com/notices/editoriale/8-contenus-riches-multimedias/\&quot;&gt;Utiliser correctement les contenus riches et multimédias&lt;/a&gt;  &lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2016  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt;"
});


