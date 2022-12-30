import Base from '../../Base/Base';
import Page from '../page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class productsAndServPage extends Page {
    /**
     * define selectors using getter methods
     */
    get lblPandS() {
        return $("//div/p[contains(text(),'All Products and Services')]");
    }
    get lblArnold() {
        return $("//div[contains(text(),'Arnold - Plugins and Additional Software')]");
    }
    get lblBrifost() {
        return $("//div[contains(text(),'Bifrost Extension for Maya')]");
    }
    get lblCharacterG() {
        return $("//div[contains(text(),'Character Generator')]");
    }
    get lblDesktopConector() {
        return $("(//div[contains(text(),'Desktop Connector')])[1]");
    }
    get lblDrive() {
        return $("(//div[contains(text(),'Drive')])[1]");
    }
    get lblMaya() {
        return $("//div[contains(text(),'MAYA')]");
    }
    get lstWrapper() {
        return $("//div[contains(@class,'dhig-typography-headline-small')]");
    }
    get itmWrapper() {
        return $$("//div[contains(@class,'dhig-typography-headline-small')]");
    }
    get lnkViewDetails() {
        return $("//span[contains(text(),'View details')]");
    }
    get itemMuiCardContent() {
        return $("//div[contains(@class,'MuiCardContent-root')]");
    }
    get inpSearch() {
        return $("//input[contains(@placeholder,'Search')]");
    }
    get divBanner() {
        return $("//div[contains(@class,'BannerWrapper')]");
    }
    get divFilterResult() {
        return $("//div[(@data-testid='filter-result-count')]");
    }

    async listOfProductsAreTheSame (expectedListOfProductsAndServices) {

        await this.lstWrapper.waitForDisplayed();
        const wrapper = await $$("//div[contains(@class,'dhig-typography-headline-small')]")
        const lstCount = wrapper.length

        let respWrapper = [];
        for (let i = 0; i < lstCount; i++) {
            let ind=i+1;
            let strRespWrapper = await $("(//div[contains(@class,'dhig-typography-headline-small')])"+"["+ ind +"]").getText();
            respWrapper.push(strRespWrapper);
        }
        respWrapper.sort();
        let lstProductsAPI = await Base.returnProductsAPI(expectedListOfProductsAndServices);
        
        return lstProductsAPI.join(',') === respWrapper.join(',');

    }

    async listOfProductsLicenses (data_Products) {
        
        await this.lstWrapper.waitForDisplayed();
        const lstCount = await this.itmWrapper.length
        const strNameProduct=data_Products.Products.NameProduct;

        for (let i = 0; i < lstCount; i++) {
            let ind=i+1;
            let strRespWrapper = await $("(//div[contains(@class,'dhig-typography-headline-small')])"+"["+ ind +"]").getText()
            if(strRespWrapper==strNameProduct) {
                const linkDetails = await $("(//span[contains(text(),'View details')])"+"["+ ind +"]");
                linkDetails.click();
                break;
                
            }
        }
    }

    async listOfItemMuiCardContent() {
        await this.lstWrapper.waitForDisplayed()
        return await this.itmWrapper
    }

    async searchElement() {
        await this.inpSearch.waitForDisplayed()
        return await this.inpSearch
    }

    async bannerElement() {
        await this.divBanner.waitForDisplayed()
        return await this.divBanner
    }

    async searchValidate(SearchPhrase) {
        const elem = await $("//input[contains(@placeholder,'Search')]")
        await elem.waitForDisplayed()
        await elem.setValue(SearchPhrase)
        await this.divFilterResult.waitForDisplayed()
        await this.lstWrapper.waitForDisplayed()
        let result = await this.lstWrapper.getText()
        browser.keys("Escape")
        return result
    }

    async elmTitle(cardName) {
        const elem = await $("//div[(@data-testid='"+cardName+"')]//div[contains(@class,'dhig-typography-headline-small')]")
        await elem.waitForDisplayed()
        return elem
    }

    async elmBadge(cardName, badge) {
        const elem = await $("//div[(@data-testid='"+cardName+"')]//img[contains(@src,'"+badge+"')]")
        await elem.waitForDisplayed()
        return elem
    }

    async elmPlatformIcon(cardName) {
        const elem = await $("//div[(@data-testid='"+cardName+"')]//*[local-name()='svg' and @xmlns='http://www.w3.org/2000/svg']")
        await elem.waitForDisplayed()
        return elem
    }

    async elmShortDescription(cardName) {
        const elem = await $("//div[(@data-testid='"+cardName+"')]//div[contains(@class,'dhig-typography-body-copy-small')]")
        await elem.waitForDisplayed()
        return elem
    }

    async elmInputs(cardName) {
        const elems = await $$("//div[(@data-testid='"+cardName+"')]//input[contains(@class,'nativeInput')]")
        return elems
    }

    async elmDownload(cardName) {
        const elem = await $("//div[(@data-testid='"+cardName+"')]//button[(@data-testid='cta-button')]")
        await elem.waitForDisplayed()
        return elem
    }

    async elmViewDetails(cardName) {
        const elem = await $("//div[(@data-testid='"+cardName+"')]//span[(text()='View details')]")
        await elem.waitForDisplayed()
        return elem
    }

    async clickViewDetails(cardName) {
        const elem = await $("//div[(@data-testid='"+cardName+"')]//span[(text()='View details')]")
        await elem.waitForClickable()
        await elem.click()
    }

    async clickInstallBtn(cardName) {
        const elem = await $("//div[(@data-testid='"+cardName+"')]//span[contains(@class, 'MuiButton-label')]")
        await elem.scrollIntoView()
        await elem.waitForClickable()
        await elem.click()
    }

    async clickAcceptLnk(cardName) {
        const elem = await $("//a[(text()='Accept')]")
        await elem.scrollIntoView()
        await elem.waitForClickable()
        await elem.click()
    }

    async clickDownloadLnk(cardName) {
        const elem = await $("//ul/li[(text()='Download')]")
        await elem.scrollIntoView()
        await elem.waitForClickable()
        await elem.click()
    }

    async clickCustomInstallLnk(cardName) {
        const elem = await $("//ul/li[(text()='Custom Install')]")
        await elem.scrollIntoView()
        await elem.waitForClickable()
        await elem.click()
    }

    async elmProductCard(cardName) {
        const elem = await $("//div[(@data-testid='"+cardName+"')]")
        await elem.waitForDisplayed()
        return elem
    }

    async elmDownloadDropDownArrow(cardName) {
        const elem = await $("//div[(@data-testid='"+cardName+"')]//span[contains(@class, 'MuiButton-label')]/*[local-name()='svg' and contains(@class, 'MuiSvgIcon-root')]")
        await elem.scrollIntoView()
        await elem.waitForDisplayed()
        return elem
    }

    async elmPandS() {
        const elem = await $("//div/p[contains(text(),'All Products and Services')]")
        await elem.waitForDisplayed()
        return elem
    }

    async clickDownloadDropDownArrow(cardName) {
        const elem = await $("//div[(@data-testid='"+cardName+"')]//span[contains(@class, 'MuiButton-label')]/*[local-name()='svg' and contains(@class, 'MuiSvgIcon-root')]")
        await elem.waitForClickable()
        await elem.click()
    }

    async elmDropDownList() {
        const elm = $("//ul[contains(@id, 'split-button-menu')]")
        return elm
    }

    async elmDownloadOptionOne() {
        const elm = await $("(//ul[contains(@class,'MuiList-padding')]/li)[1]")
        await elm.waitForDisplayed()
        const txtElm = await elm.getText()
        console.log('DownloadOptionOne: '+txtElm)
        return txtElm;
    }

    async elmDownloadOptionTwo() {
        const elm = await $("(//ul[contains(@class,'MuiList-padding')]/li)[1]")
        await elm.waitForDisplayed()
        const txtElm = await elm.getText()
        console.log('DownloadOptionTwo: '+txtElm)
        return txtElm;
    }

    async elmDownloadOptionThree() {
        const elm = await $("(//ul[contains(@class,'MuiList-padding')]/li)[2]")
        await elm.waitForDisplayed()
        const txtElm = await elm.getText()
        console.log('DownloadOptionThree: '+txtElm)
        return txtElm;
    }

    async elmInputYear(cardName) {
        const elem1 = await $("(//div[(@data-testid='"+cardName+"')]//div[contains(@data-testid,'install-dropdown')])[1]/div")
        await elem1.waitForDisplayed()
        await elem1.click()
        const elem2 = await $("(//ul[contains(@class,'MuiList-padding')]/li)[1]")
        await elem2.waitForDisplayed()
        const elem3 = await $$("//ul[contains(@class,'MuiList-padding')]/li").length
        console.log('Year: '+elem3)
        await elem2.click()
        return elem3
    }

    async elmInputPlatform(cardName) {
        const elem1 = await $("(//div[(@data-testid='"+cardName+"')]//div[contains(@data-testid,'install-dropdown')])[2]/div")
        await elem1.waitForDisplayed()
        await elem1.click()
        const elem2 = await $("(//ul[contains(@class,'MuiList-padding')]/li)[1]")
        //await browser.pause(2000);
        await elem2.waitForDisplayed()
        const elem3 = await $$("//ul[contains(@class,'MuiList-padding')]/li").length
        console.log('Platform: '+elem3)
        await elem2.click()
        return elem3
    }

    async elmInputLanguage(cardName) {
        const elem1 = await $("(//div[(@data-testid='"+cardName+"')]//div[contains(@data-testid,'install-dropdown')])[3]/div")
        await elem1.waitForDisplayed()
        await elem1.click()
        const elem2 = await $("(//ul[contains(@class,'MuiList-padding')]/li)[1]")
        await elem2.waitForDisplayed()
        const elem3 = await $$("//ul[contains(@class,'MuiList-padding')]/li").length
        console.log('Language: '+elem3)
        await elem2.click()
        return elem3
    }

    //async clickViewDetails(cardName) {
    //    const elem = await $("//div[(@data-testid='"+cardName+"')]//span[(text()='View details')]")
    //    await elem.waitForClickable()
    //    await elem.click()
    //}

}

export default new productsAndServPage();
