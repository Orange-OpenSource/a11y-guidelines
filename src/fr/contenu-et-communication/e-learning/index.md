---
title: "Storyline 360 - E-learning"
abstract: "Recommandations Storyline 360"
---
# Recommandations Storyline 360

Recommandations pour la création de présentation <span lang="en">e-learning</span> accessible.
*Remarque* : en complément <a href="/fr/contenu-et-communication/">les recommandations éditoriales générales</a> (couleurs, faciliter la lecture, etc...) sont également à appliquer, mais non décrites dans cet article.

## Personnaliser l’expérience utilisateur dès le début

### Fournir des instructions dès le premier diapositive

Les utilisateurs doivent pouvoir connaître et anticiper les mécanismes de navigation.
- Fournir des instructions textuelles dès le premier diapositive
- Ces instructions présentent les éventuels raccourcis spécifiques à l’<span lang="en">e-learning</span>
- Pour les utilisateurs de lecteur d’écran, nous recommandons d’ajouter des instructions à propos de la navigation clavier
<figure class="figure">
  <img alt="" src="/fr/contenu-et-communication/images/trigger-wizard.png" class="img-fluid">
  <figcaption class="figure-caption">Si des raccourcis clavier sont définis, ceux-ci doivent être annoncés dès le premier diapositive.</figcaption>
</figure>

### Proposer le choix entre différents profils

L'objectif de l’accessibilité est de proposer une seule interface utilisable par tous les utilisateurs, valides ou en situation de handicap.
Cependant les <span lang="en">e-learnings</span> comportent des spécificités, tels que des serious game par exemple, qui peuvent empêcher la mise en place d’une interface sans dégradations de l’expérience pour tous les utilisateurs.
La solution est donc de proposer le choix de profils.
Les contenus (serious game, exercices, …) pourront être adaptés au contexte de chaque utilisateur.

- Proposer des mécanismes alternatifs (ex : en remplacement d’un système drag n’drop par exemple)
- Proposer des contenus supplémentaires (ex : ajout de descriptions détaillées destinées aux lecteurs d’écrans)
<figure class="figure">
  <img alt="" src="/fr/contenu-et-communication/images/profile-selection.png" class="img-fluid">
  <figcaption class="figure-caption">Dans cet exemple des Serious Games alternatifs sont proposés aux utilisateurs non-voyants.</figcaption>
</figure>

## Permettre d'utiliser les principales fonctionnalités de l'application au clavier

Il s'agit de permettre aux utilisateurs qui ne peuvent pas utiliser la souris (non-voyants, déficients moteurs, ...) d'accéder aux fonctionnalités principales de l'application depuis le clavier.

- S’assurer que tous les éléments interactifs sont accessibles au clavier
- Privilégier les composants natifs (radio, checkbox, bouton) proposés par Storyline
- Ne pas utiliser des systèmes nécessitant exclusivement la souris, tels que : 
	- le drag n’ drop 
	- l’état « survol » pour transmettre des informations importantes

### Rendre le focus visible en toute circonstance

La visualisation du focus permet aux utilisateurs clavier de se repérer dans leur parcours de navigation.

1. Activer "Propriétés du lecteur"
2. Sélectionner "Couleurs & effets"
3. Modifier la couleurs par défaut du focus

 <img alt="" src="/fr/contenu-et-communication/images/storyline-focus.png" class="img-fluid">  &nbsp;
  
## S’assurer que l’utilisateur garde le contrôle lors des interactions

### Connaitre le résultat de ses actions
Les résultats des quizzs notamment, doivent être perçus par tous les utilisateurs.

- Utiliser les composants de notifications natifs de Storyline (<span lang="en">feedback layers</span>)
- Lancer une vocalisation du résultat après soumission par l’utilisateur
<figure class="figure">
  <img alt="" src="/fr/contenu-et-communication/images/feedback-message.png" class="img-fluid">
  <figcaption class="figure-caption">Dans cet exemple, le résultat "Pas tout-à-fait... Toutes ces propositions sont exactes !" est vocalisé par une voix-off</figcaption>
</figure>

### Éviter les limites de temps

Tous les utilisateurs doivent pouvoir compléter ses actions sans comportement inattendu, comme un changement de diapositive par exemple.

- Éviter les limites de temps pour compléter un exercice ou un quizz, lire un contenu
- Si une limite de temps est essentielle à la réalisation d’un exercice, proposer une alternative (possibilité de désactiver ou modifier la limite de temps, ou proposer un exercice différent selon le profil par exemple)

A l’inverse, il peut être utile de préciser le temps nécessaire à la consultation d’un contenu alternatif, ou la consultation de l’elearning.

## Organiser les objets et les textes de manière logique

Pour tous les utilisateurs, quel que soit leur moyen de naviguer (lecteur d’écran, loupe d’écran, navigation clavier), l’ordre de lecture des composants à l'écran correspondra au sens de lecture de la langue du document (donc de gauche à droite et de haut en bas pour une interface en français par exemple).

