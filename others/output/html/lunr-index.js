
var index = lunr(function () {
    this.use(lunr.fr);
    this.field('body');
    this.ref('url');
});

var documentTitles = {};



documentTitles["about.html#a-propos"] = "A propos";
index.add({
    url: "about.html#a-propos",
    title: "A propos",    
    body: "# A propos     &lt;script&gt;$(document).ready(function () {     setBreadcrumb([{\&quot;label\&quot;:\&quot;A propos\&quot;}]); });&lt;/script&gt;  Documentation sous [licence CC BY SA 3.0](https://github.com/Orange-OpenSource/a11y-guidelines/blob/master/LICENSE). Le code source de ce site ainsi que celui des exemples est disponible [sur notre compte github](https://github.com/Orange-OpenSource/a11y-guidelines).    Le logo Orange ainsi que certaines images et captures sont la propriété d'Orange:    Copyright (C) 2016 Orange SA All rights reserved   [Liste des fichiers concernés](/NOTICE.txt)  &amp;nbsp; &lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2016  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt;"
});



documentTitles["contact.html#votre-avis-compte"] = "Votre avis compte";
index.add({
    url: "contact.html#votre-avis-compte",
    title: "Votre avis compte",    
    body: "# Votre avis compte    &lt;script&gt;$(document).ready(function () {     setBreadcrumb([{\&quot;label\&quot;:\&quot;Contact\&quot;}]); });&lt;/script&gt;  Vous avez une remarque, une suggestion à apporter&amp;nbsp;?  Vérifiez que ceci n’a pas déjà été remonté par quelqu’un d’autre en consultant [la liste des «&amp;nbsp;&lt;i lang=\&quot;en\&quot;&gt;issues&lt;/i&gt;&amp;nbsp;»](https://github.com/Orange-OpenSource/a11y-guidelines/issues) sur notre compte github.   Si vous ne trouvez rien concernant votre remarque, [adressez-nous votre commentaire](https://github.com/Orange-OpenSource/a11y-guidelines/issues/new) via github.  &amp;nbsp; &lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2016  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt;"
});



documentTitles["index.html#recommandations-accessibilite-orange-pour-leditorial"] = "Recommandations accessibilité Orange pour l'éditorial";
index.add({
    url: "index.html#recommandations-accessibilite-orange-pour-leditorial",
    title: "Recommandations accessibilité Orange pour l'éditorial",    
    body: "# Recommandations accessibilité Orange pour l'éditorial  &lt;script&gt;$(document).ready(function () {     setBreadcrumb([{\&quot;label\&quot;:\&quot;Présentation\&quot;}]); });&lt;/script&gt;  Cette section du site contient des recommandations d'accessibilité concernant les plateformes autres que Web et Mobile&amp;nbsp;:  - [Créer des documents Word accessibles](./word.html)&amp;nbsp;: section consacrée à la rédaction de documents Word accessibles.  - [Créer des documents PowerPoint accessibles](./powerpoint.html)&amp;nbsp;: section consacrée à la réalisation de présentations PowerPoint accessibles.  - [Créer des pushmail accessibles](./pushmail.html)&amp;nbsp;: section consacrée à la réalisation d’emails accessibles.   &amp;nbsp; &lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2016  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt;"
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
    body: "## Introduction Produire des documents PowerPoint accessibles demande de suivre quelques recommandations. Heureusement, PowerPoint est doté d’un outil permettant de vérifier l’accessibilité. Celui-ci identifie les principales erreurs et propose des solutions pour y remédier.  Ceci étant dit, même après avoir corrigé les erreurs, nous nous sommes aperçus que certains éléments (SmartArt, tableaux ...) n’étaient pas toujours correctement vocalisés par les lecteurs d’écran. C’est pourquoi lorsque votre présentation est terminée, nous vous conseillons de l’exporter en PDF avant de la diffuser.  En effet, l’option d’export intégrée à PowerPoint permet d’améliorer la restitution avec les outils d’assistance et supprime également les animations, sources de difficultés pour les personnes malvoyantes.    "
});

documentTitles["powerpoint.html#recommandations"] = "Recommandations";
index.add({
    url: "powerpoint.html#recommandations",
    title: "Recommandations",    
    body: "## Recommandations  Vous trouverez ci-dessous un résumé des recommandations à respecter pour produire des présentations PowerPoint accessibles.  Pour plus de détails, n’hésitez pas à consulter les guides proposés sur &lt;a href=\&quot;https://disic.github.io/guides-documents_bureautiques_accessibles/html/\&quot;&gt;le site de la &lt;abbr title=\&quot;direction interministérielle du numérique et du système d’information et de communication\&quot;&gt;DINSIC&lt;/abbr&gt;&lt;/a&gt;.  Nos tests ont été réalisé avec Office 2010 et les lecteurs d'écran Jaws 17 et NVDA 2017-1. Les recommandations ci-dessous découlent de ces tests.  "
});

