
var index = lunr(function () {
    this.field('body');
    this.ref('url');
});

var documentTitles = {};



documentTitles["index.html#recommandations-accessibilite-web-orange"] = "Recommandations accessibilité web Orange";
index.add({
    url: "index.html#recommandations-accessibilite-web-orange",
    title: "Recommandations accessibilité web Orange",    
    body: "# Recommandations accessibilité web Orange    &lt;script&gt;$(document).ready(function () {     setBreadcrumb([{\&quot;label\&quot;:\&quot;Présentation\&quot;}]); });&lt;/script&gt;   *** L'accessibilité, un avantage pour tous, une nécessité pour certains ! ***  "
});

documentTitles["index.html#definition-de-laccessibilite-web"] = "Définition de l’accessibilité web";
index.add({
    url: "index.html#definition-de-laccessibilite-web",
    title: "Définition de l’accessibilité web",    
    body: "## Définition de l’accessibilité web ** C’est un service web utilisable par tous **  - Personnes valides - Seniors - Personnes en situation de handicap (temporaire ou permanent)  ** et dans tous les contextes **  - Avec tous types de matériel : navigateurs, PC, MAC, tél. mobiles, tablettes - Dans un contexte dégradé : mauvaise luminosité, touchpad en mobilité, etc. - Avec des logiciels spécifiques de compensation du handicap    "
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
    body: "### Critères incontournables Liste des critères principaux selon votre profil, basés sur un sous-ensemble des recommandations WCAG 2.0 niveau AA. Un bon moyen de prendre connaissance des principaux critères à respecter pour s'engager vers une démarche de mise en accessibilité progressive.    "
});

documentTitles["index.html#ensemble-des-exigences"] = "Ensemble des exigences";
index.add({
    url: "index.html#ensemble-des-exigences",
    title: "Ensemble des exigences",    
    body: "### Ensemble des exigences Section à destination des développeurs. Tout ce qu'il faut savoir pour coder accessible et pour effectuer les tests permettant de valider ses développements.  "
});

documentTitles["index.html#outils-de-test"] = "Outils de test";
index.add({
    url: "index.html#outils-de-test",
    title: "Outils de test",    
    body: "### Outils de test Pour ceux qui veulent vérifier l'accessibilité de leurs pages avec des outils plus ou moins automatiques. Enfin, tout l'outillage méthodologique et technique pour évaluer ses pages.  "
});

documentTitles["index.html#nos-outils-pour-le-web"] = "Nos outils pour le Web";
index.add({
    url: "index.html#nos-outils-pour-le-web",
    title: "Nos outils pour le Web",    
    body: "### Nos outils pour le Web Présentation de la bibliothèque Boosted et du service Confort+.  "
});

documentTitles["index.html#les-exemples"] = "Les exemples";
index.add({
    url: "index.html#les-exemples",
    title: "Les exemples",    
    body: "### Les exemples Des exemples didactiques pour certains types de composants ou d’éléments d’interface  particulièrement délicats à rendre accessibles et fréquemment utilisés. Tout y est expliqué, il n'a plus qu'à se laisser guider !  Ces exemples utilisent la librairie [boosted](http://boosted.orange.com/). Cette librairie basée sur [bootstrap](http://getbootstrap.com/) permet de réaliser rapidement un site web responsive et accessible aux couleurs de la charte Orange. &lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2016  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt;"
});



documentTitles["fondamentaux.html#liste-des-criteres-incontournables"] = "Liste des critères incontournables";
index.add({
    url: "fondamentaux.html#liste-des-criteres-incontournables",
    title: "Liste des critères incontournables",    
    body: "# Liste des critères incontournables  &lt;script&gt;$(document).ready(function () {     setBreadcrumb([{\&quot;label\&quot;:\&quot;Liste des critères incontournables\&quot;}]); });&lt;/script&gt;  &lt;span data-menuitem=\&quot;fondamentaux\&quot;&gt;&lt;/span&gt; Ce socle de critères destiné aux sites et applications web Orange permet d'éviter les principales erreurs d'accessibilité. Il s'agit d'un sous-ensemble des exigences d'accessibilité.    La mise en œuvre de ce socle ne permet pas, d’obtenir à coup sûr un site accessible, mais pose les fondations qui permettent de s'engager dans une démarche de mise en accessibilité progressive.  Le respect de la charte Orange (&lt;span lang=\&quot;en\&quot;&gt;Design for digital platforms Guideline&lt;/span&gt;), disponible sur [le site de la marque Orange](http://brand.orange.com/) est un prérequis à l'utilisation de ce socle. Certains points déjà présents dans la charte Orange (utilisation des couleurs, alignement du texte...) n'ont pas été repris dans cette liste de critères.  Deux versions sont disponibles : - **La première version** n'aborde pas le code, elle s'adresse aux concepteurs de produits, designers, responsables de projet, etc. - **La seconde version** aborde le code et s'adresse aux développeurs, aux responsables techniques, aux équipes de validation, qualification, etc.  &lt;p class=\&quot;row\&quot;&gt;     &lt;div class=\&quot;perso col-xs-12 col-md-6 col-lg-4\&quot;&gt;         &lt;h2 class=\&quot;sr-only\&quot;&gt;Pour les concepteurs et designers&lt;/h2&gt;                   &lt;a href=\&quot;./fondamentaux-nontech.html\&quot; class=\&quot;btn btn-info\&quot;&gt;             ![](./images/perso1.png)             &lt;div&gt;Critères incontournables pour la conception&lt;/div&gt;         &lt;/a&gt;     &lt;/div&gt;     &lt;div class=\&quot;perso col-xs-12 col-md-6 col-lg-4\&quot;&gt;         &lt;h2 class=\&quot;sr-only\&quot;&gt;Pour les développeurs&lt;/h2&gt;                   &lt;a href=\&quot;./fondamentaux-tech.html\&quot; class=\&quot;btn btn-info\&quot;&gt;             ![](./images/perso3.png)             &lt;div&gt;Critères incontournables pour le développement&lt;/div&gt;         &lt;/a&gt;     &lt;/div&gt;             &lt;/p&gt; &lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2016  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt;"
});



documentTitles["fondamentaux-tech.html#criteres-incontournables-pour-le-developpement"] = "Critères incontournables pour le développement";
index.add({
    url: "fondamentaux-tech.html#criteres-incontournables-pour-le-developpement",
    title: "Critères incontournables pour le développement",    
    body: "# Critères incontournables pour le développement  &lt;script&gt;$(document).ready(function () {     setBreadcrumb([         {\&quot;label\&quot;:\&quot;Critères incontournables\&quot;, \&quot;url\&quot;: \&quot;./fondamentaux.html\&quot;},         {\&quot;label\&quot;:\&quot;Critères incontournables pour le développement\&quot;}     ]);     addSubMenu(); });&lt;/script&gt;  &lt;span data-menuitem=\&quot;fondamentaux\&quot;&gt;&lt;/span&gt;  "
});

documentTitles["fondamentaux-tech.html#1-donner-un-titre-aux-pages"] = "1. Donner un titre aux pages";
index.add({
    url: "fondamentaux-tech.html#1-donner-un-titre-aux-pages",
    title: "1. Donner un titre aux pages",    
    body: "## 1. Donner un titre aux pages    **Cible : ** tout le monde et en particulier, les personnes déficientes visuelles.   **Quand : ** dès la conception et pendant le développement.  **Description : **   Donner à chaque page un titre qui lui est spécifique et qui reflète son contenu ou sa fonction (balise `&lt;title&gt;`).   Le titre de la page est le premier élément lu par la synthèse vocale, il doit permettre d'identifier formellement la page sur laquelle on se trouve.  **À vérifier : ** - Bien qu'il n'y ait pas de règle, en général, on va de l'information la plus spécifique vers la moins spécifique (ex.: nom de la page courante - nom du site). Dans d'autres contextes d'utilisation pour lesquels l'utilisateur à de nombreuses applications ou sites ouverts en même temps, il vaut mieux aller de l'information la plus générale vers la plus spécifique (ex.: nom du site - nom de la page). - Lorsque le contenu de la page est modifié dynamiquement (affichage du résultat d'une recherche, erreurs dans un formulaire, action utilisateur ajoutant du contenu...), le titre de la page doit refléter cette modification du contenu.  **Objectif utilisateur : **   Permettre aux utilisateurs d'identifier le sujet d'une page, de se repérer et se faire une idée précise du contenu de la page sans avoir à le lire. C'est, notamment, le premier élément vocalisé par un lecteur d'écran.  **Exemple valide : **       `&lt;title&gt;Accueil - Espace client Orange&lt;/title&gt;`           **Exemple non-valide :**       `&lt;title&gt;Accueil&lt;/title&gt;`  **Référence : ** WCAG 2.4.2  "
});

documentTitles["fondamentaux-tech.html#2-donner-des-titres-aux-rubriques"] = "2. Donner des titres aux rubriques";
index.add({
    url: "fondamentaux-tech.html#2-donner-des-titres-aux-rubriques",
    title: "2. Donner des titres aux rubriques",    
    body: "## 2. Donner des titres aux rubriques  **Cible : ** tout le monde et en particulier, les personnes déficientes cognitives, avec des difficultés pour lire et déficientes visuelles.   **Quand : ** dès la conception, à la rédaction du contenu et pendant le développement.  **Description : **   Identifier les balises de titres à utiliser (balises HTML `h1` jusqu'à `h6`) pour structurer le contenu des pages. Les personnes malvoyantes naviguant à l'aide d'un lecteur d'écran peuvent accéder à la liste des titres de la page pour naviguer rapidement.  Tout comme dans un fichier Word, il est possible d'utiliser la table des matières si des titres ont correctement été positionnés à l'intérieur du document.   **À vérifier : **  - Les titres doivent être pertinents et non vides. - Il ne doit pas exister de saut dans la hiérarchie des titres (on ne passe pas directement d'un titre `h2` à un titre `h4`). - On peut mettre plusieurs `h1` par page (se limiter tout de même à deux dans la majorité des cas). - Les lecteurs d'écran ne prennent pas en compte les titres masqués (`visibility: hidden;`, `display: none;` ou `aria-hidden`). - Le contenu généré dynamiquement doit aussi respecter cette exigence.  **Objectif utilisateur : ** - Pour tous les utilisateurs : améliorer la structure de la page et de son contenu.  - Pour les utilisateurs déficients visuels, déficients cognitifs et difficultés de lecture : faciliter la navigation et l'accés au contenu.  **Objectif technique : ** - Pour les moteurs de recherche : améliorer le référencement.  **Exemple valide : **        Un titrage de page cohérent et pertinent :  `&lt;h1&gt;Accueil - Orange&lt;/h1&gt;`  `&lt;h2&gt;Les actualités&lt;/h2&gt;`  `&lt;h2&gt;La fibre arrive !&lt;/h2&gt;`  `&lt;h3&gt;Êtes-vous éligible ?&lt;/h3&gt;`   **Exemple non-valide : **       Un titrage de page avec un saut de niveau h2-&gt;h4 :  `&lt;h1&gt;Accueil - Orange&lt;/h1&gt;`  `&lt;h2&gt;Les actualités&lt;/h2&gt;`  `&lt;h2&gt;La fibre arrive !&lt;/h2&gt;`  `&lt;h4&gt;Êtes-vous éligible ?&lt;/h4&gt;`       **Référence :** WCAG 1.3.1  "
});

documentTitles["fondamentaux-tech.html#3-assurer-un-contraste-suffisant-entre-texte-et-fond"] = "3. Assurer un contraste suffisant entre texte et fond";
index.add({
    url: "fondamentaux-tech.html#3-assurer-un-contraste-suffisant-entre-texte-et-fond",
    title: "3. Assurer un contraste suffisant entre texte et fond",    
    body: "## 3. Assurer un contraste suffisant entre texte et fond  **Cible : ** tout le monde, en particulier, les utilisateurs sur mobile et tablette, les personnes malvoyantes, éprouvant des difficultés de lecture ou avec un déficit d'attention et les seniors.    **Quand : ** dès la phase de conception et lors du développement.  **Description : **   Le niveau de contraste entre le texte et l'arrière-plan, doit être suffisamment élevé. Un niveau de contraste insuffisant sera préjudiciable pour les utilisateurs ayant des difficultés visuelles ainsi que pour les utilisateurs de mobiles et tablettes se trouvant dans un environnement très lumineux.  **Exemple non valide : **   Le texte \&quot;film | 20h40 ...\&quot; ne présente pas un contraste suffisant. Celui-ci ne sera pas lisible par tous les utilisateurs.    ![capture d'écran présentant du texte dont le contraste n'est pas suffisant](images/contraste.png)  **À vérifier : **  - Le contraste entre la couleur du fond et celle du texte doit être 4.5:1 minimum et ceci également pour du texte sous forme d'image porteur d'information. - Pour des applications principalement utilisées en web mobile ou en mobilité, le niveau de contraste des principaux éléments doit être de 7:1 afin d'assurer une bonne lisibilité pour tous. - Les liens doivent être facilement identifiables par rapport au reste du texte.  **Objectif utilisateur : **  Faciliter la lecture à tous les utilisateurs, déficients visuels ou personne dans un environnement lumineux défavorable (en mobilité).  **Outil : **   L'application [colour contrast analyser](http://www.paciellogroup.com/resources/contrastanalyser/) permet de mesurer rapidement des niveaux de contraste de couleurs (gratuit pour mac et windows).    **Référence :** WCAG 1.4.3  "
});

documentTitles["fondamentaux-tech.html#4-ne-pas-utiliser-la-couleur-ou-linformation-sensorielle-comme-seule-source-dinformation"] = "4. Ne pas utiliser la couleur ou l'information sensorielle comme seule source d'information";
index.add({
    url: "fondamentaux-tech.html#4-ne-pas-utiliser-la-couleur-ou-linformation-sensorielle-comme-seule-source-dinformation",
    title: "4. Ne pas utiliser la couleur ou l'information sensorielle comme seule source d'information",    
    body: "## 4. Ne pas utiliser la couleur ou l'information sensorielle comme seule source d'information  **Cible : ** tout le monde, en particulier, les daltoniens et plus généralement les personnes malvoyantes ou ayant une déficience cognitive, auditive et les seniors.   **Quand : ** dès la phase de conception et lors du développement.  **Description : **   Ne pas utiliser la couleur ou une information sensorielle (forme, taille, son, orientation, localisation visuelle...) comme la seule façon de véhiculer de l'information, d'indiquer une action, de solliciter une réponse ou de distinguer un élément. L'information fournie par un changement de couleur ou une information sensorielle doit être complétée par une information textuelle (alternative) ou/et structuration sémantique.  **À vérifier : ** - Faire une capture d'écran et passer la en noir et blanc. La perte des couleurs ne doit pas entraîner de difficulté dans la navigation, ni provoquer de perte d'information. - Couper le son, le niveau d'information doit rester identique.   **Objectif utilisateur : **  Permettre aux utilisateurs ne distinguant pas les couleurs ou l'information sensorielle (les daltoniens, déficients visuels, déficients auditifs, utilisateurs de mobile en luminosité extérieure, en milieu bruyant... ), d'accéder tout de même à l'information par d'autres moyens.  **Exemple :**       Pour un graphique type camembert, où chaque partie est colorée différemment, ajouter par exemple une texture différente pour les identifier sans la couleur.   **Exemple valide :**   ![Exemple d'image valide n'utilisant pas que la couleur pour transmettre l'information](./images/couleur-ok.png)  **Exemple non-valide :**   ![Exemple non-valide utilisant uniquement des voyants de couleur pour transmettre l'information](./images/couleur-ko.png)  Cet exemple n'est pas valide, car l'information est transmise uniquement par la couleur.  **Référence :** WCAG 1.4.1  "
});

