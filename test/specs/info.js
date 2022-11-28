import LoginPage from  '../pageobjects/login.page';
import Homepage from  '../pageobjects/homepage';

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
        await expect(browser).toHaveUrl("https://saucelabs.com/")
    });

/*      it('Should display Swag labs Twitter page', async () => {
        await browser.back();
        await Homepage.twitterIcon.click();
        await expect(browser).toHaveUrl("https://twitter.com/saucelabs")
    });

    it('Should display Swag labs Facebook page', async () => {
        await browser.back();
        await Homepage.facebookIcon.click();
        await expect(browser).toHaveUrl("https://www.facebook.com/saucelabs")
    });

    it('Should display Swag labs LinkedIn page', async () => {
        await browser.back();
        await Homepage.linkedInIcon.click();
        await expect(browser).toHaveUrl("https://www.linkedin.com/company/sauce-labs/")
    }); */
});