documentTitles["powerpoint.html#1-utiliser-les-masques-de-diapositive"] = "1. Utiliser les masques de diapositive";
index.add({
    url: "powerpoint.html#1-utiliser-les-masques-de-diapositive",
    title: "1. Utiliser les masques de diapositive",    
    body: "### 1. Utiliser les masques de diapositive Les présentations doivent être créées en utilisant les masques de diapositive (menu&amp;nbsp;: Affichage &gt; Masque des diapositives). Ensuite utiliser les cases à cocher « Titre », « Pieds de page » et le menu « Insérer un espace réservé ».  "
});

documentTitles["powerpoint.html#2-verifier-lordre-de-lecture-des-elements"] = "2. Vérifier l’ordre de lecture des éléments";
index.add({
    url: "powerpoint.html#2-verifier-lordre-de-lecture-des-elements",
    title: "2. Vérifier l’ordre de lecture des éléments",    
    body: "### 2. Vérifier l’ordre de lecture des éléments L’ordre de lecture doit être vérifié depuis le volet de sélection (menu Accueil &gt; Organiser &gt; Volet de sélection). Attention&amp;nbsp;: le dernier élément dans la liste est lu en premier par les lecteurs d’écran&amp;nbsp;; l’ordre doit donc être indiqué de bas en haut dès la définition des masques de diapositives.  "
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
    body: "### 4. Renseigner un texte de remplacement sur les images Si l’image apporte de l’information, il faut lui associer un texte de remplacement décrivant le contenu (clic droit, Format de l’image &gt; Texte de remplacement &gt; champ Description).    Si l’image est purement décorative, le champ Description du texte de remplacement doit être vide.  "
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
    body: "### 7. Renseigner un texte de remplacement aux graphiques Le contenu des graphiques doit être décrit dans le texte de remplacement du graphique (Format de l’objet &gt; Texte de remplacement &gt; Description).  "
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
    body: "### 9. Assurer un contraste suffisant Le niveau de contraste entre la couleur du texte et celle de l’arrière-plan doit être suffisant&amp;nbsp;: - 4.5:1 pour du texte de taille normale. - 3:1 pour du texte de grande taille.  Le contraste peut être vérifié à l'aide de l’outil [Colour Contrast Analyzer](https://www.paciellogroup.com/resources/contrastanalyser/).  "
});

documentTitles["powerpoint.html#10-definir-la-langue"] = "10. Définir la langue";
index.add({
    url: "powerpoint.html#10-definir-la-langue",
    title: "10. Définir la langue",    
    body: "### 10. Définir la langue Sélectionner la langue du document (menu&amp;nbsp;: Fichier &gt; Options &gt; Langue).   Préciser les mots ou groupes de mots qui sont dans une langue étrangère (menu&amp;nbsp;: Révision &gt; Langue &gt; Définir la langue de vérification).  "
});

documentTitles["powerpoint.html#11-utiliser-le-verificateur-integre"] = "11. Utiliser le vérificateur intégré";
index.add({
    url: "powerpoint.html#11-utiliser-le-verificateur-integre",
    title: "11. Utiliser le vérificateur intégré",    
    body: "### 11. Utiliser le vérificateur intégré PowerPoint intègre un vérificateur d’accessibilité (menu&amp;nbsp;: Fichier &gt; Vérifier la présence de problèmes &gt; Vérifier l’accessibilité). Celui-ci liste les contenus susceptibles de poser des difficultés.   "
});

documentTitles["powerpoint.html#12-exporter-la-presentation-en-document-pdf"] = "12. Exporter la présentation en document PDF";
index.add({
    url: "powerpoint.html#12-exporter-la-presentation-en-document-pdf",
    title: "12. Exporter la présentation en document PDF",    
    body: "### 12. Exporter la présentation en document PDF Pour exporter en PDF il suffit d'aller dans le menu&amp;nbsp;: Fichier &gt; Enregistrer sous. Choisissez un nom et sélectionner le type de fichier PDF.   A vérifier la première fois : dans les options d'export, la case à cocher «&amp;nbsp;Balises de structure de document pour l'accessiblité&amp;nbsp;» doit être cochée.  "
});

documentTitles["powerpoint.html#ressources-externes"] = "Ressources externes";
index.add({
    url: "powerpoint.html#ressources-externes",
    title: "Ressources externes",    
    body: "## Ressources externes  - [Créer des documents bureautiques accessibles](https://disic.github.io/guides-documents_bureautiques_accessibles/html/), &lt;abbr title=\&quot;direction interministérielle du numérique et du système d’information et de communication\&quot;&gt;DINSIC&lt;/abbr&gt; (français). - [Accessibilité PowerPoint](http://webaim.org/techniques/PowerPoint/), WebAIM (anglais).  "
});

documentTitles["powerpoint.html#resultats-des-tests-effectues"] = "Résultats des tests effectués";
index.add({
    url: "powerpoint.html#resultats-des-tests-effectues",
    title: "Résultats des tests effectués",    
    body: "## Résultats des tests effectués Nous avons testé le comportement des lecteurs d'écran NVDA (version 2017.1) et JAWS (version 17) avec un fichier PDF généré à l'aide de PowerPoint 2010.  "
});

documentTitles["powerpoint.html#tableaux"] = "Tableaux";
index.add({
    url: "powerpoint.html#tableaux",
    title: "Tableaux",    
    body: "### Tableaux Les tableaux sont vocalisés correctement avec Jaws et NVDA.  "
});

