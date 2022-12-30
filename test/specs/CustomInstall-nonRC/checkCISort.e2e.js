import loginPage from  '../../../page_objects/loginPage/login.page'
import customInstallPage from '../../../page_objects/customInstall/customInstall.page'
import * as data_driven from '../../../data_driven/credentials.json'
import * as data_CustomInstall from '../../../data/CustomInstall/customInstallElements.json'

describe('NOVA-2834 Scenario #30: Custom install Page - Sort functionality', () => {
    it('Sort functionality should work well - By Product name', async () => {
        await loginPage.open(data_driven.Environment.STGCI_nonRC)
        await loginPage.login(data_driven.Credentials.non_RC.Username, data_driven.Credentials.non_RC.Password);

        await customInstallPage.elmListWrapper()

        // Get first package name
        let package_name = await customInstallPage.elmGetPckName()
        console.log("Package name got: ", package_name);

        // Click on the Package header for sorting
        await customInstallPage.clickHeaderName()
        console.log("Package name header was clicked");

        // Get actual package name
        let actualPackage_name = await customInstallPage.elmGetPckName()
        console.log("New Package name got: ", actualPackage_name);

        expect(actualPackage_name == package_name).toBe(false)
        
        console.log("The end of the script: Sort functionality should work well")
    });

    it('Sort functionality should work well - By Product type', async () => {
        // Click on the Package type header for sorting
        await customInstallPage.clickHeaderType()
        console.log("Package type header was clicked");

        // Get first package name
        let package_type = await customInstallPage.elmGetPckType("3wRBw")
        console.log("Package type got: ", package_type);

        // Click on the Package type header for sorting
        await customInstallPage.clickHeaderType()
        console.log("Package type header was clicked");

        // Get actual package name
        let actualPackage_type = await customInstallPage.elmGetPckType("3wRBw")
        console.log("New Package type got: ", actualPackage_type);

        expect(actualPackage_type == package_type).toBe(false)
        
        console.log("The end of the script: Sort functionality should work well")
    });

    it('Sort functionality should work well - By Last Saved', async () => {
        // Click on the Package last saved header for sorting
        await customInstallPage.clickHeaderModifiedDate()
        console.log("Package last saved header was clicked");

        // Get first Last saved
        let package_lastSaved = await customInstallPage.elmGetPckLastSaved("3wRBw")
        console.log("Package last saved got: ", package_lastSaved);

        // Click on the Package last saved header for sorting
        await customInstallPage.clickHeaderModifiedDate()
        console.log("Package last saved header was clicked");

        // Get actual package Last saved
        let actualPackage_lastSaved = await customInstallPage.elmGetPckLastSaved("3wRBw")
        console.log("New Package last saved got: ", actualPackage_lastSaved);

        expect(actualPackage_lastSaved == package_lastSaved).toBe(false)
        
        console.log("The end of the script: Sort functionality should work well")
    });

    it('Sort functionality should work well - By Products', async () => {
        // Click on the Package products header for sorting
        await customInstallPage.clickHeaderProducts()
        console.log("Package products header was clicked");

        // Get first package products
        let package_products = await customInstallPage.elmGetPckProducts("3LDKM")
        console.log("Package products got: ", package_products);

        // Click on the Package products header for sorting
        await customInstallPage.clickHeaderProducts()
        console.log("Package products header was clicked");

        // Get actual package products
        let actualPackage_products = await customInstallPage.elmGetPckProducts("3LDKM")
        console.log("New Package products got: ", actualPackage_products);

        expect(actualPackage_products == package_products).toBe(false)
        
        console.log("The end of the script: Sort functionality should work well")
    });
});