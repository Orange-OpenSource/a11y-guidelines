# Critères incontournables pour la conception

<script>$(document).ready(function () {
    setBreadcrumb([
        {"label":"Critères incontournables", "url": "./fondamentaux.html"},
        {"label":"Critères incontournables pour la conception"}]
    );
    addSubMenu([
        {"label":"La conception", "url":"fondamentaux.html", "expanded":true}, 
        {"label":"Le développement", "url":"fondamentaux-tech.html"}
    ]);
});</script>

<span data-menuitem="fondamentaux"></span>
 
## 1. Donner un titre aux pages  
**Cible&nbsp;:** tout le monde et en particulier les personnes déficientes visuelles.  
**Quand&nbsp;:** dès la conception et pendant le développement.

**Description&nbsp;:**  
Donner à chaque page un titre qui lui est spécifique et qui reflète son contenu ou sa fonction (balise `<title>`).  
Le titre de la page est le premier élément lu par la synthèse vocale, il doit permettre d’identifier formellement la page sur laquelle on se trouve.

**À vérifier&nbsp;:**
- Bien qu’il n’y ait pas de règle, en général (ouverture de nombreux onglets de multiples applications), on va de l’information la plus spécifique vers la moins spécifique (ex&nbsp;: nom de la page courante - nom du site). Pour le fenêtrage d’une multitude d’applications, le contexte d’utilisation est différent&nbsp;; dans ce cas, on préférera aller de l’information la moins spécifique vers la plus spécifique.
- Lorsque le contenu de la page est modifié dynamiquement (affichage du résultat d’une recherche, erreurs dans un formulaire, action utilisateur ajoutant du contenu…), le titre de la page doit refléter cette modification du contenu.

**Exemple valide&nbsp;:**  
`Accueil - Espace client Orange`
 
**Exemple non-valide&nbsp;:**  
`Accueil`

## 2. Donner des titres aux rubriques
**Cible&nbsp;:** tout le monde et en particulier les personnes déficientes cognitives, ayant des difficultés pour lire ou déficientes visuelles.  
**Quand&nbsp;:** dès la conception, à la rédaction du contenu et pendant le développement.

**Description&nbsp;:**  
Identifier les balises de titres à utiliser (balises <abbr>HTML</abbr> `h1` jusqu’à `h6`) pour structurer le contenu des pages.
Les personnes malvoyantes naviguant à l’aide d’un lecteur d’écran peuvent accéder à la liste des titres de la page pour naviguer rapidement. 
Tout comme dans un fichier Word, il est possible d’utiliser la table des matières si des titres ont correctement été positionnés à l’intérieur du document.  

**À vérifier&nbsp;:**

- Les titres doivent être pertinents, refléter la structure de l’information contenue dans la page.
- Il ne doit pas exister de saut dans la hiérarchie des titres (on ne passe pas directement d’un titre `h2` à un titre `h4`).
- On peut mettre plusieurs `h1` par page (se limiter tout de même à deux dans la majorité des cas).

**Exemple valide&nbsp;:**  
    
Un titrage de page cohérent et pertinent&nbsp;:

```
(Titre 1) Accueil - Orange
	(Titre 2) Les actualités
	(Titre 2) La fibre arrive&nbsp;!
		(Titre 3) Êtes-vous éligible&nbsp;?
```

## 3. Assurer un contraste suffisant entre prem les couleurs de premier plan et de fond
**Cible&nbsp;:** tout le monde et en particulier les utilisateurs sur mobile et tablette, les personnes malvoyantes, éprouvant des difficultés de lecture ou avec un déficit d’attention et les seniors.   
**Quand&nbsp;:** dès la phase de conception et lors du développement.

**Description&nbsp;:**  
Le niveau de contraste entre le texte ou un composant graphique et l’arrière-plan doit être suffisamment élevé.
Un niveau de contraste insuffisant sera préjudiciable pour les utilisateurs ayant des difficultés visuelles ainsi que pour les utilisateurs de mobiles et tablettes se trouvant dans un environnement très lumineux.
    
**Exemple non-valide&nbsp;:**  
Le texte «&nbsp;film&nbsp;| 20h40…&nbsp;» ne présente pas un contraste suffisant. Celui-ci ne sera pas lisible par tous les utilisateurs.  

![capture d’écran présentant du texte dont le contraste n’est pas suffisant](images/contraste.png)