documentTitles["powerpoint.html#tableaux-avec-textes-de-remplacement"] = "Tableaux avec textes de remplacement";
index.add({
    url: "powerpoint.html#tableaux-avec-textes-de-remplacement",
    title: "Tableaux avec textes de remplacement",    
    body: "### Tableaux avec textes de remplacement NVDA : les tableaux restent vocalisés, les textes de remplacement sont ignorés.   JAWS : les tableaux ne sont plus vocalisés, les textes de remplacement sont ignorés.  "
});

documentTitles["powerpoint.html#smartart"] = "SmartArt";
index.add({
    url: "powerpoint.html#smartart",
    title: "SmartArt",    
    body: "### SmartArt Même comportement pour Jaws et NVDA, les textes des SmartArt sont vocalisés (pas toujours dans le bon ordre).  "
});

documentTitles["powerpoint.html#smartart-avec-textes-de-remplacement"] = "SmartArt avec textes de remplacement";
index.add({
    url: "powerpoint.html#smartart-avec-textes-de-remplacement",
    title: "SmartArt avec textes de remplacement",    
    body: "### SmartArt avec textes de remplacement NVDA : comportement attendu, les textes de remplacement sont correctement vocalisés à la place du SmartArt.   JAWS : les SmartArt ne sont plus vocalisés, les textes de remplacement sont ignorés.  "
});

documentTitles["powerpoint.html#graphiques"] = "Graphiques";
index.add({
    url: "powerpoint.html#graphiques",
    title: "Graphiques",    
    body: "### Graphiques Même comportement pour Jaws et NVDA, les chiffres apparaissant dans les graphiques sont vocalisés.  "
});

documentTitles["powerpoint.html#graphiques-avec-textes-de-remplacement"] = "Graphiques avec textes de remplacement";
index.add({
    url: "powerpoint.html#graphiques-avec-textes-de-remplacement",
    title: "Graphiques avec textes de remplacement",    
    body: "### Graphiques avec textes de remplacement Comportement attendu pour Jaws et NVDA, le texte de remplacement est vocalisé à la place du graphique.   &amp;nbsp; &lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2016  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt;"
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
    body: "## Introduction Des documents Word accessibles sont la garantie que les documents peuvent être lus par tous les utilisateurs. Créer des documents Word accessibles demande de respecter les recommandations suivantes. Cela permet également de produire des documents PDF accessibles grâce à la fonctionnalité d’export PDF intégrée à Word.   "
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
    body: "### 1. Utiliser les styles «&amp;nbsp;Titre&amp;nbsp;» pour les titres et sous-titres Les titres et sous-titres doivent utiliser les styles «&amp;nbsp;Titre&amp;nbsp;» (Titre 1, Titre 2, etc.) pour permettre d’être identifiés comme titres par les personnes utilisant un lecteur d’écran.  "
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
    body: "### 4. Ne pas insérer de lignes vides Les espacements entre lignes doivent être crées à l’aide des options du groupe Paragraphe, option espacement qui permet de définir l’espace avant et après un paragraphe.  Les sauts de page doivent être créés à l’aide des «&amp;nbsp;sauts&amp;nbsp;» (Insertion &gt; Saut de page, page vierge).  "
});

documentTitles["word.html#5-utiliser-les-listes-a-puces"] = "5. Utiliser les listes à puces";
index.add({
    url: "word.html#5-utiliser-les-listes-a-puces",
    title: "5. Utiliser les listes à puces",    
    body: "### 5. Utiliser les listes à puces Les listes doivent être réalisées en utilisant l’option «&amp;nbsp;liste à puces&amp;nbsp;» ou «&amp;nbsp;liste numérotée&amp;nbsp;» et non en utilisant des tirets dans le texte.  "
});

documentTitles["word.html#6-utiliser-les-notes-de-bas-de-page"] = "6. Utiliser les notes de bas de page";
index.add({
    url: "word.html#6-utiliser-les-notes-de-bas-de-page",
    title: "6. Utiliser les notes de bas de page",    
    body: "### 6. Utiliser les notes de bas de page Les options «&amp;nbsp;notes de bas de page&amp;nbsp;» et «&amp;nbsp;notes de fin&amp;nbsp;» permettent d'insérer des notes dans votre document.  "
});

documentTitles["word.html#7-numeroter-vos-pages"] = "7. Numéroter vos pages";
index.add({
    url: "word.html#7-numeroter-vos-pages",
    title: "7. Numéroter vos pages",    
    body: "### 7. Numéroter vos pages L’option «&amp;nbsp;Numéro de page&amp;nbsp;» pour permettre de se repérer dans le document.  "
});

documentTitles["word.html#8-utiliser-la-mise-en-page-nbspcolonnesnbsp-pour-distribuer-le-texte"] = "8. Utiliser la mise en page «&amp;nbsp;colonnes&amp;nbsp;»  pour distribuer le texte";
index.add({
    url: "word.html#8-utiliser-la-mise-en-page-nbspcolonnesnbsp-pour-distribuer-le-texte",
    title: "8. Utiliser la mise en page «&amp;nbsp;colonnes&amp;nbsp;»  pour distribuer le texte",    
    body: "### 8. Utiliser la mise en page «&amp;nbsp;colonnes&amp;nbsp;»  pour distribuer le texte L’option «&amp;nbsp;colonnes&amp;nbsp;» de l’onglet mise en page et non des tableaux pour créer une mise en page sous forme de colonnes.  "
});

