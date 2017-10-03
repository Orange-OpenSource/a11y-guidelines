
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
    body: "# À propos     &lt;script&gt;$(document).ready(function () {     setBreadcrumb([{\&quot;label\&quot;:\&quot;À propos\&quot;}]); });&lt;/script&gt;  Documentation sous [licence CC BY SA 3.0](https://github.com/Orange-OpenSource/a11y-guidelines/blob/master/LICENSE). Le code source de ce site ainsi que celui des exemples est disponible [sur notre compte github](https://github.com/Orange-OpenSource/a11y-guidelines).    Le logo Orange ainsi que certaines images et captures sont la propriété d'Orange&amp;nbsp;:    Copyright (C) 2016 Orange SA All rights reserved   [Liste des fichiers concernés](/NOTICE.txt)  &amp;nbsp; &lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2016  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt;"
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

documentTitles["index.html#recommandations-specifiques-par-type-de-document"] = "Recommandations spécifiques par type de document";
index.add({
    url: "index.html#recommandations-specifiques-par-type-de-document",
    title: "Recommandations spécifiques par type de document",    
    body: "## Recommandations spécifiques par type de document Les recommandations suivantes décrivent les règles spécifiques à respecter en fonction du type de document&amp;nbsp;: - [Rédiger des documents Word accessibles](./word.html)&amp;nbsp;: section consacrée à la rédaction de documents Word accessibles.  - [Rédiger des documents PowerPoint accessibles](./powerpoint.html)&amp;nbsp;: section consacrée à la réalisation de présentations PowerPoint accessibles.  - [Rédiger des documents PDF](./pdf.html)&amp;nbsp;: section consacrée à la rédaction de documents PDF accessibles.  - [Rédiger des emails accessibles](./pushmail.html)&amp;nbsp;: section consacrée à la rédaction de «&amp;nbsp;&lt;i lang=\&quot;en\&quot;&gt;pushmail&lt;/i&gt;&amp;nbsp;» accessibles.  &amp;nbsp; &lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2016  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt;"
});



documentTitles["powerpoint.html#creer-des-documents-powerpoint-accessibles"] = "Créer des documents PowerPoint accessibles";
index.add({
    url: "powerpoint.html#creer-des-documents-powerpoint-accessibles",
    title: "Créer des documents PowerPoint accessibles",    
    body: "# Créer des documents PowerPoint accessibles &lt;script&gt;$(document).ready(function () {     setBreadcrumb([{\&quot;label\&quot;:\&quot;PowerPoint accessible\&quot;}]); });&lt;/script&gt;  &lt;style&gt;h3 {font-size: 1rem;}&lt;/style&gt;  "
});

documentTitles["powerpoint.html#introduction"] = "Introduction";
index.add({
    url: "powerpoint.html#introduction",
    title: "Introduction",    
    body: "## Introduction Produire des documents PowerPoint accessibles demande de suivre quelques recommandations. Heureusement, PowerPoint est doté d’un outil permettant de vérifier l’accessibilité. Celui-ci identifie les principales erreurs et propose des solutions pour y remédier.  Ceci étant dit, même après avoir corrigé les erreurs, nous nous sommes aperçus que certains éléments (SmartArt, tableaux…) n’étaient pas toujours correctement vocalisés par les lecteurs d’écran. C’est pourquoi lorsque votre présentation est terminée, nous vous conseillons de l’exporter en &lt;abbr&gt;PDF&lt;/abbr&gt; avant de la diffuser.  En effet, l’option d’export intégrée à PowerPoint permet d’améliorer la restitution avec les outils d’assistance et supprime également les animations, sources de difficultés pour les personnes malvoyantes.    "
});

documentTitles["powerpoint.html#recommandations"] = "Recommandations";
index.add({
    url: "powerpoint.html#recommandations",
    title: "Recommandations",    
    body: "## Recommandations  Vous trouverez ci-dessous un résumé des recommandations à respecter pour produire des présentations PowerPoint accessibles.  Pour plus de détails, n’hésitez pas à consulter les guides proposés sur &lt;a href=\&quot;https://disic.github.io/guides-documents_bureautiques_accessibles/html/\&quot;&gt;le site de la &lt;abbr title=\&quot;direction interministérielle du numérique et du système d’information et de communication\&quot;&gt;DINSIC&lt;/abbr&gt;&lt;/a&gt;.  Nos tests ont été réalisé avec Office 2010 et les lecteurs d'écran Jaws 17 et &lt;abbr&gt;NVDA&lt;/abbr&gt; 2017-1. Les recommandations ci-dessous découlent de ces tests.  "
});

documentTitles["powerpoint.html#1-utiliser-les-masques-de-diapositive"] = "1. Utiliser les masques de diapositive";
index.add({
    url: "powerpoint.html#1-utiliser-les-masques-de-diapositive",
    title: "1. Utiliser les masques de diapositive",    
    body: "### 1. Utiliser les masques de diapositive Les présentations doivent être créées en utilisant les masques de diapositive (menu&amp;nbsp;: Affichage&amp;nbsp;&gt; Masque des diapositives). Ensuite utiliser les cases à cocher «&amp;nbsp;Titre&amp;nbsp;», «&amp;nbsp;Pieds de page&amp;nbsp;» et le menu «&amp;nbsp;Insérer un espace réservé&amp;nbsp;».  "
});

documentTitles["powerpoint.html#2-verifier-lordre-de-lecture-des-elements"] = "2. Vérifier l’ordre de lecture des éléments";
index.add({
    url: "powerpoint.html#2-verifier-lordre-de-lecture-des-elements",
    title: "2. Vérifier l’ordre de lecture des éléments",    
    body: "### 2. Vérifier l’ordre de lecture des éléments L’ordre de lecture doit être vérifié depuis le volet de sélection (menu Accueil&amp;nbsp;&gt; Organiser&amp;nbsp;&gt; Volet de sélection). Attention&amp;nbsp;: le dernier élément dans la liste est lu en premier par les lecteurs d’écran&amp;nbsp;; l’ordre doit donc être indiqué de bas en haut dès la définition des masques de diapositives.  "
});

