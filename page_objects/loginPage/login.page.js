import Page from '../page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername() {
        return $('#userName');
    }

    get btnUsernameValidation() {
        return $('#verify_user_btn');
    }

    get inputPassword() {
        return $('#password');
    }

    get btnSubmit() {
        return $('#btnSubmit');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.btnUsernameValidation.click();
        await this.inputPassword.waitForDisplayed();
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open(strENV) {
        return super.open(strENV);
       
    }
}

export default new LoginPage();
