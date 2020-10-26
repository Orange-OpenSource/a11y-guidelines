/*global tarteaucitron, ga, Shareaholic, stLight, clicky, top, google, Typekit, FB, ferankReady, IN, stButtons, twttr, PCWidget*/
/*jslint regexp: true, nomen: true*/

// google tag manager
tarteaucitron.services.googletagmanager = {
  "key": "googletagmanager",
  "type": "api",
  "name": "Google Tag Manager",
  "uri": "https://adssettings.google.com/",
  "needConsent": true,
  "cookies": ['_ga', '_gat', '__utma', '__utmb', '__utmc', '__utmt', '__utmz', '__gads', '_drt_', 'FLC', 'exchange_uid', 'id', 'fc', 'rrs', 'rds', 'rv', 'uid', 'UIDR', 'UID', 'clid', 'ipinfo', 'acs'],
  "js": function () {
    "use strict";
    if (tarteaucitron.user.googletagmanagerId === undefined) {
      return;
    }
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      'gtm.start': new Date().getTime(),
      event: 'gtm.js'
    });
    tarteaucitron.addScript('https://www.googletagmanager.com/gtm.js?id=' + tarteaucitron.user.googletagmanagerId);
  }
};