documentTitles["powerpoint.html#3-donner-des-titres-uniques-aux-diapositives"] = "3. Donner des titres uniques aux diapositives";
index.add({
    url: "powerpoint.html#3-donner-des-titres-uniques-aux-diapositives",
    title: "3. Donner des titres uniques aux diapositives",    
    body: "### 3. Donner des titres uniques aux diapositives Chaque diapositive doit posséder un titre unique. Celui-ci doit être renseigné dans la zone&amp;nbsp;: «&amp;nbsp;Cliquer pour ajouter un titre&amp;nbsp;».  "
});

documentTitles["powerpoint.html#4-renseigner-un-texte-de-remplacement-sur-les-images"] = "4. Renseigner un texte de remplacement sur les images";
index.add({
    url: "powerpoint.html#4-renseigner-un-texte-de-remplacement-sur-les-images",
    title: "4. Renseigner un texte de remplacement sur les images",    
    body: "### 4. Renseigner un texte de remplacement sur les images Si l’image apporte de l’information, il faut lui associer un texte de remplacement décrivant le contenu (clic droit, Format de l’image&amp;nbsp;&gt; Texte de remplacement&amp;nbsp;&gt; champ Description).    Si l’image est purement décorative, le champ «&amp;nbsp;Description du texte de remplacement&amp;nbsp;» doit être vide.  "
});

documentTitles["powerpoint.html#5-faire-des-tableaux-simples"] = "5. Faire des tableaux simples";
index.add({
    url: "powerpoint.html#5-faire-des-tableaux-simples",
    title: "5. Faire des tableaux simples",    
    body: "### 5. Faire des tableaux simples Les tableaux de données doivent rester simples. Éviter de fusionner des cellules, d’insérer des images (elles ne seront pas lues comme des éléments du tableau mais comme des éléments indépendants qui seront lus avant ou après le tableau – selon l’ordre de lecture prévu)&amp;nbsp;; ne pas laisser de cellules vides.   "
});

documentTitles["powerpoint.html#6-utiliser-des-smartart-plutot-que-des-assemblages-de-textes-et-formes-specifiques"] = "6. Utiliser des SmartArt plutôt que des assemblages de textes et formes spécifiques";
index.add({
    url: "powerpoint.html#6-utiliser-des-smartart-plutot-que-des-assemblages-de-textes-et-formes-specifiques",
    title: "6. Utiliser des SmartArt plutôt que des assemblages de textes et formes spécifiques",    
    body: "### 6. Utiliser des SmartArt plutôt que des assemblages de textes et formes spécifiques Les SmartArt permettent d’intégrer des images et des textes qui sont vocalisés dans le bon ordre. Tous les SmartArt ne sont pas encore correctement vocalisés.  "
});

documentTitles["powerpoint.html#7-renseigner-un-texte-de-remplacement-aux-graphiques"] = "7. Renseigner un texte de remplacement aux graphiques";
index.add({
    url: "powerpoint.html#7-renseigner-un-texte-de-remplacement-aux-graphiques",
    title: "7. Renseigner un texte de remplacement aux graphiques",    
    body: "### 7. Renseigner un texte de remplacement aux graphiques Le contenu des graphiques doit être décrit dans le texte de remplacement du graphique (Format de l’objet&amp;nbsp;&gt; Texte de remplacement&amp;nbsp;&gt; Description).  "
});

documentTitles["powerpoint.html#8-sassurer-que-la-couleur-nest-pas-le-seul-moyen-utilise-pour-communiquer-linformation"] = "8. S’assurer que la couleur n’est pas le seul moyen utilisé pour communiquer l’information";
index.add({
    url: "powerpoint.html#8-sassurer-que-la-couleur-nest-pas-le-seul-moyen-utilise-pour-communiquer-linformation",
    title: "8. S’assurer que la couleur n’est pas le seul moyen utilisé pour communiquer l’information",    
    body: "### 8. S’assurer que la couleur n’est pas le seul moyen utilisé pour communiquer l’information Une information donnée par une couleur doit aussi être donnée par un autre moyen comme la forme, la position, la taille…  "
});

documentTitles["powerpoint.html#9-assurer-un-contraste-suffisant"] = "9. Assurer un contraste suffisant";
index.add({
    url: "powerpoint.html#9-assurer-un-contraste-suffisant",
    title: "9. Assurer un contraste suffisant",    
    body: "### 9. Assurer un contraste suffisant Le niveau de contraste entre la couleur du texte et celle de l’arrière-plan doit être suffisant&amp;nbsp;: - 4.5:1 pour du texte de taille normale. - 3:1 pour du texte de grande taille.  Le contraste peut être vérifié à l'aide de l’outil &lt;a href=\&quot;https://www.paciellogroup.com/resources/contrastanalyser/\&quot; hreflang=\&quot;en\&quot; lang=\&quot;en\&quot;&gt;Colour Contrast Analyzer&lt;/a&gt;.  "
});

documentTitles["powerpoint.html#10-definir-la-langue"] = "10. Définir la langue";
index.add({
    url: "powerpoint.html#10-definir-la-langue",
    title: "10. Définir la langue",    
    body: "### 10. Définir la langue Sélectionner la langue du document (menu&amp;nbsp;: Fichier&amp;nbsp;&gt; Options&amp;nbsp;&gt; Langue).   Préciser les mots ou groupes de mots qui sont dans une langue étrangère (menu&amp;nbsp;: Révision&amp;nbsp;&gt; Langue&amp;nbsp;&gt; Définir la langue de vérification).  "
});

documentTitles["powerpoint.html#11-utiliser-le-verificateur-integre"] = "11. Utiliser le vérificateur intégré";
index.add({
    url: "powerpoint.html#11-utiliser-le-verificateur-integre",
    title: "11. Utiliser le vérificateur intégré",    
    body: "### 11. Utiliser le vérificateur intégré PowerPoint intègre un vérificateur d’accessibilité (menu&amp;nbsp;: Fichier&amp;nbsp;&gt; Vérifier la présence de problèmes&amp;nbsp;&gt; Vérifier l’accessibilité). Celui-ci liste les contenus susceptibles de poser des difficultés.   "
});

