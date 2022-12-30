import loginPage from  '../../../page_objects/loginPage/login.page'
import customInstallPage from '../../../page_objects/customInstall/customInstall.page'
import * as data_driven from '../../../data_driven/credentials.json'
import * as data_CustomInstall from '../../../data/CustomInstall/customInstallElements.json'

describe('NOVA-2827 Scenario #25: Custom install Page - New package - Extension section', () => {
    it('Extension section should contain all nessessary elements', async () => {
        await loginPage.open(data_driven.Environment.STGCI_nonRC)
        await loginPage.login(data_driven.Credentials.non_RC.Username, data_driven.Credentials.non_RC.Password);
        
        let installData = data_CustomInstall.details
        console.log("itemLicenseType: "+installData[0].itemLicenseType)
        console.log("itemCheckBoxId: "+installData[0].itemCheckBoxId)
        console.log("extensionsTab: "+installData[0].extensionsTab)

        await customInstallPage.elmListWrapper()

        await customInstallPage.clickCreateNewBtn()
        await customInstallPage.clickLicenseTypeSel()
        await customInstallPage.clickLicenseTypeItem(installData[0].itemLicenseType)
        await customInstallPage.clickProductItem(installData[0].itemCheckBoxId)
        await customInstallPage.clickProductTab(installData[0].extensionsTab)

        // Verify Extension checkbox exists
        await expect(customInstallPage.elmExtensionChk()).toBeExisting()
        console.log("Extension checkbox exists");

        console.log("The end of the script: Extension section should contain all nessessary elements")
    });
});