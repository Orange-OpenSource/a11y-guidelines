# Les exigences accessibilité Orange pour les mobiles

- Contraste des couleurs (option inversion de contraste, augmentation du contraste…) 
- Information apportée autrement que par la couleur
- Titre sur chaque écran (premier élément, éventuellement possible de dissimuler&nbsp;?)
- Bouton de retour en haut avec si possible en libellé le titre de la page précédente
- Lecture des éléments avec Voiceover (`label` + `role`)
- Taille du texte dynamique
- Changement de langue dans l’application
- Usage de composants natifs (ou custom avec gestion de l’accessibilité)
- Ordre de lecture des éléments
- Zones cliquables suffisamment grandes
- Éléments fantômes&nbsp;?
- Possibilité d’arrêter les animations/flash lumineux
- Changement de contenu (prévenir l’utilisateur)
- <i lang="en">Scroll</i> horizontal à éviter, prévenir l’utilisateur et prévoir un autre moyen que le glissé
- Navigation au focus (spécifique Android)


Vous trouverez ci-dessous l’ensemble des principaux critères à respecter pour rendre un projet web accessible. Contrairement à la rubrique [Fondamentaux](high-level.html) qui se veut volontairement non-technique, cette rubrique aborde la technique et le code.

## Avant-propos
Ce socle d’exigences se compose de critères techniques spécifiques au web qu’il faut respecter pour qu’une application ou qu’un site évite les principales erreurs d’accessibilité et s’engage dans une démarche de mise en accessibilité progressive.
C’est un sous-ensemble des recommandations techniques qui, elles, sont exhaustives&nbsp;!

La mise en œuvre de ce socle ne permet pas&nbsp;:
- d’obtenir à coup sûr un site accessible,
- donc de s’affranchir d’un accompagnement en accessibilité par EASE.
Par contre elle permet de partir sur une bonne base au niveau de l’accessibilité.


