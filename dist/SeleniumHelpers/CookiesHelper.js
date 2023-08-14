import fs from 'fs';
export async function loadCookiesAndVisitPage(driver) {
    try {
        await driver.get('https://www.linkedin.com/login');
        const cookies = JSON.parse(fs.readFileSync('./src/cookies.json', 'utf8'));
        for (let cookie of cookies) {
            await driver.manage().addCookie(cookie);
        }
        await driver.navigate().refresh();
        console.log("Logged In!");
    }
    catch (err) {
        console.log(err);
    }
}
//# sourceMappingURL=CookiesHelper.js.map