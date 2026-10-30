// Hidden context sent with every waitlist signup: the page the form sits on,
// the session's landing page and referrer (captured in BaseLayout's
// attimo-visit-source script) and the page language. /api/notify stores it on
// the Brevo contact (SIGNUP_PAGE, LANDING_PAGE, REFERRER, LOCALE); nothing is
// shown to the visitor.

export interface SignupContext {
  page: string;
  landing: string;
  referrer: string;
  locale: string;
}

export function signupContext(): SignupContext {
  let visit: { ref?: string; landing?: string } = {};
  try {
    visit = JSON.parse(sessionStorage.getItem("attimo_visit") || "{}");
  } catch {
    /* storage blocked: fields stay empty */
  }
  return {
    page: location.pathname,
    landing: visit.landing ?? "",
    referrer: visit.ref ?? "",
    locale: document.documentElement.lang || "",
  };
}

// GA4 `waitlist_signup` event, fired once a signup has reached Brevo. Sent as a
// gtag event (picked up by the Google tag GTM loads) and as a dataLayer event
// for any GTM trigger.
export function trackWaitlistSignup(list: string, ctx: SignupContext): void {
  const w = window as unknown as { dataLayer?: unknown[]; gtag?: (...args: unknown[]) => void };
  const params = {
    list,
    signup_page: ctx.page,
    landing_page: ctx.landing,
    visit_source: ctx.referrer,
    page_language: ctx.locale,
  };
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({ event: "waitlist_signup", ...params });
  w.gtag?.("event", "waitlist_signup", params);
}
