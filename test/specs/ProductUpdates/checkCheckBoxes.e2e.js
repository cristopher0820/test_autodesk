import loginPage from  '../../../page_objects/loginPage/login.page'
import productUpdatesPage from '../../../page_objects/productUpdates/productUpdates.page'
import * as data_driven from '../../../data_driven/credentials.json'

// Load the libraries we need for path/URL manipulation & assertions
const path = require('path')
const fs = require('fs')
const { URL } = require('url')

const waitForFileExists = require('../../../util/waitForFileExists')

describe('NOVA-2730 Scenario #20: Check-boxes should allow to select and download needed Update items', () => {
    it('Check-boxes should allow to select and download needed Update items', async () => {

        const rdn_value = Math.floor(Math.random() * 5000);
        await browser.pause(rdn_value)
        
        await loginPage.open(data_driven.Environment.STGPU)
        await loginPage.login(data_driven.Credentials.MultiProductDeployment.UserMuli, data_driven.Credentials.MultiProductDeployment.PasswMulti);

        await productUpdatesPage.setReleaseDateAll('All')

        await productUpdatesPage.elmVirTable()

        await productUpdatesPage.setReleaseDateAll('All')

        await productUpdatesPage.clickFilters()
        await productUpdatesPage.clickFilter('type')
        await productUpdatesPage.clickFilterValue('type', 'Extension')
        await productUpdatesPage.clickApplyBtn()

        await productUpdatesPage.clickCheckBox('Revit Importer for 3ds Max 2023')
        await productUpdatesPage.clickCheckBox('Inventor Home 2023 English 152 RTM')
        await productUpdatesPage.clickCheckBox('BIM Interoperability Tools v7.2.7391.0 for Revit 2021')

        // Verify 3 items selected
        const txtSize = await productUpdatesPage.elmItemsSelected()
        const txtSizeResult = await txtSize.getText()
        expect(txtSizeResult=='3 items selected').toBe(true)
        console.log("Items selected: "+txtSizeResult)

        // Validate download package works well
        await productUpdatesPage.clickDownloadPackage()
        console.log("Download button is clicked")

        const filePath1 = path.join(global.downloadDir, 'RevitImporter2023.msi')
        console.log("filePath1: "+filePath1)

        const filePath2 = path.join(global.downloadDir, 'INV_HOME.exe')
        console.log("filePath2: "+filePath2)

        const filePath3 = path.join(global.downloadDir, 'BIM_Interop_Tools_7.2.7391.0_Revit_2021.msi')
        console.log("filePath3: "+filePath3)

        await browser.call(function (){
            // call our custom function that checks for the file to exist
            return waitForFileExists(filePath1, 40000)
        });

        await browser.call(function (){
            // call our custom function that checks for the file to exist
            return waitForFileExists(filePath2, 60000)
        });

        await browser.call(function (){
            // call our custom function that checks for the file to exist
            return waitForFileExists(filePath3, 60000)
        });

        console.log("The ond of the script: Check-boxes should allow to select and download needed Update items")
    });
});