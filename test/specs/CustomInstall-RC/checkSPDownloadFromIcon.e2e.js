import loginPage from  '../../../page_objects/loginPage/login.page'
import customInstallPage from '../../../page_objects/customInstall/customInstall.page'
import * as data_driven from '../../../data_driven/credentials.json'

// Load the libraries we need for path/URL manipulation & assertions
const path = require('path')
const fs = require('fs')
const { URL } = require('url')

const waitForFileExists = require('../../../util/waitForFileExists')

describe('NOVA-2992 Scenario #49: Shared Packages/Teams - Download package functionality with icon', () => {
    it('Download from icon functionality should work well', async () => {

        const rdn_value = Math.floor(Math.random() * 5000);
        await browser.pause(rdn_value)
        
        await loginPage.open(data_driven.Environment.STGCI)
        await loginPage.login(data_driven.Credentials.MultiProductDeployment.UserMuli, data_driven.Credentials.MultiProductDeployment.PasswMulti);

        await customInstallPage.elmListWrapper()

        // Click Team Library tab
        await customInstallPage.clickTeamLibraryTab()
        console.log("Team Library tab was clicked");

        await customInstallPage.putSearchInp("Test_Package_")
        await browser.pause(3000)

        // Get first package name
        let package_name = await customInstallPage.elmGetFirstPkgName()
        console.log("The first package name is: ", package_name);

        // Click on Download icon
        await customInstallPage.clickDownloadPackage()
        console.log("Download icon clicked");

        // Verify package was downloaded
        const fileName = package_name + ".exe"
        console.log("fileName: " + fileName)

        const filePathPackage = path.join(global.downloadDir, fileName)
        console.log("filePathPackage: " + filePathPackage)

        await browser.call(function () {
            // call our custom function that checks for the file to exist
            return waitForFileExists(filePathPackage, 120000)
        });

        await browser.pause(3000)    
        console.log("The end of the script: Download from icon functionality should work well")
    });
});