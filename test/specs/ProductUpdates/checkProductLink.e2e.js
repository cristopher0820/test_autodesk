import loginPage from  '../../../page_objects/loginPage/login.page'
import productUpdatesPage from '../../../page_objects/productUpdates/productUpdates.page'
import detailsPage from '../../../page_objects/detailsProducts/detailsPage.page'
import * as data_driven from '../../../data_driven/credentials.json'

describe('NOVA-2728 Scenario #18: Product link opens the correct Product details page', () => {
    it('Product link should open the correct Product details page', async () => {

        const rdn_value = Math.floor(Math.random() * 5000);
        await browser.pause(rdn_value)
        
        await loginPage.open(data_driven.Environment.STGPU)
        await loginPage.login(data_driven.Credentials.MultiProductDeployment.UserMuli, data_driven.Credentials.MultiProductDeployment.PasswMulti);

        await productUpdatesPage.setReleaseDateAll('All')

        await productUpdatesPage.elmVirTable()

        //let updateData = data_ProductUpdates.details
        //console.log("updateItem: "+updateData[0].updateItem)

        await productUpdatesPage.setReleaseDateAll('All')
        await productUpdatesPage.clickRightSideArrow(1)

        // Validate Product link opens the correct Product details page
        await productUpdatesPage.clickPanelProductLink()
        await expect(detailsPage.elmHeadlineLarge()).toBeExisting()
        console.log("Headline Large element on Detail page displays well");

        await browser.back()

        // Verify the title label exists
        await expect(productUpdatesPage.elmTitle()).toBeExisting()
        console.log("Product Updates title exists");

        console.log("The ond of the script: Right-side info-block opens well")
    });
});