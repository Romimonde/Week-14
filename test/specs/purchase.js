import LoginPage from  '../pageobjects/login.page';
import Homepage from  '../pageobjects/homepage';
import CartPage from '../pageobjects/cart.page';
import CheckoutPage from '../pageobjects/checkout.page';

describe('Purchase application', () => {
    beforeAll('Navigate to url', () => {
    browser.url("https://www.saucedemo.com/");
    })

    it('Should be able to remove all items from cart', async () => {
        await LoginPage.login('standard_user', 'secret_sauce');
        await expect(Homepage.inventoryImg).toBeDisplayed();
        await Homepage.addToCartBackpack.click();
        await Homepage.addToCartBikelight.click();
        await Homepage.addToCartBoltTShirt.click();
        await Homepage.addToCartFleeceJacket.click();
        await Homepage.addToCartOnesie.click();
        await Homepage.addToCartRedTShirt.click();
        await expect(Homepage.removeBackpackBtn).toBeClickable();
        await expect(Homepage.removeBikelight).toBeClickable();
        await expect(Homepage.removeBoltTshirt).toBeClickable();
        await expect(Homepage.removeFleeceJacket).toBeClickable();
        await expect(Homepage.removeOnesie).toBeClickable();
        await expect(Homepage.removeRedTShirt).toBeClickable();
        await Homepage.removeBoltTshirt.click();
        await Homepage.removeOnesie.click();
    });

     it('Should not checkout with empty fields', async () => {
        await Homepage.cartBtn.click();
        await expect(browser).toHaveUrl("https://www.saucedemo.com/cart.html")
        await CartPage.checkoutBtn.click();
        await CheckoutPage.checkout('', '', '');
        await expect(CheckoutPage.errorBtn).toBeDisplayed();
        await expect(CheckoutPage.errorBtn).toHaveText('Error: First Name is required');
    });

    it('Should not checkout with empty name field', async () => {
        await CheckoutPage.firstNameInput.setValue([' ', 'Backspace'], { translateToUnicode: true });
        await CheckoutPage.checkout('', 'Mondello', '30000');
        await expect(CheckoutPage.errorBtn).toBeDisplayed();
        await expect(CheckoutPage.errorBtn).toHaveText('Error: First Name is required');
    });

    it('Should not checkout with empty last name field', async () => {
        await CheckoutPage.lastNameInput.setValue([' ', 'Backspace'], { translateToUnicode: true });
        await CheckoutPage.zipInput.setValue([' ', 'Backspace'], { translateToUnicode: true });
        await CheckoutPage.checkout('Romina', '', '30000');
        await expect(CheckoutPage.errorBtn).toBeDisplayed();
        await expect(CheckoutPage.errorBtn).toHaveText('Error: Last Name is required');
    });

    it('Should not checkout with empty zip code field', async () => {
        await CheckoutPage.firstNameInput.setValue([' ', 'Backspace'], { translateToUnicode: true });
        await CheckoutPage.zipInput.setValue([' ', 'Backspace'], { translateToUnicode: true });
        await CheckoutPage.checkout('Romina', 'Mondello', '');
        await expect(CheckoutPage.errorBtn).toBeDisplayed();
        await expect(CheckoutPage.errorBtn).toHaveTextContaining('Error: Postal Code is required');
    });

    it('Should cancel purchase', async () => {
        await CheckoutPage.cancelBtn.click();
        await expect(browser).toHaveUrl("https://www.saucedemo.com/cart.html");
        await CartPage.continueShopBtn.click();
        await expect(browser).toHaveUrl("https://www.saucedemo.com/inventory.html");
        await expect(Homepage.inventoryImg).toBeDisplayed();
    });

    it('Should succesully purchase', async () => {
        await Homepage.cartBtn.click();
        await CartPage.checkoutBtn.click();
        await CheckoutPage.checkout('Romina', 'Mondello', '30000');
        await CheckoutPage.finishBtn.click();
        await expect(CheckoutPage.ponyImg).toBeDisplayed();
        await expect(CheckoutPage.backHomeBtn).toBeDisplayed();
        await CheckoutPage.backHomeBtn.click();
        await expect(browser).toHaveUrl("https://www.saucedemo.com/inventory.html");
        await Homepage.menuBtn.click();
        await Homepage.logoutBtn.click();
        await expect(browser).toHaveUrl("https://www.saucedemo.com/");
    });
});