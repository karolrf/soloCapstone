import { Builder, Capabilities, WebDriver, By } from 'selenium-webdriver';
const chromedriver = require('chromedriver');
import { card } from './getCardPageObject';

describe('getCard', () => {
    let driver: WebDriver;
    const c = new card();

    beforeAll(async () => {
        driver = new Builder().withCapabilities(Capabilities.chrome()).build();
    });

    beforeEach(async () => {
        await driver.get('https://solanolibrary.com/');
    });

    afterAll(async () => {
        await driver.quit();
    });

    test('Testing get card', async () => {
        await c.navigate();
        await c.click(c.getCardBtn);
        await sleep(1000)
        await c.tabs();

        await c.setInput(c.firstName,'John');
        await c.setInput(c.lastName, "Dutton");
        

        await c.click(c.dobMonthAnswer);
        await c.click(c.dobDayAnswer);
        await c.click(c.dobYearAnswer);
        await sleep(2000); 

        await c.setInput(c.address, '321 Nut Tree Rd');
        await c.setInput(c.city, 'Vacaville');
        await sleep(2000);

        await c.setInput(c.zipcode, 95687);
        await c.setInput(c.phone, 1234567890);
        await sleep(2000);

        await c.setInput(c.email, 'mahel29292@vasteron.com');
        await c.setInput(c.emailConf, 'mahel29292@vasteron.com');
        await sleep(2000);

        await c.setInput(c.passcode, '*soloProject2');
        await c.setInput(c.passcodeConf, '*soloProject2');
        await c.click(c.branch);
        await sleep(3000);

        await c.click(c.captchaBtn);
        await sleep(2000)
        await c.click(c.acceptBtn);

        await sleep(2000);

    });

    async function sleep(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
});
