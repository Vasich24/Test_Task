const LoginPage = require('../pageobjects/login.page');
const constants = require('../../Constants/constants');


describe('My Login application', () => {
    before (async() => {
        await browser.url(constants.BASE_URL);
        await LoginPage.open();
        await expect(browser).toHaveTitle('Login');
    }); 
    beforeEach(async()=> {
        await LoginPage.open();
        await LoginPage.inputPassword.clearValue()
        await LoginPage.inputUsername.clearValue()
    });

    it('login with empty data', async () => {
        await LoginPage.login()
        await expect(LoginPage.errorMsgLog).toHaveText('Please enter username.')
        await expect(LoginPage.errorMsgPass).toHaveText('Please enter your password.')
    });

    it('login with empty username field', async () => {
        await LoginPage.login('',constants.PASSWORD)
        await expect(LoginPage.errorMsgLog).toHaveText('Please enter username.')
        await expect(LoginPage.errorMsgPass).not.toBeDisplayed()
    });

    it('login with empty password field', async () => {
        await LoginPage.login(constants.USERNAME ,'')
        await expect(LoginPage.errorMsgPass).toHaveText('Please enter your password.')
        await expect(LoginPage.errorMsgLog).not.toBeDisplayed()
    });

    it('failed test-case', async () => {
        await LoginPage.login(constants.USERNAME, constants.PASSWORD);
        await expect(LoginPage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!');
    });
});


