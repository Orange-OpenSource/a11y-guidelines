
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



documentTitles["index.html#recommandations-accessibilite-orange-pour-les-autres-plateformes"] = "Recommandations accessibilité Orange pour les autres plateformes";
index.add({
    url: "index.html#recommandations-accessibilite-orange-pour-les-autres-plateformes",
    title: "Recommandations accessibilité Orange pour les autres plateformes",    
    body: "# Recommandations accessibilité Orange pour les autres plateformes  &lt;script&gt;$(document).ready(function () {     setBreadcrumb([{\&quot;label\&quot;:\&quot;Présentation\&quot;}]); });&lt;/script&gt;  Cette section du site contient des recommandations d'accessibilité concernant les plateformes autres que Web et Mobile :  - [Créer des documents powerpoint accessibles](./powerpoint.html) : section consacrée à la réalisation de présentations PowerPoint accessibles.  - [Créer des pushmail accessibles](./pushmail.html) : section consacrée à la réalisation d'emails accessibles.   &amp;nbsp; &lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2016  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt;"
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
    body: "## Introduction Produire des documents PowerPoint accessibles demande quelques efforts. Heureusement PowerPoint est doté d'un outil permettant de vérifier l'accessibilité. Celui-ci identifie les principales erreurs et propose des solutions pour y remédier.  Ceci étant dit, même après avoir corrigé les erreurs, nous nous sommes aperçus que certains éléments n'étaient pas toujours correctement vocalisés par les lecteurs d'écran (SmartArt, tableaux ...). Une fois votre document accessible, l'export en PDF permet d'en améliorer la restitution avec les outils d'assistance.  "
});

documentTitles["powerpoint.html#recommandations"] = "Recommandations";
index.add({
    url: "powerpoint.html#recommandations",
    title: "Recommandations",    
    body: "## Recommandations  Vous trouverez ci-dessous un résumé des recommandations à respecter pour produire des présentations PowerPoint accessibles.  Pour plus de détails, n'hésitez pas à consulter &lt;a href=\&quot;https://disic.github.io/guides-documents_bureautiques_accessibles/html/\&quot;&gt;le site de la &lt;abbr title=\&quot;direction interministérielle des systèmes d’information et de communication\&quot;&gt;DISIC&lt;/abbr&gt;&lt;/a&gt; qui propose des guides pour la rédaction de documents accessibles.  "
});

documentTitles["powerpoint.html#1-utiliser-les-masques-de-diapositive"] = "1. Utiliser les masques de diapositive";
index.add({
    url: "powerpoint.html#1-utiliser-les-masques-de-diapositive",
    title: "1. Utiliser les masques de diapositive",    
    body: "### 1. Utiliser les masques de diapositive Pour garantir une bonne restitution de votre présentation par les outils d'assistance, veiller à bien utiliser les masques de diapositive. En effet toute zone de texte ajoutée à la main ne sera pas vocalisée par les lecteurs d'écran.  "
});

documentTitles["powerpoint.html#2-donner-des-titres-aux-diapositives"] = "2. Donner des titres aux diapositives";
index.add({
    url: "powerpoint.html#2-donner-des-titres-aux-diapositives",
    title: "2. Donner des titres aux diapositives",    
    body: "### 2. Donner des titres aux diapositives Chaque diapositive doit posséder un titre unique. Celui-ci doit être renseigné dans la zone : \&quot;Cliquer pour ajouter un titre\&quot;. Si les titres sont renseignés correctement, il sera aisé pour tous les utilisateurs de naviguer à l'intérieur de la présentation.  "
});

documentTitles["powerpoint.html#3-renseigner-une-alternative-textuelle-sur-les-images"] = "3. Renseigner une alternative textuelle sur les images";
index.add({
    url: "powerpoint.html#3-renseigner-une-alternative-textuelle-sur-les-images",
    title: "3. Renseigner une alternative textuelle sur les images",    
    body: "### 3. Renseigner une alternative textuelle sur les images Si l'image apporte de l'information il faut lui associer un texte de remplacement (champ description). Si l'image au contraire est purement décorative, il n'y a rien à faire. Sans texte de remplacement celle-ci sera ignorée par les outils d'assistance.  "
});

