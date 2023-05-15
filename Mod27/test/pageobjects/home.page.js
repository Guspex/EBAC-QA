

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    get title(){
        return browser.getTitle()
    }
    open(){
        return super.open("/")
    }
}

module.exports = new HomePage();
