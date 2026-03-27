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
        description: 'We use cookies and similar tracking technologies to analyse site traffic and measure the performance of our marketing campaigns. By clicking "That\'s ok" you consent to the use of these technologies. You can withdraw your consent at any time by clicking "Let me choose".',
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
