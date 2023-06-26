import fs from 'fs';
import { WebDriver} from 'selenium-webdriver';

export async function loadCookiesAndVisitPage(driver:WebDriver) {
    try {
        
        await driver.get('https://www.linkedin.com/login');

        const cookies = JSON.parse(fs.readFileSync('C:/Users/Leon/Desktop/Linkedinbot/src/cookies.json', 'utf8'));

        for (let cookie of cookies) {
            await driver.manage().addCookie(cookie);
           
        }
        
        await driver.navigate().refresh();
    }
    catch (err) {
        console.log(err);
    }
}