documentTitles["fondamentaux-tech.html#5-mettre-en-place-des-listes"] = "5. Mettre en place des listes";
index.add({
    url: "fondamentaux-tech.html#5-mettre-en-place-des-listes",
    title: "5. Mettre en place des listes",    
    body: "## 5. Mettre en place des listes  **Cible : ** tout le monde et en particulier, les personnes déficientes visuelles, avec des déficiences cognitives.   **Quand : ** dès la conception et à la rédaction du contenu.  **Description : **   La page, si besoin, doit posséder des listes sémantiquement pertinentes.  Sémantiser le contenu HTML en utilisant les balises :  - `ol` pour les listes ordonnées  - `ul` pour les listes non ordonnées  - `li` pour les éléments de liste  **À vérifier : **  - Il ne doit pas y avoir de liste vide. - Il ne doit pas y avoir de liste avec un seul élément (car ce n'est pas une liste, à moins que cette liste ne soit générée dynamiquement !).  ** Objectif utilisateur : **  Utiliser des listes permet d'identifier, regrouper et présenter séquentiellement des éléments de même nature.  **Objectif technique : **   Oblige à la structuration cohérente du contenu par le créateur du site.  **Référence : ** WCAG 1.3.1  "
});

documentTitles["fondamentaux-tech.html#6-separer-le-contenu-de-linteractivite-et-de-la-presentation"] = "6. Séparer le contenu, de l'interactivité et de la présentation";
index.add({
    url: "fondamentaux-tech.html#6-separer-le-contenu-de-linteractivite-et-de-la-presentation",
    title: "6. Séparer le contenu, de l'interactivité et de la présentation",    
    body: "## 6. Séparer le contenu, de l'interactivité et de la présentation  **Cible : ** tout le monde et en particulier, les personnes déficientes visuelles, avec des difficultés pour lire ou avec un déficit d'attention.   **Quand : ** lors du développement.  **Description : **  Séparer strictement le contenu (HTML), l'interactivité (Javascript) et la présentation (CSS).   **À vérifier : **  - Ne pas faire de mise en pages en tableaux, ceux-ci étant réservés aux données tabulaires.  - Éviter d'utiliser des images pour afficher du texte, préférer les habillages CSS. - Utiliser des classes CSS plutôt que manipuler des styles CSS en ligne dans le code HTML. - Ne pas utiliser les pseudo éléments CSS (::before, ::after...) pour afficher du contenu porteur d'information - Ne pas câbler des évènements Javascript directement dans le code HTML mais gérer l'interactivité dans un script ou un fichier JS à part.  **Objectif utilisateur : **  Permettre aux utilisateurs, via leur agent utilisateur ou aide technique (par exemple, leur navigateur) de modifier le rendu visuel de la page (grossissement, couleur, position...). Par exemple, de grossir le texte sans problème de mise en pages.  **Objectif technique : **  Améliore globalement la maintenabilité.  **Référence :** WCAG 1.3.1, 1.4.5  "
});

documentTitles["fondamentaux-tech.html#7-valider-le-code"] = "7. Valider le code";
index.add({
    url: "fondamentaux-tech.html#7-valider-le-code",
    title: "7. Valider le code",    
    body: "## 7. Valider le code  **Cible : ** tout le monde.   **Quand : ** pendant et à la fin du développement.  **Description : **    Le code source de la page doit être valide au niveau HTML.  **À vérifier : **  Dans le code HTML s'assurer que : - les éléments ont des balises de début et de fin - les éléments sont imbriqués conformément à leurs spécifications  - les éléments ne contiennent pas d'attributs dupliqués - chaque ID est unique  **Objectif utilisateur : **   Des erreurs de validation peuvent empêcher l'accès à certains contenus.   **Objectif technique : **   - Assurer l'interopérabilité, la maintenabilité du code HTML. - Accroître la compatibilité avec les aides techniques.  **Référence :** WCAG 4.1.1    **Outil : ** [validateur HTML et CSS du W3c](https://validator.w3.org/)  "
});

documentTitles["fondamentaux-tech.html#8-indiquer-la-langue-principale-et-les-changements-de-langue"] = "8. Indiquer la langue principale et les changements de langue";
index.add({
    url: "fondamentaux-tech.html#8-indiquer-la-langue-principale-et-les-changements-de-langue",
    title: "8. Indiquer la langue principale et les changements de langue",    
    body: "## 8. Indiquer la langue principale et les changements de langue  **Cible : ** pour tous et en particulier, les personnes déficientes visuelles.   **Quand : ** lors du le développement.  **Description : **    Spécifier la langue principale du document grâce à l'attribut `lang` et/ou `xml:lang` dans la balise `html`.  Préciser également la langue d'un contenu exprimé dans une langue autre que la langue principale, en utilisant l'attribut `lang` et/ou `xml:lang` dans l'élément html contenant l'expression en langue étrangère.    **À vérifier : **  Pour les mots ou les expressions en langue étrangère passés dans l'usage courant (Google, newsletter...) ou les noms propres, ne pas indiquer de changement de langue.  **Objectif utilisateur : **  Cet attribut permet d'indiquer à la synthèse vocale la langue à utiliser.  **Objectif technique : **   Permettre aux moteurs de recherche d'identifier la langue d'une page pour améliorer le référencement naturel.    **Exemple pour une page en français :**    - pour du HTML : `&lt;html lang=\&quot;fr\&quot;&gt;` - pour du XHTML : `&lt;html xmlns=\&quot;http://www.w3.org/1999/xhtml\&quot; xml:lang=\&quot;fr\&quot; lang=\&quot;fr\&quot;&gt;`  **Exemple de changement de langue : **   `découvrir Orange &lt;span lang=\&quot;fr\&quot;&gt;live&lt;/span&gt; TV`  **Référence : **WCAG 3.1.1, 3.1.2  "
});

documentTitles["fondamentaux-tech.html#9-associer-une-etiquette-pertinente-a-chaque-champ-de-formulaire"] = "9. Associer une étiquette pertinente à chaque champ de formulaire";
index.add({
    url: "fondamentaux-tech.html#9-associer-une-etiquette-pertinente-a-chaque-champ-de-formulaire",
    title: "9. Associer une étiquette pertinente à chaque champ de formulaire",    
    body: "## 9. Associer une étiquette pertinente à chaque champ de formulaire  **Cible : ** tout le monde et en particulier, les personnes déficientes visuelles et cognitives, avec un déficit d'attention et les utilisateurs de tactiles (mobile et tablette).   **Quand : ** lors de la conception et lors du développement.  **Description : **    Chaque champ de formulaire doit être accompagné d'un libellé permettant d'identifier le rôle du champ, le type de donnée et le format attendu.   Le libéllé doit être proche visuellement du champ afin qu'on fasse facilement le lien entre eux (notamment pour les utilisateur de zoom ou de loupe logicielle, voire sur mobile).  Chaque libellé doit être inclus dans une balise `label`, elle-même associée au champ de formulaire grâce à un  attribut `for` renseigné, reprenant la valeur de l'`id` du champ.  Dans certains cas, il semble inutile d'accompagner le champ de formulaire d'un libellé (champ de recherche accompagné d'un bouton en forme de loupe par exemple). Dans ce cas, prévoir tout de même un libellé, l'associé au champ de formulaire et le rendre invisible à l'écran (utiliser une classe de &lt;a href=\&quot;./exemples/masquage/index.html\&quot;&gt;masquage accessible&lt;/a&gt;), ainsi celui-ci sera quand même vocalisé par les lecteurs d'écran. L'attribut `title` positionné sur une balise de champ de formulaire peut faire également office de label tout comme les attributs `aria-label` et `aria-labelledby` dans cette ordre de préférence.  **À vérifier : **  Pour tout élement de formulaire, le libellé est proche visuellement du champ qu'il identifie.  Pour les boutons radio et les cases à cocher, l'utilisation de la balise `label` est, parfois, à compléter par un autre dispositif (`title`, `aria-labelledby`, `aria-label` ou `fieldset` et `legend`). Pour les champs obligatoires, ceci doit être précisé dans le label via une image, un symbole texte (`*` par exemple) ou du texte et/ou une propriété `aria-required`.  **Objectif utilisateur : **  Ne pas respecter cette exigence est un point bloquant pour tout utilisateur de synthèse vocale mais aussi loupe logicielle car ceci ne savent pas entrer comme valeur dans les champs. Pour les utilisateurs de mobile et les déficients moteurs cela permet d'activer ou cliquer plus facilement sur les éléments de formulaire.  **Exemple valide : **   ![capture d'écran d'un formulaire valide](images/formulaire.png)    &amp;nbsp;  **Exemple non-valide : **   ![capture d'écran d'un formulaire auquel il manque un label](images/formulaire2.png)  &amp;nbsp;   **Exemple de formulaire accessible : **    Consulter [l'exemple de formulaire accessible](./exemples/formulaire/index.html) pour plus d'informations.  **Référence : **WCAG 3.3.2  "
});

documentTitles["fondamentaux-tech.html#10-detecter-identifier-les-erreurs-et-suggerer-des-corrections"] = "10. Détecter, identifier les erreurs et suggérer des corrections";
index.add({
    url: "fondamentaux-tech.html#10-detecter-identifier-les-erreurs-et-suggerer-des-corrections",
    title: "10. Détecter, identifier les erreurs et suggérer des corrections",    
    body: "## 10. Détecter, identifier les erreurs et suggérer des corrections  **Cible : ** tout le monde et en particulier, les personnes déficientes visuelles, cognitives, avec des difficultés pour lire ou ayant un déficit d'attention et les seniors.   **Quand : ** lors de la conception et lors du développement.  **Description : **   Les erreurs sont automatiquement détectées, l'utilisateur est averti par la modification du titre de la page, l'élément de formulaire en erreur est identifié et l'erreur est décrite à l'utilisateur sous forme de texte. Si besoin, une correction est suggérée.  Enfin les libellés des messages d'erreur doivent être explicites.  **À vérifier : **  L'identification du champ en erreur ainsi qu'une éventuelle suggestion de correction peuvent être ajoutées dynamiquement à la balise `label`, en priorité, mais aussi à l'attribut `title` ou les attributs `aria-label` et `aria-labelledby` selon le contexte et les besoins.  **Objectif utilisateur : **  Guider l'utilisateur en cas d'erreurs permet d'améliorer la compréhension et la correction des erreurs, pour tous les utilisateurs, en particulier, pour les novices sur internet, les seniors et les personnes déficientes cognitives.  **Exemple valide : **   ![capture d'écran d'un formulaire affichant des messages d'erreur à la saisie valides](images/formulaire-ok.png)    **Exemple non-valide : **   ![capture d'écran d'un formulaire affichant des messages d'erreur à la saisie non-valides](images/formulaire-ko.png)  &amp;nbsp;   **Exemple de formulaire accessible : **    Consulter [l'exemple de formulaire accessible](./exemples/formulaire/index.html) pour plus d'informations.  **Référence : **WCAG 3.3.1, 3.3.3  "
});

documentTitles["fondamentaux-tech.html#11-fournir-un-equivalent-textuel-pour-les-images"] = "11. Fournir un équivalent textuel pour les images";
index.add({
    url: "fondamentaux-tech.html#11-fournir-un-equivalent-textuel-pour-les-images",
    title: "11. Fournir un équivalent textuel pour les images",    
    body: "## 11. Fournir un équivalent textuel pour les images  **Cible : ** tout le monde et en particulier, les personnes déficientes visuelles ou cognitives.   **Quand : ** lors de la conception et lors du développement.  **Description : **   Mettre, dans toute balise `img`, un attribut `alt` pertinent :  - Pour les images cliquables : préciser la fonction / la cible du lien dans l’attribut `alt`, - Pour les images porteuses d'information : mettre un `alt` décrivant l'information contenue dans l'image - Pour les images contenant du texte : mettre un attribut `alt` reprenant au moins le texte de l’image, - Pour les images décoratives : mettre un attribut `alt` vide, - Pour les images dont le contenu du `alt` serait trop long (schémas, graphes...), mettre à proximité de l'image à décrire, sa description sous forme de texte dans la page ou, un lien pointant vers une page html contenant cette description.  **À vérifier : **  Toute balise `img` doit posséder un attribut `alt`. Pour les images non-porteuses d'information, il est préférable de les passer en image de fond CSS. Pour les graphes, la solution, peut être, de mettre un lien sous l'image permettant d'accéder à un tableau de chiffre (le faire apparaître dans la même page ou sur une autre page).  **Objectif utilisateur : ** Permettre l'accès à l'information incluse dans une image pour des utilisateurs qui n'y ont pas accès. Point bloquant : une image sans description textuelle est inexploitable par des personnes ayant des déficiences visuelles ou celles n'affichant pas les images (mobile, faible bande passante...).  **Objectif technique : **  Améliorer le référencement naturel.  **Exemple valide :**       `&lt;a href=\&quot;./home\&quot;&gt;&lt;img src=\&quot;logo_orange.jpg\&quot; alt=\&quot;Retour à l'accueil\&quot;&gt;&lt;/a&gt;`         `&lt;img src=\&quot;banner_bouquet_famille.png\&quot; alt=\&quot;Bon plan, bouquet famille max à 2 euros par mois pendant 12 mois au lieu de 16 euros.\&quot;&gt;`  **Exemple d'alternative vide :**   Dans l'exemple ci-dessous, le picto à droite n'a pas besoin d'être vocalisé puisque le texte situé à gauche apporte déjà l'information.   Renseigner l'attribut `alt` dans ce cas apporterait une information redondante.    ![exemple d'image décorative](./images/service-24.png)      `&lt;h3&gt;Le service 24h garanti&lt;/h3&gt;`   `&lt;img src=\&quot;service-24.png\&quot; alt=\&quot;\&quot;&gt;`  **Référence : **WCAG 1.1.1  "
});

documentTitles["fondamentaux-tech.html#12-fournir-un-transcrit-pour-toute-piste-audio-ou-video"] = "12. Fournir un transcrit pour toute piste audio ou vidéo";
index.add({
    url: "fondamentaux-tech.html#12-fournir-un-transcrit-pour-toute-piste-audio-ou-video",
    title: "12. Fournir un transcrit pour toute piste audio ou vidéo",    
    body: "## 12. Fournir un transcrit pour toute piste audio ou vidéo  **Cible : ** tout le monde et en particulier, les personnes déficientes visuelles, cognitives et auditives et celle dont le Français est mal maîtrisé.   **Quand : ** lors de la conception et lors du développement.  **Description : **   Fournir, pour toute piste audio ou vidéo porteuse d'information, un transcrit complet dans la page elle-même ou grâce à un lien à proximité de celle-ci.  **À vérifier : **  Un transcrit complet est le texte contenant l'ensemble des informations visuelles et auditives porteuses de sens.   **Objectif utilisateur : **  Fournir un moyen d'accès à l'information visuelle et auditive pour des personnes ne pouvant pas en bénéficier : malvoyants, aveugles, sourds, déficients cognitifs, ordinateur sans haut-parleurs, environnement lumineux ou bruyant.  **Objectif technique : **  Permet le référencement de tout contenu audio et vidéo.  **Référence : **WCAG 1.2.3  "
});

