import { By, until } from 'selenium-webdriver';
import { BasePage } from './basePage';

export class contact extends BasePage {
    
    contact: By = By.xpath("//span[@class='link-inner' and text()='Contact']");
    name: By = By.id("wpforms-699-field_0");
    email: By = By.id('wpforms-699-field_1');
    message: By = By.id('wpforms-699-field_2');
    goBtn: By = By.xpath('//button[@id="wpforms-submit-699"]');

    constructor() {
        super({ url: 'https://solanolibrary.com/' });
    };

    async navigate() {
        await this.driver.get(this.url);
        await this.driver.findElement(this.contact).click();
    };
    async form (contact: string, name: string, email: string, message:string, goBtn: string) {
        await this.driver.findElement(this.contact).sendKeys(contact);
        await this.driver.findElement(this.name).sendKeys(name);
        await this.driver.findElement(this.email).sendKeys(email);
        await this.driver.findElement(this.message).sendKeys(message);
        await this.driver.findElement(this.goBtn).click();
    };
    /* async verifyResults(): Promise<boolean> {
      try {
          const resultsElement = await this.driver.wait(until.elementLocated(this.results), 5000);
          const resultsText = await resultsElement.getText();
          return resultsText.includes('results'); 
      } catch (error) {
          return false;
      } 
  
  };*/
};
