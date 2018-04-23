var express = require('express');
var app = express();
const session = require('express-session')
const bodyParser = require('body-parser')

app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000 } }))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'))
app.set('view engine', 'ejs')

const User = require('./public/users')
const Comments = require('./public/comments')
const loginHandle = require('./public/login')

app.post('/signUp',loginHandle.signUp)
app.post('/login',loginHandle.login)
app.get('/us',(req,res)=>{
    res.send(req.session.nickname)
})
app.get('/board',(req,res)=>{
    var username = req.session.nickname
    if(username){
        Comments.findAll({
            where:{parent_id:0},
            include: [{
                model: User,
                required: true
            }]
        }).then((comments)=>{
            res.render('board',{
                username,
                comments
            })
            console.log(comments)
        })
    }
    res.send('123')
})

app.listen(3000, () => {
    console.log('app main start')
})