import { By, until } from 'selenium-webdriver';
import { BasePage } from './basePage';

export class card extends BasePage {
    
    getCardBtn: By = By.xpath("//span[@class='link-inner' and text()='Get a Library Card']");
    firstName: By = By.id('eCARDFirstName');
    lastName: By = By.id('eCARDLastName');
    dob: By = By.id('eCARDLabelDOB');
    dobDayAnswer: By = By.xpath('//select[@id="eCARDDOBDay"]/option[value="1"]');
    dobMonthAnswer: By = By.xpath('//select[@id="eCARDDOBMonth"]/option[value="1"]');
    dobYearAnswer: By = By.xpath('//select[@id="eCARDDOBYear"]/option[value="1988"]');
    address: By = By.id('eCARDLabelStreetResidence');
    city: By = By.id('eCARDLabelCityResidence');
    zipcode: By = By.id('eCARDLabelPostalCodeResidence');
    notf: By = By.xpath('//select[@id="eCARDNotificationPreference"]/option[value="2"]');
    phone: By = By.id('eCARDTelephone');
    email: By = By.id('eCARDLabelEmail');
    emailConf: By = By.id('eCARDLabelEmailConfirm');
    passcode: By = By.id('eCARDPassword');
    passcodeConf: By = By.id('eCARDPasswordConfirmation');
    branch: By = By.xpath('//select[@id="eCARDBranchID_selected"]/option[value="9"]');



    constructor() {
        super({ url: 'https://solanolibrary.com/' });
    };

    async navigate() {
        await this.driver.get(this.url);
        await this.driver.findElement(this.getCardBtn).click();
    };
    async tabs(){
        let myTabs = await this.driver.getAllWindowHandles(); 
        await this.driver.switchTo().window(myTabs[1]); 
        await this.driver.sleep(1500); 
        /*
        await this.driver.close(); 
        await this.driver.switchTo().window(myTabs[0]); 
        */
    }
    async getCard( firstName: string,
    lastName: string,
    dob: string,
    dobDayAnswer: any,
    dobMonthAnswer: any,
    dobYearAnswer: any,
    address: string,
    city: string,
    zipcode: number,
    notf: string,
    phone: number,
    email: string,
    emailConf: string,
    passcode: string,
    passcodeConf: string,
    branch: string) {
        await this.driver.findElement(this.firstName).sendKeys('John');
        await this.driver.findElement(this.lastName).sendKeys('Dutton');
        await this.driver.findElement(this.dob).sendKeys(dobMonthAnswer, dobDayAnswer, dobYearAnswer);
        await this.driver.findElement(this.)
        await this.driver.findElement(this.goBtn).click();
    };
};
