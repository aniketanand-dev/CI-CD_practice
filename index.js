// index.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('Hello from my-node-app!'));
app.get('/health', (req, res) => res.json({ status: 'ok' }));

app.listen(port, () => console.log(`Server listening on ${port}`));
