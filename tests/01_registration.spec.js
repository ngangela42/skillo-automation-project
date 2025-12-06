import { test, expect } from "@playwright/test";
import { RegistrationPage } from "../pages/RegistrationPage";

// POSITIVE TEST

test("Positive: Successful registration", async ({ page }) => {
  await test.step("Navigate to registration page", async () => {
    const reg = new RegistrationPage(page);
    //Using url from POM + baseURL
    await reg.navigate();
  });

  await expect(page.getByRole("heading", { name: "Sign up" })).toBeVisible();

  await test.step("Fill form with valid data", async () => {
    const username = `u_${Date.now()}`; //creating unique username
    const email = `e_${Date.now()}@test.com`; // Date.now returns the current time in ms and adds it to the email

    await page.getByPlaceholder("Username").fill(username);
    await page.getByPlaceholder("email").fill(email);
    await page.getByPlaceholder("Birth date").fill("1997-01-01"); // ISO format date

    await page.locator("#defaultRegisterFormPassword").fill("Password123!");
    await page.locator("#defaultRegisterPhonePassword").fill("Password123!");

    await page.getByPlaceholder("Public info").fill("Test user");
  });

  await test.step("Submit registration", async () => {
    await page.locator("#sign-in-button").click();
  });
});

// NEGATIVE TESTS

test("Negative: Username cannot be empty", async ({ page }) => {
  const reg = new RegistrationPage(page);
  await reg.navigate();

  await page.getByRole("textbox", { name: "Username" }).fill("");
  await page
    .getByRole("textbox", { name: "email" })
    .fill(`e_${Date.now()}@test.com`);
  await page.getByPlaceholder("Birth date").fill("1997-01-01");

  await page.locator("#defaultRegisterFormPassword").fill("Password123!");
  await page.locator("#defaultRegisterPhonePassword").fill("Password123!");
  await page.getByRole("textbox", { name: "Public info" }).fill("Test user");

  const submitButton = page.locator("#sign-in-button");

  // Expect button to be disabled
  await expect(submitButton).toBeDisabled();
});

test("Negative: Email must be valid", async ({ page }) => {
  const reg = new RegistrationPage(page);
  await reg.navigate();

  await page.getByRole("textbox", { name: "Username" }).fill(`u_${Date.now()}`);
  await page.getByRole("textbox", { name: "email" }).fill("invalid_email");
  await page.getByPlaceholder("Birth date").fill("1997-01-01");

  await page.locator("#defaultRegisterFormPassword").fill("Password123!");
  await page.locator("#defaultRegisterPhonePassword").fill("Password123!");
  await page.getByRole("textbox", { name: "Public info" }).fill("Test user");

  const submitButton = page.locator("#sign-in-button");

  await expect(submitButton).toBeDisabled();
});

test("Negative: Passwords must match", async ({ page }) => {
  const reg = new RegistrationPage(page);
  await reg.navigate();

  await page.getByRole("textbox", { name: "Username" }).fill(`u_${Date.now()}`);
  await page
    .getByRole("textbox", { name: "email" })
    .fill(`e_${Date.now()}@test.com`);
  await page.getByPlaceholder("Birth date").fill("1997-01-01");

  await page.locator("#defaultRegisterFormPassword").fill("Password123!");
  await page.locator("#defaultRegisterPhonePassword").fill("WrongPassword!");
  await page.getByRole("textbox", { name: "Public info" }).fill("Test user");

  const submitButton = page.locator("#sign-in-button");

  await expect(submitButton).toBeDisabled();
});
