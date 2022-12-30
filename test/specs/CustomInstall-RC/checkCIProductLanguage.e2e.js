import loginPage from  '../../../page_objects/loginPage/login.page'
import customInstallPage from '../../../page_objects/customInstall/customInstall.page'
import * as data_driven from '../../../data_driven/credentials.json'
import * as data_CustomInstall from '../../../data/CustomInstall/customInstallElements.json'

describe('NOVA-2860  Scenario #36: Custom install Page - Language drop down', () => {
    it('UI should display the language available for a product', async () => {

        const rdn_value = Math.floor(Math.random() * 5000);
        await browser.pause(rdn_value)
        
        await loginPage.open(data_driven.Environment.STGCI)
        await loginPage.login(data_driven.Credentials.MultiProductDeployment.UserMuli, data_driven.Credentials.MultiProductDeployment.PasswMulti);

        await customInstallPage.elmListWrapper()

        let installData = data_CustomInstall.details
        console.log("itemLicenseType: "+installData[0].itemLicenseType)
        console.log("itemCheckBoxId: "+installData[0].itemCheckBoxId2)

        await customInstallPage.clickCreateNewBtn()
        await customInstallPage.clickLicenseTypeSel()
        await customInstallPage.clickLicenseTypeItem(installData[0].itemLicenseType)
        await customInstallPage.clickProductItemP(installData[0].itemCheckBoxId2)

        // Click on the existing Package
        //await customInstallPage.clickItemLnk()
        //console.log("Package was clicked");

        // Click language filter
        let languages = data_CustomInstall.languages
        await customInstallPage.clickLanguageTypeSel()
        await expect(customInstallPage.elmLanguageName(languages[0].language_1)).toBeExisting()
        await expect(customInstallPage.elmLanguageName(languages[0].language_2)).toBeExisting()
        await expect(customInstallPage.elmLanguageName(languages[0].language_3)).toBeExisting()
        await expect(customInstallPage.elmLanguageName(languages[0].language_4)).toBeExisting()
        await expect(customInstallPage.elmLanguageName(languages[0].language_5)).toBeExisting()
        console.log("Products filtered by Language");    

        await browser.pause(3000)
        console.log("The ond of the script: UI should display products and the languages available")
    });
});