import loginPage from  '../../../page_objects/loginPage/login.page'
import customInstallPage from '../../../page_objects/customInstall/customInstall.page'
import * as data_driven from '../../../data_driven/credentials.json'
import * as data_CustomInstall from '../../../data/CustomInstall/customInstallElements.json'

describe('NOVA-2861 Scenario #37: Custom install Page - Specific Version', () => {
    it('UI should display available version for a product', async () => {
        await loginPage.open(data_driven.Environment.STGCI_nonRC)
        await loginPage.login(data_driven.Credentials.non_RC.Username, data_driven.Credentials.non_RC.Password);

        let installData = data_CustomInstall.details
        console.log("itemLicenseType: "+installData[0].itemLicenseType)
        console.log("itemCheckBoxId: "+installData[0].itemCheckBoxId)
        console.log("itemTab: "+installData[0].itemTab)
        const packageContent = installData[0].packageContent
        const packageName = installData[0].packageName

        await customInstallPage.elmListWrapper()

        await customInstallPage.putSearchInp(packageName)
        await browser.pause(3000)

        // Click on the existing Package
        await customInstallPage.clickItemLnk()
        console.log("Package was clicked");

        // Click on version button
        await customInstallPage.elmVersionChecked()
        console.log("Version button was clicked");

        //Verification
        await expect(customInstallPage.elmVersionModal()).toBeExisting()
        await expect(customInstallPage.elmLatestVersionModal()).toBeExisting()

        //Click latest version
        await customInstallPage.clickLatestVersion()
        await expect(customInstallPage.elmLatestVersionUI()).toBeExisting()

        await browser.pause(3000)
        console.log("The ond of the script: UI should display available version for a product")
    });
});