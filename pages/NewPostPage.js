import path from "node:path";

export class NewPostPage {
  constructor(page) {
    this.page = page;
    this.url = "/posts/create";

    // Create post form
    this.captionInput = page.getByRole("textbox", {
      name: "Enter you post caption here",
    });

    this.browseButton = page.getByRole("button", { name: "Browse" });

    this.privateOption = page.getByText("Private");
    this.publicOption = page.getByText("Public");

    this.createPostButton = page.getByRole("button", { name: "Create post" });

    // ⭐ NEW: Locators for post details page
    this.detailsCaption = page.locator(".post-description");
    this.detailsUsername = page.locator(".post-user a");
  }

  async navigate() {
    await this.page.goto(this.url);
  }

  async fillCaption(text) {
    await this.captionInput.fill(text);
  }

  async uploadImage(imagePath) {
    const absolutePath = path.resolve(imagePath);
    await this.browseButton.setInputFiles(absolutePath);
  }

  async selectPrivate() {
    await this.privateOption.click();
  }

  async selectPublic() {
    await this.publicOption.click();
  }

  async submitPost() {
    await this.createPostButton.click();
  }

  async createPost(caption, imagePath, isPublic = true) {
    await this.fillCaption(caption);
    await this.uploadImage(imagePath);

    if (isPublic) {
      await this.selectPublic();
    } else {
      await this.selectPrivate();
    }

    await this.submitPost();
  }

  // Wait for Post Details page to load
  async waitForPostDetails() {
    await this.detailsCaption.waitFor({ state: "visible" });
  }
}
