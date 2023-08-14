import { waitForCSS, waitForXpath } from "./htmlHelper.js";
export async function Connect(driver: any, url: string, mess: string): Promise<void> {
    const ConnectL = {
        button: "div[class='pv-top-card-v2-ctas ']>div>button",
        messageButton: "div[class='artdeco-modal__actionbar ember-view text-align-right']>button:nth-child(1)",
        messageInput: "div[class='relative']>textarea",
        sendButton: "div[class='artdeco-modal__actionbar ember-view text-align-right']>button:nth-child(2)",
        dropdown: "div[class='pv-top-card-v2-ctas ']>div>div>button[aria-label='More actions']",
        connect: "(//div[@class='artdeco-dropdown__content-inner']//span[text()='Connect'])[2]"
    };
  await driver.get(`${url}`);

  try {
      const button = await waitForCSS(driver, ConnectL.button, 2000);
      const buttonText = await button.getText();
      console.log(buttonText,"buttontext")
      if (buttonText === "Connect") {
          await button.click();
          const messagebutton = await waitForCSS(driver, ConnectL.messageButton, 10000);
          messagebutton.click();

          const messageInput = await waitForCSS(driver, ConnectL.messageInput, 2000);
          await messageInput.sendKeys(mess);

          const sendButton = await waitForCSS(driver, ConnectL.sendButton, 10000);
          await driver.sleep(20000)
          await sendButton.click()
          await driver.navigate().refresh();
          console.log("Connect successful")
          return;
      } else {
          const dropdown = await waitForCSS(driver, ConnectL.dropdown, 2000);
          await dropdown.click();
          const connect = await waitForXpath(driver, ConnectL.connect, 2000);
          await connect.click();
          
          const messagebutton = await waitForCSS(driver, ConnectL.messageButton, 10000);
          await messagebutton.click();

          const messageInput = await waitForCSS(driver, ConnectL.messageInput, 2000);
          await messageInput.sendKeys(mess);
          const sendButton = await waitForCSS(driver, ConnectL.sendButton, 10000);
          await driver.sleep(20000)
          await sendButton.click()
          
          await driver.navigate().refresh();
          console.log("Connect successful")
      }

  } catch (error) {
      console.log('Cannot find connect button');
  }
}

export async function getmess(firstname:string,organization_name:string): Promise<string> {
    const mess = `Hi ${firstname},\n` +
    `It might be your lucky day to grow your tech team in ${organization_name}.\n` +
    `We help companies like ${organization_name} to scale up and down their software teams quickly.\n` +
    `Let me know if this is something we can help you with.\n\n` +
    `Best,\n` +
    `Kacper`;
    return mess
    }