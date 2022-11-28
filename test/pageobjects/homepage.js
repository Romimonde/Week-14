/**
 * sub page containing specific selectors and methods for a specific page
 */
class Homepage {
    /**
     * define selectors using getter methods
     */
    get logoutBtn () {
        return $('#logout_sidebar_link');
    }

    get menuBtn () {
        return $('#react-burger-menu-btn')
    }

    get dogImg () {
        return $('#item_4_img_link > img')
    }

    get inventoryImg () {
        return $('#item_4_img_link > img')
    }

    get addToCartBackpack () {
        return $('#add-to-cart-sauce-labs-backpack')
    }

    get removeBackpackBtn () {
        return $('#remove-sauce-labs-backpack')
    }

    get addToCartBikelight () {
        return $('#add-to-cart-sauce-labs-bike-light')
    }

    get removeBikelight () {
        return $('#remove-sauce-labs-bike-light')
    }

    get addToCartBoltTShirt () {
        return $('#add-to-cart-sauce-labs-bolt-t-shirt')
    }

    get removeBoltTshirt () {
        return $('#remove-sauce-labs-bolt-t-shirt')
    }

    get addToCartFleeceJacket () {
        return $('#add-to-cart-sauce-labs-fleece-jacket')
    }

    get removeFleeceJacket () {
        return $('#remove-sauce-labs-fleece-jacket')
    }

    get addToCartOnesie () {
        return $('#add-to-cart-sauce-labs-onesie')
    }

    get removeOnesie () {
        return $('#remove-sauce-labs-onesie')
    }

    get addToCartRedTShirt () {
        return $('#add-to-cart-test.allthethings()-t-shirt-(red)')
    }

    get removeRedTShirt () {
        return $('#remove-test.allthethings()-t-shirt-(red)')
    }

    get cartBtn () {
        return $('#shopping_cart_container > a')
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async logout () {
        await this.menuBtn.click();
        await browser.pause(1000);
        await this.logoutBtn.click();
    }
}

export default new Homepage();