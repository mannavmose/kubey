'use strict';

const express = require('express');

// Constants
const PORT = 8062;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send(`Hello world from service two on host ${req.hostname}\n`);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