documentTitles["powerpoint.html#12-exporter-la-presentation-en-document-abbrpdfabbr"] = "12. Exporter la présentation en document &lt;abbr&gt;PDF&lt;/abbr&gt;";
index.add({
    url: "powerpoint.html#12-exporter-la-presentation-en-document-abbrpdfabbr",
    title: "12. Exporter la présentation en document &lt;abbr&gt;PDF&lt;/abbr&gt;",    
    body: "### 12. Exporter la présentation en document &lt;abbr&gt;PDF&lt;/abbr&gt; Pour exporter en &lt;abbr&gt;PDF&lt;/abbr&gt; il suffit d'aller dans le menu&amp;nbsp;: Fichier&amp;nbsp;&gt; Enregistrer sous. Choisissez un nom et sélectionner le type de fichier &lt;abbr&gt;PDF&lt;/abbr&gt;.   A vérifier la première fois : dans les options d'export, la case à cocher «&amp;nbsp;Balises de structure de document pour l'accessibilité&amp;nbsp;» doit être cochée.  "
});

documentTitles["powerpoint.html#ressources-externes"] = "Ressources externes";
index.add({
    url: "powerpoint.html#ressources-externes",
    title: "Ressources externes",    
    body: "## Ressources externes  - [Créer des documents bureautiques accessibles](https://disic.github.io/guides-documents_bureautiques_accessibles/html/), &lt;abbr title=\&quot;direction interministérielle du numérique et du système d’information et de communication\&quot;&gt;DINSIC&lt;/abbr&gt; (français). - &lt;a href=\&quot;http://webaim.org/techniques/PowerPoint/\&quot; hreflang=\&quot;en\&quot;&gt;Accessibilité PowerPoint, WebAIM&lt;/a&gt; (anglais).  "
});

documentTitles["powerpoint.html#resultats-des-tests-effectues"] = "Résultats des tests effectués";
index.add({
    url: "powerpoint.html#resultats-des-tests-effectues",
    title: "Résultats des tests effectués",    
    body: "## Résultats des tests effectués Nous avons testé le comportement des lecteurs d'écran &lt;abbr&gt;NVDA&lt;/abbr&gt; (version 2017.1) et Jaws (version 17) avec un fichier &lt;abbr&gt;PDF&lt;/abbr&gt; généré à l'aide de PowerPoint 2010.  "
});

documentTitles["powerpoint.html#tableaux"] = "Tableaux";
index.add({
    url: "powerpoint.html#tableaux",
    title: "Tableaux",    
    body: "### Tableaux Les tableaux sont vocalisés correctement avec Jaws et &lt;abbr&gt;NVDA&lt;/abbr&gt;.  "
});

documentTitles["powerpoint.html#tableaux-avec-textes-de-remplacement"] = "Tableaux avec textes de remplacement";
index.add({
    url: "powerpoint.html#tableaux-avec-textes-de-remplacement",
    title: "Tableaux avec textes de remplacement",    
    body: "### Tableaux avec textes de remplacement &lt;abbr&gt;NVDA&lt;/abbr&gt; : les tableaux restent vocalisés, les textes de remplacement sont ignorés.   Jaws : les tableaux ne sont plus vocalisés, les textes de remplacement sont ignorés.  "
});

documentTitles["powerpoint.html#smartart"] = "SmartArt";
index.add({
    url: "powerpoint.html#smartart",
    title: "SmartArt",    
    body: "### SmartArt Même comportement pour Jaws et &lt;abbr&gt;NVDA&lt;/abbr&gt;, les textes des SmartArt sont vocalisés (pas toujours dans le bon ordre).  "
});

documentTitles["powerpoint.html#smartart-avec-textes-de-remplacement"] = "SmartArt avec textes de remplacement";
index.add({
    url: "powerpoint.html#smartart-avec-textes-de-remplacement",
    title: "SmartArt avec textes de remplacement",    
    body: "### SmartArt avec textes de remplacement &lt;abbr&gt;NVDA&lt;/abbr&gt; : comportement attendu, les textes de remplacement sont correctement vocalisés à la place du SmartArt.   Jaws : les SmartArt ne sont plus vocalisés, les textes de remplacement sont ignorés.  "
});

documentTitles["powerpoint.html#graphiques"] = "Graphiques";
index.add({
    url: "powerpoint.html#graphiques",
    title: "Graphiques",    
    body: "### Graphiques Même comportement pour Jaws et &lt;abbr&gt;NVDA&lt;/abbr&gt;, les chiffres apparaissant dans les graphiques sont vocalisés.  "
});

documentTitles["powerpoint.html#graphiques-avec-textes-de-remplacement"] = "Graphiques avec textes de remplacement";
index.add({
    url: "powerpoint.html#graphiques-avec-textes-de-remplacement",
    title: "Graphiques avec textes de remplacement",    
    body: "### Graphiques avec textes de remplacement Comportement attendu pour Jaws et &lt;abbr&gt;NVDA&lt;/abbr&gt;, le texte de remplacement est vocalisé à la place du graphique.  &lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2016  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt;"
});



documentTitles["word.html#creer-des-documents-word-accessibles"] = "Créer des documents Word accessibles";
index.add({
    url: "word.html#creer-des-documents-word-accessibles",
    title: "Créer des documents Word accessibles",    
    body: "# Créer des documents Word accessibles &lt;script&gt;$(document).ready(function () {     setBreadcrumb([{\&quot;label\&quot;:\&quot;Word accessible\&quot;}]); });&lt;/script&gt;  &lt;style&gt;h3 {font-size: 1rem;}&lt;/style&gt;  "
});

documentTitles["word.html#introduction"] = "Introduction";
index.add({
    url: "word.html#introduction",
    title: "Introduction",    
    body: "## Introduction Des documents Word accessibles sont la garantie que les documents peuvent être lus par tous les utilisateurs. Créer des documents Word accessibles demande de respecter les recommandations suivantes. Cela permet également de produire des documents &lt;abbr&gt;PDF&lt;/abbr&gt; accessibles grâce à la fonctionnalité d’export &lt;abbr&gt;PDF&lt;/abbr&gt; intégrée à Word.   "
});

