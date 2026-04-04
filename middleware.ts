import { next } from '@vercel/edge';

export const config = {
  matcher: ['/blog/:slug*', '/product/:slug*'],
};

const SANITY_PROJECT_ID = '25tuybj3';
const SANITY_DATASET = 'production';

const PRODUCTS: Record<string, { title: string; description: string; image: string }> = {
  nocellara: {
    title: "Attimo Nocellara d'Italia | Single-Variety EVOO",
    description: 'Early harvest Nocellara extra virgin olive oil from Sicily. Cold-pressed, lab-tested polyphenols. 500ml.',
    image: 'https://cdn.shopify.com/s/files/1/0949/7867/0975/files/NOCELLARA1_1.png?v=1772735243',
  },
  coratina: {
    title: "Attimo Coratina d'Italia | Single-Variety EVOO",
    description: 'Early harvest Coratina extra virgin olive oil from Puglia. Cold-pressed, lab-tested. Certified organic. 500ml.',
    image: 'https://cdn.shopify.com/s/files/1/0949/7867/0975/files/Coratina-2_1_1.png?v=1773399330',
  },
  picual: {
    title: 'Attimo Picual de España | Single-Variety EVOO',
    description: 'Early harvest Picual extra virgin olive oil from Andalusia. Cold-pressed, lab-tested polyphenols. 500ml.',
    image: 'https://cdn.shopify.com/s/files/1/0949/7867/0975/files/Picual-v21.png?v=1773401549',
  },
};

function ogShell({ title, description, image, url }: { title: string; description: string; image: string; url: string }) {
  const esc = (s: string) => (s || '').replace(/"/g, '&quot;').replace(/</g, '&lt;');
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>${esc(title)}</title>
  <meta property="og:type" content="article" />
  <meta property="og:title" content="${esc(title)}" />
  <meta property="og:description" content="${esc(description)}" />
  <meta property="og:image" content="${esc(image)}" />
  <meta property="og:url" content="${esc(url)}" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${esc(title)}" />
  <meta name="twitter:description" content="${esc(description)}" />
  <meta name="twitter:image" content="${esc(image)}" />
  <script>window.location.replace("${esc(url)}")<\/script>
</head>
<body></body>
</html>`;
}

export default async function middleware(request: Request) {
  const url = new URL(request.url);
  const pathname = url.pathname;

  const blogMatch = pathname.match(/^\/blog\/([^/]+)$/);
  if (blogMatch) {
    try {
      const slug = blogMatch[1];
      const query = encodeURIComponent(
        `*[_type == "post" && slug.current == "${slug}"][0]{title, seoTitle, seoDescription, excerpt, "coverImageUrl": coverImage.asset->url}`
      );
      const res = await fetch(`https://${SANITY_PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${SANITY_DATASET}?query=${query}`);
      const data = await res.json();
      const post = data.result;
      if (post) {
        const title = post.seoTitle || post.title || 'ATTIMO Specialty Extra Virgin Olive Oil';
        const description = post.seoDescription || post.excerpt || '';
        const image = post.coverImageUrl ? `${post.coverImageUrl}?w=1200&auto=format` : 'https://attimo-oil.com/og-image.jpg';
        return new Response(ogShell({ title, description, image, url: request.url }), {
          headers: { 'content-type': 'text/html;charset=UTF-8' },
        });
      }
    } catch (_) {}
  }

  const productMatch = pathname.match(/^\/product\/(nocellara|coratina|picual)$/);
  if (productMatch && PRODUCTS[productMatch[1]]) {
    const p = PRODUCTS[productMatch[1]];
    return new Response(ogShell({ ...p, url: request.url }), {
      headers: { 'content-type': 'text/html;charset=UTF-8' },
    });
  }

  return next();
}
