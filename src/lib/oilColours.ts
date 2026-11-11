// The season-2 look: every oil has a faded field (a pale wash of its label
// colour) and a dark ink taken from the label. The two carry every coloured
// surface that belongs to that oil: its panel in the homepage harvest section
// and, where a product page opts in below, that whole page. Cream stays the
// page background and chartreuse stays the one action colour.
import coratinaCutout from "@/assets/bottle-2627-coratina.png?url";

export interface OilColours { field: string; ink: string }

export const OIL_COLOURS: Record<"coratina" | "peranzana" | "picual", OilColours> = {
  coratina: { field: "#BBC3B0", ink: "#10221B" },
  peranzana: { field: "#DACAC0", ink: "#5C2C3C" },
  picual: { field: "#D1E4B1", ink: "#1B4229" },
};

/** The site's action colour (add to cart, notify me). */
export const ACTION_COLOUR = "#CDDB2D";

export interface ProductLook extends OilColours {
  /** Bottle cut-out shown on the field in place of the hero photo. */
  cutout: string;
}

// Product pages in the season-2 look, by URL handle. A page not listed here
// keeps the original look.
export const PRODUCT_LOOKS: Record<string, ProductLook> = {
  coratina: { ...OIL_COLOURS.coratina, cutout: coratinaCutout },
};