documentTitles["powerpoint.html#4-verifier-lordre-de-lecture-des-elements"] = "4. Vérifier l'ordre de lecture des éléments";
index.add({
    url: "powerpoint.html#4-verifier-lordre-de-lecture-des-elements",
    title: "4. Vérifier l'ordre de lecture des éléments",    
    body: "### 4. Vérifier l'ordre de lecture des éléments Pour les utilisateurs qui naviguent à l'aide du clavier (touche TAB), il est important de vérifier l'ordre de lecture des éléments depuis le volet de sélection (attention ordre inversé, dernier élément lu en premier dans la liste).  "
});

documentTitles["powerpoint.html#5-tableaux"] = "5. Tableaux";
index.add({
    url: "powerpoint.html#5-tableaux",
    title: "5. Tableaux",    
    body: "### 5. Tableaux Les tableaux de données doivent rester simples. Éviter de fusionner des cellules, d'insérer des images (elles ne seront pas correctement restituées). Ne pas hésiter à insérer un titre, une légende voir une description sous forme de texte à l'intérieur de la diapositive.    À noter que PowerPoint prévoit la possibilité d'ajouter une alternative textuelle aux tableaux. Par contre, contrairement aux images l'alternative sur les tableaux ne semble pas toujours vocalisée par les outils d'assistance.  "
});

documentTitles["powerpoint.html#6-sassurer-que-la-couleur-nest-pas-le-seul-moyen-utilise-pour-communiquer-linformation"] = "6. S'assurer que la couleur n'est pas le seul moyen utilisé pour communiquer l'information";
index.add({
    url: "powerpoint.html#6-sassurer-que-la-couleur-nest-pas-le-seul-moyen-utilise-pour-communiquer-linformation",
    title: "6. S'assurer que la couleur n'est pas le seul moyen utilisé pour communiquer l'information",    
    body: "### 6. S'assurer que la couleur n'est pas le seul moyen utilisé pour communiquer l'information Ne pas véhiculer l'information que par la couleur (important pour les daltoniens, les malvoyants et les aveugles).  "
});

documentTitles["powerpoint.html#7-assurer-un-contraste-suffisant"] = "7. Assurer un contraste suffisant";
index.add({
    url: "powerpoint.html#7-assurer-un-contraste-suffisant",
    title: "7. Assurer un contraste suffisant",    
    body: "### 7. Assurer un contraste suffisant  Le niveau de contraste entre la couleur du texte et celle de l'arrière-plan doit être suffisant.  "
});

documentTitles["powerpoint.html#8-utiliser-le-verificateur-integre"] = "8. Utiliser le vérificateur intégré";
index.add({
    url: "powerpoint.html#8-utiliser-le-verificateur-integre",
    title: "8. Utiliser le vérificateur intégré",    
    body: "### 8. Utiliser le vérificateur intégré PowerPoint intègre un vérificateur d'accessibilité. Celui-ci permet d'identifier les contenus susceptibles de poser des difficultés.  "
});

documentTitles["powerpoint.html#ressources-externes"] = "Ressources externes";
index.add({
    url: "powerpoint.html#ressources-externes",
    title: "Ressources externes",    
    body: "## Ressources externes  - [Créer des documents bureautiques accessibles](https://disic.github.io/guides-documents_bureautiques_accessibles/html/), &lt;abbr title=\&quot;direction interministérielle des systèmes d’information et de communication\&quot;&gt;DISIC&lt;/abbr&gt; (français). - [Accessibilité PowerPoint](http://webaim.org/techniques/PowerPoint/), WebAIM (anglais).  &amp;nbsp; &lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2016  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt;"
});



documentTitles["pushmail.html#recommandations-accessibilite-pushmail-orange"] = "Recommandations accessibilité pushmail Orange";
index.add({
    url: "pushmail.html#recommandations-accessibilite-pushmail-orange",
    title: "Recommandations accessibilité pushmail Orange",    
    body: "# Recommandations accessibilité pushmail Orange    &lt;script&gt;$(document).ready(function () {     setBreadcrumb([{\&quot;label\&quot;:\&quot;Pushmails\&quot;}]); });&lt;/script&gt;   "
});

