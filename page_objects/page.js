import * as data_driven from '../data_driven/credentials.json'
/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    open(strPath) {
        browser.maximizeWindow();
        return browser.url(strPath);
    }
}