- D’une manière générale, s’assurer de reproduire un ordre de lecture logique (gauche à droite et de haut en bas suivant la langue utilisée)
- S’assurer que l’ordre des éléments permet la compréhension des informations. Par exemple, dans le cadre d’un questionnaire s’assurer que les utilisateurs tabulent ou vocalisent d’abord sur la question, puis ensuite sur les choix de réponses
- Si des boutons de contrôle sont utilisés (bouton de soumission, bouton suivant), positionner ceux-ci en bas à droite du diapositive, afin qu’ils soient lus en dernier
- Éviter les mises en page sur plusieurs colonnes pour ne pas perturber la compréhension des informations

*La procédure :*

1. Activer la fonction « Ordre du focus »
2. La boîte de dialogue « Ordre du focus » s’ouvre. Celle-ci centralise tous les éléments du diapositive
3. Sélectionner « Créer un ordre de focus personnalisé »
4. Sélectionner un élément
5. Utiliser les flèches « haut / bas » pour modifier l’ordre de l’élément
6. Activer « enregistrer »

<figure class="figure">
<img alt="" src="/fr/contenu-et-communication/images/storyline-order-1.png" class="img-fluid">
<figcaption class="figure-caption">Storyline permet la réorganisation de tous les éléments grâce à l'option "Ordre du focus".
</figcaption>
</figure>

<figure class="figure">
<img alt="" src="/fr/contenu-et-communication/images/storyline-order-2.png" class="img-fluid">
<figcaption class="figure-caption">L’ordre des éléments à l’écran, ne correspond pas toujours à l’ordre des éléments dans le code source.
L’ordre des éléments dans le code source, va avoir un impact lors de la lecture depuis une aide technique, comme un lecteur d’écran par exemple.
</figcaption>
</figure>

## Donner un titre à la présentation et aux diapositives

### Titre de présentation

Le titre de présentation doit être explicite.
Il permet aux utilisateurs finaux d'identifier la formation dans leur navigateur.
Ceci est particulièrement important pour les utilisateurs de lecteurs d'écran.

*La procédure :*
1. Cliquer sur Publier
2. Se positionner dans l’onglet " Web" de la boite de dialogue
3. Compléter le champ " Titre "

<figure class="figure">
<img alt="" src="/fr/contenu-et-communication/images/titre-formation.png" class="img-fluid">
<figcaption class="figure-caption">Cliquer sur Publier, puis renseigner le champ Titre.
</figcaption>

</figure>
<figure class="figure">
<img alt="" src="/fr/contenu-et-communication/images/onglet-formation.png" class="img-fluid">
<figcaption class="figure-caption">Le titre apparaît dans l'onglet du navigateur.
</figcaption>
</figure>

### Titre de diapositive

Le titre de diapositive doit également être explicite.
Il permet aux utilisateurs finaux de comprendre le contexte de chaque nouvelle diapositive.
Notamment les utilisateurs de lecteurs d'écran, en effet cet élément sera vocalisé automatiquement à l'arrivée sur une nouvelle diapositive.


<figure class="figure">
<img alt="" src="/fr/contenu-et-communication/images/titre-diapo.png" class="img-fluid">  &nbsp;
<figcaption class="figure-caption">Double cliquer sur le titre de la diapositive pour le modifier.
</figcaption>
</figure>

## Structurer le contenu avec des titres de niveaux

Appliquer des styles de titre sur les textes présentés comme des titres.
Les titres de niveaux sont essentiels aux utilisateurs de lecteurs d'écran pour leur permettre de comprendre la structure du contenu et naviguer facilement au sein de celui-ci.

<figure class="figure">
<img alt="" src="/fr/contenu-et-communication/images/storyline-titre-niveau.png" class="img-fluid">  &nbsp;
<figcaption class="figure-caption">Utiliser les styles appropriés (de Titre 1 à Titre 4).
</figcaption>
</figure>

## Fournir des textes alternatifs pertinents 

Le texte de remplacement est primordial pour les utilisateurs non-voyants.
C’est ce contenu qui sera vocalisé.

<figure class="figure">
<img alt="" src="/fr/contenu-et-communication/images/alt-images.png" class="img-fluid">
<figcaption class="figure-caption">
Liste de 3 boutons (anticiper, gérer, communiquer), basés sur des images.

- *Alternative non valide :* bouton-gerer-1.png
- *Alternative valide :* Gérer

</figcaption>
</figure>

*Les recommandations :*

- Pour les images porteuses de texte, le texte alternatif reprend  le contenu textuel présent dans l’image
- Pour les boutons et autres éléments de formulaire, le texte alternatif convoie la cible ou l’action portée par le bouton
- Il est contreproductif de commencer les textes par « image de ». Il faut être concis et fournir uniquement l’information nécessaire pour l’utilisateur
- Éviter les abréviations et la répétition d’éléments de ponctuation

<figure class="figure">
<img alt="" src="/fr/contenu-et-communication/images/alt-images-infos.png" class="img-fluid">
<figcaption class="figure-caption">
Exemple d’une image porteuse d’information :

- *Alternative non valide :* coche.png
- *Alternative valide :* séquence déficient auditif déjà consultée
</figcaption>
</figure>

