import { By, until } from 'selenium-webdriver';
import { BasePage } from './basePage';

export class SL extends BasePage {
    
    searchCatal: By = By.xpath("//a[@href='#search-catalog' and @role='tab']/span[@class='vc_tta-title-text']");
    search: By = By.id('Search');
    author: By = By.xpath("//select[@name='searchType']/option[@value='agent']");
    goBtn: By = By.xpath("//input[contains(@value,'GO')]");
    results: By = By.xpath('//span[@data-automation-id="item-availability-message"]');


    constructor() {
        super({ url: 'https://solanolibrary.com/' });
    };

    async navigate() {
        await this.driver.get(this.url);
        await this.driver.findElement(this.searchCatal).click();
    };
    async searchElement(search: string) {
        await this.driver.findElement(this.search).sendKeys(search);
        await this.driver.findElement(this.author).click();
        await this.driver.findElement(this.goBtn).click();
    };
    async verifyResults(): Promise<boolean> {
      try {
          const resultsElement = await this.driver.wait(until.elementLocated(this.results), 5000);
          const resultsText = await resultsElement.getText();
          return resultsText.includes('On shelf at Benicia Public Library'); 
      } catch (error) {
          return false;
      } 
    };
    async closeBrowser() {
        await this.driver.close();
    };
};
