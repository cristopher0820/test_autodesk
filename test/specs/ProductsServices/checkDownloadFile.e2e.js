import loginPage from  '../../../page_objects/loginPage/login.page'
import productsAndServPage from '../../../page_objects/pandsPage/productsAndServ.page'
import * as data_driven from '../../../data_driven/credentials.json'
import * as data_Products from '../../../data/ProductsServices/checkDownloadFile.json'

// Load the libraries we need for path/URL manipulation & assertions
const path = require('path')
const fs = require('fs')
const { URL } = require('url')

const waitForFileExists = require('../../../util/waitForFileExists')

describe('NOVA-2570 Scenario #11.1: Validate all 3 download options work well', () => {
    it('validate that Install button options work well', async () => {

        const rdn_value = Math.floor(Math.random() * 5000);
        await browser.pause(rdn_value)

        await loginPage.open(data_driven.Environment.STGP)
        await loginPage.login(data_driven.Credentials.MultiProductDeployment.UserMuli, data_driven.Credentials.MultiProductDeployment.PasswMulti);

        await productsAndServPage.lblPandS.waitForDisplayed()

        let producServices = data_Products.tiles;
        for(let ps in producServices) {
            const cardName = producServices[ps].cardName
            const nameValue = producServices[ps].nameValue
            const fileName = producServices[ps].fileName
            //console.log("Download options: "+JSON.stringify(options))

            await productsAndServPage.elmPandS()

            await browser.setWindowSize(1936, 1064)
            //const windowSize = await browser.getWindowSize();
            //console.log(windowSize);

            // Verify the search field exists
            const items = await productsAndServPage.listOfItemMuiCardContent()
            await expect(productsAndServPage.inpSearch).toBeExisting()

            await productsAndServPage.searchValidate(nameValue)
            console.log(cardName+": Search Item opens")

            await expect(productsAndServPage.elmProductCard(cardName)).toBeExisting();
            console.log(cardName+": Card Item opens")

            await browser.pause(5000)

            await productsAndServPage.clickInstallBtn(cardName);
            console.log("Install button is clicked")

            await productsAndServPage.clickAcceptLnk(cardName);
            console.log("Accept link is clicked")

            const filePath = path.join(global.downloadDir, fileName)
            console.log("filePath: "+filePath)

            await browser.call(function (){
                // call our custom function that checks for the file to exist
                return waitForFileExists(filePath, 60000)
            });
            
            console.log(nameValue+": The #1 script end - Install button")
        }
    });

    it('validate that Download drop-down option work well', async () => {
        let producServices = data_Products.tiles;

        await browser.refresh()

        for(let ps in producServices) {
            const cardName2 = producServices[ps].cardName2
            const nameValue2 = producServices[ps].nameValue2
            const fileName2 = producServices[ps].fileName2

            await productsAndServPage.elmPandS()

            await browser.setWindowSize(1936, 1064)
            const windowSize = await browser.getWindowSize();

            // Verify the search field exists
            const items = await productsAndServPage.listOfItemMuiCardContent()
            await expect(productsAndServPage.inpSearch).toBeExisting()

            await productsAndServPage.searchValidate(nameValue2)
            console.log(cardName2+": Search Item opens")

            await expect(productsAndServPage.elmProductCard(cardName2)).toBeExisting();
            console.log(cardName2+": Card Item opens")

            await productsAndServPage.clickDownloadDropDownArrow(cardName2);

            await productsAndServPage.clickDownloadLnk(cardName2);
            console.log("Download link is clicked")

            await browser.pause(5000)

            const filePath2 = path.join(global.downloadDir, fileName2)
            console.log("filePath1: "+filePath2)

            await browser.call(function (){
                // call our custom function that checks for the file to exist
                return waitForFileExists(filePath2, 90000)
            });

            console.log(nameValue2+": The #2 script end - Download drop-down")
        }
    });
});