documentTitles["fondamentaux-tech.html#13-structurer-les-tableaux-de-donnees"] = "13. Structurer les tableaux de données";
index.add({
    url: "fondamentaux-tech.html#13-structurer-les-tableaux-de-donnees",
    title: "13. Structurer les tableaux de données",    
    body: "## 13. Structurer les tableaux de données  **Cible : ** tout le monde et en particulier, les personnes déficientes visuelles.   **Quand : ** dès la phase de conception et lors du développement.  **Description : **  Pour des données tabulaires : - utiliser l'élément `table` avec les éléments enfants `th` (pour les cellules d'entêtes), `td`, `tr`. - utiliser l'attribut `scope` avec la valeur row/col pour associer les cellules d'en-têtes et les cellules de données ou pour des tableaux complexes, utiliser les attributs `id` et `headers`. - utiliser la balise `caption`, une balise `h1` à `h6` juste avant le tableau ou lier un texte proche du tableau via un `aria-labelledby` dans l'élément `table` pour associer un titre au tableau. - mettre un attribut `summary` dans l'élément `table` pour expliciter la structure dans le cas d'un tableau complexe. Attention cet attribut est déprécié en HTML5, il faudra donc rajouter, si besoin, le contenu du `summary` dans le titre du tableau.  **À vérifier : **  - Rappel : ne pas utiliser de tableaux à des fins de mise en pages.  - La légende (`caption`) peut être remplacé par un titre de section (`hx`) placé avant le tableau. `summary`, quant à lui, n'est nécessaire que pour des tableaux complexes. - Préférer scinder un tableau complexe en plusieurs tableaux plus simples. - Mettre un résumé (attribut `summary`) dans le tableau pour expliciter la structure dans le cas d'un tableau complexe. - Les balises `tbody`, `tfoot` et `thead` n'ont aucune influence sur l'accessibilité, il n'est donc pas d'obligation à les utiliser.  **Objectif utilisateur : ** Donner un résumé et un titre aux tableaux de données permet à tous d'en connaître l'objet rapidement sans avoir à le parcourir. Pour des utilisateurs déficients visuels, lier les cellules aux en-têtes permet de se situer dans le tableau et de comprendre les données de celui-ci.  **Objectif technique : ** Optimiser le référencement naturel.  **Référence :** WCAG 1.3.1  "
});

documentTitles["fondamentaux-tech.html#14-utiliser-des-tailles-relatives-pour-permettre-le-grossissement-des-textes"] = "14. Utiliser des tailles relatives pour permettre le grossissement des textes";
index.add({
    url: "fondamentaux-tech.html#14-utiliser-des-tailles-relatives-pour-permettre-le-grossissement-des-textes",
    title: "14. Utiliser des tailles relatives pour permettre le grossissement des textes",    
    body: "## 14. Utiliser des tailles relatives pour permettre le grossissement des textes  **Cible : ** tout le monde et en particulier, les personnes déficientes visuelles, en mobilité et seniors.   **Quand : ** lors du développement.  **Description : **  N'utiliser pour les tailles de police que des tailles relatives (em, rem, %) et pour les éléments conteneurs permettant l'agrandissement du texte seul de 200%.  **À vérifier : ** - Ne pas utiliser le pixel (px) pour des tailles qui doivent pouvoir s'agrandir si l'on ne zoome que les textes. - Les éléments de formulaire doivent, eux aussi, posséder des tailles relatives pour s'agrandir. - Penser à rendre fluides les conteneurs des textes afin qu'ils puissent s'agrandir lorsque les textes sont zoomés. - Dans Firefox, faire Affichage&gt;Zoom&gt;Zoom texte seulement, utiliser les réglages du zoom pour atteindre 200%. Vérifier qu'il n'y a pas de perte d'information (disparition ou chevauchement de texte).     ![capture d'écran réglage du zoom dans Firefox](./images/zoom-200.png)  **Objectif utilisateur : ** Permettre aux utilisateurs (malvoyants, en mobilité, seniors...) d'augmenter la taille du texte pour plus aisément accéder à l'information.  **Exemple :**   Voir l'exemple [gestion du zoom, agrandissement de la taille du texte](./exemples/zoom/index.html) pour plus d'informations.  **Référence :** WCAG 1.4.4  "
});

documentTitles["fondamentaux-tech.html#15-rendre-lintitule-dun-lien-comprehensible-hors-contexte"] = "15. Rendre l'intitulé d'un lien compréhensible hors contexte";
index.add({
    url: "fondamentaux-tech.html#15-rendre-lintitule-dun-lien-comprehensible-hors-contexte",
    title: "15. Rendre l'intitulé d'un lien compréhensible hors contexte",    
    body: "## 15. Rendre l'intitulé d'un lien compréhensible hors contexte  **Cible : ** tout le monde et en particulier, les personnes déficientes visuelles, cognitives ou ayant un déficit d'attention.   **Quand : ** dès la phase de conception et lors du développement.  **Description : **  Rendre compréhensible les intitulés des liens hors contexte pour tous les utilisateurs et, en particulier, les déficients visuels. Lors de la navigation avec un lecteur d'écran, il est possible d'accéder à la liste des liens de la page pour naviguer rapidement. Si votre page contient plusieurs liens \&quot;en savoir plus\&quot;, il sera impossible de les différencier les uns des autres.    S'il n'est pas possible de rendre un lien plus explicite, faute de place, mais que l'intitulé du lien actuel est suffisant pour les personnes qui ont accès à l'écran, le texte du lien peut être complété par un contenu supplétif caché ou en utilisant un `aria-label` ou `aria-labelledby`, spécifiquement pour les utilisateurs qui naviguent à l'aide d'un lecteur d'écran. Par exemple dans l'image ci-dessous, les deux liens \&quot;valider\&quot; ne sont pas suffisamment explicites pour une personne déficiente visuelle. Par contre quand on voit l'écran, la disposition fait qu'il n'y a pas d'ambiguïté sur le rôle de chaque bouton.  ![capture d'écran présentant deux liens valider dont le libellé doit être explicité](./images/liens-valider.png)  Dans ce cas, ajouter un `span` en &lt;a href=\&quot;./exemples/masquage/index.html\&quot;&gt;masquage accessible&lt;/a&gt; pour compléter l'intitulé du lien. Celui-ci ne sera pas affiché à l'écran, mais sera vocalisé par les outils d'assistance.  **Exemple :**   `&lt;a href=\&quot;...\&quot;&gt;valider&lt;span class=\&quot;masquage-accessible\&quot;&gt; le paiement en plusieurs fois&lt;/span&gt;&lt;/a&gt;`   `&lt;a href=\&quot;...\&quot;&gt;valider&lt;span class=\&quot;masquage-accessible\&quot;&gt; le paiement en une seule fois&lt;/span&gt;&lt;/a&gt;`  Une autre solution consiste à utiliser un attribut `aria-label` ou `aria-labelledby` pour préciser l'intitulé du lien.   En complément de ces solutions, on pourrait ici également utiliser ** un attribut `title` ** pour faire apparaître une info-bulle \&quot;valider le paiement en plusieurs fois\&quot; au survol du lien avec la souris.   **À vérifier : ** S'assurer que les liens isolés du contenu donnent une bonne information sur l'action déclenchée ou sa destination. Une page ne doit pas avoir plusieurs liens dont l'intitulé est le même, mais pointant sur des destinations/actions différentes.  **Objectif utilisateur : ** Permettre à un utilisateur n'ayant pas accès au contexte visuel de connaître la destination du lien. Notamment important pour les utilisateurs naviguant grâce à une liste de liens extraite de la page (lecteurs d'écran) ou les utilisateurs de loupe logicielle qui ne voient qu'une fraction de la page.   **Objectif technique : ** Expliciter les liens permet d'améliorer le référencement naturel.  **Exemple valide :**       Associer à un lien \&quot;cliquer ici\&quot;, un texte caché hors écran : \&quot;commander votre téléphone\&quot;.   **Exemple non-valide :**       Liens \&quot;Cliquez ici\&quot; ou \&quot;Lire la suite...\&quot; sans plus de précision.  **Référence :** WCAG 2.4.9  "
});

documentTitles["fondamentaux-tech.html#16-prevenir-lutilisateur-de-louverture-dune-nouvelle-fenetre"] = "16. Prévenir l'utilisateur de l'ouverture d'une nouvelle fenêtre";
index.add({
    url: "fondamentaux-tech.html#16-prevenir-lutilisateur-de-louverture-dune-nouvelle-fenetre",
    title: "16. Prévenir l'utilisateur de l'ouverture d'une nouvelle fenêtre",    
    body: "## 16. Prévenir l'utilisateur de l'ouverture d'une nouvelle fenêtre  **Cible : ** tout le monde et en particulier, les personnes déficientes visuelles, cognitives ou ayant un déficit d'attention.   **Quand : ** dès la phase de conception et lors du développement.  **Description :**  Prévenir l'utilisateur de l'ouverture de toute nouvelle fenêtre en l'indiquant dans l'intitulé du lien.  En cas d'impossibilité avérée, utiliser  un icône (image avec un `alt`) en ajoutant l'indication d'ouverture d'une nouvelle fenêtre ou juste 'nouvelle fenêtre'.   En dernier recours, un texte  en &lt;a href=\&quot;./exemples/masquage/index.html\&quot;&gt;masquage accessible&lt;/a&gt; (hors écran).  **Exemple : **      Exemple d'icône pouvant indiquer l'ouverture d'une nouvelle fenêtre.   ![capture d'écran d'un lien accompagné d'une icône indiquant l'ouverture d'une nouvelle fenêtre](./images/nouvelle-fenetre.png)    **À vérifier : ** Pour tout lien ouvrant une nouvelle fenêtre ou un nouvel onglet, une mention du type \&quot;(nouvelle fenêtre)\&quot; est présente dans l'intitulé du lien, ou la mention (nouvelle fenêtre) est positionnée hors écran via CSS (&lt;a href=\&quot;./exemples/masquage/index.html\&quot;&gt;masquage accessible&lt;/a&gt;).  **Objectif utilisateur : ** Éviter l'ouverture inattendue de fenêtre, car cela peut gêner, perturber ou désorienter l'utilisateur. En particulier, pour des personnes en mobilité, utilisant des synthèses vocales ou présentant des déficiences cognitives.  **Exemple valide :**       Pour un lien pointant à l'extérieur du site et ouvrant une nouvelle fenêtre, l'intitulé du lien texte \&quot;Accéder au site orange.com (nouvelle fenêtre)\&quot;, pour une image-lien avec un alt=\&quot;consulter les CGU (nouvelle fenêtre)\&quot;.       **Référence :** WCAG 3.2.2  "
});

documentTitles["fondamentaux-tech.html#17-permettre-dutiliser-les-principales-fonctionnalites-de-lapplication-au-clavier"] = "17. Permettre d'utiliser les principales fonctionnalités de l'application au clavier";
index.add({
    url: "fondamentaux-tech.html#17-permettre-dutiliser-les-principales-fonctionnalites-de-lapplication-au-clavier",
    title: "17. Permettre d'utiliser les principales fonctionnalités de l'application au clavier",    
    body: "## 17. Permettre d'utiliser les principales fonctionnalités de l'application au clavier  **Cible : ** tout le monde et en particulier, les personnes déficientes visuelles, motrices et en mobilité.   **Quand : ** dès la phase de conception et lors du développement.  **Description : ** Mettre en place des gestionnaires d'événements qui ne s'appuient pas uniquement sur des événements souris.   **À vérifier : ** Toutes les actions importantes effectuées à la souris peuvent aussi l'être qu'avec le clavier, quitte à proposer une alternative spécifique pour les interactions complexes (drag'ndrop, gestes à plusieurs doigts sur mobile ...).  **Objectif utilisateur : **  Permettre aux utilisateurs qui ne peuvent pas utiliser la souris (non ou malvoyants, déficients moteurs, web mobile, en mobilité...) d'accéder aux fonctionnalités principales de l'application au clavier.  **Exemple valide :**       - Un sous-menu qui se déroule au survol doit aussi se dérouler quand l'item de menu parent reçoit le focus clavier. - Dans un webmail, un clic droit permet d'accéder à un menu pour vider la corbeille, un bouton \&quot;vider la corbeille\&quot; est également présent dans l'interface quand la corbeille est en cours de consultation.    **Exemple non-valide :**       Une fonctionnalité réalisable qu'à l'aide du drag'n drop et sans équivalent au clavier.  **Référence :** WCAG 2.1.1  "
});

documentTitles["fondamentaux-tech.html#18-rendre-le-parcours-du-focus-sequentiel-et-logique-sans-piege-clavier"] = "18. Rendre le parcours du focus séquentiel et logique sans piège clavier";
index.add({
    url: "fondamentaux-tech.html#18-rendre-le-parcours-du-focus-sequentiel-et-logique-sans-piege-clavier",
    title: "18. Rendre le parcours du focus séquentiel et logique sans piège clavier",    
    body: "## 18. Rendre le parcours du focus séquentiel et logique sans piège clavier  **Cible : ** tout le monde et en particulier, les personnes déficientes visuelles, motrices, cognitives et en mobilité.   **Quand : ** lors du développement.  **Description : **  Les éléments (liens, boutons, éléments de formulaire) doivent recevoir le focus dans un ordre logique pour l'utilisateur, sans que celui-ci ne reste piégé ou bloqué, même pour du contenu généré dynamiquement apparaissant ou disparaissant (modification du DOM, Ajax,...).   **À vérifier : ** - Pour valider cette exigence, la position du focus doit être visible à tous moments (propriété `outline` et `:focus` en CSS), voir exigence 19, ci-dessous. - Attention à l'ordre d'insertion des éléments dans le code HTML, cela a une influence sur l'ordre de déplacement du focus. Un élément présent à la fin du code source, mais positionné tout en haut de la page via CSS sera le dernier à recevoir le focus.  - Pour la maintenabilité, éviter l'utilisation de l'attribut `tabindex` avec des valeurs supérieur à 0.  **Objectif utilisateur : ** Permettre la navigation logique sans piège au clavier dans les pages de l'application. Nécessaire pour les utilisateurs naviguant qu'au clavier (non ou malvoyants, déficients moteurs, déficients cognitifs, en mobilité).  **Exemple non-valide :**       Une page contenant un lecteur vidéo dont le focus peut entrer à l'intérieur du lecteur, mais ne peut pas en sortir (piège clavier).           **Référence :** WCAG 2.4.3, 2.1.2  "
});

documentTitles["fondamentaux-tech.html#19-rendre-visible-le-focus-en-toute-circonstance"] = "19. Rendre visible le focus en toute circonstance";
index.add({
    url: "fondamentaux-tech.html#19-rendre-visible-le-focus-en-toute-circonstance",
    title: "19. Rendre visible le focus en toute circonstance",    
    body: "## 19. Rendre visible le focus en toute circonstance  **Cible : ** tout le monde et en particulier, les personnes déficientes visuelles, motrices, cognitives, ayant un déficit d'attention et en mobilité.   **Quand : ** dès la phase de conception et lors du développement.  **Description : **  Ne pas masquer le focus et si nécessaire le rendre suffisamment visible (par exemple, en modifiant la propriété CSS `outline`) sur tous les éléments susceptibles de recevoir celui-ci (liens, boutons, éléments de formulaire). Vous pouvez meêm amplifier la visibilité du focus afin qu'il soit plus facilement identifiable.  Lorsqu'un effet est visible sur un élément lors du survol de la souris (`:hover` en CSS par exemple), cet effet doit être également affiché à la prise du focus (`:focus`).   **À vérifier : ** Dans beaucoup de frameworks front ou dans les reset CSS, la propriété `outline` (qui permet de visualiser le focus) est désactivée (`outline: none;`), penser à la redéfinir et vérifier que le focus est visible sur tous les éléments le recevant.  **Objectif utilisateur : ** Permettre la visibilité du focus sur tous les éléments actifs, notamment pour les utilisateurs de clavier (déficients visuels, moteurs ou ceux ayant des déficiences d'attention et de mémorisation ou en mobilité).  **Exemple valide :**   Focus positionné sur le lien \&quot;HTC Desire 620\&quot;.    ![capture d'écran montrant un lien dont le focus est clairement visible](./images/focus-ok.png)     **Exemple non-valide :**   Focus positionné sur le lien \&quot;HTC Desire 620\&quot;.      ![capture d'écran montrant un lien dont le focus n'est pas suffisamment visible](./images/focus-ko.png)     **Référence :** WCAG 2.4.7  "
});

