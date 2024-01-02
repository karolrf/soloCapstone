import { Builder, Capabilities, WebDriver, By } from 'selenium-webdriver';
const chromedriver = require('chromedriver');
import {newsletter } from './NLsignupPageObject';

describe('NewsLetter', () => {
    let driver: WebDriver;
    const NL = new newsletter();

    beforeAll(async () => {
        driver = new Builder().withCapabilities(Capabilities.chrome()).build();
    });

    beforeEach(async () => {
        await driver.get('https://solanolibrary.com/');
    });

    afterAll(async () => {
        await driver.quit();
    });

    test('Testing contact', async () => {
        await NL.navigate();
        await NL.click(NL.signupBtn);
        await NL.setInput(NL.email, 'roxak20084@visignal.com');
        await NL.setInput(NL.emailConf, 'roxak20084@visignal.com');
        await sleep(1000);
        await NL.click(NL.goBtn);
        await NL.click(NL.prefBtn);
        await NL.click(NL.submitBtn);
        

       const verifyResults = await NL.verifyResults();
       expect(verifyResults).toBe(true);
    });

    async function sleep(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
});






