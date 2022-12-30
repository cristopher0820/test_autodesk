import loginPage from  '../../../page_objects/loginPage/login.page'
import customInstallPage from '../../../page_objects/customInstall/customInstall.page'
import * as data_driven from '../../../data_driven/credentials.json'
import * as data_CustomInstall from '../../../data/CustomInstall/customInstallElements.json'

describe('NOVA-2859 Scenario #35: Custom install Page - License type drop down filter', () => {
    it('UI should display products filtered by license type', async () => {
        await loginPage.open(data_driven.Environment.STGCI_nonRC)
        await loginPage.login(data_driven.Credentials.non_RC.Username, data_driven.Credentials.non_RC.Password);

        await customInstallPage.elmListWrapper()

        // Click on create new button
        await customInstallPage.clickCreateNewBtn()
        console.log("Create new button was clicked");

        //Get results filtered by Autodesk ID
        let autodeskID = data_CustomInstall.autodeskID_products
        await customInstallPage.clickLicenseTypeSel()
        await customInstallPage.clickLicenseTypeItem(autodeskID[0].itemLicenseType)
        await expect(customInstallPage.elmProductName(autodeskID[0].product)).toBeExisting()
        console.log("Products filtered by Autodesk ID");

        //Get results filtered by Serial Number
        let serialNumber = data_CustomInstall.serialNumber_products
        await customInstallPage.clickLicenseTypeSel()
        await customInstallPage.clickLicenseTypeItem(serialNumber[0].itemLicenseType)
        await expect(customInstallPage.elmProductName(serialNumber[0].product)).toBeExisting()
        console.log("Products filtered by Serial Number");

        //Get results filtered by Serial Number
        let network = data_CustomInstall.network_products
        await customInstallPage.clickLicenseTypeSel()
        await customInstallPage.clickLicenseTypeItem(network[0].itemLicenseType)
        await expect(customInstallPage.elmProductName(network[0].product_1)).toBeExisting()
        await expect(customInstallPage.elmProductName(network[0].product_2)).toBeExisting()
        await expect(customInstallPage.elmProductName(network[0].product_3)).toBeExisting()
        await expect(customInstallPage.elmProductName(network[0].product_4)).toBeExisting()
        await expect(customInstallPage.elmProductName(network[0].product_5)).toBeExisting()
        console.log("Products filtered by Network");

        await browser.pause(3000)
        console.log("The ond of the script: UI should display products filtered by license type")
    });
});