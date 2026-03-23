module.exports = {
  top: {
    en: [
      { label: "Go to menu", href: "#main-menu" },
      { label: "Go to content", href: "#main-content" },
      {
        label: "Go to search",
        href: "#search-input",
        itemClass: ["hidden-if-no-js"],
      },
      { label: "Go to footer", href: "#footer" },
    ],
    fr: [
      { label: "Aller au menu", href: "#main-menu" },
      { label: "Aller au contenu", href: "#main-content" },
      {
        label: "Aller à la recherche",
        href: "#search-input",
        itemClass: ["hidden-if-no-js"],
      },
      { label: "Aller au pied de page", href: "#footer" },
    ],
  },
  main: {
    en: [
      { label: "Home", href: "/en/" },
      {
        label: "Planning",
        href: "/en/planning/",
        subLevels: [
          {
            label: "Legal framework in France",
            href: "/en/planning/legal-framework-in-france/",
          },
          {
            label: "Legal framework in Europe",
            href: "/en/planning/legal-framework-in-other-countries/",
          },
          { label: "Testing method", href: "/en/planning/testing-method/" },
        ],
      },
      {
        label: "Web",
        href: "/en/web/",
        inCardNavigation: true,
        icon: {
          name: "web",
          height: 130,
          width: 190,
        },
        theme: "info",
        subLevels: [
          { label: "Design", href: "/en/web/design/" },
          { label: "Develop", href: "/en/web/develop/" },
          { label: "Test", href: "/en/web/test/" },
          { label: "Audit", href: "/en/web/wcag-audit/" },
          { label: "Toolbox", href: "/en/web/toolbox/" },
          { label: "11 Essentials", href: "/en/web/essentials-checklist/" },
        ],
      },
      {
        label: "Android",
        href: "/en/mobile/android/",
        inCardNavigation: true,
        icon: {
          name: "android",
          height: 130,
          width: 72,
        },
        theme: "warning",
        subLevels: [
          { label: "Design", href: "/en/mobile/android/design/" },
          { label: "Develop", href: "/en/mobile/android/development/" },
          { label: "Test", href: "/en/mobile/android/test/" },
          { label: "Audit", href: "/en/mobile/android/wcag-audit/" },
          { label: "Toolbox", href: "/en/mobile/android/toolbox/" },
          {
            label: "11 Essentials",
            href: "/en/mobile/android/essentials-checklist/",
          },
        ],
      },
      {
        label: "iOS",
        href: "/en/mobile/ios/",
        inCardNavigation: true,
        icon: {
          name: "ios",
          height: 130,
          width: 72,
        },
        theme: "warning",
        subLevels: [
          { label: "Design", href: "/en/mobile/ios/design/" },
          { label: "Develop", href: "/en/mobile/ios/development/" },
          { label: "Test", href: "/en/mobile/ios/test/" },
          { label: "Audit", href: "/en/mobile/ios/wcag-audit/" },
          { label: "Toolbox", href: "/en/mobile/ios/toolbox/" },
          { label: "11 Essentials", href: "/en/mobile/ios/checklist/" },
          { label: "WWDC", href: "/en/mobile/ios/wwdc/" },
        ],
      },
      {
        label: "Content and communication",
        href: "/en/content-and-communication/",
        inCardNavigation: true,
        icon: {
          name: "editorial-content",
          height: 151,
          width: 131,
        },
        theme: "purple",
        subLevels: [
          { label: "Word", href: "/en/content-and-communication/word/" },
          {
            label: "Powerpoint",
            href: "/en/content-and-communication/powerpoint/",
          },
          { label: "Excel", href: "/en/content-and-communication/excel/" },
          {
            label: "PDF documents",
            href: "/en/content-and-communication/pdf/",
          },
          {
            label: "Social networks",
            href: "/en/content-and-communication/social-networks/",
          },
          { label: "Emails", href: "/en/content-and-communication/emails/" },
          {
            label: "Audio/video content",
            href: "/en/content-and-communication/animated-components/",
          },
          {
            label: "E-learning",
            href: "/en/content-and-communication/e-learning/",
          },
          {
            label: "11 Essentials",
            href: "/en/content-and-communication/essentials-checklist/",
          },
        ],
      },
      { label: "Articles", href: "/en/articles/" },
      { label: "Persona", href: "/en/persona/", mainMenu: false },
    ],
    fr: [
      { label: "Accueil", href: "/fr/" },
      {
        label: "Cadrage",
        href: "/fr/cadrage/",
        subLevels: [
          {
            label: "Cadre légal français",
            href: "/fr/cadrage/cadre-legal-francais/",
          },
          {
            label: "Cadre légal en Europe",
            href: "/fr/cadrage/cadre-legal-en-europe/",
          },
          { label: "Méthode de test", href: "/fr/cadrage/methode-de-test/" },
          { label: "Correspondance RGAA et WCAG", href: "/fr/cadrage/correspondance-rgaa-wcag/" }
        ],
      },
      {
        label: "Web",
        href: "/fr/web/",
        inCardNavigation: true,
        icon: {
          name: "web",
          height: 130,
          width: 190,
        },
        theme: "info",
        subLevels: [
          { label: "Designer", href: "/fr/web/designer/" },
          { label: "Développer", href: "/fr/web/developper/" },
          { label: "Tester", href: "/fr/web/tester/" },
          { label: "Auditer", href: "/fr/web/audit-wcag/" },
          { label: "Boite à outils", href: "/fr/web/outils/" },
          {
            label: "11 Incontournables",
            href: "/fr/web/checklist-incontournables/",
          },
        ],
      },
      {
        label: "Android",
        href: "/fr/mobile/android/",
        inCardNavigation: true,
        icon: {
          name: "android",
          height: 130,
          width: 72,
        },
        theme: "warning",
        subLevels: [
          { label: "Designer", href: "/fr/mobile/android/conception/" },
          { label: "Développer", href: "/fr/mobile/android/developpement/" },
          { label: "Tester", href: "/fr/mobile/android/test/" },
          { label: "Auditer", href: "/fr/mobile/android/audit-wcag/" },
          { label: "Boite à outils", href: "/fr/mobile/android/outils/" },
          {
            label: "11 Incontournables",
            href: "/fr/mobile/android/checklist-incontournables/",
          },
        ],
      },
      {
        label: "iOS",
        href: "/fr/mobile/ios/",
        inCardNavigation: true,
        icon: {
          name: "ios",
          height: 130,
          width: 72,
        },
        theme: "warning",
        subLevels: [
          { label: "Designer", href: "/fr/mobile/ios/conception/" },
          { label: "Développer", href: "/fr/mobile/ios/developpement/" },
          { label: "Tester", href: "/fr/mobile/ios/test/" },
          { label: "Auditer", href: "/fr/mobile/ios/audit-wcag/" },
          { label: "Boite à outils", href: "/fr/mobile/ios/outils/" },
          {
            label: "11 Incontournables",
            href: "/fr/mobile/ios/checklist-incontournables/",
          },
          { label: "WWDC", href: "/fr/mobile/ios/wwdc/" },
        ],
      },
      {
        label: "Contenu et communication",
        href: "/fr/contenu-et-communication/",
        inCardNavigation: true,
        icon: {
          name: "editorial-content",
          height: 151,
          width: 131,
        },
        theme: "purple",
        subLevels: [
          { label: "Word", href: "/fr/contenu-et-communication/word/" },
          {
            label: "Powerpoint",
            href: "/fr/contenu-et-communication/powerpoint/",
          },
          { label: "Excel", href: "/fr/contenu-et-communication/excel/" },
          { label: "Documents PDF", href: "/fr/contenu-et-communication/pdf/" },
          {
            label: "Réseaux sociaux",
            href: "/fr/contenu-et-communication/reseaux-sociaux/",
          },
          { label: "Emails", href: "/fr/contenu-et-communication/emails/" },
          {
            label: "Contenus audios/vidéos",
            href: "/fr/contenu-et-communication/composants-animes/",
          },
          {
            label: "E-learning",
            href: "/fr/contenu-et-communication/e-learning/",
          },
          {
            label: "11 Incontournables",
            href: "/fr/contenu-et-communication/checklist-incontournables/",
          },
        ],
      },
      { label: "Articles", href: "/fr/articles/" },
      { label: "Persona", href: "/fr/persona/", mainMenu: false },
    ],
  },
  footer: {
    en: [
      { label: "Contact", href: "/en/contact/" },
      { label: "About", href: "/en/about/" },
      { label: "RSS feed", href: "/feed-en.xml" },
      {
        label: "Accessibility: partially compliant",
        href: "/en/accessibility/",
      },
      {
        label: "Pre-release on Netlify",
        href: "https://a11y-guidelines-orange.netlify.app/en/",
      },
    ],
    fr: [
      { label: "Contact", href: "/fr/contact/" },
      { label: "À propos", href: "/fr/a-propos/" },
      { label: "Flux rss", href: "/feed-fr.xml" },
      {
        label: "Accessibilité : partiellement conforme",
        href: "/fr/accessibilite/",
      },
      {
        label: "Pré-version sur Netlify",
        href: "https://a11y-guidelines-orange.netlify.app/fr/",
      },
    ],
  },
};