documentTitles["pushmail.html#introduction-laccessibilite-des-mails"] = "Introduction : l'accessibilité des mails";
index.add({
    url: "pushmail.html#introduction-laccessibilite-des-mails",
    title: "Introduction : l'accessibilité des mails",    
    body: "## Introduction : l'accessibilité des mails Les mails au format texte et sans image, comme souvent les mails entre salariés, sont accessibles. Le problème de non accessibilité est plutôt le fait des pushmails. Ces mails, à la mise en forme évoluée (liens, mise en page complexe, illustrations, schémas), permettent la publication de quantité d'informations et sont un outil essentiel de la communication d'entreprise.  "
});

documentTitles["pushmail.html#des-solutions-alternatives"] = "Des solutions alternatives";
index.add({
    url: "pushmail.html#des-solutions-alternatives",
    title: "Des solutions alternatives",    
    body: "### Des solutions alternatives Et si la mise en page du push mail est complexe, que l'on n'a pas la possibilité de rendre le pushmail accessible, il existe des solutions alternatives moins élégantes, mais qui fonctionnent toujours : - Proposer un lien redirigeant vers une page web  - Mettre en place un lien en début de mail pointant vers un fichier texte ou un fichier Word accessible  "
});

documentTitles["pushmail.html#qui-est-impacte"] = "Qui est impacté ?";
index.add({
    url: "pushmail.html#qui-est-impacte",
    title: "Qui est impacté ?",    
    body: "### Qui est impacté ? - Les personnes qui ne voient pas  	- synthèse vocale 	- plage braille - Les personnes qui voient mal 	- malvoyant, âgé 	- contexte visuel contraint - Les personnes qui lisent avec difficulté  	- autre langue maternelle 	- contraintes cognitives et illettrisme - Les personnes qui ont des difficultés à manipuler - Les personnes cumulant des difficultés légères (seniors)  "
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
    body: "### Considération générale  Ces critères sont génériques et ne présument pas de la manière de fabriquer les mails, mais supposent que le contenu soit du html, seul format permettant une mise en page complexe. Pour les exemples utilisés dans ces recommandations, nous les avons mis en oeuvre dans Word qui semble être l'outil privilégié pour fabriquer les pushmails et les gabarits des newsletters, en interne Orange. Bien sûr, ces recommandations peuvent être appliquées dans n'importe quel outil permettant de fabriquer des mails.  "
});

documentTitles["pushmail.html#simplifier-la-redaction-du-contenu"] = "Simplifier la rédaction du contenu";
index.add({
    url: "pushmail.html#simplifier-la-redaction-du-contenu",
    title: "Simplifier la rédaction du contenu",    
    body: "### Simplifier la rédaction du contenu  **Pour qui : ** tout le monde et en particulier, les personnes déficientes visuelles, cognitives, avec des difficultés pour lire ou avec un déficit d'attention.    **Description : **   Simplifier le rédactionnel pour tous les utilisateurs.  **À vérifier : **   S'assurer que le rédacteur utilise : - Des tournures de phrases limpides     - des phrases courtes et à la construction simple : sujet, verbe, complément     - une idée par phrase     - des mots simples et les mots compliqués doivent être expliqués     - le présent     - de préférence, le style direct et la forme active (pas de subjonctif, pas de conjonctions) - Les caractères typographiques du Français       - Tiret - , cadratin —, « guillemets français »     - Accents même aux majuscules (éèêçàïùÉÈÊÇÀÏÙ) et n'utilisent pas : - de mots en anglais, de sigles ou abréviations sauf ceux passés dans le langage courant   **Objectif : **   Permettre aux utilisateurs de comprendre facilement le sens du contenu.  "
});

