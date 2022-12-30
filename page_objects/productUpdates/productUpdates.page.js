import Page from '../page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class productUpdates extends Page {

    async elmVirTable() {
        const elem = await $("//div[(@class='ReactVirtualized__Table')]")
        await elem.waitForDisplayed()
        return elem
    }

    async elmTitle() {
        const elem = await $("//p[(text()='Product Updates')]")
        await elem.waitForDisplayed()
        return elem
    }

    async elmSearch() {
        const elem = await $("//input[(@placeholder='Search...')]")
        await elem.waitForDisplayed()
        return elem
    }

    async elmFilters() {
        const elem = await $("//button[(@data-testid='delivery-updates-filters')]")
        await elem.waitForDisplayed()
        return elem
    }

    async elmHeaderRaw() {
        const elem = await $("//div[contains(@class, 'headerRow')]")
        await elem.waitForDisplayed()
        return elem
    }

    async elmItemRaw() {
        const elem = await $("//div[contains(@class, 'app-products-and-services__SimpleFlex')]")
        await elem.waitForDisplayed()
        return elem
    }

    async elmTypeRaw() {
        const elem = await $("//div[contains(@class, 'Table__rowColumn delivery-updates')][3]")
        await elem.waitForDisplayed()
        return elem
    }

    async elmSizeRaw() {
        const elem = await $("//div[(@aria-rowindex='1')]/div[(@aria-colindex='4')]")
        await elem.waitForDisplayed()
        return elem
    }

    async elmReleaseDateRaw() {
        const elem = await $("//div[(@aria-rowindex='1')]/div[(@aria-colindex='5')]")
        await elem.waitForDisplayed()
        return elem
    }

    async elmDownloadBtn() {
        const elem = await $("//div[(@aria-rowindex='1')]/div[(@aria-colindex='6')]")
        await elem.waitForClickable()
        return elem
    }

    async searchValidate(SearchPhrase) {
        const elem = await $("//input[contains(@placeholder,'Search')]")
        await elem.waitForDisplayed()
        await elem.setValue(SearchPhrase)
        browser.keys("Enter")
        return elem
    }

    async setReleaseDateAll(rangeValue) {
        const elem1 = await $("//div[contains(@class, 'MuiInputBase-input')]")
        await elem1.waitForClickable()
        await elem1.click()
        const elem2 = await $("//ul/li[(text()='"+rangeValue+"')]")
        await elem2.waitForClickable()
        await elem2.click()
        await browser.pause(2000)
        return elem1
    }

    async elmSearchRaw(i) {
        const elem = await $("//div[(@aria-rowindex='1')]/div[(@aria-colindex='"+i+"')]")
        await elem.waitForDisplayed()
        return elem
    }

    async elmItemCount() {
        const elem = await $$("//div[(@aria-colindex='2')]")
        return elem
    }

    async clickClearFilters() {
        const elem = await $("//a/span[(text()='Clear filters')]")
        await elem.waitForClickable()
        await elem.click()
        await browser.pause(2000)
        return elem
    }

    async clickFilters() {
        const elem = await $("//button[(@data-testid='delivery-updates-filters')]")
        await elem.waitForClickable()
        await elem.click()
        return elem
    }

    async clickFilter(value) {
        const elem = await $("//div[(@data-testid='delivery-filter-accordion-"+value+"')]")
        await elem.waitForClickable()
        await elem.click()
        return elem
    }

    async clickFilterValue(value1, value2) {
        const elem = await $("//span[(@data-testid='delivery-"+value1+"-"+value2+"')]")
        await elem.waitForClickable()
        await elem.click()
        return elem
    }

    async clickApplyBtn() {
        const elem = await $("//button/span[(text()='Apply')]")
        await elem.waitForClickable()
        await elem.click()
        return elem
    }

    async elmLbl(value1, value2) {
        const elem = await $("//div[(@data-testid='"+value1+"-"+value2+"')]/span")
        await elem.waitForDisplayed()
        return elem
    }

    async clickResetFilters() {
        const elem = await $("//a[(@data-testid='reset-filters')]/p[(text()='Reset filters')]")
        await elem.waitForClickable()
        await elem.click()
        return elem
    }

    async elmUpdatesLbl() {
        const elem = await $("//p[starts-with(text(), 'Updates')]")
        await elem.waitForDisplayed()
        return elem
    }

    async clickSaveFilterBtn() {
        const elem = await $("//button/span[(text()='Save as custom filter')]")
        await elem.waitForClickable()
        await elem.click()
        return elem
    }

    async elmbBokmarksLbl() {
        const elem = await $("//a[(@data-testid='saved filter 1-bookmark')]")
        await elem.waitForDisplayed()
        return elem
    }

    async clickSorting(i) {
        const elem = await $("(//span[contains(@class, 'MuiTableSortLabel')])["+i+"]")
        await elem.waitForClickable()
        await elem.click()
        return elem
    }

    async clickDownloadButton(value) {
        const elem = await $("//div[(@aria-rowindex='"+value+"')]/div[(@aria-colindex='6')]//button")
        await elem.waitForClickable()
        await elem.click()
        await browser.pause(2000)
        return elem
    }

    async clickRightSideArrow(ind) {
        const elem = await $("//div[(@aria-rowindex='"+ind+"')]/div[(@aria-colindex='7')]/td")
        await elem.waitForClickable()
        await elem.click()
        await browser.pause(2000)
        return elem
    }

    async elmPanelProductTitle() {
        const elem = await $("//div[contains(@class, 'UpdateSidePanel')]/div[contains(@class, 'SimpleFlex')]")
        await elem.waitForDisplayed()
        return elem
    }

    async elmPanelProductLink() {
        const elem = await $("(//div[contains(@class, 'UpdateSidePanel')]/a[contains(@class, 'underlineHover')])[1]")
        await elem.waitForDisplayed()
        return elem
    }

    async elmPanelReleaseNotesLink() {
        const elem = await $("(//div[contains(@class, 'UpdateSidePanel')]/a[contains(@class, 'underlineHover')])[2]")
        await elem.waitForDisplayed()
        return elem
    }

    async elmPanelTypeTxt() {
        const elem = await $("//div[contains(@class, 'UpdateSidePanel')]/p[(text()='Type:')]/following-sibling::p[1]")
        await elem.waitForDisplayed()
        return elem
    }

    async elmPanelReleaseDateTxt() {
        const elem = await $("//div[contains(@class, 'UpdateSidePanel')]/p[(text()='Release date:')]/following-sibling::p[1]")
        await elem.waitForDisplayed()
        return elem
    }

    async elmPanelSizeTxt() {
        const elem = await $("//div[contains(@class, 'UpdateSidePanel')]/p[(text()='Size:')]/following-sibling::p[1]")
        await elem.waitForDisplayed()
        return elem
    }

    async elmPanelSeverityTxt() {
        const elem = await $("//div[contains(@class, 'UpdateSidePanel')]/p[(text()='Severity:')]/following-sibling::p[1]")
        await elem.waitForDisplayed()
        return elem
    }

    async elmPanelDescriptionTxt() {
        const elem = await $("//div[contains(@class, 'UpdateSidePanel')]/p[(text()='Description:')]/following-sibling::p[1]")
        await elem.waitForDisplayed()
        return elem
    }

    async elmPanelDownloadBtn() {
        const elem = await $("//div[contains(@class, 'UpdateSidePanel')]/button/span[(text()='Download')]")
        await elem.waitForDisplayed()
        return elem
    }

    async clickPanelProductLink() {
        const elem = await $("(//div[contains(@class, 'UpdateSidePanel')]/a[contains(@class, 'underlineHover')])[1]")
        await elem.waitForClickable()
        await elem.click()
        await browser.pause(2000)
        return elem
    }

    async clickPanelReleaseNotesLink() {
        // const elem = await $("(//div[contains(@class, 'UpdateSidePanel')]/a[contains(@class, 'underlineHover')])[2]")
        const elem = await $("//a[contains(@href, 'releasenotes')]")
        //await elem.waitForClickable()
        await elem.click()
        await browser.pause(2000)
        return elem
    }

    async clickCheckBox(value) {
        //const elem = await $("//div/p[(text()='"+value+"')]/parent::*/parent::*/parent::*/parent::*/parent::div/div[(@aria-colindex='1')]/td//span[contains(@class, 'MuiIconButton-label')]")
        const elem = await $("//div/p[(text()='"+value+"')]/../../../../../div[(@aria-colindex='1')]/td//span[contains(@class, 'MuiIconButton-label')]")
        await elem.waitForClickable()
        await elem.click()
        await browser.pause(2000)
        return elem
    }

    async elmItemsSelected() {
        const elem = await $("//div[contains(@class, 'MuiSnackbarContent-message')]")
        await elem.waitForDisplayed()
        return elem
    }

    async clickDownloadPackage() {
        const elem = await $("//div[contains(@class, 'MuiSnackbarContent-action')]/button")
        await elem.waitForClickable()
        await elem.click()
        await browser.pause(2000)
        return elem
    }

    async clickProductItem(value) {
        const elem = await $("//div/p[(text()='"+value+"')]")
        await elem.waitForClickable()
        await elem.click()
        await browser.pause(2000)
        return elem
    }

    async clickPanelDownloadBtn() {
        const elem = await $("//div[contains(@class, 'UpdateSidePanel')]/button/span[(text()='Download')]")
        await elem.waitForClickable()
        await elem.click()
        await browser.pause(2000)
        return elem
    }
}

export default new productUpdates();