import LoginPage from  '../pageobjects/login.page';

describe('My Login application', () => {
    beforeAll('Navigate to url', () => {
    browser.url("https://www.saucedemo.com/");
    })
    it('Should not login with empty password', async () => {
        await LoginPage.login('locked_out_user', '');
        await expect(LoginPage.errorBtn).toBeDisplayed();
        await expect(LoginPage.errorBtn).toHaveTextContaining(
            'Epic sadface: Password is required');
    });

    it('Should not login with invalid data', async () => {
        await LoginPage.login('locked_out_user', 'BaSP2022');
        await expect(LoginPage.errorBtn).toBeDisplayed();
        await expect(LoginPage.errorBtn).toHaveTextContaining(
            'Epic sadface: Username and password do not match any user in this service');
    });

    it('Should not login with valid data', async () => {
        await LoginPage.login('locked_out_user', 'secret_sauce');
        await expect(LoginPage.errorBtn).toBeDisplayed();
        await expect(LoginPage.errorBtn).toHaveTextContaining(
            'Epic sadface: Sorry, this user has been locked out.');
    });
});