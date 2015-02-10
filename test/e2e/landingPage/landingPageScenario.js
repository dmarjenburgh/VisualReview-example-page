'use strict';

var vr = browser.params.visualreview;

browser.manage().window().setSize(640, 1024);

describe('Login to landing page', function () {

  var page = require('../pages/examplePage');

  beforeEach(function () {
  });

  it('should arrive at the main page', function () {
    page.visit();

    expect(page.title()).toBe('Example Application');
    expect(page.welcomeHeader.isPresent()).toBe(true);
    vr.takeScreenshot('Main Page');
  });

  it('should go to the login page', function () {
    page.loginText.click();

    expect(page.usernameInput.isPresent()).toBe(true);
  });

  it('should show an error message when login fails', function () {
    page.submitLoginData('daniel', 'abc');
    expect(page.errorAlert.isDisplayed()).toBe(true);
    vr.takeScreenshot('Login error');

    page.closeLoginAlert();
    expect(page.errorAlert.isDisplayed()).toBe(false);
  });

  it('should redirect to the landing page when login data is correct', function () {
    page.submitLoginData('daniel', 's3cret');
    expect(page.welcomeHeader.getText()).toBe('Landing page');
    vr.takeScreenshot('Landing page');
  })
});
