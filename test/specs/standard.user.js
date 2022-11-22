import LoginPage from  '../pageobjects/login.page';
import Homepage from  '../pageobjects/homepage';

describe('My Login application', () => {
    beforeAll('Navigate to url', () => {
    browser.url("https://www.saucedemo.com/");
    })
    it('Should not login with empty inputs', async () => {
        await LoginPage.login('', '');
        await expect(LoginPage.errorBtn).toBeDisplayed();
        await expect(LoginPage.errorBtn).toHaveTextContaining(
            'Epic sadface: Username is required');
    });

    it('Should not login with empty password', async () => {
        await LoginPage.login('standard_user', '');
        await expect(LoginPage.errorBtn).toBeDisplayed();
        await expect(LoginPage.errorBtn).toHaveTextContaining(
            'Epic sadface: Password is required');
    });

    it('Should not login with empty username', async () => {
        await LoginPage.login('', 'secret_sauce');
        await expect(LoginPage.errorBtn).toBeDisplayed();
        await expect(LoginPage.errorBtn).toHaveTextContaining(
            'Epic sadface: Username is required');
    });

    it('Should not login with invalid data', async () => {
        await LoginPage.login('romimonde', 'secret_sauce');
        await expect(LoginPage.errorBtn).toBeDisplayed();
        await expect(LoginPage.errorBtn).toHaveTextContaining(
            'Epic sadface: Username and password do not match any user in this service');
    });

    it('Should login with valid data', async () => {
        await LoginPage.login('standard_user', 'secret_sauce');
        await expect(browser).toHaveUrl("https://www.saucedemo.com/inventory.html");
    });

    it('Should logout', async () => {
        await Homepage.menuBtn.click();
        await Homepage.logoutBtn.click();
        await browser.refresh();
        await expect(browser).toHaveUrl("https://www.saucedemo.com/");
    });
});