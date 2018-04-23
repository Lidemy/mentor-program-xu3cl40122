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
const conn = require('./connect').conn
const loginHandle = require('./public/login')

app.post('/signUp',loginHandle.signUp)
app.post('/login',loginHandle.login)
app.get('/us',(req,res)=>{
    res.send(req.session.nickname)
})
app.get('/board',(req,res)=>{
    conn.query("SELECT *FROM orm_comments JOIN orm_users ON orm_comments.user_id = orm_users.user_id  WHERE parent_id = 0 ORDER BY orm_comments.createdAt DESC",
    (err,results)=>{
        if(err) console.log(err)
        res.locals.cmmt = results
        
        // --- 串子留言 ---
        for(let i = 0; i < res.locals.cmmt.length; i++){
            sql = `SELECT *FROM orm_comments JOIN orm_users ON orm_comments.user_id = orm_users.user_id  WHERE parent_id = ${res.locals.cmmt[i].id} ORDER BY orm_comments.createdAt DESC`
            conn.query(sql,(err,results)=>{
                if(err) console.log(err)
                res.locals.cmmt[i].reply = results
                console.log(res.locals.cmmt[i].reply)
            })
        }
        console.log(res.locals.cmmt)
    })
    
    res.send('123')
})

app.listen(3000, () => {
    console.log('app main start')
})