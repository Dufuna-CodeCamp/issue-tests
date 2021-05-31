const {expect} = require('chai') 
var assert = require('assert') 
const webdriver = require('selenium-webdriver')

describe("Testing validation inputs", function () {

    const emailRegex = /^(([^<>()[\]\\.,;:\s@]+(\.[^<>()[\]\\.,;:\s@]+)*)|(.+))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const nameRegex = /^[a-zA-Z]/;
    const phoneRegex = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s/0-9]*$/g;
    const passwordRegex = (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/);
    
    const validateInput = (element, emptyElementMessage, validationFailedMessage, validationRegex) => {
        if(element === '') {
            return false
        } 

        if(!validationRegex.test(element)) {
            return false
        } else {
            return true
        }
    }

    const validateConfirmPassword = (password, confirmPassword, validationFailedMessage) => {
        if(confirmPassword !== password) {
            return false
        } else {
            return true
        }
    }

    it('test case: If Email address is present and valid', async () => {
        let email = "abc@example.com";
        
         const result = validateInput(email, 'Please enter your email address', 'Please enter a valid email', emailRegex)

         expect(result).to.be.eq(true)
    })

})