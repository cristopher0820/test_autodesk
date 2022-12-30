import loginPage from  '../../../page_objects/loginPage/login.page'
import productsAndServPage from '../../../page_objects/pandsPage/productsAndServ.page'
import * as data_driven from '../../../data_driven/credentials.json'
import * as data_Products from '../../../data/ProductsServices/tileElements.json'

describe('NOVA-2557 Scenario #2: Verify All P&S tile key elements exist for main products', () => {
    it('UI should display P&S tile key elements exist for main products', async () => {

        const rdn_value = Math.floor(Math.random() * 5000);
        await browser.pause(rdn_value)

        await browser.setWindowSize(1936, 1064)
        const windowSize = await browser.getWindowSize();

        await loginPage.open(data_driven.Environment.STGP)
        await loginPage.login(data_driven.Credentials.MultiProductDeployment.UserMuli, data_driven.Credentials.MultiProductDeployment.PasswMulti);

        await productsAndServPage.lblPandS.waitForDisplayed()

        let producServices = data_Products.tiles;
        for(let ps in producServices) {
            const cardName = producServices[ps].cardName
            const badge = producServices[ps].badge
            const nameValue = producServices[ps].nameValue

            // Verify the search field exists
            const items = await productsAndServPage.listOfItemMuiCardContent()
            await expect(productsAndServPage.inpSearch).toBeExisting()

            await productsAndServPage.searchValidate(nameValue)
            console.log(cardName+": Search Item opens")
            
            // Verify Product/Service Title exist
            await expect(productsAndServPage.elmTitle(cardName)).toBeExisting()

            // Verify Badge image exis
            await expect(productsAndServPage.elmBadge(cardName, badge)).toBeExisting()

            // Verify Platform icon exist
            await expect(productsAndServPage.elmPlatformIcon(cardName)).toBeExisting()

            // Verify Short Description is bigger 100 symbols
            const txtShortDescription = await productsAndServPage.elmShortDescription(cardName)
            const txtResult = await txtShortDescription.getText()
            expect(txtResult.length>100).toBe(true)

            // Verify 3 Input elements are displayed: Year, Platform, Language
            const inpElements = await productsAndServPage.elmInputs(cardName)
            expect(inpElements).toHaveLength(3)

            // Verify Download button exist
            await expect(productsAndServPage.elmDownload(cardName)).toBeExisting()

            // Verify View details exist
            await expect(productsAndServPage.elmViewDetails(cardName)).toBeExisting()

            await browser.refresh()
            await browser.pause(4000)
        }

    });
});