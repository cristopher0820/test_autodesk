import loginPage from  '../../../page_objects/loginPage/login.page'
import customInstallPage from '../../../page_objects/customInstall/customInstall.page'
import * as data_driven from '../../../data_driven/credentials.json'
import * as data_CustomInstall from '../../../data/CustomInstall/customInstallElements.json'

describe('NOVA-2829 Scenario #27: Custom install Page - New package - Save functionality', () => {
    it('UI should display Custom Install key elements for the package items', async () => {
        await loginPage.open(data_driven.Environment.STGCI_nonRC)
        await loginPage.login(data_driven.Credentials.non_RC.Username, data_driven.Credentials.non_RC.Password);

        await customInstallPage.elmListWrapper()

        // Get package name
        let package_name = await customInstallPage.elmGetPckName()
        console.log("Package name got: ", package_name);

        // Click on the existing Package
        await customInstallPage.clickItemLnk()
        console.log("Package was clicked");

        // Click on Next button
        await customInstallPage.elmNext1Btn()
        console.log("First Next button was clicked");

        // Verify Save button exists
        await expect(customInstallPage.elmSaveBtn()).toBeExisting()
        console.log("Save button exists");

        // Click on Save button
        await customInstallPage.clickSaveBtn()
        console.log("Save button was clicked");

         // Verify the New package exists
        let actualResult = await customInstallPage.elmGetPckName()
        expect(actualResult == package_name).toBe(true)
        console.log("New package exists: ", actualResult);

        await browser.pause(3000)
        console.log("The ond of the script: UI should display Custom Install key elements for the package items")
    });
});