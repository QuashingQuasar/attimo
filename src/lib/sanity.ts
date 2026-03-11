import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const sanityClient = createClient({
  projectId: "25tuybj3",
  dataset: "production",
  apiVersion: "2021-10-21",
  useCdn: true,
});

const builder = imageUrlBuilder(sanityClient);

type SanityImageSource = Parameters<ReturnType<typeof imageUrlBuilder>["image"]>[0];

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}
