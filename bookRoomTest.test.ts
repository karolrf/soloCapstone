import { Builder, Capabilities, WebDriver, By } from 'selenium-webdriver';
const chromedriver = require('chromedriver');
import { bookRoom } from './bookRoomPageObject';
const fs = require('fs');

describe('Book a room', () => {
    let driver: WebDriver;
    const br = new bookRoom();

    beforeAll(async () => {
        driver = new Builder().withCapabilities(Capabilities.chrome()).build();
    });

    beforeEach(async () => {
        await driver.get('https://solanolibrary.com/');
    });

    afterAll(async () => {
        await driver.quit();
    });

    test('Book a room', async () => {
        await br.navigate();
        await br.click(br.doneBtn);
        await sleep(2000);
        await br.click(br.date);
        await sleep(2000);
        await br.click(br.timeS);
        await br.click(br.timeE);
        await sleep(2000);
        await br.click(br.addBtn);
        await fs.writeFile(`${__dirname}/bookARoom.png`,
        await br.driver.takeScreenshot(), "base64", 
        (e) => {
            if (e) console.error(e)
            else console.log('Image saved successfully')
        }); 
        
        
        const verifyResults = await br.verifyResults();
        expect(verifyResults).toBe(true);
        const closeBrowser = await br.closeBrowser();
    });

    async function sleep(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
  
});
