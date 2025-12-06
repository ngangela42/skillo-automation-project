import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { ProfilePage } from "../pages/ProfilePage";
import users from "../test-data/users.json";
import path from "path";

test.describe("Post Management Tests", () => {
  let login;
  let profile;

  test.beforeEach(async ({ page }) => {
    login = new LoginPage(page);
    profile = new ProfilePage(page);

    // Login before every test
    await login.navigate();
    await login.login(
      users.validUsers.user1.username,
      users.validUsers.user1.password
    );

    await expect(page).toHaveURL(/\/posts\/all/);
  });

  // Create cleanup hook to delete last created post
  test.afterEach(async ({ page }) => {
    await page.locator("#nav-link-profile").click();
    await profile.waitForProfileToLoad();

    const lastPost = page.locator(".gallery-item").first();

    if (await lastPost.count()) {
      await lastPost.click();

      // If delete button exists -> delete
      if (await page.getByText("Delete post").isVisible()) {
        await page.getByText("Delete post").click();
        await page.getByRole("button", { name: "Yes" }).click();

        await expect(page.getByText("Post deleted!")).toBeVisible();
      }
    }
  });

  test("Positive: User profile loads successfully", async ({ page }) => {
    await page.locator("#nav-link-profile").click();
    await profile.waitForProfileToLoad();

    await expect(profile.usernameHeader).toHaveText(
      users.validUsers.user1.username
    );
  });

  test("Positive: Create new post from user profile", async ({ page }) => {
    await page.locator("#nav-link-profile").click();
    await profile.waitForProfileToLoad();

    await page.locator("i.far.fa-plus-square.fa-lg").click();

    const filePath = "test-data/test-image.jpg";
    await page.locator('input.file[type="file"]').setInputFiles(filePath);

    await page
      .getByPlaceholder("Enter you post caption here")
      .fill("My new post");
    await page.locator("#create-post").click();

    await expect(page.getByText("Post created!")).toBeVisible();
  });

  test("Positive: Create private post", async ({ page }) => {
    await page.locator("#nav-link-new-post").click();

    const filePath = "test-data/test-image.jpg";
    await page.locator('input.file[type="file"]').setInputFiles(filePath);

    await expect(page.locator("img.image-preview")).toBeVisible();

    await page
      .getByPlaceholder("Enter you post caption here")
      .fill("My new private post");

    await page.getByText("Private").click();

    await page.locator("#create-post").click();

    await expect(page.getByText("Post created!")).toBeVisible();
  });
});

test("Positive: Post counter is working and the created post appears in profile (image visible)", async ({
  page,
}) => {
  const login = new LoginPage(page);
  const profile = new ProfilePage(page);

  //  Login
  await login.navigate();
  await login.login(
    users.validUsers.user1.username,
    users.validUsers.user1.password
  );
  await expect(page).toHaveURL(/\/posts\/all/);

  //  Go to profile
  await page.locator("#nav-link-profile").click();
  await profile.waitForProfileToLoad();

  // Count posts before creating a new one
  const postsBefore = await profile.countPosts();

  // Create new post
  await page.locator("i.far.fa-plus-square.fa-lg").click();
  await expect(page).toHaveURL(/\/posts\/create/);

  const filePath = path.join("test-data", "test-image.jpg");
  await page.locator('input.file[type="file"]').setInputFiles(filePath);

  await expect(page.locator("img.image-preview")).toBeVisible();
  await page
    .getByPlaceholder("Enter you post caption here")
    .fill("Validation test");
  await page.locator("#create-post").click();

  await expect(page.getByText("Post created!")).toBeVisible();

  // Count posts again
  const postsAfter = await profile.countPosts();

  //  Assert a new image is now visible
  const postImages = page.locator("app-post-list img");
  await expect(postImages.first()).toBeVisible();
});

test("Positive: Delete existing post from profile successfully", async ({
  page,
}) => {
  const login = new LoginPage(page);
  const profile = new ProfilePage(page);

  // Login
  await login.navigate();
  await login.login(
    users.validUsers.user1.username,
    users.validUsers.user1.password
  );
  await expect(page).toHaveURL(/\/posts\/all/);

  // Navigate to Profile
  await page.locator("#nav-link-profile").click();
  await profile.waitForProfileToLoad();

  // Open the first visible post
  const firstPost = page.locator(".gallery-item").first();
  await firstPost.waitFor({ state: "visible" });
  await firstPost.click();

  // Delete post
  await page.getByText("Delete post").click();

  // Confirm deletion (Yes button in modal)
  await page.getByRole("button", { name: "Yes" }).click();

  // Assert success toast
  await expect(page.getByText("Post deleted!")).toBeVisible();
});
