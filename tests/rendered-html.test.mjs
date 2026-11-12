import assert from "node:assert/strict";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the YARI.WTF homepage", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /YARI\.WTF/);
  assert.match(html, /Press play\. Tap buy\./);
  assert.match(html, /traktrain\.com\/yariwtf\?utm_source=yari\.wtf/);
  assert.match(html, /1144600818156435/);
  assert.match(html, /rel="canonical" href="https:\/\/yari\.wtf\/"/);
  assert.match(html, /Free FL Studio lessons\./);
  assert.doesNotMatch(html, /Add to cart/);
});

test("server-renders type beat pages, the questionnaire, sitemap and robots", async () => {
  const lane = await render("/type-beats/osamason");
  assert.equal(lane.status, 200);
  const laneHtml = await lane.text();
  assert.match(laneHtml, /OSAMASON type beats/);
  assert.match(laneHtml, /"FAQPage"/);
  assert.match(laneHtml, /rel="canonical" href="https:\/\/yari\.wtf\/type-beats\/osamason"/);

  const start = await render("/start");
  assert.equal(start.status, 200);
  assert.match(await start.text(), /What are you here for\?/);

  const sitemap = await render("/sitemap.xml");
  assert.equal(sitemap.status, 200);
  assert.match(await sitemap.text(), /https:\/\/yari\.wtf\/type-beats\/detroit/);

  const robots = await render("/robots.txt");
  assert.match(await robots.text(), /Sitemap: https:\/\/yari\.wtf\/sitemap\.xml/);

  const missing = await render("/does-not-exist");
  assert.equal(missing.status, 404);
});

test("server-renders the blog index and an article", async () => {
  const index = await render("/blog");
  assert.equal(index.status, 200);
  const indexHtml = await index.text();
  assert.match(indexHtml, /FL Studio Tips/);
  assert.match(indexHtml, /property="og:url" content="https:\/\/yari\.wtf\/blog"/);
  assert.match(indexHtml, /Drum programming that leaves room for the vocal/);

  const article = await render("/blog/fl-studio-drum-programming");
  assert.equal(article.status, 200);
  const articleHtml = await article.text();
  assert.match(articleHtml, /application\/ld\+json/);
  assert.match(articleHtml, /Image-Line/);
  assert.match(articleHtml, /Drum programming that leaves room for the vocal/);
});
