const express = require('express');
const path = require('path');

// Constants
const PORT = 8080;

// App
const app = express();

// const serve = serveStatic(path.join(__dirname, 'componentz'), { index: ['index.html'] });
// app.use('/', serve);
app.use('/', express.static(path.join(__dirname, 'componentz')));

app.listen(PORT);
console.log(`Running`);