documentTitles["word.html#9-definir-le-point-dancrage-des-objets-inseres"] = "9. Définir le point d’ancrage des objets insérés";
index.add({
    url: "word.html#9-definir-le-point-dancrage-des-objets-inseres",
    title: "9. Définir le point d’ancrage des objets insérés",    
    body: "### 9. Définir le point d’ancrage des objets insérés Lors de l’insertion d’objets (image, forme, smart art, etc.), il est nécessaire de définir un point d’ancrage : dans les options d’habillage du texte, choisir l’option «&amp;nbsp;Aligné sur le texte&amp;nbsp;» ou «&amp;nbsp;Haut et bas&amp;nbsp;».  "
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
    body: "### 12. Assurer un contraste suffisant Le niveau de contraste entre la couleur du texte et celle de l’arrière-plan doit être suffisant&amp;nbsp;: - 4.5:1 pour du texte de taille normale. - 3:1 pour du texte de grande taille.  "
});

documentTitles["word.html#13-definir-la-langue"] = "13. Définir la Langue";
index.add({
    url: "word.html#13-definir-la-langue",
    title: "13. Définir la Langue",    
    body: "### 13. Définir la Langue La langue doit être définie dans le menu&amp;nbsp;: Fichier &gt; Options &gt; Langue.   Les mots ou groupes de mots qui sont dans une langue étrangère doivent être précisés (menu&amp;nbsp;: Révision &gt; Langue &gt; Définir la langue de vérification).  "
});

documentTitles["word.html#14-renseigner-un-texte-de-remplacement-sur-les-images"] = "14. Renseigner un texte de remplacement sur les images";
index.add({
    url: "word.html#14-renseigner-un-texte-de-remplacement-sur-les-images",
    title: "14. Renseigner un texte de remplacement sur les images",    
    body: "### 14. Renseigner un texte de remplacement sur les images Si l’image apporte de l’information, il faut lui associer un texte de remplacement décrivant le contenu (clic droit, Format de l’image &gt; Texte de remplacement &gt; champ Description).    Si l’image est purement décorative, le champ Description du texte de remplacement doit être vide.  "
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
    body: "### 16. Utiliser le vérificateur intégré Word intègre un vérificateur d’accessibilité (menu&amp;nbsp;: Fichier &gt; Vérifier la présence de problèmes &gt; Vérifier l’accessibilité). Celui-ci liste les contenus susceptibles de poser des difficultés et les erreurs automatiquement détectées. Cet outil est à utiliser car il est d'une grande aide, cependant, il ne dispense pas de vérifier et d'appliquer à la main l'ensemble des recommandations ci-dessus.   "
});

documentTitles["word.html#17-exporter-le-document-au-format-pdf"] = "17. Exporter le document au format PDF";
index.add({
    url: "word.html#17-exporter-le-document-au-format-pdf",
    title: "17. Exporter le document au format PDF",    
    body: "### 17. Exporter le document au format PDF Pour exporter en PDF il suffit d'aller dans le menu&amp;nbsp;: Fichier &gt; Enregistrer sous. Choisissez un nom et sélectionner le type de fichier PDF.   A vérifier la première fois : dans les options d'export, la case à cocher «&amp;nbsp;Balises de structure de document pour l'accessibilité&amp;nbsp;» doit être cochée.  "
});

documentTitles["word.html#ressources-externes"] = "Ressources externes";
index.add({
    url: "word.html#ressources-externes",
    title: "Ressources externes",    
    body: "## Ressources externes  - [Créer des documents bureautiques accessibles](https://disic.github.io/guides-documents_bureautiques_accessibles/html/), &lt;abbr title=\&quot;direction interministérielle du numérique et du système d’information et de communication\&quot;&gt;DINSIC&lt;/abbr&gt; (français). - [Accessibilité Word](http://webaim.org/techniques/word/), WebAIM (anglais).  &amp;nbsp; &lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2016  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt;"
});



documentTitles["pushmail.html#recommandations-accessibilite-pushmail-orange"] = "Recommandations accessibilité pushmail Orange";
index.add({
    url: "pushmail.html#recommandations-accessibilite-pushmail-orange",
    title: "Recommandations accessibilité pushmail Orange",    
    body: "# Recommandations accessibilité pushmail Orange    &lt;script&gt;$(document).ready(function () {     setBreadcrumb([{\&quot;label\&quot;:\&quot;Pushmails\&quot;}]); });&lt;/script&gt;   "
});

documentTitles["pushmail.html#introductionnbsp-laccessibilite-des-mails"] = "Introduction&amp;nbsp;: l’accessibilité des mails";
index.add({
    url: "pushmail.html#introductionnbsp-laccessibilite-des-mails",
    title: "Introduction&amp;nbsp;: l’accessibilité des mails",    
    body: "## Introduction&amp;nbsp;: l’accessibilité des mails Les mails au format texte et sans image, comme souvent les mails entre salariés, sont accessibles. Le problème de non accessibilité est plutôt le fait des &lt;i lang=\&quot;en\&quot;&gt;push mails&lt;/i&gt;. Ces mails, à la mise en forme évoluée (liens, mise en page complexe, illustrations, schémas), permettent la publication de quantité d’informations et sont un outil essentiel de la communication d’entreprise.  "
});

