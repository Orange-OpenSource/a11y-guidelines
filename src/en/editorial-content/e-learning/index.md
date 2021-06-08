---
title: "Storyline 360 - E-learning"
---
# Storyline 360 recommandations

Recommendations for making an accessible e-learning presentation.
*Note* : in addition, <a href="/fr/contenu-editorial/">the general editorial recommendations </a> (colors, make reading easier, etc.) must also be applied, but are not described in this article.

## Personalize the user experience from the start

### Provide instructions from the first slide

Users must be able to know and anticipate the navigation mechanisms.
- Provide textual instructions from the first slide
- These instructions provide all the shortcuts specific to e-learning
- For screen reader users, we suggest adding keyboard navigation instructions
<figure class="figure">
  <img alt="" src="/fr/contenu-editorial/images/trigger-wizard.png" class="img-fluid">
  <figcaption class="figure-caption">If keyboard shortcuts are defined, they must be announced from the first slide.</figcaption>
</figure>

### Give the choice between different profiles

The goal of accessibility is to provide a single interface that can be used by all users.
However, e-learning has specific features, such as serious games for example, which can prevent the implementation of an interface without degradation of the experience for all users.
The solution is therefore to offer the choice of profiles.
The content (serious game, exercises, etc.) can be adapted to the context of each user.

- Propose alternative mechanisms (example: replacing a drag n’drop system for example)
- Offer additional content (example: addition of detailed descriptions for screen readers)
<figure class="figure">
  <img alt="" src="/fr/contenu-editorial/images/profile-selection.png" class="img-fluid">
  <figcaption class="figure-caption">In this example, alternative Serious Games are offered to blind users.</figcaption>
</figure>

## Allow to use the main functions of the application through a keyboard interface

This is to allow users who cannot use the mouse (blind, motor impaired, etc.) to access the main functionalities of the application from the keyboard.

- Ensure that all interactive elements are usable from the keyboard
- Focus on native components (radio, checkbox, button) offered by Storyline
- Do not use systems that only rely on mouse interaction, such as: 
	- drag n’drop 
	- the "hover" state to transmit important information

### Make the focus visible in all circumstances

A visible focus indicator allows keyboard users to know which component is currently active.

1. Activate "Player properties"
2. Select "Colors & Effects"
3. Change the default focus color

 <img alt="" src="/fr/contenu-editorial/images/storyline-focus.png" class="img-fluid">  &nbsp;
  
## Ensure that the user keeps control during interactions

### Know the result of your actions

The results of quizzes in particular must be perceived by all users.

- Use Storyline's native notification components (feedback layers)
- Start a vocalization of the result after submission by the user
<figure class="figure">
  <img alt="" src="/fr/contenu-editorial/images/feedback-message.png" class="img-fluid">
  <figcaption class="figure-caption">In this example, the result "Not quite ... All of the above are correct!" is vocalized by a voice-over</figcaption>
</figure>

### Avoid time limits

All users must be able to complete their actions without unexpected behavior, such as a slide change for example.

- Avoid time limits to complete an exercise or a quiz, read content
- If a time limit is essential for carrying out an exercise, offer an alternative (possibility of deactivating or modifying the time limit, or proposing a different exercise depending on the profile for example)

Conversely, it may be useful to specify the time required for viewing alternative content, or viewing e-learning.

## Organiser les objets et les textes de manière logique

Pour tous les utilisateurs, quel que soit leur moyen de naviguer (lecteur d’écran, loupe d’écran, navigation clavier), l’ordre de lecture des composants à l'écran correspondra au sens de lecture de la langue du document (donc de gauche à droite et de haut en bas pour une interface en français par exemple).

- D’une manière générale, s’assurer de reproduire un ordre de lecture logique (gauche à droite et de haut en bas suivant la langue utilisée). 
- S’assurer que l’ordre des éléments permet la compréhension des informations. Par exemple, dans le cadre d’un questionnaire s’assurer que les utilisateurs tabulent ou vocalisent d’abord sur la question, puis ensuite sur les choix de réponses.
- Si des boutons de contrôle sont utilisés (bouton de soumission, bouton suivant), positionner ceux-ci en bas à droite du slide, afin qu’ils soient lus en dernier.
- Eviter les mises en page sur plusieurs colonnes pour ne pas perturber la compréhension des informations.

