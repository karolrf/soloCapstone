import { By, until } from 'selenium-webdriver';
import { BasePage } from './basePage';

export class SL extends BasePage {
    
    searchWebpageBtn: By = By.xpath('(//span[@class="vc_tta-title-text"])[2]');
    search: By = By.xpath('//input[@type="search" and @name="s" and @placeholder="Keywords..."]');
    goBtn: By = By.xpath('//button[@class="vcex-searchbar-button theme-button wpex-w-25 wpex-py-0" and @type="submit"]');
    results: By = By.xpath('//*[contains(text(), "Search results")]');


    constructor() {
        super({ url: 'https://solanolibrary.com/' });
    };

    async navigate() {
        await this.driver.get(this.url);
        await this.driver.findElement(this.searchWebpageBtn).click();
    }

    async searchWebpage(search: string) {
        await this.driver.findElement(this.search).sendKeys(search);
        await this.driver.findElement(this.goBtn).click();
    }

    async verifyResults(): Promise<boolean> {
        try {
            const resultsElement = await this.driver.wait(until.elementLocated(this.results), 5000);
            const resultsText = await resultsElement.getText();
            return resultsText.includes('results'); 
        } catch (error) {
            return false;
        }
    } 
}