documentTitles["word.html#recommandations"] = "Recommandations";
index.add({
    url: "word.html#recommandations",
    title: "Recommandations",    
    body: "## Recommandations  Vous trouverez ci-dessous un résumé des recommandations à respecter. Pour plus de détails, n’hésitez pas à consulter &lt;a href=\&quot;https://disic.github.io/guides-documents_bureautiques_accessibles/html/\&quot;&gt;le site de la &lt;abbr title=\&quot;direction interministérielle du numérique et du système d’information et de communication\&quot;&gt;DINSIC&lt;/abbr&gt;&lt;/a&gt;.  "
});

documentTitles["word.html#1-utiliser-les-styles-nbsptitrenbsp-pour-les-titres-et-sous-titres"] = "1. Utiliser les styles «&amp;nbsp;Titre&amp;nbsp;» pour les titres et sous-titres";
index.add({
    url: "word.html#1-utiliser-les-styles-nbsptitrenbsp-pour-les-titres-et-sous-titres",
    title: "1. Utiliser les styles «&amp;nbsp;Titre&amp;nbsp;» pour les titres et sous-titres",    
    body: "### 1. Utiliser les styles «&amp;nbsp;Titre&amp;nbsp;» pour les titres et sous-titres Les titres et sous-titres doivent utiliser les styles «&amp;nbsp;Titre&amp;nbsp;» (Titre 1, Titre 2, etc.) pour structurer le contenu du document et permettre d’y accéder directement.  "
});

documentTitles["word.html#2-utiliser-le-style-nbspnormalnbsp-pour-les-textes"] = "2. Utiliser le style «&amp;nbsp;Normal&amp;nbsp;» pour les textes";
index.add({
    url: "word.html#2-utiliser-le-style-nbspnormalnbsp-pour-les-textes",
    title: "2. Utiliser le style «&amp;nbsp;Normal&amp;nbsp;» pour les textes",    
    body: "### 2. Utiliser le style «&amp;nbsp;Normal&amp;nbsp;» pour les textes Le style «&amp;nbsp;Normal&amp;nbsp;» doit être attribué à tous les textes des paragraphes (style par défaut).  "
});

documentTitles["word.html#3-utiliser-des-styles-dedies-pour-mettre-en-evidence-certains-contenus"] = "3. Utiliser des styles dédiés pour mettre en évidence certains contenus";
index.add({
    url: "word.html#3-utiliser-des-styles-dedies-pour-mettre-en-evidence-certains-contenus",
    title: "3. Utiliser des styles dédiés pour mettre en évidence certains contenus",    
    body: "### 3. Utiliser des styles dédiés pour mettre en évidence certains contenus Utiliser les styles prédéfinis pour mettre en évidence certains contenus (citations, légendes, etc.) plutôt qu’utiliser les outils de formatage de caractères.  "
});

documentTitles["word.html#4-ne-pas-inserer-de-lignes-vides"] = "4. Ne pas insérer de lignes vides";
index.add({
    url: "word.html#4-ne-pas-inserer-de-lignes-vides",
    title: "4. Ne pas insérer de lignes vides",    
    body: "### 4. Ne pas insérer de lignes vides Les espacements entre lignes doivent être crées à l’aide des options du groupe Paragraphe, option Espacement qui permet de définir l’espace avant et après un paragraphe.  Les sauts de page doivent être créés à l’aide des «&amp;nbsp;Sauts&amp;nbsp;» (Insertion&amp;nbsp;&gt; Saut de page, page vierge).  "
});

documentTitles["word.html#5-utiliser-les-listes-a-puces"] = "5. Utiliser les listes à puces";
index.add({
    url: "word.html#5-utiliser-les-listes-a-puces",
    title: "5. Utiliser les listes à puces",    
    body: "### 5. Utiliser les listes à puces Les listes doivent être réalisées en utilisant l’option «&amp;nbsp;Liste à puces&amp;nbsp;» ou «&amp;nbsp;Liste numérotée&amp;nbsp;» et non en utilisant des tirets dans le texte.  "
});

documentTitles["word.html#6-utiliser-les-notes-de-bas-de-page"] = "6. Utiliser les notes de bas de page";
index.add({
    url: "word.html#6-utiliser-les-notes-de-bas-de-page",
    title: "6. Utiliser les notes de bas de page",    
    body: "### 6. Utiliser les notes de bas de page Les options «&amp;nbsp;Notes de bas de page&amp;nbsp;» et «&amp;nbsp;Notes de fin&amp;nbsp;» permettent d’insérer des notes dans votre document.  "
});

documentTitles["word.html#7-numeroter-vos-pages"] = "7. Numéroter vos pages";
index.add({
    url: "word.html#7-numeroter-vos-pages",
    title: "7. Numéroter vos pages",    
    body: "### 7. Numéroter vos pages L’option «&amp;nbsp;Numéro de page&amp;nbsp;» permet de se repérer dans le document.  "
});

documentTitles["word.html#8-utiliser-la-mise-en-page-nbspcolonnesnbsp-pour-distribuer-le-texte"] = "8. Utiliser la mise en page «&amp;nbsp;Colonnes&amp;nbsp;»  pour distribuer le texte";
index.add({
    url: "word.html#8-utiliser-la-mise-en-page-nbspcolonnesnbsp-pour-distribuer-le-texte",
    title: "8. Utiliser la mise en page «&amp;nbsp;Colonnes&amp;nbsp;»  pour distribuer le texte",    
    body: "### 8. Utiliser la mise en page «&amp;nbsp;Colonnes&amp;nbsp;»  pour distribuer le texte L’option «&amp;nbsp;Colonnes&amp;nbsp;» de l’onglet Mise en page (et non des tableaux) doit être utilisée pour créer une mise en page sous forme de colonnes.  "
});

