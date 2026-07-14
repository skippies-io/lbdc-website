import { readFile } from 'node:fs/promises';

const SITE = 'https://www.lbdc.co.za';
const expectedUrls = [
  `${SITE}/`,
  `${SITE}/services/`,
  `${SITE}/sip-and-prompt/`,
  `${SITE}/about/`,
  `${SITE}/insights/`,
  `${SITE}/insights/platform-as-the-next-treasury-frontier/`,
  `${SITE}/insights/you-dont-need-to-code-you-need-to-think/`,
  `${SITE}/contact/`,
];

const robots = await readFile('dist/robots.txt', 'utf8');
if (!robots.includes(`Sitemap: ${SITE}/sitemap.xml`)) {
  throw new Error('robots.txt must point to the live lbdc.co.za sitemap.');
}
if (robots.includes('skippies-io.github.io')) {
  throw new Error('robots.txt must not point crawlers to the GitHub Pages URL.');
}

const sitemap = await readFile('dist/sitemap.xml', 'utf8');
const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) =>
  match[1]
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'"),
);

for (const expectedUrl of expectedUrls) {
  if (!urls.includes(expectedUrl)) {
    throw new Error(`Missing sitemap URL: ${expectedUrl}`);
  }
}

for (const url of urls) {
  if (url.includes('skippies-io.github.io') || url.includes('/blog/')) {
    throw new Error(`Unexpected sitemap URL: ${url}`);
  }
}

console.log(`SEO verification passed: ${urls.length} sitemap URLs checked.`);
