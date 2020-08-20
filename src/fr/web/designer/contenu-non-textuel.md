---
title: "Contenu non-textuel"
---

# Contenu non-textuel

<p class="lead">S’assurer, qu’une alternative aux contenus non-textuels soit proposée à l’utilisateur</p>

## Définir des équivalents textuels

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

![capture d’écran d’un lecteur vidéo contenant plusieurs boutons](../../images/player.png)  


## Rendre accessible les pistes audio ou vidéo
   
**Cible&nbsp;:** tout le monde, et en particulier les personnes déficientes visuelles, cognitives et auditives et celles qui maîtrisent mal le français.  
**Quand&nbsp;:** lors de la conception et lors du développement.

**Description&nbsp;:** 

Pour être accessibles, les contenus multimédias doivent&nbsp;: 
1. proposer une transcription intégrale
2.	proposer des sous-titres (vidéo uniquement) 
3.	proposer une audiodescription (vidéo uniquement)
4.	choisir un lecteur média accessible
5.	proscrire le démarrage automatique de la vidéo au chargement de la page
6.	proscrire les vidéos qui présentent plus de 3 flashs à la seconde 
7. par ailleurs, pour tout son émis de plus de 3 secondes, l'utilisateur doit avoir la possibilité soit de l'arrêter ou de le mettre en pause soit d'en contrôler son volume indépendamment du volume général du système.

Pour plus d'infos consulter [les recommandations accessibilité pour les contenus vidéos, animations et audios Orange](../../../contenu-editorial/composants-animes/).

**Objectif utilisateur&nbsp;:**

Fournir un moyen d’accès à l’information visuelle et auditive pour des personnes ne pouvant pas en bénéficier&nbsp;: malvoyants, aveugles, sourds, déficients cognitifs, ordinateur sans haut-parleurs, en environnement lumineux ou bruyant.

**Objectif technique&nbsp;:**

Permet le référencement de tout contenu audio et vidéo.



## Éviter les captcha

**Cible&nbsp;:** tous le monde en particulier, les personnes déficientes visuelles.  
**Quand&nbsp;:** lors de la conception et lors du développement.

**Description&nbsp;:**  
Les captcha sont souvent  la source de difficultés pour les utilisateurs. Si la mise en place d’un système anti-spam ne peut être évitée, il est souhaitable de s’orienter vers une solution plus souple pour l’utilisateur&nbsp;: 
- Double authentification&nbsp;;
- Champ de formulaire caché à laisser vide (technique du <span lang="en">honeypot</span>), non-visibles pour l’utilisateur&nbsp;;
- Mise à disposition d'un support téléphonique afin de s'assurer que le client est une vraie personne&nbsp;;
- Un contrôle permettant de s'assurer qu'une même combinaison <abbr>IP</abbr>/<i lang="en">User agent</i> (navigateur) ne tente pas de soumettre le formulaire plus de N fois par seconde.

Si aucune autre alternative n’est possible, il est indispensable de prévoir une alternative pour les captcha uniquement visuels ou sonores en proposant une combinaison de captcha&nbsp;:
- un captcha  audio&nbsp;+ visuel,
- des tests logiques (question dont la réponse est évidente, test  mathématique simple…)&nbsp;+ captcha visuel classique
- …
