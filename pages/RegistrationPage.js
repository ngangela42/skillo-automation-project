export class RegistrationPage {
  constructor(page) {
    this.page = page;
    this.url = "/users/register";

    this.username = page.locator("#defaultRegisterFormUsername");
    this.email = page.locator("#defaultRegisterFormEmail");
    this.birthDate = page.locator('input[type="date"]');

    this.password = page.locator("#defaultRegisterFormPassword");
    this.confirmPassword = page.locator("#defaultRegisterPhonePassword");

    this.publicInfo = page.locator("#defaultRegisterFormPublicInfo");
    this.submitButton = page.locator("#sign-in-button");

    this.errorMessage = page.locator(".input-error-message");
  }

  async navigate() {
    await this.page.goto(this.url);
  }

  async fillUsername(v) {
    await this.username.fill(v);
  }

  async fillEmail(v) {
    await this.email.fill(v);
  }

  async fillBirthDate(dateString = "1997-01-01") {
    await this.birthDate.fill(dateString);
  }

  async fillPassword(v) {
    await this.password.fill(v);
  }

  async fillVerifyPassword(v) {
    await this.confirmPassword.fill(v);
  }

  async fillPublicInfo(v) {
    await this.publicInfo.fill(v);
  }

  async submitRegistration() {
    await this.submitButton.click();
  }
}