*La procédure :*

1. Activer la fonction « Ordre du focus »
2. La boîte de dialogue « Ordre du focus » s’ouvre. Celle-ci centralise tous les éléments du slide
3. Sélectionner « Créer un ordre de focus personnalisé »
4. Sélectionner un élément
5. Utiliser les flèches « haut / bas » pour modifier l’ordre de l’élément
6. Activer « enregistrer »

<figure class="figure">
<img alt="" src="/fr/contenu-editorial/images/storyline-order-1.png" class="img-fluid">
<figcaption class="figure-caption">Storyline permet la réorganisation de tous les éléments grâce à l'option "Ordre du focus".
</figcaption>
</figure>

<figure class="figure">
<img alt="" src="/fr/contenu-editorial/images/storyline-order-2.png" class="img-fluid">
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
<img alt="" src="/fr/contenu-editorial/images/titre-formation.png" class="img-fluid">
<figcaption class="figure-caption">Cliquer sur Publier, puis renseigner le champ Titre.
</figcaption>

</figure>
<figure class="figure">
<img alt="" src="/fr/contenu-editorial/images/onglet-formation.png" class="img-fluid">
<figcaption class="figure-caption">Le titre apparaît dans l'onglet du navigateur.
</figcaption>
</figure>

### Titre de diapositive

Le titre de diapositive doit également être explicite.
Il permet aux utilisateurs finaux de comprendre le contexte de chaque nouvelle diapositive.
Notamment les utilisateurs de lecteurs d'écran, en effet cet élément sera vocalisé automatiquement à l'arrivée sur une nouvelle diapositive.


<figure class="figure">
<img alt="" src="/fr/contenu-editorial/images/titre-diapo.png" class="img-fluid">  &nbsp;
<figcaption class="figure-caption">Double cliquer sur le titre de la diapositive pour le modifier.
</figcaption>
</figure>

## Structurer le contenu avec des titres de niveaux

Appliquer des styles de titre sur les textes présentés comme des titres.
Les titres de niveaux sont essentiels aux utilisateurs de lecteurs d'écran pour leur permettre de comprendre la structure du contenu et naviguer facilement au sein de celui-ci.

<figure class="figure">
<img alt="" src="/fr/contenu-editorial/images/storyline-titre-niveau.png" class="img-fluid">  &nbsp;
<figcaption class="figure-caption">Utiliser les styles appropriés (de Titre 1 à Titre 4).
</figcaption>
</figure>

## Fournir des textes alternatifs pertinents 

Le texte de remplacement est primordial pour les utilisateurs non-voyants.
C’est ce contenu qui sera vocalisé.

<figure class="figure">
<img alt="" src="/fr/contenu-editorial/images/alt-images.png" class="img-fluid">
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
<img alt="" src="/fr/contenu-editorial/images/alt-images-infos.png" class="img-fluid">
<figcaption class="figure-caption">
Exemple d’une image porteuse d’information :

- *Alternative non valide :* coche.png
- *Alternative valide :* séquence déficient auditif déjà consultée
</figcaption>
</figure>

*La procédure :*
1. Activer la fonction « Ordre du focus »
2. La boîte de dialogue « Ordre du focus » s’ouvre. Celle-ci centralise tous les éléments d’une slide
3. Renseigner le texte alternatif des boutons ou des objets porteurs d’information
4. Cliquer sur « Enregistrer »

<figure class="figure">
<img alt="" src="/fr/contenu-editorial/images/storyline-order-1.png" class="img-fluid">
<figcaption class="figure-caption">
Les textes alternatifs peuvent être définis depuis le panneau "Ordre du focus".
</figcaption>
</figure>

<img alt="" src="/fr/contenu-editorial/images/storyline-order-3.png" class="img-fluid">  &nbsp;


## Masquer les images décoratives

Une image est considérée comme décorative lorsqu'elle n'apporte pas d’information supplémentaire à la compréhension d'un texte ou d'une fonctionnalité.

