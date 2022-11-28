import LoginPage from  '../pageobjects/login.page';
import Homepage from  '../pageobjects/homepage';
import linkedinPage from '../pageobjects/linkedin.page';

describe('Info pages', () => {
    beforeAll('Navigate to url', () => {
    browser.url("https://www.saucedemo.com/");
    })
    it('Should display Swag labs About page', async () => {
        await LoginPage.login('standard_user', 'secret_sauce');
        await Homepage.menuBtn.waitForClickable();
        await Homepage.menuBtn.click();
        await Homepage.aboutBtn.waitForClickable();
        await Homepage.aboutBtn.click();
        await expect(browser).toHaveUrl("https://saucelabs.com/");
    });

      it('Should display Swag labs Twitter page', async () => {
        await browser.back();
        await Homepage.twitterIcon.click();
        await browser.switchWindow('https://twitter.com/saucelabs');
        await expect(browser).toHaveUrl("https://twitter.com/saucelabs");
        await browser.switchWindow('https://www.saucedemo.com/inventory.html');
    });

     it('Should display Swag labs Facebook page', async () => {
        await Homepage.facebookIcon.click();
        await browser.switchWindow("https://www.facebook.com/saucelabs");
        await expect(browser).toHaveUrl("https://www.facebook.com/saucelabs");
        await browser.switchWindow("https://www.saucedemo.com/inventory.html");
    });

    it('Should display Swag labs LinkedIn page', async () => {
        await Homepage.linkedInIcon.click();
        await browser.switchWindow('Iniciar sesión | LinkedIn');
        await expect(linkedinPage.linkedInIcon).toBeDisplayed();
        await browser.switchWindow("https://www.saucedemo.com/inventory.html");
        await Homepage.menuBtn.click();
        await Homepage.logoutBtn.click();
        await expect(browser).toHaveUrl("https://www.saucedemo.com/");
    });
});