*** Demande d’accompagnement ou de prestation EASE ***: 
[Formulaire de demande d’accompagnement](http://isf.idea.rd.francetelecom.fr/issue.html)


## 1. Donner un titre aux pages  

**Pour qui&nbsp;: ** tout le monde, et en particulier les personnes déficientes visuelles.  
**Quand&nbsp;: ** dès la conception et pendant le développement.

**Description&nbsp;: **  

La page doit posséder un titre unique et pertinent (balise `<title>`).  
Donner un titre de page différent à chaque page reflétant le contenu ou la fonction de celle-ci.

**À vérifier&nbsp;: **

- Bien qu’il n’y ait pas de règle, en général, on va de l’information la plus spécifique vers la moins spécifique (ex.&nbsp;: nom de la page courante - nom du site).
- Lorsque le contenu de la page est modifié dynamiquement (affichage du résultat d’une recherche, erreurs dans un formulaire, action utilisateur cachant/rajoutant du contenu…), le titre de la page doit refléter cette modification du contenu.

**Objectif utilisateur&nbsp;: ** 

Permettre aux utilisateurs d’identifier le sujet d’une page, se repérer et se faire une idée précise du contenu de la page sans avoir à le lire. Pour les utilisateurs de synthèse vocale, le titre de la page est le premier élément vocalisé.

**Exemple valide&nbsp;: **      
`<title>Espace client Orange - Accueil</title>`        
 
**Exemple non-valide&nbsp;:**      
`<title>Accueil</title>`

**Référence&nbsp;: ** <abbr>WCAG</abbr> 2.4.2

## 2. Donner des titres aux rubriques

**Pour qui&nbsp;: ** tout le monde, et en particulier les personnes déficientes visuelles.  
**Quand&nbsp;: ** dès la conception, à la rédaction du contenu et pendant le développement.

**Description&nbsp;: **  

Identifier les balises de titres à utiliser (balises <abbr>HTML</abbr> `h1` jusqu’à `h6`) pour structurer de façon logique le contenu des pages. Les personnes déficientes visuelles naviguant à l’aide d’un lecteur d’écran peuvent accéder à la liste des titres de la page. 

**À vérifier&nbsp;: **

- Les titres doivent être pertinents et non vides.
- Il ne doit pas exister de saut dans la hiérarchie des titres (on ne passe pas directement d’un titre `h2` à un titre `h4`).
- On peut mettre plusieurs `h1` par page (se limiter tout de même à deux dans la majorité des cas).
- Les lecteurs d’écran ne prennent pas en compte les titres masqués (`visibility: hidden;`, `display: none;` ou `aria-hidden`).
- Le contenu généré dynamiquement doit aussi respecter cette exigence.

**Objectif utilisateur&nbsp;: **

Utiliser des titres pour le contenu permet&nbsp;: 
- à tous les utilisateurs d’en déduire et d’en comprendre sa structure,
- aux moteurs de recherche d’améliorer le référencement,
- aux utilisateurs déficients visuels de naviguer et d’accéder plus facilement au contenu.

**Objectif technique&nbsp;: **

Oblige à la structuration cohérente du contenu par le créateur du site et permet d’améliorer le référencement naturel.

**Exemple valide&nbsp;: **      
Un titrage de page cohérent et pertinent&nbsp;:

```html
<h1>Accueil - Orange</h1>
    <h2>Les actualités</h2>
    <h2>La fibre arrive&nbsp;!</h2>
        <h3>Êtes-vous éligible&nbsp;?</h3>
```
 
**Exemple non-valide&nbsp;: **      
Un titrage de page avec un saut de niveau `h2` → `h4`&nbsp;:

```html
<h1>Accueil - Orange</h1>
    <h2>Les actualités</h2>
    <h2>La fibre arrive&nbsp;!</h2>
        <h4>Êtes-vous éligible&nbsp;?</h4>
```
   
 
**Référence&nbsp;:** <abbr>WCAG</abbr> 1.3.1

## 3. Mettre en place des listes

**Pour qui&nbsp;: ** tout le monde, et en particulier les personnes déficientes visuelles.  
**Quand&nbsp;: ** dès la conception et à la rédaction du contenu.

**Description&nbsp;: ** 

La page, si besoin, doit posséder des listes sémantiquement pertinentes. 

Sémantiser le contenu <abbr>HTML</abbr> en utilisant les balises&nbsp;:
- `ol` pour les listes ordonnées,
- `ul` pour les listes non ordonnées,
- `li` pour les éléments de liste.

**À vérifier&nbsp;: ** 
- Il ne doit pas y avoir de liste vide.
- Il ne doit pas y avoir de liste avec un seul élément (car ce n’est pas une liste, à moins que cette liste ne soit générée dynamiquement&nbsp;!).

** Objectif utilisateur&nbsp;: **

Utiliser des listes permet d’identifier, regrouper et présenter séquentiellement des éléments de même nature.

**Objectif technique&nbsp;: ** 

Oblige à la structuration cohérente du contenu par le créateur du site.

**Référence&nbsp;: ** <abbr>WCAG</abbr> 1.3.1

## 4. Séparer le contenu de l’interactivité et de la présentation

**Pour qui&nbsp;: ** tout le monde, et en particulier les personnes déficientes visuelles.  
**Quand&nbsp;: ** lors du développement.

**Description&nbsp;: **

Séparer strictement le contenu (<abbr>HTML</abbr>) l’interactivité (Javascript) et la présentation (<abbr>CSS</abbr>). 

**À vérifier&nbsp;: **

- Ne pas faire de mise en page en tableaux, ceux-ci étant réservés aux données tabulaires. 
- Éviter d’utiliser des images pour afficher du texte, préférer les habillages <abbr>CSS</abbr>.
- Utiliser des classes <abbr>CSS</abbr> plutôt que manipuler des styles <abbr>CSS</abbr> en ligne dans le code <abbr>HTML</abbr>.
- Ne pas câbler des événements Javascript directement dans le code <abbr>HTML</abbr> mais gérer l’interactivité dans un script ou un fichier <abbr>JS</abbr> à part.

**Objectif utilisateur&nbsp;: **

Permettre aux utilisateurs, via leur agent utilisateur ou aide technique (par exemple leur navigateur) de modifier le rendu visuel de la page (grossissement, couleur, position…). Par exemple, de grossir le texte sans problème de mise en page.

**Objectif technique&nbsp;: **

Améliore globalement la maintenabilité.

**Référence&nbsp;:** <abbr>WCAG</abbr> 1.3.1, 1.4.5

## 5. Valider le code

**Pour qui&nbsp;: ** tout le monde.  
**Quand&nbsp;: ** pendant et à la fin du développement.

**Description&nbsp;: **  

Le code source de la page doit être valide au niveau <abbr>HTML</abbr>.

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

**Référence&nbsp;:** <abbr>WCAG</abbr> 4.1.1  

**Outil&nbsp;: ** [validateur <abbr>HTML</abbr> et <abbr>CSS</abbr> du W3C](https://validator.w3.org/)

## 6. Indiquer la langue principale et les changements de langue

**Pour qui&nbsp;: ** pour tous, et en particulier les personnes déficientes visuelles.  
**Quand&nbsp;: ** lors du le développement.

**Description&nbsp;: **  

Spécifier la langue principale du document grâce à l’attribut `lang` et/ou `xml:lang` dans la balise `html`. 
Préciser également la langue d’un contenu exprimé dans une langue autre que la langue principale, en utilisant l’attribut `lang` et/ou `xml:lang` dans l’élément <abbr>HTML</abbr> contenant l’expression en langue étrangère.  

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

**Référence&nbsp;: **<abbr>WCAG</abbr> 3.1.1, 3.1.2

## 7. Associer une étiquette pertinente à chaque champ de formulaire

**Pour qui&nbsp;: ** tout le monde et en particulier les personnes déficientes visuelles.  
**Quand&nbsp;: ** lors de la conception et lors du développement.

**Description&nbsp;: **  

Chaque champ de formulaire doit être accompagné d’un libellé permettant d’identifier le rôle du champ, le type de donnée et le format attendu. 

Chaque libellé doit être inclus dans une balise `label`, elle-même associée au champ de formulaire grâce à un attribut `for` renseigné, reprenant la valeur de l’`id` du champ.

Dans certains cas, il semble inutile d’accompagner le champ de formulaire d’un libellé (champ de recherche accompagné d’un bouton en forme de loupe par exemple). Dans ce cas, prévoir tout de même un libellé, l’associer au champ de formulaire et le rendre invisible à l’écran (utiliser une classe de <a href="./exemples/masquage/index.html">masquage accessible</a>), ainsi celui-ci sera quand même vocalisé par les lecteurs d’écran.
L’attribut `title` positionné sur une balise de champ de formulaire peut faire également office de `label` tout comme les attributs `aria-label` et `aria-labelledby`.

**À vérifier&nbsp;: **

Pour les boutons radio et les cases à cocher, l’utilisation de la balise `label` est, parfois, à compléter par un autre dispositif (`title`, `aria-labelledby`, `aria-label` ou `fieldset` et `legend`).
Pour les champs obligatoires, ceci doit être précisé dans le label via une image, un symbole texte (`*` par exemple) ou du texte et/ou une propriété `aria-required`.

**Objectif utilisateur&nbsp;: **

Ne pas respecter cette exigence est un point bloquant pour tout utilisateur de synthèse vocale. Pour les utilisateurs de mobile et les déficients moteur cela permet d’activer ou cliquer plus facilement sur les éléments de formulaire.

**Exemple valide&nbsp;: **  
![capture d’écran d’un formulaire valide](images/formulaire.png)

**Exemple non-valide&nbsp;: **  
![capture d’écran d’un formulaire auquel il manque un label](images/formulaire2.png)

**Exemple de formulaire accessible&nbsp;: **

Consulter [l’exemple de formulaire accessible](./exemples/formulaire/index.html) pour plus d’informations.

**Référence&nbsp;: **<abbr>WCAG</abbr> 3.3.2

## 8. Détecter, identifier les erreurs et suggérer des corrections

**Pour qui&nbsp;: ** tout le monde et en particulier les personnes déficientes visuelles.  
**Quand&nbsp;: ** lors de la conception et lors du développement.

**Description&nbsp;: ** 

Les erreurs sont automatiquement détectées, l’élément de formulaire en erreur est identifié et l’erreur est décrite à l’utilisateur sous forme de texte. Si besoin, une correction est suggérée.

Enfin les libellés des messages d’erreur doivent être explicites.

**À vérifier&nbsp;: **

L’identification du champ en erreur ainsi qu’une éventuelle suggestion de correction peuvent être ajoutées dynamiquement à la balise `label`, l’attribut `title` ou les attributs `aria-label` et `aria-labelledby` selon le contexte et les besoins.

**Objectif utilisateur&nbsp;: **

Guider l’utilisateur en cas d’erreurs permet d’améliorer la compréhension et la correction des erreurs, pour tous les utilisateurs, en particulier pour les novices sur internet, les seniors et les personnes déficientes cognitives.

**Exemple valide&nbsp;: **  
![capture d’écran d’un formulaire affichant des messages d’erreur à la saisie valides](images/formulaire-ok.png)  

**Exemple non-valide&nbsp;: **  
![capture d’écran d’un formulaire affichant des messages d’erreur à la saisie non-valides](images/formulaire-ko.png)

**Exemple de formulaire accessible&nbsp;: **

Consulter [l’exemple de formulaire accessible](./exemples/formulaire/index.html) pour plus d’informations.

**Référence&nbsp;: **<abbr>WCAG</abbr> 3.3.1, 3.3.3

## 9. Fournir un équivalent textuel pour les images

**Pour qui&nbsp;: ** tout le monde, et en particulier les personnes déficientes visuelles.  
**Quand&nbsp;: ** lors de la conception et lors du développement.

**Description&nbsp;: ** 

Mettre, dans toute balise `img`, un attribut `alt` pertinent&nbsp;: 
- Pour les images cliquables&nbsp;: préciser la fonction / la cible du lien dans l’attribut `alt`,
- Pour les images porteuses d’information&nbsp;: mettre un `alt` décrivant l’information contenue dans l’image
- Pour les images contenant du texte&nbsp;: mettre un attribut `alt` reprenant au moins le texte de l’image,
- Pour les images décoratives&nbsp;: mettre un attribut `alt` vide,
- Pour les images dont le contenu du `alt` serait trop long (schémas, graphes…), mettre à proximité de l’image à décrire, sa description sous forme de texte dans la page ou, un lien pointant vers une page <abbr>HTML</abbr> contenant cette description.

**À vérifier&nbsp;: **

- Toute balise `img` doit posséder un attribut `alt`.
- Pour les images non-porteuses d’information, il est préférable de les passer en image de fond <abbr>CSS</abbr>.
- Pour les graphes, la solution peut être de mettre un lien sous l’image permettant d’accéder à un tableau de chiffres (le faire apparaître dans la même page ou sur une autre page).

**Objectif utilisateur&nbsp;: **

Permettre l’accès à l’information incluse dans une image pour des utilisateurs qui n’y ont pas accès.
Point bloquant&nbsp;: une image sans description textuelle est inexploitable par des personnes ayant des déficiences visuelles ou celles n’affichant pas les images (mobile, faible bande passante…).

**Objectif technique&nbsp;: **

Améliorer le référencement naturel.

**Exemples valides&nbsp;:**      
`<a href="./home"><img src="logo_orange.jpg" alt="Retour à l’accueil"></a>`        
`<img src="banner_bouquet_famille.png" alt="Bon plan, bouquet famille max à 2 euros par mois pendant 12 mois au lieu de 16 euros.">`

**Exemple d’alternative vide&nbsp;:**  
Dans l’exemple ci-dessous, le picto à droite n’a pas besoin d’être vocalisé puisque le texte situé à gauche apporte déjà l’information.  
Renseigner l’attribut `alt` dans ce cas apporterait une information redondante.  

![exemple d’image décorative](./images/service-24.png)  
  
```html
<h3>Le service 24h garanti</h3>
<img src="service-24.png" alt="">
```

**Référence&nbsp;: **<abbr>WCAG</abbr> 1.1.1

## 10. Fournir un transcrit pour toute piste audio ou vidéo

**Pour qui&nbsp;: ** tout le monde, et en particulier les personnes déficientes visuelles, cognitives et auditives.  
**Quand&nbsp;: ** lors de la conception et lors du développement.

**Description&nbsp;: ** 

Fournir, pour toute piste audio ou vidéo porteuse d’information, un transcrit complet dans la page elle-même ou grâce à un lien à proximité de celle-ci.

**À vérifier&nbsp;: **

Un transcrit complet est le texte contenant l’ensemble des informations visuelles et auditives porteuses de sens. 

**Objectif utilisateur&nbsp;: **

Fournir un moyen d’accès à l’information visuelle et auditive pour des personnes ne pouvant pas en bénéficier&nbsp;: malvoyants, aveugles, sourds, déficients cognitifs, ordinateur sans haut-parleurs, environnement lumineux ou bruyant.

**Objectif technique&nbsp;: **

Permet le référencement de tout contenu audio et vidéo.

**Référence&nbsp;: **<abbr>WCAG</abbr> 1.2.3

## 11. Structurer les tableaux de données

**Pour qui&nbsp;: ** tout le monde et en particulier les personnes déficientes visuelles.  
**Quand&nbsp;: ** dès la phase de conception et lors du développement.

**Description&nbsp;: **

Pour des données tabulaires&nbsp;:
- utiliser l’élément `table` avec les éléments enfants `th` (pour les cellules d’en-têtes), `td`, `tr`,
- utiliser l’attribut `scope` avec la valeur `row`/`col` pour associer les cellules d’en-têtes et les cellules de données ou pour des tableaux complexes, utiliser les attributs `id` et `headers`,
- utiliser la balise `caption`, une balise `h1` à `h6` juste avant le tableau ou lier un texte proche du tableau  via un `aria-labelledby` dans l’élément `table` pour associer un titre au tableau,
- mettre un attribut `summary` dans l’élément `table` pour expliciter la structure dans le cas d’un tableau complexe. Attention cet attribut est déprécié en <abbr>HTML</abbr>5, il faudra donc rajouter, si besoin, le contenu du `summary` dans le titre du tableau.

**À vérifier&nbsp;: **

- Rappel&nbsp;: Ne pas utiliser de tableaux à des fins de mise en page. Si vous en faites tout de même, ne pas mettre d’éléments propres aux tableaux de données (`scope`, `headers`, `caption`, `summary`) et *rajouter un attribut <abbr>ARIA</abbr> `role="presentation"`* pour enlever toute sémantique au tableau.
- Préférer scinder un tableau complexe en plusieurs tableaux plus simples.
- Les balises `tbody`, `tfoot` et `thead` n’ont aucune influence sur l’accessibilité donc pas d’obligation de les utiliser.

**Objectif utilisateur&nbsp;: **

Donner un résumé et un titre aux tableaux de données permet à tous d’en connaître l’objet rapidement sans avoir à le parcourir. Pour des utilisateurs déficients visuels, lier les cellules aux en-têtes permet de se situer dans le tableau et de comprendre les données de celui-ci.

**Objectif technique&nbsp;: **

Optimiser le référencement naturel.

**Exemple valide&nbsp;:**      
`--------- A COMPLETER ---------`
 
**Exemple non-valide&nbsp;:**      
`--------- A COMPLETER ---------`

**Référence&nbsp;:** <abbr>WCAG</abbr> 1.3.1

## 12. Ne pas utiliser la couleur ou l’information sensorielle comme seule source d’information

**Pour qui&nbsp;: ** tout le monde, et en particulier les personnes déficientes sensorielles et les personnes ne voyant pas correctement les couleurs (daltoniens…).  
**Quand&nbsp;: ** dès la phase de conception et lors du développement.

**Description&nbsp;: **

Ne pas utiliser la couleur ou une information sensorielle (forme, taille, son…) comme la seule façon de véhiculer de l’information, d’indiquer une action, de solliciter une réponse ou de distinguer un élément. L’information fournie par un changement de couleur ou une information sensorielle doit être complétée par une information textuelle (alternative) ou/et structuration sémantique.

**À vérifier&nbsp;: **
- En cas de doute, faites une capture d’écran et passez-la en noir et blanc. La perte des couleurs ne doit pas entraîner de difficulté dans la navigation, ni provoquer de perte d’information.
- Coupez le son, le niveau d’information doit rester le même que lorsque le son est activé. 

**Objectif utilisateur&nbsp;: **

Permettre aux utilisateurs ne distinguant pas les couleurs ou l’information sensorielle (déficients visuels, auditifs, daltoniens, utilisateurs de mobile en luminosité extérieure, en milieu bruyant…), d’accéder tout de même à l’information par d’autres moyens.

**Exemple&nbsp;:**      
Pour un graphique type camembert, où chaque partie est colorée différemment, ajouter par exemple une texture différente pour les identifier sans la couleur.
 
**Exemple valide&nbsp;:**  
![Exemple d’image valide n’utilisant pas que la couleur pour transmettre l’information](./images/couleur-ok.png)

**Exemple non-valide&nbsp;:**  
![Exemple non-valide utilisant uniquement des voyants de couleur pour transmettre l’information](./images/couleur-ko.png)

**Référence&nbsp;:** <abbr>WCAG</abbr> 1.4.1

## 13. Assurer un contraste suffisant entre texte et fond

**Pour qui&nbsp;: ** tout le monde, et en particulier les personnes déficientes visuelles, web mobile et en mobilité.  
**Quand&nbsp;: ** dès la phase de conception et lors du développement.

**Description&nbsp;: **

Faire en sorte que le contraste entre le fond et le texte soit d’au moins 4.5:1 et ceci également pour du texte sous forme d’image porteuse d’information.

**À vérifier&nbsp;: **

- Pour des applications principalement utilisées en web mobile ou en mobilité, on doit, pour les principaux éléments de la page, fournir un contraste de 7:1 afin de renforcer le contraste et donc assurer une bonne utilisabilité pour tous.
- S’assurer que les liens sont facilement identifiables (soulignement et couleur propre, par exemple) par rapport au reste du texte et, bien sûr, suffisamment contrastés.

**Objectif utilisateur&nbsp;: **

Faciliter la lecture à tous les utilisateurs, déficients visuels ou personnes dans un environnement lumineux défavorable (web mobile, en mobilité).

**Référence&nbsp;:** <abbr>WCAG</abbr> 1.4.3

**Outil&nbsp;: **  
L’application [<i lang="en">Colour Contrast Analyser</i>](http://www.paciellogroup.com/resources/contrastanalyser/) permet de mesurer rapidement des niveaux de contraste de couleurs (gratuit pour Mac et Windows).  

## 14. Utiliser des tailles relatives pour permettre le grossissement des textes

**Pour qui&nbsp;: ** tout le monde et en particulier les personnes déficientes visuelles, en mobilité et seniors.  
**Quand&nbsp;: ** lors du développement.

**Description&nbsp;: **

N’utiliser que des tailles relatives (`em`, `rem`, `%`) pour les tailles de police et pour les éléments conteneurs permettant l’agrandissement du texte seul de 200&nbsp;%.

**À vérifier&nbsp;: **

- Ne pas utiliser le pixel (`px`) pour des tailles qui doivent pouvoir s’agrandir si l’on ne zoome que les textes.
- Les éléments de formulaire doivent, eux aussi, posséder des tailles relatives pour s’agrandir.
- Penser à rendre fluides les conteneurs des textes afin qu’ils puissent s’agrandir lorsque les textes sont zoomés.
- Dans Firefox, faire Affichage>Zoom>Zoom texte seulement, utiliser les réglages du zoom ou le raccourci `Ctrl` + `+` quatre fois pour atteindre 200%. Vérifier qu’il n’y a pas de perte d’information (disparition ou chevauchement de texte).
![capture d’écran réglage du zoom dans Firefox](./images/zoom-200.png).

**Objectif utilisateur&nbsp;: **

Permettre aux utilisateurs (malvoyants, en mobilité, seniors…) d’augmenter la taille du texte pour plus aisément accéder à l’information.

**Exemple&nbsp;:**  
Voir l’exemple [gestion du zoom, agrandissement de la taille du texte](./exemples/zoom/index.html) pour plus d’informations.

**Référence&nbsp;:** <abbr>WCAG</abbr> 1.4.4

## 15. Rendre l’intitulé d’un lien compréhensible hors contexte

**Pour qui&nbsp;: ** tout le monde, et en particulier les personnes déficientes visuelles.  
**Quand&nbsp;: ** dès la phase de conception et lors du développement.

**Description&nbsp;: **

Rendre compréhensibles les intitulés des liens hors contexte pour tous les utilisateurs et en particulier les déficients visuels. Lors de la navigation avec un lecteur d’écran, il est possible d’accéder à la liste des liens de la page pour naviguer rapidement. Si votre page contient plusieurs liens «&nbsp;en savoir plus&nbsp;», il sera impossible de les différencier les uns des autres.  

S’il n’est pas possible de rendre un lien plus explicite, faute de place, mais que l’intitulé du lien actuel est suffisant pour les personnes qui ont accès à l’écran, le texte du lien peut n’être complété que pour les utilisateurs qui naviguent à l’aide d’un lecteur d’écran.
Par exemple dans l’image ci-dessous, les deux liens «&nbsp;Valider&nbsp;» ne sont pas suffisamment explicites pour une personne déficiente visuelle. Par contre quand on voit l’écran, la disposition fait qu’il n’y a pas d’ambiguïté sur le rôle de chaque élément.

![capture d’écran présentant deux liens valider dont le libellé doit être explicité](./images/liens-valider.png)

Dans ce cas, ajouter un `span` en <a href="./exemples/masquage/index.html">masquage accessible</a> pour compléter l’intitulé du lien. Celui-ci ne sera pas affiché à l’écran, mais sera vocalisé par les outils d’assistance.

**Exemple&nbsp;:**  
```html
<a href="...">valider<span class="masquage-accessible"> le paiement en plusieurs fois</span></a>
<a href="...">valider<span class="masquage-accessible"> le paiement en une seule fois</span></a>
```

Une autre solution consiste à utiliser un attribut `aria-label` ou `aria-labelledby` pour préciser l’intitulé du lien.  
En complément de ces solutions, on pourrait ici ** également ajouter un attribut `title` ** pour faire apparaître une info-bulle «&nbsp;Valider le paiement en plusieurs fois&nbsp;» au survol du lien avec la souris.


**À vérifier&nbsp;: **

S’assurer que les liens isolés du contenu donnent une bonne information sur l’action déclenchée ou sa destination.
Une page ne doit pas comporter plusieurs liens dont l’intitulé est le même mais pointant sur des destinations/actions différentes.

**Objectif utilisateur&nbsp;: **

Permettre à un utilisateur n’ayant pas accès au contexte visuel de connaître la destination du lien. Notamment important pour les utilisateurs naviguant grâce à une liste de liens extraite de la page (lecteurs d’écran) ou les utilisateurs de loupe logicielle qui ne voient qu’une fraction de la page. 

**Objectif technique&nbsp;: **

Expliciter les liens permet d’améliorer le référencement naturel.

**Exemple valide&nbsp;:**      
Associer à un lien «&nbsp;Cliquer ici&nbsp;», un texte caché hors écran&nbsp;: «&nbsp;commander votre téléphone&nbsp;».
 
**Exemple non-valide&nbsp;:**      
Liens «&nbsp;Cliquer ici&nbsp;» ou «&nbsp;Lire la suite…&nbsp;» sans plus de précision.

**Référence&nbsp;:** <abbr>WCAG</abbr> 2.4.9

## 16. Prévenir l’utilisateur de l’ouverture d’une nouvelle fenêtre

**Pour qui&nbsp;: ** tout le monde, et en particulier les personnes déficientes visuelles et cognitives.  
**Quand&nbsp;: ** dès la phase de conception et lors du développement.

**Description&nbsp;:**

Prévenir l’utilisateur de l’ouverture de toute nouvelle fenêtre en l’indiquant dans l’intitulé du lien. 
En cas d’impossibilité avérée, utiliser  un icône (image avec un `alt`) en ajoutant l’indication d’ouverture d’une nouvelle fenêtre.  
En dernier recours, un texte masqué de manière accessible (hors écran).

**Exemple&nbsp;: **  
  
Exemple d’icône pouvant indiquer l’ouverture d’une nouvelle fenêtre.  
![capture d’écran d’un lien accompagné d’une icône indiquant l’ouverture d’une nouvelle fenêtre](./images/nouvelle-fenetre.png)  

**À vérifier&nbsp;: **

Pour tout lien ouvrant une nouvelle fenêtre ou un nouvel onglet, une mention du type «&nbsp;(nouvelle fenêtre)&nbsp;» est présente dans l’intitulé du lien, ou la mention «&nbsp;(nouvelle fenêtre)&nbsp;» est positionnée hors écran via <abbr>CSS</abbr> (<a href="./exemples/masquage/index.html">masquage accessible</a>).

**Objectif utilisateur&nbsp;: **

Éviter l’ouverture inattendue de fenêtre, car cela peut gêner, perturber ou désorienter l’utilisateur. En particulier pour des personnes en mobilité, utilisant des synthèses vocales ou présentant des déficiences cognitives.

**Exemple valide&nbsp;:**      
Pour un lien pointant à l’extérieur du site et ouvrant une nouvelle fenêtre, l’intitulé du lien texte «&nbsp;Accéder au site orange.com (nouvelle fenêtre)&nbsp;», pour une image-lien avec un `alt="consulter les CGU (nouvelle fenêtre)"`.    
 
**Référence&nbsp;:** <abbr>WCAG</abbr> 3.2.5

## 17. Permettre d’utiliser les principales fonctionnalités de l’application au clavier

**Pour qui&nbsp;: ** tout le monde, et en particulier les personnes déficientes visuelles, motrices et en mobilité.  
**Quand&nbsp;: ** dès la phase de conception et lors du développement.

**Description&nbsp;: **

Mettre en place des gestionnaires d’événements qui ne s’appuient pas uniquement sur des événements souris. 

**À vérifier&nbsp;: **

Toutes les actions importantes effectuées à la souris peuvent aussi l’être qu’avec le clavier, quitte à proposer une alternative spécifique pour les interactions complexes (<i lang="en">drag’n’drop</i>, gestes à plusieurs doigts sur mobile…).

**Objectif utilisateur&nbsp;: **
 
Permettre aux utilisateurs qui ne peuvent pas utiliser la souris (aveugles, déficients moteurs, web mobile, en mobilité…) d’accéder aux fonctionnalités principales de l’application au clavier.

**Exemple valide&nbsp;:**      
- Un sous-menu qui se déroule au survol doit aussi se dérouler quand l’item de menu parent reçoit le focus clavier.
- Dans un webmail, un clic droit permet d’accéder à un menu pour vider la corbeille, un bouton «&nbsp;Vider la corbeille&nbsp;» est également présent dans l’interface quand la corbeille est en cours de consultation. 
 
**Exemple non-valide&nbsp;:**      
Une fonctionnalité réalisable uniquement à l’aide du <i lang="en">drag’n’drop</i> et sans équivalent au clavier.

**Référence&nbsp;:** <abbr>WCAG</abbr> 2.1.1

## 18. Rendre le parcours du focus séquentiel et logique sans piège clavier

**Pour qui&nbsp;: ** tout le monde, et en particulier les personnes déficientes visuelles, motrices, cognitives et en mobilité.  
**Quand&nbsp;: ** lors du développement.

**Description&nbsp;: **

Les éléments (liens, boutons, éléments de formulaire) doivent recevoir le focus dans un ordre logique pour l’utilisateur, sans que celui-ci ne reste piégé ou bloqué, même pour du contenu généré dynamiquement apparaissant ou disparaissant (modification du DOM, Ajax,...). 

**À vérifier&nbsp;: **

- Pour valider cette exigence, la position du focus doit être visible à tout moment (propriété `outline` et `:focus` en <abbr>CSS</abbr>), voir exigence 19, ci-dessous.
- Attention à l’ordre d’insertion des éléments dans le code <abbr>HTML</abbr>, cela a une influence sur l’ordre de déplacement du focus. Un élément présent à la fin du code source, mais positionné tout en haut de la page via <abbr>CSS</abbr> sera le dernier à recevoir le focus. 
- Pour la maintenabilité, éviter l’utilisation de l’attribut `tabindex` avec des valeurs supérieur à 0.

**Objectif utilisateur&nbsp;: **

Permettre la navigation logique sans piège au clavier dans les pages de l’application. Nécessaire pour les utilisateurs ne naviguant qu’au clavier (malvoyants, déficients moteurs, déficients cognitifs, en mobilité).

**Exemple non-valide&nbsp;:**      
Une page contenant un lecteur vidéo dont le focus peut entrer à l’intérieur du lecteur, mais ne peut pas en sortir (piège clavier).        
 
**Référence&nbsp;:** <abbr>WCAG</abbr> 2.4.3, 2.1.2

## 19. Rendre visible le focus en toute circonstance

**Pour qui&nbsp;: ** tout le monde, et en particulier les personnes déficientes visuelles, motrices, cognitives et en mobilité.  
**Quand&nbsp;: ** dès la phase de conception et lors du développement.

**Description&nbsp;: **

Ne pas masquer le focus, et si nécessaire le rendre suffisamment visible (par exemple, en modifiant la propriété <abbr>CSS</abbr> `outline`) sur tous les éléments susceptibles de recevoir celui-ci (liens, boutons, éléments de formulaire).    

Lorsqu’un effet est visible sur un élément lors du survol de la souris (`:hover` en <abbr>CSS</abbr> par exemple), cet effet peut être également affiché à la prise du focus (`:focus`).


**À vérifier&nbsp;: **

Dans beaucoup de frameworks front ou dans les reset <abbr>CSS</abbr>, la propriété `outline` (qui permet de visualiser le focus) est désactivée (`outline: none;`)&nbsp;: penser à la redéfinir et vérifier que le focus est visible sur tous les éléments le recevant.

**Objectif utilisateur&nbsp;: **

Permettre la visibilité du focus sur tous les éléments actifs, notamment pour les utilisateurs de clavier (déficients visuels, moteurs ou ceux ayant des déficiences d’attention et de mémorisation ou en mobilité).

**Exemple valide&nbsp;:**  
Focus positionné sur le lien «&nbsp;HTC Desire 620&nbsp;».
  
![capture d’écran montrant un lien dont le focus est clairement visible](./images/focus-ok.png)  
 
**Exemple non-valide&nbsp;:**  
Focus positionné sur le lien «&nbsp;HTC Desire 620&nbsp;».
    
![capture d’écran montrant un lien dont le focus n’est pas suffisamment visible](./images/focus-ko.png)   

**Référence&nbsp;:** <abbr>WCAG</abbr> 2.4.7

## 20. Fournir des liens d’évitement

**Pour qui&nbsp;: ** tout le monde, et en particulier les personnes déficientes visuelles, motrices et web mobile.  
**Quand&nbsp;: ** dès la phase de conception et lors du développement.

**Description&nbsp;: **

Mettre en place des liens d’accès direct (liens d’évitement) permettant d’accéder aux principales zones de la page (navigation, contenu, pied de page, recherche…) grâce à des liens internes vers des ancres (exemple&nbsp;: attribut `id`). En cas de contraintes fortes, ces liens peuvent être cachés et affichés uniquement lors de la navigation clavier.

**À vérifier&nbsp;: **
Lorsqu’un lien d’évitement est activé, vérifier que le focus est bien déplacé (il ne s’agit pas uniquement de faire défiler la page au bon endroit).

**Objectif utilisateur&nbsp;: **

Faciliter la navigation pour des utilisateurs naviguant au clavier, des utilisateurs malvoyants, utilisateurs de loupe logicielle ou de téléphone mobile.
     
**Exemple&nbsp;: **  
Des liens d’évitement («&nbsp;menu principal&nbsp;», «&nbsp;contenu&nbsp;» et «&nbsp;pied de page&nbsp;») sont disponibles sur le site [www.orange.com](http://www.orange.com/fr/A-propos/Strategie).
Pour les faire apparaître, placer le focus en haut de la page en cliquant sur la barre d’adresse de votre navigateur par exemple puis appuyer plusieurs fois sur la touche `TAB`.

![capture d’écran du site orange.com](images/skiplink.png)   

**Référence&nbsp;:** <abbr>WCAG</abbr> 2.4.1

## 21. S’assurer que les principales fonctionnalités sont utilisables avec les lecteurs d’écran

**Pour qui&nbsp;: ** tout le monde, et en particulier les personnes déficientes visuelles.  
**Quand&nbsp;: **lors du développement.

**Description&nbsp;: **

Respecter les recommandations générales d’accessibilité, utiliser en priorité les composants standards <abbr>HTML</abbr>, sinon, utiliser l’<abbr>ARIA</abbr> (<i lang="en">Accessible Rich Internet Application</i>) pour les composants d’interface complexes.


**À vérifier&nbsp;: **

S’assurer de l’absence de point bloquant avec les couples navigateur/lecteur d’écran (Firefox/<abbr lang="en">NVDA</abbr>, <abbr lang="en">IE</abbr>/Jaws, Safari/VoiceOver) dans les parcours utilisateurs (scénarios d’utilisation des principales fonctionnalités de l’application).
En effet, les utilisateurs de lecteur d’écran sont les plus impactés par un manque d’accessibilité, on repère un grand nombre de problèmes en vérifiant cette exigence.

**Objectif utilisateur&nbsp;: **

Permettre à l’utilisateur de lecteur d’écran d’accéder aux principales fonctionnalités de l’application, mais aussi s’assurer pour tous les utilisateurs de l’utilisabilité de l’application.

## 22. Conserver un ordre de tabulation logique lors d’une insertion ou d’une modification dynamique

**Pour qui&nbsp;: ** tout le monde, et en particulier les personnes déficientes visuelles, cognitives ou avec un déficit d’attention.  
**Quand&nbsp;: **lors du développement.

**Description&nbsp;: **

Lorsqu’un élément est affiché suite à une interaction de l’utilisateur&nbsp;: 
- celui-ci doit apparaître dans le code source juste après l’élément déclenchant (exemple&nbsp;: menu dépliant), 
- ou le focus doit être déplacé sur un des premiers éléments du contenu généré (lien, bouton, titre, paragraphe...).  
   
Lors de la disparition de contenu, le focus doit être redonné à l’élément déclenchant.  
Par exemple à la fermeture d’une boite de dialogue, le focus doit être repositionné sur l’élément qui a déclenché l’ouverture (bouton, lien…).

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
- `tabindex="-1"`&nbsp;: pour interdire à un élément de recevoir le focus via la touche `TAB` et autoriser celui-ci à recevoir le focus via Javascript.
- `tabindex="0"`&nbsp;: pour rendre un élément focusable via la touche `TAB` et via Javascript.

**Objectif utilisateur&nbsp;: **

Permettre à l’utilisateur, par exemple, un non- ou malvoyant, de repérer l’apparition de nouveaux contenus et interagir avec ceux-ci.  

**Référence&nbsp;:** <abbr>WCAG</abbr> 2.4.3

## 23. S’assurer que l’utilisateur garde le contrôle lors des interactions

**Pour qui&nbsp;: ** tout le monde, et en particulier les personnes déficientes visuelles, cognitives ou avec un déficit d’attention.  
**Quand&nbsp;: ** dès la phase de conception et lors du développement.

**Description&nbsp;: **

Ne pas induire de changement de contexte lors de la prise de focus, la saisie de données ou l’activation d’un élément de formulaire sans que ce changement soit prévisible (bouton) ou que l’utilisateur ait été averti. 

**Objectif utilisateur&nbsp;: **

Donner à tous les utilisateurs la maîtrise des changements de contexte lié à son action.

**Exemple&nbsp;:**    
Un formulaire doit obligatoirement comporter un bouton d’envoi. Le formulaire ne doit pas être envoyé automatiquement après la saisie de l’utilisateur.

**Référence&nbsp;:** <abbr>WCAG</abbr> 3.2.1, 3.2.2
<!--  This file is part of a11y-guidelines | Our vision of mobile & web accessibility guidelines and best practices, with valid/invalid examples.
 Copyright (C) 2016  Orange SA
 See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). -->