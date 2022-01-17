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

  async verifyLoginPageIsDisplayed() {
    await expect(await page.title()).to.equal('PodOp Project Workspace');
  }

  async submitLoginForm() {
    const element = await page.waitForSelector(locators.username_input);
    await page.fill(locators.username_input, 'deepu@podop.com');
    await page.fill(locators.password_input, 'podop123');
    await page.click(locators.login_button);
  }

  async verifyAfterLoginPage() {
    await page.waitForSelector(locators.loggedinusertext);
    const visible = await page.isVisible(locators.loggedinusertext);
    return expect(visible).to.equal(true);
  }
}

module.exports = { LoginPage };