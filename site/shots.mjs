import { chromium } from "playwright";
import { mkdirSync } from "node:fs";

const routes = [
  { path: "/", name: "01-home" },
  { path: "/shop", name: "02-shop" },
  { path: "/shop/losange-01-noir", name: "03-product" },
  { path: "/about", name: "04-about" },
  { path: "/contact", name: "05-contact" },
];

const viewports = [
  { w: 1440, h: 900, tag: "desktop" },
  { w: 390, h: 844, tag: "mobile" },
];

mkdirSync("screenshots", { recursive: true });

const browser = await chromium.launch();
for (const vp of viewports) {
  const ctx = await browser.newContext({
    viewport: { width: vp.w, height: vp.h },
    deviceScaleFactor: 2,
  });
  const page = await ctx.newPage();
  for (const r of routes) {
    await page.goto(`http://localhost:3000${r.path}`, {
      waitUntil: "networkidle",
      timeout: 60000,
    });
    // Wait until every <img> has finished loading (Next/Image in dev is slow)
    await page.evaluate(async () => {
      const imgs = Array.from(document.images);
      await Promise.all(
        imgs.map((img) =>
          img.complete && img.naturalWidth > 0
            ? null
            : new Promise((res) => {
                img.addEventListener("load", res, { once: true });
                img.addEventListener("error", res, { once: true });
              })
        )
      );
    });
    await page.waitForTimeout(1500);
    const file = `screenshots/${r.name}-${vp.tag}.png`;
    await page.screenshot({ path: file, fullPage: true });
    console.log(`✓ ${file}`);
  }
  await ctx.close();
}
await browser.close();
