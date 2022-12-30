import loginPage from  '../../../page_objects/loginPage/login.page'
import productUpdatesPage from '../../../page_objects/productUpdates/productUpdates.page'
import * as data_driven from '../../../data_driven/credentials.json'
import * as data_ProductUpdates from '../../../data/ProductUpdates/updateElements.json'

// Load the libraries we need for path/URL manipulation & assertions
const path = require('path')
const fs = require('fs')
const { URL } = require('url')

const waitForFileExists = require('../../../util/waitForFileExists')

describe('NOVA-2726 Scenario #16: Download Update or Extension file', () => {
    it('Download Update file should work well', async () => {

        const rdn_value = Math.floor(Math.random() * 5000);
        await browser.pause(rdn_value)
        
        await loginPage.open(data_driven.Environment.STGPU)
        await loginPage.login(data_driven.Credentials.MultiProductDeployment.UserMuli, data_driven.Credentials.MultiProductDeployment.PasswMulti);

        await productUpdatesPage.setReleaseDateAll('All')

        await productUpdatesPage.elmVirTable()

        let updateData = data_ProductUpdates.details
        console.log("updateItem: "+updateData[0].updateItem)

        const fileNameUpdate = updateData[0].fileNameUpdate
        console.log("fileNameUpdate: "+updateData[0].fileNameUpdate)

        //await productUpdatesPage.setReleaseDateAll('All')

        // Validate Download Update file should work well
        await productUpdatesPage.clickFilters()
        await productUpdatesPage.clickFilter('type')
        await productUpdatesPage.clickFilterValue('type', 'Update')
        await productUpdatesPage.clickApplyBtn()

        const elem1 = await productUpdatesPage.elmLbl('type', 'Update')
        const result1 = await elem1.getText()
        expect(result1=='Update').toBe(true)
        console.log("Update filter item exists in results: "+result1)

        await productUpdatesPage.clickDownloadButton(4)
        console.log("Download Update button is clicked")

        const filePathUpdate = path.join(global.downloadDir, fileNameUpdate)
        console.log("filePathUpdate: "+filePathUpdate)

        await browser.call(function (){
            // call our custom function that checks for the file to exist
            return waitForFileExists(filePathUpdate, 60000)
        });
        
        console.log("The #1 script end - Download Update button")
    });

    it('Download Extension file should work well', async () => {
        await browser.refresh()
        await browser.pause(4000)

        await productUpdatesPage.setReleaseDateAll('All')

        await productUpdatesPage.elmVirTable()

        let updateData = data_ProductUpdates.details
        console.log("updateItem: "+updateData[0].updateItem)

        const fileNameExtension = updateData[0].fileNameExtension
        console.log("fileNameExtension: "+updateData[0].fileNameExtension)

        await productUpdatesPage.setReleaseDateAll('All')

        //await productUpdatesPage.clickClearFilters()

        // Validate Extension Update file should work well
        await productUpdatesPage.clickFilters()
        await productUpdatesPage.clickFilter('type')
        await productUpdatesPage.clickFilterValue('type', 'Extension')
        await productUpdatesPage.clickApplyBtn()

        const elem2 = await productUpdatesPage.elmLbl('type', 'Extension')
        const result2 = await elem2.getText()
        expect(result2=='Extension').toBe(true)
        console.log("Extension filter item exists in results: "+result2)

        await productUpdatesPage.clickDownloadButton(1)
        console.log("Download Extension button is clicked")

        const filePathExtension = path.join(global.downloadDir, fileNameExtension)
        console.log("filePathExtension: "+filePathExtension)

        await browser.call(function (){
            // call our custom function that checks for the file to exist
            return waitForFileExists(filePathExtension, 60000)
        });
        
        console.log("The #2 script end - Download Extension button")
    });
});