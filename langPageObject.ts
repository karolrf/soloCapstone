import { By, until } from 'selenium-webdriver';
import { BasePage } from './basePage';

export class lang extends BasePage {
    
    langBtn: By = By.xpath("//a[@class='js-wpml-ls-item-toggle wpml-ls-item-toggle']");
    langEn: By = By.xpath("//a[@class='js-wpml-ls-item-toggle wpml-ls-item-toggle']/span[@class='wpml-ls-native']");
    langEs: By = By.xpath("//a[@class='wpml-ls-link']/span[@class='wpml-ls-native' and @lang='es']");
    results: By = By.xpath('//a[@href="https://solanolibrary.com/programa-de-alfabetizacion-de-adultos/?lang=es"]');

    

    constructor() {
        super({ url: 'https://solanolibrary.com/' });
    };

    async navigate() {
        await this.driver.get(this.url);
        await this.driver.findElement(this.langBtn).click();
    };
    async form (langBtn: string, langEn: string, langEs: string) {
        await this.driver.findElement(this.langBtn).click();
        await this.driver.findElement(this.langEs).click();
    };
    async verifyResults(): Promise<boolean> {
      try {
          const resultsElement = await this.driver.wait(until.elementLocated(this.results), 5000);
          const resultsText = await resultsElement.getText();
          return resultsText.includes('Programa de Alfabetización de Adultos'); 
      } catch (error) {
          return false;
      } 
  
    };
    async closeBrowser() {
        await this.driver.close();
    };
};
