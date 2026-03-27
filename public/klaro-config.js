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
  lang: 'en',
  translations: {
    en: {
      consentNotice: {
        description: 'We use cookies to measure performance and improve your experience.',
      },
      acceptAll: "That's ok",
      declineAll: 'Decline',
      acceptSelected: 'Accept selected',
      purposes: {
        analytics: 'Analytics',
        marketing: 'Marketing',
      },
    },
  },
  services: [
    {
      name: 'google-tag-manager',
      title: 'Google Tag Manager',
      purposes: ['analytics', 'marketing'],
    },
  ],
};