documentTitles["pushmail.html#des-solutions-alternatives"] = "Des solutions alternatives";
index.add({
    url: "pushmail.html#des-solutions-alternatives",
    title: "Des solutions alternatives",    
    body: "### Des solutions alternatives Et si la mise en page du &lt;i lang=\&quot;en\&quot;&gt;push mail&lt;/i&gt; est complexe, que l’on n’a pas la possibilité de rendre le &lt;i lang=\&quot;en\&quot;&gt;push mail&lt;/i&gt; accessible, il existe des solutions alternatives moins élégantes, mais qui fonctionnent toujours&amp;nbsp;: - Proposer un lien redirigeant vers une page web  - Mettre en place un lien en début de mail pointant vers un fichier texte ou un fichier Word accessible  "
});

documentTitles["pushmail.html#qui-est-impactenbsp"] = "Qui est impacté&amp;nbsp;?";
index.add({
    url: "pushmail.html#qui-est-impactenbsp",
    title: "Qui est impacté&amp;nbsp;?",    
    body: "### Qui est impacté&amp;nbsp;? - Les personnes qui ne voient pas  	- synthèse vocale 	- plage braille - Les personnes qui voient mal 	- malvoyant, âgé 	- contexte visuel contraint - Les personnes qui lisent avec difficulté  	- autre langue maternelle 	- contraintes cognitives et illettrisme - Les personnes qui ont des difficultés à manipuler - Les personnes cumulant des difficultés légères (seniors)  "
});

documentTitles["pushmail.html#les-criteres-a-respecter"] = "Les critères à respecter";
index.add({
    url: "pushmail.html#les-criteres-a-respecter",
    title: "Les critères à respecter",    
    body: "## Les critères à respecter  "
});

documentTitles["pushmail.html#consideration-generale"] = "Considération générale";
index.add({
    url: "pushmail.html#consideration-generale",
    title: "Considération générale",    
    body: "### Considération générale  Ces critères sont génériques et ne présument pas de la manière de fabriquer les mails, mais supposent que le contenu soit du &lt;abbr&gt;HTML&lt;/abbr&gt;, seul format permettant une mise en page complexe. Pour les exemples utilisés dans ces recommandations, nous les avons mis en œuvre dans Word qui semble être l’outil privilégié pour fabriquer les &lt;i lang=\&quot;en\&quot;&gt;push mail&lt;/i&gt; et les gabarits des &lt;i lang=\&quot;en\&quot;&gt;newsletters&lt;/i&gt;, en interne Orange. Bien sûr, ces recommandations peuvent être appliquées dans n’importe quel outil permettant de fabriquer des mails.  "
});

documentTitles["pushmail.html#simplifier-la-redaction-du-contenu"] = "Simplifier la rédaction du contenu";
index.add({
    url: "pushmail.html#simplifier-la-redaction-du-contenu",
    title: "Simplifier la rédaction du contenu",    
    body: "### Simplifier la rédaction du contenu  **Pour qui&amp;nbsp;: ** tout le monde et en particulier, les personnes déficientes visuelles, cognitives, avec des difficultés pour lire ou avec un déficit d’attention.    **Description&amp;nbsp;: **   Simplifier le rédactionnel pour tous les utilisateurs.  **À vérifier&amp;nbsp;: **   S’assurer que le rédacteur utilise&amp;nbsp;: - Des tournures de phrases limpides     - des phrases courtes et à la construction simple&amp;nbsp;: sujet, verbe, complément     - une idée par phrase     - des mots simples et les mots compliqués doivent être expliqués     - le présent     - de préférence, le style direct et la forme active (pas de subjonctif, pas de conjonctions) - Les caractères typographiques du Français       - Tiret - , cadratin —,«&amp;nbsp;guillemets français&amp;nbsp;»     - Accents même aux majuscules (éèêçàïùÉÈÊÇÀÏÙ) et n’utilisent pas&amp;nbsp;: - de mots en anglais, de sigles ou abréviations sauf ceux passés dans le langage courant   **Objectif&amp;nbsp;: **   Permettre aux utilisateurs de comprendre facilement le sens du contenu.  "
});

