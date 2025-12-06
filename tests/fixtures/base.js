// tests/fixtures/base.js

import { test as baseTest } from "@playwright/test";

export const test = baseTest.extend({
  // --- Browser context shared for each test ---
  context: async ({ browser }, use) => {
    const context = await browser.newContext({
      viewport: { width: 1280, height: 720 },
      ignoreHTTPSErrors: true,
    });
    await use(context);
    await context.close();
  },

  // --- Page fixture (fresh page for each test) ---
  page: async ({ context }, use) => {
    const page = await context.newPage();
    await use(page);
    await page.close();
  },

  // --- Base URL fixture (optional but useful) ---
  baseURL: async ({}, use) => {
    await use("http://training.skillo-bg.com:4300");
  },
});

export const expect = baseTest.expect;
