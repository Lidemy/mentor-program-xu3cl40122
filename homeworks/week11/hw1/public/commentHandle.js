const conn = require('../connect.js').conn
const dateTime = require('node-datetime');

module.exports = {
	add:function(req,res){
		let sql = `INSERT INTO node_comment (parent_id, content, user_id) VALUES (?, ?, ?)`
		conn.query(sql,[req.body.parent_id, req.body.content, req.session.user_id],
			(err,result)=>{
				if (err) console.log(err)
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
		}
}