const puppeteer = require('puppeteer');

console.log('Bem vindo ao meu primeiro Bot');

async function bot() {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    const UrlConversion = 'https://www.google.com/search?q=dolar+para+real&oq=dolar+para+real&aqs=chrome.0.69i59j0l7.1726j0j4&sourceid=chrome&ie=UTF-8';
    await page.goto(UrlConversion);
    await page.screenshot({ path: 'cotacao.png' });

    const resultado = await page.evaluate(() => {
        return document.querySelector('.a61j6.vk_gy.vk_sh.Hg3mWc').value;
    })

    console.log('O valor de R$1,00, quando convertido para dólar hoje é $' + resultado);
    await browser.close();
}

bot();