documentTitles["word.html#9-definir-le-point-dancrage-des-objets-inseres"] = "9. Définir le point d’ancrage des objets insérés";
index.add({
    url: "word.html#9-definir-le-point-dancrage-des-objets-inseres",
    title: "9. Définir le point d’ancrage des objets insérés",    
    body: "### 9. Définir le point d’ancrage des objets insérés Lors de l’insertion d’objets (image, forme, SmartArt, etc.), il est nécessaire de définir un point d’ancrage&amp;nbsp;: dans les options d’habillage du texte, choisir l’option «&amp;nbsp;Aligné sur le texte&amp;nbsp;» ou «&amp;nbsp;Haut et bas&amp;nbsp;».  "
});

documentTitles["word.html#10-eviter-les-zones-de-texte"] = "10. Éviter les zones de texte";
index.add({
    url: "word.html#10-eviter-les-zones-de-texte",
    title: "10. Éviter les zones de texte",    
    body: "### 10. Éviter les zones de texte Celles-ci ne sont pas toujours correctement restituées. Les textes peuvent être mis en valeur en ajoutant des bordures à un paragraphe.  "
});

documentTitles["word.html#11-sassurer-que-la-couleur-nest-pas-le-seul-moyen-utilise-pour-communiquer-linformation"] = "11. S’assurer que la couleur n’est pas le seul moyen utilisé pour communiquer l’information";
index.add({
    url: "word.html#11-sassurer-que-la-couleur-nest-pas-le-seul-moyen-utilise-pour-communiquer-linformation",
    title: "11. S’assurer que la couleur n’est pas le seul moyen utilisé pour communiquer l’information",    
    body: "### 11. S’assurer que la couleur n’est pas le seul moyen utilisé pour communiquer l’information Une information donnée par une couleur doit aussi être donnée par un autre moyen comme la forme, la position, la taille…  "
});

documentTitles["word.html#12-assurer-un-contraste-suffisant"] = "12. Assurer un contraste suffisant";
index.add({
    url: "word.html#12-assurer-un-contraste-suffisant",
    title: "12. Assurer un contraste suffisant",    
    body: "### 12. Assurer un contraste suffisant Le niveau de contraste entre la couleur du texte et celle de l’arrière-plan doit être suffisant&amp;nbsp;: - 4.5:1 pour du texte de taille normale. - 3:1 pour du texte de grande taille.  Le contraste peut être vérifié à l’aide de l’outil &lt;a href=\&quot;https://www.paciellogroup.com/resources/contrastanalyser/\&quot; hreflang=\&quot;en\&quot; lang=\&quot;en\&quot;&gt;Colour Contrast Analyzer&lt;/a&gt;.  "
});

documentTitles["word.html#13-definir-la-langue"] = "13. Définir la Langue";
index.add({
    url: "word.html#13-definir-la-langue",
    title: "13. Définir la Langue",    
    body: "### 13. Définir la Langue La langue doit être définie dans le menu&amp;nbsp;: Fichier&amp;nbsp;&gt; Options&amp;nbsp;&gt; Langue.   Les mots ou groupes de mots qui sont dans une langue étrangère doivent être précisés (menu&amp;nbsp;: Révision&amp;nbsp;&gt; Langue&amp;nbsp;&gt; Définir la langue de vérification).  "
});

documentTitles["word.html#14-renseigner-un-texte-de-remplacement-sur-les-images"] = "14. Renseigner un texte de remplacement sur les images";
index.add({
    url: "word.html#14-renseigner-un-texte-de-remplacement-sur-les-images",
    title: "14. Renseigner un texte de remplacement sur les images",    
    body: "### 14. Renseigner un texte de remplacement sur les images Si l’image apporte de l’information, il faut lui associer un texte de remplacement décrivant le contenu (clic droit, Format de l’image&amp;nbsp;&gt; Texte de remplacement&amp;nbsp;&gt; champ Description).    Si l’image est purement décorative, le champ Description du texte de remplacement doit être laissé vide.  "
});

documentTitles["word.html#15-faire-des-tableaux-simples"] = "15. Faire des tableaux simples";
index.add({
    url: "word.html#15-faire-des-tableaux-simples",
    title: "15. Faire des tableaux simples",    
    body: "### 15. Faire des tableaux simples Les tableaux de données doivent rester simples. Éviter de fusionner des cellules, d’insérer des images (elles ne seront pas lues comme des éléments du tableau mais comme des éléments indépendants qui seront lus avant ou après le tableau – selon l’ordre de lecture prévu)&amp;nbsp;; ne pas laisser de cellules vides.   "
});

documentTitles["word.html#16-utiliser-le-verificateur-integre"] = "16. Utiliser le vérificateur intégré";
index.add({
    url: "word.html#16-utiliser-le-verificateur-integre",
    title: "16. Utiliser le vérificateur intégré",    
    body: "### 16. Utiliser le vérificateur intégré Word intègre un vérificateur d’accessibilité (menu&amp;nbsp;: Fichier&amp;nbsp;&gt; Vérifier la présence de problèmes&amp;nbsp;&gt; Vérifier l’accessibilité). Celui-ci liste les contenus susceptibles de poser des difficultés et les erreurs automatiquement détectées. Cet outil est à utiliser car il est d’une grande aide&amp;nbsp;; cependant il ne dispense pas de vérifier et d’appliquer à la main l’ensemble des recommandations ci-dessus.   "
});

documentTitles["word.html#17-exporter-le-document-au-format-abbrpdfabbr"] = "17. Exporter le document au format &lt;abbr&gt;PDF&lt;/abbr&gt;";
index.add({
    url: "word.html#17-exporter-le-document-au-format-abbrpdfabbr",
    title: "17. Exporter le document au format &lt;abbr&gt;PDF&lt;/abbr&gt;",    
    body: "### 17. Exporter le document au format &lt;abbr&gt;PDF&lt;/abbr&gt; Pour exporter en &lt;abbr&gt;PDF&lt;/abbr&gt; il suffit d’aller dans le menu&amp;nbsp;: Fichier&amp;nbsp;&gt; Enregistrer sous. Choisissez un nom et sélectionnez le type de fichier &lt;abbr&gt;PDF&lt;/abbr&gt;.   À vérifier la première fois&amp;nbsp;: dans les options d’export, la case à cocher «&amp;nbsp;Balises de structure de document pour l’accessibilité&amp;nbsp;» doit être cochée.  À noter qu’avec Word pour Office 2010, les documents &lt;abbr&gt;PDF&lt;/abbr&gt; générés peuvent souffrir de problèmes d’accessibilité (notamment au niveau de la vocalisation des images). Ces problèmes ont été corrigés dans les versions ultérieures de Microsoft Office.  "
});

