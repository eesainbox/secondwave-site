import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const CHROME_PATHS = [
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
];
const executablePath = CHROME_PATHS.find(p => fs.existsSync(p));
const browser = await puppeteer.launch({
  executablePath,
  args: ['--no-sandbox','--disable-setuid-sandbox'],
  defaultViewport: { width: 390, height: 844 }
});
const page = await browser.newPage();
await page.goto('http://localhost:3000', { waitUntil: 'networkidle2', timeout: 30000 });
const outFile = path.join(__dirname, 'temporary screenshots', 'screenshot-mobile-390.png');
await page.screenshot({ path: outFile, fullPage: true });
await browser.close();
console.log('Saved: ' + outFile);
