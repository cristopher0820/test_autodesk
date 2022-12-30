import loginPage from  '../../../page_objects/loginPage/login.page'
import productsAndServPage from '../../../page_objects/pandsPage/productsAndServ.page'
import * as data_driven from '../../../data_driven/credentials.json'
import * as data_Products from '../../../data/ProductsServices/listOfProductsBasic.json'

describe('NOVA-2556 Scenario #1: Verify basic elements exist / validate Search element works well', () => {
    it('UI should display basic elements, Search should work well', async () => {

        const rdn_value = Math.floor(Math.random() * 5000);
        await browser.pause(rdn_value)
        
        await loginPage.open(data_driven.Environment.STGP)
        await loginPage.login(data_driven.Credentials.MultiProductDeployment.UserMuli, data_driven.Credentials.MultiProductDeployment.PasswMulti);

        //await productsAndServPage.lblPandS.waitForDisplayed()

        await browser.pause(5000)

        // Verify the number of P&S items 
        const items = await productsAndServPage.listOfItemMuiCardContent()
        console.log("items.length: " + items.length);
        console.log("ItemsNumber: " + data_Products.ItemsNumber);
        expect(items.length>=data_Products.ItemsNumber).toBe(true)

        // Verify the top banner exists
        //await expect(productsAndServPage.divBanner).toBeExisting()
        //console.log("divBanner is shown");

        // Verify the search field exists
        await expect(productsAndServPage.inpSearch).toBeExisting()

        // Validate Search functionality works as expected
        const resultSearch = await productsAndServPage.searchValidate(data_Products.SearchPhrase)
        console.log("resultSearch: " + resultSearch);
        console.log("SearchProduct: " + data_Products.SearchProduct);
        expect(resultSearch).toBe(data_Products.SearchProduct)
    });
});