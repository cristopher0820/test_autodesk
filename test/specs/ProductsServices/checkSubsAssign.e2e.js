import loginPage from  '../../../page_objects/loginPage/login.page'
import productsAndServPage from '../../../page_objects/pandsPage/productsAndServ.page'
import detailsPage from '../../../page_objects/detailsProducts/detailsPage.page.js'
import * as data_driven from '../../../data_driven/credentials.json'
import * as data_Products from '../../../data/ProductsServices/checkSubsAssign.json'

describe('NOVA-2564 Scenario #8: Check Subscriptions and Product Assignments links', () => {
    it('Availability of Subscriptions and Product Assignments links for primary admin or a secondary admin users', async () => {

        const rdn_value = Math.floor(Math.random() * 5000);
        await browser.pause(rdn_value)
        
        await loginPage.open(data_driven.Environment.STGP)
        await loginPage.login(data_driven.Credentials.MultiProductDeployment.UserMuli, data_driven.Credentials.MultiProductDeployment.PasswMulti);

        await productsAndServPage.lblPandS.waitForDisplayed()

        let producServices = data_Products.tiles;
        for(let ps in producServices) {
            const cardName = producServices[ps].cardName
            const yearCount = producServices[ps].yearCount
            const years = producServices[ps].years
            //console.log("Download options: "+JSON.stringify(options))
            
            await productsAndServPage.clickViewDetails(cardName);
            console.log("ViewDetails page opens")

            // Check Subscriptions link exists and available
            await expect(detailsPage.elmSubscriptionsLink()).toBeExisting();

            // Check Subscriptions and Contracts menu item exists and available
            await expect(detailsPage.elmSubscriptionsMenu()).toBeExisting();

            // Check Product Assignments link exists and available
            await expect(detailsPage.elmAssignmentsLink()).toBeExisting();

            // Check By Product menu item exists and available
            await expect(detailsPage.elmAssignmentsMenu()).toBeExisting();
            console.log("The end")
        }

    });
});