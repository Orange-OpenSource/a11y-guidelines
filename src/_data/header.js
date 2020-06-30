module.exports = {
  topNavigation: {
    en: [
      { label: 'Go to menu', href: '#main-menu' },
      { label: 'Go to search', href: '#search' },
      { label: 'Go to content', href: '#main-content' },
      { label: 'Go to footer', href: '#footer' },
      { label: 'Better contrasts', href: '#' },
      { label: 'Guided tour', href: '#' }
    ],
    fr: [
      { label: 'Aller au menu', href: '#main-menu' },
      { label: 'Aller à la recherche', href: '#search' },
      { label: 'Aller au contenu', href: '#main-content' },
      { label: 'Aller au pied de page', href: '#footer' },
      { label: 'Contrastes renforcés', href: '#' },
      { label: 'Lancer la visite guidée', href: '#' }
    ]
  },
  mainNavigation: {
    'en': [
      { label: 'Home', href: '/en/' },
      {
        label: 'Web',
        href: '/en/web/',
        subLevels: [
          { label: 'Design', href: '/en/web/design/' },
          { label: 'Develop', href: '/en/web/develop/' },
          { label: 'Test', href: '/en/web/test-tools/' },
          { label: 'Component examples', href: '/en/web/components-examples/' }
        ]
      },
      {
        label: 'Android',
        href: '/en/mobile/android/',
        subLevels: [
          { label: 'Criteria', href: '/en/mobile/android/criteria/' },
          { label: 'Develop', href: '/en/mobile/android/development/' },
          { label: 'Talkback', href: '/en/mobile/android/talkback/' }
        ]
      },
      {
        label: 'iOS',
        href: '/en/mobile/ios/',
        subLevels: [
          { label: 'Design', href: '/en/mobile/ios/design/' },
          { label: 'Develop', href: '/en/mobile/ios/development/' },
          { label: 'Test', href: '/en/mobile/ios/test/' },
          { label: 'VoiceOver', href: '/en/mobile/ios/voiceover/' },
          { label: 'WWDC', href: '/en/mobile/ios/wwdc/' }
        ]
      },
      {
        label: 'Editorial content',
        href: '/en/editorial-content/',
        subLevels: [
          { label: 'Transversal recommendations', href: '/en/editorial-content/general/' },
          { label: 'Word', href: '/en/editorial-content/word/' },
          { label: 'Powerpoint', href: '/en/editorial-content/powerpoint/' },
          { label: 'PDF documents', href: '/en/editorial-content/pdf/' },
          { label: 'Emails', href: '/en/editorial-content/emails/' },
          { label: 'Audio/video content', href: '/en/editorial-content/animated-components/' }
        ]
      },
      { label: 'Articles', href: '/en/articles/' }
    ],
    'fr': [
      { label: 'Accueil', href: '/fr/' },
      {
        label: 'Web',
        href: '/fr/web/',
        subLevels: [
          { label: 'Designer', href: '/fr/web/designer/' },
          { label: 'Développer', href: '/fr/web/developper/' },
          { label: 'Tester', href: '/fr/web/outils/' },
          { label: 'Exemples de composants', href: '/fr/web/exemples-de-composants/' }
        ]
      },
      {
        label: 'Android',
        href: '/fr/mobile/android/',
        subLevels: [
          { label: 'Designer', href: '/fr/mobile/android/conception/' },
          { label: 'Développer', href: '/fr/mobile/android/developpement/' },
          { label: 'Tester', href: '/fr/mobile/android/test/' },
          { label: 'Talkback', href: '/fr/mobile/android/talkback/' }
        ]
      },
      {
        label: 'iOS',
        href: '/fr/mobile/ios/',
        subLevels: [
          { label: 'Designer', href: '/fr/mobile/ios/conception/' },
          { label: 'Développer', href: '/fr/mobile/ios/developpement/' },
          { label: 'Tester', href: '/fr/mobile/ios/test/' },
          { label: 'VoiceOver', href: '/fr/mobile/ios/voiceover/' },
          { label: 'WWDC', href: '/fr/mobile/ios/wwdc/' }
        ]
      },
      {
        label: 'Contenu éditorial',
        href: '/fr/contenu-editorial/',
        subLevels: [
          { label: 'Recommandations transverses', href: '/fr/contenu-editorial/generalites/' },
          { label: 'Word', href: '/fr/contenu-editorial/word/' },
          { label: 'Powerpoint', href: '/fr/contenu-editorial/powerpoint/' },
          { label: 'Documents PDF', href: '/fr/contenu-editorial/pdf/' },
          { label: 'Emails', href: '/fr/contenu-editorial/emails/' },
          { label: 'Contenus audios/vidéos', href: '/fr/contenu-editorial/composants-animes/' }
        ]
      },
      { label: 'Articles', href: '/fr/articles/' }
    ]
  }
}
