import loginPage from  '../../../page_objects/loginPage/login.page'
import productUpdatesPage from '../../../page_objects/productUpdates/productUpdates.page'
import * as data_driven from '../../../data_driven/credentials.json'
import * as data_ProductUpdates from '../../../data/ProductUpdates/updateElements.json'

describe('NOVA-2723 Scenario #13: Search and Release Date filter works well', () => {
    it('Search field and Release Date filter should work well', async () => {

        const rdn_value = Math.floor(Math.random() * 5000);
        await browser.pause(rdn_value)
        
        await loginPage.open(data_driven.Environment.STGPU)
        await loginPage.login(data_driven.Credentials.MultiProductDeployment.UserMuli, data_driven.Credentials.MultiProductDeployment.PasswMulti);

        await productUpdatesPage.setReleaseDateAll('All')

        await productUpdatesPage.elmVirTable()

        let updateData = data_ProductUpdates.details
        console.log("updateItem: "+updateData[0].updateItem)

        await productUpdatesPage.setReleaseDateAll('All')

        await productUpdatesPage.searchValidate(updateData[0].updateItem)
        console.log("Search Item opens")

        // Verify the search value exists
        const elem = await productUpdatesPage.elmSearchRaw(2)
        const result = await elem.getText()
        expect(result.includes(updateData[0].updateItem)).toBe(true)
        console.log("Search item exists in results: "+result)

        await productUpdatesPage.clickClearFilters()

        // Get number of Items for All filter
        const itemsAll = await productUpdatesPage.elmItemCount()
        const itemsCountAll = itemsAll.length
        console.log("itemsCountAll: "+itemsCountAll)
        expect(itemsCountAll>15).toBe(true)

        await productUpdatesPage.setReleaseDateAll('Past 6 months')

        // Get number of Items for Past 6 months filter
        const itemsPast6m = await productUpdatesPage.elmItemCount()
        const itemsCountPast6m = itemsPast6m.length
        console.log("itemsCountPast6m: "+itemsCountPast6m)
        expect(itemsCountPast6m<itemsCountAll).toBe(true)

        await productUpdatesPage.setReleaseDateAll('Past 3 months')

        // Get number of Items for Past 3 months filter
        const itemsPast3m = await productUpdatesPage.elmItemCount()
        const itemsCountPast3m = itemsPast3m.length
        console.log("itemsCountPast3m: "+itemsCountPast3m)
        expect(itemsCountPast3m<itemsCountPast6m).toBe(true)

        await productUpdatesPage.setReleaseDateAll('Past 30 days')

        // Get number of Items for Past 30 days filter
        const itemsPast30d = await productUpdatesPage.elmItemCount()
        const itemsCountPast30d = itemsPast30d.length
        console.log("itemsCountPast30d: "+itemsCountPast30d)
        expect(itemsCountPast30d<=itemsCountPast3m).toBe(true)
    });
});