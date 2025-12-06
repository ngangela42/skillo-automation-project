// pages/HomePage.js

export class HomePage {
  // Step 1: Constructor receives the Playwright 'page' object
  constructor(page) {
    this.page = page;

    // Base URL for this page
    this.url = "/posts/all";

    // Step 2: Define locators
    this.homeButton = page.locator("#nav-link-home");
    this.profileButton = page.locator("#nav-link-profile");
    this.newPostButton = page.locator("#nav-link-new-post");
    this.searchBar = page.locator("#search-bar");
    this.logoutButton = page.locator("#nav-logout");
  }

  // Step 3: Navigation method
  async navigate() {
    await this.page.goto(this.url);
  }

  // Step 4: Action methods
  async goToProfile() {
    await this.profileButton.click();
  }

  async goToNewPost() {
    await this.newPostButton.click();
  }

  // Method to type text into the search bar
  async typeInSearchBar(text) {
    await this.searchBar.fill(text);
  }

  async logout() {
    await this.logoutButton.click();
  }
}
