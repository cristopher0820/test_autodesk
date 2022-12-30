import loginPage from  '../../../page_objects/loginPage/login.page'
import customInstallPage from '../../../page_objects/customInstall/customInstall.page'
import * as data_driven from '../../../data_driven/credentials.json'
import * as data_CustomInstall from '../../../data/CustomInstall/customInstallElements.json'

// Load the libraries we need for path/URL manipulation & assertions
const path = require('path')
const fs = require('fs')
const { URL } = require('url')

const waitForFileExists = require('../../../util/waitForFileExists')

describe('NOVA-2863 Scenario #39: Custom install Page - Deploy functionality', () => {
    it('Deploy functionality should work well', async () => {

        const rdn_value1 = Math.floor(Math.random() * 5000);
        await browser.pause(rdn_value1)

        await loginPage.open(data_driven.Environment.STGCI)
        await loginPage.login(data_driven.Credentials.MultiProductDeployment.UserMuli, data_driven.Credentials.MultiProductDeployment.PasswMulti);

        let installData = data_CustomInstall.details
        console.log("itemLicenseType: "+installData[0].itemLicenseType)
        console.log("itemCheckBoxId: "+installData[0].itemCheckBoxId)
        console.log("itemTab: "+installData[0].itemTab)
        const packageContent = installData[0].packageContent

        await customInstallPage.elmListWrapper()

        await customInstallPage.clickCreateNewBtn()
        await customInstallPage.clickLicenseTypeSel()
        await customInstallPage.clickLicenseTypeItem(installData[0].itemLicenseType)
        await customInstallPage.clickProductItem(installData[0].itemCheckBoxId)

        await customInstallPage.elmNext1Btn()
        console.log("First Next button was clicked");

        const rdn_value = Math.floor(Math.random() * 1000);
        const PackageNameRdn = "TestPKG_"+rdn_value
        await customInstallPage.inpPackageName(PackageNameRdn)
        console.log("Package Name was setup: "+PackageNameRdn);

        const DescriptionRnd = "This is the package description "+rdn_value
        await customInstallPage.inpPackageDesc(DescriptionRnd)
        console.log("Package Description was setup");

        await customInstallPage.clickSpecifyLicenseServerBtn()
        await customInstallPage.inpServerName("Test Server")
        await customInstallPage.clickSaveLicenseServerBtn()
        console.log("Specify License Server was setup");

        await customInstallPage.clickDeployBtn()
        console.log("Deploy button was clicked");

        await customInstallPage.inpDeploymentImagePath(global.downloadDir)
        console.log("downloadDir: "+global.downloadDir);

        await customInstallPage.inpDeploymentLogFilePath()
        console.log("Deployment Log File Path input was clicked");

        await customInstallPage.inpInstallationPath()
        console.log("Installation Path input was clicked");

        await customInstallPage.clickDesktopAppChk()
        console.log("Desktop App checkbox was clicked");

        await customInstallPage.clickSymbolicLinksChk()
        console.log("Symbolic Links checkbox was clicked");

        await customInstallPage.clickTermsOfUse()
        console.log("Terms of use checkbox has been clicked");

        // Verify Download button exists
        await expect(customInstallPage.elmDownloadBtn()).toBeExisting()
        console.log("Download button exists");

        // Click on Download button
        await customInstallPage.clickDownloadBtn()
        console.log("Download button was clicked");

        // Validate package was downloaded
        const fileName = PackageNameRdn + ".exe"
        console.log("fileName: " + fileName)

        const filePathPackage = path.join(global.downloadDir, fileName)
        console.log("filePathPackage: " + filePathPackage)

        await browser.call(function () {
            // call our custom function that checks for the file to exist
            return waitForFileExists(filePathPackage, 120000)
        });

        await customInstallPage.putSearchInp(PackageNameRdn)
        await browser.pause(2000)

        // Delete the new created package
        await customInstallPage.clickDeletePackage()
        console.log("The package "+PackageNameRdn+" has been deleted");

        await browser.refresh()
        await browser.pause(3000)

        console.log("The ond of the script: Deploy functionality should work well")
    });
});