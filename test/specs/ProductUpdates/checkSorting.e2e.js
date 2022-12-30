import loginPage from  '../../../page_objects/loginPage/login.page'
import productUpdatesPage from '../../../page_objects/productUpdates/productUpdates.page'
import * as data_driven from '../../../data_driven/credentials.json'
import * as data_ProductUpdates from '../../../data/ProductUpdates/updateElements.json'

describe('NOVA-2725 Scenario #15: Ascending and Descending sorting works well', () => {
    it('Ascending and Descending sorting should work well', async () => {

        const rdn_value = Math.floor(Math.random() * 5000);
        await browser.pause(rdn_value)
        
        await loginPage.open(data_driven.Environment.STGPU)
        await loginPage.login(data_driven.Credentials.MultiProductDeployment.UserMuli, data_driven.Credentials.MultiProductDeployment.PasswMulti);

        await productUpdatesPage.setReleaseDateAll('All')

        await productUpdatesPage.elmVirTable()

        let updateData = data_ProductUpdates.details
        console.log("updateItem: "+updateData[0].updateItem)

        await productUpdatesPage.setReleaseDateAll('All')

        // Ascending and Descending sorting should work well
        for (let i=1; i<=4; i++) {
            await productUpdatesPage.clickSorting(i)
            console.log("Asc Sorting button is clicked for the index: "+i)
            await browser.pause(2000)

            const elemAsc = await productUpdatesPage.elmSearchRaw(i+1)
            const resultAsc = await elemAsc.getText()
            console.log("Ascending sorting first value: "+resultAsc)


            await productUpdatesPage.clickSorting(i)
            console.log("Desc Sorting button is clicked for the index: "+i)
            await browser.pause(2000)

            const elemDesc = await productUpdatesPage.elmSearchRaw(i+1)
            const resultDesc = await elemDesc.getText()
            console.log("Descending sorting first value: "+resultDesc)

            expect(resultAsc==resultDesc).toBe(false)
            console.log("Ascending and Descending sorting should work well")
        }

        await browser.pause(5000)

    });
});