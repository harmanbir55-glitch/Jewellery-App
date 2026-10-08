const { chromium } = require('playwright');
const html = (opts) => `<!doctype html><script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/4.7.5/socket.io.min.js"></script>
<script>
window.log=[];const seen={};
const s=io('https://sladmin.co.in:10001',${opts});
s.on('connect',()=>{log.push('CONNECTED '+s.io.engine.transport.name);s.emit('Client','punjabbullion')});
s.on('connect_error',e=>log.push('CONNECT_ERROR '+e.message+' '+(e.description&&e.description.message||'')));
s.onAny((ev,...a)=>{seen[ev]=(seen[ev]||0)+1;if(seen[ev]<=1)log.push('EVENT '+ev+' '+JSON.stringify(a).slice(0,ev==='message'?30000:2500))});
setInterval(()=>{window.seen=seen},500);
</script>`;
(async () => {
  const b = await chromium.launch();
  for (const opts of ['{}', "{transports:['websocket']}"]) {
    const ctx = await b.newContext();
    const p = await ctx.newPage();
    await p.route('https://harmanbir55-glitch.github.io/test.html', r => r.fulfill({ status: 200, contentType: 'text/html', body: html(opts) }));
    p.on('console', m => console.log('CONSOLE', m.text().slice(0, 300)));
    p.on('requestfailed', r => console.log('FAILED', r.url().slice(0, 120), r.failure() && r.failure().errorText));
    await p.goto('https://harmanbir55-glitch.github.io/test.html');
    await p.waitForTimeout(10000);
    console.log('=== opts', opts);
    console.log((await p.evaluate(() => window.log)).join('\n'));
    console.log('SEEN', JSON.stringify(await p.evaluate(() => window.seen)));
    await ctx.close();
  }
  await b.close();
})();
