import loginPage from  '../../../page_objects/loginPage/login.page'
import productUpdatesPage from '../../../page_objects/productUpdates/productUpdates.page'
import * as data_driven from '../../../data_driven/credentials.json'
import * as data_ProductUpdates from '../../../data/ProductUpdates/updateElements.json'

// Load the libraries we need for path/URL manipulation & assertions
const path = require('path')
const fs = require('fs')
const { URL } = require('url')

const waitForFileExists = require('../../../util/waitForFileExists')

describe('NOVA-2732 Scenario #21: Download Update or Extension file from the right-side info panel', () => {
    it('Download Update or Extension file from the right-side info panel should work well', async () => {

        const rdn_value = Math.floor(Math.random() * 5000);
        await browser.pause(rdn_value)
        
        await loginPage.open(data_driven.Environment.STGPU)
        await loginPage.login(data_driven.Credentials.MultiProductDeployment.UserMuli, data_driven.Credentials.MultiProductDeployment.PasswMulti);

        await productUpdatesPage.setReleaseDateAll('All')

        await productUpdatesPage.elmVirTable()
        await browser.pause(6000)

        let updateData = data_ProductUpdates.details
        console.log("updateItem: "+updateData[0].updateItem)
        console.log("productUpdate1: "+updateData[0].productUpdate1)
        console.log("productExtention1: "+updateData[0].productExtention1)

        await productUpdatesPage.setReleaseDateAll('All')
        
        // Validate Download Update file from the right-side info panel should work well
        await productUpdatesPage.clickFilters()
        await productUpdatesPage.clickFilter('type')
        await productUpdatesPage.clickFilterValue('type', 'Update')
        await productUpdatesPage.clickApplyBtn()

        await productUpdatesPage.clickProductItem(updateData[0].productUpdate1)

        await productUpdatesPage.clickPanelDownloadBtn()
        console.log("Panel Download Update button is clicked")

        const filePathUpdate = path.join(global.downloadDir, updateData[0].productUpdateFile1)
        console.log("filePathUpdate: "+filePathUpdate)

        await browser.call(function (){
            // call our custom function that checks for the file to exist
            return waitForFileExists(filePathUpdate, 60000)
        });

        console.log(updateData[0].productUpdateFile1 + " file has been downloaded successfully!")

        await productUpdatesPage.clickClearFilters()

        // Validate Download Extension file from the right-side info panel should work well
        await productUpdatesPage.clickFilters()
        await productUpdatesPage.clickFilterValue('type', 'Extension')
        await productUpdatesPage.clickApplyBtn()

        await productUpdatesPage.clickProductItem(updateData[0].productExtention1)

        await productUpdatesPage.clickPanelDownloadBtn()
        console.log("Panel Download Extention button is clicked")

        const filePathExtention = path.join(global.downloadDir, updateData[0].productExtentionFile1)
        console.log("filePathExtention: "+filePathExtention)

        await browser.call(function (){
            // call our custom function that checks for the file to exist
            return waitForFileExists(filePathExtention, 60000)
        });

        console.log(updateData[0].productExtentionFile1 + " file has been downloaded successfully!")

        console.log("The ond of the script: Download Update or Extension file from the right-side info panel")
    });
});