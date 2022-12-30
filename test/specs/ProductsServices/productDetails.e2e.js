import loginPage from '../../../page_objects/loginPage/login.page'
import detailsPage from '../../../page_objects/detailsProducts/detailsPage.page'
import productsAndServPage from '../../../page_objects/pandsPage/productsandServ.page'
import * as data_driven from '../../../data_driven/credentials.json'
import * as product_details from '../../../data/ProductsServices/productDetails.json'

describe('NOVA-2560 Scenario #5: Validate all Product Details elements', () => {
    it('View details page should open well and contain all items required', async () => {
        let productDetails = product_details.details;
        const productName = productDetails[0].cardName
        const nameValue = productDetails[0].nameValue
        const badge = productDetails[0].badge
        const description = productDetails[0].description

        const rdn_value = Math.floor(Math.random() * 5000);
        await browser.pause(rdn_value)

        await loginPage.open(data_driven.Environment.STGP)
        await loginPage.login(data_driven.Credentials.MultiProductDeployment.UserMuli, data_driven.Credentials.MultiProductDeployment.PasswMulti);


        await productsAndServPage.elmPandS()

        await browser.setWindowSize(1936, 1064)
        const windowSize = await browser.getWindowSize();
        //console.log(windowSize);

        // Verify the search field exists
        const items = await productsAndServPage.listOfItemMuiCardContent()
        await expect(productsAndServPage.inpSearch).toBeExisting()

        await productsAndServPage.searchValidate(nameValue)
        console.log(productName+": Search Item opens")

        await expect(productsAndServPage.elmProductCard(productName)).toBeExisting();
        console.log(productName+": Card Item opens")

        await browser.pause(5000)


        await productsAndServPage.clickViewDetails(productName)
        //await detailsPage.productName.waitForDisplayed()

        await browser.pause(3000)

        expect (await detailsPage.backButton()).toBeExisting();
        expect(badge).toBe(productDetails[0].badge)
        expect(productName).toBe(productDetails[0].cardName)
        expect(description).toBe(productDetails[0].description)

        // Verify static links in the product details header section

        expect (await detailsPage.lnkViewSubscription()).toBeExisting();
        expect (await detailsPage.lnkViewPrdAssignment()).toBeExisting();
        expect (await detailsPage.lnkLicensesDetails()).toBeExisting();


        // Verify version information has all the elements loading
        expect (await detailsPage.lstOfLicenses()).toBeExisting();

        expect (await detailsPage.downloadCTA()).toBeExisting();

        expect (await detailsPage.versionDropdown()).toBeExisting();

        expect (await detailsPage.languageDropdown()).toBeExisting();

        // Verify available download section has all the elements loading

        expect (await detailsPage.availableDownloadsHeaderLabel()).toBeExisting();

        expect (await detailsPage.numTextAvailble()).toBeExisting();

        expect (await detailsPage.updateTabs()).toBeExisting();

        expect (await detailsPage.firstUpdateTabs()).toBeExisting();

        expect (await detailsPage.updateTableHeader()).toBeExisting();

        expect (await detailsPage.updateTableDate()).toBeExisting();

        expect (await detailsPage.updateFileSize()).toBeExisting();

        expect (await detailsPage.updateReleaseNotesLinks()).toBeExisting();
        
        expect (await detailsPage.allDownloadBtnInUpdatesTable()).toBeExisting();

    });
});