// Renders the $15 beat ads to PNG: node ads/render.mjs
// 1080x1350 = Feed (4:5). 1080x1920 = Reels / Stories (9:16), text kept inside the safe band.
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";
import satori from "satori";
import { Resvg, initWasm } from "@resvg/resvg-wasm";

const here = dirname(fileURLToPath(import.meta.url));
const require = createRequire(import.meta.url);
await initWasm(readFileSync(require.resolve("@resvg/resvg-wasm/index_bg.wasm")));

const fonts = [
  { name: "Anton", data: readFileSync(join(here, "anton.woff")), weight: 400, style: "normal" },
  { name: "Karla", data: readFileSync(join(here, "karla-700.woff")), weight: 700, style: "normal" },
];

const INK = "#0a0a0a";
const GREEN = "#3ee07a"; // same green as the site's Buy buttons

const h = (type, style, ...children) => ({ type, props: { style: { display: "flex", ...style }, children: children.length === 1 ? children[0] : children } });

function ad(height) {
  const reels = height > 1600;
  // Reels/Stories: profile bar covers the top ~250px, caption + CTA the bottom ~650px.
  const padTop = reels ? 250 : 0;
  const padBottom = reels ? height - 1270 : 0;
  // Reels has ~980px of safe height, so the same layout runs a touch smaller there.
  const k = reels ? 0.9 : 1;
  const px = (n) => Math.round(n * k);
  const small = { fontFamily: "Karla", fontWeight: 700, fontSize: px(42), lineHeight: 1.3 };

  return h(
    "div",
    { width: 1080, height, display: "flex", flexDirection: "column", background: "#fff", color: INK, paddingTop: padTop, paddingBottom: padBottom },
    h(
      "div",
      { flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 96px" },
      h("div", { ...small, fontSize: px(34), letterSpacing: 3, textTransform: "uppercase" }, "PROD. YARI / ATLANTA"),
      h("div", { fontFamily: "Anton", fontSize: px(196), lineHeight: 0.93, marginTop: px(30), display: "flex", flexDirection: "column" },
        h("div", {}, "HEY. I GOT"),
        h("div", {}, "BEATS FOR"),
      ),
      h("div", { display: "flex", marginTop: px(10) },
        h("div", { position: "relative", display: "flex" },
          h("div", { position: "absolute", left: -6, right: -14, top: px(222), height: px(124), background: GREEN }),
          h("div", { fontFamily: "Anton", fontSize: px(440), lineHeight: 0.86, letterSpacing: -8 }, "$15."),
        ),
      ),
      h("div", { ...small, marginTop: px(40), display: "flex", flexDirection: "column" },
        h("div", {}, "Rage. Detroit. Underground."),
        h("div", {}, "Instant download."),
      ),
      h("div", { ...small, marginTop: px(14), display: "flex", alignItems: "center" },
        h("div", { width: 20, height: 20, borderRadius: 10, background: GREEN, marginRight: 16 }),
        "yari.wtf/15",
      ),
    ),
  );
}

for (const height of [1350, 1920]) {
  const svg = await satori(ad(height), { width: 1080, height, fonts });
  const png = new Resvg(svg, { fitTo: { mode: "width", value: 1080 } }).render().asPng();
  const out = join(here, `yari-beats-15-1080x${height}.png`);
  writeFileSync(out, png);
  console.log("wrote", out);
}
