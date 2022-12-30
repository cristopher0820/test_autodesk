import loginPage from '../../../page_objects/loginPage/login.page'
import customInstallPage from '../../../page_objects/customInstall/customInstall.page'
import * as data_driven from '../../../data_driven/credentials.json'
import * as data_CustomInstall from '../../../data/CustomInstall/customInstallElements.json'

// Load the libraries we need for path/URL manipulation & assertions
const path = require('path')
const fs = require('fs')
const { URL } = require('url')

const waitForFileExists = require('../../../util/waitForFileExists')

describe('NOVA-2862 Scenario #38: Custom install Page - Install functionality', () => {
    it('Install functionality should work well', async () => {
        await loginPage.open(data_driven.Environment.STGCI_nonRC)
        await loginPage.login(data_driven.Credentials.non_RC.Username, data_driven.Credentials.non_RC.Password);

        let installData = data_CustomInstall.details
        const packageName = installData[0].packageName

        await customInstallPage.elmListWrapper()

        await customInstallPage.putSearchInp(packageName)
        await browser.pause(3000)

        // Get package name
        let package_name = await customInstallPage.elmGetPckName()
        console.log("Package name got: ", package_name);

        // Click on the existing Package
        await customInstallPage.clickItemLnk()
        console.log("Package was clicked");

        // Click on Next button
        await customInstallPage.elmNext1Btn()
        console.log("First Next button was clicked");

        // Verify installation path
        await expect(customInstallPage.elmInstallPath()).toBeExisting()
        console.log("Installation path exists");

        // Verify image creation checkbox
        await expect(customInstallPage.elmImageCreation()).toBeExisting()
        console.log("Image creation checkbox exists");

        // Verify save button is enabled
        await expect(customInstallPage.elmSaveBtn()).toBeExisting()
        console.log("Save button is clickable");

        // Verify save button is enabled
        await expect(customInstallPage.elmDownloadBtn()).toBeExisting()
        console.log("Save button is clickable");

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
        console.log("The ond of the script: Install functionality should work fine")
    });
});