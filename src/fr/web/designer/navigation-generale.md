---
title: "Navigation générale"
abstract: "Navigation générale, recommendations d'accessibilité web lors de la conception"
---

# Navigation générale

<p class="lead">S’assurer que l’utilisateur navigue facilement dans une page et plus globalement dans un site</p>



## Libellé des liens et des boutons

**Cible&nbsp;:** tout le monde et en particulier les personnes déficientes visuelles, cognitives ou ayant un déficit d’attention.  
**Quand&nbsp;:** lors de la conception du service et lors de la conception graphique.

**Description&nbsp;:**  
Les libellés des liens et des boutons doivent être suffisamment explicites.
Dans les cas exceptionnels où ce n’est techniquement pas possible, prévoir quand même un libellé explicite qui sera utilisé par la synthèse vocale (et les autres technologies d'assistance).

**Exemple valide&nbsp;:**  
«&nbsp;découvrez nos offres&nbsp;»
 
**Exemples non-valides&nbsp;:**  
«&nbsp;cliquez ici&nbsp;»  
«&nbsp;en savoir plus&nbsp;»



## Éviter les boites de dialogues et l’ouverture de nouvelles fenêtres

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

![Capture d’écran d’une boîte de dialogue beaucoup trop volumineuse](../../images/dialog.png)



## Fournir des liens d’évitement

**Cible&nbsp;:** utile pour les utilisateurs de mobile et tablette, les personnes déficientes visuelles et les personnes souffrant de handicap moteur ou en mobilité.  

**Quand&nbsp;:** dès la phase de conception et lors du développement.

**Description&nbsp;:**  
Fournir des liens d’évitement du type «&nbsp;Aller au contenu&nbsp;» sur chaque page. Ceux-ci facilitent la navigation pour les personnes utilisant le clavier, en mobilité ou navigant à l’aide d’un lecteur d’écran. En cas de **fortes contraintes,** les liens peuvent être masqués à l’écran et apparaître uniquement lors de la navigation au clavier.

**Exemple&nbsp;:**  
Des liens d’évitement («&nbsp;Aller à la navigation&nbsp;», «&nbsp;Aller au contenu&nbsp;») sont disponibles sur ce site.
Pour les faire apparaître, placer le focus en haut de la page en cliquant sur la barre d’adresse de votre navigateur par exemple, puis appuyer plusieurs fois sur la touche <kbd>Tab</kbd>.

![capture d’écran du site orange.com](../../images/skiplink.png)



## Permettre le contrôle des animations
  
**Cible&nbsp;:** les personnes malvoyantes, les personnes éprouvant des difficultés de lecture, d’attention ou de compréhension, les personnes épileptiques.  
**Quand&nbsp;:** lors de la conception du service et lors de la conception graphique.

**Description&nbsp;:**  
Tout contenu en mouvement, mis à jour automatiquement, clignotant ou en défilement doit pouvoir être stoppé, caché ou mis en pause par l’utilisateur si cette animation dure plus de 5 secondes. 
Par ailleurs, éviter autant que possible les flashs lumineux et les changements brusques de luminosité (cf. [Le logo des JO provoque des crises d’épilepsie](http://www.leparisien.fr/societe/le-logo-des-jo-provoque-des-crises-d-epilepsie-09-06-2007-2008107333.php)).

**Exemple&nbsp;:**  
![capture d’écran d’un carrousel disposant d’un bouton pour mettre en pause l’animation](../../images/carrousel.png)  

Un carrousel qui défile automatiquement doit se mettre en pause au survol de la souris ou lorsqu’il reçoit le focus.  
Il est également possible d’ajouter un bouton «&nbsp;pause&nbsp;» directement dans l’interface.



## Situer explicitement la page dans le site et fournir plusieurs moyens d'y accéder

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
