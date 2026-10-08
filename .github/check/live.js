const pw = require('playwright');
const URL = 'https://harmanbir55-glitch.github.io/Jewellery-App/';
(async () => {
  for (const name of ['chromium', 'webkit', 'firefox']) {
    const b = await pw[name].launch();
    const p = await b.newPage();
    const errs = [];
    p.on('pageerror', e => errs.push('pageerror ' + e.message));
    p.on('console', m => { if (m.type() === 'error') errs.push('console ' + m.text().slice(0, 200)) });
    p.on('requestfailed', r => { if (/sladmin|socket/.test(r.url())) errs.push('failed ' + r.url().slice(0, 90) + ' ' + (r.failure() && r.failure().errorText)) });
    try {
      await p.goto(URL, { timeout: 45000 });
      await p.waitForSelector('#pjLive[data-st="live"]', { timeout: 30000 }).catch(() => {});
      await p.waitForTimeout(1500);
      const st = await p.$eval('#pjLive', e => e.dataset.st + ' | ' + e.innerText.replace(/\s+/g, ' ').trim());
      const head = await p.$eval('#rates .date', e => e.innerText);
      const r = await p.evaluate(() => JSON.parse(localStorage.getItem('mj_billing_v1_rates') || '[]').slice(-1)[0]);
      const chip = await p.$eval('#rateChip', e => e.innerText);
      console.log(`== ${name}\n  live: ${st}\n  header: ${head}\n  chip: ${chip}\n  saved: ${JSON.stringify(r)}`);
      await p.screenshot({ path: name + '.png', fullPage: true });
    } catch (e) { console.log('== ' + name + ' ERROR ' + e.message) }
    console.log('  errors: ' + JSON.stringify(errs.slice(0, 6)));
    await b.close();
  }
})();