documentTitles["pushmail.html#structurer-semantiquement-le-contenu"] = "Structurer sémantiquement le contenu";
index.add({
    url: "pushmail.html#structurer-semantiquement-le-contenu",
    title: "Structurer sémantiquement le contenu",    
    body: "### Structurer sémantiquement le contenu  **Pour qui&amp;nbsp;: ** tout le monde, et en particulier les personnes déficientes visuelles, cognitives, avec des difficultés pour lire ou avec un déficit d’attention.    **Description&amp;nbsp;: **   Donner une structure cohérente au contenu rédactionnel grâce à la mise en place&amp;nbsp;: - de titres (balises &lt;abbr&gt;HTML&lt;/abbr&gt; `h1` jusqu’à `h6`)  - de listes (balises &lt;abbr&gt;HTML&lt;/abbr&gt; `ol`, `ul` et `li`)   **À vérifier&amp;nbsp;: **   - Les titres doivent être pertinents et non vides. - Il ne doit pas exister de saut dans la hiérarchie des titres (on ne passe pas directement d’un titre `h2` à un titre `h4`). - On peut mettre plusieurs `h1` par mail (se limiter tout de même à deux dans la majorité des cas). - les listes doivent être de réelles listes de plusieurs éléments et les listes ordonnées doivent être différenciées de celles qui ne le sont pas.  **Objectif&amp;nbsp;: **   Permettre aux utilisateurs de facilement comprendre et hiérarchiser le contenu.  **Exemple dans Word&amp;nbsp;: **   Pour donner une structure sémantique au contenu, il faut utiliser la palette des Styles. En donnant un style (titre, emphase, liste…) à une partie de vote contenu, vous modifiez son apparence mais surtout vous lui donnez de la sémantique. Cliquer sur le bouton d’ouverture (en bas à droite de l’outil Style dans l’onglet Accueil) ou grâce au raccourci clavier &lt;kbd&gt;Ctrl + Alt + Maj + s&lt;/kbd&gt; permet l’ouverture du panneau Style.  ![ ](images/style_word.jpg)    Vous avez accès à des listes (comme avec les boutons dans le bandeau «&amp;nbsp;Accueil&amp;nbsp;» dans le menu «&amp;nbsp;Paragraphe&amp;nbsp;»), aux titres et à toute une série de styles. De préférence utiliser les styles par défaut proposés, il en existe suffisamment.   ![ ](images/palette_style.jpg)  "
});

documentTitles["pushmail.html#simplifier-la-presentation"] = "Simplifier la présentation";
index.add({
    url: "pushmail.html#simplifier-la-presentation",
    title: "Simplifier la présentation",    
    body: "### Simplifier la présentation  **Pour qui&amp;nbsp;: ** tout le monde, et en particulier les personnes déficientes visuelles, cognitives, avec des difficultés pour lire ou avec un déficit d’attention.    **Description&amp;nbsp;: **   Simplifier la présentation du contenu et respecter les bonnes pratiques pour ce qui est de la présentation.   **À vérifier&amp;nbsp;: **   Pour assurer une lecture facile&amp;nbsp;: - Aligner le texte à gauche, mais ne pas le justifier - Utiliser une police de caractères facilement lisible en corps 12 pixels minimum - Mettre  en place une ponctuation simple - Ne pas mettre d’italiques, ni de phrases en majuscules, mais une majuscule en début de phrase - Éviter les fonds texturés (images) - Ne pas faire de retours chariots répétés ou de tabulation pour espacer (mais la fonction «&amp;nbsp;Paragraphe &amp;gt; Espacement&amp;nbsp;» ou «&amp;nbsp;Retrait&amp;nbsp;» dans Word) - Éviter les tableaux de mise en page ou de données - Mettre en place un indicateur de fin de mail (par exemple, une image indiquant«&amp;nbsp;fin de mail&amp;nbsp;», un texte blanc sur fond blanc «&amp;nbsp;fin de mail&amp;nbsp;»)  **Objectif&amp;nbsp;: ** S’assurer que la présentation n’empêche pas l’accès au contenu et à sa compréhension.  "
});

documentTitles["pushmail.html#donner-une-alternative-aux-images"] = "Donner une alternative aux images";
index.add({
    url: "pushmail.html#donner-une-alternative-aux-images",
    title: "Donner une alternative aux images",    
    body: "### Donner une alternative aux images  **Pour qui&amp;nbsp;: ** tout le monde, et en particulier les personnes déficientes visuelles ou cognitives.    **Description&amp;nbsp;: **   Mettre en place des alternatives textuelles à tous les éléments informatifs non-textuels (images, icônes…).  Mettre pour toute image (balise `img` en &lt;abbr&gt;HTML&lt;/abbr&gt;) une alternative pertinente (un attribut `alt` en &lt;abbr&gt;HTML&lt;/abbr&gt;)&amp;nbsp;:  - Pour les images cliquables&amp;nbsp;: préciser la fonction / la cible du lien dans l’alternative, - Pour les images porteuses d’information&amp;nbsp;: mettre une alternative décrivant l’information contenue dans l’image, - Pour les images contenant du texte&amp;nbsp;: mettre une alternative reprenant au moins le texte de l’image, - Pour les images décoratives&amp;nbsp;: mettre une alternative vide, - Pour les images dont le contenu de l’alternative serait trop long (schémas, graphes…), mettre à proximité de l’image décrite soit sa description sous forme d’une texte dans le mail, soit un lien pointant vers une page &lt;abbr&gt;HTML&lt;/abbr&gt; contenant cette description.  **À vérifier&amp;nbsp;: **   Toute image doit posséder une alternative qui ne reflète que le contenu informatif qu’elle porte. Pour les graphes, la solution peut être de mettre un lien sous l’image permettant d’accéder à un tableau de chiffre en bas du mail, par exemple. Une alternative doit être&amp;nbsp;: - Précise et équivalente au contenu de l’image ou sa fonction - Succincte : quelques mots à deux phrases courtes - Non redondante&amp;nbsp;: ne pas fournir la même information que dans le texte environnant - Sans texte générique, pas besoin d’alternative du type «&amp;nbsp;image de…&amp;nbsp;», «&amp;nbsp;graphique sur…&amp;nbsp;», «&amp;nbsp;lien vers…&amp;nbsp;», etc.  **Objectif&amp;nbsp;: **   Permettre l’accès à l’information véhiculée dans une image pour des utilisateurs qui n’y ont pas accès. Point bloquant&amp;nbsp;: une image sans description textuelle est inexploitable par des personnes ayant des déficiences visuelles ou celles n’affichant pas les images (mobile, faible bande passante…).  **Exemple dans Word&amp;nbsp;: **    Il faut donner une alternative textuelle (texte de replacement) à toute image dans Word. Pour cela, il faut accéder aux propriétés de cette image. Sélectionner l’image, faire un clic droit, puis «&amp;nbsp;Format de l’image&amp;nbsp;» et «&amp;nbsp;Texte de remplacement&amp;nbsp;».  ![ ](images/menu_context_im.jpg)   Ne pas remplir le champ «&amp;nbsp;Titre&amp;nbsp;», le laisser vide. En revanche, saisir dans le champ «&amp;nbsp;Description&amp;nbsp;» (seul champ lu par une synthèse vocale) le texte alternatif donnant l’information équivalente à celle contenue dans l’image. Si l’image ne porte pas d’information, laisser les deux champs «&amp;nbsp;Titre&amp;nbsp;» et «&amp;nbsp;Description&amp;nbsp;» vides.  ![ ](images/format_img.jpg)  "
});

