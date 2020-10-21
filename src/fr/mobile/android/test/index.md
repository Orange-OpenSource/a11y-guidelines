---
title: "Le test de l’accessibilité sous Android"
---

# Le test de l’accessibilité sous Android

Pour le web, le niveau d’accessibilité demandé à toute interface <abbr>HTML</abbr> par le groupe Orange est le respect des critères du niveau AA des <span lang="en">Web Content Accessibility Guidelines</span> (<abbr>WCAG</abbr>) 2.1. L'équivalent pour les applications mobiles natives est  une transposition de ces critères et le respect des [recommandations de la plateforme Android](https://developer.android.com/training/accessibility/testing).

Les 4 étapes qui suivent permettent de détecter la majorité des erreurs d’accessibilité, très en amont, avant la phase de tests, et ainsi de réduire le coût du processus pour rendre une application accessible.

- La première étape consiste à analyser l’accessibilité dès la phase de conception, sur les maquettes ou les prototypes. En faisant intervenir un expert en accessibilité, celui-ci pourra fournir dès cette phase des retours pour adapter les maquettes au besoin, ce qui évitera par la suite des pertes de temps en développements d’interfaces non adaptées à l’accessibilité.

- La deuxième étape consiste à l’analyse du code durant la phase de développement par les développeurs. Cela passe notamment par des tests automatisés ou par l’outil <span lang="en">Lint </span> de Android Studio.

- La troisième étape consiste à scanner l’application par des outils d’analyse en accessibilité, afin de détecter d’autres potentielles erreurs commises.

- La dernière étape consiste à réaliser des tests manuels, en utilisant l'application comme le font les personnes en situation de handicap, pour détecter les potentiels problèmes d’accessibilité.

Dans l’idéal, les tests doivent être effectués sur des mobiles Android sans surcouche constructeur comme le Pixel. Ils doivent ensuite être réalisés sur les mobiles avec surcouche constructeur les plus utilisés par l’application.

Pour tester l’accessibilité sur Android, il est utile de télécharger sur [<span lang="en">Google Play</span>](https://play.google.com/store/apps?hl=fr), [<span lang="en">Android Accessibility Suite</span>](https://play.google.com/store/apps/details?id=com.google.android.marvin.talkback) et [<span lang="en">Accessibility Scanner</span>](https://play.google.com/store/apps/details?id=com.google.android.apps.accessibility.auditor). Les outils peuvent être combinés pour vérifier plus de critères en même temps.


