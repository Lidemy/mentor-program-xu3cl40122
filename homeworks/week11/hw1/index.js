var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mysql = require('mysql')
app.use(express.static('public'))
// database data
var conn = mysql.createConnection({
    host: 'localhost',
    user: 'mentor_admin',
    password: 'mentor_admin123',
    database: 'mentor_program_db'
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// --- SIGN UP ---
app.route('/signUp')
    .post(function (req, res) {
        var us = req.body
        conn.connect((err) => {
            if (err) res.send(err)
            conn.query("INSERT INTO xu3cl40122_users (email, password, nickname) values(?,?,?)", [us.email, us.pwd, us.nickname], (err, result) => {
                if (err) res.send('帳號已有人使用');
                res.send('pass');
            })
        });
    });
// --- LOGIN ---
app.route('/logIn')
    .post(function (req, res) {
        var us = req.body
        conn.connect((err) => {
            if (err) res.send(err)
            conn.query("SELECT * FROM xu3cl40122_users where email = ?", [us.email], (err, result, field) => {
                if (err) res.send(err)
                if (Object.keys(us).length < 1) { res.send('帳號密碼錯誤') }
                else if (result[0]['password'] === us.pwd) {
                    res.send('pass')
                }
            })
        })

    })

app.listen(3000, () => {
            console.log('app start')
        })


