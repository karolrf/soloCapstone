import { Builder, Capabilities, WebDriver, By } from 'selenium-webdriver';
const chromedriver = require('chromedriver');
import {lang } from './langPageObject';

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

        await sleep(1000);
        

       const verifyResults = await l.verifyResults();
       expect(verifyResults).toBe(true);
    });

    async function sleep(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
});


