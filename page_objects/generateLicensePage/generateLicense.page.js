import Page from '../page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class generateLicense extends Page {

    async elmGenerateNetworkLicenseFile() {
        const elem = await $("//h3[(text()='Generate Network License File')]")
        await elem.waitForDisplayed()
        console.log("Generate Network License File title returns")
        return elem
    }

    async elmSingleServer() {
        const elem = await $("//p[(text()='Single Server')]")
        await elem.waitForDisplayed()
        console.log("Single Server title returns")
        return elem
    }

    async elmRedundantServers() {
        const elem = await $("//p[(text()='Redundant Servers')]")
        await elem.waitForDisplayed()
        console.log("Redundant Servers title returns")
        return elem
    }

    async elmDistributedServer() {
        const elem = await $("//p[(text()='Distributed Server')]")
        await elem.waitForDisplayed()
        console.log("Distributed Server title returns")
        return elem
    }

}

export default new generateLicense();