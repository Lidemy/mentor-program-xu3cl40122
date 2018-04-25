const conn = require('../connect.js').conn
const dateTime = require('node-datetime');

module.exports = {
	add:function(req,res){
		let sql = `INSERT INTO node_comment (parent_id, content, user_id) VALUES (?, ?, ?)`
		conn.query(sql,[req.body.parent_id, req.body.content, req.session.user_id],
			(err,result)=>{
				if((err)||(typeof(result) == "undefined")) {
					console.log(err)
					res.send(err)
					return
				}
				id = result.insertId
				var dt = dateTime.create();
				var time = dt.format('Y-m-d H:M:S')
				resData = {
					id: result.insertId,
					user: req.session.user,
					create_at:time
				}
				res.json(resData)
			})
		},
	edit:function(req,res){
		let sql = `SELECT * FROM node_comment WHERE comment_id = ?`
		conn.query(sql,[req.body.comment_id],(err,result)=>{
			if((err)||(typeof(result) == "undefined")) {
				console.log(err)
				res.send(err)
				return
			}
			var resData = {result:'pass'}
			if(result[0].user_id != req.session.user_id){
				resData.result = 'notSame'
				res.json(resData)
			}else{
				let sql = `UPDATE node_comment SET content = ? WHERE comment_id = ?`
				conn.query(sql,[req.body.content, req.body.comment_id], (err,result)=>{
					if(err) resData.result = 'error'
					res.json(resData)
				})
			}
		})
	},
	delete: function(req,res){
		let sql = `SELECT * FROM node_comment WHERE comment_id = ?`
		conn.query(sql,[req.body.comment_id],(err,result)=>{
			if((err)||(typeof(result) == "undefined")) {
				console.log(err)
				res.send(err)
				return
			}
			var resData = {result:'pass'}
			if(result[0].user_id != req.session.user_id){
				resData.result = 'notSame'
				res.json(resData)
			}else{
				let sql = `DELETE FROM node_comment WHERE comment_id =?`
				conn.query(sql,[req.body.comment_id],(err,result)=>{
					if (err) resData.result = 'error'
					res.json(resData)
				})
			}
		})
	}
}