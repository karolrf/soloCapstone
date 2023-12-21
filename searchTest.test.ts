import { Builder, Capabilities, WebDriver, By } from 'selenium-webdriver';
const chromedriver = require('chromedriver');
import { SL } from './searchPageObject';

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
        await solano.setInput(solano.search, 'programming');
        await solano.click(solano.keyword);
        await solano.click(solano.goBtn);
        await sleep(2000);

        const verifyResults = await solano.verifyResults();
        expect(verifyResults).toBe(true);
    });

    async function sleep(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
});
