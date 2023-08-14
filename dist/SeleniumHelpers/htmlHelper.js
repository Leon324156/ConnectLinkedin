import { By, until } from 'selenium-webdriver';
export async function waitForCSS(driver, selector, timeout) {
    const locator = By.css(selector);
    await driver.wait(until.elementLocated(locator), timeout);
    const element = await driver.findElement(locator);
    return element;
}
export async function waitForXpath(driver, selector, timeout) {
    const xpathLocator = By.xpath(selector);
    await driver.wait(until.elementLocated(xpathLocator), timeout);
    const element = await driver.findElement(xpathLocator);
    return element;
}
//# sourceMappingURL=htmlHelper.js.map