documentTitles["word.html#ressources-externes"] = "Ressources externes";
index.add({
    url: "word.html#ressources-externes",
    title: "Ressources externes",    
    body: "## Ressources externes  - [Créer des documents bureautiques accessibles](https://disic.github.io/guides-documents_bureautiques_accessibles/html/), &lt;abbr title=\&quot;direction interministérielle du numérique et du système d’information et de communication\&quot;&gt;DINSIC&lt;/abbr&gt; (français). - &lt;a href=\&quot;http://webaim.org/techniques/word/\&quot; hreflang=\&quot;en\&quot;&gt;Accessibilité Word, WebAIM&lt;/a&gt; (anglais).  &lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2016  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt;"
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
    body: "### Avec Adobe InDesign  Vous trouverez les recommandations Adobe inDesign sur la notice &lt;a href=\&quot;http://www.pdf-accessible.com/notices-accessibilite-indesign-acrobat/#indesign\&quot;&gt;Créer des documents &lt;abbr&gt;PDF&lt;/abbr&gt; accessibles avec Adobe Indesign&lt;/a&gt; de AcceDe &lt;abbr&gt;PDF&lt;/abbr&gt;.  Ce document est issu de la phase 1 d’AcceDe &lt;abbr&gt;PDF&lt;/abbr&gt; (2011), par Atalan en partenariat avec 9 entreprises&amp;nbsp;: Spie, Air Liquide, Société Générale, &lt;abbr&gt;BNP&lt;/abbr&gt; Paribas, Areva, &lt;abbr&gt;LVMH&lt;/abbr&gt;, Capgemini, Thales et &lt;abbr&gt;SNCF&lt;/abbr&gt;, en s’appuyant sur un comité de relecture constitué de nombreux professionnels et d’associations impliqués dans l’accessibilité numérique.  "
});

documentTitles["pdf.html#avec-adobe-acrobat-pro"] = "Avec Adobe Acrobat Pro";
index.add({
    url: "pdf.html#avec-adobe-acrobat-pro",
    title: "Avec Adobe Acrobat Pro",    
    body: "### Avec Adobe Acrobat Pro  Vous trouverez les recommandations Adobe Acrobat Pro sur la notice &lt;a href=\&quot;http://www.pdf-accessible.com/notices-accessibilite-indesign-acrobat/#acrobat\&quot;&gt;Créer des documents &lt;abbr&gt;PDF&lt;/abbr&gt; accessibles avec Adobe Acrobat Pro&lt;/a&gt; de AcceDe &lt;abbr&gt;PDF&lt;/abbr&gt;.   Ce document est issu de la phase 2 d’AcceDe &lt;abbr&gt;PDF&lt;/abbr&gt; (2015). Sous la coordination d’Atalan, Orange fut partenaire de cette phase 2, aux côtés de 9 autres grandes entreprises&amp;nbsp;: La Poste, Siemens, Spie, Thales, Atos, &lt;abbr&gt;BNP&lt;/abbr&gt; Paribas, Devoteam, Manpower et &lt;abbr&gt;EDF&lt;/abbr&gt; en s’appuyant sur un comité de relecture constitué de nombreux professionnels et d’associations impliqués dans l’accessibilité numérique.  "
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
    body: "### Couleurs  Les couleurs ne sont pas le seul moyen utilisé pour communiquer l’information.  Le contraste entre le texte et l’arrière-plan est suffisant&amp;nbsp;:  -	4.5:1 pour du texte de taille normale. -	3:1 pour du texte de grande taille.  "
});

documentTitles["pdf.html#tester-laccessibilite-dun-document-abbrpdfabbr"] = "Tester l’accessibilité d’un document &lt;abbr&gt;PDF&lt;/abbr&gt;";
index.add({
    url: "pdf.html#tester-laccessibilite-dun-document-abbrpdfabbr",
    title: "Tester l’accessibilité d’un document &lt;abbr&gt;PDF&lt;/abbr&gt;",    
    body: "## Tester l’accessibilité d’un document &lt;abbr&gt;PDF&lt;/abbr&gt;  Installer &lt;a href=\&quot;http://www.access-for-all.ch/en/pdf-lab/pdf-accessibility-checker-pac.html\&quot;&gt;&lt;abbr&gt;PDF&lt;/abbr&gt; Accessibility Checker (&lt;abbr&gt;PAC 2&lt;/abbr&gt;)&lt;/a&gt;.   Ce logiciel permet entre autres&amp;nbsp;:  - d’exécuter des tests automatiques sur un document &lt;abbr&gt;PDF&lt;/abbr&gt; et détecter des erreurs d’accessibilité, &lt;figure&gt; &lt;img class=\&quot;center\&quot; src=\&quot;/others/images/pac1.png\&quot; alt=\&quot;copie d’écran des résultats des tests automatiques dans PAC 2\&quot;/&gt; &lt;figcaption&gt;Résultats des tests automatiques&lt;/figcaption&gt; &lt;/figure&gt; &lt;figure&gt; &lt;img class=\&quot;center\&quot; src=\&quot;/others/images/pac2.png\&quot; alt=\&quot;copie d’écran du détail d’une erreur dans PAC 2\&quot;/&gt; &lt;figcaption&gt;Détail d’une erreur d’accessibilité détectée automatiquement&lt;/figcaption&gt; &lt;/figure&gt; - de pré-visualiser le document tel qu’il sera restitué par les outils d’assistance, afin de vérifier l’ordre de lecture et l’utilisation pertinente de la sémantique (titre, paragraphe…), &lt;div&gt;&lt;img class=\&quot;center\&quot; src=\&quot;/others/images/pac3.png\&quot; alt=\&quot;\&quot;/&gt;&lt;/div&gt; - d’accéder à une vue détaillée des informations accessibles à un outil d’assistance. &lt;div&gt;&lt;img class=\&quot;center\&quot; src=\&quot;/others/images/pac4.png\&quot; alt=\&quot;\&quot;/&gt;&lt;/div&gt;"
});



