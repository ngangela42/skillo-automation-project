// pages/LoginPage.js
export class LoginPage {
  constructor(page) {
    this.page = page;
    this.url = "/users/login";

    this.username = page.getByRole("textbox", { name: "Username or email" });
    this.password = page.getByRole("textbox", { name: "Password" });
    this.signInButton = page.getByRole("button", { name: "Sign in" });

    this.errorMessage = page.locator(".input-error-message");
  }

  async navigate() {
    await this.page.goto(this.url);
  }

  async login(username, password) {
    await this.username.fill(username);
    await this.password.fill(password);
    await this.signInButton.click();
  }
}
