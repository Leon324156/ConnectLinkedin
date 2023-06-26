import fs from 'fs'; // Dodaj import modułu fs
import { Apollo } from "./getlist.js";
export async function mailsToFile() {
    const apollo = new Apollo('I8ST-FAblnmxQRfuYrqGWw'); // Zastąp 'twój_api_key' własnym kluczem API
    try {
        const emaile = await apollo.getEmails(); // Pobierz listę maili
        // Zapisz maile do pliku txt
        fs.writeFileSync('maile.txt', emaile.join('\n'));
        console.log('Maile zapisane do pliku maile.txt');
    }
    catch (error) {
        console.error('Wystąpił błąd:', error);
    }
}
export async function linkedinToFile() {
    const apollo = new Apollo('I8ST-FAblnmxQRfuYrqGWw'); // Zastąp 'twój_api_key' własnym kluczem API
    try {
        const linkedinUrls = await apollo.getLinkedInUrls(); // Pobierz listę URLi LinkedIn
        // Zapisz URLi do pliku txt
        fs.writeFileSync('linkedin.txt', linkedinUrls.join('\n'));
        console.log('URLi LinkedIn zapisane do pliku linkedin.txt');
    }
    catch (error) {
        console.error('Wystąpił błąd:', error);
    }
}
export async function getUrls(apiKey) {
    const apollo = new Apollo(apiKey);
    const linkedInUrls = await apollo.getLinkedInUrls();
    return linkedInUrls;
}
//# sourceMappingURL=dataToFile.js.map