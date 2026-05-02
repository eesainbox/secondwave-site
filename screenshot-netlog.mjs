import puppeteer from 'puppeteer-core';
import { fileURLToPath } from 'url';
const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const browser = await puppeteer.launch({
  executablePath: CHROME,
  args: ['--no-sandbox','--disable-setuid-sandbox'],
  defaultViewport: { width: 1440, height: 900 }
});
const page = await browser.newPage();
const failed = [];
const ok = [];
page.on('requestfailed', req => {
  if (req.url().includes('brand_assets')) failed.push(req.url() + ' => ' + req.failure().errorText);
});
page.on('response', async resp => {
  if (resp.url().includes('brand_assets')) ok.push(resp.url() + ' => ' + resp.status());
});
await page.goto('http://localhost:3000', { waitUntil: 'networkidle2', timeout: 30000 });
await new Promise(r => setTimeout(r, 1000));
console.log('--- OK ---');
ok.forEach(u => console.log(u));
console.log('--- FAILED ---');
failed.forEach(u => console.log(u));
await browser.close();
