// tests/fixtures/auth.js
import { LoginPage } from "../../pages/LoginPage.js";
import { test as base } from "./base.js";

export const test = base.extend({
  // Authenticated page fixture
  authPage: async ({ page, baseURL }, use) => {
    const loginPage = new LoginPage(page);

    // Navigate to login URL
    await page.goto(`${baseURL}/users/login`);

    // Login with test user
    await loginPage.login("existinguser123", "Password123!");

    // Provide the authenticated page to the test
    await use(page);
  },
});
