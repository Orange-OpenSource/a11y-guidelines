# Critères incontournables pour le développement

<script>$(document).ready(function () {
    setBreadcrumb([
        {"label":"Critères incontournables", "url": "./fondamentaux.html"},
        {"label":"Critères incontournables pour le développement"}
    ]);
    addSubMenu([
        {"label":"La conception", "url":"fondamentaux-nontech.html"}, 
        {"label":"Le développement", "url":"fondamentaux.html", "expanded":true}
    ]);
});</script>

<span data-menuitem="fondamentaux"></span>

## 1. Donner un titre aux pages  

**Cible&nbsp;: ** tout le monde, et en particulier les personnes déficientes visuelles.  
**Quand&nbsp;: ** dès la conception et pendant le développement.

**Description&nbsp;: **  
Donner à chaque page un titre qui lui est spécifique et qui reflète son contenu ou sa fonction (balise `<title>`).  
Le titre de la page est le premier élément lu par la synthèse vocale, il doit permettre d’identifier formellement la page sur laquelle on se trouve.

**À vérifier&nbsp;: **
- Bien qu’il n’y ait pas de règle, en général, on va de l’information la plus spécifique vers la moins spécifique (ex.&nbsp;: nom de la page courante - nom du site). Dans d’autres contextes d’utilisation pour lesquels l’utilisateur a de nombreuses applications ou sites ouverts en même temps, il vaut mieux aller de l’information la plus générale vers la plus spécifique (ex.: nom du site - nom de la page).
- Lorsque le contenu de la page est modifié dynamiquement (affichage du résultat d’une recherche, erreurs dans un formulaire, action utilisateur ajoutant du contenu…), le titre de la page doit refléter cette modification du contenu.

**Objectif utilisateur&nbsp;: **  
Permettre aux utilisateurs d’identifier le sujet d’une page, de se repérer et se faire une idée précise du contenu de la page sans avoir à le lire. C’est, notamment, le premier élément vocalisé par un lecteur d’écran.

**Exemple valide&nbsp;: **      
`<title>Accueil - Espace client Orange</title>`        
 
**Exemple non-valide&nbsp;:**      
`<title>Accueil</title>`

**Référence&nbsp;: ** WCAG 2.4.2

## 2. Donner des titres aux rubriques

**Cible&nbsp;: ** tout le monde, et en particulier les personnes déficientes cognitives, avec des difficultés pour lire et déficientes visuelles.  
**Quand&nbsp;: ** dès la conception, à la rédaction du contenu et pendant le développement.

**Description&nbsp;: **  
Identifier les balises de titres à utiliser (balises <abbr>HTML</abbr> `h1` jusqu’à `h6`) pour structurer le contenu des pages.
Les personnes malvoyantes naviguant à l’aide d’un lecteur d’écran peuvent accéder à la liste des titres de la page pour naviguer rapidement. 
Tout comme dans un fichier Word, il est possible d’utiliser la table des matières si des titres ont correctement été positionnés à l’intérieur du document. 

**À vérifier&nbsp;: **

- Les titres doivent être pertinents et non vides.
- Il ne doit pas exister de saut dans la hiérarchie des titres (on ne passe pas directement d’un titre `h2` à un titre `h4`).
- On peut mettre plusieurs `h1` par page (se limiter tout de même à deux dans la majorité des cas).
- Les lecteurs d’écran ne prennent pas en compte les titres masqués (`visibility: hidden;`, `display: none;` ou `aria-hidden`).
- Le contenu généré dynamiquement doit aussi respecter cette exigence.

**Objectif utilisateur&nbsp;: **
- Pour tous les utilisateurs&nbsp;: améliorer la structure de la page et de son contenu. 
- Pour les utilisateurs déficients visuels, déficients cognitifs et difficultés de lecture&nbsp;: faciliter la navigation et l’accès au contenu.

**Objectif technique&nbsp;: **
- Pour les moteurs de recherche&nbsp;: améliorer le référencement.

**Exemple valide&nbsp;: **   
   
Un titrage de page cohérent et pertinent&nbsp;:

```html
<h1>Accueil – Orange</h1>
    <h2>Les actualités</h2>
    <h2>La fibre arrive&nbsp;!</h2>
        <h3>Êtes-vous éligible&nbsp;?</h3>
```
 
**Exemple non-valide&nbsp;: **      
Un titrage de page avec un saut de niveau h2->h4&nbsp;:

```html
<h1>Accueil – Orange</h1>
    <h2>Les actualités</h2>
    <h2>La fibre arrive&nbsp;!</h2>
        <h4>Êtes-vous éligible&nbsp;?</h4>
```
   
