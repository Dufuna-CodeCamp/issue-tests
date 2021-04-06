var webdriver = require('selenium-webdriver');
var assert = require('chai').assert;
var { Builder, By } = require("selenium-webdriver");g

describe("Testing Scholars Project", function () {
    this.timeout(5 * 1000 * 60);
    var driver = new webdriver.Builder()
        .forBrowser('chrome')
        .build();

    before(function setupWebdriver(done) {
        driver.get("file:///C:/Users/oemma/mocha_test/Dufuna-Fem/submissions/modupeAdeOnojobi/html-forms/sign-up.html").then(done)
    });
    it('test case: assert 7 input fields are present', async () => {
        const images = await driver.findElements(By.css('input'));
        const size = images.length

        assert.equal(size, 9, `Ensure you have all the input fields in the order stated in the task criteria`);
    });

    it('test case: First Name label is present', async () => {
        const name = driver.wait(webdriver.until.elementLocated(webdriver.By.css("footer")));
        const text = await name.getText();
        assert.include(text, "Contact Us", `Ensure "Contact Us" text is present on footer`);

    });

    it('test case: First Name label is present', async () => {
        const name = driver.wait(webdriver.until.elementLocated(webdriver.By.css("footer")));
        const text = await name.getText();
        assert.include(text, "About Us", `Ensure "About Us" is present on footer`);

    });

    it('test case: First Name label is present', async () => {
        const name = driver.wait(webdriver.until.elementLocated(webdriver.By.css("footer")));
        const text = await name.getText();
        assert.include(text, "Terms and Conditions", `Ensure "Terms and Conditions" is present on footer`);

    });

    it('test case: First Name label is present', async () => {
        const name = driver.wait(webdriver.until.elementLocated(webdriver.By.css("form")));
        const text = await name.getText();
        assert.include(text, "First Name", `Ensure "First Name" label is present`);

    });

    it('test case: Last Name label is present', async () => {
        const name = driver.wait(webdriver.until.elementLocated(webdriver.By.css("form")));
        const text = await name.getText();
        assert.include(text, "Last Name", `Ensure "Last Name" label is present`);

    });

    it('test case: Other names label is present', async () => {
        const name = driver.wait(webdriver.until.elementLocated(webdriver.By.css("form")));
        const text = await name.getText();
        assert.include(text, "Other Names", `Ensure "Other names" label is present`);
    });

    it('test case: Email Address label is present', async () => {
        const name = driver.wait(webdriver.until.elementLocated(webdriver.By.css("form")));
        const text = await name.getText();
        assert.include(text, "Email Address", `Ensure "Email Address" label is present`);
    });

    it('test case: Password label is present', async () => {
        const name = driver.wait(webdriver.until.elementLocated(webdriver.By.css("form")));
        const text = await name.getText();
        assert.include(text, "Password", `Ensure "Password" label is present`);
    });

    it('test case: Confirm Password label is present', async () => {
        const name = driver.wait(webdriver.until.elementLocated(webdriver.By.css("form")));
        const text = await name.getText();
        assert.include(text, "Confirm Password", `Ensure "Confirm Password" label is present`);
    });
});

    
