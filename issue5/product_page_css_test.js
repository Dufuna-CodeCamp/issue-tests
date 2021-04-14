var file_path = process.env.FILE_PATH;
var webdriver = require('selenium-webdriver');
var assert = require('chai').assert;
var { Builder, By } = require("selenium-webdriver")
const phantomcss = require('phantomcss');

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

        it('test case: Check if there is a product image at the left side', async () => {
            const element = await driver.findElement(By.css())
        })

        it("test case: quantity field is a text input field", async () => {
            const element = await driver.findElement(By.css("form"))
            const text = await element.getText();
            assert.include(text, "Quantity", "Ensure Quantity label is present");
        })

        it("test case: product image is present", async () => {
            const element = await driver.findElement(By.css("img"))
            const name = await element.getText();
            assert.include(text, "Quantity", "Ensure Quantity label is present");
        })

        t("test case: product name is present", async () => {
            const element = await driver.findElement(By.css("img"))
            const name = await element.getText();
            assert.include(text, "Quantity", "Ensure Quantity label is present");
        })


//start a casper test
casper.test.begin('Tags', function(test) {
    phantomcss.init({
        rebase: casper.cli.get('rebase')
    })
    // open page
  casper.start('http://127.0.0.1:5500/submissions/adekemiAwomolo/html/product.html');

  // set your preferred view port size
  casper.viewport(1440, 1134);

  casper.then(function() {
      // take the screenshot of the whole body element and save it under "body.png". The first parameter is actually a CSS selector
      phantomcss.screenshot('body', 'body');
  });

  casper.then(function now_check_the_screenshots() {
    // compare screenshots
    phantomcss.compareAll();
  });

  // run tests
  casper.run(function() {
    console.log('\nTHE END.');
    casper.test.done();
  });
})

})

