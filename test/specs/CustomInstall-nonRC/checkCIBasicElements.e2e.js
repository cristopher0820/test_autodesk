import loginPage from  '../../../page_objects/loginPage/login.page'
import customInstallPage from '../../../page_objects/customInstall/customInstall.page'
import * as data_driven from '../../../data_driven/credentials.json'
import * as data_CustomInstall from '../../../data/CustomInstall/customInstallElements.json'

describe('NOVA-2824 Scenario #22: Custom install Page - Basic elements', () => {
    it('UI should display Custom Install key elements for the package items', async () => {
        await loginPage.open(data_driven.Environment.STGCI_nonRC)
        await loginPage.login(data_driven.Credentials.non_RC.Username, data_driven.Credentials.non_RC.Password);

        await customInstallPage.elmListWrapper()

        // Verify the title label exists
        await expect(customInstallPage.elmTitleLbl()).toBeExisting()
        console.log("Custom Install title exists");

        // Verify Create New button exists
        await expect(customInstallPage.elmCreateNewBtn()).toBeExisting()
        console.log("Create New button exists");

        // Verify the search input field exists
        await expect(customInstallPage.elmSearchInp()).toBeExisting()
        console.log("Search input field exists");

        // Verify Header Name column exists
        await expect(customInstallPage.elmHeaderName()).toBeExisting()
        console.log("Header Name column exists");

        // Verify Header Type column exists
        await expect(customInstallPage.elmHeaderType()).toBeExisting()
        console.log("Header Type column exists");

        // Verify Header ModifiedDate column exists
        await expect(customInstallPage.elmHeaderModifiedDate()).toBeExisting()
        console.log("Header ModifiedDate column exists");

        // Verify Header Products column exists
        await expect(customInstallPage.elmHeaderProducts()).toBeExisting()
        console.log("Header Products column exists");

        // Verify Header EventIcons column exists
        await expect(customInstallPage.elmHeaderEventIcons()).toBeExisting()
        console.log("Header EventIcons column exists");

        // Verify Header EditLink column exists
        await expect(customInstallPage.elmHeaderEditLink()).toBeExisting()
        console.log("Header EditLink column exists");

        // Verify ListItem column exists
        await expect(customInstallPage.elmListItem()).toBeExisting()
        console.log("List Item exists");

        // Verify Download icon exists
        await expect(customInstallPage.elmIconImg(1)).toBeExisting()
        console.log("Download icon exists");

        // Verify Duplicate icon exists
        await expect(customInstallPage.elmIconImg(2)).toBeExisting()
        console.log("Duplicate icon exists");

        // Verify Delete icon exists
        await expect(customInstallPage.elmIconImg(3)).toBeExisting()
        console.log("Delete icon exists");

        // Verify Info Tip icon exists
        await expect(customInstallPage.elmIconImg(4)).toBeExisting()
        console.log("Info tip icon exists");

        // Verify Edit link exists
        await expect(customInstallPage.elmEditLnk()).toBeExisting()
        console.log("Edit link exists");

        // Verify Pagination List exists
        await expect(customInstallPage.elmPaginationList()).toBeExisting()
        console.log("Pagination List exists");

        await browser.pause(3000)
        console.log("The ond of the script: UI should display Custom Install key elements for the package items")
    });
});