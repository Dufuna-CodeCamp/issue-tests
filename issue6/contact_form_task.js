var file_path = process.env.FILE_PATH;
var webdriver = require('selenium-webdriver');
var assert = require('chai').assert;
var { Builder, By } = require("selenium-webdriver");

describe("Testing Scholars Project", function () {
    this.timeout(3 * 1000 * 60);
    var driver = new webdriver.Builder()
        .forBrowser('chrome')
        .build();

        before(function setupWebdriver(done) {
            var file_url = `file://${file_path}`;
            driver.get(file_url).then(done);
        });
    
        after(function() {
            driver.quit();
        });

    it('test case: assert 7 input fields are present', async () => {
        const images = await driver.findElements(By.css('input'));
        const size = images.length

        assert.equal(size, 5, `Ensure you have all the input fields in the order stated in the task criteria`);
    });

    it('test case: Full Name label is present', async () => {
        const name = driver.wait(webdriver.until.elementLocated(webdriver.By.css("form")));
        const text = await name.getText();
        assert.include(text, "Full Name", `Ensure "Full Name" is present`);

    });

    it('test case: Email Address label is present', async () => {
        const name = driver.wait(webdriver.until.elementLocated(webdriver.By.css("form")));
        const text = await name.getText();
        assert.include(text, "Email Address", `Ensure "Email Address" is present`);

    });

    it('test case: Subject is present', async () => {
        const name = driver.wait(webdriver.until.elementLocated(webdriver.By.css("form")));
        const text = await name.getText();
        assert.include(text, "Subject", `Ensure "Subject" label is present`);

    });

    it('test case: Messsage label is present', async () => {
        const name = driver.wait(webdriver.until.elementLocated(webdriver.By.css("form")));
        const text = await name.getText();
        assert.include(text, "Message", `Ensure "Message" label is present`);

    });

    it('test case: "Contact Us" text is present', async () => {
        const name = driver.wait(webdriver.until.elementLocated(webdriver.By.css("footer")));
        const text = await name.getText();
        assert.include(text, "Contact Us", `Ensure "Contact Us" text is present in footer`);

    });

    it('test case: "About Us" is present', async () => {
        const name = driver.wait(webdriver.until.elementLocated(webdriver.By.css("footer")));
        const text = await name.getText();
        assert.include(text, "About Us", `Ensure "About Us" is present in footer`);

    });

    it('test case: "Terms and Conditions" is present', async () => {
        const name = driver.wait(webdriver.until.elementLocated(webdriver.By.css("footer")));
        const text = await name.getText();
        assert.include(text, "Terms and Conditions", `Ensure "Terms and Conditions" is present`);
    });
});

    
