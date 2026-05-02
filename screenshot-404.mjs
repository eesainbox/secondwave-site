import puppeteer from 'puppeteer-core';
const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const browser = await puppeteer.launch({
  executablePath: CHROME,
  args: ['--no-sandbox','--disable-setuid-sandbox'],
  defaultViewport: { width: 1440, height: 900 }
});
const page = await browser.newPage();
page.on('requestfailed', req => console.log('FAIL:', req.url()));
page.on('response', resp => { if (resp.status() >= 400) console.log('ERR', resp.status(), resp.url()); });
await page.goto('http://localhost:3000', { waitUntil: 'networkidle2', timeout: 30000 });
await new Promise(r => setTimeout(r, 1000));
await browser.close();
