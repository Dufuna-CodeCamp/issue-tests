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

    it('test case: ensure productLists array is present', function() {
        var productLists = [];
    
        assert.equal(productLists.length, 3, `Ensure there are 3 objects in the productLists array` );
      });

      it('test case: productList array is present', async () => {
        const name = driver.wait(webdriver.until.elementLocated(webdriver.By.css("body")));
        const text = await name.getText();
        assert.include(text, "productList", `Ensure "productList" array is present`);

    });

    it('test case: check console.log', async () => {
        const name = driver.wait(webdriver.until.elementLocated(webdriver.By.css("body")));
        const text = await name.getText();
      assert.include(text, "console.log(`${product.productName} with ${product.imageUrl} is sold for ${product.productPrice}`)", `Ensure you have the expected output on console.log`);
    });
});