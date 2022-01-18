const { Given, When , Then } = require('@cucumber/cucumber');
const { LoginPage } = require('../page-objects/login-page');
const data  = require('../data/data.js');
const loginPage = new LoginPage();

Given('I am on the login screen', async function() {
  await loginPage.navigateToLoginScreen();
  await loginPage.verifyLoginPageIsDisplayed(data.title);
});

When('I fill the login form with valid credentials', async function() {
  await loginPage.enterCredentials(data.username,data.password);
});

Then('I should be able to see the home screen', async function() {
  await loginPage.verifyLogin();
});