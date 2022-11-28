/**
 * sub page containing specific selectors and methods for a specific page
 */
 class cartPage {
    /**
     * define selectors using getter methods
     */

     get removeBackpackBtn () {
        return $('#remove-sauce-labs-backpack')
    }

    get removeBikelight () {
        return $('#remove-sauce-labs-bike-light')
    }

    get removeBoltTshirt () {
        return $('#remove-sauce-labs-bolt-t-shirt')
    }

    get removeFleeceJacket () {
        return $('#remove-sauce-labs-fleece-jacket')
    }

    get removeOnesie () {
        return $('#remove-sauce-labs-onesie')
    }

    get removeRedTShirt () {
        return $('#remove-test.allthethings()-t-shirt-(red)')
    }

    get continueShopBtn () {
        return $('#continue-shopping')
    }

    get checkoutBtn () {
        return $('#checkout')
    }

}

export default new cartPage();