documentTitles["pushmail.html#specifier-la-langue-du-mail-et-les-changements-eventuels"] = "Spécifier la langue du mail et les changements éventuels";
index.add({
    url: "pushmail.html#specifier-la-langue-du-mail-et-les-changements-eventuels",
    title: "Spécifier la langue du mail et les changements éventuels",    
    body: "### Spécifier la langue du mail et les changements éventuels  **Pour qui&amp;nbsp;: ** les personnes déficientes visuelles.    **Description&amp;nbsp;: **   Spécifier la langue principale du document (l’attribut `lang` et/ou `xml:lang` dans la balise `html`).  Préciser également la langue d’un contenu exprimé dans une langue autre que la langue principale (l’attribut `lang` et/ou `xml:lang` dans l’élément &lt;abbr&gt;HTML&lt;/abbr&gt; contenant l’expression en langue étrangère).    **À vérifier&amp;nbsp;: **   Pour les mots ou les expressions en langue étrangère passés dans l’usage courant (Google, newsletter…) ou les noms propres, ne pas indiquer de changement de langue.  **Objectif&amp;nbsp;: **   Cette indication permet à la synthèse vocale d’adapter la prononciation en fonction de la langue utilisée.  **Exemple pour une page en français&amp;nbsp;: **   - pour du &lt;abbr&gt;HTML&lt;/abbr&gt;&amp;nbsp;: `&lt;html lang=\&quot;fr\&quot;&gt;` - pour du XHTML&amp;nbsp;: `&lt;html xmlns=\&quot;http://www.w3.org/1999/xhtml\&quot; xml:lang=\&quot;fr\&quot; lang=\&quot;fr\&quot;&gt;`  **Exemple de changement de langue&amp;nbsp;: **   `découvrir Orange &lt;span lang=\&quot;fr\&quot;&gt;live&lt;/span&gt; TV`  **Exemple pour Word&amp;nbsp;:** Pour modifier la langue du document ou d’une partie du contenu (après sélection de ce contenu), on utilise dans l’onglet «&amp;nbsp;Révision&amp;nbsp;», l’élément «&amp;nbsp;Langue&amp;nbsp;».   ![ ](images/revision.jpg)   Dans le sous-menu de «&amp;nbsp;Langue&amp;nbsp;», on clique sur «&amp;nbsp;Définir la langue de vérification&amp;nbsp;» et dans la fenêtre «&amp;nbsp;Langue&amp;nbsp;», on choisit la langue voulue.  ![ ](images/langue.jpg)   "
});

documentTitles["pushmail.html#fournir-une-mise-en-page-des-tableaux-accessible"] = "Fournir une mise en page (des tableaux) accessible";
index.add({
    url: "pushmail.html#fournir-une-mise-en-page-des-tableaux-accessible",
    title: "Fournir une mise en page (des tableaux) accessible",    
    body: "### Fournir une mise en page (des tableaux) accessible  **Pour qui&amp;nbsp;: ** les personnes déficientes visuelles.    **Description&amp;nbsp;: **   Simplifier la mise en page, bien que les clients de messagerie (Outlook inclus) obligent à utiliser une mise en page en tableau.  **À vérifier&amp;nbsp;: **   Globalement, ne pas utiliser de mise en page complexe (fusion de cellules d’un tableau, multicolonnage…),  - Éviter d’imbriquer les tableaux de mise en page (grand maximum, 2 niveaux d’imbrication), mais aussi&amp;nbsp;:     - Ne pas fusionner les cellules d’un tableau, mais utiliser plusieurs tableaux plus simples     - Pas de cellules vides     - Pas d’images de fond  - Assurer une lecture séquentielle (on doit pouvoir lire de gauche à droite et de haut en bas) - Éviter les tableaux de données, les graphiques ou les schémas complexes  **Objectif&amp;nbsp;: **   Permettre, notamment aux utilisateurs de lecteurs d’écran, de comprendre facilement le contenu quelle que soit la mise en page utilisée.  "
});

