import loginPage from  '../../../page_objects/loginPage/login.page'
import productUpdatesPage from '../../../page_objects/productUpdates/productUpdates.page'
import * as data_driven from '../../../data_driven/credentials.json'
import * as data_ProductUpdates from '../../../data/ProductUpdates/updateElements.json'

describe('NOVA-2727 Scenario #17: Right-side info-block opens well', () => {
    it('Right-side info-block with elements should open well', async () => {

        const rdn_value = Math.floor(Math.random() * 5000);
        await browser.pause(rdn_value)
        
        await loginPage.open(data_driven.Environment.STGPU)
        await loginPage.login(data_driven.Credentials.MultiProductDeployment.UserMuli, data_driven.Credentials.MultiProductDeployment.PasswMulti);

        await productUpdatesPage.setReleaseDateAll('All')

        await productUpdatesPage.elmVirTable()

        let updateData = data_ProductUpdates.details
        console.log("updateItem: "+updateData[0].updateItem)

        await productUpdatesPage.setReleaseDateAll('All')
        await productUpdatesPage.clickRightSideArrow(1)

        // Validate the right panel title opens well
        await expect(productUpdatesPage.elmPanelProductTitle()).toBeExisting()
        console.log("Right panel title opens well");

        // Validate the right panel Product link opens well
        await expect(productUpdatesPage.elmPanelProductLink()).toBeExisting()
        console.log("Right panel Product link opens well");

        // Validate the right panel Release Notes link opens well
        await expect(productUpdatesPage.elmPanelReleaseNotesLink()).toBeExisting()
        console.log("Right panel Release Notes link opens well");

        // Validate the right panel Type value opens well
        await expect(productUpdatesPage.elmPanelTypeTxt()).toBeExisting()
        console.log("Right panel Type value opens well");

        // Validate the right panel Release date value opens well
        await expect(productUpdatesPage.elmPanelReleaseDateTxt()).toBeExisting()
        console.log("Right panel Release date value opens well");

        // Validate the right panel Size value opens well
        await expect(productUpdatesPage.elmPanelSizeTxt()).toBeExisting()
        console.log("Right panel Size value opens well");

        // Validate the right panel Severity value opens well
        await expect(productUpdatesPage.elmPanelSeverityTxt()).toBeExisting()
        console.log("Right panel Severity value opens well");

        // Validate the right panel Description value opens well
        await expect(productUpdatesPage.elmPanelDescriptionTxt()).toBeExisting()
        console.log("Right panel Description value opens well");

        // Validate the right panel Download button displays well
        await expect(productUpdatesPage.elmPanelDownloadBtn()).toBeExisting()
        console.log("Right panel Download button displays well");

        console.log("The ond of the script: Right-side info-block opens well")
    });
});