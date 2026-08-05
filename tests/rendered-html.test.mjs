import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const output = new URL("../out/index.html", import.meta.url);
const leadFormSource = new URL("../app/LeadForm.tsx", import.meta.url);
const globalStyles = new URL("../app/globals.css", import.meta.url);

test("exports the complete Agents of Business landing page", async () => {
  const html = await readFile(output, "utf8");
  assert.match(html, /Agents of Business/);
  assert.match(html, /Rise of[\s\S]{0,40}AI Agents/);
  assert.match(html, /Ecosystems[\s\S]{0,40}of Growth/);
  assert.match(html, /Sales and Marketing/);
  assert.match(html, /Corp Dev and M&amp;A/);
  assert.match(html, /Corporate Ventures/);
  assert.match(html, /Leapfrog/);
  assert.doesNotMatch(html, /agents-of-business\.carrd\.co|fonts\.googleapis\.com|Made with Carrd/);
});

test("opens the Tally lead form inside a full-viewport on-site dialog", async () => {
  const [html, source, styles] = await Promise.all([
    readFile(output, "utf8"),
    readFile(leadFormSource, "utf8"),
    readFile(globalStyles, "utf8"),
  ]);

  assert.doesNotMatch(html, /mailto:user@domain\.ext/);
  assert.match(html, /Start the conversation/);
  assert.match(source, /tally\.so\/embed\/9qYOkG/);
  assert.doesNotMatch(source, /transparentBackground|alignLeft/);
  assert.match(source, /aria-modal="true"/);
  assert.match(source, /document\.body\.style\.overflow = "hidden"/);
  assert.match(styles, /height: 100vh;[\s\S]{0,60}height: 100svh;[\s\S]{0,60}height: 100dvh;/);
});

test("keeps all original image assets local", async () => {
  for (const image of ["image01", "image02", "image03", "image04", "image05", "image06", "image07", "card"]) {
    await access(new URL(`../public/images/${image}.jpg`, import.meta.url));
  }
});

test("exports compelling social sharing metadata", async () => {
  const html = await readFile(output, "utf8");

  assert.match(html, /Agents of Business — Human \+ AI Growth/);
  assert.match(html, /unlock nonlinear growth across sales, partnerships, M&amp;A, and innovation/);
  assert.match(html, /og-agents-of-business\.png/);
  assert.match(html, /summary_large_image/);
  assert.match(html, /1200/);
  assert.match(html, /630/);
});
