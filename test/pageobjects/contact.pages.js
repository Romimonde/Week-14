/**
 * sub page containing specific selectors and methods for a specific page
 */
 class contactPages {
    /**
     * define selectors using getter methods
     */
    get aboutUsBtn () {
        return $('#about_sidebar_link')
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
 }
     export default new contactPages ();