class LoginPage {

// Elements

  get username_input(){
    return `//input[@name="user-name"]`
  }

  get password_input(){
    return `//input[@name="password"]`
  }

  get login_button(){
    return `//input[@type="submit"]`
  }

  productsText(text){
    return `//span[contains(text(), '${text}')]`
  }

// Methods

  async navigateToLoginScreen() {
    await page.goto(global.BASE_URL);
  }

  async verifyLoginPageIsDisplayed(title) {
    await expect(await page.title()).to.equal(title);
  }

  async enterCredentials(username,password) {
    await page.waitForSelector(this.username_input);
    await page.fill(this.username_input, username);
    await page.fill(this.password_input, password);
    await page.click(this.login_button);
  }

  async verifyLogin() {
    await page.waitForSelector(this.productsText('Products'));
    const visible = await page.isVisible(this.productsText('Products'));
    expect(visible).to.equal(true);
  }
}

module.exports = { LoginPage };