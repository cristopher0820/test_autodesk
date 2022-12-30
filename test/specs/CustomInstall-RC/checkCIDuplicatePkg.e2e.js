import loginPage from  '../../../page_objects/loginPage/login.page'
import customInstallPage from '../../../page_objects/customInstall/customInstall.page'
import * as data_driven from '../../../data_driven/credentials.json'

describe('NOVA-2837 Scenario #32: Custom install Page - Duplicate and Delete package functionality', () => {
    it('Duplicate and Delete package functionality should work well', async () => {

        const rdn_value = Math.floor(Math.random() * 5000);
        await browser.pause(rdn_value)
        
        await loginPage.open(data_driven.Environment.STGCI)
        await loginPage.login(data_driven.Credentials.MultiProductDeployment.UserMuli, data_driven.Credentials.MultiProductDeployment.PasswMulti);

        await customInstallPage.elmListWrapper()

        await customInstallPage.putSearchInp("Test_Package_")
        await browser.pause(3000)

        // Get first package name
        let package_name = await customInstallPage.elmGetFirstPkgName()
        console.log("The first package name is: ", package_name);

        // Validate the first package has been duplicated
        let dupPackage_name = package_name + " [1]"
        await customInstallPage.clickDuplicatePackage()
        await expect(customInstallPage.elmGetDupPkgName(dupPackage_name)).toBeExisting()
        console.log("The duplicated package name is: ", dupPackage_name);

        // Validate the duplicated package has been deleted
        await customInstallPage.clickDeletePackage()

        await browser.refresh()
        await browser.pause(3000)

        await customInstallPage.putSearchInp("Test_Package_")
        await browser.pause(3000)

        let actPackage_name = await customInstallPage.elmGetFirstPkgName()
        console.log("The first package name after deletion is: ", actPackage_name);

        expect(actPackage_name == package_name).toBe(true)
        console.log("The duplicated package has been deleted successfully");

        console.log("The end of the script: Duplicate and Delete package functionality works well")
    });
});