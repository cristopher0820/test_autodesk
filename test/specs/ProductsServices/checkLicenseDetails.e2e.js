import loginPage from  '../../../page_objects/loginPage/login.page'
import productsAndServPage from '../../../page_objects/pandsPage/productsAndServ.page'
import detailsPage from '../../../page_objects/detailsProducts/detailsPage.page.js'
import * as data_driven from '../../../data_driven/credentials.json'
import * as data_Products from '../../../data/ProductsServices/checkLicenseDetails.json'

describe('NOVA-2565 Scenario #9: View License Details Page opens well', () => {
    it('Availability License related information for a product on View License Details window', async () => {

        const rdn_value = Math.floor(Math.random() * 5000);
        await browser.pause(rdn_value)
        
        await browser.maximizeWindow()

        await loginPage.open(data_driven.Environment.STGP)
        await loginPage.login(data_driven.Credentials.MultiProductDeployment.UserMuli, data_driven.Credentials.MultiProductDeployment.PasswMulti);

        //await productsAndServPage.lblPandS.waitForDisplayed()

        let producServices = data_Products.tiles;
        for(let ps in producServices) {
            const cardName = producServices[ps].cardName
            const nameValue = producServices[ps].nameValue
            //console.log("Download options: "+JSON.stringify(options))

            //await productsAndServPage.elmPandS()

            await browser.setWindowSize(1936, 1064)
            //await browser.maximizeWindow()
            const windowSize = await browser.getWindowSize();
            console.log(windowSize);

            // Verify the search field exists
            const items = await productsAndServPage.listOfItemMuiCardContent()
            await expect(productsAndServPage.inpSearch).toBeExisting()

            await productsAndServPage.searchValidate(nameValue)
            console.log(cardName+": Search Item opens")

            await browser.pause(5000)
            
            await productsAndServPage.clickViewDetails(cardName);
            console.log(cardName+": ViewDetails page opens")

            await detailsPage.clickLicenseDetails();
            console.log(cardName+": LicenseDetails window opens")

            // Check Generate Network License file link exists and available
            await expect(detailsPage.elmGenerateNetworkLicense()).toBeExisting()

            // Verify Serial Number exists and valid
            const result1 = await detailsPage.elmSerialNumberTableOne()
            expect(result1.length==12).toBe(true)

            const result2 = await detailsPage.elmSerialNumberTableTwo()
            expect(result2.length==5).toBe(true)

            // Check Get Help file link exists and available
            await expect(detailsPage.elmGetHelp()).toBeExisting()

            await browser.pause(3000)

            browser.keys("Escape")


            await detailsPage.clickBackButton()
            await productsAndServPage.lblPandS.waitForDisplayed()

            console.log(nameValue+": The script end")
        }

    });
});