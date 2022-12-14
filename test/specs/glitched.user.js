import LoginPage from  '../pageobjects/login.page';
import Homepage from  '../pageobjects/homepage';

describe('Glitched user login form', () => {
    beforeAll('Navigate to url', () => {
    browser.url("https://www.saucedemo.com/");
    })
    it('Should not login with empty password', async () => {
        await LoginPage.login('performance_glitch_user', '');
        await expect(LoginPage.errorBtn).toBeDisplayed();
        await expect(LoginPage.errorBtn).toHaveTextContaining(
            'Epic sadface: Password is required');
    });

    it('Should not login with invalid data', async () => {
        await LoginPage.login('performance_glitch_user', 'BaSP2022');
        await expect(LoginPage.errorBtn).toBeDisplayed();
        await expect(LoginPage.errorBtn).toHaveTextContaining(
            'Epic sadface: Username and password do not match any user in this service');
    });

    it('Should login with valid data', async () => {
        await LoginPage.login('performance_glitch_user', 'secret_sauce');
        await expect (Homepage.inventoryImg.waitForDisplayed({timeout: 10000}));
    });

    it('Should logout', async () => {
        await Homepage.menuBtn.waitForClickable();
        await Homepage.menuBtn.click();
        await Homepage.logoutBtn.waitForClickable();
        await Homepage.logoutBtn.click()
        await expect(browser).toHaveUrl("https://www.saucedemo.com/");
    });
});