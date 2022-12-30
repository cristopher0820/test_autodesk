import loginPage from  '../../../page_objects/loginPage/login.page'
import customInstallPage from '../../../page_objects/customInstall/customInstall.page'
import * as data_driven from '../../../data_driven/credentials.json'
import * as data_CustomInstall from '../../../data/CustomInstall/customInstallElements.json'

describe('NOVA-2839 Scenario #34: Custom install Page - Package info modal', () => {
    it('Package info modal should displays well', async () => {
        await loginPage.open(data_driven.Environment.STGCI_nonRC)
        await loginPage.login(data_driven.Credentials.non_RC.Username, data_driven.Credentials.non_RC.Password);

        let installData = data_CustomInstall.details
        console.log("itemLicenseType: "+installData[0].itemLicenseType)
        console.log("itemCheckBoxId: "+installData[0].itemCheckBoxId)
        console.log("itemTab: "+installData[0].itemTab)
        const packageContent = installData[0].packageContent

        await customInstallPage.elmListWrapper()

        await customInstallPage.clickCreateNewBtn()
        await customInstallPage.clickLicenseTypeSel()
        await customInstallPage.clickLicenseTypeItem(installData[0].itemLicenseType)
        await customInstallPage.clickProductItem(installData[0].itemCheckBoxId)

        await customInstallPage.elmNext1Btn()
        console.log("First Next button was clicked");

        const rdn_value = Math.floor(Math.random() * 1000);
        const PackageNameRdn = "TestPKG_"+rdn_value
        await customInstallPage.inpPackageName(PackageNameRdn)
        console.log("Package Name was setup: "+PackageNameRdn);

        const DescriptionRnd = "This is the package description "+rdn_value
        await customInstallPage.inpPackageDesc(DescriptionRnd)
        console.log("Package Description was setup");

        await customInstallPage.clickSpecifyLicenseServerBtn()
        await customInstallPage.inpServerName("Test Server")
        await customInstallPage.clickSaveLicenseServerBtn()
        console.log("Specify License Server was setup");

        await customInstallPage.clickTermsOfUse()
        console.log("Terms of use checkbox has been clicked");

        await customInstallPage.clickSaveBtn()
        console.log("Save button was clicked");

        await browser.url(data_driven.Environment.STGCI_nonRC)
        await browser.refresh()
        await browser.pause(3000)

        const txtInfo = await customInstallPage.clickInfoPackage()
        //console.log("txtInf0: "+ txtInfo);

        var txtPackageName = txtInfo.split('\n')[0];
        expect(txtPackageName == PackageNameRdn).toBe(true) 
        console.log("txtPackageName: "+ txtPackageName);

        var txtDescription = txtInfo.split('\n')[2];
        expect(txtDescription == DescriptionRnd).toBe(true) 
        console.log("txtDescription: "+ txtDescription);

        var txtPackageContent = txtInfo.split('\n')[4];
        expect(txtPackageContent == packageContent).toBe(true) 
        console.log("txtPackageContent: "+ txtPackageContent);

        await customInstallPage.putSearchInp(PackageNameRdn)
        await browser.pause(2000)

        // Delete the new created package
        await customInstallPage.clickDeletePackage()
        console.log("The package "+PackageNameRdn+" has been deleted");

        await browser.refresh()
        await browser.pause(3000)

        console.log("The end of the script: Package info modal")
    });
});