**Outil :**  
L’extension [HeadingsMaps](https://www.learningapps.co.uk/moodle/xertetoolkits/play.php?template_id=1309), disponible pour [Chrome](https://chrome.google.com/webstore/detail/headingsmap/flbjommegcjonpdmenkdiocclhjacmbi?hl=fr) et [Firefox](https://addons.mozilla.org/fr/firefox/addon/headingsmap/), permet d’extraire les titres et de les visualiser sous forme de plan de document.

**Référence&nbsp;:** WCAG 1.3.1

## 3. Assurer un contraste suffisant entre texte et fond

**Cible&nbsp;: ** tout le monde, en particulier les utilisateurs sur mobile et tablette, les personnes malvoyantes, éprouvant des difficultés de lecture ou avec un déficit d’attention et les seniors.   
**Quand&nbsp;: ** dès la phase de conception et lors du développement.

**Description&nbsp;: **  
Le niveau de contraste entre le texte et l’arrière-plan doit être suffisamment élevé.
Un niveau de contraste insuffisant sera préjudiciable pour les utilisateurs ayant des difficultés visuelles ainsi que pour les utilisateurs de mobiles et tablettes se trouvant dans un environnement très lumineux.

**Exemple non valide&nbsp;: **  
Le texte «&nbsp;film | 20h40…&nbsp;» ne présente pas un contraste suffisant. Celui-ci ne sera pas lisible par tous les utilisateurs.  

![capture d’écran présentant du texte dont le contraste n’est pas suffisant](images/contraste.png)

**À vérifier&nbsp;: **

- Le contraste entre la couleur du fond et celle du texte doit être 4.5:1 minimum et ceci également pour du texte sous forme d’image porteur d’information.
- Pour des applications principalement utilisées en web mobile ou en mobilité, le niveau de contraste des principaux éléments doit être de 7:1 afin d’assurer une bonne lisibilité pour tous.
- Les liens doivent être facilement identifiables par rapport au reste du texte.

**Objectif utilisateur&nbsp;: **

Faciliter la lecture à tous les utilisateurs, déficients visuels ou personnes dans un environnement lumineux défavorable (en mobilité).

**Outil&nbsp;: **  
L’application [<i lang="en">Colour Contrast Analyser</i>](http://www.paciellogroup.com/resources/contrastanalyser/) permet de mesurer rapidement des niveaux de contraste de couleurs (gratuit pour Mac et Windows).  

**Référence&nbsp;:** WCAG 1.4.3

## 4. Ne pas utiliser la couleur ou l’information sensorielle comme seule source d’information

**Cible&nbsp;: ** tout le monde, en particulier les daltoniens et plus généralement les personnes malvoyantes ou ayant une déficience cognitive, auditive et les seniors.  
**Quand&nbsp;: ** dès la phase de conception et lors du développement.

**Description&nbsp;: **  
Ne pas utiliser la couleur ou une information sensorielle (forme, taille, son, orientation, localisation visuelle…) comme la seule façon de véhiculer de l’information, d’indiquer une action, de solliciter une réponse ou de distinguer un élément. L’information fournie par un changement de couleur ou une information sensorielle doit être complétée par une information textuelle (alternative) ou/et structuration sémantique.

**À vérifier&nbsp;: **
- Faire une capture d’écran et la passer en noir et blanc. La perte des couleurs ne doit pas entraîner de difficulté dans la navigation, ni provoquer de perte d’information.
- Couper le son, le niveau d’information doit rester identique. 

**Objectif utilisateur&nbsp;: **

Permettre aux utilisateurs ne distinguant pas les couleurs ou l’information sensorielle (les daltoniens, déficients visuels, déficients auditifs, utilisateurs de mobile en luminosité extérieure, en milieu bruyant…), d’accéder tout de même à l’information par d’autres moyens.

**Exemple&nbsp;:**      
Pour un graphique type camembert, où chaque partie est colorée différemment, ajouter par exemple une texture différente pour les identifier sans la couleur.
 
**Exemple valide&nbsp;:**  
![Exemple d’image valide n’utilisant pas que la couleur pour transmettre l’information](./images/couleur-ok.png)

**Exemple non-valide&nbsp;:**  
![Exemple non-valide utilisant uniquement des voyants de couleur pour transmettre l’information](./images/couleur-ko.png)

Cet exemple n’est pas valide, car l’information est transmise uniquement par la couleur.

**Référence&nbsp;:** WCAG 1.4.1

## 5. Respecter la sémantique HTML

**Cible&nbsp;: ** tout le monde, et en particulier les personnes déficientes visuelles, avec des déficiences cognitives.  
**Quand&nbsp;: ** dès la conception et à la rédaction du contenu.

**Description&nbsp;: ** 
Utiliser correctement les éléments HTML en respectant ce pourquoi ils sont faits (spécifications) et donc leur sémantique afin qu’ils puissent être interprétés efficacement par les aides techniques.

**À vérifier&nbsp;: ** 
Vérifier que la page, si besoin, utilise des listes sémantiquement pertinentes (pas de liste vides ou contenant qu'un seul élément)&nbsp;:
 - `<ol>` pour les listes ordonnées,
 - `<ul>` pour les listes non ordonnées,
 - `<li>` pour les éléments de liste.
S’assurer que les titres de rubriques sont bien des titres (i.e. titres insérés dans une balise h et hiérarchisés de h1 à h6) pour plus de détails : Donner des titres aux rubriques afin de structurer le contenu de la page.
S'assurer de bien baiser les citation longues `<blockquote>` ou brèves `<q>`.
•S’assurer que les liens sont bien des liens (i.e. balise `<a>`),  et qu’ils pointent effectivement vers une autre adresse, page ou onglet…
S’assurer que les boutons sont bien des boutons (i.e. balise button, ou input type=button), et qu’ils déclenchent une action, une validation, ou encore permettent de faire un choix…
Penser à respecter l’apparence classique de ces éléments pour ne pas perturber l’utilisateur habitué à un aspect spécifique de ceux-ci.

** Objectif utilisateur&nbsp;: **
Permettre à tous les utilisateurs d’anticiper la manière d’utiliser et les comportements possibles pour un élément d’interface donné.

**Objectif technique&nbsp;: ** 
Oblige à la structuration cohérente du contenu par le créateur du site.

**Exemple non-valide&nbsp;: **
![Exemple non-valide de mauvaise utilisation d 'un lien](./images/nv-semantiq.jpg)
Dans cet exemple, le lien « Actualiser » devrait être un bouton « Actualiser » car ici il déclenche une action et non le chargement d’une URL (page).


**Référence&nbsp;: ** WCAG 1.3.1

## 6. Séparer le contenu de l’interactivité et de la présentation

**Cible&nbsp;: ** tout le monde, et en particulier les personnes déficientes visuelles, avec des difficultés pour lire ou avec un déficit d’attention.  
**Quand&nbsp;: ** lors du développement.

**Description&nbsp;: **

Séparer strictement le contenu (<abbr>HTML</abbr>), l’interactivité (Javascript) et la présentation (<abbr>CSS</abbr>). 

**À vérifier&nbsp;: **

- Ne pas faire de mise en pages en tableaux, ceux-ci étant réservés aux données tabulaires. 
- Éviter d’utiliser des images pour afficher du texte, préférer les habillages <abbr>CSS</abbr>.
- Utiliser des classes <abbr>CSS</abbr> plutôt que manipuler des styles <abbr>CSS</abbr> en ligne dans le code <abbr>HTML</abbr>.
- Ne pas utiliser les pseudo éléments <abbr>CSS</abbr> (::before,&nbsp;::after…) pour afficher du contenu porteur d’information
- Ne pas câbler des événements Javascript directement dans le code <abbr>HTML</abbr> mais gérer l’interactivité dans un script ou un fichier JS à part.

**Objectif utilisateur&nbsp;: **

Permettre aux utilisateurs, via leur agent utilisateur ou aide technique (par exemple, leur navigateur), de modifier le rendu visuel de la page (grossissement, couleur, position…). Par exemple, de grossir le texte sans problème de mise en pages.

**Objectif technique&nbsp;: **

Améliore globalement la maintenabilité.

**Référence&nbsp;:** WCAG 1.3.1, 1.4.5

## 7. Valider le code HTML

**Cible&nbsp;: ** tout le monde.  
**Quand&nbsp;: ** pendant et à la fin du développement.

**Description&nbsp;: **  

Valider la syntaxe du code HTML (notamment l'absence de balise non fermée, d'id dupliqué…).

**À vérifier&nbsp;: **

Dans le code <abbr>HTML</abbr> s’assurer que&nbsp;:
- les éléments ont des balises de début et de fin,
- les éléments sont imbriqués conformément à leurs spécifications,
- les éléments ne contiennent pas d’attributs dupliqués,
- chaque `ID` est unique.

**Objectif utilisateur&nbsp;: ** 

Des erreurs de validation peuvent empêcher l’accès à certains contenus. 

**Objectif technique&nbsp;: ** 

- Assurer l’interopérabilité, la maintenabilité du code <abbr>HTML</abbr>.
- Accroître la compatibilité avec les aides techniques.

**Référence&nbsp;:** WCAG 4.1.1  

**Outil&nbsp;: ** [validateur <abbr>HTML</abbr> et <abbr>CSS</abbr> du <abbr>W3c</abbr>](https://validator.w3.org/)

## 8. Indiquer la langue principale et les changements de langue

**Cible&nbsp;: ** pour tous, et en particulier les personnes déficientes visuelles.  
**Quand&nbsp;: ** lors du le développement.

**Description&nbsp;: **  

Spécifier la langue principale du document grâce à l’attribut `lang` dans la balise `html`. 
Préciser également la langue d’un contenu exprimé dans une langue autre que la langue principale, en utilisant l’attribut `lang` dans l’élément <abbr>HTML</abbr> contenant l’expression en langue étrangère.  

**À vérifier&nbsp;: **

Pour les mots ou les expressions en langue étrangère passés dans l’usage courant (Google, newsletter…) ou les noms propres, ne pas indiquer de changement de langue.

**Objectif utilisateur&nbsp;: **

Cet attribut permet d’indiquer à la synthèse vocale la langue à utiliser.

**Objectif technique&nbsp;: ** 

Permettre aux moteurs de recherche d’identifier la langue d’une page pour améliorer le référencement naturel.  

**Exemple pour une page en français&nbsp;:**  

- pour du <abbr>HTML</abbr>&nbsp;: `<html lang="fr">`
- pour du <abbr>XHTML</abbr>&nbsp;: `<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="fr" lang="fr">`

**Exemple de changement de langue&nbsp;: **  
`découvrir Orange <span lang="en">live</span> TV`

**Référence&nbsp;: **WCAG 3.1.1, 3.1.2

## 9. Associer une étiquette pertinente à chaque champ de formulaire

**Cible&nbsp;: ** tout le monde, et en particulier les personnes déficientes visuelles et cognitives, avec un déficit d’attention et les utilisateurs de tactiles (mobile et tablette).  
**Quand&nbsp;: ** lors de la conception et lors du développement.

**Description&nbsp;: **  

Chaque champ de formulaire doit être accompagné d’un libellé permettant d’identifier le rôle du champ, le type de donnée et le format attendu. 

Le libellé doit être proche visuellement du champ afin qu’on fasse facilement le lien entre eux (notamment pour les utilisateurs de zoom ou de loupe logicielle, voire sur mobile).

Chaque libellé doit être inclus dans une balise `label`, elle-même associée au champ de formulaire grâce à un attribut `for` renseigné, reprenant la valeur de l’`id` du champ.

Dans certains cas, il semble inutile d’accompagner le champ de formulaire d’un libellé (champ de recherche accompagné d’un bouton en forme de loupe par exemple). Dans ce cas, prévoir tout de même un libellé, l’associer au champ de formulaire et le rendre invisible à l’écran (utiliser une classe de <a href="./exemples/masquage/index.html">masquage accessible</a>), ainsi celui-ci sera quand même vocalisé par les lecteurs d’écran.
L’attribut `title` positionné sur une balise de champ de formulaire peut faire également office de libellé tout comme les attributs `aria-label` et `aria-labelledby` dans cet ordre de préférence.

**À vérifier&nbsp;: **

S’assurer que le libellé du champ (étiquette) est suffisamment proche du champ associé.

Aligner tous les libellés à gauche lorsque le nombre de caractères séparant le libellé le plus long de celui le plus court ne dépasse pas 6 caractères, au-delà, aligner tous les libellés à droite.

Pour les boutons radio et les cases à cocher, l’utilisation de la balise `label` est, parfois, à compléter par un autre dispositif (`title`, `aria-labelledby`, `aria-label` ou `fieldset` et `legend`).
Pour les champs obligatoires, ceci doit être précisé dans le `label` via une image, un symbole texte (`*` par exemple) ou du texte et/ou une propriété `aria-required`.

**Objectif utilisateur&nbsp;: **

Ne pas respecter cette exigence est un point bloquant pour tout utilisateur de synthèse vocale mais aussi de loupe logicielle car il ne sait pas quelle valeur entrer dans les champs. Pour les utilisateurs de mobiles et les déficients moteurs, cela permet d’activer ou de cliquer plus facilement sur les éléments de formulaire.

**Exemple valide&nbsp;: **  
![capture d’écran d’un formulaire valide](images/formulaire.png)
![capture d’écran d’un formulaire label proche champ](images/v_label.jpg)
&nbsp;

**Exemple non-valide&nbsp;: **  
![capture d’écran d’un formulaire auquel il manque un label](images/formulaire2.png)
![capture d’écran d’un formulaire label loin du champ](images/nv_label.jpg)

&nbsp;  
**Exemple de formulaire accessible&nbsp;: **
  
Consulter [l’exemple de formulaire accessible](./exemples/formulaire/index.html) pour plus d’informations.

**Référence&nbsp;: **WCAG 3.3.2

## 10. Détecter, identifier les erreurs et suggérer des corrections

**Cible&nbsp;: ** tout le monde, et en particulier les personnes déficientes visuelles, cognitives, avec des difficultés pour lire ou ayant un déficit d’attention et les seniors.  
**Quand&nbsp;: ** lors de la conception et lors du développement.

**Description&nbsp;: ** 

Les erreurs sont automatiquement détectées, l’utilisateur est averti par la modification du titre de la page, l’élément de formulaire en erreur est identifié et l’erreur est décrite à l’utilisateur sous forme de texte. Si besoin, une correction est suggérée.

Enfin les libellés des messages d’erreur doivent être explicites.

**À vérifier&nbsp;: **

L’identification du champ en erreur ainsi qu’une éventuelle suggestion de correction peuvent être ajoutées dynamiquement à la balise `label`, en priorité, mais aussi à l’attribut `title` ou les attributs `aria-label` et `aria-labelledby` selon le contexte et les besoins.

**Objectif utilisateur&nbsp;: **

Guider l’utilisateur en cas d’erreurs permet d’améliorer la compréhension et la correction des erreurs, pour tous les utilisateurs, en particulier pour les novices sur internet, les seniors et les personnes déficientes cognitives.

**Exemple valide&nbsp;: **  
![capture d’écran d’un formulaire affichant des messages d’erreur à la saisie valides](images/formulaire-ok.png)  

**Exemple non-valide&nbsp;: **  
![capture d’écran d’un formulaire affichant des messages d’erreur à la saisie non-valides](images/formulaire-ko.png)

&nbsp;  
**Exemple de formulaire accessible&nbsp;: **
  
Consulter [l’exemple de formulaire accessible](./exemples/formulaire/index.html) pour plus d’informations.

**Référence&nbsp;: **WCAG 3.3.1, 3.3.3

## 11. Fournir un équivalent textuel pour les images et les cadres

**Cible&nbsp;: ** tout le monde, et en particulier les personnes déficientes visuelles ou cognitives.  
**Quand&nbsp;: ** lors de la conception et lors du développement.

**Description&nbsp;: ** 

Mettre, dans toute balise `img`, un attribut `alt` pertinent&nbsp;: 
- Pour les images cliquables&nbsp;: préciser la fonction&nbsp;/ la cible du lien dans l’attribut `alt`.
- Pour les images porteuses d’information&nbsp;: mettre un `alt` décrivant l’information contenue dans l’image.
- Pour les images contenant du texte&nbsp;: mettre un attribut `alt` reprenant au moins le texte de l’image.
- Pour les images décoratives&nbsp;: mettre un attribut `alt` vide.
- Pour les images dont le contenu du `alt` serait trop long (schémas, graphes…), mettre à proximité de l’image à décrire, sa description sous forme de texte dans la page ou, un lien pointant vers une page <abbr>HTML</abbr> contenant cette description.
Mettre un attribut `title` décrivant le contenu et/ou la fonction de toute `frame` ou `iframe`. Si la `frame` ou `iframe` ne porte pas d'information pour l'utilisateur (purement technique), la rendre invisible avec un `display:none` ou `aria-hidden='true'` et donc ne pas mettre de `title`.

**À vérifier&nbsp;: **

Toute balise `img` doit posséder un attribut `alt`.
Pour les images non-porteuses d’information, il est préférable de les passer en image de fond <abbr>CSS</abbr>.
Pour les graphes, la solution peut être de mettre un lien sous l’image permettant d’accéder à un tableau de chiffres (le faire apparaître dans la même page ou sur une autre page).

**Objectif utilisateur&nbsp;: **
Permettre l’accès à l’information incluse dans une image pour des utilisateurs qui n’y ont pas accès.
Point bloquant&nbsp;: une image sans description textuelle est inexploitable par des personnes ayant des déficiences visuelles ou celles n’affichant pas les images (mobile, faible bande passante…).

**Objectif technique&nbsp;: **

Améliorer le référencement naturel.

**Exemple valide&nbsp;:**      
`<a href="./home"><img src="logo_orange.jpg" alt="Retour à l’accueil"></a>`        
`<img src="banner_bouquet_famille.png" alt="Bon plan, bouquet famille max à 2 euros par mois pendant 12 mois au lieu de 16 euros.">`

**Exemple d’alternative vide&nbsp;:**  
Dans l’exemple ci-dessous, le picto à droite n’a pas besoin d’être vocalisé puisque le texte situé à gauche apporte déjà l’information.  
Renseigner l’attribut `alt` dans ce cas apporterait une information redondante.  

![exemple d’image décorative](./images/service-24.png)  
  
`<h3>Le service 24h garanti</h3>`  
`<img src="service-24.png" alt="">`

**Référence&nbsp;: **WCAG 1.1.1

## 12. Fournir un transcrit pour toute piste audio ou vidéo

**Cible&nbsp;: ** tout le monde, et en particulier les personnes déficientes visuelles, cognitives et auditives et celles qui maîtrisent mal le français.  
**Quand&nbsp;: ** lors de la conception et lors du développement.

**Description&nbsp;: ** 

Fournir, pour toute piste audio ou vidéo porteuse d’information, un transcrit complet dans la page elle-même ou grâce à un lien à proximité de la piste audio ou vidéo.

**À vérifier&nbsp;: **

Un transcrit complet est le texte contenant l’ensemble des informations visuelles et auditives porteuses de sens. 

**Objectif utilisateur&nbsp;: **

Fournir un moyen d’accès à l’information visuelle et auditive pour des personnes ne pouvant pas en bénéficier&nbsp;: malvoyants, aveugles, sourds, déficients cognitifs, ordinateur sans haut-parleurs, environnement lumineux ou bruyant.

**Objectif technique&nbsp;: **

Permet le référencement de tout contenu audio et vidéo.

**Référence&nbsp;: **WCAG 1.2.3

## 13. Structurer les tableaux de données

**Cible&nbsp;: ** tout le monde, et en particulier les personnes déficientes visuelles.  
**Quand&nbsp;: ** dès la phase de conception et lors du développement.

**Description&nbsp;: **

Pour des données tabulaires&nbsp;:
- Utiliser l’élément `table` avec les éléments enfants `th` (pour les cellules d’entêtes), `td`, `tr`.
- Utiliser l’attribut `scope` avec la valeur `row`/`col` pour associer les cellules d’en-têtes et les cellules de données ; pour des tableaux complexes, utiliser les attributs `id` et `headers`.
- Utiliser la balise `caption`, une balise `h1` à `h6` juste avant le tableau ou lier un texte proche du tableau via un attribut `aria-labelledby` dans l’élément `table` pour associer un titre au tableau.
- Mettre un attribut `summary` dans l’élément `table` pour expliciter la structure dans le cas d’un tableau complexe. Attention cet attribut est déprécié en <abbr>HTML</abbr>5, il faudra donc rajouter, si besoin, le contenu du `summary` dans le titre du tableau.

**À vérifier&nbsp;: **

- Rappel&nbsp;: ne pas utiliser de tableaux à des fins de mise en page. 
- La légende (`caption`) peut être remplacée par un titre de section (`hx`) placé avant le tableau. L’attribut `summary`, quant à lui, n’est nécessaire que pour des tableaux complexes.
- Préférer scinder un tableau complexe en plusieurs tableaux plus simples.
- Mettre un résumé (attribut `summary`) dans le tableau pour expliciter la structure dans le cas d’un tableau complexe.
- Les balises `tbody`, `tfoot` et `thead` n’ont aucune influence sur l’accessibilité, il n’y a donc pas d’obligation à les utiliser.

**Objectif utilisateur&nbsp;: **
Donner un résumé et un titre aux tableaux de données permet à tous d’en connaître l’objet rapidement sans avoir à le parcourir. Pour des utilisateurs déficients visuels, lier les cellules aux en-têtes permet de se situer dans le tableau et de comprendre les données de celui-ci.

**Référence&nbsp;:** WCAG 1.3.1

## 14. Utiliser des tailles relatives pour permettre le grossissement des textes

**Cible&nbsp;: ** tout le monde, et en particulier les personnes déficientes visuelles, en mobilité et seniors.  
**Quand&nbsp;: ** lors du développement.

**Description&nbsp;: **

N’utiliser pour les tailles de police que des tailles relatives (`em`, `rem`, `%`) et pour les éléments conteneurs permettant l’agrandissement du texte seul de 200%.

**À vérifier&nbsp;: **
- Ne pas utiliser le pixel (`px`) pour des tailles qui doivent pouvoir s’agrandir si l’on ne zoome que les textes.
- Les éléments de formulaire doivent, eux aussi, posséder des tailles relatives pour s’agrandir.
- Penser à rendre fluides les conteneurs des textes afin qu’ils puissent s’agrandir lorsque les textes sont zoomés.
- Dans Firefox, faire Affichage>Zoom>Zoom texte seulement, utiliser les réglages du zoom pour atteindre 200%. Vérifier qu’il n’y a pas de perte d’information (disparition ou chevauchement de texte).    

![capture d’écran réglage du zoom dans Firefox](./images/zoom-200.png)

**Objectif utilisateur&nbsp;: **
Permettre aux utilisateurs (malvoyants, en mobilité, seniors…) d’augmenter la taille du texte pour plus aisément accéder à l’information.

**Exemple&nbsp;:**  
Voir l’exemple [gestion du zoom, agrandissement de la taille du texte](./exemples/zoom/index.html) pour plus d’informations.

**Référence&nbsp;:** WCAG 1.4.4

## 15. Rendre l’intitulé des liens et des boutons compréhensibles hors contexte

**Cible&nbsp;: ** tout le monde, et en particulier les personnes déficientes visuelles, cognitives ou ayant un déficit d’attention.  
**Quand&nbsp;: ** dès la phase de conception et lors du développement.

**Description&nbsp;: **

Rendre les intitulés des liens et des boutons compréhensibles hors contexte en particulier les déficients visuels. Lors de la navigation avec un lecteur d’écran, il est possible d’accéder à la liste des liens de la page pour naviguer rapidement. Si votre page contient plusieurs liens «&nbsp;en savoir plus&nbsp;», il sera impossible de les différencier les uns des autres.  

S’il n’est pas possible de rendre un lien ou un bouton plus explicite, faute de place, mais que l’intitulé actuel est suffisant dans son contexte, cet intitulé peut être complété par un contenu supplétif caché ou en utilisant un attribut `aria-label` ou `aria-labelledby`, spécifiquement pour les utilisateurs qui naviguent à l’aide d’un lecteur d’écran.
Par exemple dans l’image ci-dessous, les deux éléments «&nbsp;valider&nbsp;» ne sont pas suffisamment explicites pour une personne utilisant un lecteur d’écran et ne bénéficiant pas obligatoirement du contexte. Par contre quand on voit l’écran, le contexte fait qu’il n’y a pas d’ambiguïté sur leur rôle.

![capture d’écran présentant deux liens valider dont le libellé doit être explicité](./images/liens-valider.png)

Dans ce cas, ajouter un `span` en <a href="./exemples/masquage/index.html">masquage accessible</a> pour compléter l’intitulé. Il ne sera pas affiché à l’écran mais sera vocalisé par les outils d’assistance.

**Exemple&nbsp;:**  
```html
<a href="…">valider<span class="masquage-accessible"> le paiement en plusieurs fois</span></a>
<a href="…">valider<span class="masquage-accessible"> le paiement en une seule fois</span></a>
```

Une autre solution consiste à utiliser un attribut `aria-label` ou `aria-labelledby` pour préciser l’intitulé.  
En complément de ces solutions, on pourrait ici également utiliser ** un attribut `title` ** pour faire apparaître une info-bulle «&nbsp;valider le paiement en plusieurs fois&nbsp;» au survol avec la souris.


**À vérifier&nbsp;: **
S'assurer que la sémantique HTML soit respectée&nbsp;:
- un lien permette de changer d'URL, de page, télécharger un ficher, faire apparaitre/disparaitre du contenu, aller à ancre.
- un bouton permette de soumettre/réinitialiser un formulaire, d'ouvrir une fenêtre modale, faire aparaitre un sous menu, piloter un media, déclencher une action via JS.
S’assurer que les liens et les boutons isolés du contenu donnent une bonne information sur l’action déclenchée ou sa destination.
Une page ne doit pas avoir plusieurs liens ou boutons dont l’intitulé est le même, mais pointant sur des destinations/actions différentes.

**Objectif utilisateur&nbsp;: **
Permettre à un utilisateur n’ayant pas accès au contexte visuel de connaître la destination du lien ou l'action du bouton. Notamment important pour les utilisateurs naviguant grâce à une liste de liens extraite de la page (lecteurs d’écran) ou les utilisateurs de loupe logicielle qui ne voient qu’une fraction de la page. 

**Objectif technique&nbsp;: **
Expliciter les liens et les boutons permet d’améliorer le référencement naturel.

**Exemple valide&nbsp;:**      
Associer à un lien «&nbsp;cliquer ici&nbsp;», un texte caché hors écran&nbsp;: «&nbsp;commander votre téléphone&nbsp;».
 
**Exemple non-valide&nbsp;:**      
Liens «&nbsp;Cliquez ici&nbsp;» ou «&nbsp;Lire la suite…&nbsp;» sans plus de précision.

**Référence&nbsp;:** WCAG 2.4.9

## 16. Prévenir l’utilisateur de l’ouverture d’une nouvelle fenêtre

**Cible&nbsp;: ** tout le monde, et en particulier les personnes déficientes visuelles, cognitives ou ayant un déficit d’attention.  
**Quand&nbsp;: ** dès la phase de conception et lors du développement.

**Description&nbsp;:**

Prévenir l’utilisateur de l’ouverture de toute nouvelle fenêtre en l’indiquant dans l’intitulé du lien. 
En cas d’impossibilité avérée, utiliser un icône (image avec un `alt`) en ajoutant l’indication d’ouverture d’une nouvelle fenêtre ou juste «&nbsp;nouvelle fenêtre&nbsp;».  
En dernier recours, un texte  en <a href="./exemples/masquage/index.html">masquage accessible</a> (hors écran).

**Exemple&nbsp;: **  
  
Exemple d’icône pouvant indiquer l’ouverture d’une nouvelle fenêtre.  
![capture d’écran d’un lien accompagné d’une icône indiquant l’ouverture d’une nouvelle fenêtre](./images/nouvelle-fenetre.png)  

**À vérifier&nbsp;: **
Pour tout lien ouvrant une nouvelle fenêtre ou un nouvel onglet, une mention du type «&nbsp;(nouvelle fenêtre)&nbsp;» est présente dans l’intitulé du lien, ou la mention «&nbsp;(nouvelle fenêtre)&nbsp;» est positionnée hors écran via <abbr>CSS</abbr> (<a href="./exemples/masquage/index.html">masquage accessible</a>).

**Objectif utilisateur&nbsp;: **
Éviter l’ouverture inattendue de fenêtre, car cela peut gêner, perturber ou désorienter l’utilisateur. En particulier, pour des personnes en mobilité, utilisant des synthèses vocales ou présentant des déficiences cognitives.

**Exemple valide&nbsp;:**      
Pour un lien pointant à l’extérieur du site et ouvrant une nouvelle fenêtre, l’intitulé du lien texte «&nbsp;Accéder au site orange.com (nouvelle fenêtre)&nbsp;».
Pour une image-lien, un attribut `alt="consulter les conditions générales d’utilisation (nouvelle fenêtre)"`.    
 
**Référence&nbsp;:** WCAG 3.2.2

## 17. Permettre d’utiliser les principales fonctionnalités de l’application au clavier

**Cible&nbsp;: ** tout le monde, et en particulier les personnes déficientes visuelles, motrices et en mobilité.  
**Quand&nbsp;: ** dès la phase de conception et lors du développement.

**Description&nbsp;: **
Mettre en place des gestionnaires d’événements qui ne s’appuient pas uniquement sur des événements souris. 

**À vérifier&nbsp;: **
Toutes les actions importantes effectuées à la souris peuvent aussi l’être avec le clavier, quitte à proposer une alternative spécifique pour les interactions complexes (<i lang="en">drag’n’drop</i>, gestes à plusieurs doigts sur mobile …).

**Objectif utilisateur&nbsp;: **
 Permettre aux utilisateurs qui ne peuvent pas utiliser la souris (non ou malvoyants, déficients moteurs, web mobile, en mobilité…) d’accéder aux fonctionnalités principales de l’application au clavier.

**Exemple valide&nbsp;:**      
- Un sous-menu qui se déroule au survol doit aussi se dérouler quand l’item de menu parent reçoit le focus clavier.
- Dans un webmail, un clic droit permet d’accéder à un menu pour vider la corbeille, un bouton «&nbsp;vider la corbeille&nbsp;» est également présent dans l’interface quand la corbeille est en cours de consultation. 
 
**Exemple non-valide&nbsp;:**      
Une fonctionnalité réalisable uniquement à l’aide du <i lang="en">drag’n'drop</i> et sans équivalent au clavier.

**Référence&nbsp;:** WCAG 2.1.1

## 18. Rendre le parcours du focus séquentiel et logique sans piège clavier

**Cible&nbsp;: ** tout le monde, et en particulier les personnes déficientes visuelles, motrices, cognitives et en mobilité.  
**Quand&nbsp;: ** lors du développement.

**Description&nbsp;: **

Les éléments (liens, boutons, éléments de formulaire) doivent recevoir le focus dans un ordre logique pour l’utilisateur, sans que celui-ci ne reste piégé ou bloqué, même pour du contenu généré dynamiquement apparaissant ou disparaissant (modification du DOM, Ajax,…). 

**À vérifier&nbsp;: **
- Pour valider cette exigence, la position du focus doit être visible à tout moment (propriété `outline` et `:focus` en <abbr>CSS</abbr>), voir exigence 19, ci-dessous.
- Attention à l’ordre d’insertion des éléments dans le code <abbr>HTML</abbr>, cela a une influence sur l’ordre de déplacement du focus. Un élément présent à la fin du code source mais positionné tout en haut de la page via <abbr>CSS</abbr> sera le dernier à recevoir le focus. 
- Pour la maintenabilité, éviter l’utilisation de l’attribut `tabindex` avec des valeurs supérieures à 0.
- Même lors d'apparition ou de disparition de contenu, il faut conserver ce parcours logique et séquentiel.

**Objectif utilisateur&nbsp;: **
Permettre la navigation logique sans piège au clavier dans les pages de l’application. Nécessaire pour les utilisateurs ne naviguant qu’au clavier (non ou malvoyants, déficients moteurs, déficients cognitifs, en mobilité).

**Exemple non-valide&nbsp;:**      
Une page contenant un lecteur vidéo dont le focus peut entrer à l’intérieur du lecteur, mais ne peut pas en sortir (piège clavier).        
 
**Référence&nbsp;:** WCAG 2.4.3, 2.1.2

## 19. Rendre visible le focus en toute circonstance

**Cible&nbsp;: ** tout le monde, et en particulier les personnes déficientes visuelles, motrices, cognitives, ayant un déficit d’attention et en mobilité.  
**Quand&nbsp;: ** dès la phase de conception et lors du développement.

**Description&nbsp;: **

Ne pas masquer le focus et si nécessaire accentuez sa visibilité sur tous les éléments focusables par exemple, en modifiant la propriété <abbr>CSS</abbr> `outline`.
Veiller à fournir un niveau de contraste suffisant pour que celui-ci soit visible par tous (cf. [mesurer le niveau de contraste des couleurs](methodes-outils-contrastes.html)).

Lorsqu’un effet est visible sur un élément au survol de la souris (`:hover` en <abbr>CSS</abbr> par exemple), cet effet doit être également affiché à la prise du focus (`:focus`).


**À vérifier&nbsp;: **
Dans beaucoup de <i lang="en">frameworks</i> <span lang="en">front</span> ou dans les <i lang="en">reset</i> <abbr>CSS</abbr>, la propriété `outline` (qui permet de visualiser le focus) est désactivée (`outline: none;`), penser à la redéfinir et vérifier que le focus est visible sur tous les éléments le recevant.

**Objectif utilisateur&nbsp;: **
Permettre la visibilité du focus sur tous les éléments actifs, notamment pour les utilisateurs de clavier (déficients visuels, moteurs ou ceux ayant des déficiences d’attention et de mémorisation ou en mobilité).

**Exemples valides&nbsp;: **  
Dans les captures d’écran suivantes, le focus est positionné sur le lien « 209 SMS/mois ».  
La première capture présente le comportement par défaut (focus représenté par des pointillés).
Dans la seconde capture, les pointillés ont été supprimés, mais un encadré permet d’indiquer de manière explicite l’emplacement du focus.  
![capture d’écran présentant l’affichage du focus par défaut](images/focus.png)
![capture d’écran présentant un comportement personnalisé pour l’affichage du focus](images/focus2.png)


**Référence&nbsp;:** WCAG 2.4.7

## 20. Fournir des liens d’évitement

**Cible&nbsp;: ** utile pour les utilisateurs de mobile et tablette, les personnes déficientes visuelles et les personnes souffrant de handicap moteur ou en mobilité.  
**Quand&nbsp;: ** dès la phase de conception et lors du développement.

**Description&nbsp;: **

Mettre en place des liens d’accès direct (liens d’évitement) permettant d’accéder aux principales zones de la page (navigation, contenu, pied de page, recherche…) grâce à des liens internes vers des ancres (balises `<a>` ou tout élément <abbr>HTML</abbr> possédant un attribut `id`). En cas de **fortes contraintes,** ces liens peuvent être cachés et affichés uniquement lors de la navigation clavier.

**À vérifier&nbsp;: **
Lorsqu’un lien d’évitement est activé, vérifier que le focus est bien déplacé (il ne s’agit pas uniquement de faire défiler la page au bon endroit).

**Objectif utilisateur&nbsp;: **
Faciliter la navigation pour des utilisateurs naviguant au clavier, des utilisateurs malvoyants, utilisateurs de loupe logicielle ou de téléphone mobile.
     
**Exemple&nbsp;: **  
Des liens d’évitement («&nbsp;Aller à la navigation&nbsp;», «&nbsp;Aller au contenu&nbsp;») sont disponibles sur ce site.
Pour les faire apparaître, placer le focus en haut de la page en cliquant sur la barre d’adresse de votre navigateur par exemple puis appuyer plusieurs fois sur la touche `TAB`.

![capture d’écran du site orange.com](images/skiplink.png)   

**Référence&nbsp;:** WCAG 2.4.1


## 21. Permettre le contrôle des animations
**Cible&nbsp;: ** les personnes malvoyantes, les personnes éprouvant des difficultés de lecture, d’attention ou de compréhension, les personnes épileptiques.  
**Quand&nbsp;: ** lors de la conception du service et lors de la conception graphique.

**Description&nbsp;:**  
Tout contenu en mouvement, mis à jour, clignotant doit pouvoir être stoppé, caché ou mis en pause par l’utilisateur.  
Par ailleurs, éviter autant que possible les flashs lumineux et les changements brusques de luminosité (cf. [Le logo des <abbr>JO</abbr> provoque des crises d’épilepsie](http://www.leparisien.fr/societe/le-logo-des-jo-provoque-des-crises-d-epilepsie-09-06-2007-2008107333.php)).
Il faut donc prévoir une pause au chargement de la page ou un moyen de stopper ou mettre en pause l’animation, la mise à jour ou le clignotement via un bouton par exemple.

**Exemple&nbsp;: **  
![capture d’écran d’un carrousel disposant d’un bouton pour mettre en pause l’animation](./images/carrousel.png)  

Un carrousel qui défile automatiquement doit se mettre en pause au survol de la souris ou lorsqu'il a le focus.  
Il est également possible d’ajouter un bouton «&nbsp;pause&nbsp;» directement dans l’interface.

**Référence&nbsp;:** WCAG 2.2.2

## 22. S’assurer que les principales fonctionnalités sont utilisables avec les lecteurs d’écran

**Cible&nbsp;: ** tout le monde, et en particulier les personnes déficientes visuelles.  
**Quand&nbsp;: **lors du développement.

**Description&nbsp;: **

Respecter les recommandations générales d’accessibilité, utiliser en priorité les composants standards <abbr>HTML</abbr>, sinon, utiliser <abbr>ARIA</abbr> (<i lang="en">Accessible Rich Internet Applications</i>) pour les composants d’interface complexes.


**À vérifier&nbsp;: **
S’assurer de l’absence de point bloquant avec les couples navigateur/lecteur d’écran (Firefox/<abbr>NVDA</abbr>, <abbr>IE</abbr>/Jaws, Safari/VoiceOver) dans les parcours utilisateurs (scénarios d’utilisation des principales fonctionnalités de l’application).
En effet, les utilisateurs de lecteur d’écran sont les plus impactés par un manque d’accessibilité, on repère un grand nombre de problèmes en vérifiant cette exigence.

**Objectif utilisateur&nbsp;: **
Permettre à l’utilisateur de lecteur d’écran d’accéder aux principales fonctionnalités de l’application, mais aussi s’assurer pour tous les utilisateurs de l’utilisabilité de l’application.

## 23. Gérer dynamiquement le focus lors d’une insertion ou d’une modification du contenu

**Cible&nbsp;: ** tout le monde, et en particulier les personnes déficientes visuelles, cognitives ou avec un trouble de l’attention.  
**Quand&nbsp;: **lors du développement.

**Description&nbsp;: **
Lorsqu’un élément est affiché suite à une interaction de l’utilisateur&nbsp;: 
- celui-ci doit apparaître dans le code source juste après l’élément déclenchant (exemple&nbsp;: menu dépliant), 
- et/ou le focus doit être déplacé sur un des premiers éléments du contenu généré (lien, bouton, titre, paragraphe…).  
   
Lors de la disparition de contenu, le focus doit être redonné à l’élément déclenchant ou, si c'est impossible, positionné juste avant le contenu qui a disparu.  
Par exemple à la fermeture d’une boîte de dialogue, le focus doit être repositionné sur l’élément qui a déclenché l’ouverture (bouton, lien, …).

Pour rappel&nbsp;: le contenu dynamiquement généré doit être accessible et donc respecter tous les critères d’accessibilité.  
Il existe plusieurs solutions pour prévenir l’utilisateur en cas d’apparition/disparition de contenu&nbsp;:
- via du texte,
- en déplaçant le focus,
- en utilisant de l’<abbr>ARIA</abbr>.

Voir [l’exemple de menu déroulant](./exemples/simple-menu/simple-menu.html) pour la mise en pratique de l’attribut `aria-haspopup`.

**À vérifier&nbsp;: **
- Le déplacement du focus s’effectue de manière logique (ordre de lecture naturel).
- L’ordre de lecture n’a pas été redéfini en utilisant des attributs `tabindex` (avec des valeurs positives).
  
En pratique, l’attribut `tabindex` ne devrait être utilisé qu’avec deux valeurs&nbsp;:
- `tabindex="-1"`&nbsp;: pour interdire à un élément de recevoir le focus via la touche `TAB` et l’autoriser à recevoir le focus via Javascript.
- `tabindex="0"`&nbsp;: pour rendre un élément focusable via la touche `TAB` et via Javascript.

**Objectif utilisateur&nbsp;: **
Permettre à l’utilisateur, par exemple non ou malvoyant, de repérer l’apparition de nouveaux contenus et d’interagir avec ceux-ci.  

**Exemple valide&nbsp;:**

Menu replié : 

![capture d’écran d'un menu replié](images/v_gererFocus1.jpg)  

Menu déplié :

![capture d’écran d'un menu déplié](images/v_gererFocus2.jpg)  

Sur ce site, le menu principal de navigation est fermé par défaut et une mention « menu fermé » est mis en alternative de l’icone hamburger pour les malvoyants. Lors de son ouverture, l’icone hamburger se change en croix (permettant la fermeture du menu) et donc l’alternative est dès lors « fermer le menu ». 

De plus, le focus est positionné directement sur le premier item du menu apparu, c'est la bonne manière de gérer le focus pour ce type de menu dépliant.

**Exemple non-valide&nbsp;:** 

![capture d’écran de résultats d'une recherche dynamique](images/nv_gererFocus.jpg)  

Sur ce site, la recherche est dynamique, elle se met à jour dès que l’utilisateur active (sélectionne) un filtre ou qu’il tape « entrée » après avoir saisi un mot clé. Le problème est que la région qui affiche dynamiquement les résultats est très éloignée de la zone de critères de recherche. Il est donc difficile voire impossible pour certains utilisateurs (déficients visuels, cognitifs ou avec troubles de l’attention) d’identifier la zone de résultats et de savoir quand celle-ci est mise à jour.
Il faudrait pousser le focus sur la zone de résultats à chaque recherche.

**Référence&nbsp;:** WCAG 2.4.3

## 24. S’assurer que l’utilisateur garde le contrôle lors des interactions

**Cible&nbsp;: ** tout le monde, et en particulier les personnes déficientes visuelles, cognitives ou avec un déficit d’attention.  
**Quand&nbsp;: ** dès la phase de conception et lors du développement.

**Description&nbsp;: **
Ne pas induire de changement de contexte lors de la prise de focus, la saisie de données ou l’activation d’un élément de formulaire sans que ce changement soit prévisible (bouton) ou que l’utilisateur ait été averti. 

**Objectif utilisateur&nbsp;: **
Donner à tous les utilisateurs la maîtrise des changements de contexte lié à son action.

**Exemple&nbsp;:**    
Un formulaire doit obligatoirement posséder un bouton d’envoi. Il ne doit pas être envoyé automatiquement après la saisie de l’utilisateur.

**Référence&nbsp;:** WCAG 3.2.1, 3.2.2

## 25. Eviter les captcha
**Cible&nbsp;: ** tous les utilisateurs en particulier, les personnes déficientes visuelles.  
**Quand&nbsp;: ** lors de la conception et lors du développement.

**Description&nbsp;:**  
Les captcha sont souvent  la source de difficultés pour les utilisateurs. Si la mise en place d’un système anti-spam ne peut être évitée, il est souhaitable de s’orienter vers une solution plus souple pour l’utilisateur: 
- Double authentification
- Champ de formulaire caché à laisser vide (technique du <span lang="en">honeypot</span>), non-visibles pour l’utilisateur
- Mise à disposition d'un support téléphonique afin de s'assurer que le client est une vraie personne
- Un contrôle permettant de s'assurer qu'une même combinaison IP/User agent ne tente pas de soumettre le formulaire plus de N fois par seconde.

Si aucune autre alternative n’est possible, il est indispensable de prévoir une alternative pour les captcha uniquement visuels ou sonores en proposant une  combinaison de captcha : un captcha  audio + visuel, des tests logiques (question dont la réponse est évidente, test  mathématique simple…) + captcha visuel classique...

## 26. Identifier et conserver la cohérence des regroupements et des différentes régions de la page
**Cible&nbsp;: ** tout le monde et en particulier les personnes déficientes visuelles, cognitives ou ayant des troubles de l’attention.

**Description&nbsp;:**
Fournir des moyens d’identifier et de distinguer visuellement les différentes parties de la page et assurer la cohérence de ces régions ou regroupements dans toutes les pages.

**À vérifier&nbsp;:** 
- S’assurer que les mécanismes de navigation sont toujours situés au même endroit dans un ensemble de page.
- S’assurer que les composants et les regroupements qui ont la même fonction sont identifiés (visuellement) de la même façon.
- S’assurer que les zones de la page sont clairement délimitées (bordures, filets, contraste suffisant…) ou qu’il y a un moyen de distinguer visuellement les groupes (sous-menu, liste déroulante…) ainsi que les différentes régions de la page.

**Objectif utilisateur&nbsp;:**
Permettre aux utilisateurs d’identifier et localiser les éléments d’interface dans toutes les pages.

**Exemple valide&nbsp;:**  
![capture d’écran du site 100% pratique](images/groupement.jpg)  
Ici, l’info bulle (<i lang="en">tooltip</i>) est délimitée par une bordure bien visible et suffisamment contrastée, permettant de bien identifier son contenu.

**Exemple non-valide&nbsp;:**  
![capture d’écran du site fnac.com](images/groupement2.jpg)  
Il est très difficile d’associer les thèmes («&nbsp;par région&nbsp;», «&nbsp;par genre&nbsp;»…) et les sous-thèmes en colonnes, d’autant plus que les filets horizontaux sont trop peu contrastés.

**Exemple&nbsp;: Les balises <abbr>HTML</abbr>5 et <i lang="en">landmarks</i> <abbr>ARIA</abbr>**
Pour donner une structure sémantique aux grandes régions d’une page, on peut utiliser les balises de structure <abbr>HTML</abbr>5 (`main` pour le contenu principal de la page, `nav` pour la navigation principale, `header` pour l’entête de page, `footer` pour le pied de page, `aside` pour du contenu complémentaire au contenu principal, et d’autres) même si leur support par les technologies d’assistance/navigateurs n’est pas total mais il s’améliore rapidement. On peut aussi utiliser, pour mettre en place cette structure de page, [les <i lang="en">landmarks</i> <abbr>ARIA</abbr> (<i lang="en">Accessible Rich Internet Applications</i>)](https://www.w3.org/TR/wai-aria-practices/examples/landmarks/index.html) et là, le support est bien meilleur&nbsp;!

Mettre en place ce type de sémantique permet aux déficients visuels d’identifier et comprendre l’organisation, la structure globale de la page et donc de naviguer plus facilement.

Pour aller plus loin (en anglais)&nbsp;: <a href="https://dequeuniversity.com/assets/html/jquery-summit/html5/slides/landmarks.html" hreflang="en"><abbr>HTML</abbr>5 et <i lang="en">landmarks</i> <abbr>ARIA</abbr></a> 

Pour une page en <abbr>HTML</abbr>5&nbsp;:

```html
<head>
  …
  <title>Titre de la page</title>
  …
</head>
<body>
  <header>
    <h1>…</h1>
    <nav>…navigation…</nav>
    <p>en tête de page&nbsp;: logo, baseline…</p>
    …
  </header>
  <main>
    <p>contenu principal</p>
    …
  </main>
  <aside>
    <p>contenu annexe en relation avec le contenu principal</p>
    …
  </aside>
  <footer>
    <p>contenu du pied de page&nbsp;: copyright…</p>
    …
  </footer>
</body>
```
   
Pour une page qui n’est pas en <abbr>HTML</abbr>5, ajouter les <i lang="en">landmarks</i> <abbr>ARIA</abbr>&nbsp;:

```html
<head>
  …
  <title>Titre de la page</title>
  …
</head>
<body>
  <div role="banner">
    <h1>…</h1>
    <div role="navigation">…navigation…</div>
    <p>en tête de page&nbsp;: logo, baseline…</p>
    …
  </div>
  <div role="main">
    <p>contenu principal</p>
    …
  </div>
  <div role="complementary">
    <p>contenu annexe en relation avec le contenu principal</p>
    …
  </div>
  <div role="contentinfo">
    <p>contenu du pied de page&nbsp;: copyright…</p>
    …
  </div>
</body>
```

**Référence WCAG&nbsp;:** 3.2.3., 3.2.4  

## 27. Fournir des accès multiples et une localisation

** Cible&nbsp;: ** tout le monde et en particulier les personnes déficientes visuelles ou cognitives.

** Description&nbsp;: **
Donner à l’utilisateur plusieurs moyens de situer et accéder à un contenu spécifique, localiser la page Web en cours de consultation dans un ensemble de pages. Lorsque la page est une étape dans un processus où les pages s’enchainent les unes après les autres, ce critère peut être ignoré.

** À vérifier&nbsp;:**
S’assurer que plusieurs systèmes permettent de situer et accéder à une page ou un contenu dans le site : un outil de recherche sur l’ensemble du site, un plan du site, un menu de navigation global, un fil d’Ariane…
Objectif utilisateur :
Permettre à tous les utilisateurs de se repérer afin d’accéder plus facilement à l’ensemble du contenu du site.

** Exemple valide&nbsp;: **
Le site propose, à la fois, une navigation principale complète et précise et un fil d’Ariane.

** Exemple invalide&nbsp;: **
Une application offre un menu de navigation parcellaire et aucun autre moyen pour  l’utilisateur de s’orienter dans les pages ou de repérer où se situe la page courante dans l’arborescence.

**Référence WCAG&nbsp;: ** 2.4.5., 2.4.8

&nbsp;


<!--  This file is part of a11y-guidelines | Our vision of mobile & web accessibility guidelines and best practices, with valid/invalid examples.
 Copyright (C) 2016  Orange SA
 See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). -->