// The season-2 look: every oil has a faded field (a pale wash of its label
// colour) and a dark ink taken from the label. The two carry every coloured
// surface that belongs to that oil: its panel in the homepage harvest section
// and, where a product page opts in below, that whole page. Cream stays the
// page background.
//
// A product page adds a third colour, the accent: the label's vivid print
// colour. It is the text on every ink surface (so dark never pairs with
// white, which reads black-and-white on the darkest labels) and the fill of
// the page's buttons.
import coratinaCutout from "@/assets/bottle-2627-coratina.png?url";

export interface OilColours { field: string; ink: string }

export const OIL_COLOURS: Record<"coratina" | "peranzana" | "picual", OilColours> = {
  coratina: { field: "#BBC3B0", ink: "#10221B" },
  peranzana: { field: "#DACAC0", ink: "#5C2C3C" },
  picual: { field: "#D1E4B1", ink: "#1B4229" },
};

export interface ProductLook extends OilColours {
  /** The label's vivid print colour: text on ink, fill of the buttons. */
  accent: string;
  /** Bottle cut-out shown on the field in place of the hero photo. */
  cutout: string;
}

// Product pages in the season-2 look, by URL handle. A page not listed here
// keeps the original look.
export const PRODUCT_LOOKS: Record<string, ProductLook> = {
  coratina: { ...OIL_COLOURS.coratina, accent: "#B3E58C", cutout: coratinaCutout },
};
