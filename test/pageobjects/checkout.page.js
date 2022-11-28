/**
 * sub page containing specific selectors and methods for a specific page
 */
 class CheckoutPage {
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

    get errorBtn () {
        return $('<h3>')
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

    async checkout (firstName, lastName, zip) {
        await this.firstNameInput.setValue(firstName);
        await this.lastNameInput.setValue(lastName);
        await this.zipInput.setValue(zip);
        await this.continueBtn.click();
    }
}

export default new CheckoutPage();