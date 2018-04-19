var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(express.static('public'))

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.post('/ajax', function (req, res) {
    res.send(req.body.pwd)
});

app.listen(3000,()=>{
    console.log('app start')
})