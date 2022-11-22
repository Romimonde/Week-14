import LoginPage from  '../pageobjects/login.page';
import Homepage from  '../pageobjects/homepage';

describe('My Login application', () => {
    beforeAll('Navigate to url', () => {
    browser.url("https://www.saucedemo.com/");
    })
    it('Should not login with empty password', async () => {
        await LoginPage.login('problem_user', '');
        await expect(LoginPage.errorBtn).toBeDisplayed();
        await expect(LoginPage.errorBtn).toHaveTextContaining(
            'Epic sadface: Password is required');
    });

    it('Should not login with invalid data', async () => {
        await LoginPage.login('problem_user', 'BaSP2022');
        await expect(LoginPage.errorBtn).toBeDisplayed();
        await expect(LoginPage.errorBtn).toHaveTextContaining(
            'Epic sadface: Username and password do not match any user in this service');
    });

    it('Should login with valid data', async () => {
        await LoginPage.login('problem_user', 'secret_sauce');
        await expect (Homepage.dogImg).toBeDisplayed();
    });

    it('Should logout', async () => {
        await Homepage.menuBtn.click();
        await Homepage.logoutBtn.click()
        await expect(browser).toHaveUrl("https://www.saucedemo.com/");
    });
});