import loginPage from  '../../../page_objects/loginPage/login.page'
import customInstallPage from '../../../page_objects/customInstall/customInstall.page'
import * as data_driven from '../../../data_driven/credentials.json'
import * as data_CustomInstall from '../../../data/CustomInstall/customInstallElements.json'

describe('NOVA-2901 Scenario #40: Custom install Page - Whats included? info', () => {
    it('Whats included? info should be displayed and work well', async () => {
        await loginPage.open(data_driven.Environment.STGCI_nonRC)
        await loginPage.login(data_driven.Credentials.non_RC.Username, data_driven.Credentials.non_RC.Password);

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

        const selectedVersion = await customInstallPage.elmSelectedVersionLbl()
        const txtSelectedVersion = await selectedVersion.getText()
        console.log("txtSelectedVersion: "+txtSelectedVersion);

        await customInstallPage.clickWhatsIncludedLnk()

        const whatsIncludedContent = await customInstallPage.elmWhatsIncludedContentLbl()
        const txtWhatsIncludedContent = await whatsIncludedContent.getText()
        console.log("txtWhatsIncludedContent: "+txtWhatsIncludedContent);

        await browser.keys(['Escape'])

        expect(txtSelectedVersion == txtWhatsIncludedContent).toBe(true) 

        console.log("The ond of the script: Whats included? info is displayed and work well")
    });
});