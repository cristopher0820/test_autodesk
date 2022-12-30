import loginPage from  '../../../page_objects/loginPage/login.page'
import customInstallPage from '../../../page_objects/customInstall/customInstall.page'
import * as data_driven from '../../../data_driven/credentials.json'
import * as data_CustomInstall from '../../../data/CustomInstall/customInstallElements.json'

describe('NOVA-2902 Scenario #41: Custom install Page - Specify license server', () => {
    it('Specify license server options and fields should display well', async () => {

        const rdn_value = Math.floor(Math.random() * 5000);
        await browser.pause(rdn_value)
        
        await loginPage.open(data_driven.Environment.STGCI)
        await loginPage.login(data_driven.Credentials.MultiProductDeployment.UserMuli, data_driven.Credentials.MultiProductDeployment.PasswMulti);

        let installData = data_CustomInstall.details
        console.log("itemLicenseType: "+installData[0].itemLicenseType)
        console.log("itemCheckBoxId: "+installData[0].itemCheckBoxId)

        await customInstallPage.elmListWrapper()

        await customInstallPage.clickCreateNewBtn()
        await customInstallPage.clickLicenseTypeSel()
        await customInstallPage.clickLicenseTypeItem(installData[0].itemLicenseType)

        await customInstallPage.clickProductItem(installData[0].itemCheckBoxId)

        await customInstallPage.elmNext1Btn()
        console.log("First Next button was clicked");

        await customInstallPage.clickSpecifyLicenseServerBtn()

        await customInstallPage.clicklicenseServerModelSel()

        // Validate redundant lisence server
        await customInstallPage.clickLicenseTypeItem("REDUNDANT_LICENSE_SERVER")
        await expect(customInstallPage.elmServerNameInp("First")).toBeExisting()
        console.log("First Server Name input field exists");

        await expect(customInstallPage.elmServerNameInp("Second")).toBeExisting()
        console.log("Second Server Name input field exists");

        await expect(customInstallPage.elmServerNameInp("Third")).toBeExisting()
        console.log("Third Server Name input field exists");


        // Validate Distributed License Server
        await customInstallPage.clicklicenseServerModelSel()
        await customInstallPage.clickLicenseTypeItem("DISTRIBUTED_LICENSE_SERVER")
        await expect(customInstallPage.elmServerNameDInp()).toBeExisting()
        console.log("Distributed License Server input field exists");

        await expect(customInstallPage.elmServerNameBtn("Add")).toBeExisting()
        console.log("Add button exists");

        await expect(customInstallPage.elmServerNameBtn("Move up")).toBeExisting()
        console.log("Move up button exists");

        await expect(customInstallPage.elmServerNameBtn("Move down")).toBeExisting()
        console.log("Move down button exists");

        await expect(customInstallPage.elmServerNameBtn("Remove")).toBeExisting()
        console.log("Remove button exists");

        // Validate Single license server
        await customInstallPage.clicklicenseServerModelSel()
        await customInstallPage.clickLicenseTypeItem("SINGLE_LICENSE_SERVER")

        await expect(customInstallPage.elmServerNameMInp()).toBeExisting()
        console.log("Server name input field exists");

        await browser.pause(3000)
        console.log("The ond of the script: Specify license server options and fields display well")
    });
});