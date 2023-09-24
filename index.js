const express = require('express');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 8000;
app.use(express.json());

app.all('/*', (req, res, next) => {
    var payload = {};
    payload.headers = {};
    for (let i = 0; i < req.rawHeaders.length; i += 2) {
        payload.headers[`${req.rawHeaders[i]}`] = req.rawHeaders[i + 1];
    }
    payload.body = req.body;
    payload.query = req.query;
    payload.method = req.method;
    payload.path = req.path;

    res.send(payload);
});

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
