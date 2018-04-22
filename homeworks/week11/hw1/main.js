var express = require('express');
var app = express();
const session = require('express-session')
const bodyParser = require('body-parser')

app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000 } }))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'))

const User = require('./public/users')
const loginHandle = require('./public/login')

app.post('/signUp',loginHandle.signUp)
app.post('/login',loginHandle.login)
app.get('/us',(req,res)=>{
    res.send(req.session.nickname)
})
app.listen(3000, () => {
    console.log('app main start')
})