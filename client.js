let url = 'ws://10.6.13.86:3000'

if(process.argv.length > 2) {
  url = process.argv[2]
}

const WebSocket = require('ws')
const ws = new WebSocket(url)
ws.on('open', function open() {
    ws.on('message', function message(data) {
      console.log(`${data}`);
    });
});