Les icônes ci-après sont porteuses d’information pour les utilisateurs. Elles devront alors avoir un contraste de couleur de 3:1.

![capture d’écran présentant des icônes et des graphiques dont le contraste n’est suffisant](images/icones.png)

**À vérifier&nbsp;: **
- S'assurer que le contraste entre la couleur du fond et celle du texte et également pour du texte sous forme d’image porteur d’information, est :
  - De 4.5:1 minimum pour une taille inférieure à 24px <abbr>CSS</abbr> et 19px <abbr>CSS</abbr> en gras.
  - De 3:1 minimum suffit pour une taille est supérieure à 24px <abbr>CSS</abbr> et 19px <abbr>CSS</abbr> en gras.
- S'assurer que Les objets graphiques porteurs d'information non-textuelle, les composants d’interface utilisateur et les états de l'interface (focus, hover…) ont un contraste de 3:1. Sont concernés, entre autres&nbsp;: les boutons, les boutons radios, les cases à cocher, les listes de sélection, les menus et volets de navigation, les barres d’outils, les onglets, les carrousels, les curseurs, les barres de progression, les bulles d’aides, les graphiques… On n’est pas tenus d’appliquer ce critère&nbsp;:

  -	si le composant graphique ne peut pas être représenté autrement (drapeau, logotype, photos réelles, captures d'écran, diagrammes d'informations médicales utilisant les couleurs de la biologie, dégradés représentant une mesure, cartes de chaleur…)
  -	si un texte, comme un label, un tableau de donnée… apporte la même information que l’icône ou le graphique.
  -	si le manque de contraste de l’image n'empêche pas la compréhension du contenu ou d'identifier la fonction 
  - si un composant d'interface est inactif et donc peut être ignoré par l’utilisateur sans réelle perte d'information.
- **Attention&nbsp;:** pour des applications principalement utilisées en web mobile ou en mobilité, le niveau de contraste des principaux éléments doit être de 7:1 afin d’assurer une bonne lisibilité pour tous.

**Outil&nbsp;:**  
L’application <a href="http://www.paciellogroup.com/resources/contrastanalyser/" hreflang="en" lang="en">Colour Contrast Analyser</a> permet de mesurer rapidement des niveaux de contraste de couleurs (gratuit pour Mac et Windows).  
 
## 4. Ne pas utiliser la couleur ou l’information sensorielle comme seule source d’information
**Cible&nbsp;:** tout le monde et en particulier les daltoniens et plus généralement les personnes malvoyantes ou ayant une déficience cognitive, auditive et les seniors.  
**Quand&nbsp;:** dès la phase de conception et lors du développement.

**Description&nbsp;:**  
Ne pas utiliser la couleur ou une information sensorielle (forme, taille, son, orientation, localisation visuelle…) comme la seule façon de véhiculer de l’information, d’indiquer une action, de solliciter une réponse ou de distinguer un élément. L’information fournie par un changement de couleur ou une information sensorielle doit être complétée par une information textuelle (alternative) ou/et structuration sémantique.

**Exemple valide&nbsp;:**  

![illustration utilisant des icônes de couleurs avec des formes différenciées pour transmettre l’information](images/couleur-ok.png)

**Exemple non-valide&nbsp;:**
  
![illustration utilisant des icônes de couleurs avec des formes identiques pour transmettre l’information](images/couleur-ko.png)  

Cet exemple n’est pas valide, car l’information est transmise uniquement par la couleur.

**À vérifier&nbsp;:**
- Faire une capture d’écran et la passer en noir et blanc. La perte des couleurs ne doit pas entraîner de difficulté dans la navigation, ni provoquer de perte d’information.
- Couper le son, le niveau d’information doit rester identique.

## 5. Définir des équivalents textuels
**Cible&nbsp;:** les personnes déficientes visuelles, les personnes malentendantes ou déficientes cognitives et les moteurs de recherche.  
**Quand&nbsp;:** dès la conception et pendant le développement.

**Description&nbsp;:**  
Mettre en place des alternatives textuelles pour tous les éléments informatifs non-textuels (alternatives aux images, icônes). De même, prévoir des scripts ou des sous-titres pour les contenus audio ou vidéo.

**Exemple&nbsp;:**  
Dans la capture ci-dessous, il faudrait par exemple prévoir dès la conception les textes alternatifs pour chaque bouton&nbsp;:
- «&nbsp;menu&nbsp;»,
- «&nbsp;réglages&nbsp;»,
- «&nbsp;chaîne précédente&nbsp;»
- «&nbsp;couper le son&nbsp;»
- …  

