const { Builder } = require('selenium-webdriver');
(async () => {
  const d = await new Builder().forBrowser('safari').build();
  try {
    await d.get('https://harmanbir55-glitch.github.io/Jewellery-App/');
    let st = '';
    for (let i = 0; i < 30; i++) {
      st = await d.executeScript("const e=document.querySelector('#pjLive');return e?e.dataset.st+' | '+e.innerText.replace(/\\s+/g,' ').trim():'none'");
      if (/^live|^down/.test(st)) break;
      await new Promise(r => setTimeout(r, 1000));
    }
    console.log('Safari live:', st);
    console.log('Safari header:', await d.executeScript("return document.querySelector('#rates .date').innerText"));
    console.log('Safari saved:', await d.executeScript("const a=JSON.parse(localStorage.getItem('mj_billing_v1_rates')||'[]');return JSON.stringify(a[a.length-1])"));
  } catch (e) { console.log('Safari ERROR', e.message) }
  await d.quit();
})();
