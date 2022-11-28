import LoginPage from  '../pageobjects/login.page';
import Homepage from  '../pageobjects/homepage';
import CartPage from '../pageobjects/cart.page';
import checkoutPage from '../pageobjects/checkout.page';

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
        await Homepage.removeOnesie.click();
    });

     it('Should not checkout with empty fields', async () => {
        await Homepage.cartBtn.click();
        await expect(browser).toHaveUrl("https://www.saucedemo.com/cart.html")
        await CartPage.checkoutBtn.click();
        await checkoutPage.checkout('', '', '');
        await expect(checkoutPage.errorBtn).toBeDisplayed();
    });

    it('Should not checkout with empty name field', async () => {
        await checkoutPage.firstNameInput.setValue([' ', 'Backspace'], { translateToUnicode: true });
        await checkoutPage.checkout('', 'Mondello', '30000');
        await expect(checkoutPage.errorBtn).toBeDisplayed();
    });

    it('Should not checkout with empty last name field', async () => {
        await checkoutPage.lastNameInput.setValue([' ', 'Backspace'], { translateToUnicode: true });
        await checkoutPage.zipInput.setValue([' ', 'Backspace'], { translateToUnicode: true });
        await checkoutPage.checkout('Romina', '', '30000');
        await expect(checkoutPage.errorBtn).toBeDisplayed();
    });

    it('Should not checkout with empty zip code field', async () => {
        await checkoutPage.firstNameInput.setValue([' ', 'Backspace'], { translateToUnicode: true });
        await checkoutPage.zipInput.setValue([' ', 'Backspace'], { translateToUnicode: true });
        await checkoutPage.checkout('Romina', 'Mondello', '');
        await expect(checkoutPage.errorBtn).toBeDisplayed();
    });

    it('Should cancel purchase', async () => {
        await checkoutPage.cancelBtn.click();
        await expect(browser).toHaveUrl("https://www.saucedemo.com/cart.html");
        await CartPage.continueShopBtn.click();
        await expect(browser).toHaveUrl("https://www.saucedemo.com/inventory.html");
        await expect(Homepage.inventoryImg).toBeDisplayed();
    });

    it('Should succesully purchase', async () => {
        await Homepage.cartBtn.click();
        await CartPage.checkoutBtn.click();
        await checkoutPage.checkout('Romina', 'Mondello', '30000');
        await checkoutPage.finishBtn.click();
        await expect(checkoutPage.ponyImg).toBeDisplayed();
        await expect(checkoutPage.backHomeBtn).toBeDisplayed();
        await checkoutPage.backHomeBtn.click();
    });
});