import loginPage from  '../../../page_objects/loginPage/login.page'
import productsAndServPage from '../../../page_objects/pandsPage/productsAndServ.page'
import detailsPage from '../../../page_objects/detailsProducts/detailsPage.page.js'
import * as data_driven from '../../../data_driven/credentials.json'
import * as data_Products from '../../../data/ProductsServices/checkUpdates.json'

describe('NOVA-2563 Scenario #7: Check All available, published Updates for the product are displayed', () => {
    it('Availability Updates, Languages and Extensions buttons and items for a product on View Details page', async () => {

        const rdn_value = Math.floor(Math.random() * 5000);
        await browser.pause(rdn_value)
        
        await loginPage.open(data_driven.Environment.STGP)
        await loginPage.login(data_driven.Credentials.MultiProductDeployment.UserMuli, data_driven.Credentials.MultiProductDeployment.PasswMulti);

        await productsAndServPage.lblPandS.waitForDisplayed()

        let producServices = data_Products.tiles;
        for(let ps in producServices) {
            const cardName = producServices[ps].cardName
            const nameValue = producServices[ps].nameValue
            const txtYear = producServices[ps].year
            const updatesNum = producServices[ps].updates
            const languagesNum = producServices[ps].languages
            const extensionsNum = producServices[ps].extensions
            //console.log("Download options: "+JSON.stringify(options))
            

            await productsAndServPage.elmPandS()

            await browser.setWindowSize(1936, 1064)
            const windowSize = await browser.getWindowSize();
            //console.log(windowSize);

            // Verify the search field exists
            const items = await productsAndServPage.listOfItemMuiCardContent()
            await expect(productsAndServPage.inpSearch).toBeExisting()

            await productsAndServPage.searchValidate(nameValue)
            console.log(cardName+": Search Item opens")

            await expect(productsAndServPage.elmProductCard(cardName)).toBeExisting();
            console.log(cardName+": Card Item opens")

            await browser.pause(5000)


            
            await productsAndServPage.clickViewDetails(cardName);
            console.log("ViewDetails page opens")

            await detailsPage.clickTabsYearList(txtYear)

            if (updatesNum>=1) {
                // Check Updates items should exist
                const resUpdatesItems = await detailsPage.elmUpdatesItems()
                console.log("updatesNum: "+updatesNum)
                console.log("resUpdatesItems: "+resUpdatesItems)
                expect(resUpdatesItems==updatesNum).toBe(true)
            }

            if (languagesNum>=1) {
                // Check Languages items should exist
                const resLanguagesItems = await detailsPage.elmLanguagesItems()
                console.log("languagesNum: "+languagesNum)
                console.log("resLanguagesItems: "+resLanguagesItems)
                expect(resLanguagesItems==languagesNum).toBe(true)
            }

            if (extensionsNum>=1) {
                // Check Extensions items should exist
                const resExtensionsItems = await detailsPage.elmExtensionsItems()
                console.log("extensionssNum: "+extensionsNum)
                console.log("resExtensionsItems: "+resExtensionsItems)
                expect(resExtensionsItems==extensionsNum).toBe(true)
            }

            await detailsPage.clickBackButton()
            await productsAndServPage.lblPandS.waitForDisplayed()

            console.log(nameValue+": The script end")
        }

    });
});