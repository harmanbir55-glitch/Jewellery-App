const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch();
  const p = await b.newPage({ userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128 Safari/537.36' });
  p.on('request', r => console.log('REQ', r.resourceType(), r.method(), r.url()));
  p.on('response', async r => {
    const t = r.request().resourceType();
    if (['xhr', 'fetch', 'document', 'other'].includes(t)) {
      let body = '';
      try { body = (await r.text()).slice(0, 3000); } catch (e) { body = 'ERR ' + e.message; }
      console.log('RESP', r.status(), t, r.url(), '\n', body.replace(/\s+/g, ' '), '\n');
    }
  });
  p.on('websocket', ws => {
    console.log('WS', ws.url());
    let n = 0;
    ws.on('framereceived', f => { if (n++ < 8) console.log('WSFRAME', String(f.payload).slice(0, 2000)); });
    ws.on('framesent', f => console.log('WSSENT', String(f.payload).slice(0, 500)));
  });
  try { await p.goto('http://www.pjgoldbullion.in/', { waitUntil: 'domcontentloaded', timeout: 45000 }); } catch (e) { console.log('GOTO ERR', e.message); }
  await p.waitForTimeout(15000);
  for (const f of p.frames()) {
    console.log('FRAME', f.url());
    try { console.log((await f.evaluate(() => document.body ? document.body.innerText : '')).slice(0, 6000)); } catch (e) { console.log('FRAME ERR', e.message); }
  }
  const links = await p.evaluate(() => [...document.querySelectorAll('a')].map(a => a.textContent.trim() + ' -> ' + a.href));
  console.log('LINKS\n' + links.join('\n'));
  await p.screenshot({ path: 'shot.png', fullPage: true }).catch(() => {});
  await b.close();
})();
