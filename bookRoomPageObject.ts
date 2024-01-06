import { By, until } from 'selenium-webdriver';
import { BasePage } from './basePage';


export class bookRoom extends BasePage {
    
    bookRoomBtn: By = By.xpath("//span[@class='link-inner' and text()='Book a Room']");
    bookSelect: By = By.xpath("//select[@class='form-control' and @aria-label='Booking type selector']/option[@value='1332' and text()='*Study Room Booking']");
    doneBtn: By = By.xpath("//button[@class='btn btn-primary' and text()='done']");
    date: By = By.xpath("//td[@class='day' and @data-date='1704758400000']");
    checkAllBox: By = By.xpath("//input[@class='checkall' and @type='checkbox']");
    checkBox: By = By.xpath("//input[@type='checkbox' and @data-location='3497']");
    timeS: By = By.xpath("//div[@class='amnp-segment odd amnp-segment-open' and @data-time='1:00 pm' and @style='width: 30px;'][1]");
    timeE: By = By.xpath("//div[@class='amnp-segment odd amnp-segment-open' and @data-time='2:00 pm' and @style='width: 30px;'][1]");
    addBtn: By = By.xpath("//button[@class='amnp-booking-button btn btn-info' and text()='Add to basket']");
    results: By = By.xpath("//span[@class='basket-total' and text()='1']");
    
    constructor() {
        super({ url: 'https://solanolibrary.com/' });
    };

    async navigate() {
        await this.driver.get(this.url);
        await this.driver.findElement(this.bookRoomBtn).click();
    }

    async bookingPage(bookSelect: string, doneBtn:string, date: string, checkAllBox: string, checkBox: string, timeS: string, timeE: string) {
        //await this.driver.findElement(this.bookSelect).click();
        await this.driver.findElement(this.doneBtn).click();
        await this.driver.findElement(this.date).click();
        await this.driver.findElement(this.date).click();
        //await this.driver.findElement(this.checkAllBox).click();
        //await this.driver.findElement(this.checkBox).click();
        await this.driver.findElement(this.timeS).click();
        await this.driver.findElement(this.timeE).click();
        await this.driver.findElement(this.addBtn).click();
        
    }

    async verifyResults(): Promise<boolean> {
        try {
            const resultsElement = await this.driver.wait(until.elementLocated(this.results), 5000);
            const resultsText = await resultsElement.getText();
            return resultsText.includes('1'); 
        } catch (error) {
            return false;
        }
    } 
    async closeBrowser() {
        await this.driver.close();
    };
}
