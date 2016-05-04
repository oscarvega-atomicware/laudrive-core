/**
 * AuthController
 *
 * @description :: Server-side logic for managing Auths
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var __users = [
	{user:"user", pass:"123" ,rol:"USR"},
	{user:"admin",pass:"qwe",rol:"ADM"},
]
module.exports = {
	login : function(req, res){
		var user = req.allParams();
		if(!user || !user.user || !user.pass)
			return res.json(403,"USER_AND_PASS_MANDATORY")
		var found = false;
		__users.forEach(function(userit){
			console.log(userit.user,user.user , userit , user.pass)
			if(userit.user === user.user && userit.pass === user.pass){
				found = true;
				return res.json({user:userit.user,rol:userit.rol});
			}	
		})
		if(!found)
			res.json(403,"BAD_LOGIN")
	}
};

