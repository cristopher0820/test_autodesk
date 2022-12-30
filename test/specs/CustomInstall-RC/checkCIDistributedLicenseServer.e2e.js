import loginPage from  '../../../page_objects/loginPage/login.page'
import customInstallPage from '../../../page_objects/customInstall/customInstall.page'
import * as data_driven from '../../../data_driven/credentials.json'
import * as data_CustomInstall from '../../../data/CustomInstall/customInstallElements.json'

describe('NOVA-2922 Scenario #42: Custom install Page - Distributed License Server', () => {
    it('Specify distributed license server options and fields should display well', async () => {

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

        // Validate Distributed License Server
        let examplesData = data_CustomInstall.distributedLicense
        await customInstallPage.clicklicenseServerModelSel()
        await customInstallPage.clickLicenseTypeItem("DISTRIBUTED_LICENSE_SERVER")

        await expect(customInstallPage.setServerNameDInp(examplesData[0].distributedLicense_1)).toBeExisting()
        console.log("Enter a custom distributed license type");
        await customInstallPage.clickServerNameBtn("Add")
        console.log("Add button clicked");

        await expect(customInstallPage.setServerNameDInp(examplesData[0].distributedLicense_2)).toBeExisting()
        console.log("Enter a custom distributed license type");
        await customInstallPage.clickServerNameBtn("Add")
        console.log("Add button clicked");

        await expect(customInstallPage.setServerNameDInp(examplesData[0].distributedLicense_3)).toBeExisting()
        console.log("Enter a custom distributed license type");
        await customInstallPage.clickServerNameBtn("Add")
        console.log("Add button clicked");

        let firstElement =  await customInstallPage.elmFirstServerNameBtn()
        await customInstallPage.clickServerNameBtn(examplesData[0].distributedLicense_2)
        console.log("Select one license");

        await customInstallPage.clickServerNameBtn("Move up")
        console.log("Move up button clicked");

        let newFirstElement =  await customInstallPage.elmFirstServerNameBtn()
        expect(firstElement == newFirstElement).toBe(false)

        await customInstallPage.clickServerNameBtn(examplesData[0].distributedLicense_2)
        console.log("Select one license");
                                   
        await customInstallPage.clickServerNameBtn("Move down")
        console.log("Move down button clicked");

        await customInstallPage.clickServerNameBtn(examplesData[0].distributedLicense_2)
        console.log("Select one license");

        await customInstallPage.clickServerNameBtn("Remove")
        console.log("Remove button clicked");

        let result = await customInstallPage.existingServerNameBtn()
        expect(result).toBe(false)

        await browser.pause(3000)
        console.log("The ond of the script: Specify license server options and fields display well")
    });
});