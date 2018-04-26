const conn = require('../connect.js').conn

module.exports = {
    signUp:function(req,res){
        let sql = `INSERT INTO node_users (email, password, nickname)
                    VALUES (?, ?, ?)`
        conn.query(sql,[req.body.email, req.body.pwd, req.body.nickname],
        (err,results)=>{
            if(err) {
                console.log(err)
                res.send('nopass')
                return
            }
            res.send('pass')
        })
    },

    login:function(req,res){
        let sql = `SELECT * FROM node_users where email = ?`
        conn.query(sql,[req.body.email],(err,results)=>{
            if(err) throw err
            if (results.length != 0){
                if(results[0].password === req.body.pwd){
                    req.session.user = results[0].nickname
                    req.session.user_id = results[0].sid
                    res.send('pass')
                }else{
                    res.send('nopass')
                }
            }else{
                res.send('nopass')
            }
        })
    },
    check:function(req,res){
        let sql = `SELECT * FROM node_users where ${req.query.type} = ?`
        conn.query(sql,[req.query.value],(err,result)=>{
            if(err) {
                res.send('nopass')
                return
            }else if(result.length!=0){
                res.send('nopass')
                return
            }
            res.send('pass')
        })
    }

}