documentTitles["pushmail.html#structurer-semantiquement-le-contenu"] = "Structurer sémantiquement le contenu";
index.add({
    url: "pushmail.html#structurer-semantiquement-le-contenu",
    title: "Structurer sémantiquement le contenu",    
    body: "### Structurer sémantiquement le contenu  **Pour qui : ** tout le monde et en particulier, les personnes déficientes visuelles, cognitives, avec des difficultés pour lire ou avec un déficit d'attention.    **Description : **   Donner une structure cohérente au contenu rédactionnel grâce à la mise en place : - de titres (balises HTML `h1` jusqu'à `h6`)  - de listes (balises HTML `ol`, `ul` et `li`)   **À vérifier : **   - Les titres doivent être pertinents et non vides. - Il ne doit pas exister de saut dans la hiérarchie des titres (on ne passe pas directement d'un titre `h2` à un titre `h4`). - On peut mettre plusieurs `h1` par mail (se limiter tout de même à deux dans la majorité des cas). - les listes doivent être de réelles listes de plusieurs éléments et les listes ordonnées doivent être différenciées de celles qui ne le sont pas.  **Objectif : **   Permettre aux utilisateurs de facilement comprendre et hiérarchiser le contenu.  **Exemple dans Word : **   Pour donner une structure sémantique au le contenu, il faut utiliser la palette des Styles. En donnant un style (titre, emphase, liste...) à une partie de vote contenu, vous modifiez son apparence mais surtout vous lui donnez de la sémantique. Cliquer sur le bouton d'ouverture (en bas à droite de l'outil Style dans l'onglet Accueil) ou grâce au raccourci clavier Ctrl + Alt + Maj + s permet l'ouverture du panneau Style.  ![ ](images/style_word.jpg)    Vous avez accès à des listes (comme avec les boutons dans le bandeau \&quot;Accueil\&quot; dans le menu \&quot;Paragraphe), aux titres et à toute une série de styles. De préférence utiliser les styles par défaut proposés, il en existe suffisamment.   ![ ](images/palette_style.jpg)  "
});

documentTitles["pushmail.html#simplifier-la-presentation"] = "Simplifier la présentation";
index.add({
    url: "pushmail.html#simplifier-la-presentation",
    title: "Simplifier la présentation",    
    body: "### Simplifier la présentation  **Pour qui : ** tout le monde et en particulier, les personnes déficientes visuelles, cognitives, avec des difficultés pour lire ou avec un déficit d'attention.    **Description : **   Simplifier la présentation du contenu et respecter les bonnes pratiques pour ce qui est de la présentation.   **À vérifier : **   Pour assurer une lecture facile : - Aligner le texte à gauche, mais ne pas le justifier - Utiliser une police de caractères facilement lisible en corps 12 pixels minimum - Mettre  en place une ponctuation simple - Ne pas mettre d’italiques, ni de phrases en majuscules, mais une majuscule en début de phrase - Éviter les fonds texturés (images) - Ne pas faire de retours chariots répétés ou de tabulation pour espacer (mais la fonction Paragraphe Espacement ou Retrait dans Word) - Éviter les tableaux de mise en page ou de données - Mettre en place un indicateur de fin de mail (par exemple, une image indiquant « fin de mail », un texte blanc sur fond blanc \&quot;fin de mail\&quot;)  **Objectif : ** S'assurer que la présentation n'empêche pas l'accès au contenu et à sa compréhension.  "
});

documentTitles["pushmail.html#donner-une-alternative-aux-images"] = "Donner une alternative aux images";
index.add({
    url: "pushmail.html#donner-une-alternative-aux-images",
    title: "Donner une alternative aux images",    
    body: "### Donner une alternative aux images  **Pour qui : ** tout le monde et en particulier, les personnes déficientes visuelles ou cognitives.    **Description : **   Mettre en place des alternatives textuelles à tous les éléments informatifs non-textuels (images, icones...).  Mettre pour toute image (balise `img` en HTML) une alternative pertinente (un attribut `alt` en HTML) :  - Pour les images cliquables : préciser la fonction / la cible du lien dans l’alternative, - Pour les images porteuses d'information : mettre une alternative décrivant l'information contenue dans l'image - Pour les images contenant du texte : mettre une alternative reprenant au moins le texte de l’image, - Pour les images décoratives : mettre une alternative vide, - Pour les images dont le contenu de l'alternative serait trop long (schémas, graphes...), mettre à proximité de l'image décrite soit, sa description sous forme d'une texte dans le mail soit, un lien pointant vers une page html contenant cette description.  **À vérifier : **   Toute image doit posséder une  alternative qui ne reflète que le contenu informatif qu'elle porte. Pour les graphes, la solution, peut-être, de mettre un lien sous l'image permettant d'accéder à un tableau de chiffre en bas du mail, par exemple. Une alternative doit être : - Précise et équivalente au contenu de l'image ou sa fonction - Succincte, quelques mots à deux phrases courtes - Non redondante : ne pas fournir la même information que dans le texte environnant - Sans texte générique, pas besoin d'alternative du type \&quot;image de...\&quot;, \&quot;graphique sur...\&quot;, \&quot;lien vers...\&quot;, etc.  **Objectif : **   Permettre l'accès à l'information véhiculée dans une image pour des utilisateurs qui n'y ont pas accès. Point bloquant : une image sans description textuelle est inexploitable par des personnes ayant des déficiences visuelles ou celles n'affichant pas les images (mobile, faible bande passante...).  **Exemple dans Word : **    Il faut donner une alternative textuelle (texte de replacement) à toute image dans Word. Pour cela, il faut accéder aux propriétés de cette image. Sélectionnez l'image, faire un clic droit, puis \&quot;Format de l'image\&quot; et \&quot;Texte de remplacement\&quot;.  ![ ](images/menu_context_im.jpg)   Ne pas remplir le champ \&quot;Titre\&quot;, le laisser vide. En revanche, saisir dans le champs \&quot;Description\&quot; (seul champ lu par une synthèse vocale) le texte alternatif donnant l'information équivalente à celle contenue dans l'image. Si l'image ne porte pas d'information, laisser les deux champs \&quot;Titre\&quot; et \&quot;Description\&quot; vides.  ![ ](images/format_img.jpg)  "
});

