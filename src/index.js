
// There should be some vulnerabilies with the code
// - https://expressjs.com/en/advanced/security-updates.html

const express = require('express');
const logger = require('./logger');
const config = require('./config');

const app = express();
const port = config.PORT;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/files/:filePath', (req, res) => {
    const {filePath} = req;

    logger.info('Serving file path %s', filePath);
    res.sendFile(filePath);
});

app.listen(port, () => {
    logger.info('App listening on port %d', port);
});
