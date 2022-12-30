import loginPage from  '../../../page_objects/loginPage/login.page'
import productsAndServPage from '../../../page_objects/pandsPage/productsAndServ.page'
import * as data_driven from '../../../data_driven/credentials.json'
import * as data_Products from '../../../data/ProductsServices/checkDropDownElements.json'

describe('NOVA-2558 Scenario #3: Validate functionality of Drop-down elements', () => {
    it('functionality of Drop-down elements should open well and contains all items required', async () => {
        
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
            const platformCount = producServices[ps].platformCount
            const languageCount = producServices[ps].languageCount


            //await productsAndServPage.elmPandS()

            await browser.setWindowSize(1936, 1064)
            const windowSize = await browser.getWindowSize();
            //console.log(windowSize);

            await browser.refresh()

            // Verify the search field exists
            const items = await productsAndServPage.listOfItemMuiCardContent()
            await expect(productsAndServPage.inpSearch).toBeExisting()

            await productsAndServPage.searchValidate(nameValue)
            console.log(cardName+": Search Item opens")

            await expect(productsAndServPage.elmProductCard(cardName)).toBeExisting();
            console.log(cardName+": Card Item opens")

            await browser.pause(5000)



            
            // Verify Year Drop-Down element contains required number of items
            const result1 = await productsAndServPage.elmInputYear(cardName)
            expect(result1==yearCount).toBe(true)

            // Verify Platform Drop-Down element contains required number of items
            const result2 = await productsAndServPage.elmInputPlatform(cardName)
            expect(result2==platformCount).toBe(true)

            // Verify Language Drop-Down element contains required number of items
            const result3 = await productsAndServPage.elmInputLanguage(cardName)
            expect(result3>=languageCount).toBe(true)

            await browser.refresh()
            await browser.pause(4000)
        }

    });
});