documentTitles["fondamentaux-tech.html#20-fournir-des-liens-devitement"] = "20. Fournir des liens d'évitement";
index.add({
    url: "fondamentaux-tech.html#20-fournir-des-liens-devitement",
    title: "20. Fournir des liens d'évitement",    
    body: "## 20. Fournir des liens d'évitement  **Cible : ** utile pour les utilisateurs de mobile et tablette, les personnes déficientes visuelles et les personnes souffrant de handicap moteur ou en mobilité.   **Quand : ** dès la phase de conception et lors du développement.  **Description : **  Mettre en place des liens d'accès direct (liens d'évitement) permettant d'accéder aux principales zones de la page (navigation, contenu, pied de page, recherche...) grâce à des liens internes vers des ancres (balises `&lt;a&gt;` ou tout élément HTML possédant un attribut `id`). En cas de **fortes contraintes,** ces liens peuvent être cachés et affichés uniquement lors de la navigation clavier.  **À vérifier : ** Lorsqu'un lien d'évitement est activé, vérifier que le focus est bien déplacé (il ne s'agit pas uniquement de faire défiler la page au bon endroit).  **Objectif utilisateur : ** Faciliter la navigation pour des utilisateurs naviguant au clavier, des utilisateurs malvoyants, utilisateurs de loupe logicielle ou de téléphone mobile.       **Exemple : **   Des liens d'évitement (\&quot;Aller à la navigation\&quot;, \&quot;Aller au contenu\&quot;) sont disponibles sur ce site. Pour les faire apparaître, placer le focus en haut de la page en cliquant sur la barre d'adresse de votre navigateur par exemple puis appuyer plusieurs fois sur la touche `TAB`.  ![capture d'écran du site orange.com](images/skiplink.png)     **Référence :** WCAG 2.4.1   "
});

documentTitles["fondamentaux-tech.html#21-animation"] = "21. Animation";
index.add({
    url: "fondamentaux-tech.html#21-animation",
    title: "21. Animation",    
    body: "## 21. Animation **Cible : ** les personnes malvoyantes, les personnes éprouvant des difficultés de lecture, d'attention ou de compréhension, les personnes épileptiques.   **Quand : ** lors de la conception du service et lors de la conception graphique.  **Description :**   Tout contenu en mouvement, mis à jour, clignotant doit pouvoir être stoppé, caché ou mis en pause par l'utilisateur.   Par ailleurs, éviter autant que possible les flashs lumineux et les changements brusques de luminosité (cf. [Le logo des JO provoque des crises d'épilepsie](http://www.leparisien.fr/societe/le-logo-des-jo-provoque-des-crises-d-epilepsie-09-06-2007-2008107333.php)). Il faut donc prévoir une pause au chargement de la page ou un moyen de stopper ou mettre en pause l'animation, la mise à jour ou le clignotement via un bouton par exemple.  **Exemple : **   ![capture d'écran d'un carrousel disposant d'un bouton pour mettre en pause l'animation](./images/carrousel.png)    Un carrousel qui défile automatiquement doit se mettre en pause au survol de la souris ou lorsque celui-ci a le focus.   Il est également possible d'ajouter un bouton \&quot;pause\&quot; directement dans l'interface.  **Référence :** WCAG 2.2.2  "
});

documentTitles["fondamentaux-tech.html#22-sassurer-que-les-principales-fonctionnalites-sont-utilisables-avec-les-lecteurs-decran"] = "22. S'assurer que les principales fonctionnalités sont utilisables avec les lecteurs d'écran";
index.add({
    url: "fondamentaux-tech.html#22-sassurer-que-les-principales-fonctionnalites-sont-utilisables-avec-les-lecteurs-decran",
    title: "22. S'assurer que les principales fonctionnalités sont utilisables avec les lecteurs d'écran",    
    body: "## 22. S'assurer que les principales fonctionnalités sont utilisables avec les lecteurs d'écran  **Cible : ** tout le monde et en particulier, les personnes déficientes visuelles.   **Quand : **lors du développement.  **Description : **  Respecter les recommandations générales d'accessibilité, utiliser en priorité les composants standards HTML, sinon, utiliser l'ARIA (Accessible Rich Internet Application) pour les composants d'interface complexes.   **À vérifier : ** S'assurer de l'absence de point bloquant avec les couples navigateur/lecteur d'écran (FireFox/NVDA, IE/Jaws, Safari/VoiceOver) dans les parcours utilisateurs (scénarios d'utilisation des principales fonctionnalités de l'application). En effet, les utilisateurs de lecteur d'écran sont les plus impactés par un manque d'accessibilité, on repère un grand nombre de problèmes en vérifiant cette exigence.  **Objectif utilisateur : ** Permettre à l'utilisateur de lecteur d'écran d'accéder aux principales fonctionnalités de l'application, mais aussi de s'assurer pour tous les utilisateurs de l'utilisabilité de l'application.  "
});

documentTitles["fondamentaux-tech.html#23-conserver-un-ordre-de-tabulation-logique-lors-dune-insertion-ou-dune-modification-dynamique"] = "23. Conserver un ordre de tabulation logique lors d'une insertion ou d'une modification dynamique";
index.add({
    url: "fondamentaux-tech.html#23-conserver-un-ordre-de-tabulation-logique-lors-dune-insertion-ou-dune-modification-dynamique",
    title: "23. Conserver un ordre de tabulation logique lors d'une insertion ou d'une modification dynamique",    
    body: "## 23. Conserver un ordre de tabulation logique lors d'une insertion ou d'une modification dynamique  **Cible : ** tout le monde et en particulier, les personnes déficientes visuelles, cognitives ou avec un déficit d'attention.   **Quand : **lors du développement.  **Description : ** Lorsqu'un élément est affiché suite à une interaction de l'utilisateur :  - celui-ci doit apparaître dans le code source juste après l'élément déclenchant (exemple : menu dépliant),  - ou le focus doit être déplacé sur un des premiers éléments du contenu généré (lien, bouton, titre, paragraphe...).       Lors de la disparition de contenu, le focus doit être redonné à l'élément déclenchant.   Par exemple à la fermeture d'une boite de dialogue, le focus doit être repositionné sur l'élément qui a déclenché l'ouverture (bouton, lien ...).  Pour rappel : le contenu dynamiquement généré doit être accessible et donc respecter tous les critères d'accessibilité.   Il existe plusieurs solutions pour prévenir l'utilisateur en cas d'apparition/disparition de contenu : - via du texte - en déplaçant le focus - en utilisant de l'ARIA  Voir [l'exemple de menu déroulant](./exemples/simple-menu/simple-menu.html) pour la mise en pratique de l'attribut `aria-haspopup`.  **À vérifier : ** - Le déplacement du focus s'effectue de manière logique (ordre de lecture naturel). - L'ordre de lecture n'a pas été redéfini en utilisant des attributs `tabindex` (avec des valeurs positives).    En pratique, l'attribut `tabindex` devrait être utilisé qu'avec deux valeurs : - `tabindex=\&quot;-1\&quot;` : pour interdire un élément à recevoir le focus via la touche `TAB` et autoriser celui-ci à recevoir le focus via Javascript. - `tabindex=\&quot;0\&quot;` : pour rendre un élément focusable via la touche `TAB` et via Javascript.  **Objectif utilisateur : ** Permettre à l'utilisateur, par exemple, un non ou malvoyant, de repérer l'apparition de nouveaux contenus et interagir avec ceux-ci.    **Référence :** WCAG 2.4.3  "
});

documentTitles["fondamentaux-tech.html#24-sassurer-que-lutilisateur-garde-le-controle-lors-des-interactions"] = "24. S'assurer que l'utilisateur garde le contrôle lors des interactions";
index.add({
    url: "fondamentaux-tech.html#24-sassurer-que-lutilisateur-garde-le-controle-lors-des-interactions",
    title: "24. S'assurer que l'utilisateur garde le contrôle lors des interactions",    
    body: "## 24. S'assurer que l'utilisateur garde le contrôle lors des interactions  **Cible : ** tout le monde et en particulier, les personnes déficientes visuelles, cognitives ou avec un déficit d'attention.   **Quand : ** dès la phase de conception et lors du développement.  **Description : ** Ne pas induire de changement de contexte lors de la prise de focus, la saisie de données ou l'activation d'un élément de formulaire sans que ce changement soit prévisible (bouton) ou que l'utilisateur ait été averti.   **Objectif utilisateur : ** Donner à tous les utilisateurs la maîtrise des changements de contexte lié à son action.  **Exemple :**     Un formulaire doit obligatoirement avoir un bouton d'envoi. Celui-ci ne doit pas être envoyé automatiquement après la saisie de l'utilisateur.  **Référence :** WCAG 3.2.1, 3.2.2 &lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2016  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt;"
});



documentTitles["fondamentaux-nontech.html#criteres-incontournables-pour-la-conception"] = "Critères incontournables pour la conception";
index.add({
    url: "fondamentaux-nontech.html#criteres-incontournables-pour-la-conception",
    title: "Critères incontournables pour la conception",    
    body: "# Critères incontournables pour la conception  &lt;script&gt;$(document).ready(function () {     setBreadcrumb([         {\&quot;label\&quot;:\&quot;Critères incontournables\&quot;, \&quot;url\&quot;: \&quot;./fondamentaux.html\&quot;},         {\&quot;label\&quot;:\&quot;Critères incontournables pour la conception\&quot;}]     );     addSubMenu(); });&lt;/script&gt;  &lt;span data-menuitem=\&quot;fondamentaux\&quot;&gt;&lt;/span&gt;   "
});

documentTitles["fondamentaux-nontech.html#1-donner-un-titre-aux-pages"] = "1. Donner un titre aux pages";
index.add({
    url: "fondamentaux-nontech.html#1-donner-un-titre-aux-pages",
    title: "1. Donner un titre aux pages",    
    body: "## 1. Donner un titre aux pages   **Cible : ** tout le monde et en particulier les personnes déficientes visuelles.   **Quand : ** dès la conception et pendant le développement.  **Description :**   Donner à chaque page un titre qui lui est spécifique et qui reflète son contenu ou sa fonction (balise `&lt;title&gt;`).   Le titre de la page est le premier élément lu par la synthèse vocale, il doit permettre d'identifier formellement la page sur laquelle on se trouve.  **À vérifier : ** - Bien qu'il n'y ait pas de règle, en général (ouverture de nombreux onglets de multiples applications), on va de l'information la plus spécifique vers la moins spécifique (ex: nom de la page courante - nom du site). Pour le fenêtrage d'une multitude d'application, le contexte d'utilisation est différent, dans ce cas, on préférera aller de l'information la moins spécifique vers la plus spécifique. - Lorsque le contenu de la page est modifié dynamiquement (affichage du résultat d'une recherche, erreurs dans un formulaire, action utilisateur ajoutant du contenu...), le titre de la page doit refléter cette modification du contenu.  **Exemple valide :**   `Accueil - Espace client Orange`   **Exemple non-valide :**   `Accueil`  "
});

documentTitles["fondamentaux-nontech.html#2-donner-des-titres-aux-rubriques"] = "2. Donner des titres aux rubriques";
index.add({
    url: "fondamentaux-nontech.html#2-donner-des-titres-aux-rubriques",
    title: "2. Donner des titres aux rubriques",    
    body: "## 2. Donner des titres aux rubriques **Cible : ** tout le monde et en particulier les personnes déficientes cognitives, avec des difficultés pour lire et déficientes visuelles.   **Quand : ** dès la conception, à la rédaction du contenu et pendant le développement.  **Description :**   Identifier les balises de titres à utiliser (balises HTML `h1` jusqu'à `h6`) pour structurer le contenu des pages. Les personnes malvoyantes naviguant à l'aide d'un lecteur d'écran peuvent accéder à la liste des titres de la page pour naviguer rapidement.  Tout comme dans un fichier Word, il est possible d'utiliser la table des matières si des titres ont correctement été positionnés à l'intérieur du document.    **À vérifier : **  - Les titres doivent être pertinents, refléter la structure de l'information contenue dans la page. - Il ne doit pas exister de saut dans la hiérarchie des titres (on ne passe pas directement d'un titre `h2` à un titre `h4`). - On peut mettre plusieurs `h1` par page (se limiter tout de même à deux dans la majorité des cas).  **Exemple valide : **        Un titrage de page cohérent et pertinent :  `(Titre 1) Accueil - Orange`  `(Titre 2) Les actualités`  `(Titre 2) La fibre arrive !`  `(Titre 3) Êtes-vous éligible ?`  "
});

documentTitles["fondamentaux-nontech.html#3-assurer-un-contraste-suffisant-entre-texte-et-fond"] = "3. Assurer un contraste suffisant entre texte et fond";
index.add({
    url: "fondamentaux-nontech.html#3-assurer-un-contraste-suffisant-entre-texte-et-fond",
    title: "3. Assurer un contraste suffisant entre texte et fond",    
    body: "## 3. Assurer un contraste suffisant entre texte et fond **Cible : ** tout le monde, en particulier, les utilisateurs sur mobile et tablette, les personnes malvoyantes, éprouvant des difficultés de lecture ou avec un déficit d'attention et les seniors.    **Quand : ** dès la phase de conception et lors du développement.  **Description : **   Le niveau de contraste entre le texte et l'arrière-plan, doit être suffisamment élevé. Un niveau de contraste insuffisant sera préjudiciable pour les utilisateurs ayant des difficultés visuelles ainsi que pour les utilisateurs de mobiles et tablettes se trouvant dans un environnement très lumineux.      **Exemple non-valide : **   Le texte \&quot;film | 20h40 ...\&quot; ne présente pas un contraste suffisant. Celui-ci ne sera pas lisible par tous les utilisateurs.    ![capture d'écran présentant du texte dont le contraste n'est pas suffisant](images/contraste.png)  **À vérifier : **  - Le contraste entre la couleur du fond et celle du texte doit être 4.5:1 minimum et ceci également pour du texte sous forme d'image porteur d'information. - Pour des applications principalement utilisées en web mobile ou en mobilité, le niveau de contraste des principaux éléments doit être de 7:1 afin d'assurer une bonne lisibilité pour tous. - Les liens doivent être facilement identifiables par rapport au reste du texte.  **Outil : **   L'application [colour contrast analyser](http://www.paciellogroup.com/resources/contrastanalyser/) permet de mesurer rapidement des niveaux de contraste de couleurs (gratuit pour mac et windows).     "
});

