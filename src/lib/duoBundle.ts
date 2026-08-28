import type { ShopifyProduct } from "@/lib/shopify";
import { DEFAULT_LOCALE, type Locale } from "@/lib/i18n/config";
import type { BundleConfig } from "@/lib/bundleTypes";
import { TRIO_CONTENTS } from "@/lib/trioBundle";

// The Duo (Coratina + Nocellara) is a SEPARATE Shopify product, same pattern as
// the trio / 3L box (hardcoded ids; DRAFT until published to Storefront).
//
// BEFORE PUBLISHING: set fixed price-list overrides on the duo product for
// Denmark (330 DKK) and Sweden (500 SEK) so checkout matches the hardcoded
// per-locale prices in i18n/config.ts, or Shopify FX will drift them apart.
// Native Shopify bundle (components: Coratina + Nocellara). Inventory derives
// from the scarcest component; buying it decrements each single.
export const DUO_PRODUCT_ID = "gid://shopify/Product/15859718127999";
export const DUO_VARIANT_ID = "gid://shopify/ProductVariant/58273031389567";
export const DUO_HANDLE = "attimo-coratina-nocellara-duo";

// Real styled duo shot (Coratina + Nocellara).
export const DUO_IMAGE = "/duo-collection.webp";

// Reuse the single source of oil data; the duo is Coratina + Nocellara.
export const DUO_CONTENTS = TRIO_CONTENTS.filter(
  (c) => c.handle === "coratina" || c.handle === "nocellara",
);

export function duoSinglesTotal(locale: Locale = DEFAULT_LOCALE): number {
  return locale.prices.coratina + locale.prices.nocellara;
}

export function buildDuoProduct(
  locale: Locale = DEFAULT_LOCALE,
  title = "ATTIMO Coratina + Nocellara Duo",
  imageUrl: string = DUO_IMAGE,
): ShopifyProduct {
  const price = {
    amount: String(locale.prices.duo ?? 42),
    currencyCode: locale.currency.code,
  };
  return {
    node: {
      id: DUO_PRODUCT_ID,
      title,
      description: "",
      handle: DUO_HANDLE,
      productType: "Bundle",
      tags: ["duo", "bundle"],
      priceRange: { minVariantPrice: price },
      images: { edges: [{ node: { url: imageUrl, altText: title } }] },
      variants: {
        edges: [
          {
            node: {
              id: DUO_VARIANT_ID,
              title: "Duo",
              price,
              availableForSale: true,
              selectedOptions: [],
              image: null,
            },
          },
        ],
      },
      options: [{ name: "Title", values: ["Duo"] }],
    },
  };
}

