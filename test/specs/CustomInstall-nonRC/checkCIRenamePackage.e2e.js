import loginPage from  '../../../page_objects/loginPage/login.page'
import customInstallPage from '../../../page_objects/customInstall/customInstall.page'
import * as data_driven from '../../../data_driven/credentials.json'
import * as data_CustomInstall from '../../../data/CustomInstall/customInstallElements.json'

describe('NOVA-2835 Scenario #31: Custom install Page - Rename package functionality', () => {
    it('Rename functionality should work well', async () => {
        await loginPage.open(data_driven.Environment.STGCI_nonRC)
        await loginPage.login(data_driven.Credentials.non_RC.Username, data_driven.Credentials.non_RC.Password);

        await customInstallPage.elmListWrapper()

        await customInstallPage.putSearchInp("Test_Package_")
        await browser.pause(3000)

        // Get first package name
        let package_name = await customInstallPage.elmGetFirstPkgName()
        console.log("The first package name is: ", package_name);

        //Click in the package name and edit
        const rdn_value = Math.floor(Math.random() * 1000);
        await customInstallPage.elmSetPkgName("Test_Package_"+rdn_value,"3wRBw")
        console.log("Package name was edited")

        //Get the actual package name
        let actual_package_name = await customInstallPage.elmGetFirstPkgName()
        console.log("The actual package name is: ", actual_package_name);

        expect(package_name == actual_package_name).toBe(false)     
        
        console.log("The end of the script: Rename package functionality should work well")
    });
});