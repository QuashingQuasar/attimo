// Resolve the front-mockup image for a colour from the product's gallery,
// independent of Shopify's per-variant image assignment (which Printful image
// re-uploads tend to scramble onto a single mockup). Printful names files like
// "unisex-heavy-blend-hoodie-forest-green-front-xxxx.png", so we match the
// colour name in the filename and prefer the "front" shot. Falls back to the
// provided variant image when nothing matches (e.g. non-Printful uploads).

// Colour-name tokens to look for in a filename, most specific first.
function colorTokens(color: string): string[] {
  const c = color.trim().toLowerCase();
  const hyphen = c.replace(/\s+/g, "-"); // "forest green" -> "forest-green"
  const collapsed = c.replace(/\s+/g, ""); // -> "forestgreen"
  const lastWord = c.split(/\s+/).pop() ?? c; // -> "green"
  return [...new Set([hyphen, collapsed, lastWord])].filter(Boolean);
}

export function frontImageForColor(
  color: string,
  imageUrls: string[],
  fallback?: string | null,
): string | null {
  for (const token of colorTokens(color)) {
    const matches = imageUrls.filter((u) => u.toLowerCase().includes(token));
    if (matches.length) {
      return matches.find((u) => /front/i.test(u)) ?? matches[0];
    }
  }
  return fallback ?? null;
}

// The "other side" of a given image: the SAME colour's opposite side
// (front↔back). Used for the collection-card hover so it reveals the garment's
// other side without ever jumping to a different colour. Falls back to any
// opposite-side image when the colour can't be inferred from the filename.
export function otherSideImage(
  currentUrl: string,
  imageUrls: string[],
  colorValues: string[],
): string | null {
  if (!currentUrl) return null;
  const lc = currentUrl.toLowerCase();
  const sideRe = /back/.test(lc) ? /front/i : /back/i; // default is back -> want front
  const color = colorValues.find((c) => colorTokens(c).some((t) => lc.includes(t)));
  if (color) {
    for (const token of colorTokens(color)) {
      const m = imageUrls.find(
        (u) => u !== currentUrl && u.toLowerCase().includes(token) && sideRe.test(u),
      );
      if (m) return m;
    }
  }
  return imageUrls.find((u) => u !== currentUrl && sideRe.test(u)) ?? null;
}
