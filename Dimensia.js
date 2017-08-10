var bodyParser = require('body-parser');
const express = require('express');
var path    = require("path");
const app = express();

var urlencodedParser = bodyParser.urlencoded({extended: false});
app.use("/public", express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname+'/public/Dimensia.html'));
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
});