documentTitles["pushmail.html#specifier-la-langue-du-mail-et-les-changements-eventuels"] = "Spécifier la langue du mail et les changements éventuels";
index.add({
    url: "pushmail.html#specifier-la-langue-du-mail-et-les-changements-eventuels",
    title: "Spécifier la langue du mail et les changements éventuels",    
    body: "### Spécifier la langue du mail et les changements éventuels  **Pour qui : ** les personnes déficientes visuelles.    **Description : **   Spécifier la langue principale du document (l'attribut `lang` et/ou `xml:lang` dans la balise `html`).  Préciser également la langue d'un contenu exprimé dans une langue autre que la langue principale (l'attribut `lang` et/ou `xml:lang` dans l'élément html contenant l'expression en langue étrangère).    **À vérifier : **   Pour les mots ou les expressions en langue étrangère passés dans l'usage courant (Google, newsletter...) ou les noms propres, ne pas indiquer de changement de langue.  **Objectif : **   Cette indication permet à la synthèse vocale d'adapter la prononciation en fonction de la langue utilisée.  **Exemple pour une page en français : **   - pour du HTML : `&lt;html lang=\&quot;fr\&quot;&gt;` - pour du XHTML : `&lt;html xmlns=\&quot;http://www.w3.org/1999/xhtml\&quot; xml:lang=\&quot;fr\&quot; lang=\&quot;fr\&quot;&gt;`  **Exemple de changement de langue : **   `découvrir Orange &lt;span lang=\&quot;fr\&quot;&gt;live&lt;/span&gt; TV`  **Exemple pour Word :** Pour modifier la langue du document ou d'une partie du contenu (après sélection de ce contenu), on utilise on utilise, dans l'onglet \&quot;Révision\&quot;, l'élément \&quot;Langue\&quot;.   ![ ](images/revision.jpg)   Dans le sous-menu de \&quot;Langue\&quot;, on clique sur \&quot;Définir la langue de vérification\&quot; et dans la fenêtre \&quot;Langue\&quot;, on choisit la langue voulue.  ![ ](images/langue.jpg)   "
});

documentTitles["pushmail.html#fournir-une-mise-en-page-des-tableaux-accessible"] = "Fournir une mise en page (des tableaux) accessible";
index.add({
    url: "pushmail.html#fournir-une-mise-en-page-des-tableaux-accessible",
    title: "Fournir une mise en page (des tableaux) accessible",    
    body: "### Fournir une mise en page (des tableaux) accessible  **Pour qui : ** les personnes déficientes visuelles.    **Description : **   Simplifier la mise en page bien que les clients de messagerie (Outlook inclus) obligent à utiliser une mise en page en tableau.  **À vérifier : **   Globalement, ne pas utiliser de mise en page complexe (fusion de cellules d'un tableau, multicolonnage...),  - Éviter d'imbriquer les tableaux de mise en page (grand maximum, 2 niveaux d'imbrication), mais aussi :     - Ne pas fusionner les cellules d’un tableau, mais utiliser plusieurs tableaux plus simples     - Pas de cellules vides     - Pas d’images de fond  - Assurer une lecture séquentielle (on doit pouvoir lire de gauche à droite et de haut en bas) - Éviter les tableaux de données, les graphiques ou les schémas complexes  **Objectif : **   Permettre, notamment aux utilisateurs de lecteurs d'écran, de comprendre facilement le contenu quelle que soit la mise en page utilisée.  "
});

