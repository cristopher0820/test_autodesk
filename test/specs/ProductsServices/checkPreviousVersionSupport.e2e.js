import loginPage from  '../../../page_objects/loginPage/login.page'
import productsAndServPage from '../../../page_objects/pandsPage/productsAndServ.page'
import detailsPage from '../../../page_objects/detailsProducts/detailsPage.page.js'
import * as data_driven from '../../../data_driven/credentials.json'
import * as data_Products from '../../../data/ProductsServices/checkPreviousVersionSupport.json'

describe('NOVA-2561 Scenario #6: Previous Version Support', () => {
    it('functionality of previous Versions Support on Details page: all tabs, long description and Download options', async () => {

        const rdn_value = Math.floor(Math.random() * 5000);
        await browser.pause(rdn_value)
        
        await loginPage.open(data_driven.Environment.STGP)
        await loginPage.login(data_driven.Credentials.MultiProductDeployment.UserMuli, data_driven.Credentials.MultiProductDeployment.PasswMulti);

        //await productsAndServPage.lblPandS.waitForDisplayed()

        let producServices = data_Products.tiles;
        for(let ps in producServices) {
            const cardName = producServices[ps].cardName
            const nameValue = producServices[ps].nameValue
            const yearCount = producServices[ps].yearCount
            const years = producServices[ps].years
            //console.log("Download options: "+JSON.stringify(options))
            

            //await productsAndServPage.elmPandS()

            await browser.setWindowSize(1936, 1064)
            const windowSize = await browser.getWindowSize();
            //console.log(windowSize);

            await browser.refresh()
            await browser.pause(5000)

            // Verify the search field exists
            const items = await productsAndServPage.listOfItemMuiCardContent()
            await expect(productsAndServPage.inpSearch).toBeExisting()

            await productsAndServPage.searchValidate(nameValue)
            console.log(cardName+": Search Item opens")

            await expect(productsAndServPage.elmProductCard(cardName)).toBeExisting();
            console.log(cardName+": Card Item opens")

            await browser.pause(5000)


            
            await productsAndServPage.clickViewDetails(cardName);

            // Validate the current version along with 3 previous versions of the product are displayed as unique tabs
            // Validate the long description text for each supported Previous Version is correct in English (for main products and services)
            for(let i=yearCount; i>=1; i--){
                const txtResult = await detailsPage.elmTabsYearList(i)
                expect(txtResult.length>100).toBe(true)
            }

            // Validate the Access options are correct for each supported Previous Version of the product
            for(let i=yearCount; i>=1; i--){
                const txtResult = await detailsPage.elmAccessList(i, years)
                expect(txtResult).toBe(true)
            }

            await detailsPage.clickBackButton()
            await productsAndServPage.lblPandS.waitForDisplayed()

            await browser.refresh()
            await browser.pause(4000)
        }

    });
});