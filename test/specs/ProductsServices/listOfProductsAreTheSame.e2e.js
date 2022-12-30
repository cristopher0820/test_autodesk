import loginPage from  '../../../page_objects/loginPage/login.page';
import productsAndServPage from '../../../page_objects/pandsPage/productsAndServ.page';
import * as data_driven from '../../../data_driven/credentials.json'
import expectedListOfProductsAndServices from '../../data/ProductsServices/listOfProductsandServices.json'

describe('Login on Portal Accounts  / Products and Services Count Match', () => {
    it('UI Should display all the Products and services returned by API', async () => {

        const rdn_value = Math.floor(Math.random() * 5000);
        await browser.pause(rdn_value)

        await loginPage.open(data_driven.Environment.STGP);
        await loginPage.login(data_driven.Credentials.SingleUserPointProductsLegSerial.Username, data_driven.Credentials.SingleUserPointProductsLegSerial.Password);

        await productsAndServPage.lblPandS.waitForDisplayed();
        await expect(productsAndServPage.lblPandS).toBeExisting();
        await expect(productsAndServPage.lblPandS).toHaveTextContaining(
            'All Products and Services');
        const lstProductsAreTheSame = await productsAndServPage.listOfProductsAreTheSame(expectedListOfProductsAndServices);
        expect(lstProductsAreTheSame).toBe(true);
    });
});


