import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage.js";
import users from "../test-data/users.json";

test.describe("Login Tests", () => {
  test("Positive: Valid user should login successfully", async ({ page }) => {
    const login = new LoginPage(page);

    await login.navigate();
    await login.login(
      users.validUsers.user1.username || users.validUsers.user1.email, // The form accepts username or email
      users.validUsers.user1.password
    );

    // Successful login: redirect to posts page
    await expect(page).toHaveURL(/posts\/all/);
  });

  // Data-driven negative test
  for (const [scenario, data] of Object.entries(users.invalidUsers)) {
    test(`Negative: Login should fail for ${scenario}`, async ({ page }) => {
      const login = new LoginPage(page);

      await login.navigate();

      // fill only if field is not empty
      if (data.username !== "") {
        await login.username.fill(data.username);
      }
      if (data.password !== "") {
        await login.password.fill(data.password);
      }

      // Try clicking (if enabled)
      if (await login.signInButton.isEnabled()) {
        await login.signInButton.click();
      }

      // Expected outcome for all failures:
      // User must remain on the login page
      await expect(page).toHaveURL(/users\/login/);
    });
  }
});
