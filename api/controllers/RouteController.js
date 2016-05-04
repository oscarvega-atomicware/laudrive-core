/**
 * RouteController
 *
 * @description :: Server-side logic for managing Routes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	create : function(req,res){
		var route = req.allParams();
		if(!route || !route.user || !route.user.user || !route.start || !route.start.lat || !route.start.lon ||  !route.end || !route.end.lat || !route.end.lon)
			return res.json(403,"MISSING_USER")

		Route.create({
			user:route.user.user,
			start:route.start,
			end:route.end
		}).then(function(route){
			res.json(route)
		}).catch(function(err){
			console.log(err)
			res.json(500,"Error")
		})
	},
	find : function(req,res){

		Route.find().then(function(data){
			
			res.json(data)
		})
	},
	delete : function(req,res){
		var id = req.param('id');
		if(!id)return res.json(403,"MISSING_ID")
		Route.destroy({id:id}).then(function(data){
			res.json(data)
		})
	}
};

