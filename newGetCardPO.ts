import { By, WebDriver } from 'selenium-webdriver';
import { BasePage } from './basePage';

export class getcard extends BasePage {
    getCardBtn: By = By.xpath("//span[@class='link-inner' and text()='Get a Library Card']");
    firstName: By = By.id('eCARDFirstName');
    lastName: By = By.id('eCARDLastName');
    dobMonth: By = By.id('eCARDDOBMonth');
    dobDay: By = By.id('eCARDDOBDay');
    dobYear: By = By.id('eCARDDOBYear');
    dobDayAnswer: By = By.xpath('//select[@id="eCARDDOBDay"]/option[@value="1"]');
    dobMonthAnswer: By = By.xpath('//select[@id="eCARDDOBMonth"]/option[@value="1"]');
    dobYearAnswer: By = By.xpath('//select[@id="eCARDDOBYear"]/option[@value="1988"]');
    address: By = By.id('eCARDLabelStreetResidence');
    city: By = By.id('eCARDLabelCityResidence');
    zipcode: By = By.id('eCARDLabelPostalCodeResidence');
    phone: By = By.id('eCARDTelephone');
    email: By = By.id('eCARDLabelEmail');
    emailConf: By = By.id('eCARDLabelEmailConfirm');
    passcode: By = By.id('eCARDPassword');
    passcodeConf: By = By.id('eCARDPasswordConfirmation');
    branch: By = By.id('eCARDBranchID_selected');
    captchaBtn: By = By.xpath("//div[@class='recaptcha-checkbox-border' and @role='presentation']");
    acceptBtn: By = By.id('eCARDButtonRegister');

    constructor() {
        super({ url: 'https://solanolibrary.com/' });
    }

    async navigate() {
        await this.driver.get(this.url);
        await this.driver.findElement(this.getCardBtn).click();
    }

    async tabs() {
        let myTabs = await this.driver.getAllWindowHandles();
        await this.driver.switchTo().window(myTabs[1]);
    }

    async getCard(
        firstName: string, lastName: string, dobMonth: string, dobDay: number, dobYear: number,
        dobDayAnswer: number, dobMonthAnswer: string, dobYearAnswer: number,
        address: string, city: string, zipcode: number,
        phone: number, email: string, emailConf: string,
        passcode: string, passcodeConf: string, branchAnswer: string
    ) {
        await this.driver.findElement(this.firstName).sendKeys(firstName);
        await this.driver.findElement(this.lastName).sendKeys(lastName);
        await this.driver.findElement(this.dobMonth).sendKeys(dobMonthAnswer);
        await this.driver.findElement(this.dobDay).sendKeys(dobDayAnswer);
        await this.driver.findElement(this.dobYear).sendKeys(dobYearAnswer);
        await this.driver.findElement(this.address).sendKeys(address);
        await this.driver.findElement(this.city).sendKeys(city);
        await this.driver.findElement(this.zipcode).sendKeys(zipcode);
        await this.driver.findElement(this.phone).sendKeys(phone);
        await this.driver.findElement(this.email).sendKeys(email);
        await this.driver.findElement(this.emailConf).sendKeys(emailConf);
        await this.driver.findElement(this.passcode).sendKeys(passcode);
        await this.driver.findElement(this.passcodeConf).sendKeys(passcodeConf);
        await this.driver.findElement(this.branch).sendKeys(branchAnswer);
        await this.driver.findElement(this.captchaBtn).click();
        await this.driver.findElement(this.acceptBtn).click();
    }
}