*La procédure :*
1. Activer la fonction « Ordre du focus »
2. La boîte de dialogue « Ordre du focus » s’ouvre. Celle-ci centralise tous les éléments d’une diapositive
3. Renseigner le texte alternatif des boutons ou des objets porteurs d’information
4. Cliquer sur « Enregistrer »

<figure class="figure">
<img alt="" src="/fr/contenu-et-communication/images/storyline-order-1.png" class="img-fluid">
<figcaption class="figure-caption">
Les textes alternatifs peuvent être définis depuis le panneau "Ordre du focus".
</figcaption>
</figure>

<img alt="" src="/fr/contenu-et-communication/images/storyline-order-3.png" class="img-fluid">  &nbsp;


## Masquer les images décoratives

Une image est considérée comme décorative lorsqu'elle n'apporte pas d’information supplémentaire à la compréhension d'un texte ou d'une fonctionnalité.

Il est recommandé de masquer ces éléments aux utilisateurs de lecteur d'écran.

Les bénéfices : 
- Alléger la vocalisation, en évitant la lecture d’une information inutile à la compréhension du contenu
- Alléger la navigation clavier en supprimant des éléments inutiles du parcours clavier

<figure class="figure">
<img alt="" src="/fr/contenu-et-communication/images/image-deco-1.png" class="w-50 pe-1 float-start">
<img alt="" src="/fr/contenu-et-communication/images/image-deco-2.png" class="w-50 float-start">
<figcaption class="figure-caption">
Exemples d'images décoratives, dans ces contextes, le personnages ou le pied de table n'apportent pas d'informations.
Ils peuvent donc être masqués aux utilisateurs d'aides techniques.
</figcaption>
</figure>

*La procédure :*
1. Click droit sur l’image
2. Sélectionner « Accessibilité » dans le menu
3. La boîte de dialogue « taille et position » s’ouvre
4. L'onglet "Accessibilité" est ouvert par défaut
5. Décocher la case « L’objet est visible… »
6. Cliquer sur «fermer »

<img alt="" src="/fr/contenu-et-communication/images/hide-image.png" class="img-fluid mb-1">
<img alt="" src="/fr/contenu-et-communication/images/hide-image-2.png" class="img-fluid">  &nbsp;


## Indiquer la langue principale du document
  
Définir la langue d'un document permettra aux synthèses vocales d'adapter leur vocalisation par rapport à la langue du contenu.

*La procédure :*
1. Sélectionner « lecteur – modifier les propriétés du lecteur »
2. Sélectionner « étiquettes de texte »
3. Dans le menu déroulant « langue », sélectionner la langue correspondant au document
4. Modifier les textes dans la colonne « texte personnalisé »
5. Cliquer sur « OK »

<img alt="" src="/fr/contenu-et-communication/images/storyline-langue-1.png" class="img-fluid mb-1">  &nbsp;

## Contenus audio ou vidéo

- Fournir une transcription aux audios et vidéos
- Ne pas lancer l’audio ou la vidéo automatiquement
- Si le média se lance automatiquement, s’assurer que l’utilisateur a la possibilité de l’arrêter manuellement

<img alt="" src="/fr/contenu-et-communication/images/lancement-auto.png" class="img-fluid">  &nbsp;

### Audios accessibles

Certaines formations possèdent une vocalisation de chaque diapositive (voix off) :

- Si la voix fournie des informations non présentes dans le contenu du diapositive, des sous-titres sont alors nécessaires.
Storyline permet la création de sous-titres synchronisés.
- S’assurer que l’ensemble du contenu textuel du diapositive soit vocalisé, afin de ne pas induire en erreur les utilisateurs non-voyants qui pourraient se reposer uniquement sur l’audio et ne pas consulter manuellement tout le contenu du diapositive.

<figure class="figure">
<img alt="" src="/fr/contenu-et-communication/images/activer-sous-titre.png" class="img-fluid">
<figcaption class="figure-caption">
Donner la possibilité aux utilisateurs d'activiter les sous-titres dès le début de la présentation.
</figcaption>
</figure>

### Vidéos accessibles

Consultez [nos recommandations sur les contenus audio et vidéo](/fr/contenu-et-communication/composants-animes) pour en savoir plus.

## Ressources

- <a href="https://articulate-heroes.s3.amazonaws.com/uploads/attachment/attachment_url/24511/Storyline_accessibility_guide.pdf?dl=true" hreflang="en" lang="en">Designing Accessible E-Learning Using Articulate Storyline (pdf, anglais)</a>
- <a href="https://www.ucop.edu/electronic-accessibility/_files/creating-accessible-ecourses.pdf" hreflang="en" lang="en">Creating Accessible eCourses (pdf, anglais)</a>
- <a href="http://generic.wordpress.soton.ac.uk/digital-learning/2019/01/28/accessibility-for-articulate-storyline-are-you-wcag-compliant/" hreflang="en" lang="en">Accessibility for Articulate storyline – Are you WCAG compliant? (anglais)</a>
- <a href="https://www.hassellinclusion.com/blog/elearning-accessibility-poster/" hreflang="en" lang="en">Creating e-learning that can be used by everyone (POSTER) (anglais)</a>