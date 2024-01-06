import { Builder, Capabilities, WebDriver, By } from 'selenium-webdriver';
const chromedriver = require('chromedriver');
import { SL } from './availPageObject';
const fs = require('fs');

describe('Search', () => {
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

    test('Testing search feature', async () => {
        await solano.navigate();
        await solano.setInput(solano.search, 'Paulo Coelho');
        await solano.click(solano.author);
        await solano.click(solano.goBtn);
        await sleep(2000);
        await fs.writeFile(`${__dirname}/availability.png`,
        await solano.driver.takeScreenshot(), "base64", 
        (e) => {
            if (e) console.error(e)
            else console.log('Image saved successfully')
        }); 

        const verifyResults = await solano.verifyResults();
        expect(verifyResults).toBe(true);
        const closeBrowser = await solano.closeBrowser();
         
    });

    async function sleep(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
});
