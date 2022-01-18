const { password } = require("../data/data");

locators = {
  "username_input": `//input[@name="user"]`,
  "password_input": `//input[@name="password"]`,
  "login_button": `//button[@type="submit"]`,
  "loggedinusertext": `//div[contains(text(), 'deepu@podop.com')]`
}

class LoginPage {

  async navigateToLoginScreen() {
    await page.goto(global.BASE_URL);
  }

  async verifyLoginPageIsDisplayed(title) {
    await expect(await page.title()).to.equal(title);
  }

  async enterCredentials(username,password) {
    const element = await page.waitForSelector(locators.username_input);
    await page.fill(locators.username_input, username);
    await page.fill(locators.password_input, password);
    await page.click(locators.login_button);
  }

  async verifyLogin() {
    await page.waitForSelector(locators.loggedinusertext);
    const visible = await page.isVisible(locators.loggedinusertext);
    return expect(visible).to.equal(true);
  }
}

module.exports = { LoginPage };