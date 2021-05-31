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

    it('test case: validates firstName and lastName fields to not accept special characters', async () => {
        let firstName = 'Jesutofunmi';
        let lastName = 'Bonita';
        const firstnameResult = validateInput(firstName, 'Please enter your firstName', 'Enter valid characters only', nameRegex)
        const lastnameResult = validateInput(lastName, 'Please enter your lastName', 'Enter valid characters only', nameRegex)
        expect(firstnameResult).to.be.eq(true)
        expect(lastnameResult).to.be.eq(true)
    })

    it('test case: Ensures that all fields are mandatory except the other name field', async () => {
        const firstName = 'Jesutofunmi';
        const lastName = 'Adewole';
        const email = 'tofdebby@gmail.com';
        const phoneNumber = '08144466330';
        const password = 'Adewole@1';
        const confirmPassword = 'Adewole@1';
        const otherName = "Debby";

        const firstNameResult = validateInput(firstName, 'Please enter your First Name', 'Enter valid characters only', nameRegex)
        const lastNameResult = validateInput(lastName, 'Please enter your Last Name', 'Enter valid characters only', nameRegex)
        const emailResult = validateInput(email, 'Please enter your Email Address', 'Enter valid characters only', emailRegex)
        const phoneNumberResult = validateInput(phoneNumber, 'Please enter your Phone Number', 'Please enter a valid phone number', phoneRegex)
        const passwordResult = validateInput(password, 'Please enter your password', 'Your password should have a minimum of 6 characters, 1 capital letter, 1 special character eg @ and 1 number', passwordRegex)
        const confirmPasswordResult = validateConfirmPassword(password, confirmPassword, "Your passwords don't match")

        expect(firstNameResult).to.be.eq(true)
        expect(lastNameResult).to.be.eq(true)
        expect(emailResult).to.be.eq(true)
        expect(phoneNumberResult).to.be.eq(true)
        expect(passwordResult).to.be.eq(true)
        expect(confirmPasswordResult).to.be.eq(true)
    })
   
})