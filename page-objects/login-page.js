locators = {
  "username_input": `//input[@name="user-name"]`,
  "password_input": `//input[@name="password"]`,
  "login_button": `//input[@type="submit"]`,
  "productsText": `//span[contains(text(), 'Products')]`
}

class LoginPage {

  async navigateToLoginScreen() {
    await page.goto(global.BASE_URL);
  }

  async verifyLoginPageIsDisplayed(title) {
    await expect(await page.title()).to.equal(title);
  }

  async enterCredentials(username,password) {
    await page.waitForSelector(locators.username_input);
    await page.fill(locators.username_input, username);
    await page.fill(locators.password_input, password);
    await page.click(locators.login_button);
  }

  async verifyLogin() {
    await page.waitForSelector(locators.productsText);
    const visible = await page.isVisible(locators.productsText);
    expect(visible).to.equal(true);
  }
}

module.exports = { LoginPage };