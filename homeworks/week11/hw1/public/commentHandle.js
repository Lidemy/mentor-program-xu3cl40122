const conn = require('../connect.js').conn

module.exports = {
	add:function(req,res){
		Comments.create({
			content:req.body.content,
			parent_id:req.body.parent_id,
			user_id:req.session.user_id
		}).then((data)=>{
			res.json(data.get({plain: true}))
		}).catch(function(error) {
        res.json({error:error, stackError:error.stack});
    });
	}
}