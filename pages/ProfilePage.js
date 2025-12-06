export class ProfilePage {
  constructor(page) {
    this.page = page;

    // Main elements for the page
    this.usernameHeader = page.locator("app-profile h2");
    this.profilePicture = page.locator(".edit-profile-pic");

    // Counters
    this.postsCount = page.getByText("posts");
    this.followersCount = page.getByText("followers");
    this.followingCount = page.getByText("following");

    // Tabs
    this.tabAll = page.getByText("All");
    this.tabPublic = page.getByText("Public");
    this.tabPrivate = page.getByText("Private");

    // Posts
    this.posts = page.locator("app-post-card");
    this.noPostsMessage = page.getByText("No posts here");

    // Followers
    this.followersModal = page.getByRole("dialog");

    // New Post button
    this.newPostButton = page.getByText("New post");

    // Locate first post
    this.firstPost = page.locator("app-post-card").first();

    // Delete post
    this.deleteIcon = page.locator("i.fa-trash");
  }

  // Wait for the profile to load
  async waitForProfileToLoad() {
    await this.usernameHeader.waitFor({ state: "visible" });
  }

  // Open the followers counter
  async openFollowers() {
    await this.followersCount.click();
  }

  // Open the following list
  async openFollowing() {
    await this.followingCount.click();
  }

  // Close any modal with ESC
  async closeModal() {
    await this.page.keyboard.press("Escape");
  }

  // Tabs
  async clickAllTab() {
    await this.tabAll.click();
  }

  async clickPublicTab() {
    await this.tabPublic.click();
  }

  async clickPrivateTab() {
    await this.tabPrivate.click();
  }

  // Post utilities
  async countPosts() {
    return await this.posts.count();
  }

  async openFirstPost() {
    await this.posts.first().click();
  }

  async deletePost() {
    await this.deleteIcon.click();
  }
  async waitForPostsToLoad() {
    await this.page
      .locator("app-post-card")
      .first()
      .waitFor({ state: "visible" });
  }

  async openFirstPost() {
    await this.waitForPostsToLoad();
    await this.posts.first().click();
  }
}
