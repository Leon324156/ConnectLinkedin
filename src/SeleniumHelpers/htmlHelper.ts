import {  By,WebDriver,WebElement,until } from 'selenium-webdriver';

export async function waitForCSS(driver: any, selector: string, timeout: number): Promise<WebElement> {
  const locator = By.css(selector); 


    await driver.wait(until.elementLocated(locator), timeout);
    const element = await driver.findElement(locator);
    return element;
}

export async function waitForXpath(driver: any, selector: string, timeout: number): Promise<WebElement> {

    const xpathLocator = By.xpath(selector);

    await driver.wait(until.elementLocated(xpathLocator), timeout);
    const element = await driver.findElement(xpathLocator);
    return element;
  }


export async function scrollToElement(driver: WebDriver, element: WebElement): Promise<void> {
  await driver.executeScript('arguments[0].scrollIntoView(true);', element);
}