Il est recommdandé de masquer ces éléments aux utilisateurs de lecteur d'écran.

Les bénéfices : 
- Alléger la vocalisation, en évitant la lecture d’une information inutile à la compréhension du contenu.
- Alléger la navigation clavier en supprimant des éléments inutiles du parcours clavier.

<figure class="figure">
<img alt="" src="/fr/contenu-editorial/images/image-deco-1.png" class="w-50 pr-1 float-left">
<img alt="" src="/fr/contenu-editorial/images/image-deco-2.png" class="w-50 float-left">
<figcaption class="figure-caption">
Exemples d'images décoratives, dans ces contextes, le personnages ou le pied de table n'apportent pas d'informations.
Ils peuvent donc être masqués aux utilisateurs d'aides techniques.
</figcaption>
</figure>

*La procédure :*
1. Click droit sur l’image.
2. Sélectionner « Accessibilité » dans le menu.
3. La boîte de dialogue « taille et position » s’ouvre.
4. L'onglet "Accessibilité" est ouvert par défaut.
5. Décocher la case « L’objet est visible… ».
6. Cliquer sur «fermer ».

<img alt="" src="/fr/contenu-editorial/images/hide-image.png" class="img-fluid mb-1">
<img alt="" src="/fr/contenu-editorial/images/hide-image-2.png" class="img-fluid">  &nbsp;


## Indiquer la langue principale du document
  
Définir la langue d'un document permettra aux synthèses vocales d'adapter leur vocalisation par rapport à la langue du contenu.

*La procédure :*
1. Sélectionner « lecteur – modifier les propriétés du lecteur ».
2. Sélectionner « étiquettes de texte ».
3. Dans le menu déroulant « langue », sélectionner la langue correspondant au document.
4. Modifier les textes dans la colonne « texte personnalisé ».
5. Cliquer sur « OK ».

<img alt="" src="/fr/contenu-editorial/images/storyline-langue-1.png" class="img-fluid mb-1">  &nbsp;

## Contenus audio ou vidéo

- Fournir une transcription aux audios et vidéos
- Ne pas lancer l’audio ou la vidéo automatiquement
- Si le média se lance automatiquement, s’assurer que l’utilisateur a la possibilité de l’arrêter manuellement

<img alt="" src="/fr/contenu-editorial/images/lancement-auto.png" class="img-fluid">  &nbsp;

### Audios accessibles

Certaines formations possèdent une vocalisation de chaque slide (voix off) :

- Si la voix fournie des informations non présentes dans le contenu du slide, des sous-titres sont alors nécessaires.
Storyline permet la création de sous-titres synchronisés.
- S’assurer que l’ensemble du contenu textuel du slide soit vocalisé, afin de ne pas induire en erreur les utilisateurs non-voyants qui pourraient se reposer uniquement sur l’audio et ne pas consulter manuellement tout le contenu du slide.

<figure class="figure">
<img alt="" src="/fr/contenu-editorial/images/activer-sous-titre.png" class="img-fluid">
<figcaption class="figure-caption">
Donner la possibilité aux utilisateurs d'activiter les sous-titres dès le début de la présentation.
</figcaption>
</figure>

### Vidéos accessibles

Consultez [nos recommandations sur les contenus audio et vidéo](/fr/contenu-editorial/composants-animes) pour en savoir plus.

## Ressources

- <a href="https://articulate-heroes.s3.amazonaws.com/uploads/attachment/attachment_url/24511/Storyline_accessibility_guide.pdf?dl=true" hreflang="en" lang="en">Designing Accessible E-Learning Using Articulate Storyline (pdf, anglais)</a>.
- <a href="https://www.ucop.edu/electronic-accessibility/_files/creating-accessible-ecourses.pdf" hreflang="en" lang="en">Creating Accessible eCourses (pdf, anglais)</a>.
- <a href="http://generic.wordpress.soton.ac.uk/digital-learning/2019/01/28/accessibility-for-articulate-storyline-are-you-wcag-compliant/" hreflang="en" lang="en">Accessibility for Articulate storyline – Are you WCAG compliant? (anglais)</a>.