documentTitles["fondamentaux-nontech.html#4-ne-pas-utiliser-la-couleur-ou-linformation-sensorielle-comme-seule-source-dinformation"] = "4. Ne pas utiliser la couleur ou l'information sensorielle comme seule source d'information";
index.add({
    url: "fondamentaux-nontech.html#4-ne-pas-utiliser-la-couleur-ou-linformation-sensorielle-comme-seule-source-dinformation",
    title: "4. Ne pas utiliser la couleur ou l'information sensorielle comme seule source d'information",    
    body: "## 4. Ne pas utiliser la couleur ou l'information sensorielle comme seule source d'information **Cible : ** tout le monde, en particulier, les daltoniens et plus généralement les personnes malvoyantes ou ayant une déficience cognitive, auditive et les seniors.   **Quand : ** dès la phase de conception et lors du développement.  **Description : **   Ne pas utiliser la couleur ou une information sensorielle (forme, taille, son, orientation, localisation visuelle...) comme la seule façon de véhiculer de l'information, d'indiquer une action, de solliciter une réponse ou de distinguer un élément. L'information fournie par un changement de couleur ou une information sensorielle doit être complétée par une information textuelle (alternative) ou/et structuration sémantique.  **Exemple valide : **    ![illustration utilisant des icônes de couleurs pour transmettre l'information](images/couleur-ok.png)  **Exemple non-valide : **    ![illustration utilisant des icônes de couleurs pour transmettre l'information](images/couleur-ko.png)    Cet exemple n'est pas valide, car l'information est transmise uniquement par la couleur.  **À vérifier : ** - Faire une capture d'écran et passer la en noir et blanc. La perte des couleurs ne doit pas entraîner de difficulté dans la navigation, ni provoquer de perte d'information. - Couper le son, le niveau d'information doit rester identique.  "
});

documentTitles["fondamentaux-nontech.html#5-definir-des-equivalents-textuels"] = "5. Définir des équivalents textuels";
index.add({
    url: "fondamentaux-nontech.html#5-definir-des-equivalents-textuels",
    title: "5. Définir des équivalents textuels",    
    body: "## 5. Définir des équivalents textuels **Cible : ** les personnes déficientes visuelles, les personnes malentendantes ou déficientes cognitives et les moteurs de recherche.   **Quand : ** dès la conception et pendant le développement.  **Description :**   Mettre en place des alternatives textuelles à tous les éléments informatifs non-textuels (alternatives aux images, icones). De même prévoir des scripts ou des sous-titres pour les contenus audio ou vidéo.  **Exemple : **   Dans la capture ci-dessous, il faudrait par exemple prévoir dès la conception les textes alternatifs pour chaque bouton : - menu - réglages - chaine précédente - couper le son ...    ![capture d'écran d'un lecteur vidéo contenant plusieurs boutons](images/player.png)     "
});

documentTitles["fondamentaux-nontech.html#6-visibilite-du-focus"] = "6. Visibilité du focus";
index.add({
    url: "fondamentaux-nontech.html#6-visibilite-du-focus",
    title: "6. Visibilité du focus",    
    body: "## 6. Visibilité du focus **Cible : ** tout le monde et en particulier les personnes déficientes visuelles, motrices, cognitives et en mobilité.   **Quand : ** lors de la conception graphique et lors du développement.  **Description :**   La position du focus clavier doit être visible à tous moment. Lorsqu'un élément cliquable reçoit le focus (lien, bouton ...), ceci doit être visible pour l'utilisateur. Par défaut, le navigateur entoure l'élément avec des pointillés ou un cadre de couleur. Ce comportement peut être remplacé pour le rendre plus visible (assurer un contraste suffisant, par exemple) par un effet personnalisé, mais ne doit pas être supprimé. Les utilisateurs qui naviguent à l'aide du clavier (touche TAB) ont besoin de connaître la position du focus.      L'effet visible à la prise du focus doit être étudié dès la conception graphique au même titre que l'effet visible au survol du pointeur de la souris.       **Exemples valides : **   Dans les captures d'écran suivantes, le focus est positionné sur le lien \&quot;209 SMS/mois\&quot;.   La première capture présente le comportement par défaut (focus représenté par des pointillés). Dans la seconde capture, les pointillés ont été supprimés, mais un encadré permet d'indiquer de manière explicite l'emplacement du focus.   ![capture d'écran présentant l'affichage du focus par défaut](images/focus.png) ![capture d'écran présentant un comportement personnalisé pour l'affichage du focus](images/focus2.png)    "
});

documentTitles["fondamentaux-nontech.html#7-agrandissement-de-la-taille-du-texte"] = "7. Agrandissement de la taille du texte";
index.add({
    url: "fondamentaux-nontech.html#7-agrandissement-de-la-taille-du-texte",
    title: "7. Agrandissement de la taille du texte",    
    body: "## 7. Agrandissement de la taille du texte  **Cible : ** tout le monde et en particulier les personnes déficientes visuelles, en mobilité et seniors.   **Quand : ** lors de la conception graphique et principalement lors du développement.  **Description :**   La taille du texte doit pouvoir être multipliée par 2 (zoom du texte à 200% depuis les réglages du navigateur). A ce niveau de zoom, la présentation de la page peut être altérée, mais l'information doit rester lisible (pas de texte tronqué, ni superposé). Bien que ceci doive être pris en compte pendant la phase de développement, on peut identifier les zones de l'écran qui doivent ou non s'agrandir en même temps que la taille du texte dès la phase de conception graphique. Par ailleurs, certains choix de design peuvent ou non faciliter la mise en place de ce critère lors du développement, il est donc important d'y réfléchir dès le départ.       **Exemple : **     La capture ci-dessous montre une page avec un zoom à 100%.   ![capture d'écran avec zoom à 100%](images/zoom.png)        &amp;nbsp;   **Exemple valide : **   Avec zoom du texte à 200%.   ![capture d'écran avec zoom à 200% et texte lisible](images/zoom-ok.png)        &amp;nbsp;   **Exemple non-valide : **   Avec zoom du texte à 200%. Ici la hauteur de l'élément contenant le texte n'a pas été rendue variable en fonction de la taille des caractères.   ![capture d'écran avec zoom à 200% et texte tronqué](images/zoom-ko.png)    "
});

documentTitles["fondamentaux-nontech.html#8-animation"] = "8. Animation";
index.add({
    url: "fondamentaux-nontech.html#8-animation",
    title: "8. Animation",    
    body: "## 8. Animation **Cible : ** les personnes malvoyantes, les personnes éprouvant des difficultés de lecture, d'attention ou de compréhension, les personnes épileptiques.   **Quand : ** lors de la conception du service et lors de la conception graphique.  **Description :**   Tout contenu en mouvement, mis à jour, clignotant doit pouvoir être stoppé, caché ou mis en pause par l'utilisateur.   Par ailleurs, éviter autant que possible les flashs lumineux et les changements brusques de luminosité (cf. [Le logo des JO provoque des crises d'épilepsie](http://www.leparisien.fr/societe/le-logo-des-jo-provoque-des-crises-d-epilepsie-09-06-2007-2008107333.php)).  **Exemple : **   ![capture d'écran d'un carrousel disposant d'un bouton pour mettre en pause l'animation](./images/carrousel.png)    Un carrousel qui défile automatiquement doit se mettre en pause au survol de la souris ou lorsque celui-ci reçoit le focus.   Il est également possible d'ajouter un bouton \&quot;pause\&quot; directement dans l'interface.  "
});

documentTitles["fondamentaux-nontech.html#9-libelle-des-liens"] = "9. Libellé des liens";
index.add({
    url: "fondamentaux-nontech.html#9-libelle-des-liens",
    title: "9. Libellé des liens",    
    body: "## 9. Libellé des liens **Cible : ** tout le monde et en particulier les personnes déficientes visuelles, cognitives ou ayant un déficit d'attention.   **Quand : ** lors de la conception du service et lors de la conception graphique.  **Description :**   Les libellés des liens doivent être suffisamment explicites. Dans les cas exceptionnels où ce n'est techniquement pas possible, prévoir quand même un libellé explicite qui sera utilisé par la synthèse vocale.  **Exemple valide :**   `découvrez nos offres`   **Exemple non-valide :**   `cliquez ici`   `en savoir plus`  "
});

documentTitles["fondamentaux-nontech.html#10-navigation-au-clavier"] = "10. Navigation au clavier";
index.add({
    url: "fondamentaux-nontech.html#10-navigation-au-clavier",
    title: "10. Navigation au clavier",    
    body: "## 10. Navigation au clavier **Cible : ** tout le monde, en particulier les personnes souffrant de handicap moteur ou visuel et en mobilité.   **Quand : ** lors de la conception du service et lors du développement.  **Description :**   Toutes les fonctionnalités doivent être utilisables à l'aide du clavier uniquement. Le focus doit pouvoir être déplacé sur tous les éléments cliquables (à l'aide de la touche TAB).   Par ailleurs si des fonctionnalités sont spécifiques pour la souris (glissé déposé, menu apparaissant au clic droit...), faire en sorte que celles-ci soient également disponibles via un autre moyen ailleurs dans l'interface (bouton, icône, menu...).    **Exemple : **   Dans webmail, si un clic droit sur le dossier \&quot;corbeille\&quot; permet d'accéder à un menu pour vider la corbeille, cette option doit être également disponible via un bouton \&quot;vider la corbeille\&quot; ailleurs dans l'interface ou depuis un menu déroulant accessible au clavier.  "
});

documentTitles["fondamentaux-nontech.html#11-formulaires"] = "11. Formulaires";
index.add({
    url: "fondamentaux-nontech.html#11-formulaires",
    title: "11. Formulaires",    
    body: "## 11. Formulaires **Cible : ** tout le monde et en particulier les personnes déficientes visuelles.   **Quand : ** lors de la conception et lors du développement.  **Description :**   Chaque champ de formulaire doit être accompagné d'un libellé permettant d'identifier le rôle du champ, le type de donnée et le format attendu. Ce libellé doit être proche visuellement du champ afin qu'on fasse facilement le lien entre eux (notamment pour les utilisateurs de zoom ou de loupe logicielle), voire sur mobile). Les champs en erreur doivent pouvoir être identifiés, si besoin, suggérer une correction. Ceci s'applique aux champs de saisie, mais également aux autres types de champs (liste déroulante, bouton radio, case à cocher ...). Au niveau du développement, ce libellé sera associé au champ de formulaire pour faciliter la navigation à l'aide d'un lecteur d'écran.  **Exemple valide : **   ![capture d'écran d'un formulaire valide](images/formulaire.png)    &amp;nbsp;  **Exemple non-valide : **   ![capture d'écran d'un formulaire auquel il manque un label](images/formulaire2.png)  &amp;nbsp;  Dans certains cas, il semble inutile d'accompagner le champ de formulaire d'un libellé (champ de recherche accompagné d'un bouton en forme de loupe par exemple). Dans ce cas prévoir tout de même un libellé, celui-ci ne sera pas affiché à l'écran mais sera tout de même associé au champ de formulaire lors du développement pour faciliter la navigation à l'aide d'un lecteur d'écran.  Enfin les libellés des messages d'erreur doivent être explicites.  **Exemple valide : **   ![capture d'écran d'un formulaire affichant des messages d'erreur à la saisie valides](images/formulaire-ok.png)    **Exemple non-valide : **   ![capture d'écran d'un formulaire affichant des messages d'erreur à la saisie non-valides](images/formulaire-ko.png)  "
});

documentTitles["fondamentaux-nontech.html#12-boites-de-dialogues-et-ouverture-de-nouvelles-fenetres"] = "12. Boites de dialogues et ouverture de nouvelles fenêtres";
index.add({
    url: "fondamentaux-nontech.html#12-boites-de-dialogues-et-ouverture-de-nouvelles-fenetres",
    title: "12. Boites de dialogues et ouverture de nouvelles fenêtres",    
    body: "## 12. Boites de dialogues et ouverture de nouvelles fenêtres **Cible : ** les seniors, les personnes déficientes cognitives, malvoyantes ou en mobilité.   **Quand : ** lors de la conception et lors du développement.  **Description :**   Eviter autant que possible les actions qui ouvrent une nouvelle fenêtre (ou un nouvel onglet) du navigateur. Si un lien déclenche l'ouverture d'une nouvelle fenêtre, il faudra lors du développement faire en sorte que le texte \&quot;nouvelle fenêtre\&quot; soit vocalisé par les lecteurs d'écran. Ceci afin que les personnes malvoyantes sachent qu'une nouvelle fenêtre s'ouvre. De même éviter le recours systématique aux boites de dialogues pour présenter des informations dans les pages (présentation du service ...). Celles-ci posent souvent des problèmes d'accessibilité pour les personnes qui naviguent au clavier ou au lecteur d'écran qui nécessiteront une attention particulière lors de la phase de développement.  **Exemple non-valide : **   Dans l'exemple ci-dessous le recours à une boite de dialogue n'est pas justifié. L'utilisation d'un page web standard permettrait : - De laisser plus d'espace au contenu (en supprimant les marges autour de la boite de dialogue. - De pouvoir utiliser le bouton \&quot;précédent\&quot; du navigateur pour revenir en arrière lors de la navigation entre les différentes pages de la boite de dialogue. - De faciliter l'affichage sur les petits écrans. - D'éviter des problèmes d'accessibilité pour les personnes qui naviguent à l'aide du clavier ou à l'aide d'un lecteur d'écran. - D'alléger le poids de la page et le temps de chargement, car dans cet exemple la page derrière la boite de dialogue doit être chargée.    ![capture d'écran d'une boite de dialogue beaucoup trop volumineuse](images/dialog.png)  "
});

documentTitles["fondamentaux-nontech.html#13-fournir-des-liens-devitement"] = "13. Fournir des liens d'évitement";
index.add({
    url: "fondamentaux-nontech.html#13-fournir-des-liens-devitement",
    title: "13. Fournir des liens d'évitement",    
    body: "## 13. Fournir des liens d'évitement **Cible : ** utile pour les utilisateurs de mobile et tablette, les personnes déficientes visuelles et les personnes souffrant de handicap moteur ou en mobilité.   **Quand : ** dès la phase de conception et lors du développement.  **Description :**   Fournir des liens d'évitement du type \&quot;Aller au contenu\&quot; sur chaque page. Ceux-ci facilitent la navigation pour les personnes utilisant le clavier, en mobilité ou navigant à l'aide d'un lecteur d'écran. En cas de **fortes contraintes,** les liens peuvent être masqués à l'écran et apparaître uniquement lors de la navigation au clavier.  **Exemple : **   Des liens d'évitement (\&quot;Aller à la navigation\&quot;, \&quot;Aller au contenu\&quot;) sont disponibles sur ce site. Pour les faire apparaître, placer le focus en haut de la page en cliquant sur la barre d'adresse de votre navigateur par exemple puis appuyer plusieurs fois sur la touche `TAB`.  ![capture d'écran du site orange.com](images/skiplink.png) &lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2016  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt;"
});



documentTitles["exigences.html#exigences-accessibilite-web-orange"] = "Exigences accessibilité web Orange";
index.add({
    url: "exigences.html#exigences-accessibilite-web-orange",
    title: "Exigences accessibilité web Orange",    
    body: "# Exigences accessibilité web Orange &lt;script&gt;$(document).ready(function () {     setBreadcrumb([{\&quot;label\&quot;:\&quot;Ensemble des exigences\&quot;}]); });&lt;/script&gt; "
});

