import loginPage from  '../../../page_objects/loginPage/login.page'
import customInstallPage from '../../../page_objects/customInstall/customInstall.page'
import * as data_driven from '../../../data_driven/credentials.json'
import * as data_CustomInstall from '../../../data/CustomInstall/customInstallElements.json'

describe('NOVA-2826 Scenario #24: Custom install Page - New package - Customization section', () => {
    it('Customization section should contain all nessessary elements', async () => {

        const rdn_value = Math.floor(Math.random() * 5000);
        await browser.pause(rdn_value)
        
        await loginPage.open(data_driven.Environment.STGCI)
        await loginPage.login(data_driven.Credentials.MultiProductDeployment.UserMuli, data_driven.Credentials.MultiProductDeployment.PasswMulti);

        let installData = data_CustomInstall.details
        console.log("itemLicenseType: "+installData[0].itemLicenseType)
        console.log("itemCheckBoxId: "+installData[0].itemCheckBoxId)
        console.log("itemTab: "+installData[0].itemTab)

        await customInstallPage.elmListWrapper()

        await customInstallPage.clickCreateNewBtn()
        await customInstallPage.clickLicenseTypeSel()
        await customInstallPage.clickLicenseTypeItem(installData[0].itemLicenseType)
        await customInstallPage.clickProductItem(installData[0].itemCheckBoxId)
        await customInstallPage.clickProductTab(installData[0].itemTab)

        // Verify Install support content field exists
        await expect(customInstallPage.elmInstallSupportContent()).toBeExisting()
        console.log("Install support content field exists");

        // Verify Custom Folder Path field exists
        await expect(customInstallPage.elmCustomFolderPath()).toBeExisting()
        console.log("Custom Folder Path field exists");

        // Verify Lock Security Settings checkbox exists
        await expect(customInstallPage.elmLockSecuritySettings()).toBeExisting()
        console.log("Lock Security Settings checkbox exists");

        // Verify Security Level field exists
        await expect(customInstallPage.elmSecurityLevel()).toBeExisting()
        console.log("Lock Security Level field exists");

        // Verify Trusted Locations field exists
        await expect(customInstallPage.elmTrustedLocations()).toBeExisting()
        console.log("Trusted Locations field exists");

        // Verify Trusted Domain Names field exists
        await expect(customInstallPage.elmTrustedDomainNames()).toBeExisting()
        console.log("Trusted Domain Names field exists");

        // Verify Legacy Code Search radioboxes exist
        for (let i=0; i<=1; i++) {
            await expect(customInstallPage.elmLegacyCodeSearch(i)).toBeExisting()
            console.log("Legacy Code Search radiobox"+i+" exists");
        }

        // Verify ACADL spAsDoc radioboxes exist
        for (let i=0; i<=1; i++) {
            await expect(customInstallPage.elmACADLspAsDoc(i)).toBeExisting()
            console.log("ACAD LspAsDoc radiobox"+i+" exists");
        }

        // Verify Express Tools checkbox exists
        await expect(customInstallPage.elmExpressTools()).toBeExisting()
        console.log("Express Tools checkbox exists");

        // Verify Use Online Content checkbox exists
        await expect(customInstallPage.elmUseOnlineContent()).toBeExisting()
        console.log("Use Online Content checkbox exists");

        // Verify Allow Access checkbox exists
        await expect(customInstallPage.elmAllowAccess()).toBeExisting()
        console.log("Allow Access checkbox exists");

        // Verify Include Computer Name checkbox exists
        await expect(customInstallPage.elmIncludeComputerName()).toBeExisting()
        console.log("Include Computer Name checkbox exists");

        // Verify Receive Notification checkbox exists
        await expect(customInstallPage.elmReceiveNotification()).toBeExisting()
        console.log("Receive Notification checkbox exists");

        // Verify Create Desktop Shortcut checkbox exists
        await expect(customInstallPage.elmCreateDesktopShortcut()).toBeExisting()
        console.log("Create Desktop Shortcut checkbox exists");

        // Verify Browse button exists
        await expect(customInstallPage.elmBrowseBtn()).toBeExisting()
        console.log("Browse button exists");

        console.log("The end of the script: Customization section should contain all nessessary elements")
    });
});