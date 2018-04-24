const Comments = require('./comments')

module.exports = {
	add:function(req,res){
		Comments.create({
			content:req.body.content,
			parent_id:req.body.parent_id,
			user_id:req.session.user_id
		}).then((err,result)=>{
			if(err) console.log(err)
			console.log(result)
			//res.json({})
		})
	}
}