documentTitles["exigences.html#introduction-et-contexte"] = "Introduction et contexte";
index.add({
    url: "exigences.html#introduction-et-contexte",
    title: "Introduction et contexte",    
    body: "## Introduction et contexte  Pour les exigences d’accessibilité interne d’Orange, nous avons choisi de nous appuyer sur les [Web Content Accessibility Guidelines v2](http://www.w3.org/Translations/WCAG20-fr/) (WCAG 2). Il s'agit des recommandations internationales éditées par le groupe de travail Web Accessibility Initiative (WAI) du World Wide Web Consortium (W3c) qui sont aussi les normes ISO 40500:2012.  Le niveau d’accessibilité demandé à toute interface HTML par le groupe Orange est **le respect des critères du niveau AA des Web Content Accessibility Guidelines (WCAG) 2.0, sans point bloquant** du point de vue utilisateur suite à un test utilisateur d’aide technique pour les principaux scénarios d’utilisation des fonctionnalités du site ou de l’application.  Pour la partie, solutions techniques, nous avons pointé vers un contenu externe que sont les [notices Accede-Web](http://www.accede-web.com/notices/). En effet, ces notices sont très pratiques, pédagogiques et émanent de la société Atalan, d’un collectif de grandes entreprises ainsi que d’écoles et d’associations de personnes en situation de handicap.  Ces notices ont été traduites en anglais et font consensus dans le domaine de l’accessibilité numérique comme une source de bonnes pratiques, complète et de qualité. Ces notices sont mises à jour régulièrement pour coller à l’évolution des technologies (navigateurs, aides techniques…).  De plus, pour ce qui est des tests associés, nous avons utilisé le [Référentiel Général d’Accessibilité de l’Administration version 3](http://references.modernisation.gouv.fr/referentiel) (RGAA3). C’est le référentiel officiel permettant de s’assurer qu’un site d'état et de collectivités territoriales est en conformité avec l’[article 47 de la loi de février 2005 pour l'égalité des droits et des chances, la participation et la citoyenneté des personnes handicapées](http://www.legifrance.gouv.fr/affichTexteArticle.do?idArticle=JORFARTI000001290363&amp;cidTexte=JORFTEXT000000809647).  Le RGAA3 est méthode d’implémentation des Web Content Accessibility Guidelines v2 (WCAG 2). Un site conforme au RGAA3 est également conforme aux WCAG2.   Le RGAA3 est basé sur des tests spécifiques rangés par grandes thématiques (présentation, formulaire, contenu non-textuel…) permettant de valider la conformité du site ou de l’application.  "
});

documentTitles["exigences.html#liste-des-chapitres-du-rgaa"] = "Liste des chapitres du RGAA";
index.add({
    url: "exigences.html#liste-des-chapitres-du-rgaa",
    title: "Liste des chapitres du RGAA",    
    body: "## Liste des chapitres du RGAA  1. [Images](https://references.modernisation.gouv.fr/rgaa-accessibilite/criteres.html#images) 2. [Cadres](https://references.modernisation.gouv.fr/rgaa-accessibilite/criteres.html#cadres) 3. [Couleurs](https://references.modernisation.gouv.fr/rgaa-accessibilite/criteres.html#couleurs) 4. [Multimédia](https://references.modernisation.gouv.fr/rgaa-accessibilite/criteres.html#multimedia) 5. [Tableaux](https://references.modernisation.gouv.fr/rgaa-accessibilite/criteres.html#tableaux) 6. [Liens](https://references.modernisation.gouv.fr/rgaa-accessibilite/criteres.html#liens) 7. [Scripts](https://references.modernisation.gouv.fr/rgaa-accessibilite/criteres.html#scripts) 8. [Eléments obligatoires](https://references.modernisation.gouv.fr/rgaa-accessibilite/criteres.html#elements) 9. [Structuration de l'information](https://references.modernisation.gouv.fr/rgaa-accessibilite/criteres.html#structure) 10. [Présentation de l'information](https://references.modernisation.gouv.fr/rgaa-accessibilite/criteres.html#presentation) 11. [Formulaires](https://references.modernisation.gouv.fr/rgaa-accessibilite/criteres.html#formulaire) 12. [Navigation](https://references.modernisation.gouv.fr/rgaa-accessibilite/criteres.html#navigation) 13. [Consultation](https://references.modernisation.gouv.fr/rgaa-accessibilite/criteres.html#consultation)  **Tests associés** : les tests RGAA v3 (niveau A et AA) associés à cette thématique permettant de valider l’accessibilité.  "
});

documentTitles["exigences.html#les-exemples"] = "Les exemples";
index.add({
    url: "exigences.html#les-exemples",
    title: "Les exemples",    
    body: "## Les exemples  Des exemples didactiques pour certains types de composants ou d’éléments d’interface particulièrement délicats à rendre accessible et fréquemment utilisés sont disponibles dans la section [exemples](./exemples.html). Ces exemples utilisent la librairie [boosted](http://boosted.orange.com/). Cette librairie basée sur [bootstrap](http://getbootstrap.com/) permet de réaliser rapidement un site web responsive et accessible aux couleurs de la charte Orange, la Brand.  "
});

documentTitles["exigences.html#rappel-les-notices-accede-web"] = "Rappel : les notices accede-web";
index.add({
    url: "exigences.html#rappel-les-notices-accede-web",
    title: "Rappel : les notices accede-web",    
    body: "## Rappel : les notices accede-web  Les recommandations d'accessibilité web Orange font référence aux notices accessibilité du site [accede-web](http://accede-web.com/).  Ce site propose d'excellentes notices sur l'accessibilité au format Web et PDF.  &lt;p class=\&quot;row\&quot;&gt;       &lt;div class=\&quot;perso col-sm-12 col-md-6 col-lg-3\&quot;&gt;         ![](./images/perso1.png)          &lt;a href=\&quot;http://www.accede-web.com/notices/graphique/\&quot; class=\&quot;btn btn-info\&quot;&gt;Notice d’accessibilité pour la conception fonctionnelle et graphique&lt;/a&gt;     &lt;/div&gt;     &lt;div class=\&quot;perso col-sm-12 col-md-6 col-lg-3\&quot;&gt;         ![](./images/perso2.png)             &lt;a href=\&quot;http://www.accede-web.com/notices/editoriale/\&quot; class=\&quot;btn btn-info\&quot;&gt;Notice d’accessibilité éditoriale (modèle)&lt;/a&gt;     &lt;/div&gt;     &lt;div class=\&quot;perso col-sm-12 col-md-6 col-lg-3\&quot;&gt;         ![](./images/perso3.png)           &lt;a href=\&quot;http://www.accede-web.com/notices/html-css-javascript/\&quot; class=\&quot;btn btn-info\&quot;&gt;Notice d’accessibilité HTML, CSS et JavaScript&lt;/a&gt;     &lt;/div&gt;     &lt;div class=\&quot;perso col-sm-12 col-md-6 col-lg-3\&quot;&gt;         ![](./images/perso4.png)           &lt;a href=\&quot;http://www.accede-web.com/notices/interface-riche/\&quot; class=\&quot;btn btn-info\&quot;&gt;Notice d’accessibilité pour les composants d’interface riche&lt;/a&gt;     &lt;/div&gt;       &lt;/p&gt;  &lt;br&gt;&amp;nbsp; &lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2016  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt; "
});



documentTitles["htmlaria.html#html5-aria"] = "HTML5 &amp; ARIA";
index.add({
    url: "htmlaria.html#html5-aria",
    title: "HTML5 &amp; ARIA",    
    body: "# HTML5 &amp; ARIA  &lt;script&gt;$(document).ready(function () {     setBreadcrumb([{\&quot;label\&quot;:\&quot;HTML5 &amp; ARIA\&quot;}]); });&lt;/script&gt;  "
});

documentTitles["htmlaria.html#introduction"] = "Introduction";
index.add({
    url: "htmlaria.html#introduction",
    title: "Introduction",    
    body: "## Introduction  Les sites internet sont de plus en plus dynamiques (chargement asynchrone, génération dynamique de contenu) et interactifs (composants d’interface complexes : slider, datepicker…). Il est donc très difficile voire impossible de rendre ce genre de composants accessibles avec le HTML classique.   Même avec l’évolution due au HTML5, on manque encore d’informations sémantiques à fournir aux aides techniques (lecteurs d’écran, loupes logicielles…), la navigation clavier est souvent impossible, la gestion complexe du focus clavier est absente et les mises à jour des régions dynamiques ne sont pas signalées.  "
});

documentTitles["htmlaria.html#quest-ce"] = "Qu’est-ce ?";
index.add({
    url: "htmlaria.html#quest-ce",
    title: "Qu’est-ce ?",    
    body: "## Qu’est-ce ?  Pour remédier à ces limitations, le W3c/WAI a officiellement publié une recommandation appelée ARIA, pour Accessible Rich Internet Applications, ainsi qu’une suite de documents traitant de l’utilisation d’ARIA.  ARIA est une sur-couche sémantique à base de couples attribut/valeur utilisables dans les langages de balisage tels que HTML, SVG, XML, etc. Cette recommandation est composée de rôles, d’états et de propriétés qui vont spécifiquement interagir avec les aides techniques (AT). Grâce à ARIA, on peut décrire des éléments et leurs comportements en HTML lorsqu’ils sont nativement non sémantiquement explicites, par exemple, des onglets, les arbres dépliants, des régions dynamiques, les info-bulles, les fenêtres modales. ARIA définit également comment doit se comporter un composant d’interface avec le clavier afin d’homogénéiser l’expérience des utilisateurs qui naviguent au clavier. ** ARIA prend tout son sens et exprime tout son potentiel lorsqu'il est utilisé dans du HTML5 **.  Aria ne rajoute aucun comportement particulier ni aucune présentation visuelle aux composants d’interface. Il faut donc toujours assurer la mise en forme grâce aux CSS, le contrôle du contenu et la gestion de l’interactivité via Javascript.  "
});

documentTitles["htmlaria.html#le-support"] = "Le support";
index.add({
    url: "htmlaria.html#le-support",
    title: "Le support",    
    body: "## Le support  Le support d’ARIA s’améliore constamment et est déjà présent depuis longtemps : - Dans les navigateurs modernes (Firefox &gt;=3.0, Chrome &gt;=16, Safari &gt;=4, Opera &gt;=9.5, Internet Explorer 8 pour un support basique, Internet Explorer &gt;=9 et Edge pour un support avancé). - Dans les aides techniques (NVDA &gt;=2010, Orca &gt;= 2 + Firefox uniquement, VoiceOver OSX &gt;=10.5, iOS &gt;=4, JAWS &gt;=8, Window-Eyes &gt;=7, ZoomText 10 pour un support basique, ZoomText &gt;=11 pour un support avancé).    De plus, l’efficacité optimale de la prise en charge d’ARIA dépend du couple navigateur, aide technique, Firefox avec NVDA, Jaws avec Internet Explorer et Safari avec VoiceOver, par exemple.  "
});

documentTitles["htmlaria.html#faut-il-lutiliser"] = "Faut-il l’utiliser ?";
index.add({
    url: "htmlaria.html#faut-il-lutiliser",
    title: "Faut-il l’utiliser ?",    
    body: "## Faut-il l’utiliser ?  Globalement, ARIA améliore l’accessibilité pour des composants pas nativement présents en html (ou pas accessibles notamment certains  HTML5). La robustesse et l’interopérabilité d’ARIA sont maintenant suffisantes pour qu’[une vingtaine de techniques WCAG 2.0 soient spécifiques à ARIA](https://www.w3.org/WAI/GL/WCAG20-TECHS/aria.html) (contre 10 techniques HTML5). En conséquence, pour des applications Internet riches, l’ARIA est incontournable pour leur mise en accessibilité.  Dans tous les cas, il faut tester les développements sur les environnements cibles (couple navigateurs aides techniques). C’est un gros travail absolument nécessaire pour les cas complexes car sur un site ou une application internet classique, il faut, à minima, tester avec Safari/VoiceOver, Jaws/Internet Explorer et Firefox/NVDA.  Dans un environnement maitrisé (intranet), les environnements cibles sont connus et en nombre fini, donc, on peut statuer plus facilement !  "
});

documentTitles["htmlaria.html#webographie"] = "Webographie";
index.add({
    url: "htmlaria.html#webographie",
    title: "Webographie",    
    body: "## Webographie * Page de synthèse sur \&quot;ARIA in HTML\&quot; : https://specs.webplatform.org/html-aria/webspecs/master/ * W3c :   * Introduction à ARIA : http://www.w3.org/TR/wai-aria/introduction    *	Spécification ARIA : http://www.w3.org/TR/wai-aria/   * Mettre en place ARIA : http://www.w3.org/TR/wai-aria-practices/, attention « working draft »   * Utiliser ARIA en HTML (5) : http://www.w3.org/TR/aria-in-html/ , attention « working draft »   *	Techniques ARIA dans les WCAG 2 : https://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/aria.html  * Introduction à ARIA chez Site Point : http://www.sitepoint.com/introduction-wai-aria/  * Introduction et liste de liens vers des sources sur ARIA : http://developer.mozilla.org/fr/docs/Accessibilit%C3%A9/ARIA  &lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2016  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt;"
});



documentTitles["methodes-outils.html#methodes-et-outils"] = "Méthodes et outils";
index.add({
    url: "methodes-outils.html#methodes-et-outils",
    title: "Méthodes et outils",    
    body: "# Méthodes et outils  &lt;script&gt;$(document).ready(function () {     setBreadcrumb([{\&quot;label\&quot;:\&quot;Outils de test\&quot;}]); });&lt;/script&gt;  Vous trouverez ci-dessous des articles décrivant les méthodes et outils utiles pour tester l'accessibilité de vos pages web.  "
});

documentTitles["methodes-outils.html#tests-utilisateurs"] = "Tests utilisateurs";
index.add({
    url: "methodes-outils.html#tests-utilisateurs",
    title: "Tests utilisateurs",    
    body: "## Tests utilisateurs  "
});

documentTitles["methodes-outils.html#navigation-au-claviermethodes-outils-clavierhtml"] = "[Navigation au clavier](./methodes-outils-clavier.html)";
index.add({
    url: "methodes-outils.html#navigation-au-claviermethodes-outils-clavierhtml",
    title: "[Navigation au clavier](./methodes-outils-clavier.html)",    
    body: "### [Navigation au clavier](./methodes-outils-clavier.html) Liste des principaux raccourcis pour naviguer au clavier dans une page web.  "
});

documentTitles["methodes-outils.html#agrandissement-de-la-taille-du-textemethodes-outils-zoomhtml"] = "[Agrandissement de la taille du texte](./methodes-outils-zoom.html)";
index.add({
    url: "methodes-outils.html#agrandissement-de-la-taille-du-textemethodes-outils-zoomhtml",
    title: "[Agrandissement de la taille du texte](./methodes-outils-zoom.html)",    
    body: "### [Agrandissement de la taille du texte](./methodes-outils-zoom.html) Un guide sur la gestion du zoom.  "
});

documentTitles["methodes-outils.html#navigation-a-laide-dun-lecteur-decranmethodes-outils-lecteur-ecranhtml"] = "[Navigation à l'aide d'un lecteur d'écran](./methodes-outils-lecteur-ecran.html)";
index.add({
    url: "methodes-outils.html#navigation-a-laide-dun-lecteur-decranmethodes-outils-lecteur-ecranhtml",
    title: "[Navigation à l'aide d'un lecteur d'écran](./methodes-outils-lecteur-ecran.html)",    
    body: "### [Navigation à l'aide d'un lecteur d'écran](./methodes-outils-lecteur-ecran.html) Les principaux lecteurs d'écrans utilisés.  "
});

documentTitles["methodes-outils.html#tests-automatises"] = "Tests automatisés";
index.add({
    url: "methodes-outils.html#tests-automatises",
    title: "Tests automatisés",    
    body: "## Tests automatisés "
});