![capture d’écran d’un lecteur vidéo contenant plusieurs boutons](images/player.png)   

## 6. Assurer la visibilité du focus
**Cible&nbsp;:** tout le monde et en particulier les personnes déficientes visuelles, motrices, cognitives et en mobilité.  
**Quand&nbsp;:** lors de la conception graphique et lors du développement.

**Description&nbsp;:**  
La position du focus clavier doit être visible par tous les utilisateurs. Par défaut, le navigateur entoure l’élément avec des pointillés ou un cadre de couleur. Globalement, ce comportement peut être modifié (nous préconisons au moins `2px` pour ce cadre pointillé) ou remplacé (inversion de couleur, modification de la couleur de fond/texte…) pour être rendu plus visible mais ne doit pas être supprimé. 
Veiller à fournir un niveau de contraste suffisant de 3:1 par rapport à la couleur de fond pour rendre visible le focus (cf. [mesurer le niveau de contraste des couleurs](methodes-outils-contrastes.html)).
De plus, il faut vérifier la visibilité du focus sur tous les éléments focusables, notamment, car la couleur de fond de l'élément peut être la même que le focus et donc, masquer celui-ci. 
Les utilisateurs qui naviguent à l’aide du clavier (touche TAB) ont besoin de connaître la position du focus à tout moment.

L’effet visible à la prise du focus doit être étudié dès la conception graphique au même titre que l’effet visible au survol du pointeur de la souris.
    
**Exemples valides&nbsp;:**  
Dans les captures d’écran suivantes, le focus est positionné sur le lien «&nbsp;209 SMS/mois&nbsp;».  
La première capture présente le comportement par défaut (focus représenté par des pointillés).
Dans la seconde capture, les pointillés ont été supprimés, mais un encadré permet d’indiquer de manière explicite l’emplacement du focus.  
![capture d’écran présentant l’affichage du focus par défaut](images/focus.png)
![capture d’écran présentant un comportement personnalisé pour l’affichage du focus](images/focus2.png)
  
## 7. Agrandissement de texte et adaptation à la taille d’affichage

**Cible&nbsp;:** tout le monde et en particulier les personnes déficientes visuelles, en mobilité et seniors.  
**Quand&nbsp;:** lors de la conception graphique et principalement lors du développement.

**Description&nbsp;:**  
La taille du texte doit pouvoir être multipliée par 2 (zoom du texte à 200% depuis les réglages du navigateur). À ce niveau de zoom, la présentation de la page peut être altérée, mais l’information doit rester lisible (pas de texte tronqué, ni superposé).

De plus, il faut s’assurer de faire du contenu web adaptatif (responsive web design) donc prévoir les différents affichages selon des largeurs type d’écran (points de rupture) en amont du développement. 

Par ailleurs, certains choix de design peuvent ou non faciliter la mise en place de ce critère lors du développement, il est donc important d’y réfléchir dès le départ.

    
**Exemple&nbsp;:**    
La capture ci-dessous montre une page avec un zoom à 100%.  
![capture d’écran avec zoom à 100%](images/zoom.png)    
  
**Exemple valide&nbsp;:**  
Avec zoom du texte à 200%.  
![capture d’écran avec zoom à 200% et texte lisible](images/zoom-ok.png)    
  
**Exemple non-valide&nbsp;:**  
Avec zoom du texte à 200%. Ici la hauteur de l’élément contenant le texte n’a pas été rendue variable en fonction de la taille des caractères.  
![capture d’écran avec zoom à 200% et texte tronqué](images/zoom-ko.png)  

## 8. Permettre d’aérer le texte

**Cible&nbsp;:** tout le monde et en particulier les personnes déficientes visuelles et dyslexiques.  
**Quand&nbsp;:** lors de la conception et du développement.

Même si c’est pendant la phase de développement que l’on va s’assurer de la validité de ce critère, il est intéressant dès la phase de conception de réfléchir à la hauteur des lignes et à l’espacement des paragraphes et du texte. Il est couramment admis qu’une hauteur de ligne (<span lang="en">line-height</span>) de 1.5 permet d’obtenir une bonne lisibilité du texte, exemple article en anglais intitulé : <a href="https://www.invisionapp.com/blog/line-spacing/" lang="en">Why you should go big with line spacing</a>.

