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

**Cible&nbsp;:** tout le monde, et en particulier les personnes déficientes visuelles.  
**Quand&nbsp;:** dès la conception et pendant le développement.

**Description&nbsp;:**  
Donner à chaque page un titre qui lui est spécifique et qui reflète son contenu ou sa fonction (balise `<title>`).  
Le titre de la page est le premier élément lu par la synthèse vocale, il doit permettre d’identifier la page sur laquelle on se trouve.

**À vérifier&nbsp;:**
- Bien qu’il n’y ait pas de règle, en général, on va de l’information la plus spécifique vers la moins spécifique (exemple : nom de la page courante - nom du site). Dans d’autres contextes d’utilisation pour lesquels l’utilisateur a de nombreuses applications ou sites ouverts en même temps, il vaut mieux aller de l’information la plus générale vers la plus spécifique (exemple : nom du site - nom de la page).
- Lorsque le contenu de la page est modifié dynamiquement (affichage du résultat d’une recherche, erreurs dans un formulaire, action utilisateur ajoutant du contenu…), le titre de la page doit refléter cette modification du contenu.

**Objectif utilisateur&nbsp;:**  
Permettre aux utilisateurs d’identifier le sujet d’une page, de se repérer et se faire une idée précise du contenu de la page sans avoir à le lire. C’est, notamment, le premier élément vocalisé par un lecteur d’écran.

**Exemple valide&nbsp;:**
`<title>Accueil - Espace client Orange</title>`
 
**Exemple non-valide&nbsp;:**
`<title>Accueil</title>`

**Référence <abbr>WCAG</abbr>&nbsp;:**
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#page-titled">2.4.2 Page Titled</a>

## 2. Donner des titres aux rubriques

**Cible&nbsp;:** tout le monde, et en particulier les personnes déficientes cognitives, avec des difficultés pour lire et déficientes visuelles.  
**Quand&nbsp;:** dès la conception, à la rédaction du contenu et pendant le développement.

**Description&nbsp;:**  
Identifier les balises de titres à utiliser (balises <abbr>HTML</abbr> `h1` jusqu’à `h6`) pour structurer le contenu des pages.
Les personnes malvoyantes naviguant à l’aide d’un lecteur d’écran peuvent accéder à la liste des titres de la page pour naviguer rapidement. 
Tout comme dans un fichier Word, il est possible d’utiliser la table des matières si des titres ont correctement été positionnés à l’intérieur du document. 

**À vérifier&nbsp;:**

- Les titres doivent être pertinents et non vides.
- Il ne doit pas exister de saut dans la hiérarchie des titres (on ne passe pas directement d’un titre `h2` à un titre `h4`).
- On peut mettre plusieurs `h1` par page (se limiter tout de même à deux dans la majorité des cas).
- Les lecteurs d’écran ne prennent pas en compte les titres masqués (`visibility: hidden;`, `display: none;` ou `aria-hidden`).
- Le contenu généré dynamiquement doit aussi respecter cette exigence.

**Objectif utilisateur&nbsp;:**
- Pour tous les utilisateurs&nbsp;: améliorer la structure de la page et de son contenu. 
- Pour les utilisateurs déficients visuels, déficients cognitifs ou ayant des difficultés de lecture&nbsp;: faciliter la navigation et l’accès au contenu.

**Objectif technique&nbsp;:**
- Pour les moteurs de recherche&nbsp;: améliorer le référencement.

**Exemple valide&nbsp;:**   
   
Un titrage de page cohérent et pertinent&nbsp;:

<pre><code class="html">
&lt;h1&gt;Accueil – Orange&lt;/h1&gt;
    &lt;h2&gt;Les actualités&lt;/h2&gt;
    &lt;h2&gt;La fibre arrive&nbsp;!&lt;/h2&gt;
        &lt;h3&gt;Êtes-vous éligible&nbsp;?&lt;/h3&gt;
</code></pre>
 
**Exemple non-valide&nbsp;:**      
Un titrage de page avec un saut de niveau h2 → h4&nbsp;:

<pre><code class="html">
&lt;h1&gt;Accueil – Orange&lt;/h1&gt;
    &lt;h2&gt;Les actualités&lt;/h2&gt;
    &lt;h2&gt;La fibre arrive&nbsp;!&lt;/h2&gt;
        &lt;h4&gt;Êtes-vous éligible&nbsp;?&lt;/h4&gt;
</code></pre>
   
**Outils :**  
Des extensions à installer dans votre navigateur permettent d'extraire la liste des titres : 
- L’extension <a href="https://www.learningapps.co.uk/moodle/xertetoolkits/play.php?template_id=1309" hreflang="en" lang="en">HeadingsMaps</a>.
- L'extension <a href="https://chrispederick.com/work/web-developer/" lang="en">Web developer</a>.

**Référence <abbr>WCAG</abbr>&nbsp;:**
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#info-and-relationships">1.3.1 Info and Relationships</a>
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#headings-and-labels ">2.4.6 Headings and Labels</a>

## 3. Assurer un contraste suffisant entre les couleurs de premier plan et de fond

**Cible&nbsp;:** tout le monde, en particulier les utilisateurs sur mobile et tablette, les personnes malvoyantes, éprouvant des difficultés de lecture ou avec un déficit d’attention et les seniors.   
**Quand&nbsp;:** dès la phase de conception et lors du développement.

**Description&nbsp;:**  
Le niveau de contraste entre le premier plan et l’arrière-plan, même pour des éléments graphiques non-textuels porteurs de sens, doit être suffisamment élevé.
Un niveau de contraste insuffisant sera préjudiciable pour les utilisateurs ayant des difficultés visuelles ainsi que pour les utilisateurs de mobiles et tablettes se trouvant dans un environnement très lumineux.

**Exemple non valide&nbsp;:**  
Le texte «&nbsp;film | 20h40…&nbsp;» ne présente pas un contraste suffisant. Celui-ci ne sera pas lisible par tous les utilisateurs.  

![capture d’écran présentant du texte dont le contraste n’est pas suffisant](images/contraste.png)

Les images suivantes sont porteuses d’information pour les utilisateurs. Elles doivent fournir un contraste de couleur de 3:1 minimum.

