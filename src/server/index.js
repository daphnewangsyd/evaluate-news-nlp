let path = require('path');
const express = require('express');
const cors = require('cors');
const mockAPIResponse = require('./mockAPI.js');
const aylien = require("aylien_textapi");
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

dotenv.config();
// set aylien API credentias
const textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
});

const app = express();
app.use(bodyParser.json());
app.use(express.static('dist'));
app.use(cors());
console.log(__dirname);

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
});

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
});

app.post('/test', function (req, res) {
    console.log(req.body);
    textapi.sentiment({
        'url': req.body.data
    }, function(error, response) {
        if (error === null) {
            console.log(response);
            res.send(response);
        } else {
            console.error(error);
            res.status(500);
            res.send(error);
        }
    });
});
