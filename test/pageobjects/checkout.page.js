/**
 * sub page containing specific selectors and methods for a specific page
 */
 class checkoutPage {
    /**
     * define selectors using getter methods
     */

    get firstNameInput () {
        return $('#first-name')
    }

    get lastNameInput () {
        return $('#last-name')
    }

    get zipInput () {
        return $('#postal-code')
    }

    get continueBtn () {
        return $('#continue')
    }

    get cancelBtn () {
        return $('#cancel')
    }

    get finishBtn () {
        return $('#finish')
    }

    get ponyImg () {
        return $('.pony_express')
    }

    get backHomeBtn () {
        return $('#back-to-products')
    }
}

export default new checkoutPage();