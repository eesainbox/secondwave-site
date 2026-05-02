import puppeteer from 'puppeteer-core';
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
page.on('console', msg => console.log('CONSOLE:', msg.type(), msg.text()));
await page.goto('http://localhost:3000', { waitUntil: 'networkidle2', timeout: 30000 });
await new Promise(r => setTimeout(r, 1000));

// Check natural dimensions of each logo img
const dims = await page.evaluate(() => {
  return Array.from(document.querySelectorAll('.slider-track img')).slice(0,4).map(img => ({
    src: img.src,
    naturalW: img.naturalWidth,
    naturalH: img.naturalHeight,
    complete: img.complete,
    displayNone: window.getComputedStyle(img).display === 'none'
  }));
});
console.log('IMAGE DIMS:', JSON.stringify(dims, null, 2));
await browser.close();
