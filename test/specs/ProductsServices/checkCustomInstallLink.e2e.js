import loginPage from  '../../../page_objects/loginPage/login.page'
import productsAndServPage from '../../../page_objects/pandsPage/productsAndServ.page'
import * as data_driven from '../../../data_driven/credentials.json'
import * as data_Products from '../../../data/ProductsServices/checkDownloadFile.json'

// Load the libraries we need for path/URL manipulation & assertions
const path = require('path')
const fs = require('fs')
const { URL } = require('url')

const waitForFileExists = require('../../../util/waitForFileExists')

describe('NOVA-2570 Scenario #11.2: Validate Custom Install link work well', () => {
    it('validate that Custom Install link work well', async () => {

        const rdn_value = Math.floor(Math.random() * 5000);
        await browser.pause(rdn_value)

        await loginPage.open(data_driven.Environment.STGP)
        await loginPage.login(data_driven.Credentials.MultiProductDeployment.UserMuli, data_driven.Credentials.MultiProductDeployment.PasswMulti);

        await productsAndServPage.lblPandS.waitForDisplayed()

        let producServices = data_Products.tiles;

        await browser.refresh()

        for(let ps in producServices) {
            const cardName = producServices[ps].cardName
            const nameValue = producServices[ps].nameValue
            const plc = producServices[ps].plc

            await productsAndServPage.elmPandS()

            await browser.setWindowSize(1936, 1064)
            const windowSize = await browser.getWindowSize();

            // Verify the search field exists
            const items = await productsAndServPage.listOfItemMuiCardContent()
            await expect(productsAndServPage.inpSearch).toBeExisting()

            await productsAndServPage.searchValidate(nameValue)
            console.log(cardName+": Search Item opens")

            await expect(productsAndServPage.elmProductCard(cardName)).toBeExisting();
            console.log(cardName+": Card Item opens")

            await productsAndServPage.clickDownloadDropDownArrow(cardName);
            console.log("Download Drop-Down Arrow is clicked")

            await productsAndServPage.clickCustomInstallLnk(cardName);
            console.log("Custom Install link is clicked")

            await browser.pause(5000)

            const expUrl = "https://stg-manage.autodesk.com/products/deployments/create?plc="+plc
            console.log("expUrl: " + expUrl);

            expect(browser).toHaveUrl(expUrl)
            
            console.log(nameValue+": The #3 script end - Custom Install link")
        }
    });
});