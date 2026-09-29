---
title: "Tester l'accessibilité de vos communications"
abstract: "Tester que vos contenus sont accessibles à toustes"
---

Prenez le réflexe de vérifier l’accessibilité de vos communications ! 2 raisons à cela : 
1.	Vos communications en tant que telles doivent être accessibles à tous : **c'est la loi !** Vous trouverez plus d'informations sur le cadre légal sur notre [page d'accueil](https://a11y-guidelines.orange.com/fr/) et sur notre page [Cadrage]("https://a11y-guidelines.orange.com/fr/cadrage/)
2.	Il est probable que vous convertissiez vos communications au format PDF pour les diffuser. En effet, parce qu’il garantit la sécurité et la compatibilité avec tous les systèmes, le format PDF est aujourd’hui le format numérique le plus couramment utilisé. Or, si ce format est effectivement facile et rapide à utiliser, il présente trop souvent comme limite de ne pas être accessible … parce que son fichier source (le fichier qui a servi à le générer) n’est pas accessible lui-même. 

# Recommandations générales 

## Utilisez le « Vérificateur d’accessibilité » proposé par votre outil de rédaction
Lors de la création de votre contenu **avec des outils de Microsoft Office (Word, Powerpoint, Excel, etc.,), utilisez le « Vérificateur d’accessibilité » pour un premier niveau de vérification de son accessibilité**. Cet outil s’active depuis le menu « Révision ». Il détectera certains problèmes d’accessibilité dans votre document et, si besoin, vous proposera des suggestions pour résoudre chaque problème identifié.
Parce qu’elle vous permet de vérifier automatiquement un certain nombre de critères d’accessibilité dans votre document, **cette fonctionnalité est très pratique. Retenez cependant qu’elle ne garantit pas que votre document soit 100% accessible**. Des tests manuels, ou en tout cas, **une intervention humaine reste nécessaire pour vérifier des recommandations basées sur de la pertinence** comme « Donnez du sens au texte de vos liens hypertexte » ou encore « Rédigez des équivalents textuels pertinents pour les images ».

## Vérifiez les contrastes de couleurs
Rappelez-vous la recommandation générale d’employer la couleur de manière accessible. ( @VivianePourGitHub : Faire le lien avec le chapitre 203 des recommandations éditoriales générales).
Pour vous aider, utilisez le logiciel libre [Colour Contrast Analyser](https://developer.paciellogroup.com/resources/contrastanalyser/) . Il vous indiquera si les contrastes de couleurs utilisés sont conformes.
Notez que le vérificateur d’accessibilité proposé par les outils de Microsoft (Word, Powerpoint, Excel, etc., …) propose déjà un premier niveau de vérification des contrastes. C’est bien… mais pas toujours suffisant. N’hésitez pas à utiliser [Colour Contrast Analyser](https://developer.paciellogroup.com/resources/contrastanalyser/) en complément.

## Écoutez vos contenus avec un lecteur d’écran
Afin de poursuivre vos vérifications, écoutez le contenu de votre document lu avec le lecteur d’écran de votre choix. Les lecteurs d’écran les plus utilisés aujourd’hui sont [NVDA](https://www.nvda.fr/c2) (sur Windows, gratuit), [JAWS](https://www.freedomsci.de/serv01fra.htm) (sur Windows, payant), TalkBack (sur Android, gratuit) et VoiceOver(intégré à MacOs et IoS, gratuit).
Notez que la réalisation de ce test nécessite donc au préalable **un apprentissage des fonctionnalités de base du lecteur choisi**. Vous pourrez ensuite naviguer au sein de votre document dans la même configuration que les personnes malvoyantes ou non-voyantes. 
Pour vous aider à la prise en main de ces lecteurs d’écran, consulter l’article [Apprendre la navigation vocale avec JAWS et NVDA](https://a11y-guidelines.orange.com/fr/web/outils/methodes-et-outils-de-test/navigation-lecteur-ecran/)

# Ressources externes #
* [Accessibilité Word, WebAIM](http://webaim.org/techniques/word/) (anglais).
* Le site gouv.fr vous propose une liste de [Critères et tests](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/) issus du RGAA (Référentiel général d’amélioration de l’accessibilité) @VivianePourGitHub : Hum ... ressource extrene à enlever ? En fait, beaucoup des critères commencent par "Dans chaque page web" !
