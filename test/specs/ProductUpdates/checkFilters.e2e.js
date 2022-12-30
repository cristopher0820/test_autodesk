import loginPage from  '../../../page_objects/loginPage/login.page'
import productUpdatesPage from '../../../page_objects/productUpdates/productUpdates.page'
import * as data_driven from '../../../data_driven/credentials.json'
import * as data_ProductUpdates from '../../../data/ProductUpdates/updateElements.json'

describe('NOVA-2724 Scenario #14: Type, Product, Release version filters work well', () => {
    it('Type, Product, Release version filters should work well', async () => {

        const rdn_value = Math.floor(Math.random() * 5000);
        await browser.pause(rdn_value)
        
        await loginPage.open(data_driven.Environment.STGPU)
        await loginPage.login(data_driven.Credentials.MultiProductDeployment.UserMuli, data_driven.Credentials.MultiProductDeployment.PasswMulti);

        await productUpdatesPage.setReleaseDateAll('All')

        await productUpdatesPage.elmVirTable()

        let updateData = data_ProductUpdates.details
        console.log("updateItem: "+updateData[0].updateItem)

        //await productUpdatesPage.setReleaseDateAll('All')

        // Validate Type filter work well
        await productUpdatesPage.clickFilters()
        await productUpdatesPage.clickFilter('type')
        await productUpdatesPage.clickFilterValue('type', 'Update')
        await productUpdatesPage.clickApplyBtn()

        const elemType = await productUpdatesPage.elmLbl('type', 'Update')
        const resultType = await elemType.getText()
        expect(resultType=='Update').toBe(true)
        console.log("Type filter item exists in results: "+resultType)

        await productUpdatesPage.clickClearFilters()


        // Validate Product filter work well
        await productUpdatesPage.clickFilters()
        await productUpdatesPage.clickFilter('product')
        await productUpdatesPage.clickFilterValue('product', '3ds Max')
        await productUpdatesPage.clickApplyBtn()

        const elemProduct = await productUpdatesPage.elmLbl('product', '3ds Max')
        const resultProduct = await elemProduct.getText()
        expect(resultProduct=='3ds Max').toBe(true)
        console.log("Product filter item exists in results: "+resultProduct)

        await productUpdatesPage.clickClearFilters()


        // Validate Release version filter work well
        await productUpdatesPage.clickFilters()
        await productUpdatesPage.clickFilter('version')
        await productUpdatesPage.clickFilterValue('version', '2022')
        await productUpdatesPage.clickApplyBtn()

        const elemVersion = await productUpdatesPage.elmLbl('version', '2022')
        const resultVersion = await elemVersion.getText()
        expect(resultVersion=='2022').toBe(true)
        console.log("Release version filter item exists in results: "+resultVersion)
        

        // Validate Reset filters functionality works well
        await productUpdatesPage.clickFilters()
        await productUpdatesPage.clickResetFilters()
        expect (await productUpdatesPage.elmUpdatesLbl()).toBeExisting();
        console.log("Reset filters work well")

        // Validate Save as custom filter functionality works well
        await productUpdatesPage.clickFilters()
        await productUpdatesPage.clickFilter('version')
        await productUpdatesPage.clickFilterValue('version', '2022')
        await productUpdatesPage.clickSaveFilterBtn()

        await productUpdatesPage.clickFilters()
        await productUpdatesPage.clickFilter('bookmarks')

        expect (await productUpdatesPage.elmbBokmarksLbl()).toBeExisting();
        console.log("Save as custom option works well")
    });
});