**Description&nbsp;:**  
Si l’utilisateur applique les réglages suivants, le texte doit rester lisible (pas de contenu tronqué, superposé):

- La hauteur des lignes doit pouvoir être ajustée à 1.5 fois minimum la taille de la police de caractères.
- L’espace situé entre deux paragraphes doit pouvoir être ajusté à 2 fois minimum la taille de la police de caractères.
- L’espacement entre les lettres doit pouvoir être ajusté à 0.12 fois minimum la taille de la police de caractères.
- L’espacement entre les mots doit pouvoir être ajusté à 0.16 fois minimum la taille de la police de caractères.

Pour info les critères cités précédemment reviennent à appliquer les styles CSS suivants au niveau de code : 
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

Pour faciliter le test, vous pouvez utiliser le bookmarklet suivant qui appliquera ces styles à la page courante de votre navigateur (bookmarklet à glisser dans votre barre de favoris) : <a href="javascript:s%20=%20document.createElement(%22style%22)%3Bs.setAttribute(%22type%22%2C%22text%2Fcss%22)%3Bt%3Ddocument.createTextNode(%22*%20%7Bline-height%3A%201.5!important%3B%20letter-spacing%3A.12em!important%3B%20word-spacing%3A%20.16em%20!important%3B%7D%20p%7Bmargin-bottom%3A%202em!important%3B%20%7D%22)%3Bs.appendChild(t)%3Bh%20%3D%20document.getElementsByTagName(%22head%22)%5B0%5D%3Bh.appendChild(s)%3Bvoid(0)%3B">Espacement du texte</a>


## 9. Permettre le contrôle des animations
**Cible&nbsp;:** les personnes malvoyantes, les personnes éprouvant des difficultés de lecture, d’attention ou de compréhension, les personnes épileptiques.  
**Quand&nbsp;:** lors de la conception du service et lors de la conception graphique.