documentTitles["pushmail.html#rendre-accessibles-les-couleurs-et-le-contraste"] = "Rendre accessibles les couleurs et le contraste";
index.add({
    url: "pushmail.html#rendre-accessibles-les-couleurs-et-le-contraste",
    title: "Rendre accessibles les couleurs et le contraste",    
    body: "### Rendre accessibles les couleurs et le contraste  **Pour qui&amp;nbsp;: ** tout le monde, en particulier les utilisateurs sur mobile et tablette, les personnes malvoyantes, éprouvant des difficultés de lecture ou avec un déficit d’attention et les seniors.     **Description&amp;nbsp;: **   - Le niveau de contraste entre le texte et l’arrière-plan doit être suffisamment élevé. - La couleur ou une information sensorielle (forme, taille, son, orientation, localisation visuelle…) ne doit pas être la seule façon de véhiculer de l’information, d’indiquer une action, de solliciter une réponse ou de distinguer un élément.  **Objectif&amp;nbsp;: **   Un niveau de contraste insuffisant est préjudiciable pour les utilisateurs ayant des difficultés visuelles ainsi que pour les utilisateurs de mobiles et tablettes se trouvant dans un environnement très lumineux. De même, utiliser des informations sensorielles (forme, taille, son, orientation, localisation visuelle…) seules sans alternative empêche ceux qui ne peuvent les interpréter d’agir efficacement voire d’agir tout simplement.   **Outil&amp;nbsp;: **   L’application [&lt;i lang=\&quot;en\&quot;&gt;Colour Contrast Analyser&lt;/i&gt;](http://www.paciellogroup.com/resources/contrastanalyser/) permet de mesurer rapidement des niveaux de contraste de couleurs (gratuit pour Mac et Windows).    "
});

documentTitles["pushmail.html#identifier-les-liens-et-leurs-cibles"] = "Identifier les liens et leurs cibles";
index.add({
    url: "pushmail.html#identifier-les-liens-et-leurs-cibles",
    title: "Identifier les liens et leurs cibles",    
    body: "### Identifier les liens et leurs cibles  **Pour qui&amp;nbsp;: ** tout le monde, en particulier les malvoyants, les non-voyants et les personnes ayant des difficultés de lecture.  **Description&amp;nbsp;: **   Rendre les liens identifiables et compréhensibles hors contexte  **À vérifier&amp;nbsp;: **   - Souligner les liens pour éviter aux personnes de faire un effort cognitif pour les identifier et ne pas obliger les personnes déficientes motrices (utilisant le clavier) ou malvoyantes à ne les trouver qu’en naviguant dans tout le contenu. - Ne pas utiliser des intitulés comme «&amp;nbsp;Cliquez ici&amp;nbsp;», «&amp;nbsp;Pour en savoir plus&amp;nbsp;», «&amp;nbsp;Suivez ce lien&amp;nbsp;», «&amp;nbsp;Plus de détails&amp;nbsp;», «&amp;nbsp;Lire la suite&amp;nbsp;», mais des intitulés qui identifient  bien leur cible - Indiquer l’ouverture de toute nouvelle fenêtre (adresse e-mail, site internet…) en rajoutant à l’intitulé du texte «&amp;nbsp;nouvelle fenêtre&amp;nbsp;» par exemple, car le multifenêtrage qui peut être déjà troublant pour un voyant et tout simplement bloquant pour un non-voyant.  **Objectif&amp;nbsp;: **   Permettre à un utilisateur n’ayant pas accès au contexte visuel de connaître la destination du lien. Notamment important pour les utilisateurs naviguant grâce à une liste de liens extraite de la page (lecteurs d’écran) ou les utilisateurs de loupe logicielle qui ne voient qu’une fraction de la page.   "
});

documentTitles["pushmail.html#word-et-accessibilite-quelques-liens"] = "Word et accessibilité, quelques liens";
index.add({
    url: "pushmail.html#word-et-accessibilite-quelques-liens",
    title: "Word et accessibilité, quelques liens",    
    body: "### Word et accessibilité, quelques liens  - [&lt;i lang=\&quot;en\&quot;&gt;WebAIM: Microsoft Word - Creating Accessible Documents&lt;/i&gt;](http://www.webaim.org/techniques/word/)  - [&lt;i lang=\&quot;en\&quot;&gt;Make your Word documents accessible – Microsoft Office Support&lt;/i&gt;](https://support.office.com/en-us/article/Creating-accessible-Word-documents-D9BF3683-87AC-47EA-B91A-78DCACB3C66D) - [Accessibilité des documents Word (en français)](http://www.anysurfer.be/fr/en-pratique/documents/word)  &lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2016  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt;"
});