export const DUO_CONFIG: BundleConfig = {
  contents: DUO_CONTENTS,
  image: DUO_IMAGE,
  variantId: DUO_VARIANT_ID,
  variantTitle: "Duo",
  buildProduct: buildDuoProduct,
  singlesTotal: duoSinglesTotal,
  priceKey: "duo",
  badge: "2 × 500 ml",
  ogName: "Coratina + Nocellara Duo",
  contentId: "duo",
  ymalHandle: "duo",
  polyphenolDisplay: "400–847 mg/kg",
  framing: {
    en: {
      title: "Early Harvest '25 Italian Duo",
      cardTitleLines: ["Early Harvest '25", "Italian Duo"],
      subtitle: "Puglia meets Sicily",
      description:
        "The Italian pair from our '25 harvest season. Two single varieties with opposite characters: bold and gentle.",
      originHeadline:
        "Two single varieties from one early harvest, pressed cold, lab-tested and never blended. The same standard in every bottle.",
      singleVarietyText:
        "Two cultivars, two bottles, never a blend. Each oil is 100% one variety, pressed on its own.",
      whatsInside:
        "Two 500ml bottles: Coratina d'Italia and Nocellara d'Italia. A litre of oil in all, both from the same early harvest.",
      bestUses:
        "Coratina for finishing and the morning spoon, Nocellara for the everyday table. Two oils covering both ends of the range.",
      toastName: "Added the Coratina + Nocellara Duo to your cart",
      imageAlt: "ATTIMO Coratina and Nocellara single-variety olive oils",
    },
    // Danish — for Gilles's review. Tagline (subtitle) especially: shape freely.
    da: {
      title: "Tidlig høst '25 – Italiensk duo",
      cardTitleLines: ["Tidlig høst '25", "Italiensk duo"],
      subtitle: "Puglia møder Sicilien",
      description:
        "Det italienske par fra vores '25-høst. To enkeltsorter med modsatte karakterer: kraftig og mild.",
      originHeadline:
        "To enkeltsorter fra én tidlig høst, koldpresset, labtestet og aldrig blandet. Samme standard i hver flaske.",
      singleVarietyText:
        "To sorter, to flasker, aldrig en blanding. Hver olie er 100 % én sort, presset for sig.",
      whatsInside:
        "To 500 ml-flasker: Coratina d'Italia og Nocellara d'Italia. En liter olie i alt, begge fra samme tidlige høst.",
      bestUses:
        "Coratina til det sidste pift og morgenskeen, Nocellara til det daglige bord. To olier, der dækker begge ender af skalaen.",
      toastName: "Coratina + Nocellara-duoen er lagt i kurven",
      imageAlt: "ATTIMO Coratina og Nocellara enkeltsorts-olivenolier",
    },
    de: {
      title: "Frühe Ernte '25 Italienisches Duo",
      cardTitleLines: ["Frühe Ernte '25", "Italienisches Duo"],
      subtitle: "Apulien trifft Sizilien",
      description:
        "Das italienische Paar unserer '25er-Ernte. Zwei sortenreine Öle mit gegensätzlichem Charakter: kräftig und mild.",
      originHeadline:
        "Zwei sortenreine Öle aus einer frühen Ernte, kaltgepresst, laborgeprüft und niemals verschnitten. Der gleiche Standard in jeder Flasche.",
      singleVarietyText:
        "Zwei Sorten, zwei Flaschen, niemals ein Verschnitt. Jedes Öl ist 100 % eine Sorte, für sich gepresst.",
      whatsInside:
        "Zwei 500-ml-Flaschen: Coratina d'Italia und Nocellara d'Italia. Ein Liter Öl insgesamt, beide aus derselben frühen Ernte.",
      bestUses:
        "Coratina zum Verfeinern und für den Morgenlöffel, Nocellara für den täglichen Tisch. Zwei Öle, die beide Enden der Bandbreite abdecken.",
      toastName: "Coratina + Nocellara Duo in den Warenkorb gelegt",
      imageAlt: "Sortenreine ATTIMO-Olivenöle Coratina und Nocellara",
    },
    fr: {
      title: "Récolte précoce '25 Duo italien",
      cardTitleLines: ["Récolte précoce '25", "Duo italien"],
      subtitle: "Les Pouilles rencontrent la Sicile",
      description:
        "Le duo italien de notre récolte '25. Deux mono-variétés aux caractères opposés : puissante et douce.",
      originHeadline:
        "Deux mono-variétés d'une même récolte précoce, pressées à froid, testées en laboratoire et jamais assemblées. La même exigence dans chaque bouteille.",
      singleVarietyText:
        "Deux variétés, deux bouteilles, jamais d'assemblage. Chaque huile est 100 % mono-variété, pressée à part.",
      whatsInside:
        "Deux bouteilles de 500 ml : Coratina d'Italia et Nocellara d'Italia. Un litre d'huile en tout, toutes deux de la même récolte précoce.",
      bestUses:
        "La Coratina pour la finition et la cuillère du matin, la Nocellara pour la table de tous les jours. Deux huiles qui couvrent les deux extrêmes de la gamme.",
      toastName: "Duo Coratina + Nocellara ajouté au panier",
      imageAlt: "Huiles d'olive mono-variétés ATTIMO Coratina et Nocellara",
    },
    nl: {
      title: "Vroege oogst '25 Italiaanse duo",
      cardTitleLines: ["Vroege oogst '25", "Italiaanse duo"],
      subtitle: "Puglia ontmoet Sicilië",
      description:
        "Het Italiaanse paar uit onze '25-oogst. Twee enkelvoudige variëteiten met tegengestelde karakters: krachtig en zacht.",
      originHeadline:
        "Twee enkele variëteiten uit één vroege oogst, koudgeperst, labgetest en nooit gemengd. Dezelfde standaard in elke fles.",
      singleVarietyText:
        "Twee variëteiten, twee flessen, nooit een melange. Elke olie is 100% één variëteit, apart geperst.",
      whatsInside:
        "Twee flessen van 500 ml: Coratina d'Italia en Nocellara d'Italia. Eén liter olie in totaal, beide uit dezelfde vroege oogst.",
      bestUses:
        "Coratina om af te maken en voor de ochtendlepel, Nocellara voor de dagelijkse tafel. Twee oliën die beide uiteinden van het spectrum dekken.",
      toastName: "Coratina + Nocellara duo toegevoegd aan je winkelmandje",
      imageAlt: "Enkelvoudige ATTIMO-olijfoliën Coratina en Nocellara",
    },
    sv: {
      title: "Tidig skörd '25 Italiensk duo",
      cardTitleLines: ["Tidig skörd '25", "Italiensk duo"],
      subtitle: "Puglia möter Sicilien",
      description:
        "Det italienska paret från vår '25-skörd. Två ensorter med motsatta karaktärer: kraftig och mild.",
      originHeadline:
        "Två ensorter från en tidig skörd, kallpressade, labbtestade och aldrig blandade. Samma standard i varje flaska.",
      singleVarietyText:
        "Två sorter, två flaskor, aldrig en blandning. Varje olja är 100 % en sort, pressad för sig.",
      whatsInside:
        "Två flaskor på 500 ml: Coratina d'Italia och Nocellara d'Italia. En liter olja totalt, båda från samma tidiga skörd.",
      bestUses:
        "Coratina för finish och morgonskeden, Nocellara för det dagliga bordet. Två oljor som täcker båda ändarna av skalan.",
      toastName: "Coratina + Nocellara-duon tillagd i varukorgen",
      imageAlt: "Ensorts ATTIMO-olivoljor Coratina och Nocellara",
    },
  },
};