**Description&nbsp;:**  
Tout contenu en mouvement, mis à jour automatiquement, clignotant ou en défilement doit pouvoir être stoppé, caché ou mis en pause par l’utilisateur si cette animation dure plus de 5 secondes. 
Par ailleurs, éviter autant que possible les flashs lumineux et les changements brusques de luminosité (cf. [Le logo des JO provoque des crises d’épilepsie](http://www.leparisien.fr/societe/le-logo-des-jo-provoque-des-crises-d-epilepsie-09-06-2007-2008107333.php)).

**Exemple&nbsp;:**  
![capture d’écran d’un carrousel disposant d’un bouton pour mettre en pause l’animation](./images/carrousel.png)  

Un carrousel qui défile automatiquement doit se mettre en pause au survol de la souris ou lorsqu’il reçoit le focus.  
Il est également possible d’ajouter un bouton «&nbsp;pause&nbsp;» directement dans l’interface.

## 10. Libellé des liens et des boutons
**Cible&nbsp;:** tout le monde et en particulier les personnes déficientes visuelles, cognitives ou ayant un déficit d’attention.  
**Quand&nbsp;:** lors de la conception du service et lors de la conception graphique.

**Description&nbsp;:**  
Les libellés des liens et des boutons doivent être suffisamment explicites.
Dans les cas exceptionnels où ce n’est techniquement pas possible, prévoir quand même un libellé explicite qui sera utilisé par la synthèse vocale (et les autres technologies d’assistance).

**Exemple valide&nbsp;:**  
«&nbsp;découvrez nos offres&nbsp;»
 
**Exemples non-valides&nbsp;:**  
«&nbsp;cliquez ici&nbsp;»  
«&nbsp;en savoir plus&nbsp;»

## 11. Permettre la navigation au clavier
**Cible&nbsp;:** tout le monde et en particulier les personnes souffrant de handicap moteur ou visuel et en mobilité.  
**Quand&nbsp;:** lors de la conception du service et lors du développement.

**Description&nbsp;:**  
Toutes les fonctionnalités doivent être utilisables à l’aide du clavier uniquement. Le focus doit pouvoir être déplacé sur tous les éléments cliquables (à l’aide de la touche <kbd>Tab</kbd>).  
Par ailleurs si des fonctionnalités sont spécifiques pour la souris (glisser-déposer, menu apparaissant au clic droit…), faire en sorte que celles-ci soient également disponibles via un autre moyen ailleurs dans l’interface (bouton, icône, menu…). 

Voir [la façon de naviguer au clavier](./methodes-outils-clavier.html) dans un navigateur web.

**Exemple&nbsp;:**  
Dans un webmail, si un clic droit sur le dossier «&nbsp;Corbeille&nbsp;» permet d’accéder à un menu pour vider la corbeille, cette option doit être également disponible via un bouton «&nbsp;Vider la corbeille&nbsp;» ailleurs dans l’interface ou depuis un menu déroulant accessible au clavier.

## 12. Rendre utilisables les formulaires

**Cible&nbsp;:** tout le monde et en particulier les personnes déficientes visuelles, dyslexiques et les déficients cognitifs.  
**Quand&nbsp;:** lors de la conception et lors du développement.

**Description&nbsp;:**  
Chaque champ de formulaire doit être accompagné d’un libellé (ou d’instructions) permettant d’identifier le rôle du champ, le type de donnée et le format attendu. Ce libellé doit être proche visuellement du champ afin que l’utilisateur fasse facilement le lien entre eux (notamment pour les utilisateurs de zoom, de loupe logicielle, voire sur mobile). 

Les champs en erreur doivent pouvoir être identifiés et, si besoin, suggérer une correction. Ceci s’applique aux champs de saisie, mais également aux autres types de champs (liste déroulante, bouton radio, case à cocher…). Au niveau du développement, ce libellé sera associé au champ de formulaire pour faciliter la navigation à l’aide d’un lecteur d’écran.

**Exemple valide&nbsp;:**  
![capture d’écran d’un formulaire valide](images/formulaire.png)
  
**Exemple non-valide&nbsp;:**  
![capture d’écran d’un formulaire auquel il manque un label](images/formulaire2.png)

Dans certains cas, il semble inutile d’accompagner le champ de formulaire d’un libellé (champ de recherche accompagné d’un bouton en forme de loupe par exemple). Dans ce cas prévoir tout de même un libellé. Celui-ci ne sera pas affiché à l’écran mais sera tout de même associé au champ de formulaire lors du développement pour faciliter la navigation à l’aide d’un lecteur d’écran.

Enfin les libellés des messages d’erreur doivent être explicites.

**Exemple valide&nbsp;:**  
![capture d’écran d’un formulaire affichant des messages d’erreur à la saisie valides](images/formulaire-ok.png)  

**Exemple non-valide&nbsp;:**  
![capture d’écran d’un formulaire affichant des messages d’erreur à la saisie non-valides](images/formulaire-ko.png)

## 13. Éviter les boites de dialogues et l’ouverture de nouvelles fenêtres
**Cible&nbsp;:** les seniors, les personnes déficientes cognitives, malvoyantes ou en mobilité.  
**Quand&nbsp;:** lors de la conception et lors du développement.

**Description&nbsp;:**  
Éviter autant que possible les actions qui ouvrent une nouvelle fenêtre (ou un nouvel onglet) du navigateur. Si un lien déclenche l’ouverture d’une nouvelle fenêtre, il faudra lors du développement faire en sorte que le texte «&nbsp;nouvelle fenêtre&nbsp;» soit vocalisé par les lecteurs d’écran, afin que les personnes malvoyantes sachent qu’une nouvelle fenêtre s’ouvre.

De même, éviter le recours systématique aux boîtes de dialogue pour présenter des informations dans les pages (présentation du service …). Elles doivent être réservées à une information importante qui requiert une attention immédiate et rester de taille réduite.

Ces fenêtres modales ou pop-in posent souvent des problèmes d’accessibilité pour les personnes qui naviguent au clavier ou au lecteur d’écran, problèmes qui nécessiteront une attention particulière lors de la phase de développement.

**Exemple non-valide&nbsp;:**  
Dans l’exemple ci-dessous le recours à une boîte de dialogue n’est pas justifié. L’utilisation d’une page web standard permettrait&nbsp;:
- de laisser plus d’espace au contenu (en supprimant les marges autour de la boite de dialogue),
- de pouvoir utiliser le bouton «&nbsp;Précédent&nbsp;» du navigateur pour revenir en arrière lors de la navigation entre les différentes pages de la boite de dialogue,
- de faciliter l’affichage sur les petits écrans,
- d’éviter des problèmes d’accessibilité pour les personnes qui naviguent à l’aide du clavier ou à l’aide d’un lecteur d’écran,
- d’alléger le poids de la page et le temps de chargement, car dans cet exemple la page derrière la boite de dialogue doit être chargée.  

![Capture d’écran d’une boîte de dialogue beaucoup trop volumineuse](images/dialog.png)

## 14. Fournir des liens d’évitement

**Cible&nbsp;:** utile pour les utilisateurs de mobile et tablette, les personnes déficientes visuelles et les personnes souffrant de handicap moteur ou en mobilité.  

**Quand&nbsp;:** dès la phase de conception et lors du développement.

**Description&nbsp;:**  
Fournir des liens d’évitement du type «&nbsp;Aller au contenu&nbsp;» sur chaque page. Ceux-ci facilitent la navigation pour les personnes utilisant le clavier, en mobilité ou navigant à l’aide d’un lecteur d’écran. En cas de **fortes contraintes,** les liens peuvent être masqués à l’écran et apparaître uniquement lors de la navigation au clavier.

**Exemple&nbsp;:**  
Des liens d’évitement («&nbsp;Aller à la navigation&nbsp;», «&nbsp;Aller au contenu&nbsp;») sont disponibles sur ce site.
Pour les faire apparaître, placer le focus en haut de la page en cliquant sur la barre d’adresse de votre navigateur par exemple, puis appuyer plusieurs fois sur la touche <kbd>Tab</kbd>.

![capture d’écran du site orange.com](images/skiplink.png)

## 15. Identifier et conserver la cohérence des regroupements et des différentes régions de la page

**Cible&nbsp;:** tout le monde et en particulier les personnes déficientes visuelles, cognitives ou ayant des troubles de l’attention.

**Quand&nbsp;:** lors de la conception.

**Description&nbsp;:**  
Fournir des moyens d’identifier et de distinguer visuellement les différentes parties de la page et assurer la cohérence de ces régions ou regroupements dans toutes les pages.

**À vérifier&nbsp;:** 

- S'assurer que les liens dans le corps du texte sont facilement identifiables visuellement par un autre moyen que la couleur (souligné, gras…) par rapport au reste du texte.
- S’assurer que les mécanismes de navigation sont toujours situés au même endroit dans un ensemble de page.
- S’assurer que les composants et les regroupements qui ont la même fonction, sont identifiés (visuellement) de la même façon et, dans la mesure du possible, respecter l’apparence classique de ces éléments pour ne pas perturber l’utilisateur habitué à un aspect spécifique de ceux-ci (par exemple, les liens sont généralement soulignés…).
- S’assurer que les zones de la page sont clairement délimitées (bordures, filets, contraste suffisant…) ou qu’il y a un moyen de distinguer visuellement les groupes (sous-menu, liste déroulante…) ainsi que les différentes régions de la page.

**Exemple valide&nbsp;:**  

![capture d’écran du site 100% pratique](images/groupement.jpg)  

Ici, l’info bulle (<i lang="en">tooltip</i>) est délimitée par une bordure bien visible et suffisamment contrastée, permettant de bien identifier son contenu.

**Exemple non-valide&nbsp;:**  

![capture d’écran du site fnac.com](images/groupement2.jpg)  

Il est très difficile d’associer les thèmes («&nbsp;par région&nbsp;», «&nbsp;par genre&nbsp;»…) et les sous-thèmes en colonnes, d’autant plus que les filets horizontaux sont trop peu contrastés.

## 16. Situer explicitement la page dans le site et fournir plusieurs moyens d’y accéder

**Cible&nbsp;:** tout le monde et en particulier les personnes déficientes visuelles ou cognitives.

**Quand&nbsp;:** lors de la conception.

**Description&nbsp;:**
Donner à l’utilisateur plusieurs moyens de situer et accéder à un contenu spécifique, localiser la page Web en cours de consultation dans un ensemble de pages. Lorsque la page est une étape dans un processus où les pages s’enchaînent les unes après les autres, ce critère peut être ignoré.

**À vérifier&nbsp;:**
S’assurer que plusieurs systèmes permettent de situer et accéder à une page ou un contenu dans le site&nbsp;: un outil de recherche sur l’ensemble du site, un plan du site, un menu de navigation global, un fil d’Ariane…

**Exemple valide&nbsp;:**
Le site propose, à la fois, une navigation principale complète et précise et un fil d’Ariane.

**Exemple invalide&nbsp;:**
Une application offre un menu de navigation parcellaire et aucun autre moyen pour  l’utilisateur de s’orienter dans les pages ou de repérer où se situe la page courante dans l’arborescence.

## 17. Éviter les captcha

**Cible&nbsp;:** tout le monde en particulier, les personnes déficientes visuelles.  
**Quand&nbsp;:** lors de la conception et lors du développement.

**Description&nbsp;:**  
Les captcha sont souvent  la source de difficultés pour les utilisateurs. Si la mise en place d’un système anti-spam ne peut être évitée, il est souhaitable de s’orienter vers une solution plus souple pour l’utilisateur&nbsp;: 
- Double authentification&nbsp;;
- Champ de formulaire caché à laisser vide (technique du <span lang="en">honeypot</span>), non-visibles pour l’utilisateur&nbsp;;
- Mise à disposition d’un support téléphonique afin de s’assurer que le client est une vraie personne&nbsp;;
- Un contrôle permettant de s’assurer qu’une même combinaison <abbr>IP</abbr>/<i lang="en">User agent</i> (navigateur) ne tente pas de soumettre le formulaire plus de N fois par seconde.

Si aucune autre alternative n’est possible, il est indispensable de prévoir une alternative pour les captcha uniquement visuels ou sonores en proposant une combinaison de captcha&nbsp;:
- un captcha  audio&nbsp;+ visuel,
- des tests logiques (question dont la réponse est évidente, test  mathématique simple…)&nbsp;+ captcha visuel classique
- …

## 18. Définir des zones sensibles de taille suffisante

**Cible&nbsp;:** tout le monde en particulier, les personnes souffrant de handicap moteur ou visuel et en mobilité.  
**Quand&nbsp;:** lors de la conception et lors du développement.

**Description&nbsp;:**  
Chaque zone sensible doit avoir une taille suffisante (9mm minimum de largeur et de hauteur).
Par ailleurs les zones sensibles doivent être suffisamment espacées les unes des autres (environ 2mm minimum).

## 21. Proposer une alternative aux gestuelles complexes

**Cible&nbsp;:** tout le monde en particulier, les personnes souffrant de handicap moteur ou visuel et en mobilité.  
**Quand&nbsp;:** lors de la conception et lors du développement.

**Description&nbsp;:**  
Pour chaque interaction gestuelle complexe, une alternative doit être disponible (par exemple une alternative non gestuelle ou simplifiée).
De même pour les interactions nécessitant un changement d’orientation de l’écran (basculement, rotation, secouement…).

## 22. Orientation de l’écran

**Cible&nbsp;:** tout le monde et en particulier les personnes souffrant de handicap moteur ou visuel et en mobilité.

**Quand&nbsp;:** lors de la conception et lors du développement.

**Description&nbsp;:**  
L’accès au contenu ne doit pas dépendre de l’orientation de l’écran (portrait et paysage), sauf si une orientation particulière est essentielle pour la compréhension ou l’utilisation du contenu (projection, tableau…)

## 23. Rendre accessible les pistes audio ou vidéo

**Cible&nbsp;:** tout le monde et en particulier les personnes déficientes visuelles, cognitives et auditives et celles qui maîtrisent mal le français.  
**Quand&nbsp;:** lors de la conception et lors du développement.

**Description&nbsp;:** 

Pour être accessibles, les contenus multimédias doivent&nbsp;: 
1. proposer une transcription intégrale
2.	proposer des sous-titres (vidéo uniquement) 
3.	proposer une audiodescription (vidéo uniquement)
4.	choisir un lecteur média accessible
5.	proscrire le démarrage automatique de la vidéo au chargement de la page
6.	proscrire les vidéos qui présentent plus de 3 flashs à la seconde 
7. par ailleurs, pour tout son émis de plus de 3 secondes, l’utilisateur doit avoir la possibilité soit de l’arrêter ou de le mettre en pause soit d’en contrôler son volume indépendamment du volume général du système.

Pour plus d’infos consulter [les recommandations accessibilité pour les contenus vidéos, animations et audios Orange](../others/video-audio.html).

**Objectif utilisateur&nbsp;:**

Fournir un moyen d’accès à l’information visuelle et auditive pour des personnes ne pouvant pas en bénéficier&nbsp;: malvoyants, aveugles, sourds, déficients cognitifs, ordinateur sans haut-parleurs, en environnement lumineux ou bruyant.

**Objectif technique&nbsp;:**

Permet le référencement de tout contenu audio et vidéo.

<!--  This file is part of a11y-guidelines | Our vision of mobile & web accessibility guidelines and best practices, with valid/invalid examples.
 Copyright (C) 2016  Orange SA
 See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). -->