documentTitles["methodes-outils.html#extensions-pour-navigateurmethodes-outils-extensionshtml"] = "[Extensions pour navigateur](./methodes-outils-extensions.html)";
index.add({
    url: "methodes-outils.html#extensions-pour-navigateurmethodes-outils-extensionshtml",
    title: "[Extensions pour navigateur](./methodes-outils-extensions.html)",    
    body: "### [Extensions pour navigateur](./methodes-outils-extensions.html) Certaines extensions permettent d'effectuer des tests automatiques sur la page en cours de consultation.  "
});

documentTitles["methodes-outils.html#tests-des-criteres"] = "Tests des critères";
index.add({
    url: "methodes-outils.html#tests-des-criteres",
    title: "Tests des critères",    
    body: "## Tests des critères "
});

documentTitles["methodes-outils.html#mesurer-le-niveau-de-contraste-des-couleursmethodes-outils-contrasteshtml"] = "[Mesurer le niveau de contraste des couleurs](./methodes-outils-contrastes.html)";
index.add({
    url: "methodes-outils.html#mesurer-le-niveau-de-contraste-des-couleursmethodes-outils-contrasteshtml",
    title: "[Mesurer le niveau de contraste des couleurs](./methodes-outils-contrastes.html)",    
    body: "### [Mesurer le niveau de contraste des couleurs](./methodes-outils-contrastes.html) Présentation de l'outil colour contrast analyser.  "
});

documentTitles["methodes-outils.html#acceder-a-la-liste-des-titres-de-la-page-balises-h1-a-h6methodes-outils-liste-titreshtml"] = "[Accéder à la liste des titres de la page (balises `H1` à `H6`)](./methodes-outils-liste-titres.html)";
index.add({
    url: "methodes-outils.html#acceder-a-la-liste-des-titres-de-la-page-balises-h1-a-h6methodes-outils-liste-titreshtml",
    title: "[Accéder à la liste des titres de la page (balises `H1` à `H6`)](./methodes-outils-liste-titres.html)",    
    body: "### [Accéder à la liste des titres de la page (balises `H1` à `H6`)](./methodes-outils-liste-titres.html) Les différentes façons d'accéder à la liste des titres d'une page.  &amp;nbsp; &lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2016  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt;"
});



documentTitles["nos-outils.html#outils-orange-open-source"] = "Outils Orange open source";
index.add({
    url: "nos-outils.html#outils-orange-open-source",
    title: "Outils Orange open source",    
    body: "# Outils Orange open source      &lt;script&gt;$(document).ready(function () {     setBreadcrumb([{\&quot;label\&quot;:\&quot;Outils Orange open source\&quot;}]); });&lt;/script&gt;      Voici la liste de nos outils open source pour le web :  - **Orange Boosted :** pour créer des sites web ou mobile accessibles aux couleurs de la charte Orange. - **Orange Confort+ :** pour améliorer le confort de l'utilisateur pendant la consultation de votre site web.  &lt;h2 id=\&quot;boosted\&quot; lang=\&quot;en\&quot;&gt;Orange Boosted&lt;/h2&gt; "
});

documentTitles["nos-outils.html#presentation"] = "Présentation";
index.add({
    url: "nos-outils.html#presentation",
    title: "Présentation",    
    body: "### Présentation Orange &lt;span lang=\&quot;en\&quot;&gt;Boosted&lt;/span&gt; est un framework HTML, CSS et Javascript basé sur le très populaire &lt;span lang=\&quot;en\&quot;&gt;[Twitter Boostrap](http://getbootstrap.com/)&lt;/span&gt;. Il permet la mise en place rapide d'un site web responsive et accessible aux couleurs de la charte Orange.  "
});

documentTitles["nos-outils.html#pourquoi-vous-devez-lutiliser"] = "Pourquoi vous devez l'utiliser ?";
index.add({
    url: "nos-outils.html#pourquoi-vous-devez-lutiliser",
    title: "Pourquoi vous devez l'utiliser ?",    
    body: "### Pourquoi vous devez l'utiliser ?  - Basé sur &lt;span lang=\&quot;en\&quot;&gt;[Twitter Boostrap](http://getbootstrap.com/)&lt;/span&gt;  - A la charte Orange, la Brand  - Amélioré avec des composants **plus accessibles**  - Enrichi de composants spécifiques à Orange  - Illustré de pages d'exemples  - &lt;span lang=\&quot;en\&quot;&gt;Open source&lt;/span&gt; sous Licence &lt;span lang=\&quot;en\&quot;&gt;MIT&lt;/span&gt;  "
});

documentTitles["nos-outils.html#site-officiel"] = "Site officiel";
index.add({
    url: "nos-outils.html#site-officiel",
    title: "Site officiel",    
    body: "### Site officiel  &lt;span lang=\&quot;en\&quot;&gt;[Orange Boosted with Bootstrap](http://boosted.orange.com/)&lt;/span&gt;  "
});

documentTitles["nos-outils.html#orange-confort"] = "Orange Confort+";
index.add({
    url: "nos-outils.html#orange-confort",
    title: "Orange Confort+",    
    body: "## Orange Confort+  "
});

documentTitles["nos-outils.html#presentation"] = "Présentation";
index.add({
    url: "nos-outils.html#presentation",
    title: "Présentation",    
    body: "### Présentation Le service Orange Confort+ permet d'adapter l'affichage d'un site web pour améliorer le confort lors de la consultation. Il dispose d'un vaste choix de réglages qui peuvent améliorer le confort de tous les utilisateurs. Il apporte également une aide précieuse aux utilisateurs ayant un handicap moteur, visuel ou cognitif.  Vous pouvez tester le service en cliquant sur le lien \&quot;confort+\&quot; situé en haut à droite de cette page.  "
});

documentTitles["nos-outils.html#ses-principaux-atouts"] = "Ses principaux atouts :";
index.add({
    url: "nos-outils.html#ses-principaux-atouts",
    title: "Ses principaux atouts :",    
    body: "### Ses principaux atouts : - Utile pour tous les utilisateurs - Prise en charge de différents handicaps - S'intègre sur tous les sites web - Egalement disponible sous forme d'extensions pour navigateur - &lt;span lang=\&quot;en\&quot;&gt;Open source&lt;/span&gt; sous Licence &lt;span lang=\&quot;en\&quot;&gt;MIT&lt;/span&gt;   ![capture d'écran du service confort plus](./images/confort-plus.png)  "
});

documentTitles["nos-outils.html#extensions-pour-navigateur"] = "Extensions pour navigateur";
index.add({
    url: "nos-outils.html#extensions-pour-navigateur",
    title: "Extensions pour navigateur",    
    body: "### Extensions pour navigateur - Firefox : https://addons.mozilla.org/fr/firefox/addon/orange-confort - Chrome : https://chrome.google.com/webstore/detail/orange-confort%2B/ddnpdohiipephjpdpohikkamhdikbldp - IE11, 64 ou 32 bits : http://confort-plus.orange.com/  "
});

documentTitles["nos-outils.html#site-officiel"] = "Site officiel";
index.add({
    url: "nos-outils.html#site-officiel",
    title: "Site officiel",    
    body: "### Site officiel [Orange Confort+](http://confort-plus.orange.com/)       &lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2016  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt;"
});



documentTitles["methodes-outils-contrastes.html#mesurer-le-niveau-de-contraste-des-couleurs"] = "Mesurer le niveau de contraste des couleurs";
index.add({
    url: "methodes-outils-contrastes.html#mesurer-le-niveau-de-contraste-des-couleurs",
    title: "Mesurer le niveau de contraste des couleurs",    
    body: "# Mesurer le niveau de contraste des couleurs  &lt;script&gt;$(document).ready(function () {     setBreadcrumb([         {\&quot;label\&quot;:\&quot;Outils de test\&quot;, \&quot;url\&quot;: \&quot;./methodes-outils.html\&quot;},         {\&quot;label\&quot;:\&quot;Mesurer le niveau de contraste des couleurs\&quot;}]); });&lt;/script&gt;  &lt;span data-menuitem=\&quot;methodes-outils\&quot;&gt;&lt;/span&gt;  Le niveau de contraste peut être mesuré simplement à l'aide de l'outil [colour contrast analyser](http://www.paciellogroup.com/resources/contrastanalyser/).  Cet outil est disponible gratuitement pour Mac et Windows. Il permet de mesurer la différence de contraste entre deux couleurs (la couleur du texte et la couleur du fond). Celles-ci peuvent être sélectionnées à l'aide d'une pipette directement dans une page web, une image ou une application.    ![capture d'écran de l'outil colour contrast analyser](./images/contraste2.png)&lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2016  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt;"
});



documentTitles["methodes-outils-clavier.html#navigation-a-laide-du-clavier"] = "Navigation à l'aide du clavier";
index.add({
    url: "methodes-outils-clavier.html#navigation-a-laide-du-clavier",
    title: "Navigation à l'aide du clavier",    
    body: "# Navigation à l'aide du clavier  &lt;script&gt;$(document).ready(function () {     setBreadcrumb([         {\&quot;label\&quot;:\&quot;Outils de test\&quot;, \&quot;url\&quot;: \&quot;./methodes-outils.html\&quot;},         {\&quot;label\&quot;:\&quot;Navigation à l'aide du clavier\&quot;}]); });&lt;/script&gt;  &lt;span data-menuitem=\&quot;methodes-outils\&quot;&gt;&lt;/span&gt;  La navigation dans une page web doit être possible à l'aide du clavier seul, notamment pour les personnes qui ne peuvent pas utiliser de souris. Cette fonctionnalité est prise en charge directement par le navigateur. Il est tout de même important de vérifier son fonctionnement, car certains développements peuvent entraîner des difficultés pour naviguer correctement dans la page.    Pour tester si votre service est accessible à l'aide du clavier, vous pouvez tenter de naviguer sans votre souris. Toutes les fonctionnalités disponibles habituellement doivent rester accessible.   ** Rappel : **le focus doit rester suffisamment visible sur tous éléments recevant le focus.  "
});

documentTitles["methodes-outils-clavier.html#liste-des-raccourcis-clavier-principaux"] = "Liste des raccourcis clavier principaux :";
index.add({
    url: "methodes-outils-clavier.html#liste-des-raccourcis-clavier-principaux",
    title: "Liste des raccourcis clavier principaux :",    
    body: "## Liste des raccourcis clavier principaux :  - La touche `TAB` : pour faire avancer le focus. - Les touches `maj+TAB` : pour faire reculer le focus. - La touche entrée pour activer l'élément qui a le focus (lien, bouton, menu...). - La barre espace pour cocher/décocher une case à cocher. - Les flèches directionnelles pour modifier la sélection des boutons radio, pour se déplacer dans une liste déroulante, ou faire défiler les ascenseurs (scrollbar) lorsque ceux-ci sont présents.  ** Remarque sur mac la navigation au clavier doit être activée au préalable : **   Dans Safari : Edition &gt; Préférences ... &gt; Avancées   Puis cocher la case *\&quot;La touche TAB permet de naviguer parmi les objets des pages web\&quot;*. &lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2016  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt;"
});



documentTitles["methodes-outils-liste-titres.html#acceder-a-la-liste-des-titres-de-la-page-balises-h1-a-h6"] = "Accéder à la liste des titres de la page (balises `H1` à `H6`)";
index.add({
    url: "methodes-outils-liste-titres.html#acceder-a-la-liste-des-titres-de-la-page-balises-h1-a-h6",
    title: "Accéder à la liste des titres de la page (balises `H1` à `H6`)",    
    body: "# Accéder à la liste des titres de la page (balises `H1` à `H6`)  &lt;script&gt;$(document).ready(function () {     setBreadcrumb([         {\&quot;label\&quot;:\&quot;Outils de test\&quot;, \&quot;url\&quot;: \&quot;./methodes-outils.html\&quot;},         {\&quot;label\&quot;:\&quot;Accéder à la liste des titres de la page\&quot;}]); });&lt;/script&gt;  &lt;span data-menuitem=\&quot;methodes-outils\&quot;&gt;&lt;/span&gt;  Pour vérifier si des titres ont été correctement positionnés dans la page, il existe plusieurs solutions : - Parcourir le code de la page à la main. - Utiliser une extension telle que [HeadingsMap](https://addons.mozilla.org/fr/firefox/addon/headingsmap/) pour Firefox, [Wave pour Chrome](http://wave.webaim.org/extension/) ou [Web Developper Toolbar](http://chrispederick.com/work/web-developer/). - Accéder à la liste des titres depuis un lecteur d'écran (cf. chapitre [lecteur d'écran](./methodes-outils-lecteur-ecran.html)).  La dernière solution reste la plus fiable, car les extensions ne prennent pas toujours en compte les CSS et les éventuels attributs ARIA positionnés sur les balises HTML.   Vous pouvez trouver des informations complémentaires dans l'article : [navigation à l'aide d'un lecteur d'écran](./methodes-outils-lecteur-ecran.html).  &lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2016  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt;"
});



documentTitles["methodes-outils-lecteur-ecran.html#navigation-a-laide-dun-lecteur-decran"] = "Navigation à l'aide d'un lecteur d'écran";
index.add({
    url: "methodes-outils-lecteur-ecran.html#navigation-a-laide-dun-lecteur-decran",
    title: "Navigation à l'aide d'un lecteur d'écran",    
    body: "# Navigation à l'aide d'un lecteur d'écran  &lt;script&gt;$(document).ready(function () {     setBreadcrumb([         {\&quot;label\&quot;:\&quot;Outils de test\&quot;, \&quot;url\&quot;: \&quot;./methodes-outils.html\&quot;},         {\&quot;label\&quot;:\&quot;Navigation à l'aide d'un lecteur d'écran\&quot;}]); });&lt;/script&gt;  &lt;span data-menuitem=\&quot;methodes-outils\&quot;&gt;&lt;/span&gt;  Un lecteur d'écran (appelé aussi revue d'écran) est un logiciel de synthèse vocale utilisé par les personnes malvoyantes et non-voyantes. Il permet à l'utilisateur d'interagir avec l'ordinateur et d'écouter ce qui est affiché sous forme textuelle (le plus souvent) à l'écran. Il existe plusieurs lecteurs d'écran, les plus connus sont : - [NVDA](http://nvda-fr.org/) : gratuit disponible pour Windows. - [Jaws](http://www.freedomscientific.com/Downloads/JAWS) : payant disponible pour Windows. En mode démonstration, vous pouvez l'utiliser 40 min, après quoi il faudra redémarrer votre ordinateur pour l'utiliser à nouveau. - [Voiceover](http://www.apple.com/fr/accessibility/osx/voiceover/) : disponible pour mac. Il est est gratuit et intégré directement au système MacOS.  "
});

documentTitles["methodes-outils-lecteur-ecran.html#prise-en-main-de-nvda"] = "Prise en main de NVDA";
index.add({
    url: "methodes-outils-lecteur-ecran.html#prise-en-main-de-nvda",
    title: "Prise en main de NVDA",    
    body: "## Prise en main de NVDA  NVDA est un lecteur d'écran gratuit disponible pour Windows.  "
});

documentTitles["methodes-outils-lecteur-ecran.html#installation"] = "Installation";
index.add({
    url: "methodes-outils-lecteur-ecran.html#installation",
    title: "Installation",    
    body: "### Installation  Télécharger le fichier d'installation de NVDA sur le [site officiel](http://nvda-fr.org/).  La voix par défaut n'est pas de très bonne qualité mais elle est très réactive. Ce n'est pas indispensable, mais le téléchargement d'une voix de meilleure qualité est conseillé comme celle d'[Hortense](http://www.nvda-fr.org/voix.php). Il suffit ensuite de se rendre dans les préférences de NVDA pour modifier les paramètres vocaux.  "
});

