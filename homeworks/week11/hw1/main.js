var express = require('express');
var app = express();
const session = require('express-session')
const bodyParser = require('body-parser')


app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000 } }))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'))
app.set('view engine', 'ejs')

const conn = require('./connect').conn
const loginHandle = require('./public/login')
const commentHandle = require('./public/commentHandle.js')

app.post('/signUp',loginHandle.signUp)
app.post('/login',loginHandle.login)
app.post('/board/add',commentHandle.add) 
app.post('/board/edit', commentHandle.edit)


// 主頁面
app.get('/board',(req,res)=>{
    conn.query("SELECT *FROM node_comment JOIN node_users ON node_comment.user_id = node_users.sid  WHERE parent_id = 0 ORDER BY node_comment.create_at DESC",
    (err,results)=>{
        if(err) console.log(err)
        res.locals.cmmt = results
        res.locals.user = req.session.user
        res.locals.user_id = req.session.user_id
        // --- 串子留言 ---
        for(let i = 0; i < res.locals.cmmt.length; i++){
            sql = `SELECT *FROM node_comment JOIN node_users ON node_comment.user_id = node_users.sid  WHERE parent_id = ${res.locals.cmmt[i].comment_id} ORDER BY node_comment.create_at DESC`
            conn.query(sql,(err,results)=>{
                if(err) console.log(err)
                //console.log(results)
                res.locals.cmmt[i].reply = results
            })
        }
        setTimeout(()=>{
            res.render('board')
        },500)
        
    })    
})

app.listen(3000, () => {
    console.log('app main start')
})