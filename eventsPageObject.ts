import { By, until } from 'selenium-webdriver';
import { BasePage } from './basePage';

export class SL extends BasePage {
    
    eventsBtn: By = By.xpath("//span[@class='link-inner' and text()='Event Calendar']");
    dateBtn: By = By.xpath('//*[@id="calendar"]/div/div/div[1]/table/tbody/tr[2]/td[2]');
    //results: By = By.xpath("//div[@class='events-date-range-string headingtext' and contains(text(),'January 8 2024 - January 12 2024')]");



    constructor() {
        super({ url: 'https://solanolibrary.com/' });
    };

    async navigate() {
        await this.driver.get(this.url);
        await this.driver.findElement(this.eventsBtn).click();
    }

    async events() {
        await this.driver.findElement(this.dateBtn).click();
        //await this.driver.findElement(this.tomorrowBtn).click();
        //await this.driver.findElement(this.dayS).click();
        //await this.driver.findElement(this.dataRangeEnd).click();
        //await this.driver.findElement(this.dayE).click();
    }

   /*  async verifyResults(): Promise<boolean> {
        try {
            const resultsElement = await this.driver.wait(until.elementLocated(this.results), 5000);
            const resultsText = await resultsElement.getText();
            return resultsText.includes('January 8 2024 - January 12 2024'); 
        } catch (error) {
            return false;
        } 
    } 
    async closeBrowser() {
        await this.driver.close(); 
    }; */
}
