import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const output = new URL("../out/index.html", import.meta.url);

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

test("keeps all original image assets local", async () => {
  const html = await readFile(output, "utf8");
  for (const image of ["image01", "image02", "image03", "image04", "image05", "image06", "image07", "card"]) {
    assert.match(html, new RegExp(`/images/${image}\\.jpg`));
  }
});
