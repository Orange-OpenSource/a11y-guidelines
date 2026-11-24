---
title: "Tester l’accessibilité d’un site web avec NVDA"
abstract: "Apprenez à utiliser NVDA pour tester l’accessibilité d’un site web grâce à 8 vidéos pratiques"
titleBeforeTag: true
date: "2026-11-17"
tags:
  - web
  - beginner
css:
 - /assets/able-player/ableplayer.min.css
js:
 - https://code.jquery.com/jquery-3.7.1.min.js
 - /assets/able-player/ableplayer.min.js
---

<style>
  .able-wrapper + h3 {
    margin-top: 1rem;
  }
</style>


# Tester l’accessibilité d’un site web avec NVDA : un parcours en 8 vidéos

## Pourquoi utiliser NVDA pour tester un site web ?

NVDA (*<span lang="en">NonVisual Desktop Access</span>*) est un lecteur d’écran gratuit et libre, disponible sur Windows. Il permet notamment de parcourir une page web et de restituer vocalement les contenus, les noms et rôles des composants, ainsi que certaines informations sur leur état.

Pour un auditeur ou une auditrice en accessibilité numérique, NVDA constitue un outil de test précieux : il aide à vérifier ce qu’une personne utilisant un lecteur d’écran peut percevoir et les interactions qu’elle peut réaliser sur un site. Un bouton est-il correctement annoncé ? Un champ de formulaire possède-t-il un nom accessible et pertinent ? Un message d’erreur est-il restitué ?

**L’objectif de ce parcours n’est pas d’apprendre à utiliser NVDA au quotidien en tant que personne aveugle ou malvoyante.** Il est de présenter les fonctionnalités utiles aux professionnels qui souhaitent compléter leurs vérifications d’accessibilité par des tests avec un lecteur d’écran.

Ces tests ne remplacent ni l’analyse du code, ni les autres contrôles d’accessibilité, ni les tests réalisés avec des personnes en situation de handicap. Ils permettent toutefois de repérer des problèmes qui peuvent passer inaperçus lors d’une vérification purement visuelle.

## Avant de commencer

Vous aurez besoin d’un ordinateur sous Windows, de NVDA et d’un navigateur web. Les vidéos suivent une progression : les deux premières préparent l’outil, puis les suivantes montrent comment l’utiliser pour examiner différents aspects d’une page.

