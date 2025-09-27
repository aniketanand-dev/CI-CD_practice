// test.js
const assert = require('assert');
const http = require('http');

const options = { hostname: 'localhost', port: process.env.PORT || 3000, path: '/health', method: 'GET' };

const req = http.request(options, res => {
    assert.strictEqual(res.statusCode, 200);
    console.log('health endpoint ok');
    process.exit(0);
});

req.on('error', err => {
    console.error(err);
    process.exit(1);
});
req.end();
