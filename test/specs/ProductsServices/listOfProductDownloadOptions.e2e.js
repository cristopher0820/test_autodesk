import loginPage from  '../../../page_objects/loginPage/login.page'
import productsAndServPage from '../../../page_objects/pandsPage/productsAndServ.page'
import * as data_driven from '../../../data_driven/credentials.json'

describe('NOVA-2559 Scenario #4: Verify 3DSMAX Product has all download options (Download, Custom Install)', () => {
    it('UI should display products download options', async () => {
        let productCard = '3DSMAX_card';
        let nameValue = '3ds Max';

        const rdn_value = Math.floor(Math.random() * 5000);
        await browser.pause(rdn_value)

        await loginPage.open(data_driven.Environment.STGP);
        await loginPage.login(data_driven.Credentials.MultiProductDeployment.UserMuli, data_driven.Credentials.MultiProductDeployment.PasswMulti);



        await productsAndServPage.elmPandS()

        await browser.setWindowSize(1936, 1064)
        const windowSize = await browser.getWindowSize();
        //console.log(windowSize);

        // Verify the search field exists
        const items = await productsAndServPage.listOfItemMuiCardContent()
        await expect(productsAndServPage.inpSearch).toBeExisting()

        await productsAndServPage.searchValidate(nameValue)
        console.log(productCard+": Search Item opens")

        await expect(productsAndServPage.elmProductCard(productCard)).toBeExisting();
        console.log(productCard+": Card Item opens")

        await browser.pause(5000)

        // Verify 3DSMAX Title exist
        await expect(productsAndServPage.elmProductCard(productCard)).toBeExisting();

        // Verify 3DSMAX Drop Down Download Options
        await expect(productsAndServPage.elmDownloadDropDownArrow(productCard)).toBeExisting();

        // Click 3DSMAX Drop Down Download Options
        await productsAndServPage.clickDownloadDropDownArrow(productCard);

        // Check List of Download Options are available
        await expect(productsAndServPage.elmDropDownList()).toBeExisting();

        // Check Install Option is available
        //const optOne = await productsAndServPage.elmDownloadOptionOne()
        //expect(optOne).toBe('Install');

        // Check Download Option is available
        const optTwo = await productsAndServPage.elmDownloadOptionTwo()
        expect(optTwo).toBe('Download');

        // Check Custom Install Option is available
        const optThree = await productsAndServPage.elmDownloadOptionThree()
        expect(optThree).toBe('Custom Install');

    });
});