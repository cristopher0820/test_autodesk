import loginPage from  '../../../page_objects/loginPage/login.page'
import productsAndServPage from '../../../page_objects/pandsPage/productsAndServ.page'
import detailsPage from '../../../page_objects/detailsProducts/detailsPage.page.js'
import generateLicense from '../../../page_objects/generateLicensePage/generateLicense.page.js'
import * as data_driven from '../../../data_driven/credentials.json'
import * as data_Products from '../../../data/ProductsServices/checkGenerateLicense.json'

describe('NOVA-2566 Scenario #10: View Generate Network License File page opens well', () => {
    it('Availability Generate Network License File for a product on View License Details window', async () => {

        const rdn_value = Math.floor(Math.random() * 5000);
        await browser.pause(rdn_value)

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
            console.log(cardName+": ViewDetails page opens")

            await detailsPage.clickLicenseDetails()
            console.log(cardName+": LicenseDetails window opens")

            await detailsPage.clickGenerateLicense()
            console.log(cardName+": Generate License page opens")

            await browser.pause(3000)

            // Check Generate Network License File title exists and available
            await expect(generateLicense.elmGenerateNetworkLicenseFile()).toBeExisting()

            // Check Single Server title exists and available
            await expect(generateLicense.elmSingleServer()).toBeExisting()

            // Check Redundant Servers title exists and available
            await expect(generateLicense.elmRedundantServers()).toBeExisting()

            // Check Distributed Server title exists and available
            await expect(generateLicense.elmDistributedServer()).toBeExisting()

            browser.back()

            console.log(nameValue+": The script end")

            await browser.refresh()
            await browser.pause(4000)
        }

    });
});