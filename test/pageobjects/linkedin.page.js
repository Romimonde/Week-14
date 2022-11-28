/**
 * sub page containing specific selectors and methods for a specific page
 */
 class linkedInPage {
    /**
     * define selectors using getter methods
     */
    get linkedInIcon () {
        return $('body > div > header > nav > a > icon > svg');
    }
}

export default new linkedInPage();