const { io } = require('socket.io-client');
const s = io('https://sladmin.co.in:10001', { transports: ['websocket'], extraHeaders: { Origin: 'https://harmanbir55-glitch.github.io' } });
const seen = {};
s.on('connect', () => console.log('CONNECTED', s.id));
s.on('connect_error', e => console.log('CONNECT_ERROR', e.message));
s.onAny((ev, ...a) => { seen[ev] = (seen[ev] || 0) + 1; if (seen[ev] <= 2) console.log('EVENT', ev, JSON.stringify(a).slice(0, 4000)); });
setTimeout(() => { console.log('SEEN', JSON.stringify(seen)); process.exit(0); }, 12000);
