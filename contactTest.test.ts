import { Builder, Capabilities, WebDriver, By } from 'selenium-webdriver';
const chromedriver = require('chromedriver');
import {contact } from './contactPageObject';
const fs = require('fs');

describe('Search', () => {
    let driver: WebDriver;
    const cont = new contact();

    beforeAll(async () => {
        driver = new Builder().withCapabilities(Capabilities.chrome()).build();
    });

    beforeEach(async () => {
        await driver.get('https://solanolibrary.com/');
    });

    afterAll(async () => {
        await driver.quit();
    });

    test('Testing contact form', async () => {
        await cont.navigate();
        await cont.click(cont.contact);
        await cont.setInput(cont.name, 'John');
        await cont.setInput(cont.email, 'wedox94890@usoplay.com');
        await sleep(1000);
        await cont.setInput(cont.message, 'Hey Library Team, thanks for all you do! Wishing you an awesome year ahead — filled with good reads, happy moments, and continued awesomeness!');
        await fs.writeFile(`${__dirname}/contact.png`,
        await cont.driver.takeScreenshot(), "base64", 
        (e) => {
            if (e) console.error(e)
            else console.log('Image saved successfully')
        }); 
        await cont.click(cont.goBtn);
        

       const verifyResults = await cont.verifyResults();
       expect(verifyResults).toBe(true);
       const closeBrowser = await cont.closeBrowser();
    });

    async function sleep(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
});


