import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const CHROME_PATHS = [
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
  process.env.LOCALAPPDATA + '\\Google\\Chrome\\Application\\chrome.exe',
];

const url   = process.argv[2] || 'http://localhost:3000';
const label = process.argv[3] || '';

const screenshotsDir = path.join(__dirname, 'temporary screenshots');
if (!fs.existsSync(screenshotsDir)) fs.mkdirSync(screenshotsDir, { recursive: true });

let n = 1;
while (fs.existsSync(path.join(screenshotsDir, `screenshot-${n}${label ? '-' + label : ''}.png`))) n++;
const outFile = path.join(screenshotsDir, `screenshot-${n}${label ? '-' + label : ''}.png`);

const executablePath = CHROME_PATHS.find(p => fs.existsSync(p));
if (!executablePath) { console.error('Chrome not found'); process.exit(1); }

const browser = await puppeteer.launch({
  executablePath,
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
  defaultViewport: { width: 1440, height: 900 },
});

const page = await browser.newPage();
await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });
await page.screenshot({ path: outFile, fullPage: true });
await browser.close();

console.log(`Saved: ${outFile}`);
