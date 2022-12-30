import loginPage from  '../../../page_objects/loginPage/login.page'
import productUpdatesPage from '../../../page_objects/productUpdates/productUpdates.page'
import * as data_driven from '../../../data_driven/credentials.json'
import * as data_ProductUpdates from '../../../data/ProductUpdates/updateElements.json'

describe('NOVA-2722 Scenario #12: Product Updates page opens well', () => {
    it('UI should display Product Updates key elements for the update list', async () => {

        const rdn_value = Math.floor(Math.random() * 5000);
        await browser.pause(rdn_value)
        
        await loginPage.open(data_driven.Environment.STGPU)
        await loginPage.login(data_driven.Credentials.MultiProductDeployment.UserMuli, data_driven.Credentials.MultiProductDeployment.PasswMulti);

        await productUpdatesPage.setReleaseDateAll('All')

        await productUpdatesPage.elmVirTable()

        // Verify the title label exists
        await expect(productUpdatesPage.elmTitle()).toBeExisting()
        console.log("Product Updates title exists");

        // Verify the search input field exists
        await expect(productUpdatesPage.elmSearch()).toBeExisting()
        console.log("Search input field exists");

        // Verify the filters button exists
        await expect(productUpdatesPage.elmFilters()).toBeExisting()
        console.log("Filters button exists");

        // Verify the header raw exists
        await expect(productUpdatesPage.elmHeaderRaw()).toBeExisting()
        console.log("Header raw exists");

        // Verify the item raw exists
        await expect(productUpdatesPage.elmItemRaw()).toBeExisting()
        console.log("Item raw exists");

        // Verify the type raw exists
        await expect(productUpdatesPage.elmTypeRaw()).toBeExisting()
        console.log("Type raw exists");

        // Verify the size raw exists
        const txtSize = await productUpdatesPage.elmSizeRaw()
        const txtSizeResult = await txtSize.getText()
        expect(txtSizeResult.length>4).toBe(true)
        console.log("Size raw exists: "+txtSizeResult);

        // Verify the release date raw exists
        const txtSize2 = await productUpdatesPage.elmReleaseDateRaw()
        const txtSizeResult2 = await txtSize2.getText()
        expect(txtSizeResult2.length>10).toBe(true)
        console.log("Release date raw exists: "+txtSizeResult2);

        // Verify the download button exists
        const txtSize3 = await productUpdatesPage.elmDownloadBtn()
        const txtSizeResult3 = await txtSize3.getText()
        expect(txtSizeResult3=='Download').toBe(true)
        console.log("Download button exists: "+txtSizeResult3);
    });
});