import loginPage from  '../../../page_objects/loginPage/login.page';
import productsAndServPage from '../../../page_objects/pandsPage/productsAndServ.page';
import licensesProduct from '../../../page_objects/detailsProducts/detailsPage.page';
import * as data_driven from '../../../data_driven/credentials.json'
import * as data_Products from '../../../data/ProductsServices/listOfProductsAndLicenses.json'

describe('Login on Portal Accounts  / Versions ans Licenses', () => {
    it('UI Should display Versions ans Licenses, on UI Should be Available', async () => {

        const rdn_value = Math.floor(Math.random() * 5000);
        await browser.pause(rdn_value)

        await loginPage.open(data_driven.Environment.STGP);
        await loginPage.login(data_driven.Credentials.MultiProductDeployment.UserMuli, data_driven.Credentials.MultiProductDeployment.PasswMulti);

        await productsAndServPage.lblPandS.waitForDisplayed();
        await expect(productsAndServPage.lblPandS).toBeExisting();
        await expect(productsAndServPage.lblPandS).toHaveTextContaining('All Products and Services');

        await productsAndServPage.listOfProductsLicenses(data_Products);
        const licensesAreTheSame = await licensesProduct.listOfLicenseAreTheSame(data_Products);
        expect(licensesAreTheSame).toBe(true);
    });
});


