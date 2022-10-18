---
title: "Les critères incontournables sous Android pour la conception"
abstract: "Quelques recommandations pour concevoir accessible sous Android"
---

# Android designer - Les critères incontournables sous Android pour la conception

Ce guide a pour objectif de présenter les différents critères d’accessibilité à respecter pour obtenir une application Android accessible. Chaque critère est présenté en expliquant pour qui ce critère est important, quand on peut le mettre en place, pourquoi il est important et la règle d’accessibilité qui en découle. Les critères sont explicités par des captures d’exemples réels.

Nous vous invitons à installer l’application [mDAN](../../mdan/) pour obtenir des exemples fonctionnels avec <span lang="en">TalkBack</span>, le lecteur d’écran d’Android, et d’autres outils d’assistance. Pour plus d’information sur l’outil (comment l’activer, comment s’en servir…) nous vous invitons à vous référer à la [section concernant <span lang="en">TalkBack</span>](../talkback/).

Pour le web, le niveau d’accessibilité demandé à toute interface <abbr>HTML</abbr> par le groupe Orange est **le respect des critères du niveau AA des <span lang="en">Web Content Accessibility Guidelines</span> (<abbr>WCAG</abbr>) 2.1, sans point bloquant** suite à un test utilisateur d’aide technique pour les principaux scénarios d’utilisation des fonctionnalités du site ou de l’application. Pour les applications mobiles natives, une transposition de ces critères et le respect des recommandations de la plateforme Android en terme d’accessibilité sont demandés, voir ces [recommandations](https://developer.android.com/guide/topics/ui/accessibility/). L’objet de ces pages est d’en faire un « digest » sans s’y substituer.

Si l'application mobile est pour Orange, il est nécessaire de suivre les recommandations de design du groupe. Le respect de la charte Orange pour Android, notamment dans l'utilisation des couleurs est un prérequis. Nous vous invitons à vous référer à la [guideline accessibilité du groupe Orange](https://design.orange.com/fr/guidelines/accessibility/) et à [la charte design Android du groupe](https://design.orange.com/fr/guidelines/android/)