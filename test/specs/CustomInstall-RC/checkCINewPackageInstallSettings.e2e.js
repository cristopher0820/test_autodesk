import loginPage from  '../../../page_objects/loginPage/login.page'
import customInstallPage from '../../../page_objects/customInstall/customInstall.page'
import * as data_driven from '../../../data_driven/credentials.json'
import * as data_CustomInstall from '../../../data/CustomInstall/customInstallElements.json'

describe('NOVA-2828 Scenario #26: Custom install Page - New package - Install settings', () => {
    it('UI should display Custom Install key elements for the package items', async () => {

        const rdn_value = Math.floor(Math.random() * 5000);
        await browser.pause(rdn_value)
        
        await loginPage.open(data_driven.Environment.STGCI)
        await loginPage.login(data_driven.Credentials.MultiProductDeployment.UserMuli, data_driven.Credentials.MultiProductDeployment.PasswMulti);

        await customInstallPage.elmListWrapper()

        // Click on the existing Package
        await customInstallPage.clickItemLnk()
        console.log("Package was clicked");

        // Click on Next button
        await customInstallPage.elmNext1Btn()
        console.log("First Next button was clicked");

        // Verify Package name exists
        await expect(customInstallPage.elmPackageName()).toBeExisting()
        console.log("Package name exists");
        
        // Verify Package description exists
        await expect(customInstallPage.elmPackageDescription()).toBeExisting()
        console.log("Package description exists");

        // Verify Install Button exists
        await expect(customInstallPage.elmInstallButton()).toBeExisting()
        console.log("Install Button exists");

        // Verify Install Path exists
        await expect(customInstallPage.elmInstallPath()).toBeExisting()
        console.log("Install Path exists");

        // Verify Image checkbox exists
        await expect(customInstallPage.elmImageCreation()).toBeExisting()
        console.log("Image checkbox exists");

        // Verify Terms of use checkbox exists
        await expect(customInstallPage.elmTermsOfUse()).toBeExisting()
        console.log("Terms of use checkbox exists");

        // Verify Save button exists
        await expect(customInstallPage.elmSaveBtn()).toBeExisting()
        console.log("Save button exists");

        // Verify Download button exists
        await expect(customInstallPage.elmDownloadBtn()).toBeExisting()
        console.log("Download button exists");

        await browser.pause(3000)
        console.log("The ond of the script: UI should display Custom Install key elements for the package items")
    });
});