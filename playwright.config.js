import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",

  // Parallel execution
  workers: 1,
  fullyParallel: true,

  // Retries
  retries: process.env.CI ? 2 : 0,

  // Timeouts
  timeout: 30000,

  // Debugging and artifacts
  use: {
    headless: false,
    trace: "on-first-retry",
    screenshot: "only-on-failure",
    video: "retain-on-failure",
    baseURL: "http://training.skillo-bg.com:4300/",
  },

  // Reporting
  reporter: process.env.CI
    ? [["html"], ["github"], ["json", { outputFile: "test-results.json" }]]
    : [["html"], ["list"]],

  // Cross-browser testing
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },

    {
      name: "firefox",
      use: { ...devices["Desktop Firefox"] },
    },
    {
      name: "webkit",
      use: { ...devices["Desktop Safari"] },
    },
  ],
});
