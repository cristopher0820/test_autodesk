import loginPage from '../../../page_objects/loginPage/login.page'
import customInstallPage from '../../../page_objects/customInstall/customInstall.page'
import * as data_driven from '../../../data_driven/credentials.json'
import * as data_CustomInstall from '../../../data/CustomInstall/customInstallElements.json'

// Load the libraries we need for path/URL manipulation & assertions
const path = require('path')
const fs = require('fs')
const { URL } = require('url')

const waitForFileExists = require('../../../util/waitForFileExists')

describe('NOVA-2947 Scenario #45: Shared Packages/Teams - New package - Download functionality', () => {
    it('Shared Packages - User should be able to download the deployment file', async () => {

        const rdn_value = Math.floor(Math.random() * 5000);
        await browser.pause(rdn_value)
        
        await loginPage.open(data_driven.Environment.STGCI)
        await loginPage.login(data_driven.Credentials.PrimaryAdmin_RC.Username, data_driven.Credentials.PrimaryAdmin_RC.Password);

        await customInstallPage.elmListWrapper()

        // Click Team Library tab
        await customInstallPage.clickTeamLibraryTab()
        console.log("Team Library tab was clicked");

        // Get package name
        let package_name = await customInstallPage.elmGetPckName()
        console.log("Package name got: ", package_name);

        // Click on the existing Package
        await customInstallPage.clickItemLnk()
        console.log("Package was clicked");

        // Click on Next button
        await customInstallPage.elmNext1Btn()
        console.log("First Next button was clicked");

        // Verify Download button exists
        await expect(customInstallPage.elmDownloadBtn()).toBeExisting()
        console.log("Download button exists");

        // Click on Download button
        await customInstallPage.clickDownloadBtn()
        console.log("Download button was clicked");

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
        console.log("The ond of the script: User should be able to download the deployment file in Team Library")
    });
});