Dans les raccourcis présentés, la touche `NVDA` désigne généralement <kbd>Inser</kbd> ou <kbd>Verr. maj</kbd>, selon la configuration du lecteur d’écran. L’interface et certains réglages peuvent avoir évolué depuis l’enregistrement des vidéos : pour les instructions les plus récentes, consultez le [guide d’utilisation officiel de NVDA en français](https://www.nvda.fr/doc/userGuide.html).

Cet article a été rédigé le 12 mai 2025.

## Le parcours vidéo

### Vidéo 1 - Installer NVDA

Cette première vidéo accompagne les premiers pas : téléchargement, installation et démarrage du lecteur d’écran. Elle montre également comment éviter son lancement automatique à l’ouverture de la session Windows, une option qui n’est pas toujours utile sur un poste principalement dédié aux tests.

Une fois NVDA installé, vous pouvez le lancer avec le raccourci <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>N</kbd>, lorsque celui-ci est disponible sur votre configuration.

Pour obtenir une version actuelle du logiciel, utilisez la [page de téléchargement de NV Access](https://www.nvaccess.org/download/). La démonstration vidéo peut présenter des écrans différents de ceux de la version que vous installez.

#### Regarder la vidéo 1 : Installer NVDA

<video id="nvda-video-1" data-able-player data-lang="fr" width="560" height="315" preload="metadata" playsinline>
  <source src="/fr/articles/videos/20251205_partie_01_reencode.mp4" type="video/mp4">
  <track kind="captions" src="/fr/articles/videos/20251205_partie_01_fr.vtt" srclang="fr" label="Français" default>
</video>

### Vidéo 2 - Configurer NVDA pour faciliter les tests

Avant d’auditer une page, quelques réglages rendent NVDA plus confortable à utiliser. La vidéo présente les paramètres de parole, notamment le choix de la voix, la vitesse de lecture et le volume. Elle montre aussi comment adapter l’écho clavier pendant la saisie.

Elle s’intéresse surtout à la **mise en évidence visuelle**, qui permet de suivre plus facilement les positions du focus et du curseur de navigation à l’écran. Cette fonctionnalité est particulièrement utile lorsqu’on découvre le fonctionnement d’un lecteur d’écran et que l’on souhaite comparer ce qui est affiché à ce qui est annoncé.

Vous apprendrez à accéder aux paramètres depuis le menu NVDA, ouvert avec `NVDA` + <kbd>N</kbd>.

#### Regarder la vidéo 2 : Configurer NVDA

<video id="nvda-video-2" data-able-player data-lang="fr" width="560" height="315" preload="metadata" playsinline>
  <source src="/fr/articles/videos/20251205_partie_02_reencode.mp4" type="video/mp4">
  <track kind="captions" src="/fr/articles/videos/20251205_partie_02_fr.vtt" srclang="fr" label="Français" default>
</video>

### Vidéo 3 - Naviguer dans une page web avec le clavier

Pour tester un site avec NVDA, il faut distinguer la navigation habituelle au clavier de la lecture propre au lecteur d’écran. Cette vidéo présente les déplacements avec <kbd>Tab</kbd> et <kbd>Maj</kbd> + <kbd>Tab</kbd>, la lecture avec les flèches ainsi que les raccourcis permettant d’atteindre directement certains éléments.

En mode navigation, les touches <kbd>H</kbd>, <kbd>K</kbd> et <kbd>B</kbd> permettent par exemple d’accéder respectivement aux titres, aux liens et aux boutons. Vous découvrirez aussi la différence entre le **mode navigation**, utilisé pour parcourir les contenus, et le **mode formulaire (focus)**, qui permet notamment de saisir du texte dans un champ.

La vidéo introduit enfin la *visionneuse de parole*. Cet outil affiche sous forme de texte ce que NVDA prononce : un complément pratique pour analyser précisément une annonce.

**À vérifier lors d’un test :** peut-on parcourir les informations, retrouver les éléments interactifs et les utiliser au clavier de manière cohérente ?

#### Regarder la vidéo 3 : Naviguer au clavier avec NVDA

<video id="nvda-video-3" data-able-player data-lang="fr" width="560" height="315" preload="metadata" playsinline>
  <source src="/fr/articles/videos/20251205_partie_03_reencode.mp4" type="video/mp4">
  <track kind="captions" src="/fr/articles/videos/20251205_partie_03_fr.vtt" srclang="fr" label="Français" default>
</video>

### Vidéo 4 - Examiner la structure d’une page avec la liste d’éléments

Une page peut sembler bien organisée visuellement tout en présentant une structure difficile à comprendre avec un lecteur d’écran. La **liste d’éléments**, accessible avec `NVDA` + <kbd>F7</kbd>, permet d’examiner différents éléments reconnus par NVDA : titres, liens, boutons, champs de formulaire et régions de la page.

La vidéo propose plusieurs vérifications concrètes : comparer les titres visibles avec les titres détectés, observer leur hiérarchie, vérifier qu’un lien est annoncé comme un lien et qu’un bouton est reconnu comme un bouton, ou encore examiner les régions utilisées pour structurer le contenu.

**À vérifier lors d’un test :** les rôles et la structure restitués par NVDA correspondent-ils à la fonction réelle des éléments et à l’organisation de la page ?

#### Regarder la vidéo 4 : Utiliser la liste d’éléments de NVDA

<video id="nvda-video-4" data-able-player data-lang="fr" width="560" height="315" preload="metadata" playsinline>
  <source src="/fr/articles/videos/20251205_partie_04_reencode.mp4" type="video/mp4">
  <track kind="captions" src="/fr/articles/videos/20251205_partie_04_fr.vtt" srclang="fr" label="Français" default>
</video>

### Vidéo 5 - Tester les champs de formulaire

Pour remplir un formulaire, une personne utilisant un lecteur d’écran doit pouvoir comprendre la fonction de chaque champ et les informations attendues. Cette vidéo montre comment vérifier la restitution du **nom accessible** de chaque champ, de ses consignes et de son caractère obligatoire lorsqu’il est requis.

Les exemples mettent en évidence deux problèmes fréquents : un champ identifié visuellement comme obligatoire, mais dont l’obligation n’est pas annoncée ; et un champ dont NVDA ne restitue que le texte d’exemple (*placeholder*), faute d’association correcte avec son libellé visible.

La vidéo aborde également les informations d’autocomplétion associées à certains champs de données personnelles.

**À vérifier lors d’un test :** sans se fier uniquement à l’affichage, comprend-on ce qu’il faut saisir, quels champs sont obligatoires et quelles aides à la saisie sont disponibles ?

#### Regarder la vidéo 5 : Tester les champs de formulaire

<video id="nvda-video-5" data-able-player data-lang="fr" width="560" height="315" preload="metadata" playsinline>
  <source src="/fr/articles/videos/20251205_partie_05_reencode.mp4" type="video/mp4">
  <track kind="captions" src="/fr/articles/videos/20251205_partie_05_fr.vtt" srclang="fr" label="Français" default>
</video>

### Vidéo 6 - Vérifier le nom accessible des liens et des boutons

Le texte visible sur un lien ou un bouton n’est pas toujours identique à son **nom accessible**, c’est-à-dire au nom restitué par le lecteur d’écran. Ce nom doit permettre de comprendre la fonction de l’élément.

La vidéo montre comment des liens intitulés « Voir plus » peuvent disposer de noms accessibles plus explicites afin de distinguer leurs destinations. Elle présente également un sélecteur de langue : deux composants qui se ressemblent visuellement peuvent être annoncés différemment selon leur nom et leur rôle dans le code.

La liste d’éléments de NVDA est réutilisée pour contrôler ces informations plus facilement.

**À vérifier lors d’un test :** chaque lien ou bouton est-il identifiable, correctement annoncé et compréhensible dans son contexte ? Son rôle correspond-il à l’action attendue ?

#### Regarder la vidéo 6 : Vérifier les noms accessibles des liens et boutons

<video id="nvda-video-6" data-able-player data-lang="fr" width="560" height="315" preload="metadata" playsinline>
  <source src="/fr/articles/videos/20251205_partie_06_reencode.mp4" type="video/mp4">
  <track kind="captions" src="/fr/articles/videos/20251205_partie_06_fr.vtt" srclang="fr" label="Français" default>
</video>

### Vidéo 7 - Contrôler les alternatives textuelles des images

Toutes les images n’ont pas la même fonction. Certaines décorent la page ; d’autres transmettent une information, présentent du texte ou servent de lien. La manière dont elles sont restituées par NVDA doit tenir compte de cette différence.

La vidéo examine quatre situations :

- **Image décorative :** elle ne doit pas ajouter d’annonce inutile à la lecture.
- **Image informative :** l’information nécessaire à sa compréhension doit être disponible.
- **Image contenant du texte :** le contenu utile du texte visible doit être restitué.
- **Image utilisée comme lien :** l’utilisateur doit comprendre la destination ou la fonction du lien.

Les démonstrations montrent notamment un visuel de produit, une promotion et une icône de réseau social.

**À vérifier lors d’un test :** les informations transmises par les images sont-elles accessibles, sans descriptions superflues ou trompeuses ?

#### Regarder la vidéo 7 : Tester les alternatives textuelles des images

<video id="nvda-video-7" data-able-player data-lang="fr" width="560" height="315" preload="metadata" playsinline>
  <source src="/fr/articles/videos/20251205_partie_07_reencode.mp4" type="video/mp4">
  <track kind="captions" src="/fr/articles/videos/20251205_partie_07_fr.vtt" srclang="fr" label="Français" default>
</video>

### Vidéo 8 — Vérifier les messages et les changements d’état

Certains éléments d’une page changent après une action : une recherche affiche des résultats, un article est ajouté au panier, une case est cochée ou un message d’erreur apparaît. Ces changements doivent pouvoir être compris par une personne utilisant un lecteur d’écran.

Cette dernière vidéo présente la restitution des résultats de recherche, des confirmations d’action et des erreurs de saisie. Elle examine également l’annonce de l’état des composants interactifs, par exemple un menu déplié ou replié et une case cochée ou non cochée.

Un point important consiste à distinguer **l’état d’un composant**, annoncé lorsqu’on interagit avec lui, d’un **message dynamique**, qui peut devoir être annoncé sans que l’utilisateur ne déplace son curseur de lecture ou son focus.

**À vérifier lors d’un test :** l’utilisateur reçoit-il l’information nécessaire pour comprendre le résultat de son action, au bon moment et sans déplacement de focus injustifié ?

#### Regarder la vidéo 8 : Tester les messages et changements d’état

<video id="nvda-video-8" data-able-player data-lang="fr" width="560" height="315" preload="metadata" playsinline>
  <source src="/fr/articles/videos/20251205_partie_08_reencode.mp4" type="video/mp4">
  <track kind="captions" src="/fr/articles/videos/20251205_partie_08_fr.vtt" srclang="fr" label="Français" default>
</video>

## Comment utiliser ces vidéos dans un audit ?

Ce parcours peut être suivi dans l’ordre pour découvrir NVDA ou consulté ponctuellement selon les composants à vérifier. Pendant vos tests, comparez les informations visuelles avec celles restituées par le lecteur d’écran, puis essayez de réaliser les mêmes actions sans souris.

Lorsque vous repérez un écart, documentez l’élément concerné, la manipulation effectuée, le résultat attendu et ce qui a réellement été annoncé. Précisez aussi les versions de NVDA et du navigateur utilisés : la restitution peut varier selon l’environnement technique.

**Un test avec NVDA ne permet pas, à lui seul, de conclure qu’un site est accessible ou conforme.** Il complète les contrôles techniques et fonctionnels et aide à mieux comprendre les difficultés rencontrées lors de l’utilisation d’un lecteur d’écran.

## Pour aller plus loin

Pour approfondir les raccourcis et les fonctionnalités présentés dans les vidéos, consultez le [guide de l’utilisateur de NVDA](https://www.nvda.fr/doc/userGuide.html) ainsi que le [résumé des commandes de NVDA](https://www.nvda.fr/doc/keyCommands.html).

Vous pouvez également retrouver d’autres conseils pratiques dans les [recommandations Orange sur la navigation à l’aide d’un lecteur d’écran](https://a11y-guidelines-orange.netlify.app/fr/web/outils/methodes-et-outils-de-test/navigation-lecteur-ecran/).

