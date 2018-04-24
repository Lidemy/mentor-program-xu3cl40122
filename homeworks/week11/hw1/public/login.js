const User = require('./users')
var session = require('express-session')
module.exports = {
    signUp:function(req,res){
        User.create({ 
            nickname: req.body.nickname,
            email: req.body.email,
            password:req.body.pwd })
            .then(() => {
                console.log('create!')
                req.session.nickname = req.body.nickname
                res.send('pass')     
            })
            .catch((err)=>{
                console.log(err)
                res.send(err)
            })
    },
    login:function(req,res){
        User.find({
            where:{
                email:req.body.email,
                password:req.body.pwd
            }
        }).then((data)=>{
            if(data){
                req.session.nickname = data.nickname
                req.session.user_id = data.user_id
                res.send('pass')
            }else{
                res.send('error')
            }
        }).catch((err)=>{
            console.log(err)
        })
    }



}