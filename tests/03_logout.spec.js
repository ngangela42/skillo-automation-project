import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage.js";
import users from "../test-data/users.json";

test("Positive: User can logout successfully from Home page", async ({
  page,
}) => {
  const login = new LoginPage(page);

  await login.navigate();
  await login.login(
    users.validUsers.user1.username,
    users.validUsers.user1.password
  );
  //assert the login was successful
  await expect(page).toHaveURL(/posts\/all/);

  // Click on the logout icon
  await page.locator("i.fa-sign-out-alt").click();

  // The user is automatically redirected to login page
  await expect(page).toHaveURL(/users\/login/);
});