documentTitles["pushmail.html#recommandations-accessibilite-span-langenpushmailspan-orange"] = "Recommandations accessibilité &lt;span lang=\&quot;en\&quot;&gt;pushmail&lt;/span&gt; Orange";
index.add({
    url: "pushmail.html#recommandations-accessibilite-span-langenpushmailspan-orange",
    title: "Recommandations accessibilité &lt;span lang=\&quot;en\&quot;&gt;pushmail&lt;/span&gt; Orange",    
    body: "# Recommandations accessibilité &lt;span lang=\&quot;en\&quot;&gt;pushmail&lt;/span&gt; Orange    &lt;script&gt;$(document).ready(function () {     setBreadcrumb([{\&quot;label\&quot;:\&quot;Pushmails\&quot;}]); });&lt;/script&gt;   "
});

documentTitles["pushmail.html#introductionnbsp-laccessibilite-des-emails"] = "Introduction&amp;nbsp;: l’accessibilité des emails";
index.add({
    url: "pushmail.html#introductionnbsp-laccessibilite-des-emails",
    title: "Introduction&amp;nbsp;: l’accessibilité des emails",    
    body: "## Introduction&amp;nbsp;: l’accessibilité des emails Les emails au format texte et sans image, comme souvent les emails entre salariés, sont accessibles.  Le problème de non accessibilité est plutôt le fait des &lt;span lang=\&quot;en\&quot;&gt;pushmails&lt;/span&gt; et des newsletters. Ces emails, à la mise en forme élaborée (liens, mise en page complexe, illustrations, schémas), permettent la diffusion d’informations à de nombreux destinataires et sont un outil essentiel de la communication d’entreprise.  "
});

documentTitles["pushmail.html#des-solutions-alternatives"] = "Des solutions alternatives";
index.add({
    url: "pushmail.html#des-solutions-alternatives",
    title: "Des solutions alternatives",    
    body: "### Des solutions alternatives Si la mise en page du &lt;span lang=\&quot;en\&quot;&gt;pushmail&lt;/span&gt; est complexe, notamment si celle-ci implique d’utiliser des tableaux, créer le &lt;span lang=\&quot;en\&quot;&gt;pushmail&lt;/span&gt; avec la méthode choisie et ajouter en pièce jointe un fichier Word ou un fichier texte accessible contenant le même niveau d’information sous forme textuelle.  "
});

documentTitles["pushmail.html#methodes-de-creation-des-span-langenpushmailspan"] = "Méthodes de création des &lt;span lang=\&quot;en\&quot;&gt;pushmail&lt;/span&gt;";
index.add({
    url: "pushmail.html#methodes-de-creation-des-span-langenpushmailspan",
    title: "Méthodes de création des &lt;span lang=\&quot;en\&quot;&gt;pushmail&lt;/span&gt;",    
    body: "## Méthodes de création des &lt;span lang=\&quot;en\&quot;&gt;pushmail&lt;/span&gt; En interne Orange, nous utilisons principalement trois méthodes pour composer les &lt;span lang=\&quot;en\&quot;&gt;pushmails&lt;/span&gt;&amp;nbsp;:  - Création du &lt;span lang=\&quot;en\&quot;&gt;pushmail&lt;/span&gt; via Word. - Utilisation d'un outil dédié comme «&amp;nbsp;Mes Pushmails&amp;nbsp;». - Composition directe ou indirecte (via des &lt;i lang=\&quot;en\&quot;&gt;frameworks&lt;/i&gt;) en &lt;abbr&gt;HTML&lt;/abbr&gt;.  Quelle que soit la méthode choisie, il faut au préalable respecter les [recommandations générales](./editorial.html) pour tout document rédactionnel.  "
});

documentTitles["pushmail.html#creation-a-partir-dun-document-word"] = "Création à partir d’un document Word";
index.add({
    url: "pushmail.html#creation-a-partir-dun-document-word",
    title: "Création à partir d’un document Word",    
    body: "### Création à partir d’un document Word  Créer un document Word accessible en suivant les [recommandations Word](./word.html). Puis utiliser l’option «&amp;nbsp;Envoyer au destinataire du message&amp;nbsp;» (option à ajouter la première fois via Fichier&amp;nbsp;&gt; Option&amp;nbsp;&gt; Barre d’outils accès rapide&amp;nbsp;&gt; Envoyer au destinataire du message).   "
});

documentTitles["pushmail.html#creation-a-partir-dabbrhtmlabbr-ou-dun-outil-dedie"] = "Création à partir d’&lt;abbr&gt;HTML&lt;/abbr&gt; ou d'un outil dédié";
index.add({
    url: "pushmail.html#creation-a-partir-dabbrhtmlabbr-ou-dun-outil-dedie",
    title: "Création à partir d’&lt;abbr&gt;HTML&lt;/abbr&gt; ou d'un outil dédié",    
    body: "### Création à partir d’&lt;abbr&gt;HTML&lt;/abbr&gt; ou d'un outil dédié Créer des pages &lt;abbr&gt;HTML&lt;/abbr&gt; accessibles en suivant [les recommandations Web](../web/index.html), si besoin et les recommandations spécifiques ci dessous.   Á noter&amp;nbsp;: en interne à Orange, l’outil «&amp;nbsp;Mes Pushmails&amp;nbsp;» fournit des gabarits nativement accessibles, ce qui n’empêche pas de suivre les [recommandations générales](./editorial.html) pour du contenu éditorial.  "
});

documentTitles["pushmail.html#regle-specifique-span-langenpushmailspan-abbrhtmlabbr"] = "Règle spécifique &lt;span lang=\&quot;en\&quot;&gt;pushmail&lt;/span&gt; &lt;abbr&gt;HTML&lt;/abbr&gt;";
index.add({
    url: "pushmail.html#regle-specifique-span-langenpushmailspan-abbrhtmlabbr",
    title: "Règle spécifique &lt;span lang=\&quot;en\&quot;&gt;pushmail&lt;/span&gt; &lt;abbr&gt;HTML&lt;/abbr&gt;",    
    body: "## Règle spécifique &lt;span lang=\&quot;en\&quot;&gt;pushmail&lt;/span&gt; &lt;abbr&gt;HTML&lt;/abbr&gt;  "
});

