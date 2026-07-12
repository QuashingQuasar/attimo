var klaroConfig = {
  version: 1,
  storageMethod: 'cookie',
  cookieName: 'klaro',
  cookieExpiresAfterDays: 365,
  default: false,
  mustConsent: false,
  acceptAll: true,
  hideDeclineAll: false,
  styling: { theme: ['light', 'bottom'] },
  // Match the page's <html lang> so the banner speaks the visitor's language.
  // Klaro falls back to `zz` for any language without a translations entry.
  lang: (typeof document !== 'undefined' && (document.documentElement.getAttribute('lang') || '').slice(0, 2)) || 'en',
  translations: {
    zz: {
      acceptAll: 'OK',
      declineAll: 'Decline',
      acceptSelected: 'Accept selected',
      purposes: { analytics: 'Analytics', marketing: 'Marketing' },
    },
    en: {
      consentNotice: {
        description: 'We use a few cookies to keep things running smoothly and learn what you enjoy. You can choose what to allow at any time.',
      },
      acceptAll: 'That\'s ok',
      declineAll: 'I decline',
      acceptSelected: 'Accept selected',
      purposes: { analytics: 'Analytics', marketing: 'Marketing' },
    },
    de: {
      consentNotice: {
        description: 'Wir verwenden ein paar Cookies, damit alles reibungslos läuft und wir lernen, was dir gefällt. Du kannst jederzeit wählen, was du zulässt.',
      },
      acceptAll: 'Passt',
      declineAll: 'Ablehnen',
      acceptSelected: 'Auswahl akzeptieren',
      purposes: { analytics: 'Analyse', marketing: 'Marketing' },
    },
    fr: {
      consentNotice: {
        description: 'Nous utilisons quelques cookies pour que tout fonctionne bien et pour comprendre ce que vous aimez. Vous pouvez choisir ce que vous autorisez à tout moment.',
      },
      acceptAll: 'D\'accord',
      declineAll: 'Je refuse',
      acceptSelected: 'Accepter la sélection',
      purposes: { analytics: 'Analyse', marketing: 'Marketing' },
    },
    sv: {
      consentNotice: {
        description: 'Vi använder några cookies för att allt ska fungera smidigt och för att lära oss vad du gillar. Du kan när som helst välja vad du tillåter.',
      },
      acceptAll: 'Det är okej',
      declineAll: 'Jag avböjer',
      acceptSelected: 'Acceptera valda',
      purposes: { analytics: 'Analys', marketing: 'Marknadsföring' },
    },
    da: {
      consentNotice: {
        description: 'Vi bruger nogle få cookies for at holde tingene kørende og lære, hvad du kan lide. Du kan til enhver tid vælge, hvad du vil tillade.',
      },
      acceptAll: 'Det er ok',
      declineAll: 'Nej tak',
      acceptSelected: 'Accepter valgte',
      purposes: { analytics: 'Analyse', marketing: 'Markedsføring' },
    },
  },
  services: [
    {
      name: 'google-tag-manager',
      title: 'Google Tag Manager',
      purposes: ['analytics', 'marketing'],
      onAccept: function() {
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('consent', 'update', { ad_storage: 'granted', ad_personalization: 'granted', ad_user_data: 'granted', analytics_storage: 'granted', functionality_storage: 'granted', personalization_storage: 'granted' });
      },
      onDecline: function() {
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('consent', 'update', { ad_storage: 'denied', ad_personalization: 'denied', ad_user_data: 'denied', analytics_storage: 'denied', functionality_storage: 'denied', personalization_storage: 'denied' });
      },
    },
  ],
};
