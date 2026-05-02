import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const browser = await puppeteer.launch({
  executablePath: CHROME,
  args: ['--no-sandbox','--disable-setuid-sandbox'],
  defaultViewport: { width: 1440, height: 900 }
});
const page = await browser.newPage();
await page.goto('http://localhost:3000', { waitUntil: 'networkidle2', timeout: 30000 });
await new Promise(r => setTimeout(r, 1500));
const el = await page.waitForSelector('section#logos');
const clip = await el.boundingBox();
const outFile = path.join(__dirname, 'temporary screenshots', 'screenshot-logos-check.png');
await page.screenshot({ path: outFile, clip: { x: clip.x, y: clip.y - 10, width: clip.width, height: clip.height + 20 } });
await browser.close();
console.log('Saved: ' + outFile);