documentTitles["pushmail.html#fournir-des-marges-homogenes"] = "Fournir des marges homogènes";
index.add({
    url: "pushmail.html#fournir-des-marges-homogenes",
    title: "Fournir des marges homogènes",    
    body: "### Fournir des marges homogènes Pour s'assurer que la présentation soit identique quel que soit le client de messagerie utilisé (Outlook, Thunderbird, webmail ...), les balises sémantiques `hx`, `p` et les listes `ul`, `ol` doivent avoir une marge nulle fixée en &lt;abbr&gt;CSS&lt;/abbr&gt; (`style=\&quot;margin:0\&quot;`). Pour les titres `hx`, on ajoute en plus la propriété &lt;abbr&gt;CSS&lt;/abbr&gt; spécifique `mso-line-height-rule:exactly` pour que dans Outlook la hauteur de ligne soit fixe et cohérente.  ``` &lt;h1 style=\&quot;margin:0; mso-line-height-rule:exactly;\&quot;&gt;Titre&lt;/h1&gt;   &lt;p style=\&quot;margin:0;\&quot;&gt;Paragraphe&lt;/p&gt; ```  "
});

documentTitles["pushmail.html#rendre-accessibles-les-tableaux"] = "Rendre accessibles les tableaux";
index.add({
    url: "pushmail.html#rendre-accessibles-les-tableaux",
    title: "Rendre accessibles les tableaux",    
    body: "### Rendre accessibles les tableaux Mettre un attribut &lt;code&gt;role=\&quot;presentation\&quot;&lt;/code&gt; dans la balise `table` d'un tableau de présentation pour que la sémantique du tableau soit ignorée par les aides techniques.    "
});

documentTitles["pushmail.html#liens-utiles"] = "Liens utiles";
index.add({
    url: "pushmail.html#liens-utiles",
    title: "Liens utiles",    
    body: "## Liens utiles - &lt;a href=\&quot;http://www.accessible-email.org/\&quot; hreflang=\&quot;en\&quot;&gt;Outil pour valider l'accessibilité du code &lt;abbr&gt;HTML&lt;/abbr&gt; de ses &lt;span lang=\&quot;en\&quot;&gt;pushmails&lt;/span&gt;&lt;/a&gt; (en anglais) - Article en anglais sur le site de Microsoft&amp;nbsp;: &lt;a lang=\&quot;en\&quot; href=\&quot;https://support.office.com/en-us/article/Make-your-Outlook-email-accessible-71ce71f4-7b15-4b7a-a2e3-cf91721bbacb\&quot; hreflang=\&quot;en\&quot;&gt;Make your Outlook email accessible – Microsoft Office Support&lt;/a&gt;  &lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2016  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt;"
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
    body: "## Faciliter la lecture  -	Aligner le texte à gauche, mais ne pas le justifier. -	Utiliser une police de caractères facilement lisible en corps 12 pixels minimum. -	Mettre en place une ponctuation simple. -	Ne pas mettre d’italique, ni de phrase en majuscule, mais une majuscule en début de phrase. -	Éviter les fonds texturés (images). -	Ne pas faire de retours chariots répétés ou de tabulation pour espacer (mais la fonction «&amp;nbsp;Paragraphe&amp;nbsp;&amp;gt; Espacement&amp;nbsp;» ou «&amp;nbsp;Retrait&amp;nbsp;» dans Word, par exemple). -	Éviter les tableaux de mise en page ou de données. -	Éviter le contenu image porteur d’information&amp;nbsp;: graphes, schémas, diagrammes… -	Mettre en place un indicateur de fin de document (par exemple, une image indiquant «&amp;nbsp;fin de mail&amp;nbsp;», un texte blanc sur fond blanc «&amp;nbsp;fin de document&amp;nbsp;»). -	Utiliser des tournures de phrases limpides, des phrases courtes et à la construction simple&amp;nbsp;: sujet, verbe, complément. Une idée par phrase, des mots simples. -	Expliquer les mots compliqués. -	Utiliser le présent, de préférence le style direct et la forme active (pas de subjonctif, pas de conjonction). -	Utiliser les caractères typographiques du Français&amp;nbsp;: tiret - , cadratin — , «&amp;nbsp;guillemets français&amp;nbsp;». -	Ajouter des accents même aux majuscules éèêçàïùÉÈÊÇÀÏÙ («&amp;nbsp;Insertion&amp;nbsp;&amp;gt; Symbole&amp;nbsp;&amp;gt; Texte normal&amp;nbsp;»).  -	Éviter les termes dans une langue étrangère (mots en anglais), les sigles ou abréviations sauf ceux passés dans le langage courant.  "
});

documentTitles["editorial.html#fournir-une-mise-en-page-des-tableaux-accessibles"] = "Fournir une mise en page des tableaux accessibles";
index.add({
    url: "editorial.html#fournir-une-mise-en-page-des-tableaux-accessibles",
    title: "Fournir une mise en page des tableaux accessibles",    
    body: "## Fournir une mise en page des tableaux accessibles  Simplifier les tableaux sachant que les clients de messagerie (Outlook inclus) obligent encore parfois à utiliser une mise en page en tableau.  À vérifier&amp;nbsp;:   - Globalement, ne pas utiliser de mise en page complexe de tableau (fusion de cellules d’un tableau, multicolonnage…). - Éviter d’imbriquer les tableaux de mise en page (grand maximum, 2 niveaux d’imbrication), mais aussi&amp;nbsp;: - Ne pas fusionner les cellules d’un tableau, mais utiliser plusieurs tableaux plus simples. - Ne pas conserver de cellules vides. - Ne pas ajouter d’images de fond. - Assurer une lecture séquentielle (on doit pouvoir lire de gauche à droite et de haut en bas). - Éviter les tableaux de données, mais aussi les graphiques ou les schémas complexes.  &amp;nbsp; &lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2016  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt;"
});