documentTitles["methodes-outils-lecteur-ecran.html#configuration"] = "Configuration";
index.add({
    url: "methodes-outils-lecteur-ecran.html#configuration",
    title: "Configuration",    
    body: "### Configuration  Au premier démarrage, NVDA est configuré pour vocaliser tout ce que survol le pointeur de la souris. Ce mode est utilisé par certaines personnes malvoyantes qui ont des difficultés à lire les textes affichés à l'écran par exemple. Il est conseillé de désactiver cette option si vous utilisez NVDA pour faire des tests d'accessibilité sur vos pages.  Pour désactiver ce mode de navigation, faites un clic droit sur l'icone de NVDA dans la barre windows à côté de l'heure. Puis aller dans *préférences &gt;&gt; paramètres* de la souris et désactiver la case \&quot;activer le suivi de la souris\&quot;.  Enfin, il est conseillé de modifier le mode de lecture par défaut. Pour cela, se positionner sur une page web et utiliser le raccourci clavier suivant `INS+v` pour désactiver la \&quot;disposition telle qu'à l'écran\&quot; puis enregistrer cette configuration par défaut à l'aide du raccourci `INS+Ctrl+c`.   "
});

documentTitles["methodes-outils-lecteur-ecran.html#navigation-dans-les-pages-web"] = "Navigation dans les pages Web";
index.add({
    url: "methodes-outils-lecteur-ecran.html#navigation-dans-les-pages-web",
    title: "Navigation dans les pages Web",    
    body: "### Navigation dans les pages Web  Voici les principaux raccourcis utiles pour tester la navigation au sein d'une page web à l'aide de NVDA : - `flèche haut` et `flèche bas` pour avancer ou reculer dans la lecture de la page. - `flèche droite` et `flèche gauche` pour avancer ou reculer d'un caractère - `Ctrl+Home` pour se déplacer en haut de la page. - `Ctrl+End` pour se déplacer en bas de la page. - `INS+F7` pour afficher la liste des titres et la liste des liens. - `Ctrl` pour faire taire NVDA. - `INS+T` pour faire lire le titre de la page. - `H` et `maj+H` pour passer au titre suivant ou au titre précédent (balises de titres `H1` à `H6`). - `B` et `maj+B` pour passer d'un bouton à l'autre. - `C` et `maj+C` pour passer d'une liste déroulante à une autre (Combobox). - `D` et `maj+D` pour naviguer parmis les landmark ARIA. - `E` et `maj+E` pour naviguer parmis les champs de texte. - `F` et `maj+F` pour naviguer parmis les formulaires. - `G` et `maj+G` pour naviguer parmis les images (Graphics). - `I` et `maj+I` pour naviguer parmis les éléments d'une liste HTML. - `K` et `maj+K` pour naviguer parmis les liens. - `L` et `maj+L` pour naviguer parmis les listes HTML. - `M` et `maj+M` pour naviguer parmis les frames et iframes. - `O` et `maj+M` pour naviguer parmis les objets intégrés (flash). Appuyer sur INS+espace pour commencer l'interraction. Echap pour terminer l'interraction. - `Q` et `maj+Q` pour naviguer parmis les citations (blockquote). - `R` et `maj+R` pour naviguer parmis les boutons radio. - `T` et `maj+T` pour naviguer parmis les tableaux (table). - `X` et `maj+X` pour naviguer parmis les cases à cocher. - `Barre espace` pour cocher ou décocher une case à cocher. - `INS+maj+S` permet de mettre en veille NVDA uniquement dans l'application en cours. - `INS+Q` pour quitter NVDA.  A noter également que NVDA dispose d'une visionneuse de parole (*outils &gt;&gt; visionneuse de parole*), celle-ci permet d'afficher tout ce qui est vocalisé.  "
});

documentTitles["methodes-outils-lecteur-ecran.html#prise-en-main-de-jaws"] = "Prise en main de Jaws";
index.add({
    url: "methodes-outils-lecteur-ecran.html#prise-en-main-de-jaws",
    title: "Prise en main de Jaws",    
    body: "## Prise en main de Jaws  Jaws est un lecteur d'écran payant très utilisé, disponible pour Windows. Il est à utiliser en priorité avec Internet Explorer. En mode démonstration, vous pouvez l'utiliser 40 min, après quoi il faudra redémarrer votre ordinateur pour l'utiliser à nouveau.  "
});

documentTitles["methodes-outils-lecteur-ecran.html#installation"] = "Installation";
index.add({
    url: "methodes-outils-lecteur-ecran.html#installation",
    title: "Installation",    
    body: "### Installation   Vous pouvez télécharger Jaws directement depuis [le site de l'éditeur Freedom Scientific](http://www.freedomscientific.com/Downloads/JAWS).  "
});

documentTitles["methodes-outils-lecteur-ecran.html#navigation-dans-les-pages-web"] = "Navigation dans les pages Web";
index.add({
    url: "methodes-outils-lecteur-ecran.html#navigation-dans-les-pages-web",
    title: "Navigation dans les pages Web",    
    body: "### Navigation dans les pages Web  Voici les principaux raccourcis utiles pour tester la navigation au sein d'une page web à l'aide de Jaws : - `flèche haut` et `flèche bas` pour avancer ou reculer dans la lecture de la page. - `INS + T` pour faire lire le titre de la page. - `INS + F5` pour afficher la liste des champs de formulaire. - `INS + F6` pour afficher la liste des titres de la page. - `INS + F7` pour afficher la liste des liens. - `Barre espace` pour cocher ou décocher une case à cocher. - `Ctrl` pour faire taire Jaws.  "
});

documentTitles["methodes-outils-lecteur-ecran.html#prise-en-main-de-voiceover"] = "Prise en main de Voiceover";
index.add({
    url: "methodes-outils-lecteur-ecran.html#prise-en-main-de-voiceover",
    title: "Prise en main de Voiceover",    
    body: "## Prise en main de Voiceover  Voiceover est le lecteur d'écran disponible sur Mac. Celui-ci nécessite aucune installation puisqu'il est intégré directement au système.   Pour pouvez activer voiceover depuis les préférences systèmes &gt;&gt; accessibilité. Ou directement en utilisant le raccourci `Commande + F5`.  "
});

documentTitles["methodes-outils-lecteur-ecran.html#navigation-dans-les-pages-web"] = "Navigation dans les pages web";
index.add({
    url: "methodes-outils-lecteur-ecran.html#navigation-dans-les-pages-web",
    title: "Navigation dans les pages web",    
    body: "### Navigation dans les pages web  Au démarrage de voiceover, celui-ci propose un guide interactif permettant d'apprendre les principaux raccourcis clavier. Il est recommandé de le parcourir.   Voici néanmoins les raccourcis principaux : - `Ctrl + Option + flèche droite` et `Ctrl + Option + flèche gauche` pour avancer ou reculer dans la lecture de la page. - `Ctrl + Option + U` pour accéder à la liste des titres, liens, champs de formulaires ... (utiliser les flèches gauche et droite pour naviguer entre les différentes listes).  - `Ctrl` pour faire taire Voiceover. - `Ctrl + Option` &lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2016  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt;"
});



documentTitles["methodes-outils-extensions.html#extensions-pour-navigateur"] = "Extensions pour navigateur";
index.add({
    url: "methodes-outils-extensions.html#extensions-pour-navigateur",
    title: "Extensions pour navigateur",    
    body: "# Extensions pour navigateur  &lt;script&gt;$(document).ready(function () {     setBreadcrumb([         {\&quot;label\&quot;:\&quot;Outils de test\&quot;, \&quot;url\&quot;: \&quot;./methodes-outils.html\&quot;},         {\&quot;label\&quot;:\&quot;Extensions pour navigateur\&quot;}]); });&lt;/script&gt;  &lt;span data-menuitem=\&quot;methodes-outils\&quot;&gt;&lt;/span&gt;  Certaines extensions permettent d'effectuer des tests automatiques sur la page en cours de consultation.  "
});

documentTitles["methodes-outils-extensions.html#axe-accessibility-audit"] = "aXe accessibility audit";
index.add({
    url: "methodes-outils-extensions.html#axe-accessibility-audit",
    title: "aXe accessibility audit",    
    body: "## aXe accessibility audit [aXe](http://www.deque.com/products/axe/) est une extension disponible pour Chrome et Firefox permettant d'effectuer une série de tests basés sur les [WCAG](https://www.w3.org/WAI/intro/wcag).  ![capture d'écran de l'extension axe](images/aXe.png) &amp;nbsp;  "
});

documentTitles["methodes-outils-extensions.html#wave-toolbar"] = "Wave toolbar";
index.add({
    url: "methodes-outils-extensions.html#wave-toolbar",
    title: "Wave toolbar",    
    body: "## Wave toolbar [Wave toolbar](http://wave.webaim.org/extension/) est une barre d'extension pour Chrome. Tout comme aXe, elle permet d'effectuer une série de tests d'accessibilité sur la page en cours. A la différence de ce dernier qui affiche les erreurs dans un onglet de l'inspecteur web, ici les erreurs sont affichées directement dans la page. Il existe un [bookmarklet (ou favlet) pour Wave](http://wave.webaim.org/help).  ![capture d'écran de l'extension wave toolbar](images/wave.png)  &lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2016  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt;"
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
    body: "## Comment on teste ?  Une des recommandations d'accessibilité est la possibilité pour l'utilisateur d'agrandir la taille du texte à 200%. Il s'agit bien d'agrandir uniquement le texte et non l'ensemble de la page. En effet, si vous utilisez le zoom par défaut du navigateur, toute la page est agrandie ce qui entraîne l'apparition systématique d'ascenseurs horizontaux et verticaux. La lecture d'un article de blog par exemple devient fastidieuse puisqu'il faut jouer constamment avec l'ascenseur horizontal.  L'agrandissement du texte seul, n'entraîne pas systématiquement l'apparition de barres de défilement horizontale. Vous devez vérifier qu'a ce niveau de zoom (200%), le texte reste lisible. Aucun texte ne doit être tronqué, ni superposé. L'information doit rester accessible même si la présentation peut être quelque peu altérée,   Pour agrandir le texte uniquement, il faut cocher l'option \&quot;zoom texte seulement\&quot; dans Firefox. Pour agrandir le texte de 200%, faire `Ctrl+` quatre fois.     ![capture d'écran de l'option zoom texte seulement, dans Firefox](images/zoom-firefox.png)   "
});

documentTitles["methodes-outils-zoom.html#quelles-consequences-sur-le-developpement"] = "Quelles conséquences sur le développement ?";
index.add({
    url: "methodes-outils-zoom.html#quelles-consequences-sur-le-developpement",
    title: "Quelles conséquences sur le développement ?",    
    body: "## Quelles conséquences sur le développement ?  Si votre page ne s'affiche pas correctement lorsque vous agrandissez le texte, il se peut que ceci soit lié à l'utilisation du pixel comme unité pour dimensionner la taille des textes et la taille des éléments (hauteur ou largeur des `div`...). Pour corriger les problèmes d'affichage lorsque le zoom est à 200%, il ne s'agit pas nécessairement de tout revoir et de supprimer les pixels définitivement. L'idée est de revoir uniquement les éléments qui posent un problème (remplacer les px par des em, rem ou %).  ** Exemple zoom à 100% **   ![capture d'une page avec zoom à 100%](images/zoom.png)  &amp;nbsp;  ** Exemple zoom à 200% et taille en pixel**   La hauteur des éléments n'étant pas fonction de la taille du texte, ceux-ci ne s'agrandissent pas.  ![capture d'une page avec zoom à 100%](images/zoom-ko.png)  &amp;nbsp;    ** Exemple zoom à 200% et hauteur des éléments en unités relatives (rem)**   La hauteur des éléments contenant le texte a été renseignée avec une unité relative qui varie en fonction de la taille du texte (rem). Les éléments s'agrandissent, le texte reste lisible.  ![capture d'une page avec zoom à 100%](images/zoom-ok.png)  &amp;nbsp; Plus d'information dans la rubrique **exemples** : [gestion de l'agrandissement de la taille du texte à 200%](exemples/zoom/index.html).    &amp;nbsp;   &lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2016  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt;"
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
    body: "## Les bases  - [Masquage accessible](exemples/masquage/index.html)  - [Gestion des formulaires](exemples/formulaire/index.html)  - [Gestion du zoom, agrandissement de la taille du texte](exemples/zoom/index.html)  "
});

documentTitles["exemples.html#niveau-intermediaire"] = "Niveau intermédiaire";
index.add({
    url: "exemples.html#niveau-intermediaire",
    title: "Niveau intermédiaire",    
    body: "## Niveau intermédiaire  - [Les boites de dialogue 1/2](exemples/role-dialog/role-dialog.html)    - [Les boites de dialogue 2/2](exemples/role-dialog2/role-dialog.html) 	 - [Menu déroulant](exemples/simple-menu/simple-menu.html)   	 - [Barre d'avancement étape par étape (stepbar)](exemples/stepbar/stepbar.html)  "
});

documentTitles["exemples.html#niveau-avance"] = "Niveau avancé";
index.add({
    url: "exemples.html#niveau-avance",
    title: "Niveau avancé",    
    body: "## Niveau avancé  - [Les listes ARIA (listbox) 1/3](exemples/listbox/index.html)   - [Les listes ARIA (listbox) 2/3 (avec cases à cocher)](exemples/check-listbox/index.html)  - [Les listbox et patterns ARIA 3/3 (navigation au clavier)](exemples/listbox-pattern-aria/index.html)  - [Explorateur de fichiers (cloud)](exemples/files/index.html)  - [Les régions vivantes (live regions), contenu dynamique, gestion du focus et ARIA ](exemples/dynFocus/index.html) &lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2016  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt;"
});



documentTitles["contact.html#votre-avis-compte"] = "Votre avis compte";
index.add({
    url: "contact.html#votre-avis-compte",
    title: "Votre avis compte",    
    body: "# Votre avis compte    &lt;script&gt;$(document).ready(function () {     setBreadcrumb([{\&quot;label\&quot;:\&quot;Contact\&quot;}]); });&lt;/script&gt;  Vous avez une remarque, une suggestion à apporter ?    Vérifiez que ceci n'a pas déjà été remonté par quelqu'un d'autre en consultant [la liste des \&quot;issues\&quot;](https://github.com/Orange-OpenSource/a11y-guidelines/issues) sur notre compte github.   Si vous ne trouvez rien concernant votre remarque, [adressez-nous votre commentaire](https://github.com/Orange-OpenSource/a11y-guidelines/issues/new) via github. &lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2016  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt;"
});



documentTitles["about.html#a-propos"] = "A propos";
index.add({
    url: "about.html#a-propos",
    title: "A propos",    
    body: "# A propos     &lt;script&gt;$(document).ready(function () {     setBreadcrumb([{\&quot;label\&quot;:\&quot;A propos\&quot;}]); });&lt;/script&gt;  Documentation sous [licence CC BY 3.0](https://github.com/Orange-OpenSource/a11y-guidelines/blob/master/LICENSE). Le code source de ce site ainsi que celui des exemples est disponible [sur notre compte github](https://github.com/Orange-OpenSource/a11y-guidelines).    Le logo Orange ainsi que certaines images et captures sont la propriété d'Orange:    Copyright (C) 2016 Orange SA All rights reserved   [Liste des fichiers concernés](/notice.txt)   &lt;!--  This file is part of a11y-guidelines | Our vision of mobile &amp; web accessibility guidelines and best practices, with valid/invalid examples.  Copyright (C) 2016  Orange SA  See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). --&gt;"
});


