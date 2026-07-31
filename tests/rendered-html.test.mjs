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
  assert.match(html, /Start with the music\./);
  assert.match(html, /Add to cart/);
  assert.match(html, /Useful FL Studio lessons\./);
  assert.doesNotMatch(html, /ORIGINAL PRODUCTION|SHARP DRUMS|STRANGE COLORS/);
});

test("server-renders the blog index and an article", async () => {
  const index = await render("/blog");
  assert.equal(index.status, 200);
  const indexHtml = await index.text();
  assert.match(indexHtml, /FL Studio Notes/);
  assert.match(indexHtml, /Drum programming that leaves room for the vocal/);

  const article = await render("/blog/fl-studio-drum-programming");
  assert.equal(article.status, 200);
  const articleHtml = await article.text();
  assert.match(articleHtml, /application\/ld\+json/);
  assert.match(articleHtml, /Image-Line/);
  assert.match(articleHtml, /Drum programming that leaves room for the vocal/);
});
