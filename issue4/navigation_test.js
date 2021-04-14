var file_path = process.env.FILE_PATH
var webdriver = require('selenium-webdriver');
var assert = require('chai').assert;
var { Builder, By } = require("selenium-webdriver");

describe("Testing Navigation on HtmlForms", function() {
    this.timeout(3 * 1000 * 60);
    var driver = new webdriver.Builder().forBrowser('chrome').build()

    before(function setupWebdriver(done) {
        var file_url = `file://${file_path}`;
       
        driver.get(file_url).then(done)
    })

        after(function() {
            driver.quit()
        })

    it("test case: check if Contact Us link is present",  async () => {
        const element = await driver.findElement(By.css("a[href='../contact.html']"));
        const link = await element.getText()
        assert.include(link, "Contact Form", `Ensure Link is present`)
    })

    it("tests case: Check if Product Link is present", async () => {
        const element = await driver.findElement(By.css("a[href='../product.html']"));
        const link = await element.getText()
        assert.include(link, "Product", `Ensure link is presnt` )
    })

    it("test case: Check if clicking the Product link navigates user to the Product Page", async () => {
        const element = await driver.findElement(By.css("a[href='../product.html']"));
        if (element.click()) {
            const navigator =  driver.navigate().to('../product.html');
            if(navigator){
                const actualTitle = await driver.getTitle()
                const expectedTitle = 'Product'
                assert(actualTitle !== expectedTitle, `Expects ${actualTitle} to navigate to ${expectedTitle}`)
            }
        }   
    })

    it("test case: Check if clicking the Contact Form link navigates user to the Contact Page", async () => {
        const element = await driver.findElement(By.css("a[href='../contact.html']"))
        if(element.click()){
            const navigator = driver.navigate().to('../contact.html');
            if(navigator) {
                const actualTitle = await driver.getTitle()
                const expectedTitle = 'Contact Form'
                assert(actualTitle !== expectedTitle, `Expects ${actualTitle} to navigate to ${expectedTitle}`)
            }
        }
    })

})