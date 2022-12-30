import Page from '../page';
//import allureReporter from "@wdio/allure-reporter";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class detailsPage extends Page {
    /**
     * define selectors using getter methods
     */
    get backButton() {
        return $("//div[contains(@class,'app-products-and-services__backArrow')]//button");
    }

    get badgeIcon() {
        return $("//div[contains(@class,'app-products-and-services__badgeIconName')] //img");
    }

    get productName() {
        return $("//div[contains(@class,'dhig-typography-headline-medium')]");
    }

    get productDesc() {
        return $("//div[contains(@data-testid,'details-text')] //p");
    }

    get lnkViewSubscription() {
        return $("//a[contains(text(),'View subscriptions')]");
    }

    get lnkViewPrdAssignment() {
        return $("//a[contains(text(),'View product assignments')]");
    }

    get lnkLicensesDetails() {
        return $("//a[contains(text(),'License details')]");
    }

    get lstOfLicenses() {
        return $(".app-products-and-services__serialNumberTableWrapper--_leFB .app-products-and-services__serialNumberTable--3Rzrv");
    }

    get downloadCTA() {
        return $("//button[(@data-testid='cta-button')]");
    }

    get versionDropdown() {
        return $("//div[(@data-testid='delivery-product-install-dropdown-platform')]");
    }

    get languageDropdown() {
        return $("//div[(@data-testid='delivery-product-install-dropdown-language')]");
    }

    get availableDownloadsHeaderLabel() {
        return $("//div[contains(text(),'Available downloads')]");
    }
    get numTextAvailble() {
        return $("//div[(@data-testid='NumExtAvailable-text')]");
    }
    get updateTabs() {
        return $("//div[(@data-testid='available-download-tab')] //button");
    }

    get firstUpdateTabs() {
        return $("//div[(@data-testid='available-download-tab')] //button [1]");
    }

    get updateTableHeader() {
        return $("//thead[contains(@class, 'cpd-delivery-product-details-MuiTableHead-root')]");
    }

    get allUpdatesRows() {
        return $("//td[contains(@class, 'cpd-delivery-product-details-MuiTableCell-root')] //span [contains(@class, 'dhig-typography-headline-smaller')]");
    }
    get updateTableDate() {
        return $("//tr[contains(@class, 'cpd-delivery-product-details-MuiTableRow-root')]// td[2]");

    }
    get updateFileSize() {
        return $("//tr[contains(@class, 'cpd-delivery-product-details-MuiTableRow-root')]// td[3]");

    }
    get updateReleaseNotesLinks() {
        return $("//tr[contains(@class, 'cpd-delivery-product-details-MuiTableRow-root')]// td[4] //a");

    }
    get allDownloadBtnInUpdatesTable() {
        return $("//td[contains(@class, 'cpd-delivery-product-details-MuiTableCell-root')] //button [contains(@data-testid, 'DownloadButton')]");
    }

    async backButton() {
        return await this.backButton
    }

    async lnkViewSubscription() {
        return await this.lnkViewSubscription
    }

    async lnkViewPrdAssignment() {
        return await this.lnkViewPrdAssignment
    }

    async lnkLicensesDetails() {
        return await this.lnkLicensesDetails
    }

    async lstOfLicenses() {
        return await this.lstOfLicenses
    }

    async downloadCTA() {
        return await this.downloadCTA
    }

    async versionDropdown() {
        return await this.versionDropdown
    }

    async languageDropdown() {
        return await this.languageDropdown
    }

    async availableDownloadsHeaderLabel() {
        return await this.availableDownloadsHeaderLabel
    }

    async numTextAvailble() {
        return await this.numTextAvailble
    }

    async updateTabs() {
        return await this.updateTabs
    }

    async firstUpdateTabs() {
        return await this.firstUpdateTabs
    }

    async updateTableHeader() {
        return await this.updateTableHeader
    }

    async allUpdatesRows() {
        return await this.allUpdatesRows
    }

    async updateTableDate() {
        return await this.updateTableDate
    }

    async updateFileSize() {
        return await this.updateFileSize
    }

    async updateReleaseNotesLinks() {
        return await this.updateReleaseNotesLinks
    }

    async allDownloadBtnInUpdatesTable() {
        return await this.allDownloadBtnInUpdatesTable
    }

    async listOfLicenseAreTheSame(data_Products) {

        await this.lnkLicensesDetails.waitForDisplayed();

        await this.lnkViewPrdAssignment.waitForDisplayed();

        const wrapperLicenses = await $$("(//div[contains(@class,'app-products-and-services__serialNumberTableWrapper--_leF')]//div[contains(@class,'app-products-and-services__serialNumberTable--3Rzrv')]//span[3])");
        const lstCount = wrapperLicenses.length

        let respWrapper = [];
        for (let i = 0; i < lstCount; i++) {
            let ind = i + 1;
            let strRespWrapper = await $("(//div[contains(@class,'app-products-and-services__serialNumberTableWrapper--_leF')]//div[contains(@class,'app-products-and-services__serialNumberTable--3Rzrv')]//span[3])" + "[" + ind + "]").getText();
            respWrapper.push(strRespWrapper)
            let elem = await $("(//div[contains(@class,'app-products-and-services__serialNumberTableWrapper--_leF')]//div[contains(@class,'app-products-and-services__serialNumberTable--3Rzrv')]//span[3])" + "[" + ind + "]");
            await elem.waitForDisplayed({ timeout: 3000 })
            allureReporter.addArgument('strRespWrapper' + ind, await elem.getText());
            console.log(await elem.getText());
        }
        respWrapper.sort();

        allureReporter.addArgument('respWrapper', respWrapper.join(','));

        let respAPI = [];
        let producServices = data_Products.Products.Licences;
        for (let ps in producServices) {
            allureReporter.addFeature(ps);
        }
        respAPI.sort();

        return respWrapper.length >= 2;

    }

    async elmTabsYearList(ind) {
        const elem1 = await $("//a[(text()='License details')]")
        await elem1.waitForDisplayed()

        const elem2 = await $("(//span[contains(@class, 'MuiTab-wrapper')])[" + ind + "]")
        await elem2.waitForClickable()
        await elem2.click()

        const elem3 = await $("//div[(@data-testid='details-text')]")
        await elem3.waitForDisplayed()

        return await elem3.getText()
    }

    async clickTabsYearList(txtYear) {
        const elem1 = await $("//div[contains(@class, 'AvailableDownloadSection')]")
        await elem1.waitForDisplayed()

        const elem2 = await $("//span[(text()="+txtYear+")]")
        await elem2.waitForClickable()
        await elem2.click()

        await browser.pause(3000)
    }

    async elmAccessList(ind, years) {
        const elem1 = await $("//a[(text()='License details')]")
        await elem1.waitForDisplayed()

        const elem2 = await $("(//span[contains(@class, 'MuiTab-wrapper')])[" + ind + "]")
        await elem2.waitForClickable()
        await elem2.click()

        const options = years[ind-1].options

        if (await elem2.getText() !== options[0]) {
              return false  
        }

        await browser.pause(3000)

        const elmTh = await $("//div[contains(@class, 'AvailableDownloadSection')]")
        await elmTh.waitForDisplayed()

        const elmArrow = await $("//span[contains(@class, 'MuiButton-label')]/*[local-name()='svg' and contains(@class, 'MuiSvgIcon-root')]")
        await elmArrow.waitForClickable()
        await elmArrow.click()

        await browser.pause(2000)

        for(let i=1; i<options.length; i++){
            const txtOption = await $("(//ul[contains(@class,'MuiList-padding')]/li)["+i+"]").getText()
            if (txtOption !== options[i]) {
                return false  
          }
        }

        browser.keys("Escape")
        
        return true
    }

    async clickBackButton() {
        const elem = await $("//div[contains(@class,'app-products-and-services__backArrow')]//button")
        await elem.waitForClickable()
        await elem.click()
    }

    async clickLicenseDetails() {
        const elem = await $("//a[contains(text(),'License details')]")
        await elem.waitForClickable()
        await elem.click()
        //await browser.pause(2000)
    }

    async clickGenerateLicense() {
        const elem = await $("//a[(text()='Generate network license file')]")
        await elem.waitForClickable()
        await elem.click()
        //await browser.pause(2000)
    }

    async elmSubscriptionsLink() {
        const elem = await $("//a[contains(text(),'View subscriptions')]")
        await elem.waitForClickable()
        console.log("SubscriptionsLink returns")
        return elem
    }

    async elmSubscriptionsMenu() {
        const elem = await $("//span[contains(text(),'Subscriptions and Contracts')]")
        await elem.waitForDisplayed()
        console.log("SubscriptionsMenu returns")
        return elem
    }

    async elmGenerateNetworkLicense() {
        const elem = await $("//a[(text()='Generate network license file')]")
        await elem.waitForDisplayed()
        console.log("GenerateNetworkLicense returns")
        return elem
    }

    async elmSerialNumberTableOne() {
        const elem = await $("//div[contains(@class,'serialNumberTable')]/span[3]")
        await elem.waitForDisplayed()
        console.log("SerialNumberTableOne: "+await elem.getText())
        return await elem.getText()
    }

    async elmSerialNumberTableTwo() {
        const elem = await $("//div[contains(@class,'serialNumberTable')]/span[5]")
        await elem.waitForDisplayed()
        console.log("SerialNumberTableTwo: "+await elem.getText())
        return await elem.getText()
    }

    async elmGetHelp() {
        const elem = await $("//a[(text()='Get help')]")
        await elem.waitForDisplayed()
        console.log("GetHelp returns")
        return elem
    }

    async elmAssignmentsLink() {
        const elem = await $("//a[contains(text(),'View product assignments')]")
        await elem.waitForClickable()
        console.log("AssignmentsLink returns")
        return elem
    }

    async elmAssignmentsMenu() {
        const elem = await $("//span[contains(text(),'By Product')]")
        await elem.waitForDisplayed()
        console.log("AssignmentsMenu returns")
        return elem
    }

    async elmUpdatesItems() {
        const elem1 = await $("//button/span[(text()='Updates')]")
        await elem1.waitForClickable()
        await elem1.click()

        const elem2 = await $("//tr[contains(@class, 'UpdatesRow')]")
        await elem2.waitForDisplayed()

        const elems = await $$("//tr[contains(@class, 'UpdatesRow')]")
        const lstCount = elems.length

        return lstCount
    }

    async elmLanguagesItems() {
        const elem1 = await $("//button/span[(text()='Languages')]")
        await elem1.waitForClickable()
        await elem1.click()

        const elem2 = await $("//tr[contains(@class, 'UpdatesRow')]")
        await elem2.waitForDisplayed()

        const elems = await $$("//tr[contains(@class, 'UpdatesRow')]")
        const lstCount = elems.length

        return lstCount
    }

    async elmExtensionsItems() {
        const elem1 = await $("//button/span[(text()='Extensions')]")
        await elem1.waitForClickable()
        await elem1.click()

        const elem2 = await $("//tr[contains(@class, 'UpdatesRow')]")
        await elem2.waitForDisplayed()

        const elems = await $$("//tr[contains(@class, 'UpdatesRow')]")
        const lstCount = elems.length

        return lstCount
    }

    async elmHeadlineLarge() {
        const elem = await $("//div[contains(@class,'headline-large')]")
        await elem.waitForDisplayed()
        return elem
    }
}

export default new detailsPage();