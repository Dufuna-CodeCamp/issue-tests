var file_path = process.env.FILE_PATH
var webdriver = require('selenium-webdriver');
var assert = require('chai').assert;
var { Builder, By } = require("selenium-webdriver");
var expect = require('expect.js')

describe("Testing Product Projects", function () {
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

    it('test case: Prints out the value of array', async () => {
        const productList = [{productName: 'Addey', imageUrl:"https://shhd.jpg", productPrice: '5000'}, {productName: 'Addy', imageUrl:"https://shd.jpg", productPrice: '4000'}, {productName: 'Adddhdey', imageUrl:"https://shhdjfd.jpg", productPrice: '6000'}]
        assert.equal(productList.length, 3)
        expect(productList[0]).to.have.keys("productName", "imageUrl", "productPrice")
        expect(productList[1]).to.have.keys("productName", "imageUrl", "productPrice")
        expect(productList[2]).to.have.keys("productName", "imageUrl", "productPrice")
    });

    
});