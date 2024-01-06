import { Builder, Capabilities, WebDriver, By } from 'selenium-webdriver';
const chromedriver = require('chromedriver');
import {lang } from './langPageObject';
const fs = require('fs');

describe('Search', () => {
    let driver: WebDriver;
    const l = new lang();

    beforeAll(async () => {
        driver = new Builder().withCapabilities(Capabilities.chrome()).build();
    });

    beforeEach(async () => {
        await driver.get('https://solanolibrary.com/');
    });

    afterAll(async () => {
        await driver.quit();
    });

    test('Testing language change', async () => {
        await l.navigate();
        await l.click(l.langEs);
        await fs.writeFile(`${__dirname}/languageTest.png`,
        await l.driver.takeScreenshot(), "base64", 
        (e) => {
            if (e) console.error(e)
            else console.log('Image saved successfully')
        }); 
        await sleep(1000);
        

       const verifyResults = await l.verifyResults();
       expect(verifyResults).toBe(true);
       const closeBrowser = await l.closeBrowser();
    });

    async function sleep(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
});


