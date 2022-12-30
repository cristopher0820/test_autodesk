import Page from '../page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class customInstall extends Page {

    async elmListWrapper() {
        const elem = await $("//div[contains(@class,'app-product-deployments__listWrapper')]")
        await elem.waitForDisplayed()
        return elem
    }

    async elmTitleLbl() {
        const elem = await $("//p[(text()='Custom Install')]")
        await elem.waitForDisplayed()
        return elem
    }

    async elmCreateNewBtn() {
        const elem = await $("//button/span[(text()='Create new')]")
        await elem.waitForDisplayed()
        return elem
    }

    async elmSearchInp() {
        const elem = await $("//input[contains(@placeholder,'Search')]")
        await elem.waitForDisplayed()
        return elem
    }

    async putSearchInp(value) {
        const elem = await $("//input[contains(@placeholder,'Search')]")
        await elem.waitForDisplayed()
        await elem.setValue(value)
        return elem
    }

    async elmHeaderName() {
        const elem = await $("//div[(@id='header-name')]")
        await elem.waitForDisplayed()
        return elem
    }

    async clickHeaderName() {
        const elem = await $("//div[(@id='header-name')]")
        await elem.click()
        return elem
    }

    async elmHeaderType() {
        const elem = await $("//div[(@id='header-type')]")
        await elem.waitForDisplayed()
        return elem
    }

    async clickHeaderType() {
        const elem = await $("//div[(@id='header-type')]")
        await elem.click()
        return elem
    }

    async elmHeaderModifiedDate() {
        const elem = await $("//div[(@id='header-modifiedDate')]")
        await elem.waitForDisplayed()
        return elem
    }

    async clickHeaderModifiedDate() {
        const elem = await $("//div[(@id='header-modifiedDate')]")
        await elem.click()
        return elem
    }

    async elmHeaderProducts() {
        const elem = await $("//div[(@id='header-products')]")
        await elem.waitForDisplayed()
        return elem
    }

    async clickHeaderProducts() {
        const elem = await $("//div[(@id='header-products')]")
        await elem.click()
        return elem
    }

    async clickDuplicatePackage() {
        const elem = await $("((//div[contains(@class,'listItem')])[1]//div[(@class='css-1gomreu')])[3]")
        await elem.moveTo();
        await elem.waitForClickable()
        await elem.click()
        return elem
    }

    async clickDownloadPackage() {
        const elem = await $("((//div[contains(@class,'listItem')])[1]//div[(@class='css-1gomreu')])[4]")
        await elem.moveTo();
        await elem.waitForClickable()
        await elem.click()
        return elem
    }

    async clickDeletePackage() {
        const elem = await $("((//div[contains(@class,'listItem')])[1]//div[(@class='css-1gomreu')])[1]")
        await elem.moveTo();
        await elem.waitForClickable()
        await elem.click()

        const elemDel = await $("//button/span[(text()='Delete')]")
        await elemDel.waitForClickable()
        await elemDel.click()

        await browser.pause(5000)
        
        return elem
    }

    async clickInfoPackage() {
        const elem = await $("((//div[contains(@class,'listItem')])[1]//div[(@class='css-1gomreu')])[5]")
        await elem.moveTo();
        await browser.pause(3000)
        const txtInfo = await elem.getText()
        return txtInfo
    }

    async elmHeaderEventIcons() {
        const elem = await $("//div[(@id='header-eventIcons')]")
        await elem.waitForDisplayed()
        return elem
    }

    async elmHeaderEditLink() {
        const elem = await $("//div[(@id='header-editLink')]")
        await elem.waitForDisplayed()
        return elem
    }

    async elmListItem() {
        const elem = await $("(//div[contains(@class,'listItem')])[1]")
        await elem.waitForDisplayed()
        return elem
    }

    async elmIconImg(value) {
        const elem = await $("((//div[contains(@class,'listItem')])[1]//div[contains(@class, 'icons--')]//div[(@class='css-k008qs')])["+value+"]")
        return elem
    }

    async elmEditLnk() {
        const elem = await $("(//div[contains(@class,'listItem')])[1]//a[(text()='Edit')]")
        return elem
    }

    async elmPaginationList() {
        const elem = await $("//ul[contains(@class, 'paginationList')]")
        await elem.waitForDisplayed()
        return elem
    }

    async elmSelectedVersionLbl() {
        const elem = await $("//p[contains(@class, 'selectedVersion')]")
        await elem.waitForDisplayed()
        return elem
    }

    async elmWhatsIncludedContentLbl() {
        const elem = await $("//div[contains(@class, 'whatsIncludedContent')]")
        await elem.waitForDisplayed()
        return elem
    }
    
    async clickItemLnk() {
        const elem = await $("(//div[contains(@class,'listItem')])[1]")
        await elem.click()
        return elem
    }

    async clickTeamLibraryTab() {
        const elem = await $("//button/span[(text()='Team Library')]")
        await elem.click()
        await browser.pause(2000)
        return elem
    }

    async elmGetPckName() {
        const elem = await $("(//div[contains(@class,'listItem')])[1]//div[contains(@class, 'columnName')]/div")
        return await elem.getText()
    }

    async elmGetFirstPkgName() {
        const elem = await $("(//div[contains(@class,'listItem')])[1]//div[contains(@class, 'columnName')]/div")
        return await elem.getText()
    }

    async elmSetPkgName(value, value_2) {
        await browser.pause(5000)

        const elem = await $("(//div[contains(@class,'listItem')])[1]//div[contains(@class, 'columnName')]/div")
        await elem.moveTo()
        await elem.waitForClickable()
        await elem.click()
		
		await browser.keys(["Control", "A"])
        await browser.keys(value)
        await browser.keys(["Enter"])
		
		await browser.pause(3000)
        const packageType = await $("(//div[contains(@class, '"+value_2+"')])[1]")
        await packageType.moveTo()
        return elem
    }

    async elmGetPckType(value) {
        const elem = await $("(//div[contains(@class, '"+value+"')])[1]")
        return await elem.getText()
    }

    async elmGetPckLastSaved(value) {
        const elem = await $("(//div[contains(@class, '"+value+"')])[2]")
        return await elem.getText()
    }

    async elmGetPckProducts(value) {
        const elem = await $("(//div[contains(@class, '"+value+"')])[1]")
        return await elem.getText()
    }

    async elmProductChecked(value) {
        const elem = await $("//input[(@id='"+value+"')]")

        await elem.isSelected()
        return elem
    }

    async elmLanguage() {
        const elem = await $("(//div[contains(@class,'cpd-delivery-ci-MuiSelect-root cpd-delivery-ci-MuiSelect-select cpd-delivery-ci-MuiSelect-selectMenu cpd-delivery-ci-MuiSelect-outlined cpd-delivery-ci-MuiInputBase-input cpd-delivery-ci-MuiOutlinedInput-input')])[1]")
        await elem.getText()
        return elem
    }

    async clickCreateNewBtn() {
        const elem = await $("//button/span[(text()='Create new')]")
        await elem.waitForClickable()
        await elem.click()
        await browser.pause(2000)
        return elem
    }

    async clickWhatsIncludedLnk() {
        const elem = await $("//a[contains(text(), 'included')]")
        await elem.waitForClickable()
        await elem.click()
        await browser.pause(2000)
        return elem
    }

    async clickLicenseTypeSel() {
        const elem = await $("//div[(@id='select-license-type')]")
        await elem.waitForClickable()
        await elem.click()
        return elem
    }

    async clicklicenseServerModelSel() {
        const elem = await $("//div[(@id='modelSelection')]")
        await elem.waitForClickable()
        await elem.click()
        return elem
    }

    async clickLicenseTypeItem(value) {
        const elem = await $("//ul/li[(@data-value='"+value+"')]")
        await elem.waitForClickable()
        await elem.click()
        await browser.pause(2000)
        return elem
    }

    async clickLanguageTypeSel() {
        const elem = await $("(//div[contains(@class, 'cpd-delivery-ci-MuiSelect-selectMenu')])[2]")
        await elem.waitForClickable()
        await elem.click()
        return elem
    }

    async elmLanguageName(value) {
        const elem = await $("//ul/li/div[(text()='"+value+"')]")
        return await elem
    }

    async clickProductItem(value) {
        const elem = await $("//input[(@id='"+value+"')]")
        await elem.click()
        await browser.pause(10000)
        return elem
    }

    async clickProductItemP(value) {
        const elem = await $("//div/p[(text()='"+value+"')]")
        await elem.click()
        await browser.pause(10000)
        return elem
    }

    async clickProductTab(value) {
        const elem = await $("//div/p[(text()='"+value+"')]")
        await elem.click()
        await browser.pause(2000)
        return elem
    }

    async elmInstallSupportContent() {
        const elem = await $("//input[(@id='root_SUPPORT_CONTENT_ROOT')]")
        await elem.waitForDisplayed()
        return elem
    }

    async elmCustomFolderPath() {
        const elem = await $("//input[(@id='root_SUPPORT_CONTENT_CUSTOM_PATH')]")
        await elem.waitForDisplayed()
        return elem
    }

    async elmLockSecuritySettings() {
        const elem = await $("//input[(@id='root_LOCKSECURITYSETTINGS')]")
        return elem
    }

    async elmSecurityLevel() {
        const elem = await $("//input[(@id='root_SECURELOAD')]")
        await elem.waitForDisplayed()
        return elem
    }

    async elmTrustedLocations() {
        const elem = await $("//input[(@id='root_ACADProfile_TrustedPaths')]")
        await elem.waitForDisplayed()
        return elem
    }

    async elmTrustedDomainNames() {
        const elem = await $("//input[(@id='root_ACADProfile_TrustedDomains')]")
        await elem.waitForDisplayed()
        return elem
    }

    async elmLegacyCodeSearch(value) {
        const elem = await $("//input[(@id='root_LEGACYCODESEARCH-"+value+"')]")
        return elem
    }

    async elmACADLspAsDoc(value) {
        const elem = await $("//input[(@id='root_ACADLspAsDoc-"+value+"')]")
        return elem
    }

    async elmExpressTools() {
        const elem = await $("//input[(@id='root_ACOMP_EXPRESS_TOOLS')]")
        return elem
    }

    async elmUseOnlineContent() {
        const elem = await $("//input[(@id='root_ACAD_USE_ONLINE_CONTENT')]")
        return elem
    }

    async elmAllowAccess() {
        const elem = await $("//input[(@id='root_ACAD_SUBSCRIPTIONCENTER_ENABLE')]")
        return elem
    }

    async elmIncludeComputerName() {
        const elem = await $("//input[(@id='root_ACAD_ENABLE_SEND_PC_NAME')]")
        return elem
    }

    async elmReceiveNotification() {
        const elem = await $("//input[(@id='root_ACAD_ENABLE_ROUNDTRIP')]")
        return elem
    }

    async elmCreateDesktopShortcut() {
        const elem = await $("//input[(@id='root_ADSK_DESKTOPSHORTCUT_1')]")
        return elem
    }

    async elmBrowseBtn() {
        const elem = await $("//input[(@id='root_CUSTOM_PROFILE-file')]")
        return elem
    }

    async elmNext1Btn() {
        const elem = await $("//button[(@id='DeploymentsStep1NextButton')]")
        await elem.click()
        await browser.pause(2000)
        return elem
    }

    async elmPackageName() {
        const elem = await $("//input[(@id='package-name')]")
        return elem
    }

    async inpPackageName(value) {
        const elem = await $("//input[(@id='package-name')]")
        await elem.waitForClickable()
        await elem.setValue(value)
        return elem
    }

    async inpPackageDesc(value) {
        const elem = await $("(//input[contains(@class, 'MuiInput-input')])[2]")
        await elem.waitForClickable()
        await elem.setValue(value)
        return elem
    }

    async inpDeploymentImagePath(value) {
        const elem = await $("(//input[contains(@class, 'MuiInput-input')])[3]")
        await elem.waitForClickable()
        await elem.setValue(value)
        await browser.pause(1000)
        return elem
    }

    async inpDeploymentLogFilePath() {
        const elem = await $("(//input[contains(@class, 'MuiInput-input')])[4]")
        await elem.waitForClickable()
        await elem.click()
        await browser.pause(1000)
        return elem
    }

    async inpInstallationPath() {
        const elem = await $("(//input[contains(@class, 'MuiInput-input')])[5]")
        await elem.waitForClickable()
        await elem.click()
        await browser.pause(1000)
        return elem
    }

    async elmPackageDescription() {
        const elem = await $("//input[(@class='cpd-delivery-ci-MuiInputBase-input cpd-delivery-ci-MuiInput-input')][1]")
        return elem
    }

    async elmInstallButton() {
        const elem = await $("//button[(@class='cpd-delivery-ci-MuiButtonBase-root cpd-delivery-ci-MuiButton-root cpd-delivery-ci-MuiButton-outlined')][1]")
        return elem
    }

    async elmInstallPath() { 
        const elem = await $("//div[contains(text(), 'Installation Path')]/../..//input[contains(@class, 'MuiInput-input')]")
        return elem
    }

    async elmImageCreation() {
        const elem = await $("//div[(text()='Use symbolic links')]/..//span/input")
        return elem
    }

    async elmTermsOfUse() {
        const elem = await $("//div/span[(text()='I agree to the')]/../..//input")
        return elem
    }

    async clickTermsOfUse() {
        const elem = await $("//div/span[(text()='I agree to the')]/../..//input")
        await elem.click()
        await browser.pause(2000)
        return elem
    }

    async elmSaveBtn() {
        const elem = await $("//button[(@id='DeploymentsStep3SaveButton')]")
        return elem
    }

    async elmDownloadBtn() {
        const elem = await $("//button[(@id='DeploymentsStep3DownloadButton')]")
        return elem
    }

    async elmEdited() {
        const elem = await $("//div[(@id='list-item-0')]")
        return elem
    }

    async clickSaveBtn() {
        const elem = await $("//button[(@id='DeploymentsStep3SaveButton')]")
        await elem.waitForClickable()
        await elem.click()
        await browser.pause(3000)
        return elem
    }

    async clickSpecifyLicenseServerBtn() {
        const elem = await $("//button/span[contains(text(),'Specify license server')]")
        await elem.waitForClickable()
        await elem.click()
        await browser.pause(1000)
        return elem
    }

    async inpServerName(value) {
        const elem = await $("//input[(@id='name')]")
        await elem.waitForClickable()
        await elem.setValue(value)
        return elem
    }

    async clickSaveLicenseServerBtn() {
        const elem = await $("//div[contains(@class,'MuiDialogActions')]//button/span[(text()='Save')]")
        await elem.waitForClickable()
        await elem.click()
        await browser.pause(3000)
        return elem
    }

    async clickDownloadBtn() {
        const elem = await $("//button[(@id='DeploymentsStep3DownloadButton')]")
        await elem.click()
        await browser.pause(2000)
        return elem
    }

    async clickDesktopAppChk() {
        const elem = await $("(//div[contains(@class, 'checkboxContainer')]//input)[1]")
        await elem.click()
        await browser.pause(1000)
        return elem
    }

    async clickSymbolicLinksChk() {
        const elem = await $("(//div[contains(@class, 'checkboxContainer')]//input)[2]")
        await elem.click()
        await browser.pause(1000)
        return elem
    }

    async clickDeployBtn() {
        const elem = await $("//button/span/p[(text()='Deploy')]")
        await elem.waitForClickable()
        await elem.click()
        await browser.pause(1000)
        return elem
    }

    async elmExtensionChk() {
        const elem = await $("//p[(text()='Extensions')]/../../..//input")
        return elem
    }

    async elmGetDupPkgName(value) {
        const elem = await $("//div[(text()='"+value+"')]")
        await elem.waitForDisplayed()
        return elem
    }

    async elmProductName(value) {
        const elem = await $("//div/p[contains(text(),'"+value+"')]")
        return elem
    }

    async elmVersionChecked() {
        const elem = await $("//p[contains(text(), 'Specific version')]")
        await elem.click()
        return elem
    }

    async elmVersionModal() {
        const elem = await $("(//div[contains(@aria-labelledby,'modal-title')])[2]//article")
        await elem.waitForDisplayed()
        return elem
    }

    async elmLatestVersionModal() {
        const elem = await $("(//span[contains(text(),'Latest version')])[1]")
        await elem.waitForDisplayed()
        return elem
    }

    async elmLatestVersionUI() {
        const elem = await $("(//span[contains(text(),'Latest version')])[2]")
        await elem.waitForDisplayed()
        return elem
    }

    async elmLatestVersionLbl() {
        const elem = await $("//p[contains(text(),'Latest version')]")
        await elem.waitForDisplayed()
        return elem
    }

    async clickLatestVersion() {
        const elem = await $("(//span[contains(text(),'Latest version')])[1]/../..//div[2]")
        await elem.click()
        return elem
    }

    async elmServerNameInp(value) {
        const elem = await $("//p[(text()='"+value+" server name:')]/../div/div/input")
        await elem.waitForDisplayed()
        return elem
    }

    async elmServerNameDInp() {
        const elem = await $("//p[(text()='Server name:')]/..//input")
        await elem.waitForDisplayed()
        return elem
    }

    async setServerNameDInp(value) {
        const elem = await $("//p[(text()='Server name:')]/..//input")
        await elem.setValue(value)
        return elem
    }

    async elmServerNameMInp() {
        const elem = await $("//p[contains(text(), 'Network License Manager')]/..//input")
        await elem.waitForDisplayed()
        return elem
    }

    async elmServerNameBtn(value) {
        const elem = await $("//button/span[(text()='"+value+"')]")
        await elem.waitForDisplayed()
        return elem
    }

    async existingServerNameBtn(value) {
        const elem = await $("//button/span[(text()='"+value+"')]")
        return await elem.isDisplayed()
    }

    async clickServerNameBtn(value) {
        const elem = await $("//button/span[(text()='"+value+"')]")
        await elem.click()
        return elem
    }

    async elmFirstServerNameBtn() {
        const elem = await $("(//div[contains(@class, 'itemContainer')]//button[contains(@class, 'MuiButton-outlined')])[1]")
        await elem.waitForDisplayed()
        const value = elem.getText()
        return value
    }

    async elmTeamDropdown() {
        const elem = await $("//div[contains(@class, 'DhigSelect--option')]")
        await elem.waitForDisplayed()
        return elem
    }
}

export default new customInstall();