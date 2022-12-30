import loginPage from  '../../../page_objects/loginPage/login.page'
import customInstallPage from '../../../page_objects/customInstall/customInstall.page'
import * as data_driven from '../../../data_driven/credentials.json'
import * as data_CustomInstall from '../../../data/CustomInstall/customInstallElements.json'

describe('NOVA-2833 Scenario #29: Custom install Page - Search functionality', () => {
    it('Search functionality should work well', async () => {

        const rdn_value = Math.floor(Math.random() * 5000);
        await browser.pause(rdn_value)
        
        await loginPage.open(data_driven.Environment.STGCI)
        await loginPage.login(data_driven.Credentials.MultiProductDeployment.UserMuli, data_driven.Credentials.MultiProductDeployment.PasswMulti);

        let installData = data_CustomInstall.details
        let packageName = installData[0].packageName
        console.log("packageName: "+packageName)

        await customInstallPage.elmListWrapper()

        // Validate Search functionality should work well
        await customInstallPage.putSearchInp(packageName)
        let actResult = await customInstallPage.elmGetPckName()
        expect (actResult).toHaveValue(packageName)
        console.log("Search result: "+actResult)
        
        console.log("The end of the script: Search functionality should work well")
    });
});