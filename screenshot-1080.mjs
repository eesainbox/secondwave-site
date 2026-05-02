import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const browser = await puppeteer.launch({
  executablePath: CHROME,
  args: ['--no-sandbox','--disable-setuid-sandbox'],
  defaultViewport: { width: 1440, height: 1080 }
});
const page = await browser.newPage();
await page.goto('http://localhost:3000', { waitUntil: 'networkidle2', timeout: 30000 });
const outFile = path.join(__dirname, 'temporary screenshots', 'screenshot-1440x1080-abovefold.png');
await page.screenshot({ path: outFile, fullPage: false });
await browser.close();
console.log('Saved: ' + outFile);
