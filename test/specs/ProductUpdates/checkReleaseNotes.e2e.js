import loginPage from  '../../../page_objects/loginPage/login.page'
import productUpdatesPage from '../../../page_objects/productUpdates/productUpdates.page'
import * as data_driven from '../../../data_driven/credentials.json'

describe('NOVA-2729 Scenario #19: View release notes link opens the correct Product release notes page', () => {
    it('View release notes link should open the correct Product release notes page', async () => {

        const rdn_value = Math.floor(Math.random() * 5000);
        await browser.pause(rdn_value)
        
        await loginPage.open(data_driven.Environment.STGPU)
        await loginPage.login(data_driven.Credentials.MultiProductDeployment.UserMuli, data_driven.Credentials.MultiProductDeployment.PasswMulti);

        await productUpdatesPage.setReleaseDateAll('All')

        await productUpdatesPage.elmVirTable()

        await browser.pause(12000)

        //await browser.refresh()
        //await browser.pause(3000)

        //let updateData = data_ProductUpdates.details
        //console.log("updateItem: "+updateData[0].updateItem)

        //await productUpdatesPage.setReleaseDateAll('All')
        await productUpdatesPage.clickRightSideArrow(1)

        let parentGUID;
        let childGUID;
      
        // get parent GUID
        parentGUID = await browser.getWindowHandle();
        var titleParent = await browser.getTitle()
        
        // Validate View release notes link opens the correct Product release notes page
        await productUpdatesPage.clickPanelReleaseNotesLink()

        // get all GUID's
        const allGUIDs = await browser.getWindowHandles();

        // check all GUID's and see which one is the child
        for (let i = 0; i < allGUIDs.length; i++) {
            if (allGUIDs[i] !== parentGUID) {
            childGUID = allGUIDs[i];
            }
        }

        // console.log("childGUID: "+childGUID)

        // switch to child tab
        await browser.switchToWindow(childGUID);
        await browser.pause(2000)

        console.log("Url: "+await browser.getUrl())

        var titleChild = await browser.getTitle()
        console.log(titleChild);

        // Verify the title label exists
        expect(titleChild==titleParent).toBe(false)
        console.log("The title on Release Notes page displays well")

        console.log("The ond of the script: View release notes link opens well")
    });
});