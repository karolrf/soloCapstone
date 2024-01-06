import { Builder, Capabilities, WebDriver, By } from 'selenium-webdriver';
const chromedriver = require('chromedriver');
import { SL } from './eventsPageObject';
const fs = require('fs');

describe('Search website', () => {
    let driver: WebDriver;
    const solano = new SL();

    beforeAll(async () => {
        driver = new Builder().withCapabilities(Capabilities.chrome()).build();
    });

    beforeEach(async () => {
        await driver.get('https://solanolibrary.com/');
    });

    afterAll(async () => {
        await driver.quit();
    });

    test('Testing event calendar', async () => {
        await solano.navigate();
        await solano.click(solano.eventsBtn);
        await sleep (3000);
        await solano.click(solano.dateBtn);
        /*await solano.click(solano.dayS);
        await solano.click(solano.dataRangeEnd);
        await solano.click(solano.dayE);
        await fs.writeFile(`${__dirname}/eventCalendar.png`,
        await solano.driver.takeScreenshot(), "base64", 
        (e) => {
            if (e) console.error(e)
            else console.log('Image saved successfully')
        }); 

        const verifyResults = await solano.verifyResults();
        expect(verifyResults).toBe(true);
        const closeBrowser = await solano.closeBrowser(); */
    });

    async function sleep(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
});
