var express = require('express');
var app = express();

let bodyParser = require('body-parser');
app.use(bodyParser.json());


const PORT = process.env.PORT || 5500;
var server = app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`); 
});

app.get('/api/', function (req, res) {

    res.status(200).send('Hello, world 5500!').end();

});