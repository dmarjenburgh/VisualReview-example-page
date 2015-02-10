var ExamplePage = function () {

  this.visit = function () {
    browser.get('http://localhost:9000/');
  };

  this.title = function () {
    return browser.getTitle();
  };

  this.welcomeHeader = element(by.css('h1'));

  this.loginText = element(by.css('p.lead a[href="#/login"'));
  this.usernameInput = element(by.id('inputUsername'));
  this.passwordInput = element(by.id('inputPassword'));
  this.submitButton = element(by.css('button[type="submit"]'));

  this.errorAlert = element(by.css('.alert.alert-danger'));
  this.closeLoginAlert = function () {
    element(by.css('button.close')).click();
  };

  this.submitLoginData = function (username, password) {
    this.usernameInput.clear();
    this.usernameInput.sendKeys(username);
    this.passwordInput.clear();
    this.passwordInput.sendKeys(password);
    this.submitButton.click();
  }
};

module.exports = new ExamplePage();