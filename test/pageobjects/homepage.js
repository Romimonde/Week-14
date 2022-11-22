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