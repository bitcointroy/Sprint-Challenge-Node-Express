const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
const config = require('../config.js');

const app = express();
const PORT = config.port;
const STATUS_SUCCESS = 200;
const STATUS_USER_ERROR = 422;
const URI_GET_PRICE = config.coindesk.uri;

app.get('/', (req, res) => {
    res.send(
		'<p>Hello Troy!</p>' + '<p>The fun stuff is at ...</p>' // edit to show main folder for calls
	);   
});

app.listen(PORT, (err) => {
	if (err) {
		console.log(`Error starting server: ${err}`);
	} else {
		console.log(`App listening on port: ${PORT}`);
	}
});
