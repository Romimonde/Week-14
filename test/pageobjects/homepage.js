class Homepage {

    get logoutBtn () {
        return $('#logout_sidebar_link');
    }

    get menuBtn () {
        return $('#react-burger-menu-btn')
    }

    get aboutBtn () {
        return $('#about_sidebar_link')
    }

    get dogImg () {
        return $('#item_4_img_link > img')
    }

    get inventoryImg () {
        return $('.inventory_item_img')
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

    get twitterIcon () {
        return $('#page_wrapper > footer > ul > li.social_twitter')
    }

    get facebookIcon () {
        return $('#page_wrapper > footer > ul > li.social_facebook > a')
    }

    get linkedInIcon () {
        return $('#page_wrapper > footer > ul > li.social_linkedin > a')
    }

     get addToCartRedTShirt () {
        return $('//*[@id="add-to-cart-test.allthethings()-t-shirt-(red)"]')
    }

    get removeRedTShirt () {
        return $('//*[@id="remove-test.allthethings()-t-shirt-(red)"]')
    }

    get cartBtn () {
        return $('#shopping_cart_container > a')
    }

    async logout () {
        await this.menuBtn.click();
        await browser.pause(1000);
        await this.logoutBtn.click();
    }
}

export default new Homepage();