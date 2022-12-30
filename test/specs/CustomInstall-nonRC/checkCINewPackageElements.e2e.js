import loginPage from  '../../../page_objects/loginPage/login.page'
import customInstallPage from '../../../page_objects/customInstall/customInstall.page'
import * as data_driven from '../../../data_driven/credentials.json'
import * as data_CustomInstall from '../../../data/CustomInstall/customInstallElements.json'

describe('NOVA-2825 Scenario #23: Custom install Page -New package elements', () => {
    it('UI should display Custom Install key elements for the package items', async () => {
        await loginPage.open(data_driven.Environment.STGCI_nonRC)
                await loginPage.login(data_driven.Credentials.non_RC.Username, data_driven.Credentials.non_RC.Password);

        await customInstallPage.elmListWrapper()

        let installData = data_CustomInstall.details
        console.log("itemLicenseType: "+installData[0].itemLicenseType)
        console.log("itemCheckBoxId: "+installData[0].itemCheckBoxId)
        console.log("itemTab: "+installData[0].itemTab)
        let packageName = installData[0].packageName
        console.log("packageName: "+packageName)

        //await customInstallPage.putSearchInp(packageName)
        //await browser.pause(3000)

        // Click on the existing Package
        //await customInstallPage.clickItemLnk()
        //console.log("Package was clicked");

        await customInstallPage.clickCreateNewBtn()
        await customInstallPage.clickProductItem("ACD")

        // Verify the product is selected
        await customInstallPage.elmProductChecked("ACD")
        console.log("Product is selected");

        // Verify the language is selected
        await customInstallPage.elmLanguage()
        console.log("Language is selected");

        // Verify the version is selected
        await customInstallPage.elmLatestVersionLbl()
        console.log("Version is selected");
        

        await browser.pause(3000)
        console.log("The ond of the script: UI should display Custom Install key elements for the package items")
    });
});