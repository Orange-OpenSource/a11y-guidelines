---
title: "Éviter les boites de dialogues et l’ouverture de nouvelles fenêtres"
---

# Éviter les boites de dialogues et l’ouverture de nouvelles fenêtres

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
