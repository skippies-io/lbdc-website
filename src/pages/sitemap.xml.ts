import { getCollection } from 'astro:content';

const staticPaths = [
  '',
  'services/',
  'sip-and-prompt/',
  'about/',
  'insights/',
  'contact/',
];

const toUrl = (site: URL, path: string) => new URL(path, site).toString();

const escapeXml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');

export async function GET({ site }: { site: URL }) {
  const insightPosts = await getCollection('insights');
  const blogPosts = await getCollection('blog');
  const postUrls = [...insightPosts, ...blogPosts].map((post) => ({
    loc: toUrl(site, `insights/${post.data.slug ?? post.id}/`),
    lastmod: post.data.date.toISOString().slice(0, 10),
  }));

  const urls = [
    ...staticPaths.map((path) => ({ loc: toUrl(site, path) })),
    ...postUrls,
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    ({ loc, lastmod }) => `  <url>
    <loc>${escapeXml(loc)}</loc>${lastmod ? `
    <lastmod>${lastmod}</lastmod>` : ''}
  </url>`,
  )
  .join('\n')}
</urlset>
`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}