documentTitles["pushmail.html#rendre-accessibles-les-couleurs-et-le-contraste"] = "Rendre accessibles les couleurs et le contraste";
index.add({
    url: "pushmail.html#rendre-accessibles-les-couleurs-et-le-contraste",
    title: "Rendre accessibles les couleurs et le contraste",    
    body: "### Rendre accessibles les couleurs et le contraste  **Pour qui : ** tout le monde, en particulier, les utilisateurs sur mobile et tablette, les personnes malvoyantes, éprouvant des difficultés de lecture ou avec un déficit d'attention et les seniors.     **Description : **   - Le niveau de contraste entre le texte et l'arrière-plan, doit être suffisamment élevé. - La couleur ou une information sensorielle (forme, taille, son, orientation, localisation visuelle...) ne doit pas être la seule façon de véhiculer de l'information, d'indiquer une action, de solliciter une réponse ou de distinguer un élément.  **Objectif : **   Un niveau de contraste insuffisant est préjudiciable pour les utilisateurs ayant des difficultés visuelles ainsi que pour les utilisateurs de mobiles et tablettes se trouvant dans un environnement très lumineux. De même, utiliser des informations sensorielles (forme, taille, son, orientation, localisation visuelle...) seules sans alternative empêche, ceux qui ne peuvent les interpréter, d'agir efficacement voire d'agir tout simplement.   **Outil : **   L'application [colour contrast analyser](http://www.paciellogroup.com/resources/contrastanalyser/) permet de mesurer rapidement des niveaux de contraste de couleurs (gratuit pour Mac et Windows).    "
});

documentTitles["pushmail.html#identifier-les-liens-et-leurs-cibles"] = "Identifier les liens et leurs cibles";
index.add({
    url: "pushmail.html#identifier-les-liens-et-leurs-cibles",
    title: "Identifier les liens et leurs cibles",    
    body: "### Identifier les liens et leurs cibles  **Pour qui : ** tout le monde, en particulier, pour les malvoyants, les non-voyants et les personnes ayant des difficultés de lecture.  **Description : **   Rendre les liens identifiables et compréhensibles hors contexte  **À vérifier : **   - Souligner les liens pour éviter aux personnes de faire un effort cognitif pour les identifier et ne pas obliger les personnes déficientes motrices (utilisant le clavier) ou malvoyantes à ne les trouver qu'en naviguant dans tout le contenu. - Ne pas utiliser des intitulés comme \&quot;Cliquez ici\&quot;, \&quot;Pour en savoir plus\&quot;, \&quot;Suivez ce lien\&quot;, \&quot;Plus de détails\&quot;, \&quot;Lire la suite\&quot;, mais des intitulés qui identifient  bien leur cible - Indiquer l’ouverture de toute nouvelle fenêtre (adresse e-mail, site internet…) en rajoutant à l'intitulé du texte, par exemple \&quot;nouvelle fenêtre\&quot;, car le multifenêtrage qui peut être déjà troublant pour un voyant et tout simplement bloquant pour un non-voyant.  **Objectif : **   Permettre à un utilisateur n'ayant pas accès au contexte visuel de connaître la destination du lien. Notamment important pour les utilisateurs naviguant grâce à une liste de liens extraite de la page (lecteurs d'écran) ou les utilisateurs de loupe logicielle qui ne voient qu'une fraction de la page.   "
});

documentTitles["pushmail.html#word-et-accessibilite-quelques-liens"] = "Word et accessibilité, quelques liens";
index.add({
    url: "pushmail.html#word-et-accessibilite-quelques-liens",
    title: "Word et accessibilité, quelques liens",    
    body: "### Word et accessibilité, quelques liens  - http://www.webaim.org/techniques/word/  - https://support.office.com/en-us/article/Creating-accessible-Word-documents-D9BF3683-87AC-47EA-B91A-78DCACB3C66D - http://www.anysurfer.be/fr/en-pratique/documents/word  &lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2016  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt;"
});


