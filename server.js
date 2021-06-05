const express = require('express');
const serveStatic = require('serve-static');
const path = require('path');
const morgan = require('morgan');
// Constants
const PORT = 8080;

// App
const app = express();
app.use(morgan('dev'));

const serve = serveStatic(path.join(__dirname, 'components'), { index: ['index.html'] });
app.use('/', serve);

app.listen(PORT);
console.log(`Running`);