![capture d’écran présentant des icônes et des graphiques dont le contraste n'est suffisant](images/icones.png)

**À vérifier&nbsp;:**

- S'assurer que le contraste entre la couleur du fond et celle du texte et également pour du texte sous forme d’image porteur d’information, est :
  - De 4.5:1 minimum pour une taille inférieure à 24px <abbr>CSS</abbr> et 19px <abbr>CSS</abbr> en gras.
  - De 3:1 minimum suffit pour une taille est supérieure à 24px <abbr>CSS</abbr> et 19px <abbr>CSS</abbr> en gras.
- S'assurer que les objets graphiques non-textuels porteurs d'information, les composants d’interface utilisateur et les états de l'interface (focus, hover…) ont un contraste de 3:1. Sont concernés, entre autres&nbsp;: les boutons, les boutons radios, les cases à cocher, les listes de sélection, les menus et volets de navigation, les barres d’outils, les onglets, les carrousels, les curseurs, les barres de progression, les bulles d’aides, les graphiques… 
On n’est pas tenus d’appliquer ce critère&nbsp;:

  -	si le composant graphique ne peut pas être représenté autrement&nbsp;: drapeau, logotype, photos réelles, captures d'écran, diagrammes d'informations médicales utilisant les couleurs de la biologie, dégradés représentant une mesure (cartes de chaleur…)
  -	si un texte, comme un label, un tableau de donnée…, apporte la même information que l’icône ou le graphique.
  -	si le manque de contraste de l’image n'empêche pas la compréhension du contenu ou d'identifier la fonction 
  - si un composant d'interface est inactif et donc peut être ignoré par l’utilisateur sans réelle perte d'information.
- **Attention &nbsp;:** pour des applications principalement utilisées en web mobile ou en mobilité, le niveau de contraste des principaux éléments doit être de 7:1 afin d’assurer une bonne lisibilité pour tous.

**Objectif utilisateur&nbsp;:**

Faciliter la lecture à tous les utilisateurs, déficients visuels ou personnes dans un environnement lumineux défavorable (en mobilité).

**Outil&nbsp;:**  
L’application <a href="http://www.paciellogroup.com/resources/contrastanalyser/" hreflang="en" lang="en">Colour Contrast Analyser</a> permet de mesurer rapidement des niveaux de contraste de couleurs (gratuit pour Mac et Windows).  

**Référence <abbr>WCAG</abbr>&nbsp;:**
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#contrast-minimum">1.4.3 Contrast (Minimum)</a>
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#non-text-contrast">1.4.11 Non-text Contrast</a>

## 4. Ne pas utiliser la couleur ou l’information sensorielle comme seule source d’information

**Cible&nbsp;:** tout le monde, en particulier les daltoniens et plus généralement les personnes malvoyantes ou ayant une déficience cognitive, auditive et les seniors.  
**Quand&nbsp;:** dès la phase de conception et lors du développement.

**Description&nbsp;:**  
Ne pas utiliser la couleur ou une information sensorielle (forme, taille, son, orientation, localisation visuelle…) comme la seule façon de véhiculer de l’information, d’indiquer une action, de solliciter une réponse ou de distinguer un élément. L’information fournie par un changement de couleur ou une information sensorielle doit être complétée par une information textuelle (alternative) ou/et structuration sémantique.

**À vérifier&nbsp;:**
- Faire une capture d’écran et la passer en noir et blanc. La perte des couleurs ne doit pas entraîner de difficulté dans la navigation, ni provoquer de perte d’information.
- Couper le son, le niveau d’information doit rester identique. 
- S'assurer que les liens sont identifiables par un autre moyen que la couleur (en général, le soulignement).

**Objectif utilisateur&nbsp;:**

Permettre aux utilisateurs ne distinguant pas les couleurs ou l’information sensorielle (les daltoniens, déficients visuels, déficients auditifs, utilisateurs de mobile en luminosité extérieure, en milieu bruyant…), d’accéder tout de même à l’information par d’autres moyens.

**Exemple&nbsp;:**      
Pour un graphique type camembert, où chaque partie est colorée différemment, ajouter par exemple une texture différente pour les identifier sans la couleur.
 
**Exemple valide&nbsp;:**  
![Exemple d’image valide n’utilisant pas que la couleur pour transmettre l’information](./images/couleur-ok.png)

**Exemple non-valide&nbsp;:**  
![Exemple non-valide utilisant uniquement des voyants de couleur pour transmettre l’information](./images/couleur-ko.png)

Cet exemple n’est pas valide, car l’information est transmise uniquement par la couleur.

**Référence <abbr>WCAG</abbr>&nbsp;:**
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#sensory-characteristics">1.3.3 Sensory Characteristics</a>
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#use-of-color">1.4.1 Use of Color</a>

## 5. Respecter la sémantique HTML

**Cible&nbsp;:** tout le monde, et en particulier les personnes déficientes visuelles, avec des déficiences cognitives et les seniors.  
**Quand&nbsp;:** dès la conception et à la rédaction du contenu.

**Description&nbsp;:** 
Utiliser correctement les éléments <abbr>HTML</abbr>, en respectant ce pourquoi ils sont faits (validation du code et respect des spécifications) et donc leur sémantique.

**À vérifier&nbsp;:**
Vérifier que la page, si besoin, utilise des listes sémantiquement pertinentes (pas de liste vides ou ne contenant qu’un seul élément)&nbsp;:
 - `<ol>` pour les listes ordonnées,
 - `<ul>` pour les listes non ordonnées,
 - `<li>` pour les éléments de liste.
 - `<dl>`, `<dt>` et `<dd>` pour les listes de définitions

Les listes possèdent au moins deux éléments car sinon ce ne sont pas des listes (sauf si elles sont générées dynamiquement)

S’assurer de bien baliser les citations longues `<blockquote>` ou brèves `<q>`.

Les liens sont bien des liens (i.e. balise `<a>`)&nbsp;: ils pointent effectivement vers une autre adresse, page ou onglet…

Les boutons sont bien des boutons (i.e. balise `<button>`, ou `<input type="button">`)&nbsp;: ils déclenchent une action, une validation, ou encore permettent de faire un choix…

Penser, dans la mesure du possible, à respecter l’apparence classique de ces éléments pour ne pas perturber l’utilisateur habitué à leur aspect spécifique.

Dans le code <abbr>HTML</abbr> s’assurer, lors de la validation, qu'à minima&nbsp;:
- les éléments ont des balises de début et de fin,
- les éléments sont imbriqués conformément à leurs spécifications,
- les éléments ne contiennent pas d’attributs dupliqués,
- chaque `id` est unique.

**Objectif utilisateur&nbsp;:**  
Permettre à tous les utilisateurs d’anticiper la manière d’utiliser et les comportements possibles pour un élément d’interface donné, en assurant que le bon fonctionnement des <abbr>AT</abbr>.

**Objectif technique&nbsp;:**  
Oblige à la structuration cohérente du contenu par le créateur du site et permet d'améliorer la maintenabilité.

**Exemple non-valide&nbsp;:**  
![Exemple non-valide de mauvaise utilisation d ’un lien](./images/nv-semantiq.jpg)  
Dans cet exemple, le lien «&nbsp;Actualiser&nbsp;» devrait être un bouton «&nbsp;Actualiser&nbsp;» car ici il déclenche une action et non le chargement d’une <abbr>URL</abbr> (page).

**Référence <abbr>WCAG</abbr>&nbsp;:**
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#info-and-relationships">1.3.1 Info and Relationships</a>
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#parsing">4.1.1 Parsing</a>
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#name-role-value">4.1.2 Name, Role, Value</a>

**Outil&nbsp;: **
[validateur <abbr>HTML</abbr> et <abbr>CSS</abbr> du <abbr>W3c</abbr>](https://validator.w3.org/)

## 6. Séparer le contenu de l’interactivité et de la présentation

**Cible&nbsp;:** tout le monde, et en particulier les personnes déficientes visuelles, avec des difficultés pour lire ou avec un déficit d’attention.  
**Quand&nbsp;:** lors du développement.

**Description&nbsp;:**

Séparer strictement le contenu (<abbr>HTML</abbr>), l’interactivité (Javascript) et la présentation (<abbr>CSS</abbr>). 

**À vérifier&nbsp;:**

- Ne pas faire de mise en pages en tableaux, ceux-ci étant réservés aux données tabulaires. 
- Ne pas utiliser d'image pour afficher du texte sauf exception (présentation qui ne peut pas être réalisée via <abbr>CSS</abbr>).
- Utiliser des classes <abbr>CSS</abbr> plutôt que manipuler des styles <abbr>CSS</abbr> en ligne dans le code <abbr>HTML</abbr>.
- Ne pas utiliser les pseudo éléments <abbr>CSS</abbr> (::before, ::after…) pour afficher du contenu porteur d’information
- Ne pas câbler des événements Javascript directement dans le code <abbr>HTML</abbr> mais gérer l’interactivité dans un script ou un fichier <abbr>JS</abbr> à part.

**Objectif utilisateur&nbsp;:**

Permettre aux utilisateurs, via leur agent utilisateur ou aide technique (par exemple, leur navigateur), de modifier le rendu visuel de la page (grossissement, couleur, position…). Par exemple, de grossir le texte sans problème de mise en page.

**Objectif technique&nbsp;:**

Améliore globalement la maintenabilité.

**Référence <abbr>WCAG</abbr>&nbsp;:**
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#info-and-relationships">1.3.1 Info and Relationships</a>
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#images-of-text">1.4.5 Images of Text</a>

## 8. Indiquer la langue principale et les changements de langue

**Cible&nbsp;:** pour tout le monde, et en particulier les personnes déficientes visuelles.  
**Quand&nbsp;:** lors du le développement.

**Description&nbsp;:**  

Spécifier la langue principale du document grâce à l’attribut `lang` dans la balise `html`. 
Préciser également la langue d’un contenu exprimé dans une langue autre que la langue principale, en utilisant l’attribut `lang` dans l’élément <abbr>HTML</abbr> contenant l’expression en langue étrangère.  

**À vérifier&nbsp;:**

Pour les mots ou les expressions en langue étrangère passés dans l’usage courant (Google, newsletter…) ou les noms propres, ne pas indiquer de changement de langue.

**Objectif utilisateur&nbsp;:**

Cet attribut permet d’indiquer à la synthèse vocale la langue à utiliser.

**Objectif technique&nbsp;:** 

Permettre aux moteurs de recherche d’identifier la langue d’une page pour améliorer le référencement naturel.  

**Exemple pour une page en français&nbsp;:**  

- pour du <abbr>HTML</abbr>&nbsp;: `<html lang="fr">`
- pour du <abbr>XHTML</abbr>&nbsp;: `<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="fr" lang="fr">`

**Exemple de changement de langue&nbsp;:**  
`découvrir Orange <span lang="en">live</span> TV`

**Référence <abbr>WCAG</abbr>&nbsp;:**  
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#language-of-page">3.1.1 Language of Page</a>
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#language-of-parts">3.1.2 Language of Parts</a>

## 9. Rendre accessible les champs de formulaire

**Cible&nbsp;:** tout le monde, et en particulier les personnes déficientes visuelles et cognitives, avec un déficit d’attention et les utilisateurs de tactiles (mobile et tablette).  
**Quand&nbsp;:** lors de la conception et lors du développement.

**Description&nbsp;:**  

Chaque champ de formulaire doit être accompagné d’un libellé ou d'instructions permettant d’identifier le rôle du champ, le type de donnée et le format attendu. 

Ces informations doivent être proches visuellement du champ afin que l'utilisateur fasse facilement le lien entre eux (notamment pour les utilisateurs de zoom, de loupe logicielle, voire sur mobile).

Chaque libellé (ou instructions) doit être inclus dans une balise `label`, elle-même associée au champ de formulaire grâce à un attribut `for` renseigné, reprenant la valeur de l’`id` du champ.

Dans certains cas, il semble inutile d’accompagner le champ de formulaire d’un libellé (champ de recherche accompagné d’un bouton en forme de loupe par exemple). Dans ce cas, prévoir tout de même un libellé, l’associer au champ de formulaire et le rendre invisible à l’écran (utiliser une classe de <a href="./exemples/masquage/index.html">masquage accessible</a>), ainsi celui-ci sera quand même vocalisé par les lecteurs d’écran.
L’attribut `title` positionné sur une balise de champ de formulaire peut faire également office de libellé tout comme les attributs `aria-label` et `aria-labelledby` (cf. [les attributs ARIA qui peuvent vous sauver](./label-ledby-describedby.html)) dans cet ordre de préférence.

L'attribut `autocompleted` doit être présent et pertinent pour tous les champs listés dans <a lang="en" href="https://www.w3.org/TR/WCAG21/#input-purposes">7. Input Purposes for User Interface Components</a>.

**À vérifier&nbsp;:**

S’assurer que le libellé du champ (étiquette) est suffisamment proche du champ associé.

Aligner tous les libellés à gauche lorsque le nombre de caractères séparant le libellé le plus long de celui le plus court ne dépasse pas 6 caractères&nbsp;; au-delà, aligner tous les libellés à droite.

Si cela est pertinent, les champs ont un attribut `autocompleted` afin que l’utilisateur ait la possibilité d’utiliser une liste de propositions pré-enregistrées ou en auto-complétion.

Pour les boutons radio et les cases à cocher, l’utilisation de la balise `label` est, parfois, à compléter par un autre dispositif (`title`, `aria-labelledby`, `aria-label` ou parfois, `fieldset` et `legend`).

Pour les champs obligatoires, ceci doit être précisé dans le `label` via une image, un symbole texte (`*` par exemple) ou du texte et/ou une propriété `aria-required`.

**Objectif utilisateur&nbsp;:**

Ne pas respecter ces recommandations est un point bloquant pour tout utilisateur de synthèse vocale mais aussi de loupe logicielle car il ne sait pas quelles valeurs entrer dans les champs. Pour les utilisateurs de mobiles et les déficients moteurs, cela permet d’activer ou de cliquer plus facilement sur les éléments de formulaire.

Pour les champs avec auto-complétion, facilite la tâche aux déficients moteur et cognitif, les dyslexiques. Cela permet d’éviter les erreurs de saisie et un gain de temps pour tous.

**Exemple valide&nbsp;:**  
![capture d’écran d’un formulaire valide](images/formulaire.png)
![capture d’écran d’un formulaire label proche du champ](images/v_label.jpg)

**Exemple non-valide&nbsp;:**  
![capture d’écran d’un formulaire auquel il manque un label](images/formulaire2.png)
![capture d’écran d’un formulaire label loin du champ](images/nv_label.jpg)

**Exemple de formulaire accessible&nbsp;:**
  
Consulter [l’exemple de formulaire accessible](./exemples/formulaire/index.html) pour plus d’informations.

**Référence <abbr>WCAG</abbr>&nbsp;:** 
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#headings-and-labels ">2.4.6 Headings and Labels</a>
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#labels-or-instructions">3.3.2 Labels or Instructions</a>
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#help">3.3.5 Help</a>
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#identify-input-purpose">1.3.5 Identify input purpose</a>

## 10. Détecter, identifier les erreurs et suggérer des corrections

**Cible&nbsp;:** tout le monde, et en particulier les personnes déficientes visuelles, cognitives, avec des difficultés pour lire ou ayant un déficit d’attention et les seniors.  
**Quand&nbsp;:** lors de la conception et lors du développement.

**Description&nbsp;:** 

Les erreurs sont automatiquement détectées, l’utilisateur est averti par la modification du titre de la page, l’élément de formulaire en erreur est identifié et l’erreur est décrite à l’utilisateur sous forme de texte. Si besoin, une correction est suggérée.

Les libellés des messages d’erreur doivent être explicites.

Pour les pages Web qui entraînent des actions importantes (engagement juridique, transaction financière, modification ou effacement de données importantes, réponse à un test ou examen…), l'action doit être réversible ou passer par une étape de confirmation permettant de vérifier ou rectifier la saisie en cas d'erreur.

**À vérifier&nbsp;:**

L’identification du champ en erreur ainsi qu’une éventuelle suggestion de correction peuvent être ajoutées dynamiquement à la balise `label`, en priorité, mais aussi à l’attribut `title` ou les attributs `aria-label` et `aria-labelledby` (cf. [les attributs ARIA qui peuvent vous sauver](./label-ledby-describedby.html)) selon le contexte et les besoins.

**Objectif utilisateur&nbsp;:**

Guider l’utilisateur en cas d’erreurs permet d’améliorer la compréhension et la correction des erreurs, pour tous les utilisateurs, en particulier pour les novices sur internet, les seniors et les personnes déficientes cognitives.

**Exemple valide&nbsp;:**  
![capture d’écran d’un formulaire affichant des messages d’erreur à la saisie valides](images/formulaire-ok.png)  

**Exemple non-valide&nbsp;:**  
![capture d’écran d’un formulaire affichant des messages d’erreur à la saisie non-valides](images/formulaire-ko.png)

&nbsp;  
**Exemple de formulaire accessible&nbsp;:**
  
Consulter [l’exemple de formulaire accessible](./exemples/formulaire/index.html) pour plus d’informations.

**Référence <abbr>WCAG</abbr>&nbsp;:**  
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#error-identification">3.3.1 Error Identification</a>
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#error-suggestion">3.3.3 Error Suggestion</a>
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#error-prevention-legal-financial-data">3.3.4 Error Prevention (Legal, Financial, Data)</a>

## 11. Fournir un équivalent textuel pour les images et les cadres

**Cible&nbsp;:** tout le monde, et en particulier les personnes déficientes visuelles ou cognitives.  
**Quand&nbsp;:** lors de la conception et lors du développement.

**Description&nbsp;:** 

Mettre, dans toute balise `img`, un attribut `alt` pertinent&nbsp;: 
- Pour les images cliquables&nbsp;: préciser la fonction&nbsp;/ la cible du lien dans l’attribut `alt`.
- Pour les images porteuses d’information&nbsp;: mettre un `alt` décrivant l’information contenue dans l’image.
- Pour les images contenant du texte&nbsp;: mettre un attribut `alt` reprenant au moins le texte de l’image.
- Pour les images décoratives&nbsp;: mettre un attribut `alt` vide.
- Pour les images dont le contenu du `alt` serait trop long (schémas, graphes…), mettre à proximité de l’image à décrire, sa description sous forme de texte dans la page ou, un lien pointant vers une page <abbr>HTML</abbr> contenant cette description.

Mettre un attribut `title` décrivant le contenu et/ou la fonction de toute `frame` ou `iframe`. Si la `frame` ou `iframe` ne porte pas d’information pour l’utilisateur (purement technique), la rendre invisible cf. exemple: [Masquer les iframe techniques de manière accessible](./exemples/iframes-techniques/index.html)

**À vérifier&nbsp;:**

- Toute balise `img` doit posséder un attribut `alt`.
- Pour les images non-porteuses d’information, il est préférable de les passer en image de fond <abbr>CSS</abbr>.
- Pour les graphiques, la solution peut être de mettre un lien sous l’image permettant d’accéder à un tableau de chiffres (le faire apparaître dans la même page ou sur une autre page).

**Objectif utilisateur&nbsp;:**
Permettre l’accès à l’information incluse dans une image pour des utilisateurs qui n’y ont pas accès.

Point bloquant&nbsp;: une image sans description textuelle est inexploitable par des personnes ayant des déficiences visuelles ou celles n’affichant pas les images (mobile, faible bande passante…).

**Objectif technique&nbsp;:**

Améliorer le référencement naturel.

**Exemple valide&nbsp;:**      
`<a href="./home"><img src="logo_orange.jpg" alt="Retour à l’accueil"></a>`        
`<img src="banner_bouquet_famille.png" alt="Bon plan, bouquet famille max à 2 euros par mois pendant 12 mois au lieu de 16 euros.">`

**Exemple d’alternative vide&nbsp;:**  
Dans l’exemple ci-dessous, le pictogramme à droite n’a pas besoin d’être vocalisé puisque le texte situé à gauche apporte déjà l’information.  
Renseigner l’attribut `alt` dans ce cas apporterait une information redondante.  

![exemple d’image décorative](./images/service-24.png)  
  
`<h3>Le service 24h garanti</h3>`  
`<img src="service-24.png" alt="">`

**Outils :**  
L'extension <a href="https://chrispederick.com/work/web-developer/" lang="en">Web developer</a> (possibilité d'afficher les alternatives textuelles de toutes les images).

**Référence <abbr>WCAG</abbr>&nbsp;:**  
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#non-text-content">1.1.1 Non-text Content</a>

## 12. Rendre accessible les pistes audio ou vidéo

**Cible&nbsp;:** tout le monde, et en particulier les personnes déficientes visuelles, cognitives et auditives et celles qui maîtrisent mal le français.  
**Quand&nbsp;:** lors de la conception et lors du développement.

**Description&nbsp;:** 

Pour être accessibles, les contenus multimédias doivent&nbsp;: 
1. proposer une transcription intégrale
2. proposer des sous-titres (vidéo uniquement) 
3. proposer une audiodescription (vidéo uniquement)
4. choisir un lecteur média accessible
5. proscrire le démarrage automatique de la vidéo au chargement de la page
6. proscrire les vidéos qui présentent plus de 3 flashs à la seconde 
7. par ailleurs, pour tout son émis de plus de 3 secondes, l'utilisateur doit avoir la possibilité soit de l'arrêter ou de le mettre en pause soit d'en contrôler son volume indépendamment du volume général du système.

Pour plus d'infos consulter [les recommandations accessibilité pour les contenus vidéos, animations et audios Orange](../others/video-audio.html).

**Objectif utilisateur&nbsp;:**

Fournir un moyen d’accès à l’information visuelle et auditive pour des personnes ne pouvant pas en bénéficier&nbsp;: malvoyants, aveugles, sourds, déficients cognitifs, ordinateur sans haut-parleurs, en environnement lumineux ou bruyant.

**Objectif technique&nbsp;:**

Permet le référencement de tout contenu audio et vidéo.

**Référence <abbr>WCAG</abbr>&nbsp;:**  
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#audio-only-and-video-only-prerecorded">1.2.1 Audio-only and Video-only (Prerecorded)</a>
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#captions-prerecorded">1.2.2 Captions (Prerecorded)</a>
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#audio-description-or-media-alternative-prerecorded">1.2.3 Audio Description or Media Alternative (Prerecorded)</a>
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#captions-live">1.2.4 Captions (Live)</a>
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#audio-description-prerecorded">1.2.5 Audio Description (Prerecorded)</a>
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#audio-control">1.4.2 Audio Control</a>

## 13. Structurer les tableaux de données

**Cible&nbsp;:** tout le monde, et en particulier les personnes déficientes visuelles.  
**Quand&nbsp;:** dès la phase de conception et lors du développement.

**Description&nbsp;:**

Pour des données tabulaires&nbsp;:
- Utiliser l’élément `table` avec les éléments enfants `th` (pour les cellules d’entêtes), `td`, `tr`.
- Utiliser l’attribut `scope` avec la valeur `row`/`col` pour associer les cellules d’en-têtes et les cellules de données ; pour des tableaux complexes, utiliser les attributs `id` et `headers`.
- Utiliser la balise `caption`, une balise `h1` à `h6` juste avant le tableau ou lier un texte proche du tableau via un attribut `aria-labelledby` dans l’élément `table` pour associer un titre au tableau (cf. [les attributs ARIA qui peuvent vous sauver](./label-ledby-describedby.html)).
- Mettre un attribut `summary` dans l’élément `table` pour expliciter la structure dans le cas d’un tableau complexe. Attention cet attribut est déprécié en <abbr>HTML5</abbr>, il faudra donc rajouter, si besoin, le contenu du `summary` dans le titre du tableau.

**À vérifier&nbsp;:**

- Rappel&nbsp;: ne pas utiliser de tableaux à des fins de mise en page. 
- La légende (`caption`) peut être remplacée par un titre de section (`hx`) placé avant le tableau. L’attribut `summary`, quant à lui, n’est nécessaire que pour des tableaux complexes.
- Préférer scinder un tableau complexe en plusieurs tableaux plus simples.
- Mettre un résumé (attribut `summary`) dans le tableau pour expliciter la structure dans le cas d’un tableau complexe.
- Les balises `tbody`, `tfoot` et `thead` n’ont aucune influence sur l’accessibilité, il n’y a donc pas d’obligation à les utiliser.

**Objectif utilisateur&nbsp;:**
Donner un résumé et un titre aux tableaux de données permet à tous d’en connaître l’objet rapidement sans avoir à le parcourir. Pour des utilisateurs déficients visuels, lier les cellules aux en-têtes permet de se situer dans le tableau et de comprendre les données de celui-ci.

**Référence <abbr>WCAG</abbr>&nbsp;:**  
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#info-and-relationships">1.3.1 Info and Relationships</a>

## 14. Utiliser des tailles relatives et faire du web adaptatif

**Cible&nbsp;:** tout le monde, et en particulier les personnes déficientes visuelles, en mobilité et seniors.  
**Quand&nbsp;:** lors du développement.

**Description&nbsp;:**

N’utiliser pour les tailles de police et pour les éléments conteneurs que des tailles relatives (`em`, `rem`, `%`)  permettant l’agrandissement du texte seul de 200% et globalement faire une interface web adaptative (responsive web design) sauf si la présentation en 2 dimension est nécessaire pour l'usage ou l'utilisation  (images, cartes, diagrammes, vidéos, jeux, présentations, tableaux de données et barre d'outils…).

**À vérifier&nbsp;:**
- Ne pas utiliser le pixel (`px`) pour des tailles qui doivent pouvoir s’agrandir si l’on ne zoome que les textes (Internet Explorer ne le permet pas).
- Les éléments de formulaire doivent, eux aussi, posséder des tailles relatives pour s’agrandir.
- Penser à rendre fluides les conteneurs des textes afin qu’ils puissent s’agrandir lorsque les textes sont zoomés.
- Dans Firefox, faire Affichage>Zoom>Zoom texte seulement, utiliser les réglages du zoom pour atteindre 200%. Vérifier qu’il n’y a pas de perte d’information (disparition ou chevauchement de texte).  
- Le contenu doit s'adapter à la largeur de l'écran, il doit être consultable, sauf besoin particulier (carte, tableau, diagramme…), sans scroll horizontal pour une largeur de la zone d'affichage (<span lang="en">vewport</span>) est réduite à 320 pixels CSS. 
Note : on peut faire le contraire, viewport à 1280px CSS et on agrandit global (toute la page) à 400%.

![capture d’écran réglage du zoom dans Firefox](./images/zoom-200.png)

**Objectif utilisateur&nbsp;:**
Permettre aux utilisateurs (malvoyants, en mobilité, seniors…) d’augmenter la taille du texte et zoomer pour plus aisément accéder à l’information.

**Exemple&nbsp;:**  
Voir l’exemple [gestion du zoom, agrandissement de la taille du texte](./exemples/zoom/index.html) pour plus d’informations.

**Référence <abbr>WCAG</abbr>&nbsp;:**  
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#resize-text">1.4.4 Resize text</a>
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#reflow">1.4.10 Reflow</a>

## 15. Permettre d'aérer le texte

**Cible&nbsp;:** tout le monde, et en particulier les personnes déficientes visuelles, avec des limitations cognitives (dyslexique) et celles avec un déficit d'attention.  
**Quand&nbsp;:** lors de la conception et du développement.

Si l'utilisateur applique les réglages suivants, le texte doit rester lisible (pas de contenu tronqué, superposé):

- La hauteur des lignes doit pouvoir être ajustée à 1.5 fois minimum la taille de la police de caractères.
- L'espace situé entre deux paragraphes doit pouvoir être ajusté à 2 fois minimum la taille de la police de caractères.
- L'espacement entre les lettres doit pouvoir être ajusté à 0.12 fois minimum la taille de la police de caractères.
- L'espacement entre les mots doit pouvoir être ajusté à 0.16 fois minimum la taille de la police de caractères.

Cela revient à appliquer les styles CSS suivants : 
<pre><code class="css">
  * {
      line-height: 1.5!important;
      letter-spacing:.12em!important;
      word-spacing: .16em !important;
  }

  p {
      margin-bottom: 2em!important;
  }
</code></pre>

Pour faciliter le test, vous pouvez utiliser le bookmarklet suivant (à glisser dans votre barre de favoris) : 
<a href="javascript:(function(){document.querySelector(%27body%27).classList.add(%27text-spacing%27);%20var%20style%20=%20document.createElement(%27style%27),%20styleContent%20=%20document.createTextNode(%27.text-spacing%20*%20{%20line-height:%201.5%20!important;%20letter-spacing:%200.12em%20!important;%20word-spacing:%200.16em%20!important;%20}%20.text-spacing%20p{%20margin-bottom:%202em%20!important;%20}%20%27);%20style.appendChild(styleContent%20);%20var%20caput%20=%20document.getElementsByTagName(%27head%27);%20caput[0].appendChild(style);%20})();">Espacement du texte</a> crée par Steve Faulkner.

**Objectif utilisateur&nbsp;:**
Permettre aux personnes déficientes visuelles et cognitives d'améliorer le confort de lecture.

**Référence <abbr>WCAG</abbr>&nbsp;:**  
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#text-spacing">1.4.12 Text Spacing</a>

## 16. Rendre les intitulés des liens et des boutons accessibles

**Cible&nbsp;:** tout le monde, et en particulier les personnes déficientes visuelles, cognitives ou ayant un déficit d’attention et les utilisateurs de commande vocale.  
**Quand&nbsp;:** dès la phase de conception et lors du développement.

**Description&nbsp;:**

Il faut satisfaire à ces deux impératifs pour qu'un lien ou un bouton soit accessible :
- Tout d'abord, rendre les intitulés des liens et des boutons compréhensibles hors contexte, en particulier pour les déficients visuels. Lors de la navigation avec un lecteur d’écran, il est possible d’accéder à la liste des liens de la page pour naviguer rapidement. Si votre page contient plusieurs liens «&nbsp;en savoir plus&nbsp;», il sera impossible de les différencier les uns des autres. 
S’il n’est pas possible de rendre un lien ou un bouton plus explicite par l'intitulé, faute de place, mais que l’intitulé actuel est suffisant dans son contexte, on doit utiliser **un attribut `title`** pour faire apparaître une info-bulle, reprenant l'ensemble de l'information nécessaire, au survol avec la souris, mais également compléter l'intitulé par un contenu supplémentaire, au choix, via :
    - un morceau de texte caché par <a href="./exemples/masquage/index.html">masquage accessible</a> via CSS 
    - en utilisant un attribut `aria-label` ou `aria-labelledby` reprenant l'intégralité du contenu du `title` (cf. [les attributs ARIA qui peuvent vous sauver](./label-ledby-describedby.html)).

- De plus, le texte de l'étiquette affichée (l'intitulé textuel ou texte de l'image visible à l'écran) pour tout composant d'interface (lien, bouton…) doit être présent (en premier, si possible) dans le nom (accessible) de ce composant (pour aller plus loin, [Le nom accessible en HTML](./a11y-name.html).

Par exemple dans l’image ci-dessous, les deux éléments «&nbsp;valider&nbsp;» ne sont pas suffisamment explicites pour une personne utilisant un lecteur d’écran et ne bénéficiant pas obligatoirement du contexte. En revanche, quand on voit l’écran, le contexte fait qu’il n’y a pas d’ambiguïté sur leur rôle.

![capture d’écran présentant deux liens «&nbsp;valider&nbsp;» dont le libellé doit être explicité](./images/liens-valider.png)

**Solutions&nbsp;:**  

Ajouter un `span` en <a href="./exemples/masquage/index.html">masquage accessible</a> pour compléter l’intitulé. Il ne sera pas affiché à l’écran mais sera vocalisé par les outils d’assistance. 

<pre><code class="html">
&lt;a href="…" title="Valider le paiement en plusieurs fois"&gt;valider&lt;span class="masquage-accessible"&gt; le paiement en plusieurs fois&lt;/span&gt;&lt;/a&gt;
&lt;a href="…" title="Valider le paiement en une seule fois"&gt;valider&lt;span class="masquage-accessible"&gt; le paiement en une seule fois&lt;/span&gt;&lt;/a&gt;
</code></pre>

Une autre solution consiste à utiliser un attribut `aria-label` ou `aria-labelledby` pour préciser l’intitulé (cf. [les attributs ARIA qui peuvent vous sauver](./label-ledby-describedby.html)).  

<pre><code class="html">
&lt;a href="…" title="Valider le paiement en plusieurs fois" aria-label="Valider le paiement en plusieurs fois"&gt;valider&lt;/span&gt;&lt;/a&gt;
&lt;a href="…" title="Valider le paiement en une seule fois" aria-label="Valider la paiement en une seule fois"&gt;valider&lt;/span&gt;&lt;/a&gt;
</code></pre>

<pre><code class="html">
&lt;a href="…" title="Valider le paiement en plusieurs fois" aria-label="Valider le paiement en plusieurs fois"&gt;valider&lt;/span&gt;&lt;/a&gt;
&lt;a href="…" title="Valider le paiement en une seule fois" aria-label="Valider le paiement en une seule fois"&gt;valider&lt;/span&gt;&lt;/a&gt;
</code></pre>

**À vérifier&nbsp;:**
S’assurer que la sémantique <abbr>HTML</abbr> soit respectée&nbsp;:
- un lien doit permettre de changer d’<abbr>URL</abbr>, de page, de télécharger un fichier, de faire apparaître/disparaître du contenu, d’aller à un ancre.
- un bouton doit permettre de soumettre/réinitialiser un formulaire, d’ouvrir une fenêtre modale, de faire apparaître un sous-menu, de piloter un media, de déclencher une action via <abbr>JS</abbr>.

S’assurer que les liens et les boutons, une fois isolés du contenu, donnent une bonne information sur l’action déclenchée ou sa destination.

Une page ne doit pas avoir plusieurs liens ou boutons dont l’intitulé est le même, mais pointant sur des destinations/actions différentes.

**Objectif utilisateur&nbsp;:**
Permettre à un utilisateur n’ayant pas accès au contexte visuel de connaître la destination du lien ou l’action du bouton.

Notamment important pour les utilisateurs naviguant grâce à une liste de liens extraite de la page (lecteurs d’écran) ou les utilisateurs de loupe logicielle qui ne voient qu’une fraction de la page. 

**Objectif technique&nbsp;:**
Expliciter les liens et les boutons permet d’améliorer le référencement naturel.

**Exemple valide&nbsp;:**      
Associer à un lien «&nbsp;cliquer ici&nbsp;», un texte caché hors écran&nbsp;: «&nbsp;commander votre téléphone&nbsp;».
 
**Exemple non-valide&nbsp;:**      
Liens «&nbsp;Cliquez ici&nbsp;» ou «&nbsp;Lire la suite…&nbsp;» sans plus de précision.

**Référence <abbr>WCAG</abbr>&nbsp;:**  
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#link-purpose-link-only"> 2.4.9 Link Purpose (Link Only)</a>

## 17. Prévenir l’utilisateur de l’ouverture d’une nouvelle fenêtre

**Cible&nbsp;:** tout le monde, et en particulier les personnes déficientes visuelles, cognitives ou ayant un déficit d’attention.  
**Quand&nbsp;:** dès la phase de conception et lors du développement.

**Description&nbsp;:**

Prévenir l’utilisateur de l’ouverture de toute nouvelle fenêtre en l’indiquant dans l’intitulé du lien. 
En cas d’impossibilité avérée, utiliser **un attribut `title`** avec l'ensemble de l'information nécessaire (exemple : "Acheter le Nokia 7510 (nouvelle fenêtre)") et compléter l'intitulé par, au choix :
- l'utilisation d'une icône (image avec un `alt` indiquant l’ouverture d’une nouvelle fenêtre ou juste «&nbsp;(nouvelle fenêtre)&nbsp;»).
- un morceau de texte caché en <a href="./exemples/masquage/index.html">masquage accessible</a> via CSS.
- un attribut `aria-label` ou `aria-labelledby` reprenant l'intégralité du contenu du `title` (cf. [les attributs ARIA qui peuvent vous sauver](./label-ledby-describedby.html)).

**Exemple&nbsp;:**  
  
Exemple d’icône pouvant indiquer l’ouverture d’une nouvelle fenêtre.  
![capture d’écran d’un lien accompagné d’une icône indiquant l’ouverture d’une nouvelle fenêtre](./images/nouvelle-fenetre.png)  

**À vérifier&nbsp;:**
Pour tout lien ouvrant une nouvelle fenêtre ou un nouvel onglet, une mention du type «&nbsp;(nouvelle fenêtre)&nbsp;» est présente dans l’intitulé du lien, ou la mention «&nbsp;(nouvelle fenêtre)&nbsp;» est indiquée à l'utilisateur via le lecteur d'écran et via la présence d'une info-bulle sur le lien en question.

**Objectif utilisateur&nbsp;:**
Éviter l’ouverture inattendue de fenêtre, car cela peut gêner, perturber ou désorienter l’utilisateur. En particulier, pour des personnes en mobilité, utilisant des synthèses vocales ou présentant des déficiences cognitives.

**Exemple valide&nbsp;:**      
Pour un lien pointant à l’extérieur du site et ouvrant une nouvelle fenêtre, l’intitulé du lien texte «&nbsp;Accéder au site orange.com (nouvelle fenêtre)&nbsp;».
Pour une image-lien, un attribut `alt="consulter les conditions générales d’utilisation (nouvelle fenêtre)"`.    

**Référence <abbr>WCAG</abbr>&nbsp;:**   
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#on-input">3.2.2 On Input</a>

## 18. Permettre d’utiliser les principales fonctionnalités de l’application au clavier

**Cible&nbsp;:** tout le monde, et en particulier les personnes déficientes visuelles, cognitives, motrices et en mobilité.  
**Quand&nbsp;:** dès la phase de conception et lors du développement.

**Description&nbsp;:**
Mettre en place des gestionnaires d’événements qui ne s’appuient pas uniquement sur des événements souris, permettent donc d'être pilotable au clavier et ceci sans limite de temps. 

**À vérifier&nbsp;:**
- Toutes les actions importantes effectuées à la souris peuvent aussi l’être avec le clavier, quitte à proposer une alternative spécifique pour les interactions complexes (<i lang="en">drag’n’drop</i>, gestes à plusieurs doigts sur mobile …) tout en évitant d'innombrables frappes.

- Utiliser au maximum les composants <abbr>HTML</abbr> interactifs de base (champs, liens, boutons), ceux-ci étant nativement accessibles au clavier. À défaut, veiller à ce que les composants personnalisés soient opérables au clavier de manière classique.

Voir [la façon de naviguer au clavier](./methodes-outils-clavier.html) dans un navigateur web.

**Objectif utilisateur&nbsp;:**
 Permettre aux utilisateurs qui ne peuvent pas utiliser la souris (non ou malvoyants, déficients moteurs, cognitives, web mobile, en mobilité…) d’accéder aux fonctionnalités principales de l’application au clavier.

**Exemple valide&nbsp;:**      
- Un sous-menu qui se déroule au survol doit aussi se dérouler quand l’item de menu parent reçoit le focus clavier.
- Dans un webmail, un clic droit permet d’accéder à un menu pour vider la corbeille, un bouton «&nbsp;vider la corbeille&nbsp;» est également présent dans l’interface quand la corbeille est en cours de consultation. 
 
**Exemple non-valide&nbsp;:**      
Une fonctionnalité réalisable uniquement à l’aide du <i lang="en">drag’n’drop</i> et sans équivalent au clavier.

**Référence <abbr>WCAG</abbr>&nbsp;:**  
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#keyboard">2.1.1 Keyboard</a>

## 19. Rendre le parcours du focus séquentiel et logique sans piège clavier

**Cible&nbsp;:** tout le monde, et en particulier les personnes déficientes visuelles, cognitives ou avec un trouble de l’attention 1et en mobilité.  
**Quand&nbsp;:** lors du développement.

**Description&nbsp;:**

Les éléments (liens, boutons, éléments de formulaire) doivent recevoir le focus dans un ordre séquentiel et logique (de haut en bas et de gauche à droite) pour l’utilisateur, sans que celui-ci ne reste piégé ou bloqué, même pour du contenu généré dynamiquement apparaissant ou disparaissant (modification du DOM, Ajax,…). 

Exemple, les puces numérotées indiquent l'ordre de déplacement du focus dans cette page :  
![Capture d'écran indiquant l'ordre de déplacement du focus dans une page](./images/focus/focus-order.png)

**À vérifier&nbsp;:**
- Pour valider cette exigence, la position du focus doit être visible à tout moment (propriété `outline` et `:focus` en <abbr>CSS</abbr>), voir exigence 20, ci-dessous.
- Attention à l’ordre d’apparition des éléments dans le code <abbr>HTML</abbr>est le même  que l'ordre de déplacement du focus dans la page. Un élément présent à la fin du code source mais positionné tout en haut de la page via <abbr>CSS</abbr> sera le dernier à recevoir le focus. 
- Pour la maintenabilité, éviter l’utilisation de l’attribut `tabindex` avec des valeurs supérieures à 0.
- Même lors d’apparition ou de disparition de contenu, il faut conserver ce parcours logique et séquentiel.
 Ceci est vrai pour du contenu dynamiquement généré ou pour des <span lang="en"><abbr>SPA</abbr> (single page application)</span> ou des applications web sur une seule page. Pour plus de détails, voir [Gérer le focus pour du contenu dynamique](./exemples/dynFocus/index.html)

**Objectif utilisateur&nbsp;:**
Permettre la navigation logique sans piège au clavier dans les pages de l’application. Nécessaire pour les utilisateurs ne naviguant qu’au clavier (non ou malvoyants, déficients moteurs, déficients cognitifs, en mobilité).

**Exemple non-valide&nbsp;:**      
Une page contenant un lecteur vidéo dont le focus peut entrer à l’intérieur du lecteur, mais ne peut pas en sortir (piège clavier).        

**Référence <abbr>WCAG</abbr>&nbsp;:**
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#meaningful-sequence">1.3.2 Meaningful Sequence</a>
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#no-keyboard-trap">2.1.2 No Keyboard Trap</a>
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#focus-order">2.4.3 Focus Order</a>

## 20. Rendre visible le focus en toute circonstance

**Cible&nbsp;:** tout le monde, et en particulier les personnes déficientes visuelles, motrices, cognitives, ayant un déficit d’attention et en mobilité.  
**Quand&nbsp;:** dès la phase de conception et lors du développement.

**Description&nbsp;:**
Ne pas masquer le focus et si nécessaire accentuer sa visibilité sur tous les éléments focusables, par exemple en modifiant la propriété <abbr>CSS</abbr> `outline`.

Veiller à fournir un niveau de contraste suffisant pour que celui-ci soit visible par tous (cf. [mesurer le niveau de contraste des couleurs](methodes-outils-contrastes.html)).

Lorsqu’un effet est visible sur un élément au survol de la souris (`:hover` en <abbr>CSS</abbr> par exemple), cet effet doit être également affiché à la prise du focus (`:focus`).

Il est possible, avec du code Javascript, de n’afficher l’`outline` que lors d’une navigation au clavier (c’est à dire de ne pas afficher l’`outline` lors d’un clic souris, qui active également l’état `:focus`)&nbsp;:

<pre><code class="javascript">
var head = document.head || document.getElementsByTagName(’head’)[0];
var axsStyles = head.appendChild(document.createElement(’style’));
document.addEventListener(’mousedown’, function() {
	axsStyles.innerHTML = ’* {outline:none !important}’;
});
document.addEventListener(’keydown’, function() {
	axsStyles.innerHTML = ’’;
});
</code></pre>

<a href="https://codepen.io/paipai/pen/jwLyzK">Démonstration de la visibilité du focus à la navigation clavier uniquement</a>

**À vérifier&nbsp;:**
Dans beaucoup de <i lang="en">frameworks</i> <span lang="en">front</span> ou dans les <i lang="en">reset</i> <abbr>CSS</abbr>, la propriété `outline` (qui permet de visualiser le focus) est désactivée (`outline: none;`), penser à la redéfinir et vérifier que le focus est visible sur tous les éléments le recevant.

 Par défaut, le focus est visible via la propriété <abbr>CSS</abbr> <code class="css">outline: 1px</code>. Ceci n'est pas suffisant pour être bien visible, nous préconisons au moins `2px` pour la propriété `outline` et un contraste de 3:1 par rapport à la couleur de fond. 
 
 De plus, il faut vérifier la visibilité du focus sur tous les éléments focusables, notamment, car la couleur de fond de l'élément peut être la même que le focus et donc, masquer celui-ci. 

**Objectif utilisateur&nbsp;:**
Permettre la visibilité du focus sur tous les éléments actifs, notamment pour les utilisateurs de clavier (déficients visuels, moteurs ou ceux ayant des déficiences d’attention et de mémorisation ou en mobilité).

**Exemples valides&nbsp;:**  
Dans les captures d’écran suivantes, le focus est positionné sur le lien «&nbsp;209 SMS/mois&nbsp;».  
La première capture présente le comportement par défaut (focus représenté par des pointillés).
Dans la seconde capture, les pointillés ont été supprimés, mais un encadré permet d’indiquer de manière explicite l’emplacement du focus.  
![capture d’écran présentant l’affichage du focus par défaut](images/focus.png)
![capture d’écran présentant un comportement personnalisé pour l’affichage du focus](images/focus2.png)

**Référence <abbr>WCAG</abbr>&nbsp;:**  
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#focus-visible">2.4.7 Focus Visible</a>

## 21. Fournir des liens d’évitement

**Cible&nbsp;:** utile pour les utilisateurs de mobile et tablette, les personnes déficientes visuelles et les personnes souffrant de handicap moteur ou en mobilité.  
**Quand&nbsp;:** dès la phase de conception et lors du développement.

**Description&nbsp;:**

Mettre en place des liens d’accès direct (liens d’évitement) permettant d’accéder aux principales zones de la page (navigation, contenu, pied de page, recherche…) grâce à des liens internes vers des ancres (balises `<a>` ou tout élément <abbr>HTML</abbr> possédant un attribut `id`). En cas de **fortes contraintes,** ces liens peuvent être cachés et affichés uniquement lors de la navigation clavier.

**À vérifier&nbsp;:**
Lorsqu’un lien d’évitement est activé, vérifier que le focus est bien déplacé (il ne s’agit pas uniquement de faire défiler la page au bon endroit).

**Objectif utilisateur&nbsp;:**
Faciliter la navigation pour des utilisateurs naviguant au clavier, des utilisateurs malvoyants, utilisateurs de loupe logicielle ou de téléphone mobile.
     
**Exemple&nbsp;:**  
Des liens d’évitement («&nbsp;Aller à la navigation&nbsp;», «&nbsp;Aller au contenu&nbsp;») sont disponibles sur ce site.
Pour les faire apparaître, placer le focus en haut de la page en cliquant sur la barre d’adresse de votre navigateur par exemple puis appuyer plusieurs fois sur la touche <kbd>TAB</kbd>.

![capture d’écran du site orange.com](images/skiplink.png)   

**Référence <abbr>WCAG</abbr>&nbsp;:**  
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#bypass-blocks">2.4.1 Bypass Blocks</a>

## 22. Permettre le contrôle des animations
**Cible&nbsp;:** les personnes malvoyantes, les personnes éprouvant des difficultés de lecture, d’attention ou de compréhension, les personnes épileptiques.  
**Quand&nbsp;:** lors de la conception du service et lors de la conception graphique.

**Description&nbsp;:**  
Tout contenu en mouvement, mis à jour automatiquement, clignotant ou en défilement (par exemple un carrousel) doit pouvoir être stoppé, caché ou mis en pause par l’utilisateur si cette animation dure plus de 5 secondes.

Par ailleurs, aucun élément de la page ne doit produire de flashs lumineux ou de changements brusques de luminosité plus de 3 fois en une seconde (cf. [Le logo des <abbr>JO</abbr> provoque des crises d’épilepsie](http://www.leparisien.fr/societe/le-logo-des-jo-provoque-des-crises-d-epilepsie-09-06-2007-2008107333.php)).

Il faut donc prévoir une pause au chargement de la page ou un moyen de stopper ou mettre en pause l’animation, la mise à jour ou le clignotement via un bouton par exemple.

**Exemple&nbsp;:**  
![capture d’écran d’un carrousel disposant d’un bouton pour mettre en pause l’animation](./images/carrousel.png)  

Un carrousel qui défile automatiquement doit se mettre en pause au survol de la souris ou lorsqu’il a le focus.  
Il est également possible d’ajouter un bouton «&nbsp;pause&nbsp;» directement dans l’interface.

**Référence <abbr>WCAG</abbr>&nbsp;:**  
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#pause-stop-hide">2.2.2 Pause, Stop, Hide</a>
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#three-flashes-or-below-threshold">2.3.1 Three Flashes or Below Threshold</a>

## 23. S’assurer que les principales fonctionnalités sont utilisables avec les lecteurs d’écran

**Cible&nbsp;: ** tout le monde, et en particulier les personnes déficientes visuelles.  
**Quand&nbsp;: **lors du développement.

**Description&nbsp;:**

Respecter les recommandations générales d’accessibilité, utiliser en priorité les composants standards <abbr>HTML</abbr>, sinon, utiliser <abbr>ARIA</abbr> (<i lang="en">Accessible Rich Internet Applications</i>) pour les composants d’interface complexes.

**À vérifier&nbsp;:**

S’assurer de l’absence de point bloquant avec les couples navigateur/lecteur d’écran (Firefox/<abbr>NVDA</abbr>, <abbr>IE</abbr>/Jaws, Safari/VoiceOver) dans les parcours utilisateurs (scénarios d’utilisation des principales fonctionnalités de l’application).
En effet, les utilisateurs de lecteur d’écran sont les plus impactés par un manque d’accessibilité, on repère un grand nombre de problèmes en vérifiant cette exigence.

**Objectif utilisateur&nbsp;:**
Permettre à l’utilisateur de lecteur d’écran d’accéder aux principales fonctionnalités de l’application, mais aussi s’assurer pour tous les utilisateurs de l’utilisabilité de l’application.


## 25. S’assurer que l’utilisateur garde le contrôle lors des interactions

**Cible&nbsp;:** tout le monde, et en particulier les personnes déficientes visuelles, cognitives ou avec un déficit d’attention, les utilisateurs qui augmentent la taille du pointeur souris, avec des mouvements peu précis et ceux qui utilisent la commande vocales.  

**Quand&nbsp;:** dès la phase de conception et lors du développement.

**Description&nbsp;:**
- Ne pas induire de changement de contexte lors de la prise de focus, la saisie de données ou l’activation d’un élément de formulaire sans que ce changement soit prévisible (bouton) ou que l’utilisateur ait été averti.  
- Ne pas imposer à l’utilisateur un temps imparti pour effectuer une action. Celui-ci doit être en mesure de rallonger un temps imparti le cas échéant.
- Si des raccourcis clavier reposant sur un seul caractère (lettre, y compris les lettres majuscules et minuscules, ponctuation, nombre ou symbole) sont disponibles, il est nécessaire de prendre certaines mesures afin d'éviter d'éventuels conflits avec des outils d'assistance.
- Laisser le contrôle à l'utilisateur des contenus s'ouvrant au survol ou à la prise de focus (<span lang="en">tooltip</span>, infobulle).

**À vérifier&nbsp;:**  

1. Concernant les raccourcis, s'assurer qu'au moins une des affirmations suivantes est vraie:
 - **désactivation**: le raccourci peut être désactivé.
 - **modification**: le raccourci peut être modifié (possibilité de choisir une seule ou plusieurs touches successives pour déclencher le raccourci), avec la possibilité d'ajouter 1 ou plusieurs caractères non-imprimables (Ctrl, Alt, etc.) à la combinaison.
 - **activation au focus**: le raccourci est actif uniquement à la prise du focus sur l'élément concerné. 

2. Si du contenu apparaît au survol de la souris ou à la prise de focus (ex: infobulle), l'utilisateur doit pouvoir :
Si du contenu apparaît au survol de la souris ou à la prise de focus (ex: infobulle), l'utilisateur doit pouvoir, **à la fois** :
- Masquer ce nouveau contenu sans avoir besoin de déplacer le pointeur ou le focus ; par exemple, avec la touche <kbd>échap.</kbd> (utile notamment pour les utilisateurs de loupe d'écran).
- Déplacer le pointeur de la souris sur ce nouveau contenu sans que celui-ci disparaisse.
- Accéder au contenu supplémentaire jusqu'à ce que le survol ou le focus soit retiré du déclencheur, que l'utilisateur le fasse disparaître ou les informations ne soient plus valides (pas de temporisation).

3. Si des actions doivent être réalisées dans un temps imparti, vérifier que l’utilisateur puisse allonger ou supprimer cette restriction.

**Objectif utilisateur&nbsp;:**
donner à tous les utilisateurs la maîtrise de l'apparition de contenu, des changements de contexte lié à son action et lui laisser le temps nécessaire pour effectuer une action.

**Exemple&nbsp;:**    
Un formulaire doit obligatoirement posséder un bouton d’envoi. Il ne doit pas être envoyé automatiquement après la saisie de l’utilisateur.

**Référence <abbr>WCAG</abbr>&nbsp;:**  
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#content-on-hover-or-focus">1.4.13 Content on Hover or Focus</a>
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#timing-adjustable">2.2.1 Timing Adjustable</a>
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#on-focus">3.2.1 On Focus</a>
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#on-input">3.2.2 On Input</a>
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#character-key-shortcuts">2.1.4 Character key shortcuts</a>

## 26. Éviter les captcha
**Cible&nbsp;:** tout le monde en particulier, les personnes déficientes visuelles.  
**Quand&nbsp;:** lors de la conception et lors du développement.

**Description&nbsp;:**  
Les captcha sont souvent la source de difficultés pour les utilisateurs. Si la mise en place d’un système anti-spam ne peut être évitée, il est souhaitable de s’orienter vers une solution plus souple pour l’utilisateur&nbsp;: 

- Double authentification
- Champ de formulaire caché à laisser vide (technique du <span lang="en">honeypot</span>), non-visibles pour l’utilisateur
- Mise à disposition d’un support téléphonique afin de s’assurer que le client est une vraie personne
- Un contrôle permettant de s’assurer qu’une même combinaison <abbr>IP</abbr>/<i lang="en">User agent</i> ne tente pas de soumettre le formulaire plus de N fois par seconde.

Si aucune autre alternative n’est possible, il est indispensable de prévoir une alternative pour les captcha uniquement visuels ou sonores en proposant une  combinaison de captcha&nbsp;: un captcha  audio + visuel, des tests logiques (question dont la réponse est évidente, test  mathématique simple…) + captcha visuel classique…

Plus de détails sur [les Captchas](./captcha.html).

**Référence <abbr>WCAG</abbr>&nbsp;:**  
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#non-text-content">1.1.1 Non-text Content</a>

## 27. Identifier et conserver la cohérence des regroupements et des différentes régions de la page
**Cible&nbsp;:** tout le monde et en particulier les personnes déficientes visuelles, cognitives ou ayant des troubles de l’attention.

**Description&nbsp;:**
Fournir des moyens d’identifier et de distinguer visuellement les différentes parties de la page et assurer la cohérence de ces régions ou regroupements dans toutes les pages.

**À vérifier&nbsp;:** 
- S'assurer que les liens dans le corps du texte sont facilement identifiables visuellement par un autre moyen que la couleur (souligné, gras…) par rapport au reste du texte.
- S’assurer que les mécanismes de navigation sont toujours situés au même endroit dans un ensemble de page.
- S’assurer que les composants et les regroupements qui ont la même fonction sont identifiés (visuellement et sémantiquement) de la même façon.
- S’assurer que les zones de la page sont clairement délimitées (bordures, filets, contraste suffisant…) ou qu’il y a un moyen de distinguer visuellement les groupes (sous-menu, liste déroulante…) ainsi que les différentes régions de la page.

**Objectif utilisateur&nbsp;:**
Permettre aux utilisateurs d’identifier et localiser les éléments d’interface dans toutes les pages.

**Exemple valide&nbsp;:**  
![capture d’écran du site 100% pratique](images/groupement.jpg)  
Ici, l’info bulle (<i lang="en">tooltip</i>) est délimitée par une bordure bien visible et suffisamment contrastée, permettant de bien identifier son contenu.

**Exemple non-valide&nbsp;:**  
![capture d’écran du site fnac.com](images/groupement2.jpg)  
Il est très difficile d’associer les thèmes («&nbsp;par région&nbsp;», «&nbsp;par genre&nbsp;»…) et les sous-thèmes en colonnes, d’autant plus que les filets horizontaux sont trop peu contrastés.

**Exemple&nbsp;: Les balises <abbr>HTML5</abbr> et <i lang="en">landmarks</i> <abbr>ARIA</abbr>**
Pour donner une structure sémantique aux grandes régions d’une page, on peut utiliser les balises de structure <abbr>HTML5</abbr> (`main` pour le contenu principal de la page, `nav` pour la navigation principale, `header` pour l’entête de page, `footer` pour le pied de page, `aside` pour du contenu complémentaire au contenu principal, et d’autres) même si leur support par les technologies d’assistance/navigateurs n’est pas total , il est suffisant. On peut aussi utiliser, pour mettre en place cette structure de page, [les <i lang="en">landmarks</i> <abbr>ARIA</abbr> (<i lang="en">Accessible Rich Internet Applications</i>)](https://www.w3.org/TR/wai-aria-practices/examples/landmarks/index.html) et là, le support est bien meilleur&nbsp;!

Tout sur <a href="./exemples/landmarks/index.html">les <i lang="en">landmarks</i> <abbr>ARIA</abbr> dans nos exemples</a>.

Mettre en place ce type de sémantique permet aux déficients visuels d’identifier et comprendre l’organisation, la structure globale de la page et donc de naviguer plus facilement.

**Référence <abbr>WCAG</abbr>&nbsp;:**  
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#consistent-navigation">3.2.3 Consistent Navigation</a>
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#consistent-identification">3.2.4 Consistent Identification</a>

## 28. Fournir des accès multiples et une localisation

** Cible&nbsp;:** tout le monde et en particulier les personnes déficientes visuelles ou cognitives.

** Description&nbsp;:**
Donner à l’utilisateur plusieurs moyens de situer et accéder à un contenu spécifique, localiser la page Web en cours de consultation dans un ensemble de pages. Lorsque la page est une étape dans un processus où les pages s’enchaînent les unes après les autres, ce critère peut être ignoré.

** À vérifier&nbsp;:**
S’assurer que plusieurs systèmes permettent de situer et accéder à une page ou un contenu dans le site&nbsp;: un outil de recherche sur l’ensemble du site, un plan du site, un menu de navigation global, un fil d’Ariane…
** Objectif utilisateur&nbsp;:**
Permettre à tous les utilisateurs de se repérer afin d’accéder plus facilement à l’ensemble du contenu du site.

** Exemple valide&nbsp;:**
Le site propose, à la fois, une navigation principale complète et précise et un fil d’Ariane.

** Exemple invalide&nbsp;:**
Une application offre un menu de navigation parcellaire et aucun autre moyen pour l’utilisateur de s’orienter dans les pages ou de repérer où se situe la page courante dans l’arborescence.

**Référence <abbr>WCAG</abbr>&nbsp;:**  
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#multiple-ways">2.4.5 Multiple Ways</a>
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#location">2.4.8 Location</a>

## 29. Définir des zones sensibles de taille suffisante

**Cible&nbsp;:** tout le monde en particulier les personnes souffrant de handicap moteur ou visuel et en mobilité.  
**Quand&nbsp;:** lors de la conception et lors du développement.

**Description&nbsp;:**  
Chaque zone sensible doit avoir une taille suffisante (9mm minimum de largeur et de hauteur).
Par ailleurs les zones sensibles doivent être suffisamment espacées les unes des autres (environ 2mm minimum).

## 30. Autoriser l'utilisation du zoom

**Cible&nbsp;:** tout le monde en particulier les personnes déficientes visuelles.  
**Quand&nbsp;:** lors du développement.

**Description&nbsp;:**  
Le site ne doit pas interdire ou limiter l'utilisation du zoom (notamment sur les mobiles).

## 31. Permettre d'annuler le déclenchement des interactions gestuelles

**Cible&nbsp;:** Facilite l'annulation pour tous les utilisateurs en cas d'erreur sur la cible.
Aide les personnes ayant des déficiences visuelles, des limitations cognitives et des déficiences motrices.
Les personnes incapables de détecter les changements de contexte sont moins susceptibles d'être désorientées lors de la navigation sur un site.
**Quand&nbsp;:** lors du développement.

**Description&nbsp;:**  
Lors d'une interaction gestuelle mono-point, au moins une condition est vraie :
- l'événement descendant du pointeur (<span lang="en">MouseDown</span>) n'est pas utilisé pour effectuer une partie de la fonction
- Pouvoir abandonner ou annuler, la fonction est terminée sur l'événement montant (<span lang="en">MouseUp</span>) et un mécanisme est disponible pour abandonner la fonction avant la fin ou pour annuler la fonction une fois terminée
- Pouvoir sur l'événement montant inverser tout résultat de l'événement descendant précédent
- Terminer la fonction sur l'événement est essentiel. Note : les fonctions qui émulent un appui clavier ou un pavé numérique sont considérées comme essentielles. 

**Référence <abbr>WCAG</abbr>&nbsp;:**  
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#pointer-cancellation">2.5.2 Pointer Cancellation</a>

## 32. Proposer une alternative aux gestuelles complexes

**Cible&nbsp;:** tout le monde en particulier les personnes souffrant de handicap moteur ou visuel, de troubles cognitifs ou d'apprentissage et en mobilité. Les utilisateurs qui ne peuvent pas (avec précision) effectuer des gestes complexes avec un pointeur. Les utilisateurs novices qui ignorent souvent la prise en charge de gestes de pointeur complexes. 
**Quand&nbsp;:** lors de la conception et lors du développement.

**Description&nbsp;:**  
- Pour chaque interaction gestuelle complexe ou basée sur une trajectoire (<span lang="en">swipe, drag, pinch</span>…), une alternative doit être disponible (par exemple une alternative non gestuelle ou simplifiée) sauf si cette gestuelle ou cette trajectoire est essentielle (ex. : signature).
- De même, pour les interactions nécessitant un changement d'orientation de l'appareil ou un mouvement de l'utilisateur (basculement, rotation, secouement…),  cette fonctionnalité peut être désactivée et doit avoir une alternative dans l'interface.

**Gestuelles complexes**: tout geste multi-points (nécessitant plusieurs doigts), et/ou nécessitant de suivre une trajectoire précise.  
**Gestuelle simplifiée**: une alternative nécessitant un seul pointeur (un seul doigt) et sans trajectoire précise.

**Référence <abbr>WCAG</abbr>&nbsp;:**  
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#pointer-gestures">2.5.1 Pointer Gestures</a>
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#motion-actuation">2.5.4 Motion Actuation</a>

## 33. Donner accès au contenu quelle que soit l'orientation de l'écran

**Cible&nbsp;:** tout le monde en particulier les personnes souffrant de handicap moteur ou visuel et en mobilité.  
**Quand&nbsp;:** lors de la conception et lors du développement.

**Description&nbsp;:**  
L'accès au contenu ne doit pas dépendre de l'orientation de l'écran (portrait et paysage), sauf si une orientation particulière est essentielle pour la compréhension ou l'utilisation du contenu (projection, tableau…).

**Référence <abbr>WCAG</abbr>&nbsp;:**  
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#orientation">1.3.4 Orientation</a>

## 34. Permettre de connaître le résultat d'une interaction utilisateur à l'aide de messages contextuels

**Cible&nbsp;:** tout le monde, et en particulier les personnes déficientes visuelles, cognitives et des troubles de l'attention 
**Quand&nbsp;:** dès la conception, à la rédaction du contenu et pendant le développement.

**Description&nbsp;:**
Fournir à l'utilisateur de technologie d'assistance (<abbr>AT</abbr>) des messages d'état qui lui donnent un retour sur l'action qu'il vient d'effectuer dans son parcours sans recevoir le focus.

**À vérifier&nbsp;:**
Les informations importantes pour l'utilisateur mais sans changement de contexte (pas d'ouverture d'une nouvelle fenêtre, sans prise de focus, pas de modification du contenu ou du <span lang="en">viewport<span>) doivent être perçues via des propriétés et roles (<abbr>ARIA</abbr>) par toute personne utilisant une <abbr>AT</abbr> sans prise de focus sur le message.
   
Un message de statut, d'état ou message contextuel peut être&nbsp;:
- un message qui donne à l'utilisateur une information sur le résultat ou la réussite d'une action (ex: Votre demande a bien été pris en compte)
- un message d'attente qui indique que l'action déclenchée est en cours d'exécution et qui indique un temps d'attente approximatif
- un message d'erreur suite à une interaction utilisateur
- un message qui donne une information sans un changement de contexte

En <abbr>HTML</abbr>, les rôles spécifiques <abbr>ARIA</abbr> de type `alert`, `status`, `dialog`, `progressbar`, etc. sont les moyens de rendre accessible ces messages de statut (pour aller plus loin [Utiliser ARIA pour les messages d'état, de statut ou contextuel"](./aria-status.html).

**Objectif utilisateur&nbsp;:**
Pour tous les utilisateurs d'<abbr>AT</abbr>, avoir un feedback sur les actions essentielles qu'il effectue.

**Référence <abbr>WCAG</abbr>&nbsp;:**  
- <a lang="en" href="https://www.w3.org/TR/WCAG21/#status-messages">4.1.3 Status Messages</a>


<!--  This file is part of a11y-guidelines | Our vision of mobile & web accessibility guidelines and best practices, with valid/invalid examples.
 Copyright (C) 2016  Orange SA
 See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). -->