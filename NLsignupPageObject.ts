import { By, until } from 'selenium-webdriver';
import { BasePage } from './basePage';

export class newsletter extends BasePage {
    
    signupBtn: By = By.xpath('//span[@class="vcex-button-inner theme-button-inner" and text()="SIGN UP TODAY"]');
    email: By = By.id('Email');
    emailConf: By = By.id('ConfirmEmail');
    goBtn: By = By.id('SubmitEmail');
    prefBtn: By = By.id("c60797e5-a350-4d54-be01-23df8f30a548");
    submitBtn: By = By.id("SubmitPreferences");
    results: By = By.xpath('//div[@class="bootbox-body" and text()="Thank you. We have updated your preferences."]');
    resultsBtn: By = By.xpath('//button[@data-bb-handler="ok" and @type="button" and @class="btn btn-primary" and text()="OK"]');


    constructor() {
        super({ url: 'https://solanolibrary.com/' });
    };

    async navigate() {
        await this.driver.get(this.url);
        await this.driver.findElement(this.signupBtn).click();
    };
    async form (email: string, emailConf: string, goBtn: string, prefBtn: any, submitBtn: any, results: any, resultsBtn: any) {
        await this.driver.findElement(this.email).sendKeys(email);
        await this.driver.findElement(this.emailConf).sendKeys(emailConf);
        await this.driver.findElement(this.goBtn).click();
        await this.driver.findElement(this.prefBtn).click();
        await this.driver.findElement(this.submitBtn).click();
    };
    async verifyResults(): Promise<boolean> {
      try {
          const resultsElement = await this.driver.wait(until.elementLocated(this.results), 5000);
          const resultsText = await resultsElement.getText();
          return resultsText.includes('Thank you. We have updated your preferences.'); 
      } catch (error) {
          return false;
      } 
  };
};
