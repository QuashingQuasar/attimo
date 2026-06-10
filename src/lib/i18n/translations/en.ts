// ─────────────────────────────────────────────────────────────────────────
// English dictionary — the CANONICAL base. These strings are copied verbatim
// from the components they replaced, so /, /dk/ and /se/ (all lang: "en")
// render byte-for-byte what they did before the i18n extraction.
//
// `Dict` (see ../dictionaries.ts) is derived from THIS object, so en.ts is the
// shape source of truth. The French overlay (fr.ts) must implement the same
// shape — missing keys are a compile error, which guarantees completeness.
//
// Factual claims and numbers live in component/product data, NOT here. This
// file is language only.
// ─────────────────────────────────────────────────────────────────────────

export const en = {
  nav: {
    shop: "Shop",
    blog: "Blog",
    quiz: "Quiz",
  },

  // Geo-targeted shipping announcement bar (BaseLayout). Shown by tier.
  announce: {
    freeShipping2: "FREE SHIPPING ON 2+ BOTTLES",
    freeShipping3: "FREE SHIPPING ON 3+ BOTTLES",
  },

  // <title> / meta description per page (server-rendered in BaseLayout).
  meta: {
    home: {
      title: "ATTIMO Single-Variety, High-Polyphenol, Early Harvest Olive Oil", // REVIEW
      description:
        "Single-variety, high-polyphenol olive oil. Early harvest, lab-tested for quality. From small family groves to your table. Shop now.", // REVIEW
    },
    shipping: {
      title: "Shipping & Delivery | ATTIMO", // REVIEW
      description:
        "Shipping rates, free-shipping thresholds and delivery times for ATTIMO olive oil across the European Union.", // REVIEW
    },
    quiz: {
      title: "Olive Oil Palate Quiz | ATTIMO", // REVIEW
      description:
        "Find your perfect ATTIMO olive oil. Take the 60-second palate quiz to match your taste with the right single-variety extra virgin olive oil.", // REVIEW
    },
  },

  footer: {
    blog: "Blog",
    ambassadors: "Ambassadors",
    privacy: "Privacy Policy",
    terms: "Terms of Service",
    shipping: "Shipping",
    contact: "Contact",
    manageOrders: "Manage Orders & Subscription",
    rights: "© 2026 ATTIMO. All rights reserved.",
    changeRegion: "Change currency or country",
  },

  // Cart drawer (CartDrawer.tsx). Pluralized strings are functions so each
  // language applies its own plural rule. Product line titles come from
  // Shopify (already localized via @inContext) — not here.
  cart: {
    ariaLabel: "Shopping cart",
    title: "Shopping Cart",
    emptyDescription: "Your shopping cart is currently empty.",
    itemsInCart: (n: number) => `${n} item${n !== 1 ? "s" : ""} in your cart`,
    emptyHeading:
      "Looks like you haven't added anything yet. Let's get you started.", // REVIEW
    freeShipping: "Free shipping ✓",
    freeShippingNudge: (n: number) =>
      `Add ${n} more bottle${n > 1 ? "s" : ""} for free shipping`, // REVIEW
    youMightAlsoLike: "You might also like",
    add: "+ Add",
    viewProduct: (name: string) => `View ${name}`,
    subtotal: "Subtotal",
    shipping: "Shipping",
    free: "Free",
    calculatedAtCheckout: "Calculated at checkout",
    creatingCheckout: "Creating Checkout...",
    checkout: "Checkout with Shopify",
  },

  // Palate quiz UI chrome (PalateQuiz.tsx). The questions/options/result
  // summaries themselves are content and live in quizData / quizData.fr.
  quiz: {
    intro:
      "Answer a few quick questions to find out which of our three single-variety oils matches you best.", // REVIEW
    backToAttimo: "← Back to ATTIMO",
    resultsLabel: "Results",
    back: "Back",
    next: "Next",
    seeResults: "See Results",
    yourMatchIs: "Your match is",
    why: (name: string) => `Why ${name}?`,
    shop: (name: string) => `Shop ${name}`,
    retake: "Retake Quiz",
  },

  // Shared per-variety flavour descriptors + one-liners. Reused by the Header
  // shop menu, homepage product cards, and product pages so they translate
  // once. Proper names ("Coratina d'Italia") and origins are NOT here — they
  // stay verbatim everywhere.
  products: {
    flavour: {
      coratina: "Bold & Punchy", // REVIEW
      picual: "Green & Grassy", // REVIEW
      nocellara: "Gentle & Fruity", // REVIEW
    },
    tagline: {
      coratina: "A hit of healthy polyphenols", // REVIEW
      picual: "All-round goodness", // REVIEW
      nocellara: "Effortlessly likeable", // REVIEW
    },
  },

  hero: {
    cta: "Shop New Harvest", // REVIEW
    // Rotating ticker badges along the bottom of the hero.
    badges: [
      "LAB-TESTED", // REVIEW
      "EARLY HARVEST", // REVIEW
      "SINGLE VARIETY", // REVIEW
      "FROM GROVE TO TABLE", // REVIEW
      "ALWAYS FRESH", // REVIEW
      "COLD-PRESSED", // REVIEW
    ],
  },

  oilCollection: {
    heading: "Specialty Extra Virgin Olive Oil", // REVIEW
    subtitle:
      "Single-variety olives harvested early and cold-pressed within hours for maximum flavour and health benefits.", // REVIEW
    size: "500ML",
    backSoon: "Back Soon",
    soldOut: "Temporarily Sold Out",
    quizPrompt: "Not sure which olive oil is for you?",
    quizCta: "Find Your Flavour →",
  },

  industryProblem: {
    // "The <i>extra virgin lie</i>" — `pre` is non-italic, `lie` is italic.
    headingPre: "The", // REVIEW
    headingLie: '"extra virgin" lie', // REVIEW
    intro:
      'Extra virgin olive oil is praised for health and longevity benefits, but 80% of EVOOs in supermarkets don\'t even meet basic standards and are actually low in the polyphenols that give it these benefits, plus flavour.', // REVIEW
    stat1Value: "~80%",
    stat1Text:
      'olive oils sold as "extra virgin" in supermarkets don\'t meet those standards', // REVIEW
    stat2Value: "~90%",
    stat2Text:
      '"extra virgin" olive oils are low in health-boosting polyphenols', // REVIEW
    arg1Title: "Flavour and health get blended away", // REVIEW
    arg1Text:
      "Big producers scale by mixing oils from multiple sources and years into a standardized taste. This practice kills what makes real olive oil special: fresh distinct flavour and polyphenols that make it super healthy.", // REVIEW
    arg2Title: "You've never tasted the real thing", // REVIEW
    arg2Text:
      "True extra virgin is intense: bitter, peppery, fragrant. Each oil has a fingerprint: olive variety, grove, harvest, craft. These are also the healthiest oils, but most people never get to taste them.", // REVIEW
    arg3Title: "Big oil kills family groves", // REVIEW
    arg3Text:
      "Financial stress forces small producers to sell to industrial players. Their sublime oil sold gets blended into cheap stuff and sold for pennies. Making olive oil is an art much like wine, but when the artists don't get paid, the art disappears.", // REVIEW
  },

  kleiaWay: {
    // "How We Make Sure<br/><i>You Get The Good Stuff</i>"
    headingLine1: "How We Make Sure", // REVIEW
    headingLine2: "You Get The Good Stuff", // REVIEW
    tiles: [
      {
        title: "ALWAYS FRESH", // REVIEW
        text: "Olive oil always from the latest harvest. Pressed within hours after picking, bottled at peak freshness.", // REVIEW
      },
      {
        title: "SINGLE VARIETY", // REVIEW
        text: "Each bottle is from a single olive variety. You get the pure expression of the cultivar and its origin.", // REVIEW
      },
      {
        title: "EARLY HARVEST", // REVIEW
        text: "Olives are harvested early in season when they are highest in polyphenols that give taste and health", // REVIEW
      },
      {
        title: "FROM GROVE TO TABLE", // REVIEW
        text: "We source directly from the people who make the oil. No middlemen, no blending, no shortcuts.", // REVIEW
      },
      {
        title: "LAB-TESTED QUALITY", // REVIEW
        text: "Every bottle is lab-tested by third parties on key quality markers you can verify for yourself.", // REVIEW
      },
    ],
  },

  oilComparison: {
    vs: "vs",
    others: "Others", // REVIEW
    supermarketColumn: "Supermarket EVOO", // REVIEW
    // Feature row labels (left column).
    features: {
      fresh: "FRESH", // REVIEW
      earlyHarvest: "EARLY HARVEST", // REVIEW
      singleSource: "SINGLE SOURCE", // REVIEW
      traceable: "TRACEABLE", // REVIEW
      labTested: "LAB-TESTED", // REVIEW
      polyphenols: "POLYPHENOLS", // REVIEW
    },
    // "Them" (supermarket) cell copy. Numbers stay identical to English.
    themFreshNo: "No, mixed with old oils", // REVIEW
    themBlended: "Oil blended from 3+ countries", // REVIEW
  },

  polyphenol: {
    heading: "the polyphenol difference", // REVIEW
    intro:
      "Polyphenols make all the difference for olive oil health benefits and flavour. ATTIMO oils are pressed from olives that are harvested early, when polyphenols are at maximum levels.", // REVIEW
    // Bar labels (numbers live in component data, not here).
    barAvg: "Avg. Supermarket EVOO", // REVIEW
    barEu: "EU Health Claim", // REVIEW
    barBlueprint: "Blueprint Olive Oil",
    tooltips: {
      avgTitle: "Average Extra Virgin", // REVIEW
      avgSub: "~180 mg/kg polyphenols",
      avgDesc:
        "Most supermarket EVOOs test between 100–250 mg/kg. Blending, age, and industrial processing all reduce polyphenol content.", // REVIEW
      euTitle: "EU Health Claim", // REVIEW
      euSub: "250 mg/kg polyphenols",
      euDesc:
        "The European Food Safety Authority (EFSA) allows a health claim for olive oil that contains at least 250 mg/kg of polyphenols.", // REVIEW
      blueprintTitle: "Blueprint Olive Oil",
      blueprintSub: "400 mg/kg polyphenols",
      blueprintDesc:
        "Bryan Johnson spends millions optimizing his health for longevity. His Blueprint olive oil, at 400 mg/kg polyphenols, is one of the most recognized high-polyphenol oils on the market.", // REVIEW
      attimoTitle: "ATTIMO Olive Oil",
      attimoSub: "400–900 mg/kg polyphenols",
      attimoDesc:
        "Our olive oils range between 400 and 900 mg/kg polyphenols depending on the variety.", // REVIEW
    },
    // Three educational cards ("tweets"). Name/handle/avatar stay verbatim.
    cards: [
      {
        content: "Polyphenols are a type of antioxidant found in olives.", // REVIEW
        content2:
          "They strengthen the body's defenses against cell aging and contribute to long-term metabolic and heart health.", // REVIEW
      },
      {
        content:
          "The highest polyphenol counts come from early-harvest olives, picked and pressed within hours.", // REVIEW
        content2: "Once bottled, levels steadily decline over time.", // REVIEW
      },
      {
        content:
          "Commercial oils combine batches from across countries and years to maintain supply.", // REVIEW
        content2:
          "This process dilutes the polyphenol content far below fresh-pressed levels.", // REVIEW
      },
    ],
  },

  testimonials: {
    heading: "Word from the street", // REVIEW
    // Review title + body per testimonial (names/cities/dates stay verbatim,
    // matched by index to the hardcoded list in Testimonials.tsx).
    reviews: [
      { title: "Good on everything!", text: "I used to just cook with olive oil. Now I'm putting it on everything. Didn't know it could have so much taste." }, // REVIEW
      { title: "Like living in Spain again", text: "Living in Spain for some time, I got used to having amazing olive oil around. It's hard in Germany to find good ones; Attimo brought back some wonderful memories." }, // REVIEW
      { title: "Finally", text: "I always bring back tons of olive oil from vacation, but it runs out fast. Very happy to have finally found real olive oil at home." }, // REVIEW
      { title: "Super fresh", text: "I tried a lot of olive oils and this one is my favourite. The smell is absolutely unreal, so fresh it's like the olives are being pressed right then and there." }, // REVIEW
      { title: "I got hooked fast", text: "I bought 4 bottles and they were gone in a month. Never buying in the supermarket again." }, // REVIEW
      { title: "You can taste the quality", text: "I was skeptical about the price but now I get it. You can really taste the difference in quality, there's nothing like this in the local shops here." }, // REVIEW
      { title: "Fresh harvest in a bottle", text: "It tastes like I just picked the olives and pressed them myself. Super fresh and natural, I love it!" }, // REVIEW
    ],
  },

  blog: {
    heading: "The Olive Press", // REVIEW
    seeMore: "See more posts",
    noArticles: "No articles found yet.",
    noImage: "No image",
    readMore: "Read more",
    newsletterPrompt: "Get ATTIMO stories, insights and updates in your inbox", // REVIEW
    emailPlaceholder: "your@email.com",
    subscribe: "Subscribe",
    invalidEmail: "Please enter a valid email address.",
    subscribed: "You're on the list!",
    error: "Something went wrong. Please try again.",
  },

  // Product detail page UI chrome (the persuasion copy itself lives in
  // productContent.ts / productContent.fr.ts and flows in via getProductContent).
  product: {
    loading: "Loading product...",
    notFound: "Product not found",
    newHarvest: "New Harvest", // REVIEW
    inStock: "In Stock",
    soldOut: "Sold Out",
    comingSoon: "Coming Soon",
    backSoon: "Back Soon",
    newBatchHeading: "New Batch on the Way", // REVIEW
    newBatchSubtitle:
      "We'll send you an email when Coratina d'Italia is available again (estimated 1–2 weeks).", // REVIEW
    attrVariety: "Variety",
    attrOrigin: "Origin",
    attrHarvest: "Harvest",
    attrFlavour: "Flavour",
    harvestDate: "October 2025",
    addToCart: "ADD TO CART", // REVIEW
    freeShipCheck: "(FREE SHIPPING ✓)",
    // Placeholders: {n} count, {more} optional "more" token, {plural} S/empty.
    addForFreeShip: "(ADD {n} {more}BOTTLE{plural} FOR FREE SHIPPING)",
    moreWord: "MORE ",
    trustLab: "Third party lab-tested quality", // REVIEW
    shipsTomorrow: "Order today, ships tomorrow", // REVIEW
    viewLabResults: "View lab results",
    howToReadLabValues: "How to read olive oil lab values",
    waitingResults: "(Waiting for results)",
    polyTooltipAria: "What does Bioactive Polyphenols mean?",
    // Placeholders: {value} {unit}
    polyTooltipText:
      'Not all polyphenols are equal. Our {value} {unit} is measured using the EU-standard HPLC method at an ISO-accredited lab. Many producers report "total polyphenols" using broader methods that include compounds with less documented health activity, producing higher-sounding numbers that aren\'t directly comparable.', // REVIEW
    // Placeholders: {n} {plural}
    toastAdded: "Added {n} bottle{plural} to cart",
    titleSuffix: "Specialty Extra Virgin Olive Oil",
  },

  faq: {
    heading: "Frequently Asked Questions",
    // Per-variety answers + generic fallback (used when no product handle).
    origin: {
      coratina: "ATTIMO Coratina is directly sourced from a small family grove in Puglia, Italy — the country's largest olive oil producing region, known for its centuries-old trees and exceptional quality.", // REVIEW
      nocellara: "ATTIMO Nocellara is directly sourced from a small family grove in the Belice Valley, Sicily — a region renowned for its mineral-rich soils and ideal Mediterranean growing conditions.", // REVIEW
      picual: "ATTIMO Picual is directly sourced from a small family grove in Jaén, Spain — the world's largest olive oil producing region, where Picual has been cultivated for centuries.", // REVIEW
      generic: "ATTIMO sources from small, family-owned groves in Mediterranean regions known for exceptional olive oil. Each bottle comes from a single grove and is never blended, so you can trace exactly where your oil was produced.", // REVIEW
    },
    flavour: {
      coratina: "Coratina is one of the most intensely flavoured olive varieties. Expect bold notes of fresh herbs, artichoke and black pepper, with an ultra-high polyphenol kick and a dry, lingering finish. It's the olive oil aficionados take by the spoon.", // REVIEW
      nocellara: "Nocellara produces a gentle, fruity oil with notes of fresh tomato, almond, and green apple. It's smooth and approachable with a mild peppery finish — perfect for those who prefer a softer flavour profile.", // REVIEW
      picual: "Picual delivers a robust, grassy oil with notes of fresh-cut herbs, fig leaf, and a clean peppery finish. It's a versatile all-rounder, packed with polyphenols and perfect for everyday use.", // REVIEW
      generic: "That bitterness and peppery kick come from polyphenols; the compounds that make olive oil healthy. Most people are used to bland, over-processed oils. Real extra virgin should have character: it's intense, fresh, and complex.", // REVIEW
    },
    use: {
      coratina: "Coratina is best used as a finishing oil to get the most from its bold flavour and health benefits. Drizzle it over steak, grilled vegetables, hearty soups, bruschetta, or even ice cream. It's best enjoyed raw or added after cooking, as high heat can break down the polyphenols.", // REVIEW
      nocellara: "Nocellara is a versatile everyday oil. Drizzle it over salads, fish, pasta, and fresh bread. Its gentle character makes it great for lighter dishes where you want flavour without overpowering the food. Best enjoyed raw or added after cooking.", // REVIEW
      picual: "Picual is a brilliant all-rounder. Use it to finish roasted vegetables, drizzle over hummus, dress grains and legumes, or dip with crusty bread. Its robust character holds up well, but it's best enjoyed raw or added after cooking to preserve the polyphenols.", // REVIEW
      generic: "Use ATTIMO as a finishing oil to get the most from its flavour and health benefits. Drizzle it over salads, cooked vegetables, pasta, bread, or grilled meats. It's best enjoyed raw or added after cooking, as high heat can break down the polyphenols that make it special.", // REVIEW
    },
    q: {
      different: "What makes ATTIMO olive oil different?",
      origin: "Where does this olive oil come from?",
      tasteTemplate: "What does ATTIMO {variety} taste like?", // {variety} is a proper name, kept verbatim
      tasteNoHandle: "What does it taste like?",
      polyphenols: "What are polyphenols and why do they matter?",
      fresh: "How fresh is the olive oil?",
      lab: "Can I see the lab results?",
      use: "How should I use this olive oil?",
      store: "How should I store my olive oil?",
      cancel: "Can I change or cancel my order?",
      organic: "Is your olive oil organic?",
      wholesale: "Do you sell wholesale or to restaurants?",
      shipping: "Where do you ship and how much does it cost?",
    },
    a: {
      different: "ATTIMO sources directly from single groves, ensuring every bottle comes from the latest harvest with no blending or middlemen. Each bottle is lab-tested for quality markers like polyphenol content, giving you the real, health-boosting extra virgin olive oil most people have never tasted.", // REVIEW
      fresh: "Every bottle is from the latest harvest and bottled quickly to preserve freshness. Unlike mass-produced oils that can sit for months or years, ATTIMO delivers oil within months of harvest. This ensures you get maximum flavour and health benefits.", // REVIEW
      store: "Keep it in a cool, dark place away from heat and light. Once opened, use it within a few months for optimal freshness. The compounds that make it healthy break down over time, so fresher is always better.", // REVIEW
      organic: "Our Coratina is certified organic. For our other oils, organic certification isn't the primary lens we use — we care deeply about how olives are grown and processed, prioritising low-intervention farming, early harvest, and quality above all. Certified or not, we hold every oil to the same high standards.", // REVIEW
      // Q: polyphenols — text, then a link, then a literal period.
      polyphenolsText: "Polyphenols are natural compounds in olive oil that provide the health benefits you've heard about—anti-inflammatory properties, heart health support, and antioxidant protection. Most store-bought oils have low polyphenol levels due to processing and blending. ATTIMO oils are high in polyphenols because they're fresh, unblended, and from quality sources.", // REVIEW
      polyphenolsLink: "Learn more about polyphenols",
      // Q: lab — generic version (no product handle).
      labGeneric: "Absolutely. Every batch of ATTIMO oil is independently lab tested by a third party, and the full results are available on each product page. We test for polyphenol content, acidity, peroxide values and more. We believe in complete transparency — you should always be able to verify the quality of what you're putting on your plate.", // REVIEW
      // Q: lab — product version: text, then link "<labLinkPrefix><variety>".
      labText: "Yes. Every batch is third-party lab tested, and you can verify the quality markers yourself. We believe in complete transparency — you should know exactly what you're getting.", // REVIEW
      labLinkPrefix: "View lab results for ",
      // Q: use — answer (from use.*), then this link, then a period.
      useLink: "Read more about cooking with olive oil",
      // Q: cancel — text, then the email (literal), then more text.
      cancelPre: "Orders can be changed or cancelled before they are fulfilled. Once your order has shipped, we're unable to make changes. To request a change or cancellation, contact us as soon as possible at ", // REVIEW
      cancelPost: ". Once your order ships you'll receive a tracking link by email so you can follow your delivery.", // REVIEW
      // Q: wholesale — pre, contact-form link, mid, email (literal), post.
      wholesalePre: "Yes — we work with restaurants, delis, specialty food shops, hotels, and other businesses, whether you're looking to serve it at the table, use it in the kitchen, or stock it on your shelves. Reach out via our ", // REVIEW
      wholesaleContactLink: "contact form",
      wholesaleMid: " or write directly to ",
      wholesalePost: " and we'll take it from there.", // REVIEW
      // Q: shipping — text (numbers stay), then link, then a period.
      shippingText: "We ship across the European Union, from Belgium and the Netherlands to Finland and Portugal. Shipping starts at €7 for core countries and goes up to €22 for more remote destinations — but most orders qualify for free shipping when you order 2–4 bottles depending on your location. Orders placed today ship tomorrow, and delivery takes 2–7 business days depending on where you are.", // REVIEW
      shippingLink: "View full shipping details",
    },
  },

  // Product info accordion (ProductInfoTabs). Tab bodies (flavour profile,
  // harvest, uses) come from product content; only the triggers + the
  // shipping body live here.
  productTabs: {
    flavourProfile: "Flavour Profile",
    harvestDetails: "Harvest Details",
    bestUses: "Best Uses",
    shippingDelivery: "Shipping & Delivery",
    shippingBody:
      "We ship across Europe. Orders are carefully packed and dispatched the next business day. Delivery typically takes 2–7 business days depending on your location. Most multi-bottle orders qualify for free shipping.", // REVIEW
    shippingLink: "View full shipping rates & delivery times →",
  },

  // PurchaseOptions (one-time vs subscribe).
  purchase: {
    oneTime: "One-time purchase",
    perBottle: " / bottle",
    subscribe: "Subscribe & save",
    deliveryFrequency: "Delivery frequency",
    everyMonth: "Every month",
    every2Months: "Every 2 months",
    every3Months: "Every 3 months",
  },

  // QuantitySelector presets + a11y labels.
  quantity: {
    bottleSingular: "Bottle",
    bottlePlural: "Bottles",
    freeShipping: "Free Shipping",
    // Placeholders: {label} {available}
    onlyInStock: "{label} — only {available} in stock",
    // Placeholders: {label} {pct}
    percentOff: "{label}, {pct}% off",
  },

  // NotifyMeForm (out-of-stock email capture).
  notify: {
    comingSoon: "Coming Soon",
    subtitle: "Get notified when {name} is in stock.", // {name} = product name
    onList: "✓ You're on the list",
    emailWhenStock: "We'll email you when {name} is in stock.",
    placeholder: "Your email address",
    notifyMe: "Notify Me",
    success: "You'll be notified when it's back in stock!",
    error: "Something went wrong. Please try again.",
  },

  moreVarieties: "More Varieties", // REVIEW

  // /shipping page.
  shippingPage: {
    title: "Shipping | ATTIMO Specialty Extra Virgin Olive Oil",
    heading: "Shipping Information",
    intro:
      "We ship across the European Union. The more you order, the less you pay for shipping — or nothing at all.", // REVIEW
    factShipsTomorrow: "Order today, ships tomorrow", // REVIEW
    factFreeMulti: "Free shipping on multi-bottle orders", // REVIEW
    factPacked: "Carefully packed for safe delivery", // REVIEW
    ratesHeading: "Shipping rates & free shipping thresholds",
    standardLabel: "Standard:",
    freeFromLabel: "FREE from",
    estLabel: "Est.",
    autoCalcNote:
      "Shipping costs are automatically calculated at checkout based on your delivery country.", // REVIEW
    processingHeading: "Processing & delivery",
    processingP1:
      "Orders placed before the end of the day are packed and shipped the following business day. You'll receive a tracking link by email as soon as your order leaves our facility.", // REVIEW
    processingP2:
      "Delivery times depend on your location. Most Core countries (Belgium, Germany, Luxembourg, Netherlands) receive their order within 2–3 business days. For other EU destinations, expect 3–7 business days depending on the carrier and destination.", // REVIEW
    returnsHeading: "Returns & damages",
    returnsP1:
      "Because olive oil is a food product, it is exempt from the standard EU 14-day right of withdrawal under the Consumer Rights Directive. We do not accept returns on opened or undamaged products.", // REVIEW
    damagedStrong: "Damaged in transit?",
    damagedPre: " If your order arrives damaged or defective, contact us within 14 days at ",
    damagedPost: " with a photo of the damage. We'll arrange a replacement or full refund — no hassle.", // REVIEW
    contactHeading: "Questions about your order?",
    contactSub: "We're here to help. Reach out anytime.", // REVIEW
    // Free-shipping threshold cell, e.g. "2 bottles". Placeholder {n}.
    freeFromBottles: "{n} bottles",
    tierNames: { core: "Core", tier1: "Tier 1", tier2: "Tier 2", tier3: "Tier 3" },
    delivery: {
      core: "2–3 business days",
      tier1: "3–5 business days",
      tier2: "4–6 business days",
      tier3: "5–7 business days",
    },
    // EU country names shown as chips per tier.
    countries: {
      Belgium: "Belgium", Germany: "Germany", Luxembourg: "Luxembourg", Netherlands: "Netherlands",
      Austria: "Austria", Bulgaria: "Bulgaria", Croatia: "Croatia", Czechia: "Czechia", Denmark: "Denmark",
      France: "France", Hungary: "Hungary", Liechtenstein: "Liechtenstein", Malta: "Malta", Poland: "Poland",
      Slovakia: "Slovakia", Slovenia: "Slovenia", Estonia: "Estonia", Ireland: "Ireland", Italy: "Italy",
      Latvia: "Latvia", Lithuania: "Lithuania", Spain: "Spain", Sweden: "Sweden", Finland: "Finland",
      Greece: "Greece", Portugal: "Portugal", Romania: "Romania",
    },
  },

  // Per-product server-rendered meta + JSON-LD product name ([locale]/product).
  productMeta: {
    coratina: {
      title: "Coratina | High-Polyphenol, Single-Variety, Early Harvest Olive Oil", // REVIEW
      description: "Coratina extra virgin olive oil with 847mg/kg polyphenols — our highest. Organically certified, single-variety, early harvest, cold-pressed. 500ml.", // REVIEW
      productName: "Attimo Coratina Extra Virgin Olive Oil 500ml",
    },
    nocellara: {
      title: "Nocellara | Single-Variety, High-Polyphenol, Early Harvest Olive Oil", // REVIEW
      description: "Nocellara extra virgin olive oil from Sicily. Single-variety, early harvest, cold-pressed. 400mg/kg polyphenols, lab-tested. 500ml.", // REVIEW
      productName: "Attimo Nocellara Extra Virgin Olive Oil 500ml",
    },
    picual: {
      title: "Picual | Single-Variety, High-Polyphenol, Early Harvest Olive Oil", // REVIEW
      description: "Picual extra virgin olive oil from Andalusia. Single-variety, early harvest, cold-pressed. 675mg/kg polyphenols, lab-tested. 500ml.", // REVIEW
      productName: "Attimo Picual Extra Virgin Olive Oil 500ml",
    },
  },

  // Default copy for the product "From grove to bottle" origin-region section
  // (ProductOriginRegion). Only used when a product has no originRegion in
  // productContent — currently Nocellara. EN must match the component's prior
  // hardcoded default verbatim so the English page does not change.
  originRegionFallback: {
    heading: "From grove to bottle", // REVIEW
    body: "ATTIMO Nocellara is directly sourced from a small farm in the Belice valley on Sicily's west coast, where people have been making olive oil since before the Romans.\n\nHere, chalky soil and dry summers stress the olive trees, causing fruits to stay small with concentrated flavour. The coast keeps the nights cool, which slows the accumulation of the more aggressive phenolic compounds. Harvested early, the result is an oil that is high in polyphenols but gentle in character — softer and rounder than anything produced further inland.", // REVIEW
  },
};
